import React from "react";
import PropTypes from "prop-types";

function Item(props){
return (
  <>
  <h3>{props.name}</h3>
  <p><em>{props.description} - {props.quantity}</em></p>
  <hr/>
  </>
);
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
}

export default Item;