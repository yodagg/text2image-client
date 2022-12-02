import getCurrentPage from './getCurrentPage'

const defaultValue = '湖中，船上，荷花，钢铁侠'

export default () =>{
    const page = getCurrentPage()
    const query = (page as any).options
    return (query && query.sharetext) || defaultValue
}
