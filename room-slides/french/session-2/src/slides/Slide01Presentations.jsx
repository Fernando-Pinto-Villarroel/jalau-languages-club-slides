import PromptCard from '@shared/components/PromptCard'

const PROMPTS = [
  { num: '01', icon: '👤', label: 'Nom & Prénom' },
  { num: '02', icon: '🎂', label: 'Âge' },
  { num: '03', icon: '🌍', label: 'Pays' },
  { num: '04', icon: '🎭', label: 'Hobbies' },
]

export default function Slide01Presentations() {
  return (
    <div className="bg-light top-stripe">
      <div className="label">Brise-Glace ✨</div>
      <div className="h2" style={{ marginBottom: 10 }}>
        Présentations
      </div>
      <div className="body" style={{ marginBottom: 36 }}>
        À votre tour — présentez-vous en français !
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
          background: 'linear-gradient(135deg, rgba(92,26,53,0.05), rgba(196,154,60,0.04))',
          border: '1.5px solid var(--border)',
          borderRadius: 18,
          padding: '28px 36px',
        }}
      >
        <div
          style={{
            fontSize: 'var(--ts-tiny)',
            fontWeight: 700,
            color: 'var(--fr2-burgundy)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: 12,
          }}
        >
          Exemple 💡
        </div>
        <div
          style={{
            fontSize: 'var(--ts-small)',
            color: 'var(--ink-dim)',
            lineHeight: 1.6,
          }}
        >
          «&nbsp;Bonjour&nbsp;! Je m'appelle{' '}
          <strong style={{ color: 'var(--ink)' }}>Sophie</strong>, j'ai{' '}
          <strong style={{ color: 'var(--ink)' }}>24 ans</strong> et je viens du{' '}
          <strong style={{ color: 'var(--ink)' }}>Mexique</strong>, d'une ville
          qui s'appelle Guadalajara. J'aime lire des romans policiers, cuisiner
          des plats mexicains et faire de la randonnée le weekend.&nbsp;»
        </div>
      </div>

      <div className="section-number-light">01</div>
    </div>
  )
}
