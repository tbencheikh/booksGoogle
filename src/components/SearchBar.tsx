/** @format */

import { useState } from 'react';
import { SearchBarProps } from '../interfaces/booktypes';

function SearchBar({ onSearch }: SearchBarProps) {
  const [SearchTerm, setSearchTerm] = useState('');

  function handleSubmit(event: any) {
    event.preventDefault();
    onSearch(SearchTerm);
    setSearchTerm('');
  }

  return (
    <form onSubmit={handleSubmit} className="d-flex">
      <input
        className="form-control me-2"
        type="text"
        value={SearchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for books"
      />
    </form>
  );
}
export default SearchBar;
