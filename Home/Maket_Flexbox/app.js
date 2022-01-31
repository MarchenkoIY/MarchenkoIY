var card = [
    {
        imgUrl: "img/card1.jpg",
        title: "Шоу Мэй",
        titleSmall: "Черный чай",
        descr: "Очень легкий чай с тонким ароматом, имеет сладковатый вкус с легкой кислинкой.",
        weight: "100 гр.",
        price: "15 BYR",
        rating: 4.7
    },
    {
        imgUrl: "img/card2.jpg",
        title: "Юньнань Юнь",
        titleSmall: "Белый чай",
        descr: "Очень легкий чай с тонким ароматом, имеет сладковатый вкус с легкой кислинкой.",
        weight: "100 гр.",
        price: "20 BYR",
        rating: 4.5
    },
    {
        imgUrl: "img/card3.jpg",
        title: "Бай Му Дань",
        titleSmall: "Белый чай",
        descr: "Очень легкий чай с тонким ароматом, имеет сладковатый вкус с легкой кислинкой.",
        weight: "100 гр.",
        price: "15 BYR",
        rating: 4.6
    },
    {
        imgUrl: "img/card4.jpg",
        title: "Лушань Юнь",
        titleSmall: "Зеленый чай",
        descr: "Очень легкий чай с тонким ароматом, имеет сладковатый вкус с легкой кислинкой.",
        weight: "100 гр.",
        price: "25 BYR",
        rating: 5.0
    }
];

const cardWrap = document.getElementById('cardWrap');
var str = '';
for(let i = 0; i < card.length; i++) {
    str += `<div class="card">
        <div class="cardTop">
            <span>${card[i].rating}</span>
            <img src="img/Heart.svg" alt="Heart">
        </div>
        <div>
            <img src="${card[i].imgUrl}" alt="Шоу Мэй">
        </div>
        <h4>${card[i].title}</h4>
        <h5>${card[i].titleSmall}</h5>
        <p class="descr">${card[i].descr}</p>
        <p class="price">${card[i].weight} / <span>${card[i].price}</span></p>
        <button>В корзину</button>
    </div>`;
}

cardWrap.innerHTML = str;





const imgUrlInput = document.getElementById('imgUrl');
const titleInput = document.getElementById('title');
const titleSmallInput = document.getElementById('titleSmall');
const descrInput = document.getElementById('descr');
const weightInput = document.getElementById('weight');
const priceInput = document.getElementById('price');
const ratingInput = document.getElementById('rating');
const adminButton = document.getElementById('adminPanelButton');

function getData() {
    var obj = {};
    obj.imgUrl = imgUrlInput.value;
    obj.title = titleInput.value;
    obj.titleSmall = titleSmallInput.value;
    obj.descr = descrInput.value;
    obj.weight = weightInput.value;
    obj.price = priceInput.value;
    obj.rating = ratingInput.value;
    card.push(obj);
    render();
}

function render() {
    var str = '';
    for (let i = 0; i < card.length; i++) {
        str += `<div class="card">
        <div class="cardTop">
            <span>${card[i].rating}</span>
            <img src="img/Heart.svg" alt="Heart">
        </div>
        <div>
            <img src="${card[i].imgUrl}" alt="Шоу Мэй">
        </div>
        <h4>${card[i].title}</h4>
        <h5>${card[i].titleSmall}</h5>
        <p class="descr">${card[i].descr}</p>
        <p class="price">${card[i].weight} / <span>${card[i].price}</span></p>
        <button>В корзину</button>
    </div>`
    }
    cardWrap.innerHTML = str;
}


adminButton.addEventListener('click', getData);