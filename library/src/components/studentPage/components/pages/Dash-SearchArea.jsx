import React from "react";

const DashSearchArea = (props) => {
  return (
    <div className="search-area">
      <form onSubmit={props.searchBooks} action="">
        <input
          onChange={props.handleSearch}
          type="text"
          placeholder="Search here"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default DashSearchArea;
