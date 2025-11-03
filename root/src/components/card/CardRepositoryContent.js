import { useEffect, useState } from 'react';
import { GoRepoForked, GoStarFill, GoIssueOpened, GoDotFill } from "react-icons/go";
import style from './card.module.css'
import Loading from '../loading/Loading';

function CardRepositoryContent({language, repositorys, setRepositorys, refreshRepository}) {

    const [loading, setLoading] = useState(false)

    function findRepository (language) {
        fetch(`https://api.github.com/search/repositories?per_page=100&page=${Math.random(10)}&q=language:${language}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/vnd.github+json',
        },
        })
        .then((resp) => resp.json())
        .then( (data) => {
            const numberRepository = Math.floor(Math.random() * 101)
            setRepositorys(data['items'][numberRepository])
            setLoading(false)
        })
        .catch((err) => {
            console.log(err)
            setLoading(false)
            setRepositorys(false)
        })
    }

    useEffect (() => {

        
        setLoading(true)
        setRepositorys([])
        if (language.length !== 0){
            findRepository(language)
        }

    }, [language, refreshRepository])
    
    

    return (
        <>
            { 
                language.length === 0 ? 
                    <div className={style.Card_RepositoryContentEmpty}>
                        <p>Por favor selecione a linguagem</p> 
                    </div> : 
                    loading && <Loading/>
            }
            {
                !loading && (
                    
                        repositorys ?
                            <div className={style.Card_RepositoryContent}>
                                <h5>{repositorys['name']}</h5>

                                <p> 
                                    {repositorys['description']}
                                </p>

                                <ul>
                                    <li>
                                        <GoDotFill/>
                                        {repositorys['language']}
                                    </li>
                                    <li>
                                        <GoStarFill/>
                                        {repositorys['stargazers_count']}
                                    </li>
                                    <li>
                                        <GoRepoForked/>
                                        {repositorys['forks_count']}
                                    </li>
                                    <li>
                                        <GoIssueOpened/>
                                        {repositorys['open_issues_count']}
                                    </li>
                                </ul>
                            </div>
                        :
                            <div className={style.Card_RepositoryContentError}>
                                <p> Erro ao buscar repositório</p>
                            </div>
                )
            }
        </>
    )
}

export default CardRepositoryContent;