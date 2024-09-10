console.log(JSON);

const post = {
  id: 123,
  title: "Post One",
  body: "This is the body",
};

// Convert to JSON string
const str = JSON.stringify(post);

console.log(str);
// باید اول تبدیلش کنیم به آبجکت تا بتونیم به آیدی به این صورت دسترسی داشته باشیم
console.log(str.id); // undefined

// Parse JSON
const obj = JSON.parse(str);

console.log(obj);
console.log(obj.id);

// JSON & arrays
const posts = [
  {
    id: 1,
    title: "Post One",
    body: "This is the body",
  },
  {
    id: 2,
    title: "Post Two",
    body: "This is the body",
  },
];

const str2 = JSON.stringify(posts);

console.log(str2);
