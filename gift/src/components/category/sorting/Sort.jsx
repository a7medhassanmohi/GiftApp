import React from 'react'

function Sort(props) {
    const newSortOrder=e=>{
        props.sortValue(e.target.value)
    }
    return (
        <div className=" text-center text-md-right">
             <select name="cars" id="cars" onChange={newSortOrder} >
    <option value="high to low">from low to high</option>
    <option value="low to high">from high to low</option>
  
  </select>
        </div>
    )
}

export default Sort
