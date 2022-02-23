const TextarraWithLengthTemplate = document.createElement('template');
TextarraWithLengthTemplate.innerHTML = `
  <slot></slot>
  <span></span>
`

class TextareaWithLength extends HTMLElement {
  constructor() {
    super();
    // this.origTextarea = this.querySelector('textarea');

    this.attachShadow({mode: "open"})
    this.shadowRoot.appendChild(TextarraWithLengthTemplate.content.cloneNode(true))

    this.textarea = this.querySelector('textarea');
    // this.textarea.name = this.origTextarea.name; 
    this.span = this.shadowRoot.querySelector('span')
    // this.span.innerHTML = '0';
    // this.appendChild(this.span);
    this.shadowRoot.addEventListener('input', e => {
      this.span.innerHTML = e.target.value.length;
      // this.origTextarea.value = e.target.value
    });
    this.textarea.dispatchEvent(new Event('input', {
      bubbles: true,
    }));
  }
}

customElements.define('textarea-with-length', TextareaWithLength)