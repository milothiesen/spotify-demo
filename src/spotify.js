// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

export const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectUri = 'https://spotify-clone-d9825.web.app/';

const clientId = '4f056dc5f3c242b9b0daf440d9dc4ab0';

const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((inital, item) => {
            let parts = item.split('=');
            inital[parts[0]] = decodeURIComponent(parts[1]);
            return inital;
        }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    '%20'
)}&response_type=token&show_dialog=true`;
