import React from 'react';
import Logo from '../components/Logo';
import NavBar from '../components/NavBar';


const SiteHeader = ({theOneUser, loaded}) => {
 
    return (
        <>
        
        <NavBar 
        theOneUser={theOneUser}
        loaded={loaded}
        />
        <Logo/>
        </>
    )
}


export default SiteHeader;
