/* ===== GUIDE DES IMAGES Créez un dossier "images" au même niveau que ce HTML. Renommez vos fichiers exactement comme ci-dessous : images/ ├── hero-basket-tournament.jpg ← fond hero (votre visuel Basket) ├── basket-tournament.jpg ← image principale Basket ├── basket-tournament-2.jpg ← variante 2 (optionnel) ├── basket-tournament-3.jpg ← variante 3 (optionnel) ├── piste-bowling.jpg ├── golf-interieur.jpg ├── bowling-ambiance.jpg ← optionnel ├── connect-four.jpg ├── electronic-shuffle.jpg ├── table-electrique-bowling.jpg ├── arcade-basket.jpg ├── voltrush-loyine.jpg ├── enigma-room.jpg ├── wall-crazy-light.jpg ├── crazy-light.jpg ├── amz-classic-hockey.jpg ├── crazy-pong.jpg ├── skyline-racer.jpg ├── stick-challenge.jpg ├── ninja-stick.jpg ├── neurona-arena-vip.jpg ├── neurona-arena-portable.jpg ├── reflex-arena-portable.jpg ├── voltrush-portable.jpg └── espace-loisirs-vue.jpg ========================================================= */
const games = [{
    n: "Basket Tournament",
    e: "🏀",
    c: "phare",
    d: "Arène connectée géante 4×4×4 m, écran HD 65\", capteurs de position. La pièce maîtresse du centre.",
    imp: "18 112 500",
    loc: "8 280 000",
    eco: "9 832 500",
    cat: "Phare",
    col: "#22d3ee",
    img: "images/basket-tournament.jpg"
}, {
    n: "Piste de Bowling",
    e: "🎳",
    c: "phare",
    d: "Pistes professionnelles complètes : ramasse-quilles, retours de boules, écrans de scoring.",
    imp: "13 167 500",
    loc: "6 900 000",
    eco: "6 267 500",
    cat: "Phare",
    col: "#22d3ee",
    img: "images/piste-bowling.jpg"
}, {
    n: "Golf Intérieur Interactif",
    e: "⛳",
    c: "phare",
    d: "Piste au design attractif, jeu intergénérationnel par excellence avec écran 55\" HD.",
    imp: "8 255 000",
    loc: "4 405 000",
    eco: "3 850 000",
    cat: "Phare",
    col: "#22d3ee",
    img: "images/golf-interieur.jpg"
}, {
    n: "Connect Four Géant",
    e: "🔴",
    c: "social",
    d: "Puissance 4 mural géant. Très visuel, idéal pour les photos sur les réseaux sociaux.",
    imp: "17 250 000",
    loc: "8 050 000",
    eco: "9 200 000",
    cat: "Social",
    col: "#ff2d95",
    img: "images/connect-four.jpg"
}, {
    n: "Electronic Shuffle",
    e: "🥌",
    c: "social",
    d: "Table de palets numériques sans friction avec capteurs de points automatisés.",
    imp: "17 250 000",
    loc: "8 050 000",
    eco: "9 200 000",
    cat: "Social",
    col: "#ff2d95",
    img: "images/electronic-shuffle.jpg"
}, {
    n: "Table Électrique Bowling",
    e: "🎳",
    c: "compact",
    d: "Version compacte du bowling sur table, idéale pour groupes d'amis.",
   
    loc: "9 200 000",
    eco: "6 325 000",
    cat: "Compact",
    col: "#22d3ee",
    img: "images/table-electrique-bowling.jpg"
}, {
    n: "Arcade Basket",
    e: "🏀",
    c: "arcade",
    d: "Bornes de shoot 1 à 4 joueurs, écran HD 45\", haute fréquence d'utilisation.",
    imp: "3 450 000",
    loc: "2 070 000",
    eco: "1 380 000",
    cat: "Arcade",
    col: "#39ff14",
    img: "images/arcade-basket.jpg"
}, {
    n: "VoltRush / LOYINE",
    e: "⚡",
    c: "arcade",
    d: "Jeux d'adresse et de réflexes avec compteurs digitaux. Stimulant et addictif.",
    imp: "",
    loc: "2 300 000",
    eco: "",
    cat: "Arcade",
    col: "#39ff14",
    img: "images/voltrush-loyine2.jpg"
}, {
    n: "Enigma Room",
    e: "🔐",
    c: "arcade",
    d: "Escape Game Express — 4 étapes automatisées. Rotation rapide garantie.",
    imp: "13 450 000",
    loc: "5 450 000",
    eco: "8 000 000",
    cat: "Arcade",
    col: "#ff6b35",
    img: "images/enigma-room.jpg"
}, {
    n: "Wall Crazy Light",
    e: "💡",
    c: "arcade",
    d: "Mur de réflexes à boutons lumineux (style Batak). Test d'endurance intense.",
    imp: "",
    loc: "6 555 000",
    eco: "",
    cat: "Arcade",
    col: "#ffd60a",
    img: "images/wall-crazy-light.jpg"
}, {
    n: "Crazy Light",
    e: "🌈",
    c: "compact",
    d: "Boutons lumineux interactifs. Jeu de réflexes coloré et addictif.",
    imp: "2 875 000",
    loc: "1 725 000",
    eco: "1 150 000",
    cat: "Compact",
    col: "#39ff14",
    img: "images/crazy-light.jpg"
}, {
    n: "AMZ Classic Hockey",
    e: "🏒",
    c: "compact",
    d: "Table de palets sans air avec affichage LED. Compacte et robuste.",
    imp: "",
    loc: "805 000",
    eco: "",
    cat: "Compact",
    col: "#22d3ee",
    img: "images/amz-classic-hockey.jpg"
}, {
    n: "Crazy Pong",
    e: "🏓",
    c: "compact",
    d: "Ping-pong électrique — version électronique du ping-pong classique.",
    imp: "",
    loc: "862 500",
    eco: "",
    cat: "Compact",
    col: "#22d3ee",
    img: "images/crazy-pong.jpg"
}, {
    n: "Skyline Racer",
    e: "🏙️",
    c: "adresse",
    d: "Borne de réflexes verticaux avec test de timing. Précision et rapidité. Niveau Expert.",
    imp: "",
    loc: "977 500",
    eco: "",
    cat: "Adresse",
    col: "#ff6b35",
    img: "images/skyline-racer.jpg"
}, {
    n: "Stick Challenge",
    e: "🥢",
    c: "adresse",
    d: "Jeu d'adresse consistant à rattraper des bâtons. Simple, addictif. Niveau Débutant.",
    imp: "",
    loc: "707 250",
    eco: "",
    cat: "Adresse",
    col: "#39ff14",
    img: "images/stick-challenge.jpg"
}, {
    n: "Ninja Stick",
    e: "🥷",
    c: "adresse",
    d: "Jeu d'équilibre des Ninjas. Défi physique pour amateurs de sensations. Niveau Expert.",
    imp: "",
    loc: "600 000",
    eco: "",
    cat: "Adresse",
    col: "#ff6b35",
    img: "images/ninja-stick.jpg"
}, {
    n: "Neurona Arena VIP",
    e: "🧠",
    c: "phare",
    d: "Salle Prestige privatisable, format compétitif champion. L'offre premium du centre.",
    imp: "15 525 000",
    loc: "9 200 000",
    eco: "6 325 000",
    cat: "VIP",
    col: "#ffd60a",
    img: "images/neurona-arena-vip.jpg"
}, {
    n: "Neurona Arena Portable",
    e: "🎯",
    c: "portable",
    d: "Version familiale & éducative, transportable et polyvalente.",
    imp: "",
    loc: "575 000",
    eco: "",
    cat: "Portable",
    col: "#22d3ee",
    img: "images/neurona-arena-portable.jpg"
}, {
    n: "Reflex Arena Portable",
    e: "⚡",
    c: "portable",
    d: "Compacte et transportable, idéale pour animations mobiles.",
    imp: "",
    loc: "402 500",
    eco: "",
    cat: "Portable",
    col: "#39ff14",
    img: "images/reflex-arena-portable.jpg"
}, {
    n: "VoltRush Portable",
    e: "🔋",
    c: "portable",
    d: "Jeu de réflexes portable, parfait pour événements extérieurs.",
    imp: "",
    loc: "402 500",
    eco: "",
    cat: "Portable",
    col: "#ff6b35",
    img: "images/voltrush-portable.jpg"
}]; /* ===== Render catalog with images ===== */
const catalog = document.getElementById('catalog');

function renderCatalog(filter = 'all') {
    catalog.innerHTML = '';
    games.filter(g => filter === 'all' || g.c === filter).forEach((g, i) => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.style.setProperty('--accent', g.col);
        card.innerHTML = ` ${g.loc ? '<span class="badge-local">Fab. locale</span>' : ''} <div class="game-img"> <img src="${g.img}" alt="${g.n}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"> <div class="img-fallback" style="display:none">${g.e}</div> </div> <div class="game-body"> <span class="game-cat" style="background:${g.col}">${g.cat}</span> <h3>${g.n}</h3> <p>${g.d}</p> <div class="game-prices"> <span class="imp">${g.imp ? `Import : ${g.imp} FCFA` : ''}</span> ${g.loc ? `<span class="loc">Local : ${g.loc} FCFA</span>` : ''} ${g.eco ? `<span class="ec">Économie : ${g.eco} FCFA</span>` : '<span class="imp" style="opacity:.5">Fabrication locale uniquement</span>'} </div> </div>`;
        catalog.appendChild(card);
        setTimeout(() => card.classList.add('show'), 60 * i);
    });
}
renderCatalog(); /* Filters */
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        renderCatalog(btn.dataset.f);
    });
}); /* ===== Recap table ===== */
const recapBody = document.getElementById('recapBody');
games.forEach(g => {
    const tr = document.createElement('tr');
    if (g.loc) tr.className = 'highlight';
    tr.innerHTML = `<td class="name">${g.n}</td><td>${g.imp}</td> <td class="loc">${g.loc || '—'}</td><td class="eco">${g.eco || '—'}</td>`;
    recapBody.appendChild(tr);
}); /* ===== Chart bars ===== */
const chartData = [{
    n: "Basket Tournament",
    imp: 18112500,
    loc: 8280000,
    eco: "9 832 500"
}, {
    n: "Table Élec. Bowling",
    imp: 18400000,
    loc: 9200000,
    eco: "9 200 000"
}, {
    n: "Connect Four",
    imp: 17250000,
    loc: 8050000,
    eco: "9 200 000"
}, {
    n: "Electronic Shuffle",
    imp: 17250000,
    loc: 8050000,
    eco: "9 200 000"
}, {
    n: "Piste de Bowling",
    imp: 13167500,
    loc: 6900000,
    eco: "6 267 500"
}, {
    n: "Arcade Basket",
    imp: 3450000,
    loc: 2070000,
    eco: "1 380 000"
}, {
    n: "Crazy Light",
    imp: 2875000,
    loc: 1725000,
    eco: "1 150 000"
}];
const chart = document.getElementById('chart');
const max = Math.max(...chartData.map(d => d.imp));
chartData.forEach(d => {
    const row = document.createElement('div');
    row.className = 'bar-row';
    row.innerHTML = ` <div class="bar-label"><span>${d.n}</span><span class="eco">Éco : ${d.eco} FCFA</span></div> <div class="bar-track"><div class="bar-fill bar-import" data-w="${d.imp / max * 100}">${d.imp.toLocaleString('fr-FR')}</div></div> <div class="bar-track"><div class="bar-fill bar-local" data-w="${d.loc / max * 100}">${d.loc.toLocaleString('fr-FR')}</div></div>`;
    chart.appendChild(row);
}); /* ===== Counters ===== */
function animateCounter(el) {
    const target = +el.dataset.target,
        suf = el.dataset.suffix || '';
    let cur = 0;
    const step = target / 60;
    const t = setInterval(() => {
        cur += step;
        if (cur >= target) {
            cur = target;
            clearInterval(t)
        }
        el.textContent = Math.floor(cur) + suf;
    }, 22);
} /* ===== Intersection reveal + triggers ===== */
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            if (e.target.id === 'stats') document.querySelectorAll('.stat-num').forEach(animateCounter);
            if (e.target.id === 'chart') e.target.querySelectorAll('.bar-fill').forEach(b => b.style.width = b.dataset.w + '%');
            io.unobserve(e.target);
        }
    });
}, {
    threshold: .2
});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
io.observe(document.getElementById('stats'));
io.observe(document.getElementById('chart')); /* ===== Burger menu ===== */
document.getElementById('burger').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
});
document.querySelectorAll('#navLinks a').forEach(a => a.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
})); /* ===== Nav shrink on scroll ===== */
window.addEventListener('scroll', () => {
    document.getElementById('nav').style.padding = window.scrollY > 50 ? '8px 5%' : '14px 5%';
}); /* ===== Particle background ===== */
const cv = document.getElementById('bgCanvas'),
    ctx = cv.getContext('2d');
let W, H, parts = [];

function resize() {
    W = cv.width = innerWidth;
    H = cv.height = innerHeight;
}
resize();
addEventListener('resize', resize);
const cols = ['#22d3ee', '#39ff14', '#ffd60a', '#ff2d95'];
for (let i = 0; i < 70; i++) parts.push({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 2 + .5,
    vx: (Math.random() - .5) * .4,
    vy: (Math.random() - .5) * .4,
    c: cols[Math.floor(Math.random() * cols.length)]
});

function draw() {
    ctx.clearRect(0, 0, W, H);
    parts.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 7);
        ctx.fillStyle = p.c;
        ctx.globalAlpha = .6;
        ctx.fill();
    });
    ctx.globalAlpha = .1;
    for (let i = 0; i < parts.length; i++)
        for (let j = i + 1; j < parts.length; j++) {
            const dx = parts[i].x - parts[j].x,
                dy = parts[i].y - parts[j].y,
                dist = Math.hypot(dx, dy);
            if (dist < 120) {
                ctx.beginPath();
                ctx.moveTo(parts[i].x, parts[i].y);
                ctx.lineTo(parts[j].x, parts[j].y);
                ctx.strokeStyle = '#22d3ee';
                ctx.stroke();
            }
        }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
}
draw();