class CascadeSelect {
  constructor(select) {
    this.select = select;
    this.data = this.collectData();
    this.createSelects();
    // this.onChange = this.onChange.bind(this);
    // this.select1.addEventListener("change", (e) => this.onChange(e));
    this.select1.addEventListener("change", this.onChange);
    this.select.remove();
    this.select1.dispatchEvent(new Event("change"));
    // console.log(this);
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
    this.select.insertAdjacentElement("afterend", this.select1);

    this.select2 = document.createElement("select");
    this.select2.name = this.select.name;
    this.select1.insertAdjacentElement("afterend", this.select2);
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

new CascadeSelect(document.querySelector('select[name="pets"]'));
new CascadeSelect(document.querySelector('select[name="pets2"]'));
