import data from "../data.json" assert {type: 'json'};

const executors = data.executors;

const defaultUser = {
    name: 'Неизвестный пользователь',
    imgSrc: './img/executor-photo/IvanVasilyev.jpg',
    workAmount: 0,
}

export const renderCart = (card) => {
    const executorData = executors?.find(elem => elem?.id === card?.executor) || defaultUser

    const cart = `
        <li class="cards__item-container">
            <div class="cards">
                <div class="cards__first-block">
                    <p class="first-block__info">
                        <span class="cards__primery-text">${card?.title}</span>
                        <span class="cards__secondary-text">${card?.price}₽</span>
                        <span class="cards__tertiary-text">${card?.date}</span>
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
                        <span class="cards__secondary-text">${card?.['date-change']}</span>
                    </p>
                </div>
                <div class="cards__third-block">
                    <div class="third-block__executor">
                        <span class="cards__tertiary-text">Исполнитель</span>
                        <div class="executor">
                            <div class="executor__img-container">
                                <img class ="executor-img" src=${executorData?.imgSrc} alt="Аватар исполнителя">
                            </div>
                            <a href="#" class="executor__link cards__tertiary-text">${executorData?.name}</a>                                                                </a>
                        </div>
                    </div>
                    <div class="third-block__change-card">
                        <div class="change-card__work">
                            <a href="#" class="change-card__link cards__tertiary-text">Дела</a>
                            <div class="change-card__work-bg">
                                <span class="change-card__work-amount">${executorData?.workAmount}</span>
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
    const container = document.getElementById(card?.category_id)
    const template = document.createElement('template');
    template.innerHTML = cart
    container.appendChild(template.content);
}