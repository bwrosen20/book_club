import React from 'react'
import Review from './Review'

function ReviewContainer({book, handleDeleteReview, handleEditReview}){
    
    const bookSplit=book.updated_at.split("")
    const finishedArray=[bookSplit[5],bookSplit[6],"-",bookSplit[8],bookSplit[9],"-",bookSplit[0],bookSplit[1],bookSplit[2],bookSplit[3]]
    const finishedDate=finishedArray.join("")


    return <div>
        {book.reviews.length>0 ? <h1>Club Reviews</h1> :null}
        {book.finished ? <h4>The club finished {book.title} on {finishedDate}</h4> : null}

            <div className="reviewContainer">
                {book.reviews.map((review)=>(
                   <Review key={review.body} review={review} handleEditReview={handleEditReview} handleDeleteReview={handleDeleteReview} book={book}/>
                ))}
               

            </div>
    </div>
}

export default ReviewContainer