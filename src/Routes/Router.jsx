import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import QuizDisplay from '../Pages/QuizDisplay';
import RulesPage from '../Pages/RulesPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="rules" element={<RulesPage />} />
      <Route path="/quiz-display" element={<QuizDisplay />} />
    </Routes>
  );
};

export default Router;
