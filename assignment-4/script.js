/* Part 2 */
console.log("PART 2");

for (let i = 1; i <= 20; i++) {
	console.log(i);
}

/* Part 3 */
console.log("PART 3");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 5 === 0 && numbers[i] % 3 === 0) {
		console.log("eplekake");
	} else if (numbers[i] % 5 === 0) {
		console.log("kake");
	} else if (numbers[i] % 3 === 0) {
		console.log("eple");
	} else {
		console.log(numbers[i]);
	}
}

/* Part 4 */
const titleElement = document.getElementById("title");

if (titleElement) {
	titleElement.textContent = "Hello, JavaScript";
}

/* Part 5 */
const listOfButtons = document.querySelectorAll("button");

const button1 = listOfButtons[0];
const button2 = listOfButtons[1];
const button3 = listOfButtons[2];

function changeDisplay() {
	const element = document.getElementById("magic");

	if (!element) {
		return;
	}

	element.style.display = "none";
}

function changeVisibility() {
	const element = document.getElementById("magic");

	if (!element) {
		return;
	}

	element.style.display = "block";
	element.style.visibility = "hidden";
}

function reset() {
	const element = document.getElementById("magic");

	if (!element) {
		return;
	}

	element.style.display = "block";
	element.style.visibility = "visible";
}

button1.addEventListener("click", () => changeDisplay());
button2.addEventListener("click", () => changeVisibility());
button3.addEventListener("click", () => reset());

/* Part 6 */
const technologies = [
	"HTML5",
	"CSS3",
	"JavaScript",
	"Python",
	"Java",
	"AJAX",
	"JSON",
	"React",
	"Angular",
	"Bootstrap",
	"Node.js",
];

const listElement = document.getElementById("tech");

if (listElement) {
	technologies.forEach((technology) => {
		const child = document.createElement("li");
		child.textContent = technology;

		listElement.appendChild(child);
	});
}
