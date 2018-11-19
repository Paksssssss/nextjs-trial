import React from 'react'
import Navbar from './Navbar'

class Layout extends React.Component{
    render(){
        return (
            <div className="Layout">
                <Navbar/>
                {this.props.children}
            </div>
        )
    }
}

export default Layout