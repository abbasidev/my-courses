let url = new URL(
  "https://user:pass@developer.mozilla.org:8080/en-US/docs/Web/API/URL_API?param=test#myhash"
);
console.log(url.host);
console.log(url.hostname);
console.log(url.pathname);
console.log(url);

url.host = "otedia.com";
url.password = 1234;
url.port = 441;
url.searchParams.set("a", 50);
url.searchParams.set("b", 30);
url.searchParams.delete("param");

console.log(url.href);
console.log(url);
console.log(url.search);
console.log(url.searchParams);
console.log(url.searchParams.toString());
console.log(url.searchParams.get("c"));
console.log(url.searchParams.get("b")); // always returns string

let params = new URLSearchParams({ d: 44, m: 55 });
console.log(params.toString());

params.append("f", "66");
params.delete("m");
console.log(params.has("f"));
console.log(params.has("m"));
console.log(params.toString());
params.append("f", 441);
console.log(params.get("f"));
console.log(params.getAll("f"));
console.log(params.toString());
params.set("f", 88);
console.log(params.toString());
