import React from "react";
import "./CardContainer.css";

import { useState } from "react";
import { getAllBooks } from "../../utils";

const CardContainer = () => {
  const [books, setBooks] = useState([]);
  const clickHandler = async (e) => {
    e.preventDefault();
    const books = await getAllBooks();
    console.log(books.books);
    setBooks(books.books);
  };

  return (
    <div className="card-container">
      <div>
        <button onClick={clickHandler}>GetAllBooks</button>
      </div>
      <div>
        {books.length >= 1
          ? books.map((book, key) => <p>{book.title}</p>)
          : null}
      </div>
    </div>
  );
};

export default CardContainer;
