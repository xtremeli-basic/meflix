
let logo = document.getElementById("logo");
let signUpNext2 = document.getElementById("signUpNext2");
let email2 = document.getElementById("email2");
let password = document.getElementById("password");
let form = document.getElementById("passwordForm");

//Get the email that the user entered
email2.value = localStorage.getItem("email");

//Go to the index page when the logo is clicked
logo.addEventListener("click", function(){
    location.href="index.html";
})
//set the value of arrayOfUsers
function setArrayOfUsers(value){
    arrayOfUsers = value;
    console.log(arrayOfUsers);
}

signUpNext2.addEventListener("click", function(){
    //Password check
    if(/[A-Z]/.test(password.value) && /[0-9]/.test(password.value) && /[!#$%.*&]/.test(password.value)){
        //Store new user details
        let userObject = {"email":email2.value, "password":password.value, "signedUp":true}
        localStorage.setItem(email2.value, JSON.stringify(userObject));
        //Go to the next page
        location.href = "signUpFinished.html"
    } else {
        let errorMessage = document.createElement("p")
        errorMessage.innerHTML = "*Your password must contain at least one uppercase letter, one special character and one number*";
        errorMessage.style.color = "red";
        form.prepend(errorMessage);
    }
})