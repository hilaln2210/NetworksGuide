# דוח QA נוסף — NetworksGuide
## אזורים שלא נבדקו בדוח הקודם

מרץ 2026 | Claude AI | משלים את דוח ה-Content QA v2

---

## 1. תוכן אנגלית — content_en.js

### כיסוי כללי

298 עמודים מתורגמים מתוך ~519. כל הפרקים הראשיים (ch1-27, Cyber, DevOps, Research, Linux, WebAPI, RedTeam, DarkWeb, SecDev) מכוסים.

**ציון כולל: 8.5/10**

### ✅ מה עובד טוב

- רמת האנגלית עקבית ונגישה (A2-B1 כמוגדר) — שפה פשוטה, משפטים קצרים
- כל הטרמינולוגיה הטכנית מדויקת — פורטים, פרוטוקולים, פקודות — כולם נכונים
- קוד Python/Bash/YAML בפרקים הטכניים — זהה להברית, ללא שגיאות
- דוגמאות פקודות (nmap, curl, dig, iptables) — נכונות ב-EN בדיוק כמו בעברית
- פרקי Cyber ב-EN (ch101-115) — בולדים ומעוצבים יפה עם Markdown (** / - / |)
- פרקי DevOps, Research, SecDev ב-EN — ברמה מקצועית גבוהה

### ⚠️ ממצאים

| # | פרק/אזור | ממצא | חומרה | פעולה |
|---|---|---|---|---|
| EN-01 | ch1 — GeoIP | עמוד GeoIP מסתיים במילה 'geoiptool.com' ללא משפט סיום — נראה חתוך | נמוך | הוסיפי משפט סיום: 'Try it: visit geoiptool.com to see your own location.' |
| EN-02 | ch18 — IPv6 | עמוד 'Think Outside the Network' מתורגם כ-`{}` — תוכן ריק לגמרי | בינוני | תוסיפי contentEn לעמודי thinkOutside של ch18, ch19, ch20, ch21, ch22 |
| EN-03 | ch18–ch26 | עמודי 'Test Your Knowledge' (questions pages) מציגים `{}` ב-EN — השאלות עצמן קיימות ב-quizBank.js עם qEn, אבל עמוד הquestions בפרק מציג תוכן ריק | בינוני | בדקי את הרנדור של questions pages במצב EN |
| EN-04 | Cyber ch101+ | פרקי Cyber ב-EN משתמשים ב-Markdown bold (`**text**`) בתוך HTML — בדפדפן זה יוצג כטקסט גלוי ולא כבולד | גבוה | המירי `**text**` ל-`<strong>text</strong>` בכל contentEn של ch101-115 |
| EN-05 | DevOps ch201+ | אותה בעיה — `**Kubernetes**`, `**Pod:**` וכו' בתוך contentEn שמרונדר כ-HTML | גבוה | המירי Markdown syntax ל-HTML tags בכל contentEn של ch201-209, ch301-308 |
| EN-06 | Credits — CSS Modules | CreditsTab מציג 'CSS Modules' כטכנולוגיה — האפליקציה לא משתמשת ב-CSS Modules (CSS רגיל עם קבצי .css) | נמוך | שנה ל-'CSS (Component Stylesheets)' |
| EN-07 | Credits — Puppeteer | CreditsTab מציג 'Puppeteer (QA)' — Puppeteer לא נמצא ב-package.json ולא בשימוש בייצור | נמוך | הסר מרשימת הטכנולוגיות או שנה ל-'Claude AI (Content QA)' |
| EN-08 | Credits — Rubik Font | CreditsTab מציג 'Rubik Font' — האפליקציה טוענת Google Fonts? לא נמצא ב-index.html | נמוך | בדקי האם Rubik אכן בשימוש, אחרת הסר |

---

## 2. סימולציות — EN support

כל 10 הסימולציות (TCPHandshakeSim, EncapsulationSim, DnsLookupSim, PacketFlowSim, DHCPSim, ARPSim, FirewallSim, HTTPRequestSim, PingSim, TLSHandshakeSim) **עברית בלבד** — hardcoded `dir="rtl"` ללא `useLang` או i18n.

### סטטוס לפי סימולציה

| סימולציה | עברית hardcoded | RTL | i18n | ציון |
|---|---|---|---|---|
| TCPHandshakeSim | ✅ (16 ביטויים) | ✅ | ❌ | עברית only |
| EncapsulationSim | ✅ (13) | ✅ | ❌ | עברית only |
| DnsLookupSim | ✅ (10) | ✅ | ❌ | עברית only |
| PacketFlowSim | ✅ (8) | ✅ | ❌ | עברית only |
| DHCPSim | ✅ (15) | ✅ | ❌ | עברית only |
| ARPSim | ✅ (13) | ✅ | ❌ | עברית only |
| FirewallSim | ✅ (25) | ✅ | ❌ | עברית only |
| HTTPRequestSim | ✅ (38) | ✅ | ❌ | עברית only |
| PingSim | ✅ (24) | ✅ | ❌ | עברית only |
| TLSHandshakeSim | ✅ (43) | ✅ | ❌ | עברית only |

### ✅ מה עובד טוב

- הלוגיקה של כל הסימולציות מדויקת טכנית (נבדק בדוח הקודם)
- TCPHandshakeSim, TLSHandshakeSim, DHCPSim — אנימציות תקינות
- SubnetCalcSim (לא ברשימה למעלה) — כן תומך ב-EN, לוגיקה מדויקת

### ⚠️ ממצא

| # | אזור | ממצא | חומרה | פעולה |
|---|---|---|---|---|
| SIM-01 | כל 10 הסימולציות | משתמש EN שעובר לשפה אנגלית יראה סימולציות בעברית בלבד — ללא fallback, ללא הסבר | גבוה | לטווח קצר: הוסיפי badge "Hebrew only 🇮🇱" על כל סימולציה במצב EN. לטווח ארוך: תרגמי |

---

## 3. חידון — explanationEn חסר

121 שאלות ללא תרגום הסבר לאנגלית. משתמש EN שטועה בחידון רואה הסבר בעברית.

### אילו פרקים חסרים (לפי עדיפות)

| פרק | שם | חסרים |
|---|---|---|
| ch1 | תחילת מסע | 6/6 |
| ch3 | Wireshark ומודל השכבות | 7/7 |
| ch7 | שכבת הרשת | 7/7 |
| ch27 | (פרק נוסף) | 6/6 |
| ch5 | Scapy | 5/5 |
| ch6 | שכבת התעבורה | 5/5 |
| ch8 | שכבת הקו | 6/6 |
| ch15 | HTTPS ו-TLS | 6/6 |
| ch16 | פרוטוקולי אפליקציה | 6/6 |
| ch308 | Container Networking | 6/12 |
| שאר ch | ch2,4,10-14,17-26 | 1-5 כל אחד |

**סה"כ: 121 שאלות ב-27 פרקים — כולם במסלול רשתות (ch1-27) + ch308**

| # | אזור | ממצא | חומרה | פעולה |
|---|---|---|---|---|
| QUIZ-01 | ch1-ch27 | 121 שאלות ללא explanationEn — משתמש EN מקבל הסבר עברי אחרי טעות | בינוני | השלמת explanationEn לכל השאלות החסרות — עדיפות: ch1,3,7 (הכי בסיסיים) |

---

## 4. Troubleshooting Tab — EN

31 פריטים בעברית, **26 עם solutionEn** (5 חסרים). titleEn קיים לכולם.

### ✅ מה עובד טוב

- תוכן ה-EN של troubleshooting מדויק ומקצועי
- solutionEn קיים ל-26/31 פריטים
- titleEn קיים לכל 31 הפריטים

| # | אזור | ממצא | חומרה | פעולה |
|---|---|---|---|---|
| TRBL-01 | Troubleshooting | 5 פריטים ללא solutionEn — משתמש EN רואה פתרון עברי | נמוך | הוסיפי solutionEn לחמשת הפריטים החסרים |

---

## 5. סדר עדיפויות מאוחד

| # | ממצא | עדיפות | זמן משוער |
|---|---|---|---|
| 1 | EN-04 + EN-05 — Markdown ב-HTML ב-Cyber/DevOps | 🔴 גבוה | 1-2 שעות |
| 2 | SIM-01 — badge "Hebrew only" על סימולציות | 🟠 גבוה | 30 דקות |
| 3 | EN-03 — questions pages מציגות `{}` ב-EN | 🟠 גבוה | לבדוק ולתקן |
| 4 | QUIZ-01 — 121 explanationEn חסרים | 🟡 בינוני | מתמשך |
| 5 | EN-02 — thinkOutside pages ריקות ב-EN | 🟡 בינוני | 2-3 שעות |
| 6 | TRBL-01 — 5 solutionEn חסרים | 🟢 נמוך | 1 שעה |
| 7 | EN-06,07,08 — Credits לא מדויקים | 🟢 נמוך | 10 דקות |
| 8 | EN-01 — GeoIP משפט חתוך | 🟢 נמוך | 5 דקות |

---

*דוח משלים ל-Content QA v2 | Claude AI | מרץ 2026*
