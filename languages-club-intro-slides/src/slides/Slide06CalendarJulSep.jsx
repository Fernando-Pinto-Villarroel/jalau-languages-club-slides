// 12-week host calendar · Fridays 19:00–20:00 · Jul 10 – Sep 25
// English    (9 hosts, circular, picks up from Alessandro who was originally Jun 19):
//   Alessandro → Rocio → Jhon → Leonel → Alexander → Daniel → Luciana → Alejandro → Esau → repeat
// Spanish    (3 hosts after Lucas Rodriguez retired, circular, picks up from Natali who was originally Jun 19):
//   Natali → Emiliano → Jose → repeat
// Portuguese (Carlos daSilva & Larissa Andrade always host together every week)
// French     (1 host): Fernando Pinto every week
const ALL_ROWS = [
  { date: 'Jul 10', en: 'Alessandro Ruiz',      es: 'Natali Gaviria',   pt: 'Carlos daSilva & Larissa Andrade', fr: 'Fernando Pinto' },
  { date: 'Jul 17', en: 'Rocio Lucero',          es: 'Emiliano Schmitt', pt: 'Carlos daSilva & Larissa Andrade', fr: 'Fernando Pinto' },
  { date: 'Jul 24', en: 'Jhon Pedraza',          es: 'Jose Carranza',    pt: 'Carlos daSilva & Larissa Andrade', fr: 'Fernando Pinto' },
  { date: 'Jul 31', en: 'Leonel Toloza',         es: 'Natali Gaviria',   pt: 'Carlos daSilva & Larissa Andrade', fr: 'Fernando Pinto' },
  { date: 'Aug 7',  en: 'Alexander Castillo',    es: 'Emiliano Schmitt', pt: 'Carlos daSilva & Larissa Andrade', fr: 'Fernando Pinto' },
  { date: 'Aug 14', en: 'Daniel Lopez',          es: 'Jose Carranza',    pt: 'Carlos daSilva & Larissa Andrade', fr: 'Fernando Pinto' },
  { date: 'Aug 21', en: 'Luciana Flores',        es: 'Natali Gaviria',   pt: 'Carlos daSilva & Larissa Andrade', fr: 'Fernando Pinto' },
  { date: 'Aug 28', en: 'Alejandro de Oliveira', es: 'Emiliano Schmitt', pt: 'Carlos daSilva & Larissa Andrade', fr: 'Fernando Pinto' },
  { date: 'Sep 4',  en: 'Esau Montiel',          es: 'Jose Carranza',    pt: 'Carlos daSilva & Larissa Andrade', fr: 'Fernando Pinto' },
  { date: 'Sep 11', en: 'Alessandro Ruiz',       es: 'Natali Gaviria',   pt: 'Carlos daSilva & Larissa Andrade', fr: 'Fernando Pinto' },
  { date: 'Sep 18', en: 'Rocio Lucero',          es: 'Emiliano Schmitt', pt: 'Carlos daSilva & Larissa Andrade', fr: 'Fernando Pinto' },
  { date: 'Sep 25', en: 'Jhon Pedraza',          es: 'Jose Carranza',    pt: 'Carlos daSilva & Larissa Andrade', fr: 'Fernando Pinto' },
]

const COL_DATE = 142
const ROW_H    = 57
const FONT_ROW = 22
const FONT_HDR = 21
const COL_GAP  = 32
const ROW_GAP  = 6
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

export default function Slide06CalendarJulSep() {
  return (
    <div className="bg-lang-light top-stripe">
      <div className="deco-grid" />

      <div className="label">Schedule</div>
      <div className="h2" style={{ marginBottom: 18, fontSize: 46 }}>
        Host Calendar · Jul–Sep &nbsp;·&nbsp; Fridays 19:00 – 20:00
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
          const num   = i + 1
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
                borderRadius: 8,
                padding: '0 10px',
                marginLeft: -10,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 7 }}>
                <span
                  style={{
                    fontSize: 19,
                    fontWeight: 800,
                    background: 'var(--grad)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {String(num).padStart(2, '0')}
                </span>
                <span style={{ fontSize: 19, color: 'var(--ink-dim)', fontWeight: 500 }}>{w.date}</span>
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
