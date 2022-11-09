import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} from "../redux/slice";
import TodoItem from "../components/TodoItem";
import { Button } from "@mui/material";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const DisplayTodos = (props) => {
  const [sort, setSort] = useState("active");
  return (
    <div className="displaytodos">
      <div className="buttons  flex justify-center gap-x-4 p-2.5 pl-10">
        
        <Button
          variant="contained"
          size="large"
          onClick={() => setSort("active")}
          style={{backgroundColor: "#075985"}}
        >
          Active
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={() => setSort("completed")}
          style={{backgroundColor: "#075985"}}
        >
          Completed
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={() => setSort("all")}
          style={{backgroundColor: "#075985"}}
        >
          All
        </Button>
       
      </div>
      <ul>
        {props.todos.length > 0 && sort === "active"
          ? props.todos.map((item) => {
              return (
                item.completed === false && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                )
              );
            })
          : null}
        {/* for complete items */}
        {props.todos.length > 0 && sort === "completed"
          ? props.todos.map((item) => {
              return (
                item.completed === true && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                )
              );
            })
          : null}
        {/* for all items */}
        {props.todos.length > 0 && sort === "all"
          ? props.todos.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  updateTodo={props.updateTodo}
                  completeTodo={props.completeTodo}
                />
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
