const playBoard = document.querySelector(".play-board");
const ElementoMarcador = document.querySelector(".score");
const ElementoMaximo = document.querySelector(".high-score");



let finjuego;
let foodX , foodY;
let snakeX = 5, snakeY = 10;
let snakeBody = []; //cuerpo de la serpiente
let velocityX = 0, velocityY = 0;
let setIntervalId;
let marcador = 0;


let puntajemax = localStorage.getItem("high-score") || 0;
ElementoMaximo.innerHTML = `Puntaje Maximo: ${puntajemax}`;




const changFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1; // variables que cambian la posicion de la comida de la serpiente 
    foodY = Math.floor(Math.random() * 30) + 1;
    
}

const handleGameOver = () => {

    clearInterval(setIntervalId);
    alert("over");
    location.reload();
}

const changeDirection = (e) =>{  //Direcciones de los botones 
    //console.log(e);
    if(e.key === "ArrowUp" && velocityY != 1){
        velocityX = 0;
        velocityY = -1; //Restar debido a que los puntos en Y están invertido en el plano 
    }else if (e.key === "ArrowDown" && velocityY != -1){
        velocityX = 0;
        velocityY = 1;
    }else if( e.key === "ArrowLeft" && velocityX != 1){
        velocityX = -1;
        velocityY = 0;
    }else if( e.key === "ArrowRight" && velocityX != -1 ){
        velocityX = 1;
        velocityY = 0;
    }
    //initGame();
}

const initGame = () => {

    if(finjuego) return handleGameOver();

    let htmlMarkup = `<div class="food" style="grid-area:${foodY} / ${foodX}"></div>`;
    
    if(snakeX === foodX && snakeY === foodY){
        
        changFoodPosition();
        snakeBody.push([foodX, foodY]);
        marcador++;

        puntajemax = marcador >= puntajemax ? marcador : puntajemax;
        localStorage.setItem("high-score", puntajemax);
        ElementoMarcador.innerHTML = `Puntaje: ${marcador}`;

        ElementoMaximo.innerHTML = `Puntaje Maximo: ${puntajemax}`;
    }

    for(let i = snakeBody.length - 1; i > 0; i--){
        snakeBody[i] = snakeBody[i - 1];
    }

    snakeBody[0] = [snakeX, snakeY]; //hace que la serpiente se pueda ver en la cuadricula 

    snakeX += velocityX;
    snakeY += velocityY;
    
    if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30){
        finjuego = true;
    }


    for(let i = 0; i < snakeBody.length; i++){
        htmlMarkup += `<div class="head" style="grid-area:${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
    
        if(i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]){
            finjuego = true;
        }
    }


    
    playBoard.innerHTML = htmlMarkup;
}

changFoodPosition();
//initGame();
setIntervalId = setInterval (initGame, 125);
document.addEventListener("keydown", changeDirection);