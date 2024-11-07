import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {SandraLyons} from './components/sandraLyons/SandraLyons';
import {BlueSection} from "./components/blueSection/BlueSection";
import { TheJourney } from './components/theJourney/TheJourney';
import { FreeHome } from './components/freeHome/FreeHome';
import { FreeHome2 } from './components/freeHome2/FreeHome2';
import { Sweat } from './components/sweat/Sweat';

function App() {
    return (
        <div className="App">
            <Header/>
            <SandraLyons/>
            <BlueSection />
            <TheJourney />
            <FreeHome />
            <FreeHome2 />
            <Sweat />

        </div>
    );
}

export default App;
