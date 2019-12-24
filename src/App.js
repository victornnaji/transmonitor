import React from 'react';
import './App.scss';
import Navbar from './Features/Navbar/Navbar';
import Sidebar from './Features/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <div className="sidebar-holder">
            <Sidebar />
        </div>
        <div className="hello">
          Not sidebar
        </div>
      </div>
    </div>
  );
}

export default App;
