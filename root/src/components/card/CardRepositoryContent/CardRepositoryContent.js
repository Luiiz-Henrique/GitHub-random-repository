import { useEffect, useState } from 'react';
import style from '../card.module.css'

function CardRepositoryContent({language}) {

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
            setRepositorys(data['items'])
        })
        .catch((err) => console.log(err))

        const repository = repositorys[Math.random(100)]

        /*return <div className='Content'>
                    <h5>{repository['name']}</h5>

                    <p> 
                        {repository['description']}
                    </p>

                    <ul>
                        <li>
                            {repository['language']}
                        </li>
                        <li>
                            {repository['stargazers_count']}
                        </li>
                        <li>
                            {repository['forks_count']}
                        </li>
                        <li>
                            {repository['open_issues_count']}
                        </li>
                    </ul>
                </div>*/
    }

    return (
        <div className={style.Card_RepositoryContent}>
            { 
                language ? findRepository('assembly') : <p>Escolha uma linguagem</p>
            }
        </div>
    )

}

export default CardRepositoryContent;