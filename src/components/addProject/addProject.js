import "./addProject.css"

function addProject() {
    let addProjectElem = document.querySelector(".projectContainer")
    addProjectElem.innerHTML = ""
    addProjectElem.innerHTML =/*html*/
        `
            <form action="/">
               <input type="text" name="project" id="project" />
               <button>Add Project</button>
            </form>
    `
    addProjectElem.append(divElem)
}
addProject()

