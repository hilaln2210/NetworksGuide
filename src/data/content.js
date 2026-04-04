
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
    lastUpdated: '2026-04-04 15:31',
    syllabus: ['יסודות האינטרנט', 'תכנות Sockets', 'Wireshark ומודל שכבות', 'שכבת האפליקציה', 'Scapy', 'שכבת התעבורה', 'שכבת הרשת', 'שכבת הקו', 'רכיבי רשת', 'השכבה הפיזית', 'איך הכל מתחבר', 'Sockets מתקדם', 'רשתות מודרניות 2025'],
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
    lastUpdated: '2026-04-04 14:54',
    syllabus: ['CIA Triad ויסודות', 'קריפטוגרפיה', 'אימות והרשאות', 'אבטחת רשת', 'Malware וניתוח', 'Web Security', 'Penetration Testing', 'SOC ותגובה לאירועים', 'אבטחת ענן'],
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
    lastUpdated: '2026-04-03 16:17',
    syllabus: ['HTTP — בקשות ותגובות', 'REST API Design', 'JSON ועיבוד נתונים', 'Auth — אימות והרשאות', 'Headers & CORS', 'Real-Time — WebSockets', 'GraphQL', 'Performance & Caching'],
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
    lastUpdated: '2026-04-05 14:42',
    syllabus: ['מבוא ל-Linux', 'מערכת קבצים', 'פקודות בסיסיות', 'משתמשים והרשאות', 'תהליכים', 'רשת ב-Linux', 'חבילות ומנהלי חבילות', 'Bash Scripting', 'ניטור וביצועים', 'אבטחת Linux'],
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
    lastUpdated: '2026-03-26 11:25',
    syllabus: ['יסודות קריפטו', 'בלוקצ\'יין — איך עובד', 'ארנקים — סוגים ומבנה', 'Wallet Domains', 'On-Chain Analysis', 'זיהוי בעלי ארנקים', 'Scam Wallets — זיהוי', 'מיקסרים ו-Tumbling', 'DeFi Forensics', 'NFT & Token Analysis', 'Cross-Chain Tracing', 'כתיבת דוח חקירה'],
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
    lastUpdated: '2026-04-03 16:17',
    syllabus: ['מבוא ל-AI Agents', 'LLM — יסודות', 'Prompt Engineering', 'Tool Use & Function Calling', 'זיכרון ו-RAG', 'תכנון ו-Reasoning', 'Multi-Agent Systems', 'Orchestration Patterns', 'אבטחה ו-Guardrails', 'פרויקט מסכם'],
    chapters: [
      { id: 600, title: "AI Agents — קורס מלא", pages: [{ type: "html_page", title: "AI Agents Course", src: "/learn/ai-agents/ai_agents_course.html" }] },
    ]
  },
  {
    id: 'research',
    title: 'חקר רשתות',
    subtitle: 'Wireshark, BGP, DNS, HTTP/2, eBPF, TLS, Container Networking',
    icon: '🔬',
    color: '#0ea5e9',
    level: 'מתקדם',
    fullPage: true,
    chapterCount: 8,
    lastUpdated: '2026-04-04 13:54',
    syllabus: ['Wireshark מתקדם', 'BGP — ניתוב בין-דומייני', 'DNS — עומק', 'HTTP/2 & HTTP/3', 'TLS — הצפנה מעשית', 'eBPF — ניטור קרנל', 'Container Networking', 'Troubleshooting מתקדם'],
    chapters: [
      { id: 800, title: "חקר רשתות — קורס מלא", pages: [{ type: "html_page", title: "Network Research", src: "/learn/research/networks_course.html" }] },
    ]
  },
  {
    id: 'redteam',
    title: 'Red Team — פריצה אתית',
    subtitle: 'Kali Linux, XSS, SQLi, סריקה ופריצה אתית — מהבסיס לתרגול',
    icon: '🔴',
    color: '#dc2626',
    level: 'בינוני–מתקדם',
    fullPage: true,
    chapterCount: 8,
    lastUpdated: '2026-04-04 13:54',
    syllabus: ['מבוא ו-Kali Linux', 'Recon — איסוף מודיעין', 'Nmap — סריקת רשת', 'Web Attacks — XSS', 'SQL Injection', 'Burp Suite', 'Exploitation & Shells', 'דוח פריצה ו-CTF'],
    chapters: [
      { id: 900, title: "Red Team — קורס מלא", pages: [{ type: "html_page", title: "Red Team Course", src: "/learn/redteam/redteam_course.html" }] },
    ]
  },
  {
    id: 'ip-investigation',
    title: 'חקר כתובות IP',
    subtitle: 'OSINT & Network Intelligence — Geolocation, WHOIS, Shodan, Log Analysis — 8 פרקים',
    icon: '🔎',
    color: '#f97316',
    level: 'בינוני–מתקדם',
    fullPage: true,
    chapterCount: 8,
    lastUpdated: '2026-04-04 13:54',
    syllabus: ['מבוא — IP Investigation', 'Geolocation', 'WHOIS ו-ASN', 'Reverse DNS', 'Reputation — זיהוי סיכונים', 'Shodan ו-Censys', 'ניתוח לוגים', 'דוחות ו-Automation'],
    chapters: [
      { id: 1000, title: "חקר כתובות IP — קורס מלא", pages: [{ type: "html_page", title: "IP Investigation Course", src: "/learn/ip-investigation/ip_investigation_course.html" }] },
    ]
  },
]

// ===== ENRICHMENT COURSES (hidden behind passcode) =====
export const enrichmentTracks = [
  {
    id: 'trading-methods',
    title: 'שיטות מסחר',
    subtitle: 'Day Trading, Swing, Scalping, Price Action, Risk Management — קורס מלא',
    icon: '📈',
    color: '#10b981',
    level: 'מתחיל–מתקדם',
    fullPage: true,
    chapterCount: 11,
    chapters: [
      { id: 700, title: "שיטות מסחר — קורס מלא", pages: [{ type: "html_page", title: "Trading Methods", src: "/learn/enrichment/trading_methods.html" }] },
    ]
  },
]
export const ENRICHMENT_PASSCODE = '1234'

// Backward compatibility — defaults to first track chapters
export const chapters = tracks[0].chapters
