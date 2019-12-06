import React, { Fragment } from 'react';
import Header from "../header/header";
import Blok1 from "../info/data";
import Blok2 from "../info/data2";
import Producten from "../producten/producten";
import SnelNav from "../sitenav/snelnav";
import Footer from "../footer/footer";
import './App.css';

const App = () => {
  return (
    <Fragment>
      <Header/>
        <Blok1/>
        <Producten/>
        <Blok2/>
        <SnelNav/>
      <Footer/>
    </Fragment>
  );
}

export default App;