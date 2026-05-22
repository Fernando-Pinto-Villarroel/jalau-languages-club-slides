const VIDEO_ID = "Vol9dZ-t93s";

const SONG_FACTS = [
  { icon: "🎙️", text: "Yves Montand & Édith Piaf" },
  { icon: "📅", text: "1951 — Chanson française classique" },
  { icon: "🏛️", text: "Paroles : Jean Dréjac · Musique : Hubert Giraud" },
];

const TAGS = ["🥐 Paris", "💙 Nostalgie", "🌊 La Seine", "🔔 Notre-Dame"];

export default function Slide03MusiqueDuJour() {
  return (
    <div className="bg-light top-stripe">
      <div className="label" style={{ marginBottom: 20 }}>
        Musique du Jour 🎶
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 52,
          flex: 1,
          minHeight: 0,
        }}
      >
        <div
          style={{
            borderRadius: 20,
            overflow: "hidden",
            boxShadow: "0 8px 40px rgba(0,35,149,0.18)",
            height: "100%",
            minHeight: 0,
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${VIDEO_ID}`}
            title="Sous le ciel de Paris"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ display: "block" }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <div
              style={{
                fontSize: "var(--ts-h2)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: 16,
              }}
            >
              <span style={{ color: "var(--ink)" }}>Sous le ciel </span>
              <span
                style={{
                  background: "var(--grad-accent)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                de Paris
              </span>{" "}
              🗼
            </div>
            <div className="divider" style={{ margin: 0 }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {SONG_FACTS.map(({ icon, text }) => (
              <div
                key={text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  fontSize: "var(--ts-tiny)",
                  color: "var(--ink-dim)",
                  fontWeight: 500,
                }}
              >
                <span style={{ fontSize: 30 }}>{icon}</span>
                {text}
              </div>
            ))}
          </div>

          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(0,35,149,0.06), rgba(237,41,57,0.05))",
              border: "1.5px solid var(--border)",
              borderRadius: 16,
              padding: "28px 32px",
              flex: 1,
            }}
          >
            <div
              style={{
                fontSize: "var(--ts-tiny)",
                fontWeight: 700,
                color: "var(--fr-blue)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              De quoi ça parle ?
            </div>
            <div
              style={{
                fontSize: "var(--ts-tiny)",
                color: "var(--ink-dim)",
                lineHeight: 1.65,
              }}
            >
              Une ode poétique à{" "}
              <strong style={{ color: "var(--ink)" }}>Paris</strong> — ses rues,
              ses toits, la Seine et la magie de la vie parisienne. La chanson
              célèbre l'âme de la ville&nbsp;: l'amour, les cafés, les bateliers
              sur la Seine et les cloches de Notre-Dame.
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: 14,
          flexWrap: "wrap",
          marginTop: 24,
        }}
      >
        {TAGS.map((tag) => (
          <span key={tag} className="pill" style={{ fontSize: 30 }}>
            {tag}
          </span>
        ))}
      </div>

      <div className="section-number-light">03</div>
    </div>
  );
}
