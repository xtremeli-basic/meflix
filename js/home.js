let logo = document.getElementById("logo");
let header = document.getElementById("header");
let searchDiv = document.getElementById("search")
let searchIcon = document.getElementById("searchIcon");
let searchLabel = document.querySelector(".search label")
let homeVideo = document.getElementById("homeVideo");
let homeVideoLabelH1 = document.querySelector("#homeVideoLabel h1");
let homeVideoLabelH3 = document.querySelector("#homeVideoLabel h3");
let homeVideoPlayBtn = document.getElementById("homeVideoPlayBtn")
let home = document.getElementById("home");
let rightAngle = document.getElementById("rightAngle");
let leftAngle = document.getElementById("leftAngle");
let comedies = document.getElementById("comedies");
let signOutBtn = document.getElementById("signOutBtn");
let source ;


//Audio for Afro design 
function play0(){
    var audio = document.getElementById("audio0");
    audio.play();
    audio.volume=1;
}



//array of video objects
let videos = [
    {
        title : "Tammy",
        description: "After losing her job and learning that her husband has been unfaithful, a woman hits the road with her profane, hard-drinking grandmother.",
        src : "videos/tammy.mp4",
        genre:["comedy", "romance"],
        thumbnail:"https://occ-0-1659-299.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfoWg9o9eLsWozvQzoA9NN8kLv6MZ2NS5gil8tXIK9uKyC-ifOUKUXLo1czZqJM5HoXyGWlzB391aGMrJJMBBYCi-3I.webp?r=005",
        addToList: false,
        id:"tammy"
    },
    {
        title: "Black Panther",
        description:"T'Challa, after the death of his father, the King of Wakanda, returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king.",
        src : "videos/blackPanther.mp4",
        genre: ["action", "superhero", "science fiction", "adventure", "fantasy"],
        addToList: false,
        id:"blackPanther"
    },
    {
        title: "Big Daddy",
        description: "A lazy law school grad adopts a kid to impress his girlfriend, but everything doesn't go as planned and he becomes the unlikely foster father.",
        src : "videos/bigDaddy.mp4",
        genre:["comedy", "children's film", "drama"],
        thumbnail: "https://occ-0-1659-299.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb7OLhiedGqpXnb-HmnhwoQwuzRoXt-RG6gAB2JYXrYcAOF55p5CmJrEEfLX7t3TWC4O40lc3w5_3Td48Em1ly3LWeE.webp?r=d2b",
        addToList: false,
        id:"bigDaddy"
    },
    {
        title: "Mr Bean's Holiday",
        description: "Mr. Bean wins a trip to Cannes where he unwittingly separates a young boy from his father and must help the two come back together. On the way he discovers France, bicycling, and true love, among other things.",
        src : "videos/mrBeansHoliday.mp4",
        genre : ["comedy", "children's film", "adventure"],
        thumbnail: "https://occ-0-299-1168.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQVjoaKwJ3eP6B9-eIxROqnGJyzRJVAN7n-DygUQgAafgwuAMAhOfum8eerBunWfR1-Jai0Ms98QGdfbvEWz9HH9u7U.webp?r=85b",
        addToList: false,
        id:"mrBeansHoliday"
    },
    {
        title: "Murder Mystery",
        description: "A New York cop and his wife go on a European vacation to reinvigorate the spark in their marriage, but end up getting framed and on the run for the death of an elderly billionaire.",
        src: "videos/murderMystery.mp4",
        genre: ["mystery", "detective novel", "crime fiction"],
        thumbnail:"https://occ-0-1659-299.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZkvD_1I1Gxsj7NTwX5g7-1OLsPlQL6pQp1N6w4HMSMBV1XOcz0OiibMT02fLS6SAHJohfTOpCdJsFm4Uajw6VuMCVeZuv-gxBWAIoCrjnMQHBJ9lqWZo8r4L00s.jpg?r=f1d",
        addToList: false,
        id: "murderMystery"
    },
    {
        title: "The Mask",
        description: "Bank clerk Stanley Ipkiss is transformed into a manic superhero when he wears a mysterious mask.",
        src: "videos/theMask.mp4",
        genre: ["comedy", "action", "romance", "superhero", "fantasy", "crime fiction"],
        thumbnail: "https://occ-0-299-1168.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW4oXWFe3sOJJ4zaNPYhdbMxm9kkZtKuJ4U-kH2Fr3l7UsdMc47XN-ooVfdIokppeFAwNs-2KC_BzkJPlkZfBkRDCro.webp?r=f4f",
        addToList: false,
        id:"theMask"
    },
    {
        title: "The Spy Next Door",
        description: "Former CIA spy Bob Ho takes on his toughest assignment to date: looking after his girlfriend's three kids, who haven't exactly warmed to their mom's beau.",
        src: "videos/theSpyNextDoor.mp4",
        thumbnail: "https://occ-0-1659-299.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdD_L5YciEr-TyTZ1r9SnWE4FsWLhUzoc163_JjzjYf4AjPy8iBsHAmOBZBrx0Y7My9Bx-biX8P3hfwXWnQ0OPSt46I.webp?r=a53",
        genre:["action", "comedy", "children's film", "spy", "thriller", "adventure"],
        addToList: false,
        id:"theSpyNextDoor"
    }
]
localStorage.setItem("videos", JSON.stringify(videos));

//Load up the index(index.html) page when the logo is clicked
logo.addEventListener("click", function(){
    location.href="home.html"
})

// homeVideoPlayBtn.addEventListener("click", function(){
//     localStorage.setItem("video", source);
//     location.href = "playVideo.html"
// })
//navigation event listeners
home.addEventListener("click", function(){
    location.href = "home.html";
})

//Category slide functionality
let translateUnits = 0;
let addUnits = 100;
function slideForward(){
    if(translateUnits <= 150){
    translateUnits += addUnits;
    comedies.style.transform = `translate(-${translateUnits}px)`;
    comedies.style.transition = "transform 1s linear";
    console.log(translateUnits)
    }
}
function slideBackward(){
    translateUnits -= addUnits;
    comedies.style.transform = `translate(-${translateUnits}px)`;
    comedies.style.transition = "transform 1s linear";
}
// rightAngle.addEventListener("click", slideForward);
// leftAngle.addEventListener("click", slideBackward);

//This function handles search functionality
let searchInput = document.getElementById("search");
let main = document.getElementById("main");


searchInput.addEventListener("input", () => {
    let searchValue = searchInput.value;
    let regex = new RegExp(searchValue, 'i');
    if(searchValue.length > 0){
        main.innerHTML = "";
        console.log(searchValue)
        videos.forEach(video => {
            if(regex.test(video.title) || video.genre.includes(searchValue)){
                let searchResultVideo = document.createElement("img");
                searchResultVideo.setAttribute("id", video.id);
                searchResultVideo.src = video.thumbnail;
                searchResultVideo.classList.add("video")
                main.append(searchResultVideo)
            } 
        })
    }else   {
        main.innerHTML = "";
        createHomeSetup();
        setup();
        createCategories()
   
    }
})

//This function creates the categories according to the genres
function createCategories(){
    let arrayOfGenres = [];

    videos.forEach(video => {
        for(let i = 0; i < video.genre.length; i++){
            if(arrayOfGenres.includes(video.genre[i]) === false){
                arrayOfGenres.push(video.genre[i])
            }
        }
    })
    
    
    //Create a category for each unique genre
    let categoriesContainer = document.createElement("section");
    categoriesContainer.setAttribute("id", "categories-container")

    arrayOfGenres.forEach(genre => {
        let category = document.createElement("div");
        category.classList.add("categories");
        let categoryTitle = document.createElement("h2");
        categoryTitle.innerText = genre;
        category.append(categoryTitle);
        let videoCarousel = document.createElement("div");
        videoCarousel.classList.add("category-videos")
        videos.forEach(video => {
            if (video.genre.includes(genre)){
                let videoImage = document.createElement("img");  
                videoImage.setAttribute("id", video.id);
                videoImage.classList.add("video");
                videoImage.src = video.thumbnail;
                videoImage.alt = video.title;

                videoImage.addEventListener("click", () => {
                    createModalPreview(video)
                })

                videoCarousel.append(videoImage)


            }
        })
        category.append(videoCarousel)
        categoriesContainer.append(category)
    })
    main.append(categoriesContainer)
}
createCategories();


//This function creates a modal preview for every video clicked on the homepage
let arrayOfRelatedVideosImages = [];
let arrayOfRelatedVideos = [];

function createNewModal(video){
    createModalPreview(video)
}

function createModalPreview(object){
    let modalContainer = document.getElementById("modal-container");
    modalContainer.style.display="block";
    
    //Creating modal
    let modal = document.createElement("div");
    modal.classList.add("movie-preview")

    //close button
    let closeModalBtn = document.createElement("button");
    closeModalBtn.innerHTML = "<i class='fas fa-times'></i>";
    closeModalBtn.classList.add("modal-close-btn");
    modal.append(closeModalBtn);

    closeModalBtn.addEventListener("click", () => {
    modalContainer.style.display = "none";
    })

    //creating video
    let previewVideo = document.createElement("video");
    previewVideo.classList.add("preview-video");
    let previewVideoSource = document.createElement("source");
    let movieSource = object.src;
    previewVideoSource.src = movieSource + "#t=35,120";
    previewVideo.autoplay = true;
    previewVideo.load();
    previewVideo.append(previewVideoSource);
    modal.prepend(previewVideo);

    //Title of the video
    let title = document.createElement("h1");
    title.classList.add("preview-title")
    title.innerText = object.title;
    modal.append(title)

    let playAndLikeBtnDiv = document.createElement("div");
    playAndLikeBtnDiv.classList.add("preview-play-btn-div");
    modal.append(playAndLikeBtnDiv)

    //Play and like Buttons
    let playBtn = document.createElement("button");
    playBtn.classList.add("btn");
    playBtn.innerHTML = "<b>Play</b>";
    playAndLikeBtnDiv.append(playBtn);

    playBtn.addEventListener("click", function(){
        localStorage.setItem("video", object.src);
        location.href = "playVideo.html"
    })

    let likeBtn = document.createElement("button");
    likeBtn.classList.add("like-dislike-btn");
    likeBtn.innerHTML = "<i class='fas fa-thumbs-up'></i>";
    playAndLikeBtnDiv.append(likeBtn)

    let dislikeBtn = document.createElement("button");
    dislikeBtn.classList.add("like-dislike-btn")
    dislikeBtn.innerHTML = "<i class='fas fa-thumbs-down'></i>";
    playAndLikeBtnDiv.append(dislikeBtn)

    let addToListBtn = document.createElement("button");
    addToListBtn.classList.add("add-to-list-btn");
    addToListBtn.innerHTML = "<b>Add to List</b>";
    playAndLikeBtnDiv.append(addToListBtn)

    addToListBtn.addEventListener("click", () => {
        addToListBtn.innerHTML = "<i class='fas fa-check'></i>"
        addToListBtn.classList.toggle("add-list-button-clicked")
    })

    //Genres
    let genresDiv = document.createElement("div");
    genresDiv.classList.add("movie-preview-genre")
    object.genre.forEach(genre => {
        let genreItem = document.createElement("p");
        genreItem.innerHTML = "<b>" + genre + "</b>";
        genresDiv.append(genreItem)
    })
    modal.append(genresDiv)

    //Description
    let movieDescription = document.createElement("p");
    movieDescription.classList.add("movie-preview-description")
    movieDescription.innerHTML = object.description;
    modal.append(movieDescription)

    //Related Videos
    let relatedVideos = document.createElement("div");
    relatedVideos.classList.add("related-videos");
    videos.forEach(video => {
        for(let i = 0; i < object.genre.length; i++){
            if(video.genre.includes(object.genre[i])){
                if(!arrayOfRelatedVideos.includes(video)){
                    arrayOfRelatedVideos.push(video)
                }
                
            }
        }
    })
    arrayOfRelatedVideos.forEach(relatedVideo => {
        let relatedVideoImage = document.createElement("img");
        relatedVideoImage.addEventListener("click", () => {
            createNewModal(relatedVideo)
        })
        arrayOfRelatedVideosImages.push(relatedVideoImage)
        relatedVideoImage.classList.add("video")
        relatedVideoImage.src = relatedVideo.thumbnail;
        relatedVideos.append(relatedVideoImage);

    })
    
    modal.append(relatedVideos)

    modalContainer.append(modal);
}


function createHomeSetup(){
    let modalSection = document.createElement("section");
    modalSection.setAttribute("id", "modal-container");
    let homeSection = document.createElement("section");
    homeSection.classList.add("home");
    let homeVideo = document.createElement("video");
    homeVideo.classList.add("homeVideo");
    homeVideo.setAttribute("id", "homeVideo")
    homeVideo.autoplay = true;
    let homeVideoSource = document.createElement("source");
    //Complete source
    homeVideo.append(homeVideoSource);
    homeSection.append(homeVideo);
    let homeVideoLabel = document.createElement("div");
    homeVideoLabel.classList.add("homeVideoLabel");
    homeVideoLabel.setAttribute("id", "homeVideoLabel")
    let labelHeading = document.createElement("h1");
    labelHeading.setAttribute("id", "homeVideoLabelH1")
    let labelDescription = document.createElement("h3");
    labelDescription.setAttribute("id", "homeVideoLabelH3")
    let playBtn = document.createElement("button");
    playBtn.setAttribute("type", "button");
    playBtn.classList.add("playBtn");
    playBtn.classList.add("btn");
    playBtn.setAttribute("id", "homeVideoPlayBtn");
    playBtn.innerText = "Play"
    homeVideoLabel.append(labelHeading);
    homeVideoLabel.append(labelDescription);
    homeVideoLabel.append(playBtn)
    homeSection.append(homeVideo)
    homeSection.append(homeVideoLabel)
    main.prepend(modalSection);
    main.prepend(homeSection);

}


//This function sets the home video
window.onload =    createHomeSetup();
window.onload = setup();


function setup(){
 
    homeVideo = document.getElementById("homeVideo")
    homeVideoLabelH1 = document.getElementById("homeVideoLabelH1");
    homeVideoLabelH3 = document.getElementById("homeVideoLabelH3")
    let index = Math.floor(Math.random() * videos.length);
    homeVideo.src = videos[index].src + "#t=35,120";
    homeVideoLabelH1.innerText = videos[index].title;
    homeVideoLabelH3.innerText = videos[index].description
    source = homeVideo.src.slice(29, -9);
}


//id's of videos
let theMask = document.getElementById("theMask");
let mrBeansHoliday = document.getElementById("mrBeansHoliday");
let bigDaddy = document.getElementById("bigDaddy");
let theSpyNextDoor = document.getElementById("theSpyNextDoor");
let murderMystery = document.getElementById("murderMystery");
let tammy = document.getElementById("tammy");

theMask.addEventListener("click", function(){
       createModalPreview(videos[5])
})
mrBeansHoliday.addEventListener("click", function(){
        createModalPreview(videos[3])
})
bigDaddy.addEventListener("click", function(){
        createModalPreview(videos[2])
})
theSpyNextDoor.addEventListener("click", function(){
        createModalPreview(videos[6])
})
murderMystery.addEventListener("click", function(){
        createModalPreview(videos[4])
})
tammy.addEventListener("click", function(){
        createModalPreview(videos[0])
})

//This event handler handles the Sign out
signOutBtn.addEventListener("click", function(){
    location.href = "signIn.html"
})