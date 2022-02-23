/*
// const data = [
//   [ 'Alma', 'Békés' ],
//   [ 'Körte', 'HD' ],
//   [ 'Szilva', 'Vas' ],
// ]
- Adatkinyerés
- Array sort
- Megjelenítés
*/
class SortableTable extends HTMLElement {
  constructor() {
    super();
    const table = this.querySelector('table');

    this.tbody = table.querySelector('tbody');

    const trs = this.tbody.querySelectorAll('tr');
    this.data = [...trs]
      .map(tr => 
        [...tr.querySelectorAll('td')].map(td => td.innerText)
      );

    table.addEventListener('click', this.onClick);
  }
  
  renderTBody(data) {
    return data.map(row => `
      <tr>
        ${row.map(data => `
          <td>
            ${data}
          </td>
        `).join('')}
      </tr>
    `).join('')
  }

  onClick = (e) => {
    // console.log(this);
    if (e.target.matches('thead th')) {
      const th = e.target;
      const col = th.cellIndex;

      this.data.sort((a, b) => a[col].toLocaleUpperCase() < b[col].toLocaleUpperCase() ? -1 : 1);

      this.tbody.innerHTML = this.renderTBody(this.data);
    }
  }
}

// sortableTable(document.querySelector('#table1'))
// sortableTable(document.querySelector('#table2'))
// new SortableTable(document.querySelector('#table1'));
// new SortableTable(document.querySelector('#table2'));
customElements.define('sortable-table', SortableTable)