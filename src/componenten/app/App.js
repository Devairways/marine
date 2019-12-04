import React, { Fragment } from 'react';
import NavBar from "../navigatie/navbar";
import Blok1 from "../info/data";
import Blok2 from "../info/data2";
import Producten from "../producten/producten";
import SnelNav from "../sitenav/snelnav";
import Footer from "../footer/footer";
import './App.css';

const App = () => {
  return (
    <Fragment className="App">
      <header className="">
        <NavBar/>
        <h1>The leading producer of premium quality vegetable oils and fats</h1>
        <button>About us &#8594;</button>
      </header>
      <main>
        <Blok1/>
        <Producten/>
        <Blok2/>
        <SnelNav/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </Fragment>
  );
}

export default App;
