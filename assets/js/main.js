const btnPrev = document.querySelector('#button-prev');
const btnNext = document.querySelector('#button-next');

const carouselContent = document.querySelector('.carousel-inner')


btnPrev.addEventListener('click',nextImg)
btnNext.addEventListener('click',prevImg)

function nextImg(){
    console.log('anterior imagen');
}

function prevImg(){
    console.log('siguiente imagen');
}