import React from "react";
import NewItemForm from "./NewItemForm";
import MerchList from "./MerchList";
import ItemDetail from "./ItemDetail";
import EditItemForm from './EditItemForm';
class StoreFront extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterItemList: [],
      selectedItem: null,
      editing: false
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

  handleDeletingItem = (id) => {
    const newMasterItemList = this.state.masterItemList.filter(item => item.id !== id);
    this.setState({
      masterItemList: newMasterItemList,
      selectedItem: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.selectedItem != null) {
      currentlyVisibleState = <ItemDetail  item = {this.state.selectedItem} onClickingDelete={this.handleDeletingItem} onClickingEdit = {this.handleEditClick} />
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