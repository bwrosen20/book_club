import React, {useState} from 'react'
// import {UserContext} from './App'

function ReviewForm({book, writeReview}){

    // const user = useContext(UserContext)
    const [formData,setFormData]=useState({
        rating:"",
        body:""
    })
    const [errors,setErrors]=useState([])

    function onReviewSubmit(event){
        event.preventDefault()
        fetch(`/reviews`,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                ...formData,
                book_id:book.id
            })
        })
        .then(r=> {
            if (r.ok){
                r.json().then(data=>writeReview(data))}
            else{
                r.json().then(err=>setErrors(err.errors))
            }})
    }

    function onReviewInput(event){
        setFormData({...formData,[event.target.name]:event.target.value})
    }

    return <div className="reviewForm">

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
                <h4 className="error" key={err}>{err}</h4>
            ))}


        </form>
    </div>
}

export default ReviewForm