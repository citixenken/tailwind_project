const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open"); //dynamically add "open" class
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});
