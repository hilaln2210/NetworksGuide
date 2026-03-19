/**
 * בנק שאלות לחידון הרשתות
 * כל שאלה: { q, correct, choices: [4 options], explanation }
 */

export const quizBank = {
  1: [
    {
      q: "\u200Fמה ההבדל בין IP לבין פורט?",
      correct: "\u200FIP = מזהה מחשב ברשת\nפורט = מזהה שירות/תוכנה על אותו מחשב",
      choices: [
        "\u200FIP = מזהה מחשב ברשת\nפורט = מזהה שירות/תוכנה על אותו מחשב",
        "\u200FIP מזהה שירות\nפורט מזהה מחשב",
        "\u200Fשניהם מזהים מחשבים\nההבדל הוא בגודל",
        "\u200FIP הוא לאינטרנט\nפורט הוא לרשת מקומית בלבד"
      ],
      explanation: "\u200F🏠 אנלוגיה:\n• IP = כתובת הבניין\n• פורט = מספר הדירה\n\nדוגמה:\n• בניין 192.168.1.1\n• דירה 443 (HTTPS)\n• דירה 80 (HTTP)",
      qEn: "What is the difference between IP and Port?",
      correctEn: "IP = identifies a computer on the network\nPort = identifies a service/program on that computer",
      choicesEn: [
        "IP = identifies a computer on the network\nPort = identifies a service/program on that computer",
        "IP identifies a service\nPort identifies a computer",
        "Both identify computers\nThe difference is in size",
        "IP is for the internet\nPort is for local network only"
      ]
    },
    {
      q: "\u200Fמה עושה פקודת ping?",
      correct: "\u200Fשולחת בקשת הד לכתובת IP\nומודדת זמן תגובה",
      choices: [
        "\u200Fשולחת בקשת הד לכתובת IP\nומודדת זמן תגובה",
        "\u200Fמתרגמת שם דומיין לכתובת IP",
        "\u200Fמציגה את מסלול החבילה ברשת",
        "\u200Fפותחת חיבור TCP עם שרת"
      ],
      explanation: "\u200F🏓 ping — בדיקה אם שרת חי\n\n• שולח חבילת ICMP ומחכה לתגובה\n• אם השרת עונה — הוא חי\n• הזמן ב-ms מראה כמה ״רחוק״ הוא ממך",
      qEn: "What does the ping command do?",
      correctEn: "Sends an echo request to an IP address\nand measures response time",
      choicesEn: [
        "Sends an echo request to an IP address\nand measures response time",
        "Translates a domain name to an IP address",
        "Shows the path of a packet through the network",
        "Opens a TCP connection with a server"
      ]
    },
    {
      q: "\u200Fמה עושה DNS?",
      correct: "\u200Fמתרגם שם דומיין (כמו google.com)\nלכתובת IP",
      choices: [
        "\u200Fמתרגם שם דומיין (כמו google.com)\nלכתובת IP",
        "\u200Fמצפין את התקשורת\nבין לקוח לשרת",
        "\u200Fמנהל חיבורי TCP\nומבטיח הגעת חבילות",
        "\u200Fמקצה כתובות IP לפי בקשה"
      ],
      explanation: "\u200F📖 DNS — ספר הטלפונים של האינטרנט\n\n• אנחנו זוכרים: google.com\n• המחשב צריך: 142.250.185.206\n• DNS עושה את התרגום ביניהם",
      qEn: "What does DNS do?",
      correctEn: "Translates a domain name (like google.com)\nto an IP address",
      choicesEn: [
        "Translates a domain name (like google.com)\nto an IP address",
        "Encrypts the communication\nbetween client and server",
        "Manages TCP connections\nand ensures packet delivery",
        "Assigns IP addresses on request"
      ]
    },
    {
      q: "\u200Fמה זה traceroute?",
      correct: "\u200Fכלי שמציג את כל הקפיצות (hops)\nשחבילה עוברת עד ליעד",
      choices: [
        "\u200Fכלי שמציג את כל הקפיצות (hops)\nשחבילה עוברת עד ליעד",
        "\u200Fכלי שבודק אם פורט מסוים פתוח",
        "\u200Fכלי שמציג את כתובות ה-IP\nברשת המקומית",
        "\u200Fכלי שמנתח מצב חיבור ה-WiFi"
      ],
      explanation: "\u200F🌍 traceroute — מפת המסלול ברשת\n\n• מראה כל נתב (hop) שהחבילה עוברת\n• מהמחשב שלך ועד לשרת היעד\n• בדרך כלל 15-20 קפיצות לשרת בחו״ל\n• מדהים שזה לוקח פחות משנייה!",
      qEn: "What is traceroute?",
      correctEn: "A tool that shows all the hops\na packet passes through to reach its destination",
      choicesEn: [
        "A tool that shows all the hops\na packet passes through to reach its destination",
        "A tool that checks if a specific port is open",
        "A tool that shows IP addresses\non the local network",
        "A tool that analyzes WiFi connection status"
      ]
    },
    {
      q: "\u200Fכתובת IP תקינה מבין האפשרויות הבאות היא:",
      correct: "192.168.1.255",
      choices: [
        "192.168.1.255",
        "300.168.1.1",
        "192.168.1",
        "192:168:1:1"
      ],
      explanation: "\u200F🔢 כללי כתובת IPv4:\n\n• 4 מספרים מופרדים בנקודות\n• כל מספר בטווח 0–255\n\nלמה השאר שגויות:\n• 300 — מחוץ לטווח\n• 192.168.1 — חסר מספר רביעי\n• 192:168:1:1 — נקודותיים זה IPv6, לא IPv4",
      qEn: "Which of the following is a valid IP address?",
      correctEn: "192.168.1.255",
      choicesEn: [
        "192.168.1.255",
        "300.168.1.1",
        "192.168.1",
        "192:168:1:1"
      ]
    },
    {
      q: "\u200Fמי הוא ״לקוח״ ומי ״שרת״ כשאת פותחת את Gmail?",
      correct: "\u200Fהדפדפן שלך = לקוח\nשרתי Google = שרת",
      choices: [
        "\u200Fהדפדפן שלך = לקוח\nשרתי Google = שרת",
        "\u200Fשרתי Google = לקוח\nהדפדפן שלך = שרת",
        "\u200Fשניהם לקוחות של ספקית האינטרנט",
        "\u200Fתלוי אם שולחים או מקבלים מייל"
      ],
      explanation: "\u200F✉️ לקוח ושרת:\n\n• הלקוח תמיד מתחיל את הבקשה\n• את שולחת ״תני לי מיילים״\n  → הדפדפן = לקוח\n• Google עונה לבקשה\n  → היא השרת",
      qEn: "Who is the \"client\" and who is the \"server\" when you open Gmail?",
      correctEn: "Your browser = client\nGoogle servers = server",
      choicesEn: [
        "Your browser = client\nGoogle servers = server",
        "Google servers = client\nYour browser = server",
        "Both are clients of the internet provider",
        "It depends on whether you send or receive email"
      ]
    }
  ],

  2: [
    {
      q: "\u200Fמה תפקיד ה-Socket בתכנות רשתות?",
      correct: "\u200Fממשק תכנותי שמאפשר לתוכנה\nלשלוח ולקבל נתונים דרך הרשת",
      choices: [
        "\u200Fממשק תכנותי שמאפשר לתוכנה\nלשלוח ולקבל נתונים דרך הרשת",
        "\u200Fשקע פיזי בגב המחשב\nלחיבור כבל רשת",
        "\u200Fפרוטוקול הצפנה לאבטחת תקשורת",
        "\u200Fשכבת האפליקציה במודל TCP/IP"
      ],
      explanation: "\u200F🔌 Socket — ״שקע תכנותי״\n\n• כשאת כותבת קוד שמתחבר לשרת\n  את יוצרת Socket\n• מתחברת ל-IP + פורט\n\nכמו תקע בחשמל — מחבר את התוכנה לרשת",
      qEn: "What is the role of a Socket in network programming?",
      correctEn: "A programming interface that allows a program\nto send and receive data over the network",
      choicesEn: [
        "A programming interface that allows a program\nto send and receive data over the network",
        "A physical port on the back of the computer\nfor connecting a network cable",
        "An encryption protocol for secure communication",
        "The application layer in the TCP/IP model"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין bind() ל-connect() בתכנות Sockets?",
      correct: "\u200Fbind() = מגדיר פורט להאזנה (שרת)\nconnect() = מתחבר לשרת (לקוח)",
      choices: [
        "\u200Fbind() = מגדיר פורט להאזנה (שרת)\nconnect() = מתחבר לשרת (לקוח)",
        "\u200Fbind() מצפין חיבור\nconnect() פותח חיבור",
        "\u200Fשניהם פועלים אותו דבר\nרק בסדר שונה",
        "\u200Fbind() ל-TCP\nconnect() ל-UDP"
      ],
      explanation: "\u200F🏪 צד השרת:\n• bind() + listen() + accept()\n• ״אני מחכה בפורט 8080״\n\n🚶 צד הלקוח:\n• connect()\n• ״אני מתחבר לשרת״\n\nכמו עסק שפותח דלת — ולקוח שנכנס",
      qEn: "What is the difference between bind() and connect() in Socket programming?",
      correctEn: "bind() = sets a port to listen on (server)\nconnect() = connects to a server (client)",
      choicesEn: [
        "bind() = sets a port to listen on (server)\nconnect() = connects to a server (client)",
        "bind() encrypts a connection\nconnect() opens a connection",
        "Both do the same thing\njust in a different order",
        "bind() is for TCP\nconnect() is for UDP"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין 127.0.0.1 ל-0.0.0.0 בתכנות Sockets?",
      correct: "\u200F127.0.0.1 = loopback, רק המכשיר המקומי\n0.0.0.0 = מאזין על כל ה-interfaces",
      choices: [
        "\u200F127.0.0.1 = loopback, רק המכשיר המקומי\n0.0.0.0 = מאזין על כל ה-interfaces",
        "\u200F127.0.0.1 לאינטרנט, 0.0.0.0 לרשת מקומית",
        "\u200Fשניהם זהים — מתייחסים למחשב המקומי",
        "\u200F0.0.0.0 = ברודקאסט, 127.0.0.1 = unicast"
      ],
      explanation: "\u200F🏠 127.0.0.1 (localhost):\n• loopback interface\n• traffic לא יוצא מהמכשיר\n• שימושי לפיתוח ובדיקות\n\n🌐 0.0.0.0:\n• bind על כל interfaces (WiFi, Ethernet, loopback)\n• שרת שמאזין על 0.0.0.0 נגיש מכל הרשתות\n\n📌 דוגמה:\n• server.bind(('0.0.0.0', 8080)) = כולם יכולים להתחבר\n• server.bind(('127.0.0.1', 8080)) = רק מהמכשיר עצמו",
      explanationEn: "127.0.0.1 (localhost) is the loopback interface — traffic never leaves the machine, useful for development. 0.0.0.0 means bind to all interfaces (WiFi, Ethernet, loopback). A server on 0.0.0.0 is accessible from all networks. server.bind(('0.0.0.0', 8080)) allows connections from anywhere; server.bind(('127.0.0.1', 8080)) only from the local machine.",
      qEn: "What is the difference between 127.0.0.1 and 0.0.0.0 in Socket programming?",
      correctEn: "127.0.0.1 = loopback, only the local machine\n0.0.0.0 = listens on all interfaces",
      choicesEn: [
        "127.0.0.1 = loopback, only the local machine\n0.0.0.0 = listens on all interfaces",
        "127.0.0.1 for internet, 0.0.0.0 for local network",
        "Both are the same — they refer to the local computer",
        "0.0.0.0 = broadcast, 127.0.0.1 = unicast"
      ]
    },
    {
      q: "\u200Fמה מודל שרת-לקוח (Client-Server) בתכנות רשתות?",
      correct: "\u200Fהשרת מאזין ומחכה לחיבורים\nהלקוח יוזם חיבור לשרת\nכל צד משתמש ב-Socket לתקשורת",
      choices: [
        "\u200Fהשרת מאזין ומחכה לחיבורים\nהלקוח יוזם חיבור לשרת\nכל צד משתמש ב-Socket לתקשורת",
        "\u200Fהשרת והלקוח מתחברים בו-זמנית זה לזה",
        "\u200Fרק שרתים משתמשים ב-Sockets, לקוחות לא",
        "\u200Fהלקוח מאזין והשרת מתחבר"
      ],
      explanation: "\u200F🖥️ Server:\n• socket() → bind() → listen() → accept()\n• ממתין לחיבורים נכנסים\n• accept() מחזיר socket חדש לכל לקוח\n\n💻 Client:\n• socket() → connect()\n• יוזם חיבור לכתובת ופורט של השרת\n\n🔗 לאחר חיבור:\n• שני הצדדים משתמשים ב-send() ו-recv()\n• תקשורת דו-כיוונית דרך ה-Socket",
      explanationEn: "Server: socket() → bind() → listen() → accept() — waits for incoming connections. accept() returns a new socket for each client. Client: socket() → connect() — initiates connection to server address and port. After connection, both sides use send() and recv() for bidirectional communication through the Socket.",
      qEn: "What is the Client-Server model in network programming?",
      correctEn: "The server listens and waits for connections\nThe client starts a connection to the server\nBoth sides use a Socket to communicate",
      choicesEn: [
        "The server listens and waits for connections\nThe client starts a connection to the server\nBoth sides use a Socket to communicate",
        "The server and client connect to each other at the same time",
        "Only servers use Sockets, clients do not",
        "The client listens and the server connects"
      ]
    },
    {
      q: "\u200Fמה שרת הדים (Echo Server) ולמה הוא שימושי ללמידה?",
      correct: "\u200Fשרת שמחזיר ללקוח בדיוק את מה ששלח\nמשמש לבדיקת תקשורת\nולהבנת זרימת נתונים ב-Socket",
      choices: [
        "\u200Fשרת שמחזיר ללקוח בדיוק את מה ששלח\nמשמש לבדיקת תקשורת\nולהבנת זרימת נתונים ב-Socket",
        "\u200Fשרת שמנגן צליל חזרה לכל הודעה",
        "\u200Fשרת שמעביר הודעות בין שני לקוחות",
        "\u200Fשרת שמצפין את ההודעה ומחזיר מוצפנת"
      ],
      explanation: "\u200F🔁 Echo Server:\n• מקבל נתונים מהלקוח\n• שולח בחזרה את אותם הנתונים\n• הלקוח רואה שהתקשורת עובדת\n\n📋 קוד פשוט:\n• data = conn.recv(1024)\n• conn.sendall(data)\n\n🎓 למה חשוב?\n• הפרויקט הראשון בתכנות רשתות\n• מוכיח שהחיבור עובד end-to-end\n• בסיס לבניית שרתים מורכבים יותר",
      explanationEn: "Echo Server receives data from the client and sends back the exact same data. The client sees that communication works. Simple code: data = conn.recv(1024); conn.sendall(data). It is the first network programming project, proves end-to-end connection works, and serves as a foundation for building more complex servers.",
      qEn: "What is an Echo Server and why is it useful for learning?",
      correctEn: "A server that sends back exactly what the client sent\nUsed to test communication\nand understand data flow in a Socket",
      choicesEn: [
        "A server that sends back exactly what the client sent\nUsed to test communication\nand understand data flow in a Socket",
        "A server that plays a sound back for every message",
        "A server that forwards messages between two clients",
        "A server that encrypts the message and returns it encrypted"
      ]
    }
  ],

  3: [
    {
      q: "\u200Fכמה שכבות יש במודל TCP/IP?",
      correct: "\u200F5 שכבות:\nפיזית, קו, רשת, תעבורה, אפליקציה",
      choices: [
        "\u200F5 שכבות:\nפיזית, קו, רשת, תעבורה, אפליקציה",
        "\u200F7 שכבות:\nפיזית, קו, רשת, תעבורה, session, presentation, אפליקציה",
        "\u200F4 שכבות:\nקו, רשת, תעבורה, אפליקציה",
        "\u200F3 שכבות:\nחומרה, תוכנה, אפליקציה"
      ],
      explanation: "\u200F📚 מודל TCP/IP = 5 שכבות\n(מודל OSI = 7 שכבות)\n\nמלמטה למעלה:\n• 1 — פיזית (חוטים, אותות)\n• 2 — קו (MAC)\n• 3 — רשת (IP)\n• 4 — תעבורה (TCP/UDP)\n• 5 — אפליקציה (HTTP, DNS)",
      qEn: "How many layers does the TCP/IP model have?",
      correctEn: "5 layers:\nPhysical, Link, Network, Transport, Application",
      choicesEn: [
        "5 layers:\nPhysical, Link, Network, Transport, Application",
        "7 layers:\nPhysical, Link, Network, Transport, Session, Presentation, Application",
        "4 layers:\nLink, Network, Transport, Application",
        "3 layers:\nHardware, Software, Application"
      ]
    },
    {
      q: "\u200Fמה Wireshark מאפשר לעשות?",
      correct: "\u200Fלתפוס ולנתח חבילות נתונים\nשעוברות בממשק הרשת",
      choices: [
        "\u200Fלתפוס ולנתח חבילות נתונים\nשעוברות בממשק הרשת",
        "\u200Fלשלוח חבילות מותאמות אישית לרשת",
        "\u200Fלנהל כתובות IP ברשת מקומית",
        "\u200Fלהגן על הרשת מפני פריצות"
      ],
      explanation: "\u200F🔬 Wireshark — מיקרוסקופ של הרשת\n\n• תופס כל חבילה שעוברת\n• מציג בפירוט מלא:\n  שכבה, header, כל byte\n• לא שולח — רק מנתח",
      qEn: "What does Wireshark allow you to do?",
      correctEn: "Capture and analyze data packets\nthat pass through the network interface",
      choicesEn: [
        "Capture and analyze data packets\nthat pass through the network interface",
        "Send custom packets to the network",
        "Manage IP addresses on the local network",
        "Protect the network from attacks"
      ]
    },
    {
      q: "\u200Fמה זה Encapsulation (אנקפסולציה)?",
      correct: "\u200Fתהליך עטיפת הנתונים ב-header\nשל כל שכבה בדרך לשליחה",
      choices: [
        "\u200Fתהליך עטיפת הנתונים ב-header\nשל כל שכבה בדרך לשליחה",
        "\u200Fתהליך הצפנת הנתונים לפני שליחה",
        "\u200Fתהליך חלוקת הנתונים לחבילות קטנות",
        "\u200Fתהליך דחיסת הנתונים לחסכון ברוחב פס"
      ],
      explanation: "\u200F📦 כמו מכתב:\n• תוכן → בתוך מעטפה\n• מעטפה → בתוך שק דואר\n• שק → בתוך משאית\n\nכל שכבה ״עוטפת״ את שכבת מעליה\n\nDecapsulation = ההפך\nפותחים שכבה אחרי שכבה בהגעה",
      qEn: "What is Encapsulation?",
      correctEn: "The process of wrapping data in a header\nfrom each layer before sending",
      choicesEn: [
        "The process of wrapping data in a header\nfrom each layer before sending",
        "The process of encrypting data before sending",
        "The process of splitting data into small packets",
        "The process of compressing data to save bandwidth"
      ]
    },
    {
      q: "\u200Fאיזה header מוסיפה שכבת הרשת?",
      correct: "\u200Fכתובות IP — מקור ויעד",
      choices: [
        "\u200Fכתובות IP — מקור ויעד",
        "\u200Fכתובות MAC — מקור ויעד",
        "\u200Fפורטים — מקור ויעד",
        "\u200Fשם דומיין — מקור ויעד"
      ],
      explanation: "\u200F🎯 כל שכבה מוסיפה header משלה:\n\n• שכבת תעבורה → פורטים\n• שכבת רשת → כתובות IP\n• שכבת קו → כתובות MAC\n\nכל שכבה ״דואגת״ לתחום שלה",
      qEn: "Which header does the Network layer add?",
      correctEn: "IP addresses — source and destination",
      choicesEn: [
        "IP addresses — source and destination",
        "MAC addresses — source and destination",
        "Ports — source and destination",
        "Domain name — source and destination"
      ]
    },
    {
      q: "\u200Fמה שמות החבילות בכל שכבה?",
      correct: "\u200Fתעבורה: Segment\nרשת: Packet\nקו: Frame\nפיזית: Bit",
      choices: [
        "\u200Fתעבורה: Segment\nרשת: Packet\nקו: Frame\nפיזית: Bit",
        "\u200Fכולן נקראות Packet",
        "\u200Fתעבורה: Frame\nרשת: Segment",
        "\u200FSegment ו-Packet זהים\nשניהם שמות לנתונים עטופים"
      ],
      explanation: "\u200F📋 PDU — שם החבילה בכל שכבה:\n\n• שכבה 5 (אפליקציה): Data\n• שכבה 4 (תעבורה): Segment\n• שכבה 3 (רשת): Packet\n• שכבה 2 (קו): Frame\n• שכבה 1 (פיזית): Bit\n\nכל שכבה עוטפת את ה-PDU של מעליה",
      qEn: "What are the packet names at each layer?",
      correctEn: "Transport: Segment\nNetwork: Packet\nLink: Frame\nPhysical: Bit",
      choicesEn: [
        "Transport: Segment\nNetwork: Packet\nLink: Frame\nPhysical: Bit",
        "All are called Packet",
        "Transport: Frame\nNetwork: Segment",
        "Segment and Packet are the same\nboth are names for wrapped data"
      ]
    },
    {
      q: "\u200Fמה הפילטר ב-Wireshark להצגת HTTP בלבד?",
      correct: "\u200Fhttp",
      choices: [
        "\u200Fhttp",
        "\u200Fport == 80",
        "\u200Ftcp.port == 80",
        "\u200Fprotocol == HTTP"
      ],
      explanation: "\u200F🔍 פילטרים שימושיים ב-Wireshark:\n\n• http — תעבורת HTTP בלבד\n• http.request — רק בקשות\n• http.response.code == 200 — רק תגובות מוצלחות\n• tcp.port == 80 — הכל על פורט 80\n• tls — לחיצת יד HTTPS\n  (התוכן מוצפן, לא ניתן לקרוא)",
      qEn: "What is the Wireshark filter to show only HTTP?",
      correctEn: "http",
      choicesEn: [
        "http",
        "port == 80",
        "tcp.port == 80",
        "protocol == HTTP"
      ]
    },
    {
      q: "\u200Fמה Decapsulation בקבלת חבילה?",
      correct: "\u200Fהסרת headers בסדר הפוך:\nקו → רשת → תעבורה → אפליקציה",
      choices: [
        "\u200Fהסרת headers בסדר הפוך:\nקו → רשת → תעבורה → אפליקציה",
        "\u200Fפתיחת החבילה כולה בבת אחת",
        "\u200FDecapsulation מתבצע רק ב-router",
        "\u200Fהוספת header נוסף לכל שכבה"
      ],
      explanation: "\u200F📭 Decapsulation — ההפך מ-Encapsulation:\n\n• כרטיס הרשת קורא Frame (שכבה 2)\n• מוציא Packet → מעביר ל-IP (שכבה 3)\n• מוציא Segment → מעביר ל-TCP (שכבה 4)\n• מוציא Data → מעביר לאפליקציה\n\nכל שכבה בודקת את ה-header שלה\nלפני שמעבירה הלאה",
      qEn: "What is Decapsulation when receiving a packet?",
      correctEn: "Removing headers in reverse order:\nLink -> Network -> Transport -> Application",
      choicesEn: [
        "Removing headers in reverse order:\nLink -> Network -> Transport -> Application",
        "Opening the entire packet at once",
        "Decapsulation happens only in a router",
        "Adding an extra header at each layer"
      ]
    }
  ],

  4: [
    {
      q: "\u200Fמהו פרוטוקול HTTP ובאיזו שכבה הוא פועל?",
      correct: "\u200Fפרוטוקול להעברת דפי אינטרנט\nפועל בשכבת האפליקציה (השכבה העליונה)",
      choices: [
        "\u200Fפרוטוקול להעברת דפי אינטרנט\nפועל בשכבת האפליקציה (השכבה העליונה)",
        "\u200Fפרוטוקול להצפנת תקשורת\nפועל בשכבת התעבורה",
        "\u200Fפרוטוקול לניהול כתובות IP\nפועל בשכבת הרשת",
        "\u200Fפרוטוקול להעברת קבצים\nפועל בשכבת הקו"
      ],
      explanation: "\u200F🌐 HTTP — פרוטוקול העברת היפרטקסט\n\nכשאת פותחת אתר:\n• הדפדפן שולח בקשת GET\n• השרת מחזיר דף HTML\n\nזה הבסיס של כל גלישה באינטרנט",
      qEn: "What is HTTP and which layer does it work on?",
      correctEn: "A protocol for transferring web pages\nWorks on the Application layer (the top layer)",
      choicesEn: [
        "A protocol for transferring web pages\nWorks on the Application layer (the top layer)",
        "A protocol for encrypting communication\nWorks on the Transport layer",
        "A protocol for managing IP addresses\nWorks on the Network layer",
        "A protocol for transferring files\nWorks on the Link layer"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין בקשת GET לבקשת POST?",
      correct: "\u200FGET = מביאה מידע מהשרת\nPOST = שולחת מידע לשרת",
      choices: [
        "\u200FGET = מביאה מידע מהשרת\nPOST = שולחת מידע לשרת",
        "\u200FGET מוצפנת\nPOST לא מוצפנת",
        "\u200FGET לדפדפן בלבד\nPOST לאפליקציות מובייל",
        "\u200FGET תמיד מהירה יותר\nPOST אמינה יותר"
      ],
      explanation: "\u200F📖 GET — ״תני לי את הדף״\n📝 POST — ״הנה הנתונים שמילאתי בטופס״\n\nדוגמה:\n• נרשמת לאתר = בקשת POST\n  (שם משתמש + סיסמה)\n• גולשת לדף = בקשת GET",
      qEn: "What is the difference between GET and POST requests?",
      correctEn: "GET = gets information from the server\nPOST = sends information to the server",
      choicesEn: [
        "GET = gets information from the server\nPOST = sends information to the server",
        "GET is encrypted\nPOST is not encrypted",
        "GET is for browsers only\nPOST is for mobile apps",
        "GET is always faster\nPOST is more reliable"
      ]
    },
    {
      q: "\u200Fמה אומר קוד תגובה 404?",
      correct: "\u200Fהדף או המשאב המבוקש\nלא נמצא בשרת",
      choices: [
        "\u200Fהדף או המשאב המבוקש\nלא נמצא בשרת",
        "\u200Fשגיאה פנימית בשרת",
        "\u200Fהבקשה הצליחה",
        "\u200Fהגישה אסורה (חסרה הרשאה)"
      ],
      explanation: "\u200Fקודי תגובה — לפי קבוצות:\n\n✅ 2xx = הצלחה\n• 200 = הכל תקין\n\n↪️ 3xx = הפניה\n• 301 = הפניה קבועה\n• 302 = הפניה זמנית\n\n❌ 4xx = שגיאת לקוח\n• 404 = לא נמצא\n• 403 = אסור\n\n💥 5xx = שגיאת שרת\n• 500 = שגיאה פנימית",
      qEn: "What does response code 404 mean?",
      correctEn: "The requested page or resource\nwas not found on the server",
      choicesEn: [
        "The requested page or resource\nwas not found on the server",
        "Internal server error",
        "The request was successful",
        "Access is forbidden (missing permission)"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין קוד 301 לקוד 302?",
      correct: "\u200F301 = הפניה קבועה (הדפדפן שומר)\n302 = הפניה זמנית (לא נשמרת)",
      choices: [
        "\u200F301 = הפניה קבועה (הדפדפן שומר)\n302 = הפניה זמנית (לא נשמרת)",
        "\u200F301 = שגיאת שרת\n302 = שגיאת לקוח",
        "\u200Fשניהם זהים\nרק שמות שונים",
        "\u200F301 = הפניה ל-HTTPS\n302 = הפניה ל-HTTP"
      ],
      explanation: "\u200F♾️ קוד 301 — הפניה קבועה\n• הדפדפן שומר את הכתובת החדשה\n• גוגל מעביר דירוג SEO\n• לדוגמה: אתר שעבר דומיין\n\n⏱️ קוד 302 — הפניה זמנית\n• הדפדפן לא שומר\n• SEO לא מועבר\n• לדוגמה: בדיקות A/B, תחזוקה זמנית",
      qEn: "What is the difference between code 301 and code 302?",
      correctEn: "301 = permanent redirect (browser saves it)\n302 = temporary redirect (not saved)",
      choicesEn: [
        "301 = permanent redirect (browser saves it)\n302 = temporary redirect (not saved)",
        "301 = server error\n302 = client error",
        "Both are the same\njust different names",
        "301 = redirect to HTTPS\n302 = redirect to HTTP"
      ]
    },
    {
      q: "\u200Fמה URL ומאילו חלקים הוא מורכב?",
      correct: "\u200FUniform Resource Locator — כתובת של משאב ברשת\nscheme://host:port/path?query#fragment",
      choices: [
        "\u200FUniform Resource Locator — כתובת של משאב ברשת\nscheme://host:port/path?query#fragment",
        "\u200FURL = שם הדומיין בלבד (google.com)",
        "\u200FURL = כתובת IP של השרת",
        "\u200FURL = הנתיב לקובץ HTML בשרת"
      ],
      explanation: "\u200F🔗 מבנה URL:\n• scheme: http:// או https://\n• host: www.example.com\n• port: :443 (ברירת מחדל ל-HTTPS)\n• path: /products/shoes\n• query: ?color=red&size=42\n• fragment: #reviews\n\n📋 דוגמה מלאה:\n• https://maps.google.com:443/search?q=tel+aviv#results\n\n📌 URI vs URL:\n• URI = מזהה כללי\n• URL = URI שכולל את הדרך להגיע למשאב",
      explanationEn: "URL (Uniform Resource Locator) structure: scheme (http/https), host (www.example.com), port (:443 default for HTTPS), path (/products/shoes), query (?color=red&size=42), fragment (#reviews). Full example: https://maps.google.com:443/search?q=tel+aviv#results. URI is a general identifier; URL is a URI that includes how to access the resource.",
      qEn: "What is a URL and what parts does it have?",
      correctEn: "Uniform Resource Locator — address of a resource on the network\nscheme://host:port/path?query#fragment",
      choicesEn: [
        "Uniform Resource Locator — address of a resource on the network\nscheme://host:port/path?query#fragment",
        "URL = just the domain name (google.com)",
        "URL = the IP address of the server",
        "URL = the path to an HTML file on the server"
      ]
    },
    {
      q: "\u200Fמה HTTP Headers ומה תפקידם?",
      correct: "\u200Fמידע נוסף שנשלח עם בקשה/תגובת HTTP\nכמו סוג תוכן, אורך, עוגיות ו-cache",
      choices: [
        "\u200Fמידע נוסף שנשלח עם בקשה/תגובת HTTP\nכמו סוג תוכן, אורך, עוגיות ו-cache",
        "\u200FHeaders = גוף ההודעה שמכיל את ה-HTML",
        "\u200FHeaders = כתובת IP של השרת והלקוח",
        "\u200FHeaders קיימים רק בבקשות POST"
      ],
      explanation: "\u200F📋 Request Headers נפוצים:\n• Host: example.com (לאיזה אתר)\n• User-Agent: Chrome/120 (מי הדפדפן)\n• Accept: text/html (מה מבקשים)\n• Cookie: session=abc123\n\n📋 Response Headers נפוצים:\n• Content-Type: text/html (מה חוזר)\n• Content-Length: 1234 (גודל)\n• Set-Cookie: session=xyz789\n• Cache-Control: max-age=3600\n\n📌 ב-Wireshark:\n• אפשר לראות את כל ה-Headers בכל בקשה",
      explanationEn: "HTTP Headers carry additional information with requests and responses. Common request headers: Host (which site), User-Agent (browser info), Accept (what content is requested), Cookie. Common response headers: Content-Type (what is returned), Content-Length (size), Set-Cookie, Cache-Control. Headers can be viewed in Wireshark for any request.",
      qEn: "What are HTTP Headers and what is their purpose?",
      correctEn: "Extra information sent with an HTTP request/response\nlike content type, length, cookies and cache",
      choicesEn: [
        "Extra information sent with an HTTP request/response\nlike content type, length, cookies and cache",
        "Headers = the body of the message that contains the HTML",
        "Headers = the IP address of the server and client",
        "Headers exist only in POST requests"
      ]
    }
  ],

  5: [
    {
      q: "\u200Fמה מיוחד ב-Scapy?",
      correct: "\u200Fספריית Python שמאפשרת לבנות\nולשלוח חבילות רשת מותאמות אישית",
      choices: [
        "\u200Fספריית Python שמאפשרת לבנות\nולשלוח חבילות רשת מותאמות אישית",
        "\u200Fכלי ויזואלי לניתוח חבילות\nכמו Wireshark",
        "\u200Fשרת DNS שרץ על Python",
        "\u200Fספריית הצפנה לאבטחת תקשורת"
      ],
      explanation: "\u200F🧱 Scapy — ״לגו של רשתות״\n• ספריית Python לבניית חבילות שכבה-שכבה\n• דוגמה: IP()/TCP()/Raw('hello')\n\n🔧 שימושים:\n• בדיקות חדירה (penetration testing)\n• הבנת פרוטוקולים\n• מחקר רשתות",
      qEn: "What is special about Scapy?",
      correctEn: "A Python library that lets you build\nand send custom network packets",
      choicesEn: [
        "A Python library that lets you build\nand send custom network packets",
        "A visual tool for analyzing packets\nlike Wireshark",
        "A DNS server that runs on Python",
        "An encryption library for secure communication"
      ]
    },
    {
      q: "\u200Fמה עושה Scapy בפקודה:\nIP(dst='8.8.8.8')/ICMP()?",
      correct: "\u200Fבונה חבילת ICMP (ping)\nעם כתובת יעד 8.8.8.8",
      choices: [
        "\u200Fבונה חבילת ICMP (ping)\nעם כתובת יעד 8.8.8.8",
        "\u200Fשולח DNS query לשרת 8.8.8.8",
        "\u200Fפותחת חיבור TCP לשרת Google",
        "\u200Fמבצעת traceroute לכתובת 8.8.8.8"
      ],
      explanation: "\u200F🏗️ פירוק הפקודה:\n• IP(dst='8.8.8.8') = שכבת רשת — כתובת יעד\n• ICMP() = פרוטוקול ping\n• / = ״שכב מעל״ — חיבור שכבות\n\n🌐 מידע נוסף:\n• 8.8.8.8 = DNS הציבורי של Google\n• ICMP = הפרוטוקול שמאחורי ping",
      qEn: "What does Scapy do with the command:\nIP(dst='8.8.8.8')/ICMP()?",
      correctEn: "Builds an ICMP (ping) packet\nwith destination address 8.8.8.8",
      choicesEn: [
        "Builds an ICMP (ping) packet\nwith destination address 8.8.8.8",
        "Sends a DNS query to server 8.8.8.8",
        "Opens a TCP connection to Google server",
        "Performs a traceroute to address 8.8.8.8"
      ]
    },
    {
      q: "\u200Fמה Scapy ומה יתרונו על Wireshark?",
      correct: "\u200FScapy = Python library לבניה ושליחה של packets\nWireshark רק מנתח, Scapy גם יוצר ושולח",
      choices: [
        "\u200FScapy = Python library לבניה ושליחה של packets\nWireshark רק מנתח, Scapy גם יוצר ושולח",
        "\u200FScapy הוא GUI\nWireshark הוא CLI",
        "\u200FScapy עובד רק על Linux",
        "\u200FScapy הוא replacement ל-Wireshark"
      ],
      explanation: "\u200F🐍 Scapy — יכולות:\n• בניית packets שכבה-שכבה: Ether/IP/TCP/'data'\n• שליחה: send() / sendp()\n• sniffing: sniff()\n• בדיקת תגובות: sr1()\n\n🔬 Wireshark לעומתו:\n• passive sniffer בלבד\n• לא יכול ליצור או לשלוח packets\n\n💡 שימושי Scapy:\n• penetration testing\n• network research\n• פיתוח פרוטוקולים חדשים",
      qEn: "What is Scapy and what is its advantage over Wireshark?",
      correctEn: "Scapy = Python library for building and sending packets\nWireshark only analyzes, Scapy also creates and sends",
      choicesEn: [
        "Scapy = Python library for building and sending packets\nWireshark only analyzes, Scapy also creates and sends",
        "Scapy is a GUI\nWireshark is a CLI",
        "Scapy works only on Linux",
        "Scapy is a replacement for Wireshark"
      ]
    },
    {
      q: "\u200Fכיצד בונים TCP SYN packet ב-Scapy?",
      correct: "\u200FIP(dst='target')/TCP(dport=80, flags='S')",
      choices: [
        "\u200FIP(dst='target')/TCP(dport=80, flags='S')",
        "\u200FPacket(TCP, SYN, dst='target', port=80)",
        "\u200Fscapy.send(SYN, dst='target', port=80)",
        "\u200FTCP.syn(dst='target', dport=80)"
      ],
      explanation: "\u200F🔗 תחביר Scapy:\n• שכבות מחוברות עם /\n• Layer 3 = IP(dst=...)\n\n🚩 TCP Flags:\n• SYN = flags='S'\n• SYN-ACK = flags='SA'\n• ACK = flags='A'\n• RST = flags='R'\n• FIN = flags='F'\n\n📡 פקודות שימושיות:\n• sr1() = שולח ומקבל תגובה\n• sniff(filter='tcp port 80', count=10) = מלכד 10 packets",
      qEn: "How do you build a TCP SYN packet in Scapy?",
      correctEn: "IP(dst='target')/TCP(dport=80, flags='S')",
      choicesEn: [
        "IP(dst='target')/TCP(dport=80, flags='S')",
        "Packet(TCP, SYN, dst='target', port=80)",
        "scapy.send(SYN, dst='target', port=80)",
        "TCP.syn(dst='target', dport=80)"
      ]
    },
    {
      q: "\u200Fמה lfilter ב-sniff של Scapy?",
      correct: "\u200Fפונקציה Python לסינון packets בזמן real-time\nרק packets שהפונקציה מחזירה True נשמרות",
      choices: [
        "\u200Fפונקציה Python לסינון packets בזמן real-time\nרק packets שהפונקציה מחזירה True נשמרות",
        "\u200FBPF filter string כמו ב-tcpdump",
        "\u200Fמספר ה-packets לצלם",
        "\u200Fשם ה-interface לנטר"
      ],
      explanation: "\u200F🔍 lfilter — סינון ברמת Python:\n• דוגמה: sniff(lfilter=lambda p: p.haslayer(TCP) and p[TCP].flags == 'S')\n• מלכד רק TCP SYN packets\n\n⚡ ההבדל מ-BPF filter:\n• BPF (filter='tcp') = נשלח ל-kernel — מהיר יותר\n• lfilter = רץ ב-Python — מאפשר לוגיקה מורכבת\n• BPF לסינון בסיסי, lfilter ללוגיקה מתקדמת",
      qEn: "What is lfilter in Scapy's sniff?",
      correctEn: "A Python function for filtering packets in real-time\nOnly packets where the function returns True are kept",
      choicesEn: [
        "A Python function for filtering packets in real-time\nOnly packets where the function returns True are kept",
        "A BPF filter string like in tcpdump",
        "The number of packets to capture",
        "The name of the interface to monitor"
      ]
    }
  ],

  6: [
    {
      q: "\u200Fמה ההבדל בין TCP ל-UDP בשכבת התעבורה?",
      correct: "\u200FTCP = אמין + סדר\nUDP = מהיר + ללא הבטחה",
      choices: [
        "\u200FTCP = אמין + סדר\nUDP = מהיר + ללא הבטחה",
        "\u200FTCP לשרתים\nUDP לנייד",
        "\u200FTCP מוצפן\nUDP גלוי",
        "\u200FTCP ישן\nUDP מודרני"
      ],
      explanation: "\u200F📦 TCP — שליח עם חתימה:\n• ״קיבלת? אשר לי!״\n• HTTP, HTTPS, SSH, FTP\n\n✉️ UDP — עיתון שמושלך לדלת:\n• מהיר, בלי אישור קבלה\n• Zoom, Discord, gaming, DNS\n• עדיף פריים חסר מאשר עיכוב",
      qEn: "What is the difference between TCP and UDP in the Transport layer?",
      correctEn: "TCP = reliable + ordered\nUDP = fast + no guarantee",
      choicesEn: [
        "TCP = reliable + ordered\nUDP = fast + no guarantee",
        "TCP for servers\nUDP for mobile",
        "TCP is encrypted\nUDP is visible",
        "TCP is old\nUDP is modern"
      ]
    },
    {
      q: "\u200Fמה זה Three-Way Handshake?",
      correct: "\u200Fתהליך פתיחת חיבור TCP:\nSYN → SYN-ACK → ACK",
      choices: [
        "\u200Fתהליך פתיחת חיבור TCP:\nSYN → SYN-ACK → ACK",
        "\u200Fתהליך סגירת חיבור TCP:\nFIN → FIN-ACK → RST",
        "\u200Fתהליך אימות זהות בפרוטוקול HTTPS",
        "\u200Fתהליך קביעת גודל חבילה מיטבי"
      ],
      explanation: "\u200F🤝 לחיצת יד בשלושה שלבים:\n• SYN = ״היי, אפשר לדבר?״\n• SYN-ACK = ״כן, ואני גם רוצה!״\n• ACK = ״אחלה, נתחיל!״\n\n🔒 אחרי 3 הצעדים — החיבור פתוח\n\n👋 סגירה גם מורכבת:\n• FIN → ACK → FIN → ACK",
      qEn: "What is the Three-Way Handshake?",
      correctEn: "The process of opening a TCP connection:\nSYN -> SYN-ACK -> ACK",
      choicesEn: [
        "The process of opening a TCP connection:\nSYN -> SYN-ACK -> ACK",
        "The process of closing a TCP connection:\nFIN -> FIN-ACK -> RST",
        "An identity verification process in HTTPS",
        "A process to find the best packet size"
      ]
    },
    {
      q: "\u200Fמה זה Flow Control ב-TCP?",
      correct: "\u200Fמנגנון שמונע מהשולח לשלוח נתונים\nמהר מדי ולהציף את המקלט",
      choices: [
        "\u200Fמנגנון שמונע מהשולח לשלוח נתונים\nמהר מדי ולהציף את המקלט",
        "\u200Fמנגנון הצפנת נתונים בזמן שליחה",
        "\u200Fמנגנון ניתוב חבילות בין נתבים",
        "\u200Fמנגנון זיהוי שגיאות בנתונים"
      ],
      explanation: "\u200F🐌 Flow Control — ״רגע, אני לא מספיקה לעבד!״\n• הנמען מודיע לשולח מה ה-Window Size שלו\n• כמו לומר למישהי ״דברי לאט יותר״\n\n📊 איך זה עובד:\n• Window Size גדול = שולח הרבה בבת אחת\n• Window Size קטן = מאט את השליחה\n• Window Size = 0 → עצור לגמרי!",
      qEn: "What is Flow Control in TCP?",
      correctEn: "A mechanism that prevents the sender from sending data\ntoo fast and flooding the receiver",
      choicesEn: [
        "A mechanism that prevents the sender from sending data\ntoo fast and flooding the receiver",
        "A mechanism for encrypting data during sending",
        "A mechanism for routing packets between routers",
        "A mechanism for detecting errors in data"
      ]
    },
    {
      q: "\u200Fלמה TCP גדול יותר ב-overhead מ-UDP?",
      correct: "\u200FTCP header = 20-60 bytes, UDP = 8 bytes\nTCP שומר state, ACK, sequencing\nUDP שולח ושוכח",
      choices: [
        "\u200FTCP header = 20-60 bytes, UDP = 8 bytes\nTCP שומר state, ACK, sequencing\nUDP שולח ושוכח",
        "\u200FTCP מוצפן, UDP לא\nלכן גדול יותר",
        "\u200FTCP ו-UDP בגודל זהה",
        "\u200FUDP גדול יותר מ-TCP"
      ],
      explanation: "\u200F📋 TCP header — 20 bytes מינימום:\n• Src/Dst port (4B)\n• Sequence (4B)\n• Acknowledgment (4B)\n• Flags + Window (4B)\n• Checksum + Urgent (4B)\n• Options — עד 40B נוספים\n\n📋 UDP header — 8 bytes בלבד:\n• Src port (2B)\n• Dst port (2B)\n• Length (2B)\n• Checksum (2B)\n\n⚡ UDP עדיף כש-latency חשוב:\n• streaming, DNS, gaming, VoIP",
      qEn: "Why does TCP have more overhead than UDP?",
      correctEn: "TCP header = 20-60 bytes, UDP = 8 bytes\nTCP keeps state, ACK, sequencing\nUDP sends and forgets",
      choicesEn: [
        "TCP header = 20-60 bytes, UDP = 8 bytes\nTCP keeps state, ACK, sequencing\nUDP sends and forgets",
        "TCP is encrypted, UDP is not\nso it is bigger",
        "TCP and UDP are the same size",
        "UDP is bigger than TCP"
      ]
    },
    {
      q: "\u200Fמה TIME_WAIT state ב-TCP?",
      correct: "\u200Fלאחר FIN-ACK, connection עדיין פתוח 2×MSL\n(2 דקות) כדי ש-packets מאוחרים\nלא יבלבלו connection חדש",
      choices: [
        "\u200Fלאחר FIN-ACK, connection עדיין פתוח 2×MSL\n(2 דקות) כדי ש-packets מאוחרים\nלא יבלבלו connection חדש",
        "\u200FTCP מחכה ל-ACK אחרון לפני שולח FIN",
        "\u200Fשרת בעיכוב גבוה נכנס ל-TIME_WAIT",
        "\u200FTIME_WAIT = חיבור שנכשל"
      ],
      explanation: "\u200F⏳ מצבי TCP לאורך חיי חיבור:\n• LISTEN → SYN_RCVD → ESTABLISHED\n• FIN_WAIT_1 → FIN_WAIT_2 → TIME_WAIT → CLOSED\n\n🕐 TIME_WAIT:\n• 2×MSL = Maximum Segment Lifetime\n• 60-120 שניות\n\n⚠️ בעיה:\n• שרת עם אלפי connections יכול לתגמר ports\n\n🔧 פתרון:\n• SO_REUSEADDR socket option\n• TCP_QUICKACK\n• kernel tuning"
    }
  ],

  7: [
    {
      q: "\u200Fמה תפקיד שכבת הרשת?",
      correct: "\u200Fניתוב (routing) חבילות בין רשתות שונות\nלפי כתובות IP",
      choices: [
        "\u200Fניתוב (routing) חבילות בין רשתות שונות\nלפי כתובות IP",
        "\u200Fהעברת frames בין מחשבים ברשת מקומית\nלפי MAC",
        "\u200Fניהול חיבורים אמינים בין יישומים",
        "\u200Fהמרת אותות דיגיטליים לאנלוגיים"
      ],
      explanation: "\u200F🗺️ שכבת הרשת — ״הנווט״:\n• מחליטה דרך איזה נתב לשלוח\n• IP הוא הפרוטוקול המרכזי בשכבה זו\n\n🔌 מכשירים בשכבה זו:\n• נתבים (Routers) פועלים כאן\n• מבצעים routing בין רשתות שונות"
    },
    {
      q: "\u200Fמה זה NAT?",
      correct: "\u200FNetwork Address Translation\nמאפשר למחשבים רבים לשתף\nכתובת IP אחת ציבורית",
      choices: [
        "\u200FNetwork Address Translation\nמאפשר למחשבים רבים לשתף\nכתובת IP אחת ציבורית",
        "\u200FNetwork Access Token\nאסימון גישה לרשת",
        "\u200FNew Address Table\nטבלת ניתוב דינמית",
        "\u200FNode Authentication Technology\nאימות מכשירים"
      ],
      explanation: "\u200F🏠 NAT — תרגום כתובות רשת:\n• בבית יש לך IP פנימי (192.168.x.x)\n• ו-IP ציבורי אחד\n\n🔄 איך זה עובד:\n• NAT ב-router ״מתרגם״\n• מאחד לרבים ובחזרה\n\n🌍 למה צריך NAT:\n• אין מספיק כתובות IPv4 בעולם\n• NAT מאפשר לחלוק כתובת אחת"
    },
    {
      q: "\u200Fמה ההבדל בין IP פנימי לציבורי?",
      correct: "\u200FIP פנימי (192.168.x.x) לרשת מקומית\nציבורי — ייחודי באינטרנט",
      choices: [
        "\u200FIP פנימי (192.168.x.x) לרשת מקומית\nציבורי — ייחודי באינטרנט",
        "\u200FIP פנימי מוצפן\nציבורי גלוי",
        "\u200FIP פנימי לשרתים\nציבורי למחשבים אישיים",
        "\u200FIP פנימי קבוע\nציבורי משתנה"
      ],
      explanation: "\u200F🕵️ IP פנימי vs ציבורי:\n• כשאת שולחת בקשה לגוגל\n• ה-router שם את ה-IP הציבורי שלו\n• גוגל לא יודעת שיש לך IP 192.168.1.5\n\n🏠 טווחי IP פנימיים:\n• 10.0.0.0/8\n• 172.16.0.0/12\n• 192.168.0.0/16"
    },
    {
      q: "\u200Fאיזה כתובת IP היא ״ברדקאסט״ (broadcast) ברשת?",
      correct: "\u200Fכתובת שמסתיימת ב-255 בחלק המארח\nלמשל 192.168.1.255",
      choices: [
        "\u200Fכתובת שמסתיימת ב-255 בחלק המארח\nלמשל 192.168.1.255",
        "\u200F127.0.0.1 — כתובת loopback",
        "\u200F0.0.0.0 — כתובת ברירת מחדל",
        "\u200F255.0.0.0 — כתובת הרשת"
      ],
      explanation: "\u200F🔊 Broadcast — שולח לכולם!\n• 192.168.1.255 מגיעה לכל מכשיר ברשת 192.168.1.x\n\n📌 כתובות מיוחדות נוספות:\n• 127.0.0.1 = localhost = ״שלח לעצמי״\n• 0.0.0.0 = כל הכתובות / ברירת מחדל\n• 255.255.255.255 = broadcast גלובלי"
    },
    {
      q: "\u200Fמה ההבדל בין Router לבין Switch?",
      correct: "\u200FRouter = L3, מנתב בין רשתות שונות לפי IP\nSwitch = L2, מעביר פריימים בתוך אותה רשת לפי MAC",
      choices: [
        "\u200FRouter = L3, מנתב בין רשתות שונות לפי IP\nSwitch = L2, מעביר פריימים בתוך אותה רשת לפי MAC",
        "\u200FRouter מהיר יותר מ-Switch",
        "\u200FSwitch מחבר רשתות\nRouter מחבר מכשירים",
        "\u200Fאין הבדל — מונחים שונים לאותו דבר"
      ],
      explanation: "\u200F🔀 Switch — Layer 2:\n• לומד MAC addresses\n• מעביר frames בתוך VLAN\n\n🌐 Router — Layer 3:\n• מחזיק routing table\n• מבצע IP routing בין subnets\n\n📦 מכשירים נוספים:\n• Layer 3 Switch = שניהם — routing בין VLANs\n• Hub (מיושן) = L1, broadcast לכולם\n• Firewall = L3-L7, security policies\n• Default Gateway = ה-router ל-outside world"
    },
    {
      q: "\u200Fמה TTL ב-IP ואיך הוא מונע routing loops?",
      correct: "\u200FTime to Live — כל router מוריד ב-1\nכשמגיע ל-0, packet נזרק\nונשלח ICMP Time Exceeded",
      choices: [
        "\u200FTime to Live — כל router מוריד ב-1\nכשמגיע ל-0, packet נזרק\nונשלח ICMP Time Exceeded",
        "\u200FTTL = כמה שניות החבילה תקפה",
        "\u200FTTL נקבע ע\"י היעד, לא ה-sender",
        "\u200FTTL = Transport Transfer Layer"
      ],
      explanation: "\u200F🛡️ TTL — נוצר כדי למנוע routing loops\n\n📊 ערכי ברירת מחדל:\n• Linux = 64\n• Windows = 128\n• Cisco = 255\n\n🔍 traceroute משתמש ב-TTL:\n• שולח packet עם TTL=1 → מקבל ICMP\n• TTL=2 → מקבל ICMP מה-hop הבא\n• כל hop מחזיר ICMP Time Exceeded\n  עם כתובת ה-IP שלו — כך רואים מסלול"
    },
    {
      q: "\u200Fמה Longest Prefix Match ב-IP routing?",
      correct: "\u200FRouter בוחר את ה-route הספציפי ביותר\n/24 מנצח /16 גם אם שניהם\nמכסים את ה-destination IP",
      choices: [
        "\u200FRouter בוחר את ה-route הספציפי ביותר\n/24 מנצח /16 גם אם שניהם\nמכסים את ה-destination IP",
        "\u200FRouter בוחר את ה-route עם המשקל הנמוך ביותר",
        "\u200FRouter בוחר לפי סדר ה-routing table",
        "\u200Fכל routes שווים — בוחרים ב-random"
      ],
      explanation: "\u200F🎯 דוגמה — destination: 192.168.1.50\n\n📋 Routing table:\n• 192.168.0.0/16 → via Router A\n• 192.168.1.0/24 → via Router B\n• 0.0.0.0/0 → default, via Router C\n\n✅ Router בוחר /24 כי הוא הכי ספציפי\n\n⚠️ דוגמה היסטורית:\n• Pakistan Telecom 2008\n• הזריק /24 → ניצח את ה-/22 של YouTube\n• routing hijack עולמי"
    }
  ],

  8: [
    {
      q: "\u200Fמה ההבדל בין Switch לבין Hub?",
      correct: "\u200FSwitch שולח frame ליעד הספציפי לפי MAC\nHub מפיץ לכולם",
      choices: [
        "\u200FSwitch שולח frame ליעד הספציפי לפי MAC\nHub מפיץ לכולם",
        "\u200FSwitch עובד בשכבת הרשת\nHub בשכבת הקו",
        "\u200FSwitch אלחוטי, Hub קווי",
        "\u200FSwitch מהיר יותר רק כי יקר יותר"
      ],
      explanation: "\u200F🎯 Switch — שולח מכתב ספציפי לאדם הנכון\n• יודע לפי MAC לאן לשלוח\n\n📢 Hub — צועק לכולם בחדר\n• כל frame נשלח לכל הפורטים\n• הורג ביצועים\n\n💡 כיום אין כמעט Hub — הוחלף לגמרי ע״י Switch"
    },
    {
      q: "\u200Fמה זה כתובת MAC?",
      correct: "\u200Fכתובת פיזית ייחודית שמזהה כרטיס רשת\nבן 6 בתים בהקס",
      choices: [
        "\u200Fכתובת פיזית ייחודית שמזהה כרטיס רשת\nבן 6 בתים בהקס",
        "\u200Fכתובת לוגית שמוקצית על ידי DHCP",
        "\u200Fכתובת של שרת ה-DNS הראשי",
        "\u200Fכתובת של המחשב ברשת הציבורית"
      ],
      explanation: "\u200F🖥️ MAC = Media Access Control\n• נראית כך: AA:BB:CC:DD:EE:FF\n• שרופה ב-hardware של כרטיס הרשת\n\n⚠️ MAC spoofing:\n• ניתן לזייף בתוכנה\n• למרות שהיא ״קבועה״ ב-hardware"
    },
    {
      q: "\u200Fמה תפקיד ה-ARP?",
      correct: "\u200Fמוצא כתובת MAC של מכשיר\nבהינתן כתובת IP שלו",
      choices: [
        "\u200Fמוצא כתובת MAC של מכשיר\nבהינתן כתובת IP שלו",
        "\u200Fמקצה כתובות IP אוטומטית למכשירים",
        "\u200Fמתרגם שמות דומיין לכתובות IP",
        "\u200Fמאמת זהות משתמש ברשת"
      ],
      explanation: "\u200F📋 ARP = Address Resolution Protocol\n• שואל: ״מי בעל IP 192.168.1.5?״\n• כולם שומעים (broadcast)\n• הנכון עונה עם ה-MAC שלו\n\n💾 ARP cache:\n• שומר את הטבלה IP → MAC\n• חוסך שאילתות חוזרות"
    },
    {
      q: "\u200Fמה MAC address ומה שונה אותו מ-IP?",
      correct: "\u200FMAC = Layer 2, מזהה hardware ייחודי של NIC (48 bit)\nIP = Layer 3, כתובת לוגית שמשתנה לפי רשת",
      choices: [
        "\u200FMAC = Layer 2, מזהה hardware ייחודי של NIC (48 bit)\nIP = Layer 3, כתובת לוגית שמשתנה לפי רשת",
        "\u200FMAC ו-IP זהים — רק פורמט שונה",
        "\u200FMAC משתנה בכל חיבור\nIP קבוע",
        "\u200FMAC = IPv6\nIP = IPv4"
      ],
      explanation: "\u200F🔤 MAC — Media Access Control:\n• 48 bits: XX:XX:XX:XX:XX:XX\n• 24 bits = OUI (מזהה יצרן — Intel, Cisco)\n• 24 bits = מספר סידורי\n\n🔄 MAC spoofing:\n• ניתן לשנות בתוכנה\n\n📌 כתובות מיוחדות:\n• Broadcast MAC: FF:FF:FF:FF:FF:FF\n• ARP: ממפה IP → MAC\n\n⚖️ ההבדל:\n• IP = logical (משתנה לפי רשת)\n• MAC = physical (קבוע ב-hardware)"
    },
    {
      q: "\u200Fמה Ethernet Frame structure?",
      correct: "\u200FPreamble | Dest MAC | Src MAC | EtherType\n| Payload (46-1500 bytes) | FCS",
      choices: [
        "\u200FPreamble | Dest MAC | Src MAC | EtherType\n| Payload (46-1500 bytes) | FCS",
        "\u200FHeader | Data | Checksum בלבד",
        "\u200FSrc IP | Dst IP | Src Port | Dst Port | Data",
        "\u200FStart | MAC | IP | TCP | Data | End"
      ],
      explanation: "\u200F📦 Ethernet II Frame:\n• Preamble (8B) — לסנכרון\n• Dest MAC (6B)\n• Src MAC (6B)\n• EtherType (2B)\n\n🏷️ ערכי EtherType נפוצים:\n• 0x0800 = IPv4\n• 0x0806 = ARP\n• 0x86DD = IPv6\n\n📏 Payload + סיום:\n• Payload: 46-1500 bytes\n• FCS (4B) = CRC checksum\n• MTU = 1500 bytes\n• Jumbo frames = 9000 bytes (datacenter)\n• VLAN tag (802.1Q) = 4 bytes נוספים"
    },
    {
      q: "\u200Fמה ה-Broadcast Domain ומה Collision Domain?",
      correct: "\u200FBroadcast Domain: כל מי שמקבל broadcast\nSwitch לא מפריד, Router כן\nCollision Domain: Switch מפריד לפי port",
      choices: [
        "\u200FBroadcast Domain: כל מי שמקבל broadcast\nSwitch לא מפריד, Router כן\nCollision Domain: Switch מפריד לפי port",
        "\u200Fשניהם זהים",
        "\u200FHub מפריד broadcast\nSwitch לא",
        "\u200FRouter לא מפריד broadcast domains"
      ],
      explanation: "\u200F💥 Collision Domain:\n• Hub = domain אחד (כולם מתנגשים)\n• Switch = כל port = domain נפרד (Full Duplex)\n\n📢 Broadcast Domain:\n• Switch = domain אחד (כל הפורטים)\n• Router = מפריד\n• VLAN = מפריד ב-software\n\n⚠️ בעיה:\n• רשת גדולה ללא VLANs = broadcast storm\n• 1000 מכשירים ב-broadcast domain אחד\n  = CPU high מ-ARP floods"
    }
  ],

  9: [
    {
      q: "\u200Fמה ההבדל בין Hub, Switch ו-Router?",
      correct: "\u200FHub: שכבה 1, משדר לכולם\nSwitch: שכבה 2, שולח לפי MAC\nRouter: שכבה 3, מנתב לפי IP בין רשתות",
      choices: [
        "\u200FHub: שכבה 1, משדר לכולם\nSwitch: שכבה 2, שולח לפי MAC\nRouter: שכבה 3, מנתב לפי IP בין רשתות",
        "\u200FHub = Switch ישן, Router = Switch חכם",
        "\u200Fשלושתם עושים אותו דבר — רק שמות שונים",
        "\u200FHub לרשת ביתית, Switch לארגון, Router לאינטרנט"
      ],
      explanation: "\u200F📡 Hub (שכבה 1 — פיזית):\n• מקבל frame, משדר לכל הפורטים\n• אין אינטליגנציה — collision domain אחד\n\n🔀 Switch (שכבה 2 — קו):\n• לומד כתובות MAC\n• MAC Address Table: MAC → Port\n• שולח frame רק לפורט הנכון\n\n🌐 Router (שכבה 3 — רשת):\n• מחבר בין רשתות שונות\n• משתמש ב-IP ו-Routing Table\n• Default Gateway של הרשת המקומית",
      explanationEn: "Hub (Layer 1): receives frame, broadcasts to all ports. No intelligence — single collision domain. Switch (Layer 2): learns MAC addresses, maintains MAC Address Table (MAC to Port), sends frame only to correct port. Router (Layer 3): connects different networks, uses IP and Routing Table, serves as Default Gateway for local network."
    },
    {
      q: "\u200Fמה VLAN ולמה משתמשים בו?",
      correct: "\u200Fרשת מקומית וירטואלית — מחלקת Switch פיזי\nלרשתות לוגיות נפרדות\nמבודדת תעבורה ומשפרת אבטחה",
      choices: [
        "\u200Fרשת מקומית וירטואלית — מחלקת Switch פיזי\nלרשתות לוגיות נפרדות\nמבודדת תעבורה ומשפרת אבטחה",
        "\u200FVLAN = VPN לרשת מקומית",
        "\u200FVLAN מחליף Router בין רשתות",
        "\u200FVLAN עובד רק עם WiFi, לא עם כבלים"
      ],
      explanation: "\u200F🏢 דוגמה:\n• Switch אחד עם 24 פורטים\n• VLAN 10: מחלקת כספים (פורטים 1-8)\n• VLAN 20: מחלקת שיווק (פורטים 9-16)\n• VLAN 30: אורחים (פורטים 17-24)\n\n🔒 יתרונות:\n• בידוד — כספים לא רואים traffic של שיווק\n• אבטחה — פחות attack surface\n• ביצועים — broadcast מוגבל ל-VLAN\n\n📌 802.1Q:\n• Tag של 12 ביט ב-Ethernet frame\n• עד 4094 VLANs",
      explanationEn: "VLAN divides a physical Switch into separate logical networks. Example: one 24-port switch split into Finance (VLAN 10, ports 1-8), Marketing (VLAN 20, ports 9-16), Guests (VLAN 30, ports 17-24). Benefits: isolation, security (less attack surface), performance (broadcast limited to VLAN). 802.1Q adds a 12-bit tag to Ethernet frame, supporting up to 4094 VLANs."
    },
    {
      q: "\u200Fמה תפקיד חומת האש (Firewall)?",
      correct: "\u200Fסינון תעבורת רשת לפי חוקים\nבודקת מקור, יעד, פורט ופרוטוקול\nומחליטה אם להרשות או לחסום",
      choices: [
        "\u200Fסינון תעבורת רשת לפי חוקים\nבודקת מקור, יעד, פורט ופרוטוקול\nומחליטה אם להרשות או לחסום",
        "\u200FFirewall מצפין את כל התעבורה",
        "\u200FFirewall מונע וירוסים בלבד",
        "\u200FFirewall מנתב חבילות בין רשתות"
      ],
      explanation: "\u200F🛡️ סוגי Firewall:\n• Packet Filter: בודק L3/L4 (IP, port)\n• Stateful: עוקב אחרי connections\n• Application (WAF): בודק L7 (HTTP content)\n\n📋 חוקים לדוגמה:\n• ALLOW TCP from any to 10.0.0.5:443 (HTTPS)\n• DENY TCP from any to 10.0.0.5:22 (SSH)\n• DENY ALL — ברירת מחדל\n\n📌 חוקים נבדקים מלמעלה למטה:\n• First match wins\n• Default policy: בדרך כלל DENY",
      explanationEn: "Firewall types: Packet Filter checks L3/L4 (IP, port), Stateful tracks connections, Application Firewall (WAF) inspects L7 content. Rules example: ALLOW TCP to port 443, DENY TCP to port 22, DENY ALL as default. Rules are evaluated top-to-bottom, first match wins. Default policy is usually DENY."
    },
    {
      q: "\u200Fמה SDN (Software Defined Networking)?",
      correct: "\u200Fהפרדת מישור הבקרה (Control Plane)\nממישור הנתונים (Data Plane)\nניהול מרכזי של הרשת בתוכנה",
      choices: [
        "\u200Fהפרדת מישור הבקרה (Control Plane)\nממישור הנתונים (Data Plane)\nניהול מרכזי של הרשת בתוכנה",
        "\u200FSDN = רשת אלחוטית מתקדמת",
        "\u200FSDN = Switch עם יותר פורטים",
        "\u200FSDN = VPN לארגונים"
      ],
      explanation: "\u200F🧠 Control Plane (מוח):\n• מחליט לאן לנתב\n• ב-SDN: controller מרכזי (כמו OpenFlow)\n\n⚡ Data Plane (שרירים):\n• מעביר חבילות לפי ההחלטות\n• Switches פשוטים שמקבלים הוראות\n\n📌 יתרונות:\n• ניהול מרכזי — שינוי אחד משפיע על כל הרשת\n• אוטומציה — APIs לניהול\n• גמישות — שינוי routing בתוכנה\n\n🌐 דוגמאות:\n• Google B4 — WAN מבוסס SDN\n• OpenFlow — פרוטוקול SDN",
      explanationEn: "SDN separates Control Plane (brain — decides where to route) from Data Plane (muscles — forwards packets). In SDN: a central controller (like OpenFlow) manages simple switches that receive instructions. Benefits: centralized management, automation via APIs, flexibility in software. Examples: Google B4 (SDN-based WAN), OpenFlow protocol."
    },
    {
      q: "\u200Fמה ההבדל בין Router ביתי לתעשייתי?",
      correct: "\u200FRouter ביתי משלב Router, Switch, AP ו-Firewall\nRouter תעשייתי מפריד כל רכיב\nעם ביצועים ושליטה ברמה אחרת",
      choices: [
        "\u200FRouter ביתי משלב Router, Switch, AP ו-Firewall\nRouter תעשייתי מפריד כל רכיב\nעם ביצועים ושליטה ברמה אחרת",
        "\u200FRouter ביתי עובד רק עם WiFi",
        "\u200FRouter תעשייתי תומך רק ב-IPv6",
        "\u200Fאין הבדל מהותי — רק מחיר"
      ],
      explanation: "\u200F🏠 Router ביתי:\n• All-in-one: Router + Switch + WiFi AP + Firewall + NAT + DHCP\n• ממשק ניהול פשוט (GUI)\n• עד ~50 מכשירים\n\n🏢 Router תעשייתי (Cisco, Juniper):\n• רכיבים נפרדים — כל אחד ייעודי\n• CLI לניהול (IOS, JunOS)\n• BGP, OSPF, MPLS\n• אלפי-מיליוני routes\n• redundancy ו-failover\n\n📌 Switch תעשייתי:\n• 48+ פורטים, PoE, VLAN, STP\n• stacking — מספר switches כיחידה אחת",
      explanationEn: "Home Router: all-in-one device combining Router, Switch, WiFi AP, Firewall, NAT, DHCP. Simple GUI management, supports ~50 devices. Enterprise Router (Cisco, Juniper): separate dedicated components, CLI management (IOS, JunOS), supports BGP, OSPF, MPLS, thousands to millions of routes, redundancy and failover. Enterprise Switch: 48+ ports, PoE, VLAN, STP, stacking."
    }
  ],

  10: [
    {
      q: "\u200Fמה קורה בשכבה הפיזית?",
      correct: "\u200Fהמרת bits לאותות פיזיים\n(חשמל, אור, רדיו) ובחזרה",
      choices: [
        "\u200Fהמרת bits לאותות פיזיים\n(חשמל, אור, רדיו) ובחזרה",
        "\u200Fהוספת header עם כתובות MAC",
        "\u200Fהוספת header עם כתובות IP",
        "\u200Fבדיקת שגיאות בנתונים"
      ],
      explanation: "\u200F⚡ השכבה הפיזית:\n• לא מבינה 'packets'\n• רק מעבירה 0 ו-1 כאותות\n\n🔌 סוגי אותות:\n• Ethernet = מתח חשמל\n• Fiber = פולסים של אור\n• WiFi = גלי רדיו"
    },
    {
      q: "\u200Fמה ההבדל בין fiber optic לכבל נחושת?",
      correct: "\u200FFiber = אור, נחושת = חשמל\nFiber מהיר יותר ועמיד להתערבות",
      choices: [
        "\u200FFiber = אור, נחושת = חשמל\nFiber מהיר יותר ועמיד להתערבות",
        "\u200FFiber זול יותר ולכן נפוץ יותר",
        "\u200FFiber לתקשורת ים, נחושת ליבשה בלבד",
        "\u200Fאין הבדל משמעותי בביצועים"
      ],
      explanation: "\u200F💡 Fiber Optic:\n• עובד במהירות האור\n• יכול להגיע ל-Terabits/sec\n• לא מושפע מ-EMI\n• הרבה יקר יותר להתקנה\n\n🌊 כבלי ים בינלאומיים:\n• כולם fiber"
    },
    {
      q: "\u200Fמה Full Duplex לעומת Half Duplex?",
      correct: "\u200FFull Duplex: שליחה וקבלה בו-זמנית (Switch)\nHalf Duplex: רק אחד בכל רגע (Hub)\nCSMA/CD פותר התנגשויות ב-Half Duplex",
      choices: [
        "\u200FFull Duplex: שליחה וקבלה בו-זמנית (Switch)\nHalf Duplex: רק אחד בכל רגע (Hub)\nCSMA/CD פותר התנגשויות ב-Half Duplex",
        "\u200FFull Duplex = מהירות כפולה",
        "\u200FHalf Duplex = חצי מהפורטים",
        "\u200FFull Duplex רק בכבל fiber"
      ],
      explanation: "\u200F📡 Half Duplex (Hub):\n• רק אחד מדבר בכל רגע\n• CSMA/CD: מאזין → שולח → התנגשות? → backoff אקראי\n• Collision Domain = כל ההתקנים על ה-Hub\n\n🔄 Full Duplex (Switch):\n• שליחה וקבלה במקביל\n• אין התנגשויות!\n• Switch מפריד Collision Domains\n• 100Mbps FD = 100Mbps שליחה + 100Mbps קבלה\n\n📌 WiFi = Half Duplex:\n• CSMA/CA (לא CD) — מונע התנגשויות מראש",
      explanationEn: "Half Duplex (Hub): only one device transmits at a time. CSMA/CD: listen, send, collision detected, random backoff. Collision Domain = all devices on Hub. Full Duplex (Switch): send and receive simultaneously, no collisions. Switch separates Collision Domains. 100Mbps FD = 100Mbps send + 100Mbps receive. WiFi is Half Duplex using CSMA/CA."
    },
    {
      q: "\u200Fמה WiFi (802.11) ואיזה תקנים נפוצים?",
      correct: "\u200Fתקן לרשת אלחוטית\n802.11ac (WiFi 5): עד 3.5Gbps ב-5GHz\n802.11ax (WiFi 6): עד 9.6Gbps, OFDMA",
      choices: [
        "\u200Fתקן לרשת אלחוטית\n802.11ac (WiFi 5): עד 3.5Gbps ב-5GHz\n802.11ax (WiFi 6): עד 9.6Gbps, OFDMA",
        "\u200FWiFi = Wireless Firewall Interface",
        "\u200FWiFi תמיד מהיר יותר מכבל Ethernet",
        "\u200FWiFi 6 עובד רק ב-6GHz"
      ],
      explanation: "\u200F📶 תקנים:\n• 802.11b (1999): 11Mbps, 2.4GHz\n• 802.11n (WiFi 4): 600Mbps, 2.4+5GHz\n• 802.11ac (WiFi 5): 3.5Gbps, 5GHz, MIMO\n• 802.11ax (WiFi 6): 9.6Gbps, OFDMA, MU-MIMO\n\n📡 2.4GHz vs 5GHz:\n• 2.4GHz: טווח ארוך, חודר קירות, עמוס\n• 5GHz: מהיר יותר, טווח קצר, פחות הפרעות\n\n📌 WiFi = Half Duplex\n• בניגוד ל-Ethernet שהוא Full Duplex",
      explanationEn: "WiFi standards: 802.11b (1999, 11Mbps, 2.4GHz), 802.11n/WiFi 4 (600Mbps, 2.4+5GHz), 802.11ac/WiFi 5 (3.5Gbps, 5GHz, MIMO), 802.11ax/WiFi 6 (9.6Gbps, OFDMA, MU-MIMO). 2.4GHz: longer range, penetrates walls, crowded. 5GHz: faster, shorter range, less interference. WiFi is Half Duplex unlike Full Duplex Ethernet."
    },
    {
      q: "\u200Fמה PoE (Power over Ethernet)?",
      correct: "\u200Fאספקת חשמל דרך כבל ה-Ethernet\nמאפשר להפעיל מצלמות, AP ו-IP טלפונים\nבלי כבל חשמל נפרד",
      choices: [
        "\u200Fאספקת חשמל דרך כבל ה-Ethernet\nמאפשר להפעיל מצלמות, AP ו-IP טלפונים\nבלי כבל חשמל נפרד",
        "\u200FPoE = Protocol over Ethernet",
        "\u200FPoE מגביר את מהירות הרשת",
        "\u200FPoE עובד רק עם כבל fiber"
      ],
      explanation: "\u200F⚡ Power over Ethernet:\n• IEEE 802.3af: עד 15.4W\n• IEEE 802.3at (PoE+): עד 30W\n• IEEE 802.3bt (PoE++): עד 90W\n\n📋 שימושים:\n• מצלמות IP — מיקום ללא שקע חשמל\n• WiFi Access Points — על התקרה\n• IP טלפונים — כבל אחד לשולחן\n\n📌 יתרון:\n• כבל אחד לנתונים + חשמל\n• UPS על ה-Switch = כל ההתקנים מוגנים",
      explanationEn: "PoE supplies electrical power through Ethernet cable. Standards: 802.3af (15.4W), 802.3at/PoE+ (30W), 802.3bt/PoE++ (90W). Uses: IP cameras (no power outlet needed), WiFi APs (ceiling mount), IP phones (one cable to desk). Benefit: one cable for data + power. UPS on the Switch protects all connected devices."
    }
  ],

  11: [
    {
      q: "\u200Fמה קורה כשמחשב שולח HTTP request?",
      correct: "\u200Fכל שכבה מוסיפה header, נשלח כ-bits\nהצד השני מסיר headers שכבה-שכבה",
      choices: [
        "\u200Fכל שכבה מוסיפה header, נשלח כ-bits\nהצד השני מסיר headers שכבה-שכבה",
        "\u200Fהבקשה נשלחת כטקסט ישירות ללא עיבוד",
        "\u200Fרק שכבות הרשת והתעבורה מעבדות את הבקשה",
        "\u200Fה-header נשלח קודם ואז הנתונים בנפרד"
      ],
      explanation: "\u200F🎂 הדרך המלאה של בקשת HTTP:\n• App → HTTP\n• Transport → TCP\n• Network → IP\n• Link → MAC\n• Physical → סיביות ברשת\n\n📦 עיקרון מפתח:\n• כל שכבה 'אחראית על עצמה'\n• מוסיפה header בשליחה\n• מסירה header בקבלה"
    },
    {
      q: "\u200Fמה סדר הפעולות המלא כשמקלידים URL בדפדפן?",
      correct: "\u200FDNS lookup → TCP handshake → TLS handshake\n→ HTTP request → Server response\n→ Browser rendering",
      choices: [
        "\u200FDNS lookup → TCP handshake → TLS handshake\n→ HTTP request → Server response\n→ Browser rendering",
        "\u200FHTTP request → DNS → TCP → תצוגה",
        "\u200FARP → MAC lookup → HTTP → DNS",
        "\u200FTCP → HTTP → DNS → תצוגה"
      ],
      explanation: "\u200F🌐 הסדר המלא:\n1. DNS: שם → IP (cache → recursive resolver → root → TLD → auth)\n2. ARP: IP → MAC (אם ברשת מקומית)\n3. TCP: SYN → SYN-ACK → ACK\n4. TLS: ClientHello → ServerHello → keys (אם HTTPS)\n5. HTTP: GET /page HTTP/1.1\n6. Server: מחזיר HTML (200 OK)\n7. Browser: parsing → DOM → render\n8. בקשות נוספות: CSS, JS, images\n\n📌 כל זה קורה ב-milliseconds!",
      explanationEn: "Full sequence: 1) DNS: name to IP (cache, recursive resolver, root, TLD, authoritative), 2) ARP: IP to MAC (if on local network), 3) TCP: SYN, SYN-ACK, ACK, 4) TLS: ClientHello, ServerHello, keys (if HTTPS), 5) HTTP: GET /page, 6) Server: returns HTML (200 OK), 7) Browser: parsing, DOM, render, 8) Additional requests: CSS, JS, images. All happens in milliseconds!"
    },
    {
      q: "\u200Fמה תפקיד ה-CDN כשגולשים לאתר?",
      correct: "\u200FCDN מגיש תוכן מ-cache בשרת קרוב גיאוגרפית\nמפחית latency ועומס על שרת המקור",
      choices: [
        "\u200FCDN מגיש תוכן מ-cache בשרת קרוב גיאוגרפית\nמפחית latency ועומס על שרת המקור",
        "\u200FCDN מצפין את התעבורה במקום TLS",
        "\u200FCDN מחליף את DNS ומנתב ישירות",
        "\u200FCDN שומר רק קבצי וידאו, לא HTML"
      ],
      explanation: "\u200F🌍 CDN — Content Delivery Network:\n• שרתי edge בעשרות ערים\n• Request → CDN POP הקרוב\n\n📋 Cache HIT:\n• התוכן נמצא ב-cache → מוגש מיידית\n• Latency: 5-20ms במקום 200ms\n\n📋 Cache MISS:\n• CDN פונה ל-origin server\n• שומר ב-cache לפעם הבאה\n\n📌 מה CDN שומר?\n• HTML, CSS, JS, images, video\n• Headers קובעים: Cache-Control, ETag",
      explanationEn: "CDN (Content Delivery Network): edge servers in dozens of cities. Request goes to nearest CDN POP. Cache HIT: content found in cache, served immediately (5-20ms instead of 200ms). Cache MISS: CDN fetches from origin server, stores for next time. CDN caches HTML, CSS, JS, images, video. Headers determine caching: Cache-Control, ETag."
    },
    {
      q: "\u200Fמה קורה אם שרת ה-DNS שלך לא עובד?",
      correct: "\u200Fאין תרגום שמות לכתובות IP\nהדפדפן לא יודע לאן לפנות\nאבל גישה ישירה לכתובת IP עדיין עובדת",
      choices: [
        "\u200Fאין תרגום שמות לכתובות IP\nהדפדפן לא יודע לאן לפנות\nאבל גישה ישירה לכתובת IP עדיין עובדת",
        "\u200Fהאינטרנט מפסיק לעבוד לחלוטין",
        "\u200Fהדפדפן משתמש ב-IP אוטומטית",
        "\u200FDNS fallback עובר ל-ARP במקום"
      ],
      explanation: "\u200F🔴 כש-DNS לא עובד:\n• http://google.com → ERROR\n• http://142.250.185.78 → עובד!\n• כי DNS רק מתרגם שמות ל-IP\n\n🔧 פתרונות:\n• שנה DNS ידנית: 8.8.8.8 (Google), 1.1.1.1 (Cloudflare)\n• בדוק עם nslookup google.com\n• נקה DNS cache: ipconfig /flushdns\n\n📌 DNS cache מקומי:\n• אתרים שכבר ביקרת בהם עדיין עובדים\n• עד שה-TTL פג",
      explanationEn: "When DNS is down: http://google.com fails with ERROR, but http://142.250.185.78 still works — DNS only translates names to IPs. Solutions: change DNS manually to 8.8.8.8 (Google) or 1.1.1.1 (Cloudflare), test with nslookup, clear DNS cache (ipconfig /flushdns). Previously visited sites still work from local cache until TTL expires."
    },
    {
      q: "\u200Fכמה פקטות בערך נשלחות בגלישה לדף אחד?",
      correct: "\u200Fעשרות עד מאות פקטות\nDNS + TCP handshake + TLS + HTTP + תוכן\nכל תמונה, CSS ו-JS = בקשות נוספות",
      choices: [
        "\u200Fעשרות עד מאות פקטות\nDNS + TCP handshake + TLS + HTTP + תוכן\nכל תמונה, CSS ו-JS = בקשות נוספות",
        "\u200Fפקטה אחת — כל הדף בבקשה אחת",
        "\u200Fבדיוק 3 — SYN, HTTP, Response",
        "\u200Fאלפי פקטות לכל דף"
      ],
      explanation: "\u200F📊 פירוט לדוגמה:\n• DNS query + response: 2 פקטות\n• TCP handshake: 3 פקטות\n• TLS handshake: ~4 פקטות\n• HTTP request + response: תלוי בגודל\n\n📋 דף ממוצע (2MB):\n• ~20 HTTP requests (HTML, CSS, JS, images)\n• HTTP/2: multiplexing = connection אחד!\n• סה\"כ: 50-200 פקטות\n\n📌 ב-Wireshark:\n• Statistics → Protocol Hierarchy\n• רואים את ההתפלגות המלאה",
      explanationEn: "Example breakdown: DNS query+response (2 packets), TCP handshake (3 packets), TLS handshake (~4 packets), HTTP request+response (depends on size). Average page (2MB): ~20 HTTP requests (HTML, CSS, JS, images). HTTP/2 multiplexing uses one connection. Total: 50-200 packets. In Wireshark: Statistics, Protocol Hierarchy shows full breakdown."
    }
  ],

  12: [
    {
      q: "\u200Fמה זה non-blocking socket?",
      correct: "\u200Fsocket שלא 'מקפיא' את התוכנית\nבזמן המתנה לנתונים",
      choices: [
        "\u200Fsocket שלא 'מקפיא' את התוכנית\nבזמן המתנה לנתונים",
        "\u200Fsocket מוצפן שחוסם כניסות לא מורשות",
        "\u200Fsocket לתקשורת חד-כיוונית בלבד",
        "\u200Fsocket שמסנן חבילות לא תקינות"
      ],
      explanation: "\u200F🔄 Blocking vs Non-blocking:\n• Blocking = 'אני מחכה ולא עושה כלום'\n• Non-blocking = 'בדקתי, אין עדיין?\n  בסדר, אעשה דברים אחרים'\n\n🖥️ למה חשוב:\n• שרת שמטפל בהרבה לקוחות\n• חייב non-blocking"
    },
    {
      q: "\u200Fמה select() ולמה משתמשים בו בשרתי רשת?",
      correct: "\u200Fפונקציה שמחכה ל-events על מספר Sockets\nבמקום חסימה על recv() אחד\nמאפשרת שרת עם מספר לקוחות ללא threads",
      choices: [
        "\u200Fפונקציה שמחכה ל-events על מספר Sockets\nבמקום חסימה על recv() אחד\nמאפשרת שרת עם מספר לקוחות ללא threads",
        "\u200Fselect() בוחרת את ה-Socket הכי מהיר",
        "\u200Fselect() מחליפה את connect() בלקוח",
        "\u200Fselect() עובדת רק עם UDP"
      ],
      explanation: "\u200F🔄 הבעיה:\n• recv() חוסם — ממתין עד שמגיע data\n• אם יש 10 לקוחות, איך מטפלים בכולם?\n\n✅ select(read_sockets, write_sockets, error_sockets, timeout):\n• מחזירה רשימת sockets שמוכנים\n• שרת קורא רק מ-sockets עם data\n\n📌 חלופות מודרניות:\n• poll(), epoll() (Linux)\n• asyncio (Python 3)",
      explanationEn: "Problem: recv() blocks — waits until data arrives. With 10 clients, how to handle all? select(read_sockets, write_sockets, error_sockets, timeout): returns list of ready sockets. Server reads only from sockets with data. Modern alternatives: poll(), epoll() (Linux), asyncio (Python 3)."
    },
    {
      q: "\u200Fמה Threading בשרת רשת ומה היתרון על select()?",
      correct: "\u200Fכל לקוח מטופל ב-thread נפרד\nקוד פשוט יותר — כל thread חוסם בנפרד\nאבל יקר בזיכרון עם הרבה לקוחות",
      choices: [
        "\u200Fכל לקוח מטופל ב-thread נפרד\nקוד פשוט יותר — כל thread חוסם בנפרד\nאבל יקר בזיכרון עם הרבה לקוחות",
        "\u200FThreading מאיץ את מהירות הרשת",
        "\u200FThreading חובה בכל שרת Python",
        "\u200FThread אחד תמיד מספיק לכל הלקוחות"
      ],
      explanation: "\u200F🧵 Thread per client:\n• conn, addr = server.accept()\n• threading.Thread(target=handle, args=(conn,)).start()\n• כל thread מריץ recv() חוסם — בסדר!\n\n✅ יתרונות: קוד פשוט, קל לדיבוג\n\n❌ חסרונות:\n• 10,000 threads = הרבה זיכרון\n• GIL בפייתון מגביל CPU parallelism\n• Context switching overhead\n\n📌 פתרון: Thread Pool או asyncio",
      explanationEn: "Thread per client: after accept(), create threading.Thread(target=handle, args=(conn,)). Each thread runs blocking recv() independently. Advantages: simple code, easy to debug. Disadvantages: 10,000 threads = high memory, Python GIL limits CPU parallelism, context switching overhead. Solution: Thread Pool or asyncio."
    },
    {
      q: "\u200Fמה Length Prefix Protocol ולמה צריך אותו ב-TCP?",
      correct: "\u200Fשליחת אורך ההודעה לפני ההודעה עצמה\nכי TCP הוא byte stream — אין גבולות הודעה\nהמקבל צריך לדעת כמה bytes לקרוא",
      choices: [
        "\u200Fשליחת אורך ההודעה לפני ההודעה עצמה\nכי TCP הוא byte stream — אין גבולות הודעה\nהמקבל צריך לדעת כמה bytes לקרוא",
        "\u200FLength Prefix = הצפנת ההודעה לפני שליחה",
        "\u200FTCP תמיד שולח הודעות שלמות — לא צריך prefix",
        "\u200FLength Prefix רלוונטי רק ל-UDP"
      ],
      explanation: "\u200F⚠️ הבעיה:\n• send('Hello') + send('World')\n• recv() יכול להחזיר: 'HelloWorld' או 'Hel' ואז 'loWorld'\n• TCP = byte stream, לא message stream!\n\n✅ הפתרון — Length Prefix:\n• שולח: [5]Hello[5]World\n• מקבל: קורא 4 bytes (אורך) → קורא N bytes\n\n📌 חלופות:\n• Delimiter: הודעות מופרדות ב-newline\n• Fixed size: כל הודעה באורך קבוע",
      explanationEn: "Problem: send('Hello') + send('World') — recv() might return 'HelloWorld' or 'Hel' then 'loWorld'. TCP is a byte stream, not message stream! Solution — Length Prefix: sender sends [5]Hello[5]World. Receiver reads 4 bytes (length), then reads N bytes. Alternatives: Delimiter (messages separated by newline), Fixed size (constant message length)."
    },
    {
      q: "\u200Fמה asyncio בפייתון ואיך שונה מ-Threading?",
      correct: "\u200Fתכנות אסינכרוני ב-thread אחד\nמשתמש ב-event loop ו-coroutines\nיעיל יותר מ-threads ל-I/O כבד",
      choices: [
        "\u200Fתכנות אסינכרוני ב-thread אחד\nמשתמש ב-event loop ו-coroutines\nיעיל יותר מ-threads ל-I/O כבד",
        "\u200Fasyncio = Threading עם שם אחר",
        "\u200Fasyncio עובד רק עם HTTP, לא sockets",
        "\u200Fasyncio מריץ קוד על מספר CPU cores"
      ],
      explanation: "\u200F🔄 Event Loop:\n• async def handle(reader, writer):\n•     data = await reader.read(1024)\n•     writer.write(data)\n\n📋 ההבדל מ-Threading:\n• Thread: OS מחליף בין threads (preemptive)\n• asyncio: הקוד מחליף בנקודות await (cooperative)\n\n✅ יתרונות:\n• thread אחד = פחות זיכרון\n• אין race conditions\n• אלפי connections ב-thread אחד\n\n📌 asyncio.start_server() = שרת TCP אסינכרוני מובנה",
      explanationEn: "asyncio: asynchronous programming in single thread using event loop and coroutines. Difference from Threading: threads use preemptive switching (OS decides), asyncio uses cooperative switching (code yields at await points). Advantages: single thread = less memory, no race conditions, thousands of connections in one thread. asyncio.start_server() provides built-in async TCP server."
    }
  ],

  13: [
    {
      q: "\u200Fמה ההבדל בין latency ל-bandwidth?",
      correct: "\u200FLatency = זמן שלוקח לחבילה להגיע\nBandwidth = כמות נתונים לשנייה",
      choices: [
        "\u200FLatency = זמן שלוקח לחבילה להגיע\nBandwidth = כמות נתונים לשנייה",
        "\u200FLatency = רוחב הפס\nBandwidth = זמן התגובה",
        "\u200Fשניהם מדידות של מהירות הרשת",
        "\u200FLatency לרשת מקומית\nBandwidth לאינטרנט"
      ],
      explanation: "\u200F🚰 אנלוגיה — צינור מים:\n• Bandwidth = קוטר הצינור (כמה עובר)\n• Latency = כמה זמן לטיפה להגיע\n\n🎮 מי אוהב מה:\n• YouTube אוהב Bandwidth\n• Gaming אוהב Latency נמוכה"
    },
    {
      q: "\u200Fמה ההבדל בין throughput ל-bandwidth?",
      correct: "\u200FBandwidth: קיבולת מקסימלית תיאורטית של הקו\nThroughput: כמות הנתונים שעוברים בפועל\nThroughput תמיד נמוך מ-bandwidth",
      choices: [
        "\u200FBandwidth: קיבולת מקסימלית תיאורטית של הקו\nThroughput: כמות הנתונים שעוברים בפועל\nThroughput תמיד נמוך מ-bandwidth",
        "\u200Fשניהם זהים — מילים נרדפות",
        "\u200FBandwidth = upload, Throughput = download",
        "\u200FThroughput תמיד גבוה מ-bandwidth"
      ],
      explanation: "\u200F📡 Bandwidth:\n• קיבולת מקסימלית: 100Mbps\n• כמו רוחב הכביש\n\n📊 Throughput:\n• מה שבאמת עובר: 85Mbps\n• כמו מספר מכוניות שעוברות\n\n❓ למה יש פער?\n• Protocol overhead (headers)\n• Congestion (עומס)\n• Latency\n• Packet loss\n\n📌 Goodput: throughput מינוס overhead",
      explanationEn: "Bandwidth: maximum theoretical capacity (e.g., 100Mbps) — like road width. Throughput: actual data transferred (e.g., 85Mbps) — like cars actually passing. Gap caused by: protocol overhead (headers), congestion, latency, packet loss. Goodput: throughput minus overhead — only useful data."
    },
    {
      q: "\u200Fמה Proxy Server?",
      correct: "\u200Fשרת ביניים שמקבל בקשות מלקוחות\nומעביר אותן לשרת היעד\nמסתיר את זהות הלקוח ומאפשר cache",
      choices: [
        "\u200Fשרת ביניים שמקבל בקשות מלקוחות\nומעביר אותן לשרת היעד\nמסתיר את זהות הלקוח ומאפשר cache",
        "\u200FProxy = VPN לגלישה אנונימית",
        "\u200FProxy = Firewall מתקדם",
        "\u200FProxy עובד רק עם HTTP"
      ],
      explanation: "\u200F🔀 Forward Proxy:\n• Client → Proxy → Internet\n• מסתיר IP של הלקוח\n• cache — חוסך bandwidth\n• סינון תוכן (ארגונים, בתי ספר)\n\n🔀 Reverse Proxy:\n• Internet → Reverse Proxy → Servers\n• Nginx, HAProxy\n• Load balancing, SSL termination\n• הגנה על servers מאחורי ה-proxy\n\n📌 דוגמאות:\n• Squid (forward), Nginx (reverse), Cloudflare (reverse + CDN)",
      explanationEn: "Forward Proxy: Client to Proxy to Internet. Hides client IP, provides cache, content filtering. Reverse Proxy: Internet to Reverse Proxy to Servers. Used for load balancing, SSL termination, protecting backend servers. Examples: Squid (forward proxy), Nginx (reverse proxy), Cloudflare (reverse proxy + CDN)."
    },
    {
      q: "\u200Fמה ההבדל בין LAN ל-WAN?",
      correct: "\u200FLAN: רשת מקומית (בניין/משרד)\nWAN: רשת רחבה (בין ערים/מדינות)\nהאינטרנט הוא ה-WAN הגדול ביותר",
      choices: [
        "\u200FLAN: רשת מקומית (בניין/משרד)\nWAN: רשת רחבה (בין ערים/מדינות)\nהאינטרנט הוא ה-WAN הגדול ביותר",
        "\u200FLAN = אלחוטי, WAN = כבלים",
        "\u200FWAN מהיר יותר מ-LAN",
        "\u200FLAN ו-WAN זהים — רק גודל שונה"
      ],
      explanation: "\u200F🏢 LAN (Local Area Network):\n• משרד, בית, קומה\n• Ethernet, WiFi\n• מהירות: 1-10 Gbps\n• בבעלות הארגון\n\n🌍 WAN (Wide Area Network):\n• מדינות, יבשות\n• האינטרנט = ה-WAN הגדול\n• MPLS, VPN, leased lines\n• ISP מספק חיבור\n\n📌 SD-WAN:\n• WAN מנוהל בתוכנה\n• מחליף קווים שכורים יקרים",
      explanationEn: "LAN (Local Area Network): office, home, floor. Ethernet/WiFi, 1-10 Gbps, owned by organization. WAN (Wide Area Network): countries, continents. Internet is the largest WAN. Uses MPLS, VPN, leased lines. ISP provides connectivity. SD-WAN: software-managed WAN replacing expensive leased lines."
    }
  ],

  14: [
    {
      q: "\u200Fמה עושה הפקודה netstat?",
      correct: "\u200Fמציגה חיבורי רשת פעילים\nפורטים מאזינים ומידע על socket",
      choices: [
        "\u200Fמציגה חיבורי רשת פעילים\nפורטים מאזינים ומידע על socket",
        "\u200Fבודקת זמינות שרת ומציגה זמן תגובה",
        "\u200Fמציגה את טבלת הניתוב של המכשיר",
        "\u200Fמאפסת הגדרות כרטיס הרשת"
      ],
      explanation: "\u200F🕵️ netstat -an:\n• מציגה את כל החיבורים הפתוחים\n• תוכל לראות שהדפדפן שלך מחובר\n  ל-443 (HTTPS) של גוגל ו-YouTube\n\n🔎 כמו לפתוח חלון:\n• למה שקורה ברשת כרגע"
    ,
      qEn: "What does the netstat command do?",
      correctEn: "Shows active network connections,\nlistening ports, and socket info",
      choicesEn: [
        "Shows active network connections,\nlistening ports, and socket info",
        "Checks server availability and shows response time",
        "Shows the routing table of the device",
        "Resets network card settings"
      ]},
    {
      q: "\u200Fמה עושה הפקודה nslookup?",
      correct: "\u200Fשולחת שאילתת DNS\nומציגה את כתובת ה-IP של דומיין",
      choices: [
        "\u200Fשולחת שאילתת DNS\nומציגה את כתובת ה-IP של דומיין",
        "\u200Fבודקת פורטים פתוחים בשרת מרוחק",
        "\u200Fמציגה את ה-ARP cache של המכשיר",
        "\u200Fמנתחת עומס על הרשת"
      ],
      explanation: "\u200F🔍 דוגמאות שימוש:\n• nslookup google.com → 142.250.x.x\n• nslookup 8.8.8.8 → מחפש שם הפוך (PTR record)\n\n🛠️ כלי דיאגנוסטיקה בסיסי:\n• לכל מי שעובד עם רשתות"
    ,
      qEn: "What does the nslookup command do?",
      correctEn: "Sends a DNS query\nand shows the IP address of a domain",
      choicesEn: [
        "Sends a DNS query\nand shows the IP address of a domain",
        "Checks open ports on a remote server",
        "Shows the ARP cache of the device",
        "Analyzes network load"
      ]},
    {
      q: "\u200Fמה עושה פקודת arp -a?",
      correct: "\u200Fמציגה את טבלת ה-ARP המקומית\nממפה כתובות IP לכתובות MAC\nשל מכשירים שהמחשב כבר תקשר איתם",
      choices: [
        "\u200Fמציגה את טבלת ה-ARP המקומית\nממפה כתובות IP לכתובות MAC\nשל מכשירים שהמחשב כבר תקשר איתם",
        "\u200Fמציגה את כל ה-IP ברשת",
        "\u200Fסורקת רשת ומוצאת מכשירים חדשים",
        "\u200Fמנקה את ה-DNS cache"
      ],
      explanation: "\u200F📋 arp -a (Windows) / arp -n (Linux):\n• מציג: IP → MAC → Type (dynamic/static)\n• dynamic = נלמד מתגובות ARP\n• static = הוגדר ידנית\n\n🔧 פקודות נוספות:\n• arp -d * = מנקה את כל ה-cache\n• arp -s IP MAC = הוספה ידנית\n\n📌 שימוש ב-troubleshooting:\n• בדיקה שה-MAC נכון (לא ARP spoofing)\n• ip neigh (Linux חדש) = מחליף arp",
      explanationEn: "arp -a (Windows) / arp -n (Linux): displays local ARP table mapping IP to MAC to Type (dynamic/static). Dynamic = learned from ARP responses. Static = manually configured. Additional commands: arp -d * clears cache, arp -s IP MAC adds manually. Troubleshooting: verify correct MAC (detect ARP spoofing). ip neigh (modern Linux) replaces arp command."
    ,
      qEn: "What does the arp -a command do?",
      correctEn: "Shows the local ARP table\nmaps IP addresses to MAC addresses\nof devices the computer already communicated with",
      choicesEn: [
        "Shows the local ARP table\nmaps IP addresses to MAC addresses\nof devices the computer already communicated with",
        "Shows all IP addresses on the network",
        "Scans the network and finds new devices",
        "Clears the DNS cache"
      ]},
    {
      q: "\u200Fמה ההבדל בין ipconfig ל-ifconfig?",
      correct: "\u200Fipconfig = Windows — מציג IP, subnet, gateway\nifconfig = Linux/Mac — מציג interfaces ו-IP\nבלינוקס חדש: ip addr מחליף ifconfig",
      choices: [
        "\u200Fipconfig = Windows — מציג IP, subnet, gateway\nifconfig = Linux/Mac — מציג interfaces ו-IP\nבלינוקס חדש: ip addr מחליף ifconfig",
        "\u200Fipconfig ל-IPv4, ifconfig ל-IPv6",
        "\u200Fשניהם זהים — עובדים על כל מערכת הפעלה",
        "\u200Fifconfig מציג רק MAC, ipconfig מציג IP"
      ],
      explanation: "\u200F🪟 ipconfig (Windows):\n• ipconfig: IP, subnet, gateway\n• ipconfig /all: MAC, DNS, DHCP lease\n• ipconfig /release + /renew: DHCP\n• ipconfig /flushdns: ניקוי DNS cache\n\n🐧 ifconfig (Linux/Mac):\n• ifconfig: כל interfaces עם IP, MAC\n• ifconfig eth0 down/up: כיבוי/הפעלה\n\n📌 ip (Linux חדש):\n• ip addr show = ifconfig\n• ip route show = route\n• ip neigh show = arp",
      explanationEn: "ipconfig (Windows): shows IP, subnet, gateway. ipconfig /all: MAC, DNS, DHCP lease. ipconfig /release and /renew: DHCP operations. ipconfig /flushdns: clear DNS cache. ifconfig (Linux/Mac): shows all interfaces with IP, MAC. Modern Linux uses ip command: ip addr show (replaces ifconfig), ip route show (replaces route), ip neigh show (replaces arp)."
    ,
      qEn: "What is the difference between ipconfig and ifconfig?",
      correctEn: "ipconfig = Windows — shows IP, subnet, gateway\nifconfig = Linux/Mac — shows interfaces and IP\nModern Linux: ip addr replaces ifconfig",
      choicesEn: [
        "ipconfig = Windows — shows IP, subnet, gateway\nifconfig = Linux/Mac — shows interfaces and IP\nModern Linux: ip addr replaces ifconfig",
        "ipconfig for IPv4, ifconfig for IPv6",
        "Both are the same — work on all operating systems",
        "ifconfig shows only MAC, ipconfig shows IP"
      ]},
    {
      q: "\u200Fמה curl ולמה משתמשים בו?",
      correct: "\u200Fכלי שורת פקודה לשליחת HTTP requests\nתומך ב-GET, POST, headers, cookies\nשימושי לבדיקת APIs ו-web servers",
      choices: [
        "\u200Fכלי שורת פקודה לשליחת HTTP requests\nתומך ב-GET, POST, headers, cookies\nשימושי לבדיקת APIs ו-web servers",
        "\u200Fcurl = כלי להורדת קבצים בלבד",
        "\u200Fcurl = חלופה ל-ping לבדיקת זמינות",
        "\u200Fcurl עובד רק עם HTTPS"
      ],
      explanation: "\u200F🌐 דוגמאות:\n• curl https://example.com — GET פשוט\n• curl -I https://example.com — רק headers\n• curl -X POST -d '{\"key\":\"val\"}' URL — שליחת JSON\n• curl -o file.zip URL — הורדת קובץ\n\n🔧 אפשרויות:\n• -v: verbose — רואים request/response מלא\n• -L: follow redirects (301/302)\n\n📌 חלופות:\n• wget — הורדה פשוטה\n• httpie — curl ידידותי יותר",
      explanationEn: "curl examples: curl https://example.com (simple GET), curl -I (headers only), curl -X POST -d (send JSON), curl -o file.zip (download file). Useful options: -v (verbose, see full request/response), -L (follow redirects). Alternatives: wget (simple downloads), httpie (user-friendly curl)."
    ,
      qEn: "What is curl and why is it used?",
      correctEn: "Command line tool for sending HTTP requests\nSupports GET, POST, headers, cookies\nUseful for testing APIs and web servers",
      choicesEn: [
        "Command line tool for sending HTTP requests\nSupports GET, POST, headers, cookies\nUseful for testing APIs and web servers",
        "curl = a tool for downloading files only",
        "curl = an alternative to ping for checking availability",
        "curl works only with HTTPS"
      ]},
    {
      q: "\u200Fמה פקודת route print / ip route מציגה?",
      correct: "\u200Fאת טבלת הניתוב של המחשב\nכולל network destination, gateway, metric\nוכיצד חבילות מנותבות לרשתות שונות",
      choices: [
        "\u200Fאת טבלת הניתוב של המחשב\nכולל network destination, gateway, metric\nוכיצד חבילות מנותבות לרשתות שונות",
        "\u200Fמציגה את כל ה-DNS records",
        "\u200Fמציגה את מפת הרשת הפיזית",
        "\u200Fמציגה רק את ה-default gateway"
      ],
      explanation: "\u200F📋 route print (Windows):\n• Network Destination | Netmask | Gateway | Interface | Metric\n• 0.0.0.0 | 0.0.0.0 | 192.168.1.1 = default route\n\n🐧 ip route (Linux):\n• default via 192.168.1.1 dev eth0\n• 192.168.1.0/24 dev eth0 proto kernel\n\n🔧 ניהול:\n• route add / ip route add\n• Metric = עדיפות (נמוך = עדיף)\n\n📌 traceroute מציג route בפועל ברשת\n• route print = טבלה מקומית בלבד",
      explanationEn: "route print (Windows): shows Network Destination, Netmask, Gateway, Interface, Metric. 0.0.0.0 via 192.168.1.1 = default route to gateway. ip route (Linux): default via 192.168.1.1 dev eth0. Management: route add / ip route add. Metric = priority (lower = preferred). traceroute shows actual network path; route print shows local table only."
    ,
      qEn: "What does route print / ip route show?",
      correctEn: "The routing table of the computer\nincluding network destination, gateway, metric\nand how packets are routed to different networks",
      choicesEn: [
        "The routing table of the computer\nincluding network destination, gateway, metric\nand how packets are routed to different networks",
        "Shows all DNS records",
        "Shows the physical network map",
        "Shows only the default gateway"
      ]}
  ],

  15: [
    {
      q: "\u200Fמה ההבדל בין הצפנה סימטרית לאסימטרית?",
      correct: "\u200Fסימטרית: אותו מפתח להצפנה ופענוח\nאסימטרית: זוג מפתחות ציבורי/פרטי",
      choices: [
        "\u200Fסימטרית: אותו מפתח להצפנה ופענוח\nאסימטרית: זוג מפתחות ציבורי/פרטי",
        "\u200Fסימטרית מהירה יותר\nואסימטרית מאובטחת יותר תמיד",
        "\u200Fסימטרית לתעבורה\nאסימטרית לאחסון",
        "\u200Fאין הבדל — שתיהן משתמשות ב-AES"
      ],
      explanation: "\u200F🔑 TLS משתמש בשתיהן:\n• אסימטרית לחילוף מפתחות (Diffie-Hellman)\n  — איטי אבל לא צריך לשתף סוד מראש\n• סימטרית (AES-256) לתעבורה\n  — מהיר\n\n🏆 הכי טוב משני עולמות!"
    ,
      qEn: "What is the difference between symmetric and asymmetric encryption?",
      correctEn: "Symmetric: same key for encryption and decryption\nAsymmetric: a pair of public/private keys",
      choicesEn: [
        "Symmetric: same key for encryption and decryption\nAsymmetric: a pair of public/private keys",
        "Symmetric is faster\nand asymmetric is always more secure",
        "Symmetric for traffic\nAsymmetric for storage",
        "No difference — both use AES"
      ]},
    {
      q: "\u200Fמה TLS Handshake עושה?",
      correct: "\u200Fמסכים על גרסת TLS\nמאמת Certificate\nומחליף מפתחות לסשן מוצפן",
      choices: [
        "\u200Fמסכים על גרסת TLS\nמאמת Certificate\nומחליף מפתחות לסשן מוצפן",
        "\u200Fפותח חיבור TCP ומצפין אותו באופן אוטומטי",
        "\u200Fמוריד את Certificate מ-CA ומתקין אותו",
        "\u200Fמבדיל בין HTTP ל-HTTPS"
      ],
      explanation: "\u200F🤝 TLS Handshake — לחיצת יד מוצפנת:\n• Server מציג Certificate\n• Client מאמת מול CA\n• שניהם מחשבים session key\n\n⚡ כל זה לפני:\n• שנשלח ביית אחד של נתונים!"
    ,
      qEn: "What does the TLS Handshake do?",
      correctEn: "Agrees on TLS version\nverifies the Certificate\nand exchanges keys for an encrypted session",
      choicesEn: [
        "Agrees on TLS version\nverifies the Certificate\nand exchanges keys for an encrypted session",
        "Opens a TCP connection and encrypts it automatically",
        "Downloads the Certificate from a CA and installs it",
        "Distinguishes between HTTP and HTTPS"
      ]},
    {
      q: "\u200Fמה Certificate Authority (CA) עושה?",
      correct: "\u200Fחותמת דיגיטלית על Certificate של אתר\nמאמתת שהאתר אכן שייך לבעלים הנכון",
      choices: [
        "\u200Fחותמת דיגיטלית על Certificate של אתר\nמאמתת שהאתר אכן שייך לבעלים הנכון",
        "\u200Fיוצרת את מפתחות ההצפנה לכל אתר",
        "\u200Fמריצה שרתי DNS לתרגום דומיינים",
        "\u200Fמנהלת את האישורים של כל משתמשי האינטרנט"
      ],
      explanation: "\u200F📜 CA = נוטריון של האינטרנט:\n• DigiCert, Let's Encrypt, Comodo — כולן CA\n• הדפדפן סומך על רשימת CA מוכרת\n• אם CA חתמה — הדפדפן סומך\n\n🆓 Let's Encrypt:\n• 300M+ certificates חינמיים!"
    ,
      qEn: "What does a Certificate Authority (CA) do?",
      correctEn: "Digitally signs a website's Certificate\nverifies that the site belongs to the correct owner",
      choicesEn: [
        "Digitally signs a website's Certificate\nverifies that the site belongs to the correct owner",
        "Creates encryption keys for every website",
        "Runs DNS servers for domain translation",
        "Manages certificates of all internet users"
      ]},
    {
      q: "\u200Fמה ה-TLS handshake ואיזה שלבים כולל?",
      correct: "\u200FClientHello → ServerHello + Certificate\n→ Client key exchange → Finished (שני הצדדים)\nמסתיים עם symmetric key מוסכם",
      choices: [
        "\u200FClientHello → ServerHello + Certificate\n→ Client key exchange → Finished (שני הצדדים)\nמסתיים עם symmetric key מוסכם",
        "\u200FTLS = TCP handshake עם הצפנה",
        "\u200Fהשלבים: SYN → SYN-ACK → ACK + certificate",
        "\u200FTLS handshake = רק חיבור TCP"
      ],
      explanation: "\u200F🔐 TLS 1.2 — 2 RTT:\n• ClientHello: cipher suites, random, SNI\n• ServerHello: chosen cipher, certificate\n• Server Key Exchange (ECDHE)\n• Client Key Exchange: pre-master secret\n• Change Cipher Spec\n• Finished: HMAC אימות\n\n⚡ TLS 1.3 — 1 RTT:\n• 0-RTT אפשרי\n\n📌 Certificate Pinning:\n• app מאמת certificate ספציפי (לא רק CA)"
    ,
      qEn: "What is the TLS handshake and what steps does it include?",
      correctEn: "ClientHello → ServerHello + Certificate\n→ Client key exchange → Finished (both sides)\nEnds with an agreed symmetric key",
      choicesEn: [
        "ClientHello → ServerHello + Certificate\n→ Client key exchange → Finished (both sides)\nEnds with an agreed symmetric key",
        "TLS = TCP handshake with encryption",
        "Steps: SYN → SYN-ACK → ACK + certificate",
        "TLS handshake = just a TCP connection"
      ]},
    {
      q: "\u200Fמה Certificate Authority ואיך browsers סומכים על HTTPS?",
      correct: "\u200FCA = גוף שמוציא certificates חתומים\nBrowser כולל trust store עם root CAs\nשרשרת אמון: Root CA → Intermediate CA → Server Certificate",
      choices: [
        "\u200FCA = גוף שמוציא certificates חתומים\nBrowser כולל trust store עם root CAs\nשרשרת אמון: Root CA → Intermediate CA → Server Certificate",
        "\u200FBrowser בודק certificate ב-database מרכזי",
        "\u200Fכל certificate תקף אוטומטית ב-HTTPS",
        "\u200FCA = שרת DNS שמאמת certificates"
      ],
      explanation: "\u200F🔗 PKI (Public Key Infrastructure):\n• Root CA: trust anchor, offline, מוגן מאוד\n• Intermediate CA: online, חותמת certificates\n• Leaf Certificate: domain\n\n⚠️ Self-signed:\n• browser מזהיר אבל לא חוסם\n\n🆓 Let's Encrypt:\n• CA חינמי, 90-day certificates\n• ACME protocol ל-automation\n\n📋 ביטול certificates:\n• Certificate Transparency: log ציבורי\n• CRL/OCSP: ביטול certificates"
    ,
      qEn: "What is a Certificate Authority and how do browsers trust HTTPS?",
      correctEn: "CA = organization that issues signed certificates\nBrowser has a trust store with root CAs\nChain of trust: Root CA → Intermediate CA → Server Certificate",
      choicesEn: [
        "CA = organization that issues signed certificates\nBrowser has a trust store with root CAs\nChain of trust: Root CA → Intermediate CA → Server Certificate",
        "Browser checks certificates in a central database",
        "Every certificate is automatically valid in HTTPS",
        "CA = DNS server that verifies certificates"
      ]},
    {
      q: "\u200Fמה Perfect Forward Secrecy ולמה חשוב?",
      correct: "\u200FPFS: session key חדש לכל connection (ECDHE)\nאפילו אם private key נחשף עתידית\nsessions עבר לא ניתנים לפענוח",
      choices: [
        "\u200FPFS: session key חדש לכל connection (ECDHE)\nאפילו אם private key נחשף עתידית\nsessions עבר לא ניתנים לפענוח",
        "\u200FPFS = הצפנת passwords ב-browser",
        "\u200FPFS = פרוטוקול לשיתוף keys בין CAs",
        "\u200FPFS עובד רק ב-TLS 1.3"
      ],
      explanation: "\u200F🚨 ללא PFS (RSA key exchange):\n• NSA/attacker שומר encrypted traffic\n• לאחר שנים: private key נחשף\n• → מפענחים הכל רטרואקטיבית\n\n🛡️ עם ECDHE:\n• key ephemeral — נוצר רק ל-session ונמחק\n• TLS 1.3 חייב ECDHE\n\n📋 Cipher suites:\n• עם PFS: ECDHE-RSA-AES128-GCM-SHA256\n• ללא PFS: RSA-AES128-SHA (deprecated)"
    ,
      qEn: "What is Perfect Forward Secrecy and why is it important?",
      correctEn: "PFS: new session key for every connection (ECDHE)\nEven if the private key is exposed later,\npast sessions cannot be decrypted",
      choicesEn: [
        "PFS: new session key for every connection (ECDHE)\nEven if the private key is exposed later,\npast sessions cannot be decrypted",
        "PFS = encrypting passwords in the browser",
        "PFS = a protocol for sharing keys between CAs",
        "PFS works only in TLS 1.3"
      ]}
  ],

  16: [
    {
      q: "\u200Fמה ההבדל בין SMTP ל-IMAP?",
      correct: "\u200FSMTP = שליחת מייל\nIMAP = קריאת מייל (sync עם שרת)",
      choices: [
        "\u200FSMTP = שליחת מייל\nIMAP = קריאת מייל (sync עם שרת)",
        "\u200FSMTP = מוצפן\nIMAP = לא מוצפן",
        "\u200FSMTP לGmail\nIMAP לOutlook",
        "\u200Fשניהם לשליחה\nההבדל הוא בפורט"
      ],
      explanation: "\u200F📧 פרוטוקולי מייל:\n• SMTP (פורט 587) = שולח\n• IMAP (פורט 993) = קורא ומסנכרן עם שרת\n• מייל נשאר בשרת\n\n📥 POP3 (פורט 995):\n• מוריד ומוחק מהשרת\n• היום IMAP > POP3\n• כי רוצים sync בין מכשירים"
    ,
      qEn: "What is the difference between SMTP and IMAP?",
      correctEn: "SMTP = sending email\nIMAP = reading email (syncs with server)",
      choicesEn: [
        "SMTP = sending email\nIMAP = reading email (syncs with server)",
        "SMTP = encrypted\nIMAP = not encrypted",
        "SMTP for Gmail\nIMAP for Outlook",
        "Both are for sending\nThe difference is the port"
      ]},
    {
      q: "\u200Fמה SSH מאפשר לעשות?",
      correct: "\u200Fגישה מאובטחת ומוצפנת\nלשרת מרוחק דרך terminal",
      choices: [
        "\u200Fגישה מאובטחת ומוצפנת\nלשרת מרוחק דרך terminal",
        "\u200Fהעברת קבצים מהירה בין שרתים",
        "\u200Fניהול כתובות IP בצורה מרכזית",
        "\u200Fהצפנת תעבורת HTTP לHTTPS"
      ],
      explanation: "\u200F🔐 SSH — Secure Shell (פורט 22):\n• טלנט מוצפן\n• כותבת ssh user@server.com\n• יוצרת terminal מוצפן לשרת\n\n📂 העברת קבצים מעל SSH:\n• SCP — העתקה מוצפנת\n• SFTP — ניהול קבצים מוצפן\n• DevOps חיים על SSH"
    ,
      qEn: "What does SSH allow you to do?",
      correctEn: "Secure and encrypted access\nto a remote server via terminal",
      choicesEn: [
        "Secure and encrypted access\nto a remote server via terminal",
        "Fast file transfer between servers",
        "Centralized IP address management",
        "Encrypting HTTP traffic to HTTPS"
      ]},
    {
      q: "\u200Fמה הפורט הסטנדרטי של SSH?",
      correct: "\u200F22",
      choices: ["\u200F22", "\u200F23", "\u200F443", "\u200F8080"],
      explanation: "\u200F🔢 פורטים חשובים:\n• SSH = 22\n• Telnet = 23 (לא מוצפן!)\n• HTTPS = 443\n• HTTP = 80\n\n🛡️ טיפ אבטחה:\n• Admins לפעמים מעבירים SSH לפורט 2222\n• כדי להפחית bot scanning\n• security through obscurity — לא פתרון אמיתי"
    ,
      qEn: "What is the standard port of SSH?",
      correctEn: "22",
      choicesEn: [
        "22",
        "23",
        "443",
        "8080"
      ]},
    {
      q: "\u200Fמה ההבדל בין POP3 לבין IMAP?",
      correct: "\u200FPOP3: מוריד emails למחשב ומוחק מהשרת\nIMAP: מסנכרן — emails נשארים בשרת\nניתן לגשת ממכשירים מרובים",
      choices: [
        "\u200FPOP3: מוריד emails למחשב ומוחק מהשרת\nIMAP: מסנכרן — emails נשארים בשרת\nניתן לגשת ממכשירים מרובים",
        "\u200FPOP3 = email חדש\nIMAP = email ישן",
        "\u200Fשניהם זהים — רק ports שונים",
        "\u200FIMAP = הצפנה\nPOP3 = ללא הצפנה"
      ],
      explanation: "\u200F📬 פרוטוקולי קריאת מייל:\n• POP3 (port 110, SSL 995) — Post Office Protocol v3\n• IMAP (port 143, SSL 993) — Internet Message Access Protocol\n• SMTP (port 25/587) — שליחת email\n\n🔒 אבטחת מייל:\n• SPF — מאמת IP מורשה לשלוח מ-domain\n• DKIM — חותם דיגיטלי על email\n• DMARC — מדיניות SPF+DKIM failure\n• Email spoofing — ניתן לשלוח מ-any domain ללא SPF/DKIM"
    ,
      qEn: "What is the difference between POP3 and IMAP?",
      correctEn: "POP3: downloads emails to computer and deletes from server\nIMAP: syncs — emails stay on server\nYou can access from multiple devices",
      choicesEn: [
        "POP3: downloads emails to computer and deletes from server\nIMAP: syncs — emails stay on server\nYou can access from multiple devices",
        "POP3 = new email\nIMAP = old email",
        "Both are the same — just different ports",
        "IMAP = encryption\nPOP3 = no encryption"
      ]},
    {
      q: "\u200Fמה SSH ולמה הוא עדיף על Telnet?",
      correct: "\u200FSSH (port 22) מצפין את כל התקשורת כולל passwords\nTelnet (port 23) שולח הכל ב-plaintext\nניתן ליירוט עם Wireshark",
      choices: [
        "\u200FSSH (port 22) מצפין את כל התקשורת כולל passwords\nTelnet (port 23) שולח הכל ב-plaintext\nניתן ליירוט עם Wireshark",
        "\u200FSSH ו-Telnet זהים — רק שמות שונים",
        "\u200FSSH מהיר יותר מ-Telnet",
        "\u200FTelnet מוצפן ב-IPv6"
      ],
      explanation: "\u200F🔐 SSH (RFC 4253):\n• asymmetric ל-handshake + symmetric ל-session\n• Key-based auth: id_rsa (private), id_rsa.pub (public)\n• authorized_keys — SSH login ללא password\n\n🚇 יכולות מתקדמות:\n• Port forwarding: ssh -L 8080:internal:80\n• SCP/SFTP — file transfer מוצפן\n• SSH tunneling — הברחת traffic מוצפן דרך port 22\n• known_hosts — fingerprint verification"
    ,
      qEn: "What is SSH and why is it better than Telnet?",
      correctEn: "SSH (port 22) encrypts all traffic including passwords\nTelnet (port 23) sends everything in plaintext\nCan be intercepted with Wireshark",
      choicesEn: [
        "SSH (port 22) encrypts all traffic including passwords\nTelnet (port 23) sends everything in plaintext\nCan be intercepted with Wireshark",
        "SSH and Telnet are the same — just different names",
        "SSH is faster than Telnet",
        "Telnet is encrypted in IPv6"
      ]},
    {
      q: "\u200Fמה FTP Active Mode לעומת Passive Mode?",
      correct: "\u200FActive: server מתחבר חזרה ל-client\nעל port גבוה (בעיה עם NAT/firewall)\nPassive: client מתחבר ל-server\nעל port גבוה שהשרת מאשר",
      choices: [
        "\u200FActive: server מתחבר חזרה ל-client\nעל port גבוה (בעיה עם NAT/firewall)\nPassive: client מתחבר ל-server\nעל port גבוה שהשרת מאשר",
        "\u200FActive מהיר יותר\nPassive מאובטח יותר",
        "\u200Fההבדל רק ב-ports: 20 ו-21",
        "\u200FPassive = FTPS (encrypted FTP)"
      ],
      explanation: "\u200F📁 FTP — פורטים:\n• port 21 = control\n• port 20 = data\n\n🔄 מצבי עבודה:\n• Active Mode — server מתחבר ל-client:random port (NAT שובר)\n• Passive Mode — client מתחבר ל-server:random port (NAT-friendly)\n\n🔒 חלופות מאובטחות:\n• FTPS — FTP over TLS (explicit/implicit)\n• SFTP — SSH File Transfer Protocol (port 22, אחר לגמרי)\n• FTP plaintext — לא לשימוש ללא TLS\n• חלופות: SFTP, SCP, rsync over SSH, S3"
    ,
      qEn: "What is FTP Active Mode vs Passive Mode?",
      correctEn: "Active: server connects back to client\non a high port (problem with NAT/firewall)\nPassive: client connects to server\non a high port the server approves",
      choicesEn: [
        "Active: server connects back to client\non a high port (problem with NAT/firewall)\nPassive: client connects to server\non a high port the server approves",
        "Active is faster\nPassive is more secure",
        "The difference is only ports: 20 and 21",
        "Passive = FTPS (encrypted FTP)"
      ]}
  ],

  17: [
    {
      q: "\u200Fמה /24 אומר בכתובת 192.168.1.0/24?",
      correct: "\u200F24 ביטים לזיהוי הרשת\n8 ביטים לזיהוי מארח\n256 כתובות (254 שמישות)",
      choices: [
        "\u200F24 ביטים לזיהוי הרשת\n8 ביטים לזיהוי מארח\n256 כתובות (254 שמישות)",
        "\u200F24 מחשבים מחוברים לרשת כרגע",
        "\u200Fהרשת מספר 24 בסדרה",
        "\u200F24 נתבים בין המחשב לאינטרנט"
      ],
      explanation: "\u200F🎯 CIDR notation:\n• /24 = subnet mask 255.255.255.0\n• 8 ביטים = 256 כתובות\n• מינוס network address ומינוס broadcast = 254 שמישות\n\n📊 דוגמאות נוספות:\n• /16 = 65,534 שמישות\n• /32 = כתובת בודדת"
    ,
      qEn: "What does /24 mean in the address 192.168.1.0/24?",
      correctEn: "24 bits for network identification\n8 bits for host identification\n256 addresses (254 usable)",
      choicesEn: [
        "24 bits for network identification\n8 bits for host identification\n256 addresses (254 usable)",
        "24 computers are currently connected to the network",
        "Network number 24 in the series",
        "24 routers between the computer and the internet"
      ]},
    {
      q: "\u200Fמה ה-CIDR notation /24 ומה ה-subnet mask שלו?",
      correct: "\u200F/24 = 255.255.255.0\n256 כתובות, 254 usable hosts\n(פחות network ו-broadcast)",
      choices: [
        "\u200F/24 = 255.255.255.0\n256 כתובות, 254 usable hosts\n(פחות network ו-broadcast)",
        "\u200F/24 = 24 hosts בלבד",
        "\u200F/24 = 255.255.255.255",
        "\u200F/24 = class B network"
      ],
      explanation: "\u200F📐 CIDR (Classless Inter-Domain Routing):\n• /prefix = מספר bits ב-network\n• /24: 2^8=256 כתובות\n• /23: 2^9=512\n• /16: 65536\n• /32: host אחד\n\n🔢 Subnet masks:\n• /24 = 255.255.255.0\n• /16 = 255.255.0.0\n• /8 = 255.0.0.0\n\n📌 חישוב:\n• Network address — כל host bits=0\n• Broadcast — כל host bits=1\n• Usable: 256-2=254\n• VLSM — חלוקה לא שווה של subnets"
    ,
      qEn: "What is the CIDR notation /24 and what is its subnet mask?",
      correctEn: "/24 = 255.255.255.0\n256 addresses, 254 usable hosts\n(minus network and broadcast)",
      choicesEn: [
        "/24 = 255.255.255.0\n256 addresses, 254 usable hosts\n(minus network and broadcast)",
        "/24 = 24 hosts only",
        "/24 = 255.255.255.255",
        "/24 = class B network"
      ]},
    {
      q: "\u200Fכיצד מחלקים 192.168.1.0/24 ל-4 subnets שווים?",
      correct: "\u200Fלוקחים 2 bits נוספים: /26\nכל subnet = 64 כתובות\n.0/26, .64/26, .128/26, .192/26",
      choices: [
        "\u200Fלוקחים 2 bits נוספים: /26\nכל subnet = 64 כתובות\n.0/26, .64/26, .128/26, .192/26",
        "\u200F/24 לארבעה /25 subnets",
        "\u200F/28 = 4 subnets מ-/24",
        "\u200F2^4=16 subnets מ-/24 עם /28"
      ],
      explanation: "\u200F🧮 חישוב:\n• 4 subnets: 2^2=4 → לוקחים 2 bits → /26\n• כל /26 = 64 כתובות (62 usable)\n\n📋 ה-subnets:\n• .0/26: range .0-.63, hosts .1-.62\n• .64/26: range .64-.127, hosts .65-.126\n• .128/26: range .128-.191\n• .192/26: range .192-.255\n\n💡 בינארי:\n• 192.168.1.0 = 11000000.10101000.00000001.00|000000\n• ה-bit ה-25 ו-26 הפכו network bits"
    ,
      qEn: "How do you split 192.168.1.0/24 into 4 equal subnets?",
      correctEn: "Take 2 extra bits: /26\nEach subnet = 64 addresses\n.0/26, .64/26, .128/26, .192/26",
      choicesEn: [
        "Take 2 extra bits: /26\nEach subnet = 64 addresses\n.0/26, .64/26, .128/26, .192/26",
        "/24 into four /25 subnets",
        "/28 = 4 subnets from /24",
        "2^4=16 subnets from /24 with /28"
      ]},
    {
      q: "\u200Fמה Supernetting (Route Summarization)?",
      correct: "\u200Fאיחוד מספר networks רצופים\nל-representation אחד קטן יותר ב-routing table\n/24 + /24 = /23",
      choices: [
        "\u200Fאיחוד מספר networks רצופים\nל-representation אחד קטן יותר ב-routing table\n/24 + /24 = /23",
        "\u200FSupernetting = Subnetting הפוך בלבד",
        "\u200Fלא ניתן לאחד networks",
        "\u200FSupernetting = IPv6 transition mechanism"
      ],
      explanation: "\u200F🔗 Route summarization:\n• 192.168.0.0/24 + 192.168.1.0/24 → 192.168.0.0/23\n• תנאי: networks חייבים להיות contiguous ולחלוק prefix\n\n📈 יתרונות:\n• routing table קטן יותר\n• פחות BGP updates\n• convergence מהיר\n\n🌐 בפועל:\n• ISP: 100 /24 prefixes → 1 /16 summary\n• BGP aggregation — reduce routing table size\n• Internet full routing table: ~900K vs ~60K ב-2000"
    ,
      qEn: "What is Supernetting (Route Summarization)?",
      correctEn: "Combining several consecutive networks\ninto one smaller representation in the routing table\n/24 + /24 = /23",
      choicesEn: [
        "Combining several consecutive networks\ninto one smaller representation in the routing table\n/24 + /24 = /23",
        "Supernetting = reverse Subnetting only",
        "Networks cannot be combined",
        "Supernetting = IPv6 transition mechanism"
      ]},
    {
      q: "\u200Fאיך Subnetting משמש בארכיטקטורת ענן (AWS VPC)?",
      correct: "\u200FVPC מחולק ל-Subnets בכל Availability Zone\nPublic subnet (עם Internet Gateway)\nPrivate subnet (ללא גישה ישירה מהאינטרנט)",
      choices: [
        "\u200FVPC מחולק ל-Subnets בכל Availability Zone\nPublic subnet (עם Internet Gateway)\nPrivate subnet (ללא גישה ישירה מהאינטרנט)",
        "\u200FAWS לא משתמש ב-Subnetting — רק ב-Security Groups",
        "\u200Fכל VPC הוא subnet אחד גדול",
        "\u200FSubnetting בענן שונה לחלוטין מ-on-premise"
      ],
      explanation: "\u200F☁️ AWS VPC Architecture:\n• VPC: 10.0.0.0/16 (65,536 IPs)\n• Public Subnet: 10.0.1.0/24 (AZ-a)\n• Private Subnet: 10.0.2.0/24 (AZ-a)\n\n🌐 Public Subnet:\n• Internet Gateway → אינטרנט\n• Web servers, Load Balancers\n\n🔒 Private Subnet:\n• ללא internet gateway\n• Databases, internal services\n• NAT Gateway ליציאה לאינטרנט\n\n📌 CIDR planning:\n• /16 ל-VPC, /24 ל-subnets\n• חישוב מראש — לא ניתן לשנות!",
      explanationEn: "AWS VPC Architecture: VPC 10.0.0.0/16 (65,536 IPs), divided into subnets per Availability Zone. Public Subnet: has Internet Gateway, hosts web servers and load balancers. Private Subnet: no internet gateway, hosts databases, uses NAT Gateway for outbound. CIDR planning: /16 for VPC, /24 for subnets. Plan ahead — VPC CIDR cannot be changed!"
    ,
      qEn: "How is Subnetting used in cloud architecture (AWS VPC)?",
      correctEn: "VPC is divided into Subnets in each Availability Zone\nPublic subnet (with Internet Gateway)\nPrivate subnet (no direct internet access)",
      choicesEn: [
        "VPC is divided into Subnets in each Availability Zone\nPublic subnet (with Internet Gateway)\nPrivate subnet (no direct internet access)",
        "AWS does not use Subnetting — only Security Groups",
        "Every VPC is one large subnet",
        "Subnetting in cloud is completely different from on-premise"
      ]}
  ],

  18: [
    {
      q: "\u200Fכמה ביטים בכתובת IPv6?",
      correct: "\u200F128 ביטים\nמספיק לכ-340 undecillion כתובות",
      choices: [
        "\u200F128 ביטים\nמספיק לכ-340 undecillion כתובות",
        "\u200F64 ביטים",
        "\u200F32 ביטים (כמו IPv4)",
        "\u200F256 ביטים"
      ],
      explanation: "\u200F🌐 השוואת גרסאות:\n• IPv4 = 32 ביטים = ~4 מיליארד כתובות\n• IPv6 = 128 ביטים = 340 עם 36 אפסים אחריו\n\n💡 פרספקטיבה:\n• לכל אטום על פני כדור הארץ\n• יכולנו לתת כמה מיליארד כתובות\n• המחסור ב-IPv4 הוא הסיבה ל-IPv6"
    ,
      qEn: "How many bits are in an IPv6 address?",
      correctEn: "128 bits\nEnough for about 340 undecillion addresses",
      choicesEn: [
        "128 bits\nEnough for about 340 undecillion addresses",
        "64 bits",
        "32 bits (same as IPv4)",
        "256 bits"
      ]},
    {
      q: "\u200Fמה ::1 אומר ב-IPv6?",
      correct: "\u200Fכתובת Loopback\nכמו 127.0.0.1 ב-IPv4",
      choices: [
        "\u200Fכתובת Loopback\nכמו 127.0.0.1 ב-IPv4",
        "\u200Fכתובת Gateway ברירת מחדל",
        "\u200Fכתובת Broadcast",
        "\u200Fכתובת ריקה לא מוקצית"
      ],
      explanation: "\u200F🔁 כתובות מיוחדות ב-IPv6:\n• ::1 = 0000...0001 = localhost\n• :: הוא קיצור לקבוצות אפסים רצופות\n\n📋 טווחים חשובים:\n• fe80::/10 = Link-local\n• 2001::/32 = Teredo tunneling\n• IPv6 יש לו הרבה טווחים מיוחדים"
    ,
      qEn: "What does ::1 mean in IPv6?",
      correctEn: "Loopback address\nSame as 127.0.0.1 in IPv4",
      choicesEn: [
        "Loopback address\nSame as 127.0.0.1 in IPv4",
        "Default Gateway address",
        "Broadcast address",
        "Empty unassigned address"
      ]},
    {
      q: "\u200Fמה ההבדל בין IPv4 ל-IPv6 header?",
      correct: "\u200FIPv6 header קבוע 40 bytes (פשוט יותר)\nללא checksum, ללא fragmentation ב-router\naddresses 128 bit",
      choices: [
        "\u200FIPv6 header קבוע 40 bytes (פשוט יותר)\nללא checksum, ללא fragmentation ב-router\naddresses 128 bit",
        "\u200FIPv6 = IPv4 עם addresses גדולים יותר בלבד",
        "\u200FIPv6 header גדול יותר ומכיל יותר fields",
        "\u200Fההבדל רק בגודל address"
      ],
      explanation: "\u200F📦 גודל header:\n• IPv4 header: 20-60 bytes, variable\n• IPv6 header: fixed 40 bytes\n\n🗑️ מה הוסר:\n• Header Checksum (כי L2/L4 עושים checksum)\n• Fragmentation fields (router לא מפרגמנט — source עושה PMTUD)\n• IHL (קבוע)\n\n➕ מה הוסף:\n• Flow Label (QoS)\n• Extension headers — כל אחד מוסיף functionality\n• Routers מעבדים header קבוע מהר יותר"
    ,
      qEn: "What is the difference between IPv4 and IPv6 headers?",
      correctEn: "IPv6 header is fixed 40 bytes (simpler)\nNo checksum, no fragmentation in router\nAddresses are 128 bit",
      choicesEn: [
        "IPv6 header is fixed 40 bytes (simpler)\nNo checksum, no fragmentation in router\nAddresses are 128 bit",
        "IPv6 = IPv4 with larger addresses only",
        "IPv6 header is larger and has more fields",
        "The difference is only in address size"
      ]},
    {
      q: "\u200Fמה SLAAC ב-IPv6?",
      correct: "\u200FStateless Address Autoconfiguration\ndevice יוצר IPv6 address אוטומטית:\nprefix מ-RA + interface ID מ-EUI-64 (מ-MAC)",
      choices: [
        "\u200FStateless Address Autoconfiguration\ndevice יוצר IPv6 address אוטומטית:\nprefix מ-RA + interface ID מ-EUI-64 (מ-MAC)",
        "\u200FSLAAC = DHCPv6 בשם אחר",
        "\u200FSLAAC = Static address ב-IPv6",
        "\u200FSLAAC עובד רק ב-enterprise networks"
      ],
      explanation: "\u200F🔧 תהליך SLAAC:\n• Router שולח RA (Router Advertisement) עם prefix\n• Device: EUI-64 = MAC 48bit → 64bit\n• מוסיף FF:FE באמצע + flip bit\n• prefix + EUI-64 = /128 IPv6\n\n🔒 בעיית פרטיות:\n• MAC חשוף ב-address\n• Privacy Extensions (RFC 4941) — random interface ID שמשתנה\n\n📡 חלופות:\n• DHCPv6 — stateful (כמו DHCPv4), עם/ללא SLAAC\n• NDP (Neighbor Discovery) = IPv6 equivalent ל-ARP"
    ,
      qEn: "What is SLAAC in IPv6?",
      correctEn: "Stateless Address Autoconfiguration\nDevice creates IPv6 address automatically:\nprefix from RA + interface ID from EUI-64 (from MAC)",
      choicesEn: [
        "Stateless Address Autoconfiguration\nDevice creates IPv6 address automatically:\nprefix from RA + interface ID from EUI-64 (from MAC)",
        "SLAAC = DHCPv6 with a different name",
        "SLAAC = Static address in IPv6",
        "SLAAC works only in enterprise networks"
      ]},
    {
      q: "\u200Fמה כתובות Multicast ב-IPv6 ולמה הן מחליפות broadcast?",
      correct: "\u200FIPv6 אין broadcast\nMulticast: ff00::/8\nff02::1 = all nodes\nff02::2 = all routers",
      choices: [
        "\u200FIPv6 אין broadcast\nMulticast: ff00::/8\nff02::1 = all nodes\nff02::2 = all routers",
        "\u200FIPv6 משתמש ב-broadcast כמו IPv4",
        "\u200FMulticast = Anycast ב-IPv6",
        "\u200Fff00::/8 = private range ב-IPv6"
      ],
      explanation: "\u200F📡 סוגי כתובות IPv6:\n• Unicast — global 2000::/3, link-local fe80::/10, unique-local fc00::/7\n• Multicast — ff00::/8\n• Anycast — same address = multiple hosts\n\n🔍 Solicited-Node multicast:\n• ff02::1:ff + last 24 bits of target IP\n• NDP משתמש בזה במקום ARP broadcast\n• Link-local fe80:: חייב על כל interface\n• לא routable, ל-NDP/RA"
    ,
      qEn: "What are Multicast addresses in IPv6 and why do they replace broadcast?",
      correctEn: "IPv6 has no broadcast\nMulticast: ff00::/8\nff02::1 = all nodes\nff02::2 = all routers",
      choicesEn: [
        "IPv6 has no broadcast\nMulticast: ff00::/8\nff02::1 = all nodes\nff02::2 = all routers",
        "IPv6 uses broadcast like IPv4",
        "Multicast = Anycast in IPv6",
        "ff00::/8 = private range in IPv6"
      ]}
  ],

  19: [
    {
      q: "\u200Fמה ההבדל בין DNS Recursive Resolver לבין Authoritative Name Server?",
      correct: "\u200FRecursive = שואל בשמך ומחפש התשובה\nAuthoritative = יודע את התשובה הסופית",
      choices: [
        "\u200FRecursive = שואל בשמך ומחפש התשובה\nAuthoritative = יודע את התשובה הסופית",
        "\u200FRecursive = מהיר יותר\nAuthoritative = מאובטח יותר",
        "\u200FRecursive של ה-ISP\nAuthoritative של גוגל",
        "\u200Fאין הבדל — שניהם עושים אותו דבר"
      ],
      explanation: "\u200F🔍 תהליך DNS query:\n• שואלת 8.8.8.8 (Google Recursive) על google.com\n• הוא שואל Root → .com TLD → Google Authoritative\n\n📌 חלוקת תפקידים:\n• Google Authoritative יודע google.com = 142.250.x.x\n• Recursive עושה את כל העבודה בשבילך"
    ,
      qEn: "What is the difference between a DNS Recursive Resolver and an Authoritative Name Server?",
      correctEn: "Recursive = asks on your behalf and finds the answer\nAuthoritative = knows the final answer",
      choicesEn: [
        "Recursive = asks on your behalf and finds the answer\nAuthoritative = knows the final answer",
        "Recursive = faster\nAuthoritative = more secure",
        "Recursive belongs to ISP\nAuthoritative belongs to Google",
        "No difference — both do the same thing"
      ]},
    {
      q: "\u200Fמה DNS TTL קובע?",
      correct: "\u200Fכמה זמן (בשניות) DNS cache\nיכול להשתמש בתשובה\nלפני שישאל שוב",
      choices: [
        "\u200Fכמה זמן (בשניות) DNS cache\nיכול להשתמש בתשובה\nלפני שישאל שוב",
        "\u200Fכמה זמן הדומיין רשום ל-registrar",
        "\u200Fמהירות העברת DNS query",
        "\u200Fמספר ה-Name Servers לדומיין"
      ],
      explanation: "\u200F🕐 TTL = Time To Live:\n• google.com TTL=300 (5 דקות)\n• אתר קטן יכול לשים TTL=86400 (יום) — פחות queries\n\n💡 טיפ חשוב:\n• לפני שינוי DNS — הורד TTL ל-60s מראש\n• כדי שהשינוי יתפשט מהר"
    ,
      qEn: "What does DNS TTL determine?",
      correctEn: "How long (in seconds) the DNS cache\ncan use an answer\nbefore asking again",
      choicesEn: [
        "How long (in seconds) the DNS cache\ncan use an answer\nbefore asking again",
        "How long the domain is registered with the registrar",
        "Speed of DNS query transfer",
        "Number of Name Servers for the domain"
      ]},
    {
      q: "\u200Fמה DNS over HTTPS (DoH) מוסיף?",
      correct: "\u200Fמצפין DNS queries\nכדי שה-ISP לא יוכל לראות מה מחפשים",
      choices: [
        "\u200Fמצפין DNS queries\nכדי שה-ISP לא יוכל לראות מה מחפשים",
        "\u200Fמאיץ את ה-DNS resolution",
        "\u200Fמוסיף HTTPS לכל האתרים",
        "\u200Fמחליף את כתובות IP בשמות דומיין"
      ],
      explanation: "\u200F🔒 הבעיה:\n• DNS רגיל = ב-plaintext\n• ISP רואה כל lookup\n\n🛡️ הפתרון — DoH:\n• DNS query עובר כ-HTTPS\n• לשרת כמו 1.1.1.1 או 8.8.8.8\n• ISP רואה חיבור ל-1.1.1.1 — לא מה שחיפשת\n• Firefox ו-Chrome תומכים ב-DoH כברירת מחדל"
    ,
      qEn: "What does DNS over HTTPS (DoH) add?",
      correctEn: "Encrypts DNS queries\nso the ISP cannot see what you search for",
      choicesEn: [
        "Encrypts DNS queries\nso the ISP cannot see what you search for",
        "Speeds up DNS resolution",
        "Adds HTTPS to all websites",
        "Replaces IP addresses with domain names"
      ]},
    {
      q: "\u200Fמה DNS TTL ואיך משפיע על תפוצה של שינויים?",
      correct: "\u200FTTL = כמה שניות record נשמר ב-cache\nTTL נמוך = שינויים מהירים (אבל יותר queries)\nTTL גבוה = performance אבל שינוי אטי",
      choices: [
        "\u200FTTL = כמה שניות record נשמר ב-cache\nTTL נמוך = שינויים מהירים (אבל יותר queries)\nTTL גבוה = performance אבל שינוי אטי",
        "\u200FTTL = כמה DNS servers זוכרים את ה-record",
        "\u200FTTL רק ל-MX records",
        "\u200FTTL קבוע = 24 שעות לכולם"
      ],
      explanation: "\u200F🔄 תהליך migration:\n• Before: הפחת TTL ל-300s (5 min) 24-48 שעות מראש\n• Migration: שנה IP\n• Old TTL: עד 24 שעות cache נשמר\n• עם TTL=300: רק 5 דקות\n• After: החזר TTL ל-3600+ ל-performance\n\n📋 DNS record types:\n• A (IPv4), AAAA (IPv6), CNAME (alias)\n• MX (mail), TXT (SPF/DKIM/verification)\n• NS (nameserver), SOA (authority)\n• PTR (reverse), SRV (services)"
    ,
      qEn: "What is DNS TTL and how does it affect change propagation?",
      correctEn: "TTL = how many seconds a record is kept in cache\nLow TTL = fast changes (but more queries)\nHigh TTL = performance but slow changes",
      choicesEn: [
        "TTL = how many seconds a record is kept in cache\nLow TTL = fast changes (but more queries)\nHigh TTL = performance but slow changes",
        "TTL = how many DNS servers remember the record",
        "TTL only for MX records",
        "TTL is fixed = 24 hours for everyone"
      ]},
    {
      q: "\u200Fמה ההבדל בין Authoritative DNS לבין Recursive Resolver?",
      correct: "\u200FAuthoritative: המקור הסמכותי ל-domain (ns1.google.com)\nRecursive: עושה את כל ה-pipeline\nבשביל client (8.8.8.8)",
      choices: [
        "\u200FAuthoritative: המקור הסמכותי ל-domain (ns1.google.com)\nRecursive: עושה את כל ה-pipeline\nבשביל client (8.8.8.8)",
        "\u200Fשניהם זהים",
        "\u200FAuthoritative = DNS פרטי\nRecursive = ציבורי",
        "\u200FRecursive = Root DNS server"
      ],
      explanation: "\u200F🔄 Recursive Resolver (8.8.8.8, 1.1.1.1):\n• שואל Root → TLD → Authoritative ומחזיר ל-client\n• מחזיק cache\n\n📁 Authoritative NS (Route 53, Cloudflare DNS):\n• מחזיק zone file עם כל records\n\n🌍 היררכיה:\n• Root servers: 13 logical (a-m.root-servers.net) = Anycast = מאות servers\n• TLD: .com (Verisign), .il (ISOC-IL)\n• Delegation: NS records ב-parent zone מפנים ל-child authoritative"
    ,
      qEn: "What is the difference between Authoritative DNS and Recursive Resolver?",
      correctEn: "Authoritative: the official source for a domain (ns1.google.com)\nRecursive: does the entire pipeline\nfor the client (8.8.8.8)",
      choicesEn: [
        "Authoritative: the official source for a domain (ns1.google.com)\nRecursive: does the entire pipeline\nfor the client (8.8.8.8)",
        "Both are the same",
        "Authoritative = private DNS\nRecursive = public",
        "Recursive = Root DNS server"
      ]},
    {
      q: "\u200Fמה DNS Cache Poisoning ואיך DNSSEC מגן?",
      correct: "\u200FPoisoning: תוקף שולח DNS responses מזויפים\nל-cache resolver לפני תגובה אמיתית\nDNSSEC: חתימות קריפטוגרפיות על records",
      choices: [
        "\u200FPoisoning: תוקף שולח DNS responses מזויפים\nל-cache resolver לפני תגובה אמיתית\nDNSSEC: חתימות קריפטוגרפיות על records",
        "\u200FDNS Poisoning = שינוי /etc/hosts",
        "\u200FDNSSEC = TLS ל-DNS",
        "\u200FDNS Poisoning עובד רק ב-IPv4"
      ],
      explanation: "\u200F☠️ Kaminsky Attack (2008):\n• ניחוש Transaction ID + source port\n• race condition → poison cache\n\n🛡️ DNSSEC — הגנה:\n• Zone Signing Key + Key Signing Key\n• RRSIG — חתימה על כל record\n• DS record — hash של child zone key ב-parent\n• Chain of trust: Root → TLD → domain\n\n📌 חשוב לדעת:\n• DNSSEC לא מצפין (DoT/DoH לזה)\n• בדיקה: dig +dnssec google.com"
    ,
      qEn: "What is DNS Cache Poisoning and how does DNSSEC protect?",
      correctEn: "Poisoning: attacker sends fake DNS responses\nto cache resolver before the real response\nDNSSEC: cryptographic signatures on records",
      choicesEn: [
        "Poisoning: attacker sends fake DNS responses\nto cache resolver before the real response\nDNSSEC: cryptographic signatures on records",
        "DNS Poisoning = changing /etc/hosts",
        "DNSSEC = TLS for DNS",
        "DNS Poisoning works only in IPv4"
      ]}
  ],

  20: [
    {
      q: "\u200Fמה Sliding Window ב-TCP?",
      correct: "\u200Fמאפשר לשלוח מספר segments\nללא המתנה ל-ACK לכל אחד",
      choices: [
        "\u200Fמאפשר לשלוח מספר segments\nללא המתנה ל-ACK לכל אחד",
        "\u200Fחלון הזמן שבו TCP מחכה ל-ACK לפני retry",
        "\u200Fגודל ה-buffer של ה-socket",
        "\u200Fמספר החיבורים המקבילים ל-TCP"
      ],
      explanation: "\u200F📊 בלי Sliding Window:\n• שלח → המתן ACK → שלח → המתן\n\n🚀 עם Window Size=10:\n• שלח 10 segments → קבל ACKs → הזז חלון\n• Pipeline מלא = ניצול מלא של הרשת\n• Window Size גדל דינמית עם הזמן"
    ,
      qEn: "What is Sliding Window in TCP?",
      correctEn: "Allows sending multiple segments\nwithout waiting for an ACK for each one",
      choicesEn: [
        "Allows sending multiple segments\nwithout waiting for an ACK for each one",
        "Time window in which TCP waits for ACK before retry",
        "Size of the socket buffer",
        "Number of parallel TCP connections"
      ]},
    {
      q: "\u200Fמה Slow Start ב-TCP Congestion Control?",
      correct: "\u200FTCP מתחיל עם window קטן\nומכפיל אותו בכל RTT\nעד שמגיע ל-congestion threshold",
      choices: [
        "\u200FTCP מתחיל עם window קטן\nומכפיל אותו בכל RTT\nעד שמגיע ל-congestion threshold",
        "\u200FTCP מאט את שליחת החבילות ב-router עמוס",
        "\u200Fהגדרה ידנית של מהירות ה-connection",
        "\u200Fתהליך ה-handshake האיטי של TCP"
      ],
      explanation: "\u200F🚗 Slow Start — כמו לדרוך על גז ואז לבלום:\n• cwnd=1 → 2 → 4 → 8 (exponential)\n• כשמגיע ל-ssthresh — עובר ל-Congestion Avoidance (linear +1)\n• כשיש loss — ssthresh=cwnd/2, cwnd=1\n• מתחיל מחדש"
    ,
      qEn: "What is Slow Start in TCP Congestion Control?",
      correctEn: "TCP starts with a small window\nand doubles it every RTT\nuntil reaching the congestion threshold",
      choicesEn: [
        "TCP starts with a small window\nand doubles it every RTT\nuntil reaching the congestion threshold",
        "TCP slows down packet sending at a busy router",
        "Manual setting of connection speed",
        "The slow TCP handshake process"
      ]},
    {
      q: "\u200Fמה TCP Slow Start ואיך Congestion Control עובד?",
      correct: "\u200FSlow Start: מתחיל עם cwnd=1\nמכפיל בכל RTT עד ssthresh\nCongestion Avoidance: מוסיף 1 בכל RTT\nLoss = חזרה ל-slow start",
      choices: [
        "\u200FSlow Start: מתחיל עם cwnd=1\nמכפיל בכל RTT עד ssthresh\nCongestion Avoidance: מוסיף 1 בכל RTT\nLoss = חזרה ל-slow start",
        "\u200FTCP שולח בקצב קבוע מההתחלה",
        "\u200FCongestion Control = Flow Control — זהה",
        "\u200Fcwnd לא משתנה לאחר ביסוס חיבור"
      ],
      explanation: "\u200F⚙️ TCP Congestion Control (CUBIC ב-Linux, BBR של Google):\n• cwnd = congestion window\n\n📈 שלבים:\n• Slow Start — exponential\n• Congestion Avoidance — linear\n• Fast Retransmit — 3 dup-ACKs → retransmit\n• Fast Recovery — ssthresh=cwnd/2, לא איפוס מלא\n\n🔬 אלגוריתמים מתקדמים:\n• BBR — מבוסס על bandwidth + RTT, לא רק loss\n• QUIC/HTTP3 — congestion control ב-userspace"
    ,
      qEn: "What is TCP Slow Start and how does Congestion Control work?",
      correctEn: "Slow Start: starts with cwnd=1\ndoubles every RTT until ssthresh\nCongestion Avoidance: adds 1 per RTT\nLoss = back to slow start",
      choicesEn: [
        "Slow Start: starts with cwnd=1\ndoubles every RTT until ssthresh\nCongestion Avoidance: adds 1 per RTT\nLoss = back to slow start",
        "TCP sends at a constant rate from the start",
        "Congestion Control = Flow Control — same thing",
        "cwnd does not change after connection is established"
      ]},
    {
      q: "\u200Fמה TCP Window Size ומה Receive Buffer?",
      correct: "\u200FWindow Size: כמה bytes sender יכול לשלוח לפני ACK\nReceive Buffer: מה ש-OS מקצה לקריאת נתונים\nZero Window = buffer מלא",
      choices: [
        "\u200FWindow Size: כמה bytes sender יכול לשלוח לפני ACK\nReceive Buffer: מה ש-OS מקצה לקריאת נתונים\nZero Window = buffer מלא",
        "\u200FWindow = MTU size",
        "\u200FReceive Buffer = Congestion Window",
        "\u200FWindow Size קבוע ולא משתנה"
      ],
      explanation: "\u200F📐 TCP Flow Control:\n• Receiver מכריז window size\n• Sender לא שולח יותר\n• Window Scaling (RFC 7323) — window עד 1GB (מ-65535 bytes)\n\n⚠️ Zero Window:\n• Buffer מלא\n• Sender שולח ZWPs (Zero Window Probes) כל 5-60 שניות\n• Application לא קוראת → TCP slow → sender slow → backpressure\n• ss -tn לראות window sizes"
    ,
      qEn: "What is TCP Window Size and what is Receive Buffer?",
      correctEn: "Window Size: how many bytes sender can send before ACK\nReceive Buffer: what the OS allocates for reading data\nZero Window = buffer is full",
      choicesEn: [
        "Window Size: how many bytes sender can send before ACK\nReceive Buffer: what the OS allocates for reading data\nZero Window = buffer is full",
        "Window = MTU size",
        "Receive Buffer = Congestion Window",
        "Window Size is fixed and does not change"
      ]},
    {
      q: "\u200Fמה Nagle's Algorithm ומתי כדאי להשבית?",
      correct: "\u200Fמצבר TCP segments קטנים ל-packet גדול יותר (efficiency)\nלהשבית עם TCP_NODELAY\nב-applications real-time: gaming, SSH, database",
      choices: [
        "\u200Fמצבר TCP segments קטנים ל-packet גדול יותר (efficiency)\nלהשבית עם TCP_NODELAY\nב-applications real-time: gaming, SSH, database",
        "\u200FNagle = congestion control algorithm",
        "\u200FTCP_NODELAY מאט את החיבור",
        "\u200FNagle פעיל רק ב-UDP"
      ],
      explanation: "\u200F📦 Nagle (RFC 896):\n• אם יש unACKed data — חכה ל-ACK לפני שולח segment קטן\n• מטרה: לא לבזבז bandwidth על packets של byte אחד\n\n⚡ מתי להשבית (TCP_NODELAY=1):\n• SSH, RDP, gaming, databases — כולם מכבים\n• בעיה: latency גבוה ל-applications אינטראקטיביות\n\n💡 חריג:\n• HTTP/1.1 persistent connections — לפעמים כדאי Nagle"
    ,
      qEn: "What is Nagle's Algorithm and when should you disable it?",
      correctEn: "Combines small TCP segments into a larger packet (efficiency)\nDisable with TCP_NODELAY\nFor real-time apps: gaming, SSH, database",
      choicesEn: [
        "Combines small TCP segments into a larger packet (efficiency)\nDisable with TCP_NODELAY\nFor real-time apps: gaming, SSH, database",
        "Nagle = congestion control algorithm",
        "TCP_NODELAY slows down the connection",
        "Nagle is active only in UDP"
      ]}
  ],

  21: [
    {
      q: "\u200Fמה ההבדל בין IPsec Tunnel mode ל-Transport mode?",
      correct: "\u200FTransport: מוצפן payload בלבד\nTunnel: כל הפקטה עטופה בפקטה חדשה",
      choices: [
        "\u200FTransport: מוצפן payload בלבד\nTunnel: כל הפקטה עטופה בפקטה חדשה",
        "\u200FTransport ל-UDP\nTunnel ל-TCP",
        "\u200FTransport מהיר יותר תמיד",
        "\u200Fאין הבדל — שניהם מצפינים הכל"
      ],
      explanation: "\u200F🔐 Transport mode:\n• IP Header מקורי גלוי, payload מוצפן\n• ל-Host-to-Host\n\n🚇 Tunnel mode:\n• פקטה מלאה נעטפת\n• ה-IP החיצוני הוא של ה-VPN Gateway\n• Site-to-Site VPN = Tunnel mode\n• IKEv2 מועדף ליצירת security association"
    ,
      qEn: "What is the difference between IPsec Tunnel mode and Transport mode?",
      correctEn: "Transport: only payload is encrypted\nTunnel: entire packet is wrapped in a new packet",
      choicesEn: [
        "Transport: only payload is encrypted\nTunnel: entire packet is wrapped in a new packet",
        "Transport for UDP\nTunnel for TCP",
        "Transport is always faster",
        "No difference — both encrypt everything"
      ]},
    {
      q: "\u200Fמה SYN Cookies ואיך הם פותרים SYN Flood?",
      correct: "\u200Fשרת לא מקצה state ל-SYN\nמחזיר ISN מוצפן\nרק ACK תקין מוכיח שהלקוח אמיתי",
      choices: [
        "\u200Fשרת לא מקצה state ל-SYN\nמחזיר ISN מוצפן\nרק ACK תקין מוכיח שהלקוח אמיתי",
        "\u200Fcookies של browser שמאמתים משתמשים לגיטימיים",
        "\u200Fcache של SYN packets למניעת כפילויות",
        "\u200Frate limiting על SYN packets ב-firewall"
      ],
      explanation: "\u200F☠️ SYN Flood — הבעיה:\n• תוקף שולח מיליוני SYN\n• שרת רגיל: מקצה state לכל אחד → מלא RAM\n\n🛡️ SYN Cookies — הפתרון:\n• ISN = hash(src_ip, src_port, dst_port, timestamp, secret)\n• שרת לא שומר state!\n• רק ACK עם ISN+1 תקין\n• מוכיח שהלקוח קיבל SYN-ACK"
    ,
      qEn: "What are SYN Cookies and how do they solve SYN Flood?",
      correctEn: "Server does not allocate state for SYN\nReturns an encrypted ISN\nOnly a valid ACK proves the client is real",
      choicesEn: [
        "Server does not allocate state for SYN\nReturns an encrypted ISN\nOnly a valid ACK proves the client is real",
        "Browser cookies that verify legitimate users",
        "Cache of SYN packets to prevent duplicates",
        "Rate limiting on SYN packets in firewall"
      ]},
    {
      q: "\u200Fמה ההבדל בין VPN site-to-site לבין remote access VPN?",
      correct: "\u200FSite-to-site: מחבר רשתות שלמות\n(office A ↔ office B)\nRemote access: user בודד מתחבר לרשת ארגונית",
      choices: [
        "\u200FSite-to-site: מחבר רשתות שלמות\n(office A ↔ office B)\nRemote access: user בודד מתחבר לרשת ארגונית",
        "\u200Fאין הבדל — שני הסוגים זהים",
        "\u200FSite-to-site = IPsec\nRemote access = SSL בלבד",
        "\u200FRemote access VPN פחות מאובטח מ-site-to-site"
      ],
      explanation: "\u200F🏢 Site-to-site:\n• IPsec בין 2 routers/firewalls\n• שקוף למשתמשים\n\n👤 Remote access:\n• OpenVPN, WireGuard, Cisco AnyConnect, IKEv2\n\n🔀 מצבי tunneling:\n• Split tunneling — רק traffic ארגוני דרך VPN (שאר ישירות)\n• Full tunnel — הכל דרך VPN\n• ZTNA (Zero Trust) — VPN עם identity-aware policies\n• WireGuard — חדש, מהיר, קוד קצר (4K lines vs 70K ב-OpenVPN)"
    ,
      qEn: "What is the difference between site-to-site VPN and remote access VPN?",
      correctEn: "Site-to-site: connects entire networks\n(office A <-> office B)\nRemote access: single user connects to corporate network",
      choicesEn: [
        "Site-to-site: connects entire networks\n(office A <-> office B)\nRemote access: single user connects to corporate network",
        "No difference — both types are the same",
        "Site-to-site = IPsec\nRemote access = SSL only",
        "Remote access VPN is less secure than site-to-site"
      ]},
    {
      q: "\u200Fמה IPsec ואיזה שני מצבים קיימים?",
      correct: "\u200FIPsec: Transport Mode (L4+ מוצפן, IP header גלוי)\nו-Tunnel Mode (כל packet מוצפן\n+ IP header חדש — VPN site-to-site)",
      choices: [
        "\u200FIPsec: Transport Mode (L4+ מוצפן, IP header גלוי)\nו-Tunnel Mode (כל packet מוצפן\n+ IP header חדש — VPN site-to-site)",
        "\u200FIPsec = רק TLS עם IP features",
        "\u200FTransport Mode ל-site-to-site\nTunnel ל-remote access",
        "\u200FIPsec מצפין רק UDP"
      ],
      explanation: "\u200F🔧 IPsec components:\n• IKE (Internet Key Exchange) v2 — ל-key negotiation\n• ESP (Encapsulating Security Payload) — encryption + authentication\n• AH (Authentication Header) — authentication only (ללא encryption)\n\n📋 מצבים:\n• Transport Mode — host-to-host (end devices)\n• Tunnel Mode — gateway-to-gateway (routers)\n\n🔑 ניהול מפתחות:\n• IKE SA — negotiates master key\n• Child SA — מפיק session keys\n• DH (Diffie-Hellman) group — key agreement"
    ,
      qEn: "What is IPsec and what two modes exist?",
      correctEn: "IPsec: Transport Mode (L4+ encrypted, IP header visible)\nand Tunnel Mode (entire packet encrypted\n+ new IP header — VPN site-to-site)",
      choicesEn: [
        "IPsec: Transport Mode (L4+ encrypted, IP header visible)\nand Tunnel Mode (entire packet encrypted\n+ new IP header — VPN site-to-site)",
        "IPsec = just TLS with IP features",
        "Transport Mode for site-to-site\nTunnel for remote access",
        "IPsec encrypts only UDP"
      ]},
    {
      q: "\u200Fמה WireGuard ולמה נחשב טוב יותר מ-OpenVPN?",
      correct: "\u200FWireGuard: ~4K lines vs ~70K ב-OpenVPN\nUDP, fast handshake, kernel module\nאבל: לא stealth (זיהוי ב-traffic analysis)",
      choices: [
        "\u200FWireGuard: ~4K lines vs ~70K ב-OpenVPN\nUDP, fast handshake, kernel module\nאבל: לא stealth (זיהוי ב-traffic analysis)",
        "\u200FWireGuard מהיר יותר אבל פחות מאובטח",
        "\u200FOpenVPN תמיד עדיף כי ישן יותר",
        "\u200FWireGuard = OpenVPN v3"
      ],
      explanation: "\u200F🚀 יתרונות WireGuard:\n• נכלל ב-Linux kernel 5.6+\n• Noise protocol framework\n• ChaCha20-Poly1305\n• 25519 ECDH\n• Peer = public key + allowed IPs\n• Connection migration — IP משתנה, session נשמרת\n\n⚠️ מגבלות:\n• לא TCP (חוסם firewalls)\n• אין obfuscation\n\n🔗 פתרונות:\n• AmneziaVPN/MASQ — WireGuard עם obfuscation\n• Tailscale/NetBird — WireGuard mesh VPN"
    ,
      qEn: "What is WireGuard and why is it considered better than OpenVPN?",
      correctEn: "WireGuard: ~4K lines vs ~70K in OpenVPN\nUDP, fast handshake, kernel module\nBut: not stealth (detectable by traffic analysis)",
      choicesEn: [
        "WireGuard: ~4K lines vs ~70K in OpenVPN\nUDP, fast handshake, kernel module\nBut: not stealth (detectable by traffic analysis)",
        "WireGuard is faster but less secure",
        "OpenVPN is always better because it is older",
        "WireGuard = OpenVPN v3"
      ]}
  ],

  22: [
    {
      q: "\u200Fמה ההבדל בין CDN Cache HIT לCache MISS?",
      correct: "\u200FHIT = הקובץ ב-PoP הקרוב, מוגש מיידית\nMISS = PoP מביא מ-Origin ואז שומר ב-cache",
      choices: [
        "\u200FHIT = הקובץ ב-PoP הקרוב, מוגש מיידית\nMISS = PoP מביא מ-Origin ואז שומר ב-cache",
        "\u200FHIT = הצלחה בחיפוש\nMISS = שגיאה",
        "\u200FHIT ל-videos\nMISS ל-HTML",
        "\u200FHIT = CDN עובד\nMISS = CDN מנותק"
      ],
      explanation: "\u200F\u26A1 Cache HIT\n\u2022 5-15ms מ-PoP קרוב\n\u2022 הקובץ כבר שמור מקומית\n\n\uD83D\uDD04 Cache MISS\n\u2022 100-300ms מ-Origin\n\u2022 PoP שומר לפעם הבאה\n\n\uD83D\uDCCA יחס cache טוב\n\u2022 90%+ hits\n\u2022 Netflix מגיע לכמעט 100%\n\u2022 מ-cache מראש בלילה"
    ,
      qEn: "What is the difference between CDN Cache HIT and Cache MISS?",
      correctEn: "HIT = file is at the nearest PoP, served instantly\nMISS = PoP fetches from Origin and then caches",
      choicesEn: [
        "HIT = file is at the nearest PoP, served instantly\nMISS = PoP fetches from Origin and then caches",
        "HIT = search success\nMISS = error",
        "HIT for videos\nMISS for HTML",
        "HIT = CDN works\nMISS = CDN is down"
      ]},
    {
      q: "\u200Fמתי WebSockets עדיפים על REST?",
      correct: "\u200Fכששרת צריך לשלוח עדכונים ביוזמתו\nללא שהלקוח יבקש\n— chat, gaming, live data",
      choices: [
        "\u200Fכששרת צריך לשלוח עדכונים ביוזמתו\nללא שהלקוח יבקש\n— chat, gaming, live data",
        "\u200Fכשצריך אבטחה גבוהה יותר",
        "\u200Fכשמדובר ב-bandwidth גבוה",
        "\u200Fכשהלקוח הוא מובייל"
      ],
      explanation: "\u200F📡 REST — בקשה ותגובה\n• ל-chat — polling כל שנייה\n• 3,600 requests לשעה\n\n🔌 WebSocket — חיבור פתוח\n• שרת שולח מסר חדש מיידית\n• ללא צורך בבקשה מהלקוח\n\n🎮 מי משתמש ב-WebSockets?\n• Discord, Slack\n• Trading platforms\n• Multiplayer games"
    ,
      qEn: "When are WebSockets better than REST?",
      correctEn: "When the server needs to send updates on its own\nwithout the client asking\n— chat, gaming, live data",
      choicesEn: [
        "When the server needs to send updates on its own\nwithout the client asking\n— chat, gaming, live data",
        "When higher security is needed",
        "When high bandwidth is involved",
        "When the client is mobile"
      ]},
    {
      q: "\u200Fמה ה-Anycast CDN ואיך Cloudflare/Akamai מנצלים BGP?",
      correct: "\u200FAnycast: אותה IP ממספר POPs\nBGP מנתב ל-POP הקרוב\nContent cached locally — latency נמוך",
      choices: [
        "\u200FAnycast: אותה IP ממספר POPs\nBGP מנתב ל-POP הקרוב\nContent cached locally — latency נמוך",
        "\u200FCDN = DNS load balancing בלבד",
        "\u200FAnycast = random routing בין servers",
        "\u200FCDN עובד רק ב-TCP"
      ],
      explanation: "\u200F🌐 CDN — Content Delivery Network\n• Cloudflare: 290+ ערים\n• Akamai: 4,000+ שרתים\n\n📦 Cache hierarchy\n• origin → edge → PoP\n• Cache-Control headers: max-age, s-maxage, no-cache\n\n⚡ ביצועים\n• Cache hit: 200ms → 5ms\n• Cache miss: origin fetch\n• Purge: API לניקוי cache\n\n🔧 Edge Functions\n• Cloudflare Workers\n• JavaScript ב-edge\n• 0ms cold start"
    ,
      qEn: "What is Anycast CDN and how do Cloudflare/Akamai use BGP?",
      correctEn: "Anycast: same IP from multiple POPs\nBGP routes to the nearest POP\nContent cached locally — low latency",
      choicesEn: [
        "Anycast: same IP from multiple POPs\nBGP routes to the nearest POP\nContent cached locally — low latency",
        "CDN = DNS load balancing only",
        "Anycast = random routing between servers",
        "CDN works only with TCP"
      ]},
    {
      q: "\u200Fמה Load Balancer Layer 4 לעומת Layer 7?",
      correct: "\u200FL4 (TCP/UDP): מהיר, לא מבין HTTP\nL7 (HTTP): מבין URLs/headers/cookies\nיכול לנתב לפי content, SSL termination",
      choices: [
        "\u200FL4 (TCP/UDP): מהיר, לא מבין HTTP\nL7 (HTTP): מבין URLs/headers/cookies\nיכול לנתב לפי content, SSL termination",
        "\u200FL4 יותר מאובטח מ-L7",
        "\u200FL7 מהיר יותר מ-L4",
        "\u200Fאין הבדל — L4 ו-L7 LB זהים"
      ],
      explanation: "\u200F⚙️ L4 LB — שכבת Transport\n• AWS NLB, HAProxy TCP mode\n• NAT-based: שומר TCP state\n• מהיר: millions pps\n\n🌐 L7 LB — שכבת Application\n• AWS ALB, nginx, Traefik\n• URL routing: /api → backend1, /static → CDN\n• Header manipulation\n• Session affinity (sticky sessions via cookie)\n• SSL offloading\n\n🔍 Health checks\n• L4 = TCP connect\n• L7 = HTTP 200\n\n📊 אלגוריתמים\n• Round Robin\n• Least Connections\n• IP Hash"
    ,
      qEn: "What is Load Balancer Layer 4 vs Layer 7?",
      correctEn: "L4 (TCP/UDP): fast, does not understand HTTP\nL7 (HTTP): understands URLs/headers/cookies\nCan route by content, SSL termination",
      choicesEn: [
        "L4 (TCP/UDP): fast, does not understand HTTP\nL7 (HTTP): understands URLs/headers/cookies\nCan route by content, SSL termination",
        "L4 is more secure than L7",
        "L7 is faster than L4",
        "No difference — L4 and L7 LB are the same"
      ]},
    {
      q: "\u200Fמה HTTP/2 Server Push ואיך מחליט מה לpush?",
      correct: "\u200FServer שולח resources (CSS/JS)\nלפני שclient ביקש — מפחית round trips\nמבוסס על Link header או קוד server",
      choices: [
        "\u200FServer שולח resources (CSS/JS)\nלפני שclient ביקש — מפחית round trips\nמבוסס על Link header או קוד server",
        "\u200FServer Push = WebSocket",
        "\u200FServer Push = Server-Sent Events",
        "\u200FServer Push לא קיים ב-HTTP/2"
      ],
      explanation: "\u200F📤 Server Push\n• שרת יודע ש-HTML דורש style.css\n• דוחף לפני שclient ביקש\n• Link preload header:\n  Link: </style.css>; rel=preload; as=style\n\n⚠️ בעיות\n• Over-pushing — cache לא נלקח בחשבון\n• HTTP/2 Push deprecated ב-Chrome\n\n🔄 מה מחליף?\n• 103 Early Hints — שרת שולח hints לפני תגובה מלאה\n• HTTP/3 (QUIC) — אין Server Push כלל (הוסר)"
    ,
      qEn: "What is HTTP/2 Server Push and how does it decide what to push?",
      correctEn: "Server sends resources (CSS/JS)\nbefore client asked — reduces round trips\nBased on Link header or server code",
      choicesEn: [
        "Server sends resources (CSS/JS)\nbefore client asked — reduces round trips\nBased on Link header or server code",
        "Server Push = WebSocket",
        "Server Push = Server-Sent Events",
        "Server Push does not exist in HTTP/2"
      ]}
  ],

  23: [
    {
      q: "\u200Fמה גרם לנפילת פייסבוק ב-2021 למשך 6 שעות?",
      correct: "\u200Fביטול BGP prefix announcements\n— פייסבוק הסירה את עצמה ממפת האינטרנט",
      choices: [
        "\u200Fביטול BGP prefix announcements\n— פייסבוק הסירה את עצמה ממפת האינטרנט",
        "\u200Fמתקפת DDoS של 5 Tbps",
        "\u200Fכשל ב-main database",
        "\u200FDNS record שגוי"
      ],
      explanation: "\u200F💥 מה קרה?\n• config change שגוי ביטל BGP announcements\n• ה-router של פייסבוק הפסיק לספר לעולם ״אני כאן״\n\n📉 ההשלכות\n• כשל אחד מחק מיליארדי דולרים בשווי שוק\n• כלי התיקון גם הם היו בפנים\n• נדרשו 6 שעות להחזיר הכל"
    ,
      qEn: "What caused the Facebook outage in 2021 for 6 hours?",
      correctEn: "BGP prefix announcements were withdrawn\n— Facebook removed itself from the internet map",
      choicesEn: [
        "BGP prefix announcements were withdrawn\n— Facebook removed itself from the internet map",
        "A DDoS attack of 5 Tbps",
        "Main database failure",
        "Wrong DNS record"
      ]},
    {
      q: "\u200Fמה blameless postmortem?",
      correct: "\u200Fניתוח כשל שמחפש סיבות מערכתיות\n— לא מי אשם —\nכדי למנוע הישנות",
      choices: [
        "\u200Fניתוח כשל שמחפש סיבות מערכתיות\n— לא מי אשם —\nכדי למנוע הישנות",
        "\u200Fדוח שמסביר מי אחראי לכשל",
        "\u200Fנוהל לפיצוי לקוחות אחרי downtime",
        "\u200Fתיעוד של כל השינויים בקוד"
      ],
      explanation: "\u200F📖 העיקרון\n• כשיש עונש — אנשים מסתירים מידע\n• בלי עונש — מדווחים בפתיחות\n• הלמידה עמוקה יותר\n\n🏢 מי מאמין בזה?\n• Google SRE Book\n• Netflix\n• הפילוסופיה: ״המערכת כשלה, לא האדם״\n• Action items > punishment"
    ,
      qEn: "What is a blameless postmortem?",
      correctEn: "Failure analysis that looks for system causes\n— not who is to blame —\nto prevent recurrence",
      choicesEn: [
        "Failure analysis that looks for system causes\n— not who is to blame —\nto prevent recurrence",
        "A report explaining who is responsible for the failure",
        "A procedure for compensating customers after downtime",
        "Documentation of all code changes"
      ]},
    {
      q: "\u200Fמה BGP Hijacking ואיך RPKI מגן?",
      correct: "\u200FBGP Hijacking: AS מפרסם prefix שלא שלו\nRPKI: ROA — certificate שמאמת\n״AS X מורשה לפרסם prefix Y״",
      choices: [
        "\u200FBGP Hijacking: AS מפרסם prefix שלא שלו\nRPKI: ROA — certificate שמאמת\n״AS X מורשה לפרסם prefix Y״",
        "\u200FBGP Hijacking = DDoS על BGP routers",
        "\u200FRPKI = הצפנת BGP updates",
        "\u200FBGP אינו ניתן ל-hijacking כי מאומת"
      ],
      explanation: "\u200F🚨 דוגמה — Pakistan Telecom 2008\n• הזריק 208.65.153.0/24 (vs YouTube /22)\n• Longest prefix match → 75% YouTube traffic לפקיסטן\n\n🔐 RPKI — ההגנה\n• CA hierarchy: IANA → RIR → LIR → customer\n• ROA: AS Number + Prefix + max length\n• Validator: מוריד RPKI repository, בודק routes\n• INVALID routes: מסוננות\n\n🔗 BGPsec\n• חותם כל hop\n• מורכב ונדיר בשימוש"
    ,
      qEn: "What is BGP Hijacking and how does RPKI protect?",
      correctEn: "BGP Hijacking: an AS advertises a prefix it does not own\nRPKI: ROA — a certificate that verifies\n\"AS X is allowed to advertise prefix Y\"",
      choicesEn: [
        "BGP Hijacking: an AS advertises a prefix it does not own\nRPKI: ROA — a certificate that verifies\n\"AS X is allowed to advertise prefix Y\"",
        "BGP Hijacking = DDoS on BGP routers",
        "RPKI = encrypting BGP updates",
        "BGP cannot be hijacked because it is verified"
      ]},
    {
      q: "\u200Fמה SQL Slammer (2003) ולמה הוא היה כל כך הרסני?",
      correct: "\u200Fתולעת של 376 bytes בלבד שניצלה buffer overflow\nב-SQL Server — הדביקה 75,000 שרתים ב-10 דקות\nללא דיסק, רק בזיכרון",
      choices: [
        "\u200Fתולעת של 376 bytes בלבד שניצלה buffer overflow\nב-SQL Server — הדביקה 75,000 שרתים ב-10 דקות\nללא דיסק, רק בזיכרון",
        "\u200FSQL Slammer הצפין מסדי נתונים ודרש כופר",
        "\u200FSQL Slammer תקף רק דפדפנים",
        "\u200FSQL Slammer הפיל רק שרת אחד של מיקרוסופט"
      ],
      explanation: "\u200F💣 SQL Slammer (ינואר 2003):\n• 376 bytes בלבד — UDP packet אחד\n• Buffer overflow ב-SQL Server 2000 (port 1434)\n• לא צריך דיסק — רץ רק בזיכרון\n\n⚡ מהירות:\n• הכפיל את עצמו כל 8.5 שניות\n• 75,000 שרתים ב-10 דקות\n• האט את האינטרנט העולמי\n\n📌 הלקחים:\n• Patch היה זמין 6 חודשים לפני — לא הותקן!\n• עדכוני אבטחה = קריטיים",
      explanationEn: "SQL Slammer (January 2003): only 376 bytes — single UDP packet. Buffer overflow in SQL Server 2000 (port 1434). Ran only in memory, no disk needed. Doubled every 8.5 seconds, 75,000 servers in 10 minutes, slowed down global internet. Lesson: patch was available 6 months before but was not installed. Security updates are critical."
    ,
      qEn: "What was SQL Slammer (2003) and why was it so destructive?",
      correctEn: "A worm of only 376 bytes that used buffer overflow\nin SQL Server — infected 75,000 servers in 10 minutes\nNo disk, only in memory",
      choicesEn: [
        "A worm of only 376 bytes that used buffer overflow\nin SQL Server — infected 75,000 servers in 10 minutes\nNo disk, only in memory",
        "SQL Slammer encrypted databases and demanded ransom",
        "SQL Slammer attacked only browsers",
        "SQL Slammer crashed only one Microsoft server"
      ]},
    {
      q: "\u200Fמה Chaos Engineering ולמה Netflix שוברים דברים בכוונה?",
      correct: "\u200Fהזרקת כשלים מכוונים בסביבת production\nכדי לגלות חולשות לפני שכשל אמיתי קורה\nNetflix פיתחה את Chaos Monkey ב-2011",
      choices: [
        "\u200Fהזרקת כשלים מכוונים בסביבת production\nכדי לגלות חולשות לפני שכשל אמיתי קורה\nNetflix פיתחה את Chaos Monkey ב-2011",
        "\u200FChaos Engineering = בדיקות ביצועים רגילות",
        "\u200FNetflix שוברים רק ב-staging, לא ב-production",
        "\u200FChaos Engineering = pentesting לאתרים"
      ],
      explanation: "\u200F🐒 Chaos Monkey (Netflix):\n• מכבה VMs אקראיים ב-production\n• כל יום, בשעות עבודה\n• מאלץ את הצוותים לבנות resilient systems\n\n📋 Simian Army:\n• Chaos Gorilla: מכבה Availability Zone שלם\n• Latency Monkey: מוסיף latency\n\n💡 הרעיון:\n• כשלים יקרו בכל מקרה\n• עדיף לגלות חולשות כשאתה מוכן\n• GameDay = תרגיל chaos מתוכנן\n\n📌 Single Point of Failure:\n• Chaos Engineering מוצא את ה-SPOFs",
      explanationEn: "Chaos Monkey (Netflix): randomly kills VMs in production every day during business hours. Forces teams to build resilient systems. Simian Army: Chaos Gorilla (kills entire AZ), Latency Monkey (adds latency). Failures happen anyway — better to discover weaknesses when prepared. GameDay = planned chaos exercise. Chaos Engineering finds Single Points of Failure."
    ,
      qEn: "What is Chaos Engineering and why does Netflix break things on purpose?",
      correctEn: "Injecting intentional failures in production\nto find weaknesses before a real failure happens\nNetflix developed Chaos Monkey in 2011",
      choicesEn: [
        "Injecting intentional failures in production\nto find weaknesses before a real failure happens\nNetflix developed Chaos Monkey in 2011",
        "Chaos Engineering = regular performance testing",
        "Netflix only breaks things in staging, not production",
        "Chaos Engineering = pentesting for websites"
      ]}
  ],

  24: [
    {
      q: "\u200Fמה Open Connect Appliance של Netflix?",
      correct: "\u200Fשרת cache ש-Netflix מספקת חינם ל-ISPs\n— ה-video נשמר מקומית ברשת ה-ISP",
      choices: [
        "\u200Fשרת cache ש-Netflix מספקת חינם ל-ISPs\n— ה-video נשמר מקומית ברשת ה-ISP",
        "\u200Fשרת תוכן מרכזי של Netflix באמריקה",
        "\u200Fכלי monitoring לניטור ביצועי streaming",
        "\u200Fמנגנון הצפנה להגנה על תוכן"
      ],
      explanation: "\u200F💡 OCA — Open Connect Appliance\n• Netflix שמה שרת cache ב-ISPs בחינם\n• ה-ISP מקבל hardware\n• Netflix חוסכת transit ב-$M\n\n🌙 איך זה עובד?\n• בלילה — Netflix מ-cache מראש content פופולרי\n• למחרת — ה-video מגיע מ-ISP עצמו\n• Latency: 5ms בלבד"
    ,
      qEn: "What is Netflix's Open Connect Appliance?",
      correctEn: "A cache server that Netflix provides free to ISPs\n— video is stored locally on the ISP's network",
      choicesEn: [
        "A cache server that Netflix provides free to ISPs\n— video is stored locally on the ISP's network",
        "A central Netflix content server in the US",
        "A monitoring tool for streaming performance",
        "An encryption mechanism for content protection"
      ]},
    {
      q: "\u200Fמה Anycast routing?",
      correct: "\u200Fאותה כתובת IP מוכרזת ממאות מקומות\n— BGP מנתב לנקודה הקרובה ביותר",
      choices: [
        "\u200Fאותה כתובת IP מוכרזת ממאות מקומות\n— BGP מנתב לנקודה הקרובה ביותר",
        "\u200Fחלוקת עומס בין שרתים\nלפי אלגוריתם Round Robin",
        "\u200Fשליחת packet לכל המכשירים ברשת",
        "\u200Fהצפנת routing information ב-BGP"
      ],
      explanation: "\u200F🌍 Anycast בפעולה\n• 1.1.1.1 של Cloudflare = כתובת Anycast\n• BGP מנתב אותך ל-PoP הקרוב מ-300 מיקומים\n\n🛡️ יתרון נגד DDoS\n• תנועה מתחלקת ל-300 PoPs\n• כל אחד סופג שבריר\n\n🏢 מי משתמש?\n• Netflix\n• Google\n• Cloudflare"
    ,
      qEn: "What is Anycast routing?",
      correctEn: "The same IP address is announced from hundreds of locations\n— BGP routes to the nearest point",
      choicesEn: [
        "The same IP address is announced from hundreds of locations\n— BGP routes to the nearest point",
        "Load distribution between servers\nusing Round Robin algorithm",
        "Sending a packet to all devices on the network",
        "Encrypting routing information in BGP"
      ]},
    {
      q: "\u200Fמה DPI (Deep Packet Inspection) ואיך ISPs משתמשים בו?",
      correct: "\u200FDPI: ניתוח תוכן packets מעבר ל-headers\nISPs יכולים לזהות BitTorrent, Netflix\nלחסום sites, לבצע traffic shaping",
      choices: [
        "\u200FDPI: ניתוח תוכן packets מעבר ל-headers\nISPs יכולים לזהות BitTorrent, Netflix\nלחסום sites, לבצע traffic shaping",
        "\u200FDPI = DNS Privacy Inspector",
        "\u200FDPI עובד רק על unencrypted traffic",
        "\u200FDPI = הצפנת packets ב-router"
      ],
      explanation: "\u200F🔬 DPI vs SPI\n• SPI = stateful inspection (L3/L4)\n• DPI = L7 payload analysis\n\n📋 שימושים\n• ISP throttling (YouTube QoS)\n• Censorship (Great Firewall)\n• Malware detection\n• Lawful interception\n\n🔒 הגנות\n• HTTPS — DPI לא יכול לקרוא תוכן מוצפן\n• ESNI/ECH — מסתיר SNI (hostname)\n• Net Neutrality — מניעת DPI-based discrimination"
    ,
      qEn: "What is DPI (Deep Packet Inspection) and how do ISPs use it?",
      correctEn: "DPI: analyzing packet content beyond headers\nISPs can identify BitTorrent, Netflix\nBlock sites, perform traffic shaping",
      choicesEn: [
        "DPI: analyzing packet content beyond headers\nISPs can identify BitTorrent, Netflix\nBlock sites, perform traffic shaping",
        "DPI = DNS Privacy Inspector",
        "DPI works only on unencrypted traffic",
        "DPI = encrypting packets in a router"
      ]},
    {
      q: "\u200Fמה Data Center topology ו-Spine-Leaf Architecture?",
      correct: "\u200FSpine-Leaf: 2 שכבות\nLeaf (ToR switches) מחוברים לכל Spine\nEqual latency בין כל servers\nמחליף traditional 3-tier",
      choices: [
        "\u200FSpine-Leaf: 2 שכבות\nLeaf (ToR switches) מחוברים לכל Spine\nEqual latency בין כל servers\nמחליף traditional 3-tier",
        "\u200FSpine-Leaf = Spanning Tree topology",
        "\u200FSpine = core routers\nLeaf = servers בלבד",
        "\u200FSpine-Leaf משתמש ב-STP"
      ],
      explanation: "\u200F🏗️ ארכיטקטורה מסורתית — Traditional 3-tier\n• Core (L3) → Distribution (L3) → Access (L2)\n• צוואר בקבוק ב-aggregation\n\n⚡ Spine-Leaf\n• כל Leaf מחובר לכל Spine\n• תעבורה מזרח-מערב = 1 hop\n• BGP/ECMP — ללא STP\n• ToR (Top of Rack): switch בתוך rack\n\n🏢 מי משתמש?\n• Facebook/Google — silicon מותאם (Arista, Broadcom)\n• רשת Clos (Bell Labs, 1950s)\n• eBGP במרכז הנתונים: RFC 7938"
    ,
      qEn: "What is Data Center topology and Spine-Leaf Architecture?",
      correctEn: "Spine-Leaf: 2 layers\nLeaf (ToR switches) connect to every Spine\nEqual latency between all servers\nReplaces traditional 3-tier",
      choicesEn: [
        "Spine-Leaf: 2 layers\nLeaf (ToR switches) connect to every Spine\nEqual latency between all servers\nReplaces traditional 3-tier",
        "Spine-Leaf = Spanning Tree topology",
        "Spine = core routers\nLeaf = servers only",
        "Spine-Leaf uses STP"
      ]},
    {
      q: "\u200Fמה Latency לעומת Bandwidth ולמה latency חשוב יותר ב-interactive apps?",
      correct: "\u200FBandwidth = כמה data/שנייה\nLatency = כמה זמן ל-packet להגיע\nInteractive: latency קריטי\nBulk transfer: bandwidth קריטי",
      choices: [
        "\u200FBandwidth = כמה data/שנייה\nLatency = כמה זמן ל-packet להגיע\nInteractive: latency קריטי\nBulk transfer: bandwidth קריטי",
        "\u200FBandwidth ו-Latency אותו דבר",
        "\u200FBandwidth תמיד חשוב יותר",
        "\u200FLatency = Round Trip Time + Bandwidth"
      ],
      explanation: "\u200F⏱️ RTT — Round Trip Time\n• נמדד ב-ping\n• כיוון אחד: RTT/2\n\n📡 מקורות ל-latency\n• Propagation — speed of light ~200km/ms fiber\n• Transmission — packet size / bandwidth\n• Processing — router forwarding\n• Queuing — buffer\n\n📊 Bandwidth-Delay Product\n• בתים בדרך = bandwidth x RTT\n• 100Mbps x 100ms = 1.25MB בדרך\n• כיוונון TCP buffer: net.core.rmem_max\n\n🎮 בפועל\n• גיימינג: >100ms = לא ניתן לשחק\n• Jitter = שונות ב-latency = גורם איכות ב-VoIP"
    ,
      qEn: "What is Latency vs Bandwidth and why is latency more important in interactive apps?",
      correctEn: "Bandwidth = how much data/second\nLatency = how long for a packet to arrive\nInteractive: latency is critical\nBulk transfer: bandwidth is critical",
      choicesEn: [
        "Bandwidth = how much data/second\nLatency = how long for a packet to arrive\nInteractive: latency is critical\nBulk transfer: bandwidth is critical",
        "Bandwidth and Latency are the same thing",
        "Bandwidth is always more important",
        "Latency = Round Trip Time + Bandwidth"
      ]}
  ],

  25: [
    {
      q: "\u200Fמה ISP יכול לראות כשגולשים ב-HTTPS?",
      correct: "\u200FDNS queries ו-TLS SNI (שם הדומיין)\n— לא את תוכן הדפים",
      choices: [
        "\u200FDNS queries ו-TLS SNI (שם הדומיין)\n— לא את תוכן הדפים",
        "\u200Fהכל, כולל סיסמאות ו-history",
        "\u200Fרק כתובת IP — לא יותר",
        "\u200Fכלום — HTTPS מוצפן לחלוטין"
      ],
      explanation: "\u200F🔒 HTTPS מצפין תוכן — אבל...\n• DNS query (מה ה-IP של google.com?) נשלח ב-plaintext\n• TLS SNI בחיבור = שם הדומיין ב-clear\n\n👁️ מה ISP רואה?\n• timeline: 08:23 gmail.com\n• 09:17 bankofamerica.com\n\n🛡️ הפתרון\n• DoH — DNS over HTTPS\n• ECH — Encrypted Client Hello"
    ,
      qEn: "What can an ISP see when you browse with HTTPS?",
      correctEn: "DNS queries and TLS SNI (domain name)\n— not the page content",
      choicesEn: [
        "DNS queries and TLS SNI (domain name)\n— not the page content",
        "Everything, including passwords and history",
        "Only the IP address — nothing more",
        "Nothing — HTTPS is fully encrypted"
      ]},
    {
      q: "\u200Fמה Browser Fingerprinting?",
      correct: "\u200Fזיהוי ייחודי של דפדפן\nלפי canvas rendering, fonts, WebGL\n— ללא cookies",
      choices: [
        "\u200Fזיהוי ייחודי של דפדפן\nלפי canvas rendering, fonts, WebGL\n— ללא cookies",
        "\u200Fבדיקת אמינות אתרים ע\"י הדפדפן",
        "\u200Fשמירת היסטוריית גלישה",
        "\u200Fהצגת fingerprint של SSL Certificate"
      ],
      explanation: "\u200F🖐️ Canvas Fingerprint\n• הדפדפן מצייר טקסט\n• ה-pixels שונים בכל GPU/OS\n\n🧬 מה נכלל?\n• Fonts, WebGL, screen\n• כמות אינסופית של שילובים\n• ייחודי כמעט כמו DNA\n\n⚠️ הגנה\n• Incognito לא עוזר!\n• Tor Browser מרנדמז את ה-fingerprint"
    ,
      qEn: "What is Browser Fingerprinting?",
      correctEn: "Unique identification of a browser\nby canvas rendering, fonts, WebGL\n— without cookies",
      choicesEn: [
        "Unique identification of a browser\nby canvas rendering, fonts, WebGL\n— without cookies",
        "Checking website reliability by the browser",
        "Saving browsing history",
        "Showing fingerprint of SSL Certificate"
      ]},
    {
      q: "\u200Fמה SNI (Server Name Indication) ואיך TLS מכריז על ה-domain?",
      correct: "\u200FSNI: ClientHello כולל hostname ב-plaintext\n(לפני הצפנה)\nמאפשר virtual hosting של HTTPS\nECH מסתיר SNI",
      choices: [
        "\u200FSNI: ClientHello כולל hostname ב-plaintext\n(לפני הצפנה)\nמאפשר virtual hosting של HTTPS\nECH מסתיר SNI",
        "\u200FSNI = SSL certificate של server",
        "\u200FSNI = DNS record ל-HTTPS",
        "\u200FSNI מוצפן מהרגע הראשון"
      ],
      explanation: "\u200F🔓 ללא SNI\n• server אחד = IP אחד = certificate אחד\n\n🌐 עם SNI\n• מאות domains על IP אחד\n• ClientHello: server_name extension = hostname\n\n👁️ הבעיה\n• ISP/firewall יכול לראות ולחסום לפי SNI\n• גם ב-HTTPS!\n\n🔐 הפתרונות\n• ESNI (deprecated): encrypted SNI\n• ECH (Encrypted Client Hello): מצפין כל ClientHello\n• Cloudflare: תומך ECH\n• הסתרת SNI = קשה יותר ל-censorship"
    ,
      qEn: "What is SNI (Server Name Indication) and how does TLS announce the domain?",
      correctEn: "SNI: ClientHello includes hostname in plaintext\n(before encryption)\nAllows virtual hosting of HTTPS\nECH hides SNI",
      choicesEn: [
        "SNI: ClientHello includes hostname in plaintext\n(before encryption)\nAllows virtual hosting of HTTPS\nECH hides SNI",
        "SNI = SSL certificate of the server",
        "SNI = DNS record for HTTPS",
        "SNI is encrypted from the start"
      ]},
    {
      q: "\u200Fמה Browser Fingerprinting וכיצד websites עוקבות ללא cookies?",
      correct: "\u200FBrowser Fingerprint: שילוב Canvas, WebGL,\nfonts, plugins, screen, timezone\n= ID כמעט ייחודי\nלא ניתן למחיקה כמו cookies",
      choices: [
        "\u200FBrowser Fingerprint: שילוב Canvas, WebGL,\nfonts, plugins, screen, timezone\n= ID כמעט ייחודי\nלא ניתן למחיקה כמו cookies",
        "\u200FFingerprinting = cookies מוצפנים",
        "\u200FBrowser Fingerprint = IP address בלבד",
        "\u200FFingerprinting עובד רק ב-Chrome"
      ],
      explanation: "\u200F🎨 Canvas Fingerprint\n• מצייר text/shape\n• GPU rendering שונה לכל GPU+driver = ייחודי\n\n📋 מה עוד נאסף?\n• AudioContext, WebGL\n• Font enumeration, screen resolution\n• Timezone, language, plugins\n• Do Not Track\n\n🛡️ הגנות\n• EFF Panopticlick/Cover Your Tracks — בדיקה\n• Firefox: resistFingerprinting=true\n• Brave: randomizes fingerprint per session\n• Tor Browser: identical fingerprint לכל users"
    ,
      qEn: "What is Browser Fingerprinting and how do websites track without cookies?",
      correctEn: "Browser Fingerprint: combination of Canvas, WebGL,\nfonts, plugins, screen, timezone\n= almost unique ID\nCannot be deleted like cookies",
      choicesEn: [
        "Browser Fingerprint: combination of Canvas, WebGL,\nfonts, plugins, screen, timezone\n= almost unique ID\nCannot be deleted like cookies",
        "Fingerprinting = encrypted cookies",
        "Browser Fingerprint = IP address only",
        "Fingerprinting works only in Chrome"
      ]},
    {
      q: "\u200Fמה Traffic Analysis ומה VPN לא מגן עליו?",
      correct: "\u200FTraffic Analysis: גם עם VPN ניתן לזהות\nvolume, timing, patterns\nNetflix vs gaming vs Tor שונים\nVPN מסתיר תוכן, לא behavior",
      choices: [
        "\u200FTraffic Analysis: גם עם VPN ניתן לזהות\nvolume, timing, patterns\nNetflix vs gaming vs Tor שונים\nVPN מסתיר תוכן, לא behavior",
        "\u200FVPN מגן מפני כל סוגי ניטור",
        "\u200FTraffic Analysis = DPI\n— VPN מגן לחלוטין",
        "\u200FTraffic Analysis עובד רק ב-HTTP"
      ],
      explanation: "\u200F🔍 Traffic Analysis\n• מחקר NSA/Tor\n• Packet timing, size distribution, inter-arrival time\n• מזהה אפליקציה לפי דפוסים\n\n📊 דפוסים מזהים\n• Netflix: big constant streams\n• Gaming: small bidirectional 60-100pps\n• Video call: ~1-3 Mbps, symmetric\n\n⚠️ התקפות\n• Correlation attack: adversary ב-exit + entry = deanonymize Tor\n• Website fingerprinting: ML על timing/size\n\n🛡️ הגנות\n• obfs4, meek (mimics HTTPS/CDN)"
    ,
      qEn: "What is Traffic Analysis and what does VPN not protect against?",
      correctEn: "Traffic Analysis: even with VPN you can identify\nvolume, timing, patterns\nNetflix vs gaming vs Tor look different\nVPN hides content, not behavior",
      choicesEn: [
        "Traffic Analysis: even with VPN you can identify\nvolume, timing, patterns\nNetflix vs gaming vs Tor look different\nVPN hides content, not behavior",
        "VPN protects against all types of monitoring",
        "Traffic Analysis = DPI\n— VPN fully protects",
        "Traffic Analysis works only on HTTP"
      ]}
  ],

  26: [
    {
      q: "\u200Fמה ההבדל העיקרי בין HTTP/2 ל-HTTP/3?",
      correct: "\u200FHTTP/2 על TCP\n(יש HOL blocking ב-transport)\nHTTP/3 על QUIC/UDP\n(streams עצמאיים)",
      choices: [
        "\u200FHTTP/2 על TCP\n(יש HOL blocking ב-transport)\nHTTP/3 על QUIC/UDP\n(streams עצמאיים)",
        "\u200FHTTP/3 מהיר יותר כי משתמש ב-UDP\nש-UDP מהיר מ-TCP",
        "\u200FHTTP/3 מוסיף הצפנה\nשלא הייתה ב-HTTP/2",
        "\u200FHTTP/2 ל-desktop\nHTTP/3 למובייל"
      ],
      explanation: "\u200F🔄 HTTP/2 — הבעיה\n• פתר HOL blocking ב-Application layer\n• אבל TCP עדיין בעיה\n• חבילה אחת אבודה = כל streams מחכים\n\n⚡ QUIC — הפתרון\n• כל stream עצמאי גם ב-transport\n• אובדן חבילה = רק stream אחד מושפע\n\n📊 אימוץ\n• 25%+ מהאינטרנט כבר HTTP/3"
    ,
      qEn: "What is the main difference between HTTP/2 and HTTP/3?",
      correctEn: "HTTP/2 on TCP\n(has HOL blocking in transport)\nHTTP/3 on QUIC/UDP\n(independent streams)",
      choicesEn: [
        "HTTP/2 on TCP\n(has HOL blocking in transport)\nHTTP/3 on QUIC/UDP\n(independent streams)",
        "HTTP/3 is faster because it uses UDP\nand UDP is faster than TCP",
        "HTTP/3 adds encryption\nthat was not in HTTP/2",
        "HTTP/2 for desktop\nHTTP/3 for mobile"
      ]},
    {
      q: "\u200Fמה eBPF מאפשר שלא היה אפשרי קודם?",
      correct: "\u200Fלהריץ קוד בתוך Linux kernel\n— בזמן אמת, בלי kernel module, בלי reboot",
      choices: [
        "\u200Fלהריץ קוד בתוך Linux kernel\n— בזמן אמת, בלי kernel module, בלי reboot",
        "\u200Fלתכנת network cards ישירות",
        "\u200Fלהריץ applications ב-memory מוגן",
        "\u200Fלדבג kernel crashes ב-production"
      ],
      explanation: "\u200F🔧 eBPF — מהפכה\n• XDP: drop packets לפני ה-network stack\n• מיליוני pps\n\n🔌 שימושים\n• Cilium: מחליף iptables ב-Kubernetes\n• Observability: trace כל syscall ב-production ללא overhead\n\n🏢 מי משתמש?\n• Cloudflare\n• Meta\n• Google\n• Netflix"
    ,
      qEn: "What does eBPF enable that was not possible before?",
      correctEn: "Run code inside the Linux kernel\n— in real time, without a kernel module, without reboot",
      choicesEn: [
        "Run code inside the Linux kernel\n— in real time, without a kernel module, without reboot",
        "Program network cards directly",
        "Run applications in protected memory",
        "Debug kernel crashes in production"
      ]},
    {
      q: "\u200Fמה eBPF ואיך הוא שינה Linux networking?",
      correct: "\u200FeBPF: תוכניות verified רצות ב-kernel\nללא module loading\nXDP: drop packets לפני network stack\nTC: traffic shaping / Kprobes: tracing",
      choices: [
        "\u200FeBPF: תוכניות verified רצות ב-kernel\nללא module loading\nXDP: drop packets לפני network stack\nTC: traffic shaping / Kprobes: tracing",
        "\u200FeBPF = encryption protocol",
        "\u200FeBPF = kernel module loading",
        "\u200FeBPF פועל ב-userspace בלבד"
      ],
      explanation: "\u200F\u2699\uFE0F eBPF \u2014 איך עובד?\n\u2022 bytecode \u2192 Verifier (safety) \u2192 JIT compiled\n\u2022 רץ ב-kernel context\n\n\uD83D\uDD17 Hook points\n\u2022 XDP \u2014 NIC driver level\n\u2022 TC \u2014 traffic control\n\u2022 Socket filters\n\u2022 kprobe/tracepoint \u2014 observability\n\n\uD83D\uDCCB שימושים\n\u2022 Cilium \u2014 K8s networking\n\u2022 Katran \u2014 Facebook LB\n\u2022 Falco \u2014 security\n\u2022 bpftrace \u2014 debugging\n\n\uD83D\uDCCA ביצועים\n\u2022 XDP drop = 26M pps\n\u2022 iptables = 3M pps"
    ,
      qEn: "What is eBPF and how did it change Linux networking?",
      correctEn: "eBPF: verified programs run in the kernel\nwithout module loading\nXDP: drop packets before network stack\nTC: traffic shaping / Kprobes: tracing",
      choicesEn: [
        "eBPF: verified programs run in the kernel\nwithout module loading\nXDP: drop packets before network stack\nTC: traffic shaping / Kprobes: tracing",
        "eBPF = encryption protocol",
        "eBPF = kernel module loading",
        "eBPF runs in userspace only"
      ]},
    {
      q: "\u200Fמה QUIC ואיך HTTP/3 מתמודד עם Head-of-Line Blocking?",
      correct: "\u200FQUIC: UDP-based, כל stream עצמאי\nאובדן packet ב-stream A לא חוסם stream B\nHTTP/2 על TCP: loss חוסם כל ה-streams",
      choices: [
        "\u200FQUIC: UDP-based, כל stream עצמאי\nאובדן packet ב-stream A לא חוסם stream B\nHTTP/2 על TCP: loss חוסם כל ה-streams",
        "\u200FQUIC פותר HOL Blocking\nלחלוטין גם ב-TCP",
        "\u200FHTTP/3 = HTTP/2 על TLS 1.3",
        "\u200FQUIC = UDP עם TCP header"
      ],
      explanation: "\u200F🚫 HTTP/2 HOL — הבעיה\n• TCP חייב לשמור על סדר bytes\n• Loss → NACK → retransmit\n• כל streams מחכים\n\n⚡ QUIC — הפתרון\n• UDP, כל stream מנוהל בנפרד\n• Loss ב-stream 1 לא עוצר stream 2\n\n🔑 יתרונות נוספים\n• Connection ID: מאפשר migration (WiFi → 4G)\n• 0-RTT: connection resumption בלי handshake\n• TLS 1.3 מובנה\n\n📊 אימוץ\n• Chrome, YouTube, Facebook: ~30% QUIC"
    ,
      qEn: "What is QUIC and how does HTTP/3 handle Head-of-Line Blocking?",
      correctEn: "QUIC: UDP-based, each stream is independent\nPacket loss in stream A does not block stream B\nHTTP/2 on TCP: loss blocks all streams",
      choicesEn: [
        "QUIC: UDP-based, each stream is independent\nPacket loss in stream A does not block stream B\nHTTP/2 on TCP: loss blocks all streams",
        "QUIC solves HOL Blocking\ncompletely even in TCP",
        "HTTP/3 = HTTP/2 on TLS 1.3",
        "QUIC = UDP with TCP header"
      ]},
    {
      q: "\u200Fמה DPDK ואיזה שימושים של networking ב-userspace?",
      correct: "\u200FDPDK (Data Plane Development Kit):\nמעקף kernel, direct NIC access מ-userspace\nמאפשר >40Mpps\nשימוש: 5G, software routers, NFV",
      choices: [
        "\u200FDPDK (Data Plane Development Kit):\nמעקף kernel, direct NIC access מ-userspace\nמאפשר >40Mpps\nשימוש: 5G, software routers, NFV",
        "\u200FDPDK = Docker networking plugin",
        "\u200FDPDK = תקן ל-encryption",
        "\u200FDPDK מאיט networking"
      ],
      explanation: "\u200F🐢 Kernel networking — למה איטי?\n• Interrupt-driven\n• System call overhead\n\n🚀 DPDK — הפתרון\n• Polling mode driver\n• Huge pages\n• Lockless rings\n\n📋 טכנולוגיות קשורות\n• VPP (Vector Packet Processing): Cisco open-source, DPDK-based\n• SRIOV: physical NIC → virtual functions → VM direct access\n• NFV: firewall, LB, router ב-software\n\n📊 ביצועים\n• Intel DPDK: 10-100Gbps on commodity hardware"
    ,
      qEn: "What is DPDK and what are userspace networking use cases?",
      correctEn: "DPDK (Data Plane Development Kit):\nbypasses kernel, direct NIC access from userspace\nEnables >40Mpps\nUsed for: 5G, software routers, NFV",
      choicesEn: [
        "DPDK (Data Plane Development Kit):\nbypasses kernel, direct NIC access from userspace\nEnables >40Mpps\nUsed for: 5G, software routers, NFV",
        "DPDK = Docker networking plugin",
        "DPDK = encryption standard",
        "DPDK slows down networking"
      ]}
  ],
  27: [
    {
      q: "\u200Fמה ההסמכה המרכזית ל-Network Engineer ברמת Entry/Mid?",
      correct: "\u200FCCNA — Cisco Certified Network Associate",
      choices: [
        "\u200FCCNA — Cisco Certified Network Associate",
        "\u200FOSCP — Offensive Security Certified Professional",
        "\u200FAWS SAA — Solutions Architect Associate",
        "\u200FCKA — Certified Kubernetes Administrator"
      ],
      explanation: "\u200F📜 CCNA — ההסמכה הנחשבת ביותר\n• מכסה: VLAN, STP, OSPF, ACL, NAT, VPN\n\n📈 מסלול התקדמות\n• CCNP — מתקדם\n• CCIE — Expert, מהקשות בתעשייה\n\n🚪 נקודת כניסה\n• CompTIA Network+ — קלה יותר לפני CCNA"
    ,
      qEn: "What is the main certification for an Entry/Mid level Network Engineer?",
      correctEn: "CCNA — Cisco Certified Network Associate",
      choicesEn: [
        "CCNA — Cisco Certified Network Associate",
        "OSCP — Offensive Security Certified Professional",
        "AWS SAA — Solutions Architect Associate",
        "CKA — Certified Kubernetes Administrator"
      ]},
    {
      q: "\u200Fמה ההבדל בין Penetration Tester לבין SOC Analyst?",
      correct: "\u200FPentester תוקף מערכות (בהרשאה) למציאת חולשות\nSOC Analyst מנטר ומגיב לאיומים בזמן אמת",
      choices: [
        "\u200FPentester תוקף מערכות (בהרשאה) למציאת חולשות\nSOC Analyst מנטר ומגיב לאיומים בזמן אמת",
        "\u200FPentester עובד עם קוד\nSOC Analyst עם חומרה",
        "\u200FSOC Analyst מנהל firewalls\nPentester כותב malware",
        "\u200Fשניהם אותו תפקיד בשמות שונים"
      ],
      explanation: "\u200F🔴 Red Team — Pentester\n• תוקף לגיטימי\n• מקבל scope, מחפש חולשות, כותב דוח\n• הסמכות: CEH, OSCP\n\n🔵 Blue Team — SOC\n• מגן\n• מנטר SIEM, מנתח alerts, עוצר תקיפות\n• הסמכות: Security+, CySA+, GCIA"
    ,
      qEn: "What is the difference between a Penetration Tester and a SOC Analyst?",
      correctEn: "Pentester attacks systems (with permission) to find weaknesses\nSOC Analyst monitors and responds to threats in real time",
      choicesEn: [
        "Pentester attacks systems (with permission) to find weaknesses\nSOC Analyst monitors and responds to threats in real time",
        "Pentester works with code\nSOC Analyst with hardware",
        "SOC Analyst manages firewalls\nPentester writes malware",
        "Both are the same role with different names"
      ]},
    {
      q: "\u200Fלמה ידע ברשתות הכרחי לעבודה עם AWS/Cloud?",
      correct: "\u200FAWS VPC = רשת וירטואלית\nעם subnets, routing tables, security groups\n— בדיוק כמו רשת פיזית",
      choices: [
        "\u200FAWS VPC = רשת וירטואלית\nעם subnets, routing tables, security groups\n— בדיוק כמו רשת פיזית",
        "\u200FCloud לא קשור לרשתות\n— הכל מנוהל אוטומטית",
        "\u200Fידע ברשתות נדרש רק ל-on-premise\nלא ל-Cloud",
        "\u200FAWS דורש CCNA כתנאי לשימוש"
      ],
      explanation: "\u200F☁️ AWS VPC דורש תכנון\n• CIDR allocation\n• Public vs Private subnets\n• Internet Gateway, NAT Gateway\n• Route tables\n• Security groups (stateful firewall)\n• NACLs (stateless)\n\n⚖️ Load Balancer\n• Layer 4 vs Layer 7\n\n🐳 Kubernetes\n• CNI plugins\n• Pod networking\n• Ingress\n\n💡 כל אלה = רשתות!"
    ,
      qEn: "Why is networking knowledge essential for working with AWS/Cloud?",
      correctEn: "AWS VPC = virtual network\nwith subnets, routing tables, security groups\n— just like a physical network",
      choicesEn: [
        "AWS VPC = virtual network\nwith subnets, routing tables, security groups\n— just like a physical network",
        "Cloud is not related to networking\n— everything is managed automatically",
        "Networking knowledge is needed only for on-premise\nnot for Cloud",
        "AWS requires CCNA as a condition for use"
      ]},
    {
      q: "\u200Fמה ההבדל בין NOC לבין SOC?",
      correct: "\u200FNOC: Network Operations Center\n— זמינות ו-performance\nSOC: Security Operations Center\n— threats ו-incidents",
      choices: [
        "\u200FNOC: Network Operations Center\n— זמינות ו-performance\nSOC: Security Operations Center\n— threats ו-incidents",
        "\u200FNOC ו-SOC זהים",
        "\u200FSOC = Network Operations Center",
        "\u200FNOC = Security\nSOC = Performance"
      ],
      explanation: "\u200F🖥️ NOC — Network Operations Center\n• ניטור uptime, BGP routes, bandwidth, latency\n• Hardware failures\n• כלים: Nagios, Zabbix, PRTG, SolarWinds\n\n🛡️ SOC — Security Operations Center\n• SIEM alerts, threat hunting, incident response\n• כלים: Splunk, Sentinel, CrowdStrike\n\n📈 מסלולי קריירה\n• NOC → Network Engineer → CCIE / Cloud Architect\n• SOC → Security Analyst → Pentester → CISSP → CISO"
    ,
      qEn: "What is the difference between NOC and SOC?",
      correctEn: "NOC: Network Operations Center\n— availability and performance\nSOC: Security Operations Center\n— threats and incidents",
      choicesEn: [
        "NOC: Network Operations Center\n— availability and performance\nSOC: Security Operations Center\n— threats and incidents",
        "NOC and SOC are the same",
        "SOC = Network Operations Center",
        "NOC = Security\nSOC = Performance"
      ]},
    {
      q: "\u200Fמה Cloud native networking לעומת traditional networking?",
      correct: "\u200FCloud Native: overlay networks,\nsoftware-defined, ephemeral IPs, service mesh\nTraditional: physical switches,\nstatic IPs, VLAN-based segmentation",
      choices: [
        "\u200FCloud Native: overlay networks,\nsoftware-defined, ephemeral IPs, service mesh\nTraditional: physical switches,\nstatic IPs, VLAN-based segmentation",
        "\u200FCloud Native = traditional networking על AWS",
        "\u200FTraditional = ישן ולא בשימוש",
        "\u200FCloud Native משתמש רק ב-IPv6"
      ],
      explanation: "\u200F\u2601\uFE0F Cloud Native\n\u2022 VPC (virtual switches/routers)\n\u2022 Security Groups (stateful firewall API)\n\u2022 ENI (virtual NIC)\n\n\uD83D\uDC33 Kubernetes\n\u2022 Pod IPs ephemeral \u2014 \u05D7\u05D9\u05D9\u05DD \u05DB\u05D6\u05DE\u05DF Pod\n\u2022 Service: stable virtual IP (ClusterIP)\n\u2022 Ingress: L7 load balancer\n\n\uD83D\uDD17 Service Mesh\n\u2022 Istio, Linkerd\n\u2022 mTLS \u05D1\u05D9\u05DF services\n\u2022 Observability, traffic policies\n\u2022 Overlay: VXLAN/Geneve (UDP encapsulation)\n\n\uD83C\uDFE2 Traditional\n\u2022 VLANs, static routing\n\u2022 Physical hardware lifecycle"
    ,
      qEn: "What is Cloud native networking vs traditional networking?",
      correctEn: "Cloud Native: overlay networks,\nsoftware-defined, ephemeral IPs, service mesh\nTraditional: physical switches,\nstatic IPs, VLAN-based segmentation",
      choicesEn: [
        "Cloud Native: overlay networks,\nsoftware-defined, ephemeral IPs, service mesh\nTraditional: physical switches,\nstatic IPs, VLAN-based segmentation",
        "Cloud Native = traditional networking on AWS",
        "Traditional = old and not in use",
        "Cloud Native uses only IPv6"
      ]},
    {
      q: "\u200Fמה Software Defined Networking (SDN)?",
      correct: "\u200FSDN: הפרדת Control Plane מ-Data Plane\nController מרכזי (OpenFlow)\nמתכנת forwarding tables של כל switches",
      choices: [
        "\u200FSDN: הפרדת Control Plane מ-Data Plane\nController מרכזי (OpenFlow)\nמתכנת forwarding tables של כל switches",
        "\u200FSDN = networking ללא hardware",
        "\u200FSDN = IPv6",
        "\u200FSDN = Software Defined Network = VPN"
      ],
      explanation: "\u200F🏗️ Traditional\n• כל switch מחזיק control plane + data plane\n\n🧠 SDN — הפרדה\n• Controller (ONOS, OpenDaylight) = control plane centralized\n• Switch = dumb forwarding only\n• OpenFlow: protocol בין controller ל-switch\n\n📋 טכנולוגיות קשורות\n• NFV: software replaces hardware functions\n• SD-WAN: SDN ל-WAN links, policy-based routing\n\n🎯 Intent-based networking (IBN)\n• מגדירים מה רוצים, לא איך להשיג\n• Cisco DNA Center, Juniper Apstra"
    ,
      qEn: "What is Software Defined Networking (SDN)?",
      correctEn: "SDN: separating Control Plane from Data Plane\nCentral controller (OpenFlow)\nprograms forwarding tables of all switches",
      choicesEn: [
        "SDN: separating Control Plane from Data Plane\nCentral controller (OpenFlow)\nprograms forwarding tables of all switches",
        "SDN = networking without hardware",
        "SDN = IPv6",
        "SDN = Software Defined Network = VPN"
      ]}
  ],

  // ===== Cyber Security Track (101-106) =====
  101: [
    {
      q: "‏מה מייצגת האות 'I' בשלישיית האבטחה (CIA Triad)?",
      correct: "‏שלמות (Integrity)\n— הנתונים לא שונו ולא זויפו",
      choices: [
        "‏שלמות (Integrity)\n— הנתונים לא שונו ולא זויפו",
        "‏זיהוי (Identification)\n— זיהוי המשתמש",
        "‏תשתית (Infrastructure)\n— תשתית מאובטחת",
        "‏זיהוי חדירה (Intrusion)\n— גילוי פריצות"
      ],
      explanation: "‏🔺 שלישיית האבטחה — CIA Triad\n• סודיות (Confidentiality) — רק מורשים רואים\n• שלמות (Integrity) — הנתון לא שונה\n• זמינות (Availability) — המערכת עובדת\n\n🛡️ הגנה על שלמות\n• גיבוב (SHA-256)\n• חתימות דיגיטליות\n• בדיקות שלמות (checksums)",
      explanationEn: "The CIA Triad consists of: Confidentiality (only authorized users can access data), Integrity (data has not been altered or tampered with), and Availability (systems are accessible when needed). Integrity is protected using hashing (SHA-256), digital signatures, and checksums.",
      qEn: "What does the letter 'I' stand for in the CIA Triad?",
      correctEn: "Integrity\n— the data was not changed or forged",
      choicesEn: [
        "Integrity\n— the data was not changed or forged",
        "Identification\n— identifying the user",
        "Infrastructure\n— a secure infrastructure",
        "Intrusion\n— detecting break-ins"
      ]
    },
    {
      q: "‏מהו STRIDE במסגרת ניתוח איומים (Threat Modeling)?",
      correct: "‏מסגרת לזיהוי איומים\nלפי שש קטגוריות:\nהתחזות, זיוף, הכחשה,\nדליפת מידע, מניעת שירות,\nהסלמת הרשאות",
      choices: [
        "‏מסגרת לזיהוי איומים\nלפי שש קטגוריות:\nהתחזות, זיוף, הכחשה,\nדליפת מידע, מניעת שירות,\nהסלמת הרשאות",
        "‏פרוטוקול לאימות זהות ברשת",
        "‏סוג מתקפה על TLS",
        "‏כלי לסריקת פגיעויות"
      ],
      explanation: "‏🏗️ מסגרת STRIDE — Microsoft\n• פותחה לתכנון אבטחה מראש\n\n📋 שש הקטגוריות\n• Spoofing — התחזות\n• Tampering — זיוף נתונים\n• Repudiation — הכחשה\n• Information Disclosure — דליפת מידע\n• Denial of Service — מניעת שירות\n• Elevation of Privilege — הסלמת הרשאות",
      explanationEn: "The STRIDE framework was developed by Microsoft for security design. The six categories are: Spoofing (impersonation), Tampering (data modification), Repudiation (denying actions), Information Disclosure (data leaks), Denial of Service (disrupting availability), and Elevation of Privilege (gaining unauthorized access levels).",
      qEn: "What is STRIDE in Threat Modeling?",
      correctEn: "A framework for identifying threats\nin six categories:\nSpoofing, Tampering, Repudiation,\nInformation Disclosure, Denial of Service,\nElevation of Privilege",
      choicesEn: [
        "A framework for identifying threats\nin six categories:\nSpoofing, Tampering, Repudiation,\nInformation Disclosure, Denial of Service,\nElevation of Privilege",
        "A protocol for network identity verification",
        "A type of attack on TLS",
        "A vulnerability scanning tool"
      ]
    },
    {
      q: "\u200Fמה אפשרה פריצת Target ב-2013?",
      correct: "\u200Fגישה לרשת Target\nדרך ספק HVAC שהיה מחובר\nלאותה רשת כמו מערכות הקופה",
      choices: [
        "\u200Fגישה לרשת Target\nדרך ספק HVAC שהיה מחובר\nלאותה רשת כמו מערכות הקופה",
        "\u200Fפריצה ישירה לשרתי Target מהאינטרנט",
        "\u200Fהזרקת SQL על אתר Target",
        "\u200Fסיסמה חלשה של מנהל IT בכיר"
      ],
      explanation: "\u200F🎯 פריצת Target — 2013\n• ספק מיזוג אוויר (HVAC) קיבל גישה לרשת Target לניהול מרחוק\n• הפורצים פרצו לספק\n• ביצעו תנועה רוחבית (pivoting) לרשת Target\n• הגיעו למערכות הקופה (Point-of-Sale)\n\n💳 התוצאה\n• נגנבו 40 מיליון כרטיסי אשראי\n\n📌 הלקח\n• הפרדת רשתות (Network Segmentation)\n• ספקים חיצוניים חייבים להיות ברשת נפרדת",
      explanationEn: "An HVAC vendor had remote access to Target's network. Attackers breached the vendor, performed lateral movement (pivoting) into Target's network, and reached Point-of-Sale systems. 40 million credit cards were stolen. Lesson: Network Segmentation is critical — external vendors must be on a separate network.",
      qEn: "What enabled the Target breach in 2013?",
      correctEn: "Access to Target's network\nthrough an HVAC vendor connected\nto the same network as the POS systems",
      choicesEn: [
        "Access to Target's network\nthrough an HVAC vendor connected\nto the same network as the POS systems",
        "A direct hack of Target's servers from the internet",
        "SQL injection on the Target website",
        "A weak password of a senior IT manager"
      ]
    },
        {
      q: "\u200Fמה ההבדל בין סודיות (Confidentiality) לבין פרטיות (Privacy) באבטחת מידע?",
      correct: "\u200Fסודיות (Confidentiality) מגנה על נתוני ארגון\nמפני גישה לא מורשית\nפרטיות (Privacy) מגנה על נתונים אישיים של אנשים",
      choices: [
        "\u200Fסודיות (Confidentiality) מגנה על נתוני ארגון\nמפני גישה לא מורשית\nפרטיות (Privacy) מגנה על נתונים אישיים של אנשים",
        "\u200Fהם מילים נרדפות — שניהם אותו דבר",
        "\u200Fפרטיות (Privacy) חזקה יותר מסודיות (Confidentiality)",
        "\u200Fסודיות מוגנת בהצפנה\nפרטיות מוגנת בסיסמאות בלבד"
      ],
      explanation: "\u200F🔒 סודיות (Confidentiality)\n• מונעת חשיפת נתונים לגורמים לא מורשים\n• למשל: מסמך סודי של חברה\n\n👤 פרטיות (Privacy)\n• זכות הפרט על נתוניו האישיים\n• לפי תקנות GDPR ו-CCPA\n\n⚠️ ההבדל המפתיע\n• יש חפיפה, אך ניתן להפר פרטיות בלי לפגוע בסודיות\n• למשל: עובד מורשה שמוכר נתוני לקוחות לצד שלישי",
      explanationEn: "Confidentiality prevents unauthorized access to data (e.g., a company's classified document). Privacy is an individual's right over their personal data (per GDPR, CCPA regulations). They overlap, but privacy can be violated without breaching confidentiality — e.g., an authorized employee selling customer data to a third party.",
      qEn: "What is the difference between Confidentiality and Privacy in information security?",
      correctEn: "Confidentiality protects organization data\nfrom unauthorized access\nPrivacy protects personal data of individuals",
      choicesEn: [
        "Confidentiality protects organization data\nfrom unauthorized access\nPrivacy protects personal data of individuals",
        "They are synonyms — both mean the same thing",
        "Privacy is stronger than Confidentiality",
        "Confidentiality is protected by encryption\nPrivacy is protected by passwords only"
      ]
    },
        {
      q: "\u200Fמה תהליך ניתוח איומים (Threat Modeling) ולמה עושים אותו לפני כתיבת קוד?",
      correct: "\u200Fתהליך זיהוי איומים פוטנציאליים על המערכת\nלפני פיתוח — זול יותר לתקן\nבשלב התכנון מאשר בסביבת הייצור",
      choices: [
        "\u200Fתהליך זיהוי איומים פוטנציאליים על המערכת\nלפני פיתוח — זול יותר לתקן\nבשלב התכנון מאשר בסביבת הייצור",
        "\u200Fבדיקת חדירה שמבוצעת לאחר פריסה (deployment)",
        "\u200Fכלי אוטומטי שסורק קוד לפגיעויות",
        "\u200Fתהליך הצפנת מסד הנתונים לפני העלייה לאוויר"
      ],
      explanation: "\u200F🧠 ניתוח איומים — Threat Modeling\n• מודלים: STRIDE, PASTA, DREAD\n• שאל את עצמך — מי יתקוף? איך? מה ייפגע?\n\n💰 עלות תיקון\n• בשלב התכנון: $1\n• בשלב הבדיקות: $10\n• בסביבת ייצור: $100\n\n📋 הפלט\n• תרשים זרימת נתונים\n• רשימת איומים ודרכי מיטיגציה\n• מיקרוסופט מחייבת ניתוח איומים לפני כל פיצ'ר חדש",
      explanationEn: "Threat modeling frameworks (STRIDE, PASTA, DREAD): Ask yourself — who will attack? How? What gets damaged? Fixing a bug at design stage costs $1, at testing $10, and in production $100. Microsoft requires threat modeling before every new feature. Output: data flow diagram, threat list, and mitigation strategies.",
      qEn: "What is Threat Modeling and why do it before writing code?",
      correctEn: "A process of identifying potential threats to the system\nbefore development — fixing is cheaper\nat design stage than in production",
      choicesEn: [
        "A process of identifying potential threats to the system\nbefore development — fixing is cheaper\nat design stage than in production",
        "A penetration test done after deployment",
        "An automated tool that scans code for vulnerabilities",
        "A process of encrypting the database before going live"
      ]
    },
        {
      q: "\u200Fמהו שטח תקיפה (Attack Surface) ואיך מצמצמים אותו?",
      correct: "\u200Fסך כל נקודות הכניסה האפשריות למערכת\nמצמצמים על ידי כיבוי שירותים מיותרים,\nעדכוני אבטחה ועקרון ההרשאה המינימלית",
      choices: [
        "\u200Fסך כל נקודות הכניסה האפשריות למערכת\nמצמצמים על ידי כיבוי שירותים מיותרים,\nעדכוני אבטחה ועקרון ההרשאה המינימלית",
        "\u200Fשטח הפנים הפיזי של שרת\nמצמצמים על ידי התקנה בחדר סגור",
        "\u200Fמספר המשתמשים עם גישה לאינטרנט",
        "\u200Fמספר הפורטים הפתוחים\nמצמצמים על ידי חומת אש"
      ],
      explanation: "\u200F🎯 שטח תקיפה — Attack Surface\n• כולל כל ממשק, נקודת גישה, שירות, משתמש ו-API\n• שתוקף יכול לנצל\n\n🛡️ איך מצמצמים?\n• כבה שירותים שאינם בשימוש (למשל FTP)\n• הסר תוכנות מיותרות\n• הפעל עקרון הרשאה מינימלית (Least Privilege)\n• עדכן טלאי אבטחה\n• הגבל גישת רשת בחוקי חומת אש\n\n📌 הכלל\n• שטח קטן יותר = פחות מקומות לתקוף",
      explanationEn: "The Attack Surface includes every interface, access point, service, user, and API an attacker can exploit. To reduce it: disable unused services (e.g., FTP), remove unnecessary software, apply Least Privilege, patch security updates, and restrict network access with firewall rules. Smaller surface = fewer attack opportunities.",
      qEn: "What is Attack Surface and how do you reduce it?",
      correctEn: "All possible entry points into a system\nReduce by disabling unused services,\nsecurity patches, and Least Privilege",
      choicesEn: [
        "All possible entry points into a system\nReduce by disabling unused services,\nsecurity patches, and Least Privilege",
        "The physical surface area of a server\nReduce by installing in a locked room",
        "The number of users with internet access",
        "The number of open ports\nReduce by using a firewall"
      ]
    }
  ],

  102: [
    {
      q: "‏מה ההבדל בין סריקת SYN (sS-) לבין סריקת חיבור (sT-) ב-Nmap?",
      correct: "‏סריקת SYN שולחת רק חבילת SYN\nבלי להשלים את לחיצת היד (handshake)\nשקטה יותר ולא נרשמת ביומני האפליקציה",
      choices: [
        "‏סריקת SYN שולחת רק חבילת SYN\nבלי להשלים את לחיצת היד (handshake)\nשקטה יותר ולא נרשמת ביומני האפליקציה",
        "‏סריקת SYN מהירה יותר כי משתמשת ב-UDP",
        "‏סריקת חיבור (Connect) דורשת הרשאות root",
        "‏אין הבדל — שניהם עושים אותו דבר"
      ],
      explanation: "‏🔍 סריקת SYN — חצי-פתוחה\n• שולחת SYN, מקבלת SYN-ACK, שולחת RST\n• לא משלימה חיבור → לא נרשמת בלוגים\n• דורשת root\n\n🔗 סריקת Connect\n• משלימה לחיצת יד מלאה (TCP handshake)\n• נרשמת בלוגים אך לא דורשת root\n\n📌 מתי להשתמש?\n• sS- מועדף בבדיקות חדירה\n• sT- לסביבות ללא root",
      explanationEn: "SYN scan (Half-open): sends SYN, receives SYN-ACK, sends RST. Does not complete a connection, so it is not logged by the application. Requires root. Connect scan: completes a full TCP handshake — gets logged, but does not require root. -sS is preferred for pentesting. -sT for non-root environments.",
      qEn: "What is the difference between SYN scan (-sS) and Connect scan (-sT) in Nmap?",
      correctEn: "SYN scan sends only a SYN packet\nwithout completing the handshake\nquieter and not logged by the application",
      choicesEn: [
        "SYN scan sends only a SYN packet\nwithout completing the handshake\nquieter and not logged by the application",
        "SYN scan is faster because it uses UDP",
        "Connect scan (-sT) requires root permissions",
        "No difference — both do the same thing"
      ]
    },
    {
      q: "‏מה פקודת Nmap שסורקת כל הפורטים עם זיהוי שירות ומערכת הפעלה?",
      correct: "‏nmap -sS -sV -O -p- target",
      choices: [
        "‏nmap -sS -sV -O -p- target",
        "‏nmap --full-scan target",
        "‏nmap -a -all target",
        "‏nmap -sU -complete target"
      ],
      explanation: "‏🏷️ הדגלים\n• sS- לסריקת SYN\n• sV- לזיהוי גרסת שירות על הפורט\n• O- לזיהוי מערכת הפעלה\n• p-- לכל 65,535 הפורטים (לא רק 1,000 הנפוצים)\n\n⚡ קיצור\n• הדגל A- כולל את sV- ו-O- יחד עם סקריפטים\n• זמן ריצה: 10-30 דקות על כל הפורטים",
      explanationEn: "The flags: -sS for SYN scan. -sV for service version detection (what runs on the port). -O for OS detection. -p- for all 65,535 ports (not just the top 1,000). You can combine them: nmap -A -p- target (-A = -sV -O --script=default). Runtime: 10-30 minutes for a full port scan.",
      qEn: "What Nmap command scans all ports with service and OS detection?",
      correctEn: "nmap -sS -sV -O -p- target",
      choicesEn: [
        "nmap -sS -sV -O -p- target",
        "nmap --full-scan target",
        "nmap -a -all target",
        "nmap -sU -complete target"
      ]
    },
    {
      q: "‏מה הסימן הראשון לפורט פתוח (open port) בפלט Nmap?",
      correct: "‏מצב פתוח (STATE: open) — הפורט מחזיר SYN-ACK לבקשת SYN",
      choices: [
        "‏מצב פתוח (STATE: open) — הפורט מחזיר SYN-ACK לבקשת SYN",
        "‏STATE: active",
        "‏RESPONSE: 200 OK",
        "‏PORT: listening"
      ],
      explanation: "‏📡 שלושת המצבים של Nmap\n• פתוח (open) — מקבל חיבורים\n• סגור (closed) — אין שירות, הפורט מגיב RST\n• מסונן (filtered) — חומת אש חוסמת, אין תגובה\n\n❓ מצב מיוחד\n• open/filtered — לא ברור האם חומת אש חוסמת או שהפורט פתוח",
      explanationEn: "Nmap reports 3 states: open (accepting connections), closed (no service — responds with RST), and filtered (firewall blocks — no response or ICMP unreachable). open/filtered means it is unclear whether a firewall is blocking or the port is open.",
      qEn: "What is the first sign of an open port in Nmap output?",
      correctEn: "STATE: open — the port responds with SYN-ACK to a SYN request",
      choicesEn: [
        "STATE: open — the port responds with SYN-ACK to a SYN request",
        "STATE: active",
        "RESPONSE: 200 OK",
        "PORT: listening"
      ]
    },
        {
      q: "‏מה קורה בזיוף ARP (ARP Spoofing) ואיך תוקף מנצל אותו?",
      correct: "‏תוקף שולח תגובות ARP מזויפות\nכדי לשייך את כתובת ה-MAC שלו\nלכתובת IP של הקורבן — כל התעבורה עוברת דרכו",
      choices: [
        "‏תוקף שולח תגובות ARP מזויפות\nכדי לשייך את כתובת ה-MAC שלו\nלכתובת IP של הקורבן — כל התעבורה עוברת דרכו",
        "‏תוקף מציף את הרשת בחבילות ARP כדי להפיל שרות",
        "‏תוקף מחליף את כתובות IP בחבילות UDP",
        "‏תוקף מנצל חולשה בפרוטוקול DNS"
      ],
      explanation: "‏⚠️ הבעיה\n• לפרוטוקול ARP אין מנגנון אימות\n• כל אחד יכול לשלוח תגובת ARP\n\n🕵️ איך זה עובד?\n• התוקף שולח: 'כתובת ה-IP של השער היא כתובת ה-MAC שלי!'\n• הקורבן מעדכן את טבלת ה-ARP\n• כל התעבורה עוברת דרך התוקף (אדם-באמצע)\n\n🛡️ הגנה\n• בדיקת ARP דינמית (DAI) בסוויצ'ים\n• רשומות ARP קבועות\n• כלי ניטור כמו ARPwatch",
      explanationEn: "ARP has no authentication — anyone can send an ARP reply. The attacker sends: 'The gateway IP maps to MY MAC address!' The victim updates its ARP cache, and all traffic flows through the attacker. Defenses: Dynamic ARP Inspection (DAI) on switches, static ARP entries, and monitoring tools like ARPwatch.",
      qEn: "What happens in ARP Spoofing and how does an attacker use it?",
      correctEn: "The attacker sends fake ARP replies\nto map their MAC address\nto the victim's IP — all traffic flows through them",
      choicesEn: [
        "The attacker sends fake ARP replies\nto map their MAC address\nto the victim's IP — all traffic flows through them",
        "The attacker floods the network with ARP packets to crash a service",
        "The attacker replaces IP addresses in UDP packets",
        "The attacker exploits a weakness in the DNS protocol"
      ]
    },
        {
      q: "‏מה ההבדל בין מתקפת מניעת שירות נפחית (Volumetric DDoS) לבין מתקפת שכבת אפליקציה (L7 DDoS)?",
      correct: "‏מתקפה נפחית (Volumetric) מציפה את רוחב הפס\nבג'יגה-ביט של UDP/ICMP\nמתקפת שכבה 7 שולחת בקשות HTTP\nשנראות לגיטימיות ומרוקנות משאבי שרת",
      choices: [
        "‏מתקפה נפחית (Volumetric) מציפה את רוחב הפס\nבג'יגה-ביט של UDP/ICMP\nמתקפת שכבה 7 שולחת בקשות HTTP\nשנראות לגיטימיות ומרוקנות משאבי שרת",
        "‏מתקפה נפחית תוקפת שרתי DNS — שכבה 7 תוקפת רק שרתי web",
        "‏מתקפת שכבה 7 קלה יותר לחסימה כי השרת רואה את ה-IP",
        "‏אין הבדל — שניהם מרוקנים רוחב פס"
      ],
      explanation: "‏🌊 מתקפה נפחית — שכבות 3/4\n• מציפה את הצינור בג'יגה-ביט של נתונים\n• הצפת UDP, ICMP, SYN\n• קל לזהות (תעבורה חריגה) אך קשה לעצור\n• דורשת סינון ברמת ספק האינטרנט\n\n🎯 מתקפת שכבה 7\n• כלי Slowloris מחזיק חיבורי HTTP פתוחים\n• הצפת HTTP — הבקשות נראות לגיטימיות\n• קשה להבחין בתעבורה אמיתית\n\n🛡️ הגנה\n• חומת אש אפליקטיבית (WAF)\n• הגבלת קצב ואתגרי CAPTCHA",
      explanationEn: "Volumetric (L3/L4): floods the pipe with gigabits of data — UDP flood, ICMP flood, SYN flood. Easy to detect (abnormal traffic) but hard to stop without ISP-level scrubbing. Application L7: Slowloris holds HTTP connections open, HTTP flood looks legitimate and is hard to distinguish from real traffic. Requires WAF, rate limiting, and challenge-response (CAPTCHA).",
      qEn: "What is the difference between Volumetric DDoS and Application Layer (L7) DDoS?",
      correctEn: "Volumetric attack floods bandwidth\nwith gigabits of UDP/ICMP\nL7 attack sends HTTP requests\nthat look legitimate and drain server resources",
      choicesEn: [
        "Volumetric attack floods bandwidth\nwith gigabits of UDP/ICMP\nL7 attack sends HTTP requests\nthat look legitimate and drain server resources",
        "Volumetric attacks target DNS servers — L7 attacks only web servers",
        "L7 attacks are easier to block because the server sees the IP",
        "No difference — both drain bandwidth"
      ]
    },
        {
      q: "‏מהי מתקפת השחזור (Replay Attack) ואיך TLS מונע אותה?",
      correct: "‏תוקף מיירט ומשחזר חבילה חוקית\nפרוטוקול TLS מונע זאת באמצעות\nמספרים סידוריים ואסימוני הפעלה חד-פעמיים",
      choices: [
        "‏תוקף מיירט ומשחזר חבילה חוקית\nפרוטוקול TLS מונע זאת באמצעות\nמספרים סידוריים ואסימוני הפעלה חד-פעמיים",
        "‏תוקף שולח אותה בקשה פעמיים לגרום לעיבוד כפול",
        "‏תוקף מקליט שיחת קול ומשחזר אותה לאחר שיחה",
        "‏פרוטוקול TLS לא מגן מפני מתקפת השחזור — נדרש אימות נוסף"
      ],
      explanation: "‏🔁 מתקפת השחזור — Replay Attack\n• התוקפת מיירטת אסימון אימות תקני\n• שולחת אותו שוב לשרת כדי להתחזות\n\n🔐 איך TLS 1.3 מגן?\n• כל חיבור מקבל ערך ייחודי (nonce)\n• מספרים סידוריים\n\n🎫 הגנות נוספות\n• אסימוני JWT כוללים תפוגה (exp) ומזהה חד-פעמי (jti)\n• בפרוטוקולים ישנים כמו Kerberos — הייתה בעיה קריטית\n• סנכרון שעונים (NTP) חשוב למניעה",
      explanationEn: "Replay Attack: an attacker intercepts a valid authentication token from Alice and resends it to the server to impersonate her. TLS 1.3: each connection gets a unique nonce + sequence numbers. Token-based: JWT includes exp (expiration) + jti (unique JWT ID). In older protocols (old Kerberos), replay was a critical vulnerability. NTP sync is important for prevention.",
      qEn: "What is a Replay Attack and how does TLS prevent it?",
      correctEn: "An attacker intercepts and replays a valid packet\nTLS prevents this with\nsequence numbers and one-time session tokens",
      choicesEn: [
        "An attacker intercepts and replays a valid packet\nTLS prevents this with\nsequence numbers and one-time session tokens",
        "An attacker sends the same request twice to cause double processing",
        "An attacker records a voice call and replays it after the call",
        "TLS does not protect against Replay Attack — additional authentication is needed"
      ]
    }
  ],

  103: [
    {
      q: "‏מה ההבדל בין סקריפטינג מאוחסן (Stored XSS) לבין סקריפטינג מוחזר (Reflected XSS)?",
      correct: "‏XSS מאוחסן (Stored) נשמר במסד הנתונים ומורץ לכל מבקר — XSS מוחזר (Reflected) חוזר מהשרת רק למי ששלח את הכתובת הזדונית",
      choices: [
        "‏XSS מאוחסן (Stored) נשמר במסד הנתונים ומורץ לכל מבקר — XSS מוחזר (Reflected) חוזר מהשרת רק למי ששלח את הכתובת הזדונית",
        "‏XSS מאוחסן רלוונטי לשרתי Windows — XSS מוחזר רלוונטי ל-Linux",
        "‏XSS מוחזר חמור יותר כי מסוגל לגנוב סיסמאות",
        "שניהם זהים — רק שמות שונים"
      ],
      explanation: "‏💾 XSS מאוחסן (Stored/Persistent)\n• סקריפט נשמר במסד הנתונים (למשל תגובה בפורום)\n• מורץ אצל כל מי שצופה\n\n🪞 XSS מוחזר (Reflected)\n• סקריפט בכתובת URL\n• נשלח למשתמש ומורץ מיד\n\n🌐 XSS מבוסס DOM\n• רץ בצד הלקוח ללא מעורבות השרת\n\n⚠️ המסוכן ביותר: המאוחסן — בגלל ההיקף\n\n🛡️ הגנה\n• קידוד פלט (output encoding)\n• כותרות CSP",
      explanationEn: "Stored (Persistent) XSS: a script is saved in the database (e.g., a forum comment) and executes for every visitor. Reflected: a script in a URL is sent to a user and executes immediately. DOM-based: runs in client-side JS without server involvement. Stored is the most dangerous (affects all visitors). Defense: output encoding, CSP headers.",
      qEn: "What is the difference between Stored XSS and Reflected XSS?",
      correctEn: "Stored XSS is saved in the database and runs for every visitor — Reflected XSS comes back from the server only to the person who sent the malicious URL",
      choicesEn: [
        "Stored XSS is saved in the database and runs for every visitor — Reflected XSS comes back from the server only to the person who sent the malicious URL",
        "Stored XSS is for Windows servers — Reflected XSS is for Linux",
        "Reflected XSS is more dangerous because it can steal passwords",
        "They are the same — just different names"
      ]
    },
    {
      q: "‏מה מייצג ציון 9.8 בסולם הפגיעויות (CVSS)?",
      correct: "‏קריטי (Critical) — פגיעות חמורה מאוד הניתנת לניצול מרחוק ללא אימות",
      choices: [
        "‏קריטי (Critical) — פגיעות חמורה מאוד הניתנת לניצול מרחוק ללא אימות",
        "‏גבוה (High) — פגיעות קשה אך דורשת גישה פיזית",
        "‏בינוני (Medium) — פגיעות בינונית עם השפעה מוגבלת",
        "תלוי בסוג המערכת"
      ],
      explanation: "‏📊 סולם CVSS v3\n• 0 = ללא\n• 0.1-3.9 = נמוך\n• 4.0-6.9 = בינוני\n• 7.0-8.9 = גבוה\n• 9.0-10.0 = קריטי\n\n🔴 מה ציון 9.8 אומר?\n• הרצת קוד מרחוק (RCE) ללא אימות\n• נגיש מהרשת\n• Heartbleed ו-Log4Shell קיבלו 9.8 ומעלה\n\n⏰ כלל ברזל\n• כל פגיעות קריטית דורשת טלאי תוך 24-48 שעות",
      explanationEn: "CVSS v3 scale: 0.0=None, 0.1-3.9=Low, 4.0-6.9=Medium, 7.0-8.9=High, 9.0-10.0=Critical. A score of 9.8 means Remote Code Execution (RCE) without authentication, network-accessible. Heartbleed and Log4Shell received CVSS 9.8+. Every Critical vulnerability needs patching within 24-48 hours.",
      qEn: "What does a CVSS score of 9.8 mean?",
      correctEn: "Critical — a very severe vulnerability that can be exploited remotely without authentication",
      choicesEn: [
        "Critical — a very severe vulnerability that can be exploited remotely without authentication",
        "High — a difficult vulnerability that requires physical access",
        "Medium — a moderate vulnerability with limited impact",
        "It depends on the type of system"
      ]
    },
    {
      q: "איך Heartbleed עבד טכנית?",
      correct: "‏בקשת heartbeat עם אורך (length) שגוי — השרת החזיר זיכרון מעבר לבקשה, כולל מפתחות פרטיים וסיסמות",
      choices: [
        "‏בקשת heartbeat עם אורך (length) שגוי — השרת החזיר זיכרון מעבר לבקשה, כולל מפתחות פרטיים וסיסמות",
        "‏גלישת מאגר (Buffer overflow) שמאפשרת הרצת קוד שרירותי",
        "‏הזרקת SQL במסד הנתונים של OpenSSL",
        "חיבור TLS לא מוצפן שאפשר האזנה"
      ],
      explanation: "‏💔 תוסף ה-Heartbeat ב-OpenSSL\n• הלקוח שולח 'החזר לי X בתים'\n• השרת מחזיר X בתים מבלי לוודא שנשלחו כל כך הרבה\n\n🐛 הבאג\n• ביקשת 64KB אבל שלחת בית אחד\n• השרת מחזיר 64KB מהזיכרון\n• עלול להכיל מפתחות פרטיים, אסימוני הפעלה וסיסמאות\n\n⏳ היקף\n• הפגיעות הייתה חשופה שנתיים (2012-2014)",
      explanationEn: "OpenSSL Heartbeat extension: the client sends 'return X bytes to me'. The server returns X bytes without verifying that X bytes were actually sent. Bug: if you request 64K but send 1 byte, the server returns 64K from RAM — which may contain private keys, session tokens, and passwords. The vulnerability was exposed for 2 years (2012-2014).",
      qEn: "How did Heartbleed work technically?",
      correctEn: "A heartbeat request with a wrong length — the server returned memory beyond the request, including private keys and passwords",
      choicesEn: [
        "A heartbeat request with a wrong length — the server returned memory beyond the request, including private keys and passwords",
        "A buffer overflow that allowed arbitrary code execution",
        "SQL injection in the OpenSSL database",
        "An unencrypted TLS connection that allowed eavesdropping"
      ]
    },
        {
      q: "‏מהי הזרקת SQL (SQL Injection) ואיך שאילתות מוכנות (Prepared Statements) מונעות אותה?",
      correct: "‏הזרקת קוד SQL דרך קלט משתמש\nשאילתות מוכנות (Prepared Statements)\nמפרידות קוד מנתונים כך שהפרמטרים מטופלים כטקסט בלבד",
      choices: [
        "‏הזרקת קוד SQL דרך קלט משתמש\nשאילתות מוכנות (Prepared Statements)\nמפרידות קוד מנתונים כך שהפרמטרים מטופלים כטקסט בלבד",
        "‏מתקפה על שרת מסד הנתונים הפיזי — הפתרון: עדכון שרת",
        "‏הצפנת שאילתות SQL לפני שליחה למסד הנתונים",
        "‏שאילתות מוכנות מהירות יותר — זו הסיבה העיקרית להשתמש בהן"
      ],
      explanation: "‏💉 דוגמה קלאסית\n• שם משתמש עם ' OR '1'='1\n• יוצר שאילתה שתמיד מחזירה true\n• עוקף את ההתחברות\n\n🛡️ שאילתה מוכנה — Prepared Statement\n• משתמשת בסימן ? כמציין מקום\n• מסד הנתונים מטפל בערך כטקסט בלבד ולא כקוד\n\n📌 כלל ברזל\n• לעולם אל תשלב קלט משתמש ישירות במחרוזת SQL!",
      explanationEn: "Classic SQLi: username=' OR '1'='1 turns the query into SELECT * FROM users WHERE name='' OR '1'='1' — always true, bypasses login! Prepared Statement: $stmt = $pdo->prepare('SELECT * FROM users WHERE name = ?'); $stmt->execute([$username]); — the ? is a placeholder, the DB treats the value as a string, not code. Never concatenate user input directly into SQL strings!",
      qEn: "What is SQL Injection and how do Prepared Statements prevent it?",
      correctEn: "Injecting SQL code through user input\nPrepared Statements separate code from data\nso parameters are treated as text only",
      choicesEn: [
        "Injecting SQL code through user input\nPrepared Statements separate code from data\nso parameters are treated as text only",
        "An attack on the physical database server — the fix is updating the server",
        "Encrypting SQL queries before sending to the database",
        "Prepared Statements are faster — that is the main reason to use them"
      ]
    },
        {
      q: "‏מהו זיוף בקשה בין אתרים (CSRF) ואיך אסימון נגד CSRF מגן?",
      correct: "‏זיוף בקשה בין אתרים (CSRF)\nאתר זדוני גורם לדפדפן לשלוח בקשות\nלאתר אחר שבו המשתמש מחובר\nאסימון ייחודי בכל טופס מונע זאת",
      choices: [
        "‏זיוף בקשה בין אתרים (CSRF)\nאתר זדוני גורם לדפדפן לשלוח בקשות\nלאתר אחר שבו המשתמש מחובר\nאסימון ייחודי בכל טופס מונע זאת",
        "‏מתקפה שמזייפת עוגיות של משתמש באמצעות XSS",
        "‏גניבת כותרות CSRF מבקשת HTTP",
        "‏כניסה לחשבון בעזרת סיסמה גנובה"
      ],
      explanation: "‏🎭 תרחיש CSRF\n• אליס מחוברת לאתר הבנק\n• מבקרת באתר זדוני עם תג תמונה\n• הכתובת מפנה לפעולת העברה בבנק\n• הדפדפן שולח את הבקשה עם העוגיות של אליס!\n\n🛡️ אסימון נגד CSRF\n• השרת מוסיף אסימון נסתר לכל טופס\n• בעת שליחה מוודא שהאסימון תואם את ההפעלה\n• אתר זדוני לא יכול לקרוא את האסימון\n• בזכות מדיניות Same-Origin Policy",
      explanationEn: "Scenario: Alice is logged into bank.com. She visits evil.com which contains an image tag pointing to bank.com/transfer. The browser sends the request with Alice's cookies! Anti-CSRF Token: the server adds a hidden token to every form, the token is sent in the body, and the server verifies it matches the session. The attacker's site cannot read the token due to Same-Origin Policy.",
      qEn: "What is CSRF and how does an anti-CSRF token protect against it?",
      correctEn: "Cross-Site Request Forgery (CSRF)\nA malicious site makes the browser send requests\nto another site where the user is logged in\nA unique token in each form prevents this",
      choicesEn: [
        "Cross-Site Request Forgery (CSRF)\nA malicious site makes the browser send requests\nto another site where the user is logged in\nA unique token in each form prevents this",
        "An attack that fakes user cookies using XSS",
        "Stealing CSRF headers from an HTTP request",
        "Logging into an account with a stolen password"
      ]
    },
        {
      q: "‏מהי רשימת OWASP Top 10 ואיזו פגיעות בדרך כלל תופסת מקום ראשון?",
      correct: "‏רשימת 10 סיכוני האבטחה הנפוצים ביותר\nבאפליקציות ווב — בקרת גישה לקויה\n(Broken Access Control) במקום 1 מאז 2021",
      choices: [
        "‏רשימת 10 סיכוני האבטחה הנפוצים ביותר\nבאפליקציות ווב — בקרת גישה לקויה\n(Broken Access Control) במקום 1 מאז 2021",
        "רשימת 10 הכלים הטובים ביותר לבדיקות חדירה — הזרקת SQL במקום 1",
        "10 פגיעויות שנתגלו בשנת 2021 בלבד",
        "‏תקן ISO המגדיר אבטחת ווב — XSS במקום 1 תמיד"
      ],
      explanation: "‏📋 OWASP Top 10 — 2021\n• A01 — בקרת גישה לקויה\n• A02 — כשלים קריפטוגרפיים\n• A03 — הזרקות SQL/LDAP/OS\n• A04 — תכנון לא מאובטח\n• A05 — תצורת אבטחה שגויה\n• A06 — רכיבים פגיעים\n• A07 — כשלי אימות\n• A08 — כשלי שלמות\n• A09 — כשלי תיעוד\n• A10 — זיוף בקשות בצד השרת (SSRF)\n\n📌 חשוב לדעת\n• לא חוק אלא מדריך שיטות עבודה מומלצות\n• מתעדכן כל 4 שנים בערך",
      explanationEn: "OWASP Top 10 (2021): A01:Broken Access Control (user can access another's resources), A02:Cryptographic Failures, A03:Injection (SQL/LDAP/OS), A04:Insecure Design, A05:Security Misconfiguration, A06:Vulnerable Components, A07:Auth Failures, A08:Integrity Failures, A09:Logging Failures, A10:SSRF. Not a law — a best practice guide for dev teams. Updated roughly every 4 years.",
      qEn: "What is the OWASP Top 10 list and which vulnerability usually ranks first?",
      correctEn: "A list of the 10 most common web application security risks\nBroken Access Control is #1 since 2021",
      choicesEn: [
        "A list of the 10 most common web application security risks\nBroken Access Control is #1 since 2021",
        "A list of the 10 best penetration testing tools — SQL injection is #1",
        "10 vulnerabilities discovered only in 2021",
        "An ISO standard for web security — XSS is always #1"
      ]
    }
  ],

  104: [
    {
      q: "‏מהי הגנה לעומק (Defense in Depth)?",
      correct: "‏שכבות הגנה מרובות — כך שפריצת שכבה אחת לא מספיקה להגיע לנכס",
      choices: [
        "‏שכבות הגנה מרובות — כך שפריצת שכבה אחת לא מספיקה להגיע לנכס",
        "‏חומת אש חזקה מאוד בכניסה לרשת",
        "‏הצפנת כל הנתונים במסד הנתונים",
        "‏גיבוי יומי לכל המערכות"
      ],
      explanation: "‏🏰 הגנה לעומק — שכבות\n• היקף — חומת אש, WAF\n• רשת — IDS/IPS, הפרדת רשתות\n• תחנות קצה — אנטי-וירוס, EDR, עדכונים\n• אפליקציה — אימות, הרשאות, בדיקת קלט\n• נתונים — הצפנה, מניעת דליפה (DLP)\n• אנושי — הדרכה, סימולציות פישינג\n\n📌 העיקרון\n• כל שכבה מניחה שהשכבה החיצונית תיכשל",
      explanationEn: "Defense in Depth layers: Perimeter (Firewall, WAF) > Network (IDS/IPS, Segmentation) > Endpoint (AV, EDR, Patch) > Application (Auth, RBAC, Input validation) > Data (Encryption, DLP) > Human (Training, Phishing simulation). Each layer assumes the outer layer will fail.",
      qEn: "What is Defense in Depth?",
      correctEn: "Multiple layers of defense — so that breaking one layer is not enough to reach the asset",
      choicesEn: [
        "Multiple layers of defense — so that breaking one layer is not enough to reach the asset",
        "A very strong firewall at the network entrance",
        "Encrypting all data in the database",
        "Daily backup of all systems"
      ]
    },
    {
      q: "‏מהו מחזור החיים של טיפול בתקריות (Incident Response) לפי NIST?",
      correct: "‏הכנה → זיהוי → בלימה → מיגור → שחזור → לקחים נלמדים (Preparation → Detection → Containment → Eradication → Recovery → Lessons Learned)",
      choices: [
        "‏הכנה → זיהוי → בלימה → מיגור → שחזור → לקחים נלמדים (Preparation → Detection → Containment → Eradication → Recovery → Lessons Learned)",
        "‏התרעה → תיעדוף → תיקון → דיווח (Alert → Triage → Patch → Report)",
        "‏ניטור → חסימה → ניקוי → גיבוי (Monitor → Block → Clean → Backup)",
        "‏זיהוי → תגובה → שחזור → שיפור (Detect → Respond → Recover → Improve)"
      ],
      explanation: "‏📋 NIST SP 800-61 — ששת השלבים\n• הכנה — כלים, נהלים, צוות\n• זיהוי וניתוח — איתור סממני פריצה (IOCs)\n• בלימה — בידוד קצר טווח ואז ארוך טווח\n• מיגור — הסרת תוכנה זדונית, עדכון\n• שחזור — החזרת שירותים\n• לקחים נלמדים — תחקיר תוך שבועיים\n\n🔄 העיקרון\n• המחזור חוזר תמיד על עצמו",
      explanationEn: "NIST SP 800-61: Preparation (tools, playbooks, team). Detection & Analysis (identify IOCs). Containment (isolate — short-term then long-term). Eradication (remove malware, patch). Recovery (restore services). Lessons Learned (post-mortem within 2 weeks). The cycle always repeats.",
      qEn: "What is the NIST Incident Response lifecycle?",
      correctEn: "Preparation > Detection > Containment > Eradication > Recovery > Lessons Learned",
      choicesEn: [
        "Preparation > Detection > Containment > Eradication > Recovery > Lessons Learned",
        "Alert > Triage > Patch > Report",
        "Monitor > Block > Clean > Backup",
        "Detect > Respond > Recover > Improve"
      ]
    },
    {
      q: "‏מה מערכת ניהול מידע ואירועי אבטחה (SIEM) עושה שאי אפשר לעשות עם לוגים פשוטים?",
      correct: "‏מאחדת לוגים ממקורות שונים ומחפשת מתאמים — למשל: כשל התחברות + תנועה רוחבית + הברחת מידע תוך 10 דקות",
      choices: [
        "‏מאחדת לוגים ממקורות שונים ומחפשת מתאמים — למשל: כשל התחברות + תנועה רוחבית + הברחת מידע תוך 10 דקות",
        "‏מצפינה לוגים כדי שלא ייגנבו",
        "‏מחליפה חומת אש ומערכת זיהוי חדירות (IDS)",
        "‏שולחת התרעות רק על פגיעויות (CVE) ידועות"
      ],
      explanation: "‏📊 מערכת SIEM — מקורות\n• Active Directory\n• חומת אש\n• EDR\n• פרוקסי ווב\n• DNS\n\n🔍 דוגמה לזיהוי מתאמים\n• 3 כשלי התחברות (ניסיון פיצוח בכוח?)\n• ואז הצלחה + גישה לשרת רגיש = התרעה\n\n🛠️ כלים נפוצים\n• Splunk, IBM QRadar, Microsoft Sentinel\n• אנליסט SOC מבלה 70% מזמנו במערכת SIEM",
      explanationEn: "SIEM = Security Information and Event Management. Sources: AD, Firewall, EDR, Web proxy, DNS. Correlation example: 3 login failures (brute force?) + success + access to sensitive server = alert. Tools: Splunk, IBM QRadar, Microsoft Sentinel, ELK Stack. SOC analysts spend 70% of their time in the SIEM.",
      qEn: "What does a SIEM do that simple logs cannot?",
      correctEn: "Combines logs from different sources and looks for correlations — e.g., login failure + lateral movement + data exfiltration within 10 minutes",
      choicesEn: [
        "Combines logs from different sources and looks for correlations — e.g., login failure + lateral movement + data exfiltration within 10 minutes",
        "Encrypts logs so they cannot be stolen",
        "Replaces a firewall and IDS",
        "Sends alerts only for known CVEs"
      ]
    },
        {
      q: "‏מהם 5 שלבי בדיקת חדירה (Penetration Testing) המקובלים?",
      correct: "‏איסוף מודיעין, סריקה, ניצול, לאחר הניצול, דיווח (Reconnaissance, Scanning, Exploitation, Post-Exploitation, Reporting)",
      choices: [
        "‏איסוף מודיעין, סריקה, ניצול, לאחר הניצול, דיווח (Reconnaissance, Scanning, Exploitation, Post-Exploitation, Reporting)",
        "‏תכנון, תקיפה, הגנה, שחזור, תיעוד (Planning, Attack, Defend, Recover, Document)",
        "‏מודיעין ממקורות פתוחים (OSINT), Nmap, Metasploit, מעבר רוחבי, יציאה",
        "‏גילוי, מיפוי, הסלמת הרשאות, תנועה רוחבית, ניקוי (Discovery, Enumeration, Privilege Escalation, Lateral Movement, Cleanup)"
      ],
      explanation: "‏🔎 5 שלבי בדיקת חדירה\n• 1) איסוף מודיעין — OSINT, סריקת DNS\n• 2) סריקה — Nmap, Nikto, Shodan\n• 3) ניצול — Metasploit וניצול פגיעויות (CVE)\n• 4) לאחר הניצול — הסלמת הרשאות, תנועה רוחבית, אחיזה, הברחת מידע\n• 5) דו\"ח — תקציר מנהלים, פרטים טכניים, ציוני CVSS והמלצות\n\n⚠️ חשוב\n• הסכמה בכתב על היקף הבדיקה לפני ההתחלה!",
      explanationEn: "Pentest phases: 1) Reconnaissance — OSINT, DNS enumeration, Google dorking. 2) Scanning — Nmap, Nikto, Shodan. 3) Exploitation — Metasploit, custom exploits, CVE exploitation. 4) Post-Exploitation — privilege escalation, lateral movement, persistence, data exfiltration. 5) Reporting — executive summary + technical details + CVSS scores + recommendations. Important: written scope agreement before starting!",
      qEn: "What are the 5 phases of Penetration Testing?",
      correctEn: "Reconnaissance, Scanning, Exploitation, Post-Exploitation, Reporting",
      choicesEn: [
        "Reconnaissance, Scanning, Exploitation, Post-Exploitation, Reporting",
        "Planning, Attack, Defend, Recover, Document",
        "OSINT, Nmap, Metasploit, Lateral Movement, Exit",
        "Discovery, Enumeration, Privilege Escalation, Lateral Movement, Cleanup"
      ]
    },
        {
      q: "‏מה ההבדל בין בדיקת קופסה לבנה (White Box) לבין קופסה שחורה (Black Box) בבדיקת חדירה?",
      correct: "‏קופסה לבנה (White Box): לבודק יש מלוא המידע (קוד, ארכיטקטורה) — קופסה שחורה (Black Box): לבודק אין מידע מוקדם, מדמה תוקף חיצוני",
      choices: [
        "‏קופסה לבנה (White Box): לבודק יש מלוא המידע (קוד, ארכיטקטורה) — קופסה שחורה (Black Box): לבודק אין מידע מוקדם, מדמה תוקף חיצוני",
        "‏קופסה לבנה בודקת רק צד לקוח — קופסה שחורה בודקת צד שרת",
        "‏קופסה לבנה מבוצעת במשרד — קופסה שחורה מרחוק",
        "‏קופסה לבנה בודקת רשת — קופסה שחורה בודקת אפליקציות"
      ],
      explanation: "‏⬜ קופסה לבנה (Crystal Box)\n• הבודק מקבל קוד מקור, הרשאות ותרשימי ארכיטקטורה\n• יעיל ויסודי יותר\n• עדיפה לסקירת קוד\n\n🔘 קופסה אפורה (Gray Box)\n• ידע חלקי — הרשאות בלבד\n\n⬛ קופסה שחורה (Black Box)\n• מדמה תוקף אמיתי\n• לאיתור בעיות שרק תוקף חיצוני ימצא\n\n🔴 צוות אדום (Red Team)\n• קופסה שחורה מורחבת\n• עם הנדסה חברתית וטכניקות פיזיות",
      explanationEn: "White Box (Crystal Box): tester receives source code, credentials, and architecture diagrams. More thorough, finds more issues. Gray Box: partial knowledge — credentials only. Black Box: simulates a real attacker. Red Team = extended Black Box with social engineering and physical techniques. White Box is better for Code Review; Black Box for finding issues only an external attacker would discover.",
      qEn: "What is the difference between White Box and Black Box penetration testing?",
      correctEn: "White Box: the tester has full information (code, architecture) — Black Box: the tester has no prior information, simulates an external attacker",
      choicesEn: [
        "White Box: the tester has full information (code, architecture) — Black Box: the tester has no prior information, simulates an external attacker",
        "White Box tests only client side — Black Box tests server side",
        "White Box is done in office — Black Box remotely",
        "White Box tests network — Black Box tests applications"
      ]
    },
        {
      q: "‏מהי מסגרת הניצול Metasploit ומהי מעטפת Meterpreter?",
      correct: "‏מסגרת Metasploit משמשת לניצול פגיעויות — מעטפת Meterpreter היא מטען מתקדם שרץ בזיכרון בלבד, לא כותב לדיסק, עם יכולות כמו צילום מסך ומעקב מקלדת",
      choices: [
        "‏מסגרת Metasploit משמשת לניצול פגיעויות — מעטפת Meterpreter היא מטען מתקדם שרץ בזיכרון בלבד, לא כותב לדיסק, עם יכולות כמו צילום מסך ומעקב מקלדת",
        "‏כלי Metasploit הוא סורק פורטים — מעטפת Meterpreter היא מעטפת הפוכה פשוטה",
        "‏כלי Metasploit הוא מערכת SIEM — ו-Meterpreter הוא כלי ניתוח לוגים",
        "‏כלי Metasploit הוא כלי הצפנה — Meterpreter הוא כלי לפיצוח סיסמאות"
      ],
      explanation: "‏🛠️ מסגרת Metasploit — Rapid7\n• פותחים את msfconsole\n• מחפשים ניצול, בוחרים מטען ומריצים\n\n🐚 מעטפת Meterpreter — מפרש-על\n• רצה בזיכרון התהליך שנוצל\n• אין קובץ בדיסק, מוצפנת ב-TLS\n\n⚡ פקודות נפוצות\n• שליפת גיבובי סיסמאות\n• הסלמת הרשאות\n• צילום מסך\n• מעבר לתהליך אחר\n\n🥷 התחמקות\n• מטענים פולימורפיים וקידוד באמצעות msfvenom",
      explanationEn: "Metasploit (Rapid7): msfconsole > search exploit > use exploit/windows/smb/ms17_010_eternalblue > set RHOSTS > set PAYLOAD > run. Meterpreter = meta-interpreter: runs in the exploited process's memory, not as an exe file, encrypted with TLS. Commands: hashdump, getsystem (priv esc), screenshot, migrate (to a different process). Evasion: polymorphic payloads, msfvenom encoding.",
      qEn: "What is Metasploit and what is Meterpreter?",
      correctEn: "Metasploit is a framework for exploiting vulnerabilities — Meterpreter is an advanced payload that runs in memory only, does not write to disk, with capabilities like screenshot and keylogging",
      choicesEn: [
        "Metasploit is a framework for exploiting vulnerabilities — Meterpreter is an advanced payload that runs in memory only, does not write to disk, with capabilities like screenshot and keylogging",
        "Metasploit is a port scanner — Meterpreter is a simple reverse shell",
        "Metasploit is a SIEM — Meterpreter is a log analysis tool",
        "Metasploit is an encryption tool — Meterpreter is a password cracker"
      ]
    }
  ],

  105: [
    {
      q: "‏למה מצב ספר הקודים האלקטרוני (AES-ECB) מסוכן למרות שהצפנת AES עצמה חזקה?",
      correct: "‏מצב ECB מצפין כל בלוק בנפרד — בלוקים זהים מייצרים טקסט מוצפן זהה וחושפים דפוסים",
      choices: [
        "‏מצב ECB מצפין כל בלוק בנפרד — בלוקים זהים מייצרים טקסט מוצפן זהה וחושפים דפוסים",
        "‏מצב ECB לא תומך במפתחות של 256 סיביות",
        "‏מצב ECB פגיע לפיצוח בכוח כי המפתח קצר",
        "‏מצב ECB איטי מדי לשימוש מעשי"
      ],
      explanation: "‏🐧 הבעיה עם AES-ECB\n• כל 16 בתים מוצפנים באופן עצמאי\n• שני אזורים באותו צבע = טקסט מוצפן זהה\n• הדפוס נראה!\n\n🎨 הדגמה קלאסית\n• הצפנת תמונת הפינגווין של לינוקס במצב ECB\n• הצללית עדיין נראית!\n\n🔐 הפתרון\n• מצבי שרשור בלוקים (AES-CBC)\n• הצפנה מאומתת (AES-GCM)\n• שימוש בוקטור אתחול (IV) ושרשור למניעת דפוסים",
      explanationEn: "AES-ECB encrypts each 16-byte block independently. If an image has two regions with the same color, they produce identical ciphertext, revealing the pattern. Classic demo: encrypting the Linux penguin image with ECB — the silhouette is still visible! Solution: AES-CBC/GCM — an IV plus chaining prevents patterns.",
      qEn: "Why is AES-ECB mode dangerous even though AES itself is strong?",
      correctEn: "ECB mode encrypts each block separately — identical blocks produce identical ciphertext and reveal patterns",
      choicesEn: [
        "ECB mode encrypts each block separately — identical blocks produce identical ciphertext and reveal patterns",
        "ECB mode does not support 256-bit keys",
        "ECB mode is vulnerable to brute force because the key is short",
        "ECB mode is too slow for practical use"
      ]
    },
    {
      q: "‏מהו מנגנון אפס זמני הלוך-חזור (0-RTT) בפרוטוקול TLS 1.3 / QUIC ומה הסיכון?",
      correct: "‏שליחת נתונים בחבילה הראשונה בלי לחיצת יד — חוסכת זמן הלוך-חזור, אך נתונים אלו פגיעים למתקפת השחזור (Replay Attack)",
      choices: [
        "‏שליחת נתונים בחבילה הראשונה בלי לחיצת יד — חוסכת זמן הלוך-חזור, אך נתונים אלו פגיעים למתקפת השחזור (Replay Attack)",
        "‏חיבור TLS ללא הצפנה לשיפור מהירות",
        "‏שמירת הפעלה על הדיסק בין חיבורים",
        "‏שימוש ב-HTTP/1.1 כחלופה"
      ],
      explanation: "‏⚡ מנגנון 0-RTT\n• הלקוח שולח נתוני אפליקציה כבר בחבילה הראשונה\n• באמצעות כרטיס הפעלה מחיבור קודם\n• חוסך 1-2 זמני הלוך-חזור\n\n⚠️ הסיכון\n• תוקף יכול לשלוח שוב את נתוני ה-0-RTT\n• מתקפת השחזור — Replay Attack\n\n📌 ההגבלה\n• 0-RTT מוגבל לבקשות שאינן משנות מצב (GET)\n• לא POST עם תשלום\n• TLS 1.3 תומך, גרסה 1.2 לא",
      explanationEn: "0-RTT: the client sends application data in the very first packet (using a session ticket from a previous connection), saving 1-2 round trips. Risk: Replay attack — an attacker can resend the 0-RTT data. Therefore, 0-RTT is restricted to idempotent requests (GET, not POST with payment). TLS 1.3 supports 0-RTT; TLS 1.2 does not.",
      qEn: "What is 0-RTT in TLS 1.3 / QUIC and what is the risk?",
      correctEn: "Sending data in the first packet without a handshake — saves round-trip time, but this data is vulnerable to Replay Attack",
      choicesEn: [
        "Sending data in the first packet without a handshake — saves round-trip time, but this data is vulnerable to Replay Attack",
        "A TLS connection without encryption for speed",
        "Saving a session to disk between connections",
        "Using HTTP/1.1 as a fallback"
      ]
    },
    {
      q: "‏מה הייחודיות של מחולל המספרים האקראיים Dual EC DRBG?",
      correct: "‏מחולל מספרים אקראיים קריפטוגרפי שה-NSA הטמינה בו דלת אחורית — קבועים מוגדרים מראש שמאפשרים למי שמכיר את הסוד לחזות את הפלט",
      choices: [
        "‏מחולל מספרים אקראיים קריפטוגרפי שה-NSA הטמינה בו דלת אחורית — קבועים מוגדרים מראש שמאפשרים למי שמכיר את הסוד לחזות את הפלט",
        "‏אלגוריתם הצפנה שנשבר בפיצוח בכוח",
        "‏פרוטוקול החלפת מפתחות עם חולשה מתמטית",
        "‏פונקציית גיבוב עם התנגשות ידועה"
      ],
      explanation: "‏🕵️ הרקע\n• מחולל Dual EC DRBG נכנס לתקן NIST ב-2006\n• חשיפת סנודן (2013) גילתה:\n• ה-NSA שילמה 10 מיליון דולר לחברת RSA Security\n• כדי להפוך אותו לברירת מחדל\n\n🔓 הבעיה\n• שתי נקודות על העקום האליפטי (P ו-Q) נבחרו על ידי ה-NSA\n• מי שיודע את הקשר ביניהן יכול לחזות את כל הפלט\n\n💀 המסקנה\n• דלת אחורית מתמטית מושלמת",
      explanationEn: "Dual EC DRBG entered the NIST standard in 2006. Snowden 2013 revealed: the NSA paid RSA Security $10M to use it as the default in BSafe. The problem: two points on the Elliptic Curve (P, Q) were chosen by the NSA — anyone who knows log_P(Q) can predict all output. A mathematically perfect backdoor.",
      qEn: "What was special about the Dual EC DRBG random number generator?",
      correctEn: "A cryptographic random number generator where the NSA planted a backdoor — predefined constants let anyone who knows the secret predict the output",
      choicesEn: [
        "A cryptographic random number generator where the NSA planted a backdoor — predefined constants let anyone who knows the secret predict the output",
        "An encryption algorithm broken by brute force",
        "A key exchange protocol with a mathematical weakness",
        "A hash function with a known collision"
      ]
    },
        {
      q: "‏מהי מערכת ניהול מידע ואירועי אבטחה (SIEM) ואילו מוצרים נפוצים בתעשייה?",
      correct: "‏מערכת SIEM (ניהול מידע ואירועי אבטחה) — אוספת לוגים ממקורות רבים, מנתחת ומתריעה על חריגות. כלים נפוצים: Splunk, IBM QRadar, Microsoft Sentinel",
      choices: [
        "‏מערכת SIEM (ניהול מידע ואירועי אבטחה) — אוספת לוגים ממקורות רבים, מנתחת ומתריעה על חריגות. כלים נפוצים: Splunk, IBM QRadar, Microsoft Sentinel",
        "‏כלי לניהול סיסמאות ואימות רב-שלבי בארגון",
        "‏מערכת זיהוי חדירות מתקדמת שחוסמת תעבורה חשודה",
        "‏פלטפורמת גיבוי לקובצי לוגים של שרתים"
      ],
      explanation: "‏🔧 מערכת SIEM — מנוע מתאמים\n• מקבלת: לוגי חומת אש, התרעות EDR\n• שאילתות DNS, לוגי אירועים של Windows\n• לוגי ביקורת ענן\n\n🔍 שימושים\n• זיהוי פיצוח בכוח — כשלים רבים בדקה מאותו IP\n• תנועה רוחבית — כניסות מ-3 מדינות בשעה\n• הברחת מידע — העלאה חריגה\n\n📌 חשוב לדעת\n• שפת SPL (Splunk) מאפשרת ניתוח מתקדם\n• SIEM לבדה לא מספיקה — צריך אנליסטים לנתח התרעות",
      explanationEn: "SIEM = correlation engine. Ingests: firewall logs, EDR alerts, DNS queries, Windows Event Logs, cloud audit logs. Use cases: detecting brute-force (X failures/minute from one IP), lateral movement (user logins from 3 countries in 1 hour), data exfiltration (unusual uploads). SPL (Splunk Processing Language): index=windows EventCode=4625 | stats count by src_ip | where count > 50. SIEM alone is not enough — analysts must investigate alerts.",
      qEn: "What is a SIEM system and which products are common in the industry?",
      correctEn: "SIEM (Security Information and Event Management) — collects logs from many sources, analyzes, and alerts on anomalies. Common tools: Splunk, IBM QRadar, Microsoft Sentinel",
      choicesEn: [
        "SIEM (Security Information and Event Management) — collects logs from many sources, analyzes, and alerts on anomalies. Common tools: Splunk, IBM QRadar, Microsoft Sentinel",
        "A tool for managing passwords and MFA in an organization",
        "An advanced intrusion detection system that blocks suspicious traffic",
        "A platform for backing up server log files"
      ]
    },
        {
      q: "‏מהו תהליך טיפול בתקריות אבטחה (Incident Response — IR) ומה 6 שלביו?",
      correct: "‏הכנה, זיהוי, בלימה, מיגור, שחזור, לקחים נלמדים (PICERL) — תהליך מובנה לטיפול בתקרית אבטחה",
      choices: [
        "‏הכנה, זיהוי, בלימה, מיגור, שחזור, לקחים נלמדים (PICERL) — תהליך מובנה לטיפול בתקרית אבטחה",
        "‏זיהוי, ניתוח, דיווח — תהליך בן 3 שלבים",
        "‏התרעה, תיעדוף, תיקון — תהליך מרכז תפעול אבטחה (SOC) סטנדרטי",
        "‏סריקה, איתור, תיקון, בדיקה — מחזור ניהול פגיעויות"
      ],
      explanation: "‏📋 PICERL — NIST SP 800-61\n• 1) הכנה — נהלים, כלים והדרכות מוכנים מראש\n• 2) זיהוי — הבנה שמשהו קרה וקביעת היקף\n• 3) בלימה — בידוד המכונות הנגועות (ניתוק מהרשת)\n• 4) מיגור — מחיקת תוכנה זדונית ועדכון\n• 5) שחזור — החזרת שירותים וניטור מוגבר\n• 6) לקחים — מה קרה? איך? מה נשפר? (RCA)\n\n🏢 בחברות גדולות\n• קיימים צוותי תגובה ייעודיים (CIRT, CSIRT, CERT)",
      explanationEn: "PICERL (NIST SP 800-61): 1) Preparation — playbooks, tools, and training ready. 2) Identification — recognize that something happened, determine scope. 3) Containment — isolate infected machines (network isolation). 4) Eradication — remove malware, apply patches. 5) Recovery — restore services, increase monitoring. 6) Post-Incident — what happened? How? What to improve? Root Cause Analysis (RCA). Large organizations use CIRT, CSIRT, or CERT teams.",
      qEn: "What is the Incident Response process and what are its 6 phases?",
      correctEn: "Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned (PICERL) — a structured process for handling a security incident",
      choicesEn: [
        "Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned (PICERL) — a structured process for handling a security incident",
        "Identification, Analysis, Reporting — a 3-phase process",
        "Alert, Triage, Fix — a standard SOC process",
        "Scan, Find, Fix, Test — a vulnerability management cycle"
      ]
    },
        {
      q: "‏מה ההבדל בין מערכת זיהוי חדירות (IDS) לבין מערכת מניעת חדירות (IPS)?",
      correct: "‏מערכת זיהוי חדירות (IDS) מזהה ומתריעה בלבד — מערכת מניעת חדירות (IPS) מזהה וגם חוסמת אוטומטית",
      choices: [
        "‏מערכת זיהוי חדירות (IDS) מזהה ומתריעה בלבד — מערכת מניעת חדירות (IPS) מזהה וגם חוסמת אוטומטית",
        "‏מערכת זיהוי חדירות (IDS) לרשתות — מערכת מניעת חדירות (IPS) לאפליקציות",
        "‏מערכת מניעת חדירות (IPS) מהירה יותר כי לא כותבת לוגים — מערכת זיהוי (IDS) כותבת לוגים",
        "‏אין הבדל — מדובר באותו מוצר עם שמות שונים"
      ],
      explanation: "‏📷 IDS — פסיבית\n• מנתחת תעבורה ומייצרת התרעות\n• כמו מצלמת אבטחה — ללא חסימה\n\n🚧 IPS — אקטיבית\n• יושבת בתוך נתיב התעבורה\n• חוסמת חבילות מיידית\n\n⚠️ False Positive ב-IPS\n• פירושו חסימת תעבורה לגיטימית!\n• לכן מתחילים במצב זיהוי (למידה)\n• מכיילים ואז עוברים למצב מניעה\n\n🛠️ גרסאות\n• מבוססות רשת: NIDS/NIPS\n• מבוססות מארח: HIDS/HIPS\n• כלים פופולריים: Snort ו-Suricata",
      explanationEn: "IDS: passive — analyzes traffic and generates alerts (like a security camera). No blocking. IPS: inline — sits in the traffic path, can block packets with zero latency. A false positive on IPS = blocked legitimate traffic! Therefore: start in IDS mode (learning), calibrate, then go inline. Network-based (NIDS/NIPS) vs Host-based (HIDS/HIPS). Snort and Suricata are popular open-source IDS/IPS tools.",
      qEn: "What is the difference between IDS and IPS?",
      correctEn: "IDS (Intrusion Detection System) detects and alerts only — IPS (Intrusion Prevention System) detects and also blocks automatically",
      choicesEn: [
        "IDS (Intrusion Detection System) detects and alerts only — IPS (Intrusion Prevention System) detects and also blocks automatically",
        "IDS is for networks — IPS is for applications",
        "IPS is faster because it does not write logs — IDS writes logs",
        "No difference — same product with different names"
      ]
    }
  ],

  106: [
    {
      q: "‏מהו זיוף בקשות בצד השרת (SSRF) ולמה הוא מסוכן בסביבות ענן?",
      correct: "‏זיוף בקשות בצד השרת (SSRF) — השרת מבצע בקשה לכתובת פנימית שהתוקף בחר, כולל נקודת גישה למטא-דאטה של AWS",
      choices: [
        "‏זיוף בקשות בצד השרת (SSRF) — השרת מבצע בקשה לכתובת פנימית שהתוקף בחר, כולל נקודת גישה למטא-דאטה של AWS",
        "‏הזרקת SQL באחסון ענן",
        "‏סקריפטים חוצי-אתרים (XSS) בממשק הענן",
        "‏חיבור לא מאובטח בין שירותי-זעיר (Microservices)"
      ],
      explanation: "‏🎯 איך SSRF עובד?\n• האפליקציה מקבלת כתובת URL מהמשתמש ומבצעת בקשה אליה\n• התוקף שולח כתובת פנימית של נקודת מטא-דאטה של AWS\n• ומקבל הרשאות זמניות!\n\n💥 פרשת Capital One — 2019\n• תוקף ניצל SSRF דרך WAF שהוגדרה לא נכון\n• השיג הרשאות IAM\n• גנב 100 מיליון רשומות\n\n🔴 מתקפת SSRF בענן נחשבת קריטית",
      explanationEn: "SSRF: an application accepts a URL from a user and makes a request to it. An attacker sends: http://169.254.169.254/latest/meta-data/iam/security-credentials/ — the AWS metadata endpoint. This returns temporary AWS credentials! Capital One 2019: SSRF through a misconfigured WAF led to IAM credentials and 100M records stolen. Cloud SSRF = critical severity.",
      qEn: "What is SSRF and why is it dangerous in cloud environments?",
      correctEn: "Server-Side Request Forgery (SSRF) — the server makes a request to an internal address chosen by the attacker, including the AWS metadata endpoint",
      choicesEn: [
        "Server-Side Request Forgery (SSRF) — the server makes a request to an internal address chosen by the attacker, including the AWS metadata endpoint",
        "SQL injection in cloud storage",
        "Cross-site scripting (XSS) in the cloud interface",
        "An insecure connection between microservices"
      ]
    },
    {
      q: "‏מהי מתקפת אלגוריתם 'none' על אסימוני JWT?",
      correct: "‏שינוי שדה האלגוריתם בכותרת ל-none — שרת פגיע מקבל אסימון בלי חתימה ומאמת אותו",
      choices: [
        "‏שינוי שדה האלגוריתם בכותרת ל-none — שרת פגיע מקבל אסימון בלי חתימה ומאמת אותו",
        "‏גניבת אסימון JWT מאחסון הדפדפן באמצעות סקריפטים חוצי-אתרים (XSS)",
        "‏פיצוח בכוח של סוד ה-HMAC",
        "‏מתקפת השחזור (Replay Attack) על אסימון JWT שפג תוקפו"
      ],
      explanation: "‏🔑 מבנה JWT\n• כותרת, מטען ייעודי וחתימה\n• הכותרת מכילה את סוג האלגוריתם\n\n💀 המתקפה\n• התוקף משנה את האלגוריתם ל-none\n• מסיר את החתימה\n• שרת ישן מקבל את האסימון ללא בדיקה\n\n🛡️ הפתרון\n• רשימה לבנה של אלגוריתמים בצד השרת\n• לעולם לא לקבל את סוג האלגוריתם מהאסימון עצמו\n\n⚠️ מתקפה נוספת: RS256 ל-HS256\n• שרת שמצפה ל-RSA משתמש במפתח הציבורי כסוד HMAC",
      explanationEn: "JWT structure: header.payload.signature. The header contains the algorithm (alg). An attacker changes alg to 'none' and removes the signature. A vulnerable server sees alg=none and skips verification. Fix: server-side whitelist of algorithms — never accept alg from the token itself. Also: RS256 to HS256 attack — a server expecting RSA may use the public key as HMAC secret.",
      qEn: "What is the JWT 'none' algorithm attack?",
      correctEn: "Changing the algorithm field in the header to 'none' — a vulnerable server accepts a token without a signature",
      choicesEn: [
        "Changing the algorithm field in the header to 'none' — a vulnerable server accepts a token without a signature",
        "Stealing a JWT token from browser storage using XSS",
        "Brute-forcing the HMAC secret",
        "A Replay Attack on an expired JWT token"
      ]
    },
    {
      q: "‏מה ההבדל בין תחרות לכידת הדגל (CTF) לבין תוכנית ציד באגים (Bug Bounty)?",
      correct: "‏תחרות לכידת הדגל (CTF) היא אתגרים סגורים ללמידה — תוכנית ציד באגים (Bug Bounty) היא מציאת באגים אמיתיים במוצרים אמיתיים תמורת תגמול כספי",
      choices: [
        "‏תחרות לכידת הדגל (CTF) היא אתגרים סגורים ללמידה — תוכנית ציד באגים (Bug Bounty) היא מציאת באגים אמיתיים במוצרים אמיתיים תמורת תגמול כספי",
        "‏תחרויות CTF לאנשי מרכז תפעול אבטחה (SOC) — ציד באגים לבודקי חדירה",
        "‏ציד באגים (Bug Bounty) חוקי — תחרויות CTF לא חוקיות",
        "‏שניהם אותו דבר רק שמות שונים"
      ],
      explanation: "‏תחרויות לכידת הדגל (CTF): פורמט ג'פרדי (ווב, קריפטו, ניצול בינארי, פורנזיקה, הנדסה לאחור) או התקפה-הגנה. למידה מובנית ללא אחריות. פלטפורמות: HackTheBox, TryHackMe, PicoCTF. תוכניות ציד באגים (Bug Bounty): דרך HackerOne, Bugcrowd, Intigriti. היקף מוגדר מראש. תגמול: 100$-1M$+ לפי חומרה. פייסבוק וגוגל משלמים מיליוני דולרים בשנה. מסלול קריירה טיפוסי: CTF ואז ציד באגים ואז בדיקות חדירה.",
      explanationEn: "CTF: Jeopardy format (web/crypto/pwn/forensics/reverse) or Attack-Defense. Structured learning, no liability. Platforms: HackTheBox, TryHackMe, PicoCTF. Bug Bounty: HackerOne, Bugcrowd, Intigriti. Defined scope. Payouts: $100-$1M+ by severity. Responsible disclosure process. Facebook and Google pay millions annually. Typical career path: CTF > Bug Bounty > Pentest.",
      qEn: "What is the difference between CTF competitions and Bug Bounty programs?",
      correctEn: "CTF is closed challenges for learning — Bug Bounty is finding real bugs in real products for a cash reward",
      choicesEn: [
        "CTF is closed challenges for learning — Bug Bounty is finding real bugs in real products for a cash reward",
        "CTF is for SOC analysts — Bug Bounty is for pentesters",
        "Bug Bounty is legal — CTF is not legal",
        "They are the same thing with different names"
      ]
    },
        {
      q: "‏מה 4 הקטגוריות העיקריות בתחרויות לכידת הדגל (CTF)?",
      correct: "‏ניצול ווב, ניצול בינארי (Pwn), הנדסה לאחור (Reverse Engineering), קריפטוגרפיה — בתוספת פורנזיקה ומודיעין ממקורות פתוחים (OSINT)",
      choices: [
        "‏ניצול ווב, ניצול בינארי (Pwn), הנדסה לאחור (Reverse Engineering), קריפטוגרפיה — בתוספת פורנזיקה ומודיעין ממקורות פתוחים (OSINT)",
        "‏פריצה, הגנה, מודיעין ממקורות פתוחים (OSINT), רשתות — 4 תחומים שווים",
        "‏הזרקת SQL, סקריפטים חוצי-אתרים (XSS), גלישת חוצץ (Buffer Overflow), פיצוח סיסמאות",
        "‏צוות אדום (Red Team), צוות כחול (Blue Team), צוות סגול (Purple Team), צוות לבן (White Team)"
      ],
      explanation: "‏🌐 ווב\n• הזרקת SQL, XSS, SSRF, הכללת קבצים, RCE\n\n💥 ניצול בינארי (Pwn)\n• גלישת חוצץ, ניצול ערימה, שרשראות ROP\n\n🔄 הנדסה לאחור (Rev)\n• פירוק קבצים בינאריים עם Ghidra או IDA\n• הבנת אלגוריתמים\n\n🔐 קריפטוגרפיה\n• פיצוח הצפנות חלשות\n\n🔎 פורנזיקה\n• ניתוח לכידות רשת, קבצים, סטגנוגרפיה\n\n🛠️ פלטפורמות\n• HackTheBox, TryHackMe, PicoCTF",
      explanationEn: "CTF Categories: Web (SQLi, XSS, SSRF, LFI, RCE on websites), Pwn/Binary (buffer overflow, heap exploits, ROP chains on binaries), Rev (disassembling binaries with Ghidra/IDA, understanding algorithms), Crypto (breaking weak encryption, RSA, AES ECB), Forensics (pcap analysis, file carving, steganography), Misc. Platforms: HackTheBox, TryHackMe, PicoCTF, CTFtime.org.",
      qEn: "What are the 4 main categories in CTF competitions?",
      correctEn: "Web exploitation, Binary exploitation (Pwn), Reverse Engineering, Cryptography — plus Forensics and OSINT",
      choicesEn: [
        "Web exploitation, Binary exploitation (Pwn), Reverse Engineering, Cryptography — plus Forensics and OSINT",
        "Hacking, Defense, OSINT, Networking — 4 equal areas",
        "SQL injection, XSS, Buffer Overflow, Password cracking",
        "Red Team, Blue Team, Purple Team, White Team"
      ]
    },
        {
      q: "‏מהי חשיפה אחראית (Responsible Disclosure) ומה ההבדל בינה לבין חשיפה מלאה (Full Disclosure)?",
      correct: "‏חשיפה אחראית (Responsible Disclosure): מדווח לחברה תחילה, נותן 90 יום לתיקון, אז מפרסם — חשיפה מלאה (Full Disclosure): מפרסם מיד לציבור",
      choices: [
        "‏חשיפה אחראית (Responsible Disclosure): מדווח לחברה תחילה, נותן 90 יום לתיקון, אז מפרסם — חשיפה מלאה (Full Disclosure): מפרסם מיד לציבור",
        "‏חשיפה אחראית = תוכנית ציד באגים (Bug Bounty) — חשיפה מלאה = רישום פגיעויות (CVE)",
        "‏חשיפה אחראית לחברות בינלאומיות — חשיפה מלאה לחברות ישראליות",
        "‏חשיפה אחראית מיושנת — כולם עברו לחשיפה מלאה"
      ],
      explanation: "‏חשיפה מתואמת (= אחראית): 1) מגלה פגיעות 2) מיידע את היצרן בערוץ אבטחה 3) היצרן מתקן (בד\\\"כ 90 יום — תקן Google Project Zero) 4) החוקר מפרסם כתבה. חשיפה מלאה: מפרסם מיד — לוחץ על היצרן לתקן מהר, אך מאפשר ניצול לפני הטלאי. פגיעות יום-אפס (Zero-Day) = פגיעות שהיצרן לא יודע עליה. תוכנית ציד באגים (Bug Bounty): תשלום על חשיפה אחראית.",
      explanationEn: "Coordinated Disclosure (= Responsible): 1) Discover vulnerability. 2) Notify vendor via security channel. 3) Vendor patches (SLA: typically 90 days — Google Project Zero standard). 4) Researcher publishes writeup. Full Disclosure: publish immediately — pressures vendor to fix fast, but enables exploitation before the patch. Zero-Day = vulnerability the vendor does not know about. Bug Bounty: payment for disclosure.",
      qEn: "What is Responsible Disclosure and how is it different from Full Disclosure?",
      correctEn: "Responsible Disclosure: report to the company first, give 90 days to fix, then publish — Full Disclosure: publish immediately to the public",
      choicesEn: [
        "Responsible Disclosure: report to the company first, give 90 days to fix, then publish — Full Disclosure: publish immediately to the public",
        "Responsible Disclosure = Bug Bounty — Full Disclosure = CVE registration",
        "Responsible Disclosure for international companies — Full Disclosure for Israeli companies",
        "Responsible Disclosure is outdated — everyone uses Full Disclosure now"
      ]
    },
        {
      q: "‏אילו הסמכות מקצועיות מומלצות להתחלת קריירה בסייבר?",
      correct: "‏הסמכת CompTIA Security+ (רמת כניסה), האקר אתי מוסמך (CEH), הסמכת התקפה מעשית (OSCP) — לפי רמת ניסיון",
      choices: [
        "‏הסמכת CompTIA Security+ (רמת כניסה), האקר אתי מוסמך (CEH), הסמכת התקפה מעשית (OSCP) — לפי רמת ניסיון",
        "‏הסמכות CISSP ו-CISM — הטובות ביותר לכולם",
        "‏רק ניסיון מעשי חשוב — הסמכות לא שוות כלום",
        "‏הסמכות ענן בלבד: AWS Security Specialty ו-GCP Security"
      ],
      explanation: "‏🎓 רמת כניסה\n• CompTIA A+ → Network+ → Security+\n\n⚔️ התקפי\n• eJPT → CEH → OSCP (מבחן מעשי 24 שעות, קשה מאוד!)\n\n🛡️ הגנתי\n• אנליסט SOC → CySA+ → GCIH\n\n👔 ניהולי\n• CISSP (דורש 5 שנות ניסיון)\n\n☁️ ענן\n• AWS Security Specialty, GCP Security\n\n📌 חשוב\n• תרגול מעשי ב-CTF ו-HackTheBox חשוב לא פחות מהסמכות",
      explanationEn: "Certification Roadmap: Entry level: CompTIA A+ > Network+ > Security+. Offensive: eJPT (eLearnSecurity) > CEH > OSCP (OffSec — 24h practical exam, very challenging!). Defensive: SOC Analyst > CySA+ > GCIH. Management: CISSP (requires 5 years of experience). Cloud: AWS Security Specialty, GCP Security. CTF and HackTheBox/TryHackMe = hands-on practice equally important as certifications.",
      qEn: "Which professional certifications are recommended for starting a cyber career?",
      correctEn: "CompTIA Security+ (entry level), CEH (Certified Ethical Hacker), OSCP (practical offensive cert) — by experience level",
      choicesEn: [
        "CompTIA Security+ (entry level), CEH (Certified Ethical Hacker), OSCP (practical offensive cert) — by experience level",
        "CISSP and CISM — best for everyone",
        "Only practical experience matters — certifications are worthless",
        "Cloud certifications only: AWS Security Specialty and GCP Security"
      ]
    }
  ],

  // ===== Cyber Track continued (107-109) =====
  107: [
    {
      q: "‏מה ההבדל העיקרי בין הצפנה סימטרית להצפנה אסימטרית?",
      correct: "‏הצפנה סימטרית: אותו מפתח להצפנה ופענוח — מהירה. הצפנה אסימטרית: זוג מפתחות (ציבורי ופרטי) — מאובטחת יותר לחילופי מפתחות",
      choices: [
        "‏הצפנה סימטרית: אותו מפתח להצפנה ופענוח — מהירה. הצפנה אסימטרית: זוג מפתחות (ציבורי ופרטי) — מאובטחת יותר לחילופי מפתחות",
        "‏הצפנה סימטרית לקבצים — הצפנה אסימטרית לרשת בלבד",
        "‏הצפנה אסימטרית מהירה יותר, סימטרית מאובטחת יותר",
        "‏שניהם זהים — ההבדל רק בשם"
      ],
      explanation: "‏🔑 הצפנה סימטרית (AES)\n• מהירה מאוד\n• משמשת להצפנת הנתונים\n\n🔐 הצפנה אסימטרית (RSA)\n• איטית\n• משמשת לחילופי מפתחות\n\n🤝 פרוטוקול TLS — הטוב מכל העולמות\n• RSA להסכמה על מפתח AES\n• ואז AES להצפנת כל התקשורת",
      explanationEn: "AES = symmetric, very fast, used for encrypting payloads. RSA = asymmetric, slow, used for key exchange. TLS combines both: RSA to agree on an AES key, then AES to encrypt all communication. The best of both worlds!",
      qEn: "What is the main difference between symmetric and asymmetric encryption?",
      correctEn: "Symmetric: same key for encryption and decryption — fast. Asymmetric: a key pair (public and private) — more secure for key exchange",
      choicesEn: [
        "Symmetric: same key for encryption and decryption — fast. Asymmetric: a key pair (public and private) — more secure for key exchange",
        "Symmetric is for files — asymmetric is for network only",
        "Asymmetric is faster, symmetric is more secure",
        "They are identical — the difference is just the name"
      ]
    },
    {
      q: "‏מה קורה בלחיצת היד של TLS (TLS Handshake)?",
      correct: "‏הדפדפן והשרת מסכימים על חבילת צפנים, מחליפים מפתחות (RSA/ECDH), ויוצרים מפתח הפעלה סימטרי לתקשורת ההמשך",
      choices: [
        "‏הדפדפן והשרת מסכימים על חבילת צפנים, מחליפים מפתחות (RSA/ECDH), ויוצרים מפתח הפעלה סימטרי לתקשורת ההמשך",
        "‏הדפדפן מצפין את כל הנתונים ב-RSA לכל אורך החיבור",
        "‏השרת שולח סיסמה מוצפנת שהדפדפן פותח",
        "‏שרת DNS מוודא שהתעודה הדיגיטלית תקפה"
      ],
      explanation: "‏🤝 לחיצת יד — TLS Handshake\n• הלקוח שולח ClientHello\n• השרת משיב עם ServerHello ותעודה דיגיטלית\n• מוחלף סוד ראשוני מוצפן ב-RSA\n• שני הצדדים גוזרים מפתח הפעלה\n• סיום\n\n🔒 מכאן ואילך\n• הצפנת AES-256-GCM\n• RSA משמש רק בלחיצת היד\n• AES לכל השאר — מהיר ומאובטח",
      explanationEn: "TLS Handshake: ClientHello > ServerHello+Certificate > Pre-Master Secret (encrypted with RSA) > both sides derive Session Key > Finished. From here on: AES-256-GCM. RSA is used only during the handshake; AES handles the rest — fast and secure.",
      qEn: "What happens during the TLS Handshake?",
      correctEn: "The browser and server agree on a cipher suite, exchange keys (RSA/ECDH), and create a symmetric session key for the rest of the communication",
      choicesEn: [
        "The browser and server agree on a cipher suite, exchange keys (RSA/ECDH), and create a symmetric session key for the rest of the communication",
        "The browser encrypts all data with RSA for the entire connection",
        "The server sends an encrypted password that the browser opens",
        "A DNS server verifies that the digital certificate is valid"
      ]
    },
    {
      q: "‏מהו באג Heartbleed ‏(CVE-2014-0160)?",
      correct: "‏באג ב-OpenSSL שאיפשר לקרוא 64KB מזיכרון השרת, כולל מפתחות פרטיים וסיסמאות, דרך תוסף פעימה (Heartbeat) ללא אימות",
      choices: [
        "‏באג ב-OpenSSL שאיפשר לקרוא 64KB מזיכרון השרת, כולל מפתחות פרטיים וסיסמאות, דרך תוסף פעימה (Heartbeat) ללא אימות",
        "‏מתקפת מניעת שירות (DoS) על שרתי TLS",
        "‏הזרקת SQL באימות תעודות דיגיטליות",
        "‏גלישת חוצץ (Buffer Overflow) בשרת Apache HTTP"
      ],
      explanation: "‏💔 באג Heartbleed\n• הלקוח שולח בקשת פעימה (Heartbeat) עם אורך שגוי\n• השרת מחזיר עד 64KB מהזיכרון\n\n☠️ מה דלף?\n• תוכן אקראי — מפתחות פרטיים\n• סיסמאות ואסימוני הפעלה (Session Tokens)\n• 17% מהאינטרנט היה פגיע\n\n🔧 הפתרון\n• שדרוג OpenSSL\n• החלפת כל התעודות הדיגיטליות",
      explanationEn: "Heartbleed: the client sends a heartbeat with an incorrect length. The server returns the requested number of bytes (up to 64KB) from memory — random content that may include private keys, passwords, and session tokens. 17% of the internet was vulnerable. Fix: upgrade OpenSSL + replace all certificates.",
      qEn: "What is the Heartbleed bug (CVE-2014-0160)?",
      correctEn: "A bug in OpenSSL that allowed reading 64KB of server memory, including private keys and passwords, through the Heartbeat extension without authentication",
      choicesEn: [
        "A bug in OpenSSL that allowed reading 64KB of server memory, including private keys and passwords, through the Heartbeat extension without authentication",
        "A Denial of Service (DoS) attack on TLS servers",
        "SQL injection in certificate authentication",
        "A Buffer Overflow in the Apache HTTP server"
      ]
    },
        {
      q: "‏מה ההבדל בין הצפנה סימטרית (Symmetric) להצפנה אסימטרית (Asymmetric)?",
      correct: "‏סימטרית (AES): אותו מפתח להצפנה ופיענוח — אסימטרית (RSA): מפתח ציבורי להצפנה, מפתח פרטי לפיענוח",
      choices: [
        "‏סימטרית (AES): אותו מפתח להצפנה ופיענוח — אסימטרית (RSA): מפתח ציבורי להצפנה, מפתח פרטי לפיענוח",
        "‏סימטרית מוצפנת יותר — אסימטרית מהירה יותר",
        "‏סימטרית לרשתות — אסימטרית לקבצים",
        "‏אלגוריתם AES הוא אסימטרי כי מפתחותיו ארוכים יותר"
      ],
      explanation: "‏🔑 הצפנה סימטרית (AES, ChaCha20)\n• מהירה, מתאימה לכמויות גדולות של נתונים\n• הבעיה: איך מעבירים את המפתח בצורה מאובטחת?\n\n🔐 הצפנה אסימטרית (RSA, ECDH)\n• איטית אך מאפשרת חילוף מפתחות מאובטח\n• מפתח ציבורי = נעילה\n• מפתח פרטי = פתיחה\n\n🤝 פרוטוקול TLS משלב\n• אסימטרית ללחיצת היד (חילוף מפתח הפעלה)\n• סימטרית להעברת נתונים\n\n⚠️ RSA 2048 סיביות עדיין מאובטח — 1024 סיביות שבור!",
      explanationEn: "Symmetric (AES, ChaCha20): fast, suitable for bulk data. Problem: key exchange — how do you send the key securely? Asymmetric (RSA, ECDH): slow but enables secure key exchange. Public key = lock, Private key = unlock. TLS combines: Asymmetric for handshake (exchange session key), Symmetric for data transfer — best of both worlds. RSA 2048-bit is still secure; RSA 1024 is broken!",
      qEn: "What is the difference between Symmetric and Asymmetric encryption?",
      correctEn: "Symmetric (AES): same key for encryption and decryption — Asymmetric (RSA): public key for encryption, private key for decryption",
      choicesEn: [
        "Symmetric (AES): same key for encryption and decryption — Asymmetric (RSA): public key for encryption, private key for decryption",
        "Symmetric is more encrypted — asymmetric is faster",
        "Symmetric is for networks — asymmetric is for files",
        "AES is asymmetric because its keys are longer"
      ]
    },
        {
      q: "‏מהי סודיות קדימה מושלמת (Perfect Forward Secrecy) ולמה TLS 1.3 מחייב אותה?",
      correct: "‏כל הפעלה מקבלת מפתחות זמניים ייחודיים — גם אם המפתח הפרטי של השרת ייגנב, שיחות עבר לא ניתנות לפיענוח",
      choices: [
        "‏כל הפעלה מקבלת מפתחות זמניים ייחודיים — גם אם המפתח הפרטי של השרת ייגנב, שיחות עבר לא ניתנות לפיענוח",
        "‏הצפנה שפועלת גם בפרוקסי קדמי (Forward Proxy)",
        "‏מנגנון שמקדים את תהליך לחיצת היד של TLS",
        "‏סודיות קדימה ו-TLS 1.3 הם אותו דבר"
      ],
      explanation: "‏⚠️ ללא PFS\n• תוקף מקליט תעבורה מוצפנת היום\n• בעוד 5 שנים גונב את המפתח הפרטי\n• מפענח הכל!\n\n🛡️ עם PFS (באמצעות ECDHE)\n• מפתח ההפעלה נגזר מפרמטרים זמניים\n• הפרמטרים נמחקים מיד\n• גם עם גניבת המפתח הפרטי — שיחות עבר מוצפנות\n\n📌 TLS 1.3\n• מחייב ECDHE\n• הסיר את חילוף המפתחות באמצעות RSA",
      explanationEn: "Without PFS: an attacker records encrypted traffic today. In 5 years, they steal the server's private key and decrypt all recorded sessions! With PFS (ECDHE — Elliptic Curve Diffie-Hellman Ephemeral): session keys are derived from temporary parameters that are immediately deleted. Even with a stolen private key, past sessions remain encrypted. TLS 1.3 removed RSA key exchange and requires ECDHE.",
      qEn: "What is Perfect Forward Secrecy and why does TLS 1.3 require it?",
      correctEn: "Each session gets unique temporary keys — even if the server's private key is stolen, past sessions cannot be decrypted",
      choicesEn: [
        "Each session gets unique temporary keys — even if the server's private key is stolen, past sessions cannot be decrypted",
        "Encryption that works with a Forward Proxy",
        "A mechanism that speeds up the TLS handshake",
        "Perfect Forward Secrecy and TLS 1.3 are the same thing"
      ]
    },
        {
      q: "‏מהו SHA-256 ואיזה תכונות חשובות יש לפונקציית גיבוב (Hash) קריפטוגרפית?",
      correct: "‏פונקציה חד-כיוונית שמייצרת טביעת אצבע של 256 סיביות — תכונות: דטרמיניסטית, אפקט מפולת, עמידות להתנגשויות ועמידות לפענוח הפוך",
      choices: [
        "‏פונקציה חד-כיוונית שמייצרת טביעת אצבע של 256 סיביות — תכונות: דטרמיניסטית, אפקט מפולת, עמידות להתנגשויות ועמידות לפענוח הפוך",
        "‏אלגוריתם הצפנה סימטרי עם מפתח של 256 סיביות",
        "‏פרוטוקול לחיצת יד של TLS 1.3",
        "‏שיטה להחלפת מפתחות קריפטוגרפיים"
      ],
      explanation: "‏🔢 תכונות פונקציית גיבוב (Hash)\n• דטרמיניסטית — אותו קלט = אותו פלט תמיד\n• חד-כיוונית — לא ניתן להפוך\n• אפקט מפולת — שינוי סיבית אחת משנה כ-50% מהפלט\n• עמידות להתנגשויות — קשה מאוד למצוא שני קלטים עם אותו פלט\n\n📐 SHA-256\n• פלט של 256 סיביות\n\n🛠️ שימושים\n• גיבוב סיסמאות (bcrypt ו-Argon2 עדיפים!)\n• חתימות דיגיטליות\n• טביעות אצבע של תעודות\n• זיהוי קומיטים ב-Git ובלוקצ'יין\n\n⚠️ MD5 ו-SHA-1 שבורים לחתימות!",
      explanationEn: "Hash properties: Deterministic (same input = same output always), One-way (cannot be reversed), Avalanche effect (changing 1 bit in input changes ~50% of output), Collision resistance (extremely hard to find x!=y where H(x)=H(y)). SHA-256 outputs 256 bits = 2^256 possibilities. Uses: password hashing (bcrypt/Argon2 are better!), digital signatures, certificate fingerprints, Git commit IDs, blockchain. MD5/SHA-1 are broken for signatures!",
      qEn: "What is SHA-256 and what important properties does a cryptographic hash function have?",
      correctEn: "A one-way function that produces a 256-bit fingerprint — properties: deterministic, avalanche effect, collision resistance, and preimage resistance",
      choicesEn: [
        "A one-way function that produces a 256-bit fingerprint — properties: deterministic, avalanche effect, collision resistance, and preimage resistance",
        "A symmetric encryption algorithm with a 256-bit key",
        "The TLS 1.3 handshake protocol",
        "A method for exchanging cryptographic keys"
      ]
    }
  ],

  108: [
    {
      q: "‏מה ההבדל בין דיוג (Phishing) לדיוג ממוקד (Spear Phishing)?",
      correct: "‏דיוג רגיל = הודעות דוא\"ל זהות למיליונים\nדיוג ממוקד (Spear Phishing) = מותאם אישית\nלאדם או ארגון ספציפי עם מידע אמיתי",
      choices: [
        "‏דיוג רגיל = הודעות דוא\"ל זהות למיליונים\nדיוג ממוקד (Spear Phishing) = מותאם אישית\nלאדם או ארגון ספציפי עם מידע אמיתי",
        "‏דיוג ממוקד = הודעות SMS\nדיוג רגיל = דוא\"ל",
        "‏דיוג ממוקד חוקי — דיוג רגיל לא",
        "‏אותו דבר — שמות שונים"
      ],
      explanation: "‏📧 דיוג המוני — Phishing\n• 'לקוח יקר' — גנרי\n• נשלח ל-10 מיליון, 0.1% לוחצים = 10,000 קורבנות\n\n🎯 דיוג ממוקד — Spear Phishing\n• 'שלום דוד, ראיתי שהיית בכנס X ביום ג''\n• מבוסס על מחקר מלינקדאין\n• אחוז הצלחה גבוה בהרבה\n\n🐳 ציד לוויתנים (Whaling)\n• דיוג ממוקד נגד מנהלים בכירים\n\n📞 פריצת טוויטר 2020\n• דיוג קולי (Vishing) — בשיחות טלפון ולא בדוא\"ל",
      explanationEn: "Mass Phishing: 'Dear Customer' + generic content. Sent to 10M people, 0.1% click = 10,000 victims. Spear Phishing: 'Hi David, I saw you were at conference X on Tuesday.' Researched via LinkedIn, much higher success rate. Whaling = Spear Phishing targeting C-suite executives. Twitter 2020 hack = Vishing (phone calls, not email Phishing).",
      qEn: "What is the difference between Phishing and Spear Phishing?",
      correctEn: "Regular Phishing = identical emails to millions\nSpear Phishing = customized\nfor a specific person or organization with real information",
      choicesEn: [
        "Regular Phishing = identical emails to millions\nSpear Phishing = customized\nfor a specific person or organization with real information",
        "Spear Phishing = SMS messages\nRegular Phishing = email",
        "Spear Phishing is legal — regular Phishing is not",
        "Same thing — different names"
      ]
    },
    {
      q: "‏בפרשת טוויטר 2020, איך התוקפים השיגו גישה ללוח הניהול (Admin Panel)?",
      correct: "‏דיוג קולי (Vishing) — התקשרו לעובדי טוויטר\nהתחזו לצוות IT\nוביקשו פרטי גישה לתיקון בעיה טכנית מדומה",
      choices: [
        "‏דיוג קולי (Vishing) — התקשרו לעובדי טוויטר\nהתחזו לצוות IT\nוביקשו פרטי גישה לתיקון בעיה טכנית מדומה",
        "‏הזרקת SQL ישירה על מסד הנתונים",
        "‏פיצוח בכוח (Brute Force) על חשבונות מנהלים",
        "‏פגיעות יום-אפס (Zero-Day) ב-API של טוויטר"
      ],
      explanation: "‏🐦 פרשת טוויטר 2020\n• גרהם קלארק בן 17 עם שותפים\n• לא פרצו טכנולוגיה\n• פשוט התקשרו לעובדים, התחזו לתמיכה טכנית\n• וביקשו פרטי גישה — עובד אחד שיתף פעולה\n\n💥 התוצאה\n• לוח הניהול נתן גישה לכל 330 מיליון החשבונות\n• נגנבו 120 אלף דולר בביטקוין\n\n📌 הלקח\n• אימות רב-שלבי (MFA) חזק = קריטי\n• אימות זהות בערוץ נפרד = קריטי",
      explanationEn: "Twitter 2020: Graham Clark, age 17, plus accomplices. They did not hack technology — they simply called employees, impersonated IT support, and asked for credentials. One employee complied. The Admin Panel provided access to all 330M accounts. $120K in Bitcoin was stolen. Lesson: strong MFA + identity verification through a separate channel = critical.",
      qEn: "In the Twitter 2020 breach, how did attackers gain access to the Admin Panel?",
      correctEn: "Vishing (voice phishing) — they called Twitter employees\npretended to be the IT team\nand asked for credentials to fix a fake technical issue",
      choicesEn: [
        "Vishing (voice phishing) — they called Twitter employees\npretended to be the IT team\nand asked for credentials to fix a fake technical issue",
        "Direct SQL injection on the database",
        "Brute Force on admin accounts",
        "A Zero-Day vulnerability in Twitter's API"
      ]
    },
    {
      q: "‏מהו עיקרון הדחיפות (Urgency) בהנדסה חברתית (Social Engineering)?",
      correct: "‏יצירת לחץ זמן מלאכותי\nשגורם לקורבן לפעול מהר ללא חשיבה ביקורתית\n'לחץ תוך 24 שעות או חשבונך יימחק'",
      choices: [
        "‏יצירת לחץ זמן מלאכותי\nשגורם לקורבן לפעול מהר ללא חשיבה ביקורתית\n'לחץ תוך 24 שעות או חשבונך יימחק'",
        "‏שימוש בשפה דחופה ביותר בכותרת הדוא\"ל",
        "‏שליחת אותו דוא\"ל מספר פעמים",
        "‏הגדרת אישור קריאה (Read Receipt) על הדוא\"ל"
      ],
      explanation: "‏🧠 ששת עקרונות ההשפעה — צ'יאלדיני\n• סמכות\n• דחיפות\n• הוכחה חברתית\n• חיבה\n• הדדיות\n• מחסור\n\n⏰ למה דחיפות עובדת?\n• מנטרלת חשיבה ביקורתית\n• כשאנו בלחץ זמן, לא מוודאים פרטים\n\n🚩 דגל אדום\n• כל הודעה שמכריחה פעולה מיידית ללא זמן לאימות = חשודה\n• ארגון לגיטימי תמיד יאפשר לך לוודא",
      explanationEn: "Cialdini's 6 principles of influence: Authority, Urgency, Social Proof, Liking, Reciprocity, Scarcity. Urgency disables critical thinking — when under pressure, people skip verification. Red flag: any message that forces immediate action without time to verify is suspicious. A legitimate organization will always allow you to verify.",
      qEn: "What is the Urgency principle in Social Engineering?",
      correctEn: "Creating artificial time pressure\nthat makes the victim act fast without critical thinking\n'Click within 24 hours or your account will be deleted'",
      choicesEn: [
        "Creating artificial time pressure\nthat makes the victim act fast without critical thinking\n'Click within 24 hours or your account will be deleted'",
        "Using very urgent language in the email subject",
        "Sending the same email multiple times",
        "Setting a Read Receipt on the email"
      ]
    },
        {
      q: "‏מהו תסריט מוכן (Pretexting) בהנדסה חברתית (Social Engineering)? תן דוגמה.",
      correct: "‏יצירת תרחיש בדוי (Pretexting) להשגת מידע\nלמשל: התחזות לתמיכה טכנית (IT)\nובקשת סיסמה לפתרון 'בעיה דחופה'",
      choices: [
        "‏יצירת תרחיש בדוי (Pretexting) להשגת מידע\nלמשל: התחזות לתמיכה טכנית (IT)\nובקשת סיסמה לפתרון 'בעיה דחופה'",
        "‏שליחת הודעות דוא\"ל עם קישורים זדוניים",
        "‏ניחוש סיסמה בפיצוח בכוח (Brute Force)",
        "‏התקנת מקליד מקשים (Keylogger) על מחשב הקורבן"
      ],
      explanation: "‏🎭 דוגמה לתסריט מוכן\n• 'שלום, אני דן מה-IT'\n• 'יש לנו בעיה קריטית עם השרת'\n• 'אני צריך את הסיסמה שלך לבדיקה דחופה'\n• דחיפות (Urgency) + סמכות (Authority) = ציות\n\n🕵️ מקרה מפורסם\n• קווין מיטניק (Kevin Mitnick)\n• השתמש בתסריט מוכן לקבל מידע סודי מחברות תקשורת\n\n🛡️ הגנה\n• לעולם אל תשתף סיסמאות!\n• צוות IT לעולם לא יבקש סיסמה\n• אמת מתקשרים בשיחה חוזרת למספר רשמי",
      explanationEn: "Pretexting = a prepared scenario: 'Hi, I'm Dan from IT, we have a critical server issue. I need your password for an urgent check.' Urgency + Authority = compliance. Famous case: Kevin Mitnick used pretexting to obtain classified information from telecom companies. Defense: never share passwords! IT will never ask for your password. Always verify callers by calling back on an official number.",
      qEn: "What is Pretexting in Social Engineering? Give an example.",
      correctEn: "Creating a fake scenario to obtain information\ne.g., pretending to be IT support\nand asking for a password to fix an 'urgent issue'",
      choicesEn: [
        "Creating a fake scenario to obtain information\ne.g., pretending to be IT support\nand asking for a password to fix an 'urgent issue'",
        "Sending emails with malicious links",
        "Brute Force password guessing",
        "Installing a keylogger on the victim's computer"
      ]
    },
        {
      q: "‏מהם דיוג קולי (Vishing) ודיוג בהודעות (Smishing), ואיך הם שונים מדיוג רגיל (Phishing)?",
      correct: "‏דיוג קולי (Vishing) = דיוג בשיחות טלפון\nדיוג בהודעות (Smishing) = דיוג ב-SMS\nשניהם הנדסה חברתית בערוצים שונים מדוא\"ל",
      choices: [
        "‏דיוג קולי (Vishing) = דיוג בשיחות טלפון\nדיוג בהודעות (Smishing) = דיוג ב-SMS\nשניהם הנדסה חברתית בערוצים שונים מדוא\"ל",
        "‏דיוג קולי (Vishing) = דיוג בווידאו — דיוג בהודעות (Smishing) = דיוג ברשתות חברתיות",
        "‏שניהם תתי-סוגים של דיוג ממוקד (Spear Phishing) בלבד",
        "‏דיוג קולי ודיוג בהודעות פחות מסוכנים מדיוג רגיל כי קל לזהות"
      ],
      explanation: "‏📞 דיוג קולי — Vishing\n• 'מדבר עם נציג בנק לאומי, יש חשד לפעולה חשודה'\n• 'לאימות זהות צריך ספרות מהכרטיס'\n• קשה לאמת תקינות שיחה\n• AI Voice Cloning = הרמה הבאה\n\n📱 דיוג בהודעות — Smishing\n• 'חבילה ממתינה לך, עדכן כתובת: [קישור-מזויף].com'\n• שיעור לחיצה גבוה מדוא\"ל\n\n📷 דיוג בקוד QR — Quishing\n• קודי QR שמובילים לאתר דיוג\n\n🛡️ הגנה\n• אל תשתף קוד חד-פעמי (OTP)\n• תמיד פנה ישירות לחברה",
      explanationEn: "Vishing: 'This is a bank representative, there is suspicious activity on your account. For verification, I need digits from your card.' Hard to verify a phone call's legitimacy. AI Voice Cloning = next-level vishing. Smishing: 'A package is waiting for you, update your address: [fake-tracking-link].com' — higher click rate than email. QR Code Phishing (Quishing) = QR codes leading to phishing sites. Defense: never share OTPs, always contact the company directly.",
      qEn: "What are Vishing and Smishing, and how do they differ from regular Phishing?",
      correctEn: "Vishing = phishing by phone calls\nSmishing = phishing by SMS\nBoth are social engineering through different channels than email",
      choicesEn: [
        "Vishing = phishing by phone calls\nSmishing = phishing by SMS\nBoth are social engineering through different channels than email",
        "Vishing = video phishing — Smishing = social media phishing",
        "Both are subtypes of Spear Phishing only",
        "Vishing and Smishing are less dangerous than regular Phishing because they are easy to detect"
      ]
    }
  ],

  109: [
    {
      q: "‏מה ההבדל בין חומת אש חסרת מצב (Stateless) לחומת אש מודעת מצב (Stateful)?",
      correct: "‏חסרת מצב (Stateless) בודקת כל חבילה בנפרד\nמודעת מצב (Stateful) עוקבת אחרי מצב החיבור\nויודעת אם חבילה שייכת לשיחה קיימת",
      choices: [
        "‏חסרת מצב (Stateless) בודקת כל חבילה בנפרד\nמודעת מצב (Stateful) עוקבת אחרי מצב החיבור\nויודעת אם חבילה שייכת לשיחה קיימת",
        "‏מודעת מצב (Stateful) מהירה יותר — חסרת מצב (Stateless) מאובטחת יותר",
        "‏חסרת מצב ל-UDP — מודעת מצב ל-TCP",
        "‏מודעת מצב = תוכנה — חסרת מצב = חומרה"
      ],
      explanation: "‏🔓 חסרת מצב — Stateless\n• בודקת כתובת מקור/יעד + פורט + פרוטוקול\n• קל לעקוף עם חבילות מזויפות (Spoofed Packets)\n\n🔒 מודעת מצב — Stateful (conntrack)\n• מבינה SYN/ESTABLISHED/FIN\n• חבילות תעבורת חזרה עוברות אוטומטית\n\n🚀 חומת אש מהדור הבא — NGFW (שכבה 7)\n• מבינה HTTP/DNS/TLS\n• יכולה לחסום לפי תוכן\n\n📌 iptables ברוב הפצות לינוקס = מודעת מצב כברירת מחדל",
      explanationEn: "Stateless firewall (iptables -P): checks src/dst IP + port + protocol. Easy to bypass with spoofed packets. Stateful (conntrack): understands SYN/ESTABLISHED/FIN — return traffic passes automatically. NGFW (L7): understands HTTP/DNS/TLS — can block by content. iptables on most Linux distributions is stateful by default.",
      qEn: "What is the difference between a Stateless and a Stateful firewall?",
      correctEn: "Stateless checks each packet separately\nStateful tracks connection state\nand knows if a packet belongs to an existing conversation",
      choicesEn: [
        "Stateless checks each packet separately\nStateful tracks connection state\nand knows if a packet belongs to an existing conversation",
        "Stateful is faster — Stateless is more secure",
        "Stateless is for UDP — Stateful is for TCP",
        "Stateful = software — Stateless = hardware"
      ]
    },
    {
      q: "‏מה מטרת האזור המפורז (DMZ)?",
      correct: "‏אזור ביניים שמכיל שרתים נגישים מהאינטרנט\n(Web/Mail/DNS) ומבודד אותם מהרשת הפנימית\nפריצה ל-DMZ לא מעניקה גישה למסד הנתונים",
      choices: [
        "‏אזור ביניים שמכיל שרתים נגישים מהאינטרנט\n(Web/Mail/DNS) ומבודד אותם מהרשת הפנימית\nפריצה ל-DMZ לא מעניקה גישה למסד הנתונים",
        "‏אזור שבו כל התעבורה מוצפנת",
        "‏אזור ללא הצפנה לביצועים מהירים",
        "‏רשת משנה (Subnet) מיוחדת לחיבורי VPN"
      ],
      explanation: "‏🏗️ ארכיטקטורת DMZ\n• אינטרנט → חומת אש חיצונית\n• → אזור מפורז (Web/Mail/DNS)\n• → חומת אש פנימית\n• → רשת פנימית (מסד נתונים/AD)\n\n🛡️ למה זה עובד?\n• גם אם תוקף פורץ לשרת ה-Web באזור המפורז\n• חומת האש הפנימית חוסמת גישה למסד הנתונים\n\n📌 העיקרון\n• הגנה לעומק (Defense in Depth)\n• כל שכבה מגינה על הבאה",
      explanationEn: "DMZ = an additional defense layer. Architecture: Internet > External Firewall > DMZ (Web/Mail/DNS) > Internal Firewall > Internal Network (DB/AD). Even if an attacker compromises the Web Server in the DMZ, the Internal Firewall blocks access to the database. Principle: Defense in Depth — each layer protects the next.",
      qEn: "What is the purpose of a DMZ (Demilitarized Zone)?",
      correctEn: "A buffer zone containing internet-facing servers\n(Web/Mail/DNS) isolated from the internal network\nA breach in the DMZ does not give access to the database",
      choicesEn: [
        "A buffer zone containing internet-facing servers\n(Web/Mail/DNS) isolated from the internal network\nA breach in the DMZ does not give access to the database",
        "A zone where all traffic is encrypted",
        "A zone without encryption for fast performance",
        "A special subnet for VPN connections"
      ]
    },
    {
      q: "‏כיצד התולעת Stuxnet הצליחה לפגוע ברשת מנותקת (Air-Gapped)?",
      correct: "‏הופצה דרך כונני USB\nעובדים חיברו USB למחשבים מנותקים\nהתולעת הגיעה לבקרים תעשייתיים (PLCs) של Siemens",
      choices: [
        "‏הופצה דרך כונני USB\nעובדים חיברו USB למחשבים מנותקים\nהתולעת הגיעה לבקרים תעשייתיים (PLCs) של Siemens",
        "‏פרצה דרך רשת אלחוטית (WiFi) של המתקן",
        "‏הוכנסה ישירות על ידי סוכן פנימי (Mole) בתוך המתקן",
        "‏השתמשה בפגיעות יום-אפס (Zero-Day) בקושחת PLC שנשלחה באוויר"
      ],
      explanation: "‏🐛 תולעת Stuxnet — 2010\n• מיוחסת לארה\"ב+ישראל\n• 4 פגיעות יום-אפס (Zero-Days)\n\n🔌 איך עקפה Air Gap?\n• שרשרת הדבקה בכונני USB\n• מהנדס חיבר USB נגוע\n• Stuxnet התפשטה, חיכתה לתוכנת Siemens Step7\n• שינתה תדרי צנטריפוגות\n• הסתירה את הנתונים האמיתיים מהמעקב\n\n💥 התוצאה\n• 1,000 צנטריפוגות הושמדו\n\n📌 הלקח\n• חובה לאסור כונני USB לא מבוקרים בסביבות ICS",
      explanationEn: "Stuxnet (2010, attributed to US+Israel): used 4 zero-days. Air gap = no internet connection. Solution: USB infection chain. An engineer connected an infected USB — Stuxnet spread, waited for Siemens Step7 software, changed centrifuge frequencies while hiding real data from monitoring. 1,000 centrifuges were destroyed. Lesson: uncontrolled USB drives must be banned in ICS environments.",
      qEn: "How did Stuxnet manage to damage an air-gapped network?",
      correctEn: "It spread through USB drives\nWorkers connected USB to disconnected computers\nThe worm reached Siemens PLCs",
      choicesEn: [
        "It spread through USB drives\nWorkers connected USB to disconnected computers\nThe worm reached Siemens PLCs",
        "It breached through the facility's WiFi network",
        "It was directly planted by a mole inside the facility",
        "It used a Zero-Day in PLC firmware sent over the air"
      ]
    },
        {
      q: "‏מהו כלל iptables שחוסם כל גישה נכנסת חוץ מ-SSH (פורט 22)?",
      correct: "‏iptables -P INPUT DROP\niptables -A INPUT -p tcp --dport 22 -j ACCEPT\niptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT",
      choices: [
        "‏iptables -P INPUT DROP\niptables -A INPUT -p tcp --dport 22 -j ACCEPT\niptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT",
        "‏iptables -A INPUT -p tcp --dport 22 -j ACCEPT",
        "‏iptables --block-all — iptables --allow 22",
        "‏iptables -P INPUT REJECT — iptables -A SSH -j ALLOW"
      ],
      explanation: "‏📋 שלושת הכללים\n• 1) DEFAULT POLICY = חסום הכל (DROP)\n• 2) אשר פורט 22 (SSH)\n• 3) אשר חיבורים מבוססים (ESTABLISHED)\n• בלי זה — גם תגובות לתעבורה היוצאת ייחסמו!\n\n💾 חשוב לשמור\n• iptables-save > /etc/iptables/rules.v4\n• אחרת הכללים נמחקים באתחול מחדש (Reboot)\n\n🛠️ חלופות\n• nftables = המחליף המודרני של iptables\n• ufw (Ubuntu) = ממשק נוח: ufw default deny incoming; ufw allow 22/tcp",
      explanationEn: "Steps: 1) DEFAULT POLICY = DROP (block everything). 2) ACCEPT port 22 (SSH). 3) ACCEPT established connections (without this, responses to outgoing traffic would also be blocked!). Important: save rules with iptables-save > /etc/iptables/rules.v4, otherwise rules are lost on reboot. nftables is the modern successor to iptables. ufw (Ubuntu) is a convenient front-end: ufw default deny incoming; ufw allow 22/tcp.",
      qEn: "What iptables rule blocks all incoming traffic except SSH (port 22)?",
      correctEn: "iptables -P INPUT DROP\niptables -A INPUT -p tcp --dport 22 -j ACCEPT\niptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT",
      choicesEn: [
        "iptables -P INPUT DROP\niptables -A INPUT -p tcp --dport 22 -j ACCEPT\niptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT",
        "iptables -A INPUT -p tcp --dport 22 -j ACCEPT",
        "iptables --block-all — iptables --allow 22",
        "iptables -P INPUT REJECT — iptables -A SSH -j ALLOW"
      ]
    },
        {
      q: "‏מהי ארכיטקטורת אפס אמון (Zero Trust Architecture) ועל איזה עיקרון היא מבוססת?",
      correct: "‏ארכיטקטורה שלא סומכת על אף ישות כברירת מחדל\n'לעולם אל תסמוך, תמיד אמת'\n(Never Trust, Always Verify)",
      choices: [
        "‏ארכיטקטורה שלא סומכת על אף ישות כברירת מחדל\n'לעולם אל תסמוך, תמיד אמת'\n(Never Trust, Always Verify)",
        "‏ארכיטקטורה ללא חומת אש — סומכים על כל משתמש מאומת",
        "‏גישה שמבוססת על פגיעויות יום-אפס (Zero-Day)",
        "‏מודל שבו רק מנהלי מערכת מהאזור המפורז (DMZ) יכולים לגשת למשאבים"
      ],
      explanation: "‏🏰 ארכיטקטורה מסורתית — 'טירה וחפיר'\n• סומכים על כל מה שבפנים\n• אחרי פריצה = תנועה רוחבית חופשית\n\n🔐 אפס אמון — Zero Trust\n• 1) אמת במפורש — MFA + תקינות מכשיר + מיקום בכל בקשה\n• 2) הרשאת מינימום (Least Privilege)\n• 3) הנח שנפרצת (Assume Breach) — פלח את הרשת\n\n📋 תקן: NIST SP 800-207\n\n🛠️ מימוש\n• BeyondCorp (Google)\n• Zscaler\n• Cloudflare Access",
      explanationEn: "Zero Trust (John Kindervag, Forrester 2010): traditional architecture uses a 'castle and moat' model — trust everything inside. After a breach, lateral movement is unrestricted. Zero Trust: 1) Verify explicitly — MFA + device health + location on every request. 2) Least privilege access. 3) Assume breach — segment the network, monitor all traffic. NIST SP 800-207. Implementations: BeyondCorp (Google), Zscaler, Cloudflare Access.",
      qEn: "What is Zero Trust Architecture and what principle is it based on?",
      correctEn: "An architecture that trusts no entity by default\n'Never Trust, Always Verify'",
      choicesEn: [
        "An architecture that trusts no entity by default\n'Never Trust, Always Verify'",
        "An architecture without a firewall — trusting all authenticated users",
        "An approach based on Zero-Day vulnerabilities",
        "A model where only DMZ admins can access resources"
      ]
    }
  ],

  // ===== DevOps & Cloud Track (201-206) =====
  201: [
    {
      q: "\u200Fאיך Linux מייצג פורטים פתוחים בצורה היעילה ביותר לניפוי בעיות?",
      correct: "\u200Fss -tulnp — מראה TCP/UDP, listening,\nport number, PID ושם תהליך",
      choices: [
        "\u200Fss -tulnp — מראה TCP/UDP, listening,\nport number, PID ושם תהליך",
        "\u200Fnetstat -a",
        "\u200Fifconfig --ports",
        "\u200Flsof /dev/net"
      ],
      explanation: "\u200F🔧 ss — Socket Statistics\n• החליף את netstat (deprecated)\n• -t=TCP, -u=UDP, -l=listening\n• -n=numeric (לא resolve שמות)\n• -p=PID\n\n📋 תוצאה לדוגמה\n• LISTEN 0 128 0.0.0.0:80 0.0.0.0:*\n• users:(('nginx',pid=1234))\n\n📌 חשוב\n• ידע זה קריטי לכל troubleshooting\n• journalctl -u service -f = logs בזמן אמת",
      explanationEn: "ss (Socket Statistics) replaced netstat (deprecated). Flags: -t=TCP, -u=UDP, -l=listening, -n=numeric (no name resolution), -p=show PID. Example output: LISTEN 0 128 0.0.0.0:80 users:(('nginx',pid=1234)). This knowledge is critical for all network troubleshooting. journalctl -u service -f shows real-time logs."
    },
    {
      q: "\u200Fמה ההבדל בין hard link לsoft link ב-Linux?",
      correct: "\u200FHard link: מצביע לאותו inode\nנשמר גם אחרי מחיקת המקור\nSoft link: מצביע ל-path\nנשבר אם המקור נמחק",
      choices: [
        "\u200FHard link: מצביע לאותו inode\nנשמר גם אחרי מחיקת המקור\nSoft link: מצביע ל-path\nנשבר אם המקור נמחק",
        "\u200FHard link לקבצים — Soft link לתיקיות",
        "\u200FHard link מהיר יותר\nSoft link חוצה filesystems",
        "\u200Fאין הבדל מעשי"
      ],
      explanation: "\u200F📁 inode\n• metadata של קובץ (permissions, timestamps, blocks)\n\n🔗 Hard link\n• שם נוסף לאותו inode\n• הקובץ נמחק רק כש-linkcount=0\n• ln file hardlink\n\n🔗 Soft link (symlink)\n• ln -s /path/file link\n• יכול לחצות filesystems ותיקיות\n• נשבר אם target נמחק\n• ls -la מראה → target",
      explanationEn: "An inode stores file metadata (permissions, timestamps, blocks). Hard link: another name pointing to the same inode — file is deleted only when link count reaches 0 (ln file hardlink). Soft link (symlink): ln -s /path/file link — can cross filesystems and directories, breaks if target is deleted. ls -la shows the target."
    },
    {
      q: "\u200Fמה המשמעות של chmod 755?",
      correct: "\u200FOwner: rwx (7), Group: r-x (5), Others: r-x (5)\nקריאה+הרצה לכולם, כתיבה רק ל-owner",
      choices: [
        "\u200FOwner: rwx (7), Group: r-x (5), Others: r-x (5)\nקריאה+הרצה לכולם, כתיבה רק ל-owner",
        "\u200FRead-only לכל המשתמשים",
        "\u200FFull permissions לכולם",
        "\u200FOwner: rw, Group: r, Others: x"
      ],
      explanation: "\u200F🔢 חישוב הרשאות\n• r=4, w=2, x=1\n• 7=4+2+1=rwx\n• 5=4+0+1=r-x\n• 4=r--\n\n📋 דוגמאות נפוצות\n• chmod 755 = executable scripts/directories\n• chmod 644 = files (owner rw, others r)\n• chmod 600 = private keys (owner only)\n\n⚠️ SUID (4755)\n• הקובץ רץ עם הרשאות ה-owner, לא המשתמש הרץ\n• find / -perm -4000 = מוצא SUID files",
      explanationEn: "Permission calculation: r=4, w=2, x=1. 7=4+2+1=rwx, 5=4+0+1=r-x, 4=r--. Common examples: chmod 755 for executable scripts/directories, chmod 644 for files (owner rw, others r), chmod 600 for private keys (owner only). SUID (4755): file runs with owner's permissions, not the executing user's. find / -perm -4000 finds SUID files."
    },
    {
      q: "\u200Fמה הפקודה למציאת processes שמאזינים על פורט 8080?",
      correct: "\u200Fss -tlnp | grep 8080\n(או lsof -i :8080)",
      choices: [
        "\u200Fss -tlnp | grep 8080\n(או lsof -i :8080)",
        "\u200Fnetstat --port 8080",
        "\u200Fps aux | grep 8080",
        "\u200Ffind /proc -name '8080'"
      ],
      explanation: "\u200F🔧 ss (socket statistics)\n• -t TCP, -l listening\n• -n numeric (לא resolve names)\n• -p show process\n\n📋 פקודות שימושיות\n• ss -tlnp: מציג כל TCP listening sockets עם PID\n• lsof -i :8080: כל files/sockets פתוחים על port 8080\n• netstat -tlnp | grep 8080 עובד גם אבל ss מהיר יותר\n\n💡 טיפ\n• kill -9 $(lsof -ti :8080) = kill process שמאזין על port",
      explanationEn: "ss (socket statistics): -t TCP, -l listening, -n numeric, -p show process. ss -tlnp shows all TCP listening sockets with PID. lsof -i :8080 shows all open files/sockets on port 8080. netstat -tlnp | grep 8080 also works but ss is faster. Tip: kill -9 $(lsof -ti :8080) kills the process listening on the port."
    }
  ],

  202: [
    {
      q: "\u200Fמה ההבדל בין Docker image לבין Docker container?",
      correct: "\u200FImage = תבנית read-only שכבתית\nContainer = instance רץ של image עם writable layer",
      choices: [
        "\u200FImage = תבנית read-only שכבתית\nContainer = instance רץ של image עם writable layer",
        "\u200FImage שמור על disk — Container ב-memory",
        "\u200FContainer גדול יותר מ-image",
        "\u200FImage מכיל קוד — Container מכיל data"
      ],
      explanation: "\u200F🐳 Docker Image\n• Union filesystem — layers\n• כל RUN/COPY/ADD ב-Dockerfile = layer חדש\n• שכבות shared בין containers\n\n📦 Container\n• image layers (read-only) + writable layer בראש\n• כש-container נמחק — writable layer נמחק\n\n💾 Data persistence\n• Volumes\n• docker images = רשימת images\n• docker ps = containers רצים",
      explanationEn: "Docker Image uses a Union filesystem with layers. Each RUN/COPY/ADD in Dockerfile creates a new layer. Layers are shared between containers. Container = image layers (read-only) + writable layer on top. When container is deleted, the writable layer is deleted. Data persistence via Volumes. docker images lists images, docker ps lists running containers."
    },
    {
      q: "\u200Fמה Multi-stage build ב-Docker ולמה להשתמש בזה?",
      correct: "\u200Fבנייה בשלבים — stage ראשון ל-compile\nstage שני רק עם artifacts\nimage קטן ב-10x",
      choices: [
        "\u200Fבנייה בשלבים — stage ראשון ל-compile\nstage שני רק עם artifacts\nimage קטן ב-10x",
        "\u200Fבניית כמה images במקביל",
        "\u200Fשימוש ב-base images שונים ל-env שונים",
        "\u200Fcaching של layers בין builds"
      ],
      explanation: "\u200F❌ בלי multi-stage\n• image Go מכיל compiler, source, dependencies = 1.2GB\n\n✅ עם multi-stage\n• FROM golang:1.21 AS builder\n• RUN go build\n• FROM scratch\n• COPY --from=builder /app/binary .\n• image של 8MB בלבד!\n\n📌 יתרונות\n• רק binary — ללא compiler, ללא source\n• אבטחה + מהירות\n• Node.js: stage עם devDependencies, stage עם רק production deps",
      explanationEn: "Without multi-stage: a Go image contains compiler, source, dependencies = 1.2GB. With multi-stage: FROM golang:1.21 AS builder; RUN go build; FROM scratch; COPY --from=builder /app/binary . Results in an 8MB image! Only binary — no compiler, no source. Better security + speed. For Node.js: one stage with devDependencies, final stage with production deps only."
    },
    {
      q: "\u200Fמה ה-ENTRYPOINT לעומת CMD ב-Dockerfile?",
      correct: "\u200FENTRYPOINT = תמיד רץ\nCMD = default args שאפשר לoverride ב-docker run",
      choices: [
        "\u200FENTRYPOINT = תמיד רץ\nCMD = default args שאפשר לoverride ב-docker run",
        "\u200FCMD רץ ב-build — ENTRYPOINT ב-run",
        "\u200Fשניהם זהים — אחד ל-linux אחד ל-windows",
        "\u200FENTRYPOINT ל-webserver — CMD ל-batch jobs"
      ],
      explanation: "\u200F🚀 ENTRYPOINT\n• ENTRYPOINT ['nginx', '-g', 'daemon off;']\n• לא ניתן ל-override ב-docker run\n\n⚙️ CMD\n• CMD ['--worker-processes=4']\n• default args, ניתן ל-override\n\n🔗 שניהם יחד\n• ENTRYPOINT רץ תמיד, CMD מספק default args\n• docker run myimage --worker-processes=8 = מחליף CMD\n\n📌 best practice\n• ENTRYPOINT ל-binary, CMD ל-default flags",
      explanationEn: "ENTRYPOINT always runs and cannot be overridden by docker run. CMD provides default arguments that can be overridden. Together: ENTRYPOINT runs always, CMD supplies default args. docker run myimage --worker-processes=8 replaces CMD. Best practice: ENTRYPOINT for the binary, CMD for default flags."
    },
    {
      q: "\u200Fמה best practice לכתיבת Dockerfile — מה מקטין image size?",
      correct: "\u200FMulti-stage builds, base images קטנים (alpine),\nמיזוג RUN commands, ניקוי cache ב-apt,\nהוספת .dockerignore",
      choices: [
        "\u200FMulti-stage builds, base images קטנים (alpine),\nמיזוג RUN commands, ניקוי cache ב-apt,\nהוספת .dockerignore",
        "\u200Fהוספת COMPRESS=true ב-Dockerfile",
        "\u200Fשימוש ב-COPY במקום ADD בלבד",
        "\u200Fהגדרת WORKDIR = /tmp לחיסכון בזיכרון"
      ],
      explanation: "\u200F🏗️ Multi-stage\n• FROM golang:1.21 AS builder; RUN go build\n• FROM alpine:3.18; COPY --from=builder /app /app\n• image סופי ללא Go compiler!\n\n📦 Alpine Linux\n• 5MB vs Ubuntu 72MB\n\n🔧 מיזוג\n• RUN apt-get update && apt-get install -y nginx && rm -rf /var/lib/apt/lists/*\n• נקה cache באותה שכבה!\n\n📋 .dockerignore\n• node_modules, .git, *.log לא נכנסים ל-build context\n\n💡 Layer caching\n• העתק package.json לפני COPY . כדי למנף cache של npm install",
      explanationEn: "Multi-stage: FROM golang:1.21 AS builder; RUN go build; FROM alpine:3.18; COPY --from=builder /app /app — final image without Go compiler! Alpine Linux is 5MB vs Ubuntu 72MB. Merge RUN commands and clean cache in the same layer: RUN apt-get update && apt-get install -y nginx && rm -rf /var/lib/apt/lists/*. .dockerignore excludes node_modules, .git, *.log from build context. Copy package.json before COPY . to leverage npm install cache."
    }
  ],

  203: [
    {
      q: "\u200Fמה ההבדל בין Deployment לבין StatefulSet ב-Kubernetes?",
      correct: "\u200FDeployment לאפליקציות stateless\nStatefulSet ל-Databases — שומר identity קבועה,\npersistent storage, ו-ordered rollout",
      choices: [
        "\u200FDeployment לאפליקציות stateless\nStatefulSet ל-Databases — שומר identity קבועה,\npersistent storage, ו-ordered rollout",
        "\u200FStatefulSet ישן יותר ומיועד להחלפה",
        "\u200FDeployment ל-containers בודדים\nStatefulSet ל-cluster",
        "\u200Fאין הבדל מעשי — רק naming convention"
      ],
      explanation: "\u200F🔄 Deployment\n• pods ב-web server = interchangeable\n• מת pod-abc, נולד pod-xyz\n\n💾 StatefulSet\n• pod-0, pod-1, pod-2 — שמות קבועים\n• pod-0 במסד הנתונים = primary always\n• כל pod מקבל PVC (Persistent Volume Claim) עצמאי\n\n📋 Rollout\n• pod-2 מת → pod-2 קם → pod-1 מת → ordered\n• MySQL, Kafka, ZooKeeper = StatefulSet",
      explanationEn: "Deployment: web server pods are interchangeable — pod-abc dies, pod-xyz is born. StatefulSet: pod-0, pod-1, pod-2 have fixed names. pod-0 in database = always primary. Each pod gets its own PVC (Persistent Volume Claim). Rollout is ordered: pod-2 dies, pod-2 comes up, then pod-1 dies. Used for MySQL, Kafka, ZooKeeper."
    },
    {
      q: "\u200Fמה Service ב-Kubernetes עושה ש-Pod IP לא יכול לעשות?",
      correct: "\u200Fמספק IP קבוע ו-DNS שלא משתנה\nגם כש-Pods מוחלפים או מוגדלים",
      choices: [
        "\u200Fמספק IP קבוע ו-DNS שלא משתנה\nגם כש-Pods מוחלפים או מוגדלים",
        "\u200Fמוסיף TLS encryption לתעבורה",
        "\u200Fמנהל resource limits ל-cpu ול-memory",
        "\u200Fמאפשר inter-namespace communication"
      ],
      explanation: "\u200F📡 Pod IP\n• ephemeral — Pod מת = IP חדש\n\n🔗 Service\n• ClusterIP קבוע + DNS: my-service.namespace.svc.cluster.local\n• kube-proxy מנהל iptables/ipvs rules ל-forward ל-Pods הנכונים\n\n📋 Types\n• ClusterIP (פנימי)\n• NodePort (פורט על node)\n• LoadBalancer (cloud LB)\n• ExternalName (DNS alias)\n\n📌 Endpoints object מכיל IPs עדכניות",
      explanationEn: "Pod IP is ephemeral — pod dies, new IP assigned. Service provides a stable ClusterIP + DNS: my-service.namespace.svc.cluster.local. kube-proxy manages iptables/ipvs rules to forward to correct Pods. Types: ClusterIP (internal), NodePort (port on node), LoadBalancer (cloud LB), ExternalName (DNS alias). Endpoints object contains current IPs."
    },
    {
      q: "\u200Fמה liveness probe לעומת readiness probe ב-Kubernetes?",
      correct: "\u200FLiveness: האם container חי? (restart אם לא)\nReadiness: האם מוכן ל-traffic? (הסר מ-Service אם לא)",
      choices: [
        "\u200FLiveness: האם container חי? (restart אם לא)\nReadiness: האם מוכן ל-traffic? (הסר מ-Service אם לא)",
        "\u200Fשניהם בודקים אותו דבר\nredness ל-db, liveness ל-web",
        "\u200FLiveness ב-staging — Readiness ב-production",
        "\u200FLiveness ל-HTTP — Readiness ל-TCP"
      ],
      explanation: "\u200F💓 Liveness probe נכשל\n• Kubernetes מבצע restart ל-container\n\n✅ Readiness probe נכשל\n• Pod מוסר מ-Service endpoints\n• לא מקבל traffic, אבל לא restarted\n\n🚀 Startup probe\n• חדש ב-K8s 1.16\n• לאפליקציות עם slow startup\n\n📋 הגדרות\n• HTTP/TCP/exec probes\n• initialDelaySeconds, periodSeconds, failureThreshold\n• בלי readiness = traffic ל-Pod שעדיין מאתחל",
      explanationEn: "Liveness probe fails: Kubernetes restarts the container. Readiness probe fails: Pod is removed from Service endpoints — no traffic, but not restarted. Startup probe (K8s 1.16+): for apps with slow startup. Configuration: HTTP/TCP/exec probes with initialDelaySeconds, periodSeconds, failureThreshold. Without readiness probe, traffic goes to pods still initializing."
    },
    {
      q: "\u200Fמה ConfigMap ומה Secret ב-Kubernetes ומתי לא להשתמש ב-Secret?",
      correct: "\u200FConfigMap ל-config לא-סודי (env vars, files)\nSecret ל-data סודי (passwords, tokens)\nאך base64 בלבד, לא הצפנה!\nיש לנהל עם Vault/Sealed Secrets",
      choices: [
        "\u200FConfigMap ל-config לא-סודי (env vars, files)\nSecret ל-data סודי (passwords, tokens)\nאך base64 בלבד, לא הצפנה!\nיש לנהל עם Vault/Sealed Secrets",
        "\u200FConfigMap ל-files — Secret ל-env vars בלבד",
        "\u200FSecret מוצפן AES-256 אוטומטית על ידי Kubernetes",
        "\u200FConfigMap ו-Secret זהים — ההבדל הוא רק סמנטי"
      ],
      explanation: "\u200F📋 ConfigMap\n• kubectl create configmap app-config --from-file=config.yaml\n\n🔒 Secret\n• kubectl create secret generic db-secret --from-literal=password=s3cr3t\n• מאוחסן כ-base64 ב-etcd\n• אחסון ב-etcd לא מוצפן כברירת מחדל!\n\n🛡️ הפתרון\n• Encryption at Rest ל-etcd\n• External secrets (HashiCorp Vault, AWS Secrets Manager, Sealed Secrets)\n\n📌 שימוש\n• spec.containers.env.valueFrom.secretKeyRef או mount כ-volume\n• etcd = 'brain' של cluster — חייב להיות מאובטח",
      explanationEn: "ConfigMap: kubectl create configmap app-config --from-file=config.yaml. Secret: kubectl create secret generic db-secret --from-literal=password=s3cr3t — stored as base64 in etcd, NOT encrypted by default! Solution: Encryption at Rest for etcd, External secrets (HashiCorp Vault, AWS Secrets Manager, Sealed Secrets). Usage: spec.containers.env.valueFrom.secretKeyRef or mount as volume. etcd is the cluster's brain and must be secured."
    },
    {
      q: "\u200Fמה Resource Requests ו-Limits ב-Kubernetes ולמה חשוב להגדיר אותם?",
      correct: "\u200FRequests: מינימום משאבים שה-scheduler מבטיח ל-pod\nLimits: מקסימום שה-pod יכול לצרוך\nבלי Limits, pod אחד יכול להרעיב את כל ה-node",
      choices: [
        "\u200FRequests: מינימום משאבים שה-scheduler מבטיח ל-pod\nLimits: מקסימום שה-pod יכול לצרוך\nבלי Limits, pod אחד יכול להרעיב את כל ה-node",
        "\u200FRequests ו-Limits שניהם מגדירים maximum\nההבדל הוא ב-admission controller",
        "\u200FLimits חלים רק על CPU — Requests על Memory",
        "\u200Fבלי Requests, pods לא יתחילו לרוץ"
      ],
      explanation: "\u200F⚙️ הגדרה\n• requests: cpu: '250m' memory: '128Mi'\n• limits: cpu: '500m' memory: '256Mi'\n\n📋 Scheduler\n• מחפש node עם מספיק requests available\n\n⚠️ חריגה\n• CPU throttling: pod עובר Limit → throttled (איטי, לא killed)\n• Memory OOMKilled: pod עובר memory Limit → KILLED!\n\n📊 QoS classes\n• Guaranteed (req=limit)\n• Burstable (req<limit)\n• BestEffort (ללא req/limit)\n\n📌 LimitRange ל-namespace defaults, ResourceQuota ל-limits ב-namespace",
      explanationEn: "Requests: cpu: 250m, memory: 128Mi. Limits: cpu: 500m, memory: 256Mi. Scheduler finds a node with enough available requests. CPU over limit = throttled (slow, not killed). Memory over limit = OOMKilled! QoS classes: Guaranteed (req=limit), Burstable (req<limit), BestEffort (no req/limit). LimitRange for namespace defaults, ResourceQuota for namespace limits."
    }
  ],

  204: [
    {
      q: "\u200Fמה ההבדל בין AWS Security Group לבין NACL?",
      correct: "\u200FSecurity Group: stateful (זוכר connection), ברמת ENI\nNACL: stateless, ברמת subnet\nחייב לפתוח inbound ו-outbound בנפרד",
      choices: [
        "\u200FSecurity Group: stateful (זוכר connection), ברמת ENI\nNACL: stateless, ברמת subnet\nחייב לפתוח inbound ו-outbound בנפרד",
        "\u200FSecurity Group ל-EC2 — NACL ל-S3",
        "\u200FNACL מהיר יותר — Security Group גמיש יותר",
        "\u200FSecurity Group חינמי — NACL בתשלום"
      ],
      explanation: "\u200F🛡️ Security Group\n• stateful — אם פתחת port 443 inbound, response יוצא אוטומטית\n• rules רק allow (אין deny)\n\n🔒 NACL\n• stateless — חייב rule inbound ל-port 443\n• AND rule outbound ל-ephemeral ports 1024-65535\n• גם allow וגם deny\n• נוסף על security group\n\n📌 Defense in depth\n• Security Group ל-instance, NACL ל-subnet",
      explanationEn: "Security Group: stateful — if you open port 443 inbound, response goes out automatically. Rules are allow-only (no deny). NACL: stateless — need inbound rule for port 443 AND outbound rule for ephemeral ports 1024-65535. Supports both allow and deny rules. Added on top of security groups. Defense in depth: Security Group for instance, NACL for subnet."
    },
    {
      q: "\u200Fמה IAM Role ומתי עדיף על Access Key?",
      correct: "\u200FIAM Role = הרשאות זמניות שניתן ל-assume\nעדיף ל-EC2/Lambda כי לא דורש hardcoded credentials",
      choices: [
        "\u200FIAM Role = הרשאות זמניות שניתן ל-assume\nעדיף ל-EC2/Lambda כי לא דורש hardcoded credentials",
        "\u200FRole ל-admins — Access Key ל-developers",
        "\u200FAccess Key מאובטח יותר כי ניתן ל-rotate",
        "\u200FRole רק ל-cross-account access"
      ],
      explanation: "\u200F⚠️ Access Key\n• long-term credentials = סכנת דליפה (git push, logs)\n\n✅ IAM Role\n• EC2 instance profile = temporary credentials שמתחלפות אוטומטית כל שעה\n• Lambda execution role\n• AssumeRole מ-STS\n• IRSA ב-EKS: pod-level IAM roles\n\n📌 Least Privilege\n• כל service = role נפרדת עם minimum permissions\n• AWS Cost Explorer + CloudTrail ל-audit",
      explanationEn: "Access Key: long-term credentials with leak risk (git push, logs). IAM Role: EC2 instance profile provides temporary credentials that rotate automatically every hour. Lambda execution role. AssumeRole from STS. IRSA in EKS: pod-level IAM roles. Least Privilege: each service gets a separate role with minimum permissions. AWS Cost Explorer + CloudTrail for audit."
    },
    {
      q: "\u200Fמה AWS VPC Peering לעומת Transit Gateway?",
      correct: "\u200FPeering: חיבור 1:1 בין 2 VPCs\nTransit Gateway: hub מרכזי\nN VPCs מתחברים ל-TGW = N connections\nלעומת N*(N-1)/2 ב-peering",
      choices: [
        "\u200FPeering: חיבור 1:1 בין 2 VPCs\nTransit Gateway: hub מרכזי\nN VPCs מתחברים ל-TGW = N connections\nלעומת N*(N-1)/2 ב-peering",
        "\u200FPeering יקר יותר — Transit Gateway חינמי",
        "\u200FPeering בין regions — TGW בתוך region",
        "\u200FTGW מהיר יותר — Peering מאובטח יותר"
      ],
      explanation: "\u200F📊 השוואה\n• עם 10 VPCs ב-peering full mesh: 45 חיבורים\n• עם TGW: 10 חיבורים\n\n🔗 TGW\n• תומך ב-VPN, Direct Connect, multi-region\n• $0.05/GB data processed\n• spoke-and-hub architecture\n\n🔗 Peering\n• ללא encryption נוסף, ללא bandwidth limit, זול\n• point-to-point\n\n📌 פחות מ-5 VPCs? peering מספיק",
      explanationEn: "With 10 VPCs in full mesh peering: 45 connections. With TGW: 10 connections. TGW supports VPN, Direct Connect, multi-region. $0.05/GB data processed. Spoke-and-hub architecture. Peering: no extra encryption, no bandwidth limit, cheaper. Point-to-point. Less than 5 VPCs? Peering is sufficient."
    },
    {
      q: "\u200Fמה ה-Shared Responsibility Model ב-AWS ואיזה אחריות על הלקוח?",
      correct: "\u200FAWS אחראית על security OF the cloud\n(hardware, facilities, hypervisor)\nלקוח אחראי על security IN the cloud\n(OS, data, IAM, network config)",
      choices: [
        "\u200FAWS אחראית על security OF the cloud\n(hardware, facilities, hypervisor)\nלקוח אחראי על security IN the cloud\n(OS, data, IAM, network config)",
        "\u200FAWS אחראית על הכל — לקוח רק על application code",
        "\u200Fהלקוח אחראי על הכל כי הוא משלם",
        "\u200Fהאחריות חלוקה שווה 50/50 על כל דבר"
      ],
      explanation: "\u200F☁️ AWS\n• physical security, hardware, networking\n• hypervisor, managed services infrastructure\n\n👤 Customer\n• EC2 OS patching\n• Security Groups config\n• S3 bucket policies (לא לפתוח public!)\n• IAM configuration, encryption of data, application security\n\n📋 Serverless (Lambda)\n• AWS גם מנהלת OS\n• RDS: AWS מנהלת DB engine patching, לקוח מנהל access control ו-data\n\n📌 AWS Config, Security Hub, GuardDuty = tools ל-monitoring compliance",
      explanationEn: "AWS: physical security, hardware, networking, hypervisor, managed services infrastructure. Customer: EC2 OS patching, Security Groups config, S3 bucket policies (don't open public!), IAM configuration, encryption of data, application security. Serverless (Lambda): AWS also manages OS. RDS: AWS manages DB engine patching, customer manages access control and data. AWS Config, Security Hub, GuardDuty for monitoring compliance."
    }
  ],

  205: [
    {
      q: "\u200Fמה ההבדל בין CI לבין CD ב-CI/CD pipeline?",
      correct: "\u200FCI: בדיקת קוד אוטומטית בכל push\nCD: Deploy אוטומטי לאחר CI מוצלח\n(Delivery=staging, Deployment=production)",
      choices: [
        "\u200FCI: בדיקת קוד אוטומטית בכל push\nCD: Deploy אוטומטי לאחר CI מוצלח\n(Delivery=staging, Deployment=production)",
        "\u200FCI ל-developers — CD ל-operations",
        "\u200FCI ב-cloud — CD on-premise",
        "\u200Fאין הבדל — זה שם כולל ל-automation"
      ],
      explanation: "\u200F🔄 CI (Continuous Integration)\n• כל push → build + unit tests + lint + security scan\n• מוצא bugs מוקדם\n\n🚀 CD Delivery\n• אחרי CI → deploy ל-staging automatically\n\n🚀 CD Deployment\n• אחרי staging approval → production automatically (fully automated)\n\n🔧 Tools\n• GitHub Actions, Jenkins, GitLab CI, CircleCI\n\n📌 Best practice\n• branch protection + required CI status checks",
      explanationEn: "CI (Continuous Integration): every push triggers build + unit tests + lint + security scan. Catches bugs early. CD Delivery: after CI, deploy to staging automatically. CD Deployment: after staging approval, deploy to production automatically (fully automated). Tools: GitHub Actions, Jenkins, GitLab CI, CircleCI. Best practice: branch protection + required CI status checks."
    },
    {
      q: "\u200Fמה Blue-Green Deployment?",
      correct: "\u200Fשתי environments זהות\nBlue (production) ו-Green (new version)\nSwitch traffic בבת אחת\nRollback = switch חזרה",
      choices: [
        "\u200Fשתי environments זהות\nBlue (production) ו-Green (new version)\nSwitch traffic בבת אחת\nRollback = switch חזרה",
        "\u200FDeploy ל-servers כחולים בתחילה, ירוקים אחר כך",
        "\u200FBlue ל-Europe, Green ל-US — geo deployment",
        "\u200FCanary deployment עם color coding"
      ],
      explanation: "\u200F🔵 Blue-Green\n• zero-downtime deployment\n• Blue = current production\n• Green = new version, tested ב-parallel\n\n🔄 Switch\n• load balancer מפנה מ-Blue ל-Green בשנייה\n• Rollback מיידי: switch חזרה\n• עלות: כפל infrastructure\n\n📌 השוואה\n• Canary = הדרגתי (5% → 25% → 100%)\n• Feature flags = code-level canary",
      explanationEn: "Blue-Green: zero-downtime deployment. Blue = current production. Green = new version, tested in parallel. Switch: load balancer redirects from Blue to Green instantly. Instant rollback: switch back. Cost: double infrastructure. Comparison: Canary = gradual (5% to 25% to 100%). Feature flags = code-level canary."
    },
    {
      q: "\u200Fמה Artifact ב-CI/CD pipeline?",
      correct: "\u200FOutput של build step\nDocker image, JAR, binary, npm package\nשמאוחסן ומשמש ל-deploy",
      choices: [
        "\u200FOutput של build step\nDocker image, JAR, binary, npm package\nשמאוחסן ומשמש ל-deploy",
        "\u200Fלוג הריצה של ה-pipeline",
        "\u200Fקובץ הגדרות ה-pipeline",
        "\u200Ftest coverage report"
      ],
      explanation: "\u200F📦 Artifact = מה שנבנה\n• Docker image → pushed ל-registry (ECR, GCR, Docker Hub)\n• JAR → Nexus/Artifactory\n• npm → registry\n\n🔒 Immutable artifacts\n• אחד שנבנה מ-commit מסוים = deploy ל-staging ואחר כך production\n• לא בונים מחדש!\n• 'Build once, deploy anywhere'\n\n📌 Versioning\n• semver או git SHA\n• retention policy חוסכת עלויות",
      explanationEn: "Artifact = build output. Docker image pushed to registry (ECR, GCR, Docker Hub). JAR to Nexus/Artifactory. npm to registry. Immutable artifacts: built from a specific commit, deployed to staging then production. Don't rebuild! 'Build once, deploy anywhere.' Versioning: semver or git SHA. Retention policy saves costs."
    },
    {
      q: "\u200Fמה GitHub Actions workflow ואיך מגדירים environment secrets?",
      correct: "\u200FYAML ב-.github/workflows/ שמגדיר triggers, jobs ו-steps\nSecrets מוגדרים ב-Repository Settings\nומוזרקים כ-env vars: ${{ secrets.MY_SECRET }}",
      choices: [
        "\u200FYAML ב-.github/workflows/ שמגדיר triggers, jobs ו-steps\nSecrets מוגדרים ב-Repository Settings\nומוזרקים כ-env vars: ${{ secrets.MY_SECRET }}",
        "\u200FWorkflow מוגדר ב-.gitlab-ci.yml ב-root",
        "\u200FSecrets נכתבים ישירות ב-YAML מוצפן",
        "\u200FGitHub Actions הוא שם של CLI tool שמריץ pipelines"
      ],
      explanation: "\u200F📋 workflow file\n• on: [push, pull_request]\n• jobs: build: runs-on: ubuntu-latest\n• steps: uses: actions/checkout@v3; run: npm test\n\n🔒 Secrets\n• Settings → Secrets and variables → Actions → New secret\n• ב-step: env: AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}\n\n🌍 Environments\n• prod/staging יכולים לדרוש approval\n\n📌 נוסף\n• GitHub Marketplace: אלפי pre-built actions\n• Self-hosted runners ל-private networks\n• OIDC: GitHub Actions → AWS IAM Role ללא static keys!",
      explanationEn: "Workflow file: on: [push, pull_request]; jobs: build: runs-on: ubuntu-latest; steps: uses: actions/checkout@v3; run: npm test. Secrets: Settings, Secrets and variables, Actions, New secret. In step: env: AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}. Environments (prod/staging) can require approval. GitHub Marketplace has thousands of pre-built actions. Self-hosted runners for private networks. OIDC: GitHub Actions to AWS IAM Role without static keys!"
    },
    {
      q: "\u200Fמה Shift Left Testing ולמה זה חוסך כסף?",
      correct: "\u200Fהזזת testing שמאלה ב-pipeline\nבדיקות מוקדמות יותר ב-development lifecycle\nbug שמתגלה ב-design עולה פחות מ-bug ב-production",
      choices: [
        "\u200Fהזזת testing שמאלה ב-pipeline\nבדיקות מוקדמות יותר ב-development lifecycle\nbug שמתגלה ב-design עולה פחות מ-bug ב-production",
        "\u200Fכלי שמזיז test cases לסוף pipeline למהירות",
        "\u200Fמתודולוגיה שמחליפה QA engineers באוטומציה",
        "\u200Fבדיקות שנעשות על ה-left side של cluster"
      ],
      explanation: "\u200F💰 Rule of 10 (IBM)\n• bug ב-design = $1\n• ב-development = $10\n• ב-QA = $100\n• ב-production = $1,000+\n\n⬅️ Shift Left\n• unit tests ב-IDE (pre-commit)\n• SAST (static analysis) ב-PR\n• integration tests ב-CI\n• security scanning (Snyk, Trivy) ב-build\n\n📌 גישות\n• TDD (Test Driven Development) = extreme shift left\n• DevSecOps = security shift left\n• Pre-commit hooks (Husky) מונעים commit של code שעובר lint/test",
      explanationEn: "Rule of 10 (IBM): bug at design = $1, development = $10, QA = $100, production = $1,000+. Shift Left: unit tests in IDE (pre-commit), SAST (static analysis) in PR, integration tests in CI, security scanning (Snyk, Trivy) in build. Approaches: TDD (Test Driven Development) = extreme shift left. DevSecOps = security shift left. Pre-commit hooks (Husky) prevent committing code that fails lint/test."
    }
  ],

  206: [
    {
      q: "\u200Fמה SLO, SLA, ו-SLI — ומה ההבדל?",
      correct: "\u200FSLI = מדידה (latency, availability)\nSLO = יעד פנימי (99.9%)\nSLA = הסכם מול לקוח עם קנסות",
      choices: [
        "\u200FSLI = מדידה (latency, availability)\nSLO = יעד פנימי (99.9%)\nSLA = הסכם מול לקוח עם קנסות",
        "\u200Fכולם זהים — מונחים שונים לאותו דבר",
        "\u200FSLO ל-developers, SLA ל-operations, SLI ל-legal",
        "\u200FSLA חינמי, SLO בתשלום"
      ],
      explanation: "\u200F📊 SLI — Service Level Indicator\n• מה אתה מודד\n• latency_p99 = 120ms\n• availability = 99.94%\n\n🎯 SLO — Service Level Objective\n• היעד שלך\n• latency_p99 < 200ms\n• availability > 99.9%\n• Error Budget: 0.1% downtime = 43.8 דקות לחודש\n\n📝 SLA — Service Level Agreement\n• חוזה מול לקוח\n• אחרי פריצת SLA → credit/refund\n• Google Cloud: 99.9% SLA ל-GCE\n• Google בפנים עובד ב-99.99% SLO",
      explanationEn: "SLI (Service Level Indicator): what you measure — latency_p99 = 120ms, availability = 99.94%. SLO (Service Level Objective): your target — latency_p99 < 200ms, availability > 99.9%. Error Budget: 0.1% downtime = 43.8 minutes per month. SLA (Service Level Agreement): contract with customer — after breaching SLA, credit/refund. Google Cloud: 99.9% SLA for GCE. Internally Google targets 99.99% SLO."
    },
    {
      q: "\u200Fמה Chaos Engineering ולמה Netflix המציאה אותו?",
      correct: "\u200Fהזרקת כשלים בכוונה ל-production\nלגילוי חולשות לפני שכשל אמיתי קורה",
      choices: [
        "\u200Fהזרקת כשלים בכוונה ל-production\nלגילוי חולשות לפני שכשל אמיתי קורה",
        "\u200Fבדיקת ביצועים תחת load קיצוני",
        "\u200Fpenetration testing לאפליקציות",
        "\u200FA/B testing ל-feature flags"
      ],
      explanation: "\u200F📖 הרקע\n• Netflix עברה ל-cloud ב-2008\n• AWS outage 2011 הפיל אותם\n\n🐒 Chaos Monkey\n• tool שמכבה VMs אקראיות ב-production\n• Simian Army: Chaos Gorilla (AZ failure), Latency Monkey (network delays)\n\n💡 העיקרון\n• אם כשלים קורים בכל מקרה — עדיף לגלות חולשות כשאתה מוכן\n• Netflix knows about failures before their customers do\n\n📌 GameDay\n• chaos experiment מתוכנן",
      explanationEn: "Background: Netflix migrated to cloud in 2008. AWS outage in 2011 brought them down. Chaos Monkey: tool that randomly kills VMs in production. Simian Army: Chaos Gorilla (AZ failure), Latency Monkey (network delays). The principle: failures happen anyway — better to discover weaknesses when you're prepared. Netflix knows about failures before their customers do. GameDay: planned chaos experiment."
    },
    {
      q: "\u200Fמה Postmortem blameless ולמה חשוב?",
      correct: "\u200Fניתוח incident ללא האשמת אנשים\nמחפש כשלי מערכת, לא שגיאות אנושיות\nכדי לשפר תהליכים",
      choices: [
        "\u200Fניתוח incident ללא האשמת אנשים\nמחפש כשלי מערכת, לא שגיאות אנושיות\nכדי לשפר תהליכים",
        "\u200Fדוח שמגן על חברה מתביעות משפטיות",
        "\u200Fניתוח ביצועים שבועי",
        "\u200Freview קוד אחרי deploy לפרודקשן"
      ],
      explanation: "\u200F🤝 Blameless Culture\n• אנשים לא מקבלים עונש\n• → מוכנים לדווח על בעיות\n• → ארגון לומד\n\n📖 Google SRE\n• If a human error caused the outage, the system design failed\n\n🔍 5 Whys\n• Why did DB go down? → disk full\n• Why? → log rotation broke\n• Why? → deploy changed config → root cause\n\n📌 Action Items\n• automation, monitoring, runbooks\n• ללא postmortem = אותה תקלה שוב",
      explanationEn: "Blameless Culture: people aren't punished, so they're willing to report issues, and the organization learns. Google SRE: 'If a human error caused the outage, the system design failed.' 5 Whys: Why did DB go down? disk full. Why? log rotation broke. Why? deploy changed config = root cause. Action Items: automation, monitoring, runbooks. Without postmortem = same incident again."
    },
    {
      q: "\u200Fמה Error Budget ב-SRE ואיך משפיע על velocity של פיתוח?",
      correct: "\u200FError Budget = 100% - SLO target\nאם SLO = 99.9%, error budget = 0.1%\n(43.8 דקות/חודש)\nכשה-budget אוזל — מאטים deployments",
      choices: [
        "\u200FError Budget = 100% - SLO target\nאם SLO = 99.9%, error budget = 0.1%\n(43.8 דקות/חודש)\nכשה-budget אוזל — מאטים deployments",
        "\u200FError Budget = מספר ה-bugs המותרים ב-release",
        "\u200FError Budget = זמן שמהנדסים מקדישים ל-bug fixes",
        "\u200FError Budget תמיד 5% ללא קשר ל-SLO"
      ],
      explanation: "\u200F⚖️ SRE Philosophy\n• reliability vs feature velocity\n• Error budget = זמן downtime מותר לפי SLO\n\n📊 חישוב\n• SLO=99.9%: 43.8 min/month budget\n• Incident גרמה ל-20 min downtime = שרפת 46% מה-budget\n\n📋 Policy\n• budget > 50% → deploy בחופשיות\n• budget 0-50% → זהירות\n• budget מאופס → freeze deployments, רק reliability work\n\n📌 התמריץ\n• Dev רוצים ל-deploy מהר = אינטרס גם ב-reliability",
      explanationEn: "SRE Philosophy: reliability vs feature velocity. Error budget = allowed downtime per SLO. Calculation: SLO=99.9%: 43.8 min/month budget. Incident caused 20 min downtime = burned 46% of budget. Policy: budget > 50% = deploy freely; budget 0-50% = caution; budget depleted = freeze deployments, only reliability work. Incentive: devs want to deploy fast = also interested in reliability."
    }
  ],

  // ===== Research Track (301-305) =====
  301: [
    {
      q: "מה ה-Wireshark filter לראות רק חבילות שנשלחו מחדש?",
      correct: "‏tcp.analysis.retransmission",
      choices: [
        "‏tcp.analysis.retransmission",
        "‏tcp.flags.rst == 1",
        "‏tcp.analysis.lost_segment",
        "‏tcp.retransmit == true"
      ],
      explanation: "‏tcp.analysis.retransmission מסנן חבילות שה-TCP stack זיהה כretransmissions. tcp.analysis.fast_retransmission מסנן fast retransmits ‎(אחרי 3 dup-ACKs)‎. tcp.analysis.duplicate_ack מציג ACKים כפולים שמסמנים אובדן.",
      explanationEn: "tcp.analysis.retransmission filters packets that the TCP stack identified as retransmissions. tcp.analysis.fast_retransmission filters fast retransmits (after 3 dup-ACKs). tcp.analysis.duplicate_ack shows duplicate ACKs that signal packet loss."
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
      explanation: "‏Zero Window הוא כשה-receiver מכריז שאין לו buffer פנוי (window size=0). ה-sender חייב להפסיק לשלוח. בדרך כלל סימן שה-application לא קורא מ-socket מהר מספיק — בעיית CPU או כניסה לקוד.",
      explanationEn: "Zero Window occurs when the receiver announces no available buffer (window size=0). The sender must stop sending. Usually indicates the application is not reading from the socket fast enough — a CPU issue or code blocking."
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
      explanation: "‏TCP Stream Graphs ב-Wireshark כוללים: Time-Sequence (CWND), Throughput, Round-trip Time, Window Scaling. הגרף הכי שימושי לניפוי: Time-Sequence — כל retransmission מופיע כנקודה שנוחתת ב-Y נמוך יותר, ו-CWND צניחה.",
      explanationEn: "TCP Stream Graphs in Wireshark include: Time-Sequence (CWND), Throughput, Round-trip Time, Window Scaling. The most useful for troubleshooting: Time-Sequence — every retransmission appears as a dot dropping to a lower Y value, and CWND drops."
    },
        {
      q: "מה Wireshark display filter שמציג רק HTTP GET requests?",
      correct: "‏http.request.method == 'GET'",
      choices: [
        "‏http.request.method == 'GET'",
        "‏http.method = GET",
        "‏filter http GET",
        "‏tcp.payload contains 'GET'"
      ],
      explanation: "‏Wireshark display filters (≠ capture filters!): http.request.method == 'GET'. ‏Capture filter (BPF syntax): host 192.168.1.1 and port 80. שימושיים: ip.src == 10.0.0.1, tcp.port == 443, dns.qry.name contains 'google', tls.handshake.type == 1 (ClientHello), http.response.code >= 400. tcp.analysis.retransmission לבעיות רשת. ‏Statistics → Protocol Hierarchy להבנת composition. ‏Follow → TCP Stream לראות full conversation בקריאה.",
      explanationEn: "Wireshark display filters (not capture filters!): http.request.method == 'GET'. Capture filter (BPF syntax): host 192.168.1.1 and port 80. Useful filters: ip.src == 10.0.0.1, tcp.port == 443, dns.qry.name contains 'google', tls.handshake.type == 1 (ClientHello), http.response.code >= 400. tcp.analysis.retransmission for network issues. Statistics, Protocol Hierarchy for composition. Follow, TCP Stream for full conversation."
    },
        {
      q: "מה TLS handshake נראה ב-Wireshark ואיזה packet ראשון?",
      correct: "‏ClientHello הוא הpacket הראשון — מכיל TLS version, cipher suites, וSNI ‎(שם הדומיין)‎ — filter: tls.handshake.type == 1",
      choices: [
        "‏ClientHello הוא הpacket הראשון — מכיל TLS version, cipher suites, וSNI ‎(שם הדומיין)‎ — filter: tls.handshake.type == 1",
        "‏ServerHello ראשון — השרת מתחיל negotiation",
        "‏Certificate ראשון — השרת שולח תעודה לפני הכל",
        "‏TCP SYN הוא ה-TLS handshake הראשון"
      ],
      explanation: "‏TLS 1.3 Handshake ב-Wireshark: 1) TCP SYN/SYN-ACK/ACK (TCP layer). ‏2) ClientHello (TLS record type 22, handshake type 1): TLS version, random, session ID, cipher suites, extensions (SNI, ALPN, supported_groups). ‏3) ServerHello + {Encrypted Extensions + Certificate + CertificateVerify + Finished} ‎(מוצפן!)‎. ‏4) Client {Finished}. ‏5) Application Data. ‏TLS 1.3 = 1-RTT vs TLS 1.2 = 2-RTT. לפענוח: Wireshark → Preferences → TLS → (Pre)-Master-Secret log file.",
      explanationEn: "TLS 1.3 Handshake in Wireshark: 1) TCP SYN/SYN-ACK/ACK (TCP layer). 2) ClientHello (TLS record type 22, handshake type 1): TLS version, random, session ID, cipher suites, extensions (SNI, ALPN, supported_groups). 3) ServerHello + encrypted extensions, certificate, verify, and finished. 4) Client finished. 5) Application Data. TLS 1.3 = 1-RTT vs TLS 1.2 = 2-RTT. To decrypt: Wireshark Preferences, TLS, (Pre)-Master-Secret log file."
    }
  ],
  302: [
    {
      q: "מה ההבדל העיקרי בין iBGP ל-eBGP?",
      correct: "‏iBGP פועל בתוך AS אחד, eBGP פועל בין ASים שונים",
      choices: [
        "‏iBGP פועל בתוך AS אחד, eBGP פועל בין ASים שונים",
        "‏iBGP יותר מהיר מ-eBGP",
        "‏eBGP משמש לrouting פנימי בלבד",
        "‏iBGP דורש חיבור ישיר, eBGP לא"
      ],
      explanation: "‏iBGP = Internal BGP, בתוך אותו AS. eBGP = External BGP, בין ASים שונים. ההבדלים הטכניים: TTL (iBGP=255, eBGP=1), next-hop behavior, ו-loop prevention rule ‎(iBGP router לא מפרסם מסלול iBGP לiBGP אחר ← חייב full mesh או Route Reflectors)‎.",
      explanationEn: "iBGP = Internal BGP, within the same AS. eBGP = External BGP, between different ASes. Technical differences: TTL (iBGP=255, eBGP=1), next-hop behavior, and loop prevention rule (iBGP router won't advertise an iBGP route to another iBGP peer — requires full mesh or Route Reflectors)."
    },
    {
      q: "בבחירת מסלול BGP, איזה קריטריון בודקים ראשון?",
      correct: "‏Weight (Cisco) — ערך גבוה יותר מנצח",
      choices: [
        "‏Weight (Cisco) — ערך גבוה יותר מנצח",
        "‏AS Path Length — קצר יותר מנצח",
        "‏Local Preference — ערך גבוה יותר מנצח",
        "‏MED — ערך נמוך יותר מנצח"
      ],
      explanation: "סדר path selection ב-BGP: 1) Weight (Cisco), 2) Local Preference, 3) Locally originated, 4) AS Path Length ‎(קצר יותר)‎, 5) Origin, 6) MED ‎(נמוך יותר)‎, 7) eBGP > iBGP, 8) IGP metric. ברוב הRFC implementations, Local Preference הוא הראשון ‎(Weight הוא Cisco proprietary)‎.",
      explanationEn: "BGP path selection order: 1) Weight (Cisco), 2) Local Preference, 3) Locally originated, 4) AS Path Length (shorter wins), 5) Origin, 6) MED (lower wins), 7) eBGP > iBGP, 8) IGP metric. In most RFC implementations, Local Preference is first (Weight is Cisco proprietary)."
    },
    {
      q: "מה גרמה תקרית Pakistan Telecom 2008 עם YouTube?",
      correct: "‏Pakistan פרסמה /24 ספציפי יותר מה-/22 של YouTube — BGP Longest Prefix Match ניצח",
      choices: [
        "‏Pakistan פרסמה /24 ספציפי יותר מה-/22 של YouTube — BGP Longest Prefix Match ניצח",
        "‏Pakistan פרצה לשרתי YouTube ישירות",
        "‏YouTube ביצעה BGP hijacking על Pakistan",
        "שגיאה ב-DNS הפנתה לservers שגויים"
      ],
      explanation: "‏BGP Longest Prefix Match: /24 תמיד מנצח /22 כי הוא ספציפי יותר. ‏Pakistan פרסמה 208.65.153.0/24 ←  route ספציפי יותר מ-208.65.153.0/22 של YouTube. ‏ISPים בכל העולם העדיפו אותו. ‏75% מטראפיק YouTube הופנה ל-Pakistan תוך דקות. ‏RPKI נוצר בדיוק כדי למנוע זאת.",
      explanationEn: "BGP Longest Prefix Match: /24 always wins over /22 because it is more specific. Pakistan announced 208.65.153.0/24 — a more specific route than YouTube's 208.65.153.0/22. ISPs worldwide preferred it. 75% of YouTube traffic was redirected to Pakistan within minutes. RPKI was created precisely to prevent this."
    },
        {
      q: "מה BGP AS Path ואיך הוא מונע routing loops?",
      correct: "‏AS Path = רשימת AS numbers שהmessage עבר — כל router שרואה את ה-ASN שלו ב-Path — דוחה את ה-route",
      choices: [
        "‏AS Path = רשימת AS numbers שהmessage עבר — כל router שרואה את ה-ASN שלו ב-Path — דוחה את ה-route",
        "‏AS Path הוא metric לבחירת route הטוב ביותר",
        "‏AS Path מגן מפני DDoS attacks על ה-routing",
        "‏AS Path מוצפן ב-BGPsec לאבטחה"
      ],
      explanation: "‏AS Path Loop Prevention: router מקבל UPDATE עם AS_PATH: [64501, 64502, 64503]. אם ה-ASN שלו (64501) מופיע בpath → DISCARD (loop!). ‏AS Path גם משמש כroute selection attribute ‎(קצר יותר = מועדף ברירת מחדל)‎. ‏AS Path Prepending: מוסיפים ASN שלנו מספר פעמים → נראה ארוך יותר → route פחות מועדף (traffic engineering). ‏ASPATH regex filter: ip as-path access-list 10 permit ^64501_.",
      explanationEn: "AS Path Loop Prevention: router receives UPDATE with AS_PATH: [64501, 64502, 64503]. If its own ASN (64501) appears in the path, it discards the route (loop!). AS Path also serves as a route selection attribute (shorter = preferred by default). AS Path Prepending: adding your ASN multiple times makes the route appear longer and less preferred (traffic engineering)."
    }
  ],
  303: [
    {
      q: "מה ההבדל בין Recursive Resolver ל-Authoritative Nameserver?",
      correct: "‏Recursive Resolver עושה את כל חקירת השרשרת — Authoritative NS מחזיר את ה-IP האמיתי",
      choices: [
        "‏Recursive Resolver עושה את כל חקירת השרשרת — Authoritative NS מחזיר את ה-IP האמיתי",
        "‏Recursive Resolver הוא Root Server",
        "‏Authoritative NS מחזיר רק NXDOMAIN",
        "אין הבדל — שניהם אותה תפקיד"
      ],
      explanation: "‏Recursive Resolver (8.8.8.8, 1.1.1.1) שואל את Root → TLD → Auth בשביל הclient ומחזיר תוצאה מcache. ‏Authoritative NS (ns1.google.com) הוא המקור הסמכותי לdomain ספציפי — רק הוא יודע את ה-IP האמיתי.",
      explanationEn: "Recursive Resolver (8.8.8.8, 1.1.1.1) queries Root, TLD, then Authoritative on behalf of the client and returns results from cache. Authoritative NS (ns1.google.com) is the authoritative source for a specific domain — only it knows the real IP."
    },
    {
      q: "מה DNS-over-HTTPS (DoH) מספק שDNS רגיל לא?",
      correct: "הצפנה של DNS queries — ה-ISP רואה HTTPS ל-resolver ולא שאילתות DNS ספציפיות",
      choices: [
        "הצפנה של DNS queries — ה-ISP רואה HTTPS ל-resolver ולא שאילתות DNS ספציפיות",
        "‏DNS מהיר יותר",
        "תמיכה ב-IPv6",
        "אימות קריפטוגרפי של תשובות DNS"
      ],
      explanation: "‏DoH שולח DNS queries מוצפנות על HTTPS (port 443) — ה-ISP רואה HTTPS traffic לCloudflare/Google, לא את הdomains שאתה מבקר. ‏DNSSEC מספק אימות קריפטוגרפי ‎(שאלה נפרדת)‎. ‏DoT (port 853) הוא אלטרנטיבה — DNS over TLS.",
      explanationEn: "DoH sends encrypted DNS queries over HTTPS (port 443) — the ISP sees HTTPS traffic to Cloudflare/Google, not which domains you are visiting. DNSSEC provides cryptographic authentication (separate concern). DoT (port 853) is an alternative — DNS over TLS."
    },
    {
      q: "איך Anycast עובד עם 8.8.8.8 של Google?",
      correct: "‏Google מפרסמת 8.8.8.8 ממספר מקומות עם BGP — BGP מנתב לpoint הקרוב ביותר",
      choices: [
        "‏Google מפרסמת 8.8.8.8 ממספר מקומות עם BGP — BGP מנתב לpoint הקרוב ביותר",
        "8.8.8.8 הוא IP ייחודי לשרת ספציפי בארה\"ב",
        "‏DNS Round-Robin מחלק בין שרתים",
        "‏CDN מפנה requests לפי Geo-IP"
      ],
      explanation: "‏Anycast: אותה כתובת IP מפורסמת ממספר locations ב-BGP. ‏BGP always routes to the closest/best path. תוצאה: משתמש בישראל מגיע לdatacenter באירופה/ישראל, לא ב-US. ‏8.8.8.8 רץ מ-dozens of locations — RTT נמוך מכל מקום בעולם.",
      explanationEn: "Anycast: the same IP address is advertised from multiple locations via BGP. BGP always routes to the closest/best path. Result: a user in Israel reaches a datacenter in Europe/Israel, not in the US. 8.8.8.8 runs from dozens of locations — low RTT from anywhere in the world."
    }
  ],
  304: [
    {
      q: "מה HOL Blocking שHTTP/2 עדיין סובל ממנו?",
      correct: "אובדן TCP packet אחד קופא את כל ה-streams בחיבור — TCP לא יודע על streams נפרדים",
      choices: [
        "אובדן TCP packet אחד קופא את כל ה-streams בחיבור — TCP לא יודע על streams נפרדים",
        "‏HTTP/2 לא תומך ב-multiplexing",
        "‏HTTP/2 מוגבל ל-6 בקשות במקביל",
        "ה-server לא יכול לשלוח data לפני שה-client ביקש"
      ],
      explanation: "‏HTTP/2 הביא multiplexing ‎(מספר streams בחיבור אחד)‎, אבל TCP מטפל בstream כbyte stream אחד רציף. אובדן packet → TCP מחכה לretransmission → כל ה-streams קפואים. ‏HTTP/3 על QUIC פותר זאת: כל stream עצמאי, אובדן ב-stream אחד לא חוסם אחרים.",
      explanationEn: "HTTP/2 introduced multiplexing (multiple streams in one connection), but TCP treats the connection as a single sequential byte stream. Packet loss causes TCP to wait for retransmission, freezing all streams. HTTP/3 on QUIC solves this: each stream is independent, loss in one stream does not block others."
    },
    {
      q: "מה QUIC Connection Migration מספק?",
      correct: "מעבר בין WiFi לסלולרי ללא ניתוק — Connection ID שמר על הזהות, לא IP:port",
      choices: [
        "מעבר בין WiFi לסלולרי ללא ניתוק — Connection ID שמר על הזהות, לא IP:port",
        "חיבור מהיר יותר בהתחלה",
        "כפילות חיבורים לredundancy",
        "‏migration בין servers שונים"
      ],
      explanation: "‏TCP זוהה לפי tuple (src IP, src port, dst IP, dst port). מעבר WiFi → סלולרי = IP חדש = חיבור נשבר. ‏QUIC זוהה לפי Connection ID אקראי — ה-server ממשיך לדעת מי אתה גם אחרי שינוי IP. ‏TLS 1.3 session resumption מאפשר המשך ללא re-handshake.",
      explanationEn: "TCP is identified by tuple (src IP, src port, dst IP, dst port). WiFi to cellular transition = new IP = broken connection. QUIC is identified by a random Connection ID — the server continues to know who you are even after IP change. TLS 1.3 session resumption allows continuation without re-handshake."
    },
    {
      q: "מה יתרון 0-RTT ב-QUIC?",
      correct: "בחיבור חוזר, ה-client שולח data עם ה-ClientHello הראשון — אפס round trips",
      choices: [
        "בחיבור חוזר, ה-client שולח data עם ה-ClientHello הראשון — אפס round trips",
        "‏0-RTT = ללא latency בכלל",
        "‏QUIC תמיד מהיר יותר מTCP",
        "‏0-RTT עובד רק בתוך אותה network"
      ],
      explanation: "‏TCP + TLS = 1-3 RTT לפני data. ‏QUIC עם session resumption: client שומר session ticket מחיבור קודם, שולח data מיד עם ה-first packet (0-RTT). מגבלה: 0-RTT data פגיע ל-replay attacks — לכן משתמשים בו רק לread-only requests.",
      explanationEn: "TCP + TLS = 1-3 RTT before data. QUIC with session resumption: client saves session ticket from previous connection, sends data immediately with the first packet (0-RTT). Limitation: 0-RTT data is vulnerable to replay attacks — therefore used only for read-only requests."
    },
        {
      q: "מה HPACK ב-HTTP/2 ו-QPACK ב-HTTP/3 ולמה פותחו?",
      correct: "אלגוריתמי דחיסת headers — HTTP/1.1 שולח headers כtext חוזר בכל request ‎(כולל cookies גדולים)‎ — HPACK/QPACK מקודדים headers בindex table לחיסכון bandwidth",
      choices: [
        "אלגוריתמי דחיסת headers — HTTP/1.1 שולח headers כtext חוזר בכל request ‎(כולל cookies גדולים)‎ — HPACK/QPACK מקודדים headers בindex table לחיסכון bandwidth",
        "‏HPACK = encryption layer של HTTP/2",
        "‏QPACK = QUIC Packet compression",
        "שניהם מדחסים HTTP body, לא headers"
      ],
      explanation: "‏HTTP/1.1: כל request שולח User-Agent, Accept, Cookie מחדש — headers גדולים כ-1-2KB. ‏HPACK (RFC 7541): Static table (61 common headers), Dynamic table ‎(headers שנראו ב-session)‎. 'GET /index.html' → index 2 ‎(1 byte במקום 20 bytes!)‎. ‏CRIME/BREACH attacks: ניצלו TLS+gzip compression לחשיפת secrets. ‏HPACK: header-only, לא body → נמנע CRIME. ‏QPACK (HTTP/3): HPACK for QUIC — מותאם לmultiplexing ללא blocking.",
      explanationEn: "HTTP/1.1: every request resends User-Agent, Accept, Cookie — headers can be 1-2KB. HPACK (RFC 7541): Static table (61 common headers), Dynamic table (headers seen in session). 'GET /index.html' becomes index 2 (1 byte instead of 20!). CRIME/BREACH attacks exploited TLS+gzip compression to reveal secrets. HPACK: header-only, not body, prevents CRIME. QPACK (HTTP/3): HPACK adapted for QUIC — handles multiplexing without blocking."
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
      explanation: "‏eBPF Verifier בודק: 1) No unbounded loops — ה-program חייב לסיים, 2) No out-of-bounds memory access, 3) No uninitialized reads, 4) Return codes חוקיים. רק אחרי verification מוצלח ה-kernel מריץ את ה-bytecode (JIT compiled). זה ה-key feature שמאפשר run code in kernel safely.",
      explanationEn: "eBPF Verifier checks: 1) No unbounded loops — program must terminate, 2) No out-of-bounds memory access, 3) No uninitialized reads, 4) Valid return codes. Only after successful verification does the kernel run the bytecode (JIT compiled). This is the key feature enabling safe code execution in the kernel."
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
      explanation: "‏XDP (eXpress Data Path) פועל ב-NIC driver level, לפני ה-kernel network stack. ‏XDP_DROP = drop מיידי, אפס overhead של kernel. ‏XDP_PASS = עובר ל-kernel רגיל. ‏XDP_TX = שולח בחזרה (hairpin). ‏XDP_REDIRECT = מפנה. זו הסיבה שCloudflare יכולה לבלוע 2.5B pps של DDoS.",
      explanationEn: "XDP (eXpress Data Path) operates at NIC driver level, before the kernel network stack. XDP_DROP = immediate drop, zero kernel overhead. XDP_PASS = passes to normal kernel. XDP_TX = sends back (hairpin). XDP_REDIRECT = redirects. This is why Cloudflare can absorb 2.5 billion packets per second of DDoS."
    },
    {
      q: "מה היתרון של Cilium על iptables בKubernetes?",
      correct: "‏eBPF maps = O(1) lookup לעומת iptables = O(n) בkubernetes עם אלפי rules",
      choices: [
        "‏eBPF maps = O(1) lookup לעומת iptables = O(n) בkubernetes עם אלפי rules",
        "‏Cilium תומך ב-IPv4, iptables רק IPv6",
        "‏iptables לא עובד ב-containers",
        "‏Cilium מהיר כי כותב ב-Go"
      ],
      explanation: "‏Kubernetes עם 1000 services = iptables עם אלפי rules = כל packet עובר O(n) חיפוש ליניארי. ‏Cilium מחליף iptables בeBPF hash maps = O(1) בכל גודל. בנוסף: Cilium/Hubble מספקים observability מלאה (pod → pod traffic), security policies ברמת L7, וביצועים שלא תאמין.",
      explanationEn: "Kubernetes with 1000 services = iptables with thousands of rules = every packet goes through O(n) linear search. Cilium replaces iptables with eBPF hash maps = O(1) at any size. Additionally: Cilium/Hubble provides full observability (pod to pod traffic), L7 security policies, and incredible performance."
    },
    {
      q: "מה eBPF map ואיזה types נפוצים?",
      correct: "מבנה נתונים shared בין eBPF programs לבין kernel/userspace — types: BPF_MAP_TYPE_HASH, ARRAY, RINGBUF, PERF_EVENT_ARRAY",
      choices: [
        "מבנה נתונים shared בין eBPF programs לבין kernel/userspace — types: BPF_MAP_TYPE_HASH, ARRAY, RINGBUF, PERF_EVENT_ARRAY",
        "‏eBPF map = מיפוי kernel addresses לvirtual addresses",
        "רשימה של eBPF programs שloaded ב-kernel",
        "‏eBPF map = file במערכת קבצים /sys/fs/bpf"
      ],
      explanation: "‏eBPF maps: IPC mechanism בין eBPF programs לuser-space tools. ‏HASH_MAP: key-value store. ‏ARRAY: fixed-size indexed. ‏LRU_HASH: evicts least recently used. ‏RINGBUF: efficient ring buffer לstreaming events לuserspace ‎(מחליף PERF_EVENT_ARRAY)‎. ‏PERCPU variants: lock-free per-CPU storage. בpinning לpath (/sys/fs/bpf/my_map) ניתן לshare בין processes. libbpf API: bpf_map_lookup_elem, bpf_map_update_elem. ‏Cilium: maps לtrack connections, policies, endpoints.",
      explanationEn: "eBPF maps: IPC mechanism between eBPF programs and user-space tools. HASH_MAP: key-value store. ARRAY: fixed-size indexed. LRU_HASH: evicts least recently used. RINGBUF: efficient ring buffer for streaming events to userspace (replaces PERF_EVENT_ARRAY). PERCPU variants: lock-free per-CPU storage. Pinning to path (/sys/fs/bpf/my_map) enables sharing between processes. Cilium uses maps to track connections, policies, endpoints."
    },
    {
      q: "מה ההבדל בין eBPF tracepoints לבין kprobes?",
      correct: "‏Tracepoints: hook points סטטיים מוגדרים ב-kernel code (stable ABI) — kprobes: attach לכל kernel function address ‎(דינמי, עלול להשתנות בין kernel versions)‎",
      choices: [
        "‏Tracepoints: hook points סטטיים מוגדרים ב-kernel code (stable ABI) — kprobes: attach לכל kernel function address ‎(דינמי, עלול להשתנות בין kernel versions)‎",
        "‏kprobes מהירים יותר — tracepoints מאובטחים יותר",
        "‏Tracepoints לuserspace — kprobes לkernel בלבד",
        "אין הבדל מעשי — שניהם attach לאותם מקומות"
      ],
      explanation: "‏Tracepoints (sys_enter/sys_exit, net:netif_rx, sched:sched_switch): מוגדרים בmacro TRACE_EVENT בkernel source. ‏Stable: נשמרים בין kernel versions. uprobes: כמו kprobes אבל לuserspace functions. ‏Perf events: hardware counters (CPU cycles, cache misses). bpftrace one-liner: bpftrace -e 'tracepoint:syscalls:sys_enter_read { printf(\\\"%s read %d bytes\\n\\\", comm, args->count); }'. libbpf skeleton: generate C bindings מBTF.",
      explanationEn: "Tracepoints (sys_enter/sys_exit, net:netif_rx, sched:sched_switch): defined with TRACE_EVENT macro in kernel source. Stable: preserved between kernel versions. uprobes: like kprobes but for userspace functions. Perf events: hardware counters (CPU cycles, cache misses). bpftrace example: tracepoint:syscalls:sys_enter_read prints process name and bytes read. libbpf skeleton generates C bindings from BTF."
    },
    {
      q: "מה Cilium ואיך משתמש ב-eBPF לCNI?",
      correct: "‏CNI plugin שמחליף iptables ב-eBPF — O(1) policy lookup במקום O(n) iptables rules, L7 visibility, Hubble observability",
      choices: [
        "‏CNI plugin שמחליף iptables ב-eBPF — O(1) policy lookup במקום O(n) iptables rules, L7 visibility, Hubble observability",
        "‏Cilium = Calico מבוסס eBPF — אותו vendor",
        "‏Cilium עובד רק עם kernel 6.0+",
        "‏Cilium = service mesh המחליף Istio"
      ],
      explanation: "‏Cilium eBPF CNI: kube-proxy replacement ‎(eBPF LB במקום iptables)‎, Network Policies (L3/L4/L7), transparent encryption (WireGuard), Hubble (observability — flow visibility per pod, DNS, HTTP). iptables bottleneck: 10,000 services = 10,000 rules, linear scan. eBPF hash maps: O(1). ‏Cilium בBenchmark: 20-40% better throughput vs kube-proxy. ‏CNCF Graduated project. ‏Service Mesh via Sidecar-free (eBPF replaces Envoy sidecars in Cilium Service Mesh).",
      explanationEn: "Cilium eBPF CNI: kube-proxy replacement (eBPF LB instead of iptables), Network Policies (L3/L4/L7), transparent encryption (WireGuard), Hubble (observability — flow visibility per pod, DNS, HTTP). iptables bottleneck: 10,000 services = 10,000 rules, linear scan. eBPF hash maps: O(1). Cilium benchmark: 20-40% better throughput vs kube-proxy. CNCF Graduated project. Service Mesh via Sidecar-free (eBPF replaces Envoy sidecars)."
    }
  ],

  207: [
    {
      q: "\u200Fמה ההבדל בין Terraform apply לבין Terraform plan?",
      correct: "\u200Fplan מציג מה ישתנה (dry run)\napply מבצע את השינויים בפועל",
      choices: [
        "\u200Fplan מציג מה ישתנה (dry run)\napply מבצע את השינויים בפועל",
        "\u200Fplan יוצר resources, apply מוחק אותם",
        "\u200Fשניהם מבצעים שינויים, ההבדל הוא מהירות בלבד",
        "\u200Fplan עובד ב-AWS בלבד, apply עובד בכל cloud"
      ],
      explanation: "\u200F📋 terraform plan\n• dry run שמחשב את ה-diff\n• בין ה-HCL לבין ה-state הנוכחי\n• מציג מה ייצור/ישנה/ימחק\n\n🚀 terraform apply\n• מבצע את אותם שינויים בפועל\n\n📌 Best Practice\n• תמיד run plan ותעיין ב-output\n• לפני apply בפרודקשן",
      explanationEn: "terraform plan: dry run that calculates the diff between HCL and current state. Shows what will be created/changed/deleted. terraform apply: executes those changes. Best practice: always run plan and review output before apply in production."
    },
    {
      q: "\u200Fמה זה Terraform State ולמה חשוב לשמור אותו ב-S3?",
      correct: "\u200FState הוא המיפוי בין HCL ל-resources אמיתיים\nב-S3 כדי שהצוות כולו ישתמש באותו state",
      choices: [
        "\u200FState הוא המיפוי בין HCL ל-resources אמיתיים\nב-S3 כדי שהצוות כולו ישתמש באותו state",
        "\u200FState הוא הגדרות ה-provider — ב-S3 ל-backup בלבד",
        "\u200FState שומר את קוד ה-HCL המקומפל",
        "\u200FState רלוונטי רק ל-multi-cloud deployments"
      ],
      explanation: "\u200F💾 State — הלב של Terraform\n• מפה מי יצר מה\n• בלי state, Terraform לא יודע מה קיים\n\n☁️ S3 + DynamoDB\n• S3 מאחסן את ה-tfstate\n• DynamoDB מספק locking\n• כדי שלא שני אנשים יריצו apply במקביל (state corruption)\n\n📌 remote state = must בצוות",
      explanationEn: "State is the heart of Terraform — maps who created what. Without state, Terraform doesn't know what exists. S3 + DynamoDB: S3 stores the tfstate, DynamoDB provides locking to prevent two people running apply simultaneously (state corruption). Remote state is a must for teams."
    },
    {
      q: "\u200Fמה ההבדל בין Cattle לבין Pets בהקשר של IaC?",
      correct: "\u200FPets = שרתים ייחודיים שמרפאים\nCattle = שרתים זהים שמחליפים\nIaC מעדיף Cattle",
      choices: [
        "\u200FPets = שרתים ייחודיים שמרפאים\nCattle = שרתים זהים שמחליפים\nIaC מעדיף Cattle",
        "\u200FCattle = שרתים גדולים (scale-up), Pets = שרתים קטנים",
        "\u200FPets = cloud, Cattle = on-premise",
        "\u200Fההבדל הוא בסוג ה-OS בלבד"
      ],
      explanation: "\u200F📖 Netflix הציגה את המטפורה ב-2012\n\n🐱 Pets\n• dev-01, big-iron\n• לכל אחד שם, ייחודי, ידנית מוגדר\n\n🐄 Cattle\n• web-047, מספרים, זהים, immutable\n• Terraform + Auto Scaling = Cattle\n• instance מת? Auto Scaling מייצר אחד חדש מה-template\n\n📌 Chaos Monkey\n• Netflix הורג servers בפרודקשן ביזמה\n• כדי לוודא ה-architecture Cattle-ready",
      explanationEn: "Netflix introduced this metaphor in 2012. Pets: dev-01, big-iron — each has a name, unique, manually configured. Cattle: web-047, numbered, identical, immutable. Terraform + Auto Scaling = Cattle. Instance dies? Auto Scaling creates a new one from the template. Chaos Monkey: Netflix kills servers in production intentionally to verify the architecture is Cattle-ready."
    },
    {
      q: "\u200Fמה Terraform Module ולמה משתמשים בהם?",
      correct: "\u200Fקבצי .tf מקובצים ליחידה לוגית לשימוש חוזר\nמאפשרים DRY, encapsulation,\nversioning ו-sharing של infrastructure patterns",
      choices: [
        "\u200Fקבצי .tf מקובצים ליחידה לוגית לשימוש חוזר\nמאפשרים DRY, encapsulation,\nversioning ו-sharing של infrastructure patterns",
        "\u200FTerraform plugin שמוריד providers",
        "\u200Fממשק גרפי לניהול Terraform plans",
        "\u200FModule = workspace נפרד ב-Terraform Cloud"
      ],
      explanation: "\u200F📁 Module Structure\n• modules/vpc/main.tf + variables.tf + outputs.tf\n\n🔧 Usage\n• module 'prod-vpc' { source = './modules/vpc' }\n• cidr = '10.0.0.0/16'\n• azs = ['us-east-1a', 'us-east-1b']\n\n📦 Terraform Registry\n• hashicorp/vpc/aws — modules מוכנים מה-community\n• version = '~> 5.0' ל-pin version\n\n📌 DRY\n• same module ל-dev/staging/prod עם variables שונים",
      explanationEn: "Module Structure: modules/vpc/main.tf + variables.tf + outputs.tf. Usage: module 'prod-vpc' { source = './modules/vpc' }; cidr = '10.0.0.0/16'; azs = ['us-east-1a', 'us-east-1b']. Terraform Registry: hashicorp/vpc/aws — community-ready modules. version = '~> 5.0' for version pinning. DRY: same module for dev/staging/prod with different variables."
    }
  ],

  208: [
    {
      q: "\u200Fמה ההבדל בין RED method לבין USE method ב-monitoring?",
      correct: "\u200FRED (Rate/Errors/Duration) למדידת services\nUSE (Utilization/Saturation/Errors) למדידת resources",
      choices: [
        "\u200FRED (Rate/Errors/Duration) למדידת services\nUSE (Utilization/Saturation/Errors) למדידת resources",
        "\u200FRED ל-backend, USE ל-frontend",
        "\u200FUSE ל-Kubernetes, RED ל-VM",
        "\u200Fשניהם מדדים זהים עם שמות שונים"
      ],
      explanation: "\u200F🔴 RED שואל\n• כמה requests לשנייה?\n• כמה נכשלים?\n• כמה זמן לוקח?\n• מתאים ל-microservices ול-APIs\n\n🔧 USE שואל\n• כמה CPU/Memory בשימוש?\n• האם יש queue buildup?\n• יש errors ב-hardware?\n• מתאים ל-infrastructure (servers, disks, network)\n\n📌 Brendan Gregg (Netflix) פיתח את USE method",
      explanationEn: "RED asks: How many requests per second? How many fail? How long do they take? Suitable for microservices and APIs. USE asks: How much CPU/Memory is in use? Is there queue buildup? Are there hardware errors? Suitable for infrastructure (servers, disks, network). Brendan Gregg (Netflix) developed the USE method."
    },
    {
      q: "\u200Fמה עושה הפקודה histogram_quantile(0.99, ...) ב-PromQL?",
      correct: "\u200Fמחשבת את ה-percentile ה-99 של ה-latency\nה-latency שמתחתיו 99% מה-requests",
      choices: [
        "\u200Fמחשבת את ה-percentile ה-99 של ה-latency\nה-latency שמתחתיו 99% מה-requests",
        "\u200Fמחשבת ממוצע של 99 הנקודות האחרונות",
        "\u200Fמציגה את 99% מה-metrics ללא ה-outliers",
        "\u200Fמגדירה alert אם ה-latency עולה על 99ms"
      ],
      explanation: "\u200F📊 P99 Latency\n• histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m]))\n• פירוש: 99% מה-requests הסתיימו בזמן הזה או פחות\n• ה-1% הגרועים ביותר = הזנב\n\n🎯 למה P99?\n• SLOs בגוגל מוגדרים ב-P99\n• ממוצע מסתיר latency spikes\n\n📌 rate() קודם על ה-bucket = חשוב לחישוב נכון",
      explanationEn: "P99 Latency: histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m])). Meaning: 99% of requests completed in this time or less. The worst 1% = the tail. Why P99? Google SLOs are defined at P99. Averages hide latency spikes. Important: rate() must be applied to the bucket first for correct calculation."
    },
    {
      q: "\u200Fמה ה-pull model של Prometheus לעומת push model?",
      correct: "\u200FPrometheus scrapes metrics מ-services בעצמו (pull)\nלעומת Graphite/StatsD ש-services דוחפים אליהם (push)",
      choices: [
        "\u200FPrometheus scrapes metrics מ-services בעצמו (pull)\nלעומת Graphite/StatsD ש-services דוחפים אליהם (push)",
        "\u200Fpull = real-time, push = batch",
        "\u200Fpull מהיר יותר כי לא צריך network",
        "\u200Fpush model אבטחתי יותר"
      ],
      explanation: "\u200F📡 Prometheus pull\n• מגדיר scrape_configs עם targets\n• Prometheus שולח GET /metrics כל 15s\n\n✅ יתרון\n• Prometheus שולט מי נסרק\n• קל ל-healthcheck (אם scrape נכשל = service down)\n\n❌ חיסרון\n• services חייבים לחשוף /metrics endpoint\n\n📌 Pushgateway קיים ל-jobs קצרים שלא חיים מספיק ל-scrape",
      explanationEn: "Prometheus pull: configures scrape_configs with targets. Prometheus sends GET /metrics every 15s. Advantage: Prometheus controls who is scraped. Easy healthcheck (if scrape fails = service down). Disadvantage: services must expose /metrics endpoint. Pushgateway exists for short-lived jobs that don't live long enough for scraping."
    },
    {
      q: "\u200Fמה PromQL query שמחשב request rate ב-5 דקות האחרונות?",
      correct: "\u200Frate(http_requests_total[5m])\nמחשב שיעור שינוי per-second של counter\nבחלון זמן של 5 דקות",
      choices: [
        "\u200Frate(http_requests_total[5m])\nמחשב שיעור שינוי per-second של counter\nבחלון זמן של 5 דקות",
        "\u200Favg(http_requests_total, 5m)",
        "\u200Fcount(http_requests[5m])",
        "\u200Fsum(requests) over 5m"
      ],
      explanation: "\u200F📊 rate() vs irate()\n• rate([5m]) = average rate over window (stable, ל-alerts)\n• irate([5m]) = instant rate (2 last samples, volatile, ל-graphs)\n\n🔧 פונקציות נוספות\n• increase(counter[1h]) = עליה מוחלטת בשעה\n• sum(rate(http_requests_total[5m])) by (status_code): breakdown לפי status\n• avg_over_time(gauge[1h]): ממוצע של gauge בשעה\n• histogram_quantile(0.99, rate(request_duration_bucket[5m])): P99 latency\n\n📌 החוק: רק rate() על counters (לא gauges)",
      explanationEn: "rate() vs irate(): rate([5m]) = average rate over window (stable, for alerts). irate([5m]) = instant rate (2 last samples, volatile, for graphs). Additional functions: increase(counter[1h]) = absolute increase in an hour. sum(rate(http_requests_total[5m])) by (status_code) for breakdown. avg_over_time(gauge[1h]) for gauge average. Rule: only use rate() on counters (not gauges)."
    },
    {
      q: "\u200Fמה RED Method ב-SRE ומה מדדים בודקים?",
      correct: "\u200FRate (בקשות/שנייה)\nErrors (שיעור שגיאות)\nDuration (latency)\nשלושת המדדים הבסיסיים לבריאות שירות",
      choices: [
        "\u200FRate (בקשות/שנייה)\nErrors (שיעור שגיאות)\nDuration (latency)\nשלושת המדדים הבסיסיים לבריאות שירות",
        "\u200FReliability, Efficiency, Durability",
        "\u200FRequests, Errors, Downtime",
        "\u200FResponse time, Error budget, Deployment frequency"
      ],
      explanation: "\u200F🔴 RED Method (Tom Wilkie, Weave Works)\n• Rate = rate(requests_total[1m])\n• Error = rate(requests_total{status='error'}[1m]) / rate(requests_total[1m])\n• Duration = histogram_quantile(0.95, rate(request_duration_bucket[1m]))\n\n🔧 USE Method (Brendan Gregg)\n• Utilization (CPU%)\n• Saturation (queue depth)\n• Errors\n\n📌 השוואה\n• RED = user perspective\n• USE = resource perspective\n• Golden Signals (Google SRE Book): Latency, Traffic, Errors, Saturation",
      explanationEn: "RED Method (Tom Wilkie, Weave Works): Rate = rate(requests_total[1m]), Error = rate(requests_total{status='error'}[1m]) / rate(requests_total[1m]), Duration = histogram_quantile(0.95, rate(request_duration_bucket[1m])). USE Method (Brendan Gregg): Utilization (CPU%), Saturation (queue depth), Errors. Comparison: RED = user perspective, USE = resource perspective. Golden Signals (Google SRE Book): Latency, Traffic, Errors, Saturation."
    },
    {
      q: "\u200Fמה ההבדל בין Grafana Dashboard לבין Grafana Alert?",
      correct: "\u200FDashboard: ויזואליזציה של metrics לצפייה\nAlert: rule שמוערך periodically\nושולח notification כש-threshold מופר",
      choices: [
        "\u200FDashboard: ויזואליזציה של metrics לצפייה\nAlert: rule שמוערך periodically\nושולח notification כש-threshold מופר",
        "\u200FDashboard ל-prod — Alert ל-dev/staging",
        "\u200FAlert הוא dashboard מיוחד עם רקע אדום",
        "\u200FGrafana עושה רק visualization\nAlerting דרך Prometheus בלבד"
      ],
      explanation: "\u200F🔔 Grafana Alerting (Unified Alerting)\n• Alert Rule → Evaluation Group (כל 1m)\n• → Contact Point (Slack/PagerDuty/Email)\n• → Notification Policy\n\n📊 Alert states\n• Normal, Pending (threshold הופר אך לא עבר for duration)\n• Firing, No Data, Error\n\n📋 דוגמה\n• avg_over_time(up[5m]) < 0.5 (שירות down >50% ב-5 דקות)\n\n📌 Alertmanager\n• deduplication, grouping, routing, silencing\n• Runbook URL: קישור ל-procedure לאחר alert",
      explanationEn: "Grafana Alerting (Unified Alerting): Alert Rule evaluated by Evaluation Group (every 1m), sent to Contact Point (Slack/PagerDuty/Email) via Notification Policy. Alert states: Normal, Pending (threshold breached but duration not met), Firing, No Data, Error. Example: avg_over_time(up[5m]) < 0.5 (service down >50% in 5 minutes). Alertmanager: deduplication, grouping, routing, silencing. Runbook URL: link to procedure after alert."
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
      explanation: "‏Drift = מישהו עשה kubectl edit/patch ישירות על cluster מחוץ לGit. ‏ArgoCD מזהה את ה-diff ומציג status=OutOfSync. עם syncPolicy.automated.selfHeal=true — ArgoCD מחזיר לstate ב-Git אוטומטית תוך דקות. זה הלב של GitOps: Git הוא מקור האמת היחיד.",
      explanationEn: "Drift = someone did kubectl edit/patch directly on cluster outside of Git. ArgoCD detects the diff and shows status=OutOfSync. With syncPolicy.automated.selfHeal=true, ArgoCD reverts to the Git state automatically within minutes. This is the heart of GitOps: Git is the single source of truth."
    },
    {
      q: "מדוע GitOps pull model בטוח יותר מ-push deployment?",
      correct: "בpull model, רק ה-controller בcluster צריך cluster access — ה-CI pipeline לא צריך kubectl credentials",
      choices: [
        "בpull model, רק ה-controller בcluster צריך cluster access — ה-CI pipeline לא צריך kubectl credentials",
        "‏pull model מהיר יותר כי אין network latency",
        "‏push model לא עובד עם Kubernetes",
        "‏pull model מצפין את הmanifests אוטומטית"
      ],
      explanation: "בpush deployment: ל-CI pipeline (GitHub Actions, Jenkins) יש kubeconfig עם cluster admin — זה attack surface ענקי. אם CI נפרץ = cluster נפרץ. בGitOps pull: ArgoCD רץ בתוך ה-cluster, מסתכל על Git מבפנים. שום entity חיצוני לא צריך cluster credentials. זה security posture הרבה יותר טוב.",
      explanationEn: "In push deployment: CI pipeline (GitHub Actions, Jenkins) has kubeconfig with cluster admin — huge attack surface. If CI is breached = cluster is breached. In GitOps pull: ArgoCD runs inside the cluster, watches Git from within. No external entity needs cluster credentials. This is a much better security posture."
    },
    {
      q: "מה הפתרון המועדף לניהול secrets ב-GitOps?",
      correct: "‏Sealed Secrets ‎(מוצפן בpublic key)‎ או External Secrets Operator ‎(מושך מ-Vault/AWS)‎ — לא מאחסנים plaintext בGit",
      choices: [
        "‏Sealed Secrets ‎(מוצפן בpublic key)‎ או External Secrets Operator ‎(מושך מ-Vault/AWS)‎ — לא מאחסנים plaintext בGit",
        "מאחסנים secrets ב-Git עם הרשאות read-only בלבד",
        "מצפינים secrets בbase64 לפני push לGit",
        "‏ArgoCD מנהל secrets אוטומטית ללא כלים נוספים"
      ],
      explanation: "‏base64 הוא לא הצפנה! Sealed Secrets: kubeseal מצפין עם public key של ה-cluster — רק ה-cluster יכול לפענח, בטוח לsave בGit. ‏External Secrets: רץ בcluster, מושך מ-Vault/AWS Secrets Manager/GCP Secret Manager, יוצר Kubernetes Secret מקומי. שניהם פתרונות לגיטימיים. לעולם לא plaintext passwords ב-Git.",
      explanationEn: "base64 is NOT encryption! Sealed Secrets: kubeseal encrypts with the cluster's public key — only the cluster can decrypt, safe to store in Git. External Secrets: runs in cluster, pulls from Vault/AWS Secrets Manager/GCP Secret Manager, creates local Kubernetes Secret. Both are legitimate solutions. Never store plaintext passwords in Git."
    },
        {
      q: "מה ArgoCD Application manifest ומה syncPolicy.automated?",
      correct: "‏Application CRD שמגדיר source (Git repo + path), destination (cluster + namespace), ו-syncPolicy — automated = ArgoCD sync אוטומטי עם כל שינוי ב-Git",
      choices: [
        "‏Application CRD שמגדיר source (Git repo + path), destination (cluster + namespace), ו-syncPolicy — automated = ArgoCD sync אוטומטי עם כל שינוי ב-Git",
        "‏Kubernetes Deployment שמריץ ArgoCD server",
        "‏Helm chart מיוחד לdeploy applications",
        "‏CI/CD pipeline YAML ב-.github/workflows/"
      ],
      explanation: "‏Application manifest: apiVersion: argoproj.io/v1alpha1; kind: Application; spec.source: repoURL + path + targetRevision (branch/tag/commit); spec.destination: server (cluster API URL) + namespace; syncPolicy.automated: prune: true ‎(מוחק resources שנמחקו מGit)‎, selfHeal: true ‎(תוקן אם מישהו שינה ישירות בcluster)‎. ‏ArgoCD poll Git כל 3 דקות ברירת מחדל, webhook = מיידי. ‏App of Apps pattern: Application שמנהלת Applications אחרות.",
      explanationEn: "Application manifest: apiVersion: argoproj.io/v1alpha1; kind: Application; spec.source: repoURL + path + targetRevision (branch/tag/commit); spec.destination: server (cluster API URL) + namespace; syncPolicy.automated: prune: true (deletes resources removed from Git), selfHeal: true (fixes direct cluster changes). ArgoCD polls Git every 3 minutes by default, webhook for immediate sync. App of Apps pattern: Application managing other Applications."
    },
        {
      q: "מה ההבדל בין Argo Rollouts Progressive Delivery לבין Rolling Update רגיל?",
      correct: "‏Rolling Update מחליף pods בהדרגה ללא בקרה — Argo Rollouts מאפשר Canary ‎(% traffic לגרסה חדשה)‎ ו-Blue/Green עם analysis אוטומטי ו-rollback",
      choices: [
        "‏Rolling Update מחליף pods בהדרגה ללא בקרה — Argo Rollouts מאפשר Canary ‎(% traffic לגרסה חדשה)‎ ו-Blue/Green עם analysis אוטומטי ו-rollback",
        "‏Argo Rollouts = Argo CD עם תכונות נוספות בלבד",
        "‏Canary deployment = deploy לcanary server בלבד",
        "‏Progressive Delivery אפשרי רק עם Istio service mesh"
      ],
      explanation: "‏Rolling Update: maxSurge=1, maxUnavailable=0 → pods מוחלפים אחד-אחד, אין visibility לmetrics. ‏Argo Rollouts Canary: steps: setWeight 10% → pause 5m → analysis (error rate < 1%?) → setWeight 50% → analysis → setWeight 100%. אם analysis נכשל → automatic rollback! Blue/Green: שתי סביבות מלאות, traffic switch רגעי. ‏AnalysisTemplate: query Prometheus, Datadog, CloudWatch לvalidation אוטומטי.",
      explanationEn: "Rolling Update: replaces pods gradually without control — maxSurge=1, maxUnavailable=0, no metrics visibility. Argo Rollouts Canary: steps: setWeight 10%, pause 5m, analysis (error rate < 1%?), setWeight 50%, analysis, setWeight 100%. If analysis fails = automatic rollback! Blue/Green: two full environments, instant traffic switch. AnalysisTemplate: query Prometheus, Datadog, CloudWatch for automatic validation."
    },
        {
      q: "מה Fluxcd ואיך שונה מArgoCD?",
      correct: "שניהם GitOps controllers — Flux: CLI-centric, operator per component (source-controller, kustomize-controller) — Argo: UI חזקה, Application CRD, monolithic approach",
      choices: [
        "שניהם GitOps controllers — Flux: CLI-centric, operator per component (source-controller, kustomize-controller) — Argo: UI חזקה, Application CRD, monolithic approach",
        "‏Flux לAWS בלבד — ArgoCD לGCP ו-Azure",
        "‏FluxCD מיושן — ArgoCD החליף אותו לחלוטין",
        "‏Flux לsmall clusters — ArgoCD לenterprise בלבד"
      ],
      explanation: "‏Flux v2 (CNCF Graduated): GitRepository CR → מצביע על repo; Kustomization CR → מיישם path. ‏Multi-tenancy טוב. ‏Notification Controller לSlack/Teams. ‏Image Automation: מעדכן Git אוטומטית עם tag חדש מRegistry! ArgoCD: UI מנצחת לvisibility, ApplicationSet לmulti-cluster/multi-app patterns. ‏App of Apps. ‏RBAC מובנה. בחירה: Argo אם רוצים UI ו-visibility. ‏Flux אם GitOps-first, CLI-driven, multi-tenant setup. שניהם CNCF projects.",
      explanationEn: "Flux v2 (CNCF Graduated): GitRepository CR points to repo; Kustomization CR applies path. Good multi-tenancy. Notification Controller for Slack/Teams. Image Automation: updates Git automatically with new tag from Registry! ArgoCD: winning UI for visibility, ApplicationSet for multi-cluster/multi-app patterns. App of Apps. Built-in RBAC. Choice: Argo for UI and visibility. Flux for GitOps-first, CLI-driven, multi-tenant setup. Both are CNCF projects."
    },
    {
      q: "מה GitOps ואיך שונה מ-CI/CD רגיל?",
      correct: "‏GitOps: Git הוא source of truth לinfrastructure. שינוי ב-Git → agent (ArgoCD) מזהה drift ו-syncs. CI/CD רגיל: pipeline דוחפת לcluster",
      choices: [
        "‏GitOps: Git הוא source of truth לinfrastructure. שינוי ב-Git → agent (ArgoCD) מזהה drift ו-syncs. CI/CD רגיל: pipeline דוחפת לcluster",
        "‏GitOps = CI/CD עם Git בלבד",
        "‏GitOps ו-CI/CD זהים",
        "‏GitOps עובד רק עם Kubernetes"
      ],
      explanation: "‏GitOps principles (Weaveworks): 1) Declarative: כל infra כ-code. ‏2) Versioned: Git כsingle source of truth. ‏3) Automatic: approved changes מיושמות אוטומטית. ‏4) Continuously reconciled: agent מזהה ומתקן drift. ‏Pull vs Push: CI/CD pushes → cluster. ‏GitOps agent pulls from Git. ‏Benefits: audit log (git log), rollback (git revert), consistency.",
      explanationEn: "GitOps principles (Weaveworks): 1) Declarative: all infra as code. 2) Versioned: Git as single source of truth. 3) Automatic: approved changes applied automatically. 4) Continuously reconciled: agent detects and fixes drift. Pull vs Push: CI/CD pushes to cluster. GitOps agent pulls from Git. Benefits: audit log (git log), rollback (git revert), consistency."
    },
    {
      q: "מה Progressive Delivery ב-GitOps context?",
      correct: "‏Argo Rollouts / Flagger: canary deployments, blue/green, A/B testing — שינוי מדורג עם rollback אוטומטי אם metrics נכשלים",
      choices: [
        "‏Argo Rollouts / Flagger: canary deployments, blue/green, A/B testing — שינוי מדורג עם rollback אוטומטי אם metrics נכשלים",
        "‏Progressive Delivery = CI/CD pipeline stages בלבד",
        "‏GitOps לא תומך ב-canary deployments",
        "‏Progressive = deploying לmost servers ראשון"
      ],
      explanation: "‏Argo Rollouts: CRD שמחליף Deployment. ‏Strategy: canary (5% → 20% → 50% → 100%), blueGreen (preview + active). ‏Analysis: Prometheus queries. אם error rate > 5% → automatic rollback. ‏Flagger: Istio/NGINX integration. ‏Feature Flags (LaunchDarkly, Unleash): הפרדת deployment מrelease. ‏Ship dark = deploy without enabling feature.",
      explanationEn: "Argo Rollouts: CRD replacing Deployment. Strategy: canary (5% to 20% to 50% to 100%), blueGreen (preview + active). Analysis: Prometheus queries. If error rate > 5% = automatic rollback. Flagger: Istio/NGINX integration. Feature Flags (LaunchDarkly, Unleash): separate deployment from release. Ship dark = deploy without enabling feature."
    }
  ],

  306: [
    {
      q: "מה Forward Secrecy ב-TLS ולמה זה חשוב?",
      correct: "מייצר session key חדש לכל session (ECDHE) — גנב private key לא יוכל לפענח שיחות עבר",
      choices: [
        "מייצר session key חדש לכל session (ECDHE) — גנב private key לא יוכל לפענח שיחות עבר",
        "הצפנה של TLS קדימה לgenerations עתידיים",
        "‏TLS 1.3 מצפין גם headers של HTTP",
        "‏Forward Secrecy = TLS עם certificate pinning"
      ],
      explanation: "ב-RSA key exchange (TLS 1.2): הclient מצפין session key בpublic key של השרת. תוקף שהקליט traffic ב-2020 וגנב private key ב-2024 — יכול לפענח את ה-2020 traffic. ב-ECDHE ‎(TLS 1.3 חובה)‎: מפתחות ephemeral נוצרים per-session ונמחקים. אין מפתח ישן לgraceful. 'Ephemeral' = key חי רק לאותה session.",
      explanationEn: "In RSA key exchange (TLS 1.2): client encrypts session key with server's public key. Attacker who recorded traffic in 2020 and stole private key in 2024 can decrypt the 2020 traffic. In ECDHE (mandatory in TLS 1.3): ephemeral keys are generated per-session and deleted. No old key to exploit. 'Ephemeral' = key lives only for that session."
    },
    {
      q: "למה RC4 ו-SHA-1 הוסרו מ-TLS 1.3?",
      correct: "‏RC4 הוכח cryptographically broken ב-2013, SHA-1 collision הוכח ב-2017 (Google SHAttered)",
      choices: [
        "‏RC4 הוכח cryptographically broken ב-2013, SHA-1 collision הוכח ב-2017 (Google SHAttered)",
        "‏RC4 ו-SHA-1 איטיים מדי לhardware מודרני",
        "הוסרו רק כדי לפשט את הstandard, לא מסיבות אבטחה",
        "‏RC4 תומך רק ב-IPv4"
      ],
      explanation: "‏RC4: AlFardan et al. ‏2013 הראו biases סטטיסטיים שמאפשרים לפענח HTTPS cookies אחרי ~2^26 connections. ‏BEAST attack (2011) ניצל CBC ב-TLS 1.0. ‏SHA-1: Google SHAttered 2017 — נמצאו שני PDF files שונים עם אותו SHA-1 hash, עם GPU cluster בעלות $110K. ‏TLS 1.3 אפשר רק AEAD ciphers (AES-GCM, ChaCha20-Poly1305).",
      explanationEn: "RC4: AlFardan et al. 2013 showed statistical biases enabling HTTPS cookie decryption after ~2^26 connections. BEAST attack (2011) exploited CBC in TLS 1.0. SHA-1: Google SHAttered 2017 — two different PDF files with the same SHA-1 hash, produced with a GPU cluster costing $110K. TLS 1.3 only allows AEAD ciphers (AES-GCM, ChaCha20-Poly1305)."
    },
    {
      q: "מה ההבדל ב-RTT בין TLS 1.2 לTLS 1.3?",
      correct: "‏TLS 1.2 דורש 2-RTT לפני application data, TLS 1.3 דורש 1-RTT ‎(ו-0-RTT לsession resumption)‎",
      choices: [
        "‏TLS 1.2 דורש 2-RTT לפני application data, TLS 1.3 דורש 1-RTT ‎(ו-0-RTT לsession resumption)‎",
        "‏TLS 1.2 מהיר יותר כי יש לו יותר cipher options",
        "שניהם דורשים 2-RTT, ההבדל הוא בהצפנה בלבד",
        "‏TLS 1.3 תמיד 0-RTT"
      ],
      explanation: "‏TLS 1.2: ClientHello → ServerHello+Cert → KeyExchange → Finished → Data = 2 full RTT. ‏TLS 1.3: הclient שולח KeyShare כבר בClientHello הראשון. השרת עונה עם ServerHello+keys+Finished = 1 RTT. ‏0-RTT (Early Data): בsession resumption, הclient שולח data בround trip הראשון. אבל 0-RTT vulnerable לreplay attacks — להשתמש רק בGET.",
      explanationEn: "TLS 1.2: ClientHello, ServerHello+Cert, KeyExchange, Finished, Data = 2 full RTT. TLS 1.3: client sends KeyShare already in the first ClientHello. Server responds with ServerHello+keys+Finished = 1 RTT. 0-RTT (Early Data): in session resumption, client sends data in the first round trip. But 0-RTT is vulnerable to replay attacks — use only for GET requests."
    },
        {
      q: "מה ECDHE ב-TLS ואיך מאפשר Perfect Forward Secrecy?",
      correct: "‏Elliptic Curve Diffie-Hellman Ephemeral: שני הצדדים מייצרים key pairs זמניים, מחשבים shared secret, ומיד מוחקים private keys — ניצול future = אין ערך לold traffic",
      choices: [
        "‏Elliptic Curve Diffie-Hellman Ephemeral: שני הצדדים מייצרים key pairs זמניים, מחשבים shared secret, ומיד מוחקים private keys — ניצול future = אין ערך לold traffic",
        "‏ECDHE = RSA עם elliptic curve parameters",
        "‏Ephemeral = ה-key מוצפן בsession cookie",
        "‏ECDHE מאפשר authentication ללא certificates"
      ],
      explanation: "‏Diffie-Hellman: שני צדדים חולקים public numbers g^a mod p ו-g^b mod p → מחשבים g^ab mod p (shared secret) ללא שליחת a או b. ‏Elliptic Curve: g^a → נקודת עקומה אליפטית — יעיל יותר (256-bit EC = 3072-bit RSA security). ‏Ephemeral: מפתחות חדשים לכל session, נמחקים אחרי. גם אם תוקף שבר את ה-EC discrete log בעוד 10 שנים — sessions ישנות לא מפוענחות. ‏Curve25519 (X25519) = curve הנפוצה ב-TLS 1.3.",
      explanationEn: "Diffie-Hellman: two parties share public numbers g^a mod p and g^b mod p, compute g^ab mod p (shared secret) without sending a or b. Elliptic Curve: uses elliptic curve points — more efficient (256-bit EC = 3072-bit RSA security). Ephemeral: new keys per session, deleted after. Even if an attacker breaks EC discrete log in 10 years — old sessions cannot be decrypted. Curve25519 (X25519) is the common curve in TLS 1.3."
    },
        {
      q: "מה Certificate Transparency (CT) ואיך מגן מפני rogue certificates?",
      correct: "‏CT Logs: append-only public logs של כל TLS certificates שהונפקו — browsers מאמתים שcert נכלל ב-CT log — CA סורר לא יכול להנפיק certificate בסתר",
      choices: [
        "‏CT Logs: append-only public logs של כל TLS certificates שהונפקו — browsers מאמתים שcert נכלל ב-CT log — CA סורר לא יכול להנפיק certificate בסתר",
        "‏Certificate Transparency = certificate pinning בdomain",
        "‏CT הוא שם אחר ל-HSTS preloading",
        "‏CT logs מוצפנים ונגישים רק לbrowsers"
      ],
      explanation: "בעיה: DigiNotar 2011 הנפיקה wildcard cert של *.google.com ל-MITM by Iranian government. ‏CT (RFC 6962): כל CA חייב לsubmit כל cert לCT logs (Google Argon, Cloudflare Nimbus). ‏Signed Certificate Timestamp (SCT): proof שcert הוגש. ‏Browsers (Chrome 2018+): דוחים certs ללא valid SCT. domain owner יכול לmonitor CT logs לcerts unauthorised לdomain שלו (crt.sh). ‏Merkle tree structure = tamper-evident log.",
      explanationEn: "Problem: DigiNotar 2011 issued a wildcard cert for *.google.com for MITM by Iranian government. CT (RFC 6962): every CA must submit every cert to CT logs (Google Argon, Cloudflare Nimbus). Signed Certificate Timestamp (SCT): proof that cert was submitted. Browsers (Chrome 2018+): reject certs without valid SCT. Domain owners can monitor CT logs for unauthorized certs via crt.sh. Merkle tree structure = tamper-evident log."
    }
  ],

  307: [
    {
      q: "כיצד Anycast מנתב traffic לPOP הקרוב ביותר?",
      correct: "אותו IP prefix מפורסם מ-BGP ממקומות רבים — BGP בוחר shortest AS path = הPOP הקרוב",
      choices: [
        "אותו IP prefix מפורסם מ-BGP ממקומות רבים — BGP בוחר shortest AS path = הPOP הקרוב",
        "‏DNS מחזיר IP שונה לפי geolocation",
        "ה-LB מפנה לPOP הקרוב לפי latency",
        "‏HTTP redirect לURL של הPOP הקרוב"
      ],
      explanation: "‏Anycast: Cloudflare מפרסמת 1.1.1.0/24 ב-BGP מ-300+ POPs. כשrouter בתל אביב מחפש 1.1.1.1 — הוא רואה כמה paths, בוחר הקצר ביותר (AS hops) = POP בתל אביב. שימוש: DNS root servers, CDN, DDoS mitigation. לא מתאים לTCP sessions ארוכים כי connection עלול לנדוד בין POPs.",
      explanationEn: "Anycast: Cloudflare advertises 1.1.1.0/24 via BGP from 300+ POPs. When a router in Tel Aviv looks up 1.1.1.1, it sees multiple paths and chooses the shortest (AS hops) = POP in Tel Aviv. Uses: DNS root servers, CDN, DDoS mitigation. Not suitable for long TCP sessions as connection may migrate between POPs."
    },
    {
      q: "מה BGP hijacking וכיצד RPKI מונע אותו?",
      correct: "‏BGP hijacking = AS מכריז על prefix שלא שייך לו. RPKI = ROAs חתומות cryptographically שמאמתות מי מורשה להכריז",
      choices: [
        "‏BGP hijacking = AS מכריז על prefix שלא שייך לו. RPKI = ROAs חתומות cryptographically שמאמתות מי מורשה להכריז",
        "‏BGP hijacking = DDoS attack על routers. RPKI = firewall לBGP",
        "‏BGP hijacking = man-in-the-middle ב-TCP. RPKI = TLS לBGP",
        "‏BGP hijacking רלוונטי רק לIPv6"
      ],
      explanation: "‏Pakistan Telecom 2008: הכריזו על 208.65.153.0/24 (YouTube) — כל האינטרנט שלח traffic ל-Pakistan. ‏BGP trust-based = כל AS יכול להכריז על כל prefix. ‏RPKI: RIRs (RIPE, ARIN, APNIC) מפרסמים ROA (Route Origin Authorization) חתומה — 'AS13335 מורשה להכריז על 1.1.1.0/24'. ‏Routers שמסננים לפי RPKI דוחים invalid routes. ‏40% מה-routes מוגנים נכון ל-2024.",
      explanationEn: "Pakistan Telecom 2008: announced 208.65.153.0/24 (YouTube) — the entire internet sent traffic to Pakistan. BGP is trust-based = any AS can announce any prefix. RPKI: RIRs (RIPE, ARIN, APNIC) publish ROA (Route Origin Authorization) signed — 'AS13335 is authorized to announce 1.1.1.0/24'. Routers filtering by RPKI reject invalid routes. About 40% of routes are protected as of 2024."
    },
    {
      q: "מדוע Anycast מצוין להגנה מDDoS?",
      correct: "‏Attack traffic מחולק בין כל ה-POPs בעולם — כל POP סופג חלק קטן במקום שכולו יגיע לנקודה אחת",
      choices: [
        "‏Attack traffic מחולק בין כל ה-POPs בעולם — כל POP סופג חלק קטן במקום שכולו יגיע לנקודה אחת",
        "‏Anycast מצפין traffic ולכן DDoS לא עובד",
        "‏Anycast מסנן traffic זדוני לפי source IP",
        "‏Anycast רלוונטי רק לUDP floods, לא לTCP SYN floods"
      ],
      explanation: "‏Cloudflare עם 300 POPs = 300 נקודות קליטה. ‏DDoS של 2Tbps מחולק ל-~6.7Gbps לכל POP — ניתן לספוג בקלות. ב-unicast, כל ה-2Tbps היה פוגע בנקודה אחת. בנוסף, Anycast BGP failover אוטומטי: POP שנפל תחת load → מסיר את ה-prefix מBGP → traffic עובר לPOP הבא הקרוב. זו הסיבה ש-Cloudflare, Akamai, Amazon CloudFront — כולם Anycast.",
      explanationEn: "Cloudflare with 300 POPs = 300 absorption points. A 2Tbps DDoS is split to ~6.7Gbps per POP — easily absorbed. With unicast, all 2Tbps would hit a single point. Additionally, Anycast BGP failover is automatic: POP under load removes its prefix from BGP, traffic shifts to nearest POP. This is why Cloudflare, Akamai, and Amazon CloudFront all use Anycast."
    },
        {
      q: "מה BGPsec ואיך שונה מRPKI?",
      correct: "‏RPKI מוודא את origin AS בלבד — BGPsec חותם כל hop בAS Path — מגן גם מ-path manipulation לא רק origin hijacking",
      choices: [
        "‏RPKI מוודא את origin AS בלבד — BGPsec חותם כל hop בAS Path — מגן גם מ-path manipulation לא רק origin hijacking",
        "‏BGPsec = RPKI 2.0 — ההבדל רק בגרסה",
        "‏RPKI לIPv6 — BGPsec לIPv4",
        "‏BGPsec מוצפן — RPKI רק signed"
      ],
      explanation: "‏RPKI/ROA: validates 'AS64501 is legitimate originator of 192.0.2.0/24'. אבל: AS Path: 64501 → 64502 → 64503. ‏AS64502 יכול לשנות path! BGPsec (RFC 8205): כל AS שמעביר UPDATE מוסיף חתימה קריפטוגרפית. ‏Receiver מאמת שכל hop בAS path חתם. מגן מ-path manipulation attacks. חסרון: performance overhead משמעותי, כל router צריך לחשב signatures. ‏Adoption: מאוד נמוכה בpractice בגלל complexity. ‏RPKI/ROV = פרקטי ונפוץ הרבה יותר.",
      explanationEn: "RPKI/ROA: validates that an AS is the legitimate originator of a prefix. But AS Path can still be manipulated. BGPsec (RFC 8205): each AS forwarding an UPDATE adds a cryptographic signature. Receiver validates every hop in the AS path was signed. Protects against path manipulation attacks. Downside: significant performance overhead, every router must compute signatures. Adoption is very low in practice due to complexity. RPKI/ROV is far more practical and widespread."
    },
        {
      q: "מה קרה בתקרית Cloudflare 2019 ב-BGP routing ומה הלקח?",
      correct: "‏MainOne ‎(ניגריה)‎ דרכה Verizon הכריזה paths חשובים → traffic ממשתמשי Cloudflare עבר דרך AS קטן בלתי מסוגל — קריסה 1.5 שעות — לקח: RPKI filtering חובה אצל large providers",
      choices: [
        "‏MainOne ‎(ניגריה)‎ דרכה Verizon הכריזה paths חשובים → traffic ממשתמשי Cloudflare עבר דרך AS קטן בלתי מסוגל — קריסה 1.5 שעות — לקח: RPKI filtering חובה אצל large providers",
        "‏Cloudflare עצמה גרמה לhijack על ידי שגיאת routing config",
        "‏BGP attack ממוקד על Cloudflare DNS servers בלבד",
        "‏Cloudflare 2019 = פרסום accidental של IPv6 prefixes"
      ],
      explanation: "2019-06-24: DQE Communications (PA) שלחה routes שגויים לMainOne (Nigeria) שלחה לVerizon. ‏Verizon (AS701) = Tier-1 — לא filter! הכריזה ל-internet. ‏Cloudflare prefixes הוסטו דרך path ארוך ועמוס. ‏DQE קיבלה traffic ממשתמשים עולמיים לCFLR → collapse. ‏RPKI Invalid היה אמור לחסום. ‏AWS, Linode גם הושפעו. ‏Cloudflare פרסמה: 'Verizon צריכה לfilter את לקוחותיה.' IRR (Internet Routing Registry) + RPKI = שכבות הגנה שהיו מונעות זאת.",
      explanationEn: "2019-06-24: DQE Communications (PA) sent wrong routes to MainOne (Nigeria), which forwarded to Verizon. Verizon (AS701) = Tier-1 — did not filter! Announced to the internet. Cloudflare prefixes were routed through a long, overloaded path. DQE received global traffic meant for Cloudflare causing collapse. RPKI Invalid should have blocked it. AWS and Linode were also affected. Lesson: IRR + RPKI are defense layers that would have prevented this."
    }
  ],

  308: [
    {
      q: "מה veth pair ב-Linux networking?",
      correct: "זוג virtual ethernet interfaces מחוברים — מה שנכנס לאחד יוצא מהשני, משמש לחיבור container לhost",
      choices: [
        "זוג virtual ethernet interfaces מחוברים — מה שנכנס לאחד יוצא מהשני, משמש לחיבור container לhost",
        "‏virtual ethernet שמאפשר מספר VLANs על interface אחד",
        "חיבור בין שני hosts פיזיים",
        "שם אחר לloopback interface"
      ],
      explanation: "‏veth pair = כבל וירטואלי. ‏Docker יוצר veth pair: קצה אחד (eth0) בnamespace של הcontainer, קצה שני (vethXXXXXX) בhost namespace ומחובר לbridge docker0. packet שנשלח מcontainer → eth0 → veth pair → vethXXX בhost → docker0 bridge → routing. ip link add veth0 type veth peer name veth1 יוצר את ה-pair.",
      explanationEn: "veth pair = virtual cable. Docker creates a veth pair: one end (eth0) in the container's namespace, the other end (vethXXXXXX) in the host namespace connected to the docker0 bridge. Packet flow from container: eth0, veth pair, vethXXX on host, docker0 bridge, routing. ip link add veth0 type veth peer name veth1 creates the pair."
    },
    {
      q: "מה ההבדל בין Flannel לCalico כ-CNI plugins?",
      correct: "‏Flannel משתמש ב-VXLAN overlay (encapsulation), Calico משתמש ב-BGP routing ‎(L3, ללא encapsulation, מהיר יותר)‎",
      choices: [
        "‏Flannel משתמש ב-VXLAN overlay (encapsulation), Calico משתמש ב-BGP routing ‎(L3, ללא encapsulation, מהיר יותר)‎",
        "‏Flannel לpublic cloud, Calico לon-premise בלבד",
        "‏Calico ישן יותר ולכן פחות מומלץ",
        "שניהם זהים, ההבדל הוא בממשק הניהול בלבד"
      ],
      explanation: "‏Flannel VXLAN: packets בין nodes מוצפנים ב-UDP header (encapsulation). פשוט להתקנה אבל overhead. ‏Calico BGP: כל Kubernetes node הוא BGP router שמפרסם את ה-podCIDR שלו. ‏Packets עוברים ב-L3 ישירות ללא encapsulation = ביצועים גבוהים יותר. ‏Calico מוסיף Network Policy. ‏Cilium (eBPF): מחליף iptables, O(1) lookups, L7 visibility.",
      explanationEn: "Flannel VXLAN: packets between nodes are encapsulated in UDP header. Simple to install but has overhead. Calico BGP: every Kubernetes node is a BGP router advertising its podCIDR. Packets travel at L3 directly without encapsulation = higher performance. Calico adds Network Policy support. Cilium (eBPF): replaces iptables, O(1) lookups, L7 visibility."
    },
    {
      q: "כיצד pod-to-pod communication עובד בין שני nodes שונים ב-Kubernetes?",
      correct: "תלוי ב-CNI: Flannel = VXLAN tunnel, Calico = BGP routes ישירות, Cilium = eBPF forwarding",
      choices: [
        "תלוי ב-CNI: Flannel = VXLAN tunnel, Calico = BGP routes ישירות, Cilium = eBPF forwarding",
        "‏Kubernetes מספק NAT אוטומטי בין nodes",
        "‏pods חייבים להיות באותו node לתקשורת ישירה",
        "תמיד עובר דרך kube-proxy על ה-master node"
      ],
      explanation: "‏Kubernetes CNI contract: כל pod יכול לדבר עם כל pod ב-pod IP שלו, ללא NAT. אותו node = veth pair → bridge → L2 forwarding מהיר. בין nodes: CNI מממש. ‏Flannel: מוסיף VXLAN header (UDP 8472) → underlay network → מסיר header ב-node היעד. ‏Calico: node1 יודע ש-10.0.2.0/24 נמצא ב-node2 דרך BGP → route ישיר ב-IP layer. kube-proxy מנהל Service IPs, לא pod-to-pod.",
      explanationEn: "Kubernetes CNI contract: every pod can talk to every pod using its pod IP, without NAT. Same node = veth pair to bridge to fast L2 forwarding. Between nodes: CNI implements. Flannel: adds VXLAN header (UDP 8472), underlay network, removes header at destination node. Calico: node1 knows 10.0.2.0/24 is on node2 via BGP, direct IP layer route. kube-proxy manages Service IPs, not pod-to-pod."
    },
    {
      q: "מה network namespace ב-Linux ואיך Docker משתמש בו?",
      correct: "‏Network namespace מבודד stack רשת שלם (interfaces, routing, iptables) — כל Docker container מקבל namespace נפרד — containers לא רואים את interface של אחד מהשני",
      choices: [
        "‏Network namespace מבודד stack רשת שלם (interfaces, routing, iptables) — כל Docker container מקבל namespace נפרד — containers לא רואים את interface של אחד מהשני",
        "‏Network namespace = VLAN ב-Docker",
        "‏Network namespace מגביל bandwidth לcontainer",
        "כל containers בhost משתפים network namespace"
      ],
      explanation: "‏Linux Namespaces: network, PID, mount, UTS, IPC, user, cgroup. ‏Network namespace: ip netns add mynet → namespace חדש עם lo בלבד. ip link add veth0 type veth peer name veth1 → pair. ip link set veth1 netns mynet → veth1 עובר לnamespace. ip netns exec mynet ip addr show → רואה רק veth1 ו-lo. ‏Docker: בkubernetes — כל pod = namespace אחד ‎(containers בpod משתפים network namespace → localhost!)‎.",
      explanationEn: "Linux Namespaces: network, PID, mount, UTS, IPC, user, cgroup. Network namespace: ip netns add mynet creates a new namespace with lo only. ip link add veth0 type veth peer name veth1 creates a pair. ip link set veth1 netns mynet moves veth1 to the namespace. ip netns exec mynet ip addr show sees only veth1 and lo. Docker: in Kubernetes, each pod = one namespace (containers in pod share network namespace and communicate via localhost!)."
    },
    {
      q: "מה ההבדל בין bridge network mode לבין host network mode ב-Docker?",
      correct: "‏bridge: container מקבל namespace נפרד, IP private מdocker0 bridge, NAT לחוץ — host: container משתף network namespace של host — ביצועים גבוהים אך אין בידוד",
      choices: [
        "‏bridge: container מקבל namespace נפרד, IP private מdocker0 bridge, NAT לחוץ — host: container משתף network namespace של host — ביצועים גבוהים אך אין בידוד",
        "‏bridge לproduction — host לdevelopment בלבד",
        "‏host mode מהיר פי 10 — תמיד להשתמש בו",
        "‏bridge ו-host זהים ב-Kubernetes"
      ],
      explanation: "‏Bridge (default): docker0 bridge IP 172.17.0.1. container מקבל 172.17.0.2. docker run -p 8080:80: iptables DNAT rule. ‏Host mode: docker run --network host nginx → nginx שומע על port 80 של host ישירות, ללא NAT. ביצועים טובים ‎(אין overhead)‎. סיכון: container רואה כל interfaces של host, port conflicts. ‏None: docker run --network none → container ללא network (air-gapped). ‏Macvlan: container מקבל MAC address ישיר ב-physical network.",
      explanationEn: "Bridge (default): docker0 bridge IP 172.17.0.1. Container gets 172.17.0.2. docker run -p 8080:80 creates iptables DNAT rule. Host mode: docker run --network host nginx listens on host's port 80 directly, no NAT. Good performance (no overhead). Risk: container sees all host interfaces, port conflicts. None: docker run --network none creates container with no network (air-gapped). Macvlan: container gets MAC address directly on physical network."
    },
    {
      q: "מה תפקיד kube-proxy ב-Kubernetes networking?",
      correct: "מנהל iptables/IPVS rules ב-כל node כדי לנתב traffic מ-Service ClusterIP לpods הרלוונטיים",
      choices: [
        "מנהל iptables/IPVS rules ב-כל node כדי לנתב traffic מ-Service ClusterIP לpods הרלוונטיים",
        "‏proxy בין internet לcluster לאבטחה",
        "מנהל DNS resolution עבור services",
        "מממש NetworkPolicy לסינון traffic בין pods"
      ],
      explanation: "‏Service ClusterIP (למשל: 10.96.0.1) לא קיימת כ-real interface! kube-proxy: מקשיב ל-Kubernetes API, כשService נוצרת → מוסיף iptables rules: DNAT 10.96.0.1:80 → בחר רנדומלי pod מEndpoints. ‏IPVS mode: L4 load balancer kernel module, יעיל יותר מiptables ל-cluster גדול. ‏Cilium יכול להחליף kube-proxy בeBPF: O(1) lookups במקום O(n) iptables rules. ‏CoreDNS עושה DNS resolution ‎(לא kube-proxy)‎.",
      explanationEn: "Service ClusterIP (e.g., 10.96.0.1) does not exist as a real interface! kube-proxy: watches Kubernetes API, when Service is created it adds iptables rules: DNAT 10.96.0.1:80 randomly selects pod from Endpoints. IPVS mode: L4 load balancer kernel module, more efficient than iptables for large clusters. Cilium can replace kube-proxy with eBPF: O(1) lookups instead of O(n) iptables rules. CoreDNS handles DNS resolution (not kube-proxy)."
    }
    ],
110: [
    {
      q: "מה ההבדל בין SQLi ל-XSS?",
      correct: "‏SQLi תוקפת את מסד הנתונים בצד השרת. ‏XSS מריצה קוד זדוני בדפדפן של משתמש אחר",
      choices: [
        "‏SQLi תוקפת את מסד הנתונים בצד השרת. ‏XSS מריצה קוד זדוני בדפדפן של משתמש אחר",
        "שתי ההתקפות זהות — שתיהן מזריקות שאילתות SQL",
        "‏XSS תוקפת מסד נתונים, ו-SQLi תוקפת דפדפן",
        "‏SQLi מריצה Python ו-XSS מריצה JavaScript"
      ],
      explanation: "‏SQLi היא התקפה בצד השרת — התוקף משנה שאילתת SQL ומשיג גישה למסד הנתונים. ‏XSS היא התקפה בצד הלקוח — התוקף מזריק JavaScript שרץ בדפדפן הקורבן. המטרה של SQLi היא נתונים, ושל XSS היא גניבת session, עוגיות ופעולות משתמש."
    },
    {
      q: "מה Prepared Statements ולמה הם מגנים מ-SQLi?",
      correct: "מקמפלים שאילתת SQL לפני הכנסת נתונים — הנתונים לא יכולים לשנות את מבנה השאילתה",
      choices: [
        "מקמפלים שאילתת SQL לפני הכנסת נתונים — הנתונים לא יכולים לשנות את מבנה השאילתה",
        "מצפינים את הנתונים לפני שמירה במסד הנתונים",
        "בודקים שאין תווים מיוחדים בקלט לפני שמירה",
        "מגבילים את אורך הקלט של המשתמש"
      ],
      explanation: "‏Prepared Statement מקמפל את מקומות ה-placeholder לפני הזנת הנתונים. קלט כמו 'admin OR 1=1' יישמר כטקסט רגיל ולא יפורש כ-SQL. לעומת זאת, שרשור מחרוזות (string concatenation) מאפשר הזרקה כי הנתונים הופכים לחלק מהשאילתה."
    },
    {
      q: "מה Stored XSS ולמה הוא מסוכן יותר מ-Reflected?",
      correct: "‏Stored XSS נשמר במסד הנתונים ורץ על כל מבקר בעמוד. ‏Reflected XSS פוגע רק במי שלוחץ על קישור זדוני",
      choices: [
        "‏Stored XSS נשמר במסד הנתונים ורץ על כל מבקר בעמוד. ‏Reflected XSS פוגע רק במי שלוחץ על קישור זדוני",
        "‏Stored XSS מסוכן פחות כי הוא נשמר במסד נתונים ולא בכתובת",
        "‏Reflected XSS יותר מסוכן כי הוא בלתי נראה",
        "אין הבדל — שניהם רצים פעם אחת בלבד"
      ],
      explanation: "‏Reflected: סקריפט בכתובת URL חוזר בתגובה ורץ רק אצל מי שלוחץ. ‏Stored: תוקף כותב סקריפט בשדה תגובה, הוא נשמר במסד, וכל מבקר בעמוד מקבל ומריץ אותו. לדוגמה: XSS בפוסט בפורום — כל מי שקורא נגנב לו ה-session."
    },
    {
      q: "מה HttpOnly Cookie ואיך הוא מגן מ-XSS?",
      correct: "עוגייה שאינה נגישה ל-JavaScript — גם אם יש XSS, קוד זדוני לא יכול לקרוא אותה",
      choices: [
        "עוגייה שאינה נגישה ל-JavaScript — גם אם יש XSS, קוד זדוני לא יכול לקרוא אותה",
        "עוגייה שנשלחת רק בחיבור HTTPS",
        "עוגייה עם תפוגה קצרה לצורכי אבטחה",
        "עוגייה שמוצפנת בצד השרת"
      ],
      explanation: "כשמגדירים HttpOnly בעוגייה, הדפדפן מסרב לחשוף אותה ל-JavaScript. בקשות רשת עדיין שולחות אותה אוטומטית. דגל Secure מגביל ל-HTTPS בלבד. דגל SameSite=Strict מונע שליחה בבקשות חוצות-אתרים (מגן מ-CSRF)."
    },
    {
      q: "מה UNION-based SQL Injection?",
      correct: "הרצת שאילתת UNION SELECT כדי להוסיף שורות מטבלאות אחרות לתוצאה המקורית",
      choices: [
        "הרצת שאילתת UNION SELECT כדי להוסיף שורות מטבלאות אחרות לתוצאה המקורית",
        "איחוד שרתי מסד נתונים זדוניים",
        "הרצת UNION כדי לסגור את החיבור למסד",
        "שימוש ב-UNION לעדכון נתונים בטבלאות"
      ],
      explanation: "פקודת UNION SELECT מאחדת תוצאות משתי שאילתות. בהזרקת SQL, התוקף מוסיף שורות מטבלה אחרת (למשל טבלת משתמשים) לתוצאה המקורית. הדרישה: אותו מספר עמודות וסוגים תואמים. טבלת information_schema.tables מכילה את כל שמות הטבלאות במסד."
    },
    {
      q: "מה CSP (Content-Security-Policy) ואיך מגן מ-XSS?",
      correct: "כותרת HTTP שמגבילה מאילו מקורות מותר לטעון סקריפטים — חוסמת קוד inline ומקורות זרים",
      choices: [
        "כותרת HTTP שמגבילה מאילו מקורות מותר לטעון סקריפטים — חוסמת קוד inline ומקורות זרים",
        "סינון XSS בצד השרת לפני שמירה",
        "הצפנת תוכן בין לקוח לשרת",
        "ביטול גישה ל-DOM עבור JavaScript"
      ],
      explanation: "‏CSP מנחה את הדפדפן לחסום: 1) סקריפטים inline, 2) JavaScript ממקורות לא מאושרים, 3) שימוש ב-eval. מנגנון nonce מאפשר רק סקריפטים עם מזהה אקראי תואם. מצב Report-Only מדווח על חסימות בלי לחסום בפועל."
    }
  ],

  111: [
    {
      q: "\u200Fמה ההבדל בין Authentication ל-Authorization?",
      correct: "\u200FAuthentication = זיהוי (מי אתה?)\nAuthorization = הרשאות (מה מותר לך לעשות?)",
      choices: [
        "\u200FAuthentication = זיהוי (מי אתה?)\nAuthorization = הרשאות (מה מותר לך לעשות?)",
        "\u200FAuthentication = הרשאות\nAuthorization = זיהוי",
        "\u200Fשניהם זהים\nשניהם בודקים סיסמה",
        "\u200FAuthentication = HTTPS\nAuthorization = HTTP"
      ],
      explanation: "\u200F🔐 Authentication (אימות) — מי אתה?\n• התחברות עם סיסמה\n• ביומטריה או תעודה דיגיטלית\n\n🛡️ Authorization (הרשאה) — מה מותר לך?\n• מנגנוני RBAC, ACL, הרשאות\n\n⚠️ טעות נפוצה:\n• IDOR — משתמש מורשה ניגש למשאב של אחר\n• על ידי שינוי מזהה בכתובת",
      explanationEn: "AuthN (Authentication): who are you? Login with username+password, biometrics, or certificate. AuthZ (Authorization): what are you allowed to do? RBAC, ACL, permissions. Common mistake: IDOR (Insecure Direct Object Reference) = an AuthZ problem — an authenticated user accesses another user's resource by changing an ID in the URL.",
      qEn: "What is the difference between Authentication and Authorization?",
      correctEn: "Authentication = identification (who are you?)\nAuthorization = permissions (what are you allowed to do?)",
      choicesEn: [
        "Authentication = identification (who are you?)\nAuthorization = permissions (what are you allowed to do?)",
        "Authentication = permissions\nAuthorization = identification",
        "They are the same\nboth check a password",
        "Authentication = HTTPS\nAuthorization = HTTP"
      ]
    },
    {
      q: "\u200Fלמה bcrypt עדיף על SHA256 לגיבוב סיסמאות?",
      correct: "\u200Fbcrypt מתוכנן להיות איטי בכוונה\n(בזכות מנגנון ה-work factor)\nSHA256 מהיר מדי — כרטיס מסך שובר אותו בשניות",
      choices: [
        "\u200Fbcrypt מתוכנן להיות איטי בכוונה\n(בזכות מנגנון ה-work factor)\nSHA256 מהיר מדי — כרטיס מסך שובר אותו בשניות",
        "\u200Fbcrypt מצפין\nSHA256 רק מבצע גיבוב",
        "\u200FSHA256 עדיף כי הוא חדש יותר",
        "\u200Fbcrypt מאובטח כי הוא קצר יותר"
      ],
      explanation: "\u200F⚡ מהירות גיבוב — ההבדל הקריטי\n• GPU מודרני: 10 מיליארד SHA256/שנייה\n• bcrypt cost=12: רק ~300/שנייה\n\n🔓 פיצוח סיסמה של 8 תווים:\n• SHA256 — שניות\n• bcrypt — שנים\n\n🏆 Argon2id עוד טוב יותר:\n• דורש זיכרון (memory-hard)\n• מאט גם חומרה ייעודית",
      explanationEn: "SHA256: a modern GPU computes 10 billion hashes/second. bcrypt cost=12: ~300 hashes/second per GPU. Brute-forcing 8 lowercase characters = 200 billion combinations. With SHA256: seconds. With bcrypt cost=12: years. Argon2id is memory-hard — even ASICs/GPUs are slowed because they need gigabytes of RAM.",
      qEn: "Why is bcrypt better than SHA256 for hashing passwords?",
      correctEn: "bcrypt is designed to be slow on purpose\n(thanks to the work factor)\nSHA256 is too fast — a GPU breaks it in seconds",
      choicesEn: [
        "bcrypt is designed to be slow on purpose\n(thanks to the work factor)\nSHA256 is too fast — a GPU breaks it in seconds",
        "bcrypt encrypts\nSHA256 only hashes",
        "SHA256 is better because it is newer",
        "bcrypt is secure because it is shorter"
      ]
    },
    {
      q: "\u200Fמה פגיעות alg=none ב-JWT?",
      correct: "\u200Fשרת שמקבל alg=none מאמת טוקן ללא חתימה\nתוקף יכול לזייף כל תוכן (למשל user=admin)",
      choices: [
        "\u200Fשרת שמקבל alg=none מאמת טוקן ללא חתימה\nתוקף יכול לזייף כל תוכן (למשל user=admin)",
        "\u200FJWT עם alg=none מהיר יותר לעיבוד",
        "\u200Falg=none מצפין עם מפתח סימטרי",
        "\u200Falg=none נדרש לאפליקציות מובייל"
      ],
      explanation: "\u200F🎫 מבנה JWT:\n• כותרת (אלגוריתם כמו HS256)\n• תוכן (payload)\n• חתימה (signature)\n\n💥 ההתקפה:\n• תוקף משנה אלגוריתם ל-none\n• חותך את החתימה\n• שרת פגיע מקבל את הטוקן\n\n🔧 התיקון:\n• רשימת אלגוריתמים מותרים בצד שרת בלבד\n• HS256/RS256 — אסור לתת למשתמש לבחור!",
      explanationEn: "JWT header contains the algorithm (e.g., HS256) + payload + signature. If an attacker changes the header to alg=none and removes the signature, a vulnerable server accepts the unsigned token. Fix: whitelist algorithms on the server side (reject anything other than HS256/RS256). Never let the user choose the algorithm!",
      qEn: "What is the JWT alg=none vulnerability?",
      correctEn: "A server that accepts alg=none validates a token without a signature\nAn attacker can forge any content (e.g., user=admin)",
      choicesEn: [
        "A server that accepts alg=none validates a token without a signature\nAn attacker can forge any content (e.g., user=admin)",
        "JWT with alg=none is faster to process",
        "alg=none encrypts with a symmetric key",
        "alg=none is required for mobile applications"
      ]
    },
    {
      q: "\u200Fמה MFA ולמה הוא מגן גם אם סיסמה נגנבה?",
      correct: "\u200Fאימות רב-שלבי (MFA) מחייב 2+ גורמים:\nמשהו שיודע + משהו שיש לך/שאתה\nגנב הסיסמה חסר את הגורם השני",
      choices: [
        "\u200Fאימות רב-שלבי (MFA) מחייב 2+ גורמים:\nמשהו שיודע + משהו שיש לך/שאתה\nגנב הסיסמה חסר את הגורם השני",
        "\u200FMFA = שתי סיסמאות שונות",
        "\u200FMFA מצפין את הסיסמה פעמיים",
        "\u200FMFA = סיסמה ארוכה יותר מ-12 תווים"
      ],
      explanation: "\u200F🔑 שלושת גורמי האימות:\n• ידע — סיסמה, PIN\n• חזקה — אפליקציית TOTP, SMS, מפתח חומרה (YubiKey)\n• ביומטריה — טביעת אצבע, זיהוי פנים\n\n🛡️ MFA משלב 2 גורמים ומעלה:\n• פישינג גונב סיסמה אבל לא קוד TOTP\n• תוקף ב-AitM יכול לעקוף TOTP\n• WebAuthn/FIDO2 עמיד לפישינג",
      explanationEn: "Authentication factors: 1) Knowledge: password, PIN. 2) Possession: TOTP app, SMS, hardware key (YubiKey). 3) Inherence: biometric (fingerprint, face). MFA = combining 2+ factors. Phishing can steal a password, but not a TOTP code (though Adversary-in-the-Middle attacks can intercept TOTP). WebAuthn/FIDO2 = phishing-resistant authentication.",
      qEn: "What is MFA and why does it protect even if a password is stolen?",
      correctEn: "Multi-Factor Authentication (MFA) requires 2+ factors:\nsomething you know + something you have/are\nA password thief lacks the second factor",
      choicesEn: [
        "Multi-Factor Authentication (MFA) requires 2+ factors:\nsomething you know + something you have/are\nA password thief lacks the second factor",
        "MFA = two different passwords",
        "MFA encrypts the password twice",
        "MFA = a password longer than 12 characters"
      ]
    },
    {
      q: "\u200Fמה Salt בגיבוב סיסמאות?",
      correct: "\u200Fערך אקראי ייחודי שמוסיפים לכל סיסמה לפני גיבוב\nמונע טבלאות קשת ומחייב פיצוח נפרד לכל משתמש",
      choices: [
        "\u200Fערך אקראי ייחודי שמוסיפים לכל סיסמה לפני גיבוב\nמונע טבלאות קשת ומחייב פיצוח נפרד לכל משתמש",
        "\u200Fמפתח הצפנה סודי שמאחסנים במסד הנתונים",
        "\u200Fחלק נוסף מהסיסמה שהמשתמש מזין",
        "\u200Fpepper מוסיפים למסד\nsalt מוסיפים לקוד"
      ],
      explanation: "\u200F🧂 ללא Salt:\n• כל משתמשים עם אותה סיסמה = אותו hash\n• טבלת קשת (rainbow table) ממפה hash לסיסמה מראש\n\n✅ עם Salt:\n• מוסיפים ערך אקראי לכל סיסמה\n• כל משתמש מקבל hash שונה\n• פיצוח חייב לחשב מחדש לכל משתמש בנפרד\n\n🔧 bcrypt ו-Argon2 מייצרים salt אוטומטית",
      explanationEn: "Without salt: every user with the same password gets the same hash. A rainbow table is a precomputed mapping of hash to plaintext. With salt: hash('password123' + random_salt) — each user's hash is different. Brute-force must recompute for each user. bcrypt/Argon2 generate a salt automatically and store it within the hash string.",
      qEn: "What is Salt in password hashing?",
      correctEn: "A unique random value added to each password before hashing\nPrevents rainbow tables and forces separate cracking per user",
      choicesEn: [
        "A unique random value added to each password before hashing\nPrevents rainbow tables and forces separate cracking per user",
        "A secret encryption key stored in the database",
        "An extra part of the password that the user enters",
        "Pepper is added to the database\nSalt is added to the code"
      ]
    }
  ],

  112: [
    {
      q: "\u200Fמה CSP (Content-Security-Policy) עושה?",
      correct: "\u200Fמנחה את הדפדפן מאילו מקורות לטעון\nסקריפטים, סגנונות ותמונות\nמגן מ-XSS על ידי חסימת קוד inline ומקורות זרים",
      choices: [
        "\u200Fמנחה את הדפדפן מאילו מקורות לטעון\nסקריפטים, סגנונות ותמונות\nמגן מ-XSS על ידי חסימת קוד inline ומקורות זרים",
        "\u200Fמצפין תוכן בין לקוח לשרת",
        "\u200Fמסנן תוכן זדוני בצד השרת",
        "\u200Fמגביל גישה לנקודות API לפי כתובת IP"
      ],
      explanation: "\u200F🛡️ כותרת CSP\n• מורה לדפדפן לחסום JavaScript ממקורות לא מאושרים\n• חוסמת סקריפטים inline\n• חוסמת קריאות eval\n\n🔑 מנגנון nonce\n• מייצר מזהה אקראי לכל טעינת דף\n• רק סקריפט עם nonce נכון מורשה לרוץ\n\n📋 מצב Report-Only\n• מדווח על חסימות בלי לחסום בפועל",
      explanationEn: "CSP header instructs the browser to block: JS from unapproved sources, inline script tags, and eval(). Nonce: each page load receives a random nonce — only scripts with the matching nonce are allowed. Report-Only mode reports violations without blocking. This is a powerful defense against XSS attacks.",
      qEn: "What does CSP (Content-Security-Policy) do?",
      correctEn: "Tells the browser which sources are allowed to load\nscripts, styles, and images\nProtects from XSS by blocking inline code and foreign sources",
      choicesEn: [
        "Tells the browser which sources are allowed to load\nscripts, styles, and images\nProtects from XSS by blocking inline code and foreign sources",
        "Encrypts content between client and server",
        "Filters malicious content on the server side",
        "Restricts API endpoint access by IP address"
      ]
    },
    {
      q: "\u200Fמה HSTS ולמה הוא מגן מהתקפת SSL Stripping?",
      correct: "\u200Fכותרת HTTP שמכריחה את הדפדפן לעבוד רק ב-HTTPS\nניסיון לשדרג לאחור ל-HTTP נכשל",
      choices: [
        "\u200Fכותרת HTTP שמכריחה את הדפדפן לעבוד רק ב-HTTPS\nניסיון לשדרג לאחור ל-HTTP נכשל",
        "\u200Fמאמת תעודת שרת ומסרב לרשויות לא מהימנות",
        "\u200Fמצפין עוגיות אוטומטית",
        "\u200Fמגביל חיבורי TLS לגרסה 1.3 בלבד"
      ],
      explanation: "\u200F⚠️ התקפת SSL Stripping\n• תוקף באמצע (MITM) מקבל HTTPS מהשרת\n• אבל משדרג לאחור ל-HTTP עם הלקוח\n\n🔒 כותרת HSTS\n• גורמת לדפדפן לזכור: תמיד HTTPS לאתר הזה\n• גם אם המשתמש כותב http\n\n📌 מצב Preload\n• מוסיף את האתר לרשימה קבועה בדפדפן\n• מגן גם בביקור ראשון",
      explanationEn: "SSL Stripping (Moxie Marlinspike 2009): a MITM attacker receives HTTPS from the server but downgrades to HTTP with the client. HSTS: Strict-Transport-Security: max-age=31536000. The browser remembers: always use HTTPS for this site, even if the user types http://. Preload: added to the browser's hardcoded list — protects even the first visit. includeSubDomains is required for preload.",
      qEn: "What is HSTS and why does it protect from SSL Stripping?",
      correctEn: "An HTTP header that forces the browser to use HTTPS only\nA downgrade attempt to HTTP fails",
      choicesEn: [
        "An HTTP header that forces the browser to use HTTPS only\nA downgrade attempt to HTTP fails",
        "Validates the server certificate and rejects untrusted authorities",
        "Encrypts cookies automatically",
        "Limits TLS connections to version 1.3 only"
      ]
    },
    {
      q: "\u200Fמה CSRF ואיך SameSite=Strict מגן ממנו?",
      correct: "\u200Fהתקפת CSRF גורמת לדפדפן לשלוח בקשה לאתר X\nמאתר זדוני עם העוגיות של X\nדגל SameSite=Strict מונע שליחת עוגיות בבקשות חוצות-אתרים",
      choices: [
        "\u200Fהתקפת CSRF גורמת לדפדפן לשלוח בקשה לאתר X\nמאתר זדוני עם העוגיות של X\nדגל SameSite=Strict מונע שליחת עוגיות בבקשות חוצות-אתרים",
        "\u200FCSRF גונבת עוגיות ישירות מהדפדפן",
        "\u200FCSRF = מסנן בקשות חוצות-אתרים",
        "\u200FSameSite מצפין עוגיות בין אתרים"
      ],
      explanation: "\u200F🎯 איך CSRF עובד?\n• באתר זדוני, תגית תמונה עם כתובת של הבנק\n• הדפדפן שולח בקשה עם העוגיות של הבנק\n• כי הדפדפן מוסיף עוגיות אוטומטית\n\n🛡️ הגנות\n• SameSite=Strict — עוגייה נשלחת רק לבקשות מאותו אתר\n• Lax — רק בניווט\n\n🔑 טוקן CSRF\n• שדה חבוי עם ערך שהשרת יצר\n• אתר זדוני לא יכול לדעת אותו",
      explanationEn: "In CSRF: a malicious site embeds a request to bank.com, and the browser sends it with the user's cookies (because browsers attach cookies automatically). SameSite=Strict: cookie is sent only for same-site requests. Lax: only for top-level navigation. None: all cross-site (legacy). CSRF token: a hidden field with a server-generated token that the attacker's site cannot know.",
      qEn: "What is CSRF and how does SameSite=Strict protect against it?",
      correctEn: "A CSRF attack makes the browser send a request to site X\nfrom a malicious site with X's cookies\nSameSite=Strict prevents sending cookies in cross-site requests",
      choicesEn: [
        "A CSRF attack makes the browser send a request to site X\nfrom a malicious site with X's cookies\nSameSite=Strict prevents sending cookies in cross-site requests",
        "CSRF steals cookies directly from the browser",
        "CSRF = a cross-site request filter",
        "SameSite encrypts cookies between sites"
      ]
    },
    {
      q: "\u200Fמה X-Frame-Options ולמה חשוב?",
      correct: "\u200Fמונע טעינת האתר ב-iframe\nמגן מהתקפת Clickjacking שבה אתר זדוני\nמסתיר iframe על כפתור שהמשתמש לוחץ",
      choices: [
        "\u200Fמונע טעינת האתר ב-iframe\nמגן מהתקפת Clickjacking שבה אתר זדוני\nמסתיר iframe על כפתור שהמשתמש לוחץ",
        "\u200Fמגביל קצב פריימים של הדפדפן לחיסכון בחשמל",
        "\u200Fמצפין כותרות X בבקשת HTTP",
        "\u200Fמסיר כותרות X מהתגובה לצמצום דליפת מידע"
      ],
      explanation: "\u200F🖱️ התקפת Clickjacking\n• אתר זדוני כולל iframe מוסתר של אתר הבנק\n• עם כפתור מעליו\n• המשתמש לוחץ על 'זכה בפרס!'\n• אבל בפועל לוחץ על 'העבר כסף'\n\n🛡️ X-Frame-Options\n• DENY — אוסר iframe לחלוטין\n• SAMEORIGIN — מתיר רק מאותו מקור\n\n📌 הגישה המודרנית\n• CSP frame-ancestors",
      explanationEn: "Clickjacking: a malicious site embeds the target site in a hidden iframe with a button overlay. The user clicks 'Win a Prize!' but actually clicks 'Transfer Money' on the hidden iframe. X-Frame-Options: DENY — never allow framing. SAMEORIGIN — allow only from same origin. Modern alternative: CSP frame-ancestors 'none'. Facebook Like button hijacking was a classic example.",
      qEn: "What is X-Frame-Options and why is it important?",
      correctEn: "Prevents loading the site in an iframe\nProtects from Clickjacking where a malicious site\nhides an iframe over a button the user clicks",
      choicesEn: [
        "Prevents loading the site in an iframe\nProtects from Clickjacking where a malicious site\nhides an iframe over a button the user clicks",
        "Limits browser frame rate to save power",
        "Encrypts X headers in the HTTP request",
        "Removes X headers from the response to reduce information leakage"
      ]
    }
  ],

  113: [
    {
      q: "\u200Fמה IoC? תן 3 דוגמאות.",
      correct: "\u200Fסימן לפריצה (Indicator of Compromise)\nעדות שמערכת נפרצה\nדוגמאות: כתובת IP של שרת שליטה, hash של קובץ נוזקה, דומיין זדוני",
      choices: [
        "\u200Fסימן לפריצה (Indicator of Compromise)\nעדות שמערכת נפרצה\nדוגמאות: כתובת IP של שרת שליטה, hash של קובץ נוזקה, דומיין זדוני",
        "\u200Fראשי תיבות של Internet of Cybersecurity — מכשירי IoT עם אבטחה",
        "\u200Fמדד פריצה (Index of Compromise) — דירוג רמת הפריצה",
        "\u200Fמרכז תפעול פנימי (Internal Operations Center)"
  ],
      explanation: "\u200F🔍 סימני פריצה כוללים\n• כתובות IP\n• hash של קבצים (MD5/SHA256)\n• דומיינים\n• כתובות URL\n• נושאי אימייל\n• מפתחות registry ושמות mutex\n\n📡 מקורות\n• VirusTotal\n• AlienVault OTX\n• MISP\n• Shodan\n\n⏳ סימני פריצה מתיישנים מהר\n• כתובת IP או דומיין מתחלפים תוך ימים",
      explanationEn: "IoCs (Indicators of Compromise): IP addresses (C2 servers), file hashes (MD5/SHA256 of malware), domains (phishing/C2), URLs (payload delivery), email subjects/senders, registry keys (persistence), mutex names (malware fingerprints). IoC sources: VirusTotal, AlienVault OTX, MISP, Shodan. IoCs go stale quickly — IPs/domains rotate within days.",
      qEn: "What is an IoC? Give 3 examples.",
      correctEn: "Indicator of Compromise\nEvidence that a system was breached\nExamples: C2 server IP, malware file hash, malicious domain",
      choicesEn: [
        "Indicator of Compromise\nEvidence that a system was breached\nExamples: C2 server IP, malware file hash, malicious domain",
        "Internet of Cybersecurity — IoT devices with security",
        "Index of Compromise — a rating of the breach level",
        "Internal Operations Center"
      ]
    },
    {
      q: "\u200Fמה MITRE ATT&CK?",
      correct: "\u200Fמסגרת פתוחה עם 14 טקטיקות\nומאות טכניקות של קבוצות תקיפה\nממפה שיטות תקיפה ומקשרת להגנות",
      choices: [
        "\u200Fמסגרת פתוחה עם 14 טקטיקות\nומאות טכניקות של קבוצות תקיפה\nממפה שיטות תקיפה ומקשרת להגנות",
        "\u200Fתקן הצפנה לנתוני מודיעין איומים",
        "\u200Fחברת אבטחה שמזהה חתימות נוזקה",
        "\u200Fפרוטוקול לשיתוף סימני פריצה בין ארגונים"
      ],
      explanation: "\u200F📋 14 טקטיקות (מה מנסה התוקף)\n• סיור\n• גישה ראשונית\n• הרצה\n• עמידות\n• הסלמת הרשאות\n• התחמקות\n• גניבת הרשאות\n• גילוי\n• תנועה רוחבית\n• איסוף\n• שליטה ובקרה (C2)\n• חילוץ נתונים\n• פגיעה\n\n🔧 מבנה\n• כל טקטיקה כוללת טכניקות ותת-טכניקות\n\n🗺️ Navigator\n• מציג ויזואליזציה של כיסוי",
      explanationEn: "MITRE ATT&CK has 14 Tactics (what the attacker is trying to do): Reconnaissance, Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, Command & Control, Exfiltration, Impact. Each Tactic contains Techniques (T1566 = Phishing) and Sub-techniques. Navigator provides coverage visualization. Purple teaming: Red team attacks, Blue team detects.",
      qEn: "What is MITRE ATT&CK?",
      correctEn: "An open framework with 14 tactics\nand hundreds of techniques used by attack groups\nMaps attack methods and links them to defenses",
      choicesEn: [
        "An open framework with 14 tactics\nand hundreds of techniques used by attack groups\nMaps attack methods and links them to defenses",
        "An encryption standard for threat intelligence data",
        "A security company that identifies malware signatures",
        "A protocol for sharing IoCs between organizations"
      ]
    },
    {
      q: "\u200Fמה ההבדל בין סיור פסיבי (Passive) לאקטיבי (Active) ב-OSINT?",
      correct: "\u200Fסיור פסיבי: מקורות ציבוריים בלי לגעת ביעד (Shodan, WHOIS)\nסיור אקטיבי: שליחת בקשות ישירות ליעד (nmap)\nניתן לגילוי",
      choices: [
        "\u200Fסיור פסיבי: מקורות ציבוריים בלי לגעת ביעד (Shodan, WHOIS)\nסיור אקטיבי: שליחת בקשות ישירות ליעד (nmap)\nניתן לגילוי",
        "\u200Fפסיבי = ניטור ב-SOC, אקטיבי = צוות אדום",
        "\u200Fפסיבי = איטי, אקטיבי = מהיר",
        "\u200Fפסיבי = ללא כלים, אקטיבי = עם כלי אוטומציה"
      ],
      explanation: "\u200F👁️ סיור פסיבי\n• Shodan (סריקה שנעשתה על ידי צד שלישי)\n• WHOIS\n• Google Dorks\n• LinkedIn\n• היעד לא רואה תעבורה\n\n🎯 סיור אקטיבי\n• nmap\n• סריקת פינג\n• סריקת תיקיות\n• נרשם בלוגים של היעד\n\n📌 בעולם האמיתי\n• הגדרת ה-scope קובעת מה מותר\n• ב-Bug Bounty: בדרך כלל פסיבי בלבד בהתחלה",
      explanationEn: "Passive Recon: Shodan (scans done by a third party), WHOIS, Google Dorks, LinkedIn, theHarvester — the target sees no traffic from you. Active Recon: nmap, ping sweep, directory busting — gets logged by the target. In practice: pentest scope defines what is allowed. Bug Bounty: typically passive-only for initial reconnaissance.",
      qEn: "What is the difference between Passive and Active Recon in OSINT?",
      correctEn: "Passive: public sources without touching the target (Shodan, WHOIS)\nActive: sending requests directly to the target (nmap)\nCan be detected",
      choicesEn: [
        "Passive: public sources without touching the target (Shodan, WHOIS)\nActive: sending requests directly to the target (nmap)\nCan be detected",
        "Passive = SOC monitoring, Active = Red Team",
        "Passive = slow, Active = fast",
        "Passive = without tools, Active = with automation tools"
      ]
    },
    {
      q: "\u200Fמה Shodan ואיזה מידע ניתן למצוא בו?",
      correct: "\u200Fמנוע חיפוש למכשירים המחוברים לאינטרנט\nמציג פורטים פתוחים, באנרים, תעודות ושירותים פגיעים",
      choices: [
        "\u200Fמנוע חיפוש למכשירים המחוברים לאינטרנט\nמציג פורטים פתוחים, באנרים, תעודות ושירותים פגיעים",
        "\u200Fמנוע חיפוש לתוספים זדוניים במחשב",
        "\u200Fכלי לניתוח נוזקה של חברת Shodan",
        "\u200Fשרת DNS שמפרסם מודיעין איומים"
      ],
      explanation: "\u200F🌐 Shodan\n• סורק את כל כתובות IPv4 ושומר באנרים\n• חיפוש לפי hostname, פורט, מוצר, מדינה או פגיעות ספציפית\n\n🔍 דוגמאות\n• מציאת שרתי Redis חשופים (לרוב ללא אימות)\n• מכשירים פגיעים לפגם מסוים\n\n📌 כלים דומים\n• Censys דומה ל-Shodan\n• Zoomeye הוא הגרסה הסינית",
      explanationEn: "Shodan scans all of IPv4 and stores banners. Search examples: hostname:example.com port:22 finds exposed SSH. product:Redis finds Redis instances (often without authentication). country:IL vuln:CVE-2017-0144 finds EternalBlue-vulnerable systems. org:'Company Name' finds all their assets. Censys is similar to Shodan. ZoomEye is the Chinese equivalent.",
      qEn: "What is Shodan and what information can you find on it?",
      correctEn: "A search engine for internet-connected devices\nShows open ports, banners, certificates, and vulnerable services",
      choicesEn: [
        "A search engine for internet-connected devices\nShows open ports, banners, certificates, and vulnerable services",
        "A search engine for malicious browser extensions",
        "A malware analysis tool by Shodan company",
        "A DNS server that publishes threat intelligence"
      ]
    }
  ],

  114: [
    {
      q: "\u200Fמה 6 שלבי תגובה לאירוע לפי NIST?",
      correct: "\u200Fהכנה → זיהוי → בלימה → חיסול → שחזור → לקחים",
      choices: [
        "\u200Fהכנה → זיהוי → בלימה → חיסול → שחזור → לקחים",
        "\u200Fגילוי → ניתוח → מיתון → דיווח → שחזור → סקירה",
        "\u200Fהתרעה → מיון → בידוד → תיקון → ניטור → סגירה",
        "\u200Fגילוי → הסלמה → תגובה → טלאי → בדיקה → פריסה"
      ],
      explanation: "\u200F📋 מחזור חיי תגובה לאירוע (NIST SP 800-61)\n\n1️⃣ הכנה\n• נהלים, כלים, הדרכות\n\n2️⃣ זיהוי\n• התרעה ממערכת SOC/EDR או דיווח משתמש\n\n3️⃣ בלימה\n• בידוד מיידי + טלאי ארוך טווח\n\n4️⃣ חיסול\n• הסרת נוזקה, איפוס הרשאות\n\n5️⃣ שחזור\n• החזרת שירותים עם ניטור מוגבר\n\n6️⃣ לקחים\n• סקירה תוך שבועיים",
      explanationEn: "IR Lifecycle (NIST SP 800-61): 1) Preparation: runbooks, tools, training. 2) Identification: alert from SOC, EDR, or user report. 3) Containment: short-term (isolate) + long-term (patch). 4) Eradication: remove malware, reset credentials. 5) Recovery: restore services, enhanced monitoring. 6) Lessons Learned: post-mortem within two weeks.",
      qEn: "What are the 6 NIST Incident Response phases?",
      correctEn: "Preparation > Identification > Containment > Eradication > Recovery > Lessons Learned",
      choicesEn: [
        "Preparation > Identification > Containment > Eradication > Recovery > Lessons Learned",
        "Discovery > Analysis > Mitigation > Reporting > Recovery > Review",
        "Alert > Triage > Isolation > Fix > Monitoring > Close",
        "Discovery > Escalation > Response > Patch > Test > Deploy"
      ]
    },
    {
      q: "\u200Fמה התקפת שרשרת אספקה? תן דוגמה ידועה.",
      correct: "\u200Fתקיפה דרך ספק או תוכנה מהימנה שהארגון משתמש בה\nSolarWinds: דלת אחורית בעדכון Orion\nשהתפשטה ל-18,000 לקוחות",
      choices: [
        "\u200Fתקיפה דרך ספק או תוכנה מהימנה שהארגון משתמש בה\nSolarWinds: דלת אחורית בעדכון Orion\nשהתפשטה ל-18,000 לקוחות",
        "\u200Fתקיפה על שרשרת לוגיסטיקה פיזית",
        "\u200Fתקיפת הזרקת SQL על מערכת ניהול שרשרת אספקה",
        "\u200Fתקיפה על עובדי חברה דרך אימייל פישינג"
      ],
      explanation: "\u200F🔗 דוגמאות להתקפות שרשרת אספקה\n\n• SolarWinds SUNBURST 2020\n  דלת אחורית ב-DLL → 18,000 לקוחות\n• XZ Utils 2024\n  דלת אחורית בספריית דחיסה\n• חבילות npm זדוניות\n• פריצת Codecov דרך סקריפט CI/CD\n\n🛡️ הגנה\n• רשימת רכיבים (SBOM)\n• חתימת קוד\n• בניה מבודדת\n• סריקת תלויות",
      explanationEn: "Supply Chain Attack examples: 1) SolarWinds SUNBURST 2020 — a backdoor in a DLL spread to 18,000 customers. 2) XZ Utils 2024 — backdoor in a compression library. 3) npm malicious packages. 4) Codecov breach — CI/CD script was compromised. Defense: SBOM (Software Bill of Materials), code signing, isolated build processes, dependency scanning (Snyk, Dependabot).",
      qEn: "What is a Supply Chain Attack? Give a well-known example.",
      correctEn: "An attack through a trusted vendor or software used by the organization\nSolarWinds: a backdoor in an Orion update\nthat spread to 18,000 customers",
      choicesEn: [
        "An attack through a trusted vendor or software used by the organization\nSolarWinds: a backdoor in an Orion update\nthat spread to 18,000 customers",
        "An attack on a physical logistics supply chain",
        "SQL injection on a supply chain management system",
        "An attack on company employees through phishing email"
      ]
    },
    {
      q: "\u200Fמה Volatility ולמה משתמשים בו בתגובה לאירועים?",
      correct: "\u200Fכלי לניתוח תמונות זיכרון (memory dumps)\nמזהה תהליכים, חיבורי רשת\nונוזקה מוסתרת בזיכרון",
      choices: [
        "\u200Fכלי לניתוח תמונות זיכרון (memory dumps)\nמזהה תהליכים, חיבורי רשת\nונוזקה מוסתרת בזיכרון",
        "\u200Fכלי לניהול אחסון נדיף בענן",
        "\u200Fמערכת SIEM לניתוח לוגים בזמן אמת",
        "\u200Fכלי לסימולציה של התקפות APT"
      ],
      explanation: "\u200F🔬 למה Volatility?\n• נוזקה ללא קבצים (fileless) רצה רק בזיכרון\n• אנטי-וירוס רגיל לא מוצא אותה\n\n⚙️ פקודות מועילות\n• pslist — תהליכים\n• netscan — חיבורים\n• malfind — הזרקת DLL\n• cmdline — פרמטרים\n• hashdump — סיסמאות Windows\n\n📦 כלי לכידת זיכרון\n• WinPMem\n• Magnet RAM Capture\n• VMware snapshot",
      explanationEn: "Memory forensics: malware that runs only in RAM (fileless malware) never writes to disk — only memory analysis tools like Volatility can detect it. Useful commands: pslist (processes), netscan (connections), malfind (DLL injection, hollowing), cmdline (process arguments), hashdump (Windows password hashes). Memory capture tools: WinPMem, Magnet RAM Capture, VMware snapshots.",
      qEn: "What is Volatility and why is it used in Incident Response?",
      correctEn: "A tool for analyzing memory dumps\nIdentifies processes, network connections\nand hidden malware in memory",
      choicesEn: [
        "A tool for analyzing memory dumps\nIdentifies processes, network connections\nand hidden malware in memory",
        "A tool for managing volatile cloud storage",
        "A SIEM system for real-time log analysis",
        "A tool for simulating APT attacks"
      ]
    },
    {
      q: "\u200Fמה תנועה רוחבית (Lateral Movement)?",
      correct: "\u200Fמעבר התוקף בין מכשירים ברשת\nלאחר גישה ראשונית\nבאמצעות RDP, SMB, SSH או Pass-the-Hash",
      choices: [
        "\u200Fמעבר התוקף בין מכשירים ברשת\nלאחר גישה ראשונית\nבאמצעות RDP, SMB, SSH או Pass-the-Hash",
        "\u200Fהעברת נתונים מהרשת לשרת חיצוני",
        "\u200Fעלייה בהרשאות ממשתמש רגיל למנהל",
        "\u200Fשינוי כיוון תנועת תעבורה ברשת"
      ],
      explanation: "\u200F🔀 טכניקות תנועה רוחבית\n• Pass-the-Hash — שימוש ב-hash ישירות ללא סיסמה\n• Pass-the-Ticket — כרטיס Kerberos גנוב\n• RDP — גישת GUI בפורט 3389\n• SMB — כלים כמו psexec ו-wmiexec\n\n🛡️ בלימה\n• פילוח רשת\n• מחיקת sessions\n• איפוס אמון ב-Active Directory",
      explanationEn: "Lateral Movement Techniques (MITRE ATT&CK T1550+): Pass-the-Hash (PtH) uses an NTLM hash directly without the password. Pass-the-Ticket uses a stolen Kerberos ticket. RDP: port 3389 for GUI access. SMB: psexec, wmiexec. SSH key propagation. Containment: network segmentation, session termination, resetting Active Directory trusts.",
      qEn: "What is Lateral Movement?",
      correctEn: "The attacker moving between machines in the network\nafter initial access\nusing RDP, SMB, SSH, or Pass-the-Hash",
      choicesEn: [
        "The attacker moving between machines in the network\nafter initial access\nusing RDP, SMB, SSH, or Pass-the-Hash",
        "Transferring data from the network to an external server",
        "Escalating privileges from a regular user to admin",
        "Changing the direction of network traffic flow"
      ]
    }
  ],

  115: [
    {
      q: "\u200Fמה ההבדל בין ניתוח נוזקה סטטי לדינמי?",
      correct: "\u200Fסטטי: בוחנים קובץ ללא הרצה\n(מחרוזות, ייבואים)\nדינמי: מריצים בסביבה מבודדת\nובוחנים התנהגות",
      choices: [
        "\u200Fסטטי: בוחנים קובץ ללא הרצה\n(מחרוזות, ייבואים)\nדינמי: מריצים בסביבה מבודדת\nובוחנים התנהגות",
        "\u200Fסטטי = ניתוח בזמן אמת\nדינמי = ניתוח לאחר פריצה",
        "\u200Fסטטי = במכונה וירטואלית\nדינמי = על חומרה פיזית",
        "\u200Fסטטי = כלי Linux\nדינמי = כלי Windows"
      ],
      explanation: "\u200F🔍 ניתוח סטטי\n• כלים: strings, PEStudio, Ghidra\n• מגלה מחרוזות קריאות (URL, IP)\n• ספריות מיובאות, חריגות בכותרת PE\n• מוגבל ע״י ערפול (obfuscation)\n\n🏃 ניתוח דינמי\n• כלים: Cuckoo Sandbox, Process Monitor, Wireshark\n• מגלה שינויי registry, קבצים שנוצרו\n• חיבורי C2, הזרקת תהליכים\n\n💡 שילוב שניהם = ניתוח מלא",
      explanationEn: "Static analysis: tools like strings, PEStudio, Ghidra. Reveals: readable strings (URLs, IPs), imported DLLs, PE header anomalies. Limited by obfuscation/packing. Dynamic analysis: Cuckoo Sandbox, Process Monitor, Wireshark. Reveals: registry changes, file drops, C2 connections, process injection. Combining both provides full analysis.",
      qEn: "What is the difference between static and dynamic malware analysis?",
      correctEn: "Static: examining a file without running it\n(strings, imports)\nDynamic: running in an isolated environment\nand examining behavior",
      choicesEn: [
        "Static: examining a file without running it\n(strings, imports)\nDynamic: running in an isolated environment\nand examining behavior",
        "Static = real-time analysis\nDynamic = post-breach analysis",
        "Static = in a virtual machine\nDynamic = on physical hardware",
        "Static = Linux tools\nDynamic = Windows tools"
      ]
    },
    {
      q: "\u200Fמה כופרה (Ransomware) ואיך מתגוננים?",
      correct: "\u200Fנוזקה שמצפינה קבצים ודורשת כופר\nהגנה: גיבויים מנותקים, עדכוני אבטחה\nסינון אימייל, פילוח רשת",
      choices: [
        "\u200Fנוזקה שמצפינה קבצים ודורשת כופר\nהגנה: גיבויים מנותקים, עדכוני אבטחה\nסינון אימייל, פילוח רשת",
        "\u200Fנוזקה שגונבת נתונים ומוכרת לדארקנט",
        "\u200Fכלי לגיטימי להצפנת קבצים לאבטחה",
        "\u200Fוירוס שמשתמש במעבד לכריית מטבעות"
      ],
      explanation: "\u200F🔒 שרשרת ההתקפה\n• פישינג → גישה ראשונית\n• הסלמת הרשאות → תנועה רוחבית\n• חילוץ נתונים → הצפנה\n\n💰 כופרה כשירות (RaaS)\n• LockBit, BlackCat\n\n🛡️ הגנה — כלל 3-2-1\n• 3 עותקים\n• 2 סוגי מדיה\n• 1 מנותק\n• גיבויים בלתי-ניתנים לשינוי\n• מערכת EDR + סינון אימייל",
      explanationEn: "Ransomware kill chain: Phishing > Initial Access > Privilege Escalation > Lateral Movement > Data Exfiltration > Encryption. RaaS (Ransomware-as-a-Service): LockBit, BlackCat. Defense: 3-2-1 backup rule (3 copies, 2 media types, 1 offsite/offline), immutable backups (Veeam, Azure Immutable), Endpoint Detection & Response (EDR), and email gateway filtering.",
      qEn: "What is Ransomware and how do you defend against it?",
      correctEn: "Malware that encrypts files and demands a ransom\nDefense: offline backups, security patches\nemail filtering, network segmentation",
      choicesEn: [
        "Malware that encrypts files and demands a ransom\nDefense: offline backups, security patches\nemail filtering, network segmentation",
        "Malware that steals data and sells it on the darknet",
        "A legitimate tool for encrypting files for security",
        "A virus that uses the CPU to mine cryptocurrency"
      ]
    },
    {
      q: "\u200Fמהם מנגנוני עמידות (Persistence) נפוצים ב-Windows?",
      correct: "\u200Fמפתחות Run ב-Registry\nמשימות מתוזמנות, שירותים\nתיקיית Startup, חטיפת DLL\nנוזקה שרצה אחרי אתחול",
      choices: [
        "\u200Fמפתחות Run ב-Registry\nמשימות מתוזמנות, שירותים\nתיקיית Startup, חטיפת DLL\nנוזקה שרצה אחרי אתחול",
        "\u200FWMI Events, DCOM ו-BITS Jobs בלבד",
        "\u200Fרק crontab ו-systemd (של Linux)",
        "\u200Fתוספי דפדפן בלבד"
      ],
      explanation: "\u200F🔄 מנגנוני עמידות ב-Windows\n• מפתחות Run ב-Registry\n• משימות מתוזמנות (schtasks)\n• שירותים (sc create)\n• חטיפת DLL — ספרייה זדונית בנתיב לפני הלגיטימית\n• מנויי WMI\n• ברמת האתחול: bootkit\n\n🔧 כלי זיהוי\n• AutoRuns (Sysinternals)\n• מציג את כל מנגנוני העמידות\n• כל רשומת startup צריכה אימות ידני",
      explanationEn: "Windows Persistence mechanisms: 1) Registry Run Keys (HKCU/HKLM\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run). 2) Scheduled Tasks: schtasks /create. 3) Services: sc create. 4) DLL Hijacking: placing a malicious DLL in the path before the legitimate one. 5) WMI subscriptions. 6) Boot/Pre-OS: bootkit. For IR: AutoRuns (Sysinternals) displays all persistence mechanisms.",
      qEn: "What are common Persistence mechanisms in Windows?",
      correctEn: "Registry Run keys\nScheduled Tasks, Services\nStartup folder, DLL Hijacking\nMalware that runs after reboot",
      choicesEn: [
        "Registry Run keys\nScheduled Tasks, Services\nStartup folder, DLL Hijacking\nMalware that runs after reboot",
        "WMI Events, DCOM, and BITS Jobs only",
        "Only crontab and systemd (Linux)",
        "Browser extensions only"
      ]
    },
    {
      q: "\u200Fמה C2 (שליטה ובקרה) בנוזקה?",
      correct: "\u200Fתשתית תקשורת בין הנוזקה לתוקף\nמאפשרת שליחת פקודות\nגניבת נתונים ועדכוני נוזקה",
      choices: [
        "\u200Fתשתית תקשורת בין הנוזקה לתוקף\nמאפשרת שליחת פקודות\nגניבת נתונים ועדכוני נוזקה",
        "\u200Fשליטה ובקרה = ניהול מנהל מערכת",
        "\u200Fתוכנה לשליטה בתהליכי CI/CD",
        "\u200Fחומת אש שמנתבת חבילות"
      ],
      explanation: "\u200F📡 ערוצי C2 נפוצים\n• HTTP/HTTPS — מתחזה לתעבורה רגילה\n• DNS — ערוץ חשאי בשאילתות\n• ICMP\n• רשתות חברתיות\n\n🔍 זיהוי\n• מרווחי beacon חשודים\n• דומיינים נדירים\n• אלגוריתם DGA — שמות דומיין אקראיים\n\n⚔️ כלי C2 ידועים\n• Cobalt Strike\n• Covenant\n• Brute Ratel",
      explanationEn: "C2 (Command and Control) channels: HTTP/HTTPS (camouflaged as web traffic), DNS (covert channel in DNS queries), ICMP, Twitter/Slack (social media C2). Detection: suspicious beacon intervals (malware phones home every X seconds), rare domains, DNS DGA (Domain Generation Algorithm — malware generates random domain names). Tools: Cobalt Strike, Covenant, Brute Ratel.",
      qEn: "What is C2 (Command and Control) in malware?",
      correctEn: "Communication infrastructure between the malware and the attacker\nAllows sending commands\nstealing data, and updating malware",
      choicesEn: [
        "Communication infrastructure between the malware and the attacker\nAllows sending commands\nstealing data, and updating malware",
        "Command and Control = system administration management",
        "Software for controlling CI/CD processes",
        "A firewall that routes packets"
      ]
    },
    {
      q: "\u200Fמה נוזקה ללא קבצים (fileless) ולמה קשה לאתר?",
      correct: "\u200Fנוזקה שרצה רק בזיכרון ולא כותבת לדיסק\nאנטי-וירוס שסורק קבצים לא מוצא אותה\nרק חקירת זיכרון מגלה",
      choices: [
        "\u200Fנוזקה שרצה רק בזיכרון ולא כותבת לדיסק\nאנטי-וירוס שסורק קבצים לא מוצא אותה\nרק חקירת זיכרון מגלה",
        "\u200Fנוזקה שמוחקת את עצמה אחרי ריצה",
        "\u200Fנוזקה שמסתירה את הסיומת של הקובץ שלה",
        "\u200Fנוזקה שפועלת בהרשאות נמוכות ללא מנהל"
      ],
      explanation: "\u200F👻 טכניקות\n• PowerShell — טעינת קוד רפלקטיבית\n• WMI\n• החלפת תהליך (Process Hollowing)\n• הזרקת DLL\n\n🔍 זיהוי\n• מערכת EDR בודקת התנהגות, לא רק קבצים\n• AMSI סורק סקריפטים של PowerShell\n• חקירת זיכרון עם Volatility מגלה קוד מוזרק",
      explanationEn: "Fileless malware techniques: PowerShell (reflective loading), WMI, Process Hollowing (replacing a legitimate process with malware), DLL Injection. Example: PowerShell -EncodedCommand <base64> executes a payload directly in RAM. Detection: EDR checks behavior, not just files. AMSI (Antimalware Scan Interface) scans PowerShell scripts. Memory forensics (Volatility) discovers injected code.",
      qEn: "What is fileless malware and why is it hard to detect?",
      correctEn: "Malware that runs only in memory and does not write to disk\nAntivirus that scans files cannot find it\nOnly memory forensics can detect it",
      choicesEn: [
        "Malware that runs only in memory and does not write to disk\nAntivirus that scans files cannot find it\nOnly memory forensics can detect it",
        "Malware that deletes itself after running",
        "Malware that hides its file extension",
        "Malware that runs with low privileges without admin"
      ]
    }
  ]
}

export function getQuizForChapter(chapterId) {
  return (quizBank[chapterId] || []).map(q => ({ ...q, chapterId }))
}

export function getAllQuizQuestions() {
  return Object.entries(quizBank).flatMap(([id, qs]) =>
    qs.map(q => ({ ...q, chapterId: id }))
  )
}
