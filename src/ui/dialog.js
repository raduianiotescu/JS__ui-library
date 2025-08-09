export default class Dialog {
  constructor() {
    this.bindEvents();
  }

  bindEvents() {
    document.querySelectorAll("[data-dialog-target]").forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = trigger.getAttribute("data-dialog-target");
        const dialog = document.querySelector(targetId);
        if (dialog) {
          this.openDialog(dialog);
        }
      });
    });

    document.querySelectorAll("[data-dialog-close]").forEach((closeBtn) => {
      closeBtn.addEventListener("click", () => {
        const dialog = closeBtn.closest(".ui-dialog");
        if (dialog) {
          this.closeDialog(dialog);
        }
      });
    });

    document.addEventListener("click", (e) => {
      const activeDialog = document.querySelector(".ui-dialog.active");
      if (activeDialog && e.target.classList.contains("ui-dialog")) {
        this.closeDialog(activeDialog);
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const activeDialog = document.querySelector(".ui-dialog.active");
        if (activeDialog) {
          this.closeDialog(activeDialog);
        }
      }
    });
  }

  openDialog(dialog) {
    dialog.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  closeDialog(dialog) {
    dialog.classList.remove("active");
    document.body.style.overflow = "";
  }
}
