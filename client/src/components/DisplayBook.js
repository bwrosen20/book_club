import React, {useState, useEffect} from 'react'
import ReviewContainer from './ReviewContainer'
import ReviewForm from './ReviewForm'
import {useParams} from 'react-router-dom'

function DisplayBook({books, returnToVoting, bookForVote, user, handleReview, handleDeleteReview, handleEditReview}){

    const {title}=useParams()
    const [review,setReview]=useState(false)
    const book = (books.length ? books.find((e)=>title===e.title) : books)
    const [writeReviewButton, setWriteReviewButton]=useState(true)


    useEffect(()=>{
       setWriteReviewButton(true)
        if (book.reviews){
             book.reviews.forEach((review)=>{
            if (user===review.user.id){
                setWriteReviewButton(false)
            }

        })
    }
    },[book])

    function writeReview(update){
        setReview(!review)
        handleReview(update)
    }

    return <div>
                <div className="BookDisplay">
                    <div className="BookPicture">
                        <img src={book.thumbnail} alt={book.thumbnail }className="PictureDisplay"></img>
                    </div>
                    <div className="BookInfo">
                        <h1>{book.title}</h1>
                        <h4>By {book.author}</h4>
                        <font size="4" className="description">{book.description}</font>
                    </div>
                    
                        {book.reviews ? <ReviewContainer book={book} user={user} handleEditReview={handleEditReview} handleDeleteReview={handleDeleteReview}/> : null}
                </div>
                <div className="ReturnButton">
                    {book.votes >=0 ? 
                        null:
                            <div className="loginScreen">
                                <button onClick={returnToVoting} className="loginButton">Return</button>
                                <button onClick={bookForVote} className="loginButton">Put up for vote</button>
                            </div>}
                                {book.id && book.finished?
                            <div>
                                {review?
                                <ReviewForm book={book} user={user} writeReview={writeReview}/> :
                               
                               <div>
                                {writeReviewButton ?
                                <button onClick={writeReview}>Write a review</button>: null}
                                </div>

                                }

                            </div> : null}
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