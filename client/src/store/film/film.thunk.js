
import MovieDb, {MEDIA_TYPE, TIME_WINDOW} from "../../service/moviedb";
import {actionRequestingData, actionReceivedDataMovie, actionReceivedDataTv} from './film.slice'

export default  () => {
    return (dispatch, getState) => {
        try{
            dispatch(actionRequestingData())
            MovieDb.trending(MEDIA_TYPE.MOVIE, TIME_WINDOW.DAY)
                .then( datas => dispatch(actionReceivedDataMovie(datas.results)))
            dispatch(actionRequestingData())
            MovieDb.trending(MEDIA_TYPE.TV, TIME_WINDOW.DAY)
                .then( datas => dispatch(actionReceivedDataTv(datas.results)))
        }catch (e) {

        }
    }
}