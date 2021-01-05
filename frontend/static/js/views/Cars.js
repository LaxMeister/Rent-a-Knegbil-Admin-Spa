import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Rent a Knegbil - Customers");
  }

  async getHtml() {
    return `
        <div class="lager">
        <section class="darker-car"></section>
      </div>
      <div class="car-container" id="car-container">
      <div class="titlebox">
          <h1>Bilar</h1>
      </div>
      <div class="cars">
      <table class="car-table" id="car-table">
      <thead>
      <tr>
      <th class = "car-th1">Bil id</th>
      <th class = "car-th3" id = "th3">Märke</th>
      <th class = "car-th2">Model</th>
      <th class = "car-th4">Pris</th>
      <th class = "car-th5">Datum tillagd</th>
      <th class = "car-th6">Bokad</th>
      <th class = "car-th7">Detaljer</th>
      <th class = "car-th8">Typ</th>
      </tr>
      </thead>
      <tbody id="tbody">
      </tbody>
      </table>
      <button class="add-carBtn">Lägg till bil</button>
      </div>
      </div>
        </div>
        
        
        `;
  }
}
