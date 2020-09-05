import React from 'react';
import Main from './components/main'
import Sidebar from './components/sidebar'
import Header from './components/header'
import Footer from './components/footer'

import { GlobalProvider } from './context/GlobalState'


function App() {
  return (
    <div className="container">
      <GlobalProvider>

        <Header/>
        <Main/>
        <Sidebar/>
        <Footer/>

      </GlobalProvider>
    </div>
  );
}

export default App;
