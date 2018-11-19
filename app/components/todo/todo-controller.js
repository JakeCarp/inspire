import TodoService from "./todo-service.js";



var todoService = new TodoService

// Use this getTodos function as your callback for all other edits
function getTodos() {
	//FYI DONT EDIT ME :)
	todoService.getTodos(draw)
}

function draw(todos) {
	//WHAT IS MY PURPOSE?
	//BUILD YOUR TODO TEMPLATE HERE
	var template = ''
	let todocounter = 0
	//DONT FORGET TO LOOP
	todos.forEach(todo => {
		template += `
		<div class="form-family">
			<input type="checkbox" id="${todo._id}" ${todo.completed ? "checked" : ''} name="todo" onchange="app.controllers.todoController.toggleTodoStatus('${todo._id}')"/> <label for="todo" class="words">${todo.description}</label>
		</div> 
		`
		todocounter++
		if (todo.completed) {
			template += `
			<button onclick="app.controllers.todoController.removeTodo('${todo._id}', event)">Remove</button>
			`
		}
	});
	document.getElementById('todoCounter').innerText = JSON.stringify(todocounter)
	document.getElementById('todo-list').innerHTML = template
}


export default class TodoController {
	constructor() {
		todoService.getTodos(draw)
	}
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again


	addTodoFromForm(e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		var form = e.target
		var todo = {
			description: form.newTodo.value
		}

		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
		form.reset()
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		let data = {
			completed: document.getElementById(todoId).checked,
			_id: todoId
		}
		todoService.toggleTodoStatus(data, getTodos)
		// YEP THATS IT FOR ME
	}

	removeTodo(todoId, e) {
		e.preventDefault()
		// ask the service to run the remove todo with this id
		todoService.removeTodo(todoId, getTodos)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}



}
