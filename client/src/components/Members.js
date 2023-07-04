import React, {useEffect, useState} from 'react'
import { useResolvedPath } from 'react-router-dom'

function Members(){

    const [users,setUsers]=useState([])

    useEffect(()=>{
    fetch('/users')
    .then(r=>r.json())
    .then(data=>setUsers(data))
    },[])

    return <div className="MemberContainer">
        <h1>Club Members</h1>
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
    </div>
}

export default Members