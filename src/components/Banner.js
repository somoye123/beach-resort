import React from 'react'

export default function Banner({children,title,subtitle}) {
    return (
        <div class="banner">
            <h1>{title}</h1>
            <div/>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}
