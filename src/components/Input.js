import React, { useState } from "react";
import "../App.css";

function Input(props) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const onAdd = () => {
    if (text.length !== 0) {
      props.setListItem(text);
      setText("");
    } else {
      alert("Enter some todos");
    }
  };
  return (
    <>
      <div className="inputContainer">
        <input
          type="text"
          style={{ borderRadius: "20px", padding: "0px 10px" }}
          className="inputBoxStyle"
          placeholder="Enter todo description"
          value={text}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              onAdd();
            }
          }}
        />
        <button className="btnStyle" onClick={onAdd}>
          +
        </button>
      </div>
      <div className="displayItems"></div>
    </>
  );
}

export default Input;
