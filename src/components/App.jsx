import React, { Component } from 'react';
import './App.css'
import axios from 'axios';
import DisplaySong from './DisplaySong/DisplaySong';
import CreateSong from './CreateSong/CreateSong';

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
        let response = await axios.get('http://127.0.0.1:8000/music/')
        this.setState({
            songs: response.data
        })
    }

    deleteSongs = async (songid) => {
        let response = await axios.delete('http://127.0.0.1:8000/music/<int:pk>')
    }

    render() {
        return (
            <div class='container'>
                <h1>Music Library</h1>
                {this.state.songs.length > 0 && 
                <DisplaySong songs={this.state.songs} getAllSongs= {this.getSongs} />}
                <CreateSong />
            </div>
        
        )
    }
}

export default App  