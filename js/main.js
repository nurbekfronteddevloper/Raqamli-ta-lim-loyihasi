const toggleSidebar = () => document.body.classList.toggle("open");
$(window).scroll(function () {
  if ($(window).scrollTop() > 10) {
    $("#navbar").addClass("floatingNav");
  } else {
    $("#navbar").removeClass("floatingNav");
  }
});

const loader = document.querySelector(".loader-one");
console.log(loader);
document.addEventListener("DOMContentLoaded" , () => {
  setTimeout(() =>{
    loader.style.display = "none";
  }) ;

});