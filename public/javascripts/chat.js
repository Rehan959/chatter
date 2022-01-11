var clientIo = io();
var btn = document.querySelector("#btn");
var usr = document.querySelector(".usr");
var txtarea = document.querySelector("textarea");
var msgfield = document.querySelector(".msgfield");

btn.addEventListener("click", () => {
  clientIo.emit("New message", {
    sender: usr.textContent,
    msg: txtarea.value,
  });
  txtarea.value = "";
});

clientIo.on("msg", (message) => {
  msgfield.innerHTML += `
<div class="msg">
<span class="text-primary">
${message.sender} 
</span>:${message.msg}
</div>
    `;
});
