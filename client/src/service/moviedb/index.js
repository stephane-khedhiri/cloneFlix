import Api from "./helpers/api";
import {TIME_WINDOW, MEDIA_TYPE} from './helpers/constants'
class MovieDb extends Api {
    trending(mediaType = 'all', timeWindow = 'day'){
        const path = `/trending/${mediaType}/${timeWindow}`
        return  this._get(path)
    }
    search(query = {}){
        const path = `/search/multi`
        query['include_adult'] = false
        return this._get(path, query)
    }
    genres(mediaType = 'movie'){
        const uri = mediaType === mediaType ?? 'tv'
        const path = `/genre/${uri}/list`
        this._get(path)
    }
    movieById(id){
        const path = `/movie/${id}`
        return this._get(path)
    }
    tvById(id){
        const path = `/tv/${id}`
        return this._get(path)
    }

}
export {TIME_WINDOW, MEDIA_TYPE}
export default new MovieDb()
