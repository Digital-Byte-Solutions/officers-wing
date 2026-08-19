import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  GraduationCap, BookOpen, Bell, Award, TrendingUp, Clock,
  CheckCircle, Calendar, FileText, Users, Star, ArrowLeft,
  BarChart3, Target, Zap, Ship, Download
} from 'lucide-react'
import KeycapButton from '../components/KeycapButton'

const student = {
  name: 'Rahul Verma',
  id: 'OWA-2024-1842',
  course: 'DNS Program',
  batch: 'Jan 2024 – Dec 2024',
  progress: 68,
  gpa: 8.4,
  attendance: 92,
  rank: 3,
  totalStudents: 42,
  avatar: '🧑‍✈️',
}

const subjects = [
  { name: 'Navigation & Meteorology', marks: 85, max: 100, color: '#4ADE80' },
  { name: 'Ship Management', marks: 78, max: 100, color: '#60A5FA' },
  { name: 'Maritime Law & COLREG', marks: 72, max: 100, color: '#C9A84C' },
  { name: 'GMDSS Communication', marks: 90, max: 100, color: '#A78BFA' },
  { name: 'Cargo Operations', marks: 68, max: 100, color: '#F472B6' },
  { name: 'Bridge Watchkeeping', marks: 82, max: 100, color: '#34D399' },
]

const notifications = [
  { id: 1, type: 'exam', text: 'Navigation exam scheduled for August 25, 2026', time: '2 hours ago', read: false },
  { id: 2, type: 'assignment', text: 'COLREG assignment due in 3 days', time: '1 day ago', read: false },
  { id: 3, type: 'placement', text: 'Maersk campus recruitment drive on Sept 1', time: '2 days ago', read: true },
  { id: 4, type: 'result', text: 'GMDSS mid-term result published — 90/100', time: '3 days ago', read: true },
]

const upcomingEvents = [
  { date: 'Aug 25', event: 'Navigation & Meteorology Exam', type: 'exam' },
  { date: 'Aug 28', event: 'Ship Simulator Practice Session', type: 'lab' },
  { date: 'Sep 1', event: 'Maersk Recruitment Drive', type: 'placement' },
  { date: 'Sep 5', event: 'Medical Fitness Test', type: 'medical' },
  { date: 'Sep 10', event: 'GMDSS Practical Assessment', type: 'exam' },
]

const eventColors = { exam: '#F87171', lab: '#60A5FA', placement: '#4ADE80', medical: '#C9A84C' }

function ProgressRing({ value, size = 100, strokeWidth = 8, color = '#C9A84C' }) {
  const r = (size - strokeWidth) / 2
  const circ = 2 * Math.PI * r
  const offset = circ - (value / 100) * circ
  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={strokeWidth} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={strokeWidth}
        strokeDasharray={circ} strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 1s ease' }}
      />
    </svg>
  )
}

export default function StudentDashboard() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')
  const [notifs, setNotifs] = useState(notifications)
  const unread = notifs.filter(n => !n.read).length

  const markAllRead = () => setNotifs(notifs.map(n => ({ ...n, read: true })))

  return (
    <div style={{ minHeight: '100vh', background: '#020B18', paddingTop: '80px' }}>
      {/* Top bar */}
      <div style={{
        background: 'rgba(6,15,30,0.95)',
        borderBottom: '1px solid rgba(201,168,76,0.15)',
        padding: '20px 0',
        backdropFilter: 'blur(20px)',
        position: 'sticky', top: '72px', zIndex: 100,
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <KeycapButton
              variant="purple"
              size="sm"
              icon={<ArrowLeft size={15} />}
              onClick={() => navigate('/')}
            >
              Back to Home
            </KeycapButton>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>Student Dashboard</div>
              <div style={{ fontSize: '0.75rem', color: '#5C6780' }}>ID: {student.id}</div>
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '4px', background: 'rgba(13,32,69,0.5)', padding: '4px', borderRadius: '10px' }}>
            {['overview', 'grades', 'schedule', 'notifications'].map(tab => (
              <button key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '7px 16px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                  background: activeTab === tab ? 'linear-gradient(135deg,#C9A84C,#F0D18A)' : 'transparent',
                  color: activeTab === tab ? '#020B18' : '#9BA5B8',
                  fontWeight: activeTab === tab ? 700 : 400,
                  fontSize: '0.83rem', textTransform: 'capitalize',
                  fontFamily: 'Space Grotesk,sans-serif',
                  position: 'relative',
                }}
              >
                {tab}
                {tab === 'notifications' && unread > 0 && (
                  <span style={{
                    position: 'absolute', top: '-2px', right: '-2px',
                    background: '#F87171', color: '#fff',
                    borderRadius: '50%', width: '16px', height: '16px',
                    fontSize: '0.6rem', fontWeight: 700,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{unread}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '40px 24px' }}>

        {/* === OVERVIEW TAB === */}
        {activeTab === 'overview' && (
          <>
            {/* Profile card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(13,32,69,0.8), rgba(26,58,114,0.3))',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '24px',
              padding: '40px',
              marginBottom: '24px',
              display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap',
            }}>
              <div style={{
                width: '90px', height: '90px',
                background: 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.1))',
                border: '3px solid rgba(201,168,76,0.4)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '3rem', flexShrink: 0,
              }}>
                {student.avatar}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.8rem', fontWeight: 800, marginBottom: '4px' }}>
                  Welcome back, {student.name}!
                </div>
                <div style={{ color: '#9BA5B8', marginBottom: '12px', fontSize: '0.9rem' }}>
                  {student.course} • {student.batch}
                </div>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <span className="badge badge-gold"><Star size={12} /> Rank #{student.rank} of {student.totalStudents}</span>
                  <span className="badge badge-green"><CheckCircle size={12} /> Active Student</span>
                </div>
              </div>
              {/* Overall progress ring */}
              <div style={{ textAlign: 'center', flexShrink: 0 }}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <ProgressRing value={student.progress} size={110} strokeWidth={10} color="#C9A84C" />
                  <div style={{
                    position: 'absolute', top: '50%', left: '50%',
                    transform: 'translate(-50%,-50%)',
                    textAlign: 'center',
                  }}>
                    <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#C9A84C' }}>{student.progress}%</div>
                    <div style={{ fontSize: '0.65rem', color: '#9BA5B8' }}>Complete</div>
                  </div>
                </div>
                <div style={{ fontSize: '0.75rem', color: '#9BA5B8', marginTop: '4px' }}>Course Progress</div>
              </div>
            </div>

            {/* Stat cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
              {[
                { icon: <BarChart3 size={20} />, label: 'GPA / CGPA', value: `${student.gpa}/10`, color: '#4ADE80' },
                { icon: <Users size={20} />, label: 'Attendance', value: `${student.attendance}%`, color: '#60A5FA' },
                { icon: <Award size={20} />, label: 'Class Rank', value: `#${student.rank}`, color: '#C9A84C' },
                { icon: <BookOpen size={20} />, label: 'Subjects', value: `${subjects.length} Active`, color: '#A78BFA' },
              ].map(stat => (
                <div key={stat.label} className="glass card-hover" style={{ borderRadius: '16px', padding: '24px' }}>
                  <div style={{ color: stat.color, marginBottom: '12px' }}>{stat.icon}</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: stat.color, lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ fontSize: '0.8rem', color: '#5C6780', marginTop: '6px' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Subject progress bars */}
            <div className="glass" style={{ borderRadius: '20px', padding: '32px', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Target size={18} color="#C9A84C" /> Subject Performance
              </h3>
              {subjects.map(sub => (
                <div key={sub.name} style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.875rem', color: '#9BA5B8' }}>{sub.name}</span>
                    <span style={{ fontSize: '0.875rem', fontWeight: 700, color: sub.color }}>{sub.marks}/{sub.max}</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{
                      height: '100%',
                      width: `${(sub.marks / sub.max) * 100}%`,
                      background: `linear-gradient(90deg, ${sub.color}80, ${sub.color})`,
                      borderRadius: '4px',
                      transition: 'width 1s ease',
                    }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Upcoming events */}
            <div className="glass" style={{ borderRadius: '20px', padding: '32px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Calendar size={18} color="#C9A84C" /> Upcoming Events
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {upcomingEvents.map((ev, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: '16px', alignItems: 'center',
                    padding: '14px 16px', borderRadius: '12px',
                    background: 'rgba(13,32,69,0.4)',
                    border: `1px solid ${eventColors[ev.type]}20`,
                  }}>
                    <div style={{
                      background: `${eventColors[ev.type]}20`,
                      border: `1px solid ${eventColors[ev.type]}40`,
                      color: eventColors[ev.type],
                      borderRadius: '10px', padding: '6px 10px',
                      fontSize: '0.75rem', fontWeight: 700,
                      minWidth: '52px', textAlign: 'center', flexShrink: 0,
                    }}>
                      {ev.date}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#9BA5B8' }}>{ev.event}</div>
                    <div style={{ marginLeft: 'auto' }}>
                      <span style={{
                        background: `${eventColors[ev.type]}15`,
                        color: eventColors[ev.type],
                        padding: '3px 10px', borderRadius: '50px',
                        fontSize: '0.7rem', fontWeight: 600,
                        textTransform: 'capitalize',
                      }}>
                        {ev.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* === GRADES TAB === */}
        {activeTab === 'grades' && (
          <div className="glass" style={{ borderRadius: '24px', padding: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Award size={22} color="#C9A84C" /> Academic Transcript
              </h3>
              <KeycapButton
                variant="gold"
                size="sm"
                icon={<Download size={14} />}
                onClick={() => alert('Transcript PDF downloaded')}
              >
                Download PDF
              </KeycapButton>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 8px' }}>
                <thead>
                  <tr>
                    {['Subject', 'Mid-Term', 'Assignment', 'Final', 'Total', 'Grade', 'Status'].map(h => (
                      <th key={h} style={{
                        textAlign: 'left', padding: '10px 16px',
                        fontSize: '0.75rem', fontWeight: 700,
                        color: '#5C6780', letterSpacing: '1px', textTransform: 'uppercase',
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {subjects.map(sub => {
                    const midterm = Math.round(sub.marks * 0.35)
                    const assignment = Math.round(sub.marks * 0.2)
                    const final = Math.round(sub.marks * 0.45)
                    const pct = sub.marks
                    const grade = pct >= 90 ? 'A+' : pct >= 80 ? 'A' : pct >= 70 ? 'B+' : pct >= 60 ? 'B' : 'C'
                    return (
                      <tr key={sub.name} style={{
                        background: 'rgba(13,32,69,0.4)',
                      }}>
                        <td style={{ padding: '14px 16px', borderRadius: '12px 0 0 12px', fontSize: '0.875rem', color: '#9BA5B8' }}>
                          {sub.name}
                        </td>
                        <td style={{ padding: '14px 16px', fontSize: '0.875rem', color: '#fff' }}>{midterm}</td>
                        <td style={{ padding: '14px 16px', fontSize: '0.875rem', color: '#fff' }}>{assignment}</td>
                        <td style={{ padding: '14px 16px', fontSize: '0.875rem', color: '#fff' }}>{final}</td>
                        <td style={{ padding: '14px 16px', fontSize: '0.875rem', fontWeight: 700, color: sub.color }}>{sub.marks}/100</td>
                        <td style={{ padding: '14px 16px' }}>
                          <span style={{
                            background: `${sub.color}20`, color: sub.color,
                            border: `1px solid ${sub.color}40`,
                            padding: '4px 12px', borderRadius: '50px',
                            fontSize: '0.78rem', fontWeight: 700,
                          }}>{grade}</span>
                        </td>
                        <td style={{ padding: '14px 16px', borderRadius: '0 12px 12px 0' }}>
                          <span style={{ color: '#4ADE80', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <CheckCircle size={12} /> Pass
                          </span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            <div style={{
              marginTop: '24px', padding: '20px 24px',
              background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '14px', display: 'flex', gap: '32px', flexWrap: 'wrap',
            }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#5C6780', marginBottom: '4px' }}>CGPA</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#C9A84C' }}>{student.gpa}/10.0</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#5C6780', marginBottom: '4px' }}>Overall %</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#4ADE80' }}>
                  {Math.round(subjects.reduce((a, s) => a + s.marks, 0) / subjects.length)}%
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#5C6780', marginBottom: '4px' }}>Class Rank</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#60A5FA' }}>#{student.rank}/{student.totalStudents}</div>
              </div>
            </div>
          </div>
        )}

        {/* === SCHEDULE TAB === */}
        {activeTab === 'schedule' && (
          <div className="glass" style={{ borderRadius: '24px', padding: '40px' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Calendar size={22} color="#C9A84C" /> Weekly Schedule
            </h3>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, di) => {
              const schedule = [
                ['Navigation & Met. (9AM–11AM)', 'GMDSS Lab (2PM–4PM)'],
                ['Ship Management (9AM–11AM)', 'Maritime Law (12PM–2PM)'],
                ['Bridge Simulator (9AM–1PM)'],
                ['Cargo Operations (10AM–12PM)', 'Watchkeeping (2PM–4PM)'],
                ['COLREG Theory (9AM–11AM)', 'Exam Prep (2PM–5PM)'],
                ['Physical Fitness (8AM–10AM)'],
              ]
              return (
                <div key={day} style={{
                  display: 'flex', gap: '20px', alignItems: 'flex-start',
                  marginBottom: '20px', paddingBottom: '20px',
                  borderBottom: di < 5 ? '1px solid rgba(201,168,76,0.08)' : 'none',
                }}>
                  <div style={{
                    minWidth: '100px', color: di === new Date().getDay() - 1 ? '#C9A84C' : '#9BA5B8',
                    fontWeight: di === new Date().getDay() - 1 ? 700 : 400,
                    fontSize: '0.875rem',
                  }}>
                    {day}
                    {di === new Date().getDay() - 1 && (
                      <div style={{ fontSize: '0.65rem', color: '#C9A84C', marginTop: '2px' }}>TODAY</div>
                    )}
                  </div>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {schedule[di].map(cls => (
                      <span key={cls} style={{
                        background: 'rgba(13,32,69,0.6)',
                        border: '1px solid rgba(201,168,76,0.15)',
                        borderRadius: '10px', padding: '8px 14px',
                        fontSize: '0.8rem', color: '#9BA5B8',
                      }}>
                        📚 {cls}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* === NOTIFICATIONS TAB === */}
        {activeTab === 'notifications' && (
          <div className="glass" style={{ borderRadius: '24px', padding: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Bell size={22} color="#C9A84C" /> Notifications
                {unread > 0 && (
                  <span style={{
                    background: '#F87171', color: '#fff',
                    borderRadius: '50px', padding: '2px 10px',
                    fontSize: '0.75rem', fontWeight: 700,
                  }}>{unread} new</span>
                )}
              </h3>
              {unread > 0 && (
                <button onClick={markAllRead} style={{
                  background: 'none', border: '1px solid rgba(201,168,76,0.3)',
                  borderRadius: '8px', padding: '8px 14px', cursor: 'pointer',
                  color: '#C9A84C', fontSize: '0.8rem',
                  fontFamily: 'Space Grotesk,sans-serif',
                }}>
                  Mark all read
                </button>
              )}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {notifs.map(n => (
                <div
                  key={n.id}
                  onClick={() => setNotifs(notifs.map(x => x.id === n.id ? { ...x, read: true } : x))}
                  style={{
                    padding: '18px 20px', borderRadius: '14px',
                    background: n.read ? 'rgba(13,32,69,0.3)' : 'rgba(13,32,69,0.6)',
                    border: n.read ? '1px solid rgba(201,168,76,0.08)' : '1px solid rgba(201,168,76,0.25)',
                    cursor: 'pointer', transition: 'all 0.2s',
                    display: 'flex', gap: '14px', alignItems: 'flex-start',
                  }}
                >
                  <div style={{
                    width: '8px', height: '8px', borderRadius: '50%',
                    background: n.read ? 'transparent' : '#C9A84C',
                    border: n.read ? '1px solid rgba(201,168,76,0.3)' : 'none',
                    marginTop: '6px', flexShrink: 0,
                  }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.875rem', color: n.read ? '#9BA5B8' : '#fff', marginBottom: '4px' }}>{n.text}</div>
                    <div style={{ fontSize: '0.75rem', color: '#5C6780' }}>{n.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
