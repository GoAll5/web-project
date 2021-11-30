console.log("hell")


//Когда React
var btnContainer = document.getElementsByClassName("menu__list");

var btns = btnContainer[0].getElementsByClassName("menu__item");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
