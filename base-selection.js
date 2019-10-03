//////////////TEQUILA DRINKS////////////////////

function tequilaResults(){
    var settings = 
    {
        async: true,
        crossDomain: true,
        url: "https://the-cocktail-db.p.rapidapi.com/filter.php?i=Tequila",
        type: "GET",
        headers: 
        {
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "9bf6704c1dmsh4f7f1713cf03085p1c5d4cjsnfc7191c40e95"
        }
    }
    $.ajax(settings).done(function(response)
    {  
        var num = response.drinks; //The number of drinks within the liquor
        //console.log(response)
        let drink = new Object();
        var allDrink = [];
        for (let j=0;j<num.length;j++)
        { 
            drink= {
                [j]:response.drinks[j].idDrink,"Name":response.drinks[j].strDrink,"Pic":response.drinks[j].strDrinkThumb
            }
            allDrink.push(drink)
        }
        console.log(allDrink);
        console.log(allDrink[0]["Name"])
        console.log(allDrink[0]["Pic"])
        
    });
    return allDrink;
}
////////////////VODKA DRINKS///////////////
function vodkaResults(){
    var settings = 
    {
        async: true,
        crossDomain: true,
        url: "https://the-cocktail-db.p.rapidapi.com/filter.php?i=Vodka",
        type: "GET",
        headers: 
        {
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "9bf6704c1dmsh4f7f1713cf03085p1c5d4cjsnfc7191c40e95"
        }
    }
    $.ajax(settings).done(function(response)
    {  
        var num = response.drinks; //The number of drinks within the liquor
        //console.log(response)
        let drink = new Object();
        var allDrink = [];
        for (let j=0;j<num.length;j++)
        { 
            drink= {
                [j]:response.drinks[j].idDrink,"Name":response.drinks[j].strDrink,"Pic":response.drinks[j].strDrinkThumb
            }
            allDrink.push(drink)
        }
        console.log(allDrink);
        
    });
}
//////////////////BOURBON DRINKS//////////////
function bourbonResults(){
    var settings = 
    {
        async: true,
        crossDomain: true,
        url: "https://the-cocktail-db.p.rapidapi.com/filter.php?i=Bourbon",
        type: "GET",
        headers: 
        {
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "9bf6704c1dmsh4f7f1713cf03085p1c5d4cjsnfc7191c40e95"
        }
    }
    $.ajax(settings).done(function(response)
    {  
        var num = response.drinks; //The number of drinks within the liquor
        //console.log(response)
        let drink = new Object();
        var allDrink = [];
        for (let j=0;j<num.length;j++)
        { 
            drink= {
                [j]:response.drinks[j].idDrink,"Name":response.drinks[j].strDrink,"Pic":response.drinks[j].strDrinkThumb
            }
            allDrink.push(drink)
        }
        console.log(allDrink);
    });
}
////////////////////RUM DRINKS//////////////////
function rumResults(){
    var settings = 
    {
        async: true,
        crossDomain: true,
        url: "https://the-cocktail-db.p.rapidapi.com/filter.php?i=Rum",
        type: "GET",
        headers: 
        {
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "9bf6704c1dmsh4f7f1713cf03085p1c5d4cjsnfc7191c40e95"
        }
    }
    $.ajax(settings).done(function(response)
    {  
        var num = response.drinks; //The number of drinks within the liquor
        //console.log(response)
        let drink = new Object();
        var allDrink = [];
        for (let j=0;j<num.length;j++)
        { 
            drink= {
                [j]:response.drinks[j].idDrink,"Name":response.drinks[j].strDrink,"Pic":response.drinks[j].strDrinkThumb
            }
            allDrink.push(drink)
        }
        console.log(allDrink);	
    });
}