import "./App.css";
import Input from "./components/Input";
import { useState } from "react";
import ListItem from "./components/ListItem";

function App() {
  const [list, setList] = useState([]);
  const setListItem = (addItem) => {
    setList([...list, addItem]);
  };
  const deleteListItem = (key) => {
    let newArr = [...list];
    newArr.splice(key, 1);
    setList([...newArr]);
  };
  return (
    <div className="mainContainer">
      <div className="centerContainer">
        <Input setListItem={setListItem} />
        <hr style={{ margin: "20px 0px" }} />
        <h1>Todo List</h1>
        {list.length !== 0 ? (
          list.map((item, index) => {
            return (
              <ListItem
                list={item}
                key={index}
                deleteListItem={deleteListItem}
                index={index}
              />
            );
          })
        ) : (
          <p>Nothing to show here</p>
        )}
      </div>
    </div>
  );
}

export default App;
