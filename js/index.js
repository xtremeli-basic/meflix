let firstExpandIcon = document.querySelector("#firstQuestion img");
let secondExpandIcon = document.querySelector("#secondQuestion img");
let thirdExpandIcon = document.querySelector("#thirdQuestion img");
let fourthExpandIcon = document.querySelector("#fourthQuestion img");
let firstAnswer = document.getElementById("firstAnswer");
let secondAnswer = document.getElementById("secondAnswer");
let thirdAnswer = document.getElementById("thirdAnswer");
let fourthAnswer = document.getElementById("fourthAnswer");
let signInBtn = document.getElementById("signInBtn");
let logo = document.getElementById("logo");
let getStartedBtn1 = document.getElementById("submitEmailBtn1");
let getStartedBtn2 =document.getElementById("submitEmailBtn2");
let newEmail;


localStorage.setItem("emailField2", JSON.stringify(emailInput2.value));
//This function toggles the expand class
function toExpand(element){
    element.classList.toggle("expand");
}

//Event listeners for FAQ
firstExpandIcon.addEventListener("click", function(){
    toExpand(firstAnswer);
    firstExpandIcon.src="resources\icons\close_black_24dp.svg"
});
secondExpandIcon.addEventListener("click", function(){
    toExpand(secondAnswer);
    secondExpandIcon.src="resources\icons\close_black_24dp.svg"
});
thirdExpandIcon.addEventListener("click", function(){
    toExpand(thirdAnswer);
    thirdExpandIcon.src="resources\icons\close_black_24dp.svg"
});
fourthExpandIcon.addEventListener("click", function(){
    toExpand(fourthAnswer);
    fourthExpandIcon.src="resources\icons\close_black_24dp.svg"
});

//Event listener to redirect use to the Sign In page
signInBtn.addEventListener("click", function(){
    location.href = "signIn.html";
})

//Load up the index(index.html) page when the logo is clicked
logo.addEventListener("click", function(){
    location.href="index.html"
})

//Load up the first sign up page when either "Get Started" button is clicked
getStartedBtn1.addEventListener("click", function(){
    if(emailInput1.value.length != 0 && emailInput1.value.includes("@")){
        newEmail = emailInput1.value;
        localStorage.setItem("email", newEmail);
        if(localStorage.getItem(newEmail) == null){
            location.href = "signUp.html"  
        } else {
            location.href = "alreadyRegistered.html";
        }
    } else {
        emailInput1.placeholder="Please enter a valid email"
    }
})
getStartedBtn2.addEventListener("click", function(){
    
    if(emailInput2.value.length != 0 && emailInput2.value.includes("@")){
        newEmail = emailInput2.value;
        localStorage.setItem("email", newEmail);
        if(localStorage.getItem(alreadyRegisteredEmail) != null){
            location.href = "signUp.html"  
        } else {    n
            location.href = "alreadyRegistered.html";
        }
    } else {
        emailInput2.placeholder="Please enter a valid email"
    }
})