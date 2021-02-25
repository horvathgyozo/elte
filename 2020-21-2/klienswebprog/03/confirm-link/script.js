class ConfirmLink extends HTMLAnchorElement {
  constructor() {
    super();
    console.log("constructor");
  }
  connectedCallback() {
    console.log("connected");
    this.addEventListener("click", this.onClick);
  }
  disconnectedCallback() {
    console.log("disconnected");
    this.removeEventListener("click", this.onClick);
  }
  onClick = (e) => {
    if (!confirm(`Are you sure? ${this.href}`)) {
      e.preventDefault();
    }
  };
}

customElements.define("confirm-link", ConfirmLink, { extends: "a" });

const cl = document.createElement("a", { is: "confirm-link" });
cl.innerHTML = "INF";
cl.href = "http://www.inf.elte.hu";
console.log("before append");
document.body.appendChild(cl);
console.log("after append");
console.log(cl);
