//// JSON.parse() Method
const str = `{
	"title": "JavaScript Everywhere",
	"author": {
	    "firstname": "Adam",
	    "lastname": "Scott"
	},
	"year": 2020,
	"releaseDate": "2020-02-25"
 }`;

let book = JSON.parse(str);
console.log(book);
console.log(book.title);

/////////////////////////////////////////

function reviver(key, value) {
  if (key == "releaseDate") {
    return new Date(value);
  } else {
    return value;
  }
}

book = JSON.parse(str, reviver);
console.log(book);
console.log(book.releaseDate.getFullYear());
