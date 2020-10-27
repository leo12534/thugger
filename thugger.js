    const thuggy = document.querySelector('.thuggy')
    const keys = document.querySelectorAll('.key')
    const key = document.querySelector('.key')
    let vh = window.innerHeight * 0.01;


    function playAudioKey(e) {
      const keyCode = document.querySelector(`.key[data-key="${e.keyCode}"]`)
      const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)

      // Play The Adlib
      if (!audio) return;
      audio.currentTime = 0
      audio.play()

      // Add Playing Border Class
      keyCode.classList.add('playing')

      // Activate Thuggy
      activateThuggy()

    }

    function playAudioClick(e) {
      keys.forEach((key) => {
        key.addEventListener('click', (function () {
          const audioKey = key.getAttribute('data-key');
          const audio = document.querySelector(`audio[data-key="${audioKey}"]`);

          // Play The Adlib
          if (!audio) return;
          audio.currentTime = 0;
          audio.play();

          // Add Border Class
          key.classList.add('playing');

          // Activate Thuggy
          activateThuggy()
        }))

      })
    }

    function removeTransition(e) {
      if (e.propertyName !== 'transform') return

      keys.forEach((key) => {
        key.classList.remove('playing')

      })

    }

    function activateThuggy(e) {
      thuggy.classList.add('activate-thuggy')
      setTimeout(() => {
        thuggy.classList.remove('activate-thuggy')
      }, 1000);
    }

    function updateVH() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    document.documentElement.style.setProperty('--vh', `${vh}px`);


    window.addEventListener('keydown', playAudioKey)
    window.addEventListener('click', playAudioClick)
    window.addEventListener('transitionend', removeTransition)
    window.addEventListener('resize', updateVH);



