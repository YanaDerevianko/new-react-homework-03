import React from "react";
import { useState } from "react";

const NewItemForm = (props) => {
  const [obtainedName, setObtainedName] = useState("");
  const [obtainedAmount, setObtainedAmount] = useState("");
  const [obtainedDescription, setObtainedDescription] = useState("");

  const nameHandler = (e) => {
    setObtainedName(e.target.value);
  };

  const amountHandler = (e) => {
    setObtainedAmount(e.target.value);
  };

  const descriptionHandler = (e) => {
    setObtainedDescription(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const itemData = {
      name: obtainedName,
      amount: obtainedAmount,
      description: obtainedDescription,
    };

    props.onSaveItemData(itemData);
    setObtainedName("");
    setObtainedAmount("");
    setObtainedDescription("");
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        value={obtainedName}
        onChange={nameHandler}
      />

      <label htmlFor="amount">Amount:</label>
      <input
        id="amount"
        type="number"
        value={obtainedAmount}
        onChange={amountHandler}
      />

      <label htmlFor="description">Description:</label>
      <input
        id="description"
        type="text"
        value={obtainedDescription}
        onChange={descriptionHandler}
      />
      <button type="submit">Add New Item</button>
    </form>
  );
};

export default NewItemForm;
