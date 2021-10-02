  function animate(obj,target,callback){
    // 清除一下原先的定时器，防止叠加定时器
    clearInterval(obj.timer)
    obj.timer = setInterval(function(){
    var step = (target - obj.offsetLeft) / 10
    step = step > 0?Math.ceil(step):Math.floor(step)
      
      if(step >=0 && obj.offsetLeft>=target){
        clearTimer(obj.timer,callback)
      } else if(step <= 0 && obj.offsetLeft<=target){
        clearTimer(obj.timer,callback)
      }
      obj.style.left = obj.offsetLeft + step + 'px';
    },15)
  }

  function clearTimer(timer,callback){
    clearInterval(timer)
    // 添加定时器
    if(callback){
      callback(); // 当传入了回调函数 callback 就调用
    }
  }