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
    }
  ]
}

export function getQuizForChapter(chapterId) {
  return quizBank[chapterId] || []
}

export function getAllQuizQuestions() {
  return Object.values(quizBank).flat()
}
