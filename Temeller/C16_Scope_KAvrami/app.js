// Scope kavrami 

// Global scope

var value1= 10;
let value2=20;
const value3=30;

// function Func(){
//     var value1=40;
//     let value2=50;
//     const value3=60;
//     console.log(value1,value2,value3);
// }

// Func();

if(true){
    var value1=40;
    let value2 =45;
    const value3 =60;

    console.log(value1,value2,value3);
}

// console.log(a);
// console.log(b);
// console.log(c);
 console.log(value1,value2,value3);



// function a(){
//     // function scope
// }


// if(){
// block scope
// }


// bir blok icerisinde tanimlanmis var degiskeni blok disarisinda da kullanilabiliyor
// ancak let ve const disarda var olmuyor

/* var ile global scope da tanimlanmis bir degisken sonra bir blok icerisinde 
tanimlanirsa o degiskene yeni atama yapip degistiriyor. Bu nedenle onemli bir degisken 
belirlerken var ile atama yapmamak gerekir
*/