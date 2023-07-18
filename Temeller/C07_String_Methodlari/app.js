let value;


const firstName="Louis";
const lastName="Arsmtrong";
const lang= "java,python,c++";

value= firstName+lastName; // stringleri birlestirme
value= firstName+" "+lastName; // bosluk birakarak birlestirme

value="Mustafa Murat ";
value += "Coskun"; // value=value+"Coskun" ile ayni seyi ifade eder

value = firstName.length; // string icinde kac karakter old. gosterir
value= firstName.concat(" ",lastName," ","Caz") // concatination

value=firstName.toLowerCase(); // karakterleri kucuk harfe cevirir
value=firstName.toUpperCase(); // karakterleri buyuk harfe cevirir

value = firstName[3]; // 3. indexindeki karakteri getiriyor
value= firstName[firstName.length-1]; // son karakter icin

// Index Of
value=firstName.indexOf("L"); // L harfinin kacinci indexte old. gost.
                                // olmayan karakter icin -1 dondurur

value= firstName.charAt(0); // 0. indexteki karakteri getirir                              

// Split
value=lang.split(","); // ayirma methodu. virgul ile ayirdi ve array yapti

// Replace
value=lang.replace("python","CSS"); // python yerine CSS koyduk

// Includes
value= lang.includes("java"); // stringin icinde java iceriyor mu? T/F doner




console.log(value);