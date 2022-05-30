let box = document.querySelectorAll(".box")

for (let i = 0; i < box.length; i++) {
  /*  box[i].classList.add(active) */
  box[i].addEventListener("click", function () {

    for (let j = 0; j < box.length; j++) {
      box[j].classList.remove("active")

    }
    this.classList.add("active")
  })

}