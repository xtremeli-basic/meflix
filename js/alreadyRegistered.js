let contentContainer = document.getElementById("content-container")
let logo = document.getElementById("logo");
let alreadyRegisteredEmail = localStorage.getItem("email");

console.log(logo)
//Go to index page when logo is clicked
logo.addEventListener("click", function(){
    location.href = "index.html";
})


let registeredEmailMessage = document.createElement("h1");
registeredEmailMessage.innerHTML = alreadyRegisteredEmail || alreadyRegisteredEmail2;
contentContainer.append(registeredEmailMessage);
