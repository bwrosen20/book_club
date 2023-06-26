import React from 'react'

function DisplayBook({book}){


    return <div className="BookDisplay">
        <div className="BookPicture">
        <img src={book.thumbnail} className="PictureDisplay"></img>
        </div>
        <div className="BookInfo">
        <h1>{book.title}</h1>
        <h4>By {book.author}</h4>
        <font size="4">{book.description}</font>
        </div>
    </div>
}

export default DisplayBook