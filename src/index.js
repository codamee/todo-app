import "./styles.css"
import { Project, Manager } from "./components/array/array.js"
import { form } from "./components/form/form.js"


let addTodoBtn = document.querySelector(".addTodo")
let formContainer = document.querySelector(".formContainer")
addTodoBtn.addEventListener("click", (elem) => {
    formContainer.style.visibility = "visible"

})
let project = new Project("default")
function getFormData() {
    let submitBtn = document.querySelector('#submitBtn')
    let formElem = document.querySelector('form')

    submitBtn.addEventListener("click", (elem) => {
        elem.preventDefault()
        formContainer.style.visibility = "hidden"
        let formData = new FormData(formElem)
        let data = Object.fromEntries(formData.entries());
        project.setArray(data.title, data.discription, data.duetime, data.priority)
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
        <div class="title">${elem.title}</div>
        <div class="discription">${elem.discription}</div>
        <div class="duetime">${elem.duetime}</div>
        <div class="priority">${elem.priority}</div>
        <div class="btns">
            <div class="edit">EditBtn</div>
            <div class="del">DelBtn</div>
        </div>
        `
        container.append(divElem)
    })
}
getFormData()
