import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h3>Home</h3>
            <Link to={'/about'}>Go to About Page</Link>
            <div>
                <Link to={'/not-exists'}>Not Exists Link</Link>
            </div>
        </div>
    )
}

export default Home