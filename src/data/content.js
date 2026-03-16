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
  }
];
