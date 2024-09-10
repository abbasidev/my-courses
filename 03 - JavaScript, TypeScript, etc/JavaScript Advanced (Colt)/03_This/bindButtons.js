const conan = {
  name: "Conan",
  city: "Los Angeles",
  sing: function () {
    console.log("This is: ", this);
    console.log(`${this.name} sings LA LA LA`);
  },
};

const btn = document.querySelector("#clickMe");

// بلافاصله اجرا میشوند بدون توجه به این که ما کلیک کردیم یا خیر
// btn.addEventListener("click", conan.sing.call(conan));
// btn.addEventListener("click", conan.sing.apply(conan));

btn.addEventListener("click", conan.sing.bind(conan));

const btn2 = document.querySelector("#clickMe2");
btn2.addEventListener("click", conan.sing);
