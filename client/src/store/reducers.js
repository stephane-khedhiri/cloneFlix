import themeReducer from './theme/theme.slice'
import filmReducer from './film/film.slice'
import errorSlice from "./error/error.slice";

const rootReducer = {
    reducer: {
        theme: themeReducer,
        films: filmReducer,
        errors: errorSlice,
    }
}
export default rootReducer