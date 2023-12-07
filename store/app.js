const leftbtn = document.querySelector(".l-btn");
const rightbtn = document.querySelector(".r-btn");

rightbtn.addEventListener('click', function (event) {
    console.log('done');
    const content = document.querySelector('.product-slide');
    content.scrollLeft += 1100;
    event.preventDefault();

});
leftbtn.addEventListener('click', function (event) {
    console.log('done');
    const content = document.querySelector('.product-slide');
    content.scrollLeft -= 1100;
    event.preventDefault();

});