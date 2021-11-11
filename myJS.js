function createInput(placeholderMessage, attribute)
{
    let input = document.createElement('input');
    input.setAttribute('id', attribute)
    input.required = true;
    input.type = 'number';
    input.placeholder = placeholderMessage;
    return input;
}

function createButtonSG()
{
    let button = document.createElement('button');
    button.textContent = 'Start Game';
    button.classList.add('button');
    button.setAttribute('onclick', 'startGame()')
    return button;
}

function createForm()
{
    let form = document.createElement('div');
    form.setAttribute('name', 'table');
    form.appendChild(createInput('Enter the width of the map', 'width'));
    form.appendChild(createInput('Enter the height of the map', 'height'));
    form.appendChild(createButtonSG());
    form.classList.add('form');
    document.body.appendChild(form);
}

function createCell(x, y)
{
    let cell = document.createElement('div');
    cell.setAttribute('positionX', x);
    cell.setAttribute('positionY', y);
    cell.classList.add('cell');
    return cell;
}

function createSnake(snake)
{
    // console.log(snake);
    // console.log(snake.length);
    snake[0].classList.add('snakeHead');

    for(let i = 1; i < snake.length; i++) {
        snake[i].classList.add('snakeBody');
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createFly(width, height)
{
    let isFlyCreate = false;
    let fly;
    while(!isFlyCreate) {
        let randomWidth = getRandomIntInclusive(1, width);
        let randomHeight = getRandomIntInclusive(1, height);
        fly = document.querySelector('div[positionX="'+randomWidth+'"][positionY="'+randomHeight+'"]');
        if((fly.classList.contains('snakeBody')===false) && (fly.classList.contains('snakeHead')===false)) {
            fly.classList.add('fly');
            isFlyCreate = true;
        }
    }
    return fly;
}

function creteField(width, height)
{
    let field = document.createElement('div');

    field.style.width = width * 10 + "px";
    field.style.height = height * 10 + "px";

    for(let y = 1; y <= height; y ++) {
        for(let x = 1; x <= width; x ++) {
            field.appendChild(createCell(x, y));
        }
    }
    field.classList.add('field');
    document.body.appendChild(field);
    // return field;
}

function moveSnake(snake)
{
    snake[0].classList.remove('snakeHead');
    let snakeTail =  snake.pop();
    snakeTail.classList.remove('snakeBody');
    let currentPosX = Number(snake[0].getAttribute('positionX'));
    let currentPosY = Number(snake[0].getAttribute('positionY'));
    let newPosX = currentPosX + 1;
    let newPosY = currentPosY;
    snake.unshift((document.querySelector('div[positionX="'+newPosX+'"][positionY="'+newPosY+'"]')));
    createSnake(snake);

}
function eatFly(snake, fly)
{
    fly.classList.remove('fly');
    snake[0].classList.remove('snakeHead');
    let newPosX = Number(fly.getAttribute('positionX'));
    let currentPosY = Number(fly.getAttribute('positionY'));
    snake.unshift((document.querySelector('div[positionX="'+newPosX+'"][positionY="'+currentPosY+'"]')));
    createSnake(snake)
}

function startGame()
{
    let snake = [];

    let height = Number(document.getElementById('height').value);
    let width = Number(document.getElementById('width').value);

    creteField(width, height);

    let posX = Math.ceil(width/2);
    let posY = Math.ceil(height/2);

    snake.push((document.querySelector('div[positionX="'+posX+'"][positionY="'+posY+'"]')),
        (document.querySelector('div[positionX="'+(posX-1)+'"][positionY="'+posY+'"]')),
        (document.querySelector('div[positionX="'+(posX-2)+'"][positionY="'+posY+'"]')),
        (document.querySelector('div[positionX="'+(posX-3)+'"][positionY="'+posY+'"]')));
    createSnake(snake);

    let fly = createFly(width, height);
    // let fly = document.querySelector('div[positionX="30"][positionY="25"]');

    let gameIsOver = false;
    while(!gameIsOver) {
        moveSnake(snake);
        let snakePosX = Number(snake[0].getAttribute('positionX'));
        let snakePosY = Number(snake[0].getAttribute('positionY'));
        let flyPosX = Number(fly.getAttribute('positionX'));
        let flyPosY = Number(fly.getAttribute('positionY'));
        if(snakePosX === flyPosX && snakePosY === flyPosY) {
            eatFly(snake, fly);
        }
        if(snakePosX === width) {
            alert(123);
            gameIsOver = true;
        }
    }
}




createForm();


