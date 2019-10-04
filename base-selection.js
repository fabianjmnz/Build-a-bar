var drinks = [];

function getDrinks(keyword) {
    document.getElementById("base-selection").style.display = "none";
    $.ajax({
        async: true,
        crossDomain: true,
        url: `https://the-cocktail-db.p.rapidapi.com/filter.php?i=${keyword}`,
        type: "GET",
        headers: {
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "9bf6704c1dmsh4f7f1713cf03085p1c5d4cjsnfc7191c40e95"
        }
    }).then(function(response) {
        var allDrinks = [];
        var drinkLength = response.drinks.length;
        for (let j = 0; j < drinkLength; j++) {
            var drink = response.drinks[j];
            allDrinks.push({
                id: drink.idDrink,
                name: drink.strDrink,
                pic: drink.strDrinkThumb
            })
        }
        drinks = allDrinks;
        return drinks;
    }).then(function(drinks) {
        $.each(drinks,function(a,value) {
          // need to get updated code from Steven //
            // console.log(value["name"])
            // $("#").append(value["name"]) $("#").append(`<img src=  ${value["pic"]} height="100px" width="100px">`);
            // console.log(a)
        });
    });
}