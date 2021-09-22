function mouseRouser() {
  var body = document.body;
  var img = document.createElement("img");
  img.style.position = "absolute";
  img.style.pointerEvents = "none";
  img.src = "https://cdn.jsdelivr.net/gh/SimpleLifecst/simple@main//angel.gif";
  body.appendChild(img);
  document.addEventListener("mousemove", function (e) {
    var x = e.pageX;
    var y = e.pageY;
    img.style.top = y + "px";
    img.style.left = x + "px";
  });
}
mouseRouser();
