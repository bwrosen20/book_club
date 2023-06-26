import React from 'react'

function Voting({books, handleClick}){
    

    // useEffect(()=>{
    //     fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:potter&orderBy=relevance`)
    //     .then(r=>r.json())
    //     .then(data=>{
    //       setBooks(data.items.filter((book)=>(book.volumeInfo.ratingsCount>10) && (book.volumeInfo.language==="en")).sort((a,b)=>b.volumeInfo.ratingsCount - a.volumeInfo.ratingsCount))
    //     })
    //   },[])

    // useEffect(()=>{
    //     fetch('/users')
    //     .then(r=>r.json())
    //     .then(data=>setUsers(data))
    // },[])


    return <div>
                <h1>Vote for the next book!</h1>
                <div className="bookContainer">
                        {books.map((book)=>(
                            <div className="bookPreview">
                                <img src={book.thumbnail} className="homeImg" onClick={handleClick} alt={book.title}></img>
                                <h3>Votes:{book.votes}</h3>
                            </div>
                        ))}
                </div>
            </div>
}

export default Voting