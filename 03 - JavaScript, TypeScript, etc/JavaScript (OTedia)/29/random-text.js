//// Random Text

const texts = [
  `“There is only one way to avoid criticism: do nothing, say nothing, and be nothing.”  – Aristotle`,
  `“I am thankful for all of those who said NO to me. It’s because of them I’m doing it myself.” – Albert Einstein`,
  `“The possession of anything begins in the mind.” – Bruce Lee`,
  `“I cannot live without books.” ― Thomas Jefferson`,
  `“Happiness is when what you think, what you say, and what you do are in harmony.” – Mahatma Gandhi`,
  `“Nearly all men can stand adversity, but if you want to test a man’s character, give him power.” – Abraham Lincoln`,
  `“Success is a lousy teacher. It seduces smart people into thinking they can’t lose.”- Bill Gates`,
  `“What separates the winners from the losers is how a person reacts to each new twist of fate.” – Donald Trump`,
  `“You can’t blame gravity for falling in love.” – Albert Einstein`,
  `“Do you want to know who you are? Don't ask. Act! Action will delineate and define you.” ― Thomas Jefferson`,
];

const number = Math.floor(Math.random() * 10);

const p = document.querySelector("#main p");
p.textContent = texts[number];
