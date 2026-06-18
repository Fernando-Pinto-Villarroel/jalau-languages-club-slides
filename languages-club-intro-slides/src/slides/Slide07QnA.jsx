import DecoCircle from '../components/DecoCircle'

export default function Slide07QnA() {
  return (
    <div className="bg-lang-section section-slide">
      <div className="deco-grid-white" />

      <DecoCircle
        size="1200px"
        color="rgba(255, 255, 255, 0.1)"
        top="-450px"
        right="-300px"
      />
      <DecoCircle
        size="600px"
        color="rgba(255, 255, 255, 0.07)"
        bottom="-150px"
        left="100px"
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="label-white">Open Floor</div>
        <div
          className="title-white"
          style={{ fontSize: 110, marginBottom: 30, lineHeight: 1.05 }}
        >
          Questions &amp;<br />Answers
        </div>
        <div className="divider-white" style={{ marginTop: 36 }} />
        <div
          style={{
            fontSize: 44,
            color: 'rgba(255, 255, 255, 0.72)',
            fontWeight: 400,
            lineHeight: 1.4,
            maxWidth: 760,
            marginTop: 8,
          }}
        >
          Anything about the rooms, the schedule, the host system, or anything else?
        </div>
      </div>

      <div className="section-number">?</div>
    </div>
  )
}
