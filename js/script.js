import data from "../data.json" assert {type: 'json'};

const applicationsCategory = data.category;
const applicationsCategoryTemplate = document.getElementById("applications-category__item");
const applicationsCategoryContainer = document.querySelector(".applications-columns__list");

const applicationsCards = data.applications;
const applicationsCardsTemplate = document.getElementById("applications-cards");
const applicationsCardsContainer = document.querySelector(".cards__list");


applicationsCategory.forEach(item => {
    const element = applicationsCategoryTemplate.content.cloneNode(true);

    element.querySelector(".brief-info-title__cards-category").textContent = item.name;
        
    applicationsCategoryContainer.appendChild(element)
})


applicationsCards.forEach(item => {
    const element = applicationsCardsTemplate.content.cloneNode(true);

    applicationsCardsContainer.appendChild(element)
})














































