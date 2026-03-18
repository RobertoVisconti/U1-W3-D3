const form = document.querySelector(".input-group");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  addTask(taskInput, taskList);
});

const addTask = function (input, list) {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Scrivi qualcosa!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Elimina</button>
    `;

  li.querySelector("span").addEventListener("click", function () {
    this.classList.toggle("completed");
  });

  li.querySelector(".delete-btn").addEventListener("click", function () {
    li.remove();
  });

  list.appendChild(li);

  input.value = "";
};
