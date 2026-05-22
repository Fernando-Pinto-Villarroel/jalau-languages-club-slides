export default function PromptCard({ num, icon, label }) {
  return (
    <div
      style={{
        background: '#fff',
        border: '2px solid var(--border)',
        borderRadius: 24,
        padding: '40px 28px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 18,
        boxShadow: '0 4px 28px color-mix(in srgb, var(--primary) 9%, transparent)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          background: 'var(--grad-flag)',
        }}
      />
      <div
        style={{
          fontSize: 52,
          fontWeight: 800,
          lineHeight: 1,
          background: 'var(--grad-accent)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {num}
      </div>
      <div style={{ fontSize: 58 }}>{icon}</div>
      <div
        style={{
          fontSize: 'var(--ts-small)',
          fontWeight: 700,
          color: 'var(--ink)',
          lineHeight: 1.3,
        }}
      >
        {label}
      </div>
    </div>
  )
}
