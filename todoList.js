function addTask() {
    var input = document.getElementById("input").value;
    var taskList = document.getElementById("tasklist");
    if (input === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    var listItem = document.createElement("li");
    listItem.innerText = input;

    // Create a button container for actions
    var buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    // Create COMPLETE button
    var completeButton = document.createElement("button");
    completeButton.innerText = "COMPLETE";
    completeButton.classList.add("complete-button");
    completeButton.onclick = function () {
        listItem.classList.toggle("completed");
    };

    // Create DELETE button
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "DELETE";
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = function () {
        taskList.removeChild(listItem);
    };

    // Append buttons to the container
    buttonContainer.appendChild(completeButton);
    buttonContainer.appendChild(deleteButton);

    // Append the button container to the list item
    listItem.appendChild(buttonContainer);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    document.getElementById("input").value = "";
}
