import React from 'react'

function descFilter(props) {
    const newdesc=e=>{
        props.descvalue(e.target.innerText)
    }
    return (
        <div className="text-center border">
            <h5>Categories</h5>
            <ul className="list-group">
            <li className="list-group-item border-0" onClick={newdesc}>all</li>

  <li className="list-group-item border-0" onClick={newdesc}>Alstroemerias</li>
  <li className="list-group-item border-0"onClick={newdesc}>Calla Lilies</li>
  <li className="list-group-item border-0" onClick={newdesc}>Carnations</li>
  <li className="list-group-item border-0" onClick={newdesc}>Daisies</li>
  <li className="list-group-item  border-0" onClick={newdesc}>Gardenias</li>
</ul>
        </div>
    )
}

export default descFilter
