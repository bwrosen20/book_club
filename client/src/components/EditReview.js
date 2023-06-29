import React, {useState} from 'react'

function EditReview({review,onEditReview}){

    const [formData,setFormData]=useState({
        body:review.body,
        rating:review.rating
    })
    const [isLoading,setIsLoading]=useState(false)

    function onUpdateForm(event){
        setFormData({...formData,[event.target.name]:event.target.value})
    }

    function onFormSubmit(event){
        setIsLoading(true)
        event.preventDefault()

        fetch('/books/editReview',{
            method:"PATCH",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({...formData,
            review_id:review.id})
        })
        .then(r=>r.json())
        .then(data=>{
            onEditReview(data)
            setIsLoading(false)})
    }

    return <div>
         <div className="Review">
                    <div className="User">
                        <img src={review.user.image_url} className="UserPicture"></img>
                        <h3>{review.user.name}</h3>
                    </div>
                    <div className="ReviewBody">
                        <form onSubmit={onFormSubmit}>
                            <input 
                            name="rating"
                            className="loginOption"
                            value={formData.rating}
                            type="text"
                            onChange={onUpdateForm}
                            />

                            <textarea 
                            name="body"
                            className="loginOption"
                            value={formData.body}
                            type="text"
                            rows="5"
                            onChange={onUpdateForm}
                            />

                            <button className="ReviewButton">{isLoading ? "Loading..." : "Submit"}</button>
                            </form>
                    </div>
                    
                </div>
    </div>
}

export default EditReview