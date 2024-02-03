updateClock();
setInterval(updateClock,1000);

function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    const termination = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // 0 is false -> 12 is analysed
    hours = hours.toString().padStart(2,0)
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds} ${termination}`;
    document.getElementById("clock").textContent = timeString;
}
