#!/usr/bin/env python3
"""Inject per-chapter mini-quizzes and practice tools into crypto_bilingual.html."""
import re

SRC = "/home/hila/Desktop/NetworksGuide/מסלול קריפטוגרפיה/crypto_bilingual.html"

with open(SRC, encoding="utf-8") as f:
    html = f.read()

# ── Hebrew chapter quizzes + practice tools ──────────────────────────────────
he_quizzes = {
    "c1": """
<div class="ch-quiz">
  <div class="ch-quiz-title">🧪 בדוק את עצמך</div>
  <div class="ch-q">
    <div class="ch-q-text">מה ההבדל בין Cipher ל-Key?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,1,'cqe1_1')">Cipher הוא המפתח</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,1,'cqe1_1')">Cipher הוא האלגוריתם, Key הוא הסוד</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,1,'cqe1_1')">אין הבדל</button>
    </div>
    <div class="ch-q-exp" id="cqe1_1">Cipher = האלגוריתם (AES, RSA). Key = הסוד שמשנה את התוצאה. אותו cipher עם מפתחות שונים → תוצאות שונות.</div>
  </div>
  <div class="ch-q">
    <div class="ch-q-text">מה אומר Kerckhoffs's Principle?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,0,'cqe1_2')">המערכת בטוחה גם אם הכל ידוע חוץ מהמפתח</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,0,'cqe1_2')">צריך להסתיר את האלגוריתם</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,0,'cqe1_2')">המפתח חייב להיות ארוך מ-256 ביט</button>
    </div>
    <div class="ch-q-exp" id="cqe1_2">Kerckhoffs: אל תסתמך על סודיות האלגוריתם. AES פתוח לכולם — הביטחון מגיע מהמפתח בלבד.</div>
  </div>
</div>
""",
    "c2": """
<div class="ch-quiz">
  <div class="ch-quiz-title">🧪 בדוק את עצמך</div>
  <div class="ch-q">
    <div class="ch-q-text">מה זה Base64?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,1,'cqe2_1')">הצפנה בטוחה</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,1,'cqe2_1')">קידוד — לא הגנה, כל אחד יכול להפוך</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,1,'cqe2_1')">Hash חד-כיווני</button>
    </div>
    <div class="ch-q-exp" id="cqe2_1">Base64 = קידוד פורמט בלבד. כל אחד יכול לפענח. אפס אבטחה.</div>
  </div>
  <div class="ch-q">
    <div class="ch-q-text">מה ההבדל בין Encryption ל-Hashing?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,0,'cqe2_2')">Encryption דו-כיווני, Hashing חד-כיווני</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,0,'cqe2_2')">שניהם זהים</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,0,'cqe2_2')">Hashing דורש מפתח</button>
    </div>
    <div class="ch-q-exp" id="cqe2_2">Encryption = דו-כיווני עם מפתח. Hashing = חד-כיווני, אין חזרה. שימושים שונים לחלוטין.</div>
  </div>
</div>
<div class="ch-practice">
  <div class="ch-practice-title">🔬 תרגול — Base64</div>
  <div class="emu-row"><input class="emu-inp" id="pr2inp" placeholder="Hello"><button class="emu-gbtn" onclick="prB64('pr2inp','pr2out','encode')">→ Base64</button><button class="emu-gbtn" onclick="prB64('pr2inp','pr2out','decode')">Base64 →</button></div>
  <div class="emu-out" id="pr2out"></div>
</div>
""",
    "c3": """
<div class="ch-quiz">
  <div class="ch-quiz-title">🧪 בדוק את עצמך</div>
  <div class="ch-q">
    <div class="ch-q-text">כמה אפשרויות brute force יש ב-Caesar Cipher?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,1,'cqe3_1')">256</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,1,'cqe3_1')">26</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,1,'cqe3_1')">מיליונים</button>
    </div>
    <div class="ch-q-exp" id="cqe3_1">26 הזזות אפשריות בלבד (A-Z). brute force ידני תוך דקה.</div>
  </div>
  <div class="ch-q">
    <div class="ch-q-text">איך שוברים Substitution Cipher?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,0,'cqe3_2')">Frequency Analysis — ספירת תדירות אותיות</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,0,'cqe3_2')">Brute force</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,0,'cqe3_2')">XOR attack</button>
    </div>
    <div class="ch-q-exp" id="cqe3_2">E=12.7% ב-English. האות הנפוצה ביותר ב-ciphertext = כנראה E. שובר substitution.</div>
  </div>
</div>
<div class="ch-practice">
  <div class="ch-practice-title">🔬 תרגול — Caesar Cipher</div>
  <div class="emu-row"><input class="emu-inp" id="pr3inp" placeholder="HELLO"><input class="emu-inp" id="pr3shift" type="number" value="3" style="width:60px"><button class="emu-gbtn" onclick="prCaesar('pr3inp','pr3shift','pr3out')">encrypt</button></div>
  <div class="emu-out" id="pr3out"></div>
</div>
""",
    "c4": """
<div class="ch-quiz">
  <div class="ch-quiz-title">🧪 בדוק את עצמך</div>
  <div class="ch-q">
    <div class="ch-q-text">מה קורה כש-XOR אותו ערך פעמיים? A ⊕ B ⊕ B = ?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,0,'cqe4_1')">A — חוזרים למקור</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,0,'cqe4_1')">B</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,0,'cqe4_1')">0</button>
    </div>
    <div class="ch-q-exp" id="cqe4_1">A⊕B⊕B = A. XOR הפיך! זה הקסם — אותה פעולה מצפינה ומפענחת.</div>
  </div>
  <div class="ch-q">
    <div class="ch-q-text">למה One-Time Pad לא מעשי?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,1,'cqe4_2')">הוא איטי</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,1,'cqe4_2')">מפתח באורך ההודעה + חד-פעמי = אי אפשר לחלק</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,1,'cqe4_2')">הוא לא בטוח</button>
    </div>
    <div class="ch-q-exp" id="cqe4_2">OTP = מפתח אקראי באורך ההודעה, חד-פעמי. איך מעבירים מפתח בגודל 1GB בצורה מאובטחת?</div>
  </div>
</div>
<div class="ch-practice">
  <div class="ch-practice-title">🔬 תרגול — XOR</div>
  <div class="emu-row"><input class="emu-inp" id="pr4inp" placeholder="Hi"><input class="emu-inp" id="pr4key" placeholder="K" style="width:80px"><button class="emu-gbtn" onclick="prXor('pr4inp','pr4key','pr4out')">⊕ XOR</button></div>
  <div class="emu-out" id="pr4out"></div>
</div>
""",
    "c5": """
<div class="ch-quiz">
  <div class="ch-quiz-title">🧪 בדוק את עצמך</div>
  <div class="ch-q">
    <div class="ch-q-text">למה ECB mode מסוכן?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,0,'cqe5_1')">בלוקים זהים → ciphertext זהה → חושף דפוסים</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,0,'cqe5_1')">המפתח קצר</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,0,'cqe5_1')">הוא איטי</button>
    </div>
    <div class="ch-q-exp" id="cqe5_1">ECB Penguin: תמונת פינגווין מוצפנת ב-ECB עדיין מראה פינגווין. בלוקים זהים = ciphertext זהה.</div>
  </div>
  <div class="ch-q">
    <div class="ch-q-text">מה AES-GCM מוסיף על CBC?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,1,'cqe5_2')">מפתח ארוך יותר</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,1,'cqe5_2')">אימות (Authentication) — מזהה שינויים</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,1,'cqe5_2')">דחיסה</button>
    </div>
    <div class="ch-q-exp" id="cqe5_2">GCM = AEAD. מצפין + מוודא שהנתונים לא שונו. CBC מצפין בלבד — תוקף יכול לשנות bits.</div>
  </div>
</div>
""",
    "c6": """
<div class="ch-quiz">
  <div class="ch-quiz-title">🧪 בדוק את עצמך</div>
  <div class="ch-q">
    <div class="ch-q-text">מה ההבדל העיקרי בין Block Cipher ל-Stream Cipher?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,0,'cqe6_1')">Block מצפין בלוקים קבועים, Stream מצפין ביט-ביט</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,0,'cqe6_1')">Stream בטוח יותר</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,0,'cqe6_1')">אין הבדל</button>
    </div>
    <div class="ch-q-exp" id="cqe6_1">Block = בלוקים של 128 ביט. Stream = keystream ⊕ plaintext ביט ביט. שניהם בטוחים אם מיושמים נכון.</div>
  </div>
  <div class="ch-q">
    <div class="ch-q-text">למה Nonce reuse מסוכן?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,1,'cqe6_2')">הוא איטי</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,1,'cqe6_2')">C1⊕C2 = P1⊕P2 — המפתח מתבטל</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,1,'cqe6_2')">גורם ל-buffer overflow</button>
    </div>
    <div class="ch-q-exp" id="cqe6_2">Two-Time Pad: אותו nonce+key → אותו keystream. C1⊕C2 = P1⊕P2. אפשר לחלץ plaintext.</div>
  </div>
</div>
""",
    "c7": """
<div class="ch-quiz">
  <div class="ch-quiz-title">🧪 בדוק את עצמך</div>
  <div class="ch-q">
    <div class="ch-q-text">מה Avalanche Effect?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,1,'cqe7_1')">Hash מהיר יותר</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,1,'cqe7_1')">שינוי ביט אחד → ~50% שינוי ב-hash</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,1,'cqe7_1')">Collision</button>
    </div>
    <div class="ch-q-exp" id="cqe7_1">"hello" → 2cf24dba... אבל "hellp" → 4917b05c... שינוי אות אחת → hash שונה לגמרי.</div>
  </div>
  <div class="ch-q">
    <div class="ch-q-text">מה Salt עושה?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,0,'cqe7_2')">מונע Rainbow Table attacks</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,0,'cqe7_2')">מצפין את ה-hash</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,0,'cqe7_2')">מקצר את ה-hash</button>
    </div>
    <div class="ch-q-exp" id="cqe7_2">Salt = ערך אקראי ייחודי לכל סיסמה. hash("salt123"+password). טבלאות מוכנות מראש לא עוזרות.</div>
  </div>
</div>
<div class="ch-practice">
  <div class="ch-practice-title">🔬 תרגול — SHA-256 Hash</div>
  <div class="emu-row"><input class="emu-inp" id="pr7inp" placeholder="hello"><button class="emu-gbtn" onclick="prHash('pr7inp','pr7out')">SHA-256</button></div>
  <div class="emu-out" id="pr7out"></div>
</div>
""",
    "c8": """
<div class="ch-quiz">
  <div class="ch-quiz-title">🧪 בדוק את עצמך</div>
  <div class="ch-q">
    <div class="ch-q-text">למה SHA-256 לא מספיק לסיסמאות?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,0,'cqe8_1')">הוא מהיר מדי — מיליארד בשנייה = brute force קל</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,0,'cqe8_1')">הוא שבור</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,0,'cqe8_1')">הוא חד-כיווני מדי</button>
    </div>
    <div class="ch-q-exp" id="cqe8_1">SHA-256 מחושב ~1B/שנייה. סיסמה "password" תישבר תוך שניות. KDF כמו Argon2 = 250ms per hash.</div>
  </div>
  <div class="ch-q">
    <div class="ch-q-text">מה מיוחד ב-Argon2 לעומת bcrypt?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,1,'cqe8_2')">הוא מהיר יותר</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,1,'cqe8_2')">הוא Memory-hard — דורש RAM, GPU/ASIC לא עוזרים</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,1,'cqe8_2')">הוא ישן יותר</button>
    </div>
    <div class="ch-q-exp" id="cqe8_2">Argon2 דורש MB של RAM. GPU יש אלפי cores אבל מעט RAM per core → לא מקביל טוב.</div>
  </div>
</div>
<div class="ch-practice">
  <div class="ch-practice-title">🔬 תרגול — חוזק סיסמה</div>
  <div class="emu-row"><input class="emu-inp" id="pr8inp" placeholder="password"><button class="emu-gbtn" onclick="prPasswd('pr8inp','pr8out')">check</button></div>
  <div class="emu-out" id="pr8out"></div>
</div>
""",
    "c9": """
<div class="ch-quiz">
  <div class="ch-quiz-title">🧪 בדוק את עצמך</div>
  <div class="ch-q">
    <div class="ch-q-text">מה הבעיה עם Math.random() לcrypto?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,0,'cqe9_1')">הוא PRNG דטרמיניסטי — seed ידוע = כל הרצף ידוע</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,0,'cqe9_1')">הוא איטי</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,0,'cqe9_1')">הוא יוצר מספרים גדולים מדי</button>
    </div>
    <div class="ch-q-exp" id="cqe9_1">Math.random() = נוסחה. אם יודעים את ה-seed → כל ה-output ידוע. צריך CSPRNG כמו crypto.getRandomValues().</div>
  </div>
</div>
""",
    "c10": """
<div class="ch-quiz">
  <div class="ch-quiz-title">🧪 בדוק את עצמך</div>
  <div class="ch-q">
    <div class="ch-q-text">מה Side Channel Attack?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,1,'cqe10_1')">מתקפה על האלגוריתם</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,1,'cqe10_1')">מדידת זמן/חשמל/רעש של ה-implementation</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,1,'cqe10_1')">Brute force</button>
    </div>
    <div class="ch-q-exp" id="cqe10_1">Side Channel = מידע שדולף מה-implementation: timing, power, cache. לא מהאלגוריתם עצמו.</div>
  </div>
  <div class="ch-q">
    <div class="ch-q-text">מה Heartbleed ניצל?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,0,'cqe10_2')">Buffer over-read ב-OpenSSL — קריאת RAM של השרת</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,0,'cqe10_2')">חולשה ב-AES</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,0,'cqe10_2')">Weak password</button>
    </div>
    <div class="ch-q-exp" id="cqe10_2">Heartbleed = buffer over-read. השרת החזיר 65KB מRAM כולל מפתחות פרטיים. לא שברו AES — שברו implementation.</div>
  </div>
</div>
""",
}

# ── English chapter quizzes + practice tools ─────────────────────────────────
en_quizzes = {
    "c1_en": """
<div class="ch-quiz">
  <div class="ch-quiz-title">🧪 Test Yourself</div>
  <div class="ch-q">
    <div class="ch-q-text">What's the difference between a Cipher and a Key?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,1,'cqe1e_1')">Cipher is the key</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,1,'cqe1e_1')">Cipher is the algorithm, Key is the secret</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,1,'cqe1e_1')">No difference</button>
    </div>
    <div class="ch-q-exp" id="cqe1e_1">Cipher = algorithm (AES, RSA). Key = the secret that changes output. Same cipher + different keys → different results.</div>
  </div>
  <div class="ch-q">
    <div class="ch-q-text">What does Kerckhoffs's Principle state?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,0,'cqe1e_2')">System is secure even if everything is known except the key</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,0,'cqe1e_2')">The algorithm must be kept secret</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,0,'cqe1e_2')">Keys must be longer than 256 bits</button>
    </div>
    <div class="ch-q-exp" id="cqe1e_2">Kerckhoffs: Don't rely on algorithm secrecy. AES is public — security comes from the key alone.</div>
  </div>
</div>
""",
    "c2_en": """
<div class="ch-quiz">
  <div class="ch-quiz-title">🧪 Test Yourself</div>
  <div class="ch-q">
    <div class="ch-q-text">What is Base64?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,1,'cqe2e_1')">Secure encryption</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,1,'cqe2e_1')">Encoding — not protection, anyone can reverse it</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,1,'cqe2e_1')">One-way hash</button>
    </div>
    <div class="ch-q-exp" id="cqe2e_1">Base64 = format encoding only. Anyone can decode it. Zero security.</div>
  </div>
</div>
<div class="ch-practice">
  <div class="ch-practice-title">🔬 Practice — Base64</div>
  <div class="emu-row"><input class="emu-inp" id="pr2einp" placeholder="Hello"><button class="emu-gbtn" onclick="prB64('pr2einp','pr2eout','encode')">→ Base64</button><button class="emu-gbtn" onclick="prB64('pr2einp','pr2eout','decode')">Base64 →</button></div>
  <div class="emu-out" id="pr2eout"></div>
</div>
""",
    "c3_en": """
<div class="ch-quiz">
  <div class="ch-quiz-title">🧪 Test Yourself</div>
  <div class="ch-q">
    <div class="ch-q-text">How many brute force possibilities does Caesar Cipher have?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,1,'cqe3e_1')">256</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,1,'cqe3e_1')">26</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,1,'cqe3e_1')">Millions</button>
    </div>
    <div class="ch-q-exp" id="cqe3e_1">Only 26 possible shifts (A-Z). Manual brute force in under a minute.</div>
  </div>
</div>
<div class="ch-practice">
  <div class="ch-practice-title">🔬 Practice — Caesar Cipher</div>
  <div class="emu-row"><input class="emu-inp" id="pr3einp" placeholder="HELLO"><input class="emu-inp" id="pr3eshift" type="number" value="3" style="width:60px"><button class="emu-gbtn" onclick="prCaesar('pr3einp','pr3eshift','pr3eout')">encrypt</button></div>
  <div class="emu-out" id="pr3eout"></div>
</div>
""",
    "c4_en": """
<div class="ch-quiz">
  <div class="ch-quiz-title">🧪 Test Yourself</div>
  <div class="ch-q">
    <div class="ch-q-text">What happens when you XOR the same value twice? A ⊕ B ⊕ B = ?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,0,'cqe4e_1')">A — back to original</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,0,'cqe4e_1')">B</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,0,'cqe4e_1')">0</button>
    </div>
    <div class="ch-q-exp" id="cqe4e_1">A⊕B⊕B = A. XOR is reversible! Same operation encrypts and decrypts.</div>
  </div>
</div>
<div class="ch-practice">
  <div class="ch-practice-title">🔬 Practice — XOR</div>
  <div class="emu-row"><input class="emu-inp" id="pr4einp" placeholder="Hi"><input class="emu-inp" id="pr4ekey" placeholder="K" style="width:80px"><button class="emu-gbtn" onclick="prXor('pr4einp','pr4ekey','pr4eout')">⊕ XOR</button></div>
  <div class="emu-out" id="pr4eout"></div>
</div>
""",
    "c5_en": """
<div class="ch-quiz">
  <div class="ch-quiz-title">🧪 Test Yourself</div>
  <div class="ch-q">
    <div class="ch-q-text">Why is ECB mode dangerous?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,0,'cqe5e_1')">Identical blocks → identical ciphertext → reveals patterns</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,0,'cqe5e_1')">Short key</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,0,'cqe5e_1')">Too slow</button>
    </div>
    <div class="ch-q-exp" id="cqe5e_1">ECB Penguin: encrypting a penguin image with ECB still shows a penguin. Identical blocks = identical ciphertext.</div>
  </div>
</div>
""",
    "c6_en": """
<div class="ch-quiz">
  <div class="ch-quiz-title">🧪 Test Yourself</div>
  <div class="ch-q">
    <div class="ch-q-text">Why is nonce reuse dangerous?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,1,'cqe6e_1')">It's slow</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,1,'cqe6e_1')">C1⊕C2 = P1⊕P2 — key cancels out</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,1,'cqe6e_1')">Causes buffer overflow</button>
    </div>
    <div class="ch-q-exp" id="cqe6e_1">Two-Time Pad: same nonce+key → same keystream. C1⊕C2 = P1⊕P2. Plaintext can be extracted.</div>
  </div>
</div>
""",
    "c7_en": """
<div class="ch-quiz">
  <div class="ch-quiz-title">🧪 Test Yourself</div>
  <div class="ch-q">
    <div class="ch-q-text">What is the Avalanche Effect?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,1,'cqe7e_1')">Faster hash</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,1,'cqe7e_1')">Changing 1 bit → ~50% of hash changes</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,1,'cqe7e_1')">Collision</button>
    </div>
    <div class="ch-q-exp" id="cqe7e_1">"hello" → 2cf24dba... but "hellp" → 4917b05c... One letter change → completely different hash.</div>
  </div>
</div>
<div class="ch-practice">
  <div class="ch-practice-title">🔬 Practice — SHA-256 Hash</div>
  <div class="emu-row"><input class="emu-inp" id="pr7einp" placeholder="hello"><button class="emu-gbtn" onclick="prHash('pr7einp','pr7eout')">SHA-256</button></div>
  <div class="emu-out" id="pr7eout"></div>
</div>
""",
    "c8_en": """
<div class="ch-quiz">
  <div class="ch-quiz-title">🧪 Test Yourself</div>
  <div class="ch-q">
    <div class="ch-q-text">Why isn't SHA-256 enough for passwords?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,0,'cqe8e_1')">Too fast — billions per second = easy brute force</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,0,'cqe8e_1')">It's broken</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,0,'cqe8e_1')">Too one-way</button>
    </div>
    <div class="ch-q-exp" id="cqe8e_1">SHA-256 computes ~1B/sec. Password "password" cracked in seconds. KDF like Argon2 = 250ms per hash.</div>
  </div>
</div>
<div class="ch-practice">
  <div class="ch-practice-title">🔬 Practice — Password Strength</div>
  <div class="emu-row"><input class="emu-inp" id="pr8einp" placeholder="password"><button class="emu-gbtn" onclick="prPasswd('pr8einp','pr8eout')">check</button></div>
  <div class="emu-out" id="pr8eout"></div>
</div>
""",
    "c9_en": """
<div class="ch-quiz">
  <div class="ch-quiz-title">🧪 Test Yourself</div>
  <div class="ch-q">
    <div class="ch-q-text">What's wrong with Math.random() for crypto?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,0,'cqe9e_1')">It's a deterministic PRNG — known seed = known output</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,0,'cqe9e_1')">It's slow</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,0,'cqe9e_1')">Numbers are too large</button>
    </div>
    <div class="ch-q-exp" id="cqe9e_1">Math.random() = formula. Known seed → all output known. Use CSPRNG: crypto.getRandomValues().</div>
  </div>
</div>
""",
    "c10_en": """
<div class="ch-quiz">
  <div class="ch-quiz-title">🧪 Test Yourself</div>
  <div class="ch-q">
    <div class="ch-q-text">What is a Side Channel Attack?</div>
    <div class="ch-q-opts">
      <button class="ch-q-opt" onclick="chkQ(this,0,1,'cqe10e_1')">Attack on the algorithm</button>
      <button class="ch-q-opt" onclick="chkQ(this,1,1,'cqe10e_1')">Measuring timing/power/noise of the implementation</button>
      <button class="ch-q-opt" onclick="chkQ(this,2,1,'cqe10e_1')">Brute force</button>
    </div>
    <div class="ch-q-exp" id="cqe10e_1">Side Channel = info leaking from implementation: timing, power, cache. Not from the algorithm itself.</div>
  </div>
</div>
""",
}

# ── Inject quizzes into chapters ─────────────────────────────────────────────
count = 0
for ch_id, quiz_html in {**he_quizzes, **en_quizzes}.items():
    # Find the glossary end (or pro-tips end) for this chapter, then insert before closing tags
    # Pattern: end of chapter inner content before </div></div>\n</div>
    # We look for the closing of ch-inner for this specific chapter

    # Find chapter opening
    ch_pattern = f'id="{ch_id}"'
    ch_start = html.find(ch_pattern)
    if ch_start == -1:
        print(f"WARNING: {ch_id} not found")
        continue

    # Find the ch-inner closing: we need the first </div></div>\n</div> after ch_start
    # that ends the chapter. Look for next chapter or section boundary.
    search_start = ch_start

    # Find next chapter or section
    next_markers = []
    for marker in ['<!-- CH ', '<div class="ch" id="c', '<div class="en-b">', '</div></div></div>', '<div id="labs"']:
        pos = html.find(marker, search_start + 100)
        if pos != -1:
            next_markers.append(pos)

    if not next_markers:
        continue

    boundary = min(next_markers)

    # Find the last </div></div> before boundary — that's the ch-inner + ch-body closing
    # We want to insert before the closing of ch-inner
    # The pattern is: content...</div></div>\n</div>
    # Where first </div> = ch-inner, second = ch-body, third = ch

    # Find last occurrence of </div></div> before boundary
    insert_pos = html.rfind('</div></div>', search_start, boundary)
    if insert_pos == -1:
        print(f"WARNING: closing tags not found for {ch_id}")
        continue

    # Insert quiz before </div></div>
    html = html[:insert_pos] + quiz_html + html[insert_pos:]
    count += 1
    print(f"  Injected quiz into {ch_id}")

print(f"\nTotal injected: {count}")

with open(SRC, "w", encoding="utf-8") as f:
    f.write(html)

print("Done!")
