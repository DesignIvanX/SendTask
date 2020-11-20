class task {
    constructor(title, message) {
        this.title = title;
        this.message = message;
    }
}
class getTask {
    addMessage(clienst) {
        const newMessage = document.getElementById("getMessage");
        const element = document.createElement(`div`)
        element.innerHTML = `
            <div class="card">
                <span>Recordatorio:<br></span> ${clienst.title}<br>
                <span>Message:<br></span> ${clienst.message}
                <a href="#" class = delete name = delete >Delete</a>
            </div>
        `
        newMessage.appendChild(element);
    }
    resetForm() {
        document.getElementById("form").reset();
    }
    deleteTaks(element) {
        if(element.name === `delete`){
            element.parentElement.parentElement.remove();
        }
    }
}
document.getElementById("form").addEventListener("submit", function (e) {
    const title = document.getElementById("title").value;
    const message = document.getElementById("message").value;

    const clienst = new task(title, message);

    const tasks = new getTask()
    tasks.addMessage(clienst)

    tasks.resetForm()

    e.preventDefault();
})

document.getElementById("getMessage").addEventListener("click", function(e){
    const tasks = new getTask()
    tasks.deleteTaks(e.target)
})