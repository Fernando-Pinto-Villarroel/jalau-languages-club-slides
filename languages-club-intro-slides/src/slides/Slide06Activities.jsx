import DecoCircle from '../components/DecoCircle'

const ACTIVITIES = [
  {
    icon: '🎮',
    title: 'Games',
    desc: 'Gartic Phone, Skribbl.io, word association, trivia — anything competitive and fun in the target language.',
  },
  {
    icon: '🎵',
    title: 'Media Reaction',
    desc: 'Play a song or short video clip and discuss it together: lyrics, cultural context, your opinion.',
  },
  {
    icon: '💬',
    title: 'Topic Discussion',
    desc: 'Pick a topic everyone can have an opinion on — travel, food, tech, current events. Go around and let everyone speak.',
  },
  {
    icon: '📖',
    title: 'Vocabulary Challenge',
    desc: 'Word-of-the-day, false friends, idioms, tongue twisters — light and educational at the same time.',
  },
]

function ActivityCard({ icon, title, desc }) {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 18, padding: '36px 36px' }}>
      <div style={{ fontSize: 54 }}>{icon}</div>
      <div style={{ fontSize: 'var(--ts-body)', fontWeight: 700, color: 'var(--ink)' }}>
        {title}
      </div>
      <div style={{ fontSize: 'var(--ts-tiny)', color: 'var(--ink-dim)', lineHeight: 1.5 }}>
        {desc}
      </div>
    </div>
  )
}

export default function Slide06Activities() {
  return (
    <div className="bg-lang-light top-stripe">
      <div className="deco-grid" />

      <DecoCircle
        size="600px"
        color="rgba(224, 90, 106, 0.07)"
        bottom="-80px"
        right="-60px"
      />

      <div className="label">For Hosts</div>
      <div className="h2" style={{ marginBottom: 36 }}>
        Recommended Activities
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gap: 24,
          marginBottom: 32,
        }}
      >
        {ACTIVITIES.map((act) => (
          <ActivityCard key={act.title} {...act} />
        ))}
      </div>

      <div
        style={{
          background: 'linear-gradient(130deg, rgba(15,78,207,0.08) 0%, rgba(224,90,106,0.08) 100%)',
          border: '1.5px solid rgba(224,90,106,0.22)',
          borderRadius: 16,
          padding: '24px 40px',
          display: 'flex',
          alignItems: 'center',
          gap: 20,
        }}
      >
        <span style={{ fontSize: 36 }}>🌐</span>
        <div>
          <span
            style={{
              fontSize: 'var(--ts-tiny)',
              fontWeight: 700,
              color: '#c0394e',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginRight: 16,
            }}
          >
            The one rule
          </span>
          <span style={{ fontSize: 'var(--ts-small)', fontWeight: 600, color: 'var(--ink)' }}>
            Total immersion — only speak, type, and engage in the language of the room.
          </span>
        </div>
      </div>
    </div>
  )
}
