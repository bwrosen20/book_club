import React, {useState, useContext} from 'react'
import {UserContext} from './App'
import EditReview from './EditReview'

function Review({review, handleDeleteReview, book, handleEditReview}){

    const user = useContext(UserContext)
    const [showEditReview, setShowEditReview]=useState(false)

    const myStyle={
        textAlign:"left"
    }

    function onEditReviewClick(){
        setShowEditReview(!showEditReview)
    }

    

    function onDeleteReview(event){
        fetch(`/reviews/${review.id}`,{
            method:"DELETE",
            headers:{
              "Content-type":"application/json"
            },
            body:JSON.stringify({
              book_id:parseInt(event.target.value)
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
                <div className="review">
                    <div className="user">
                        <img src={review.user.profile_image} alt={review.user.name} className="userPicture"></img>
                        <h3>{review.user.name}</h3>
                    </div>
                    <div className="reviewBody">
                        <font size="7">{review.rating.toFixed(1)}</font>
                        <p style={myStyle}>{review.body}</p>
                    </div>
                    {user.id===review.user.id ? <button className="delete" onClick={onDeleteReview} value={book.id} id={review.id}>X</button> : null}
                    
                </div>
                {user.id===review.user.id ? <button className="editReview" onClick={onEditReviewClick}>Edit Review</button> : null}
                </div>}
                </div>
    
}

export default Review