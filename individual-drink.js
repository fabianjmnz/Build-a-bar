// Add back button

var drink = {
  idDrink: "11112",
  strDrink: "Bloody Maria",
  strDrinkAlternate: null,
  strDrinkES: null,
  strDrinkDE: null,
  strDrinkFR: null,
  "strDrinkZH-HANS": null,
  "strDrinkZH-HANT": null,
  strTags: "Breakfast,Brunch,Hangover",
  strVideo: null,
  strCategory: "Ordinary Drink",
  strIBA: null,
  strAlcoholic: "Alcoholic",
  strGlass: "Old-fashioned glass",
  strInstructions:
  "Shake all ingredients (except lemon slice) with cracked ice and strain into an old-fashioned glass over ice cubes. Add the slice of lemon and serve.",
  strInstructionsES: null,
  strInstructionsDE:
  "Alle Zutaten (au\u00dfer Zitronenscheibe) mit zerkleinertem Eis sch\u00fctteln und \u00fcber Eisw\u00fcrfel in ein old-fashioned Glas seihen. Die Zitronenscheibe dazugeben und servieren.",
  strInstructionsFR: null,
  "strInstructionsZH-HANS": null,
  "strInstructionsZH-HANT": null,
  strDrinkThumb:
  "https://www.thecocktaildb.com/images/media/drink/yz0j6z1504389461.jpg",
  ingredients: [
    { name: "Tequila", measurement: "1 oz", calories: 100 },
    { name: "Tomato juice", measurement: "2 oz", calories: 100 },
    { name: "Lemon juice", measurement: "1 dash", calories: 100 },
    { name: "Tabasco sauce", measurement: "1 dash", calories: 100 },
    { name: "Celery salt", measurement: "1 dash", calories: 100 },
    { name: "Lemon", measurement: "1 slice", calories: 100 }
  ],
};

drink.ingredients.forEach(ingredient => {
    list = document.createElement('li')
    list.innerHTML = ingredient.measurement + ' ' + ingredient.name;
    document.getElementById('drinkIngredients').appendChild(list);
  })
  // list.innerHTML = ingredient.measurement + ' ' + ingredient.name + ' ' + ingredient.calories + 'cal';

function createDrinkElement() {
  document.getElementById('drinkName').innerHTML = drink.strDrink;
  document.getElementById('drinkInstructions').innerHTML = drink.strInstructions;
  // drink.setAttribute('class');
}

createDrinkElement()