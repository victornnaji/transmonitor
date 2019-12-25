import React from 'react';
import './App.scss';
import Navbar from './Features/Navbar/Navbar';
import Sidebar from './Features/Sidebar/Sidebar';
import Main from './Features/Main/Main';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-lg-2"><Sidebar /></div>
        <div className="col-lg-10"><Main/></div>
      </div>
    </div>
  );
}

export default App;
