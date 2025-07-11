function addTask() {
    const textInput = document.getElementById("textInput").value
    if (textInput == "") {
        alert("please Enter a task")
    }
    else {
        const taskDiv = document.createElement("div")
        const taskText = document.createElement("h3")
        taskText.textContent = textInput
        const doneBtn = document.createElement("button")
        doneBtn.textContent = "done"
        doneBtn.onclick = function () {
            taskText.style.textDecoration = taskText.style.textDecoration == "line-through" ? "none" : "line-through"
        }
        const delBtn = document.createElement("button")
        delBtn.textContent = "delete"
        delBtn.onclick = function () {
            taskDiv.remove();
        }
    taskDiv.appendChild(taskText);
    taskDiv.appendChild(doneBtn);
    taskDiv.appendChild(delBtn);
    document.getElementById("tasks").appendChild(taskDiv);
    document.getElementById("textInput").value=""
    }
}