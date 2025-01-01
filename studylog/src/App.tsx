import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './app/main/Main';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <main className="w-full mt-4 px-4 sm:px-10 flex flex-col items-center lg:max-w-[780px] md:mx-auto lg:px-0">
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
