/** @type {import('tailwindcss').Config} */
module.exports = {
  //// content: []
  //// آدرس دهی برای کانفیگ تیلویند
  content: ["./public/**/*.{html,js}"],
  theme: {
    //// extend:{}
    //// در این قسمت میتونیم چیزایی که نیاز داریم و در تیلویند نیست رو اضافه کنیم
    extend: {
      colors: {
        primary: "#ff6363",
        secondary: {
          100: "#e2e2d5",
          200: "#888883",
        },
      },
      fontFamily: {
        encodeSans: ["Encode Sans"],
        nunito: ["Nunito"],
      },
    },
  },
  plugins: [],
};
