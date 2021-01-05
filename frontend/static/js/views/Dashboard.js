import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Rent a Knegbil");
  }

  async getHtml() {
    return `
        <div class="lager">
        <section class="darker"></section>
      </div>
      
      <div class="rutor">
        <div class="ruta1">
          <h3><a href="/customers" data-link>Kunder</a></h3>
        </div>
        <div class="ruta2">
          <h3><a href="/cars" data-link>Bilar</a></h3>
        </div>
        <div class="ruta3">
          <h3><a href="http://localhost:8081/perform_logout">Logga ut</a></h3>
        </div>
      </div>
        `;
  }
}
