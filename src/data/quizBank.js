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
      explanation: "\u200F🏠 אנלוגיה:\n• IP = כתובת הבניין\n• פורט = מספר הדירה\n\nדוגמה:\n• בניין 192.168.1.1\n• דירה 443 (HTTPS)\n• דירה 80 (HTTP)"
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
      explanation: "\u200F🏓 ping — בדיקה אם שרת חי\n\n• שולח חבילת ICMP ומחכה לתגובה\n• אם השרת עונה — הוא חי\n• הזמן ב-ms מראה כמה ״רחוק״ הוא ממך"
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
      explanation: "\u200F📖 DNS — ספר הטלפונים של האינטרנט\n\n• אנחנו זוכרים: google.com\n• המחשב צריך: 142.250.185.206\n• DNS עושה את התרגום ביניהם"
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
      explanation: "\u200F🌍 traceroute — מפת המסלול ברשת\n\n• מראה כל נתב (hop) שהחבילה עוברת\n• מהמחשב שלך ועד לשרת היעד\n• בדרך כלל 15-20 קפיצות לשרת בחו״ל\n• מדהים שזה לוקח פחות משנייה!"
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
      explanation: "\u200F🔢 כללי כתובת IPv4:\n\n• 4 מספרים מופרדים בנקודות\n• כל מספר בטווח 0–255\n\nלמה השאר שגויות:\n• 300 — מחוץ לטווח\n• 192.168.1 — חסר מספר רביעי\n• 192:168:1:1 — נקודותיים זה IPv6, לא IPv4"
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
      explanation: "\u200F✉️ לקוח ושרת:\n\n• הלקוח תמיד מתחיל את הבקשה\n• את שולחת ״תני לי מיילים״\n  → הדפדפן = לקוח\n• Google עונה לבקשה\n  → היא השרת"
    }
  ],

  2: [
    {
      q: "\u200Fמה ההבדל בין TCP לבין UDP?",
      correct: "\u200FTCP = מבטיח הגעת חבילות בסדר\nUDP = מהיר יותר, אך לא מבטיח",
      choices: [
        "\u200FTCP = מבטיח הגעת חבילות בסדר\nUDP = מהיר יותר, אך לא מבטיח",
        "\u200FTCP מוצפן\nUDP לא מוצפן",
        "\u200FTCP לרשתות מקומיות\nUDP לאינטרנט",
        "\u200FTCP לטקסט\nUDP לוידאו בלבד"
      ],
      explanation: "\u200F📦 TCP — משלוח עם אישור קבלה\n✉️ UDP — גלויה, מקווים שתגיע\n\nמי משתמש ב-UDP:\n• Zoom, Discord, משחקים\n• עדיף פריים חסר מאשר עיכוב\n\nמי משתמש ב-TCP:\n• Netflix — עדיף buffer קצר על שגיאות"
    },
    {
      q: "\u200Fמה קורה ב-TCP Handshake?",
      correct: "\u200Fלקוח שולח SYN\nשרת עונה SYN-ACK\nלקוח עונה ACK",
      choices: [
        "\u200Fלקוח שולח SYN\nשרת עונה SYN-ACK\nלקוח עונה ACK",
        "\u200Fלקוח שולח ACK\nשרת עונה SYN\nלקוח עונה FIN",
        "\u200Fשרת שולח SYN\nלקוח עונה ACK\nשרת עונה FIN",
        "\u200Fשני הצדדים שולחים SYN בו-זמנית\nואז ACK"
      ],
      explanation: "\u200F🤝 לחיצת יד בשלושה צעדים:\n\n• SYN = ״היי, אפשר לדבר?״\n• SYN-ACK = ״כן! ואני גם רוצה לדבר!״\n• ACK = ״אחלה, נתחיל!״\n\nרק אחרי 3 הצעדים — החיבור פתוח"
    },
    {
      q: "\u200Fמה תפקיד ה-Socket בתכנות רשתות?",
      correct: "\u200Fממשק תכנותי שמאפשר לתוכנה\nלשלוח ולקבל נתונים דרך הרשת",
      choices: [
        "\u200Fממשק תכנותי שמאפשר לתוכנה\nלשלוח ולקבל נתונים דרך הרשת",
        "\u200Fשקע פיזי בגב המחשב\nלחיבור כבל רשת",
        "\u200Fפרוטוקול הצפנה לאבטחת תקשורת",
        "\u200Fשכבת האפליקציה במודל TCP/IP"
      ],
      explanation: "\u200F🔌 Socket — ״שקע תכנותי״\n\n• כשאת כותבת קוד שמתחבר לשרת\n  את יוצרת Socket\n• מתחברת ל-IP + פורט\n\nכמו תקע בחשמל — מחבר את התוכנה לרשת"
    },
    {
      q: "\u200Fאיזה פורט מוקצה לשירות HTTPS?",
      correct: "443",
      choices: ["443", "80", "22", "3306"],
      explanation: "\u200F🔒 פורטים חשובים לזכור:\n\n• 80 = HTTP (לא מוצפן)\n• 443 = HTTPS (מוצפן)\n• 22 = SSH (גישה מרחוק)\n• 3306 = MySQL (מסד נתונים)\n\nכשאת רואה https:// — הדפדפן\nמתחבר לפורט 443 אוטומטית"
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
      explanation: "\u200F🏪 צד השרת:\n• bind() + listen() + accept()\n• ״אני מחכה בפורט 8080״\n\n🚶 צד הלקוח:\n• connect()\n• ״אני מתחבר לשרת״\n\nכמו עסק שפותח דלת — ולקוח שנכנס"
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
      explanation: "\u200F📚 מודל TCP/IP = 5 שכבות\n(מודל OSI = 7 שכבות)\n\nמלמטה למעלה:\n• 1 — פיזית (חוטים, אותות)\n• 2 — קו (MAC)\n• 3 — רשת (IP)\n• 4 — תעבורה (TCP/UDP)\n• 5 — אפליקציה (HTTP, DNS)"
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
      explanation: "\u200F🔬 Wireshark — מיקרוסקופ של הרשת\n\n• תופס כל חבילה שעוברת\n• מציג בפירוט מלא:\n  שכבה, header, כל byte\n• לא שולח — רק מנתח"
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
      explanation: "\u200F📦 כמו מכתב:\n• תוכן → בתוך מעטפה\n• מעטפה → בתוך שק דואר\n• שק → בתוך משאית\n\nכל שכבה ״עוטפת״ את שכבת מעליה\n\nDecapsulation = ההפך\nפותחים שכבה אחרי שכבה בהגעה"
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
      explanation: "\u200F🎯 כל שכבה מוסיפה header משלה:\n\n• שכבת תעבורה → פורטים\n• שכבת רשת → כתובות IP\n• שכבת קו → כתובות MAC\n\nכל שכבה ״דואגת״ לתחום שלה"
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
      explanation: "\u200F📋 PDU — שם החבילה בכל שכבה:\n\n• שכבה 5 (אפליקציה): Data\n• שכבה 4 (תעבורה): Segment\n• שכבה 3 (רשת): Packet\n• שכבה 2 (קו): Frame\n• שכבה 1 (פיזית): Bit\n\nכל שכבה עוטפת את ה-PDU של מעליה"
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
      explanation: "\u200F🔍 פילטרים שימושיים ב-Wireshark:\n\n• http — תעבורת HTTP בלבד\n• http.request — רק בקשות\n• http.response.code == 200 — רק תגובות מוצלחות\n• tcp.port == 80 — הכל על פורט 80\n• tls — לחיצת יד HTTPS\n  (התוכן מוצפן, לא ניתן לקרוא)"
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
      explanation: "\u200F📭 Decapsulation — ההפך מ-Encapsulation:\n\n• כרטיס הרשת קורא Frame (שכבה 2)\n• מוציא Packet → מעביר ל-IP (שכבה 3)\n• מוציא Segment → מעביר ל-TCP (שכבה 4)\n• מוציא Data → מעביר לאפליקציה\n\nכל שכבה בודקת את ה-header שלה\nלפני שמעבירה הלאה"
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
      explanation: "\u200F🌐 HTTP — פרוטוקול העברת היפרטקסט\n\nכשאת פותחת אתר:\n• הדפדפן שולח בקשת GET\n• השרת מחזיר דף HTML\n\nזה הבסיס של כל גלישה באינטרנט"
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
      explanation: "\u200F📖 GET — ״תני לי את הדף״\n📝 POST — ״הנה הנתונים שמילאתי בטופס״\n\nדוגמה:\n• נרשמת לאתר = בקשת POST\n  (שם משתמש + סיסמה)\n• גולשת לדף = בקשת GET"
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
      explanation: "\u200Fקודי תגובה — לפי קבוצות:\n\n✅ 2xx = הצלחה\n• 200 = הכל תקין\n\n↪️ 3xx = הפניה\n• 301 = הפניה קבועה\n• 302 = הפניה זמנית\n\n❌ 4xx = שגיאת לקוח\n• 404 = לא נמצא\n• 403 = אסור\n\n💥 5xx = שגיאת שרת\n• 500 = שגיאה פנימית"
    },
    {
      q: "\u200Fמהו פרוטוקול SMTP?",
      correct: "\u200Fפרוטוקול לשליחת דואר אלקטרוני",
      choices: [
        "\u200Fפרוטוקול לשליחת דואר אלקטרוני",
        "\u200Fפרוטוקול להעברת קבצים",
        "\u200Fפרוטוקול לתקשורת בזמן אמת",
        "\u200Fפרוטוקול לניהול רשת מרחוק"
      ],
      explanation: "\u200F📧 SMTP — פרוטוקול שליחת דואר פשוט\n• פורט 25 או 587\n\nכשאת שולחת מייל מג׳ימייל:\n• הוא עובר דרך שרת SMTP\n\nלקבלת מייל יש פרוטוקולים נפרדים:\n• POP3 — מוריד ומוחק מהשרת\n• IMAP — משאיר עותק בשרת"
    },
    {
      q: "\u200Fמה ההבדל בין גרסה 1.1 לגרסה 2 של HTTP?",
      correct: "\u200Fגרסה 2 תומכת בריבוב\n(כמה בקשות בחיבור אחד)\nגרסה 1.1 מטפלת בבקשה אחת בכל פעם",
      choices: [
        "\u200Fגרסה 2 תומכת בריבוב\n(כמה בקשות בחיבור אחד)\nגרסה 1.1 מטפלת בבקשה אחת בכל פעם",
        "\u200Fגרסה 2 פועלת על UDP\nגרסה 1.1 על TCP",
        "\u200Fההבדל רק במהירות\nגרסה 2 מהירה יותר",
        "\u200Fגרסה 2 דורשת הצפנה\nגרסה 1.1 לא"
      ],
      explanation: "\u200F🐢 גרסה 1.1:\n• כל משאב = חיבור TCP חדש\n• מקסימום 6 חיבורים לאתר\n\n🚀 גרסה 2:\n• ריבוב — עשרות בקשות בחיבור אחד\n• דחיסת כותרות — חוסך רוחב פס\n• דחיפת שרת — השרת שולח קבצים\n  לפני שביקשו אותם"
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
      explanation: "\u200F♾️ קוד 301 — הפניה קבועה\n• הדפדפן שומר את הכתובת החדשה\n• גוגל מעביר דירוג SEO\n• לדוגמה: אתר שעבר דומיין\n\n⏱️ קוד 302 — הפניה זמנית\n• הדפדפן לא שומר\n• SEO לא מועבר\n• לדוגמה: בדיקות A/B, תחזוקה זמנית"
    },
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
      explanation: "\u200F🧱 Scapy — ״לגו של רשתות״\n• ספריית Python לבניית חבילות שכבה-שכבה\n• דוגמה: IP()/TCP()/Raw('hello')\n\n🔧 שימושים:\n• בדיקות חדירה (penetration testing)\n• הבנת פרוטוקולים\n• מחקר רשתות"
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
      explanation: "\u200F🏗️ פירוק הפקודה:\n• IP(dst='8.8.8.8') = שכבת רשת — כתובת יעד\n• ICMP() = פרוטוקול ping\n• / = ״שכב מעל״ — חיבור שכבות\n\n🌐 מידע נוסף:\n• 8.8.8.8 = DNS הציבורי של Google\n• ICMP = הפרוטוקול שמאחורי ping"
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
      explanation: "\u200F🐍 Scapy — יכולות:\n• בניית packets שכבה-שכבה: Ether/IP/TCP/'data'\n• שליחה: send() / sendp()\n• sniffing: sniff()\n• בדיקת תגובות: sr1()\n\n🔬 Wireshark לעומתו:\n• passive sniffer בלבד\n• לא יכול ליצור או לשלוח packets\n\n💡 שימושי Scapy:\n• penetration testing\n• network research\n• פיתוח פרוטוקולים חדשים"
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
      explanation: "\u200F🔗 תחביר Scapy:\n• שכבות מחוברות עם /\n• Layer 3 = IP(dst=...)\n\n🚩 TCP Flags:\n• SYN = flags='S'\n• SYN-ACK = flags='SA'\n• ACK = flags='A'\n• RST = flags='R'\n• FIN = flags='F'\n\n📡 פקודות שימושיות:\n• sr1() = שולח ומקבל תגובה\n• sniff(filter='tcp port 80', count=10) = מלכד 10 packets"
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
      explanation: "\u200F🔍 lfilter — סינון ברמת Python:\n• דוגמה: sniff(lfilter=lambda p: p.haslayer(TCP) and p[TCP].flags == 'S')\n• מלכד רק TCP SYN packets\n\n⚡ ההבדל מ-BPF filter:\n• BPF (filter='tcp') = נשלח ל-kernel — מהיר יותר\n• lfilter = רץ ב-Python — מאפשר לוגיקה מורכבת\n• BPF לסינון בסיסי, lfilter ללוגיקה מתקדמת"
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
      explanation: "\u200F📦 TCP — שליח עם חתימה:\n• ״קיבלת? אשר לי!״\n• HTTP, HTTPS, SSH, FTP\n\n✉️ UDP — עיתון שמושלך לדלת:\n• מהיר, בלי אישור קבלה\n• Zoom, Discord, gaming, DNS\n• עדיף פריים חסר מאשר עיכוב"
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
      explanation: "\u200F🤝 לחיצת יד בשלושה שלבים:\n• SYN = ״היי, אפשר לדבר?״\n• SYN-ACK = ״כן, ואני גם רוצה!״\n• ACK = ״אחלה, נתחיל!״\n\n🔒 אחרי 3 הצעדים — החיבור פתוח\n\n👋 סגירה גם מורכבת:\n• FIN → ACK → FIN → ACK"
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
      explanation: "\u200F🐌 Flow Control — ״רגע, אני לא מספיקה לעבד!״\n• הנמען מודיע לשולח מה ה-Window Size שלו\n• כמו לומר למישהי ״דברי לאט יותר״\n\n📊 איך זה עובד:\n• Window Size גדול = שולח הרבה בבת אחת\n• Window Size קטן = מאט את השליחה\n• Window Size = 0 → עצור לגמרי!"
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
      explanation: "\u200F📋 TCP header — 20 bytes מינימום:\n• Src/Dst port (4B)\n• Sequence (4B)\n• Acknowledgment (4B)\n• Flags + Window (4B)\n• Checksum + Urgent (4B)\n• Options — עד 40B נוספים\n\n📋 UDP header — 8 bytes בלבד:\n• Src port (2B)\n• Dst port (2B)\n• Length (2B)\n• Checksum (2B)\n\n⚡ UDP עדיף כש-latency חשוב:\n• streaming, DNS, gaming, VoIP"
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
      q: "\u200Fמה זה DHCP?",
      correct: "\u200Fפרוטוקול שמקצה כתובות IP אוטומטית\nלמכשירים ברשת",
      choices: [
        "\u200Fפרוטוקול שמקצה כתובות IP אוטומטית\nלמכשירים ברשת",
        "\u200Fפרוטוקול הצפנה לתקשורת מאובטחת",
        "\u200Fפרוטוקול לניתוב בין רשתות",
        "\u200Fפרוטוקול לגיבוי נתוני רשת"
      ],
      explanation: "\u200F🎰 DHCP — ״יצירת חשבון אוטומטית״\n• כשאת מתחברת ל-WiFi\n• DHCP מקצה לך אוטומטית:\n\n📋 מה מקבלים:\n• כתובת IP\n• Subnet Mask\n• Default Gateway\n• שרת DNS\n\n💡 בלי DHCP — היית צריכה להגדיר ידנית!"
    },
    {
      q: "\u200Fמה זה subnet mask?",
      correct: "\u200Fמספר שמגדיר איזה חלק של כתובת IP\nהוא ״כתובת הרשת״ ואיזה ״כתובת המארח״",
      choices: [
        "\u200Fמספר שמגדיר איזה חלק של כתובת IP\nהוא ״כתובת הרשת״ ואיזה ״כתובת המארח״",
        "\u200Fסיסמה לאבטחת הרשת האלחוטית",
        "\u200Fטווח הכתובות הזמינות ב-DHCP",
        "\u200Fכתובת ה-gateway של הרשת"
      ],
      explanation: "\u200F🎭 Subnet Mask — ״ציר ה-IP״\n• 255.255.255.0 = 24 ביטים לרשת, 8 ביטים למארח\n\n📊 דוגמה:\n• /24 = 256 כתובות (254 שמישות)\n• CIDR: 192.168.1.0/24\n• כתובת רשת: 192.168.1.0\n• Broadcast: 192.168.1.255"
    },
    {
      q: "\u200Fמה Gratuitous ARP ולמה הוא גם שימושי וגם מסוכן?",
      correct: "\u200FARP reply שנשלח ללא בקשה\nשימושי לעדכון cache אחרי failover\nמסוכן כי תוקף יכול להרעיל ARP tables",
      choices: [
        "\u200FARP reply שנשלח ללא בקשה\nשימושי לעדכון cache אחרי failover\nמסוכן כי תוקף יכול להרעיל ARP tables",
        "\u200FARP ל-IP שאינו קיים ברשת",
        "\u200FARP request לבדיקת זמינות",
        "\u200FARP עם TTL גבוה במיוחד"
      ],
      explanation: "\u200F📡 Gratuitous ARP:\n• device שולח ARP reply עם ה-IP שלו עצמו\n• ללא שנשאלה שאלה\n\n✅ שימוש לגיטימי:\n• HSRP/VRRP failover — gateway חדש מכריז על עצמו\n• IP conflict detection\n• עדכון switches\n\n🚨 שימוש זדוני:\n• ARP Poisoning — שולח GARP עם IP של gateway\n  אבל MAC של תוקף\n• DAI (Dynamic ARP Inspection) ב-switches מונע זאת"
    },
    {
      q: "\u200Fמה ההבדל בין ARP ל-RARP?",
      correct: "\u200FARP: IP → MAC (המשמש כיום)\nRARP (מיושן): MAC → IP\nלפני DHCP, diskless stations ביקשו IP לפי MAC",
      choices: [
        "\u200FARP: IP → MAC (המשמש כיום)\nRARP (מיושן): MAC → IP\nלפני DHCP, diskless stations ביקשו IP לפי MAC",
        "\u200FARP ל-IPv4\nRARP ל-IPv6",
        "\u200FRARP = Reverse ARP\n= ARP להפסקת connection",
        "\u200Fאין הבדל — RARP הוא שם ישן ל-ARP"
      ],
      explanation: "\u200F📤 ARP (RFC 826, 1982):\n• Who has IP X? Tell me your MAC\n• משמש כיום בכל רשת\n\n📥 RARP (RFC 903, 1984):\n• I'm MAC X, what's my IP?\n• מיושן — הוחלף ע\"י BOOTP ואח\"כ DHCP\n\n🔄 IPv6:\n• משתמש ב-NDP (Neighbor Discovery Protocol)\n• multicast, לא broadcast\n• משולב עם ICMPv6"
    },
    {
      q: "\u200Fכמה זמן ARP cache נשמר\nומה קורה כשהוא מתרענן?",
      correct: "\u200FLinux: 60 שניות idle, 20 שניות stale\nWindows: 15-45 שניות\nTTL קצר = overhead, ארוך = פגיעות",
      choices: [
        "\u200FLinux: 60 שניות idle, 20 שניות stale\nWindows: 15-45 שניות\nTTL קצר = overhead, ארוך = פגיעות",
        "\u200FARP cache לעולם לא מתרענן\nנמחק רק ב-reboot",
        "\u200Fכל הרשומות נמחקות כל 5 שניות",
        "\u200FARP cache = 24 שעות כמו DNS TTL"
      ],
      explanation: "\u200F🖥️ פקודות צפייה:\n• Linux: ip neigh show\n• Linux: ip neigh flush all (מחיקה)\n• Linux/Mac: arp -n\n• Windows: arp -a\n\n📊 מצבי ARP cache:\n• REACHABLE — verified\n• STALE — לא verified\n• DELAY — בדיקה\n• PROBE — שולח ARP\n• FAILED — נכשל\n\n⚠️ ARP poisoning עובד כי:\n• cache מתקבל ממי שמגיב ראשון"
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
      q: "\u200Fמה תהליך DHCP DORA?",
      correct: "\u200FDiscover → Offer → Request → Acknowledge\nמעניק IP, subnet, gateway, DNS",
      choices: [
        "\u200FDiscover → Offer → Request → Acknowledge\nמעניק IP, subnet, gateway, DNS",
        "\u200FDNS → OFFER → REQUEST → ACK",
        "\u200FDiscover → Relay → Access → Gateway",
        "\u200Frequest → reply בלבד"
      ],
      explanation: "\u200F📡 DHCP DORA — 4 שלבים:\n• DISCOVER: client שולח broadcast\n  (0.0.0.0 → 255.255.255.255) UDP port 67\n• OFFER: server מציע IP + lease time\n• REQUEST: client מבקש את ה-IP המוצע\n• ACK: server מאשר ומעניק\n\n⏱️ Lease:\n• IP ניתן לתקופה (1-24 שעות)\n• Renewal ב-50% מה-lease\n• DHCP server מזהה client לפי MAC address"
    },
    {
      q: "\u200Fמה DHCP Snooping ואיזו בעיה הוא פותר?",
      correct: "\u200FFeature ב-switch שחוסם DHCP servers לא מורשים\nמונע Rogue DHCP server שמעניק IPs ומסיט traffic",
      choices: [
        "\u200FFeature ב-switch שחוסם DHCP servers לא מורשים\nמונע Rogue DHCP server שמעניק IPs ומסיט traffic",
        "\u200Fהצפנת DHCP traffic",
        "\u200Fמגביל מספר IPs ל-client",
        "\u200FDHCP ב-IPv6 בלבד"
      ],
      explanation: "\u200F🚨 Rogue DHCP Server attack:\n• תוקף מפעיל DHCP server משלו\n• מקדים לענות על DISCOVER\n• מעניק IPs עם default gateway = IP שלו = MITM\n\n🛡️ DHCP Snooping:\n• Trusted ports (uplink) = מאושר\n• Untrusted (clients) = DHCP replies נחסמות\n• Binding table: MAC+IP+VLAN+PORT\n  — משמש גם ל-DAI (Dynamic ARP Inspection)"
    },
    {
      q: "\u200Fכיצד APIPA עובד כשאין DHCP server?",
      correct: "\u200Fמחשב מקצה לעצמו IP מ-169.254.0.0/16\n(APIPA/link-local) — תקשורת מקומית בלבד",
      choices: [
        "\u200Fמחשב מקצה לעצמו IP מ-169.254.0.0/16\n(APIPA/link-local) — תקשורת מקומית בלבד",
        "\u200Fמחשב מחכה לנצח עד שמגיע DHCP server",
        "\u200Fמחשב משתמש ב-127.0.0.1",
        "\u200Fהמחשב כותב שגיאה ומשבית את הרשת"
      ],
      explanation: "\u200F🔄 APIPA (Automatic Private IP Addressing):\n• נתמך ב-Windows, Mac, Linux\n• Range: 169.254.0.0/16\n• Client בוחר IP אקראי ומאמת ב-ARP\n• אם רואים 169.254.x.x = DHCP נכשל\n\n📋 פרוטוקולים קשורים:\n• RFC 3927 (IPv4 Link-Local)\n• IPv6: link-local = fe80::/10, תמיד אוטומטי\n• Zeroconf/Bonjour משתמש ב-link-local"
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
      q: "\u200Fמה NAT ואיזו בעיה הוא פתר בשנות ה-90?",
      correct: "\u200FNetwork Address Translation — מאפשר לרשתות פנימיות\nעם IPs פרטיים לצאת לאינטרנט עם IP ציבורי אחד\nפתר מחסור ב-IPv4",
      choices: [
        "\u200FNetwork Address Translation — מאפשר לרשתות פנימיות\nעם IPs פרטיים לצאת לאינטרנט עם IP ציבורי אחד\nפתר מחסור ב-IPv4",
        "\u200FNAT = הצפנת תעבורת הרשת",
        "\u200FNAT מאיץ את התקשורת על ידי caching",
        "\u200FNAT = פרוטוקול לניתוב BGP"
      ],
      explanation: "\u200F🌐 הבעיה:\n• IPv4: 4.3 מיליארד כתובות\n• כבר ב-1990 ברור שלא יספיקו\n\n🔄 NAT (RFC 3022):\n• Private ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16\n• ה-router שומר NAT table:\n  internal IP:port ↔ external IP:port\n• PAT = עשרות אלפי connections דרך IP אחד\n\n📋 IPv6 אמור לבטל צורך ב-NAT\n(אבל NAT עדיין קיים בארגונים)"
    },
    {
      q: "\u200Fמה ההבדל בין Static NAT לבין Dynamic NAT לבין PAT?",
      correct: "\u200FStatic: IP פנימי → IP ציבורי קבוע (1:1)\nDynamic: pool של IPs ציבוריים\nPAT: כל ה-clients → IP ציבורי אחד + ports שונים",
      choices: [
        "\u200FStatic: IP פנימי → IP ציבורי קבוע (1:1)\nDynamic: pool של IPs ציבוריים\nPAT: כל ה-clients → IP ציבורי אחד + ports שונים",
        "\u200Fכולם זהים",
        "\u200FStatic = IPv6, Dynamic = IPv4",
        "\u200FPAT = הסוג הכי ישן"
      ],
      explanation: "\u200F🔀 שלושה סוגי NAT:\n• Static NAT: שרת פנימי נגיש מבחוץ (1:1 mapping)\n• Dynamic NAT: pool של IPs ציבוריים\n• PAT/Overload (הנפוץ ביותר):\n  192.168.1.5:1234 → 203.0.113.1:54321\n\n📋 NAT table entry:\n• 5 טיפלות: src_ip, src_port, dst_ip, dst_port, protocol\n• iptables: MASQUERADE = dynamic PAT"
    },
    {
      q: "\u200Fלמה NAT שובר end-to-end connectivity ומה הפתרונות?",
      correct: "\u200Fמחשב מאחורי NAT לא ניתן לחיבור ישיר מבחוץ\nפתרונות: UPnP, STUN, Port Forwarding, IPv6, VPN",
      choices: [
        "\u200Fמחשב מאחורי NAT לא ניתן לחיבור ישיר מבחוץ\nפתרונות: UPnP, STUN, Port Forwarding, IPv6, VPN",
        "\u200FNAT לא שובר connectivity — הכל שקוף",
        "\u200Fהפתרון היחיד הוא IPv6",
        "\u200FPort Forwarding לא עובד עם NAT"
      ],
      explanation: "\u200F🔧 NAT traversal — פתרונות:\n• STUN (Session Traversal Utilities for NAT)\n  — WebRTC, VoIP\n• ICE = STUN + TURN\n• TURN = relay server כש-STUN נכשל\n• UPnP: port forwarding אוטומטי\n• BitTorrent/P2P: hole punching\n\n🖥️ Port Forwarding:\n• external port → internal IP:port\n• SSH, gaming servers"
    },
    {
      q: "\u200Fמה כתובות IP פרטיות ולמה לא ניתן לנתב אותן באינטרנט?",
      correct: "\u200FRFC 1918: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16\nrouters באינטרנט פשוט זורקים packets לכתובות אלה",
      choices: [
        "\u200FRFC 1918: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16\nrouters באינטרנט פשוט זורקים packets לכתובות אלה",
        "\u200Fכתובות פרטיות מוצפנות אוטומטית",
        "\u200Fניתן לנתב אותן — רק ISP לא מאפשר",
        "\u200Fרק 192.168.x.x הן פרטיות"
      ],
      explanation: "\u200F🏠 RFC 1918 private ranges:\n• 10.0.0.0/8 (16M addresses)\n• 172.16.0.0/12 (1M)\n• 192.168.0.0/16 (64K)\n\n🚫 ISPs מגדירים bogon filters:\n• חוסמים routing לכתובות אלה\n\n📋 IANA גם הקצתה:\n• 127.0.0.0/8 (loopback)\n• 169.254.0.0/16 (link-local)\n• 100.64.0.0/10 (Carrier-Grade NAT — ISPs)"
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
      q: "\u200Fמה VLAN ואיך הוא מפריד תעבורה בסוויץ' פיזי אחד?",
      correct: "\u200FVirtual LAN — מפריד broadcast domains ב-software\nתעבורה בין VLANs דורשת routing (Layer 3)",
      choices: [
        "\u200FVirtual LAN — מפריד broadcast domains ב-software\nתעבורה בין VLANs דורשת routing (Layer 3)",
        "\u200FVLAN = חיבור בין switchים שונים",
        "\u200FVLAN = הצפנת תעבורה בתוך switch",
        "\u200FVLAN = VLAN Access Layer Network"
      ],
      explanation: "\u200F🏷️ 802.1Q VLAN tagging:\n• מוסיף 4 bytes ל-Ethernet frame\n• TPID (0x8100) + PCP (priority) + VLAN ID\n• 12 bits = 4094 VLANs\n\n🔌 סוגי ports:\n• Access port: port שמשתמש רואה, untag\n• Trunk port: בין switchים, מרובה VLANs עם tags\n• Native VLAN = default ב-trunk (ללא tag)\n\n🔀 Inter-VLAN routing:\n• router-on-a-stick (sub-interfaces)\n• או Layer 3 switch"
    },
    {
      q: "\u200Fמה Trunk Port לעומת Access Port ב-VLANs?",
      correct: "\u200FAccess Port: מכשיר קצה, VLAN אחד, ללא tag\nTrunk Port: בין switchים/router, מרובה VLANs, עם 802.1Q tag",
      choices: [
        "\u200FAccess Port: מכשיר קצה, VLAN אחד, ללא tag\nTrunk Port: בין switchים/router, מרובה VLANs, עם 802.1Q tag",
        "\u200FTrunk = מהיר יותר מ-Access",
        "\u200FAccess Port = IPv6, Trunk = IPv4",
        "\u200FTrunk = encrypted, Access = unencrypted"
      ],
      explanation: "\u200F🔌 Access port:\n• PC/printer/server מחוברים\n• Switch tag-ים frames פנימית עם VLAN ID\n\n🔗 Trunk port:\n• switch-to-switch, switch-to-router\n• 802.1Q tag: 4 bytes נוספים\n• DTP: Cisco protocol לניהול trunk אוטומטי\n\n📋 VLANs מיוחדים:\n• VLAN 1 (default), 1002-1005 (reserved)\n• Native VLAN: untagged ב-trunk — security risk"
    },
    {
      q: "\u200Fמה VLAN Hopping attack ואיך מגנים?",
      correct: "\u200FSwitch Spoofing: תוקף מדמה switch → trunk → גישה לכל VLANs\nDouble Tagging: 2 tags → קופץ ל-VLAN אחר\nהגנה: disable DTP, שנה native VLAN",
      choices: [
        "\u200FSwitch Spoofing: תוקף מדמה switch → trunk → גישה לכל VLANs\nDouble Tagging: 2 tags → קופץ ל-VLAN אחר\nהגנה: disable DTP, שנה native VLAN",
        "\u200FVLAN Hopping = ניצול IPv6 ב-VLAN",
        "\u200Fלא ניתן לתקוף VLANs",
        "\u200Fהגנה: הצפנה בלבד"
      ],
      explanation: "\u200F🚨 Switch Spoofing:\n• מחשב שולח DTP frames\n• switch פותח trunk → גישה לכל VLANs\n\n🏷️ Double Tagging:\n• tag ראשוני = native VLAN (מוסר)\n• tag שני = VLAN יעד\n• עובד רק עבור native VLAN\n\n🛡️ הגנה:\n• switchport mode access (השבתת DTP)\n• native VLAN ≠ כל VLAN משתמש\n• PVLAN (Private VLAN)\n• port-security"
    },
    {
      q: "\u200Fמה Private VLAN (PVLAN)?",
      correct: "\u200Fמחלק VLAN ל-sub-VLANs:\nIsolated (לא מדבר עם אף port אחר)\nCommunity (מדבר בקבוצה)\nPromiscuous (מדבר עם כולם = gateway)",
      choices: [
        "\u200Fמחלק VLAN ל-sub-VLANs:\nIsolated (לא מדבר עם אף port אחר)\nCommunity (מדבר בקבוצה)\nPromiscuous (מדבר עם כולם = gateway)",
        "\u200FPVLAN = VLAN מוצפן",
        "\u200FPVLAN = VLAN לניהול בלבד",
        "\u200FPVLAN = switch private ל-vendor אחד"
      ],
      explanation: "\u200F🏢 PVLAN שימושי ב-hosting:\n• כל לקוח isolated מהשני\n• כולם עם גישה ל-gateway\n\n🔒 סוגי ports:\n• Isolated: לא מדברים זה עם זה (אפילו לא ARP)\n• Community: קבוצות שמדברות ביניהן\n• Promiscuous: router/firewall שמדבר עם כולם\n\n🛡️ יתרון אבטחה:\n• מגביל lateral movement\n• גם אם תוקף פרץ ל-server אחד"
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
      q: "\u200Fמה Spanning Tree Protocol ואיזו בעיה הוא פותר?",
      correct: "\u200FSTP מונע Broadcast Storm מלולאות בין switchים\nחוסם פורטים מיותרים ומשאיר עץ ללא לולאות",
      choices: [
        "\u200FSTP מונע Broadcast Storm מלולאות בין switchים\nחוסם פורטים מיותרים ומשאיר עץ ללא לולאות",
        "\u200FSTP מגדיר VLAN routing",
        "\u200FSTP = Secure Transmission Protocol",
        "\u200FSTP מונע ARP attacks"
      ],
      explanation: "\u200F🌀 Broadcast Storm:\n• frame יוצא מ-switch A → B → A → B → אינסוף\n\n🌳 STP (802.1D):\n• בוחר Root Bridge (הנמוך BID = Priority + MAC)\n• כל switch בוחר Root Port (הנמוך cost ל-root)\n• Blocked ports = לא מעבירים data\n\n⚡ גרסאות מתקדמות:\n• Convergence = 30-50 שניות\n• RSTP (802.1w) = תוך 1-2 שניות\n• MSTP (802.1s) = STP per-VLAN group"
    },
    {
      q: "\u200Fמה ה-BPDU ואיך STP בוחר Root Bridge?",
      correct: "\u200FBridge Protocol Data Unit — הודעת STP עם BID (priority + MAC)\nRoot Bridge = switch עם BID הנמוך ביותר\n(priority ראשון, אחר כך MAC)",
      choices: [
        "\u200FBridge Protocol Data Unit — הודעת STP עם BID (priority + MAC)\nRoot Bridge = switch עם BID הנמוך ביותר\n(priority ראשון, אחר כך MAC)",
        "\u200FRoot Bridge = switch עם MAC הגבוה ביותר",
        "\u200FBPDU = Broadcast PDU שנשלח לכל VLANs",
        "\u200FRoot Bridge נבחר ע\"י admin בלבד"
      ],
      explanation: "\u200F🆔 BID (Bridge ID):\n• 2 bytes Priority (ברירת מחדל 32768)\n• 6 bytes MAC\n• Bridge עם BID הנמוך = Root Bridge\n• ניתן לכפות: spanning-tree vlan 1 priority 0\n\n🔌 סוגי Ports:\n• Root Port: port עם הנמוך Root Path Cost\n• Designated Port: port שמעביר ל-root\n• Blocked Port: לא מעביר data (רק BPDU)\n\n🛡️ BPDU Guard:\n• מבטל port שמקבל BPDU בפורט של endpoint"
    },
    {
      q: "\u200Fמה PortFast ו-BPDU Guard ב-STP?",
      correct: "\u200FPortFast: מקפיץ access port ישירות ל-Forwarding\nללא 30 שניות המתנה — ל-PCs בלבד\nBPDU Guard: מבטל port שמקבל BPDU (מגן מ-switch לא מורשה)",
      choices: [
        "\u200FPortFast: מקפיץ access port ישירות ל-Forwarding\nללא 30 שניות המתנה — ל-PCs בלבד\nBPDU Guard: מבטל port שמקבל BPDU (מגן מ-switch לא מורשה)",
        "\u200FPortFast = מאיץ STP convergence בין switchים",
        "\u200FBPDU Guard = הצפנת BPDU",
        "\u200Fשניהם פוגעים ב-stability"
      ],
      explanation: "\u200F🔄 STP States:\n• Disabled → Blocking → Listening (15s)\n• → Learning (15s) → Forwarding\n\n⚡ PortFast:\n• מדלג ישירות ל-Forwarding\n• רק ל-access ports ל-PCs/servers\n• לא בין switchים!\n\n🛡️ Guards:\n• BPDU Guard: PortFast port מקבל BPDU = err-disabled\n• Loop Guard: מבטל port שהפסיק לקבל BPDUs\n• Root Guard: מונע אובדן root bridge"
    },
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
    },
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
    },
    {
      q: "\u200Fמה ההבדל בין distance-vector לבין link-state routing protocols?",
      correct: "\u200FDistance-vector (RIP): שולח routing table לשכנים\nLink-state (OSPF): שולח topology מלאה\nכל router מחשב SPF בעצמו",
      choices: [
        "\u200FDistance-vector (RIP): שולח routing table לשכנים\nLink-state (OSPF): שולח topology מלאה\nכל router מחשב SPF בעצמו",
        "\u200Fאין הבדל — שתיהן RIP",
        "\u200FOSPF שולח רק שינויים, RIP שולח הכל",
        "\u200FLink-state = ל-IPv6 בלבד"
      ],
      explanation: "\u200F📡 RIP (Distance-vector):\n• Bellman-Ford algorithm\n• מדד = hop count (מקסימום 15 hops)\n• עדכון כל 30 שניות\n• בעיה: counting to infinity, slow convergence\n\n🗺️ OSPF (Link-state):\n• Dijkstra's SPF algorithm\n• מדד = cost (100/bandwidth Mbps)\n• LSA flooding\n• Area hierarchy (backbone area 0)\n\n📋 עוד פרוטוקולים:\n• EIGRP (Cisco): hybrid — distance vector עם rapid convergence\n• BGP: path vector — מדיניות, לא מהירות"
    },
    {
      q: "\u200Fמה BGP ומה תפקידו באינטרנט?",
      correct: "\u200FBorder Gateway Protocol — ה-routing protocol של האינטרנט\nמנהל routing בין Autonomous Systems (AS)\nISPs, חברות גדולות",
      choices: [
        "\u200FBorder Gateway Protocol — ה-routing protocol של האינטרנט\nמנהל routing בין Autonomous Systems (AS)\nISPs, חברות גדולות",
        "\u200FBGP = Border Gateway Port — פרוטוקול ל-VPN",
        "\u200FBGP עובד רק בתוך ארגון אחד",
        "\u200FBGP = הגרסה המתקדמת של OSPF"
      ],
      explanation: "\u200F🌐 BGP (RFC 4271) — Path Vector protocol:\n• AS = ארגון עם ASN (AS Number)\n• IANA מקצה ASNs (16bit: 1-64511, 32bit: 131072+)\n\n🔀 סוגי BGP:\n• eBGP: בין ASים שונים\n• iBGP: בתוך AS\n\n📋 BGP attributes:\n• AS-Path (loop prevention)\n• Next-Hop, Local-Preference, MED, Community\n• Full Internet routing table:\n  ~900K prefixes IPv4 + 200K IPv6"
    },
    {
      q: "\u200Fמה OSPF DR/BDR ולמה חשוב?",
      correct: "\u200FDesignated Router/Backup — על multiaccess network\nDR מרכז LSA flooding כדי להפחית overhead\nDR נבחר לפי Router ID",
      choices: [
        "\u200FDesignated Router/Backup — על multiaccess network\nDR מרכז LSA flooding כדי להפחית overhead\nDR נבחר לפי Router ID",
        "\u200FDR = Default Route ב-OSPF",
        "\u200FDR נבחר רק ב-WAN links",
        "\u200FBDR = Backup Default Route"
      ],
      explanation: "\u200F📊 הבעיה ללא DR:\n• N routers = N×(N-1)/2 adjacencies = O(N²) LSAs\n• עם DR: כל router adjacency עם DR בלבד = O(N)\n\n⚙️ DR Priority:\n• ניתן להגדיר (ברירת מחדל = 1, 0 = לא eligible)\n• Router ID: IP גבוה ביותר של Loopback\n\n🗺️ OSPF Areas:\n• Area 0 (backbone) חייב לחבר כל area אחרת\n• ABR (Area Border Router) = router בין areas"
    },
    {
      q: "\u200Fמה ECMP ואיך routers מאזנים עומס?",
      correct: "\u200FEqual Cost Multi-Path: מספר routes בעלות שווה לאותו יעד\nrouter מחלק traffic ביניהם (per-flow hash)",
      choices: [
        "\u200FEqual Cost Multi-Path: מספר routes בעלות שווה לאותו יעד\nrouter מחלק traffic ביניהם (per-flow hash)",
        "\u200FECMP = encrypted BGP",
        "\u200FRouter תמיד בוחר route אחד בלבד",
        "\u200FECMP = External Cost Measurement Protocol"
      ],
      explanation: "\u200F🔀 ECMP — איזון עומס:\n• Linux מאזן per-flow (hash src+dst IP+port)\n• Cisco per-destination ברירת מחדל\n• Maximum-paths: OSPF 16 paths, BGP 2-16\n• כל flow הולך ל-path אחד (consistency)\n\n🔗 Layer 2 — Link Aggregation:\n• LACP: bundle ports פיזיים\n• LAG/bonding: Linux bond0\n• EtherChannel (Cisco)"
    }
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
    },
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
    },
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
    },
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
    },
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
    },
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
    }
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
    },
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
    },
    {
      q: "\u200Fמה הפורט הסטנדרטי של SSH?",
      correct: "\u200F22",
      choices: ["\u200F22", "\u200F23", "\u200F443", "\u200F8080"],
      explanation: "\u200F🔢 פורטים חשובים:\n• SSH = 22\n• Telnet = 23 (לא מוצפן!)\n• HTTPS = 443\n• HTTP = 80\n\n🛡️ טיפ אבטחה:\n• Admins לפעמים מעבירים SSH לפורט 2222\n• כדי להפחית bot scanning\n• security through obscurity — לא פתרון אמיתי"
    },
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
    },
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
    },
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
    }
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
    },
    {
      q: "\u200Fמה NAT מאפשר?",
      correct: "\u200Fמכשירים רבים עם IP פרטי\nלשתף IP ציבורי אחד",
      choices: [
        "\u200Fמכשירים רבים עם IP פרטי\nלשתף IP ציבורי אחד",
        "\u200Fהצפנת כתובות IP פרטיות",
        "\u200Fהקצאת IP סטטי לכל מכשיר",
        "\u200Fהגנה מפני DDoS"
      ],
      explanation: "\u200F🏠 NAT — דוגמה מהבית:\n• 10+ מכשירים עם 192.168.x.x\n• אבל IP ציבורי אחד לכולם\n• NAT ב-router עושה את ה-translation\n\n🌍 למה זה חשוב:\n• זו הסיבה ש-IPv4 עדיין חי\n• NAT האריך את חייו בעשורים"
    },
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
    },
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
    },
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
    }
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
    },
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
    },
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
    },
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
    },
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
    }
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
    },
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
    },
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
    },
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
    },
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
    },
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
    }
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
    },
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
    },
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
    },
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
    },
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
    }
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
    },
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
    },
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
    },
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
    },
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
    }
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
    },
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
    },
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
    },
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
    },
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
    }
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
    },
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
    },
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
    },
    {
      q: "\u200Fמה Internet Exchange Point (IXP) ולמה חשוב?",
      correct: "\u200FIXP = מרכז פיזי שבו ISPs/CDNs\nמחברים ישירות ומחליפים BGP routes\nללא עלות transit",
      choices: [
        "\u200FIXP = מרכז פיזי שבו ISPs/CDNs\nמחברים ישירות ומחליפים BGP routes\nללא עלות transit",
        "\u200FIXP = ISP מרכזי שמנהל כל ה-routing",
        "\u200FIXP = Internet extension protocol",
        "\u200FIXP = חיבור בין IPv4 ל-IPv6"
      ],
      explanation: "\u200F🌍 IXP בעולם\n• ישראל: ILIX\n• AMS-IX (Amsterdam)\n• DE-CIX (Frankfurt)\n• LINX (London)\n\n🤝 Peering vs Transit\n• Peering: חיבור ישיר בין 2 AS ללא תשלום\n• Transit: תשלום ל-upstream ISP ל-routing כללי\n\n🔀 שיטות Routing\n• Hot potato: שלח traffic ל-peer מוקדם ככל האפשר\n• Cold potato: שמור traffic ברשת שלך כמה שאפשר\n• Route server: מנהל BGP sessions לכל משתתפי IXP"
    },
    {
      q: "\u200Fמה Submarine Cable ואיך אינטרנט עובד תחת האוקיינוס?",
      correct: "\u200Fכבלים פיזיים בתחתית האוקיינוס\n= 95% מתעבורת ה-data הבינלאומית\nLatency: ~100ms לחצות האטלנטי",
      choices: [
        "\u200Fכבלים פיזיים בתחתית האוקיינוס\n= 95% מתעבורת ה-data הבינלאומית\nLatency: ~100ms לחצות האטלנטי",
        "\u200Fאינטרנט בינלאומי = לוויינים בעיקר",
        "\u200FLatency לחצות אוקיינוס = 5ms",
        "\u200Fכבלי תת-ים = 50% מה-traffic בלבד"
      ],
      explanation: "\u200F🌊 Submarine Cables\n• אלומת fiber optic עם הגנות מכניות\n• Repeaters כל 50-100km\n• Capacity: terabits/sec\n\n⚠️ סיכונים\n• שיטפונות, עוגנים, כרישים\n• Repair ships: 3-6 שבועות\n\n🛰️ חלופות\n• Starlink/LEO: ~20ms latency — יתרון על כבלים\n\n🏢 כבלים פרטיים\n• Microsoft: Azure\n• Google: Equiano\n• Facebook: MAREA"
    }
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
    },
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
    },
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
    },
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
    },
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
    }
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
    },
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
    },
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
    },
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
    },
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
    }
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
    },
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
    },
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
    },
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
    },
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
    }
  ],
  27: [
    {
      q: "מה ההסמכה המרכזית ל-Network Engineer ברמת Entry/Mid?",
      correct: "‏CCNA — Cisco Certified Network Associate",
      choices: [
        "‏CCNA — Cisco Certified Network Associate",
        "‏OSCP — Offensive Security Certified Professional",
        "‏AWS SAA — Solutions Architect Associate",
        "‏CKA — Certified Kubernetes Administrator"
      ],
      explanation: "‏CCNA היא הסמכת הרשתות הנחשבת ביותר. מכסה VLAN, STP, OSPF, ACL, NAT, VPN. מעל CCNA: CCNP ‎(מתקדם)‎, CCIE ‎(Expert — מהקשות בתעשייה)‎. ‏CompTIA Network+ היא נקודת כניסה קלה יותר לפני CCNA."
    },
    {
      q: "מה ההבדל בין Penetration Tester לבין SOC Analyst?",
      correct: "‏Pentester תוקף מערכות ‎(בהרשאה)‎ למציאת חולשות — SOC Analyst מנטר ומגיב לאיומים בזמן אמת",
      choices: [
        "‏Pentester תוקף מערכות ‎(בהרשאה)‎ למציאת חולשות — SOC Analyst מנטר ומגיב לאיומים בזמן אמת",
        "‏Pentester עובד עם קוד — SOC Analyst עם חומרה",
        "‏SOC Analyst מנהל firewalls — Pentester כותב malware",
        "שניהם אותו תפקיד בשמות שונים"
      ],
      explanation: "‏Red Team (Pentester) = תוקף לגיטימי. מקבל scope, מחפש חולשות, כותב דוח. ‏Blue Team (SOC) = מגן. מנטר SIEM, מנתח alerts, עוצר תקיפות. הסמכות: Pentester → CEH, OSCP. ‏SOC → Security+, CySA+, GCIA."
    },
    {
      q: "למה ידע ברשתות הכרחי לעבודה עם AWS/Cloud?",
      correct: "‏AWS VPC = רשת וירטואלית עם subnets, routing tables, security groups — בדיוק כמו רשת פיזית",
      choices: [
        "‏AWS VPC = רשת וירטואלית עם subnets, routing tables, security groups — בדיוק כמו רשת פיזית",
        "‏Cloud לא קשור לרשתות — הכל מנוהל אוטומטית",
        "ידע ברשתות נדרש רק ל-on-premise, לא לCloud",
        "‏AWS דורש CCNA כתנאי לשימוש"
      ],
      explanation: "‏AWS VPC דורש תכנון: CIDR allocation, Public vs Private subnets, Internet Gateway, NAT Gateway, route tables, security groups (stateful firewall), NACLs (stateless). ‏Load Balancer: Layer 4 vs Layer 7. ‏Kubernetes: CNI plugins, Pod networking, Ingress. כל אלה = רשתות."
    },
    {
      q: "מה ההבדל בין NOC לבין SOC?",
      correct: "‏NOC: Network Operations Center — זמינות ו-performance. SOC: Security Operations Center — threats ו-incidents. לעיתים מאוחדים ב-Unified Operations Center",
      choices: [
        "‏NOC: Network Operations Center — זמינות ו-performance. SOC: Security Operations Center — threats ו-incidents. לעיתים מאוחדים ב-Unified Operations Center",
        "‏NOC ו-SOC זהים",
        "‏SOC = Network Operations Center",
        "‏NOC = Security, SOC = Performance"
      ],
      explanation: "‏NOC: ניטור uptime, BGP routes, bandwidth, latency, hardware failures. ‏Tools: Nagios, Zabbix, PRTG, SolarWinds. ‏SOC: SIEM alerts, threat hunting, incident response. ‏Tools: Splunk, Sentinel, CrowdStrike. ‏Career paths diverge: NOC → Network Engineer → CCIE / Cloud Architect. ‏SOC → Security Analyst → Pentester → CISSP → CISO."
    },
    {
      q: "מה Cloud native networking לעומת traditional networking?",
      correct: "‏Cloud Native: overlay networks, software-defined, ephemeral IPs, service mesh. Traditional: physical switches, static IPs, VLAN-based segmentation",
      choices: [
        "‏Cloud Native: overlay networks, software-defined, ephemeral IPs, service mesh. Traditional: physical switches, static IPs, VLAN-based segmentation",
        "‏Cloud Native = traditional networking על AWS",
        "‏Traditional = ישן ולא בשימוש",
        "‏Cloud Native משתמש רק ב-IPv6"
      ],
      explanation: "‏Cloud Native: VPC (virtual switches/routers), Security Groups (stateful firewall API), ENI (virtual NIC). ‏K8s: Pod IPs ephemeral ‎(חיים כזמן Pod)‎. ‏Service: stable virtual IP (ClusterIP). ‏Ingress: L7 load balancer. ‏Service Mesh (Istio, Linkerd): mTLS בין services, observability, traffic policies. ‏Overlay: VXLAN/Geneve (UDP encapsulation). ‏Traditional: VLANs, static routing, physical hardware lifecycle."
    },
    {
      q: "מה Software Defined Networking (SDN)?",
      correct: "‏SDN: הפרדת Control Plane מ-Data Plane. Controller מרכזי (OpenFlow) מתכנת forwarding tables של כל switches",
      choices: [
        "‏SDN: הפרדת Control Plane מ-Data Plane. Controller מרכזי (OpenFlow) מתכנת forwarding tables של כל switches",
        "‏SDN = networking ללא hardware",
        "‏SDN = IPv6",
        "‏SDN = Software Defined Network = VPN"
      ],
      explanation: "‏Traditional: כל switch מחזיק control plane + data plane. ‏SDN: Controller (ONOS, OpenDaylight) = control plane centralized. ‏Switch = dumb forwarding only. ‏OpenFlow: protocol בין controller לswitch. ‏NFV: software replaces hardware functions. ‏SD-WAN: SDN לWAN links, policy-based routing. ‏Intent-based networking (IBN): מגדירים מה רוצים, לא איך להשיג. ‏Cisco DNA Center, Juniper Apstra."
    }
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
      explanationEn: "The CIA Triad consists of: Confidentiality (only authorized users can access data), Integrity (data has not been altered or tampered with), and Availability (systems are accessible when needed). Integrity is protected using hashing (SHA-256), digital signatures, and checksums."
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
      explanationEn: "The STRIDE framework was developed by Microsoft for security design. The six categories are: Spoofing (impersonation), Tampering (data modification), Repudiation (denying actions), Information Disclosure (data leaks), Denial of Service (disrupting availability), and Elevation of Privilege (gaining unauthorized access levels)."
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
      explanationEn: "An HVAC vendor had remote access to Target's network. Attackers breached the vendor, performed lateral movement (pivoting) into Target's network, and reached Point-of-Sale systems. 40 million credit cards were stolen. Lesson: Network Segmentation is critical — external vendors must be on a separate network."
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
      explanationEn: "Confidentiality prevents unauthorized access to data (e.g., a company's classified document). Privacy is an individual's right over their personal data (per GDPR, CCPA regulations). They overlap, but privacy can be violated without breaching confidentiality — e.g., an authorized employee selling customer data to a third party."
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
      explanationEn: "Threat modeling frameworks (STRIDE, PASTA, DREAD): Ask yourself — who will attack? How? What gets damaged? Fixing a bug at design stage costs $1, at testing $10, and in production $100. Microsoft requires threat modeling before every new feature. Output: data flow diagram, threat list, and mitigation strategies."
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
      explanationEn: "The Attack Surface includes every interface, access point, service, user, and API an attacker can exploit. To reduce it: disable unused services (e.g., FTP), remove unnecessary software, apply Least Privilege, patch security updates, and restrict network access with firewall rules. Smaller surface = fewer attack opportunities."
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
      explanationEn: "SYN scan (Half-open): sends SYN, receives SYN-ACK, sends RST. Does not complete a connection, so it is not logged by the application. Requires root. Connect scan: completes a full TCP handshake — gets logged, but does not require root. -sS is preferred for pentesting. -sT for non-root environments."
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
      explanationEn: "The flags: -sS for SYN scan. -sV for service version detection (what runs on the port). -O for OS detection. -p- for all 65,535 ports (not just the top 1,000). You can combine them: nmap -A -p- target (-A = -sV -O --script=default). Runtime: 10-30 minutes for a full port scan."
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
      explanationEn: "Nmap reports 3 states: open (accepting connections), closed (no service — responds with RST), and filtered (firewall blocks — no response or ICMP unreachable). open/filtered means it is unclear whether a firewall is blocking or the port is open."
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
      explanationEn: "ARP has no authentication — anyone can send an ARP reply. The attacker sends: 'The gateway IP maps to MY MAC address!' The victim updates its ARP cache, and all traffic flows through the attacker. Defenses: Dynamic ARP Inspection (DAI) on switches, static ARP entries, and monitoring tools like ARPwatch."
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
      explanationEn: "Volumetric (L3/L4): floods the pipe with gigabits of data — UDP flood, ICMP flood, SYN flood. Easy to detect (abnormal traffic) but hard to stop without ISP-level scrubbing. Application L7: Slowloris holds HTTP connections open, HTTP flood looks legitimate and is hard to distinguish from real traffic. Requires WAF, rate limiting, and challenge-response (CAPTCHA)."
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
      explanationEn: "Replay Attack: an attacker intercepts a valid authentication token from Alice and resends it to the server to impersonate her. TLS 1.3: each connection gets a unique nonce + sequence numbers. Token-based: JWT includes exp (expiration) + jti (unique JWT ID). In older protocols (old Kerberos), replay was a critical vulnerability. NTP sync is important for prevention."
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
      explanationEn: "Stored (Persistent) XSS: a script is saved in the database (e.g., a forum comment) and executes for every visitor. Reflected: a script in a URL is sent to a user and executes immediately. DOM-based: runs in client-side JS without server involvement. Stored is the most dangerous (affects all visitors). Defense: output encoding, CSP headers."
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
      explanationEn: "CVSS v3 scale: 0.0=None, 0.1-3.9=Low, 4.0-6.9=Medium, 7.0-8.9=High, 9.0-10.0=Critical. A score of 9.8 means Remote Code Execution (RCE) without authentication, network-accessible. Heartbleed and Log4Shell received CVSS 9.8+. Every Critical vulnerability needs patching within 24-48 hours."
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
      explanationEn: "OpenSSL Heartbeat extension: the client sends 'return X bytes to me'. The server returns X bytes without verifying that X bytes were actually sent. Bug: if you request 64K but send 1 byte, the server returns 64K from RAM — which may contain private keys, session tokens, and passwords. The vulnerability was exposed for 2 years (2012-2014)."
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
      explanationEn: "Classic SQLi: username=' OR '1'='1 turns the query into SELECT * FROM users WHERE name='' OR '1'='1' — always true, bypasses login! Prepared Statement: $stmt = $pdo->prepare('SELECT * FROM users WHERE name = ?'); $stmt->execute([$username]); — the ? is a placeholder, the DB treats the value as a string, not code. Never concatenate user input directly into SQL strings!"
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
      explanationEn: "Scenario: Alice is logged into bank.com. She visits evil.com which contains an image tag pointing to bank.com/transfer. The browser sends the request with Alice's cookies! Anti-CSRF Token: the server adds a hidden token to every form, the token is sent in the body, and the server verifies it matches the session. The attacker's site cannot read the token due to Same-Origin Policy."
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
      explanationEn: "OWASP Top 10 (2021): A01:Broken Access Control (user can access another's resources), A02:Cryptographic Failures, A03:Injection (SQL/LDAP/OS), A04:Insecure Design, A05:Security Misconfiguration, A06:Vulnerable Components, A07:Auth Failures, A08:Integrity Failures, A09:Logging Failures, A10:SSRF. Not a law — a best practice guide for dev teams. Updated roughly every 4 years."
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
      explanationEn: "Defense in Depth layers: Perimeter (Firewall, WAF) > Network (IDS/IPS, Segmentation) > Endpoint (AV, EDR, Patch) > Application (Auth, RBAC, Input validation) > Data (Encryption, DLP) > Human (Training, Phishing simulation). Each layer assumes the outer layer will fail."
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
      explanationEn: "NIST SP 800-61: Preparation (tools, playbooks, team). Detection & Analysis (identify IOCs). Containment (isolate — short-term then long-term). Eradication (remove malware, patch). Recovery (restore services). Lessons Learned (post-mortem within 2 weeks). The cycle always repeats."
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
      explanationEn: "SIEM = Security Information and Event Management. Sources: AD, Firewall, EDR, Web proxy, DNS. Correlation example: 3 login failures (brute force?) + success + access to sensitive server = alert. Tools: Splunk, IBM QRadar, Microsoft Sentinel, ELK Stack. SOC analysts spend 70% of their time in the SIEM."
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
      explanationEn: "Pentest phases: 1) Reconnaissance — OSINT, DNS enumeration, Google dorking. 2) Scanning — Nmap, Nikto, Shodan. 3) Exploitation — Metasploit, custom exploits, CVE exploitation. 4) Post-Exploitation — privilege escalation, lateral movement, persistence, data exfiltration. 5) Reporting — executive summary + technical details + CVSS scores + recommendations. Important: written scope agreement before starting!"
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
      explanationEn: "White Box (Crystal Box): tester receives source code, credentials, and architecture diagrams. More thorough, finds more issues. Gray Box: partial knowledge — credentials only. Black Box: simulates a real attacker. Red Team = extended Black Box with social engineering and physical techniques. White Box is better for Code Review; Black Box for finding issues only an external attacker would discover."
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
      explanationEn: "Metasploit (Rapid7): msfconsole > search exploit > use exploit/windows/smb/ms17_010_eternalblue > set RHOSTS > set PAYLOAD > run. Meterpreter = meta-interpreter: runs in the exploited process's memory, not as an exe file, encrypted with TLS. Commands: hashdump, getsystem (priv esc), screenshot, migrate (to a different process). Evasion: polymorphic payloads, msfvenom encoding."
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
      explanationEn: "AES-ECB encrypts each 16-byte block independently. If an image has two regions with the same color, they produce identical ciphertext, revealing the pattern. Classic demo: encrypting the Linux penguin image with ECB — the silhouette is still visible! Solution: AES-CBC/GCM — an IV plus chaining prevents patterns."
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
      explanationEn: "0-RTT: the client sends application data in the very first packet (using a session ticket from a previous connection), saving 1-2 round trips. Risk: Replay attack — an attacker can resend the 0-RTT data. Therefore, 0-RTT is restricted to idempotent requests (GET, not POST with payment). TLS 1.3 supports 0-RTT; TLS 1.2 does not."
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
      explanationEn: "Dual EC DRBG entered the NIST standard in 2006. Snowden 2013 revealed: the NSA paid RSA Security $10M to use it as the default in BSafe. The problem: two points on the Elliptic Curve (P, Q) were chosen by the NSA — anyone who knows log_P(Q) can predict all output. A mathematically perfect backdoor."
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
      explanationEn: "SIEM = correlation engine. Ingests: firewall logs, EDR alerts, DNS queries, Windows Event Logs, cloud audit logs. Use cases: detecting brute-force (X failures/minute from one IP), lateral movement (user logins from 3 countries in 1 hour), data exfiltration (unusual uploads). SPL (Splunk Processing Language): index=windows EventCode=4625 | stats count by src_ip | where count > 50. SIEM alone is not enough — analysts must investigate alerts."
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
      explanationEn: "PICERL (NIST SP 800-61): 1) Preparation — playbooks, tools, and training ready. 2) Identification — recognize that something happened, determine scope. 3) Containment — isolate infected machines (network isolation). 4) Eradication — remove malware, apply patches. 5) Recovery — restore services, increase monitoring. 6) Post-Incident — what happened? How? What to improve? Root Cause Analysis (RCA). Large organizations use CIRT, CSIRT, or CERT teams."
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
      explanationEn: "IDS: passive — analyzes traffic and generates alerts (like a security camera). No blocking. IPS: inline — sits in the traffic path, can block packets with zero latency. A false positive on IPS = blocked legitimate traffic! Therefore: start in IDS mode (learning), calibrate, then go inline. Network-based (NIDS/NIPS) vs Host-based (HIDS/HIPS). Snort and Suricata are popular open-source IDS/IPS tools."
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
      explanationEn: "SSRF: an application accepts a URL from a user and makes a request to it. An attacker sends: http://169.254.169.254/latest/meta-data/iam/security-credentials/ — the AWS metadata endpoint. This returns temporary AWS credentials! Capital One 2019: SSRF through a misconfigured WAF led to IAM credentials and 100M records stolen. Cloud SSRF = critical severity."
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
      explanationEn: "JWT structure: header.payload.signature. The header contains the algorithm (alg). An attacker changes alg to 'none' and removes the signature. A vulnerable server sees alg=none and skips verification. Fix: server-side whitelist of algorithms — never accept alg from the token itself. Also: RS256 to HS256 attack — a server expecting RSA may use the public key as HMAC secret."
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
      explanationEn: "CTF: Jeopardy format (web/crypto/pwn/forensics/reverse) or Attack-Defense. Structured learning, no liability. Platforms: HackTheBox, TryHackMe, PicoCTF. Bug Bounty: HackerOne, Bugcrowd, Intigriti. Defined scope. Payouts: $100-$1M+ by severity. Responsible disclosure process. Facebook and Google pay millions annually. Typical career path: CTF > Bug Bounty > Pentest."
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
      explanationEn: "CTF Categories: Web (SQLi, XSS, SSRF, LFI, RCE on websites), Pwn/Binary (buffer overflow, heap exploits, ROP chains on binaries), Rev (disassembling binaries with Ghidra/IDA, understanding algorithms), Crypto (breaking weak encryption, RSA, AES ECB), Forensics (pcap analysis, file carving, steganography), Misc. Platforms: HackTheBox, TryHackMe, PicoCTF, CTFtime.org."
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
      explanationEn: "Coordinated Disclosure (= Responsible): 1) Discover vulnerability. 2) Notify vendor via security channel. 3) Vendor patches (SLA: typically 90 days — Google Project Zero standard). 4) Researcher publishes writeup. Full Disclosure: publish immediately — pressures vendor to fix fast, but enables exploitation before the patch. Zero-Day = vulnerability the vendor does not know about. Bug Bounty: payment for disclosure."
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
      explanationEn: "Certification Roadmap: Entry level: CompTIA A+ > Network+ > Security+. Offensive: eJPT (eLearnSecurity) > CEH > OSCP (OffSec — 24h practical exam, very challenging!). Defensive: SOC Analyst > CySA+ > GCIH. Management: CISSP (requires 5 years of experience). Cloud: AWS Security Specialty, GCP Security. CTF and HackTheBox/TryHackMe = hands-on practice equally important as certifications."
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
      explanationEn: "AES = symmetric, very fast, used for encrypting payloads. RSA = asymmetric, slow, used for key exchange. TLS combines both: RSA to agree on an AES key, then AES to encrypt all communication. The best of both worlds!"
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
      explanationEn: "TLS Handshake: ClientHello > ServerHello+Certificate > Pre-Master Secret (encrypted with RSA) > both sides derive Session Key > Finished. From here on: AES-256-GCM. RSA is used only during the handshake; AES handles the rest — fast and secure."
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
      explanationEn: "Heartbleed: the client sends a heartbeat with an incorrect length. The server returns the requested number of bytes (up to 64KB) from memory — random content that may include private keys, passwords, and session tokens. 17% of the internet was vulnerable. Fix: upgrade OpenSSL + replace all certificates."
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
      explanationEn: "Symmetric (AES, ChaCha20): fast, suitable for bulk data. Problem: key exchange — how do you send the key securely? Asymmetric (RSA, ECDH): slow but enables secure key exchange. Public key = lock, Private key = unlock. TLS combines: Asymmetric for handshake (exchange session key), Symmetric for data transfer — best of both worlds. RSA 2048-bit is still secure; RSA 1024 is broken!"
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
      explanationEn: "Without PFS: an attacker records encrypted traffic today. In 5 years, they steal the server's private key and decrypt all recorded sessions! With PFS (ECDHE — Elliptic Curve Diffie-Hellman Ephemeral): session keys are derived from temporary parameters that are immediately deleted. Even with a stolen private key, past sessions remain encrypted. TLS 1.3 removed RSA key exchange and requires ECDHE."
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
      explanationEn: "Hash properties: Deterministic (same input = same output always), One-way (cannot be reversed), Avalanche effect (changing 1 bit in input changes ~50% of output), Collision resistance (extremely hard to find x!=y where H(x)=H(y)). SHA-256 outputs 256 bits = 2^256 possibilities. Uses: password hashing (bcrypt/Argon2 are better!), digital signatures, certificate fingerprints, Git commit IDs, blockchain. MD5/SHA-1 are broken for signatures!"
    }
  ],

  108: [
    {
      q: "‏מה ההבדל בין דיוג (Phishing) לדיוג ממוקד (Spear Phishing)?",
      correct: "‏דיוג רגיל = הודעות דוא\"ל זהות למיליונים — דיוג ממוקד (Spear Phishing) = מותאם אישית לאדם או ארגון ספציפי עם מידע אמיתי",
      choices: [
        "‏דיוג רגיל = הודעות דוא\"ל זהות למיליונים — דיוג ממוקד (Spear Phishing) = מותאם אישית לאדם או ארגון ספציפי עם מידע אמיתי",
        "‏דיוג ממוקד = הודעות SMS — דיוג רגיל = דוא\"ל",
        "‏דיוג ממוקד חוקי — דיוג רגיל לא",
        "‏אותו דבר — שמות שונים"
      ],
      explanation: "‏📧 דיוג המוני — Phishing\n• 'לקוח יקר' — גנרי\n• נשלח ל-10 מיליון, 0.1% לוחצים = 10,000 קורבנות\n\n🎯 דיוג ממוקד — Spear Phishing\n• 'שלום דוד, ראיתי שהיית בכנס X ביום ג''\n• מבוסס על מחקר מלינקדאין\n• אחוז הצלחה גבוה בהרבה\n\n🐳 ציד לוויתנים (Whaling)\n• דיוג ממוקד נגד מנהלים בכירים\n\n📞 פריצת טוויטר 2020\n• דיוג קולי (Vishing) — בשיחות טלפון ולא בדוא\"ל",
      explanationEn: "Mass Phishing: 'Dear Customer' + generic content. Sent to 10M people, 0.1% click = 10,000 victims. Spear Phishing: 'Hi David, I saw you were at conference X on Tuesday.' Researched via LinkedIn, much higher success rate. Whaling = Spear Phishing targeting C-suite executives. Twitter 2020 hack = Vishing (phone calls, not email Phishing)."
    },
    {
      q: "‏בפרשת טוויטר 2020, איך התוקפים השיגו גישה ללוח הניהול (Admin Panel)?",
      correct: "‏דיוג קולי (Vishing) — התקשרו לעובדי טוויטר, התחזו לצוות IT, וביקשו פרטי גישה לתיקון בעיה טכנית מדומה",
      choices: [
        "‏דיוג קולי (Vishing) — התקשרו לעובדי טוויטר, התחזו לצוות IT, וביקשו פרטי גישה לתיקון בעיה טכנית מדומה",
        "‏הזרקת SQL ישירה על מסד הנתונים",
        "‏פיצוח בכוח (Brute Force) על חשבונות מנהלים",
        "‏פגיעות יום-אפס (Zero-Day) ב-API של טוויטר"
      ],
      explanation: "‏🐦 פרשת טוויטר 2020\n• גרהם קלארק בן 17 עם שותפים\n• לא פרצו טכנולוגיה\n• פשוט התקשרו לעובדים, התחזו לתמיכה טכנית\n• וביקשו פרטי גישה — עובד אחד שיתף פעולה\n\n💥 התוצאה\n• לוח הניהול נתן גישה לכל 330 מיליון החשבונות\n• נגנבו 120 אלף דולר בביטקוין\n\n📌 הלקח\n• אימות רב-שלבי (MFA) חזק = קריטי\n• אימות זהות בערוץ נפרד = קריטי",
      explanationEn: "Twitter 2020: Graham Clark, age 17, plus accomplices. They did not hack technology — they simply called employees, impersonated IT support, and asked for credentials. One employee complied. The Admin Panel provided access to all 330M accounts. $120K in Bitcoin was stolen. Lesson: strong MFA + identity verification through a separate channel = critical."
    },
    {
      q: "‏מהו עיקרון הדחיפות (Urgency) בהנדסה חברתית (Social Engineering)?",
      correct: "‏יצירת לחץ זמן מלאכותי שגורם לקורבן לפעול מהר ללא חשיבה ביקורתית — 'לחץ תוך 24 שעות או חשבונך יימחק'",
      choices: [
        "‏יצירת לחץ זמן מלאכותי שגורם לקורבן לפעול מהר ללא חשיבה ביקורתית — 'לחץ תוך 24 שעות או חשבונך יימחק'",
        "‏שימוש בשפה דחופה ביותר בכותרת הדוא\"ל",
        "‏שליחת אותו דוא\"ל מספר פעמים",
        "‏הגדרת אישור קריאה (Read Receipt) על הדוא\"ל"
      ],
      explanation: "‏🧠 ששת עקרונות ההשפעה — צ'יאלדיני\n• סמכות\n• דחיפות\n• הוכחה חברתית\n• חיבה\n• הדדיות\n• מחסור\n\n⏰ למה דחיפות עובדת?\n• מנטרלת חשיבה ביקורתית\n• כשאנו בלחץ זמן, לא מוודאים פרטים\n\n🚩 דגל אדום\n• כל הודעה שמכריחה פעולה מיידית ללא זמן לאימות = חשודה\n• ארגון לגיטימי תמיד יאפשר לך לוודא",
      explanationEn: "Cialdini's 6 principles of influence: Authority, Urgency, Social Proof, Liking, Reciprocity, Scarcity. Urgency disables critical thinking — when under pressure, people skip verification. Red flag: any message that forces immediate action without time to verify is suspicious. A legitimate organization will always allow you to verify."
    },
        {
      q: "‏מהו תסריט מוכן (Pretexting) בהנדסה חברתית (Social Engineering)? תן דוגמה.",
      correct: "‏יצירת תרחיש בדוי (Pretexting) להשגת מידע — למשל: התחזות לתמיכה טכנית (IT) ובקשת סיסמה לפתרון 'בעיה דחופה'",
      choices: [
        "‏יצירת תרחיש בדוי (Pretexting) להשגת מידע — למשל: התחזות לתמיכה טכנית (IT) ובקשת סיסמה לפתרון 'בעיה דחופה'",
        "‏שליחת הודעות דוא\"ל עם קישורים זדוניים",
        "‏ניחוש סיסמה בפיצוח בכוח (Brute Force)",
        "‏התקנת מקליד מקשים (Keylogger) על מחשב הקורבן"
      ],
      explanation: "‏🎭 דוגמה לתסריט מוכן\n• 'שלום, אני דן מה-IT'\n• 'יש לנו בעיה קריטית עם השרת'\n• 'אני צריך את הסיסמה שלך לבדיקה דחופה'\n• דחיפות (Urgency) + סמכות (Authority) = ציות\n\n🕵️ מקרה מפורסם\n• קווין מיטניק (Kevin Mitnick)\n• השתמש בתסריט מוכן לקבל מידע סודי מחברות תקשורת\n\n🛡️ הגנה\n• לעולם אל תשתף סיסמאות!\n• צוות IT לעולם לא יבקש סיסמה\n• אמת מתקשרים בשיחה חוזרת למספר רשמי",
      explanationEn: "Pretexting = a prepared scenario: 'Hi, I'm Dan from IT, we have a critical server issue. I need your password for an urgent check.' Urgency + Authority = compliance. Famous case: Kevin Mitnick used pretexting to obtain classified information from telecom companies. Defense: never share passwords! IT will never ask for your password. Always verify callers by calling back on an official number."
    },
        {
      q: "‏מהם דיוג קולי (Vishing) ודיוג בהודעות (Smishing), ואיך הם שונים מדיוג רגיל (Phishing)?",
      correct: "‏דיוג קולי (Vishing) = דיוג בשיחות טלפון — דיוג בהודעות (Smishing) = דיוג ב-SMS — שניהם הנדסה חברתית (Social Engineering) בערוצים שונים מדוא\"ל",
      choices: [
        "‏דיוג קולי (Vishing) = דיוג בשיחות טלפון — דיוג בהודעות (Smishing) = דיוג ב-SMS — שניהם הנדסה חברתית (Social Engineering) בערוצים שונים מדוא\"ל",
        "‏דיוג קולי (Vishing) = דיוג בווידאו — דיוג בהודעות (Smishing) = דיוג ברשתות חברתיות",
        "‏שניהם תתי-סוגים של דיוג ממוקד (Spear Phishing) בלבד",
        "‏דיוג קולי ודיוג בהודעות פחות מסוכנים מדיוג רגיל כי קל לזהות"
      ],
      explanation: "‏📞 דיוג קולי — Vishing\n• 'מדבר עם נציג בנק לאומי, יש חשד לפעולה חשודה'\n• 'לאימות זהות צריך ספרות מהכרטיס'\n• קשה לאמת תקינות שיחה\n• AI Voice Cloning = הרמה הבאה\n\n📱 דיוג בהודעות — Smishing\n• 'חבילה ממתינה לך, עדכן כתובת: [קישור-מזויף].com'\n• שיעור לחיצה גבוה מדוא\"ל\n\n📷 דיוג בקוד QR — Quishing\n• קודי QR שמובילים לאתר דיוג\n\n🛡️ הגנה\n• אל תשתף קוד חד-פעמי (OTP)\n• תמיד פנה ישירות לחברה",
      explanationEn: "Vishing: 'This is a bank representative, there is suspicious activity on your account. For verification, I need digits from your card.' Hard to verify a phone call's legitimacy. AI Voice Cloning = next-level vishing. Smishing: 'A package is waiting for you, update your address: [fake-tracking-link].com' — higher click rate than email. QR Code Phishing (Quishing) = QR codes leading to phishing sites. Defense: never share OTPs, always contact the company directly."
    }
  ],

  109: [
    {
      q: "‏מה ההבדל בין חומת אש חסרת מצב (Stateless) לחומת אש מודעת מצב (Stateful)?",
      correct: "‏חסרת מצב (Stateless) בודקת כל חבילה בנפרד (IP/פורט) — מודעת מצב (Stateful) עוקבת אחרי מצב החיבור ויודעת אם חבילה שייכת לשיחה קיימת",
      choices: [
        "‏חסרת מצב (Stateless) בודקת כל חבילה בנפרד (IP/פורט) — מודעת מצב (Stateful) עוקבת אחרי מצב החיבור ויודעת אם חבילה שייכת לשיחה קיימת",
        "‏מודעת מצב (Stateful) מהירה יותר — חסרת מצב (Stateless) מאובטחת יותר",
        "‏חסרת מצב ל-UDP — מודעת מצב ל-TCP",
        "‏מודעת מצב = תוכנה — חסרת מצב = חומרה"
      ],
      explanation: "‏חסרת מצב (Stateless, למשל iptables -P): בודקת כתובת מקור/יעד + פורט + פרוטוקול. קל לעקוף עם חבילות מזויפות (Spoofed Packets). מודעת מצב (Stateful, באמצעות conntrack): מבינה SYN/ESTABLISHED/FIN — חבילות תעבורת חזרה עוברות אוטומטית. חומת אש מהדור הבא (NGFW, שכבה 7): מבינה HTTP/DNS/TLS — יכולה לחסום לפי תוכן. iptables ברוב הפצות לינוקס = מודעת מצב כברירת מחדל.",
      explanationEn: "Stateless firewall (iptables -P): checks src/dst IP + port + protocol. Easy to bypass with spoofed packets. Stateful (conntrack): understands SYN/ESTABLISHED/FIN — return traffic passes automatically. NGFW (L7): understands HTTP/DNS/TLS — can block by content. iptables on most Linux distributions is stateful by default."
    },
    {
      q: "‏מה מטרת האזור המפורז (DMZ)?",
      correct: "‏אזור ביניים שמכיל שרתים נגישים מהאינטרנט (Web/Mail/DNS) ומבודד אותם מהרשת הפנימית — פריצה לאזור המפורז (DMZ) לא מעניקה גישה למסד הנתונים הפנימי",
      choices: [
        "‏אזור ביניים שמכיל שרתים נגישים מהאינטרנט (Web/Mail/DNS) ומבודד אותם מהרשת הפנימית — פריצה לאזור המפורז (DMZ) לא מעניקה גישה למסד הנתונים הפנימי",
        "‏אזור שבו כל התעבורה מוצפנת",
        "‏אזור ללא הצפנה לביצועים מהירים",
        "‏רשת משנה (Subnet) מיוחדת לחיבורי VPN"
      ],
      explanation: "‏אזור מפורז (DMZ) = שכבת הגנה נוספת. ארכיטקטורה: אינטרנט → חומת אש חיצונית → אזור מפורז (Web/Mail/DNS) → חומת אש פנימית → רשת פנימית (מסד נתונים/AD). גם אם תוקף פורץ לשרת ה-Web באזור המפורז, חומת האש הפנימית חוסמת גישה למסד הנתונים. עיקרון: הגנה לעומק (Defense in Depth) — כל שכבה מגינה על הבאה.",
      explanationEn: "DMZ = an additional defense layer. Architecture: Internet > External Firewall > DMZ (Web/Mail/DNS) > Internal Firewall > Internal Network (DB/AD). Even if an attacker compromises the Web Server in the DMZ, the Internal Firewall blocks access to the database. Principle: Defense in Depth — each layer protects the next."
    },
    {
      q: "‏כיצד התולעת Stuxnet הצליחה לפגוע ברשת מנותקת (Air-Gapped)?",
      correct: "‏הופצה דרך כונני USB — עובדים חיברו USB למחשבים מנותקים, התולעת עברה ממחשב למחשב עד שהגיעה לבקרים תעשייתיים (PLCs) של Siemens",
      choices: [
        "‏הופצה דרך כונני USB — עובדים חיברו USB למחשבים מנותקים, התולעת עברה ממחשב למחשב עד שהגיעה לבקרים תעשייתיים (PLCs) של Siemens",
        "‏פרצה דרך רשת אלחוטית (WiFi) של המתקן",
        "‏הוכנסה ישירות על ידי סוכן פנימי (Mole) בתוך המתקן",
        "‏השתמשה בפגיעות יום-אפס (Zero-Day) בקושחת PLC שנשלחה באוויר"
      ],
      explanation: "‏תולעת Stuxnet (2010, מיוחסת לארה\"ב+ישראל): 4 פגיעות יום-אפס (Zero-Days). רשת מנותקת (Air Gap) = ללא חיבור אינטרנט. הפתרון: שרשרת הדבקה בכונני USB. אחד מהמהנדסים חיבר USB נגוע — Stuxnet התפשטה, חיכתה לתוכנת Siemens Step7, שינתה תדרי צנטריפוגות תוך הסתרת הנתונים האמיתיים מהמעקב (Monitoring). ‏1,000 צנטריפוגות הושמדו. לקח: חובה לאסור כונני USB לא מבוקרים בסביבות בקרה תעשייתית (ICS).",
      explanationEn: "Stuxnet (2010, attributed to US+Israel): used 4 zero-days. Air gap = no internet connection. Solution: USB infection chain. An engineer connected an infected USB — Stuxnet spread, waited for Siemens Step7 software, changed centrifuge frequencies while hiding real data from monitoring. 1,000 centrifuges were destroyed. Lesson: uncontrolled USB drives must be banned in ICS environments."
    },
        {
      q: "‏מהו כלל iptables שחוסם כל גישה נכנסת חוץ מ-SSH (פורט 22)?",
      correct: "‏iptables -P INPUT DROP — iptables -A INPUT -p tcp --dport 22 -j ACCEPT — iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT",
      choices: [
        "‏iptables -P INPUT DROP — iptables -A INPUT -p tcp --dport 22 -j ACCEPT — iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT",
        "‏iptables -A INPUT -p tcp --dport 22 -j ACCEPT",
        "‏iptables --block-all — iptables --allow 22",
        "‏iptables -P INPUT REJECT — iptables -A SSH -j ALLOW"
      ],
      explanation: "‏שלבים: 1) מדיניות ברירת מחדל (DEFAULT POLICY) = חסום הכל (DROP). ‏2) אשר פורט 22. ‏3) אשר חיבורים מבוססים (ESTABLISHED) — בלי זה גם תגובות לתעבורה היוצאת ייחסמו! חשוב לשמור עם iptables-save > /etc/iptables/rules.v4, אחרת הכללים נמחקים באתחול מחדש (Reboot). nftables = המחליף המודרני של iptables. ufw ‏(Ubuntu) = ממשק נוח: ufw default deny incoming; ufw allow 22/tcp.",
      explanationEn: "Steps: 1) DEFAULT POLICY = DROP (block everything). 2) ACCEPT port 22 (SSH). 3) ACCEPT established connections (without this, responses to outgoing traffic would also be blocked!). Important: save rules with iptables-save > /etc/iptables/rules.v4, otherwise rules are lost on reboot. nftables is the modern successor to iptables. ufw (Ubuntu) is a convenient front-end: ufw default deny incoming; ufw allow 22/tcp."
    },
        {
      q: "‏מהי ארכיטקטורת אפס אמון (Zero Trust Architecture) ועל איזה עיקרון היא מבוססת?",
      correct: "‏ארכיטקטורה שלא סומכת על אף ישות כברירת מחדל — 'לעולם אל תסמוך, תמיד אמת' (Never Trust, Always Verify). כל גישה מחייבת אימות גם בתוך הרשת הארגונית",
      choices: [
        "‏ארכיטקטורה שלא סומכת על אף ישות כברירת מחדל — 'לעולם אל תסמוך, תמיד אמת' (Never Trust, Always Verify). כל גישה מחייבת אימות גם בתוך הרשת הארגונית",
        "‏ארכיטקטורה ללא חומת אש — סומכים על כל משתמש מאומת",
        "‏גישה שמבוססת על פגיעויות יום-אפס (Zero-Day)",
        "‏מודל שבו רק מנהלי מערכת מהאזור המפורז (DMZ) יכולים לגשת למשאבים"
      ],
      explanation: "‏ארכיטקטורת אפס אמון (Zero Trust, ג'ון קינדרבאג, Forrester 2010): בארכיטקטורה מסורתית — 'טירה וחפיר' (Castle and Moat): סומכים על כל מה שבפנים. אחרי פריצה = תנועה רוחבית (Lateral Movement) חופשית. אפס אמון: 1) אמת במפורש — אימות רב-שלבי (MFA) + תקינות מכשיר + מיקום בכל בקשה. ‏2) הרשאת מינימום (Least Privilege). ‏3) הנח שנפרצת (Assume Breach) — פלח את הרשת, עקוב אחר כל התעבורה. ‏NIST SP 800-207. מימוש: BeyondCorp ‏(Google), Zscaler, Cloudflare Access.",
      explanationEn: "Zero Trust (John Kindervag, Forrester 2010): traditional architecture uses a 'castle and moat' model — trust everything inside. After a breach, lateral movement is unrestricted. Zero Trust: 1) Verify explicitly — MFA + device health + location on every request. 2) Least privilege access. 3) Assume breach — segment the network, monitor all traffic. NIST SP 800-207. Implementations: BeyondCorp (Google), Zscaler, Cloudflare Access."
    }
  ],

  // ===== DevOps & Cloud Track (201-206) =====
  201: [
    {
      q: "איך Linux מייצג פורטים פתוחים בצורה היעילה ביותר לניפוי בעיות?",
      correct: "‏ss -tulnp — מראה TCP/UDP, listening, port number, PID ושם תהליך",
      choices: [
        "‏ss -tulnp — מראה TCP/UDP, listening, port number, PID ושם תהליך",
        "‏netstat -a",
        "‏ifconfig --ports",
        "‏lsof /dev/net"
      ],
      explanation: "‏ss החליף את netstat (deprecated). ‏-t=TCP, -u=UDP, -l=listening, -n=numeric ‎(לא resolve שמות)‎, -p=PID. תוצאה: LISTEN 0 128 0.0.0.0:80 0.0.0.0:* users:(('nginx',pid=1234)). ידע זה קריטי לכל troubleshooting. journalctl -u service -f = logs בזמן אמת."
    },
    {
      q: "מה ההבדל בין hard link לsoft link ב-Linux?",
      correct: "‏Hard link: מצביע לאותו inode — נשמר גם אחרי מחיקת המקור. Soft link: מצביע לpath — נשבר אם המקור נמחק",
      choices: [
        "‏Hard link: מצביע לאותו inode — נשמר גם אחרי מחיקת המקור. Soft link: מצביע לpath — נשבר אם המקור נמחק",
        "‏Hard link לקבצים — Soft link לתיקיות",
        "‏Hard link מהיר יותר — Soft link חוצה filesystems",
        "אין הבדל מעשי"
      ],
      explanation: "‏inode = metadata של קובץ (permissions, timestamps, blocks). ‏Hard link = שם נוסף לאותו inode. הקובץ נמחק רק כשlinkcount=0. ln file hardlink. ‏Soft link (symlink): ln -s /path/file link. יכול לחצות filesystems ותיקיות. נשבר אם target נמחק. ls -la מראה → target."
    },
    {
      q: "מה המשמעות של chmod 755?",
      correct: "‏Owner: rwx (7), Group: r-x (5), Others: r-x (5) — קריאה+הרצה לכולם, כתיבה רק ל-owner",
      choices: [
        "‏Owner: rwx (7), Group: r-x (5), Others: r-x (5) — קריאה+הרצה לכולם, כתיבה רק ל-owner",
        "‏Read-only לכל המשתמשים",
        "‏Full permissions לכולם",
        "‏Owner: rw, Group: r, Others: x"
      ],
      explanation: "‏r=4, w=2, x=1. ‏7=4+2+1=rwx, 5=4+0+1=r-x, 4=r--. chmod 755 = executable scripts/directories. chmod 644 = files (owner rw, others r). chmod 600 = private keys (owner only). ‏SUID (4755): הקובץ רץ עם הרשאות ה-owner, לא המשתמש הרץ. find / -perm -4000 = מוצא SUID files."
    },
        {
      q: "מה הפקודה למציאת processes שמאזינים על פורט 8080?",
      correct: "‏ss -tlnp | grep 8080 ‎(או lsof -i :8080)‎",
      choices: [
        "‏ss -tlnp | grep 8080 ‎(או lsof -i :8080)‎",
        "‏netstat --port 8080",
        "‏ps aux | grep 8080",
        "‏find /proc -name '8080'"
      ],
      explanation: "‏ss ‎(socket statistics, מחליף netstat)‎: -t TCP, -l listening, -n numeric ‎(לא resolve names)‎, -p show process. ss -tlnp: מציג כל TCP listening sockets עם PID. lsof -i :8080: כל files/sockets פתוחים על port 8080. netstat -tlnp | grep 8080 עובד גם אבל ss מהיר יותר. kill -9 $(lsof -ti :8080) = kill process שמאזין על port."
    },
  ],

  202: [
    {
      q: "מה ההבדל בין Docker image לבין Docker container?",
      correct: "‏Image = תבנית read-only שכבתית — Container = instance רץ של image עם writable layer",
      choices: [
        "‏Image = תבנית read-only שכבתית — Container = instance רץ של image עם writable layer",
        "‏Image שמור על disk — Container בmemory",
        "‏Container גדול יותר מimage",
        "‏Image מכיל קוד — Container מכיל data"
      ],
      explanation: "‏Docker image: Union filesystem — layers. כל RUN/COPY/ADD בDockerfile = layer חדש. שכבות shared בין containers. ‏Container: image layers (read-only) + writable layer בראש. כשcontainer נמחק — writable layer נמחק. ‏Data persistence: Volumes. docker images = רשימת images. docker ps = containers רצים."
    },
    {
      q: "מה Multi-stage build ב-Docker ולמה להשתמש בזה?",
      correct: "בנייה בשלבים — stage ראשון לcompile, stage שני רק עם artifacts — image קטן ב-10x",
      choices: [
        "בנייה בשלבים — stage ראשון לcompile, stage שני רק עם artifacts — image קטן ב-10x",
        "בניית כמה images במקביל",
        "שימוש בbase images שונים לenv שונים",
        "‏caching של layers בין builds"
      ],
      explanation: "בלי multi-stage: image Go מכיל compiler, source, dependencies = 1.2GB. עם multi-stage: FROM golang:1.21 AS builder / RUN go build / FROM scratch / COPY --from=builder /app/binary . = image של 8MB. רק binary! ללא compiler, ללא source. אבטחה + מהירות. ‏Node.js: stage עם devDependencies, stage עם רק production deps."
    },
    {
      q: "מה ה-ENTRYPOINT לעומת CMD ב-Dockerfile?",
      correct: "‏ENTRYPOINT = תמיד רץ — CMD = default args שאפשר לoverride בdocker run",
      choices: [
        "‏ENTRYPOINT = תמיד רץ — CMD = default args שאפשר לoverride בdocker run",
        "‏CMD רץ בbuild — ENTRYPOINT ב-run",
        "שניהם זהים — אחד לlinux אחד לwindows",
        "‏ENTRYPOINT לwebserver — CMD לbatch jobs"
      ],
      explanation: "‏ENTRYPOINT ['nginx', '-g', 'daemon off;'] — לא ניתן לoverride ב-docker run. ‏CMD ['--worker-processes=4'] — default args, ניתן לoverride. שניהם יחד: ENTRYPOINT ריץ תמיד, CMD מספק default args. docker run myimage --worker-processes=8 = מחליף CMD. best practice: ENTRYPOINT לbinary, CMD לdefault flags."
    },
        {
      q: "מה best practice לכתיבת Dockerfile — מה מקטין image size?",
      correct: "‏Multi-stage builds, שימוש בbase images קטנים (alpine), מיזוג RUN commands, ניקוי cache ב-apt, הוספת .dockerignore",
      choices: [
        "‏Multi-stage builds, שימוש בbase images קטנים (alpine), מיזוג RUN commands, ניקוי cache ב-apt, הוספת .dockerignore",
        "הוספת COMPRESS=true ב-Dockerfile",
        "שימוש בCOPY במקום ADD בלבד",
        "הגדרת WORKDIR = /tmp לחיסכון בזיכרון"
      ],
      explanation: "‏Multi-stage: FROM golang:1.21 AS builder; RUN go build; FROM alpine:3.18; COPY --from=builder /app /app — image סופי ללא Go compiler! Alpine linux: 5MB vs Ubuntu 72MB. מיזוג: RUN apt-get update && apt-get install -y nginx && rm -rf /var/lib/apt/lists/* ‎(נקה cache ב-אותה שכבה!)‎. .dockerignore: node_modules, .git, *.log לא נכנסים לbuild context. ‏Layer caching: העתק package.json לפני COPY . כדי למנף cache של npm install."
    },
  ],

  203: [
    {
      q: "מה ההבדל בין Deployment לבין StatefulSet ב-Kubernetes?",
      correct: "‏Deployment לאפליקציות stateless — StatefulSet לDatabases — שומר identity קבועה, persistent storage, ו-ordered rollout",
      choices: [
        "‏Deployment לאפליקציות stateless — StatefulSet לDatabases — שומר identity קבועה, persistent storage, ו-ordered rollout",
        "‏StatefulSet ישן יותר ומיועד להחלפה",
        "‏Deployment לcontainers בודדים — StatefulSet לcluster",
        "אין הבדל מעשי — רק naming convention"
      ],
      explanation: "‏Deployment: pods ב-web server = interchangeable. מת pod-abc, נולד pod-xyz. ‏StatefulSet: pod-0, pod-1, pod-2 — שמות קבועים. pod-0 במסד הנתונים = primary always. כל pod מקבל PVC (Persistent Volume Claim) עצמאי. ‏Rollout: pod-2 מת → pod-2 קם → pod-1 מת → ordered. ‏MySQL, Kafka, ZooKeeper = StatefulSet."
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
      explanation: "‏Pod IP: ephemeral — Pod מת = IP חדש. ‏Service: ClusterIP קבוע + DNS: my-service.namespace.svc.cluster.local. kube-proxy מנהל iptables/ipvs rules לforward לPods הנכונים. ‏Types: ClusterIP ‎(פנימי)‎, NodePort ‎(פורט על node)‎, LoadBalancer (cloud LB), ExternalName (DNS alias). ‏Endpoints object מכיל IPs עדכניות."
    },
    {
      q: "מה liveness probe לעומת readiness probe ב-Kubernetes?",
      correct: "‏Liveness: האם container חי? ‎(restart אם לא)‎. Readiness: האם מוכן לtraffic? ‎(הסר מService אם לא)‎",
      choices: [
        "‏Liveness: האם container חי? ‎(restart אם לא)‎. Readiness: האם מוכן לtraffic? ‎(הסר מService אם לא)‎",
        "שניהם בודקים אותו דבר — redness לdb, liveness לweb",
        "‏Liveness בstaging — Readiness בproduction",
        "‏Liveness לHTTP — Readiness לTCP"
      ],
      explanation: "‏Liveness probe נכשל: Kubernetes מבצע restart לcontainer. ‏Readiness probe נכשל: Pod מוסר מService endpoints — לא מקבל traffic, אבל לא restarted. ‏Startup probe: חדש ב-K8s 1.16 — לאפליקציות עם slow startup. ‏HTTP/TCP/exec probes. initialDelaySeconds, periodSeconds, failureThreshold. בלי readiness = traffic לPod שעדיין מאתחל."
    },
        {
      q: "מה ConfigMap ומה Secret ב-Kubernetes ומתי לא להשתמש ב-Secret?",
      correct: "‏ConfigMap לconfig לא-סודי (env vars, files) — Secret לdata סודי (passwords, tokens) — אך base64 בלבד, לא הצפנה! יש לנהל עם Vault/Sealed Secrets",
      choices: [
        "‏ConfigMap לconfig לא-סודי (env vars, files) — Secret לdata סודי (passwords, tokens) — אך base64 בלבד, לא הצפנה! יש לנהל עם Vault/Sealed Secrets",
        "‏ConfigMap לfiles — Secret לenv vars בלבד",
        "‏Secret מוצפן AES-256 אוטומטית על ידי Kubernetes",
        "‏ConfigMap ו-Secret זהים — ההבדל הוא רק סמנטי"
      ],
      explanation: "‏ConfigMap: kubectl create configmap app-config --from-file=config.yaml. ‏Secret: kubectl create secret generic db-secret --from-literal=password=s3cr3t → מאוחסן כ-base64 ב-etcd. אחסון ב-etcd לא מוצפן כברירת מחדל! הפתרון: Encryption at Rest לetcd + External secrets (HashiCorp Vault, AWS Secrets Manager, Sealed Secrets). במשאב: spec.containers.env.valueFrom.secretKeyRef או mount כvolume. etcd = 'brain' של cluster — חייב להיות מאובטח."
    },
        {
      q: "מה Resource Requests ו-Limits ב-Kubernetes ולמה חשוב להגדיר אותם?",
      correct: "‏Requests: מינימום משאבים שה-scheduler מבטיח לpod — Limits: מקסימום שהpod יכול לצרוך — בלי Limits, pod אחד יכול להרעיב את כל ה-node",
      choices: [
        "‏Requests: מינימום משאבים שה-scheduler מבטיח לpod — Limits: מקסימום שהpod יכול לצרוך — בלי Limits, pod אחד יכול להרעיב את כל ה-node",
        "‏Requests ו-Limits שניהם מגדירים maximum — ההבדל הוא בadmission controller",
        "‏Limits חלים רק על CPU — Requests על Memory",
        "בלי Requests, pods לא יתחילו לרוץ"
      ],
      explanation: "‏resources: requests: cpu: '250m' memory: '128Mi' limits: cpu: '500m' memory: '256Mi'. ‏Scheduler: מחפש node עם מספיק requests available. ‏CPU throttling: אם pod עובר Limit → throttled ‎(איטי, לא killed)‎. ‏Memory OOMKilled: אם pod עובר memory Limit → KILLED! QoS classes: Guaranteed (req=limit), Burstable (req<limit), BestEffort ‎(ללא req/limit)‎. ‏LimitRange לnamespace defaults. ‏ResourceQuota לlimits בnamespace."
    }
  ],

  204: [
    {
      q: "מה ההבדל בין AWS Security Group לבין NACL?",
      correct: "‏Security Group: stateful ‎(זוכר connection)‎, ברמת ENI. NACL: stateless, ברמת subnet — חייב לפתוח inbound וoutbound בנפרד",
      choices: [
        "‏Security Group: stateful ‎(זוכר connection)‎, ברמת ENI. NACL: stateless, ברמת subnet — חייב לפתוח inbound וoutbound בנפרד",
        "‏Security Group לEC2 — NACL ל-S3",
        "‏NACL מהיר יותר — Security Group גמיש יותר",
        "‏Security Group חינמי — NACL בתשלום"
      ],
      explanation: "‏Security Group: stateful — אם פתחת port 443 inbound, response יוצא אוטומטית. ‏Rules רק allow ‎(אין deny)‎. ‏NACL: stateless — חייב rule inbound לport 443 AND rule outbound לephemeral ports 1024-65535. ‏NACL גם allow וגם deny. נוסף על security group. ‏Defense in depth: Security Group לinstance, NACL לsubnet."
    },
    {
      q: "מה IAM Role ומתי עדיף על Access Key?",
      correct: "‏IAM Role = הרשאות זמניות שניתן לassume — עדיף לEC2/Lambda כי לא דורש hardcoded credentials",
      choices: [
        "‏IAM Role = הרשאות זמניות שניתן לassume — עדיף לEC2/Lambda כי לא דורש hardcoded credentials",
        "‏Role לadmins — Access Key לdevelopers",
        "‏Access Key מאובטח יותר כי ניתן לrotate",
        "‏Role רק לcross-account access"
      ],
      explanation: "‏Access Key = long-term credentials = סכנת דליפה (git push, logs). ‏IAM Role: EC2 instance profile = temporary credentials שמתחלפות אוטומטית כל שעה. ‏Lambda execution role. ‏AssumeRole מ-STS. ‏IRSA בEKS: pod-level IAM roles. ‏Least Privilege: כל service = role נפרדת עם minimum permissions. ‏AWS Cost Explorer + CloudTrail לaudit."
    },
    {
      q: "מה AWS VPC Peering לעומת Transit Gateway?",
      correct: "‏Peering: חיבור 1:1 בין 2 VPCs. Transit Gateway: hub מרכזי — N VPCs מתחברים לTGW = N connections לעומת N*(N-1)/2 בpeering",
      choices: [
        "‏Peering: חיבור 1:1 בין 2 VPCs. Transit Gateway: hub מרכזי — N VPCs מתחברים לTGW = N connections לעומת N*(N-1)/2 בpeering",
        "‏Peering יקר יותר — Transit Gateway חינמי",
        "‏Peering בין regions — TGW בתוך region",
        "‏TGW מהיר יותר — Peering מאובטח יותר"
      ],
      explanation: "‏עם 10 VPCs ב-peering full mesh: 45 חיבורים. עם TGW: 10 חיבורים. ‎TGW‏ גם תומך ב-VPN, Direct Connect, multi-region. ‏Peering: ללא encryption נוסף, ללא bandwidth limit, זול. ‎TGW: $0.05/GB‏ data processed. נקודת מכירה ארכיטקטונית: ‎TGW = spoke-and-hub‏. ‎Peering = point-to-point‏. פחות מ-5 VPCs? peering מספיק."
    },
        {
      q: "מה ה-Shared Responsibility Model ב-AWS ואיזה אחריות על הלקוח?",
      correct: "‏AWS אחראית על security OF the cloud (hardware, facilities, hypervisor) — לקוח אחראי על security IN the cloud (OS, data, IAM, network config)",
      choices: [
        "‏AWS אחראית על security OF the cloud (hardware, facilities, hypervisor) — לקוח אחראי על security IN the cloud (OS, data, IAM, network config)",
        "‏AWS אחראית על הכל — לקוח רק על application code",
        "הלקוח אחראי על הכל כי הוא משלם",
        "האחריות חלוקה שווה 50/50 על כל דבר"
      ],
      explanation: "‏AWS Shared Responsibility: AWS: physical security, hardware, networking, hypervisor, managed services infrastructure. ‏Customer: EC2 OS patching, Security Groups config, S3 bucket policies ‎(לא לפתוח public!)‎, IAM configuration, encryption of data, application security. בServerless (Lambda): AWS גם מנהלת OS. ‏RDS: AWS מנהלת DB engine patching, לקוח מנהל access control ו-data. ‏AWS Config, Security Hub, GuardDuty = tools לmonitoring compliance."
    },
  ],

  205: [
    {
      q: "מה ההבדל בין CI לבין CD ב-CI/CD pipeline?",
      correct: "‏CI: בדיקת קוד אוטומטית בכל push. CD: Deploy אוטומטי לאחר CI מוצלח (Delivery=staging, Deployment=production)",
      choices: [
        "‏CI: בדיקת קוד אוטומטית בכל push. CD: Deploy אוטומטי לאחר CI מוצלח (Delivery=staging, Deployment=production)",
        "‏CI לdevelopers — CD לoperations",
        "‏CI בcloud — CD on-premise",
        "אין הבדל — זה שם כולל לautomation"
      ],
      explanation: "‏CI (Continuous Integration): כל push → build + unit tests + lint + security scan. מוצא bugs מוקדם. ‏CD Delivery: אחרי CI → deploy לstaging automatically. ‏CD Deployment: אחרי staging approval → production automatically (fully automated). ‏Tools: GitHub Actions, Jenkins, GitLab CI, CircleCI. ‏Best practice: branch protection + required CI status checks."
    },
    {
      q: "מה Blue-Green Deployment?",
      correct: "שתי environments זהות — Blue (production) ו-Green (new version). Switch traffic בבת אחת. Rollback = switch חזרה",
      choices: [
        "שתי environments זהות — Blue (production) ו-Green (new version). Switch traffic בבת אחת. Rollback = switch חזרה",
        "‏Deploy לservers כחולים בתחילה, ירוקים אחר כך",
        "‏Blue לEurope, Green לUS — geo deployment",
        "‏Canary deployment עם color coding"
      ],
      explanation: "‏Blue-Green: zero-downtime deployment. ‏Blue = current production. ‏Green = new version, tested בparallel. ‏Switch: load balancer מפנה מBlue לGreen בשנייה. ‏Rollback מיידי: switch חזרה. עלות: כפל infrastructure. מתאים לdeployments עם DB migrations ‎(אך מורכב)‎. ‏Canary = הדרגתי (5% → 25% → 100%). ‏Feature flags = code-level canary."
    },
    {
      q: "מה Artifact ב-CI/CD pipeline?",
      correct: "‏Output של build step — Docker image, JAR, binary, npm package — שמאוחסן ומשמש לdeploy",
      choices: [
        "‏Output של build step — Docker image, JAR, binary, npm package — שמאוחסן ומשמש לdeploy",
        "לוג הריצה של ה-pipeline",
        "קובץ הגדרות ה-pipeline",
        "‏test coverage report"
      ],
      explanation: "‏Artifact = מה שנבנה. ‏Docker image → pushed לregistry (ECR, GCR, Docker Hub). ‏JAR → Nexus/Artifactory. npm → registry. immutable artifacts: אחד שנבנה מ-commit מסוים = deploy לstaging ואחר כך production. לא בונים מחדש! 'Build once, deploy anywhere.' Artifact versioning: semver או git SHA. retention policy חוסכת עלויות."
    },
        {
      q: "מה GitHub Actions workflow ואיך מגדירים environment secrets?",
      correct: "‏YAML ב-.github/workflows/ שמגדיר triggers, jobs ו-steps — Secrets מוגדרים ב-Repository Settings ומוזרקים כenv vars: ${{ secrets.MY_SECRET }}",
      choices: [
        "‏YAML ב-.github/workflows/ שמגדיר triggers, jobs ו-steps — Secrets מוגדרים ב-Repository Settings ומוזרקים כenv vars: ${{ secrets.MY_SECRET }}",
        "‏Workflow מוגדר ב-.gitlab-ci.yml ב-root",
        "‏Secrets נכתבים ישירות בYAML מוצפן",
        "‏GitHub Actions הוא שם של CLI tool שמריץ pipelines"
      ],
      explanation: "‏workflow file: on: [push, pull_request]; jobs: build: runs-on: ubuntu-latest; steps: uses: actions/checkout@v3; run: npm test. ‏Secrets: Settings → Secrets and variables → Actions → New secret. בstep: env: AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}. ‏Environments (prod/staging) יכולים לדרוש approval. ‏GitHub Marketplace: אלפי pre-built actions. ‏Self-hosted runners לprivate networks. ‏OIDC: GitHub Actions → AWS IAM Role ללא static keys!"
    },
        {
      q: "מה Shift Left Testing ולמה זה חוסך כסף?",
      correct: "הזזת testing שמאלה ב-pipeline — בדיקות מוקדמות יותר ב-development lifecycle — bug שמתגלה בdesign עולה פחות מbug בproduction",
      choices: [
        "הזזת testing שמאלה ב-pipeline — בדיקות מוקדמות יותר ב-development lifecycle — bug שמתגלה בdesign עולה פחות מbug בproduction",
        "כלי שמזיז test cases לסוף pipeline למהירות",
        "מתודולוגיה שמחליפה QA engineers באוטומציה",
        "בדיקות שנעשות על ה-left side של cluster"
      ],
      explanation: "‏Rule of 10 (IBM): bug בdesign = $1, בdevelopment = $10, ב-QA = $100, בproduction = $1,000+. ‏Shift Left: unit tests בIDE (pre-commit), SAST (static analysis) בPR, integration tests בCI, security scanning (Snyk, Trivy) בbuild. ‏TDD (Test Driven Development) = extreme shift left. ‏DevSecOps = security shift left. ‏Pre-commit hooks (Husky) מונעים commit של code שעובר lint/test."
    }
  ],

  206: [
    {
      q: "מה SLO, SLA, ו-SLI — ומה ההבדל?",
      correct: "‏SLI = מדידה (latency, availability). SLO = יעד פנימי (99.9%). SLA = הסכם מול לקוח עם קנסות",
      choices: [
        "‏SLI = מדידה (latency, availability). SLO = יעד פנימי (99.9%). SLA = הסכם מול לקוח עם קנסות",
        "כולם זהים — מונחים שונים לאותו דבר",
        "‏SLO לdevelopers, SLA לoperations, SLI לlegal",
        "‏SLA חינמי, SLO בתשלום"
      ],
      explanation: "‏SLI (Service Level Indicator): מה אתה מודד. latency_p99 = 120ms. availability = 99.94%. ‏SLO (Objective): היעד שלך. latency_p99 < 200ms, availability > 99.9%. ‏Error Budget: 0.1% downtime = 43.8 דקות לחודש. ‏SLA (Agreement): חוזה עם לקוח. אחרי פריצת SLA → credit/refund. ‏Google Cloud: 99.9% SLA לGCE. ‏Google בפנים עובד ב-99.99% SLO."
    },
    {
      q: "מה Chaos Engineering ולמה Netflix המציאה אותו?",
      correct: "הזרקת כשלים בכוונה לproduction לגילוי חולשות לפני שכשל אמיתי קורה",
      choices: [
        "הזרקת כשלים בכוונה לproduction לגילוי חולשות לפני שכשל אמיתי קורה",
        "בדיקת ביצועים תחת load קיצוני",
        "‏penetration testing לאפליקציות",
        "‏A/B testing לfeature flags"
      ],
      explanation: "‏Netflix עברה לcloud ב-2008. ‏AWS outage 2011 הפיל אותם. תגובה: Chaos Monkey — tool שמכבה VMs אקראיות בproduction. ‏Simian Army: Chaos Gorilla (AZ failure), Latency Monkey (network delays). עיקרון: 'אם כשלים קורים בכל מקרה — עדיף לגלות חולשות כשאתה מוכן'. 'Netflix knows about failures before their customers do.' GameDay = chaos experiment מתוכנן."
    },
    {
      q: "מה Postmortem blameless ולמה חשוב?",
      correct: "ניתוח incident ללא האשמת אנשים — מחפש כשלי מערכת, לא שגיאות אנושיות, כדי לשפר תהליכים",
      choices: [
        "ניתוח incident ללא האשמת אנשים — מחפש כשלי מערכת, לא שגיאות אנושיות, כדי לשפר תהליכים",
        "דוח שמגן על חברה מתביעות משפטיות",
        "ניתוח ביצועים שבועי",
        "‏review קוד אחרי deploy לפרודקשן"
      ],
      explanation: "‏Blameless: אנשים לא מקבלים עונש → מוכנים לדווח על בעיות → ארגון לומד. ‏Google SRE: 'If a human error caused the outage, the system design failed.' 5 Whys: Why did DB go down? → disk full → Why? → log rotation broke → Why? → deploy changed config → root cause. ‏Action items: automation, monitoring, runbooks. ללא postmortem = אותה תקלה שוב."
    },
    {
      q: "מה Error Budget ב-SRE ואיך משפיע על velocity של פיתוח?",
      correct: "‏Error Budget = 100% - SLO target. אם SLO = 99.9%, error budget = 0.1% ‎(43.8 דקות/חודש)‎. כשה-budget אוזל — מאטים deployments עד לחידוש",
      choices: [
        "‏Error Budget = 100% - SLO target. אם SLO = 99.9%, error budget = 0.1% ‎(43.8 דקות/חודש)‎. כשה-budget אוזל — מאטים deployments עד לחידוש",
        "‏Error Budget = מספר ה-bugs המותרים בrelease",
        "‏Error Budget = זמן שמהנדסים מקדישים לbug fixes",
        "‏Error Budget תמיד 5% ללא קשר ל-SLO"
      ],
      explanation: "‏SRE philosophy: reliability vs feature velocity. ‏Error budget = זמן downtime מותר לפי SLO. אם SLO=99.9%: 43.8 min/month budget. ‏Incident גרמה ל-20 min downtime = שרפת 46% מהbudget. ‏Policy: budget > 50% → deploy בחופשיות. budget 0-50% → זהירות. budget מאופס → freeze deployments, רק reliability work. זה מיישר תמריצים: Dev רוצים לdeploy מהר = אינטרס גם בreliability."
    },
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
      explanation: "‏tcp.analysis.retransmission מסנן חבילות שה-TCP stack זיהה כretransmissions. tcp.analysis.fast_retransmission מסנן fast retransmits ‎(אחרי 3 dup-ACKs)‎. tcp.analysis.duplicate_ack מציג ACKים כפולים שמסמנים אובדן."
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
      explanation: "‏Zero Window הוא כשה-receiver מכריז שאין לו buffer פנוי (window size=0). ה-sender חייב להפסיק לשלוח. בדרך כלל סימן שה-application לא קורא מ-socket מהר מספיק — בעיית CPU או כניסה לקוד."
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
      explanation: "‏TCP Stream Graphs ב-Wireshark כוללים: Time-Sequence (CWND), Throughput, Round-trip Time, Window Scaling. הגרף הכי שימושי לניפוי: Time-Sequence — כל retransmission מופיע כנקודה שנוחתת ב-Y נמוך יותר, ו-CWND צניחה."
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
      explanation: "‏Wireshark display filters (≠ capture filters!): http.request.method == 'GET'. ‏Capture filter (BPF syntax): host 192.168.1.1 and port 80. שימושיים: ip.src == 10.0.0.1, tcp.port == 443, dns.qry.name contains 'google', tls.handshake.type == 1 (ClientHello), http.response.code >= 400. tcp.analysis.retransmission לבעיות רשת. ‏Statistics → Protocol Hierarchy להבנת composition. ‏Follow → TCP Stream לראות full conversation בקריאה."
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
      explanation: "‏TLS 1.3 Handshake ב-Wireshark: 1) TCP SYN/SYN-ACK/ACK (TCP layer). ‏2) ClientHello (TLS record type 22, handshake type 1): TLS version, random, session ID, cipher suites, extensions (SNI, ALPN, supported_groups). ‏3) ServerHello + {Encrypted Extensions + Certificate + CertificateVerify + Finished} ‎(מוצפן!)‎. ‏4) Client {Finished}. ‏5) Application Data. ‏TLS 1.3 = 1-RTT vs TLS 1.2 = 2-RTT. לפענוח: Wireshark → Preferences → TLS → (Pre)-Master-Secret log file."
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
      explanation: "‏iBGP = Internal BGP, בתוך אותו AS. eBGP = External BGP, בין ASים שונים. ההבדלים הטכניים: TTL (iBGP=255, eBGP=1), next-hop behavior, ו-loop prevention rule ‎(iBGP router לא מפרסם מסלול iBGP לiBGP אחר ← חייב full mesh או Route Reflectors)‎."
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
      explanation: "סדר path selection ב-BGP: 1) Weight (Cisco), 2) Local Preference, 3) Locally originated, 4) AS Path Length ‎(קצר יותר)‎, 5) Origin, 6) MED ‎(נמוך יותר)‎, 7) eBGP > iBGP, 8) IGP metric. ברוב הRFC implementations, Local Preference הוא הראשון ‎(Weight הוא Cisco proprietary)‎."
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
      explanation: "‏BGP Longest Prefix Match: /24 תמיד מנצח /22 כי הוא ספציפי יותר. ‏Pakistan פרסמה 208.65.153.0/24 ←  route ספציפי יותר מ-208.65.153.0/22 של YouTube. ‏ISPים בכל העולם העדיפו אותו. ‏75% מטראפיק YouTube הופנה ל-Pakistan תוך דקות. ‏RPKI נוצר בדיוק כדי למנוע זאת."
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
      explanation: "‏AS Path Loop Prevention: router מקבל UPDATE עם AS_PATH: [64501, 64502, 64503]. אם ה-ASN שלו (64501) מופיע בpath → DISCARD (loop!). ‏AS Path גם משמש כroute selection attribute ‎(קצר יותר = מועדף ברירת מחדל)‎. ‏AS Path Prepending: מוסיפים ASN שלנו מספר פעמים → נראה ארוך יותר → route פחות מועדף (traffic engineering). ‏ASPATH regex filter: ip as-path access-list 10 permit ^64501_."
    },
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
      explanation: "‏Recursive Resolver (8.8.8.8, 1.1.1.1) שואל את Root → TLD → Auth בשביל הclient ומחזיר תוצאה מcache. ‏Authoritative NS (ns1.google.com) הוא המקור הסמכותי לdomain ספציפי — רק הוא יודע את ה-IP האמיתי."
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
      explanation: "‏DoH שולח DNS queries מוצפנות על HTTPS (port 443) — ה-ISP רואה HTTPS traffic לCloudflare/Google, לא את הdomains שאתה מבקר. ‏DNSSEC מספק אימות קריפטוגרפי ‎(שאלה נפרדת)‎. ‏DoT (port 853) הוא אלטרנטיבה — DNS over TLS."
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
      explanation: "‏Anycast: אותה כתובת IP מפורסמת ממספר locations ב-BGP. ‏BGP always routes to the closest/best path. תוצאה: משתמש בישראל מגיע לdatacenter באירופה/ישראל, לא ב-US. ‏8.8.8.8 רץ מ-dozens of locations — RTT נמוך מכל מקום בעולם."
    },
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
      explanation: "‏HTTP/2 הביא multiplexing ‎(מספר streams בחיבור אחד)‎, אבל TCP מטפל בstream כbyte stream אחד רציף. אובדן packet → TCP מחכה לretransmission → כל ה-streams קפואים. ‏HTTP/3 על QUIC פותר זאת: כל stream עצמאי, אובדן ב-stream אחד לא חוסם אחרים."
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
      explanation: "‏TCP זוהה לפי tuple (src IP, src port, dst IP, dst port). מעבר WiFi → סלולרי = IP חדש = חיבור נשבר. ‏QUIC זוהה לפי Connection ID אקראי — ה-server ממשיך לדעת מי אתה גם אחרי שינוי IP. ‏TLS 1.3 session resumption מאפשר המשך ללא re-handshake."
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
      explanation: "‏TCP + TLS = 1-3 RTT לפני data. ‏QUIC עם session resumption: client שומר session ticket מחיבור קודם, שולח data מיד עם ה-first packet (0-RTT). מגבלה: 0-RTT data פגיע ל-replay attacks — לכן משתמשים בו רק לread-only requests."
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
      explanation: "‏HTTP/1.1: כל request שולח User-Agent, Accept, Cookie מחדש — headers גדולים כ-1-2KB. ‏HPACK (RFC 7541): Static table (61 common headers), Dynamic table ‎(headers שנראו ב-session)‎. 'GET /index.html' → index 2 ‎(1 byte במקום 20 bytes!)‎. ‏CRIME/BREACH attacks: ניצלו TLS+gzip compression לחשיפת secrets. ‏HPACK: header-only, לא body → נמנע CRIME. ‏QPACK (HTTP/3): HPACK for QUIC — מותאם לmultiplexing ללא blocking."
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
      explanation: "‏eBPF Verifier בודק: 1) No unbounded loops — ה-program חייב לסיים, 2) No out-of-bounds memory access, 3) No uninitialized reads, 4) Return codes חוקיים. רק אחרי verification מוצלח ה-kernel מריץ את ה-bytecode (JIT compiled). זה ה-key feature שמאפשר run code in kernel safely."
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
      explanation: "‏XDP (eXpress Data Path) פועל ב-NIC driver level, לפני ה-kernel network stack. ‏XDP_DROP = drop מיידי, אפס overhead של kernel. ‏XDP_PASS = עובר ל-kernel רגיל. ‏XDP_TX = שולח בחזרה (hairpin). ‏XDP_REDIRECT = מפנה. זו הסיבה שCloudflare יכולה לבלוע 2.5B pps של DDoS."
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
      explanation: "‏Kubernetes עם 1000 services = iptables עם אלפי rules = כל packet עובר O(n) חיפוש ליניארי. ‏Cilium מחליף iptables בeBPF hash maps = O(1) בכל גודל. בנוסף: Cilium/Hubble מספקים observability מלאה (pod → pod traffic), security policies ברמת L7, וביצועים שלא תאמין."
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
      explanation: "‏eBPF maps: IPC mechanism בין eBPF programs לuser-space tools. ‏HASH_MAP: key-value store. ‏ARRAY: fixed-size indexed. ‏LRU_HASH: evicts least recently used. ‏RINGBUF: efficient ring buffer לstreaming events לuserspace ‎(מחליף PERF_EVENT_ARRAY)‎. ‏PERCPU variants: lock-free per-CPU storage. בpinning לpath (/sys/fs/bpf/my_map) ניתן לshare בין processes. libbpf API: bpf_map_lookup_elem, bpf_map_update_elem. ‏Cilium: maps לtrack connections, policies, endpoints."
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
      explanation: "‏Tracepoints (sys_enter/sys_exit, net:netif_rx, sched:sched_switch): מוגדרים בmacro TRACE_EVENT בkernel source. ‏Stable: נשמרים בין kernel versions. uprobes: כמו kprobes אבל לuserspace functions. ‏Perf events: hardware counters (CPU cycles, cache misses). bpftrace one-liner: bpftrace -e 'tracepoint:syscalls:sys_enter_read { printf(\\\"%s read %d bytes\\n\\\", comm, args->count); }'. libbpf skeleton: generate C bindings מBTF."
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
      explanation: "‏Cilium eBPF CNI: kube-proxy replacement ‎(eBPF LB במקום iptables)‎, Network Policies (L3/L4/L7), transparent encryption (WireGuard), Hubble (observability — flow visibility per pod, DNS, HTTP). iptables bottleneck: 10,000 services = 10,000 rules, linear scan. eBPF hash maps: O(1). ‏Cilium בBenchmark: 20-40% better throughput vs kube-proxy. ‏CNCF Graduated project. ‏Service Mesh via Sidecar-free (eBPF replaces Envoy sidecars in Cilium Service Mesh)."
    }
  ],

  207: [
    {
      q: "מה ההבדל בין Terraform apply לבין Terraform plan?",
      correct: "‏plan מציג מה ישתנה (dry run), apply מבצע את השינויים בפועל",
      choices: [
        "‏plan מציג מה ישתנה (dry run), apply מבצע את השינויים בפועל",
        "‏plan יוצר resources, apply מוחק אותם",
        "שניהם מבצעים שינויים, ההבדל הוא מהירות בלבד",
        "‏plan עובד ב-AWS בלבד, apply עובד בכל cloud"
      ],
      explanation: "‏terraform plan = dry run שמחשב את ה-diff בין ה-HCL לבין ה-state הנוכחי ומציג מה ייצור/ישנה/ימחק. terraform apply = מבצע את אותם שינויים בפועל. best practice: תמיד run plan ותעיין בoutput לפני apply בפרודקשן."
    },
    {
      q: "מה זה Terraform State ולמה חשוב לשמור אותו ב-S3?",
      correct: "‏State הוא המיפוי בין HCL לresources אמיתיים — ב-S3 כדי שהצוות כולו ישתמש באותו state",
      choices: [
        "‏State הוא המיפוי בין HCL לresources אמיתיים — ב-S3 כדי שהצוות כולו ישתמש באותו state",
        "‏State הוא הגדרות הprovider — ב-S3 לbackup בלבד",
        "‏State שומר את קוד ה-HCL המקומפל",
        "‏State רלוונטי רק ל-multi-cloud deployments"
      ],
      explanation: "‏State הוא הלב של Terraform — מפה מי יצר מה. בלי state, Terraform לא יודע מה קיים. ב-S3+DynamoDB: S3 מאחסן את ה-tfstate, DynamoDB מספק locking כדי שלא שני אנשים יריצו apply במקביל (state corruption). remote state = must בצוות."
    },
    {
      q: "מה ההבדל בין Cattle לבין Pets בהקשר של IaC?",
      correct: "‏Pets = שרתים ייחודיים שמרפאים, Cattle = שרתים זהים שמחליפים — IaC מעדיף Cattle",
      choices: [
        "‏Pets = שרתים ייחודיים שמרפאים, Cattle = שרתים זהים שמחליפים — IaC מעדיף Cattle",
        "‏Cattle = שרתים גדולים (scale-up), Pets = שרתים קטנים",
        "‏Pets = cloud, Cattle = on-premise",
        "ההבדל הוא בסוג הOS בלבד"
      ],
      explanation: "‏Netflix הציגה את המטפורה ב-2012. ‏Pets = dev-01, big-iron — לכל אחד שם, ייחודי, ידנית מוגדר. ‏Cattle = web-047, מספרים, זהים, immutable. ‏Terraform + Auto Scaling = Cattle: instance מת? Auto Scaling מייצר אחד חדש מה-template. ‏Chaos Monkey של Netflix הורג servers בפרודקשן ביזמה — כדי לוודא ה-architecture Cattle-ready."
    },
        {
      q: "מה Terraform Module ולמה משתמשים בהם?",
      correct: "קבצי .tf מקובצים ליחידה לוגית לשימוש חוזר — מאפשרים DRY, encapsulation, versioning וsharing של infrastructure patterns",
      choices: [
        "קבצי .tf מקובצים ליחידה לוגית לשימוש חוזר — מאפשרים DRY, encapsulation, versioning וsharing של infrastructure patterns",
        "‏Terraform plugin שמוריד providers",
        "ממשק גרפי לניהול Terraform plans",
        "‏Module = workspace נפרד ב-Terraform Cloud"
      ],
      explanation: "‏Module structure: modules/vpc/main.tf + variables.tf + outputs.tf. ‏Usage: module 'prod-vpc' { source = './modules/vpc'; cidr = '10.0.0.0/16'; azs = ['us-east-1a', 'us-east-1b'] }. ‏Terraform Registry: hashicorp/vpc/aws — modules מוכנים מהcommunity. version = '~> 5.0' לpin version. outputs.tf: output 'vpc_id' { value = aws_vpc.main.id } → module.prod-vpc.vpc_id במשאבים אחרים. ‏DRY: same module לdev/staging/prod עם variables שונים."
    }
  ],

  208: [
    {
      q: "מה ההבדל בין RED method לבין USE method בmonitoring?",
      correct: "‏RED (Rate/Errors/Duration) למדידת services, USE (Utilization/Saturation/Errors) למדידת resources",
      choices: [
        "‏RED (Rate/Errors/Duration) למדידת services, USE (Utilization/Saturation/Errors) למדידת resources",
        "‏RED לbackend, USE לfrontend",
        "‏USE לKubernetes, RED לVM",
        "שניהם מדדים זהים עם שמות שונים"
      ],
      explanation: "‏RED שואל: כמה requests לשנייה? כמה נכשלים? כמה זמן לוקח? — מתאים לmicroservices ולAPIs. ‏USE שואל: כמה CPU/Memory בשימוש? האם יש queue buildup? יש errors בhardware? — מתאים לinfrastructure (servers, disks, network). ‏Brendan Gregg (Netflix) פיתח את USE method."
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
      explanation: "‏histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m])) = P99 latency. פירוש: 99% מהrequests הסתיימו בזמן הזה או פחות. ה-1% הגרועים ביותר = הזנב. ‏SLOs בגוגל מוגדרים בP99 כי ממוצע מסתיר latency spikes. rate() קודם על הbucket = חשוב לחישוב נכון."
    },
    {
      q: "מה ה-pull model של Prometheus לעומת push model?",
      correct: "‏Prometheus scrapes metrics מservices בעצמו (pull), לעומת Graphite/StatsD שservices דוחפים אליהם (push)",
      choices: [
        "‏Prometheus scrapes metrics מservices בעצמו (pull), לעומת Graphite/StatsD שservices דוחפים אליהם (push)",
        "‏pull = real-time, push = batch",
        "‏pull מהיר יותר כי לא צריך network",
        "‏push model אבטחתי יותר"
      ],
      explanation: "‏Prometheus pull: מגדיר scrape_configs עם targets, Prometheus שולח GET /metrics כל 15s. יתרון: Prometheus שולט מי נסרק, קל לhealthcheck ‎(אם scrape נכשל = service down)‎. חיסרון: services חייבים לחשוף /metrics endpoint. ‏Pushgateway קיים לjobs קצרים שלא חיים מספיק לscrape."
    },
        {
      q: "מה PromQL query שמחשב request rate ב-5 דקות האחרונות?",
      correct: "‏rate(http_requests_total[5m]) — מחשב שיעור שינוי per-second של counter בחלון זמן של 5 דקות",
      choices: [
        "‏rate(http_requests_total[5m]) — מחשב שיעור שינוי per-second של counter בחלון זמן של 5 דקות",
        "‏avg(http_requests_total, 5m)",
        "‏count(http_requests[5m])",
        "‏sum(requests) over 5m"
      ],
      explanation: "‏rate() vs irate(): rate([5m]) = average rate over window ‎(stable, לalerts)‎. irate([5m]) = instant rate ‎(2 last samples, volatile, לgraphs)‎. increase(counter[1h]) = עליה מוחלטת בשעה. sum(rate(http_requests_total[5m])) by (status_code): breakdown לפי status. avg_over_time(gauge[1h]): ממוצע של gauge בשעה. histogram_quantile(0.99, rate(request_duration_bucket[5m])): P99 latency. החוק: רק rate() על counters ‎(לא gauges)‎."
    },
        {
      q: "מה RED Method ב-SRE ומה מדדים בודקים?",
      correct: "‏Rate ‎(בקשות/שנייה)‎, Errors ‎(שיעור שגיאות)‎, Duration (latency) — שלושת המדדים הבסיסיים לבריאות שירות",
      choices: [
        "‏Rate ‎(בקשות/שנייה)‎, Errors ‎(שיעור שגיאות)‎, Duration (latency) — שלושת המדדים הבסיסיים לבריאות שירות",
        "‏Reliability, Efficiency, Durability",
        "‏Requests, Errors, Downtime",
        "‏Response time, Error budget, Deployment frequency"
      ],
      explanation: "‏RED Method (Tom Wilkie, Weave Works) לmicroservices: Rate = rate(requests_total[1m]). ‏Error = rate(requests_total{status='error'}[1m]) / rate(requests_total[1m]). ‏Duration = histogram_quantile(0.95, rate(request_duration_bucket[1m])). ‏USE Method (Brendan Gregg) לresources: Utilization (CPU%), Saturation (queue depth), Errors. ‏RED = user perspective, USE = resource perspective. ‏Golden Signals (Google SRE Book): Latency, Traffic, Errors, Saturation (RED + Saturation)."
    },
        {
      q: "מה ההבדל בין Grafana Dashboard לבין Grafana Alert?",
      correct: "‏Dashboard: ויזואליזציה של metrics לצפייה — Alert: rule שמוערך periodically ושולח notification כשthreshold מופר",
      choices: [
        "‏Dashboard: ויזואליזציה של metrics לצפייה — Alert: rule שמוערך periodically ושולח notification כשthreshold מופר",
        "‏Dashboard לprod — Alert לdev/staging",
        "‏Alert הוא dashboard מיוחד עם רקע אדום",
        "‏Grafana עושה רק visualization — Alerting דרך Prometheus בלבד"
      ],
      explanation: "‏Grafana Alerting (Unified Alerting): Alert Rule → Evaluation Group ‎(כל 1m)‎ → Contact Point (Slack/PagerDuty/Email) → Notification Policy. ‏Alert states: Normal, Pending ‎(threshold הופר אך לא עבר for duration)‎, Firing, No Data, Error. ‏Alert Rule בPromQL: avg_over_time(up[5m]) < 0.5 ‎(שירות down >50% מהזמן ב-5 דקות)‎. ‏Alertmanager: deduplication, grouping, routing, silencing. ‏Runbook URL: קישור לprocedure לאחר alert."
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
      explanation: "‏Drift = מישהו עשה kubectl edit/patch ישירות על cluster מחוץ לGit. ‏ArgoCD מזהה את ה-diff ומציג status=OutOfSync. עם syncPolicy.automated.selfHeal=true — ArgoCD מחזיר לstate ב-Git אוטומטית תוך דקות. זה הלב של GitOps: Git הוא מקור האמת היחיד."
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
      explanation: "בpush deployment: ל-CI pipeline (GitHub Actions, Jenkins) יש kubeconfig עם cluster admin — זה attack surface ענקי. אם CI נפרץ = cluster נפרץ. בGitOps pull: ArgoCD רץ בתוך ה-cluster, מסתכל על Git מבפנים. שום entity חיצוני לא צריך cluster credentials. זה security posture הרבה יותר טוב."
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
      explanation: "‏base64 הוא לא הצפנה! Sealed Secrets: kubeseal מצפין עם public key של ה-cluster — רק ה-cluster יכול לפענח, בטוח לsave בGit. ‏External Secrets: רץ בcluster, מושך מ-Vault/AWS Secrets Manager/GCP Secret Manager, יוצר Kubernetes Secret מקומי. שניהם פתרונות לגיטימיים. לעולם לא plaintext passwords ב-Git."
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
      explanation: "‏Application manifest: apiVersion: argoproj.io/v1alpha1; kind: Application; spec.source: repoURL + path + targetRevision (branch/tag/commit); spec.destination: server (cluster API URL) + namespace; syncPolicy.automated: prune: true ‎(מוחק resources שנמחקו מGit)‎, selfHeal: true ‎(תוקן אם מישהו שינה ישירות בcluster)‎. ‏ArgoCD poll Git כל 3 דקות ברירת מחדל, webhook = מיידי. ‏App of Apps pattern: Application שמנהלת Applications אחרות."
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
      explanation: "‏Rolling Update: maxSurge=1, maxUnavailable=0 → pods מוחלפים אחד-אחד, אין visibility לmetrics. ‏Argo Rollouts Canary: steps: setWeight 10% → pause 5m → analysis (error rate < 1%?) → setWeight 50% → analysis → setWeight 100%. אם analysis נכשל → automatic rollback! Blue/Green: שתי סביבות מלאות, traffic switch רגעי. ‏AnalysisTemplate: query Prometheus, Datadog, CloudWatch לvalidation אוטומטי."
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
      explanation: "‏Flux v2 (CNCF Graduated): GitRepository CR → מצביע על repo; Kustomization CR → מיישם path. ‏Multi-tenancy טוב. ‏Notification Controller לSlack/Teams. ‏Image Automation: מעדכן Git אוטומטית עם tag חדש מRegistry! ArgoCD: UI מנצחת לvisibility, ApplicationSet לmulti-cluster/multi-app patterns. ‏App of Apps. ‏RBAC מובנה. בחירה: Argo אם רוצים UI ו-visibility. ‏Flux אם GitOps-first, CLI-driven, multi-tenant setup. שניהם CNCF projects."
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
      explanation: "‏GitOps principles (Weaveworks): 1) Declarative: כל infra כ-code. ‏2) Versioned: Git כsingle source of truth. ‏3) Automatic: approved changes מיושמות אוטומטית. ‏4) Continuously reconciled: agent מזהה ומתקן drift. ‏Pull vs Push: CI/CD pushes → cluster. ‏GitOps agent pulls from Git. ‏Benefits: audit log (git log), rollback (git revert), consistency."
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
      explanation: "‏Argo Rollouts: CRD שמחליף Deployment. ‏Strategy: canary (5% → 20% → 50% → 100%), blueGreen (preview + active). ‏Analysis: Prometheus queries. אם error rate > 5% → automatic rollback. ‏Flagger: Istio/NGINX integration. ‏Feature Flags (LaunchDarkly, Unleash): הפרדת deployment מrelease. ‏Ship dark = deploy without enabling feature."
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
      explanation: "ב-RSA key exchange (TLS 1.2): הclient מצפין session key בpublic key של השרת. תוקף שהקליט traffic ב-2020 וגנב private key ב-2024 — יכול לפענח את ה-2020 traffic. ב-ECDHE ‎(TLS 1.3 חובה)‎: מפתחות ephemeral נוצרים per-session ונמחקים. אין מפתח ישן לgraceful. 'Ephemeral' = key חי רק לאותה session."
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
      explanation: "‏RC4: AlFardan et al. ‏2013 הראו biases סטטיסטיים שמאפשרים לפענח HTTPS cookies אחרי ~2^26 connections. ‏BEAST attack (2011) ניצל CBC ב-TLS 1.0. ‏SHA-1: Google SHAttered 2017 — נמצאו שני PDF files שונים עם אותו SHA-1 hash, עם GPU cluster בעלות $110K. ‏TLS 1.3 אפשר רק AEAD ciphers (AES-GCM, ChaCha20-Poly1305)."
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
      explanation: "‏TLS 1.2: ClientHello → ServerHello+Cert → KeyExchange → Finished → Data = 2 full RTT. ‏TLS 1.3: הclient שולח KeyShare כבר בClientHello הראשון. השרת עונה עם ServerHello+keys+Finished = 1 RTT. ‏0-RTT (Early Data): בsession resumption, הclient שולח data בround trip הראשון. אבל 0-RTT vulnerable לreplay attacks — להשתמש רק בGET."
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
      explanation: "‏Diffie-Hellman: שני צדדים חולקים public numbers g^a mod p ו-g^b mod p → מחשבים g^ab mod p (shared secret) ללא שליחת a או b. ‏Elliptic Curve: g^a → נקודת עקומה אליפטית — יעיל יותר (256-bit EC = 3072-bit RSA security). ‏Ephemeral: מפתחות חדשים לכל session, נמחקים אחרי. גם אם תוקף שבר את ה-EC discrete log בעוד 10 שנים — sessions ישנות לא מפוענחות. ‏Curve25519 (X25519) = curve הנפוצה ב-TLS 1.3."
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
      explanation: "בעיה: DigiNotar 2011 הנפיקה wildcard cert של *.google.com ל-MITM by Iranian government. ‏CT (RFC 6962): כל CA חייב לsubmit כל cert לCT logs (Google Argon, Cloudflare Nimbus). ‏Signed Certificate Timestamp (SCT): proof שcert הוגש. ‏Browsers (Chrome 2018+): דוחים certs ללא valid SCT. domain owner יכול לmonitor CT logs לcerts unauthorised לdomain שלו (crt.sh). ‏Merkle tree structure = tamper-evident log."
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
      explanation: "‏Anycast: Cloudflare מפרסמת 1.1.1.0/24 ב-BGP מ-300+ POPs. כשrouter בתל אביב מחפש 1.1.1.1 — הוא רואה כמה paths, בוחר הקצר ביותר (AS hops) = POP בתל אביב. שימוש: DNS root servers, CDN, DDoS mitigation. לא מתאים לTCP sessions ארוכים כי connection עלול לנדוד בין POPs."
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
      explanation: "‏Pakistan Telecom 2008: הכריזו על 208.65.153.0/24 (YouTube) — כל האינטרנט שלח traffic ל-Pakistan. ‏BGP trust-based = כל AS יכול להכריז על כל prefix. ‏RPKI: RIRs (RIPE, ARIN, APNIC) מפרסמים ROA (Route Origin Authorization) חתומה — 'AS13335 מורשה להכריז על 1.1.1.0/24'. ‏Routers שמסננים לפי RPKI דוחים invalid routes. ‏40% מה-routes מוגנים נכון ל-2024."
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
      explanation: "‏Cloudflare עם 300 POPs = 300 נקודות קליטה. ‏DDoS של 2Tbps מחולק ל-~6.7Gbps לכל POP — ניתן לספוג בקלות. ב-unicast, כל ה-2Tbps היה פוגע בנקודה אחת. בנוסף, Anycast BGP failover אוטומטי: POP שנפל תחת load → מסיר את ה-prefix מBGP → traffic עובר לPOP הבא הקרוב. זו הסיבה ש-Cloudflare, Akamai, Amazon CloudFront — כולם Anycast."
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
      explanation: "‏RPKI/ROA: validates 'AS64501 is legitimate originator of 192.0.2.0/24'. אבל: AS Path: 64501 → 64502 → 64503. ‏AS64502 יכול לשנות path! BGPsec (RFC 8205): כל AS שמעביר UPDATE מוסיף חתימה קריפטוגרפית. ‏Receiver מאמת שכל hop בAS path חתם. מגן מ-path manipulation attacks. חסרון: performance overhead משמעותי, כל router צריך לחשב signatures. ‏Adoption: מאוד נמוכה בpractice בגלל complexity. ‏RPKI/ROV = פרקטי ונפוץ הרבה יותר."
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
      explanation: "2019-06-24: DQE Communications (PA) שלחה routes שגויים לMainOne (Nigeria) שלחה לVerizon. ‏Verizon (AS701) = Tier-1 — לא filter! הכריזה ל-internet. ‏Cloudflare prefixes הוסטו דרך path ארוך ועמוס. ‏DQE קיבלה traffic ממשתמשים עולמיים לCFLR → collapse. ‏RPKI Invalid היה אמור לחסום. ‏AWS, Linode גם הושפעו. ‏Cloudflare פרסמה: 'Verizon צריכה לfilter את לקוחותיה.' IRR (Internet Routing Registry) + RPKI = שכבות הגנה שהיו מונעות זאת."
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
      explanation: "‏veth pair = כבל וירטואלי. ‏Docker יוצר veth pair: קצה אחד (eth0) בnamespace של הcontainer, קצה שני (vethXXXXXX) בhost namespace ומחובר לbridge docker0. packet שנשלח מcontainer → eth0 → veth pair → vethXXX בhost → docker0 bridge → routing. ip link add veth0 type veth peer name veth1 יוצר את ה-pair."
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
      explanation: "‏Flannel VXLAN: packets בין nodes מוצפנים ב-UDP header (encapsulation). פשוט להתקנה אבל overhead. ‏Calico BGP: כל Kubernetes node הוא BGP router שמפרסם את ה-podCIDR שלו. ‏Packets עוברים ב-L3 ישירות ללא encapsulation = ביצועים גבוהים יותר. ‏Calico מוסיף Network Policy. ‏Cilium (eBPF): מחליף iptables, O(1) lookups, L7 visibility."
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
      explanation: "‏Kubernetes CNI contract: כל pod יכול לדבר עם כל pod ב-pod IP שלו, ללא NAT. אותו node = veth pair → bridge → L2 forwarding מהיר. בין nodes: CNI מממש. ‏Flannel: מוסיף VXLAN header (UDP 8472) → underlay network → מסיר header ב-node היעד. ‏Calico: node1 יודע ש-10.0.2.0/24 נמצא ב-node2 דרך BGP → route ישיר ב-IP layer. kube-proxy מנהל Service IPs, לא pod-to-pod."
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
      explanation: "‏Linux Namespaces: network, PID, mount, UTS, IPC, user, cgroup. ‏Network namespace: ip netns add mynet → namespace חדש עם lo בלבד. ip link add veth0 type veth peer name veth1 → pair. ip link set veth1 netns mynet → veth1 עובר לnamespace. ip netns exec mynet ip addr show → רואה רק veth1 ו-lo. ‏Docker: בkubernetes — כל pod = namespace אחד ‎(containers בpod משתפים network namespace → localhost!)‎."
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
      explanation: "‏Bridge (default): docker0 bridge IP 172.17.0.1. container מקבל 172.17.0.2. docker run -p 8080:80: iptables DNAT rule. ‏Host mode: docker run --network host nginx → nginx שומע על port 80 של host ישירות, ללא NAT. ביצועים טובים ‎(אין overhead)‎. סיכון: container רואה כל interfaces של host, port conflicts. ‏None: docker run --network none → container ללא network (air-gapped). ‏Macvlan: container מקבל MAC address ישיר ב-physical network."
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
      explanation: "‏Service ClusterIP (למשל: 10.96.0.1) לא קיימת כ-real interface! kube-proxy: מקשיב ל-Kubernetes API, כשService נוצרת → מוסיף iptables rules: DNAT 10.96.0.1:80 → בחר רנדומלי pod מEndpoints. ‏IPVS mode: L4 load balancer kernel module, יעיל יותר מiptables ל-cluster גדול. ‏Cilium יכול להחליף kube-proxy בeBPF: O(1) lookups במקום O(n) iptables rules. ‏CoreDNS עושה DNS resolution ‎(לא kube-proxy)‎."
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
      explanationEn: "AuthN (Authentication): who are you? Login with username+password, biometrics, or certificate. AuthZ (Authorization): what are you allowed to do? RBAC, ACL, permissions. Common mistake: IDOR (Insecure Direct Object Reference) = an AuthZ problem — an authenticated user accesses another user's resource by changing an ID in the URL."
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
      explanationEn: "SHA256: a modern GPU computes 10 billion hashes/second. bcrypt cost=12: ~300 hashes/second per GPU. Brute-forcing 8 lowercase characters = 200 billion combinations. With SHA256: seconds. With bcrypt cost=12: years. Argon2id is memory-hard — even ASICs/GPUs are slowed because they need gigabytes of RAM."
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
      explanationEn: "JWT header contains the algorithm (e.g., HS256) + payload + signature. If an attacker changes the header to alg=none and removes the signature, a vulnerable server accepts the unsigned token. Fix: whitelist algorithms on the server side (reject anything other than HS256/RS256). Never let the user choose the algorithm!"
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
      explanationEn: "Authentication factors: 1) Knowledge: password, PIN. 2) Possession: TOTP app, SMS, hardware key (YubiKey). 3) Inherence: biometric (fingerprint, face). MFA = combining 2+ factors. Phishing can steal a password, but not a TOTP code (though Adversary-in-the-Middle attacks can intercept TOTP). WebAuthn/FIDO2 = phishing-resistant authentication."
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
      explanationEn: "Without salt: every user with the same password gets the same hash. A rainbow table is a precomputed mapping of hash to plaintext. With salt: hash('password123' + random_salt) — each user's hash is different. Brute-force must recompute for each user. bcrypt/Argon2 generate a salt automatically and store it within the hash string."
    }
  ],

  112: [
    {
      q: "מה CSP (Content-Security-Policy) עושה?",
      correct: "מנחה את הדפדפן מאילו מקורות לטעון סקריפטים, סגנונות ותמונות — מגן מ-XSS על ידי חסימת קוד inline ומקורות זרים",
      choices: [
        "מנחה את הדפדפן מאילו מקורות לטעון סקריפטים, סגנונות ותמונות — מגן מ-XSS על ידי חסימת קוד inline ומקורות זרים",
        "מצפין תוכן בין לקוח לשרת",
        "מסנן תוכן זדוני בצד השרת",
        "מגביל גישה לנקודות API לפי כתובת IP"
      ],
      explanation: "כותרת CSP מורה לדפדפן לחסום: JavaScript ממקורות לא מאושרים, סקריפטים inline, וקריאות eval. מנגנון nonce מייצר מזהה אקראי לכל טעינת דף — רק סקריפט עם nonce נכון מורשה לרוץ. מצב Report-Only מדווח על חסימות בלי לחסום בפועל.",
      explanationEn: "CSP header instructs the browser to block: JS from unapproved sources, inline script tags, and eval(). Nonce: each page load receives a random nonce — only scripts with the matching nonce are allowed. Report-Only mode reports violations without blocking. This is a powerful defense against XSS attacks."
    },
    {
      q: "מה HSTS ולמה הוא מגן מהתקפת SSL Stripping?",
      correct: "כותרת HTTP שמכריחה את הדפדפן לעבוד רק ב-HTTPS — ניסיון לשדרג לאחור ל-HTTP נכשל",
      choices: [
        "כותרת HTTP שמכריחה את הדפדפן לעבוד רק ב-HTTPS — ניסיון לשדרג לאחור ל-HTTP נכשל",
        "מאמת תעודת שרת ומסרב לרשויות לא מהימנות",
        "מצפין עוגיות אוטומטית",
        "מגביל חיבורי TLS לגרסה 1.3 בלבד"
      ],
      explanation: "בהתקפת SSL Stripping, תוקף באמצע (MITM) מקבל HTTPS מהשרת אבל משדרג לאחור ל-HTTP עם הלקוח. כותרת HSTS גורמת לדפדפן לזכור: תמיד HTTPS לאתר הזה, גם אם המשתמש כותב http. מצב Preload מוסיף את האתר לרשימה קבועה בדפדפן — מגן גם בביקור ראשון.",
      explanationEn: "SSL Stripping (Moxie Marlinspike 2009): a MITM attacker receives HTTPS from the server but downgrades to HTTP with the client. HSTS: Strict-Transport-Security: max-age=31536000. The browser remembers: always use HTTPS for this site, even if the user types http://. Preload: added to the browser's hardcoded list — protects even the first visit. includeSubDomains is required for preload."
    },
    {
      q: "מה CSRF ואיך SameSite=Strict מגן ממנו?",
      correct: "התקפת CSRF גורמת לדפדפן לשלוח בקשה לאתר X מאתר זדוני עם העוגיות של X. דגל SameSite=Strict מונע שליחת עוגיות בבקשות חוצות-אתרים",
      choices: [
        "התקפת CSRF גורמת לדפדפן לשלוח בקשה לאתר X מאתר זדוני עם העוגיות של X. דגל SameSite=Strict מונע שליחת עוגיות בבקשות חוצות-אתרים",
        "‏CSRF גונבת עוגיות ישירות מהדפדפן",
        "‏CSRF = מסנן בקשות חוצות-אתרים",
        "‏SameSite מצפין עוגיות בין אתרים"
      ],
      explanation: "באתר זדוני, תגית תמונה עם כתובת של הבנק גורמת לדפדפן לשלוח בקשה עם העוגיות של הבנק (כי הדפדפן מוסיף עוגיות אוטומטית). ‏SameSite=Strict: עוגייה נשלחת רק לבקשות מאותו אתר. Lax: רק בניווט. טוקן CSRF: שדה חבוי עם ערך שהשרת יצר — אתר זדוני לא יכול לדעת אותו.",
      explanationEn: "In CSRF: a malicious site embeds a request to bank.com, and the browser sends it with the user's cookies (because browsers attach cookies automatically). SameSite=Strict: cookie is sent only for same-site requests. Lax: only for top-level navigation. None: all cross-site (legacy). CSRF token: a hidden field with a server-generated token that the attacker's site cannot know."
    },
    {
      q: "מה X-Frame-Options ולמה חשוב?",
      correct: "מונע טעינת האתר ב-iframe — מגן מהתקפת Clickjacking שבה אתר זדוני מסתיר iframe על כפתור שהמשתמש לוחץ",
      choices: [
        "מונע טעינת האתר ב-iframe — מגן מהתקפת Clickjacking שבה אתר זדוני מסתיר iframe על כפתור שהמשתמש לוחץ",
        "מגביל קצב פריימים של הדפדפן לחיסכון בחשמל",
        "מצפין כותרות X בבקשת HTTP",
        "מסיר כותרות X מהתגובה לצמצום דליפת מידע"
      ],
      explanation: "בהתקפת Clickjacking: אתר זדוני כולל iframe מוסתר של אתר הבנק, עם כפתור מעליו. המשתמש לוחץ על 'זכה בפרס!' אבל בפועל לוחץ על 'העבר כסף'. ‏X-Frame-Options עם DENY אוסר iframe לחלוטין. SAMEORIGIN מתיר רק מאותו מקור. הגישה המודרנית: CSP frame-ancestors.",
      explanationEn: "Clickjacking: a malicious site embeds the target site in a hidden iframe with a button overlay. The user clicks 'Win a Prize!' but actually clicks 'Transfer Money' on the hidden iframe. X-Frame-Options: DENY — never allow framing. SAMEORIGIN — allow only from same origin. Modern alternative: CSP frame-ancestors 'none'. Facebook Like button hijacking was a classic example."
    }
  ],

  113: [
    {
      q: "מה IoC? תן 3 דוגמאות.",
      correct: "סימן לפריצה (Indicator of Compromise) — עדות שמערכת נפרצה. דוגמאות: כתובת IP של שרת שליטה, hash של קובץ נוזקה, דומיין זדוני",
      choices: [
        "סימן לפריצה (Indicator of Compromise) — עדות שמערכת נפרצה. דוגמאות: כתובת IP של שרת שליטה, hash של קובץ נוזקה, דומיין זדוני",
        "ראשי תיבות של Internet of Cybersecurity — מכשירי IoT עם אבטחה",
        "מדד פריצה (Index of Compromise) — דירוג רמת הפריצה",
        "מרכז תפעול פנימי (Internal Operations Center)",
      ],
      explanation: "סימני פריצה כוללים: כתובות IP, hash של קבצים (MD5/SHA256), דומיינים, כתובות URL, נושאי אימייל, מפתחות registry ושמות mutex. מקורות: VirusTotal, AlienVault OTX, MISP, Shodan. סימני פריצה מתיישנים מהר — כתובת IP או דומיין מתחלפים תוך ימים.",
      explanationEn: "IoCs (Indicators of Compromise): IP addresses (C2 servers), file hashes (MD5/SHA256 of malware), domains (phishing/C2), URLs (payload delivery), email subjects/senders, registry keys (persistence), mutex names (malware fingerprints). IoC sources: VirusTotal, AlienVault OTX, MISP, Shodan. IoCs go stale quickly — IPs/domains rotate within days."
    },
    {
      q: "מה MITRE ATT&CK?",
      correct: "מסגרת פתוחה עם 14 טקטיקות ומאות טכניקות של קבוצות תקיפה — ממפה שיטות תקיפה ומקשרת להגנות",
      choices: [
        "מסגרת פתוחה עם 14 טקטיקות ומאות טכניקות של קבוצות תקיפה — ממפה שיטות תקיפה ומקשרת להגנות",
        "תקן הצפנה לנתוני מודיעין איומים",
        "חברת אבטחה שמזהה חתימות נוזקה",
        "פרוטוקול לשיתוף סימני פריצה בין ארגונים"
      ],
      explanation: "המסגרת כוללת 14 טקטיקות (מה מנסה התוקף): סיור, גישה ראשונית, הרצה, עמידות, הסלמת הרשאות, התחמקות, גניבת הרשאות, גילוי, תנועה רוחבית, איסוף, שליטה ובקרה (C2), חילוץ נתונים, ופגיעה. כל טקטיקה כוללת טכניקות ותת-טכניקות. ‏Navigator מציג ויזואליזציה של כיסוי.",
      explanationEn: "MITRE ATT&CK has 14 Tactics (what the attacker is trying to do): Reconnaissance, Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, Command & Control, Exfiltration, Impact. Each Tactic contains Techniques (T1566 = Phishing) and Sub-techniques. Navigator provides coverage visualization. Purple teaming: Red team attacks, Blue team detects."
    },
    {
      q: "מה ההבדל בין סיור פסיבי (Passive) לאקטיבי (Active) ב-OSINT?",
      correct: "סיור פסיבי: מקורות ציבוריים בלי לגעת ביעד (Shodan, WHOIS). סיור אקטיבי: שליחת בקשות ישירות ליעד (nmap) — ניתן לגילוי",
      choices: [
        "סיור פסיבי: מקורות ציבוריים בלי לגעת ביעד (Shodan, WHOIS). סיור אקטיבי: שליחת בקשות ישירות ליעד (nmap) — ניתן לגילוי",
        "פסיבי = ניטור ב-SOC, אקטיבי = צוות אדום",
        "פסיבי = איטי, אקטיבי = מהיר",
        "פסיבי = ללא כלים, אקטיבי = עם כלי אוטומציה"
      ],
      explanation: "סיור פסיבי: Shodan (סריקה שנעשתה על ידי צד שלישי), WHOIS, Google Dorks, LinkedIn — היעד לא רואה תעבורה. סיור אקטיבי: nmap, סריקת פינג, סריקת תיקיות — נרשם בלוגים של היעד. בעולם האמיתי: הגדרת ה-scope קובעת מה מותר. ב-Bug Bounty: בדרך כלל פסיבי בלבד בהתחלה.",
      explanationEn: "Passive Recon: Shodan (scans done by a third party), WHOIS, Google Dorks, LinkedIn, theHarvester — the target sees no traffic from you. Active Recon: nmap, ping sweep, directory busting — gets logged by the target. In practice: pentest scope defines what is allowed. Bug Bounty: typically passive-only for initial reconnaissance."
    },
    {
      q: "מה Shodan ואיזה מידע ניתן למצוא בו?",
      correct: "מנוע חיפוש למכשירים המחוברים לאינטרנט — מציג פורטים פתוחים, באנרים, תעודות ושירותים פגיעים",
      choices: [
        "מנוע חיפוש למכשירים המחוברים לאינטרנט — מציג פורטים פתוחים, באנרים, תעודות ושירותים פגיעים",
        "מנוע חיפוש לתוספים זדוניים במחשב",
        "כלי לניתוח נוזקה של חברת Shodan",
        "שרת DNS שמפרסם מודיעין איומים"
      ],
      explanation: "‏Shodan סורק את כל כתובות IPv4 ושומר באנרים. חיפוש לפי hostname, פורט, מוצר, מדינה או פגיעות ספציפית. למשל: מציאת שרתי Redis חשופים (לרוב ללא אימות), או מכשירים פגיעים לפגם מסוים. ‏Censys דומה ל-Shodan, ו-Zoomeye הוא הגרסה הסינית.",
      explanationEn: "Shodan scans all of IPv4 and stores banners. Search examples: hostname:example.com port:22 finds exposed SSH. product:Redis finds Redis instances (often without authentication). country:IL vuln:CVE-2017-0144 finds EternalBlue-vulnerable systems. org:'Company Name' finds all their assets. Censys is similar to Shodan. ZoomEye is the Chinese equivalent."
    }
  ],

  114: [
    {
      q: "מה 6 שלבי תגובה לאירוע (Incident Response) לפי NIST?",
      correct: "‏Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned",
      choices: [
        "‏Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned",
        "‏Detection → Analysis → Mitigation → Reporting → Recovery → Review",
        "‏Alert → Triage → Isolate → Fix → Monitor → Close",
        "‏Discovery → Escalation → Response → Patch → Test → Deploy"
      ],
      explanation: "מחזור חיי תגובה לאירוע (NIST SP 800-61): 1) הכנה — נהלים, כלים, הדרכות. 2) זיהוי — התרעה ממערכת SOC/EDR או דיווח משתמש. 3) בלימה — בידוד מיידי + טלאי ארוך טווח. 4) חיסול — הסרת נוזקה, איפוס הרשאות. 5) שחזור — החזרת שירותים עם ניטור מוגבר. 6) לקחים — סקירה תוך שבועיים.",
      explanationEn: "IR Lifecycle (NIST SP 800-61): 1) Preparation: runbooks, tools, training. 2) Identification: alert from SOC, EDR, or user report. 3) Containment: short-term (isolate) + long-term (patch). 4) Eradication: remove malware, reset credentials. 5) Recovery: restore services, enhanced monitoring. 6) Lessons Learned: post-mortem within two weeks."
    },
    {
      q: "מה התקפת שרשרת אספקה (Supply Chain Attack)? תן דוגמה ידועה.",
      correct: "תקיפה דרך ספק או תוכנה מהימנה שהארגון משתמש בה. SolarWinds: דלת אחורית בעדכון Orion שהתפשטה ל-18,000 לקוחות",
      choices: [
        "תקיפה דרך ספק או תוכנה מהימנה שהארגון משתמש בה. SolarWinds: דלת אחורית בעדכון Orion שהתפשטה ל-18,000 לקוחות",
        "תקיפה על שרשרת לוגיסטיקה פיזית",
        "תקיפת הזרקת SQL על מערכת ניהול שרשרת אספקה",
        "תקיפה על עובדי חברה דרך אימייל פישינג"
      ],
      explanation: "דוגמאות להתקפות שרשרת אספקה: 1) SolarWinds SUNBURST 2020 — דלת אחורית ב-DLL שהגיעה ל-18,000 לקוחות. 2) XZ Utils 2024 — דלת אחורית בספריית דחיסה. 3) חבילות npm זדוניות. 4) פריצת Codecov דרך סקריפט CI/CD. הגנה: רשימת רכיבים (SBOM), חתימת קוד, בניה מבודדת, סריקת תלויות.",
      explanationEn: "Supply Chain Attack examples: 1) SolarWinds SUNBURST 2020 — a backdoor in a DLL spread to 18,000 customers. 2) XZ Utils 2024 — backdoor in a compression library. 3) npm malicious packages. 4) Codecov breach — CI/CD script was compromised. Defense: SBOM (Software Bill of Materials), code signing, isolated build processes, dependency scanning (Snyk, Dependabot)."
    },
    {
      q: "מה Volatility ולמה משתמשים בו בתגובה לאירועים?",
      correct: "כלי לניתוח תמונות זיכרון (memory dumps) — מזהה תהליכים, חיבורי רשת ונוזקה מוסתרת בזיכרון",
      choices: [
        "כלי לניתוח תמונות זיכרון (memory dumps) — מזהה תהליכים, חיבורי רשת ונוזקה מוסתרת בזיכרון",
        "כלי לניהול אחסון נדיף בענן",
        "מערכת SIEM לניתוח לוגים בזמן אמת",
        "כלי לסימולציה של התקפות APT"
      ],
      explanation: "נוזקה שרצה בזיכרון בלבד (fileless) לא כותבת לדיסק — Volatility מגלה אותה. פקודות מועילות: pslist (תהליכים), netscan (חיבורים), malfind (הזרקת DLL), cmdline (פרמטרים של תהליכים), hashdump (סיסמאות Windows). כלי לכידת זיכרון: WinPMem, Magnet RAM Capture, VMware snapshot.",
      explanationEn: "Memory forensics: malware that runs only in RAM (fileless malware) never writes to disk — only memory analysis tools like Volatility can detect it. Useful commands: pslist (processes), netscan (connections), malfind (DLL injection, hollowing), cmdline (process arguments), hashdump (Windows password hashes). Memory capture tools: WinPMem, Magnet RAM Capture, VMware snapshots."
    },
    {
      q: "מה תנועה רוחבית (Lateral Movement) בתגובה לאירועים?",
      correct: "מעבר התוקף בין מכשירים ברשת לאחר גישה ראשונית — באמצעות RDP, SMB, SSH, או Pass-the-Hash",
      choices: [
        "מעבר התוקף בין מכשירים ברשת לאחר גישה ראשונית — באמצעות RDP, SMB, SSH, או Pass-the-Hash",
        "העברת נתונים מהרשת לשרת חיצוני",
        "עלייה בהרשאות ממשתמש רגיל למנהל",
        "שינוי כיוון תנועת תעבורה ברשת"
      ],
      explanation: "טכניקות תנועה רוחבית: Pass-the-Hash — שימוש ב-hash של NTLM ישירות ללא סיסמה. Pass-the-Ticket — כרטיס Kerberos גנוב. ‏RDP לגישת GUI בפורט 3389. ‏SMB עם כלים כמו psexec ו-wmiexec. בלימה: פילוח רשת, מחיקת sessions, ואיפוס אמון ב-Active Directory.",
      explanationEn: "Lateral Movement Techniques (MITRE ATT&CK T1550+): Pass-the-Hash (PtH) uses an NTLM hash directly without the password. Pass-the-Ticket uses a stolen Kerberos ticket. RDP: port 3389 for GUI access. SMB: psexec, wmiexec. SSH key propagation. Containment: network segmentation, session termination, resetting Active Directory trusts."
    }
  ],

  115: [
    {
      q: "מה ההבדל בין ניתוח נוזקה סטטי (Static) לדינמי (Dynamic)?",
      correct: "סטטי: בוחנים קובץ ללא הרצה (מחרוזות, ייבואים). דינמי: מריצים בסביבה מבודדת (sandbox) ובוחנים התנהגות",
      choices: [
        "סטטי: בוחנים קובץ ללא הרצה (מחרוזות, ייבואים). דינמי: מריצים בסביבה מבודדת (sandbox) ובוחנים התנהגות",
        "סטטי = ניתוח בזמן אמת, דינמי = ניתוח לאחר פריצה",
        "סטטי = במכונה וירטואלית, דינמי = על חומרה פיזית",
        "סטטי = כלי Linux, דינמי = כלי Windows"
      ],
      explanation: "ניתוח סטטי: כלים כמו strings, PEStudio, Ghidra. מגלה מחרוזות קריאות (כתובות URL, IP), ספריות מיובאות, חריגות בכותרת PE. מוגבל על ידי ערפול (obfuscation). ניתוח דינמי: Cuckoo Sandbox, Process Monitor, Wireshark. מגלה שינויי registry, קבצים שנוצרו, חיבורי C2, הזרקת תהליכים. שילוב שניהם = ניתוח מלא.",
      explanationEn: "Static analysis: tools like strings, PEStudio, Ghidra. Reveals: readable strings (URLs, IPs), imported DLLs, PE header anomalies. Limited by obfuscation/packing. Dynamic analysis: Cuckoo Sandbox, Process Monitor, Wireshark. Reveals: registry changes, file drops, C2 connections, process injection. Combining both provides full analysis."
    },
    {
      q: "מה Ransomware ואיך מתגוננים?",
      correct: "נוזקה שמצפינה קבצים ודורשת כופר. הגנה: גיבויים מנותקים, עדכוני אבטחה, סינון אימייל, פילוח רשת",
      choices: [
        "נוזקה שמצפינה קבצים ודורשת כופר. הגנה: גיבויים מנותקים, עדכוני אבטחה, סינון אימייל, פילוח רשת",
        "נוזקה שגונבת נתונים ומוכרת לדארקנט",
        "כלי לגיטימי להצפנת קבצים לאבטחה",
        "וירוס שמשתמש במעבד לכריית מטבעות"
      ],
      explanation: "שרשרת ההתקפה של כופרה: פישינג, גישה ראשונית, הסלמת הרשאות, תנועה רוחבית, חילוץ נתונים, הצפנה. כופרה כשירות (RaaS): LockBit, BlackCat. הגנה: כלל 3-2-1 (3 עותקים, 2 סוגי מדיה, 1 מנותק), גיבויים בלתי-ניתנים לשינוי, מערכת EDR, וסינון באימייל.",
      explanationEn: "Ransomware kill chain: Phishing > Initial Access > Privilege Escalation > Lateral Movement > Data Exfiltration > Encryption. RaaS (Ransomware-as-a-Service): LockBit, BlackCat. Defense: 3-2-1 backup rule (3 copies, 2 media types, 1 offsite/offline), immutable backups (Veeam, Azure Immutable), Endpoint Detection & Response (EDR), and email gateway filtering."
    },
    {
      q: "מהם מנגנוני עמידות (Persistence) נפוצים ב-Windows?",
      correct: "מפתחות Run ב-Registry, משימות מתוזמנות, שירותים, תיקיית Startup, חטיפת DLL — נוזקה שרצה אחרי אתחול",
      choices: [
        "מפתחות Run ב-Registry, משימות מתוזמנות, שירותים, תיקיית Startup, חטיפת DLL — נוזקה שרצה אחרי אתחול",
        "‏WMI Events, DCOM ו-BITS Jobs בלבד",
        "רק crontab ו-systemd (של Linux)",
        "תוספי דפדפן בלבד"
      ],
      explanation: "מנגנוני עמידות ב-Windows: 1) מפתחות Run ב-Registry. 2) משימות מתוזמנות (schtasks). 3) שירותים (sc create). 4) חטיפת DLL — ספרייה זדונית בנתיב לפני הלגיטימית. 5) מנויי WMI. 6) ברמת האתחול: bootkit. הכלי AutoRuns (Sysinternals) מציג את כל מנגנוני העמידות. כל רשומת startup צריכה אימות ידני.",
      explanationEn: "Windows Persistence mechanisms: 1) Registry Run Keys (HKCU/HKLM\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run). 2) Scheduled Tasks: schtasks /create. 3) Services: sc create. 4) DLL Hijacking: placing a malicious DLL in the path before the legitimate one. 5) WMI subscriptions. 6) Boot/Pre-OS: bootkit. For IR: AutoRuns (Sysinternals) displays all persistence mechanisms."
    },
    {
      q: "מה C2 (שליטה ובקרה) בנוזקה?",
      correct: "תשתית תקשורת בין הנוזקה לתוקף — מאפשרת שליחת פקודות, גניבת נתונים ועדכוני נוזקה",
      choices: [
        "תשתית תקשורת בין הנוזקה לתוקף — מאפשרת שליחת פקודות, גניבת נתונים ועדכוני נוזקה",
        "שליטה ובקרה = ניהול מנהל מערכת",
        "תוכנה לשליטה בתהליכי CI/CD",
        "חומת אש שמנתבת חבילות"
      ],
      explanation: "ערוצי C2 נפוצים: HTTP/HTTPS (מתחזה לתעבורת רשת רגילה), DNS (ערוץ חשאי בשאילתות DNS), ICMP, רשתות חברתיות. זיהוי: מרווחי beacon חשודים (הנוזקה מתקשרת בקביעות), דומיינים נדירים, אלגוריתם DGA (הנוזקה מייצרת שמות דומיין אקראיים). כלי C2 ידועים: Cobalt Strike, Covenant, Brute Ratel.",
      explanationEn: "C2 (Command and Control) channels: HTTP/HTTPS (camouflaged as web traffic), DNS (covert channel in DNS queries), ICMP, Twitter/Slack (social media C2). Detection: suspicious beacon intervals (malware phones home every X seconds), rare domains, DNS DGA (Domain Generation Algorithm — malware generates random domain names). Tools: Cobalt Strike, Covenant, Brute Ratel."
    },
    {
      q: "מה נוזקה ללא קבצים (fileless malware) ולמה קשה לאתר אותה?",
      correct: "נוזקה שרצה רק בזיכרון ולא כותבת לדיסק — אנטי-וירוס שסורק קבצים לא מוצא אותה, רק חקירת זיכרון מגלה",
      choices: [
        "נוזקה שרצה רק בזיכרון ולא כותבת לדיסק — אנטי-וירוס שסורק קבצים לא מוצא אותה, רק חקירת זיכרון מגלה",
        "נוזקה שמוחקת את עצמה אחרי ריצה",
        "נוזקה שמסתירה את הסיומת של הקובץ שלה",
        "נוזקה שפועלת בהרשאות נמוכות ללא מנהל"
      ],
      explanation: "טכניקות: PowerShell (טעינת קוד רפלקטיבית), WMI, החלפת תהליך (Process Hollowing), הזרקת DLL. דוגמה: PowerShell מריץ payload מקודד ישירות בזיכרון. זיהוי: מערכת EDR בודקת התנהגות ולא רק קבצים. ‏AMSI סורק סקריפטים של PowerShell. חקירת זיכרון עם Volatility מגלה קוד מוזרק.",
      explanationEn: "Fileless malware techniques: PowerShell (reflective loading), WMI, Process Hollowing (replacing a legitimate process with malware), DLL Injection. Example: PowerShell -EncodedCommand <base64> executes a payload directly in RAM. Detection: EDR checks behavior, not just files. AMSI (Antimalware Scan Interface) scans PowerShell scripts. Memory forensics (Volatility) discovers injected code."
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
