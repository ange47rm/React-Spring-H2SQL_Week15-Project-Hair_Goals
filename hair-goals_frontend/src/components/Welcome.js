import React from 'react';
import {Link} from 'react-router-dom';


const Welcome = () => {
    return (
        <>
        <div className="wrapper">
            <h2 className="welcome">... let's grow together!</h2>
            <Link to='/new-user' className="button-link"><button>Ready to start?<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z"/></svg></button></Link>
        </div>
        </>
    );
}




export default Welcome;