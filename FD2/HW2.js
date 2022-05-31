//ДЗ №2 Задание 1

var firstNumber = +prompt('Введите число:'),
    secondNumber = +prompt('Сколько прибавить к предыдущему результату?'),
    thirdNumber = +prompt('Сколько отнять от предыдущего результата?'),
    fourthNumber = +prompt('На сколько умножить предыдущий результат?'),
    fifthNumber = +prompt('На сколько разделить предыдущий результат?');

alert('Формула: (' + firstNumber + ' + ' + secondNumber + ' - ' + thirdNumber + ') * ' + fourthNumber + ' / ' + fifthNumber + '\nРезультат: ' + (firstNumber + secondNumber - thirdNumber) * fourthNumber / fifthNumber);



//ДЗ №2 Задание 2

var login = prompt('Введите логин:');

if (login === 'Админ') {
    var password = prompt('Введите пароль:');
    if (password === 'Чёрный Властелин') {
        alert('Добро пожаловать!');
    } else if (password === null) {
        alert('Вход отменен');
    } else {
        alert('Пароль неверен');
    }
} else if (login === null) {
    alert('Вход отменен');
} else {
    alert('Я Вас не знаю');
}



//ДЗ №2 Задание 3

var login = prompt('Введите логин'),
message;

login === 'Вася' ? message = 'Привет' : (login === 'Директор' ? message = 'Здравствуйте': (login === '' ? message = 'Нет логина' : message = ''));



//ДЗ №2 Задание 4

var lastName = prompt('Введите вашу фамилию: ');
while (lastName === '' || lastName === null) {
    if (lastName === '' || lastName === null) {
        lastName = prompt('Поле не может быть пустым. Введите фамилию:');
    }
}

var firstName = prompt('Введите ваше имя: ');
while (firstName === '' || firstName === null) {
    if (firstName === '' || firstName === null) {
        firstName = prompt('Поле не может быть пустым. Введите имя:');
    }
}

var patronymic = prompt('Введите ваше отчество: ');
while (patronymic === '' || patronymic === null) {
    if (patronymic === '' || patronymic === null) {
        patronymic = prompt('Поле не может быть пустым. Введите отчество:');
    }
}

var age = Number(prompt('Введите свой возраст: '));
while (isNaN(age) || age > 100 || age < 1) {
    if (isNaN(age) || age > 100 || age < 1) {
    age = Number(prompt('Данные некорректны. Введите свой возраст: '));
    }
}

var gender = confirm('Ваш пол мужской?');
if (gender) {
gender = 'мужской';
} else {
gender = 'женский';
}

var pensioner;
if (gender == 'мужской' && age >= 63 || gender == 'женский' && age >= 58) {
pensioner = 'пенсионер'
} else {
pensioner = 'не пенсионер';
}

alert('Ваши ФИО: ' + lastName + ' ' + firstName + ' ' + patronymic + '\n' + 'Ваш возраст: ' + age + '\n' + 'Ваш возраст в днях: ' + (age * 365) + '\n' + 'Ваш возраст через 5 лет: ' + (Number(age) + 5) + '\n' + 'Ваш пол: ' + gender + '\n' + 'Вы ' + pensioner);