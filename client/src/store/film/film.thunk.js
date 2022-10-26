
import MovieDb, {MEDIA_TYPE, TIME_WINDOW} from "../../service/moviedb";
import {actionRequestingData, actionReceivedDataMovie, actionReceivedDataTv} from './film.slice'
import {actionAddError} from './../error/error.slice'

export default  () => {
    return (dispatch, getState) => {

        dispatch(actionRequestingData())

        MovieDb.trending(MEDIA_TYPE.MOVIE, TIME_WINDOW.DAY)
            .then(datas => dispatch(actionReceivedDataMovie(datas.results)))
            .catch(e =>{
                e.responseJSON['action'] = 'actionReceivedDataMovie'
                dispatch(actionAddError(e.responseJSON))
                }
            )

        MovieDb.trending(MEDIA_TYPE.TV, TIME_WINDOW.DAY)
            .then(datas => dispatch(actionReceivedDataTv(datas.results)))
            .catch(e => {
                e.responseJSON['action'] = 'actionReceivedDataTv'
                dispatch(actionAddError(e.responseJSON))
            })
    }

}