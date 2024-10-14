import React from "react";
import ReactDom from 'react-dom';
import './index.css' ;
import { Firstbook } from "./books";
import Book from "./Book";

function Booklist()
{
  return (
<section className="booklist">
  {Firstbook.map((book) => {
    return <Book key={book.id} {...book}/>
  })}
</section>
);
}

ReactDom.render(<Booklist/>, document.getElementById('root'))