import React, {useState} from 'react'

function ReviewForm({book, user, writeReview}){

    const [formData,setFormData]=useState({
        rating:"",
        body:""
    })
    const [errors,setErrors]=useState([])

    function onReviewSubmit(event){
        event.preventDefault()
        fetch(`/books/review`,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                ...formData,
                book_id:book.id,
                user_id:user
            })
        })
        .then(r=> {
            if (r.ok){
                r.json().then(data=>writeReview(data))}
            else{
                r.json().then(err=>setErrors(err))
            }})
    }

    function onReviewInput(event){
        setFormData({...formData,[event.target.name]:event.target.value})
    }

    return <div>

        <form onSubmit={onReviewSubmit}>
            <input
                name="rating"
                className="reviewOption"
                placeholder="Rating out of 10"
                autoComplete="off"
                value={formData.rating}
                onChange={onReviewInput}
            />
            <textarea 
                rows="5"
                name="body"
                className="reviewOption"
                placeholder="Review Body"
                autoComplete="off"
                value={formData.body}
                onChange={onReviewInput}
            />

            <button className="reviewButton">Submit</button>
            {errors.map((err)=>(
                <h3>{err}</h3>
            ))}


        </form>
    </div>
}

export default ReviewForm