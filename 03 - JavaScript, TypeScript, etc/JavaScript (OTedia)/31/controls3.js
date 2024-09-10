// Controls - Part 3

const marriageMenu = document.querySelector('select[name="marriage"]');
const educationMenu = document.querySelector('select[name="education"]');

const button = document.querySelector("button");
button.addEventListener("click", handler);

function handler() {
  const div = document.getElementById("result");
  div.innerHTML = `<p>شما ${marriageMenu.value} هستید و دارای مدرک ${educationMenu.value} هستید.</p>`;
}

// educationMenu.value = 'دکتری';
// educationMenu.value = 'فوق دیپلم';
//// چون فوق دیپلم رو در کدهای اچ تی ام ال نداریم هیچ گزینه ای انتخاب نمیشود
// educationMenu.selectedIndex = 0;
