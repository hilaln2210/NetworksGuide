
// ===== TRACKS =====
// Each track is a self-contained learning path with its own chapters.
// Chapter IDs: Networking=1-99, Cyber=101-199, WebAPI=300-399

export const tracks = [
  {
    id: 'networking',
    title: 'רשתות מחשבים',
    subtitle: 'איך עובד האינטרנט, Sockets, Wireshark, TCP/IP, Scapy ועוד — 12 פרקים',
    icon: '🌐',
    color: '#0891b2',
    level: 'מתחיל–מתקדם',
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
    subtitle: 'HTTP, REST, GraphQL, Auth, WebSockets, Performance — 9 פרקים',
    icon: '🌍',
    color: '#06b6d4',
    level: 'מתחיל–בינוני',
    quizSrc: '/learn/webapi/quiz_game.html',
    chapters: [
      { id: 300, title: "מה זה API בכלל? — מבוא מאפס",          pages: [{ type: "html_page", title: "מבוא ל-API",                 src: "/learn/webapi/learn_ch01.html", srcEn: "/learn/webapi-en/learn_ch01.html" }] },
      { id: 301, title: "HTTP — הפרוטוקול שמריץ את האינטרנט",  pages: [{ type: "html_page", title: "HTTP",                       src: "/learn/webapi/learn_ch02.html", srcEn: "/learn/webapi-en/learn_ch02.html" }] },
      { id: 302, title: "REST API — תכנון שנעשה נכון",          pages: [{ type: "html_page", title: "REST API",                   src: "/learn/webapi/learn_ch03.html", srcEn: "/learn/webapi-en/learn_ch03.html" }] },
      { id: 303, title: "GraphQL — בקש רק מה שאתה צריך",       pages: [{ type: "html_page", title: "GraphQL",                    src: "/learn/webapi/learn_ch04.html", srcEn: "/learn/webapi-en/learn_ch04.html" }] },
      { id: 304, title: "Authentication & Authorization",        pages: [{ type: "html_page", title: "Auth",                       src: "/learn/webapi/learn_ch05.html", srcEn: "/learn/webapi-en/learn_ch05.html" }] },
      { id: 305, title: "WebSockets & Real-Time",               pages: [{ type: "html_page", title: "WebSockets",                 src: "/learn/webapi/learn_ch06.html", srcEn: "/learn/webapi-en/learn_ch06.html" }] },
      { id: 306, title: "Performance & Caching",                pages: [{ type: "html_page", title: "Performance & Caching",      src: "/learn/webapi/learn_ch07.html", srcEn: "/learn/webapi-en/learn_ch07.html" }] },
      { id: 307, title: "API Design Patterns & Architecture",   pages: [{ type: "html_page", title: "API Design Patterns",        src: "/learn/webapi/learn_ch08.html", srcEn: "/learn/webapi-en/learn_ch08.html" }] },
      { id: 308, title: "API Testing, Docs & Load Testing",     pages: [{ type: "html_page", title: "API Testing & Versioning",   src: "/learn/webapi/learn_ch09.html", srcEn: "/learn/webapi-en/learn_ch09.html" }] },
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
