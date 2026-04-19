(function () {
    var audioCtx = null;

    var WHITE_NOTES = [
        { note: 'C4',  freq: 261.63 },
        { note: 'D4',  freq: 293.66 },
        { note: 'E4',  freq: 329.63 },
        { note: 'F4',  freq: 349.23 },
        { note: 'G4',  freq: 392.00 },
        { note: 'A4',  freq: 440.00 },
        { note: 'B4',  freq: 493.88 },
        { note: 'C5',  freq: 523.25 },
        { note: 'D5',  freq: 587.33 },
        { note: 'E5',  freq: 659.25 },
        { note: 'F5',  freq: 698.46 },
        { note: 'G5',  freq: 783.99 },
        { note: 'A5',  freq: 880.00 },
        { note: 'B5',  freq: 987.77 },
    ];

    var BLACK_NOTES = [
        { note: 'Cs4', freq: 277.18, leftWhiteIndex: 0 },
        { note: 'Ds4', freq: 311.13, leftWhiteIndex: 1 },
        { note: 'Fs4', freq: 369.99, leftWhiteIndex: 3 },
        { note: 'Gs4', freq: 415.30, leftWhiteIndex: 4 },
        { note: 'As4', freq: 466.16, leftWhiteIndex: 5 },
        { note: 'Cs5', freq: 554.37, leftWhiteIndex: 7 },
        { note: 'Ds5', freq: 622.25, leftWhiteIndex: 8 },
        { note: 'Fs5', freq: 739.99, leftWhiteIndex: 10 },
        { note: 'Gs5', freq: 830.61, leftWhiteIndex: 11 },
        { note: 'As5', freq: 932.33, leftWhiteIndex: 12 },
    ];

    var KEY_COLORS = [
        ['#fffff0', 'rgb(247,178,178)'],
        ['#fffff0', 'rgb(186,247,178)'],
        ['#fffff0', 'rgb(178,197,247)'],
        ['#fffff0', 'rgb(247,240,178)'],
        ['#fffff0', 'rgb(230,178,247)'],
        ['#fffff0', 'rgb(178,247,247)'],
        ['#fffff0', 'rgb(247,210,178)'],
    ];

    function getAudioContext() {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        return audioCtx;
    }

    function playNote(frequency) {
        var ctx = getAudioContext();
        var now = ctx.currentTime;

        var osc1 = ctx.createOscillator();
        var osc2 = ctx.createOscillator();
        var osc3 = ctx.createOscillator();
        var masterGain = ctx.createGain();

        var g1 = ctx.createGain(); g1.gain.value = 0.6;
        var g2 = ctx.createGain(); g2.gain.value = 0.25;
        var g3 = ctx.createGain(); g3.gain.value = 0.1;

        osc1.type = 'triangle';  osc1.frequency.value = frequency;
        osc2.type = 'sine';      osc2.frequency.value = frequency * 2;
        osc3.type = 'sine';      osc3.frequency.value = frequency * 3;

        osc1.connect(g1); g1.connect(masterGain);
        osc2.connect(g2); g2.connect(masterGain);
        osc3.connect(g3); g3.connect(masterGain);
        masterGain.connect(ctx.destination);

        masterGain.gain.setValueAtTime(0, now);
        masterGain.gain.linearRampToValueAtTime(0.4, now + 0.008);
        masterGain.gain.exponentialRampToValueAtTime(0.15, now + 0.25);
        masterGain.gain.exponentialRampToValueAtTime(0.001, now + 2.0);

        osc1.start(now); osc2.start(now); osc3.start(now);
        osc1.stop(now + 2.0); osc2.stop(now + 2.0); osc3.stop(now + 2.0);
    }

    function triggerKey(el, freq) {
        playNote(freq);
        el.classList.add('active');
        setTimeout(function () { el.classList.remove('active'); }, 150);
    }

    function buildKeyboard() {
        var keyboard = document.getElementById('piano-keyboard');
        if (!keyboard) return;

        var numWhite = WHITE_NOTES.length;
        var whiteKeyWidthPct = 100 / numWhite;
        var blackKeyWidthPct = whiteKeyWidthPct * 0.6;

        WHITE_NOTES.forEach(function (note, i) {
            var key = document.createElement('div');
            key.className = 'piano-key piano-key-white';
            key.dataset.note = note.note;
            var col = KEY_COLORS[i % KEY_COLORS.length];
            key.style.background = 'linear-gradient(to bottom, ' + col[0] + ', ' + col[1] + ')';

            key.addEventListener('mousedown', function () { triggerKey(key, note.freq); });
            key.addEventListener('touchstart', function (e) {
                e.preventDefault();
                triggerKey(key, note.freq);
            }, { passive: false });

            keyboard.appendChild(key);
        });

        BLACK_NOTES.forEach(function (note) {
            var key = document.createElement('div');
            key.className = 'piano-key piano-key-black';
            key.dataset.note = note.note;
            var leftPct = (note.leftWhiteIndex + 0.72) * whiteKeyWidthPct - blackKeyWidthPct / 2;
            key.style.left = leftPct + '%';
            key.style.width = blackKeyWidthPct + '%';

            key.addEventListener('mousedown', function (e) {
                e.stopPropagation();
                triggerKey(key, note.freq);
            });
            key.addEventListener('touchstart', function (e) {
                e.preventDefault();
                e.stopPropagation();
                triggerKey(key, note.freq);
            }, { passive: false });

            keyboard.appendChild(key);
        });
    }

    document.addEventListener('DOMContentLoaded', buildKeyboard);
})();
