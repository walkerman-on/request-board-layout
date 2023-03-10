import data from "../data.json" assert {type: 'json'};
import { renderCategory } from "./category.js";

const applicationsCategory = data.category;

applicationsCategory.forEach((category) => {
    renderCategory(category)
})


















































