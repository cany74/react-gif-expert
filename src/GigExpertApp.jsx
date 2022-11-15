import { useState } from 'react';
import { AddCategory, GifGrid } from './components'; // el index.js

export const GigExpertApp = () => {
  const [categories, setCategories] = useState([]);
   const onAddCategory = (text) => {
    setCategories([...categories, text]);
    console.log(categories);
  };
  return (
    <>
        <h1>GigExpertApp</h1>
        <AddCategory setCategories= { onAddCategory } />
        {
          categories.map((category) => (
            <GifGrid key= { category } category= { category } />
          ))
        }
    </>
  )
}
