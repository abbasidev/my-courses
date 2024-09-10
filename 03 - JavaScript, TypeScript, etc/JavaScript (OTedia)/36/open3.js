//// Open New Windows - Part 3

const openButton = document.getElementById("open");

openButton.addEventListener("click", function () {
  // open('https://www.google.com' , '_blank' , 'width=400,height=400');
  open(
    "https://www.google.com",
    "_blank",
    "width=400,height=400,left=100,top=150"
  );
});

// open('https://www.google.com' , '_blank' , 'width=400,height=400');
