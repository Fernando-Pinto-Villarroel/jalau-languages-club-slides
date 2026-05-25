import DecoCircle from '@shared/components/DecoCircle'

export default function Slide06Merci() {
  return (
    <div className="bg-session2-section section-slide">
      <DecoCircle size="1200px" color="rgba(255,255,255,0.08)" top="-400px" right="-300px" />
      <DecoCircle size="600px" color="rgba(196,154,60,0.28)" bottom="-150px" left="100px" />
      <DecoCircle size="300px" color="rgba(255,255,255,0.10)" top="80px" left="-80px" />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
        <div
          style={{
            fontSize: 120,
            lineHeight: 1,
            marginBottom: 32,
            filter: 'drop-shadow(0 0 40px rgba(255,200,80,0.30))',
          }}
        >
          🌹
        </div>

        <div
          style={{
            fontSize: 'var(--ts-title)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.05,
            marginBottom: 20,
          }}
        >
          Merci à tous !
        </div>

        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: 'rgba(255,220,120,0.95)',
            marginBottom: 36,
            lineHeight: 1.2,
          }}
        >
          Bonne semaine ! 🥂
        </div>

        <div className="divider-white" style={{ maxWidth: 480, margin: '0 auto 36px' }} />

        <div
          style={{
            fontSize: 'var(--ts-body)',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.6,
            maxWidth: 680,
            margin: '0 auto',
          }}
        >
          À la prochaine session — continuez à pratiquer votre français
          et n'hésitez pas à revenir nous rejoindre&nbsp;!
        </div>
      </div>

      <div className="section-number">FIN</div>
    </div>
  )
}
