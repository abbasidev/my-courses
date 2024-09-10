//// DOMContentLoaded Event
//// اگه فایل جاوا اسکریپتی قبل از درخت دام قرار بگیره این قابلیت به کمک ما میاد

function afterLoad() {
  const main = document.getElementById("main");

  main.addEventListener("click", handler);

  function handler(event) {
    main.innerHTML += "Click ";
  }
}

document.addEventListener("DOMContentLoaded", afterLoad);
