import data from "../data.json" assert {type: 'json'};
import { renderCategory } from "./category.js";

const applicationsCategory = data.category;

applicationsCategory.forEach((category) => {
    renderCategory(category)
})

const buttonDropdown = document.querySelector(".dropdown-button");
const dropdownMenu = document.querySelector(".dropdown-menu");

buttonDropdown.onclick = () => {    
    dropdownMenu.classList.toggle("dropdown-menu__active")
}


















































