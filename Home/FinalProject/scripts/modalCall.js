const buttonCall = document.querySelector('.header > .header-top > ul:first-of-type > li:last-of-type > a');
const modalCall = '<div class="bgModal"><div class="modalBlock"><button id="closeCross" onclick="clearModalCall()"></button><h2>Оставьте заявку и получите<br>профессиональную<br>консультациюот<br>нашего менеджера</h2><p>Позвоним в течение 5 минут и ответим на все вопросы.</p><span>Как с вами удобнее связаться?</span><br><form method="post" action="https://fe.it-academy.by/TestForm.php" name="phone" target="_blank"><input type="checkbox" name="social" id="Viber" value="Viber"><label for="Viber"></label><input type="checkbox" name="social" id="whatsApp" value="whatsApp"><label for="whatsApp"></label><input type="checkbox" name="social" id="Telegram" value="Telegram"><label for="Telegram"></label><br><input type="tel" name="phone" placeholder="+7 (___) __-__-__" required><br><button type="submit">Позвоните мне</button><br><input type="checkbox" name="isAgree" id="isAgree" value="isAgree" required><label for="isAgree">Нажимая на кнопку, вы соглашаетесь<br>на обработку персональных данных<br>и <a href="docs/polit.pdf" target="_blank">политикой конфиденциальности</a></label></form></div></div>';
const localModalCall = document.querySelector('.header > .header-top > ul:first-of-type > li:last-of-type > div');

buttonCall.addEventListener('click', function() { 
    localModalCall.innerHTML = modalCall;
})

function clearModalCall() {
    localModalCall.removeChild(localModalCall.firstChild);
}
