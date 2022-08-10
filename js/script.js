function clearTrans(a, b, c, d, e) {
  document.getElementById("project1").style.transform = a;
  document.getElementById("project2").style.transform = b;
  document.getElementById("project3").style.transform = c;
  document.getElementById("project4").style.transform = d;
  document.getElementById("project5").style.transform = e;
}
function webContent() {
  document.getElementById("title1").innerHTML = "WEBSITE";
  clearTrans("scale(1.05)", "none", "none", "none", "none");
}
function jsContent() {
  document.getElementById("title1").innerHTML = "JAVASCRIPT";
  clearTrans("none", "scale(1.05)", "none", "none", "none");
}
function cppContent() {
  document.getElementById("title1").innerHTML = "C++";
  clearTrans("none", "none", "scale(1.05)", "none", "none");
}
function pyContent() {
  document.getElementById("title1").innerHTML = "PYTHON";
  clearTrans("none", "none", "none", "scale(1.05)", "none");
}
function blendContent() {
  document.getElementById("title1").innerHTML = "BLENDER";
  clearTrans("none", "none", "none", "none", "scale(1.05)");
}
