import { ingredients, potions, recipes } from "./data.js";
const containers = document.querySelectorAll(".potionContainer");
potions.forEach((potion, index) => {
    const container = containers[index];
    if (!container)
        return;
    container.textContent = potion.name;
});
containers.forEach((container, index) => {
    container.addEventListener("click", () => showPotion(index));
});
const recipeContainer = document.querySelector("#recipeContainer");
function showPotion(index) {
    const potion = potions[index];
    const recipe = recipes.find(r => r.result === potion?.id);
    if (!potion || !recipe || !recipeContainer)
        return;
    const recipeIngredients = recipe.ingredients.map(id => {
        const ingredient = ingredients.find(i => i.id === id);
        return `${ingredient?.name}(${ingredient?.element})`;
    });
    recipeContainer.textContent = recipeIngredients.join(", ");
}
