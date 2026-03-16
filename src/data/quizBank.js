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
  ]
}

export function getQuizForChapter(chapterId) {
  return quizBank[chapterId] || []
}

export function getAllQuizQuestions() {
  return Object.values(quizBank).flat()
}
