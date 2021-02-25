class CascadeSelect extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.select = this.querySelector("select");
    this.data = this.collectData();
    this.createSelects();
    this.select1.addEventListener("change", this.onChange);
    // this.select.remove();
    this.select1.dispatchEvent(new Event("change"));
    this.select2.addEventListener("change", () => {
      this.select.value = this.select2.value;
    });
  }

  collectData() {
    const data = {};
    const groups = this.select.querySelectorAll("optgroup");
    groups.forEach((group) => {
      const key = group.label;
      const options = [
        ...group.querySelectorAll("option"),
      ].map(({ text, value }) => ({ text, value }));
      data[key] = options;
    });
    return data;
  }

  createSelects() {
    this.select1 = document.createElement("select");
    Object.keys(this.data).forEach((label) => {
      const option = document.createElement("option");
      option.text = label;
      this.select1.appendChild(option);
    });
    this.shadowRoot.appendChild(this.select1);

    this.select2 = document.createElement("select");
    this.select2.name = this.select.name;
    this.shadowRoot.appendChild(this.select2);
  }

  populate(label) {
    const values = this.data[label];
    this.select2.innerHTML = "";
    values.forEach(({ text, value }) => {
      const option = document.createElement("option");
      option.text = text;
      option.value = value;
      this.select2.appendChild(option);
    });
  }

  // onChange(e) {
  onChange = (e) => {
    // console.log(this);
    // const label = e.target.value;
    const label = this.select1.value;
    this.populate(label);
  };
}

customElements.define("cascade-select", CascadeSelect);
// new CascadeSelect(document.querySelector('select[name="pets"]'));
// new CascadeSelect(document.querySelector('select[name="pets2"]'));
