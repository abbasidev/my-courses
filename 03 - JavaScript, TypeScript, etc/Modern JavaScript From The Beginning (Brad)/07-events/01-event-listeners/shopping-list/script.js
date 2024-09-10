const clearBtn = document.querySelector("#clear");

////////////////////////////////////////////////////

// // JavaScript Event Listener
// clearBtn.onclick = function () {
//   console.log("Clear Items");
// };

////////////////////////////////////////////////////

// // addEventListener() // بهترین روش برای اضافه کردن رویداد
// clearBtn.addEventListener("click", () =>
//   alert("Clear Items (addEventListener)")
// );

////////////////////////////////////////////////////

function onClear() {
  alert("Clear Items");
}

// Use named function
clearBtn.addEventListener("click", onClear);
// removeEventListener()
setTimeout(() => clearBtn.removeEventListener("click", onClear), 2000);
// بعد از دو ثانیه فانکشن انکلیر حذف میشود
