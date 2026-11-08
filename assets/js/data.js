/* USTA içerik verisi — tüm ders içerikleri örnek/temsilîdir. */
window.USTA = window.USTA || {};

USTA.levels = [
  { id: 'cirak', name: 'Çırak', verb: 'öğrenir', desc: 'Temel kavramlar, kısa videolar, ilk deneyler.' },
  { id: 'kalfa', name: 'Kalfa', verb: 'dener', desc: 'Uygulamalı projeler, sanal laboratuvar, ilk yarışma hazırlığı.' },
  { id: 'usta',  name: 'Usta',  verb: 'üretir', desc: 'Takım projesi, TEKNOFEST başvurusu, gerçek prototip.' },
  { id: 'ustat', name: 'Üstat', verb: 'öğretir', desc: 'Mentorluk, içerik üretimi, yeni çırakları yetiştirme.' }
];

USTA.icons = {
  roket: '<path d="M24 4c7 6 10 14 8 24l-8 6-8-6C14 18 17 10 24 4Z"/><circle cx="24" cy="18" r="3.5"/><path d="M16 28l-6 6 2 6 6-4M32 28l6 6-2 6-6-4M21 38l3 6 3-6"/>',
  iha: '<circle cx="10" cy="12" r="5"/><circle cx="38" cy="12" r="5"/><circle cx="10" cy="36" r="5"/><circle cx="38" cy="36" r="5"/><path d="M14 16l6 6M34 16l-6 6M14 32l6-6M34 32l-6-6"/><rect x="19" y="19" width="10" height="10" rx="2"/>',
  ai: '<rect x="12" y="12" width="24" height="24" rx="4"/><path d="M18 6v6M24 6v6M30 6v6M18 36v6M24 36v6M30 36v6M6 18h6M6 24h6M6 30h6M36 18h6M36 24h6M36 30h6"/><path d="M19 29l5-10 5 10M21 26h6"/>',
  robot: '<rect x="10" y="16" width="28" height="22" rx="4"/><circle cx="19" cy="26" r="3"/><circle cx="29" cy="26" r="3"/><path d="M24 16V9M20 6h8M19 33h10M6 24v6M42 24v6"/>',
  yazilim: '<rect x="5" y="9" width="38" height="30" rx="4"/><path d="M5 17h38M17 25l-5 4 5 4M31 25l5 4-5 4M26 23l-4 12"/>',
  enerji: '<path d="M27 4L11 27h12l-3 17 17-24H25l2-16Z"/>',
  saglik: '<path d="M24 41S7 31 7 18a9 9 0 0 1 17-4 9 9 0 0 1 17 4c0 13-17 23-17 23Z"/><path d="M14 22h6l3-5 4 9 3-4h5"/>',
  deniz: '<path d="M4 34c4 0 4 3 8 3s4-3 8-3 4 3 8 3 4-3 8-3 4 3 8 3"/><path d="M10 28l4-10h20l4 10H10ZM24 18V6l8 6-8 2"/>',
  ulasim: '<rect x="8" y="10" width="32" height="24" rx="6"/><path d="M8 24h32M14 34v5M34 34v5"/><circle cx="15" cy="29" r="1.5"/><circle cx="33" cy="29" r="1.5"/>',
  savunma: '<path d="M24 4l16 6v12c0 10-7 17-16 22C15 39 8 32 8 22V10l16-6Z"/><path d="M17 23l5 5 9-10"/>',
  haberlesme: '<circle cx="24" cy="30" r="4"/><path d="M16 22a11 11 0 0 1 16 0M10 16a20 20 0 0 1 28 0M24 34v10"/>',
  egitim: '<path d="M4 18l20-10 20 10-20 10L4 18Z"/><path d="M12 22v10c4 4 20 4 24 0V22M40 20v12"/>'
};

/* Alanlar: TEKNOFEST 2026 yarışma kartlarının USTA tarafından yapılmış tematik gruplaması (resmî sınıflandırma değildir). */
USTA.areas = [
  { id: 'havacilik', name: 'Havacılık ve İHA', icon: 'iha', cards: 11, color: '#16171B' },
  { id: 'egitim', name: 'Eğitim ve Araştırma', icon: 'egitim', cards: 10, color: '#6E6A62' },
  { id: 'yazilim', name: 'Yazılım ve Dijital', icon: 'yazilim', cards: 7, color: '#2E2F35' },
  { id: 'enerji', name: 'Enerji ve Çevre', icon: 'enerji', cards: 6, color: '#8F8A80' },
  { id: 'uzay', name: 'Uzay ve Roket', icon: 'roket', cards: 4, color: '#E0402B' },
  { id: 'yapayzeka', name: 'Yapay Zekâ ve Veri', icon: 'ai', cards: 4, color: '#16171B' },
  { id: 'saglik', name: 'Sağlık', icon: 'saglik', cards: 4, color: '#C93622' },
  { id: 'deniz', name: 'Deniz', icon: 'deniz', cards: 3, color: '#3A3B42' },
  { id: 'ulasim', name: 'Ulaşım ve Mobilite', icon: 'ulasim', cards: 3, color: '#6E6A62' },
  { id: 'robotik', name: 'Robotik', icon: 'robot', cards: 3, color: '#2E2F35' },
  { id: 'savunma', name: 'Savunma', icon: 'savunma', cards: 3, color: '#16171B' },
  { id: 'haberlesme', name: 'Haberleşme ve Çip', icon: 'haberlesme', cards: 3, color: '#8F8A80' }
];

USTA.courses = [
  {
    id: 'roket-nasil-ucar', area: 'uzay', level: 'cirak', title: 'Roket nasıl uçar?',
    summary: 'Etki-tepki, itki ve ağırlık merkezi. Bir roketin neden yükseldiğini sıfırdan öğren.',
    lab: true,
    lessons: [
      { t: 'Etki ve tepki', d: 6, body: 'Roket, yanan yakıtı yüksek hızla aşağı doğru iter. Newton’un üçüncü yasasına göre gaz da roketi aynı büyüklükte bir kuvvetle yukarı iter. Rokete havanın değil, kendi püskürttüğü gazın tepkisi yön verir; bu yüzden roketler boşlukta da çalışır.' },
      { t: 'İtki ve ağırlık', d: 7, body: 'Roketin kalkabilmesi için motorun ürettiği itkinin, roketin ağırlığından büyük olması gerekir. İtkinin ağırlığa oranı ne kadar büyükse roket o kadar hızlı ivmelenir. Yakıt yandıkça roket hafifler ve ivme artar.' },
      { t: 'Ağırlık ve basınç merkezi', d: 8, body: 'Ağırlık merkezi roketin dengede durduğu noktadır; basınç merkezi ise hava kuvvetlerinin toplandığı noktadır. Kararlı bir uçuş için ağırlık merkezi, basınç merkezinin önünde (burna daha yakın) olmalıdır. Kanatçıklar basınç merkezini geriye çeker.' },
      { t: 'Burun konisi ve sürüklenme', d: 6, body: 'Hava, hareket eden rokete karşı bir direnç uygular; buna sürüklenme denir. Sivri ve pürüzsüz bir burun konisi sürüklenmeyi azaltır. Yüzeydeki çıkıntılar ve kötü yapıştırılmış kanatçıklar sürüklenmeyi artırır.' },
      { t: 'Kurtarma sistemi', d: 5, body: 'Roket tepe noktasına ulaştığında paraşüt açılarak güvenli iniş sağlanır. Paraşütün zamanında açılması için genellikle bir gecikme ya da irtifa sensörü kullanılır. Kurtarma sistemi, model roket yarışmalarında puanlamanın önemli bir parçasıdır.' }
    ],
    quiz: [
      { q: 'Roket neden yükselir?', a: ['Havadan hafif olduğu için', 'Gazı aşağı ittiği için gaz da roketi yukarı iter', 'Rüzgâr onu taşıdığı için'], c: 1, hint: 'Newton’un üçüncü yasasını düşün: her etkiye eşit ve zıt bir tepki vardır.' },
      { q: 'Kalkış için hangisi gereklidir?', a: ['İtki ağırlıktan büyük olmalı', 'Roket çok uzun olmalı', 'Burun konisi küt olmalı'], c: 0, hint: 'Yukarı yönlü kuvvet, aşağı yönlü kuvveti yenmeli.' },
      { q: 'Kararlı uçuş için ağırlık merkezi nerede olmalı?', a: ['Basınç merkezinin arkasında', 'Basınç merkeziyle aynı yerde', 'Basınç merkezinin önünde'], c: 2, hint: 'Ok gibi düşün: ağır uç önde, tüyler arkada.' },
      { q: 'Sürüklenmeyi ne azaltır?', a: ['Sivri ve pürüzsüz burun konisi', 'Daha fazla kanatçık', 'Daha ağır gövde'], c: 0, hint: 'Hava kolayca yarılabilmeli.' }
    ]
  },
  {
    id: 'model-roket-tasarimi', area: 'uzay', level: 'kalfa', title: 'Model roket tasarımı',
    summary: 'Gövde, kanatçık ve motor seçimi. Sanal laboratuvarda kendi roketini tasarla ve uçur.',
    lab: true,
    lessons: [
      { t: 'Tasarım gereksinimleri', d: 8, body: 'Her tasarım bir hedefle başlar: hedef irtifa, taşınacak yük ve güvenlik kuralları. Yarışma şartnamesi bu hedefleri belirler. Önce gereksinimleri yaz, sonra çizime geç.' },
      { t: 'Kanatçık geometrisi', d: 9, body: 'Kanatçık sayısı genellikle üç ya da dörttür. Kanatçık alanı büyüdükçe basınç merkezi geriye kayar ve kararlılık artar; ama sürüklenme de artar. İyi tasarım bu ikisi arasında denge kurar.' },
      { t: 'Kararlılık payı', d: 8, body: 'Ağırlık merkezi ile basınç merkezi arasındaki mesafenin gövde çapına oranına kararlılık payı denir. Model roketlerde bu değer genellikle 1 ile 2 kalibre arasında tutulur. Çok düşükse roket takla atar, çok yüksekse rüzgâra doğru döner.' },
      { t: 'Simülasyonla doğrulama', d: 10, body: 'Roketi üretmeden önce bilgisayarda uçurmak hem zaman hem malzeme kazandırır. Simülasyon; irtifa, hız ve kararlılık hakkında fikir verir. USTA sanal laboratuvarında parametreleri değiştirip sonucu hemen görebilirsin.' }
    ],
    quiz: [
      { q: 'Kanatçık alanı büyüyünce basınç merkezi ne olur?', a: ['Öne kayar', 'Geriye kayar', 'Değişmez'], c: 1, hint: 'Kanatçıklar arkadadır; arkadaki yüzey arttıkça hava kuvvetleri de oraya toplanır.' },
      { q: 'Kararlılık payı neyin oranıdır?', a: ['Yakıtın gövdeye', 'AM–BM mesafesinin gövde çapına', 'Uzunluğun ağırlığa'], c: 1, hint: 'Kalibre, gövde çapı demektir.' },
      { q: 'Simülasyonun en büyük faydası nedir?', a: ['Üretmeden önce hataları görmek', 'Roketi daha ağır yapmak', 'Yarışma ücretini düşürmek'], c: 0, hint: 'Sanalda düşmek bedavadır.' }
    ]
  },
  {
    id: 'iha-temelleri', area: 'havacilik', level: 'cirak', title: 'İHA’ya giriş',
    summary: 'İnsansız hava araçları nasıl havada durur? Pervane, motor ve uçuş kontrolcüsü.',
    lessons: [
      { t: 'Kaldırma kuvveti', d: 6, body: 'Çok rotorlu bir İHA, pervaneleriyle havayı aşağı iterek kaldırma kuvveti üretir. Toplam itki aracın ağırlığına eşit olduğunda araç havada asılı kalır. İtki artarsa yükselir, azalırsa alçalır.' },
      { t: 'Yönelim: yunuslama, yatış, sapma', d: 7, body: 'Bir İHA’nın havadaki duruşu üç eksenle tanımlanır. Ön ve arka motorların hız farkı yunuslamayı, sağ ve sol motorların farkı yatışı sağlar. Saat yönünde ve tersine dönen pervanelerin dengesi değişince araç kendi ekseni etrafında döner.' },
      { t: 'Uçuş kontrolcüsü', d: 8, body: 'Uçuş kontrolcüsü, sensörlerden gelen verilere bakarak motor hızlarını saniyede yüzlerce kez ayarlar. İvmeölçer ve jiroskop aracın eğimini ölçer. Bu sayede araç rüzgâra rağmen dengede kalır.' },
      { t: 'Güvenli uçuş kuralları', d: 5, body: 'Her uçuştan önce pervaneler, batarya ve bağlantılar kontrol edilir. İnsanların üzerinde ve yasak bölgelerde uçulmaz. Yarışmalarda güvenlik ihlali doğrudan eleme sebebi olabilir.' }
    ],
    quiz: [
      { q: 'İHA havada nasıl asılı kalır?', a: ['İtki ağırlığa eşit olduğunda', 'Motorlar durduğunda', 'Batarya dolu olduğunda'], c: 0, hint: 'Kuvvetler dengede olmalı.' },
      { q: 'Aracın eğimini hangi sensörler ölçer?', a: ['Kamera ve mikrofon', 'İvmeölçer ve jiroskop', 'GPS ve pusula'], c: 1, hint: 'Biri ivmeyi, diğeri dönüşü ölçer.' },
      { q: 'Sapma (kendi ekseninde dönme) nasıl sağlanır?', a: ['Tüm motorları durdurarak', 'Zıt yönde dönen pervanelerin dengesini değiştirerek', 'Kamerayı çevirerek'], c: 1, hint: 'Pervanelerin yarısı bir yöne, yarısı diğer yöne döner.' }
    ]
  },
  {
    id: 'iha-otonom', area: 'havacilik', level: 'usta', title: 'Otonom İHA görevleri',
    summary: 'Rota planlama, görev yazılımı ve görüntüyle hedef bulma. Yarışma görevine hazırlık.',
    lessons: [
      { t: 'Görev planlama', d: 10, body: 'Otonom bir görev, ara noktalardan oluşan bir rota ile tanımlanır. Her ara noktada aracın yapacağı iş (fotoğraf çekmek, yük bırakmak) belirlenir. Plan, yer kontrol yazılımında hazırlanıp araca yüklenir.' },
      { t: 'Konumlama', d: 9, body: 'Araç konumunu uydu navigasyon sistemleriyle bulur. Bu sistemlerin hassasiyeti birkaç metreye kadar sapabilir; hassas görevlerde ek düzeltme yöntemleri kullanılır. İç mekânda uydu sinyali olmadığı için görüntü tabanlı yöntemlere başvurulur.' },
      { t: 'Görüntüyle hedef tespiti', d: 12, body: 'Kameradan gelen görüntüler bir yapay zekâ modeliyle işlenerek hedefler bulunur. Model önceden etiketlenmiş örneklerle eğitilir. Yarışmalarda hız ve doğruluk birlikte puanlanır.' },
      { t: 'Hata durumları', d: 8, body: 'İyi bir otonom sistem, işler ters gittiğinde ne yapacağını bilir. Batarya azalınca eve dönüş, sinyal kopunca güvenli iniş gibi senaryolar önceden tanımlanır. Bu senaryolar test edilmeden uçuşa çıkılmaz.' }
    ],
    quiz: [
      { q: 'Otonom görev neyle tanımlanır?', a: ['Ara noktalardan oluşan rota ile', 'Sadece hız ile', 'Pilotun el hareketleriyle'], c: 0, hint: 'Harita üzerinde işaretlenen noktaları düşün.' },
      { q: 'İç mekânda konumlama neden zordur?', a: ['Hava yoğun olduğu için', 'Uydu sinyali ulaşmadığı için', 'Motorlar yavaşladığı için'], c: 1, hint: 'Sinyal nereden geliyor?' },
      { q: 'Batarya azalınca ne olmalı?', a: ['Görev sürmeli', 'Önceden tanımlı eve dönüş senaryosu çalışmalı', 'Motorlar kapanmalı'], c: 1, hint: 'Güvenlik senaryoları önceden yazılır.' }
    ]
  },
  {
    id: 'yapay-zekaya-giris', area: 'yapayzeka', level: 'cirak', title: 'Yapay zekâya giriş',
    summary: 'Makine nasıl öğrenir? Veri, model ve tahmin kavramlarını günlük örneklerle anla.',
    lessons: [
      { t: 'Yapay zekâ nedir?', d: 6, body: 'Yapay zekâ, bilgisayarların örneklerden kalıp çıkarıp karar vermesini sağlayan yöntemlerin genel adıdır. Kurallar tek tek yazılmak yerine, sistem çok sayıda örnekten kendisi öğrenir. Fotoğraftaki yüzü tanımak ya da çeviri yapmak buna örnektir.' },
      { t: 'Veri her şeydir', d: 7, body: 'Bir model, ancak gördüğü veriler kadar iyidir. Eksik ya da tek taraflı veri, hatalı ve adaletsiz sonuçlar doğurur. Bu yüzden veriyi toplamak ve temizlemek işin en uzun kısmıdır.' },
      { t: 'Eğitim ve test', d: 8, body: 'Veri ikiye ayrılır: model bir kısmıyla eğitilir, diğer kısmıyla sınanır. Model eğitim verisini ezberlemiş ama yeni veride başarısızsa buna aşırı öğrenme denir. İyi model, hiç görmediği örneklerde de doğru tahmin yapar.' },
      { t: 'Sorumlu yapay zekâ', d: 6, body: 'Yapay zekâ kararları insanları etkileyebilir. Modelin neden o kararı verdiğini açıklayabilmek, kişisel verileri korumak ve önyargıyı azaltmak gerekir. Teknoloji geliştirirken etik soruları baştan sormak, ustalığın parçasıdır.' }
    ],
    quiz: [
      { q: 'Yapay zekâ temel olarak nasıl öğrenir?', a: ['Örneklerden kalıp çıkararak', 'Kuralları ezberleyerek', 'İnternete bağlanarak'], c: 0, hint: 'Çok sayıda örnek görür.' },
      { q: 'Aşırı öğrenme nedir?', a: ['Modelin çok hızlı çalışması', 'Eğitim verisini ezberleyip yeni veride başarısız olması', 'Çok fazla veri kullanmak'], c: 1, hint: 'Sınav sorularını ezberleyip konuyu anlamamak gibi.' },
      { q: 'Tek taraflı veri neye yol açar?', a: ['Daha adil sonuçlara', 'Hatalı ve önyargılı sonuçlara', 'Daha hızlı eğitime'], c: 1, hint: 'Model sadece gördüğünü bilir.' }
    ]
  },
  {
    id: 'goruntu-isleme', area: 'yapayzeka', level: 'usta', title: 'Görüntü işleme ile nesne tanıma',
    summary: 'Piksellerden anlama: görüntü sınıflandırma, nesne tespiti ve veri etiketleme.',
    lessons: [
      { t: 'Görüntü bir sayı tablosudur', d: 8, body: 'Bilgisayar için bir fotoğraf, her pikselin renk değerini tutan büyük bir sayı tablosudur. Renkli görüntülerde her piksel kırmızı, yeşil ve mavi olmak üzere üç değer taşır. Görüntü işleme, bu tablodan anlam çıkarmaktır.' },
      { t: 'Evrişimli sinir ağları', d: 12, body: 'Evrişimli ağlar, görüntüdeki kenar ve doku gibi küçük desenleri katman katman birleştirerek nesneleri tanır. İlk katmanlar çizgileri, sonraki katmanlar şekilleri, en son katmanlar nesneleri yakalar. Bu yapı görüntü işlemede standart hâline gelmiştir.' },
      { t: 'Veri etiketleme', d: 9, body: 'Nesne tespiti için her görüntüdeki nesnelerin etrafına kutu çizilir ve adı yazılır. Etiketlerin tutarlı olması modelin başarısını doğrudan etkiler. Takım içinde ortak bir etiketleme kılavuzu hazırlamak iyi bir alışkanlıktır.' },
      { t: 'Başarıyı ölçmek', d: 10, body: 'Bir tespit modelini değerlendirirken sadece doğru bulunanlara değil, kaçırılanlara ve yanlış alarmlara da bakılır. Kesinlik ve duyarlılık bu iki hatayı ayrı ayrı ölçer. Hangisinin daha önemli olduğu görevin kendisine bağlıdır.' }
    ],
    quiz: [
      { q: 'Renkli bir pikselde kaç değer bulunur?', a: ['Bir', 'Üç', 'On'], c: 1, hint: 'Kırmızı, yeşil, mavi.' },
      { q: 'Evrişimli ağların ilk katmanları ne yakalar?', a: ['Tüm nesneleri', 'Kenar ve çizgi gibi basit desenleri', 'Görüntünün adını'], c: 1, hint: 'Basitten karmaşığa.' },
      { q: 'Duyarlılık neyi ölçer?', a: ['Kaçırılan nesneleri', 'Modelin hızını', 'Görüntü boyutunu'], c: 0, hint: 'Gerçekte var olanların ne kadarını bulduk?' }
    ]
  },
  {
    id: 'robotik-temeller', area: 'robotik', level: 'cirak', title: 'İlk robotunu tanı',
    summary: 'Sensör, işlemci, eyleyici. Bir robotun algılayıp karar verip hareket etme döngüsü.',
    lessons: [
      { t: 'Algıla, düşün, hareket et', d: 6, body: 'Her robot aynı döngüyle çalışır: sensörlerle çevresini algılar, işlemcisiyle karar verir, motorlarıyla hareket eder. Bu döngü saniyede defalarca tekrarlanır. Robotun zekâsı, karar verme kısmındaki yazılımdır.' },
      { t: 'Sensörler', d: 7, body: 'Mesafe sensörleri engelleri, çizgi sensörleri zemindeki izleri, ivmeölçerler hareketi algılar. Her sensörün bir ölçüm aralığı ve hata payı vardır. Doğru sensörü seçmek, görevi anlamakla başlar.' },
      { t: 'Motorlar', d: 7, body: 'Doğru akım motorları sürekli döner, servo motorlar belirli bir açıya gider, adım motorları küçük ve hassas adımlarla ilerler. Tekerlekli robotlarda genellikle doğru akım motorları, kollarda servo motorlar kullanılır.' },
      { t: 'İlk programın', d: 8, body: 'Basit bir engelden kaçan robot için kural şudur: önünde engel yoksa ilerle, varsa dur ve dön. Bu kural blok tabanlı ya da metin tabanlı bir dille yazılabilir. Küçük bir programla başlamak, büyük projelerin temelidir.' }
    ],
    quiz: [
      { q: 'Robotun temel döngüsü nedir?', a: ['Algıla, düşün, hareket et', 'Şarj ol, bekle, kapan', 'Çiz, boya, kes'], c: 0, hint: 'Önce çevreyi tanır.' },
      { q: 'Belirli bir açıya giden motor hangisidir?', a: ['Doğru akım motoru', 'Servo motor', 'Fan motoru'], c: 1, hint: 'Robot kollarında sık kullanılır.' },
      { q: 'Engelden kaçan robotun kuralı nedir?', a: ['Hep ilerle', 'Engel varsa dur ve dön', 'Hep dön'], c: 1, hint: 'Bir koşul var.' }
    ]
  },
  {
    id: 'yazilima-giris', area: 'yazilim', level: 'cirak', title: 'Python ile programlamaya giriş',
    summary: 'Değişkenler, koşullar ve döngüler. Bilgisayara ilk komutlarını Türkçe anlatımla ver.',
    lessons: [
      { t: 'Program nedir?', d: 5, body: 'Program, bilgisayara sırayla ne yapacağını söyleyen komutlar listesidir. Bilgisayar komutları tam olarak yazıldığı gibi uygular; ne kastettiğini tahmin etmez. Bu yüzden açık ve adım adım düşünmek programlamanın ilk becerisidir.' },
      { t: 'Değişkenler', d: 7, body: 'Değişken, bir değeri saklamak için verilen isimdir. Örneğin hiz = 12 yazdığında 12 değerini hiz adıyla saklamış olursun. Değişkenler sayı, metin ya da liste tutabilir.' },
      { t: 'Koşullar', d: 7, body: 'Koşullar programın karar vermesini sağlar. "Eğer sıcaklık 30’dan büyükse fanı aç, değilse kapat" mantığı if ve else ile yazılır. Robotlardan oyunlara kadar her yerde koşullar vardır.' },
      { t: 'Döngüler', d: 8, body: 'Döngüler bir işi tekrar tekrar yapmayı sağlar. for döngüsü belirli sayıda, while döngüsü bir koşul doğru olduğu sürece çalışır. Sensörden sürekli veri okumak tipik bir döngü örneğidir.' }
    ],
    quiz: [
      { q: 'Değişken nedir?', a: ['Bir değeri saklamak için verilen isim', 'Bir bilgisayar parçası', 'Bir hata türü'], c: 0, hint: 'hiz = 12' },
      { q: 'Karar vermek için ne kullanılır?', a: ['Döngü', 'Koşul (if/else)', 'Yorum satırı'], c: 1, hint: '"Eğer... değilse..."' },
      { q: 'Bir koşul doğru olduğu sürece çalışan döngü?', a: ['for', 'while', 'print'], c: 1, hint: '"…olduğu sürece" demek.' }
    ]
  },
  {
    id: 'yenilenebilir-enerji', area: 'enerji', level: 'cirak', title: 'Güneşten ve rüzgârdan enerji',
    summary: 'Yenilenebilir enerji kaynakları, verim ve depolama. Efficiency Challenge için temel.',
    lessons: [
      { t: 'Enerji dönüşümü', d: 6, body: 'Enerji yoktan var edilmez, bir biçimden diğerine dönüşür. Güneş paneli ışığı, rüzgâr türbini hareketi elektriğe çevirir. Her dönüşümde enerjinin bir kısmı ısı olarak kaybolur.' },
      { t: 'Güneş panelleri', d: 7, body: 'Güneş hücreleri, ışık çarptığında elektrik üreten yarı iletken malzemelerden yapılır. Panelin ürettiği güç; güneşin açısına, sıcaklığa ve gölgelenmeye bağlıdır. Küçük bir gölge bile tüm panelin verimini düşürebilir.' },
      { t: 'Verim', d: 7, body: 'Verim, alınan faydalı enerjinin verilen enerjiye oranıdır. Verimi artırmak; sürtünmeyi azaltmak, ağırlığı düşürmek ve kayıpları azaltmakla olur. Enerji verimliliği yarışmalarında az enerjiyle uzun yol gitmek amaçlanır.' },
      { t: 'Depolama', d: 6, body: 'Güneş ve rüzgâr her zaman yoktur; bu yüzden üretilen enerji bataryalarda depolanır. Batarya seçerken kapasite, ağırlık ve güvenlik birlikte değerlendirilir. Batarya yönetim sistemi hücreleri aşırı şarj ve ısınmadan korur.' }
    ],
    quiz: [
      { q: 'Verim nedir?', a: ['Faydalı enerjinin verilen enerjiye oranı', 'Bataryanın rengi', 'Panelin boyutu'], c: 0, hint: 'Bir oran.' },
      { q: 'Güneş panelinin verimini ne düşürür?', a: ['Gölgelenme', 'Temiz yüzey', 'Doğru açı'], c: 0, hint: 'Işık engellenirse…' },
      { q: 'Batarya yönetim sistemi ne yapar?', a: ['Hücreleri aşırı şarj ve ısınmadan korur', 'Paneli temizler', 'Motoru hızlandırır'], c: 0, hint: 'Güvenlik görevi.' }
    ]
  },
  {
    id: 'biyomedikal', area: 'saglik', level: 'kalfa', title: 'Sağlıkta teknoloji',
    summary: 'Biyomedikal cihazlar, sağlık verisi ve yapay zekâ destekli teşhis örnekleri.',
    lessons: [
      { t: 'Biyomedikal mühendislik', d: 7, body: 'Biyomedikal mühendislik, mühendislik bilgisini insan sağlığı için kullanır. Protezler, kalp pilleri ve görüntüleme cihazları bu alanın ürünleridir. Bu cihazlarda güvenlik her şeyden önce gelir.' },
      { t: 'Vücuttan sinyal okumak', d: 8, body: 'Kalp atışı, kas hareketi ve beyin faaliyeti elektriksel sinyaller üretir. Bu sinyaller elektrotlarla ölçülüp yükseltilir ve gürültüden arındırılır. Giyilebilir cihazlar bu ölçümleri gün boyu yapabilir.' },
      { t: 'Sağlık verisi ve gizlilik', d: 6, body: 'Sağlık verileri en hassas kişisel veriler arasındadır. Bu veriler toplanırken izin alınmalı, saklanırken korunmalıdır. Proje geliştirirken veriyi anonimleştirmek temel bir kuraldır.' },
      { t: 'Yapay zekâ destekli teşhis', d: 9, body: 'Yapay zekâ modelleri tıbbi görüntülerde dikkat edilmesi gereken bölgeleri işaretleyebilir. Son kararı her zaman hekim verir; model yalnızca yardımcıdır. İyi bir sağlık projesi, hekimin iş akışına uyum sağlar.' }
    ],
    quiz: [
      { q: 'Kalp atışı nasıl ölçülür?', a: ['Elektrotlarla elektriksel sinyal okunarak', 'Termometre ile', 'Ses kaydı ile'], c: 0, hint: 'Kalp elektriksel sinyal üretir.' },
      { q: 'Sağlık verisiyle çalışırken temel kural?', a: ['Veriyi herkese açmak', 'Veriyi anonimleştirmek', 'Veriyi silmek'], c: 1, hint: 'Kimliği gizlemek.' },
      { q: 'Yapay zekâ teşhiste ne rol oynar?', a: ['Son kararı verir', 'Hekime yardımcı olur', 'Hiçbir rolü yoktur'], c: 1, hint: 'Karar hekimindir.' }
    ]
  },
  {
    id: 'insansiz-deniz', area: 'deniz', level: 'kalfa', title: 'İnsansız deniz araçları',
    summary: 'Yüzerlik, su altında haberleşme ve otonom seyir. Deniz yarışmalarına hazırlık.',
    lessons: [
      { t: 'Yüzerlik', d: 7, body: 'Bir cisim, yer değiştirdiği suyun ağırlığı kadar yukarı doğru itilir; buna Arşimet ilkesi denir. Aracın ağırlığı bu kuvvetten azsa yüzer, fazlaysa batar. Su altı araçları ballast tanklarıyla bu dengeyi ayarlar.' },
      { t: 'Su geçirmezlik', d: 6, body: 'Elektronik parçalar suyla temas etmemelidir. Conta, sızdırmazlık macunu ve basınca dayanıklı gövdeler kullanılır. Her derinlik artışında basınç artar; tasarım buna göre yapılır.' },
      { t: 'Su altında haberleşme', d: 8, body: 'Radyo dalgaları su altında çok hızlı zayıflar. Bu yüzden su altında genellikle ses dalgaları ya da kablolu bağlantı kullanılır. Yüzey araçları ise radyo ile haberleşebilir.' },
      { t: 'Otonom seyir', d: 9, body: 'Deniz yüzeyinde araç uydu navigasyonuyla konumunu bulur ve rotasını izler. Dalga ve akıntı aracı rotadan çıkardığı için kontrol sistemi sürekli düzeltme yapar. Engellerden kaçınmak için kamera ve mesafe sensörleri kullanılır.' }
    ],
    quiz: [
      { q: 'Arşimet ilkesine göre cisim neden yüzer?', a: ['Yer değiştirdiği suyun ağırlığı kadar itildiği için', 'Su soğuk olduğu için', 'Rengi açık olduğu için'], c: 0, hint: 'Yer değiştiren su.' },
      { q: 'Su altında neden radyo zor kullanılır?', a: ['Radyo dalgaları suda hızla zayıflar', 'Radyolar pahalıdır', 'Su iletkendir ama ses değildir'], c: 0, hint: 'Sinyal zayıflaması.' },
      { q: 'Derinlik arttıkça ne artar?', a: ['Basınç', 'Işık', 'Sıcaklık her zaman'], c: 0, hint: 'Üstteki suyun ağırlığı.' }
    ]
  },
  {
    id: 'akilli-ulasim', area: 'ulasim', level: 'kalfa', title: 'Akıllı ve elektrikli ulaşım',
    summary: 'Elektrikli araç, sürücüsüz sistemler ve akıllı şehir ulaşımının temelleri.',
    lessons: [
      { t: 'Elektrikli aracın parçaları', d: 7, body: 'Elektrikli bir araç temelde batarya, motor sürücüsü ve elektrik motorundan oluşur. Motor sürücüsü bataryadan gelen enerjiyi motorun ihtiyacına göre ayarlar. Frenleme sırasında motor jeneratör gibi çalışıp enerjiyi geri kazanabilir.' },
      { t: 'Sürücüsüz sistemler', d: 9, body: 'Sürücüsüz araçlar kamera, radar ve lidar gibi sensörlerle çevresini algılar. Yazılım bu verileri birleştirip şeritleri, yayaları ve işaretleri tanır. Her karar güvenlik önceliğine göre verilir.' },
      { t: 'Akıllı şehirler', d: 6, body: 'Trafik ışıkları, toplu taşıma ve park alanları birbirine bağlı sensörlerle yönetilebilir. Bu sayede bekleme süreleri ve yakıt tüketimi azalır. Veriler doğru kullanıldığında şehir daha yaşanabilir olur.' }
    ],
    quiz: [
      { q: 'Frenlemede enerji nasıl geri kazanılır?', a: ['Motor jeneratör gibi çalışarak', 'Lastikler ısınarak', 'Farlar yanarak'], c: 0, hint: 'Rejeneratif frenleme.' },
      { q: 'Sürücüsüz araçlar çevreyi neyle algılar?', a: ['Kamera, radar, lidar', 'Sadece GPS', 'Sadece hoparlör'], c: 0, hint: 'Birden çok sensör.' }
    ]
  },
  {
    id: 'haberlesme-temel', area: 'haberlesme', level: 'cirak', title: 'Haberleşme ve çiplerin dünyası',
    summary: 'Sinyaller nasıl taşınır? Antenler, frekanslar ve çiplerin içinde ne olduğu.',
    lessons: [
      { t: 'Sinyal ve frekans', d: 6, body: 'Haberleşme, bilginin bir sinyal üzerine yüklenip taşınmasıdır. Sinyalin saniyedeki titreşim sayısına frekans denir. Radyo, mobil telefon ve uydu haberleşmesi farklı frekans bantlarını kullanır.' },
      { t: 'Antenler', d: 6, body: 'Anten, elektrik sinyalini havada yayılan dalgaya ve tersine çevirir. Antenin boyutu çalıştığı frekansla ilişkilidir. Yönlü antenler sinyali tek bir yöne odaklayarak daha uzağa ulaştırır.' },
      { t: 'Çipin içinde', d: 8, body: 'Bir çip, milyarlarca küçük anahtardan (transistör) oluşur. Transistörler açık ya da kapalı olarak bilgiyi bir ve sıfırlarla işler. Çip tasarımı, bu anahtarları en verimli şekilde düzenleme sanatıdır.' }
    ],
    quiz: [
      { q: 'Frekans nedir?', a: ['Sinyalin saniyedeki titreşim sayısı', 'Antenin rengi', 'Çipin ağırlığı'], c: 0, hint: 'Saniyede kaç kez.' },
      { q: 'Çiplerin temel yapı taşı?', a: ['Transistör', 'Pervane', 'Mercek'], c: 0, hint: 'Küçük anahtarlar.' }
    ]
  },
  {
    id: 'savunma-sistemleri', area: 'savunma', level: 'usta', title: 'Savunma teknolojilerinde sistem mühendisliği',
    summary: 'Gereksinimden teste: karmaşık sistemleri parçalara bölme ve güvenle bir araya getirme.',
    lessons: [
      { t: 'Sistem nedir?', d: 7, body: 'Sistem, ortak bir amaca hizmet eden birbirine bağlı parçalardır. Bir parçadaki değişiklik diğerlerini etkiler. Sistem mühendisi bu bağları yönetir.' },
      { t: 'Gereksinim yönetimi', d: 9, body: 'Her proje "ne yapmalı?" sorusunun açık cevaplarıyla başlar. İyi bir gereksinim ölçülebilir ve test edilebilir olur. Gereksinimler değiştikçe takip edilmeleri gerekir.' },
      { t: 'Test ve doğrulama', d: 9, body: 'Doğrulama, sistemin gereksinimleri karşılayıp karşılamadığını kontrol eder. Testler parça düzeyinden başlar, tüm sisteme kadar çıkar. Hata ne kadar erken bulunursa o kadar ucuz düzeltilir.' }
    ],
    quiz: [
      { q: 'İyi bir gereksinim nasıl olmalı?', a: ['Ölçülebilir ve test edilebilir', 'Uzun ve süslü', 'Gizli'], c: 0, hint: 'Test edebilmeliyiz.' },
      { q: 'Hata ne zaman bulunursa daha ucuzdur?', a: ['Erken', 'Geç', 'Fark etmez'], c: 0, hint: 'Tasarımda mı, sahada mı?' }
    ]
  },
  {
    id: 'arastirma-projesi', area: 'egitim', level: 'kalfa', title: 'Araştırma projesi nasıl yazılır?',
    summary: 'Problem, hipotez, yöntem, sonuç. TÜBİTAK proje yarışmalarına başvuru rehberi.',
    lessons: [
      { t: 'İyi bir problem bulmak', d: 7, body: 'İyi bir araştırma, gerçek ve sınırları belli bir problemle başlar. Çevrene bak: çözülmemiş küçük sorunlar büyük projelerin başlangıcıdır. Problemi tek cümleyle anlatabiliyorsan doğru yoldasın.' },
      { t: 'Hipotez ve yöntem', d: 8, body: 'Hipotez, probleme verdiğin sınanabilir bir cevaptır. Yöntem, bu cevabı nasıl test edeceğini adım adım anlatır. Başkası yöntemini okuyup deneyini tekrarlayabilmelidir.' },
      { t: 'Kaynak taraması', d: 6, body: 'Senden önce bu konuda ne yapıldığını bilmek, aynı işi tekrar etmeni önler. Güvenilir kaynaklar; bilimsel makaleler, resmî raporlar ve akademik kitaplardır. Kullandığın her kaynağı belirtmek bilimsel dürüstlüğün gereğidir.' },
      { t: 'Sonuç ve sunum', d: 7, body: 'Sonuçlar, hipotezi destekliyor ya da çürütüyor olabilir; ikisi de değerlidir. Grafikler veriyi anlaşılır kılar. Jüriye sunarken problemi, yöntemi ve öğrendiklerini sade bir dille anlat.' }
    ],
    quiz: [
      { q: 'Hipotez nedir?', a: ['Probleme verilen sınanabilir cevap', 'Proje başlığı', 'Kaynakça'], c: 0, hint: 'Test edilebilir bir tahmin.' },
      { q: 'Hipotezi çürüten sonuç değersiz midir?', a: ['Evet', 'Hayır, o da değerlidir', 'Sadece yarışmada'], c: 1, hint: 'Bilim yanlışlamayla ilerler.' }
    ]
  }
];

USTA.areaById = function (id) { return USTA.areas.find(function (a) { return a.id === id; }); };
USTA.levelById = function (id) { return USTA.levels.find(function (l) { return l.id === id; }); };
USTA.courseById = function (id) { return USTA.courses.find(function (c) { return c.id === id; }); };

/* Ders ve seri görselleri (Wikimedia Commons, künyeler: gorseller.html) */
USTA.areaImg = {
  havacilik: 'havacilik', egitim: 'egitim', yazilim: 'yazilim', enerji: 'enerji', uzay: 'uzay', yapayzeka: 'yapayzeka',
  saglik: 'saglik', deniz: 'deniz', ulasim: 'ulasim', robotik: 'robotik', savunma: 'savunma', haberlesme: 'haberlesme'
};
USTA.courseImg = { 'model-roket-tasarimi': 'model-roket', 'iha-temelleri': 'drone', 'goruntu-isleme': 'goruntu' };
USTA.imgFor = function (courseId, areaId) {
  return 'assets/img/ders/' + (USTA.courseImg[courseId] || USTA.areaImg[areaId] || 'uzay') + '.jpg';
};
USTA.tierImg = { uzay: { kalfa: 'model-roket' }, havacilik: { cirak: 'drone' }, yapayzeka: { usta: 'goruntu' } };
USTA.seriesImg = function (s) {
  var o = USTA.tierImg[s.area] && USTA.tierImg[s.area][s.tier];
  return o ? 'assets/img/ders/' + o + '.jpg' : USTA.imgFor('', s.area);
};
