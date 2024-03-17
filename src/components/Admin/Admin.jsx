import React, { useState } from "react";
import { addTodo } from "../../store/slices/todo";
import { useDispatch, useSelector } from "react-redux";

const Admin = () => {
  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useState({
    name: "",
    lastname: "",
    image: "",
  });
  const todo = useSelector((state) => state.todo.todo);
  function addTask() {
    let newObject = {
      ...inputValues,
      id: Date.now(),
    };
    dispatch(addTodo(newObject));
  }

  return (
    <div>
      <div className="admin">
        <div className="card-text">
          <h3>Todo</h3>
        </div>
        <div className="card-input">
          <input
            onChange={(e) => {
              setInputValues({ ...inputValues, name: e.target.value });
            }}
            type="text"
            placeholder="Name"
          />
          <input
            onChange={(e) => {
              setInputValues({ ...inputValues, lastname: e.target.value });
            }}
            type="text"
            placeholder="LastName"
          />
          <input
            onChange={(e) => {
              setInputValues({ ...inputValues, image: e.target.value });
            }}
            type="text"
            placeholder="image"
          />
          <button onClick={addTask}>create</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
