fetch("https:cors-anywhere.herokuapp.com/https://api.nal.usda.gov/fdc/v1/search/?format=json&api_key=mbbkM6I4nJSNVXOqPHUbgMYB0atUH3o6bd1FkKmB",{
    headers: {
        'Access-Control-Allow-Origin':'*',
        "generalSearchInput":"potato",
        "Content-Type":"application/json"
      }
})
    .then(response => console.log(response))
//ndbno=01009&
//fetch("https:cors-anywhere.herokuapp.com/https://api.nal.usda.gov/ndb/reports/?type=b&format=json&api_key=mbbkM6I4nJSNVXOqPHUbgMYB0atUH3o6bd1FkKmB",{
    // "http://api.nal.usda.gov/ndb/reports/?ndbno=" + ndbno + "&type=" + type + "&format=" + format + "&api_key=" + apiKey;
