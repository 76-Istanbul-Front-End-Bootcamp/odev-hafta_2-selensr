/*
  Odev 1:
  Asagidaki fonksiyonu "Hello, John" ciktisi verecek sekilde duzenleyiniz."
 */

var person = {
  name: "John",
  message: function () {    
    console.log("Hello, " + this.name)
  }
}

var messageFunc = person.message.bind(person)
messageFunc();


/*  
  Odev 2:
  Asagidaki fonksiyonu sirasiyla 
  20
  40
  60
  sonuclarini yazdiracak sekilde duzenleyiniz.
*/
var numbers = {
  numbers: [[10,20,30], 2],
  multiply: function(){
    let that = this;
    this.numbers[0].map(function(number, numberIndex){
        const result = number * that.numbers[1];
        console.log(result)
    })
  }
};

numbers.multiply.bind(numbers).call(numbers);

/* 
  Odev 3:
  Asagidaki isValidName fonksiyonunda bir isim validasyonu yaziniz.
  Ipucu: Verilen arguman gecerli bir isim ise true degilse false donmeli
  Ornek : isValidName("John") true donmeli
  Ornek : isValidName(" J ohn") false donmeli
  



console.log(isValidName("Frank") === true);
console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);

*/

function isValidName(name){ 
  if(typeof name !== "string") {
    return false
  } else if (name === "") {
    return false
  } else if (name === false){
    return false
  } else if (name === undefined){
    return false
  } else if (name === null){
    return false
  } else if (name.length < 3){
    return false
  } else if (!!name.toLowerCase().split("").map(n => n.charCodeAt()).find(n => n < 97 || n > 123 &&  n !== 231 &&  n !== 305 &&  n !== 287 &&  n !== 246 && n !== 351 &&  n !== 252 )) {
    return false;
  } else {
    return true
  }
}

/*
  Odev 4:
  Asagidaki katilimSaati fonksionu 2 arguman almaktadir.
  dersSayisi: ogrencinin katildigi ders sayisi
  dersSaati: her bir dersin dakika cinsinden suresi

  katilimSaati fonkisyonu kac derse girilidigi ve her bir dersin kac dakika surdugu bilgisini alip sonuc olarak toplamda kac dakika derse girildigini donmelidir.
  - iki arguman de number veya string olarak verilebilir.
  - Sayi olmayan ya da sayiya cevrilemeyen argumanlar var ise hata donulmelidir.
  Ornek: katilimSaati(3, 30) 90 sonucunu vermelidir.
  Ornek: katilimSaati("3", 20) 60 sonucunu vermelidir.
  Ornek: katilimSaati("5", "30") 150 sonucunu vermelidir.
*/
function katilimSaati(dersSayisi, dersSuresi){

function katilimSaati(dersSayisi, dersSuresi){
    if (isNaN(parseInt(dersSayisi)) || isNaN(parseInt(dersSuresi)) ) {
    return false;
  } else if(dersSayisi === ""|| dersSuresi === "") {
    return false
  } else if(dersSayisi === null|| dersSuresi === null) {
    return false
  } else if(dersSayisi === undefined|| dersSuresi === undefined) {
    return false
  } else if(dersSayisi === Infinity|| dersSuresi === Infinity) {
    return false
  } else if(dersSayisi === true|| dersSuresi === true|| dersSayisi === false|| dersSuresi === false ) {
    return false
     
  } else {
    return dersSayisi * dersSuresi
  }
  
}
}


