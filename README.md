# MultiStreamsMixer | Mix Multiple Cameras & Screens into Single Stream

* https://www.webrtc-experiment.com/MultiStreamsMixer/

[![npm](https://img.shields.io/npm/v/multistreamsmixer.svg)](https://npmjs.org/package/multistreamsmixer) [![downloads](https://img.shields.io/npm/dm/multistreamsmixer.svg)](https://npmjs.org/package/multistreamsmixer) [![Build Status: Linux](https://travis-ci.org/muaz-khan/MultiStreamsMixer.png?branch=master)](https://travis-ci.org/muaz-khan/MultiStreamsMixer)

> Pass multiple streams (e.g. screen+camera or multiple-cameras) and get single stream. 

# How to mix audios?

```javascript
// https://cdn.webrtc-experiment.com/MultiStreamsMixer.js
var audioMixer = new MultiStreamsMixer([microphone1, microphone2]);

// record using MediaRecorder API
var recorder = new MediaRecorder(audioMixer.getMixedStream());

// or share using WebRTC
rtcPeerConnection.addStream(audioMixer.getMixedStream());
```

# How to mix screen+camera?

```javascript
// https://cdn.webrtc-experiment.com/MultiStreamsMixer.js
screenStream.fullcanvas = true;
screenStream.width = screen.width; // or 3840
screenStream.height = screen.height; // or 2160 

cameraStream.width = parseInt((20 / 100) * screenStream.width);
cameraStream.height = parseInt((20 / 100) * screenStream.height);
cameraStream.top = screenStream.height - cameraStream.height;
cameraStream.left = screenStream.width - cameraStream.width;

var mixer = new MultiStreamsMixer([screenStream, cameraStream]);

rtcPeerConnection.addStream(audioMixer.getMixedStream());

mixer.frameInterval = 1;
mixer.startDrawingFrames();

btnStopStreams.onclick = function() {
    mixer.releaseStreams();
};

btnAppendNewStreams.onclick = function() {
    mixer.appendStreams([anotherStream]);
};

btnStopScreenSharing.onclick = function() {
    // replace all old streams with this one
    // it will replace only video tracks
    mixer.replaceStreams([cameraStreamOnly]);
};
```

# How to mix multiple cameras?

```javascript
// https://cdn.webrtc-experiment.com/MultiStreamsMixer.js
var mixer = new MultiStreamsMixer([camera1, camera2]);

rtcPeerConnection.addStream(audioMixer.getMixedStream());

mixer.frameInterval = 1;
mixer.startDrawingFrames();
```

# API

1. `getMixedStream`: (function) returns mixed MediaStream object
2. `frameInterval`: (property) allows you set frame interval
3. `startDrawingFrames`: (function) start mixing video streams
4. `resetVideoStreams`: (function) replace all existing video streams with new ones
5. `releaseStreams`: (function) stop mixing streams

## License

[MultiStreamsMixer.js](https://github.com/muaz-khan/MultiStreamsMixer) is released under [MIT licence](https://www.webrtc-experiment.com/licence/) . Copyright (c) [Muaz Khan](http://www.MuazKhan.com).
