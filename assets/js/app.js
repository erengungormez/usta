/* USTA ortak betikler: üst menü, alt bilgi, durum kaydı, yardımcılar. */
(function () {
  var KEY = 'usta_state_v1';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} }

  var state = load();
  state.progress = state.progress || {};
  state.quiz = state.quiz || {};
  state.certs = state.certs || [];
  state.series = state.series || {};

  USTA.state = state;
  USTA.save = function () { save(state); };
  USTA.user = function () { return state.user || null; };
  USTA.setUser = function (u) { state.user = u; save(state); };
  USTA.logout = function () { delete state.user; save(state); };

  USTA.doneLessons = function (cid) { return state.progress[cid] || []; };
  USTA.markLesson = function (cid, i) {
    var d = state.progress[cid] || [];
    if (d.indexOf(i) < 0) d.push(i);
    state.progress[cid] = d; save(state);
  };
  USTA.courseProgress = function (c) {
    return Math.round(100 * USTA.doneLessons(c.id).length / c.lessons.length);
  };

  /* QR benzeri desen — koddan belirlenimli üretilir (temsilî). */
  function hash(str) { var h = 2166136261; for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  USTA.certCode = function (name, cid) {
    var h = hash(name + '|' + cid).toString(36).toUpperCase();
    while (h.length < 8) h = '0' + h;
    return 'USTA-' + h.slice(0, 4) + '-' + h.slice(4, 8);
  };
  USTA.qr = function (text, size) {
    size = size || 120; var n = 21, cell = size / n, out = '', seed = hash(text);
    function rnd() { seed ^= seed << 13; seed ^= seed >>> 17; seed ^= seed << 5; return (seed >>> 0) / 4294967296; }
    function finder(x, y) {
      return '<rect x="' + x * cell + '" y="' + y * cell + '" width="' + 7 * cell + '" height="' + 7 * cell + '" fill="currentColor"/>' +
        '<rect x="' + (x + 1) * cell + '" y="' + (y + 1) * cell + '" width="' + 5 * cell + '" height="' + 5 * cell + '" fill="#fff"/>' +
        '<rect x="' + (x + 2) * cell + '" y="' + (y + 2) * cell + '" width="' + 3 * cell + '" height="' + 3 * cell + '" fill="currentColor"/>';
    }
    for (var y = 0; y < n; y++) for (var x = 0; x < n; x++) {
      var inF = (x < 8 && y < 8) || (x > 12 && y < 8) || (x < 8 && y > 12);
      if (!inF && rnd() > 0.52) out += '<rect x="' + x * cell + '" y="' + y * cell + '" width="' + cell + '" height="' + cell + '" fill="currentColor"/>';
    }
    return '<svg viewBox="0 0 ' + size + ' ' + size + '" width="' + size + '" height="' + size + '" role="img" aria-label="Doğrulama kodu">' +
      '<rect width="' + size + '" height="' + size + '" fill="#fff"/>' + finder(0, 0) + finder(14, 0) + finder(0, 14) + out + '</svg>';
  };
  USTA.issueCert = function (cid, score) {
    var u = USTA.user(); var name = u ? u.name : 'Misafir Öğrenci';
    var code = USTA.certCode(name, cid);
    var existing = state.certs.find(function (c) { return c.code === code; });
    if (!existing) {
      existing = { code: code, cid: cid, name: name, score: score, date: new Date().toISOString().slice(0, 10) };
      state.certs.push(existing);
    } else { existing.score = Math.max(existing.score, score); }
    save(state); return existing;
  };
  USTA.findCert = function (code) {
    code = (code || '').trim().toUpperCase();
    var c = state.certs.find(function (x) { return x.code === code; });
    if (c) return c;
    if (code === 'USTA-DEMO-2026') return { code: code, cid: 'roket-nasil-ucar', name: 'Elif Yılmaz', score: 100, date: '2026-10-02', demo: true };
    return null;
  };

  /* Seviye: tamamlanan derslere göre */
  USTA.userLevel = function () {
    var certs = state.certs.length;
    var idx = certs >= 6 ? 3 : certs >= 3 ? 2 : certs >= 1 ? 1 : 0;
    return { idx: idx, level: USTA.levels[idx], certs: certs };
  };

  USTA.icon = function (name, cls) {
    return '<svg class="' + (cls || '') + '" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (USTA.icons[name] || '') + '</svg>';
  };
  USTA.esc = function (s) { return String(s).replace(/[&<>"']/g, function (m) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]; }); };

  USTA.courseCard = function (c) {
    var a = USTA.areaById(c.area), l = USTA.levelById(c.level), p = USTA.courseProgress(c);
    var mins = c.lessons.reduce(function (s, x) { return s + x.d; }, 0);
    return '<a class="course" href="ders.html?id=' + c.id + '">' +
      '<div class="thumb lv-' + c.level + '">' + USTA.icon(a.icon) + '<span class="tag" style="color:#fff;opacity:.85">' + l.name + '</span></div>' +
      '<div class="body"><span class="tag">' + a.name + '</span><h3>' + USTA.esc(c.title) + '</h3><p class="muted" style="font-size:15px">' + USTA.esc(c.summary) + '</p>' +
      (p ? '<div class="bar" style="margin-top:8px"><i style="width:' + p + '%"></i></div>' : '') +
      '<div class="meta"><span>' + c.lessons.length + ' ders</span><span>' + mins + ' dk</span>' + (c.lab ? '<span style="color:var(--red)">Sanal lab</span>' : '') + (p === 100 ? '<span style="color:var(--ok)">Tamamlandı</span>' : '') + '</div></div></a>';
  };

  USTA.toast = function (msg) {
    var t = document.querySelector('.toast');
    if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('show');
    clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove('show'); }, 2600);
  };
  USTA.param = function (k) { return new URLSearchParams(location.search).get(k); };

  /* Üst menü ve alt bilgi */
  var logo = '<span class="steps"><i></i><i></i><i></i><i></i></span>USTA';
  var links = [['akademi.html', 'Akademi'], ['doc.html', 'Doc'], ['sinav.html', 'Sınav'], ['lab.html', 'Sanal Lab'], ['koc.html', 'Koç'], ['yarismalar.html', 'Yarışmalar'], ['sertifika.html', 'Sertifika']];
  var page = (location.pathname.split('/').pop() || 'index.html');

  function header() {
    var u = USTA.user();
    var nav = links.map(function (l) { return '<a href="' + l[0] + '"' + (page === l[0] ? ' class="on"' : '') + '>' + l[1] + '</a>'; }).join('');
    var cta = u
      ? '<a class="btn btn-ink btn-sm" href="panel.html">Panelim</a>'
      : '<a class="btn btn-ghost btn-sm" href="giris.html">Giriş yap</a><a class="btn btn-ink btn-sm" href="giris.html?k=1">Ücretsiz başla</a>';
    return '<header class="top"><div class="wrap"><a class="logo" href="index.html" aria-label="USTA ana sayfa">' + logo + '</a>' +
      '<nav class="nav" id="nav">' + nav + '</nav><div class="cta">' + cta + '</div>' +
      '<button class="menu-btn" aria-label="Menü" aria-controls="nav"><span></span></button></div></header>';
  }
  function footer() {
    return '<footer class="foot"><div class="wrap"><div class="cols">' +
      '<div><a class="logo" href="index.html">' + logo + '</a><p style="margin-top:16px;max-width:320px">Ulusal Sertifikalı Teknoloji Akademisi. Merak eden her gence, yarışmaya ve projeye giden yolda eksik basamak.</p></div>' +
      '<div><b>Öğren</b><a href="akademi.html">Akademi</a><a href="dersler.html">Ders kataloğu</a><a href="doc.html">Doc</a><a href="lab.html">Sanal laboratuvar</a><a href="koc.html">Yapay zekâ koç</a></div>' +
      '<div><b>İlerle</b><a href="sinav.html">Alan sınavı</a><a href="yarismalar.html">Yarışmalar</a><a href="sertifika.html">Sertifika doğrula</a><a href="panel.html">Panelim</a></div>' +
      '<div><b>Akademi</b><a href="index.html#seviyeler">Seviyeler</a><a href="index.html#nasil">Nasıl çalışır?</a><a href="giris.html?k=1">Kayıt ol</a></div>' +
      '</div><div class="legal"><span>USTA bir platform önerisidir; içerikler ve ekranlar temsilîdir.</span><span>© 2026 USTA</span></div></div></footer>';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var h = document.getElementById('site-header'); if (h) h.outerHTML = header();
    var f = document.getElementById('site-footer'); if (f) f.outerHTML = footer();
    var btn = document.querySelector('.menu-btn');
    if (btn) btn.addEventListener('click', function () { document.getElementById('nav').classList.toggle('open'); });
    var top = document.querySelector('.top');
    function onScroll() { if (top) top.classList.toggle('scrolled', window.scrollY > 8); }
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  });
})();
