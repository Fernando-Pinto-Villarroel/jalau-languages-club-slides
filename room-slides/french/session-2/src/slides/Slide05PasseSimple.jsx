const VERB_GROUPS = [
  {
    group: "-ER",
    model: "aimer",
    color: "var(--fr2-burgundy)",
    bg: "rgba(92,26,53,0.07)",
    border: "rgba(92,26,53,0.18)",
    forms: [
      { pronoun: "je / j'", form: "aimai" },
      { pronoun: "tu", form: "aimas" },
      { pronoun: "il / elle", form: "aima" },
      { pronoun: "nous", form: "aimâmes" },
      { pronoun: "vous", form: "aimâtes" },
      { pronoun: "ils / elles", form: "aimèrent" },
    ],
  },
  {
    group: "-IR",
    model: "finir",
    color: "var(--fr2-gold2)",
    bg: "rgba(196,154,60,0.08)",
    border: "rgba(196,154,60,0.22)",
    forms: [
      { pronoun: "je", form: "finis" },
      { pronoun: "tu", form: "finis" },
      { pronoun: "il / elle", form: "finit" },
      { pronoun: "nous", form: "finîmes" },
      { pronoun: "vous", form: "finîtes" },
      { pronoun: "ils / elles", form: "finirent" },
    ],
  },
  {
    group: "-RE",
    model: "vendre",
    color: "#5A6E3A",
    bg: "rgba(90,110,58,0.07)",
    border: "rgba(90,110,58,0.20)",
    forms: [
      { pronoun: "je", form: "vendis" },
      { pronoun: "tu", form: "vendis" },
      { pronoun: "il / elle", form: "vendit" },
      { pronoun: "nous", form: "vendîmes" },
      { pronoun: "vous", form: "vendîtes" },
      { pronoun: "ils / elles", form: "vendirent" },
    ],
  },
]

const EXEMPLES = [
  { sentence: "Le roi parla à son peuple depuis le balcon.", verb: "parla", note: "parler → -ER" },
  { sentence: "La princesse finit son voyage au coucher du soleil.", verb: "finit", note: "finir → -IR" },
  { sentence: "Le chevalier rendit son épée au roi.", verb: "rendit", note: "rendre → -RE" },
]

export default function Slide05PasseSimple() {
  return (
    <div className="bg-light top-stripe">
      <div className="label">Leçon de Français 📚</div>
      <div className="h2" style={{ marginBottom: 6 }}>
        Le Passé Simple
      </div>
      <div className="body" style={{ marginBottom: 28, color: 'var(--ink-dim)' }}>
        Utilisé principalement à l'écrit et dans la littérature — le temps du récit classique.
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
          marginBottom: 28,
        }}
      >
        {VERB_GROUPS.map(({ group, model, color, bg, border, forms }) => (
          <div
            key={group}
            style={{
              background: bg,
              border: `1.5px solid ${border}`,
              borderRadius: 18,
              padding: '22px 24px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 10,
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  fontSize: 'var(--ts-tiny)',
                  fontWeight: 800,
                  color,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                Verbes {group}
              </span>
              <span style={{ fontSize: 'var(--ts-small)', color: 'var(--ink-faint)', fontStyle: 'italic' }}>
                ex : {model}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {forms.map(({ pronoun, form }) => (
                <div
                  key={pronoun}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: 'var(--ts-tiny)',
                  }}
                >
                  <span style={{ color: 'var(--ink-faint)', fontWeight: 500 }}>{pronoun}</span>
                  <span style={{ color, fontWeight: 700 }}>{form}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          background: 'linear-gradient(135deg, rgba(92,26,53,0.04), rgba(196,154,60,0.04))',
          border: '1.5px solid var(--border)',
          borderRadius: 18,
          padding: '20px 28px',
        }}
      >
        <div
          style={{
            fontSize: 'var(--ts-tiny)',
            fontWeight: 700,
            color: 'var(--fr2-burgundy)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: 14,
          }}
        >
          Exemples en contexte ✍️
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {EXEMPLES.map(({ sentence, verb, note }) => {
            const parts = sentence.split(verb)
            return (
              <div
                key={sentence}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 16,
                  fontSize: 'var(--ts-tiny)',
                }}
              >
                <span style={{ color: 'var(--ink-dim)', lineHeight: 1.5 }}>
                  «&nbsp;{parts[0]}
                  <strong style={{ color: 'var(--fr2-burgundy)' }}>{verb}</strong>
                  {parts[1]}&nbsp;»
                </span>
                <span
                  style={{
                    fontSize: 12,
                    color: 'var(--ink-faint)',
                    whiteSpace: 'nowrap',
                    fontStyle: 'italic',
                  }}
                >
                  ({note})
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="section-number-light">05</div>
    </div>
  )
}
