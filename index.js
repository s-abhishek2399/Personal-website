var navList = document.getElementById("nav-lists");
function Show() {
  navList.classList.add("_Menus-show");
}

function Hide() {
  navList.classList.remove("_Menus-show");
}

//project
var left = document.getElementById("left");
var right = document.getElementById("right");

function scrll() {
  var body = document.getElementsByClassName("warper");
  body[0].scrollLeft += 90;
}

function scrlll() {
  var body = document.getElementsByClassName("warper");
  body[0].scrollLeft -= 90;
}

right.addEventListener("click", scrll);
left.addEventListener("click", scrlll);
//project end
