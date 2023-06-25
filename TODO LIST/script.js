const add = document.querySelector("#push");
const input = document.querySelector('.newtask input');
const texts = document.querySelector(".texts");
add.addEventListener("click", function () {
  if (input.value.length == 0) {
    alert("Please Enter The Task...!!!");
  } else {
    texts.innerHTML += `

<div class="task"> 
<span id="taskname"> ${input.value}</span>

<button class="delete">
<i class="fa-solid fa-trash"></i>
</button>
</div>
`;

let current_tasks = document.querySelectorAll(".delete");
for(let i = 0; i<current_tasks.length; i++){
    current_tasks[i].addEventListener("click", function(){
        this.parentNode.remove();
    })
}



input.value = "";
  }
});
