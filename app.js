function renderPlayers(){

let div=document.getElementById("players")

div.innerHTML=""

players.forEach(p=>{

let card=document.createElement("div")

card.className="card"

card.innerHTML=

`<label>
<input type="checkbox" value="${p[0]}">
${p[0]} (${p[1]})
</label>`

div.appendChild(card)

})

}



function saveTeam(){

let selected=document.querySelectorAll("input:checked")

if(selected.length>11){

alert("Max 11 players")

return

}

let team=[]

selected.forEach(p=>team.push(p.value))

localStorage.setItem("team",JSON.stringify(team))

showPreview(team)

}



function showPreview(team){

document.getElementById("mainPage").style.display="none"

document.getElementById("previewPage").style.display="block"

let ul=document.getElementById("previewTeam")

ul.innerHTML=""

team.forEach(p=>{

let li=document.createElement("li")

li.textContent=p

ul.appendChild(li)

})

}
