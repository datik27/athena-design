import React from 'react';
import Achievements from '../Achievements/Achievements';
import DedecatedTeam from '../DedecatedTeam/DedecatedTeam';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import RunProject from '../RunProject/RunProject';
import Search from '../Search/Search';
import Store from '../Store/Store';
const Home = () => {
  return (
    <>
      <Header />
      <div className="shaireBg">
        <Store />
        <RunProject />
        <Achievements />
      </div>
      <DedecatedTeam />
      <Search />
      <Footer />
    </>
  );
};

export default Home;
