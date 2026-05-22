import PromptCard from '@shared/components/PromptCard'

const PROMPTS = [
  { num: '01', icon: '👤', label: 'Name & Surname' },
  { num: '02', icon: '🎂', label: 'Age' },
  { num: '03', icon: '🌍', label: 'Country' },
  { num: '04', icon: '🎭', label: 'Hobbies' },
]

export default function Slide01Icebreaker() {
  return (
    <div className="bg-light top-stripe">
      <div className="label">Ice-Breaker ✨</div>
      <div className="h2" style={{ marginBottom: 10 }}>
        Introductions
      </div>
      <div className="body" style={{ marginBottom: 36 }}>
        Your turn — introduce yourself in English!
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
          alignItems: 'start',
          marginBottom: 32,
        }}
      >
        {PROMPTS.map((p) => (
          <PromptCard key={p.num} {...p} />
        ))}
      </div>

      <div
        style={{
          background: 'linear-gradient(135deg, rgba(67,56,202,0.05), rgba(124,58,237,0.04))',
          border: '1.5px solid var(--border)',
          borderRadius: 18,
          padding: '28px 36px',
        }}
      >
        <div
          style={{
            fontSize: 'var(--ts-tiny)',
            fontWeight: 700,
            color: 'var(--en-indigo)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: 12,
          }}
        >
          Example 💡
        </div>
        <div
          style={{
            fontSize: 'var(--ts-small)',
            color: 'var(--ink-dim)',
            lineHeight: 1.6,
          }}
        >
          "Hi! My name is{' '}
          <strong style={{ color: 'var(--ink)' }}>Alex</strong>, I'm{' '}
          <strong style={{ color: 'var(--ink)' }}>25 years old</strong> and I'm
          from <strong style={{ color: 'var(--ink)' }}>Brazil</strong>. I love
          hiking, photography, and trying new cuisines from around the world."
        </div>
      </div>

      <div className="section-number-light">01</div>
    </div>
  )
}
