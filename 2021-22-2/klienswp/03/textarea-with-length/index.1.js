// const TextarraWithLengthTemplate = `
//   <template>
//     <textarea>
//   </template>
// `

class TextareaWithLength extends HTMLElement {
  constructor() {
    super();


    this.textarea = this.querySelector('textarea');
    this.span = document.createElement('span');
    // this.span.innerHTML = '0';
    this.appendChild(this.span);
    this.addEventListener('input', e => {
      this.span.innerHTML = e.target.value.length;
    });
    this.textarea.dispatchEvent(new Event('input', {
      bubbles: true,
    }));
  }
}

customElements.define('textarea-with-length', TextareaWithLength)