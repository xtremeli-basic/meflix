let backBtn = document.getElementById("backBtn");
let video = document.getElementById("video");

/*Setting video source*/
let source = localStorage.getItem("video");
if(source.startsWith("videos/")){
    video.src = source;
} else {
    video.src = "videos/" + source;
}

/*Back button*/
backBtn.addEventListener("mouseover", function(){
    backBtn.innerHTML = "<i class='fas fa-arrow-left'></i>&nbsp;Back To browse";
})

backBtn.addEventListener("mouseout", function(){
    backBtn.innerHTML = "<i class='fas fa-arrow-left'></i>";
})

backBtn.addEventListener("click", function(){
    location.href = "home.html"
})