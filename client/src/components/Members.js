import React, {useEffect, useState} from 'react'

function Members({handleClick}){

    const [users,setUsers]=useState([])
    const [isLoading,setIsLoading]=useState(false)

    useEffect(()=>{
        if (users.length===0){
        setIsLoading(true)
    fetch('/users')
    .then(r=>r.json())
    .then(data=>{
        setUsers(data)
        setIsLoading(false)
    })}
    },[])


    return <div>
            <h1>Club Members</h1>
            {isLoading? <h3 className="bookPreview">Loading... </h3> : <div className="memberContainer">
                
                {users.map((user)=>(<div className="memberCard" key={user.name}>

                    <div className="memberInfo" key={user.name}>
                    <div className="user">
                        <img src={user.profile_image} alt={user.name} className="userPicture"></img>
                        <h3>{user.name}{user.admin ? ": Admin" : null}</h3>
                    </div>
                    <div className="reviewBody">
                        <h4>Favorite Book: {user.favorite_book}</h4>
                        <p>{user.bio}</p>
                    </div>
                   
                    
                </div>
                    <h3>Books that {user.name} has read</h3>
                <div className="memberBooksContainer">
                        {user.books.map((book)=>(
                            <img className="memberBook" onClick={handleClick} src={book.thumbnail} key={book.title} alt={book.title} />
                        ))}
                        </div>
                </div>
                ))}
            </div>}
        </div>
}

export default Members