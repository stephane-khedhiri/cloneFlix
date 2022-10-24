import $ from 'jquery'
import {actionReceivedData,actionRequestingData} from './film.slice'
export default  () => {
    return (dispatch, getState) => {
        dispatch(actionRequestingData())
        $.ajax({
            url:'https://api.themoviedb.org/3/person/popular?api_key=04d47bee312cc1dd313e286e787efd7f&language=en-US&page=1',
            type: 'GET',
            data: {
                apiKey: process.env.API_KEY
            },
            success: (result) => {
                dispatch(actionReceivedData(result.results))
                console.log('test')
            },
            error: (e) => {
                console.log(e)
            }
        })
    }
}