import React, { Component } from 'react'
import not from '../../images/404.png';

export default class NotFound extends Component {
    render() {
        return (
            <>
                <div className="d-flex align-items-center justify-content-center w-100 vh-100 position-relative">
                    <img src={not} alt="Not Found Page" title="Not Found Page .. Back To Home" className="img-fluid m-auto" />
                </div>
            </>
        )
    }
}
