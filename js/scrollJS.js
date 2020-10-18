var ul = document.querySelector(".main_ul");
var li = document.querySelectorAll('.main_ul li');
var move = 0;
var count = 0;
ul.style.marginLeft = move;

// 找到的滑鼠滾輪事件
function mouse_wheel(e) {
  e = e || window.event;
  e.preventDefault();  //preventDefault停止事件的默認動作
  if (e.wheelDelta <= 0 || e.detail > 0) {//wheelDelta返回一個整數，負值表示鼠標滾輪向下滾動
    if (count > li.length - 6 ) {return;}
    move = move - 410;
    ul.style.marginLeft = move + "px";
    count++;
    
  } else {
    count--;
    if (count < 0) {count = 0;};
    if (parseInt(ul.style.marginLeft) == 0) {return;}
    move = move + 410;
    ul.style.marginLeft = move + "px";
  }

}

// hook event listener on window object
if ("onmousewheel" in window) {//滾動滑鼠滾輪為 mousewheel 事件，可由元素 (element) 的 onmousewheel 屬性 (attribute) 設定相關的事件處理程式碼。
  window.onmousewheel = mouse_wheel;
} else if ("onmousewheel" in document) {
  document.onmousewheel = mouse_wheel;
} else if ("addEventListener" in window) {
  window.addEventListener("mousewheel", mouse_wheel, false);//addEventListener()設置了一個函數，只要將指定事件傳遞給目標，該函數就會被調用
  window.addEventListener("DOMMouseScroll", mouse_wheel, false);
}


$(document).ready(function () {
  $(function () {
      $('.btnright').click(function () {
        
        // ul.style.marginLeft =-3690+ "px";
        ul.style.marginLeft =-3460+ "px";

      });
  });

});

$(document).ready(function () {
  $(function () {
      $('.btnleft').click(function () {
        
        ul.style.marginLeft = 0+ "px";
      });
  });

});