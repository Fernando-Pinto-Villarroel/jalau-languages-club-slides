const VIDEO_ID = 'JGwWNGJdvx8'

const SONG_FACTS = [
  { icon: '🎙️', text: 'Ed Sheeran' },
  { icon: '📅', text: '2017 — Pop / Folk-Pop' },
  { icon: '🏛️', text: 'Album: ÷ (Divide)' },
]

const TAGS = ['🏙️ New York', '💛 Romance', '🎸 Acoustic', '🌍 Global Hit']

export default function Slide03SongOfTheDay() {
  return (
    <div className="bg-light top-stripe">
      <div className="label" style={{ marginBottom: 20 }}>
        Song of the Day 🎶
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 52,
          flex: 1,
          minHeight: 0,
        }}
      >
        <div
          style={{
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: '0 8px 40px color-mix(in srgb, var(--primary) 18%, transparent)',
            height: '100%',
            minHeight: 0,
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${VIDEO_ID}`}
            title="Shape of You"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ display: 'block' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <div
              style={{
                fontSize: 'var(--ts-h2)',
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: 16,
              }}
            >
              <span style={{ color: 'var(--ink)' }}>Shape </span>
              <span
                style={{
                  background: 'var(--grad-accent)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                of You
              </span>{' '}
              🎵
            </div>
            <div className="divider" style={{ margin: 0 }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {SONG_FACTS.map(({ icon, text }) => (
              <div
                key={text}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  fontSize: 'var(--ts-tiny)',
                  color: 'var(--ink-dim)',
                  fontWeight: 500,
                }}
              >
                <span style={{ fontSize: 30 }}>{icon}</span>
                {text}
              </div>
            ))}
          </div>

          <div
            style={{
              background: 'linear-gradient(135deg, rgba(67,56,202,0.06), rgba(124,58,237,0.05))',
              border: '1.5px solid var(--border)',
              borderRadius: 16,
              padding: '28px 32px',
              flex: 1,
            }}
          >
            <div
              style={{
                fontSize: 'var(--ts-tiny)',
                fontWeight: 700,
                color: 'var(--en-indigo)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 14,
              }}
            >
              What's it about?
            </div>
            <div
              style={{
                fontSize: 'var(--ts-tiny)',
                color: 'var(--ink-dim)',
                lineHeight: 1.65,
              }}
            >
              A catchy love story about meeting someone at a{' '}
              <strong style={{ color: 'var(--ink)' }}>bar and gym</strong>. Ed
              Sheeran blends pop, dancehall and acoustic folk to create one of
              the best-selling singles of all time. Great for learning everyday
              English expressions!
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 24 }}>
        {TAGS.map((tag) => (
          <span key={tag} className="pill" style={{ fontSize: 30 }}>
            {tag}
          </span>
        ))}
      </div>

      <div className="section-number-light">03</div>
    </div>
  )
}
