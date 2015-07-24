var drumSounds;

soundManager.setup({

// location: path to SWF files, as needed (SWF file name is appended later.)

    url: 'soundmanager/swf/',

    debugMode: false,

    onready: function() {

        drumSounds = {
            s: soundManager.createSound({
                id: 'snare',
                url: 'assets/sounds/snare.wav'
            }),
            hh: soundManager.createSound({
                id: 'highhat',
                url: 'assets/sounds/highhat.wav'
            }),
            c: soundManager.createSound({
                id: 'crash',
                url: 'assets/sounds/crash.wav'
            }),
            k: soundManager.createSound({
                id: 'kick',
                url: 'assets/sounds/kick.wav'
            })
        }
    }
});