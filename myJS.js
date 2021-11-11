function createForm()
{
    let form = document.createElement('div');
    form.setAttribute('name', 'table');
    form.appendChild(createInput('Enter the height of the map', 'height'));
    form.appendChild(createInput('Enter the width of the map', 'width'));
    form.appendChild(createButton());
    form.classList.add('form');
    document.body.appendChild(form);
}

function createInput(placeholderMessage, attribute)
{
    let input = document.createElement('input');
    input.setAttribute('id', attribute)
    input.required = true;
    input.type = 'number';
    input.placeholder = placeholderMessage;
    return input;
}

function createButton()
{
    let button = document.createElement('button');
    button.innerHtml = 'Create field';
    button.classList.add('button');
    button.setAttribute('onclick', 'creteField()')
    return button;
}

function createCell(x, y)
{
    let cell = document.createElement('div');
    cell.setAttribute('positionX', x)
    cell.setAttribute('positionY', y)
    cell.classList.add('cell');
    return cell;
}

function creteField()
{
    let height = Number(document.getElementById('height').value);
    let width = Number(document.getElementById('width').value);
    let field = document.createElement('div');
    let countCell = (height * width) / 10 * 10;

    field.style.width = width * 10 + "px";
    field.style.height = height * 10 + "px";

    for(let x = 1; x < width; x ++) {
        for(let y = 1; y < height; y ++) {
            field.appendChild(createCell(x, y));
        }
    }
    field.classList.add('field');
    document.body.appendChild(field);
    let snakeBody = document.querySelector('div[positionx="width/2"][positiony="height/2"]');
    alert(snakeBody);
}

createForm();


// function assignCoordinatesToCells(width, height)
// {
//     let cells = document.getElementsByClassName('cell');
//
//     let x = 1,
//         y = height;
//     for(let i = 0; i < cells.length; i++) {
//         if(x > width) {
//             x = 1;
//             y--;
//         }
//         cells[i].setAttribute('positionX', String(x));
//         cells[i].setAttribute('positionY', String(y));
//         x++
//     }
// }


// let field = document.createElement('div');
// document.body.appendChild(field);
// field.setAttribute('rel', 'test');
// field.classList.add('cell');


// создать объект для формы


// добавить к пересылке ещё пару ключ - значение
// formData.append("patronym", "Робертович");
//
// // отослать
// var xhr = new XMLHttpRequest();
// xhr.open("POST", "/url");
// xhr.send(formData);


// function createCell()
// {
//     let exel = document.createElement('div');
//     document.body.appendChild(exel);
//     return exel.classList.add('exel');
// }
//
// function createPlayingField()
// {
//     let element = document.getElementById('field');
//     console.log(element);
// }

// createField();
// createPlayingField();

// function createForm()
// {
//     let form = document.createElement('form');
//     form.setAttribute('name', 'table');
//     form.appendChild(createInput('Enter the height of the map', 'height'));
//     form.appendChild(createInput('Enter the width of the map', 'width'));
//     form.appendChild(createButton());
//     document.body.appendChild(form);
// }
//
// function createInput(placeholderMessage, attribute)
// {
//     let input = document.createElement('input');
//     input.setAttribute('id', attribute)
//     input.required = true;
//     input.type = 'number';
//     input.placeholder = placeholderMessage;
//     return input;
// }
//
// function createButton()
// {
//     let button = document.createElement('input');
//     button.type = "submit";
//     button.value = "Create field";
//     button.setAttribute('onclick', 'creteField()')
//     return button;
// }
//
// function createCell(x, y)
// {
//     let cell = document.createElement('div');
//     cell.setAttribute('positionX', x)
//     cell.setAttribute('positionY', y)
//     return cell.classList.add('cell');
// }
//
// function creteField()
// {
//     let height = Number(document.getElementById('height').value);
//     let width = Number(document.getElementById('width').value);
//     let field = document.createElement('div');
//
//     for(let x = 1;x <= width; x ++ ) {
//         for (let y = 1;y <= height; y++ ) {
//             // field.appendChild(createCell(x, y));
//             let cell = document.createElement('div');
//             cell.setAttribute('positionX', String(x));
//             cell.setAttribute('positionY', String(y));
//             field.appendChild(cell);
//         }
//     }
//     let a = 123;
//     alert(a);
//     field.classList.add('field');
//     document.body.appendChild(field);
// }
//
// createForm();