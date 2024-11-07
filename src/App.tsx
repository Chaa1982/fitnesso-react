import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {SandraLyons} from './components/sandraLyons/SandraLyons';
import {BlueSection} from "./components/blueSection/BlueSection";
import { TheJourney } from './components/theJourney/TheJourney';
import { FreeHome } from './components/freeHome/FreeHome';

function App() {
    return (
        <div className="App">
            <Header/>
            <SandraLyons/>
            <BlueSection />
            <TheJourney />
            <FreeHome />

        </div>
    );
}

export default App;
