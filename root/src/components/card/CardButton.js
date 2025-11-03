import { useState } from 'react'
import style from './card.module.css'

function CardButton({show, setRefreshRepository, setLanguage, language}) {

    const refreshRepository = (e) => {
        e.preventDefault()
        setRefreshRepository((prev) => prev + 1)
        show.length = 0
    }

    const refreshAplication = (e) => {
        e.preventDefault()
        setLanguage([])
        setRefreshRepository((prev) => prev + 1)
    }
     
    return (
        <>
            {
                show.length !== 0 && show ?
                    <div className={style.Card_ButtonRefresh} onClick={refreshRepository}>
                        <h3> Atualizar </h3>
                    </div>
                :   
                (language.length > 0 && !show) ?
                    <div className={style.Card_ButtonError} onClick={refreshAplication}>
                        <h3> Tente novamente </h3>
                    </div>
                :
                <></>
            }
        </> 
    );
}

export default CardButton;