import style from '../card.module.css'

function CardRepositoryContent() {

    return (
        <div className={style.Card_RepositoryContent}>
            <h5>Título do repositório</h5>

            <p> 
                Descrição do repositório descrição do repositório descrição do 
                repositório descrição do repositório descrição do repositório descrição 
                do repositório descrição do repositório descrição do repositório descrição 
                do repositório descrição do repositório descrição do repositório descrição do 
                repositório
            </p>

            <ul>
                <li>
                    Language
                </li>
                <li>
                    Stars
                </li>
                <li>
                    Forks
                </li>
                <li>
                    Open Issues
                </li>
            </ul>
        </div>
    )

}

export default CardRepositoryContent;