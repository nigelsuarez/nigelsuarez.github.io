function clearTrans(a, b, c, d, e) {
  document.getElementById("project1").style.transform = a;
  document.getElementById("project2").style.transform = b;
  document.getElementById("project3").style.transform = c;
  document.getElementById("project4").style.transform = d;
  document.getElementById("project5").style.transform = e;
}
function webContent() {
  document.getElementById("title1").innerHTML = "Website";
  clearTrans("scale(1.05)", "none", "none", "none", "none");
  document.getElementById("title1").style.backgroundColor = "rgb(228,79,38)";
  document.getElementById("title1").style.color = "white";
}
function jsContent() {
  document.getElementById("title1").innerHTML = "JavaScript";
  clearTrans("none", "scale(1.05)", "none", "none", "none");
  document.getElementById("title1").style.backgroundColor = "rgb(247, 224, 24)";
  document.getElementById("title1").style.color = "black";
}
function cppContent() {
  document.getElementById("title1").innerHTML = "C++";
  clearTrans("none", "none", "scale(1.05)", "none", "none");
  document.getElementById("title1").style.backgroundColor = "rgb(1, 10, 91)";
  document.getElementById("title1").style.color = "white";
}
function pyContent() {
  document.getElementById("title1").innerHTML = "Python";
  clearTrans("none", "none", "none", "scale(1.05)", "none");
  document.getElementById("title1").style.backgroundColor = "rgb(29, 34, 68)";
  document.getElementById("title1").style.color = "rgb(254,209,66)";
}
function blendContent() {
  document.getElementById("title1").innerHTML = "Blender";
  clearTrans("none", "none", "none", "none", "scale(1.05)");
  document.getElementById("title1").style.backgroundColor =
    "rgb(255, 193, 134)";
  document.getElementById("title1").style.color = "rgb(254,109,1)";
}
