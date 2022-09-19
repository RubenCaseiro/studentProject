const input = require('sync-input');


function greet(bot_name, birth_year) {
	console.log("Hello! My name is " + bot_name + ".");
	console.log("I was created in " + birth_year + ".");
}

function remind_name() {
	console.log("Please, remind me your name.");
	let name = input();
	console.log("What a great name you have, " + name + "!");
}

function guess_age() {
	console.log("Let me guess your age.");
	console.log("Enter remainders of dividing your age by 3, 5 and 7.");

	let rem3 = Number(input());
	let rem5 = Number(input());
	let rem7 = Number(input());

	let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

	console.log("Your age is " + age + "; that's a good time to start programming!");
}

function count() {
	console.log("Now I will prove to you that I can count to any number you want.");

	let number = Number(input());
	let current = 0;

	while (current <= number) {
		console.log(current + " !");
		current += 1;
	}
}

function test() {
	console.log("Let's test your programming knowledge.");
    console.log("What is the first thing you learn about in programming?");
    console.log("1. To print \"Hello world\"");
    console.log("2. How to create objects.");
    console.log("3. What are objects.");
    console.log("4. How to fry an egg");

    let quizzAnswer = Number(input());

    if (quizzAnswer != 1){
      while (quizzAnswer != 1) {
        console.log("Please, try again.");
        quizzAnswer = Number(input());
      }
    console.log("Congratulations, have a nice day!");
    }
}

/*function end() {
	console.log("Completed, have a nice day!");
}*/


greet('Aid', '2020')  // change it as you need
remind_name();
guess_age();
count();
test();
//end();
