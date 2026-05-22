export default function DecoCircle({ size, color, top, bottom, left, right }) {
  return (
    <div
      className="deco-circle"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        top,
        bottom,
        left,
        right,
      }}
    />
  )
}
