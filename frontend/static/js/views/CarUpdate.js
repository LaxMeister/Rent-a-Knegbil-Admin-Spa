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
      
      <label class ="car-Id-label" for="Car-Id">Id</label><br /> 
      
	    <input class ="car-Id" name="Car-Ide" type="text" value="" /> <br /> 
      
      <label class ="car-name-label" for="car-name">Märke</label><br /> 
      
      <input class ="car-name" name="car-name" type="text" value="" /> <br /> 
      
      <label class ="car-model-label" for="car-model">Modell</label><br /> 
      
      <input class ="car-model" name="car-model" type="text" value="" /> <br /> 
      
      <label class ="car-price-label" for="car-price">Pris</label><br /> 
      
      <input class ="car-price" name="car-price" type="text" value="" /> <br /> 
      
      <label class ="car-date-label" for="car-date">Datum tillagd</label><br /> 
      
      <input class ="car-date" name="car-date" type="text" value="" /> <br /> 
      
      <label class ="car-booked-label" for="car-booked">Bokad</label><br /> 
      
      <input class ="car-booked" name="car-booked" type="text" value="" /> <br /> 
      
      <label class ="car-details-label" for="car-details">Detaljer</label><br /> 
      
      <input class ="car-details" name="car-details" type="text" value="" /> <br /> 

      <label class ="car-type-label" for="car-type">Typ</label><br /> 
      
      <input class ="car-type" name="car-type" type="text" value="" /> <br /> 

      <div class="buttons-div">
	    <button class="backBtn" type="submit" value="Submit">Tillbaka</button>
      <button class="updateBtn" type="submit" value="Submit">Uppdatera bil</button>
	    <button class="removeBtn" type="submit" value="Submit">Ta bort bil</button>
      </div>
      </form>
      </div>
      <div id="myModal" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <div class="modal-header">
        <span class="close">&times;</span>
          <h2 class="modal-header-h2">VÄNTA!</h2>
        </div>
        <div class="modal-body">
          <p class="modal-body-p"></p>
          <div class="modalBtns">
          <button class="modalRemoveBtn">Ta Bort</button>
          <button class="modalCloseBtn">Stäng</button>
         </div>
        </div>
       
      </div>
    
    </div>
      </div>
      
        
        
        
        `;
  }
}
