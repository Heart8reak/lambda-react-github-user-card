import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/search'>Check out who is following you</Link>
        </div>
    )
}

export default Header