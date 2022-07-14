'use strict'

const b=()=>{

    fetch('http://api.quotable.io/random').then((obj)=>{
    return obj.json();
    }).then((txt)=>{

        document.getElementById('t1').textContent=txt.content;
        document.getElementById('t2').textContent=txt.author;
    })

}


document.getElementById('clk').addEventListener('click',b);