const link = document.querySelectorAll('.navigation');

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener('click', function() {
    event.preventDefault();
    let href = link[i].getAttribute('href');
    const target = document.getElementById(href.slice(1));
    let targetTop = target.getBoundingClientRect().top;
    let topPos = 0;
    const step = 35;

    function scrollTop() {
     setTimeout(function() {
        if (targetTop > topPos) {		
        window.scrollBy(0, step);
        topPos += step;
        scrollTop();
    }
    }, 1)
    }
    
    scrollTop();
  });
}
