(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  var SALES = 'sales@africorn-ios.co.za';
  var INFO = 'info@africorn-ios.co.za';

  /* ------------------------------------------------------------------ illustrations */
  var INK = '#0b1038', MAIZE = '#f5b841', RUST = '#d53132', SEA = '#1012d9', LITE = '#367c4a', PALE = '#eceef6';
  var BOX = [RUST, MAIZE, LITE, '#1012d9', '#e8862e', PALE, '#5a6ff0'];

  function box(x, y, w, h, c) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="' + c + '"/>' +
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" fill="url(#corr)" stroke="rgba(0,0,0,.35)" stroke-width="1"/>';
  }
  function stack(x, base, heights, w, h, seed) {
    var out = '';
    heights.forEach(function (n, i) {
      for (var r = 0; r < n; r++) out += box(x + i * (w + 2), base - (r + 1) * h, w, h, BOX[(i * 3 + r * 5 + (seed || 0)) % BOX.length]);
    });
    return out;
  }
  function ship() {
    return '<path d="M4 100H560L524 164H34Q8 160 4 100Z" fill="#1b2580"/>' +
      '<path d="M14 146H534L524 164H34Q20 161 14 146Z" fill="' + RUST + '"/>' +
      '<rect x="30" y="34" width="72" height="66" fill="' + PALE + '"/>' +
      '<rect x="36" y="44" width="60" height="7" fill="' + INK + '"/><rect x="36" y="60" width="60" height="5" fill="#8a90b8"/><rect x="36" y="74" width="60" height="5" fill="#8a90b8"/>' +
      '<rect x="52" y="6" width="24" height="28" fill="' + MAIZE + '"/><rect x="52" y="14" width="24" height="6" fill="' + INK + '"/>' +
      '<rect x="92" y="2" width="3" height="32" fill="' + PALE + '"/>' +
      stack(114, 100, [3, 4, 4, 5, 5, 5, 4, 4, 3, 2], 40, 18, 1) +
      '<text x="398" y="132" font-family="Barlow Condensed, Arial Narrow, sans-serif" font-weight="700" font-size="20" letter-spacing="3" fill="' + PALE + '">AFRICORN</text>';
  }
  function crane() {
    var y = MAIZE;
    return '<g fill="' + y + '">' +
      '<rect x="0" y="-204" width="10" height="204"/><rect x="92" y="-204" width="10" height="204"/>' +
      '<rect x="0" y="-128" width="102" height="8"/><rect x="-196" y="-212" width="340" height="11"/>' +
      '<rect x="46" y="-268" width="8" height="60"/><rect x="22" y="-234" width="58" height="22" fill="' + PALE + '"/></g>' +
      '<g stroke="' + y + '" stroke-width="4" fill="none"><path d="M50-266-170-212M50-266 136-212M5-128 97-204M97-128 5-204"/></g>' +
      '<g class="a-trolley"><rect x="-150" y="-201" width="30" height="9" fill="' + INK + '" stroke="' + y + '" stroke-width="2"/>' +
      '<path d="M-146-192V-150M-124-192V-150" stroke="' + PALE + '" stroke-width="1.5"/>' + box(-157, -150, 44, 18, RUST) + '</g>';
  }
  function truck(c) {
    return '<rect x="0" y="-24" width="162" height="7" fill="#060822"/>' + box(4, -66, 152, 42, c || LITE) +
      '<path d="M168-17V-62H204L226-40V-17Z" fill="' + PALE + '"/><path d="M192-57H202L217-42H192Z" fill="' + SEA + '"/>' +
      '<rect x="160" y="-24" width="68" height="8" fill="#060822"/>' +
      [22, 46, 150, 208].map(function (x) { return '<circle cx="' + x + '" cy="-10" r="11" fill="#060822"/><circle cx="' + x + '" cy="-10" r="4" fill="#9aa0c4"/>'; }).join('');
  }
  function warehouse() {
    var doors = [22, 100, 178].map(function (x, i) {
      return i === 1
        ? '<rect x="' + x + '" y="-74" width="60" height="74" fill="#060822"/>' + box(x + 6, -22, 22, 20, '#c98f4a') + box(x + 31, -22, 22, 20, '#c98f4a') + box(x + 18, -43, 22, 20, MAIZE)
        : '<rect x="' + x + '" y="-74" width="60" height="74" fill="#a9aecb"/><rect x="' + x + '" y="-74" width="60" height="74" fill="url(#slat)"/>';
    }).join('');
    return '<rect x="0" y="-116" width="260" height="116" fill="' + PALE + '"/><rect x="0" y="-116" width="260" height="116" fill="url(#corr)" opacity=".35"/>' +
      '<path d="M-8-116 130-154 268-116Z" fill="' + LITE + '"/><rect x="-8" y="-118" width="276" height="8" fill="' + SEA + '"/>' +
      '<text x="130" y="-88" text-anchor="middle" font-family="Barlow Condensed, Arial Narrow, sans-serif" font-weight="700" font-size="18" letter-spacing="4" fill="' + INK + '">AFRICORN</text>' + doors;
  }
  function waves(x1, x2, y) {
    var o = '';
    for (var r = 0; r < 3; r++) for (var x = x1 + r * 40; x < x2; x += 130) o += '<rect x="' + x + '" y="' + (y + 14 + r * 18) + '" width="' + (46 - r * 8) + '" height="3" fill="rgba(255,255,255,.22)"/>';
    return o;
  }

  var hero = $('#heroScene');
  if (hero) {
    hero.innerHTML =
      '<circle cx="330" cy="372" r="178" fill="' + MAIZE + '"/>' +
      '<path d="M900 372C1020 300 1120 318 1230 288C1360 252 1500 300 1680 262V372Z" fill="#141b55"/>' +
      '<g class="a-ship">' + ship() + '</g>' +
      '<rect x="0" y="372" width="640" height="68" fill="' + SEA + '"/>' + waves(0, 620, 372) +
      '<rect x="600" y="360" width="1080" height="80" fill="#232a5c"/><rect x="600" y="360" width="1080" height="5" fill="#565e96"/>' +
      '<path d="M600 404H1680" stroke="' + MAIZE + '" stroke-width="3" stroke-dasharray="28 22" opacity=".7"/>' +
      '<g transform="translate(650 360)">' + crane() + '</g>' +
      stack(800, 360, [2, 4, 3, 4, 2], 58, 25, 2) +
      '<g class="a-truck">' + truck(MAIZE) + '</g>' +
      '<g transform="translate(1410 360)">' + warehouse() + '</g>';
    var mq = window.matchMedia('(max-width: 700px)');
    var crop = function () { hero.setAttribute('viewBox', mq.matches ? '250 60 860 380' : '0 0 1680 440'); };
    crop();
    if (mq.addEventListener) mq.addEventListener('change', crop);
  }

  var ART = {
    customs: function () {
      return '<rect width="520" height="190" fill="' + INK + '"/>' + stack(330, 176, [2, 3, 1], 56, 26, 3) +
        '<g transform="rotate(-5 150 100)"><rect x="70" y="22" width="150" height="180" fill="#fff"/>' +
        '<rect x="86" y="40" width="70" height="9" fill="' + INK + '"/>' +
        [64, 78, 92, 106, 120, 134].map(function (y, i) { return '<rect x="86" y="' + y + '" width="' + (i % 2 ? 96 : 118) + '" height="4" fill="#c3c7da"/>'; }).join('') + '</g>' +
        '<g transform="rotate(-14 236 118)"><circle cx="236" cy="118" r="42" fill="none" stroke="' + RUST + '" stroke-width="5"/><circle cx="236" cy="118" r="33" fill="none" stroke="' + RUST + '" stroke-width="1.5"/>' +
        '<text x="236" y="123" text-anchor="middle" font-family="Barlow Condensed, Arial Narrow, sans-serif" font-weight="700" font-size="15" letter-spacing="1.5" fill="' + RUST + '">RELEASED</text></g>';
    },
    forwarding: function () {
      return '<rect width="520" height="190" fill="' + INK + '"/><circle cx="130" cy="150" r="92" fill="' + MAIZE + '"/>' +
        '<g transform="translate(70 50) scale(.66)">' + ship() + '</g><rect y="150" width="520" height="40" fill="' + SEA + '"/>' + waves(0, 520, 142);
    },
    warehouse: function () {
      return '<rect width="520" height="190" fill="' + INK + '"/><rect y="168" width="520" height="22" fill="#232a5c"/>' +
        '<g transform="translate(60 168)">' + warehouse() + '</g>' + box(370, 142, 30, 26, '#c98f4a') + box(403, 142, 30, 26, MAIZE) + box(386, 115, 30, 26, '#c98f4a') +
        box(450, 142, 30, 26, '#c98f4a') + '<rect x="364" y="166" width="124" height="4" fill="#8a6a3c"/>';
    },
    transport: function () {
      return '<rect width="520" height="190" fill="' + INK + '"/><path d="M0 150C90 96 170 120 260 98C350 76 430 110 520 84V190H0Z" fill="#141b55"/>' +
        '<rect y="152" width="520" height="38" fill="#232a5c"/><path d="M0 172H520" stroke="' + MAIZE + '" stroke-width="3" stroke-dasharray="26 20"/>' +
        '<rect x="438" y="70" width="5" height="84" fill="#9aa0c4"/><rect x="412" y="52" width="58" height="36" rx="3" fill="#367c4a" stroke="#fff" stroke-width="2"/>' +
        '<text x="441" y="78" text-anchor="middle" font-family="Barlow Condensed, Arial Narrow, sans-serif" font-weight="700" font-size="22" fill="#fff">N3</text>' +
        '<g transform="translate(110 162)">' + truck(RUST) + '</g>';
    }
  };
  $$('[data-art]').forEach(function (el) { var f = ART[el.getAttribute('data-art')]; if (f) el.innerHTML = f(); });

  /* ------------------------------------------------------------------ glossary data */
  var TERMS = [
    { id: 'fcl', t: 'FCL', full: 'Full Container Load', c: 'Ocean', d: 'A container used by one shipper only. You pay for the whole box whether or not you fill it.', e: 'Usually worth it once your cargo passes about 15 cubic metres.' },
    { id: 'lcl', t: 'LCL', full: 'Less than Container Load', c: 'Ocean', d: 'Your cargo shares a container with other shippers and you pay only for the space you use.', e: 'Good for a few pallets. It takes a little longer because the box is packed and unpacked at a depot.' },
    { id: 'teu', t: 'TEU', full: 'Twenty-foot Equivalent Unit', c: 'Ocean', d: 'The standard way to count containers. A 20ft container is one TEU and a 40ft container is two.' },
    { id: 'reefer', t: 'Reefer', c: 'Ocean', d: 'A refrigerated container that holds a set temperature for cargo such as fruit, meat or medicine.' },
    { id: 'highcube', t: 'High cube', c: 'Ocean', d: 'A container about 30 cm taller than a standard one, giving extra room for light, bulky cargo.' },
    { id: 'transship', t: 'Transshipment', c: 'Ocean', d: 'Moving a container from one vessel to another at a port along the way, when there is no direct sailing.' },
    { id: 'ports', t: 'Port of loading / discharge', c: 'Ocean', d: 'The port where cargo goes onto the vessel, and the port where it comes off.', e: 'Durban, Cape Town and Ngqura are South Africa\'s main container ports.' },
    { id: 'eta', t: 'ETA / ETD', full: 'Estimated Time of Arrival / Departure', c: 'Ocean', d: 'When a vessel or truck is expected to arrive or leave. Estimates move with weather and port congestion.' },
    { id: 'stack', t: 'Stack dates', c: 'Ocean', d: 'The window in which a terminal accepts export containers for a particular vessel.', e: 'Miss the closing date and your container waits for the next sailing.' },
    { id: 'breakbulk', t: 'Break bulk', c: 'Ocean', d: 'Cargo shipped loose instead of in a container, such as machinery, steel or timber.' },
    { id: 'vgm', t: 'VGM', full: 'Verified Gross Mass', c: 'Ocean', d: 'The certified total weight of a packed container. A vessel will not load a container without it.' },

    { id: 'bl', t: 'Bill of lading', full: 'B/L', c: 'Paperwork', d: 'Issued by the carrier. It is the receipt for the cargo, the contract to carry it and, in its original form, the title to the goods.' },
    { id: 'telex', t: 'Telex release', c: 'Paperwork', d: 'The carrier releases the cargo at destination without the paper bill of lading, once the shipper has handed the originals back at origin.' },
    { id: 'invoice', t: 'Commercial invoice', c: 'Paperwork', d: 'The seller\'s bill for the goods. Customs uses it to work out what the cargo is worth.' },
    { id: 'packing', t: 'Packing list', c: 'Paperwork', d: 'Lists what is in each package, with weights and dimensions. It is how a warehouse checks nothing is missing.' },
    { id: 'coo', t: 'Certificate of origin', c: 'Paperwork', d: 'States the country where the goods were made. Under some trade agreements it lowers the duty.' },
    { id: 'incoterms', t: 'Incoterms', c: 'Paperwork', d: 'International rules, shown as three letters on a quote, that say which costs and risks belong to the seller and which to the buyer.' },
    { id: 'consignee', t: 'Shipper / consignee', c: 'Paperwork', d: 'The shipper sends the cargo. The consignee is the party it is sent to.' },
    { id: 'manifest', t: 'Manifest', c: 'Paperwork', d: 'The carrier\'s list of everything on board a vessel, which it submits to customs.' },

    { id: 'sars', t: 'SARS Customs', c: 'Customs', d: 'The part of the South African Revenue Service that controls goods entering and leaving the country.' },
    { id: 'hs', t: 'HS code', full: 'Tariff heading', c: 'Customs', d: 'An internationally agreed number that classifies your product. It decides the rate of duty.', e: 'Get it wrong and you may overpay, or face a penalty later.' },
    { id: 'sad500', t: 'SAD 500', full: 'Customs declaration', c: 'Customs', d: 'The declaration form South African customs uses for imports and exports.' },
    { id: 'duty', t: 'Customs duty', c: 'Customs', d: 'A tax on imported goods, set by the HS code and the customs value of the cargo.' },
    { id: 'vat', t: 'Import VAT', c: 'Customs', d: 'VAT charged when goods enter the country. It is worked out on the customs value plus a 10% uplift plus any duty.' },
    { id: 'stop', t: 'Customs stop', c: 'Customs', d: 'Customs holds a shipment to check the documents or examine the cargo before releasing it.' },
    { id: 'importer', t: 'Importer\'s code', c: 'Customs', d: 'The registration number SARS gives a business so that it can import or export commercial goods.' },
    { id: 'clearing', t: 'Clearing agent', c: 'Customs', d: 'A licensed company that declares goods to customs on your behalf.' },
    { id: 'forwarder', t: 'Freight forwarder', c: 'Customs', d: 'The company that organises a shipment from start to finish, booking the carriers and managing the documents.' },
    { id: 'bonded', t: 'Bonded warehouse', c: 'Customs', d: 'A warehouse licensed by customs where imported goods can be stored before duty is paid.' },
    { id: 'permit', t: 'Import permit', c: 'Customs', d: 'Some goods need a permit or approval before they may be imported, for example from ITAC or the NRCS.' },

    { id: 'demurrage', t: 'Demurrage', c: 'Costs', d: 'A daily charge from the shipping line when a full container stays in the terminal past its free days.' },
    { id: 'detention', t: 'Detention', c: 'Costs', d: 'A daily charge from the shipping line when you keep its container outside the terminal past the free days.' },
    { id: 'storage', t: 'Storage', c: 'Costs', d: 'A charge from the terminal or depot for cargo left there beyond the free period.' },
    { id: 'freedays', t: 'Free days', c: 'Costs', d: 'The days you get at no charge before demurrage, detention or storage starts.' },
    { id: 'thc', t: 'THC', full: 'Terminal Handling Charge', c: 'Costs', d: 'The terminal\'s fee for moving a container between the vessel and the yard.' },
    { id: 'cbm', t: 'CBM', full: 'Cubic metre', c: 'Costs', d: 'The unit for cargo volume: length times width times height, in metres.' },
    { id: 'wm', t: 'W/M', full: 'Weight or measure', c: 'Costs', d: 'How LCL sea freight is priced: per cubic metre or per 1 000 kg, whichever gives the bigger number.' },

    { id: 'cartage', t: 'Cartage', c: 'Road', d: 'A short road move, such as from the port to a nearby depot or warehouse.' },
    { id: 'linehaul', t: 'Line haul', full: 'Long haul', c: 'Road', d: 'A long-distance road move between cities, such as Durban to Johannesburg.' },
    { id: 'pod', t: 'POD', full: 'Proof of Delivery', c: 'Road', d: 'The signed document confirming the goods were received, and in what condition.' },
    { id: 'sideloader', t: 'Side-loader', c: 'Road', d: 'A trailer with its own cranes that lifts a container on or off the ground, so the site needs no forklift.' },
    { id: 'superlink', t: 'Superlink', c: 'Road', d: 'A truck pulling two linked trailers. It is the workhorse of South African long haul.' },
    { id: 'tautliner', t: 'Tautliner', c: 'Road', d: 'A trailer with curtain sides that slide open so it can be loaded from the side.' },
    { id: 'backhaul', t: 'Backhaul', c: 'Road', d: 'The return leg of a truck\'s trip. Loads on this leg often cost less.' },
    { id: 'turnin', t: 'Empty return', full: 'Turn-in', c: 'Road', d: 'Taking the empty container back to the shipping line\'s depot after it has been unpacked.' },

    { id: 'unpack', t: 'Unpack', full: 'Destuff / devan', c: 'Warehouse', d: 'Taking the cargo out of a container. Packing it in is called stuffing.' },
    { id: 'pallet', t: 'Palletised', c: 'Warehouse', d: 'Cargo stacked and wrapped on pallets so that a forklift can move it.', e: 'A standard South African pallet is 1.2 m by 1.0 m.' },
    { id: 'crossdock', t: 'Cross-docking', c: 'Warehouse', d: 'Moving cargo straight from the arriving vehicle to the departing one, with little or no storage.' },
    { id: 'pickpack', t: 'Pick and pack', c: 'Warehouse', d: 'Selecting items from stored stock and packing them to fill an order.' },
    { id: 'depot', t: 'Container depot', c: 'Warehouse', d: 'A yard where containers are stored, packed and unpacked, and where empties are returned.' },
    { id: 'tally', t: 'Tally', c: 'Warehouse', d: 'Counting and checking cargo against the documents as it is loaded or unloaded.' }
  ];
  var BYID = {};
  TERMS.forEach(function (t) { BYID[t.id] = t; });

  /* term dialog */
  var dlg = $('#termDlg');
  function openTerm(id) {
    var t = BYID[id]; if (!t || !dlg) return;
    $('#termDlgBody').innerHTML = '<span class="tag">' + esc(t.c) + '</span><h3 id="termDlgTitle">' + esc(t.t) + '</h3>' +
      (t.full ? '<p style="font-family:var(--f-mono);font-size:.85rem">' + esc(t.full) + '</p>' : '') +
      '<p>' + esc(t.d) + '</p>' + (t.e ? '<p class="eg">' + esc(t.e) + '</p>' : '');
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
  }
  function closeTerm() { if (dlg.close) dlg.close(); else dlg.removeAttribute('open'); }
  document.addEventListener('click', function (ev) {
    var b = ev.target.closest && ev.target.closest('[data-term]');
    if (b) openTerm(b.getAttribute('data-term'));
  });
  if (dlg) {
    $('#termDlgClose').addEventListener('click', closeTerm);
    $('#termDlgMore').addEventListener('click', closeTerm);
    dlg.addEventListener('click', function (ev) { if (ev.target === dlg) closeTerm(); });
  }
  function chips(ids) {
    return ids.map(function (id) { return '<button class="term" type="button" data-term="' + id + '">' + esc(BYID[id].t) + '</button>'; }).join('');
  }

  /* ------------------------------------------------------------------ journey */
  var STOPS = [
    { n: 'Booking', h: 'Booking and paperwork', p: 'Your supplier confirms the goods are ready. Space is booked on a vessel and the shipping documents are drawn up. Errors made here cause most of the delays later, so this is where the checking pays off.', us: 'We book the cargo, check the invoice and packing list against each other, and confirm the tariff code before anything moves.', terms: ['forwarder', 'incoterms', 'invoice', 'packing'] },
    { n: 'Sailing', h: 'On the water', p: 'The container is loaded at the port of loading and sails. Depending on the route it may change vessels along the way. Sailing times from Asia to South Africa are typically a few weeks.', us: 'We track the vessel and tell you if the arrival date moves, so that transport and warehouse space are ready on the day.', terms: ['fcl', 'lcl', 'bl', 'eta', 'transship'] },
    { n: 'Arrival', h: 'Arrival at a South African port', p: 'The vessel berths and the container is lifted off into the terminal stack. From this moment the clock is running: you have a set number of free days before storage and demurrage are charged.', us: 'We aim to have the paperwork finished before the ship arrives, so the container can leave as soon as it lands.', terms: ['ports', 'thc', 'freedays', 'storage'] },
    { n: 'Customs', h: 'Customs clearance', p: 'A declaration is submitted to SARS Customs with the tariff code and value of the goods. Duty and import VAT are paid. Customs either releases the cargo or stops it for a closer look.', us: 'This is our core work. We lodge the declaration, pay the duties on your behalf where arranged, and deal with any stop.', terms: ['sars', 'hs', 'sad500', 'duty', 'vat', 'stop'] },
    { n: 'Haulage', h: 'Collection and haulage', p: 'Once released, a truck collects the container from the terminal. It may be a short run to a depot nearby, or a long haul inland along one of the main corridors.', us: 'We send the right vehicle for the load and the delivery site, and time it to stay inside the free days.', terms: ['cartage', 'linehaul', 'sideloader', 'demurrage', 'detention'] },
    { n: 'Warehouse', h: 'Unpacking and storage', p: 'The container is opened and the cargo counted against the packing list. Goods can go straight out on another vehicle, or be stored and released in batches as you need them.', us: 'We unpack, tally and store your goods, and report any shortage or damage straight away.', terms: ['unpack', 'tally', 'pallet', 'crossdock'] },
    { n: 'Delivery', h: 'Delivery to your door', p: 'The goods arrive at your premises and someone signs for them. The empty container goes back to the shipping line\'s depot, which closes the file.', us: 'We deliver, send you the signed proof of delivery and return the empty container on time.', terms: ['pod', 'turnin', 'consignee'] }
  ];
  var route = $('#route'), leg = $('#leg'), cur = 0;
  function showStop(i, focus) {
    cur = i;
    $$('.stop', route).forEach(function (b, k) {
      b.setAttribute('aria-selected', k === i ? 'true' : 'false');
      b.tabIndex = k === i ? 0 : -1;
      b.classList.toggle('done', k < i);
      if (k === i && focus) b.focus();
    });
    var s = STOPS[i];
    leg.innerHTML = '<div><span class="plate">Stop ' + (i + 1) + ' of ' + STOPS.length + '</span><h3>' + esc(s.h) + '</h3><p>' + esc(s.p) + '</p>' +
      '<div class="leg-us"><b>Where Africorn comes in</b><p>' + esc(s.us) + '</p></div>' +
      '<div class="leg-nav"><button class="btn btn--line btn--sm" type="button" id="legPrev"' + (i === 0 ? ' disabled style="opacity:.4;cursor:default"' : '') + '>Back</button>' +
      (i < STOPS.length - 1 ? '<button class="btn btn--go btn--sm" type="button" id="legNext">Next stop</button>' : '<a class="btn btn--go btn--sm" href="#contact">Request a quote</a>') + '</div></div>' +
      '<div class="leg-side"><div class="chips"><span class="chips-label">Words you will meet at this stop</span>' + chips(s.terms) + '</div></div>';
    var p = $('#legPrev'), n = $('#legNext');
    if (p && i > 0) p.addEventListener('click', function () { showStop(i - 1); });
    if (n) n.addEventListener('click', function () { showStop(i + 1); });
  }
  if (route) {
    route.innerHTML = STOPS.map(function (s, i) {
      return '<li role="presentation"><button class="stop" type="button" role="tab" aria-controls="leg" data-i="' + i + '" aria-label="Stop ' + (i + 1) + ': ' + esc(s.h) + '"><i>' + (i + 1) + '</i><span>' + esc(s.n) + '</span></button></li>';
    }).join('');
    route.addEventListener('click', function (ev) { var b = ev.target.closest('.stop'); if (b) showStop(+b.getAttribute('data-i')); });
    route.addEventListener('keydown', function (ev) {
      if (ev.key === 'ArrowRight' && cur < STOPS.length - 1) { showStop(cur + 1, true); ev.preventDefault(); }
      if (ev.key === 'ArrowLeft' && cur > 0) { showStop(cur - 1, true); ev.preventDefault(); }
    });
    showStop(0);
  }

  /* ------------------------------------------------------------------ incoterms */
  var LEGS = ['Packing and loading at the supplier', 'Transport to the port of loading', 'Export customs clearance', 'Loading onto the vessel', 'Ocean freight', 'Cargo insurance', 'Unloading at the destination port', 'Import clearance, duty and VAT', 'Delivery to your door'];
  var INCO = [
    { k: 'EXW', n: 'Ex Works', who: 'BBBBBOBBB', risk: -1, d: 'The seller only has to make the goods available at their own premises. You arrange and pay for everything from there, including loading the truck.', r: 'Risk is yours from the moment the goods are ready for collection.' },
    { k: 'FCA', n: 'Free Carrier', who: 'SSSBBOBBB', risk: 2, d: 'The seller clears the goods for export and hands them to the carrier you have chosen at an agreed place.', r: 'Risk passes to you when the goods are handed to your carrier.' },
    { k: 'FOB', n: 'Free On Board', who: 'SSSSBOBBB', risk: 3, d: 'The seller pays to get the goods onto the vessel. You pay the ocean freight and everything after it. The most common term on quotes from Asia.', r: 'Risk passes to you once the goods are on board the vessel.' },
    { k: 'CFR', n: 'Cost and Freight', who: 'SSSSSOBBB', risk: 3, d: 'The seller also pays the ocean freight to your port. Insurance is still for you to arrange.', r: 'Risk still passes at the port of loading, even though the seller paid the freight.' },
    { k: 'CIF', n: 'Cost, Insurance and Freight', who: 'SSSSSSBBB', risk: 3, d: 'Like CFR, but the seller must also buy cargo insurance for the voyage. The cover is usually the minimum, so check what it includes.', r: 'Risk passes at the port of loading. The insurance is there for you to claim on.' },
    { k: 'DAP', n: 'Delivered At Place', who: 'SSSSSOSBS', risk: 8, d: 'The seller delivers to a named place in your country. You only handle the import clearance and pay the duty and VAT.', r: 'Risk passes when the goods arrive at the named place, ready to unload.' },
    { k: 'DDP', n: 'Delivered Duty Paid', who: 'SSSSSOSSS', risk: 8, d: 'The seller does everything, including import clearance and duties. Simple for you, but you have little control over the cost or the clearing.', r: 'Risk passes when the goods arrive at your door.' }
  ];
  var incoTabs = $('#incoTabs');
  function showInco(i) {
    var x = INCO[i];
    $$('.inco-tab', incoTabs).forEach(function (b, k) { b.setAttribute('aria-pressed', k === i ? 'true' : 'false'); });
    $('#incoAbout').innerHTML = '<span class="plate">' + x.k + '</span><h3>' + esc(x.n) + '</h3><p>' + esc(x.d) + '</p><div class="inco-risk"><b>Where the risk passes</b>' + esc(x.r) + '</div>';
    var L = { S: ['who--s', 'Seller'], B: ['who--b', 'Buyer'], O: ['who--o', 'Optional'] };
    $('#incoRows').innerHTML = LEGS.map(function (l, k) {
      var w = L[x.who.charAt(k)];
      return '<li' + (k === x.risk ? ' class="risk-here"' : '') + '><span>' + l + '</span><span class="who ' + w[0] + '">' + w[1] + '</span></li>';
    }).join('');
  }
  if (incoTabs) {
    incoTabs.innerHTML = INCO.map(function (x, i) { return '<button class="inco-tab" type="button" data-i="' + i + '" aria-label="' + x.k + ', ' + x.n + '">' + x.k + '</button>'; }).join('');
    incoTabs.addEventListener('click', function (ev) { var b = ev.target.closest('.inco-tab'); if (b) showInco(+b.getAttribute('data-i')); });
    showInco(2);
  }

  /* ------------------------------------------------------------------ calculator */
  var calc = null;
  function fmt(n, d) { return n.toLocaleString('en-ZA', { minimumFractionDigits: d, maximumFractionDigits: d }).replace(/,/g, '.').replace(/ /g, ' '); }
  function runCalc() {
    var v = function (id) { return parseFloat($('#' + id).value) || 0; };
    var L = v('cL'), W = v('cW'), H = v('cH'), Q = Math.max(0, Math.floor(v('cQ'))), kg = v('cKg');
    var cbm = L * W * H / 1e6 * Q, tot = kg * Q, rt = Math.max(cbm, tot / 1000);
    var name, cap, advice;
    if (cbm <= 0) { name = ''; cap = 1; advice = 'Enter the length, width, height and quantity to see a result.'; }
    else if (cbm <= 15) { name = '20ft container'; cap = 28; advice = 'This would normally go LCL, sharing a container. LCL is priced per revenue tonne, and yours works out to about ' + fmt(rt, 2) + '.'; }
    else if (cbm <= 28) { name = '20ft container'; cap = 28; advice = 'A 20ft container of your own (FCL) is the likely fit. It holds about 28 CBM once gaps between the cargo are allowed for.'; }
    else if (cbm <= 58) { name = '40ft container'; cap = 58; advice = 'A 40ft container is the likely fit. It holds about 58 CBM in practice.'; }
    else if (cbm <= 68) { name = '40ft high cube'; cap = 68; advice = 'A 40ft high cube is the likely fit, if your cargo can use the extra height.'; }
    else { var n = Math.ceil(cbm / 58); name = n + ' x 40ft containers'; cap = n * 58; advice = 'This needs more than one container: about ' + n + ' x 40ft.'; }
    if (cbm > 15 && tot / Math.max(1, Math.ceil(cbm / 58)) > 24000) advice += ' The load is heavy, so weight rather than volume may decide how it ships.';
    $('#calcCbm').innerHTML = fmt(cbm, 2) + '<small>CBM</small>';
    $('#calcStats').innerHTML = '<span>Total weight <b>' + fmt(tot, 0) + ' kg</b></span><span>Revenue tonnes <b>' + fmt(rt, 2) + '</b></span>';
    var pct = Math.min(100, Math.round(cbm / cap * 100));
    $('#calcFill').style.width = pct + '%';
    $('#calcFillLabel').textContent = name ? 'About ' + pct + '% of ' + (cbm > 68 ? name : 'a ' + name) : '';
    $('#calcAdvice').textContent = advice;
    calc = { L: L, W: W, H: H, Q: Q, kg: kg, cbm: cbm, tot: tot, name: name, lcl: cbm > 0 && cbm <= 15 };
  }
  if ($('#calcForm')) {
    $('#calcForm').addEventListener('input', runCalc);
    $('#calcForm').addEventListener('submit', function (e) { e.preventDefault(); });
    runCalc();
    $('#calcToQuote').addEventListener('click', function () {
      if (!calc || calc.cbm <= 0) return;
      var line = calc.Q + ' x ' + calc.L + ' x ' + calc.W + ' x ' + calc.H + ' cm, ' + calc.kg + ' kg each. Total ' + fmt(calc.cbm, 2) + ' CBM, ' + fmt(calc.tot, 0) + ' kg.';
      var ta = $('#qCargo');
      ta.value = (ta.value ? ta.value.replace(/\s+$/, '') + '\n' : '') + line;
      var map = { '20ft container': '20ft container', '40ft container': '40ft container', '40ft high cube': '40ft high cube' };
      $('#qEquip').value = calc.lcl ? 'LCL / part load' : (map[calc.name] || 'Not sure');
      selectTab('Quote');
      $('#contact').scrollIntoView();
      ta.focus({ preventScroll: true });
    });
  }

  /* ------------------------------------------------------------------ glossary */
  var CATS = ['All', 'Ocean', 'Customs', 'Paperwork', 'Costs', 'Road', 'Warehouse'], glCat = 'All', glAll = false, GL_FIRST = 12;
  function renderGl() {
    var q = ($('#glSearch').value || '').trim().toLowerCase();
    var list = TERMS.filter(function (t) {
      return (glCat === 'All' || t.c === glCat) && (!q || (t.t + ' ' + (t.full || '') + ' ' + t.d).toLowerCase().indexOf(q) > -1);
    });
    var total = list.length, more = $('#glMore');
    var cut = !glAll && !q && glCat === 'All' && total > GL_FIRST;
    if (cut) list = list.slice(0, GL_FIRST);
    more.hidden = !cut;
    more.textContent = 'Show all ' + total + ' terms';
    $('#glCount').textContent = (cut ? 'Showing ' + GL_FIRST + ' of ' : '') + total + (total === 1 ? ' term' : ' terms') + (q ? ' matching "' + q + '"' : '');
    $('#glGrid').innerHTML = list.length ? list.map(function (t) {
      return '<article class="gl-card"><span class="tag">' + t.c + '</span><h3>' + esc(t.t) + '</h3>' + (t.full ? '<span style="font:500 .8rem/1.2 var(--f-mono);color:var(--muted)">' + esc(t.full) + '</span>' : '') +
        '<p>' + esc(t.d) + '</p>' + (t.e ? '<p class="eg">' + esc(t.e) + '</p>' : '') + '</article>';
    }).join('') : '<p class="gl-empty">No term matches that yet. Try a shorter word, or <a href="#contact">ask us what it means</a>.</p>';
  }
  if ($('#glCats')) {
    $('#glCats').innerHTML = CATS.map(function (c) { return '<button class="cat" type="button" aria-pressed="' + (c === 'All') + '" data-c="' + c + '">' + c + '</button>'; }).join('');
    $('#glCats').addEventListener('click', function (ev) {
      var b = ev.target.closest('.cat'); if (!b) return;
      glCat = b.getAttribute('data-c');
      $$('.cat').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      renderGl();
    });
    $('#glSearch').addEventListener('input', renderGl);
    $('#glMore').addEventListener('click', function () { glAll = true; renderGl(); });
    renderGl();
  }

  /* ------------------------------------------------------------------ quiz */
  var quizBox = $('#quizBox'), QN = 8, quiz;
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function startQuiz() {
    quiz = { qs: shuffle(TERMS).slice(0, QN), i: 0, score: 0 };
    askQuiz();
  }
  function askQuiz() {
    var t = quiz.qs[quiz.i];
    var same = shuffle(TERMS.filter(function (x) { return x.id !== t.id && x.c === t.c; })).slice(0, 2);
    var other = shuffle(TERMS.filter(function (x) { return x.id !== t.id && same.indexOf(x) < 0; })).slice(0, 1);
    var opts = shuffle([t].concat(same, other));
    quizBox.innerHTML = '<div class="quiz-meta"><span>Question ' + (quiz.i + 1) + ' of ' + QN + '</span><span>Score ' + quiz.score + '</span></div>' +
      '<div class="quiz-bar"><i style="width:' + (quiz.i / QN * 100) + '%"></i></div>' +
      '<p class="quiz-q"><small>Which term is this?</small>' + esc(t.d) + '</p>' +
      '<div class="quiz-opts">' + opts.map(function (o) { return '<button class="opt" type="button" data-id="' + o.id + '"><span>' + esc(o.t) + '</span></button>'; }).join('') + '</div>' +
      '<p class="quiz-fb" id="quizFb" role="status"></p>';
    $$('.opt', quizBox).forEach(function (b) {
      b.addEventListener('click', function () {
        var ok = b.getAttribute('data-id') === t.id;
        if (ok) quiz.score++;
        $$('.opt', quizBox).forEach(function (x) {
          x.disabled = true;
          if (x.getAttribute('data-id') === t.id) { x.classList.add('right'); x.insertAdjacentHTML('beforeend', '<em>Correct</em>'); }
          else if (x === b) { x.classList.add('wrong'); x.insertAdjacentHTML('beforeend', '<em>Your pick</em>'); }
        });
        var last = quiz.i === QN - 1;
        $('#quizFb').innerHTML = (ok ? 'Correct. ' : 'Not quite. The answer is <strong>' + esc(t.t) + '</strong>. ') + (t.e ? esc(t.e) : '') +
          '<br><button class="btn btn--go btn--sm" type="button" id="quizNext" style="margin-top:14px">' + (last ? 'See my rank' : 'Next question') + '</button>';
        $('#quizNext').addEventListener('click', function () { quiz.i++; if (last) endQuiz(); else askQuiz(); });
        $('#quizNext').focus();
      });
    });
  }
  function endQuiz() {
    var s = quiz.score, rank = s === QN ? 'Harbour Master' : s >= 6 ? 'Ship\'s Agent' : s >= 4 ? 'Tally Clerk' : 'Deckhand';
    var line = s === QN ? 'A clean sheet. You could run the port.' : s >= 6 ? 'You know your way around a bill of lading.' : s >= 4 ? 'A solid count. A few more terms and you are there.' : 'Everyone starts on deck. The logbook above will get you promoted.';
    quizBox.innerHTML = '<div class="quiz-end"><span class="plate">Your rank</span><h3 style="font-size:2.6rem;text-transform:uppercase;color:#fff">' + rank + '</h3>' +
      '<div class="big">' + s + '<small>out of ' + QN + '</small></div><p class="quiz-fb">' + line + '</p></div>' +
      '<div class="leg-nav" style="margin-top:auto"><button class="btn btn--go" type="button" id="quizAgain">Play again</button><a class="btn btn--line" href="#logbook">Study the logbook</a></div>';
    $('#quizAgain').addEventListener('click', startQuiz);
  }
  if (quizBox) startQuiz();

  /* ------------------------------------------------------------------ nav, tabs */
  var navToggle = $('#navToggle'), nav = $('#nav');
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (ev) { if (ev.target.tagName === 'A') { nav.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false'); } });
  }
  function selectTab(which) {
    ['Quote', 'Enq'].forEach(function (k) {
      var on = k === which;
      $('#tab' + k).setAttribute('aria-selected', on ? 'true' : 'false');
      $('#pane' + k).hidden = !on;
    });
  }
  if ($('#tabQuote')) {
    $('#tabQuote').addEventListener('click', function () { selectTab('Quote'); });
    $('#tabEnq').addEventListener('click', function () { selectTab('Enq'); });
  }
  if ($('#year')) $('#year').textContent = new Date().getFullYear();

  /* ------------------------------------------------------------------ forms
     The site is static, so a form opens the visitor's email app with the message
     filled in. The on-page panel gives a copy-and-send fallback if no app opens. */
  var MSG = { name: 'Enter your name.', email: 'Enter an email address we can reply to, like name@company.co.za.', service: 'Choose the service you need.', cargo: 'Tell us briefly what the cargo is.', message: 'Write your message.' };
  function validate(form, errBox) {
    var bad = [];
    $$('[required]', form).forEach(function (el) {
      var val = el.value.trim(), ok = !!val;
      if (ok && el.type === 'email') ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val);
      var wrap = el.closest('.field'), err = $('.err', wrap);
      wrap.classList.toggle('invalid', !ok);
      el.setAttribute('aria-invalid', ok ? 'false' : 'true');
      if (err) { err.textContent = ok ? '' : MSG[el.name]; el.setAttribute('aria-describedby', err.id); }
      if (!ok) bad.push(el);
    });
    if (bad.length) {
      errBox.hidden = false;
      errBox.innerHTML = '<strong>Please fix ' + (bad.length === 1 ? 'this field' : 'these ' + bad.length + ' fields') + ':</strong> ' +
        bad.map(function (el) { return '<a href="#' + el.id + '">' + esc($('label', el.closest('.field')).textContent.replace('*', '').trim()) + '</a>'; }).join(', ');
      if (bad.length > 1) errBox.focus(); else bad[0].focus();
    } else { errBox.hidden = true; }
    return !bad.length;
  }
  function deliver(to, subject, body, box, kind) {
    var href = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    box.hidden = false;
    box.innerHTML = '<h4>Almost done: press send in your email app</h4>' +
      '<p>Your ' + kind + ' is ready as an email to <strong>' + to + '</strong>. If your email app did not open, copy the message below and send it to that address.</p>' +
      '<pre id="' + box.id + 'Text">' + esc('To: ' + to + '\nSubject: ' + subject + '\n\n' + body) + '</pre>' +
      '<div class="sent-row"><button class="btn btn--ink btn--sm" type="button" data-copy="' + box.id + 'Text">Copy message</button>' +
      '<a class="btn btn--line btn--sm" href="' + href + '">Open email app again</a><span role="status" class="copied"></span></div>';
    box.scrollIntoView({ block: 'nearest' });
    try { window.location.href = href; } catch (e) { /* the panel above is the fallback */ }
  }
  document.addEventListener('click', function (ev) {
    var b = ev.target.closest && ev.target.closest('[data-copy]'); if (!b) return;
    var pre = document.getElementById(b.getAttribute('data-copy')), note = $('.copied', b.parentNode);
    var sel = function () { var r = document.createRange(); r.selectNodeContents(pre); var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); note.textContent = 'Selected. Press Ctrl+C or Cmd+C to copy.'; };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(pre.textContent).then(function () { note.textContent = 'Copied.'; }, sel); else sel();
  });
  function val(id) { var el = $('#' + id); return el ? el.value.trim() : ''; }

  var qf = $('#quoteForm');
  if (qf) qf.addEventListener('submit', function (ev) {
    ev.preventDefault();
    if (!validate(qf, $('#quoteErr'))) return;
    var who = val('qCompany') || val('qName');
    var body = ['QUOTE REQUEST (from africorn-ios.co.za)', '',
      'Name: ' + val('qName'), 'Company: ' + (val('qCompany') || '-'), 'Email: ' + val('qEmail'), 'Phone: ' + (val('qPhone') || '-'), '',
      'Service: ' + val('qService'), 'Type of move: ' + val('qDir'), 'Collect from: ' + (val('qFrom') || '-'), 'Deliver to: ' + (val('qTo') || '-'),
      'Container / load size: ' + val('qEquip'), 'Cargo ready date: ' + (val('qDate') || '-'), '', 'Cargo:', val('qCargo')].join('\n');
    deliver(SALES, 'Quote request: ' + val('qService') + ' (' + who + ')', body, $('#quoteSent'), 'quote request');
  });
  var ef = $('#enqForm');
  if (ef) ef.addEventListener('submit', function (ev) {
    ev.preventDefault();
    if (!validate(ef, $('#enqErr'))) return;
    var body = ['GENERAL ENQUIRY (from africorn-ios.co.za)', '', 'Name: ' + val('eName'), 'Email: ' + val('eEmail'), '', val('eMsg')].join('\n');
    deliver(INFO, val('eSubject') || 'Website enquiry from ' + val('eName'), body, $('#enqSent'), 'enquiry');
  });
})();
