
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
    chapters: [
      { id: 1, title: "רשתות מחשבים — קורס מלא", pages: [{ type: "html_page", title: "Networks Course", src: "/learn/networks/networks_course.html" }] },
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
    subtitle: 'Terminal, Bash, הרשאות, תהליכים, רשת, Scripting — 10 פרקים',
    icon: '🐧',
    color: '#00ff88',
    level: 'מתחיל–מתקדם',
    fullPage: true,
    chapters: [
      { id: 400, title: "מערכות לינוקס — קורס מלא", pages: [{ type: "html_page", title: "Linux Course", src: "/learn/linux/linux_course.html" }] },
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
