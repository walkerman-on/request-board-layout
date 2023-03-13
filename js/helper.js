// функция для форматирования даты с backend
export const formattedDate = (date) => {
    return new Date(date).toLocaleDateString("ru-Ru", {month: "long", day: "numeric", year: "numeric"})
}