import DecoCircle from '@shared/components/DecoCircle'

export default function Slide00Intro() {
  return (
    <div className="bg-english-section section-slide">
      <DecoCircle size="1100px" color="rgba(255,255,255,0.10)" top="-350px" right="-250px" />
      <DecoCircle size="500px" color="rgba(124,58,237,0.25)" bottom="-100px" left="200px" />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="label-white">Languages Club · Student Community</div>

        <div
          style={{
            fontSize: 'var(--ts-title)',
            fontWeight: 800,
            lineHeight: 1.07,
            color: '#fff',
            marginBottom: 16,
          }}
        >
          English Session
        </div>

        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: 'rgba(255,220,100,0.95)',
            marginBottom: 28,
            lineHeight: 1.1,
          }}
        >
          Welcome! 🇬🇧
        </div>

        <div
          style={{
            fontSize: 44,
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.45,
            maxWidth: 820,
            fontWeight: 400,
          }}
        >
          Let's learn English together — with curiosity,
          good vibes, and lots of practice.
        </div>

        <div className="divider-white" style={{ marginTop: 48 }} />

        <div
          style={{
            fontSize: 'var(--ts-small)',
            color: 'rgba(255,255,255,0.52)',
          }}
        >
          21 May 2026
        </div>
      </div>

      <div
        style={{
          position: 'absolute',
          right: 140,
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: 400,
          lineHeight: 1,
          opacity: 0.22,
          zIndex: 0,
          userSelect: 'none',
          pointerEvents: 'none',
          filter: 'drop-shadow(0 0 60px rgba(255,255,255,0.15))',
        }}
      >
        🗣️
      </div>

      <div className="section-number">EN</div>
    </div>
  )
}
