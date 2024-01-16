let navbar = document.getElementById("mainNav");
let logo = document.querySelector("img");

document.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 0) {
    logo.style.height = "44px";
    navbar.classList.add("bg-black");
    navbar.classList.add("txt-white");
  } else {
    logo.style.height = "64px";
    navbar.classList.remove("bg-black");
    navbar.classList.remove("txt-white");
  }
});
