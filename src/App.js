import './App.css';
import {Article , Brand , Feature , Cta , Navbar } from './components'

import {Footer , Blog , Possibility , Features , WhatGpt3 , Header } from './container';
function App() {
  return (
    <div className="App">
      <div className="App">
        <div className="gradient_bg">
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
        <WhatGpt3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
