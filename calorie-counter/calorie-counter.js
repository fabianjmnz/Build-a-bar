fetch("https://cors-anywhere.herokuapp.com/https://api.nal.usda.gov/fdc/v1/search/?format=json&api_key=mbbkM6I4nJSNVXOqPHUbgMYB0atUH3o6bd1FkKmB",{
    method: "POST",
    headers: {
        Origin: "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify({"generalSearchInput": "apple"})
})
.then(response => response.json(
))
.then(body => {
    console.log(body)
    var fdcId = body.foods[0].fdcId
    console.log(fdcId)
    fetch("https://cors-anywhere.herokuapp.com/https://mbbkM6I4nJSNVXOqPHUbgMYB0atUH3o6bd1FkKmB@api.nal.usda.gov/fdc/v1/" + fdcId + "?api_key=mbbkM6I4nJSNVXOqPHUbgMYB0atUH3o6bd1FkKmB", {
        headers: {
            Origin: "application/json",
            "Content-Type": "application/json"
    }})
.then(response => response.json())
.then(foodData => {
    var calories = foodData.labelNutrients.calories.value
    console.log(calories)
})})