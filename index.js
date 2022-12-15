// EXERCISE ONE

function change() {
    let titleEl = document.querySelector('#titleIdName');
    console.log(titleEl);
    }
    
    function change() {
    let titleEl2 = document.querySelector('.titleClassName');
    console.log(titleEl2);
    }
    
    function change() {
    let titleEl3 = document.querySelector('h1');
    console.log(titleEl3);
    }
    

// EXERCISE TWO

function change() {
    document.querySelector('#titleIdName').style.color = 'pink';
    }
        
function change() {
    document.querySelector('.titleClassName').style.color = 'pink';
    }
        
function change() {
    document.querySelector('h1').style.color = 'pink';
    }

// EXERCISE THREE

// En la consola del inspector (para sustituir el cuadrado rojo): 
document.querySelector('article').innerHTML="<h1>hola!</h1>";

// En el visual (para sustituir tb):
function change() {
    document.querySelector('article').innerHTML="<h1>hola!</h1>";
}

// En el visual (para añadir cada vez que pulsamos el botón, para repetir):
// Para añadir un título hola!:
function change() {
    document.querySelector('article').innerHTML+="<h1>hola!</h1>";
}

// Para añadir + cuadrados rojos:

function change() {
    document.querySelector('article').innerHTML+="<div class='redSquare'></div>";
}

// o también creando una variable:

function change() {
    let titleEl = document.querySelector('article');
    titleEl.innerHTML += "<div class='redSquare'></div>";
}
