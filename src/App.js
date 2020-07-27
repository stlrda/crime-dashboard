import React from 'react';
import Map from './components/map'
import Sidebar from './components/sidebar'

import { GlobalProvider } from './context/GlobalState'


function App() {
  return (
    <div className="App">
      <GlobalProvider>
      <div className='map-container'><Map/></div>
      <div className='sidebar-container'><Sidebar/></div>
      </GlobalProvider>
      
    </div>
  );
}

export default App;
