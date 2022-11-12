import React, { useState, createContext, useEffect } from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import AlgoContext from './components/AlgoContext';
import './App.css';

function App() {
  const [arr, setArr] = useState([]);
  const [algorithm, setAlgorithm] = useState('');
  const [isChanged, setIsChanged] = useState(false);

  var algo = {
    algorithm,
    arr,
    setAlgorithm,
    setArr,
  }


  return (
    <AlgoContext.Provider value={algo}>
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    </AlgoContext.Provider>
  );
}
//<SortingVisualizer></SortingVisualizer>

export default App;
