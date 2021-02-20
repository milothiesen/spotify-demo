import './App.css';
import React, { useEffect, useState } from 'react';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
    const [{ user, token }, dispatch] = useDataLayerValue();

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
                    user: user,
                });
            });
            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: 'SET_PLAYLISTS',
                    playlists: playlists,
                });
            });
        }
    }, []);
    console.log('person: ', user);
    console.log('token: ', token);
    return (
        // BEM
        <div className='app'>
            {token ? <Player spotify={spotify} /> : <Login />}
        </div>
    );
}

export default App;
