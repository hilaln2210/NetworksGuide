
// ===== TRACKS =====
// Each track is a self-contained learning path with its own chapters.
// Chapter IDs: Networking=1-99, Cyber=101-199, DevOps=201-299, Research=301-399

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
  { id: 1,  title: "תחילת מסע — איך עובד האינטרנט?",   pages: [{ type: "html_page", title: "תחילת מסע — איך עובד האינטרנט?",   src: "/learn/networks/learn_ch01.html" }] },
  { id: 2,  title: "תכנות ב-Sockets",                   pages: [{ type: "html_page", title: "תכנות ב-Sockets",                   src: "/learn/networks/learn_ch02.html" }] },
  { id: 3,  title: "Wireshark ומודל חמש השכבות",         pages: [{ type: "html_page", title: "Wireshark ומודל חמש השכבות",         src: "/learn/networks/learn_ch03.html" }] },
  { id: 4,  title: "שכבת האפליקציה",                    pages: [{ type: "html_page", title: "שכבת האפליקציה",                    src: "/learn/networks/learn_ch04.html" }] },
  { id: 5,  title: "Scapy — Packet Crafting",            pages: [{ type: "html_page", title: "Scapy — Packet Crafting",            src: "/learn/networks/learn_ch05.html" }] },
  { id: 6,  title: "שכבת התעבורה",                      pages: [{ type: "html_page", title: "שכבת התעבורה",                      src: "/learn/networks/learn_ch06.html" }] },
  { id: 7,  title: "שכבת הרשת",                         pages: [{ type: "html_page", title: "שכבת הרשת",                         src: "/learn/networks/learn_ch07.html" }] },
  { id: 8,  title: "שכבת הקו",                          pages: [{ type: "html_page", title: "שכבת הקו",                          src: "/learn/networks/learn_ch08.html" }] },
  { id: 9,  title: "רכיבי רשת",                         pages: [{ type: "html_page", title: "רכיבי רשת",                         src: "/learn/networks/learn_ch09.html" }] },
  { id: 10, title: "השכבה הפיזית",                      pages: [{ type: "html_page", title: "השכבה הפיזית",                      src: "/learn/networks/learn_ch10.html" }] },
  { id: 11, title: "איך הכל מתחבר",                     pages: [{ type: "html_page", title: "איך הכל מתחבר",                     src: "/learn/networks/learn_ch11.html" }] },
  { id: 12, title: "תכנות Sockets מתקדם",               pages: [{ type: "html_page", title: "תכנות Sockets מתקדם",               src: "/learn/networks/learn_ch12.html" }] },
    ]
  },
  {
    id: 'cyber',
    title: 'אבטחת מידע',
    subtitle: '8 פרקים, 12 מעבדות, חידון — מהבסיס עד טכניקות מתקדמות',
    icon: '🔐',
    color: '#ef4444',
    level: 'בינוני–מתקדם',
    quizSrc: '/learn/security/quiz_game.html',
    chapters: [
      { id: 101, title: "יסודות אבטחת מידע — CIA Triad", pages: [{ type: "html_page", title: "יסודות אבטחת מידע — CIA Triad", src: "/learn/security/learn_ch01.html" }] },
      { id: 102, title: "Social Engineering & Phishing", pages: [{ type: "html_page", title: "Social Engineering & Phishing", src: "/learn/security/learn_ch02.html" }] },
      { id: 103, title: "קריפטוגרפיה — הצפנה", pages: [{ type: "html_page", title: "קריפטוגרפיה — הצפנה", src: "/learn/security/learn_ch03.html" }] },
      { id: 104, title: "רשתות ואבטחת רשת", pages: [{ type: "html_page", title: "רשתות ואבטחת רשת", src: "/learn/security/learn_ch04.html" }] },
      { id: 105, title: "Malware — סוגים, זיהוי ומניעה", pages: [{ type: "html_page", title: "Malware — סוגים, זיהוי ומניעה", src: "/learn/security/learn_ch05.html" }] },
      { id: 106, title: "Penetration Testing", pages: [{ type: "html_page", title: "Penetration Testing", src: "/learn/security/learn_ch06.html" }] },
      { id: 107, title: "SOC & Incident Response", pages: [{ type: "html_page", title: "SOC & Incident Response", src: "/learn/security/learn_ch07.html" }] },
      { id: 108, title: "Cloud Security & Compliance", pages: [{ type: "html_page", title: "Cloud Security & Compliance", src: "/learn/security/learn_ch08.html" }] }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    subtitle: 'Linux, Docker, Kubernetes, Terraform, CI/CD, Observability — 9 פרקים',
    icon: '☁️',
    color: '#22c55e',
    level: 'בינוני–מתקדם',
    quizSrc: '/learn/devops/quiz_game.html',
    chapters: [
      { id: 201, title: "מה זה DevOps — תרבות לפני טכנולוגיה",         pages: [{ type: "html_page", title: "מה זה DevOps",                     src: "/learn/devops/learn_ch01.html" }] },
      { id: 202, title: "Linux & Shell",                                pages: [{ type: "html_page", title: "Linux & Shell",                      src: "/learn/devops/learn_ch02.html" }] },
      { id: 203, title: "Docker & Containers",                          pages: [{ type: "html_page", title: "Docker & Containers",                 src: "/learn/devops/learn_ch03.html" }] },
      { id: 204, title: "Kubernetes — ניצח את הכאוס",                  pages: [{ type: "html_page", title: "Kubernetes",                          src: "/learn/devops/learn_ch04.html" }] },
      { id: 205, title: "CI/CD — Pipeline מקוד לפרודקשן",              pages: [{ type: "html_page", title: "CI/CD Pipeline",                      src: "/learn/devops/learn_ch05.html" }] },
      { id: 206, title: "Infrastructure as Code — Terraform & Ansible", pages: [{ type: "html_page", title: "Infrastructure as Code",              src: "/learn/devops/learn_ch06.html" }] },
      { id: 207, title: "Observability — ראה, הבן, פעל",               pages: [{ type: "html_page", title: "Observability",                       src: "/learn/devops/learn_ch07.html" }] },
      { id: 208, title: "Cloud — AWS, Azure, GCP לעומק",               pages: [{ type: "html_page", title: "Cloud",                               src: "/learn/devops/learn_ch08.html" }] },
      { id: 209, title: "DevSecOps — אבטחה שנבנית, לא מודבקת",        pages: [{ type: "html_page", title: "DevSecOps",                           src: "/learn/devops/learn_ch09.html" }] },
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
    id: 'linux',
    title: 'מערכות ולינוקס',
    subtitle: 'Philosophy, Filesystem, Process, Bash, Networking, Storage, systemd — 10 פרקים',
    icon: '🐧',
    color: '#f59e0b',
    level: 'מתחיל–בינוני',
    quizSrc: '/learn/linux/quiz_game.html',
    chapters: [
      { id: 401, title: "The Linux Philosophy",                                 pages: [{ type: "html_page", title: "Linux Philosophy",    src: "/learn/linux/learn_ch01.html" }] },
      { id: 402, title: "Filesystem Hierarchy",                                 pages: [{ type: "html_page", title: "Filesystem",          src: "/learn/linux/learn_ch02.html" }] },
      { id: 403, title: "Process Management",                                   pages: [{ type: "html_page", title: "Processes",           src: "/learn/linux/learn_ch03.html" }] },
      { id: 404, title: "Shell & Bash Scripting",                               pages: [{ type: "html_page", title: "Bash Scripting",      src: "/learn/linux/learn_ch04.html" }] },
      { id: 405, title: "Text Processing — grep, awk, sed",                    pages: [{ type: "html_page", title: "Text Processing",     src: "/learn/linux/learn_ch05.html" }] },
      { id: 406, title: "Networking — ss, ip, tcpdump, iptables",              pages: [{ type: "html_page", title: "Networking",          src: "/learn/linux/learn_ch06.html" }] },
      { id: 407, title: "Storage & Filesystems — LVM, RAID, ZFS",             pages: [{ type: "html_page", title: "Storage",             src: "/learn/linux/learn_ch07.html" }] },
      { id: 408, title: "systemd — ה-PID 1 המודרני",                          pages: [{ type: "html_page", title: "systemd",             src: "/learn/linux/learn_ch08.html" }] },
      { id: 409, title: "Performance Tuning",                                   pages: [{ type: "html_page", title: "Performance",         src: "/learn/linux/learn_ch09.html" }] },
      { id: 410, title: "Linux Security Hardening",                             pages: [{ type: "html_page", title: "Security Hardening", src: "/learn/linux/learn_ch10.html" }] },
    ]
  },
  {
    id: 'webapi',
    title: 'Web ו-APIs',
    subtitle: 'HTTP, REST, GraphQL, Auth, WebSockets, Performance — 8 פרקים',
    icon: '🌍',
    color: '#06b6d4',
    level: 'מתחיל–בינוני',
    quizSrc: '/learn/webapi/quiz_game.html',
    chapters: [
      { id: 301, title: "HTTP — הפרוטוקול שמריץ את האינטרנט",  pages: [{ type: "html_page", title: "HTTP",                       src: "/learn/webapi/learn_ch01.html" }] },
      { id: 302, title: "REST API — תכנון שנעשה נכון",          pages: [{ type: "html_page", title: "REST API",                   src: "/learn/webapi/learn_ch02.html" }] },
      { id: 303, title: "GraphQL — בקש רק מה שאתה צריך",       pages: [{ type: "html_page", title: "GraphQL",                    src: "/learn/webapi/learn_ch03.html" }] },
      { id: 304, title: "Authentication & Authorization",        pages: [{ type: "html_page", title: "Auth",                       src: "/learn/webapi/learn_ch04.html" }] },
      { id: 305, title: "WebSockets & Real-Time",               pages: [{ type: "html_page", title: "WebSockets",                 src: "/learn/webapi/learn_ch05.html" }] },
      { id: 306, title: "Performance & Caching",                pages: [{ type: "html_page", title: "Performance & Caching",      src: "/learn/webapi/learn_ch06.html" }] },
      { id: 307, title: "API Design Patterns & Architecture",   pages: [{ type: "html_page", title: "API Design Patterns",        src: "/learn/webapi/learn_ch07.html" }] },
      { id: 308, title: "API Testing, Docs & Versioning",       pages: [{ type: "html_page", title: "API Testing & Versioning",   src: "/learn/webapi/learn_ch08.html" }] },
    ]
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

// Backward compatibility — defaults to networking track chapters
export const chapters = tracks[0].chapters
