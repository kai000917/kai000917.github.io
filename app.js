//Movement Animation
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Items
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

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
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
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