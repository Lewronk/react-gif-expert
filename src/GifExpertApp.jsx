import {useState} from 'react';
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( [ 'Jujutsu Kaizen' ] );

    const onAddCategory = ( newCategory ) => {

        //Filtremos el contenido antes de iniciarlo
        if( categories.includes(newCategory) ) return;
        
        //Nuevo elemento al listado de categorias
        setCategories([ newCategory , ...categories])
        
        //setCategories( cat => [...cat, 'Warcraft'])
    }

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory
            //setCategories={setCategories}
            onNewCategory={ onAddCategory }
        />

        {/* Listado de Gif */}
        <button onClick={ onAddCategory }>Agregar</button>
        {
            categories.map( categoria => (

                <GifGrid
                    key={categoria}
                    category={categoria}
                />
            ))
        }
    </>
  )
}