import React, {useState} from 'react'
import EditReview from './EditReview'

function Review({review, handleDeleteReview, user, book, handleEditReview}){

    const [showEditReview, setShowEditReview]=useState(false)

    function onEditReviewClick(){
        setShowEditReview(!showEditReview)
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
                        <img src={review.user.image_url} className="UserPicture"></img>
                        <h3>{review.user.name}</h3>
                    </div>
                    <div className="ReviewBody">
                        <font size="7">{review.rating}</font>
                        <p>{review.body}</p>
                    </div>
                    {user==review.user.id ? <button className="delete" onClick={handleDeleteReview} value={book.id} id={review.id}>X</button> : null}
                    
                </div>
                {user===review.user.id ? <button className="EditReview" onClick={onEditReviewClick}>Edit Review</button> : null}
                </div>}
                </div>
    
}

export default Review