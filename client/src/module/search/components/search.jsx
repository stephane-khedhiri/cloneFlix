import {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import search from './style/search.css';

import { useNavigate } from 'react-router-dom'

const Search = ({to}) => {
    const navigate = useNavigate()
    const inputRef = useRef()
    const [status, setStatus] = useState(false)
    useEffect(() => {
        const value = inputRef.current.value.trim()
        if (status) {
            if (value === '' || value.length < 3) {
                setStatus(false)
                return () => alert('the field must contain 3 characters')

            }
            const path = '/'+to.replace('/','')+'/'+value
            return navigate(path)
        }
    }, [status])

    return (
        <>
            <input ref={inputRef} name={'search'}  placeholder={'search'}/>
            <button type={'submit'} onClick={(e)=>setStatus(true)}>search</button>
        </>
    )
}

Search.propTypes = {
    to: PropTypes.string.isRequired
}

export default Search