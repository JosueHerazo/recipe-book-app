const API_KEY ="7f25e6d34af64779bd9021a8a1679bab "
const recipeListEl = document.getElementById("recipe-list")

function displayRecipes(recipes){
    recipeListEl.innerHTML = "";
    
    recipes.forEach((recipe) =>{
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");
        recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = "recipe image";

        recipeTitleEL = document.createElement("h2")
        recipeTitleEL.innerText = recipe.title;

        recipeLinkEl = document.createElement("a")
        recipeLinkEl.href = recipe.sourceUrl;
        recipeLinkEl.innerText = "View Recipe"
        recipeLinkEl.target = "_blank"

        recipeIngredientsEl = document.createElement("p")
        recipeIngredientsEl.innerHTML = `<strong>Ingredients:</strong>${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(", ")}`

        recipeItemEl.appendChild(recipeImageEl)
        recipeItemEl.appendChild(recipeTitleEL)
        recipeItemEl.appendChild(recipeIngredientsEl)
        recipeItemEl.appendChild(recipeLinkEl)
        recipeListEl.appendChild(recipeItemEl)
        
    })
}

async function getRecipes(){
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)

    const data = await response.json()
    console.log(data);

    return data.recipes
}


async function Init(){
    const recipes = await getRecipes()

    displayRecipes(recipes)
}

Init()