export const articleContent = {
  title: "Take the PLCs Off the Internet. Then Solve What Put Them There.",
  author: "Terafence",
  publishDate: "2026-09-10",
  standfirst:
    "Over 100 US water systems were reached through internet-facing controllers in July 2026. Removing that exposure is the right first move. It does not remove the reason the exposure existed.",

  keyTakeaways: [
    "None of the recent water incidents crossed from IT into OT. Every one was a device already reachable from the public internet, so a boundary gateway would not have been in the attack path.",
    "The modem, the port forward and the cellular router were fitted to solve a real operational problem: getting data out of a site nobody staffs at 2 a.m.",
    "Every one of those problems is one-way. Data has to leave the plant. Nothing has to come back in.",
    "A hardware-enforced outbound-only path removes the return route from the circuit instead of filtering it with a rule someone can edit.",
  ],

  imageCaptions: [
    "FBI and EPA public service announcement I-073026-PSA, issued 30 July 2026, on internet-exposed water and wastewater systems.",
    "Three years, three incidents, one shape: a controller reachable from the public internet before anyone touched a keyboard.",
    "An outbound-only gateway: an FPGA moves frames one way at Layer 1/2, with no return path present in the circuit.",
  ],

  sections: [
    {
      id: "the-alert",
      title: "What the alert actually said",
      content: `On 30 July 2026 the FBI and EPA issued public service announcement I-073026-PSA after a campaign against internet-exposed water and wastewater systems. CISA reporting in August put the scale at more than 100 systems across 12 states in July alone.

The mechanics were not sophisticated. Controllers were reachable from the public internet, commonly through a cellular modem wired straight to the PLC. Once reached, IP addresses and passwords were changed, which locked operators out of their own process. Loss of pressure and flooding were reported.

The first recommendation in the announcement is the one worth reading twice: remove inbound port exposure, so the OT system is never directly exposed to the internet or external networks.

We agree with it completely. What follows is about the part that comes after you comply.`,
      hasImage: true,
      imageIndex: 1,
    },
    {
      id: "the-pattern",
      title: "Three years, the same shape",
      content: `This campaign is not an outlier. It is the third act.

In November 2023 a water authority in Aliquippa, Pennsylvania lost control of a booster station and reverted to manual operation. In January 2024 attackers in Muleshoe, Texas manipulated a system until a storage tank overflowed. In July 2026 the same weakness was exploited across seven states and counting.

**Not one of these crossed from IT into OT.** Every one was a device sitting on the public internet. That matters commercially, and most vendors will not say it: an IT-to-OT boundary gateway — ours included — would not have been in the attack path for any of these three incidents. A device that is directly reachable is compromised directly. There is no boundary to cross.

So removing that exposure comes first. That is the FBI and EPA's advice, and it is ours.`,
      hasImage: true,
      imageIndex: 2,
    },
    {
      id: "why-exposed",
      title: "The question nobody asks: why was it exposed?",
      content: `Nobody wires a controller to a cellular modem for entertainment. Every one of these exposures was somebody solving a real problem with the only tool available to them.

- The SOC needed alarms, and the SIEM lives on the corporate network.
- The state wanted compliance data on a schedule, and the deadline does not care about your architecture.
- Somebody had to read a tank level at 2 a.m. without driving forty miles to an unstaffed site.

These are small utilities with no night shift, a compliance clock running, and a capital budget decided two years ago. The modem was not negligence. It was the cheapest thing that worked.

Which is why "unplug it" is an incomplete instruction. Pull the modem out and the requirement is still sitting there, unmet, waiting for somebody to solve it again the same way in eighteen months. CISA's guidance is to work out which exposures are genuinely necessary and remove the rest — and that triage only holds if the necessary ones get a safe path instead of a removed one.`,
      hasImage: false,
      imageIndex: null,
    },
    {
      id: "one-way-requirement",
      title: "Every one of those needs is one-way",
      content: `Look at the list again and check the direction of travel.

Alarms travel out. Compliance records travel out. Tank levels, pressure, flow, pump status, camera feeds: out. Not one of them requires a packet to travel back into the process network to do its job.

The return path exists because the tools were built to be convenient, not because the plant needs it. A syslog collector polls. A historian wants a session. A remote-access tool wants a tunnel. Each of those is a bidirectional design decision made somewhere else, inherited by a utility that only ever needed to send.

> You still need the data out. You do not need a way back in.

Once that is clear, the engineering problem gets much smaller and much more tractable. You are no longer trying to secure a two-way channel against everything the internet can produce. You are trying to move data in one direction and make the other direction impossible.`,
      hasImage: false,
      imageIndex: null,
    },
    {
      id: "outbound-only",
      title: "What an outbound-only gateway actually is",
      content: `Our gateway takes the first recommendation of that announcement literally. The data gets out. Nothing gets back in — not because a rule denies it, but because the return path is absent from the circuit.

An FPGA moves frames one way at Layer 1 and 2. There is no CPU on the data path, no operating system, no IP address and no MAC address. There is nothing to scan, nothing to log into and nothing to misconfigure. A device with no address does not appear in the reconnaissance that preceded every incident above.

That distinction matters more than it sounds. A firewall rule is a statement of intent, enforced by software, maintained by a person, and reversible by anyone with credentials or a working exploit. An absent circuit is a physical fact. The failure modes are different in kind, not in degree: a misconfigured diode does not quietly start passing traffic backwards, because there is no backwards to pass it in.

It also goes in without redesigning the plant. No re-addressing, no downtime window, no retraining for operators. With no IP or MAC, it does not appear in the topology at all.`,
      hasImage: true,
      imageIndex: 3,
    },
    {
      id: "what-leaves",
      title: "What leaves the plant in practice",
      content: `The question we get from plant engineers is never philosophical. It is "does my historian still work". Here is what actually moves, and how.

Below the protocol level, the pattern is the same in all of these: a proxy on the plant side terminates the session locally, the payload crosses the diode as frames, and a second proxy on the enterprise side rebuilds a normal session for the receiving tool. The tool does not know the difference. The plant never becomes reachable.`,
      hasImage: false,
      imageIndex: null,
    },
    {
      id: "limits",
      title: "Where a diode is the wrong answer",
      content: `Being straight about the boundaries is the only way the rest of this is worth reading.

A one-way gateway does not help you when the traffic genuinely has to be bidirectional. Remote engineering access into a PLC is two-way by definition; that needs a port-and-direction controlled gateway with a strict request-response model, not a diode. Patch delivery inward is a separate problem with a separate device. And none of it substitutes for asset inventory: you cannot protect a path you do not know exists, and in most of the plants we survey the surprise is not the architecture, it is the two forgotten cellular routers nobody documented.

It also will not fix the exposure you already have. If a controller is reachable from the internet today, the first job is disconnecting it. The diode is what lets you keep the capability that the connection was providing, so that the disconnection sticks.`,
      hasImage: false,
      imageIndex: null,
    },
    {
      id: "where-to-start",
      title: "Where to start this week",
      content: `Three steps, in order, none of which require a purchase.

1. Inventory what is reachable. Every static IP, every cellular router, every port forward on the plant side. Include the ones installed by an integrator five years ago.
2. For each one, write down the requirement it serves and the direction that requirement needs. Most entries will read "out".
3. Separate the list into exposures that must go now and requirements that need a safe path. The first list is an incident-prevention exercise. The second is an architecture decision.

That second list is where we can help. We will map what needs to leave your plant, what is reachable today, and what it would take to remove the inbound path — and you keep the map whether or not you ever buy anything from us.`,
      hasImage: false,
      imageIndex: null,
    },
  ],

  comparisonTable: {
    title: "Outbound data flows and the protocols that carry them",
    columns: ["What leaves the plant", "Destination", "Protocol"],
    rows: [
      ["HMI, PLC and switch events", "SOC and SIEM", "Syslog"],
      ["Production and compliance records", "State reporting", "SFTP · SMB"],
      ["Process telemetry: tank level, pressure, flow", "Historian", "OPC UA · Modbus · DNP3"],
      ["Plant CCTV", "Security operations", "RTSP · ONVIF"],
      ["Alarms and equipment status", "Analytics and cloud", "HTTP/S"],
    ],
  },

  faq: [
    {
      question: "If the attacks never crossed from IT to OT, why would I buy a gateway?",
      answer: `Because the gateway is not sold as a fix for those attacks — it is what replaces the capability the exposed connection was providing. The sequence is: disconnect the exposed device, then give the requirement a one-way path so nobody reconnects it. A vendor telling you their boundary product would have stopped Aliquippa is not reading the incident reports.`,
    },
    {
      question: "Does a one-way device support TCP-based protocols like OPC UA?",
      answer: `Yes. The diode moves frames at Layer 1/2 with no session awareness. A proxy on each side handles the TCP session locally: the plant-side proxy terminates the connection from your historian client, and the enterprise-side proxy re-establishes a normal session to the receiving tool. Applications see standard OPC UA, SFTP or syslog.`,
    },
    {
      question: "How do we patch or manage the device itself?",
      answer: `You do not. There is no operating system, no firmware image on the data path and no management interface reachable from either network. That means no patch cycle, no CVE watch and no licence renewal — and it also means the device cannot be reconfigured remotely by you or by anyone else.`,
    },
    {
      question: "What does this do for our SDWA §1433 risk and resilience obligations?",
      answer: `EPA enforcement reporting has found that over 70% of inspected systems are not fully meeting federal risk and resilience requirements. Removing inbound reachability while keeping the reporting flows intact addresses both halves of a common finding: an unjustified external exposure, and monitoring data that could not be delivered without it. We provide architecture documentation and test reports for the file, though your assessment remains yours.`,
    },
  ],

  resources: [
    {
      title: "Water & Wastewater: hardware-enforced one-way data transfer (2-page brief)",
      type: "download",
      url: "/downloads/whitepaper/water-wastewater-one-way-transfer.pdf",
    },
    {
      title: "FBI & EPA Public Service Announcement I-073026-PSA",
      type: "reference",
      url: "https://www.ic3.gov/PSA",
    },
  ],

  ctaButtons: [
    {
      title: "Book a session with our engineers",
      type: "primary",
      url: "/contact",
    },
    {
      title: "Email info@terafence.us",
      type: "secondary",
      url: "mailto:info@terafence.us?subject=Water%20%26%20Wastewater%20one-way%20transfer",
    },
  ],
};

