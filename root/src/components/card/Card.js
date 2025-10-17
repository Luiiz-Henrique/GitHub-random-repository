import style from './card.module.css'
import CardTitle from './CardTitle';

function Card() {

return (
    <div className={style.main_card}>
        <CardTitle/>
    </div>
);

}

export default Card;