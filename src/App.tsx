import React, { Component } from 'react';
import MyPortfolio from './Components/MyInfo';
import './App.css';

class App extends Component {
    render(): any {
        return (
            <div className="Portfolio">
                <MyPortfolio name="Shuvomoy" intro="Second Year Undergrad" />
            </div>
            );
    }
}

export default App;