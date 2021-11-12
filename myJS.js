let timer;
let fly;

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
}

let direction = 'right';
document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowLeft' && direction !== 'right') {
        direction = 'left';
    }
    if(event.key === 'ArrowRight' && direction !== 'left') {
        direction = 'right'
    }
    if(event.key === 'ArrowUp' && direction !== 'down') {
        direction = 'up';
    }
    if(event.key === 'ArrowDown' && direction !== 'up') {
        direction = 'down';
    }
});

function moveSnake(snake, width, height)
{
    snake[0].classList.remove('snakeHead');
    let snakeTail =  snake.pop();
    snakeTail.classList.remove('snakeBody');

    let headPosX = Number(snake[0].getAttribute('positionX'));
    let headPosY = Number(snake[0].getAttribute('positionY'));
    let flyPosX = Number(fly.getAttribute('positionX'));
    let flyPosY = Number(fly.getAttribute('positionY'));
    let newPosX;
    let newPosY;

    console.log(direction);
    if(direction === 'right') {
        newPosX = headPosX + 1;
        newPosY = headPosY;
    }
    if(direction === 'left') {
        newPosX = headPosX - 1;
        newPosY = headPosY;
    }
    if(direction === 'down') {
        newPosX = headPosX;
        newPosY = headPosY + 1;
    }
    if(direction === 'up') {
        newPosX = headPosX;
        newPosY = headPosY - 1;
    }
    if((headPosX === flyPosX) && (headPosY === flyPosY) ) {
        eatFly(snake, fly);
        fly = createFly(width, height);
    }
    if(canSnakeCrawl(newPosX, newPosY, width, height) === false) {
        createSnake(snake);
        alert('Game Over');
        clearInterval(timer);
    } else {
        snake.unshift((document.querySelector('div[positionX="'+newPosX+'"][positionY="'+newPosY+'"]')));
        createSnake(snake);
        if(snake[0].classList.contains('snakeBody')) {
            alert('Game Over');
            clearInterval(timer);
        }
    }
}
function eatFly(snake, fly)
{
    fly.classList.remove('fly');
    snake[0].classList.remove('snakeHead');
    let newPosX = Number(fly.getAttribute('positionX'));
    let newPosY = Number(fly.getAttribute('positionY'));
    snake.unshift((document.querySelector('div[positionX="'+newPosX+'"][positionY="'+newPosY+'"]')));
}

function canSnakeCrawl(snakePosX, snakePosY, width, height)
{
    let result = true;
    if(snakePosX === width + 1 ) {
        result = false;
    }
    if(snakePosX === 0 ) {
        result = false;
    }
    if(snakePosY === height + 1 ) {
        result = false;
    }
    if(snakePosY === 0 ) {
        result = false;
    }
    return result;
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
    fly = createFly(width, height);
    timer = setInterval(moveSnake, 80, snake, width, height);
}

createForm();


