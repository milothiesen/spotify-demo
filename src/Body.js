import './Body.css';
import React from 'react';
import Header from './Header';
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

function Body({ spotify }) {
    const [{ random_thing }] = useDataLayerValue();
    return (
        <div className='body'>
            <Header spotify={spotify} />
            <div className='body_info'>
                <img src={random_thing?.images[0].url} alt='' />
                <div className='body_infoText'>
                    <strong>PLAYLIST</strong>
                    <h2>{random_thing?.name}</h2>
                    <p>{random_thing?.description}</p>
                </div>
            </div>
            <div className='body_songs'>
                <div className='body_icons'>
                    <PlayCircleFilledIcon className='body_shuffle' />
                    <FavoriteIcon fontSize='large' />
                    <MoreHorizIcon />
                </div>
                {random_thing?.tracks.items.map((item, index) => (
                    <SongRow key={index} track={item.track} />
                ))}
            </div>
        </div>
    );
}

export default Body;
