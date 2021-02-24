// prettier-ignore
const select = document.querySelector("select");
// const exampleData = {
//   "4-legged-pets": [
//     { text: "dog", value: 12 },
//     { text: "cat", value: 45 },
//   ],
//   flying: ["parrot"],
// };
const data = {};

const groups = select.querySelectorAll("optgroup");
groups.forEach((group) => {
  const key = group.label;
  // const options = Array.from(group.querySelectorAll('option')).map(option => ({ text:1, value:2  }))
  // const options = [...group.querySelectorAll("option")].map((option) => ({
  //   text: option.text,
  //   value: option.value,
  // }));
  const options = [
    ...group.querySelectorAll("option"),
  ].map(({ text, value }) => ({ text, value }));

  data[key] = options;
});
console.log(data);

const select1 = document.createElement("select");
Object.keys(data).forEach((label) => {
  const option = document.createElement("option");
  option.text = label;
  select1.appendChild(option);
});
select.insertAdjacentElement("afterend", select1);

const select2 = document.createElement("select");
select2.name = select.name;
select1.insertAdjacentElement("afterend", select2);

function populate(label) {
  const values = data[label];
  select2.innerHTML = "";
  values.forEach(({ text, value }) => {
    const option = document.createElement("option");
    option.text = text;
    option.value = value;
    select2.appendChild(option);
  });
}

select1.addEventListener("change", onChange);
function onChange(e) {
  const label = this.value;
  populate(label);
}

// populate(Object.keys(data)[0]);
// onChange.call(select1);
select.remove();
// select.removeAttribute("name");
// select.style.display = 'none';
select1.dispatchEvent(new Event("change"));
