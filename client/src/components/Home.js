import React from 'react'

function Home({books, handleClick}){

    
    
    return (
      <div className="bookContainer">
        {books.map((book)=>(
          <div className="bookPreview">
          <img src={book.volumeInfo.imageLinks.thumbnail} onClick={handleClick} alt={book.volumeInfo.title}></img>
          {/* <h1>{book.volumeInfo.title}</h1> */}
          </div>
        ))}
        
      </div>
    );
}

export default Home