const conatiner = document.getElementById("gameContainer")
const grid = 20
const conatinerSize = 400

let snake = [{x:200,y:200}]
let direction ={x:0,y:0}
let food = generateFood()

let gameInterval = setInterval(gameloop,150)

document.addEventListener('keydown',changeDirection)

function changeDirection(e){
    if(e.key=='ArrowUp' && direction.y==0)
    {
        direction={x:0,y:-gridSize}
    }
    
}
