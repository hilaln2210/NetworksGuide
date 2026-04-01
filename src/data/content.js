
// ===== TRACKS =====
// Each track is a self-contained learning path with its own chapters.
// Chapter IDs: Networking=1-99, Cyber=101-199, WebAPI=300-399, Linux=400-499, Crypto=500-599

export const tracks = [
  {
    id: 'networking',
    title: 'רשתות מחשבים',
    subtitle: 'איך עובד האינטרנט, Sockets, Wireshark, TCP/IP, Scapy ועוד — 13 פרקים',
    icon: '🌐',
    color: '#0891b2',
    level: 'מתחיל–מתקדם',
    fullPage: true,
    chapterCount: 13,
    chapters: [
      { id: 1, title: "רשתות מחשבים — קורס מלא", pages: [{ type: "html_page", title: "Networks Course", src: "/learn/networks/networks_course.html" }] },
    ]
  },
  {
    id: 'cyber',
    title: 'אבטחת מידע',
    subtitle: 'CIA Triad, קריפטוגרפיה, Malware, Penetration Testing, SOC — 9 פרקים',
    icon: '🔐',
    color: '#ef4444',
    level: 'מתחיל–מתקדם',
    fullPage: true,
    chapterCount: 9,
    chapters: [
      { id: 100, title: "אבטחת מידע — קורס מלא", pages: [{ type: "html_page", title: "Cybersecurity Course", src: "/learn/security/cyber_course.html" }] },
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
    chapterCount: 8,
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
    chapterCount: 10,
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
    chapterCount: 12,
    chapters: [
      { id: 500, title: "Blockchain & Crypto Forensics — קורס מלא", pages: [{ type: "html_page", title: "Crypto Course", src: "/learn/crypto/crypto_course.html" }] },
    ]
  },
  {
    id: 'ai-agents',
    title: 'AI Agents & Multi-Agent Systems',
    subtitle: 'סוכנים חכמים, מערכות מרובות סוכנים, LLM Agents, כלים, זיכרון, תכנון — 10 פרקים',
    icon: '🤖',
    color: '#8b5cf6',
    level: 'מתחיל–מתקדם',
    fullPage: true,
    chapterCount: 10,
    chapters: [
      { id: 600, title: "AI Agents — קורס מלא", pages: [{ type: "html_page", title: "AI Agents Course", src: "/learn/ai-agents/ai_agents_course.html" }] },
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

// ===== ENRICHMENT COURSES =====
export const enrichmentTracks = [
  {
    id: 'trading-methods',
    title: 'שיטות מסחר',
    subtitle: 'Day Trading, Swing, Scalping, Price Action, Risk Management — קורס מלא',
    icon: '📈',
    color: '#10b981',
    level: 'מתחיל–מתקדם',
    fullPage: true,
    chapterCount: 8,
    chapters: [
      { id: 700, title: "שיטות מסחר — קורס מלא", pages: [{ type: "html_page", title: "Trading Methods", src: "/learn/enrichment/trading_methods.html" }] },
    ]
  },
]

// Backward compatibility — defaults to first track chapters
export const chapters = tracks[0].chapters
