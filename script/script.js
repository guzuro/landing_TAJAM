$(document).ready(function () {
    $('.slider_item').on("click", function () {
        $('.slider_item').removeClass('active').eq($(this).index()).addClass('active')
    })
    showSlides(slideIndex, photoIndex);
});


var slideIndex = 3;
let photoIndex = 3;
//showSlides(slideIndex, photoIndex);

function plusSlides(n) {
    showSlides(slideIndex += n, photoIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    console.log(n);
    showSlides(slideIndex = n, photoIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll(".slide");
    let photos = document.querySelectorAll('.review-photo');

    let i;
    if (n > slides.length) {
        slideIndex = 1
        photoIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
        photoIndex = photos.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < photos.length; i++) {
        photos[i].style.width = "45px";
    }
    slides[slideIndex - 1].style.display = "flex";
    photos[photoIndex - 1].style.width = "70px";
}