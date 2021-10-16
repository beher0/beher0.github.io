var that = null;
class Tab {
  constructor() {
    this.timesDate = null;
    that = this;
    // 获取 添加按钮
    this.addBtn = document.querySelector(".add-button");
    this.addBtn.addEventListener("click", this.addTab);
    // 获取 nav 和 main
    this.nav = document.querySelector("nav");
    this.main = document.querySelector("main");
    this.init();
  }
  // 1.初始化函数
  init() {
    this.lis = document.querySelectorAll("nav ul li");
    this.sections = document.querySelectorAll("main section");

    for (var i = 0; i < this.lis.length; i++) {
      // 循环li绑定点击事件
      this.lis[i].addEventListener("click", this.changeTab);
      this.lis[i].addEventListener("dblclick", this.editTab);
      this.sections[i].addEventListener("dblclick", this.editTab);

      this.removeBtn = this.lis[i].children[1].addEventListener(
        "click",
        this.removeTab
      );
      //
      this.lis[i].index = i;
    }
  }
  // 编辑内容
  editTab() {
    
    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty(); 
    // console.log(this.index);
    var text = this.children[0].innerHTML;
    this.children[0].innerHTML = '<input type="text" value='+text+'>';
    // this.children[0].select();
    this.children[0].children[0].select();
    // 离开焦点
    console.log(this.children[0].children[0].value);
    this.children[0].children[0].onblur = function(){
      if(this.value !== ''){
        text = this.value;
      }
      this.parentNode.innerHTML = text
    }
    this.children[0].children[0].addEventListener('keyup',function(e){
      if(e.keyCode === 13){
        if(this.value !== ''){
          text = this.value;
        }
        this.parentNode.innerHTML = text
      }
    })
  }
  // 清除 show 类
  clearShow() {
    // for(var i=0;)
    // console.log(that);
    for (var ele of this.lis) {
      ele.classList.remove("show");
    }
    for (var ele of this.sections) {
      ele.classList.remove("showsection");
    }
  }
  // 2.tab切换
  changeTab(e) {
    setTimeout(function(){
      if(e.type){

      } 
    },300)
    that.clearShow();
    this.classList.add("show");
    that.sections[this.index].classList.add("showsection");
  }
  // 3.添加tab
  addTab() {
    that.clearShow();
    var range = Math.random(2);
    var newli =
      '<li class="show"><span>新选项卡</span><span class="icon">&#10006;</span></li>';
    var newsection =
      '<section class="showsection"><span>测试内容' +
      range +
      "</span></section>";
    that.nav.children[0].insertAdjacentHTML("beforeend", newli) &&
      that.lis[0].parentNode.insertAdjacentHTML("beforeend", newli);
    that.main.insertAdjacentHTML("beforeend", newsection) &&
      that.sections[0].parentNode.insertAdjacentHTML("beforeend", newsection);
    that.init();
  }
  // 4.移除tab
  removeTab(e) {
    e.stopPropagation();
    var index = this.parentNode.index;
    // 移除当前索引 index
    that.nav.children[0].removeChild(this.parentNode);
    that.main.removeChild(that.sections[index]);
    that.init();
    index--;
    if (this.parentNode.className === "show") {
      that.clearShow();
      that.lis[index].classList.add("show");
      that.sections[index].classList.add("showsection");
    }
  }
}
new Tab();
