import React from 'react'
import "../css/Restricted.css"

export const Restricted = () => {
    return (
        <>
            <div className='restricted'>
                <div>
                <h2>Restricted Content!!! No Access</h2>
                <div> <a href="/login">Login</a><a href="/Home">Home</a></div>
                </div>
            </div>
        </>
    )
}
