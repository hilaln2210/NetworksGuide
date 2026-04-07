/**
 * תקלות יומיומיות ברשתות — הסבר + סיבה + פתרון + סיפור אמיתי
 */

export const troubleshootingContent = [
  {
    id: 1,
    icon: '🌐',
    title: 'האינטרנט לא עובד — אבל ה־WiFi מחובר',
    titleEn: 'No Internet — But WiFi Is Connected',
    category: 'חיבור',
    categoryEn: 'Connection',
    story: 'זה קרה לנו כולנו: סמל ה־WiFi ירוק ומחובר, אבל כל אתר מחזיר שגיאה. "אין אינטרנט" אבל ה־WiFi מחובר? איך זה אפשרי?',
    storyEn: 'It happened to all of us: the WiFi icon is green and connected, but every website shows an error. "No internet" but WiFi is connected? How is that possible?',
    causes: [
      'ה-router מחובר לרשת המקומית, אבל לא לאינטרנט (בעיה ב־WAN port)',
      'שרת ה־DNS לא מגיב — הכתובות לא מתורגמות',
      'שרת ה־DHCP לא נתן לך כתובת IP תקינה',
      'ספקית האינטרנט (ISP) חווה תקלה',
    ],
    causesEn: [
      'The router is connected to the local network, but not to the internet (WAN port problem)',
      'The DNS server is not responding — domain names are not translated',
      'The DHCP server did not give you a valid IP address',
      'The ISP (Internet Service Provider) has an outage',
    ],
    solution: `1. ping 8.8.8.8 — אם עובד: בעיה ב־DNS, לא אינטרנט
2. ping router שלך (בדרך כלל 192.168.1.1) — אם לא עובד: בעיה ב־LAN
3. ipconfig /release && ipconfig /renew — מרענן DHCP
4. שנה DNS ל־8.8.8.8 ידנית
5. הפעל מחדש router (60 שניות!)`,
    solutionEn: `1. ping 8.8.8.8 — if it works: DNS problem, not internet
2. ping your router (usually 192.168.1.1) — if it fails: LAN problem
3. ipconfig /release && ipconfig /renew — refresh DHCP
4. Change DNS to 8.8.8.8 manually
5. Restart the router (wait 60 seconds!)`,
    tip: '💡 תמיד תתחילו מ-ping. הוא יגיד לכם בדיוק איפה השרשרת נשברת.',
    tipEn: '💡 Always start with ping. It tells you exactly where the chain breaks.',
  },
  {
    id: 2,
    icon: '🐢',
    title: 'האינטרנט איטי — אבל רק בערב',
    titleEn: 'Slow Internet — But Only in the Evening',
    category: 'ביצועים',
    categoryEn: 'Performance',
    story: 'בבוקר הכל מהיר, בערב YouTube נתקע כל 10 שניות. זה לא המחשב שלך — זה congestion (עומס ברשת).',
    storyEn: 'In the morning everything is fast, in the evening YouTube freezes every 10 seconds. It is not your computer — it is congestion (network overload).',
    causes: [
      'כל השכנים גולשים בערב — צינורות הספק עמוסים',
      'ISP מבצע Traffic Shaping — מאט במכוון סטרימינג בשעות עומס',
      'WiFi channel עמוס — שכנים משתמשים באותו ערוץ',
      'ה-router שלך לא מתמודד עם QoS',
    ],
    causesEn: [
      'All neighbors are online in the evening — the ISP pipes are full',
      'ISP does Traffic Shaping — slows streaming on purpose during peak hours',
      'WiFi channel is busy — neighbors use the same channel',
      'Your router does not handle QoS well',
    ],
    solution: `1. בדקו מהירות עם speedtest.net — בוקר vs ערב
2. שנו ערוץ WiFi ל־5GHz (פחות עומס, טווח קצר יותר)
3. בהגדרות router — הפעילו QoS ותייגו streaming כעדיפות גבוהה
4. התקשרו ל־ISP ודרשו SLA על מהירות מינימום`,
    solutionEn: `1. Check speed with speedtest.net — morning vs evening
2. Switch WiFi channel to 5GHz (less crowded, shorter range)
3. In router settings — enable QoS and set streaming as high priority
4. Call your ISP and ask for a minimum speed SLA`,
    tip: '💡 WiFi 5GHz מהיר יותר אבל חלש יותר. 2.4GHz = מרחק, 5GHz = מהירות.',
    tipEn: '💡 WiFi 5GHz is faster but weaker. 2.4GHz = range, 5GHz = speed.',
  },
  {
    id: 3,
    icon: '🔒',
    title: 'הסיסמה נכונה אבל לא נכנסת לאתר',
    titleEn: 'Password Is Correct But Cannot Log In',
    category: 'HTTP/אבטחה',
    categoryEn: 'HTTP/Security',
    story: 'את מקלידה סיסמה נכונה ב־100%, אבל האתר מחזיר "סיסמה שגויה". מה קורה?',
    storyEn: 'You type the correct password 100%, but the website says "wrong password". What is happening?',
    causes: [
      'cookies ישנות — session ישן מתנגש עם הניסיון החדש',
      'האתר חוסם IP לאחר ניסיונות כושלים רבים',
      'Caps Lock פעיל (קלאסי!)',
      'הדפדפן שמר סיסמה ישנה ומילא אוטומטית',
      'האתר מחוץ לאוויר (500 Internal Server Error)',
    ],
    causesEn: [
      'Old cookies — an old session conflicts with the new login attempt',
      'The website blocks your IP after too many failed attempts',
      'Caps Lock is on (classic!)',
      'The browser saved an old password and auto-filled it',
      'The website is down (500 Internal Server Error)',
    ],
    solution: `1. פתחו כרטיסייה בגלישה פרטית (Incognito)
2. בדקו מה קוד התשובה — F12 → Network → בקשת login
3. אם 429 Too Many Requests — המתינו 15 דקות
4. נסו איפוס סיסמה
5. נסו דפדפן אחר — אולי localStorage מקולקל`,
    solutionEn: `1. Open a private/incognito tab
2. Check the response code — F12 → Network → login request
3. If 429 Too Many Requests — wait 15 minutes
4. Try password reset
5. Try a different browser — maybe localStorage is broken`,
    tip: '💡 F12 → Network הוא כלי הדיאגנוסטיקה הכי חשוב לבאגים של HTTP!',
    tipEn: '💡 F12 → Network is the most important tool for debugging HTTP issues!',
  },
  {
    id: 4,
    icon: '📡',
    title: 'ping עובד אבל האתר לא נפתח',
    titleEn: 'Ping Works But the Website Does Not Open',
    category: 'DNS',
    categoryEn: 'DNS',
    story: 'ping 8.8.8.8 עובד מצוין, אבל chrome מראה "This site can\'t be reached". ה־IP עובד אבל ה־DNS שבור.',
    storyEn: 'ping 8.8.8.8 works fine, but Chrome shows "This site can\'t be reached". The IP works but DNS is broken.',
    causes: [
      'שרת DNS לא מגיב או עמוס',
      'DNS cache מקולקל — רשומת DNS ישנה ושגויה נשמרה',
      'ISP חוסם דומיין ספציפי',
      'hosts file ב־Windows עם override שגוי',
    ],
    causesEn: [
      'DNS server is not responding or overloaded',
      'DNS cache is corrupted — an old and wrong DNS record is saved',
      'ISP blocks a specific domain',
      'hosts file in Windows has a wrong override',
    ],
    solution: `1. ipconfig /flushdns — מנקה DNS cache
2. nslookup google.com — בודק אם DNS עובד
3. שנה DNS ל־1.1.1.1 (Cloudflare) או 8.8.8.8 (Google)
4. בדקו hosts file: C:\\Windows\\System32\\drivers\\etc\\hosts`,
    solutionEn: `1. ipconfig /flushdns — clears DNS cache
2. nslookup google.com — checks if DNS works
3. Change DNS to 1.1.1.1 (Cloudflare) or 8.8.8.8 (Google)
4. Check hosts file: C:\\Windows\\System32\\drivers\\etc\\hosts`,
    tip: '💡 כשping לIP עובד אבל לדומיין לא — זו תמיד בעיית DNS. פשוט!',
    tipEn: '💡 When ping to IP works but to domain does not — it is always a DNS problem. Simple!',
  },
  {
    id: 5,
    icon: '🔄',
    title: 'חיבור TCP נפסק באמצע',
    titleEn: 'TCP Connection Drops in the Middle',
    category: 'TCP',
    categoryEn: 'TCP',
    story: 'באמצע הורדה גדולה — הכל נעצר. SSH session קופא. הבעיה? TCP timeout או RST packet.',
    storyEn: 'In the middle of a big download — everything stops. SSH session freezes. The problem? TCP timeout or RST packet.',
    causes: [
      'Router שולח RST packet אחרי idle timeout (בדרך כלל 5-30 דקות)',
      'NAT entry פג — הפורט שהוקצה לחיבור שלך נמחק',
      'Firewall סגר חיבור שנראה "חשוד"',
      'חבילות הולכות לאיבוד (packet loss) ו־TCP לא מצליח להתאושש',
    ],
    causesEn: [
      'Router sends RST packet after idle timeout (usually 5-30 minutes)',
      'NAT entry expired — the port assigned to your connection was deleted',
      'Firewall closed a connection that looked "suspicious"',
      'Packets are lost (packet loss) and TCP cannot recover',
    ],
    solution: `1. SSH: הוסיפו ServerAliveInterval 60 ב-~/.ssh/config
2. TCP keepalive — מבקש מה־OS לשלוח keepalive packets
3. בדקו packet loss עם: ping -n 100 8.8.8.8 (Windows) או ping -c 100 8.8.8.8
4. WireGuard/VPN לחיבורים ארוכים חשובים`,
    solutionEn: `1. SSH: add ServerAliveInterval 60 in ~/.ssh/config
2. TCP keepalive — asks the OS to send keepalive packets
3. Check packet loss with: ping -n 100 8.8.8.8 (Windows) or ping -c 100 8.8.8.8
4. Use WireGuard/VPN for long important connections`,
    tip: '💡 TCP Keepalive = שולח "עוד חי?" כל X שניות כדי לשמור NAT entry חי.',
    tipEn: '💡 TCP Keepalive = sends "still alive?" every X seconds to keep the NAT entry alive.',
  },
  {
    id: 6,
    icon: '🏠',
    title: 'IP 169.254.x.x — מה זה?',
    titleEn: 'IP 169.254.x.x — What Is This?',
    category: 'DHCP',
    categoryEn: 'DHCP',
    story: 'פתחת CMD ורשמת ipconfig — IP שלך הוא 169.254.something. זה לא תקין! זה APIPA — כישלון DHCP.',
    storyEn: 'You opened CMD and typed ipconfig — your IP is 169.254.something. This is not normal! It is APIPA — DHCP failure.',
    causes: [
      'שרת DHCP לא ענה (router כבוי, עמוס, תקלה)',
      'מחשב לא קיבל IP תוך 30 שניות — מקצה לעצמו APIPA',
      'כבל רשת לא מחובר כראוי',
      'תקלה בכרטיס הרשת',
    ],
    causesEn: [
      'DHCP server did not respond (router off, overloaded, or broken)',
      'Computer did not get an IP within 30 seconds — assigns itself APIPA',
      'Network cable is not connected properly',
      'Network card has a problem',
    ],
    solution: `1. ipconfig /release && ipconfig /renew
2. בדקו שה-router פועל ושה־DHCP מופעל בו
3. נסו IP סטטי ידנית: 192.168.1.100, mask 255.255.255.0, gateway 192.168.1.1
4. Device Manager → Network adapters → Update driver`,
    solutionEn: `1. ipconfig /release && ipconfig /renew
2. Check that the router is on and DHCP is enabled
3. Try a static IP manually: 192.168.1.100, mask 255.255.255.0, gateway 192.168.1.1
4. Device Manager → Network adapters → Update driver`,
    tip: '💡 169.254.x.x = APIPA (Automatic Private IP Addressing). תמיד סימן ש־DHCP נכשל!',
    tipEn: '💡 169.254.x.x = APIPA (Automatic Private IP Addressing). Always a sign that DHCP failed!',
  },
  {
    id: 7,
    icon: '🔀',
    title: 'שתי בקשות TCP — למה?',
    titleEn: 'Two TCP Requests — Why?',
    category: 'TCP',
    categoryEn: 'TCP',
    story: 'ב־Wireshark רואים שהאתר נפתח עם SYN, SYN-ACK, ACK, אבל אחר כך מופיע עוד SYN. למה TCP פותח חיבור חדש?',
    storyEn: 'In Wireshark you see the website opens with SYN, SYN-ACK, ACK, but then another SYN appears. Why does TCP open a new connection?',
    causes: [
      'HTTP/1.1 פותח חיבור לכל resource (קובץ CSS, תמונה וכו\')',
      'HTTP/2 מאחד הכל לחיבור אחד עם multiplexing',
      'Connection: close header סוגר חיבור אחרי כל request',
      'CDN endpoints שונים לתמונות vs HTML',
    ],
    causesEn: [
      'HTTP/1.1 opens a connection for each resource (CSS file, image, etc.)',
      'HTTP/2 combines everything into one connection with multiplexing',
      'Connection: close header closes the connection after each request',
      'Different CDN endpoints for images vs HTML',
    ],
    solution: `זה נורמלי ב־HTTP/1.1! HTTP/2 פתר את זה.
בדקו בDevTools → Network → Protocol עמודה:
- h2 = HTTP/2 (חיבור אחד לכל)
- http/1.1 = חיבור לכל resource`,
    solutionEn: `This is normal in HTTP/1.1! HTTP/2 solved this.
Check in DevTools → Network → Protocol column:
- h2 = HTTP/2 (one connection for all)
- http/1.1 = one connection per resource`,
    tip: '💡 HTTP/2 הפחית latency בכ־50% בדפדפן. רוב האתרים המודרניים משתמשים בו.',
    tipEn: '💡 HTTP/2 reduced latency by about 50% in the browser. Most modern websites use it.',
  },
  {
    id: 8,
    icon: '🛡️',
    title: 'CORS Error — "Cross-Origin Request Blocked"',
    titleEn: 'CORS Error — "Cross-Origin Request Blocked"',
    category: 'HTTP/אבטחה',
    categoryEn: 'HTTP/Security',
    story: 'כתבת JavaScript שמבצע fetch ל־API ומופיעה ב־Console שגיאה אדומה: CORS. מה זה ולמה?',
    storyEn: 'You wrote JavaScript that does a fetch to an API and a red error appears in the Console: CORS. What is it and why?',
    causes: [
      'הדפדפן חוסם בקשות מדומיין A לדומיין B (Same-Origin Policy)',
      'שרת ה־API לא מחזיר Access-Control-Allow-Origin header',
      'בקשת preflight OPTIONS נכשלת',
    ],
    causesEn: [
      'The browser blocks requests from domain A to domain B (Same-Origin Policy)',
      'The API server does not return an Access-Control-Allow-Origin header',
      'The preflight OPTIONS request fails',
    ],
    solution: `בשרת (Python Flask / Node.js):
- Flask: flask-cors → CORS(app)
- Express: cors() middleware
- שלחו header: Access-Control-Allow-Origin: *

זה בטיחות! הדפדפן מגן עלייך מ-cross-site attacks.`,
    solutionEn: `On the server (Python Flask / Node.js):
- Flask: flask-cors → CORS(app)
- Express: cors() middleware
- Send header: Access-Control-Allow-Origin: *

This is a safety feature! The browser protects you from cross-site attacks.`,
    tip: '💡 CORS = Cross-Origin Resource Sharing. זה feature, לא bug! הדפדפן מגן עלייך 🛡️',
    tipEn: '💡 CORS = Cross-Origin Resource Sharing. It is a feature, not a bug! The browser protects you.',
  },
  {
    id: 9,
    icon: '📶',
    title: 'WiFi מחובר אבל signal חלש',
    titleEn: 'WiFi Connected But Signal Is Weak',
    category: 'פיזי/WiFi',
    categoryEn: 'Physical/WiFi',
    story: 'Signal חלש = latency גבוה ואינטרנט לא יציב. הבנת הפיזיקה של WiFi עוזרת לפתור!',
    storyEn: 'Weak signal = high latency and unstable internet. Understanding WiFi physics helps you fix it!',
    causes: [
      'מחיצות, במיוחד בטון ומתכת, מחלישות אות',
      '2.4GHz מתחרה עם מיקרוגל, Bluetooth, שכנים',
      'Router ישן עם אנטנה חלשה',
      'מרחק פיזי גדול מה-router',
    ],
    causesEn: [
      'Walls, especially concrete and metal, weaken the signal',
      '2.4GHz competes with microwave, Bluetooth, and neighbors',
      'Old router with a weak antenna',
      'Too far from the router',
    ],
    solution: `1. העבירו את ה-router לנקודה מרכזית בבית
2. עברו ל־5GHz אם קרובים ל-router
3. Mesh WiFi לבית גדול (eero, Google Nest)
4. WiFi Analyzer (Android) — ראו אילו channels עמוסים
5. Channel 1, 6 או 11 בלבד ל־2.4GHz (לא overlap)`,
    solutionEn: `1. Move the router to a central spot in the house
2. Switch to 5GHz if you are close to the router
3. Use Mesh WiFi for a big house (eero, Google Nest)
4. WiFi Analyzer (Android) — see which channels are busy
5. Use only channel 1, 6, or 11 for 2.4GHz (no overlap)`,
    tip: '💡 2.4GHz עובר דרך קירות טוב יותר. 5GHz מהיר יותר אבל מרחק קצר. בחרו לפי מיקום!',
    tipEn: '💡 2.4GHz goes through walls better. 5GHz is faster but shorter range. Choose by location!',
  },
  {
    id: 10,
    icon: '⏱️',
    title: 'Latency גבוה בגיימינג',
    titleEn: 'High Latency in Gaming',
    category: 'ביצועים',
    categoryEn: 'Performance',
    story: 'Ping של 200ms = מוות בגיימינג. למה זה קורה, ולמה דווקא לשרת מסוים?',
    storyEn: 'Ping of 200ms = death in gaming. Why does it happen, and why only to a specific server?',
    causes: [
      'שרת המשחק באירופה/אמריקה — פיזיקה = מרחק = זמן',
      'ISP routing לא יעיל — חבילה עוברת דרך 20 hops מיותרים',
      'WiFi מוסיף latency לעומת כבל',
      'Router עמוס עם QoS גרוע',
    ],
    causesEn: [
      'Game server is in Europe/America — physics = distance = time',
      'ISP routing is not efficient — packet goes through 20 extra hops',
      'WiFi adds latency compared to cable',
      'Router is overloaded with bad QoS',
    ],
    solution: `1. חברו כבל — WiFi מוסיף 5-30ms, כבל = אפס
2. בחרו שרת קרוב גיאוגרפית (EU/IL)
3. tracert לשרת המשחק — זהו hops איטיים
4. הפעילו QoS ב-router: Gaming > Streaming > Browsing
5. גיימינג VPN (Exitlag, NordVPN) — לפעמים שיפור משמעותי`,
    solutionEn: `1. Use a cable — WiFi adds 5-30ms, cable = zero
2. Pick a server close to you (EU/IL)
3. tracert to the game server — find slow hops
4. Enable QoS in router: Gaming > Streaming > Browsing
5. Gaming VPN (Exitlag, NordVPN) — sometimes a big improvement`,
    tip: '💡 כבל Ethernet אחד שווה 20ms חיסכון. השקעה של 20 שקל שמשנה חוויה!',
    tipEn: '💡 One Ethernet cable saves 20ms. A small investment that changes the experience!',
  },
  {
    id: 11,
    icon: '🔁',
    title: 'Port Already in Use — שגיאה בהרצת שרת',
    titleEn: 'Port Already in Use — Error When Starting a Server',
    category: 'תכנות',
    categoryEn: 'Programming',
    story: 'רצת python server.py ומקבלת: "Address already in use" ב-port 8080. מה קרה?',
    storyEn: 'You ran python server.py and got: "Address already in use" on port 8080. What happened?',
    causes: [
      'תהליך קודם לא נסגר כראוי ועדיין מחזיק את הפורט',
      'TIME_WAIT state — TCP מחכה 2 דקות לפני שחרור פורט',
      'שני תהליכים מנסים לפתוח את אותו פורט',
    ],
    causesEn: [
      'A previous process did not close properly and still holds the port',
      'TIME_WAIT state — TCP waits 2 minutes before releasing the port',
      'Two processes try to open the same port',
    ],
    solution: `Linux/Mac:
lsof -i :8080 → רואים מי תופס
kill -9 <PID> → סוגרים אותו

Windows:
netstat -ano | findstr :8080
taskkill /PID <PID> /F

או: שנה PORT ל־8081, 3001 וכו'
בקוד: SO_REUSEADDR option`,
    solutionEn: `Linux/Mac:
lsof -i :8080 → see who holds the port
kill -9 <PID> → close it

Windows:
netstat -ano | findstr :8080
taskkill /PID <PID> /F

Or: change PORT to 8081, 3001, etc.
In code: SO_REUSEADDR option`,
    tip: '💡 SO_REUSEADDR = אומרים ל־OS "תן לי לפתוח פורט אפילו אם ב־TIME_WAIT". פתרון קסם!',
    tipEn: '💡 SO_REUSEADDR = tells the OS "let me open the port even if it is in TIME_WAIT". Magic fix!',
  },
  {
    id: 12,
    icon: '🔍',
    title: '404 — Site Not Found',
    titleEn: '404 — Page Not Found',
    category: 'HTTP שגיאות',
    categoryEn: 'HTTP Errors',
    story: 'הכתובת נכונה, החיבור תקין — אבל Chrome מציג "404 Not Found". מה קרה? המשאב המבוקש פשוט לא קיים בשרת.',
    storyEn: 'The URL is correct, the connection is fine — but Chrome shows "404 Not Found". What happened? The requested resource simply does not exist on the server.',
    causes: [
      'שגיאת כתיב בנתיב (URL) — אותיות גדולות/קטנות חשובות בשרתי Linux',
      'הדף נמחק מהשרת אבל הקישור עדיין מופיע בגוגל',
      'העמוד הועבר לכתובת חדשה אבל ה-redirect לא הוגדר',
      'ה-router/nginx לא מצא handler מתאים לנתיב',
    ],
    causesEn: [
      'Typo in the URL path — uppercase/lowercase matters on Linux servers',
      'The page was deleted from the server but the link still appears on Google',
      'The page moved to a new URL but redirect was not set up',
      'The router/nginx did not find a matching handler for the path',
    ],
    solution: `בדפדפן: בדקו את ה־URL שוב — אולי רווח מיותר, / חסר בסוף
בשרת: בדקו שהקובץ/route קיים
nginx: location block לנתיב הזה
בGoogle Search Console: ראו דפים עם 404 ותקנו redirect

301 redirect:
nginx: return 301 /new-path;
Apache: Redirect /old /new`,
    solutionEn: `In browser: check the URL again — maybe an extra space, or missing / at the end
On server: check that the file/route exists
nginx: add a location block for that path
In Google Search Console: find pages with 404 and set up redirects

301 redirect:
nginx: return 301 /new-path;
Apache: Redirect /old /new`,
    tip: '💡 404 = "Not Found" — זו שגיאת לקוח (4xx). הבקשה הגיעה לשרת, אבל מה שביקשת לא קיים.',
    tipEn: '💡 404 = "Not Found" — this is a client error (4xx). The request reached the server, but what you asked for does not exist.',
  },
  {
    id: 13,
    icon: '🚫',
    title: '403 Forbidden — גישה נדחתה',
    titleEn: '403 Forbidden — Access Denied',
    category: 'HTTP שגיאות',
    categoryEn: 'HTTP Errors',
    story: 'האתר קיים, החיבור תקין, אבל השרת אומר "אסור לך להיכנס". זה שונה מ־404 — הדף קיים, אבל אין לך הרשאה.',
    storyEn: 'The website exists, the connection works, but the server says "you are not allowed in". This is different from 404 — the page exists, but you do not have permission.',
    causes: [
      'הרשאות קבצים שגויות בשרת (chmod) — 644 לקבצים, 755 לתיקיות',
      'ה־IP שלך חסום על ידי firewall או .htaccess',
      'nginx/Apache הוגדרו לחסום גישה ישירה לתיקייה',
      'חסר קובץ index.html/index.php בתיקייה (directory listing מבוטל)',
      'token/JWT פג תוקף — השרת לא מאשר גישה',
    ],
    causesEn: [
      'Wrong file permissions on the server (chmod) — 644 for files, 755 for folders',
      'Your IP is blocked by firewall or .htaccess',
      'nginx/Apache are set to block direct access to the folder',
      'Missing index.html/index.php in the folder (directory listing disabled)',
      'token/JWT expired — the server does not allow access',
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
    solutionEn: `Check Linux permissions:
ls -la /var/www/html/
chmod 755 /var/www/html/
chmod 644 /var/www/html/index.html
chown www-data:www-data /var/www/html/ -R

nginx — check deny/allow rules:
location / {
  allow 192.168.1.0/24;
  deny all;
}

If it is an API: check that the token in the header is valid and not expired`,
    tip: '💡 403 = "Forbidden" — השרת יודע מי את אבל מחליט שאין לך גישה. שונה מ־401 (Unauthorized) שמבקש להתחבר.',
    tipEn: '💡 403 = "Forbidden" — the server knows who you are but says no access. Different from 401 (Unauthorized) which asks you to log in.',
  },
  {
    id: 14,
    icon: '💥',
    title: '500 Internal Server Error',
    titleEn: '500 Internal Server Error',
    category: 'HTTP שגיאות',
    categoryEn: 'HTTP Errors',
    story: 'הכי מפחיד — "500 Internal Server Error". זה לא הבעיה שלך! השרת קרס מבפנים. זה תמיד באג בצד השרת.',
    storyEn: 'The scariest one — "500 Internal Server Error". It is not your problem! The server crashed from inside. It is always a bug on the server side.',
    causes: [
      'קוד Python/PHP/Node.js זרק exception שלא טופל',
      'חיבור ל-database נכשל (DB כבוי, credentials שגויים)',
      'קובץ .env חסר — משתנה סביבה שהקוד מצפה לו',
      'שגיאת syntax בקוד שהועלה לייצור',
      'disk full — השרת לא יכול לכתוב לקבצים',
    ],
    causesEn: [
      'Python/PHP/Node.js code threw an unhandled exception',
      'Database connection failed (DB is off, wrong credentials)',
      'Missing .env file — an environment variable the code needs',
      'Syntax error in code that was deployed to production',
      'Disk full — the server cannot write to files',
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
    solutionEn: `1. Open the server logs right away:
tail -f /var/log/nginx/error.log
tail -f /var/log/apache2/error.log
journalctl -u myapp -f

2. Check application logs:
Python: look for traceback in logs
Node.js: look for console.error in logs

3. Check disk:
df -h → make sure there is no 100% usage

4. Check DB connection:
psql -h localhost -U user -d db`,
    tip: '💡 500 = השרת לא סיפר לך מה הבעיה, אבל היא רשומה ב-logs. תמיד חפשו שם!',
    tipEn: '💡 500 = the server did not tell you the problem, but it is written in the logs. Always look there!',
  },
  {
    id: 15,
    icon: '⏰',
    title: '504 Gateway Timeout',
    titleEn: '504 Gateway Timeout',
    category: 'HTTP שגיאות',
    categoryEn: 'HTTP Errors',
    story: 'nginx מקבל את הבקשה שלך אבל השרת מאחורה לא עונה בזמן. תחשבי על nginx כ"שומר סף" שמחכה לתשובה מהשרת הפנימי.',
    storyEn: 'nginx gets your request but the server behind it does not answer in time. Think of nginx as a "gatekeeper" waiting for a response from the internal server.',
    causes: [
      'שרת ה-application (Python/Node) קפא או עמוס מדי',
      'שאילתת DB כבדה שלוקחת דקות לרוץ',
      'timeout הוגדר קצר מדי ב-nginx (default: 60s)',
      'שרת מאחורי load balancer לא בריא',
    ],
    causesEn: [
      'The application server (Python/Node) froze or is too busy',
      'A heavy DB query that takes minutes to run',
      'Timeout is set too short in nginx (default: 60s)',
      'Server behind load balancer is unhealthy',
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
    solutionEn: `nginx — increase timeout:
proxy_connect_timeout 300;
proxy_read_timeout 300;
proxy_send_timeout 300;

Check that the app is running:
systemctl status myapp
ps aux | grep python

Check DB slow queries:
SHOW PROCESSLIST; (MySQL)
SELECT * FROM pg_stat_activity; (Postgres)`,
    tip: '💡 504 = נגמר הזמן להמתנה. 503 = השרת לא זמין בכלל. 502 = השרת ענה שגיאה ל-proxy.',
    tipEn: '💡 504 = waiting time ran out. 503 = server not available at all. 502 = server sent an error to the proxy.',
  },
  {
    id: 16,
    icon: '🔁',
    title: '301/302 — Redirect Loop אינסופי',
    titleEn: '301/302 — Infinite Redirect Loop',
    category: 'HTTP שגיאות',
    categoryEn: 'HTTP Errors',
    story: '"This page isn\'t redirecting properly" — הדפדפן תקוע בלולאה של redirects. A שולח ל־B ו־B שולח חזרה ל־A, לנצח.',
    storyEn: '"This page isn\'t redirecting properly" — the browser is stuck in a redirect loop. A sends to B and B sends back to A, forever.',
    causes: [
      'HTTPS redirect + HTTP server שניהם מגדירים redirect אחד לשני',
      'www ↔ non-www redirect loop בהגדרות nginx',
      'WordPress: Site URL הוגדר לא נכון ב־DB',
      'CDN מוסיף redirect שמתנגש עם redirect בשרת',
    ],
    causesEn: [
      'HTTPS redirect + HTTP server both set a redirect to each other',
      'www ↔ non-www redirect loop in nginx settings',
      'WordPress: Site URL was set wrong in the DB',
      'CDN adds a redirect that conflicts with the server redirect',
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

WordPress: ב־DB שנו siteurl/home ל-https`,
    solutionEn: `1. Open DevTools → Network → see the redirects
2. Check nginx/apache config — only one side should set a redirect

nginx (correct):
server {
  listen 80;
  return 301 https://$host$request_uri;  # only here!
}
server {
  listen 443 ssl;
  # no redirect here
}

WordPress: in DB change siteurl/home to https`,
    tip: '💡 הדפדפן מרשה מקסימום 20 redirects לפני שהוא מפסיק ומציג שגיאה.',
    tipEn: '💡 The browser allows a maximum of 20 redirects before it stops and shows an error.',
  },
  {
    id: 17,
    icon: '🛡️',
    title: '401 Unauthorized — צריך להתחבר',
    titleEn: '401 Unauthorized — Login Required',
    category: 'HTTP שגיאות',
    categoryEn: 'HTTP Errors',
    story: 'שונה מ־403! 401 = "אני לא יודע מי את — התחברי קודם". 403 = "אני יודע מי את — אבל אסור לך".',
    storyEn: 'Different from 403! 401 = "I do not know who you are — log in first". 403 = "I know who you are — but you are not allowed".',
    causes: [
      'חסר Authorization header בבקשה (Bearer token, Basic auth)',
      'Token JWT פג תוקף (exp field)',
      'API Key שגוי או לא נשלח',
      'Session cookie לא תקף — לא התחברת',
    ],
    causesEn: [
      'Missing Authorization header in the request (Bearer token, Basic auth)',
      'JWT token expired (exp field)',
      'API Key is wrong or not sent',
      'Session cookie is not valid — you did not log in',
    ],
    solution: `בדפדפן: ייתכן שצריך להתחבר לאתר תחילה

ב־API:
curl -H "Authorization: Bearer YOUR_TOKEN" https://api.example.com/data

בדקו expiry ב־JWT:
// פתחו jwt.io ובדקו את ה-exp field
// הוא Unix timestamp — המר עם new Date(exp*1000)

אם token פג: בצעו refresh token flow`,
    solutionEn: `In browser: you may need to log in to the website first

In API:
curl -H "Authorization: Bearer YOUR_TOKEN" https://api.example.com/data

Check expiry in JWT:
// Open jwt.io and check the exp field
// It is a Unix timestamp — convert with new Date(exp*1000)

If token expired: do a refresh token flow`,
    tip: '💡 401 = "Who are you?" | 403 = "I know you, but NO" | 404 = "What you want doesn\'t exist"',
    tipEn: '💡 401 = "Who are you?" | 403 = "I know you, but NO" | 404 = "What you want doesn\'t exist"',
  },
  {
    id: 18,
    icon: '🌀',
    title: 'ERR_CONNECTION_REFUSED — חיבור נדחה',
    titleEn: 'ERR_CONNECTION_REFUSED — Connection Refused',
    category: 'HTTP שגיאות',
    categoryEn: 'HTTP Errors',
    story: 'Chrome מציג "ERR_CONNECTION_REFUSED" — זה אחד הנפוצים בפיתוח. הרבה פעמים פשוט שכחת להריץ את השרת!',
    storyEn: 'Chrome shows "ERR_CONNECTION_REFUSED" — this is one of the most common in development. Often you simply forgot to start the server!',
    causes: [
      'השרת לא רץ בכלל (הכי נפוץ בפיתוח!)',
      'השרת רץ על פורט אחר ממה שהדפדפן מנסה',
      'Firewall חוסם את הפורט',
      'שרת קרס בשקט — process מת',
    ],
    causesEn: [
      'The server is not running at all (most common in development!)',
      'The server runs on a different port than the browser tries',
      'Firewall blocks the port',
      'Server crashed silently — the process died',
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
    solutionEn: `1. Check that the server is running:
ps aux | grep node (or python, php, etc.)
netstat -tlnp | grep 3000

2. Make sure the port is correct:
http://localhost:3000 ← port 3000
http://localhost:8080 ← port 8080

3. Start it again:
npm start / python app.py / etc.

4. Firewall:
sudo ufw allow 3000`,
    tip: '💡 ERR_CONNECTION_REFUSED = אין מי שמאזין על הפורט. ERR_CONNECTION_TIMED_OUT = מישהו שם אבל לא עונה.',
    tipEn: '💡 ERR_CONNECTION_REFUSED = nobody is listening on the port. ERR_CONNECTION_TIMED_OUT = someone is there but not answering.',
  },
  {
    id: 19,
    icon: '🔐',
    title: 'ERR_SSL_PROTOCOL_ERROR — בעיית HTTPS',
    titleEn: 'ERR_SSL_PROTOCOL_ERROR — HTTPS Problem',
    category: 'HTTP שגיאות',
    categoryEn: 'HTTP Errors',
    story: 'מנסה להיכנס לאתר ב־HTTPS ומקבלת שגיאת SSL. הגרסה הנפוצה: תעודת SSL פגה או לא תואמת.',
    storyEn: 'Trying to visit a website with HTTPS and getting an SSL error. The common version: SSL certificate expired or does not match.',
    causes: [
      'תעודת SSL (certificate) פגה — Let\'s Encrypt מתחדשת כל 90 יום',
      'תעודה לדומיין אחר — שרת אחסון מארח כמה אתרים',
      'שעון המחשב שגוי — TLS תלוי בזמן מדויק',
      'גרסת TLS ישנה — שרת ישן שלא תומך ב־TLS 1.3',
      'HSTS — הדפדפן זכר שהאתר צריך HTTPS אבל עכשיו אין',
    ],
    causesEn: [
      'SSL certificate expired — Let\'s Encrypt renews every 90 days',
      'Certificate is for a different domain — hosting server hosts multiple websites',
      'Computer clock is wrong — TLS depends on correct time',
      'Old TLS version — old server that does not support TLS 1.3',
      'HSTS — the browser remembers the site needs HTTPS but now it is gone',
    ],
    solution: `בדיקת תעודה:
openssl s_client -connect example.com:443 -servername example.com

חידוש Let's Encrypt:
certbot renew --dry-run
certbot certonly --webroot -d example.com

שעון:
timedatectl set-ntp true

לניקוי HSTS ב־Chrome:
chrome://net-internals/#hsts → Delete domain`,
    solutionEn: `Check certificate:
openssl s_client -connect example.com:443 -servername example.com

Renew Let's Encrypt:
certbot renew --dry-run
certbot certonly --webroot -d example.com

Fix clock:
timedatectl set-ntp true

Clear HSTS in Chrome:
chrome://net-internals/#hsts → Delete domain`,
    tip: '💡 Let\'s Encrypt חינמי ואוטומטי! הגדירו cronjob: certbot renew ירוץ כל יום ויחדש לפני שיפוג.',
    tipEn: '💡 Let\'s Encrypt is free and automatic! Set up a cronjob: certbot renew runs daily and renews before it expires.',
  },
  {
    id: 20,
    icon: '🔏',
    title: 'Mixed Content — HTTPS עם HTTP בפנים',
    titleEn: 'Mixed Content — HTTPS with HTTP Inside',
    category: 'SSL/אבטחה',
    categoryEn: 'SSL/Security',
    story: 'האתר שלך עובר ל־HTTPS — יופי! אבל Chrome מסמן אזהרה. הסיבה: תמונה, script, או API אחד בתוך העמוד עדיין נקרא ב־HTTP. דפדפן לא אוהב תמונה "לא מאובטחת" בתוך עמוד "מאובטח".',
    storyEn: 'Your website moved to HTTPS — great! But Chrome shows a warning. The reason: an image, script, or API call inside the page still loads over HTTP. The browser does not like an "insecure" image inside a "secure" page.',
    causes: [
      'img src="http://..." — תמונה נטענת ב־HTTP',
      'script src="http://..." — JavaScript חיצוני ב־HTTP',
      'API call ל-http:// מתוך https:// page',
      'iframe שמטעין דף HTTP',
      'CSS background-image עם URL של http://',
    ],
    causesEn: [
      'img src="http://..." — image loads over HTTP',
      'script src="http://..." — external JavaScript over HTTP',
      'API call to http:// from an https:// page',
      'iframe that loads an HTTP page',
      'CSS background-image with an http:// URL',
    ],
    solution: `1. פתחו DevTools → Console — תראו אזהרות Mixed Content
2. DevTools → Network → סננו "mixed" או "blocked"

תיקון:
- שנו כל http:// ל-https:// בקוד
- תמונות: העלו ל־CDN שלכם (HTTPS) או שנו src
- API: ודאו שכל endpoint תומך HTTPS

Nginx — הפניה אוטומטית HTTP→HTTPS:
server {
  listen 80;
  return 301 https://$host$request_uri;
}`,
    solutionEn: `1. Open DevTools → Console — you will see Mixed Content warnings
2. DevTools → Network → filter "mixed" or "blocked"

Fix:
- Change every http:// to https:// in the code
- Images: upload to your CDN (HTTPS) or change src
- API: make sure every endpoint supports HTTPS

Nginx — automatic HTTP→HTTPS redirect:
server {
  listen 80;
  return 301 https://$host$request_uri;
}`,
    tip: '💡 Active Mixed Content (scripts/XHR) חסום לחלוטין. Passive (תמונות) מציג אזהרה בלבד. שניהם חייבים תיקון!',
    tipEn: '💡 Active Mixed Content (scripts/XHR) is fully blocked. Passive (images) shows a warning only. Both must be fixed!',
  },
  {
    id: 21,
    icon: '📜',
    title: 'Certificate Chain Error — שגיאת שרשרת אמון',
    titleEn: 'Certificate Chain Error — Trust Chain Broken',
    category: 'SSL/אבטחה',
    categoryEn: 'SSL/Security',
    story: 'Chrome מציג "NET::ERR_CERT_AUTHORITY_INVALID" גם כשהתעודה חדשה ותקינה. הסיבה הנפוצה: intermediate certificate חסר. ה־TLS handshake נשבר!',
    storyEn: 'Chrome shows "NET::ERR_CERT_AUTHORITY_INVALID" even when the certificate is new and valid. The common reason: intermediate certificate is missing. The TLS handshake breaks!',
    causes: [
      'חסר intermediate certificate בהגדרות nginx/Apache',
      'תעודה self-signed — הדפדפן לא סומך עליה (CA לא ידועה)',
      'Root CA לא מוכרת — נדיר, רק בארגונים עם CA פרטית',
      'תעודה חתומה ל-domain שגוי (Common Name mismatch)',
      'גרסת OpenSSL ישנה שלא מכירה CA חדשות',
    ],
    causesEn: [
      'Missing intermediate certificate in nginx/Apache settings',
      'Self-signed certificate — the browser does not trust it (unknown CA)',
      'Root CA is not recognized — rare, only in organizations with private CA',
      'Certificate is signed for the wrong domain (Common Name mismatch)',
      'Old OpenSSL version that does not recognize new CAs',
    ],
    solution: `בדיקת chain:
openssl s_client -connect example.com:443 -showcerts

בדיקה מקוונת: ssllabs.com/ssltest/

nginx — ציינו fullchain (כולל intermediates):
ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

Let's Encrypt — fullchain.pem כוללת הכל אוטומטית!
self-signed → בארגון: הוסיפו ל-trust store`,
    solutionEn: `Check chain:
openssl s_client -connect example.com:443 -showcerts

Online check: ssllabs.com/ssltest/

nginx — use fullchain (includes intermediates):
ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

Let's Encrypt — fullchain.pem includes everything automatically!
self-signed → in organization: add to trust store`,
    tip: '💡 ssllabs.com/ssltest נותן ציון A-F לאבטחת SSL שלכם. לקבל A+ = הגדירו HSTS + עדכנו cipher list!',
    tipEn: '💡 ssllabs.com/ssltest gives a grade A-F for your SSL security. To get A+ = set up HSTS + update cipher list!',
  },
  {
    id: 22,
    icon: '⏳',
    title: 'HSTS — דפדפן לא נותן להיכנס ב־HTTP',
    titleEn: 'HSTS — Browser Blocks HTTP Access',
    category: 'SSL/אבטחה',
    categoryEn: 'SSL/Security',
    story: 'ניסית להיכנס ל-http://example.com ומופיעה "שגיאת HSTS". הדפדפן בעצמו חסם — גם אם השרת עבד! HSTS אומר "לא, רק HTTPS, אני זוכר".',
    storyEn: 'You tried to visit http://example.com and got an "HSTS error". The browser itself blocked it — even if the server worked! HSTS says "no, only HTTPS, I remember".',
    causes: [
      'האתר שלח Strict-Transport-Security header בעבר',
      'max-age הוגדר ל-שנה/שנתיים — הדפדפן "זוכר" לזמן הזה',
      'האתר עכשיו ב־HTTP בלבד (הורדת SSL) — הדפדפן מסרב',
      'includeSubDomains — כל subdomain חסום גם הוא',
    ],
    causesEn: [
      'The website sent a Strict-Transport-Security header before',
      'max-age was set to 1-2 years — the browser "remembers" for that time',
      'The website is now HTTP only (SSL removed) — the browser refuses',
      'includeSubDomains — every subdomain is also blocked',
    ],
    solution: `ניקוי HSTS ב־Chrome:
1. פתחו chrome://net-internals/#hsts
2. בקטע "Delete domain security policies" הכניסו דומיין
3. לחצו Delete

Firefox: about:config → network.stricttransportsecurity.preloadlist

אם זה dev/test: השתמשו ב-localhost (אין HSTS) או דומיין שונה
ב־Production: לא להוריד HSTS — זה Feature, לא Bug!`,
    solutionEn: `Clear HSTS in Chrome:
1. Open chrome://net-internals/#hsts
2. In "Delete domain security policies" enter the domain
3. Click Delete

Firefox: about:config → network.stricttransportsecurity.preloadlist

If it is dev/test: use localhost (no HSTS) or a different domain
In Production: do not remove HSTS — it is a Feature, not a Bug!`,
    tip: '💡 HSTS Preload List = רשימת אתרים שהדפדפן מכיר "מהמפעל". גוגל, פייסבוק — Chrome לעולם לא ייכנס אליהם ב־HTTP.',
    tipEn: '💡 HSTS Preload List = a list of websites the browser knows "from the factory". Google, Facebook — Chrome will never visit them over HTTP.',
  },
  {
    id: 23,
    icon: '🔑',
    title: 'JWT Token בעיות — Authentication נשבר',
    titleEn: 'JWT Token Problems — Authentication Broken',
    category: 'SSL/אבטחה',
    categoryEn: 'SSL/Security',
    story: 'המשתמש מחובר ופתאום "session expired" אחרי דקה. או: API מחזיר 401 כל הזמן למרות token תקין. JWT הוא נפוץ — ובעיות עם JWT עוד יותר!',
    storyEn: 'The user is logged in and suddenly "session expired" after one minute. Or: API returns 401 all the time even with a valid token. JWT is common — and JWT problems are even more common!',
    causes: [
      'exp (expiry) הוגדר קצר מדי — 15 דקות זה קצר!',
      'Secret key שונה בין server instances (load balancer)',
      'שעונים לא מסונכרנים בין שרתים — nbf/iat לא תואמים',
      'Algorithm mismatch — שרת מצפה RS256, token עם HS256',
      'Token לא נשלח ב-header הנכון',
    ],
    causesEn: [
      'exp (expiry) is set too short — 15 minutes is short!',
      'Secret key is different between server instances (load balancer)',
      'Clocks are not synced between servers — nbf/iat do not match',
      'Algorithm mismatch — server expects RS256, token has HS256',
      'Token is not sent in the correct header',
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
    solutionEn: `Check JWT:
// Open jwt.io — paste the token and see the decoded payload
// exp = Unix timestamp: new Date(exp*1000)

Correct way to send:
Authorization: Bearer eyJhbGc...

Common: refresh token flow:
- Access token: 15 minutes
- Refresh token: 7 days
- Before it expires: renew silently in the background with refresh

Next.js/Express:
const token = jwt.verify(tokenStr, process.env.JWT_SECRET)`,
    tip: '💡 אל תשמרו JWT ב-localStorage! XSS יכול לגנוב אותו. השתמשו ב-httpOnly cookie — JavaScript לא מגיע אליו.',
    tipEn: '💡 Do not store JWT in localStorage! XSS can steal it. Use an httpOnly cookie — JavaScript cannot access it.',
  },
  {
    id: 24,
    icon: '🌐',
    title: 'CORS Error — Cross-Origin נחסם',
    titleEn: 'CORS Error — Cross-Origin Blocked',
    category: 'SSL/אבטחה',
    categoryEn: 'SSL/Security',
    story: 'Frontend ב-localhost:3000 קורא API ב-localhost:8000 ומקבל "CORS Policy blocked". זו הנפוצה ביותר בפיתוח full-stack!',
    storyEn: 'Frontend on localhost:3000 calls API on localhost:8000 and gets "CORS Policy blocked". This is the most common one in full-stack development!',
    causes: [
      'הדפדפן חוסם בקשות מ-origin אחד ל-origin אחר (שמירת אבטחה)',
      'שרת לא שולח Access-Control-Allow-Origin header',
      'Preflight OPTIONS request נכשל',
      'Credentials (cookies) + CORS = הגדרה מיוחדת נדרשת',
      'Production: דומיין שונה מה־API domain',
    ],
    causesEn: [
      'The browser blocks requests from one origin to another (security)',
      'Server does not send Access-Control-Allow-Origin header',
      'Preflight OPTIONS request fails',
      'Credentials (cookies) + CORS = special setup needed',
      'Production: domain is different from the API domain',
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
    solutionEn: `Express (Node.js):
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

With cookies — you also need:
fetch(url, { credentials: 'include' })`,
    tip: '💡 CORS הוא הגנת דפדפן בלבד! ב־Postman/curl לא תראו את השגיאה — כי הם לא דפדפן. השרת לא חוסם, הדפדפן חוסם!',
    tipEn: '💡 CORS is browser protection only! In Postman/curl you will not see the error — because they are not browsers. The server does not block, the browser blocks!',
  },
  {
    id: 25,
    icon: '🛡️',
    title: 'Security Headers חסרים — CSP, X-Frame',
    titleEn: 'Missing Security Headers — CSP, X-Frame',
    category: 'SSL/אבטחה',
    categoryEn: 'SSL/Security',
    story: 'האתר "עובד" — אבל Mozilla Observatory נותן ציון F. כותרות (headers) שמגנים מ־XSS, clickjacking, MIME sniffing — כולם חסרים. תוקפים אוהבים אתרים כאלה.',
    storyEn: 'The website "works" — but Mozilla Observatory gives it a grade F. Headers that protect from XSS, clickjacking, MIME sniffing — all are missing. Attackers love websites like this.',
    causes: [
      'Content-Security-Policy (CSP) חסר — מאפשר XSS injection',
      'X-Frame-Options חסר — מאפשר clickjacking (iframe malicious)',
      'X-Content-Type-Options חסר — מאפשר MIME sniffing attacks',
      'Referrer-Policy לא הוגדר — דולף מידע ל-third parties',
      'Permissions-Policy חסר — כל website יכול לבקש מיקום/מצלמה',
    ],
    causesEn: [
      'Content-Security-Policy (CSP) missing — allows XSS injection',
      'X-Frame-Options missing — allows clickjacking (malicious iframe)',
      'X-Content-Type-Options missing — allows MIME sniffing attacks',
      'Referrer-Policy not set — leaks info to third parties',
      'Permissions-Policy missing — any website can ask for location/camera',
    ],
    solution: `nginx — הוסיפו ל-server block:
add_header X-Frame-Options "SAMEORIGIN";
add_header X-Content-Type-Options "nosniff";
add_header X-XSS-Protection "1; mode=block";
add_header Referrer-Policy "strict-origin-when-cross-origin";
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline';";
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";

בדיקה: observatory.mozilla.org`,
    solutionEn: `nginx — add to server block:
add_header X-Frame-Options "SAMEORIGIN";
add_header X-Content-Type-Options "nosniff";
add_header X-XSS-Protection "1; mode=block";
add_header Referrer-Policy "strict-origin-when-cross-origin";
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline';";
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";

Check: observatory.mozilla.org`,
    tip: '💡 CSP הוא הכי חזק — אומרים לדפדפן "רק scripts מהדומיין שלי". מונע XSS גם אם תוקף הזריק קוד!',
    tipEn: '💡 CSP is the strongest — tells the browser "only scripts from my domain". Prevents XSS even if an attacker injected code!',
  },
  {
    id: 26,
    icon: '🕳️',
    title: 'Packet Loss — חבילות הולכות לאיבוד',
    titleEn: 'Packet Loss — Packets Are Getting Lost',
    category: 'רשת',
    categoryEn: 'Network',
    story: 'שיחת Zoom מתנתקת? Discord קוצץ אודיו? כנראה packet loss.',
    storyEn: 'Zoom call keeps dropping? Discord audio is choppy? Probably packet loss.',
    causes: [
      'כבל רשת פגום — חיבור לא תקין',
      'WiFi interference — הרבה רשתות על אותו channel',
      'ISP תקלה — בעיית routing',
      'Switch/Router עמוס — drops חבילות',
      'כרטיס רשת (network card) ישן',
    ],
    causesEn: [
      'Damaged network cable — bad connection',
      'WiFi interference — many networks on the same channel',
      'ISP issue — routing problem',
      'Switch/Router overloaded — drops packets',
      'Old network card',
    ],
    solution: `1. ping -t 8.8.8.8 — רצי 5 דקות, ספרי כמה % loss
2. פחות מ־1% = נורמלי. יותר מ־3% = בעיה
3. נסו כבל אחר — כבל רשת זול = בעיות
4. ב־Wireshark חפשו TCP Retransmission — סימן ל-loss
5. פנו ל־ISP — ייתכן שיש בעיה בצד שלהם`,
    solutionEn: `1. ping -t 8.8.8.8 — run for 5 minutes, count how many % loss
2. Less than 1% = normal. More than 3% = problem
3. Try a different cable — cheap network cable = problems
4. In Wireshark look for TCP Retransmission — a sign of loss
5. Contact your ISP — there may be a problem on their side`,
    tip: '💡 אפילו 1% packet loss הורס שיחות VoIP ו-gaming. 0% loss = חוויה מושלמת!',
    tipEn: '💡 Even 1% packet loss ruins VoIP calls and gaming. 0% loss = perfect experience!',
  },
  // ===== SSH =====
  {
    id: 27,
    icon: '🔑',
    title: 'SSH — Connection Refused',
    titleEn: 'SSH — Connection Refused',
    category: 'SSH',
    categoryEn: 'SSH',
    story: 'מנסה להתחבר לשרת ומקבל: ssh: connect to host 192.168.1.1 port 22: Connection refused. החיבור נדחה.',
    storyEn: 'Trying to connect to a server and getting: ssh: connect to host 192.168.1.1 port 22: Connection refused.',
    causes: [
      'שירות sshd לא רץ על השרת',
      'SSH מוגדר על פורט אחר (לא 22)',
      'Firewall חוסם פורט 22',
      'השרת כבוי או לא נגיש ברשת',
    ],
    causesEn: [
      'sshd service is not running on the server',
      'SSH is configured on a different port (not 22)',
      'Firewall is blocking port 22',
      'Server is down or not reachable on the network',
    ],
    solution: `1. sudo systemctl status sshd — האם השירות רץ?
2. sudo systemctl start sshd — הפעל אם כבוי
3. cat /etc/ssh/sshd_config | grep Port — בדוק פורט
4. sudo ufw status — בדוק firewall
5. sudo ufw allow 22 — פתח פורט 22
6. ss -tlnp | grep :22 — בדוק שמאזין על פורט 22`,
    solutionEn: `1. sudo systemctl status sshd — is the service running?
2. sudo systemctl start sshd — start if stopped
3. cat /etc/ssh/sshd_config | grep Port — check port
4. sudo ufw status — check firewall
5. sudo ufw allow 22 — open port 22
6. ss -tlnp | grep :22 — verify listening on port 22`,
    tip: '💡 תמיד בדוק: 1) השירות רץ? 2) הפורט פתוח? 3) ה-firewall מרשה? שלושת הבדיקות האלה פותרות 90% מבעיות SSH.',
    tipEn: '💡 Always check: 1) Is the service running? 2) Is the port open? 3) Does the firewall allow it? These 3 checks solve 90% of SSH issues.',
  },
  {
    id: 28,
    icon: '🔐',
    title: 'SSH — Permission Denied (publickey)',
    titleEn: 'SSH — Permission Denied (publickey)',
    category: 'SSH',
    categoryEn: 'SSH',
    story: 'מנסה להתחבר עם מפתח SSH ומקבל: Permission denied (publickey). המפתח לא מזוהה.',
    storyEn: 'Trying to connect with SSH key and getting: Permission denied (publickey). The key is not recognized.',
    causes: [
      'המפתח הציבורי לא נמצא ב-authorized_keys של השרת',
      'הרשאות שגויות על ~/.ssh/ או authorized_keys',
      'משתמש SSH שגוי — מתחברים עם user לא נכון',
      'SSH Agent לא טעון את המפתח',
      'המפתח הפרטי לא תואם לציבורי',
    ],
    causesEn: [
      'Public key not in authorized_keys on the server',
      'Wrong permissions on ~/.ssh/ or authorized_keys',
      'Wrong SSH user — connecting with the wrong username',
      'SSH Agent does not have the key loaded',
      'Private key does not match the public key',
    ],
    solution: `1. ssh -v user@host — verbose mode, מראה איזה מפתח נוסה
2. בשרת: cat ~/.ssh/authorized_keys — המפתח שלך מופיע?
3. ssh-copy-id user@host — מעתיק את המפתח אוטומטית
4. chmod 700 ~/.ssh && chmod 600 ~/.ssh/authorized_keys
5. ssh-add ~/.ssh/id_rsa — טוען מפתח ל-agent
6. ssh-add -l — רשימת מפתחות טעונים`,
    solutionEn: `1. ssh -v user@host — verbose mode, shows which key was tried
2. On server: cat ~/.ssh/authorized_keys — is your key there?
3. ssh-copy-id user@host — copies the key automatically
4. chmod 700 ~/.ssh && chmod 600 ~/.ssh/authorized_keys
5. ssh-add ~/.ssh/id_rsa — load key into agent
6. ssh-add -l — list loaded keys`,
    tip: '💡 SSH מקפיד על הרשאות! אם ~/.ssh הוא 777 — SSH ידחה. חייב 700 לתיקייה, 600 לקבצים.',
    tipEn: '💡 SSH is strict about permissions! If ~/.ssh is 777 — SSH will reject. Must be 700 for dir, 600 for files.',
  },
  {
    id: 29,
    icon: '⚠️',
    title: 'SSH — WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED',
    titleEn: 'SSH — WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED',
    category: 'SSH',
    categoryEn: 'SSH',
    story: 'מנסה SSH ומקבל אזהרה ענקית עם @@@@@@@. נראה מפחיד אבל בדרך כלל לא חמור.',
    storyEn: 'Trying SSH and getting a huge warning with @@@@@@@. Looks scary but usually not serious.',
    causes: [
      'השרת הותקן מחדש — fingerprint השתנה',
      'ה-IP הוקצה למכונה אחרת (cloud, DHCP)',
      'Man-in-the-Middle attack (נדיר אבל אפשרי)',
      'השרת שודרג ויצר מפתח host חדש',
    ],
    causesEn: [
      'Server was reinstalled — fingerprint changed',
      'IP was assigned to a different machine (cloud, DHCP)',
      'Man-in-the-Middle attack (rare but possible)',
      'Server was upgraded and generated new host key',
    ],
    solution: `1. אם את יודעת שהשרת השתנה:
   ssh-keygen -R hostname — מוחק את ה-fingerprint הישן
2. אז מתחברת מחדש: ssh user@host
3. אם לא בטוחה — בדקי fingerprint:
   ssh-keygen -lf /etc/ssh/ssh_host_ed25519_key.pub (בשרת)
4. משווים עם מה ש-SSH מציג`,
    solutionEn: `1. If you know the server changed:
   ssh-keygen -R hostname — removes old fingerprint
2. Then reconnect: ssh user@host
3. If unsure — verify fingerprint:
   ssh-keygen -lf /etc/ssh/ssh_host_ed25519_key.pub (on server)
4. Compare with what SSH shows`,
    tip: '💡 אל תתעלם מאזהרה זו בשרתי production! ב-cloud/lab זה שגרתי, אבל ב-prod זה יכול להיות MITM.',
    tipEn: '💡 Don\'t ignore this warning on production servers! In cloud/lab it\'s routine, but in prod it could be MITM.',
  },
  {
    id: 30,
    icon: '⏱️',
    title: 'SSH — Connection Timed Out',
    titleEn: 'SSH — Connection Timed Out',
    category: 'SSH',
    categoryEn: 'SSH',
    story: 'ssh user@host נתקע, אין תשובה, ואחרי דקה: Connection timed out. השרת לא מגיב בכלל.',
    storyEn: 'ssh user@host hangs, no response, and after a minute: Connection timed out. Server not responding at all.',
    causes: [
      'השרת כבוי או לא מחובר לרשת',
      'IP שגוי — מנסים IP שלא קיים',
      'Firewall (בשרת או ברשת) משמיט חבילות על port 22',
      'Security Group ב-cloud חוסם את ה-IP שלך',
      'בעיית routing — אין נתיב לשרת',
    ],
    causesEn: [
      'Server is down or not connected to the network',
      'Wrong IP — trying an IP that doesn\'t exist',
      'Firewall (on server or network) drops packets on port 22',
      'Cloud Security Group blocking your IP',
      'Routing issue — no route to server',
    ],
    solution: `1. ping host — בדוק אם השרת בכלל נגיש
2. telnet host 22 — בדוק אם port 22 פתוח
3. traceroute host — היכן הנתיב נעצר?
4. ב-AWS/GCP: בדוק Security Group / Firewall Rules
5. nmap -p 22 host — scan port 22
6. ssh -v user@host — verbose לראות איפה נתקע`,
    solutionEn: `1. ping host — check if server is reachable
2. telnet host 22 — check if port 22 is open
3. traceroute host — where does the route stop?
4. In AWS/GCP: check Security Group / Firewall Rules
5. nmap -p 22 host — scan port 22
6. ssh -v user@host — verbose to see where it hangs`,
    tip: '💡 Connection Refused = השרת דוחה. Timed Out = אין תשובה בכלל. ההבדל קריטי לאבחון!',
    tipEn: '💡 Connection Refused = server rejects. Timed Out = no response at all. The difference is critical for diagnosis!',
  },
  // ===== Linux =====
  {
    id: 31,
    icon: '🐧',
    title: 'Permission Denied — אין הרשאה להריץ קובץ',
    titleEn: 'Permission Denied — Cannot Execute File',
    category: 'Linux',
    categoryEn: 'Linux',
    story: 'מנסה להריץ script ומקבל: bash: ./script.sh: Permission denied. הקובץ קיים אבל לא רץ.',
    storyEn: 'Trying to run a script and getting: bash: ./script.sh: Permission denied. File exists but won\'t run.',
    causes: [
      'הקובץ חסר הרשאת execute (x)',
      'מנסים להריץ בלי ./ (צריך נתיב)',
      'filesystem mounted עם noexec',
      'SELinux/AppArmor חוסם',
    ],
    causesEn: [
      'File is missing execute (x) permission',
      'Trying to run without ./ (need path)',
      'Filesystem mounted with noexec',
      'SELinux/AppArmor blocking',
    ],
    solution: `1. ls -la script.sh — בדוק הרשאות
2. chmod +x script.sh — הוסף הרשאת הרצה
3. אם צריך sudo: sudo chmod +x script.sh
4. mount | grep noexec — בדוק noexec
5. bash script.sh — workaround: הרץ דרך bash ישירות`,
    solutionEn: `1. ls -la script.sh — check permissions
2. chmod +x script.sh — add execute permission
3. If need sudo: sudo chmod +x script.sh
4. mount | grep noexec — check noexec
5. bash script.sh — workaround: run through bash directly`,
    tip: '💡 הרשאות ב-Linux: r=קריאה(4), w=כתיבה(2), x=הרצה(1). chmod 755 = rwxr-xr-x.',
    tipEn: '💡 Linux permissions: r=read(4), w=write(2), x=execute(1). chmod 755 = rwxr-xr-x.',
  },
  {
    id: 32,
    icon: '💾',
    title: 'No Space Left on Device — דיסק מלא',
    titleEn: 'No Space Left on Device — Disk Full',
    category: 'Linux',
    categoryEn: 'Linux',
    story: 'לפתע שום דבר לא עובד: אי אפשר לשמור קבצים, שירותים נופלים, docker קורס. הדיסק מלא.',
    storyEn: 'Suddenly nothing works: can\'t save files, services crash, docker breaks. Disk is full.',
    causes: [
      'לוגים תפחו — /var/log מלא',
      'Docker images/volumes תופסים מקום',
      'temp files שלא נוקו',
      'journal מערכת ענק',
    ],
    causesEn: [
      'Logs bloated — /var/log is full',
      'Docker images/volumes taking space',
      'Temp files not cleaned',
      'Huge system journal',
    ],
    solution: `1. df -h — כמה מקום פנוי בכל partition?
2. du -sh /* 2>/dev/null | sort -rh | head — מי תופס הכי הרבה?
3. sudo journalctl --vacuum-size=100M — קצץ journal
4. docker system prune -a — נקה docker (images, containers, volumes)
5. sudo find /var/log -name "*.gz" -delete — מחק לוגים ישנים
6. sudo find /tmp -mtime +7 -delete — מחק temp ישנים`,
    solutionEn: `1. df -h — how much space free on each partition?
2. du -sh /* 2>/dev/null | sort -rh | head — what takes the most?
3. sudo journalctl --vacuum-size=100M — trim journal
4. docker system prune -a — clean docker (images, containers, volumes)
5. sudo find /var/log -name "*.gz" -delete — delete old logs
6. sudo find /tmp -mtime +7 -delete — delete old temp files`,
    tip: '💡 הוסיפו cron job שמנקה לוגים אוטומטית! אחרת זה יקרה שוב.',
    tipEn: '💡 Add a cron job that cleans logs automatically! Otherwise it will happen again.',
  },
  {
    id: 33,
    icon: '🔒',
    title: 'sudo: command not found / user not in sudoers',
    titleEn: 'sudo: command not found / user not in sudoers',
    category: 'Linux',
    categoryEn: 'Linux',
    story: 'מנסה sudo ומקבל: "user is not in the sudoers file. This incident will be reported." 😱',
    storyEn: 'Trying sudo and getting: "user is not in the sudoers file. This incident will be reported." 😱',
    causes: [
      'המשתמש לא נוסף לקבוצת sudo/wheel',
      'sudo לא מותקן (Debian minimal)',
      'שגיאה ב-/etc/sudoers',
    ],
    causesEn: [
      'User not added to sudo/wheel group',
      'sudo not installed (Debian minimal)',
      'Error in /etc/sudoers',
    ],
    solution: `1. su - root — התחבר כ-root
2. usermod -aG sudo username — הוסף לקבוצת sudo
3. או: visudo — ערוך sudoers ידנית
4. הוסף שורה: username ALL=(ALL:ALL) ALL
5. groups username — בדוק שהמשתמש בקבוצה
6. התנתק וחזור (הקבוצה מתעדכנת ב-login)`,
    solutionEn: `1. su - root — switch to root
2. usermod -aG sudo username — add to sudo group
3. Or: visudo — edit sudoers manually
4. Add line: username ALL=(ALL:ALL) ALL
5. groups username — verify user is in the group
6. Logout and back in (group updates on login)`,
    tip: '💡 "This incident will be reported" — ב-Linux ישן הלך לroot. היום רק ללוג ב-/var/log/auth.log.',
    tipEn: '💡 "This incident will be reported" — in old Linux it went to root. Today it just logs to /var/log/auth.log.',
  },
  // ===== Docker =====
  {
    id: 34,
    icon: '🐳',
    title: 'Docker — Cannot connect to the Docker daemon',
    titleEn: 'Docker — Cannot connect to the Docker daemon',
    category: 'Docker',
    categoryEn: 'Docker',
    story: 'מריץ docker ps ומקבל: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?',
    storyEn: 'Running docker ps and getting: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?',
    causes: [
      'Docker daemon לא רץ',
      'המשתמש לא בקבוצת docker — צריך sudo',
      'Docker לא מותקן כראוי',
      'Docker socket חסר הרשאות',
    ],
    causesEn: [
      'Docker daemon is not running',
      'User not in docker group — needs sudo',
      'Docker not properly installed',
      'Docker socket missing permissions',
    ],
    solution: `1. sudo systemctl status docker — בדוק סטטוס
2. sudo systemctl start docker — הפעל
3. sudo usermod -aG docker $USER — הוסף לקבוצת docker
4. newgrp docker — טען קבוצה בלי logout
5. ls -la /var/run/docker.sock — בדוק הרשאות socket
6. sudo docker ps — אם עובד עם sudo = בעיית הרשאות`,
    solutionEn: `1. sudo systemctl status docker — check status
2. sudo systemctl start docker — start it
3. sudo usermod -aG docker $USER — add to docker group
4. newgrp docker — load group without logout
5. ls -la /var/run/docker.sock — check socket permissions
6. sudo docker ps — if works with sudo = permissions issue`,
    tip: '💡 אחרי הוספה לקבוצת docker — חייבים logout/login. newgrp docker זה shortcut.',
    tipEn: '💡 After adding to docker group — must logout/login. newgrp docker is a shortcut.',
  },
  {
    id: 35,
    icon: '🐳',
    title: 'Docker — Port Already Allocated / Address in Use',
    titleEn: 'Docker — Port Already Allocated / Address in Use',
    category: 'Docker',
    categoryEn: 'Docker',
    story: 'מנסה docker run -p 80:80 ומקבל: Bind for 0.0.0.0:80 failed: port is already allocated.',
    storyEn: 'Trying docker run -p 80:80 and getting: Bind for 0.0.0.0:80 failed: port is already allocated.',
    causes: [
      'container אחר כבר תופס את הפורט',
      'שירות מקומי (nginx, apache) רץ על הפורט',
      'container ישן עדיין רץ/נתקע',
    ],
    causesEn: [
      'Another container already using the port',
      'Local service (nginx, apache) running on the port',
      'Old container still running/stuck',
    ],
    solution: `1. docker ps — מי רץ עכשיו?
2. docker ps -a — גם containers שנעצרו
3. ss -tlnp | grep :80 — מי תופס port 80?
4. docker stop <container-id> — עצור container
5. docker rm <container-id> — מחק container נתקע
6. או שנה פורט: docker run -p 8080:80`,
    solutionEn: `1. docker ps — what's running now?
2. docker ps -a — including stopped containers
3. ss -tlnp | grep :80 — who is using port 80?
4. docker stop <container-id> — stop the container
5. docker rm <container-id> — remove stuck container
6. Or change port: docker run -p 8080:80`,
    tip: '💡 docker-compose down עוצר ומנקה הכל. docker-compose stop רק עוצר בלי למחוק.',
    tipEn: '💡 docker-compose down stops and cleans everything. docker-compose stop only stops without removing.',
  },
  // ===== Git =====
  {
    id: 36,
    icon: '🔀',
    title: 'Git — fatal: not a git repository',
    titleEn: 'Git — fatal: not a git repository',
    category: 'Git',
    categoryEn: 'Git',
    story: 'מריץ git status ומקבל: fatal: not a git repository (or any of the parent directories): .git',
    storyEn: 'Running git status and getting: fatal: not a git repository (or any of the parent directories): .git',
    causes: [
      'לא בתיקייה של פרויקט git',
      'תיקיית .git נמחקה בטעות',
      'clone נכשל — לא הושלם',
    ],
    causesEn: [
      'Not in a git project directory',
      'The .git folder was accidentally deleted',
      'Clone failed — wasn\'t completed',
    ],
    solution: `1. pwd — באיזה תיקייה אני?
2. ls -la .git — קיימת?
3. git init — צור repo חדש (אם צריך)
4. cd .. — אולי צריך לעלות תיקייה
5. find / -name ".git" -type d 2>/dev/null — מצא repos`,
    solutionEn: `1. pwd — what directory am I in?
2. ls -la .git — does it exist?
3. git init — create new repo (if needed)
4. cd .. — maybe need to go up a directory
5. find / -name ".git" -type d 2>/dev/null — find repos`,
    tip: '💡 טיפ: git rev-parse --show-toplevel מראה את root התיקייה של הrepo.',
    tipEn: '💡 Tip: git rev-parse --show-toplevel shows the repo root directory.',
  },
  {
    id: 37,
    icon: '🔀',
    title: 'Git Push — rejected / non-fast-forward',
    titleEn: 'Git Push — rejected / non-fast-forward',
    category: 'Git',
    categoryEn: 'Git',
    story: 'מנסה git push ומקבל: rejected — non-fast-forward. מישהו אחר דחף שינויים לפניך.',
    storyEn: 'Trying git push and getting: rejected — non-fast-forward. Someone else pushed changes before you.',
    causes: [
      'הbranch ב-remote מתקדם יותר מהlocal',
      'מישהו אחר דחף commits',
      'עשית rebase/amend על commit שכבר נדחף',
    ],
    causesEn: [
      'Remote branch is ahead of local',
      'Someone else pushed commits',
      'You rebased/amended a commit that was already pushed',
    ],
    solution: `1. git pull --rebase — משלב שינויים ושומר history נקי
2. git pull — merge רגיל (יוצר merge commit)
3. פתרו conflicts אם יש: git add . && git rebase --continue
4. git push — עכשיו אמור לעבוד
5. git push --force-with-lease — רק אם בטוחים (זהירות!)`,
    solutionEn: `1. git pull --rebase — integrates changes, keeps clean history
2. git pull — regular merge (creates merge commit)
3. Resolve conflicts if any: git add . && git rebase --continue
4. git push — should work now
5. git push --force-with-lease — only if sure (careful!)`,
    tip: '💡 לעולם אל תעשו force push ל-main! --force-with-lease בטוח יותר — נכשל אם מישהו דחף אחריך.',
    tipEn: '💡 Never force push to main! --force-with-lease is safer — fails if someone pushed after you.',
  },
  // ===== Firewall / Network =====
  {
    id: 38,
    icon: '🛡️',
    title: 'UFW / iptables — שירות לא נגיש מבחוץ',
    titleEn: 'UFW / iptables — Service Not Accessible From Outside',
    category: 'Firewall',
    categoryEn: 'Firewall',
    story: 'השירות רץ, curl localhost:8080 עובד, אבל מבחוץ — אי אפשר להגיע. Firewall.',
    storyEn: 'Service is running, curl localhost:8080 works, but from outside — can\'t reach it. Firewall.',
    causes: [
      'UFW/iptables חוסם את הפורט',
      'השירות מאזין רק על 127.0.0.1 (לא 0.0.0.0)',
      'Security Group ב-cloud חוסם',
      'NAT/Router לא מעביר את הפורט',
    ],
    causesEn: [
      'UFW/iptables blocking the port',
      'Service listening only on 127.0.0.1 (not 0.0.0.0)',
      'Cloud Security Group blocking',
      'NAT/Router not forwarding the port',
    ],
    solution: `1. ss -tlnp | grep 8080 — על מה מאזין? 0.0.0.0 או 127.0.0.1?
2. sudo ufw allow 8080 — פתח בfirewall
3. sudo iptables -L -n | grep 8080 — בדוק iptables
4. שנה bind address ל-0.0.0.0 בהגדרות השירות
5. ב-cloud: בדוק Security Group inbound rules
6. curl http://<your-ip>:8080 ממכונה אחרת — בדוק`,
    solutionEn: `1. ss -tlnp | grep 8080 — listening on what? 0.0.0.0 or 127.0.0.1?
2. sudo ufw allow 8080 — open in firewall
3. sudo iptables -L -n | grep 8080 — check iptables
4. Change bind address to 0.0.0.0 in service config
5. In cloud: check Security Group inbound rules
6. curl http://<your-ip>:8080 from another machine — verify`,
    tip: '💡 127.0.0.1 = רק מקומי. 0.0.0.0 = מכל כתובת. ההבדל הזה הוא 80% מבעיות "לא נגיש מבחוץ".',
    tipEn: '💡 127.0.0.1 = local only. 0.0.0.0 = from any address. This difference is 80% of "not accessible from outside" issues.',
  },
  {
    id: 39,
    icon: '📛',
    title: 'DNS — Name or service not known',
    titleEn: 'DNS — Name or service not known',
    category: 'DNS',
    categoryEn: 'DNS',
    story: 'מנסה curl או ping לדומיין ומקבל: Could not resolve host / Name or service not known.',
    storyEn: 'Trying curl or ping to a domain and getting: Could not resolve host / Name or service not known.',
    causes: [
      'DNS server לא מגיב',
      'שם הדומיין שגוי (typo)',
      '/etc/resolv.conf ריק או שבור',
      'VPN/proxy מפריע ל-DNS',
      'הדומיין באמת לא קיים',
    ],
    causesEn: [
      'DNS server not responding',
      'Domain name is wrong (typo)',
      '/etc/resolv.conf is empty or broken',
      'VPN/proxy interfering with DNS',
      'The domain genuinely doesn\'t exist',
    ],
    solution: `1. nslookup google.com — DNS עובד בכלל?
2. cat /etc/resolv.conf — מה ה-nameserver?
3. echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf
4. dig domain.com — מידע מפורט
5. ping 8.8.8.8 — אם עובד: בעיית DNS. אם לא: בעיית רשת.
6. systemd-resolve --flush-caches — נקה DNS cache`,
    solutionEn: `1. nslookup google.com — does DNS work at all?
2. cat /etc/resolv.conf — what's the nameserver?
3. echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf
4. dig domain.com — detailed info
5. ping 8.8.8.8 — if works: DNS issue. If not: network issue.
6. systemd-resolve --flush-caches — clear DNS cache`,
    tip: '💡 טריק מהיר: אם ping 8.8.8.8 עובד אבל ping google.com לא — 100% בעיית DNS.',
    tipEn: '💡 Quick trick: if ping 8.8.8.8 works but ping google.com doesn\'t — 100% DNS issue.',
  },
  // ===== Networking — Student Level =====
  {
    id: 40,
    icon: '🔌',
    title: 'Network Unreachable — אין נתיב לרשת',
    titleEn: 'Network Unreachable — No Route to Network',
    category: 'רשת',
    categoryEn: 'Network',
    story: 'מנסה ping או ssh ומקבל: Network is unreachable. המחשב שלך לא יודע לאן לשלוח את החבילה.',
    storyEn: 'Trying ping or ssh and getting: Network is unreachable. Your computer doesn\'t know where to send the packet.',
    causes: [
      'אין default gateway מוגדר',
      'כבל רשת לא מחובר',
      'כרטיס הרשת כבוי (interface down)',
      'DHCP לא נתן כתובת IP',
      'טבלת routing ריקה או שגויה',
    ],
    causesEn: [
      'No default gateway configured',
      'Network cable not connected',
      'Network interface is down',
      'DHCP did not assign an IP address',
      'Routing table empty or incorrect',
    ],
    solution: `1. ip addr show — יש כתובת IP? או 169.254.x.x?
2. ip route show — יש default gateway?
3. sudo ip link set eth0 up — הפעל interface
4. sudo dhclient eth0 — בקש IP מ-DHCP
5. sudo ip route add default via 192.168.1.1 — הוסף gateway ידנית
6. nmcli device status — סטטוס כל ה-interfaces`,
    solutionEn: `1. ip addr show — do you have an IP? or 169.254.x.x?
2. ip route show — is there a default gateway?
3. sudo ip link set eth0 up — bring interface up
4. sudo dhclient eth0 — request IP from DHCP
5. sudo ip route add default via 192.168.1.1 — add gateway manually
6. nmcli device status — status of all interfaces`,
    tip: '💡 Network Unreachable = בעיה בשכבה 3 (IP/Routing). Host Unreachable = המחשב היעד לא מגיב.',
    tipEn: '💡 Network Unreachable = Layer 3 problem (IP/Routing). Host Unreachable = destination not responding.',
  },
  {
    id: 41,
    icon: '🏠',
    title: 'IP 169.254.x.x — כתובת APIPA מוזרה',
    titleEn: 'IP 169.254.x.x — Strange APIPA Address',
    category: 'DHCP',
    categoryEn: 'DHCP',
    story: 'בודק IP ורואה 169.254.x.x. מה זה? למה אין לי כתובת נורמלית?',
    storyEn: 'Checking IP and seeing 169.254.x.x. What is this? Why don\'t I have a normal address?',
    causes: [
      'DHCP server לא מגיב — אין מי שייתן IP',
      'כבל רשת מנותק או פגום',
      'שרת DHCP קרס או מלא (pool exhausted)',
      'VLAN שגוי — לא מגיע ל-DHCP',
    ],
    causesEn: [
      'DHCP server not responding — nobody to give an IP',
      'Network cable disconnected or damaged',
      'DHCP server crashed or pool exhausted',
      'Wrong VLAN — can\'t reach DHCP',
    ],
    solution: `1. ipconfig /release && ipconfig /renew (Windows)
2. sudo dhclient -r && sudo dhclient eth0 (Linux)
3. בדוק כבל — החלף ונסה שוב
4. ping 192.168.1.1 — הrouter בכלל נגיש?
5. בדוק ב-router: DHCP server מופעל? יש כתובות פנויות ב-pool?
6. sudo systemctl restart NetworkManager`,
    solutionEn: `1. ipconfig /release && ipconfig /renew (Windows)
2. sudo dhclient -r && sudo dhclient eth0 (Linux)
3. Check cable — swap and try again
4. ping 192.168.1.1 — is the router reachable?
5. Check router: DHCP server enabled? Free addresses in pool?
6. sudo systemctl restart NetworkManager`,
    tip: '💡 169.254.x.x = APIPA (Automatic Private IP Addressing). המחשב "ממציא" IP כי אף אחד לא נתן לו. זה סימן ש-DHCP לא עובד.',
    tipEn: '💡 169.254.x.x = APIPA (Automatic Private IP Addressing). The computer "invents" an IP because nobody gave it one. It means DHCP is not working.',
  },
  {
    id: 42,
    icon: '🔄',
    title: 'ARP — Duplicate IP Address Detected',
    titleEn: 'ARP — Duplicate IP Address Detected',
    category: 'רשת',
    categoryEn: 'Network',
    story: 'פתאום האינטרנט מתנתק ומתחבר. בודק event log ורואה: "IP address conflict". שני מחשבים עם אותו IP!',
    storyEn: 'Internet keeps disconnecting and reconnecting. Check event log and see: "IP address conflict". Two computers with the same IP!',
    causes: [
      'שני מכשירים הוגדרו ידנית עם אותו IP סטטי',
      'DHCP server חילק IP שכבר תפוס ידנית',
      'מכונה וירטואלית שכפלה את ה-IP של ה-host',
      'מכשיר ישן חזר לרשת עם IP ישן',
    ],
    causesEn: [
      'Two devices manually set to the same static IP',
      'DHCP server gave out an IP already in static use',
      'Virtual machine duplicated the host\'s IP',
      'Old device rejoined network with stale IP',
    ],
    solution: `1. arp -a — מי עוד ברשת? חפש MAC כפול
2. nmap -sn 192.168.1.0/24 — סרוק כל הרשת
3. arping -D 192.168.1.100 — בדוק אם IP ספציפי כפול
4. שנה IP סטטי לאחד שלא תפוס
5. ב-DHCP: הגדר reservation ל-MAC שצריך IP קבוע
6. ב-DHCP: וודא ש-pool לא חופף ל-static range`,
    solutionEn: `1. arp -a — who else is on the network? Look for duplicate MAC
2. nmap -sn 192.168.1.0/24 — scan the whole network
3. arping -D 192.168.1.100 — check if specific IP is duplicated
4. Change static IP to one that's not taken
5. In DHCP: set reservation for MAC that needs a fixed IP
6. In DHCP: ensure pool doesn't overlap with static range`,
    tip: '💡 כלל זהב: אם משתמשים ב-DHCP — אל תגדירו IP סטטי בטווח של ה-DHCP pool!',
    tipEn: '💡 Golden rule: if using DHCP — don\'t set a static IP in the DHCP pool range!',
  },
  {
    id: 43,
    icon: '🌍',
    title: 'traceroute — שלוש כוכביות * * *',
    titleEn: 'traceroute — Three Stars * * *',
    category: 'רשת',
    categoryEn: 'Network',
    story: 'מריץ traceroute ורואה * * * בשורות. מה זה אומר? איפה הבעיה?',
    storyEn: 'Running traceroute and seeing * * * on lines. What does it mean? Where\'s the problem?',
    causes: [
      'Router בדרך חוסם ICMP (נורמלי — הרבה routers עושים את זה)',
      'Firewall מסנן traceroute/UDP',
      'הנתיב נחסם — traffic נעצר',
      'TTL expired וה-router לא שולח תשובה',
    ],
    causesEn: [
      'Router along the way blocks ICMP (normal — many routers do this)',
      'Firewall filtering traceroute/UDP',
      'Path is blocked — traffic stops',
      'TTL expired and router doesn\'t send a reply',
    ],
    solution: `1. * * * באמצע אבל ממשיך אח"כ? = router שחוסם ICMP. נורמלי!
2. * * * מנקודה מסוימת ולא חוזר? = שם הנתיב נחסם
3. traceroute -T host — שימוש ב-TCP במקום UDP
4. traceroute -I host — שימוש ב-ICMP
5. mtr host — traceroute + ping רציף — יותר מדויק
6. pathping host (Windows) — אנליזה מפורטת`,
    solutionEn: `1. * * * in the middle but continues after? = router blocking ICMP. Normal!
2. * * * from a certain point and doesn't return? = path is blocked there
3. traceroute -T host — use TCP instead of UDP
4. traceroute -I host — use ICMP
5. mtr host — continuous traceroute + ping — more accurate
6. pathping host (Windows) — detailed analysis`,
    tip: '💡 mtr (My TraceRoute) הוא הכלי הכי טוב — משלב traceroute + ping רציף ומראה % loss בכל hop.',
    tipEn: '💡 mtr (My TraceRoute) is the best tool — combines traceroute + continuous ping and shows % loss at each hop.',
  },
  {
    id: 44,
    icon: '📡',
    title: 'Wireshark — No Interfaces Found / Permission Denied',
    titleEn: 'Wireshark — No Interfaces Found / Permission Denied',
    category: 'כלים',
    categoryEn: 'Tools',
    story: 'פותח Wireshark ואין interfaces לבחור. או מקבל permission denied. לא יכול לצפות בתעבורה.',
    storyEn: 'Opening Wireshark and there are no interfaces to choose. Or getting permission denied. Can\'t capture traffic.',
    causes: [
      'חסרות הרשאות — צריך sudo או קבוצת wireshark',
      'dumpcap לא מותקן או חסר capabilities',
      'VM בלי network adapter פעיל',
      'Windows: Npcap לא מותקן',
    ],
    causesEn: [
      'Missing permissions — need sudo or wireshark group',
      'dumpcap not installed or missing capabilities',
      'VM without active network adapter',
      'Windows: Npcap not installed',
    ],
    solution: `Linux:
1. sudo usermod -aG wireshark $USER — הוסף לקבוצה
2. sudo chmod +x /usr/bin/dumpcap
3. sudo setcap cap_net_raw+eip /usr/bin/dumpcap
4. logout/login — לטעון קבוצה חדשה
5. sudo wireshark — workaround (לא מומלץ תמידית)

Windows:
1. התקן/עדכן Npcap מ-npcap.com
2. הרץ Wireshark כ-Administrator`,
    solutionEn: `Linux:
1. sudo usermod -aG wireshark $USER — add to group
2. sudo chmod +x /usr/bin/dumpcap
3. sudo setcap cap_net_raw+eip /usr/bin/dumpcap
4. logout/login — load new group
5. sudo wireshark — workaround (not recommended permanently)

Windows:
1. Install/update Npcap from npcap.com
2. Run Wireshark as Administrator`,
    tip: '💡 ב-Linux: tcpdump -i eth0 עובד עם sudo ולא צריך GUI. מעולה לשרתים.',
    tipEn: '💡 On Linux: tcpdump -i eth0 works with sudo and doesn\'t need a GUI. Great for servers.',
  },
  {
    id: 45,
    icon: '🔐',
    title: 'HTTPS — NET::ERR_CERT_AUTHORITY_INVALID',
    titleEn: 'HTTPS — NET::ERR_CERT_AUTHORITY_INVALID',
    category: 'SSL/אבטחה',
    categoryEn: 'SSL/Security',
    story: 'נכנס לאתר ומקבל מסך אדום: "Your connection is not private". דפדפן לא סומך על התעודה.',
    storyEn: 'Visiting a site and getting a red screen: "Your connection is not private". Browser doesn\'t trust the certificate.',
    causes: [
      'תעודת SSL חתומה עצמית (self-signed)',
      'ה-CA שחתם לא מוכר למחשב',
      'שרשרת תעודות חלקית — חסר intermediate certificate',
      'התעודה פגת תוקף (expired)',
      'השעון במחשב שגוי — גורם לתעודה להיראות פגה',
    ],
    causesEn: [
      'Self-signed SSL certificate',
      'The signing CA is not trusted by the computer',
      'Incomplete certificate chain — missing intermediate certificate',
      'Certificate has expired',
      'Computer clock is wrong — makes certificate look expired',
    ],
    solution: `1. לחץ על 🔒 בדפדפן → Certificate → בדוק תוקף ו-CA
2. openssl s_client -connect host:443 — בדוק שרשרת
3. בדוק שעון: date — שעה נכונה?
4. Self-signed בלימודים? → Advanced → Proceed (לא ב-production!)
5. Let's Encrypt — תעודה חינמית: sudo certbot --nginx
6. curl -vI https://host — מידע מפורט על התעודה`,
    solutionEn: `1. Click 🔒 in browser → Certificate → check validity and CA
2. openssl s_client -connect host:443 — check chain
3. Check clock: date — correct time?
4. Self-signed in lab? → Advanced → Proceed (not in production!)
5. Let's Encrypt — free certificate: sudo certbot --nginx
6. curl -vI https://host — detailed certificate info`,
    tip: '💡 בלימודים זה בדרך כלל self-signed cert. ב-production — תמיד Let\'s Encrypt (חינם!) או CA מוכר.',
    tipEn: '💡 In learning environments it\'s usually a self-signed cert. In production — always Let\'s Encrypt (free!) or a trusted CA.',
  },
  {
    id: 46,
    icon: '🔧',
    title: 'netcat/nmap — Connection Refused vs Filtered vs Open',
    titleEn: 'netcat/nmap — Connection Refused vs Filtered vs Open',
    category: 'כלים',
    categoryEn: 'Tools',
    story: 'סורק פורטים ומקבל סטטוסים שונים: open, closed, filtered. מה ההבדל?',
    storyEn: 'Scanning ports and getting different statuses: open, closed, filtered. What\'s the difference?',
    causes: [
      'Open — שירות מאזין ומגיב. הפורט פעיל.',
      'Closed — אין שירות, אבל ה-OS שולח RST. הפורט נגיש אבל ריק.',
      'Filtered — firewall משמיט חבילות. אין תשובה בכלל.',
    ],
    causesEn: [
      'Open — service is listening and responding. Port is active.',
      'Closed — no service, but OS sends RST. Port is reachable but empty.',
      'Filtered — firewall drops packets. No response at all.',
    ],
    solution: `1. nmap -p 22 host — סרוק פורט ספציפי
2. nmap -p 1-1000 host — סרוק טווח
3. nc -zv host 22 — בדוק אם פורט פתוח
4. nc -zv host 80 443 — בדוק כמה פורטים
5. nmap -sV -p 22 host — גלה מה השירות + גרסה
6. ss -tlnp (בשרת) — מה מאזין מקומית?`,
    solutionEn: `1. nmap -p 22 host — scan specific port
2. nmap -p 1-1000 host — scan range
3. nc -zv host 22 — check if port is open
4. nc -zv host 80 443 — check multiple ports
5. nmap -sV -p 22 host — detect service + version
6. ss -tlnp (on server) — what's listening locally?`,
    tip: '💡 Closed = המחשב שם, הפורט סגור. Filtered = Firewall בדרך. ההבדל עוזר לדעת אם הבעיה בשרת או ברשת.',
    tipEn: '💡 Closed = machine is there, port is closed. Filtered = Firewall in the way. The difference tells you if the issue is the server or the network.',
  },
  {
    id: 47,
    icon: '🖥️',
    title: 'Python — ModuleNotFoundError / pip not found',
    titleEn: 'Python — ModuleNotFoundError / pip not found',
    category: 'תכנות',
    categoryEn: 'Programming',
    story: 'מריץ script Python ומקבל: ModuleNotFoundError: No module named \'requests\'. או pip: command not found.',
    storyEn: 'Running a Python script and getting: ModuleNotFoundError: No module named \'requests\'. Or pip: command not found.',
    causes: [
      'החבילה לא מותקנת',
      'מותקנת ב-Python אחר (python2 vs python3)',
      'pip מתקין ל-Python אחר מזה שמריץ',
      'virtualenv — לא הפעלת את הסביבה',
      'pip לא מותקן',
    ],
    causesEn: [
      'Package not installed',
      'Installed in a different Python (python2 vs python3)',
      'pip installs to a different Python than the one running',
      'virtualenv — didn\'t activate the environment',
      'pip not installed',
    ],
    solution: `1. which python3 && which pip3 — לאן מצביעים?
2. python3 -m pip install requests — מתקין בpython3 הנכון
3. pip3 install requests — אם pip3 זמין
4. python3 -m venv venv && source venv/bin/activate — צור venv
5. sudo apt install python3-pip — התקן pip
6. pip list | grep requests — בדוק אם מותקן`,
    solutionEn: `1. which python3 && which pip3 — where do they point?
2. python3 -m pip install requests — installs in the correct python3
3. pip3 install requests — if pip3 is available
4. python3 -m venv venv && source venv/bin/activate — create venv
5. sudo apt install python3-pip — install pip
6. pip list | grep requests — check if installed`,
    tip: '💡 תמיד השתמשו ב-python3 -m pip במקום pip. זה מבטיח שמתקינים ל-Python הנכון.',
    tipEn: '💡 Always use python3 -m pip instead of pip. This ensures you install to the correct Python.',
  },
  {
    id: 48,
    icon: '🌐',
    title: 'Subnet Mismatch — מחשבים באותה רשת לא מדברים',
    titleEn: 'Subnet Mismatch — Devices on Same Network Can\'t Communicate',
    category: 'רשת',
    categoryEn: 'Network',
    story: 'שני מחשבים מחוברים לאותו switch אבל לא יכולים לעשות ping אחד לשני. מה קורה?',
    storyEn: 'Two computers connected to the same switch but can\'t ping each other. What\'s happening?',
    causes: [
      'Subnet mask שונה — מחשב אחד חושב שהשני ברשת אחרת',
      'IP-ים מרשתות שונות (192.168.1.x vs 192.168.2.x)',
      'VLAN שונה ב-switch',
      'Windows Firewall חוסם ICMP',
    ],
    causesEn: [
      'Different subnet mask — one computer thinks the other is on a different network',
      'IPs from different networks (192.168.1.x vs 192.168.2.x)',
      'Different VLAN on the switch',
      'Windows Firewall blocking ICMP',
    ],
    solution: `1. ip addr show (Linux) / ipconfig (Windows) — בדוק IP + mask
2. שני המחשבים צריכים אותו subnet:
   מחשב A: 192.168.1.10/24
   מחשב B: 192.168.1.20/24
3. אם mask שונה (אחד /24, אחד /16) — תתקן!
4. Windows: netsh advfirewall set allprofiles firewallpolicy allow
5. arping 192.168.1.20 — בדוק תקשורת L2`,
    solutionEn: `1. ip addr show (Linux) / ipconfig (Windows) — check IP + mask
2. Both computers need the same subnet:
   Computer A: 192.168.1.10/24
   Computer B: 192.168.1.20/24
3. If mask differs (one /24, one /16) — fix it!
4. Windows: netsh advfirewall set allprofiles firewallpolicy allow
5. arping 192.168.1.20 — check L2 communication`,
    tip: '💡 /24 = 255.255.255.0 = 254 hosts. /16 = 255.255.0.0 = 65,534 hosts. Subnet mask קובע מי "באותה רשת".',
    tipEn: '💡 /24 = 255.255.255.0 = 254 hosts. /16 = 255.255.0.0 = 65,534 hosts. Subnet mask determines who is "on the same network".',
  },
  {
    id: 49,
    icon: '🔥',
    title: 'iptables — Chain INPUT policy DROP / כלום לא עובד',
    titleEn: 'iptables — Chain INPUT policy DROP / Nothing Works',
    category: 'Firewall',
    categoryEn: 'Firewall',
    story: 'הרצת פקודת iptables ופתאום הכל מת — SSH, web, הכל. נעלת את עצמך בחוץ.',
    storyEn: 'Ran an iptables command and suddenly everything died — SSH, web, everything. You locked yourself out.',
    causes: [
      'הפעלת DROP policy בלי להוסיף ACCEPT rules קודם',
      'flush (iptables -F) מחק rules אבל policy נשאר DROP',
      'טעות בסדר ה-rules — DROP לפני ACCEPT',
    ],
    causesEn: [
      'Set DROP policy without adding ACCEPT rules first',
      'Flush (iptables -F) deleted rules but policy stayed DROP',
      'Wrong rule order — DROP before ACCEPT',
    ],
    solution: `אם עדיין מחובר:
1. sudo iptables -P INPUT ACCEPT — חזור ל-ACCEPT מיידית!
2. sudo iptables -F — נקה כל ה-rules
3. עכשיו הוסף rules בזהירות:
   sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
   sudo iptables -A INPUT -m state --state ESTABLISHED -j ACCEPT
4. רק אז: sudo iptables -P INPUT DROP

אם ננעלת:
5. גישה פיזית / console / cloud console
6. reboot — iptables rules לא נשמרים אחרי restart (אלא אם שמרת)`,
    solutionEn: `If still connected:
1. sudo iptables -P INPUT ACCEPT — revert to ACCEPT immediately!
2. sudo iptables -F — flush all rules
3. Now add rules carefully:
   sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
   sudo iptables -A INPUT -m state --state ESTABLISHED -j ACCEPT
4. Only then: sudo iptables -P INPUT DROP

If locked out:
5. Physical access / console / cloud console
6. Reboot — iptables rules don't survive restart (unless saved)`,
    tip: '💡 לפני שמשנים iptables: at now + 5 minutes <<< "iptables -P INPUT ACCEPT" — ביטוח אוטומטי!',
    tipEn: '💡 Before changing iptables: at now + 5 minutes <<< "iptables -P INPUT ACCEPT" — automatic insurance!',
  },
  {
    id: 50,
    icon: '📝',
    title: 'nano/vim — קובץ Readonly / Cannot Write',
    titleEn: 'nano/vim — File Readonly / Cannot Write',
    category: 'Linux',
    categoryEn: 'Linux',
    story: 'עורך קובץ ב-nano או vim ולא מצליח לשמור: "File is read only" או "Permission denied".',
    storyEn: 'Editing a file in nano or vim and can\'t save: "File is read only" or "Permission denied".',
    causes: [
      'הקובץ שייך ל-root ואת משתמש רגיל',
      'הקובץ ב-filesystem readonly',
      'vim נפתח בלי sudo',
      'חסר הרשאת כתיבה (w)',
    ],
    causesEn: [
      'File owned by root and you are a regular user',
      'File on a readonly filesystem',
      'vim opened without sudo',
      'Missing write (w) permission',
    ],
    solution: `1. ls -la filename — בדוק בעלות והרשאות
2. sudo nano filename — פתח עם הרשאות
3. ב-vim כבר פתוח: :w !sudo tee % — שמור עם sudo בלי לצאת!
4. sudo chmod u+w filename — הוסף הרשאת כתיבה
5. sudo chown $USER filename — שנה בעלות
6. mount | grep "ro," — בדוק filesystem readonly`,
    solutionEn: `1. ls -la filename — check ownership and permissions
2. sudo nano filename — open with permissions
3. In vim already open: :w !sudo tee % — save with sudo without quitting!
4. sudo chmod u+w filename — add write permission
5. sudo chown $USER filename — change ownership
6. mount | grep "ro," — check filesystem readonly`,
    tip: '💡 הטריק הכי שימושי ב-vim: :w !sudo tee % — שומר קובץ של root בלי לסגור ולפתוח מחדש!',
    tipEn: '💡 Most useful vim trick: :w !sudo tee % — saves a root file without closing and reopening!',
  },
  {
    id: 51,
    icon: '🔗',
    title: 'curl — Could Not Resolve Host / Connection Timed Out',
    titleEn: 'curl — Could Not Resolve Host / Connection Timed Out',
    category: 'HTTP/אבטחה',
    categoryEn: 'HTTP/Security',
    story: 'מנסה curl לAPI או אתר ומקבל שגיאה. curl הוא הכלי הראשון לדיבוג HTTP.',
    storyEn: 'Trying curl to an API or website and getting an error. curl is the first tool for debugging HTTP.',
    causes: [
      'Could not resolve host = בעיית DNS',
      'Connection timed out = שרת לא נגיש / firewall',
      'Connection refused = שרת דוחה / שירות לא רץ',
      'SSL certificate problem = תעודה לא תקינה',
    ],
    causesEn: [
      'Could not resolve host = DNS issue',
      'Connection timed out = server unreachable / firewall',
      'Connection refused = server rejects / service not running',
      'SSL certificate problem = invalid certificate',
    ],
    solution: `1. curl -v https://host — verbose! מראה כל שלב
2. curl -I https://host — headers בלבד (בדיקה מהירה)
3. curl -k https://host — דלג על בדיקת SSL (lab בלבד!)
4. curl --connect-timeout 5 host — timeout מוגדר
5. curl -o /dev/null -s -w "%{http_code}" host — רק status code
6. curl -x http://proxy:8080 host — דרך proxy`,
    solutionEn: `1. curl -v https://host — verbose! shows every step
2. curl -I https://host — headers only (quick check)
3. curl -k https://host — skip SSL check (lab only!)
4. curl --connect-timeout 5 host — set timeout
5. curl -o /dev/null -s -w "%{http_code}" host — just status code
6. curl -x http://proxy:8080 host — through a proxy`,
    tip: '💡 curl -v הוא הכלי הכי חשוב לדיבוג רשת. הוא מראה DNS → TCP → TLS → HTTP בפירוט.',
    tipEn: '💡 curl -v is the most important tool for network debugging. It shows DNS → TCP → TLS → HTTP in detail.',
  },
  {
    id: 52,
    icon: '🖧',
    title: 'VirtualBox/VMware — VM No Network / Host-Only לא עובד',
    titleEn: 'VirtualBox/VMware — VM No Network / Host-Only Not Working',
    category: 'רשת',
    categoryEn: 'Network',
    story: 'VM שהרמת לא מצליח להתחבר לאינטרנט, או שלא מצליח לדבר עם ה-host.',
    storyEn: 'VM you set up can\'t connect to the internet, or can\'t communicate with the host.',
    causes: [
      'Network adapter לא מופעל ב-VM settings',
      'מצב NAT לא מגיע לרשת החיצונית',
      'Host-Only adapter לא קיים או כבוי',
      'DHCP של VirtualBox/VMware לא מופעל',
      'Bridged adapter על WiFi לא תמיד עובד',
    ],
    causesEn: [
      'Network adapter not enabled in VM settings',
      'NAT mode not reaching external network',
      'Host-Only adapter doesn\'t exist or is disabled',
      'VirtualBox/VMware DHCP not enabled',
      'Bridged adapter on WiFi doesn\'t always work',
    ],
    solution: `VirtualBox:
1. Settings → Network → Adapter 1: NAT (אינטרנט)
2. Adapter 2: Host-Only (תקשורת עם host)
3. File → Host Network Manager → צור adapter + הפעל DHCP

VMware:
4. VM Settings → Network Adapter → NAT / Bridged / Host-Only
5. Edit → Virtual Network Editor → בדוק הגדרות

בVM:
6. ip addr show — יש IP?
7. sudo dhclient enp0s3 — בקש IP`,
    solutionEn: `VirtualBox:
1. Settings → Network → Adapter 1: NAT (internet)
2. Adapter 2: Host-Only (communicate with host)
3. File → Host Network Manager → create adapter + enable DHCP

VMware:
4. VM Settings → Network Adapter → NAT / Bridged / Host-Only
5. Edit → Virtual Network Editor → check settings

In VM:
6. ip addr show — do you have an IP?
7. sudo dhclient enp0s3 — request IP`,
    tip: '💡 NAT = אינטרנט בלבד (VM → חוץ). Host-Only = host ↔ VM. Bridged = VM כמכונה ברשת. שלבו NAT + Host-Only לשניהם!',
    tipEn: '💡 NAT = internet only (VM → out). Host-Only = host ↔ VM. Bridged = VM as a machine on the network. Combine NAT + Host-Only for both!',
  },
  // ===== SSH — more =====
  {
    id: 53,
    icon: '🔑',
    title: 'ssh-keygen -R — מתי ואיך להשתמש',
    titleEn: 'ssh-keygen -R — When and How to Use',
    category: 'SSH',
    categoryEn: 'SSH',
    story: 'אחרי אזהרת REMOTE HOST IDENTIFICATION HAS CHANGED, או אחרי התקנה מחדש של שרת — צריך למחוק את ה-fingerprint הישן.',
    storyEn: 'After a REMOTE HOST IDENTIFICATION HAS CHANGED warning, or after reinstalling a server — you need to remove the old fingerprint.',
    causes: [
      'שרת הותקן מחדש וקיבל מפתח host חדש',
      'ה-IP הועבר למכונה אחרת (cloud)',
      'שדרוג שרת שינה את מפתחות ה-SSH',
      'בwifi ציבורי עם captive portal שמחליף fingerprint',
    ],
    causesEn: [
      'Server was reinstalled and got a new host key',
      'IP was moved to another machine (cloud)',
      'Server upgrade changed SSH keys',
      'Public wifi with captive portal replacing fingerprint',
    ],
    solution: `1. ssh-keygen -R 192.168.1.100 — מוחק fingerprint לפי IP
2. ssh-keygen -R myserver.com — מוחק לפי hostname
3. ssh-keygen -R "[myserver.com]:2222" — אם פורט לא סטנדרטי
4. אחרי המחיקה — ssh user@host מחדש
5. תקבל "Are you sure?" → yes — שומר fingerprint חדש
6. הקובץ: ~/.ssh/known_hosts — שם נשמרים כל ה-fingerprints`,
    solutionEn: `1. ssh-keygen -R 192.168.1.100 — remove fingerprint by IP
2. ssh-keygen -R myserver.com — remove by hostname
3. ssh-keygen -R "[myserver.com]:2222" — for non-standard port
4. After removal — ssh user@host again
5. You'll get "Are you sure?" → yes — saves new fingerprint
6. The file: ~/.ssh/known_hosts — where all fingerprints are stored`,
    tip: '💡 ב-lab/cloud זה שגרתי. ב-production — תמיד וודא שה-fingerprint החדש לגיטימי לפני שמאשרים!',
    tipEn: '💡 In lab/cloud this is routine. In production — always verify the new fingerprint is legitimate before accepting!',
  },
  {
    id: 54,
    icon: '🔑',
    title: 'SSH — Too Many Authentication Failures',
    titleEn: 'SSH — Too Many Authentication Failures',
    category: 'SSH',
    categoryEn: 'SSH',
    story: 'מנסה SSH ומקבל: "Received disconnect: Too many authentication failures". לא הקלדת סיסמה שגויה — אז מה קרה?',
    storyEn: 'Trying SSH and getting: "Received disconnect: Too many authentication failures". You didn\'t type a wrong password — so what happened?',
    causes: [
      'SSH Agent שולח יותר מדי מפתחות אוטומטית',
      'יש הרבה מפתחות ב-~/.ssh/ ו-SSH מנסה את כולם',
      'השרת חוסם אחרי 3-5 ניסיונות',
    ],
    causesEn: [
      'SSH Agent sending too many keys automatically',
      'Many keys in ~/.ssh/ and SSH tries them all',
      'Server blocks after 3-5 attempts',
    ],
    solution: `1. ssh -o IdentitiesOnly=yes -i ~/.ssh/specific_key user@host
2. ssh-add -D — נקה את כל המפתחות מה-agent
3. ssh-add ~/.ssh/id_rsa — טען רק את המפתח הנכון
4. ב-~/.ssh/config:
   Host myserver
     HostName 192.168.1.100
     User admin
     IdentityFile ~/.ssh/myserver_key
     IdentitiesOnly yes`,
    solutionEn: `1. ssh -o IdentitiesOnly=yes -i ~/.ssh/specific_key user@host
2. ssh-add -D — clear all keys from agent
3. ssh-add ~/.ssh/id_rsa — load only the right key
4. In ~/.ssh/config:
   Host myserver
     HostName 192.168.1.100
     User admin
     IdentityFile ~/.ssh/myserver_key
     IdentitiesOnly yes`,
    tip: '💡 ~/.ssh/config חוסך הקלדה וגם מונע בעיה זו. כל שרת מוגדר עם המפתח הנכון.',
    tipEn: '💡 ~/.ssh/config saves typing and also prevents this issue. Each server is configured with the right key.',
  },
  {
    id: 55,
    icon: '🔑',
    title: 'SSH Tunnel / Port Forward לא עובד',
    titleEn: 'SSH Tunnel / Port Forward Not Working',
    category: 'SSH',
    categoryEn: 'SSH',
    story: 'מנסה ssh -L 8080:localhost:80 user@server אבל localhost:8080 לא מגיב.',
    storyEn: 'Trying ssh -L 8080:localhost:80 user@server but localhost:8080 not responding.',
    causes: [
      'השירות המרוחק לא רץ על port 80 בשרת',
      'AllowTcpForwarding מבוטל ב-sshd_config',
      'port 8080 כבר תפוס מקומית',
      'שוכחים ש-localhost:80 מתייחס לשרת המרוחק, לא למחשב שלך',
    ],
    causesEn: [
      'Remote service not running on port 80 on the server',
      'AllowTcpForwarding disabled in sshd_config',
      'Port 8080 already in use locally',
      'Forgetting that localhost:80 refers to the remote server, not your machine',
    ],
    solution: `Local Forward (אתה → שרת):
1. ssh -L 8080:localhost:80 user@server
   פותח localhost:8080 אצלך → מגיע ל-port 80 בשרת

Remote Forward (שרת → אתה):
2. ssh -R 9090:localhost:3000 user@server
   פותח port 9090 בשרת → מגיע ל-port 3000 אצלך

Debug:
3. ssh -v -L 8080:localhost:80 user@server — verbose
4. ss -tlnp | grep 8080 — בדוק שהtunnel מאזין
5. בשרת: curl localhost:80 — בדוק שהשירות רץ`,
    solutionEn: `Local Forward (you → server):
1. ssh -L 8080:localhost:80 user@server
   Opens localhost:8080 on your machine → reaches port 80 on server

Remote Forward (server → you):
2. ssh -R 9090:localhost:3000 user@server
   Opens port 9090 on server → reaches port 3000 on your machine

Debug:
3. ssh -v -L 8080:localhost:80 user@server — verbose
4. ss -tlnp | grep 8080 — check tunnel is listening
5. On server: curl localhost:80 — check service is running`,
    tip: '💡 -L = Local (תביא אליי). -R = Remote (תביא לשם). -D = Dynamic (SOCKS proxy). לזכור: L=Left (אצלי), R=Right (בשרת).',
    tipEn: '💡 -L = Local (bring to me). -R = Remote (bring to there). -D = Dynamic (SOCKS proxy). Remember: L=Left (my side), R=Right (server side).',
  },
  // ===== Linux — more =====
  {
    id: 56,
    icon: '🐧',
    title: 'apt — Could not get lock / dpkg was interrupted',
    titleEn: 'apt — Could not get lock / dpkg was interrupted',
    category: 'Linux',
    categoryEn: 'Linux',
    story: 'מנסה apt install ומקבל: "Could not get lock /var/lib/dpkg/lock-frontend" או "dpkg was interrupted, run dpkg --configure -a".',
    storyEn: 'Trying apt install and getting: "Could not get lock /var/lib/dpkg/lock-frontend" or "dpkg was interrupted, run dpkg --configure -a".',
    causes: [
      'apt/dpkg אחר כבר רץ ברקע (unattended-upgrades)',
      'התקנה קודמת נכשלה באמצע',
      'lock file נשאר אחרי crash',
    ],
    causesEn: [
      'Another apt/dpkg is running in the background (unattended-upgrades)',
      'Previous installation failed midway',
      'Lock file remained after a crash',
    ],
    solution: `1. sudo dpkg --configure -a — תקן התקנה שנתקעה
2. ps aux | grep -i apt — מי רץ?
3. חכה שunattended-upgrades יסיים (בדרך כלל 1-5 דקות)
4. אם באמת תקוע:
   sudo rm /var/lib/dpkg/lock-frontend
   sudo rm /var/lib/apt/lists/lock
5. sudo apt update && sudo apt install -f — תקן dependencies`,
    solutionEn: `1. sudo dpkg --configure -a — fix stuck installation
2. ps aux | grep -i apt — who's running?
3. Wait for unattended-upgrades to finish (usually 1-5 minutes)
4. If truly stuck:
   sudo rm /var/lib/dpkg/lock-frontend
   sudo rm /var/lib/apt/lists/lock
5. sudo apt update && sudo apt install -f — fix dependencies`,
    tip: '💡 לפני שמוחקים lock: תמיד בדקו שאין apt רץ ברקע! מחיקה בזמן שרץ = שבירת dpkg.',
    tipEn: '💡 Before deleting lock: always check no apt is running in the background! Deleting while running = breaking dpkg.',
  },
  {
    id: 57,
    icon: '🐧',
    title: 'bash: command not found',
    titleEn: 'bash: command not found',
    category: 'Linux',
    categoryEn: 'Linux',
    story: 'מקליד פקודה ומקבל: command not found. הפקודה לא מותקנת או לא ב-PATH.',
    storyEn: 'Typing a command and getting: command not found. The command is not installed or not in PATH.',
    causes: [
      'החבילה לא מותקנת',
      'הפקודה קיימת אבל לא ב-PATH',
      'typo בשם הפקודה',
      'הקלדת פקודת Windows ב-Linux (ipconfig במקום ifconfig)',
    ],
    causesEn: [
      'Package not installed',
      'Command exists but not in PATH',
      'Typo in command name',
      'Typed a Windows command in Linux (ipconfig instead of ifconfig)',
    ],
    solution: `1. which command / whereis command — היכן מותקן?
2. sudo apt install package — התקן
3. dpkg -S /usr/bin/command — מאיזה חבילה?
4. apt-file search command — מצא באיזה חבילה
5. echo $PATH — בדוק PATH
6. export PATH=$PATH:/usr/local/bin — הוסף ל-PATH

שגיאות נפוצות:
- ipconfig → ifconfig או ip addr (Linux)
- dir → ls (Linux)
- cls → clear (Linux)`,
    solutionEn: `1. which command / whereis command — where is it installed?
2. sudo apt install package — install it
3. dpkg -S /usr/bin/command — which package?
4. apt-file search command — find which package has it
5. echo $PATH — check PATH
6. export PATH=$PATH:/usr/local/bin — add to PATH

Common mistakes:
- ipconfig → ifconfig or ip addr (Linux)
- dir → ls (Linux)
- cls → clear (Linux)`,
    tip: '💡 טיפ: type command אומר לך בדיוק מה bash חושב על הפקודה — alias, builtin, או file.',
    tipEn: '💡 Tip: type command tells you exactly what bash thinks about the command — alias, builtin, or file.',
  },
  {
    id: 58,
    icon: '🐧',
    title: 'systemctl — Unit not found / Failed to start',
    titleEn: 'systemctl — Unit not found / Failed to start',
    category: 'Linux',
    categoryEn: 'Linux',
    story: 'מנסה systemctl start nginx ומקבל: "Unit nginx.service not found" או "Failed to start".',
    storyEn: 'Trying systemctl start nginx and getting: "Unit nginx.service not found" or "Failed to start".',
    causes: [
      'השירות לא מותקן',
      'שם השירות שגוי (nginx vs nginx.service)',
      'קובץ config שבור — השירות לא מצליח לעלות',
      'port תפוס — השירות לא יכול להאזין',
      'הרשאות — חסר גישה לקבצים/ports',
    ],
    causesEn: [
      'Service not installed',
      'Wrong service name (nginx vs nginx.service)',
      'Broken config file — service can\'t start',
      'Port in use — service can\'t listen',
      'Permissions — missing access to files/ports',
    ],
    solution: `1. systemctl list-units --type=service — רשימת כל השירותים
2. systemctl status nginx — סטטוס + שורות log אחרונות
3. journalctl -u nginx --no-pager -n 50 — 50 שורות log אחרונות
4. nginx -t — בדוק config (לכל שירות יש test mode)
5. ss -tlnp | grep :80 — מי תופס את הport?
6. sudo systemctl restart nginx — restart`,
    solutionEn: `1. systemctl list-units --type=service — list all services
2. systemctl status nginx — status + last log lines
3. journalctl -u nginx --no-pager -n 50 — last 50 log lines
4. nginx -t — check config (every service has a test mode)
5. ss -tlnp | grep :80 — who's using the port?
6. sudo systemctl restart nginx — restart`,
    tip: '💡 journalctl -xe הוא החבר הכי טוב שלך — מראה את הlog האחרון עם הסבר על השגיאה.',
    tipEn: '💡 journalctl -xe is your best friend — shows the last log with an explanation of the error.',
  },
  // ===== Network protocols =====
  {
    id: 59,
    icon: '📡',
    title: 'TCP RST — חיבור נסגר בכוח',
    titleEn: 'TCP RST — Connection Forcefully Closed',
    category: 'TCP',
    categoryEn: 'TCP',
    story: 'ב-Wireshark רואה חבילות TCP RST. מישהו סוגר חיבורים בכוח. למה?',
    storyEn: 'In Wireshark seeing TCP RST packets. Someone is forcefully closing connections. Why?',
    causes: [
      'השרת דוחה חיבור — אין שירות על הport (Closed port)',
      'Firewall שולח RST במקום לדרוף',
      'timeout — השרת סוגר חיבור שלא פעיל',
      'השרת overloaded ומנתק חיבורים',
      'application crash — התוכנה נפלה',
    ],
    causesEn: [
      'Server rejects connection — no service on the port (Closed port)',
      'Firewall sends RST instead of dropping',
      'Timeout — server closes idle connection',
      'Server overloaded and dropping connections',
      'Application crash — the program crashed',
    ],
    solution: `1. ב-Wireshark: tcp.flags.reset == 1 — סנן RST
2. בדוק מי שולח RST — client או server?
3. RST אחרי SYN? = port closed / firewall
4. RST אחרי established? = timeout / crash
5. בשרת: ss -s — סטטיסטיקות TCP
6. dmesg | tail — בדוק kernel errors`,
    solutionEn: `1. In Wireshark: tcp.flags.reset == 1 — filter RST
2. Check who sends RST — client or server?
3. RST after SYN? = port closed / firewall
4. RST after established? = timeout / crash
5. On server: ss -s — TCP statistics
6. dmesg | tail — check kernel errors`,
    tip: '💡 RST אחרי SYN = "הפורט סגור". RST אחרי דאטה = "משהו השתבש". ההקשר קריטי!',
    tipEn: '💡 RST after SYN = "port is closed". RST after data = "something went wrong". Context is critical!',
  },
  {
    id: 60,
    icon: '⏳',
    title: 'TCP Retransmission — חבילות נשלחות שוב ושוב',
    titleEn: 'TCP Retransmission — Packets Being Resent',
    category: 'TCP',
    categoryEn: 'TCP',
    story: 'ב-Wireshark רואה [TCP Retransmission] על חבילות. התקשורת איטית ויש שכפולים.',
    storyEn: 'In Wireshark seeing [TCP Retransmission] on packets. Communication is slow with duplicates.',
    causes: [
      'Packet loss ברשת — חבילות לא מגיעות',
      'WiFi חלש / interference',
      'כבל רשת פגום',
      'Switch/Router עמוס',
      'רוחב פס מלא — congestion',
    ],
    causesEn: [
      'Packet loss in the network — packets not arriving',
      'Weak WiFi / interference',
      'Damaged network cable',
      'Switch/Router overloaded',
      'Bandwidth full — congestion',
    ],
    solution: `1. Wireshark filter: tcp.analysis.retransmission
2. כמה % retransmission? מעל 2% = בעיה
3. ping -c 100 host — בדוק % loss
4. mtr host — רציף, מראה loss per hop
5. החלף כבל / התחבר ב-LAN במקום WiFi
6. iperf3 -c host — בדוק bandwidth אמיתי`,
    solutionEn: `1. Wireshark filter: tcp.analysis.retransmission
2. How much % retransmission? Over 2% = problem
3. ping -c 100 host — check % loss
4. mtr host — continuous, shows loss per hop
5. Swap cable / connect via LAN instead of WiFi
6. iperf3 -c host — check real bandwidth`,
    tip: '💡 Wireshark Expert Info (Analyze → Expert Info) מסכם את כל הבעיות אוטומטית — retransmissions, RST, errors.',
    tipEn: '💡 Wireshark Expert Info (Analyze → Expert Info) summarizes all issues automatically — retransmissions, RST, errors.',
  },
  // ===== Web / Browser =====
  {
    id: 61,
    icon: '🌐',
    title: 'ERR_NAME_NOT_RESOLVED — אתר לא נמצא',
    titleEn: 'ERR_NAME_NOT_RESOLVED — Site Not Found',
    category: 'DNS',
    categoryEn: 'DNS',
    story: 'הדפדפן מציג: "This site can\'t be reached — DNS_PROBE_FINISHED_NXDOMAIN" או ERR_NAME_NOT_RESOLVED.',
    storyEn: 'Browser shows: "This site can\'t be reached — DNS_PROBE_FINISHED_NXDOMAIN" or ERR_NAME_NOT_RESOLVED.',
    causes: [
      'הדומיין לא קיים או פג תוקף',
      'DNS server לא מגיב',
      'typo בכתובת האתר',
      'DNS cache מקומי מכיל ערך ישן',
      'VPN/proxy מפריע',
    ],
    causesEn: [
      'Domain doesn\'t exist or expired',
      'DNS server not responding',
      'Typo in website address',
      'Local DNS cache has stale entry',
      'VPN/proxy interfering',
    ],
    solution: `Windows:
1. ipconfig /flushdns — נקה DNS cache

Linux:
2. sudo systemd-resolve --flush-caches

Mac:
3. sudo dscacheutil -flushcache

כללי:
4. נסו DNS אחר: 8.8.8.8 או 1.1.1.1
5. nslookup domain.com 8.8.8.8 — בדוק עם Google DNS
6. whoIs domain.com — בדוק אם הדומיין בכלל פעיל`,
    solutionEn: `Windows:
1. ipconfig /flushdns — clear DNS cache

Linux:
2. sudo systemd-resolve --flush-caches

Mac:
3. sudo dscacheutil -flushcache

General:
4. Try different DNS: 8.8.8.8 or 1.1.1.1
5. nslookup domain.com 8.8.8.8 — test with Google DNS
6. whois domain.com — check if domain is even active`,
    tip: '💡 NXDOMAIN = "הדומיין לא קיים ב-DNS". זה לא בעיית רשת — זה בעיית שם.',
    tipEn: '💡 NXDOMAIN = "domain doesn\'t exist in DNS". It\'s not a network issue — it\'s a name issue.',
  },
  {
    id: 62,
    icon: '🔒',
    title: 'NET::ERR_CERT_DATE_INVALID — תעודת SSL פגת תוקף',
    titleEn: 'NET::ERR_CERT_DATE_INVALID — SSL Certificate Expired',
    category: 'SSL/אבטחה',
    categoryEn: 'SSL/Security',
    story: 'דפדפן מציג שגיאה: "Your connection is not private — NET::ERR_CERT_DATE_INVALID". התעודה פגה.',
    storyEn: 'Browser shows error: "Your connection is not private — NET::ERR_CERT_DATE_INVALID". Certificate expired.',
    causes: [
      'תעודת SSL פגת תוקף בשרת',
      'השעון במחשב שלך שגוי!',
      'תעודת intermediate פגת תוקף',
    ],
    causesEn: [
      'SSL certificate expired on the server',
      'Your computer clock is wrong!',
      'Intermediate certificate expired',
    ],
    solution: `1. בדוק שעון: date (Linux) — שנה, חודש, שעה נכונים?
2. sudo ntpdate pool.ntp.org — סנכרן שעון
3. timedatectl set-ntp true — הפעל NTP
4. echo | openssl s_client -connect host:443 2>/dev/null | openssl x509 -dates
   → מראה notBefore ו-notAfter של התעודה
5. אם אתה מנהל השרת: sudo certbot renew — חדש Let's Encrypt`,
    solutionEn: `1. Check clock: date (Linux) — year, month, time correct?
2. sudo ntpdate pool.ntp.org — sync clock
3. timedatectl set-ntp true — enable NTP
4. echo | openssl s_client -connect host:443 2>/dev/null | openssl x509 -dates
   → shows notBefore and notAfter of the certificate
5. If you manage the server: sudo certbot renew — renew Let's Encrypt`,
    tip: '💡 שעון שגוי = הסיבה #1 לשגיאות SSL מוזרות. תמיד בדקו date לפני שמחפשים בעיות SSL!',
    tipEn: '💡 Wrong clock = #1 reason for weird SSL errors. Always check date before investigating SSL issues!',
  },
  // ===== Networking basics =====
  {
    id: 63,
    icon: '📋',
    title: 'TTL Expired in Transit — חבילה לא מגיעה',
    titleEn: 'TTL Expired in Transit — Packet Not Arriving',
    category: 'רשת',
    categoryEn: 'Network',
    story: 'מקבל ICMP error: "TTL Expired in Transit". חבילה נשלחה אבל "מתה" בדרך.',
    storyEn: 'Getting ICMP error: "TTL Expired in Transit". Packet was sent but "died" on the way.',
    causes: [
      'Routing loop — חבילה מסתובבת בין routers עד שTTL מגיע ל-0',
      'TTL נמוך מדי (ping -t 5 לשרת רחוק)',
      'ISP routing issue',
    ],
    causesEn: [
      'Routing loop — packet bouncing between routers until TTL reaches 0',
      'TTL too low (ping -t 5 to a distant server)',
      'ISP routing issue',
    ],
    solution: `1. traceroute host — רואה איפה TTL נגמר
2. אם חוזר על אותם hops — routing loop!
3. ping -t 128 host — הגדל TTL
4. בdocker/VM: בדוק MTU — fragmentation יכול לגרום לזה
5. ip route show — בדוק routing table
6. דווח ל-ISP אם routing loop ברשת שלהם`,
    solutionEn: `1. traceroute host — see where TTL runs out
2. If same hops repeat — routing loop!
3. ping -t 128 host — increase TTL
4. In docker/VM: check MTU — fragmentation can cause this
5. ip route show — check routing table
6. Report to ISP if routing loop is on their network`,
    tip: '💡 TTL בדרך כלל מתחיל מ-64 (Linux) או 128 (Windows). כל router בדרך מוריד 1. ב-traceroute, TTL הוא מה שעושה את "הקסם".',
    tipEn: '💡 TTL usually starts at 64 (Linux) or 128 (Windows). Each router decreases by 1. In traceroute, TTL is what makes the "magic" work.',
  },
  {
    id: 64,
    icon: '📦',
    title: 'MTU / Fragmentation — חבילות גדולות מדי',
    titleEn: 'MTU / Fragmentation — Packets Too Large',
    category: 'רשת',
    categoryEn: 'Network',
    story: 'VPN עובד אבל אתרים מסוימים לא נטענים. SSH עובד אבל SCP תקוע. ייתכן שזה MTU.',
    storyEn: 'VPN works but some websites don\'t load. SSH works but SCP is stuck. It might be MTU.',
    causes: [
      'MTU גדול מדי ל-VPN/tunnel (1500 > 1400)',
      'DF bit מוגדר — אי אפשר לפרגמנט',
      'Path MTU Discovery נכשל — firewall חוסם ICMP "need fragment"',
    ],
    causesEn: [
      'MTU too large for VPN/tunnel (1500 > 1400)',
      'DF bit set — cannot fragment',
      'Path MTU Discovery failed — firewall blocks ICMP "need fragment"',
    ],
    solution: `1. ping -M do -s 1472 host — בדוק MTU מקסימלי (1472 + 28 headers = 1500)
2. הקטן בהדרגה: 1400, 1350, 1300 — עד שעובד
3. sudo ip link set dev eth0 mtu 1400 — שנה MTU
4. ב-VPN: הגדר mtu 1400 ב-config
5. Wireshark filter: ip.flags.df == 1 && icmp — חפש "need fragment"
6. iptables: -A FORWARD --tcp-flags SYN,RST SYN -j TCPMSS --clamp-mss-to-pmtu`,
    solutionEn: `1. ping -M do -s 1472 host — test maximum MTU (1472 + 28 headers = 1500)
2. Decrease gradually: 1400, 1350, 1300 — until it works
3. sudo ip link set dev eth0 mtu 1400 — change MTU
4. In VPN: set mtu 1400 in config
5. Wireshark filter: ip.flags.df == 1 && icmp — look for "need fragment"
6. iptables: -A FORWARD --tcp-flags SYN,RST SYN -j TCPMSS --clamp-mss-to-pmtu`,
    tip: '💡 MTU=1500 סטנדרט. VPN/PPPoE צריכים פחות (1400-1460). אם VPN שובר אתרים — MTU הוא החשוד הראשון.',
    tipEn: '💡 MTU=1500 is standard. VPN/PPPoE need less (1400-1460). If VPN breaks websites — MTU is the first suspect.',
  }
]

export const storiesContent = [
  {
    id: 1,
    icon: '🎬',
    title: 'הסיפור שמאחורי YouTube Buffering',
    titleEn: 'The Story Behind YouTube Buffering',
    category: 'סיפור אמיתי',
    categoryEn: 'True Story',
    content: `ב־2022, חברת Cloudflare עברה תקלה שהורידה 19% מהאינטרנט. איך? BGP routing bug.

BGP (Border Gateway Protocol) הוא הפרוטוקול שמחליט איך traffic זורם בין ISPs. Cloudflare שלחה prefix שגוי — ה-routers ברחבי העולם קיבלו הוראה שגויה לאן לנתב traffic.

התוצאה: Discord, Shopify, Twitch, Teams — כולם נפלו. 19 דקות של כאוס.

מה לקחנו: הרשת אינטרנט היא רשת של אמון הדדי. BGP לא מאמת — הוא פשוט מאמין לכולם. זה חוסן (כולם מחוברים) אבל גם נקודת תורפה.`,
    contentEn: `In 2022, Cloudflare had a failure that took down 19% of the internet. How? A BGP routing bug.

BGP (Border Gateway Protocol) is the protocol that decides how traffic flows between ISPs. Cloudflare sent a wrong prefix — routers around the world got a wrong instruction on where to send traffic.

The result: Discord, Shopify, Twitch, Teams — all went down. 19 minutes of chaos.

What we learned: the internet is a network of mutual trust. BGP does not verify — it just trusts everyone. This is strength (everyone is connected) but also a weak point.`
  },
  {
    id: 2,
    icon: '🕊️',
    title: 'אינטרנט עם יונים — RFC 1149',
    titleEn: 'Internet by Pigeons — RFC 1149',
    category: 'מוזר אבל אמיתי',
    categoryEn: 'Weird But True',
    content: `ב־1990 פורסם RFC 1149 — "Standard for the Transmission of IP Datagrams on Avian Carriers" (העברת IP על גבי ציפורים).

ב־2001, קבוצה בנורווגיה ביצעה את זה באמת: 9 חבילות IP נשלחו על 9 יונות על פני 5 ק"מ. כל יונה נשאה microSD עם הdata גלוי על גבה.

תוצאות:
- 4 מתוך 9 חבילות הגיעו (56% packet loss 😅)
- Latency: כ־3,000 שניות (50 דקות)
- Bandwidth: ~2.27 MB (הSD שנשאה)

הלקח: פרוטוקול IP הוא רק שפה — הוא יכול לרוץ על כל medium. WiFi, Fiber, Ethernet... ויונים! 🕊️`,
    contentEn: `In 1990, RFC 1149 was published — "Standard for the Transmission of IP Datagrams on Avian Carriers" (sending IP over birds).

In 2001, a group in Norway actually did it: 9 IP packets were sent on 9 pigeons over 5 km. Each pigeon carried a microSD with the data on its back.

Results:
- 4 out of 9 packets arrived (56% packet loss)
- Latency: about 3,000 seconds (50 minutes)
- Bandwidth: ~2.27 MB (the SD card it carried)

The lesson: IP protocol is just a language — it can run on any medium. WiFi, Fiber, Ethernet... and pigeons!`
  },
  {
    id: 3,
    icon: '🌊',
    title: 'כבלי הים שמחזיקים את האינטרנט',
    titleEn: 'The Undersea Cables That Hold the Internet',
    category: 'תשתית',
    categoryEn: 'Infrastructure',
    content: `99% מהתקשורת הבינלאומית עוברת דרך כבלי fiber optic תת-ימיים. לא לוויינים — כבלים.

בים התיכון עוברים 5 כבלים עיקריים שמחברים ישראל לאירופה וארה"ב. כבל אחד = עשרות Terabits/sec.

ב־2022, שלושה כבלים תת-ימיים נפגעו ליד מדגסקר — כנראה עוגן של ספינה. אפריקה המזרחית איבדה 50% מחיבור האינטרנט.

כבל Sea-Me-We עובר מישראל ועד סינגפור. רוחב הפס שלו: 30+ Tbps.

הכבלים מוחזקים על ידי קונסורציום של חברות כמו Google, Meta, Amazon. Google בנתה את כבל Curie — 10,500 ק"מ בין ארה"ב לצ'ילה! 🌊`,
    contentEn: `99% of international communication goes through undersea fiber optic cables. Not satellites — cables.

5 main cables in the Mediterranean connect Israel to Europe and the USA. One cable = tens of Terabits/sec.

In 2022, three undersea cables were damaged near Madagascar — probably a ship anchor. East Africa lost 50% of its internet connection.

The Sea-Me-We cable goes from Israel all the way to Singapore. Its bandwidth: 30+ Tbps.

The cables are maintained by a group of companies like Google, Meta, Amazon. Google built the Curie cable — 10,500 km between the USA and Chile!`
  },
  {
    id: 4,
    icon: '🔐',
    title: 'איך HTTPS עובד — בפשטות',
    titleEn: 'How HTTPS Works — Simply Explained',
    category: 'אבטחה',
    categoryEn: 'Security',
    content: `כשאת רואה 🔒 בדפדפן — מה בדיוק קורה מאחורי הקלעים?

1. דפדפן שולח "Client Hello" עם גרסאות TLS שהוא תומך בהן
2. שרת שולח "Server Hello" + Certificate (תעודה עם public key)
3. דפדפן בודק: "האם זה באמת Google?" — Certificate Authority מאשרת
4. Key Exchange: שני הצדדים מחשבים session key (Diffie-Hellman)
5. עכשיו כל התקשורת מוצפנת עם symmetric key

המדהים: Key Exchange קורה בלי ששלחתם את המפתח! DH מאפשר לשני צדדים להגיע למפתח זהה בלי לשלוח אותו. קסם מתמטי! 🔮

כל ה-handshake = פחות מ־100ms. HTTPS אמנם מוסיף overhead — אבל HTTP/2 ו־TLS 1.3 הפחיתו אותו לאפסיים.`,
    contentEn: `When you see a lock icon in the browser — what exactly happens behind the scenes?

1. Browser sends "Client Hello" with the TLS versions it supports
2. Server sends "Server Hello" + Certificate (with public key)
3. Browser checks: "Is this really Google?" — Certificate Authority confirms
4. Key Exchange: both sides calculate a session key (Diffie-Hellman)
5. Now all communication is encrypted with a symmetric key

The amazing part: Key Exchange happens without sending the key! DH lets both sides reach the same key without sending it. Math magic!

The whole handshake = less than 100ms. HTTPS does add overhead — but HTTP/2 and TLS 1.3 reduced it to almost zero.`
  },
  {
    id: 5,
    icon: '🚀',
    title: 'איך Starlink שינה את האינטרנט הלוויני',
    titleEn: 'How Starlink Changed Satellite Internet',
    category: 'טכנולוגיה',
    categoryEn: 'Technology',
    content: `לוויינים מסורתיים (GEO) פועלים ב־35,786 ק"מ מהאדמה. Latency: 600ms+. בלתי שמיש לגיימינג.

SpaceX שיגרה 5,000+ לוויינים ב־550 ק"מ בלבד (LEO). Latency: 20-40ms! כמעט כמו כבל.

איך אפשרי? מרחק קצר = זמן עבור אור קצר. c=300,000 km/s, 550km × 2 = ~3.7ms רק למרחק. שאר ה-latency מגיע מ-processing.

תוצאה: אינטרנט לוויני שמתחרה עם fiber באזורים מרוחקים. איים, מדבריות, ספינות — הכל מחובר.

הבעיה: constellation עם 5,000 לוויינים = בעיה אסטרונומית. Astronomers מתלוננים על זיהום אור. SpaceX ניסתה Darksat — לוויין עם ציפוי מחשיך.`,
    contentEn: `Traditional satellites (GEO) work at 35,786 km from Earth. Latency: 600ms+. Not usable for gaming.

SpaceX launched 5,000+ satellites at only 550 km (LEO). Latency: 20-40ms! Almost like a cable.

How is this possible? Short distance = short time for light. c=300,000 km/s, 550km x 2 = ~3.7ms just for distance. The rest of the latency comes from processing.

Result: satellite internet that competes with fiber in remote areas. Islands, deserts, ships — everything is connected.

The problem: a constellation of 5,000 satellites = an astronomy problem. Astronomers complain about light pollution. SpaceX tried Darksat — a satellite with a darkening coating.`
  }
]
