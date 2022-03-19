import React from 'react'
import {Routes, Route} from 'react-router-dom'
import TimeLine from './routes/TimeLine';
import Home from './routes/Home'
import Token from './routes/Token'
// import Mint from './routes/Mint'
import About from './routes/About';
import Works from './routes/Works';
import Faq from './routes/Faq';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Token' element={<Token />} />
        <Route path='/About' element={<About />} />
        <Route path='/Works' element={<Works />} />
        <Route path='/TimeLine' element={<TimeLine />} />
        <Route path='/FAQ' element={<Faq />} />
        {/* <Route path='/Mint' element={<Mint />} /> */}
      </Routes>
    </>
  );
}

export default App;
