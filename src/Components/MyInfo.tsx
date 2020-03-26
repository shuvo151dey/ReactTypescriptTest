import React, { Component } from 'react';
import User from '../interfaces/Interface';

export class MyPortfolio extends Component<User> {
    render(): any {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>{this.props.intro}</p>
            </div>
            );


    }
}

export default MyPortfolio