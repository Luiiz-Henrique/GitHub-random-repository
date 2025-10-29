import data from '../../data/languages.json'
import Select from 'react-select'

function CardDropdawn({setLanguage}) {

    const customStyles = {

      container: (provided) => ({
        ...provided,
        margin: '0 10px 20px 10px',
      }),


      control: (provided, state) => ({
        ...provided,
        backgroundColor: 'none',
        border: state.isFocused ? '2.5px solid rgb(26, 7, 27)' : '2.5px solid rgb(26, 7, 27)',
        boxShadow: state.isFocused ? 'none' : 'none',
        '&:hover': {
          border: '2.5px solid rgb(26, 7, 27)',
        },
      }),

      option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? 'rgb(26, 7, 27)' : state.isHovered ? '#e9ecef' : '#fff',
        color: state.isSelected ? '#fff' : '#333',
      }),

    };

    return (
        <Select
          label='Selecionar Linguagem'
          options={data.map((x)=>(
            {value: x.title, label: x.value}
          ))}
          onChange={(e) => setLanguage(e.value) }
          styles={customStyles}
        />
    )

}

export default CardDropdawn;