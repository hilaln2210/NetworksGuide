import { readFileSync, writeFileSync } from 'fs';

const filePath = '/home/hila/Desktop/NetworksGuide/src/data/quizBank.js';
let content = readFileSync(filePath, 'utf8');

// We need to rewrite explanation and explanationEn for chapters 1-13.
// Strategy: use a function-based replace on the JS object after eval.

// Extract the object by stripping comments and the export
const stripped = content.replace(/\/\*[\s\S]*?\*\//g, '').replace(/export\s+const\s+quizBank\s*=\s*/, '').replace(/;\s*$/, '');

// Use Function constructor to parse
const quizBank = new Function('return (' + stripped + ')')();

// New explanations for each chapter/question
const newExplanations = {
  1: [
    {
      he: "IP מזהה מחשב ברשת, פורט מזהה שירות על אותו מחשב.\n\nעיקרי:\n- IP = כתובת הבניין\n- פורט = מספר הדירה\n- פורט 443 = HTTPS, פורט 80 = HTTP\n\nטיפ:\nחשבו על IP כרחוב ופורט כדירה — אי אפשר להגיע לדירה בלי הרחוב.",
      en: "IP identifies a computer on the network, port identifies a service on that computer.\n\nMain Points:\n- IP = building address\n- Port = apartment number\n- Port 443 = HTTPS, Port 80 = HTTP\n\nTip:\nThink of IP as the street and port as the apartment — you need both to reach the right place."
    },
    {
      he: "ping בודקת אם שרת מרוחק חי ומגיב.\n\nעיקרי:\n- שולחת חבילת ICMP Echo Request\n- מחכה לתגובת Echo Reply\n- מציגה זמן תגובה ב-ms\n\nטיפ:\nping = דפיקה על דלת — אם עונים, השרת חי.",
      en: "ping checks if a remote server is alive and responding.\n\nMain Points:\n- Sends an ICMP Echo Request packet\n- Waits for an Echo Reply\n- Shows response time in ms\n\nTip:\nping = knocking on a door — if someone answers, the server is alive."
    },
    {
      he: "DNS מתרגם שמות דומיין לכתובות IP.\n\nעיקרי:\n- אנחנו מקלידים google.com\n- DNS מחזיר 142.250.185.206\n- בלעדיו היינו צריכים לזכור מספרים\n\nטיפ:\nDNS = ספר טלפונים — מחפשים שם ומקבלים מספר.",
      en: "DNS translates domain names into IP addresses.\n\nMain Points:\n- We type google.com\n- DNS returns 142.250.185.206\n- Without it we would need to memorize numbers\n\nTip:\nDNS = phone book — look up a name, get a number."
    },
    {
      he: "traceroute מציג את כל הנתבים שחבילה עוברת בדרך ליעד.\n\nעיקרי:\n- מראה כל hop (קפיצה) בין נתבים\n- מודד זמן תגובה לכל hop\n- עוזר לזהות איפה יש עיכוב\n\nטיפ:\ntraceroute = מפת דרכים — רואים כל תחנה בדרך ליעד.",
      en: "traceroute shows every router a packet passes through on its way to the destination.\n\nMain Points:\n- Displays each hop between routers\n- Measures response time per hop\n- Helps identify where delays occur\n\nTip:\ntraceroute = road map — you see every stop along the way."
    },
    {
      he: "כתובת IPv4 מורכבת מ-4 מספרים בטווח 0-255 מופרדים בנקודות.\n\nעיקרי:\n- 300 חורג מהטווח המותר\n- 192.168.1 חסר מספר רביעי\n- נקודותיים שייכות ל-IPv6, לא IPv4\n\nטיפ:\n4 מספרים, 4 נקודות, כל מספר עד 255 — זה הכלל.",
      en: "An IPv4 address has 4 numbers from 0-255 separated by dots.\n\nMain Points:\n- 300 is out of valid range\n- 192.168.1 is missing the fourth number\n- Colons belong to IPv6, not IPv4\n\nTip:\n4 numbers, 3 dots, each number max 255 — that is the rule."
    },
    {
      he: "לקוח הוא מי שיוזם את הבקשה, שרת הוא מי שעונה לה.\n\nעיקרי:\n- הדפדפן שולח בקשה = לקוח\n- Google עונה לבקשה = שרת\n- הלקוח תמיד פונה ראשון\n\nטיפ:\nלקוח = שואל שאלה, שרת = נותן תשובה.",
      en: "The client is whoever starts the request, the server is whoever answers it.\n\nMain Points:\n- The browser sends the request = client\n- Google answers the request = server\n- The client always reaches out first\n\nTip:\nClient = asks a question, Server = gives the answer."
    }
  ],
  2: [
    {
      he: "Socket הוא ממשק תכנותי שמחבר תוכנה לרשת.\n\nעיקרי:\n- מאפשר לשלוח ולקבל נתונים\n- מתחבר באמצעות IP + פורט\n- כמו תקע שמחבר מכשיר לחשמל\n\nטיפ:\nSocket = שקע — מחבר את התוכנה שלך לרשת.",
      en: "A Socket is a programming interface that connects software to the network.\n\nMain Points:\n- Allows sending and receiving data\n- Connects using IP + port\n- Like a plug connecting a device to electricity\n\nTip:\nSocket = plug — it connects your program to the network."
    },
    {
      he: "bind() קובע פורט להאזנה בצד השרת, connect() מתחבר לשרת בצד הלקוח.\n\nעיקרי:\n- שרת: bind() + listen() + accept()\n- לקוח: connect()\n- bind = פותח חנות, connect = נכנס כלקוח\n\nטיפ:\nbind = פתיחת דלת, connect = כניסה בדלת.",
      en: "bind() sets a port to listen on (server side), connect() connects to a server (client side).\n\nMain Points:\n- Server: bind() + listen() + accept()\n- Client: connect()\n- bind = opens a shop, connect = walks in as customer\n\nTip:\nbind = opening the door, connect = walking through it."
    },
    {
      he: "127.0.0.1 מקבל חיבורים רק מהמכשיר עצמו, 0.0.0.0 מאזין על כל ה-interfaces.\n\nעיקרי:\n- 127.0.0.1 = loopback, תעבורה לא יוצאת מהמחשב\n- 0.0.0.0 = מאזין על WiFi, Ethernet ו-loopback\n- לפיתוח מקומי משתמשים ב-127.0.0.1\n\nטיפ:\n127.0.0.1 = רק אני, 0.0.0.0 = כולם מוזמנים.",
      en: "127.0.0.1 accepts connections only from the local machine, 0.0.0.0 listens on all interfaces.\n\nMain Points:\n- 127.0.0.1 = loopback, traffic never leaves the machine\n- 0.0.0.0 = listens on WiFi, Ethernet, and loopback\n- Use 127.0.0.1 for local development\n\nTip:\n127.0.0.1 = only me, 0.0.0.0 = everyone is welcome."
    },
    {
      he: "במודל שרת-לקוח, השרת מאזין לחיבורים והלקוח יוזם חיבור.\n\nעיקרי:\n- שרת: socket, bind, listen, accept\n- לקוח: socket, connect\n- שניהם משתמשים ב-send() ו-recv()\n\nטיפ:\nשרת = מחכה ליד הטלפון, לקוח = מתקשר.",
      en: "In the Client-Server model, the server listens for connections and the client starts the connection.\n\nMain Points:\n- Server: socket, bind, listen, accept\n- Client: socket, connect\n- Both use send() and recv()\n\nTip:\nServer = waits by the phone, Client = makes the call."
    },
    {
      he: "Echo Server מקבל נתונים ומחזיר בדיוק את מה שקיבל.\n\nעיקרי:\n- הפרויקט הראשון בתכנות רשתות\n- מוכיח שהחיבור עובד מקצה לקצה\n- בסיס לבניית שרתים מורכבים\n\nטיפ:\nEcho = הד — מה שאתה שולח חוזר אליך.",
      en: "An Echo Server receives data and sends back exactly what it received.\n\nMain Points:\n- The first project in network programming\n- Proves the connection works end-to-end\n- A foundation for building more complex servers\n\nTip:\nEcho = what you send comes right back to you."
    }
  ],
  3: [
    {
      he: "מודל TCP/IP מחולק ל-5 שכבות מהפיזית ועד האפליקציה.\n\nעיקרי:\n- 1 פיזית, 2 קו, 3 רשת, 4 תעבורה, 5 אפליקציה\n- מודל OSI כולל 7 שכבות\n- כל שכבה אחראית על תחום אחר\n\nטיפ:\nזכרו: Please Do Not Throw Pizza — Physical, Data Link, Network, Transport, aPplication.",
      en: "The TCP/IP model has 5 layers from Physical up to Application.\n\nMain Points:\n- 1 Physical, 2 Link, 3 Network, 4 Transport, 5 Application\n- The OSI model has 7 layers\n- Each layer handles a different job\n\nTip:\nRemember: Please Do Not Throw Pizza — Physical, Data link, Network, Transport, aPplication."
    },
    {
      he: "Wireshark לוכד ומנתח חבילות שעוברות בממשק הרשת.\n\nעיקרי:\n- מראה כל שכבה, header ו-byte\n- רק מנתח — לא שולח חבילות\n- כלי חיוני לאבחון בעיות רשת\n\nטיפ:\nWireshark = מיקרוסקופ לרשת — רואים הכל אבל לא נוגעים.",
      en: "Wireshark captures and analyzes packets passing through the network interface.\n\nMain Points:\n- Shows every layer, header, and byte\n- Only analyzes — does not send packets\n- Essential tool for diagnosing network issues\n\nTip:\nWireshark = network microscope — you see everything but do not touch."
    },
    {
      he: "Encapsulation הוא תהליך עטיפת נתונים ב-header של כל שכבה לפני שליחה.\n\nעיקרי:\n- כל שכבה מוסיפה header משלה\n- כמו מכתב בתוך מעטפה בתוך שק דואר\n- Decapsulation = ההפך, פתיחה שכבה-שכבה\n\nטיפ:\nEncapsulation = בובה רוסית — שכבה עוטפת שכבה.",
      en: "Encapsulation is wrapping data in a header at each layer before sending.\n\nMain Points:\n- Each layer adds its own header\n- Like a letter inside an envelope inside a mail bag\n- Decapsulation = the reverse, unwrapping layer by layer\n\nTip:\nEncapsulation = Russian doll — each layer wraps the previous one."
    },
    {
      he: "שכבת הרשת מוסיפה כתובות IP מקור ויעד.\n\nעיקרי:\n- שכבת תעבורה מוסיפה פורטים\n- שכבת רשת מוסיפה כתובות IP\n- שכבת קו מוסיפה כתובות MAC\n\nטיפ:\nכל שכבה דואגת לניווט שלה — IP = ניווט בין רשתות.",
      en: "The Network layer adds source and destination IP addresses.\n\nMain Points:\n- Transport layer adds ports\n- Network layer adds IP addresses\n- Link layer adds MAC addresses\n\nTip:\nEach layer handles its own navigation — IP = routing between networks."
    },
    {
      he: "לכל שכבה יש שם שונה ליחידת הנתונים שעוברת בה.\n\nעיקרי:\n- תעבורה: Segment, רשת: Packet\n- קו: Frame, פיזית: Bit\n- אפליקציה: Data\n\nטיפ:\nזכרו: Do Some People Fear Birthdays — Data, Segment, Packet, Frame, Bit.",
      en: "Each layer has a different name for the data unit that passes through it.\n\nMain Points:\n- Transport: Segment, Network: Packet\n- Link: Frame, Physical: Bit\n- Application: Data\n\nTip:\nRemember: Do Some People Fear Birthdays — Data, Segment, Packet, Frame, Bit."
    },
    {
      he: "ב-Wireshark, הפילטר http מציג רק תעבורת HTTP.\n\nעיקרי:\n- http.request = רק בקשות\n- tcp.port == 80 = כל תעבורה על פורט 80\n- tls = חיצת יד HTTPS מוצפנת\n\nטיפ:\nהפילטרים ב-Wireshark הם בשם הפרוטוקול — פשוט כמו לכתוב http.",
      en: "In Wireshark, the filter http shows only HTTP traffic.\n\nMain Points:\n- http.request = requests only\n- tcp.port == 80 = all traffic on port 80\n- tls = HTTPS encrypted handshake\n\nTip:\nWireshark filters use the protocol name — just type http."
    },
    {
      he: "Decapsulation הוא הסרת headers בסדר הפוך בעת קבלת חבילה.\n\nעיקרי:\n- קו מסיר Frame header ומעביר ל-IP\n- IP מסיר Packet header ומעביר ל-TCP\n- TCP מסיר Segment header ומעביר לאפליקציה\n\nטיפ:\nDecapsulation = פתיחת מתנה — מסירים שכבת עטיפה אחת אחרי השנייה.",
      en: "Decapsulation removes headers in reverse order when receiving a packet.\n\nMain Points:\n- Link removes Frame header and passes to IP\n- IP removes Packet header and passes to TCP\n- TCP removes Segment header and passes to the app\n\nTip:\nDecapsulation = unwrapping a gift — one layer at a time."
    }
  ],
  4: [
    {
      he: "HTTP הוא פרוטוקול להעברת דפי אינטרנט, פועל בשכבת האפליקציה.\n\nעיקרי:\n- הדפדפן שולח בקשת GET\n- השרת מחזיר דף HTML\n- בסיס כל הגלישה באינטרנט\n\nטיפ:\nHTTP = השפה שבה הדפדפן והשרת מדברים.",
      en: "HTTP is a protocol for transferring web pages, working at the Application layer.\n\nMain Points:\n- The browser sends a GET request\n- The server returns an HTML page\n- The foundation of all web browsing\n\nTip:\nHTTP = the language browsers and servers speak."
    },
    {
      he: "GET מביאה מידע מהשרת, POST שולחת מידע לשרת.\n\nעיקרי:\n- גלישה לדף = GET\n- מילוי טופס הרשמה = POST\n- GET בכתובת URL, POST בגוף הבקשה\n\nטיפ:\nGET = תביא לי, POST = קח ממני.",
      en: "GET retrieves information from the server, POST sends information to the server.\n\nMain Points:\n- Browsing a page = GET\n- Filling a signup form = POST\n- GET data is in the URL, POST data is in the body\n\nTip:\nGET = bring me, POST = take from me."
    },
    {
      he: "קוד 404 אומר שהדף המבוקש לא נמצא בשרת.\n\nעיקרי:\n- 2xx = הצלחה (200 OK)\n- 4xx = שגיאת לקוח (404 לא נמצא, 403 אסור)\n- 5xx = שגיאת שרת (500 שגיאה פנימית)\n\nטיפ:\n4 = שגיאה שלך, 5 = שגיאה של השרת.",
      en: "Code 404 means the requested page was not found on the server.\n\nMain Points:\n- 2xx = success (200 OK)\n- 4xx = client error (404 not found, 403 forbidden)\n- 5xx = server error (500 internal error)\n\nTip:\n4 = your mistake, 5 = server's mistake."
    },
    {
      he: "301 הפניה קבועה שהדפדפן שומר, 302 הפניה זמנית שלא נשמרת.\n\nעיקרי:\n- 301 = כתובת חדשה לצמיתות, SEO מועבר\n- 302 = כתובת זמנית, SEO לא מועבר\n- 301 לשינוי דומיין, 302 לתחזוקה\n\nטיפ:\n301 = עברנו דירה לצמיתות, 302 = אנחנו באירוח זמני.",
      en: "301 is a permanent redirect the browser saves, 302 is a temporary redirect not saved.\n\nMain Points:\n- 301 = new address forever, SEO transfers\n- 302 = temporary address, SEO stays\n- 301 for domain change, 302 for maintenance\n\nTip:\n301 = moved house permanently, 302 = staying at a friend's temporarily."
    },
    {
      he: "URL הוא כתובת מלאה של משאב ברשת עם כל חלקיו.\n\nעיקרי:\n- scheme://host:port/path?query#fragment\n- scheme = http או https\n- host = שם הדומיין, path = הנתיב\n\nטיפ:\nURL = כתובת מלאה כמו רחוב + עיר + מדינה + דירה.",
      en: "A URL is the full address of a resource on the network with all its parts.\n\nMain Points:\n- scheme://host:port/path?query#fragment\n- scheme = http or https\n- host = domain name, path = the route\n\nTip:\nURL = full address like street + city + country + apartment."
    },
    {
      he: "HTTP Headers הם מידע נוסף שנשלח עם כל בקשה או תגובה.\n\nעיקרי:\n- Host = לאיזה אתר, User-Agent = מי הדפדפן\n- Content-Type = סוג התוכן, Cookie = מזהה משתמש\n- ניתן לראות ב-Wireshark או בכלי המפתח\n\nטיפ:\nHeaders = מדבקות על המעטפה — מידע על המשלוח, לא על התוכן.",
      en: "HTTP Headers are extra information sent with every request or response.\n\nMain Points:\n- Host = which site, User-Agent = which browser\n- Content-Type = type of content, Cookie = user ID\n- Viewable in Wireshark or browser dev tools\n\nTip:\nHeaders = labels on the envelope — info about the delivery, not the content."
    }
  ],
  5: [
    {
      he: "Scapy היא ספריית Python שמאפשרת לבנות ולשלוח חבילות רשת מותאמות.\n\nעיקרי:\n- בונה חבילות שכבה-שכבה\n- יכולה לשלוח, ללכוד ולנתח חבילות\n- משמשת לבדיקות אבטחה ולמידת פרוטוקולים\n\nטיפ:\nScapy = לגו של רשתות — מרכיבים חבילה חלק אחרי חלק.",
      en: "Scapy is a Python library that lets you build and send custom network packets.\n\nMain Points:\n- Builds packets layer by layer\n- Can send, capture, and analyze packets\n- Used for security testing and learning protocols\n\nTip:\nScapy = Lego for networks — assemble a packet piece by piece."
    },
    {
      he: "הפקודה בונה חבילת ICMP (ping) עם כתובת יעד 8.8.8.8.\n\nעיקרי:\n- IP(dst='8.8.8.8') = שכבת רשת עם כתובת יעד\n- ICMP() = פרוטוקול ping\n- הסימן / מחבר שכבות אחת על השנייה\n\nטיפ:\nב-Scapy, / = שים שכבה על שכבה, כמו שכבות עוגה.",
      en: "The command builds an ICMP (ping) packet with destination 8.8.8.8.\n\nMain Points:\n- IP(dst='8.8.8.8') = network layer with destination\n- ICMP() = ping protocol\n- The / sign stacks layers on top of each other\n\nTip:\nIn Scapy, / = stack layers like a cake — one on top of another."
    },
    {
      he: "Scapy יכולה גם ליצור וגם לשלוח חבילות, בעוד Wireshark רק מנתחת.\n\nעיקרי:\n- Scapy = בונה, שולחת ולוכדת חבילות\n- Wireshark = רק לוכדת ומנתחת\n- Scapy עובדת מקוד Python\n\nטיפ:\nWireshark = מצלמה, Scapy = מצלמה + מדפסת תלת-ממד.",
      en: "Scapy can both create and send packets, while Wireshark only analyzes them.\n\nMain Points:\n- Scapy = builds, sends, and captures packets\n- Wireshark = only captures and analyzes\n- Scapy works from Python code\n\nTip:\nWireshark = camera, Scapy = camera + 3D printer."
    },
    {
      he: "בונים TCP SYN packet ב-Scapy עם IP(dst=...)/TCP(dport=80, flags='S').\n\nעיקרי:\n- שכבות מחוברות עם /\n- flags='S' = SYN, 'SA' = SYN-ACK, 'A' = ACK\n- sr1() שולחת ומחכה לתגובה\n\nטיפ:\nS = SYN = Start — האות הראשונה אומרת הכל.",
      en: "Build a TCP SYN packet in Scapy with IP(dst=...)/TCP(dport=80, flags='S').\n\nMain Points:\n- Layers connect with /\n- flags='S' = SYN, 'SA' = SYN-ACK, 'A' = ACK\n- sr1() sends and waits for a response\n\nTip:\nS = SYN = Start — the first letter says it all."
    },
    {
      he: "lfilter היא פונקציית Python שמסננת חבילות בזמן אמת ב-sniff.\n\nעיקרי:\n- רק חבילות שמחזירות True נשמרות\n- מאפשרת לוגיקה מורכבת בסינון\n- BPF filter רץ ב-kernel ומהיר יותר\n\nטיפ:\nlfilter = שומר בכניסה שבודק כל חבילה לפי הכללים שלך.",
      en: "lfilter is a Python function that filters packets in real-time during sniff.\n\nMain Points:\n- Only packets returning True are kept\n- Allows complex filtering logic\n- BPF filter runs in kernel and is faster\n\nTip:\nlfilter = a bouncer at the door checking each packet by your rules."
    }
  ],
  6: [
    {
      he: "TCP מבטיח אמינות וסדר, UDP מהיר אך ללא הבטחת הגעה.\n\nעיקרי:\n- TCP = HTTP, SSH, FTP — צריך אמינות\n- UDP = DNS, Zoom, gaming — צריך מהירות\n- TCP דורש handshake, UDP שולח ישר\n\nטיפ:\nTCP = דואר רשום עם חתימה, UDP = עיתון שנזרק לדלת.",
      en: "TCP guarantees reliability and order, UDP is fast but with no delivery guarantee.\n\nMain Points:\n- TCP = HTTP, SSH, FTP — needs reliability\n- UDP = DNS, Zoom, gaming — needs speed\n- TCP requires handshake, UDP sends directly\n\nTip:\nTCP = registered mail with signature, UDP = newspaper thrown at the door."
    },
    {
      he: "Three-Way Handshake הוא תהליך פתיחת חיבור TCP בשלושה שלבים.\n\nעיקרי:\n- SYN = אפשר לדבר?\n- SYN-ACK = כן, גם אני רוצה\n- ACK = מעולה, נתחיל\n\nטיפ:\nSYN-SYN/ACK-ACK = היי-היי בחזרה-יופי נתחיל.",
      en: "Three-Way Handshake is the process of opening a TCP connection in three steps.\n\nMain Points:\n- SYN = can we talk?\n- SYN-ACK = yes, I also want to\n- ACK = great, let us start\n\nTip:\nSYN-SYN/ACK-ACK = hi — hi back — great let us begin."
    },
    {
      he: "Flow Control מונע מהשולח להציף את המקבל בנתונים.\n\nעיקרי:\n- המקבל מודיע על ה-Window Size שלו\n- Window גדול = שולח הרבה, קטן = מאט\n- Window Size = 0 = עצור לגמרי\n\nטיפ:\nFlow Control = אומרים לשולח דבר לאט יותר כשלא מספיקים לעבד.",
      en: "Flow Control prevents the sender from flooding the receiver with data.\n\nMain Points:\n- The receiver reports its Window Size\n- Large window = send more, small = slow down\n- Window Size = 0 = stop completely\n\nTip:\nFlow Control = telling the sender to slow down when you cannot keep up."
    },
    {
      he: "TCP header גדול (20-60 bytes) כי הוא שומר state, UDP header קטן (8 bytes).\n\nעיקרי:\n- TCP כולל: sequence, ACK, flags, window\n- UDP כולל רק: ports, length, checksum\n- UDP מתאים ל-streaming ו-gaming\n\nטיפ:\nTCP = טופס מפורט עם כל הפרטים, UDP = פתק קצר.",
      en: "TCP header is large (20-60 bytes) because it tracks state, UDP header is small (8 bytes).\n\nMain Points:\n- TCP includes: sequence, ACK, flags, window\n- UDP includes only: ports, length, checksum\n- UDP is better for streaming and gaming\n\nTip:\nTCP = detailed form with all the fields, UDP = short sticky note."
    },
    {
      he: "TIME_WAIT שומר חיבור סגור פתוח למשך 60 שניות למניעת בלבול.\n\nעיקרי:\n- נמשך 2xMSL (ב-Linux כ-60 שניות)\n- מונע מחבילות מאוחרות לבלבל חיבור חדש\n- שרת עמוס יכול להיתקע ב-TIME_WAIT\n\nטיפ:\nTIME_WAIT = תקופת צינון — ודאו שאף חבילה ישנה לא תפתיע.",
      en: "TIME_WAIT keeps a closed connection open for about 60 seconds to prevent confusion.\n\nMain Points:\n- Lasts 2xMSL (on Linux about 60 seconds)\n- Prevents late packets from confusing a new connection\n- Busy servers can get stuck in TIME_WAIT\n\nTip:\nTIME_WAIT = cooldown period — making sure no old packets cause surprises."
    }
  ],
  7: [
    {
      he: "שכבת הרשת אחראית על ניתוב חבילות בין רשתות שונות לפי IP.\n\nעיקרי:\n- IP הוא הפרוטוקול המרכזי בשכבה זו\n- נתבים (Routers) עובדים בשכבה הזו\n- מחליטה באיזה מסלול לשלוח\n\nטיפ:\nשכבת הרשת = נווט Waze — מחליטה את המסלול הטוב ביותר.",
      en: "The Network layer routes packets between different networks using IP addresses.\n\nMain Points:\n- IP is the main protocol at this layer\n- Routers operate at this layer\n- Decides which route to send through\n\nTip:\nNetwork layer = GPS navigator — picks the best route."
    },
    {
      he: "NAT מאפשר למחשבים רבים לשתף כתובת IP ציבורית אחת.\n\nעיקרי:\n- ממיר כתובות פנימיות (192.168.x.x) לציבורית\n- פותר את מחסור כתובות IPv4\n- הנתב עושה את התרגום\n\nטיפ:\nNAT = מרכזנית — כולם מתקשרים דרך מספר אחד.",
      en: "NAT lets many computers share one public IP address.\n\nMain Points:\n- Converts private addresses (192.168.x.x) to public\n- Solves the IPv4 address shortage\n- The router does the translation\n\nTip:\nNAT = receptionist — everyone calls through one number."
    },
    {
      he: "IP פנימי לרשת מקומית בלבד, IP ציבורי ייחודי באינטרנט.\n\nעיקרי:\n- פנימי: 192.168.x.x, 10.x.x.x, 172.16.x.x\n- ציבורי: מוקצה ע\"י ספק האינטרנט\n- השרת רואה רק את ה-IP הציבורי\n\nטיפ:\nIP פנימי = שם בבית, IP ציבורי = שם רשמי בחוץ.",
      en: "Private IP is for local network only, public IP is unique on the internet.\n\nMain Points:\n- Private: 192.168.x.x, 10.x.x.x, 172.16.x.x\n- Public: assigned by ISP\n- The server only sees the public IP\n\nTip:\nPrivate IP = nickname at home, public IP = official name outside."
    },
    {
      he: "כתובת broadcast מסתיימת ב-255 ונשלחת לכל המכשירים ברשת.\n\nעיקרי:\n- 192.168.1.255 = broadcast ברשת 192.168.1.x\n- 127.0.0.1 = localhost, שליחה לעצמי\n- 255.255.255.255 = broadcast גלובלי\n\nטיפ:\nBroadcast = רמקול — הודעה לכולם ברשת בבת אחת.",
      en: "A broadcast address ends with 255 and is sent to all devices on the network.\n\nMain Points:\n- 192.168.1.255 = broadcast on 192.168.1.x network\n- 127.0.0.1 = localhost, send to self\n- 255.255.255.255 = global broadcast\n\nTip:\nBroadcast = loudspeaker — a message to everyone on the network at once."
    },
    {
      he: "Router מנתב בין רשתות שונות לפי IP, Switch מעביר פריימים בתוך רשת לפי MAC.\n\nעיקרי:\n- Router = שכבה 3, עובד עם IP\n- Switch = שכבה 2, עובד עם MAC\n- L3 Switch = משלב routing + switching\n\nטיפ:\nRouter = דואר בין ערים, Switch = שליח בתוך בניין.",
      en: "Router routes between different networks using IP, Switch forwards frames within a network using MAC.\n\nMain Points:\n- Router = Layer 3, works with IP\n- Switch = Layer 2, works with MAC\n- L3 Switch = combines routing + switching\n\nTip:\nRouter = mail between cities, Switch = courier inside a building."
    },
    {
      he: "TTL מגביל את מספר הנתבים שחבילה יכולה לעבור ומונע לולאות.\n\nעיקרי:\n- כל נתב מוריד TTL ב-1\n- TTL = 0 = חבילה נזרקת + ICMP Time Exceeded\n- traceroute משתמש ב-TTL כדי לגלות מסלול\n\nטיפ:\nTTL = מונה נסיעות — כשנגמר הדלק, החבילה עוצרת.",
      en: "TTL limits how many routers a packet can pass through and prevents loops.\n\nMain Points:\n- Each router decreases TTL by 1\n- TTL = 0 = packet dropped + ICMP Time Exceeded\n- traceroute uses TTL to discover the route\n\nTip:\nTTL = trip counter — when fuel runs out, the packet stops."
    },
    {
      he: "Longest Prefix Match בוחר את ה-route הכי ספציפי בטבלת הניתוב.\n\nעיקרי:\n- /24 מנצח /16 כי הוא יותר ספציפי\n- 0.0.0.0/0 = default route, אחרון בעדיפות\n- עיקרון מפתח בניתוב IP\n\nטיפ:\nLongest Prefix = ככל שהכתובת יותר מדויקת, היא מנצחת.",
      en: "Longest Prefix Match picks the most specific route in the routing table.\n\nMain Points:\n- /24 wins over /16 because it is more specific\n- 0.0.0.0/0 = default route, lowest priority\n- A key principle in IP routing\n\nTip:\nLongest Prefix = the more precise the address, the higher it wins."
    }
  ],
  8: [
    {
      he: "Switch שולח frame רק ליעד הנכון לפי MAC, Hub שולח לכולם.\n\nעיקרי:\n- Switch לומד כתובות MAC ושולח ממוקד\n- Hub מפיץ כל frame לכל הפורטים\n- Hub כמעט לא בשימוש כיום\n\nטיפ:\nSwitch = מכתב אישי, Hub = הודעה ברמקול.",
      en: "Switch sends a frame only to the right destination by MAC, Hub sends to everyone.\n\nMain Points:\n- Switch learns MAC addresses and sends targeted\n- Hub broadcasts every frame to all ports\n- Hubs are almost never used today\n\nTip:\nSwitch = personal letter, Hub = loudspeaker announcement."
    },
    {
      he: "MAC היא כתובת פיזית ייחודית של כרטיס רשת, בת 6 בתים.\n\nעיקרי:\n- נראית כך: AA:BB:CC:DD:EE:FF\n- שרופה ב-hardware של כרטיס הרשת\n- ניתן לשנות בתוכנה (MAC spoofing)\n\nטיפ:\nMAC = תעודת זהות של כרטיס הרשת — ייחודית ליצרן ולמכשיר.",
      en: "MAC is a unique physical address of a network card, 6 bytes long.\n\nMain Points:\n- Looks like: AA:BB:CC:DD:EE:FF\n- Burned into the network card hardware\n- Can be changed in software (MAC spoofing)\n\nTip:\nMAC = ID card of the network card — unique to the manufacturer and device."
    },
    {
      he: "ARP מוצא כתובת MAC של מכשיר לפי כתובת ה-IP שלו.\n\nעיקרי:\n- שולח broadcast: מי בעל IP זה?\n- המכשיר הנכון עונה עם ה-MAC שלו\n- התוצאה נשמרת ב-ARP table\n\nטיפ:\nARP = צועק בחדר מי זה? והנכון מרים יד.",
      en: "ARP finds the MAC address of a device given its IP address.\n\nMain Points:\n- Sends a broadcast: who has this IP?\n- The right device responds with its MAC\n- Result is cached in the ARP table\n\nTip:\nARP = shouts in a room who is this? and the right one raises their hand."
    },
    {
      he: "MAC = כתובת חומרה קבועה בשכבה 2, IP = כתובת לוגית משתנה בשכבה 3.\n\nעיקרי:\n- MAC = 48 bit, 24 bit ליצרן + 24 bit סידורי\n- IP = משתנה לפי הרשת שאליה מחוברים\n- ARP ממפה בין IP ל-MAC\n\nטיפ:\nMAC = שם שלך מלידה (קבוע), IP = כתובת מגורים (משתנה).",
      en: "MAC = fixed hardware address at Layer 2, IP = changeable logical address at Layer 3.\n\nMain Points:\n- MAC = 48 bits, 24 for manufacturer + 24 serial\n- IP = changes based on which network you join\n- ARP maps between IP and MAC\n\nTip:\nMAC = your birth name (fixed), IP = home address (changes when you move)."
    },
    {
      he: "Ethernet Frame כולל Preamble, כתובות MAC, EtherType, Payload ו-FCS.\n\nעיקרי:\n- Dest MAC + Src MAC = 12 bytes\n- EtherType: 0x0800 = IPv4, 0x0806 = ARP\n- Payload: 46-1500 bytes, FCS = checksum\n\nטיפ:\nFrame = מעטפה — כתובות בחוץ, תוכן בפנים, חותמת אימות בסוף.",
      en: "Ethernet Frame includes Preamble, MAC addresses, EtherType, Payload, and FCS.\n\nMain Points:\n- Dest MAC + Src MAC = 12 bytes\n- EtherType: 0x0800 = IPv4, 0x0806 = ARP\n- Payload: 46-1500 bytes, FCS = checksum\n\nTip:\nFrame = envelope — addresses on the outside, content inside, verification stamp at the end."
    },
    {
      he: "Broadcast Domain = כל מי שמקבל broadcast, Collision Domain = אזור התנגשויות.\n\nעיקרי:\n- Switch מפריד collision domains לפי port\n- Switch לא מפריד broadcast domain\n- Router מפריד broadcast domains\n\nטיפ:\nRouter = קיר בין חדרים, Switch = מחלק שולחנות בחדר.",
      en: "Broadcast Domain = everyone who gets a broadcast, Collision Domain = area of collisions.\n\nMain Points:\n- Switch separates collision domains per port\n- Switch does not separate broadcast domains\n- Router separates broadcast domains\n\nTip:\nRouter = wall between rooms, Switch = divides desks in a room."
    }
  ],
  9: [
    {
      he: "Hub משדר לכולם בשכבה 1, Switch שולח לפי MAC בשכבה 2, Router מנתב לפי IP בשכבה 3.\n\nעיקרי:\n- Hub = אין אינטליגנציה, collision domain אחד\n- Switch = לומד MAC, שולח לפורט הנכון\n- Router = מחבר רשתות, default gateway\n\nטיפ:\nHub = רמקול, Switch = שליח, Router = דואר בין ערים.",
      en: "Hub broadcasts to all at Layer 1, Switch sends by MAC at Layer 2, Router routes by IP at Layer 3.\n\nMain Points:\n- Hub = no intelligence, single collision domain\n- Switch = learns MAC, sends to correct port\n- Router = connects networks, acts as default gateway\n\nTip:\nHub = loudspeaker, Switch = courier, Router = post between cities."
    },
    {
      he: "VLAN מחלקת Switch פיזי לרשתות לוגיות נפרדות.\n\nעיקרי:\n- מבודדת תעבורה בין מחלקות (כספים, שיווק)\n- משפרת אבטחה ומצמצמת broadcast\n- תגית 802.1Q בת 12 bit, עד 4094 VLANs\n\nטיפ:\nVLAN = חדרים נפרדים באותו בניין — כל מחלקה לבד.",
      en: "VLAN divides a physical Switch into separate logical networks.\n\nMain Points:\n- Isolates traffic between departments (finance, marketing)\n- Improves security and reduces broadcast\n- 802.1Q tag is 12 bits, supports up to 4094 VLANs\n\nTip:\nVLAN = separate rooms in the same building — each department on its own."
    },
    {
      he: "Firewall מסננת תעבורה לפי חוקים ומחליטה אם להרשות או לחסום.\n\nעיקרי:\n- Packet Filter = בודק IP ופורט\n- Stateful = עוקב אחרי חיבורים\n- חוקים נבדקים מלמעלה למטה, first match wins\n\nטיפ:\nFirewall = שומר בכניסה — בודק רשימה ומחליט מי נכנס.",
      en: "Firewall filters traffic by rules and decides to allow or block.\n\nMain Points:\n- Packet Filter = checks IP and port\n- Stateful = tracks connections\n- Rules checked top-to-bottom, first match wins\n\nTip:\nFirewall = security guard — checks a list and decides who enters."
    },
    {
      he: "SDN מפרידה בין מישור הבקרה למישור הנתונים ומנהלת רשת מרכזית בתוכנה.\n\nעיקרי:\n- Control Plane = מוח שמחליט לאן לנתב\n- Data Plane = שרירים שמעבירים חבילות\n- ניהול מרכזי, אוטומציה ו-APIs\n\nטיפ:\nSDN = מנהל אחד שולט בכל הסוויצ'ים מרחוק.",
      en: "SDN separates the control plane from the data plane and manages the network centrally in software.\n\nMain Points:\n- Control Plane = brain that decides routing\n- Data Plane = muscles that forward packets\n- Central management, automation, and APIs\n\nTip:\nSDN = one manager controls all switches remotely."
    },
    {
      he: "Router ביתי משלב הכל במכשיר אחד, תעשייתי מפריד כל רכיב.\n\nעיקרי:\n- ביתי: Router + Switch + WiFi + Firewall + NAT\n- תעשייתי: רכיבים נפרדים, CLI, BGP, OSPF\n- תעשייתי תומך באלפי routes ו-redundancy\n\nטיפ:\nביתי = סכין שוויצרי, תעשייתי = סט כלים מקצועי.",
      en: "Home Router combines everything in one device, enterprise separates each component.\n\nMain Points:\n- Home: Router + Switch + WiFi + Firewall + NAT\n- Enterprise: separate components, CLI, BGP, OSPF\n- Enterprise supports thousands of routes and redundancy\n\nTip:\nHome = Swiss army knife, Enterprise = professional tool set."
    }
  ],
  10: [
    {
      he: "השכבה הפיזית ממירה bits לאותות פיזיים ובחזרה.\n\nעיקרי:\n- Ethernet = מתח חשמלי\n- Fiber = פולסים של אור\n- WiFi = גלי רדיו\n\nטיפ:\nשכבה פיזית = תרגום מ-0 ו-1 לעולם האמיתי.",
      en: "The Physical layer converts bits to physical signals and back.\n\nMain Points:\n- Ethernet = electrical voltage\n- Fiber = light pulses\n- WiFi = radio waves\n\nTip:\nPhysical layer = translating 0s and 1s into the real world."
    },
    {
      he: "Fiber optic משתמש באור והוא מהיר ועמיד, נחושת משתמש בחשמל.\n\nעיקרי:\n- Fiber מגיע ל-Terabits/sec\n- לא מושפע מהפרעות EMI\n- יקר יותר להתקנה מנחושת\n\nטיפ:\nFiber = כביש מהיר ללא פקקים, נחושת = כביש רגיל עם עומס.",
      en: "Fiber optic uses light and is fast and resilient, copper uses electricity.\n\nMain Points:\n- Fiber can reach Terabits/sec\n- Not affected by EMI interference\n- More expensive to install than copper\n\nTip:\nFiber = highway with no traffic, copper = regular road with congestion."
    },
    {
      he: "Full Duplex שולח ומקבל בו-זמנית, Half Duplex רק אחד בכל רגע.\n\nעיקרי:\n- Full Duplex = Switch, אין התנגשויות\n- Half Duplex = Hub, CSMA/CD פותר התנגשויות\n- WiFi = Half Duplex עם CSMA/CA\n\nטיפ:\nFull Duplex = שיחת טלפון, Half Duplex = ווקי-טוקי.",
      en: "Full Duplex sends and receives at the same time, Half Duplex only one at a time.\n\nMain Points:\n- Full Duplex = Switch, no collisions\n- Half Duplex = Hub, CSMA/CD resolves collisions\n- WiFi = Half Duplex with CSMA/CA\n\nTip:\nFull Duplex = phone call, Half Duplex = walkie-talkie."
    },
    {
      he: "WiFi (802.11) הוא תקן לרשת אלחוטית עם דורות שונים של מהירות.\n\nעיקרי:\n- WiFi 5 (802.11ac): עד 3.5Gbps ב-5GHz\n- WiFi 6 (802.11ax): עד 9.6Gbps, OFDMA\n- 2.4GHz = טווח ארוך, 5GHz = מהיר יותר\n\nטיפ:\n2.4 = רחוק אבל איטי, 5 = קרוב אבל מהיר.",
      en: "WiFi (802.11) is a wireless network standard with different speed generations.\n\nMain Points:\n- WiFi 5 (802.11ac): up to 3.5Gbps on 5GHz\n- WiFi 6 (802.11ax): up to 9.6Gbps, OFDMA\n- 2.4GHz = longer range, 5GHz = faster\n\nTip:\n2.4 = far but slow, 5 = close but fast."
    },
    {
      he: "PoE מספק חשמל דרך כבל ה-Ethernet ללא צורך בכבל חשמל נפרד.\n\nעיקרי:\n- 802.3af = 15W, 802.3at = 30W, 802.3bt = 90W\n- משמש למצלמות IP, WiFi AP, טלפוני IP\n- כבל אחד = נתונים + חשמל\n\nטיפ:\nPoE = כבל אחד שעושה הכל — חשמל ונתונים ביחד.",
      en: "PoE supplies power through the Ethernet cable without needing a separate power cable.\n\nMain Points:\n- 802.3af = 15W, 802.3at = 30W, 802.3bt = 90W\n- Used for IP cameras, WiFi APs, IP phones\n- One cable = data + power\n\nTip:\nPoE = one cable does everything — power and data together."
    }
  ],
  11: [
    {
      he: "כשמחשב שולח HTTP request, כל שכבה מוסיפה header והצד השני מסיר שכבה-שכבה.\n\nעיקרי:\n- App=HTTP, Transport=TCP, Network=IP, Link=MAC\n- Physical שולח הכל כ-bits\n- כל שכבה אחראית רק על עצמה\n\nטיפ:\nEncapsulation = עוטפים שכבה-שכבה, Decapsulation = פותחים שכבה-שכבה.",
      en: "When a computer sends an HTTP request, each layer adds a header and the other side removes them layer by layer.\n\nMain Points:\n- App=HTTP, Transport=TCP, Network=IP, Link=MAC\n- Physical sends everything as bits\n- Each layer is responsible only for itself\n\nTip:\nEncapsulation = wrapping layer by layer, Decapsulation = unwrapping layer by layer."
    },
    {
      he: "הסדר המלא: DNS, TCP handshake, TLS, HTTP request, תגובה ורינדור.\n\nעיקרי:\n- DNS מתרגם שם ל-IP\n- TCP SYN/SYN-ACK/ACK פותח חיבור\n- TLS מצפין, HTTP שולח בקשה ומקבל תגובה\n\nטיפ:\nDNS-TCP-TLS-HTTP = מצא-התחבר-הצפן-בקש. כל זה ב-milliseconds.",
      en: "The full order: DNS, TCP handshake, TLS, HTTP request, response, and rendering.\n\nMain Points:\n- DNS translates name to IP\n- TCP SYN/SYN-ACK/ACK opens the connection\n- TLS encrypts, HTTP sends request and gets response\n\nTip:\nDNS-TCP-TLS-HTTP = find-connect-encrypt-request. All in milliseconds."
    },
    {
      he: "CDN מגיש תוכן משרת קרוב גיאוגרפית במקום מהשרת המרכזי.\n\nעיקרי:\n- שרתי edge בעשרות ערים ברחבי העולם\n- Cache hit = תוכן מוגש מיידית\n- מפחית latency ועומס על שרת המקור\n\nטיפ:\nCDN = סניפים מקומיים — במקום לנסוע למרכז, קונים בסניף הקרוב.",
      en: "CDN serves content from a nearby server instead of the main server.\n\nMain Points:\n- Edge servers in dozens of cities worldwide\n- Cache hit = content served instantly\n- Reduces latency and load on the origin server\n\nTip:\nCDN = local branches — instead of going downtown, buy at the nearest branch."
    },
    {
      he: "ללא DNS, הדפדפן לא יכול לתרגם שמות לכתובות IP, אבל גישה ישירה ל-IP עובדת.\n\nעיקרי:\n- google.com לא יעבוד, 142.250.185.78 כן\n- פתרון: שנו DNS ל-8.8.8.8 או 1.1.1.1\n- אתרים ב-cache מקומי ימשיכו לעבוד זמנית\n\nטיפ:\nDNS למטה = ספר הטלפונים נעלם, אבל מי שזוכר מספרים עדיין מתקשר.",
      en: "Without DNS, the browser cannot translate names to IP addresses, but direct IP access works.\n\nMain Points:\n- google.com will fail, 142.250.185.78 will work\n- Solution: change DNS to 8.8.8.8 or 1.1.1.1\n- Sites in local cache will keep working temporarily\n\nTip:\nDNS is down = phone book is gone, but if you remember the number you can still call."
    },
    {
      he: "גלישה לדף אחד דורשת עשרות עד מאות חבילות.\n\nעיקרי:\n- DNS = 2, TCP handshake = 3, TLS = 4\n- כל תמונה, CSS ו-JS = בקשות נוספות\n- HTTP/2 חוסך עם multiplexing על חיבור אחד\n\nטיפ:\nדף אחד = 50-200 חבילות. הכל קורה כל כך מהר שלא מרגישים.",
      en: "Browsing one page requires tens to hundreds of packets.\n\nMain Points:\n- DNS = 2, TCP handshake = 3, TLS = 4\n- Each image, CSS, and JS = extra requests\n- HTTP/2 saves with multiplexing on one connection\n\nTip:\nOne page = 50-200 packets. It all happens so fast you do not notice."
    }
  ],
  12: [
    {
      he: "Non-blocking socket לא מקפיא את התוכנית בזמן המתנה לנתונים.\n\nעיקרי:\n- Blocking = מחכה ולא עושה כלום\n- Non-blocking = בודק ועובר הלאה\n- חיוני לשרת שמטפל בהרבה לקוחות\n\nטיפ:\nBlocking = עומד בתור, Non-blocking = משאיר מספר וחוזר אחר כך.",
      en: "A non-blocking socket does not freeze the program while waiting for data.\n\nMain Points:\n- Blocking = waits and does nothing\n- Non-blocking = checks and moves on\n- Essential for servers handling many clients\n\nTip:\nBlocking = standing in line, Non-blocking = leave your number and come back later."
    },
    {
      he: "select() מאפשרת לעקוב אחרי מספר sockets בו-זמנית בלי threads.\n\nעיקרי:\n- מחזירה רשימת sockets שמוכנים\n- פותרת את בעיית ה-blocking של recv()\n- חלופות מודרניות: poll(), epoll(), asyncio\n\nטיפ:\nselect() = מלצר שבודק איזה שולחן מוכן להזמין.",
      en: "select() lets you monitor multiple sockets at once without threads.\n\nMain Points:\n- Returns a list of sockets that are ready\n- Solves the blocking problem of recv()\n- Modern alternatives: poll(), epoll(), asyncio\n\nTip:\nselect() = a waiter checking which table is ready to order."
    },
    {
      he: "Threading מקצה thread נפרד לכל לקוח — קוד פשוט אבל יקר בזיכרון.\n\nעיקרי:\n- כל thread מריץ recv() חוסם בנפרד\n- קל לכתוב ולדבג\n- 10,000 threads = הרבה זיכרון ו-context switching\n\nטיפ:\nthread = עובד נפרד לכל לקוח. הרבה לקוחות = הרבה עובדים = יקר.",
      en: "Threading assigns a separate thread to each client — simple code but expensive in memory.\n\nMain Points:\n- Each thread runs blocking recv() independently\n- Easy to write and debug\n- 10,000 threads = lots of memory and context switching\n\nTip:\nThread = one worker per client. Many clients = many workers = expensive."
    },
    {
      he: "Length Prefix שולח את אורך ההודעה לפני ההודעה כי TCP הוא byte stream.\n\nעיקרי:\n- TCP לא שומר גבולות בין הודעות\n- send(Hello)+send(World) יכול להגיע כ-HelloWorld\n- השולח כותב [5]Hello[5]World\n\nטיפ:\nLength Prefix = מספר עמודים בתחילת הפרק, כדי לדעת איפה הוא נגמר.",
      en: "Length Prefix sends the message length before the message because TCP is a byte stream.\n\nMain Points:\n- TCP does not keep boundaries between messages\n- send(Hello)+send(World) may arrive as HelloWorld\n- Sender writes [5]Hello[5]World\n\nTip:\nLength Prefix = page count at the start of a chapter so you know where it ends."
    },
    {
      he: "asyncio מריץ תכנות אסינכרוני ב-thread אחד עם event loop.\n\nעיקרי:\n- משתמש ב-async/await במקום threads\n- thread אחד = פחות זיכרון, אין race conditions\n- מתאים ל-I/O כבד עם אלפי חיבורים\n\nטיפ:\nasyncio = שף אחד שמנהל הרבה סירים — עובר ביניהם בנקודות await.",
      en: "asyncio runs asynchronous programming in a single thread with an event loop.\n\nMain Points:\n- Uses async/await instead of threads\n- One thread = less memory, no race conditions\n- Great for heavy I/O with thousands of connections\n\nTip:\nasyncio = one chef managing many pots — switches between them at await points."
    }
  ],
  13: [
    {
      he: "Latency = זמן שלוקח לחבילה להגיע, Bandwidth = כמות נתונים לשנייה.\n\nעיקרי:\n- Gaming רוצה latency נמוכה\n- YouTube רוצה bandwidth גבוה\n- שניהם חשובים אבל מודדים דברים שונים\n\nטיפ:\nBandwidth = רוחב הצינור, Latency = כמה זמן לטיפה להגיע.",
      en: "Latency = time it takes a packet to arrive, Bandwidth = amount of data per second.\n\nMain Points:\n- Gaming wants low latency\n- YouTube wants high bandwidth\n- Both matter but measure different things\n\nTip:\nBandwidth = pipe width, Latency = how long a drop takes to arrive."
    },
    {
      he: "Bandwidth הוא קיבולת מקסימלית תיאורטית, Throughput הוא מה שעובר בפועל.\n\nעיקרי:\n- Bandwidth = 100Mbps, Throughput = 85Mbps\n- הפער נגרם מ-overhead, עומס ואיבוד חבילות\n- Goodput = throughput מינוס overhead\n\nטיפ:\nBandwidth = רוחב הכביש, Throughput = כמה מכוניות באמת עוברות.",
      en: "Bandwidth is maximum theoretical capacity, Throughput is what actually passes.\n\nMain Points:\n- Bandwidth = 100Mbps, Throughput = 85Mbps\n- Gap caused by overhead, congestion, and packet loss\n- Goodput = throughput minus overhead\n\nTip:\nBandwidth = road width, Throughput = how many cars actually drive through."
    },
    {
      he: "Proxy Server הוא שרת ביניים שמעביר בקשות מלקוח לשרת יעד.\n\nעיקרי:\n- Forward Proxy = מסתיר את הלקוח\n- Reverse Proxy = מגן על השרתים (Nginx, HAProxy)\n- מאפשר cache, סינון וload balancing\n\nטיפ:\nForward Proxy = שליח שקונה בשבילך, Reverse Proxy = שומר בכניסה לשרתים.",
      en: "A Proxy Server is a middle server that forwards requests from client to target server.\n\nMain Points:\n- Forward Proxy = hides the client\n- Reverse Proxy = protects the servers (Nginx, HAProxy)\n- Enables caching, filtering, and load balancing\n\nTip:\nForward Proxy = someone who shops for you, Reverse Proxy = guard at the server entrance."
    },
    {
      he: "LAN היא רשת מקומית קטנה, WAN היא רשת רחבה בין ערים ומדינות.\n\nעיקרי:\n- LAN = משרד, בית, Ethernet/WiFi, 1-10 Gbps\n- WAN = בין ערים, האינטרנט הוא ה-WAN הגדול\n- SD-WAN מנהלת WAN בתוכנה\n\nטיפ:\nLAN = שכונה, WAN = כביש בין ערים. האינטרנט = כל הכבישים ביחד.",
      en: "LAN is a small local network, WAN is a wide network between cities and countries.\n\nMain Points:\n- LAN = office, home, Ethernet/WiFi, 1-10 Gbps\n- WAN = between cities, the internet is the largest WAN\n- SD-WAN manages WAN in software\n\nTip:\nLAN = neighborhood, WAN = highway between cities. The internet = all highways combined."
    }
  ]
};

// Now apply changes to the file content using regex replacements
// We need to replace each explanation and explanationEn field for chapters 1-13

for (const [chapterStr, questions] of Object.entries(newExplanations)) {
  const chapter = parseInt(chapterStr);
  const bankQuestions = quizBank[chapter];

  if (!bankQuestions) {
    console.error(`Chapter ${chapter} not found in quizBank`);
    continue;
  }

  if (bankQuestions.length !== questions.length) {
    console.error(`Chapter ${chapter}: expected ${questions.length} questions, got ${bankQuestions.length}`);
    continue;
  }

  for (let i = 0; i < questions.length; i++) {
    const oldHe = bankQuestions[i].explanation;
    const oldEn = bankQuestions[i].explanationEn;
    const newHe = questions[i].he;
    const newEn = questions[i].en;

    // Escape for use in string replacement
    const oldHeEscaped = JSON.stringify(oldHe);
    const oldEnEscaped = JSON.stringify(oldEn);
    const newHeEscaped = JSON.stringify(newHe);
    const newEnEscaped = JSON.stringify(newEn);

    // Replace explanation field
    const hePattern = `explanation: ${oldHeEscaped}`;
    const heReplacement = `explanation: ${newHeEscaped}`;

    if (content.includes(hePattern)) {
      content = content.replace(hePattern, heReplacement);
    } else {
      console.error(`Chapter ${chapter}, Q${i+1}: Could not find Hebrew explanation pattern`);
      console.error(`  Looking for: ${hePattern.substring(0, 80)}...`);
    }

    // Replace explanationEn field
    const enPattern = `explanationEn: ${oldEnEscaped}`;
    const enReplacement = `explanationEn: ${newEnEscaped}`;

    if (content.includes(enPattern)) {
      content = content.replace(enPattern, enReplacement);
    } else {
      console.error(`Chapter ${chapter}, Q${i+1}: Could not find English explanation pattern`);
      console.error(`  Looking for: ${enPattern.substring(0, 80)}...`);
    }
  }
}

// Write the modified content
writeFileSync(filePath, content, 'utf8');
console.log('File written successfully.');

// Verify it parses correctly
const verifyContent = readFileSync(filePath, 'utf8');
const verifyStripped = verifyContent.replace(/\/\*[\s\S]*?\*\//g, '').replace(/export\s+const\s+quizBank\s*=\s*/, '').replace(/;\s*$/, '');
try {
  const verifyBank = new Function('return (' + verifyStripped + ')')();
  let totalQuestions = 0;
  for (let ch = 1; ch <= 13; ch++) {
    const qs = verifyBank[ch];
    if (!qs) { console.error(`Verification: Chapter ${ch} missing!`); continue; }
    totalQuestions += qs.length;
    for (let i = 0; i < qs.length; i++) {
      const q = qs[i];
      if (!q.explanation.includes('\\n') && !q.explanation.includes('\n')) {
        // Check it has the new format markers
      }
      if (!q.explanationEn.includes('\\n') && !q.explanationEn.includes('\n')) {
        // Check it has the new format markers
      }
    }
  }
  console.log(`Verification passed: ${totalQuestions} questions in chapters 1-13 parsed correctly.`);

  // Verify new format
  let heOk = 0, enOk = 0;
  for (let ch = 1; ch <= 13; ch++) {
    for (const q of verifyBank[ch]) {
      if (q.explanation.includes('\u05e2\u05d9\u05e7\u05e8\u05d9:')) heOk++; // עיקרי
      if (q.explanationEn.includes('Main Points:')) enOk++;
    }
  }
  console.log(`Hebrew format verified: ${heOk}/${totalQuestions} have 'עיקרי:'`);
  console.log(`English format verified: ${enOk}/${totalQuestions} have 'Main Points:'`);

} catch (e) {
  console.error('Verification FAILED:', e.message);
}
