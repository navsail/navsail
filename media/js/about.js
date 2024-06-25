var renderPage = true;

//不支持IE浏览器
if (
  navigator.userAgent.indexOf("MSIE") !== -1
) {
  /* Microsoft Internet Explorer detected in. */
  alert(
    "Please view this in a modern browser such as Chrome or Microsoft Edge."
  );
  renderPage = false;
}

/* DOM is ready
			------------------------------------------------*/
$(function () {
  if (renderPage) {
    $("body").addClass("loaded");
  }

  //   $('.tm-current-year').text(new Date().getFullYear());  // 更新版权年份
});




//禁用右键F12
document.oncontextmenu = function() {
  return false;
};

document.onkeydown = function(e) {
  if (e.ctrlKey && e.keyCode == 123) { // 阻止F12快捷键
      e.preventDefault();
      return false;
  }
}