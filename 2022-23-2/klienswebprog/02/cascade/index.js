/*

- select -> data
- data -> select1, select2
- select1 change -> select2 update

*/

// const data = {
//   "4-legged-pets": [
//     "hamster",
//     "horse",
//   ],
//   "flying-pets": [
//     "macaw",
//     "albatross",
//   ],
// };

function cascadeSelect(select) {
  // 1.
  const data = {};
  // const select = document.querySelector("select[name=pets]");
  // const optgroups = select.children;
  const optgroups = select.querySelectorAll("optgroup");
  // for (let i = 0; i < optgroups.length; i++) {
  //   console.log(optgroups[i].label);
  // }
  for (const og of optgroups) {
    // console.log(og.label);
    data[og.label] = [...og.querySelectorAll("option")].map(o => o.text)
  }
  console.log(data);
  // optgroups.forEach(og => console.log(og.label))
  // console.log(
  //   // Array.from(optgroups).map(og => og.label)
  //   [...optgroups].map(og => og.label)
  // )

  // 2.
  const select1 = document.createElement("select");
  Object.keys(data).forEach(label => {
    const option = document.createElement("option");
    option.text = label;
    select1.append(option);
  });
  select.insertAdjacentElement("afterend", select1);

  const select2 = document.createElement("select");
  // console.log(data[value]);
  select1.insertAdjacentElement("afterend", select2);

  select2.name = select.name;
  select.remove();

  // 3.
  function populate(label) {
    select2.innerHTML = "";
    data[label].forEach(animal => {
      const option = document.createElement("option");
      option.text = animal;
      select2.append(option);
    });
  }
  select1.addEventListener("change", function (e) {
    populate(this.value);
  });

  // populate(value);
  select1.dispatchEvent(new Event("change"));
}
cascadeSelect(document.querySelector("[name=pets]"));
cascadeSelect(document.querySelector("[name=pets2]"));