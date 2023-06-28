import React from 'react'
import Reviews from './Reviews'
import {useParams} from 'react-router-dom'

function DisplayBook({books, returnToVoting, bookForVote}){

    const {title}=useParams()
    const book = (books.length ? books.find((e)=>title===e.title) : books)

    return <div>
                <div className="BookDisplay">
                    <div className="BookPicture">
                    <img src={book.thumbnail} className="PictureDisplay"></img>
                    </div>
                    <div className="BookInfo">
                    <h1>{book.title}</h1>
                    <h4>By {book.author}</h4>
                    <font size="4" className="description">{book.description}</font>
                    </div>
                    
                    {book.reviews && (book.finished)? <Reviews book={book}/> : null}
                </div>
                <div className="ReturnButton">
                {book.votes >=0 ? 
                        null:
                        <div className="loginScreen">
                            <button onClick={returnToVoting} className="loginButton">Return</button>
                            <button onClick={bookForVote} className="loginButton">Put up for vote</button>
                        </div>}
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