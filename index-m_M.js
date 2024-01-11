var idx_lgth = $("#wrapper>div").length;
var srt = 1;

$("section>a").click(function () {
  var idx = $(this).index();
  srt = idx;
  $(this).addClass("on").siblings().removeClass("on");
  $("#wrapper>div").eq(idx).addClass("on").siblings().removeClass("on");
});

setInterval(AutoRun, 3000);

function AutoRun() {
  if (srt == idx_lgth) {
    srt = 0;
  }
  $("section>a").eq(srt).addClass("on").siblings().removeClass("on");
  $("#wrapper>div").eq(srt).addClass("on").siblings().removeClass("on");
  srt++;
}

// 640 이상일때

const wrapper = document.getElementById("wrapImg");
const swiper = document.getElementById("wrapper");
let left_wrap = wrapper.getBoundingClientRect().left;
let hei = wrapper.offsetHeight;
let len = swiper.children.length;
let ul_wid = hei * len;
let per = hei / (window.innerHeight / 20);
let pos = {
  prev: 0,
  now: 0,
  ul: 0,
};
let isDragging = false;

wrapper.addEventListener("mousedown", startDrag, false);
wrapper.addEventListener("touchstart", startDrag, false);
wrapper.addEventListener("mousemove", drag, false);
wrapper.addEventListener("touchmove", drag, false);
wrapper.addEventListener("mouseup", stopDrag, false);
wrapper.addEventListener("touchend", stopDrag, false);

function startDrag(e) {
  e = e || window.event;
  e.preventDefault();
  isDragging = true;
  pos.prev = e.clientX || e.touches[0].clientX - left_wrap;
  pos.now = pos.prev;
}

function drag(e) {
  e = e || window.event;
  e.preventDefault();
  if (isDragging) {
    pos.now = e.clientX || e.touches[0].clientX - left_wrap;
    const diff = pos.now - pos.prev;
    pos.ul += diff;
    moveSlider();
    pos.prev = pos.now;
  }
}

function stopDrag() {
  isDragging = false;
  order = Math.round(pos.ul / hei);
  pos.ul = order * hei;
  moveSlider();
}

function moveSlider() {
  const minTranslateX = -900;
  if (pos.ul > 0) {
    pos.ul = 0;
  }
  if (pos.ul < -(ul_wid - hei)) {
    pos.ul = -(ul_wid - hei);
  }
  if (pos.ul < minTranslateX) {
    pos.ul = minTranslateX;
  }
  swiper.style.transform = `translateX(${pos.ul}px)`;
}
