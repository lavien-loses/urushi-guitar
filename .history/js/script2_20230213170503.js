
window.onscroll = () => {
  const now = window.scrollY;
  const size = window.innerHeight;
  const lpage = document.getElementById('mask');
  const rpage = document.getElementById('mask2');
  const k_1 = document.getElementById('k1');
  const k_3 = document.getElementById('k3');
  const link1 = document.getElementById('a_switch');
  const link2 = document.getElementById('a_switch2');

  if (now >= size * 4) {
    if (now && size) {
      lpage.style.opacity = "0";
      rpage.style.opacity = "0";
      k_1.classList.add("k_h");
      k_3.classList.add("k_h");
      a_switch.style.display = "block"
      a_switch2.style.display = "block"
    }
  } else if (now >= size * 3) {
    if (now && size) {
      rpage.style.opacity = "1";
      lpage.style.opacity = "1";
      k_1.classList.remove("k_h");
      k_3.classList.remove("k_h");
    }
  }
  else if (now > size * 2) {
    if (now && size) {
      lpage.style.opacity = "1";
      rpage.style.opacity = "0";
      k_1.classList.remove("k_h");
      k_3.classList.remove("k_h");
    }
  } else if (now > size) {
    if (now && size) {
      lpage.style.opacity = "0";
      rpage.style.opacity = "1";
      k_1.classList.remove("k_h");
      k_3.classList.remove("k_h");
    }
  }
  else {
    lpage.style.opacity = "1";
    rpage.style.opacity = "1";
    k_1.classList.remove("k_h");
    k_3.classList.remove("k_h");
    a_switch.style.display = "none"
    a_switch2.style.display = "none"
  }
}