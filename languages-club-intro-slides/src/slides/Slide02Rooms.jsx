import LangCard from '../components/LangCard'
import HlBar from '../components/HlBar'

const LANGUAGES = [
  { flag: '🇧🇴', name: 'Spanish',    region: 'Latin America',  level: 'A2 – B2+' },
  { flag: '🇺🇸', name: 'English',    region: 'United States',  level: 'A2 – B2'  },
  { flag: '🇧🇷', name: 'Portuguese', region: 'Brazil',         level: 'A2 – B2'  },
  { flag: '🇫🇷', name: 'French',     region: 'Francophonie',   level: 'A2 – B2'  },
]

const ACTIVITIES = [
  { tag: 'Games',        text: 'Gartic Phone & other collaborative games' },
  { tag: 'Culture',      text: 'React to videos and music in the language' },
  { tag: 'Conversation', text: 'Free and spontaneous practice in the language' },
  { tag: 'Vocabulary',   text: 'Vocabulary dynamics and exercises' },
]

export default function Slide02Rooms() {
  return (
    <div className="bg-lang-light top-stripe">
      <div className="deco-grid" />

      <div className="label">Languages Club</div>
      <div className="h2" style={{ marginBottom: 14 }}>
        Four Rooms, Four Languages
      </div>
      <div className="body" style={{ marginBottom: 36 }}>
        The only rule in every room:{' '}
        <strong>only speak and write in that language.</strong> Levels A2–B2.
        Every Friday from 19:00 to 20:00.
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gap: 20,
          marginBottom: 28,
        }}
      >
        {LANGUAGES.map((lang) => (
          <LangCard key={lang.name} {...lang} />
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {ACTIVITIES.map((act) => (
          <HlBar key={act.tag} tag={act.tag} text={act.text} />
        ))}
      </div>
    </div>
  )
}
