const INTRO_ITEMS = [
  { num: '01', icon: '👤', title: 'Your name' },
  { num: '02', icon: '🌍', title: 'Your country' },
  { num: '03', icon: '🗣️', title: 'Languages you speak' },
  { num: '04', icon: '🎮', title: 'Your hobbies' },
  { num: '05', icon: '🎯', title: 'Your expectations\nfrom the club' },
]

function IntroCard({ num, icon, title }) {
  return (
    <div
      style={{
        background: '#fff',
        border: '1.5px solid var(--border)',
        borderRadius: 20,
        padding: '36px 28px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 18,
        boxShadow: '0 2px 20px rgba(18,85,244,0.07)',
      }}
    >
      <div
        style={{
          fontSize: 52,
          fontWeight: 800,
          lineHeight: 1,
          background: 'var(--grad)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {num}
      </div>
      <div style={{ fontSize: 52 }}>{icon}</div>
      <div
        style={{
          fontSize: 'var(--ts-small)',
          fontWeight: 700,
          color: 'var(--ink)',
          lineHeight: 1.3,
          whiteSpace: 'pre-line',
        }}
      >
        {title}
      </div>
    </div>
  )
}

export default function Slide01Presentations() {
  return (
    <div className="bg-lang-light top-stripe">
      <div className="deco-grid" />

      <div className="label">Ice Breaker</div>
      <div className="h2" style={{ marginBottom: 14 }}>
        Let's Meet Each Other
      </div>
      <div className="body" style={{ marginBottom: 44 }}>
        Go around the room and share — in the language of your choice:
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 24,
        }}
      >
        {INTRO_ITEMS.map((item) => (
          <IntroCard key={item.num} {...item} />
        ))}
      </div>
    </div>
  )
}
