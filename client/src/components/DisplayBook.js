import React from 'react'
import Reviews from './Reviews'
import {useParams, useHistory} from 'react-router-dom'

function DisplayBook({books, returnToVoting}){

    const {title}=useParams()
    const history=useHistory()

   

    const book = (books.length ? books.find((e)=>title===e.title) : books)

    return <div>
                <div className="BookDisplay">
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
                <div className="ReturnButton">
                {typeof(book.id)==="integer" ? 
                        null:<button onClick={returnToVoting}>Return</button>}
                </div>
        </div>
}

export default DisplayBook

//need to display
    //title
    //author
    //categories(genre)
    //description(blurb)
    //imageLinks/thumbnail(image_url)