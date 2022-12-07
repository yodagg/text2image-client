import getCurrentPage from './getCurrentPage'
import getRemoteValue from './getRemoteValue'

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
    return getRemoteValue('default_search_value', defaultValue)
}

