import React from "react";

const SingleDedecatedTeam = (props) => {
  const {
    price,
    basic,
    homePage,
    innerPage,
    asset,
    Source,
    stockPhotos,
    freeSupport,
    support,
  } = props.team;
  return (
    <div className="col-md-4 my-4">
      <div className="hoverBorder">
        <h1>${price}</h1>
        <p className="my-2 basic">{basic}</p>
        <hr />
        <h6 className='pt-2'>{homePage}</h6>
        <h6>{innerPage}</h6>
        <h6>{asset}</h6>
        <h6>{Source}</h6>
        <h6>{stockPhotos}</h6>
        <h6>{freeSupport}</h6>
        <h6>{support}</h6>
        <button className="btn">Order Now</button>
      </div>
    </div>
  );
};

export default SingleDedecatedTeam;
