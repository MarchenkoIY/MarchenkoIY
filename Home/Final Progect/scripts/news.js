const newsItem = document.querySelectorAll('.news>.newsItems>.newsItem');
const newsButton = document.querySelector('.news>.newsItems>button');
let numberDiv = 0;
let widthDiv = newsItem[0].offsetWidth;

function caruseleNews() {
    if (numberDiv < newsItem.length - 1) {
        let widthDiv = newsItem[0].offsetWidth;
        newsItem[0].style.marginLeft = `-${(widthDiv + 30) * (numberDiv + 1)}px`;
        return numberDiv++;
    } else {
        for (var i = newsItem.length - 1; i >= 0; i--) {
            newsItem[i].style.marginLeft = '0';
        }
        return numberDiv = 0;
    }
}

newsButton.addEventListener('click', caruseleNews);