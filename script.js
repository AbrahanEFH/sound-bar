const sounds = [
    'candy',
    'game-over',
    'life',
    'kombat',
    'harry-potter',
    'starwars'
]

sounds.forEach((sound) => {
    const btn = document.createElement('button')
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        document.getElementById(sound).play()
    })

    document.body.appendChild(btn)
})