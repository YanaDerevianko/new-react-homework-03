import React from "react";

const Filter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div>
      <label>Filter by amount:</label>
      <select value={props.selected} onChange={dropdownChangeHandler}>
        <option value="none">None filters</option>
        <option value="upTo20">up to 20 units of the product</option>
        <option value="20To50">20-50 units of the product</option>
        <option value="50To75">50-75 units of the product</option>
        <option value="moreThan75">more than 75 units of the product</option>
      </select>
    </div>
  );
};

export default Filter;
