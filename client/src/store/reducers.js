import themeReducer from './theme/theme.slice'
import filmReducer from './film/film.slice'

const rootReducer = {
    reducer: {
        theme: themeReducer,
        films: filmReducer
    }
}
export default rootReducer