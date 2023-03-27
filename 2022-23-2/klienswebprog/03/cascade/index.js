const cascadeSelectTemplate = document.createElement("template");
cascadeSelectTemplate.innerHTML = `
  <label>Please choose one or more pets:
    <slot></slot>
  </label>
`

class CascadeSelect extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: "open"});
    // this === LightDOM
    // this.shadowRoot === ShadowDOM
    this.shadowRoot.append(cascadeSelectTemplate.content.cloneNode(true));
    this.select = this.querySelector("select");
    this.label = this.shadowRoot.querySelector("label");

    this.data = this.collectData();
    this.createSelects();

    this.select1.addEventListener("change", this.onChange);
    this.select1.dispatchEvent(new Event("change"));
    this.select2.addEventListener("change", e => {
      this.select.value = this.select2.value.toLowerCase();
    });
  }
  onChange = (e) => {
    this.populate(this.select1.value);
  }
  populate(label) {
    this.select2.innerHTML = "";
    this.data[label].forEach(animal => {
      const option = document.createElement("option");
      option.text = animal;
      this.select2.append(option);
    });
  }
  collectData() {
    const data = {};
    const optgroups = this.select.querySelectorAll("optgroup");
    for (const og of optgroups) {
      data[og.label] = [...og.querySelectorAll("option")].map(o => o.text)
    }
    return data;
  }
  createSelects(select) {
    this.select1 = document.createElement("select");
    Object.keys(this.data).forEach(label => {
      const option = document.createElement("option");
      option.text = label;
      this.select1.append(option);
    });
    this.label.append(this.select1);

    this.select2 = document.createElement("select");
    this.label.append(this.select2);

    this.select2.name = this.select.name;
    // this.select.remove();
  }
}

customElements.define("cascade-select", CascadeSelect);
// new CascadeSelect(document.querySelector("[name=pets]"));
// new CascadeSelect(document.querySelector("[name=pets2]"));
