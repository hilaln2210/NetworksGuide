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
        type: "summary",
        title: "סיכום פרק 9",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>Hub – שכבת 1, משכפל לכולם, ללא כתובות</li>
              <li>Switch – שכבת 2, לומד MAC, מעביר רק ליעד</li>
              <li>Router – שכבת 3, טבלת ניתוב, מחבר רשתות</li>
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
        `
      },
      {
        type: "summary",
        title: "סיכום פרק 10",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>שכבה פיזית = העברת ביט (0/1) בלבד</li>
              <li>כבלים, סיבים, WiFi, לווין – כולם מיישמים את השכבה</li>
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
            a: "נחושת – אותות חשמליים, מושפע מרעש, מרחק מוגבל. סיב אופטי – פולסי אור, כמעט ללא רעש, מרחקים ארוכים, רוחב פס גבוה."
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
        type: "summary",
        title: "סיכום פרק 12",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>accept/recv חסומים – שרת בסיסי מטפל בלקוח אחד</li>
              <li>select מאפשר המתנה ליותר Sockets. Threading/asyncio – פתרונות חלופיים</li>
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
  }
];
