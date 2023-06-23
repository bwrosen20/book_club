import React from 'react'
import {useParams} from 'react-router-dom'

function DisplayBook({books}){

    const {title}=useParams()
    const book=books.find((e)=>title===e.volumeInfo.title)

    return <div>
        <img src={book.volumeInfo.imageLinks.thumbnail}></img>
        <h1>{book.volumeInfo.title}</h1>
        <h2>{book.volumeInfo.author}</h2>
    </div>
}

export default DisplayBook

//need to display
    //title
    //author
    //categories(genre)
    //description(blurb)
    //imageLinks/thumbnail(image_url)