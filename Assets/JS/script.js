// Navbar
let hamMenu = document.querySelector(".hamburger-menu");
let navMenu = document.querySelector(".navbar-mobile");

const showNavMenu = () => {
    navMenu.style.height = "250px";
    navMenu.style.paddingTop = "80px";
}

const hideNavMenu = () => {
    navMenu.style.height = "0px";
    navMenu.style.paddingTop = "0px";
}

hamMenu.addEventListener('click', () => {
    if (navMenu.style.height == "0px") {
        showNavMenu();
    } else {
        hideNavMenu();
    }
})

// Resizing effects
function resizeFuntion() {
    if (window.innerWidth >= 768) {
        hideNavMenu();
    }
}

window.onresize = resizeFuntion;
$(document).ready(function () {
    document.querySelector(".header-text").style.opacity = "1";
    $(".slick-slider").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        nextArrow: "<div class=\"slick-next\" style=\"padding: 10px; border-radius: 50%; border: 1px solid #020a31; color: #020a31; width: fit-content; height: fit-content; cursor: pointer;\">></div>",
        prevArrow: "<div class=\"slick-prev\" style=\"padding: 10px; border-radius: 50%; border: 1px solid #020a31; color: #020a31; width: fit-content; height: fit-content; cursor: pointer;\"><</div>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });    
});



// Scrolling effects
const showCards = () => {
    let cardsSlider = document.querySelector(".services-flexbox");
    cardsSlider.style.transform = "translateX(0px)";
}
const showTeamCards = () => {
    document.querySelectorAll(".grid-card").forEach(gridCard => {
        gridCard.style.transform = "translateX(0px)";
    })
}

if (window.innerWidth < 768) {
    showCards();
}
if (window.innerWidth < 992) {
    showTeamCards();
}
window.addEventListener('scroll', () => {
    var windowBottomPos = window.pageYOffset;
    var servicesCardBounding = document.querySelectorAll(".services-card")[0].getBoundingClientRect().bottom;
    var teamCards = document.querySelectorAll(".grid-card")[0].getBoundingClientRect().top;
    if ((windowBottomPos >= servicesCardBounding && window.innerWidth > 768) || window.innerWidth < 768) {
        showCards();
    }
    if ((windowBottomPos >= teamCards && window.innerWidth > 992) || window.innerWidth < 768) {
        showTeamCards();
    }
});


// Countdown
let countdownDate = new Date("Jan 29, 2021 21:37:25").getTime();
let countdownInterval = setInterval(() => {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    distance -= days * (1000 * 60 * 60 * 24);
    let hours = Math.floor(distance / (1000 * 60 * 60));
    distance -= hours * (1000 * 60 * 60);
    let minutes = Math.floor(distance / (1000 * 60));
    distance -= minutes * (1000 * 60);
    let seconds = Math.floor(distance / (1000));
    document.querySelector("p.days").textContent = days;
    document.querySelector("p.hours").textContent = hours;
    document.querySelector("p.minutes").textContent = minutes;
    document.querySelector("p.seconds").textContent = seconds;
}, 1000)


// Team Icons

let cardsImages = document.querySelectorAll(".grid-card-img-container");
let icons = document.querySelectorAll(".grid-card-img-container .icons");
let layers = document.querySelectorAll(".grid-card-img-container .layer");
layers.forEach((layer) => {
    layer.addEventListener("transitionend", () => {
        if (layer.style.backgroundColor === "transparent") {
            layer.style.zIndex = "5";
        }
    })
});

for (var i = 0; i < cardsImages.length; i++) {
    cardsImages[i].setAttribute("data-id", i + 1);
    icons[i].setAttribute("data-id", i + 1);
}

cardsImages.forEach(image => {
    image.addEventListener('mouseover', function() {
        let imageId = image.getAttribute("data-id");
        let icon = document.querySelector(".icons[data-id='"+imageId+"']");
        icon.style.opacity = "1";
        icon.style.zIndex = "20";
        document.querySelectorAll(".grid-card-img-container .layer")[imageId - 1].style.zIndex = "15";
        document.querySelectorAll(".grid-card-img-container .layer")[imageId - 1].style.backgroundColor = "rgba(2, 10, 49, 0.4)";
    });

    image.addEventListener('mouseleave', function() {
        let imageId = image.getAttribute("data-id");
        let icon = document.querySelector(".icons[data-id='"+imageId+"']");
        icon.style.opacity = "0";
        icon.style.zIndex = "10";
        document.querySelectorAll(".grid-card-img-container .layer")[imageId - 1].style.backgroundColor = "transparent";
    })
})