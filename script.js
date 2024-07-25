const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const quesAns = document.querySelectorAll(".question-answer");

const qs = document.querySelector(".qs");

window.addEventListener("load", () => {
  qs.classList.add("plus");
  qs.classList.add("icon");
});

plus.forEach((plusitem) => {
  plusitem.addEventListener("click", (e) => {
    const parent = e.currentTarget.parentElement.parentElement;

    quesAns.forEach((item) => {
      if (item.classList.contains("plus")) {
        item.classList.remove("plus");
        item.classList.remove("icon");
      }
    });

    if (!parent.classList.contains("plus")) {
      parent.classList.add("plus");
      parent.classList.add("icon");
    }
  });
});

minus.forEach((minusitem) => {
  minusitem.addEventListener("click", (e) => {
    const parent = e.currentTarget.parentElement.parentElement;
    if (parent.classList.contains("plus")) {
      parent.classList.remove("plus");
      parent.classList.remove("icon");
    }
  });
});
