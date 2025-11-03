import style from './card.module.css'
import CardTitle from './CardTitle';
import CardDropdawn from './CardDropdawn';
import CardRepositoryContent from './CardRepositoryContent';
import CardButton from './CardButton';
import { useState } from 'react';

function Card() {

    const [language, setLanguage] = useState([])
    const [repositorys, setRepositorys] = useState([])
    const [refreshRepository, setRefreshRepository] = useState(0)

    return (
        <div className={style.main_card}>
            <CardTitle/>

            <CardDropdawn 
                setLanguage={setLanguage}/>

            <CardRepositoryContent 
                language={language} 
                repositorys={repositorys} 
                setRepositorys={setRepositorys}
                refreshRepository={refreshRepository}/>

            <CardButton 
                show={repositorys}
                language={language} 
                setLanguage={setLanguage}
                setRefreshRepository={setRefreshRepository}/>
        </div>
    );

}

export default Card;