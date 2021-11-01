import React from 'react'
import NavBar from '../navBar/NavBar';
import Posts from '../posts/Posts';
import RightBar from '../rightBar/RightBar';
import './Home.css'

function Home () {
    return (
        <>
            {/* <NavBar /> */}
            <div className="homeContainer">
                <Posts />
                <RightBar />
            </div>
        </>
    )
}

export default Home;