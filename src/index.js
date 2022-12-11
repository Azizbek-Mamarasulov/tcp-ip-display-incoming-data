window.onload = () => {
  const socket = io();
  socket.on("msg", (data) => {
    createMsg(data);
  });
};

function createMsg(msg) {
  const div = document.createElement("div");
  div.className = "msg-container";
  div.insertAdjacentHTML("beforeend", `<p>${msg.data}</p>`);
  div.insertAdjacentHTML(
    "beforeend",
    `<p class="msg-date">${getDate(msg.date)}</p>`
  );
  document.querySelector("#msgs").insertAdjacentElement("afterbegin", div);
}

function getDate(date) {
  const d = new Date(date);
  return `📆${d.toLocaleDateString()} 🕐${d.toLocaleTimeString()}`;
}
