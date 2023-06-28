import '../App.css';
import React, {useEffect, useState}  from 'react'
import Home from './Home'
import Voting from './Voting'
import NavBar from './NavBar'
import DisplayBook from './DisplayBook'
import Users from './Users'
import CurrentBook from './CurrentBook'
import Login from './Login'
import {Route,Switch, useHistory} from 'react-router-dom'

function App() {

  const [books,setBooks]=useState([])
  const [isLoading,setIsLoading]=useState(false)
  const [filterData,setFilterData]=useState({
    input:"",
    filter:"Sort By"
  })
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
      
      function handlePutBookForVote(newBook){
        setIsLoading(true)
        const bool=user.book_for_vote
        if (user.book_for_vote>0){
          fetch(`/books/${user.book_for_vote}`,{
            method:"PATCH",
            headers:{
              "Content-type":"application/json"
            },
            body:JSON.stringify({
              ...newBook,
            votes:0,
            current_book:false,
            finished:false
            })
          })
          .then(r=>r.json())
          .then(data=>{
            setBooks(books.map((book)=>(book.id===bool ? data : book)))})
            setIsLoading(false)
        }
        else{
        fetch('/books',{
          method:"POST",
          headers:{
            "Content-type": "application/json"
          },
          body:JSON.stringify({
            ...newBook,
            votes:0,
            current_book:false,
            finished:false
          })
        })
        .then(r=>r.json())
        .then(data=>{
          setBooks([...books,data])
          setUser({...user,book_for_vote:data.id})
        })
      }
      }

      function onVoteButton(event){

        //if user.current_vote==event.target.value
          //=====> do nothing
        //if user.current_vote doesn't exist
          //add vote and change user vote to event.target.value
        //else (user already has vote for something else)
          //patch new vote, patch old vote away, change user.current_vote
        console.log(user)
        if ((user.current_vote != event.target.value)&&(user.current_vote>0)){
          // setIsLoading(true)
          fetch('/books/vote',{
            method:"PATCH",
            headers:{
              "Content-type":"application/json"
            },
            body:JSON.stringify({
              user:user.id,
              voteBook:parseInt(event.target.value),
              otherBook:user.current_vote
            })
          })
            .then(r=>r.json())
            .then(data=>{
              setBooks(data)
              fetch(`/users/${user.id}`,{
                method:"PATCH",
                headers:{
                  "Content-type":'application/json'
                },
                body:JSON.stringify({
                  current_vote:parseInt(event.target.value)
                })
              })
              .then(r=>r.json())
              .then(data=>{
                console.log(data)
                setUser(data)
                // setIsLoading(false)
              })
            })
      
        }
        else{
          console.log("Didn't work")
        }
        }
       


      function onLogout(){
        console.log("I'm here")
        fetch('/logout',{method:"DELETE"}).then((r)=>{
          if (r.ok){
            setUser(null)
          }
        })
      }

      
  
    function handleChange(event){
      setFilterData({...filterData,[event.target.name]:event.target.value})
    }
    
    

    function handleClick(event){
      history.push(`/books/${event.target.alt}`)
    }

      
  
    if (!user && !isLoading) return <Login onLogin={setUser}/>
    
  return <div>
    {isLoading?
    <h1>Loading...</h1> :
  <div>
    <NavBar name={user.name} onLogout={onLogout}/>
    <Switch>
      <Route exact path="/voting">
        <Voting user={user.current_vote} books={books} handleClick={handleClick} handlePutBookForVote={handlePutBookForVote} onVoteButton={onVoteButton}/>
      </Route>
      <Route exact path="/users">
        <Users/>
      </Route>
      <Route exact path="/login">
        <Login onLogin={setUser}/>
      </Route>
      <Route exact path="/books/:title">
        <DisplayBook books={books}/>
      </Route>
      <Route exact path="/current-book">
        <CurrentBook books={books}/>
      </Route>
      <Route path="/">
        <Home books={books} handleClick={handleClick} handleChange={handleChange} filterData={filterData}/>
      </Route>
    </Switch>
    
  </div>}
  </div>
  
}

export default App;



//pages I need
  
    //home page where the user can sign in or signup
    //book club home page where users can see the books they've read
    //voting page where users can vote on the next book (a user can have 1 book up for vote at a time)
    //book info page where a user can click a book and get info about it