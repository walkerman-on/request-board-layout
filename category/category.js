import data from "../data.json" assert {type: 'json'};

import { renderCart } from '../card/card.js'

const applicationsCategoryContainer = document.querySelector(".applications-columns__list");
const applicationsCards = data.applications;

export const renderCategoryColumn = (category) => {
    const categoryColumn = `
        <li class="applications-columns__column-container">
            <div class="column-container">
                <div class="column-container__brief-info">
                    <div class="brief-info-title">
                        <span class="brief-info-title__cards-category">${category?.name}</span>
                        <div class="brief-info-title__work-bg">
                            <span class="brief-info-title__work-amount">${category?.amount || 4}</span>
                        </div>
                    </div>
                    <span class="brief-info__cards-price">${category?.price || 0}₽</span>
                    <button class="brief-info__button" type="button">
                        <span class="brief-info__button-text">+</span>
                        <span class="brief-info__button-text">Быстрая сделка</span>
                    </button>
                </div>
                <div class="column-container__cards">
                    <ul class="cards__list" id=${category?.id}>
                    </ul>
                </div>
            </div>
        </li>
    `
    const template = document.createElement('template');
    template.innerHTML = categoryColumn
    applicationsCategoryContainer.appendChild(template.content);

    const cards = applicationsCards.filter(card => card?.category_id === category?.id)
    cards.forEach(card => {
        renderCart(card)
    })
}