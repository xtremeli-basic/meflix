let logo = document.getElementById("logo");
let enterAccountBtn = document.getElementById("enterAccountBtn");

//Load up the index(index.html) page when the logo is clicked
logo.addEventListener("click", function(){
    location.href="index.html"
})

//When the user clicks the enter account button go to the home page (home.html)
enterAccountBtn.addEventListener("click", function(){
    location.href = "home.html"
})