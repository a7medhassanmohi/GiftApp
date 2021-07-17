import img from '../../images/amour.png'
import React, { Component } from 'react';
import './navBar.css';
import $ from 'jquery'
import { NavLink } from 'react-router-dom';
export default class NavBar extends Component {

  componentDidMount() {

    // To open sidebar and close it in mobile 
    $(function () {
      $('#open').on('click', function () {
        $(this).addClass('d-none')
        $('#exit').removeClass('d-none')
      });
      $('#exit').on('click', function () {
        $(this).addClass('d-none')
        $('#open').removeClass('d-none')
      });

      $('#button').on('click', function (e) {
        e.preventDefault();
      });

    })
  }

  render() {
    // Show & Hide Navbar on Scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset;
      if (scrollTop > lastScrollTop) {
        $('#nav').css('top', '-150px');
      }
      else {
        $('#nav').css('top', '0px');
      }
      lastScrollTop = scrollTop;
    })

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-4" id="nav">
          <div className="container m-auto px-3 px-sm-0">
            <div className="brand-img" aria-disabled="true">
              <img src={img} alt="" />
            </div>
            <div className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fas fa-bars" id="open"></i>
              <i class="fas fa-times d-none" id="exit"></i>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/category">Category</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/product">Product</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/blog">Blog</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
              </ul>
            </div>
            <form className="form-group m-0">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn my-0" type="submit" id="button">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </nav>
      </>
    )
  }
}
