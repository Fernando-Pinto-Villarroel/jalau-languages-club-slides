const HOW_IT_WORKS = [
  <>
    Every room has a <strong>rotating host</strong> who leads the session — a
    new person each week
  </>,
  <>
    Everyone else is a <strong>co-host</strong>: help the host keep engagement
    and participation flowing
  </>,
  <>
    Co-hosts <strong>answer questions</strong>, encourage quiet members, and
    maintain respect
  </>,
  <>
    If the host can't make it, a co-host{" "}
    <strong>steps in automatically</strong>{" "}
  </>,
];

const ROOMS = [
  {
    flag: "🇺🇸",
    name: "English",
    count: 9,
    note: "Each host leads once every 9 weeks",
  },
  {
    flag: "🇧🇴",
    name: "Spanish",
    count: 4,
    note: "Sequential rotation — repeats every 4 weeks",
  },
  {
    flag: "🇧🇷",
    name: "Portuguese",
    count: 2,
    note: "Carlos daSilva · Larissa Andrade",
  },
  { flag: "🇫🇷", name: "French", count: 1, note: "Fernando Pinto Villarroel" },
];

function RoomStat({ flag, name, count, note }) {
  const isEmpty = count === 0;
  return (
    <div
      style={{
        background: isEmpty ? "rgba(224,90,106,0.06)" : "#fff",
        border: `1.5px solid ${isEmpty ? "rgba(224,90,106,0.22)" : "var(--border)"}`,
        borderRadius: 14,
        padding: "20px 24px",
        display: "flex",
        alignItems: "center",
        gap: 20,
        boxShadow: "0 1px 12px rgba(18,85,244,0.05)",
      }}
    >
      <span style={{ fontSize: 44 }}>{flag}</span>
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: "var(--ts-small)",
            fontWeight: 700,
            color: "var(--ink)",
            marginBottom: 4,
          }}
        >
          {name}
        </div>
        <div style={{ fontSize: 28, color: "var(--ink-dim)", lineHeight: 1.4 }}>
          {note}
        </div>
      </div>
      <div
        style={{
          fontSize: 52,
          fontWeight: 800,
          lineHeight: 1,
          background: isEmpty
            ? "linear-gradient(130deg,#e05a6a,#c0394e)"
            : "var(--grad)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          minWidth: 60,
          textAlign: "right",
        }}
      >
        {count}
      </div>
    </div>
  );
}

export default function Slide04HostCohost() {
  return (
    <div className="bg-lang-light top-stripe">
      <div className="deco-grid" />

      <div className="label">Organization</div>
      <div className="h2" style={{ marginBottom: 40 }}>
        Host &amp; Co-host System
      </div>

      <div className="two-col" style={{ gap: 72, alignItems: "start" }}>
        <div>
          <div
            style={{
              fontSize: "var(--ts-small)",
              fontWeight: 600,
              color: "var(--ink-dim)",
              marginBottom: 24,
              lineHeight: 1.5,
            }}
          >
            A simple system that keeps every session alive — no preparation
            required beyond showing up.
          </div>
          <div className="bullet-list" style={{ paddingLeft: 20 }}>
            {HOW_IT_WORKS.map((text, i) => (
              <div key={i} className="bullet-item">
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: "var(--ts-tiny)",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--ink-faint)",
              marginBottom: 4,
            }}
          >
            Volunteers per room
          </div>
          {ROOMS.map((r) => (
            <RoomStat key={r.name} {...r} />
          ))}
        </div>
      </div>
    </div>
  );
}
