export const renderCards = (cards) => {
    const template = document.createElement("template");
    template.innerHTML = `
        <li class="cards__item-container">
            <div class="cards">
                <div class="cards__first-block">
                    <p class="first-block__info">
                        <span class="cards__primery-text">Ошибка датчика КП-312</span>
                        <span class="cards__secondary-text">2 500 ₽</span>
                        <span class="cards__tertiary-text">21 января 2022</span>
                    </p>
                    <div class="first-block__contact">
                        <img src="./img/phone-icon.svg" alt="Иконка телефона" class="contact-img">
                        <img src="./img/email-icon.svg" alt="Иконка почты" class="contact-img">
                        <img src="./img/message-icon.svg" alt="Иконка сообщения" class="contact-img">
                    </div>
                </div>
                <div class="cards__second-block">
                    <p class="second-block__date-change">
                        <span class="cards__tertiary-text">Дата изменения</span>
                        <span class="cards__secondary-text">2 февраля 2022</span>
                    </p>
                </div>
                <div class="cards__third-block">
                    <div class="third-block__executor">
                        <span class="cards__tertiary-text">Исполнитель</span>
                        <div class="executor">
                            <div class="executor__img-container">
                                <img class ="executor-img" src="./img/user-avatar.jpg" alt="Аватар исполнителя">
                            </div>
                            <a href="#" class="executor__link cards__tertiary-text">Иван Васильев</a>                                                                </a>
                        </div>
                    </div>
                    <div class="third-block__change-card">
                        <div class="change-card__work">
                            <a href="#" class="change-card__link cards__tertiary-text">Дела</a>
                            <div class="change-card__work-bg">
                                <span class="change-card__work-amount">3</span>
                            </div>
                        </div>
                        <button class="change-card__button" type="button">
                            <span class="change-card__button-text">+</span>
                            <span class="change-card__button-text">Редактировать</span>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    `

    const container = document.getElementById(cards?.category_id)
    container.appendChild(template.content)
}
