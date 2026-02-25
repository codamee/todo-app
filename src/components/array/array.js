class Todo {
    constructor(title, description, duetime, priority) {
        this.title = title
        this.description = description
        this.duetime = duetime
        this.priority = priority
    }
}
class Project {
    #name
    #todos
    constructor(name) {
        this.#name = name
        this.#todos = []
    }
    getName() {
        return this.#name
    }
    setArray(title, description, duetime, priority) {
        let obj = new Todo(title, description, duetime, priority)
        this.#todos.push(obj)
    }
    getArray() {
        return this.#todos
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
export { Project, Manager }