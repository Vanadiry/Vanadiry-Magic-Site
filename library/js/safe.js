window.onkeydown =
  window.onkeyup =
  window.onkeypress =
    function (event) {
      // 判断是否按下F12，F12键码为123
      if (event.keyCode == 123) {
        event.preventDefault(); // 阻止默认事件行为
        window.event.returnValue = false;
      }
    };

//屏蔽选中
document.onselectstart = function (event) {
  if (window.event) {
    event = window.event;
  }
  try {
    var the = event.srcElement;
    if (
      !(
        (the.tagName == "INPUT" && the.type.toLowerCase() == "text") ||
        the.tagName == "TEXTAREA"
      )
    ) {
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
};
//屏蔽复制
document.oncopy = function (event) {
  if (window.event) {
    event = window.event;
  }
  try {
    var the = event.srcElement;
    if (
      !(
        (the.tagName == "INPUT" && the.type.toLowerCase() == "text") ||
        the.tagName == "TEXTAREA"
      )
    ) {
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
};
//屏蔽剪贴
document.oncut = function (event) {
  if (window.event) {
    event = window.event;
  }
  try {
    var the = event.srcElement;
    if (
      !(
        (the.tagName == "INPUT" && the.type.toLowerCase() == "text") ||
        the.tagName == "TEXTAREA"
      )
    ) {
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
};
