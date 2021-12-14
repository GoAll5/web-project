let before_loadtime = new Date().getTime();


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


window.onload = Pageloadtime;
function Pageloadtime() {
    let aftr_loadtime = new Date().getTime();

    let pgloadtime = (aftr_loadtime - before_loadtime) / 1000

    let par = document.createElement("p");
    let text = document.createTextNode(' Load time: '+pgloadtime+' s');
    par.appendChild(text);
    let element = document.getElementsByTagName("footer");
    element[0].appendChild(par);
}