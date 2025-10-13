import style from './HelloWord.module.css'

function HelloWord({name}) { // passado como parâmetro "props", todos os valores tenho que passar como
                            // objeto, por exemplo: function exemplo (props) { props.variavel1, props.variavel2, ..., props.variaveln}. 
                            // Com o uso das {} no parametro posso evitar o uso de props e deixa-lo de usar como objeto, como por exemplo:
                            // function exemplo ({vairavel1, variavel2, ..., variaveln}) { variavel1, variavel2, ..., variaveln}

    return (
        <h1 className={style.Testtitle}>
            Hello, {name}!
        </h1>
    );
 
}

export default HelloWord;