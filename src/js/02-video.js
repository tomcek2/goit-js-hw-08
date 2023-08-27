import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const timeUpdate = function (data) {
  const currentTime = data;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
  console.log(data.seconds);
};

player.on('timeupdate', throttle(timeUpdate, 1000));

const getTimeUpdate = localStorage.getItem('videoplayer-current-time');
const parsedTimeUpdate = JSON.parse(getTimeUpdate);
player
  .setCurrentTime(parsedTimeUpdate.seconds)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
