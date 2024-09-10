const outer = document.getElementById("outer");
const inner = document.getElementById("inner");

const observer1 = new IntersectionObserver(
  (entries, ob) => {
    // console.log(entries);
  },
  {
    // rootMargin: "100px",
    // rootMargin: "-100px",
    threshold: 0.5,
    threshold: [0.25, 0.5, 0.75, 1],
  }
);

observer1.observe(outer);

const observer2 = new IntersectionObserver(
  (entries) => {
    console.log(entries);
  },
  {
    root: outer,
    // threshold: 0.4,
    rootMargin: "-100px",
  }
);

observer2.observe(inner);
