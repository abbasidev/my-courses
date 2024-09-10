//// location Object یکی از آبجکت های بام هستش

const href = document.getElementById("href");
const google = document.getElementById("google");
const assign = document.getElementById("assign");
const replace = document.getElementById("replace");
const reload = document.getElementById("reload");
const details = document.getElementById("details");
const p = document.querySelector("p");

href.addEventListener("click", () => alert(location.href));

google.addEventListener(
  "click",
  () => (location.href = "https://www.google.com")
);

assign.addEventListener("click", () =>
  location.assign("https://www.google.com")
);

replace.addEventListener("click", () =>
  location.replace("https://www.google.com")
);

reload.addEventListener("click", () => location.reload(true));

details.addEventListener("click", function () {
  let str = `href: ${location.href} <br />
    hash: ${location.hash} <br />
    host: ${location.host} <br />
    hostname: ${location.hostname} <br />
    pathname: ${location.pathname} <br />
    port: ${location.port} <br />
    protocol: ${location.protocol} <br />
    search: ${location.search}`;

  p.innerHTML = str;
});
