import Slide00SectionIntro    from './Slide00SectionIntro'
import Slide01Presentations   from './Slide01Presentations'
import Slide02Rooms           from './Slide02Rooms'
import Slide03Impact          from './Slide03Impact'
import Slide04HostCohost      from './Slide04HostCohost'
import Slide05Calendar        from './Slide05Calendar'
import Slide06CalendarJulSep  from './Slide06CalendarJulSep'
import Slide06Activities      from './Slide06Activities'
import Slide07QnA             from './Slide07QnA'

// To add a new slide: import it here and append to the array.
// The index in this array determines the slide order.
export const slides = [
  Slide00SectionIntro,    // 0 — Section intro
  Slide01Presentations,   // 1 — Ice breaker: let's meet each other
  Slide02Rooms,           // 2 — Four rooms, four languages
  Slide03Impact,          // 3 — Impact & why it works
  Slide04HostCohost,      // 4 — Host & co-host organization
  Slide05Calendar,        // 5 — Host calendar May–Jul (original)
  Slide06CalendarJulSep,  // 6 — Host calendar Jul–Sep (Jul 10 onward)
  Slide06Activities,      // 7 — Recommended host activities
  Slide07QnA,             // 8 — Q&A
]
