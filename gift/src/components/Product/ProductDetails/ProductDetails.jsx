import React from 'react'
import '../Product.css'
function ProductDetails() {
    return (
        <>
            <section className="w-100" id="wrapper">
                <nav className="p-5">
                    <div className="container d-flex justify-content-between align-items-center">
                        <div id="path">
                            <a href="#home">Home / </a>
                            <a href="#kind"> Chrysanthemum / </a>
                            <span>Marigold</span>
                        </div>
                        <div id="social-icons" className="d-flex">
                            <span className="px-3">Share it: </span>
                            <div className="icons">
                                <i className="fab px-2 fa-facebook-f"></i>
                                <i className="fab px-2 fa-twitter"></i>
                                <i className="fab px-2 fa-google-plus-g"></i>
                                <i className="fab px-2 fa-pinterest-p"></i>
                                <i className="fab px-2 fa-linkedin-in"></i>
                            </div>

                        </div>
                    </div>
                </nav>
                <div id="product-info">
                    <div className="container p-4">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="slider w-75 pl-5">
                                    <img className="w-100 d-block " src="https://d1whpkioiz600t.cloudfront.net/Images/product/100-red-roses-bunch-rs-2100.jpg" alt="..."/>
                                    <img src="https://images-na.ssl-images-amazon.com/images/I/51mMNAQ5zpL.jpg" alt="" className="w-25" />
                                    <img src="https://images-na.ssl-images-amazon.com/images/I/816BdQFBxTL._SX425_.jpg" alt="" className="w-25" />
                                    <img src="https://vilniusflowers.lt/wp-content/uploads/2019/10/bright-pink-and-red.jpg" alt="" className="w-25" />
                                    <img src="https://sf.tac-cdn.net/images/products/large/FTD-TTB.jpg?auto=webp&quality=80" alt="" className="w-25" />
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div id="details" className="text-center">
                                    <div className="separator">
                                        <h2 className="name-w-sep position-relative text-center">Marigold</h2>
                                    </div>
                                    <a href="#kind" >Chrysanthemum</a>
                                    <p className="py-5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos quisquam officia sunt placeat exercitationem inventore laborum architecto in, eveniet corrupti repellat adipisci quam quo consequatur magnam nostrum corporis! Aut?</p>
                                    <p>This item is in stock Expected delivery by: 12 h.</p>
                                    <form>
                                        <input type="number" name="Qty" id="qty" className="form-control w-25 m-auto" step="1" min="1" />
                                        <button className="btn btn-primary my-4">ADD TO CART</button>
                                        <a id="wishlist" href="#whishlist"><p>add to whishlist</p></a>
                                    </form>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails