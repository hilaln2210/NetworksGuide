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
