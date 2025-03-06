import React from 'react'
import '../App.css'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const copyrightSymbol = "\u00A9";
    return (
        <div className='footer'>
            <p>My Movie App {copyrightSymbol}  {currentYear} All rights reserved </p>
        </div>
    )
}