import DecoCircle from '../components/DecoCircle'

const BULLETS = [
  <>Connects <strong>generations and countries</strong> through shared learning</>,
  <>Pressure-free environment where <strong>making mistakes is part of the process</strong></>,
  <>Replicates the spontaneous encounters of an <strong>on-campus experience</strong></>,
  <>Weekly sessions that build <strong>consistency and community</strong></>,
]

export default function Slide03Impact() {
  return (
    <div className="bg-lang-light top-stripe">
      <div className="deco-grid" />

      <DecoCircle
        size="700px"
        color="rgba(9, 190, 249, 0.09)"
        top="-180px"
        right="-100px"
      />

      <div className="label">Impact</div>
      <div
        className="title"
        style={{ fontSize: 72, maxWidth: 1300, marginBottom: 44 }}
      >
        Learning a language{' '}
        <span className="hi">shouldn't feel like a class</span>
        :<br />it should feel like hanging out.
      </div>

      <div className="two-col" style={{ gap: 64, alignItems: 'start' }}>
        <div className="bullet-list" style={{ paddingLeft: 20 }}>
          {BULLETS.map((text, i) => (
            <div key={i} className="bullet-item">
              <span>{text}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="card" style={{ padding: '30px 36px', textAlign: 'center' }}>
            <div className="stat-big" style={{ fontSize: 80 }}>4</div>
            <div
              style={{
                fontSize: 'var(--ts-small)',
                fontWeight: 600,
                color: 'var(--ink)',
                marginTop: 8,
              }}
            >
              Available Languages
            </div>
          </div>

          <div className="card" style={{ padding: '30px 36px', textAlign: 'center' }}>
            <div className="stat-big" style={{ fontSize: 48 }}>Every Friday</div>
            <div
              style={{
                fontSize: 'var(--ts-small)',
                fontWeight: 600,
                color: 'var(--ink)',
                marginTop: 8,
              }}
            >
              19:00 – 20:00
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
