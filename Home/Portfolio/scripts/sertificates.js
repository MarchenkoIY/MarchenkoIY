const sertLink = document.querySelectorAll('.showModal');
const modal = document.createElement('div');
modal.className = 'modal';

for (let element of sertLink) {
    element.addEventListener('click', function() {
        document.body.prepend(modal);
        let link = '';
        if (element.classList.contains('freeCodeCampHTML')) {
            link = 'https://freecodecamp.org/certification/marchenkoiy/responsive-web-design';
        } else if (element.classList.contains('ITAcademyHTML')) {
            link = 'IharMarchanka.pdf';
        } else if (element.classList.contains('StepikJS')) {
            link = 'https://stepik.org/cert/1302316';
        } else if (element.classList.contains('IntuitJS')) {
            link = 'https://intuit.ru/verifydiplomas/101465992';
        }
        modal.innerHTML = `<button id="closeModal"></button><iframe src=${link}></iframe>`;
        const close = document.getElementById('closeModal');
        close.addEventListener('click', function() {
            modal.remove();
        });
    })
}