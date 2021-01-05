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
      <div class="carupdate-container" id="carupdate-container">
      <div class="titlebox-updatecar">
          <h1>Uppdatera bil</h1>
          </div>
      <div class="car-update">
      <form  autocomplete="off"  target="">
      
      <label class ="car-name-label" for="car-name">Märke</label><br /> 
      
      <input class ="car-name" name="car-name" type="text" value="" /> <br /> 
      
      <label class ="car-model-label" for="car-model">Modell</label><br /> 
      
      <input class ="car-model" name="car-model" type="text" value="" /> <br /> 
      
      <label class ="car-price-label" for="car-price">Pris</label><br /> 
      
      <input class ="car-price" name="car-price" type="text" value="" /> <br /> 
      
      <label class ="car-details-label" for="car-details">Detaljer</label><br /> 
      
      <input class ="car-details" name="car-details" type="text" value="" /> <br /> 
      
      <div class="buttons-div">
	    <button class="backBtn" type="submit" value="Submit">Tillbaka</button>
      <button class="updateBtn" type="submit" value="Submit">Lägg till bil</button>
      </div>
      </form>
      </div>
      
      </div>
      
        
        
        
        `;
  }
}
