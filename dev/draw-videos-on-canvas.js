function drawVideosToCanvas() {
    if (isStopDrawingFrames) {
        return;
    }

    var videosLength = videos.length;

    var fullcanvas = false;
    var remaining = [];
    videos.forEach(function(video) {
        if (!video.stream) {
            video.stream = {};
        }

        if (video.stream.fullcanvas) {
            fullcanvas = video;
        } else {
            remaining.push(video);
        }
    });

    if (fullcanvas) {
        canvas.width = fullcanvas.stream.width;
        canvas.height = fullcanvas.stream.height;
    } else if (remaining.length) {
        canvas.width = videosLength > 1 ? remaining[0].width * 2 : remaining[0].width;
        canvas.height = videosLength > 2 ? remaining[0].height * 2 : remaining[0].height;
    } else {
        canvas.width = self.width || 360;
        canvas.height = self.height || 240;
    }

    if (fullcanvas && fullcanvas instanceof HTMLVideoElement) {
        drawImage(fullcanvas);
    }

    remaining.forEach(function(video, idx) {
        drawImage(video, idx);
    });

    setTimeout(drawVideosToCanvas, self.frameInterval);
}

function drawImage(video, idx) {
    if (isStopDrawingFrames) {
        return;
    }

    var x = 0;
    var y = 0;
    var width = video.width;
    var height = video.height;

    if (idx === 1) {
        x = video.width;
    }

    if (idx === 2) {
        y = video.height;
    }

    if (idx === 3) {
        x = video.width;
        y = video.height;
    }

    if (typeof video.stream.left !== 'undefined') {
        x = video.stream.left;
    }

    if (typeof video.stream.top !== 'undefined') {
        y = video.stream.top;
    }

    if (typeof video.stream.width !== 'undefined') {
        width = video.stream.width;
    }

    if (typeof video.stream.height !== 'undefined') {
        height = video.stream.height;
    }

    context.drawImage(video, x, y, width, height);

    if (typeof video.stream.onRender === 'function') {
        video.stream.onRender(context, x, y, width, height, idx);
    }
}
