// 9-week host calendar · Fridays 19:00–20:00
// English    (9 hosts, one each): Daniel → Luciana → Alejandro → Esau → Alessandro → Rocio → Jhon → Leonel → Alexander
// Spanish    (4 hosts, cycles every 4): Natali → Lucas → Emiliano → Jose → repeat
// Portuguese (2 hosts, alternates): Carlos daSilva → Larissa Andrade → repeat
// French     (1 host): Fernando Pinto every week
const ALL_ROWS = [
  { date: 'May 22', en: 'Daniel Lopez',         es: 'Natali Gaviria',   pt: 'Carlos daSilva',  fr: 'Fernando Pinto' },
  { date: 'May 29', en: 'Luciana Flores',        es: 'Lucas Rodriguez',  pt: 'Larissa Andrade', fr: 'Fernando Pinto' },
  { date: 'Jun 5',  en: 'Alejandro de Oliveira', es: 'Emiliano Schmitt', pt: 'Carlos daSilva',  fr: 'Fernando Pinto' },
  { date: 'Jun 12', en: 'Esau Montiel',          es: 'Jose Carranza',    pt: 'Larissa Andrade', fr: 'Fernando Pinto' },
  { date: 'Jun 19', en: 'Alessandro Ruiz',       es: 'Natali Gaviria',   pt: 'Carlos daSilva',  fr: 'Fernando Pinto' },
  { date: 'Jun 26', vacation: true },
  { date: 'Jul 3',  vacation: true },
  { date: 'Jul 10', en: 'Rocio Lucero',          es: 'Lucas Rodriguez',  pt: 'Larissa Andrade', fr: 'Fernando Pinto' },
  { date: 'Jul 17', en: 'Jhon Pedraza',          es: 'Emiliano Schmitt', pt: 'Carlos daSilva',  fr: 'Fernando Pinto' },
  { date: 'Jul 24', en: 'Leonel Toloza',         es: 'Jose Carranza',    pt: 'Larissa Andrade', fr: 'Fernando Pinto' },
  { date: 'Jul 31', en: 'Alexander Castillo',    es: 'Natali Gaviria',   pt: 'Carlos daSilva',  fr: 'Fernando Pinto' },
]

const COL_DATE = 120
const ROW_H    = 48
const FONT_ROW = 23
const FONT_HDR = 22
const COLS     = `${COL_DATE}px 1fr 1fr 1fr 1fr`

const headerStyle = {
  fontSize: FONT_HDR,
  fontWeight: 700,
  color: 'var(--ink-faint)',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  paddingBottom: 10,
  borderBottom: '2px solid var(--border)',
  marginBottom: 4,
}

function VacationRow({ date }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: ROW_H,
        gap: 20,
        background: 'rgba(255, 165, 0, 0.07)',
        borderRadius: 8,
        padding: '0 8px',
        marginLeft: -8,
        borderLeft: '3px solid rgba(255, 165, 0, 0.35)',
      }}
    >
      <div style={{ width: COL_DATE, fontSize: 20, color: 'var(--ink-faint)', fontWeight: 500 }}>
        {date}
      </div>
      <div style={{ fontSize: FONT_ROW - 2, color: 'var(--ink-faint)', fontStyle: 'italic', fontWeight: 400 }}>
        🏖️&nbsp; Vacation — no session
      </div>
    </div>
  )
}

export default function Slide05Calendar() {
  let weekNum = 0

  return (
    <div className="bg-lang-light top-stripe">
      <div className="deco-grid" />

      <div className="label">Schedule</div>
      <div className="h2" style={{ marginBottom: 24, fontSize: 50 }}>
        9-Week Host Calendar &nbsp;·&nbsp; Fridays 19:00 – 20:00
      </div>

      {/* Column headers */}
      <div style={{ display: 'grid', gridTemplateColumns: COLS, gap: '0 20px' }}>
        <div style={headerStyle}>#</div>
        <div style={headerStyle}>🇺🇸 English</div>
        <div style={headerStyle}>🇧🇴 Spanish</div>
        <div style={headerStyle}>🇧🇷 Portuguese</div>
        <div style={headerStyle}>🇫🇷 French</div>
      </div>

      {ALL_ROWS.map((w) => {
        if (w.vacation) return <VacationRow key={w.date} date={w.date} />

        const num = ++weekNum
        const isAlt = num % 2 === 0

        return (
          <div
            key={w.date}
            style={{
              display: 'grid',
              gridTemplateColumns: COLS,
              gap: '0 20px',
              height: ROW_H,
              alignItems: 'center',
              background: isAlt ? 'rgba(18,85,244,0.03)' : 'transparent',
              borderRadius: 8,
              padding: '0 8px',
              marginLeft: -8,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  background: 'var(--grad)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {String(num).padStart(2, '0')}
              </span>
              <span style={{ fontSize: 20, color: 'var(--ink-dim)', fontWeight: 500 }}>{w.date}</span>
            </div>
            <div style={{ fontSize: FONT_ROW, fontWeight: 500, color: 'var(--ink)' }}>{w.en}</div>
            <div style={{ fontSize: FONT_ROW, fontWeight: 500, color: 'var(--ink)' }}>{w.es}</div>
            <div style={{ fontSize: FONT_ROW, fontWeight: 500, color: 'var(--ink)' }}>{w.pt}</div>
            <div style={{ fontSize: FONT_ROW, fontWeight: 500, color: 'var(--ink)' }}>{w.fr}</div>
          </div>
        )
      })}
    </div>
  )
}
