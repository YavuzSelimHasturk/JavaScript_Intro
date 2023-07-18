let value;

const numbers = [43,56,44,23,35,5];
const numbers2= new Array(1,2,3,4,5,6);

const langs = ["python","java","C++","Javascript"];

const a = ["Merhaba",22,null,undefined,3.14];


value=numbers.length;  // arrayin uzunlugu
value = numbers[0];     // arrayin 0. indexi eleman
value = numbers[2];     // arrayin 2. indexindeki eleman

value = numbers[numbers.length-1];

// Herhangi bir indexteki degeri degistirme
numbers[2]=1000; // 2. indexi 1000 yaptik
value = numbers;

//index of
value = numbers.indexOf(1000); // degerin hangi indexte oldugunu bulduk

// arrayin sonuna deger ekleme
numbers.push(299);
value=numbers;

numbers.unshift(399);  // arrayin basina deger ekleme
value =numbers;

// sonundan deger atma
numbers.pop(); 
value=numbers;

// basindan eleman atma
numbers.shift();
value=numbers;

numbers.splice(0,3); // 0. indexten 3. indexe kadar atma(3 haric)
value=numbers;

// reverse (terse cevirme)
numbers.reverse();
value=numbers;


value=numbers.sort(); // siralama icin kullaniliyor. ama sayinin ilk basamagina gore siraliyor

// kucukten buyuge siralama
value = numbers.sort(function(x,y){
    return x-y;
});

// buyukten kucuge siralama
value= numbers.sort(function(x,y){
    return y-x;
});






console.log(value);