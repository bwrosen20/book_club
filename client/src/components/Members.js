import React, {useEffect, useState} from 'react'

function Members(){

    const [users,setUsers]=useState([])
    const [isLoading,setIsLoading]=useState(false)

    useEffect(()=>{
        if (users.length===0){
        setIsLoading(true)
    fetch('/users')
    .then(r=>r.json())
    .then(data=>{
        setUsers(data)
        setIsLoading(false)})}
    },[])


    return <div>
            <h1>Club Members</h1>
            {isLoading? <h3 className="bookPreview">Loading... </h3> : <div className="MemberContainer">
                
                {users.map((user)=>(
                    <div className="Review">
                    <div className="User">
                        <img src={user.image_url} className="UserPicture"></img>
                        <h3>{user.name}</h3>
                    </div>
                    <div className="ReviewBody">
                        <h4>Favorite Book: {user.favorite_book}</h4>
                        <p>{user.bio}</p>
                    </div>
                    
                </div>
                ))}
            </div>}
        </div>
}

export default Members