const divsForSlide = document.querySelectorAll('.videoContent>.iframes>div');
let numberDivWithScale = 0;
let widthOfDiv = divsForSlide[0].offsetWidth;

function scaleDivs(numberDivWithScale) {
  if (numberDivWithScale < divsForSlide.length - 1 && numberDivWithScale > 1) {
    divsForSlide[numberDivWithScale - 2].style.transform = "scale(1)";
    divsForSlide[numberDivWithScale - 1].style.transform = "scale(1.2)";
    divsForSlide[numberDivWithScale + 1].style.transform = "scale(1.2)";
    divsForSlide[numberDivWithScale].style.transform = "scale(1.5)";
    divsForSlide[numberDivWithScale].style.zIndex = "2";
    divsForSlide[numberDivWithScale + 1].style.zIndex = "1";
    divsForSlide[numberDivWithScale - 1].style.zIndex = "0";
} else if (numberDivWithScale < divsForSlide.length - 1 && numberDivWithScale > 0) {
    divsForSlide[numberDivWithScale - 1].style.transform = "scale(1.2)";
    divsForSlide[numberDivWithScale + 1].style.transform = "scale(1.2)";
    divsForSlide[numberDivWithScale].style.transform = "scale(1.5)";
    divsForSlide[numberDivWithScale].style.zIndex = "2";
    divsForSlide[numberDivWithScale + 1].style.zIndex = "1";
    divsForSlide[numberDivWithScale - 1].style.zIndex = "0";
} else if (numberDivWithScale < divsForSlide.length - 1 && numberDivWithScale == 0) {
    divsForSlide[numberDivWithScale + 1].style.transform = "scale(1.2)";
    divsForSlide[numberDivWithScale].style.transform = "scale(1.5)";
    divsForSlide[divsForSlide.length - 1].style.transform = "scale(1)";
    divsForSlide[divsForSlide.length - 2].style.transform = "scale(1)";
    divsForSlide[divsForSlide.length - 1].style.zIndex = "0";
    divsForSlide[numberDivWithScale].style.zIndex = "2";
    divsForSlide[numberDivWithScale + 1].style.zIndex = "1";
} else if (numberDivWithScale == divsForSlide.length - 1) {
    divsForSlide[numberDivWithScale - 2].style.transform = "scale(1)";
    divsForSlide[numberDivWithScale].style.transform = "scale(1.5)";
    divsForSlide[numberDivWithScale - 1].style.transform = "scale(1.2)";
    divsForSlide[numberDivWithScale].style.zIndex = "1";
    divsForSlide[numberDivWithScale - 1].style.zIndex = "0";
}
}

function caruseleWithScale() {
        if (numberDivWithScale < divsForSlide.length - 1) {
            divsForSlide[0].style.marginLeft = `-${(widthOfDiv + 30) * (numberDivWithScale + 1)}px`;
            return numberDivWithScale++;
        } else {
            for (var i = divsForSlide.length - 1; i >= 0; i--) {
                divsForSlide[i].style.marginLeft = '0';
            }
            return numberDivWithScale = 0;
        }
}

scaleDivs(0);