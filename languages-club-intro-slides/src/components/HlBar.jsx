export default function HlBar({ tag, text }) {
  return (
    <div className="hl-bar">
      <div className="hl-tag">{tag}</div>
      <div className="hl-text">{text}</div>
    </div>
  )
}
