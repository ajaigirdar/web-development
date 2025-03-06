import React from 'react'
import '../App.css'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const copyrightSymbol = "\u00A9";
    return (
        <div className='footer'>
            <p>All rights reserved {copyrightSymbol} {currentYear}</p>


        </div>   
    );
}