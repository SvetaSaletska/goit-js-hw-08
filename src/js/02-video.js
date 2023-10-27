import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');
const LOCAL_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(function(data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime.toString());
}, 1000));


player.setCurrentTime(localStorage.getItem(LOCAL_KEY) || 0)
