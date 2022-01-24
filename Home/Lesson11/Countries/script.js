var countries = {
    Belarus: 'Minsk',
    Russia: 'Moskow',
    China: 'Pekin',
    Poland: 'Warshawa',
    Lithuania: 'Vilnius',
    Usa: 'Vashington',
    France: 'Paris',
    }
    
    function capitalize(string) {
        let newString = '';
        for (var i = 1; i < string.length; i++) {
            newString += string[i].toLowerCase();
        }
        return string[0].toUpperCase() + newString;
    }
    
    function newCountry() {
        let nameCountry = capitalize(prompt('Введите название страны:'));
        if (!countries.hasOwnProperty(nameCountry)) {
        let nameCapital = capitalize(prompt('Введите название столицы:'));
        countries[nameCountry] = nameCapital;
        alert('Информация добавлена!');
    } else {
        alert('Такая страна уже есть в списке.')
    }
    }

    function getCapital() {
        let nameCountry = capitalize(prompt('Введите название страны:'));
        if (countries.hasOwnProperty(nameCountry)) {
        let elem = document.getElementById('countries');
        elem.innerText = 'Столица ' + nameCountry + ' - ' + countries[nameCountry];
    } else {
        let elem = document.getElementById('countries');
        elem.innerText = 'Нет информации о стране';
    }
    }

    function getAllCountries() {
        let myList = '';
        for (var key in countries) {
            myList += "Страна - " + key + ". Столица - " + countries[key] + ".\n";
        }
        let elem = document.getElementById('countries');
        elem.innerText = myList;
    }

    function deleteCountries() {
        let nameCountry = capitalize(prompt('Введите название страны:'));
        if (countries.hasOwnProperty(nameCountry)) {
            delete countries[nameCountry];
            alert(nameCountry + ' удалено');
        } else {
            alert('В списке нет такой страны');
        }
    }