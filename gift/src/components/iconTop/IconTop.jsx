import React, { Component } from 'react';
import icon from './iconTop.module.css';
import $ from 'jquery';
export default class IconTop extends Component {

    componentDidMount() {
        $(function () {

            $(window).on('scroll', () => {
                if ($(window).scrollTop() > 400) {
                    $('#iconTop').css('display', 'flex');
                    $('#iconTop').fadeIn(500);
                } else {
                    $('#iconTop').fadeOut(500);
                }
            })
            $('#iconTop').on('click', () => {
                $('html , body').animate({ scrollTop: 0 }, 1500)
            })
        })
    }
    render() {
        return (
            <>
                {/* Icon To Scroll Top */}
                <div className={`${icon.icon_top}`} id="iconTop">
                    <i class="fas fa-arrow-up"></i>
                </div>
            </>
        )
    }
}
