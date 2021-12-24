let logo = document.getElementById("logo");
let signUpNext1 = document.getElementById("signUpNext1");

logo.addEventListener("click", function(){
    location.href = "index.html";
})

//Load up the index(index.html) page when the logo is clicked
logo.addEventListener("click", function(){
    location.href="index.html";
})

//linking the second sign up step page to the first
signUpNext1.addEventListener("click", function(){
    location.href = "signUp2.html";
})
