import React from "react";
import ReactDom from 'react-dom';
import './index.css' ;
const Firstbook =[ {
  id: 1,
  img: "https://m.media-amazon.com/images/I/71ODaT072wL._AC_UL320_.jpg",
  author: "Barbara Kingsolver",
  title: "Things We Never Got Over (Knockemout Book 1)"
},
{
  id: 2,
  img: "https://m.media-amazon.com/images/I/91I78fRFUTL._AC_UL320_.jpg",
  author: "Kristin Hannah, Julia Whelan, et al.",
  title: "The Women: A Novel"
},
{
  id: 3,
  img: "https://m.media-amazon.com/images/I/81JOqsuwfbL._AC_UL320_.jpg",
  author: "Laura Dave",
  title: "The Last Thing He Told Me: A Novel"
}
]
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
const clickHandler = () => { alert("jdjdjdd")}
const complex = (author) => {console.log(author)}
const Book = ({img, title, author}) => {
  return(
<div onMouseOver={() => console.log(title)}>

    <img src={img}/>
    <h1>{title}</h1>
    <h4>{author}</h4>
    <button type="button" onClick={clickHandler}> handler</button>
    <button type="button" onClick={()=> complex(author)}> handler</button>
</div>

  )
}

ReactDom.render(<Booklist/>, document.getElementById('root'))
