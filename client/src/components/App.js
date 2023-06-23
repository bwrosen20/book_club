import '../App.css';
import React, {useEffect, useState}  from 'react'
import Home from './Home'
import Voting from './Voting'
import NavBar from './NavBar'
import DisplayBook from './DisplayBook'
import {Route,Switch, useHistory} from 'react-router-dom'

function App() {

  const [books,setBooks]=useState([])
  const history=useHistory()

    useEffect(()=>{
      fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:potter&orderBy=relevance`)
      .then(r=>r.json())
      .then(data=>{
        setBooks(data.items.filter((book)=>(book.volumeInfo.ratingsCount>10) && (book.volumeInfo.language==="en")).sort((a,b)=>b.volumeInfo.ratingsCount - a.volumeInfo.ratingsCount))
      })
  
      
     
    },[])

    function handleClick(event){
      console.log("clicked")
      history.push(`/books/${event.target.alt}`)
    }
  
    console.log(books)

  return <div>
    <NavBar />
    <Switch>
      <Route exact path="/voting">
        <Voting />
      </Route>
      <Route exact path="/books/:title">
        <DisplayBook books={books}/>
      </Route>
      <Route path="/">
        <Home books={books} handleClick={handleClick}/>
      </Route>
    </Switch>
    
  </div>
  
}

export default App;



//pages I need
  
    //home page where the user can sign in or signup
    //book club home page where users can see the books they've read
    //voting page where users can vote on the next book (a user can have 1 book up for vote at a time)
    //book info page where a user can click a book and get info about it