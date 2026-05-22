import DecoCircle from '@shared/components/DecoCircle'

const EXEMPLES = [
  { flag: "🇯🇵", pays: "Le Japon" },
  { flag: "🇮🇹", pays: "L'Italie" },
  { flag: "🇧🇷", pays: "Le Brésil" },
  { flag: "🇳🇿", pays: "La Nouvelle-Zélande" },
];

export default function Slide02QuestionDuJour() {
  return (
    <div className="bg-french-section" style={{ justifyContent: "center" }}>
      <DecoCircle
        size="1100px"
        color="rgba(255,255,255,0.09)"
        top="-380px"
        right="-260px"
      />
      <DecoCircle
        size="600px"
        color="rgba(237,41,57,0.2)"
        bottom="-180px"
        left="60px"
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 72,
          alignItems: "center",
          width: "100%",
        }}
      >
        <div>
          <div className="label-white">Question du Jour 🗣️</div>

          <div
            style={{
              fontSize: "var(--ts-title)",
              fontWeight: 800,
              lineHeight: 1.08,
              color: "#fff",
              marginBottom: 32,
            }}
          >
            Quel pays
            <br />
            <span style={{ color: "rgba(255,220,100,0.95)" }}>voulez-vous</span>
            <br />
            visiter ?
          </div>

          <div className="divider-white" />

          <div
            style={{
              fontSize: "var(--ts-body)",
              color: "rgba(255,255,255,0.72)",
              fontWeight: 400,
              lineHeight: 1.5,
              marginTop: 28,
            }}
          >
            ✈️ Et pourquoi ce pays vous attire-t-il ?
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
          >
            {EXEMPLES.map(({ flag, pays }) => (
              <div
                key={pays}
                style={{
                  background: "rgba(255,255,255,0.13)",
                  border: "1.5px solid rgba(255,255,255,0.28)",
                  borderRadius: 16,
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  fontSize: "var(--ts-tiny)",
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                <span style={{ fontSize: 36 }}>{flag}</span>
                {pays}
              </div>
            ))}
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.11)",
              border: "1.5px solid rgba(255,255,255,0.25)",
              borderRadius: 18,
              padding: "28px 32px",
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
              «&nbsp;Je voudrais visiter{" "}
              <strong style={{ color: "#fff" }}>le Japon</strong> parce que
              j'adore la culture, la gastronomie et les paysages. Tokyo me
              fascine depuis toujours&nbsp;!&nbsp;»
            </div>
          </div>
        </div>
      </div>

      <div className="section-number">02</div>
    </div>
  );
}
