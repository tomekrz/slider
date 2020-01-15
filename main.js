// interface

const slideList = [{
        // background of the first slide
        img: "images/img1.jpg",
        // the text of the first slide
        text: 'Slajd 1'
    },
    {
        img: "images/img2.jpg",
        text: 'Slajd 2'
    },
    {
        img: "images/img3.jpg",
        text: 'Slajd 3'
    }

    // add more slides here and in HTML
];


// time of change
const time = 4000;
// active slide at the start
let active = 0;





const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]





const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    if (active < slideList.length) {
        active++;
    }
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot()
}
let indexinterval = setInterval(changeSlide, time);

const keyChangeSlide = function (e) {
    console.log(e.keyCode);
    if (e.keyCode == 39 || e.keyCode == 38) {
        if (active < slideList.length - 1) {
            active++
        } else {
            active = 0;
        }
        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot()
        clearInterval(indexinterval)

        setTimeout(indexinterval = setInterval(changeSlide, time), time)

    } else if (e.keyCode == 37 || e.keyCode == 40) {
        if (active > 0) {
            active--
        } else {
            active = slideList.length - 1;
        }
        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot()

        clearInterval(indexinterval);
        setTimeout(indexinterval = setInterval(changeSlide, time), time)
    };


}
const clickChangeSlider = function (e) {

    active = parseInt(e.target.dataset.number, 10) - 1;
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot()

    clearInterval(indexinterval);
    setTimeout(indexinterval = setInterval(changeSlide, time), time)
}

window.addEventListener('keydown', keyChangeSlide);

dots.forEach((dot) => {
    dot.addEventListener("click", clickChangeSlider)
})

const arrowsDiv = document.querySelectorAll("[data-arrow]")
arrowsDiv.forEach((arrowDiv) => {

    arrowDiv.addEventListener("click", function (e) {


        if (parseInt(e.target.dataset.arrow) === 2) {

            if (active < slideList.length - 1) {
                active++
            } else {
                active = 0;
            }
            image.src = slideList[active].img;
            h1.textContent = slideList[active].text;
            changeDot()
            clearInterval(indexinterval)

            setTimeout(indexinterval = setInterval(changeSlide, time), time)



        } else if (parseInt(e.target.dataset.arrow) === 1) {

            if (active > 0) {
                active--
            } else {
                active = slideList.length - 1;
            }
            image.src = slideList[active].img;
            h1.textContent = slideList[active].text;
            changeDot()

            clearInterval(indexinterval);
            setTimeout(indexinterval = setInterval(changeSlide, time), time)
        }




    })


})