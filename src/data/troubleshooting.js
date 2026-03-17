/**
 * תקלות יומיומיות ברשתות — הסבר + סיבה + פתרון + סיפור אמיתי
 */

export const troubleshootingContent = [
  {
    id: 1,
    icon: '🌐',
    title: 'האינטרנט לא עובד — אבל ה-WiFi מחובר',
    category: 'חיבור',
    story: 'זה קרה לנו כולנו: סמל ה-WiFi ירוק ומחובר, אבל כל אתר מחזיר שגיאה. "אין אינטרנט" אבל ה-WiFi מחובר? איך זה אפשרי?',
    causes: [
      'ה-router מחובר לרשת המקומית, אבל לא לאינטרנט (בעיה ב-WAN port)',
      'שרת ה-DNS לא מגיב — הכתובות לא מתורגמות',
      'שרת ה-DHCP לא נתן לך כתובת IP תקינה',
      'ספקית האינטרנט (ISP) חווה תקלה',
    ],
    solution: `1. ping 8.8.8.8 — אם עובד: בעיה ב-DNS, לא אינטרנט
2. ping router שלך (בדרך כלל 192.168.1.1) — אם לא עובד: בעיה ב-LAN
3. ipconfig /release && ipconfig /renew — מרענן DHCP
4. שנה DNS ל-8.8.8.8 ידנית
5. הפעל מחדש router (60 שניות!)`,
    tip: '💡 תמיד תתחילו מ-ping. הוא יגיד לכם בדיוק איפה השרשרת נשברת.'
  },
  {
    id: 2,
    icon: '🐢',
    title: 'האינטרנט איטי — אבל רק בערב',
    category: 'ביצועים',
    story: 'בבוקר הכל מהיר, בערב YouTube נתקע כל 10 שניות. זה לא המחשב שלך — זה congestion (עומס ברשת).',
    causes: [
      'כל השכנים גולשים בערב — צינורות הספק עמוסים',
      'ISP מבצע Traffic Shaping — מאט במכוון סטרימינג בשעות עומס',
      'WiFi channel עמוס — שכנים משתמשים באותו ערוץ',
      'ה-router שלך לא מתמודד עם QoS',
    ],
    solution: `1. בדקו מהירות עם speedtest.net — בוקר vs ערב
2. שנו ערוץ WiFi ל-5GHz (פחות עומס, טווח קצר יותר)
3. בהגדרות router — הפעילו QoS ותייגו streaming כעדיפות גבוהה
4. התקשרו ל-ISP ודרשו SLA על מהירות מינימום`,
    tip: '💡 WiFi 5GHz מהיר יותר אבל חלש יותר. 2.4GHz = מרחק, 5GHz = מהירות.'
  },
  {
    id: 3,
    icon: '🔒',
    title: 'הסיסמה נכונה אבל לא נכנסת לאתר',
    category: 'HTTP/אבטחה',
    story: 'את מקלידה סיסמה נכונה ב-100%, אבל האתר מחזיר "סיסמה שגויה". מה קורה?',
    causes: [
      'cookies ישנות — session ישן מתנגש עם הניסיון החדש',
      'האתר חוסם IP לאחר ניסיונות כושלים רבים',
      'Caps Lock פעיל (קלאסי!)',
      'הדפדפן שמר סיסמה ישנה ומילא אוטומטית',
      'האתר מחוץ לאוויר (500 Internal Server Error)',
    ],
    solution: `1. פתחו כרטיסייה בגלישה פרטית (Incognito)
2. בדקו מה קוד התשובה — F12 → Network → בקשת login
3. אם 429 Too Many Requests — המתינו 15 דקות
4. נסו איפוס סיסמה
5. נסו דפדפן אחר — אולי localStorage מקולקל`,
    tip: '💡 F12 → Network הוא כלי הדיאגנוסטיקה הכי חשוב לבאגים של HTTP!'
  },
  {
    id: 4,
    icon: '📡',
    title: 'ping עובד אבל האתר לא נפתח',
    category: 'DNS',
    story: 'ping 8.8.8.8 עובד מצוין, אבל chrome מראה "This site can\'t be reached". ה-IP עובד אבל ה-DNS שבור.',
    causes: [
      'שרת DNS לא מגיב או עמוס',
      'DNS cache מקולקל — רשומת DNS ישנה ושגויה נשמרה',
      'ISP חוסם דומיין ספציפי',
      'hosts file ב-Windows עם override שגוי',
    ],
    solution: `1. ipconfig /flushdns — מנקה DNS cache
2. nslookup google.com — בודק אם DNS עובד
3. שנה DNS ל-1.1.1.1 (Cloudflare) או 8.8.8.8 (Google)
4. בדקו hosts file: C:\\Windows\\System32\\drivers\\etc\\hosts`,
    tip: '💡 כשping לIP עובד אבל לדומיין לא — זו תמיד בעיית DNS. פשוט!'
  },
  {
    id: 5,
    icon: '🔄',
    title: 'חיבור TCP נפסק באמצע',
    category: 'TCP',
    story: 'באמצע הורדה גדולה — הכל נעצר. SSH session קופא. הבעיה? TCP timeout או RST packet.',
    causes: [
      'Router שולח RST packet אחרי idle timeout (בדרך כלל 5-30 דקות)',
      'NAT entry פג — הפורט שהוקצה לחיבור שלך נמחק',
      'Firewall סגר חיבור שנראה "חשוד"',
      'חבילות הולכות לאיבוד (packet loss) ו-TCP לא מצליח להתאושש',
    ],
    solution: `1. SSH: הוסיפו ServerAliveInterval 60 ב-~/.ssh/config
2. TCP keepalive — מבקש מה-OS לשלוח keepalive packets
3. בדקו packet loss עם: ping -n 100 8.8.8.8 (Windows) או ping -c 100 8.8.8.8
4. WireGuard/VPN לחיבורים ארוכים חשובים`,
    tip: '💡 TCP Keepalive = שולח "עוד חי?" כל X שניות כדי לשמור NAT entry חי.'
  },
  {
    id: 6,
    icon: '🏠',
    title: 'IP 169.254.x.x — מה זה?',
    category: 'DHCP',
    story: 'פתחת CMD ורשמת ipconfig — IP שלך הוא 169.254.something. זה לא תקין! זה APIPA — כישלון DHCP.',
    causes: [
      'שרת DHCP לא ענה (router כבוי, עמוס, תקלה)',
      'מחשב לא קיבל IP תוך 30 שניות — מקצה לעצמו APIPA',
      'כבל רשת לא מחובר כראוי',
      'תקלה בכרטיס הרשת',
    ],
    solution: `1. ipconfig /release && ipconfig /renew
2. בדקו שה-router פועל ושה-DHCP מופעל בו
3. נסו IP סטטי ידנית: 192.168.1.100, mask 255.255.255.0, gateway 192.168.1.1
4. Device Manager → Network adapters → Update driver`,
    tip: '💡 169.254.x.x = APIPA (Automatic Private IP Addressing). תמיד סימן ש-DHCP נכשל!'
  },
  {
    id: 7,
    icon: '🔀',
    title: 'שתי בקשות TCP — למה?',
    category: 'TCP',
    story: 'ב-Wireshark רואים שהאתר נפתח עם SYN, SYN-ACK, ACK, אבל אחר כך מופיע עוד SYN. למה TCP פותח חיבור חדש?',
    causes: [
      'HTTP/1.1 פותח חיבור לכל resource (קובץ CSS, תמונה וכו\')',
      'HTTP/2 מאחד הכל לחיבור אחד עם multiplexing',
      'Connection: close header סוגר חיבור אחרי כל request',
      'CDN endpoints שונים לתמונות vs HTML',
    ],
    solution: `זה נורמלי ב-HTTP/1.1! HTTP/2 פתר את זה.
בדקו בDevTools → Network → Protocol עמודה:
- h2 = HTTP/2 (חיבור אחד לכל)
- http/1.1 = חיבור לכל resource`,
    tip: '💡 HTTP/2 הפחית latency בכ-50% בדפדפן. רוב האתרים המודרניים משתמשים בו.'
  },
  {
    id: 8,
    icon: '🛡️',
    title: 'CORS Error — "Cross-Origin Request Blocked"',
    category: 'HTTP/אבטחה',
    story: 'כתבת JavaScript שמבצע fetch ל-API ומופיעה ב-Console שגיאה אדומה: CORS. מה זה ולמה?',
    causes: [
      'הדפדפן חוסם בקשות מדומיין A לדומיין B (Same-Origin Policy)',
      'שרת ה-API לא מחזיר Access-Control-Allow-Origin header',
      'בקשת preflight OPTIONS נכשלת',
    ],
    solution: `בשרת (Python Flask / Node.js):
- Flask: flask-cors → CORS(app)
- Express: cors() middleware
- שלחו header: Access-Control-Allow-Origin: *

זה בטיחות! הדפדפן מגן עלייך מ-cross-site attacks.`,
    tip: '💡 CORS = Cross-Origin Resource Sharing. זה feature, לא bug! הדפדפן מגן עלייך 🛡️'
  },
  {
    id: 9,
    icon: '📶',
    title: 'WiFi מחובר אבל signal חלש',
    category: 'פיזי/WiFi',
    story: 'Signal חלש = latency גבוה ואינטרנט לא יציב. הבנת הפיזיקה של WiFi עוזרת לפתור!',
    causes: [
      'מחיצות, במיוחד בטון ומתכת, מחלישות אות',
      '2.4GHz מתחרה עם מיקרוגל, Bluetooth, שכנים',
      'Router ישן עם אנטנה חלשה',
      'מרחק פיזי גדול מה-router',
    ],
    solution: `1. העבירו את ה-router לנקודה מרכזית בבית
2. עברו ל-5GHz אם קרובים ל-router
3. Mesh WiFi לבית גדול (eero, Google Nest)
4. WiFi Analyzer (Android) — ראו אילו channels עמוסים
5. Channel 1, 6 או 11 בלבד ל-2.4GHz (לא overlap)`,
    tip: '💡 2.4GHz עובר דרך קירות טוב יותר. 5GHz מהיר יותר אבל מרחק קצר. בחרו לפי מיקום!'
  },
  {
    id: 10,
    icon: '⏱️',
    title: 'Latency גבוה בגיימינג',
    category: 'ביצועים',
    story: 'Ping של 200ms = מוות בגיימינג. למה זה קורה, ולמה דווקא לשרת מסוים?',
    causes: [
      'שרת המשחק באירופה/אמריקה — פיזיקה = מרחק = זמן',
      'ISP routing לא יעיל — חבילה עוברת דרך 20 hops מיותרים',
      'WiFi מוסיף latency לעומת כבל',
      'Router עמוס עם QoS גרוע',
    ],
    solution: `1. חברו כבל — WiFi מוסיף 5-30ms, כבל = אפס
2. בחרו שרת קרוב גיאוגרפית (EU/IL)
3. tracert לשרת המשחק — זהו hops איטיים
4. הפעילו QoS ב-router: Gaming > Streaming > Browsing
5. גיימינג VPN (Exitlag, NordVPN) — לפעמים שיפור משמעותי`,
    tip: '💡 כבל Ethernet אחד שווה 20ms חיסכון. השקעה של 20 שקל שמשנה חוויה!'
  },
  {
    id: 11,
    icon: '🔁',
    title: 'Port Already in Use — שגיאה בהרצת שרת',
    category: 'תכנות',
    story: 'רצת python server.py ומקבלת: "Address already in use" ב-port 8080. מה קרה?',
    causes: [
      'תהליך קודם לא נסגר כראוי ועדיין מחזיק את הפורט',
      'TIME_WAIT state — TCP מחכה 2 דקות לפני שחרור פורט',
      'שני תהליכים מנסים לפתוח את אותו פורט',
    ],
    solution: `Linux/Mac:
lsof -i :8080 → רואים מי תופס
kill -9 <PID> → סוגרים אותו

Windows:
netstat -ano | findstr :8080
taskkill /PID <PID> /F

או: שנה PORT ל-8081, 3001 וכו'
בקוד: SO_REUSEADDR option`,
    tip: '💡 SO_REUSEADDR = אומרים ל-OS "תן לי לפתוח פורט אפילו אם ב-TIME_WAIT". פתרון קסם!'
  },
  {
    id: 13,
    icon: '🔍',
    title: '404 — Site Not Found',
    category: 'HTTP שגיאות',
    story: 'הכתובת נכונה, החיבור תקין — אבל Chrome מציג "404 Not Found". מה קרה? המשאב המבוקש פשוט לא קיים בשרת.',
    causes: [
      'שגיאת כתיב בנתיב (URL) — אותיות גדולות/קטנות חשובות בשרתי Linux',
      'הדף נמחק מהשרת אבל הקישור עדיין מופיע בגוגל',
      'העמוד הועבר לכתובת חדשה אבל ה-redirect לא הוגדר',
      'ה-router/nginx לא מצא handler מתאים לנתיב',
    ],
    solution: `בדפדפן: בדקו את ה-URL שוב — אולי רווח מיותר, / חסר בסוף
בשרת: בדקו שהקובץ/route קיים
nginx: location block לנתיב הזה
בGoogle Search Console: ראו דפים עם 404 ותקנו redirect

301 redirect:
nginx: return 301 /new-path;
Apache: Redirect /old /new`,
    tip: '💡 404 = "Not Found" — זו שגיאת לקוח (4xx). הבקשה הגיעה לשרת, אבל מה שביקשת לא קיים.'
  },
  {
    id: 14,
    icon: '🚫',
    title: '403 Forbidden — גישה נדחתה',
    category: 'HTTP שגיאות',
    story: 'האתר קיים, החיבור תקין, אבל השרת אומר "אסור לך להיכנס". זה שונה מ-404 — הדף קיים, אבל אין לך הרשאה.',
    causes: [
      'הרשאות קבצים שגויות בשרת (chmod) — 644 לקבצים, 755 לתיקיות',
      'ה-IP שלך חסום על ידי firewall או .htaccess',
      'nginx/Apache הוגדרו לחסום גישה ישירה לתיקייה',
      'חסר קובץ index.html/index.php בתיקייה (directory listing מבוטל)',
      'token/JWT פג תוקף — השרת לא מאשר גישה',
    ],
    solution: `בדיקת הרשאות Linux:
ls -la /var/www/html/
chmod 755 /var/www/html/
chmod 644 /var/www/html/index.html
chown www-data:www-data /var/www/html/ -R

nginx — בדקו deny/allow rules:
location / {
  allow 192.168.1.0/24;
  deny all;
}

אם זה API: בדקו שה-token ב-header תקין ולא פג`,
    tip: '💡 403 = "Forbidden" — השרת יודע מי את אבל מחליט שאין לך גישה. שונה מ-401 (Unauthorized) שמבקש להתחבר.'
  },
  {
    id: 15,
    icon: '💥',
    title: '500 Internal Server Error',
    category: 'HTTP שגיאות',
    story: 'הכי מפחיד — "500 Internal Server Error". זה לא הבעיה שלך! השרת קרס מבפנים. זה תמיד באג בצד השרת.',
    causes: [
      'קוד Python/PHP/Node.js זרק exception שלא טופל',
      'חיבור ל-database נכשל (DB כבוי, credentials שגויים)',
      'קובץ .env חסר — משתנה סביבה שהקוד מצפה לו',
      'שגיאת syntax בקוד שהועלה לייצור',
      'disk full — השרת לא יכול לכתוב לקבצים',
    ],
    solution: `1. פתחו את ה-server logs מיד:
tail -f /var/log/nginx/error.log
tail -f /var/log/apache2/error.log
journalctl -u myapp -f

2. בדקו application logs:
Python: traceback ב-logs
Node.js: console.error ב-logs

3. בדקו disk:
df -h → בדקו שאין 100% usage

4. בדקו DB connection:
psql -h localhost -U user -d db`,
    tip: '💡 500 = השרת לא סיפר לך מה הבעיה, אבל היא רשומה ב-logs. תמיד חפשו שם!'
  },
  {
    id: 16,
    icon: '⏰',
    title: '504 Gateway Timeout',
    category: 'HTTP שגיאות',
    story: 'nginx מקבל את הבקשה שלך אבל השרת מאחורה לא עונה בזמן. תחשבי על nginx כ"שומר סף" שמחכה לתשובה מהשרת הפנימי.',
    causes: [
      'שרת ה-application (Python/Node) קפא או עמוס מדי',
      'שאילתת DB כבדה שלוקחת דקות לרוץ',
      'timeout הוגדר קצר מדי ב-nginx (default: 60s)',
      'שרת מאחורי load balancer לא בריא',
    ],
    solution: `nginx — הגדילו timeout:
proxy_connect_timeout 300;
proxy_read_timeout 300;
proxy_send_timeout 300;

בדקו שהאפליקציה רצה:
systemctl status myapp
ps aux | grep python

בדקו DB slow queries:
SHOW PROCESSLIST; (MySQL)
SELECT * FROM pg_stat_activity; (Postgres)`,
    tip: '💡 504 = נגמר הזמן להמתנה. 503 = השרת לא זמין בכלל. 502 = השרת ענה שגיאה ל-proxy.'
  },
  {
    id: 17,
    icon: '🔁',
    title: '301/302 — Redirect Loop אינסופי',
    category: 'HTTP שגיאות',
    story: '"This page isn\'t redirecting properly" — הדפדפן תקוע בלולאה של redirects. A שולח ל-B ו-B שולח חזרה ל-A, לנצח.',
    causes: [
      'HTTPS redirect + HTTP server שניהם מגדירים redirect אחד לשני',
      'www ↔ non-www redirect loop בהגדרות nginx',
      'WordPress: Site URL הוגדר לא נכון ב-DB',
      'CDN מוסיף redirect שמתנגש עם redirect בשרת',
    ],
    solution: `1. פתחו DevTools → Network → ראו את ה-redirects
2. בדקו nginx/apache config — שרק צד אחד מגדיר redirect

nginx (נכון):
server {
  listen 80;
  return 301 https://$host$request_uri;  # רק כאן!
}
server {
  listen 443 ssl;
  # אין redirect כאן
}

WordPress: ב-DB שנו siteurl/home ל-https`,
    tip: '💡 הדפדפן מרשה מקסימום 20 redirects לפני שהוא מפסיק ומציג שגיאה.'
  },
  {
    id: 18,
    icon: '🛡️',
    title: '401 Unauthorized — צריך להתחבר',
    category: 'HTTP שגיאות',
    story: 'שונה מ-403! 401 = "אני לא יודע מי את — התחברי קודם". 403 = "אני יודע מי את — אבל אסור לך".',
    causes: [
      'חסר Authorization header בבקשה (Bearer token, Basic auth)',
      'Token JWT פג תוקף (exp field)',
      'API Key שגוי או לא נשלח',
      'Session cookie לא תקף — לא התחברת',
    ],
    solution: `בדפדפן: ייתכן שצריך להתחבר לאתר תחילה

ב-API:
curl -H "Authorization: Bearer YOUR_TOKEN" https://api.example.com/data

בדקו expiry ב-JWT:
// פתחו jwt.io ובדקו את ה-exp field
// הוא Unix timestamp — המר עם new Date(exp*1000)

אם token פג: בצעו refresh token flow`,
    tip: '💡 401 = "Who are you?" | 403 = "I know you, but NO" | 404 = "What you want doesn\'t exist"'
  },
  {
    id: 19,
    icon: '🌀',
    title: 'ERR_CONNECTION_REFUSED — חיבור נדחה',
    category: 'HTTP שגיאות',
    story: 'Chrome מציג "ERR_CONNECTION_REFUSED" — זה אחד הנפוצים בפיתוח. הרבה פעמים פשוט שכחת להריץ את השרת!',
    causes: [
      'השרת לא רץ בכלל (הכי נפוץ בפיתוח!)',
      'השרת רץ על פורט אחר ממה שהדפדפן מנסה',
      'Firewall חוסם את הפורט',
      'שרת קרס בשקט — process מת',
    ],
    solution: `1. בדקו שהשרת רץ:
ps aux | grep node (או python, php וכו')
netstat -tlnp | grep 3000

2. ודאו שהפורט נכון:
http://localhost:3000 ← פורט 3000
http://localhost:8080 ← פורט 8080

3. הפעילו שוב:
npm start / python app.py / etc.

4. Firewall:
sudo ufw allow 3000`,
    tip: '💡 ERR_CONNECTION_REFUSED = אין מי שמאזין על הפורט. ERR_CONNECTION_TIMED_OUT = מישהו שם אבל לא עונה.'
  },
  {
    id: 20,
    icon: '🔐',
    title: 'ERR_SSL_PROTOCOL_ERROR — בעיית HTTPS',
    category: 'HTTP שגיאות',
    story: 'מנסה להיכנס לאתר ב-HTTPS ומקבלת שגיאת SSL. הגרסה הנפוצה: תעודת SSL פגה או לא תואמת.',
    causes: [
      'תעודת SSL (certificate) פגה — Let\'s Encrypt מתחדשת כל 90 יום',
      'תעודה לדומיין אחר — שרת אחסון מארח כמה אתרים',
      'שעון המחשב שגוי — TLS תלוי בזמן מדויק',
      'גרסת TLS ישנה — שרת ישן שלא תומך ב-TLS 1.3',
      'HSTS — הדפדפן זכר שהאתר צריך HTTPS אבל עכשיו אין',
    ],
    solution: `בדיקת תעודה:
openssl s_client -connect example.com:443 -servername example.com

חידוש Let's Encrypt:
certbot renew --dry-run
certbot certonly --webroot -d example.com

שעון:
timedatectl set-ntp true

לניקוי HSTS ב-Chrome:
chrome://net-internals/#hsts → Delete domain`,
    tip: '💡 Let\'s Encrypt חינמי ואוטומטי! הגדירו cronjob: certbot renew ירוץ כל יום ויחדש לפני שיפוג.'
  },
  {
    id: 21,
    icon: '🔏',
    title: 'Mixed Content — HTTPS עם HTTP בפנים',
    category: 'SSL/אבטחה',
    story: 'האתר שלך עובר ל-HTTPS — יופי! אבל Chrome מסמן אזהרה. הסיבה: תמונה, script, או API אחד בתוך העמוד עדיין נקרא ב-HTTP. דפדפן לא אוהב תמונה "לא מאובטחת" בתוך עמוד "מאובטח".',
    causes: [
      'img src="http://..." — תמונה נטענת ב-HTTP',
      'script src="http://..." — JavaScript חיצוני ב-HTTP',
      'API call ל-http:// מתוך https:// page',
      'iframe שמטעין דף HTTP',
      'CSS background-image עם URL של http://',
    ],
    solution: `1. פתחו DevTools → Console — תראו אזהרות Mixed Content
2. DevTools → Network → סננו "mixed" או "blocked"

תיקון:
- שנו כל http:// ל-https:// בקוד
- תמונות: העלו ל-CDN שלכם (HTTPS) או שנו src
- API: ודאו שכל endpoint תומך HTTPS

Nginx — הפניה אוטומטית HTTP→HTTPS:
server {
  listen 80;
  return 301 https://$host$request_uri;
}`,
    tip: '💡 Active Mixed Content (scripts/XHR) חסום לחלוטין. Passive (תמונות) מציג אזהרה בלבד. שניהם חייבים תיקון!'
  },
  {
    id: 22,
    icon: '📜',
    title: 'Certificate Chain Error — שגיאת שרשרת אמון',
    category: 'SSL/אבטחה',
    story: 'Chrome מציג "NET::ERR_CERT_AUTHORITY_INVALID" גם כשהתעודה חדשה ותקינה. הסיבה הנפוצה: intermediate certificate חסר. ה-TLS handshake נשבר!',
    causes: [
      'חסר intermediate certificate בהגדרות nginx/Apache',
      'תעודה self-signed — הדפדפן לא סומך עליה (CA לא ידועה)',
      'Root CA לא מוכרת — נדיר, רק בארגונים עם CA פרטית',
      'תעודה חתומה ל-domain שגוי (Common Name mismatch)',
      'גרסת OpenSSL ישנה שלא מכירה CA חדשות',
    ],
    solution: `בדיקת chain:
openssl s_client -connect example.com:443 -showcerts

בדיקה מקוונת: ssllabs.com/ssltest/

nginx — ציינו fullchain (כולל intermediates):
ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

Let's Encrypt — fullchain.pem כוללת הכל אוטומטית!
self-signed → בארגון: הוסיפו ל-trust store`,
    tip: '💡 ssllabs.com/ssltest נותן ציון A-F לאבטחת SSL שלכם. לקבל A+ = הגדירו HSTS + עדכנו cipher list!'
  },
  {
    id: 23,
    icon: '⏳',
    title: 'HSTS — דפדפן לא נותן להיכנס ב-HTTP',
    category: 'SSL/אבטחה',
    story: 'ניסית להיכנס ל-http://example.com ומופיעה "שגיאת HSTS". הדפדפן בעצמו חסם — גם אם השרת עבד! HSTS אומר "לא, רק HTTPS, אני זוכר".',
    causes: [
      'האתר שלח Strict-Transport-Security header בעבר',
      'max-age הוגדר ל-שנה/שנתיים — הדפדפן "זוכר" לזמן הזה',
      'האתר עכשיו ב-HTTP בלבד (הורדת SSL) — הדפדפן מסרב',
      'includeSubDomains — כל subdomain חסום גם הוא',
    ],
    solution: `ניקוי HSTS ב-Chrome:
1. פתחו chrome://net-internals/#hsts
2. בקטע "Delete domain security policies" הכניסו דומיין
3. לחצו Delete

Firefox: about:config → network.stricttransportsecurity.preloadlist

אם זה dev/test: השתמשו ב-localhost (אין HSTS) או דומיין שונה
ב-Production: לא להוריד HSTS — זה Feature, לא Bug!`,
    tip: '💡 HSTS Preload List = רשימת אתרים שהדפדפן מכיר "מהמפעל". גוגל, פייסבוק — Chrome לעולם לא ייכנס אליהם ב-HTTP.'
  },
  {
    id: 24,
    icon: '🔑',
    title: 'JWT Token בעיות — Authentication נשבר',
    category: 'SSL/אבטחה',
    story: 'המשתמש מחובר ופתאום "session expired" אחרי דקה. או: API מחזיר 401 כל הזמן למרות token תקין. JWT הוא נפוץ — ובעיות עם JWT עוד יותר!',
    causes: [
      'exp (expiry) הוגדר קצר מדי — 15 דקות זה קצר!',
      'Secret key שונה בין server instances (load balancer)',
      'שעונים לא מסונכרנים בין שרתים — nbf/iat לא תואמים',
      'Algorithm mismatch — שרת מצפה RS256, token עם HS256',
      'Token לא נשלח ב-header הנכון',
    ],
    solution: `בדיקת JWT:
// פתחו jwt.io — הדביקו את ה-token ותראו decoded payload
// exp = Unix timestamp: new Date(exp*1000)

שליחה נכונה:
Authorization: Bearer eyJhbGc...

נפוצה: refresh token flow:
- Access token: 15 דקות
- Refresh token: 7 ימים
- לפני פקיעה: חדשו ברקע בשקט עם refresh

Next.js/Express:
const token = jwt.verify(tokenStr, process.env.JWT_SECRET)`,
    tip: '💡 אל תשמרו JWT ב-localStorage! XSS יכול לגנוב אותו. השתמשו ב-httpOnly cookie — JavaScript לא מגיע אליו.'
  },
  {
    id: 25,
    icon: '🌐',
    title: 'CORS Error — Cross-Origin נחסם',
    category: 'SSL/אבטחה',
    story: 'Frontend ב-localhost:3000 קורא API ב-localhost:8000 ומקבל "CORS Policy blocked". זו הנפוצה ביותר בפיתוח full-stack!',
    causes: [
      'הדפדפן חוסם בקשות מ-origin אחד ל-origin אחר (שמירת אבטחה)',
      'שרת לא שולח Access-Control-Allow-Origin header',
      'Preflight OPTIONS request נכשל',
      'Credentials (cookies) + CORS = הגדרה מיוחדת נדרשת',
      'Production: דומיין שונה מה-API domain',
    ],
    solution: `Express (Node.js):
const cors = require('cors')
app.use(cors({ origin: 'http://localhost:3000' }))

FastAPI (Python):
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(CORSMiddleware,
  allow_origins=["http://localhost:3000"],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"]
)

עם cookies — חייבים גם:
fetch(url, { credentials: 'include' })`,
    tip: '💡 CORS הוא הגנת דפדפן בלבד! ב-Postman/curl לא תראו את השגיאה — כי הם לא דפדפן. השרת לא חוסם, הדפדפן חוסם!'
  },
  {
    id: 26,
    icon: '🛡️',
    title: 'Security Headers חסרים — CSP, X-Frame',
    category: 'SSL/אבטחה',
    story: 'האתר "עובד" — אבל Mozilla Observatory נותן ציון F. כותרות (headers) שמגנים מ-XSS, clickjacking, MIME sniffing — כולם חסרים. תוקפים אוהבים אתרים כאלה.',
    causes: [
      'Content-Security-Policy (CSP) חסר — מאפשר XSS injection',
      'X-Frame-Options חסר — מאפשר clickjacking (iframe malicious)',
      'X-Content-Type-Options חסר — מאפשר MIME sniffing attacks',
      'Referrer-Policy לא הוגדר — דולף מידע ל-third parties',
      'Permissions-Policy חסר — כל website יכול לבקש מיקום/מצלמה',
    ],
    solution: `nginx — הוסיפו ל-server block:
add_header X-Frame-Options "SAMEORIGIN";
add_header X-Content-Type-Options "nosniff";
add_header X-XSS-Protection "1; mode=block";
add_header Referrer-Policy "strict-origin-when-cross-origin";
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline';";
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";

בדיקה: observatory.mozilla.org`,
    tip: '💡 CSP הוא הכי חזק — אומרים לדפדפן "רק scripts מהדומיין שלי". מונע XSS גם אם תוקף הזריק קוד!'
  },
  {
    id: 12,
    icon: '🕳️',
    title: 'Packet Loss — חבילות הולכות לאיבוד',
    category: 'רשת',
    story: 'שיחת Zoom מתנתקת? Discord קוצץ אודיו? כנראה packet loss.',
    causes: [
      'כבל רשת פגום — חיבור לא תקין',
      'WiFi interference — הרבה רשתות על אותו channel',
      'ISP תקלה — בעיית routing',
      'Switch/Router עמוס — drops חבילות',
      'כרטיס רשת (network card) ישן',
    ],
    solution: `1. ping -t 8.8.8.8 — רצי 5 דקות, ספרי כמה % loss
2. פחות מ-1% = נורמלי. יותר מ-3% = בעיה
3. נסו כבל אחר — כבל רשת זול = בעיות
4. ב-Wireshark חפשו TCP Retransmission — סימן ל-loss
5. פנו ל-ISP — ייתכן שיש בעיה בצד שלהם`,
    tip: '💡 אפילו 1% packet loss הורס שיחות VoIP ו-gaming. 0% loss = חוויה מושלמת!'
  }
]

export const storiesContent = [
  {
    id: 1,
    icon: '🎬',
    title: 'הסיפור שמאחורי YouTube Buffering',
    category: 'סיפור אמיתי',
    content: `ב-2022, חברת Cloudflare עברה תקלה שהורידה 19% מהאינטרנט. איך? BGP routing bug.

BGP (Border Gateway Protocol) הוא הפרוטוקול שמחליט איך traffic זורם בין ISPs. Cloudflare שלחה prefix שגוי — ה-routers ברחבי העולם קיבלו הוראה שגויה לאן לנתב traffic.

התוצאה: Discord, Shopify, Twitch, Teams — כולם נפלו. 19 דקות של כאוס.

מה לקחנו: הרשת אינטרנט היא רשת של אמון הדדי. BGP לא מאמת — הוא פשוט מאמין לכולם. זה חוסן (כולם מחוברים) אבל גם נקודת תורפה.`
  },
  {
    id: 2,
    icon: '🕊️',
    title: 'אינטרנט עם יונים — RFC 1149',
    category: 'מוזר אבל אמיתי',
    content: `ב-1990 פורסם RFC 1149 — "Standard for the Transmission of IP Datagrams on Avian Carriers" (העברת IP על גבי ציפורים).

ב-2001, קבוצה בנורווגיה ביצעה את זה באמת: 9 חבילות IP נשלחו על 9 יונות על פני 5 ק"מ. כל יונה נשאה microSD עם הdata גלוי על גבה.

תוצאות:
- 4 מתוך 9 חבילות הגיעו (56% packet loss 😅)
- Latency: כ-3,000 שניות (50 דקות)
- Bandwidth: ~2.27 MB (הSD שנשאה)

הלקח: פרוטוקול IP הוא רק שפה — הוא יכול לרוץ על כל medium. WiFi, Fiber, Ethernet... ויונים! 🕊️`
  },
  {
    id: 3,
    icon: '🌊',
    title: 'כבלי הים שמחזיקים את האינטרנט',
    category: 'תשתית',
    content: `99% מהתקשורת הבינלאומית עוברת דרך כבלי fiber optic תת-ימיים. לא לוויינים — כבלים.

בים התיכון עוברים 5 כבלים עיקריים שמחברים ישראל לאירופה וארה"ב. כבל אחד = עשרות Terabits/sec.

ב-2022, שלושה כבלים תת-ימיים נפגעו ליד מדגסקר — כנראה עוגן של ספינה. אפריקה המזרחית איבדה 50% מחיבור האינטרנט.

כבל Sea-Me-We עובר מישראל ועד סינגפור. רוחב הפס שלו: 30+ Tbps.

הכבלים מוחזקים על ידי קונסורציום של חברות כמו Google, Meta, Amazon. Google בנתה את כבל Curie — 10,500 ק"מ בין ארה"ב לצ'ילה! 🌊`
  },
  {
    id: 4,
    icon: '🔐',
    title: 'איך HTTPS עובד — בפשטות',
    category: 'אבטחה',
    content: `כשאת רואה 🔒 בדפדפן — מה בדיוק קורה מאחורי הקלעים?

1. דפדפן שולח "Client Hello" עם גרסאות TLS שהוא תומך בהן
2. שרת שולח "Server Hello" + Certificate (תעודה עם public key)
3. דפדפן בודק: "האם זה באמת Google?" — Certificate Authority מאשרת
4. Key Exchange: שני הצדדים מחשבים session key (Diffie-Hellman)
5. עכשיו כל התקשורת מוצפנת עם symmetric key

המדהים: Key Exchange קורה בלי ששלחתם את המפתח! DH מאפשר לשני צדדים להגיע למפתח זהה בלי לשלוח אותו. קסם מתמטי! 🔮

כל ה-handshake = פחות מ-100ms. HTTPS אמנם מוסיף overhead — אבל HTTP/2 ו-TLS 1.3 הפחיתו אותו לאפסיים.`
  },
  {
    id: 5,
    icon: '🚀',
    title: 'איך Starlink שינה את האינטרנט הלוויני',
    category: 'טכנולוגיה',
    content: `לוויינים מסורתיים (GEO) פועלים ב-35,786 ק"מ מהאדמה. Latency: 600ms+. בלתי שמיש לגיימינג.

SpaceX שיגרה 5,000+ לוויינים ב-550 ק"מ בלבד (LEO). Latency: 20-40ms! כמעט כמו כבל.

איך אפשרי? מרחק קצר = זמן עבור אור קצר. c=300,000 km/s, 550km × 2 = ~3.7ms רק למרחק. שאר ה-latency מגיע מ-processing.

תוצאה: אינטרנט לוויני שמתחרה עם fiber באזורים מרוחקים. איים, מדבריות, ספינות — הכל מחובר.

הבעיה: constellation עם 5,000 לוויינים = בעיה אסטרונומית. Astronomers מתלוננים על זיהום אור. SpaceX ניסתה Darksat — לוויין עם ציפוי מחשיך.`
  }
]
