import React from 'react';
import { BrowserRouter } from "react-router-dom";

import MarketingApp from './components/MarketingApp';

function App() {
  return (
    <BrowserRouter>
      Container App!
      <MarketingApp />
    </BrowserRouter>
  )
}

export default App;