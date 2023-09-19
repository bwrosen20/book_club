import React, {useState, useEffect, useContext} from 'react'
import {UserContext} from './App'
import ReviewContainer from './ReviewContainer'
import ReviewForm from './ReviewForm'
import {useParams} from 'react-router-dom'

function DisplayBook({books, returnToVoting, bookForVote, handleReview, handleDeleteReview, handleEditReview}){

    const user = useContext(UserContext)
    const {title}=useParams()
    const [review,setReview]=useState(false)
    const book = (books.length ? books.find((e)=>title===e.title) : books)
    const [writeReviewButton, setWriteReviewButton]=useState(true)


    useEffect(()=>{
       setWriteReviewButton(true)
        if (book.reviews){
             book.reviews.forEach((review)=>{
            if (user.id===review.user.id){
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
                <div className="bookDisplay" id="bookDisplay">
                    <div className="bookPicture">
                        <img src={book.thumbnail} alt={book.thumbnail }className="pictureDisplay"></img>
                    </div>
                    <div className="bookInfo">
                        <h1>{book.title}</h1>
                        <h4>By {book.author}</h4>
                        <div className="descriptionContainer">
                            <font size="4" className="description">{book.description}</font>
                        </div>
                    </div>
                    
                        {book.reviews ? <ReviewContainer book={book} handleEditReview={handleEditReview} handleDeleteReview={handleDeleteReview}/> : null}
                </div>
                <div className="returnButton">
                    {book.votes >=0 ? 
                        null:
                            <div className="loginScreen">
                                <button onClick={returnToVoting} className="loginButton">Return</button>
                                <button onClick={bookForVote} className="loginButton">Put up for vote</button>
                            </div>}
                                {book.id && book.finished?
                            <div>
                                {review?
                                <ReviewForm book={book} writeReview={writeReview}/> :
                               
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