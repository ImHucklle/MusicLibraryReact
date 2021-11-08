import React from 'react';
import './DisplaySong.css';

const DisplaySong = (props) => {
    return (
        <div>
        <table>
            <tr>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Release Date</th>
                <th>Genre</th>
            </tr>
            {props.songs.map((song)=> {
                return (
                    <tr>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.release_date}</td>
                        <td>{song.genre}</td>
                        <button onClick={() => props.deleteSong(song.id)}>Delete</button>
                    </tr>
                )
            })}
        </table>
        </div>
     );
}

export default DisplaySong;