import style from './card.module.css'
import CardTitle from './CardTitle';
import CardDropdawn from './CardSearchDropdawn/CardDropdawn';
import CardRepositoryContent from './CardRepositoryContent/CardRepositoryContent';
import CardButton from './CardButton';

function Card() {

return (
    <div className={style.main_card}>
        <CardTitle/>
        <CardDropdawn/>
        <CardRepositoryContent/>
        <CardButton/>
    </div>
);

}

export default Card;