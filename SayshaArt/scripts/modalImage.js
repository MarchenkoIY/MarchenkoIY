const gallery = document.querySelector('#projects>.projectItems');

let images = {
    '0': {
        'mini': 'img/miniIMG_3107.PNG',
        'medium': 'img/mediumIMG_3107.PNG',
        'large': 'img/IMG_3107.PNG'
    },
    '1': {
        'mini': 'img/miniIMG_3108.PNG',
        'medium': 'img/mediumIMG_3108.PNG',
        'large': 'img/IMG_3108.PNG'
    },  
    '2': {
        'mini': 'img/miniIMG_3109.PNG',
        'medium': 'img/mediumIMG_3109.PNG',
        'large': 'img/IMG_3109.PNG'
    },
    '3': {
        'mini': 'img/miniIMG_3110.PNG',
        'medium': 'img/mediumIMG_3110.PNG',
        'large': 'img/IMG_3110.PNG'
    },
    '4': {
        'mini': 'img/miniIMG_3111.jpg',
        'medium': 'img/mediumIMG_3111.jpg',
        'large': 'img/IMG_3111.jpg'
    }
}

function render() {
  for (let key in images) {
    let innerImg = document.createElement('img');
    innerImg.src = `${images[key]['mini']}`;
    gallery.prepend(innerImg); 
  }
}
render();

const imageButton = document.querySelectorAll('#projects>.projectItems>img');

for (let i = 0; i < imageButton.length; i++) {
  imageButton[i].addEventListener('click', function() {
    let modalWindow = document.createElement('div'); 
    modalWindow.className = 'modal';
    modalWindow.innerHTML = `<img src=${images[`${imageButton.length - 1 - i}`]['medium']}><button class='closed'></button><a target="_blank" href="${images[`${imageButton.length - 1 - i}`]['large']}">Открыть в полном размере</a>`;  
    document.body.prepend(modalWindow);
    
    const linkButton = document.querySelector('.modal>a');
    const modalImage = document.querySelector('.modal>img');
    linkButton.style.opacity = 0;
    setTimeout(() => {
      linkButton.style.width = modalImage.offsetWidth + 'px';
      linkButton.style.right = (modalWindow.offsetWidth / 2 - modalImage.offsetWidth / 2) +'px';
      linkButton.style.opacity = 0.7;
    }, 151);  
   
    
    const closeButton = document.querySelector('.modal>button.closed');

closeButton.addEventListener('click', function() {
 modalWindow.remove();
});
  });
}