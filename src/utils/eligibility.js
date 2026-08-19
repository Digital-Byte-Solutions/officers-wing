// ============================================================
// Eligibility utils — client-side fallback logic (mirrors server)
// ============================================================

const VALID_EDU = {
  GPS:    ['10th', '12th_pcm', '12th_pcb', 'diploma', 'graduate'],
  DNS:    ['12th_pcm', 'diploma', 'graduate'],
  ETO:    ['diploma', 'graduate'],
  Engine: ['10th', '12th_pcm', '12th_pcb', 'diploma', 'graduate'],
}

const AGE_RANGE = {
  GPS:    { min: 17, max: 25 },
  DNS:    { min: 17, max: 25 },
  ETO:    { min: 18, max: 28 },
  Engine: { min: 17, max: 25 },
}

const COURSE_KEY = {
  'GPS Rating':    'GPS',
  'DNS Program':   'DNS',
  'ETO Course':    'ETO',
  'Engine Rating': 'Engine',
}

// ── Helpers ───────────────────────────────────────────────────

function addReason(reasons, message, passed) {
  reasons.push(passed ? `${message} ✓` : message)
  return passed
}

function checkAge(age, min, max, reasons) {
  return addReason(
    reasons,
    age < min || age > max
      ? `Age ${age} is outside the eligible range (${min}–${max} years).`
      : `Age ${age} is within the eligible range (${min}–${max} years).`,
    age >= min && age <= max,
  )
}

// ── Main function ─────────────────────────────────────────────

/**
 * Run eligibility checks client-side.
 * @param {object} form
 * @returns {{ eligible: boolean|'maybe', course: string, reasons: string[] }}
 */
export function checkEligibilityLocal(form) {
  const {
    course,
    age,
    education,
    mathsMarks,
    physicsMarks,
    vision,
    hasCriminalRecord,
  } = form

  const numAge  = parseInt(age, 10)
  const reasons = []
  let   eligible = true
  const key      = COURSE_KEY[course]

  // Criminal record — absolute disqualifier
  if (hasCriminalRecord === 'yes') {
    return {
      eligible: false,
      course,
      reasons: ['Criminal record disqualifies from merchant navy enrollment per DGS guidelines.'],
    }
  }

  // Education check
  const validEdu = VALID_EDU[key] ?? []
  if (!validEdu.includes(education)) {
    eligible = false
    const messages = {
      GPS:    'GPS Rating requires minimum 10th standard pass.',
      DNS:    'DNS requires 12th pass with Physics, Chemistry & Mathematics.',
      ETO:    'ETO Course requires a Diploma or B.E./B.Tech in Electrical/Electronics.',
      Engine: 'Engine Rating requires 10th pass with ITI certification.',
    }
    reasons.push(messages[key])
  } else {
    reasons.push('Education qualification meets course requirement. ✓')

    // DNS — additional PCM marks check
    if (key === 'DNS') {
      const maths   = parseInt(mathsMarks, 10) || 0
      const physics = parseInt(physicsMarks, 10) || 0
      if (maths < 50 || physics < 50) {
        if (eligible) eligible = 'maybe'
        reasons.push(`Maths (${maths}%) and Physics (${physics}%) should be 50%+ for DNS.`)
      } else {
        reasons.push(`PCM marks: Maths ${maths}%, Physics ${physics}% meet DNS requirements. ✓`)
      }
    }
  }

  // Age check
  const { min, max } = AGE_RANGE[key]
  if (!checkAge(numAge, min, max, reasons)) eligible = false

  // Vision check (GPS only)
  if (key === 'GPS' && vision === 'glasses_high') {
    if (eligible) eligible = 'maybe'
    reasons.push('High-power corrective lenses may require additional medical board clearance.')
  } else if (key === 'GPS') {
    reasons.push('Vision requirement appears to be met. ✓')
  }

  return { eligible, course, reasons }
}
