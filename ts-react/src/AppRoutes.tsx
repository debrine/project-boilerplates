import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppContainer } from './containers/AppContainer';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AppContainer />}></Route>
      </Routes>
    </Router>
  );
};
