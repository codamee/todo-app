import "./form.css"
function form() {
    let divElem = document.createElement("div")
    divElem.innerHTML =/*html*/
        `
        <div class="form">
             <form action="/">
                <div>
                    <label for="title">Title</label>
                    <input type="text" name="title" id="title" />
                </div>
                <div>
                    <label for="discription">Discription</label>
                    <input type="text" name="discription" id="discription" />
                </div>
                <div>
                    <label for="date">Due-Time</label>
                    <input type="datetime" name="date" id="date" />
                </div>
                <div>
                    <label for="priority">Priority</label>
                    <select name="priority" id="priority">
                            <option value="Top">Top</option>
                            <option value="Medium">Medium</option>
                            <option value="Least">Least</option>
                    </select>
                </div>
            </form>
        </div>
    `
    
}