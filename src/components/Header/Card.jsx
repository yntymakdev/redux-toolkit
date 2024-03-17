import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../store/slices/todo";

const Card = () => {
  const todo = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();
  return (
    <div>
      <div id="card">
        <div className="container">
          <div className="card">
            <div className="card-box">
              {todo.map((el, index) => (
                <div key={index}>
                  <div className="section-card">
                    <div className="section">
                      <img className="img" src={el.image} alt="url" />
                      <h3 className="nam"> Name:{el.name}</h3>

                      <h1 className="last">LastName: {el.lastname}</h1>
                      <button className="del"  onClick={() => dispatch(deleteTodo(el.id))}>
                        {" "}
                        delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
