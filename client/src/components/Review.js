import React, {useState} from 'react'
import EditReview from './EditReview'

function Review({review, handleDeleteReview, user, book, handleEditReview}){

    const [showEditReview, setShowEditReview]=useState(false)

    function onEditReviewClick(){
        setShowEditReview(!showEditReview)
    }

    function onDeleteReview(event){
        fetch('/books/deleteReview',{
            method:"DELETE",
            headers:{
              "Content-type":"application/json"
            },
            body:JSON.stringify({
              book_id:parseInt(event.target.value),
              review_id:parseInt(event.target.id)
            })
          
          })
            .then(handleDeleteReview(event))
    }

    function onEditReview(reviewedBook){
        setShowEditReview(!showEditReview)
        handleEditReview(reviewedBook)
    }

    return <div> {showEditReview ? 
                <EditReview review={review} onEditReview={onEditReview}/> :
                <div>
                <div className="Review">
                    <div className="User">
                        <img src={review.user.profile_image} alt={review.user.profile_image} className="UserPicture"></img>
                        <h3>{review.user.name}</h3>
                    </div>
                    <div className="ReviewBody">
                        <font size="7">{review.rating.toFixed(1)}</font>
                        <p>{review.body}</p>
                    </div>
                    {user===review.user.id ? <button className="delete" onClick={onDeleteReview} value={book.id} id={review.id}>X</button> : null}
                    
                </div>
                {user===review.user.id ? <button className="EditReview" onClick={onEditReviewClick}>Edit Review</button> : null}
                </div>}
                </div>
    
}

export default Review