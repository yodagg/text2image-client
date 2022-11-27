
const words = [
    'This should not take long.',
    'Trying to generate images.',
    'Please wait for me.'
]

export default {
    await() {
        const len = words.length
        const idx = Math.round(Math.random() * (len - 1))
        return words[idx]
    }
}