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
  <Book img={Firstbook.img}  title={Firstbook.title} author={Firstbook.author}> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit officiis doloremque animi? Culpa, iusto assumenda.</p></Book> 
  <Book img={Firstbook.img}  title={Firstbook.title} author={Firstbook.author}> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit officiis doloremque animi? Culpa, iusto assumenda.</p></Book> 
</section>
);
}

const Book  = ({img, title, author, children}) => {
  return( 
    <> 
    <img src={img}/>
    <h1>{title}</h1>
    <h4>{author}</h4>
    {children}
    </>
  
  )
};

ReactDom.render(<Booklist/>, document.getElementById('root'))
