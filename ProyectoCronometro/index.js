const numbers = document.getElementById("numbers");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime; // epic
        timer = setInterval(update,10);
        isRunning = true;
    }
}
function pause(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}
function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    numbers.textContent = "00:00:00:00"; 
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime; // in ms
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2,0);
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60).toString().padStart(2,0);
    let seconds = Math.floor(elapsedTime / 1000 % 60).toString().padStart(2,0);
    let miliseconds = Math.floor(elapsedTime % 1000 / 10).toString().padStart(2,0);

    numbers.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`;
}