
<script setup lang="ts">
import { ref, computed } from 'vue'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import text2image from '../../server/text2image'
import words from '../../utils/words'

const enter = ref('moonlight on the lake')
const images = ref([])
const status = ref('ready') // ready loading result
const clock = ref(0)
const awaitText = ref('')

onShareAppMessage(() =>{
  return {
    title: '文本画图',
    path: '/pages/index/index'
  }
})

onShareTimeline(() =>{
  return {
    title: '文本画图',
    path: '/pages/index/index'
  }
})

async function handleGenImage() {

  const value = enter.value.trim()

  // 加载状态禁止重复点击
  if (status.value === 'loading') return


  // 空文本禁止点击
  if (!value) return


  // 修改loading
  status.value = 'loading'


  // 启动计时器
  clock.value = 0
  const timer = setInterval(() => clock.value += 1, 1000)


  // 生成等待文案
  awaitText.value = words.await()


  try {
    const result = await text2image(value)
    const { code, message, data } = (result as any).data

    if ( code === -1 ) throw new Error(message)

    images.value = data
    status.value = 'result'
  } catch (error) {
    const message = (error as any).message
    uni.showToast({
      icon: 'none',
      title: message
    })
    status.value = 'ready'
  } finally {
    clearInterval(timer)
  }
}


function handlePreview(item: string) {
  uni.previewImage({
    current: item,
    urls: images.value
  })
}

</script>
<template src="./template.html"></template>
<style src="./style.css"></style>