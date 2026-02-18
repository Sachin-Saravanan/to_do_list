function addTask() {
    let taskName = document.getElementById("taskInput").value;
    let startTime = document.getElementById("startTime").value;
    let endTime = document.getElementById("endTime").value;

    if (taskName === "" || startTime === "" || endTime === "") {
        alert("Please fill all fields!");
        return;
    }

    let table = document.getElementById("taskTable");
    let row = table.insertRow();

    let taskCell = row.insertCell(0);
    let startCell = row.insertCell(1);
    let endCell = row.insertCell(2);
    let statusCell = row.insertCell(3);
    let actionCell = row.insertCell(4);

    taskCell.textContent = taskName;
    startCell.textContent = startTime;
    endCell.textContent = endTime;
    statusCell.textContent = "Pending";

    // Complete button
    let doneBtn = document.createElement("button");
    doneBtn.textContent = "✔";
    doneBtn.className = "action-btn done";
    doneBtn.onclick = function () {
        row.classList.toggle("completed");
        statusCell.textContent =
            statusCell.textContent === "Pending" ? "Completed" : "Pending";
    };

    // Edit button
    let editBtn = document.createElement("button");
    editBtn.textContent = "✏";
    editBtn.className = "action-btn edit";
    editBtn.onclick = function () {
        let newTask = prompt("Edit task name:", taskCell.textContent);
        let newStart = prompt("Edit start time (HH:MM):", startCell.textContent);
        let newEnd = prompt("Edit end time (HH:MM):", endCell.textContent);

        if (newTask) taskCell.textContent = newTask;
        if (newStart) startCell.textContent = newStart;
        if (newEnd) endCell.textContent = newEnd;
    };

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "action-btn delete";
    deleteBtn.onclick = function () {
        row.remove();
    };

    actionCell.appendChild(doneBtn);
    actionCell.appendChild(editBtn);
    actionCell.appendChild(deleteBtn);

    document.getElementById("taskInput").value = "";
    document.getElementById("startTime").value = "";
    document.getElementById("endTime").value = "";
}
