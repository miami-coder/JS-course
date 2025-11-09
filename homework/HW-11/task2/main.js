const recipesDiv = document.getElementById('recipes');

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(data => {
        const { recipes } = data;

        for (const recipe of recipes) {

            const div = document.createElement('div');
            div.classList.add('recipe-container');

            const title = document.createElement('h2');
            title.innerText = recipe.name;

            const img = document.createElement('img');
            img.src = recipe.image;
            img.style.width = '300px';

            const info = document.createElement('p');
            info.innerText = `
                "id": ${recipe.id},
                "name": ${recipe.name},
                "cuisine": ${recipe.cuisine},
                "difficulty": ${recipe.difficulty},
                "servings": ${recipe.servings},
                "prepTimeMinutes": ${recipe.prepTimeMinutes},
                "cookTimeMinutes": ${recipe.cookTimeMinutes},
                "caloriesPerServing": ${recipe.caloriesPerServing},
                "rating": ${recipe.rating},
                "reviewCount": ${recipe.reviewCount}
            `;

            const ingredientsTitle = document.createElement('h4');
            ingredientsTitle.innerText = '"ingredients":';
            const ingredientsList = document.createElement('ul');
            for (const ing of recipe.ingredients) {
                const li = document.createElement('li');
                li.innerText = ing;
                ingredientsList.appendChild(li);
            }

            const instructionsTitle = document.createElement('h4');
            instructionsTitle.innerText = '"instructions":';
            const instructionsList = document.createElement('ol');
            for (const step of recipe.instructions) {
                const li = document.createElement('li');
                li.innerText = step;
                instructionsList.appendChild(li);
            }

            div.append(title, img, info, ingredientsTitle, ingredientsList, instructionsTitle, instructionsList);
            recipesDiv.appendChild(div);
        }
    });
