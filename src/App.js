import "./App.css";
import CardContainer from "./components/cardContainer/CardContainer";

import { useEffect, useState } from "react";
import { getAllBooks } from "./utils";

function App() {
  const [reset, setReset] = useState();

  // useEffect(() => {
  //   async function onRenderGetBooks() {
  //     const books = await getAllBooks();
  //     await setBooks(books);
  //   }
  //   onRenderGetBooks();
  // }, [reset]);

  return (
    <div className="App">
      <h1>Hello world</h1>

      <CardContainer />
    </div>
  );
}

export default App;
