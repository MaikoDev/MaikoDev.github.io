import logo from './logo.svg';
import './App.css';

import React from 'react';
import Sketch from 'react-p5';

import { InitField, DrawField, ChangeFieldSeed } from './Components/FlowField.js';

function App() {
    let particles = [];
    const particleCount = 10000;
    const noiseScale = 0.01;

    var seedTimer = null;

    const setup = (p5, canvasParentRef) => {
        let cvs = p5.createCanvas(p5.windowWidth, p5.windowHeight);
        cvs.parent(canvasParentRef);

        InitField(p5, particles, particleCount);
        p5.stroke(255);

        ChangeFieldSeed(p5, seedTimer);
    }

    const draw = p5 => {
        p5.background(0, 0, 0, 10);

        DrawField(p5, particles, noiseScale);
    }

    return (
        <div className="App">
            <header className="App-header">
                <Sketch setup={setup} draw={draw} className="P5-Sketch" />
                <img src={logo} className="App-logo" alt="logo" />
                <p className="App-reminder">
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </header>
        </div>
    );
}

export default App;
