import getCurrentPage from './getCurrentPage'
import getAppConfig from '../server/appconfig'

const defaultValue = '小狗在吃草，Q版'

// 分享参数
export const getShareEnterValue = () =>{
    let page: any = getCurrentPage()
    if ( page.$page ) {
        page = page.$page
    }
    const query = page.options
    return (query && query.sharetext) || ''
}

// 远程配置
export const getConfigEnterValue = async () =>{
    try {
        const { data } = await getAppConfig()
        return data.default_search_value    
    } catch (error) {
        return defaultValue
    }
}

