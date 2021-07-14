import React from 'react'

function colorFilter(props) {
    const newcolor=e=>{
        props.colorvalue(e.target.innerText)
    }
    return (
        <div className="text-center border">
            <h5>Color Filters</h5>
            <ul className="list-group">
            <li className="list-group-item border-0"style={{color: "black",cursor:"pointer"}} onClick={newcolor}>all</li>

            <li className="list-group-item border-0"style={{color: "red",cursor:"pointer"}} onClick={newcolor}>red</li>
  <li className="list-group-item border-0 " style={{color: "yellow",cursor:"pointer"}} onClick={newcolor}>yellow</li>
  <li className="list-group-item border-0"style={{color: "blue",cursor:"pointer"}} onClick={newcolor}>blue</li>
  <li className="list-group-item border-0"style={{color: "purple",cursor:"pointer"}} onClick={newcolor}>purple</li>
  <li className="list-group-item  border-0"style={{color: "green",cursor:"pointer"}} onClick={newcolor}>green</li>
</ul>
        </div>
    )
}

export default colorFilter
