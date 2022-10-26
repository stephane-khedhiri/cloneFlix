import {API_KEY, URI, TIMEOUT} from './../config'
import $ from 'jquery'

class Api {
    _get(path, query = {}){
        query['api_key'] = API_KEY
        return $.ajax({
            url: `${URI}${path}`,
            method:'GET',
            data: query,
            TIMEOUT: TIMEOUT
        })
    }
}

export default Api