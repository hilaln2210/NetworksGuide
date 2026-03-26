
// ===== TRACKS =====
// Each track is a self-contained learning path with its own chapters.
// Chapter IDs: Networking=1-99, Cyber=101-199, WebAPI=300-399, Linux=400-499, Crypto=500-599

export const tracks = [
  {
    id: 'networking',
    title: 'רשתות מחשבים',
    subtitle: 'איך עובד האינטרנט, Sockets, Wireshark, TCP/IP, Scapy ועוד — 12 פרקים',
    icon: '🌐',
    color: '#0891b2',
    level: 'מתחיל–מתקדם',
    fullPage: true,
    quizSrc: '/learn/networks/quiz_game.html',
    chapters: [
      { id: 1,  title: "🌐 תחילת מסע",              pages: [{ type: "html_page", title: "תחילת מסע",              src: "/learn/networks/learn_ch01.html", srcEn: "/learn/networks-en/learn_ch01.html" }] },
      { id: 2,  title: "🔌 תכנות Sockets",           pages: [{ type: "html_page", title: "תכנות Sockets",           src: "/learn/networks/learn_ch02.html", srcEn: "/learn/networks-en/learn_ch02.html" }] },
      { id: 3,  title: "🦈 Wireshark ומודל 5 שכבות", pages: [{ type: "html_page", title: "Wireshark ומודל 5 שכבות", src: "/learn/networks/learn_ch03.html", srcEn: "/learn/networks-en/learn_ch03.html" }] },
      { id: 4,  title: "📡 שכבת האפליקציה",          pages: [{ type: "html_page", title: "שכבת האפליקציה",          src: "/learn/networks/learn_ch04.html", srcEn: "/learn/networks-en/learn_ch04.html" }] },
      { id: 5,  title: "🐍 Scapy",                   pages: [{ type: "html_page", title: "Scapy",                   src: "/learn/networks/learn_ch05.html", srcEn: "/learn/networks-en/learn_ch05.html" }] },
      { id: 6,  title: "🚦 שכבת התעבורה",            pages: [{ type: "html_page", title: "שכבת התעבורה",            src: "/learn/networks/learn_ch06.html", srcEn: "/learn/networks-en/learn_ch06.html" }] },
      { id: 7,  title: "🌍 שכבת הרשת",               pages: [{ type: "html_page", title: "שכבת הרשת",               src: "/learn/networks/learn_ch07.html", srcEn: "/learn/networks-en/learn_ch07.html" }] },
      { id: 8,  title: "🔗 שכבת הקו",                pages: [{ type: "html_page", title: "שכבת הקו",                src: "/learn/networks/learn_ch08.html", srcEn: "/learn/networks-en/learn_ch08.html" }] },
      { id: 9,  title: "🔀 רכיבי רשת",               pages: [{ type: "html_page", title: "רכיבי רשת",               src: "/learn/networks/learn_ch09.html", srcEn: "/learn/networks-en/learn_ch09.html" }] },
      { id: 10, title: "⚡ השכבה הפיזית",             pages: [{ type: "html_page", title: "השכבה הפיזית",             src: "/learn/networks/learn_ch10.html", srcEn: "/learn/networks-en/learn_ch10.html" }] },
      { id: 11, title: "🧩 איך הכל מתחבר",           pages: [{ type: "html_page", title: "איך הכל מתחבר",           src: "/learn/networks/learn_ch11.html", srcEn: "/learn/networks-en/learn_ch11.html" }] },
      { id: 12, title: "⚙️ Sockets מתקדם",           pages: [{ type: "html_page", title: "Sockets מתקדם",           src: "/learn/networks/learn_ch12.html", srcEn: "/learn/networks-en/learn_ch12.html" }] },
    ]
  },
  {
    id: 'cyber',
    title: 'אבטחת מידע',
    subtitle: '9 פרקים, 12 מעבדות, חידון — מהבסיס עד טכניקות מתקדמות',
    icon: '🔐',
    color: '#ef4444',
    level: 'מתחיל–מתקדם',
    quizSrc: '/learn/security/quiz_game.html',
    quizSrcEn: '/learn/security-en/quiz_game.html',
    chapters: [
      { id: 100, title: "מה זה אבטחת מידע? — מבוא מאפס",      pages: [{ type: "html_page", title: "מבוא מאפס",                        src: "/learn/security/learn_ch01.html", srcEn: "/learn/security-en/learn_ch01.html" }] },
      { id: 101, title: "יסודות אבטחת מידע — CIA Triad",       pages: [{ type: "html_page", title: "יסודות אבטחת מידע — CIA Triad",   src: "/learn/security/learn_ch02.html", srcEn: "/learn/security-en/learn_ch02.html" }] },
      { id: 102, title: "Social Engineering & Phishing",        pages: [{ type: "html_page", title: "Social Engineering & Phishing",    src: "/learn/security/learn_ch03.html", srcEn: "/learn/security-en/learn_ch03.html" }] },
      { id: 103, title: "קריפטוגרפיה — ההצפנה שמגנה על הכל",   pages: [{ type: "html_page", title: "Cryptography",                    src: "/learn/security/learn_ch04.html", srcEn: "/learn/security-en/learn_ch04.html" }] },
      { id: 104, title: "אבטחת רשת — Firewalls, IDS, VPN",     pages: [{ type: "html_page", title: "Network Security",                src: "/learn/security/learn_ch05.html", srcEn: "/learn/security-en/learn_ch05.html" }] },
      { id: 105, title: "Malware — סוגים, זיהוי ומניעה",       pages: [{ type: "html_page", title: "Malware",                         src: "/learn/security/learn_ch06.html", srcEn: "/learn/security-en/learn_ch06.html" }] },
      { id: 106, title: "Penetration Testing — לחשוב כמו תוקף", pages: [{ type: "html_page", title: "Penetration Testing",            src: "/learn/security/learn_ch07.html", srcEn: "/learn/security-en/learn_ch07.html" }] },
      { id: 107, title: "SOC & Incident Response",              pages: [{ type: "html_page", title: "SOC & Incident Response",          src: "/learn/security/learn_ch08.html", srcEn: "/learn/security-en/learn_ch08.html" }] },
      { id: 108, title: "Cloud Security & Compliance",          pages: [{ type: "html_page", title: "Cloud Security & Compliance",      src: "/learn/security/learn_ch09.html" }] },
    ]
  },
  {
    id: 'webapi',
    title: 'Web ו-APIs',
    subtitle: 'HTTP, REST, GraphQL, Auth, WebSockets, Performance, API Design — 8 פרקים',
    icon: '🌍',
    color: '#06b6d4',
    level: 'מתחיל–בינוני',
    fullPage: true,
    chapters: [
      { id: 300, title: "Web & APIs — קורס מלא", pages: [{ type: "html_page", title: "Web & APIs Course", src: "/learn/webapi/web_apis_course.html" }] },
    ]
  },
  {
    id: 'linux',
    title: 'מערכות לינוקס',
    subtitle: 'Terminal, Bash, הרשאות, תהליכים, רשת, Scripting — 10 פרקים + 6 מעבדות',
    icon: '🐧',
    color: '#00ff88',
    level: 'מתחיל–מתקדם',
    quizSrc: '/learn/linux/quiz_game.html',
    chapters: [
      { id: 400, title: "🐧 מה זה לינוקס ולמה ללמוד אותו?",    pages: [{ type: "html_page", title: "מה זה לינוקס",              src: "/learn/linux/learn_ch01.html", srcEn: "/learn/linux-en/learn_ch01.html" }] },
      { id: 401, title: "📁 ניווט בתיקיות וקבצים",               pages: [{ type: "html_page", title: "ניווט בתיקיות וקבצים",      src: "/learn/linux/learn_ch02.html", srcEn: "/learn/linux-en/learn_ch02.html" }] },
      { id: 402, title: "📝 קריאה וכתיבה של קבצים",              pages: [{ type: "html_page", title: "קריאה וכתיבה של קבצים",     src: "/learn/linux/learn_ch03.html", srcEn: "/learn/linux-en/learn_ch03.html" }] },
      { id: 403, title: "🔐 הרשאות ומשתמשים",                    pages: [{ type: "html_page", title: "הרשאות ומשתמשים",           src: "/learn/linux/learn_ch04.html", srcEn: "/learn/linux-en/learn_ch04.html" }] },
      { id: 404, title: "🔗 Pipes ו-Redirection",                pages: [{ type: "html_page", title: "Pipes ו-Redirection",       src: "/learn/linux/learn_ch05.html", srcEn: "/learn/linux-en/learn_ch05.html" }] },
      { id: 405, title: "⚙️ Processes — תהליכים וניהולם",         pages: [{ type: "html_page", title: "Processes",                 src: "/learn/linux/learn_ch06.html", srcEn: "/learn/linux-en/learn_ch06.html" }] },
      { id: 406, title: "🌐 רשת בסיסית",                         pages: [{ type: "html_page", title: "רשת בסיסית",                src: "/learn/linux/learn_ch07.html", srcEn: "/learn/linux-en/learn_ch07.html" }] },
      { id: 407, title: "📦 ניהול תוכנות וחבילות",                pages: [{ type: "html_page", title: "ניהול תוכנות וחבילות",       src: "/learn/linux/learn_ch08.html", srcEn: "/learn/linux-en/learn_ch08.html" }] },
      { id: 408, title: "💻 Bash Scripting — אוטומציה ראשונה",    pages: [{ type: "html_page", title: "Bash Scripting",            src: "/learn/linux/learn_ch09.html", srcEn: "/learn/linux-en/learn_ch09.html" }] },
      { id: 409, title: "🔍 Logs, חיפוש ו-Troubleshooting",      pages: [{ type: "html_page", title: "Logs ו-Troubleshooting",    src: "/learn/linux/learn_ch10.html", srcEn: "/learn/linux-en/learn_ch10.html" }] },
    ]
  },
  {
    id: 'crypto',
    title: 'Blockchain & Crypto Forensics',
    subtitle: 'בלוקצ\'יין, ארנקים, On-Chain Analysis, Scam Detection, מיקסרים, Cross-Chain — 12 פרקים',
    icon: '🔗',
    color: '#f59e0b',
    level: 'מתחיל–מתקדם',
    fullPage: true,
    quizSrc: '/learn/crypto/quiz_game.html',
    chapters: [
      { id: 500, title: "🔗 בלוקצ'יין — איך עובד",                pages: [{ type: "html_page", title: "Blockchain",               src: "/learn/crypto/learn_ch01.html", srcEn: "/learn/crypto-en/learn_ch01.html" }] },
      { id: 501, title: "👛 ארנקים — סוגים ומבנה",                 pages: [{ type: "html_page", title: "Wallets",                  src: "/learn/crypto/learn_ch02.html", srcEn: "/learn/crypto-en/learn_ch02.html" }] },
      { id: 502, title: "🌐 Wallet Domains",                       pages: [{ type: "html_page", title: "Wallet Domains",           src: "/learn/crypto/learn_ch03.html", srcEn: "/learn/crypto-en/learn_ch03.html" }] },
      { id: 503, title: "🔍 On-Chain Analysis",                    pages: [{ type: "html_page", title: "On-Chain Analysis",        src: "/learn/crypto/learn_ch04.html", srcEn: "/learn/crypto-en/learn_ch04.html" }] },
      { id: 504, title: "🕵️ זיהוי בעלי ארנקים",                   pages: [{ type: "html_page", title: "Wallet Attribution",       src: "/learn/crypto/learn_ch05.html", srcEn: "/learn/crypto-en/learn_ch05.html" }] },
      { id: 505, title: "🚨 Scam Wallets — זיהוי",                 pages: [{ type: "html_page", title: "Scam Detection",           src: "/learn/crypto/learn_ch06.html", srcEn: "/learn/crypto-en/learn_ch06.html" }] },
      { id: 506, title: "🌊 מיקסרים ו-Tumbling",                   pages: [{ type: "html_page", title: "Mixers & Tumbling",        src: "/learn/crypto/learn_ch07.html", srcEn: "/learn/crypto-en/learn_ch07.html" }] },
      { id: 507, title: "🏦 Exchanges — CEX & DEX",                pages: [{ type: "html_page", title: "Exchanges",                src: "/learn/crypto/learn_ch08.html", srcEn: "/learn/crypto-en/learn_ch08.html" }] },
      { id: 508, title: "🎨 NFT ו-Smart Contracts",                pages: [{ type: "html_page", title: "NFT & Smart Contracts",    src: "/learn/crypto/learn_ch09.html", srcEn: "/learn/crypto-en/learn_ch09.html" }] },
      { id: 509, title: "🌉 Cross-Chain Tracing",                  pages: [{ type: "html_page", title: "Cross-Chain Tracing",      src: "/learn/crypto/learn_ch10.html", srcEn: "/learn/crypto-en/learn_ch10.html" }] },
      { id: 510, title: "🔏 Privacy Coins",                        pages: [{ type: "html_page", title: "Privacy Coins",            src: "/learn/crypto/learn_ch11.html", srcEn: "/learn/crypto-en/learn_ch11.html" }] },
      { id: 511, title: "⚖️ Case Study — חקירה מלאה",              pages: [{ type: "html_page", title: "Case Study",               src: "/learn/crypto/learn_ch12.html", srcEn: "/learn/crypto-en/learn_ch12.html" }] },
    ]
  },
  // ── LOCKED — בעריכה ──
  {
    id: 'research',
    title: 'חקר רשתות',
    subtitle: 'Wireshark, BGP, DNS, HTTP/2, eBPF, TLS, Container Networking',
    icon: '🔬',
    color: '#8b5cf6',
    level: 'מתקדם',
    locked: true,
    chapters: []
  },
  {
    id: 'redteam',
    title: 'Red Team — פריצה אתית',
    subtitle: 'Kali Linux, XSS, SQLi, סריקה ופריצה אתית — מהבסיס לתרגול',
    icon: '🔴',
    color: '#dc2626',
    level: 'בינוני–מתקדם',
    locked: true,
    chapters: []
  },
]

// Backward compatibility — defaults to first track chapters
export const chapters = tracks[0].chapters
