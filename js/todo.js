var students = JSON.parse(localStorage.getItem("students")) || [];
var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let addTaskBtn = document
  .getElementById("add-task-btn")
  .addEventListener("click", addTask);
function populateStudentDropdown(elementId, selectedStudents) {
  var studentDropdown = document.getElementById(elementId);
  studentDropdown.innerHTML = "";

  students.forEach(function (student) {
    var option = document.createElement("option");
    option.value = student.id;
    option.text = student.firstName + " " + student.lastName;
    option.selected = selectedStudents.includes(student.id);
    studentDropdown.add(option);
  });
}

function addTask() {
  var taskInput = document.getElementById("add-task-input");
  var studentInput = document.getElementById("add-student-input");
  var task = taskInput.value.trim();
  var selectedStudents = Array.from(studentInput.selectedOptions).map(
    (option) => option.value
  );

  if (task !== "" && selectedStudents.length > 0) {
    var newTask = {
      task: task,
      studentIds: selectedStudents,
    };
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";
    studentInput.selectedIndex = -1;
    loadTasks();
  }
}
loadTasks();
function loadTasks() {
  var taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  tasks.forEach(function (task) {
    var taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    var studentNames = getStudentNames(task.studentIds);
    taskItem.innerHTML = `
        <span>${task.task}</span>
        <button class="show-details-btn">Show details</button>
    `;
    var showDetailsBtn = taskItem.querySelector(".show-details-btn");
    showDetailsBtn.addEventListener("click", function () {
      showTaskDetails(tasks.indexOf(task));
    });

    taskList.appendChild(taskItem);
  });
}

function getStudentNames(studentIds) {
  var names = [];
  studentIds.forEach(function (studentId) {
    var student = students.find((s) => s.id === studentId);
    if (student) {
      names.push(student.firstName + " " + student.lastName);
    }
  });
  return names.join(", ");
}

function deleteTask(taskIndex) {
  if (confirm("Are you sure you want to delete this task?")) {
    tasks.splice(taskIndex, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
    closeDetailsPopup();
  }
}

function showTaskDetails(taskIndex) {
  var detailsPopup = document.getElementById("detailsPopup");
  var detailsContent = document.getElementById("detailsContent");
  var overlay = document.getElementById("overlay");

  var task = tasks[taskIndex];
  var studentIds = task.studentIds;

  detailsContent.innerHTML = `
    <h2>Task Details</h2>
    <div class="taskEdit">
      <p><strong>Task:</strong> <input type="text" id="editTaskName" value="${
        task.task
      }"></p>  
      <p><strong>Assigned Students:</strong></p>
      <select id="editStudentNames" multiple>
        ${generateStudentOptions(studentIds)}
      </select>
      <br/>
      <button class="saveBtn">Save Changes</button>
      <br/>
      <button class="deleteBtn">Delete Task</button>
    </div>
  `;

  var saveBtn = detailsContent.querySelector(".saveBtn");
  var deleteBtn = detailsContent.querySelector(".deleteBtn");

  saveBtn.addEventListener("click", function () {
    saveTaskChanges(taskIndex);
  });

  deleteBtn.addEventListener("click", function () {
    deleteTask(taskIndex);
  });

  detailsPopup.style.display = "block";
  overlay.classList.add("active");
  populateStudentDropdown("editStudentNames", studentIds);
}

function generateStudentOptions(selectedStudents) {
  return students
    .map(
      (student) =>
        `<option value="${student.id}" ${
          selectedStudents.includes(student.id) ? "selected" : ""
        }>${student.firstName} ${student.lastName}</option>`
    )
    .join("");
}

function saveTaskChanges(taskIndex) {
  var editTaskName = document.getElementById("editTaskName").value;
  var editStudentNames = Array.from(
    document.getElementById("editStudentNames").selectedOptions
  ).map((option) => option.value);

  if (editTaskName.trim() !== "" && editStudentNames.length > 0) {
    tasks[taskIndex].task = editTaskName;
    tasks[taskIndex].studentIds = editStudentNames;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
    closeDetailsPopup();
  } else {
    alert("Task name and assigned students cannot be empty.");
  }
}

function closeDetailsPopup() {
  var detailsPopup = document.getElementById("detailsPopup");
  var overlay = document.getElementById("overlay");

  detailsPopup.style.display = "none";
  overlay.classList.remove("active");
}

document
  .getElementById("closeDetails")
  .addEventListener("click", closeDetailsPopup);

populateStudentDropdown("add-student-input", []);
populateStudentDropdown("editStudentNames", []);
loadTasks();
