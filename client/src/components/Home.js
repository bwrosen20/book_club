import React from 'react'

function Home({books, handleClick}){

    
    
    return (
      <div className="bookContainer">
        {books.map((book)=>(
          <div className="bookPreview">
          <img src={book.volumeInfo.imageLinks.thumbnail} onClick={handleClick} alt={book.volumeInfo.title}></img>
          </div>
        ))}
        
      </div>
    );
}

export default Home