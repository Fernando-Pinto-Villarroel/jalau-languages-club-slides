// Host calendar · Fridays 19:00–20:00 · May 22 – Jun 12
// English    (actual hosts per session)
// Spanish    (4 hosts): Natali → Lucas → Emiliano → Jose
// Portuguese (Carlos daSilva & Larissa Andrade always host together)
// French     (1 host): Fernando Pinto every week
const ALL_ROWS = [
  { date: 'May 22', en: 'Alejandro de Oliveira & Rocio Lucero', es: 'Natali Gaviria',   pt: 'Carlos daSilva & Larissa Andrade', fr: 'Fernando Pinto' },
  { date: 'May 29', en: 'Luciana Flores',                        es: '–',                pt: 'Carlos daSilva & Larissa Andrade', fr: 'Fernando Pinto' },
  { date: 'Jun 5',  en: 'Alejandro de Oliveira',                 es: 'Emiliano Schmitt', pt: 'Carlos daSilva & Larissa Andrade', fr: 'Fernando Pinto' },
  { date: 'Jun 12', en: 'Daniel Lopez',                          es: 'Jose Carranza',    pt: 'Carlos daSilva & Larissa Andrade', fr: 'Fernando Pinto' },
]

const COL_DATE = 160
const ROW_H    = 148
const FONT_ROW = 29
const FONT_HDR = 22
const COL_GAP  = 44
const ROW_GAP  = 18
const COLS     = `${COL_DATE}px 1fr 1fr 1fr 1fr`

const headerStyle = {
  fontSize: FONT_HDR,
  fontWeight: 700,
  color: 'var(--ink-faint)',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  paddingBottom: 12,
  borderBottom: '2px solid var(--border)',
  marginBottom: 6,
}

export default function Slide05Calendar() {
  return (
    <div className="bg-lang-light top-stripe">
      <div className="deco-grid" />

      <div className="label">Schedule</div>
      <div className="h2" style={{ marginBottom: 28, fontSize: 50 }}>
        Host Calendar &nbsp;·&nbsp; May – Jun &nbsp;·&nbsp; Fridays 19:00 – 20:00
      </div>

      {/* Column headers */}
      <div style={{ display: 'grid', gridTemplateColumns: COLS, gap: `0 ${COL_GAP}px` }}>
        <div style={headerStyle}>#</div>
        <div style={headerStyle}>🇺🇸 English</div>
        <div style={headerStyle}>🇧🇴 Spanish</div>
        <div style={headerStyle}>🇧🇷 Portuguese</div>
        <div style={headerStyle}>🇫🇷 French</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: ROW_GAP }}>
        {ALL_ROWS.map((w, i) => {
          const num = i + 1
          const isAlt = num % 2 === 0

          return (
            <div
              key={w.date}
              style={{
                display: 'grid',
                gridTemplateColumns: COLS,
                gap: `0 ${COL_GAP}px`,
                height: ROW_H,
                alignItems: 'center',
                background: isAlt ? 'rgba(18,85,244,0.04)' : 'transparent',
                borderRadius: 10,
                padding: '0 12px',
                marginLeft: -12,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span
                  style={{
                    fontSize: 24,
                    fontWeight: 800,
                    background: 'var(--grad)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {String(num).padStart(2, '0')}
                </span>
                <span style={{ fontSize: 24, color: 'var(--ink-dim)', fontWeight: 500 }}>{w.date}</span>
              </div>
              <div style={{ fontSize: FONT_ROW, fontWeight: 500, color: 'var(--ink)' }}>{w.en}</div>
              <div style={{ fontSize: FONT_ROW, fontWeight: 500, color: 'var(--ink)' }}>{w.es}</div>
              <div style={{ fontSize: FONT_ROW, fontWeight: 500, color: 'var(--ink)' }}>{w.pt}</div>
              <div style={{ fontSize: FONT_ROW, fontWeight: 500, color: 'var(--ink)' }}>{w.fr}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
