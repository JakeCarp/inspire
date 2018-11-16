

const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/JakeCarpenter/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}


let todoList = []

export default class TodoService {

	getTodos(draw) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => {
				todoList = res.data.data
				console.log(todoList)
				draw(todoList)
			})
			.catch(logError)
	}

	addTodo(todo, getTodos) {

		todoApi.post('', todo)
			.then(function (res) {
				todoList = res.data.data
				getTodos()
			})
			.catch(logError)
	}

	toggleTodoStatus(todo, successFn) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		//var todo = todoList[todoId]///MODIFY THIS LINE
		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todo._id, todo)
			.then(function (res) {
				todo.completed + !todo.completed
				successFn()
			})
			.catch(logError)
	}

	removeTodo(todoId, successFn) {
		todoApi.delete(todoId)
			.then(function (res) {
				successFn()
			})
			.catch(logError)
	}

}
