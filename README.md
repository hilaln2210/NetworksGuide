# מדריך רשתות - למידה אינטראקטיבית

© 2025 Hila · [MIT License](LICENSE)

מדריך למידה אינטראקטיבי לרשתות מחשבים, הכולל דפדוף בעמודים, סיכומים, שאלות הבנה, הדגמות והדמיות אינטראקטיביות.

## צילומי מסך

### עמוד ראשי — תוכן העניינים

![מדריך רשתות - מסך ראשי](screenshots/main.png)

### הדמיה אינטראקטיבית — TCP Handshake

![הדמיית TCP Handshake](screenshots/simulation.png)

## תכונות

- **דפדוף בעמודים** — ניווט קדימה ואחורה (גם עם מקשי חצים)
- **תוכן עניינים** — קפיצה לפי פרקים
- **סיכומי פרקים** — בסוף כל פרק
- **שאלות הבנה** — עם תשובות (פתיחה/סגירה אינטראקטיבית)
- **הדגמות** — הסברים מעשיים ודוגמאות קוד
- **הדמיות** — DNS Lookup, TCP Handshake, Encapsulation, Packet Flow
- **מחוץ לקופסא** — שאלות חשיבה מעבר לתוכן הבסיסי
- **חיפוש בתכנים** — "יש לי שאלה" — חיפוש בתכני המדריך לפי שאלות נפוצות

## הרצה

```bash
npm install
npm run dev
```

ואז בדפדפן: **http://localhost:5173**

## בנייה לפרודקשן

```bash
npm run build
# הקבצים ב־dist/
```

## מקור התוכן

התוכן מבוסס על הספר **רשתות מחשבים** (מטה הסייבר הצה"לי, גרסה 2.2):

- [networks.pdf](https://www.lamed-oti.com/school/oe/networks/networks.pdf)

המדריך כולל 14 פרקים, בעיבוד פורמט למידה אינטראקטיבית — הסברים, הדגמות, סיכומים, שאלות הבנה והדמיות.

## מבנה תוכן

```javascript
{
  type: "explanation" | "demo" | "summary" | "questions" | "simulation" | "thinkOutside",
  title: "כותרת",
  content: "HTML",           // או
  questions: [{ q, a }],     // לסוג questions
  simId: "tcpHandshake" | "dnsLookup" | "encapsulation" | "packetFlow",  // לסוג simulation
  blocks: [{ title, icon, content }]  // לסוג thinkOutside
}
```

## הדמיות זמינות

| simId         | תיאור                          |
|---------------|----------------------------------|
| `tcpHandshake`| שלושת השלבים: SYN, SYN-ACK, ACK |
| `dnsLookup`   | תרגום דומיין ל־IP              |
| `encapsulation` | Encapsulation / Decapsulation |
| `packetFlow`  | מסלול חבילה ברשת (מחשב → Switch → נתבים → שרת) |

## מבנה הפרויקט

```
NetworksGuide/
├── src/
│   ├── components/
│   │   ├── TCPHandshakeSim.jsx
│   │   ├── DnsLookupSim.jsx
│   │   ├── EncapsulationSim.jsx
│   │   ├── PacketFlowSim.jsx
│   │   ├── ThinkOutsideBox.jsx
│   │   ├── AskQuestion.jsx
│   │   └── KeyTip.jsx
│   ├── data/
│   │   └── content.js    # כל תכני הלמידה
│   └── App.jsx
├── screenshots/
├── package.json
└── README.md
```

## טכנולוגיות

- **React 18** + **Vite 5**
- CSS עם משתנים (Theming)
- תוכן ב־Hebrew RTL

## רישיון

MIT License — ראה [LICENSE](LICENSE).
