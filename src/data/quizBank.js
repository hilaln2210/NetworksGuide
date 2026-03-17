/**
 * בנק שאלות לחידון הרשתות
 * כל שאלה: { q, correct, choices: [4 options], explanation }
 */

export const quizBank = {
  1: [
    {
      q: "מה ההבדל בין IP לבין פורט?",
      correct: "IP מזהה מחשב ברשת, פורט מזהה שירות/תוכנה על אותו מחשב",
      choices: [
        "IP מזהה מחשב ברשת, פורט מזהה שירות/תוכנה על אותו מחשב",
        "IP מזהה שירות, פורט מזהה מחשב",
        "שניהם מזהים מחשבים, ההבדל הוא בגודל",
        "IP הוא לאינטרנט, פורט הוא לרשת מקומית בלבד"
      ],
      explanation: "אנלוגיה מעולה: IP = כתובת הבניין, פורט = מספר הדירה. אתם יכולים לחפש אותי בבניין 192.168.1.1 דירה 443 (HTTPS) 😄"
    },
    {
      q: "מה עושה פקודת ping?",
      correct: "שולחת בקשת הד לכתובת IP ומודדת זמן תגובה",
      choices: [
        "שולחת בקשת הד לכתובת IP ומודדת זמן תגובה",
        "מתרגמת שם דומיין לכתובת IP",
        "מציגה את מסלול החבילה ברשת",
        "פותחת חיבור TCP עם שרת"
      ],
      explanation: "ping שולח חבילת ICMP ומחכה לתגובה. אם השרת עונה — הוא חי! הזמן בms מראה כמה 'רחוק' הוא ממך 🏓"
    },
    {
      q: "מה עושה DNS?",
      correct: "מתרגם שם דומיין (כמו google.com) לכתובת IP",
      choices: [
        "מתרגם שם דומיין (כמו google.com) לכתובת IP",
        "מצפין את התקשורת בין לקוח לשרת",
        "מנהל חיבורי TCP ומבטיח הגעת חבילות",
        "מקצה כתובות IP לפי בקשה"
      ],
      explanation: "DNS = ספר הטלפונים של האינטרנט. אנחנו זוכרים 'google.com', המחשב צריך '142.250.185.206'. DNS עושה את ה-lookup 📖"
    },
    {
      q: "מה זה traceroute?",
      correct: "כלי שמציג את כל 'הקפיצות' (hops) שחבילה עוברת עד ליעד",
      choices: [
        "כלי שמציג את כל 'הקפיצות' (hops) שחבילה עוברת עד ליעד",
        "כלי שבודק אם פורט מסוים פתוח",
        "כלי שמציג את כתובות ה-IP ברשת המקומית",
        "כלי שמנתח מצב חיבור ה-WiFi"
      ],
      explanation: "traceroute מגלה ש'הדרך' מהמחשב שלך לשרת באמריקה עוברת דרך 15-20 נתבים. מדהים שמידע עובר כל כך רחוק תוך פחות משנייה! 🌍"
    },
    {
      q: "כתובת IP תקינה מבין האפשרויות הבאות היא:",
      correct: "192.168.1.255",
      choices: [
        "192.168.1.255",
        "300.168.1.1",
        "192.168.1",
        "192:168:1:1"
      ],
      explanation: "IPv4 = 4 בתים, כל אחד 0-255. 300 לא תקין! הפרדה בנקודות (.) לא נקודותיים (:) — זה IPv6 😉"
    },
    {
      q: "מי הוא 'לקוח' ומי 'שרת' כשאת פותחת את Gmail?",
      correct: "הדפדפן שלך = לקוח, שרתי Google = שרת",
      choices: [
        "הדפדפן שלך = לקוח, שרתי Google = שרת",
        "שרתי Google = לקוח, הדפדפן שלך = שרת",
        "שניהם לקוחות של ספקית האינטרנט",
        "תלוי אם שולחים או מקבלים מייל"
      ],
      explanation: "הלקוח תמיד מתחיל את הבקשה. את שולחת 'תני לי מיילים' — הדפדפן = לקוח. Google עונה לבקשה — היא השרת ✉️"
    }
  ],

  2: [
    {
      q: "מה ההבדל בין TCP לבין UDP?",
      correct: "TCP מבטיח הגעת חבילות בסדר, UDP מהיר יותר אך לא מבטיח",
      choices: [
        "TCP מבטיח הגעת חבילות בסדר, UDP מהיר יותר אך לא מבטיח",
        "TCP מוצפן, UDP לא מוצפן",
        "TCP לרשתות מקומיות, UDP לאינטרנט",
        "TCP לטקסט, UDP לוידאו בלבד"
      ],
      explanation: "TCP = משלוח עם אישור קבלה. UDP = גלויה — שלחת ואתה מקווה שתגיע. Zoom, Discord, gaming משתמשים ב-UDP — עדיף frame חסר מאשר עיכוב. Netflix משתמש ב-TCP (DASH) — עדיף buffer קצר על שגיאות 🎬"
    },
    {
      q: "מה קורה ב-TCP Handshake?",
      correct: "לקוח שולח SYN, שרת עונה SYN-ACK, לקוח עונה ACK",
      choices: [
        "לקוח שולח SYN, שרת עונה SYN-ACK, לקוח עונה ACK",
        "לקוח שולח ACK, שרת עונה SYN, לקוח עונה FIN",
        "שרת שולח SYN, לקוח עונה ACK, שרת עונה FIN",
        "שני הצדדים שולחים SYN בו-זמנית ואז ACK"
      ],
      explanation: "SYN = 'היי, אפשר לדבר?' | SYN-ACK = 'כן! ואני גם רוצה לדבר!' | ACK = 'אחלה, נתחיל!' 🤝 3 צעדים = 3-way handshake"
    },
    {
      q: "מה תפקיד ה-Socket בתכנות רשתות?",
      correct: "ממשק תכנותי שמאפשר לתוכנה לשלוח ולקבל נתונים דרך הרשת",
      choices: [
        "ממשק תכנותי שמאפשר לתוכנה לשלוח ולקבל נתונים דרך הרשת",
        "שקע פיזי בגב המחשב לחיבור כבל רשת",
        "פרוטוקול הצפנה לאבטחת תקשורת",
        "שכבת האפליקציה במודל TCP/IP"
      ],
      explanation: "Socket = 'שקע תכנותי'. כשאת כותבת קוד שמתחבר לשרת, את יוצרת Socket ומתחברת ל-IP+Port. כמו תקע בחשמל 🔌"
    },
    {
      q: "איזה פורט מוקצה לשירות HTTPS?",
      correct: "443",
      choices: ["443", "80", "22", "3306"],
      explanation: "HTTP = 80, HTTPS = 443 (מוצפן), SSH = 22, MySQL = 3306. חשוב לזכור! 🔒 כשאת רואה https:// הדפדפן מתחבר לפורט 443 אוטומטית"
    },
    {
      q: "מה ההבדל בין bind() ל-connect() בתכנות Sockets?",
      correct: "bind() מגדיר פורט להאזנה (שרת), connect() מתחבר לשרת (לקוח)",
      choices: [
        "bind() מגדיר פורט להאזנה (שרת), connect() מתחבר לשרת (לקוח)",
        "bind() מצפין חיבור, connect() פותח חיבור",
        "שניהם פועלים אותו דבר, רק בסדר שונה",
        "bind() לTCP, connect() ל-UDP"
      ],
      explanation: "השרת: bind() + listen() + accept() = 'אני מחכה בפורט 8080'. הלקוח: connect() = 'אני מתחבר לשרת'. כמו עסק שפותח דלת לקוחות 🏪"
    }
  ],

  3: [
    {
      q: "כמה שכבות יש במודל TCP/IP (שחוקרים ב-Wireshark)?",
      correct: "5 שכבות: פיזית, קו, רשת, תעבורה, אפליקציה",
      choices: [
        "5 שכבות: פיזית, קו, רשת, תעבורה, אפליקציה",
        "7 שכבות: פיזית, קו, רשת, תעבורה, session, presentation, אפליקציה",
        "4 שכבות: קו, רשת, תעבורה, אפליקציה",
        "3 שכבות: חומרה, תוכנה, אפליקציה"
      ],
      explanation: "מודל TCP/IP הפשוט = 5 שכבות (OSI = 7). בקורס הזה עובדים עם 5. זכרי: 'כל פרצופון תמיד אוכל אבטיח' = קו, רשת, תעבורה, אפליקציה 🍉"
    },
    {
      q: "מה Wireshark מאפשר לעשות?",
      correct: "לתפוס ולנתח חבילות נתונים שעוברות בממשק הרשת",
      choices: [
        "לתפוס ולנתח חבילות נתונים שעוברות בממשק הרשת",
        "לשלוח חבילות מותאמות אישית לרשת",
        "לנהל כתובות IP ברשת מקומית",
        "להגן על הרשת מפני פריצות"
      ],
      explanation: "Wireshark הוא 'מיקרוסקופ' של הרשת — תופס כל חבילה ומציגה בפירוט מלא. מפסיקות הצגה של כל שכבה, כל header, כל byte 🔬"
    },
    {
      q: "מה זה Encapsulation (אנקפסולציה)?",
      correct: "תהליך עטיפת הנתונים ב-header של כל שכבה בדרך לשליחה",
      choices: [
        "תהליך עטיפת הנתונים ב-header של כל שכבה בדרך לשליחה",
        "תהליך הצפנת הנתונים לפני שליחה",
        "תהליך חלוקת הנתונים לחבילות קטנות",
        "תהליך דחיסת הנתונים לחסכון ברוחב פס"
      ],
      explanation: "כמו מכתב: תוכן → מעטפה → שק דואר → משאית. כל שכבה 'עוטפת' את של שכבת מעליה. Decapsulation = לפתוח שכבות בהגעה 📦"
    },
    {
      q: "איזה header מוסיפה שכבת הרשת?",
      correct: "כתובות IP מקור ויעד",
      choices: [
        "כתובות IP מקור ויעד",
        "כתובות MAC מקור ויעד",
        "פורטים מקור ויעד",
        "שם דומיין מקור ויעד"
      ],
      explanation: "כל שכבה מוסיפה את ה-header שלה: שכבת תעבורה → פורטים | שכבת רשת → IP | שכבת קו → MAC. כל שכבה 'דואגת' לתחום שלה 🎯"
    },
    {
      q: "מה ההבדל בין PDU בשכבת התעבורה לבין שכבת הרשת?",
      correct: "שכבת תעבורה: Segment. שכבת רשת: Packet. שכבת קו: Frame. שכבה פיזית: Bit",
      choices: [
        "שכבת תעבורה: Segment. שכבת רשת: Packet. שכבת קו: Frame. שכבה פיזית: Bit",
        "כולן נקראות Packet",
        "שכבת תעבורה: Frame, שכבת רשת: Segment",
        "PDU הוא מונח שקיים רק ב-OSI, לא במודל חמש שכבות"
      ],
      explanation: "PDU (Protocol Data Unit): שם ה'חבילה' בכל שכבה. 5-Application: Message/Data. 4-Transport: Segment (TCP) / Datagram (UDP). 3-Network: Packet. 2-Data Link: Frame. 1-Physical: Bit/Symbol. Encapsulation: כל שכבה עוטפת את ה-PDU של שכבה מעליה עם header משלה."
    },
    {
      q: "מה ה-Wireshark filter להצגת HTTP traffic בלבד?",
      correct: "http",
      choices: [
        "http",
        "port == 80",
        "tcp.port == 80",
        "protocol == HTTP"
      ],
      explanation: "http מסנן Layer 7 HTTP traffic. tcp.port == 80 מציג הכל על פורט 80 (כולל TLS/encrypted). http.request מציג רק requests. http.response.code == 200 מציג רק תגובות מוצלחות. לHTTPS (מוצפן): tls מציג handshake אבל לא תוכן."
    },
    {
      q: "מה Decapsulation בקבלת חבילה?",
      correct: "הסרת headers בסדר הפוך — שכבת הקישור קודם, אחרי כן IP, אחר כך TCP, ולבסוף הנתונים לאפליקציה",
      choices: [
        "הסרת headers בסדר הפוך — שכבת הקישור קודם, אחרי כן IP, אחר כך TCP, ולבסוף הנתונים לאפליקציה",
        "פתיחת החבילה כולה בבת אחת",
        "Decapsulation מתבצע רק ב-router",
        "הוספת header נוסף לכל שכבה"
      ],
      explanation: "Decapsulation = Encapsulation הפוך. ה-NIC קורא Frame (L2 header), מוציא Packet, מעביר ל-IP stack שמוציא Segment, מעביר ל-TCP/UDP שמוציא Data ומעביר לאפליקציה. כל שכבה בודקת שה-header שלה תקין לפני שמעבירה הלאה."
    }
  ],

  4: [
    {
      q: "מה זה HTTP ובאיזו שכבה הוא פועל?",
      correct: "פרוטוקול להעברת דפי אינטרנט, שכבת האפליקציה",
      choices: [
        "פרוטוקול להעברת דפי אינטרנט, שכבת האפליקציה",
        "פרוטוקול להצפנת תקשורת, שכבת התעבורה",
        "פרוטוקול לניהול כתובות IP, שכבת הרשת",
        "פרוטוקול להעברת קבצים, שכבת הקו"
      ],
      explanation: "HTTP = HyperText Transfer Protocol. כשאת פותחת אתר — הדפדפן שולח GET /index.html ומקבל HTML בחזרה. זה הכל HTTP ✨"
    },
    {
      q: "מה ההבדל בין GET ל-POST?",
      correct: "GET מביא מידע מהשרת, POST שולח מידע לשרת",
      choices: [
        "GET מביא מידע מהשרת, POST שולח מידע לשרת",
        "GET מוצפן, POST לא מוצפן",
        "GET לדפדפן, POST לאפליקציות מובייל",
        "GET מהיר יותר תמיד, POST אמין יותר"
      ],
      explanation: "GET = 'תני לי את הדף'. POST = 'הנה הנתונים שמילאתי בטופס'. כשאת נרשמת לאתר — זה POST עם שם משתמש וסיסמה 📝"
    },
    {
      q: "מה קוד תגובה 404 אומר?",
      correct: "הדף/משאב המבוקש לא נמצא בשרת",
      choices: [
        "הדף/משאב המבוקש לא נמצא בשרת",
        "שגיאה פנימית בשרת",
        "הבקשה הצליחה",
        "הגישה אסורה (חסר הרשאה)"
      ],
      explanation: "קודי HTTP: 2xx = הצלחה ✅ | 3xx = redirect | 4xx = שגיאת לקוח (404 = not found, 403 = forbidden) | 5xx = שגיאת שרת. 200 = OK המפורסם! 🎯"
    },
    {
      q: "מה זה SMTP?",
      correct: "פרוטוקול לשליחת אימיילים",
      choices: [
        "פרוטוקול לשליחת אימיילים",
        "פרוטוקול להעברת קבצים",
        "פרוטוקול לתקשורת בזמן אמת",
        "פרוטוקול לניהול רשת מרחוק"
      ],
      explanation: "SMTP = Simple Mail Transfer Protocol (פורט 25/587). כשאת שולחת מייל מ-Gmail, הוא עובר דרך שרת SMTP. קבלת מייל = POP3/IMAP 📧"
    },
    {
      q: "מה ההבדל בין HTTP/1.1 ל-HTTP/2?",
      correct: "HTTP/2: multiplexing (מספר requests בחיבור אחד), header compression, server push. HTTP/1.1: request אחד בכל פעם (pipelining נשבר)",
      choices: [
        "HTTP/2: multiplexing (מספר requests בחיבור אחד), header compression, server push. HTTP/1.1: request אחד בכל פעם (pipelining נשבר)",
        "HTTP/2 פועל על UDP, HTTP/1.1 על TCP",
        "ההבדל רק במהירות — HTTP/2 מהיר יותר",
        "HTTP/2 דורש HTTPS, HTTP/1.1 לא"
      ],
      explanation: "HTTP/1.1: כל resource = TCP connection חדש (או pipeline שנשבר בפועל). 6 connections מקסימום לdomain. HTTP/2: binary framing, multiplexing — עשרות streams בchיבור אחד. Header Compression (HPACK) חוסך bandwidth. Server Push: שרת שולח CSS/JS לפני שביקשו. HOL Blocking עדיין קיים ב-TCP layer."
    },
    {
      q: "מה קוד HTTP 301 לעומת 302?",
      correct: "301: Moved Permanently — דפדפן ו-cache שומרים. 302: Found (Temporary Redirect) — לא נשמר ב-cache",
      choices: [
        "301: Moved Permanently — דפדפן ו-cache שומרים. 302: Found (Temporary Redirect) — לא נשמר ב-cache",
        "301: Server Error, 302: Client Error",
        "שניהם זהים — רק שמות שונים",
        "301: redirect ל-HTTPS, 302: redirect ל-HTTP"
      ],
      explanation: "HTTP Status codes: 1xx=Informational, 2xx=Success (200 OK, 201 Created), 3xx=Redirect (301 Permanent, 302 Temp, 304 Not Modified), 4xx=Client Error (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found), 5xx=Server Error (500 Internal, 503 Unavailable). SEO: Google שולח PageRank דרך 301, לא 302."
    },
    {
      q: "מה ההבדל בין GET ל-POST בHTTP?",
      correct: "GET: פרמטרים ב-URL, נשמר ב-cache ו-history, לא לשינוי נתונים. POST: גוף הבקשה, לא ב-URL, לשליחת/שינוי נתונים",
      choices: [
        "GET: פרמטרים ב-URL, נשמר ב-cache ו-history, לא לשינוי נתונים. POST: גוף הבקשה, לא ב-URL, לשליחת/שינוי נתונים",
        "GET מהיר יותר מ-POST בכל מקרה",
        "POST מוצפן, GET לא",
        "ההבדל רק בגודל — POST מאפשר נתונים גדולים"
      ],
      explanation: "HTTP Methods: GET=קריאה (idempotent, cacheable). POST=יצירה/שליחה. PUT=עדכון מלא. PATCH=עדכון חלקי. DELETE=מחיקה. HEAD=כמו GET אבל בלי body (לבדיקת header בלבד). OPTIONS=בדיקת methods מאושרים (CORS preflight). REST API מיישם CRUD על HTTP Methods."
    }
  ],

  5: [
    {
      q: "מה מיוחד ב-Scapy?",
      correct: "ספריית Python שמאפשרת לבנות ולשלוח חבילות רשת מותאמות אישית",
      choices: [
        "ספריית Python שמאפשרת לבנות ולשלוח חבילות רשת מותאמות אישית",
        "כלי ויזואלי לניתוח חבילות כמו Wireshark",
        "שרת DNS שרץ על Python",
        "ספריית הצפנה לאבטחת תקשורת"
      ],
      explanation: "Scapy = 'לגו של רשתות'. אפשר לבנות חבילה שכבה-שכבה: IP()/TCP()/Raw('hello'). מדהים לבדיקות ולהבנת פרוטוקולים 🧱"
    },
    {
      q: "מה עושה Scapy בפקודה: IP(dst='8.8.8.8')/ICMP()?",
      correct: "בונה חבילת ICMP (ping) עם כתובת יעד 8.8.8.8",
      choices: [
        "בונה חבילת ICMP (ping) עם כתובת יעד 8.8.8.8",
        "שולח DNS query לשרת 8.8.8.8",
        "פותחת חיבור TCP לשרת Google",
        "מבצעת traceroute לכתובת 8.8.8.8"
      ],
      explanation: "8.8.8.8 = DNS הציבורי של Google. IP(dst=...) = header שכבת רשת. ICMP = פרוטוקול ping. /, כמו קו-נטה = 'שכב מעל' 🏗️"
    },
    {
      q: "מה Scapy ומה יתרונו על Wireshark?",
      correct: "Scapy = Python library לבניה ושליחה של packets. Wireshark רק מנתח, Scapy גם יוצר ושולח",
      choices: [
        "Scapy = Python library לבניה ושליחה של packets. Wireshark רק מנתח, Scapy גם יוצר ושולח",
        "Scapy הוא GUI, Wireshark CLI",
        "Scapy עובד רק על Linux",
        "Scapy הוא replacement ל-Wireshark"
      ],
      explanation: "Scapy: Python library שמאפשרת: 1) בניית packets שכבה-שכבה (Ether/IP/TCP/'data'), 2) שליחה (send/sendp), 3) sniffing (sniff), 4) בדיקת תגובות (sr1). שימושים: penetration testing, network research, פרוטוקולים חדשים. Wireshark = passive sniffer בלבד. Scapy = active tool."
    },
    {
      q: "כיצד בונים TCP SYN packet ב-Scapy?",
      correct: "IP(dst='target')/TCP(dport=80, flags='S')",
      choices: [
        "IP(dst='target')/TCP(dport=80, flags='S')",
        "Packet(TCP, SYN, dst='target', port=80)",
        "scapy.send(SYN, dst='target', port=80)",
        "TCP.syn(dst='target', dport=80)"
      ],
      explanation: "Scapy syntax: שכבות מחוברות עם /. IP(dst=...) = Layer 3. TCP(flags='S') = SYN flag. flags='SA' = SYN-ACK. flags='A' = ACK. flags='R' = RST. flags='F' = FIN. sr1() שולח ומקבל תגובה. sniff(filter='tcp port 80', count=10) מלכד 10 packets."
    },
    {
      q: "מה lfilter ב-sniff של Scapy?",
      correct: "פונקציה Python לסינון packets בזמן real-time — רק packets שהפונקציה מחזירה True נשמרות",
      choices: [
        "פונקציה Python לסינון packets בזמן real-time — רק packets שהפונקציה מחזירה True נשמרות",
        "BPF filter string כמו ב-tcpdump",
        "מספר ה-packets לצלם",
        "שם ה-interface לנטר"
      ],
      explanation: "sniff(lfilter=lambda p: p.haslayer(TCP) and p[TCP].flags == 'S') — מלכד רק TCP SYN. BPF filter (filter='tcp') נשלח לkernel, lfilter רץ ב-Python. BPF מהיר יותר לסינון בסיסי, lfilter מאפשר לוגיקה מורכבת."
    }
  ],

  6: [
    {
      q: "מה ההבדל בין TCP לUDP בשכבת התעבורה?",
      correct: "TCP = אמין + סדר, UDP = מהיר + ללא הבטחה",
      choices: [
        "TCP = אמין + סדר, UDP = מהיר + ללא הבטחה",
        "TCP לשרתים, UDP לנייד",
        "TCP מוצפן, UDP גלוי",
        "TCP ישן, UDP מודרני"
      ],
      explanation: "אנלוגיה: TCP = שליח עם חתימה ('קיבלת?') | UDP = עיתון שמושלך לדלת. Zoom, Discord, gaming, DNS = UDP. HTTP, HTTPS, SSH, FTP = TCP 🎮"
    },
    {
      q: "מה זה Three-Way Handshake?",
      correct: "תהליך פתיחת חיבור TCP: SYN → SYN-ACK → ACK",
      choices: [
        "תהליך פתיחת חיבור TCP: SYN → SYN-ACK → ACK",
        "תהליך סגירת חיבור TCP: FIN → FIN-ACK → RST",
        "תהליך אימות זהות בפרוטוקול HTTPS",
        "תהליך קביעת גודל חבילה מיטבי"
      ],
      explanation: "3-way handshake = לחיצת יד של שלושה שלבים. אחרי זה — החיבור פתוח ואפשר לשלוח נתונים. סגירה גם מורכבת: FIN → ACK → FIN → ACK 🤝"
    },
    {
      q: "מה זה Flow Control ב-TCP?",
      correct: "מנגנון שמונע ממפלט לשלוח נתונים מהר מדי ולהציף את המקלט",
      choices: [
        "מנגנון שמונע ממפלט לשלוח נתונים מהר מדי ולהציף את המקלט",
        "מנגנון הצפנת נתונים בזמן שליחה",
        "מנגנון ניתוב חבילות בין נתבים",
        "מנגנון זיהוי שגיאות בנתונים"
      ],
      explanation: "Flow Control = 'רגע, אני לא מספיקה לעבד!' הנמען מודיע למפלט מה ה-Window Size שלו. כמו שאת אומרת לשיחה 'דברי לאט יותר' 🐌"
    },
    {
      q: "למה TCP גדול יותר ב-overhead מ-UDP?",
      correct: "TCP header = 20-60 bytes, UDP = 8 bytes. TCP שומר state, ACK, sequencing — UDP שולח ושוכח",
      choices: [
        "TCP header = 20-60 bytes, UDP = 8 bytes. TCP שומר state, ACK, sequencing — UDP שולח ושוכח",
        "TCP מוצפן, UDP לא — לכן גדול יותר",
        "TCP ו-UDP בגודל זהה",
        "UDP גדול יותר מ-TCP"
      ],
      explanation: "TCP header (20 bytes minimum): Src/Dst port (4), Sequence (4), Acknowledgment (4), Flags+Window (4), Checksum+Urgent (4), Options (עד 40). UDP header: Src port (2), Dst port (2), Length (2), Checksum (2) = 8 bytes. שימוש ב-UDP: streaming, DNS, gaming, VoIP — כי latency חשוב יותר מdeadline. TCP overhead = ~25% של packet קטן."
    },
    {
      q: "מה TIME_WAIT state ב-TCP?",
      correct: "לאחר FIN-ACK, connection עדיין פתוח 2×MSL (2 דקות) כדי שpackets מאוחרים לא יבלבלו connection חדש",
      choices: [
        "לאחר FIN-ACK, connection עדיין פתוח 2×MSL (2 דקות) כדי שpackets מאוחרים לא יבלבלו connection חדש",
        "TCP מחכה ל-ACK אחרון לפני שולח FIN",
        "שרת בעיכוב גבוה נכנס ל-TIME_WAIT",
        "TIME_WAIT = חיבור שנכשל"
      ],
      explanation: "TCP states: LISTEN → SYN_RCVD → ESTABLISHED → FIN_WAIT_1 → FIN_WAIT_2 → TIME_WAIT → CLOSED. TIME_WAIT: 2×MSL (Maximum Segment Lifetime = 60-120 שניות). בעיה: שרת עם אלפי connections יכול לתגמר ports. פתרון: SO_REUSEADDR socket option, TCP_QUICKACK, kernel tuning."
    }
  ],

  7: [
    {
      q: "מה תפקיד שכבת הרשת?",
      correct: "ניתוב (routing) חבילות בין רשתות שונות לפי כתובות IP",
      choices: [
        "ניתוב (routing) חבילות בין רשתות שונות לפי כתובות IP",
        "העברת frames בין מחשבים ברשת מקומית לפי MAC",
        "ניהול חיבורים אמינים בין יישומים",
        "המרת אותות דיגיטליים לאנלוגיים"
      ],
      explanation: "שכבת הרשת = 'הנווט' — היא מחליטה דרך איזה נתב לשלוח. IP הוא הפרוטוקול הכי מפורסם כאן. נתבים (Routers) פועלים בשכבה זו 🗺️"
    },
    {
      q: "מה זה NAT?",
      correct: "Network Address Translation – מאפשר למחשבים רבים לשתף כתובת IP אחת ציבורית",
      choices: [
        "Network Address Translation – מאפשר למחשבים רבים לשתף כתובת IP אחת ציבורית",
        "Network Access Token – אסימון גישה לרשת",
        "New Address Table – טבלת ניתוב דינמית",
        "Node Authentication Technology – אימות מכשירים"
      ],
      explanation: "בבית יש לך IP פנימי (192.168.x.x) וIP ציבורי אחד. NAT ב-router 'מתרגם' — מאחד לרבים ובחזרה. זה למה אין מספיק IPv4! 🏠"
    },
    {
      q: "מה ההבדל בין IP פנימי לציבורי?",
      correct: "IP פנימי (192.168.x.x) לרשת מקומית, ציבורי — ייחודי באינטרנט",
      choices: [
        "IP פנימי (192.168.x.x) לרשת מקומית, ציבורי — ייחודי באינטרנט",
        "IP פנימי מוצפן, ציבורי גלוי",
        "IP פנימי לשרתים, ציבורי למחשבים אישיים",
        "IP פנימי קבוע, ציבורי משתנה"
      ],
      explanation: "כשאת שולחת בקשה לגוגל — ה-router שם את הIP הציבורי שלו. גוגל לא יודעת שיש לך IP 192.168.1.5. הפרטיות היחידה שיש לנו 🕵️"
    },
    {
      q: "איזה כתובת IP היא 'ברדקאסט' (broadcast) ברשת?",
      correct: "כתובת שמסתיימת ב-255 בחלק המארח, למשל 192.168.1.255",
      choices: [
        "כתובת שמסתיימת ב-255 בחלק המארח, למשל 192.168.1.255",
        "127.0.0.1 — כתובת loopback",
        "0.0.0.0 — כתובת ברירת מחדל",
        "255.0.0.0 — כתובת הרשת"
      ],
      explanation: "Broadcast = שולח לכולם! 192.168.1.255 מגיעה לכל מכשיר ברשת 192.168.1.x. 127.0.0.1 = localhost = 'שלח לעצמי' 🔊"
    },
    {
      q: "מה ההבדל בין Router לבין Switch?",
      correct: "Router = L3, מנתב בין רשתות שונות לפי IP. Switch = L2, מעביר פריימים בתוך אותה רשת לפי MAC",
      choices: [
        "Router = L3, מנתב בין רשתות שונות לפי IP. Switch = L2, מעביר פריימים בתוך אותה רשת לפי MAC",
        "Router מהיר יותר מ-Switch",
        "Switch מחבר רשתות, Router מחבר מכשירים",
        "אין הבדל — מונחים שונים לאותו דבר"
      ],
      explanation: "Switch L2: לומד MAC addresses, מעביר frames בתוך VLAN. Router L3: מחזיק routing table, מבצע IP routing בין subnets. Layer 3 switch: שניהם — routing בין VLANs. Hub (מיושן): L1, broadcast לכולם. Firewall: L3-L7, security policies. Default Gateway = ה-router שהמחשב שולח דרכו ל-outside world."
    },
    {
      q: "מה TTL ב-IP ואיך הוא מונע routing loops?",
      correct: "Time to Live — כל router מוריד ב-1. כשמגיע ל-0, packet נזרק ונשלח ICMP Time Exceeded",
      choices: [
        "Time to Live — כל router מוריד ב-1. כשמגיע ל-0, packet נזרק ונשלח ICMP Time Exceeded",
        "TTL = כמה שניות החבילה תקפה",
        "TTL נקבע ע\"י היעד, לא ה-sender",
        "TTL = Transport Transfer Layer"
      ],
      explanation: "TTL נוצר כדי למנוע routing loops. Linux default = 64, Windows = 128, Cisco = 255. traceroute/tracert משתמש ב-TTL: שולח packet עם TTL=1, מקבל ICMP, TTL=2, וכו'. כל hop מחזיר ICMP Time Exceeded עם כתובת ה-IP שלו — כך רואים מסלול."
    },
    {
      q: "מה Longest Prefix Match ב-IP routing?",
      correct: "Router בוחר את ה-route הספציפי ביותר — /24 מנצח /16 גם אם שניהם מכסים את ה-destination IP",
      choices: [
        "Router בוחר את ה-route הספציפי ביותר — /24 מנצח /16 גם אם שניהם מכסים את ה-destination IP",
        "Router בוחר את ה-route עם המשקל הנמוך ביותר",
        "Router בוחר לפי סדר ה-routing table",
        "כל routes שווים — בוחרים בrandom"
      ],
      explanation: "Longest Prefix Match: destination 192.168.1.50. Routing table: 192.168.0.0/16 (via Router A), 192.168.1.0/24 (via Router B), 0.0.0.0/0 (default, via Router C). Router בוחר /24 כי הוא הכי ספציפי. Pakistan Telecom 2008: הזריק /24 → ניצח את ה-/22 המקורי של YouTube → routing hijack."
    }
  ],

  8: [
    {
      q: "מה ההבדל בין Switch לבין Hub?",
      correct: "Switch שולח frame ליעד הספציפי לפי MAC, Hub מפיץ לכולם",
      choices: [
        "Switch שולח frame ליעד הספציפי לפי MAC, Hub מפיץ לכולם",
        "Switch עובד בשכבת הרשת, Hub בשכבת הקו",
        "Switch אלחוטי, Hub קווי",
        "Switch מהיר יותר רק כי יקר יותר"
      ],
      explanation: "Hub = צועק לכולם בחדר. Switch = שולח מכתב ספציפי לאדם הנכון. ב-2024 אין כמעט Hub — הוא הרג את הביצועים 🎯"
    },
    {
      q: "מה זה כתובת MAC?",
      correct: "כתובת פיזית ייחודית שמזהה כרטיס רשת, בן 6 בתים בהקס",
      choices: [
        "כתובת פיזית ייחודית שמזהה כרטיס רשת, בן 6 בתים בהקס",
        "כתובת לוגית שמוקצית על ידי DHCP",
        "כתובת של שרת ה-DNS הראשי",
        "כתובת של המחשב ברשת הציבורית"
      ],
      explanation: "MAC = Media Access Control. נראית כך: AA:BB:CC:DD:EE:FF. שרופה ב-hardware, אבל ניתן לזייף (MAC spoofing)! אבא+אמא של הכתובות 🖥️"
    },
    {
      q: "מה תפקיד ה-ARP?",
      correct: "מוצא כתובת MAC של מכשיר בהינתן כתובת IP שלו",
      choices: [
        "מוצא כתובת MAC של מכשיר בהינתן כתובת IP שלו",
        "מקצה כתובות IP אוטומטית למכשירים",
        "מתרגם שמות דומיין לכתובות IP",
        "מאמת זהות משתמש ברשת"
      ],
      explanation: "ARP = Address Resolution Protocol. שואל: 'מי בעל IP 192.168.1.5?' — כולם שומעים, הנכון עונה עם ה-MAC שלו. ARP cache שומר את הטבלה 📋"
    },
    {
      q: "מה MAC address ומה שונה אותו מ-IP?",
      correct: "MAC = Layer 2, מזהה hardware ייחודי של NIC (48 bit). IP = Layer 3, כתובת לוגית שמשתנה לפי רשת",
      choices: [
        "MAC = Layer 2, מזהה hardware ייחודי של NIC (48 bit). IP = Layer 3, כתובת לוגית שמשתנה לפי רשת",
        "MAC ו-IP זהים — רק פורמט שונה",
        "MAC משתנה בכל חיבור, IP קבוע",
        "MAC = IPv6, IP = IPv4"
      ],
      explanation: "MAC (Media Access Control): 48 bits, XX:XX:XX:XX:XX:XX. 24 bits = OUI (Organizationally Unique Identifier) של יצרן (Intel, Cisco). 24 bits = מספר סידורי. MAC spoofing: ניתן לשנות בתוכנה. ARP: ממפה IP→MAC. Broadcast MAC: FF:FF:FF:FF:FF:FF. IP אדרסינג = logical (משתנה לפי רשת), MAC = physical (קבוע ב-hardware)."
    },
    {
      q: "מה Ethernet Frame structure?",
      correct: "Preamble | Dest MAC | Src MAC | EtherType | Payload (46-1500 bytes) | FCS",
      choices: [
        "Preamble | Dest MAC | Src MAC | EtherType | Payload (46-1500 bytes) | FCS",
        "Header | Data | Checksum בלבד",
        "Src IP | Dst IP | Src Port | Dst Port | Data",
        "Start | MAC | IP | TCP | Data | End"
      ],
      explanation: "Ethernet II Frame: Preamble (8B) לסנכרון, Dest MAC (6B), Src MAC (6B), EtherType (2B) — 0x0800=IPv4, 0x0806=ARP, 0x86DD=IPv6, Payload (46-1500 bytes), FCS (4B) CRC checksum. MTU=1500 bytes payload. Jumbo frames=9000 bytes (datacenter). VLAN tag (802.1Q) = 4 bytes נוספים."
    },
    {
      q: "מה ה-Broadcast Domain ומה Collision Domain?",
      correct: "Broadcast Domain: כל מי שמקבל ARP request / broadcast. Switch לא מפריד. Router כן. Collision Domain: כל מי שיכול להתנגש — Switch מפריד לפי port",
      choices: [
        "Broadcast Domain: כל מי שמקבל ARP request / broadcast. Switch לא מפריד. Router כן. Collision Domain: כל מי שיכול להתנגש — Switch מפריד לפי port",
        "שניהם זהים",
        "Hub מפריד broadcast, Switch לא",
        "Router לא מפריד broadcast domains"
      ],
      explanation: "Collision Domain: HUB = domain אחד. Switch = כל port = domain נפרד (Full Duplex). Broadcast Domain: Switch = domain אחד (כל הפורטים). Router = מפריד. VLAN = מפריד ב-software. רשת גדולה ללא VLANs = broadcast storm. טיפ: 1000 מכשירים בbroadcast domain אחד = CPU high מ-ARP floods."
    }
  ],

  9: [
    {
      q: "מה זה DHCP?",
      correct: "פרוטוקול שמקצה כתובות IP אוטומטית למכשירים ברשת",
      choices: [
        "פרוטוקול שמקצה כתובות IP אוטומטית למכשירים ברשת",
        "פרוטוקול הצפנה לתקשורת מאובטחת",
        "פרוטוקול לניתוב בין רשתות",
        "פרוטוקול לגיבוי נתוני רשת"
      ],
      explanation: "DHCP = שרת ה-'יצירת חשבון אוטומטית'. כשאת מתחברת ל-WiFi — DHCP מקצה לך IP, mask, gateway ו-DNS. אחרת הייית צריכה להגדיר ידנית! 🎰"
    },
    {
      q: "מה זה subnet mask?",
      correct: "מספר שמגדיר איזה חלק של כתובת IP הוא 'כתובת הרשת' ואיזה 'כתובת המארח'",
      choices: [
        "מספר שמגדיר איזה חלק של כתובת IP הוא 'כתובת הרשת' ואיזה 'כתובת המארח'",
        "סיסמה לאבטחת הרשת האלחוטית",
        "טווח הכתובות הזמינות ב-DHCP",
        "כתובת ה-gateway של הרשת"
      ],
      explanation: "255.255.255.0 = 24 ביטים לרשת, 8 ביטים למארח. /24 = 256 כתובות (254 שמישות). CIDR: 192.168.1.0/24. ציר ה-IP! 🎭"
    },
    {
      q: "מה Gratuitous ARP ולמה הוא גם שימושי וגם מסוכן?",
      correct: "ARP reply שנשלח ללא בקשה — שימושי לעדכון cache אחרי failover, מסוכן כי תוקף יכול לשלוח ולהרעיל ARP tables",
      choices: [
        "ARP reply שנשלח ללא בקשה — שימושי לעדכון cache אחרי failover, מסוכן כי תוקף יכול לשלוח ולהרעיל ARP tables",
        "ARP ל-IP שאינו קיים ברשת",
        "ARP request לבדיקת זמינות",
        "ARP עם TTL גבוה במיוחד"
      ],
      explanation: "Gratuitous ARP: device שולח ARP reply עם ה-IP שלו עצמו, ללא שנשאלה שאלה. שימוש לגיטימי: HSRP/VRRP failover (gateway חדש מכריז על עצמו), IP conflict detection, עדכון switches. שימוש זדוני: ARP Poisoning — שולח GARP עם IP של gateway אבל MAC של תוקף. DAI (Dynamic ARP Inspection) ב-switches מונע זאת."
    },
    {
      q: "מה ההבדל בין ARP ל-RARP?",
      correct: "ARP: IP → MAC (המשמש כיום). RARP (מיושן): MAC → IP — לפני DHCP, diskless stations ביקשו IP לפי MAC שלהם",
      choices: [
        "ARP: IP → MAC (המשמש כיום). RARP (מיושן): MAC → IP — לפני DHCP, diskless stations ביקשו IP לפי MAC שלהם",
        "ARP ל-IPv4, RARP ל-IPv6",
        "RARP = Reverse ARP = ARP להפסקת connection",
        "אין הבדל — RARP הוא שם ישן ל-ARP"
      ],
      explanation: "ARP (RFC 826, 1982): Who has IP X? Tell me your MAC. RARP (RFC 903, 1984): I'm MAC X, what's my IP? מיושן — הוחלף ע\\\"י BOOTP ואחר כך DHCP. IPv6 משתמש ב-NDP (Neighbor Discovery Protocol) במקום ARP — multicast, לא broadcast, ושולב עם ICMPv6."
    },
    {
      q: "כמה זמן ARP cache נשמר ו-מה קורה כשהוא מתרענן?",
      correct: "Linux: 60 שניות idle, 20 שניות stale לאחר מכן re-resolve. Windows: 15-45 שניות. TTL קצר = overhead, ארוך = פגיעות לshifting IPs",
      choices: [
        "Linux: 60 שניות idle, 20 שניות stale לאחר מכן re-resolve. Windows: 15-45 שניות. TTL קצר = overhead, ארוך = פגיעות לshifting IPs",
        "ARP cache לעולם לא מתרענן — נמחק רק ב-reboot",
        "כל הרשומות נמחקות כל 5 שניות",
        "ARP cache = 24 שעות כמו DNS TTL"
      ],
      explanation: "Linux: ip neigh show לצפייה. ip neigh flush all למחיקה. State: REACHABLE (verified), STALE (לא verified), DELAY (בדיקה), PROBE (שולח ARP), FAILED. ARP poisoning עובד כי cache מתקבל ממי שמגיב ראשון. arp -n (Linux/Mac), arp -a (Windows)."
    }
  ],

  10: [
    {
      q: "מה קורה בשכבה הפיזית?",
      correct: "המרת bits לאותות פיזיים (חשמל, אור, רדיו) ובחזרה",
      choices: [
        "המרת bits לאותות פיזיים (חשמל, אור, רדיו) ובחזרה",
        "הוספת header עם כתובות MAC",
        "הוספת header עם כתובות IP",
        "בדיקת שגיאות בנתונים"
      ],
      explanation: "השכבה הפיזית לא מבינה 'packets' — היא רק מעבירה 0 ו-1 כאותות. Ethernet = מתח חשמל | Fiber = פולסים של אור | WiFi = גלי רדיו ⚡"
    },
    {
      q: "מה ההבדל בין fiber optic לכבל נחושת?",
      correct: "Fiber = אור, נחושת = חשמל. Fiber מהיר יותר ועמיד להתערבות",
      choices: [
        "Fiber = אור, נחושת = חשמל. Fiber מהיר יותר ועמיד להתערבות",
        "Fiber זול יותר ולכן נפוץ יותר",
        "Fiber לתקשורת ים, נחושת ליבשה בלבד",
        "אין הבדל משמעותי בביצועים"
      ],
      explanation: "Fiber העובד במהירות האור (!) יכול להגיע לTerabits/sec. לא מושפע מ-EMI. הרבה יקר יותר להתקנה. כבלי ים-בינלאומיים = כולם fiber 🌊"
    },
    {
      q: "מה תהליך DHCP DORA?",
      correct: "Discover (broadcast) → Offer (server) → Request (client) → Acknowledge (server) — מעניק IP, subnet, gateway, DNS",
      choices: [
        "Discover (broadcast) → Offer (server) → Request (client) → Acknowledge (server) — מעניק IP, subnet, gateway, DNS",
        "DNS → OFFER → REQUEST → ACK",
        "Discover → Relay → Access → Gateway",
        "request → reply בלבד"
      ],
      explanation: "DHCP DORA: 1) DISCOVER: client שולח broadcast (0.0.0.0 → 255.255.255.255) UDP port 67. 2) OFFER: server מציע IP + lease time. 3) REQUEST: client מבקש את ה-IP המוצע. 4) ACK: server מאשר ומעניק. DHCP Lease: IP ניתן לתקופה (1-24 שעות). Renewal ב-50% מה-lease. DHCP server מזהה client לפי MAC address."
    },
    {
      q: "מה DHCP Snooping ואיזו בעיה הוא פותר?",
      correct: "Feature ב-switch שחוסם DHCP servers לא מורשים — מונע Rogue DHCP server שמעניק IPs ומסיט traffic",
      choices: [
        "Feature ב-switch שחוסם DHCP servers לא מורשים — מונע Rogue DHCP server שמעניק IPs ומסיט traffic",
        "הצפנת DHCP traffic",
        "מגביל מספר IPs לclient",
        "DHCP ב-IPv6 בלבד"
      ],
      explanation: "Rogue DHCP Server attack: תוקף מפעיל DHCP server משלו, מקדים לענות על DISCOVER, מעניק IPs עם default gateway = IP שלו = MITM. DHCP Snooping: Trusted ports (uplink) = מאושר. Untrusted (clients) = DHCP replies נחסמות. Binding table: MAC+IP+VLAN+PORT — משמש גם ל-DAI (Dynamic ARP Inspection)."
    },
    {
      q: "כיצד APIPA עובד כשאין DHCP server?",
      correct: "מחשב מקצה לעצמו IP מ-169.254.0.0/16 (APIPA/link-local) — מאפשר תקשורת מקומית אבל ללא גישה לאינטרנט",
      choices: [
        "מחשב מקצה לעצמו IP מ-169.254.0.0/16 (APIPA/link-local) — מאפשר תקשורת מקומית אבל ללא גישה לאינטרנט",
        "מחשב מחכה לנצח עד שמגיע DHCP server",
        "מחשב משתמש ב-127.0.0.1",
        "הmחשב כותב שגיאה ומשבית את הrשת"
      ],
      explanation: "APIPA (Automatic Private IP Addressing): Windows, Mac, Linux. Range: 169.254.0.0/16. Client בוחר IP אקראי וoverify-ated ב-ARP. אם 169.254.x.x = DHCP נכשל. RFC 3927 (IPv4 Link-Local). IPv6: link-local addresses = fe80::/10, תמיד מוקצות אוטומטית. Zeroconf/Bonjour משתמש ב-link-local."
    }
  ],

  11: [
    {
      q: "מה קורה כשמחשב שולח HTTP request?",
      correct: "כל שכבה מוסיפה header → נשלח כ-bits → הצד השני מסיר headers שכבה-שכבה",
      choices: [
        "כל שכבה מוסיפה header → נשלח כ-bits → הצד השני מסיר headers שכבה-שכבה",
        "הבקשה נשלחת כטקסט ישירות ללא עיבוד",
        "רק שכבות הרשת והתעבורה מעבדות את הבקשה",
        "ה-header נשלח קודם ואז הנתונים בנפרד"
      ],
      explanation: "הדרך המלאה: App → (HTTP) → Transport → (TCP) → Network → (IP) → Link → (MAC) → Physical → סיביות ברשת! כל שכבה 'אחראית על עצמה' 🎂"
    },
    {
      q: "מה NAT ואיזו בעיה הוא פתר בשנות ה-90?",
      correct: "Network Address Translation — מאפשר לרשתות פנימיות עם IPs פרטיים לצאת לאינטרנט עם IP ציבורי אחד. פתר מחסור ב-IPv4",
      choices: [
        "Network Address Translation — מאפשר לרשתות פנימיות עם IPs פרטיים לצאת לאינטרנט עם IP ציבורי אחד. פתר מחסור ב-IPv4",
        "NAT = הצפנת תעבורת הרשת",
        "NAT מאיץ את התקשורת על ידי caching",
        "NAT = פרוטוקול לניתוב BGP"
      ],
      explanation: "IPv4: 4.3 מיליארד כתובות. כבר ב-1990 ברור שלא יספיקו. NAT (RFC 3022): Private ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. ה-router שומר NAT table: internal IP:port ↔ external IP:port. PAT (Port Address Translation) = עשרות אלפי connections דרך IP אחד. IPv6 אמור לבטל צורך ב-NAT (אבל NAT עדיין קיים בארגונים)."
    },
    {
      q: "מה ההבדל בין Static NAT לבין Dynamic NAT לבין PAT?",
      correct: "Static: IP פנימי קבוע → IP ציבורי קבוע (1:1). Dynamic: pool של IPs ציבוריים. PAT (Masquerade): כל הclients → IP ציבורי אחד + ports שונים",
      choices: [
        "Static: IP פנימי קבוע → IP ציבורי קבוע (1:1). Dynamic: pool של IPs ציבוריים. PAT (Masquerade): כל הclients → IP ציבורי אחד + ports שונים",
        "כולם זהים",
        "Static = IPv6, Dynamic = IPv4",
        "PAT = הסוג הכי ישן"
      ],
      explanation: "Static NAT: שרת פנימי שצריך להיות נגיש מחוץ (1:1 mapping). Dynamic NAT: pool של IPs ציבוריים. PAT/Overload (הנפוץ ביותר): 192.168.1.5:1234 → 203.0.113.1:54321. NAT table entry: 5 טיפלות (src_ip, src_port, dst_ip, dst_port, protocol). iptables: MASQUERADE = dynamic PAT."
    },
    {
      q: "למה NAT שובר end-to-end connectivity ומה הפתרונות?",
      correct: "מחשב מאחורי NAT לא ניתן לחיבור ישיר מבחוץ — פתרונות: UPnP, STUN (WebRTC), Port Forwarding, IPv6, VPN",
      choices: [
        "מחשב מאחורי NAT לא ניתן לחיבור ישיר מבחוץ — פתרונות: UPnP, STUN (WebRTC), Port Forwarding, IPv6, VPN",
        "NAT לא שובר connectivity — הכל שקוף",
        "הפתרון היחיד הוא IPv6",
        "Port Forwarding לא עובד עם NAT"
      ],
      explanation: "NAT traversal: STUN (Session Traversal Utilities for NAT) — WebRTC, VoIP. ICE (Interactive Connectivity Establishment) = STUN + TURN. TURN = relay server כשSTUN נכשל. UPnP: device ביקשת port forwarding אוטומטי. BitTorrent/P2P: hole punching. Port Forwarding: external port → internal IP:port (SSH, gaming servers)."
    },
    {
      q: "מה כתובות IP פרטיות ולמה לא ניתן לנתב אותן באינטרנט?",
      correct: "RFC 1918: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 — routers ב-Internet פשוט זורקים packets לכתובות אלה",
      choices: [
        "RFC 1918: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 — routers ב-Internet פשוט זורקים packets לכתובות אלה",
        "כתובות פרטיות מוצפנות אוטומטית",
        "ניתן לנתב אותן — רק ISP לא מאפשר",
        "רק 192.168.x.x הן פרטיות"
      ],
      explanation: "RFC 1918 private ranges: 10.0.0.0/8 (16M addresses), 172.16.0.0/12 (1M), 192.168.0.0/16 (64K). ISPs מגדירים bogon filters — חוסמים routing לכתובות אלה. IANA גם הקצתה: 127.0.0.0/8 (loopback), 169.254.0.0/16 (link-local), 100.64.0.0/10 (Carrier-Grade NAT — ISPs)"
    }
  ],

  12: [
    {
      q: "מה זה non-blocking socket?",
      correct: "socket שלא 'מקפיא' את התוכנית בזמן המתנה לנתונים",
      choices: [
        "socket שלא 'מקפיא' את התוכנית בזמן המתנה לנתונים",
        "socket מוצפן שחוסם כניסות לא מורשות",
        "socket לתקשורת חד-כיוונית בלבד",
        "socket שמסנן חבילות לא תקינות"
      ],
      explanation: "Blocking = 'אני מחכה ולא עושה כלום'. Non-blocking = 'בדקתי, אין עדיין? בסדר, אעשה דברים אחרים'. שרת שמטפל בהרבה לקוחות = חייב non-blocking 🔄"
    },
    {
      q: "מה VLAN ואיך הוא מפריד תעבורה בסוויץ' פיזי אחד?",
      correct: "Virtual LAN — מפריד broadcast domains ב-software. תעבורה בין VLANs דורשת routing (Layer 3)",
      choices: [
        "Virtual LAN — מפריד broadcast domains ב-software. תעבורה בין VLANs דורשט routing (Layer 3)",
        "VLAN = חיבור בין switchים שונים",
        "VLAN = הצפנת תעבורה בתוך switch",
        "VLAN = VLAN Access Layer Network"
      ],
      explanation: "802.1Q VLAN tagging: מוסיף 4 bytes לEthernet frame: TPID (0x8100) + PCP (priority) + VLAN ID (12 bits = 4094 VLANs). Access port: port שמשתמש רואה, untag. Trunk port: בין switchים, מוביל מספר VLANs עם tags. Native VLAN = VLAN default ב-trunk port (ללא tag). Inter-VLAN routing: router-on-a-stick (sub-interfaces) או Layer 3 switch."
    },
    {
      q: "מה Trunk Port לעומת Access Port ב-VLANs?",
      correct: "Access Port: מכשיר קצה, VLAN אחד, ללא tag. Trunk Port: בין switchים/router, מרובה VLANs, עם 802.1Q tag",
      choices: [
        "Access Port: מכשיר קצה, VLAN אחד, ללא tag. Trunk Port: בין switchים/router, מרובה VLANs, עם 802.1Q tag",
        "Trunk = מהיר יותר מ-Access",
        "Access Port = IPv6, Trunk = IPv4",
        "Trunk = encrypted, Access = unencrypted"
      ],
      explanation: "Access: PC/printer/server מחוברים. Switch tag-ים frames פנימית עם VLAN ID. Trunk: switch-to-switch, switch-to-router. 802.1Q tag: 4 bytes נוספים. DTP (Dynamic Trunking Protocol): Cisco protocol לניהול trunk אוטומטי. VLANs 1 (default), 1002-1005 (reserved). Native VLAN: VLAN שנשלח untagged בtrunk — security risk אם שונה מVLAN 1."
    },
    {
      q: "מה VLAN Hopping attack ואיך מגנים?",
      correct: "Switch Spoofing: תוקף מדמה switch → trunk mode → גישה לכל VLANs. Double Tagging: 2 VLAN tags → קופץ ל-VLAN אחר. הגנה: disable DTP, שנה native VLAN ל-unused",
      choices: [
        "Switch Spoofing: תוקף מדמה switch → trunk mode → גישה לכל VLANs. Double Tagging: 2 VLAN tags → קופץ ל-VLAN אחר. הגנה: disable DTP, שנה native VLAN ל-unused",
        "VLAN Hopping = ניצול IPv6 ב-VLAN",
        "לא ניתן לתקוף VLANs",
        "הגנה: הצפנה בלבד"
      ],
      explanation: "Switch Spoofing: מחשב שולח DTP frames → switch פותח trunk → גישה לכל VLANs. Double Tagging: tag ראשוני = native VLAN (מוסר), tag שני = VLAN יעד. Works only for native VLAN. הגנה: (1) switchport mode access (השבתת DTP), (2) native VLAN ≠ כל VLAN משתמש, (3) PVLAN (Private VLAN), (4) port-security."
    },
    {
      q: "מה Private VLAN (PVLAN)?",
      correct: "מחלק VLAN לsub-VLANs: Isolated (לא מדבר עם אף port אחר), Community (מדבר בקבוצה), Promiscuous (מדבר עם כולם = gateway)",
      choices: [
        "מחלק VLAN לsub-VLANs: Isolated (לא מדבר עם אף port אחר), Community (מדבר בקבוצה), Promiscuous (מדבר עם כולם = gateway)",
        "PVLAN = VLAN מוצפן",
        "PVLAN = VLAN לניהול בלבד",
        "PVLAN = switch private ל-vendor אחד"
      ],
      explanation: "PVLAN שימושי ב-hosting: כל לקוח isolated מהשני, כולם עם גישה לgateway. Isolated ports: לא מדברים זה עם זה (אפילו לא ARP). Community: קבוצות שמדברות ביניהן. Promiscuous: router/firewall שמדבר עם כולם. מגביל lateral movement גם אם תוקף פרץ לserver אחד."
    }
  ],

  13: [
    {
      q: "מה ההבדל בין latency ל-bandwidth?",
      correct: "Latency = זמן שלוקח לחבילה להגיע, Bandwidth = כמות נתונים לשנייה",
      choices: [
        "Latency = זמן שלוקח לחבילה להגיע, Bandwidth = כמות נתונים לשנייה",
        "Latency = רוחב הפס, Bandwidth = זמן התגובה",
        "שניהם מדידות של מהירות הרשת",
        "Latency לרשת מקומית, Bandwidth לאינטרנט"
      ],
      explanation: "אנלוגיה: צינור מים. Bandwidth = קוטר הצינור (כמה עובר). Latency = כמה זמן לטיפה להגיע. YouTube אוהב Bandwidth, gaming אוהב Latency נמוכה 🎮"
    },
    {
      q: "מה Spanning Tree Protocol ואיזו בעיה הוא פותר?",
      correct: "STP מונע Broadcast Storm הנוצר מלולאות פיזיות בין switchים — חוסם פורטים מיותרים ומשאיר עץ ללא לולאות",
      choices: [
        "STP מונע Broadcast Storm הנוצר מלולאות פיזיות בין switchים — חוסם פורטים מיותרים ומשאיר עץ ללא לולאות",
        "STP מגדיר VLAN routing",
        "STP = Secure Transmission Protocol",
        "STP מונע ARP attacks"
      ],
      explanation: "Broadcast Storm: frame יוצא מswitch A → B → A → B → אינסוף. STP (802.1D): בוחר Root Bridge (הנמוך BID = Bridge Priority + MAC). כל switch בוחר Root Port (הנמוך cost לroot). Blocked ports = לא מעבירים data. Convergence = 30-50 שניות. RSTP (802.1w) = תוך 1-2 שניות. MSTP (802.1s) = STP per-VLAN group."
    },
    {
      q: "מה ה-BPDU ואיך STP בוחר Root Bridge?",
      correct: "Bridge Protocol Data Unit — הודעת STP שכוללת BID (priority + MAC). Root Bridge = switch עם BID הנמוך ביותר (priority ראשון, אחר כך MAC)",
      choices: [
        "Bridge Protocol Data Unit — הודעת STP שכוללת BID (priority + MAC). Root Bridge = switch עם BID הנמוך ביותר (priority ראשון, אחר כך MAC)",
        "Root Bridge = switch עם MAC הגבוה ביותר",
        "BPDU = Broadcast PDU שנשלח לכל VLANs",
        "Root Bridge נבחר ע\"י admin בלבד"
      ],
      explanation: "BID (Bridge ID): 2 bytes Priority (ברירת מחדל 32768) + 6 bytes MAC. Bridge עם BID הנמוך ביותר = Root Bridge. ניתן לכפות root: spanning-tree vlan 1 priority 0 (Cisco). Root Port: port עם הנמוך Root Path Cost. Designated Port: port שמעביר לroot. Blocked Port: לא מעביר data (רק BPDU). BPDU Guard: מבטל port שמקבל BPDU בפורט של endpoint."
    },
    {
      q: "מה PortFast ו-BPDU Guard ב-STP?",
      correct: "PortFast: מקפיץ access port ישירות ל-Forwarding ללא 30 שניות המתנה — לPCs בלבד. BPDU Guard: מבטל port שמקבל BPDU (מגן מswitch לא מורשה)",
      choices: [
        "PortFast: מקפיץ access port ישירות ל-Forwarding ללא 30 שניות המתנה — לPCs בלבד. BPDU Guard: מבטל port שמקבל BPDU (מגן מswitch לא מורשה)",
        "PortFast = מאיץ STP convergence בין switchים",
        "BPDU Guard = הצפנת BPDU",
        "שניהם פוגעים ב-stability"
      ],
      explanation: "STP States: Disabled → Blocking → Listening (15s) → Learning (15s) → Forwarding. PortFast: מדלג ישירות ל-Forwarding. רק לaccess ports לPCs/servers — לא בין switchים! BPDU Guard: אם PortFast port מקבל BPDU = err-disabled. Loop Guard: מבטל port שהפסיק לקבל BPDUs (מגן מone-way failure). Root Guard: מונע אובדן root bridge."
    },
    {
      q: "מה PortFast ב-STP ולמה מסוכן לhostים?",
      correct: "PortFast: קופץ ישירות ל-Forwarding ללא STP states. לgלPCs בלבד — אם מחבר switch, יגרום ל-loop",
      choices: [
        "PortFast: קופץ ישירות ל-Forwarding ללא STP states. לPCs בלבד — אם מחבר switch, יגרום ל-loop",
        "PortFast = fast STP convergence בין switches",
        "PortFast מושבת STP לגמרי",
        "PortFast = RSTP mode"
      ],
      explanation: "STP ports: Blocking(20s) → Listening(15s) → Learning(15s) → Forwarding = 50 שניות! PortFast: מדלג ישירות לForwarding — DHCP לא מקבל timeout. BPDU Guard: אם PortFast port מקבל BPDU = err-disabled. Root Guard: מבטל port שמנסה להיות Root Bridge. Loop Guard: מבטל port שהפסיק לקבל BPDUs."
    }
  ],

  14: [
    {
      q: "מה עושה הפקודה netstat?",
      correct: "מציגה חיבורי רשת פעילים, פורטים מאזינים ומידע על socket",
      choices: [
        "מציגה חיבורי רשת פעילים, פורטים מאזינים ומידע על socket",
        "בודקת זמינות שרת ומציגה זמן תגובה",
        "מציגה את טבלת הניתוב של המכשיר",
        "מאפסת הגדרות כרטיס הרשת"
      ],
      explanation: "netstat -an מציגה את כל החיבורים הפתוחים. תוכל לראות שהדפדפן שלך מחובר ל-443 (HTTPS) של גוגל וYouTube. כמו לפתוח חלון למה שקורה ברשת 🕵️"
    },
    {
      q: "מה עושה הפקודה nslookup?",
      correct: "שולחת שאילתת DNS ומציגה את כתובת ה-IP של דומיין",
      choices: [
        "שולחת שאילתת DNS ומציגה את כתובת ה-IP של דומיין",
        "בודקת פורטים פתוחים בשרת מרוחק",
        "מציגה את ה-ARP cache של המכשיר",
        "מנתחת עומס על הרשת"
      ],
      explanation: "nslookup google.com → 142.250.x.x. nslookup 8.8.8.8 → מחפש שם הפוך (PTR record). כלי דיאגנוסטיקה בסיסי לכל מי שעובד עם רשתות 🔍"
    },
    {
      q: "מה ההבדל בין distance-vector לבין link-state routing protocols?",
      correct: "Distance-vector (RIP): שולח routing table לשכנים. Link-state (OSPF): שולח topology מלאה, כל router מחשב SPF בעצמו",
      choices: [
        "Distance-vector (RIP): שולח routing table לשכנים. Link-state (OSPF): שולח topology מלאה, כל router מחשב SPF בעצמו",
        "אין הבדל — שתיהן RIP",
        "OSPF שולח רק שינויים, RIP שולח הכל",
        "Link-state = ל-IPv6 בלבד"
      ],
      explanation: "RIP: Bellman-Ford. מדד = hop count (מקסימום 15 hops). עדכון כל 30 שניות. בעיה: counting to infinity, slow convergence. OSPF: Dijkstra's SPF. מדד = cost (=100/bandwidth Mbps). LSA flooding. Area hierarchy (backbone area 0). EIGRP (Cisco): hybrid — distance vector עם rapid convergence. BGP: path vector — מדיניות, לא מהירות."
    },
    {
      q: "מה BGP ומה תפקידו באינטרנט?",
      correct: "Border Gateway Protocol — ה-routing protocol של האינטרנט. מנהל routing בין Autonomous Systems (AS) — ISPs, חברות גדולות",
      choices: [
        "Border Gateway Protocol — ה-routing protocol של האינטרנט. מנהל routing בין Autonomous Systems (AS) — ISPs, חברות גדולות",
        "BGP = Border Gateway Port — פרוטוקול לVPN",
        "BGP עובד רק בתוך ארגון אחד",
        "BGP = הגרסה המתקדמת של OSPF"
      ],
      explanation: "BGP (RFC 4271): Path Vector protocol. AS (Autonomous System): ארגון עם ASN (AS Number). IANA מקצה ASNs (16bit: 1-64511, 32bit: 131072+). eBGP: בין ASים שונים. iBGP: בתוך AS. BGP attributes: AS-Path (loop prevention), Next-Hop, Local-Preference, MED, Community. Full Internet routing table: ~900K prefixes IPv4 + 200K IPv6."
    },
    {
      q: "מה OSPF DR/BDR ולמה חשוב?",
      correct: "Designated Router/Backup — על multiaccess network (Ethernet), DR מרכז LSA flooding כדי להפחית overhead. DR נבחר לפי Router ID",
      choices: [
        "Designated Router/Backup — על multiaccess network (Ethernet), DR מרכז LSA flooding כדי להפחית overhead. DR נבחר לפי Router ID",
        "DR = Default Route ב-OSPF",
        "DR נבחר רק ב-WAN links",
        "BDR = Backup Default Route"
      ],
      explanation: "OSPF רגיל: N routers = N×(N-1)/2 adjacencies = O(N²) LSAs. עם DR: כל router adjacency עם DR בלבד = O(N). DR Priority: ניתן להגדיר (ברירת מחדל = 1, 0 = לא eligible). Router ID: IP גבוה ביותר של Loopback. OSPF Areas: Area 0 (backbone) חייב לחבר כל area אחרת. ABR (Area Border Router) = router בין areas."
    },
    {
      q: "מה ECMP ואיך routers מאזנים עומס?",
      correct: "Equal Cost Multi-Path: מספר routes בעלות שווה לאותו יעד — router מחלק traffic ביניהם (per-flow hash)",
      choices: [
        "Equal Cost Multi-Path: מספר routes בעלות שווה לאותו יעד — router מחלק traffic ביניהם (per-flow hash)",
        "ECMP = encrypted BGP",
        "Router תמיד בוחר route אחד בלבד",
        "ECMP = External Cost Measurement Protocol"
      ],
      explanation: "ECMP: Linux מאזן per-flow (hash src+dst IP+port). Cisco per-destination ברירת מחדל. Maximum-paths: OSPF 16 paths, BGP 2-16. מגביל: כל flow הולך לpath אחד (consistency). LACP (Link Aggregation): Layer 2, bundle ports פיזיים. ECMP: Layer 3, routes שונים. LAG/bonding: Linux bond0, EtherChannel (Cisco)."
    }
  ],

  15: [
    {
      q: "מה ההבדל בין הצפנה סימטרית לאסימטרית?",
      correct: "סימטרית: אותו מפתח להצפנה ופענוח. אסימטרית: זוג מפתחות ציבורי/פרטי",
      choices: [
        "סימטרית: אותו מפתח להצפנה ופענוח. אסימטרית: זוג מפתחות ציבורי/פרטי",
        "סימטרית מהירה יותר ואסימטרית מאובטחת יותר תמיד",
        "סימטרית לתעבורה, אסימטרית לאחסון",
        "אין הבדל — שתיהן משתמשות ב-AES"
      ],
      explanation: "TLS משתמש בשתיהן: אסימטרית לחילוף מפתחות (Diffie-Hellman) — איטי אבל לא צריך לשתף סוד מראש. סימטרית (AES-256) לתעבורה — מהיר. הכי טוב משני עולמות! 🔑"
    },
    {
      q: "מה TLS Handshake עושה?",
      correct: "מסכים על גרסת TLS, מאמת Certificate, ומחליף מפתחות לסשן מוצפן",
      choices: [
        "מסכים על גרסת TLS, מאמת Certificate, ומחליף מפתחות לסשן מוצפן",
        "פותח חיבור TCP ומצפין אותו באופן אוטומטי",
        "מוריד את Certificate מ-CA ומתקין אותו",
        "מבדיל בין HTTP לHTTPS"
      ],
      explanation: "TLS Handshake = לחיצת יד מוצפנת. Server מציג Certificate, Client מאמת מול CA, שניהם מחשבים session key. כל זה לפני שנשלח ביית אחד של נתונים! 🤝🔒"
    },
    {
      q: "מה Certificate Authority (CA) עושה?",
      correct: "חותמת דיגיטלית על Certificate של אתר — מאמתת שהאתר אכן שייך לבעלים הנכון",
      choices: [
        "חותמת דיגיטלית על Certificate של אתר — מאמתת שהאתר אכן שייך לבעלים הנכון",
        "יוצרת את מפתחות ההצפנה לכל אתר",
        "מריצה שרתי DNS לתרגום דומיינים",
        "מנהלת את האישורים של כל משתמשי האינטרנט"
      ],
      explanation: "CA = נוטריון של האינטרנט. DigiCert, Let's Encrypt, Comodo — כולן CA. הדפדפן סומך על רשימת CA מוכרת. אם CA חתמה — הדפדפן סומך. ל-Let's Encrypt יש 300M+ certificates חינמיים! 📜"
    },
    {
      q: "מה ה-TLS handshake ואיזה שלבים כולל?",
      correct: "ClientHello → ServerHello + Certificate → Client key exchange → Finished (שני הצדדים) — מסתיים עם symmetric key מוסכם",
      choices: [
        "ClientHello → ServerHello + Certificate → Client key exchange → Finished (שני הצדדים) — מסתיים עם symmetric key מוסכם",
        "TLS = TCP handshake עם הצפנה",
        "השלבים: SYN → SYN-ACK → ACK + certificate",
        "TLS handshake = רק חיבור TCP"
      ],
      explanation: "TLS 1.2: 2 RTT. ClientHello: cipher suites, random, SNI. ServerHello: chosen cipher, certificate. Server Key Exchange (ECDHE). Client Key Exchange: pre-master secret. Change Cipher Spec. Finished: HMAC אימות. TLS 1.3: 1 RTT (0-RTT אפשרי). Certificate Pinning: app מאמת certificate ספציפי (לא רק CA)."
    },
    {
      q: "מה Certificate Authority ואיך browsers סומכים על HTTPS?",
      correct: "CA = גוף שמוציא certificates חתומים. Browser כולל 'trust store' עם root CAs. שרשרת אמון: Root CA → Intermediate CA → Server Certificate",
      choices: [
        "CA = גוף שמוציא certificates חתומים. Browser כולל 'trust store' עם root CAs. שרשרת אמון: Root CA → Intermediate CA → Server Certificate",
        "Browser בודק certificate ב-database מרכזי",
        "כל certificate תקף אוטומטית ב-HTTPS",
        "CA = שרת DNS שמאמת certificates"
      ],
      explanation: "PKI (Public Key Infrastructure): Root CA (trust anchor, offline, מוגן מאוד), Intermediate CA (online, חותמת certificates), Leaf Certificate (domain). Self-signed: browser מזהיר אבל לא חוסם. Let's Encrypt: CA חינמי, 90-day certificates, ACME protocol לautomation. Certificate Transparency: log ציבורי של certificates. CRL/OCSP: ביטול certificates."
    },
    {
      q: "מה Perfect Forward Secrecy ולמה חשוב?",
      correct: "PFS: session key חדש לכל connection (ECDHE). אפילו אם private key נחשף עתידית — sessions עבר לא ניתנים לפענוח",
      choices: [
        "PFS: session key חדש לכל connection (ECDHE). אפילו אם private key נחשף עתידית — sessions עבר לא ניתנים לפענוח",
        "PFS = הצפנת passwords בbrowser",
        "PFS = פרוטוקול לשיתוף keys בין CAs",
        "PFS עובד רק ב-TLS 1.3"
      ],
      explanation: "Without PFS (RSA key exchange): NSA/attacker שומר encrypted traffic. לאחר שנים: private key נחשף → מפענחים הכל רטרואקטיבית. עם ECDHE: key ephemeral — נוצר רק ל-session ונמחק. TLS 1.3 חייב ECDHE. Cipher suites עם PFS: ECDHE-RSA-AES128-GCM-SHA256. ללא PFS: RSA-AES128-SHA (deprecated)."
    }
  ],

  16: [
    {
      q: "מה ההבדל בין SMTP ל-IMAP?",
      correct: "SMTP = שליחת מייל. IMAP = קריאת מייל (sync עם שרת)",
      choices: [
        "SMTP = שליחת מייל. IMAP = קריאת מייל (sync עם שרת)",
        "SMTP = מוצפן, IMAP = לא מוצפן",
        "SMTP לGmail, IMAP לOutlook",
        "שניהם לשליחה, ההבדל הוא בפורט"
      ],
      explanation: "SMTP (פורט 587) = שולח. IMAP (פורט 993) = קורא ומסנכרן עם שרת — מייל נשאר בשרת. POP3 (פורט 995) = מוריד ומוחק מהשרת. היום IMAP > POP3 כי רוצים sync בין מכשירים 📧"
    },
    {
      q: "מה SSH מאפשר לעשות?",
      correct: "גישה מאובטחת ומוצפנת לשרת מרוחק דרך terminal",
      choices: [
        "גישה מאובטחת ומוצפנת לשרת מרוחק דרך terminal",
        "העברת קבצים מהירה בין שרתים",
        "ניהול כתובות IP בצורה מרכזית",
        "הצפנת תעבורת HTTP לHTTPS"
      ],
      explanation: "SSH (Secure Shell, פורט 22) = טלנט מוצפן. כשאת כותבת ssh user@server.com — יוצרת terminal מוצפן לשרת. SCP ו-SFTP = העברת קבצים מעל SSH. DevOps חיים על SSH 💻"
    },
    {
      q: "מה הפורט הסטנדרטי של SSH?",
      correct: "22",
      choices: ["22", "23", "443", "8080"],
      explanation: "SSH=22, Telnet=23 (לא מוצפן!), HTTPS=443, HTTP=80. Admins לפעמים מעבירים SSH לפורט 2222 כדי להפחית bot scanning — security through obscurity, לא פתרון אמיתי 🔐"
    },
    {
      q: "מה ההבדל בין POP3 לבין IMAP?",
      correct: "POP3: מוריד emails למחשב ומוחק מהשרת. IMAP: מסנכרן — emails נשארים בשרת, ניתן לגשת ממכשירים מרובים",
      choices: [
        "POP3: מוריד emails למחשב ומוחק מהשרת. IMAP: מסנכרן — emails נשארים בשרת, ניתן לגשת ממכשירים מרובים",
        "POP3 = email חדש, IMAP = email ישן",
        "שניהם זהים — רק ports שונים",
        "IMAP = הצפנה, POP3 = ללא הצפנה"
      ],
      explanation: "POP3 (port 110, SSL 995): Post Office Protocol v3. IMAP (port 143, SSL 993): Internet Message Access Protocol. SMTP (port 25/587): שליחת email. SMTP relay: server-to-server. SPF: מאמת IP מורשה לשלוח מ-domain. DKIM: חותם דיגיטלי על email. DMARC: מדיניות SPF+DKIM failure. Email spoofing: ניתן לשלוח מ-any domain ללא SPF/DKIM."
    },
    {
      q: "מה SSH ולמה הוא עדיף על Telnet?",
      correct: "SSH (port 22) מצפין את כל התקשורת כולל passwords. Telnet (port 23) שולח הכל בplaintext — ניתן ליירוט עם Wireshark",
      choices: [
        "SSH (port 22) מצפין את כל התקשורת כולל passwords. Telnet (port 23) שולח הכל בplaintext — ניתן ליירוט עם Wireshark",
        "SSH ו-Telnet זהים — רק שמות שונים",
        "SSH מהיר יותר מ-Telnet",
        "Telnet מוצפן ב-IPv6"
      ],
      explanation: "SSH (RFC 4253): asymmetric לhandshake + symmetric לsession. Key-based auth: id_rsa (private), id_rsa.pub (public). authorized_keys: SSH login ללא password. Port forwarding: ssh -L 8080:internal:80. SCP/SFTP: file transfer מוצפן. SSH tunneling: הברחת traffic מוצפן דרך port 22 (לניצחון firewalls). known_hosts: fingerprint verification."
    },
    {
      q: "מה FTP Active Mode לעומת Passive Mode?",
      correct: "Active: server מתחבר חזרה לclient על port גבוה (בעיה עם NAT/firewall). Passive: client מתחבר לserver על port גבוה שהשרת מאשר",
      choices: [
        "Active: server מתחבר חזרה לclient על port גבוה (בעיה עם NAT/firewall). Passive: client מתחבר לserver על port גבוה שהשרת מאשר",
        "Active מהיר יותר, Passive מאובטח יותר",
        "ההבדל רק ב-ports: 20 ו-21",
        "Passive = FTPS (encrypted FTP)"
      ],
      explanation: "FTP: port 21 = control, port 20 = data. Active Mode: server → client:random port (NAT שובר). Passive Mode: client → server:random port (NAT-friendly). FTPS: FTP over TLS (explicit/implicit). SFTP: SSH File Transfer Protocol (אחר לגמרי, port 22). FTP plaintext — לא לשימוש ללא TLS. Alternatives: SFTP, SCP, rsync over SSH, S3."
    }
  ],

  17: [
    {
      q: "מה /24 אומר בכתובת 192.168.1.0/24?",
      correct: "24 ביטים לזיהוי הרשת, 8 ביטים לזיהוי מארח — 256 כתובות (254 שמישות)",
      choices: [
        "24 ביטים לזיהוי הרשת, 8 ביטים לזיהוי מארח — 256 כתובות (254 שמישות)",
        "24 מחשבים מחוברים לרשת כרגע",
        "הרשת מספר 24 בסדרה",
        "24 נתבים בין המחשב לאינטרנט"
      ],
      explanation: "CIDR notation: /24 = subnet mask 255.255.255.0. 8 ביטים = 256 כתובות. מינוס network address ומינוס broadcast = 254 שמישות. /16 = 65,534 שמישות. /32 = כתובת בודדת 🎯"
    },
    {
      q: "מה NAT מאפשר?",
      correct: "מכשירים רבים עם IP פרטי לשתף IP ציבורי אחד",
      choices: [
        "מכשירים רבים עם IP פרטי לשתף IP ציבורי אחד",
        "הצפנת כתובות IP פרטיות",
        "הקצאת IP סטטי לכל מכשיר",
        "הגנה מפני DDoS"
      ],
      explanation: "בבית: 10+ מכשירים עם 192.168.x.x, אבל IP ציבורי אחד לכולם. NAT ב-router עושה את ה-translation. זה הסיבה שIPv4 עדיין חי — NAT האריך את חייו בעשורים 🏠"
    },
    {
      q: "מה ה-CIDR notation /24 ומה ה-subnet mask שלו?",
      correct: "/24 = 255.255.255.0 = 256 כתובות, 254 usable hosts (פחות network ו-broadcast)",
      choices: [
        "/24 = 255.255.255.0 = 256 כתובות, 254 usable hosts (פחות network ו-broadcast)",
        "/24 = 24 hosts בלבד",
        "/24 = 255.255.255.255",
        "/24 = class B network"
      ],
      explanation: "CIDR (Classless Inter-Domain Routing): /prefix = מספר bits ב-network. /24: 2^8=256 כתובות. /23: 2^9=512. /16: 65536. /32: host אחד. Subnet mask: /24=255.255.255.0, /16=255.255.0.0, /8=255.0.0.0. Network address: כל host bits=0. Broadcast: כל host bits=1. Usable: 256-2=254. VLSM: חלוקה לא שווה של subnets."
    },
    {
      q: "כיצד מחלקים 192.168.1.0/24 ל-4 subnets שווים?",
      correct: "לקחים 2 bits נוספים: /26. כל subnet = 64 כתובות. .0/26, .64/26, .128/26, .192/26",
      choices: [
        "לקחים 2 bits נוספים: /26. כל subnet = 64 כתובות. .0/26, .64/26, .128/26, .192/26",
        "/24 לארבעה /25 subnets",
        "/28 = 4 subnets מ-/24",
        "2^4=16 subnets מ-/24 עם /28"
      ],
      explanation: "4 subnets: 2^2=4 → לוקחים 2 bits → /26. כל /26 = 64 כתובות (62 usable). .0/26: range .0-.63, hosts .1-.62. .64/26: .64-.127, hosts .65-.126. .128/26: .128-.191, .192/26: .192-.255. Binary: 192.168.1.0 = 11000000.10101000.00000001.00|000000. הbit ה-25 ו-26 הפכו network bits."
    },
    {
      q: "מה Supernetting (Route Summarization)?",
      correct: "איחוד מספר networks רצופים לrepresentation אחד קטן יותר ב-routing table — /24 + /24 = /23",
      choices: [
        "איחוד מספר networks רצופים לrepresentation אחד קטן יותר ב-routing table — /24 + /24 = /23",
        "Supernetting = Subnetting הפוך בלבד",
        "לא ניתן לאחד networks",
        "Supernetting = IPv6 transition mechanism"
      ],
      explanation: "Route summarization: 192.168.0.0/24 + 192.168.1.0/24 → 192.168.0.0/23. תנאי: networks חייבים להיות contiguous ולחלוק prefix. יתרונות: routing table קטן יותר, פחות BGP updates, convergence מהיר. ISP: 100 /24 prefixes → 1 /16 summary. BGP aggregation: reduce routing table size. Internet full routing table: ~900K vs ~60K ב-2000."
    }
  ],

  18: [
    {
      q: "כמה ביטים בכתובת IPv6?",
      correct: "128 ביטים — מספיק לכ-340 undecillion כתובות",
      choices: [
        "128 ביטים — מספיק לכ-340 undecillion כתובות",
        "64 ביטים",
        "32 ביטים (כמו IPv4)",
        "256 ביטים"
      ],
      explanation: "IPv4 = 32 ביטים = ~4 מיליארד כתובות. IPv6 = 128 ביטים = 340 עם 36 אפסים אחריו. לכל אטום על פני כדור הארץ יכולנו לתת כמה מיליארד כתובות. המחסור ב-IPv4 הוא הסיבה ל-IPv6 🌐"
    },
    {
      q: "מה ::1 אומר ב-IPv6?",
      correct: "כתובת Loopback — כמו 127.0.0.1 ב-IPv4",
      choices: [
        "כתובת Loopback — כמו 127.0.0.1 ב-IPv4",
        "כתובת Gateway ברירת מחדל",
        "כתובת Broadcast",
        "כתובת ריקה לא מוקצית"
      ],
      explanation: "::1 = 0000...0001 = localhost ב-IPv6. :: הוא קיצור לקבוצות אפסים רצופות. fe80::/10 = Link-local. 2001::/32 = Teredo tunneling. IPv6 יש לו הרבה טווחים מיוחדים 🔁"
    },
    {
      q: "מה ההבדל בין IPv4 ל-IPv6 header?",
      correct: "IPv6 header קבוע 40 bytes (פשוט יותר), ללא checksum, ללא fragmentation בrouter, addresses 128 bit",
      choices: [
        "IPv6 header קבוע 40 bytes (פשוט יותר), ללא checksum, ללא fragmentation בrouter, addresses 128 bit",
        "IPv6 = IPv4 עם addresses גדולים יותר בלבד",
        "IPv6 header גדול יותר ומכיל יותר fields",
        "ההבדל רק בגודל address"
      ],
      explanation: "IPv4 header: 20-60 bytes, variable. IPv6 header: fixed 40 bytes. הוסר: Header Checksum (כי L2/L4 עושים checksum), Fragmentation fields (router לא מפרגמנט — source עושה PMTUD), IHL (קבוע). הוסף: Flow Label (QoS). Extension headers: כל אחד מוסיף functionality (Hop-by-Hop, Routing, Fragment, Auth). Routers מעבדים header קבוע מהר יותר."
    },
    {
      q: "מה SLAAC ב-IPv6?",
      correct: "Stateless Address Autoconfiguration — device יוצר IPv6 address אוטומטית: prefix מ-RA + interface ID מ-EUI-64 (מ-MAC)",
      choices: [
        "Stateless Address Autoconfiguration — device יוצר IPv6 address אוטומטית: prefix מ-RA + interface ID מ-EUI-64 (מ-MAC)",
        "SLAAC = DHCPv6 בשם אחר",
        "SLAAC = Static address ב-IPv6",
        "SLAAC עובד רק ב-enterprise networks"
      ],
      explanation: "SLAAC: router שולח RA (Router Advertisement) עם prefix. Device: EUI-64 = MAC 48bit → 64bit (מוסיף FF:FE באמצע + flip bit). אחר כך: prefix + EUI-64 = /128 IPv6. בעיה: privacy — MAC ב-address. Privacy Extensions (RFC 4941): random interface ID שמשתנה. DHCPv6: stateful (כמו DHCPv4), עם/ללא SLAAC. NDP (Neighbor Discovery) = IPv6 equivalent ל-ARP."
    },
    {
      q: "מה כתובות Multicast ב-IPv6 ולמה הן מחליפות broadcast?",
      correct: "IPv6 אין broadcast. Multicast: ff00::/8. ff02::1 = all nodes, ff02::2 = all routers, ff02::1:ffXX:XX = Solicited-Node (לNDP)",
      choices: [
        "IPv6 אין broadcast. Multicast: ff00::/8. ff02::1 = all nodes, ff02::2 = all routers, ff02::1:ffXX:XX = Solicited-Node (לNDP)",
        "IPv6 משתמש ב-broadcast כמו IPv4",
        "Multicast = Anycast ב-IPv6",
        "ff00::/8 = private range ב-IPv6"
      ],
      explanation: "IPv6 types: Unicast (global 2000::/3, link-local fe80::/10, unique-local fc00::/7), Multicast (ff00::/8), Anycast (same address = multiple hosts). Solicited-Node multicast: ff02::1:ff + last 24 bits of target IP. NDP משתמש בזה במקום ARP broadcast. Link-local fe80:: חייב על כל interface — לא routable, לNDP/RA."
    }
  ],

  19: [
    {
      q: "מה ההבדל בין DNS Recursive Resolver לבין Authoritative Name Server?",
      correct: "Recursive = שואל בשמך ומחפש התשובה. Authoritative = יודע את התשובה הסופית",
      choices: [
        "Recursive = שואל בשמך ומחפש התשובה. Authoritative = יודע את התשובה הסופית",
        "Recursive = מהיר יותר, Authoritative = מאובטח יותר",
        "Recursive של ה-ISP, Authoritative של גוגל",
        "אין הבדל — שניהם עושים אותו דבר"
      ],
      explanation: "כשאת שואלת 8.8.8.8 (Google Recursive) על google.com — הוא שואל Root → .com TLD → Google Authoritative. Google Authoritative יודע 'google.com = 142.250.x.x'. Recursive עושה את כל העבודה בשבילך 🔍"
    },
    {
      q: "מה DNS TTL קובע?",
      correct: "כמה זמן (בשניות) DNS cache יכול להשתמש בתשובה לפני שאיל שוב",
      choices: [
        "כמה זמן (בשניות) DNS cache יכול להשתמש בתשובה לפני שאיל שוב",
        "כמה זמן הדומיין רשום ל-registrar",
        "מהירות העברת DNS query",
        "מספר ה-Name Servers לדומיין"
      ],
      explanation: "TTL = Time To Live. google.com TTL=300 (5 דקות). אתר קטן יכול לשים TTL=86400 (יום) — פחות queries. לפני שינוי DNS, מומלץ להוריד TTL ל-60s מראש כדי שהשינוי יתפשט מהר 🕐"
    },
    {
      q: "מה DNS over HTTPS (DoH) מוסיף?",
      correct: "מצפין DNS queries כדי שה-ISP לא יוכל לראות מה מחפשים",
      choices: [
        "מצפין DNS queries כדי שה-ISP לא יוכל לראות מה מחפשים",
        "מאיץ את ה-DNS resolution",
        "מוסיף HTTPS לכל האתרים",
        "מחליף את כתובות IP בשמות דומיין"
      ],
      explanation: "DNS רגיל = ב-plaintext. ISP רואה כל lookup. DoH = DNS query עובר כ-HTTPS לשרת כמו 1.1.1.1 או 8.8.8.8. ISP רואה חיבור ל-1.1.1.1 — לא מה שחיפשת. Firefox ו-Chrome תומכים ב-DoH כברירת מחדל 🔒"
    },
    {
      q: "מה DNS TTL ואיך משפיע על תפוצה של שינויים?",
      correct: "TTL = כמה שניות record נשמר ב-cache. TTL נמוך = שינויים מהירים (אבל יותר queries). TTL גבוה = performance אבל שינוי אטי",
      choices: [
        "TTL = כמה שניות record נשמר ב-cache. TTL נמוך = שינויים מהירים (אבל יותר queries). TTL גבוה = performance אבל שינוי אטי",
        "TTL = כמה DNS servers זוכרים את הrecord",
        "TTL רק ל-MX records",
        "TTL קבוע = 24 שעות לכולם"
      ],
      explanation: "Before migration: הפחת TTL ל-300s (5 min) 24-48 שעות מראש. Migration: שנה IP. Old TTL: עד 24 שעות cache נשמר. עם TTL=300: 5 דקות. After: החזר TTL ל-3600+ לperformance. DNS record types: A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail), TXT (SPF/DKIM/verification), NS (nameserver), SOA (authority), PTR (reverse), SRV (services)."
    },
    {
      q: "מה ההבדל בין Authoritative DNS לבין Recursive Resolver?",
      correct: "Authoritative: המקור הסמכותי לdomain (ns1.google.com). Recursive: עושה את כל הpipeline בשביל client (8.8.8.8)",
      choices: [
        "Authoritative: המקור הסמכותי לdomain (ns1.google.com). Recursive: עושה את כל הpipeline בשביל client (8.8.8.8)",
        "שניהם זהים",
        "Authoritative = DNS פרטי, Recursive = ציבורי",
        "Recursive = Root DNS server"
      ],
      explanation: "Recursive Resolver (8.8.8.8, 1.1.1.1): שואל Root → TLD → Authoritative ומחזיר ל-client. מחזיק cache. Authoritative NS (Route 53, Cloudflare DNS): מחזיק zone file עם כל records. Root servers: 13 logical (a-m.root-servers.net) = Anycast = מאות servers. TLD: .com (Verisign), .il (ISOC-IL). Delegation: NS records ב-parent zone מפנים לchild authoritative."
    },
    {
      q: "מה DNS Cache Poisoning ואיך DNSSEC מגן?",
      correct: "Poisoning: תוקף שולח DNS responses מזויפים לcache resolver לפני תגובה אמיתית. DNSSEC: חתימות קריפטוגרפיות על records",
      choices: [
        "Poisoning: תוקף שולח DNS responses מזויפים לcache resolver לפני תגובה אמיתית. DNSSEC: חתימות קריפטוגרפיות על records",
        "DNS Poisoning = שינוי /etc/hosts",
        "DNSSEC = TLS לDNS",
        "DNS Poisoning עובד רק ב-IPv4"
      ],
      explanation: "Kaminsky Attack (2008): ניחוש Transaction ID + source port → race condition → poison cache. DNSSEC: Zone Signing Key + Key Signing Key. RRSIG: חתימה על כל record. DS record: hash של child zone key ב-parent. Chain of trust: Root → TLD → domain. DNSSEC לא מצפין (DoT/DoH לזה). Resolver: dig +dnssec google.com."
    }
  ],

  20: [
    {
      q: "מה Sliding Window ב-TCP?",
      correct: "מאפשר לשלוח מספר segments ללא המתנה ל-ACK לכל אחד",
      choices: [
        "מאפשר לשלוח מספר segments ללא המתנה ל-ACK לכל אחד",
        "חלון הזמן שבו TCP מחכה ל-ACK לפני retry",
        "גודל ה-buffer של ה-socket",
        "מספר החיבורים המקבילים ל-TCP"
      ],
      explanation: "בלי Sliding Window: שלח → המתן ACK → שלח → המתן. עם Window Size=10: שלח 10 segments → קבל ACKs → הזז חלון. Pipeline מלא = ניצול מלא של הרשת. Window Size גדל דינמית עם הזמן 📊"
    },
    {
      q: "מה Slow Start ב-TCP Congestion Control?",
      correct: "TCP מתחיל עם window קטן ומכפיל אותו בכל RTT — עד שמגיע לcongestion threshold",
      choices: [
        "TCP מתחיל עם window קטן ומכפיל אותו בכל RTT — עד שמגיע לcongestion threshold",
        "TCP מאט את שליחת החבילות ב-router עמוס",
        "הגדרה ידנית של מהירות הconnection",
        "תהליך ה-handshake האיטי של TCP"
      ],
      explanation: "Slow Start: cwnd=1 → 2 → 4 → 8 (exponential). כשמגיע לssthresh — עובר ל-Congestion Avoidance (linear +1). כשיש loss — ssthresh=cwnd/2, cwnd=1, מתחיל מחדש. כמו לדרוך על גז ואז לבלום 🚗"
    },
    {
      q: "מה TCP Slow Start ואיך Congestion Control עובד?",
      correct: "Slow Start: מתחיל עם cwnd=1, מכפיל בכל RTT עד ssthresh. Congestion Avoidance: מוסיף 1 בכל RTT. Loss = חזרה לslow start",
      choices: [
        "Slow Start: מתחיל עם cwnd=1, מכפיל בכל RTT עד ssthresh. Congestion Avoidance: מוסיף 1 בכל RTT. Loss = חזרה לslow start",
        "TCP שולח בקצב קבוע מההתחלה",
        "Congestion Control = Flow Control — זהה",
        "cwnd לא משתנה לאחר ביסוס חיבור"
      ],
      explanation: "TCP Congestion Control (CUBIC ב-Linux, BBR של Google): cwnd (congestion window). Phases: Slow Start (exponential), Congestion Avoidance (linear), Fast Retransmit (3 dup-ACKs → retransmit), Fast Recovery (ssthresh=cwnd/2, לא איפוס מלא). BBR: מבוסס על bandwidth + RTT, לא רק loss. QUIC/HTTP3: congestion control ב-userspace."
    },
    {
      q: "מה TCP Window Size ומה Receive Buffer?",
      correct: "Window Size: כמה bytes sender יכול לשלוח לפני ACK. Receive Buffer: מה שOS מקצה לקריאת נתונים. Zero Window = buffer מלא",
      choices: [
        "Window Size: כמה bytes sender יכול לשלוח לפני ACK. Receive Buffer: מה שOS מקצה לקריאת נתונים. Zero Window = buffer מלא",
        "Window = MTU size",
        "Receive Buffer = Congestion Window",
        "Window Size קבוע ולא משתנה"
      ],
      explanation: "TCP Flow Control: receiver מכריז window size. Sender לא שולח יותר. Window Scaling (RFC 7323): window עד 1GB (מ-65535 bytes). Zero Window: buffer מלא. Sender שולח ZWPs (Zero Window Probes) כל 5-60 שניות. Application לא קוראת → TCP slow → sender slow → backpressure. ss -tn לראות window sizes."
    },
    {
      q: "מה Nagle's Algorithm ומתי כדאי להשבית?",
      correct: "מצבר TCP segments קטנים לpacket גדול יותר (efficiency). להשבית עם TCP_NODELAY בapplications real-time: gaming, SSH, database",
      choices: [
        "מצבר TCP segments קטנים לpacket גדול יותר (efficiency). להשבית עם TCP_NODELAY בapplications real-time: gaming, SSH, database",
        "Nagle = congestion control algorithm",
        "TCP_NODELAY מאט את החיבור",
        "Nagle פעיל רק ב-UDP"
      ],
      explanation: "Nagle (RFC 896): אם יש unACKed data — חכה לACK לפני שולח segment קטן. מטרה: לא לבזבז bandwidth על packets של byte אחד (VT100 terminals). בעיה: latency גבוה לapplications אינטראקטיביות. TCP_NODELAY=1: disable Nagle. SSH, RDP, gaming, databases: כולם מכבים. HTTP/1.1 persistent connections: לפעמים כדאי Nagle."
    }
  ],

  21: [
    {
      q: "מה ההבדל בין IPsec Tunnel mode לTransport mode?",
      correct: "Transport: מוצפן payload בלבד. Tunnel: כל הפקטה עטופה בפקטה חדשה",
      choices: [
        "Transport: מוצפן payload בלבד. Tunnel: כל הפקטה עטופה בפקטה חדשה",
        "Transport ל-UDP, Tunnel ל-TCP",
        "Transport מהיר יותר תמיד",
        "אין הבדל — שניהם מצפינים הכל"
      ],
      explanation: "Transport mode: IP Header מקורי גלוי, payload מוצפן. לHost-to-Host. Tunnel mode: פקטה מלאה נעטפת — ה-IP החיצוני הוא של ה-VPN Gateway. Site-to-Site VPN = Tunnel mode. IKEv2 מועדף ליצירת security association 🔐"
    },
    {
      q: "מה SYN Cookies ואיך הם פותרים SYN Flood?",
      correct: "שרת לא מקצה state לSYN — מחזיר ISN מוצפן. רק ACK תקין מוכיח שהלקוח אמיתי",
      choices: [
        "שרת לא מקצה state לSYN — מחזיר ISN מוצפן. רק ACK תקין מוכיח שהלקוח אמיתי",
        "cookies של browser שמאמתים משתמשים לגיטימיים",
        "cache של SYN packets למניעת כפילויות",
        "rate limiting על SYN packets בfirewall"
      ],
      explanation: "SYN Flood: תוקף שולח מיליוני SYN. שרת רגיל: מקצה state לכל אחד → מלא RAM. SYN Cookies: ISN = hash(src_ip, src_port, dst_port, timestamp, secret). שרת לא שומר state! רק ACK עם ISN+1 תקין מוכיח שהלקוח קיבל SYN-ACK 🛡️"
    },
    {
      q: "מה ההבדל בין VPN site-to-site לבין remote access VPN?",
      correct: "Site-to-site: מחבר רשתות שלמות (office A ↔ office B). Remote access: user בודד מתחבר לרשת ארגונית",
      choices: [
        "Site-to-site: מחבר רשתות שלמות (office A ↔ office B). Remote access: user בודד מתחבר לרשת ארגונית",
        "אין הבדל — שני הסוגים זהים",
        "Site-to-site = IPsec, Remote access = SSL בלבד",
        "Remote access VPN פחות מאובטח מsite-to-site"
      ],
      explanation: "Site-to-site: IPsec בין 2 routers/firewalls. שקוף למשתמשים. Remote access: OpenVPN, WireGuard, Cisco AnyConnect, IKEv2. Split tunneling: רק traffic ארגוני דרך VPN (שאר ישירות). Full tunnel: הכל דרך VPN. Zero Trust Network Access (ZTNA) = VPN עם identity-aware policies. WireGuard: חדש, מהיר, קוד קצר (4K lines vs 70K ב-OpenVPN)."
    },
    {
      q: "מה IPsec ואיזה שני מצבים קיימים?",
      correct: "IPsec: Transport Mode (L4+ מוצפן, IP header גלוי) ו-Tunnel Mode (כל packet מוצפן + IP header חדש — VPN site-to-site)",
      choices: [
        "IPsec: Transport Mode (L4+ מוצפן, IP header גלוי) ו-Tunnel Mode (כל packet מוצפן + IP header חדש — VPN site-to-site)",
        "IPsec = רק TLS עם IP features",
        "Transport Mode לsite-to-site, Tunnel ל-remote access",
        "IPsec מצפין רק UDP"
      ],
      explanation: "IPsec components: IKE (Internet Key Exchange) v2 לkey negotiation. ESP (Encapsulating Security Payload): encryption + authentication. AH (Authentication Header): authentication only (ללא encryption). Transport Mode: host-to-host (end devices). Tunnel Mode: gateway-to-gateway (routers). IKE SA: negotiates master key. Child SA: מפיק session keys. DH (Diffie-Hellman) group: key agreement."
    },
    {
      q: "מה WireGuard ולמה נחשב טוב יותר מ-OpenVPN?",
      correct: "WireGuard: ~4K lines vs ~70K ב-OpenVPN. UDP, fast handshake, kernel module. אבל: לא stealth (זיהוי בtraffic analysis)",
      choices: [
        "WireGuard: ~4K lines vs ~70K ב-OpenVPN. UDP, fast handshake, kernel module. אבל: לא stealth (זיהוי בtraffic analysis)",
        "WireGuard מהיר יותר אבל פחות מאובטח",
        "OpenVPN תמיד עדיף כי ישן יותר",
        "WireGuard = OpenVPN v3"
      ],
      explanation: "WireGuard: נכלל ב-Linux kernel 5.6+. Noise protocol framework. ChaCha20-Poly1305. 25519 ECDH. Stateless לנקודת מבט firewall. Peer = public key + allowed IPs. Connection migration: IP משתנה, session נשמרת. מגבלות: לא TCP (חוסם firewalls), אין obfuscation. AmneziaVPN/MASQ: WireGuard עם obfuscation. Tailscale/NetBird: WireGuard mesh VPN."
    }
  ],

  22: [
    {
      q: "מה ההבדל בין CDN Cache HIT לCache MISS?",
      correct: "HIT = הקובץ ב-PoP הקרוב, מוגש מיידית. MISS = PoP מביא מOrigin ואז מcache",
      choices: [
        "HIT = הקובץ ב-PoP הקרוב, מוגש מיידית. MISS = PoP מביא מOrigin ואז מcache",
        "HIT = הצלחה בחיפוש, MISS = שגיאה",
        "HIT לvideos, MISS לHTML",
        "HIT = CDN עובד, MISS = CDN מנותק"
      ],
      explanation: "Cache HIT: 5-15ms מPoP קרוב. Cache MISS: 100-300ms מOrigin + PoP שומר לפעם הבאה. CDN cache ratio טוב = 90%+ hits. Netflix מגיע לכמעט 100% כי מcache מראש בלילה 🚀"
    },
    {
      q: "מתי WebSockets עדיפים על REST?",
      correct: "כששרת צריך לשלוח עדכונים ביוזמתו ללא שהלקוח יבקש — chat, gaming, live data",
      choices: [
        "כששרת צריך לשלוח עדכונים ביוזמתו ללא שהלקוח יבקש — chat, gaming, live data",
        "כשצריך אבטחה גבוהה יותר",
        "כשמדובר בbandwidth גבוה",
        "כשהלקוח הוא מובייל"
      ],
      explanation: "REST = request-response. לchat — polling כל שנייה = 3600 requests/שעה. WebSocket = חיבור פתוח. שרת שולח מסר חדש מיידית. Discord, Slack, Trading platforms, Multiplayer games = WebSockets 🎮"
    },
    {
      q: "מה ה-Anycast CDN ואיך Cloudflare/Akamai מנצלים BGP?",
      correct: "Anycast: אותה IP ממספר POPs (נקודות נוכחות). BGP מנתב לPOP הקרוב. Content cached לocally — latency נמוך",
      choices: [
        "Anycast: אותה IP ממספר POPs (נקודות נוכחות). BGP מנתב לPOP הקרוב. Content cached לocally — latency נמוך",
        "CDN = DNS load balancing בלבד",
        "Anycast = random routing בין servers",
        "CDN עובד רק ב-TCP"
      ],
      explanation: "CDN (Content Delivery Network): Cloudflare (290+ cities), Akamai (4000+ servers). Cache hierarchy: origin → edge → PoP. Cache-Control headers: max-age, s-maxage, no-cache. Cache hit: 200ms → 5ms. Cache miss: origin fetch. Purge: API לnuke cache. Edge Functions (Cloudflare Workers): JavaScript ב-edge, 0ms cold start."
    },
    {
      q: "מה Load Balancer Layer 4 לעומת Layer 7?",
      correct: "L4 (TCP/UDP): מהיר, לא מבין HTTP. L7 (HTTP): מבין URLs/headers/cookies, יכול לנתב לפי content, SSL termination",
      choices: [
        "L4 (TCP/UDP): מהיר, לא מבין HTTP. L7 (HTTP): מבין URLs/headers/cookies, יכול לנתב לפי content, SSL termination",
        "L4 יותר מאובטח מ-L7",
        "L7 מהיר יותר מ-L4",
        "אין הבדל — L4 ו-L7 LB זהים"
      ],
      explanation: "L4 LB: AWS NLB, HAProxy TCP mode. NAT-based: שומר TCP state. Fast: millions pps. L7 LB: AWS ALB, nginx, Traefik. HTTP-aware: URL routing (/api → backend1, /static → CDN), header manipulation, session affinity (sticky sessions via cookie), SSL offloading. Health checks: L4=TCP connect, L7=HTTP 200. Algorithms: Round Robin, Least Connections, IP Hash."
    },
    {
      q: "מה HTTP/2 Server Push ואיך מחליט מה לdush?",
      correct: "Server שולח resources (CSS/JS) לפני שclient ביקש — מפחית round trips. מבוסס על Link header או קוד server",
      choices: [
        "Server שולח resources (CSS/JS) לפני שclient ביקש — מפחית round trips. מבוסס על Link header או קד server",
        "Server Push = WebSocket",
        "Server Push = Server-Sent Events",
        "Server Push לא קיים ב-HTTP/2"
      ],
      explanation: "Server Push: שרת יודע שHTML דורש style.css → דוחף לפני שclient ביקש. Link preload header: Link: </style.css>; rel=preload; as=style. בעיה: over-pushing (cache לא נלקח בחשבון). HTTP/2 Push deprecated בChrome. Replaced by 103 Early Hints: שרת שולח hints לפני תגובה מלאה. HTTP/3 (QUIC): אין Server Push (הוסר)."
    }
  ],

  23: [
    {
      q: "מה גרם לנפילת פייסבוק ב-2021 למשך 6 שעות?",
      correct: "ביטול BGP prefix announcements — פייסבוק הסירה את עצמה ממפת האינטרנט",
      choices: [
        "ביטול BGP prefix announcements — פייסבוק הסירה את עצמה ממפת האינטרנט",
        "מתקפת DDoS של 5 Tbps",
        "כשל בmain database",
        "DNS record שגוי"
      ],
      explanation: "config change שגוי ביטל BGP announcements. ה-router של פייסבוק הפסיק לספר לעולם 'אני כאן'. כשל אחד מחק מיליארדי דולרים בשווי שוק. ואז — כלי התיקון גם הם היו בפנים 🌐"
    },
    {
      q: "מה blameless postmortem?",
      correct: "ניתוח כשל שמחפש סיבות מערכתיות — לא מי אשם — כדי למנוע הישנות",
      choices: [
        "ניתוח כשל שמחפש סיבות מערכתיות — לא מי אשם — כדי למנוע הישנות",
        "דוח שמסביר מי אחראי לכשל",
        "נוהל לפיצוי לקוחות אחרי downtime",
        "תיעוד של כל השינויים בקוד"
      ],
      explanation: "כשיש עונש — אנשים מסתירים מידע. בלי עונש — מדווחים בפתיחות, הלמידה עמוקה. Google SRE Book, Netflix — כולם מאמינים: 'המערכת כשלה, לא האדם'. Action items > punishment 📚"
    },
    {
      q: "מה BGP Hijacking ואיך RPKI מגן?",
      correct: "BGP Hijacking: AS מפרסם prefix שלא שלו. RPKI: ROA (Route Origin Authorization) — certificate שמאמת 'AS X מורשה לפרסם prefix Y'",
      choices: [
        "BGP Hijacking: AS מפרסם prefix שלא שלו. RPKI: ROA (Route Origin Authorization) — certificate שמאמת 'AS X מורשה לפרסם prefix Y'",
        "BGP Hijacking = DDoS על BGP routers",
        "RPKI = הצפנת BGP updates",
        "BGP אינו ניתן לhijacking כי מאומת"
      ],
      explanation: "Pakistan Telecom 2008: הזריק 208.65.153.0/24 (vs YouTube /22). Longest prefix match → 75% YouTube traffic ל-Pakistan. RPKI: CA hierarchy (IANA → RIR → LIR → customer). ROA: AS Number + Prefix + max length. Validator: מוריד RPKI repository, בודק routes. INVALID routes: filtered by rpki-filtered policy. BGPsec: חותם כל hop (מורכב, נדיר)."
    },
    {
      q: "מה Internet Exchange Point (IXP) ולמה חשוב?",
      correct: "IXP = מרכז ח physical שבו ISPs/CDNs מחברים ישירות ומחליפים BGP routes ללא עלות transit",
      choices: [
        "IXP = מרכז physical שבו ISPs/CDNs מחברים ישירות ומחליפים BGP routes ללא עלות transit",
        "IXP = ISP מרכזי שמנהל כל ה-routing",
        "IXP = Internet extension protocol",
        "IXP = חיבור בין IPv4 ל-IPv6"
      ],
      explanation: "IXP ב-ישראל: ILIX. גדולים: AMS-IX (Amsterdam), DE-CIX (Frankfurt), LINX (London). Peering: חיבור ישיר בין 2 AS ללא תשלום (settlement-free). Transit: תשלום ל-upstream ISP לrauting כללי. Hot potato routing: שלח traffic ל-peer מוקדם ככל האפשר. Cold potato routing: שמור traffic ב-רשת שלך כמה שאפשר. Route server: מנהל BGP sessions לכל משתתפי IXP."
    },
    {
      q: "מה Submarine Cable ואיך אינטרנט עובד תחת האוקיינוס?",
      correct: "כבלים פיזיים בתחתית האוקיינוס = 95% מתעבורת הdata הבינלאומית. Latency: ~100ms לחצות האוקיינוס האטלנטי",
      choices: [
        "כבלים פיזיים בתחתית האוקיינוס = 95% מתעבורת הdata הבינלאומית. Latency: ~100ms לחצות האוקיינוס האטלנטי",
        "אינטרנט בינלאומי = לוויינים בעיקר",
        "Latency לחצות אוקיינוס = 5ms",
        "כבלי תת-ים = 50% מהtraffc בלבד"
      ],
      explanation: "Submarine cables: אלומת fiber optic, הגנות מכניות. Repeaters כל 50-100km. Capacity: terabits/sec. Break: שיטפונות, עוגנים, כרישים. Repair ships: 3-6 שבועות. Starlink/LEO: ~20ms latency (לחשב) — יתרון על כבלים. TeleGeography: mapa מעודכנת. Microsoft/Google/Facebook: מחזיקים כבלים פרטיים (Azure, Equiano, MAREA)."
    }
  ],

  24: [
    {
      q: "מה Open Connect Appliance של Netflix?",
      correct: "שרת cache שNetflix מספקת חינם לISPs — הvideo נשמר מקומית ברשת ה-ISP",
      choices: [
        "שרת cache שNetflix מספקת חינם לISPs — הvideo נשמר מקומית ברשת ה-ISP",
        "שרת תוכן מרכזי של Netflix באמריקה",
        "כלי monitoring לניטור ביצועי streaming",
        "מנגנון הצפנה להגנה על תוכן"
      ],
      explanation: "Netflix שמה OCA בISPs בחינם. ה-ISP מקבל hardware, Netflix חוסכת transit ב-$M. בלילה Netflix מcache מראש content פופולרי. למחרת — הvideo מגיע מ-ISP עצמו, latency 5ms. גאוני 💡"
    },
    {
      q: "מה Anycast routing?",
      correct: "אותה כתובת IP מוכרזת ממאות מקומות — BGP מנתב לנקודה הקרובה ביותר",
      choices: [
        "אותה כתובת IP מוכרזת ממאות מקומות — BGP מנתב לנקודה הקרובה ביותר",
        "חלוקת עומס בין שרתים לפי אלגוריתם Round Robin",
        "שליחת packet לכל המכשירים ברשת",
        "הצפנת routing information ב-BGP"
      ],
      explanation: "1.1.1.1 של Cloudflare = כתובת Anycast. BGP מנתב אותך ל-PoP הקרוב מ-300 מיקומים. DDoS? תנועה מתחלקת ל-300 PoPs — כל אחד ספג שבריר. Netflix, Google, Cloudflare כולם משתמשים 🌍"
    },
    {
      q: "מה DPI (Deep Packet Inspection) ואיך ISPs משתמשים בו?",
      correct: "DPI: ניתוח תוכן packets מעבר לheaders — ISPs יכולים לזהות BitTorrent, Netflix, לחסום sites, לבצע traffic shaping",
      choices: [
        "DPI: ניתוח תוכן packets מעבר לheaders — ISPs יכולים לזהות BitTorrent, Netflix, לחסום sites, לבצע traffic shaping",
        "DPI = DNS Privacy Inspector",
        "DPI עובד רק על unencrypted traffic",
        "DPI = הצפנת packets ב-router"
      ],
      explanation: "DPI vs SPI: SPI = stateful inspection (L3/L4). DPI = L7 payload analysis. שימושים: ISP throttling (YouTube QoS), censorship (Great Firewall), malware detection, lawful interception. HTTPS: DPI לא יכול לקרוא תוכן (מוצפן). ESNI/ECH: מסתיר SNI (hostname) — מסכל DPI-based blocking. Net Neutrality: מניעת DPI-based discrimination."
    },
    {
      q: "מה Data Center topology ו-Spine-Leaf Architecture?",
      correct: "Spine-Leaf: 2 שכבות — Leaf (ToR switches) מחוברים לכל Spine. Equal latency בין כל servers. מחליף traditional 3-tier (Core/Dist/Access)",
      choices: [
        "Spine-Leaf: 2 שכבות — Leaf (ToR switches) מחוברים לכל Spine. Equal latency בין כל servers. מחליף traditional 3-tier (Core/Dist/Access)",
        "Spine-Leaf = Spanning Tree topology",
        "Spine = core routers, Leaf = servers בלבד",
        "Spine-Leaf משתמש ב-STP"
      ],
      explanation: "Traditional 3-tier: Core (L3) → Distribution (L3) → Access (L2). Bottleneck ב-aggregation. Spine-Leaf: כל Leaf מחובר לכל Spine. East-West traffic = 1 hop. BGP/ECMP: ללא STP. ToR (Top of Rack): switch בתוך rack. Clos network (Bell Labs, 1950s). Facebook/Google datacenters: custom silicon (Arista, Broadcom). eBGP ב-datacenter: RFC 7938."
    },
    {
      q: "מה Latency לעומת Bandwidth ולמה latency חשוב יותר בinteractive apps?",
      correct: "Bandwidth = כמה data/שנייה. Latency = כמה זמן לpacket להגיע. Interactive (gaming/VoIP/WebRTC): latency קריטי. Bulk transfer: bandwidth קריטי",
      choices: [
        "Bandwidth = כמה data/שנייה. Latency = כמה זמן לpacket להגיע. Interactive (gaming/VoIP/WebRTC): latency קריטי. Bulk transfer: bandwidth קריטי",
        "Bandwidth ו-Latency אותו דבר",
        "Bandwidth תמיד חשוב יותר",
        "Latency = Round Trip Time + Bandwidth"
      ],
      explanation: "RTT (Round Trip Time): ping. One-way: RTT/2. Sources of latency: propagation (speed of light = ~200km/ms fiber), transmission (packet size / bandwidth), processing (router forwarding), queuing (buffer). Bandwidth-delay product: bytes in flight = bandwidth × RTT. 100Mbps × 100ms = 1.25MB outstanding. TCP buffer tuning: net.core.rmem_max. Gaming: >100ms = unplayable. Jitter = variation in latency = VoIP quality killer."
    }
  ],

  25: [
    {
      q: "מה ISP יכול לראות כשגולשים ב-HTTPS?",
      correct: "DNS queries ו-TLS SNI (שם הדומיין) — לא את תוכן הדפים",
      choices: [
        "DNS queries ו-TLS SNI (שם הדומיין) — לא את תוכן הדפים",
        "הכל, כולל סיסמאות וhistory",
        "רק כתובת IP — לא יותר",
        "כלום — HTTPS מוצפן לחלוטין"
      ],
      explanation: "HTTPS מצפין תוכן — אבל DNS query (מה ה-IP של google.com?) נשלח בplaintext. TLS SNI בחיבור = שם הדומיין בclear. ISP רואה timeline: 08:23 gmail.com, 09:17 bankofamerica.com. DoH+ECH = פתרון 👁️"
    },
    {
      q: "מה Browser Fingerprinting?",
      correct: "זיהוי ייחודי של דפדפן לפי canvas rendering, fonts, WebGL — ללא cookies",
      choices: [
        "זיהוי ייחודי של דפדפן לפי canvas rendering, fonts, WebGL — ללא cookies",
        "בדיקת אמינות אתרים ע\"י הדפדפן",
        "שמירת היסטוריית גלישה",
        "הצגת fingerprint של SSL Certificate"
      ],
      explanation: "Canvas fingerprint: הדפדפן מצייר טקסט — הpixels שונים בכל GPU/OS. Fonts, WebGL, screen = כמות אינסופית של שילובים. ייחודי כמעט כמו DNA. Incognito לא עוזר! Tor Browser מרנדמז 🖐️"
    },
    {
      q: "מה SNI (Server Name Indication) ואיך TLS מכריז על הdomain?",
      correct: "SNI: ClientHello כולל hostname בplaintext (לפני הצפנה). מאפשר virtual hosting של HTTPS. ECH מסתיר SNI",
      choices: [
        "SNI: ClientHello כולל hostname בplaintext (לפני הצפנה). מאפשר virtual hosting של HTTPS. ECH מסתיר SNI",
        "SNI = SSL certificate של server",
        "SNI = DNS record ל-HTTPS",
        "SNI מוצפן מהרגע הראשון"
      ],
      explanation: "ללא SNI: server אחד = IP אחד = certificate אחד. עם SNI: מאות domains על IP אחד. ClientHello: server_name extension = hostname. ISP/firewall: יכול לראות ולחסום לפי SNI (גם ב-HTTPS). ESNI (deprecated): encrypted SNI. ECH (Encrypted Client Hello): encrypted כל ClientHello, כולל SNI. Cloudflare: תומך ECH. הסתרת SNI = קשה יותר לcensorship."
    },
    {
      q: "מה Browser Fingerprinting וכיצד websites עוקבות ללא cookies?",
      correct: "Browser Fingerprint: שילוב Canvas, WebGL, fonts, plugins, screen, timezone = ID כמעט ייחודי. לא ניתן למחיקה כמו cookies",
      choices: [
        "Browser Fingerprint: שילוב Canvas, WebGL, fonts, plugins, screen, timezone = ID כמעט ייחודי. לא ניתן למחיקה כמו cookies",
        "Fingerprinting = cookies מוצפנים",
        "Browser Fingerprint = IP address בלבד",
        "Fingerprinting עובד רק ב-Chrome"
      ],
      explanation: "Canvas fingerprint: מצייר text/shape ← GPU rendering שונה לכל GPU+driver = ייחודי. AudioContext, WebGL, font enumeration, screen resolution, timezone, language, plugins, Do Not Track. EFF Panopticlick/Cover Your Tracks. Firefox: resistFingerprinting=true. Brave: randomizes fingerprint per session. Tor Browser: identical fingerprint לכל users (protection by uniformity)."
    },
    {
      q: "מה Traffic Analysis ומה VPN לא מגן עליו?",
      correct: "Traffic Analysis: גם עם VPN ניתן לזהות volume, timing, patterns — Netflix vs gaming vs Tor שונים. VPN מסתיר תוכן, לא behavior",
      choices: [
        "Traffic Analysis: גם עם VPN ניתן לזהות volume, timing, patterns — Netflix vs gaming vs Tor שונים. VPN מסתיר תוכן, לא behavior",
        "VPN מגן מפני כל סוגי ניטור",
        "Traffic Analysis = DPI — VPN מגן לחלוטין",
        "Traffic Analysis עובד רק ב-HTTP"
      ],
      explanation: "Traffic Analysis: NSA/Tor research. Packet timing, size distribution, inter-arrival time → identify application. Netflix: big constant streams. Gaming: small bidirectional 60-100pps. Video call: ~1-3 Mbps, symmetric. Correlation attack: adversary ב-exit + entry = deanonymize Tor. Website fingerprinting: ML על timing/size → identify site via Tor. Defense: obfs4, meek (mimics HTTPS/CDN)."
    }
  ],

  26: [
    {
      q: "מה ההבדל העיקרי בין HTTP/2 ל-HTTP/3?",
      correct: "HTTP/2 על TCP (יש HOL blocking ב-transport), HTTP/3 על QUIC/UDP (streams עצמאיים)",
      choices: [
        "HTTP/2 על TCP (יש HOL blocking ב-transport), HTTP/3 על QUIC/UDP (streams עצמאיים)",
        "HTTP/3 מהיר יותר כי משתמש בUDP שמהיר מTCP",
        "HTTP/3 מוסיף הצפנה שלא הייתה בHTTP/2",
        "HTTP/2 לdeskop, HTTP/3 למובייל"
      ],
      explanation: "HTTP/2 פתר HOL blocking ב-Application layer — אבל TCP עדיין בעיה. חבילה אחת אבודה = כל streams מחכים. QUIC: כל stream עצמאי גם ב-transport. אובדן חבילה = רק stream אחד מושפע. 25%+ מהאינטרנט כבר HTTP/3 🚀"
    },
    {
      q: "מה eBPF מאפשר שלא היה אפשרי קודם?",
      correct: "להריץ קוד בתוך Linux kernel — בזמן אמת, בלי kernel module, בלי reboot",
      choices: [
        "להריץ קוד בתוך Linux kernel — בזמן אמת, בלי kernel module, בלי reboot",
        "לתכנת network cards ישירות",
        "להריץ applications בmemory מוגן",
        "לדבג kernel crashes בproduction"
      ],
      explanation: "eBPF = revolution. XDP: drop packets לפני ה-network stack — מיליוני pps. Cilium: מחליף iptables בKubernetes. Observability: trace כל syscall בproduction ללא overhead. Cloudflare, Meta, Google, Netflix = כולם eBPF 🔧"
    },
    {
      q: "מה eBPF ואיך הוא שינה Linux networking?",
      correct: "eBPF: תוכניות verified רצות ב-kernel ללא module loading. XDP: drop packets לפני network stack. TC: traffic shaping. Kprobes: tracing",
      choices: [
        "eBPF: תוכניות verified רצות ב-kernel ללא module loading. XDP: drop packets לפני network stack. TC: traffic shaping. Kprobes: tracing",
        "eBPF = encryption protocol",
        "eBPF = kernel module loading",
        "eBPF פועל ב-userspace בלבד"
      ],
      explanation: "eBPF programs: bytecode → Verifier (safety) → JIT compiled → runs in kernel context. Hook points: XDP (NIC driver level), TC (traffic control), socket filters, kprobe/tracepoint (observability). Use cases: Cilium (K8s networking), Katran (Facebook LB), Falco (security), bpftrace (debugging). Performance: XDP drop = 26M pps vs iptables = 3M pps."
    },
    {
      q: "מה QUIC ואיך HTTP/3 מתמודד עם Head-of-Line Blocking?",
      correct: "QUIC: UDP-based, כל stream עצמאי. אובדן packet בstream A לא חוסם stream B. HTTP/2 על TCP: loss חוסם כל ה-streams",
      choices: [
        "QUIC: UDP-based, כל stream עצמאי. אובדן packet בstream A לא חוסם stream B. HTTP/2 על TCP: loss חוסם כל ה-streams",
        "QUIC פותר HOL Blocking לחלוטין גם ב-TCP",
        "HTTP/3 = HTTP/2 על TLS 1.3",
        "QUIC = UDP עם TCP header"
      ],
      explanation: "HTTP/2 HOL: TCP חייב לשמור על סדר bytes. Loss → NACK → retransmit → כל streams מחכים. QUIC: UDP, כל stream מנוהל בנפרד. Loss בstream 1 לא עוצר stream 2. Connection ID: מאפשר migration (WiFi → 4G). 0-RTT: connection resumption בלי handshake. TLS 1.3 מובנה. Chrome, YouTube, Facebook: ~30% QUIC."
    },
    {
      q: "מה DPDK ואיזה שימושים של networking ב-userspace?",
      correct: "DPDK (Data Plane Development Kit): מעקף kernel, direct NIC access מ-userspace. מאפשר >40Mpps. שימוש: 5G, software routers, NFV",
      choices: [
        "DPDK (Data Plane Development Kit): מעקף kernel, direct NIC access מ-userspace. מאפשר >40Mpps. שימוש: 5G, software routers, NFV",
        "DPDK = Docker networking plugin",
        "DPDK = תקן לencryption",
        "DPDK מאיט networking"
      ],
      explanation: "Kernel networking: interrupt-driven, system call overhead. DPDK: polling mode driver, huge pages, lockless rings. VPP (Vector Packet Processing): Cisco open-source, DPDK-based, hundreds Gbps. SRIOV: physical NIC → virtual functions → VM direct access. NFV (Network Functions Virtualization): firewall, LB, router ב-software. Intel DPDK: 10-100Gbps on commodity hardware."
    }
  ],
  27: [
    {
      q: "מה ההסמכה המרכזית ל-Network Engineer ברמת Entry/Mid?",
      correct: "CCNA — Cisco Certified Network Associate",
      choices: [
        "CCNA — Cisco Certified Network Associate",
        "OSCP — Offensive Security Certified Professional",
        "AWS SAA — Solutions Architect Associate",
        "CKA — Certified Kubernetes Administrator"
      ],
      explanation: "CCNA היא הסמכת הרשתות הנחשבת ביותר. מכסה VLAN, STP, OSPF, ACL, NAT, VPN. מעל CCNA: CCNP (מתקדם), CCIE (Expert — מהקשות בתעשייה). CompTIA Network+ היא נקודת כניסה קלה יותר לפני CCNA."
    },
    {
      q: "מה ההבדל בין Penetration Tester לבין SOC Analyst?",
      correct: "Pentester תוקף מערכות (בהרשאה) למציאת חולשות; SOC Analyst מנטר ומגיב לאיומים בזמן אמת",
      choices: [
        "Pentester תוקף מערכות (בהרשאה) למציאת חולשות; SOC Analyst מנטר ומגיב לאיומים בזמן אמת",
        "Pentester עובד עם קוד; SOC Analyst עם חומרה",
        "SOC Analyst מנהל firewalls; Pentester כותב malware",
        "שניהם אותו תפקיד בשמות שונים"
      ],
      explanation: "Red Team (Pentester) = תוקף לגיטימי. מקבל scope, מחפש חולשות, כותב דוח. Blue Team (SOC) = מגן. מנטר SIEM, מנתח alerts, עוצר תקיפות. הסמכות: Pentester → CEH, OSCP. SOC → Security+, CySA+, GCIA."
    },
    {
      q: "למה ידע ברשתות הכרחי לעבודה עם AWS/Cloud?",
      correct: "AWS VPC = רשת וירטואלית עם subnets, routing tables, security groups — בדיוק כמו רשת פיזית",
      choices: [
        "AWS VPC = רשת וירטואלית עם subnets, routing tables, security groups — בדיוק כמו רשת פיזית",
        "Cloud לא קשור לרשתות — הכל מנוהל אוטומטית",
        "ידע ברשתות נדרש רק ל-on-premise, לא לCloud",
        "AWS דורש CCNA כתנאי לשימוש"
      ],
      explanation: "AWS VPC דורש תכנון: CIDR allocation, Public vs Private subnets, Internet Gateway, NAT Gateway, route tables, security groups (stateful firewall), NACLs (stateless). Load Balancer: Layer 4 vs Layer 7. Kubernetes: CNI plugins, Pod networking, Ingress. כל אלה = רשתות."
    },
    {
      q: "מה ההבדל בין NOC לבין SOC?",
      correct: "NOC: Network Operations Center — זמינות ו-performance. SOC: Security Operations Center — threats ו-incidents. לעיתים מאוחדים ב-Unified Operations Center",
      choices: [
        "NOC: Network Operations Center — זמינות ו-performance. SOC: Security Operations Center — threats ו-incidents. לעיתים מאוחדים ב-Unified Operations Center",
        "NOC ו-SOC זהים",
        "SOC = Network Operations Center",
        "NOC = Security, SOC = Performance"
      ],
      explanation: "NOC: ניטור uptime, BGP routes, bandwidth, latency, hardware failures. Tools: Nagios, Zabbix, PRTG, SolarWinds. SOC: SIEM alerts, threat hunting, incident response. Tools: Splunk, Sentinel, CrowdStrike. Career paths diverge: NOC → Network Engineer → CCIE / Cloud Architect. SOC → Security Analyst → Pentester → CISSP → CISO."
    },
    {
      q: "מה Cloud native networking לעומת traditional networking?",
      correct: "Cloud Native: overlay networks, software-defined, ephemeral IPs, service mesh. Traditional: physical switches, static IPs, VLAN-based segmentation",
      choices: [
        "Cloud Native: overlay networks, software-defined, ephemeral IPs, service mesh. Traditional: physical switches, static IPs, VLAN-based segmentation",
        "Cloud Native = traditional networking על AWS",
        "Traditional = ישן ולא בשימוש",
        "Cloud Native משתמש רק ב-IPv6"
      ],
      explanation: "Cloud Native: VPC (virtual switches/routers), Security Groups (stateful firewall API), ENI (virtual NIC). K8s: Pod IPs ephemeral (חיים כזמן Pod). Service: stable virtual IP (ClusterIP). Ingress: L7 load balancer. Service Mesh (Istio, Linkerd): mTLS בין services, observability, traffic policies. Overlay: VXLAN/Geneve (UDP encapsulation). Traditional: VLANs, static routing, physical hardware lifecycle."
    },
    {
      q: "מה Software Defined Networking (SDN)?",
      correct: "SDN: הפרדת Control Plane מ-Data Plane. Controller מרכזי (OpenFlow) מתכנת forwarding tables של כל switches",
      choices: [
        "SDN: הפרדת Control Plane מ-Data Plane. Controller מרכזי (OpenFlow) מתכנת forwarding tables של כל switches",
        "SDN = networking ללא hardware",
        "SDN = IPv6",
        "SDN = Software Defined Network = VPN"
      ],
      explanation: "Traditional: כל switch מחזיק control plane + data plane. SDN: Controller (ONOS, OpenDaylight) = control plane centralized. Switch = dumb forwarding only. OpenFlow: protocol בין controller לswitch. NFV: software replaces hardware functions. SD-WAN: SDN לWAN links, policy-based routing. Intent-based networking (IBN): מגדירים מה רוצים, לא איך להשיג. Cisco DNA Center, Juniper Apstra."
    }
  ],

  // ===== Cyber Security Track (101-106) =====
  101: [
    {
      q: "מה מייצגת ה-'I' ב-CIA Triad?",
      correct: "Integrity — הנתונים לא שונו ולא זויפו",
      choices: [
        "Integrity — הנתונים לא שונו ולא זויפו",
        "Identification — זיהוי המשתמש",
        "Infrastructure — תשתית מאובטחת",
        "Intrusion — זיהוי חדירה"
      ],
      explanation: "CIA Triad: Confidentiality (סודיות — רק מורשים רואים), Integrity (שלמות — הנתון לא שונה), Availability (זמינות — המערכת עובדת). Integrity מוגנת על ידי hashing (SHA-256), signatures דיגיטליות, ו-checksums."
    },
    {
      q: "מהו STRIDE ב-Threat Modeling?",
      correct: "מסגרת לזיהוי איומים: Spoofing, Tampering, Repudiation, Info Disclosure, DoS, Elevation",
      choices: [
        "מסגרת לזיהוי איומים: Spoofing, Tampering, Repudiation, Info Disclosure, DoS, Elevation",
        "פרוטוקול לאימות זהות ברשת",
        "סוג מתקפה על TLS",
        "כלי לסריקת פגיעויות"
      ],
      explanation: "STRIDE פותח על ידי Microsoft לסיוע בתכנון אבטחה: S=Spoofing (התחזות), T=Tampering (זיוף נתונים), R=Repudiation (הכחשה), I=Information Disclosure (דליפת מידע), D=Denial of Service (הפלת שירות), E=Elevation of Privilege (הרחבת הרשאות)."
    },
    {
      q: "מה אפשרה פריצת Target ב-2013?",
      correct: "גישה לרשת Target דרך ספק HVAC שהיה מחובר לאותה רשת כמו מערכות הקופה",
      choices: [
        "גישה לרשת Target דרך ספק HVAC שהיה מחובר לאותה רשת כמו מערכות הקופה",
        "פריצה ישירה לשרתי Target מהאינטרנט",
        "SQL Injection על אתר Target",
        "סיסמה חלשה של מנהל IT בכיר"
      ],
      explanation: "ספק HVAC (מיזוג) קיבל גישה לרשת Target לניהול מרחוק. הפורצים פרצו לספק, השתמשו בpivoting לרשת Target, והגיעו למערכות Point-of-Sale. 40M כרטיסי אשראי נגנבו. הלקח: Network Segmentation — ספקים חיצוניים = רשת נפרדת."
    },
        {
      q: "מה ההבדל בין Confidentiality לבין Privacy ב-אבטחת מידע?",
      correct: "Confidentiality מגן על נתוני ארגון מפני גישה לא מורשית; Privacy מגן על נתונים אישיים של פרטים",
      choices: [
        "Confidentiality מגן על נתוני ארגון מפני גישה לא מורשית; Privacy מגן על נתונים אישיים של פרטים",
        "הם מילים נרדפות — שניהם אותו דבר",
        "Privacy חזקה יותר מ-Confidentiality",
        "Confidentiality מוגן בהצפנה, Privacy מוגן בסיסמאות בלבד"
      ],
      explanation: "Confidentiality: מונע חשיפת נתונים לגורמים לא מורשים (מסמך סודי חברה). Privacy: זכות הפרט על נתוניו האישיים (GDPR, CCPA). חפיפה: קיימת — אך ניתן להפר Privacy מבלי לפגוע ב-Confidentiality (למשל: עובד מורשה שמוכר נתוני לקוחות לצד שלישי)."
    },
        {
      q: "מה תהליך Threat Modeling ולמה עושים אותו לפני כתיבת קוד?",
      correct: "תהליך זיהוי איומים פוטנציאליים על המערכת לפני פיתוח — זול יותר לתקן בשלב התכנון מאשר ב-production",
      choices: [
        "תהליך זיהוי איומים פוטנציאליים על המערכת לפני פיתוח — זול יותר לתקן בשלב התכנון מאשר ב-production",
        "בדיקת חדירה שמבוצעת לאחר deployment",
        "כלי אוטומטי שסורק קוד לפגיעויות",
        "תהליך הצפנת מסד הנתונים לפני העלייה לאוויר"
      ],
      explanation: "Threat Modeling (STRIDE, PASTA, DREAD): שאל את עצמך — מי יתקוף? איך? מה יפגע? תיקון bug בשלב design עולה $1; בשלב testing עולה $10; ב-production עולה $100. Microsoft SDLC מחייב Threat Modeling לפני כל feature חדש. הפלט: Data Flow Diagram + רשימת איומים + mitigations."
    },
        {
      q: "מה זה Attack Surface ואיך מצמצמים אותו?",
      correct: "סך כל נקודות הכניסה האפשריות למערכת — מצמצמים על ידי כיבוי שירותים מיותרים, עדכוני patches, principle of least privilege",
      choices: [
        "סך כל נקודות הכניסה האפשריות למערכת — מצמצמים על ידי כיבוי שירותים מיותרים, עדכוני patches, principle of least privilege",
        "שטח הפנים הפיזי של שרת — מצמצמים על ידי התקנה בחדר סגור",
        "מספר המשתמשים עם גישה לאינטרנט",
        "מספר הפורטים הפתוחים — מצמצמים על ידי חומת אש"
      ],
      explanation: "Attack Surface = כל interface, endpoint, שירות, משתמש, ו-API שתוקף יכול לנסות לנצל. Reduction techniques: כבה שירותים שאינם בשימוש (disable FTP אם לא צריך), הסר תוכנות מיותרות, הפעל Principle of Least Privilege, עדכן patches, הגבל גישת רשת ב-firewall rules. קטן יותר = פחות מקומות לתקוף."
    }
  ],

  102: [
    {
      q: "מה ההבדל בין SYN scan (-sS) לבין Connect scan (-sT) ב-Nmap?",
      correct: "SYN scan שולח רק SYN ולא מסיים handshake — סטלת'י יותר ולא נרשם בלוגי האפליקציה",
      choices: [
        "SYN scan שולח רק SYN ולא מסיים handshake — סטלת'י יותר ולא נרשם בלוגי האפליקציה",
        "SYN scan מהיר יותר כי משתמש בUDP",
        "Connect scan דורש הרשאות root",
        "אין הבדל — שניהם עושים אותו דבר"
      ],
      explanation: "SYN scan (Half-open): SYN → SYN-ACK → RST. לא מסיים חיבור = לא נרשם בlogs של האפליקציה. דורש root. Connect scan: TCP handshake מלא — נרשם בlogs, לא צריך root. -sS מועדף ב-pentest. -sT לא-root environments."
    },
    {
      q: "מה פקודת Nmap שסורקת כל הפורטים עם זיהוי שירות ומערכת הפעלה?",
      correct: "nmap -sS -sV -O -p- target",
      choices: [
        "nmap -sS -sV -O -p- target",
        "nmap --full-scan target",
        "nmap -a -all target",
        "nmap -sU -complete target"
      ],
      explanation: "-sS: SYN scan. -sV: version detection (שירות על הפורט). -O: OS fingerprinting. -p-: כל 65535 פורטים (לא רק top 1000). אפשר לאחד: nmap -A -p- target (-A = -sV -O --script=default). זמן ריצה: 10-30 דקות על כל הפורטים."
    },
    {
      q: "מה הסימן הראשון שיש open port ב-Nmap output?",
      correct: "STATE: open — הפורט מחזיר SYN-ACK לבקשת SYN",
      choices: [
        "STATE: open — הפורט מחזיר SYN-ACK לבקשת SYN",
        "STATE: active",
        "RESPONSE: 200 OK",
        "PORT: listening"
      ],
      explanation: "Nmap מדווח 3 states: open (מקבל חיבורים), closed (port אין שירות — מגיב RST), filtered (firewall חוסם — אין תגובה או ICMP unreachable). open/filtered = לא ברור בגלל firewall."
    },
        {
      q: "מה קורה ב-ARP Spoofing ואיך תוקף מנצל אותו?",
      correct: "תוקף שולח ARP replies מזויפים כדי לשייך את MAC שלו לIP של קורבן — כל תעבורה עוברת דרכו (MITM)",
      choices: [
        "תוקף שולח ARP replies מזויפים כדי לשייך את MAC שלו לIP של קורבן — כל תעבורה עוברת דרכו (MITM)",
        "תוקף מציף את הרשת בחבילות ARP כדי להפיל שרות",
        "תוקף מחליף את כתובות IP בחבילות UDP",
        "תוקף מנצל חולשה בפרוטוקול DNS"
      ],
      explanation: "ARP (Address Resolution Protocol) אין לו אימות — כל אחד יכול לשלוח ARP reply. תוקף שולח: 'כתובת IP של ה-gateway היא MAC שלי!' → הקורבן מעדכן ARP cache → כל ה-traffic עובר דרך התוקף. הגנה: Dynamic ARP Inspection (DAI) בswitches, static ARP entries, ARP monitoring tools כמו ARPwatch."
    },
        {
      q: "מה ההבדל בין Volumetric DDoS לבין Application Layer DDoS (L7)?",
      correct: "Volumetric מציף bandwidth (Gbps של UDP/ICMP); L7 שולח בקשות HTTP לגיטימיות לאיטיות שמרוקנות resources של שרת",
      choices: [
        "Volumetric מציף bandwidth (Gbps של UDP/ICMP); L7 שולח בקשות HTTP לגיטימיות לאיטיות שמרוקנות resources של שרת",
        "Volumetric תוקף שרתי DNS; L7 תוקף רק שרתי web",
        "L7 יותר קל לחסום כי השרת רואה את ה-IP",
        "אין הבדל — שניהם מרוקנים bandwidth"
      ],
      explanation: "Volumetric (L3/L4): מציף pipe עם gigabits של data — UDP flood, ICMP flood, SYN flood. קל לזהות (תעבורה חריגה) אך קשה לעצור ללא ISP-level scrubbing. Application L7: Slowloris (מחזיק חיבורים HTTP פתוחים), HTTP flood — בקשות נראות לגיטימיות, קשה להבחין מתעבורה אמיתית. מחייב WAF, rate limiting, challenge-response (CAPTCHA)."
    },
        {
      q: "מהי מתקפת Replay Attack ואיך TLS מונע אותה?",
      correct: "תוקף מיירט ומשחזר חבילה חוקית — TLS מונע באמצעות sequence numbers ו-session tokens חד-פעמיים",
      choices: [
        "תוקף מיירט ומשחזר חבילה חוקית — TLS מונע באמצעות sequence numbers ו-session tokens חד-פעמיים",
        "תוקף שולח אותה בקשה פעמיים לגרום לעיבוד כפול",
        "תוקף מקליט שיחת קול ומשחזר אותה לאחר שיחה",
        "TLS לא מגן מפני Replay — נדרש אימות נוסף"
      ],
      explanation: "Replay Attack: Mallory מיירטת authentication token תקני של Alice → שולחת שוב לשרת → מתחזה לAlice. TLS 1.3: כל חיבור מקבל nonce ייחודי + sequence numbers. Token-based: JWT כולל exp (expiration) + jti (JWT ID) חד-פעמי. בפרוטוקולים ישנים (Kerberos ישן) — Replay היה בעיה קריטית. NTP sync חשוב למניעה!"
    }
  ],

  103: [
    {
      q: "מה ההבדל בין Stored XSS לבין Reflected XSS?",
      correct: "Stored XSS נשמר בDB ומורץ לכל מבקר; Reflected XSS חוזר מהשרת רק למי ששלח את ה-URL הזדוני",
      choices: [
        "Stored XSS נשמר בDB ומורץ לכל מבקר; Reflected XSS חוזר מהשרת רק למי ששלח את ה-URL הזדוני",
        "Stored XSS על שרתי Windows; Reflected XSS על Linux",
        "Reflected XSS חמור יותר כי מסוגל לגנוב סיסמות",
        "שניהם זהים — רק שמות שונים"
      ],
      explanation: "Stored (Persistent) XSS: script נשמר בDB (תגובה בפורום למשל) → כל מי שצופה = מורץ. Reflected: script ב-URL → נשלח למשתמש, מורץ מיד. DOM-based: ב-client-side JS ללא שרת. Stored = הכי מסוכן (scale). הגנה: output encoding, CSP headers."
    },
    {
      q: "מה CVSS score של 9.8 מייצג?",
      correct: "Critical — פגיעות חמורה מאוד הניתנת לניצול מרחוק ללא אימות",
      choices: [
        "Critical — פגיעות חמורה מאוד הניתנת לניצול מרחוק ללא אימות",
        "High — פגיעות קשה אך דורשת גישה פיזית",
        "Medium — פגיעות בינונית עם השפעה מוגבלת",
        "תלוי בסוג המערכת"
      ],
      explanation: "CVSS v3 scale: 0.0=None, 0.1-3.9=Low, 4.0-6.9=Medium, 7.0-8.9=High, 9.0-10.0=Critical. 9.8 = RCE (Remote Code Execution) ללא authentication, network-accessible. Heartbleed ו-Log4Shell קיבלו CVSS 9.8+. כל Critical צריך patch תוך 24-48 שעות."
    },
    {
      q: "איך Heartbleed עבד טכנית?",
      correct: "בקשת heartbeat עם length שגויה — שרת החזיר זיכרון מעבר לבקשה, כולל private keys וסיסמות",
      choices: [
        "בקשת heartbeat עם length שגויה — שרת החזיר זיכרון מעבר לבקשה, כולל private keys וסיסמות",
        "Buffer overflow שמאפשר הרצת קוד שרירותי",
        "SQL injection במסד הנתונים של OpenSSL",
        "חיבור TLS לא מוצפן שאפשר האזנה"
      ],
      explanation: "OpenSSL Heartbeat extension: Client שולח 'send me back X bytes'. שרת מחזיר X bytes — מבלי לוודא שבאמת נשלחו X bytes בבקשה. Bug: אם ביקשת 64K אבל שלחת 1 byte, השרת מחזיר 64K מה-RAM — וה-RAM מכיל private keys, session tokens, סיסמות. 2 שנות exposure (2012-2014)."
    },
        {
      q: "מה SQL Injection ואיך prepared statements מונעים אותה?",
      correct: "הזרקת SQL code דרך input משתמש; Prepared Statements מפרידים קוד מנתונים — הפרמטרים מטופלים כ-data בלבד",
      choices: [
        "הזרקת SQL code דרך input משתמש; Prepared Statements מפרידים קוד מנתונים — הפרמטרים מטופלים כ-data בלבד",
        "מתקפה על שרת ה-SQL Server הפיזי; FixIT: עדכון שרת",
        "הצפנת שאילתות SQL לפני שליחה לDB",
        "Prepared Statements מהירים יותר — זו הסיבה העיקרית להשתמש בהם"
      ],
      explanation: "Classic SQLi: username=' OR '1'='1 → query: SELECT * FROM users WHERE name='' OR '1'='1' → תמיד true → bypass login! Prepared Statement (PHP): $stmt = $pdo->prepare('SELECT * FROM users WHERE name = ?'); $stmt->execute([$username]); — ה-? הוא placeholder, הDB מטפל בvalue כ-string, לא code. לעולם אל תשלב user input ישירות בSQL string!"
    },
        {
      q: "מה CSRF ואיך Anti-CSRF Token מגן?",
      correct: "Cross-Site Request Forgery: אתר זדוני גורם לדפדפן לשלוח בקשות לאתר אחר שבו המשתמש מחובר; Token ייחודי בכל form מונע זאת",
      choices: [
        "Cross-Site Request Forgery: אתר זדוני גורם לדפדפן לשלוח בקשות לאתר אחר שבו המשתמש מחובר; Token ייחודי בכל form מונע זאת",
        "מתקפה שמזייפת cookies של משתמש על ידי XSS",
        "גניבת CSRF headers מ-HTTP request",
        "כניסה לחשבון בעזרת סיסמה גנובה"
      ],
      explanation: "תרחיש: Alice מחוברת ל-bank.com. היא מבקרת ב-evil.com שיש בו: <img src='bank.com/transfer?to=attacker&amount=1000'>. הדפדפן שולח את ה-request עם cookies של Alice! Anti-CSRF Token: server מוסיף token נסתר לכל form → שולח token בbody → server מוודא שה-token תואם session. attacker.com לא יכול לקרוא את ה-token בגלל Same-Origin Policy."
    },
        {
      q: "מה OWASP Top 10 ואיזה vulnerability בדרך כלל תופס מקום ראשון?",
      correct: "רשימת 10 סיכוני האבטחה הנפוצים ביותר בweb applications; Broken Access Control תופס מקום 1 מאז 2021",
      choices: [
        "רשימת 10 סיכוני האבטחה הנפוצים ביותר בweb applications; Broken Access Control תופס מקום 1 מאז 2021",
        "רשימת 10 הכלים הטובים ביותר לבדיקות חדירה; SQLi במקום 1",
        "10 פגיעויות שנתגלו בשנת 2021 בלבד",
        "תקן ISO המגדיר אבטחת web; XSS במקום 1 תמיד"
      ],
      explanation: "OWASP Top 10 (2021): A01:Broken Access Control (משתמש יכול לגשת לresource של אחר), A02:Cryptographic Failures, A03:Injection (SQL/LDAP/OS), A04:Insecure Design, A05:Security Misconfiguration, A06:Vulnerable Components, A07:Auth Failures, A08:Integrity Failures, A09:Logging Failures, A10:SSRF. לא חוק — best practice guide לdev teams. מתעדכן כל ~4 שנים."
    }
  ],

  104: [
    {
      q: "מה Defense in Depth?",
      correct: "שכבות הגנה מרובות — כך שפריצת שכבה אחת לא מספיקה להגיע לנכס",
      choices: [
        "שכבות הגנה מרובות — כך שפריצת שכבה אחת לא מספיקה להגיע לנכס",
        "firewall חזק מאוד בכניסה לרשת",
        "הצפנת כל הנתונים בDB",
        "backup יומי לכל המערכות"
      ],
      explanation: "Defense in Depth: Perimeter (Firewall, WAF) → Network (IDS/IPS, Segmentation) → Endpoint (AV, EDR, Patch) → Application (Auth, RBAC, Input validation) → Data (Encryption, DLP) → Human (Training, Phishing simulation). כל שכבה מניחה שהשכבה החיצונית תיכשל."
    },
    {
      q: "מה ה-Incident Response lifecycle לפי NIST?",
      correct: "Preparation → Detection → Containment → Eradication → Recovery → Lessons Learned",
      choices: [
        "Preparation → Detection → Containment → Eradication → Recovery → Lessons Learned",
        "Alert → Triage → Patch → Report",
        "Monitor → Block → Clean → Backup",
        "Detect → Respond → Recover → Improve"
      ],
      explanation: "NIST SP 800-61: Preparation (tools, playbooks, team). Detection & Analysis (identify IOCs). Containment (isolate — short term then long term). Eradication (remove malware, patch). Recovery (restore services). Lessons Learned (post-mortem תוך 2 שבועות). ה-loop חוזר תמיד."
    },
    {
      q: "מה SIEM עושה שאי אפשר לעשות עם logs פשוטים?",
      correct: "מאחד logs ממקורות שונים ומחפש correlations — כמו login failure + lateral movement + data exfil ב-10 דקות",
      choices: [
        "מאחד logs ממקורות שונים ומחפש correlations — כמו login failure + lateral movement + data exfil ב-10 דקות",
        "מצפין logs שלא יגנבו",
        "מחליף firewall ו-IDS",
        "שולח alerts רק על CVE ידועים"
      ],
      explanation: "SIEM = Security Information and Event Management. מקורות: AD, Firewall, EDR, Web proxy, DNS. Correlation: 3 login failures (brute force?) + הצלחה + גישה לשרת רגיש = alert. כלים: Splunk, IBM QRadar, Microsoft Sentinel, ELK Stack. SOC analyst מבלה 70% מזמנו ב-SIEM."
    },
        {
      q: "מה 5 שלבי Penetration Testing המקובלים?",
      correct: "Reconnaissance, Scanning, Exploitation, Post-Exploitation, Reporting",
      choices: [
        "Reconnaissance, Scanning, Exploitation, Post-Exploitation, Reporting",
        "Planning, Attack, Defend, Recover, Document",
        "OSINT, Nmap, Metasploit, Pivot, Exit",
        "Discovery, Enumeration, Privilege Escalation, Lateral Movement, Cleanup"
      ],
      explanation: "שלבי Pentest: 1) Recon — OSINT, DNS enum, Google dorking. 2) Scanning — Nmap, Nikto, Shodan. 3) Exploitation — Metasploit, custom exploits, CVE exploitation. 4) Post-Exploitation — privilege escalation, lateral movement, persistence, data ex-filtration. 5) Reporting — executive summary + technical details + CVSS scores + recommendations. חשוב: scope בכתב לפני התחלה!"
    },
        {
      q: "מה ההבדל בין White Box לבין Black Box Penetration Testing?",
      correct: "White Box: לtester יש מלוא המידע (code, architecture); Black Box: לtester אין מידע מוקדם — מדמה תוקף חיצוני",
      choices: [
        "White Box: לtester יש מלוא המידע (code, architecture); Black Box: לtester אין מידע מוקדם — מדמה תוקף חיצוני",
        "White Box בודק רק frontned; Black Box בודק backend",
        "White Box מבוצע במשרד; Black Box מרחוק",
        "White Box בודק רשת; Black Box בודק אפליקציות"
      ],
      explanation: "White Box (Crystal Box): tester מקבל source code, credentials, architecture diagrams. יעיל ויסודי יותר, מוצא יותר בעיות. Gray Box: partial knowledge — credentials בלבד. Black Box: מדמה real attacker. Red Team = Black Box מורחב עם טכניקות social engineering ופיזיות. White Box עדיף לCode Review; Black Box לאיתור בעיות שרק תוקף חיצוני ימצא."
    },
        {
      q: "מה Metasploit Framework ומה זה Meterpreter shell?",
      correct: "Metasploit: framework לניצול פגיעויות; Meterpreter: payload מתקדם שרץ in-memory, לא כותב לdisk, עם capabilities כמו screenshot ו-keylogging",
      choices: [
        "Metasploit: framework לניצול פגיעויות; Meterpreter: payload מתקדם שרץ in-memory, לא כותב לdisk, עם capabilities כמו screenshot ו-keylogging",
        "Metasploit: port scanner; Meterpreter: reverse shell פשוט",
        "Metasploit: SIEM tool; Meterpreter: log analysis tool",
        "Metasploit: כלי הצפנה; Meterpreter: כלי לפיצוח סיסמאות"
      ],
      explanation: "Metasploit (Rapid7): msfconsole → search exploit → use exploit/windows/smb/ms17_010_eternalblue → set RHOSTS → set PAYLOAD → run. Meterpreter = meta-interpreter: רץ בזיכרון התהליך שנוצל, לא קובץ exe, מוצפן TLS. Commands: hashdump, getsystem (priv esc), screenshot, migrate (לdifferent process). Evasion: polymorphic payloads, msfvenom encoding."
    }
  ],

  105: [
    {
      q: "למה AES-ECB מסוכן למרות שAES עצמו חזק?",
      correct: "ECB מצפין כל block בנפרד — blocks זהים מייצרים ciphertext זהה, חושף patterns בnתונים",
      choices: [
        "ECB מצפין כל block בנפרד — blocks זהים מייצרים ciphertext זהה, חושף patterns בנתונים",
        "ECB לא תומך ב-256 bit keys",
        "ECB פגיע ל-brute force כי המפתח קצר",
        "ECB איטי מדי לשימוש מעשי"
      ],
      explanation: "AES-ECB: כל 16 bytes מוצפנים באופן עצמאי. אם יש בimage שתי אזורים עם אותו צבע → ciphertext זהה → pattern נראה. הדגמה קלאסית: הצפנת תמונת Linux penguin בECB — הצלל עדיין נראה! הפיתרון: AES-CBC/GCM — IV + chaining מונע patterns."
    },
    {
      q: "מה 0-RTT ב-TLS 1.3 / QUIC ומה הסיכון?",
      correct: "שליחת data בpacket ראשון בלי handshake — חוסך RTT, אך data זה פגיע לreplay attacks",
      choices: [
        "שליחת data בpacket ראשון בלי handshake — חוסך RTT, אך data זה פגיע לreplay attacks",
        "חיבור TLS ללא הצפנה לשיפור מהירות",
        "שמירת session על הדיסק בין חיבורים",
        "שימוש ב-HTTP/1.1 כ-fallback"
      ],
      explanation: "0-RTT: Client שולח application data בpacket הראשון (עם session ticket מחיבור קודם). חוסך 1-2 RTT. סיכון: Replay attack — תוקף יכול לשלוח את ה-0-RTT data שוב. לכן: 0-RTT מוגבל לrequests idempotent (GET, לא POST עם payment). TLS 1.3 תומך ב-0-RTT, TLS 1.2 לא."
    },
    {
      q: "מה הייחודיות של Dual EC DRBG?",
      correct: "CSPRNG שה-NSA הכניסה אליו backdoor — constants מוגדרים מראש שמאפשרים למי שיודע את הסוד לחזות output",
      choices: [
        "CSPRNG שה-NSA הכניסה אליו backdoor — constants מוגדרים מראש שמאפשרים למי שיודע את הסוד לחזות output",
        "אלגוריתם הצפנה שנשבר בbrute force",
        "פרוטוקול key exchange עם חולשה מתמטית",
        "hash function עם collision ידועה"
      ],
      explanation: "Dual EC DRBG: נכנס לstandard NIST ב-2006. Snowden 2013: NSA שילמה לRSA Security $10M להשתמש בו כdefault ב-BSafe. הבעיה: 2 נקודות על Elliptic Curve (P,Q) נבחרו על ידי NSA — מי שיודע log_P(Q) יכול לחזות את כל output. זה backdoor מתמטי מושלם."
    },
        {
      q: "מה SIEM ואיזה מוצרים נפוצים בתעשייה?",
      correct: "Security Information and Event Management — אוסף logs ממקורות רבים, מנתח ומתריע על anomalies; ספלנק, IBM QRadar, Microsoft Sentinel",
      choices: [
        "Security Information and Event Management — אוסף logs ממקורות רבים, מנתח ומתריע על anomalies; ספלנק, IBM QRadar, Microsoft Sentinel",
        "כלי לניהול passwords וMFA בארגון",
        "Intrusion Detection System מתקדם שחוסם תעבורה חשודה",
        "פלטפורמת backup לlog files של שרתים"
      ],
      explanation: "SIEM = correlation engine. מקבל: firewall logs, EDR alerts, DNS queries, Windows Event Logs, cloud audit logs. Use cases: זיהוי brute-force (X failures/minute מאותו IP), lateral movement (user login מ-3 מדינות ב-1 שעה), data exfiltration (upload חריג). SPL (Splunk Processing Language): index=windows EventCode=4625 | stats count by src_ip | where count > 50. SIEM לבד לא מספיק — צריך analysts לנתח alerts."
    },
        {
      q: "מה תהליך Incident Response (IR) ומה 6 שלביו?",
      correct: "Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned — תהליך מובנה לטיפול בתקרית אבטחה",
      choices: [
        "Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned — תהליך מובנה לטיפול בתקרית אבטחה",
        "Detection, Analysis, Reporting — תהליך 3 שלבים",
        "Alert, Triage, Remediate — תהליך SOC סטנדרטי",
        "Scan, Find, Fix, Test — מחזור ניהול פגיעויות"
      ],
      explanation: "PICERL (NIST SP 800-61): 1) Preparation — playbooks, tools, training מוכנים. 2) Identification — זיהוי שמשהו קרה, scope. 3) Containment — בידוד המכונות הנגועות (network isolation). 4) Eradication — מחיקת malware, patch. 5) Recovery — החזרת שירות, monitoring מוגבר. 6) Post-Incident — מה קרה? איך? מה נשפר? RCA (Root Cause Analysis). בחברות גדולות: CIRT, CSIRT, CERT."
    },
        {
      q: "מה ההבדל בין IDS לבין IPS?",
      correct: "IDS (Intrusion Detection System) מזהה ומתריע בלבד; IPS (Intrusion Prevention System) מזהה וגם חוסם אוטומטית",
      choices: [
        "IDS (Intrusion Detection System) מזהה ומתריע בלבד; IPS (Intrusion Prevention System) מזהה וגם חוסם אוטומטית",
        "IDS לרשתות; IPS לאפליקציות",
        "IPS מהיר יותר כי לא כותב logs; IDS כותב logs",
        "אין הבדל — מדובר באותו מוצר עם שמות שונים"
      ],
      explanation: "IDS: passive — מנתח traffic ומייצר alerts (כמו מצלמת אבטחה). אין חסימה. IPS: inline — נמצא בנתיב ה-traffic, יכול לחסום packets בzero-latency. False positive ב-IPS = חסם traffic לגיטימי! לכן: מתחילים במצב IDS (learning mode), calibrate, אז inline. Network-based (NIDS/NIPS) vs Host-based (HIDS/HIPS). Snort ו-Suricata: open-source IDS/IPS פופולריים."
    }
  ],

  106: [
    {
      q: "מה SSRF ולמה הוא מסוכן בcloudcloud environments?",
      correct: "Server-Side Request Forgery — שרת עושה request לכתובת פנימית שהתוקף בחר, כולל metadata endpoint של AWS",
      choices: [
        "Server-Side Request Forgery — שרת עושה request לכתובת פנימית שהתוקף בחר, כולל metadata endpoint של AWS",
        "SQL injection בstorage של cloud",
        "Cross-site scripting בממשק ה-cloud",
        "חיבור לא מאובטח בין microservices"
      ],
      explanation: "SSRF: אפליקציה מקבלת URL ממשתמש ועושה request אליו. תוקף שולח: http://169.254.169.254/latest/meta-data/iam/security-credentials/ — AWS metadata endpoint. מחזיר temporary AWS credentials! Capital One 2019: SSRF דרך WAF מוגדר לא נכון → IAM credentials → 100M רשומות. Cloud SSRF = critical."
    },
    {
      q: "מה JWT 'none' algorithm attack?",
      correct: "שינוי algorithm בheader ל-'none' — השרת שמקבל unsigned token מאמת אותו בלי signature",
      choices: [
        "שינוי algorithm בheader ל-'none' — השרת שמקבל unsigned token מאמת אותו בלי signature",
        "גניבת JWT מlocalStorage דרך XSS",
        "brute force על HMAC secret",
        "replay attack על JWT שפג תוקפו"
      ],
      explanation: "JWT: header.payload.signature. Header מכיל alg. תוקף: שינוי alg ל-'none', הסרת signature. שרת ישן: 'alg=none? אין בעיה, אין צורך בverification'. Fix: server-side whitelist של algorithms — אף פעם לא לקבל alg מה-token עצמו. גם RS256→HS256 attack: שרת שמצפה ל-RSA מסתמך על public key כ-HMAC secret."
    },
    {
      q: "מה ההבדל בין CTF לבין Bug Bounty?",
      correct: "CTF = תחרות עם challenges סגורים; Bug Bounty = מציאת bugs אמיתיים בproducts אמיתיים ותגמול כספי",
      choices: [
        "CTF = תחרות עם challenges סגורים; Bug Bounty = מציאת bugs אמיתיים בproducts אמיתיים ותגמול כספי",
        "CTF לאנשי SOC; Bug Bounty לpentesters",
        "Bug Bounty חוקי; CTF לא חוקי",
        "שניהם אותו דבר רק שמות שונים"
      ],
      explanation: "CTF: Jeopardy (web/crypto/pwn/forensics/reverse) או Attack-Defense. לימוד מובנה, ללא אחריות. HackTheBox, TryHackMe, PicoCTF. Bug Bounty: HackerOne, Bugcrowd, Intigriti. Scope מוגדר. Payout: $100-$1M+ לפי חומרה. Responsible disclosure process. Facebook ו-Google משלמים מיליוני דולרים בשנה. CTF → Bug Bounty → Pentest career path."
    },
        {
      q: "מה ה-4 קטגוריות העיקריות ב-CTF (Capture The Flag)?",
      correct: "Web Exploitation, Binary Exploitation (Pwn), Reverse Engineering, Cryptography — פלוס Forensics ו-OSINT",
      choices: [
        "Web Exploitation, Binary Exploitation (Pwn), Reverse Engineering, Cryptography — פלוס Forensics ו-OSINT",
        "Hacking, Defense, OSINT, Networking — 4 תחומים שווים",
        "SQL, XSS, Buffer Overflow, Password Cracking",
        "Red Team, Blue Team, Purple Team, White Team"
      ],
      explanation: "CTF Categories: Web (SQLi, XSS, SSRF, LFI, RCE על אתרים), Pwn/Binary (buffer overflow, heap exploits, ROP chains על binaries), Rev (פירוק binary עם Ghidra/IDA, הבנת אלגוריתם), Crypto (פיצוח הצפנה חלשה, RSA, AES ECB), Forensics (ניתוח pcap, קבצים, stego), Misc. פלטפורמות: HackTheBox, TryHackMe, PicoCTF, CTFtime.org."
    },
        {
      q: "מה Responsible Disclosure ומה ההבדל בינו לבין Full Disclosure?",
      correct: "Responsible Disclosure: מדווח לחברה תחילה, נותן זמן לתיקון (90 יום), אז מפרסם; Full Disclosure: מפרסם פגיעות מיד לציבור",
      choices: [
        "Responsible Disclosure: מדווח לחברה תחילה, נותן זמן לתיקון (90 יום), אז מפרסם; Full Disclosure: מפרסם פגיעות מיד לציבור",
        "Responsible Disclosure = Bug Bounty; Full Disclosure = CVE",
        "Responsible: פגיעויות בinternational companies; Full: פגיעויות בחברות ישראליות",
        "Responsible Disclosure מיושן — כולם עברו לFull Disclosure"
      ],
      explanation: "Coordinated Disclosure (=Responsible): 1) מגלה פגיעות 2) מיידע vendor בsecurity channel 3) vendor מתקן (SLA: בד\\\"כ 90 יום — Google Project Zero standard) 4) חוקר מפרסם writeup. Full Disclosure: מפרסם מיד — לחץ על vendor לתקן מהר, אבל מאפשר exploitation לפני patch. Zero-Day = פגיעות ש-vendor לא יודע עליה. Bug Bounty: תשלום על disclosure."
    },
        {
      q: "אילו certifications מומלצות להתחיל קריירה בסייבר?",
      correct: "CompTIA Security+ (entry level), CEH (Certified Ethical Hacker), OSCP (offensive, hands-on) — לפי רמת ניסיון",
      choices: [
        "CompTIA Security+ (entry level), CEH (Certified Ethical Hacker), OSCP (offensive, hands-on) — לפי רמת ניסיון",
        "CISSP ו-CISM — הטובות ביותר לכולם",
        "רק ניסיון מעשי חשוב — certifications לא שוות כלום",
        "AWS Security Specialty ו-GCP Security — cloud בלבד"
      ],
      explanation: "Certification Roadmap: Entry: CompTIA A+ → Network+ → Security+. Offensive: eJPT (eLearnSecurity) → CEH → OSCP (OffSec — 24h practical exam, קשה!). Defensive: SOC Analyst → CySA+ → GCIH. Management: CISSP (5 שנות ניסיון נדרשות). Cloud: AWS Security Specialty, GCP Security. CTF ו-HackTheBox/TryHackMe = hands-on practice חשוב לא פחות מcerts."
    }
  ],

  // ===== Cyber Track continued (107-109) =====
  107: [
    {
      q: "מה ההבדל העיקרי בין הצפנה סימטרית לאסימטרית?",
      correct: "סימטרית: אותו מפתח להצפנה ופענוח — מהירה. אסימטרית: זוג מפתחות (public/private) — מאובטח יותר לחילופי מפתחות",
      choices: [
        "סימטרית: אותו מפתח להצפנה ופענוח — מהירה. אסימטרית: זוג מפתחות (public/private) — מאובטח יותר לחילופי מפתחות",
        "סימטרית לקבצים; אסימטרית לרשת בלבד",
        "אסימטרית מהירה יותר, סימטרית מאובטחת יותר",
        "שניהם זהים — ההבדל רק בשם"
      ],
      explanation: "AES = סימטרי, מהיר מאוד, משמש להצפנת payload. RSA = אסימטרי, איטי, משמש לחילופי מפתחות. TLS משלב: RSA להסכמה על מפתח AES, ואז AES להצפנת כל התקשורת. הטוב מכל העולמות!"
    },
    {
      q: "מה קורה ב-TLS Handshake?",
      correct: "הדפדפן ו-server מסכימים על cipher suite, מחליפים מפתחות (RSA/ECDH), ויוצרים session key סימטרי לתקשורת המשך",
      choices: [
        "הדפדפן ו-server מסכימים על cipher suite, מחליפים מפתחות (RSA/ECDH), ויוצרים session key סימטרי לתקשורת המשך",
        "הדפדפן מצפין את כל הנתונים ב-RSA לכל אורך החיבור",
        "ה-server שולח סיסמה מוצפנת שהדפדפן פותח",
        "DNS מוודא שהcertificate תקף"
      ],
      explanation: "TLS Handshake: ClientHello → ServerHello+Certificate → Pre-Master Secret (encrypted RSA) → שני הצדדים גוזרים Session Key → Finished. מכאן: AES-256-GCM. RSA רק בhandshake, AES לכל השאר — מהיר ומאובטח."
    },
    {
      q: "מה ה-Heartbleed bug (CVE-2014-0160)?",
      correct: "Bug ב-OpenSSL שאיפשר לקרוא 64KB מה-memory של השרת כולל private keys וpasswords, דרך Heartbeat extension לא מאומת",
      choices: [
        "Bug ב-OpenSSL שאיפשר לקרוא 64KB מה-memory של השרת כולל private keys וpasswords, דרך Heartbeat extension לא מאומת",
        "DDoS attack על שרתי TLS",
        "SQL injection בcertificate validation",
        "Buffer overflow ב-Apache HTTP server"
      ],
      explanation: "Heartbleed: הלקוח שולח heartbeat עם length שגוי. server מחזיר length שביקשת (עד 64KB) מה-memory — תוכן אקראי שיכול לכלול private keys, passwords, session tokens. 17% מהאינטרנט היה פגיע. Fix: upgrade OpenSSL + החלפת כל certificates."
    },
        {
      q: "מה ההבדל בין Symmetric לבין Asymmetric encryption?",
      correct: "Symmetric: אותו מפתח להצפנה ופיענוח (AES); Asymmetric: מפתח ציבורי להצפנה, מפתח פרטי לפיענוח (RSA)",
      choices: [
        "Symmetric: אותו מפתח להצפנה ופיענוח (AES); Asymmetric: מפתח ציבורי להצפנה, מפתח פרטי לפיענוח (RSA)",
        "Symmetric מוצפן יותר; Asymmetric מהיר יותר",
        "Symmetric לרשתות; Asymmetric לקבצים",
        "AES הוא Asymmetric כי מפתחותיו ארוכים יותר"
      ],
      explanation: "Symmetric (AES, ChaCha20): מהיר, מתאים לdata בulk. בעיה: key exchange — איך שולחים את המפתח? Asymmetric (RSA, ECDH): איטי אך מאפשר key exchange מאובטח. Public key = נעילה, Private key = פתיחה. TLS משלב: Asymmetric לhandshake (חילוף session key), Symmetric לdata transfer — Best of both worlds. RSA 2048-bit = עדיין מאובטח, RSA 1024 = שבור!"
    },
        {
      q: "מה Forward Secrecy (Perfect Forward Secrecy) ולמה TLS 1.3 מחייב אותו?",
      correct: "כל session מקבל מפתחות ephemeral ייחודיים — גם אם המפתח הפרטי של השרת נגנב, שיחות עבר לא ניתנות לפיענוח",
      choices: [
        "כל session מקבל מפתחות ephemeral ייחודיים — גם אם המפתח הפרטי של השרת נגנב, שיחות עבר לא ניתנות לפיענוח",
        "הצפנה שפועלת גם ב-forward proxy",
        "מנגנון שמקדים את תהליך ה-TLS handshake",
        "Forward Secrecy = TLS 1.3 — אותו דבר"
      ],
      explanation: "בלי PFS: תוקף מקליט encrypted traffic היום. בעוד 5 שנים גונב private key של השרת → מפענח את כל השיחות שהקליט! עם PFS (ECDHE — Elliptic Curve Diffie-Hellman Ephemeral): מפתח ה-session נגזר מparameters זמניים שנמחקים מיד. גם עם גניבת private key — שיחות עבר מוצפנות. TLS 1.3 הסיר RSA key exchange ומחייב ECDHE."
    },
        {
      q: "מה SHA-256 ואיזה תכונות חשובות יש לפונקציית hash קריפטוגרפית?",
      correct: "One-way function שמייצרת fingerprint 256-bit; תכונות: deterministic, avalanche effect, collision resistance, pre-image resistance",
      choices: [
        "One-way function שמייצרת fingerprint 256-bit; תכונות: deterministic, avalanche effect, collision resistance, pre-image resistance",
        "אלגוריתם הצפנה סימטרי עם מפתח 256-bit",
        "פרוטוקול handshake של TLS 1.3",
        "שיטה להחלפת מפתחות קריפטוגרפיים"
      ],
      explanation: "Hash properties: Deterministic (אותו input = אותו output תמיד), One-way (לא ניתן להפוך), Avalanche effect (שינוי 1 bit בinput = שינוי ~50% מהoutput), Collision resistance (קשה מאוד למצוא x≠y כך שH(x)=H(y)). SHA-256: output 256 bits = 2^256 אפשרויות. שימושים: password hashing (bcrypt/Argon2 עדיפים!), digital signatures, certificate fingerprints, Git commit IDs, blockchain. MD5/SHA-1 = שבורים לsignatures!"
    }
  ],

  108: [
    {
      q: "מה ההבדל בין Phishing לSpear Phishing?",
      correct: "Phishing = מיילים זהים למיליונים; Spear Phishing = מותאם אישית לאדם/ארגון ספציפי עם מידע אמיתי עליו",
      choices: [
        "Phishing = מיילים זהים למיליונים; Spear Phishing = מותאם אישית לאדם/ארגון ספציפי עם מידע אמיתי עליו",
        "Spear Phishing = SMS; Phishing = מייל",
        "Spear Phishing חוקי; Phishing לא",
        "אותו דבר — שמות שונים"
      ],
      explanation: "Mass Phishing: 'Dear Customer' + generic. נשלח ל-10M, 0.1% לוחץ = 10,000 קורבנות. Spear Phishing: 'שלום דוד, ראיתי שהיית בכנס X ביום ג'. מחקר מLinkedIn, success rate גבוה בהרבה. Whaling = Spear Phishing נגד C-suite. Twitter 2020 hack = Vishing (לא Phishing כתוב)."
    },
    {
      q: "בפרשת Twitter 2020, איך התוקפים השיגו גישה לAdmin Panel?",
      correct: "Vishing — התקשרו לעובדי Twitter, התחזו לIT, ביקשו credentials לתיקון בעיה טכנית מדומה",
      choices: [
        "Vishing — התקשרו לעובדי Twitter, התחזו לIT, ביקשו credentials לתיקון בעיה טכנית מדומה",
        "SQL injection ישיר על מסד הנתונים",
        "Brute force על חשבונות admin",
        "Zero-day ב-Twitter API"
      ],
      explanation: "Twitter 2020: Graham Clark בן 17 + שותפים. לא פרצו טכנולוגיה — פשוט התקשרו לעובדים, התחזו לIT support, וביקשו credentials. עובד אחד שיתף פעולה. Admin Panel = גישה לכל 330M חשבונות. $120K Bitcoin. לקח: MFA חזק + אימות זהות בצינור נפרד = קריטי."
    },
    {
      q: "מה עיקרון Urgency בSocial Engineering?",
      correct: "יצירת לחץ זמן מלאכותי שגורם לקורבן לפעול מהר ללא חשיבה ביקורתית — 'לחץ תוך 24 שעות או חשבונך יימחק'",
      choices: [
        "יצירת לחץ זמן מלאכותי שגורם לקורבן לפעול מהר ללא חשיבה ביקורתית — 'לחץ תוך 24 שעות או חשבונך יימחק'",
        "שימוש בשפה דחופה ביותר בכותרת המייל",
        "שליחת אותו מייל מספר פעמים",
        "הגדרת read receipt על המייל"
      ],
      explanation: "Cialdini's 6 principles: Authority, Urgency, Social Proof, Liking, Reciprocity, Scarcity. Urgency מנטרל חשיבה ביקורתית — כשאנו בלחץ, לא מוודאים פרטים. Red flag: כל הודעה שמכריחה פעולה מיידית ללא זמן לאימות היא חשודה. ארגון לגיטימי יאפשר לך לוודא."
    },
        {
      q: "מה ההבדל בין Phishing לבין Spear Phishing?",
      correct: "Phishing שולח מיילים זהים לכולם; Spear Phishing ממוקד לאדם/ארגון ספציפי עם מידע אישי שמגביר את אמינות ההודעה",
      choices: [
        "Phishing שולח מיילים זהים לכולם; Spear Phishing ממוקד לאדם/ארגון ספציפי עם מידע אישי שמגביר את אמינות ההודעה",
        "Phishing דרך מייל; Spear Phishing דרך SMS",
        "Spear Phishing תוקף רק C-level executives",
        "Phishing גונב סיסמאות; Spear Phishing מתקין malware"
      ],
      explanation: "Phishing: 'לכבוד הלקוח, חשבונך הוקפא. לחץ כאן.' — mass campaign. Spear Phishing: 'שלום יעל, ראיתי שעבדת עם דוד בפרויקט Q3. בקובץ המצורף — עדכון לתקציב.' OSINT מ-LinkedIn + Facebook + חדשות חברה. Whaling = Spear Phishing לCEO/CFO. BEC (Business Email Compromise) = spoofing כCEO → wire transfer. הגנה: awareness training, DMARC/DKIM/SPF, MFA."
    },
        {
      q: "מה Pretexting ב-Social Engineering ותן דוגמה?",
      correct: "יצירת תרחיש בדוי (pretext) להשגת מידע — למשל: התחזות לIT support ובקשת סיסמה לפתרון 'בעיה דחופה'",
      choices: [
        "יצירת תרחיש בדוי (pretext) להשגת מידע — למשל: התחזות לIT support ובקשת סיסמה לפתרון 'בעיה דחופה'",
        "שליחת מיילים עם links זדוניים",
        "ניחוש סיסמה בbrute force",
        "התקנת keylogger על מחשב קורבן"
      ],
      explanation: "Pretexting = תסריט מוכן: 'שלום, אני דן מה-IT, יש לנו בעיה קריטית עם השרת. אני צריך את הסיסמה שלך לבדיקה דחופה.' Urgency + Authority = compliance. מפורסם: Kevin Mitnick השתמש בpretexting כדי לקבל מידע סודי מTeleCommunications. הגנה: Never share passwords! IT לעולם לא יבקש סיסמה. Verify מתקשרים ב-callback לנumber רשמי. Callback verification protocol."
    },
        {
      q: "מה Vishing ומה Smishing ואיך שונים מPhishing?",
      correct: "Vishing = Voice Phishing (שיחות טלפון); Smishing = SMS Phishing; שניהם Social Engineering בערוצים שונים ממייל",
      choices: [
        "Vishing = Voice Phishing (שיחות טלפון); Smishing = SMS Phishing; שניהם Social Engineering בערוצים שונים ממייל",
        "Vishing = Video Phishing; Smishing = Social Media Phishing",
        "שניהם תתי-סוגים של Spear Phishing בלבד",
        "Vishing ו-Smishing פחות מסוכנים מPhishing כי קל לזהות"
      ],
      explanation: "Vishing: 'מדבר עם נציג בנק לאומי, יש חשד לפעולה חשודה בחשבון. לאימות זהות צריך ספרות מהכרטיס.' קשה לאמת תקינות שיחה. AI Voice Cloning = next level vishing. Smishing: 'חבילה ממתינה לך, עדכן כתובת: [fake-tracking-link].com' — click rate גבוה ממייל. QR Code Phishing (Quishing) = QR codes שמובילים לphishing site. הגנה: אל תשתף OTP, תמיד contact ישיר לחברה."
    }
  ],

  109: [
    {
      q: "מה ההבדל בין Stateless לStateful Firewall?",
      correct: "Stateless בודק כל packet בנפרד (IP/port); Stateful עוקב אחרי connection state ויודע אם packet שייך לsession קיים",
      choices: [
        "Stateless בודק כל packet בנפרד (IP/port); Stateful עוקב אחרי connection state ויודע אם packet שייך לsession קיים",
        "Stateful מהיר יותר; Stateless מאובטח יותר",
        "Stateless לUDP; Stateful לTCP",
        "Stateful = software; Stateless = hardware"
      ],
      explanation: "Stateless (iptables -P): בודק src/dst IP + port + protocol. קל לעקוף עם spoofed packets. Stateful (conntrack): מבין SYN/ESTABLISHED/FIN — חבילות return traffic עוברות אוטומטית. NGFW (L7): מבין HTTP/DNS/TLS — יכול לחסום לפי content. iptables ברוב Linux distributions = stateful ב-default."
    },
    {
      q: "מה מטרת ה-DMZ (Demilitarized Zone)?",
      correct: "אזור ביניים שמכיל שרתים נגישים מהאינטרנט (Web/Mail/DNS) ומבודד אותם מהרשת הפנימית — פריצה לDMZ לא מעניקה גישה לDB הפנימי",
      choices: [
        "אזור ביניים שמכיל שרתים נגישים מהאינטרנט (Web/Mail/DNS) ומבודד אותם מהרשת הפנימית — פריצה לDMZ לא מעניקה גישה לDB הפנימי",
        "Zone שבה כל התעבורה מוצפנת",
        "אזור ללא הצפנה לביצועים מהירים",
        "Subnet מיוחד לVPN connections"
      ],
      explanation: "DMZ = שכבת הגנה נוספת. Architecture: Internet → External FW → DMZ (Web/Mail/DNS) → Internal FW → Internal (DB/AD). גם אם תוקף פורץ לWeb Server ב-DMZ, Internal FW חוסם גישה ל-DB. Principle: Defense in Depth — כל שכבה מגינה על הבאה."
    },
    {
      q: "כיצד Stuxnet הצליח לפגוע ברשת air-gapped?",
      correct: "הופץ דרך USB drives — עובדים חיברו USB למחשבים air-gapped, התולעת עברה ממחשב למחשב עד שהגיעה לPLCs של Siemens",
      choices: [
        "הופץ דרך USB drives — עובדים חיברו USB למחשבים air-gapped, התולעת עברה ממחשב למחשב עד שהגיעה לPLCs של Siemens",
        "פרץ דרך WiFi של המתקן",
        "הוכנס ישירות על ידי mole בתוך המתקן",
        "השתמש ב-zero-day ב-PLC firmware שנשלח over-the-air"
      ],
      explanation: "Stuxnet (2010, attributed to US+Israel): 4 zero-days. Air gap = ללא חיבור אינטרנט. הפתרון: USB infection chain. אחד מהמהנדסים חיבר USB נגוע — Stuxnet התפשט, חיכה לSiemens Step7 software, שינה תדרי צנטריפוגות תוך הסתרת הנתונים האמיתיים מהMonitoring. 1,000 צנטריפוגות הושמדו. לקח: אסור USB לא מבוקר ב-ICS environments."
    },
        {
      q: "מה ההבדל בין Stateless Firewall לבין Stateful Firewall?",
      correct: "Stateless בודק כל packet בנפרד לפי IP/Port; Stateful עוקב אחרי connections ומאפשר return traffic אוטומטית",
      choices: [
        "Stateless בודק כל packet בנפרד לפי IP/Port; Stateful עוקב אחרי connections ומאפשר return traffic אוטומטית",
        "Stateless מהיר יותר ומאובטח יותר בכל מקרה",
        "Stateful בודק רק TCP; Stateless בודק UDP",
        "אין הבדל מעשי בביצועים ואבטחה"
      ],
      explanation: "Stateless (ACL): rule: ALLOW TCP src any dst 10.0.0.1 port 443. אבל צריך גם rule להחזרת traffic: ALLOW TCP src 10.0.0.1 dst any port >1024. מסורבל ומסוכן. Stateful: Connection Table — SYN → מוסיף entry, SYN-ACK וACK מותרים אוטומטית כי שייכים לconnection קיים. Return traffic = implicit allow. עדיף לאבטחה. NGFW = Stateful + DPI + Application Awareness + IPS."
    },
        {
      q: "מה iptables rule שחוסם כל גישה נכנסת לחוץ מ-SSH (port 22)?",
      correct: "iptables -P INPUT DROP; iptables -A INPUT -p tcp --dport 22 -j ACCEPT; iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT",
      choices: [
        "iptables -P INPUT DROP; iptables -A INPUT -p tcp --dport 22 -j ACCEPT; iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT",
        "iptables -A INPUT -p tcp --dport 22 -j ACCEPT",
        "iptables --block-all; iptables --allow 22",
        "iptables -P INPUT REJECT; iptables -A SSH -j ALLOW"
      ],
      explanation: "שלבים: 1) DEFAULT POLICY = DROP (חסום הכל). 2) ACCEPT port 22. 3) ACCEPT established connections (בלי זה — גם responses לתעבורה היוצאת יחסמו!). חשוב לשמור iptables-save > /etc/iptables/rules.v4 אחרת rules נמחקים ב-reboot. nftables = ה-successor המודרני לiptables. ufw (Ubuntu) = front-end נוח: ufw default deny incoming; ufw allow 22/tcp."
    },
        {
      q: "מה Zero Trust Architecture ועל איזה עיקרון היא מבוססת?",
      correct: "ארכיטקטורה שלא סומכת על אף entity כברירת מחדל — 'Never trust, always verify'. כל גישה מחייבת אימות גם בתוך הרשת הארגונית",
      choices: [
        "ארכיטקטורה שלא סומכת על אף entity כברירת מחדל — 'Never trust, always verify'. כל גישה מחייבת אימות גם בתוך הרשת הארגונית",
        "ארכיטקטורה ללא firewall — סומכים על כל משתמש מאומת",
        "גישה שמבוססת על Zero-Day vulnerabilities",
        "מודל שבו רק administrators מרשת ה-DMZ יכולים לגשת למשאבים"
      ],
      explanation: "Zero Trust (John Kindervag, Forrester 2010): בארכיטקטורה מסורתית — 'castle and moat': סומכים על כל מה שבפנים. אחרי breach = פרצה חופשית lateral movement. Zero Trust: 1) Verify explicitly — MFA + device health + location בכל בקשה. 2) Least privilege access. 3) Assume breach — segment network, monitor all traffic. NIST SP 800-207. מימוש: BeyondCorp (Google), Zscaler, Cloudflare Access."
    }
  ],

  // ===== DevOps & Cloud Track (201-206) =====
  201: [
    {
      q: "איך Linux מייצג פורטים פתוחים בצורה היעילה ביותר לניפוי בעיות?",
      correct: "ss -tulnp — מראה TCP/UDP, listening, port number, PID ושם תהליך",
      choices: [
        "ss -tulnp — מראה TCP/UDP, listening, port number, PID ושם תהליך",
        "netstat -a",
        "ifconfig --ports",
        "lsof /dev/net"
      ],
      explanation: "ss החליף את netstat (deprecated). -t=TCP, -u=UDP, -l=listening, -n=numeric (לא resolve שמות), -p=PID. תוצאה: LISTEN 0 128 0.0.0.0:80 0.0.0.0:* users:(('nginx',pid=1234)). ידע זה קריטי לכל troubleshooting. journalctl -u service -f = logs בזמן אמת."
    },
    {
      q: "מה ההבדל בין hard link לsoft link ב-Linux?",
      correct: "Hard link: מצביע לאותו inode — נשמר גם אחרי מחיקת המקור. Soft link: מצביע לpath — נשבר אם המקור נמחק",
      choices: [
        "Hard link: מצביע לאותו inode — נשמר גם אחרי מחיקת המקור. Soft link: מצביע לpath — נשבר אם המקור נמחק",
        "Hard link לקבצים; Soft link לתיקיות",
        "Hard link מהיר יותר; Soft link חוצה filesystems",
        "אין הבדל מעשי"
      ],
      explanation: "inode = metadata של קובץ (permissions, timestamps, blocks). Hard link = שם נוסף לאותו inode. הקובץ נמחק רק כשlinkcount=0. ln file hardlink. Soft link (symlink): ln -s /path/file link. יכול לחצות filesystems ותיקיות. נשבר אם target נמחק. ls -la מראה → target."
    },
    {
      q: "מה המשמעות של chmod 755?",
      correct: "Owner: rwx (7), Group: r-x (5), Others: r-x (5) — קריאה+הרצה לכולם, כתיבה רק ל-owner",
      choices: [
        "Owner: rwx (7), Group: r-x (5), Others: r-x (5) — קריאה+הרצה לכולם, כתיבה רק ל-owner",
        "Read-only לכל המשתמשים",
        "Full permissions לכולם",
        "Owner: rw, Group: r, Others: x"
      ],
      explanation: "r=4, w=2, x=1. 7=4+2+1=rwx, 5=4+0+1=r-x, 4=r--. chmod 755 = executable scripts/directories. chmod 644 = files (owner rw, others r). chmod 600 = private keys (owner only). SUID (4755): הקובץ רץ עם הרשאות ה-owner, לא המשתמש הרץ. find / -perm -4000 = מוצא SUID files."
    },
        {
      q: "מה ההבדל בין hard link לבין symbolic link ב-Linux?",
      correct: "Hard link: שם נוסף לאותו inode (נתונים); Symbolic link: קובץ נפרד שמצביע על שם קובץ — נשבר אם המקור נמחק",
      choices: [
        "Hard link: שם נוסף לאותו inode (נתונים); Symbolic link: קובץ נפרד שמצביע על שם קובץ — נשבר אם המקור נמחק",
        "Hard link לקבצים; Symbolic link לתיקיות בלבד",
        "שניהם זהים פרט לsyntax שונה בפקודת ln",
        "Symbolic link גדול יותר בdisk כי שומר עותק של הנתונים"
      ],
      explanation: "inode = מבנה נתונים של filesystem שמכיל metadata + pointer לdata blocks. Hard link: ln file.txt hardlink.txt → שניהם inode זהה. מחיקת המקור לא פוגעת — data נמחק רק כש-link count=0. Soft/Symlink: ln -s /path/to/file symlink.txt → שומר string של path. rm file.txt → symlink שבור (dangling). Cross-filesystem: רק symlinks. ls -la מציג -> לsymlinks."
    },
        {
      q: "מה הפקודה למציאת processes שמאזינים על פורט 8080?",
      correct: "ss -tlnp | grep 8080 (או lsof -i :8080)",
      choices: [
        "ss -tlnp | grep 8080 (או lsof -i :8080)",
        "netstat --port 8080",
        "ps aux | grep 8080",
        "find /proc -name '8080'"
      ],
      explanation: "ss (socket statistics, מחליף netstat): -t TCP, -l listening, -n numeric (לא resolve names), -p show process. ss -tlnp: מציג כל TCP listening sockets עם PID. lsof -i :8080: כל files/sockets פתוחים על port 8080. netstat -tlnp | grep 8080 עובד גם אבל ss מהיר יותר. kill -9 $(lsof -ti :8080) = kill process שמאזין על port."
    },
        {
      q: "מה chmod 755 עושה לקובץ?",
      correct: "Owner: read+write+execute (7); Group: read+execute (5); Others: read+execute (5)",
      choices: [
        "Owner: read+write+execute (7); Group: read+execute (5); Others: read+execute (5)",
        "Owner: read+write (6); Group: read+execute+write (5); Others: execute (5)",
        "כולם יכולים לקרוא וto execute; רק owner יכול לכתוב",
        "Owner: full permissions; Group ו-Others: read only"
      ],
      explanation: "Octal permissions: r=4, w=2, x=1. 7=4+2+1=rwx, 5=4+0+1=r-x, 6=4+2+0=rw-. chmod 755 = -rwxr-xr-x. שימושי לscripts שכולם צריכים להריץ אבל רק owner יכול לערוך. chmod 644 (-rw-r--r--) לקבצי config. chmod 600 (-rw-------) למפתחות SSH. chown user:group file לשינוי בעלות. Sticky bit (chmod +t /tmp): רק owner יכול למחוק קבצים שלו."
    }
  ],

  202: [
    {
      q: "מה ההבדל בין Docker image לבין Docker container?",
      correct: "Image = תבנית read-only שכבתית; Container = instance רץ של image עם writable layer",
      choices: [
        "Image = תבנית read-only שכבתית; Container = instance רץ של image עם writable layer",
        "Image שמור על disk; Container בmemory",
        "Container גדול יותר מimage",
        "Image מכיל קוד; Container מכיל data"
      ],
      explanation: "Docker image: Union filesystem — layers. כל RUN/COPY/ADD בDockerfile = layer חדש. שכבות shared בין containers. Container: image layers (read-only) + writable layer בראש. כשcontainer נמחק — writable layer נמחק. Data persistence: Volumes. docker images = רשימת images. docker ps = containers רצים."
    },
    {
      q: "מה Multi-stage build ב-Docker ולמה להשתמש בזה?",
      correct: "בנייה בshלבים — stage ראשון לcompile, stage שני רק עם artifacts — image קטן ב-10x",
      choices: [
        "בנייה בשלבים — stage ראשון לcompile, stage שני רק עם artifacts — image קטן ב-10x",
        "בניית כמה images במקביל",
        "שימוש בbase images שונים לenv שונים",
        "caching של layers בין builds"
      ],
      explanation: "בלי multi-stage: image Go מכיל compiler, source, dependencies = 1.2GB. עם multi-stage: FROM golang:1.21 AS builder / RUN go build / FROM scratch / COPY --from=builder /app/binary . = image של 8MB. רק binary! ללא compiler, ללא source. אבטחה + מהירות. Node.js: stage עם devDependencies, stage עם רק production deps."
    },
    {
      q: "מה ה-ENTRYPOINT לעומת CMD ב-Dockerfile?",
      correct: "ENTRYPOINT = תמיד רץ; CMD = default args שאפשר לoverride בdocker run",
      choices: [
        "ENTRYPOINT = תמיד רץ; CMD = default args שאפשר לoverride בdocker run",
        "CMD רץ בbuild; ENTRYPOINT ב-run",
        "שניהם זהים — אחד לlinux אחד לwindows",
        "ENTRYPOINT לwebserver; CMD לbatch jobs"
      ],
      explanation: "ENTRYPOINT ['nginx', '-g', 'daemon off;'] — לא ניתן לoverride ב-docker run. CMD ['--worker-processes=4'] — default args, ניתן לoverride. שניהם יחד: ENTRYPOINT ריץ תמיד, CMD מספק default args. docker run myimage --worker-processes=8 = מחליף CMD. best practice: ENTRYPOINT לbinary, CMD לdefault flags."
    },
        {
      q: "מה ההבדל בין Docker image לבין Docker container?",
      correct: "Image = תבנית read-only של filesystem + metadata; Container = instance רץ של image עם writable layer זמני",
      choices: [
        "Image = תבנית read-only של filesystem + metadata; Container = instance רץ של image עם writable layer זמני",
        "Image הוא קובץ zip; Container הוא VM שרץ",
        "Image נשמר בDocker Hub; Container נשמר locally בלבד",
        "Image לprivate use; Container לproduction"
      ],
      explanation: "Image layers (Union FS): Base (ubuntu:22.04) + apt install python3 + COPY app + CMD. כל שכבה immutable, cached. Container = image + thin writable layer on top. docker run ubuntu → יוצר container, לא משנה את ה-image. docker commit → הופך container לimage חדש. docker ps (running), docker ps -a (all). docker rm (container), docker rmi (image). Images אחסון: Registry (Docker Hub, ECR, GCR)."
    },
        {
      q: "מה best practice לכתיבת Dockerfile — מה מקטין image size?",
      correct: "Multi-stage builds, שימוש בbase images קטנים (alpine), מיזוג RUN commands, ניקוי cache ב-apt, הוספת .dockerignore",
      choices: [
        "Multi-stage builds, שימוש בbase images קטנים (alpine), מיזוג RUN commands, ניקוי cache ב-apt, הוספת .dockerignore",
        "הוספת COMPRESS=true ב-Dockerfile",
        "שימוש בCOPY במקום ADD בלבד",
        "הגדרת WORKDIR = /tmp לחיסכון בזיכרון"
      ],
      explanation: "Multi-stage: FROM golang:1.21 AS builder; RUN go build; FROM alpine:3.18; COPY --from=builder /app /app — image סופי ללא Go compiler! Alpine linux: 5MB vs Ubuntu 72MB. מיזוג: RUN apt-get update && apt-get install -y nginx && rm -rf /var/lib/apt/lists/* (נקה cache ב-אותה שכבה!). .dockerignore: node_modules, .git, *.log לא נכנסים לbuild context. Layer caching: העתק package.json לפני COPY . כדי לnפמג npm install."
    },
        {
      q: "מה ההבדל בין ENTRYPOINT לבין CMD ב-Dockerfile?",
      correct: "ENTRYPOINT מגדיר הפקודה הקבועה של container; CMD מגדיר ברירת מחדל שניתן לדרוס בהפעלה",
      choices: [
        "ENTRYPOINT מגדיר הפקודה הקבועה של container; CMD מגדיר ברירת מחדל שניתן לדרוס בהפעלה",
        "CMD מריץ פקודות בbuild time; ENTRYPOINT בrun time",
        "ENTRYPOINT לscripts; CMD לprocess ראשי",
        "אין הבדל — שניהם מגדירים פקודת הפעלה"
      ],
      explanation: "ENTRYPOINT ['/app/server']: docker run myimage --port 8080 → מריץ /app/server --port 8080. CMD ['--port', '3000']: ברירת מחדל שנדרסת. ביחד: ENTRYPOINT ['/app/server'] + CMD ['--port', '3000'] → ניתן לdocker run myimage --port 8080 לדרוס CMD. docker run --entrypoint bash myimage לדרוס ENTRYPOINT. Exec form ['cmd', 'arg'] עדיף על Shell form (מאפשר signal handling). PID 1 = process ב-container חייב לטפל בsignals (SIGTERM)."
    }
  ],

  203: [
    {
      q: "מה ההבדל בין Deployment לבין StatefulSet ב-Kubernetes?",
      correct: "Deployment לאפליקציות stateless; StatefulSet לDatabases — שומר identity קבועה, persistent storage, ו-ordered rollout",
      choices: [
        "Deployment לאפליקציות stateless; StatefulSet לDatabases — שומר identity קבועה, persistent storage, ו-ordered rollout",
        "StatefulSet ישן יותר ומיועד להחלפה",
        "Deployment לcontainers בודדים; StatefulSet לcluster",
        "אין הבדל מעשי — רק naming convention"
      ],
      explanation: "Deployment: pods ב-web server = interchangeable. מת pod-abc, נולד pod-xyz. StatefulSet: pod-0, pod-1, pod-2 — שמות קבועים. pod-0 במסד הנתונים = primary always. כל pod מקבל PVC (Persistent Volume Claim) עצמאי. Rollout: pod-2 מת → pod-2 קם → pod-1 מת → ordered. MySQL, Kafka, ZooKeeper = StatefulSet."
    },
    {
      q: "מה Service ב-Kubernetes עושה שPod IP לא יכול לעשות?",
      correct: "מספק IP קבוע וDNS שלא משתנה — גם כשPods מוחלפים או מוגדלים",
      choices: [
        "מספק IP קבוע וDNS שלא משתנה — גם כשPods מוחלפים או מוגדלים",
        "מוסיף TLS encryption לתעבורה",
        "מנהל resource limits לcpu ומemory",
        "מאפשר inter-namespace communication"
      ],
      explanation: "Pod IP: ephemeral — Pod מת = IP חדש. Service: ClusterIP קבוע + DNS: my-service.namespace.svc.cluster.local. kube-proxy מנהל iptables/ipvs rules לforward לPods הנכונים. Types: ClusterIP (פנימי), NodePort (פורט על node), LoadBalancer (cloud LB), ExternalName (DNS alias). Endpoints object מכיל IPs עדכניות."
    },
    {
      q: "מה liveness probe לעומת readiness probe ב-Kubernetes?",
      correct: "Liveness: האם container חי? (restart אם לא). Readiness: האם מוכן לtrafic? (הסר מService אם לא)",
      choices: [
        "Liveness: האם container חי? (restart אם לא). Readiness: האם מוכן לtrafic? (הסר מService אם לא)",
        "שניהם בודקים אותו דבר — redness לdb, liveness לweb",
        "Liveness בstaging; Readiness בproduction",
        "Liveness לHTTP; Readiness לTCP"
      ],
      explanation: "Liveness probe נכשל: Kubernetes מבצע restart לcontainer. Readiness probe נכשל: Pod מוסר מService endpoints — לא מקבל traffic, אבל לא restarted. Startup probe: חדש ב-K8s 1.16 — לאפליקציות עם slow startup. HTTP/TCP/exec probes. initialDelaySeconds, periodSeconds, failureThreshold. בלי readiness = traffic לPod שעדיין מאתחל."
    },
        {
      q: "מה ההבדל בין Deployment לבין StatefulSet ב-Kubernetes?",
      correct: "Deployment לstateless apps עם pods חלופיים; StatefulSet לstateful apps עם pod identity קבוע, אחסון מתמיד, וסדר deployment מוגדר",
      choices: [
        "Deployment לstateless apps עם pods חלופיים; StatefulSet לstateful apps עם pod identity קבוע, אחסון מתמיד, וסדר deployment מוגדר",
        "StatefulSet חזק יותר — תמיד להשתמש בו",
        "Deployment לcontainers בודדים; StatefulSet למספר containers",
        "אין הבדל — רק שם שונה"
      ],
      explanation: "Deployment: pods-0, pods-abc123, pods-xyz789 — שמות אקראיים, interchangeable. Scale up/down = כל pod שווה. StatefulSet: db-0, db-1, db-2 — שמות סדרתיים קבועים. Pod db-0 תמיד יקבל את אותו PVC. Scale down: מוחק מהסוף (db-2 ראשון). Scale up: db-3 חייב לחכות לdb-2 healthy. שימוש: MySQL, PostgreSQL, Kafka, Elasticsearch, Redis Cluster. DaemonSet = pod אחד על כל node (log collector, monitoring agent)."
    },
        {
      q: "מה ConfigMap ומה Secret ב-Kubernetes ומתי לא להשתמש ב-Secret?",
      correct: "ConfigMap לconfig לא-סודי (env vars, files); Secret לdata סודי (passwords, tokens) — אך base64 בלבד, לא הצפנה! יש לנהל עם Vault/Sealed Secrets",
      choices: [
        "ConfigMap לconfig לא-סודי (env vars, files); Secret לdata סודי (passwords, tokens) — אך base64 בלבד, לא הצפנה! יש לנהל עם Vault/Sealed Secrets",
        "ConfigMap לfiles; Secret לenv vars בלבד",
        "Secret מוצפן AES-256 אוטומטית על ידי Kubernetes",
        "ConfigMap ו-Secret זהים — ההבדל הוא רק סמנטי"
      ],
      explanation: "ConfigMap: kubectl create configmap app-config --from-file=config.yaml. Secret: kubectl create secret generic db-secret --from-literal=password=s3cr3t → מאוחסן כ-base64 ב-etcd. אחסון ב-etcd לא מוצפן כברירת מחדל! הפתרון: Encryption at Rest לetcd + External secrets (HashiCorp Vault, AWS Secrets Manager, Sealed Secrets). במשאב: spec.containers.env.valueFrom.secretKeyRef או mount כvolume. etcd = 'brain' של cluster — חייב להיות מאובטח."
    },
        {
      q: "מה Resource Requests ו-Limits ב-Kubernetes ולמה חשוב להגדיר אותם?",
      correct: "Requests: מינימום משאבים שה-scheduler מבטיח לpod; Limits: מקסימום שהpod יכול לצרוך — בלי Limits, pod אחד יכול להרעיב את כל ה-node",
      choices: [
        "Requests: מינימום משאבים שה-scheduler מבטיח לpod; Limits: מקסימום שהpod יכול לצרוך — בלי Limits, pod אחד יכול להרעיב את כל ה-node",
        "Requests ו-Limits שניהם מגדירים maximum — ההבדל הוא בadmission controller",
        "Limits חלים רק על CPU; Requests על Memory",
        "בלי Requests, pods לא יתחילו לרוץ"
      ],
      explanation: "resources: requests: cpu: '250m' memory: '128Mi' limits: cpu: '500m' memory: '256Mi'. Scheduler: מחפש node עם מספיק requests available. CPU throttling: אם pod עובר Limit → throttled (איטי, לא killed). Memory OOMKilled: אם pod עובר memory Limit → KILLED! QoS classes: Guaranteed (req=limit), Burstable (req<limit), BestEffort (ללא req/limit). LimitRange לnamespace defaults. ResourceQuota לlimits בnamespace."
    }
  ],

  204: [
    {
      q: "מה ההבדל בין AWS Security Group לבין NACL?",
      correct: "Security Group: stateful (זוכר connection), ברמת ENI. NACL: stateless, ברמת subnet — חייב לפתוח inbound וoutbound בנפרד",
      choices: [
        "Security Group: stateful (זוכר connection), ברמת ENI. NACL: stateless, ברמת subnet — חייב לפתוח inbound וoutbound בנפרד",
        "Security Group לEC2; NACL ל-S3",
        "NACL מהיר יותר; Security Group גמיש יותר",
        "Security Group חינמי; NACL בתשלום"
      ],
      explanation: "Security Group: stateful — אם פתחת port 443 inbound, response יוצא אוטומטית. Rules רק allow (אין deny). NACL: stateless — חייב rule inbound לport 443 AND rule outbound לephemeral ports 1024-65535. NACL גם allow וגם deny. נוסף על security group. Defense in depth: Security Group לinstance, NACL לsubnet."
    },
    {
      q: "מה IAM Role ומתי עדיף על Access Key?",
      correct: "IAM Role = הרשאות זמניות שניתן לhassume — עדיף לEC2/Lambda כי לא דורש hardcoded credentials",
      choices: [
        "IAM Role = הרשאות זמניות שניתן לassume — עדיף לEC2/Lambda כי לא דורש hardcoded credentials",
        "Role לadmins; Access Key לdevelopers",
        "Access Key מאובטח יותר כי ניתן לrotate",
        "Role רק לcross-account access"
      ],
      explanation: "Access Key = long-term credentials = סכנת דליפה (git push, logs). IAM Role: EC2 instance profile = temporary credentials שמתחלפות אוטומטית כל שעה. Lambda execution role. AssumeRole מ-STS. IRSA בEKS: pod-level IAM roles. Least Privilege: כל service = role נפרדת עם minimum permissions. AWS Cost Explorer + CloudTrail לaudit."
    },
    {
      q: "מה AWS VPC Peering לעומת Transit Gateway?",
      correct: "Peering: חיבור 1:1 בין 2 VPCs. Transit Gateway: hub מרכזי — N VPCs מתחברים לTGW = N connections לעומת N*(N-1)/2 בpeering",
      choices: [
        "Peering: חיבור 1:1 בין 2 VPCs. Transit Gateway: hub מרכזי — N VPCs מתחברים לTGW = N connections לעומת N*(N-1)/2 בpeering",
        "Peering יקר יותר; Transit Gateway חינמי",
        "Peering בין regions; TGW בתוך region",
        "TGW מהיר יותר; Peering מאובטח יותר"
      ],
      explanation: "10 VPCs בpeering full mesh: 45 connections. עם TGW: 10 connections. TGW גם תומך ב-VPN, Direct Connect, multi-region. Peering: ללא encryption נוסף, ללא bandwidth limit, cheap. TGW: $0.05/GB data processed. ArchitectureSelling point: TGW = spoke-and-hub. Peering = point-to-point. פחות מ-5 VPCs? peering מספיק."
    },
        {
      q: "מה ה-Shared Responsibility Model ב-AWS ואיזה אחריות על הלקוח?",
      correct: "AWS אחראית על security OF the cloud (hardware, facilities, hypervisor); לקוח אחראי על security IN the cloud (OS, data, IAM, network config)",
      choices: [
        "AWS אחראית על security OF the cloud (hardware, facilities, hypervisor); לקוח אחראי על security IN the cloud (OS, data, IAM, network config)",
        "AWS אחראית על הכל — לקוח רק על application code",
        "הלקוח אחראי על הכל כי הוא משלם",
        "האחריות חלוקה שווה 50/50 על כל דבר"
      ],
      explanation: "AWS Shared Responsibility: AWS: physical security, hardware, networking, hypervisor, managed services infrastructure. Customer: EC2 OS patching, Security Groups config, S3 bucket policies (לא לפתוח public!), IAM configuration, encryption of data, application security. בServerless (Lambda): AWS גם מנהלת OS. RDS: AWS מנהלת DB engine patching, לקוח מנהל access control ו-data. AWS Config, Security Hub, GuardDuty = tools לmonitoring compliance."
    },
        {
      q: "מה ההבדל בין Security Group לבין Network ACL ב-AWS?",
      correct: "Security Group: stateful, ברמת instance, allow-only rules; Network ACL: stateless, ברמת subnet, allow ו-deny rules",
      choices: [
        "Security Group: stateful, ברמת instance, allow-only rules; Network ACL: stateless, ברמת subnet, allow ו-deny rules",
        "Security Group לEC2 בלבד; Network ACL לRDS בלבד",
        "Network ACL חזקה יותר ולכן לא צריך Security Groups",
        "Security Group: deny-only; Network ACL: allow-only"
      ],
      explanation: "Security Group (SG): attached לENI (network interface), stateful (return traffic אוטומטי), רק ALLOW rules, evaluated collectively. NACL: attached לsubnet, stateless (חייב explicit rule לinbound ולoutbound), rules מספרים (priority), גם ALLOW וגם DENY. Defense in depth: NACL = exterior wall, SG = interior doors. כלל אצבע: הגבל SGs ל-minimum ports, השתמש בNACL לblock explicit malicious IPs/ranges."
    },
        {
      q: "מה IAM Role ב-AWS ולמה עדיף על IAM User עם static credentials?",
      correct: "IAM Role: זהות זמנית עם temporary credentials (STS); אין סיסמה קבועה, credentials מתחדשים — לא ניתן לגנוב long-term keys",
      choices: [
        "IAM Role: זהות זמנית עם temporary credentials (STS); אין סיסמה קבועה, credentials מתחדשים — לא ניתן לגנוב long-term keys",
        "IAM Role לשירותים בלבד; IAM User לאנשים — אין הבדל אבטחתי",
        "IAM Role מהיר יותר כי אין authentication",
        "IAM User מאובטח יותר כי יש MFA"
      ],
      explanation: "IAM User עם Access Key: key_id + secret = long-term credentials. אם מתפרסמים בGit → בעיה קריטית! EC2 Instance Profile (Role): AWS SDK בתוך EC2 קורא אוטומטית לInstance Metadata Service (IMDS) → מקבל STS temporary credentials שמתחדשות כל שעה. Lambda Execution Role: Lambda מקבלת permissions דרך role. Best practice: לעולם אל תשמור static credentials בcode/config. aws configure = OK למפתח locally, לא בproduction."
    }
  ],

  205: [
    {
      q: "מה ההבדל בין CI לבין CD ב-CI/CD pipeline?",
      correct: "CI: בדיקת קוד אוטומטית בכל push. CD: Deploy אוטומטי לאחר CI מוצלח (Delivery=staging, Deployment=production)",
      choices: [
        "CI: בדיקת קוד אוטומטית בכל push. CD: Deploy אוטומטי לאחר CI מוצלח (Delivery=staging, Deployment=production)",
        "CI לdevelopers; CD לoperations",
        "CI בcloud; CD on-premise",
        "אין הבדל — זה שם כולל לautomation"
      ],
      explanation: "CI (Continuous Integration): כל push → build + unit tests + lint + security scan. מוצא bugs מוקדם. CD Delivery: אחרי CI → deploy לstaging automatically. CD Deployment: אחרי staging approval → production automatically (fully automated). Tools: GitHub Actions, Jenkins, GitLab CI, CircleCI. Best practice: branch protection + required CI status checks."
    },
    {
      q: "מה Blue-Green Deployment?",
      correct: "שתי environments זהות — Blue (production) ו-Green (new version). Switch traffic בבת אחת. Rollback = switch חזרה",
      choices: [
        "שתי environments זהות — Blue (production) ו-Green (new version). Switch traffic בבת אחת. Rollback = switch חזרה",
        "Deploy לservers כחולים בתחילה, ירוקים אחר כך",
        "Blue לEurope, Green לUS — geo deployment",
        "Canary deployment עם color coding"
      ],
      explanation: "Blue-Green: zero-downtime deployment. Blue = current production. Green = new version, tested בparallel. Switch: load balancer מפנה מBlue לGreen בשנייה. Rollback מיידי: switch חזרה. עלות: כפל infrastructure. מתאים לdeployments עם DB migrations (אך מורכב). Canary = הדרגתי (5% → 25% → 100%). Feature flags = code-level canary."
    },
    {
      q: "מה Artifact ב-CI/CD pipeline?",
      correct: "Output של build step — Docker image, JAR, binary, npm package — שמאוחסן ומשמש לdeploy",
      choices: [
        "Output של build step — Docker image, JAR, binary, npm package — שמאוחסן ומשמש לdeploy",
        "לוג הריצה של ה-pipeline",
        "קובץ הגדרות ה-pipeline",
        "test coverage report"
      ],
      explanation: "Artifact = מה שנבנה. Docker image → pushed לregistry (ECR, GCR, Docker Hub). JAR → Nexus/Artifactory. npm → registry. immutable artifacts: אחד שnבנה מ-commit מסוים = deploy לstaging ואחר כך production. לא בונים מחדש! 'Build once, deploy anywhere.' Artifact versioning: semver או git SHA. retention policy חוסכת עלויות."
    },
        {
      q: "מה ההבדל בין Continuous Integration לבין Continuous Deployment?",
      correct: "CI: merge code לmain branch אוטומטי עם tests; CD (Delivery): artifact מוכן לdeploy ידני; CD (Deployment): deploy אוטומטי לproduction",
      choices: [
        "CI: merge code לmain branch אוטומטי עם tests; CD (Delivery): artifact מוכן לdeploy ידני; CD (Deployment): deploy אוטומטי לproduction",
        "CI = build בלבד; CD = test בלבד",
        "CI לdevelopers; CD לops engineers",
        "CI לbackend; CD לfrontend"
      ],
      explanation: "CI pipeline: code push → lint → unit tests → integration tests → build artifact (Docker image/jar). מטרה: גילוי bugs מוקדם, main branch תמיד buildable. Continuous Delivery: artifact עובר עוד tests (e2e, security scan, performance) → ready for manual approval to prod. Continuous Deployment: no manual gate → deploy אוטומטי לprod עם כל merge לmain. Netflix, Google = full CD. ארגונים מוסדרים (banking, medical) = Delivery + human gate. Feature flags מאפשרים deploy ללא release."
    },
        {
      q: "מה GitHub Actions workflow ואיך מגדירים environment secrets?",
      correct: "YAML ב-.github/workflows/ שמגדיר triggers, jobs ו-steps; Secrets מוגדרים ב-Repository Settings ומוזרקים כenv vars: ${{ secrets.MY_SECRET }}",
      choices: [
        "YAML ב-.github/workflows/ שמגדיר triggers, jobs ו-steps; Secrets מוגדרים ב-Repository Settings ומוזרקים כenv vars: ${{ secrets.MY_SECRET }}",
        "Workflow מוגדר ב-.gitlab-ci.yml ב-root",
        "Secrets נכתבים ישירות בYAML מוצפן",
        "GitHub Actions הוא שם של CLI tool שמריץ pipelines"
      ],
      explanation: "workflow file: on: [push, pull_request]; jobs: build: runs-on: ubuntu-latest; steps: uses: actions/checkout@v3; run: npm test. Secrets: Settings → Secrets and variables → Actions → New secret. בstep: env: AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}. Environments (prod/staging) יכולים לדרוש approval. GitHub Marketplace: אלפי pre-built actions. Self-hosted runners לprivate networks. OIDC: GitHub Actions → AWS IAM Role ללא static keys!"
    },
        {
      q: "מה Shift Left Testing ולמה זה חוסך כסף?",
      correct: "הזזת testing שמאלה ב-pipeline — בדיקות מוקדמות יותר ב-development lifecycle; bug שמתגלה בdesign עולה פחות מbug בproduction",
      choices: [
        "הזזת testing שמאלה ב-pipeline — בדיקות מוקדמות יותר ב-development lifecycle; bug שמתגלה בdesign עולה פחות מbug בproduction",
        "כלי שמזיז test cases לסוף pipeline למהירות",
        "מתודולוגיה שמחליפה QA engineers באוטומציה",
        "בדיקות שנעשות על ה-left side של cluster"
      ],
      explanation: "Rule of 10 (IBM): bug בdesign = $1, בdevelopment = $10, ב-QA = $100, בproduction = $1,000+. Shift Left: unit tests בIDE (pre-commit), SAST (static analysis) בPR, integration tests בCI, security scanning (Snyk, Trivy) בbuild. TDD (Test Driven Development) = extreme shift left. DevSecOps = security shift left. Pre-commit hooks (Husky) מונעים commit של code שעובר lint/test."
    }
  ],

  206: [
    {
      q: "מה SLO, SLA, ו-SLI — ומה ההבדל?",
      correct: "SLI = מדידה (latency, availability). SLO = יעד פנימי (99.9%). SLA = הסכם מול לקוח עם קנסות",
      choices: [
        "SLI = מדידה (latency, availability). SLO = יעד פנימי (99.9%). SLA = הסכם מול לקוח עם קנסות",
        "כולם זהים — מונחים שונים לאותו דבר",
        "SLO לdevelopers, SLA לoperations, SLI לlegal",
        "SLA חינמי, SLO בתשלום"
      ],
      explanation: "SLI (Service Level Indicator): מה אתה מודד. latency_p99 = 120ms. availability = 99.94%. SLO (Objective): היעד שלך. latency_p99 < 200ms, availability > 99.9%. Error Budget: 0.1% downtime = 43.8 דקות לחודש. SLA (Agreement): חוזה עם לקוח. אחרי פריצת SLA → credit/refund. Google Cloud: 99.9% SLA לGCE. Google בפנים עובד ב-99.99% SLO."
    },
    {
      q: "מה Chaos Engineering ולמה Netflix המציאה אותו?",
      correct: "הזרקת כשלים בכוונה לproduction לגילוי חולשות לפני שכשל אמיתי קורה",
      choices: [
        "הזרקת כשלים בכוונה לproduction לגילוי חולשות לפני שכשל אמיתי קורה",
        "בדיקת ביצועים תחת load קיצוני",
        "penetration testing לאפליקציות",
        "A/B testing לfeature flags"
      ],
      explanation: "Netflix עברה לcloud ב-2008. AWS outage 2011 הפיל אותם. תגובה: Chaos Monkey — tool שמכבה VMs אקראיות בproduction. Simian Army: Chaos Gorilla (AZ failure), Latency Monkey (network delays). עיקרון: 'אם כשלים קורים בכל מקרה — עדיף לגלות חולשות כשאתה מוכן'. 'Netflix knows about failures before their customers do.' GameDay = chaos experiment מתוכנן."
    },
    {
      q: "מה Postmortem blameless ולמה חשוב?",
      correct: "ניתוח incident ללא האשמת אנשים — מחפש כשלי מערכת, לא שגיאות אנושיות, כדי לשפר תהליכים",
      choices: [
        "ניתוח incident ללא האשמת אנשים — מחפש כשלי מערכת, לא שגיאות אנושיות, כדי לשפר תהליכים",
        "דוח שמגן על חברה מתביעות משפטיות",
        "ניתוח ביצועים שבועי",
        "review קוד אחרי deploy לפרודקשן"
      ],
      explanation: "Blameless: אנשים לא מקבלים עונש → מוכנים לדווח על בעיות → ארגון לומד. Google SRE: 'If a human error caused the outage, the system design failed.' 5 Whys: Why did DB go down? → disk full → Why? → log rotation broke → Why? → deploy changed config → root cause. Action items: automation, monitoring, runbooks. ללא postmortem = אותה תקלה שוב."
    }
,
    {
      q: "מה Error Budget ב-SRE ואיך משפיע על velocity של פיתוח?",
      correct: "Error Budget = 100% - SLO target. אם SLO = 99.9%, error budget = 0.1% (43.8 דקות/חודש). כשה-budget אוזל — מאטים deployments עד לחידוש",
      choices: [
        "Error Budget = 100% - SLO target. אם SLO = 99.9%, error budget = 0.1% (43.8 דקות/חודש). כשה-budget אוזל — מאטים deployments עד לחידוש",
        "Error Budget = מספר ה-bugs המותרים בrelease",
        "Error Budget = זמן שמהנדסים מקדישים לbug fixes",
        "Error Budget תמיד 5% ללא קשר ל-SLO"
      ],
      explanation: "SRE philosophy: reliability vs feature velocity. Error budget = זמן downtime מותר לפי SLO. אם SLO=99.9%: 43.8 min/month budget. Incident גרמה ל-20 min downtime = שרפת 46% מהbudget. Policy: budget > 50% → deploy בחופשיות. budget 0-50% → זהירות. budget מאופס → freeze deployments, רק reliability work. זה מיישר תמריצים: Dev רוצים לdeploy מהר = אינטרס גם בreliability."
    },
    {
      q: "מה Chaos Engineering ומה הכלי הנפוץ ביותר?",
      correct: "הזרקת כשלים מכוונים לproduction כדי לגלות חולשות לפני שמשתמשים יפגעו; Netflix Chaos Monkey הוא הכלי הידוע ביותר",
      choices: [
        "הזרקת כשלים מכוונים לproduction כדי לגלות חולשות לפני שמשתמשים יפגעו; Netflix Chaos Monkey הוא הכלי הידוע ביותר",
        "בדיקות load שמריצים בstaging בלבד",
        "כלי לsimulation של network failures בdevelopment",
        "תהליך של פיתוח בלי tests כדי לקדם מהר"
      ],
      explanation: "Chaos Engineering (Netflix 2011): 'If it hurts, do it more often'. Chaos Monkey: הורג instances אקראיים בproduction. Chaos Gorilla: מוריד AZ שלמה. Chaos Kong: מוריד region שלם. Simian Army = קבוצת כלי chaos. Principles: steady state hypothesis, vary real-world events, run in production, automate. Gremlin, LitmusChaos (Kubernetes), AWS FIS = כלים מודרניים. מטרה: לגלות שה-system ממשיך לעבוד גם עם כשלים."
    },
    {
      q: "מה Postmortem ב-SRE ועל איזה עיקרון הוא מבוסס?",
      correct: "ניתוח תקרית לאחר אירוע — מבוסס על Blameless Postmortem: מחפשים גורמים מערכתיים, לא מאשימים אנשים",
      choices: [
        "ניתוח תקרית לאחר אירוע — מבוסס על Blameless Postmortem: מחפשים גורמים מערכתיים, לא מאשימים אנשים",
        "דוח שמגישים לCTO עם שמות האחראים לתקרית",
        "תהליך disciplinary לאחר outage חמור",
        "Postmortem = RCA = Incident Report — כולם אותו דבר"
      ],
      explanation: "Blameless Postmortem (Google SRE Book): אנשים לא עושים טעויות בכוונה. הם מצאו עצמם בסיטואציה שהמערכת איפשרה. Structure: What happened (timeline)? Why? (5 Whys). Impact. Contributing factors. Action items (with owners + deadlines). לא מי אשם. תרבות: אנשים מדווחים בחופשיות על טעויות → יותר learning → מערכת בטוחה יותר. Google: כל SLO breach → postmortem חובה."
    }
  ],

  // ===== Research Track (301-305) =====
  301: [
    {
      q: "מה ה-Wireshark filter לראות רק חבילות שנשלחו מחדש?",
      correct: "tcp.analysis.retransmission",
      choices: [
        "tcp.analysis.retransmission",
        "tcp.flags.rst == 1",
        "tcp.analysis.lost_segment",
        "tcp.retransmit == true"
      ],
      explanation: "tcp.analysis.retransmission מסנן חבילות שה-TCP stack זיהה כretransmissions. tcp.analysis.fast_retransmission מסנן fast retransmits (אחרי 3 dup-ACKs). tcp.analysis.duplicate_ack מציג ACKים כפולים שמסמנים אובדן."
    },
    {
      q: "מה מצב TCP 'Zero Window' מעיד עליו?",
      correct: "ה-receiver buffer מלא — ה-application לא קורא נתונים מהר מספיק",
      choices: [
        "ה-receiver buffer מלא — ה-application לא קורא נתונים מהר מספיק",
        "חיבור TCP נסגר בכוח",
        "אובדן חבילות ברשת",
        "ה-sender לא שולח נתונים"
      ],
      explanation: "Zero Window Window הוא כשה-receiver מכריז שאין לו buffer פנוי (window size=0). ה-sender חייב להפסיק לשלוח. בדרך כלל סימן שה-application לא קורא מ-socket מהר מספיק — בעיית CPU או כניסה לקוד."
    },
    {
      q: "מה Statistics → TCP Stream Graph מראה ב-Wireshark?",
      correct: "גרף Time-Sequence המציג CWND ו-RTT לאורך זמן — drops נראים כצניחות",
      choices: [
        "גרף Time-Sequence המציג CWND ו-RTT לאורך זמן — drops נראים כצניחות",
        "מפת רשת של כל ה-hosts",
        "היסטוגרמה של גדלי חבילות",
        "ממשק לסינון packets לפי port"
      ],
      explanation: "TCP Stream Graphs ב-Wireshark כוללים: Time-Sequence (CWND), Throughput, Round-trip Time, Window Scaling. הגרף הכי שימושי לניפוי: Time-Sequence — כל retransmission מופיע כנקודה שנוחתת ב-Y נמוך יותר, ו-CWND צניחה."
    },
        {
      q: "מה Wireshark display filter שמציג רק HTTP GET requests?",
      correct: "http.request.method == 'GET'",
      choices: [
        "http.request.method == 'GET'",
        "http.method = GET",
        "filter http GET",
        "tcp.payload contains 'GET'"
      ],
      explanation: "Wireshark display filters (≠ capture filters!): http.request.method == 'GET'. Capture filter (BPF syntax): host 192.168.1.1 and port 80. שימושיים: ip.src == 10.0.0.1, tcp.port == 443, dns.qry.name contains 'google', tls.handshake.type == 1 (ClientHello), http.response.code >= 400. tcp.analysis.retransmission לבעיות רשת. Statistics → Protocol Hierarchy להבנת composition. Follow → TCP Stream לראות full conversation בקריאה."
    },
        {
      q: "מה TCP Retransmission ומה Wireshark filter לזיהויה?",
      correct: "Retransmission = שליחה חוזרת של segment שלא אושר בזמן (ACK timeout); filter: tcp.analysis.retransmission",
      choices: [
        "Retransmission = שליחה חוזרת של segment שלא אושר בזמן (ACK timeout); filter: tcp.analysis.retransmission",
        "Retransmission = packet שהגיע out-of-order",
        "Retransmission = חיבור TCP חדש לאחר disconnect",
        "filter: tcp.flags.retransmit == 1"
      ],
      explanation: "TCP Retransmission: segment נשלח אך ACK לא הגיע בRTO (Retransmission Timeout). Wireshark marking: expert info → Warning → TCP Retransmission. Related: Duplicate ACK (receiver מבקש missing segment), Fast Retransmit (3 duplicate ACKs → שלח מחדש מיד, לא מחכה לtimeout), TCP Out-of-Order (הגיע לפני קודמו). High retransmission rate: בעיית רשת, congestion, firewall שחוסם ACKs. tcp.analysis.flags לכל ה-expert annotations."
    },
        {
      q: "מה TLS handshake נראה ב-Wireshark ואיזה packet ראשון?",
      correct: "ClientHello הוא הpacket הראשון — מכיל TLS version, cipher suites, וSNI (שם הדומיין); filter: tls.handshake.type == 1",
      choices: [
        "ClientHello הוא הpacket הראשון — מכיל TLS version, cipher suites, וSNI (שם הדומיין); filter: tls.handshake.type == 1",
        "ServerHello ראשון — השרת מתחיל negotiation",
        "Certificate ראשון — השרת שולח תעודה לפני הכל",
        "TCP SYN הוא ה-TLS handshake הראשון"
      ],
      explanation: "TLS 1.3 Handshake ב-Wireshark: 1) TCP SYN/SYN-ACK/ACK (TCP layer). 2) ClientHello (TLS record type 22, handshake type 1): TLS version, random, session ID, cipher suites, extensions (SNI, ALPN, supported_groups). 3) ServerHello + {Encrypted Extensions + Certificate + CertificateVerify + Finished} (מוצפן!). 4) Client {Finished}. 5) Application Data. TLS 1.3 = 1-RTT vs TLS 1.2 = 2-RTT. לפענוח: Wireshark → Preferences → TLS → (Pre)-Master-Secret log file."
    }
  ],
  302: [
    {
      q: "מה ההבדל העיקרי בין iBGP ל-eBGP?",
      correct: "iBGP פועל בתוך AS אחד, eBGP פועל בין ASים שונים",
      choices: [
        "iBGP פועל בתוך AS אחד, eBGP פועל בין ASים שונים",
        "iBGP יותר מהיר מ-eBGP",
        "eBGP משמש לrouting פנימי בלבד",
        "iBGP דורש חיבור ישיר, eBGP לא"
      ],
      explanation: "iBGP = Internal BGP, בתוך אותו AS. eBGP = External BGP, בין ASים שונים. ההבדלים הטכניים: TTL (iBGP=255, eBGP=1), next-hop behavior, ו-loop prevention rule (iBGP router לא מפרסם מסלול iBGP לiBGP אחר ← חייב full mesh או Route Reflectors)."
    },
    {
      q: "בבחירת מסלול BGP, איזה קריטריון בודקים ראשון?",
      correct: "Weight (Cisco) — ערך גבוה יותר מנצח",
      choices: [
        "Weight (Cisco) — ערך גבוה יותר מנצח",
        "AS Path Length — קצר יותר מנצח",
        "Local Preference — ערך גבוה יותר מנצח",
        "MED — ערך נמוך יותר מנצח"
      ],
      explanation: "סדר path selection ב-BGP: 1) Weight (Cisco), 2) Local Preference, 3) Locally originated, 4) AS Path Length (קצר יותר), 5) Origin, 6) MED (נמוך יותר), 7) eBGP > iBGP, 8) IGP metric. ברוב הRFC implementations, Local Preference הוא הראשון (Weight הוא Cisco proprietary)."
    },
    {
      q: "מה גרמה תקרית Pakistan Telecom 2008 עם YouTube?",
      correct: "Pakistan פרסמה /24 ספציפי יותר מה-/22 של YouTube — BGP Longest Prefix Match ניצח",
      choices: [
        "Pakistan פרסמה /24 ספציפי יותר מה-/22 של YouTube — BGP Longest Prefix Match ניצח",
        "Pakistan פרצה לשרתי YouTube ישירות",
        "YouTube ביצעה BGP hijacking על Pakistan",
        "שגיאה ב-DNS הפנתה לservers שגויים"
      ],
      explanation: "BGP Longest Prefix Match: /24 תמיד מנצח /22 כי הוא ספציפי יותר. Pakistan פרסמה 208.65.153.0/24 ←  route ספציפי יותר מ-208.65.153.0/22 של YouTube. ISPים בכל העולם העדיפו אותו. 75% מטראפיק YouTube הופנה ל-Pakistan תוך דקות. RPKI נוצר בדיוק כדי למנוע זאת."
    },
        {
      q: "מה BGP AS Path ואיך הוא מונע routing loops?",
      correct: "AS Path = רשימת AS numbers שהmessage עבר; כל router שרואה את ה-ASN שלו ב-Path — דוחה את ה-route",
      choices: [
        "AS Path = רשימת AS numbers שהmessage עבר; כל router שרואה את ה-ASN שלו ב-Path — דוחה את ה-route",
        "AS Path הוא metric לבחירת route הטוב ביותר",
        "AS Path מגן מפני DDoS attacks על ה-routing",
        "AS Path מוצפן ב-BGPsec לאבטחה"
      ],
      explanation: "AS Path Loop Prevention: router מקבל UPDATE עם AS_PATH: [64501, 64502, 64503]. אם ה-ASN שלו (64501) מופיע בpath → DISCARD (loop!). AS Path גם משמש כroute selection attribute (קצר יותר = מועדף ברירת מחדל). AS Path Prepending: מוסיפים ASN שלנו מספר פעמים → נראה ארוך יותר → route פחות מועדף (traffic engineering). ASPATH regex filter: ip as-path access-list 10 permit ^64501_."
    },
        {
      q: "מה קרה בתקרית Pakistan Telecom 2008 ואיזה BGP חולשה חשפה?",
      correct: "Pakistan Telecom הכריזה BGP prefix של YouTube (/24 ספציפי) → traffic עולמי הוסט לפקיסטן ו-YouTube הפסיקה לעבוד כ-2 שעות — חשפה היעדר BGP prefix validation",
      choices: [
        "Pakistan Telecom הכריזה BGP prefix של YouTube (/24 ספציפי) → traffic עולמי הוסט לפקיסטן ו-YouTube הפסיקה לעבוד כ-2 שעות — חשפה היעדר BGP prefix validation",
        "Pakistan Telecom הפיל BGP sessions עם כל ISPs הסמוכים",
        "מתקפת DDoS על שרתי הrouting של YouTube",
        "BGP misconfiguration שגרמה לrouting loop ב-Asia-Pacific"
      ],
      explanation: "2008-02-24: Pakistan Telecom קיבלה הוראה לחסום YouTube. טעות: הכריזו 208.65.153.0/24 (more specific מה-/22 של YouTube) לISP שלהם PCCW. PCCW הפיצה לאינטרנט. Longest prefix match → traffic הלך לPakistan. YouTube = blackhole. תיקון תוך שעתיים. לקח: BGP prefix hijacking קל מדי. פתרון: RPKI (Resource Public Key Infrastructure) — ROA (Route Origin Authorization) מאמת שAS X רשאי להכריז prefix Y."
    },
        {
      q: "מה ההבדל בין iBGP לבין eBGP ו-full mesh דרישה?",
      correct: "eBGP: בין ASes שונים; iBGP: בתוך אותו AS. iBGP דורש full mesh (n*(n-1)/2 peers) או Route Reflectors כי iBGP לא מעביר routes שקיבל מiBGP peer",
      choices: [
        "eBGP: בין ASes שונים; iBGP: בתוך אותו AS. iBGP דורש full mesh (n*(n-1)/2 peers) או Route Reflectors כי iBGP לא מעביר routes שקיבל מiBGP peer",
        "iBGP לrouters פיזיים; eBGP לvirtual routers",
        "eBGP בתוך data center; iBGP לinternet connectivity",
        "אין הבדל פרקטי — רק administrative distinction"
      ],
      explanation: "iBGP split-horizon: router לא מעביר routes שלמד מiBGP peer לiBGP peer אחר (מניעת loops בתוך AS). לכן: full mesh בין כל iBGP routers. AS עם 10 routers = 45 sessions! פתרון: Route Reflector (RR): router מיוחד שמעביר iBGP routes. RR cluster: RR + clients. Confederation: AS מתחלק ל-sub-ASes. eBGP: next-hop נשמר; iBGP: next-hop ממשיך להיות IP של eBGP neighbor — חשוב ל-next-hop reachability."
    }
  ],
  303: [
    {
      q: "מה ההבדל בין Recursive Resolver ל-Authoritative Nameserver?",
      correct: "Recursive Resolver עושה את כל חקירת השרשרת; Authoritative NS מחזיר את ה-IP האמיתי",
      choices: [
        "Recursive Resolver עושה את כל חקירת השרשרת; Authoritative NS מחזיר את ה-IP האמיתי",
        "Recursive Resolver הוא Root Server",
        "Authoritative NS מחזיר רק NXDOMAIN",
        "אין הבדל — שניהם אותה תפקיד"
      ],
      explanation: "Recursive Resolver (8.8.8.8, 1.1.1.1) שואל את Root → TLD → Auth בשביל הclient ומחזיר תוצאה מcache. Authoritative NS (ns1.google.com) הוא המקור הסמכותי לdomain ספציפי — רק הוא יודע את ה-IP האמיתי."
    },
    {
      q: "מה DNS-over-HTTPS (DoH) מספק שDNS רגיל לא?",
      correct: "הצפנה של DNS queries — ה-ISP רואה HTTPS ל-resolver ולא שאילתות DNS ספציפיות",
      choices: [
        "הצפנה של DNS queries — ה-ISP רואה HTTPS ל-resolver ולא שאילתות DNS ספציפיות",
        "DNS מהיר יותר",
        "תמיכה ב-IPv6",
        "אימות קריפטוגרפי של תשובות DNS"
      ],
      explanation: "DoH שולח DNS queries מוצפנות על HTTPS (port 443) — ה-ISP רואה HTTPS traffic לCloudflare/Google, לא את הdomains שאתה מבקר. DNSSEC מספק אימות קריפטוגרפי (שאלה נפרדת). DoT (port 853) הוא אלטרנטיבה — DNS over TLS."
    },
    {
      q: "איך Anycast עובד עם 8.8.8.8 של Google?",
      correct: "Google מפרסמת 8.8.8.8 ממספר מקומות עם BGP — BGP מנתב לpoint הקרוב ביותר",
      choices: [
        "Google מפרסמת 8.8.8.8 ממספר מקומות עם BGP — BGP מנתב לpoint הקרוב ביותר",
        "8.8.8.8 הוא IP ייחודי לשרת ספציפי בארה\"ב",
        "DNS Round-Robin מחלק בין שרתים",
        "CDN מפנה requests לפי Geo-IP"
      ],
      explanation: "Anycast: אותה כתובת IP מפורסמת ממספר locations ב-BGP. BGP always routes to the closest/best path. תוצאה: משתמש בישראל מגיע לdatacenter באירופה/ישראל, לא ב-US. 8.8.8.8 רץ מ-dozens of locations — RTT נמוך מכל מקום בעולם."
    },
        {
      q: "מה ההבדל בין DNS Recursive Resolver לבין Authoritative Name Server?",
      correct: "Recursive Resolver שואל בשם הלקוח ומאחסן תשובות (ISP/8.8.8.8); Authoritative NS מכיר את התשובה הסופית לdomain ספציפי",
      choices: [
        "Recursive Resolver שואל בשם הלקוח ומאחסן תשובות (ISP/8.8.8.8); Authoritative NS מכיר את התשובה הסופית לdomain ספציפי",
        "שניהם זהים — כל DNS server עושה הכל",
        "Recursive = בתשלום; Authoritative = חינם",
        "Authoritative שואל את ה-Root Servers; Recursive עונה ללקוחות"
      ],
      explanation: "DNS Resolution chain: stub resolver (OS) → Recursive Resolver (8.8.8.8) → Root Server (13 clusters) → TLD NS (.com, .io) → Authoritative NS (ns1.cloudflare.com). Recursive Resolver caches כל תשובה לפי TTL. Authoritative NS: Zone file עם A, AAAA, CNAME, MX, TXT records. Primary vs Secondary NS: secondary מבצע zone transfer מprimary. DNS cache poisoning: תוקף מאחסן record מזויף ב-recursive resolver → כל הלקוחות מושפעים. DNSSEC: digital signatures לauthentication."
    },
        {
      q: "מה DNS over HTTPS (DoH) ומה היתרון שלו על DNS רגיל?",
      correct: "DoH שולח DNS queries בתוך HTTPS (port 443) — מונע ISP ממעקב אחרי queries ומקשה על censorship; חסרון: ISP לא יכול לבלוק malicious domains",
      choices: [
        "DoH שולח DNS queries בתוך HTTPS (port 443) — מונע ISP ממעקב אחרי queries ומקשה על censorship; חסרון: ISP לא יכול לבלוק malicious domains",
        "DoH מהיר יותר מDNS רגיל בגלל HTTP/2",
        "DoH מוצפן AES-256 בניגוד ל-DNS רגיל שלא מוצפן",
        "DoH פועל רק בbrowsers, DoT לapplications"
      ],
      explanation: "DNS רגיל (port 53/UDP): plaintext! ISP רואה כל query. DoH (RFC 8484): HTTPS POST/GET ל-/dns-query endpoint (1.1.1.1, 8.8.8.8). קשה לחסום (traffic נראה כHTTPS רגיל). DoT (DNS over TLS, port 853): TCP עם TLS, ניתן לזהות ולחסום. Firefox/Chrome: DoH built-in. OS: Windows 11, Android 9+ תומכים DoT. Encrypted Client Hello (ECH): מצפין גם SNI שנשלח בTLS ClientHello. Privacy debate: ISP blind spot vs corporate DNS provider privacy."
    },
        {
      q: "מה Anycast ב-DNS ואיך 13 Root Servers מגישים את כל האינטרנט?",
      correct: "Anycast: אותה כתובת IP מוכרזת מ-locations רבים — routing שולח traffic למיקום הקרוב ביותר. 13 Root IPs = מאות servers פיזיים עולמיים",
      choices: [
        "Anycast: אותה כתובת IP מוכרזת מ-locations רבים — routing שולח traffic למיקום הקרוב ביותר. 13 Root IPs = מאות servers פיזיים עולמיים",
        "13 Root Servers = 13 מחשבים ענקיים הפרוסים בוושינגטון",
        "Anycast = load balancer שמחלק traffic לפי round-robin",
        "Root Servers משתמשים ב-BGP unicast עם anycast overlay"
      ],
      explanation: "Root Servers (a-m.root-servers.net): 13 כתובות IP אך כל אחת Anycast. Verisign (a.root-servers.net): מעל 100 locations עולמיים עם אותה IP. BGP: כל location מכריז את ה-prefix → routers שולחים לקרוב ביותר לפי AS Path. F-root (ISC): 300+ locations. יתרון: latency נמוך, DDoS mitigation (תקיפת IP אחת מפוזרת על מאות nodes). 2002 DDoS attack על Root Servers: רק 9/13 שרדו — כיום Anycast מגן הרבה יותר."
    }
  ],
  304: [
    {
      q: "מה HOL Blocking שHTTP/2 עדיין סובל ממנו?",
      correct: "אובדן TCP packet אחד קופא את כל ה-streams בחיבור — TCP לא יודע על streams נפרדים",
      choices: [
        "אובדן TCP packet אחד קופא את כל ה-streams בחיבור — TCP לא יודע על streams נפרדים",
        "HTTP/2 לא תומך ב-multiplexing",
        "HTTP/2 מוגבל ל-6 בקשות במקביל",
        "ה-server לא יכול לשלוח data לפני שה-client ביקש"
      ],
      explanation: "HTTP/2 הביא multiplexing (מספר streams בחיבור אחד), אבל TCP מטפל בstream כbyte stream אחד רציף. אובדן packet → TCP מחכה לretransmission → כל ה-streams קפואים. HTTP/3 על QUIC פותר זאת: כל stream עצמאי, אובדן ב-stream אחד לא חוסם אחרים."
    },
    {
      q: "מה QUIC Connection Migration מספק?",
      correct: "מעבר בין WiFi לסלולרי ללא ניתוק — Connection ID שמר על הזהות, לא IP:port",
      choices: [
        "מעבר בין WiFi לסלולרי ללא ניתוק — Connection ID שמר על הזהות, לא IP:port",
        "חיבור מהיר יותר בהתחלה",
        "כפילות חיבורים לredundancy",
        "migration בין servers שונים"
      ],
      explanation: "TCP זוהה לפי tuple (src IP, src port, dst IP, dst port). מעבר WiFi→סלולרי = IP חדש = חיבור נשבר. QUIC זוהה לפי Connection ID אקראי — ה-server ממשיך לדעת מי אתה גם אחרי שינוי IP. TLS 1.3 session resumption מאפשר המשך ללא re-handshake."
    },
    {
      q: "מה יתרון 0-RTT ב-QUIC?",
      correct: "בחיבור חוזר, ה-client שולח data עם ה-ClientHello הראשון — אפס round trips",
      choices: [
        "בחיבור חוזר, ה-client שולח data עם ה-ClientHello הראשון — אפס round trips",
        "0-RTT = ללא latency בכלל",
        "QUIC תמיד מהיר יותר מTCP",
        "0-RTT עובד רק בתוך אותה network"
      ],
      explanation: "TCP + TLS = 1-3 RTT לפני data. QUIC עם session resumption: client שומר session ticket מחיבור קודם, שולח data מיד עם ה-first packet (0-RTT). מגבלה: 0-RTT data פגיע ל-replay attacks — לכן משתמשים בו רק לread-only requests."
    },
        {
      q: "מה HOL Blocking ב-HTTP/2 ואיך QUIC/HTTP/3 פותר את זה?",
      correct: "HTTP/2 multiplexes streams על TCP אחד — packet loss אחד חוסם כל ה-streams. QUIC מריץ streams בנפרד ב-UDP — packet loss חוסם stream אחד בלבד",
      choices: [
        "HTTP/2 multiplexes streams על TCP אחד — packet loss אחד חוסם כל ה-streams. QUIC מריץ streams בנפרד ב-UDP — packet loss חוסם stream אחד בלבד",
        "HOL Blocking ב-HTTP/1.1 בלבד; HTTP/2 ו-HTTP/3 פותרים אותו לחלוטין",
        "QUIC פותר HOL Blocking על ידי compression טוב יותר",
        "HTTP/3 משתמש ב-TCP עם QUIC extension layer"
      ],
      explanation: "HTTP/1.1: HOL (Head-of-Line) blocking — request אחד בכל פעם. HTTP/2: multiplexing — streams רבים על TCP אחד. בעיה: TCP reliable = packet loss → retransmit → כל streams ב-connection חכים. זה TCP-level HOL. QUIC: מריץ כל stream כ-QUIC stream נפרד ב-UDP. packet loss בstream 3 = רק stream 3 חוסה. UDP = QUIC handles reliability per-stream. Connection Migration: mobile IP שינוי לא שובר connection (connection ID vs IP:port tuple)."
    },
        {
      q: "מה QUIC 0-RTT ומה security tradeoff?",
      correct: "0-RTT: client שביקר קודם שולח data בpacket הראשון ללא handshake; חסרון: חשיפה לReplay Attacks על ה-0-RTT data",
      choices: [
        "0-RTT: client שביקר קודם שולח data בpacket הראשון ללא handshake; חסרון: חשיפה לReplay Attacks על ה-0-RTT data",
        "0-RTT = connection ללא הצפנה לביצועים",
        "0-RTT אפשרי רק בHTTP/3 עם TLS 1.2",
        "0-RTT בטוח לחלוטין כי QUIC מכיל anti-replay מובנה"
      ],
      explanation: "QUIC Session Resumption: client שביקר שמר session ticket. בביקור חוזר: שולח ClientHello + HTTP request + data בpacket אחד (0-RTT). RTT = Round Trip Time = latency הלוך-חזור. 1-RTT: regular TLS 1.3 handshake. 0-RTT Replay Risk: תוקף מיירט ומשחזר 0-RTT data (למשל: POST /buy עם item). הגנה: שרת יכול לדחות 0-RTT לendpoints non-idempotent (POST, PUT). CloudFlare, Google = implement 0-RTT ב-QUIC בproduction."
    },
        {
      q: "מה HPACK ב-HTTP/2 ו-QPACK ב-HTTP/3 ולמה פותחו?",
      correct: "אלגוריתמי דחיסת headers — HTTP/1.1 שולח headers כtext חוזר בכל request (כולל cookies גדולים); HPACK/QPACK מקודדים headers בindex table לחיסכון bandwidth",
      choices: [
        "אלגוריתמי דחיסת headers — HTTP/1.1 שולח headers כtext חוזר בכל request (כולל cookies גדולים); HPACK/QPACK מקודדים headers בindex table לחיסכון bandwidth",
        "HPACK = encryption layer של HTTP/2",
        "QPACK = QUIC Packet compression",
        "שניהם מדחסים HTTP body, לא headers"
      ],
      explanation: "HTTP/1.1: כל request שולח User-Agent, Accept, Cookie מחדש — headers גדולים כ-1-2KB. HPACK (RFC 7541): Static table (61 common headers), Dynamic table (headers שנראו ב-session). 'GET /index.html' → index 2 (1 byte במקום 20 bytes!). CRIME/BREACH attacks: ניצלו TLS+gzip compression לחשיפת secrets. HPACK: header-only, לא body → נמנע CRIME. QPACK (HTTP/3): HPACK for QUIC — מותאם לmultiplexing ללא blocking."
    }
  ],
  305: [
    {
      q: "מה eBPF Verifier מבטיח לפני שprogram רץ בkernel?",
      correct: "ה-program לא יגרום crash, לא ירוץ לנצח, ולא ייגש לזיכרון לא מורשה",
      choices: [
        "ה-program לא יגרום crash, לא ירוץ לנצח, ולא ייגש לזיכרון לא מורשה",
        "ה-program מהיר מאוד",
        "ה-program מוצפן",
        "ה-program תואם לכל גרסאות Linux"
      ],
      explanation: "eBPF Verifier בודק: 1) No unbounded loops — ה-program חייב לסיים, 2) No out-of-bounds memory access, 3) No uninitialized reads, 4) Return codes חוקיים. רק אחרי verification מוצלח ה-kernel מריץ את ה-bytecode (JIT compiled). זה ה-key feature שמאפשר run code in kernel safely."
    },
    {
      q: "מה XDP_DROP עושה לחבילה ב-eBPF?",
      correct: "זורק את החבילה לפני שהיא מגיעה ל-kernel network stack — אפקטיבי לDDoS mitigation",
      choices: [
        "זורק את החבילה לפני שהיא מגיעה ל-kernel network stack — אפקטיבי לDDoS mitigation",
        "מפנה את החבילה לinterface אחר",
        "שולח את החבילה בחזרה ל-sender",
        "מוסיף את החבילה לqueue לעיבוד איטי"
      ],
      explanation: "XDP (eXpress Data Path) פועל ב-NIC driver level, לפני ה-kernel network stack. XDP_DROP = drop מיידי, אפס overhead של kernel. XDP_PASS = עובר ל-kernel רגיל. XDP_TX = שולח בחזרה (hairpin). XDP_REDIRECT = מפנה. זו הסיבה שCloudflare יכולה לבלוע 2.5B pps של DDoS."
    },
    {
      q: "מה היתרון של Cilium על iptables בKubernetes?",
      correct: "eBPF maps = O(1) lookup לעומת iptables = O(n) בkubernetes עם אלפי rules",
      choices: [
        "eBPF maps = O(1) lookup לעומת iptables = O(n) בkubernetes עם אלפי rules",
        "Cilium תומך ב-IPv4, iptables רק IPv6",
        "iptables לא עובד ב-containers",
        "Cilium מהיר כי כותב ב-Go"
      ],
      explanation: "Kubernetes עם 1000 services = iptables עם אלפי rules = כל packet עובר O(n) חיפוש ליניארי. Cilium מחליף iptables בeBPF hash maps = O(1) בכל גודל. בנוסף: Cilium/Hubble מספקים observability מלאה (pod→pod traffic), security policies ברמת L7, וPerformance Training שwordpress לא תאמין."
    }
,
    {
      q: "מה eBPF map ואיזה types נפוצים?",
      correct: "מבנה נתונים shared בין eBPF programs לbין kernel/userspace; types: BPF_MAP_TYPE_HASH, ARRAY, RINGBUF, PERF_EVENT_ARRAY",
      choices: [
        "מבנה נתונים shared בין eBPF programs לbין kernel/userspace; types: BPF_MAP_TYPE_HASH, ARRAY, RINGBUF, PERF_EVENT_ARRAY",
        "eBPF map = מיפוי kernel addresses לvirtual addresses",
        "רשימה של eBPF programs שphoaded ב-kernel",
        "eBPF map = file במערכת קבצים /sys/fs/bpf"
      ],
      explanation: "eBPF maps: IPC mechanism בין eBPF programs לuser-space tools. HASH_MAP: key-value store. ARRAY: fixed-size indexed. LRU_HASH: evicts least recently used. RINGBUF: efficient ring buffer לstreaming events לuserspace (מחליף PERF_EVENT_ARRAY). PERCPU variants: lock-free per-CPU storage. בpr: בpinning לpath (/sys/fs/bpf/my_map) ניתן לshare בין processes. libbpf API: bpf_map_lookup_elem, bpf_map_update_elem. Cilium: maps לtrack connections, policies, endpoints."
    },
    {
      q: "מה ההבדל בין eBPF tracepoints לבין kprobes?",
      correct: "Tracepoints: hook points סטטיים מוגדרים ב-kernel code (stable ABI); kprobes: attach לכל kernel function address (דינמי, עלול להשתנות בין kernel versions)",
      choices: [
        "Tracepoints: hook points סטטיים מוגדרים ב-kernel code (stable ABI); kprobes: attach לכל kernel function address (דינמי, עלול להשתנות בין kernel versions)",
        "kprobes מהירים יותר; tracepoints מאובטחים יותר",
        "Tracepoints לuserspace; kprobes לkernel בלבד",
        "אין הבדל מעשי — שניהם attach לאותם מקומות"
      ],
      explanation: "Tracepoints (sys_enter/sys_exit, net:netif_rx, sched:sched_switch): מוגדרים בmacro TRACE_EVENT בkernel source. Stable: נשמרים בין kernel versions. uprobes: כמו kprobes אבל לuserspace functions. Perf events: hardware counters (CPU cycles, cache misses). bpftrace one-liner: bpftrace -e 'tracepoint:syscalls:sys_enter_read { printf(\\\"%s read %d bytes\\n\\\", comm, args->count); }'. libbpf skeleton: generate C bindings מBTF."
    },
    {
      q: "מה Cilium ואיך משתמש ב-eBPF לCNI?",
      correct: "CNI plugin שמחליף iptables ב-eBPF — O(1) policy lookup במקום O(n) iptables rules, L7 visibility, Hubble observability",
      choices: [
        "CNI plugin שמחליף iptables ב-eBPF — O(1) policy lookup במקום O(n) iptables rules, L7 visibility, Hubble observability",
        "Cilium = Calico מבוסס eBPF — אותו vendor",
        "Cilium עובד רק עם kernel 6.0+",
        "Cilium = service mesh המחליף Istio"
      ],
      explanation: "Cilium eBPF CNI: kube-proxy replacement (eBPF LB במקום iptables), Network Policies (L3/L4/L7), transparent encryption (WireGuard), Hubble (observability — flow visibility per pod, DNS, HTTP). iptables bottleneck: 10,000 services = 10,000 rules, linear scan. eBPF hash maps: O(1). Cilium בBenchmark: 20-40% better throughput vs kube-proxy. CNCF Graduated project. Service Mesh via Sidecar-free (eBPF replaces Envoy sidecars in Cilium Service Mesh)."
    }
  ],

  207: [
    {
      q: "מה ההבדל בין Terraform apply לבין Terraform plan?",
      correct: "plan מציג מה ישתנה (dry run), apply מבצע את השינויים בפועל",
      choices: [
        "plan מציג מה ישתנה (dry run), apply מבצע את השינויים בפועל",
        "plan יוצר resources, apply מוחק אותם",
        "שניהם מבצעים שינויים, ההבדל הוא מהירות בלבד",
        "plan עובד ב-AWS בלבד, apply עובד בכל cloud"
      ],
      explanation: "terraform plan = dry run שמחשב את ה-diff בין ה-HCL לבין ה-state הנוכחי ומציג מה ייצור/ישנה/ימחק. terraform apply = מבצע את אותם שינויים בפועל. best practice: תמיד run plan ותעיין בoutput לפני apply בפרודקשן."
    },
    {
      q: "מה זה Terraform State ולמה חשוב לשמור אותו ב-S3?",
      correct: "State הוא המיפוי בין HCL לresources אמיתיים — ב-S3 כדי שהצוות כולו ישתמש באותו state",
      choices: [
        "State הוא המיפוי בין HCL לresources אמיתיים — ב-S3 כדי שהצוות כולו ישתמש באותו state",
        "State הוא הגדרות הprovider — ב-S3 לbackup בלבד",
        "State שומר את קוד ה-HCL המקומפל",
        "State רלוונטי רק ל-multi-cloud deployments"
      ],
      explanation: "State הוא הלב של Terraform — מפה מי יצר מה. בלי state, Terraform לא יודע מה קיים. ב-S3+DynamoDB: S3 מאחסן את ה-tfstate, DynamoDB מספק locking כדי שלא שני אנשים יריצו apply במקביל (state corruption). remote state = must בצוות."
    },
    {
      q: "מה ההבדל בין Cattle לבין Pets בהקשר של IaC?",
      correct: "Pets = שרתים ייחודיים שמרפאים, Cattle = שרתים זהים שמחליפים — IaC מעדיף Cattle",
      choices: [
        "Pets = שרתים ייחודיים שמרפאים, Cattle = שרתים זהים שמחליפים — IaC מעדיף Cattle",
        "Cattle = שרתים גדולים (scale-up), Pets = שרתים קטנים",
        "Pets = cloud, Cattle = on-premise",
        "ההבדל הוא בסוג הOS בלבד"
      ],
      explanation: "Netflix הציגה את המטפורה ב-2012. Pets = dev-01, big-iron — לכל אחד שם, ייחודי, ידנית מוגדר. Cattle = web-047, מספרים, זהים, immutable. Terraform + Auto Scaling = Cattle: instance מת? Auto Scaling מייצר אחד חדש מה-template. Chaos Monkey של Netflix הורג servers בפרודקשן ביזמה — כדי לוודא ה-architecture Cattle-ready."
    },
        {
      q: "מה ההבדל בין terraform plan לבין terraform apply?",
      correct: "plan: מחשב ומציג שינויים צפויים ללא ביצוע; apply: מבצע את השינויים על ה-infrastructure בפועל",
      choices: [
        "plan: מחשב ומציג שינויים צפויים ללא ביצוע; apply: מבצע את השינויים על ה-infrastructure בפועל",
        "plan מהיר; apply מפעיל validation בלבד",
        "plan לlocal environment; apply לproduction",
        "plan ו-apply זהים — רק syntax שונה"
      ],
      explanation: "terraform plan: קורא current state (tfstate), קורא desired state (tf files), מחשב diff. output: + להוסיף, - למחוק, ~ לשנות, -/+ לdelete+recreate. שמירת plan: terraform plan -out=tfplan → terraform apply tfplan (גרסה deterministic). terraform apply -auto-approve בCI (עם הגנות!). terraform destroy = מחיקת כל ה-infrastructure. חשוב: review ה-plan לפני apply, במיוחד לresources עם ~ ו--/+."
    },
        {
      q: "מה Terraform State ולמה חשוב לאחסן אותו ב-Remote Backend?",
      correct: "State file (terraform.tfstate) מעקב אחרי resources שנוצרו; remote backend (S3+DynamoDB) מאפשר collaboration, locking, ומונע state corruption",
      choices: [
        "State file (terraform.tfstate) מעקב אחרי resources שנוצרו; remote backend (S3+DynamoDB) מאפשר collaboration, locking, ומונע state corruption",
        "State file הוא Terraform plan שנשמר לreuse",
        "Remote backend הוא שרת Terraform Enterprise בלבד",
        "State לא חשוב — Terraform תמיד query ל-provider"
      ],
      explanation: "terraform.tfstate: JSON שמפה resource 'aws_instance.web' → ID 'i-0abc123def'. בלי state, terraform לא יודע מה כבר יצר. Local state: בעיה ב-team (conflicts). Remote backend: S3 bucket + DynamoDB table (לocking). terraform { backend 'S3' { bucket='tf-state'; key='prod/terraform.tfstate'; dynamodb_table='terraform-locks' } }. Terraform Cloud = managed remote backend. חשוב: state יכול להכיל secrets! הצפן S3 bucket, הגבל גישה ב-IAM."
    },
        {
      q: "מה Terraform Module ולמה משתמשים בהם?",
      correct: "קבצי .tf מקובצים לyunit לוגי לשימוש חוזר — מאפשרים DRY, encapsulation, versioning וsharing של infrastructure patterns",
      choices: [
        "קבצי .tf מקובצים לyunit לוגי לשימוש חוזר — מאפשרים DRY, encapsulation, versioning וsharing של infrastructure patterns",
        "Terraform plugin שמוריד providers",
        "ממשק גרפי לניהול Terraform plans",
        "Module = workspace נפרד ב-Terraform Cloud"
      ],
      explanation: "Module structure: modules/vpc/main.tf + variables.tf + outputs.tf. Usage: module 'prod-vpc' { source = './modules/vpc'; cidr = '10.0.0.0/16'; azs = ['us-east-1a', 'us-east-1b'] }. Terraform Registry: hashicorp/vpc/aws — modules מוכנים מהcommunity. version = '~> 5.0' לpin version. outputs.tf: output 'vpc_id' { value = aws_vpc.main.id } → module.prod-vpc.vpc_id במשאבים אחרים. DRY: same module לdev/staging/prod עם variables שונים."
    }
  ],

  208: [
    {
      q: "מה ההבדל בין RED method לבין USE method בmonitoring?",
      correct: "RED (Rate/Errors/Duration) למדידת services, USE (Utilization/Saturation/Errors) למדידת resources",
      choices: [
        "RED (Rate/Errors/Duration) למדידת services, USE (Utilization/Saturation/Errors) למדידת resources",
        "RED לbackend, USE לfrontend",
        "USE לKubernetes, RED לVM",
        "שניהם מדדים זהים עם שמות שונים"
      ],
      explanation: "RED שואל: כמה requests לשנייה? כמה נכשלים? כמה זמן לוקח? — מתאים לmicroservices ולAPIs. USE שואל: כמה CPU/Memory בשימוש? האם יש queue buildup? יש errors בhardware? — מתאים לinfrastructure (servers, disks, network). Brendan Gregg (Netflix) פיתח את USE method."
    },
    {
      q: "מה עושה הפקודה histogram_quantile(0.99, ...) ב-PromQL?",
      correct: "מחשבת את הpercentile ה-99 של הlatency — ה-latency שמתחתיו 99% מהrequests",
      choices: [
        "מחשבת את הpercentile ה-99 של הlatency — ה-latency שמתחתיו 99% מהrequests",
        "מחשבת ממוצע של 99 הנקודות האחרונות",
        "מציגה את 99% מה-metrics ללא הoutliers",
        "מגדירה alert אם הlatency עולה על 99ms"
      ],
      explanation: "histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m])) = P99 latency. פירוש: 99% מהrequests הסתיימו בזמן הזה או פחות. ה-1% הגרועים ביותר = הזנב. SLOs בגוגל מוגדרים בP99 כי ממוצע מסתיר latency spikes. rate() קודם על הbucket = חשוב לחישוב נכון."
    },
    {
      q: "מה ה-pull model של Prometheus לעומת push model?",
      correct: "Prometheus scrapes metrics מservices בעצמו (pull), לעומת Graphite/StatsD שservices דוחפים אליהם (push)",
      choices: [
        "Prometheus scrapes metrics מservices בעצמו (pull), לעומת Graphite/StatsD שservices דוחפים אליהם (push)",
        "pull = real-time, push = batch",
        "pull מהיר יותר כי לא צריך network",
        "push model אבטחתי יותר"
      ],
      explanation: "Prometheus pull: מגדיר scrape_configs עם targets, Prometheus שולח GET /metrics כל 15s. יתרון: Prometheus שולט מי נסרק, קל לhealthcheck (אם scrape נכשל = service down). חיסרון: services חייבים לחשוף /metrics endpoint. Pushgateway קיים לjobs קצרים שלא חיים מספיק לscrape."
    },
        {
      q: "מה PromQL query שמחשב request rate ב-5 דקות האחרונות?",
      correct: "rate(http_requests_total[5m]) — מחשב שיעור שינוי per-second של counter בחלון זמן של 5 דקות",
      choices: [
        "rate(http_requests_total[5m]) — מחשב שיעור שינוי per-second של counter בחלון זמן של 5 דקות",
        "avg(http_requests_total, 5m)",
        "count(http_requests[5m])",
        "sum(requests) over 5m"
      ],
      explanation: "rate() vs irate(): rate([5m]) = average rate over window (stable, לalerts). irate([5m]) = instant rate (2 last samples, volatile, לgraphs). increase(counter[1h]) = עליה מוחלטת בשעה. sum(rate(http_requests_total[5m])) by (status_code): breakdown לפי status. avg_over_time(gauge[1h]): ממוצע של gauge בשעה. histogram_quantile(0.99, rate(request_duration_bucket[5m])): P99 latency. החוק: רק rate() על counters (לא gauges)."
    },
        {
      q: "מה RED Method ב-SRE ומה מדדים בודקים?",
      correct: "Rate (בקשות/שנייה), Errors (שיעור שגיאות), Duration (latency) — שלושת המדדים הבסיסיים לבריאות שירות",
      choices: [
        "Rate (בקשות/שנייה), Errors (שיעור שגיאות), Duration (latency) — שלושת המדדים הבסיסיים לבריאות שירות",
        "Reliability, Efficiency, Durability",
        "Requests, Errors, Downtime",
        "Response time, Error budget, Deployment frequency"
      ],
      explanation: "RED Method (Tom Wilkie, Weave Works) לmicroservices: Rate = rate(requests_total[1m]). Error = rate(requests_total{status='error'}[1m]) / rate(requests_total[1m]). Duration = histogram_quantile(0.95, rate(request_duration_bucket[1m])). USE Method (Brendan Gregg) לresources: Utilization (CPU%), Saturation (queue depth), Errors. RED = user perspective, USE = resource perspective. Golden Signals (Google SRE Book): Latency, Traffic, Errors, Saturation (RED + Saturation)."
    },
        {
      q: "מה ההבדל בין Grafana Dashboard לבין Grafana Alert?",
      correct: "Dashboard: ויזואליזציה של metrics לצפייה; Alert: rule שמוערך periodically ושולח notification כשthreshold מופר",
      choices: [
        "Dashboard: ויזואליזציה של metrics לצפייה; Alert: rule שמוערך periodically ושולח notification כשthreshold מופר",
        "Dashboard לprod; Alert לdev/staging",
        "Alert הוא dashboard מיוחד עם רקע אדום",
        "Grafana עושה רק visualization — Alerting דרך Prometheus בלבד"
      ],
      explanation: "Grafana Alerting (Unified Alerting): Alert Rule → Evaluation Group (כל 1m) → Contact Point (Slack/PagerDuty/Email) → Notification Policy. Alert states: Normal, Pending (threshold הופר אך לא עבר for duration), Firing, No Data, Error. Alert Rule בPromQL: avg_over_time(up[5m]) < 0.5 (שירות down >50% מהזמן ב-5 דקות). Alertmanager: deduplication, grouping, routing, silencing. Runbook URL: קישור לprocedure לאחר alert."
    }
  ],

  209: [
    {
      q: "מה drift detection ב-ArgoCD?",
      correct: "זיהוי הבדל בין state ב-Git לבין state הפועל בcluster — ArgoCD מתקן אוטומטית אם selfHeal מופעל",
      choices: [
        "זיהוי הבדל בין state ב-Git לבין state הפועל בcluster — ArgoCD מתקן אוטומטית אם selfHeal מופעל",
        "ניטור של שינויי network בין pods",
        "גילוי configuration drift בין staging לproduction",
        "בדיקה שה-Git repo לא נמחק"
      ],
      explanation: "Drift = מישהו עשה kubectl edit/patch ישירות על cluster מחוץ לGit. ArgoCD מזהה את ה-diff ומציג status=OutOfSync. עם syncPolicy.automated.selfHeal=true — ArgoCD מחזיר לstate ב-Git אוטומטית תוך דקות. זה הלב של GitOps: Git הוא מקור האמת היחיד."
    },
    {
      q: "מדוע GitOps pull model בטוח יותר מ-push deployment?",
      correct: "בpull model, רק ה-controller בcluster צריך cluster access — ה-CI pipeline לא צריך kubectl credentials",
      choices: [
        "בpull model, רק ה-controller בcluster צריך cluster access — ה-CI pipeline לא צריך kubectl credentials",
        "pull model מהיר יותר כי אין network latency",
        "push model לא עובד עם Kubernetes",
        "pull model מצפין את הmanifests אוטומטית"
      ],
      explanation: "בpush deployment: ל-CI pipeline (GitHub Actions, Jenkins) יש kubeconfig עם cluster admin — זה attack surface ענקי. אם CI נפרץ = cluster נפרץ. בGitOps pull: ArgoCD רץ בתוך ה-cluster, מסתכל על Git מבפנים. שום entity חיצוני לא צריך cluster credentials. זה security posture הרבה יותר טוב."
    },
    {
      q: "מה הפתרון המועדף לניהול secrets ב-GitOps?",
      correct: "Sealed Secrets (מוצפן בpublic key) או External Secrets Operator (מושך מ-Vault/AWS) — לא מאחסנים plaintext בGit",
      choices: [
        "Sealed Secrets (מוצפן בpublic key) או External Secrets Operator (מושך מ-Vault/AWS) — לא מאחסנים plaintext בGit",
        "מאחסנים secrets ב-Git עם הרשאות read-only בלבד",
        "מצפינים secrets בbase64 לפני push לGit",
        "ArgoCD מנהל secrets אוטומטית ללא כלים נוספים"
      ],
      explanation: "base64 הוא לא הצפנה! Sealed Secrets: kubeseal מצפין עם public key של ה-cluster — רק ה-cluster יכול לפענח, בטוח לsave בGit. External Secrets: רץ בcluster, מושך מ-Vault/AWS Secrets Manager/GCP Secret Manager, יוצר Kubernetes Secret מקומי. שניהם פתרונות לגיטימיים. לעולם לא plaintext passwords ב-Git."
    },
        {
      q: "מה ArgoCD Application manifest ומה syncPolicy.automated?",
      correct: "Application CRD שמגדיר source (Git repo + path), destination (cluster + namespace), ו-syncPolicy; automated = ArgoCD sync אוטומטי עם כל שינוי ב-Git",
      choices: [
        "Application CRD שמגדיר source (Git repo + path), destination (cluster + namespace), ו-syncPolicy; automated = ArgoCD sync אוטומטי עם כל שינוי ב-Git",
        "Kubernetes Deployment שמריץ ArgoCD server",
        "Helm chart מיוחד לdeploy applications",
        "CI/CD pipeline YAML ב-.github/workflows/"
      ],
      explanation: "Application manifest: apiVersion: argoproj.io/v1alpha1; kind: Application; spec.source: repoURL + path + targetRevision (branch/tag/commit); spec.destination: server (cluster API URL) + namespace; syncPolicy.automated: prune: true (מוחק resources שנמחקו מGit), selfHeal: true (תוקן אם מישהו שינה ישירות בcluster). ArgoCD poll Git כל 3 דקות ברירת מחדל, webhook = מיידי. App of Apps pattern: Application שמנהלת Applications אחרות."
    },
        {
      q: "מה ההבדל בין Argo Rollouts Progressive Delivery לבין Rolling Update רגיל?",
      correct: "Rolling Update מחליף pods בהדרגה ללא בקרה; Argo Rollouts מאפשר Canary (% traffic לגרסה חדשה) ו-Blue/Green עם analysis אוטומטי ו-rollback",
      choices: [
        "Rolling Update מחליף pods בהדרגה ללא בקרה; Argo Rollouts מאפשר Canary (% traffic לגרסה חדשה) ו-Blue/Green עם analysis אוטומטי ו-rollback",
        "Argo Rollouts = Argo CD עם תכונות נוספות בלבד",
        "Canary deployment = deploy לcanary server בלבד",
        "Progressive Delivery אפשרי רק עם Istio service mesh"
      ],
      explanation: "Rolling Update: maxSurge=1, maxUnavailable=0 → pods מוחלפים אחד-אחד, אין visibility לmetrics. Argo Rollouts Canary: steps: setWeight 10% → pause 5m → analysis (error rate < 1%?) → setWeight 50% → analysis → setWeight 100%. אם analysis נכשל → automatic rollback! Blue/Green: שתי סביבות מלאות, traffic switch רגעי. AnalysisTemplate: query Prometheus, Datadog, CloudWatch לvalidation אוטומטי."
    },
        {
      q: "מה Fluxcd ואיך שונה מArgoCD?",
      correct: "שניהם GitOps controllers; Flux: CLI-centric, operator per component (source-controller, kustomize-controller); Argo: UI חזקה, Application CRD, monolithic approach",
      choices: [
        "שניהם GitOps controllers; Flux: CLI-centric, operator per component (source-controller, kustomize-controller); Argo: UI חזקה, Application CRD, monolithic approach",
        "Flux לAWS בלבד; ArgoCD לGCP ו-Azure",
        "FluxCD מיושן — ArgoCD החליף אותו לחלוטין",
        "Flux לsmall clusters; ArgoCD לenterprise בלבד"
      ],
      explanation: "Flux v2 (CNCF Graduated): GitRepository CR → מצביע על repo; Kustomization CR → מיישם path. Multi-tenancy טוב. Notification Controller לSlack/Teams. Image Automation: מעדכן Git אוטומטית עם tag חדש מRegistry! ArgoCD: UI מנצחת לvisibility, ApplicationSet לmulti-cluster/multi-app patterns. App of Apps. RBAC מובנה. בחירה: Argo אם רוצים UI ו-visibility. Flux אם GitOps-first, CLI-driven, multi-tenant setup. שניהם CNCF projects."
    },
    {
      q: "מה GitOps ואיך שונה מ-CI/CD רגיל?",
      correct: "GitOps: Git הוא source of truth לinfrastructure. שינוי ב-Git → agent (ArgoCD) מזהה drift ו-syncs. CI/CD רגיל: pipeline דוחפת לcluster",
      choices: [
        "GitOps: Git הוא source of truth לinfrastructure. שינוי ב-Git → agent מזהה drift ו-syncs. CI/CD רגיל: pipeline דוחפת לcluster",
        "GitOps = CI/CD עם Git בלבד",
        "GitOps ו-CI/CD זהים",
        "GitOps עובד רק עם Kubernetes"
      ],
      explanation: "GitOps principles (Weaveworks): 1) Declarative: כל infra כ-code. 2) Versioned: Git כsingle source of truth. 3) Automatic: approved changes מיושמות אוטומטית. 4) Continuously reconciled: agent מזהה ומתקן drift. Pull vs Push: CI/CD pushes → cluster. GitOps agent pulls from Git. Benefits: audit log (git log), rollback (git revert), consistency."
    },
    {
      q: "מה ArgoCD Application ואיך מגדירים sync policy?",
      correct: "ArgoCD Application: מגדיר source (Git repo + path) + destination (K8s cluster + namespace). syncPolicy: automated = auto-sync ללא אישור",
      choices: [
        "ArgoCD Application: מגדיר source (Git repo + path) + destination (K8s cluster + namespace). syncPolicy: automated = auto-sync ללא אישור",
        "ArgoCD Application = Kubernetes Deployment",
        "sync policy = Git branch policy",
        "ArgoCD רק ל-Helm charts"
      ],
      explanation: "ArgoCD Application YAML: apiVersion: argoproj.io/v1alpha1, kind: Application. spec.source: repoURL, targetRevision (branch/tag), path. spec.destination: server (cluster URL), namespace. spec.syncPolicy: automated (prune: true, selfHeal: true). selfHeal: אם מישהו שינה ב-cluster ידנית → ArgoCD מחזיר למצב Git. App of Apps: ArgoCD Application שמנהל ArgoCD Applications אחרים."
    },
    {
      q: "מה Drift Detection ב-GitOps?",
      correct: "Drift: הבדל בין מצב Git (desired) למצב cluster (actual). ArgoCD מגלה drift ומציג OutOfSync. selfHeal: מתקן אוטומטית",
      choices: [
        "Drift: הבדל בין מצב Git (desired) למצב cluster (actual). ArgoCD מגלה drift ומציג OutOfSync. selfHeal: מתקן אוטומטית",
        "Drift = Git conflict בין branches",
        "Drift Detection = K8s health check",
        "ArgoCD לא מזהה drift — רק deploys"
      ],
      explanation: "Reconciliation loop: כל 3 דקות ArgoCD משווה Git state לK8s state. Synced = זהה. OutOfSync = drift. מקורות drift: kubectl apply ידני, Helm upgrade, autoscaler שינה replicas. Prune: מחיקת resources שנמחקו ב-Git. Ignorance: syncPolicy.automated.ignoreDifferences להתעלם מfields מסוימים (כמו replicas שHPA מנהל)."
    },
    {
      q: "כיצד מנהלים secrets ב-GitOps ללא חשיפה ב-Git?",
      correct: "Sealed Secrets: מצפין secrets ב-Git (ניתן לפרק רק ב-cluster). External Secrets Operator: מושך מ-Vault/AWS SSM/GCP Secret Manager",
      choices: [
        "Sealed Secrets: מצפין secrets ב-Git. External Secrets Operator: מושך מ-Vault/AWS SSM/GCP Secret Manager",
        "שומרים secrets ב-Git בtext רגיל",
        "Kubernetes Secrets מספיק — מוצפנים ב-etcd",
        "ArgoCD מצפין secrets אוטומטית"
      ],
      explanation: "בעיה: Kubernetes Secrets = base64 בלבד (לא encryption). Git = ציבורי = לא לsecrets. Sealed Secrets (Bitnami): kubeseal מצפין עם public key של cluster. רק controller בcluster יכול לפרק. External Secrets: ESO sync מ-AWS Secrets Manager, HashiCorp Vault, GCP Secret Manager. Sops + Age/GPG: מצפין קבצים YAML בGit. Vault Agent Injector: inject secrets ל-Pod environment."
    },
    {
      q: "מה ProgKessive Delivery ב-GitOps context?",
      correct: "Argo Rollouts / Flagger: canary deployments, blue/green, A/B testing — שינוי מדורג עם rollback אוטומטי אם metrics נכשלים",
      choices: [
        "Argo Rollouts / Flagger: canary deployments, blue/green, A/B testing — שינוי מדורג עם rollback אוטומטי אם metrics נכשלים",
        "Progressive Delivery = CI/CD pipeline stages בלבד",
        "GitOps לא תומך ב-canary deployments",
        "Progressive = deploying לmost servers ראשון"
      ],
      explanation: "Argo Rollouts: CRD שמחליף Deployment. Strategy: canary (5% → 20% → 50% → 100%), blueGreen (preview + active). Analysis: Prometheus queries. אם error rate > 5% → automatic rollback. Flagger: Istio/NGINX integration. Feature Flags (LaunchDarkly, Unleash): הפרדת deployment מrelease. Ship dark = deploy without enabling feature."
    }
  ],

  306: [
    {
      q: "מה Forward Secrecy ב-TLS ולמה זה חשוב?",
      correct: "גנן session key חדש לכל session (ECDHE) — גנב private key לא יוכל לפענח שיחות עבר",
      choices: [
        "גנן session key חדש לכל session (ECDHE) — גנב private key לא יוכל לפענח שיחות עבר",
        "הצפנה של TLS קדימה לgenerations עתידיים",
        "TLS 1.3 מצפין גם headers של HTTP",
        "Forward Secrecy = TLS עם certificate pinning"
      ],
      explanation: "ב-RSA key exchange (TLS 1.2): הclient מצפין session key בpublic key של השרת. תוקף שהקליט traffic ב-2020 וגנב private key ב-2024 — יכול לפענח את ה-2020 traffic. ב-ECDHE (TLS 1.3 חובה): מפתחות ephemeral נוצרים per-session ונמחקים. אין מפתח ישן לgraceful. 'Ephemeral' = key חי רק לאותה session."
    },
    {
      q: "למה RC4 ו-SHA-1 הוסרו מ-TLS 1.3?",
      correct: "RC4 הוכח cryptographically broken ב-2013, SHA-1 collision הוכח ב-2017 (Google SHAttered)",
      choices: [
        "RC4 הוכח cryptographically broken ב-2013, SHA-1 collision הוכח ב-2017 (Google SHAttered)",
        "RC4 ו-SHA-1 איטיים מדי לhardware מודרני",
        "הוסרו רק כדי לפשט את הstandard, לא מסיבות אבטחה",
        "RC4 תומך רק ב-IPv4"
      ],
      explanation: "RC4: AlFardan et al. 2013 הראו biases סטטיסטיים שמאפשרים לפענח HTTPS cookies אחרי ~2^26 connections. BEAST attack (2011) ניצל CBC ב-TLS 1.0. SHA-1: Google SHAttered 2017 — נמצאו שני PDF files שונים עם אותו SHA-1 hash, עם GPU cluster בעלות $110K. TLS 1.3 אפשר רק AEAD ciphers (AES-GCM, ChaCha20-Poly1305)."
    },
    {
      q: "מה ההבדל ב-RTT בין TLS 1.2 לTLS 1.3?",
      correct: "TLS 1.2 דורש 2-RTT לפני application data, TLS 1.3 דורש 1-RTT (ו-0-RTT לsession resumption)",
      choices: [
        "TLS 1.2 דורש 2-RTT לפני application data, TLS 1.3 דורש 1-RTT (ו-0-RTT לsession resumption)",
        "TLS 1.2 מהיר יותר כי יש לו יותר cipher options",
        "שניהם דורשים 2-RTT, ההבדל הוא בהצפנה בלבד",
        "TLS 1.3 תמיד 0-RTT"
      ],
      explanation: "TLS 1.2: ClientHello → ServerHello+Cert → KeyExchange → Finished → Data = 2 full RTT. TLS 1.3: הclient שולח KeyShare כבר בClientHello הראשון. השרת עונה עם ServerHello+keys+Finished = 1 RTT. 0-RTT (Early Data): בsession resumption, הclient שולח data בround trip הראשון. אבל 0-RTT vulnerable לreplay attacks — להשתמש רק בGET."
    },
        {
      q: "מה ההבדל בין TLS 1.2 לבין TLS 1.3 ב-handshake efficiency?",
      correct: "TLS 1.2: 2-RTT handshake לפני שליחת data; TLS 1.3: 1-RTT (עם 0-RTT לsession resumption) — הסיר cipher suites חלשות",
      choices: [
        "TLS 1.2: 2-RTT handshake לפני שליחת data; TLS 1.3: 1-RTT (עם 0-RTT לsession resumption) — הסיר cipher suites חלשות",
        "TLS 1.3 מהיר פי 10 בגלל הצפנה חזקה יותר",
        "TLS 1.2 תומך ב-0-RTT; TLS 1.3 רק 1-RTT",
        "אין הבדל ב-RTT — רק crypto algorithms שונים"
      ],
      explanation: "TLS 1.2 Handshake: SYN/ACK (1 RTT) → ClientHello/ServerHello/Certificate/ServerHelloDone (1 RTT) → ClientKeyExchange/ChangeCipherSpec (1 RTT) = 2 RTTs לפני HTTP. TLS 1.3: ServerHello כולל key_share מיד (ECDHE params) → לקוח יכול לשלוח Finished + HTTP request כבר ב-1 RTT. הוסר: RSA key exchange, DH static, RC4, 3DES, MD5/SHA-1. Mandatory: ECDHE forward secrecy. Encrypted extensions: Certificate מוצפן ב-TLS 1.3 (לא visible)."
    },
        {
      q: "מה ECDHE ב-TLS ואיך מאפשר Perfect Forward Secrecy?",
      correct: "Elliptic Curve Diffie-Hellman Ephemeral: שני הצדדים מייצרים key pairs זמניים, מחשבים shared secret, ומיד מוחקים private keys — ניצול future = אין ערך לold traffic",
      choices: [
        "Elliptic Curve Diffie-Hellman Ephemeral: שני הצדדים מייצרים key pairs זמניים, מחשבים shared secret, ומיד מוחקים private keys — ניצול future = אין ערך לold traffic",
        "ECDHE = RSA עם elliptic curve parameters",
        "Ephemeral = ה-key מוצפן בsession cookie",
        "ECDHE מאפשר authentication ללא certificates"
      ],
      explanation: "Diffie-Hellman: שני צדדים חולקים public numbers g^a mod p ו-g^b mod p → מחשבים g^ab mod p (shared secret) ללא שליחת a או b. Elliptic Curve: g^a → נקודת עקומה אליפטית — יעיל יותר (256-bit EC = 3072-bit RSA security). Ephemeral: מפתחות חדשים לכל session, נמחקים אחרי. גם אם תוקף שבר את ה-EC discrete log בעוד 10 שנים — sessions ישנות לא מפוענחות. Curve25519 (X25519) = curve הנפוצה ב-TLS 1.3."
    },
        {
      q: "מה Certificate Transparency (CT) ואיך מגן מפני rogue certificates?",
      correct: "CT Logs: append-only public logs של כל TLS certificates שהונפקו; browsers מאמתים שcert נכלל ב-CT log — CA סורר לא יכול להנפיק certificate בסתר",
      choices: [
        "CT Logs: append-only public logs של כל TLS certificates שהונפקו; browsers מאמתים שcert נכלל ב-CT log — CA סורר לא יכול להנפיק certificate בסתר",
        "Certificate Transparency = certificate pinning בdomain",
        "CT הוא שם אחר ל-HSTS preloading",
        "CT logs מוצפנים ונגישים רק לbrowsers"
      ],
      explanation: "בעיה: DigiNotar 2011 הנפיקה wildcard cert של *.google.com ל-MITM by Iranian government. CT (RFC 6962): כל CA חייב לsubmit כל cert לCT logs (Google Argon, Cloudflare Nimbus). Signed Certificate Timestamp (SCT): proof שcert הוגש. Browsers (Chrome 2018+): דוחים certs ללא valid SCT. domain owner יכול לmonitor CT logs לcerts unauthorised לdomain שלו (crt.sh). Merkle tree structure = tamper-evident log."
    }
  ],

  307: [
    {
      q: "כיצד Anycast מנתב traffic לPOP הקרוב ביותר?",
      correct: "אותו IP prefix מפורסם מ-BGP ממקומות רבים — BGP בוחר shortest AS path = הPOP הקרוב",
      choices: [
        "אותו IP prefix מפורסם מ-BGP ממקומות רבים — BGP בוחר shortest AS path = הPOP הקרוב",
        "DNS מחזיר IP שונה לפי geolocation",
        "הlb מפנה לPOP הקרוב לפי latency",
        "HTTP redirect לURL של הPOP הקרוב"
      ],
      explanation: "Anycast: Cloudflare מפרסמת 1.1.1.0/24 ב-BGP מ-300+ POPs. כשrouter בתל אביב מחפש 1.1.1.1 — הוא רואה כמה paths, בוחר הקצר ביותר (AS hops) = POP בתל אביב. שימוש: DNS root servers, CDN, DDoS mitigation. לא מתאים לTCP sessions ארוכים כי connection עלול לנדוד בין POPs."
    },
    {
      q: "מה BGP hijacking וכיצד RPKI מונע אותו?",
      correct: "BGP hijacking = AS מכריז על prefix שלא שייך לו. RPKI = ROAs חתומות cryptographically שמאמתות מי מורשה להכריז",
      choices: [
        "BGP hijacking = AS מכריז על prefix שלא שייך לו. RPKI = ROAs חתומות cryptographically שמאמתות מי מורשה להכריז",
        "BGP hijacking = DDoS attack על routers. RPKI = firewall לBGP",
        "BGP hijacking = man-in-the-middle ב-TCP. RPKI = TLS לBGP",
        "BGP hijacking רלוונטי רק לIPv6"
      ],
      explanation: "Pakistan Telecom 2008: הכריזו על 208.65.153.0/24 (YouTube) — כל האינטרנט שלח traffic ל-Pakistan. BGP trust-based = כל AS יכול להכריז על כל prefix. RPKI: RIRs (RIPE, ARIN, APNIC) מפרסמים ROA (Route Origin Authorization) חתומה — 'AS13335 מורשה להכריז על 1.1.1.0/24'. Routers שמסננים לפי RPKI דוחים invalid routes. 40% מה-routes מוגנים נכון ל-2024."
    },
    {
      q: "מדוע Anycast מצוין להגנה מDDoS?",
      correct: "Attack traffic מחולק בין כל ה-POPs בעולם — כל POP סופג חלק קטן במקום שכולו יגיע לנקודה אחת",
      choices: [
        "Attack traffic מחולק בין כל ה-POPs בעולם — כל POP סופג חלק קטן במקום שכולו יגיע לנקודה אחת",
        "Anycast מצפין traffic ולכן DDoS לא עובד",
        "Anycast מסנן traffic זדוני לפי source IP",
        "Anycast רלוונטי רק לUDP floods, לא לTCP SYN floods"
      ],
      explanation: "Cloudflare עם 300 POPs = 300 נקודות קליטה. DDoS של 2Tbps מחולק ל-~6.7Gbps לכל POP — ניתן לספוג בקלות. ב-unicast, כל ה-2Tbps היה פוגע בנקודה אחת. בנוסף, Anycast BGP failover אוטומטי: POP שנפל תחת load → מסיר את ה-prefix מBGP → traffic עובר לPOP הבא הקרוב. זו הסיבה ש-Cloudflare, Akamai, Amazon CloudFront — כולם Anycast."
    },
        {
      q: "מה RPKI ואיך ROA מונע BGP prefix hijacking?",
      correct: "RPKI (Resource PKI): מסגרת PKI שמאפשרת ל-IP prefix owner לחתום ROA המצהיר איזה AS מורשה להכריז prefix — routers עם RPKI מסננים Invalid announcements",
      choices: [
        "RPKI (Resource PKI): מסגרת PKI שמאפשרת ל-IP prefix owner לחתום ROA המצהיר איזה AS מורשה להכריז prefix — routers עם RPKI מסננים Invalid announcements",
        "RPKI = encryption של BGP UPDATE messages",
        "RPKI = firewall rules שחוסמות BGP hijacking",
        "ROA = Registry of Autonomous systems לניהול AS numbers"
      ],
      explanation: "ROA (Route Origin Authorization): IP prefix owner (192.0.2.0/24) חותם עם private key: 'AS64501 מורשה להכריז 192.0.2.0/24 עד maxLength /24'. Stored ב-RPKI repositories של RIRs (ARIN, RIPE). Router עם RTR (RPKI-to-Router protocol): מוריד ROAs, מעריך כל BGP announcement: Valid (prefix+AS תואמים ROA), Invalid (AS לא בROA), NotFound (אין ROA). Route Origin Validation (ROV): drop Invalid routes. adoption 2024: ~50% של prefixes יש ROA."
    },
        {
      q: "מה BGPsec ואיך שונה מRPKI?",
      correct: "RPKI מוודא את origin AS בלבד; BGPsec חותם כל hop בAS Path — מגן גם מ-path manipulation לא רק origin hijacking",
      choices: [
        "RPKI מוודא את origin AS בלבד; BGPsec חותם כל hop בAS Path — מגן גם מ-path manipulation לא רק origin hijacking",
        "BGPsec = RPKI 2.0 — ההבדל רק בגרסה",
        "RPKI לIPv6; BGPsec לIPv4",
        "BGPsec מוצפן; RPKI רק signed"
      ],
      explanation: "RPKI/ROA: validates 'AS64501 is legitimate originator of 192.0.2.0/24'. אבל: AS Path: 64501→64502→64503. AS64502 יכול לשנות path! BGPsec (RFC 8205): כל AS שמעביר UPDATE מוסיף חתימה קריפטוגרפית. Receiver מאמת שכל hop בAS path חתם. מגן מ-path manipulation attacks. חסרון: performance overhead משמעותי, כל router צריך לחשב signatures. Adoption: מאוד נמוכה בpractice בגלל complexity. RPKI/ROV = פרקטי ונפוץ הרבה יותר."
    },
        {
      q: "מה incidentia Cloudflare 2019 ב-BGP routing ומה הלקח?",
      correct: "MainOne (ניגריה) דרכה Verizon הכריזה paths חשובים → traffic ממשתמשי Cloudflare עבר דרך AS קטן בלתי מסוגל — קריסה 1.5 שעות; לקח: RPKI filtering חובה אצל large providers",
      choices: [
        "MainOne (ניגריה) דרכה Verizon הכריזה paths חשובים → traffic ממשתמשי Cloudflare עבר דרך AS קטן בלתי מסוגל — קריסה 1.5 שעות; לקח: RPKI filtering חובה אצל large providers",
        "Cloudflare עצמה גרמה לhijack על ידי שגיאת routing config",
        "BGP attack ממוקד על Cloudflare DNS servers בלבד",
        "Cloudflare 2019 = פרסום accidental של IPv6 prefixes"
      ],
      explanation: "2019-06-24: DQE Communications (PA) שלחה routes שגויים לMainOne (Nigeria) שלחה לVerizon. Verizon (AS701) = Tier-1 — לא filter! הכריזה ל-internet. Cloudflare prefixes הוסטו דרך path ארוך ועמוס. DQE קיבלה traffic ממשתמשים עולמיים לCFLR → collapse. RPKI Invalid היה אמור לחסום. AWS, Linode גם הושפעו. Cloudflare פרסמה: 'Verizon צריכה לfilter את לקוחותיה.' IRR (Internet Routing Registry) + RPKI = שכבות הגנה שהיו מונעות זאת."
    }
  ],

  308: [
    {
      q: "מה veth pair ב-Linux networking?",
      correct: "זוג virtual ethernet interfaces מחוברים — מה שנכנס לאחד יוצא מהשני, משמש לחיבור container לhost",
      choices: [
        "זוג virtual ethernet interfaces מחוברים — מה שנכנס לאחד יוצא מהשני, משמש לחיבור container לhost",
        "virtual ethernet שמאפשר מספר VLANs על interface אחד",
        "חיבור בין שני hosts פיזיים",
        "שם אחר לloopback interface"
      ],
      explanation: "veth pair = כבל וירטואלי. Docker יוצר veth pair: קצה אחד (eth0) בnamespace של הcontainer, קצה שני (vethXXXXXX) בhost namespace ומחובר לbridge docker0. packet שנשלח מcontainer → eth0 → veth pair → vethXXX בhost → docker0 bridge → routing. ip link add veth0 type veth peer name veth1 יוצר את ה-pair."
    },
    {
      q: "מה ההבדל בין Flannel לCalico כ-CNI plugins?",
      correct: "Flannel משתמש ב-VXLAN overlay (encapsulation), Calico משתמש ב-BGP routing (L3, ללא encapsulation, מהיר יותר)",
      choices: [
        "Flannel משתמש ב-VXLAN overlay (encapsulation), Calico משתמש ב-BGP routing (L3, ללא encapsulation, מהיר יותר)",
        "Flannel לpublic cloud, Calico לon-premise בלבד",
        "Calico ישן יותר ולכן פחות מומלץ",
        "שניהם זהים, ההבדל הוא בממשק הניהול בלבד"
      ],
      explanation: "Flannel VXLAN: packets בין nodes מוצפנים ב-UDP header (encapsulation). פשוט להתקנה אבל overhead. Calico BGP: כל Kubernetes node הוא BGP router שמפרסם את ה-podCIDR שלו. Packets עוברים ב-L3 ישירות ללא encapsulation = ביצועים גבוהים יותר. Calico מוסיף Network Policy. Cilium (eBPF): מחליף iptables, O(1) lookups, L7 visibility."
    },
    {
      q: "כיצד pod-to-pod communication עובד בין שני nodes שונים ב-Kubernetes?",
      correct: "תלוי ב-CNI: Flannel = VXLAN tunnel, Calico = BGP routes ישירות, Cilium = eBPF forwarding",
      choices: [
        "תלוי ב-CNI: Flannel = VXLAN tunnel, Calico = BGP routes ישירות, Cilium = eBPF forwarding",
        "Kubernetes מספק NAT אוטומטי בין nodes",
        "pods חייבים להיות באותו node לתקשורת ישירה",
        "תמיד עובר דרך kube-proxy על ה-master node"
      ],
      explanation: "Kubernetes CNI contract: כל pod יכול לדבר עם כל pod ב-pod IP שלו, ללא NAT. אותו node = veth pair → bridge → L2 forwarding מהיר. בין nodes: CNI מממש. Flannel: מוסיף VXLAN header (UDP 8472) → underlay network → מסיר header ב-node היעד. Calico: node1 יודע ש-10.0.2.0/24 נמצא ב-node2 דרך BGP → route ישיר ב-IP layer. kube-proxy מנהל Service IPs, לא pod-to-pod."
    }
,
    {
      q: "מה network namespace ב-Linux ואיך Docker משתמש בו?",
      correct: "Network namespace מבודד stack רשת שלם (interfaces, routing, iptables); כל Docker container מקבל namespace נפרד — containers לא רואים את interface של אחד מהשני",
      choices: [
        "Network namespace מבודד stack רשת שלם (interfaces, routing, iptables); כל Docker container מקבל namespace נפרד — containers לא רואים את interface של אחד מהשני",
        "Network namespace = VLAN ב-Docker",
        "Network namespace מגביל bandwidth לcontainer",
        "כל containers בhost משתפים network namespace"
      ],
      explanation: "Linux Namespaces: network, PID, mount, UTS, IPC, user, cgroup. Network namespace: ip netns add mynet → namespace חדש עם lo בלבד. ip link add veth0 type veth peer name veth1 → pair. ip link set veth1 netns mynet → veth1 עובר לnamespace. ip netns exec mynet ip addr show → רואה רק veth1 ו-lo. Docker: בkubernetes — כל pod = namespace אחד (containers בpod משתפים network namespace → localhost!)."
    },
    {
      q: "מה ההבדל בין bridge network mode לבין host network mode ב-Docker?",
      correct: "bridge: container מקבל namespace נפרד, IP private מdocker0 bridge, NAT לחוץ; host: container משתף network namespace של host — ביצועים גבוהים אך אין בידוד",
      choices: [
        "bridge: container מקבל namespace נפרד, IP private מdocker0 bridge, NAT לחוץ; host: container משתף network namespace של host — ביצועים גבוהים אך אין בידוד",
        "bridge לproduction; host לdevelopment בלבד",
        "host mode מהיר פי 10 — תמיד להשתמש בו",
        "bridge ו-host זהים ב-Kubernetes"
      ],
      explanation: "Bridge (default): docker0 bridge IP 172.17.0.1. container מקבל 172.17.0.2. docker run -p 8080:80: iptables DNAT rule. Host mode: docker run --network host nginx → nginx שומע על port 80 של host ישירות, ללא NAT. ביצועים טובים (אין overhead). סיכון: container רואה כל interfaces של host, port conflicts. None: docker run --network none → container ללא network (air-gapped). Macvlan: container מקבל MAC address ישיר ב-physical network."
    },
    {
      q: "מה תפקיד kube-proxy ב-Kubernetes networking?",
      correct: "מנהל iptables/IPVS rules ב-כל node כדי לנתב traffic מ-Service ClusterIP לpods הרלוונטיים",
      choices: [
        "מנהל iptables/IPVS rules ב-כל node כדי לנתב traffic מ-Service ClusterIP לpods הרלוונטיים",
        "proxy בין internet לcluster לאבטחה",
        "מנהל DNS resolution עבור services",
        "מממש NetworkPolicy לסינון traffic בין pods"
      ],
      explanation: "Service ClusterIP (e.g. 10.96.0.1) לא קיימת כ-real interface! kube-proxy: מקשיב ל-Kubernetes API, כשService נוצרת → מוסיף iptables rules: DNAT 10.96.0.1:80 → בחר רנדומלי pod מEndpoints. IPVS mode: L4 load balancer kernel module, יעיל יותר מiptables ל-cluster גדול. Cilium יכול להחליף kube-proxy בeBPF: O(1) lookups במקום O(n) iptables rules. CoreDNS עושה DNS resolution (לא kube-proxy)."
    }
    ],
110: [
    {
      q: "מה ההבדל בין SQL Injection לXSS?",
      correct: "SQLi תוקפת את database בצד השרת. XSS מריצה JavaScript בדפדפן של משתמש אחר",
      choices: [
        "SQLi תוקפת את database בצד השרת. XSS מריצה JavaScript בדפדפן של משתמש אחר",
        "SQLi ו-XSS זהות — שתיהן מזריקות SQL",
        "XSS תוקפת database, SQLi תוקפת דפדפן",
        "SQLi מריצה Python, XSS מריצה JavaScript"
      ],
      explanation: "SQL Injection = server-side attack: תוקף מניפולציה על שאילתת SQL ומשיג גישה ל-database. XSS = client-side attack: תוקף מזריק JS שרץ בדפדפן של קורבן אחר. SQLi יעד = data. XSS יעד = session/cookies/user actions."
    },
    {
      q: "מה Prepared Statements ולמה הם מגנים מ-SQLi?",
      correct: "מקמפלים שאילתת SQL לפני הכנסת נתונים — נתונים אינם יכולים לשנות את מבנה השאילתה",
      choices: [
        "מקמפלים שאילתת SQL לפני הכנסת נתונים — נתונים אינם יכולים לשנות את מבנה השאילתה",
        "מצפינים את הnתונים לפני שמירה ב-database",
        "בודקים שאין תווים מיוחדים בinput לפני שמירה",
        "מגבילים את אורך ה-input של המשתמש"
      ],
      explanation: "Prepared Statement: cursor.execute('SELECT * FROM users WHERE name=?', (user_input,)). ה-DB מקמפל '?' placeholder לפני הנתונים. user_input='admin OR 1=1' יישמר כmatch על name='admin OR 1=1' — לא יפרש כ-SQL. String concatenation: f\"WHERE name='{user_input}'\" — מאפשר injection."
    },
    {
      q: "מה Stored XSS ולמה הוא מסוכן יותר מReflected?",
      correct: "Stored XSS נשמר ב-database ורץ על כל visitor לעמוד — Reflected XSS פוגע רק במי שלוחץ על link זדוני",
      choices: [
        "Stored XSS נשמר ב-database ורץ על כל visitor לעמוד — Reflected XSS פוגע רק במי שלוחץ על link זדוני",
        "Stored XSS מסוכן פחות כי נשמר ב-DB ולא בURL",
        "Reflected XSS יותר מסוכן כי הוא בלתי נראה",
        "אין הבדל — שניהם רצים פעם אחת בלבד"
      ],
      explanation: "Reflected: <script> ב-URL → חוזר ב-response ← רץ רק אצל מי שלוחץ על ה-URL. Stored: תוקף כותב <script> בshדה comment → נשמר ב-DB → כל visitor לעמוד מקבל ומריץ. לדוגמה: XSS ב-forum post = כל מי שקורא גנוב session."
    },
    {
      q: "מה HttpOnly Cookie ואיך הוא מגן מXSS?",
      correct: "Cookie שאינו נגיש ל-JavaScript — גם אם יש XSS, document.cookie ריק",
      choices: [
        "Cookie שאינו נגיש ל-JavaScript — גם אם יש XSS, document.cookie ריק",
        "Cookie שנשלח רק ב-HTTPS",
        "Cookie עם expiry קצר לאבטחה",
        "Cookie שמוצפן בצד השרת"
      ],
      explanation: "Set-Cookie: session=xyz; HttpOnly — הדפדפן מסרב לחשוף cookie זה ל-JavaScript. document.cookie לא מכיל אותו. fetch/XMLHttpRequest עדיין שולחים אותו אוטומטית. Secure flag = רק ב-HTTPS. SameSite=Strict = לא נשלח ב-cross-site requests (מגן מ-CSRF)."
    },
    {
      q: "מה UNION-based SQL Injection?",
      correct: "הרצת שאילתת UNION SELECT כדי להוסיף rows מtables אחרות לresult המקורי",
      choices: [
        "הרצת שאילתת UNION SELECT כדי להוסיף rows מtables אחרות לresult המקורי",
        "איחוד database servers זדוניים",
        "הרצת UNION כדי לסגור את החיבור לDB",
        "שימוש ב-UNION לעדכון data בטבלאות"
      ],
      explanation: "UNION SELECT מאחד results משתי שאילתות. ב-SQLi: ' UNION SELECT username,password FROM users-- מוסיף שורות מtable אחרת לresult המקורי. דרישה: אותו מספר עמודות + types תואמים. information_schema.tables מכיל כל שמות הטבלאות ב-DB."
    },
    {
      q: "מה Content-Security-Policy ואיך מגן מXSS?",
      correct: "HTTP header שמגביל מאילו מקורות מותר לטעון JS — חוסם inline scripts ו-JS ממקורות זרים",
      choices: [
        "HTTP header שמגביל מאילו מקורות מותר לטעון JS — חוסם inline scripts ו-JS ממקורות זרים",
        "סינון XSS בצד השרת לפני שמירה",
        "הצפנת content בין client לserver",
        "ביטול גישה ל-DOM עבור JavaScript"
      ],
      explanation: "CSP: Content-Security-Policy: default-src 'self'; script-src 'self'. הדפדפן חוסם: 1) inline <script>alert(1)</script>, 2) JS ממקורות לא מאושרים, 3) eval(). Nonce: script-src 'nonce-abc123' — מאפשר רק scripts עם nonce תואם. Report-URI מאפשר לאסוף דיווחים על חסימות ב-production."
    }
  ],

  111: [
    {
      q: "מה ההבדל בין Authentication לAuthorization?",
      correct: "Authentication = זיהוי (מי אתה?). Authorization = הרשאות (מה מותר לך לעשות?)",
      choices: [
        "Authentication = זיהוי (מי אתה?). Authorization = הרשאות (מה מותר לך לעשות?)",
        "Authentication = הרשאות, Authorization = זיהוי",
        "שניהם זהים — שניהם בודקים סיסמה",
        "Authentication = HTTPS, Authorization = HTTP"
      ],
      explanation: "AuthN (Authentication): מי אתה? Login עם username+password, biometric, certificate. AuthZ (Authorization): מה מותר לך? RBAC, ACL, permissions. טעות נפוצה: IDOR (Insecure Direct Object Reference) = בעיית AuthZ — משתמש מורשה ניגש לreource של אחר ע\"י שינוי ID."
    },
    {
      q: "למה bcrypt עדיף על SHA256 לhashinig סיסמאות?",
      correct: "bcrypt מכוון להיות איטי (work factor) — brute-force לוקח הרבה יותר זמן. SHA256 מהיר מדי לGPU cracking",
      choices: [
        "bcrypt מכוון להיות איטי (work factor) — brute-force לוקח הרבה יותר זמן. SHA256 מהיר מדי לGPU cracking",
        "bcrypt מצפין, SHA256 רק מבצע hash",
        "SHA256 עדיף כי הוא חדש יותר",
        "bcrypt מאובטח כי הוא קצר יותר"
      ],
      explanation: "SHA256: GPU מודרני = 10 מיליארד hashes/שנייה. bcrypt cost=12: ~300 hashes/שנייה לכל GPU. ברוט פורס: 8 תווים lowercase = 200 מיליארד combinations. SHA256: שניות. bcrypt cost=12: שנים. Argon2id: memory-hard — גם ASIC/GPU מואטים כי צריך GB RAM."
    },
    {
      q: "מה JWT alg=none vulnerability?",
      correct: "שרת שמקבל alg=none מאמת token ללא חתימה — תוקף יכול לזייף כל payload (user=admin)",
      choices: [
        "שרת שמקבל alg=none מאמת token ללא חתימה — תוקף יכול לזייף כל payload (user=admin)",
        "JWT עם alg=none מהיר יותר לprocessing",
        "alg=none מצפין עם symmetric key",
        "alg=none נדרש לmobile applications"
      ],
      explanation: "JWT header: {\\\"alg\\\":\\\"HS256\\\"} + payload + signature. אם תוקף משנה header ל-{\\\"alg\\\":\\\"none\\\"} וחותך signature — שרת פגיע מקבל. תיקון: whitelist algorithms בצד שרת (reject כל מה שאינו HS256/RS256). אל תתן ל-user לבחור algorithm!"
    },
    {
      q: "מה MFA ולמה הוא מגן גם אם סיסמה נגנבה?",
      correct: "Multi-Factor Authentication מחייב 2+ גורמים: משהו שיודע + משהו שיש לך/אתה — גנב הסיסמה חסר את הגורם השני",
      choices: [
        "Multi-Factor Authentication מחייב 2+ גורמים: משהו שיודע + משהו שיש לך/אתה — גנב הסיסמה חסר את הגורם השני",
        "MFA = שתי סיסמאות שונות",
        "MFA מצפין את הסיסמה פעמיים",
        "MFA = סיסמה ארוכה יותר מ-12 תווים"
      ],
      explanation: "גורמי Authentication: 1) Knowledge: סיסמה, PIN. 2) Possession: TOTP app, SMS, hardware key (YubiKey). 3) Inherence: biometric (fingerprint, face). MFA = שילוב 2+. Phishing עוקב סיסמה ← אבל לא TOTP code (תוקף ב-AitM יכול לעקוף TOTP). WebAuthn/FIDO2 = phishing-resistant."
    },
    {
      q: "מה Salt בhashinig סיסמאות?",
      correct: "ערך אקראי ייחודי שמוסיפים לכל סיסמה לפני hash — מונע rainbow tables ומחייב brute-force נפרד לכל user",
      choices: [
        "ערך אקראי ייחודי שמוסיפים לכל סיסמה לפני hash — מונע rainbow tables ומחייב brute-force נפרד לכל user",
        "מפתח הצפנה סודי שמאחסנים ב-DB",
        "חלק נוסף מהסיסמה שהuser מזין",
        "pepper מוסיף ל-DB, salt מוסיף לqode"
      ],
      explanation: "ללא salt: hash('password123') = abc123 — כל user עם אותה סיסמה מקבל אותו hash. Rainbow table: מיפוי hash→plaintext מחושב מראש. עם salt: hash('password123' + random_salt_xyz) — כל user hash שונה. Brute-force חייב לחשב מחדש לכל user. bcrypt/Argon2 מייצרים salt אוטומטית ושומרים אותו ב-hash string."
    }
  ],

  112: [
    {
      q: "מה Content-Security-Policy עושה?",
      correct: "מנחה דפדפן מאילו מקורות לטעון JS/CSS/images — מגן מXSS ע\"י חסימת inline scripts ומקורות זרים",
      choices: [
        "מנחה דפדפן מאילו מקורות לטעון JS/CSS/images — מגן מXSS ע\"י חסימת inline scripts ומקורות זרים",
        "מצפין content בין client לserver",
        "מסנן content זדוני בצד השרת",
        "מגביל גישה לAPI endpoints לפי IP"
      ],
      explanation: "CSP header: Content-Security-Policy: default-src 'self'; script-src 'self' cdn.example.com. הדפדפן חוסם: JS ממקורות לא מאושרים, inline <script>, eval(). Nonce: כל page load מקבל nonce אקראי — script עם nonce נכון = מורשה. Report-Only: Content-Security-Policy-Report-Only מדווח בלי לחסום."
    },
    {
      q: "מה HSTS ולמה מגן מSSL Stripping?",
      correct: "HTTPS-only header שגורם לדפדפן לסרב לחיבור HTTP — SSL Stripping שמנסה downgrade נכשל",
      choices: [
        "HTTPS-only header שגורם לדפדפן לסרב לחיבור HTTP — SSL Stripping שמנסה downgrade נכשל",
        "מאמת certificate של שרת ומסרב לuntrusted CAs",
        "מצפין cookies אוטומטית",
        "מגביל חיבורי TLS לגרסה 1.3 בלבד"
      ],
      explanation: "SSL Stripping (Moxie Marlinspike 2009): MITM מקבל HTTPS מserver אבל מדגרד לHTTP עם client. HSTS: Strict-Transport-Security: max-age=31536000. הדפדפן זוכר: תמיד HTTPS לsite זה, אפילו אם user כותב http://. Preload: מוכנס ל-browser's hardcoded list — גם ל-first visit. includeSubDomains: חובה לpreload."
    },
    {
      q: "מה CSRF ואיך SameSite=Strict מגן עליו?",
      correct: "CSRF גורם לדפדפן לשלוח בקשה לsite X מ-evil.com עם cookies של X. SameSite=Strict מונע שליחת cookie בbקשות cross-site",
      choices: [
        "CSRF גורם לדפדפן לשלוח בקשה לsite X מ-evil.com עם cookies של X. SameSite=Strict מונע שליחת cookie בbקשות cross-site",
        "CSRF גונב cookies ישירות מdפדפן",
        "CSRF = Cross-Site Request Filter — מסנן requests",
        "SameSite מצפין cookies בין sites"
      ],
      explanation: "CSRF: evil.com כולל <img src=bank.com/transfer?to=evil&amount=1000>. הדפדפן שולח GET עם cookies של bank.com (כי browser מוסיף cookies אוטומטית). SameSite=Strict: cookie רק לrequests מאותו site. Lax: רק navigation. None: כל cross-site (ישן). CSRF token: hidden field עם token שSERVER יצר — evil.com לא יכול לדעת אותו."
    },
    {
      q: "מה X-Frame-Options ולמה חשוב?",
      correct: "מונע טעינת האתר ב-iframe — מגן מClickjacking שבו אתר זדוני מסתיר iframe על כפתור שהuser לוחץ",
      choices: [
        "מונע טעינת האתר ב-iframe — מגן מClickjacking שבו אתר זדוני מסתיר iframe על כפתור שהuser לוחץ",
        "מגביל frame rate של הדפדפן לחיסכון בחשמל",
        "מצפין X-headers ב-HTTP request",
        "מסיר X-headers מ-response לצמצום דליפת מידע"
      ],
      explanation: "Clickjacking: evil.com כולל iframe של bank.com מוסתר, עם כפתור מעליו. User לוחץ 'Win a Prize!' אבל לוחץ בפועל על 'Transfer Money'. X-Frame-Options: DENY — אסור בכלל. SAMEORIGIN — מותר רק מאותו origin. מודרני יותר: CSP frame-ancestors 'none'. Facebook Like button hijacking = קלאסי."
    }
  ],

  113: [
    {
      q: "מה IoC ותן 3 דוגמאות?",
      correct: "Indicator of Compromise — עדות לפריצה. דוגמאות: IP של C2 server, hash של malware file, domain זדוני",
      choices: [
        "Indicator of Compromise — עדות לפריצה. דוגמאות: IP של C2 server, hash של malware file, domain זדוני",
        "Internet of Cybersecurity — מכשירי IoT עם אבטחה",
        "Index of Compromise — דירוג רמת הפריצה",
        "Internal Operations Center — מרכז ניטור פנימי"
      ],
      explanation: "IoCs: IP addresses (C2), File hashes (MD5/SHA256 של malware), Domains (phishing/C2), URLs (payload delivery), Email subjects/senders, Registry keys (persistence), Mutex names (malware fingerprint). מקורות IoC: VirusTotal, AlienVault OTX, MISP, Shodan. IoC stale מהר — IP/domain מתחלף תוך ימים."
    },
    {
      q: "מה MITRE ATT&CK?",
      correct: "מסגרת פתוחה עם 14 Tactics ומאות Techniques של APTs — ממפה TTPs ומקשרת להגנות",
      choices: [
        "מסגרת פתוחה עם 14 Tactics ומאות Techniques של APTs — ממפה TTPs ומקשרת להגנות",
        "תקן הצפנה לנתוני threat intelligence",
        "חברת אבטחה שמכיר malware signatures",
        "פרוטוקול לשיתוף IoCs בין ארגונים"
      ],
      explanation: "ATT&CK: 14 Tactics (מה מנסה התוקף): Reconnaissance, Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, C2, Exfiltration, Impact. כל Tactic כולל Techniques (T1566 = Phishing) ו-Sub-techniques. Navigator: ויזואליזציה של coverage. Purple team: Red team תוקף, Blue team מזהה."
    },
    {
      q: "מה ההבדל בין Passive לActive OSINT Reconnaissance?",
      correct: "Passive: מקורות ציבוריים בלי לגעת ב-target (Shodan, WHOIS). Active: שליחת requests ישירות לtarget (nmap) — ניתן לגלות",
      choices: [
        "Passive: מקורות ציבוריים בלי לגעת ב-target (Shodan, WHOIS). Active: שליחת requests ישירות לtarget (nmap) — ניתן לגלות",
        "Passive = ניטור פסיבי ב-SOC. Active = red team",
        "Passive = איטי, Active = מהיר",
        "Passive = ללא כלים. Active = עם כלי automation"
      ],
      explanation: "Passive Recon: Shodan (scan שנעשה ע\"י שלישי), WHOIS, Google Dorks, LinkedIn, theHarvester — target לא רואה traffic. Active Recon: nmap, ping sweep, dir busting — logs מהipline. בחיים האמיתיים: Pentest scope מגדיר מה מותר. Bug Bounty: בדרך כלל passive בלבד לתחילת reconnaissance."
    },
    {
      q: "מה Shodan ואיזה מידע ניתן למצוא בו?",
      correct: "מנוע חיפוש למכשירים המחוברים לאינטרנט — מציג open ports, banners, certificates, ו-vulnerable services",
      choices: [
        "מנוע חיפוש למכשירים המחוברים לאינטרנט — מציג open ports, banners, certificates, ו-vulnerable services",
        "מנוע חיפוש לplugins זדוניים במחשב",
        "כלי לניתוח malware של Shodan Corporation",
        "שרת DNS שמפרסם threat intelligence"
      ],
      explanation: "Shodan סורק את כל IPv4 ושומר banners. חיפוש: hostname:example.com port:22 → SSH חשוף. product:Redis → Redis instances (לרוב ללא auth). country:IL vuln:CVE-2017-0144 → EternalBlue vulnerable. org:\\\"Company Name\\\" → כל assets שלהם. Censys: דומה לShodan. Zoomeye: גרסה סינית."
    }
  ],

  114: [
    {
      q: "מה 6 שלבי Incident Response לפי NIST?",
      correct: "Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned",
      choices: [
        "Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned",
        "Detection → Analysis → Mitigation → Reporting → Recovery → Review",
        "Alert → Triage → Isolate → Fix → Monitor → Close",
        "Discovery → Escalation → Response → Patch → Test → Deploy"
      ],
      explanation: "IR Lifecycle (NIST SP 800-61): 1) Preparation: runbooks, tools, training. 2) Identification: alert מSOC, EDR, user report. 3) Containment: short-term (isolate) + long-term (patch). 4) Eradication: הסרת malware, reset credentials. 5) Recovery: restore services, enhanced monitoring. 6) Lessons Learned: post-mortem תוך שבועיים."
    },
    {
      q: "מה Supply Chain Attack? תן דוגמה ידועה.",
      correct: "תקיפה דרך ספק/תוכנה מהימנה שהארגון משתמש בה. SolarWinds: backdoor ב-Orion update שהתפשט ל-18,000 לקוחות",
      choices: [
        "תקיפה דרך ספק/תוכנה מהימנה שהארגון משתמש בה. SolarWinds: backdoor ב-Orion update שהתפשט ל-18,000 לקוחות",
        "תקיפה על שרשרת logistics פיזית",
        "תקיפת SQL injection על supply chain management system",
        "תקיפה על עובדי חברה דרך phishing email"
      ],
      explanation: "Supply Chain Attacks: 1) SolarWinds SUNBURST 2020: backdoor ב-DLL → 18,000 לקוחות. 2) XZ Utils 2024: backdoor ב-compression library. 3) npm malicious packages. 4) Codecov breach: CI/CD script נפרץ. הגנה: SBOM (Software Bill of Materials), code signing, תהליך build מבודד, dependency scanning (Snyk, Dependabot)."
    },
    {
      q: "מה volatility ולמה משתמשים בו ב-IR?",
      correct: "Framework לניתוח memory dumps — מזהה תהליכים, network connections, malware מוסתר ב-RAM",
      choices: [
        "Framework לניתוח memory dumps — מזהה תהליכים, network connections, malware מוסתר ב-RAM",
        "כלי לניהול אחסון נדיף בענן",
        "SIEM לניתוח logs בזמן אמת",
        "כלי לsimulation של תקיפות APT"
      ],
      explanation: "Memory forensics: malware שרץ בRAM ולא כותב לדיסק (fileless malware) — volatility מגלה. פקודות מועילות: pslist (תהליכים), netscan (connections), malfind (DLL injection, hollowing), cmdline (args של תהליכים), hashdump (Windows password hashes). Memory capture tools: WinPMem, Magnet RAM Capture, VMware snapshot."
    },
    {
      q: "מה Lateral Movement ב-incident response?",
      correct: "מעבר תוקף בין מכשירים ברשת לאחר initial access — שימוש ב-RDP, SMB, SSH, Pass-the-Hash",
      choices: [
        "מעבר תוקף בין מכשירים ברשת לאחר initial access — שימוש ב-RDP, SMB, SSH, Pass-the-Hash",
        "העברת נתונים מהרשת לשרת חיצוני",
        "עלייה ב-privileges מuser לadmin",
        "שינוי כיוון תנועת טראפיק ב-network"
      ],
      explanation: "Lateral Movement Techniques (MITRE ATT&CK T1550+): Pass-the-Hash (PtH): שימוש ב-NTLM hash ישירות ללא סיסמה. Pass-the-Ticket: Kerberos ticket גנוב. RDP: 3389 → GUI access. SMB: psexec, wmiexec. SSH key propagation. Containment: network segmentation, מחיקת sessions, CReset Active Directory trust."
    }
  ],

  115: [
    {
      q: "מה ההבדל בין Static לDynamic Malware Analysis?",
      correct: "Static: בוחנים קובץ ללא הרצה (strings, imports). Dynamic: מריצים ב-sandbox ובוחנים התנהגות (API, network, files)",
      choices: [
        "Static: בוחנים קובץ ללא הרצה (strings, imports). Dynamic: מריצים ב-sandbox ובוחנים התנהגות (API, network, files)",
        "Static = ניתוח בזמן אמת, Dynamic = ניתוח לאחר פריצה",
        "Static = ב-VM, Dynamic = על bare metal",
        "Static = Linux tools, Dynamic = Windows tools"
      ],
      explanation: "Static: file, strings, md5sum, PEStudio, Ghidra. מגלה: strings קריאים (URLs, IPs), imported DLLs, PE header anomalies. מוגבל ע\"י obfuscation/packing. Dynamic: Cuckoo Sandbox, Process Monitor, Wireshark. מגלה: registry changes, file drops, C2 connections, process injection. שילוב שניהם = full analysis."
    },
    {
      q: "מה Ransomware ואיך מתגוננים?",
      correct: "Malware שמצפין קבצים ודורש כופר. הגנה: backups מנותקים, patch management, email filtering, network segmentation",
      choices: [
        "Malware שמצפין קבצים ודורש כופר. הגנה: backups מנותקים, patch management, email filtering, network segmentation",
        "Malware שגונב נתונים ומוכר לדארק ווב",
        "כלי לגיטימי להצפנת קבצים לאבטחה",
        "virus שמשתמש ב-CPU לmining"
      ],
      explanation: "Ransomware kill chain: Phishing → Initial Access → Privilege Escalation → Lateral Movement → Data Exfiltration → Encryption. RaaS (Ransomware-as-a-Service): LockBit, BlackCat. הגנה: 3-2-1 backup rule (3 copies, 2 media types, 1 offsite/offline), immutable backups (Veeam, Azure Immutable), Endpoint Detection & Response (EDR), Email gateway filtering."
    },
    {
      q: "מה Windows Persistence מנגנונים נפוצים?",
      correct: "Registry Run Keys, Scheduled Tasks, Services, Startup Folder, DLL Hijacking — malware שרץ אחרי reboot",
      choices: [
        "Registry Run Keys, Scheduled Tasks, Services, Startup Folder, DLL Hijacking — malware שרץ אחרי reboot",
        "WMI Events, DCOM, BITS Jobs בלבד",
        "רק /etc/crontab ו-/etc/systemd",
        "Browser extensions ו-Chrome plugins בלבד"
      ],
      explanation: "Windows Persistence: 1) HKCU/HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run. 2) Scheduled Tasks: schtasks /create. 3) Services: sc create. 4) DLL Hijacking: malicious DLL בpath לפני הlegitimate. 5) WMI subscriptions. 6) Boot/Pre-OS: bootkit. IR: AutoRuns (Sysinternals) מציג כל persistence mechanisms. כל startup entry צריך לידיים לוידא."
    },
    {
      q: "מה C2 (Command and Control) ב-malware?",
      correct: "תשתית תקשורת בין malware לתוקף — מאפשרת שליחת פקודות, גניבת נתונים, עדכוני malware",
      choices: [
        "תשתית תקשורת בין malware לתוקף — מאפשרת שליחת פקודות, גניבת נתונים, עדכוני malware",
        "Command & Control = ניהול system administrator",
        "תוכנה לcontrol תהליכי CI/CD",
        "network firewall שמנתב packets"
      ],
      explanation: "C2 channels: HTTP/HTTPS (camouflage as web traffic), DNS (covert channel ב-DNS queries), ICMP, Twitter/Slack (social media C2). Detection: beacon intervals חשוד (malware מתקשר כל X שניות), rare domains, DNS DGA (Domain Generation Algorithm — malware מייצר domain names אקראיים). Tools: Cobalt Strike, Covenant, Brute Ratel."
    },
    {
      q: "מה fileless malware ולמה קשה לאיתורו?",
      correct: "Malware שרץ רק ב-RAM ולא כותב לדיסק — anti-virus שסורק קבצים לא מוצא, רק memory forensics מגלה",
      choices: [
        "Malware שרץ רק ב-RAM ולא כותב לדיסק — anti-virus שסורק קבצים לא מוצא, רק memory forensics מגלה",
        "malware שמוחק את עצמו אחרי ריצה",
        "malware שמסתיר את extension הקובץ שלו",
        "malware שפועל בlow privilege ללא admin"
      ],
      explanation: "Fileless techniques: PowerShell (reflective loading), WMI, Process Hollowing (החלפת legitimate process ב-malware), DLL Injection. דוגמה: PowerShell -EncodedCommand <base64> → מריץ payload ישירות ב-RAM. Detection: EDR (Endpoint Detection & Response) בודק behavior לא רק files. AMSI (Antimalware Scan Interface) = Windows API שסורק PowerShell scripts. Memory forensics (volatility) = מגלה injected code."
    }
  ]
}

export function getQuizForChapter(chapterId) {
  return quizBank[chapterId] || []
}


export function getAllQuizQuestions() {
  return Object.values(quizBank).flat()
}
