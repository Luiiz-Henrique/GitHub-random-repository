import style from './card.module.css'

function CardButton({show}) {

return (
    show.length !== 0 &&
    <div className={style.Card_Button}>
        <h3> Button </h3>
    </div>
);

}

export default CardButton;