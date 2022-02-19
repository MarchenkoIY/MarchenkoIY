const buttonTest = document.querySelector('.bannerDrive > .container > button');
const modalTest = '<div class="bgModal"><div class="modalBlock"><button id="closeCross" onclick="clearModalTest()"></button><div class="lastPlace"><p>В сентябре <span>осталось 5 мест</span><br> на бесплатный тест-драйв</p></div><h2>Запишитесь<br>на тест-драйв<br>электросамоката</h2><p>и подберите модель для себя</p><p>Менеджер свяжется с вами в течение 5 минут,<br>чтобы согласовать время.</p><span>Как с вами удобнее связаться?</span><br><form method="post" action="https://fe.it-academy.by/TestForm.php" name="phone" target="_blank"><input type="checkbox" name="social" id="Viber" value="Viber"><label for="Viber"></label><input type="checkbox" name="social" id="whatsApp" value="whatsApp"><label for="whatsApp"></label><input type="checkbox" name="social" id="Telegram" value="Telegram"><label for="Telegram"></label><br><input type="tel" name="phone" placeholder="+7 (___) __-__-__" required><br><button type="submit">Оформить предзаказ</button><br><input type="checkbox" name="isAgree" id="isAgree" value="isAgree" required><label for="isAgree">Нажимая на кнопку, вы соглашаетесь<br>на обработку персональных данных<br>и <a href="docs/polit.pdf" target="_blank">политикой конфиденциальности</a></label></form></div></div>';
const localModalTest = document.querySelector('.bannerDrive > .container > button + div');

buttonTest.addEventListener('click', function() { 
    localModalTest.innerHTML = modalTest;
})

function clearModalTest() {
    localModalTest.removeChild(localModalTest.firstChild);
}
