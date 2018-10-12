import React from 'react';
import TestComponent from 'components/TestComponent';
import '../../styles/global.scss';


export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>App Root</h1>
                <TestComponent />
            </React.Fragment>
        );
    }
};