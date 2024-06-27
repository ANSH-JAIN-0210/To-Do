document.getElementById("add-task").addEventListener("click", () => {
  let t = document.querySelector(".task").value;
  let olditem = document.querySelector(".task-list");
  let newitem1 = document.createElement("span");
  let newitem2 = document.createElement("button");
  let element = document.createElement("div");
  newitem1.textContent = `${t}`;
  newitem2.textContent = "Completed";
  element.append(newitem1);
  element.append(newitem2);
  newitem1.style.marginLeft = "10px";
  newitem2.style.marginRight = "10px";
  newitem2.style.color = "white";
  newitem2.style.backgroundColor = "#EE4E4E";
  newitem2.style.borderColor = "white";
  newitem2.style.border = "none";
  newitem2.style.padding = "12px";
  newitem2.style.fontSize = "14px";
  newitem2.style.borderRadius = "8px";
  newitem2.addEventListener("mouseover", () => {
    newitem2.style.backgroundColor = "white";
    newitem2.style.border = "solid";
    newitem2.style.borderWidth = "2px";
    newitem2.style.borderColor = "#EE4E4E";
    newitem2.style.color = "#EE4E4E";
  });
  newitem2.addEventListener("mouseout", () => {
    newitem2.style.backgroundColor = "#EE4E4E";
    newitem2.style.border = "none";
    newitem2.style.borderWidth = "none";
    newitem2.style.borderColor = "white";
    newitem2.style.color = "white";
  });
  newitem2.addEventListener("click", () => {
    element.remove();
  });
  element.style.display = "flex";
  element.style.justifyContent = "space-between";
  element.style.width = "500px";
  element.style.marginLeft = "80px";
  element.style.marginRight = "80px";
  element.style.marginTop = "30px";
  element.style.fontSize = "22px";
  element.style.padding = "10px";
  element.style.color = "#FF5F00";
  document.getElementById("task-lists").append(element);

});
