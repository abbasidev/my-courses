////////////////////////////////////////

//// switch Statement

//// switch(expression){
//// 	case value1:
//// 		statements1
//// 		break;
//// 	case value2:
//// 		statements2
//// 		break;
//// 	case value3:
//// 		statements3
//// 		break;
//// 	default:
//// 		statements4
//// }

////////////////////////////////////////

let i = 10;
switch (i) {
  case 10:
    console.log("A");
    break;
  case 20:
    console.log("B");
    break;
  case 30:
    console.log("C");
    break;
  default:
    console.log("D");
}

////////////////////////////////////////

let grade = 20;
switch (true) {
  case grade >= 0 && grade < 5:
    console.log("خیلی ضعیف");
    break;
  case grade >= 5 && grade < 10:
    console.log("ضعیف");
    break;
  case grade >= 10 && grade < 15:
    console.log("خوب");
    break;
  case grade > 15 && grade <= 20:
    console.log("عالی");
    break;
  default:
    console.log("نمره نامعتبر است");
}

////////////////////////////////////////
