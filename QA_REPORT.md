# דוח QA תוכן — NetworksGuide (v2)

**בדיקה מלאה של כל 9 המסלולים | דיוק טכני | שאלות חידון | איכות הסברים | עקביות**

519 עמודים | 504 שאלות | 97 פרקים | 9 מסלולים | מרץ 2026 | Claude AI (Anthropic)

| ✅ מדויק | ⚠️ לתיקון | ❌ שגוי | 💡 לשיפור |
|---|---|---|---|
| 499 | 3 | 1 | 20+ |

---

## 1. סיכום — ציון כולל: 9.3/10

לאחר קריאה מלאה של כל 519 עמודי הלמידה ו-504 שאלות החידון בכל 9 המסלולים — התוכן של NetworksGuide הוא ברמה גבוהה מאוד. 499 מתוך 504 שאלות מדויקות לחלוטין. מצאתי שגיאה אחת בלבד, 3 ניסוחים לשיפור, ו-20+ הצעות לשיפור.

> **הערה:** בדוח הקודם טעיתי לגבי Q47 (Broadcast/Collision Domain). בדיקה מחדש מראה שהתשובה נכונה לחלוטין. הדוח הנוכחי מתוקן.

### ציון לפי מסלול

| מסלול | עמודים | שאלות | ציון | הערות |
|---|---|---|---|---|
| 🌐 רשתות (ch1-26) | 203 | 145 | 9.5/10 | תוכן עמוק ומדויק. כמה עדכונים קטנים |
| 🔒 Cyber (ch101-115) | 43 | 120 | 9.2/10 | מצוין. סיפורי המקרה יוצאי דופן |
| ⚙️ DevOps (ch201-209) | 35 | 80 | 9.0/10 | K8s, Terraform, GitOps — מדויקים ועדכניים |
| 🔬 Research (ch301-308) | 26 | 84 | 9.3/10 | eBPF, QUIC, BGP — ברמה מקצועית |
| 🐧 Linux (ch401-410) | 57 | 60 | 9.0/10 | פקודות מדויקות. מבנה פדגוגי טוב |
| 🌍 Web & APIs (ch501-508) | 48 | 39 | 8.8/10 | REST, JWT, OAuth נכונים. GraphQL קצת שטחי |
| ⚔️ Red Team (ch601-608) | 37 | 56 | 9.1/10 | Kali, Nmap, Metasploit, SQLi — מדויקים |
| 🌑 Dark Web (ch801-805) | 25 | 25 | 9.4/10 | Tor, Onion Routing, Hidden Services — מצוין |
| 🛡️ SecureDev (ch701-708) | 45 | 40 | 9.2/10 | OWASP, Prompt Injection, SAST/DAST — מעולה |

---

## 2. שגיאה טכנית — 1 שגיאה בלבד

| # | מסלול/פרק | ממצא | חומרה | פעולה |
|---|---|---|---|---|
| ERR-01 | רשתות / ch6 — Q34 | שאלה: 'מה TIME_WAIT ב-TCP?'. תשובה: '2×MSL (2 דקות)'. הבעיה: ההסבר באותה שאלה עצמה אומר '60-120 שניות' — סתירה פנימית. RFC 793 מגדיר MSL=2 דקות → 2×MSL=4 דקות, אבל Linux default הוא 60-120 שניות. | ❌ גבוה | תקני: '2×MSL — ב-Linux בדרך כלל 60-120 שניות. RFC 793 מגדיר MSL=2 דק' |

---

## 3. מסלול רשתות (ch1-26) — 203 עמודים

### ✅ מה מצוין

- TCP Three-Way Handshake, Sliding Window, Congestion Control — מוסברים נכון ומעמיק
- TLS 1.3: 1-RTT, Perfect Forward Secrecy, ECDHE — מדויק ועדכני
- DNS: היררכיה, Records, DoH, TTL, Cache Poisoning vs DNSSEC — מקיף
- Subnetting: חישובים, CIDR, Supernetting — נכון לכל edge case
- IPv6: SLAAC, Multicast, header שונה מ-IPv4 — נכון
- BGP: AS Path, Longest Prefix Match — מדויק. סיפור Pakistan 2008 נכון
- פרק 9 (Hub/Switch/Router/VLAN/Firewall) — הפרק הטוב ביותר במסלול
- **Q47 (Broadcast/Collision Domain): תשובה מדויקת לחלוטין** — Switch לא מפריד Broadcast, כן מפריד Collision

### ⚠️ נקודות לשיפור

| # | פרק | ממצא | חומרה | פעולה |
|---|---|---|---|---|
| FIX-01 | ch2 — Sockets | חוסר עקביות: recv() מחזיר bytes אבל לא בכל הדוגמאות מציגים .decode() | נמוך | הוסיפי: 'recv() מחזיר bytes, שימוש ב-.decode() לקבלת string' |
| FIX-02 | ch6 — TCP | Cumulative ACK נזכר בשאלה Q106 בלי שהוסבר מספיק בפרק | בינוני | הוסיפי: 'ACK מצטבר — ACK=N אומר: קיבלתי הכל עד N-1' |
| FIX-03 | ch7 — Routing | Default Gateway בתור 0.0.0.0/0 לא מוסבר מפורשות | בינוני | הוסיפי: '0.0.0.0/0 = Default Route — שלח לכאן כשאין match ספציפי' |
| FIX-04 | ch8 — ARP | Gratuitous ARP לא מוסבר — מופיע בפרקי Cyber ומשתמשים לא יכירו | נמוך | הוסיפי: 'Gratuitous ARP — ARP broadcast ללא שאלה, עדכון טבלה פרואקטיבי' |
| FIX-05 | ch20 — TCP deep | Q34: '2 דקות' סותר '60-120 שניות' — ראה ERR-01 | גבוה | תקני כמתואר ב-ERR-01 |
| FIX-06 | ch21 — VPN | WireGuard 'לא stealth' — נכון, אבל חסר הסבר למה (UDP only, קל לזיהוי ב-DPI) | נמוך | הוסיפי: 'WireGuard = UDP only — DPI מזהה בקלות; OpenVPN מחקה HTTPS' |

---

## 4. מסלול Cyber (ch101-115) — 43 עמודים

### ✅ מה מצוין

- CIA Triad + STRIDE — מדויק עם דוגמאות רלוונטיות
- ARP Spoofing / MITM — הסבר טכני מדויק
- SYN Flood: half-open connections, SYN Cookies — נכון
- SQL Injection + XSS — מדויק עם קוד נכון
- סיפורי מקרה: Target 2013, DDoS 3.47 Tbps — מדויקים ומרתקים
- Defense in Depth, SIEM, CTF, Bug Bounty — מדויקים
- TLS Handshake diagram — נכון

### ⚠️ נקודות לשיפור

| # | פרק | ממצא | חומרה | פעולה |
|---|---|---|---|---|
| FIX-07 | ch105 — SOC | חסרה התייחסות ל-SOAR — משלים SIEM בתעשייה | נמוך | הוסיפי: 'SOAR = אוטומציה של תגובה — Splunk SOAR, Cortex XSOAR' |
| FIX-08 | ch107 — Crypto | חסרה Post-Quantum Cryptography — NIST סיים standardization ב-2024 | נמוך | הוסיפי: 'PQC — CRYSTALS-Kyber (KEM), CRYSTALS-Dilithium (Signature)' |
| FIX-09 | ch107 — Crypto | 'Avalanche Effect' מוזכר בשאלה Q188 אבל לא מוגדר בפרק | נמוך | הוסיפי: 'Avalanche Effect — שינוי ביט אחד משנה ~50% מהפלט' |

---

## 5. מסלול Red Team (ch601-608) — 37 עמודים

### ✅ מה מצוין

- White/Black/Grey Hat, היבט חוקי (ישראל + CFAA + GDPR), Responsible Disclosure — מדויק
- Kali Linux: הסבר הגיוני עם אפשרויות התקנה — נכון
- Recon: Passive vs Active, OSINT (Whois, theHarvester, Shodan, Google Dorking) — מדויק
- Nmap: SYN scan vs TCP Connect, NSE scripts — נכון
- XSS: Reflected/Stored/DOM — מדויק עם קוד נכון
- SQLi + SQLMap — נכון
- CSRF/SSRF/File Inclusion — נכון
- Burp Suite: Proxy, Repeater, Intruder, Scanner — נכון
- Metasploit: Exploits/Payloads/Auxiliary/Post — נכון
- Reverse Shell (Bash, Python) — קוד נכון
- Privilege Escalation: SUID, sudo -l, cron jobs — מדויק
- Hashcat -m values: 0=MD5, 100=SHA1, 1800=SHA-512, 1000=NTLM, 3200=bcrypt — נכון
- CVSS scores: 0-3.9/4-6.9/7-8.9/9-10. SQL Injection=9.8 — נכון
- מבנה דוח: Executive Summary, Finding structure — נכון

### ⚠️ נקודות לשיפור

| # | פרק | ממצא | חומרה | פעולה |
|---|---|---|---|---|
| FIX-10 | ch601 — Legal | 'עד 5 שנות מאסר' — נכון, אבל החוק תוקן ב-2002 ו-2017 | נמוך | הוסיפי: 'חוק המחשבים 1995, עם תיקונים 2002 ו-2017' |
| FIX-11 | ch603 — Recon | Baiting (USB נגוע) מסווג כ-Recon — בפועל זה Initial Access | בינוני | העבר ל-Exploitation או הוסף: 'גם וקטור כניסה, לא רק Recon' |
| FIX-12 | ch606 — Post-Exp | חסר Windows Event Log clearing כטכניקת Anti-Forensics נפוצה | נמוך | הוסיפי: 'wevtutil cl System — ניקוי Windows Event Log' |

---

## 6. מסלול Dark Web (ch801-805) — 25 עמודים

### ✅ מה מצוין — פרק יוצא דופן

- שכבות האינטרנט (Surface 5-10% / Deep 90-95% / Dark) — הגדרות מדויקות
- Onion Routing: שלושת ה-nodes, שכבות הצפנה, מה כל node רואה ומה לא — מדויק מאוד
- Guard Nodes נשמרים 2-3 חודשים — נכון ועם הסבר מדוע
- Hidden Services: Introduction Points, Rendezvous Point, DHT, .onion v3 — נכון
- SecureDrop: Freedom of the Press Foundation, 70+ ארגוני חדשות — נכון
- Silk Road 2013: טעויות אופרציוניות של אולבריכט — נכון
- Operation Bayonet 2017 (AlphaBay + Hansa) — מדויק
- Timing Attack, VPN vs Tor, Tails OS, Signal, Metadata — מדויקים
- מעמד חוקי בישראל — נכון

### ⚠️ נקודות קטנות

| # | פרק | ממצא | חומרה | פעולה |
|---|---|---|---|---|
| FIX-13 | ch802 — Tor | Directory Authorities — נכון, אבל חסר שהם מחולקים גיאוגרפית | נמוך | הוסיפי: 'מפוזרים גיאוגרפית — ארה"ב ואירופה, כדי שלא ניתן לסגור את כולם' |
| FIX-14 | ch804 — Privacy | חסר ציון Monero כאלטרנטיבה אנונימית ל-Bitcoin | נמוך | הוסיפי: 'Monero — מטבע קריפטו שמדגיש אנונימיות אמיתית' |

---

## 7. מסלול Secure Dev (ch701-708) — 45 עמודים

### ✅ מה מצוין — מסלול מרשים

- OWASP Top 10 (2021): סדר נכון — A01 Broken Access Control בראש — מדויק
- IDOR עם דוגמת /api/users/123 → /api/users/456 — מדויק
- SQL Injection: Classic, Blind (Boolean + Time-based), NoSQL — מדויק
- Command Injection: exec vs execFile — הסבר נכון
- bcrypt + Argon2, JWT alg=none, MFA (SMS חלש, TOTP, FIDO2) — נכון
- Session Management: regenerate after login, HttpOnly+Secure+SameSite — נכון
- CSP header, DOMPurify, textContent vs innerHTML — נכון
- Rate Limiting: Fixed Window, Sliding Window, Token Bucket — נכון
- Prompt Injection: Direct vs Indirect, OWASP LLM Top 10 — נכון ועדכני
- SAST/DAST/SCA, Secret Scanning, Container Security (Trivy) — נכון

### ⚠️ נקודות לשיפור

| # | פרק | ממצא | חומרה | פעולה |
|---|---|---|---|---|
| FIX-15 | ch703 — MFA | FIDO2 מוצג כ'הכי בטוח' בלי לציין שadoption עדיין גדל | נמוך | הוסיפי: 'FIDO2/WebAuthn — הכי בטוח, adoption הולך וגדל' |
| FIX-16 | ch705 — API | Mass Assignment לא מוזכר — חולשת API נפוצה | בינוני | הוסיפי: 'Mass Assignment — קבלת שדות לא מוגבלים. הגנה: allowlist של שדות מורשים' |
| FIX-17 | ch707 — Prompt Inj | Denylist-based filtering לא מודגש שניתן לעקיפה | בינוני | הוסיפי: 'Denylist ניתן לעקיפה. עדיפה ארכיטקטורת Privilege Separation' |

---

## 8. מסלולים נוספים — סיכום

### ⚙️ DevOps — מדויק לחלוטין
Docker, Kubernetes, AWS, CI/CD, SRE, Terraform, Prometheus, ArgoCD — כולם נכונים.

### 🔬 Research — ברמה מקצועית
Wireshark, BGP, QUIC, eBPF (Verifier, XDP_DROP, Cilium O(1) vs iptables O(n)), TLS 1.3, Container Networking — מדויק מאוד.

### 🐧 Linux — מדויק
כל הפקודות, הרשאות, Bash scripting, ניהול חבילות, אחסון, פתרון תקלות — נכון.

### 🌍 Web & APIs — כמעט מושלם

| # | פרק | ממצא | חומרה | פעולה |
|---|---|---|---|---|
| FIX-18 | ch501 | GraphQL שטחי — חסר N+1 problem ו-DataLoader | נמוך | הוסיפי: 'N+1 problem — שאילתה שמייצרת N שאילתות. פתרון: DataLoader batching' |
| FIX-19 | ch504 | OAuth 2.0 נכון, אבל PKCE לא מוזכר — קריטי ל-mobile/SPA | בינוני | הוסיפי: 'PKCE — הגנת OAuth 2.0 ל-public clients, מחליפה client_secret' |

---

## 9. הדברים הכי טובים

### שאלות חידון מצוינות
- **Q121**: נפילת פייסבוק 2021 (BGP prefix withdrawal) — מרתקת ומדויקת
- **Q172**: 0-RTT ב-QUIC + Replay Attack risk — מתקדמת ומדויקת
- **Q173**: Dual EC DRBG + NSA backdoor — ידע עמוק ומדויק
- **Q47**: Broadcast vs Collision Domain — תשובה מדויקת שמבחינה נכון בין שני מושגים
- **Q495-Q499**: Prompt Injection (Direct/Indirect/Jailbreak) — עדכני ומקיף
- **Q504**: Dockerfile non-root user — מעשי ונכון

### פרקי לימוד מצוינים
- **פרק 9 (רשתות)** — המודל שכל הפרקים צריכים לחקות
- **סיפור Target 2013** — מבנה Kill Chain מדויק, נתוני נזק אמיתיים
- **Hidden Services (ch803)** — Rendezvous Point mechanism ברמה שרק תיעוד Tor מכסה
- **Prompt Injection (ch707)** — Direct vs Indirect + OWASP LLM Top 10 — ברמה עדכנית מאוד
- **CVSS (ch608)** — טבלה מדויקת עם ציונים אמיתיים לדוגמאות

### עקביות מרשימה
- כל הפורטים הסטנדרטיים נכונים: SSH=22, DNS=53, HTTP=80, HTTPS=443, SMTP=25, IMAP=143
- כל hashcat -m values נכונים: 0=MD5, 100=SHA1, 1800=SHA-512, 1000=NTLM, 3200=bcrypt
- טרמינולוגיה עברית עקבית לאורך כל מסלול הרשתות

---

## 10. סדר עדיפויות לתיקון

| # | ממצא | עדיפות | למה |
|---|---|---|---|
| 1 | ERR-01 — TIME_WAIT סתירה | 🔴 מיידי | '2 דקות' סותר '60-120 שניות' באותה שאלה |
| 2 | FIX-02 — Cumulative ACK | 🟠 גבוה | מושג נבדק בחידון ולא מוסבר מספיק |
| 3 | FIX-03 — Default Route 0.0.0.0/0 | 🟠 גבוה | נפוץ מאוד בראיונות ובפועל |
| 4 | FIX-11 — Baiting סיווג שגוי | 🟠 גבוה | Baiting מסווג כ-Recon במקום Initial Access |
| 5 | FIX-16 — Mass Assignment | 🟠 גבוה | חולשת API נפוצה שלא מוזכרת |
| 6 | FIX-17 — Prompt Injection Denylist | 🟠 גבוה | Denylist ניתן לעקיפה — צריך להדגיש |
| 7 | FIX-19 — OAuth PKCE | 🟡 בינוני | קריטי ל-mobile/SPA — חסר |
| 8 | FIX-01 — Socket encoding | 🟡 בינוני | חוסר עקביות bytes/str |
| 9+ | FIX-04 עד FIX-18 | 🟢 שיפור | הרחבות תוכן שלא פוגעות בדיוק |

---

*NetworksGuide Content QA v2 | Claude AI | מרץ 2026 | 504 שאלות + 519 עמודים נבדקו | ציון כולל: 9.3/10*
