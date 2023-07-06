import React, {useState, useEffect} from 'react'
import ReviewContainer from './ReviewContainer'
import ReviewForm from './ReviewForm'

function CurrentBook({books,handleFinishBook, user, handleReview, handleEditReview, handleDeleteReview}){

    const currentBook=(books.find((book)=>(book.current_book)))
    const [review,setReview]=useState(false)
    const [writeReviewButton, setWriteReviewButton]=useState(true)
    const [errors,setErrors]=useState([])
    const [isLoading, setIsLoading]=useState(false)


    useEffect(()=>{
       setWriteReviewButton(true)
        if (currentBook.reviews.length>0){
             currentBook.reviews.forEach((review)=>{
                if (user===review.user.id){
                    setWriteReviewButton(false)
                }
            })
        }
    },[currentBook])

    function onFinishBook(event){
        setIsLoading(true)
        

        fetch (`books/finish`,{
          method:"PATCH",
          headers:{
            "Content-type":"application/json"
          },
          body:JSON.stringify({
            finishedBook:parseInt(event.target.value),
            book_owner:user
          })
        })
        .then(r=>{
            if (r.ok){
                r.json().then(data=>handleFinishBook(data))
            }
            else{
                r.json().then(err=>setErrors(err.errors))
            }
            setIsLoading(false)
            window.scrollTo(0, document.body.scrollHeight)
    })
      }

    

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
                                <div>
                                    {writeReviewButton ? <button onClick={writeReview} className="loginOption">Write a review</button> : null}
                                </div>
                                }
                                <button onClick={onFinishBook} className="loginOption" value={currentBook?currentBook.id:"0"}>{isLoading ? "Loading..." : "Begin Next Book"}</button>                           
                            </div>
                            {errors.map((error=>(
                                    <error className="error" key={error}>{error}</error>
                            )))}
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