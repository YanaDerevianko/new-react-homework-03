import React from "react";
import NewItemForm from "./NewItemForm";
import uuid from 'react-uuid';


const NewItem = (props) => {

    const saveNewItemHandler = (obtainedItemData) => {
        const itemData ={
            id: uuid(),
            ...obtainedItemData
        }
        props.onAddItem(itemData)
 }  
 return (
    <div>
      <NewItemForm onSaveItemData ={saveNewItemHandler}/>
    </div>
  );
};

export default NewItem;
