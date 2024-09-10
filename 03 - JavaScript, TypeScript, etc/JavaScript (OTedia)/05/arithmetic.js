let num1 = 10,
  num2 = 20,
  num3 = 2.5,
  num4 = 5,
  answer;

answer = num1 + num2; // answer = 30
answer = num1 - num2; // answer = -10
answer = num2 * num3; // answer = 50
answer = answer / num4; // answer = 10
answer = 10 % 3; // answer = 1
answer = 10 ** 3; // answer = 1000

answer += 100; // answer = 1100
answer -= 200; // answer = 900
answer *= 2; // answer = 1800
answer /= 3; // answer = 600
answer %= 7; // answer = 5
answer **= 3; // answer = 125

answer++; // answer = 126
answer--; // answer = 125
++answer; // answer = 126
--answer; // answer = 125

let a = 4,
  b = 5;

answer = a++ * b++; // answer = 4 * 5 = 20
answer = ++a * ++b; // answer = 6 * 7 = 42
answer = a++ * --b; // answer = 6 * 6 = 36

console.log(answer);
