import React from 'react';
import {Link} from 'react-router-dom';

const About = () => {
    return (
        <>
        <div className="wrapper">
        <div className="inner-wrapper">
        <h2>Keep track of your hair</h2>
        <p>
            Have you shaved your head recently? Maybe you wanna keep track of those Rapunzel locks.
        Are you wondering how long it's gonna take you to reach all of those frustrating milestones? 
        We're here for you! Track you hair length and we will keep you on your hair game. 
        </p>
        <div className="wrapper">
        <Link to='/new-user' className="button-link"><button>Ready to start?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z"/></svg></button></Link>
        </div>
        </div>
        </div>
        </>
    )
    }

export default About;