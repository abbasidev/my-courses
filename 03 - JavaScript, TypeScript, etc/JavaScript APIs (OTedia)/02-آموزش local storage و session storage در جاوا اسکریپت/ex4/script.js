//// storage event فقط در لوکال استورج قابل استفاده است
//// در سشن استورج قابل استفاده نیست

window.addEventListener("storage", (e) => {
  console.log(e);
});
