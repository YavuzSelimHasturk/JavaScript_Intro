// Degisken olusturma

// var a = 20;
// var b = 10;
// var c = 40;

// console.log(a,b,c);

// 1- Primitive 
var a = 10;   // number veri tipi 
var b = 3.14; // number veri tipi 

console.log(typeof a); // a nin veri tipini concole da gosterir

// String veri tipi 

// var name = "Yavuz";
// console.log(name)
// console.log(typeof name); 

// Boolean veri tipi
// var a = true;
// console.log(a);
// console.log(typeof a);

// null veri tipi
// var a = null;
// console.log(a);

// undefined veri tipi
// var a ;
// console.log(a);

// 2- Referance veri tipi (array, object, function vs)
// referance veri tiplerinin hepsi birer objedir. typeof da object olarak cikar

// var numbers= [1,2,3,4,5];
// console.log(numbers);
// console.log(typeof numbers);

// console.log(numbers[0]); // numbers referansi uzerinden 0. indexdeki elemana ulastik

// var person = {
//     name: "yavuz",
//     age:25
// }
// console.log(person);
// console.log(typeof person);


// var date = new Date();
// console.log(date);
// console.log(typeof date);


// var merhaba = function(){
//     console.log("Merhaba");
// }

// console.log(typeof merhaba);

// primitive veri tipi sadece o degiskenin degeri
// referance veri tipi ise referance uzerinden bellekteki yeri gosteriyor
// biz o yeri gosterdikten sonra o degeri alabiliyoruz. 

/*
bard cevabi = Primitiv veri türleri, bellekte doğrudan depolanır.
 Referans veri türleri ise bellekte depolanan bir adresle depolanır. 
 Bu nedenle, referans veri türlerini değiştirdiğinizde, aslında bellekte 
 depolanan nesnenin kendisini değiştirirsiniz. Primitiv veri türlerini 
 değiştirdiğinizde ise, aslında bellekte depolanan değeri değiştirirsiniz.
*/