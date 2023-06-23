import React, {useEffect, useState} from 'react'

function Home(){

    const [books,setBooks]=useState([])

    useEffect(()=>{
      fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:potter&orderBy=relevance`)
      .then(r=>r.json())
      .then(data=>{
        setBooks(data.items.filter((book)=>(book.volumeInfo.ratingsCount>10) && (book.volumeInfo.language==="en")).sort((a,b)=>b.volumeInfo.ratingsCount - a.volumeInfo.ratingsCount))
      })
  
      
     
    },[])
  
    console.log(books)
    
    return (
      <div>
        {books.map((book)=>(
          <div>
          <img src={book.volumeInfo.imageLinks.thumbnail}></img>
          {/* <h1>{book.volumeInfo.title}</h1> */}
          </div>
        ))}
        
      </div>
    );
}

export default Home