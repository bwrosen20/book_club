import React from 'react'
import Reviews from './Reviews'

function CurrentBook({books}){
    
    const currentBook=(books.find((book)=>(book.current_book)))

    return <div className="BookDisplay">
        <div className="BookPicture">
        <img src={currentBook.thumbnail} className="PictureDisplay" alt={currentBook.thumbnail}></img>
        </div>
        <div className="BookInfo">
        <h1>{currentBook.title}</h1>
        <h4>By {currentBook.author}</h4>
        <font size="4">{currentBook.description}</font>
        </div>
        {currentBook.reviews>0 ? <Reviews book={currentBook}/> : null}
    </div>
}

export default CurrentBook