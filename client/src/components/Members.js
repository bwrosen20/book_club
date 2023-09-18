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
            {isLoading? <h3 className="bookPreview">Loading... </h3> : <div className="MemberContainer">
                
                {users.map((user)=>(<div className="MemberCard" key={user.name}>

                    <div className="MemberInfo" key={user.name}>
                    <div className="User">
                        <img src={user.profile_image} alt={user.name} className="UserPicture"></img>
                        <h3>{user.name}{user.admin ? ": Admin" : null}</h3>
                    </div>
                    <div className="ReviewBody">
                        <h4>Favorite Book: {user.favorite_book}</h4>
                        <p>{user.bio}</p>
                    </div>
                   
                    
                </div>
                    <h3>Books that {user.name} has read</h3>
                <div className="MemberBooksContainer">
                        {user.books.map((book)=>(
                            <img className="MemberBook" onClick={handleClick} src={book.thumbnail} key={book.title} alt={book.title} />
                        ))}
                        </div>
                </div>
                ))}
            </div>}
        </div>
}

export default Members