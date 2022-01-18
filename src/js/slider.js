let images = [{
    link: 'src/images/slider/project_hole.png',
    title: 'hole'
}, {
    link: 'src/images/slider/project_kitchen.png',
    title: 'kitchen'
}, {
    link: 'src/images/slider/project_bathroom.png',
    title: 'bathroom'
}, {
    link: 'src/images/slider/project_bedroom.png',
    title: 'bedroom'
}];

function initSlider() {

    if (!images || !images.length) return;

    let sliderImages = document.querySelector('.project_photos-slider');
    let sliderArrows = document.querySelector('.project_slider-arrows');
    let sliderDots = document.querySelector('.project_slider-dots');

    initImages();
    initArrows();
    initDots();

    function initImages() {
        images.forEach((image, index) => {
            let imageDiv = `<img class='image n${index} ${index === 0 ? 'active' : ''}'  src = '${images[index].link}' data-index='${index}' alt = 'Admiral, ${images[index].title}'></img>`;
            sliderImages.innerHTML += imageDiv;
        })
    }

    function initArrows() {
        sliderArrows.querySelectorAll('.project_slider-arrow').forEach(arrow => {
            arrow.addEventListener('click', function() {
                let curNumber = +sliderImages.querySelector('.active').dataset.index;
                let nextNum;
                if (arrow.classList.contains('left')) {
                    nextNum = curNumber === 0 ? images.length - 1 : curNumber - 1;
                } else {
                    nextNum = curNumber === images.length - 1 ? 0 : curNumber + 1;
                }
                moveSlider(nextNum);
            });
        });
    }

    function initDots() {
        images.forEach((image, index) => {
            let dot = `<div class='slider__dots-item n${index} ${index === 0 ? 'active' : ''}' data-index ='${index}'></div>`;
            sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll('.slider__dots-item').forEach(dot => {
            dot.addEventListener('click', function() {
                moveSlider(this.dataset.index);
            })
        })
    }

    function moveSlider(num) {
        sliderImages.querySelector('.active').classList.remove('active');
        sliderImages.querySelector('.n' + num).classList.add('active');
        sliderDots.querySelector('.active').classList.remove('active');
        sliderDots.querySelector('.n' + num).classList.add('active');
    }
}


document.addEventListener('DOMContentLoaded', initSlider);