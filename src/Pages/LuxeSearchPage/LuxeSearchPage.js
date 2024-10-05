import React from 'react';
import './LuxeSearchPage.css';
import SearchBox from '../../components/Search/SearchBox';
import LuxeSearch from '../../components/LuxeSearch/LuxeSearch';


const LuxeSearchPage = () => {
  return (
    <div>
       <SearchBox />
       <LuxeSearch />
    </div>
  )
};

export default LuxeSearchPage;
