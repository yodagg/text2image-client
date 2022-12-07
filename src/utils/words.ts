import getRemoteValue from './getRemoteValue'

const words = [
    "这应该不会花太长时间",
    "正在尝试生成图像",
    "请等我一会"
]

export default {
    async await() {
        const words_await = await getRemoteValue('words_await', words)
        const len = words_await.length
        const idx = Math.round(Math.random() * (len - 1))
        return words_await[idx]
    }
}