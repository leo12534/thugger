const keys = document.querySelectorAll('.content__keys-item');

const playAudio = function (e) {
    let keyCode; // Variable to store keyCode, depending on click or keydown
    if (e.type === 'click') {
        keyCode = e.currentTarget.dataset.key;
    } else {
        keyCode = e.keyCode;
    }

    const currentKey = document.querySelector(`.content__keys-item[data-key="${keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

    if (!currentKey) return;
    playAdlib(audio);
    addRemoveBorder(currentKey);
};

const playAdlib = function (audio) {
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
};

const addRemoveBorder = function (key) {
    key.classList.add('playing');
    keys.forEach((key) =>
        key.addEventListener('transitionend', function (e) {
            if (e.propertyName !== 'transform') return;
            key.classList.remove('playing');
        })
    );
};

window.addEventListener('keydown', playAudio);
keys.forEach((key) => key.addEventListener('click', playAudio));
