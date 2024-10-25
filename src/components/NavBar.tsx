/** @format */

import { NavBarProps } from '../interfaces/booktypes';
import SearchBar from './SearchBar';

function NavBar({ onSearch }: NavBarProps) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          BookShelf
        </a>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}
export default NavBar;
