function login(){

let name=document.getElementById("username").value

if(name===""){

alert("Enter name")

return

}

localStorage.setItem("user",name)

document.getElementById("loginPage").style.display="none"

document.getElementById("mainPage").style.display="block"

renderPlayers()

}
