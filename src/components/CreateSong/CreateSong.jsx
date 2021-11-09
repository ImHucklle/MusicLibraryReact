import React, { Component } from 'react';
import axios from 'axios';
import './CreateSong.css'

class CreateSong extends Component {
    state = {
        title: '',
        artist: '',
        album: '',
        release_date: '',
        genre: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event)=> {
        event.preventDefault();
        const form_data = {
            title: this.state.title,
            artist: this.state.artist,
            album: this.state.album,
            release_date: this.state.release_date,
            genre: this.state.genre,
        };
        let response = axios.post('http://127.0.0.1:8000/music/', form_data);
        
    }

    render(){
        return(
            
            <form class="form" onSumbit={(event) => this. handleSubmit(event)}>
                <h2>Add Songs</h2>
                <div>
                    <label>Title: </label>
                    <input placeholder="Song Name" type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
                </div>
                    <label>Artist: </label>
                    <input placeholder="Band/Artist" type="text" name="artist" onChange={this.handleChange} value={this.state.artist}/>
                <div> 
                    <label>Album: </label>
                    <input placeholder="Album Name" type="text" name="album" onChange={this.handleChange} value={this.state.album}/>
                </div>
                    <label>Release Date: </label>
                    <input placeholder="0000-00-0T00:00:00Z" type="text" name="release_date" onChange={this.handleChange} value={this.state.release_date}/>
                <div>
                    <label>Genre: </label>
                    <input placeholder="Alternative" type="text" name="genre" onChange={this.handleChange} value={this.state.genre}/>
                </div>

                <button type="submit">Add Song to Library</button>
            </form>
        );
    }
}
 
export default CreateSong;