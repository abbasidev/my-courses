//// Work with JSON format
const data = document.querySelector("#data");
const send = document.querySelector("#send");

const books = [
  {
    title: "Professional WordPress Plugin Development, 2nd Edition",
    author: {
      firstname: "Brad",
      lastname: "Williams",
    },
    year: 2020,
  },
  {
    title: "Professional JavaScript for Web Developers, 4th Edition",
    author: {
      firstname: "Matt",
      lastname: "Frisbie",
    },
    year: 2019,
  },
  {
    title: "JavaScript Definitive Guide - 7th",
    author: {
      firstname: "David",
      lastname: "Flanagan",
    },
    year: 2020,
  },
];

send.addEventListener("click", function () {
  let formData = new FormData();
  formData.append("json", JSON.stringify(books));

  const xhr = new XMLHttpRequest();
  xhr.open("POST", `json.php`);
  xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState == 4) {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
        let array = JSON.parse(xhr.responseText);
        console.log(array);
        for (let title of array) {
          data.innerHTML += title + "<br /><br />";
        }
      } else {
        data.innerHTML = "Error: " + xhr.status;
      }
    }
  });
  xhr.send(formData);
});
