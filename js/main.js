const toggleSidebar = () => document.body.classList.toggle("open");
$(window).scroll(function () {
  if ($(window).scrollTop() > 10) {
    $("#navbar").addClass("floatingNav");
  } else {
    $("#navbar").removeClass("floatingNav");
  }
});
