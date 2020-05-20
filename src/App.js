import React, { useState } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import ButtonOption from './components/Button/ButtonOption';
import DivOption from './components/Div/DivOption'
import LinkOption from './components/Link/LinkOption';

function App() {
  const [btnDivLinkSwitch, setBtnDivLinkSwitch] = useState("btn");

  return (
    <div className="App">
      <Header />
      <Tabs switchFunction= {setBtnDivLinkSwitch} />
      { btnDivLinkSwitch === 'btn' ? <ButtonOption /> : btnDivLinkSwitch === 'div' ? <DivOption/> : <LinkOption />}
    </div>
  );
}

export default App;
