import data from "./data.json" assert {type: 'json'};

const applicationsCategory = data.category;
const applicationsCategoryContainer = document.querySelector(".applications-columns__list");

const applicationsTemplate = document.querySelector(".applications-columns__column-container");

const applications = data.applications;
const applicationsContainer = document.querySelector(".cards__list");

applicationsCategory.forEach((item => {
    const template = document.createElement("template");
    // const element = applicationsTemplate.cloneNode(true);

    // element.querySelector('.brief-info-title__cards-categor').textContent = category.name;

    // title.textContent = category.name;


    template.innerHTML = 
    `<li class="applications-columns__column-container">
        <div class="column-container">
            <div class="column-container__brief-info">
                <div class="brief-info-title">
                    <span class="brief-info-title__cards-category">Входящие</span>
                    <div class="brief-info-title__work-bg">
                        <span class="brief-info-title__work-amount">4</span>
                    </div>
                </div>
                <span class="brief-info__cards-price">0 ₽</span>
                <button class="brief-info__button" type="button">
                    <span class="brief-info__button-text">+</span>
                    <span class="brief-info__button-text">Быстрая сделка</span>
                </button>
            </div>
        </div>
    </li>`;

    applicationsCategoryContainer.appendChild(template.content)
}))




// <div class="column-container__cards">
//             <ul class="cards__list">
//                 <li class="cards__item-container">
//                     <div class="cards">
//                         <div class="cards__first-block">
//                             <p class="first-block__info">
//                                 <span class="cards__primery-text">Ошибка датчика КП-312</span>
//                                 <span class="cards__secondary-text">2 500 ₽</span>
//                                 <span class="cards__tertiary-text">21 января 2022</span>
//                             </p>
//                             <div class="first-block__contact">
//                                 <img src="./img/phone-icon.svg" alt="Иконка телефона" class="contact-img">
//                                 <img src="./img/email-icon.svg" alt="Иконка почты" class="contact-img">
//                                 <img src="./img/message-icon.svg" alt="Иконка сообщения" class="contact-img">
//                             </div>
//                         </div>
//                         <div class="cards__second-block">
//                             <p class="second-block__date-change">
//                                 <span class="cards__tertiary-text">Дата изменения</span>
//                                 <span class="cards__secondary-text">2 февраля 2022</span>
//                             </p>
//                         </div>
//                         <div class="cards__third-block">
//                             <div class="third-block__executor">
//                                 <span class="cards__tertiary-text">Исполнитель</span>
//                                 <div class="executor">
//                                     <div class="executor__img-container">
//                                         <img class ="executor-img" src="./img/user-avatar.jpg" alt="Аватар исполнителя">
//                                     </div>
//                                     <a href="#" class="executor__link cards__tertiary-text">Иван Васильев</a>                                                                </a>
//                                 </div>
//                             </div>
//                             <div class="third-block__change-card">
//                                 <div class="change-card__work">
//                                     <a href="#" class="change-card__link cards__tertiary-text">Дела</a>
//                                     <div class="change-card__work-bg">
//                                         <span class="change-card__work-amount">3</span>
//                                     </div>
//                                 </div>
//                                 <button class="change-card__button" type="button">
//                                     <span class="change-card__button-text">+</span>
//                                     <span class="change-card__button-text">Редактировать</span>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </li>
//             </ul>
//         </div>














