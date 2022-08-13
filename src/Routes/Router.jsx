import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ResultPageGOT from '../Components/ResultPageGOT';
import ResultPagePanchayat from '../Components/ResultPagePanchayat';
import HomePage from '../Pages/HomePage';
import QuizDisplay from '../Pages/QuizDisplay';
import RulesPage from '../Pages/RulesPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="rules" element={<RulesPage />} />
      <Route path="/quiz-display" element={<QuizDisplay />} />
      <Route path="/results-got" element={<ResultPageGOT />} />
      <Route path="/results-panchayat" element={<ResultPagePanchayat />} />
    </Routes>
  );
};

export default Router;
