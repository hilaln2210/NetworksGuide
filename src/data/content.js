/**
 * מדריך רשתות מחשבים - תוכן למידה אינטראקטיבי
 * מבוסס על: רשתות מחשבים, מטה הסייבר הצה"לי (https://www.lamed-oti.com/school/oe/networks/networks.pdf)
 * © 2025 Hila - ממשק, עיבוד ואינטראקטיביות
 */

export const chapters = [
  {
    id: 1,
    title: "תחילת מסע - איך עובד האינטרנט?",
    pages: [
      {
        type: "explanation",
        title: "מה קורה כשאנו גולשים לאתר?",
        content: `
          <p>רובנו גלשנו ל־Facebook. אבל האם עצרנו לשאול – מה בעצם קורה מאחורי הקלעים כשגולשים? איך יתכן שאנו בבית, מקישים בדפדפן את הכתובת <code>www.facebook.com</code>, לוחצים Enter, ומקבלים את המידע?</p>
          <p>אתר Facebook זקוק למספר דברים כדי לתפקד: <strong>אחסון</strong> (מקום לדפי האתר), <strong>עיצוב</strong> (לוגו, מיקום אלמנטים), <strong>אימות</strong> (זיהוי משתמשים), ו־<strong>תקשורת</strong> – דרך שתאפשר לאדם לתקשר עם האתר מכל מקום בעולם.</p>
          <p>ספר זה מתמקד בתקשורת – בדרך העברת המידע בין רכיבים אלקטרוניים.</p>
        `
      },
      {
        type: "explanation",
        title: "WWW – World Wide Web",
        content: `
          <p>כשאנו אומרים "אינטרנט", אנו מתכוונים בדרך כלל ל־<strong>WWW</strong> (World Wide Web) – אוסף עמודי האינטרנט אליהם גולשים בדפדפן. משמעות המילה Web היא רשת – עמודי האינטרנט מקושרים זה לזה כמו קורי עכביש.</p>
          <p>כדי שהדפדפן יציג את העמוד, הוא צריך לשלוח <strong>הודעת בקשה (Request)</strong> אל השרת – "שלח לי את המידע הנדרש להצגת העמוד". השרת משיב ב־<strong>תגובה (Response)</strong> שמכילה את המידע הדרוש.</p>
          <div class="diagram-container">
            <svg viewBox="0 0 400 140" class="content-diagram">
              <rect x="30" y="20" width="90" height="60" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>
              <text x="75" y="50" text-anchor="middle" font-size="12" fill="var(--text)">לקוח</text>
              <text x="75" y="65" text-anchor="middle" font-size="10" fill="var(--text-muted)">(דפדפן)</text>
              <path d="M 125 50 L 175 50" stroke="var(--accent-green)" stroke-width="2" marker-end="url(#arrow)"/>
              <text x="150" y="40" text-anchor="middle" font-size="9" fill="var(--accent-green)">בקשה</text>
              <path d="M 275 50 L 225 50" stroke="var(--accent-gold)" stroke-width="2" marker-end="url(#arrow2)"/>
              <text x="250" y="40" text-anchor="middle" font-size="9" fill="var(--accent-gold)">תגובה</text>
              <rect x="280" y="20" width="90" height="60" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>
              <text x="325" y="50" text-anchor="middle" font-size="12" fill="var(--text)">שרת</text>
              <text x="325" y="65" text-anchor="middle" font-size="10" fill="var(--text-muted)">(אתר)</text>
              <defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="var(--accent-green)"/></marker>
              <marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="var(--accent-gold)"/></marker></defs>
            </svg>
            <p class="diagram-caption">תרשים: תקשורת לקוח-שרת</p>
          </div>
          <p>האתר מקבל בקשות ושולח תגובות – הוא מספק שירות. לפיכך: האתר הוא <strong>שרת (Server)</strong>, והדפדפן הוא <strong>לקוח (Client)</strong>.</p>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: מה השרת שולח ללקוח",
        content: `
          <p>כשבחורה בוחרת "View page source" (הצג מקור) באתר, היא רואה את הקוד שהשרת שלח. הנה דוגמה לפנים הדף – זה מה שהשרת מחזיר:</p>
          <div class="code-preview">
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="he"&gt;
&lt;head&gt;
  &lt;title&gt;עמוד ראשי - Ynet&lt;/title&gt;
  &lt;meta charset="UTF-8"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;כותרת ראשית של העמוד&lt;/h1&gt;
  &lt;p&gt;טקסט שמציגים למשתמש...&lt;/p&gt;
  &lt;img src="/images/photo.jpg" alt="תמונה"&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
          </div>
          <p class="demo-note">📋 זה מה שמופיע בחלון "מקור הדף" – טקסט שמתאר איפה כל אלמנט מונח, אילו תמונות יש, ומה הכותרת. הדפדפן קורא את הקוד הזה ובונה ממנו את העמוד שאת רואה.</p>
        `
      },
      {
        type: "explanation",
        title: "כתובות IP",
        content: `
          <p>כדי לשלוח ולקבל הודעות באינטרנט, צריך לדעת לאן לשלוח. כמו במכתב – מציינים על המעטפה כתובת יעד וכתובת מקור. באינטרנט נקראות כתובות אלו <strong>כתובות IP</strong>.</p>
          <div class="diagram-container">
            <svg viewBox="0 0 340 70" class="content-diagram">
              <rect x="10" y="15" width="70" height="40" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="45" y="38" text-anchor="middle" font-size="11" fill="var(--text)">בית 1</text>
              <text x="45" y="50" text-anchor="middle" font-size="9" fill="var(--text-muted)">0-255</text>
              <line x1="85" y1="35" x2="95" y2="35" stroke="var(--text-muted)"/>
              <rect x="100" y="15" width="70" height="40" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="135" y="38" text-anchor="middle" font-size="11" fill="var(--text)">בית 2</text>
              <text x="135" y="50" text-anchor="middle" font-size="9" fill="var(--text-muted)">0-255</text>
              <line x1="175" y1="35" x2="185" y2="35" stroke="var(--text-muted)"/>
              <rect x="190" y="15" width="70" height="40" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="225" y="38" text-anchor="middle" font-size="11" fill="var(--text)">בית 3</text>
              <text x="225" y="50" text-anchor="middle" font-size="9" fill="var(--text-muted)">0-255</text>
              <line x1="265" y1="35" x2="275" y2="35" stroke="var(--text-muted)"/>
              <rect x="280" y="15" width="70" height="40" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="315" y="38" text-anchor="middle" font-size="11" fill="var(--text)">בית 4</text>
              <text x="315" y="50" text-anchor="middle" font-size="9" fill="var(--text-muted)">0-255</text>
              <text x="170" y="65" text-anchor="middle" font-size="12" fill="var(--accent)">192 . 168 . 1 . 105</text>
            </svg>
            <p class="diagram-caption">מבנה כתובת IPv4 – ארבעה בתים מופרדים בנקודה</p>
          </div>
          <p>כתובות IP מורכבות מארבעה בתים (bytes), כל בית בטווח 0–255, מופרדים בנקודה. לדוגמה: <code>1.2.3.4</code>, <code>192.168.1.1</code>, <code>31.13.72.65</code> (כתובת Facebook).</p>
          <p>הודעת הבקשה מהדפדפן מכילה בכתובת המקור את כתובת ה־IP של המחשב, ובכתובת היעד את כתובת ה־IP של האתר. בהודעת התגובה – ההפך.</p>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: פלט של פקודת ping",
        content: `
          <p>כשרצים <code>ping www.facebook.com</code>, זה הפלט שמופיע – הנה מה שאת רואה:</p>
          <div class="code-preview">
            <pre><code>C:\&gt; ping www.facebook.com

Pinging facebook.com [31.13.72.65] with 32 bytes of data:
Reply from 31.13.72.65: bytes=32 time=45ms TTL=56
Reply from 31.13.72.65: bytes=32 time=42ms TTL=56</code></pre>
          </div>
          <p class="demo-note">📋 בשורה <code>Pinging facebook.com [31.13.72.65]</code> – המספר בסוגריים הוא כתובת ה־IP של Facebook. ping שולח "בקשת הד" ומקבל תשובה, ומראה גם זמן התגובה (time) במילישניות.</p>
        `
      },
      {
        type: "explanation",
        title: "ענן האינטרנט",
        content: `
          <p>המחשב שלנו לא מחובר ישירות לאתר Facebook. הוא מחובר לרכיב שמוצא לרכיבים אחרים – רשת של רכיבים שמעבירים את ההודעה מהמחשב ועד לשרת היעד. כל חץ בין רכיבים מייצג תקשורת בשכבת הקו.</p>
        `
      },
      {
        type: "explanation",
        title: "traceroute – מסלול ההודעה",
        content: `
          <p>כלי <strong>traceroute</strong> מציג את הדרך שעוברת הודעה מהמחשב שלנו אל יעד (למשל Facebook). כל שורה בפלט = רכיב אחד (נתב/שרת) שהחבילה עברה דרכו – "hop" אחד.</p>
          <p>כלי ויזואלי: Visual Traceroute (yougetsignal.com/tools/visual-tracert) מציג את המסלול על מפת העולם.</p>
        `
      },
      {
        type: "explanation",
        title: "DNS – מתרגם שם ל-IP",
        content: `
          <p>יש צורך בתרגום בין שמות דומיין (כמו <code>www.facebook.com</code>) לכתובות IP. מערכת <strong>DNS</strong> (Domain Name System) מבצעת זאת. פקודת <code>nslookup www.facebook.com</code> שולחת שאילתת DNS ומציגה את כתובת ה־IP.</p>
        `
      },
      {
        type: "simulation",
        title: "הדמיית DNS – תרגום דומיין ל־IP",
        simId: "dnsLookup",
        content: `<p>הדמי את תהליך ה־DNS: הכניסי דומיין (למשל google.com) ולחצי "חפשי IP" – המדריך מדגים את הזרימה.</p>`
      },
      {
        type: "simulation",
        title: "הדמיית מסלול חבילה ברשת",
        simId: "packetFlow",
        content: `<p>לחצי "הרץ מסלול" כדי לראות איך חבילה עוברת ממחשב דרך Switch ונתבים עד לשרת – כל צעד בנפרד.</p>`
      },
      {
        type: "explanation",
        title: "GeoIP – מיקום גיאוגרפי",
        content: `
          <p>ישנם מאגרי נתונים הכוללים מידע על המיקום הגיאוגרפי של כתובות IP. בהינתן כתובת IP, ניתן לדעת באיזו מדינה ועיר היא נמצאת.</p>
          <p>המיפוי אינו רשמי ולא מדויק, אך נותן מענה נכון ברוב המקרים. דוגמה: <a href="http://www.geoiptool.com" target="_blank">geoiptool.com</a></p>
        `
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – פרק 1",
        intro: "<p>כדי להעמיק – שאלות מפתיעות ותשובות יצירתיות:</p>",
        blocks: [
          {
            title: "למה דווקא 255? למה 65535 פורטים?",
            icon: "🔢",
            content: `
              <p><strong>255</strong> = 2^8 − 1. בית אחד = 8 ביטים = 256 ערכים (0 עד 255). IPv4 = 4 בתים. <strong>65535</strong> = 2^16 − 1. פורט = 16 ביטים. המחשבה מחוץ לקופסא: הרשת בנויה על כוחו של הבינארי – כל ביט מכפיל את האפשרויות.</p>
            `
          },
          {
            title: "IP over Avian Carriers – אינטרנט עם יונים",
            icon: "🕊️",
            content: `
              <p><strong>RFC 1149</strong> הוא תקן אמיתי (משנת 1990!) – "IP over Avian Carriers" – העברת חבילות IP באמצעות יונים. באפריל 2001 בוצע ניסוי בנורווגיה: 9 חבילות, 100% הצלחה. הבעיה: latency גבוה (בערך שעתיים) ו bandwidth נמוך. הרעיון: פרוטוקול הוא רק "שפה" – העברה פיזית יכולה להיות כל דבר. אפילו יונים.</p>
            `
          },
          {
            title: "מה קורה כשחבילה הולכת לאיבוד?",
            icon: "❓",
            content: `
              <p>ב־<strong>TCP</strong> – השלוח לא מקבל ACK, מחכה timeout, ושולח שוב. ב־<strong>UDP</strong> – אף אחד לא שם לב. היישום אולי יבחין (סרטון "קפיצה", שיחה נקטעת) – או לא. חשיבה מחוץ לקופסא: הרשת לא "יודעת" מה חשוב – רק הפרוטוקולים והיישומים מחליטים.</p>
            `
          }
        ]
      },
      {
        type: "summary",
        title: "סיכום פרק 1",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>מודל לקוח-שרת: הדפדפן שולח בקשה, השרת מחזיר תגובה</li>
              <li>כתובות IP מזהה מחשבים (4 בתים, 0-255)</li>
              <li>ping – בדיקת חיבור, מציאת IP. traceroute – מסלול החבילות</li>
              <li>DNS מתרגם שם דומיין (www.facebook.com) ל־IP. nslookup – שאילתת DNS</li>
              <li>GeoIP – מיפוי IP למיקום גיאוגרפי (לא מדויק)</li>
            </ul>
          </div>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: פלט של nslookup",
        content: `
          <p>כשרצים <code>nslookup www.google.com</code>, זה סוג הפלט:</p>
          <div class="code-preview">
            <pre><code>C:\&gt; nslookup www.google.com

Non-authoritative answer:
Name:    www.google.com
Addresses:  142.250.185.46
            2a00:1450:4010:c08::8b</code></pre>
          </div>
          <p class="demo-note">📋 הכתובת הראשונה היא IPv4, השנייה IPv6. "Non-authoritative" – תשובה משרת מטמון, לא משרת ה-DNS הראשי של הדומיין.</p>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 1",
        questions: [
          {
            q: "מה ההבדל בין לקוח לשרת?",
            a: "הלקוח (Client) שולח בקשות – למשל הדפדפן שמבקש דף אינטרנט. השרת (Server) מקבל את הבקשות ומחזיר תגובות – למשל אתר Facebook ששולח את תוכן הדף."
          },
          {
            q: "איך נראה כתובת IP ומה המבנה שלה?",
            a: "כתובת IP מורכבת מארבעה מספרים (בתים) מופרדים בנקודות, כל מספר בטווח 0-255. דוגמאות: 192.168.1.1, 31.13.72.65."
          },
          {
            q: "מה עושה traceroute ולמה הוא שימושי?",
            a: "traceroute מציג את מסלול החבילות מהמחשב ליעד – כל נתב ושרת בדרך. שימושי לאבחון עיכובים, זיהוי מקום תקלה, והבנת איך הרשת בנויה."
          },
          {
            q: "איך DNS עובד? למה הדפדפן לא יכול פשוט להשתמש בשם?",
            a: "הרשת עובדת עם כתובות IP – מספרים. DNS הוא פנקס טלפונים שמתרגם שמות קריאים (www.google.com) למספרים. הדפדפן שולח שאילתה לשרת DNS, שמחזיר את ה-IP."
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "תכנות ב-Sockets",
    pages: [
      {
        type: "explanation",
        title: "מהו Socket?",
        content: `
          <p><strong>Socket</strong> הוא ממשק שמאפשר לתקשר בין שני מחשבים. כמתוכנתים, מאוד נוח להשתמש ב־Sockets – מעבר לכתובת המחשב המרוחק, הפורט שעליו הוא מאזין, והתחברות – לא צריך לעשות עוד הרבה.</p>
          <p>ה־Socket מפשט את כל תהליך התקשורת שקורה בפועל ברשת. בפרק זה נלמד ליצור שרת ולקוח בפייתון באמצעות Sockets.</p>
        `
      },
      {
        type: "explanation",
        title: "מודל שרת-לקוח ב-Sockets",
        content: `
          <p>ניתן לדמות את התקשורת לשליחת מכתב בין שתי משפחות בבניין רב קומות: מזהה הרכיב (השרת) הוא מזהה הבניין – כתובת ה־IP. מזהה התוכנה הוא מזהה הדירה – הפורט (0–65535).</p>
          <p>השרת מאזין על פורט מסוים ומחכה לחיבורים. הלקוח מתחבר לכתובת ולפורט, ושולח/מקבל הודעות.</p>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: קוד לקוח בפייתון",
        content: `
          <p>זה הקוד המלא ללקוח שמתחבר, שולח שם ומקבל תשובה:</p>
          <div class="code-preview">
            <pre><code>import socket

my_socket = socket.socket()
my_socket.connect(('1.2.3.4', 8820))
my_socket.send('Omer')
data = my_socket.recv(1024)
print 'The server sent: ' + data
my_socket.close()</code></pre>
          </div>
          <p class="demo-note">📋 socket() יוצר אובייקט. connect() מתחבר ל־IP:Port. send() שולח, recv() מקבל (blocking – עוצר עד לקבלת מידע). close() משחרר משאבים. 127.0.0.1 = התחברות למחשב עצמו (loopback).</p>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: קוד שרת בפייתון",
        content: `
          <p>זה המבנה הבסיסי של שרת:</p>
          <div class="code-preview">
            <pre><code>import socket

server_socket = socket.socket()
server_socket.bind(('0.0.0.0', 8820))
server_socket.listen(1)
(client_socket, client_address) = server_socket.accept()
data = client_socket.recv(1024)
client_socket.send('Hello ' + data)
client_socket.close()
server_socket.close()</code></pre>
          </div>
          <p class="demo-note">📋 bind() מקשיר את השרת ל־IP ולפורט. listen() מתחיל להאזין. accept() מחכה לחיבור (blocking) ומחזיר socket של הלקוח וכתובתו. recv() מקבל – אם החיבור התנתק מחזיר מחרוזת ריקה.</p>
        `
      },
      {
        type: "explanation",
        title: "שרת הדים ושרת פקודות",
        content: `
          <p><strong>שרת הדים (Echo)</strong> – מחזיר ללקוח בדיוק מה שקיבל. שרת שמקבל שם (למשל "Omer") ומחזיר "Hello Omer". <strong>שרת פקודות</strong> – מקבל פקודה (למשל "SCREENSHOT") ומבצע פעולה בהתאם. השרת מטפל בלקוח אחד – accept עוצר until חיבור חדש, recv עוצר until מידע.</p>
        `
      },
      {
        type: "summary",
        title: "סיכום פרק 2",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>Socket = ממשק לתקשורת בין מחשבים. bind, listen, accept, recv, send</li>
              <li>לקוח: connect, send, recv (blocking). שרת: bind, listen, accept</li>
              <li>127.0.0.1 = loopback. שרת הדים, שרת פקודות</li>
            </ul>
          </div>
        `
      },
      {
        type: "explanation",
        title: "127.0.0.1 ו־0.0.0.0",
        content: `
          <p><strong>127.0.0.1</strong> (loopback) – כתובת שמפנה למחשב עצמו. להתחברות לשרת שרץ locally. <strong>0.0.0.0</strong> ב־bind – "האזן על כל הממשקים" – השרת מקבל חיבורים מכל כתובת IP של המחשב (כולל 127.0.0.1 וממשק הרשת).</p>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 2",
        questions: [
          {
            q: "מה תפקיד הפורט בהקשר של Socket?",
            a: "הפורט מזהה את התוכנה הספציפית על השרת. שרת אחד יכול להריץ כמה שירותים – אימייל, HTTP וכו'. כל שירות מאזין על פורט אחר, כך שהשרת יודע להפנות את הבקשה לתוכנה הנכונה."
          },
          {
            q: "מה ההבדל בין bind ל־connect?",
            a: "bind – קושר את ה-Socket לכתובת ופורט (לשרת – 'אני מאזין כאן'). connect – מתחבר לכתובת ופורט מרוחקים (ללקוח – 'אני מתחבר אליך')."
          },
          {
            q: "למה recv ו-accept נקראים blocking?",
            a: "הם עוצרים את הביצוע עד שמשהו קורה – accept עד שחיבור חדש מגיע, recv עד שמידע מגיע. אם לא יגיע כלום – התוכנה תישאר תקועה (עד timeout אם הוגדר)."
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Wireshark ומודל חמש השכבות",
    pages: [
      {
        type: "explanation",
        title: "מה קורה כשאנחנו מתקשרים?",
        content: `
          <p>ב־Sockets היה לנו נוח – לא ראינו מה באמת עובר ברשת. <strong>Wireshark</strong> הוא כלי שמאפשר לחקור את המידע שיוצא ונכנס בכרטיס הרשת – לראות בדיוק מה עובר כשמדברים עם מחשב מרוחק.</p>
          <p>בפרק זה נציג גם את <strong>מודל חמש השכבות</strong> – מודל לוגי שמחלק את פעולות מערכת התקשורת לחמישה חלקים.</p>
        `
      },
      {
        type: "explanation",
        title: "למה צריך מודל שכבות?",
        content: `
          <p>העברת מידע בין ישויות באינטרנט – מחשבים, שרתים, נתבים – היא משימה מורכבת. איך לארגן את כל זה?</p>
          <p>ארגון התקינה הבינלאומי (ISO) יצר את מודל שבע השכבות (OSI). בספר משתמשים ב־<strong>מודל חמש השכבות</strong> – דומה ל־OSI אך מוותר על שתי שכבות שהתגלו כמיותרות. המודל מנחה כיצד צריכה להיראות תקשורת, ללא תלות ביצרן החומרה.</p>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: אנלוגיה – טיסה בשדה תעופה",
        content: `
          <div class="demo-flow">
            <p>דוגמה להבנת שכבות – אדם שעובר משדה תעופה במדינת המקור למדינת היעד:</p>
            <ol class="demo-steps">
              <li><strong>שכבת מזוודות</strong> – הפקדה/קבלה של מטען</li>
              <li><strong>שכבת דרכונים</strong> – החתמה יוצאת/נכנסת</li>
              <li><strong>שכבת שערים</strong> – עלייה/ירידה מהמטוס</li>
              <li><strong>שכבת טיסה</strong> – העברה פיזית בין המדינות</li>
            </ol>
            <p>כל שכבה מספקת שירות לשכבות שמעליה, ולא תלויה במימוש השכבות מתחתיה. אם יחליפו דרכונים אלקטרוניים – שאר התחנות לא מושפעות.</p>
          </div>
        `
      },
      {
        type: "explanation",
        title: "מודל חמש השכבות – סקירה",
        content: `
          <div class="diagram-container">
            <svg viewBox="0 0 280 200" class="content-diagram layers-diagram">
              <rect x="10" y="10" width="260" height="30" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="20" y="28" font-size="11" fill="var(--text)">5. אפליקציה</text><text x="200" y="28" font-size="9" fill="var(--text-muted)">HTTP, DNS</text>
              <rect x="10" y="45" width="260" height="30" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="20" y="63" font-size="11" fill="var(--text)">4. תעבורה</text><text x="200" y="63" font-size="9" fill="var(--text-muted)">TCP, UDP</text>
              <rect x="10" y="80" width="260" height="30" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="20" y="98" font-size="11" fill="var(--text)">3. רשת</text><text x="200" y="98" font-size="9" fill="var(--text-muted)">IP</text>
              <rect x="10" y="115" width="260" height="30" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="20" y="133" font-size="11" fill="var(--text)">2. קו</text><text x="200" y="133" font-size="9" fill="var(--text-muted)">Ethernet</text>
              <rect x="10" y="150" width="260" height="30" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="20" y="168" font-size="11" fill="var(--text)">1. פיזית</text><text x="200" y="168" font-size="9" fill="var(--text-muted)">כבלים, אותות</text>
              <path d="M 140 10 L 140 180" stroke="var(--accent)" stroke-dasharray="4,4" opacity="0.5"/>
            </svg>
            <p class="diagram-caption">מודל חמש השכבות</p>
          </div>
          <p>השכבות (מלמעלה למטה):</p>
          <ul>
            <li><strong>5. אפליקציה</strong> – פרוטוקולי היישומים (HTTP, DNS וכו')</li>
            <li><strong>4. תעבורה</strong> – TCP, UDP – העברת מידע בין תהליכים</li>
            <li><strong>3. רשת</strong> – IP – ניתוב חבילות בין ישויות</li>
            <li><strong>2. קו</strong> – Ethernet וכו' – העברה מקומית בין צומתים</li>
            <li><strong>1. פיזית</strong> – אותות, כבלים, אותות אלחוטיים</li>
          </ul>
          <p>כל שכבה מדברת רק עם השכבות הסמוכות אליה. המידע עובר מלמעלה למטה (בשליחה) ומלמטה למעלה (בקבלה).</p>
        `
      },
      {
        type: "explanation",
        title: "פרוטוקול – הגדרה",
        content: `
          <p><strong>פרוטוקול</strong> (תקן) = סט חוקים שמונה כיצד צריכה להיראות התקשורת. כמו שפה – קובעת כללי תחביר ואוצר מילים. בלי פרוטוקולים כל רכיב ידבר "שפה" משלו – מגדל בבל. HTTP קובע איך הדפדפן ידבר עם השרת.</p>
        `
      },
      {
        type: "explanation",
        title: "Encapsulation ו-Decapsulation",
        content: `
          <p>בשליחה: כל שכבה מקבלת מהשכבה שמעליה את הפקטה, מוסיפה <strong>Header</strong> (תחילית) בתחילתה, ומעבירה לשכבה שמתחת. זה <strong>Encapsulation</strong> (כימוס).</p>
          <p>בקבלה: השכבה התחתונה מקבלת את הפקטה, מקלפת את ה־Header שלה, מעבירה את ה־Data לשכבה שמעל – <strong>Decapsulation</strong>. המידע שכל שכבה מוסיפה = Header – מכיל כתובת, בקרת שגיאות וכו'.</p>
        `
      },
      {
        type: "simulation",
        title: "הדמיית Encapsulation / Decapsulation",
        simId: "encapsulation",
        content: `<p>לחצי על "Encapsulation" כדי לראות איך כל שכבה מוסיפה Header בשליחה. לחצי "Decapsulation" לראות איך מקלפים בקבלה.</p>`
      },
      {
        type: "explanation",
        title: "מבנה הפקטה – כל שכבה מוסיפה Header",
        content: `
          <p>הפקטה בנויה משכבות: Ethernet Header + IP Header + TCP Header + Data. ה־Data של שכבה n = הפקטה המלאה של שכבה n+1 (כולל ה־Header שלה). בשכבת הקו יש גם Trailer בסוף המסגרת. Wireshark מציג את המבנה – מסננים כמו "http", "dns" לסנן לפי פרוטוקול.</p>
        `
      },
      {
        type: "explanation",
        title: "פירוט כל שכבה – שירותים",
        content: `
          <p><strong>שכבה 1 (פיזית)</strong> – מעבירה ביט (0 או 1). כבלים, סיבים, אוויר. <strong>שכבה 2 (קו)</strong> – ארגון במסגרות (Frames), מניעת התנגשויות, זיהוי שגיאות. <strong>שכבה 3 (רשת)</strong> – מסלול מלא, נתבים. <strong>שכבה 4 (תעבורה)</strong> – קישור אמין, סדר, טיפול באובדן. <strong>שכבה 5 (אפליקציה)</strong> – פרוטוקולי יישום.</p>
        `
      },
      {
        type: "summary",
        title: "סיכום פרק 3",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>Wireshark – הסנפה וניתוח. פרוטוקול = סט חוקים לתקשורת</li>
              <li>Encapsulation – הוספת Header. Decapsulation – הסרת Header</li>
              <li>מבנה פקטה: Ethernet + IP + TCP + Data. פילטרים: http, dns</li>
            </ul>
          </div>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: שימוש ב־Wireshark",
        content: `
          <p>ב־Wireshark: בוחרים ממשק (כרטיס רשת), לוחצים Start. התעבורה מופיעה ברשימה. <strong>פילטר</strong> – בשדה Filter להקליד למשל: <code>http</code> (רק HTTP), <code>dns</code> (רק DNS), <code>ip.addr==192.168.1.1</code> (חבילות שמכילות את הכתובת). לוחצים Enter. כל שורה = חבילה. לחיצה על חבילה מציגה את המבנה לפי שכבות – Ethernet, IP, TCP, HTTP.</p>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 3",
        questions: [
          {
            q: "מה היתרון של מודל השכבות?",
            a: "כל שכבה אינה תלויה במימוש של שכבה אחרת. אם ישנו כבל, תוכנה, או פרוטוקול בשכבה אחת – השאר לא מושפע. זה מאפשר עדכונים והתפתחות ללא שבירת כל המערכת."
          },
          {
            q: "למה משתמשים בחמש שכבות ולא בשבע?",
            a: "מודל שבע השכבות (OSI) נוצר באופן תיאורטי. מודל חמש השכבות נוצר מתוך השימוש בפועל ברשת האינטרנט – שתי שכבות (הצגה וסשן) התגלו כמיותרות והושמטו."
          },
          {
            q: "מה ההבדל בין Encapsulation ל-Decapsulation?",
            a: "Encapsulation – בשליחה: כל שכבה מוסיפה Header (תחילית) לפקטה ומעבירה למטה. Decapsulation – בקבלה: כל שכבה מסירה את ה-Header שלה ומעבירה את השאר למעלה."
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "שכבת האפליקציה",
    pages: [
      {
        type: "explanation",
        title: "מהי שכבת האפליקציה?",
        content: `
          <p>שכבת האפליקציה היא אוסף הפרוטוקולים בהם עושות האפליקציות שימוש באופן ישיר. היא מספקת הפשטה מעל תקשורת הנתונים ברשת – דפדפנים, WhatsApp, Gmail, Facebook – כולם משתמשים בפרוטוקולים של שכבת האפליקציה.</p>
        `
      },
      {
        type: "explanation",
        title: "פרוטוקול HTTP – בקשה ותגובה",
        content: `
          <p><strong>HTTP</strong> הוא הפרוטוקול הנפוץ ביותר לשכבת האפליקציה – גלישה באינטרנט. הוא משתמש בעקרון "בקשה-תגובה": הלקוח שולח בקשה, השרת מחזיר תגובה.</p>
          <p><strong>שורת הבקשה</strong> למשל: <code>GET /hypertext/WWW/TheProject.html</code> – המילה GET מציינת בקשת הבאה של פריט מידע.</p>
          <p><strong>שורת התגובה</strong>: <code>HTTP/1.1 200 OK</code> – גרסת הפרוטוקול, קוד מצב (200 = בסדר), וסוג התוכן.</p>
        `
      },
      {
        type: "explanation",
        title: "מבנה פורמלי של HTTP – שורות ו־Headers",
        content: `
          <p>הודעת HTTP בנויה מ־<strong>שורות טקסט</strong> שמופרדות ב־<code>\\r\\n</code> (CRLF – Carriage Return + Line Feed). שורה ריקה מפרידה בין ה־Headers לגוף ההודעה.</p>
          <p><strong>שורת בקשה:</strong> <code>METHOD URL HTTP/VERSION</code> – למשל <code>GET /index.html HTTP/1.1</code>. ה־<strong>URL</strong> כאן הוא path יחסי (ללא הדומיין – השרת כבר ידוע מהחיבור).</p>
          <p><strong>Headers</strong> – כל שורה בפורמט <code>שם: ערך</code>. דוגמאות: Host: www.example.com, User-Agent: Mozilla/5.0, Accept-Language: he.</p>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: שימוש ב־telnet לבקשת HTTP",
        content: `
          <p>ב־telnet אפשר להתחבר ידנית לשרת HTTP ולשלוח בקשה. הנה מה שמקלידים ומה שמתקבל:</p>
          <div class="code-preview">
            <pre><code>$ telnet www.example.com 80
GET / HTTP/1.0
Host: www.example.com

HTTP/1.1 200 OK
Content-Type: text/html
...</code></pre>
          </div>
          <p class="demo-note">📋 מתחברים לפורט 80, כותבים GET + path + גרסה. שורה ריקה מסמנת סוף ה־Headers. השרת מחזיר תגובה עם קוד 200 וה־HTML.</p>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: שרת HTTP פשוט בפייתון",
        content: `
          <p>זה הקוד לשרת HTTP מינימלי שמחזיר דף קבוע:</p>
          <div class="code-preview">
            <pre><code>import socket
s = socket.socket()
s.bind(('0.0.0.0', 8080))
s.listen(1)
(client, addr) = s.accept()
data = client.recv(1024)  # הבקשה
response = 'HTTP/1.1 200 OK\\r\\nContent-Type: text/html\\r\\n\\r\\n&lt;h1&gt;שלום!&lt;/h1&gt;'
client.send(response)
client.close()</code></pre>
          </div>
          <p class="demo-note">📋 השרת מאזין, מקבל בקשה, ומחזיר שורת תגובה + Headers + גוף HTML. <code>\\r\\n</code> מפריד בין השורות.</p>
        `
      },
      {
        type: "explanation",
        title: "קודי HTTP ומבנה Headers",
        content: `
          <p>קודי תגובה: <strong>200</strong> OK – הצלחה. <strong>301</strong> Moved Permanently – הפניה. <strong>404</strong> Not Found – לא נמצא. <strong>500</strong> Server Error – שגיאה בשרת. רשימה מלאה: <a href="http://goo.gl/COC4J7" target="_blank">קודי HTTP</a></p>
          <p>מעבר לשורת הבקשה/תגובה, יש <strong>Headers</strong> – שדות מידע (שם:ערך). למשל: Accept-Language: he (עברית), User-Agent (סוג הדפדפן), Content-Length (גודל הגוף), Content-Type (סוג התוכן).</p>
        `
      },
      {
        type: "explanation",
        title: "פרוטוקול DNS",
        content: `
          <p><strong>DNS</strong> (Domain Name System) ממיר שמות כמו <code>www.google.com</code> לכתובות IP. הדפדפן לא יודע איך לפנות ל־"google.com" – צריך IP. שרת ה־DNS (שכתובתו מתקבלת מ־DHCP) עונה על שאילתות ומחזיר את ה־IP.</p>
          <p>פקודת <code>nslookup www.google.com</code> מבצעת שאילתת DNS ומציגה את הכתובת.</p>
        `
      },
      {
        type: "explanation",
        title: "בקשות GET ו-POST",
        content: `
          <p><strong>GET</strong> – הבאת מידע, הפרמטרים ב־URL. <strong>POST</strong> – שליחת מידע (טופס, תמונה), התוכן בגוף הבקשה. אורך URL מוגבל (~2000 תווים) – לכן העלאת תמונה לא אפשרית ב־GET.</p>
        `
      },
      {
        type: "explanation",
        title: "משאבי רשת – URL מלא",
        content: `
          <p><strong>URL</strong> (Uniform Resource Locator) מזהה משאב ברשת. מבנה: <code>פרוטוקול://דומיין:פורט/נתיב?שאילתה</code>. לדוגמה: <code>https://www.google.com/maps?q=תל+אביב</code> – פרוטוקול HTTPS, דומיין Google, נתיב maps, פרמטר q למקום.</p>
          <p>כל משאב ברשת (דף, תמונה, API) מזוהה ב־URL ייחודי. מפות Google, סרטונים, טפסים – כולם נגישים דרך URLs.</p>
        `
      },
      {
        type: "explanation",
        title: "מפות Google – דוגמה למשאבי רשת",
        content: `
          <p>כשפותחים מפות Google ומחפשים מקום – הדפדפן שולח בקשות HTTP לשרתי Google. ה־URL משתנה לפי החיפוש: <code>https://www.google.com/maps/search/...</code>. השרת מחזיר מפות, תמונות, נתונים. זוהי דוגמה לשכבת האפליקציה – פרוטוקול HTTP משרת את היישום (מפות) שמציג מידע למשתמש.</p>
        `
      },
      {
        type: "summary",
        title: "סיכום פרק 4",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>שכבת האפליקציה = פרוטוקולים שהאפליקציות משתמשות בהם ישירות</li>
              <li>HTTP = פרוטוקול בקשה-תגובה. מבנה: שורות מופרדות ב־\\r\\n, שורה ריקה לפני גוף</li>
              <li>בקשה: METHOD URL HTTP/VERSION, Headers (שם:ערך), גוף (אם יש)</li>
              <li>GET – הבאה, POST – שליחה. URL מזהה משאב: פרוטוקול://דומיין/נתיב</li>
              <li>telnet + ידני או שרת Python = בדיקת HTTP</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 4",
        questions: [
          {
            q: "מה ההבדל בין בקשת GET לבקשת אחרת?",
            a: "GET נועדה להביא פריט מידע מהשרת – בדרך כלל דף אינטרנט. אין תוכן בגוף הבקשה. בקשות אחרות (כמו POST) משמשות לשליחת מידע לשרת – למשל טופס התחברות."
          },
          {
            q: "מה אומר קוד 404?",
            a: "404 Not Found – המשאב המבוקש (דף, קובץ) לא נמצא בשרת. זה הקוד המפורסם שמציגים כשנכנסים לכתובת שלא קיימת."
          },
          {
            q: "למה צריך \\r\\n בהודעות HTTP?",
            a: "HTTP מוגדר כפרוטוקול טקסט. שורות מופרדות ב־CRLF (\\r\\n). שורה ריקה מסמנת סוף ה־Headers ותחילת הגוף. זה מאפשר לשרת וללקוח לפרסר את ההודעה בצורה אחידה."
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Scapy",
    pages: [
      {
        type: "explanation",
        title: "מבוא ל-Scapy",
        content: `
          <p><strong>Scapy</strong> היא ספרייה חיצונית לפייתון שמאפשרת הסנפה, שליחה וייצור חבילות רשת, וניתוח שדות – ברמת השכבות הנמוכות. בניגוד ל־Sockets שמשרת את שכבת האפליקציה, Scapy מאפשרת גישה לשכבות התעבורה, הרשת והקו.</p>
          <p>באמצעות Scapy אפשר להסניף תעבורת HTTP ולשמור את כל הכתובות שאליהן הייתה גלישה, לסנן לפי תנאים, לראות תמונות שעברו, ולשלוח חבילות עם מבנה בשליטה מלאה.</p>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: הסנפה בסיסית ב-Scapy",
        content: `
          <p>פונקציית <code>sniff</code> מבצעת הסנפה. הנה דוגמה לפלט:</p>
          <div class="code-preview">
            <pre><code>&gt;&gt;&gt; packets = sniff(count=2)
&gt;&gt;&gt; packets
&lt;Sniffed: TCP:2 UDP:0 ICMP:0 Other:0&gt;
&gt;&gt;&gt; packets[0]
&lt;Ether ...&gt;&lt;IP ...&gt;&lt;TCP ...&gt;</code></pre>
          </div>
          <p class="demo-note">📋 Scapy מציג סיכום סוגי החבילות. אפשר לגשת לכל חבילה כרשימה ולנתח את השדות של כל שכבה (Ethernet, IP, TCP).</p>
        `
      },
      {
        type: "explanation",
        title: "סינון חבילות – lfilter",
        content: `
          <p>ניתן לסנן חבילות בהסנפה באמצעות פרמטר <code>lfilter</code> – פונקציה שמקבלת חבילה ומחזירה True/False. לדוגמה, לסנן רק חבילות DNS:</p>
          <div class="code-preview">
            <pre><code>def filter_dns(packet):
    return DNS in packet

packets = sniff(count=10, lfilter=filter_dns)</code></pre>
          </div>
          <p>Scapy מלווה את הספר – משמש לכתיבת ping, traceroute, ובדיקת שירותים במחשב מרוחק.</p>
        `
      },
      {
        type: "explanation",
        title: "בניית חבילות – IPv4, TCP, ICMP",
        content: `
          <p>Scapy מאפשר לבנות חבילות משכבות שונות. כל שכבה = קלאס: <code>IP()</code>, <code>TCP()</code>, <code>ICMP()</code>, <code>Ether()</code>. מחברים בשכבתיות: <code>p = IP(dst="8.8.8.8")/ICMP()</code> – חבילת ping. <code>/</code> מציין "השכבה הבאה היא payload של הקודמת".</p>
          <p>אפשר לקבוע שדות: <code>IP(dst="1.2.3.4", ttl=5)</code>, <code>TCP(dport=80, flags="S")</code> (S = SYN).</p>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: שליחת חבילות",
        content: `
          <p>לאחר בניית חבילה, שולחים עם <code>send</code> (שכבת 2–3) או <code>sr</code> (send and receive – מחכה לתשובה):</p>
          <div class="code-preview">
            <pre><code>&gt;&gt;&gt; p = IP(dst="8.8.8.8")/ICMP()
&gt;&gt;&gt; sr1(p)
&lt;IP  version=4 ... |&lt;ICMP  type=echo-reply ...&gt;&gt;</code></pre>
          </div>
          <p class="demo-note">📋 sr1 שולח חבילה ומחזיר את התשובה הראשונה. אפשר לגשת לשדות: <code>ans[IP].ttl</code>, <code>ans[ICMP].type</code>. כך בונים ping, traceroute (עם TTL עולה), וסורקי פורטים.</p>
        `
      },
      {
        type: "explanation",
        title: "הסנפה מתקדמת – פרטי שדות",
        content: `
          <p>לאחר sniff, כל חבילה מכילה שדות של כל שכבה: <code>p[IP].src</code>, <code>p[IP].dst</code>, <code>p[TCP].sport</code>, <code>p[TCP].dport</code>, <code>p.haslayer(DNS)</code>. אפשר לחלץ URL מ־חבילות HTTP, כתובות DNS, ונתונים נוספים לניתוח.</p>
        `
      },
      {
        type: "summary",
        title: "סיכום פרק Scapy",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>Scapy = ספריית Python להסנפה, שליחה וייצור חבילות ברמת השכבות הנמוכות</li>
              <li>sniff() – הסנפה, lfilter – סינון לפי תנאי. גישה לשדות: p[IP].src, p[TCP].dport</li>
              <li>בניית חבילות: IP()/ICMP(), IP()/TCP() – / מחבר שכבות. send, sr, sr1 לשליחה</li>
              <li>מאפשר ping, traceroute, סריקת פורטים – טיפול תוכנתי מלא בחבילות</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק Scapy",
        questions: [
          {
            q: "מה ההבדל בין Wireshark ל-Scapy?",
            a: "Wireshark הוא כלי צפייה – מסונף ומציג. Scapy מאפשר גם הסנפה, אבל בתוך קוד פייתון – אפשר לסנן, לעבד, לשמור, לשלוח חבילות ולבצע פעולות מורכבות על הנתונים."
          },
          {
            q: "מה עושה האופרטור / ב-Scapy?",
            a: "האופרטור / מחבר שכבות – השכבה הימנית נעטפת כ-payload של השמאלית. IP()/ICMP() יוצר חבילת ping. IP()/TCP(dport=80) יוצר חבילת TCP לפורט 80."
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "שכבת התעבורה",
    pages: [
      {
        type: "explanation",
        title: "תפקיד שכבת התעבורה",
        content: `
          <p>שכבת התעבורה אחראית להעביר מידע מתכנית (תהליך) לתכנית מרוחקת. לה שתי מטרות עיקריות:</p>
          <ul>
            <li><strong>ריבוב אפליקציות</strong> – לתקשר עם ישות אחת (כתובת IP) ולהשתמש בכמה שירותים – כך שהישות תדע להבדיל איזה זרם מידע שייך לאיזה שירות.</li>
            <li><strong>העברה אמינה</strong> (אופציונלית) – לא כל פרוטוקול בשכבת התעבורה מספק זאת.</li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "פורטים (Ports)",
        content: `
          <p>מזהה התוכנה על השרת נקרא <strong>פורט</strong>. כתובת IP = הבניין, פורט = הדירה. בפניה לפורט מסוים, השרת יודע לאיזו תוכנה פונים.</p>
          <div class="diagram-container">
            <svg viewBox="0 0 320 100" class="content-diagram">
              <rect x="40" y="10" width="120" height="80" rx="6" fill="var(--bg-elevated)" stroke="var(--accent)"/>
              <text x="100" y="35" text-anchor="middle" font-size="11" fill="var(--text)">שרת</text>
              <text x="100" y="50" text-anchor="middle" font-size="9" fill="var(--text-muted)">IP: 192.168.1.1</text>
              <rect x="50" y="58" width="35" height="22" rx="2" fill="var(--accent-soft)"/><text x="67" y="73" text-anchor="middle" font-size="9">:80</text>
              <rect x="90" y="58" width="35" height="22" rx="2" fill="var(--accent-soft)"/><text x="107" y="73" text-anchor="middle" font-size="9">:443</text>
              <rect x="130" y="58" width="35" height="22" rx="2" fill="var(--accent-soft)"/><text x="147" y="73" text-anchor="middle" font-size="9">:25</text>
              <text x="55" y="85" text-anchor="middle" font-size="8" fill="var(--text-muted)">HTTP</text>
              <text x="107" y="85" text-anchor="middle" font-size="8" fill="var(--text-muted)">HTTPS</text>
              <text x="147" y="85" text-anchor="middle" font-size="8" fill="var(--text-muted)">אימייל</text>
            </svg>
            <p class="diagram-caption">IP = בניין, פורט = דירה. כל שירות מאזין על פורט אחר</p>
          </div>
          <p>לדוגמה: פורט 80 (ב־TCP) = שירות HTTP. אם נשלח הודעה לפורט 80, השרת מבין שמדובר בבקשת דף אינטרנט.</p>
          <p><strong>פורט פתוח</strong> = פורט שתוכנה מאזינה עליו וממוכנה לקבל חיבורים.</p>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: פלט של פקודת netstat",
        content: `
          <p>כשרצים <code>netstat</code>, זה סוג הפלט שמופיע – הנה דוגמה:</p>
          <div class="code-preview">
            <pre><code>פרוטוקול   כתובת מקומית        כתובת רחוקה         מצב
TCP        127.0.0.1:5354       0.0.0.0:0           האזנה
TCP        0.0.0.0:80           0.0.0.0:0           האזנה
TCP        192.168.1.5:49160    users-pc:8820      מחובר</code></pre>
          </div>
          <p class="demo-note">📋 <strong>כתובת מקומית</strong> – ה־IP והפורט שעליהם המחשב מאזין. למשל <code>0.0.0.0:80</code> = שירות HTTP פתוח. <strong>מצב האזנה</strong> = פורט שמחכה לחיבורים. <strong>מחובר</strong> = חיבור פעיל.</p>
        `
      },
      {
        type: "explanation",
        title: "TCP לעומת UDP",
        content: `
          <p><strong>TCP</strong> – פרוטוקול אמין. מבטיח שכל המידע יגיע, בסדר הנכון. דורש Handshake לפני שליחה. מתאים לדפדפן, אימייל, העברת קבצים.</p>
          <p><strong>UDP</strong> – פרוטוקול קל ומהיר. בלי ערבויות – זורק חבילות ומקווה שיגיעו. מתאים לשיחות וידאו, משחקים, streaming.</p>
        `
      },
      {
        type: "explanation",
        title: "TCP Handshake – שלושת השלבים",
        content: `
          <p>לפני העברת מידע, TCP מבצע <strong>Handshake</strong> בן שלושה שלבים: (1) לקוח שולח <strong>SYN</strong> – "אני רוצה להתחבר". (2) שרת עונה <strong>SYN-ACK</strong> – "מאושר, מתחברים". (3) לקוח שולח <strong>ACK</strong> – "קיבלתי". רק אז מתחילה העברת המידע. סגירה: FIN או RST.</p>
          <p><strong>דגלים (Flags)</strong>: SYN, ACK, FIN, RST, PSH. כל דגל = ביט שמפעיל התנהגות.</p>
        `
      },
      {
        type: "simulation",
        title: "הדמיית TCP Handshake",
        simId: "tcpHandshake",
        content: `<p>לחצי "הרץ הדמיה" כדי לראות את שלושת השלבים בזרימה – SYN, SYN-ACK, ACK.</p>`
      },
      {
        type: "explanation",
        title: "Sequence number ו־Acknowledgment",
        content: `
          <p><strong>Sequence Number</strong> – מזהה את סדר הבייטים ששולחים. כל צד מתחיל מספר אקראי ומספר כל בייט שנשלח. <strong>Acknowledgment</strong> – "קיבלתי עד X, שלח את הבא". כך TCP מאשר קבלה ומזהה אובדן – אם ACK לא מגיע, שולחים שוב.</p>
        `
      },
      {
        type: "summary",
        title: "סיכום פרק 6",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>שכבת התעבורה = העברה מתהליך לתהליך מרוחק</li>
              <li>פורט = מזהה התוכנה על השרת. netstat מציג פורטים פתוחים וחיבורים</li>
              <li>TCP Handshake: SYN → SYN-ACK → ACK. דגלים: SYN, ACK, FIN, RST</li>
              <li>Sequence number ו־Acknowledgment – זיהוי סדר ואובדן</li>
              <li>TCP = אמין, UDP = מהיר בלי ערבויות</li>
            </ul>
          </div>
        `
      },
      {
        type: "explanation",
        title: "פורטים ידועים ו־Ephemeral",
        content: `
          <p><strong>פורטים ידועים</strong> (0–1023): 80=HTTP, 443=HTTPS, 25=SMTP, 53=DNS. השרת מאזין על אלה. <strong>Ephemeral</strong> (חולף) – פורטים דינמיים שהלקוח מקבל (למשל 49152–65535). בכל חיבור הלקוח משתמש בפורט מקור אקראי, השרת עונה לאותו פורט.</p>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 6",
        questions: [
          {
            q: "למה צריך פורטים אם יש כבר כתובת IP?",
            a: "כתובת IP מזהה את המחשב. אבל שרת אחד יכול להריץ שירות אימייל, שירות HTTP, שירות FTP ועוד. כל שירות מאזין על פורט שונה. בלעדי הפורט, השרת לא היה יודע לאיזו תוכנה להפנות את הבקשה."
          },
          {
            q: "מתי נבחר TCP ומתי UDP?",
            a: "TCP כש צריך שכל המידע יגיע בדיוק – דפים, קבצים, אימייל. UDP כשזמנים אמיתיים חשובים יותר מהשלמות – שיחת וידאו שעדיף פריים חסר מאשר עיכוב."
          },
          {
            q: "מה תפקיד ה־Handshake ב־TCP?",
            a: "ה־Handshake (SYN, SYN-ACK, ACK) יוצר חיבור אמין לפני העברת מידע. שני הצדדים מאשרים שהם מוכנים לתקשורת. בלי Handshake, אי אפשר לדעת אם הצד השני קלט את החבילות."
          }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "שכבת הרשת",
    pages: [
      {
        type: "explanation",
        title: "תפקיד שכבת הרשת",
        content: `
          <p>שכבת התעבורה מניחה שאפשר להעביר חבילה ממחשב א' למחשב ב'. <strong>שכבת הרשת</strong> היא האחראית לתהליך זה.</p>
          <p>מטרת שכבת הרשת: להעביר חבילות מידע (Packets) מישות אחת לאחרת. ברשת האינטרנט המידע צריך לעבור דרך רכיבים רבים – נתבים, שרתים – עד שהוא מגיע ליעד. שכבת הרשת דואגת להעביר את החבילות בין כל הרכיבים האלה.</p>
          <div class="diagram-container">
            <svg viewBox="0 0 360 100" class="content-diagram">
              <rect x="20" y="30" width="50" height="40" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="45" y="55" text-anchor="middle" font-size="10">מחשב</text>
              <circle cx="95" cy="50" r="12" fill="var(--accent-green)" stroke="var(--accent)"/>
              <text x="95" y="54" text-anchor="middle" font-size="8">נתב</text>
              <circle cx="155" cy="50" r="12" fill="var(--accent-green)" stroke="var(--accent)"/>
              <text x="155" y="54" text-anchor="middle" font-size="8">נתב</text>
              <path d="M 75 50 L 83 50 M 107 50 L 143 50 M 167 50 L 215 50" stroke="var(--accent)" stroke-width="2"/>
              <circle cx="235" cy="50" r="12" fill="var(--accent-green)" stroke="var(--accent)"/>
              <text x="235" y="54" text-anchor="middle" font-size="8">נתב</text>
              <path d="M 247 50 L 295 50" stroke="var(--accent)" stroke-width="2"/>
              <rect x="305" y="30" width="50" height="40" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="330" y="55" text-anchor="middle" font-size="10">שרת</text>
            </svg>
            <p class="diagram-caption">חבילות עוברות דרך נתבים בדרך ליעד</p>
          </div>
        `
      },
      {
        type: "explanation",
        title: "חבילות (Packets)",
        content: `
          <p>המידע מחולק לחבילות. בשכבת הרשת קוראים להן <strong>Packets</strong> (פקטות). כל חבילה מכילה את המידע + מידע על כתובת המקור והיעד, כדי שהרכיבים בדרך ידעו לאן להעביר אותה.</p>
          <p>רוב המידע באינטרנט מועבר בשכבת הרשת, לכן נוהגים לקרוא לכל מידע כזה "פקטה".</p>
        `
      },
      {
        type: "explanation",
        title: "מבנה חבילת IP – Header ושדות",
        content: `
          <p>חבילת IP כוללת <strong>IP Header</strong> + Data. ה־Header מכיל: <strong>Source IP</strong>, <strong>Destination IP</strong>, TTL (Time To Live – מפחית בכל hop, מונע לולאות), Protocol (TCP=6, UDP=17, ICMP=1), Checksum, ועוד. הגודל המינימלי של Header = 20 בתים.</p>
        `
      },
      {
        type: "explanation",
        title: "מסכת רשת (Subnet Mask) ו־Default Gateway",
        content: `
          <p><strong>Subnet Mask</strong> (למשל 255.255.255.0) קובע אילו ביטים ב־IP שייכים לרשת המקומית. ב־AND לוגי עם ה־IP מתקבלת כתובת הרשת. כתובת ב־רשת אחרת = שולחים ל־<strong>Default Gateway</strong> – הנתב המקומי שמחבר לרשתות אחרות. בלי Default Gateway אין יציאה לאינטרנט.</p>
        `
      },
      {
        type: "explanation",
        title: "ICMP, DHCP ו-NAT",
        content: `
          <p><strong>ICMP</strong> – פרוטוקול לשגיאות והודעות. ping שולח Echo Request, מקבל Echo Reply. TTL (Time To Live) – כל נתב מפחית; אם מגיע 0 החבילה נזרקת ו-ICMP Time Exceeded נשלח (traceroute משתמש בזה).</p>
          <p><strong>DHCP</strong> – מחשב חדש: Discover (ברודקסט) → שרת שולח Offer (IP, Subnet, Gateway, DNS) → Request → Ack. המחשב מקבל הגדרות אוטומטית.</p>
          <p><strong>NAT</strong> – כתובות פרטיות (10.x, 172.16.x, 192.168.x) לא ניתנות לניתוב. הנתב מחליף כתובת מקור + פורט מקור ל-IP הציבורי + פורט ייחודי (PAT). בתשובה – מחליף חזרה לפי טבלת התרגום.</p>
        `
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – שכבת הרשת",
        intro: "<p>זוויות מפתיעות על רשתות:</p>",
        blocks: [
          {
            title: "למה ה־IP נגמר? IPv4 vs IPv6",
            icon: "🌐",
            content: `
              <p>IPv4 = 2^32 כתובות (~4.3 מיליארד). נראה הרבה – אבל האינטרנט גדל. IPv6 = 2^128 כתובות – מספיק לכל גרגר חול על כדור הארץ ועוד. החשיבה מחוץ לקופסא: NAT מאפשר למיליוני מחשבים "להסתדר" עם IP אחד – אבל זה מסתיר בעיה. IPv6 פותר את זה מהשורש.</p>
            `
          },
          {
            title: "האם אפשר לרשת את העולם בסיב אופטי אחד?",
            icon: "📡",
            content: `
              <p>סיב אופטי יכול להעביר טרה-ביטים בשנייה. התאוריה: עם קידוד מתקדם, סיב אחד יכול לשאת את כל תעבורת האינטרנט העולמית. בפועל – מרחק, רעש, עלויות. אבל הרעיון: <strong>המגבלה היא לא הפיזיקה – אלא הארגון.</strong> הרשת בנויה ממיליוני רכיבים שמתקשרים – הבעיה היא תיאום, לא רוחב פס.</p>
            `
          }
        ]
      },
      {
        type: "demo",
        title: "המדריך מדגים: מה מראה Traceroute",
        content: `
          <p>כשרצים traceroute (או כלי ויזואלי דומה), זה סוג הפלט – רואים את המסלול שעוברת החבילה:</p>
          <div class="code-preview">
            <pre><code>1   router.local (192.168.1.1)    2 ms
2   isp-gateway (10.0.0.1)       12 ms  
3   backbone-1 (212.143.xxx.x)   25 ms
4   google-server (172.217.x.x)   45 ms</code></pre>
          </div>
          <p class="demo-note">📋 כל שורה = hop אחד – רכיב ברשת (נתב, שרת) שהחבילה עברה דרכו. מספרי ה־ms הם זמן התגובה. כך רואים את "הדרך" מהמחשב לשרת היעד.</p>
        `
      },
      {
        type: "summary",
        title: "סיכום פרק 7",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>שכבת הרשת = העברת חבילות (Packets) מישות לישות</li>
              <li>כל חבילה מכילה כתובת מקור ויעד</li>
              <li>נתבים (Routers) מעבירים חבילות לפי טבלאות ניתוב</li>
              <li>Traceroute מציג את מסלול החבילות ברשת</li>
            </ul>
          </div>
        `
      },
      {
        type: "explanation",
        title: "טבלת ניתוב (Routing Table)",
        content: `
          <p>לכל נתב <strong>טבלת ניתוב</strong> – רשימת יעדים ופעולות. למשל: "לכל כתובת ב־192.168.1.x – לשלוח לפורט 1 (רשת מקומית)". "כל השאר – לשלוח לנתב 10.0.0.1 (Default Gateway)". הנתב בודק את Destination IP, מחפש התאמה, ומעביר לחבר הבא.</p>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 7",
        questions: [
          {
            q: "מה ההבדל בין שכבת התעבורה לשכבת הרשת?",
            a: "שכבת התעבורה מעבירה מידע מתהליך לתהליך (מחשב למחשב ברמת היישום). שכבת הרשת אחראית על ההעברה של החבילות בין כל הרכיבים – נתבים, שרתים – עד שהחבילה מגיעה ליעדה."
          },
          {
            q: "מהו נתב (Router)?",
            a: "נתב הוא רכיב רשת שמקבל חבילות ומעביר אותן הלאה. לכל נתב יש טבלת ניתוב (routing table) – מפה שאומרת 'לכתובת X לשלוח לנתב Y'. כך החבילה עוברת מרכיב לרכיב עד שהיא מגיעה ליעד."
          },
          {
            q: "מה עושה TTL ולמה traceroute משתמש בו?",
            a: "TTL (Time To Live) – כל נתב מפחית ב-1. אם מגיע 0 – החבילה נזרקת ונשלח ICMP Time Exceeded. traceroute שולח חבילות עם TTL 1, 2, 3... – כל נתב שמחזיר Time Exceeded מזוהה. כך בונים את המסלול."
          }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "שכבת הקו",
    pages: [
      {
        type: "explanation",
        title: "תפקיד שכבת הקו",
        content: `
          <p>שכבת הרשת אחראית על המסלול. <strong>שכבת הקו</strong> אחראית על תקשורת בין ישויות <strong>מחוברות ישירות</strong>. חיבור ישיר = כבל, WiFi, לווין.</p>
          <p>שכבת הקו מספקת ממשק להעברת מידע בין ישויות צמודות. שכבת הרשת לא צריכה לדאוג לסוג החיבור.</p>
        `
      },
      {
        type: "explanation",
        title: "Ethernet וכתובות MAC",
        content: `
          <p>כתובות <strong>MAC</strong> – פיזיות, צרובות על כרטיס הרשת. פורמט: 6 בתים בהקסדצימלי, למשל <code>d4:be:d9:d6:0c:2a</code>. במסגרת Ethernet: שדות dst (יעד) ו־src (מקור).</p>
        `
      },
      {
        type: "explanation",
        title: "מבנה מסגרת Ethernet (Frame)",
        content: `
          <p>מסגרת Ethernet מורכבת מ: <strong>Preamble</strong> (סינכרון), <strong>Destination MAC</strong> (6 B), <strong>Source MAC</strong> (6 B), <strong>EtherType</strong> (סוג הפרוטוקול – IPv4, ARP וכו'), <strong>Payload</strong> (החבילה משכבת 3), <strong>FCS</strong> (Frame Check Sequence – CRC לזיהוי שגיאות). המינימום 64 בתים, מקסימום 1518.</p>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: פלט של ipconfig",
        content: `
          <p>כשרצים <code>ipconfig</code> (Windows) או <code>ifconfig</code> (Linux/Mac), מתקבל מידע על הממשקים:</p>
          <div class="code-preview">
            <pre><code>Ethernet adapter Ethernet:
   IPv4 Address: 192.168.1.105
   Subnet Mask: 255.255.255.0
   Default Gateway: 192.168.1.1
   Physical Address: D4-BE-D9-D6-0C-2A</code></pre>
          </div>
          <p class="demo-note">📋 IPv4 – כתובת המחשב. Subnet Mask – גבול הרשת המקומית. Default Gateway – הנתב. Physical Address – כתובת ה־MAC של כרטיס הרשת.</p>
        `
      },
      {
        type: "explanation",
        title: "פרוטוקול ARP",
        content: `
          <p><strong>ARP</strong> ממיר IP ל־MAC. המחשב רוצה לשלוח ל־192.168.1.1 – שולח <strong>ARP Request</strong> (ברודקסט – לכולם): "למי יש 192.168.1.1?" הנתב עונה ב־<strong>ARP Reply</strong> (unicast) עם ה-MAC שלו. המיפוי נשמר ב־<strong>ARP Cache</strong>. פקודת <code>arp -a</code> מציגה את הטבלה.</p>
        `
      },
      {
        type: "summary",
        title: "סיכום פרק 8",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>שכבת הקו = העברה בין ישויות מחוברות ישירות</li>
              <li>MAC = כתובת פיזית. מבנה Frame: Preamble, dst/src MAC, EtherType, Payload, FCS</li>
              <li>ARP = המרת IP ל־MAC. ipconfig/ifconfig – הצגת הגדרות</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 8",
        questions: [
          {
            q: "מה ההבדל בין MAC ל־IP?",
            a: "MAC – כתובת פיזית צרובה על כרטיס הרשת, משמשת ברשת המקומית (שכבת קו). IP – כתובת לוגית שמיועדת לניתוב ברשתות (שכבת רשת). ARP ממיר IP ל־MAC כשצריך לשלוח Frame."
          },
          {
            q: "למה ARP משתמש ב-Broadcast?",
            a: "המחשב לא יודע איזה מכשיר ברשת המקומית מחזיק את ה-IP המבוקש – הוא שואל את כולם. רק בעל ה-IP עונה. ברשתות גדולות יש טכניקות כמו Proxy ARP ו-ARP Cache לצמצום התעבורה."
          }
        ]
      }
    ]
  },
  {
    id: 9,
    title: "רכיבי רשת",
    pages: [
      {
        type: "explanation",
        title: "Hub, Switch, Router",
        content: `
          <p><strong>Hub</strong> (שכבה 1) – לא מכיר כתובות, מעביר לכולם. <strong>Switch</strong> (שכבה 2) – מכיר MAC, מעביר רק ליעד. <strong>Router</strong> (שכבה 3) – מכיר IP, מנתב בין רשתות.</p>
          <table class="content-table">
            <tr><th>רכיב</th><th>שכבה</th><th>כתובות</th></tr>
            <tr><td>Hub</td><td>פיזית</td><td>לא מכיר</td></tr>
            <tr><td>Switch</td><td>קו</td><td>MAC</td></tr>
            <tr><td>Router</td><td>רשת</td><td>IP</td></tr>
          </table>
        `
      },
      {
        type: "explanation",
        title: "Hub – שכבת פיזית",
        content: `
          <p>Hub מקבל ביטים מפורט אחד ומשכפל לכולם. אין אינטליגנציה – לא יודע לאן לשלוח. כל מחשב מקבל את כל התעבורה. יוצר התנגשויות (collisions) ורוחב פס משותף. כיום כמעט לא בשימוש – הוחלף ב־Switch.</p>
        `
      },
      {
        type: "explanation",
        title: "Switch – שכבת קו",
        content: `
          <p>Switch לומד את טבלת ה־MAC (כתובת ↔ פורט) מתעבורה שעוברת. כשיגיע Frame, יבדוק את Destination MAC וישלח רק לפורט המתאים. מפחית התנגשויות, מנצל רוחב פס טוב יותר. Switch חכם = VLANs, ניהול.</p>
        `
      },
      {
        type: "explanation",
        title: "Router – שכבת רשת",
        content: `
          <p>Router מחבר רשתות שונות (רשתות IP שונות). יש לו טבלת ניתוב – לכל יעד, לאן לשלוח. מקבל חבילת IP, בודק את Destination IP, מחפש בטבלה, מעביר לנתב הבא או למחשב ברשת המקומית.</p>
        `
      },
      {
        type: "explanation",
        title: "VLAN – רשת מקומית וירטואלית",
        content: `
          <p><strong>VLAN</strong> (Virtual LAN) מאפשר לחלק Switch פיזי אחד לכמה רשתות לוגיות נפרדות. כל פורט ב-Switch משויך ל-VLAN – מחשבים באותו VLAN מתקשרים ביניהם, אבל לא ישירות עם VLANs אחרים.</p>
          <div class="diagram-container">
            <svg viewBox="0 0 320 140" class="content-diagram">
              <rect x="100" y="60" width="120" height="50" rx="6" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="160" y="90" text-anchor="middle" font-size="11" fill="var(--text)">Switch</text>
              <rect x="10" y="10" width="70" height="35" rx="4" fill="#3a7a4a" stroke="var(--accent-green)"/>
              <text x="45" y="31" text-anchor="middle" font-size="10" fill="white">VLAN 10</text>
              <rect x="90" y="10" width="70" height="35" rx="4" fill="#3a7a4a" stroke="var(--accent-green)"/>
              <text x="125" y="31" text-anchor="middle" font-size="10" fill="white">VLAN 10</text>
              <rect x="170" y="10" width="70" height="35" rx="4" fill="#7a3a3a" stroke="#c06060"/>
              <text x="205" y="31" text-anchor="middle" font-size="10" fill="white">VLAN 20</text>
              <rect x="250" y="10" width="70" height="35" rx="4" fill="#7a3a3a" stroke="#c06060"/>
              <text x="285" y="31" text-anchor="middle" font-size="10" fill="white">VLAN 20</text>
              <line x1="45" y1="45" x2="120" y2="60" stroke="var(--accent-green)" stroke-width="2"/>
              <line x1="125" y1="45" x2="140" y2="60" stroke="var(--accent-green)" stroke-width="2"/>
              <line x1="205" y1="45" x2="180" y2="60" stroke="#c06060" stroke-width="2"/>
              <line x1="285" y1="45" x2="200" y2="60" stroke="#c06060" stroke-width="2"/>
              <line x1="45" y1="45" x2="125" y2="45" stroke="var(--accent-green)" stroke-width="1" stroke-dasharray="4,3"/>
              <line x1="205" y1="45" x2="285" y2="45" stroke="#c06060" stroke-width="1" stroke-dasharray="4,3"/>
              <text x="160" y="130" text-anchor="middle" font-size="9" fill="var(--text-muted)">✅ VLAN 10 ↔ VLAN 10 | ❌ VLAN 10 ↔ VLAN 20</text>
            </svg>
            <p class="diagram-caption">Switch אחד, שתי רשתות לוגיות – לא מדברים בינהן</p>
          </div>
          <p><strong>יתרונות VLAN:</strong></p>
          <ul>
            <li><strong>אבטחה</strong> – מחלקת IT נפרדת ממחלקת הנהלה, למשל</li>
            <li><strong>ביצועים</strong> – broadcast מוגבל ל-VLAN אחד, לא מציף את כולם</li>
            <li><strong>גמישות</strong> – שינוי VLAN בתוכנה, לא צריך לחבר כבלים מחדש</li>
          </ul>
          <p>תקשורת <strong>בין VLANs</strong> מחייבת Router (או L3 Switch) – כי מדובר ברשתות IP שונות.</p>
          <p><strong>Trunk</strong> – פורט Switch שנושא תעבורת כמה VLANs בו-זמנית (לחיבור בין Switchים). כל Frame מקבל תג VLAN (802.1Q).</p>
        `
      },
      {
        type: "explanation",
        title: "Firewall – חומת אש",
        content: `
          <p><strong>Firewall</strong> הוא מנגנון שמסנן תעבורת רשת לפי חוקים – מחליט מה מותר לעבור ומה נחסם.</p>
          <h4>סוגי Firewall:</h4>
          <p><strong>Stateless Firewall (Packet Filter)</strong> – בודק כל חבילה בנפרד: IP מקור/יעד, פורט, פרוטוקול. לא זוכר מצב. פשוט ומהיר אבל פחות חכם.</p>
          <p><strong>Stateful Firewall</strong> – עוקב אחר <em>חיבורים</em> (state table). אם יצאה בקשה פנימה ↗, מאפשר לתשובה לחזור אוטומטית ↘. מסנן ניסיונות חיבור חיצוניים לא מורשים.</p>
          <p><strong>Application Layer Firewall (WAF)</strong> – מבין תוכן ה-HTTP, חוסם SQL Injection, XSS, ועוד.</p>
          <div class="diagram-container">
            <svg viewBox="0 0 340 80" class="content-diagram">
              <rect x="10" y="20" width="80" height="40" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="50" y="44" text-anchor="middle" font-size="10">רשת פנימית</text>
              <rect x="130" y="15" width="80" height="50" rx="6" fill="#7a3a3a" stroke="#c06060"/>
              <text x="170" y="40" text-anchor="middle" font-size="11" fill="white">Firewall</text>
              <text x="170" y="55" text-anchor="middle" font-size="9" fill="#ffaaaa">חוקים / ACL</text>
              <rect x="250" y="20" width="80" height="40" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="290" y="44" text-anchor="middle" font-size="10">אינטרנט</text>
              <path d="M 90 40 L 130 40" stroke="var(--accent-green)" stroke-width="2" marker-end="url(#arrowg)"/>
              <path d="M 210 40 L 250 40" stroke="var(--accent-green)" stroke-width="2" marker-end="url(#arrowg)"/>
              <defs><marker id="arrowg" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="var(--accent-green)"/></marker></defs>
            </svg>
            <p class="diagram-caption">Firewall יושב בין הרשת הפנימית לאינטרנט</p>
          </div>
          <p><strong>ACL</strong> (Access Control List) – רשימת חוקים: "אפשר TCP פורט 443 מכל מקום", "חסום UDP פורט 53 מחוץ". הסדר חשוב – הכלל הראשון שמתאים – מנצח.</p>
          <p><strong>DMZ</strong> (Demilitarized Zone) – אזור נפרד לשרתים ציבוריים (Web, Email). לא ברשת הפנימית ולא ישר בחוץ – מוגן משני הצדדים.</p>
        `
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – רכיבי רשת",
        intro: "<p>שאלות מעניינות על ארכיטקטורת רשת:</p>",
        blocks: [
          {
            title: "מה ההבדל בין Router ביתי לתעשייתי?",
            icon: "🏭",
            content: `<p>Router ביתי (כמו של ISP) = Router + Switch + WiFi AP + NAT + DHCP + Firewall בסיסי – הכל ב-box אחד. Router תעשייתי (Cisco, Juniper) – מכשיר נפרד לכל פונקציה: Router נפרד, Switch Managed נפרד, Firewall נפרד, AP נפרד. <strong>החשיבה:</strong> בבית פשטות > ביצועים. בחברה – כל רכיב מתמחה, מנוהל נפרד, מוחלף בלי להשפיע על האחרים.</p>`
          },
          {
            title: "מה זה SDN – רשת מוגדרת בתוכנה?",
            icon: "💻",
            content: `<p><strong>SDN</strong> (Software Defined Networking) – הפרדה בין ה-Control Plane (החלטות ניתוב) ל-Data Plane (העברה בפועל). במקום שכל נתב יחליט בעצמו, מרכז SDN שולח הוראות לכל הנתבים. כמו ש-GPS מרכזי מנחה את כל הנהגים. Google ו-Facebook משתמשים בזה לניהול מרכזי של רשתות ענק.</p>`
          }
        ]
      },
      {
        type: "summary",
        title: "סיכום פרק 9",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>Hub – שכבת 1, משכפל לכולם, ללא כתובות</li>
              <li>Switch – שכבת 2, לומד MAC, מעביר רק ליעד. VLAN – חלוקה לוגית של Switch</li>
              <li>Router – שכבת 3, טבלת ניתוב, מחבר רשתות</li>
              <li>Firewall – מסנן תעבורה. Stateless (חבילה בחבילה), Stateful (מעקב חיבורים)</li>
              <li>DMZ – אזור מוגן לשרתים ציבוריים. ACL – רשימת חוקי סינון</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 9",
        questions: [
          {
            q: "למה Switch עדיף על Hub?",
            a: "Hub מעביר כל תעבורה לכל הפורטים – יוצר עומס והתנגשויות. Switch מכיר כתובות MAC ויודע לשלוח רק ליעד – חוסך רוחב פס ומפחית התנגשויות."
          },
          {
            q: "מה ההבדל בין Switch ל-Router?",
            a: "Switch עובד בשכבת הקו – משתמש ב-MAC, מעביר Frames באותה רשת. Router עובד בשכבת הרשת – משתמש ב-IP, מחבר רשתות שונות ומנתב חבילות ביניהן."
          },
          {
            q: "מה VLAN פותר ולמה לא מספיק רק Firewall?",
            a: "VLAN מפריד ברמת שכבת הקו – broadcast לא חוצה VLANs, מחשב לא יכול אפילו לשלוח Frame לVLAN אחר. Firewall מסנן ברמת IP/TCP אבל broadcast עדיין עובר. VLAN + Firewall = הגנה בשתי שכבות."
          },
          {
            q: "מה ההבדל בין Stateless לStateful Firewall?",
            a: "Stateless בודק כל חבילה בנפרד לפי IP/פורט – לא זוכר מצב. Stateful עוקב אחר חיבורים – אם פתחת חיבור פנימה, תשובות מחוץ מותרות אוטומטית. Stateful הרבה יותר חכם – חוסם ניסיונות חיבור חיצוניים לא מורשים."
          }
        ]
      }
    ]
  },
  {
    id: 10,
    title: "השכבה הפיזית",
    pages: [
      {
        type: "explanation",
        title: "מטרת השכבה הפיזית",
        content: `
          <p>העברת <strong>ביט</strong> (0 או 1) בין רכיבים. כל השכבות מעל מניחות שאפשר להעביר ביטים. אין מושג של "הודעה" – רק זרם ביטים. השכבה לא יודעת מה העברת.</p>
        `
      },
      {
        type: "explanation",
        title: "טכנולוגיות השכבה הפיזית",
        content: `
          <p><strong>כבל נחושת (Ethernet)</strong> – אותות חשמליים. <strong>סיב אופטי</strong> – פולסים של אור. <strong>ADSL</strong> – תקשורת through קו טלפון. <strong>WiFi</strong> – גלי רדיו. <strong>לווין</strong> – אותות אלקטרומגנטיים. <strong>סלולר (4G/5G)</strong> – רשתות אלחוטיות. כל טכנולוגיה מגדירה תדר, עוצמה, וצורת קידוד (איך 0 ו־1 מיוצגים).</p>
        `
      },
      {
        type: "explanation",
        title: "רוחב פס ו־Latency",
        content: `
          <p><strong>רוחב פס (Bandwidth)</strong> – כמה ביטים לשנייה אפשר להעביר. נמדד ב־Mbps, Gbps. <strong>Latency</strong> (זמן תגובה) – כמה זמן לוקח לחבילה להגיע. סיב אופטי: רוחב פס גבוה, latency נמוך. לווין: latency גבוה (מרחק).</p>
          <p><strong>Throughput</strong> – קצב העברה בפועל – תמיד נמוך מה-Bandwidth התיאורטי. גורמים: עומס רשת, אובדן חבילות, re-transmission, overhead של פרוטוקולים.</p>
          <p><strong>Jitter</strong> – שינוי ב-Latency – חבילות מגיעות בזמנים לא אחידים. בעיה קריטית לשמע ווידאו (VoIP, Zoom).</p>
        `
      },
      {
        type: "explanation",
        title: "כבלים – סוגים ותקנים",
        content: `
          <p>כבלי Ethernet מסוג <strong>UTP</strong> (Unshielded Twisted Pair) – זוגות חוטים מפותלים:</p>
          <table class="content-table">
            <tr><th>קטגוריה</th><th>מהירות</th><th>שימוש</th></tr>
            <tr><td>Cat5e</td><td>1 Gbps עד 100m</td><td>רשתות ביתיות/משרדיות</td></tr>
            <tr><td>Cat6</td><td>10 Gbps עד 55m</td><td>מרכזי נתונים</td></tr>
            <tr><td>Cat6a</td><td>10 Gbps עד 100m</td><td>מרכזי נתונים מודרניים</td></tr>
            <tr><td>Cat8</td><td>40 Gbps עד 30m</td><td>בין שרתים</td></tr>
          </table>
          <p><strong>סיב אופטי</strong> – שני סוגים: <strong>Single-mode</strong> (ליבה דקה, מרחקים ארוכים עד 100km) ו-<strong>Multi-mode</strong> (ליבה רחבה, עד 2km, זול יותר).</p>
          <p><strong>קונקטורים</strong>: RJ-45 לכבלי Ethernet. LC, SC – לסיב אופטי. SFP – מודולים ניתנים להחלפה ב-Switch.</p>
        `
      },
      {
        type: "explanation",
        title: "WiFi – 802.11 אלחוטי",
        content: `
          <p>WiFi מבוסס על תקן <strong>IEEE 802.11</strong>. שני תדרים עיקריים:</p>
          <table class="content-table">
            <tr><th>תדר</th><th>טווח</th><th>מהירות</th><th>חסרון</th></tr>
            <tr><td>2.4 GHz</td><td>ארוך יותר</td><td>נמוכה יותר</td><td>עומוס – מיקרוגל, Bluetooth</td></tr>
            <tr><td>5 GHz</td><td>קצר יותר</td><td>גבוהה יותר</td><td>חוצה קירות פחות טוב</td></tr>
            <tr><td>6 GHz (WiFi 6E)</td><td>קצר</td><td>גבוהה מאוד</td><td>חדש, פחות מכשירים</td></tr>
          </table>
          <p><strong>דורות WiFi:</strong></p>
          <ul>
            <li><strong>WiFi 4</strong> (802.11n) – 600 Mbps, 2.4+5 GHz</li>
            <li><strong>WiFi 5</strong> (802.11ac) – 3.5 Gbps, 5 GHz</li>
            <li><strong>WiFi 6</strong> (802.11ax) – 9.6 Gbps, 2.4+5 GHz, OFDMA (יותר מכשירים בו-זמנית)</li>
          </ul>
          <p><strong>CSMA/CA</strong> – WiFi לא יכול לזהות התנגשויות כמו Ethernet. במקום – <em>Collision Avoidance</em>: כל תחנה מחכה שהאוויר פנוי + זמן אקראי נוסף לפני שידור. אם הגיע ACK – הצלחה.</p>
          <p><strong>SSID</strong> – שם הרשת. <strong>BSSID</strong> – MAC של נקודת הגישה. ניתן לחבר כמה APs באותו SSID לרשת אחת גדולה (Roaming).</p>
        `
      },
      {
        type: "explanation",
        title: "קידוד – ייצוג ביטים כאותות",
        content: `
          <p>איך מייצגים 0 ו-1 פיזית? כל מדיום מגדיר <strong>שיטת קידוד</strong> שונה.</p>
          <p><strong>NRZ</strong> (Non-Return to Zero) – 1 = מתח גבוה, 0 = מתח נמוך. פשוט אבל בעייתי ברצפים ארוכים של 0 או 1 (קשה לסנכרון).</p>
          <p><strong>Manchester Encoding</strong> – כל ביט = מעבר. 1 = מעבר מנמוך לגבוה באמצע הביט, 0 = מגבוה לנמוך. מאפשר סנכרון מובנה – Ethernet ישן 10 Mbps השתמש בזה.</p>
          <p><strong>4B/5B</strong> – כל 4 ביטים מקודדים כ-5 ביטים שמבטיחים מינימום מעברים לסנכרון. Ethernet מהיר (100 Mbps) ו-Fast Ethernet.</p>
          <p><strong>PAM4</strong> (Pulse Amplitude Modulation) – 4 רמות מתח (00, 01, 10, 11) – מכפיל את כמות הנתונים. 400 Gbps Ethernet משתמש בזה.</p>
          <p>בסיב אופטי: ON/OFF של אור (OOK) או מড של פאזה (QPSK, QAM) לנפחים גדולים.</p>
        `
      },
      {
        type: "explanation",
        title: "Full Duplex, Half Duplex ו-CSMA/CD",
        content: `
          <p><strong>Half Duplex</strong> – תקשורת בכיוון אחד בו-זמנית. מישהו מדבר, מישהו שומע. Hub = half duplex. בעיית <strong>Collision</strong> (התנגשות) – שתי תחנות שולחות בו-זמנית, הסיגנלים מתנגשים.</p>
          <p><strong>CSMA/CD</strong> (Carrier Sense Multiple Access / Collision Detection) – אלגוריתם ל-Ethernet ישן:</p>
          <ol>
            <li>האזן לפני שאתה שולח (Carrier Sense)</li>
            <li>שלח אם הקו פנוי</li>
            <li>אם זוהתה התנגשות – עצור, שלח signal jam</li>
            <li>המתן זמן אקראי (Backoff), נסה שוב</li>
          </ol>
          <p><strong>Full Duplex</strong> – שליחה וקבלה בו-זמנית. Switch מודרני + כרטיס רשת מודרני = full duplex. אין התנגשויות. זה מה שמשתמשים בו היום.</p>
          <p>מודולים כמו <strong>Auto-Negotiation</strong> מסדרים את המהירות ו-duplex אוטומטית בין שני צדדים.</p>
        `
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – השכבה הפיזית",
        intro: "<p>מה באמת קורה בשכבה הכי נמוכה?</p>",
        blocks: [
          {
            title: "כמה מהר נוסע האור בסיב אופטי?",
            icon: "💡",
            content: `<p>מהירות האור בוואקום = 300,000 קמ/ש. בסיב זכוכית = ~200,000 קמ/ש (מקדם שבירה ~1.5). מישראל לארה"ב (~9,000 ק"מ) = ~45ms מהירות-אור. בפועל: 100-150ms בגלל נתבים, נתיבים עקיפים, עיכוב עיבוד. <strong>החשיבה:</strong> הפיזיקה קובעת תקרה לLatency – גם עם רשת מושלמת, לא תתחת ל-45ms לארה"ב.</p>`
          },
          {
            title: "Power over Ethernet – חשמל דרך כבל רשת",
            icon: "⚡",
            content: `<p><strong>PoE</strong> (Power over Ethernet) – מעביר חשמל ונתונים על אותו כבל Cat5e/Cat6. קמרות WiFi, טלפוני IP, מצלמות אבטחה – כולם יכולים להיות מופעלים מה-Switch ללא חיבור חשמל נפרד. <strong>PoE+</strong> = עד 30W. <strong>PoE++</strong> = עד 60-100W. דוגמה: מצלמה בתקרה – כבל אחד עושה הכל.</p>`
          }
        ]
      },
      {
        type: "summary",
        title: "סיכום פרק 10",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>שכבה פיזית = העברת ביט (0/1). כבלים: Cat5e/Cat6 (נחושת), Single/Multi-mode (סיב)</li>
              <li>WiFi 802.11: 2.4GHz (טווח) vs 5GHz (מהירות). CSMA/CA – מניעת התנגשויות אלחוטיות</li>
              <li>Bandwidth = קצב תיאורטי. Throughput = בפועל. Latency = זמן תגובה. Jitter = שינוי latency</li>
              <li>Full Duplex = שליחה + קבלה בו-זמנית (Switch מודרני). Half Duplex = Hub, CSMA/CD</li>
              <li>קידוד: NRZ, Manchester, 4B/5B – ייצוג ביטים כאותות פיזיים</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 10",
        questions: [
          {
            q: "מה ההבדל בין כבל נחושת לסיב אופטי?",
            a: "נחושת – אותות חשמליים, מושפע מרעש, מרחק מוגבל (~100m ל-Ethernet). סיב אופטי – פולסי אור, כמעט ללא רעש, מרחקים ארוכים (Single-mode עד 100km), רוחב פס גבוה הרבה יותר."
          },
          {
            q: "למה WiFi ב-5GHz מהיר יותר אבל מגיע פחות רחוק?",
            a: "תדר גבוה יותר = גלים קצרים יותר = נחלשים מהר יותר בחומה ובמרחק. אבל תדר גבוה = יותר 'מקום' להעביר נתונים ויותר ערוצים לא חופפים. זה tradeoff פיזיקלי."
          },
          {
            q: "מה ההבדל בין Bandwidth ל-Throughput?",
            a: "Bandwidth = הקצב המקסימלי התיאורטי של הקישור (למשל 1Gbps). Throughput = מה שעובר בפועל – תמיד נמוך בגלל overhead של פרוטוקולים, אובדן חבילות, re-transmission, עומס."
          }
        ]
      }
    ]
  },
  {
    id: 11,
    title: "איך הכל מתחבר",
    pages: [
      {
        type: "explanation",
        title: "הסיפור המלא – גלישה ל-Facebook",
        content: `
          <p><strong>שלב 1 – DHCP:</strong> המחשב מקבל IP, Subnet Mask, Default Gateway, שרת DNS. בלי זה – לא יכולים לגלוש.</p>
          <p><strong>שלב 2 – DNS:</strong> הדפדפן מקליד facebook.com. צריך IP. שולח שאילתה לשרת DNS → מקבל 31.13.72.65.</p>
          <p><strong>שלב 3 – Subnet:</strong> האם 31.13.72.65 ברשת שלנו (למשל 192.168.1.x)? לא. שולחים ל־Default Gateway (הנתב).</p>
          <p><strong>שלב 4 – ARP:</strong> צריך MAC של הנתב. שולח ARP Request → מקבל MAC.</p>
          <p><strong>שלב 5 – Switch:</strong> מעביר Frame עם ה-MAC של הנתב. הנתב מקבל.</p>
          <p><strong>שלב 6 – נתבים:</strong> הנתב ומספר נתבים בדרך מעבירים את החבילה עד שרתי Facebook.</p>
          <p><strong>שלב 7 – TCP Handshake:</strong> SYN, SYN-ACK, ACK. חיבור מוכן.</p>
          <p><strong>שלב 8 – HTTP GET:</strong> בקשת הדף. השרת מחזיר HTML. הדפדפן מציג.</p>
        `
      },
      {
        type: "explanation",
        title: "סדר הפעולות – מלמטה למעלה",
        content: `
          <p>השכבה הפיזית מעבירה ביטים. שכבת הקו מארגנת Frames עם MAC. שכבת הרשת מוסיפה IP, מנתבים. שכבת התעבורה מטפלת ב־TCP (Handshake, פורטים). שכבת האפליקציה שולחת HTTP. בקבלה – Decapsulation מלמטה למעלה.</p>
        `
      },
      {
        type: "summary",
        title: "סיכום פרק 11",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>DHCP → IP. DNS → תרגום שם. Subnet + Gateway → לאן לשלוח</li>
              <li>ARP → MAC. Switch/Router מעבירים. TCP + HTTP משלימים</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 11",
        questions: [
          {
            q: "מה הסדר הנכון של הפעולות בגלישה לאתר?",
            a: "DHCP (אם צריך IP) → DNS (תרגום שם ל-IP) → בדיקת Subnet (האם היעד ברשת מקומית?) → אם לא – ARP למען MAC של Gateway → שליחת Frame ל-Switch → נתבים מנתבים → TCP Handshake → HTTP GET."
          }
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Sockets מתקדם",
    pages: [
      {
        type: "explanation",
        title: "ריבוי לקוחות",
        content: `
          <p>שרת בסיסי מטפל בלקוח אחד – accept() ו־recv() הם blocking. פתרון: <strong>select</strong> – בודק כמה Sockets, מחזיר את אלה שמוכנים. אופציות: threading, asyncio.</p>
        `
      },
      {
        type: "explanation",
        title: "select – המתנה ליותר מ־Socket אחד",
        content: `
          <p><code>select.select(read_list, write_list, error_list, timeout)</code> – מחזיר את ה־Sockets שמוכנים לפעולה. כך שרת אחד יכול להאזין ל־accept על Socket אחד ולקבל מידע מ־לקוחות קיימים – בלי לחסום. אלטרנטיבות: <strong>threading</strong> – תהליך נפרד לכל לקוח. <strong>asyncio</strong> – תכנות אסינכרוני.</p>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: דוגמת select",
        content: `
          <p>קוד סכמטי ל־select:</p>
          <div class="code-preview">
            <pre><code>readable, _, _ = select.select([server_socket] + client_sockets, [], [], 0.1)
for s in readable:
    if s == server_socket:
        client, addr = server_socket.accept()
        client_sockets.append(client)
    else:
        data = s.recv(1024)
        if data: process(s, data)
        else: client_sockets.remove(s)</code></pre>
          </div>
          <p class="demo-note">📋 select מחזיר את ה-Sockets שמוכנים. אם server_socket – accept. אם client – recv. כך שרת אחד מטפל בהרבה לקוחות.</p>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: שרת עם Threading",
        content: `
          <p>כל לקוח מקבל Thread נפרד – עיבוד מקבילי:</p>
          <div class="code-preview">
            <pre><code>import socket
import threading

def handle_client(client_socket, addr):
    print(f"חיבור חדש מ: {addr}")
    while True:
        data = client_socket.recv(1024)
        if not data:
            break
        client_socket.send(b"קיבלתי: " + data)
    client_socket.close()

server = socket.socket()
server.bind(('0.0.0.0', 9000))
server.listen(5)
print("מאזין...")

while True:
    client, addr = server.accept()
    t = threading.Thread(target=handle_client, args=(client, addr))
    t.daemon = True
    t.start()</code></pre>
          </div>
          <p class="demo-note">📋 כל accept() יוצר Thread חדש עם handle_client. <code>daemon=True</code> – ה-Thread יסתיים כשהתוכנה הראשית תסתיים. חסרון: הרבה לקוחות = הרבה Threads = הרבה זיכרון. פתרון: Thread Pool.</p>
        `
      },
      {
        type: "explanation",
        title: "Python 3 – Encoding וBytes",
        content: `
          <p>ב-Python 3, <code>send()</code> ו-<code>recv()</code> עובדים עם <strong>bytes</strong> – לא מחרוזות. כל טקסט חייב להיות מקודד/מפוענח:</p>
          <div class="code-preview">
            <pre><code># שליחה – המרת string ל-bytes
message = "שלום"
client_socket.send(message.encode('utf-8'))

# קבלה – המרת bytes ל-string
data = client_socket.recv(1024)
text = data.decode('utf-8')
print(text)</code></pre>
          </div>
          <p><strong>encode('utf-8')</strong> – string → bytes. <strong>decode('utf-8')</strong> – bytes → string. UTF-8 תומך בעברית ובכל תווי יוניקוד.</p>
          <p><strong>בעיית recv</strong>: recv(1024) לא מבטיח שתקבלי בדיוק 1024 בתים. ייתכן שהמסר יגיע ב-chunks מרובים. פתרון: קרא עד שמקבלים מסר שלם (למשל: שורה שמסתיימת ב-<code>\\n</code>, או קידומת שאומרת את גודל המסר).</p>
        `
      },
      {
        type: "explanation",
        title: "פרוטוקול תקשורת – Length Prefix",
        content: `
          <p>אחת הבעיות ב-Sockets: איך יודע המקבל שהמסר הסתיים? recv() יכול להחזיר חלק מהמסר.</p>
          <p><strong>פתרון 1: Delimiter</strong> – שולחים <code>\\n</code> בסוף כל מסר. מקבלים עד ה-<code>\\n</code>.</p>
          <p><strong>פתרון 2: Length Prefix</strong> – שולחים קודם את גודל המסר (4 בתים), אחר כך את המסר עצמו:</p>
          <div class="code-preview">
            <pre><code>import struct

# שליחה
def send_msg(sock, msg):
    msg = msg.encode('utf-8')
    length = struct.pack('!I', len(msg))  # 4 bytes Big-Endian
    sock.sendall(length + msg)

# קבלה
def recv_msg(sock):
    raw_len = recv_exact(sock, 4)
    length = struct.unpack('!I', raw_len)[0]
    return recv_exact(sock, length).decode('utf-8')

def recv_exact(sock, n):
    buf = b''
    while len(buf) < n:
        chunk = sock.recv(n - len(buf))
        if not chunk:
            raise ConnectionError
        buf += chunk
    return buf</code></pre>
          </div>
          <p class="demo-note">📋 struct.pack מקודד מספר לבתים. recv_exact מבטיח קבלת בדיוק n בתים. זו שיטה עמידה לפרוטוקול תקשורת אמין.</p>
        `
      },
      {
        type: "explanation",
        title: "asyncio – תכנות אסינכרוני",
        content: `
          <p><strong>asyncio</strong> הוא מודל תכנות אסינכרוני ב-Python 3. בניגוד ל-threading (Threads מקבילים), asyncio משתמש ב-event loop אחד שמחליף הקשר ביעילות:</p>
          <div class="code-preview">
            <pre><code>import asyncio

async def handle_client(reader, writer):
    addr = writer.get_extra_info('peername')
    print(f"חיבור מ: {addr}")
    while True:
        data = await reader.read(1024)
        if not data:
            break
        writer.write(b"קיבלתי: " + data)
        await writer.drain()
    writer.close()

async def main():
    server = await asyncio.start_server(
        handle_client, '0.0.0.0', 9000)
    print("מאזין...")
    async with server:
        await server.serve_forever()

asyncio.run(main())</code></pre>
          </div>
          <p><strong>async/await</strong> – סימון שפונקציה אסינכרונית. <code>await</code> מכניס ל-event loop – מאפשר לעיבד לקוחות אחרים בזמן ההמתנה.</p>
          <p><strong>יתרון</strong>: Thread אחד, אין overhead של context switch. מתאים לאלפי חיבורים בו-זמנית. <strong>חיסרון</strong>: קוד blocking אחד (כמו sleep רגיל) חוסם הכל.</p>
        `
      },
      {
        type: "summary",
        title: "סיכום פרק 12",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>accept/recv חסומים – שרת בסיסי מטפל בלקוח אחד</li>
              <li>select – בדיקת כמה Sockets בו-זמנית, ללא blocking</li>
              <li>threading – Thread נפרד לכל לקוח. daemon=True לניקוי אוטומטי</li>
              <li>Python 3: send/recv עם bytes. encode('utf-8') / decode('utf-8')</li>
              <li>Length Prefix – שיטה לקריאת מסרים שלמים בוודאות</li>
              <li>asyncio – event loop אחד, async/await, מתאים לאלפי חיבורים</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 12",
        questions: [
          {
            q: "מתי משתמשים ב-select במקום threading?",
            a: "select מתאים כשיש הרבה חיבורים שקטים (מחכים) – מעט פעילות. threading מתאים כשיש עיבוד כבד לכל לקוח. select חסכוני במשאבים, threading פשוט לכתיבה."
          },
          {
            q: "למה recv(1024) לא מספיק לקריאת מסר שלם?",
            a: "TCP הוא stream – המסר יכול להגיע ב-chunks. recv(1024) מחזיר כמה שיש בbuffer – יכול להיות פחות. צריך לקרוא בלולאה עד שמקבלים את כל הנתונים. Length Prefix פותר זאת: קוראים 4 בתים עם הגודל, ואז קוראים בדיוק אותו מספר בתים."
          },
          {
            q: "מה ההבדל בין threading לasyncio?",
            a: "threading – מספר Threads מקבילים, OS מחליף ביניהם. asyncio – Thread אחד עם event loop, Python מחליף הקשר ב-await. threading מתאים לעיבוד CPU-bound, asyncio מתאים ל-I/O-bound (רשת, קבצים). asyncio עם אלפי חיבורים יותר יעיל."
          }
        ]
      }
    ]
  },
  {
    id: 13,
    title: "מילון מושגים",
    pages: [
      {
        type: "explanation",
        title: "מונחים נבחרים",
        content: `
          <table class="content-table">
            <tr><th>מונח</th><th>הסבר</th></tr>
            <tr><td>ARP</td><td>המרת IP ל־MAC ברשת מקומית</td></tr>
            <tr><td>DHCP</td><td>קבלת IP, Subnet, Gateway, DNS אוטומטית</td></tr>
            <tr><td>DNS</td><td>מיפוי שם דומיין (www.x.com) ל־IP</td></tr>
            <tr><td>Encapsulation</td><td>הוספת Header לשכבה – כימוס</td></tr>
            <tr><td>Frame</td><td>יחידת מידע שכבה 2 (קו) – Ethernet</td></tr>
            <tr><td>Packet</td><td>יחידת מידע שכבה 3 (רשת) – IP</td></tr>
            <tr><td>NAT</td><td>תרגום כתובות רשת פרטית לציבורית</td></tr>
            <tr><td>Handshake</td><td>חילוף הודעות לפתיחת חיבור (TCP)</td></tr>
            <tr><td>MAC</td><td>כתובת פיזית צרובה על כרטיס הרשת</td></tr>
            <tr><td>Subnet Mask</td><td>קובע אילו ביטים ב־IP שייכים לרשת</td></tr>
            <tr><td>Default Gateway</td><td>נתב ליציאה מרשת מקומית</td></tr>
            <tr><td>Port</td><td>מזהה תוכנה על שרת (0–65535)</td></tr>
            <tr><td>Socket</td><td>ממשק לתקשורת בין תהליכים ברשת</td></tr>
            <tr><td>TCP</td><td>פרוטוקול תעבורה אמין – Handshake, ACK, סדר</td></tr>
            <tr><td>UDP</td><td>פרוטוקול תעבורה לא אמין – מהיר, בלי ערבויות</td></tr>
            <tr><td>HTTP/HTTPS</td><td>פרוטוקול אפליקציה. HTTPS = HTTP מעל TLS (מצופה)</td></tr>
            <tr><td>Broadcast</td><td>שליחה לכולם ברשת מקומית</td></tr>
            <tr><td>Unicast</td><td>שליחה ליעד אחד</td></tr>
            <tr><td>TTL</td><td>Time To Live – מונע לולאות, משמש ל-traceroute</td></tr>
          </table>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 13",
        questions: [
          {
            q: "מה ההבדל בין Broadcast ל-Unicast?",
            a: "Unicast – שליחה ליעד אחד (כתובת ספציפית). Broadcast – שליחה לכל המכשירים ברשת המקומית (למשל FF:FF:FF:FF:FF:FF ב-MAC). ARP Request הוא broadcast."
          }
        ]
      }
    ]
  },
  {
    id: 14,
    title: "פקודות וכלים",
    pages: [
      {
        type: "explanation",
        title: "פקודות נפוצות",
        content: `
          <p><code>ping &lt;יעד&gt;</code> – בדיקת חיבור (ICMP Echo). <code>tracert</code> / <code>traceroute</code> – מסלול חבילות. <code>netstat</code> – פורטים פתוחים וחיבורים. <code>ipconfig</code> (Win) / <code>ifconfig</code> (Lin) – IP, MAC, Subnet, Gateway. <code>nslookup &lt;דומיין&gt;</code> – שאילתת DNS. <code>arp -a</code> – טבלת ARP Cache.</p>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: דוגמאות פלט",
        content: `
          <p>פלט <code>ipconfig /all</code>:</p>
          <div class="code-preview">
            <pre><code>IPv4 Address: 192.168.1.105
Subnet Mask: 255.255.255.0
Default Gateway: 192.168.1.1
Physical Address: D4-BE-D9-D6-0C-2A</code></pre>
          </div>
          <p>פלט <code>nslookup google.com</code>:</p>
          <div class="code-preview">
            <pre><code>Name: google.com
Addresses: 142.250.185.46</code></pre>
          </div>
        `
      },
      {
        type: "explanation",
        title: "כלים",
        content: `
          <p><strong>Wireshark</strong> – הסנפת וניתוח תעבורת רשת (צפייה). <strong>Scapy</strong> – הסנפה, בנייה ושליחה של חבילות מפייתון. <strong>telnet</strong> – התחברות ידנית לפורט (לבדיקת HTTP וכו').</p>
        `
      },
      {
        type: "explanation",
        title: "פקודות נוספות",
        content: `
          <p><code>route print</code> (Win) / <code>ip route</code> (Lin) – טבלת ניתוב. <code>hostname</code> – שם המחשב. <code>telnet &lt;host&gt; &lt;port&gt;</code> – התחברות לפורט. <code>curl</code> – שליחת בקשת HTTP מ-command line.</p>
        `
      },
      {
        type: "summary",
        title: "סיכום פרק 14",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>ping, traceroute – בדיקה ומסלול. netstat – פורטים</li>
              <li>ipconfig/ifconfig – הגדרות רשת. nslookup – DNS. arp -a – ARP</li>
              <li>Wireshark, Scapy – כלי ניתוח והסנפה</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 14",
        questions: [
          {
            q: "איזו פקודה משתמשת לבדוק אם שרת מרוחק מגיב?",
            a: "ping – שולח ICMP Echo Request. אם התשובה מגיעה, השרת חי ומחובר. אם לא – יכול להיות חסימה, כיבוי, או בעיית רשת."
          }
        ]
      }
    ]
  },
  {
    id: 15,
    title: "HTTPS ו-TLS – תקשורת מוצפנת",
    pages: [
      {
        type: "explanation",
        title: "למה צריך הצפנה?",
        content: `
          <p>כשגולשים ב-HTTP רגיל – כל הנתונים עוברים כטקסט גלוי. כל מי שמסנן את התעבורה (ספק האינטרנט, WiFi ציבורי, האקר ב-MITM) יכול לראות:</p>
          <ul>
            <li>סיסמאות שהזנת</li>
            <li>הודעות פרטיות</li>
            <li>פרטי כרטיס אשראי</li>
            <li>כל תוכן הדף</li>
          </ul>
          <p><strong>HTTPS</strong> = HTTP over TLS – כל התקשורת מוצפנת. גם אם מישהו מסנן את הנתונים – רואה "שטות" מוצפנת.</p>
          <div class="diagram-container">
            <svg viewBox="0 0 340 80" class="content-diagram">
              <rect x="10" y="20" width="80" height="40" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="50" y="44" text-anchor="middle" font-size="10">דפדפן</text>
              <rect x="250" y="20" width="80" height="40" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="290" y="44" text-anchor="middle" font-size="10">שרת</text>
              <path d="M 90 35 L 250 35" stroke="var(--accent-green)" stroke-width="2.5"/>
              <text x="170" y="28" text-anchor="middle" font-size="9" fill="var(--accent-green)">🔒 מוצפן (TLS)</text>
              <path d="M 90 50 L 250 50" stroke="#c06060" stroke-width="1.5" stroke-dasharray="4,3"/>
              <text x="170" y="63" text-anchor="middle" font-size="9" fill="#c06060">HTTP גלוי – כולם רואים</text>
            </svg>
          </div>
          <p>פורט 443 = HTTPS. פורט 80 = HTTP. דפדפן מודרני מציג 🔒 כשה-TLS תקין.</p>
        `
      },
      {
        type: "explanation",
        title: "הצפנה סימטרית ואסימטרית",
        content: `
          <p>שני סוגי הצפנה שונים – שניהם חשובים ל-TLS:</p>
          <p><strong>הצפנה סימטרית</strong> – אותו מפתח להצפנה ולפענוח. מהיר מאוד (AES). בעיה: איך מעבירים את המפתח לצד השני בלי שמישהו יתפוס?</p>
          <div class="diagram-container">
            <svg viewBox="0 0 320 60" class="content-diagram">
              <rect x="10" y="15" width="60" height="30" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="40" y="34" text-anchor="middle" font-size="10">Alice</text>
              <rect x="250" y="15" width="60" height="30" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="280" y="34" text-anchor="middle" font-size="10">Bob</text>
              <text x="160" y="28" text-anchor="middle" font-size="9" fill="var(--accent-gold)">מפתח: 🔑 (סודי לשניהם)</text>
              <path d="M 70 30 L 250 30" stroke="var(--accent-gold)" stroke-width="2"/>
            </svg>
          </div>
          <p><strong>הצפנה אסימטרית</strong> (מפתח ציבורי/פרטי) – RSA, ECC. כל צד מייצר זוג מפתחות: <em>פרטי</em> (סודי) ו-<em>ציבורי</em> (לכולם). הצפנה עם ציבורי → רק הפרטי מפענח. <strong>חתימה</strong> עם פרטי → כולם יכולים לאמת עם ציבורי.</p>
          <p>אסימטרית פותרת את בעיית חילופי המפתח – אבל איטית. TLS משתמש בה רק לחילופי מפתחות, ואז עובר ל-AES לכל השיחה.</p>
        `
      },
      {
        type: "explanation",
        title: "TLS Handshake – שלבי ה-HTTPS",
        content: `
          <p>לפני שמגיע אפילו בייט HTTP אחד, TLS מבצע Handshake:</p>
          <div class="demo-flow">
            <ol class="demo-steps">
              <li><strong>Client Hello</strong> – הדפדפן שולח: גרסת TLS נתמכת, רשימת cipher suites, Client Random (מספר אקראי)</li>
              <li><strong>Server Hello + Certificate</strong> – השרת בוחר cipher suite, שולח Server Random, ושולח את <strong>האישור (Certificate)</strong> שלו</li>
              <li><strong>אימות האישור</strong> – הדפדפן בודק שהאישור חתום על ידי CA מהימן, שהדומיין תואם, ושלא פג תוקפו</li>
              <li><strong>Key Exchange</strong> – מחשבים <strong>Session Key</strong> (מפתח AES) מה-Client Random + Server Random + Pre-Master Secret. זה נעשה ב-Diffie-Hellman בגרסאות מודרניות</li>
              <li><strong>Finished</strong> – שני הצדדים מאשרים שה-Handshake הצליח. מעכשיו – כל תקשורת מוצפנת ב-AES</li>
            </ol>
          </div>
          <p>TLS 1.3 (2018) מבצע Handshake ב-1 Round Trip (RTT) במקום 2 – מהיר יותר.</p>
        `
      },
      {
        type: "explanation",
        title: "אישורים ו-CA – Chain of Trust",
        content: `
          <p><strong>Certificate</strong> (אישור) מכיל: שם הדומיין, המפתח הציבורי של השרת, תוקף, גוף שחתם (CA).</p>
          <p><strong>CA</strong> (Certificate Authority) – גוף מהימן שחותם על אישורים: DigiCert, Let's Encrypt, Comodo. הדפדפן סומך עליהם כי הם מובנים ב-OS ובדפדפן.</p>
          <p><strong>שרשרת אמון:</strong></p>
          <div class="diagram-container">
            <svg viewBox="0 0 300 120" class="content-diagram">
              <rect x="80" y="5" width="140" height="28" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="150" y="23" text-anchor="middle" font-size="10">Root CA (מובנה ב-OS)</text>
              <path d="M 150 33 L 150 45" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrowdown)"/>
              <rect x="70" y="45" width="160" height="28" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="150" y="63" text-anchor="middle" font-size="10">Intermediate CA</text>
              <path d="M 150 73 L 150 85" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrowdown)"/>
              <rect x="70" y="85" width="160" height="28" rx="4" fill="var(--accent-green)" stroke="var(--accent-green)" opacity="0.8"/>
              <text x="150" y="103" text-anchor="middle" font-size="10" fill="white">אישור של example.com</text>
              <defs><marker id="arrowdown" markerWidth="8" markerHeight="8" refX="3" refY="6" orient="auto"><polygon points="0 0, 6 0, 3 6" fill="var(--accent)"/></marker></defs>
            </svg>
            <p class="diagram-caption">כל CA חותם על הבא – Root CA הוא עוגן האמון</p>
          </div>
          <p><strong>Let's Encrypt</strong> – CA בחינם שפתרה את בעיית עלות האישורים. היום רוב האתרים משתמשים בה.</p>
          <p><strong>Self-Signed Certificate</strong> – שרת שחתם על עצמו. הדפדפן לא סומך עליו ומציג אזהרה. שימושי ל-dev/testing בלבד.</p>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: HTTPS בפייתון (requests)",
        content: `
          <p>ספריית <code>requests</code> בפייתון מטפלת ב-TLS אוטומטית:</p>
          <div class="code-preview">
            <pre><code>import requests

# HTTPS – הכל מוצפן אוטומטית
response = requests.get('https://api.github.com/users/octocat')
print(response.status_code)  # 200
print(response.json()['name'])  # The Octocat

# בדיקת אישור SSL
response = requests.get('https://expired.badssl.com')
# ConnectionError: SSL certificate verify failed!

# לביטול בדיקה (לא בפרוד!)
response = requests.get('https://self-signed.badssl.com', verify=False)</code></pre>
          </div>
          <p class="demo-note">📋 requests מוודא אוטומטית את אישור ה-TLS. כשהאישור לא תקין – זורק שגיאה. <code>verify=False</code> מכבה את הבדיקה – אסור בסביבת ייצור!</p>
        `
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – HTTPS ואבטחה",
        intro: "<p>האם HTTPS = בטוח לחלוטין?</p>",
        blocks: [
          {
            title: "HTTPS מגן על התעבורה – לא על האתר",
            icon: "🔒",
            content: `<p>HTTPS מצפין את התקשורת בין הדפדפן לשרת. אבל אם האתר עצמו רע – HTTPS לא עוזר. אתר פישינג יכול להיות HTTPS תקין עם 🔒. <strong>החשיבה:</strong> 🔒 אומר "הקשר מוצפן" – לא "האתר אמין". תמיד בדקי את הדומיין, לא רק את המנעול.</p>`
          },
          {
            title: "MITM Attack – איך TLS מונע?",
            icon: "👥",
            content: `<p><strong>Man in the Middle</strong>: האקר יושב בין הדפדפן לשרת, מנסה לקרוא הכל. בלי TLS – מצליח. עם TLS: האקר לא יכול לזייף את אישור GitHub.com כי לא יכול לחתום עליו עם המפתח הפרטי של GitHub. הדפדפן יזהה אישור לא תואם ויחסום. <strong>למעט</strong> אם CA נפרץ (זה קרה – DigiNotar 2011) – אז האקר יכול לקבל אישור מזויף.</p>`
          }
        ]
      },
      {
        type: "summary",
        title: "סיכום פרק 15",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>HTTPS = HTTP over TLS. פורט 443. מוצפן end-to-end</li>
              <li>הצפנה סימטרית (AES) – מהירה, מפתח משותף. אסימטרית (RSA/ECC) – לחילופי מפתח</li>
              <li>TLS Handshake: Hello → Certificate → Key Exchange → Finished → AES</li>
              <li>Certificate מאמת שהשרת הוא מי שהוא טוען. CA חותם על האישור</li>
              <li>Let's Encrypt – CA חינמי. Self-Signed – לא מהימן לדפדפן</li>
              <li>🔒 = הקשר מוצפן, לא שהאתר אמין!</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 15",
        questions: [
          {
            q: "מה ההבדל בין HTTP ל-HTTPS?",
            a: "HTTP – טקסט גלוי, כל אחד שמסנן את הרשת יכול לקרוא. HTTPS – HTTP עטוף ב-TLS, כל התוכן מוצפן. תוקף, סיסמאות, פרטי כרטיס אשראי – לא נראים."
          },
          {
            q: "למה TLS משתמש ב-AES ולא ב-RSA לכל ההצפנה?",
            a: "RSA/ECC (אסימטרי) איטיים מאוד – מאות פעמים יותר מ-AES. TLS משתמש ב-RSA רק לחילופי מפתח (Handshake), ואז עובר ל-AES לכל שאר השיחה. זה פשרה בין אבטחה לביצועים."
          },
          {
            q: "מה CA ולמה צריך אותו?",
            a: "CA = גוף מהימן שחותם על אישורים. ללא CA, כל שרת היה יכול לטעון 'אני Google'. CA מאמת שהגוף שביקש אישור ל-google.com אכן שולט ב-google.com. הדפדפן סומך על CA-ים מסוימים שמובנים ב-OS."
          }
        ]
      }
    ]
  },
  {
    id: 16,
    title: "פרוטוקולי אפליקציה – Email, FTP, SSH",
    pages: [
      {
        type: "explanation",
        title: "email – SMTP, IMAP, POP3",
        content: `
          <p>דואר אלקטרוני משתמש ב-<strong>שלושה פרוטוקולים נפרדים</strong>:</p>
          <table class="content-table">
            <tr><th>פרוטוקול</th><th>פורט</th><th>תפקיד</th></tr>
            <tr><td>SMTP</td><td>25 / 587</td><td>שליחת אימייל (Send)</td></tr>
            <tr><td>IMAP</td><td>143 / 993</td><td>קריאת אימייל – מסנכרן (ממשיך בשרת)</td></tr>
            <tr><td>POP3</td><td>110 / 995</td><td>קריאת אימייל – מוריד ומוחק מהשרת</td></tr>
          </table>
          <div class="diagram-container">
            <svg viewBox="0 0 380 100" class="content-diagram">
              <rect x="10" y="30" width="70" height="40" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="45" y="54" text-anchor="middle" font-size="10">Alice</text>
              <rect x="110" y="20" width="70" height="60" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="145" y="45" text-anchor="middle" font-size="9">Mail Server</text>
              <text x="145" y="60" text-anchor="middle" font-size="9">(alice.com)</text>
              <rect x="200" y="20" width="70" height="60" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="235" y="45" text-anchor="middle" font-size="9">Mail Server</text>
              <text x="235" y="60" text-anchor="middle" font-size="9">(bob.com)</text>
              <rect x="300" y="30" width="70" height="40" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="335" y="54" text-anchor="middle" font-size="10">Bob</text>
              <path d="M 80 50 L 110 50" stroke="var(--accent-green)" stroke-width="2" marker-end="url(#arrowEmail)"/>
              <text x="95" y="43" text-anchor="middle" font-size="8" fill="var(--accent-green)">SMTP</text>
              <path d="M 180 50 L 200 50" stroke="var(--accent-gold)" stroke-width="2" marker-end="url(#arrowEmail2)"/>
              <text x="190" y="43" text-anchor="middle" font-size="8" fill="var(--accent-gold)">SMTP</text>
              <path d="M 300 50 L 270 50" stroke="#6090d0" stroke-width="2" marker-end="url(#arrowEmail3)"/>
              <text x="285" y="43" text-anchor="middle" font-size="8" fill="#6090d0">IMAP</text>
              <defs>
                <marker id="arrowEmail" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="var(--accent-green)"/></marker>
                <marker id="arrowEmail2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="var(--accent-gold)"/></marker>
                <marker id="arrowEmail3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="#6090d0"/></marker>
              </defs>
            </svg>
            <p class="diagram-caption">SMTP לשליחה, IMAP לקבלה (נשאר בשרת)</p>
          </div>
          <p><strong>IMAP vs POP3</strong>: IMAP שומר הודעות בשרת – פותחת ממחשב ומהטלפון ורואה אותו דבר. POP3 מוריד ומוחק – הודעות רק על מכשיר אחד.</p>
          <p>הגרסאות המוצפנות: SMTPS (:465), IMAPS (:993), POP3S (:995) – עם TLS.</p>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: SMTP בפייתון",
        content: `
          <p>שליחת אימייל בפייתון עם smtplib:</p>
          <div class="code-preview">
            <pre><code>import smtplib
from email.mime.text import MIMEText

# יצירת ההודעה
msg = MIMEText("שלום מפייתון!")
msg['Subject'] = "בדיקת SMTP"
msg['From'] = "alice@example.com"
msg['To'] = "bob@example.com"

# שליחה דרך Gmail
with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
    server.login("alice@gmail.com", "app-password")
    server.send_message(msg)
    print("נשלח!")</code></pre>
          </div>
          <p class="demo-note">📋 SMTP_SSL מתחיל עם TLS מיידי. login() מאמת. send_message() שולח. Gmail דורש App Password (לא סיסמת חשבון) לאפליקציות צד שלישי.</p>
        `
      },
      {
        type: "explanation",
        title: "FTP – העברת קבצים",
        content: `
          <p><strong>FTP</strong> (File Transfer Protocol) – פרוטוקול להעברת קבצים בין מחשבים. פועל על פורט 21 (פקודות) + פורט 20 (נתונים).</p>
          <p>שני מצבי העברה:</p>
          <ul>
            <li><strong>Active mode</strong> – הלקוח פותח פורט, השרת מתחבר אליו (בעייתי עם Firewall)</li>
            <li><strong>Passive mode</strong> – השרת פותח פורט, הלקוח מתחבר (עובד עם Firewall – מומלץ)</li>
          </ul>
          <p>פקודות FTP: <code>LIST</code> (רשימת קבצים), <code>RETR filename</code> (הורדה), <code>STOR filename</code> (העלאה), <code>PWD</code> (תיקייה נוכחית), <code>CWD dir</code> (מעבר תיקייה).</p>
          <div class="code-preview">
            <pre><code>from ftplib import FTP

ftp = FTP('ftp.example.com')
ftp.login('user', 'password')
ftp.cwd('/pub')
print(ftp.nlst())  # רשימת קבצים

# הורדה
with open('file.txt', 'wb') as f:
    ftp.retrbinary('RETR file.txt', f.write)

ftp.quit()</code></pre>
          </div>
          <p><strong>SFTP</strong> – FTP מעל SSH (מוצפן, פורט 22). <strong>FTPS</strong> – FTP מעל TLS. FTP רגיל – נתונים כטקסט גלוי. <strong>לא להשתמש ב-FTP ישן ברשת ציבורית.</strong></p>
        `
      },
      {
        type: "explanation",
        title: "SSH – גישה מרוחקת מאובטחת",
        content: `
          <p><strong>SSH</strong> (Secure Shell) – פרוטוקול לגישה מרוחקת מוצפנת. פורט 22. מחליף את Telnet (לא מוצפן) לחלוטין.</p>
          <p>מה אפשר לעשות ב-SSH:</p>
          <ul>
            <li><strong>Terminal מרוחק</strong> – פתיחת shell על שרת מרוחק</li>
            <li><strong>SCP/SFTP</strong> – העברת קבצים מוצפנת</li>
            <li><strong>Port Forwarding</strong> – העברת תעבורה דרך הצינור המוצפן</li>
            <li><strong>Tunneling</strong> – גישה לשירותים פנימיים דרך SSH</li>
          </ul>
          <div class="code-preview">
            <pre><code># התחברות לשרת
ssh user@192.168.1.100

# התחברות עם מפתח (ללא סיסמה)
ssh -i ~/.ssh/id_rsa user@server.com

# העתקת קובץ לשרת
scp localfile.txt user@server.com:/home/user/

# Port Forwarding – גישה ל-localhost:8080 בשרת דרך 9090 מקומי
ssh -L 9090:localhost:8080 user@server.com</code></pre>
          </div>
          <p><strong>SSH Keys (מפתחות)</strong> – אימות חזק בלי סיסמה. יוצרים זוג מפתחות עם <code>ssh-keygen</code>. המפתח הציבורי מועלה לשרת (<code>~/.ssh/authorized_keys</code>). בחיבור – מוכיחים שיש לנו את הפרטי בלי לשלוח אותו.</p>
          <p>SSH בפייתון – ספריית <strong>Paramiko</strong>:</p>
          <div class="code-preview">
            <pre><code>import paramiko

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect('192.168.1.100', username='user', password='pass')

stdin, stdout, stderr = ssh.exec_command('ls -la')
print(stdout.read().decode())
ssh.close()</code></pre>
          </div>
        `
      },
      {
        type: "explanation",
        title: "פורטים ידועים – טבלה מלאה",
        content: `
          <p>פורטים ידועים (0–1023) מוקצים ל-Well-Known Services:</p>
          <table class="content-table">
            <tr><th>פורט</th><th>פרוטוקול</th><th>שכבה</th><th>שימוש</th></tr>
            <tr><td>20/21</td><td>FTP</td><td>TCP</td><td>העברת קבצים</td></tr>
            <tr><td>22</td><td>SSH</td><td>TCP</td><td>גישה מרוחקת מאובטחת</td></tr>
            <tr><td>23</td><td>Telnet</td><td>TCP</td><td>גישה מרוחקת (לא מוצפן!) ❌</td></tr>
            <tr><td>25</td><td>SMTP</td><td>TCP</td><td>שליחת אימייל</td></tr>
            <tr><td>53</td><td>DNS</td><td>UDP/TCP</td><td>מיפוי דומיין ל-IP</td></tr>
            <tr><td>67/68</td><td>DHCP</td><td>UDP</td><td>הקצאת IP אוטומטית</td></tr>
            <tr><td>80</td><td>HTTP</td><td>TCP</td><td>גלישה (לא מוצפן)</td></tr>
            <tr><td>110</td><td>POP3</td><td>TCP</td><td>קריאת אימייל</td></tr>
            <tr><td>143</td><td>IMAP</td><td>TCP</td><td>קריאת אימייל (מסונכרן)</td></tr>
            <tr><td>443</td><td>HTTPS</td><td>TCP</td><td>גלישה מוצפנת (TLS)</td></tr>
            <tr><td>993</td><td>IMAPS</td><td>TCP</td><td>IMAP מוצפן</td></tr>
            <tr><td>3389</td><td>RDP</td><td>TCP</td><td>Remote Desktop (Windows)</td></tr>
          </table>
        `
      },
      {
        type: "summary",
        title: "סיכום פרק 16",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>Email: SMTP (שליחה :25/:587), IMAP (קריאה מסונכרנת :143), POP3 (הורדה :110)</li>
              <li>FTP: פורט 21 (פקודות), 20 (נתונים). Passive mode עם Firewall. SFTP = FTP מעל SSH</li>
              <li>SSH: פורט 22. מוצפן. Terminal מרוחק, SCP, SFTP, Port Forwarding</li>
              <li>SSH Keys: אימות חזק ללא סיסמה. Paramiko – SSH מפייתון</li>
              <li>Telnet – לא מוצפן – לא להשתמש! SSH מחליף אותו</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 16",
        questions: [
          {
            q: "מה ההבדל בין IMAP לPOP3?",
            a: "IMAP – הודעות נשמרות בשרת, מסונכרן בין כל המכשירים. POP3 – מוריד הודעות למחשב ומוחק מהשרת. IMAP מתאים כשמשתמשים בכמה מכשירים. POP3 – כשרוצים הכל במחשב אחד."
          },
          {
            q: "למה SSH עדיף על Telnet?",
            a: "Telnet שולח הכל כטקסט גלוי – סיסמאות, פקודות, פלט. SSH מצפין את כל התקשורת. Telnet = שיחה בשידור חי שכולם שומעים. SSH = שיחה מוצפנת."
          },
          {
            q: "מה SSH Port Forwarding עושה?",
            a: "מאפשר לגשת לשירות ברשת מרוחקת דרך הצינור המוצפן. למשל: שרת DB שמאזין רק ל-localhost בשרת מרוחק – Port Forwarding מאפשר לגשת אליו מהמחשב המקומי דרך SSH."
          }
        ]
      }
    ]
  },
  {
    id: 17,
    title: "Subnetting ו-CIDR – חלוקת רשתות",
    pages: [
      {
        type: "explanation",
        title: "מה זה Subnetting?",
        content: `
          <p><strong>Subnetting</strong> (חלוקת תת-רשתות) – חלוקת רשת IP גדולה לרשתות קטנות יותר. למה?</p>
          <ul>
            <li><strong>אבטחה</strong> – הפרדה בין מחלקות (HR, Development, Guest)</li>
            <li><strong>ביצועים</strong> – Broadcast מוגבל לרשת הקטנה</li>
            <li><strong>ארגון</strong> – כל מחלקה/אתר מקבל טווח IP נפרד</li>
          </ul>
          <p>הבסיס: כל כתובת IP מורכבת מ-<strong>חלק רשת</strong> (Network part) ו-<strong>חלק מארח</strong> (Host part). ה-Subnet Mask קובע את הגבול.</p>
          <div class="diagram-container">
            <svg viewBox="0 0 340 60" class="content-diagram">
              <rect x="10" y="15" width="160" height="30" rx="4" fill="var(--accent-green)" opacity="0.7"/>
              <text x="90" y="34" text-anchor="middle" font-size="11" fill="white">חלק רשת</text>
              <rect x="175" y="15" width="155" height="30" rx="4" fill="var(--accent-gold)" opacity="0.7"/>
              <text x="252" y="34" text-anchor="middle" font-size="11" fill="white">חלק מארח</text>
              <text x="90" y="58" text-anchor="middle" font-size="10" fill="var(--text-muted)">192.168.1</text>
              <text x="252" y="58" text-anchor="middle" font-size="10" fill="var(--text-muted)">.105</text>
            </svg>
            <p class="diagram-caption">IP 192.168.1.105 – הרשת היא 192.168.1, המארח הוא 105</p>
          </div>
        `
      },
      {
        type: "explanation",
        title: "CIDR – Classless Inter-Domain Routing",
        content: `
          <p><strong>CIDR</strong> – סימון /prefix. במקום לכתוב Subnet Mask מלא, כותבים את מספר ביטי הרשת:</p>
          <table class="content-table">
            <tr><th>CIDR</th><th>Subnet Mask</th><th>מספר כתובות</th><th>שימוש</th></tr>
            <tr><td>/8</td><td>255.0.0.0</td><td>16,777,214</td><td>ISP גדול</td></tr>
            <tr><td>/16</td><td>255.255.0.0</td><td>65,534</td><td>חברה גדולה</td></tr>
            <tr><td>/24</td><td>255.255.255.0</td><td>254</td><td>רשת משרד רגילה</td></tr>
            <tr><td>/25</td><td>255.255.255.128</td><td>126</td><td>חצי רשת /24</td></tr>
            <tr><td>/30</td><td>255.255.255.252</td><td>2</td><td>קישור P2P בין נתבים</td></tr>
            <tr><td>/32</td><td>255.255.255.255</td><td>1</td><td>מארח בודד</td></tr>
          </table>
          <p>מספר כתובות = 2^(32-prefix). מספר מארחים = כתובות - 2 (מוחסרים: כתובת רשת + broadcast).</p>
          <p><strong>דוגמה:</strong> רשת <code>192.168.1.0/24</code>:</p>
          <ul>
            <li>כתובת רשת: 192.168.1.0 (לא ניתן להקצות למארח)</li>
            <li>טווח מארחים: 192.168.1.1 – 192.168.1.254</li>
            <li>Broadcast: 192.168.1.255</li>
            <li>סה"כ מארחים: 254</li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "כתובות IP פרטיות וציבוריות",
        content: `
          <p>ב-RFC 1918 הוגדרו טווחי IP <strong>פרטיים</strong> – לא ניתן לנתב אותם באינטרנט:</p>
          <table class="content-table">
            <tr><th>טווח</th><th>CIDR</th><th>מספר כתובות</th><th>שימוש</th></tr>
            <tr><td>10.0.0.0 – 10.255.255.255</td><td>10.0.0.0/8</td><td>16M</td><td>רשתות ארגוניות גדולות</td></tr>
            <tr><td>172.16.0.0 – 172.31.255.255</td><td>172.16.0.0/12</td><td>1M</td><td>רשתות בינוניות</td></tr>
            <tr><td>192.168.0.0 – 192.168.255.255</td><td>192.168.0.0/16</td><td>65K</td><td>בית, משרדים קטנים</td></tr>
          </table>
          <p>כתובות <strong>ציבוריות</strong> – שאר הטווחים. מוקצות על ידי IANA → RIR → ISP → לקוח.</p>
          <p><strong>כתובות מיוחדות:</strong></p>
          <ul>
            <li><code>127.0.0.0/8</code> – Loopback (127.0.0.1 = localhost)</li>
            <li><code>169.254.0.0/16</code> – APIPA – כשאין DHCP (Windows מקצה אוטומטית)</li>
            <li><code>0.0.0.0</code> – כל הכתובות (bind לכל ממשקים)</li>
            <li><code>255.255.255.255</code> – Limited Broadcast (לכל ברשת המקומית)</li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "חישוב Subnetting – דוגמה מעשית",
        content: `
          <p>נניח שיש לנו רשת <code>192.168.10.0/24</code> (254 מארחים) ורוצים לחלק ל-4 תת-רשתות שוות:</p>
          <p>254 / 4 = 63.5 → צריך לפחות 64 מארחים לכל רשת → 2^6 = 64 → צריך 6 ביטים ל-Host → prefix = 32-6 = <strong>/26</strong></p>
          <table class="content-table">
            <tr><th>תת-רשת</th><th>טווח</th><th>Broadcast</th><th>מארחים</th></tr>
            <tr><td>192.168.10.0/26</td><td>.1 – .62</td><td>.63</td><td>62</td></tr>
            <tr><td>192.168.10.64/26</td><td>.65 – .126</td><td>.127</td><td>62</td></tr>
            <tr><td>192.168.10.128/26</td><td>.129 – .190</td><td>.191</td><td>62</td></tr>
            <tr><td>192.168.10.192/26</td><td>.193 – .254</td><td>.255</td><td>62</td></tr>
          </table>
          <p><strong>כלל מהיר:</strong> אם prefix = /26 → block size = 256/4 = 64. כל תת-רשת מתחילה במכפלה של 64: 0, 64, 128, 192.</p>
          <p><strong>טיפ:</strong> כדי למצוא אם כתובת ב-רשת מסוימת – AND לוגי של ה-IP עם ה-Subnet Mask. אם התוצאה = כתובת הרשת → הכתובת ב-רשת זו.</p>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: Subnet בפייתון",
        content: `
          <p>מודול <code>ipaddress</code> בפייתון 3 עושה Subnetting בקלות:</p>
          <div class="code-preview">
            <pre><code>import ipaddress

# יצירת רשת
net = ipaddress.ip_network('192.168.1.0/24')
print(f"רשת: {net.network_address}")     # 192.168.1.0
print(f"Broadcast: {net.broadcast_address}")  # 192.168.1.255
print(f"מארחים: {net.num_addresses - 2}")  # 254

# בדיקה אם IP ברשת
ip = ipaddress.ip_address('192.168.1.50')
print(f"ב-רשת? {ip in net}")  # True

# חלוקה ל-4 תת-רשתות
for subnet in net.subnets(prefixlen_diff=2):
    print(f"{subnet} → {list(subnet.hosts())[0]} עד {list(subnet.hosts())[-1]}")

# supernet – ה-רשת הגדולה יותר
print(net.supernet())  # 192.168.0.0/23</code></pre>
          </div>
          <p class="demo-note">📋 ipaddress מכיל ip_network, ip_address, ip_interface. subnets() מחלק. supernet() מאחד. hosts() מחזיר את כל ה-IPs הניתנים להקצאה.</p>
        `
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – Subnetting",
        intro: "<p>לדוגמאות ריאליות מהעולם:</p>",
        blocks: [
          {
            title: "ארכיטקטורת רשת של AWS",
            icon: "☁️",
            content: `<p>ב-AWS, VPC (Virtual Private Cloud) = רשת וירטואלית פרטית שלך. בוחרים CIDR בסיסי למשל <code>10.0.0.0/16</code> (65K כתובות). מתוכו יוצרים Subnets: Public (<code>10.0.1.0/24</code>, <code>10.0.2.0/24</code>) וPrivate (<code>10.0.10.0/24</code>, <code>10.0.11.0/24</code>). Public = יש גישה לאינטרנט. Private = ללא. Subnetting מגדיר את הארכיטקטורה של ה-Cloud.</p>`
          },
          {
            title: "האם 192.168.1.1 תמיד הנתב?",
            icon: "🤔",
            content: `<p>לא! 192.168.1.1 הוא כתובת Default Gateway של הנתב – אבל זה רק מוסכמה. הנתב יכול להיות 192.168.1.254, 10.0.0.1, כל כתובת שהוגדרה. בפועל: ראוטרים ביתיים בחרו 192.168.1.1 כברירת מחדל מנוחות – זה הפך למוסכמה. את יכולה לראות את הנתב האמיתי ב-ipconfig תחת "Default Gateway".</p>`
          }
        ]
      },
      {
        type: "summary",
        title: "סיכום פרק 17",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>Subnetting = חלוקת רשת גדולה לרשתות קטנות. IP = חלק רשת + חלק מארח</li>
              <li>CIDR /prefix: /24 = 254 מארחים, /25 = 126, /30 = 2. כתובות = 2^(32-prefix) - 2</li>
              <li>כתובות פרטיות: 10.x.x.x, 172.16-31.x.x, 192.168.x.x – לא ניתנות לניתוב</li>
              <li>127.0.0.1 = loopback. 0.0.0.0 = כל ממשקים. 255.255.255.255 = Broadcast</li>
              <li>חישוב: prefix /26 = block size 64. כל תת-רשת מתחילה במכפלה של block size</li>
              <li>Python: import ipaddress – ip_network, subnets(), hosts()</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 17",
        questions: [
          {
            q: "כמה מארחים יש ברשת 10.0.0.0/20?",
            a: "/20 = 32-20 = 12 ביטים למארחים. 2^12 = 4096 כתובות. מארחים = 4096 - 2 = 4094 (מוחסרים כתובת רשת ו-broadcast). הטווח: 10.0.0.1 עד 10.0.15.254."
          },
          {
            q: "מה ההבדל בין כתובת פרטית לציבורית?",
            a: "כתובת פרטית (10.x.x.x, 172.16-31.x.x, 192.168.x.x) – לא ניתנת לניתוב באינטרנט. כתובת ציבורית – ניתנת לניתוב, ייחודית בעולם. NAT מאפשר למחשבים עם IP פרטי לגשת לאינטרנט דרך IP ציבורי אחד."
          },
          {
            q: "למה /30 משמש לקישורים בין נתבים?",
            a: "/30 = 4 כתובות, 2 מארחים. בקישור P2P בין שני נתבים צריך בדיוק 2 כתובות. /30 חוסך כתובות – /24 לקישור כזה יהיה בזבוז של 252 כתובות."
          }
        ]
      }
    ]
  }
];
