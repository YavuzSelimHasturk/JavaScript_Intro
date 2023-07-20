// While donguleri

let i = 0;
while(i<10){
    console.log(i);
    i++;
}

let x =10;

while(x > 0){
console.log(x);
x-=2;
}

// Break ve Continue

let k = 0;
while(k<10){
    console.log(k);
    if(k==5){
        break   // buraya gelince dongu sonlaniyor
    }
    k++;
}
// let a=0;
// while(a<10){
//     if(a==3 || a==5){
//         a++;
//         continue;
//     }
//     console.log(a);
//     a++;
// }

// Do while 
let y = 0

do {
    console.log(y);
    y++;

}while (y<10);

const lang = ["Python","Java","Javascript"];

let index = 0;
while(index<lang.length){

    console.log(lang[index]);
    index++;
}

// For dongusu
for ( let index=0; index < lang.length; index++){
    console.log(lang[index]);
}

//Foreach
lang.forEach(function(lang,index){
    console.log(lang,index);
})

// Map
const users = [
    {name : "Yavuz", age : 32 },
    {name : "Selim", age : 23},
    {name: "Zumrut", age : 44}
];

const names = users.map(function(user){
    return user.name;

})
console.log(names);

const ages = users.map(function(users){
    return users.age;
})
console.log(ages);


// for in dongusu
const user = {
    name : "Ismail",
    age:25
};

for(let key in user){
    console.log(key,user[key]);
}


