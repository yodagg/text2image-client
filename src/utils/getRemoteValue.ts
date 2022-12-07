import getAppConfig from '../server/appconfig'

export default async (key: string, defaultValue: any) =>{
    try {
        const { data } = await getAppConfig()
        if ( !data[key] ) throw new Error(`${key} is undefined.`)
        return data[key]
    } catch (error) {
        return defaultValue
    }
}
