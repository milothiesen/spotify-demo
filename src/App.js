import './App.css';
import React, { useEffect } from 'react';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
    const [{ token }, dispatch] = useDataLayerValue();

    useEffect(() => {
        const hash = getTokenFromUrl();
        // clear the access token by setting it to an empty string
        window.location.hash = '';
        const _token = hash.access_token;

        if (_token) {
            dispatch({
                type: 'SET_TOKEN',
                token: _token,
            });

            spotify.setAccessToken(_token);

            spotify.getMe().then((user) => {
                dispatch({
                    type: 'SET_USER',
                    // user: user,
                });
            });
            spotify.getUserPlaylists().then((playlists) => {
                let random =
                    playlists.items[
                        Math.floor(Math.random() * playlists.items.length)
                    ];
                spotify.getPlaylist(random.id).then((response) => {
                    dispatch({
                        type: 'SET_RANDOM',
                        random_thing: response,
                    });
                });
                dispatch({
                    type: 'SET_PLAYLISTS',
                    playlists: playlists,
                });
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // console.log('person: ', user);
    // console.log('token: ', token);

    return (
        // BEM
        <div className='app'>
            {token ? <Player spotify={spotify} /> : <Login />}
        </div>
    );
}

export default App;
