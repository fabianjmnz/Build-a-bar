​
for (i=11000;i<=17825;i++){
	
​
var settings = {
	async: true,
	crossDomain: true,
	url: "https://the-cocktail-db.p.rapidapi.com/lookup.php?i="+i,
	type: "GET",
	headers: {
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		"x-rapidapi-key": "9bf6704c1dmsh4f7f1713cf03085p1c5d4cjsnfc7191c40e95"
	}
}
​
​
$.ajax(settings).done(function(response){
	if (response.drinks != null){
		var drink = response.drinks[0];
	//	if(drink.strIngredient1 == "Rum"){
			console.log(drink.strDrink);
	//		showDrink(drink.strDrink,drink.strIngredient1,
	//			drink.strIngredient2,drink.strIngredient3,
	//			drink.strIngredient4,drink.strIngredient5);
	//	}
		//console.log(drink.strDrink);
		}
​
	
	
});
​
function showDrink(name,firstingr,secondingr,
	thirdingr,fourthingr,fifthingr){
//	var naming = $("<h1>").text(name);
//	$("body").append(naming);
	var first = $("<h3>").text(firstingr);
	$("body").append(first);
//	var second = $("<h4>").text(secondingr);
//	$("body").append(second);
//	var third = $("<h4>").text(thirdingr);
//	$("body").append(third);
//	var fourth = $("<h5>").text(fourthingr);
//	$("body").append(fourth);
//	var fifth = $("<h4>").text(fifthingr);
//	$("body").append(fifth);
}
}