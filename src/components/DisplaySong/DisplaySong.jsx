import React from 'react';
import './DisplaySong.css';

const DisplaySong = (props) => {
    return ( 
        <table>
            <tr>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Release Date</th>
                <th>Genre</th>
            </tr>
            <tr>
                <td>  </td>
                <td>  </td>
                <td>  </td>
                <td>  </td>
                <td>  </td>
            </tr>
        </table>
     );
}


export default DisplaySong;