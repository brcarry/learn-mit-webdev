//JavaScript中变量可视为全局变量(?)
//注意声明顺序，防止出现未声明或重复声明，影响编译

const GRID_SIZE = 21;

//let initX = Math.floor(Math.random() * GRID_SIZE) + 1;
//let initY = Math.floor(Math.random() * GRID_SIZE) + 1;
//let food = { x: initX, y: initY };
//然后initX,initY的使命就完成了

let food = { x: Math.floor(Math.random() * GRID_SIZE) + 1, y: Math.floor(Math.random() * GRID_SIZE) + 1 };

const updateFood = () => {
    if (onSnake(food)) {
        growSnake();
        food = getNewFoodPosition();
    }
}

const drawFood = (gameBoard) => {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}