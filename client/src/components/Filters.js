import React from 'react'

function Filters({filterData,handleChange}){





    return <div className="filterContainer">

            <input
                placeholder="Search by Title or Author"
                type="text"
                name="input"
                className="filterInput"
                autoComplete="off"
                value={filterData.input}
                onChange={handleChange}
            />
            <select
            placeholder="Sort By"
            name="filter"
            className="filterInput"
            value={filterData.filter}
            onChange={handleChange}>
                <option>Choose Option</option>
                <option>Title</option>
                <option>Author</option>
                <option>Rating</option>
                <option>Newest</option>
            </select>

    </div>
}

export default Filters