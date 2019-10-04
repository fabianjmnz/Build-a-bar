
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
                btn.appendChild(t); 
               // btn.setAttribute('onclick',infoOfDrink());          
                $("section1").append(btn);
                $("section1").append(`<img src=${b} height="100px" width="100px">`);
                idnum.push(id);
            }
            //console.log(idnum)
        })
        return idnum;
    }).then(function(idnumber) {
        //setTimeout(function(){},1000)
            $.each(idnumber,function(a,value){
                console.log(a);
                console.log(value)
                $.ajax({
                    async: true,
                    crossDomain: true,
                    url: `https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${value}`,
                    type: "GET",
                    headers: {
                        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                        "x-rapidapi-key": "9bf6704c1dmsh4f7f1713cf03085p1c5d4cjsnfc7191c40e95"
                    }      
                }).done(function infoOfDrink(response){              
                    console.log(response)        
                     
                    })
                })           
         })   
}    