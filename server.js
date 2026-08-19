const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:3000' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ─── Eligibility Checker API ───────────────────────────────────────────────────
function checkEligibility(data) {
  const { course, age, education, mathsMarks, physicsMarks, vision, hasCriminalRecord } = data
  const numAge = parseInt(age)
  const reasons = []
  let eligible = true

  if (hasCriminalRecord === 'yes') {
    return {
      eligible: false,
      course,
      reasons: ['Criminal record disqualifies from merchant navy enrollment per DGS guidelines.'],
    }
  }

  if (course === 'GPS Rating') {
    const validEdu = ['10th', '12th_pcm', '12th_pcb', 'diploma', 'graduate']
    if (!validEdu.includes(education)) {
      eligible = false
      reasons.push('GPS Rating requires minimum 10th standard pass.')
    } else {
      reasons.push('Education qualification meets GPS Rating requirement. ✓')
    }
    if (numAge < 17 || numAge > 25) {
      eligible = false
      reasons.push(`Age ${numAge} is outside the eligible range of 17–25 years.`)
    } else {
      reasons.push(`Age ${numAge} is within the eligible range (17–25 years). ✓`)
    }
    if (vision === 'glasses_high') {
      eligible = eligible === true ? 'maybe' : eligible
      reasons.push('High-power corrective lenses may require additional medical board clearance.')
    } else {
      reasons.push('Vision requirement appears to be met. ✓')
    }

  } else if (course === 'DNS Program') {
    const validEdu = ['12th_pcm', 'diploma', 'graduate']
    if (!validEdu.includes(education)) {
      eligible = false
      reasons.push('DNS Program requires 12th pass with Physics, Chemistry & Mathematics.')
    } else {
      const maths = parseInt(mathsMarks) || 0
      const physics = parseInt(physicsMarks) || 0
      if (maths < 50 || physics < 50) {
        eligible = eligible === true ? 'maybe' : eligible
        reasons.push(`Maths (${maths}%) and Physics (${physics}%) should be 50%+ for DNS. Consider improving scores.`)
      } else {
        reasons.push(`PCM marks: Maths ${maths}%, Physics ${physics}% — meet DNS requirements. ✓`)
      }
    }
    if (numAge < 17 || numAge > 25) {
      eligible = false
      reasons.push(`Age ${numAge} is outside the eligible range (17–25 years).`)
    } else {
      reasons.push(`Age ${numAge} is within eligible range. ✓`)
    }

  } else if (course === 'ETO Course') {
    const validEdu = ['diploma', 'graduate']
    if (!validEdu.includes(education)) {
      eligible = false
      reasons.push('ETO Course requires a Diploma or B.E./B.Tech in Electrical or Electronics.')
    } else {
      reasons.push('Education qualification (Diploma/Graduate) meets ETO requirements. ✓')
    }
    if (numAge < 18 || numAge > 28) {
      eligible = false
      reasons.push(`Age ${numAge} is outside the eligible range (18–28 years).`)
    } else {
      reasons.push(`Age ${numAge} is within eligible range. ✓`)
    }

  } else if (course === 'Engine Rating') {
    const validEdu = ['10th', '12th_pcm', '12th_pcb', 'diploma', 'graduate']
    if (!validEdu.includes(education)) {
      eligible = false
      reasons.push('Engine Rating requires 10th pass with ITI certification.')
    } else {
      reasons.push('Education qualification meets Engine Rating requirement. ✓')
    }
    if (numAge < 17 || numAge > 25) {
      eligible = false
      reasons.push(`Age ${numAge} is outside the eligible range (17–25 years).`)
    } else {
      reasons.push(`Age ${numAge} is within eligible range. ✓`)
    }
  }

  return { eligible, course, reasons }
}

app.post('/api/eligibility', (req, res) => {
  try {
    const result = checkEligibility(req.body)
    // Log lead (in production, save to DB)
    if (req.body.name && req.body.phone) {
      console.log(`[LEAD] ${req.body.name} | ${req.body.phone} | Course: ${req.body.course}`)
    }
    res.json(result)
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

// ─── BMI Calculator API ────────────────────────────────────────────────────────
app.post('/api/bmi', (req, res) => {
  try {
    const { height, weight, unit } = req.body
    let bmi
    if (unit === 'metric') {
      const hm = parseFloat(height) / 100
      bmi = parseFloat(weight) / (hm * hm)
    } else {
      bmi = (703 * parseFloat(weight)) / (parseFloat(height) * parseFloat(height))
    }
    bmi = Math.round(bmi * 10) / 10
    let category, navyStatus
    if (bmi < 18.5) { category = 'Underweight'; navyStatus = 'Conditional — may need medical clearance' }
    else if (bmi < 25) { category = 'Normal'; navyStatus = 'Excellent — meets merchant navy standards' }
    else if (bmi < 30) { category = 'Overweight'; navyStatus = 'Marginal — fitness improvement recommended' }
    else { category = 'Obese'; navyStatus = 'Disqualifying — consult doctor before applying' }
    res.json({ bmi, category, navyStatus })
  } catch {
    res.status(500).json({ error: 'Calculation error' })
  }
})

// ─── Contact Form API ──────────────────────────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body
    console.log(`[CONTACT] ${name} | ${phone} | ${email} | Course: ${course}`)
    console.log(`Message: ${message}`)

    // In production: send email via Nodemailer
    // For demo, we simulate a 300ms processing delay
    await new Promise(resolve => setTimeout(resolve, 300))

    res.json({
      success: true,
      message: 'Thank you! Our team will contact you within 24 hours.',
    })
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit contact form.' })
  }
})

// ─── Health check ──────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString(), service: "Officer's Wing API" })
})

// ─── Serve static build in production ─────────────────────────────────────────
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`\n🚢 Officer's Wing API running on http://localhost:${PORT}`)
  console.log(`📡 Health: http://localhost:${PORT}/api/health\n`)
})
