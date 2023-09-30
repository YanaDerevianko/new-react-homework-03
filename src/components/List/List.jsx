import React from "react";
import { useState } from "react";
import Filter from "../Filter/Filter";

export const List = ({ items }) => {
  const [selectedFilter, setSelectedFilter] = useState("none");
  const [itemsForRender, setItemsForRender] = useState(items);
  

  const filterChangeHandler = (selectedAmount) => {
    setSelectedFilter(selectedAmount);

    let filteredItemsList;
    if (selectedAmount === "upTo20") {
      filteredItemsList = items.filter((item) => item.amount < 20);
    } else if (selectedAmount === "20To50") {
      filteredItemsList = items.filter(
        (item) => item.amount >= 20 && item.amount < 50
      );
    } else if (selectedAmount === "50To75") {
      filteredItemsList = items.filter(
        (item) => item.amount >= 50 && item.amount < 75
      );
    } else if (selectedAmount === "moreThan75") {
      filteredItemsList = items.filter((item) => item.amount >= 75);
    } else {
      // no filter
      filteredItemsList = items;
    }

    setItemsForRender(filteredItemsList);
  };

let listContent;

  if (itemsForRender.length > 0) {
    listContent = (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>Amount: {item.amount}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    );
  } else {
    listContent = <p>There are no items to display</p>;
  }
  return (
    <div>
      <Filter selected={selectedFilter} onChangeFilter={filterChangeHandler} />
      {listContent}
    </div>
  );
};
