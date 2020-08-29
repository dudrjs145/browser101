const ul = document.querySelector("ul");
const removeBtn = document.querySelector(".item-remove");
const addBtn = document.querySelector(".btn");
const itemInput = document.querySelector(".item-input");

removeBtn.addEventListener("click", () => {
  ul.removeChild(removeBtn.parentElement);
});

addBtn.addEventListener("click", () => {
  const itemName = itemInput.value;

  if (itemName != "") {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.classList.add("item-name");
    span.innerHTML = itemName;

    const i = document.createElement("i");
    i.classList.add("fas");
    i.classList.add("fa-trash");
    i.classList.add("item-remove");

    li.appendChild(span);
    li.appendChild(i);

    i.addEventListener("click", () => {
      ul.removeChild(i.parentElement);
    });

    ul.appendChild(li);
  } else {
    alert("쇼핑 목록을 작성해주세요.");
  }
  // 초기화
  itemInput.value = "";
});
