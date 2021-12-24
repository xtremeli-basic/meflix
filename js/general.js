//For now the sign out functionality is to only change the html file, I need to set a boolean to false when the user logs out
let signOutBtn = document.getElementById("signOutBtn");

console.log(signOutBtn)

//Event listener to handle sign out
signOutBtn.addEventListener("click", function(){
    location.href="signIn.html"
})