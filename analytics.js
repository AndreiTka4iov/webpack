function createAnalitics() {
    let counter = 0
    let isDestrpyed = false

    const listener = () => counter++

    document.addEventListener('click' , listener)

    return{
        destroy() {
            document.removeEventListener('click', listener)
        },
        getClicks() {
            if(isDestrpyed) {
                return 'Analitics is destroyed'
            }
            return counter
        }
    }
}

window.analytics = ctreateAnalitycs()