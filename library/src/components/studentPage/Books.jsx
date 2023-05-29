import React, { Component } from "react";
//import image from "../../images/library.jpg";

import "./Books.css";
import SearchForm from "./components/search/SearchForm";
import BookList from "./components/BookList/BookList";

export default class Books extends Component {
  render() {
    return (
      <div id="books">
        <div className="row about" id="books">
          <div>
            <h2>
              <strong> BOOKS </strong>
            </h2>
            <div className="book">
              <SearchForm />
            </div>
          </div>
          <div className=" books-body">
            <BookList />
          </div>
        </div>
      </div>
    );
  }
}
