import React from 'react';
import './styles/NotFound.css'
import img404 from '../images/Monster 404 Error-bro.svg'

function NotFound(){
    return(
        <div className = "Notfound">
            <img src={img404} alt="img404"/>
        </div>
    );
}

export default NotFound;