
const words = [
    '这应该不会花太长时间',
    '尝试生成图像',
    '请等我一会'
]

export default {
    await() {
        const len = words.length
        const idx = Math.round(Math.random() * (len - 1))
        return words[idx]
    }
}