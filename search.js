// define dictionary container
const cardholder = document.getElementById("cards");

fetch("recipes.json")
    .then(response => response.json())
    .then(terms => {
        // loop through each recipe element
        terms.forEach(entry => {
            // start loop
            const newCard = document.createElement("div");

            // setting the text content (recipe name and ingredients) - from db
            const titleText = document.createElement("h4");
            titleText.textContent = entry.name + ": ";
            const ingredients = document.createElement("p");
            ingredients.textContent = entry.include; // change this from include to ingredients later
            newCard.appendChild(titleText);
            newCard.appendChild(ingredients);

            cardholder.appendChild(newCard);
        });
    });
