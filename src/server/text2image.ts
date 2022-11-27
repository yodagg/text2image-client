
const baseUrl = 'https://textimage-creative-api-iodkgzdlxy.cn-hongkong.fcapp.run'

export default (prompt: string) =>{
    return uni.request({
        url: baseUrl,
        method: 'POST',
        timeout: 60000 * 3,
        data: JSON.stringify({
            prompt
        })
    })
}
