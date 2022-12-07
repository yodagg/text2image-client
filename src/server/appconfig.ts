
const baseUrl = 'https://creative-access.oss-cn-hongkong.aliyuncs.com/text2image/config.json'
let cache: any = null

export default async () =>{
    try {
        if ( !cache ) {
            cache = await uni.request({
                url: baseUrl,
                method: 'GET',
                timeout: 1000 * 5
            })
        }    
    } catch (error) {
        cache = null
    } finally {
        return cache
    }
}
