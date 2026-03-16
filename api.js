function getLiveScore(){

const API_KEY = "YOUR_API_KEY_HERE";

fetch(`https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}`)
.then(response => response.json())
.then(data => {

console.log("Live Match Data:", data);

})
.catch(error => {

console.log("API Error:", error);

});

}
