import { useEffect, useState } from 'react';
import { GoRepoForked, GoStarFill, GoIssueOpened, GoDotFill } from "react-icons/go";
import style from '../card.module.css'
import Loading from '../loading/Loading';

function CardRepositoryContent({language}) {

    const [loading, setLoading] = useState(false)
    const [repositorys, setRepositorys] = useState([])

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
        .catch((err) => console.log(err))
    }

    useEffect (() => {

        setLoading(true)
        if (language.length !== 0){
            findRepository(language)
        }

    }, [language])
    
    

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
                )
            }
        </>
    )
}

export default CardRepositoryContent;