// Karsilastirma Operatorleri

// ==
// ===
console.log(2==2); //true
console.log("js"=="javascript"); //false

console.log(2=="2");  // bir taraf sayi bir taraf string ise otomatik string yapar ==> true
console.log(2==="2"); // burada tiplerini karsilastirir ==> false

//!=
console.log(2!=4); //true
//!==
//>
console.log(4>2); //true
console.log(2>4); //false
//<
console.log(2<4); // true

//>=
console.log(4>=2); //true
console.log(4>=4); //true
//<=
console.log(2<=4); //true


// Mantiksal Baglaclar

// Not Operatoru  !
console.log(!(2==2));

// And Operatoru     &&
console.log((2==2)&&("Ahmet"=="Ahmet")); //true

// Or Operatoru      ||
console.log((4==2)||("Ahmet"=="Ahmet"));  // true

const error = false;
if(error==true){
    console.log("Hata olustu");
}
else{
    console.log("Hata Olusmadi");
}
//////////////////
const user ="yvz";
if(user==="yvz"){
    console.log("kullanici bulundu");
}else{console.log("kullanici bulunamadi")};

//////////////////////////////////////////////

const process = "3";
if(process==="1"){
    console.log("islem 1");
}else if (process==="2"){
    console.log("islem 2");
}else if(process==="3"){
    console.log("islem 3");
}else if(process==="4"){
    console.log("islem 4");
}else{
    console.log("gecersiz islem");
}

/////////////////////////////////////

const number =100;
if(number===100){
    console.log("Sayi 100'e esit");
}else{
    console.log("Sayi 100'e esit degil");
}

// Ternary 
console.log(number===100 ? "Sayi 100":"Sayi 100 degil");


