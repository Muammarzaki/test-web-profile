import React from 'react';
import Navbar from '../components/Navbar';
import HeroMain from '../components/HeroMain';
import Programs from '../components/Programs';
import Advantages from '../components/Advantages';
import News from '../components/News';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <HeroMain />
      <Programs />
      <Advantages />
      <News />
    </>
  );
}

export default Home;