import style from './card.module.css'
import { DiGithubBadge } from 'react-icons/di'

function CardTitle() {

return (
    <div className={style.Card_Title}>
        <DiGithubBadge/>
        <h4> GitHub Repository Finder </h4>
    </div>
);

}

export default CardTitle;