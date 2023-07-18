let value;

const value1=10;
const value2=4;

// aritmetik operatorler
value=value1+value2;
value= value1-value2;
value=value1*value2;
value=value1/value2;
value=value1%value2; // bolumunden kalan

// math classi bazi ozellikler
value=Math.PI;  // math clasindan pi sayisi

value=Math.round(3.6);  // math clasindan yuvarlama

value=Math.ceil(5.1); // ceil: ondalik degeri ust taraftaki integera yuvarlar

value=Math.floor(3.2); // floor: sayiyi asagi yuvarlar

value=Math.sqrt(25); //sqrt : karekok alma

value=Math.abs(-23); // abs: mutlak deger alma

value=Math.pow(8,3); // pow us alma. 8 in 3. kuvvetini alma

value=Math.max(10,-1,100,32); // en yuksek sayiyi dondurcek
value=Math.min(10,-1,100,32); // en kucuk sayiyi dondorur

value=Math.random(); // 0 ile 1 arasinda ondalikli deger uretir
value=Math.random() *20 ; // 0 ile 20 arasi deger uretir
value=Math.random() *20+1 ; // 0 ile 21 arasi deger uretir

value=Math.floor(Math.random()*20); // urettigi sayiyi asagi yuvarladi



console.log(value);