// IIFE and closure effect
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector(".name").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();
