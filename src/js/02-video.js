

const iframe = document.querySelector('#vimeo-player')
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(playerCurrentTime, 1000));
player.on('ended', endVideo);
setVideoTime();

function playerCurrentTime(data) {
  const videoTime = data.seconds;
  // console.log(videoTime);

  localStorage.setItem(LOCALSTORAGE_KEY, videoTime);

}

function endVideo() {
  player.off('timeupdate');
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function setVideoTime() {
  const savedTime = localStorage.getItem(LOCALSTORAGE_KEY);

  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
}
