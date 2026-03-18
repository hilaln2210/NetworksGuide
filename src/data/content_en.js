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
