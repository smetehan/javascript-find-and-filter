const kisiler = [
  {
    isim: "Mustafa Çağrı Güven",
    yas: 33,
    sehir: "Ankara",
    boy: 188,
    kilo: 88,
    cinsiyet: "erkek",
    gozRengi: "kahve",
  },
  {
    isim: "Ahmet Güven",
    yas: 83,
    sehir: "Balıkesir",
    boy: 162,
    kilo: 80,
    cinsiyet: "erkek",
    gozRengi: "siyah",
  },
  {
    isim: "Ali Güven",
    yas: 92,
    sehir: "Balıkesir",
    boy: 182,
    kilo: 90,
    cinsiyet: "erkek",
    gozRengi: "ela",
  },
  {
    isim: "Emine Güven",
    yas: 83,
    sehir: "Balıkesir",
    boy: 172,
    kilo: 70,
    cinsiyet: "kadın",
    gozRengi: "ela",
  },
  {
    isim: "Afra Güven",
    yas: 8,
    sehir: "Dursunbey",
    boy: 122,
    kilo: 24,
    cinsiyet: "kadın",
    gozRengi: "kahve",
  },
  {
    isim: "Eslem Güven",
    yas: 14,
    sehir: "Dursunbey",
    boy: 152,
    kilo: 41,
    cinsiyet: "kadın",
    gozRengi: "yeşil",
  },
];
let sonucYok = "sonuç bulunamadı.";
// 1-) Yaşı 83 olan kişiyi bulalım.
let yas83 = kisiler.find((kisi) => kisi.yas === 83);
console.log(yas83);

// 2-) Göz rengi ela olanı bulalım.
// --> Göz rengi 2 kişinin ela olduğunu biliyoruz. Peki sonuç neden 1 tane? Çünkü find ilk sonucu döndürür. Eğer birden fazla sonuç bekliyorsak find yerine filter kullanacağız.

let gozela = kisiler.filter((kisi) => kisi.gozRengi === "ela");
console.log(gozela);

// 3-) Yaşı 8 olan kişiyi bulalım.
let yas8 = kisiler.find((kisi) => kisi.yas === 8);
console.log(yas8);

// 4-) Yaşı 50 üstünde olan kişiyi (dikkat edin kişileri değil) bulalım.
// Ahmet Güven 50 yaşın üstündeki ilk kişi olduğu için sonucu bulduktan sonra arama yapmayı bırakıyoruz. Arrayinizde ilk bulunan kişi sonucunuz olur. Yani herhangi bir isme göre sıralama vs. burada yoktur.

let yas50Buyuk = kisiler.find((kisi) => kisi.yas > 50);
console.log(yas50Buyuk);

// 5-) 100 yaşından büyük olanları bulalım
let yas100Buyuk = kisiler.find((kisi) => kisi.yas > 100);
console.log(yas100Buyuk || sonucYok);

// 6-) Kilosu 100'den fazla olanları bulalım
let kilo100Buyuk = kisiler.find((kisi) => kisi.kilo > 100);
console.log(kilo100Buyuk || sonucYok);

// 7-) Yaşı 40 altında olan kişileri bulalım.
let yas40Kucuk = kisiler.filter((kisi) => kisi.yas < 40);
console.log(yas40Kucuk);

// 8-) Tüm erkekler

let erkekler = kisiler.filter((kisi) => kisi.cinsiyet === "erkek");
console.log(erkekler);

// 9-) Tüm kadınlar,
let kadınlar = kisiler.filter((kisi) => kisi.cinsiyet === "kadın");
console.log(kadınlar);

// 10-) Balıkesir'de yaşayanlar
let ikamet = kisiler.filter((kisi) => kisi.sehir === "Balıkesir");
console.log(ikamet);

// 11-) Kilosu 75'ten az olan kişiler

let kilo75Kucuk = kisiler.filter((kisi) => kisi.kilo < 75);
console.log(kilo75Kucuk);

// 12-) Yaşı 50’den küçük, göz rengi kahve olanlar?

let yasgoz = kisiler.filter(
  (kisi) => kisi.yas < 50 && kisi.gozRengi === "kahve"
);
console.log(yasgoz);

// 13-) Yaşı 30 üzerinde olanlar veya kadınlar?

let yaskadın = kisiler.filter(
  (kisi) => kisi.yas > 30 || kisi.cinsiyet === "kadın"
);
console.log(yaskadın);
