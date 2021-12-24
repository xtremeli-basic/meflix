let movie = JSON.parse(localStorage.getItem("movie"));
let title = document.getElementById("videoLabelH1");
let video = document.getElementById("video")
let description = document.getElementById("videoLabelH3");
let videoPlayBtn = document.getElementById("videoPlayBtn")
let backBtn = document.getElementById("backBtn");
let source;
console.log(backBtn)

title.innerText = movie.title;
description.innerText = movie.description;
video.src = movie.src + "#t=35,120";
source = movie.src
console.log(video)

//for play button
videoPlayBtn.addEventListener("click", function(){
    localStorage.setItem("video", source);
    location.href = "playVideo.html"
})

//for back button
backBtn.addEventListener("mouseover", function(){
    //console.log("mouse detected")
    backBtn.innerHTML = "<i class='fas fa-arrow-left'></i>&nbsp;Back To browse";
})

backBtn.addEventListener("mouseout", function(){
    backBtn.innerHTML = "<i class='fas fa-arrow-left'></i>";
})

backBtn.addEventListener("click", function(){
    console.log("mouse detected")
    location.href = "home.html"
})