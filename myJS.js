function createForm()
{
    let form = document.createElement('form');
    form.setAttribute('name', 'table');
    form.appendChild(createInput('Enter the height of the map', 'height'));
    form.appendChild(createInput('Enter the width of the map', 'width'));
    form.appendChild(createButton());
    document.body.appendChild(form);
}

function createInput(placeholderMessage, attribute)
{
    let input = document.createElement('input');
    input.setAttribute('id', attribute)
    input.type = 'number';
    input.placeholder = placeholderMessage;
    return input;
}

function createButton()
{
    let button = document.createElement('input');
    button.type = "submit";
    button.value = "Create field";
    button.setAttribute('onclick', 'creteField()')
    return button;
}

function createCell()
{
    let cell = document.createElement('div');
}

function creteField()
{
    let height = document.getElementById('height').value;
    let width = document.getElementById('width').value;
    let fieldArea = height * width;

    let field = document.createElement('div');
    field.setAttribute('height', '50px');
    field.setAttribute('width', '40px');
    field.classList.add('cell');
    // field.setAttribute('height', 'height');
    // field.setAttribute('width', 'width');
}

createForm();

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