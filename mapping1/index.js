import React from "react";
import ReactDom from 'react-dom';
import './index.css' ;
const Firstbook = {
  img: "https://m.media-amazon.com/images/I/71ODaT072wL._AC_UL320_.jpg",
  author: "Barbara Kingsolver",
  title: "Things We Never Got Over (Knockemout Book 1)"
}
const Name = ['rotimi','princess', 'temiola']
const newName = Name.map((name) => 
  { return <h1>{name}</h1>

  });
function Booklist()
{
  return (
<section className="booklist">
  {newName}
</section>
);
}

ReactDom.render(<Booklist/>, document.getElementById('root'))
