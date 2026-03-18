#!/usr/bin/env node
/**
 * Transform a single chapter's quiz to Template C style.
 * Usage: node transform_chapter.js <chapterId>
 *
 * Template C rules:
 * 1. Emoji ONLY on section headers in explanations (one emoji per section header)
 * 2. Bullet points with • for sub-items
 * 3. Line breaks (\n) everywhere — every concept on its own line
 * 4. In choices: break long answers into 2-3 lines with \n
 * 5. In explanations: use \n between every line, \n\n between sections
 * 6. Start strings with \u200F for RTL
 * 7. Do NOT touch explanationEn fields
 */

const fs = require('fs');
const path = require('path');

const chapterId = process.argv[2];
if (!chapterId) {
  console.error('Usage: node transform_chapter.js <chapterId>');
  process.exit(1);
}

const filePath = path.join(__dirname, 'src/data/quizBank.js');
let content = fs.readFileSync(filePath, 'utf8');

// Chapter-specific transformed data
const transformedChapters = {
  111: `  111: [
    {
      q: "\\u200Fמה ההבדל בין Authentication ל-Authorization?",
      correct: "\\u200FAuthentication = זיהוי (מי אתה?)\\nAuthorization = הרשאות (מה מותר לך לעשות?)",
      choices: [
        "\\u200FAuthentication = זיהוי (מי אתה?)\\nAuthorization = הרשאות (מה מותר לך לעשות?)",
        "\\u200FAuthentication = הרשאות\\nAuthorization = זיהוי",
        "\\u200Fשניהם זהים\\nשניהם בודקים סיסמה",
        "\\u200FAuthentication = HTTPS\\nAuthorization = HTTP"
      ],
      explanation: "\\u200F🔐 Authentication (אימות) — מי אתה?\\n• התחברות עם סיסמה\\n• ביומטריה או תעודה דיגיטלית\\n\\n🛡️ Authorization (הרשאה) — מה מותר לך?\\n• מנגנוני RBAC, ACL, הרשאות\\n\\n⚠️ טעות נפוצה:\\n• IDOR — משתמש מורשה ניגש למשאב של אחר\\n• על ידי שינוי מזהה בכתובת",
      explanationEn: "AuthN (Authentication): who are you? Login with username+password, biometrics, or certificate. AuthZ (Authorization): what are you allowed to do? RBAC, ACL, permissions. Common mistake: IDOR (Insecure Direct Object Reference) = an AuthZ problem — an authenticated user accesses another user's resource by changing an ID in the URL."
    },
    {
      q: "\\u200Fלמה bcrypt עדיף על SHA256 לגיבוב סיסמאות?",
      correct: "\\u200Fbcrypt מתוכנן להיות איטי בכוונה\\n(בזכות מנגנון ה-work factor)\\nSHA256 מהיר מדי — כרטיס מסך שובר אותו בשניות",
      choices: [
        "\\u200Fbcrypt מתוכנן להיות איטי בכוונה\\n(בזכות מנגנון ה-work factor)\\nSHA256 מהיר מדי — כרטיס מסך שובר אותו בשניות",
        "\\u200Fbcrypt מצפין\\nSHA256 רק מבצע גיבוב",
        "\\u200FSHA256 עדיף כי הוא חדש יותר",
        "\\u200Fbcrypt מאובטח כי הוא קצר יותר"
      ],
      explanation: "\\u200F⚡ מהירות גיבוב — ההבדל הקריטי\\n• GPU מודרני: 10 מיליארד SHA256/שנייה\\n• bcrypt cost=12: רק ~300/שנייה\\n\\n🔓 פיצוח סיסמה של 8 תווים:\\n• SHA256 — שניות\\n• bcrypt — שנים\\n\\n🏆 Argon2id עוד טוב יותר:\\n• דורש זיכרון (memory-hard)\\n• מאט גם חומרה ייעודית",
      explanationEn: "SHA256: a modern GPU computes 10 billion hashes/second. bcrypt cost=12: ~300 hashes/second per GPU. Brute-forcing 8 lowercase characters = 200 billion combinations. With SHA256: seconds. With bcrypt cost=12: years. Argon2id is memory-hard — even ASICs/GPUs are slowed because they need gigabytes of RAM."
    },
    {
      q: "\\u200Fמה פגיעות alg=none ב-JWT?",
      correct: "\\u200Fשרת שמקבל alg=none מאמת טוקן ללא חתימה\\nתוקף יכול לזייף כל תוכן (למשל user=admin)",
      choices: [
        "\\u200Fשרת שמקבל alg=none מאמת טוקן ללא חתימה\\nתוקף יכול לזייף כל תוכן (למשל user=admin)",
        "\\u200FJWT עם alg=none מהיר יותר לעיבוד",
        "\\u200Falg=none מצפין עם מפתח סימטרי",
        "\\u200Falg=none נדרש לאפליקציות מובייל"
      ],
      explanation: "\\u200F🎫 מבנה JWT:\\n• כותרת (אלגוריתם כמו HS256)\\n• תוכן (payload)\\n• חתימה (signature)\\n\\n💥 ההתקפה:\\n• תוקף משנה אלגוריתם ל-none\\n• חותך את החתימה\\n• שרת פגיע מקבל את הטוקן\\n\\n🔧 התיקון:\\n• רשימת אלגוריתמים מותרים בצד שרת בלבד\\n• HS256/RS256 — אסור לתת למשתמש לבחור!",
      explanationEn: "JWT header contains the algorithm (e.g., HS256) + payload + signature. If an attacker changes the header to alg=none and removes the signature, a vulnerable server accepts the unsigned token. Fix: whitelist algorithms on the server side (reject anything other than HS256/RS256). Never let the user choose the algorithm!"
    },
    {
      q: "\\u200Fמה MFA ולמה הוא מגן גם אם סיסמה נגנבה?",
      correct: "\\u200Fאימות רב-שלבי (MFA) מחייב 2+ גורמים:\\nמשהו שיודע + משהו שיש לך/שאתה\\nגנב הסיסמה חסר את הגורם השני",
      choices: [
        "\\u200Fאימות רב-שלבי (MFA) מחייב 2+ גורמים:\\nמשהו שיודע + משהו שיש לך/שאתה\\nגנב הסיסמה חסר את הגורם השני",
        "\\u200FMFA = שתי סיסמאות שונות",
        "\\u200FMFA מצפין את הסיסמה פעמיים",
        "\\u200FMFA = סיסמה ארוכה יותר מ-12 תווים"
      ],
      explanation: "\\u200F🔑 שלושת גורמי האימות:\\n• ידע — סיסמה, PIN\\n• חזקה — אפליקציית TOTP, SMS, מפתח חומרה (YubiKey)\\n• ביומטריה — טביעת אצבע, זיהוי פנים\\n\\n🛡️ MFA משלב 2 גורמים ומעלה:\\n• פישינג גונב סיסמה אבל לא קוד TOTP\\n• תוקף ב-AitM יכול לעקוף TOTP\\n• WebAuthn/FIDO2 עמיד לפישינג",
      explanationEn: "Authentication factors: 1) Knowledge: password, PIN. 2) Possession: TOTP app, SMS, hardware key (YubiKey). 3) Inherence: biometric (fingerprint, face). MFA = combining 2+ factors. Phishing can steal a password, but not a TOTP code (though Adversary-in-the-Middle attacks can intercept TOTP). WebAuthn/FIDO2 = phishing-resistant authentication."
    },
    {
      q: "\\u200Fמה Salt בגיבוב סיסמאות?",
      correct: "\\u200Fערך אקראי ייחודי שמוסיפים לכל סיסמה לפני גיבוב\\nמונע טבלאות קשת ומחייב פיצוח נפרד לכל משתמש",
      choices: [
        "\\u200Fערך אקראי ייחודי שמוסיפים לכל סיסמה לפני גיבוב\\nמונע טבלאות קשת ומחייב פיצוח נפרד לכל משתמש",
        "\\u200Fמפתח הצפנה סודי שמאחסנים במסד הנתונים",
        "\\u200Fחלק נוסף מהסיסמה שהמשתמש מזין",
        "\\u200Fpepper מוסיפים למסד\\nsalt מוסיפים לקוד"
      ],
      explanation: "\\u200F🧂 ללא Salt:\\n• כל משתמשים עם אותה סיסמה = אותו hash\\n• טבלת קשת (rainbow table) ממפה hash לסיסמה מראש\\n\\n✅ עם Salt:\\n• מוסיפים ערך אקראי לכל סיסמה\\n• כל משתמש מקבל hash שונה\\n• פיצוח חייב לחשב מחדש לכל משתמש בנפרד\\n\\n🔧 bcrypt ו-Argon2 מייצרים salt אוטומטית",
      explanationEn: "Without salt: every user with the same password gets the same hash. A rainbow table is a precomputed mapping of hash to plaintext. With salt: hash('password123' + random_salt) — each user's hash is different. Brute-force must recompute for each user. bcrypt/Argon2 generate a salt automatically and store it within the hash string."
    }
  ]`,

  112: `  112: [
    {
      q: "\\u200Fמה CSP (Content-Security-Policy) עושה?",
      correct: "\\u200Fמנחה את הדפדפן מאילו מקורות לטעון סקריפטים\\nמגן מ-XSS על ידי חסימת קוד inline ומקורות זרים",
      choices: [
        "\\u200Fמנחה את הדפדפן מאילו מקורות לטעון סקריפטים\\nמגן מ-XSS על ידי חסימת קוד inline ומקורות זרים",
        "\\u200Fמצפין תוכן בין לקוח לשרת",
        "\\u200Fמסנן תוכן זדוני בצד השרת",
        "\\u200Fמגביל גישה לנקודות API לפי כתובת IP"
      ],
      explanation: "\\u200F🛡️ כותרת CSP מורה לדפדפן לחסום:\\n• JavaScript ממקורות לא מאושרים\\n• סקריפטים inline\\n• קריאות eval\\n\\n🔑 מנגנון nonce:\\n• מייצר מזהה אקראי לכל טעינת דף\\n• רק סקריפט עם nonce נכון מורשה לרוץ\\n\\n📋 מצב Report-Only:\\n• מדווח על חסימות בלי לחסום בפועל",
      explanationEn: "CSP header instructs the browser to block: JS from unapproved sources, inline script tags, and eval(). Nonce: each page load receives a random nonce — only scripts with the matching nonce are allowed. Report-Only mode reports violations without blocking. This is a powerful defense against XSS attacks."
    },
    {
      q: "\\u200Fמה HSTS ולמה הוא מגן מהתקפת SSL Stripping?",
      correct: "\\u200Fכותרת HTTP שמכריחה את הדפדפן לעבוד רק ב-HTTPS\\nניסיון לשדרג לאחור ל-HTTP נכשל",
      choices: [
        "\\u200Fכותרת HTTP שמכריחה את הדפדפן לעבוד רק ב-HTTPS\\nניסיון לשדרג לאחור ל-HTTP נכשל",
        "\\u200Fמאמת תעודת שרת ומסרב לרשויות לא מהימנות",
        "\\u200Fמצפין עוגיות אוטומטית",
        "\\u200Fמגביל חיבורי TLS לגרסה 1.3 בלבד"
      ],
      explanation: "\\u200F🔓 התקפת SSL Stripping:\\n• תוקף באמצע (MITM) מקבל HTTPS מהשרת\\n• משדרג לאחור ל-HTTP עם הלקוח\\n\\n🛡️ כותרת HSTS:\\n• גורמת לדפדפן לזכור: תמיד HTTPS לאתר הזה\\n• גם אם המשתמש כותב http\\n\\n📌 מצב Preload:\\n• מוסיף את האתר לרשימה קבועה בדפדפן\\n• מגן גם בביקור ראשון",
      explanationEn: "SSL Stripping (Moxie Marlinspike 2009): a MITM attacker receives HTTPS from the server but downgrades to HTTP with the client. HSTS: Strict-Transport-Security: max-age=31536000. The browser remembers: always use HTTPS for this site, even if the user types http://. Preload: added to the browser's hardcoded list — protects even the first visit. includeSubDomains is required for preload."
    },
    {
      q: "\\u200Fמה CSRF ואיך SameSite=Strict מגן ממנו?",
      correct: "\\u200Fהתקפת CSRF גורמת לדפדפן לשלוח בקשה לאתר X\\nמאתר זדוני עם העוגיות של X\\nSameSite=Strict מונע שליחת עוגיות בבקשות חוצות-אתרים",
      choices: [
        "\\u200Fהתקפת CSRF גורמת לדפדפן לשלוח בקשה לאתר X\\nמאתר זדוני עם העוגיות של X\\nSameSite=Strict מונע שליחת עוגיות בבקשות חוצות-אתרים",
        "\\u200FCSRF גונבת עוגיות ישירות מהדפדפן",
        "\\u200FCSRF = מסנן בקשות חוצות-אתרים",
        "\\u200FSameSite מצפין עוגיות בין אתרים"
      ],
      explanation: "\\u200F💥 ההתקפה:\\n• באתר זדוני, תגית תמונה עם כתובת של הבנק\\n• הדפדפן שולח בקשה עם העוגיות של הבנק\\n• כי הדפדפן מוסיף עוגיות אוטומטית\\n\\n🛡️ הגנות:\\n• SameSite=Strict — עוגייה נשלחת רק לבקשות מאותו אתר\\n• Lax — רק בניווט\\n• טוקן CSRF — שדה חבוי עם ערך שהשרת יצר\\n• אתר זדוני לא יכול לדעת אותו",
      explanationEn: "In CSRF: a malicious site embeds a request to bank.com, and the browser sends it with the user's cookies (because browsers attach cookies automatically). SameSite=Strict: cookie is sent only for same-site requests. Lax: only for top-level navigation. None: all cross-site (legacy). CSRF token: a hidden field with a server-generated token that the attacker's site cannot know."
    },
    {
      q: "\\u200Fמה X-Frame-Options ולמה חשוב?",
      correct: "\\u200Fמונע טעינת האתר ב-iframe\\nמגן מהתקפת Clickjacking שבה אתר זדוני\\nמסתיר iframe על כפתור שהמשתמש לוחץ",
      choices: [
        "\\u200Fמונע טעינת האתר ב-iframe\\nמגן מהתקפת Clickjacking שבה אתר זדוני\\nמסתיר iframe על כפתור שהמשתמש לוחץ",
        "\\u200Fמגביל קצב פריימים של הדפדפן לחיסכון בחשמל",
        "\\u200Fמצפין כותרות X בבקשת HTTP",
        "\\u200Fמסיר כותרות X מהתגובה לצמצום דליפת מידע"
      ],
      explanation: "\\u200F🖱️ התקפת Clickjacking:\\n• אתר זדוני כולל iframe מוסתר של אתר הבנק\\n• עם כפתור מעליו\\n• המשתמש לוחץ על 'זכה בפרס!'\\n• אבל בפועל לוחץ על 'העבר כסף'\\n\\n🛡️ הגנה:\\n• X-Frame-Options: DENY — אוסר iframe לחלוטין\\n• SAMEORIGIN — מתיר רק מאותו מקור\\n• הגישה המודרנית: CSP frame-ancestors",
      explanationEn: "Clickjacking: a malicious site embeds the target site in a hidden iframe with a button overlay. The user clicks 'Win a Prize!' but actually clicks 'Transfer Money' on the hidden iframe. X-Frame-Options: DENY — never allow framing. SAMEORIGIN — allow only from same origin. Modern alternative: CSP frame-ancestors 'none'. Facebook Like button hijacking was a classic example."
    }
  ]`,

  113: `  113: [
    {
      q: "\\u200Fמה IoC? תן 3 דוגמאות.",
      correct: "\\u200Fסימן לפריצה (Indicator of Compromise)\\nעדות שמערכת נפרצה\\nדוגמאות: IP של שרת שליטה, hash של נוזקה, דומיין זדוני",
      choices: [
        "\\u200Fסימן לפריצה (Indicator of Compromise)\\nעדות שמערכת נפרצה\\nדוגמאות: IP של שרת שליטה, hash של נוזקה, דומיין זדוני",
        "\\u200Fראשי תיבות של Internet of Cybersecurity\\nמכשירי IoT עם אבטחה",
        "\\u200Fמדד פריצה (Index of Compromise)\\nדירוג רמת הפריצה",
        "\\u200Fמרכז תפעול פנימי\\n(Internal Operations Center)"
      ],
      explanation: "\\u200F🔍 סימני פריצה כוללים:\\n• כתובות IP\\n• hash של קבצים (MD5/SHA256)\\n• דומיינים וכתובות URL\\n• נושאי אימייל, מפתחות registry, שמות mutex\\n\\n📡 מקורות:\\n• VirusTotal, AlienVault OTX, MISP, Shodan\\n\\n⏳ סימני פריצה מתיישנים מהר:\\n• כתובת IP או דומיין מתחלפים תוך ימים",
      explanationEn: "IoCs (Indicators of Compromise): IP addresses (C2 servers), file hashes (MD5/SHA256 of malware), domains (phishing/C2), URLs (payload delivery), email subjects/senders, registry keys (persistence), mutex names (malware fingerprints). IoC sources: VirusTotal, AlienVault OTX, MISP, Shodan. IoCs go stale quickly — IPs/domains rotate within days."
    },
    {
      q: "\\u200Fמה MITRE ATT&CK?",
      correct: "\\u200Fמסגרת פתוחה עם 14 טקטיקות\\nומאות טכניקות של קבוצות תקיפה\\nממפה שיטות תקיפה ומקשרת להגנות",
      choices: [
        "\\u200Fמסגרת פתוחה עם 14 טקטיקות\\nומאות טכניקות של קבוצות תקיפה\\nממפה שיטות תקיפה ומקשרת להגנות",
        "\\u200Fתקן הצפנה לנתוני מודיעין איומים",
        "\\u200Fחברת אבטחה שמזהה חתימות נוזקה",
        "\\u200Fפרוטוקול לשיתוף סימני פריצה בין ארגונים"
      ],
      explanation: "\\u200F🗺️ 14 טקטיקות (מה מנסה התוקף):\\n• סיור, גישה ראשונית, הרצה\\n• עמידות, הסלמת הרשאות, התחמקות\\n• גניבת הרשאות, גילוי, תנועה רוחבית\\n• איסוף, שליטה ובקרה (C2)\\n• חילוץ נתונים, ופגיעה\\n\\n📊 כל טקטיקה כוללת:\\n• טכניקות ותת-טכניקות\\n• Navigator מציג ויזואליזציה של כיסוי",
      explanationEn: "MITRE ATT&CK has 14 Tactics (what the attacker is trying to do): Reconnaissance, Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, Command & Control, Exfiltration, Impact. Each Tactic contains Techniques (T1566 = Phishing) and Sub-techniques. Navigator provides coverage visualization. Purple teaming: Red team attacks, Blue team detects."
    },
    {
      q: "\\u200Fמה ההבדל בין סיור פסיבי (Passive) לאקטיבי (Active) ב-OSINT?",
      correct: "\\u200Fסיור פסיבי: מקורות ציבוריים בלי לגעת ביעד (Shodan, WHOIS)\\nסיור אקטיבי: שליחת בקשות ישירות ליעד (nmap) — ניתן לגילוי",
      choices: [
        "\\u200Fסיור פסיבי: מקורות ציבוריים בלי לגעת ביעד (Shodan, WHOIS)\\nסיור אקטיבי: שליחת בקשות ישירות ליעד (nmap) — ניתן לגילוי",
        "\\u200Fפסיבי = ניטור ב-SOC\\nאקטיבי = צוות אדום",
        "\\u200Fפסיבי = איטי\\nאקטיבי = מהיר",
        "\\u200Fפסיבי = ללא כלים\\nאקטיבי = עם כלי אוטומציה"
      ],
      explanation: "\\u200F🔎 סיור פסיבי:\\n• Shodan (סריקה שנעשתה על ידי צד שלישי)\\n• WHOIS, Google Dorks, LinkedIn\\n• היעד לא רואה תעבורה\\n\\n🎯 סיור אקטיבי:\\n• nmap, סריקת פינג, סריקת תיקיות\\n• נרשם בלוגים של היעד\\n\\n📋 בעולם האמיתי:\\n• הגדרת ה-scope קובעת מה מותר\\n• Bug Bounty: בדרך כלל פסיבי בלבד בהתחלה",
      explanationEn: "Passive Recon: Shodan (scans done by a third party), WHOIS, Google Dorks, LinkedIn, theHarvester — the target sees no traffic from you. Active Recon: nmap, ping sweep, directory busting — gets logged by the target. In practice: pentest scope defines what is allowed. Bug Bounty: typically passive-only for initial reconnaissance."
    },
    {
      q: "\\u200Fמה Shodan ואיזה מידע ניתן למצוא בו?",
      correct: "\\u200Fמנוע חיפוש למכשירים המחוברים לאינטרנט\\nמציג פורטים פתוחים, באנרים, תעודות ושירותים פגיעים",
      choices: [
        "\\u200Fמנוע חיפוש למכשירים המחוברים לאינטרנט\\nמציג פורטים פתוחים, באנרים, תעודות ושירותים פגיעים",
        "\\u200Fמנוע חיפוש לתוספים זדוניים במחשב",
        "\\u200Fכלי לניתוח נוזקה של חברת Shodan",
        "\\u200Fשרת DNS שמפרסם מודיעין איומים"
      ],
      explanation: "\\u200F🌐 Shodan סורק את כל כתובות IPv4:\\n• שומר באנרים\\n• חיפוש לפי hostname, פורט, מוצר, מדינה או פגיעות\\n\\n🔍 דוגמאות:\\n• מציאת שרתי Redis חשופים (לרוב ללא אימות)\\n• מכשירים פגיעים לפגם מסוים\\n\\n🔄 כלים דומים:\\n• Censys דומה ל-Shodan\\n• Zoomeye הוא הגרסה הסינית",
      explanationEn: "Shodan scans all of IPv4 and stores banners. Search examples: hostname:example.com port:22 finds exposed SSH. product:Redis finds Redis instances (often without authentication). country:IL vuln:CVE-2017-0144 finds EternalBlue-vulnerable systems. org:'Company Name' finds all their assets. Censys is similar to Shodan. ZoomEye is the Chinese equivalent."
    }
  ]`,

  114: `  114: [
    {
      q: "\\u200Fמה 6 שלבי תגובה לאירוע (Incident Response) לפי NIST?",
      correct: "\\u200FPreparation → Identification → Containment\\n→ Eradication → Recovery → Lessons Learned",
      choices: [
        "\\u200FPreparation → Identification → Containment\\n→ Eradication → Recovery → Lessons Learned",
        "\\u200FDetection → Analysis → Mitigation\\n→ Reporting → Recovery → Review",
        "\\u200FAlert → Triage → Isolate\\n→ Fix → Monitor → Close",
        "\\u200FDiscovery → Escalation → Response\\n→ Patch → Test → Deploy"
      ],
      explanation: "\\u200F📋 מחזור חיי תגובה לאירוע (NIST SP 800-61):\\n• 1) הכנה — נהלים, כלים, הדרכות\\n• 2) זיהוי — התרעה ממערכת SOC/EDR או דיווח משתמש\\n• 3) בלימה — בידוד מיידי + טלאי ארוך טווח\\n• 4) חיסול — הסרת נוזקה, איפוס הרשאות\\n• 5) שחזור — החזרת שירותים עם ניטור מוגבר\\n• 6) לקחים — סקירה תוך שבועיים",
      explanationEn: "IR Lifecycle (NIST SP 800-61): 1) Preparation: runbooks, tools, training. 2) Identification: alert from SOC, EDR, or user report. 3) Containment: short-term (isolate) + long-term (patch). 4) Eradication: remove malware, reset credentials. 5) Recovery: restore services, enhanced monitoring. 6) Lessons Learned: post-mortem within two weeks."
    },
    {
      q: "\\u200Fמה התקפת שרשרת אספקה (Supply Chain Attack)?\\nתן דוגמה ידועה.",
      correct: "\\u200Fתקיפה דרך ספק או תוכנה מהימנה שהארגון משתמש בה\\nSolarWinds: דלת אחורית בעדכון Orion\\nשהתפשטה ל-18,000 לקוחות",
      choices: [
        "\\u200Fתקיפה דרך ספק או תוכנה מהימנה שהארגון משתמש בה\\nSolarWinds: דלת אחורית בעדכון Orion\\nשהתפשטה ל-18,000 לקוחות",
        "\\u200Fתקיפה על שרשרת לוגיסטיקה פיזית",
        "\\u200Fתקיפת הזרקת SQL על מערכת ניהול שרשרת אספקה",
        "\\u200Fתקיפה על עובדי חברה דרך אימייל פישינג"
      ],
      explanation: "\\u200F🔗 דוגמאות להתקפות שרשרת אספקה:\\n• SolarWinds SUNBURST 2020 — דלת אחורית ב-DLL ל-18,000 לקוחות\\n• XZ Utils 2024 — דלת אחורית בספריית דחיסה\\n• חבילות npm זדוניות\\n• פריצת Codecov דרך סקריפט CI/CD\\n\\n🛡️ הגנה:\\n• רשימת רכיבים (SBOM)\\n• חתימת קוד\\n• בניה מבודדת\\n• סריקת תלויות",
      explanationEn: "Supply Chain Attack examples: 1) SolarWinds SUNBURST 2020 — a backdoor in a DLL spread to 18,000 customers. 2) XZ Utils 2024 — backdoor in a compression library. 3) npm malicious packages. 4) Codecov breach — CI/CD script was compromised. Defense: SBOM (Software Bill of Materials), code signing, isolated build processes, dependency scanning (Snyk, Dependabot)."
    },
    {
      q: "\\u200Fמה Volatility ולמה משתמשים בו בתגובה לאירועים?",
      correct: "\\u200Fכלי לניתוח תמונות זיכרון (memory dumps)\\nמזהה תהליכים, חיבורי רשת ונוזקה מוסתרת בזיכרון",
      choices: [
        "\\u200Fכלי לניתוח תמונות זיכרון (memory dumps)\\nמזהה תהליכים, חיבורי רשת ונוזקה מוסתרת בזיכרון",
        "\\u200Fכלי לניהול אחסון נדיף בענן",
        "\\u200Fמערכת SIEM לניתוח לוגים בזמן אמת",
        "\\u200Fכלי לסימולציה של התקפות APT"
      ],
      explanation: "\\u200F🧠 נוזקה ללא קבצים (fileless):\\n• לא כותבת לדיסק — Volatility מגלה אותה\\n\\n🔧 פקודות מועילות:\\n• pslist — תהליכים\\n• netscan — חיבורים\\n• malfind — הזרקת DLL\\n• cmdline — פרמטרים של תהליכים\\n• hashdump — סיסמאות Windows\\n\\n📸 כלי לכידת זיכרון:\\n• WinPMem, Magnet RAM Capture, VMware snapshot",
      explanationEn: "Memory forensics: malware that runs only in RAM (fileless malware) never writes to disk — only memory analysis tools like Volatility can detect it. Useful commands: pslist (processes), netscan (connections), malfind (DLL injection, hollowing), cmdline (process arguments), hashdump (Windows password hashes). Memory capture tools: WinPMem, Magnet RAM Capture, VMware snapshots."
    },
    {
      q: "\\u200Fמה תנועה רוחבית (Lateral Movement) בתגובה לאירועים?",
      correct: "\\u200Fמעבר התוקף בין מכשירים ברשת לאחר גישה ראשונית\\nבאמצעות RDP, SMB, SSH, או Pass-the-Hash",
      choices: [
        "\\u200Fמעבר התוקף בין מכשירים ברשת לאחר גישה ראשונית\\nבאמצעות RDP, SMB, SSH, או Pass-the-Hash",
        "\\u200Fהעברת נתונים מהרשת לשרת חיצוני",
        "\\u200Fעלייה בהרשאות ממשתמש רגיל למנהל",
        "\\u200Fשינוי כיוון תנועת תעבורה ברשת"
      ],
      explanation: "\\u200F🔀 טכניקות תנועה רוחבית:\\n• Pass-the-Hash — שימוש ב-hash של NTLM ישירות ללא סיסמה\\n• Pass-the-Ticket — כרטיס Kerberos גנוב\\n• RDP — גישת GUI בפורט 3389\\n• SMB — עם כלים כמו psexec ו-wmiexec\\n\\n🛡️ בלימה:\\n• פילוח רשת\\n• מחיקת sessions\\n• איפוס אמון ב-Active Directory",
      explanationEn: "Lateral Movement Techniques (MITRE ATT&CK T1550+): Pass-the-Hash (PtH) uses an NTLM hash directly without the password. Pass-the-Ticket uses a stolen Kerberos ticket. RDP: port 3389 for GUI access. SMB: psexec, wmiexec. SSH key propagation. Containment: network segmentation, session termination, resetting Active Directory trusts."
    }
  ]`,

  115: `  115: [
    {
      q: "\\u200Fמה ההבדל בין ניתוח נוזקה סטטי (Static) לדינמי (Dynamic)?",
      correct: "\\u200Fסטטי: בוחנים קובץ ללא הרצה (מחרוזות, ייבואים)\\nדינמי: מריצים בסביבה מבודדת (sandbox) ובוחנים התנהגות",
      choices: [
        "\\u200Fסטטי: בוחנים קובץ ללא הרצה (מחרוזות, ייבואים)\\nדינמי: מריצים בסביבה מבודדת (sandbox) ובוחנים התנהגות",
        "\\u200Fסטטי = ניתוח בזמן אמת\\nדינמי = ניתוח לאחר פריצה",
        "\\u200Fסטטי = במכונה וירטואלית\\nדינמי = על חומרה פיזית",
        "\\u200Fסטטי = כלי Linux\\nדינמי = כלי Windows"
      ],
      explanation: "\\u200F🔬 ניתוח סטטי:\\n• כלים: strings, PEStudio, Ghidra\\n• מגלה מחרוזות קריאות (כתובות URL, IP)\\n• ספריות מיובאות, חריגות בכותרת PE\\n• מוגבל על ידי ערפול (obfuscation)\\n\\n🧪 ניתוח דינמי:\\n• כלים: Cuckoo Sandbox, Process Monitor, Wireshark\\n• מגלה שינויי registry, קבצים שנוצרו\\n• חיבורי C2, הזרקת תהליכים\\n\\n✅ שילוב שניהם = ניתוח מלא",
      explanationEn: "Static analysis: tools like strings, PEStudio, Ghidra. Reveals: readable strings (URLs, IPs), imported DLLs, PE header anomalies. Limited by obfuscation/packing. Dynamic analysis: Cuckoo Sandbox, Process Monitor, Wireshark. Reveals: registry changes, file drops, C2 connections, process injection. Combining both provides full analysis."
    },
    {
      q: "\\u200Fמה Ransomware ואיך מתגוננים?",
      correct: "\\u200Fנוזקה שמצפינה קבצים ודורשת כופר\\nהגנה: גיבויים מנותקים, עדכוני אבטחה\\nסינון אימייל, פילוח רשת",
      choices: [
        "\\u200Fנוזקה שמצפינה קבצים ודורשת כופר\\nהגנה: גיבויים מנותקים, עדכוני אבטחה\\nסינון אימייל, פילוח רשת",
        "\\u200Fנוזקה שגונבת נתונים ומוכרת לדארקנט",
        "\\u200Fכלי לגיטימי להצפנת קבצים לאבטחה",
        "\\u200Fוירוס שמשתמש במעבד לכריית מטבעות"
      ],
      explanation: "\\u200F🔒 שרשרת ההתקפה של כופרה:\\n• פישינג → גישה ראשונית → הסלמת הרשאות\\n• תנועה רוחבית → חילוץ נתונים → הצפנה\\n\\n💰 כופרה כשירות (RaaS):\\n• LockBit, BlackCat\\n\\n🛡️ הגנה — כלל 3-2-1:\\n• 3 עותקים, 2 סוגי מדיה, 1 מנותק\\n• גיבויים בלתי-ניתנים לשינוי\\n• מערכת EDR, סינון באימייל",
      explanationEn: "Ransomware kill chain: Phishing > Initial Access > Privilege Escalation > Lateral Movement > Data Exfiltration > Encryption. RaaS (Ransomware-as-a-Service): LockBit, BlackCat. Defense: 3-2-1 backup rule (3 copies, 2 media types, 1 offsite/offline), immutable backups (Veeam, Azure Immutable), Endpoint Detection & Response (EDR), and email gateway filtering."
    },
    {
      q: "\\u200Fמהם מנגנוני עמידות (Persistence) נפוצים ב-Windows?",
      correct: "\\u200Fמפתחות Run ב-Registry, משימות מתוזמנות\\nשירותים, תיקיית Startup, חטיפת DLL\\nנוזקה שרצה אחרי אתחול",
      choices: [
        "\\u200Fמפתחות Run ב-Registry, משימות מתוזמנות\\nשירותים, תיקיית Startup, חטיפת DLL\\nנוזקה שרצה אחרי אתחול",
        "\\u200FWMI Events, DCOM ו-BITS Jobs בלבד",
        "\\u200Fרק crontab ו-systemd (של Linux)",
        "\\u200Fתוספי דפדפן בלבד"
      ],
      explanation: "\\u200F🪝 מנגנוני עמידות ב-Windows:\\n• 1) מפתחות Run ב-Registry\\n• 2) משימות מתוזמנות (schtasks)\\n• 3) שירותים (sc create)\\n• 4) חטיפת DLL — ספרייה זדונית בנתיב לפני הלגיטימית\\n• 5) מנויי WMI\\n• 6) ברמת האתחול: bootkit\\n\\n🔧 הכלי AutoRuns (Sysinternals):\\n• מציג את כל מנגנוני העמידות\\n• כל רשומת startup צריכה אימות ידני",
      explanationEn: "Windows Persistence mechanisms: 1) Registry Run Keys (HKCU/HKLM\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run). 2) Scheduled Tasks: schtasks /create. 3) Services: sc create. 4) DLL Hijacking: placing a malicious DLL in the path before the legitimate one. 5) WMI subscriptions. 6) Boot/Pre-OS: bootkit. For IR: AutoRuns (Sysinternals) displays all persistence mechanisms."
    },
    {
      q: "\\u200Fמה C2 (שליטה ובקרה) בנוזקה?",
      correct: "\\u200Fתשתית תקשורת בין הנוזקה לתוקף\\nמאפשרת שליחת פקודות, גניבת נתונים ועדכוני נוזקה",
      choices: [
        "\\u200Fתשתית תקשורת בין הנוזקה לתוקף\\nמאפשרת שליחת פקודות, גניבת נתונים ועדכוני נוזקה",
        "\\u200Fשליטה ובקרה = ניהול מנהל מערכת",
        "\\u200Fתוכנה לשליטה בתהליכי CI/CD",
        "\\u200Fחומת אש שמנתבת חבילות"
      ],
      explanation: "\\u200F📡 ערוצי C2 נפוצים:\\n• HTTP/HTTPS — מתחזה לתעבורת רשת רגילה\\n• DNS — ערוץ חשאי בשאילתות DNS\\n• ICMP, רשתות חברתיות\\n\\n🔍 זיהוי:\\n• מרווחי beacon חשודים (הנוזקה מתקשרת בקביעות)\\n• דומיינים נדירים\\n• אלגוריתם DGA (שמות דומיין אקראיים)\\n\\n🛠️ כלי C2 ידועים:\\n• Cobalt Strike, Covenant, Brute Ratel",
      explanationEn: "C2 (Command and Control) channels: HTTP/HTTPS (camouflaged as web traffic), DNS (covert channel in DNS queries), ICMP, Twitter/Slack (social media C2). Detection: suspicious beacon intervals (malware phones home every X seconds), rare domains, DNS DGA (Domain Generation Algorithm — malware generates random domain names). Tools: Cobalt Strike, Covenant, Brute Ratel."
    },
    {
      q: "\\u200Fמה נוזקה ללא קבצים (fileless malware) ולמה קשה לאתר אותה?",
      correct: "\\u200Fנוזקה שרצה רק בזיכרון ולא כותבת לדיסק\\nאנטי-וירוס שסורק קבצים לא מוצא אותה\\nרק חקירת זיכרון מגלה",
      choices: [
        "\\u200Fנוזקה שרצה רק בזיכרון ולא כותבת לדיסק\\nאנטי-וירוס שסורק קבצים לא מוצא אותה\\nרק חקירת זיכרון מגלה",
        "\\u200Fנוזקה שמוחקת את עצמה אחרי ריצה",
        "\\u200Fנוזקה שמסתירה את הסיומת של הקובץ שלה",
        "\\u200Fנוזקה שפועלת בהרשאות נמוכות ללא מנהל"
      ],
      explanation: "\\u200F👻 טכניקות:\\n• PowerShell (טעינת קוד רפלקטיבית)\\n• WMI, החלפת תהליך (Process Hollowing)\\n• הזרקת DLL\\n\\n💡 דוגמה:\\n• PowerShell מריץ payload מקודד ישירות בזיכרון\\n\\n🔍 זיהוי:\\n• מערכת EDR בודקת התנהגות ולא רק קבצים\\n• AMSI סורק סקריפטים של PowerShell\\n• חקירת זיכרון עם Volatility מגלה קוד מוזרק",
      explanationEn: "Fileless malware techniques: PowerShell (reflective loading), WMI, Process Hollowing (replacing a legitimate process with malware), DLL Injection. Example: PowerShell -EncodedCommand <base64> executes a payload directly in RAM. Detection: EDR checks behavior, not just files. AMSI (Antimalware Scan Interface) scans PowerShell scripts. Memory forensics (Volatility) discovers injected code."
    }
  ]`
};

// Only process the requested chapter
const newData = transformedChapters[chapterId];
if (!newData) {
  console.error(`No transformation defined for chapter ${chapterId}`);
  process.exit(1);
}

// Find and replace the chapter
// Match from "  <id>: [" to the closing "]" before the next chapter or end
const chapterRegex = new RegExp(
  `(  ${chapterId}: \\[\\n[\\s\\S]*?\\n  \\])`,
  'm'
);

const match = content.match(chapterRegex);
if (!match) {
  console.error(`Could not find chapter ${chapterId} in file`);
  process.exit(1);
}

content = content.replace(match[0], newData);
fs.writeFileSync(filePath, content, 'utf8');
console.log(`Chapter ${chapterId} transformed to Template C`);
