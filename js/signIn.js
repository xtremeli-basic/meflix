let logo = document.getElementById("logo");
let signInBtn = document.getElementById("signIn");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password")
let signInForm = document.getElementById("signIn-form")

logo.addEventListener("click", function(){
    location.href = "index.html";
})

//Load up the index(index.html) page when the logo is clicked
logo.addEventListener("click", function(){
    location.href="signIn.html"
})

//Event listener for the "Sign In" button
signInBtn.addEventListener("click", function(){
    let email = emailInput.value;
    let password = passwordInput.value;
    let userObjectAsString = localStorage.getItem(email);
    let userObject = JSON.parse(userObjectAsString);
    if(localStorage.getItem(email) != null && userObject.password === password){
        location.href = "prehome.html";
    } else {
        let checkSpanArray = [];
        if(checkSpanArray.length <= 0){
            console.log(checkSpanArray.length)
            let errorMessageContainer = document.createElement("span");
            errorMessageContainer.innerText = "Incorrect password. Please try again"
            errorMessageContainer.classList.add("signInElement")
            errorMessageContainer.style.color = "red";
            errorMessageContainer.style.margin = "1rem";
            signInForm.prepend(errorMessageContainer)
            checkSpanArray.push(Array.from(document.getElementsByClassName("signInElement")));
            console.log(checkSpanArray.length)
        }
        
        
    }
})