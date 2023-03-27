
class TextareaWithLength extends HTMLElement {
  constructor() {
    super();
    console.log(this);
    this.textarea = this.querySelector("textarea");
    this.span = document.createElement("span");
    this.append(this.span);
    this.textarea.addEventListener("input", e => {
      this.span.innerHTML = this.textarea.value.length;
    });
    this.textarea.dispatchEvent(new Event("input"));
  }
}
customElements.define("textarea-with-length", TextareaWithLength);