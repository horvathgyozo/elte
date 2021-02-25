class LengthyInput extends HTMLInputElement {
  constructor() {
    super();
    this.addEventListener("input", this.onInput);
  }

  onInput = (e) => {
    console.log(e.target.value.length, this.maxLength);
    const percentage = (e.target.value.length / this.maxLength) * 100;
    this.style.borderImageSource = `linear-gradient(to right, orange ${percentage}%, hsla(0, 0%, 90%, 1) ${percentage}% 100%)`;
    //if (e.target.hasAttribute('data-color'))
  };
}

customElements.define("lengthy-input", LengthyInput, { extends: "input" });
