import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const timeUpdate = function () {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
  });
};

player.on('timeupdate', throttle(timeUpdate, 1000));

let getTimeUpdate = localStorage.getItem('videoplayer-current-time');
const parsedTimeUpdate = JSON.parse(getTimeUpdate);
if (getTimeUpdate != null) {
  player.setCurrentTime(getTimeUpdate);
}
