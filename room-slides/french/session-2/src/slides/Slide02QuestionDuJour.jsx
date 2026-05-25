import DecoCircle from '@shared/components/DecoCircle'

const EXEMPLES = [
  { icon: "🎠", label: "Les manèges" },
  { icon: "🏖️", label: "Les vacances en famille" },
  { icon: "🎂", label: "Un anniversaire mémorable" },
  { icon: "📺", label: "Les dessins animés du matin" },
]

export default function Slide02QuestionDuJour() {
  return (
    <div className="bg-session2-section" style={{ justifyContent: 'center' }}>
      <DecoCircle
        size="1100px"
        color="rgba(255,255,255,0.08)"
        top="-380px"
        right="-260px"
      />
      <DecoCircle
        size="600px"
        color="rgba(196,154,60,0.22)"
        bottom="-180px"
        left="60px"
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 72,
          alignItems: 'center',
          width: '100%',
        }}
      >
        <div>
          <div className="label-white">Question du Jour 🗣️</div>

          <div
            style={{
              fontSize: 'var(--ts-title)',
              fontWeight: 800,
              lineHeight: 1.08,
              color: '#fff',
              marginBottom: 32,
            }}
          >
            Quel est votre
            <br />
            <span style={{ color: 'rgba(255,220,120,0.95)' }}>souvenir</span>
            <br />
            d'enfance préféré ?
          </div>

          <div className="divider-white" />

          <div
            style={{
              fontSize: 'var(--ts-body)',
              color: 'rgba(255,255,255,0.72)',
              fontWeight: 400,
              lineHeight: 1.5,
              marginTop: 28,
            }}
          >
            🌟 Pourquoi ce souvenir est-il si spécial pour vous ?
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 16,
            }}
          >
            {EXEMPLES.map(({ icon, label }) => (
              <div
                key={label}
                style={{
                  background: 'rgba(255,255,255,0.13)',
                  border: '1.5px solid rgba(255,255,255,0.28)',
                  borderRadius: 16,
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  fontSize: 'var(--ts-tiny)',
                  fontWeight: 600,
                  color: '#fff',
                }}
              >
                <span style={{ fontSize: 36 }}>{icon}</span>
                {label}
              </div>
            ))}
          </div>

          <div
            style={{
              background: 'rgba(255,255,255,0.11)',
              border: '1.5px solid rgba(255,255,255,0.25)',
              borderRadius: 18,
              padding: '28px 32px',
            }}
          >
            <div
              style={{
                fontSize: 'var(--ts-tiny)',
                fontWeight: 700,
                color: 'rgba(255,220,120,0.9)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 14,
              }}
            >
              Exemple 💡
            </div>
            <div
              style={{
                fontSize: 'var(--ts-small)',
                color: 'rgba(255,255,255,0.82)',
                lineHeight: 1.6,
              }}
            >
              «&nbsp;Mon souvenir préféré, c'est quand j'avais sept ans et que
              ma grand-mère me racontait des histoires avant de dormir. Ces
              moments-là me manquent{' '}
              <strong style={{ color: '#fff' }}>énormément</strong>&nbsp;!&nbsp;»
            </div>
          </div>
        </div>
      </div>

      <div className="section-number">02</div>
    </div>
  )
}
