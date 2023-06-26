import React from 'react'
import Reviews from './Reviews'
import {useParams} from 'react-router-dom'

function DisplayBook({books}){

    const {title}=useParams()

    const book = (typeof(books)=="object" ? books : books.find((e)=>title===e.title))

    return <div className="BookDisplay">
        <div className="BookPicture">
        <img src={book.thumbnail} className="PictureDisplay"></img>
        </div>
        <div className="BookInfo">
        <h1>{book.title}</h1>
        <h4>By {book.author}</h4>
        <font size="4">{book.description}</font>
        </div>
        {book.reviews ? <Reviews book={book}/> : null}
    </div>
}

export default DisplayBook

//need to display
    //title
    //author
    //categories(genre)
    //description(blurb)
    //imageLinks/thumbnail(image_url)