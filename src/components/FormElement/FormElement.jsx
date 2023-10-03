import React from "react";
import { useState } from "react";
import NewItem from "../NewItem/NewItem";

export const FormElement = ({onAddItem }) => {
    const [isFormVisible, setIsFormVisible] = useState(false);

  const showForm = () => {
    setIsFormVisible(true);
  };
  const hideForm = () => {
    setIsFormVisible(false);
  };
  const cancelEditHandler = () => {
    hideForm();
  };

  const handleAddItem = (itemData) => {
    onAddItem(itemData);
    hideForm();
  };

  return (
    <div>
       {!isFormVisible ? (
        <button onClick={showForm}>Add new element</button>
        
      ) : (
        <>
        <button onClick={cancelEditHandler}>Скасувати</button>
        <NewItem
          onAddItem={handleAddItem}
        />
        </>
      )}
    </div>
  );
};
