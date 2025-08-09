export default class Button {
  constructor() {
    this.bindEvents();
  }

  bindEvents() {
    document.querySelectorAll("[data-button]").forEach((button) => {
      button.classList.add("ui-button");

      const variant = button.getAttribute("data-variant") || "primary";
      button.classList.add(`ui-button--${variant}`);

      button.addEventListener("click", () => {
        this.createRipple(button);
      });
    });
  }

  createRipple(button) {
    const ripple = document.createElement("span");
    ripple.classList.add("ui-button__ripple");

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }
}
