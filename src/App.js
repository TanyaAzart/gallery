import React from 'react';
import './App.css';
import myImages from './images';
import Gallery from './Gallery';

const App =() =>{
  
  return (
    <div>
      <Gallery images={myImages}/>
    </div>
  );
}

export default App;
