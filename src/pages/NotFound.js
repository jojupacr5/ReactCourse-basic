import React from 'react'

//utilities
import notFound from '../images/404-error-not-found-1.png'
import './styles/NotFound.css'

function NotFound() {
    return (
        <div className="NotFound__container">
            <img src={notFound} alt="Page not Found" />
        </div>
    )
}

export default NotFound