const links = document.querySelectorAll(".header1 a");
links.forEach((link) => {
  link.addEventListener("mouseover", function () {
    const id = this.id.split("-")[1];
    document.getElementById(`ul-${id}`).style.display = "block";
  });
  link.addEventListener("mouseout", function () {
    const id = this.id.split("-")[1];
    document.getElementById(`ul-${id}`).style.display = "none";
  });
});
