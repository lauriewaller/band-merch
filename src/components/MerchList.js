import React from 'react';
import Item from "./Item";
import PropTypes from "prop-types";

function MerchList(props){
  return( 
    <>
      {props.merchList.map((item, index) => 
      <Item name={item.name}
      description={item.description}
      quantity={item.quantity}
      key={index} />
      )}
    </>
  );
}

MerchList.propTypes = {
  merchList: PropTypes.array
};

export default MerchList;
