import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(e => {
    localStorage.setItem('videoplayer-current-time', e.seconds);
}, 1000)
);

player
    .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
    .catch(function (error) {
        console.error(error)
    });


// // Инициализация плеера
// import Player from '@vimeo/player';
// // Инициализация lodash
// import throttle from "lodash.throttle";

// const vimeoPlayer = document.querySelector('#vimeo-player');
// const player = new Player(vimeoPlayer);

// player.on('timeupdate', throttle(playbackTime, 1000));

// function playbackTime(event) {
//     localStorage.setItem('videoplayer-current-time', event.seconds);
// };

// const getPlaybackTime = (
//     localStorage.getItem('videoplayer-current-time') || 0
// );

// player.setCurrentTime(getPlaybackTime);