const pantalla = document.getElementById("display");

function appendToDisplay(i){
    pantalla.value += i;
}

function clearDisplay(){
    pantalla.value = "";
}

function calculate(){
    try{
        pantalla.value = eval(pantalla.value);
    }catch(error){
        pantalla.value = error;
    }
}