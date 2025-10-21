import { useEffect, useState } from 'react';
import data from '../../../data/languages.json'
import Select from 'react-select'

function CardDropdawn() {

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

    const [categories, setCategories] = useState([])

    data.forEach((x, y) => {

      const label = data[y].title
      const value = data[y].title
      setCategories({label: label, value: value})
    })

    console.log(categories)

    const option = [{value:"sala", label:"sala"}]

    return (
        <Select
          options={option}
          styles={customStyles}
        />
    )

}

export default CardDropdawn;