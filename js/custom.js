// tabBar jS 样式 点击复制内容
function myFunction(message) {

    var input = document.createElement("input");
    input.value = message;
    document.body.appendChild(input);
    input.select();
    input.setSelectionRange(0, input.value.length), document.execCommand('Copy');
    document.body.removeChild(input);
    alert("复制成功", "text");
}