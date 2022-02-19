const buttonService = document.querySelector('.banner > .container > button');
const modalService = '<div class="bgModal"><div class="modalBlockService"><button id="closeCross" onclick="clearModal()"></button><h2>Запишитесь<br>в сервисный центр</h2><h6>и получите профессионалное<br>обслуживание от специалистов Kugoo-Russia</h6><p>Заполните форму, и менеджер свяжется с вами<br>в течение 5 минут, чтобы уточнить детали</p><form method="post" action="https://fe.it-academy.by/TestForm.php" name="forService" target="_blank"><select name="city" required><option value="yourCity" selected disabled>Выберите свой город</option><option value="Moscow">Москва</option><option value="SPeterburg">Санкт-Петербург</option><option value="Krasnodar">Краснодар</option></select><br><span>Как с вами удобнее связаться?</span><br><input type="checkbox" name="social" id="Viber" value="Viber"><label for="Viber"></label><input type="checkbox" name="social" id="whatsApp" value="whatsApp"><label for="whatsApp"></label><input type="checkbox" name="social" id="Telegram" value="Telegram"><label for="Telegram"></label><br><input type="tel" name="phone" placeholder="+7 (___) __-__-__" required><br><button type="submit">Записаться</button><br><input type="checkbox" name="isAgree" id="isAgree" value="isAgree" required><label for="isAgree">Нажимая на кнопку, вы соглашаетесь<br>на обработку персональных данных<br>и <a>политикой конфиденциальности</a></label></form></div></div>';
const localModalService = document.querySelector('.banner>.container button + div');

buttonService.addEventListener('click', function() { 
    localModalService.innerHTML = modalService;
})

function clearModal() {
    localModalService.removeChild(localModalService.firstChild);
}