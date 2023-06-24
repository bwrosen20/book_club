import React from 'react'
import {useParams} from 'react-router-dom'

function DisplayBook({books}){

    const {title}=useParams()
    const book=books.find((e)=>title===e.volumeInfo.title)

    return <div className="BookDisplay">
        <span className="BookInfo">
        <img src={book.volumeInfo.imageLinks.thumbnail} className="LargerImg"></img>
        </span>
        <span className="BookInfo">
        <h2>{book.volumeInfo.title}</h2>
        <h5>By {book.volumeInfo.authors}</h5>
        <p>{book.volumeInfo.description}</p>
        </span>
    </div>
}

export default DisplayBook

//need to display
    //title
    //author
    //categories(genre)
    //description(blurb)
    //imageLinks/thumbnail(image_url)