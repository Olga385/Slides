let btnNext = document.getElementById("btnNext");
let slides = document.querySelectorAll("img");
let i = 0;

btnNext.addEventListener("click", function () {
    ++i;
    if (i >= slides.length) {
        slides[i - 1].classList.remove("block");
        i = 0;
        slides[i].classList.add("block");
    } else {
        slides[i - 1].classList.remove("block");
        slides[i].classList.add("block");
    }
});