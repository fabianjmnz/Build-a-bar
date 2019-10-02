// Credit: https://en.wikipedia.org/wiki/Ajax_%28programming%29
// This is the client-side script.
console.log("first log")
// Initialize the HTTP request.
var xhr = new XMLHttpRequest();
console.log("tomaotes")
xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://platform.fatsecret.com/js?key=5e2255f0f9874f5fa415fbd485105d2f");
console.log("i ate the tomatoes")
// Track the state changes of the request.
xhr.onreadystatechange = function() {
  var DONE = 4; // readyState 4 means the request is done.
  var OK = 200; // status 200 is a successful return.
  console.log("frogs")
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
        console.log("potatoes")
      console.log(xhr.responseText); // 'This is the output.'
      console.log(JSON.parse(xhr.responseText));
    } else {
      console.log("Error: " + xhr.status); // An error occurred during the request.
    }
  }
};
xhr.send(null);
