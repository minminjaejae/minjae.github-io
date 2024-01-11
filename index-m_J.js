/* main1: about us 
----------------------------- */
/* main1: about1 bg
        0) 모든 객체 opacity 0 -> 1
        1) circle 방향 : top -> bottom
        2) orange-line 방향 : bottom -> top 이때, txtBox title 등장완료.
        3) 1과 2가 1의 bottom에 만나면, dotted-line 4개 생성. txtBox p 등장완료.
        4) circle 중앙 멈춤. dotted-line1 멈춤. 
        5) dotted-line2가 circle의 top 위치에 멈춤. 
        6) 나머지 dotted-line3, 4는 orange-line와 같이 움직임
        7) orange-line이 top 방향으로 화면에서 사라지면,
        8) circle이 bottom 방향으로 사라짐.
        9) circle이 사라지면 dotted-line 모두 top방향으로 사라짐.
        10) 모든 객체 opacity 1 -> 0 */

/*  main1: about2 bg
        0) 모든 객체 opacity 0 -> 1
        1) circle이 화면 bottom에서 top 방향으로 움직임. 사이즈 화면 200% -> 60% 정도
        2) circle이 2/3까지 채워졌을 때 txtBox title 등장
        3) circle의 사이즈가 줄어들면서 txtBox p 등장. 사이즈 화면 30% 정도
        4) circle이 top에 도착했을때 모든 txtBox 등장 완료.
        5) circle이 top으로 사라지면서 txtBox opacity 1 -> 0 */

/* main1: about1 bg 배경컬러 스르륵.. 흑->백 
const headerWrp = document.querySelector(".header-wrapper");
const abCtn = document.querySelector(".about-container");

addEventListener("scroll", () => {
  let abCtnOffH = abCtn.offsetTop + headerWrp.offsetHeight;
  console.log(abCtnOffH);
  headerWrp.classList.toggle("active", scrollY > abCtnOffH);
});*/

/* main5: contact us 
----------------------------- */
// main5: submit 버튼 내용이 없으면 alert('필수 내용을 입력해주세요.');

const form = document.forms.cttForm;
const input = form.contact;
// console.log(input);
const submitBtn = document.querySelector(".ctt-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let formValue = "";

  if (formValue) {
    alert("내용이 전송되었습니다.");
  } else {
    alert("내용을 입력해주세요.");
  }
});
