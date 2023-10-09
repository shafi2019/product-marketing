import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Componets/Home';
import Category from '../Componets/Category/Index';

const AppRoutes = () => {
  return (
    <Routes>
      <Route 
        path='/'
        element={
        <div >
          <Home />
          <Category />
        </div>}
      >
      </Route>
      <Route path='/:categoryId' element={<Category />}></Route>
    </Routes>
  )
}

export default AppRoutes;