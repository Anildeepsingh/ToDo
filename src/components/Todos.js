import { Button }  from "@mui/material";
import React, { useState} from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/slice";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");


  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  // console.log("props from store", props);

  return (
    
    <div className="addTodos flex justify-center p-2.5 max-w-full">
      <input  label="Add ToDo" variant="outlined"
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input border w-3/4 lg:w-2/4 pl-2  border-white bg-emerald-100 border-1 outline-none"
      />
      <div className="p-2.5">
      <Button
        className="add-btn border"
        style={{backgroundColor: "#075985"}}
        variant="contained"
        onClick={() =>
          props.addTodo({
            id: Math.floor(Math.random() * 1000), // here we will write an abject/todo
            item: todo,
            completed: false,
          })
        }
      >add</Button>
      </div>
      </div>
   
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
