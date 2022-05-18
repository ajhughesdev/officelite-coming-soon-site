const listItem = document.querySelectorAll(".select-box__option");

forEach(listItem).addEventListener("hover", () => {
  this.classList.add("select-box__list--active");
});
