import React, { Component } from 'react';
import './App.css';
import CustomCard from './components/CustomCard';

class App extends Component {
    render() {
        return (
            <div className="App">

                <h1>React app!</h1>

                <CustomCard title="Risus" />
                <CustomCard title="Vehicula" />
                <CustomCard title="Fermentum" />

            </div>
        );
    }
}

export default App;
