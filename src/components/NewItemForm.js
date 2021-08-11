import React from "react";
import {v4} from "uuid";
import PropTypes from "prop-types";
// import Item from "./Item";

function NewItemForm(props) {
  return (
    <React.Fragment>
    <form onSubmit={handleNewItemForm}>
      <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='description'
          placeholder='Description' />
        <input
          type='number'
          name='quantity'
          placeholder='Quantity' />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
  function handleNewItemForm(event) {
    event.preventDefault();
    props.onNewItemCreation({name: event.target.name.value, description: event.target.description.value, quantity: event.target.quantity.value, id: v4()});
  }
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;