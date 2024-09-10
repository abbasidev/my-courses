//// Submit & Reset Events

const form = document.querySelector("form");
form.addEventListener("submit", submitForm);
form.addEventListener("reset", resetForm);

function submitForm(event) {
  const input = document.getElementById("search");
  if (input.value.length < 3) {
    input.nextElementSibling.innerHTML = "Please enter at least 3 characters.";
    event.preventDefault();
  }
}

function resetForm(event) {
  const input = document.getElementById("search");
  input.nextElementSibling.innerHTML = "The form was reset.";
}

const button = document.querySelector('button[type="button"]');
button.addEventListener("click", () => {
  // form.submit();
  form.reset();
});
