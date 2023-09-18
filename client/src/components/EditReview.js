import React, {useState} from 'react'
// import {UserContext} from "./App"

function EditReview({review,onEditReview}){

    // const user = useContext(UserContext)
    const [formData,setFormData]=useState({
        body:review.body,
        rating:review.rating
    })
    const [isLoading,setIsLoading]=useState(false)
    const [errors,setErrors]=useState([])

    function onUpdateForm(event){
        setFormData({...formData,[event.target.name]:event.target.value})
    }

    function onFormSubmit(event){
        setIsLoading(true)
        event.preventDefault()

        fetch(`/reviews/${review.id}`,{
            method:"PATCH",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({...formData})
        })
        .then(r=>{
            
            if (r.ok){
                r.json().then(data=>{
            onEditReview(data)
            setIsLoading(false)})
                }
            else{
                r.json().then((err)=>setErrors(err.errors))
                setIsLoading(false)
            }
        })
    }

    return <div>
         <div className="Review">
                    <div className="User">
                        <img src={review.user.profile_image} alt={review.user.profile_image} className="UserPicture"></img>
                        <h3>{review.user.name}</h3>
                    </div>
                    <div className="smallerReviewBody">
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
                            {errors.map((error)=>(
                                <h4 className="error" key={error}>{error}</h4>
                            ))}
                            </form>
                    </div>
                    
                </div>
    </div>
}

export default EditReview