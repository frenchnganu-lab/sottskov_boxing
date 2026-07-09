document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('a[href^="#"]');

  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      const targetId = button.getAttribute("href");

      if (targetId.length > 1) {
        event.preventDefault();

        const target = document.querySelector(targetId);

        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    });
  });
});