import React, {useState} from 'react'
import Filters from './Filters'

function Home({books, handleClick, handleChange}){


  const [filterData,setFilterData]=useState({
    input:"",
    filter:"Sort By"
  })

  function handleChange(event){
    setFilterData({...filterData,[event.target.name]:event.target.value})
  }

  const finishedBooks=(books.filter((book)=>{return(book.finished && !book.current_book)}))

  let booksToDisplay=(finishedBooks.filter((book)=>(((book.title).toLowerCase().includes((filterData.input).toLowerCase()))||((book.author).toLowerCase().includes((filterData.input).toLowerCase())))))

        if (filterData.filter==="Author"){
            booksToDisplay=booksToDisplay.sort((a,b)=>(authorsLastName(a.author) > authorsLastName(b.author) ? 1 : -1))
        }
        else if (filterData.filter==="Title"){
            booksToDisplay=booksToDisplay.sort((a,b)=>(removeArticles(a.title) > removeArticles(b.title) ? 1: -1))
        }
        else if (filterData.filter==="Rating"){
          booksToDisplay.forEach((book)=>{
            book.ratings=[]
            if (book.reviews.length>0){
              book.reviews.forEach((review)=>{
                book.ratings.push(review.rating)
              })
              book.rating=(book.ratings.reduce((a,b)=>a+b))/(book.ratings.length)
            }
            else 
              book.rating=0
          })
          booksToDisplay=booksToDisplay.sort((a,b)=>b.rating - a.rating)
        }
        else {
          booksToDisplay=booksToDisplay.sort((a,b)=>(a.created_at > b.created_at ? -1 : 1))
        }


        function removeArticles(str){
          const words=str.split(" ")
          if (words.length<=1) return str
          else if (words[0].toLowerCase()==='a' || words[0].toLowerCase()==='an' || words[0].toLowerCase()==='the')
            return words.splice(1).join(" ")
          else return str
      }
  
      function authorsLastName(str){
        const nameArray = str.split(" ")
        return nameArray.splice(-1)
      }

    return (
      <div>
        <Filters filterData={filterData} handleChange={handleChange}/>
      <div className="bookContainer">
        {booksToDisplay.map((book)=>(
          <div className="bookPreview" key={book.title}>
          <img src={book.thumbnail} onClick={handleClick} alt={book.title} className="homeImg"></img>
          </div>
        ))}
        
      </div>
      </div>
    );
}

export default Home