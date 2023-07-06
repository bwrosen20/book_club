import '../App.css';
import React, {useEffect, useState}  from 'react'
import Home from './Home'
import Voting from './Voting'
import NavBar from './NavBar'
import DisplayBook from './DisplayBook'
import Members from './Members'
import CurrentBook from './CurrentBook'
import Login from './Login'
import {Route,Switch, useHistory} from 'react-router-dom'

function App() {

  const [books,setBooks]=useState([])
  const [isLoading,setIsLoading]=useState(false)
  const [user,setUser]=useState(null)
  const history=useHistory()

  useEffect(()=>{
    setIsLoading(true)
        fetch(`/books`)
        .then(r=>r.json())
        .then(data=>{
          setBooks(data)
        })
       
        fetch(`/me`)
        .then(r=>{
          if (r.ok){
            r.json().then((user)=>setUser(user))
          }
        })
        
        setIsLoading(false)
      },[])

  if (!user) return <Login onLogin={setUser}/>
      
    function handlePutBookForVote(data){
      console.log(data)
      if (data.length>1){
        setBooks([...books,data[0]])
        setUser(data[1])
        }
      else{
        setBooks(books.map((book)=>(book.id===data.id ? data : book)))
      }
    }

    function handleVoteButton(data,event){

      //if user.current_vote==event.target.value
        //=====> do nothing
      //if user.current_vote doesn't exist
        //add vote and change user vote to event.target.value
      //else (user already has vote for something else)
        //patch new vote, patch old vote away, change user.current_vote
        setBooks(books.map((book)=>{
          if (book.id===user.current_vote){
            return data[1]
          }
          else if (book.id===parseInt(event.target.value)){
            return data[0]
          }
          else{
            return book
          }
          }))
          setUser(data[2])
      }

    function handleFinishBook(data){
      setBooks(books.map((book)=>{
        if (book.id===data[0].id){
          return data[0]
        }
        else if (book.id===data[1].id){
          return data[1]
        }
        else{
          return book
        }
        }))
      setUser(data[2])
    }

    function handleDeleteReview(event){
      setBooks(books.map((book)=>{
          if (book.id==event.target.value){
            return {...book,reviews:book.reviews.filter((review)=>review.id!=event.target.id)}
          }
          else{
            return book
          }
          }))
    }

    function handleEditReview(reviewedBook){
      setBooks(books.map((book)=>{
          return {...book,reviews:book.reviews.map((review)=>(review.id===reviewedBook.id ? reviewedBook : review))}
      }))
    }

    function handleReview(update){
      setBooks(books.map((book)=>(book.id===update.id ? update : book)))
    }

  function onLogout(){
    fetch('/logout',{method:"DELETE"}).then((r)=>{
      if (r.ok){
        setUser(null)
      }
    })
  }
    
  function handleClick(event){
    history.push(`/books/${event.target.alt}`)
  }

      
  
    
    
  return <div>
    {isLoading? <h3>Loading...</h3>:
      <div>
        <NavBar name={user.name} onLogout={onLogout}/>
        <Switch>
          <Route exact path="/voting">
            <Voting user={user.current_vote} userId={user.id} isLoading={isLoading} userBook={user.book_for_vote} books={books} handleClick={handleClick} handlePutBookForVote={handlePutBookForVote} handleVoteButton={handleVoteButton}/>
          </Route>
          <Route exact path="/members">
            <Members/>
          </Route>
          <Route exact path="/login">
            <Login onLogin={setUser}/>
          </Route>
          <Route exact path="/books/:title">
            <DisplayBook books={books} handleDeleteReview={handleDeleteReview} handleEditReview={handleEditReview} user={user.id} handleReview={handleReview}/>
          </Route>
          <Route exact path="/current-book">
            <CurrentBook books={books} handleFinishBook={handleFinishBook} user={user.id} handleReview={handleReview} handleEditReview={handleEditReview} handleDeleteReview={handleDeleteReview}/>
          </Route>
          <Route path="/">
            <Home books={books} handleClick={handleClick}/>
          </Route>
        </Switch>
        
      </div>
    }
  </div>
  

}

export default App;



//pages I need
  
    //home page where the user can sign in or signup
    //book club home page where users can see the books they've read
    //voting page where users can vote on the next book (a user can have 1 book up for vote at a time)
    //book info page where a user can click a book and get info about it