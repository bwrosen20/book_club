import React, {useEffect, useState} from 'react'

function Voting({books}){


    useEffect(()=>{

    })

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


    return <div>
            </div>
}

export default Voting