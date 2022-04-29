export function bindSwipeEvent(dom, leftCallBack, rightCallBack) {
  /* 手势的条件*/
  /* 1.必须滑动过*/
  /* 2.滑动的距离50px*/
  var startX = 0
  var distance = 0
  var isMove = false
  dom.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX
  })
  dom.addEventListener('touchmove', function(e) {
    isMove = true
    var moveX = e.touches[0].clientX
    distance = moveX - startX
  })
  dom.addEventListener('touchend', function(e) {
    if (isMove && Math.abs(distance) > 50) {
      if (distance > 0) {
        rightCallBack && rightCallBack.call(this, e)
      } else {
        leftCallBack && leftCallBack.call(this, e)
      }
    }
    /* 重置参数*/
    isMove = false
    startX = 0
    distance = 0
  })
}
