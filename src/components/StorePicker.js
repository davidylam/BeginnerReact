import React from 'react';
import {getFunName} from '../helpers';
class StorePicker extends React.Component {

  //bind goToStore to StorePicker class
  //constructor() {
  //  super();
  //  this.goToStore = this.goToStore.bind(this);
  //}  
  goToStore(event) {
    event.preventDefault();
    console.log("yyy: " + this.storeInput.value);
    const storeId = this.storeInput.value;
    console.log(`Going to ${storeId}`);
    this.context.router.transitionTo(`/store/${storeId}`);
  }
  render() {
    return (
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" 
          defaultValue={getFunName()} ref={(input)=>{this.storeInput = input}}
        />
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}
export default StorePicker;
