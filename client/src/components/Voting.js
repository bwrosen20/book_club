import React, {useState} from 'react'
import DisplayBook from './DisplayBook'

function Voting({user,userBook, userId, books, handleClick, handlePutBookForVote, handleVoteButton}){
    
    const voteBooks=(books.filter((book)=>(!book.finished && !book.current_book)))

    const [searchValue,setSearchValue]=useState("")
    const [isLoading,setIsLoading]=useState(false)
    const [newBooks,setNewBooks]=useState([])
    const [showBook, setShowBook]=useState(true)
    const [searchBook,setSearchBook]=useState({
        title:"",
        author:"",
        description:"",
        thumbnail:""
    })

    const [onLoading,setOnLoading]=useState(false)

    function handleSetSearch(event){
        setSearchValue(event.target.value)
    }

    function setCurrentBook(event){
        const bookData=newBooks.find((book)=>(book.id===event.target.alt))
        setSearchBook({
            "title":bookData.volumeInfo.title,
            "author":(bookData.volumeInfo.authors[0]),
            "description":bookData.volumeInfo.description,
            "thumbnail":bookData.volumeInfo.imageLinks.thumbnail
        })
        setShowBook(!showBook)
    }

    function onVoteButton(event){
        setIsLoading(true)
          fetch('/books/vote',{
            method:"PATCH",
            headers:{
              "Content-type":"application/json"
            },
            body:JSON.stringify({
              voteBook:parseInt(event.target.value),
              currentBook:user,
              user_id:userId
            })
          })
            .then(r=>r.json())
            .then(data=>{
              handleVoteButton(data,event)
              setIsLoading(false)
              
            })
    }

    function bookForVote(){
    setIsLoading(true)
    setShowBook(!showBook)
    if (userBook>0){
      fetch(`/books/${userBook}`,{
        method:"PATCH",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify({
          ...searchBook,
        votes:0,
        current_book:false,
        finished:false
        })
      })
      .then(r=>r.json())
      .then(data=>{
        handlePutBookForVote(data)
        setIsLoading(false)})
    }
    else{
    fetch('/books',{
      method:"POST",
      headers:{
        "Content-type": "application/json"
      },
      body:JSON.stringify({
        ...searchBook,
        votes:0,
        current_book:false,
        finished:false,
        user_id:userId
      })
    })
    .then(r=>r.json())
    .then(data=>{
      handlePutBookForVote(data)
      setIsLoading(false)
    })
  }
}

    // useEffect(()=>{
    //     fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:potter&orderBy=relevance`)
    //     .then(r=>r.json())
    //     .then(data=>{
    //       setBooks(data.items.filter((book)=>(book.volumeInfo.ratingsCount>10) && (book.volumeInfo.language==="en")).sort((a,b)=>b.volumeInfo.ratingsCount - a.volumeInfo.ratingsCount))
    //     })
    //   },[])

    // useEffect(()=>{
    //     fetch('/users')
    //     .then(r=>r.json())
    //     .then(data=>setUsers(data))
    // },[])

    function handleSearch(event){
        setOnLoading(true)
        event.preventDefault()
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&orderBy=relevance&maxResults=10`)
        .then(r=>r.json())
        .then(data=>{
          setNewBooks(data.items.filter((book)=>((book.volumeInfo.language==="en")&&(book.volumeInfo.imageLinks))).sort((a,b)=>b.volumeInfo.ratingsCount - a.volumeInfo.ratingsCount))
          setOnLoading(false)
        })

        
        setSearchValue("")
    }

    function returnToVoting(){
        setShowBook(!showBook)
    }




    return <div>
        {showBook ?
            <div>
                    <h1>Vote for the next book!</h1>
                    <div className="bookContainer">
                            {voteBooks.map((book)=>(
                                <div className="bookPreview">
                                    <img src={book.thumbnail} className="homeImg" onClick={handleClick} alt={book.title}></img>
                                    <h3>Votes:{book.votes}</h3>
                                    {((user===book.id)||(userBook===book.id)) ? null : <button onClick={onVoteButton} value={book.id}>Vote</button>
                                    }
                                </div>
                            ))}
                           
                    </div>
                    {isLoading ? <h3 className="ReturnButton">Loading...</h3> : null}
                    <div className="searchContainer">
                        <h2>Search for the club's next book</h2>
                        <form onSubmit={handleSearch}>
                        <input
                        type="text"
                        placeholder="Search by title or author"
                        autoComplete="off"
                        value={searchValue}
                        onChange={handleSetSearch}
                        />
                        <button>{onLoading ? "Loading..." : "Search"}</button>
                        </form>
                    </div>
                    <div className="bookContainer">
                            {newBooks.map((book)=>(
                                <div className="bookPreview">
                                    <img src={book.volumeInfo.imageLinks.thumbnail} onClick={setCurrentBook} alt={book.id} className="homeImg"></img>
                                    
                                </div>
                            ))}
                    </div>
                </div> : 
                <DisplayBook books={searchBook} bookForVote={bookForVote} returnToVoting={returnToVoting}/>}
            </div>

            
}

export default Voting


//fetch request to google api
    //sends to display book page when click thumbnail


//when vote button is clicked
    //vote tally goes up
    //if the user had previously voted for another book, that tally goes down
        //send patch request to book and user