import React from 'react'

function Reviews({book}){

    console.log(book)

    return <div>
        <h1>Club Reviews</h1>

            <div className="ReviewContainer">
                {book.reviews.map((review)=>(
                    <div className="Review">
                        <span className="User">
                            <img src={review.user.image_url} className="UserPicture"></img>
                            <h3>{review.user.name}</h3>
                        </span>
                        <span className="ReviewBody">
                            <font size="7">{review.rating}</font>
                            <p>{review.body}</p>
                        </span>
                    </div>
                ))}

            </div>
    </div>
}

export default (Reviews)