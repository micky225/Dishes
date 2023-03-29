// let name ="Michael";
// let age = 20;
// let array1 = ["Adwoa","Adomah","Vanessah","Beatrice"]
// let mydict = [{
//     "name":"Michael",
//     "age": 20,
//     "program":"Comp Sci"
// }]
// let single = true;
// alert("Wassup with you");
// let User_Input = prompt("What is your name? ");
// console.log(User_Input);
// console.log(name);
// console.log(age);
// console.log(single);

// Conditional Statements
// if (name == "Michael"){
//     console.log("yes");
// }
// else if(name != "Michael"){
//     console.log("no");
// }
// else{
//     console.log("none")
// }

// loops
// for (let i= 0; i <= 3; i++){
//     console.log(array1[i]);
// }
// console.log(mydict[0]["name"]);
// function myfunc(name, name2){
// let me = `My name is ${name} ${name2}`;
//  return me
// }
// let NewName =myfunc("Appiah""Michael")
// console.log(NewName)


// Special Functions
let buttons = document.getElementsByClassName("main");

let buttons1 = document.getElementsByClassName("domain");

let imageField = document.getElementById("mainImage");

let imageName = document.getElementById("h1")

myfoods = {
    "Jollof": "http://127.0.0.1:5500/jollof.JPG",
    "Banku": "http://127.0.0.1:5500/banku.JPG",
    "Fufu": "http://127.0.0.1:5500/fufu.JPG",
    "Awakye": "http://127.0.0.1:5500/Awakye.JPG",
    "Pizza": "http://127.0.0.1:5500/pizza.JPG",
    "Meatballs": "http://127.0.0.1:5500/Meatballs.JPG",
    "French_Fries": "http://127.0.0.1:5500/french_fries.JPG",
    "Fried_Rice": "http://127.0.0.1:5500/fried_rice.JPG",
    "Indomie": "http://127.0.0.1:5500/Indomie.JPG"

}



for (let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', ()=>{
        let buttonsValue = buttons[i].value;

        imageField.src = myfoods[buttonsValue];

        imageName.innerHTML = buttonsValue;
    });

    
}


for (let i=0; i<buttons1.length; i++){
    buttons1[i].addEventListener('click', ()=>{
        let buttons1Value = buttons1[i].value;

        imageField.src = myfoods[buttons1Value];

        imageName.innerHTML = buttons1Value;


    });

}    
