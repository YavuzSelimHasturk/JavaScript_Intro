let value ;

const now = new Date();   // su anki zamani almamizi saglar
//console.log(now);


const date1= new Date("9-19-1993 06:15:00");
const date2 = new Date("September 19 1993");
const date3 = new Date("9/19/1993");

value=date1;

// ay ocak = 0 gun pazar =0
value = date1.getMonth();
value = date1.getDate();
value = date1.getDay();


value = date1.getHours();
value = date1.getMinutes();
value= date1.getMilliseconds();


// olusturulan tarih degerini degistirmek icin
date1.setMonth(3);
date1.setDate(10);
date1.setFullYear(1991);
date1.setHours(12);
date1.setMinutes(0);

value=date1;
console.log(value);