import React from 'react';
import './SearchResultsPage.css';
import ListingSearchPage from '../../components/ListingSearchPage/ListingSearchPage';
import SearchBox from '../../components/Search/SearchBox';
import FilterSection from '../../components/FilterSection/FilterSection';



function SearchResultsPage() {
  return (
    <div>
    <SearchBox />
    <FilterSection />
    <ListingSearchPage />
    </div>
  );
}

export default SearchResultsPage 
