import React from "react";
import "./Dash-BooksCard.css";

const DashBooksCard = (props) => {
  return (
    <div className="card-container">
      <img src={props.image} alt="" />
      <div className="description">
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
        <p>{props.published}</p>
      </div>
    </div>
  );
};
export default DashBooksCard;
