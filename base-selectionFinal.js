
var idnum = [];
var  newlist = [];
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
    }).then(function(drinks) {
        $.each(drinks,function(a,value) {
            
            for(let e=0;e<value.length;e++) {
                var nextDrink = (value[e].strDrink);
                var btn = document.createElement("button");
                var t = document.createTextNode(nextDrink);
                var b =value[e].strDrinkThumb        
                var id = value[e].idDrink   
                
                btn.setAttribute("style","font-size:20px;color:white;background-color:transparent;display:block;padding:30px;margin:auto;height:auto;border-radius:20px;width:30vw:height:10vw;border:none;text-decoration:underline");  
                btn.setAttribute("id",e);
                btn.appendChild(t); 
                //btn.onclick = function(){
                //    alert("blah")
                //}        
                $("section1").append(btn);
                $("section1").append(`<img src=${b} height="100px" width="100px">`);
                idnum.push(id);
            }
            //console.log(idnum)
        })
        return idnum;
    }).then(function(idnumber) {
       // newlist =[];
            $.each(idnumber,function(a,value){
                $.ajax({
                    async: false,
                    crossDomain: true,
                    url: `https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${value}`,
                    type: "GET",
                    headers: {
                        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                        "x-rapidapi-key": "9bf6704c1dmsh4f7f1713cf03085p1c5d4cjsnfc7191c40e95"
                    }      
                }).done(function getDrinkInfo(response){                                 
                      newlist.push(response)
                    })             
                var ar = newlist[a].drinks[0].strDrink //name of drink 1
                var arb = [newlist[a].drinks[0].strIngredient1,newlist[a].drinks[0].strIngredient2,newlist[a].drinks[0].strIngredient3,newlist[a].drinks[0].strIngredient4,newlist[a].drinks[0].strIngredient5, newlist[a].drinks[0].strIngredient6,newlist[a].drinks[0].strIngredient7,newlist[a].drinks[0].strIngredient8, newlist[a].drinks[0].strIngredient9,newlist[a].drinks[0].strIngredient10];

                document.getElementById(`${a}`).onclick = function(){
                    document.getElementById("drink-list").style.display = "none";
                    $("section2").append(ar);
		
                    firstIngredient1 = arb[0];
                    secondIngredient2 = arb[1];
                    thirdIngredient3 = arb[2];
                    fourthIngredient4 = arb[3];
                    fifthIngredient5 = arb[4];
                    sixthIngredient6 = arb[5];
                    seventhIngredient7 = arb[6];
                    eightIngredient8 = arb[7];
                    ninthIngredient9 = arb[8];
                    tenthIngredient10 = arb[9];

		
			var nameOfDrink = $("<h1>").text(newlist[a].strDrink);     // Name of Drink
			$("body").append(nameOfDrink);
			var firstIngredient = $("<h3>").text(newlist[a].drinks[0].strMeasure1+ " " + firstIngredient1);  // Name of Ingredient 1 if needed
			$("body").append(firstIngredient);
		    var secondIngredient = $("<h4>").text(newlist[a].drinks[0].strMeasure2+ " " + secondIngredient2);  // Name of Ingredient 2 if needed
			$("body").append(secondIngredient);
		if (isNaN(newlist[a].drinks[0].strMeasure3)){
			newlist[a].drinks[0].strMeasure3 =  '' ;
			var thirdIngredient = $("<h4>").text(newlist[a].drinks[0].strMeasure3+ " " + thirdIngredient3);    // Name of Ingredient 3 if needed
			$("body").append(thirdIngredient);
		}
		if (isNaN(newlist[a].drinks[0].strMeasure4)){	
			newlist[a].drinks[0].strMeasure4 = '' ;
			var fourthIngredient = $("<h5>").text(newlist[a].drinks[0].strMeasure4+ " " + fourthIngredient4);   // Name of Ingredient 4 if needed
			$("body").append(fourthIngredient);	
		}	    
		if(isNaN(newlist[a].drinks[0].strMeasure5)){
			newlist[a].drinks[0].strMeasure5 = '' ;
		    var fifthIngredient = $("<h4>").text(newlist[a].drinks[0].strMeasure5+ " " + fifthIngredient5);     // Name of Ingredient 5 if needed
			$("body").append(fifthIngredient);
		}
		if(isNaN(newlist[a].drinks[0].strMeasure6)){
			newlist[a].drinks[0].strMeasure6 = '' ;
		    var sixthIngredient = $("<h4>").text(newlist[a].drinks[0].strMeasure6+ " " + sixthIngredient6);    // Name of Ingredient 6 if needed
			$("body").append(sixthIngredient);
		}
		if(isNaN(newlist[a].drinks[0].strMeasure7)){
			newlist[a].drinks[0].strMeasure7 = '';
		    var seventhIngredient = $("<h5>").text(newlist[a].drinks[0].strMeasure7+ " " + seventhIngredient7);   // Name of Ingredient 7 if needed
			$("body").append(seventhIngredient);
		}
		if(isNaN(newlist[a].drinks[0].strMeasure8)){
			newlist[a].drinks[0].strMeasure8 = '';
		    var eightIngredient = $("<h4>").text(newlist[a].drinks[0].strMeasure8+ " " + eightIngredient8);     // Name of Ingredient 8 if needed
			$("body").append(eightIngredient);
		}
		if(isNaN(newlist[a].drinks[0].strMeasure9)){
			newlist[a].drinks[0].strMeasure9 = '';
		    var seventhIngredient = $("<h5>").text(newlist[a].drinks[0].strMeasure9+ " " + seventhIngredient9);   // Name of Ingredient 9 if needed
			$("body").append(ninthIngredient);
		}
		if(isNaN(newlist[a].drinks[0].strMeasure10)){
			newlist[a].drinks[0].strMeasure10 = '';
		    var eightIngredient = $("<h4>").text(newlist[a].drinks[0].strMeasure10+ " " + eightIngredient10);     // Name of Ingredient 10 if needed
			$("body").append(tenthIngredient);
		}
			var recipe = $("<h4>").text(newlist[a].drinks[0].strInstructions);     // Name of Ingredient 8 if needed
			$("body").append(recipe);
			
			//allName.push(dict[i].strDrink)

                }       
         })//end of foreach
        })
}    