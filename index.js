// создаём перменную и присваиваем ей значение класса "text" для дальнейшей работы
let num = document.querySelector('.text');

// создаём функцию, чтобы при нажатии кнопки самому значению прибавить единицу
let fplus = document.querySelector('.plus');

fplus.addEventListener('click', function () {

    num.textContent = (num.textContent - 0) + 1; // перевод переменной из string в number

})

// создаём функцию, чтобы при нажатии кнопки самому значению прибавить единицу
let fminus = document.querySelector('.minus');

fminus.addEventListener('click', function () {

    num.textContent = (num.textContent - 0) - 1; // перевод переменной из string в number

})

let fmulti = document.querySelector('.mult');

fmulti.addEventListener('click', function () {

    num.textContent = (num.textContent - 0) * 2; // перевод переменной из string в number

})

let fdiv = document.querySelector('.div');

fdiv.addEventListener('click', function () {

    num.textContent = (num.textContent - 0) / 2; // перевод переменной из string в number

})


