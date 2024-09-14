const Display = {
    show: (element) => element.classList.remove('hidden'),
    hide: (element) => element.classList.add('hidden'),
    toggle: (element) => element.classList.toggle('hidden')
}

export default Display;