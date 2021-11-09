import React, { Component } from "react";
import './SearchBar.css'

class FilterSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
         searchSong:''
        };
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        let results = this.props.search.filter(song => {
            if (song.title.toLowerCase().includes(this.state.searchSong.toLowerCase())){
                return song
            }
            if (song.artist.toLowerCase().includes(this.state.searchSong.toLowerCase())){
                return song
            }
            if (song.album.toLowerCase().includes(this.state.searchSong.toLowerCase())){
                return song
            }
            if (song.genre.toLowerCase().includes(this.state.searchSong.toLowerCase())){
                return song
            }
            else{
                return false
            }
        });
        this.setState({
            searchSong:''
        })
        this.props.filterAction(results)
    };
    
    render () {
      return (
        <div className="searchBar">
            <div class="row">
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Search" name="searchSong" title="search" type="text" value={this.state.searchSong} onChange={this.handleChange} />
                    <button type='submit' value="search">Submit</button>
                </form>
            </div>
         </div>
      );
    }
}

  export default FilterSearch;