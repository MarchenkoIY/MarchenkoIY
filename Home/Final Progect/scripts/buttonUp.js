const topButton = document.getElementById('button');
      
    topButton.addEventListener('click', function smoothScroll() {
        setTimeout(function() {
          if (window.pageYOffset > 0) {
            window.scrollBy(0, -100);
            smoothScroll();
          }
        }, 2);
    })
      
  function goToUpButton() {
    if (window.pageYOffset < 500) {
      topButton.style.transform = "translateX(-1000%) rotate(0)";
    } else {
      topButton.style.transform = "translateX(0) rotate(450deg)";
      topButton.style.opacity = "1";
    }
  }
      
  setInterval(goToUpButton, 100);
      