import React from "react";
import SingleDedecatedTeam from "./SingleDedecatedTeam";

const dedecatedTeam = [
  {
    id: "01",
    price: "199",
    basic: "For Basic",
    homePage: "Homepage",
    innerPage: "No Inner Page",
    asset: "Asset file",
    Source: "Source file",
    stockPhotos: "Free Stock Photos",
    freeSupport: "10 Days Free Support ",
    support: "24/7 Support",
  },
  {
    id: "02",
    price: "399",
    basic: "For Preferred",
    homePage: "Homepage",
    innerPage: "4 Inner Page",
    asset: "Asset file",
    Source: "Source file",
    stockPhotos: "Free Stock Photos",
    freeSupport: "20 Days Free Support ",
    support: "24/7 Support",
  },
  {
    id: "03",
    price: "599",
    basic: "For Elite",
    homePage: "Homepage",
    innerPage: "8 Inner Page",
    asset: "Asset file",
    Source: "Source file",
    stockPhotos: "Free Stock Photos",
    freeSupport: "30 Days Free Support ",
    support: "24/7 Support",
  },
];

const DedecatedTeam = () => {
  return (
    <section className="my-5 dedecatedBgPositioning">
      <div className="container dedecatedBg">
        <h2 className="text-center py-5 allHeading">
          CHOOSE YOUR DEDICATED TEAM
        </h2>
        <div className="row text-center">
          {dedecatedTeam.map((team) => (
            <SingleDedecatedTeam team={team} key={team.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DedecatedTeam;
