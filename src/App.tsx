import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import { SandraLyons } from './components/sandraLyons/SandraLyons';

function App() {
  return (
    <div className="App">
     <Header />
     <SandraLyons />
    </div>
  );
}

export default App;
