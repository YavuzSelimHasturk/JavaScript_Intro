let value;

const programmer={
    isim:"Yavuz selim",
    yas:"33",
    email:"yvzslm@gmail.com",
    langs:["python","java","javascript"],

    adress: {
        city:"Istanbul",
        streeet:"Istiklal"
    },

    work : function(){
        console.log("Programci Calisiyor...");
    }



}
value=programmer;

// objenin email ozelligine erismek icin
value=programmer.email;     
value=programmer["email"];


value= programmer.langs;
value=programmer.adress.city;

programmer.work();

//json array olusturma
const programmers= [
    {name: "Yavuz", age:33},
    {name:"Selim",age :32}
];

value=programmers[0].name;

// basit objelere object literal deniyor


console.log(value);