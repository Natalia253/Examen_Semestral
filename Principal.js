const slideImage = [
    "https://recorriendopanama.com/wp-content/uploads/2017/08/basilica-santiago-aposto.jpg?w=1024", 
    "https://recorriendopanama.com/wp-content/uploads/2017/12/pozo.jpg", 
    "https://recorriendopanama.com/wp-content/uploads/2017/12/rana.jpg?w=1024",
    "https://recorriendopanama.com/wp-content/uploads/2017/07/aguadulce2.jpg?w=1024",
    "https://recorriendopanama.com/wp-content/uploads/2017/12/avestrus.jpg?w=906"
];

let slider = document.querySelector('.background-image');
let sliderGridItems = [...document.querySelectorAll('.grid-item')];

let currentImage = 0;

setInterval(() => {
    changeSliderImage();
}, 5000);

const changeSliderImage = () => {
    sliderGridItems.map((gridItem, Principal) => {
        setTimeout(() => {
            gridItem.classList.remove('hide');

            setTimeout(() => {
                if (Principal == sliderGridItems.length - 1) {
                    if (currentImage >= slideImage.length - 1) {
                        currentImage = 0;
                    } else {
                        currentImage++;
                    }

                    slider.src = slideImage[currentImage];

                    sliderGridItems.map((item, i) => {
                        setTimeout(() => {
                            item.classList.add('hide');
                        }, i * 100);
                    });
                }
            }, 100);
        }, Principal * 100);
    });
};

document.addEventListener('DOMContentLoaded', function () {
    const heroTitle = document.querySelector('.hero-section-title');
    const heroSubHeading = document.querySelector('.hero-section-sub-heading');

  
    heroTitle.addEventListener("mouseover", function() {
        heroTitle.style.color = "navy"; 
    });

    heroTitle.addEventListener("mouseout", function() {
        heroTitle.style.color = ""; 
    });

    heroSubHeading.addEventListener("mouseover", function() {
        heroSubHeading.style.color = "navy"; 
    });

    heroSubHeading.addEventListener("mouseout", function() {
        heroSubHeading.style.color = ""; 
    });
});