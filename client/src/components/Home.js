import React from 'react'
import Filters from './Filters'

function Home({books, handleClick, filterData, handleChange}){

    return (
      <div>
        <Filters filterData={filterData} handleChange={handleChange}/>
      <div className="bookContainer">
        {books.map((book)=>(
          <div className="bookPreview">
          <img src={book.thumbnail} onClick={handleClick} alt={book.title} className="homeImg"></img>
          </div>
        ))}
        
      </div>
      </div>
    );
}

export default Home