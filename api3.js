// fetch('https://cors-anywhere.herokuapp.com/https://platform.fatsecret.com/js?key=5e2255f0f9874f5fa415fbd485105d2f')
//     .then(res => console.log(res.json()))
//     .catch(reason => console.log(reason))

fetch("https://trackapi.nutritionix.com/v2/search/instant?query=apple", {
  headers: {
    "x-app-id": "16590509",
    "x-app-key": "59c67d4da7ef85832ae114577057306c",
    "x-remote-user-id": 0
  }
});