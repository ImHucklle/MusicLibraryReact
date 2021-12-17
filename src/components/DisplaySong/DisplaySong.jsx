import React from 'react';
import './DisplaySong.css';

const DisplaySong = (props) => {
    return (
        <div>
        <table class="blueTable">
            <tr>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Release Date</th>
                <th>Genre</th>
            </tr>
            {props.songs.map((songs)=> {
                return (
                    <tr>
                        <td>{songs.title}</td>
                        <td>{songs.artist}</td>
                        <td>{songs.album}</td>
                        <td>{songs.release_date}</td>
                        <td>{songs.genre}</td>
                        <button onClick={() => props.deleteSongs(songs.id)}>Delete</button>
                    </tr>
                )
            })}
        </table>
        </div>
     );
}

export default DisplaySong;