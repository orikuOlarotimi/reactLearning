import React from "react";
import ReactDom from 'react-dom'
import './index.css' 

function Booklist()
{
  return (
<section className="booklist">
  <Book/>
  <Book/>
  <Book/>
  <Book/>
</section>
);
}

const Book  = () => {
  return( 
    <> 
    <Image/>
    <Title/>
    <Author/>
    </>
  
  )
};

const Author = () =>  <h4>Barbara Kingsolver</h4>;
const Image = () =>  <img src="https://m.media-amazon.com/images/I/71ODaT072wL._AC_UL320_.jpg" alt="this is a book "/>
const Title = () =>  <h2>Things We Never Got Over (Knockemout Book 1)</h2>

ReactDom.render(<Booklist/>, document.getElementById('root'))
