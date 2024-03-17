import React from "react";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// import { useState } from "react";
// import { addTodo, deleteTodo } from "../../store/slices/todo";

const Header = () => {
  // const todo = useSelector((state) => state.todo.todo);
  return (
    <>
      <div>
        <div id="header">
          <div className="container">
            <div className="header">
              <div className="header-t">
                <h2>Todo</h2>
              </div>
              <div className="header-text">
                <Link to="/menu">
                  <h3>Home</h3>
                </Link>
                <h3>favorite</h3>
                  <h3>Admin</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {todo.map((el, index) => (
        <div key={index}>
          <h1>{el.name}</h1>
        </div>
      ))} */}

      {/* <button onClick={() => dispatch(deleteTodo(el.id))}>delete</button> */}
    </>
  );
};

export default Header;
