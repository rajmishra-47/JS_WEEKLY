'use strict'

// //REST
// function add(a,b,...others){
    
//     return (a+b+"-"+others);
// }

// console.log(add(1,2,3));


// SPREAD

let arr=['a','b','c'];

function pt(n1,n2,n3){

    return (n1+" "+n2+" "+n3);
}

console.log(pt(...arr));