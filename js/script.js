import data from "../data.json" assert {type: 'json'};
import { renderCategory } from "./category.js"

const applicationsCategory = data.category;
const applicationsCards = data.applications;

applicationsCategory.forEach( (category) => {
    renderCategory(category)
})

















































