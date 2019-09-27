$(document).foundation()


var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    scrollParent: true, 
    barWidth: 3,
    barHeight: 1,
    height: 100,
    hideScrollbar: true,
    setProgressColor(white)
    
});

wavesurfer.load('WakraSwag.mp3');

wavesurfer.on('ready', function () {
    wavesurfer.play();
});

