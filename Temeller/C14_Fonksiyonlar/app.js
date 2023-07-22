// Fonksiyon Tanimlama

function merhaba(){
    console.log("Merhaba");
}

merhaba(); // fonksiyon cagrisi - function call

function merhaba2 (name,age){
    if(typeof name === "undefined") name="Bilgi yok";
    if(typeof age === "undefined") age="Bilgi yok";
    
    console.log(`Isim: ${name} Yas: ${age}`);
}


merhaba2("Yavuz",32);

merhaba2();     // deger gondermezsek undefined yaziyor (if kismini sonra ekledik)
                // bir baska yontem ise basta func icinde bilgi yok olarak atanir,
                // deger girilirse o olur girilmezse atanan yazar


// return

function square(x){
    console.log(x*x);
}

function cube(x){
    console.log(x*x*x);
}

let a= square(12);
a=cube(a); // NaN dondu. return yapmamiz lazim

// return un amaci ilk fonksiyonun sonucunu deger olarak donmesini sagliyor
// deger donmezse not a number diyerek islem yapamiyor

function square(x){
   return x*x;
}

function cube(x){
    return x*x*x;
}

let b= square(12);
b=cube(b);
console.log(b);

let c = cube(square(12));   // farkli bir yazim bicimi
console.log(c);

// return fonksiyonu sonlandirir. returnden sonra yazilanin onemi yok

// Function expression

const merhaba3= function(isim){
    console.log("Merhaba "+ isim);
};

merhaba3();
merhaba3("yvz");

// Immediately invoked Functional Expression (IIFE)
// (tanimlandigi yerde calisan fonksiyonlar)

(function(ad){
    console.log("Merhaba "+ ad);
})("selim");

const database = {
    host: "localhost",
    add: function(){
        console.log("eklendi");
    },
    get: function(){
        console.log("elde edildi");
    },
    update: function(id){
        console.log(`id: ${id} Guncellendi`);
    },
    delete: function(id){
        console.log(`Id: ${id} Silindi`);
    }
}

console.log(database.host);
database.add();
database.get();
database.update(23);
database.delete(22);

