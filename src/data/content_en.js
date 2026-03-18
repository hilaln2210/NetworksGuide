/**
 * English translations for chapter content.
 * Structure: { [chapterId]: { titleEn, pages: [{ titleEn, contentEn? }] } }
 * Only pages with contentEn are translated; others fall back to Hebrew.
 * Simulations, thinkOutside, and questions pages don't need contentEn.
 *
 * Language level: A2–B1 (simple vocabulary, short sentences).
 */

export const contentEn = {

  // ========== CHAPTER 1 ==========
  1: {
    titleEn: "Starting the Journey — How Does the Internet Work?",
    pages: [
      {
        // Page 0: explanation
        titleEn: "What happens when we browse a website?",
        contentEn: `
          <p>Most of us have visited <code>Facebook</code>.</p>
          <p>But what actually happens behind the scenes?</p>
          <p>We type <code>www.facebook.com</code> in the browser, press Enter — and get the page.</p>
          <p><strong>A website needs four things to work:</strong></p>
          <ul>
            <li><strong>Storage</strong> — a place for the website files</li>
            <li><strong>Design</strong> — logo, layout of elements</li>
            <li><strong>Authentication</strong> — identifying users</li>
            <li><strong>Communication</strong> — a way to reach the website from anywhere in the world</li>
          </ul>
          <p>This book focuses on <strong>communication</strong>.</p>
          <p>We will learn how data moves between electronic devices.</p>
        `
      },
      {
        // Page 1: explanation — WWW
        titleEn: "WWW – World Wide Web",
        contentEn: `
          <p><strong>WWW</strong> — <code>World Wide Web</code></p>
          <p>When we say "the Internet," we usually mean the web pages we visit in a browser.</p>
          <p>The word <code>Web</code> means network — web pages are linked to each other like a spider's web.</p>
          <p><strong>Request</strong> — <code>Request</code></p>
          <p>The browser sends a request to the server — "send me the data I need."</p>
          <p><strong>Response</strong> — <code>Response</code></p>
          <p>The server replies with a response that contains the data.</p>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 400 140" class="content-diagram">
              <rect x="30" y="20" width="90" height="60" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>
              <text x="75" y="50" text-anchor="middle" font-size="12" fill="var(--text)">Client</text>
              <text x="75" y="65" text-anchor="middle" font-size="10" fill="var(--text-muted)">(Browser)</text>
              <path d="M 125 50 L 175 50" stroke="var(--accent-green)" stroke-width="2" marker-end="url(#arrow)"/>
              <text x="150" y="40" text-anchor="middle" font-size="9" fill="var(--accent-green)">Request</text>
              <path d="M 275 50 L 225 50" stroke="var(--accent-gold)" stroke-width="2" marker-end="url(#arrow2)"/>
              <text x="250" y="40" text-anchor="middle" font-size="9" fill="var(--accent-gold)">Response</text>
              <rect x="280" y="20" width="90" height="60" rx="8" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>
              <text x="325" y="50" text-anchor="middle" font-size="12" fill="var(--text)">Server</text>
              <text x="325" y="65" text-anchor="middle" font-size="10" fill="var(--text-muted)">(Website)</text>
              <defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="var(--accent-green)"/></marker>
              <marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><polygon points="0 0, 6 3, 0 6" fill="var(--accent-gold)"/></marker></defs>
            </svg>
            <p class="diagram-caption">Diagram: Client-Server communication</p>
          </div>
          <p>The website receives requests and sends responses — it provides a service.</p>
          <p><strong>Server</strong> — The website is the server.</p>
          <p><strong>Client</strong> — The browser is the client.</p>
        `
      },
      {
        // Page 2: demo — what the server sends
        titleEn: "Demo: What the Server Sends to the Client",
        contentEn: `
          <p>When you choose <code>View page source</code> on a website, you see the code the server sent.</p>
          <p><strong>Example:</strong> This is what the server returns:</p>
          <div class="code-preview">
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;title&gt;Main Page - News Site&lt;/title&gt;
  &lt;meta charset="UTF-8"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Main Heading of the Page&lt;/h1&gt;
  &lt;p&gt;Text shown to the user...&lt;/p&gt;
  &lt;img src="/images/photo.jpg" alt="Photo"&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
          </div>
          <ul>
            <li><code>HTML</code> — the language of web pages</li>
            <li><code>&lt;h1&gt;</code> — heading</li>
            <li><code>&lt;p&gt;</code> — paragraph (text)</li>
            <li><code>&lt;img&gt;</code> — image</li>
          </ul>
          <p>The browser reads this code and shows you a nice page with colors, images, and text.</p>
          <p>This is what happens every time you open a website.</p>
        `
      },
      {
        // Page 3: explanation — IP Addresses
        titleEn: "IP Addresses",
        contentEn: `
          <p>To send and receive messages on the Internet, you need to know where to send them.</p>
          <p>Like a letter — you write a destination address and a return address on the envelope.</p>
          <p><strong>IP Addresses</strong></p>
          <p>On the Internet, addresses are called <code>IP</code> addresses.</p>
          <div class="diagram-container">
            <svg direction="ltr" viewBox="0 0 340 70" class="content-diagram">
              <rect x="10" y="15" width="70" height="40" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="45" y="40" text-anchor="middle" font-size="12" fill="var(--text)">Byte 1</text>
              <text x="45" y="55" text-anchor="middle" font-size="9" fill="var(--text-muted)">0-255</text>
              <text x="88" y="40" text-anchor="middle" font-size="16" fill="var(--text-muted)">.</text>
              <rect x="95" y="15" width="70" height="40" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="130" y="40" text-anchor="middle" font-size="12" fill="var(--text)">Byte 2</text>
              <text x="130" y="55" text-anchor="middle" font-size="9" fill="var(--text-muted)">0-255</text>
              <text x="173" y="40" text-anchor="middle" font-size="16" fill="var(--text-muted)">.</text>
              <rect x="180" y="15" width="70" height="40" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="215" y="40" text-anchor="middle" font-size="12" fill="var(--text)">Byte 3</text>
              <text x="215" y="55" text-anchor="middle" font-size="9" fill="var(--text-muted)">0-255</text>
              <text x="258" y="40" text-anchor="middle" font-size="16" fill="var(--text-muted)">.</text>
              <rect x="265" y="15" width="70" height="40" rx="4" fill="var(--accent-soft)" stroke="var(--accent)"/>
              <text x="300" y="40" text-anchor="middle" font-size="12" fill="var(--text)">Byte 4</text>
              <text x="300" y="55" text-anchor="middle" font-size="9" fill="var(--text-muted)">0-255</text>
            </svg>
            <p class="diagram-caption">An IP address has 4 bytes (numbers 0–255)</p>
          </div>
          <p>Example: <code>192.168.1.1</code></p>
          <p>Each number is between 0 and 255. This is called <code>IPv4</code>.</p>
          <p><strong>Port</strong> — a number that tells which program on the computer should get the message.</p>
          <p>Think of the IP address as a building address, and the port as the apartment number.</p>
          <p>Example: <code>192.168.1.1:443</code> — IP address <code>192.168.1.1</code>, port <code>443</code> (HTTPS).</p>
        `
      },
      {
        // Page 4: demo — ping output
        titleEn: "Demo: Output of the ping Command",
        contentEn: `
          <p>When you run <code>ping www.facebook.com</code>, this output appears:</p>
          <div class="code-preview">
            <pre><code>C:&gt; ping www.facebook.com

Pinging facebook.com [31.13.72.65] with 32 bytes of data:
Reply from 31.13.72.65: bytes=32 time=45ms TTL=56
Reply from 31.13.72.65: bytes=32 time=42ms TTL=56</code></pre>
          </div>
          <div class="demo-note">
            <ul>
              <li>In the line <code>Pinging facebook.com [31.13.72.65]</code> — the number in brackets is the IP address of Facebook's server.</li>
              <li><code>time=45ms</code> — it took 45 milliseconds for the message to go and come back.</li>
              <li><code>TTL=56</code> — Time To Live. The message can pass through up to 56 more routers before it is dropped.</li>
            </ul>
          </div>
          <p><strong>What is <code>ping</code>?</strong></p>
          <p>A command that sends a small message to a server and waits for a reply.</p>
          <ul>
            <li>If you get a reply — the connection works.</li>
            <li>If there is no reply — something is wrong (the server is down, or you are not connected).</li>
          </ul>
        `
      },
      {
        // Page 5: explanation — The Internet Cloud
        titleEn: "The Internet Cloud",
        contentEn: `
          <p>Our computer is not connected directly to <code>Facebook</code>.</p>
          <p>It connects to a device that finds its way to other devices — a network of devices that pass the message from our computer all the way to the destination server.</p>
          <p>Each arrow between devices represents a link (data link layer communication).</p>
        `
      },
      {
        // Page 6: explanation — traceroute
        titleEn: "traceroute — The Path of a Message",
        contentEn: `
          <p><strong><code>traceroute</code></strong></p>
          <p>A tool that shows the path a message takes from our computer to the destination.</p>
          <p>Each line in the output is one device — a router or server — that the packet passed through.</p>
          <p>Each step is called a <code>hop</code>.</p>
          <p>Visual tool: <code>Visual Traceroute</code> on <a href="http://yougetsignal.com/tools/visual-tracert" target="_blank">yougetsignal.com</a>.</p>
          <p>It shows the route on a world map.</p>
        `
      },
      {
        // Page 7: explanation — DNS
        titleEn: "DNS — Translates Names to IP Addresses",
        contentEn: `
          <p><strong><code>DNS</code></strong> — <code>Domain Name System</code></p>
          <p>A system that translates domain names to <code>IP</code> addresses.</p>
          <p>Example: the name <code>www.facebook.com</code> is translated to a numeric <code>IP</code> address.</p>
          <p>The command <code>nslookup www.facebook.com</code> sends a <code>DNS</code> query and shows the <code>IP</code> address.</p>
        `
      },
      {}, // Page 8: simulation — skip
      {}, // Page 9: simulation — skip
      {
        // Page 10: explanation — GeoIP
        titleEn: "GeoIP — Geographic Location",
        contentEn: `
          <p><strong><code>GeoIP</code></strong> — Geographic location by <code>IP</code> address</p>
          <p>There are databases that contain location information for <code>IP</code> addresses.</p>
          <p>Given an <code>IP</code> address, you can find out which country and city it belongs to.</p>
          <p>The mapping is not official and not exact, but it gives the right answer in most cases.</p>
          <p><strong>Example:</strong> <a href="http://www.geoiptool.com" target="_blank">geoiptool.com</a></p>
        `
      },
      {}, // Page 11: thinkOutside — skip
      {
        // Page 12: summary
        titleEn: "Chapter 1 Summary",
        contentEn: `
          <div class="chapter-summary">
            <h3>Key Points:</h3>
            <ul>
              <li>Client-Server model: the browser sends a request, the server returns a response</li>
              <li><code>IP</code> addresses identify computers — 4 bytes, each 0–255</li>
              <li><code>ping</code> — checks the connection, finds the <code>IP</code>. <code>traceroute</code> — shows the path of packets</li>
              <li><code>DNS</code> translates a domain name — <code>www.facebook.com</code> — to an <code>IP</code>. <code>nslookup</code> — sends a <code>DNS</code> query</li>
              <li>A port is a number that identifies which service on a computer receives the message</li>
            </ul>
          </div>
        `
      },
      {
        // Page 13: demo — nslookup
        titleEn: "Demo: Output of nslookup",
        contentEn: `
          <p>When you run <code>nslookup www.google.com</code>, this is the output:</p>
          <div class="code-preview">
            <pre><code>C:&gt; nslookup www.google.com

Non-authoritative answer:
Name:    www.google.com
Addresses:  142.250.185.46
            2a00:1450:4010:c08::8b</code></pre>
          </div>
          <div class="demo-note">
            <ul>
              <li>The first address is <code>IPv4</code>, the second is <code>IPv6</code></li>
              <li><code>Non-authoritative</code> means the answer came from a cache, not the main DNS server</li>
              <li>Try it yourself: open the terminal and type <code>nslookup</code> followed by any website name</li>
            </ul>
          </div>
        `
      },
      {}, // Page 14: questions — skip
    ]
  },

  // ========== CHAPTER 2 ==========
  2: {
    titleEn: "Socket Programming",
    pages: [
      {
        titleEn: "What is a Socket?",
      },
      {
        titleEn: "Client-Server Model with Sockets",
      },
      {
        titleEn: "Client Code in Python",
      },
      {
        titleEn: "Server Code in Python",
      },
      {
        titleEn: "Echo Server and Command Server",
      },
      {
        titleEn: "127.0.0.1 and 0.0.0.0",
      },
      {}, // summary
      {}, // questions
    ]
  },

  // ========== CHAPTER 3 ==========
  3: {
    titleEn: "Wireshark and the Five-Layer Model",
    pages: [
      { titleEn: "What Happens When We Communicate?" },
      { titleEn: "Why Do We Need a Layer Model?" },
      { titleEn: "Analogy — Flying at an Airport" },
      { titleEn: "Five-Layer Model — Overview" },
      { titleEn: "Protocol — Definition" },
      { titleEn: "Encapsulation and Decapsulation" },
      { titleEn: "Packet Structure — Each Layer Adds a Header" },
      { titleEn: "Each Layer in Detail — Services" },
      { titleEn: "Using Wireshark" },
      {}, // summary
      {}, // thinkOutside
      {}, // questions
    ]
  },

  // ========== CHAPTER 4 ==========
  4: {
    titleEn: "The Application Layer",
    pages: [
      { titleEn: "What is the Application Layer?" },
      { titleEn: "HTTP Protocol — Request and Response" },
      { titleEn: "HTTP Structure — Lines and Headers" },
      { titleEn: "Using telnet for HTTP Requests" },
      { titleEn: "Simple HTTP Server in Python" },
      { titleEn: "HTTP Status Codes and Headers" },
      { titleEn: "DNS Protocol" },
      { titleEn: "GET and POST Requests" },
      { titleEn: "Network Resources — Full URL" },
      { titleEn: "Google Maps — Example of Network Resources" },
      {}, // summary
      {}, // thinkOutside
      {}, // questions
    ]
  },

  // ========== CHAPTER 5 ==========
  5: {
    titleEn: "Scapy",
    pages: [
      { titleEn: "Introduction to Scapy" },
      { titleEn: "Basic Sniffing with Scapy" },
      { titleEn: "Filtering Packets — lfilter" },
      { titleEn: "Building Packets — IPv4/TCP/ICMP" },
      { titleEn: "Sending Packets" },
      { titleEn: "Advanced Sniffing — Field Details" },
      {}, // summary
      {}, // questions
    ]
  },

  // ========== CHAPTER 6 ==========
  6: {
    titleEn: "The Transport Layer",
    pages: [
      { titleEn: "Role of the Transport Layer" },
      { titleEn: "Ports" },
      { titleEn: "The netstat Command" },
      { titleEn: "TCP vs UDP" },
      { titleEn: "TCP Handshake — Three Steps" },
      { titleEn: "TCP Handshake Simulation" },
      { titleEn: "Sequence Number and Acknowledgment" },
      { titleEn: "Well-Known and Ephemeral Ports" },
      {}, // summary
      {}, // questions
    ]
  },

  // ========== CHAPTER 7 ==========
  7: {
    titleEn: "The Network Layer",
    pages: [
      { titleEn: "Role of the Network Layer" },
      { titleEn: "Packets" },
      { titleEn: "IP Packet Structure — Header and Fields" },
      { titleEn: "Subnet Mask and Default Gateway" },
      { titleEn: "ICMP / DHCP / NAT" },
      { titleEn: "IPv4 vs IPv6" },
      { titleEn: "Fiber Optic" },
      { titleEn: "Traceroute" },
      { titleEn: "Routing Table" },
      {}, // story
      {}, // summary
      {}, // questions
    ]
  },

  // ========== CHAPTER 8 ==========
  8: {
    titleEn: "The Data Link Layer",
    pages: [
      { titleEn: "Role of the Data Link Layer" },
      { titleEn: "Ethernet and MAC Addresses" },
      { titleEn: "Ethernet Frame Structure" },
      { titleEn: "ipconfig" },
      { titleEn: "ARP Protocol" },
      {}, // simulation
      {}, // summary
      {}, // questions
    ]
  },

  // ========== CHAPTERS 9-26: titles only for now ==========
  9: { titleEn: "Network Devices", pages: [] },
  10: { titleEn: "The Physical Layer", pages: [] },
  11: { titleEn: "How It All Connects", pages: [] },
  12: { titleEn: "Advanced Socket Programming", pages: [] },
  13: { titleEn: "Glossary of Terms", pages: [] },
  14: { titleEn: "Commands and Tools", pages: [] },
  15: { titleEn: "HTTPS and TLS — Encrypted Communication", pages: [] },
  16: { titleEn: "Application Protocols — Email, FTP, SSH", pages: [] },
  17: { titleEn: "Subnetting and CIDR — Network Division", pages: [] },
  18: { titleEn: "IPv6 — The New Internet Version", pages: [] },
  19: { titleEn: "DNS in Depth — Hierarchy, Records, and DoH", pages: [] },
  20: { titleEn: "TCP in Depth — Flow Control, Congestion, Sliding Window", pages: [] },
  21: { titleEn: "VPN and Network Security", pages: [] },
  22: { titleEn: "Modern Internet Architecture — CDN, Load Balancer, HTTP/2", pages: [] },
  23: { titleEn: "Failures and Recovery — Internet Crash Stories", pages: [] },
  24: { titleEn: "Behind the Scenes — Networks of the Giants", pages: [] },
  25: { titleEn: "Privacy and Tracking — What They Really See About You", pages: [] },
  26: { titleEn: "The Future Is Here — QUIC, eBPF, and Edge", pages: [] },

  // ========== CYBER TRACK (101-115) — titles only ==========
  101: { titleEn: "Information Security Fundamentals", pages: [] },
  102: { titleEn: "Nmap — Network Scanning", pages: [] },
  103: { titleEn: "Linux and Servers", pages: [] },
  104: { titleEn: "Password Cracking", pages: [] },
  105: { titleEn: "MITM — Man in the Middle", pages: [] },
  106: { titleEn: "Web Security — SQL Injection and XSS", pages: [] },
  107: { titleEn: "Firewalls, IDS, and IPS", pages: [] },
  108: { titleEn: "CTF Challenges", pages: [] },
  109: { titleEn: "Forensics and Log Analysis", pages: [] },
  110: { titleEn: "SQLi and XSS — Attacks and Defense", pages: [] },
  111: { titleEn: "Authentication and Authorization", pages: [] },
  112: { titleEn: "SOC and Incident Response", pages: [] },
  113: { titleEn: "Compliance and Regulation", pages: [] },
  114: { titleEn: "Bug Bounty", pages: [] },
  115: { titleEn: "Cloud Security", pages: [] },

  // ========== DEVOPS TRACK (201-209) — titles only ==========
  201: { titleEn: "Linux Tools", pages: [] },
  202: { titleEn: "Docker", pages: [] },
  203: { titleEn: "Kubernetes", pages: [] },
  204: { titleEn: "AWS Cloud", pages: [] },
  205: { titleEn: "CI/CD", pages: [] },
  206: { titleEn: "SRE and Operations", pages: [] },
  207: { titleEn: "Terraform", pages: [] },
  208: { titleEn: "Monitoring", pages: [] },
  209: { titleEn: "GitOps", pages: [] },

  // ========== RESEARCH TRACK (301-308) — titles only ==========
  301: { titleEn: "Wireshark Analysis", pages: [] },
  302: { titleEn: "BGP Routing", pages: [] },
  303: { titleEn: "DNS Deep Dive", pages: [] },
  304: { titleEn: "HTTP/2 and QUIC", pages: [] },
  305: { titleEn: "eBPF", pages: [] },
  306: { titleEn: "TLS and Cryptography", pages: [] },
  307: { titleEn: "Network Infrastructure", pages: [] },
  308: { titleEn: "Container Networking", pages: [] },
}
