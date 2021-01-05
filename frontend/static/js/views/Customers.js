import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Rent a Knegbil - Customers");
  }

  async getHtml() {
    return `
        <div class="lager">
        <section class="darker-customer"></section>
      </div>
      <div class="customer-container" id="customer-container">
      <div class="titlebox">
          <h1>Kunder</h1>
      </div>
      <div class="customers">
      <div class="filter">
      <select class="filter-box" id="filter_box" name="filter_box box" required>
                    <option name="nochoice" selected disabled>Välj Filter</option>
                    <option value="0">id</option>
                    <option value="1">Förnamn</option>
                    <option value="2">Efternamn</option>
                    <option value="3">Adress</option>
                    <option value="4">Telefon</option>
                    <option value="5">Användarnamn</option>
                    <option value="6">Antal hyrtillfällen</option>
                </select>
                
      <input type="text" class="search-box" placeholder="Välj filter och sök" title="Type in a name">
      </div>
      <table class="customers-table" id="customers-table">
      <thead>
      <tr>
      <th class = "th1">Kund id</th>
      <th class = "th3" id = "th3">Förnamn</th>
      <th class = "th2">Efternamn</th>
      <th class = "th4">Adress</th>
      <th class = "th5">Telefon</th>
      <th class = "th6">Användarnamn</th>
      <th class = "th7">Antal hyrtillfällen</th>
      </tr>
      </thead>
      <tbody id="tbody">
      </tbody>
      </table>
      </div>
        </div>
        
        
        `;
  }
}
