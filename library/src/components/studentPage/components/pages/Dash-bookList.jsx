import React from "react";
import DashBooksCard from "./Dash-BooksCard";
import "./Dash-bookList.css";

const DashBookLists = (props) => {
  return (
    <div className="BookList">
      {props.books.map((book, i) => {
        return (
          <DashBooksCard
            key={i}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors} //verify in console for the authors from the api
            published={book.volumeInfo.publishedDate}
          />
        );
      })}
    </div>
  );
};
export default DashBookLists;
