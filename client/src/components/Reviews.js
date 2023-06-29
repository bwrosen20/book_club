import React from 'react'

function Reviews({book, handleDeleteReview, user}){
    
    const bookSplit=book.updated_at.split("")
    const finishedArray=[bookSplit[5],bookSplit[6],"-",bookSplit[8],bookSplit[9],"-",bookSplit[0],bookSplit[1],bookSplit[2],bookSplit[3]]
    const finishedDate=finishedArray.join("")


    return <div>
        {book.reviews.length>0 ? <h1>Club Reviews</h1> :null}
        {book.finished ? <h4>The club finished {book.title} on {finishedDate}</h4> : null}

            <div className="ReviewContainer">
                {book.reviews.map((review)=>(
                    
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
                ))}

            </div>
    </div>
}

export default (Reviews)