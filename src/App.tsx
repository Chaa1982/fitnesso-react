import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {SandraLyons} from './components/sandraLyons/SandraLyons';
import {BlueSection} from "./components/blueSection/BlueSection";
import { TheJourney } from './components/theJourney/TheJourney';

function App() {
    return (
        <div className="App">
            <Header/>
            <SandraLyons/>
            <BlueSection />
            <TheJourney />

        </div>
    );
}

export default App;
