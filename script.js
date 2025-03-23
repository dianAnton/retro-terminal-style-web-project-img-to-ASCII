const canvas = document.getElementById("canvas_1");
const ctx = canvas.getContext("2d");
const imageInput = document.getElementById("imageInput");
const loadButton = document.getElementById("loadImage");

const image_1 = new Image();
// Cuando el usuario selecciona una imagen
imageInput.addEventListener("change", function (event) {
    const file = event.target.files[0]; // Obtener el archivo seleccionado
    if (file) {
        const reader = new FileReader();
        
        // Cargar la imagen en base64
        reader.onload = function (e) {
            image_1.src = e.target.result;
        };
        
        reader.readAsDataURL(file); // Convertir a base64
    }
});

const inputSlider = document.getElementById("resolution");
const inputLabel = document.getElementById("resolutionLabel");
inputSlider.addEventListener('change', handleSlider);

class Cell {
    constructor(x, y, symbol){
        this.x = x;
        this.y = y;
        this.symbol = symbol;
    }
    draw(ctx){
        ctx.fillStyle = "#ffb000";
        
        ctx.shadowColor = "#FF8C00";
        ctx.shadowBlur = 2;
       
        ctx.strokeText(this.symbol, this.x, this.y);
        ctx.fillText(this.symbol, this.x, this.y);
    }
}

class AsciiEffect {
    
    // Private class members
    #imageCellArray = [];
    #pixels = [];
    #ctx;
    #width;
    #height;

    // Constructor 
    constructor(ctx, width, height) {
        this.#ctx = ctx;
        this.#width = width;
        this.#height = height;
        this.#ctx.drawImage(image_1, 0, 0, this.#width, this.#height);

        // Get image data to them manipulate
        this.#pixels = this.#ctx.getImageData(0, 0, this.#width, this.#height).data;
        console.log(this.#pixels);
    }

    #convertToSymbol(value){
        if (value > 240) return ' ';       // Casi blanco - espacio vacío
        else if (value > 225) return '.';
        else if (value > 210) return ':';
        else if (value > 195) return '-';
        else if (value > 180) return '+';
        else if (value > 165) return '=';
        else if (value > 150) return 'o';
        else if (value > 135) return 'a';
        else if (value > 120) return 's';
        else if (value > 105) return 'x';
        else if (value > 90) return 'X';
        else if (value > 75) return '%';
        else if (value > 60) return '#';
        else if (value > 45) return 'W';
        else if (value > 30) return '@';
        else if (value > 15) return 'M';
        else return '*';                   // Más oscuro - carácter más denso         // Casi blanco - espacio vacío
                    // Más oscuro - carácter más denso
    }

    // Recorrer la imagen completa del canvas en grid de celdas tamaño cellSize
    #scanImage(cellSize){
        this.#imageCellArray = [];

        // Recorre la imagen en celdas de tamaño cellSize
        for (let y = 0; y < this.#height; y+=cellSize){
            for (let x = 0; x < this.#width; x+=cellSize){
                const posX = x  * 2;
                const posY = y * 4;
                const pos = (posY * this.#width + posX) + posX;

                if (this.#pixels[pos + 3] > 128){
                    const red = this.#pixels[pos];
                    const green = this.#pixels[pos + 1];
                    const blue = this.#pixels[pos + 2];
                    const total = red + green + blue;
                    const averageColorValue = total / 3;
                    const symbol = this.#convertToSymbol(averageColorValue);
                    if (total > 200 ) this.#imageCellArray.push(new Cell(x, y, symbol)); 
                }
            }
        }
        console.log(this.#imageCellArray);
    }
    #drawAscii(){
        this.#ctx.clearRect(0, 0, this.#width, this.#height);
        for (let i = 0; i < this.#imageCellArray.length; i++){
            this.#imageCellArray[i].draw(this.#ctx);
        }
    }
    draw(cellSize ) {
        this.#scanImage(cellSize)
        this.#drawAscii();
    }
}   

let effect;

function handleSlider(){
    if (inputSlider.value == 5){
        inputLabel.innerHTML = "Resolucion: " + inputSlider.value + "px";
        effect.draw(5)
    }
    else {
        inputLabel.innerHTML = "Resolucion: " + inputSlider.value + "px";
        effect.draw(parseInt(inputSlider.value))
    }
}

image_1.onload = function iniciar() {
    canvas.width = image_1.width;
    canvas.height = image_1.height;
    effect = new AsciiEffect(ctx, image_1.width, image_1.height);
    handleSlider();
}