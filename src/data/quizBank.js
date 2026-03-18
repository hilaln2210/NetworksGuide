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
      q: "מה ההבדל בין Switch לבין Hub?",
      correct: "‏Switch שולח frame ליעד הספציפי לפי MAC, Hub מפיץ לכולם",
      choices: [
        "‏Switch שולח frame ליעד הספציפי לפי MAC, Hub מפיץ לכולם",
        "‏Switch עובד בשכבת הרשת, Hub בשכבת הקו",
        "‏Switch אלחוטי, Hub קווי",
        "‏Switch מהיר יותר רק כי יקר יותר"
      ],
      explanation: "‏Hub = צועק לכולם בחדר. ‏Switch = שולח מכתב ספציפי לאדם הנכון. ב-2024 אין כמעט Hub — הוא הרג את הביצועים 🎯"
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
      explanation: "‏MAC = Media Access Control. נראית כך: AA:BB:CC:DD:EE:FF. שרופה ב-hardware, אבל ניתן לזייף (MAC spoofing)! אבא+אמא של הכתובות 🖥️"
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
      explanation: "‏ARP = Address Resolution Protocol. שואל: 'מי בעל IP 192.168.1.5?' — כולם שומעים, הנכון עונה עם ה-MAC שלו. ‏ARP cache שומר את הטבלה 📋"
    },
    {
      q: "מה MAC address ומה שונה אותו מ-IP?",
      correct: "‏MAC = Layer 2, מזהה hardware ייחודי של NIC (48 bit). IP = Layer 3, כתובת לוגית שמשתנה לפי רשת",
      choices: [
        "‏MAC = Layer 2, מזהה hardware ייחודי של NIC (48 bit). IP = Layer 3, כתובת לוגית שמשתנה לפי רשת",
        "‏MAC ו-IP זהים — רק פורמט שונה",
        "‏MAC משתנה בכל חיבור, IP קבוע",
        "‏MAC = IPv6, IP = IPv4"
      ],
      explanation: "‏MAC (Media Access Control): 48 bits, XX:XX:XX:XX:XX:XX. ‏24 bits = OUI (Organizationally Unique Identifier) של יצרן (Intel, Cisco). ‏24 bits = מספר סידורי. ‏MAC spoofing: ניתן לשנות בתוכנה. ‏ARP: ממפה IP → MAC. ‏Broadcast MAC: FF:FF:FF:FF:FF:FF. ‏IP אדרסינג = logical ‎(משתנה לפי רשת)‎, MAC = physical ‎(קבוע ב-hardware)‎."
    },
    {
      q: "מה Ethernet Frame structure?",
      correct: "‏Preamble | Dest MAC | Src MAC | EtherType | Payload (46-1500 bytes) | FCS",
      choices: [
        "‏Preamble | Dest MAC | Src MAC | EtherType | Payload (46-1500 bytes) | FCS",
        "‏Header | Data | Checksum בלבד",
        "‏Src IP | Dst IP | Src Port | Dst Port | Data",
        "‏Start | MAC | IP | TCP | Data | End"
      ],
      explanation: "‏Ethernet II Frame: Preamble (8B) לסנכרון, Dest MAC (6B), Src MAC (6B), EtherType (2B) — 0x0800=IPv4, 0x0806=ARP, 0x86DD=IPv6, Payload (46-1500 bytes), FCS (4B) CRC checksum. ‏MTU=1500 bytes payload. ‏Jumbo frames=9000 bytes (datacenter). ‏VLAN tag (802.1Q) = 4 bytes נוספים."
    },
    {
      q: "מה ה-Broadcast Domain ומה Collision Domain?",
      correct: "‏Broadcast Domain: כל מי שמקבל ARP request / broadcast. Switch לא מפריד. Router כן. Collision Domain: כל מי שיכול להתנגש — Switch מפריד לפי port",
      choices: [
        "‏Broadcast Domain: כל מי שמקבל ARP request / broadcast. Switch לא מפריד. Router כן. Collision Domain: כל מי שיכול להתנגש — Switch מפריד לפי port",
        "שניהם זהים",
        "‏Hub מפריד broadcast, Switch לא",
        "‏Router לא מפריד broadcast domains"
      ],
      explanation: "‏Collision Domain: HUB = domain אחד. ‏Switch = כל port = domain נפרד (Full Duplex). ‏Broadcast Domain: Switch = domain אחד ‎(כל הפורטים)‎. ‏Router = מפריד. ‏VLAN = מפריד ב-software. רשת גדולה ללא VLANs = broadcast storm. טיפ: 1000 מכשירים בbroadcast domain אחד = CPU high מ-ARP floods."
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
      explanation: "‏DHCP = שרת ה-'יצירת חשבון אוטומטית'. כשאת מתחברת ל-WiFi — DHCP מקצה לך IP, mask, gateway ו-DNS. אחרת היית צריכה להגדיר ידנית! 🎰"
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
      explanation: "255.255.255.0 = 24 ביטים לרשת, 8 ביטים למארח. /24 = 256 כתובות ‎(254 שמישות)‎. ‏CIDR: 192.168.1.0/24. ציר ה-IP! 🎭"
    },
    {
      q: "מה Gratuitous ARP ולמה הוא גם שימושי וגם מסוכן?",
      correct: "‏ARP reply שנשלח ללא בקשה — שימושי לעדכון cache אחרי failover, מסוכן כי תוקף יכול לשלוח ולהרעיל ARP tables",
      choices: [
        "‏ARP reply שנשלח ללא בקשה — שימושי לעדכון cache אחרי failover, מסוכן כי תוקף יכול לשלוח ולהרעיל ARP tables",
        "‏ARP ל-IP שאינו קיים ברשת",
        "‏ARP request לבדיקת זמינות",
        "‏ARP עם TTL גבוה במיוחד"
      ],
      explanation: "‏Gratuitous ARP: device שולח ARP reply עם ה-IP שלו עצמו, ללא שנשאלה שאלה. שימוש לגיטימי: HSRP/VRRP failover ‎(gateway חדש מכריז על עצמו)‎, IP conflict detection, עדכון switches. שימוש זדוני: ARP Poisoning — שולח GARP עם IP של gateway אבל MAC של תוקף. ‏DAI (Dynamic ARP Inspection) ב-switches מונע זאת."
    },
    {
      q: "מה ההבדל בין ARP ל-RARP?",
      correct: "‏ARP: IP → MAC ‎(המשמש כיום)‎. RARP ‎(מיושן)‎: MAC → IP — לפני DHCP, diskless stations ביקשו IP לפי MAC שלהם",
      choices: [
        "‏ARP: IP → MAC ‎(המשמש כיום)‎. RARP ‎(מיושן)‎: MAC → IP — לפני DHCP, diskless stations ביקשו IP לפי MAC שלהם",
        "‏ARP ל-IPv4, RARP ל-IPv6",
        "‏RARP = Reverse ARP = ARP להפסקת connection",
        "אין הבדל — RARP הוא שם ישן ל-ARP"
      ],
      explanation: "‏ARP (RFC 826, 1982): Who has IP X? Tell me your MAC. ‏RARP (RFC 903, 1984): I'm MAC X, what's my IP? מיושן — הוחלף ע\\\"י BOOTP ואחר כך DHCP. ‏IPv6 משתמש ב-NDP (Neighbor Discovery Protocol) במקום ARP — multicast, לא broadcast, ושולב עם ICMPv6."
    },
    {
      q: "כמה זמן ARP cache נשמר ו-מה קורה כשהוא מתרענן?",
      correct: "‏Linux: 60 שניות idle, 20 שניות stale לאחר מכן re-resolve. Windows: 15-45 שניות. TTL קצר = overhead, ארוך = פגיעות לshifting IPs",
      choices: [
        "‏Linux: 60 שניות idle, 20 שניות stale לאחר מכן re-resolve. Windows: 15-45 שניות. TTL קצר = overhead, ארוך = פגיעות לshifting IPs",
        "‏ARP cache לעולם לא מתרענן — נמחק רק ב-reboot",
        "כל הרשומות נמחקות כל 5 שניות",
        "‏ARP cache = 24 שעות כמו DNS TTL"
      ],
      explanation: "‏Linux: ip neigh show לצפייה. ip neigh flush all למחיקה. ‏State: REACHABLE (verified), STALE ‎(לא verified)‎, DELAY ‎(בדיקה)‎, PROBE ‎(שולח ARP)‎, FAILED. ‏ARP poisoning עובד כי cache מתקבל ממי שמגיב ראשון. arp -n (Linux/Mac), arp -a (Windows)."
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
      q: "מה קורה כשמחשב שולח HTTP request?",
      correct: "כל שכבה מוסיפה header, נשלח כ-bits, הצד השני מסיר headers שכבה-שכבה",
      choices: [
        "כל שכבה מוסיפה header, נשלח כ-bits, הצד השני מסיר headers שכבה-שכבה",
        "הבקשה נשלחת כטקסט ישירות ללא עיבוד",
        "רק שכבות הרשת והתעבורה מעבדות את הבקשה",
        "ה-header נשלח קודם ואז הנתונים בנפרד"
      ],
      explanation: "הדרך המלאה: App ▸ HTTP ▸ Transport (TCP) ▸ Network (IP) ▸ Link (MAC) ▸ Physical ▸ סיביות ברשת! כל שכבה 'אחראית על עצמה' 🎂"
    },
    {
      q: "מה NAT ואיזו בעיה הוא פתר בשנות ה-90?",
      correct: "‏Network Address Translation — מאפשר לרשתות פנימיות עם IPs פרטיים לצאת לאינטרנט עם IP ציבורי אחד. פתר מחסור ב-IPv4",
      choices: [
        "‏Network Address Translation — מאפשר לרשתות פנימיות עם IPs פרטיים לצאת לאינטרנט עם IP ציבורי אחד. פתר מחסור ב-IPv4",
        "‏NAT = הצפנת תעבורת הרשת",
        "‏NAT מאיץ את התקשורת על ידי caching",
        "‏NAT = פרוטוקול לניתוב BGP"
      ],
      explanation: "‏IPv4: 4.3 מיליארד כתובות. כבר ב-1990 ברור שלא יספיקו. ‏NAT (RFC 3022): Private ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. ה-router שומר NAT table: internal IP:port ↔ external IP:port. ‏PAT (Port Address Translation) = עשרות אלפי connections דרך IP אחד. ‏IPv6 אמור לבטל צורך ב-NAT ‎(אבל NAT עדיין קיים בארגונים)‎."
    },
    {
      q: "מה ההבדל בין Static NAT לבין Dynamic NAT לבין PAT?",
      correct: "‏Static: IP פנימי קבוע → IP ציבורי קבוע (1:1). Dynamic: pool של IPs ציבוריים. PAT (Masquerade): כל הclients → IP ציבורי אחד + ports שונים",
      choices: [
        "‏Static: IP פנימי קבוע → IP ציבורי קבוע (1:1). Dynamic: pool של IPs ציבוריים. PAT (Masquerade): כל הclients → IP ציבורי אחד + ports שונים",
        "כולם זהים",
        "‏Static = IPv6, Dynamic = IPv4",
        "‏PAT = הסוג הכי ישן"
      ],
      explanation: "‏Static NAT: שרת פנימי שצריך להיות נגיש מחוץ (1:1 mapping). ‏Dynamic NAT: pool של IPs ציבוריים. ‏PAT/Overload ‎(הנפוץ ביותר)‎: 192.168.1.5:1234 → 203.0.113.1:54321. ‏NAT table entry: 5 טיפלות (src_ip, src_port, dst_ip, dst_port, protocol). iptables: MASQUERADE = dynamic PAT."
    },
    {
      q: "למה NAT שובר end-to-end connectivity ומה הפתרונות?",
      correct: "מחשב מאחורי NAT לא ניתן לחיבור ישיר מבחוץ — פתרונות: UPnP, STUN (WebRTC), Port Forwarding, IPv6, VPN",
      choices: [
        "מחשב מאחורי NAT לא ניתן לחיבור ישיר מבחוץ — פתרונות: UPnP, STUN (WebRTC), Port Forwarding, IPv6, VPN",
        "‏NAT לא שובר connectivity — הכל שקוף",
        "הפתרון היחיד הוא IPv6",
        "‏Port Forwarding לא עובד עם NAT"
      ],
      explanation: "‏NAT traversal: STUN (Session Traversal Utilities for NAT) — WebRTC, VoIP. ‏ICE (Interactive Connectivity Establishment) = STUN + TURN. ‏TURN = relay server כשSTUN נכשל. ‏UPnP: device ביקשת port forwarding אוטומטי. ‏BitTorrent/P2P: hole punching. ‏Port Forwarding: external port → internal IP:port (SSH, gaming servers)."
    },
    {
      q: "מה כתובות IP פרטיות ולמה לא ניתן לנתב אותן באינטרנט?",
      correct: "‏RFC 1918: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 — routers ב-Internet פשוט זורקים packets לכתובות אלה",
      choices: [
        "‏RFC 1918: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 — routers ב-Internet פשוט זורקים packets לכתובות אלה",
        "כתובות פרטיות מוצפנות אוטומטית",
        "ניתן לנתב אותן — רק ISP לא מאפשר",
        "רק 192.168.x.x הן פרטיות"
      ],
      explanation: "‏RFC 1918 private ranges: 10.0.0.0/8 (16M addresses), 172.16.0.0/12 (1M), 192.168.0.0/16 (64K). ‏ISPs מגדירים bogon filters — חוסמים routing לכתובות אלה. ‏IANA גם הקצתה: 127.0.0.0/8 (loopback), 169.254.0.0/16 (link-local), 100.64.0.0/10 (Carrier-Grade NAT — ISPs)"
    }
  ],

  12: [
    {
      q: "מה זה non-blocking socket?",
      correct: "‏socket שלא 'מקפיא' את התוכנית בזמן המתנה לנתונים",
      choices: [
        "‏socket שלא 'מקפיא' את התוכנית בזמן המתנה לנתונים",
        "‏socket מוצפן שחוסם כניסות לא מורשות",
        "‏socket לתקשורת חד-כיוונית בלבד",
        "‏socket שמסנן חבילות לא תקינות"
      ],
      explanation: "‏Blocking = 'אני מחכה ולא עושה כלום'. ‏Non-blocking = 'בדקתי, אין עדיין? בסדר, אעשה דברים אחרים'. שרת שמטפל בהרבה לקוחות = חייב non-blocking 🔄"
    },
    {
      q: "מה VLAN ואיך הוא מפריד תעבורה בסוויץ' פיזי אחד?",
      correct: "‏Virtual LAN — מפריד broadcast domains ב-software. תעבורה בין VLANs דורשת routing (Layer 3)",
      choices: [
        "‏Virtual LAN — מפריד broadcast domains ב-software. תעבורה בין VLANs דורשת routing (Layer 3)",
        "‏VLAN = חיבור בין switchים שונים",
        "‏VLAN = הצפנת תעבורה בתוך switch",
        "‏VLAN = VLAN Access Layer Network"
      ],
      explanation: "802.1Q VLAN tagging: מוסיף 4 bytes לEthernet frame: TPID (0x8100) + PCP (priority) + VLAN ID (12 bits = 4094 VLANs). ‏Access port: port שמשתמש רואה, untag. ‏Trunk port: בין switchים, מוביל מספר VLANs עם tags. ‏Native VLAN = VLAN default ב-trunk port ‎(ללא tag)‎. ‏Inter-VLAN routing: router-on-a-stick (sub-interfaces) או Layer 3 switch."
    },
    {
      q: "מה Trunk Port לעומת Access Port ב-VLANs?",
      correct: "‏Access Port: מכשיר קצה, VLAN אחד, ללא tag. Trunk Port: בין switchים/router, מרובה VLANs, עם 802.1Q tag",
      choices: [
        "‏Access Port: מכשיר קצה, VLAN אחד, ללא tag. Trunk Port: בין switchים/router, מרובה VLANs, עם 802.1Q tag",
        "‏Trunk = מהיר יותר מ-Access",
        "‏Access Port = IPv6, Trunk = IPv4",
        "‏Trunk = encrypted, Access = unencrypted"
      ],
      explanation: "‏Access: PC/printer/server מחוברים. ‏Switch tag-ים frames פנימית עם VLAN ID. ‏Trunk: switch-to-switch, switch-to-router. ‏802.1Q tag: 4 bytes נוספים. ‏DTP (Dynamic Trunking Protocol): Cisco protocol לניהול trunk אוטומטי. ‏VLANs 1 (default), 1002-1005 (reserved). ‏Native VLAN: VLAN שנשלח untagged בtrunk — security risk אם שונה מVLAN 1."
    },
    {
      q: "מה VLAN Hopping attack ואיך מגנים?",
      correct: "‏Switch Spoofing: תוקף מדמה switch → trunk mode → גישה לכל VLANs. Double Tagging: 2 VLAN tags → קופץ ל-VLAN אחר. הגנה: disable DTP, שנה native VLAN ל-unused",
      choices: [
        "‏Switch Spoofing: תוקף מדמה switch → trunk mode → גישה לכל VLANs. Double Tagging: 2 VLAN tags → קופץ ל-VLAN אחר. הגנה: disable DTP, שנה native VLAN ל-unused",
        "‏VLAN Hopping = ניצול IPv6 ב-VLAN",
        "לא ניתן לתקוף VLANs",
        "הגנה: הצפנה בלבד"
      ],
      explanation: "‏Switch Spoofing: מחשב שולח DTP frames → switch פותח trunk → גישה לכל VLANs. ‏Double Tagging: tag ראשוני = native VLAN ‎(מוסר)‎, tag שני = VLAN יעד. ‏Works only for native VLAN. הגנה: (1) switchport mode access ‎(השבתת DTP)‎, (2) native VLAN ≠ כל VLAN משתמש, (3) PVLAN (Private VLAN), (4) port-security."
    },
    {
      q: "מה Private VLAN (PVLAN)?",
      correct: "מחלק VLAN לsub-VLANs: Isolated ‎(לא מדבר עם אף port אחר)‎, Community ‎(מדבר בקבוצה)‎, Promiscuous ‎(מדבר עם כולם = gateway)‎",
      choices: [
        "מחלק VLAN לsub-VLANs: Isolated ‎(לא מדבר עם אף port אחר)‎, Community ‎(מדבר בקבוצה)‎, Promiscuous ‎(מדבר עם כולם = gateway)‎",
        "‏PVLAN = VLAN מוצפן",
        "‏PVLAN = VLAN לניהול בלבד",
        "‏PVLAN = switch private ל-vendor אחד"
      ],
      explanation: "‏PVLAN שימושי ב-hosting: כל לקוח isolated מהשני, כולם עם גישה לgateway. ‏Isolated ports: לא מדברים זה עם זה ‎(אפילו לא ARP)‎. ‏Community: קבוצות שמדברות ביניהן. ‏Promiscuous: router/firewall שמדבר עם כולם. מגביל lateral movement גם אם תוקף פרץ לserver אחד."
    }
  ],

  13: [
    {
      q: "מה ההבדל בין latency ל-bandwidth?",
      correct: "‏Latency = זמן שלוקח לחבילה להגיע, Bandwidth = כמות נתונים לשנייה",
      choices: [
        "‏Latency = זמן שלוקח לחבילה להגיע, Bandwidth = כמות נתונים לשנייה",
        "‏Latency = רוחב הפס, Bandwidth = זמן התגובה",
        "שניהם מדידות של מהירות הרשת",
        "‏Latency לרשת מקומית, Bandwidth לאינטרנט"
      ],
      explanation: "אנלוגיה: צינור מים. ‏Bandwidth = קוטר הצינור ‎(כמה עובר)‎. ‏Latency = כמה זמן לטיפה להגיע. ‏YouTube אוהב Bandwidth, gaming אוהב Latency נמוכה 🎮"
    },
    {
      q: "מה Spanning Tree Protocol ואיזו בעיה הוא פותר?",
      correct: "‏STP מונע Broadcast Storm הנוצר מלולאות פיזיות בין switchים — חוסם פורטים מיותרים ומשאיר עץ ללא לולאות",
      choices: [
        "‏STP מונע Broadcast Storm הנוצר מלולאות פיזיות בין switchים — חוסם פורטים מיותרים ומשאיר עץ ללא לולאות",
        "‏STP מגדיר VLAN routing",
        "‏STP = Secure Transmission Protocol",
        "‏STP מונע ARP attacks"
      ],
      explanation: "‏Broadcast Storm: frame יוצא מswitch A → B → A → B → אינסוף. ‏STP (802.1D): בוחר Root Bridge ‎(הנמוך BID = Bridge Priority + MAC)‎. כל switch בוחר Root Port ‎(הנמוך cost לroot)‎. ‏Blocked ports = לא מעבירים data. ‏Convergence = 30-50 שניות. ‏RSTP (802.1w) = תוך 1-2 שניות. ‏MSTP (802.1s) = STP per-VLAN group."
    },
    {
      q: "מה ה-BPDU ואיך STP בוחר Root Bridge?",
      correct: "‏Bridge Protocol Data Unit — הודעת STP שכוללת BID (priority + MAC). Root Bridge = switch עם BID הנמוך ביותר ‎(priority ראשון, אחר כך MAC)‎",
      choices: [
        "‏Bridge Protocol Data Unit — הודעת STP שכוללת BID (priority + MAC). Root Bridge = switch עם BID הנמוך ביותר ‎(priority ראשון, אחר כך MAC)‎",
        "‏Root Bridge = switch עם MAC הגבוה ביותר",
        "‏BPDU = Broadcast PDU שנשלח לכל VLANs",
        "‏Root Bridge נבחר ע\"י admin בלבד"
      ],
      explanation: "‏BID (Bridge ID): 2 bytes Priority ‎(ברירת מחדל 32768)‎ + 6 bytes MAC. ‏Bridge עם BID הנמוך ביותר = Root Bridge. ניתן לכפות root: spanning-tree vlan 1 priority 0 (Cisco). ‏Root Port: port עם הנמוך Root Path Cost. ‏Designated Port: port שמעביר לroot. ‏Blocked Port: לא מעביר data ‎(רק BPDU)‎. ‏BPDU Guard: מבטל port שמקבל BPDU בפורט של endpoint."
    },
    {
      q: "מה PortFast ו-BPDU Guard ב-STP?",
      correct: "‏PortFast: מקפיץ access port ישירות ל-Forwarding ללא 30 שניות המתנה — לPCs בלבד. BPDU Guard: מבטל port שמקבל BPDU ‎(מגן מswitch לא מורשה)‎",
      choices: [
        "‏PortFast: מקפיץ access port ישירות ל-Forwarding ללא 30 שניות המתנה — לPCs בלבד. BPDU Guard: מבטל port שמקבל BPDU ‎(מגן מswitch לא מורשה)‎",
        "‏PortFast = מאיץ STP convergence בין switchים",
        "‏BPDU Guard = הצפנת BPDU",
        "שניהם פוגעים ב-stability"
      ],
      explanation: "‏STP States: Disabled → Blocking → Listening (15s) → Learning (15s) → Forwarding. ‏PortFast: מדלג ישירות ל-Forwarding. רק לaccess ports לPCs/servers — לא בין switchים! BPDU Guard: אם PortFast port מקבל BPDU = err-disabled. ‏Loop Guard: מבטל port שהפסיק לקבל BPDUs ‎(מגן מone-way failure)‎. ‏Root Guard: מונע אובדן root bridge."
    },
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
      explanation: "‏netstat -an מציגה את כל החיבורים הפתוחים. תוכל לראות שהדפדפן שלך מחובר ל-443 (HTTPS) של גוגל וYouTube. כמו לפתוח חלון למה שקורה ברשת 🕵️"
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
      explanation: "‏nslookup google.com → 142.250.x.x. nslookup 8.8.8.8 → מחפש שם הפוך (PTR record). כלי דיאגנוסטיקה בסיסי לכל מי שעובד עם רשתות 🔍"
    },
    {
      q: "מה ההבדל בין distance-vector לבין link-state routing protocols?",
      correct: "‏Distance-vector (RIP): שולח routing table לשכנים. Link-state (OSPF): שולח topology מלאה, כל router מחשב SPF בעצמו",
      choices: [
        "‏Distance-vector (RIP): שולח routing table לשכנים. Link-state (OSPF): שולח topology מלאה, כל router מחשב SPF בעצמו",
        "אין הבדל — שתיהן RIP",
        "‏OSPF שולח רק שינויים, RIP שולח הכל",
        "‏Link-state = ל-IPv6 בלבד"
      ],
      explanation: "‏RIP: Bellman-Ford. מדד = hop count ‎(מקסימום 15 hops)‎. עדכון כל 30 שניות. בעיה: counting to infinity, slow convergence. ‏OSPF: Dijkstra's SPF. מדד = cost (=100/bandwidth Mbps). ‏LSA flooding. ‏Area hierarchy (backbone area 0). ‏EIGRP (Cisco): hybrid — distance vector עם rapid convergence. ‏BGP: path vector — מדיניות, לא מהירות."
    },
    {
      q: "מה BGP ומה תפקידו באינטרנט?",
      correct: "‏Border Gateway Protocol — ה-routing protocol של האינטרנט. מנהל routing בין Autonomous Systems (AS) — ISPs, חברות גדולות",
      choices: [
        "‏Border Gateway Protocol — ה-routing protocol של האינטרנט. מנהל routing בין Autonomous Systems (AS) — ISPs, חברות גדולות",
        "‏BGP = Border Gateway Port — פרוטוקול לVPN",
        "‏BGP עובד רק בתוך ארגון אחד",
        "‏BGP = הגרסה המתקדמת של OSPF"
      ],
      explanation: "‏BGP (RFC 4271): Path Vector protocol. ‏AS (Autonomous System): ארגון עם ASN (AS Number). ‏IANA מקצה ASNs (16bit: 1-64511, 32bit: 131072+). eBGP: בין ASים שונים. iBGP: בתוך AS. ‏BGP attributes: AS-Path (loop prevention), Next-Hop, Local-Preference, MED, Community. ‏Full Internet routing table: ~900K prefixes IPv4 + 200K IPv6."
    },
    {
      q: "מה OSPF DR/BDR ולמה חשוב?",
      correct: "‏Designated Router/Backup — על multiaccess network (Ethernet), DR מרכז LSA flooding כדי להפחית overhead. DR נבחר לפי Router ID",
      choices: [
        "‏Designated Router/Backup — על multiaccess network (Ethernet), DR מרכז LSA flooding כדי להפחית overhead. DR נבחר לפי Router ID",
        "‏DR = Default Route ב-OSPF",
        "‏DR נבחר רק ב-WAN links",
        "‏BDR = Backup Default Route"
      ],
      explanation: "‏OSPF רגיל: N routers = N×(N-1)/2 adjacencies = O(N²) LSAs. עם DR: כל router adjacency עם DR בלבד = O(N). ‏DR Priority: ניתן להגדיר ‎(ברירת מחדל = 1, 0 = לא eligible)‎. ‏Router ID: IP גבוה ביותר של Loopback. ‏OSPF Areas: Area 0 (backbone) חייב לחבר כל area אחרת. ‏ABR (Area Border Router) = router בין areas."
    },
    {
      q: "מה ECMP ואיך routers מאזנים עומס?",
      correct: "‏Equal Cost Multi-Path: מספר routes בעלות שווה לאותו יעד — router מחלק traffic ביניהם (per-flow hash)",
      choices: [
        "‏Equal Cost Multi-Path: מספר routes בעלות שווה לאותו יעד — router מחלק traffic ביניהם (per-flow hash)",
        "‏ECMP = encrypted BGP",
        "‏Router תמיד בוחר route אחד בלבד",
        "‏ECMP = External Cost Measurement Protocol"
      ],
      explanation: "‏ECMP: Linux מאזן per-flow (hash src+dst IP+port). ‏Cisco per-destination ברירת מחדל. ‏Maximum-paths: OSPF 16 paths, BGP 2-16. מגביל: כל flow הולך לpath אחד (consistency). ‏LACP (Link Aggregation): Layer 2, bundle ports פיזיים. ‏ECMP: Layer 3, routes שונים. ‏LAG/bonding: Linux bond0, EtherChannel (Cisco)."
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
      explanation: "‏TLS משתמש בשתיהן: אסימטרית לחילוף מפתחות (Diffie-Hellman) — איטי אבל לא צריך לשתף סוד מראש. סימטרית (AES-256) לתעבורה — מהיר. הכי טוב משני עולמות! 🔑"
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
      explanation: "‏TLS Handshake = לחיצת יד מוצפנת. ‏Server מציג Certificate, Client מאמת מול CA, שניהם מחשבים session key. כל זה לפני שנשלח ביית אחד של נתונים! 🤝🔒"
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
      explanation: "‏CA = נוטריון של האינטרנט. ‏DigiCert, Let's Encrypt, Comodo — כולן CA. הדפדפן סומך על רשימת CA מוכרת. אם CA חתמה — הדפדפן סומך. ל-Let's Encrypt יש 300M+ certificates חינמיים! 📜"
    },
    {
      q: "מה ה-TLS handshake ואיזה שלבים כולל?",
      correct: "‏ClientHello → ServerHello + Certificate → Client key exchange → Finished ‎(שני הצדדים)‎ — מסתיים עם symmetric key מוסכם",
      choices: [
        "‏ClientHello → ServerHello + Certificate → Client key exchange → Finished ‎(שני הצדדים)‎ — מסתיים עם symmetric key מוסכם",
        "‏TLS = TCP handshake עם הצפנה",
        "השלבים: SYN → SYN-ACK → ACK + certificate",
        "‏TLS handshake = רק חיבור TCP"
      ],
      explanation: "‏TLS 1.2: 2 RTT. ‏ClientHello: cipher suites, random, SNI. ‏ServerHello: chosen cipher, certificate. ‏Server Key Exchange (ECDHE). ‏Client Key Exchange: pre-master secret. ‏Change Cipher Spec. ‏Finished: HMAC אימות. ‏TLS 1.3: 1 RTT ‎(0-RTT אפשרי)‎. ‏Certificate Pinning: app מאמת certificate ספציפי ‎(לא רק CA)‎."
    },
    {
      q: "מה Certificate Authority ואיך browsers סומכים על HTTPS?",
      correct: "‏CA = גוף שמוציא certificates חתומים. Browser כולל 'trust store' עם root CAs. שרשרת אמון: Root CA → Intermediate CA → Server Certificate",
      choices: [
        "‏CA = גוף שמוציא certificates חתומים. Browser כולל 'trust store' עם root CAs. שרשרת אמון: Root CA → Intermediate CA → Server Certificate",
        "‏Browser בודק certificate ב-database מרכזי",
        "כל certificate תקף אוטומטית ב-HTTPS",
        "‏CA = שרת DNS שמאמת certificates"
      ],
      explanation: "‏PKI (Public Key Infrastructure): Root CA ‎(trust anchor, offline, מוגן מאוד)‎, Intermediate CA ‎(online, חותמת certificates)‎, Leaf Certificate (domain). ‏Self-signed: browser מזהיר אבל לא חוסם. ‏Let's Encrypt: CA חינמי, 90-day certificates, ACME protocol לautomation. ‏Certificate Transparency: log ציבורי של certificates. ‏CRL/OCSP: ביטול certificates."
    },
    {
      q: "מה Perfect Forward Secrecy ולמה חשוב?",
      correct: "‏PFS: session key חדש לכל connection (ECDHE). אפילו אם private key נחשף עתידית — sessions עבר לא ניתנים לפענוח",
      choices: [
        "‏PFS: session key חדש לכל connection (ECDHE). אפילו אם private key נחשף עתידית — sessions עבר לא ניתנים לפענוח",
        "‏PFS = הצפנת passwords בbrowser",
        "‏PFS = פרוטוקול לשיתוף keys בין CAs",
        "‏PFS עובד רק ב-TLS 1.3"
      ],
      explanation: "‏Without PFS (RSA key exchange): NSA/attacker שומר encrypted traffic. לאחר שנים: private key נחשף → מפענחים הכל רטרואקטיבית. עם ECDHE: key ephemeral — נוצר רק ל-session ונמחק. ‏TLS 1.3 חייב ECDHE. ‏Cipher suites עם PFS: ECDHE-RSA-AES128-GCM-SHA256. ללא PFS: RSA-AES128-SHA (deprecated)."
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
      q: "כמה ביטים בכתובת IPv6?",
      correct: "128 ביטים — מספיק לכ-340 undecillion כתובות",
      choices: [
        "128 ביטים — מספיק לכ-340 undecillion כתובות",
        "64 ביטים",
        "32 ביטים ‎(כמו IPv4)‎",
        "256 ביטים"
      ],
      explanation: "‏IPv4 = 32 ביטים = ~4 מיליארד כתובות. ‏IPv6 = 128 ביטים = 340 עם 36 אפסים אחריו. לכל אטום על פני כדור הארץ יכולנו לתת כמה מיליארד כתובות. המחסור ב-IPv4 הוא הסיבה ל-IPv6 🌐"
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
      explanation: "::1 = 0000...0001 = localhost ב-IPv6. :: הוא קיצור לקבוצות אפסים רצופות. fe80::/10 = Link-local. ‏2001::/32 = Teredo tunneling. ‏IPv6 יש לו הרבה טווחים מיוחדים 🔁"
    },
    {
      q: "מה ההבדל בין IPv4 ל-IPv6 header?",
      correct: "‏IPv6 header קבוע 40 bytes ‎(פשוט יותר)‎, ללא checksum, ללא fragmentation בrouter, addresses 128 bit",
      choices: [
        "‏IPv6 header קבוע 40 bytes ‎(פשוט יותר)‎, ללא checksum, ללא fragmentation בrouter, addresses 128 bit",
        "‏IPv6 = IPv4 עם addresses גדולים יותר בלבד",
        "‏IPv6 header גדול יותר ומכיל יותר fields",
        "ההבדל רק בגודל address"
      ],
      explanation: "‏IPv4 header: 20-60 bytes, variable. ‏IPv6 header: fixed 40 bytes. הוסר: Header Checksum ‎(כי L2/L4 עושים checksum)‎, Fragmentation fields ‎(router לא מפרגמנט — source עושה PMTUD)‎, IHL ‎(קבוע)‎. הוסף: Flow Label (QoS). ‏Extension headers: כל אחד מוסיף functionality (Hop-by-Hop, Routing, Fragment, Auth). ‏Routers מעבדים header קבוע מהר יותר."
    },
    {
      q: "מה SLAAC ב-IPv6?",
      correct: "‏Stateless Address Autoconfiguration — device יוצר IPv6 address אוטומטית: prefix מ-RA + interface ID מ-EUI-64 ‎(מ-MAC)‎",
      choices: [
        "‏Stateless Address Autoconfiguration — device יוצר IPv6 address אוטומטית: prefix מ-RA + interface ID מ-EUI-64 ‎(מ-MAC)‎",
        "‏SLAAC = DHCPv6 בשם אחר",
        "‏SLAAC = Static address ב-IPv6",
        "‏SLAAC עובד רק ב-enterprise networks"
      ],
      explanation: "‏SLAAC: router שולח RA (Router Advertisement) עם prefix. ‏Device: EUI-64 = MAC 48bit → 64bit ‎(מוסיף FF:FE באמצע + flip bit)‎. אחר כך: prefix + EUI-64 = /128 IPv6. בעיה: privacy — MAC ב-address. ‏Privacy Extensions (RFC 4941): random interface ID שמשתנה. ‏DHCPv6: stateful ‎(כמו DHCPv4)‎, עם/ללא SLAAC. ‏NDP (Neighbor Discovery) = IPv6 equivalent ל-ARP."
    },
    {
      q: "מה כתובות Multicast ב-IPv6 ולמה הן מחליפות broadcast?",
      correct: "‏IPv6 אין broadcast. Multicast: ff00::/8. ff02::1 = all nodes, ff02::2 = all routers, ff02::1:ffXX:XX = Solicited-Node ‎(לNDP)‎",
      choices: [
        "‏IPv6 אין broadcast. Multicast: ff00::/8. ff02::1 = all nodes, ff02::2 = all routers, ff02::1:ffXX:XX = Solicited-Node ‎(לNDP)‎",
        "‏IPv6 משתמש ב-broadcast כמו IPv4",
        "‏Multicast = Anycast ב-IPv6",
        "‏ff00::/8 = private range ב-IPv6"
      ],
      explanation: "‏IPv6 types: Unicast (global 2000::/3, link-local fe80::/10, unique-local fc00::/7), Multicast (ff00::/8), Anycast (same address = multiple hosts). ‏Solicited-Node multicast: ff02::1:ff + last 24 bits of target IP. ‏NDP משתמש בזה במקום ARP broadcast. ‏Link-local fe80:: חייב על כל interface — לא routable, לNDP/RA."
    }
  ],

  19: [
    {
      q: "מה ההבדל בין DNS Recursive Resolver לבין Authoritative Name Server?",
      correct: "‏Recursive = שואל בשמך ומחפש התשובה. Authoritative = יודע את התשובה הסופית",
      choices: [
        "‏Recursive = שואל בשמך ומחפש התשובה. Authoritative = יודע את התשובה הסופית",
        "‏Recursive = מהיר יותר, Authoritative = מאובטח יותר",
        "‏Recursive של ה-ISP, Authoritative של גוגל",
        "אין הבדל — שניהם עושים אותו דבר"
      ],
      explanation: "כשאת שואלת 8.8.8.8 (Google Recursive) על google.com — הוא שואל Root → .com TLD → Google Authoritative. ‏Google Authoritative יודע 'google.com = 142.250.x.x'. ‏Recursive עושה את כל העבודה בשבילך 🔍"
    },
    {
      q: "מה DNS TTL קובע?",
      correct: "כמה זמן ‎(בשניות)‎ DNS cache יכול להשתמש בתשובה לפני שישאל שוב",
      choices: [
        "כמה זמן ‎(בשניות)‎ DNS cache יכול להשתמש בתשובה לפני שישאל שוב",
        "כמה זמן הדומיין רשום ל-registrar",
        "מהירות העברת DNS query",
        "מספר ה-Name Servers לדומיין"
      ],
      explanation: "‏TTL = Time To Live. google.com TTL=300 ‎(5 דקות)‎. אתר קטן יכול לשים TTL=86400 ‎(יום)‎ — פחות queries. לפני שינוי DNS, מומלץ להוריד TTL ל-60s מראש כדי שהשינוי יתפשט מהר 🕐"
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
      explanation: "‏DNS רגיל = ב-plaintext. ‏ISP רואה כל lookup. ‏DoH = DNS query עובר כ-HTTPS לשרת כמו 1.1.1.1 או 8.8.8.8. ‏ISP רואה חיבור ל-1.1.1.1 — לא מה שחיפשת. ‏Firefox ו-Chrome תומכים ב-DoH כברירת מחדל 🔒"
    },
    {
      q: "מה DNS TTL ואיך משפיע על תפוצה של שינויים?",
      correct: "‏TTL = כמה שניות record נשמר ב-cache. TTL נמוך = שינויים מהירים ‎(אבל יותר queries)‎. TTL גבוה = performance אבל שינוי אטי",
      choices: [
        "‏TTL = כמה שניות record נשמר ב-cache. TTL נמוך = שינויים מהירים ‎(אבל יותר queries)‎. TTL גבוה = performance אבל שינוי אטי",
        "‏TTL = כמה DNS servers זוכרים את הrecord",
        "‏TTL רק ל-MX records",
        "‏TTL קבוע = 24 שעות לכולם"
      ],
      explanation: "‏Before migration: הפחת TTL ל-300s (5 min) 24-48 שעות מראש. ‏Migration: שנה IP. ‏Old TTL: עד 24 שעות cache נשמר. עם TTL=300: 5 דקות. ‏After: החזר TTL ל-3600+ לperformance. ‏DNS record types: A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail), TXT (SPF/DKIM/verification), NS (nameserver), SOA (authority), PTR (reverse), SRV (services)."
    },
    {
      q: "מה ההבדל בין Authoritative DNS לבין Recursive Resolver?",
      correct: "‏Authoritative: המקור הסמכותי לdomain (ns1.google.com). Recursive: עושה את כל הpipeline בשביל client (8.8.8.8)",
      choices: [
        "‏Authoritative: המקור הסמכותי לdomain (ns1.google.com). Recursive: עושה את כל הpipeline בשביל client (8.8.8.8)",
        "שניהם זהים",
        "‏Authoritative = DNS פרטי, Recursive = ציבורי",
        "‏Recursive = Root DNS server"
      ],
      explanation: "‏Recursive Resolver (8.8.8.8, 1.1.1.1): שואל Root → TLD → Authoritative ומחזיר ל-client. מחזיק cache. ‏Authoritative NS (Route 53, Cloudflare DNS): מחזיק zone file עם כל records. ‏Root servers: 13 logical (a-m.root-servers.net) = Anycast = מאות servers. ‏TLD: .com (Verisign), .il (ISOC-IL). ‏Delegation: NS records ב-parent zone מפנים לchild authoritative."
    },
    {
      q: "מה DNS Cache Poisoning ואיך DNSSEC מגן?",
      correct: "‏Poisoning: תוקף שולח DNS responses מזויפים לcache resolver לפני תגובה אמיתית. DNSSEC: חתימות קריפטוגרפיות על records",
      choices: [
        "‏Poisoning: תוקף שולח DNS responses מזויפים לcache resolver לפני תגובה אמיתית. DNSSEC: חתימות קריפטוגרפיות על records",
        "‏DNS Poisoning = שינוי /etc/hosts",
        "‏DNSSEC = TLS לDNS",
        "‏DNS Poisoning עובד רק ב-IPv4"
      ],
      explanation: "‏Kaminsky Attack (2008): ניחוש Transaction ID + source port → race condition → poison cache. ‏DNSSEC: Zone Signing Key + Key Signing Key. ‏RRSIG: חתימה על כל record. ‏DS record: hash של child zone key ב-parent. ‏Chain of trust: Root → TLD → domain. ‏DNSSEC לא מצפין ‎(DoT/DoH לזה)‎. ‏Resolver: dig +dnssec google.com."
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
      explanation: "בלי Sliding Window: שלח → המתן ACK → שלח → המתן. עם Window Size=10: שלח 10 segments → קבל ACKs → הזז חלון. ‏Pipeline מלא = ניצול מלא של הרשת. ‏Window Size גדל דינמית עם הזמן 📊"
    },
    {
      q: "מה Slow Start ב-TCP Congestion Control?",
      correct: "‏TCP מתחיל עם window קטן ומכפיל אותו בכל RTT — עד שמגיע לcongestion threshold",
      choices: [
        "‏TCP מתחיל עם window קטן ומכפיל אותו בכל RTT — עד שמגיע לcongestion threshold",
        "‏TCP מאט את שליחת החבילות ב-router עמוס",
        "הגדרה ידנית של מהירות הconnection",
        "תהליך ה-handshake האיטי של TCP"
      ],
      explanation: "‏Slow Start: cwnd=1 → 2 → 4 → 8 (exponential). כשמגיע לssthresh — עובר ל-Congestion Avoidance (linear +1). כשיש loss — ssthresh=cwnd/2, cwnd=1, מתחיל מחדש. כמו לדרוך על גז ואז לבלום 🚗"
    },
    {
      q: "מה TCP Slow Start ואיך Congestion Control עובד?",
      correct: "‏Slow Start: מתחיל עם cwnd=1, מכפיל בכל RTT עד ssthresh. Congestion Avoidance: מוסיף 1 בכל RTT. Loss = חזרה לslow start",
      choices: [
        "‏Slow Start: מתחיל עם cwnd=1, מכפיל בכל RTT עד ssthresh. Congestion Avoidance: מוסיף 1 בכל RTT. Loss = חזרה לslow start",
        "‏TCP שולח בקצב קבוע מההתחלה",
        "‏Congestion Control = Flow Control — זהה",
        "‏cwnd לא משתנה לאחר ביסוס חיבור"
      ],
      explanation: "‏TCP Congestion Control ‎(CUBIC ב-Linux, BBR של Google)‎: cwnd (congestion window). ‏Phases: Slow Start (exponential), Congestion Avoidance (linear), Fast Retransmit (3 dup-ACKs → retransmit), Fast Recovery ‎(ssthresh=cwnd/2, לא איפוס מלא)‎. ‏BBR: מבוסס על bandwidth + RTT, לא רק loss. ‏QUIC/HTTP3: congestion control ב-userspace."
    },
    {
      q: "מה TCP Window Size ומה Receive Buffer?",
      correct: "‏Window Size: כמה bytes sender יכול לשלוח לפני ACK. Receive Buffer: מה שOS מקצה לקריאת נתונים. Zero Window = buffer מלא",
      choices: [
        "‏Window Size: כמה bytes sender יכול לשלוח לפני ACK. Receive Buffer: מה שOS מקצה לקריאת נתונים. Zero Window = buffer מלא",
        "‏Window = MTU size",
        "‏Receive Buffer = Congestion Window",
        "‏Window Size קבוע ולא משתנה"
      ],
      explanation: "‏TCP Flow Control: receiver מכריז window size. ‏Sender לא שולח יותר. ‏Window Scaling (RFC 7323): window עד 1GB ‎(מ-65535 bytes)‎. ‏Zero Window: buffer מלא. ‏Sender שולח ZWPs (Zero Window Probes) כל 5-60 שניות. ‏Application לא קוראת → TCP slow → sender slow → backpressure. ss -tn לראות window sizes."
    },
    {
      q: "מה Nagle's Algorithm ומתי כדאי להשבית?",
      correct: "מצבר TCP segments קטנים לpacket גדול יותר (efficiency). להשבית עם TCP_NODELAY בapplications real-time: gaming, SSH, database",
      choices: [
        "מצבר TCP segments קטנים לpacket גדול יותר (efficiency). להשבית עם TCP_NODELAY בapplications real-time: gaming, SSH, database",
        "‏Nagle = congestion control algorithm",
        "‏TCP_NODELAY מאט את החיבור",
        "‏Nagle פעיל רק ב-UDP"
      ],
      explanation: "‏Nagle (RFC 896): אם יש unACKed data — חכה לACK לפני שולח segment קטן. מטרה: לא לבזבז bandwidth על packets של byte אחד (VT100 terminals). בעיה: latency גבוה לapplications אינטראקטיביות. ‏TCP_NODELAY=1: disable Nagle. ‏SSH, RDP, gaming, databases: כולם מכבים. ‏HTTP/1.1 persistent connections: לפעמים כדאי Nagle."
    }
  ],

  21: [
    {
      q: "מה ההבדל בין IPsec Tunnel mode לTransport mode?",
      correct: "‏Transport: מוצפן payload בלבד. Tunnel: כל הפקטה עטופה בפקטה חדשה",
      choices: [
        "‏Transport: מוצפן payload בלבד. Tunnel: כל הפקטה עטופה בפקטה חדשה",
        "‏Transport ל-UDP, Tunnel ל-TCP",
        "‏Transport מהיר יותר תמיד",
        "אין הבדל — שניהם מצפינים הכל"
      ],
      explanation: "‏Transport mode: IP Header מקורי גלוי, payload מוצפן. לHost-to-Host. ‏Tunnel mode: פקטה מלאה נעטפת — ה-IP החיצוני הוא של ה-VPN Gateway. ‏Site-to-Site VPN = Tunnel mode. ‏IKEv2 מועדף ליצירת security association 🔐"
    },
    {
      q: "מה SYN Cookies ואיך הם פותרים SYN Flood?",
      correct: "שרת לא מקצה state לSYN — מחזיר ISN מוצפן. רק ACK תקין מוכיח שהלקוח אמיתי",
      choices: [
        "שרת לא מקצה state לSYN — מחזיר ISN מוצפן. רק ACK תקין מוכיח שהלקוח אמיתי",
        "‏cookies של browser שמאמתים משתמשים לגיטימיים",
        "‏cache של SYN packets למניעת כפילויות",
        "‏rate limiting על SYN packets בfirewall"
      ],
      explanation: "‏SYN Flood: תוקף שולח מיליוני SYN. שרת רגיל: מקצה state לכל אחד → מלא RAM. ‏SYN Cookies: ISN = hash(src_ip, src_port, dst_port, timestamp, secret). שרת לא שומר state! רק ACK עם ISN+1 תקין מוכיח שהלקוח קיבל SYN-ACK 🛡️"
    },
    {
      q: "מה ההבדל בין VPN site-to-site לבין remote access VPN?",
      correct: "‏Site-to-site: מחבר רשתות שלמות (office A ↔ office B). Remote access: user בודד מתחבר לרשת ארגונית",
      choices: [
        "‏Site-to-site: מחבר רשתות שלמות (office A ↔ office B). Remote access: user בודד מתחבר לרשת ארגונית",
        "אין הבדל — שני הסוגים זהים",
        "‏Site-to-site = IPsec, Remote access = SSL בלבד",
        "‏Remote access VPN פחות מאובטח מsite-to-site"
      ],
      explanation: "‏Site-to-site: IPsec בין 2 routers/firewalls. שקוף למשתמשים. ‏Remote access: OpenVPN, WireGuard, Cisco AnyConnect, IKEv2. ‏Split tunneling: רק traffic ארגוני דרך VPN ‎(שאר ישירות)‎. ‏Full tunnel: הכל דרך VPN. ‏Zero Trust Network Access (ZTNA) = VPN עם identity-aware policies. ‏WireGuard: חדש, מהיר, קוד קצר ‎(4K lines vs 70K ב-OpenVPN)‎."
    },
    {
      q: "מה IPsec ואיזה שני מצבים קיימים?",
      correct: "‏IPsec: Transport Mode ‎(L4+ מוצפן, IP header גלוי)‎ ו-Tunnel Mode ‎(כל packet מוצפן + IP header חדש — VPN site-to-site)‎",
      choices: [
        "‏IPsec: Transport Mode ‎(L4+ מוצפן, IP header גלוי)‎ ו-Tunnel Mode ‎(כל packet מוצפן + IP header חדש — VPN site-to-site)‎",
        "‏IPsec = רק TLS עם IP features",
        "‏Transport Mode לsite-to-site, Tunnel ל-remote access",
        "‏IPsec מצפין רק UDP"
      ],
      explanation: "‏IPsec components: IKE (Internet Key Exchange) v2 לkey negotiation. ‏ESP (Encapsulating Security Payload): encryption + authentication. ‏AH (Authentication Header): authentication only ‎(ללא encryption)‎. ‏Transport Mode: host-to-host (end devices). ‏Tunnel Mode: gateway-to-gateway (routers). ‏IKE SA: negotiates master key. ‏Child SA: מפיק session keys. ‏DH (Diffie-Hellman) group: key agreement."
    },
    {
      q: "מה WireGuard ולמה נחשב טוב יותר מ-OpenVPN?",
      correct: "‏WireGuard: ~4K lines vs ~70K ב-OpenVPN. UDP, fast handshake, kernel module. אבל: לא stealth ‎(זיהוי בtraffic analysis)‎",
      choices: [
        "‏WireGuard: ~4K lines vs ~70K ב-OpenVPN. UDP, fast handshake, kernel module. אבל: לא stealth ‎(זיהוי בtraffic analysis)‎",
        "‏WireGuard מהיר יותר אבל פחות מאובטח",
        "‏OpenVPN תמיד עדיף כי ישן יותר",
        "‏WireGuard = OpenVPN v3"
      ],
      explanation: "‏WireGuard: נכלל ב-Linux kernel 5.6+. ‏Noise protocol framework. ‏ChaCha20-Poly1305. ‏25519 ECDH. ‏Stateless לנקודת מבט firewall. ‏Peer = public key + allowed IPs. ‏Connection migration: IP משתנה, session נשמרת. מגבלות: לא TCP ‎(חוסם firewalls)‎, אין obfuscation. ‏AmneziaVPN/MASQ: WireGuard עם obfuscation. ‏Tailscale/NetBird: WireGuard mesh VPN."
    }
  ],

  22: [
    {
      q: "מה ההבדל בין CDN Cache HIT לCache MISS?",
      correct: "‏HIT = הקובץ ב-PoP הקרוב, מוגש מיידית. MISS = PoP מביא מOrigin ואז מcache",
      choices: [
        "‏HIT = הקובץ ב-PoP הקרוב, מוגש מיידית. MISS = PoP מביא מOrigin ואז מcache",
        "‏HIT = הצלחה בחיפוש, MISS = שגיאה",
        "‏HIT לvideos, MISS לHTML",
        "‏HIT = CDN עובד, MISS = CDN מנותק"
      ],
      explanation: "‏Cache HIT: 5-15ms מPoP קרוב. ‏Cache MISS: 100-300ms מOrigin + PoP שומר לפעם הבאה. ‏CDN cache ratio טוב = 90%+ hits. ‏Netflix מגיע לכמעט 100% כי מcache מראש בלילה 🚀"
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
      explanation: "‏REST = request-response. לchat — polling כל שנייה = 3600 requests/שעה. ‏WebSocket = חיבור פתוח. שרת שולח מסר חדש מיידית. ‏Discord, Slack, Trading platforms, Multiplayer games = WebSockets 🎮"
    },
    {
      q: "מה ה-Anycast CDN ואיך Cloudflare/Akamai מנצלים BGP?",
      correct: "‏Anycast: אותה IP ממספר POPs ‎(נקודות נוכחות)‎. BGP מנתב לPOP הקרוב. Content cached לocally — latency נמוך",
      choices: [
        "‏Anycast: אותה IP ממספר POPs ‎(נקודות נוכחות)‎. BGP מנתב לPOP הקרוב. Content cached לocally — latency נמוך",
        "‏CDN = DNS load balancing בלבד",
        "‏Anycast = random routing בין servers",
        "‏CDN עובד רק ב-TCP"
      ],
      explanation: "‏CDN (Content Delivery Network): Cloudflare (290+ cities), Akamai (4000+ servers). ‏Cache hierarchy: origin → edge → PoP. ‏Cache-Control headers: max-age, s-maxage, no-cache. ‏Cache hit: 200ms → 5ms. ‏Cache miss: origin fetch. ‏Purge: API לnuke cache. ‏Edge Functions (Cloudflare Workers): JavaScript ב-edge, 0ms cold start."
    },
    {
      q: "מה Load Balancer Layer 4 לעומת Layer 7?",
      correct: "‏L4 (TCP/UDP): מהיר, לא מבין HTTP. L7 (HTTP): מבין URLs/headers/cookies, יכול לנתב לפי content, SSL termination",
      choices: [
        "‏L4 (TCP/UDP): מהיר, לא מבין HTTP. L7 (HTTP): מבין URLs/headers/cookies, יכול לנתב לפי content, SSL termination",
        "‏L4 יותר מאובטח מ-L7",
        "‏L7 מהיר יותר מ-L4",
        "אין הבדל — L4 ו-L7 LB זהים"
      ],
      explanation: "‏L4 LB: AWS NLB, HAProxy TCP mode. ‏NAT-based: שומר TCP state. ‏Fast: millions pps. ‏L7 LB: AWS ALB, nginx, Traefik. ‏HTTP-aware: URL routing (/api → backend1, /static → CDN), header manipulation, session affinity (sticky sessions via cookie), SSL offloading. ‏Health checks: L4=TCP connect, L7=HTTP 200. ‏Algorithms: Round Robin, Least Connections, IP Hash."
    },
    {
      q: "מה HTTP/2 Server Push ואיך מחליט מה לpush?",
      correct: "‏Server שולח resources (CSS/JS) לפני שclient ביקש — מפחית round trips. מבוסס על Link header או קוד server",
      choices: [
        "‏Server שולח resources (CSS/JS) לפני שclient ביקש — מפחית round trips. מבוסס על Link header או קוד server",
        "‏Server Push = WebSocket",
        "‏Server Push = Server-Sent Events",
        "‏Server Push לא קיים ב-HTTP/2"
      ],
      explanation: "‏Server Push: שרת יודע שHTML דורש style.css → דוחף לפני שclient ביקש. ‏Link preload header: Link: </style.css>; rel=preload; as=style. בעיה: over-pushing ‎(cache לא נלקח בחשבון)‎. ‏HTTP/2 Push deprecated בChrome. ‏Replaced by 103 Early Hints: שרת שולח hints לפני תגובה מלאה. ‏HTTP/3 (QUIC): אין Server Push ‎(הוסר)‎."
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
        "‏DNS record שגוי"
      ],
      explanation: "‏config change שגוי ביטל BGP announcements. ה-router של פייסבוק הפסיק לספר לעולם 'אני כאן'. כשל אחד מחק מיליארדי דולרים בשווי שוק. ואז — כלי התיקון גם הם היו בפנים 🌐"
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
      explanation: "כשיש עונש — אנשים מסתירים מידע. בלי עונש — מדווחים בפתיחות, הלמידה עמוקה. ‏Google SRE Book, Netflix — כולם מאמינים: 'המערכת כשלה, לא האדם'. ‏Action items > punishment 📚"
    },
    {
      q: "מה BGP Hijacking ואיך RPKI מגן?",
      correct: "‏BGP Hijacking: AS מפרסם prefix שלא שלו. RPKI: ROA (Route Origin Authorization) — certificate שמאמת 'AS X מורשה לפרסם prefix Y'",
      choices: [
        "‏BGP Hijacking: AS מפרסם prefix שלא שלו. RPKI: ROA (Route Origin Authorization) — certificate שמאמת 'AS X מורשה לפרסם prefix Y'",
        "‏BGP Hijacking = DDoS על BGP routers",
        "‏RPKI = הצפנת BGP updates",
        "‏BGP אינו ניתן לhijacking כי מאומת"
      ],
      explanation: "‏Pakistan Telecom 2008: הזריק 208.65.153.0/24 (vs YouTube /22). ‏Longest prefix match → 75% YouTube traffic ל-Pakistan. ‏RPKI: CA hierarchy (IANA → RIR → LIR → customer). ‏ROA: AS Number + Prefix + max length. ‏Validator: מוריד RPKI repository, בודק routes. ‏INVALID routes: filtered by rpki-filtered policy. ‏BGPsec: חותם כל hop ‎(מורכב, נדיר)‎."
    },
    {
      q: "מה Internet Exchange Point (IXP) ולמה חשוב?",
      correct: "‏IXP = מרכז פיזי שבו ISPs/CDNs מחברים ישירות ומחליפים BGP routes ללא עלות transit",
      choices: [
        "‏IXP = מרכז פיזי שבו ISPs/CDNs מחברים ישירות ומחליפים BGP routes ללא עלות transit",
        "‏IXP = ISP מרכזי שמנהל כל ה-routing",
        "‏IXP = Internet extension protocol",
        "‏IXP = חיבור בין IPv4 ל-IPv6"
      ],
      explanation: "‏IXP ב-ישראל: ILIX. גדולים: AMS-IX (Amsterdam), DE-CIX (Frankfurt), LINX (London). ‏Peering: חיבור ישיר בין 2 AS ללא תשלום (settlement-free). ‏Transit: תשלום ל-upstream ISP לrouting כללי. ‏Hot potato routing: שלח traffic ל-peer מוקדם ככל האפשר. ‏Cold potato routing: שמור traffic ב-רשת שלך כמה שאפשר. ‏Route server: מנהל BGP sessions לכל משתתפי IXP."
    },
    {
      q: "מה Submarine Cable ואיך אינטרנט עובד תחת האוקיינוס?",
      correct: "כבלים פיזיים בתחתית האוקיינוס = 95% מתעבורת הdata הבינלאומית. Latency: ~100ms לחצות האוקיינוס האטלנטי",
      choices: [
        "כבלים פיזיים בתחתית האוקיינוס = 95% מתעבורת הdata הבינלאומית. Latency: ~100ms לחצות האוקיינוס האטלנטי",
        "אינטרנט בינלאומי = לוויינים בעיקר",
        "‏Latency לחצות אוקיינוס = 5ms",
        "כבלי תת-ים = 50% מה-traffic בלבד"
      ],
      explanation: "‏Submarine cables: אלומת fiber optic, הגנות מכניות. ‏Repeaters כל 50-100km. ‏Capacity: terabits/sec. ‏Break: שיטפונות, עוגנים, כרישים. ‏Repair ships: 3-6 שבועות. ‏Starlink/LEO: ~20ms latency ‎(לחשב)‎ — יתרון על כבלים. ‏TeleGeography: mapa מעודכנת. ‏Microsoft/Google/Facebook: מחזיקים כבלים פרטיים (Azure, Equiano, MAREA)."
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
      explanation: "‏Netflix שמה OCA בISPs בחינם. ה-ISP מקבל hardware, Netflix חוסכת transit ב-$M. בלילה Netflix מcache מראש content פופולרי. למחרת — הvideo מגיע מ-ISP עצמו, latency 5ms. גאוני 💡"
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
      explanation: "1.1.1.1 של Cloudflare = כתובת Anycast. ‏BGP מנתב אותך ל-PoP הקרוב מ-300 מיקומים. ‏DDoS? תנועה מתחלקת ל-300 PoPs — כל אחד ספג שבריר. ‏Netflix, Google, Cloudflare כולם משתמשים 🌍"
    },
    {
      q: "מה DPI (Deep Packet Inspection) ואיך ISPs משתמשים בו?",
      correct: "‏DPI: ניתוח תוכן packets מעבר לheaders — ISPs יכולים לזהות BitTorrent, Netflix, לחסום sites, לבצע traffic shaping",
      choices: [
        "‏DPI: ניתוח תוכן packets מעבר לheaders — ISPs יכולים לזהות BitTorrent, Netflix, לחסום sites, לבצע traffic shaping",
        "‏DPI = DNS Privacy Inspector",
        "‏DPI עובד רק על unencrypted traffic",
        "‏DPI = הצפנת packets ב-router"
      ],
      explanation: "‏DPI vs SPI: SPI = stateful inspection (L3/L4). ‏DPI = L7 payload analysis. שימושים: ISP throttling (YouTube QoS), censorship (Great Firewall), malware detection, lawful interception. ‏HTTPS: DPI לא יכול לקרוא תוכן ‎(מוצפן)‎. ‏ESNI/ECH: מסתיר SNI (hostname) — מסכל DPI-based blocking. ‏Net Neutrality: מניעת DPI-based discrimination."
    },
    {
      q: "מה Data Center topology ו-Spine-Leaf Architecture?",
      correct: "‏Spine-Leaf: 2 שכבות — Leaf (ToR switches) מחוברים לכל Spine. Equal latency בין כל servers. מחליף traditional 3-tier (Core/Dist/Access)",
      choices: [
        "‏Spine-Leaf: 2 שכבות — Leaf (ToR switches) מחוברים לכל Spine. Equal latency בין כל servers. מחליף traditional 3-tier (Core/Dist/Access)",
        "‏Spine-Leaf = Spanning Tree topology",
        "‏Spine = core routers, Leaf = servers בלבד",
        "‏Spine-Leaf משתמש ב-STP"
      ],
      explanation: "‏ארכיטקטורה מסורתית ‎Traditional 3-tier‏: ליבה ‎Core (L3)‏ → הפצה ‎Distribution (L3)‏ → גישה ‎Access (L2)‏. צוואר בקבוק ב-aggregation. ‎Spine-Leaf‏: כל ‎Leaf‏ מחובר לכל ‎Spine‏. תעבורה מזרח-מערב ‎= 1 hop‏. ‎BGP/ECMP‏: ללא ‎STP‏. ‎ToR (Top of Rack)‏: switch בתוך rack. רשת ‎Clos (Bell Labs, 1950s)‏. מרכזי נתונים ‎Facebook/Google‏: silicon מותאם ‎(Arista, Broadcom)‏. ‎eBGP‏ במרכז הנתונים: ‎RFC 7938‏."
    },
    {
      q: "מה Latency לעומת Bandwidth ולמה latency חשוב יותר בinteractive apps?",
      correct: "‏Bandwidth = כמה data/שנייה. Latency = כמה זמן לpacket להגיע. Interactive (gaming/VoIP/WebRTC): latency קריטי. Bulk transfer: bandwidth קריטי",
      choices: [
        "‏Bandwidth = כמה data/שנייה. Latency = כמה זמן לpacket להגיע. Interactive (gaming/VoIP/WebRTC): latency קריטי. Bulk transfer: bandwidth קריטי",
        "‏Bandwidth ו-Latency אותו דבר",
        "‏Bandwidth תמיד חשוב יותר",
        "‏Latency = Round Trip Time + Bandwidth"
      ],
      explanation: "‏מושגי זמן תגובה: ‎RTT (Round Trip Time)‏ נמדד ב-ping. כיוון אחד: ‎RTT/2‏. מקורות ללטנסי: קידום ‎(propagation, speed of light ~200km/ms fiber)‏, שידור ‎(transmission, packet size / bandwidth)‏, עיבוד ‎(processing, router forwarding)‏, תור ‎(queuing, buffer)‏. מכפלת רוחב-סרט-עיכוב: בתים בדרך ‎= bandwidth x RTT‏. ‎100Mbps x 100ms = 1.25MB‏ בדרך. כיוונון TCP buffer: ‎net.core.rmem_max‏. גיימינג: ‎>100ms‏ = לא ניתן לשחק. ‎Jitter‏ = שונות בלטנסי = גורם איכות ב-VoIP."
    }
  ],

  25: [
    {
      q: "מה ISP יכול לראות כשגולשים ב-HTTPS?",
      correct: "‏DNS queries ו-TLS SNI ‎(שם הדומיין)‎ — לא את תוכן הדפים",
      choices: [
        "‏DNS queries ו-TLS SNI ‎(שם הדומיין)‎ — לא את תוכן הדפים",
        "הכל, כולל סיסמאות וhistory",
        "רק כתובת IP — לא יותר",
        "כלום — HTTPS מוצפן לחלוטין"
      ],
      explanation: "‏HTTPS מצפין תוכן — אבל DNS query ‎(מה ה-IP של google.com?)‎ נשלח בplaintext. ‏TLS SNI בחיבור = שם הדומיין בclear. ‏ISP רואה timeline: 08:23 gmail.com, 09:17 bankofamerica.com. ‏DoH+ECH = פתרון 👁️"
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
      explanation: "‏Canvas fingerprint: הדפדפן מצייר טקסט — הpixels שונים בכל GPU/OS. ‏Fonts, WebGL, screen = כמות אינסופית של שילובים. ייחודי כמעט כמו DNA. ‏Incognito לא עוזר! Tor Browser מרנדמז 🖐️"
    },
    {
      q: "מה SNI (Server Name Indication) ואיך TLS מכריז על הdomain?",
      correct: "‏SNI: ClientHello כולל hostname בplaintext ‎(לפני הצפנה)‎. מאפשר virtual hosting של HTTPS. ECH מסתיר SNI",
      choices: [
        "‏SNI: ClientHello כולל hostname בplaintext ‎(לפני הצפנה)‎. מאפשר virtual hosting של HTTPS. ECH מסתיר SNI",
        "‏SNI = SSL certificate של server",
        "‏SNI = DNS record ל-HTTPS",
        "‏SNI מוצפן מהרגע הראשון"
      ],
      explanation: "ללא SNI: server אחד = IP אחד = certificate אחד. עם SNI: מאות domains על IP אחד. ‏ClientHello: server_name extension = hostname. ‏ISP/firewall: יכול לראות ולחסום לפי SNI ‎(גם ב-HTTPS)‎. ‏ESNI (deprecated): encrypted SNI. ‏ECH (Encrypted Client Hello): encrypted כל ClientHello, כולל SNI. ‏Cloudflare: תומך ECH. הסתרת SNI = קשה יותר לcensorship."
    },
    {
      q: "מה Browser Fingerprinting וכיצד websites עוקבות ללא cookies?",
      correct: "‏Browser Fingerprint: שילוב Canvas, WebGL, fonts, plugins, screen, timezone = ID כמעט ייחודי. לא ניתן למחיקה כמו cookies",
      choices: [
        "‏Browser Fingerprint: שילוב Canvas, WebGL, fonts, plugins, screen, timezone = ID כמעט ייחודי. לא ניתן למחיקה כמו cookies",
        "‏Fingerprinting = cookies מוצפנים",
        "‏Browser Fingerprint = IP address בלבד",
        "‏Fingerprinting עובד רק ב-Chrome"
      ],
      explanation: "‏Canvas fingerprint: מצייר text/shape ← GPU rendering שונה לכל GPU+driver = ייחודי. ‏AudioContext, WebGL, font enumeration, screen resolution, timezone, language, plugins, Do Not Track. ‏EFF Panopticlick/Cover Your Tracks. ‏Firefox: resistFingerprinting=true. ‏Brave: randomizes fingerprint per session. ‏Tor Browser: identical fingerprint לכל users (protection by uniformity)."
    },
    {
      q: "מה Traffic Analysis ומה VPN לא מגן עליו?",
      correct: "‏Traffic Analysis: גם עם VPN ניתן לזהות volume, timing, patterns — Netflix vs gaming vs Tor שונים. VPN מסתיר תוכן, לא behavior",
      choices: [
        "‏Traffic Analysis: גם עם VPN ניתן לזהות volume, timing, patterns — Netflix vs gaming vs Tor שונים. VPN מסתיר תוכן, לא behavior",
        "‏VPN מגן מפני כל סוגי ניטור",
        "‏Traffic Analysis = DPI — VPN מגן לחלוטין",
        "‏Traffic Analysis עובד רק ב-HTTP"
      ],
      explanation: "‏Traffic Analysis: NSA/Tor research. ‏Packet timing, size distribution, inter-arrival time → identify application. ‏Netflix: big constant streams. ‏Gaming: small bidirectional 60-100pps. ‏Video call: ~1-3 Mbps, symmetric. ‏Correlation attack: adversary ב-exit + entry = deanonymize Tor. ‏Website fingerprinting: ML על timing/size → identify site via Tor. ‏Defense: obfs4, meek (mimics HTTPS/CDN)."
    }
  ],

  26: [
    {
      q: "מה ההבדל העיקרי בין HTTP/2 ל-HTTP/3?",
      correct: "‏HTTP/2 על TCP ‎(יש HOL blocking ב-transport)‎, HTTP/3 על QUIC/UDP ‎(streams עצמאיים)‎",
      choices: [
        "‏HTTP/2 על TCP ‎(יש HOL blocking ב-transport)‎, HTTP/3 על QUIC/UDP ‎(streams עצמאיים)‎",
        "‏HTTP/3 מהיר יותר כי משתמש בUDP שמהיר מTCP",
        "‏HTTP/3 מוסיף הצפנה שלא הייתה בHTTP/2",
        "‏HTTP/2 לdesktop, HTTP/3 למובייל"
      ],
      explanation: "‏HTTP/2 פתר HOL blocking ב-Application layer — אבל TCP עדיין בעיה. חבילה אחת אבודה = כל streams מחכים. ‏QUIC: כל stream עצמאי גם ב-transport. אובדן חבילה = רק stream אחד מושפע. ‏25%+ מהאינטרנט כבר HTTP/3 🚀"
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
      explanation: "‏eBPF = revolution. ‏XDP: drop packets לפני ה-network stack — מיליוני pps. ‏Cilium: מחליף iptables בKubernetes. ‏Observability: trace כל syscall בproduction ללא overhead. ‏Cloudflare, Meta, Google, Netflix = כולם eBPF 🔧"
    },
    {
      q: "מה eBPF ואיך הוא שינה Linux networking?",
      correct: "‏eBPF: תוכניות verified רצות ב-kernel ללא module loading. XDP: drop packets לפני network stack. TC: traffic shaping. Kprobes: tracing",
      choices: [
        "‏eBPF: תוכניות verified רצות ב-kernel ללא module loading. XDP: drop packets לפני network stack. TC: traffic shaping. Kprobes: tracing",
        "‏eBPF = encryption protocol",
        "‏eBPF = kernel module loading",
        "‏eBPF פועל ב-userspace בלבד"
      ],
      explanation: "‏eBPF programs: bytecode → Verifier (safety) → JIT compiled → runs in kernel context. ‏Hook points: XDP (NIC driver level), TC (traffic control), socket filters, kprobe/tracepoint (observability). ‏Use cases: Cilium (K8s networking), Katran (Facebook LB), Falco (security), bpftrace (debugging). ‏Performance: XDP drop = 26M pps vs iptables = 3M pps."
    },
    {
      q: "מה QUIC ואיך HTTP/3 מתמודד עם Head-of-Line Blocking?",
      correct: "‏QUIC: UDP-based, כל stream עצמאי. אובדן packet בstream A לא חוסם stream B. HTTP/2 על TCP: loss חוסם כל ה-streams",
      choices: [
        "‏QUIC: UDP-based, כל stream עצמאי. אובדן packet בstream A לא חוסם stream B. HTTP/2 על TCP: loss חוסם כל ה-streams",
        "‏QUIC פותר HOL Blocking לחלוטין גם ב-TCP",
        "‏HTTP/3 = HTTP/2 על TLS 1.3",
        "‏QUIC = UDP עם TCP header"
      ],
      explanation: "‏HTTP/2 HOL: TCP חייב לשמור על סדר bytes. ‏Loss → NACK → retransmit → כל streams מחכים. ‏QUIC: UDP, כל stream מנוהל בנפרד. ‏Loss בstream 1 לא עוצר stream 2. ‏Connection ID: מאפשר migration (WiFi → 4G). ‏0-RTT: connection resumption בלי handshake. ‏TLS 1.3 מובנה. ‏Chrome, YouTube, Facebook: ~30% QUIC."
    },
    {
      q: "מה DPDK ואיזה שימושים של networking ב-userspace?",
      correct: "‏DPDK (Data Plane Development Kit): מעקף kernel, direct NIC access מ-userspace. מאפשר >40Mpps. שימוש: 5G, software routers, NFV",
      choices: [
        "‏DPDK (Data Plane Development Kit): מעקף kernel, direct NIC access מ-userspace. מאפשר >40Mpps. שימוש: 5G, software routers, NFV",
        "‏DPDK = Docker networking plugin",
        "‏DPDK = תקן לencryption",
        "‏DPDK מאיט networking"
      ],
      explanation: "‏Kernel networking: interrupt-driven, system call overhead. ‏DPDK: polling mode driver, huge pages, lockless rings. ‏VPP (Vector Packet Processing): Cisco open-source, DPDK-based, hundreds Gbps. ‏SRIOV: physical NIC → virtual functions → VM direct access. ‏NFV (Network Functions Virtualization): firewall, LB, router ב-software. ‏Intel DPDK: 10-100Gbps on commodity hardware."
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
      q: "מה אפשרה פריצת Target ב-2013?",
      correct: "גישה לרשת Target דרך ספק HVAC שהיה מחובר לאותה רשת כמו מערכות הקופה",
      choices: [
        "גישה לרשת Target דרך ספק HVAC שהיה מחובר לאותה רשת כמו מערכות הקופה",
        "פריצה ישירה לשרתי Target מהאינטרנט",
        "‏הזרקת SQL על אתר Target",
        "סיסמה חלשה של מנהל IT בכיר"
      ],
      explanation: "ספק מיזוג אוויר (HVAC) קיבל גישה לרשת Target לניהול מרחוק. הפורצים פרצו לספק, ביצעו תנועה רוחבית (pivoting) לרשת Target, והגיעו למערכות הקופה (Point-of-Sale). נגנבו 40 מיליון כרטיסי אשראי. הלקח: הפרדת רשתות (Network Segmentation) — ספקים חיצוניים חייבים להיות ברשת נפרדת.",
      explanationEn: "An HVAC vendor had remote access to Target's network. Attackers breached the vendor, performed lateral movement (pivoting) into Target's network, and reached Point-of-Sale systems. 40 million credit cards were stolen. Lesson: Network Segmentation is critical — external vendors must be on a separate network."
    },
        {
      q: "‏מה ההבדל בין סודיות (Confidentiality) לבין פרטיות (Privacy) באבטחת מידע?",
      correct: "סודיות (Confidentiality) מגנה על נתוני ארגון מפני גישה לא מורשית — פרטיות (Privacy) מגנה על נתונים אישיים של אנשים",
      choices: [
        "סודיות (Confidentiality) מגנה על נתוני ארגון מפני גישה לא מורשית — פרטיות (Privacy) מגנה על נתונים אישיים של אנשים",
        "הם מילים נרדפות — שניהם אותו דבר",
        "פרטיות (Privacy) חזקה יותר מסודיות (Confidentiality)",
        "סודיות מוגנת בהצפנה, פרטיות מוגנת בסיסמאות בלבד"
      ],
      explanation: "סודיות (Confidentiality) מונעת חשיפת נתונים לגורמים לא מורשים (למשל מסמך סודי של חברה). פרטיות (Privacy) היא זכות הפרט על נתוניו האישיים (לפי תקנות GDPR ו-CCPA). יש חפיפה, אך ניתן להפר פרטיות בלי לפגוע בסודיות — למשל: עובד מורשה שמוכר נתוני לקוחות לצד שלישי.",
      explanationEn: "Confidentiality prevents unauthorized access to data (e.g., a company's classified document). Privacy is an individual's right over their personal data (per GDPR, CCPA regulations). They overlap, but privacy can be violated without breaching confidentiality — e.g., an authorized employee selling customer data to a third party."
    },
        {
      q: "‏מה תהליך ניתוח איומים (Threat Modeling) ולמה עושים אותו לפני כתיבת קוד?",
      correct: "תהליך זיהוי איומים פוטנציאליים על המערכת לפני פיתוח — זול יותר לתקן בשלב התכנון מאשר בסביבת הייצור",
      choices: [
        "תהליך זיהוי איומים פוטנציאליים על המערכת לפני פיתוח — זול יותר לתקן בשלב התכנון מאשר בסביבת הייצור",
        "‏בדיקת חדירה שמבוצעת לאחר פריסה (deployment)",
        "כלי אוטומטי שסורק קוד לפגיעויות",
        "תהליך הצפנת מסד הנתונים לפני העלייה לאוויר"
      ],
      explanation: "מודלים לניתוח איומים (STRIDE, PASTA, DREAD): שאל את עצמך — מי יתקוף? איך? מה ייפגע? תיקון באג בשלב התכנון עולה $1, בשלב הבדיקות $10, ובסביבת ייצור $100. מיקרוסופט מחייבת ניתוח איומים לפני כל פיצ'ר חדש. הפלט: תרשים זרימת נתונים, רשימת איומים ודרכי מיטיגציה.",
      explanationEn: "Threat modeling frameworks (STRIDE, PASTA, DREAD): Ask yourself — who will attack? How? What gets damaged? Fixing a bug at design stage costs $1, at testing $10, and in production $100. Microsoft requires threat modeling before every new feature. Output: data flow diagram, threat list, and mitigation strategies."
    },
        {
      q: "‏מהו שטח תקיפה (Attack Surface) ואיך מצמצמים אותו?",
      correct: "סך כל נקודות הכניסה האפשריות למערכת — מצמצמים על ידי כיבוי שירותים מיותרים, עדכוני אבטחה ועקרון ההרשאה המינימלית",
      choices: [
        "סך כל נקודות הכניסה האפשריות למערכת — מצמצמים על ידי כיבוי שירותים מיותרים, עדכוני אבטחה ועקרון ההרשאה המינימלית",
        "שטח הפנים הפיזי של שרת — מצמצמים על ידי התקנה בחדר סגור",
        "מספר המשתמשים עם גישה לאינטרנט",
        "מספר הפורטים הפתוחים — מצמצמים על ידי חומת אש"
      ],
      explanation: "שטח התקיפה (Attack Surface) כולל כל ממשק, נקודת גישה, שירות, משתמש ו-API שתוקף יכול לנצל. כדי לצמצם: כבה שירותים שאינם בשימוש (למשל FTP), הסר תוכנות מיותרות, הפעל עקרון הרשאה מינימלית (Least Privilege), עדכן טלאי אבטחה והגבל גישת רשת בחוקי חומת אש. שטח קטן יותר = פחות מקומות לתקוף.",
      explanationEn: "The Attack Surface includes every interface, access point, service, user, and API an attacker can exploit. To reduce it: disable unused services (e.g., FTP), remove unnecessary software, apply Least Privilege, patch security updates, and restrict network access with firewall rules. Smaller surface = fewer attack opportunities."
    }
  ],

  102: [
    {
      q: "‏מה ההבדל בין סריקת SYN (sS-) לבין סריקת חיבור (sT-) ב-Nmap?",
      correct: "‏סריקת SYN שולחת רק חבילת SYN בלי להשלים את לחיצת היד (handshake) — שקטה יותר ולא נרשמת ביומני האפליקציה",
      choices: [
        "‏סריקת SYN שולחת רק חבילת SYN בלי להשלים את לחיצת היד (handshake) — שקטה יותר ולא נרשמת ביומני האפליקציה",
        "‏סריקת SYN מהירה יותר כי משתמשת ב-UDP",
        "‏סריקת חיבור (Connect) דורשת הרשאות root",
        "אין הבדל — שניהם עושים אותו דבר"
      ],
      explanation: "סריקת SYN (חצי-פתוחה): שולחת SYN, מקבלת SYN-ACK, שולחת RST. לא משלימה חיבור ולכן לא נרשמת בלוגים של האפליקציה. דורשת root. סריקת Connect משלימה לחיצת יד מלאה (TCP handshake) — נרשמת בלוגים אך לא דורשת root. הדגל sS- מועדף בבדיקות חדירה, sT- לסביבות ללא root.",
      explanationEn: "SYN scan (Half-open): sends SYN, receives SYN-ACK, sends RST. Does not complete a connection, so it is not logged by the application. Requires root. Connect scan: completes a full TCP handshake — gets logged, but does not require root. -sS is preferred for pentesting. -sT for non-root environments."
    },
    {
      q: "מה פקודת Nmap שסורקת כל הפורטים עם זיהוי שירות ומערכת הפעלה?",
      correct: "‏nmap -sS -sV -O -p- target",
      choices: [
        "‏nmap -sS -sV -O -p- target",
        "‏nmap --full-scan target",
        "‏nmap -a -all target",
        "‏nmap -sU -complete target"
      ],
      explanation: "הדגלים: sS- לסריקת SYN, sV- לזיהוי גרסת שירות על הפורט, O- לזיהוי מערכת הפעלה, p-- לכל 65,535 הפורטים (לא רק 1,000 הנפוצים). אפשר לקצר עם הדגל A- שכולל את sV- ו-O- יחד עם סקריפטים. זמן ריצה: 10-30 דקות על כל הפורטים.",
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
      explanation: "‏Nmap מדווח שלושה מצבים: פתוח (open) — מקבל חיבורים, סגור (closed) — אין שירות והפורט מגיב RST, ומסונן (filtered) — חומת אש חוסמת ואין תגובה. המצב open/filtered מופיע כשלא ברור האם חומת אש חוסמת או שהפורט פתוח.",
      explanationEn: "Nmap reports 3 states: open (accepting connections), closed (no service — responds with RST), and filtered (firewall blocks — no response or ICMP unreachable). open/filtered means it is unclear whether a firewall is blocking or the port is open."
    },
        {
      q: "‏מה קורה בזיוף ARP (ARP Spoofing) ואיך תוקף מנצל אותו?",
      correct: "תוקף שולח תגובות ARP מזויפות כדי לשייך את כתובת ה-MAC שלו לכתובת IP של הקורבן — כל התעבורה עוברת דרכו (התקפת אדם-באמצע)",
      choices: [
        "תוקף שולח תגובות ARP מזויפות כדי לשייך את כתובת ה-MAC שלו לכתובת IP של הקורבן — כל התעבורה עוברת דרכו (התקפת אדם-באמצע)",
        "תוקף מציף את הרשת בחבילות ARP כדי להפיל שרות",
        "תוקף מחליף את כתובות IP בחבילות UDP",
        "תוקף מנצל חולשה בפרוטוקול DNS"
      ],
      explanation: "לפרוטוקול ARP אין מנגנון אימות — כל אחד יכול לשלוח תגובת ARP. התוקף שולח: 'כתובת ה-IP של השער היא כתובת ה-MAC שלי!' הקורבן מעדכן את טבלת ה-ARP וכל התעבורה עוברת דרך התוקף. הגנה: בדיקת ARP דינמית (DAI) בסוויצ'ים, רשומות ARP קבועות, וכלי ניטור כמו ARPwatch.",
      explanationEn: "ARP has no authentication — anyone can send an ARP reply. The attacker sends: 'The gateway IP maps to MY MAC address!' The victim updates its ARP cache, and all traffic flows through the attacker. Defenses: Dynamic ARP Inspection (DAI) on switches, static ARP entries, and monitoring tools like ARPwatch."
    },
        {
      q: "‏מה ההבדל בין מתקפת מניעת שירות נפחית (Volumetric DDoS) לבין מתקפת שכבת אפליקציה (L7 DDoS)?",
      correct: "‏מתקפה נפחית (Volumetric) מציפה את רוחב הפס בג'יגה-ביט של UDP/ICMP — מתקפת שכבה 7 שולחת בקשות HTTP שנראות לגיטימיות ומרוקנות משאבי שרת",
      choices: [
        "‏מתקפה נפחית (Volumetric) מציפה את רוחב הפס בג'יגה-ביט של UDP/ICMP — מתקפת שכבה 7 שולחת בקשות HTTP שנראות לגיטימיות ומרוקנות משאבי שרת",
        "‏מתקפה נפחית תוקפת שרתי DNS — שכבה 7 תוקפת רק שרתי web",
        "‏מתקפת שכבה 7 קלה יותר לחסימה כי השרת רואה את ה-IP",
        "‏אין הבדל — שניהם מרוקנים רוחב פס"
      ],
      explanation: "מתקפה נפחית (שכבות 3/4): מציפה את הצינור בג'יגה-ביט של נתונים — הצפת UDP, ICMP, SYN. קל לזהות (תעבורה חריגה) אך קשה לעצור ללא סינון ברמת ספק האינטרנט. מתקפת שכבה 7: כלי Slowloris מחזיק חיבורי HTTP פתוחים, הצפת HTTP — הבקשות נראות לגיטימיות וקשה להבחין בהן. מחייב חומת אש אפליקטיבית (WAF), הגבלת קצב ואתגרי CAPTCHA.",
      explanationEn: "Volumetric (L3/L4): floods the pipe with gigabits of data — UDP flood, ICMP flood, SYN flood. Easy to detect (abnormal traffic) but hard to stop without ISP-level scrubbing. Application L7: Slowloris holds HTTP connections open, HTTP flood looks legitimate and is hard to distinguish from real traffic. Requires WAF, rate limiting, and challenge-response (CAPTCHA)."
    },
        {
      q: "‏מהי מתקפת השחזור (Replay Attack) ואיך TLS מונע אותה?",
      correct: "תוקף מיירט ומשחזר חבילה חוקית — פרוטוקול TLS מונע זאת באמצעות מספרים סידוריים ואסימוני הפעלה חד-פעמיים",
      choices: [
        "תוקף מיירט ומשחזר חבילה חוקית — פרוטוקול TLS מונע זאת באמצעות מספרים סידוריים ואסימוני הפעלה חד-פעמיים",
        "תוקף שולח אותה בקשה פעמיים לגרום לעיבוד כפול",
        "תוקף מקליט שיחת קול ומשחזר אותה לאחר שיחה",
        "פרוטוקול TLS לא מגן מפני מתקפת השחזור — נדרש אימות נוסף"
      ],
      explanation: "מתקפת השחזור (Replay Attack): התוקפת מיירטת אסימון אימות תקני של המשתמשת ושולחת אותו שוב לשרת כדי להתחזות אליה. בפרוטוקול TLS 1.3 כל חיבור מקבל ערך ייחודי (nonce) ומספרים סידוריים. אסימוני JWT כוללים תפוגה (exp) ומזהה חד-פעמי (jti). בפרוטוקולים ישנים כמו Kerberos, מתקפת השחזור הייתה בעיה קריטית. סנכרון שעונים (NTP) חשוב למניעה.",
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
      explanation: "‏XSS מאוחסן (Stored/Persistent): סקריפט נשמר במסד הנתונים (למשל תגובה בפורום) ומורץ אצל כל מי שצופה. XSS מוחזר (Reflected): סקריפט בכתובת URL, נשלח למשתמש ומורץ מיד. XSS מבוסס DOM: רץ בצד הלקוח ללא מעורבות השרת. המאוחסן הוא המסוכן ביותר בגלל ההיקף. הגנה: קידוד פלט (output encoding) וכותרות CSP.",
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
      explanation: "סולם CVSS v3: אפס=ללא, 0.1-3.9=נמוך, 4.0-6.9=בינוני, 7.0-8.9=גבוה, 9.0-10.0=קריטי. ציון 9.8 פירושו הרצת קוד מרחוק (RCE) ללא אימות ונגיש מהרשת. פגיעויות Heartbleed ו-Log4Shell קיבלו ציון 9.8 ומעלה. כל פגיעות קריטית דורשת טלאי תוך 24-48 שעות.",
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
      explanation: "תוסף ה-Heartbeat ב-OpenSSL: הלקוח שולח 'החזר לי X בתים'. השרת מחזיר X בתים מבלי לוודא שנשלחו כל כך הרבה. הבאג: אם ביקשת 64KB אבל שלחת בית אחד, השרת מחזיר 64KB מהזיכרון — שעלול להכיל מפתחות פרטיים, אסימוני הפעלה וסיסמאות. הפגיעות הייתה חשופה שנתיים (2012-2014).",
      explanationEn: "OpenSSL Heartbeat extension: the client sends 'return X bytes to me'. The server returns X bytes without verifying that X bytes were actually sent. Bug: if you request 64K but send 1 byte, the server returns 64K from RAM — which may contain private keys, session tokens, and passwords. The vulnerability was exposed for 2 years (2012-2014)."
    },
        {
      q: "‏מהי הזרקת SQL (SQL Injection) ואיך שאילתות מוכנות (Prepared Statements) מונעות אותה?",
      correct: "הזרקת קוד SQL דרך קלט משתמש — שאילתות מוכנות (Prepared Statements) מפרידות קוד מנתונים כך שהפרמטרים מטופלים כטקסט בלבד",
      choices: [
        "הזרקת קוד SQL דרך קלט משתמש — שאילתות מוכנות (Prepared Statements) מפרידות קוד מנתונים כך שהפרמטרים מטופלים כטקסט בלבד",
        "‏מתקפה על שרת מסד הנתונים הפיזי — הפתרון: עדכון שרת",
        "‏הצפנת שאילתות SQL לפני שליחה למסד הנתונים",
        "שאילתות מוכנות מהירות יותר — זו הסיבה העיקרית להשתמש בהן"
      ],
      explanation: "דוגמה קלאסית להזרקת SQL: שם משתמש עם ' OR '1'='1 יוצר שאילתה שתמיד מחזירה true ועוקף את ההתחברות. שאילתה מוכנה (Prepared Statement) משתמשת בסימן ? כמציין מקום — מסד הנתונים מטפל בערך כטקסט בלבד ולא כקוד. כלל ברזל: לעולם אל תשלב קלט משתמש ישירות במחרוזת SQL!",
      explanationEn: "Classic SQLi: username=' OR '1'='1 turns the query into SELECT * FROM users WHERE name='' OR '1'='1' — always true, bypasses login! Prepared Statement: $stmt = $pdo->prepare('SELECT * FROM users WHERE name = ?'); $stmt->execute([$username]); — the ? is a placeholder, the DB treats the value as a string, not code. Never concatenate user input directly into SQL strings!"
    },
        {
      q: "‏מהו זיוף בקשה בין אתרים (CSRF) ואיך אסימון נגד CSRF מגן?",
      correct: "זיוף בקשה בין אתרים (CSRF) — אתר זדוני גורם לדפדפן לשלוח בקשות לאתר אחר שבו המשתמש מחובר. אסימון ייחודי בכל טופס מונע זאת",
      choices: [
        "זיוף בקשה בין אתרים (CSRF) — אתר זדוני גורם לדפדפן לשלוח בקשות לאתר אחר שבו המשתמש מחובר. אסימון ייחודי בכל טופס מונע זאת",
        "‏מתקפה שמזייפת עוגיות של משתמש באמצעות XSS",
        "‏גניבת כותרות CSRF מבקשת HTTP",
        "‏כניסה לחשבון בעזרת סיסמה גנובה"
      ],
      explanation: "תרחיש: אליס מחוברת לאתר הבנק. היא מבקרת באתר זדוני שמכיל תג תמונה עם כתובת לפעולת העברה בבנק. הדפדפן שולח את הבקשה עם העוגיות של אליס! אסימון נגד CSRF: השרת מוסיף אסימון נסתר לכל טופס, ובעת שליחה מוודא שהאסימון תואם את ההפעלה. אתר זדוני לא יכול לקרוא את האסימון בזכות מדיניות Same-Origin Policy.",
      explanationEn: "Scenario: Alice is logged into bank.com. She visits evil.com which contains an image tag pointing to bank.com/transfer. The browser sends the request with Alice's cookies! Anti-CSRF Token: the server adds a hidden token to every form, the token is sent in the body, and the server verifies it matches the session. The attacker's site cannot read the token due to Same-Origin Policy."
    },
        {
      q: "‏מהי רשימת OWASP Top 10 ואיזו פגיעות בדרך כלל תופסת מקום ראשון?",
      correct: "רשימת 10 סיכוני האבטחה הנפוצים ביותר באפליקציות ווב — בקרת גישה לקויה (Broken Access Control) במקום 1 מאז 2021",
      choices: [
        "רשימת 10 סיכוני האבטחה הנפוצים ביותר באפליקציות ווב — בקרת גישה לקויה (Broken Access Control) במקום 1 מאז 2021",
        "רשימת 10 הכלים הטובים ביותר לבדיקות חדירה — הזרקת SQL במקום 1",
        "10 פגיעויות שנתגלו בשנת 2021 בלבד",
        "‏תקן ISO המגדיר אבטחת ווב — XSS במקום 1 תמיד"
      ],
      explanation: "רשימת OWASP Top 10 לשנת 2021: בקרת גישה לקויה (A01), כשלים קריפטוגרפיים (A02), הזרקות SQL/LDAP/OS (A03), תכנון לא מאובטח (A04), תצורת אבטחה שגויה (A05), רכיבים פגיעים (A06), כשלי אימות (A07), כשלי שלמות (A08), כשלי תיעוד (A09), זיוף בקשות בצד השרת — SSRF (A10). לא חוק אלא מדריך שיטות עבודה מומלצות לצוותי פיתוח. מתעדכן כל 4 שנים בערך.",
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
      explanation: "‏הגנה לעומק כוללת שכבות: היקף (חומת אש, WAF), רשת (מערכות זיהוי/מניעת חדירה — IDS/IPS, הפרדת רשתות), תחנות קצה (אנטי-וירוס, EDR, עדכונים), אפליקציה (אימות, הרשאות, בדיקת קלט), נתונים (הצפנה, מניעת דליפה — DLP) ואנושי (הדרכה, סימולציות פישינג). כל שכבה מניחה שהשכבה החיצונית תיכשל.",
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
      explanation: "‏לפי תקן NIST SP 800-61: הכנה (כלים, נהלים, צוות), זיהוי וניתוח (איתור סממני פריצה — IOCs), בלימה (בידוד — קצר טווח ואז ארוך טווח), מיגור (הסרת תוכנה זדונית, עדכון), שחזור (החזרת שירותים), ולקחים נלמדים (תחקיר תוך שבועיים). המחזור חוזר תמיד על עצמו.",
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
      explanation: "‏מערכת SIEM (ניהול מידע ואירועי אבטחה) אוספת ממקורות: Active Directory, חומת אש, EDR, פרוקסי ווב, DNS. דוגמה לזיהוי מתאמים: 3 כשלי התחברות (ניסיון פיצוח בכוח?) ואז הצלחה + גישה לשרת רגיש = התרעה. כלים נפוצים: Splunk, IBM QRadar, Microsoft Sentinel. אנליסט מרכז תפעול אבטחה (SOC) מבלה 70% מזמנו במערכת SIEM.",
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
      explanation: "‏שלבי בדיקת חדירה: 1) איסוף מודיעין — מקורות פתוחים (OSINT), סריקת DNS. 2) סריקה — באמצעות Nmap, Nikto, Shodan. 3) ניצול — באמצעות Metasploit וניצול פגיעויות (CVE). 4) לאחר הניצול — הסלמת הרשאות, תנועה רוחבית, השגת אחיזה, הברחת מידע. 5) דו\"ח — תקציר מנהלים, פרטים טכניים, ציוני חומרה (CVSS) והמלצות. חשוב: הסכמה בכתב על היקף הבדיקה לפני ההתחלה!",
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
      explanation: "‏בבדיקת קופסה לבנה (Crystal Box) הבודק מקבל קוד מקור, הרשאות ותרשימי ארכיטקטורה — יעיל ויסודי יותר. קופסה אפורה (Gray Box): ידע חלקי, הרשאות בלבד. קופסה שחורה (Black Box): מדמה תוקף אמיתי. צוות אדום (Red Team) הוא קופסה שחורה מורחבת עם הנדסה חברתית וטכניקות פיזיות. קופסה לבנה עדיפה לסקירת קוד; קופסה שחורה לאיתור בעיות שרק תוקף חיצוני ימצא.",
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
      explanation: "‏מסגרת Metasploit (של חברת Rapid7): פותחים את msfconsole, מחפשים ניצול, בוחרים מטען ומריצים. מעטפת Meterpreter (מפרש-על) רצה בזיכרון התהליך שנוצל — אין קובץ בדיסק, מוצפנת ב-TLS. פקודות נפוצות: שליפת גיבובי סיסמאות, הסלמת הרשאות, צילום מסך, מעבר לתהליך אחר. התחמקות: מטענים פולימורפיים וקידוד באמצעות msfvenom.",
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
      explanation: "‏במצב AES-ECB כל 16 בתים מוצפנים באופן עצמאי. אם בתמונה יש שני אזורים באותו צבע — הטקסט המוצפן זהה והדפוס נראה. הדגמה קלאסית: הצפנת תמונת הפינגווין של לינוקס במצב ECB — הצללית עדיין נראית! הפתרון: מצבי שרשור בלוקים (AES-CBC) או הצפנה מאומתת (AES-GCM) שמשתמשים בוקטור אתחול (IV) ושרשור למניעת דפוסים.",
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
      explanation: "‏במנגנון 0-RTT הלקוח שולח נתוני אפליקציה כבר בחבילה הראשונה (באמצעות כרטיס הפעלה מחיבור קודם), וחוסך 1-2 זמני הלוך-חזור. הסיכון: תוקף יכול לשלוח שוב את נתוני ה-0-RTT (מתקפת השחזור — Replay Attack). לכן 0-RTT מוגבל לבקשות שאינן משנות מצב (GET, לא POST עם תשלום). פרוטוקול TLS 1.3 תומך ב-0-RTT, גרסה 1.2 לא.",
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
      explanation: "‏מחולל Dual EC DRBG נכנס לתקן NIST ב-2006. חשיפת סנודן (2013) גילתה שה-NSA שילמה 10 מיליון דולר לחברת RSA Security כדי להפוך אותו לברירת מחדל. הבעיה: שתי נקודות על העקום האליפטי (P ו-Q) נבחרו על ידי ה-NSA — מי שיודע את הקשר ביניהן יכול לחזות את כל הפלט. דלת אחורית מתמטית מושלמת.",
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
      explanation: "‏מערכת SIEM היא מנוע מתאמים. מקבלת: לוגי חומת אש, התרעות EDR, שאילתות DNS, לוגי אירועים של Windows, לוגי ביקורת ענן. שימושים: זיהוי ניסיונות פיצוח בכוח (כשלים רבים בדקה מאותו כתובת IP), תנועה רוחבית (כניסות מ-3 מדינות בשעה), הברחת מידע (העלאה חריגה). שפת שאילתות של Splunk (SPL) מאפשרת ניתוח מתקדם. מערכת SIEM לבדה לא מספיקה — צריך אנליסטים לנתח התרעות.",
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
      explanation: "‏לפי תקן NIST SP 800-61 (ראשי תיבות PICERL): 1) הכנה — נהלים, כלים והדרכות מוכנים מראש. 2) זיהוי — הבנה שמשהו קרה וקביעת היקף. 3) בלימה — בידוד המכונות הנגועות (ניתוק מהרשת). 4) מיגור — מחיקת תוכנה זדונית ועדכון. 5) שחזור — החזרת שירותים וניטור מוגבר. 6) לקחים — מה קרה? איך? מה נשפר? ניתוח שורש הבעיה (RCA). בחברות גדולות קיימים צוותי תגובה ייעודיים (CIRT, CSIRT, CERT).",
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
      explanation: "‏מערכת זיהוי חדירות (IDS) פסיבית — מנתחת תעבורה ומייצרת התרעות (כמו מצלמת אבטחה), ללא חסימה. מערכת מניעת חדירות (IPS) יושבת בתוך נתיב התעבורה ויכולה לחסום חבילות מיידית. זיהוי שגוי (False Positive) במערכת IPS פירושו חסימת תעבורה לגיטימית! לכן מתחילים במצב זיהוי (למידה), מכיילים, ואז עוברים למצב מניעה. קיימות גרסאות מבוססות רשת (NIDS/NIPS) ומבוססות מארח (HIDS/HIPS). כלים פופולריים בקוד פתוח: Snort ו-Suricata.",
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
      explanation: "‏במתקפת זיוף בקשות בצד השרת (SSRF), האפליקציה מקבלת כתובת URL מהמשתמש ומבצעת בקשה אליה. התוקף שולח כתובת פנימית של נקודת מטא-דאטה של AWS — ומקבל הרשאות זמניות! בפרשת Capital One (2019) תוקף ניצל SSRF דרך חומת אש אפליקטיבית (WAF) שהוגדרה לא נכון, השיג הרשאות IAM וגנב 100 מיליון רשומות. מתקפת SSRF בענן נחשבת קריטית.",
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
      explanation: "‏אסימון JWT מורכב משלושה חלקים: כותרת, מטען ייעודי וחתימה. הכותרת מכילה את סוג האלגוריתם. התוקף משנה את האלגוריתם ל-none ומסיר את החתימה. שרת ישן מקבל את האסימון ללא בדיקה. הפתרון: רשימה לבנה של אלגוריתמים בצד השרת — לעולם לא לקבל את סוג האלגוריתם מהאסימון עצמו. קיימת גם מתקפת RS256 ל-HS256: שרת שמצפה ל-RSA משתמש במפתח הציבורי כסוד HMAC.",
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
      explanation: "‏קטגוריות לכידת הדגל (CTF): ווב (הזרקת SQL, סקריפטים חוצי-אתרים — XSS, זיוף בקשות בצד השרת — SSRF, הכללת קבצים, הרצת קוד מרחוק — RCE), ניצול בינארי (גלישת חוצץ, ניצול ערימה, שרשראות ROP), הנדסה לאחור (פירוק קבצים בינאריים עם Ghidra או IDA, הבנת אלגוריתמים), קריפטוגרפיה (פיצוח הצפנות חלשות), פורנזיקה (ניתוח לכידות רשת, קבצים, סטגנוגרפיה), ושונות. פלטפורמות: HackTheBox, TryHackMe, PicoCTF.",
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
      explanation: "‏מפת הסמכות: רמת כניסה — CompTIA A+ ואז Network+ ואז Security+. התקפי — eJPT ואז האקר אתי מוסמך (CEH) ואז OSCP (מבחן מעשי של 24 שעות, קשה מאוד!). הגנתי — אנליסט מרכז תפעול אבטחה (SOC) ואז CySA+ ואז GCIH. ניהולי — CISSP (דורש 5 שנות ניסיון). ענן — AWS Security Specialty ו-GCP Security. תרגול מעשי בתחרויות לכידת הדגל (CTF) ובפלטפורמות כמו HackTheBox חשוב לא פחות מהסמכות.",
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
      explanation: "‏אלגוריתם הצפנה סימטרית (AES) — מהיר מאוד, משמש להצפנת הנתונים. אלגוריתם אסימטרי (RSA) — איטי, משמש לחילופי מפתחות. פרוטוקול TLS משלב את שניהם: RSA להסכמה על מפתח AES, ואז AES להצפנת כל התקשורת. הטוב מכל העולמות!",
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
      explanation: "‏לחיצת יד (TLS Handshake): הלקוח שולח ClientHello, השרת משיב עם ServerHello ותעודה דיגיטלית, מוחלף סוד ראשוני מוצפן ב-RSA, שני הצדדים גוזרים מפתח הפעלה, וסיום. מכאן ואילך: הצפנת AES-256-GCM. אלגוריתם RSA משמש רק בלחיצת היד, AES לכל השאר — מהיר ומאובטח.",
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
      explanation: "‏באג Heartbleed: הלקוח שולח בקשת פעימה (Heartbeat) עם אורך שגוי. השרת מחזיר את האורך שביקשת (עד 64KB) מהזיכרון — תוכן אקראי שעלול לכלול מפתחות פרטיים, סיסמאות ואסימוני הפעלה (Session Tokens). ‏17% מהאינטרנט היה פגיע. הפתרון: שדרוג OpenSSL והחלפת כל התעודות הדיגיטליות.",
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
      explanation: "‏הצפנה סימטרית (AES, ChaCha20): מהירה, מתאימה לכמויות גדולות של נתונים. הבעיה: איך מעבירים את המפתח בצורה מאובטחת? הצפנה אסימטרית (RSA, ECDH): איטית אך מאפשרת חילוף מפתחות מאובטח. מפתח ציבורי = נעילה, מפתח פרטי = פתיחה. פרוטוקול TLS משלב: אסימטרית ללחיצת היד (חילוף מפתח הפעלה), סימטרית להעברת נתונים. RSA עם 2048 סיביות עדיין מאובטח, אך 1024 סיביות שבור!",
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
      explanation: "‏ללא סודיות קדימה מושלמת (PFS): תוקף מקליט תעבורה מוצפנת היום, ובעוד 5 שנים גונב את המפתח הפרטי של השרת ומפענח הכל! עם PFS (באמצעות ECDHE — עקום אליפטי של דיפי-הלמן עם מפתחות זמניים): מפתח ההפעלה נגזר מפרמטרים זמניים שנמחקים מיד. גם עם גניבת המפתח הפרטי — שיחות עבר נשארות מוצפנות. פרוטוקול TLS 1.3 מחייב ECDHE והסיר את חילוף המפתחות באמצעות RSA.",
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
      explanation: "‏תכונות פונקציית גיבוב (Hash): דטרמיניסטית (אותו קלט = אותו פלט תמיד), חד-כיוונית (לא ניתן להפוך), אפקט מפולת (שינוי סיבית אחת בקלט משנה כ-50% מהפלט), עמידות להתנגשויות (קשה מאוד למצוא שני קלטים שונים עם אותו פלט). SHA-256: פלט של 256 סיביות. שימושים: גיבוב סיסמאות (bcrypt ו-Argon2 עדיפים!), חתימות דיגיטליות, טביעות אצבע של תעודות, זיהוי קומיטים ב-Git ובלוקצ'יין. אלגוריתמי MD5 ו-SHA-1 שבורים לחתימות!",
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
      explanation: "‏דיוג המוני (Phishing): 'לקוח יקר' — גנרי. נשלח ל-10 מיליון, 0.1% לוחצים = 10,000 קורבנות. דיוג ממוקד (Spear Phishing): 'שלום דוד, ראיתי שהיית בכנס X ביום ג''. מבוסס על מחקר מלינקדאין, אחוז הצלחה גבוה בהרבה. ציד לוויתנים (Whaling) = דיוג ממוקד נגד מנהלים בכירים. פריצת טוויטר 2020 = דיוג קולי (Vishing) בשיחות טלפון ולא בדוא\"ל.",
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
      explanation: "‏פרשת טוויטר 2020: גרהם קלארק בן 17 עם שותפים. לא פרצו טכנולוגיה — פשוט התקשרו לעובדים, התחזו לתמיכה טכנית וביקשו פרטי גישה. עובד אחד שיתף פעולה. לוח הניהול נתן גישה לכל 330 מיליון החשבונות. נגנבו 120 אלף דולר בביטקוין. הלקח: אימות רב-שלבי (MFA) חזק ואימות זהות בערוץ נפרד = קריטי.",
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
      explanation: "‏ששת עקרונות ההשפעה של צ'יאלדיני: סמכות, דחיפות, הוכחה חברתית, חיבה, הדדיות ומחסור. דחיפות (Urgency) מנטרלת חשיבה ביקורתית — כשאנו בלחץ זמן, לא מוודאים פרטים. דגל אדום: כל הודעה שמכריחה פעולה מיידית ללא זמן לאימות היא חשודה. ארגון לגיטימי תמיד יאפשר לך לוודא.",
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
      explanation: "‏תסריט מוכן (Pretexting): 'שלום, אני דן מה-IT, יש לנו בעיה קריטית עם השרת. אני צריך את הסיסמה שלך לבדיקה דחופה.' דחיפות (Urgency) + סמכות (Authority) = ציות. מפורסם: קווין מיטניק (Kevin Mitnick) השתמש בתסריט מוכן כדי לקבל מידע סודי מחברות תקשורת. הגנה: לעולם אל תשתף סיסמאות! צוות IT לעולם לא יבקש סיסמה. אמת מתקשרים בשיחה חוזרת למספר רשמי.",
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
      explanation: "‏דיוג קולי (Vishing): 'מדבר עם נציג בנק לאומי, יש חשד לפעולה חשודה בחשבון. לאימות זהות צריך ספרות מהכרטיס.' קשה לאמת תקינות שיחה. שכפול קול בבינה מלאכותית (AI Voice Cloning) = הרמה הבאה של דיוג קולי. דיוג בהודעות (Smishing): 'חבילה ממתינה לך, עדכן כתובת: [קישור-מזויף].com' — שיעור לחיצה גבוה מדוא\"ל. דיוג בקוד QR ‏(Quishing) = קודי QR שמובילים לאתר דיוג. הגנה: אל תשתף קוד חד-פעמי (OTP), תמיד פנה ישירות לחברה.",
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
      q: "מה ההבדל בין Authentication ל-Authorization?",
      correct: "‏Authentication = זיהוי ‎(מי אתה?)‎. ‏Authorization = הרשאות ‎(מה מותר לך לעשות?)‎",
      choices: [
        "‏Authentication = זיהוי ‎(מי אתה?)‎. ‏Authorization = הרשאות ‎(מה מותר לך לעשות?)‎",
        "‏Authentication = הרשאות, Authorization = זיהוי",
        "שניהם זהים — שניהם בודקים סיסמה",
        "‏Authentication = HTTPS, Authorization = HTTP"
      ],
      explanation: "‏Authentication (אימות): מי אתה? התחברות עם סיסמה, ביומטריה או תעודה דיגיטלית. ‏Authorization (הרשאה): מה מותר לך? מנגנוני RBAC, ACL, הרשאות. טעות נפוצה: IDOR — משתמש מורשה ניגש למשאב של אחר על ידי שינוי מזהה בכתובת.",
      explanationEn: "AuthN (Authentication): who are you? Login with username+password, biometrics, or certificate. AuthZ (Authorization): what are you allowed to do? RBAC, ACL, permissions. Common mistake: IDOR (Insecure Direct Object Reference) = an AuthZ problem — an authenticated user accesses another user's resource by changing an ID in the URL."
    },
    {
      q: "למה bcrypt עדיף על SHA256 לגיבוב סיסמאות?",
      correct: "‏bcrypt מתוכנן להיות איטי בכוונה (בזכות מנגנון ה-work factor) — פיצוח בכוח לוקח הרבה יותר זמן. ‏SHA256 מהיר מדי וכרטיס מסך שובר אותו בשניות",
      choices: [
        "‏bcrypt מתוכנן להיות איטי בכוונה (בזכות מנגנון ה-work factor) — פיצוח בכוח לוקח הרבה יותר זמן. ‏SHA256 מהיר מדי וכרטיס מסך שובר אותו בשניות",
        "‏bcrypt מצפין, SHA256 רק מבצע גיבוב",
        "‏SHA256 עדיף כי הוא חדש יותר",
        "‏bcrypt מאובטח כי הוא קצר יותר"
      ],
      explanation: "כרטיס מסך (GPU) מודרני מחשב 10 מיליארד SHA256 hashes בשנייה. לעומת זאת, bcrypt עם cost=12 מחשב רק כ-300 בשנייה. פיצוח סיסמה של 8 תווים: ב-SHA256 לוקח שניות, ב-bcrypt לוקח שנים. ‏Argon2id עוד טוב יותר — דורש זיכרון (memory-hard) ומאט גם חומרה ייעודית.",
      explanationEn: "SHA256: a modern GPU computes 10 billion hashes/second. bcrypt cost=12: ~300 hashes/second per GPU. Brute-forcing 8 lowercase characters = 200 billion combinations. With SHA256: seconds. With bcrypt cost=12: years. Argon2id is memory-hard — even ASICs/GPUs are slowed because they need gigabytes of RAM."
    },
    {
      q: "מה פגיעות alg=none ב-JWT?",
      correct: "שרת שמקבל alg=none מאמת טוקן ללא חתימה — תוקף יכול לזייף כל תוכן (למשל user=admin)",
      choices: [
        "שרת שמקבל alg=none מאמת טוקן ללא חתימה — תוקף יכול לזייף כל תוכן (למשל user=admin)",
        "‏JWT עם alg=none מהיר יותר לעיבוד",
        "‏alg=none מצפין עם מפתח סימטרי",
        "‏alg=none נדרש לאפליקציות מובייל"
      ],
      explanation: "כותרת JWT מכילה את האלגוריתם (למשל HS256) + תוכן + חתימה. אם תוקף משנה את האלגוריתם ל-none וחותך את החתימה — שרת פגיע מקבל את הטוקן. התיקון: רשימת אלגוריתמים מותרים בצד שרת בלבד (HS256/RS256). אסור לתת למשתמש לבחור אלגוריתם!",
      explanationEn: "JWT header contains the algorithm (e.g., HS256) + payload + signature. If an attacker changes the header to alg=none and removes the signature, a vulnerable server accepts the unsigned token. Fix: whitelist algorithms on the server side (reject anything other than HS256/RS256). Never let the user choose the algorithm!"
    },
    {
      q: "מה MFA ולמה הוא מגן גם אם סיסמה נגנבה?",
      correct: "אימות רב-שלבי (MFA) מחייב 2+ גורמים: משהו שיודע + משהו שיש לך/שאתה — גנב הסיסמה חסר את הגורם השני",
      choices: [
        "אימות רב-שלבי (MFA) מחייב 2+ גורמים: משהו שיודע + משהו שיש לך/שאתה — גנב הסיסמה חסר את הגורם השני",
        "‏MFA = שתי סיסמאות שונות",
        "‏MFA מצפין את הסיסמה פעמיים",
        "‏MFA = סיסמה ארוכה יותר מ-12 תווים"
      ],
      explanation: "שלושת גורמי האימות: 1) ידע — סיסמה, PIN. 2) חזקה — אפליקציית TOTP, SMS, מפתח חומרה (YubiKey). 3) ביומטריה — טביעת אצבע, זיהוי פנים. MFA משלב 2 גורמים ומעלה. פישינג גונב סיסמה אבל לא קוד TOTP (תוקף ב-AitM יכול לעקוף TOTP). ‏WebAuthn/FIDO2 עמיד לפישינג.",
      explanationEn: "Authentication factors: 1) Knowledge: password, PIN. 2) Possession: TOTP app, SMS, hardware key (YubiKey). 3) Inherence: biometric (fingerprint, face). MFA = combining 2+ factors. Phishing can steal a password, but not a TOTP code (though Adversary-in-the-Middle attacks can intercept TOTP). WebAuthn/FIDO2 = phishing-resistant authentication."
    },
    {
      q: "מה Salt בגיבוב סיסמאות?",
      correct: "ערך אקראי ייחודי שמוסיפים לכל סיסמה לפני גיבוב — מונע טבלאות קשת ומחייב פיצוח נפרד לכל משתמש",
      choices: [
        "ערך אקראי ייחודי שמוסיפים לכל סיסמה לפני גיבוב — מונע טבלאות קשת ומחייב פיצוח נפרד לכל משתמש",
        "מפתח הצפנה סודי שמאחסנים במסד הנתונים",
        "חלק נוסף מהסיסמה שהמשתמש מזין",
        "‏pepper מוסיפים למסד, salt מוסיפים לקוד"
      ],
      explanation: "ללא salt: כל משתמשים עם אותה סיסמה מקבלים אותו hash. טבלת קשת (rainbow table) ממפה hash לסיסמה מראש. עם salt: מוסיפים ערך אקראי לכל סיסמה — כל משתמש מקבל hash שונה. פיצוח חייב לחשב מחדש לכל משתמש בנפרד. ‏bcrypt ו-Argon2 מייצרים salt אוטומטית.",
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
