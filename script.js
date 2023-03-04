import data from "./data.json" assert {type: 'json'};
import { renderCategoryColumn } from './category/category.js'

const applicationsCategory = data.category;

applicationsCategory.forEach(category => {
    renderCategoryColumn(category)
})







































