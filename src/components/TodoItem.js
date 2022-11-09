import React, { useRef } from "react";
import { DeleteRounded, EditRounded } from "@mui/icons-material";
import LibraryAddCheckRoundedIcon from "@mui/icons-material/LibraryAddCheckRounded";
import { IconButton } from "@mui/material";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      // here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <li key={item.id} className="card  flex justify-center pl-11 p-2.5">
      <div>
        <textarea
          className="border w-96 pl-2 bg-emerald-100 outline-none"
          ref={inputRef}
          disabled={inputRef}
          defaultValue={item.item}
          onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
        />
        <div className="btns flex justify-center  p-2.5">
          <IconButton>
            {/* for Edit */}
            <EditRounded
              style={{ fill: "#075985" }}
              fontSize="large"
              onClick={() => changeFocus()}
            />
          </IconButton>

          <IconButton>
            {/* for Completed */}
            <LibraryAddCheckRoundedIcon
              style={{ fill: "#075985" }}
              fontSize="large"
              onClick={() => completeTodo(item.id)}
            />
          </IconButton>
          <IconButton>
            {/* for Delete */}
            <DeleteRounded
              style={{ fill: "#075985" }}
              fontSize="large"
              onClick={() => removeTodo(item.id)}
            />
          </IconButton>
        </div>
      </div>

      {item.completed && (
        <LibraryAddCheckRoundedIcon style={{ fill: "#365314" }}
        fontSize="large" className="completed flex justify-center  ml-2 mt-2">Done</LibraryAddCheckRoundedIcon>
      )}
    </li>
  );
};

export default TodoItem;
