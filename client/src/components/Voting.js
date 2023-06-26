import React, {useState} from 'react'
import DisplayBook from './DisplayBook'

function Voting({books, handleClick}){
    

    const [searchValue,setSearchValue]=useState("")
    const [newBooks,setNewBooks]=useState([])
    const [showBook, setShowBook]=useState(true)
    const [searchBook,setSearchBook]=useState({
        title:"",
        author:"",
        description:"",
        thumbnail:""
    })

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

        console.log(typeof(searchBook))
        setShowBook(!showBook)
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
        event.preventDefault()
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchValue}&orderBy=relevance&maxResults=10`)
        .then(r=>r.json())
        .then(data=>{
          setNewBooks(data.items.filter((book)=>(book.volumeInfo.language==="en")).sort((a,b)=>b.volumeInfo.ratingsCount - a.volumeInfo.ratingsCount))
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
                            {books.map((book)=>(
                                <div className="bookPreview">
                                    <img src={book.thumbnail} className="homeImg" onClick={handleClick} alt={book.title}></img>
                                    <h3>Votes:{book.votes}</h3>
                                    <button>Vote</button>
                                </div>
                            ))}
                    </div>
                    <div className="searchContainer">
                        <h2>Search for the club's next book</h2>
                        <form onSubmit={handleSearch}>
                        <input
                        type="text"
                        placeholder="Search by title"
                        autoComplete="off"
                        value={searchValue}
                        onChange={handleSetSearch}
                        />
                        <button>Search</button>
                        </form>
                    </div>
                    <div className="bookContainer">
                            {newBooks.map((book)=>(
                                <div className="bookPreview">
                                    {book.volumeInfo.imageLinks ? <img src={book.volumeInfo.imageLinks.thumbnail} onClick={setCurrentBook} alt={book.id} className="homeImg"></img> :
                                    <p>{book.volumeInfo.title}</p>}
                                </div>
                            ))}
                    </div>
                </div> : 
                <DisplayBook books={searchBook} returnToVoting={returnToVoting}/>}
            </div>

            
}

export default Voting


//fetch request to google api
    //sends to display book page when click thumbnail