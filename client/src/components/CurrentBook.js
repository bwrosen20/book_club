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
                        <img src={currentBook.thumbnail} alt={currentBook.thumbnail} className="PictureDisplay"></img>
                    </div>
                    <div className="BookInfo">
                        <h1>{currentBook.title}</h1>
                        <h4>By {currentBook.author}</h4>
                        <font size="4" className="description">{currentBook.description}</font>
                    </div>
                    
                        {currentBook.reviews ? <ReviewContainer book={currentBook} handleEditReview={handleEditReview} handleDeleteReview={handleDeleteReview}/> : null}
                </div>
                <div className="CurrentBookButtons">
                    
                                
                            <div>
                                {review?
                                <ReviewForm book={currentBook} writeReview={writeReview}/> :
                                <div>
                                    {writeReviewButton ? <button onClick={writeReview} className="currentBookOption">Write a review</button> : null}
                                </div>
                                }
                                <button onClick={onFinishBook} className="currentBookOption" value={currentBook?currentBook.id:"0"}>{isLoading ? "Loading..." : "Begin Next Book"}</button>                           
                            </div>
                            {errors.map((error=>(
                                    <error className="error" key={error}>{error}</error>
                            )))}
                </div>
            </div>
}

export default CurrentBook

