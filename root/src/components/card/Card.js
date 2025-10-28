import style from './card.module.css'
import CardTitle from './CardTitle';
import CardDropdawn from './CardSearchDropdawn/CardDropdawn';
import CardRepositoryContent from './CardRepositoryContent/CardRepositoryContent';
import CardButton from './CardButton';
import { useState } from 'react';

function Card() {

    const [language, setLanguage] = useState([])

    return (
        <div className={style.main_card}>
            <CardTitle/>
            <CardDropdawn setLanguage={setLanguage}/>
            <CardRepositoryContent language={language}/>
            <CardButton/>
        </div>
    );

}

export default Card;