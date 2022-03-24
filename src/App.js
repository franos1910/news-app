import useFetch from './components/fetch';
import { useState, useEffect } from 'react';
import Header from './layouts/Header';
import { useLocation, Route, Routes } from 'react-router';
import Articles from './layouts/Articles';

function App() {
  const pages = [{
    name:
    {
      pl : "Biznes",
      us : "Business",
      de : "Unternehmen",
    },
    id : "business",
},{
    name :  {
      pl : "Rozrywka",
      us : "Entertainment",
      de : "Unterhaltung",
    },
    id : "entertainment",
},{
  name: {
    pl : "Zdrowie",
    us : "Health",
    de : "Die Gesundheit",
  },
    id : "health",
},{
    name :  {
      pl : "Nauka",
      us : "Science",
      de : "Wissenschaft",
    }, 
    id : "science",
},{
    name :  {
      pl : "Sport",
      us : "Sport",
      de : "Sport",
    },
    id : "sports",
},{
    name :  {
      pl : "Technologia",
      us : "Technology",
      de : "Technologie",
    },
    id : "technology",
}];

  return (
    <div style={{position:"relative"}}>
      <Header pages={pages}/>
      <Routes>
        <Route path="/:lang/:category" element={<Articles/>}/>
    </Routes>
    </div>
  );
}

export default App;
