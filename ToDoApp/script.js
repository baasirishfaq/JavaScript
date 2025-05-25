document.getElementById("addTask").onclick = function() {
    let task = document.getElementById("input").value;
    task = task.charAt(0).toUpperCase() + task.slice(1).toLowerCase();

        // 1. Create a task container (div)
        let taskDiv = document.createElement("div");
        taskDiv.className = "singleTask";
        taskDiv.textContent = task;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "✔️";
        deleteBtn.className = "deleteBtn";
        deleteBtn.onclick = function() {
            taskDiv.remove();
        }

        taskDiv.appendChild(deleteBtn);
        document.getElementById("data").appendChild(taskDiv);
        

        
        // 5. Clear input
        document.getElementById("input").value = "";
};
