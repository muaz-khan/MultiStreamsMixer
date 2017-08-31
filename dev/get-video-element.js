function getVideo(stream) {
    var video = document.createElement('video');

    if ('srcObject' in video) {
        video.srcObject = stream;
    } else {
        video.src = URL.createObjectURL(stream);
    }

    video.muted = true;
    video.volume = 0;

    video.width = stream.width || self.width || 360;
    video.height = stream.height || self.height || 240;

    video.play();

    return video;
}
