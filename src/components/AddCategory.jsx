import { useState } from 'react'
import { PropTypes } from "prop-types";

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( {target} ) => {
        setInputValue( target.value )
    }


    //Evento onsubmit
    const onSubmit = (event) => {
      
      //Evitamos la recarga default del enter en form
      event.preventDefault();

      //Mas de un caracter o no hacemos nada
      if(inputValue.trim().length <= 1) return;

      //Desestructurado y agregado del item
      //setCategories( categories => [ inputValue, ...categories ])

      //Mandando al elemento padre
      onNewCategory( inputValue.trim() );

      //Limpiamos el input
      setInputValue('');

      //console.log(inputValue);
    }

    //(event) => onSubmit(event)

  return (

    <form onSubmit={ onSubmit }>
      <input
        type='text'
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={ onInputChange }
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}