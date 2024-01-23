let a1 = document.querySelector(".Simple");
let a2 = document.querySelector(".Speedy");
let a3 = document.querySelector(".Easy");
a1.addEventListener("click", () => {
    document.querySelector(".Simple_Bookmarking").classList.remove("hide");
    document.querySelector(".Speedy_Searching").classList.add("hide");
    document.querySelector(".Easy_Sharing").classList.add("hide");
    document.querySelector(".el1").classList.add("activ");
    document.querySelector(".el2").classList.remove("activ");
    document.querySelector(".el3").classList.remove("activ");
});
a2.addEventListener("click", () => {
    document.querySelector(".Simple_Bookmarking").classList.add("hide");
    document.querySelector(".Speedy_Searching").classList.remove("hide");
    document.querySelector(".Easy_Sharing").classList.add("hide");
    document.querySelector(".el1").classList.remove("activ");
    document.querySelector(".el2").classList.add("activ");
    document.querySelector(".el3").classList.remove("activ");
});
a3.addEventListener("click", () => {
    document.querySelector(".Simple_Bookmarking").classList.add("hide");
    document.querySelector(".Speedy_Searching").classList.add("hide");
    document.querySelector(".Easy_Sharing").classList.remove("hide");
    document.querySelector(".el1").classList.remove("activ");
    document.querySelector(".el2").classList.remove("activ");
    document.querySelector(".el3").classList.add("activ");
});
document.querySelectorAll(".Quest .q").forEach((el) => {
    el.addEventListener("click", () => {
          el.classList.toggle("mark");
          el.classList.toggle("new");
    })
})