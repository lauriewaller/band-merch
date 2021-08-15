import React from "react";
import NewItemForm from "./NewItemForm";
import MerchList from "./MerchList";
import ItemDetail from "./ItemDetail";
class StoreFront extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterItemList: [],
      selectedItem: null
    };
  }

  handleClick = () => {
    this.setState(prevState => ({formVisibleOnPage: !prevState.formVisibleOnPage}));
  }

  handleAddingNewItemToList = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({masterItemList: newMasterItemList,
                  formVisibleOnPage: false });
  } 

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.masterItemList.filter(ticket => ticket.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }  

  render() {
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.selectedItem != null) {
      currentlyVisibleState = <ItemDetail item = {this.state.selectedItem} />
      buttonText = "Return to Item List";
    }
    else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />;
      buttonText = "Return to Item List";
    } else {
      currentlyVisibleState = <MerchList merchList={this.state.masterItemList} onItemSelection={this.handleChangingSelectedItem} />;
      buttonText = "Add Item";
    }

    return (
      <>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
      </>
    ); 
  }
}
export default StoreFront;