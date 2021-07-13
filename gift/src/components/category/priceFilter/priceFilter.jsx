import React from 'react'
function PriceFilter(props) {
const newprice=e=>{
    props.changePrice(e.target.value)
}
    return (
        <div className="text-center">
  <input type="range" className="w-75"  min="20" max="1000" value={props.ind}     
//   value={value}
//             onChange={e => setValue(e.target.value)}
onChange={newprice}
/>
            <p>{props.value}$</p>
        </div>
    )
}

export default PriceFilter
