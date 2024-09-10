/*
  COMMON FETCH OPTIONS
  method: HTTP method you want to use
  body: Data you want to send. Usually to be put in a database, etc
  headers: Any HTTP headers you want to send
*/

//// way1
//// function createPost(post) {
////       title: post.title,
////       body: post.body,
//// }

//// way2 (destructuring)
//// function createPost({ title, body }) {
////       title: title, === title,
////       title,
////       body,
//// }

function createPost({ title, body }) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-Type": "application/json",
      token: "abc123",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

createPost({ title: "My Post", body: "This is my Post" });
