import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Sdata from './Data'

ReactDOM.render(
    <>
        <h1 className='heading'>List of top 5 Netflix Series in 2023</h1>
        {Sdata.map( (val) => {
            return (
                <Card imgsrc={val.img}
                    title={val.title}
                    sname={val.sname}
                    link={val.link}
                />
            );
        })};
    </>,
    document.getElementById("root"));