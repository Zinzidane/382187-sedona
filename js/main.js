var link = document.querySelector(".search-btn");
var popup = document.querySelector(".search-form");
var dayIn = popup.querySelector("[name=day-in]");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("search-form-show");
    dayIn.focus();
})
