function toggleMenu() {
   const menu = document.querySelector(".menu-links");
   const icon = document.querySelector(".hamburger-icon");
   menu.classList.toggle("open");
   icon.classList.toggle("open");
}

const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
   button.addEventListener("mousedown", function() {
      this.style.transform = "scale(0.95) translateY(0)";
   });

   button.addEventListener("mouseup", function() {
      this.style.transform = "scale(1) translateY(-5px)";
   });
});

const interactable = document.querySelectorAll(".social-icon");
interactable.forEach(item => {
   item.addEventListener("mousedown", function(){
      this.style.transform = "scale(0.9)";
   });

   item.addEventListener("mouseup", function(){
      this.style.transform = "scale(1.2)";
   });
});
