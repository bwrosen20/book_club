import React from 'react'
import Filters from './Filters'

function Home({books, handleClick, filterData, handleChange}){


  const finishedBooks=(books.filter((book)=>{return(book.finished && !book.current_book)}))

  let booksToDisplay=(finishedBooks.filter((book)=>(((book.title).toLowerCase().includes((filterData.input).toLowerCase()))||((book.author).toLowerCase().includes((filterData.input).toLowerCase())))))

        if (filterData.filter==="Author"){
            booksToDisplay=booksToDisplay.sort((a,b)=>(authorsLastName(a.author) > authorsLastName(b.author) ? 1 : -1))
        }
        else{
            booksToDisplay=booksToDisplay.sort((a,b)=>(removeArticles(a.title) > removeArticles(b.title) ? 1: -1))
        }

        function removeArticles(str){
          const words=str.split(" ")
          if (words.length<=1) return str
          else if (words[0].toLowerCase()==='a' || words[0].toLowerCase()==='an' || words[0].toLowerCase()==='the')
            return words.splice(1).join(" ")
          else return str
      }
  
      function authorsLastName(str){
        console.log(str)
        const nameArray = str.split(" ")
        console.log(nameArray)
        return nameArray.splice(-1)
      }

    return (
      <div>
        <Filters filterData={filterData} handleChange={handleChange}/>
      <div className="bookContainer">
        {booksToDisplay.map((book)=>(
          <div className="bookPreview">
          <img src={book.thumbnail} onClick={handleClick} alt={book.title} className="homeImg"></img>
          </div>
        ))}
        
      </div>
      </div>
    );
}

export default Home