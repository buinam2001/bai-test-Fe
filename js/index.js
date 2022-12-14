let menu =  document.querySelector('.wrapper_sidebar')

let wapper =  document.querySelector('#wrapper');

let coating = document.querySelector('.coating');

function handlemenu() {

    menu.style.left = 0;
    coating.style.display = "block";


    
    
}


function handleclose() {


    menu.style.left = '-100%';
    menu.style.top = 0;
    menu.style.bottom = 0;


    coating.style.display = "none";
    
}