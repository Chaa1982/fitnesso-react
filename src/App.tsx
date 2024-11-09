import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {SandraLyons} from './components/sandraLyons/SandraLyons';
import {BlueSection} from "./components/blueSection/BlueSection";
import { TheJourney } from './components/theJourney/TheJourney';
import { FreeHome } from './components/freeHome/FreeHome';
import { FreeHome2 } from './components/freeHome2/FreeHome2';
import { Sweat } from './components/sweat/Sweat';
import { Benefit } from './components/benefit/Benefit';
import { Water } from './components/water/Water';
import { ReadOur } from './components/readOur/ReadOur';
import { Footer } from './components/footer/Footer';

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
            <Benefit />
            <Water />
            <ReadOur />
            <Footer />


        </div>
    );
}

export default App;
