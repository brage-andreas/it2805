const taskElementIdRegex = /^task-(?<id>\d+)$/;

const taskListCounterElement = document.getElementById("task-list-counter");
const taskListElement = document.getElementById("task-list");
const inputElement = document.getElementById("task-input");
const formElement = document.getElementById("create-task");

if (!taskListCounterElement) {
	throw new Error("Could not find <h1> element with id 'task-list-counter'");
}

if (!taskListElement) {
	throw new Error("Could not find <ul> element with id 'task-list'");
}

if (!inputElement) {
	throw new Error("Could not find <input> element with id 'task-input'");
}

if (!formElement) {
	throw new Error("Could not find <form> element with id 'create-task'");
}

const tasks = [];

function updateTaskListCounter(tasks) {
	const doneTasks = tasks.filter((task) => task.done);

	if (tasks.length) {
		taskListCounterElement.textContent = `Completed ${doneTasks.length}/${tasks.length}`;
	} else {
		taskListCounterElement.textContent = "No tasks added";
	}
}

function addEventListenerToCheckbox(tasks, taskElement) {
	const checkboxElement = taskElement.querySelector("input[type=checkbox]");

	if (!checkboxElement) {
		throw new Error("Could not find checkbox element");
	}

	checkboxElement.addEventListener("change", (event) => {
		const taskElement = event.target.parentElement;
		const taskId = taskElement.id.match(taskElementIdRegex).groups.id;

		if (!taskId) {
			throw new Error("Could not find id of task");
		}

		const task = tasks.find((task) => task.id === taskId);

		if (!task) {
			throw new Error(`Could not find task with id ${taskId}`);
		}

		task.done = checkboxElement.checked;

		if (task.done) {
			taskElement.classList.add("done");
		} else {
			taskElement.classList.remove("done");
		}

		updateTaskListCounter(tasks);
	});
}

function appendTaskToListElement(id, text) {
	const checkboxElement = document.createElement("input");
	checkboxElement.type = "checkbox";
	checkboxElement.id = `task-${id}-checkbox`;

	const taskTextNode = document.createTextNode(text);

	const taskElement = document.createElement("li");
	taskElement.append(checkboxElement, taskTextNode);
	taskElement.id = `task-${id}`;

	return taskElement;
}

function addTask(tasks, text) {
	const id = Date.now().toString();
	const element = appendTaskToListElement(id, text);

	addEventListenerToCheckbox(tasks, element);

	tasks.unshift({
		element,
		done: false,
		text,
		id,
	});

	updateTaskListCounter(tasks);

	return element;
}

formElement.addEventListener("submit", (event) => {
	event.preventDefault();

	const taskText = inputElement.value;

	if (!taskText) {
		return;
	}

	inputElement.value = "";

	const taskElement = addTask(tasks, taskText);

	taskListElement.prepend(taskElement);
});
