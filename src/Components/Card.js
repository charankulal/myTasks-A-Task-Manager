import React, { useContext } from "react";
import NotesContext from "../Context/NotesContext";
import "../Styles/Card.css";

const Card = (props) => {
  const context = useContext(NotesContext);
  const { deleteTask } = context;
  const { updateTask, task } = props;

  return (
    <>
      <div
        className={`m-3 outerborder ${props.isListView && "list"} ${
          props.isDarkMode ? "dark-mode" : "light-mode"
        }`}
        data-bs-theme={`${props.isDarkMode ? "dark" : "light"}`}
      >
        {/* <span className="directorybutton">{props.completed ? "Completed" : "Due"}</span> */}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Title: {props.title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Description: {props.description}
            </h6>
            <time className="mt-auto flex w-full">
              <i className="bi bi-calendar-check mx-2"></i>
              {props.date}
            </time>
            <div className="row d-flex my-3">
              <button
                type="button"
                className="btn btn-primary col-6"
                id="completed"
                onClick={() => {
                  props.toggleStatus(props.index);
                }}
              >
                {props.completed ? "Completed" : "Incomplete"}
              </button>
              <i
                className={`fa star ${
                  props.important ? "fa-star" : "fa-star-o"
                } my-2 col-2 fs-4`}
                onClick={() => {
                  props.toggleFav(props.index);
                }}
                id={`${props.id}`}
              ></i>
              <i
                className={`fa fa-trash my-2 col-2 fs-4`}
                aria-hidden="true"
                onClick={() => {
                  deleteTask(props.id);
                }}
              ></i>
              <i
                className="fa fa-edit my-2 col-2 fs-4"
                aria-hidden="true"
                onClick={() => updateTask(task)}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
