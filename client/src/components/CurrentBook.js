import React, {useState} from 'react'
import ReviewContainer from './ReviewContainer'
import ReviewForm from './ReviewForm'

function CurrentBook({books,onFinishBook, user, handleReview, handleEditReview, handleDeleteReview}){

    const currentBook=(books.find((book)=>(book.current_book)))
    const [review,setReview]=useState(false)

    function writeReview(update){
        setReview(!review)
        handleReview(update)
    }

    return <div>
    <div className="BookDisplay">
        <div className="BookPicture">
            <img src={currentBook.thumbnail} className="PictureDisplay"></img>
        </div>
        <div className="BookInfo">
            <h1>{currentBook.title}</h1>
            <h4>By {currentBook.author}</h4>
            <font size="4" className="description">{currentBook.description}</font>
        </div>
        
            {currentBook.reviews ? <ReviewContainer book={currentBook} user={user} handleEditReview={handleEditReview} handleDeleteReview={handleDeleteReview}/> : null}
    </div>
    <div className="ReturnButton">
        
                    
                <div>
                    {review?
                    <ReviewForm book={currentBook} user={user} writeReview={writeReview}/> :
                    <button onClick={writeReview} className="loginOption">Write a review</button>
                    }
                    <button onClick={onFinishBook} className="loginOption" value={currentBook?currentBook.id:"0"}>Begin Next Book</button>

                </div>
    </div>
</div>
}

export default CurrentBook


{/* <div>
                <div className="BookDisplay">
                    <div className="BookPicture">
                        <img src={book.thumbnail} className="PictureDisplay"></img>
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
                                <button onClick={writeReview}>Write a review</button>
                                }
                            </div> : null}
                </div>
        </div> */}