import "./styles.css"
import { Project, Manager } from "./components/array/array.js"
import { form } from "./components/form/form.js"
import { createAddProjectOverlay } from "./components/addProject/addProject.js"

function addTodoBtn() {
    let formContainer = document.querySelector(".formContainer")
    let addTodoBtn = document.querySelector(".addTodo")
    addTodoBtn.addEventListener("click", () => {
        let formElem = formContainer.querySelector("form")
        if (formElem) {
            formElem.reset()
        }
        editingIndex = null
        formContainer.style.visibility = "visible"
    })
}

let manager = new Manager()
manager.setMainArray("Default")
let currentProjectIndex = 0
let editingIndex = null

function getCurrentProject() {
    return manager.getMainArray()[currentProjectIndex]
}

function getFormData() {
    let formContainer = document.querySelector(".formContainer")
    let formElem = formContainer.querySelector('form')

    if (!formElem) return

    formElem.addEventListener("submit", (evt) => {
        evt.preventDefault()
        formContainer.style.visibility = "hidden"
        let formData = new FormData(formElem)
        let data = Object.fromEntries(formData.entries())
        if (editingIndex === null) {
            getCurrentProject().setArray(data.title, data.description, data.duetime, data.priority)
        } else {
            let todos = getCurrentProject().getArray()
            let todo = todos[editingIndex]
            if (todo) {
                todo.title = data.title
                todo.description = data.description
                todo.duetime = data.duetime
                todo.priority = data.priority
            }
            editingIndex = null
        }
        formElem.reset()
        printUi()
    })
}

function printUi() {
    let container = document.querySelector(".content")
    container.innerHTML = ``
    getCurrentProject().getArray().forEach((elem, index) => {
        let divElem = document.createElement("div")
        divElem.classList.add("todo")
        divElem.innerHTML =
            `
        <div class="title">Title : ${elem.title}</div>
        <div class="duetime"> Time : ${elem.duetime}</div>
        <div class="priority"> Priority : ${elem.priority}</div>
        <div class="description"> Description : ${elem.description}</div>
        <div class="btns">
            <button class="edit">Edit</button>
            <button class="del">Delete</button>
        </div>
        `
        let editBtn = divElem.querySelector(".edit")
        let delBtn = divElem.querySelector(".del")

        editBtn.addEventListener("click", () => {
            let formContainer = document.querySelector(".formContainer")
            let formElem = formContainer.querySelector("form")
            let titleInput = formElem.querySelector("#title")
            let descriptionInput = formElem.querySelector("#description")
            let dateInput = formElem.querySelector("#date")
            let prioritySelect = formElem.querySelector("#priority")

            titleInput.value = elem.title
            descriptionInput.value = elem.description
            dateInput.value = elem.duetime
            prioritySelect.value = elem.priority

            editingIndex = index
            formContainer.style.visibility = "visible"
        })

        delBtn.addEventListener("click", () => {
            let todos = getCurrentProject().getArray()
            todos.splice(index, 1)
            printUi()
        })

        container.append(divElem)
    })
}

addTodoBtn()
getFormData()

function renderProjects() {
    let projectsArea = document.querySelector(".projects")
    if (!projectsArea) return

    let addProjectBtn = projectsArea.querySelector('.addProject')
    Array.from(projectsArea.querySelectorAll('button')).forEach(btn => {
        if (!btn.classList.contains('default') && !btn.classList.contains('addProject')) {
            btn.remove()
        }
    })

    manager.getMainArray().forEach((proj, index) => {
        if (index === 0) return
        let btn = document.createElement("button")
        btn.textContent = proj.getName()
        btn.addEventListener("click", () => {
            currentProjectIndex = index
            printUi()
        })
        if (addProjectBtn) {
            projectsArea.insertBefore(btn, addProjectBtn)
        } else {
            projectsArea.append(btn)
        }
    })
}

function setupDefaultProjectBtn() {
    let defaultBtn = document.querySelector(".default")
    defaultBtn.addEventListener("click", () => {
        currentProjectIndex = 0
        printUi()
    })
}
setupDefaultProjectBtn()

function setupAddProject() {
    let addProjectBtn = document.querySelector(".addProject")
    let bodyElem = document.querySelector("body")

    addProjectBtn.addEventListener("click", () => {
        let existing = document.querySelector(".addProjectContainer")
        if (existing) {
            existing.remove()
        }

        let overlay = createAddProjectOverlay()
        bodyElem.append(overlay)

        let formElem = overlay.querySelector(".addProjectForm")
        formElem.addEventListener("submit", (elem) => {
            elem.preventDefault()
            let formData = new FormData(formElem)
            let name = formData.get("project")
            if (name) {
                manager.setMainArray(name)
                currentProjectIndex = manager.getMainArray().length - 1
                renderProjects()
                printUi()
            }
            overlay.remove()
        })
    })
}
setupAddProject()

renderProjects()
