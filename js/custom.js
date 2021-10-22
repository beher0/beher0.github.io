/**
 * 鼠标跟随 天使精灵
 */
// function mouseRouser() {
//   var body = document.body;
//   var img = document.createElement("img");
//   img.style.position = "absolute";
//   img.style.pointerEvents = "none";
//   img.src = "https://cdn.jsdelivr.net/gh/SimpleLifecst/simple@main//angel.gif";
//   body.appendChild(img);
//   document.addEventListener("mousemove", function (e) {
//     var x = e.pageX;
//     var y = e.pageY;
//     img.style.top = y + "px";
//     img.style.left = x + "px";
//   });
// }
// mouseRouser();



/**
 * 侧边栏
 */

  var slDiv = document.createElement('div')
  slDiv.innerHTML = `<div class="sl-aside-container">
  <div class="sl-item sl-item-show">
    <a href="#">
    <span class="iconfont icon-zhanku"></span>
    <span>用户</span>
    </a>
  </div>
  <div class="sl-item sl-item-show">
    <a href="#">
    <span class="iconfont icon-zhanku"></span>
    <span>用户</span>
    </a>
  </div>
  <div class="sl-item sl-item-show">
    <a href="#">
    <span class="iconfont icon-zhanku"></span>
    <span>用户</span>
    </a>
  </div>
  <div class="sl-item sl-item-show">
    <a href="#">
    <span class="iconfont icon-zhanku"></span>
    <span>用户</span>
    </a>
  </div>
    </div>`

  document.body.appendChild(slDiv)