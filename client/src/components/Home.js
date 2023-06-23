import React from 'react'

function Home({books}){

    
    
    return (
      <div className="bookContainer">
        {books.map((book)=>(
          <div className="bookPreview">
          <img src={book.volumeInfo.imageLinks.thumbnail}></img>
          {/* <h1>{book.volumeInfo.title}</h1> */}
          </div>
        ))}
        
      </div>
    );
}

export default Home