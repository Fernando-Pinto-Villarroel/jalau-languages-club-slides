import DecoCircle from '@shared/components/DecoCircle'

const IDEAS = [
  { icon: "🎬", label: "Regarder un film" },
  { icon: "🍽️", label: "Sortir au restaurant" },
  { icon: "🏞️", label: "Se balader dehors" },
  { icon: "📚", label: "Lire un livre" },
  { icon: "🎮", label: "Jouer aux jeux vidéo" },
  { icon: "🎨", label: "Quelque chose de créatif" },
];

export default function Slide04PlansDuWeekend() {
  return (
    <div className="bg-french-section" style={{ justifyContent: "center" }}>
      <DecoCircle
        size="1200px"
        color="rgba(255,255,255,0.08)"
        top="-420px"
        right="-300px"
      />
      <DecoCircle
        size="700px"
        color="rgba(237,41,57,0.18)"
        bottom="-200px"
        left="80px"
      />

      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
            marginBottom: 44,
          }}
        >
          <div>
            <div className="label-white">Discussion 💬</div>
            <div
              style={{
                fontSize: "var(--ts-title)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.08,
                marginBottom: 18,
              }}
            >
              Plans pour
              <br />
              <span style={{ color: "rgba(255,220,100,0.95)" }}>
                le weekend
              </span>{" "}
              ? 🗓️
            </div>
            <div
              style={{
                fontSize: "var(--ts-body)",
                color: "rgba(255,255,255,0.68)",
              }}
            >
              Qu'est-ce que vous avez prévu de faire ?
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.11)",
              border: "1.5px solid rgba(255,255,255,0.25)",
              borderRadius: 18,
              padding: "32px 36px",
            }}
          >
            <div
              style={{
                fontSize: "var(--ts-tiny)",
                fontWeight: 700,
                color: "rgba(255,220,100,0.9)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Exemple 💡
            </div>
            <div
              style={{
                fontSize: "var(--ts-small)",
                color: "rgba(255,255,255,0.82)",
                lineHeight: 1.6,
              }}
            >
              «&nbsp;Ce weekend, je vais{" "}
              <strong style={{ color: "#fff" }}>regarder un film</strong> avec
              mes amis et dimanche on va{" "}
              <strong style={{ color: "#fff" }}>se balader dans le parc</strong>
              . S'il fait beau, on fera un pique-nique&nbsp;!&nbsp;»
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 18,
          }}
        >
          {IDEAS.map(({ icon, label }) => (
            <div
              key={label}
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1.5px solid rgba(255,255,255,0.22)",
                borderRadius: 18,
                padding: "26px 18px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 12,
              }}
            >
              <span style={{ fontSize: 44 }}>{icon}</span>
              <span
                style={{
                  fontSize: "var(--ts-tiny)",
                  fontWeight: 600,
                  color: "#fff",
                  lineHeight: 1.3,
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="section-number">04</div>
    </div>
  );
}
