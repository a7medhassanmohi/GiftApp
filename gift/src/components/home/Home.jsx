// Import Images 
import headerImg from '../../images/img_home_06.jpg';
import hightImg from '../../images/flower09-300x300.png';
import sale from '../../images/sale_off_summer.png';
import footer from '../../images/logo_amour_ft.png';

// gallery images
import f1 from '../../images/flowers/3-1.jpg';
import f2 from '../../images/flowers/xyQfapLXG8D5FDHpfXw7XAfv4LE1tcQHr4cLcHN6.jpeg';
import f3 from '../../images/flowers/yhqwr.jpg';

import r from '../../images/red/N6-4305_330x370.jpg';

import y1 from '../../images/yellow/mzV8IflPUFHFlvIflxn8d9SkgaGoXQFNJMkxXgkr.jpeg';
import y2 from '../../images/yellow/mzZ2HeIOV8vuH7bX9IFIR9ViQoOiFuI0qo70I4bq.jpeg';
import y3 from '../../images/yellow/1535225148151-1.jpg';

import s1 from '../../images/sunflower/2017.jpg';
import s2 from '../../images/sunflower/sunf2.jpg';
import s3 from '../../images/sunflower/sunflower.jpg';

// Best Seller Images
import b1 from '../../images/best/flower18-300x300.png';
import b2 from '../../images/best/flower06-300x300.png';
import b3 from '../../images/best/flower09-300x300.png';
import b4 from '../../images/best/flower03-300x300.png';
import b5 from '../../images/best/flower07-300x300.png';
import b6 from '../../images/best/flower10-300x300.png';



import $ from 'jquery'
import React, { Component } from 'react'
import homeStyle from './home.module.css'
import { Link } from 'react-router-dom';
import AOS from "aos";
import 'aos/dist/aos.css'

export default class Home extends Component {

  // Function To Calculate The Total Price Of Product 
  add() {
    let totalPrice = document.getElementById('total'),
      quantityValue = document.getElementById('quantity'),
      totalBox = document.getElementById('totalBox');

    totalBox.classList.replace('invisible', 'visible');
    totalPrice.value = '$' + quantityValue.value * 27;
  }

  componentDidMount() {

    // To Add Animation Effect 
    AOS.init({
      duration: 2000
    });

    $(function () {
      // Special Category 
      $('.flower').show();
      $('.red').hide();
      $('.yellow').hide();
      $('.sunflower').hide();
      $('.list_gallery').on('click', function () {
        let value = $(this).attr('data-filter');
        if (value == 'flower') {
          $('.flower').fadeIn(700).show();
          $('.itembox').not('.' + value).fadeOut(700).hide();
        }
        else {
          $('.itembox').filter('.' + value).fadeIn(700).show();
          $('.itembox').not('.' + value).fadeOut(700).hide();
        }
      })
      $('.list_gallery').on('click', function () {
        $(this).addClass('selected_gallery').siblings().removeClass('selected_gallery');
      })

      $('#addCart , #send_email').on('click', function (e) {
        e.preventDefault();
      })

    })
  }

  render() {


    return (
      <>
        {/* =========Start Header==========  */}
        <div className={homeStyle.header}>
          <img src={headerImg} alt="" className='img-fluid w-100' />
        </div>

        {/* ===========Start hight Light==========  */}
        <section className={`${homeStyle.hightLight} py-5`}>
          <div className="container">
            <h2 className={`${homeStyle.section_address} text-center py-5`}>Hightlight</h2>
            <div className="row">
              <div className="col-12 col-lg-7 text-center mb-5 mb-lg-0 d-flex align-items-center">
                <div className="img-b w-75 mx-auto">
                  <img src={hightImg} alt="" className="img-fluid w-100" />
                </div>
              </div>
              <div className="col-12 col-lg-5">
                <div className={`${homeStyle.card_box} position-relative`}>
                  <div className={`${homeStyle.price}`}>
                    <h2>$27</h2>
                  </div>
                  <div className="card text-center">
                    <div className="card-body p-5">
                      <h4 className={`${homeStyle.card_address} card-text`}>Gerbera</h4>
                      <h6 className="text-muted py-1">Chrysanthemum</h6>
                      <p className={`${homeStyle.mainP} card-text my-4`}>“Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse</p>
                      <p className="card-text"><small className="text-muted">This item is in stock Expected delivery by: 12h</small></p>
                      <p className="border border-left-0 border-right-0 w-75 mx-auto text-muted">
                        <span className="px-3 border-right">40cm</span>
                        <span className="px-3">22g</span>
                      </p>
                      <form className="w-75 mx-auto text-muted">
                        <div className="d-flex align-items-center mx-sm-5 mx-0">
                          <label htmlFor="quantity" className="pr-4 m-0">Quantity:</label>
                          <input onChange={this.add} type="number" name="number" min='1' className={`${homeStyle.q_form_control} form-control w-75`} id="quantity" />
                        </div>
                        <button id='addCart' className={`${homeStyle.add_cart} btn p-2 my-3`}>ADD TO CART</button>
                        <div className={`${homeStyle.total} d-flex align-items-center m-auto invisible `} id='totalBox'>
                          <label htmlFor="quantity" className="m-0">Product Total:</label>
                          <input type="text" name='total' id='total' className={`${homeStyle.total_form_control} form-control`} />
                        </div>
                      </form>
                      <div className={`${homeStyle.wishlist} my-2`}>
                        <i className="far fa-heart pr-3 text-danger"></i>
                        <Link to="">Add to Wishlist</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ===========End hight Light==========  */}

        {/* =========Start Special Category======== */}
        <section className={`${homeStyle.gallery} py-5`}>
          <div className="container">
            <h2 className={`${homeStyle.section_address} text-center py-5`}>Special Category</h2>
            <ul className="list-unstyled w-75 d-flex justify-content-around mx-auto mb-5">
              <li className="selected_gallery list_gallery btn rounded" data-filter="flower">Flowers</li>
              <li className="list_gallery btn rounded" data-filter="red">Red</li>
              <li className="list_gallery btn rounded" data-filter="yellow">Yellow</li>
              <li className="list_gallery btn rounded" data-filter="sunflower">Sunflower</li>
            </ul>
            {/* FLOWERS */}
            <div className="row">
              <div className="col-6 col-md-3 mb-4 mb-md-0 flower itembox">
                <div className={`${homeStyle.gallery_card} card text-center border-0`}>
                  <img src={f1} className="card-img-top img-fluid" alt="..." />
                  <div className={`${homeStyle.gallery_card_body} card-body`}>
                    <h5 className="card-title">Flowers</h5>
                    <p className="card-text"><small>50cm | 35cm</small></p>
                    <p className="card-text">$ 48</p>
                  </div>
                  <div className={`${homeStyle.back}`}>
                    <div className={`${homeStyle.back_view} my-2`}>
                      <Link to=""> <i className="far fa-eye"></i> </Link>                                   </div>
                    <div className={`${homeStyle.back_wishlist} my-2`}>
                      <Link to=""> <i className="far fa-heart"></i> </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-4 mb-md-0 flower itembox">
                <div className={`${homeStyle.gallery_card} card text-center border-0`}>
                  <img src={f2} className="card-img-top img-fluid" alt="..." />
                  <div className={`${homeStyle.gallery_card_body} card-body`}>
                    <h5 className="card-title">Flowers</h5>
                    <p className="card-text"><small>50cm | 35cm</small></p>
                    <p className="card-text">$ 48</p>
                  </div>
                  <div className={`${homeStyle.back}`}>
                    <div className={`${homeStyle.back_view} my-2`}>
                      <Link to=""> <i className="far fa-eye"></i> </Link>                                   </div>
                    <div className={`${homeStyle.back_wishlist} my-2`}>
                      <Link to=""> <i className="far fa-heart"></i> </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-4 mb-md-0 flower itembox">
                <div className={`${homeStyle.gallery_card} card text-center border-0`}>
                  <img src={f3} className="card-img-top img-fluid" alt="..." />
                  <div className={`${homeStyle.gallery_card_body} card-body`}>
                    <h5 className="card-title">Flowers</h5>
                    <p className="card-text"><small>50cm | 35cm</small></p>
                    <p className="card-text">$ 48</p>
                  </div>
                  <div className={`${homeStyle.back}`}>
                    <div className={`${homeStyle.back_view} my-2`}>
                      <Link to=""> <i className="far fa-eye"></i> </Link>                                   </div>
                    <div className={`${homeStyle.back_wishlist} my-2`}>
                      <Link to=""> <i className="far fa-heart"></i> </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-4 mb-md-0 flower itembox">
                <div className={`${homeStyle.gallery_card} card text-center border-0`}>
                  <img src={f1} className="card-img-top img-fluid" alt="..." />
                  <div className={`${homeStyle.gallery_card_body} card-body`}>
                    <h5 className="card-title">Flowers</h5>
                    <p className="card-text"><small>50cm | 35cm</small></p>
                    <p className="card-text">$ 48</p>
                  </div>
                  <div className={`${homeStyle.back}`}>
                    <div className={`${homeStyle.back_view} my-2`}>
                      <Link to=""> <i className="far fa-eye"></i> </Link>                                   </div>
                    <div className={`${homeStyle.back_wishlist} my-2`}>
                      <Link to=""> <i className="far fa-heart"></i> </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* RED */}
            <div className="row">
              <div className="col-6 col-md-3 mb-4 mb-md-0 red itembox">
                <div className={`${homeStyle.gallery_card} card text-center border-0`}>
                  <img src={r} className="card-img-top img-fluid" alt="..." />
                  <div className={`${homeStyle.gallery_card_body} card-body`}>
                    <h5 className="card-title">Red</h5>
                    <p className="card-text"><small>50cm | 35cm</small></p>
                    <p className="card-text">$ 48</p>
                  </div>
                  <div className={`${homeStyle.back}`}>
                    <div className={`${homeStyle.back_view} my-2`}>
                      <Link to=""> <i className="far fa-eye"></i> </Link>                                   </div>
                    <div className={`${homeStyle.back_wishlist} my-2`}>
                      <Link to=""> <i className="far fa-heart"></i> </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-4 mb-md-0 red itembox">
                <div className={`${homeStyle.gallery_card} card text-center border-0`}>
                  <img src={r} className="card-img-top img-fluid" alt="..." />
                  <div className={`${homeStyle.gallery_card_body} card-body`}>
                    <h5 className="card-title">Red</h5>
                    <p className="card-text"><small>50cm | 35cm</small></p>
                    <p className="card-text">$ 48</p>
                  </div>
                  <div className={`${homeStyle.back}`}>
                    <div className={`${homeStyle.back_view} my-2`}>
                      <Link to=""> <i className="far fa-eye"></i> </Link>                                   </div>
                    <div className={`${homeStyle.back_wishlist} my-2`}>
                      <Link to=""> <i className="far fa-heart"></i> </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-4 mb-md-0 red itembox">
                <div className={`${homeStyle.gallery_card} card text-center border-0`}>
                  <img src={r} className="card-img-top img-fluid" alt="..." />
                  <div className={`${homeStyle.gallery_card_body} card-body`}>
                    <h5 className="card-title">Red</h5>
                    <p className="card-text"><small>50cm | 35cm</small></p>
                    <p className="card-text">$ 48</p>
                  </div>
                  <div className={`${homeStyle.back}`}>
                    <div className={`${homeStyle.back_view} my-2`}>
                      <Link to=""> <i className="far fa-eye"></i> </Link>                                   </div>
                    <div className={`${homeStyle.back_wishlist} my-2`}>
                      <Link to=""> <i className="far fa-heart"></i> </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-4 mb-md-0 red itembox">
                <div className={`${homeStyle.gallery_card} card text-center border-0`}>
                  <img src={r} className="card-img-top img-fluid" alt="..." />
                  <div className={`${homeStyle.gallery_card_body} card-body`}>
                    <h5 className="card-title">Red</h5>
                    <p className="card-text"><small>50cm | 35cm</small></p>
                    <p className="card-text">$ 48</p>
                  </div>
                  <div className={`${homeStyle.back}`}>
                    <div className={`${homeStyle.back_view} my-2`}>
                      <Link to=""> <i className="far fa-eye"></i> </Link>                                   </div>
                    <div className={`${homeStyle.back_wishlist} my-2`}>
                      <Link to=""> <i className="far fa-heart"></i> </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* YELLOW */}
            <div className="row">
              <div className="col-6 col-md-3 mb-4 mb-md-0 yellow itembox">
                <div className={`${homeStyle.gallery_card} card text-center border-0`}>
                  <img src={y1} className="card-img-top img-fluid" alt="..." />
                  <div className={`${homeStyle.gallery_card_body} card-body`}>
                    <h5 className="card-title">Yellow</h5>
                    <p className="card-text"><small>50cm | 35cm</small></p>
                    <p className="card-text">$ 48</p>
                  </div>
                  <div className={`${homeStyle.back}`}>
                    <div className={`${homeStyle.back_view} my-2`}>
                      <Link to=""> <i className="far fa-eye"></i> </Link>                                   </div>
                    <div className={`${homeStyle.back_wishlist} my-2`}>
                      <Link to=""> <i className="far fa-heart"></i> </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-4 mb-md-0 yellow itembox">
                <div className={`${homeStyle.gallery_card} card text-center border-0`}>
                  <img src={y2} className="card-img-top img-fluid" alt="..." />
                  <div className={`${homeStyle.gallery_card_body} card-body`}>
                    <h5 className="card-title">Yellow</h5>
                    <p className="card-text"><small>50cm | 35cm</small></p>
                    <p className="card-text">$ 48</p>
                  </div>
                  <div className={`${homeStyle.back}`}>
                    <div className={`${homeStyle.back_view} my-2`}>
                      <Link to=""> <i className="far fa-eye"></i> </Link>                                   </div>
                    <div className={`${homeStyle.back_wishlist} my-2`}>
                      <Link to=""> <i className="far fa-heart"></i> </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-4 mb-md-0 yellow itembox">
                <div className={`${homeStyle.gallery_card} card text-center border-0`}>
                  <img src={y3} className="card-img-top img-fluid" alt="..." />
                  <div className={`${homeStyle.gallery_card_body} card-body`}>
                    <h5 className="card-title">Yellow</h5>
                    <p className="card-text"><small>50cm | 35cm</small></p>
                    <p className="card-text">$ 48</p>
                  </div>
                  <div className={`${homeStyle.back}`}>
                    <div className={`${homeStyle.back_view} my-2`}>
                      <Link to=""> <i className="far fa-eye"></i> </Link>                                   </div>
                    <div className={`${homeStyle.back_wishlist} my-2`}>
                      <Link to=""> <i className="far fa-heart"></i> </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-4 mb-md-0 yellow itembox">
                <div className={`${homeStyle.gallery_card} card text-center border-0`}>
                  <img src={y1} className="card-img-top img-fluid" alt="..." />
                  <div className={`${homeStyle.gallery_card_body} card-body`}>
                    <h5 className="card-title">Yellow</h5>
                    <p className="card-text"><small>50cm | 35cm</small></p>
                    <p className="card-text">$ 48</p>
                  </div>
                  <div className={`${homeStyle.back}`}>
                    <div className={`${homeStyle.back_view} my-2`}>
                      <Link to=""> <i className="far fa-eye"></i> </Link>                                   </div>
                    <div className={`${homeStyle.back_wishlist} my-2`}>
                      <Link to=""> <i className="far fa-heart"></i> </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* SUNFLOWER */}
            <div className="row">
              <div className="col-6 col-md-3 mb-4 mb-md-0 sunflower itembox">
                <div className={`${homeStyle.gallery_card} card text-center border-0`}>
                  <img src={s1} className="card-img-top img-fluid" alt="..." />
                  <div className={`${homeStyle.gallery_card_body} card-body`}>
                    <h5 className="card-title">Sunflower</h5>
                    <p className="card-text"><small>50cm | 35cm</small></p>
                    <p className="card-text">$ 48</p>
                  </div>
                  <div className={`${homeStyle.back}`}>
                    <div className={`${homeStyle.back_view} my-2`}>
                      <Link to=""> <i className="far fa-eye"></i> </Link>                                   </div>
                    <div className={`${homeStyle.back_wishlist} my-2`}>
                      <Link to=""> <i className="far fa-heart"></i> </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-4 mb-md-0 sunflower itembox">
                <div className={`${homeStyle.gallery_card} card text-center border-0`}>
                  <img src={s2} className="card-img-top img-fluid" alt="..." />
                  <div className={`${homeStyle.gallery_card_body} card-body`}>
                    <h5 className="card-title">Sunflower</h5>
                    <p className="card-text"><small>50cm | 35cm</small></p>
                    <p className="card-text">$ 48</p>
                  </div>
                  <div className={`${homeStyle.back}`}>
                    <div className={`${homeStyle.back_view} my-2`}>
                      <Link to=""> <i className="far fa-eye"></i> </Link>                                   </div>
                    <div className={`${homeStyle.back_wishlist} my-2`}>
                      <Link to=""> <i className="far fa-heart"></i> </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-4 mb-md-0 sunflower itembox">
                <div className={`${homeStyle.gallery_card} card text-center border-0`}>
                  <img src={s3} className="card-img-top img-fluid" alt="..." />
                  <div className={`${homeStyle.gallery_card_body} card-body`}>
                    <h5 className="card-title">Sunflower</h5>
                    <p className="card-text"><small>50cm | 35cm</small></p>
                    <p className="card-text">$ 48</p>
                  </div>
                  <div className={`${homeStyle.back}`}>
                    <div className={`${homeStyle.back_view} my-2`}>
                      <Link to=""> <i className="far fa-eye"></i> </Link>                                   </div>
                    <div className={`${homeStyle.back_wishlist} my-2`}>
                      <Link to=""> <i className="far fa-heart"></i> </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 mb-4 mb-md-0 sunflower itembox">
                <div className={`${homeStyle.gallery_card} card text-center border-0`}>
                  <img src={s1} className="card-img-top img-fluid" alt="..." />
                  <div className={`${homeStyle.gallery_card_body} card-body`}>
                    <h5 className="card-title">Sunflower</h5>
                    <p className="card-text"><small>50cm | 35cm</small></p>
                    <p className="card-text">$ 48</p>
                  </div>
                  <div className={`${homeStyle.back}`}>
                    <div className={`${homeStyle.back_view} my-2`}>
                      <Link to=""> <i className="far fa-eye"></i> </Link>                                   </div>
                    <div className={`${homeStyle.back_wishlist} my-2`}>
                      <Link to=""> <i className="far fa-heart"></i> </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =========End Special Category======== */}

        {/* =========Start Best Seller======== */}
        <section className={`${homeStyle.best} py-5`}>
          <div className="container">
            <h2 className={`${homeStyle.section_address} text-center py-5`}>Best Seller</h2>
            {/* FLOWERS */}
            <div className="row">
              <div className="col-6 col-md-4 col-lg-2 mb-4 mb-md-2 mb-lg-0">
                <div className={`${homeStyle.best_card} card text-center border-0`}>
                  <img src={b1} className="card-img-top img-fluid" alt="..." />
                  <div className={`${homeStyle.best_card_body} card-body`}>
                    <h5 className="card-title">Marigold</h5>
                    <p className="card-text"><small>50cm | 35cm</small></p>
                    <p className="card-text">$ 27</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-2 mb-4 mb-md-2 mb-lg-0">
                <div className={`${homeStyle.best_card} card text-center border-0`}>
                  <img src={b2} className="card-img-top img-fluid" alt="..." />
                  <div className={`${homeStyle.best_card_body} card-body`}>
                    <h5 className="card-title">Mini Orchid</h5>
                    <p className="card-text"><small>50cm | 35cm</small></p>
                    <p className="card-text">$ 11</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-2 mb-4 mb-md-2 mb-lg-0">
                <div className={`${homeStyle.best_card} card text-center border-0`}>
                  <img src={b3} className="card-img-top img-fluid" alt="..." />
                  <div className={`${homeStyle.best_card_body} card-body`}>
                    <h5 className="card-title">Yellow daisy</h5>
                    <p className="card-text"><small>50cm | 35cm</small></p>
                    <p className="card-text">$ 8</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-2 mb-4 mb-md-2 mb-lg-0">
                <div className={`${homeStyle.best_card} card text-center border-0`}>
                  <img src={b4} className="card-img-top img-fluid" alt="..." />
                  <div className={`${homeStyle.best_card_body} card-body`}>
                    <h5 className="card-title">Rose Flower</h5>
                    <p className="card-text"><small>50cm | 35cm</small></p>
                    <p className="card-text">$ 19</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-2 mb-4 mb-md-2 mb-lg-0">
                <div className={`${homeStyle.best_card} card text-center border-0`}>
                  <img src={b5} className="card-img-top img-fluid" alt="..." />
                  <div className={`${homeStyle.best_card_body} card-body`}>
                    <h5 className="card-title">Fragant lily</h5>
                    <p className="card-text"><small>50cm | 35cm</small></p>
                    <p className="card-text">$ 29</p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-2 mb-4 mb-md-2 mb-lg-0">
                <div className={`${homeStyle.best_card} card text-center border-0`}>
                  <img src={b6} className="card-img-top img-fluid" alt="..." />
                  <div className={`${homeStyle.best_card_body} card-body`}>
                    <h5 className="card-title">Color cobalt</h5>
                    <p className="card-text"><small>50cm | 35cm</small></p>
                    <p className="card-text">$ 26</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =========End Best Seller======== */}

        {/* ===========Start Offer============  */}
        <section className="py-5 bg-white">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7">
                <div className="row">
                  <div className="col-12 col-md-6 mb-5 mb-md-0">
                    <h3 className={`${homeStyle.sale_headers} mb-5`}>Contemporary Flowers</h3>
                    <div className="row py-3">
                      <div className="col-6">
                        <img src={b1} alt="" className="img-fluid rounded" />
                      </div>
                      <div className="col-6 d-flex justify-content-center align-items-center w-auto">
                        <div className={`${homeStyle.sale} text-center`}>
                          <h5>Marigold</h5>
                          <p className="text-muted"><small>50cm | 35cm</small></p>
                          <p>$ 27</p>
                        </div>
                      </div>
                    </div>
                    <div className="row py-3">
                      <div className="col-6">
                        <img src={b2} alt="" className="img-fluid rounded" />
                      </div>
                      <div className="col-6 d-flex justify-content-center align-items-center w-auto">
                        <div className={`${homeStyle.sale} text-center`}>
                          <h5>Mini Orchid</h5>
                          <p className="text-muted"><small>50cm | 35cm</small></p>
                          <p>$ 11</p>
                        </div>
                      </div>
                    </div>
                    <div className="row py-3">
                      <div className="col-6">
                        <img src={b3} alt="" className="img-fluid rounded" />
                      </div>
                      <div className="col-6 d-flex justify-content-center align-items-center w-auto">
                        <div className={`${homeStyle.sale} text-center`}>
                          <h5>Yellow daisy</h5>
                          <p className="text-muted"><small>50cm | 35cm</small></p>
                          <p>$ 8</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <h3 className={`${homeStyle.sale_headers} mb-5`}>Flowers for Men</h3>
                    <div className="row py-3">
                      <div className="col-6">
                        <img src={b4} alt="" className="img-fluid rounded" />
                      </div>
                      <div className="col-6 d-flex justify-content-center align-items-center w-auto">
                        <div className={`${homeStyle.sale} text-center`}>
                          <h5>Rose Flower</h5>
                          <p className="text-muted"><small>50cm | 35cm</small></p>
                          <p>$ 19</p>
                        </div>
                      </div>
                    </div>
                    <div className="row py-3">
                      <div className="col-6">
                        <img src={b4} alt="" className="img-fluid rounded" />
                      </div>
                      <div className="col-6 d-flex justify-content-center align-items-center w-auto">
                        <div className={`${homeStyle.sale} text-center`}>
                          <h5>Fragant lily</h5>
                          <p className="text-muted"><small>50cm | 35cm</small></p>
                          <p>$ 29</p>
                        </div>
                      </div>
                    </div>
                    <div className="row py-3">
                      <div className="col-6">
                        <img src={b6} alt="" className="img-fluid rounded" />
                      </div>
                      <div className="col-6 d-flex justify-content-center align-items-center w-auto">
                        <div className={`${homeStyle.sale} text-center`}>
                          <h5>Color cobalt</h5>
                          <p className="text-muted"><small>50cm | 35cm</small></p>
                          <p>$ 26</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-5 text-center" data-aos="fade-right">
                <img src={sale} alt="offer" className="img-fluid img-thumbnail" />
              </div>
            </div>
          </div>
        </section>
        {/* ===========End Offer============  */}

        {/* =======Start Footer======== */}
        <footer className="">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0 text-center">
                <img src={footer} alt="footer" title="logo" className="img-fluid mb-3" />
                <p>3b Quoc Tu Giam Street Hanoi, VN 10000</p>
                <h5>+ 84 975 319 889</h5>
              </div>
              <div className="col-12 col-md-6 col-lg-2 mb-4 mb-lg-0 text-center text-md-left">
                <h4 className="text-capitalize">info</h4>
                <ul>
                  <li className="list-unstyled"><Link to="" target="_blank">About</Link></li>
                  <li className="list-unstyled"><Link to="">Affiliate</Link></li>
                  <li className="list-unstyled"><Link to="">For Saler</Link></li>
                  <li className="list-unstyled"><Link to="">Our Policy</Link></li>
                  <li className="list-unstyled"><Link to="">Contact Us</Link></li>
                </ul>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0 text-center text-md-left">
                <h4 className="text-capitalize">Subscribe</h4>
                <form className="form-group d-flex">
                  <input type="email" placeholder="Your Email Address" className={`${homeStyle.sub_input}`} />
                  <button className="btn btn-danger" id="send_email">Sign Up</button>
                </form>
                <ul className="list-unstyled d-flex p-2">
                  <li><Link to=""><i class="fab fa-facebook-f pr-3"></i></Link></li>
                  <li><Link to=""><i class="fab fa-twitter pr-3"></i></Link></li>
                  <li><Link to=""><i class="fab fa-google-plus-g pr-3"></i></Link></li>
                </ul>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0 text-center text-md-left">
                <h4 className="text-capitalize">openning</h4>
                <ul className="list-unstyled">
                  <li className="clearfix">
                    <span className="float-left">Monday - Friday</span>
                    <span className="float-right"> 8.00 to 18.00</span>
                  </li>
                  <li className="clearfix">
                    <span className="float-left">Saturday</span>
                    <span className="float-right"> 9.00 to 21.00</span></li>
                  <li className="clearfix">
                    <span className="float-left">Sunday</span>
                    <span className="float-right"> 10.00 to 21.00</span></li>
                </ul>
              </div>
            </div>
            <div className={`${homeStyle.end} clearfix`}>
              <p className="float-right">Copyright © 2021 - Gift theme - All rights reserved. Powered by Route - aked by Tefa Mohammed</p>
            </div>
          </div>
        </footer>
        {/* =======End Footer======== */}

      </>
    )
  }
}
