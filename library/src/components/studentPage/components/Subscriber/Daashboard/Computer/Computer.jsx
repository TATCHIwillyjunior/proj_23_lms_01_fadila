import React, { Component } from "react";
//import image from "../../images/library.jpg";

import "./Computer.css";
import SearchForm from "../../../search/SearchForm";
import BookList from "../../../BookList/BookList";

export default class Computer extends Component {
  render() {
    return (
      <div id="computer">
        <div className="row about" id="computer">
          <div>
            <h2>
              <strong> Computer Science and Information Technology </strong>
            </h2>
            <div className="computer">
              <SearchForm />
            </div>
          </div>
          <div className=" computer-body">
            <BookList />
          </div>
        </div>
      </div>
    );
  }
}
