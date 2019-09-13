import React from "react";

class NewKegForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keg: {
        id: null,
        name: null,
        brand: null,
        price: null,
        abv: null,
        pints_remain: 124,
        ingredients: null,
        description: null
      }
    };
  }

  // updates the current state based on input values
  handleChange = event => {
    const kegProperty = event.target.name;
    let tempState = this.state;
    tempState.keg[kegProperty] = event.target.value;
    this.setState(tempState);
    console.log(this.state);
  };

  render() {
    return (
      <form>
        <input onChange={this.handleChange} name="name" placeholder="Name" />
        <input onChange={this.handleChange} name="brand" placeholder="Brand" />
        <input onChange={this.handleChange} name="price" placeholder="Price" />
        <input onChange={this.handleChange} name="abv" placeholder="ABV" />
        <input
          onChange={this.handleChange}
          name="ingredients"
          placeholder="Ingredients"
        />
        <input
          onChange={this.handleChange}
          name="description"
          placeholder="Description"
        />
        <input type="submit" value="Add Keg" />
      </form>
    );
  }
}

export default NewKegForm;
