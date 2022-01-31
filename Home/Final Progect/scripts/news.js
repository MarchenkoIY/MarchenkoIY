const newsItem = document.querySelectorAll('.news>.newsItems>.newsItem');
const newsButton = document.querySelector('.news>.newsItems>button');
let numberDiv = 0;
const widthDiv = newsItem[numberDiv].offsetWidth;

function caruseleNews() {
    if (numberDiv < newsItem.length) {
        newsItem[numberDiv].style.marginLeft = `-${widthDiv}px`;
        return numberDiv++;
    } else {
        for (var i = newsItem.length - 1; i >= 0; i--) {
            newsItem[i].style.marginLeft = '0';
        }
        return numberDiv = 0;
    }
}

newsButton.addEventListener('click', caruseleNews);