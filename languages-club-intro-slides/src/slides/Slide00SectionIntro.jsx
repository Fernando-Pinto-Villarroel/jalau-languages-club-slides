import langPhoto from "../assets/lang-club-photo.png";
import DecoCircle from "../components/DecoCircle";

export default function Slide00SectionIntro() {
  return (
    <div className="bg-lang-section section-slide">
      <div className="deco-grid-white" />

      <DecoCircle
        size="1100px"
        color="rgba(255, 255, 255, 0.12)"
        top="-350px"
        right="-250px"
      />
      <DecoCircle
        size="500px"
        color="rgba(255, 255, 255, 0.08)"
        bottom="-100px"
        left="200px"
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="label-white">Student Community</div>
        <div
          className="title-white"
          style={{ fontSize: 102, marginBottom: 26 }}
        >
          Languages Club
        </div>
        <div
          style={{
            fontSize: 44,
            color: "rgba(255, 255, 255, 0.8)",
            lineHeight: 1.4,
            maxWidth: 840,
            fontWeight: 400,
          }}
        >
          Informal language learning between peers — the only rule: know at
          least a little of the language.
        </div>
        <div className="divider-white" style={{ marginTop: 48 }} />
        <div
          style={{
            fontSize: "var(--ts-small)",
            color: "rgba(255, 255, 255, 0.52)",
            paddingBottom: 40,
            marginBottom: 40,
          }}
        >
          Organizer: Fernando Pinto Villarroel
        </div>
      </div>

      <img
        src={langPhoto}
        alt="Languages Club"
        style={{
          position: "absolute",
          right: 200,
          top: "50%",
          transform: "translateY(-50%)",
          width: 720,
          height: "auto",
          objectFit: "contain",
          borderRadius: 24,
          zIndex: 2,
        }}
      />

      <div className="section-number">Jala U</div>
    </div>
  );
}
