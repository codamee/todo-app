import "./form.css"

function form() {
    let container = document.querySelector(".sidebar")
    let divElem = document.createElement("div")
    divElem.classList.add("formContainer")
    divElem.innerHTML =/*html*/
        `
        <div class="form">
             <form action="/">
                <div>
                    <label for="title">Title</label>
                    <input type="text" name="title" id="title" required/>
                </div>
                <div>
                    <label for="discription">Discription</label>
                    <input type="text" name="discription" id="discription" required/>
                </div>
                <div>
                    <label for="duetime">Due-Time</label>
                        <input type="datetime-local" name="duetime" id="date" required/>
                </div>
                <div>
                    <label for="priority">Priority</label>
                    <select name="priority" id="priority" required>
                            <option value="Top">Top</option>
                            <option value="Medium">Medium</option>
                            <option value="Least">Least</option>
                    </select>
                </div>
                <button id="submitBtn" >Add Project</button>
            </form>
        </div>
    `
    container.append(divElem)
}
form()
export { form }