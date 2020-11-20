import React from 'react';

const AchievementsBox = (props) => {
    const {img , num , title} = props.data;
    return (
        <div className='col-md-6 col-sm-12'>
            <div className='achi-wrapper d-flex align-items-center'>
                <div className='achi-img'>
                    <img style={{width: '50px'}} src={img} alt="images"/>
                </div>
                <div className='achi-info'>
                    <h1>{num}</h1>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default AchievementsBox;