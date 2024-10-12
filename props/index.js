import React from "react";
import ReactDom from 'react-dom';
import './index.css' ;
const Firstbook = {
  img: "https://m.media-amazon.com/images/I/71ODaT072wL._AC_UL320_.jpg",
  author: "Barbara Kingsolver",
  title: "Things We Never Got Over (Knockemout Book 1)"
}

function Booklist()
{
  return (
<section className="booklist">
  <Book img={Firstbook.img}  title={Firstbook.title} author={Firstbook.author}/>
  <Book img={Firstbook.img}  title={Firstbook.title} author={Firstbook.author}/>
</section>
);
}

const Book  = (props) => {
  return( 
    <> 

    <img src={props.img}/>
    <h1>{props.title}</h1>
    <h4>{props.author}</h4>
    </>
  
  )
};

ReactDom.render(<Booklist/>, document.getElementById('root'))
