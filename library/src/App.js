import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react';
import image from "./images/library1.jpeg"
function App() {
  return (
     <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:790,width:1380
    }}>
    
    </div>
  );
}

export default App;
