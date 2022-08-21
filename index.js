document.querySelector(".btn").addEventListener('click', () => {
    let color_word = document.querySelector(".current_color");
    let color = generateColor();
    color_word.textContent = color;
    document.body.style.backgroundColor = color;
});

function generateColor(){
    let colorSelection = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += colorSelection[Math.floor(Math.random() * 16)];
    }
    return color;
}