import React, { useState } from 'react';
import Header from './components/Header';
import Tabs from './components/Tabs';
import ButtonOption from './components/Button/ButtonOption';
import DivOption from './components/Div/DivOption'

function App() {
  const [btnDivSwitch, setBtnDivSwitch] = useState("btn");

  return (
    <div className="App">
      <Header />
      <Tabs switchFunction= {setBtnDivSwitch} />
      { btnDivSwitch === 'btn' ? <ButtonOption /> : <DivOption/>}
    </div>
  );
}

export default App;
