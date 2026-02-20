class Todo {
    constructor(title, discription, dueTime, priority) {
        this.title = title
        this.discription = discription
        this.dueTime = dueTime
        this.priority = priority
    }
}


class Project {
    #todos
    #name
    constructor(name) {
        this.#name = name;
        this.#todos = []
    }
    setTodos(title, discription, dueTime, priority) {
        let newTodo = new Todo(title, discription, dueTime, priority)
        this.#todos.push(newTodo)
    }
    getTodos() {
        return this.#todos
    }
    getName() {
        return this.#name
    }
}


class Manager {
    #mainArray
    constructor() {
        this.#mainArray = []
    }
    setMainArray(name) {
        let obj = new Project(name)
        this.#mainArray.push(obj)
    }
    getMainArray() {
        return this.#mainArray
    }
}


export {Project , Manager}