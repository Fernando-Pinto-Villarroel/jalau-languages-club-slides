import DecoCircle from '@shared/components/DecoCircle'

export default function Slide00Intro() {
  return (
    <div className="bg-french-section section-slide">
      <DecoCircle size="1100px" color="rgba(255,255,255,0.12)" top="-350px" right="-250px" />
      <DecoCircle size="500px" color="rgba(237,41,57,0.22)" bottom="-100px" left="200px" />

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
          French Session
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
          Bienvenue ! 🇫🇷
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
          Apprenons le français ensemble — avec curiosité,
          bonne humeur et beaucoup de pratique.
        </div>

        <div className="divider-white" style={{ marginTop: 48 }} />

        <div
          style={{
            fontSize: 'var(--ts-small)',
            color: 'rgba(255,255,255,0.52)',
          }}
        >
          21 mai 2026
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
          opacity: 0.28,
          zIndex: 0,
          userSelect: 'none',
          pointerEvents: 'none',
          filter: 'drop-shadow(0 0 60px rgba(255,255,255,0.15))',
        }}
      >
        🗼
      </div>

      <div className="section-number">FR</div>
    </div>
  )
}
