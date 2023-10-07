import React from 'react'

export const getAllProducts = () =>{
  return fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(console.log);
}
