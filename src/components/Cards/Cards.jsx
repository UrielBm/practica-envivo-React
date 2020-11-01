import React from 'react';
import '../Cards/styles.css';
export const Cards = (props) => {
    const {img,titleCard,description}=props;
    return (
        <>
          <article className="Card">
              <img className="imgCard" src={img} alt="img Card" />
              <h2 className="titleCard">{titleCard}</h2>
              <p className="textCard">{description}</p>
          </article>  
        </>
    )
}
