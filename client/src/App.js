import './App.css';
import React, {useState, useEffect} from 'react'

function App() {

  const [books,setBooks]=useState([])

  useEffect(()=>{
    fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:percy jackson&orderBy=relevance`)
    .then(r=>r.json())
    .then(data=>{
      setBooks(data.items.filter((book)=>(book.volumeInfo.ratingsCount>0) && (book.volumeInfo.language==="en")).sort((a,b)=>b.volumeInfo.ratingsCount - a.volumeInfo.ratingsCount))
    })

    
   
  },[])

  console.log(books)
  
  return (
    <div>
      {books.map((book)=>(
        <h1>{book.volumeInfo.title}</h1>
      ))}
      
    </div>
  );
}

export default App;
