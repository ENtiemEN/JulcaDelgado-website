function rollDice(){
    const numOfDice = document.getElementById("numDice").value;
    const diceResult = document.getElementById("result");
    const diceImages = document.getElementById("images");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * (6 -1 +1)) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`)
    }
    diceResult.textContent = `Dice Faces: ${values.join(', ')}`
    diceImages.innerHTML = images.join('');
}