import DecoCircle from '@shared/components/DecoCircle'

const EXAMPLES = [
  { flag: '🇯🇵', country: 'Japan' },
  { flag: '🇧🇷', country: 'Brazil' },
  { flag: '🇮🇹', country: 'Italy' },
  { flag: '🇦🇺', country: 'Australia' },
]

export default function Slide02QuestionOfTheDay() {
  return (
    <div className="bg-english-section" style={{ justifyContent: 'center' }}>
      <DecoCircle size="1100px" color="rgba(255,255,255,0.08)" top="-380px" right="-260px" />
      <DecoCircle size="600px" color="rgba(124,58,237,0.22)" bottom="-180px" left="60px" />

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
          <div className="label-white">Question of the Day 🗣️</div>

          <div
            style={{
              fontSize: 'var(--ts-title)',
              fontWeight: 800,
              lineHeight: 1.08,
              color: '#fff',
              marginBottom: 32,
            }}
          >
            Which country
            <br />
            <span style={{ color: 'rgba(255,220,100,0.95)' }}>would you</span>
            <br />
            like to visit?
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
            ✈️ And why does that country interest you?
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {EXAMPLES.map(({ flag, country }) => (
              <div
                key={country}
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
                <span style={{ fontSize: 36 }}>{flag}</span>
                {country}
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
                color: 'rgba(255,220,100,0.9)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 14,
              }}
            >
              Example 💡
            </div>
            <div
              style={{
                fontSize: 'var(--ts-small)',
                color: 'rgba(255,255,255,0.82)',
                lineHeight: 1.6,
              }}
            >
              "I'd love to visit{' '}
              <strong style={{ color: '#fff' }}>Japan</strong> because I'm
              fascinated by the culture, food, and scenery. Tokyo has always
              been on my bucket list!"
            </div>
          </div>
        </div>
      </div>

      <div className="section-number">02</div>
    </div>
  )
}
