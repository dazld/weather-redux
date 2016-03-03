import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

class App extends Component {
    render(){
        return (
            <div className="app">
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state){
    const {location} = state;
    return {
        location
    }
}

export default connect(mapStateToProps)(App);
