let logo = document.getElementById("logo");
let signUpNext = document.getElementById("signUpNext3")


//Go to index page when the logo is clicked
logo.addEventListener("click", function(){
    location.href="index.html";
})

//Event listener to take user to the signedUpGreeting page
signUpNext.addEventListener("click", function(){
    location.href = "signedUpGreeting.html";
})

