//setup
const recipe = {
    name: "text",
    include: true
};

const initialArray = [{name: "3 sisters tacos", include: true}, {name: "7 Spice soup", include: true}, {name: "Baked chicken", include: true}, {name: "Beef + broccoli", include: true}, {name: "Beef kofta", include: true}, {name: "Beef pasta", include: true}, {name: "Beef stew", include: true}, {name: "Black bean enchiladas", include: true}, {name: "Blade steaks", include: true}, {name: "Boiled Dinner", include: true}, {name: "Braised beef", include: true}, {name: "Butter chicken", include: true}, {name: "Butter chickpeas", include: true}, {name: "Buttermilk chicken", include: true}, {name: "Butternut squash pasta", include: true}, {name: "Caesar Salad", include: true}, {name: "Caribbean beef tacos", include: true}, {name: "Carrot ginger soup", include: true}, {name: "Chef's plate burgers", include: true}, {name: "Chef's plate chicken curry", include: true}, {name: "Chef's plate mid-east chicken rice", include: true}, {name: "Chicken + ribs", include: true}, {name: "Chicken alfredo", include: true}, {name: "Chicken broccoli casserole", include: true}, {name: "Chicken caesar pitas", include: true}, {name: "Chicken noodle soup", include: true}, {name: "Chicken parm", include: true}, {name: "Chicken quesadillas", include: true}, {name: "Chicken stirfry", include: true}, {name: "Chicken tacos", include: true}, {name: "Chicken wings", include: true}, {name: "Chili", include: true}, {name: "Chimichangas", include: true}, {name: "Creamy chicken salad", include: true}, {name: "Donairs", include: true}, {name: "Egg curry", include: true}, {name: "Fajitas", include: true}, {name: "Falafel wraps", include: true}, {name: "Fiesta potatoes", include: true}, {name: "Fish", include: true}, {name: "French onion soup", include: true}, {name: "Frittatas", include: true}, {name: "Fruit chicken salad", include: true}, {name: "Fusilli", include: true}, {name: "Garlic chicken rice", include: true}, {name: "Greek salad falafel wraps", include: true}, {name: "Grilled cheese", include: true}, {name: "Gumbo", include: true}, {name: "Ham", include: true}, {name: "Hamburger casserole", include: true}, {name: "Hamburgers", include: true}, {name: "Heritage soup", include: true}, {name: "Homemade sub", include: true}, {name: "Lasagna", include: true}, {name: "Lemon chicken", include: true}, {name: "Lentil soup", include: true}, {name: "Lobster", include: true}, {name: "Mango tofu", include: true}, {name: "Meatballs", include: true}, {name: "Meatballs and broccoli", include: true}, {name: "Meatloaf", include: true}, {name: "Minestrone soup", include: true}, {name: "Moroccan shrimp", include: true}, {name: "Mushroom bourginon", include: true}, {name: "Mushroom chicken", include: true}, {name: "Mussels", include: true}, {name: "Naanwiches", include: true}, {name: "Nachos", include: true}, {name: "Pancakes", include: true}, {name: "Peach chicken", include: true}, {name: "Pizza", include: true}, {name: "Poke bowls", include: true}, {name: "Portobello tacos", include: true}, {name: "Quiche", include: true}, {name: "Ribs", include: true}, {name: "Roast beef", include: true}, {name: "Roast chicken", include: true}, {name: "Salmon", include: true}, {name: "Salmon salad", include: true}, {name: "Sausage pasta", include: true}, {name: "Sausages", include: true}, {name: "Shepherd's pie", include: true}, {name: "Shrimp alfredo", include: true}, {name: "Shrimp avocado tacos", include: true}, {name: "Shrimp pizza", include: true}, {name: "Shrimp roll", include: true}, {name: "Shrimp scampi", include: true}, {name: "Sloppy jacks", include: true}, {name: "Sloppy joes", include: true}, {name: "Spaghetti", include: true}, {name: "Spaghetti squash alfredo", include: true}, {name: "Spanish chicken", include: true}, {name: "Split pea + ham soup", include: true}, {name: "Squash soup", include: true}, {name: "Steak", include: true}, {name: "Stuffed chicken", include: true}, {name: "Stuffed meatloaf", include: true}, {name: "Subs", include: true}, {name: "Sweet and sour tofu", include: true}, {name: "Sweet potato chili", include: true}, {name: "Sweet potato curry", include: true}, {name: "Sweet potato enchiladas", include: true}, {name: "Sweet+Sour meatballs", include: true}, {name: "Taco salad", include: true}, {name: "Tacos", include: true}, {name: "Tomato basil pasta", include: true}, {name: "Tomato pasta", include: true}, {name: "Tomato soup", include: true}, {name: "Tortellini", include: true}, {name: "Trout tacos", include: true}, {name: "Turkey burgers", include: true}, {name: "Turkey dinner", include: true}, {name: "Turkey soup", include: true}, {name: "Tuscan chicken", include: true}, {name: "Udon noodles", include: true}, {name: "Vegan tomato pasta", include: true}, {name: "Veggie balls", include: true}, {name: "Warrior burgers", include: true}, {name: "Zucchini casserole", include: true}];
const divToEdit = document.getElementById("recipe-checkboxes");

//setup of the list of recipes
for (let i = 0; i < initialArray.length; i++){
    let boxId = `checkbox${i}`;

    //create checkbox
    let box = document.createElement("input");
    box.setAttribute("id", boxId);
    box.setAttribute("type", "checkbox");
    box.setAttribute("checked", true); //this is the attribute to check if the box has been selected or not

    //add value to checkbox
    let boxValue = document.createElement("value");
    boxValue.setAttribute("for", boxId)
    boxValue.textContent = initialArray[i].name;

    //append both in that order to a new div
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "recipe-with-box");

    newDiv.appendChild(box);
    newDiv.appendChild(boxValue);

    //append div to the document
    divToEdit.appendChild(newDiv);
};

//function to generate and display recipe
const generateBtn = document.getElementById("random-generator");
const displayRecipe = document.getElementById("result");

generateBtn.addEventListener("click", () => {
    let customArray = [];
    let customArrayCount = 0;

    for (let i = 0; i < initialArray.length; i++){
        initialArray[i].include = document.getElementById(`checkbox${i}`).checked;
        if (initialArray[i].include){
            customArray[customArrayCount] = initialArray[i];
            customArrayCount++;
        }
    };

    let index = Math.floor(Math.random()*customArray.length);
    displayRecipe.textContent = customArray[index].name;
});