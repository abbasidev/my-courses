/////////////////////////////////////////
//// Function Declaration
function showBio() {
  console.log("First name = Abbas");
  console.log("Last name = Moqaddam");
  console.log("Age = 33");
}
showBio();
showBio();

/////////////////////////////////////////
//// Function Expression
const showBio2 = function () {
  console.log("First name = Abbas");
  console.log("Last name = Moqaddam");
  console.log("Age = 33");
};
showBio2();
showBio2();

/////////////////////////////////////////
let func1 = showBio2;
func1();
