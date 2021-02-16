import React from 'react'

//components
import Navbar from './Navbar'

function Layout (props) {
    //const children = props.children;
    return (
        <React.Fragment>
            <Navbar />
            {props.children}
        </React.Fragment>
    )
}

export default Layout