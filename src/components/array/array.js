class Todo {
    constructor(title, discription, duetime, priority) {
        this.title = title
        this.discription = discription
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
    setArray(title, discription, duetime, priority) {
        let obj = new Project(title, discription, duetime, priority)
        this.#todos.push(obj)
    }
    getArray() {
        return this.#todos
    }
}

class Manager {
    #mainArray
    constructor() {
        this.mainArray = []
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