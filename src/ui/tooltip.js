export default class Tooltip {
  constructor() {
    this.tooltipEl = document.createElement("div");
    this.tooltipEl.className = "tooltip";
    document.body.appendChild(this.tooltipEl);

    this.bindEvents();
  }

  bindEvents() {
    document.querySelectorAll("[data-message]").forEach((el) => {
      el.addEventListener("mouseenter", (e) => this.showTooltip(e, el));
      el.addEventListener("mouseleave", () => this.hideTooltip());
    });
  }

  showTooltip(event, element) {
    this.message = element.getAttribute("data-message");
    this.tooltipEl.textContent = this.message;
    this.tooltipEl.classList.add("active");

    const rect = element.getBoundingClientRect();
    this.tooltipEl.style.left = `${rect.left + window.scrollX}px`;
    this.tooltipEl.style.top = `${
      rect.top + window.scrollY - this.tooltipEl.offsetHeight - 5
    }px`;
  }

  hideTooltip() {
    this.tooltipEl.classList.remove("active");
  }
}
