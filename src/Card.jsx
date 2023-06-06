import React from 'react';
import './index.css';

function Card(props) {
    // console.log(props);
    return (
        <>
            <div className='outer-box'>
                <div className='box'>
                        <img src={props.imgsrc} alt='' />
                        <div className='content'>
                            <p>{props.title}</p>
                            <h3>{props.sname}</h3>
                            <a href={props.link} target="_blank">
                                <button> Watch Now </button>
                            </a>                                        
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;