export default function LangCard({ flag, name, region, level }) {
  return (
    <div className="lang-card">
      <div className="lang-flag">{flag}</div>
      <div className="lang-name">{name}</div>
      <div className="lang-region">{region}</div>
      <div className="lang-level">{level}</div>
    </div>
  )
}
