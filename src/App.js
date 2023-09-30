import "./App.css";
import { List } from "./components/List/List";
import { useState } from "react";
import NewItem from "./components/NewItem/NewItem";

const listItems = [
  {
    id: 1,
    name: "Element 1",
    amount: 25,
    description: "This is a random item description.",
  },
  {
    id: 2,
    name: "Element 2",
    amount: 20,
    description: "Here's another description for an item.",
  },
  {
    id: 3,
    name: "Element 3",
    amount: 36,
    description: "A unique item with a special description.",
  },
  {
    id: 4,
    name: "Element 4",
    amount: 42,
    description: "Description of an interesting item.",
  },
  {
    id: 5,
    name: "Element 5",
    amount: 14,
    description: "A random item description in English.",
  },
];

function App() {
  const [items, setItems] = useState(listItems);

  const addItemHandler = (item) => {
    setItems((prevItems) => {
      return [item, ...prevItems];
    });
  };

  return (
    <div className="App">
      <NewItem onAddItem={addItemHandler}/>
      <List items={items} />
    </div>
  );
}

export default App;
