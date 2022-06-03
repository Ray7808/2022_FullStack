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
  section.appendChild(todo);
});
