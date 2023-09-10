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

export const UserContext = React.createContext()

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



    function handleLogin(user){
      setUser(user)
      history.push(`/home`)
    }
      
    function handlePutBookForVote(data){
      console.log(data)
      const idArray=books.map((book)=>book.id)

        if (idArray.includes(data.id)){
          setBooks(books.map((book)=>(book.id===data.id ? data : book))) 
        }
        else {
          setBooks([...books,data[0]])
        }
      

      
    }

    function handleVoteButton(data,event){
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
          setUser({...user,current_vote:data[0].id})
      }

    function handleFinishBook(data){
      setBooks(books.map((book)=>{
        console.log(data)
        if (book.id===data[0].id){
          return data[0]
        }
        else if (book.id===data[1].id){
          return data[1]
        }
        else{
          return {...book,votes:0}
        }
        }))
        if (user.id===data[2].id){
          setUser({...data[2],current_vote:0})
        }
    }

    function handleDeleteReview(event){
      setBooks(books.map((book)=>{
          if (book.id===parseInt(event.target.value)){
            return {...book,reviews:book.reviews.filter((review)=>review.id!==parseInt(event.target.id))}
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

    
    function handleClick(event){
      history.push(`/books/${event.target.alt}`)
    }

    function onNavClick(event){
      if (event.target.value==="logout"){
        fetch('/logout',{method:"DELETE"}).then((r)=>{
          if (r.ok){
            setUser(null)
          }
        })
      }
      else{
        history.push(`/${event.target.value}`)
      }
      
    }
      
  if (!user) return <Login onLogin={handleLogin}/>
    
  return <div>
    {isLoading? <h3>Loading...</h3>:
      <div>
        <UserContext.Provider value={user}>
        <NavBar onNavClick={onNavClick}/>
        <Switch>
          <Route exact path="/voting">
            <Voting isLoading={isLoading} books={books} handleClick={handleClick} handlePutBookForVote={handlePutBookForVote} handleVoteButton={handleVoteButton}/>
          </Route>
          <Route exact path="/members">
            <Members handleClick={handleClick}/>
          </Route>
          <Route exact path="/login">
            <Login onLogin={handleLogin}/>
          </Route>
          <Route exact path="/books/:title">
            <DisplayBook books={books} handleDeleteReview={handleDeleteReview} handleEditReview={handleEditReview} handleReview={handleReview}/>
          </Route>
          <Route exact path="/current-book">
            <CurrentBook books={books} handleFinishBook={handleFinishBook} handleReview={handleReview} handleEditReview={handleEditReview} handleDeleteReview={handleDeleteReview}/>
          </Route>
          <Route path="/">
            <Home books={books} handleClick={handleClick}/>
          </Route>
        </Switch>
        </UserContext.Provider>
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