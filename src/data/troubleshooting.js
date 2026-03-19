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
    tip: '💡 תמיד תתחילו מ-ping. הוא יגיד לכם בדיוק איפה השרשרת נשברת.',
    titleEn: 'Internet not working — but WiFi is connected',
    categoryEn: 'Connection',
    storyEn: 'It happened to all of us: the WiFi icon is green and connected, but every site shows an error. "No internet" but WiFi is connected? How is that possible?',
    causesEn: [
      'The router is connected to the local network, but not to the internet (WAN port problem)',
      'The DNS server is not responding — addresses are not resolved',
      'The DHCP server did not give you a valid IP address',
      'The ISP is having an outage',
    ],
    solutionEn: `1. ping 8.8.8.8 — if it works: DNS problem, not internet
2. ping your router (usually 192.168.1.1) — if it fails: LAN problem
3. ipconfig /release && ipconfig /renew — refreshes DHCP
4. Change DNS to 8.8.8.8 manually
5. Restart the router (wait 60 seconds!)`,
    tipEn: 'Always start with ping. It will tell you exactly where the chain is broken.'
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
    tip: '💡 WiFi 5GHz מהיר יותר אבל חלש יותר. 2.4GHz = מרחק, 5GHz = מהירות.',
    titleEn: 'Internet is slow — but only in the evening',
    categoryEn: 'Performance',
    storyEn: 'In the morning everything is fast, in the evening YouTube freezes every 10 seconds. It is not your computer — it is congestion (network overload).',
    causesEn: [
      'All neighbors are online in the evening — ISP pipes are overloaded',
      'ISP does Traffic Shaping — slows streaming on purpose during peak hours',
      'WiFi channel is crowded — neighbors use the same channel',
      'Your router cannot handle QoS',
    ],
    solutionEn: `1. Check speed with speedtest.net — morning vs evening
2. Switch WiFi channel to 5GHz (less crowded, shorter range)
3. In router settings — enable QoS and mark streaming as high priority
4. Call your ISP and ask for minimum speed SLA`,
    tipEn: 'WiFi 5GHz is faster but weaker. 2.4GHz = range, 5GHz = speed.'
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
    tip: '💡 F12 → Network הוא כלי הדיאגנוסטיקה הכי חשוב לבאגים של HTTP!',
    titleEn: 'Password is correct but the site won\'t let you in',
    categoryEn: 'HTTP/Security',
    storyEn: 'You type the correct password 100%, but the site says "Wrong password". What is going on?',
    causesEn: [
      'Old cookies — an old session conflicts with the new login attempt',
      'The site blocks your IP after too many failed attempts',
      'Caps Lock is on (classic!)',
      'The browser saved an old password and filled it automatically',
      'The site is down (500 Internal Server Error)',
    ],
    solutionEn: `1. Open a private browsing tab (Incognito)
2. Check the response code — F12 → Network → login request
3. If 429 Too Many Requests — wait 15 minutes
4. Try password reset
5. Try a different browser — maybe localStorage is broken`,
    tipEn: 'F12 → Network is the most important tool for diagnosing HTTP bugs!'
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
    tip: '💡 כשping לIP עובד אבל לדומיין לא — זו תמיד בעיית DNS. פשוט!',
    titleEn: 'ping works but the site won\'t open',
    categoryEn: 'DNS',
    storyEn: 'ping 8.8.8.8 works fine, but Chrome shows "This site can\'t be reached". The IP works but DNS is broken.',
    causesEn: [
      'DNS server is not responding or overloaded',
      'DNS cache is broken — an old wrong DNS record is saved',
      'ISP blocks a specific domain',
      'hosts file in Windows has a wrong override',
    ],
    solutionEn: `1. ipconfig /flushdns — clears DNS cache
2. nslookup google.com — checks if DNS works
3. Change DNS to 1.1.1.1 (Cloudflare) or 8.8.8.8 (Google)
4. Check hosts file: C:\\Windows\\System32\\drivers\\etc\\hosts`,
    tipEn: 'When ping to IP works but to domain does not — it is always a DNS problem. Simple!'
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
    tip: '💡 TCP Keepalive = שולח "עוד חי?" כל X שניות כדי לשמור NAT entry חי.',
    titleEn: 'TCP connection drops in the middle',
    categoryEn: 'TCP',
    storyEn: 'In the middle of a big download — everything stops. SSH session freezes. The problem? TCP timeout or RST packet.',
    causesEn: [
      'Router sends RST packet after idle timeout (usually 5-30 minutes)',
      'NAT entry expired — the port assigned to your connection was deleted',
      'Firewall closed a connection that looked "suspicious"',
      'Packets are lost (packet loss) and TCP cannot recover',
    ],
    solutionEn: `1. SSH: add ServerAliveInterval 60 in ~/.ssh/config
2. TCP keepalive — asks the OS to send keepalive packets
3. Check packet loss with: ping -n 100 8.8.8.8 (Windows) or ping -c 100 8.8.8.8
4. WireGuard/VPN for important long connections`,
    tipEn: 'TCP Keepalive = sends "still alive?" every X seconds to keep the NAT entry alive.'
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
    tip: '💡 169.254.x.x = APIPA (Automatic Private IP Addressing). תמיד סימן ש-DHCP נכשל!',
    titleEn: 'IP 169.254.x.x — what is it?',
    categoryEn: 'DHCP',
    storyEn: 'You opened CMD and typed ipconfig — your IP is 169.254.something. This is not normal! This is APIPA — DHCP failure.',
    causesEn: [
      'DHCP server did not answer (router is off, overloaded, or broken)',
      'Computer did not get an IP within 30 seconds — assigns itself APIPA',
      'Network cable is not connected properly',
      'Network card has a problem',
    ],
    solutionEn: `1. ipconfig /release && ipconfig /renew
2. Check that the router is running and DHCP is enabled
3. Try a static IP manually: 192.168.1.100, mask 255.255.255.0, gateway 192.168.1.1
4. Device Manager → Network adapters → Update driver`,
    tipEn: '169.254.x.x = APIPA (Automatic Private IP Addressing). Always a sign that DHCP failed!'
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
    tip: '💡 HTTP/2 הפחית latency בכ-50% בדפדפן. רוב האתרים המודרניים משתמשים בו.',
    titleEn: 'Two TCP requests — why?',
    categoryEn: 'TCP',
    storyEn: 'In Wireshark you see the site opens with SYN, SYN-ACK, ACK, but then another SYN appears. Why does TCP open a new connection?',
    causesEn: [
      'HTTP/1.1 opens a connection for each resource (CSS file, image, etc.)',
      'HTTP/2 combines everything into one connection with multiplexing',
      'Connection: close header closes the connection after each request',
      'Different CDN endpoints for images vs HTML',
    ],
    solutionEn: `This is normal in HTTP/1.1! HTTP/2 fixed this.
Check in DevTools → Network → Protocol column:
- h2 = HTTP/2 (one connection for all)
- http/1.1 = one connection per resource`,
    tipEn: 'HTTP/2 reduced browser latency by about 50%. Most modern sites use it.'
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
    tip: '💡 CORS = Cross-Origin Resource Sharing. זה feature, לא bug! הדפדפן מגן עלייך 🛡️',
    titleEn: 'CORS Error — "Cross-Origin Request Blocked"',
    categoryEn: 'HTTP/Security',
    storyEn: 'You wrote JavaScript that does a fetch to an API and a red error appears in Console: CORS. What is it and why?',
    causesEn: [
      'The browser blocks requests from domain A to domain B (Same-Origin Policy)',
      'The API server does not return Access-Control-Allow-Origin header',
      'Preflight OPTIONS request fails',
    ],
    solutionEn: `On the server (Python Flask / Node.js):
- Flask: flask-cors → CORS(app)
- Express: cors() middleware
- Send header: Access-Control-Allow-Origin: *

This is safety! The browser protects you from cross-site attacks.`,
    tipEn: 'CORS = Cross-Origin Resource Sharing. It is a feature, not a bug! The browser protects you.'
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
    tip: '💡 2.4GHz עובר דרך קירות טוב יותר. 5GHz מהיר יותר אבל מרחק קצר. בחרו לפי מיקום!',
    titleEn: 'WiFi is connected but signal is weak',
    categoryEn: 'Physical/WiFi',
    storyEn: 'Weak signal = high latency and unstable internet. Understanding WiFi physics helps you fix it!',
    causesEn: [
      'Walls, especially concrete and metal, weaken the signal',
      '2.4GHz competes with microwave, Bluetooth, neighbors',
      'Old router with a weak antenna',
      'Too far from the router',
    ],
    solutionEn: `1. Move the router to a central spot in the house
2. Switch to 5GHz if you are close to the router
3. Mesh WiFi for a big house (eero, Google Nest)
4. WiFi Analyzer (Android) — see which channels are crowded
5. Use only channel 1, 6 or 11 for 2.4GHz (no overlap)`,
    tipEn: '2.4GHz goes through walls better. 5GHz is faster but shorter range. Choose based on location!'
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
    tip: '💡 כבל Ethernet אחד שווה 20ms חיסכון. השקעה של 20 שקל שמשנה חוויה!',
    titleEn: 'High latency in gaming',
    categoryEn: 'Performance',
    storyEn: 'Ping of 200ms = death in gaming. Why does this happen, and why only to a certain server?',
    causesEn: [
      'Game server is in Europe/America — physics = distance = time',
      'ISP routing is not efficient — packet goes through 20 unnecessary hops',
      'WiFi adds latency compared to cable',
      'Router is overloaded with bad QoS',
    ],
    solutionEn: `1. Use a cable — WiFi adds 5-30ms, cable = zero
2. Choose a server close to you (EU/IL)
3. tracert to the game server — find slow hops
4. Enable QoS in the router: Gaming > Streaming > Browsing
5. Gaming VPN (Exitlag, NordVPN) — sometimes helps a lot`,
    tipEn: 'One Ethernet cable saves 20ms. A small investment that changes the experience!'
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
    tip: '💡 SO_REUSEADDR = אומרים ל-OS "תן לי לפתוח פורט אפילו אם ב-TIME_WAIT". פתרון קסם!',
    titleEn: 'Port Already in Use — error when starting a server',
    categoryEn: 'Programming',
    storyEn: 'You ran python server.py and got: "Address already in use" on port 8080. What happened?',
    causesEn: [
      'A previous process did not close properly and still holds the port',
      'TIME_WAIT state — TCP waits 2 minutes before releasing a port',
      'Two processes try to open the same port',
    ],
    solutionEn: `Linux/Mac:
lsof -i :8080 → see who holds it
kill -9 <PID> → close it

Windows:
netstat -ano | findstr :8080
taskkill /PID <PID> /F

Or: change PORT to 8081, 3001 etc.
In code: SO_REUSEADDR option`,
    tipEn: 'SO_REUSEADDR = tells the OS "let me open the port even if it is in TIME_WAIT". Magic fix!'
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
    tip: '💡 404 = "Not Found" — זו שגיאת לקוח (4xx). הבקשה הגיעה לשרת, אבל מה שביקשת לא קיים.',
    titleEn: '404 — Site Not Found',
    categoryEn: 'HTTP Errors',
    storyEn: 'The address is correct, the connection is fine — but Chrome shows "404 Not Found". What happened? The resource you asked for does not exist on the server.',
    causesEn: [
      'Typo in the path (URL) — uppercase/lowercase matters on Linux servers',
      'The page was deleted from the server but the link still shows in Google',
      'The page moved to a new address but no redirect was set up',
      'The router/nginx did not find a matching handler for the path',
    ],
    solutionEn: `In browser: check the URL again — maybe extra space, missing / at the end
On server: check that the file/route exists
nginx: location block for this path
In Google Search Console: see pages with 404 and fix redirects

301 redirect:
nginx: return 301 /new-path;
Apache: Redirect /old /new`,
    tipEn: '404 = "Not Found" — this is a client error (4xx). The request reached the server, but what you asked for does not exist.'
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
    tip: '💡 403 = "Forbidden" — השרת יודע מי את אבל מחליט שאין לך גישה. שונה מ-401 (Unauthorized) שמבקש להתחבר.',
    titleEn: '403 Forbidden — access denied',
    categoryEn: 'HTTP Errors',
    storyEn: 'The site exists, the connection is fine, but the server says "you are not allowed in". This is different from 404 — the page exists, but you have no permission.',
    causesEn: [
      'Wrong file permissions on the server (chmod) — 644 for files, 755 for folders',
      'Your IP is blocked by firewall or .htaccess',
      'nginx/Apache is set to block direct access to a folder',
      'Missing index.html/index.php in the folder (directory listing is off)',
      'token/JWT expired — the server does not approve access',
    ],
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
    tipEn: '403 = "Forbidden" — the server knows who you are but decides you have no access. Different from 401 (Unauthorized) which asks you to log in.'
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
    tip: '💡 500 = השרת לא סיפר לך מה הבעיה, אבל היא רשומה ב-logs. תמיד חפשו שם!',
    titleEn: '500 Internal Server Error',
    categoryEn: 'HTTP Errors',
    storyEn: 'The scariest one — "500 Internal Server Error". This is not your problem! The server crashed from inside. It is always a bug on the server side.',
    causesEn: [
      'Python/PHP/Node.js code threw an unhandled exception',
      'Database connection failed (DB is down, wrong credentials)',
      '.env file is missing — an environment variable the code expects',
      'Syntax error in code that was deployed to production',
      'Disk full — the server cannot write to files',
    ],
    solutionEn: `1. Open the server logs right away:
tail -f /var/log/nginx/error.log
tail -f /var/log/apache2/error.log
journalctl -u myapp -f

2. Check application logs:
Python: traceback in logs
Node.js: console.error in logs

3. Check disk:
df -h → make sure there is no 100% usage

4. Check DB connection:
psql -h localhost -U user -d db`,
    tipEn: '500 = the server did not tell you the problem, but it is written in the logs. Always look there!'
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
    tip: '💡 504 = נגמר הזמן להמתנה. 503 = השרת לא זמין בכלל. 502 = השרת ענה שגיאה ל-proxy.',
    titleEn: '504 Gateway Timeout',
    categoryEn: 'HTTP Errors',
    storyEn: 'nginx gets your request but the server behind it does not answer in time. Think of nginx as a "gatekeeper" waiting for an answer from the backend server.',
    causesEn: [
      'The application server (Python/Node) froze or is too busy',
      'A heavy DB query that takes minutes to run',
      'Timeout is set too short in nginx (default: 60s)',
      'Server behind load balancer is not healthy',
    ],
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
    tipEn: '504 = time ran out waiting. 503 = server not available at all. 502 = server sent an error to the proxy.'
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
    tip: '💡 הדפדפן מרשה מקסימום 20 redirects לפני שהוא מפסיק ומציג שגיאה.',
    titleEn: '301/302 — Infinite Redirect Loop',
    categoryEn: 'HTTP Errors',
    storyEn: '"This page isn\'t redirecting properly" — the browser is stuck in a loop of redirects. A sends to B and B sends back to A, forever.',
    causesEn: [
      'HTTPS redirect + HTTP server both set redirects to each other',
      'www / non-www redirect loop in nginx settings',
      'WordPress: Site URL is set wrong in the DB',
      'CDN adds a redirect that conflicts with the server redirect',
    ],
    solutionEn: `1. Open DevTools → Network → see the redirects
2. Check nginx/apache config — only one side should set the redirect

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
    tipEn: 'The browser allows a maximum of 20 redirects before it stops and shows an error.'
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
    tip: '💡 401 = "Who are you?" | 403 = "I know you, but NO" | 404 = "What you want doesn\'t exist"',
    titleEn: '401 Unauthorized — need to log in',
    categoryEn: 'HTTP Errors',
    storyEn: 'Different from 403! 401 = "I do not know who you are — log in first". 403 = "I know who you are — but you are not allowed".',
    causesEn: [
      'Missing Authorization header in the request (Bearer token, Basic auth)',
      'JWT Token expired (exp field)',
      'API Key is wrong or not sent',
      'Session cookie is not valid — you did not log in',
    ],
    solutionEn: `In browser: you may need to log in to the site first

In API:
curl -H "Authorization: Bearer YOUR_TOKEN" https://api.example.com/data

Check expiry in JWT:
// Open jwt.io and check the exp field
// It is a Unix timestamp — convert with new Date(exp*1000)

If token expired: do a refresh token flow`,
    tipEn: '401 = "Who are you?" | 403 = "I know you, but NO" | 404 = "What you want does not exist"'
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
    tip: '💡 ERR_CONNECTION_REFUSED = אין מי שמאזין על הפורט. ERR_CONNECTION_TIMED_OUT = מישהו שם אבל לא עונה.',
    titleEn: 'ERR_CONNECTION_REFUSED — connection refused',
    categoryEn: 'HTTP Errors',
    storyEn: 'Chrome shows "ERR_CONNECTION_REFUSED" — this is one of the most common errors in development. Most of the time you just forgot to start the server!',
    causesEn: [
      'The server is not running at all (most common in development!)',
      'The server runs on a different port than the browser tries',
      'Firewall blocks the port',
      'Server crashed silently — process died',
    ],
    solutionEn: `1. Check that the server is running:
ps aux | grep node (or python, php etc.)
netstat -tlnp | grep 3000

2. Make sure the port is correct:
http://localhost:3000 ← port 3000
http://localhost:8080 ← port 8080

3. Start it again:
npm start / python app.py / etc.

4. Firewall:
sudo ufw allow 3000`,
    tipEn: 'ERR_CONNECTION_REFUSED = nobody is listening on the port. ERR_CONNECTION_TIMED_OUT = someone is there but not answering.'
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
    tip: '💡 Let\'s Encrypt חינמי ואוטומטי! הגדירו cronjob: certbot renew ירוץ כל יום ויחדש לפני שיפוג.',
    titleEn: 'ERR_SSL_PROTOCOL_ERROR — HTTPS problem',
    categoryEn: 'HTTP Errors',
    storyEn: 'You try to visit a site with HTTPS and get an SSL error. The most common case: the SSL certificate expired or does not match.',
    causesEn: [
      'SSL certificate expired — Let\'s Encrypt renews every 90 days',
      'Certificate is for a different domain — hosting server runs multiple sites',
      'Computer clock is wrong — TLS depends on accurate time',
      'Old TLS version — old server that does not support TLS 1.3',
      'HSTS — the browser remembers the site needs HTTPS but now it is gone',
    ],
    solutionEn: `Check certificate:
openssl s_client -connect example.com:443 -servername example.com

Renew Let's Encrypt:
certbot renew --dry-run
certbot certonly --webroot -d example.com

Clock:
timedatectl set-ntp true

Clear HSTS in Chrome:
chrome://net-internals/#hsts → Delete domain`,
    tipEn: 'Let\'s Encrypt is free and automatic! Set up a cronjob: certbot renew runs daily and renews before it expires.'
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
    tip: '💡 Active Mixed Content (scripts/XHR) חסום לחלוטין. Passive (תמונות) מציג אזהרה בלבד. שניהם חייבים תיקון!',
    titleEn: 'Mixed Content — HTTPS with HTTP inside',
    categoryEn: 'SSL/Security',
    storyEn: 'Your site moved to HTTPS — great! But Chrome shows a warning. The reason: an image, script, or API call inside the page still loads over HTTP. The browser does not like an "insecure" resource inside a "secure" page.',
    causesEn: [
      'img src="http://..." — image loads over HTTP',
      'script src="http://..." — external JavaScript over HTTP',
      'API call to http:// from an https:// page',
      'iframe loading an HTTP page',
      'CSS background-image with an http:// URL',
    ],
    solutionEn: `1. Open DevTools → Console — you will see Mixed Content warnings
2. DevTools → Network → filter "mixed" or "blocked"

Fix:
- Change every http:// to https:// in your code
- Images: upload to your CDN (HTTPS) or change src
- API: make sure every endpoint supports HTTPS

Nginx — auto redirect HTTP→HTTPS:
server {
  listen 80;
  return 301 https://$host$request_uri;
}`,
    tipEn: 'Active Mixed Content (scripts/XHR) is fully blocked. Passive (images) shows a warning only. Both must be fixed!'
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
    tip: '💡 ssllabs.com/ssltest נותן ציון A-F לאבטחת SSL שלכם. לקבל A+ = הגדירו HSTS + עדכנו cipher list!',
    titleEn: 'Certificate Chain Error — trust chain error',
    categoryEn: 'SSL/Security',
    storyEn: 'Chrome shows "NET::ERR_CERT_AUTHORITY_INVALID" even when the certificate is new and valid. The common reason: intermediate certificate is missing. The TLS handshake breaks!',
    causesEn: [
      'Missing intermediate certificate in nginx/Apache settings',
      'Self-signed certificate — the browser does not trust it (unknown CA)',
      'Root CA is not recognized — rare, only in organizations with private CA',
      'Certificate is signed for the wrong domain (Common Name mismatch)',
      'Old OpenSSL version that does not know new CAs',
    ],
    solutionEn: `Check chain:
openssl s_client -connect example.com:443 -showcerts

Online check: ssllabs.com/ssltest/

nginx — use fullchain (includes intermediates):
ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

Let's Encrypt — fullchain.pem includes everything automatically!
self-signed → in organization: add to trust store`,
    tipEn: 'ssllabs.com/ssltest gives a grade A-F for your SSL security. To get A+ = set HSTS + update cipher list!'
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
    tip: '💡 HSTS Preload List = רשימת אתרים שהדפדפן מכיר "מהמפעל". גוגל, פייסבוק — Chrome לעולם לא ייכנס אליהם ב-HTTP.',
    titleEn: 'HSTS — browser will not let you use HTTP',
    categoryEn: 'SSL/Security',
    storyEn: 'You tried to go to http://example.com and got an "HSTS error". The browser itself blocked it — even if the server worked! HSTS says "no, HTTPS only, I remember".',
    causesEn: [
      'The site sent a Strict-Transport-Security header before',
      'max-age was set to a year or two — the browser "remembers" for that time',
      'The site is now HTTP only (SSL removed) — the browser refuses',
      'includeSubDomains — every subdomain is also blocked',
    ],
    solutionEn: `Clear HSTS in Chrome:
1. Open chrome://net-internals/#hsts
2. In "Delete domain security policies" enter the domain
3. Click Delete

Firefox: about:config → network.stricttransportsecurity.preloadlist

If this is dev/test: use localhost (no HSTS) or a different domain
In Production: do not remove HSTS — it is a Feature, not a Bug!`,
    tipEn: 'HSTS Preload List = a list of sites the browser knows "from the factory". Google, Facebook — Chrome will never visit them over HTTP.'
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
    tip: '💡 אל תשמרו JWT ב-localStorage! XSS יכול לגנוב אותו. השתמשו ב-httpOnly cookie — JavaScript לא מגיע אליו.',
    titleEn: 'JWT Token problems — Authentication is broken',
    categoryEn: 'SSL/Security',
    storyEn: 'The user is logged in and suddenly gets "session expired" after a minute. Or: API returns 401 all the time even with a valid token. JWT is common — and JWT problems are even more common!',
    causesEn: [
      'exp (expiry) is set too short — 15 minutes is short!',
      'Secret key is different between server instances (load balancer)',
      'Clocks are not synced between servers — nbf/iat do not match',
      'Algorithm mismatch — server expects RS256, token uses HS256',
      'Token is not sent in the correct header',
    ],
    solutionEn: `Check JWT:
// Open jwt.io — paste the token and see the decoded payload
// exp = Unix timestamp: new Date(exp*1000)

Correct sending:
Authorization: Bearer eyJhbGc...

Common: refresh token flow:
- Access token: 15 minutes
- Refresh token: 7 days
- Before expiry: renew silently in the background with refresh

Next.js/Express:
const token = jwt.verify(tokenStr, process.env.JWT_SECRET)`,
    tipEn: 'Do not store JWT in localStorage! XSS can steal it. Use httpOnly cookie — JavaScript cannot reach it.'
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
    tip: '💡 CORS הוא הגנת דפדפן בלבד! ב-Postman/curl לא תראו את השגיאה — כי הם לא דפדפן. השרת לא חוסם, הדפדפן חוסם!',
    titleEn: 'CORS Error — Cross-Origin blocked',
    categoryEn: 'SSL/Security',
    storyEn: 'Frontend on localhost:3000 calls API on localhost:8000 and gets "CORS Policy blocked". This is the most common error in full-stack development!',
    causesEn: [
      'The browser blocks requests from one origin to another (security protection)',
      'Server does not send Access-Control-Allow-Origin header',
      'Preflight OPTIONS request fails',
      'Credentials (cookies) + CORS = special setup is needed',
      'Production: different domain from the API domain',
    ],
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
    tipEn: 'CORS is browser protection only! In Postman/curl you will not see the error — because they are not browsers. The server does not block, the browser blocks!'
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
    tip: '💡 CSP הוא הכי חזק — אומרים לדפדפן "רק scripts מהדומיין שלי". מונע XSS גם אם תוקף הזריק קוד!',
    titleEn: 'Security Headers missing — CSP, X-Frame',
    categoryEn: 'SSL/Security',
    storyEn: 'The site "works" — but Mozilla Observatory gives a grade F. Headers that protect from XSS, clickjacking, MIME sniffing — all missing. Attackers love sites like this.',
    causesEn: [
      'Content-Security-Policy (CSP) is missing — allows XSS injection',
      'X-Frame-Options is missing — allows clickjacking (malicious iframe)',
      'X-Content-Type-Options is missing — allows MIME sniffing attacks',
      'Referrer-Policy not set — leaks info to third parties',
      'Permissions-Policy is missing — any website can ask for location/camera',
    ],
    solutionEn: `nginx — add to server block:
add_header X-Frame-Options "SAMEORIGIN";
add_header X-Content-Type-Options "nosniff";
add_header X-XSS-Protection "1; mode=block";
add_header Referrer-Policy "strict-origin-when-cross-origin";
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline';";
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains";

Check: observatory.mozilla.org`,
    tipEn: 'CSP is the strongest — tells the browser "only scripts from my domain". Prevents XSS even if an attacker injected code!'
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
    tip: '💡 אפילו 1% packet loss הורס שיחות VoIP ו-gaming. 0% loss = חוויה מושלמת!',
    titleEn: 'Packet Loss — packets are getting lost',
    categoryEn: 'Network',
    storyEn: 'Zoom call keeps disconnecting? Discord audio cuts out? Probably packet loss.',
    causesEn: [
      'Damaged network cable — bad connection',
      'WiFi interference — many networks on the same channel',
      'ISP problem — routing issue',
      'Switch/Router is overloaded — drops packets',
      'Old network card',
    ],
    solutionEn: `1. ping -t 8.8.8.8 — run for 5 minutes, count how many % loss
2. Less than 1% = normal. More than 3% = problem
3. Try a different cable — cheap cable = problems
4. In Wireshark look for TCP Retransmission — a sign of loss
5. Contact ISP — there may be a problem on their side`,
    tipEn: 'Even 1% packet loss ruins VoIP calls and gaming. 0% loss = perfect experience!'
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

מה לקחנו: הרשת אינטרנט היא רשת של אמון הדדי. BGP לא מאמת — הוא פשוט מאמין לכולם. זה חוסן (כולם מחוברים) אבל גם נקודת תורפה.`,
    titleEn: 'The story behind YouTube Buffering',
    categoryEn: 'True Story',
    contentEn: `In 2022, Cloudflare had a failure that took down 19% of the internet. How? A BGP routing bug.

BGP (Border Gateway Protocol) is the protocol that decides how traffic flows between ISPs. Cloudflare sent a wrong prefix — routers around the world got a wrong instruction on where to send traffic.

The result: Discord, Shopify, Twitch, Teams — all went down. 19 minutes of chaos.

What we learned: the internet is a network of mutual trust. BGP does not verify — it just trusts everyone. This is strength (everyone is connected) but also a weak point.`
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

הלקח: פרוטוקול IP הוא רק שפה — הוא יכול לרוץ על כל medium. WiFi, Fiber, Ethernet... ויונים! 🕊️`,
    titleEn: 'Internet with pigeons — RFC 1149',
    categoryEn: 'Weird but true',
    contentEn: `In 1990, RFC 1149 was published — "Standard for the Transmission of IP Datagrams on Avian Carriers" (sending IP over birds).

In 2001, a group in Norway actually did it: 9 IP packets were sent on 9 pigeons over 5 km. Each pigeon carried a microSD with the data visible on its back.

Results:
- 4 out of 9 packets arrived (56% packet loss)
- Latency: about 3,000 seconds (50 minutes)
- Bandwidth: ~2.27 MB (the SD it carried)

The lesson: the IP protocol is just a language — it can run on any medium. WiFi, Fiber, Ethernet... and pigeons!`
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

הכבלים מוחזקים על ידי קונסורציום של חברות כמו Google, Meta, Amazon. Google בנתה את כבל Curie — 10,500 ק"מ בין ארה"ב לצ'ילה! 🌊`,
    titleEn: 'The undersea cables that hold the internet',
    categoryEn: 'Infrastructure',
    contentEn: `99% of international communication goes through undersea fiber optic cables. Not satellites — cables.

5 main cables cross the Mediterranean Sea and connect Israel to Europe and the US. One cable = tens of Terabits/sec.

In 2022, three undersea cables were damaged near Madagascar — probably a ship anchor. East Africa lost 50% of its internet connection.

The Sea-Me-We cable goes from Israel all the way to Singapore. Its bandwidth: 30+ Tbps.

The cables are maintained by a group of companies like Google, Meta, Amazon. Google built the Curie cable — 10,500 km between the US and Chile!`
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

כל ה-handshake = פחות מ-100ms. HTTPS אמנם מוסיף overhead — אבל HTTP/2 ו-TLS 1.3 הפחיתו אותו לאפסיים.`,
    titleEn: 'How HTTPS works — simply',
    categoryEn: 'Security',
    contentEn: `When you see the lock icon in the browser — what exactly happens behind the scenes?

1. Browser sends "Client Hello" with TLS versions it supports
2. Server sends "Server Hello" + Certificate (with public key)
3. Browser checks: "Is this really Google?" — Certificate Authority confirms
4. Key Exchange: both sides calculate a session key (Diffie-Hellman)
5. Now all communication is encrypted with a symmetric key

The amazing part: Key Exchange happens without sending the key! DH lets two sides reach the same key without sending it. Mathematical magic!

The whole handshake = less than 100ms. HTTPS does add overhead — but HTTP/2 and TLS 1.3 reduced it to almost zero.`
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

הבעיה: constellation עם 5,000 לוויינים = בעיה אסטרונומית. Astronomers מתלוננים על זיהום אור. SpaceX ניסתה Darksat — לוויין עם ציפוי מחשיך.`,
    titleEn: 'How Starlink changed satellite internet',
    categoryEn: 'Technology',
    contentEn: `Traditional satellites (GEO) operate at 35,786 km from Earth. Latency: 600ms+. Unusable for gaming.

SpaceX launched 5,000+ satellites at only 550 km (LEO). Latency: 20-40ms! Almost like cable.

How is this possible? Short distance = short time for light. c=300,000 km/s, 550km x 2 = ~3.7ms for distance alone. The rest of the latency comes from processing.

Result: satellite internet that competes with fiber in remote areas. Islands, deserts, ships — everything is connected.

The problem: a constellation of 5,000 satellites = an astronomical issue. Astronomers complain about light pollution. SpaceX tried Darksat — a satellite with a darkening coating.`
  }
]
