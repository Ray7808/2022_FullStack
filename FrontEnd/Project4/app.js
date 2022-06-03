let section = document.querySelector("section");
let add = document.querySelector("form button");
add.addEventListener("click", (e) => {
  //   console.log(e); //test

  //Prevent form from being submitted
  e.preventDefault(); //先不要讓form交出去

  //get the input values
  //   console.log(e.target.parentElement); //obtain the form information
  let form = e.target.parentElement;
  //   console.log(form.children);
  let todotext = form.children[0].value;
  let todoMonth = form.children[1].value;
  let todoDate = form.children[2].value;
  //   console.log(todotext);
  //   console.log(todoMonth);
  //   console.log(todoDate);

  if (todotext === "") {
    alert("please add some text!");
    return;
  }

  //create a todo item
  let todo = document.createElement("div");
  todo.classList.add("todo");
  let text = document.createElement("p");
  text.classList.add("todo-text");
  text.innerText = todotext;
  let time = document.createElement("p");
  time.classList.add("todo-time");
  time.innerText = todoMonth + " / " + todoDate;
  todo.appendChild(text);
  todo.appendChild(time);

  // create green check and red trash can
  let completeButton = document.createElement("button");
  completeButton.classList.add("complete");
  completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  completeButton.addEventListener("click", (e) => {
    // console.log(e.target);
    let todoItem = e.target.parentElement;
    // todoItem.classList.add("done");
    todoItem.classList.toggle("done");
  });

  let trashButton = document.createElement("button");
  trashButton.classList.add("trash");
  trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  trashButton.addEventListener("click", (e) => {
    // console.log(e.target);
    let todoItem = e.target.parentElement;

    todoItem.addEventListener("animationend", (e) => {
      todoItem.remove();
    });
    todoItem.style.animation = "scaleDown 0.3s forwards";
    // todoItem.classList.add("done");
    // todoItem.remove();
  });

  todo.appendChild(completeButton);
  todo.appendChild(trashButton);

  todo.style.animation = "scaleUp 0.3s forwards";
  form.children[0].value = ""; //clear the text input
  section.appendChild(todo);
});
