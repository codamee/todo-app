import "./addProject.css"

function createAddProjectOverlay() {
    let divElem = document.createElement("div")
    divElem.classList.add("addProjectContainer")
    divElem.innerHTML =/*html*/
        `
        <div class="addProjectInner">
            <form class="addProjectForm" action="/">
                <input type="text" name="project" id="project" placeholder="Project name" required />
                <button type="submit">Add Project</button>
            </form>
        </div>
    `
    return divElem
}

export { createAddProjectOverlay }