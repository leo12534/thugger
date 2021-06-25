const keys = document.querySelectorAll('.key');

function playAudio(e) {
    let keyCode; // Variable to store keyCode, depending on click or keydown
    if (e.type === 'click') {
        keyCode = e.currentTarget.dataset.key;
    } else {
        keyCode = e.keyCode;
    }

    const currentKey = document.querySelector(`.key[data-key="${keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

    if (!currentKey) return;
    playAdlib(audio);
    addRemoveBorder(currentKey);
}

function playAdlib(audio) {
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}

function addRemoveBorder(key) {
    key.classList.add('playing');
    keys.forEach((key) =>
        key.addEventListener('transitionend', function (e) {
            if (e.propertyName !== 'transform') return;
            key.classList.remove('playing');
        })
    );
    console.log(key);
}

window.addEventListener('keydown', playAudio);
keys.forEach((key) => key.addEventListener('click', playAudio));
