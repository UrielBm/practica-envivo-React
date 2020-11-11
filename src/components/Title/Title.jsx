import React from 'react'
import './style.css'
export const Title = (props) => {
    const {title} = props 
    return (
        <>
          <h1 className="title">{title}</h1>  
        </>
    )
}
