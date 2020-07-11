import React from 'react';
import './App.css';
import Favorite from './components/Hobbies'


const customStyle = {
  color: "Purple",
  fontSize: "30px",
};

function App() {
  return (
    <div className="App">
      <h1 style={customStyle} > My Favorite Hobbies Are:</h1>
      <Favorite  
      hobby= "Loom Knitting"
      img = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRiX0UqUeJT27W9HGATxWb-W2HeUSAGEWCNhQ&usqp=CAU"
      details= "Loom knitting is a fun and creative way to get into knitting"
      />
      <Favorite  
      hobby= "Baking"
      img = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1ptPtJgNdQWdiVRnctUPCKx0qGcGTPxsPxQ&usqp=CAU"
      details= "I love to bake all types of sweet treats."
      />
      <Favorite  
      hobby= "Dancing"
      img = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3OrC1VOQhCNvhY7zO_ZjOa0C4qFU1iRXBBw&usqp=CAU"
      details= "I enjoy going to EDM Festivals"
      />
    </div>
  );
}

export default App;

