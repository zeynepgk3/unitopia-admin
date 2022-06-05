const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const mealId = urlParams.get('mealId');
const meal_api_url = 'http://localhost:3001/meals/getOne/' + mealId;

async function getSingleMeal() {
    const response = await fetch(meal_api_url);
    const data = await response.json();
    const {
        date,
        meals,
    } = data;

    document.getElementById("meal-date").textContent = date;
    document.getElementById("meals").textContent = meals;
}

getSingleMeal();