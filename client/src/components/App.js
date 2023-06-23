import '../App.css';
import React from 'react'
import Home from './Home'
import Voting from './Voting'
import NavBar from './NavBar'
import {Route,Switch} from 'react-router-dom'

function App() {

  return <div>
    <NavBar />
    <Switch>
      <Route exact path="/voting">
        <Voting />
      </Route>
      <Route path="/">
        <Home />
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