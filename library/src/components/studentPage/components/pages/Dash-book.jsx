import React from "react";
import { Component } from "react";
import "./Dash-book.css";

import DashSearchArea from "./Dash-SearchArea";

import request from "superagent"; // this is a package
import DashBookLists from "./Dash-bookList";

class DashBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
    };
  }

  searchBooks = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchField })
      .then((data) => {
        console.log(data);
        this.setState({ books: [...data.body.items] });
      });
  };

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    return (
      <div className="books">
        <DashSearchArea
          searchBooks={this.searchBooks}
          handleSearch={this.handleSearch}
        />
        <DashBookLists books={this.state.books} />
      </div>
    );
  }
}

export default DashBooks;
