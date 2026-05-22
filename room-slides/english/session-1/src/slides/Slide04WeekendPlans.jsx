import DecoCircle from '@shared/components/DecoCircle'

const IDEAS = [
  { icon: '🎬', label: 'Watch a movie' },
  { icon: '🍽️', label: 'Go out to eat' },
  { icon: '🏞️', label: 'Go for a walk' },
  { icon: '📚', label: 'Read a book' },
  { icon: '🎮', label: 'Play video games' },
  { icon: '🎨', label: 'Something creative' },
]

export default function Slide04WeekendPlans() {
  return (
    <div className="bg-english-section" style={{ justifyContent: 'center' }}>
      <DecoCircle size="1200px" color="rgba(255,255,255,0.07)" top="-420px" right="-300px" />
      <DecoCircle size="700px" color="rgba(124,58,237,0.20)" bottom="-200px" left="80px" />

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
              Weekend
              <br />
              <span style={{ color: 'rgba(255,220,100,0.95)' }}>plans</span>{' '}
              🗓️
            </div>
            <div
              style={{
                fontSize: 'var(--ts-body)',
                color: 'rgba(255,255,255,0.68)',
              }}
            >
              What are you planning to do this weekend?
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
              "This weekend I'm going to{' '}
              <strong style={{ color: '#fff' }}>watch a movie</strong> with
              friends, and on Sunday we're planning to{' '}
              <strong style={{ color: '#fff' }}>go for a hike</strong>. If the
              weather's nice, we'll have a picnic!"
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
