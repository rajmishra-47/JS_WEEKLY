'use strict'

//object destructuring

// let a={
//     name:"raj",
//     age:20,
//     degree:"Btech",
//     hobby:{
//         first:"games",
//         second:"food",
//     }
// }

// // console.log(a);
// console.log(`hello my name is ${a.name} and my age is ${a.age}`);

// let name,age,degree,hobby;

// ({name,age,degree,hobby}=a);

// console.log(`hello my name is ${name} and my age is ${age} and ${hobby.first}`);


//Default parameters

function add(a,b=1){
    return a+b;
}

console.log(add(2));