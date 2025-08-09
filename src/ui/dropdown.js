export default class Dropdown {
  constructor() {
    this.bindEvents();
  }

  bindEvents() {
    document.querySelectorAll("[data-dropdown]").forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        this.toggleDropdown(toggle);
      });
    });

    document.addEventListener("click", () => {
      this.closeAll();
    });
  }

  toggleDropdown(toggle) {
    const menu = toggle.nextElementSibling;
    if (!menu) return;

    const isActive = menu.classList.contains("active");
    this.closeAll();
    if (!isActive) {
      menu.classList.add("active");
    }
  }

  closeAll() {
    document.querySelectorAll(".dropdown-menu.active").forEach((menu) => {
      menu.classList.remove("active");
    });
  }
}
