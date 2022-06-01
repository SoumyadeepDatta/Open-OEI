let stream_width;
let stream_height

let constraints = {
    audio: false,
    video: {
        width: { ideal: 640 },
        height: { ideal: 480 }
    }
};

navigator.mediaDevices.getUserMedia(constraints)
    .then(function (stream) {
        /* use the stream */
        let stream_settings = stream.getVideoTracks()[0].getSettings();
        stream_width = stream_settings.width;
        stream_height = stream_settings.height;

    })
    .catch(function (err) {
        /* handle the error */
        document.getElementById("status").innerHTML = "device issue";
    });

export {stream_height, stream_width};