import React, { Component } from 'react';
import './App.css'
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: []
        };
    }

    componentDidMount(){
        this.getSongs()
    }

    getSongs = async () => {
        let response = await axios.get('')
        this.setState({
            songs: response.data.songs
        })
    }

    deleteSongs = async (songid) => {
        let response = await axios.delete('')
    }

    render() {
        return (
            <h1>Main Component</h1>
        )
    }
}

export default App  