import data from "../data.json" assert {type: 'json'};
import { renderCards } from "./card.js";

const applicationsCards = data.applications;

export const renderCategory = (category) => {
    const template = document.createElement("template");
    template.innerHTML = `
        <li class="applications-columns__column-container">
            <div class="column-container">
                <div class="column-container__brief-info">
                    <div class="brief-info-title">
                        <span class="brief-info-title__cards-category">${category?.name}</span>
                        <div class="brief-info-title__work-bg">
                            <span class="brief-info-title__work-amount">${category?.workAmount || 0}</span>
                        </div>
                    </div>
                    <span class="brief-info__cards-price">${category?.totalPrice || 0} ₽</span>
                    <button class="brief-info__button" type="button">
                        <span class="brief-info__button-text">+</span>
                        <span class="brief-info__button-text">Быстрая сделка</span>
                    </button>
                </div>
                <div class="column-container__cards">
                    <ul class="cards__list" id=${category?.id}></ul>
                </div>
            </div>
        </li>
    `
    const container = document.querySelector(".applications-columns__list");
    container.appendChild(template.content);

    const cards = applicationsCards.filter( card => card?.category_id === category?.id )
    cards.forEach(card => {
        renderCards(card)
    })
}

