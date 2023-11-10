let puppyImg = document.getElementById("puppyImage");
let thumbsBtn = document.getElementById("likeIcon");
let likeBtn = document.getElementById("likeButton");
let isImageLiked = false;

function onClickLikeButton() {
    if (isImageLiked === false) {
        thumbsBtn.style.color = "#0967d2";
        likeBtn.style.backgroundColor = "#0967d2";
        likeBtn.style.color = "#ffffff";
        puppyImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        isImageLiked = true;
    } else {
        thumbsBtn.style.color = "#cbd2d9";
        likeBtn.style.backgroundColor = "#cbd2d9";
        likeBtn.style.color = "#9aa5b1";
        puppyImg.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        isImageLiked = false;
    }
}