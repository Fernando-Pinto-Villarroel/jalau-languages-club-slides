import DecoCircle from '@shared/components/DecoCircle'

const IDEAS = [
  { icon: "☀️", label: "Grasse matinée" },
  { icon: "🌊", label: "Plage ou montagne" },
  { icon: "🍽️", label: "Bon repas entre amis" },
  { icon: "📖", label: "Lecture tranquille" },
  { icon: "🎵", label: "Concert ou spectacle" },
  { icon: "🌃", label: "Soirée en ville" },
]

export default function Slide04JourneeIdeale() {
  return (
    <div className="bg-session2-section" style={{ justifyContent: 'center' }}>
      <DecoCircle
        size="1200px"
        color="rgba(255,255,255,0.07)"
        top="-420px"
        right="-300px"
      />
      <DecoCircle
        size="700px"
        color="rgba(196,154,60,0.20)"
        bottom="-200px"
        left="80px"
      />

      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'center',
            marginBottom: 44,
          }}
        >
          <div>
            <div className="label-white">Discussion 💬</div>
            <div
              style={{
                fontSize: 'var(--ts-title)',
                fontWeight: 800,
                color: '#fff',
                lineHeight: 1.08,
                marginBottom: 18,
              }}
            >
              Votre journée
              <br />
              <span style={{ color: 'rgba(255,220,120,0.95)' }}>
                idéale
              </span>{' '}
              ? ✨
            </div>
            <div
              style={{
                fontSize: 'var(--ts-body)',
                color: 'rgba(255,255,255,0.68)',
              }}
            >
              Si vous pouviez choisir votre journée parfaite, à quoi ressemblerait-elle ?
            </div>
          </div>

          <div
            style={{
              background: 'rgba(255,255,255,0.11)',
              border: '1.5px solid rgba(255,255,255,0.25)',
              borderRadius: 18,
              padding: '32px 36px',
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
              «&nbsp;Ma journée idéale commencerait par une{' '}
              <strong style={{ color: '#fff' }}>grasse matinée</strong>, suivie
              d'un brunch délicieux avec mes amis. L'après-midi, j'irais me
              promener au marché et le soir, on irait voir un{' '}
              <strong style={{ color: '#fff' }}>concert en plein air</strong>
              .&nbsp;»
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: 18,
          }}
        >
          {IDEAS.map(({ icon, label }) => (
            <div
              key={label}
              style={{
                background: 'rgba(255,255,255,0.12)',
                border: '1.5px solid rgba(255,255,255,0.22)',
                borderRadius: 18,
                padding: '26px 18px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 12,
              }}
            >
              <span style={{ fontSize: 44 }}>{icon}</span>
              <span
                style={{
                  fontSize: 'var(--ts-tiny)',
                  fontWeight: 600,
                  color: '#fff',
                  lineHeight: 1.3,
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="section-number">04</div>
    </div>
  )
}
