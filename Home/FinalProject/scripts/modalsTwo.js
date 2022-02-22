const buttonDiagnosticTwo = document.querySelector('.serviceBanner > .container > button');
const modalDiagnosticTwo = '<div class="bgModal"><div class="modalBlock"><button id="closeCross" onclick="clearModalDiagnosticTwo()"></button><h2>Запишитесь на диагностику<br>и получите оценку<br>стоимости и сроков ремонта</h2><p>Оставьте свой номер, менеджер свяжется с вами<br>в течение 5 минут, чтобы уточнить проблему.</p><span>Как с вами удобнее связаться?</span><br><form method="post" action="https://fe.it-academy.by/TestForm.php" name="datas" target="_blank"><input type="checkbox" name="social" id="Viber" value="Viber"><label for="Viber"></label><input type="checkbox" name="social" id="whatsApp" value="whatsApp"><label for="whatsApp"></label><input type="checkbox" name="social" id="Telegram" value="Telegram"><label for="Telegram"></label><input type="tel" name="phone" placeholder="+7 (___) __-__-__" required><br><button type="submit">Записаться</button><input type="checkbox" name="isAgree" id="isAgree" value="isAgree" required><label for="isAgree">Нажимая на кнопку, вы соглашаетесь<br>на обработку персональных данных<br>и <a href="docs/polit.pdf" target="_blank">политикой конфиденциальности</a></label></form></div></div>';
const localModalDiagnosticTwo = document.querySelector('.serviceBanner > .container > button + div');

buttonDiagnosticTwo.addEventListener('click', function() { 
    localModalDiagnosticTwo.innerHTML = modalDiagnosticTwo;
})

function clearModalDiagnosticTwo() {
    localModalDiagnosticTwo.removeChild(localModalDiagnosticTwo.firstChild);
}