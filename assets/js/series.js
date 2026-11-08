/* Akademi video serileri — her alan için Başlangıç / Orta / İleri. Başlıklar ve süreler temsilîdir. */
USTA.tiers = [
  { id: 'cirak', name: 'Başlangıç', level: 'Çırak', desc: 'Hiç bilmeyen için. Kavramlar, kısa videolar, evde yapılabilen deneyler.' },
  { id: 'kalfa', name: 'Orta', level: 'Kalfa', desc: 'Temeli olan için. Hesaplar, simülasyonlar, ilk proje.' },
  { id: 'usta', name: 'İleri', level: 'Usta', desc: 'Yarışmaya hazırlanan için. Sistem tasarımı, kod, rapor.' }
];
USTA.series = (function () {
  var raw = [
    ['uzay', 'cirak', 'Roketin ABC’si', 'Bir roket neden yükselir? Etki-tepki, itki ve ağırlık.', 'Balondan rokete|Etki ve tepki|İtki nedir?|Roketin parçaları|Su roketi deneyi'],
    ['uzay', 'kalfa', 'Model Roket Tasarımı', 'Kararlılık, ağırlık ve basınç merkezi, OpenRocket ile tasarım.', 'Ağırlık merkezi|Basınç merkezi|Kararlılık payı|Kanatçık tasarımı|OpenRocket ile ilk model|Paraşüt hesabı'],
    ['uzay', 'usta', 'Orta İrtifa Görevi', 'Aviyonik, kurtarma sistemi ve yarışma raporu.', 'Görev profili|Aviyonik kart|İki aşamalı kurtarma|Telemetri ve yer istasyonu|Test planı|Kritik tasarım raporu'],
    ['havacilik', 'cirak', 'İHA’ya İlk Adım', 'Pervaneler, kuvvetler ve güvenli uçuş kuralları.', 'İHA türleri|Dört kuvvet|Pervane ve motor|Kumanda ile ilk uçuş|Uçuş güvenliği'],
    ['havacilik', 'kalfa', 'Uçuş Kontrolcüsü', 'IMU, PID ve uçuş modları.', 'IMU sensörü|Yönelim açıları|PID kontrolü|PID ayarı|Uçuş modları'],
    ['havacilik', 'usta', 'Otonom Görev Uçuşu', 'Rota planlama, görüntüyle hedef tespiti, sabit kanat.', 'Görev bilgisayarı|Rota noktaları|Hedef tespiti|Yük bırakma|Sabit kanat otonomi|Yarışma senaryosu'],
    ['yapayzeka', 'cirak', 'Yapay Zekâ Nedir?', 'Makineler nasıl öğrenir? Veri, örnek ve tahmin.', 'Kural mı, öğrenme mi?|Veri nedir?|İlk modelimiz|Önyargılı veri|Günlük hayatta YZ'],
    ['yapayzeka', 'kalfa', 'Makine Öğrenmesi Pratiği', 'Python ile sınıflandırma, eğitim ve test.', 'Python ve Colab|Veriyi hazırlamak|Karar ağaçları|Eğitim ve test|Doğruluk ölçümü'],
    ['yapayzeka', 'usta', 'Görüntü İşleme ve Derin Öğrenme', 'Evrişimli ağlar, nesne tespiti, sahada çalıştırma.', 'Piksel ve kanal|Evrişim|Nesne tespiti|Veri etiketleme|Modeli küçültmek|Gömülü cihazda çalıştırma'],
    ['robotik', 'cirak', 'İlk Robotum', 'Motor, sensör ve basit bir hareket programı.', 'Robot nedir?|Motorlar|Sensörler|İlk program|Engelden kaçan robot'],
    ['robotik', 'kalfa', 'Sensörlü Robotlar', 'Arduino, mesafe sensörü, çizgi izleme.', 'Arduino tanışma|Devre kurmak|Mesafe sensörü|Çizgi izleyen robot|Hata ayıklama'],
    ['robotik', 'usta', 'Otonom Mobil Robot', 'Haritalama, konumlama, ROS ile görev.', 'ROS temelleri|Odometri|Lidar ile harita|Yol planlama|Görev yönetimi'],
    ['yazilim', 'cirak', 'Kodlamaya Giriş', 'Değişken, koşul, döngü: düşünmeyi kodla anlat.', 'Algoritma nedir?|Değişkenler|Koşullar|Döngüler|İlk oyunum'],
    ['yazilim', 'kalfa', 'Python ile Proje', 'Fonksiyonlar, dosyalar, küçük bir uygulama.', 'Fonksiyonlar|Listeler ve sözlükler|Dosya okuma|Hata yönetimi|Mini proje'],
    ['yazilim', 'usta', 'Ekip Halinde Yazılım', 'Git, test, mimari ve yayına alma.', 'Git ile çalışma|Kod incelemesi|Birim testleri|Mimari kararlar|Yayına alma'],
    ['enerji', 'cirak', 'Enerji Nereden Gelir?', 'Enerji türleri, dönüşüm ve verim.', 'Enerji türleri|Dönüşüm|Verim nedir?|Güneş ve rüzgâr|Evde enerji tasarrufu'],
    ['enerji', 'kalfa', 'Yenilenebilir Sistemler', 'Panel, batarya ve şarj denetleyicisi hesapları.', 'Güneş paneli|Batarya kapasitesi|Şarj denetimi|Sistem boyutlandırma|Ölçüm ve kayıt'],
    ['enerji', 'usta', 'Verimli Araç Tasarımı', 'Elektrikli araç güç aktarımı ve enerji yönetimi.', 'Güç aktarım zinciri|Motor sürücü|Batarya yönetim sistemi|Aerodinamik|Yarış stratejisi'],
    ['saglik', 'cirak', 'Teknoloji ve Sağlık', 'Vücudu ölçmek: nabız, sıcaklık, hareket.', 'Biyomedikal nedir?|Nabız nasıl ölçülür?|Sensörler ve vücut|Veri ve mahremiyet'],
    ['saglik', 'kalfa', 'Biyomedikal Cihazlar', 'Sinyal toplama, filtreleme ve basit bir cihaz.', 'Biyosinyaller|Gürültü ve filtre|Nabız ölçer yapımı|Kullanıcı testi'],
    ['saglik', 'usta', 'Sağlıkta Yapay Zekâ', 'Etik, veri ve klinik doğrulama.', 'Sağlık verisi|Model ve etik|Doğrulama|Proje raporu'],
    ['deniz', 'cirak', 'Suyun Üstünde ve Altında', 'Kaldırma kuvveti, denge ve itki.', 'Neden yüzer?|Denge|Pervane ve itki|Basit tekne deneyi'],
    ['deniz', 'kalfa', 'İnsansız Deniz Aracı', 'Gövde, itki, su geçirmezlik.', 'Gövde tasarımı|İtki sistemi|Su geçirmezlik|Uzaktan kontrol'],
    ['deniz', 'usta', 'Otonom Su Altı Görevi', 'Derinlik kontrolü, kamera, görev planı.', 'Derinlik sensörü|Yüzerlik kontrolü|Su altı görüntü|Görev planlama'],
    ['ulasim', 'cirak', 'Akıllı Ulaşım', 'Trafik, sensörler ve güvenli yolculuk.', 'Ulaşım sistemleri|Trafik ışıkları|Araç sensörleri|Güvenlik'],
    ['ulasim', 'kalfa', 'Sürücüsüz Araç Temelleri', 'Şerit takibi, engel algılama.', 'Kamera ile şerit|Engel algılama|Karar verme|Simülasyonda sürüş'],
    ['ulasim', 'usta', 'Robotaksi Sistemi', 'Sensör füzyonu, planlama, test.', 'Sensör füzyonu|Konumlama|Yol planlama|Saha testi'],
    ['savunma', 'cirak', 'Savunma Teknolojilerine Giriş', 'Sensör, haberleşme ve sistem düşüncesi.', 'Sistem nedir?|Sensörler|Haberleşme|Etik ve sorumluluk'],
    ['savunma', 'kalfa', 'Gömülü Sistemler', 'Mikrodenetleyici, gerçek zamanlı çalışma.', 'Mikrodenetleyici|Kesmeler|Gerçek zaman|Güvenilirlik'],
    ['savunma', 'usta', 'Sistem Mühendisliği', 'Gereksinim, doğrulama, entegrasyon.', 'Gereksinim yazmak|Mimari|Entegrasyon|Doğrulama ve test'],
    ['haberlesme', 'cirak', 'Sinyaller ve Dalgalar', 'Radyo nasıl çalışır? Frekans ve dalga boyu.', 'Dalga nedir?|Frekans|Anten|Radyo deneyi'],
    ['haberlesme', 'kalfa', 'Kablosuz Haberleşme', 'Modülasyon, paket ve hata denetimi.', 'Modülasyon|Veri paketi|Hata denetimi|LoRa ile bağlantı'],
    ['haberlesme', 'usta', 'Çip Tasarımına Giriş', 'Mantık kapıları, FPGA, sayısal tasarım.', 'Mantık kapıları|Sayısal devre|FPGA|İlk tasarım'],
    ['egitim', 'cirak', 'Bilim Nasıl Yapılır?', 'Soru sormak, hipotez, deney.', 'İyi bir soru|Hipotez|Deney tasarımı|Gözlem ve kayıt'],
    ['egitim', 'kalfa', 'Araştırma Projesi', 'Literatür, yöntem, veri analizi.', 'Konu seçimi|Literatür taraması|Yöntem|Veri analizi|Bulgular'],
    ['egitim', 'usta', 'Rapor ve Sunum', 'Proje raporu, poster ve jüri sunumu.', 'Rapor yazımı|Grafikler|Poster|Jüri sunumu']
  ];
  return raw.map(function (r, i) {
    var eps = r[4].split('|').map(function (t, k) { return { t: t, d: 6 + ((i * 7 + k * 5) % 9) }; });
    return { id: r[0] + '-' + r[1], area: r[0], tier: r[1], title: r[2], desc: r[3], eps: eps };
  });
})();
USTA.seriesById = function (id) { return USTA.series.filter(function (s) { return s.id === id; })[0]; };
USTA.tierById = function (id) { return USTA.tiers.filter(function (t) { return t.id === id; })[0]; };
USTA.seriesMins = function (s) { return s.eps.reduce(function (a, e) { return a + e.d; }, 0); };

/* Seri kartı: koyu kapak, basamak motifi, bölüm sayısı */
USTA.seriesCard = function (s, opts) {
  opts = opts || {};
  var a = USTA.areaById(s.area), t = USTA.tierById(s.tier), idx = ['cirak', 'kalfa', 'usta'].indexOf(s.tier);
  var watched = ((USTA.state && USTA.state.series) || {})[s.id] || [];
  var steps = [0, 1, 2].map(function (k) { return '<i style="height:' + (14 + k * 14) + 'px;background:' + (k === idx ? 'var(--red)' : k < idx ? 'rgba(255,255,255,.55)' : 'rgba(255,255,255,.14)') + '"></i>'; }).join('');
  return '<a class="series" href="akademi.html?a=' + s.area + '&s=' + s.id + '" data-series="' + s.id + '">' +
    '<div class="cover cover-' + s.tier + '"><span class="ep">' + s.eps.length + ' bölüm · ' + USTA.seriesMins(s) + ' dk</span>' + USTA.icon(a.icon, 'ci') +
    '<span class="play"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 3l10 6-10 6Z" fill="currentColor"/></svg></span><span class="st">' + steps + '</span></div>' +
    '<div class="sb"><span class="tag">' + (opts.showArea ? a.name + ' · ' : '') + t.name + ' · ' + t.level + '</span><h3>' + USTA.esc(s.title) + '</h3><p class="muted">' + USTA.esc(s.desc) + '</p>' +
    (watched.length ? '<div class="bar" style="margin-top:6px"><i style="width:' + Math.round(100 * watched.length / s.eps.length) + '%"></i></div>' : '') + '</div></a>';
};
