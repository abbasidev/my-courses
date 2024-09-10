//// Infinite Scroll Project
const main = document.querySelector("#main");

const limit = 5;
let nextPage = 1;
let ready = true;

async function showNextPage() {
  if (!ready) {
    return;
  }
  ready = false;
  const response = await fetch(
    `http://localhost/load.php?limit=${limit}&page=${nextPage}`
  );
  const books = await response.json();
  nextPage++;
  if (books.length) {
    let html = "";
    for (let book of books) {
      html += `<article>
                        <h2 class="title">${book.title}</h2>
                        <p class="description">${book.description}</p>
                    </article>`;
    }
    main.innerHTML += html;
    if (nextPage > 2) {
      document.documentElement.scrollBy({
        top: 200,
        behavior: "smooth",
      });
    }
    ready = true;
  } else {
    main.innerHTML += `<article>
                                <h2 style="text-align:center">No more</h2>
                           </article>`;
    document.documentElement.scrollBy({
      top: 100,
      behavior: "smooth",
    });
  }
}

showNextPage();

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 150) {
    showNextPage();
  }
});
