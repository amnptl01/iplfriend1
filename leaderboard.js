function confirmTeam(){

document.getElementById("previewPage").style.display="none"

document.getElementById("leaderboardPage").style.display="block"

updateLeaderboard()

}



function updateLeaderboard(){

let name=localStorage.getItem("user")

let points=Math.floor(Math.random()*200)

let li=document.createElement("li")

li.textContent=name+" - "+points+" pts"

document.getElementById("leaderboard").appendChild(li)

}
