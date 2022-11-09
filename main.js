/********************Animations Only*********************************************/
const tl = gsap.timeline();

tl.from("header", {
  delay: 0,
  opacity: 0,
  duration: 1,
  y: 30,
});
tl.from("#about", {
  opacity: 0,
  delay: 0,
  y: 10,
  duration: 0.3,
});

tl.from("#services", {
  opacity: 0,
  delay: 0,
  y: 10,
  duration: 0.3,
});

tl.from(".contact", {
  opacity: 0,
  delay: 0,
  y: 10,
  duration: 0.3,
})

  .from("main h1", {
    opacity: 0,
    scale: 1.4,
    duration: 1.3,
  })
  .from(".more", {
    opacity: 0,
    y: 30,
    duration: 1,
  })
  .from(".more i", {
    opacity: 1,
    y: -20,
    delay: 1,
    repeat: -1,
    yoyo: 1,
  });

tl.from("#img1", {
  opacity: 0,
  duration: 1,
  y: "18px",
});

tl.from("#img2", {
  opacity: 0,
  duration: 1,
  y: "-18px",
});

tl.from("#img3", {
  opacity: 0,
  duration: 1,
  x: "24px",
});

tl.from("#img4", {
  opacity: 0,
  duration: 1,
  x: "-28px",
});

/********************Animations Closed*********************************************/
//<i class="ri-close-fill"></i>;

const menu = document.querySelector(".navbarWrapper");
const navbar = document.querySelector("nav#navbar");
const close = document.querySelector(".close");
menu.addEventListener("click", function () {
  navbar.style.display = "block";
  navbar.style.bottom = "-10px";
  navbar.style.transition = "bottom .3s ease";
  menu.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", function () {
  close.style.display = "none";
  navbar.style.display = "none";
  menu.style.display = "block";
});

const listAbout = document.querySelector(".listAbout");
const listServices = document.querySelector(".listServices");
const listHire = document.querySelector(".listHire");
function viewport() {
  if (screen.width < 426 || screen.width < 375 || screen.width < 320) {
    listHire.innerHTML = `<a href="#contact"><i class="ri-suitcase-fill"></i></a>`;
    listServices.innerHTML = `<a href="#services"><i class="ri-service-line"></i></a>`;
    listAbout.innerHTML = `<a href="#about"><i class="ri-question-fill"></i></a>`;

    listHire.style.color = "#fff";
    listServices.style.color = "#fff";
    listAbout.style.color = "#fff";

    listHire.style.fontSize = "19px";
    listServices.style.fontSize = "19px";
    listAbout.style.fontSize = "19px";

    listHire.style.transform = "rotate(-90deg)";
    listServices.style.transform = "rotate(-90deg)";
    listAbout.style.transform = "rotate(-90deg)";
  }
}
viewport();
