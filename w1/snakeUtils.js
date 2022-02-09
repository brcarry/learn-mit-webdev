

const onSnake = (position) => {
    for (let i = 0; i < snakeBody.length; i++) {
        if (equalPositions(position, snakeBody[i])) {
            return true;
        }
    }
    return false;
}

const equalPositions = (pos1, pos2) => {
    return pos1.x === pos2.x && pos1.y === pos2.y;
}

const growSnake = () => {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
}

//直接push到蛇尾，即此时蛇尾是两个div重叠的状态
//因为蛇的移动是把蛇尾搬到蛇头，所以再下一次移动的时候，直接把插入到最后的蛇尾移到蛇头

const getNewFoodPosition = () => {
    let randomFoodPosition = randomGridPosition();
    while (onSnake(randomFoodPosition)) {
        randomFoodPosition = randomGridPosition();
    }
    return randomFoodPosition;
} 

const randomGridPosition = () => {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    };
}

const outOfBounds = (position) => {
    return position.x < 1 || position.x > GRID_SIZE || position.y < 1 || position.y > GRID_SIZE;
}

const snakeOutOfBounds = () => {
    return outOfBounds(snakeBody[0]);
}

const snakeIntersectSelf = () => {
    for (let i = 1; i < snakeBody.length; i++) {
        if (equalPositions(snakeBody[0], snakeBody[i])) {
            return true;
        }
    }
    return false;
}

