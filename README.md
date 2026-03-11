# NetworksGuide — Interactive Computer Networks Learning Guide

> An interactive, self-paced learning guide for computer networks, based on IDF Cyber Unit course materials (רשתות מחשבים, מטה הסייבר הצה"לי v2.2).

Built with **React 19 + Vite 7**, with live simulations, comprehension exercises, and a chapter-by-chapter navigator.

© 2025 Hila · [MIT License](LICENSE)

---

## Screenshots

### Main View — Chapter Navigator

![Main page with chapter list and sidebar](screenshots/main.png)

### Chapter 3 — Wireshark & the Five-Layer Model

![Wireshark chapter](screenshots/chapter3-wireshark.png)

### Chapter 6 — Transport Layer

![Transport layer chapter](screenshots/chapter6-transport.png)

### Interactive Simulation — DNS Lookup

![DNS Lookup simulation](screenshots/simulation.png)

---

## Features

- **14 chapters** covering the full TCP/IP stack from HTTP down to the physical layer
- **Page-by-page navigation** — forward/back buttons and keyboard arrow keys
- **Chapter sidebar** — jump to any chapter directly
- **Progress bar** — tracks how far you've read through all content
- **Interactive simulations** — DNS Lookup, TCP Handshake, Encapsulation/Decapsulation, Packet Flow
- **Comprehension questions** — expandable Q&A at the end of every chapter
- **Demos** — practical code examples (Python sockets, Scapy, Wireshark output, nslookup, ping, traceroute)
- **Think Outside the Box** — bonus deep-dive questions beyond core material
- **"Ask a Question" search** — full-text search across all guide content
- **RTL Hebrew UI** with custom dark theme

---

## Chapters

| # | Title | Topic |
|---|-------|-------|
| 1 | How the Internet Works | IP addresses, DNS, HTTP |
| 2 | Socket Programming | Python sockets, client-server model |
| 3 | Wireshark & the Five-Layer Model | Traffic analysis, layer model overview |
| 4 | Application Layer | HTTP, DNS, FTP, SMTP |
| 5 | Scapy | Packet crafting and analysis |
| 6 | Transport Layer | TCP, UDP, ports, three-way handshake |
| 7 | Network Layer | IP routing, ICMP, subnetting |
| 8 | Data Link Layer | Ethernet, MAC addresses, ARP |
| 9 | Network Devices | Switches, routers, hubs |
| 10 | Physical Layer | Cables, signals, encoding |
| 11 | Putting It All Together | End-to-end packet journey |
| 12 | Advanced Sockets | Threading, multiplexing |
| 13 | Glossary | Key networking terms |
| 14 | CLI Tools & Commands | ping, traceroute, nslookup, netstat, Wireshark |

---

## Interactive Simulations

| Simulation | Description |
|------------|-------------|
| **DNS Lookup** | Type a domain name and watch the resolver query chain step by step |
| **TCP Handshake** | Animated three-way handshake: SYN → SYN-ACK → ACK |
| **Encapsulation** | See data wrapped in headers as it travels down the network stack |
| **Packet Flow** | Follow a packet from your computer through switches and routers to a server |

---

## Tech Stack

- **React 19** + **Vite 7**
- Pure CSS with CSS variables (dark theme, RTL layout)
- No external UI libraries — zero dependencies beyond React
- All content in `src/data/content.js` — easy to extend

---

## How to Run

```bash
git clone https://github.com/hilaln2210/NetworksGuide.git
cd NetworksGuide
npm install
npm run dev
```

Open **http://localhost:5173** in your browser.

### Build for production

```bash
npm run build
# Output in dist/
```

---

## Content Source

Content is based on the publicly available IDF Cyber course textbook:

- [networks.pdf](https://www.lamed-oti.com/school/oe/networks/networks.pdf) — רשתות מחשבים, מטה הסייבר הצה"לי, גרסה 2.2

The guide adds interactive formatting: explanations, code demos, simulations, comprehension questions, and think-outside-the-box challenges.

---

## Project Structure

```
NetworksGuide/
├── src/
│   ├── components/
│   │   ├── TCPHandshakeSim.jsx     # TCP handshake animation
│   │   ├── DnsLookupSim.jsx        # DNS resolver simulation
│   │   ├── EncapsulationSim.jsx    # Layer encapsulation demo
│   │   ├── PacketFlowSim.jsx       # End-to-end packet journey
│   │   ├── ThinkOutsideBox.jsx     # Bonus deep-dive questions
│   │   ├── AskQuestion.jsx         # Full-text content search
│   │   └── KeyTip.jsx              # Highlighted tip boxes
│   ├── data/
│   │   └── content.js              # All 14 chapters of learning content
│   └── App.jsx                     # Main app: navigation, layout, state
├── screenshots/                    # README screenshots
├── package.json
└── README.md
```

---

## License

MIT License — see [LICENSE](LICENSE).

---

## 🇮🇱 בעברית

מדריך לימוד אינטראקטיבי לרשתות מחשבים — מבוסס על חומרי קורס מטה הסייבר הצה"לי. 14 פרקים, סימולציות חיות ותרגילים. React + Vite.
