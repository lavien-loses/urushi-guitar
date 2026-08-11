
// スクロールでロゴ色変化//
function Change() {
  var svg = document.getElementById('svg_box')
  const number = window.scrollY;

  if (number > 400) {
    //ここに.svgimgを消して.svg_changeを追加する
    svg.classList.remove("svgimg");
    svg.classList.add("svg_change")
  } else if (number <= 400) {
    svg.classList.add("svgimg");
    svg.classList.remove("svg_change");
  }
}
document.addEventListener('scroll', Change);

function home() {
  var btn = document.getElementById('back_btn');
  const now = window.scrollY;

  if (now > 500) {
    btn.style.display = "block";
    btn.style.transition = "1s";
    btn.style.opacity = "0.75";
  } else {
    btn.style.display = "none";
    btn.style.opacity = "0";
  }
}
document.addEventListener('scroll', home);

