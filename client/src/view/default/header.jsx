
import style from './style/header.css'
import Navbar from "./navbar";
import {Search} from './../../module/search'

const Header = () => {
    return (
        <header>
            <nav className={style.nav}>
                <Navbar links={['home', 'tv', 'film']}/>
                <Search to={'/search'}/>
            </nav>
        </header>
    )
}

export default Header