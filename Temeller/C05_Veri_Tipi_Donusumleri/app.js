let value ;

// veri tipini stringe cevirme

// istedigimiz veri tipini stringe cevirmek icin basina string yazip paranteze aliyoruz
value= 123;
value= String(123);
value= String(3.14);
value= String(true);
value = String ([1,2,3,4]);

value = (10).toString; // yukaridakiler ile ayni


// veri tipini sayilara cevirme

value= Number("123");
value= Number(null);
value= Number(undefined); // burda yazidirirken NaN cikiyor. not a number demek bu
value= Number("Hello World"); //NaN
value= Number(function(){console.log()}); //NaN
value = Number([1,2,3,4]); // NaN

// float (ondalikli olani degistirme yolu)
value = Number("3.14");
value = parseFloat("3.14");

value= parseInt("3");

const a = "Hello"+34;  // bir string ve bir sayi varsa otomatik stringe cevirdi



console.log(a);
console.log(typeof a);


console.log(value);
console.log(typeof value);
