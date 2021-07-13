import React from 'react'
import DescFilter from './descFilter/descFilter'
import PriceFilter from './priceFilter/priceFilter'
import ColorFilter from './colorFilter/colorFilter'
import Sort from './sorting/Sort'
import "../category/category.css"
import{useState} from"react"

const flowers = [
    {
      id: 'e1',
      color: 'red',
      amount: 94.12,
      desc:"Alstroemerias",
      pic:"https://d1whpkioiz600t.cloudfront.net/Images/product/100-red-roses-bunch-rs-2100.jpg"
    },
    { id: 'e2', color: 'blue', amount: 799.49,desc:"Alstroemerias",pic:"https://images-na.ssl-images-amazon.com/images/I/51mMNAQ5zpL.jpg" },
    {
      id: 'e3',
      color: 'yellow',
      amount: 300,
      desc:"Gardenias",
      pic:"https://images-na.ssl-images-amazon.com/images/I/816BdQFBxTL._SX425_.jpg"
    },
    {
      id: 'e4',
      color: 'red',
      amount: 450,
      desc:"Carnations",
      pic:"https://vilniusflowers.lt/wp-content/uploads/2019/10/bright-pink-and-red.jpg"
    },
    { id: 'e5', color: 'purple', amount: 549,desc:"Gardenias",pic:"https://sf.tac-cdn.net/images/products/large/FTD-TTB.jpg?auto=webp&quality=80" },
    { id: 'e6', color: 'yellow', amount: 623.49,desc:"Daisies",pic:"https://assets.eflorist.com/assets/products/PHR_/TRS15-1A.jpg" },

  ];

function Category() {
  const[order,Setorder]=useState("high to low")
         const [ value, setValue ] = useState(1000);
         const[desc,setdesc]=useState("all")
         const[color,setcolor]=useState("all")
         const changePrix=selectedprice=>{
             setValue(selectedprice)
         }
         const changedesc=selectedDesc=>{
           setdesc(selectedDesc)
         }
         const changeColor=selectedColor=>{
           setcolor(selectedColor)
         }
         const changeOrder=selectedOrder=>{
           Setorder(selectedOrder)
         }
         function compare( a, b ) {
       if(order==="high to low"){
        if ( a.amount < b.amount ){
          return -1;
        }
        if ( a.amount > b.amount ){
          return 1;
        }
        return 0;
       }
       else{
        if ( a.amount < b.amount ){
          return 1;
        }
        if ( a.amount > b.amount ){
          return -1;
        }
        return 0;
       }
        }
         const filtredFlowers=flowers.filter(
            expense=>{
              if(desc==="all"&&color==="all"){return expense.amount<=value}
            else if(desc!=="all"&&color==="all"){
              return expense.amount<=value && expense.desc===desc
            }
            else if(desc==="all"&&color!=="all"){
              return expense.amount<=value && expense.color===color

            }
            else{
              return expense.amount<=value && expense.color===color && expense.desc===desc

            }
            }
          )
          filtredFlowers.sort(compare)
    return (
        <div>
            <div className="jumbotron jumbotron-fluid bg-dark">
  <div className="container">
    <h1 className="display-2 text-white  text-center">Our Store</h1>
    <div className="acd  text-center">∿∿∿∿∿</div>  </div>
</div>
<div className="container mt-4">
<Sort sortValue={changeOrder}/>

    <div className="row mt-3">
<div className="col-md-3">
    <div className="row">
        <div className=" col-4 col-md-12"><DescFilter descvalue={changedesc}/></div>
        <div className=" d-flex align-items-center justify-content-center  col-4 col-md-12"><PriceFilter value={value} ind={value} changePrice={changePrix}/></div>
        <div className=" col-4 col-md-12"><ColorFilter colorvalue={changeColor}/></div>

    </div>
</div>
<div className="col-md-9">
    <div className="row">
        {/* <div className="col-md-4  d-flex align-items-center justify-content-center flex-column">
            <img src={picture} className="img-fluid w-75 " alt="" />
            <p className="text-center w-75">40$</p>
        </div> */}
        
        {
        filtredFlowers.map((el) => {
          return (
      <div className="col-md-4  d-flex align-items-center justify-content-center flex-column mt-3" key={el.id}>
        <div className="position-relative show-icons bg-dark">
                    <img src={el.pic} className="img-fluid w-100 h-100 rounded  " alt="flowerpic" />
                    <div className=" w-100 social d-flex align-items-center justify-content-center">
                 <div className="social-i d-flex align-items-center justify-content-center">   <i class="fas fa-shopping-cart"></i></div>
                 <div className="social-i d-flex align-items-center justify-content-center text-danger"><i class="fas fa-heart"></i></div>
                 <div className="social-i d-flex align-items-center justify-content-center"><i class="fas fa-eye"></i></div>
                    </div>
                    </div>
                    <p className="text-center w-75 mt-3 flowerFont" style={{fontSize:"22px"}}>{el.desc}</p>

                    <p className="text-center w-75 mt-3" style={{fontSize:"22px"}}>{el.amount}</p>
                    <p className="text-center w-75 mb-3" style={{color: el.color,fontSize:"20px"}}>{el.color}</p>      
                    </div>
          );
        })}
  
    </div>
</div>
    </div>
</div>
        </div>
    )
}

export default Category
