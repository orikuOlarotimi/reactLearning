import React from 'react'


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

export default Book