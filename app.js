//Movement Animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');
const size1 = document.querySelector('button.size1');
const size2 = document.querySelector('button.size2');
const size3 = document.querySelector('button.size3');
const size4 = document.querySelector('button.size4');

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    console.log(window.innerHeight / 2);
    let xAxis = (window.innerWidth / 2 - e.pageX) / 11;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 18;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

//Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "all 0.1s ease";
    sneaker.style.transition = "all 0.5s ease";
    description.style.transition = 'all 0.3s ease';
    sizes.style.transition = 'all 0.2s ease';
    purchase.style.transition = 'all 0.1s ease';
    //Pop out
    title.style.transform = 'translateZ(150px)';
    sneaker.style.transform = 'translateZ(200px) rotateZ(-45deg)';
    description.style.transform = 'translateZ(125px)';
    sizes.style.transform = 'translateZ(100px)';
    purchase.style.transform = 'translateZ(75px)';
})

//Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    description.style.transition = 'none';
    sizes.style.transition = 'none';
    purchase.style.transition = 'none';
    //Pop in
    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    description.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    purchase.style.transform = 'translateZ(0px)';
})

size1.addEventListener("click", (e) => {
    size1.style.background = "#585858";
    size1.style.color = "white";
    size2.style.background = "white";
    size2.style.color = "#585858";
    size3.style.background = "white";
    size3.style.color = "#585858";
    size4.style.background = "white";
    size4.style.color = "#585858";
})

size2.addEventListener("click", (e) => {
    size2.style.background = "#585858";
    size2.style.color = "white";
    size1.style.background = "white";
    size1.style.color = "#585858";
    size3.style.background = "white";
    size3.style.color = "#585858";
    size4.style.background = "white";
    size4.style.color = "#585858";
})

size3.addEventListener("click", (e) => {
    size3.style.background = "#585858";
    size3.style.color = "white";
    size1.style.background = "white";
    size1.style.color = "#585858";
    size2.style.background = "white";
    size2.style.color = "#585858";
    size4.style.background = "white";
    size4.style.color = "#585858";
})

size4.addEventListener("click", (e) => {
    size4.style.background = "#585858";
    size4.style.color = "white";
    size1.style.background = "white";
    size1.style.color = "#585858";
    size2.style.background = "white";
    size2.style.color = "#585858";
    size3.style.background = "white";
    size3.style.color = "#585858";
})