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
    
        fetch(`/books`)
        .then(r=>r.json())
        .then(data=>{
          setBooks(data)
        })
        setIsLoading(true)
        fetch(`/me`)
        .then(r=>{
          if (r.ok){
            setIsLoading(false)
            r.json().then((user)=>setUser(user))
          }
        })
      },[])
      


      function onLogout(){
        console.log("I'm here")
        fetch('/logout',{method:"DELETE"}).then((r)=>{
          if (r.ok){
            setUser(null)
          }
        })
      }

      const finishedBooks=(books.filter((book)=>{return(book.finished && !book.current_book)}))

      const voteBooks=(books.filter((book)=>(!book.finished && !book.current_book && book.genres)))

      const currentBook=(books.find((book)=>(book.current_book)))
  
    function handleChange(event){
      setFilterData({...filterData,[event.target.name]:event.target.value})
    }

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
    

    function handleClick(event){
      history.push(`/books/${event.target.alt}`)
    }
  
    if (!user) return <Login onLogin={setUser}/>
    
  return <div>
    {isLoading?
    <h1>Loading...</h1> :
  <div>
    <NavBar name={user.name} onLogout={onLogout}/>
    <Switch>
      <Route exact path="/voting">
        <Voting books={voteBooks} handleClick={handleClick}/>
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
        <CurrentBook currentBook={currentBook}/>
      </Route>
      <Route path="/">
        <Home books={booksToDisplay} handleClick={handleClick} handleChange={handleChange} filterData={filterData}/>
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