import React from 'react';
import data from './AchieevementsData';
import AchievementsBox from './AchievementsBox';

const Achievements = () => {
    return (
        <section className='achievement'>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-12 d-flex align-items-center">
                        <div className="achievement-info">
                            <h2 className="allHeading">Our Achievements</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter. </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 offset-md-1">
                         <div className="row">
                             {
                                 data.map(data => <AchievementsBox key={data.id} data={data}></AchievementsBox>)
                             }
                         </div>   
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;