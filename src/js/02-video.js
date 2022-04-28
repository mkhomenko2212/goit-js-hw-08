

const iframe = document.querySelector('#vimeo-player')
import throttle from 'lodash.throttle';

const player = new Vimeo.Player(iframe);

const onTimeUpdate= date => {
    localStorage.setItem('videoplayer-current-time', date.seconds);

    console.log(parseInt(localStorage.getItem('videoplayer-current-time')))
};

player.on('timeupdate ', throttle(onTimeUpdate, 1000));


player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});
