class MyTextarea extends HTMLElement {
  constructor() {
    super();
    this.textarea = this.querySelector("textarea");
    this.span = document.createElement("span");
    this.appendChild(this.span);
    this.addEventListener("input", (e) => {
      this.span.innerHTML = this.textarea.value.length;
    });
  }
}

customElements.define("my-textarea", MyTextarea);
