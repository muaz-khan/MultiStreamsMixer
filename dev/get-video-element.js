function getVideo(stream) {
    var video = document.createElement('video');

    if ('srcObject' in video) {
        video.srcObject = stream;
    } else {
        video.src = URL.createObjectURL(stream);
    }

    video.muted = true;
    video.volume = 0;

    video.play();

    return video;
}
