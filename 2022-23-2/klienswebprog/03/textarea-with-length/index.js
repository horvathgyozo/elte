const template = document.createElement("template");
template.innerHTML = `
  <div>
    <h1>Hahó</h1>
    <slot></slot>
    <span></span>
  </div>
  <style>
    h1 {
      color: blue;
    }
  </style>
`

class TextareaWithLength extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});
    this.shadowRoot.append(template.content.cloneNode(true));
    this.textarea = this.querySelector("textarea");
    this.span = this.shadowRoot.querySelector("span");

    this.textarea.addEventListener("input", e => {
      this.span.innerHTML = this.textarea.value.length;
    });
    this.textarea.dispatchEvent(new Event("input"));
  }
}
customElements.define("textarea-with-length", TextareaWithLength);