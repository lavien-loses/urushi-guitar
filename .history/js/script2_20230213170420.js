// スクロールでロゴ色変化//
function Change() {
  var svg = document.getElementById('svg_box')
  const number = window.scrollY;

  if (number > 400) {
    //ここに.svgimgを消して.svg_changeを追加する
    svg.classList.remove("svgimg");
    svg.classList.add("svg_change")
  } else if (number < 500) {
    svg.classList.add("svgimg");
    svg.classList.remove("svg_change");
  }
}
document.addEventListener('scroll', Change);