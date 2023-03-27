class ConfirmLink extends HTMLAnchorElement {
  constructor() {
    console.log("constructor");
    super();
  }
  connectedCallback() {
    console.log("connected");
    this.addEventListener("click", this.onClick);
  }
  disconnectedCallback() {
    console.log("disconnected");
    this.removeEventListener("click", this.onClick);
  }
  onClick = e => {
    if (!confirm("Biztos?")) {
      e.preventDefault();
    }
  }
}
customElements.define("confirm-link", ConfirmLink, { extends: "a" })

// const a = document.createElement("a", { is: "confirm-link" });
// document.body.append(a);