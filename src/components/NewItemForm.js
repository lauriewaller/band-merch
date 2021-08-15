import React from "react";
import {v4} from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
// import Item from "./Item";

function NewItemForm(props) {
  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewItemForm}
      buttonText="submit" />
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