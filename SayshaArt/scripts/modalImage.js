const gallery = document.querySelector('#projects>.projectItems');
const modalWindow = document.createElement('div'); 
  modalWindow.className = 'modal';
const leftButton = document.createElement('button'); 
  leftButton.className = 'leftButton';
const rightButton = document.createElement('button'); 
  rightButton.className = 'rightButton';
const galleryImages = document.createElement('div'); 
  galleryImages.className = 'galleryImages';
const closeButton = document.createElement('button');
  closeButton.className = 'closed';

let images = {
    '0': {
        'mini': 'img/miniIMG_3107.PNG',
        'medium': 'img/mediumIMG_3107.png',
        'large': 'img/IMG_3107.PNG'
    },
    '1': {
        'mini': 'img/miniIMG_3108.PNG',
        'medium': 'img/mediumIMG_3108.png',
        'large': 'img/IMG_3108.PNG'
    },  
    '2': {
        'mini': 'img/miniIMG_3109.PNG',
        'medium': 'img/mediumIMG_3109.png',
        'large': 'img/IMG_3109.PNG'
    },
    '3': {
        'mini': 'img/miniIMG_3110.PNG',
        'medium': 'img/mediumIMG_3110.png',
        'large': 'img/IMG_3110.PNG'
    },
    '4': {
        'mini': 'img/miniIMG_3111.jpg',
        'medium': 'img/mediumIMG_3111.jpg',
        'large': 'img/IMG_3111.JPG'
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

function onclickImg() {
  for (let i = 0; i < imageButton.length; i++) {
    imageButton[i].addEventListener('click', function renderModal() {
      let index = i;
      modalWindow.prepend(rightButton);
      modalWindow.prepend(galleryImages);
      modalWindow.prepend(leftButton);
      
      document.body.prepend(modalWindow);
      
      function renderMedium() {
        galleryImages.innerHTML = `<img src=${images[`${imageButton.length - 1 - i}`]['medium']}><a target="_black" href="${images[`${imageButton.length - 1 - i}`]['large']}" id="linkLarge">Открыть в полном размере</a>`;
      }
      
      function linkStyle(anim) {
        const linkButton = document.getElementById('linkLarge');
        const modalImage = document.querySelector('.modal>.galleryImages>img');
        modalImage.style.animation = `${anim} 0.15s`;
        linkButton.style.opacity = 0;
          setTimeout(() => {
            linkButton.style.width = modalImage.offsetWidth + 'px';
            linkButton.style.right = (modalWindow.offsetWidth / 2 - modalImage.offsetWidth / 2) +'px';
            linkButton.style.opacity = 0.7;
          }, 151); 
      }
      
      renderMedium();
      linkStyle('opened');
      
      function right() {
        const modalImageOut = document.querySelector('.modal>.galleryImages>img');
        modalImageOut.style.animation = `rightout 0.15s`;
        setTimeout(() => {
        if (i < imageButton.length - 1) {
        i++;
        } else {
          i = 0;
        }
        renderMedium();
        linkStyle('next');
        }, 120);
      }
      
      function left() {
      const modalImageOut = document.querySelector('.modal>.galleryImages>img');
      modalImageOut.style.animation = `leftout 0.15s`;
      setTimeout(() => {
        if (i > 0) {
        i--;
        } else {
          i = imageButton.length - 1;
        }
        renderMedium();
        linkStyle('prev');
      }, 120);
      }
      
      leftButton.addEventListener ('click', left)
      
      rightButton.addEventListener ('click', right)
      
      modalWindow.prepend(closeButton);
  
      closeButton.addEventListener('click', function() {
       modalWindow.remove();
       rightButton.removeEventListener ('click', right);
       leftButton.removeEventListener ('click', left);
       return i = index;
      });
   });
  }
  }
  
  onclickImg();