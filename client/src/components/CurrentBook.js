import React, {useState, useEffect, useContext} from 'react'
import {UserContext} from './App'
import ReviewContainer from './ReviewContainer'
import ReviewForm from './ReviewForm'

function CurrentBook({books,handleFinishBook, handleReview, handleEditReview, handleDeleteReview}){

    const user = useContext(UserContext)
    const currentBook=(books.find((book)=>(book.current_book)))
    const [review,setReview]=useState(false)
    const [writeReviewButton, setWriteReviewButton]=useState(true)
    const [errors,setErrors]=useState([])
    const [isLoading, setIsLoading]=useState(false)


    useEffect(()=>{
       setWriteReviewButton(true)
       if (currentBook){
        if ((currentBook.reviews)&&(currentBook.reviews.length>0)){
             currentBook.reviews.forEach((review)=>{
                if (user.id===review.user.id){
                    setWriteReviewButton(false)
                }
            })
        }
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
            finishedBook:parseInt(event.target.value)
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
        {currentBook ? 
        <div>
                <div className="bookDisplay">
                    <div className="bookPicture">
                        <img src={currentBook.thumbnail} alt={currentBook.thumbnail} className="pictureDisplay"></img>
                    </div>
                    <div className="bookInfo">
                        <h1>{currentBook.title}</h1>
                        <h4>By {currentBook.author}</h4>
                        <div className="descriptionContainer">
                            <font size="4" className="description">{currentBook.description}</font>
                        </div>
                    </div>
                    
                        {currentBook.reviews ? <ReviewContainer book={currentBook} handleEditReview={handleEditReview} handleDeleteReview={handleDeleteReview}/> : null}
                </div>
                <div className="currentBookButtons">
                    
                                
                            <div>
                                {review?
                                <ReviewForm book={currentBook} writeReview={writeReview}/> :
                                <div>
                                    {writeReviewButton ? <button onClick={writeReview} className="currentBookOption">Write a review</button> : null}
                                </div>
                                }
                                {user.admin ? <button onClick={onFinishBook} className="currentBookOption" value={currentBook?currentBook.id:"0"}>{isLoading ? "Loading..." : "Begin Next Book"}</button> : null}                        
                            </div>
                            
                </div>
                </div>: 
                <div>
                    <h1>No books yet! Please go nominate a book at the voting page</h1>
                        <h2 className="firstBookStart" onClick={onFinishBook} value="0">Begin first book!</h2>
                        </div>}
                        <div style={{margin:"auto"}}>
                        {errors.map((error=>(
                                    <p className="error" key={error}>{error}</p>
                            )))}
                        </div>
            </div>
}

export default CurrentBook

