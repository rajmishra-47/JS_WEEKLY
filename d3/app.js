'use strict'

let a=[];

let b=1;

const inc=()=>{
 
    document.querySelector('.txt').innerHTML=b++;
    
}

const rest=()=>{

    b=0;
    document.querySelector('.txt').innerHTML=b++;

    for(let i=0;i<a.length;i++){
        a.pop();
    }
}

const sv=()=>{

    a.push(b-1);

    console.log(a);
}

document.querySelector('.inc').addEventListener('click',inc);
document.querySelector('.reset').addEventListener('click',rest);
document.querySelector('.save').addEventListener('click',sv);