import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

function ListItem(props) {
  return (
    <>
      <li className="list-item">
        <ul className="individualItemStyle">
          <div className="listDesc">{props.list}</div>
          <button
            onClick={() => {
              props.deleteListItem(props.index);
            }}
            className="deleteBtnStyle"
          >
            <AiOutlineDelete size={20} />
          </button>
        </ul>
      </li>
    </>
  );
}

export default ListItem;
