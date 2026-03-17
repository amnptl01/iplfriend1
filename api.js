function getLiveScore(){

const API_KEY = "PwD74O8801.453";

fetch(`https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}`)
.then(res => res.json())
.then(data => {

console.log("Full API Data:", data);

// check if data available
if(!data || !data.data){
console.log("No match data found");
return;
}

// show matches
showMatches(data.data);

})
.catch(err => {
console.log("API Error:", err);
});

}



function showMatches(matches){

let container = document.getElementById("liveMatches");

if(!container) return;

container.innerHTML = "";

matches.forEach(match => {

let div = document.createElement("div");

div.style.background = "#1e293b";
div.style.margin = "10px";
div.style.padding = "12px";
div.style.borderRadius = "8px";

div.innerHTML = `
<h3>${match.name || "Match"}</h3>
<p>${match.status || "No status"}</p>
`;

container.appendChild(div);

});

}



// auto load when page opens
window.onload = function(){
getLiveScore();
}

// auto refresh every 30 sec
setInterval(getLiveScore,30000);
