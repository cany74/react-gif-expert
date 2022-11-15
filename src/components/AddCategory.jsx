import { useState } from "react";

export const AddCategory = ( { setCategories } ) => {
  const  [ inputValue, setInputValue ] = useState("");

  const onInputChange = ({target}) => {
    const newValue = target.value;
    //console.log(newValue);
    setInputValue(newValue);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //setCategories(categories => [inputValue, ...categories]);
    setCategories(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
        <input 
            type='text'
            placeholder='buscar gifs'
            value= { inputValue }
            // opcion1
            onChange = {onInputChange}
            // opcion2
            // onChange = {(e) => onInputChange(e)}
        />
    </form>
  )
}
