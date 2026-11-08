/* USTA Doc — yazılı anlatımlar. Değerler ve ölçüler temsilîdir. */
(function () {
  function grid(id) {
    return '<defs><pattern id="g' + id + '" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="rgba(246,243,236,.07)" stroke-width="1"/></pattern>' +
      '<pattern id="G' + id + '" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M100 0H0V100" fill="none" stroke="rgba(246,243,236,.13)" stroke-width="1"/></pattern>' +
      '<marker id="a' + id + '" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="#F6F3EC"/></marker>' +
      '<marker id="r' + id + '" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10Z" fill="#E0402B"/></marker></defs>' +
      '<rect width="100%" height="100%" fill="#16171B"/><rect width="100%" height="100%" fill="url(#g' + id + ')"/><rect width="100%" height="100%" fill="url(#G' + id + ')"/>';
  }
  function svg(id, w, h, body, stamp) {
    return '<svg class="bp" viewBox="0 0 ' + w + ' ' + h + '" role="img" font-family="Geist, Arial, sans-serif">' + grid(id) + body +
      '<g font-size="10" fill="rgba(246,243,236,.45)" letter-spacing="1.5"><text x="' + (w - 16) + '" y="' + (h - 14) + '" text-anchor="end">USTA · ' + stamp + ' · ÖLÇEKSİZ</text></g></svg>';
  }
  var P = 'fill="none" stroke="#F6F3EC" stroke-width="1.6"', R = 'fill="none" stroke="#E0402B" stroke-width="2"', T = 'fill="#F6F3EC" font-size="13"', TR = 'fill="#E0402B" font-size="13" font-weight="600"', TM = 'fill="rgba(246,243,236,.6)" font-size="11"';

  var roketSvg = svg('rk', 800, 300,
    '<path d="M60 150Q110 124 180 128V172Q110 176 60 150Z" ' + P + '/>' +
    '<rect x="180" y="128" width="460" height="44" ' + P + '/>' +
    '<path d="M570 128L620 80H652L640 128M570 172L620 220H652L640 172" ' + P + '/>' +
    '<rect x="640" y="138" width="14" height="24" ' + P + '/>' +
    '<g stroke-dasharray="4 4" fill="none" stroke="rgba(246,243,236,.5)" stroke-width="1.2"><rect x="200" y="134" width="120" height="32"/><rect x="332" y="134" width="88" height="32"/><rect x="530" y="134" width="106" height="32"/></g>' +
    '<g ' + TM + ' text-anchor="middle"><text x="260" y="154">PARAŞÜT</text><text x="376" y="154">AVİYONİK</text><text x="583" y="154">MOTOR</text></g>' +
    '<g transform="translate(456 150)"><circle r="10" fill="#16171B" stroke="#F6F3EC" stroke-width="1.6"/><path d="M0 0V-10A10 10 0 0 1 10 0Z M0 0V10A10 10 0 0 1 -10 0Z" fill="#F6F3EC"/></g>' +
    '<g transform="translate(525 150)"><circle r="10" fill="#16171B" stroke="#E0402B" stroke-width="2"/><circle r="3.5" fill="#E0402B"/></g>' +
    '<path d="M456 120V92H525V120" ' + R + ' stroke-width="1.4"/><text x="490" y="84" text-anchor="middle" ' + TR + '>pay ≈ 2,2 kalibre</text>' +
    '<text x="456" y="198" text-anchor="middle" ' + T + '>AM</text><text x="456" y="212" text-anchor="middle" ' + TM + '>520 mm</text>' +
    '<text x="525" y="198" text-anchor="middle" ' + TR + '>BM</text><text x="525" y="212" text-anchor="middle" ' + TM + '>610 mm</text>' +
    '<path d="M60 262H654" stroke="#F6F3EC" stroke-width="1" marker-start="url(#ark)" marker-end="url(#ark)"/><path d="M60 250V272M654 250V272" stroke="#F6F3EC" stroke-width="1"/>' +
    '<rect x="322" y="254" width="72" height="16" fill="#16171B"/><text x="358" y="266" text-anchor="middle" ' + T + '>780 mm</text>' +
    '<path d="M690 128V172" stroke="#F6F3EC" stroke-width="1" marker-start="url(#ark)" marker-end="url(#ark)"/><path d="M680 128H700M680 172H700" stroke="#F6F3EC" stroke-width="1"/><text x="708" y="155" ' + T + '>Ø 41 mm</text>' +
    '<text x="60" y="40" ' + T + ' font-size="15" font-weight="600">MODEL ROKET · YAN GÖRÜNÜŞ</text><text x="60" y="58" ' + TM + '>Ölçüler burun ucundan itibaren</text>', 'ŞEKİL 1');

  function box(x, y, w, h, t, red, sub) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="6" ' + (red ? R : P) + '/>' +
      '<text x="' + (x + w / 2) + '" y="' + (y + h / 2 + (sub ? -2 : 5)) + '" text-anchor="middle" ' + (red ? TR : T) + '>' + t + '</text>' +
      (sub ? '<text x="' + (x + w / 2) + '" y="' + (y + h / 2 + 14) + '" text-anchor="middle" ' + TM + '>' + sub + '</text>' : '');
  }
  function arrow(d, red, id) { return '<path d="' + d + '" fill="none" stroke="' + (red ? '#E0402B' : '#F6F3EC') + '" stroke-width="1.6" marker-end="url(#' + (red ? 'r' : 'a') + id + ')"/>'; }

  var pidSvg = svg('pd', 800, 270,
    '<text x="24" y="40" ' + T + ' font-size="15" font-weight="600">KAPALI ÇEVRİM KONTROL · YUVARLANMA EKSENİ</text>' +
    '<text x="24" y="104" ' + T + '>Hedef açı</text><text x="24" y="120" ' + TM + '>r(t)</text>' + arrow('M96 108H134', false, 'pd') +
    '<circle cx="152" cy="108" r="16" ' + P + '/><path d="M144 108H160M152 100V116" stroke="#F6F3EC" stroke-width="1.6"/><text x="160" y="140" ' + T + '>−</text>' +
    arrow('M168 108H220', true, 'pd') + '<text x="194" y="98" text-anchor="middle" ' + TR + ' font-size="11">e(t)</text>' +
    box(222, 82, 120, 52, 'PID', true, 'Kp · Ki · Kd') + arrow('M342 108H398', false, 'pd') + '<text x="370" y="98" text-anchor="middle" ' + TM + '>u(t)</text>' +
    box(400, 82, 120, 52, 'Motorlar', false, 'ESC + pervane') + arrow('M520 108H576', false, 'pd') +
    box(578, 82, 120, 52, 'İHA gövdesi', false, 'dinamik') + arrow('M698 108H776', false, 'pd') + '<text x="736" y="98" text-anchor="middle" ' + T + '>y(t)</text>' +
    '<path d="M740 108V210H522" fill="none" stroke="#F6F3EC" stroke-width="1.6"/>' + box(400, 186, 120, 48, 'IMU', false, 'jiroskop + ivme') +
    arrow('M400 210H152V126', false, 'pd') + '<text x="252" y="228" text-anchor="middle" ' + TM + '>ölçülen açı</text>', 'ŞEKİL 2');

  var cvSvg = svg('cv', 800, 230,
    '<text x="20" y="36" ' + T + ' font-size="15" font-weight="600">GÖRÜNTÜ İŞLEME HATTI · KARE BAŞINA</text>' +
    [['Kamera', '640×480 · BGR'], ['Ön işleme', 'gri + bulanık'], ['Özellik', 'kenar / evrişim'], ['Model', 'sınıf + kutu'], ['Çıktı', 'hedef · güven']].map(function (b, i) {
      var x = 20 + i * 154;
      return box(x, 76, 124, 64, b[0], i === 4, b[1]) + (i < 4 ? arrow('M' + (x + 124) + ' 108H' + (x + 152), false, 'cv') : '') +
        '<text x="' + (x + 62) + '" y="168" text-anchor="middle" ' + TM + '>' + ['adım 1', 'adım 2', 'adım 3', 'adım 4', 'adım 5'][i] + '</text>';
    }).join('') +
    '<path d="M20 186H758" stroke="rgba(246,243,236,.3)" stroke-dasharray="3 5"/><text x="20" y="206" ' + TM + '>Hedef: saniyede en az 15 kare. Her adımın süresini ölç, en yavaşını iyileştir.</text>', 'ŞEKİL 3');

  var ardSvg = svg('ar', 800, 300,
    '<text x="40" y="30" ' + T + ' font-size="15" font-weight="600">BAĞLANTI ŞEMASI · HC-SR04</text>' +
    '<rect x="40" y="50" width="250" height="220" rx="10" ' + P + '/><text x="70" y="84" ' + T + ' font-size="16" font-weight="600">Arduino Uno</text><text x="70" y="102" ' + TM + '>mikrodenetleyici</text>' +
    '<rect x="70" y="190" width="70" height="50" rx="4" ' + P + ' stroke-dasharray="3 3"/><text x="105" y="219" text-anchor="middle" ' + TM + '>USB</text>' +
    '<rect x="520" y="70" width="230" height="180" rx="10" ' + P + '/><circle cx="600" cy="120" r="26" ' + P + '/><circle cx="680" cy="120" r="26" ' + P + '/><circle cx="600" cy="120" r="12" ' + P + ' stroke-dasharray="2 3"/><circle cx="680" cy="120" r="12" ' + P + ' stroke-dasharray="2 3"/>' +
    '<text x="640" y="236" text-anchor="middle" ' + T + ' font-size="16" font-weight="600">HC-SR04</text>' +
    [['5V', 'VCC', 130, true], ['D9', 'TRIG', 160, false], ['D10', 'ECHO', 190, false], ['GND', 'GND', 220, false]].map(function (p) {
      var y = p[2];
      return '<circle cx="290" cy="' + y + '" r="4" fill="#F6F3EC"/><text x="278" y="' + (y + 4) + '" text-anchor="end" ' + (p[3] ? TR : T) + '>' + p[0] + '</text>' +
        '<path d="M294 ' + y + 'H516" stroke="' + (p[3] ? '#E0402B' : '#F6F3EC') + '" stroke-width="' + (p[3] ? 2 : 1.6) + '"' + (p[1] === 'GND' ? ' stroke-dasharray="6 4"' : '') + '/>' +
        '<circle cx="520" cy="' + y + '" r="4" fill="#F6F3EC"/><text x="532" y="' + (y + 4) + '" ' + (p[3] ? TR : T) + ' font-size="11">' + p[1] + '</text>';
    }).join('') +
    '<text x="405" y="150" text-anchor="middle" ' + TM + '>çıkış</text><text x="405" y="210" text-anchor="middle" ' + TM + '>giriş</text>', 'ŞEKİL 4');

  var groups = [[0, 1, 'başlık', 'uint8', true], [1, 2, 'paket no', 'uint16'], [3, 4, 'irtifa (m)', 'float32'], [7, 4, 'hız (m/s)', 'float32'], [11, 2, 'sıcaklık ×100', 'int16'], [13, 1, 'kontrol', 'uint8', true]];
  var cw = 760 / 14;
  var telSvg = svg('tl', 800, 230,
    '<text x="20" y="36" ' + T + ' font-size="15" font-weight="600">TELEMETRİ PAKETİ · 14 BAYT · LITTLE-ENDIAN</text>' +
    Array.apply(null, Array(14)).map(function (_, i) { return '<text x="' + (20 + i * cw + cw / 2) + '" y="74" text-anchor="middle" ' + TM + '>' + i + '</text>'; }).join('') +
    groups.map(function (g) {
      var x = 20 + g[0] * cw, w = g[1] * cw;
      var cells = ''; for (var k = 1; k < g[1]; k++) cells += '<path d="M' + (x + k * cw) + ' 84V128" stroke="rgba(246,243,236,.3)" stroke-dasharray="2 3"/>';
      return '<rect x="' + x + '" y="84" width="' + w + '" height="44" ' + (g[4] ? R + ' fill="rgba(224,64,43,.14)"' : P) + '/>' + cells +
        (g[0] === 0 ? '<text x="' + (x + w / 2) + '" y="111" text-anchor="middle" ' + TR + '>0xAA</text>' : '') +
        '<path d="M' + (x + 4) + ' 142V150H' + (x + w - 4) + 'V142" fill="none" stroke="' + (g[4] ? '#E0402B' : 'rgba(246,243,236,.6)') + '" stroke-width="1.2"/>' +
        '<text x="' + (x + w / 2) + '" y="170" text-anchor="middle" ' + (g[4] ? TR : T) + ' font-size="' + (g[1] > 1 ? 13 : 11) + '">' + g[2] + '</text>' +
        '<text x="' + (x + w / 2) + '" y="186" text-anchor="middle" ' + TM + '>' + g[3] + '</text>';
    }).join(''), 'ŞEKİL 5');

  USTA.docs = [
    {
      id: 'roket-anatomisi', area: 'uzay', tier: 'kalfa', title: 'Model roket anatomisi ve kararlılık', mins: 8, series: 'uzay-kalfa', exam: true,
      lead: 'Bir roketin düz uçması iki noktanın yerine bağlıdır: ağırlık merkezi ve basınç merkezi. Bu doküman ikisini tanıtır, aradaki mesafeyi hesaplar ve tasarımı nasıl düzelteceğini gösterir.',
      blocks: [
        { h: 'Parçalar' },
        { p: 'Bir model roket dört ana bölümden oluşur: <b>burun konisi</b> havayı yarar, <b>gövde borusu</b> her şeyi taşır, <b>kanatçıklar</b> yönü korur, <b>motor</b> itkiyi üretir. Gövdenin içinde paraşüt ve aviyonik (uçuş bilgisayarı) bölmeleri bulunur.' },
        { fig: roketSvg, cap: 'Şekil 1 — Model roket yan görünüşü. Beyaz-siyah daire ağırlık merkezini (AM), kırmızı daire basınç merkezini (BM) gösterir. Ölçüler temsilîdir.' },
        { h: 'Ağırlık merkezi ve basınç merkezi' },
        { p: '<b>Ağırlık merkezi (AM)</b>, roketi tek parmakla dengede tutabileceğin noktadır. <b>Basınç merkezi (BM)</b> ise havanın rokete uyguladığı kuvvetlerin toplandığı noktadır. Kanatçıklar büyüdükçe BM arkaya kayar.' },
        { callout: 'kural', t: 'Altın kural', html: 'AM her zaman BM’nin <b>önünde</b> olmalıdır. Tersi olursa roket havada takla atar.' },
        { h: 'Kararlılık payı' },
        { p: 'İki nokta arasındaki mesafe, gövde çapına bölünerek “kalibre” cinsinden ifade edilir. Buna kararlılık payı denir.' },
        { formula: 'pay = <span>(BM − AM)</span> ⁄ <span>çap</span>', cap: 'Birimler aynı olmalı: hepsi metre ya da hepsi milimetre.' },
        { table: { head: ['Pay (kalibre)', 'Durum', 'Ne yapmalı?'], rows: [['1’den küçük', 'Kararsız', 'Kanatçıkları büyüt veya buruna ağırlık ekle'], ['1 – 2,5', 'Uygun', 'Tasarım hazır, simülasyonla doğrula'], ['2,5’ten büyük', 'Aşırı kararlı', 'Rüzgâra fazla döner; kanatçığı küçült']] } },
        { h: 'Python ile hesap' },
        { code: [{ n: 'kararlilik.py', l: 'py', c: '# Kararlılık payı hesabı (temsilî değerler)\ngovde_capi = 0.041   # metre\nam = 0.52            # burundan ağırlık merkezi, metre\nbm = 0.61            # burundan basınç merkezi, metre\n\npay = (bm - am) / govde_capi\nprint(f"Kararlılık payı: {pay:.2f} kalibre")\n\nif pay < 1:\n    print("Kararsız: kanatçıkları büyüt veya buruna ağırlık ekle")\nelif pay > 2.5:\n    print("Aşırı kararlı: rüzgâra fazla döner")\nelse:\n    print("Uygun aralıkta")' }, { n: 'Çıktı', l: 'out', c: 'Kararlılık payı: 2.20 kalibre\nUygun aralıkta' }] },
        { callout: 'ipucu', t: 'Dene', html: 'Sanal laboratuvarda kanatçık sayısını değiştir; BM’nin kaydığını ve tepe noktasının nasıl etkilendiğini gör. <a href="lab.html">Laboratuvara git →</a>' },
        { h: 'Kontrol listesi' },
        { list: ['AM ve BM’yi burun ucundan ölç.', 'Motor takılıyken AM’yi yeniden ölç; motor ağırdır.', 'Payı 1 ile 2,5 kalibre arasında tut.', 'OpenRocket ile simüle et, sonucu bu hesapla karşılaştır.'] }
      ]
    },
    {
      id: 'telemetri-paketi', area: 'uzay', tier: 'usta', title: 'Telemetri paketi tasarımı', mins: 7, series: 'uzay-usta',
      lead: 'Roket havadayken yere veri gönderir. Bu verinin küçük, hızlı ve bozulduğunda fark edilebilir olması gerekir. Bayt bayt bir paket tasarlayalım.',
      blocks: [
        { h: 'Neden bayt düzeyinde?' },
        { p: 'Telsiz bağlantıların bant genişliği dardır. “irtifa=412.5” gibi metin yerine sayıyı doğrudan 4 bayt olarak göndermek paketi üç kat küçültür.' },
        { fig: telSvg, cap: 'Şekil 5 — 14 baytlık telemetri paketi. Kırmızı alanlar paketin başını ve bütünlüğünü korur.' },
        { h: 'Alanlar' },
        { table: { head: ['Bayt', 'Alan', 'Tür', 'Açıklama'], rows: [['0', 'Başlık', 'uint8', 'Her paket 0xAA ile başlar'], ['1–2', 'Paket no', 'uint16', 'Kayıp paketi fark etmek için'], ['3–6', 'İrtifa', 'float32', 'Metre'], ['7–10', 'Hız', 'float32', 'Metre/saniye'], ['11–12', 'Sıcaklık', 'int16', '°C × 100 (ondalık kaybolmasın)'], ['13', 'Kontrol', 'uint8', 'İlk 13 baytın toplamı mod 256']] } },
        { callout: 'dikkat', t: 'Dikkat', html: 'Gönderen ve alan aynı bayt sırasını kullanmalıdır. Burada <b>little-endian</b> seçtik; Python’da <code>&lt;</code> işaretiyle belirtilir.' },
        { h: 'Paketle ve çöz' },
        { code: [{ n: 'telemetri.py', l: 'py', c: 'import struct\n\nBICIM = "<BHffh"   # başlık, no, irtifa, hız, sıcaklık\n\ndef paketle(no, irtifa, hiz, sicaklik):\n    govde = struct.pack(BICIM, 0xAA, no, irtifa, hiz, int(sicaklik * 100))\n    kontrol = sum(govde) % 256\n    return govde + bytes([kontrol])\n\ndef coz(paket):\n    if len(paket) != 14 or paket[0] != 0xAA:\n        return None\n    if sum(paket[:-1]) % 256 != paket[-1]:\n        return None   # bozuk paket\n    _, no, irtifa, hiz, s = struct.unpack(BICIM, paket[:-1])\n    return no, irtifa, hiz, s / 100' }, { n: 'Örnek', l: 'py', c: 'p = paketle(42, 412.5, 38.0, 21.37)\nprint(len(p))     # 14\nprint(coz(p))     # (42, 412.5, 38.0, 21.37)' }] },
        { h: 'Yer istasyonunda' },
        { list: ['Akışta 0xAA baytını ara, sonraki 13 baytı oku.', 'Kontrol baytı tutmazsa paketi at, bir sonraki 0xAA’yı ara.', 'Paket numarasındaki atlamaları say: kayıp oranı bağlantı kalitesini gösterir.'] }
      ]
    },
    {
      id: 'iha-pid', area: 'havacilik', tier: 'kalfa', title: 'İHA’da PID kontrolü', mins: 9, series: 'havacilik-kalfa',
      lead: 'Bir İHA rüzgârda bile dengede kalıyorsa, saniyede yüzlerce kez çalışan bir kontrol döngüsü sayesindedir. PID, bu döngünün en yaygın tarifidir.',
      blocks: [
        { h: 'Kapalı çevrim' },
        { p: 'Kontrolcü önce hedefle ölçülen değer arasındaki farkı, yani <b>hatayı</b> bulur. Sonra bu hatayı sıfıra indirecek motor komutunu hesaplar. Sensör yeni durumu ölçer ve döngü baştan başlar.' },
        { fig: pidSvg, cap: 'Şekil 2 — Yuvarlanma ekseni için kapalı çevrim. IMU gerçek açıyı ölçer, PID hatayı motor komutuna çevirir.' },
        { h: 'Üç terim' },
        { formula: 'u = K<sub>p</sub>·e + K<sub>i</sub>·∫e dt + K<sub>d</sub>·de⁄dt', cap: 'e: hata, u: motora giden komut.' },
        { table: { head: ['Terim', 'Neye bakar?', 'Çok büyükse'], rows: [['P · oransal', 'Şu anki hata', 'Salınım yapar'], ['I · integral', 'Biriken geçmiş hata', 'Yavaş, büyük dalgalanma'], ['D · türev', 'Hatanın değişim hızı', 'Gürültüye aşırı tepki']] } },
        { h: 'C++ ile döngü' },
        { code: [{ n: 'pid.cpp', l: 'cpp', c: '// Basit PID (temsilî katsayılar)\nfloat Kp = 1.2, Ki = 0.05, Kd = 0.4;\nfloat integral = 0, oncekiHata = 0;\n\nfloat pid(float hedef, float olculen, float dt) {\n  float hata = hedef - olculen;\n  integral += hata * dt;\n  float turev = (hata - oncekiHata) / dt;\n  oncekiHata = hata;\n  return Kp * hata + Ki * integral + Kd * turev;\n}\n\n// Her 4 ms (250 Hz) çağrılır\nvoid kontrolDongusu() {\n  float aci = imuOku();\n  float komut = pid(0.0, aci, 0.004);\n  motorlaraUygula(komut);\n}' }] },
        { callout: 'ipucu', t: 'Ayar sırası', html: 'Önce yalnız P’yi artır, salınım başlayınca biraz geri al. Sonra salınımı D ile sönümle. En son küçük bir I ekle.' },
        { callout: 'dikkat', t: 'Güvenlik', html: 'Ayarı pervaneler takılı değilken masada yap; uçuş testini açık alanda ve bir öğretmen gözetiminde yap.' }
      ]
    },
    {
      id: 'goruntu-isleme', area: 'yapayzeka', tier: 'usta', title: 'Görüntü işleme hattı', mins: 8, series: 'yapayzeka-usta',
      lead: 'Kameradan gelen her kare, bir hedefi bulana kadar birkaç adımdan geçer. Hattı adım adım kuralım ve her adımda ne olduğunu görelim.',
      blocks: [
        { h: 'Hattın adımları' },
        { fig: cvSvg, cap: 'Şekil 3 — Bir karenin kameradan çıktıya yolculuğu.' },
        { p: 'İlk adımlar görüntüyü sadeleştirir: renk yerine parlaklık, gürültü yerine yumuşak geçişler. Model bu sade görüntüde çok daha hızlı ve tutarlı çalışır.' },
        { h: 'OpenCV ile ilk hat' },
        { code: [{ n: 'kenar.py', l: 'py', c: 'import cv2\n\nkamera = cv2.VideoCapture(0)\nwhile True:\n    ok, kare = kamera.read()\n    if not ok:\n        break\n    gri = cv2.cvtColor(kare, cv2.COLOR_BGR2GRAY)\n    bulanik = cv2.GaussianBlur(gri, (5, 5), 0)\n    kenar = cv2.Canny(bulanik, 50, 150)\n    cv2.imshow("Kenarlar", kenar)\n    if cv2.waitKey(1) == ord("q"):\n        break\nkamera.release()\ncv2.destroyAllWindows()' }] },
        { table: { head: ['Parametre', 'Ne yapar?', 'Önerilen başlangıç'], rows: [['(5, 5)', 'Bulanıklaştırma çekirdeği', 'Tek sayı: 3, 5 veya 7'], ['50', 'Canny alt eşik', 'Gürültü varsa yükselt'], ['150', 'Canny üst eşik', 'Alt eşiğin 2–3 katı']] } },
        { callout: 'kural', t: 'Ölç, sonra iyileştir', html: 'Her adımın kaç milisaniye sürdüğünü yazdır. Genellikle en yavaş adım modeldir; görüntüyü küçültmek ilk ve en ucuz çözümdür.' },
        { h: 'Sonraki adım' },
        { list: ['Kenar yerine eğitilmiş bir nesne tespit modeli kullan.', 'Kendi verini etiketle: her sınıftan en az birkaç yüz örnek.', 'Modeli gömülü cihaz için küçült ve saniyedeki kare sayısını ölç.'] }
      ]
    },
    {
      id: 'arduino-mesafe', area: 'robotik', tier: 'cirak', title: 'Arduino ile mesafe ölçmek', mins: 6, series: 'robotik-kalfa',
      lead: 'Ultrasonik sensör yarasalar gibi çalışır: ses gönderir, yankıyı dinler. Arduino ile beş kablo ve on beş satır kodla mesafe ölçelim.',
      blocks: [
        { h: 'Bağlantı' },
        { fig: ardSvg, cap: 'Şekil 4 — Arduino Uno ile HC-SR04 bağlantısı. Kırmızı hat besleme, kesikli hat topraktır.' },
        { table: { head: ['Arduino', 'Sensör', 'Görev'], rows: [['5V', 'VCC', 'Besleme'], ['D9', 'TRIG', 'Ses darbesini başlatır'], ['D10', 'ECHO', 'Yankı süresini verir'], ['GND', 'GND', 'Ortak toprak']] } },
        { h: 'Nasıl hesaplanır?' },
        { formula: 'mesafe = <span>süre × 343 m/s</span> ⁄ <span>2</span>', cap: 'Ses gidip geri döndüğü için ikiye bölünür. 343 m/s, 20 °C’de havadaki ses hızıdır.' },
        { h: 'Kod' },
        { code: [{ n: 'mesafe.ino', l: 'cpp', c: 'const int TRIG = 9, ECHO = 10;\n\nvoid setup() {\n  pinMode(TRIG, OUTPUT);\n  pinMode(ECHO, INPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  digitalWrite(TRIG, LOW);  delayMicroseconds(2);\n  digitalWrite(TRIG, HIGH); delayMicroseconds(10);\n  digitalWrite(TRIG, LOW);\n  long sure = pulseIn(ECHO, HIGH);   // mikrosaniye\n  float cm = sure * 0.0343 / 2;\n  Serial.println(cm);\n  delay(100);\n}' }, { n: 'Seri monitör', l: 'out', c: '24.61\n24.58\n18.02\n11.47\n11.50' }] },
        { callout: 'ipucu', t: 'Dene', html: 'Elini sensöre yaklaştırıp uzaklaştır; seri monitördeki sayıların değiştiğini gör. Sonra 20 cm’den yakın olunca LED yakan bir koşul ekle.' }
      ]
    }
  ];
  USTA.docsSoon = [['enerji', 'Güneş paneli boyutlandırma'], ['deniz', 'Yüzerlik ve denge hesabı'], ['haberlesme', 'LoRa ile uzun menzil'], ['saglik', 'Nabız sinyalini filtrelemek'], ['yazilim', 'Git ile takım çalışması']];
})();
