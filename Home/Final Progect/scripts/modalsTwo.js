const buttonDiagnosticTwo = document.querySelector('.serviceBanner > .container > button');
const localModalDiagnosticTwo = document.querySelector('.serviceBanner > .container > button + div');

buttonDiagnosticTwo.addEventListener('click', function() { 
    localModalDiagnosticTwo.innerHTML = modalDiagnostic;
})

function clearModalDiagnostic() {
    localModalDiagnosticTwo.removeChild(localModalDiagnosticTwo.firstChild);
}