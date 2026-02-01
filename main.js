function openfeatures() {
  let allElems = document.querySelectorAll(".elem");
  let allfullElems = document.querySelectorAll(".fullElems");
  let allfullElemsbackbtn = document.querySelectorAll(".backbtn");
  allElems.forEach(function (elems) {
    elems.addEventListener("click", function () {
      allfullElems[elems.id].style.display = "block";
    });
  });

  allfullElemsbackbtn.forEach(function (elems) {
    elems.addEventListener("click", function () {
      allfullElems[elems.id].style.display = "none";
    });
  });
}
openfeatures();

let form = document.querySelector(".addTask form");
let taskInput = document.querySelector(".addTask form #task-input");
let taskDetailsInput = document.querySelector(".addTask form textarea");
let taskCheckBox = document.querySelector("#check");


var currentTask = [];

if(localStorage.getItem('currentTask')){
        currentTask =JSON.parse(localStorage.getItem('currentTask'))
        
}
else{
        console.log("Task list is empty");   
}

function renderTask() {
  let alltask = document.querySelector(".allTask");
  let sum = "";
  currentTask.forEach(function (elem) {
    sum =
      sum +
      `<div class="task">
                        <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
                        <button>Mark as Completed</button>
                    </div>`;
  });
  alltask.innerHTML = sum;
}
renderTask()

form.addEventListener("submit", function (e) {
  e.preventDefault();
  currentTask.push({
    task: taskInput.value,
    details: taskDetailsInput.value,
    imp: taskCheckBox.checked
  });
  localStorage.setItem('currentTask', JSON.stringify(currentTask))
  taskInput.value = ''
  taskDetailsInput.value = ''
  taskCheckBox.checked = false
  renderTask()
});
