import React, {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (initialValue) => {
const [mode, setMode] = useLocalStorage(initialValue)
const body = document.querySelector('body')
useEffect(()=>{
    if(mode){
        body.classList.add('dark-mode')
    } else {
        body.classList.remove('dark-mode')
    }
}, [mode,body])

    return [mode, setMode]
}
export default useDarkMode

