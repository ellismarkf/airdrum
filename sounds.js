// var drumSounds = {
//   s:  new Audio('sounds/snare.wav'),
//   k:  new Audio('sounds/kick.wav'),
//   c:  new Audio('sounds/crash.wav'),
//   hh: new Audio('sounds/highhat.wav')
// };

// var ssnare, shighhat, scrash;

var drumSounds;

soundManager.setup({

// location: path to SWF files, as needed (SWF file name is appended later.)

url: 'soundmanager/swf/',

  onready: function() {

    drumSounds = {
        s: soundManager.createSound({
            id: 'snare', 
            url: 'sounds/snare.wav',
            onload: function() { 
                console.log('sound loaded!', this); 
            }
        }),
        hh: soundManager.createSound({
            id: 'highhat', 
            url: 'sounds/highhat.wav',
            onload: function() { 
                console.log('sound loaded!', this); 
            }

        }),
        c: soundManager.createSound({
            id: 'crash', 
            url: 'sounds/crash.wav',
            onload: function() { 
                console.log('sound loaded!', this); 
            }

        }),
        k: soundManager.createSound({
            id: 'kick', 
            url: 'sounds/kick.wav',
            onload: function() { 
                console.log('sound loaded!', this); 
            }

        })
    }

  },


  ontimeout: function() {


  }

});