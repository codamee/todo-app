import "./styles.css"
import { Project, Manager } from "./components/array/array.js"
import { form } from "./components/form/form.js"

function addTodoBtn() {
    let formContainer = document.querySelector(".formContainer")
    let addTodoBtn = document.querySelector(".addTodo")
    addTodoBtn.addEventListener("click", (elem) => {
        formContainer.style.visibility = "visible"
    })
}
addTodoBtn()

let project = new Project("default")
// let manager= new Manager("Sports")
function getFormData() {
    let formContainer = document.querySelector(".formContainer")
    let submitBtn = document.querySelector('#submitBtn')
    let formElem = document.querySelector('form')

    submitBtn.addEventListener("click", (elem) => {
        elem.preventDefault()
        formContainer.style.visibility = "hidden"
        let formData = new FormData(formElem)
        let data = Object.fromEntries(formData.entries());
        project.setArray(data.title, data.description, data.duetime, data.priority)
        formElem.reset()
        printUi()
    })
}

function printUi() {
    let container = document.querySelector(".content")
    container.innerHTML = ``
    project.getArray().forEach(elem => {
        let divElem = document.createElement("div")
        divElem.classList.add("todo")
        divElem.innerHTML =/*html*/
            `
        <div class="title">Title : ${elem.title}</div>
        <div class="duetime"> Time : ${elem.duetime}</div>
        <div class="priority"> Priority : ${elem.priority}</div>
        <div class="description"> Description : ${elem.description}</div>
        <div class="btns">
            <button class="edit">EditBtn</button>
            <button class="del">DelBtn</button>
        </div>
        `
        container.append(divElem)
    })
}
getFormData()


//Add project
function addProject() {
    let addProjectBtn = document.querySelector(".addProject")

}



